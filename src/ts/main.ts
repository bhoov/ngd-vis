import * as d3 from 'd3'
import { UId } from './util/UId'
import { ContourPlot } from './vis/ContourPlot'
import { D3Sel } from './util/xd3'
import { GolfHole1D } from './vis/GolfHole1D'
import { GolfLosses } from './vis/GolfLosses'
import { GolfXDist } from './vis/GolfXDist'
import { GolfBall } from './vis/GolfBall'
import * as R from 'ramda'
import { SimpleEventHandler } from './util/SimpleEventHandler'
import { ManualUpdater } from './vis/ManualUpdater'
import { landscapes, Landscape } from './GolfLandscapes'

const toFixed = R.curry((ndigits, x) => x.toFixed(ndigits))
const toQ = toFixed(1)
const toEta = toFixed(4)


function plotQuiverGraph() {
    const vis1 = d3.select('#vis1')
    const sels = {
        quiverPlot: vis1.select('#chart'),
        qId: vis1.select('#q-val'),
        etaId: vis1.select('#eta-val'),
        qSlider: vis1.select('#q-slider'),
        etaSlider: vis1.select('#eta-slider'),
        hessType: vis1.select('#hess-type')
    }

    const vizs = {
        graph: new ContourPlot(sels.quiverPlot)
    }

    const defaults = {
        // Note to also change the default value in the html file!
        q: 0,
        eta: 0.01
    }

    const scales = {
        q: d3.scaleLinear().range([0, 10]).domain([0, 1]),
        eta: d3.scaleLinear().range([1, 1000]).domain([Math.pow(10, -5), 0.6])
    }

    // Initialize graph parameters to match the defaults
    vizs.graph.q(defaults.q)
    vizs.graph.eta(defaults.eta)
    sels.qSlider.property('value', scales.q(defaults.q))
    sels.etaSlider.property('value', scales.eta(defaults.eta))

    sels.qId.text(toQ(defaults.q))
    sels.etaId.text(toEta(defaults.eta))

    sels.qSlider.on('input', function () {
        const me = d3.select(this)
        const v = scales.q.invert(+me.property('value'));
        vizs.graph.q(v);
        sels.qId.text(`${toQ(v)}`)
    })

    sels.etaSlider.on('input', function () {
        const me = d3.select(this)
        const v = scales.eta.invert(me.property('value'));
        vizs.graph.eta(v)
        sels.etaId.text(`${toEta(v)}`)
    })

    sels.hessType.on('input', function () {
        const self = d3.select(this)
        const v = self.property('value')
        vizs.graph.setUpdater(v)
    })
}

function plotGolfHole3Ball() {
    const vis2 = d3.select("#vis2");
    const sels = {
        chart: vis2.select('#chart'),
        chartXDist: vis2.select('#chart-xdist'),
        chartLosses: vis2.select('#chart-losses'),
        landscapeSelector: vis2.select('.landscape-select')
    }

    const eventHandler = new SimpleEventHandler(<Element>vis2.node())
    const vizs = {
        graph: new GolfHole1D(sels.chart, eventHandler, {}, UId.uid()),
        chartXDist: new GolfXDist(sels.chartXDist, eventHandler),
        chartLosses: new GolfLosses(sels.chartLosses, eventHandler)
    }

    interface GolfDefaults {
        landscape: string
        qs: number[]
        classNames: string[]
        etas?: number[]
    }

	// Corresponds to qs = [0, 0.5, 1]
	const defaultEta = {
		seagull: [0.005, 0.005, 0.005],
		hole: [0.005, 0.005, 0.005],
		steps: [0.005, 0.005, 0.005],
		bowl: [0.03, 0.03, 0.03],
		deep_net: [0.01, 0.01, 0.01],
	}


    const defaults: GolfDefaults = {
        landscape: "seagull",
        qs: [0, 0.5, 1],
        classNames: ['golf-ball-sgd', 'golf-ball-sngd', 'golf-ball-ngd'], // Don't change these unless you want to play with CSS!!
    }
    defaults.etas = defaultEta[defaults.landscape]

    const defaultLandscape = landscapes[defaults.landscape]

    //@ts-ignore
    const defaultBalls = d3.zip(defaults.qs, defaults.etas, defaults.classNames).map((x) => new GolfBall(new ManualUpdater(defaultLandscape.f, defaultLandscape.df, x[0], x[1]), x[2]))

    vizs.graph.data(defaultBalls)

    // Attach golfball info to loss tracker
    eventHandler.bind('loss-click', (e) => {
        vizs.chartXDist.clearPaths()
        vizs.chartLosses.clearPaths()
    })

    // Configure html page to work with defaults
    sels.landscapeSelector.property('value', defaults.landscape)
    vizs.graph.landscape(landscapes[defaults.landscape])

    let runningStreams = []

    // Assign streams
    const assignStreams = (graph:GolfHole1D, currentStreams=[]) => {
        const streams = graph.data().map(b => b.stream)

        const plotter = {
            next: d => {
                vizs.chartXDist.plotPath(d, graph.scales.base2math.x.invert)
                vizs.chartLosses.plotPath(d, graph.scales.base2loss)
            }
        }

        currentStreams.forEach(s => s.unsubscribe())

        const activatedStreams = streams.map(s => {
            return s.subscribe(plotter)
        })
        return activatedStreams
    }

    // Gather interactivity for the golf ball plot
    sels.landscapeSelector.on('input', function () {
        const self = d3.select(this)
        const v = self.property('value')
        vizs.chartLosses.resetXrange_()
        vizs.chartXDist.resetXrange_()
        vizs.graph.landscape(landscapes[v])
        vizs.graph.dataFromBase(vizs.graph.dataToBase_())
        runningStreams = assignStreams(vizs.graph, runningStreams)
    })
    runningStreams = assignStreams(vizs.graph, runningStreams)
}

function plotGolfHoleSlider() {
    const vis3 = d3.select("#vis3");

    const sels = {
        chart: vis3.select('#chart'),
        chartLosses: vis3.select('#chart-losses'),
        chartXDist: vis3.select('#chart-xdist'),
        qId: vis3.select('#q-val'),
        etaId: vis3.select('#eta-val'),
        qSlider: vis3.select('#q-slider'),
        etaSlider: vis3.select('#eta-slider'),
        landscapeSelector: vis3.select('.landscape-select')
    }

    const eventHandler = new SimpleEventHandler(<Element>vis3.node())

    const vizs = {
        graph: new GolfHole1D(sels.chart, eventHandler, { maxIter: 1.5e3 }, UId.uid()),
        chartLosses: new GolfLosses(sels.chartLosses, eventHandler),
        chartXDist: new GolfXDist(sels.chartXDist, eventHandler)
    }

    const defaults = {
        // Note to also change the default value in the html file!
        landscape: "seagull",
        q: 0.5,
        eta: 0.01
    }

    // Attach golfball info to loss tracker
    eventHandler.bind('loss-click', (e) => {
        vizs.chartXDist.clearPaths()
        vizs.chartLosses.clearPaths()
    })

    // Put data into viz
    vizs.graph.data([new GolfBall(new ManualUpdater(landscapes.hole.f, landscapes.hole.df, defaults.q, defaults.eta), "golf-ball")])

    // const etaRange = [-5, 2].map(x => Math.pow(10, x))
    const etaRange = [-3, 0].map(x => Math.pow(10, x))
    const scales = {
        q: d3.scaleLinear().range([0, 10]).domain([0, 1]),
        eta: d3.scaleLog().range([1, 1000]).domain(etaRange).base(10)
    }

    // Initialize graph parameters to match the defaults
    vizs.graph.landscape(landscapes[defaults.landscape])
    sels.landscapeSelector.property('value', defaults.landscape)

    sels.qSlider.property('value', scales.q(defaults.q))
    sels.etaSlider.property('value', scales.eta(defaults.eta))
    sels.qId.text(toQ(defaults.q))
    sels.etaId.text(toEta(defaults.eta))

    // Assign streams
    let runningStreams = []
    const assignStreams = (graph:GolfHole1D, currentStreams=[]) => {
        const streams = graph.data().map(b => b.stream)

        const plotter = {
            next: d => {
                vizs.chartXDist.plotPath(d, graph.scales.base2math.x.invert)
                vizs.chartLosses.plotPath(d, graph.scales.base2loss)
            }
        }

        currentStreams.forEach(s => s.unsubscribe())

        const activatedStreams = streams.map(s => {
            return s.subscribe(plotter)
        })

        return activatedStreams
    }

    // Adjust slider reactivity
    sels.qSlider.on('input', function () {
        const me = d3.select(this)
        const v = scales.q.invert(me.property('value'));
        vizs.graph.q(v)
        sels.qId.text(`${toQ(v)}`)
    })

    sels.etaSlider.on('input', function () {
        const me = d3.select(this)
        const v = scales.eta.invert(me.property('value'));
        vizs.graph.eta(v)
        sels.etaId.text(`${toEta(v)}`)
    })

    sels.landscapeSelector.on('input', function () {
        const self = d3.select(this)
        const v = self.property('value')
        vizs.chartLosses.resetXrange_()
        vizs.chartXDist.resetXrange_()
        vizs.graph.landscape(landscapes[v])
        vizs.graph.dataFromBase(vizs.graph.dataToBase_())
        runningStreams = assignStreams(vizs.graph, runningStreams)
    })
    runningStreams = assignStreams(vizs.graph, runningStreams)
}

export function main() {
    console.log("RUNNING");
    plotQuiverGraph();
    plotGolfHole3Ball();
    plotGolfHoleSlider();
}

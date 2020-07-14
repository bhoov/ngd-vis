import * as d3 from 'd3'
import { UId } from './util/UId'
import { ContourPlot } from './vis/GeneralContourPlot'
import { Updater2D } from './Updater2D'
import { D3Sel, linspace } from './util/xd3'
import { GolfHole1D } from './vis/GolfHole1D'
import { GolfLosses } from './vis/GolfLosses'
import { GolfXDist } from './vis/GolfXDist'
import { GolfBall } from './vis/GolfBall'
import { SimpleNet } from "./vis/SimpleNet"
import * as R from 'ramda'
import { SimpleEventHandler } from './util/SimpleEventHandler'
import { ManualUpdater } from './vis/ManualUpdater'
import { landscapes } from './GolfLandscapes'
import { landscapes2d } from './Landscapes2D'
import { Array } from './types'
import { QuadraticPlots } from "./vis/QuadraticPlots"
import { LossSurface2D } from "./vis/LossSurface2D"
import * as nj from "numjs"

const toFixed = R.curry((ndigits, x) => x.toFixed(ndigits))
const toQ = toFixed(1)
const toEta = toFixed(4)

function plotJaggedLoss2D() {
    const vis = d3.select("#vis-2d-loss")
    const eventHandler = new SimpleEventHandler(<Element>vis.node())
    const sels = {
        plot: vis.select("#loss-2d")
    }

    const vizs = {
        plot: new LossSurface2D(sels.plot, eventHandler)
    }
}

function plotQuadraticFuncs() {
    const vis = d3.select("#vis-quad")
    const eventHandler = new SimpleEventHandler(<Element>vis.node())

    const sels = {
        quadPlot: vis.select("#quad-plot")
    }

    const vizs = {
        quadPlot: new QuadraticPlots(sels.quadPlot, eventHandler)
    }

    vizs.quadPlot.data([1 / 1.4, 1, 1.4])
}

function plotQuiverGraph() {
    const vis1 = d3.select('#vis1')
    const sels = {
        quiverPlot: vis1.select('#chart'),
        qId: vis1.select('#q-val'),
        etaId: vis1.select('#eta-val'),
        qSlider: vis1.select('#q-slider'),
        etaSlider: vis1.select('#eta-slider'),
        hessType: vis1.select('#hess-type'),
        simpleNet: vis1.select("#simple-net-container"),
    }
    const eventHandler = new SimpleEventHandler(<Element>vis1.node())

    const vizs = {
        graph: ContourPlot.fromLandscape(sels.quiverPlot, eventHandler, landscapes2d.SimpleNet2D),
        // graph: ContourPlot.fromLandscape(sels.quiverPlot, eventHandler, landscapes2d.Elliptical), // BROKEN Why?
        simpleNet: new SimpleNet(sels.simpleNet, eventHandler)
    }

    const defaults = {
        // Note to also change the default value in the html file!
        q: 0,
        eta: 0.05
    }

    const scales = {
        q: d3.scaleLinear().range([0, 10]).domain([0, 1]),
        eta: d3.scaleLinear().range([1, 1000]).domain([Math.pow(10, -5), 0.6])
    }

    // Add center line
    const xrange = linspace(0.6, 1.6, vizs.graph.options.m)
    const eps = 0.0001
    const fitLine = x => 1 / (x + eps);
    const centerContour = d3.line()
        .x(d => vizs.graph.scales.x.clamp(true)(d[0]))
        .y(d => vizs.graph.scales.y.clamp(true)(fitLine(d[0])))

    const mainFit = vizs.graph.base
        .append("path")
        .classed("main-fit", true)
        // i doesn't matter, need filler for line to work
        .attr("d", centerContour(xrange.map((x, i) => [x, i])))

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

    // Catch event of step
    eventHandler.bind(ContourPlot.events.stepAdded, (v: Array) => {
        vizs.simpleNet.setState(v)
    })
}

function plotGolfHole3Ball() {
    const vis2 = d3.select("#vis2");
    const sels = {
        chart: vis2.select('#chart'),
        chartXDist: vis2.select('#chart-xdist'),
        chartLosses: vis2.select('#chart-losses'),
        landscapeSelector: vis2.select('.landscape-select'),
    }

    const eventHandler = new SimpleEventHandler(<Element>vis2.node())
    const vizs = {
        graph: new GolfHole1D(sels.chart, eventHandler, {}, UId.uid()),
        chartXDist: new GolfXDist(sels.chartXDist, eventHandler),
        chartLosses: new GolfLosses(sels.chartLosses, eventHandler),
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
    const assignStreams = (graph: GolfHole1D, currentStreams = []) => {
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
    const assignStreams = (graph: GolfHole1D, currentStreams = []) => {
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

function testing() {
    console.log("TEST");
    // let A = nj.array([[1,2], [2,1]])
    // let v = nj.array([1,3])
    // const up = new Updater2D()

    // console.log("LR: ", up.lr(v));
    // console.log("Gradient: ", up.gradient(v));
    // console.log("ERR: ", up._f(v));

    // console.log("NJ Array Inception: ", nj.array(v))
    // // let v = nj.array([1,2])
    // let v2 = nj.array([4,5])
    // console.log(v);

    // //@ts-ignore
    // console.log(nj.dot(A, v));

    console.log("END TEST");
}

export function main() {
    testing()

    // console.log(nj.multiply(v, v2));
    plotQuadraticFuncs();
    plotQuiverGraph();
    // plotGolfHole3Ball();
    // plotGolfHoleSlider();
    // plotJaggedLoss2D();
}

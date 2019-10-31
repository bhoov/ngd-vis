import * as d3 from 'd3'
import { ContourPlot } from './vis/ContourPlot'
import { D3Sel } from './util/xd3'
import { GolfHole1D, func, dFunc } from './vis/GolfHole1D'
import { GolfXDist, GolfLosses } from './vis/GolfLosses'
import { GolfBall } from './vis/GolfBall'
import * as R from 'ramda'
import { SimpleEventHandler } from './util/SimpleEventHandler'
import { ManualUpdater } from './vis/ManualUpdater'

const toFixed = R.curry((ndigits, x) => x.toFixed(ndigits))
const toQ = toFixed(2)
const toEta = toFixed(6)

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
		eta: 0.1
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

function plotGolfHole() {
	const vis2 = d3.select("#vis2");

	const sels = {
		chart: vis2.select('#chart'),
		chartXDist: vis2.select('#chart-xdist'),
		chartLosses: vis2.select('#chart-losses'),
	}

	const eventHandler = new SimpleEventHandler(<Element>vis2.node())

	const vizs = {
		graph: new GolfHole1D(sels.chart, eventHandler),
		chartXDist: new GolfXDist(sels.chartXDist, eventHandler),
		chartLosses: new GolfLosses(sels.chartLosses, eventHandler)
	}

	eventHandler.bind('loss-click', (e) => {
		vizs.chartXDist.clearPaths()
		vizs.chartLosses.clearPaths()
	})

	// Attach golfball info to loss tracker
	const streams = vizs.graph.data().map(b => b.stream)
	const plotter = {
		next: d => {
			vizs.chartXDist.plotPath(d)
			vizs.chartLosses.plotPath(d)
		}
	}

	streams.forEach(s => s.subscribe(plotter))
}

function plotGolfHoleSlider() {
	const vis3 = d3.select("#vis3");

	const sels = {
		chart: vis3.select('#chart'),
		losses: vis3.select('#chart-losses'),
		qId: vis3.select('#q-val'),
		etaId: vis3.select('#eta-val'),
		qSlider: vis3.select('#q-slider'),
		etaSlider: vis3.select('#eta-slider'),
	}

	const eventHandler = new SimpleEventHandler(<Element>vis3.node())

	const vizs = {
		graph: new GolfHole1D(sels.chart, eventHandler, {maxIter: 1e4}),
	}

	const defaults = {
		// Note to also change the default value in the html file!
		q: 0.5,
		eta: 0.1
	}

	// Put data into viz
	vizs.graph.data([new GolfBall(new ManualUpdater(func, dFunc, defaults.q, defaults.eta), "golf-ball")])

	// const etaRange = [-5, 2].map(x => Math.pow(10, x))
	const etaRange = [-3, 2].map(x => Math.pow(10, x))
	const scales = {
		q: d3.scaleLinear().range([0, 10]).domain([0, 1]),
		eta: d3.scaleLog().range([1, 1000]).domain(etaRange).base(10)
	}

	// Initialize graph parameters to match the defaults
	sels.qSlider.property('value', scales.q(defaults.q))
	sels.etaSlider.property('value', scales.eta(defaults.eta))
	sels.qId.text(toQ(defaults.q))
	sels.etaId.text(toEta(defaults.eta))

	sels.qSlider.on('input', function () {
		const me = d3.select(this)
		const v = scales.q.invert(me.property('value'));
		vizs.graph.dataHead.q(v)
		console.log(v);
		sels.qId.text(`${toQ(v)}`)
	})

	sels.etaSlider.on('input', function () {
		const me = d3.select(this)
		const v = scales.eta.invert(me.property('value'));
		vizs.graph.dataHead.eta(v)
		sels.etaId.text(`${toEta(v)}`)
	})
}

export function main() {
	console.log("RUNNING");
	plotQuiverGraph();
	plotGolfHole();
	plotGolfHoleSlider();
}


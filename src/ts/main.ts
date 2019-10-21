import * as d3 from 'd3'
import { ContourPlot } from './vis/ContourPlot'
import { D3Sel } from './util/xd3'
import { MultiParabola } from './vis/MultiParabola'
import { GolfHole1D } from './vis/GolfHole1D'
import * as R from 'ramda'

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
		q: d3.scaleLinear().domain([0, 10]).range([0, 1]),
		eta: d3.scalePow().domain([1, 1000]).range([Math.pow(10, -5), 0.6]).exponent(3)
	}

	// Initialize graph parameters to match the defaults
	vizs.graph.q(defaults.q)
	vizs.graph.eta(defaults.eta)
	// sels.qSlider.property('value', scales.q.invert(defaults.q))
	// sels.etaSlider.property('value', scales.q.invert(defaults.eta))
	sels.qId.text(toQ(defaults.q))
	sels.etaId.text(toEta(defaults.eta))

	sels.qSlider.on('input', function () {
		const me = d3.select(this)
		const v = scales.q(+me.property('value'));
		vizs.graph.q(v);
		sels.qId.text(`${toQ(v)}`)
	})

	sels.etaSlider.on('input', function () {
		const me = d3.select(this)
		const v = scales.eta(me.property('value'));
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
		qId: vis2.select('#q-val'),
		etaId: vis2.select('#eta-val'),
		qSlider: vis2.select('#q-slider'),
		etaSlider: vis2.select('#eta-slider'),
	}



	const vizs = {
		graph: new GolfHole1D(sels.chart)
	}

	const defaults = {
		// Note to also change the default value in the html file!
		q: 0,
		eta: 0.00001
	}

	const etaRange = [-5, 2].map(x => Math.pow(10, x))
	const scales = {
		q: d3.scaleLinear().domain([0, 10]).range([0, 1]),
		eta: d3.scalePow().domain([1, 1000]).range(etaRange).exponent(5)
	}

	// Initialize graph parameters to match the defaults
	// vizs.graph.q(defaults.q)
	// vizs.graph.eta(defaults.eta)
	sels.qId.text(toQ(defaults.q))
	sels.etaId.text(toEta(defaults.eta))


	sels.qSlider.on('input', function () {
		const me = d3.select(this)
		const v = scales.q(me.property('value'));
		// vizs.graph.q(v);
		console.log(v);
		sels.qId.text(`${toQ(v)}`)
	})

	sels.etaSlider.on('input', function () {
		const me = d3.select(this)
		const v = scales.eta(me.property('value'));
		// vizs.graph.eta(v)
		sels.etaId.text(`${toEta(v)}`)
	})
}

export function main() {
	console.log("RUNNING");
	plotQuiverGraph();
	plotGolfHole();
}


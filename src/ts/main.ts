import * as d3 from 'd3'
import { ContourPlot } from './vis/ContourPlot'
import { D3Sel } from './util/xd3'
import { MultiParabola } from './vis/MultiParabola'
import { GolfHole1D } from './vis/GolfHole1D'

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

    const op = {
        qFac: 100,
        // qFac: 2 // Uncomment if we only care about q=0, 0.5, 1
        etaFac: 1000
    }

    const vizs = {
        graph: new ContourPlot(sels.quiverPlot)
    }

    const defaults = {
        q: 0,
        eta: 0.01
    }

    // Initialize graph parameters to match the defaults
    vizs.graph.q(defaults.q)
    vizs.graph.eta(defaults.eta)

    sels.qSlider.attr('value', defaults.q)
    sels.etaSlider.attr('value', defaults.eta * op.etaFac)
    sels.qId.text(+sels.qSlider.attr('value') / op.qFac)
    sels.etaId.text(+sels.etaSlider.attr('value') / op.etaFac)

    sels.qSlider.on('input', function () {
        const me = d3.select(this)
        const v = me.property('value') / op.qFac;
        vizs.graph.q(v);
        sels.qId.text(`${v}`)
    })

    sels.etaSlider.on('input', function () {
        const me = d3.select(this)
        const v = me.property('value') / op.etaFac;
        vizs.graph.eta(v)
        sels.etaId.text(`${v}`)
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

    const op = {
        qFac: 100,
        // qFac: 2 // Uncomment if we only care about q=0, 0.5, 1
        etaFac: 5000
    }

    const vizs = {
        graph: new GolfHole1D(sels.chart)
    }

    const defaults = {
        q: 0,
        eta: 0.001
    }

    // Initialize graph parameters to match the defaults
    vizs.graph.q(defaults.q)
    vizs.graph.eta(defaults.eta)

    sels.qSlider.attr('value', defaults.q)
    sels.etaSlider.attr('value', defaults.eta * op.etaFac)

    sels.qId.text(+sels.qSlider.attr('value') / op.qFac)
    sels.etaId.text(+sels.etaSlider.attr('value') / op.etaFac)
    vizs.graph.q()

    sels.qSlider.on('input', function () {
        const me = d3.select(this)
        const v = me.property('value') / op.qFac;
        vizs.graph.q(v);
        sels.qId.text(`${v}`)
    })

    sels.etaSlider.on('input', function () {
        const me = d3.select(this)
        const v = me.property('value') / op.etaFac;
        vizs.graph.eta(v)
        sels.etaId.text(`${v}`)
    })
}

export function main() {
    console.log("RUNNING");
    plotQuiverGraph();
    plotGolfHole();
}


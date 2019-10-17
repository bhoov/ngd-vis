import * as d3 from 'd3'
import { ContourPlot } from './vis/ContourPlot'
import { D3Sel } from './util/xd3'
import { MultiParabola } from './vis/MultiParabola'
import { GolfHole1D } from './vis/GolfHole1D'

function plotQuiverGraph() {
    const sels = {
        quiverPlot: d3.select('#vis1'),
        qId: d3.select('#q-val'),
        etaId: d3.select('#eta-val'),
        qSlider: d3.select('#q-slider'),
        etaSlider: d3.select('#eta-slider'),
        hessType: d3.select('#hess-type')
    }

    const op = {
        qFac: 100,
        // qFac: 2 // Uncomment if we only care about q=0, 0.5, 1
        etaFac: 1000
    }

    const vizs = {
        graph: new ContourPlot(sels.quiverPlot)
    }

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
    const sels = {
        vis2: d3.select("#vis2")
    }

    const op = {

    }

    const vizs = {
        graph: new GolfHole1D(sels.vis2)
    }
}

export function main() {
    console.log("RUNNING");
    plotQuiverGraph();
    plotGolfHole();
    // plotParabolaGraph();
}


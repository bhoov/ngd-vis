import * as d3 from 'd3'
import {ContourPlot} from './ts/vis/ContourPlot'
import {fromEvent} from 'rxjs'
import {map, tap} from 'rxjs/operators'
import {D3Sel} from './ts/util/xd3'
import {MultiParabola} from './ts/vis/MultiParabola'


function plotQuiverGraph() {
    const vis1:D3Sel = d3.select('#vis1')
    const graph = new ContourPlot(vis1)

    const qFac = 100; // Uncomment 100 if scale is made continuous
    // const qFac = 2;//100; // Uncomment 100 if scale is made continuous
    const etaFac = 1000;

    const qId = d3.select('#q-val')
    const etaId = d3.select('#eta-val')

    const qSlider = d3.select('#q-slider')
    const etaSlider = d3.select('#eta-slider')

    qId.text(+qSlider.attr('value') / qFac)
    etaId.text(+etaSlider.attr('value') / etaFac)

    fromEvent(qSlider.node(), 'input').pipe(
        map((v:Event) => v.srcElement.valueAsNumber),
        map((v:number) => v / qFac),
        tap(v => v)
    ).subscribe({
        next: (v) => {
          graph.q(v);
          qId.text(`${v}`)
        },
        err: (err) => console.log(err),
        complete: () => console.log("COMPLETE")
    })

    fromEvent(etaSlider.node(), 'input').pipe(
        map((v:Event) => v.srcElement.valueAsNumber),
        map((v:number) => v / etaFac),
        tap(v => v)
    ).subscribe({
        next: (v) => {
          graph.eta(v);
          etaId.text(`${v}`)
        },
        err: (err) => console.log(err),
        complete: () => console.log("COMPLETE")
    })

    const hessType = d3.select('#hess-type')

    fromEvent(hessType.node(), 'input').pipe(
        map(v => v.srcElement.value),
    ).subscribe({
        next: (v) => {
          graph.setUpdater(v);
        },
        err: (err) => console.log(err),
        complete: () => console.log("COMPLETE")
    })
}

function plotParabolaGraph() {
    const parab = new MultiParabola(d3.select('#vis2'))
    const dataset = d3.range(10).map(function(d) { return d3.randomUniform(1)() })
    // parab.data(dataset)
}

function main() {
    plotQuiverGraph();
    // plotParabolaGraph();
}

main()

console.log("Index run");
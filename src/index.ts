import * as d3 from 'd3'
import {sliderBottom} from  'd3-simple-slider'
// import 'd3-simple-slider'
import * as $ from 'jquery'
import {range} from 'ramda'
import {RegressionLoss} from './ts/loss'
import {Line} from './ts/line'
import {genUniform} from './ts/plotting'
import {ContourPlot} from './ts/vis/ContourPlot'
import {SimpleContour} from './ts/contour'
import {fromEvent} from 'rxjs'
import {map, switchMap, tap} from 'rxjs/operators'
import {Vector2D} from './ts/types'
import {D3Sel} from './ts/util/xd3'

function main() {
    const vis1:D3Sel = d3.select('#vis1')
    const graph = new ContourPlot(vis1)

    const qFac = 100;
    const etaFac = 1000;
    const lrScaleFac = (100 / 0.4) 

    const qId = d3.select('#q-val')
    const etaId = d3.select('#eta-val')
    const lrScaleId = d3.select('#lrScale-val')

    const qSlider = d3.select('#q-slider')
    const etaSlider = d3.select('#eta-slider')
    const lrScaleSlider = d3.select('#lrScale-slider')

    qId.text(+qSlider.attr('value') / qFac)
    etaId.text(+etaSlider.attr('value') / etaFac)
    lrScaleId.text(+lrScaleSlider.attr('value') / lrScaleFac) 

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

    fromEvent(lrScaleSlider.node(), 'input').pipe(
        map((v:Event) => v.srcElement.valueAsNumber),
        map((v:number) => v / lrScaleFac),
        tap(v => v)
    ).subscribe({
        next: (v) => {
          graph.lrScale(v);
          lrScaleId.text(`${v}`)
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

main()

console.log("Index run");
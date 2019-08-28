import * as d3 from 'd3'
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
}

main()

console.log("Index run");
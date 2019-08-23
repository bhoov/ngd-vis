import * as d3 from 'd3'
import * as $ from 'jquery'
import {range} from 'ramda'
import {RegressionLoss} from './ts/loss'
import {genUniform} from './ts/plotting'
import {SimpleGraph} from './ts/vis/SimpleGraph'

function main() {
    const graph = new SimpleGraph(d3.select('#vis1'))
    const X = genUniform(-4, 4, 100)

    console.log(X);

    const lossGraph = new RegressionLoss(d3.select('#vis2').node())
    lossGraph.plot(X, 0)
}

main()

console.log("Index run");
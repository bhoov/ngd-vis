import * as d3 from 'd3'
import * as $ from 'jquery'
import {RegressionLoss} from './ts/loss'
import {SimpleGraph} from './ts/vis/SimpleGraph'

function main() {
    // const graph = new SimpleGraph(d3.select('#vis1'))
    const lossGraph = new RegressionLoss(d3.select('#vis1').node())
    lossGraph.plot(0, 0)
    console.log(lossGraph);
}

main()

console.log("Index run");
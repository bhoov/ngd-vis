import * as d3 from 'd3'
import {SimpleGraph} from './ts/vis/SimpleGraph'

function main() {
    const graph = new SimpleGraph(d3.select('#vis1'))
}

main()

console.log("Index run");
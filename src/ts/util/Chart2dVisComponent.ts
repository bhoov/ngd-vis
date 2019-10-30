import * as d3 from 'd3'
import { SVGVisComponent, SVGOptions, MarginInfo } from "./SVGVisComponent"

export interface ChartOptions extends SVGOptions {
    xrange: [number, number]
    yrange: [number, number]
    pad: MarginInfo // The distance to leave between the main drawing of the graph and any annotations in the margin (each dim should be less than margin dim)
}

export interface ChartScales {
    x?: d3.ScaleLinear<number, number>,
    y?: d3.ScaleLinear<number, number>,
}
/**
 * Create a class that can be used for plotting charts (line graphs, bar graphs, etc.).
 */
export abstract class Chart2D<DataInterface> extends SVGVisComponent<DataInterface> {
    options: ChartOptions
    scales: ChartScales
}
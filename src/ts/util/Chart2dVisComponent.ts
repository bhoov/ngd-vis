import * as d3 from 'd3'
import { Vector2D } from './types'
import { SVGVisComponent, SVGOptions, MarginInfo } from "./SVGVisComponent"

export interface ChartOptions extends SVGOptions {
    xrange: [number, number]
    yrange: [number, number]
    pad: MarginInfo             // Distance from edges. Demarcate when things are too close to the edge
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

    // Put a vector into the coordinate system used by the visualization
    intoVis(v: Vector2D) {
        return { x: this.scales.x(v.x), y: this.scales.y(v.y) }
    }

    // Take a vector in the coordinate system and return it to the math coordinates
    intoMath(v: Vector2D) {
        return { x: this.scales.x.invert(v.x), y: this.scales.y.invert(v.y) }
    }

    // Instantiate the axes of the chart. Reimplement depending on how we want the axes to appear
    protected abstract createAxes()

    // Instantiate the scales from the xrange and the yrange
    protected abstract createScales()
}
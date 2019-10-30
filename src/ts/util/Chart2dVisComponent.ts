import { SVGVisComponent, SVGOptions, MarginInfo } from "./SVGVisComponent"

export interface ChartOptions extends SVGOptions {
    pad: MarginInfo // The distance to leave between the main drawing of the graph and any annotations in the margin (each dim should be less than margin dim)
}
/**
 * Create a class that can be used for plotting charts (line graphs, bar graphs, etc.).
 */
export abstract class Chart2D<DataInterface> extends SVGVisComponent<DataInterface> {

}
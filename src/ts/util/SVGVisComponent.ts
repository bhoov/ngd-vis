import { D3Sel } from "./xd3"
import { VisComponent } from "./VisComponent"
import { SimpleEventHandler } from "./SimpleEventHandler";
import { SVG } from "./SVGplus";

export type MarginInfo = {
    top:number
    right:number
    bottom:number
    left:number
}

export interface SVGOptions {
    margin: MarginInfo
    maxWidth: number        // The total width of the component
    maxHeight: number       // The total height of the component
    width?: number          // The total width - applicable margins
    height?: number         // The total height - applicable margins
}

export abstract class SVGVisComponent<DataInterface> extends VisComponent<DataInterface> {
    protected layers: { main?: D3Sel, fg?: D3Sel, bg?: D3Sel, [key: string]: D3Sel };
    protected svg: D3Sel
    protected options: SVGOptions = {
        margin: { top: 0, right: 0, bottom: 0, left: 0 },
        maxWidth: 450,
        maxHeight: 450,
    }

    protected constructor(d3parent: D3Sel, eventHandler?: SimpleEventHandler, options: {} = {}, ID=0) {
        super(d3parent, eventHandler, ID)
    }

    /** 
     * Must be called immediately after the `super()` constructor call of inhereting classes.
     * 
     * - Calculates height and width for options
     * - Adds 'svg' and 'base' objects to the div.
     * - Adds layers on the base to work with if passed
     * - Runs defined static initialization defined in `init()`
     */
    protected initSVG(options = {}, defaultLayers = []) {
        this.updateOptions(options)
        const op = this.options;
        op.width = op.maxWidth - (op.margin.left + op.margin.right)
        op.height = op.maxHeight - (op.margin.top + op.margin.bottom)

        this.svg = SVG.addSVG(this.parent, op.width, op.height, op.margin)
        this.base = SVG.group(this.svg, ''); // Let HTML author assign the class name and ID
        this.layers = {};
        if (defaultLayers) {
            // construction order is important !
            defaultLayers.forEach(layer => {
                this.layers[layer] = SVG.group(this.base, layer);
            });
        }

        this.init()
    }
}
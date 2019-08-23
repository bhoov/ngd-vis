/**
 * Created by Hendrik Strobelt (hendrik.strobelt.com) on 12/3/16.
 * Modified by Ben Hoover on 4/16/2019
 */
import {D3Sel} from "./xd3"
import {SimpleEventHandler} from "./SimpleEventHandler";
import {SVG} from "./SVGplus";
import {SVGOptions} from '../types'

/**
 * Should have VComponentHTML and VComponentSVG
 * 
 * Common Properties:
 * - events
 * - eventHandler (V important)
 * - options (Maintains public state. Can expose these with get/set functions with auto update)
 * - _current (Maintains private state)
 * - cssName (synced with corresponding CSS file)
 * - parent (HTML is div containing the base, SVG is SVG element)
 * - base (HTML is div with css_name established)
 * - _data (Data used to create and render the component)
 * - _renderData (Data needed to display. This may not be needed, but is currently used in histogram)
 * 
 * Common Methods:
 * - constructor
 * - _render()      Consider replacing with `_updateData()` that updates all data at once
 * - update()       Consider replacing this with `data()` that auto updates data
 * - redraw()
 * - destroy()
 */

export abstract class VisComponent<DataInterface> {
    /**
     * Given an ID, create a new instance of this class with the events and css_name modified by the id
     */
    newInstance(id:number) {}

    /**
     * The static property that contains all class related events.
     * Should be overwritten and event strings have to be unique!!
     */
    protected get events() {
        const event = (eventName) => `${this.baseName}_${eventName}`
        return {
            noEvent: event('NoEvent')
        }
    }

    protected get baseName() {
        return `${this.cssname}_ID${this.ID}`
    }

    protected cssname: string;            // Make the same as the corresponding css file
    protected ID: number;                 // ID associated to unique instance of visualization. Defaults to 0


    protected abstract options: {};
    protected eventHandler: SimpleEventHandler;
    protected parent: D3Sel;                        // Parent d3 selection
    protected base: D3Sel;                 // d3 selection that is created by the init
    protected _data: DataInterface;
    protected renderData: unknown;


    /**
     * @param {D3Sel} d3parent  D3 selection of parent SVG DOM Element
     * @param {SimpleEventHandler} eventHandler a global event handler object or 'null' for local event handler
     */
    protected constructor(d3parent: D3Sel, eventHandler?: SimpleEventHandler, ID=0) {
        this.parent = d3parent;
        this.eventHandler = eventHandler || new SimpleEventHandler(this.parent.node());
        this.ID = ID;
    }

    /**
     * Should be overwritten to create needed static DOM elements
     */
    protected abstract init();


    /**
     * Follow the D3 convention: retrieve the data inside the class if null. Otherwise, set the data and return 'this'
     */
    abstract data():DataInterface;
    abstract data(x:DataInterface):this;

    /**
     * Set many options at once
     * 
     * @param options Reset options to passed values
     */
    updateOptions(options:{}) {
        Object.keys(options).forEach(k => this.options[k] = options[k]);
    }

    destroy() {
        this.base.remove();
    }
}

export abstract class HTMLVisComponent<DataInterface> extends VisComponent<DataInterface> {

    protected constructor(d3parent: D3Sel, eventHandler?: SimpleEventHandler, options:{}={}) {
        super(d3parent, eventHandler)
        this.initHTML(options)
    }

    initHTML(options:{}={}) {
        this.updateOptions(options)
        this.base = this.parent.append('div')
    }

}

export abstract class SVGVisComponent<DataInterface> extends VisComponent<DataInterface> {
    protected layers: { main?: D3Sel, fg?: D3Sel, bg?: D3Sel, [key: string]: D3Sel };
    protected svg: D3Sel // Alias for this.parent
    protected options: SVGOptions = {
        margin: {top: 0, right: 0, bottom: 0, left: 0},
        pad: 0,
        maxWidth: 450,
        maxHeight: 450,
    }

    protected constructor(d3parent: D3Sel, eventHandler?: SimpleEventHandler, options:{}={}) {
        super(d3parent, eventHandler)
        this.initSVG(options)
    }

    protected initSVG(options: {} = {}, defaultLayers=[]) {
        // Set default options if not specified in constructor call
        this.updateOptions(options)
        const op = this.options;
        op.width = op.maxWidth - (op.margin.left + op.margin.right)
        op.height = op.maxHeight - (op.margin.top + op.margin.bottom)

        this.layers = {};

        this.svg = SVG.addSVG(this.parent, op.width, op.height, op.margin)

        // Create the base group element
        // this.svg = this.parent.append('svg');
        this.base = SVG.group(this.svg, '');

        if (defaultLayers) {
            // construction order is important !
            defaultLayers.forEach(layer =>{
                this.layers[layer] = SVG.group(this.base, layer);
            });
        }
    }
}
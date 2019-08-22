/**
 * Created by Hendrik Strobelt (hendrik.strobelt.com) on 12/3/16.
 * Modified by Ben Hoover on 4/16/2019
 */
import * as d3 from 'd3'
import {UId} from "./UId";
import {D3Sel} from "./xd3"
import {SimpleEventHandler} from "./SimpleEventHandler";
import {SVG} from "./SVGplus";

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


    protected abstract options: { [key: string]: unknown };
    protected eventHandler: SimpleEventHandler;
    protected parent: D3Sel;                        // Parent d3 selection
    protected abstract base: D3Sel;                 // d3 selection that is created by the init
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
        this.init()
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
            .classed(this.cssname, true)
    }

}

export abstract class SVGVisComponent<DataInterface> extends VisComponent<DataInterface> {
    protected layers: { main?: D3Sel, fg?: D3Sel, bg?: D3Sel, [key: string]: D3Sel };
    protected _width:number
    protected _height:number

    protected constructor(d3parent: D3Sel, eventHandler?: SimpleEventHandler, options:{}={}) {
        super(d3parent, eventHandler)
        this.initSVG(options)
    }

    protected initSVG(options: {} = {}, defaultLayers = ['bg', 'main', 'fg']) {
        // Set default options if not specified in constructor call
        this.updateOptions(options)

        this.layers = {};

        // Create the base group element
        const svg = this.parent;
        this.base = SVG.group(svg, this.cssname);

        if (defaultLayers) {
            // construction order is important !
            defaultLayers.forEach(layer =>{
                this.layers[layer] = SVG.group(this.base, layer);
            });
        }
    }

    /**
     * Simple transition to update width of SVG element
     */
    protected updateWidth() {
        this.parent.attr('width', this._width)
    }

    /**
     * Simple transition to update width of SVG element
     */
    protected updateHeight() {
        this.parent.attr('height', this._height)
    }

    /**
     * Set the width of the parent SVG
     */
    width():number
    width(x:number):this
    width(x?) {
        if (x == null) 
            return this._width;

        this._width = x;
        this.updateWidth();
        return this;
    }

    /**
     * Set the width of the parent SVG
     */
    height():number
    height(x:number):this
    height(x?) {
        if (x == null) 
            return this._height;

        this._height = x;
        this.updateHeight();
        return this;
    }
}
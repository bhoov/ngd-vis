import * as d3 from 'd3'
import {D3Sel} from '../util/xd3'
import {legendColor} from 'd3-svg-legend'
import {SVGVisComponent, HTMLVisComponent} from '../util/VisComponent'
import { SimpleEventHandler } from '../util/SimpleEventHandler';
import {SVG} from '../util/SVGplus'

type T = number[]

export class SimpleGraph extends SVGVisComponent<T> {
    cssname = "simple-cake"

    _data: T

    options = {
        maxWidth: 450,
        maxHeight: 450,
        margin: {top: 50, right: 75, bottom: 75, left: 50},
        pad: 30,
        height:null,
        width:null,
    }

    // Scales
    x
    y
    color
    contours

    // Selections
    xaxis
    yaxis
    legend
    tip
    xlabel
    ylabel

    // Specify the grid for the contours
    n: number = 50
    m: number = 50


    constructor(d3parent: D3Sel, eventHandler?: SimpleEventHandler, options={}) {
        super(d3parent, eventHandler, options)
        this.base.classed(this.cssname, true)
        this.init()
    }

    init() { 
        const op = this.options

        op.width = op.maxWidth - (op.margin.left + op.margin.right)
        op.height = op.maxHeight - (op.margin.top + op.margin.bottom)

        this.contours = d3.contours().size([this.n, this.m])
        this.color = d3.scaleLog().interpolate(() => d3.interpolateYlGnBu);

        this.svg
            .attr("width", op.width)
            .attr("height", op.height)

        this.x = d3.scaleLinear().domain([-5, 5]).range([0, op.width])
        this.y = d3.scaleLinear().domain([-5, 5]).range([op.height, 0])

        this.xaxis = this.base.append("g")
            .attr("class", "axis axis--x")
            .attr("transform", SVG.translate({x: 0, y: op.height}))
            .call(d3.axisBottom(this.x).ticks(3, "s"));
        
        this.yaxis = this.base.append("g")
            .attr("class", "axis axis--y")
            .attr("transform", SVG.translate({x: 0, y: 0}))
            .call(d3.axisLeft(this.y).ticks(3, "s"));

        this.xlabel = this.base.append("text")
            .text("b (intercept)")
            .attr("class", "titles")
            .attr("transform", SVG.translate({x: op.width/2, y: op.height + op.pad}))

        this.ylabel = this.base.append("text")
            .text("W (slope)")
            .attr("class", "titles")
            .attr("transform", SVG.translate({x: -op.pad, y: op.height/2}) + SVG.rotate(-90))

        this.legend = this.svg.append("g")
            .attr("class", "legend")
            .attr("transform", SVG.translate({x: op.width + op.pad / 2, y: 0})); 
    }

    data():number[]
    data(val:number[]): this
    data(val?) {
        if (val == null) return this._data
        this._data = val
        return this
    }
}
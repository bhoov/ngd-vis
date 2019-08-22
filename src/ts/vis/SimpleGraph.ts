import * as d3 from 'd3'
import {D3Sel} from '../util/xd3'
import {SVGVisComponent, HTMLVisComponent} from '../util/VisComponent'
import { SimpleEventHandler } from '../util/SimpleEventHandler';

type T = number[]

export class SimpleGraph extends SVGVisComponent<T> {
    cssname = "simple-cake"

    _data: T
    x
    y
    xaxis
    yaxis
    pad
    legend
    tip
    color
    contours

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

        this.contours = d3.contours().size([this.n, this.m])
        this.color = d3.scaleLog().interpolate(() => d3.interpolateYlGnBu);
        this.x = d3.scaleLinear().range([0, op.width]).domain([-5, 5])
        this.y = d3.scaleLinear().range([0, op.height]).domain([-5, 5])

        this.svg
            .attr("width", op.width)
            .attr("height", op.height)

        const width = op.width - op.margin.left - op.margin.right,
            height = op.height - op.margin.top - op.margin.bottom

        this.xaxis = this.base.append("g")
            .attr("class", "axis axis--x")
            .attr("transform", "translate(0," + height + ")")
            .call(d3.axisBottom(this.x).ticks(3, "s"));
        
        this.yaxis = this.base.append("g")
            .attr("class", "axis axis--y")
            .attr("transform", "translate(40,0)")
            .call(d3.axisLeft(this.y).ticks(3, "s"));
    }

    data():number[]
    data(val:number[]): this
    data(val?) {
        if (val == null) return this._data
        this._data = val
        return this
    }
}
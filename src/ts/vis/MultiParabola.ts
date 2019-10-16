import * as d3 from 'd3'
import {D3Sel} from '../util/xd3'
import * as R from 'ramda'
import {Vector2D} from '../types'
import {SVGOptions, SVGVisComponent} from '../util/VisComponent'
import { SimpleEventHandler } from '../util/SimpleEventHandler';
import {SVG} from '../util/SVGplus'

type T = number[]

interface GraphOptions extends SVGOptions {
    xrange: [number, number]
    yrange: [number, number]
}

interface GraphScales {
    x?: d3.ScaleLinear<number, number>,
    y?: d3.ScaleLinear<number, number>,
    lines?: d3.Line<number>[]
}

interface GraphSels {
    xaxis?:D3Sel
    yaxis?:D3Sel
    xlabel?:D3Sel
    line?:D3Sel
}

const as:number[] = [0.25,1, 2] // Store this as a state/option in the graph?
const offset = 0.25;
const baseFunc = R.curry((b, a, x) => a * Math.pow(x, 2) + b)
const func = baseFunc(offset)

export class MultiParabola extends SVGVisComponent<T> {
    cssname = "multi-parabola-chart"

    _data: T

    options:GraphOptions = {
        maxWidth: 450,
        maxHeight: 450,
        margin: {top: 50, right: 75, bottom: 75, left: 50},
        pad: 30,
        xrange: [-4, 4],
        yrange: [0, 20],
    }

    scales: GraphScales = {}

    sels: GraphSels = {}

    constructor(d3parent: D3Sel, eventHandler?: SimpleEventHandler, options={}) {
        super(d3parent, eventHandler, options)
        this.base.classed(this.cssname, true)
        this.init()
    }

    intoVis(v:Vector2D) {
        return {x: this.scales.x(v.x), y: this.scales.y(v.y)}
    }

    intoMath(v:Vector2D) {
        return {x: this.scales.x.invert(v.x), y: this.scales.y.invert(v.y)}
    }

    init() { 
        const self = this;
        const op = this.options;
        const scales = this.scales;
        const sels = this.sels;

        op.width = op.maxWidth - (op.margin.left + op.margin.right)
        op.height = op.maxHeight - (op.margin.top + op.margin.bottom)

        this.svg
            .attr("width", op.maxWidth)
            .attr("height", op.maxHeight)

        this.base = SVG.group(this.base, '', {x: op.margin.left, y: op.margin.top})

        scales.x = d3.scaleLinear().domain(op.xrange).range([0, op.width])
        scales.y = d3.scaleLinear().domain(op.yrange).range([op.height, 0])

        sels.xaxis = this.base.append("g")
            .attr("class", "axis axis--x")
            .attr("transform", SVG.translate(0, op.height))
            .call(d3.axisBottom(scales.x).ticks(3, "s"));
        
        sels.xlabel = this.base.append("text")
            .text("x")
            .attr("class", "titles")
            .attr("transform", SVG.translate(op.width/2, op.height + op.pad))

        const baseLine = d3.line<number>()
            .x((d:number) => scales.x(d))
            .curve(d3.curveLinear)

        scales.lines = as.map(a => {
            return baseLine.y((d:number, i:number) => scales.y(func(a, d)))
        })

        const linspace = (start, end, n) => {
            const delta = (end - start) / (n - 1)
            return d3.range(start, end+delta, delta).slice(0, n)
        }

        const xs = linspace(op.xrange[0], op.xrange[1], 1000)
        this.data(xs)
        // this.updateData()
    }

    updateData() {
        const self = this
        const scales = this.scales
        const sels = this.sels
        const data = this._data

        scales.lines.forEach(line => {
            this.base.append("path")
                .datum(data)
                .attr("class", "line")
                .attr("d", d => line(d))
            })
    };

    data():T
    data(val:T): this
    data(val?) {
        if (val == null) return this._data
        this._data = val
        this.updateData()
        return this
    }
}
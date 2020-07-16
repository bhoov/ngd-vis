import * as d3 from 'd3'
import { D3Sel, linspace } from '../util/xd3'
import * as R from 'ramda'
import { Vector2D } from '../types'
import { SVGOptions, SVGVisComponent, MarginInfo } from '../util/SVGVisComponent'
import { SimpleEventHandler } from '../util/SimpleEventHandler';
import { SVG } from '../util/SVGplus'
import { interval, fromEvent } from 'rxjs'
import { take, scan } from 'rxjs/operators'
import { ManualUpdater } from './ManualUpdater'
import { GolfBall } from './GolfBall'
import { landscapes, Landscape, baseLoss, getPlotFunc } from "../GolfLandscapes";

interface GraphOptions {
    margin: MarginInfo
    maxWidth: number
    maxHeight: number
    width: number
    height: number
}

interface ScaleXY {
    x: d3.ScaleLinear<number,number>
    y: d3.ScaleLinear<number,number>
}


interface GraphScales {
    base2math?: ScaleXY,
    base2px?: ScaleXY,
    math2px?: ScaleXY,
    base2loss?: d3.ScaleLinear<number, number>,
    paths?: d3.Line<number>[],
    color?: d3.ScaleSequential<number>,
}

interface GraphSels {
    xaxis: D3Sel
    xlabel: D3Sel
}

type DATA = number[] // List of alphas in y=alpha * x^2

export class QuadraticPlots extends SVGVisComponent<DATA> {
    cssname = "quadratic-plots"
    maskId: string

    _data: DATA

    options: GraphOptions = { 
        margin: {top: 5, right: 10, bottom: 40, left: 10},
        maxWidth: 400,
        maxHeight: 250,
        width: 350,
        height: 225
    }

    sels: Partial<GraphSels> = {}
    scales: GraphScales = {}

    constructor(d3parent: D3Sel, eventHandler?: SimpleEventHandler, options = {}, ID = 0) {
        super(d3parent, eventHandler, options, ID)
        this.maskId = `line-mask-${this.ID}`
        super.initSVG(options, ["bg"])
        this.base.classed(this.cssname, true)
        this.init()
    }

    get plotFuncs() {
        return this._data.map(d => {
            return function(x) {
                return (x ** 2) / 2
            }
        })
    }

    /**
     * Put a vector into the coordinate system used by the visualization
     * 
     * @param v Vector 
     */
    intoVis(v: Vector2D) {
        return { x: this.scales.math2px.x(v.x), y: this.scales.math2px.y(v.y) }
    }

    // Take a vector in the coordinate system and return it to the math coordinates
    intoMath(v: Vector2D) {
        return { x: this.scales.math2px.x.invert(v.x), y: this.scales.math2px.y.invert(v.y) }
    }

    // Turn a number into a vector
    num2vec(x: number): Vector2D {
        const op = this.options
        // return { x: x, y: op.landscape.loss(x) }
        return {x: x, y: x**2}
    }

    updateScales(op: GraphOptions) {
        const scales = this.scales

        const xbaseRange = [-1, 1]
        const ybaseRange = [1, 0]

        const xpxRange = [0, op.width]
        const ypxRange = [op.height, 0]

        // scales.base2math = {
        //     x: d3.scaleLinear().domain(xbaseRange).range(op.landscape.xrange),
        //     y: d3.scaleLinear().domain(ybaseRange).range(op.landscape.yrange)
        // }
        // scales.base2px = {
        //     x: d3.scaleLinear().domain(xbaseRange).range(xpxRange),
        //     y: d3.scaleLinear().domain(ybaseRange).range(ypxRange)
        // }
        // scales.math2px = {
        //     x: d3.scaleLinear().domain(op.landscape.xrange).range(xpxRange),
        //     y: d3.scaleLinear().domain(op.landscape.yrange).range(ypxRange)
        // }

        // scales.base2loss = d3.scaleLinear().domain(op.landscape.yrange).range([0, 1])

        // scales.paths = this.newPaths(op.landscape)
    }

    updateAxes(scales: GraphScales, op: GraphOptions) {
        const sels = this.sels
        sels.xaxis.call(d3.axisBottom(scales.math2px.x).tickValues([0]).tickFormat(x => '0'))
    }

    init() {
        const self = this;
        const op = this.options;
        const scales = this.scales;
        const sels = this.sels;

        this.updateScales(op)

        sels.xaxis = this.base.append("g")
            .attr("class", "axis axis--x")
            .attr("transform", SVG.translate(0, op.height))

        // sels.xlabel = this.base.append("text")
        //     .text("\u03B8 - \u03B8*")
        //     .attr("class", "titles")
            // .attr("transform", SVG.translate(op.width / 2, op.height + op.pad))

        this.updateAxes(scales, op)
    }

    data(): DATA
    data(val: DATA): this
    data(val?) {
        if (val == null) return this._data
        return this
    }
}

function toVec([x, y]: [number, number]): Vector2D {
    return { x: x, y: y }
}
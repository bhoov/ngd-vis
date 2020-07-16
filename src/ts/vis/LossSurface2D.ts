import * as d3 from 'd3'
import { D3Sel, linspace } from '../util/xd3'
import * as R from 'ramda'
import { legendColor } from 'd3-svg-legend'
import { Vector2D } from '../types'
import { SVGOptions, SVGVisComponent } from '../util/SVGVisComponent'
import { SimpleEventHandler } from '../util/SimpleEventHandler';
import { SVG } from '../util/SVGplus'
import { getContourValues } from '../plotting'
import { Updater, BlockUpdater } from '../ContourPlotUpdater'
import { interval, fromEvent } from 'rxjs'
import { map, tap, take, startWith, scan, switchMap } from 'rxjs/operators'

type T = number[]

export function jaggedLoss(x1:number, x2:number):number {
    const freqs = linspace(-2, 3, 7).map(x => Math.exp(x))
    const aa = freqs.map(x => 1/x)

    let y1 = x1, y2 = x2
    freqs.forEach((h, m) => {
        y1 = aa[m] * Math.sin(h * x2) + y1
        y2 = aa[m] * Math.cos(h * x1) + y2
    })

    const s1 = freqs.reduce((acc, h, m) => (aa[m] * Math.sin(h * y1)) + acc, 0)
    const c1 = freqs.reduce((acc, h, m) => (aa[m] * Math.cos(h * y1)) + acc, 0)
    const s2 = freqs.reduce((acc, h, m) => (aa[m] * Math.sin(h * y2)) + acc, 0)
    const c2 = freqs.reduce((acc, h, m) => (aa[m] * Math.cos(h * y2)) + acc, 0)

    const z1 = y1 * s2 + c1 * y2
    const z2 = s1 * y2 + y1 * c2
    return (Math.pow(z1, 2) + Math.pow(z2, 2))
}

interface GraphOptions extends SVGOptions {
    xrange: [number, number]
    yrange: [number, number]
    n: number                   // Number of meshgrid points along the x axis
    m: number                   // Number of meshgrid points along the y axis
    pad: number                 // Annotations that happen in the margin must take place `pad` distance from the main graph
}

interface GraphScales {
    x?: d3.ScaleLinear<number, number>,
    y?: d3.ScaleLinear<number, number>,
    // color?: d3.ScaleLinear<number, string>,
    color?: d3.ScaleLinear<number, string>,
    curve?: d3.CurveCatmullRomFactory,
    contours?: d3.Contours,
    thresholds?: number[]
}

interface GraphSels {
    xaxis?: D3Sel
    yaxis?: D3Sel
    legend?: D3Sel
    tip?: D3Sel
    xlabel?: D3Sel
    ylabel?: D3Sel
    circle?: D3Sel
    arrows?: D3Sel[]
}

const EVENTS = {
  stepAdded: "SimpleNet_StepAdded"
}

export class LossSurface2D extends SVGVisComponent<T> {
    cssname = "simple-graph"

    _data: T

    options: GraphOptions = {
        maxWidth: 450,
        maxHeight: 500,
        margin: { top: 50, right: 75, bottom: 125, left: 50 },
        pad: 30,
        xrange: [0, 8],
        yrange: [0, 8],
        n: 100,
        m: 100,
    } // #state

    scales: GraphScales = {}
    sels: GraphSels = {}

    static events = EVENTS

    constructor(d3parent: D3Sel, eventHandler?: SimpleEventHandler, options = {}) {
        super(d3parent, eventHandler, options)
        super.initSVG(this.options)
        this.base.classed(this.cssname, true)
        this.initPlot()
    }

    plotContours() {
        const self = this;
        const op = this.options;
        const scales = this.scales;

        const contourFunc = jaggedLoss
        const vals = getContourValues(op.n, op.m, op.xrange, op.yrange, contourFunc)
        let thresholds = linspace(d3.min(vals), d3.max(vals), 25);

        scales.color = d3.scaleLinear().domain(d3.extent(vals)).range([0, 1]).interpolate(() => d3.interpolateBlues);

        scales.contours.thresholds(thresholds)

        const contourVals = scales.contours(vals)
        const contourGroup = this.base.append('g').attr('id', 'contour-group')
        const contours = contourGroup.selectAll("path.contour")
            .data(contourVals)


        contours.join("path")
            .attr("class", "contour")
            .attr("d", d3.geoPath(d3.geoIdentity().scale(op.width / op.n)))
            .attr("fill", d => {
                return scales.color(d.value)
            })
            .classed('not-fit', d => {
                return true
            })

    }


    intoVis(v: Vector2D) {
        return { x: this.scales.x(v.x), y: this.scales.y(v.y) }
    }

    intoMath(v: Vector2D) {
        return { x: this.scales.x.invert(v.x), y: this.scales.y.invert(v.y) }
    }

    initPlot() {
        // Initialize plots
        this.plotContours()
    }

    init() {
        const self = this;
        const op = this.options;
        const scales = this.scales;
        const sels = this.sels;

        // Add definitions
        SVG.addArrows(this.svg)

        // Create scales
        scales.contours = d3.contours().size([op.n, op.m])
        scales.curve = d3.curveCatmullRom.alpha(0.5)
        scales.x = d3.scaleLinear().domain(op.xrange).range([0, op.width])
        scales.y = d3.scaleLinear().domain(op.yrange).range([op.height, 0])

        // Add Axes and labels
        sels.xaxis = this.base.append("g")
            .attr("class", "axis axis--x")
            .attr("transform", SVG.translate(0, op.height))
            .call(d3.axisBottom(scales.x).ticks(3, "s"));

        sels.yaxis = this.base.append("g")
            .attr("class", "axis axis--y")
            .attr("transform", SVG.translate(0, 0))
            .call(d3.axisLeft(scales.y).ticks(3, "s"));

        // sels.xlabel = this.base.append("text")
        //     .text("w0")
        //     .attr("class", "titles")
        //     .attr("transform", SVG.translate(op.width / 2, op.height + op.pad))

        // sels.ylabel = this.base.append("text")
        //     .text("w1")
        //     .attr("class", "titles")
        //     .attr("transform", SVG.translate(-op.pad, op.height / 2) + SVG.rotate(-90))
    }

    data(): number[]
    data(val: number[]): this
    data(val?) {
        if (val == null) return this._data
        this._data = val
        return this
    }
}
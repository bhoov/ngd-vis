import * as d3 from 'd3'
import * as R from 'ramda'

import { Chart2D, ChartOptions, ChartScales } from '../util/Chart2dVisComponent'
import { SimpleEventHandler } from '../util/SimpleEventHandler'
import { D3Sel } from '../util/xd3'
import { SVG } from '../util/SVGplus'

import { BallHistory } from './GolfBall'

interface GraphSels {
    xaxis?: D3Sel
    yaxis?: D3Sel
    xlabel?: D3Sel
    line?: D3Sel
    backdrop?: D3Sel
    ball?: D3Sel
}

type Tracker = {
    sel: D3Sel,
    vals: number[]
}

type LineTracker = {
    (key: string): Tracker
}

type T = LineTracker

export class GolfXDist extends Chart2D<T> {
    cssname = "line-plot"

    _data: T

    options: ChartOptions = {
        maxWidth: 350,
        maxHeight: 250,
        margin: { top: 10, right: 10, bottom: 30, left: 30 },
        pad: { top: 5, right: 1, bottom: 10, left: 15 },
        xrange: [0, 1000],
        yrange: [7, 1e-7],
    }

    scales: ChartScales = {}

    sels: GraphSels = {}

    path: d3.Line<number>

    constructor(d3parent: D3Sel, eventHandler?: SimpleEventHandler, options = {}) {
        super(d3parent, eventHandler, options)
        super.initSVG(this.options)
        this.base.classed(this.cssname, true)
        this.data(<LineTracker>{})
    }

    /**
     * Plot the values of all x according to the function
     * 
     * @param x A linspace of x values over which to plot a curve
     */
    protected addDataKey_(classname: string) {
        const self = this
        if (!R.has(classname, this.data())) {
            console.log(`Adding key: ${classname}`);
            this.data()[classname] = {
                sel: self.initBaseLine(classname),
                vals: []
            }
        }
    }

    clearPaths() {
        this.data(R.map(d => R.assoc('vals', [], d), this.data()))
    }

    plotPath(d: BallHistory) {
        const self = this;
        this.addDataKey_(d.classname);

        const currVals = this.data()[d.classname];
        currVals.vals.push(Math.abs(d.x));

        const newXrange = [0, currVals.vals.length]
        this.updateScales(newXrange)
        this.createPath()

        currVals.sel.data([currVals])
            .join("path")
            .classed(d.classname, true)
            .attr("d", d => {
                return self.path(d.vals)
            })
    }

    // Live update the xrange
    updateScales(xrange) {
        const op = this.options
        this.scales.x = d3.scaleLinear().domain(xrange).range([0, op.width]).clamp(true)
    }

    private initBaseLine(classname: string) {
        return this.base.append("path")
            .classed(classname, true)
            .classed('line', true)
    }

    protected createScales() {
        const op = this.options
        this.scales.x = d3.scaleLinear().domain(op.xrange).range([0, op.width]).clamp(true)
        this.scales.y = d3.scaleLinear().domain(op.yrange).range([0, op.height]).clamp(true)
    }

    init() {
        const self = this;
        const op = this.options;
        const scales = this.scales;
        const sels = this.sels;

        this.createScales()
        this.createPath()
        this.createAxes()
    }


    protected createAxes() {
        const sels = this.sels
        const scales = this.scales
        const op = this.options

        // Create axes
        sels.xaxis = this.base.append("g")
            .attr("class", "axis axis--x")
            .attr("transform", SVG.translate(0, op.height))
            // @ts-ignore
            .call(d3.axisBottom(scales.x).ticks(3, ".1e").tickFormat(""));

        sels.yaxis = this.base.append("g")
            .attr("class", "axis axis--y")
            .attr("transform", SVG.translate(0, 0))
            // @ts-ignore
            .call(d3.axisLeft(scales.y).ticks(3, ".1e").tickFormat(""));

        this.base.append("text")
            .attr("transform", SVG.translate(op.width / 2, op.margin.top + op.height + 10))
            .style("text-anchor", "middle")
            .text("Iterations")

        this.base.append("text")
            .style("text-anchor", "middle")
            .text("log(|\u03B8 - \u03B8*|)")
            .attr("y", op.pad.left - op.margin.left)
            .attr("x", op.pad.top - (op.height / 2))
            .attr("transform", SVG.rotate(-90))
    }

    protected createPath() {
        this.path = d3.line<number>()
            .x((d: number, i: number) => this.scales.x(i))
            .y((d: number, i: number) => this.scales.y(d))
            .curve(d3.curveLinear)
    }

    data(): T
    data(val: T): this
    data(val?) {
        if (val == null) return this._data
        this._data = val;
        return this
    }
}


export class GolfLosses extends Chart2D<T> {
    cssname = "line-plot"

    _data: T

    options: ChartOptions = {
        maxWidth: 350,
        maxHeight: 250,
        margin: { top: 10, right: 10, bottom: 30, left: 30 },
        pad: { top: 5, right: 1, bottom: 10, left: 15 },
        xrange: [0, 1000],
        yrange: [0.6, 1e-4],
    }

    scales: ChartScales = {}

    sels: GraphSels = {}

    path: d3.Line<number>

    constructor(d3parent: D3Sel, eventHandler?: SimpleEventHandler, options = {}) {
        super(d3parent, eventHandler, options)
        super.initSVG(this.options)
        this.base.classed(this.cssname, true)
        this.data(<LineTracker>{})
    }

    /**
     * Plot the values of all x according to the function
     * 
     * @param x A linspace of x values over which to plot a curve
     */
    protected addDataKey_(classname: string) {
        const self = this
        if (!R.has(classname, this.data())) {
            console.log(`Adding key: ${classname}`);
            this.data()[classname] = {
                sel: self.initBaseLine(classname),
                vals: []
            }
        }
    }

    // Live update the xrange
    updateScales(xrange) {
        const op = this.options
        this.scales.x = d3.scaleLinear().domain(xrange).range([0, op.width]).clamp(true)
    }

    clearPaths() {
        this.data(R.map(d => R.assoc('vals', [], d), this.data()))
    }

    plotPath(d: BallHistory) {
        const self = this;
        this.addDataKey_(d.classname);

        const currVals = this.data()[d.classname];
        currVals.vals.push(d.loss)

        const newXrange = [0, currVals.vals.length]
        this.updateScales(newXrange)
        this.createPath()

        currVals.sel.data([currVals])
            .join("path")
            .classed(d.classname, true)
            .attr("d", d => {
                return self.path(lim(d.vals))
            })
    }

    private initBaseLine(classname: string) {
        return this.base.append("path")
            .classed(classname, true)
            .classed('line', true)
    }

    init() {
        const self = this;
        const op = this.options;
        const scales = this.scales;
        const sels = this.sels;

        this.createScales()
        this.createPath()
        this.createAxes()
    }

    protected createScales() {
        const scales = this.scales
        const op = this.options

        scales.x = d3.scaleLinear().domain(op.xrange).range([0, op.width]).clamp(true)
        scales.y = d3.scaleLog().domain(op.yrange).range([0, op.height]).clamp(true)
    }

    protected createAxes() {
        const sels = this.sels
        const scales = this.scales
        const op = this.options

        // Create axes
        sels.yaxis = this.base.append("g")
            .attr("class", "axis axis--y")
            .attr("transform", SVG.translate(0, 0))
            // @ts-ignore
            .call(d3.axisLeft(scales.y).tickFormat("").tickValues([0, 0.25, 0.5]));

        sels.xaxis = this.base.append("g")
            .attr("class", "axis axis--x")
            .attr("transform", SVG.translate(0, op.height))
            // @ts-ignore
            .call(d3.axisBottom(scales.x).tickFormat("").ticks(3));

        // Add xlabel
        this.base.append("text")
            .attr("transform", SVG.translate(op.width / 2, op.margin.top + op.height + 10))
            .style("text-anchor", "middle")
            .text("Iterations")

        // Add ylabel
        this.base.append("text")
            .style("text-anchor", "middle")
            .text("log(Loss)")
            .attr("y", op.pad.left - op.margin.left)
            .attr("x", op.pad.top - (op.height / 2))
            .attr("transform", SVG.rotate(-90))
        // .attr("transform", SVG.translate(op.margin.left, op.height/2))
    }

    protected createPath() {
        this.path = d3.line<number>()
            .x((d: number, i: number) => this.scales.x(i))
            .y((d: number, i: number) => this.scales.y(d))
            .curve(d3.curveLinear)
    }

    data(): T
    data(val: T): this
    data(val?) {
        if (val == null) return this._data
        this._data = val;
        return this
    }
}
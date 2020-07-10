import * as d3 from 'd3'
import { D3Sel } from '../util/xd3'
import * as R from 'ramda'
import { legendColor } from 'd3-svg-legend'
import { Vector2D, Array } from '../types'
import { SVGOptions, SVGVisComponent } from '../util/SVGVisComponent'
import { SimpleEventHandler } from '../util/SimpleEventHandler';
import { SVG } from '../util/SVGplus'
import { getContourValues } from '../plotting'
// import { Updater, BlockUpdater } from '../ContourPlotUpdater'
// import { Updater, BlockUpdater } from '../tfUpdater'
import { Updater2D, BlockUpdater2D } from '../Updater2D'
import { interval } from 'rxjs'
import { take, startWith, scan } from 'rxjs/operators'
import * as nj from "numjs"

type T = number[]

interface GraphOptions extends SVGOptions {
    xrange: [number, number]
    yrange: [number, number]
    n: number                   // Number of meshgrid points along the x axis
    m: number                   // Number of meshgrid points along the y axis
    pad: number                 // Annotations that happen in the margin must take place `pad` distance from the main graph
    circleEvery: number
}

interface GraphScales {
    x?: d3.ScaleLinear<number, number>,
    y?: d3.ScaleLinear<number, number>,
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

export class ContourPlot extends SVGVisComponent<T> {
    cssname = "simple-graph"

    _data: T

    options: GraphOptions = {
        maxWidth: 450,
        maxHeight: 500,
        margin: { top: 50, right: 75, bottom: 125, left: 50 },
        pad: 30,
        xrange: [0, 1.6],
        yrange: [0, 1.6],
        n: 500,
        m: 500,
        circleEvery: 4,
    } // #state

    scales: GraphScales = {}
    sels: GraphSels = {}


    // Other
    _curr = {
        currLoc: nj.array([0.1, 0.2]),
        step: 0
    }
    ticker
    updater: Updater2D

    // Specify the grid for the contours
    ideal: number = 1 // #state

    static events = EVENTS

    constructor(d3parent: D3Sel, eventHandler?: SimpleEventHandler, options = {}) {
        super(d3parent, eventHandler, options)
        super.initSVG(this.options)
        this.base.classed(this.cssname, true)
        this.updater = new Updater2D()
        this.initPlot()
    }

    setUpdater(name: 'block' | 'full') {
        const args = [this.q(), this.eta()]

        if (name == 'block') {
            this.updater = new BlockUpdater2D(this.q(), this.eta())
        }
        else if (name == 'full') {
            this.updater = new Updater2D(this.q(), this.eta())
        }

        else {
            console.log("Please enter a valid input as updater");
        }
        this.updateQuivers()
    }

    plotContours() {
        const self = this;
        const op = this.options;
        const scales = this.scales;

        const contourFunc = (x, y) => this.updater.absErr(nj.array([x, y]))
        const vals = getContourValues(op.n, op.m, op.xrange, op.yrange, contourFunc)
        let thresholds = d3.range(d3.min(vals), d3.max(vals), 0.08);
        // const contourFunc = (x, y) => this.updater.Err({ x: x, y: y })
        // const vals = getContourValues(op.n, op.m, op.xrange, op.yrange, contourFunc)
        // let thresholds = d3.range(d3.min(vals), -d3.min(vals), 0.08);
        // 
        // Because the minimum value is not a contour but a value, we need to do what we can to approach the min.
        const weighted = 0.95;
        const newMin = (weighted * thresholds[0] + (1 - weighted) * thresholds[1]) / 2
        // const newMin = 0;
        thresholds = R.insert(1, newMin, thresholds)


        // scales.color = d3.scaleLinear().domain([-3,3]).range([0.4, 0.6]).interpolate(() => d3.interpolateRdYlBu);
        scales.color = d3.scaleLinear().domain([-1, 0.1]).range([0, 1]).interpolate(() => d3.interpolateBlues);
        // scales.color = d3.scaleSequentialLog(d3.extent(thresholds), d3.interpolateMagma)

        scales.contours = scales.contours.thresholds(thresholds)

        const contourVals = scales.contours(vals)
        const contourGroup = this.base.append('g').attr('id', 'contour-group')
        const contours = contourGroup.selectAll("path.contour")
            .data(contourVals)

        contours.join("path")
            .attr("class", "contour")
            .attr("d", d3.geoPath(d3.geoIdentity().scale(op.width / op.n)))
            .attr("fill", d => {
                return scales.color(-Math.sqrt(d.value))
            })
            .classed('main-fit', d => {
                return d.value == newMin;
            })
            .classed('not-fit', d => {
                return d.value != newMin;
            })

        // legend({color, title: "Value", tickFormat: ","})
    }

    addStep(v: Array, prev: Array = null) {
        const self = this;
        const op = this.options;
        const scales = this.scales;
        const sels = this.sels;

        const cx = scales.x.clamp(true)(v.get(0))
        const cy = scales.y.clamp(true)(v.get(1))

        if (prev != null) {
            this.base.append('line')
                .attr('x1', scales.x(prev.get(0)))
                .attr('y1', scales.y(prev.get(1)))
                .attr('x2', cx)
                .attr('y2', cy)
                .classed('descending-line', true)
        }

        // Check border conditions
        if (v.get(0) >= op.xrange[1] || v.get(1) >= op.yrange[1]) {
            this.ticker.unsubscribe()
            return v
        }


        if (((this._curr.step % op.circleEvery) == 0) || (prev == null)) {
            sels.circle = this.base.append('circle')
                .attr('cx', cx)
                .attr('cy', cy)
                .attr('r', 2)
                .classed('descending-point', true)
        }

        this._curr.step += 1

        this.eventHandler.trigger(EVENTS.stepAdded, v)
        return v;
    }

    clearCircles() {
        d3.selectAll('.descending-point').remove()
        d3.selectAll('.descending-line').remove()
    }

    clearQuivers() {
        d3.selectAll('.quiver').remove()
        this.sels.arrows = []
    }

    plotDescent() {
        const self = this;
        let prevVal = null;

        const subObj = {
            next: (val) => {
                this.addStep(val, prevVal)
                prevVal = val
            },
            err: (err) => console.log(err),
            complete: () => console.log("COMPLETE")
        }

        const prep = () => {
            this.addStep(this.curr())
            prevVal = this.curr()
        }

        this.ticker = interval(10).pipe(
            startWith(prep()),
            //@ts-ignore
            scan(v => self.updater.next(v), self.curr()),
            take(1000)
        ).subscribe(subObj)
    }

    intoVis(v: Array) {
        return { x: this.scales.x(v.get(0)), y: this.scales.y(v.get(1)) }
    }

    intoMath(v: Vector2D) {
        return { x: this.scales.x.invert(v.x), y: this.scales.y.invert(v.y) }
    }

    updateQuivers() {
        const self = this;
        const sels = this.sels;
        const scales = this.scales;

        // Modify arrows inplace
        sels.arrows.forEach(arrow => {
            const pt: Vector2D = this.intoMath({
                x: +arrow.attr('x1'),
                y: +arrow.attr('y1')
            })

            const v = nj.array([pt.x, pt.y])

            const pt2 = self.updater.nextLr(v)
            arrow.attr('x2', scales.x(pt2.get(0)))
                .attr('y2', scales.y(pt2.get(1)))
        })
    }

    createQuivers() {
        const self = this;
        const op = this.options;
        const scales = this.scales;
        const sels = this.sels;

        const nx = 11, ny = 11;
        const points = SVG.meshgrid(nx, ny, op.xrange, op.yrange)
        const color = "blue";
        const width = 1.25;

        const quiverGroup = this.base.append('g').attr('id', 'quiver-group') // init should have these groups already selected
        this.clearQuivers()

        sels.arrows = points.map(pt => {
            const pt2 = self.updater.nextLr(nj.array([pt.x, pt.y]))
            //@ts-ignore
            const arrow = SVG.insertArrow(quiverGroup, scales.x(pt.x), scales.y(pt.y), scales.x(pt2.get(0)), scales.y(pt2.get(1)), color, width)
            arrow.classed('quiver', true)
            return arrow
        })
    }

    initPlot() {
        // Initialize plots
        this.plotContours()
        this.createQuivers()
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

        sels.xlabel = this.base.append("text")
            .text("w0")
            .attr("class", "titles")
            .attr("transform", SVG.translate(op.width / 2, op.height + op.pad))

        sels.ylabel = this.base.append("text")
            .text("w1")
            .attr("class", "titles")
            .attr("transform", SVG.translate(-op.pad, op.height / 2) + SVG.rotate(-90))

        // Create click behavior
        this.base.on('click', function () {
            if (self.ticker != undefined) {
                self.ticker.unsubscribe()
            }
            const coords = d3.mouse(this);
            self._curr.step = 0
            self.curr([scales.x.invert(coords[0]), scales.y.invert(coords[1])])

            // if (self.curr().x > 0 && self.curr().y > 0 && self.curr().x < (op.xrange[1] - 0.1) && self.curr().y < (op.yrange[1] - 0.1)) {
            if (self.curr().get(0) > 0 && self.curr().get(1) > 0) {
                self.addStep(self.curr())
                self.clearCircles();
                self.plotDescent();
            }
        })
    }

    curr(): Array
    curr(val: Array | number[]): this
    curr(val?) {
        if (val == null) {
            return this._curr.currLoc
        }

        this._curr.currLoc = nj.array(val);
        return this;
    }

    data(): number[]
    data(val: number[]): this
    data(val?) {
        if (val == null) return this._data
        this._data = val
        return this
    }

    q(): number
    q(val: number): this
    q(val?) {
        if (val == null) {
            return this.updater.q;
        }

        this.updater.q = val
        this.updateQuivers()
        return this;
    }

    eta(): number
    eta(val: number): this
    eta(val?) {
        if (val == null) {
            return this.updater.eta;
        }

        this.updater.eta = val
        this.updateQuivers()
        return this;
    }
}
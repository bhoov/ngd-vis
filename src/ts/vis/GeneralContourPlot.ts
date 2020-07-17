import * as d3 from 'd3'
import { Landscape2D } from "../Landscapes2D"
import { D3Sel, linspace, powspace} from '../util/xd3'
import { Vector2D, Array } from '../types'
import { SVGOptions, SVGVisComponent } from '../util/SVGVisComponent'
import { SimpleEventHandler } from '../util/SimpleEventHandler';
import { SVG } from '../util/SVGplus'
import { getContourValues } from '../plotting'
import { Updater2D } from '../Updater2D'
import { interval } from 'rxjs'
import { take, startWith, scan } from 'rxjs/operators'
import * as nj from "numjs"

type T = number[]

interface GraphOptions extends SVGOptions {
    xrange: [number, number]
    yrange: [number, number]
    n: number                   // Number of meshgrid points along the x axis for contours
    m: number                   // Number of meshgrid points along the y axis for contours
    nx: number                   // Number of meshgrid points along the x axis for quivers
    ny: number                   // Number of meshgrid points along the x axis for quivers
    pad: number                 // Annotations that happen in the margin must take place `pad` distance from the main graph
    nContours: number
    circleEvery: number
    updater: Updater2D
    xlabel: string
    ylabel: string
    title: string
    colorScale: (x: number) => string | number
    maxTick: number // max number of descent updates to take
    interval: number // time between descent updates
}

interface GraphScales {
    x?: d3.ScaleLinear<number, number>,
    y?: d3.ScaleLinear<number, number>,
    color?: (x: number) => string | number,
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
    title?: D3Sel
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
        n: 201,
        m: 201,
        nx: 11,
        ny: 11,
        nContours: 20,
        circleEvery: 4,
        updater: null,
        xlabel: "x",
        ylabel: "y",
        title: null,
        //@ts-ignore
        colorScale: d3.scaleLinear()
            .domain([0, 1.4])
            //@ts-ignore
            .range(["steelblue", "white"])
            //@ts-ignore
            .interpolate(d3.interpolateRgb.gamma(2.2)),
        maxTick: 1000,
        interval: 10,
    }

    sels: GraphSels = {}

    // Other
    _curr = {
        currLoc: nj.array([0.1, 0.2]),
        step: 0,
        ticker: null,
    }

    static events = EVENTS

    constructor(d3parent: D3Sel, eventHandler?: SimpleEventHandler, options: Partial<GraphOptions> = {}) {
        super(d3parent, eventHandler, options)
        super.initSVG(options)
        this.base.classed(this.cssname, true)
        this.options.updater = options.updater == null ? new Updater2D() : options.updater
        this.initPlot()
    }

    static fromLandscape(d3parent: D3Sel, eventHandler: SimpleEventHandler, t: Landscape2D): ContourPlot {
        const updater = new t.updaterClass(t)
        const newOptions = { ...t, updater }
        return new ContourPlot(d3parent, eventHandler, newOptions)
    }

    setUpdater(name: 'block' | 'full') {
        const op = this.options
        if (name == 'block') {
            op.updater = op.updater.toBlock()
        }
        else if (name == 'full') {
            op.updater = op.updater.toFull()
        }
        else {
            console.log("Please enter a valid input as updater");
        }
        this.updateQuivers()
    }

    get scales(): GraphScales {
        const op = this.options
        return {
            x: d3.scaleLinear().domain(op.xrange).range([0, op.width]),
            y: d3.scaleLinear().domain(op.yrange).range([op.height, 0]),
            contours: d3.contours().size([op.n, op.m]),
            curve: d3.curveCatmullRom.alpha(0.5),
            color: op.colorScale
        }
    }

    plotContours() {
        const self = this;
        const op = this.options;
        const scales = this.scales;

        // const contourFunc = (x, y) => this.updater.absErr(nj.array([x, y]))
        const contourFunc = (x, y) => {
            const loss = op.updater.loss(nj.array([x, y]))
            return loss
        }
        const vals = getContourValues(op.n, op.m, op.xrange, op.yrange, contourFunc)
        // let thresholds = linspace(d3.min(vals), d3.max(vals), 20)
        let thresholds = powspace(d3.min(vals), d3.max(vals), op.nContours, 1)

        const contourVals = scales.contours.thresholds(thresholds)(vals)
        const contourGroup = this.base.append('g').attr('id', 'contour-group')
        const contours = contourGroup.selectAll("path.contour")
            .data(contourVals)

        contours.join("path")
            .attr("class", "contour")
            .attr("d", d3.geoPath(d3.geoIdentity().scale(op.width / op.n)))
            .attr("fill", d => {
                return scales.color(d.value)
            })
            .classed("not-fit", true)
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
            this._curr.ticker.unsubscribe()
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
        this.base.selectAll('.descending-point').remove()
        this.base.selectAll('.descending-line').remove()
    }

    clearQuivers() {
        this.base.selectAll('.quiver').remove()
        this.sels.arrows = []
    }

    plotDescent() {
        const self = this;
        const op = this.options;
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

        this._curr.ticker = interval(op.interval).pipe(
            startWith(prep()),
            //@ts-ignore
            scan(v => op.updater.next(v), self.curr()),
            take(op.maxTick)
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
        const op = this.options;
        const sels = this.sels;
        const scales = this.scales;

        // Modify arrows inplace
        sels.arrows.forEach(arrow => {
            const pt: Vector2D = this.intoMath({
                x: +arrow.attr('x1'),
                y: +arrow.attr('y1')
            })

            const pt1 = nj.array([pt.x, pt.y])
            const pt2 = op.updater.nextLr(pt1)

            arrow.attr('x2', scales.x(pt2.get(0)))
                .attr('y2', scales.y(pt2.get(1)))
        })
    }

    createQuivers() {
        const self = this;
        const op = this.options;
        const scales = this.scales;
        const sels = this.sels;

        const points = SVG.meshgrid(op.nx, op.ny, op.xrange, op.yrange)
        const color = "blue";
        const width = 1.25;

        const quiverGroup = this.base.append('g').attr('id', 'quiver-group') // init should have these groups already selected
        this.clearQuivers()

        sels.arrows = points.map(pt => {
            const pt1 = nj.array([pt.x, pt.y])
            const pt2 = op.updater.nextLr(pt1)
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
            .classed("axis-label", true)
            .attr("text-anchor", "middle")
            .attr("class", "titles")
            .attr("transform", SVG.translate(op.width / 2, op.height + op.pad))
            .text(op.xlabel)

        sels.ylabel = this.base.append("text")
            .classed("axis-label", true)
            .attr("text-anchor", "middle")
            .attr("class", "titles")
            .attr("transform", SVG.translate(-op.pad, op.height / 2) + SVG.rotate(-90))
            .text(op.ylabel)

        sels.title = this.base.append("text")
            .classed("axis-label", true)
            .attr("text-anchor", "middle")
            .attr("class", "titles")
            .attr("transform", SVG.translate(op.width / 2, -op.pad / 2))
            .text(op.title)

        // Create click behavior
        this.base.on('click', function () {
            if (self._curr.ticker != undefined) {
                self._curr.ticker.unsubscribe()
            }
            const coords = d3.mouse(this);
            self._curr.step = 0
            self.curr([scales.x.invert(coords[0]), scales.y.invert(coords[1])])
            console.log("Clicked: ", self.curr());

            // if (self.curr().x > 0 && self.curr().y > 0 && self.curr().x < (op.xrange[1] - 0.1) && self.curr().y < (op.yrange[1] - 0.1)) {
            // if (self.curr().get(0) > 0 && self.curr().get(1) > 0) {
            self.addStep(self.curr())
            self.clearCircles();
            self.plotDescent();
            // }
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
        const op = this.options
        if (val == null) {
            return op.updater.q();
        }

        op.updater.q(val)
        this.updateQuivers()
        return this;
    }

    eta(): number
    eta(val: number): this
    eta(val?) {
        const op = this.options
        if (val == null) {
            return op.updater.eta();
        }

        op.updater.eta(val)
        this.updateQuivers()
        return this;
    }
}
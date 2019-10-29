import * as d3 from 'd3'
import {D3Sel} from '../util/xd3'
import * as R from 'ramda'
import {legendColor} from 'd3-svg-legend'
import {Vector2D} from '../types'
import {SVGOptions, SVGVisComponent} from '../util/SVGVisComponent'
import { SimpleEventHandler } from '../util/SimpleEventHandler';
import {SVG} from '../util/SVGplus'
import {getContourValues} from '../plotting'
import {Updater, BlockUpdater} from '../Updater'
import {interval, fromEvent} from 'rxjs'
import {map, tap, take, startWith, scan, switchMap} from 'rxjs/operators'

type T = number[]

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
    color?: d3.ScaleLogarithmic<number, string>,
    curve?: d3.CurveCatmullRomFactory,
    contours?: d3.Contours,
    thresholds?: number[]
}

interface GraphSels {
    xaxis?:D3Sel
    yaxis?:D3Sel
    legend?:D3Sel
    tip?:D3Sel
    xlabel?:D3Sel
    ylabel?:D3Sel
    circle?:D3Sel
    arrows?:D3Sel[]
}

export class ContourPlot extends SVGVisComponent<T> {
    cssname = "simple-graph"

    _data: T

    options:GraphOptions = {
        maxWidth: 450,
        maxHeight: 500,
        margin: {top: 50, right: 75, bottom: 125, left: 50},
        pad: 30,
        xrange: [0, 2.5],
        yrange: [0, 2.5],
        n: 500,
        m: 500,
    } // #state

    scales: GraphScales = {}
    sels: GraphSels = {}


    // Other
    _curr: Vector2D = {x: 0.1, y: 0.2} // #state
    ticker
    updater: Updater

    // Specify the grid for the contours
    ideal: number = 1 // #state

    constructor(d3parent: D3Sel, eventHandler?: SimpleEventHandler, options={}) {
        super(d3parent, eventHandler, options)
        super.initSVG(this.options)
        this.base.classed(this.cssname, true)
        this.updater = new Updater()
        this.initPlot()
    }

    setUpdater(name:'block'|'full'){
        const args = [this.q(), this.eta()]

        if (name == 'block') {
            this.updater = new BlockUpdater(this.q(), this.eta())
        }
        else if (name == 'full') {
            this.updater = new Updater(this.q(), this.eta())
        } 

        else {
            console.log("Please enter a valid input as updater");
        }
        this.updateQuivers()
    }

    plotMinimum() {
        const self = this;
        const op = this.options;
        const scales = this.scales;

        const makeX = (nx:number) => R.range(0, nx).map(d3.scaleLinear().domain([0, nx]).range([0.00001, op.xrange[1]]))
        const yFunc = x => 1/x;
        const xvals = makeX(100)
        const yvals = xvals.map(yFunc)//.map(y => scales.y(y))

        const data = R.zip(xvals.map(scales.x), yvals.map(scales.y))
        const lineGen = d3.line()
        const pathData = lineGen(data)

        const minimumGroup = this.base.append('g').attr('id', 'minimum-group')

        console.log("Path data: ", pathData);

        minimumGroup.append('path')
            .attr('d', lineGen(data))
            .classed('minimum', true)
            .style('stroke-width', 2.5)
            .style('stroke', 'blue')
            .style('fill', null)
    }

    plotContours() {
        const self = this;
        const op = this.options;
        const scales = this.scales;

        const contourFunc = (x, y) => this.updater.absErr({x: x, y: y})
        const vals = getContourValues(op.n, op.m, op.xrange, op.yrange, contourFunc)
        let thresholds = d3.range(d3.min(vals), d3.max(vals), 0.25);

        // Because the minimum value is not a contour but a value, we need to do what we can to approach the min.
        const weighted = 0.91;
        const newMin = (weighted * thresholds[0] + (1-weighted) * thresholds[1])/2
        thresholds = R.insert(1, newMin, thresholds)
        // const newMin = 0;

        scales.color = d3.scaleLog().interpolate(() => d3.interpolateYlGnBu);

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
            .classed('main-fit', d => {
                return d.value == newMin;
            })
            .classed('not-fit', d => {
                return d.value != newMin;
            })
    }

    addCircle(v:Vector2D, prev:Vector2D=null) {
        const self = this;
        const scales = this.scales;
        const sels = this.sels;

        if (prev != null) {
            this.base.append('line')
            .attr('x1', scales.x(prev.x))
            .attr('y1', scales.y(prev.y))
            .attr('x2', scales.x(v.x))
            .attr('y2', scales.y(v.y))
            .classed('descending-line', true)
        }

        sels.circle = this.base.append('circle')
            .attr('cx', scales.x(v.x))
            .attr('cy', scales.y(v.y))
            .attr('r', 2)
            .classed('descending-point', true)

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
                this.addCircle(val, prevVal)
                prevVal = val
            },
            err: (err) => console.log(err),
            complete: () => console.log("COMPLETE")
        }

        const prep = () => {
            this.addCircle(this.curr())
            prevVal = this.curr()
        }

        this.ticker = interval(20).pipe(
            startWith(prep()),
            scan(v => self.updater.next(v), self.curr()),
            take(1000)
        ).subscribe(subObj)
    }

    intoVis(v:Vector2D) {
        return {x: this.scales.x(v.x), y: this.scales.y(v.y)}
    }

    intoMath(v:Vector2D) {
        return {x: this.scales.x.invert(v.x), y: this.scales.y.invert(v.y)}
    }

    updateQuivers() {
        const self = this;
        const sels = this.sels;
        const scales = this.scales;

        // Modify arrows inplace
        sels.arrows.forEach(arrow => {
            const pt:Vector2D = this.intoMath({
                x: +arrow.attr('x1'),
                y: +arrow.attr('y1')
            })

            const pt2 = self.updater.nextLr(pt)
            arrow.attr('x2', scales.x(pt2.x))
                .attr('y2', scales.y(pt2.y))
        })
    }

    createQuivers() {
        const self = this;
        const op = this.options;
        const scales = this.scales;
        const sels = this.sels;

        const nx = 8, ny = 8;
        const points = SVG.meshgrid(nx, ny, op.xrange, op.yrange)
        const color = "red";
        const width = 2;

        const quiverGroup = this.base.append('g').attr('id','quiver-group') // init should have these groups already selected
        this.clearQuivers()

        sels.arrows = points.map(pt => {
            const pt2 = self.updater.nextLr(pt)
            const arrow = SVG.insertArrow(quiverGroup, scales.x(pt.x), scales.y(pt.y), scales.x(pt2.x), scales.y(pt2.y), color, width)
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
            .attr("transform", SVG.translate(op.width/2, op.height + op.pad))

        sels.ylabel = this.base.append("text")
            .text("w1")
            .attr("class", "titles")
            .attr("transform", SVG.translate(-op.pad, op.height/2) + SVG.rotate(-90))

        // Create click behavior
        this.base.on('click', function() {
            if (self.ticker != undefined) {
                self.ticker.unsubscribe()  
            }
            const coords = d3.mouse(this);
            self.curr({x: scales.x.invert(coords[0]), y: scales.y.invert(coords[1])})
            self.addCircle(self.curr())
            self.clearCircles();
            self.plotDescent();
        })
    }

    curr(): Vector2D
    curr(val: Vector2D): this
    curr(val?) {
        if (val == null) {
            return this._curr
        }

        this._curr = val;
        return this;
    }

    data():number[]
    data(val:number[]): this
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
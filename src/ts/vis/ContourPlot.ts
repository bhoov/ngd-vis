import * as d3 from 'd3'
import {D3Sel} from '../util/xd3'
import * as R from 'ramda'
import {legendColor} from 'd3-svg-legend'
import {SVGOptions, Vector2D} from '../types'
import {SVGVisComponent, HTMLVisComponent} from '../util/VisComponent'
import { SimpleEventHandler } from '../util/SimpleEventHandler';
import {SVG} from '../util/SVGplus'
import {getContourValues} from '../plotting'
import {Updater} from '../Updater'
import {interval, fromEvent} from 'rxjs'
import {map, tap, take, startWith, scan, switchMap} from 'rxjs/operators'

type T = number[]

interface GraphOptions extends SVGOptions {
    xrange: [number, number]
    yrange: [number, number]
    n: number                   // Number of meshgrid points along the x axis
    m: number                   // Number of meshgrid points along the y axis
}

interface GraphScales {
    x?: d3.ScaleLinear<number, number>,
    y?: d3.ScaleLinear<number, number>,
    color?: d3.ScaleLogarithmic<number, string>,
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
        maxHeight: 450,
        margin: {top: 50, right: 75, bottom: 75, left: 50},
        pad: 30,
        xrange: [0, 1.6],
        yrange: [0, 1.6],
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
        this.base.classed(this.cssname, true)
        this.updater = new Updater()
        this.init()
    }

    plotContours() {
        const self = this;
        const op = this.options;
        const scales = this.scales;

        const contourFunc = (x, y) => this.updater.absErr({x: x, y: y})
        const vals = getContourValues(op.n, op.m, op.xrange, op.yrange, contourFunc)
        let thresholds = d3.range(d3.min(vals), d3.max(vals), 0.1);

        // Because the minimum value is not a contour but a value, we need to do what we can to approach the min.
        const weighted = 0.9;
        const newMin = (weighted * thresholds[0] + (1-weighted) * thresholds[1])/2
        thresholds = R.insert(1, newMin, thresholds)

        scales.color = d3.scaleLog().interpolate(() => d3.interpolateYlGnBu);

        scales.contours.thresholds(thresholds)

        const contourVals = scales.contours(vals)
        const contours = this.base.selectAll("path.contour")
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

    addCircle(v:Vector2D) {
        const self = this;
        const scales = this.scales;
        const sels = this.sels;

        sels.circle = this.base.append('circle')
            .attr('cx', scales.x(v.x))
            .attr('cy', scales.y(v.y))
            .attr('r', 2)
            .classed('descending-point', true)

        return v;
    }

    clearCircles() {
        d3.selectAll('.descending-point').remove()
    }

    clearQuivers() {
        d3.selectAll('.quiver').remove()
        this.sels.arrows = []
    }

    plotDescent() {
        const self = this;

        const subObj = {
            next: (val) => {
                this.addCircle(val)
            },
            err: (err) => console.log(err),
            complete: () => console.log("COMPLETE")
        }

        this.ticker = interval(100).pipe(
            startWith(this.addCircle(this.curr())),
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

        this.clearQuivers()

        sels.arrows = points.map(pt => {
            const pt2 = self.updater.nextLr(pt)
            const arrow = SVG.insertArrow(this.base, scales.x(pt.x), scales.y(pt.y), scales.x(pt2.x), scales.y(pt2.y), color, width)
            arrow.classed('quiver', true)
            return arrow
        })
    }

    init() { 
        const self = this;
        const op = this.options;
        const scales = this.scales;
        const sels = this.sels;

        op.width = op.maxWidth - (op.margin.left + op.margin.right)
        op.height = op.maxHeight - (op.margin.top + op.margin.bottom)

        scales.contours = d3.contours().size([op.n, op.m])
        SVG.addArrows(this.svg)

        this.svg
            .attr("width", op.width)
            .attr("height", op.height)

        this.base = SVG.group(this.base, '', {x: op.margin.left, y: op.margin.top})

        scales.x = d3.scaleLinear().domain(op.xrange).range([0, op.width])
        scales.y = d3.scaleLinear().domain(op.yrange).range([op.height, 0])

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

        sels.legend = this.svg.append("g")
            .attr("class", "legend")
            .attr("transform", SVG.translate(op.width + op.pad / 2, 0)); 

        this.base.on('click', function() {
            if (self.ticker != undefined) {
                self.ticker.unsubscribe()  
            }
            const coords = d3.mouse(this);
            console.log(coords);
            self.curr({x: scales.x.invert(coords[0]), y: scales.y.invert(coords[1])})
            self.addCircle(self.curr())
            self.clearCircles();
            self.plotDescent();
        })

        this.plotContours()
        this.createQuivers()
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
        // this.createQuivers()
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
        return this;
    }

    lrScale(): number
    lrScale(val: number): this
    lrScale(val?) {
        if (val == null) {
            return this.updater.lrScale;
        }

        this.updater.lrScale = val
        this.updateQuivers()
        return this;
    }
}

function plotCircles(parent: D3Sel, v:Vector2D): D3Sel {
    const circle = parent.append('circle')
        .attr('cx', v.x)
        .attr('cy', v.y)
        .attr('r', 3)
        .classed('descending-point', true)

    return circle
}
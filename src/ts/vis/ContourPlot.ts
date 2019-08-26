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
import {map, tap, take, startWith} from 'rxjs/operators'

type T = number[]


export class ContourPlot extends SVGVisComponent<T> {
    cssname = "simple-graph"

    _data: T

    options:SVGOptions = {
        maxWidth: 450,
        maxHeight: 450,
        margin: {top: 50, right: 75, bottom: 75, left: 50},
        pad: 30,
    }

    // Scales
    xrange = [0, 1.6]
    yrange = [0, 1.6]
    updater = new Updater()
    x
    y
    color
    contours
    thresholds

    // Selections
    xaxis
    yaxis
    legend
    tip
    xlabel
    ylabel
    circle

    // Other
    _curr: Vector2D = {x: 0.1, y: 0.2}

    // Specify the grid for the contours
    n: number = 500
    m: number = 500
    ideal: number = 1
    func: (x:number, y:number) => number
    dfunc: (x:number, y:number) => [number, number]

    constructor(d3parent: D3Sel, eventHandler?: SimpleEventHandler, options={}) {
        super(d3parent, eventHandler, options)
        this.base.classed(this.cssname, true)
        this.init()
    }

    plotContours() {
        const op = this.options;
        const self = this;

        const vals = getContourValues(this.n, this.m, this.xrange, this.yrange, this.func)
        this.thresholds = d3.range(d3.min(vals), d3.max(vals), 0.1);

        // Because the minimum value is not a contour but a value, we need to do what we can to approach the min.
        const weighted = 0.9;
        const newMin = (weighted*this.thresholds[0] + (1-weighted)*this.thresholds[1])/2
        this.thresholds = R.insert(1, newMin, this.thresholds)

        this.color = d3.scaleLog().interpolate(() => d3.interpolateYlGnBu);

        this.contours.thresholds(this.thresholds)

        const contourVals = this.contours(vals)
        const contours = this.base.selectAll("path.contour")
            .data(contourVals)

        contours.join("path")
            .attr("class", "contour")
            .attr("d", d3.geoPath(d3.geoIdentity().scale(op.width / this.n)))
            .attr("fill", d => {
                return this.color(d.value)
            })
            .classed('main-fit', d => {
                return d.value == newMin;
            })
            .classed('not-fit', d => {
                return d.value != newMin;
            })
    }

    intoVis(v:Vector2D) {
        return {x: this.x(v.x), y: this.y(v.y)}
    }

    intoMath(v:Vector2D) {
        return {x: this.x.invert(v.x), y: this.y.invert(v.y)}
    }

    plotDescent() {
        const self = this;
        const plotter = curryPlotCircles(this.base)

        interval(1000).pipe(
            tap(v => console.log(v)),
            startWith(self.curr),
            tap(v => console.log(v)),
            map(self.updater.next),
            map(self.intoVis),
            map(plotter),
            take(5)
        )

        // this.circle = this.base.append('circle')
        //     .attr('cx', this.x(this._curr.x))
        //     .attr('cy', this.y(this._curr.y))
        //     .attr('r', 3)
        //     .classed('descending-point', true)
    }

    plotQuivers() {
        const self = this;
        const nx = 8, ny = 8;
        const points = SVG.meshgrid(nx, ny, this.xrange, this.yrange)
        const color = "red";
        const width = 2;
        const gscale = 0.1;

        points.forEach(pt => {
            const g = self.dfunc(pt.x, pt.y).map(grad => -gscale * grad)
            const x2 = pt.x + g[0];
            const y2 = pt.y + g[1];
            const arrow = SVG.insertArrow(this.base, this.x(pt.x), this.y(pt.y), this.x(x2), this.y(y2), color, width)
            arrow.classed('quiver', true)
        })
    }

    init() { 
        const self = this;

        // this.func = (x, y) =>  Math.pow(x * y - this.ideal, 2);
        this.func = (x, y) =>  Math.abs(x * y - this.ideal);
        this.dfunc = (x, y) => {
            const dx = 2*(x * y - this.ideal) * y;  
            const dy = 2*(x * y - this.ideal) * x;  

            return [dx, dy]
        }

        const op = this.options

        op.width = op.maxWidth - (op.margin.left + op.margin.right)
        op.height = op.maxHeight - (op.margin.top + op.margin.bottom)

        this.contours = d3.contours().size([this.n, this.m])
        SVG.addArrows(this.svg)

        this.svg
            .attr("width", op.width)
            .attr("height", op.height)

        this.base = SVG.group(this.base, '', {x: op.margin.left, y: op.margin.top})

        this.x = d3.scaleLinear().domain(this.xrange).range([0, op.width])
        this.y = d3.scaleLinear().domain(this.yrange).range([op.height, 0])

        this.xaxis = this.base.append("g")
            .attr("class", "axis axis--x")
            .attr("transform", SVG.translate(0, op.height))
            .call(d3.axisBottom(this.x).ticks(3, "s"));
        
        this.yaxis = this.base.append("g")
            .attr("class", "axis axis--y")
            .attr("transform", SVG.translate(0, 0))
            .call(d3.axisLeft(this.y).ticks(3, "s"));

        this.xlabel = this.base.append("text")
            .text("w0")
            .attr("class", "titles")
            .attr("transform", SVG.translate(op.width/2, op.height + op.pad))

        this.ylabel = this.base.append("text")
            .text("w1")
            .attr("class", "titles")
            .attr("transform", SVG.translate(-op.pad, op.height/2) + SVG.rotate(-90))

        this.legend = this.svg.append("g")
            .attr("class", "legend")
            .attr("transform", SVG.translate(op.width + op.pad / 2, 0)); 

        this.base.on('click', function() {
            const coords = d3.mouse(this);
            console.log(coords);
            self.curr({x: self.x.invert(coords[0]), y: self.y.invert(coords[1])})
            self.plotDescent()
        })

        fromEvent(this.base.node(), 'dblclick').subscribe(this.plotDescent)

        this.plotContours()
        this.plotQuivers()
        // this.plotDescent()
    }

    curr(): Vector2D
    curr(val: Vector2D): this
    curr(val?) {
        if (val == null) {
            return this._curr
        }

        this._curr = val;
        this.plotDescent()

        return this;
    }

    data():number[]
    data(val:number[]): this
    data(val?) {
        if (val == null) return this._data
        this._data = val
        return this
    }
}

function plotCircles(parent: D3Sel, v:Vector2D): D3Sel {
    const circle = this.base.append('circle')
        .attr('cx', v.x)
        .attr('cy', v.y)
        .attr('r', 3)
        .classed('descending-point', true)

    return circle
}

const curryPlotCircles = R.curry(plotCircles);
import * as d3 from 'd3'
import { D3Sel } from '../util/xd3'
import * as R from 'ramda'
import { Vector2D } from '../types'
import { SVGOptions, SVGVisComponent } from '../util/VisComponent'
import { SimpleEventHandler } from '../util/SimpleEventHandler';
import { SVG } from '../util/SVGplus'
import { range, from, interval, fromEvent } from 'rxjs'
import { map, tap, take, startWith, scan, switchMap } from 'rxjs/operators'
import { ManualUpdater } from './ManualUpdater'
import { GolfBall, BallHistory } from './GolfBall'

interface GraphOptions extends SVGOptions {
    xrange: [number, number]
    yrange: [number, number]
}

interface GraphScales {
    x?: d3.ScaleLinear<number, number>,
    y?: d3.ScaleLinear<number, number>,
    path?: d3.Line<number>
}

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

export class GolfLosses extends SVGVisComponent<T> {
    cssname = "golf-losses"

    _data: T

    options: GraphOptions = {
        maxWidth: 450,
        maxHeight: 250,
        margin: { top: 0, right: 75, bottom: 30, left: 50 },
        pad: 30,
        xrange: [-7, 7],
        yrange: [0, 1000],
    }

    scales: GraphScales = {}

    sels: GraphSels = {}

    constructor(d3parent: D3Sel, eventHandler?: SimpleEventHandler, options = {}) {
        super(d3parent, eventHandler, options)
        super.initSVG(this.options)
        this.base.classed(this.cssname, true)
        this.data(<LineTracker>{})
        this.init()
    }

    /**
     * Put a vector into the coordinate system used by the visualization
     * 
     * @param v Vector 
     */
    intoVis(v: Vector2D) {
        return { x: this.scales.x(v.x), y: this.scales.y(v.y) }
    }

    // Take a vector in the coordinate system and return it to the math coordinates
    intoMath(v: Vector2D) {
        return { x: this.scales.x.invert(v.x), y: this.scales.y.invert(v.y) }
    }

    /**
     * Plot the values of all x according to the function
     * 
     * @param x A linspace of x values over which to plot a curve
     */
    private addDataKey_(classname: string) {
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
        currVals.vals.push(d.x);

        const lim = R.takeLast(1000);

        currVals.sel.data([currVals])
            .join("path")
            .classed(d.classname, true)
            .attr("d", d => {
                return self.scales.path(lim(d.vals))
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

        // Initialize Scales
        scales.x = d3.scaleLinear().domain(op.xrange).range([0, op.width])
        scales.y = d3.scaleLinear().domain(op.yrange).range([op.pad, op.height])

        scales.path =  d3.line<number>()
            .x((d: number, i: number) => scales.x(d))
            .y((d: number, i: number) => scales.y(i))
            .curve(d3.curveLinear)

        // Create axes
        sels.xaxis = this.base.append("g")
            .attr("class", "axis axis--x")
            .attr("transform", SVG.translate(0, op.pad))
            .call(d3.axisTop(scales.x).ticks(3, "s"));

        // sels.xlabel = this.base.append("text")
        //     .text("x")
        //     .attr("class", "titles")
        //     .attr("transform", SVG.translate(op.width / 2, 0))


        // Run example
        // const linspace = (start, end, n) => {
        //     const delta = (end - start) / (n - 1)
        //     return d3.range(start, end + delta, delta).slice(0, n)
        // }

        // const f = x => 0.5 * Math.sin(x / 50) * op.xrange[1]

        // const xs = linspace(op.yrange[0], op.yrange[1], 1000).map(f)

        // const ticker = interval(20).pipe(
        //     map(i => xs[i]),
        //     map(x => {
        //         return {
        //             x: x,
        //             classname: 'tracked-line'
        //         }
        //     }),
        //     take(1000)
        // )

        // ticker.subscribe({
        //     next: (x: BallHistory) => {
        //         this.plotPath(x)
        //     }
        // })
    }

    data(): T
    data(val: T): this
    data(val?) {
        if (val == null) return this._data
        this._data = val;
        return this
    }
}

function toVec([x, y]: [number, number]): Vector2D {
    return { x: x, y: y }
}
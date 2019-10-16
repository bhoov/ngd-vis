import * as d3 from 'd3'
import {D3Sel} from '../util/xd3'
import * as R from 'ramda'
import {Vector2D} from '../types'
import {SVGOptions, SVGVisComponent} from '../util/VisComponent'
import { SimpleEventHandler } from '../util/SimpleEventHandler';
import {SVG} from '../util/SVGplus'
import {interval, fromEvent} from 'rxjs'
import {map, tap, take, startWith, scan, switchMap} from 'rxjs/operators'
import {ManualUpdater} from './ManualUpdater'
import { start } from 'repl'

interface Ball {
    x: number
    updater: ManualUpdater
}

type T = Array<Ball>

interface GraphOptions extends SVGOptions {
    xrange: [number, number]
    yrange: [number, number]
    x0: number // Where should the golf ball start?
}

interface GraphScales {
    x?: d3.ScaleLinear<number, number>,
    y?: d3.ScaleLinear<number, number>,
    paths?: d3.Line<number>[]
}

interface GraphSels {
    xaxis?:D3Sel
    yaxis?:D3Sel
    xlabel?:D3Sel
    line?:D3Sel
    backdrop?:D3Sel
    ball?:D3Sel
}

const func = x => Math.pow(Math.tanh(x), 2)
const dFunc = x => Math.pow(Math.cosh(x), -2)
const ddFunc = x => -2 * Math.tanh(x) * Math.pow((1 / Math.cosh(x)), 2)

export class GolfHole1D extends SVGVisComponent<T> {
    cssname = "multi-parabola-chart"

    _data: T

    options:GraphOptions = {
        maxWidth: 450,
        maxHeight: 200,
        margin: {top: 50, right: 75, bottom: 75, left: 50},
        pad: 30,
        xrange: [-7, 7],
        yrange: [0, 1.3],
        x0: -5
    }

    scales: GraphScales = {}

    sels: GraphSels = {}

    updater: ManualUpdater

    constructor(d3parent: D3Sel, eventHandler?: SimpleEventHandler, options={}) {
        super(d3parent, eventHandler, options)
        this.base.classed(this.cssname, true)
        this.init()
        this.updater = new ManualUpdater(func, dFunc, ddFunc)
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
            .x((d:number, i:number) => scales.x(d))
            .y((d:number, i:number) => scales.y(func(d)))
            .curve(d3.curveLinear)

        scales.paths = [baseLine]

        // baseLine.y((d:number, i:number) => scales.y(func(d)))

        const linspace = (start, end, n) => {
            const delta = (end - start) / (n - 1)
            return d3.range(start, end+delta, delta).slice(0, n)
        }

        const xs = linspace(op.xrange[0], op.xrange[1], 1000)
        this.plot(xs)
        this.initBalls()
    }

    nextBalls() {
        const self = this;

        // Iterate to the next x
        const data = this.data().map(o => {
            return {x: o.updater.next(o.x), updater: o.updater}
        })

        return data
    }

    plotBalls() {
        const self = this;

        // Take current x, put function into visualization
        const data = this.data().map(o => {
            const vec = {x: o.x, y: o.updater.f(o.x)}
            return self.intoVis(vec)
        })

        self.sels.ball = self.base.selectAll('.golf-ball')
            .data(data)
            .join('circle')
            .classed("golf-ball", true)
            .attr("cx", d => d.x)
            .attr("cy", d => d.y)
            .attr("r", "5px")
    }

    initBalls() {
        const self = this, op = this.options;

        // Create Backdrop for mouse interfaces
        this.sels.backdrop = this.base.append("g")
            .attr("id", "backdrop")
            .classed('grass', true)
            .append("rect")
            .attr("height", op.height)
            .attr("width", op.width)

        this.sels.backdrop.on('click', function() {
            const click = self.intoMath(toVec(d3.mouse(this)))
            const fVal = {x: click.x, y: func(click.x)}
            const plotFVal = self.intoVis(fVal)

            console.log(plotFVal);

            self.data()
            self.sels.ball = self.base.selectAll('.golf-ball')
                .data([plotFVal])
                .join('circle')
                .classed("golf-ball", true)
                .attr("cx", d => d.x)
                .attr("cy", d => d.y)
                .attr("r", "5px")

        const subObj = {
            next: x => console.log(x)
        }

         interval(50).pipe(
            startWith(() => fVal),
            tap(x => console.log(x)),
            // @ts-ignore
            scan(x => self.updater.next(x)),
            tap(x => console.log(x)),
            take(10)
        ).subscribe(subObj)
        })
    }

    data():T
    data(val:T): this
    data(val?) {
        if (val == null) return this._data
        this._data = val;
        this.plotBalls();
        return this
    }


    plot(x:number[]) {
        const self = this, scales = this.scales, sels = this.sels;

        scales.paths.forEach(line => {
            this.base.append("path")
                .datum(x)
                .attr("class", "line")
                .attr("d", d => {
                    return line(d)
                })
            })
    }
}

function toVec([x, y]:[number, number]):Vector2D {
    return {x: x, y: y}
}

const click2val = R.compose(toVec)
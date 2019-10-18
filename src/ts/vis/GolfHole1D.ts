import * as d3 from 'd3'
import { D3Sel } from '../util/xd3'
import * as R from 'ramda'
import { Vector2D } from '../types'
import { SVGOptions, SVGVisComponent } from '../util/VisComponent'
import { SimpleEventHandler } from '../util/SimpleEventHandler';
import { SVG } from '../util/SVGplus'
import { interval, fromEvent } from 'rxjs'
import { map, tap, take, startWith, scan, switchMap } from 'rxjs/operators'
import { ManualUpdater } from './ManualUpdater'
import { start } from 'repl'

interface Ball {
    x: number
    updater: ManualUpdater
}

type T = Ball

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
    xaxis?: D3Sel
    yaxis?: D3Sel
    xlabel?: D3Sel
    line?: D3Sel
    backdrop?: D3Sel
    ball?: D3Sel
}

// Note that plotFunc is the loss function we plot and func is the component of the loss function needed for the updater
const plotFunc = x => Math.pow(Math.tanh(x), 2)
const func = x => Math.tanh(x)
const dFunc = x => Math.pow(Math.cosh(x), -2)
const ddFunc = x => -2 * Math.tanh(x) / Math.pow(Math.cosh(x), 2)

export class GolfHole1D extends SVGVisComponent<T> {
    cssname = "golf-hole-chart"

    _data: T

    options: GraphOptions = {
        maxWidth: 450,
        maxHeight: 200,
        margin: { top: 50, right: 75, bottom: 75, left: 50 },
        pad: 30,
        xrange: [-7, 7],
        yrange: [0, 1.3],
        x0: -5
    }

    scales: GraphScales = {}

    sels: GraphSels = {}

    updater: ManualUpdater

    constructor(d3parent: D3Sel, eventHandler?: SimpleEventHandler, options = {}) {
        super(d3parent, eventHandler, options)
        this.base.classed(this.cssname, true)
        this.init()
        this.updater = new ManualUpdater(func, dFunc, ddFunc)
        this.data({ x: 5, updater: this.updater })
        this.initBalls()
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

    // Get the datapoint that would represent the next ball
    nextBall(b: Ball): Ball {
        const newB = R.assoc('x', b.updater.next(b.x), b)
        return newB
    }

    // Turn a number into a vector
    num2vec(x: number): Vector2D {
        return { x: x, y: plotFunc(x) }
    }

    // Turn a ball into a vector
    ball2vec(b: Ball): Vector2D {
        return this.num2vec(b.x)
    }

    // Turn a ball into a vector in the visualization coordinate system
    ball2vis(b: Ball) {
        return this.intoVis(this.ball2vec(b))
    }

    // Plot a ball on the chart
    plotBall(b: Ball, cls = 'golf-ball') {
        const self = this;

        const toClass = name => '.' + name
        const clsSel = toClass(cls)

        const ball = this.ball2vis(b)
        self.sels.ball = self.base.selectAll(clsSel)
            .data([ball])
            .join('circle')
            .classed(cls, true)
            .attr("cx", d => d.x)
            .attr("cy", d => d.y)
            .attr("r", "5px")
    }

    /**
     * Plot the values of all x according to the function
     * 
     * @param x A linspace of x values over which to plot a curve
     */
    plotCurve(x: number[]) {
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

        this.base = SVG.group(this.base, '', { x: op.margin.left, y: op.margin.top })

        scales.x = d3.scaleLinear().domain(op.xrange).range([0, op.width])
        scales.y = d3.scaleLinear().domain(op.yrange).range([op.height, 0])

        sels.xaxis = this.base.append("g")
            .attr("class", "axis axis--x")
            .attr("transform", SVG.translate(0, op.height))
            .call(d3.axisBottom(scales.x).ticks(3, "s"));

        sels.xlabel = this.base.append("text")
            .text("x")
            .attr("class", "titles")
            .attr("transform", SVG.translate(op.width / 2, op.height + op.pad))

        const baseLine = d3.line<number>()
            .x((d: number, i: number) => scales.x(d))
            .y((d: number, i: number) => scales.y(plotFunc(d)))
            .curve(d3.curveLinear)

        scales.paths = [baseLine]

        const linspace = (start, end, n) => {
            const delta = (end - start) / (n - 1)
            return d3.range(start, end + delta, delta).slice(0, n)
        }

        const xs = linspace(op.xrange[0], op.xrange[1], 1000)
        this.plotCurve(xs)
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

        const outOfBounds = (b: Ball) => {
            const tooSmall = (x) => x < (1 * op.xrange[0])
            const tooBig = (x) => x > (1 * op.xrange[1])
            return (isNaN(b.x) || tooSmall(b.x) || tooBig(b.x))
        }

        const subObj = {
            next: b => {
                self.plotBall(b)  
            },
            error: b => console.log("ERROR: ", b),
            complete: () => console.log("COMPLETE"),
        }


        // Running ticker starts as an empty subscription object, is later replaced by the running ticker
        let runningTicker = {
            unsubscribe: () => console.log("Empty Ticker!")
        }

        const ticker = () => interval(10).pipe(
            scan((acc: Ball) => {
                const newBall = self.nextBall(self.data())
                const currBallSel = d3.select('.golf-ball')
                if (currBallSel.classed('dead-ball')) {
                    console.log("STAY DEAD");
                    runningTicker.unsubscribe()
                }
                else if (outOfBounds(newBall)) {
                    console.log("KILLING");
                    currBallSel.classed('dead-ball', true)
                    runningTicker.unsubscribe()
                }
                else {
                    self.data(newBall)
                }
                return self.data()

            }, self.data()),
            take(5000)
        ).subscribe(subObj)

        this.sels.backdrop.on('click', function () {
            runningTicker.unsubscribe()
            const click = toVec(d3.mouse(this))
            self.data(R.assoc('x', self.intoMath(click).x, self.data()))
            console.log(self.data());
            self.plotBall(self.data())

            if (outOfBounds(self.data())) {
                self.sels.ball.classed('dead-ball', true)
            }
            else {
                self.sels.ball.classed('dead-ball', false)
            }

            runningTicker = ticker()
        })
    }

    data(): T
    data(val: T): this
    data(val?) {
        if (val == null) return this._data
        this._data = val;
        return this
    }

    q(): number
    q(val: number): this
    q(val?) {
        if (val == null) return this.updater.q
        this.updater.q = val
        return this
    }

    eta(): number
    eta(val: number): this
    eta(val?) {
        if (val == null) return this.updater.eta
        this.updater.eta = val
        return this
    }
}

function toVec([x, y]: [number, number]): Vector2D {
    return { x: x, y: y }
}
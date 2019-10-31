import * as d3 from 'd3'
import { D3Sel, linspace } from '../util/xd3'
import * as R from 'ramda'
import { Vector2D } from '../util/types'
import { SVGOptions, SVGVisComponent } from '../util/SVGVisComponent'
import { SimpleEventHandler } from '../util/SimpleEventHandler';
import { SVG } from '../util/SVGplus'
import { interval, fromEvent } from 'rxjs'
import { take, scan } from 'rxjs/operators'
import { ManualUpdater } from './ManualUpdater'
import { GolfBall } from './GolfBall'
import { landscapes, Landscape, baseLoss, getPlotFunc } from "../GolfLandscapes";


type T = GolfBall[]

interface GraphOptions extends SVGOptions {
    pad: number
    maxIter: number // How many iterations to take?
    landscape: Landscape
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

// // Note that plotFunc is the loss function we plot and func is the component of the loss function needed for the updater
// // export const func = x => Math.tanh(x)
// // export const dFunc = x => Math.pow(Math.cosh(x), -2)
// export const func = x => Math.tanh(x - 11) / 4 + Math.tanh(x - 6) / 4 + Math.tanh(x) + Math.tanh(x + 6) / 4 + Math.tanh(x + 11) / 4
// export const dFunc = x => Math.pow(Math.cosh(x - 11), -2) / 4 + Math.pow(Math.cosh(x - 6), -2) / 4 + Math.pow(Math.cosh(x), -2) + Math.pow(Math.cosh(x + 6), -2) / 4 + Math.pow(Math.cosh(x + 11), -2) / 4
// // export const func = x => Math.sign(x) * (1 - (1 / (1 + Math.abs(x))))
// // export const dFunc = x => 1 / Math.pow(1 + Math.abs(x), 2)

// export const plotFunc = x => baseLoss(func(x))

export class GolfHole1D extends SVGVisComponent<T> {
    cssname = "golf-hole-chart"

    _data: T

    options: GraphOptions = {
        maxWidth: 400,
        maxHeight: 200,
        margin: { top: 10, right: 10, bottom: 40, left: 50 },
        pad: 30,
        maxIter: 600,
        landscape: landscapes.hole
    }

    scales: GraphScales = {}

    sels: GraphSels = {}

    constructor(d3parent: D3Sel, eventHandler?: SimpleEventHandler, options = {}) {
        super(d3parent, eventHandler, options)
        super.initSVG(options, ["bg"])
        this.base.classed(this.cssname, true)
        this.init()

        // const data = [
        //     new GolfBall(new ManualUpdater(func, dFunc, 0, 0.5), 'golf-ball-sgd', 4),
        //     new GolfBall(new ManualUpdater(func, dFunc, 0.5, 0.07), 'golf-ball-sngd', 3),
        //     new GolfBall(new ManualUpdater(func, dFunc, 1, 0.01), 'golf-ball-ngd', 5)
        // ]
        const z = this.options.landscape
        const data = [
            new GolfBall(new ManualUpdater(z.f, z.df, 0, 0.9), 'golf-ball-sgd', 4),
            new GolfBall(new ManualUpdater(z.f, z.df, 0.5, 0.1), 'golf-ball-sngd', 3),
            new GolfBall(new ManualUpdater(z.f, z.df, 1, 0.003), 'golf-ball-ngd', 5)
        ]

        this.data(data)
        this.initBalls()
    }

    landscape(): Landscape
    landscape(val: Landscape): this
    landscape(val?) {
        if (val == null) return this.options.landscape
        const op = this.options
        op.landscape = val

        // Update xrange and yrange
        this.updateScales(op)
        this.updateAxes(this.scales, op)

        // Update data
        this.data().forEach(b => {
            b.updater.f = val.f
            b.updater.df = val.df
        })

        const xs = linspace(op.landscape.xrange[0], op.landscape.xrange[1], 1000)
        this.clearCurve()
        this.plotCurve(xs)

        return this
    }

    /** Return first updater in data */
    get dataHead(): GolfBall {
        try {
            return this.data()[0]
        }
        catch (err) {
            console.log("Looks like there is no data in this golf hole");
            console.log(err);
        }
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

    // Turn a number into a vector
    num2vec(x: number): Vector2D {
        const op = this.options
        return { x: x, y: op.landscape.loss(x) }
    }

    // Turn a ball into a vector in the visualization coordinate system
    ball2vis(b: GolfBall) {
        return this.intoVis(b.toVec(getPlotFunc(this.options.landscape)))
    }

    // Plot a ball on the chart
    plotBall(b: GolfBall) {
        const self = this;

        const toClass = name => '.' + name
        const clsSel = toClass(b.classname)

        const ball = this.ball2vis(b)
        self.sels.ball = self.base.selectAll(clsSel)
            .data([ball])
            .join('circle')
            .classed('golf-ball', true)
            .classed(b.classname, true)
            .attr("cx", d => d.x)
            .attr("cy", d => d.y)
            .attr("r", "5px")
    }

    clearCurve() {
        this.layers.bg.selectAll('.line').remove()
    }

    /**
     * Plot the values of all x according to the function
     * 
     * @param x A linspace of x values over which to plot a curve
     */
    plotCurve(x: number[]) {
        const self = this, scales = this.scales, sels = this.sels;

        scales.paths.forEach(line => {
            this.layers.bg.append("path")
                .datum(x)
                .attr("class", "line")
                .attr("d", d => {
                    return line(d)
                })
        })
    }

    updateScales(op: GraphOptions) {
        const scales = this.scales

        scales.x = d3.scaleLinear().domain(op.landscape.xrange).range([0, op.width])
        scales.y = d3.scaleLinear().domain(op.landscape.yrange).range([op.height, 0])
    }

    updateAxes(scales: GraphScales, op: GraphOptions) {
        const sels = this.sels
        sels.xaxis.call(d3.axisBottom(scales.x).tickValues([0]).tickFormat(x => '0'))
    }

    init() {
        const self = this;
        const op = this.options;
        const scales = this.scales;
        const sels = this.sels;

        this.updateScales(op)

        sels.xaxis = this.base.append("g")
            .attr("class", "axis axis--x")
            .attr("transform", SVG.translate(0, op.height))

        sels.xlabel = this.base.append("text")
            .text("\u03B8 - \u03B8*")
            .attr("class", "titles")
            .attr("transform", SVG.translate(op.width / 2, op.height + op.pad))

        this.updateAxes(scales, op)

        const baseLine = d3.line<number>()
            .x((d: number, i: number) => scales.x(d))
            .y((d: number, i: number) => scales.y(getPlotFunc(op.landscape)(d)))
            .curve(d3.curveLinear)

        scales.paths = [baseLine]

        const xs = linspace(op.landscape.xrange[0], op.landscape.xrange[1], 1000)
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
        const tooSmall = (x: number) => x < (op.landscape.xrange[0])
        const tooBig = (x: number) => x > (op.landscape.xrange[1])

        const outOfBounds = (x: number) => {
            return (isNaN(x) || tooSmall(x) || tooBig(x))
        }

        const fixOutOfBounds = (x: number) => {
            let out: number

            if (isNaN(x)) out = op.landscape.xrange[0]
            else if (tooSmall(x)) out = op.landscape.xrange[0]
            else if (tooBig(x)) out = op.landscape.xrange[1]
            else out = x

            return out
        }

        function getNextBall(b: GolfBall): GolfBall {
            const nextX = b.nextX()
            const currBallSel = self.base.select(`.${b.classname}`)
            const forceX = fixOutOfBounds(nextX)
            if (!currBallSel.classed('dead-ball')) {
                return b.step_(forceX)
            }
            return b
        }

        const subObj = {
            next: gbs => {
                gbs.forEach(b => self.plotBall(b))
            },
            error: b => console.log("ERROR: ", b),
            complete: () => console.log("COMPLETE"),
        }

        console.log(op.maxIter);

        const ticker = () => interval(10).pipe(
            scan((acc: T) => {
                // Unsubscriber ticker if all balls dead
                if (R.all((b: GolfBall) => d3.select(`.${b.classname}`).classed('dead-ball'), self.data())) {
                    runningTicker.unsubscribe()
                }

                self.data().forEach(b => getNextBall(b))
                return self.data()
            }, self.data()),
            take(op.maxIter)
        ).subscribe(subObj)

        // Running ticker starts as an empty subscription object, is later replaced by the running ticker
        let runningTicker = {
            unsubscribe: () => console.log("Empty Ticker!")
        }

        this.sels.backdrop.on('click', function () {
            runningTicker.unsubscribe()
            const click = toVec(d3.mouse(this))
            d3.selectAll('.golf-ball').classed('dead-ball', false)
            self.data().forEach((b, i) => b.x = self.intoMath(click).x)
            self.data().forEach(b => self.plotBall(b))
            self.eventHandler.trigger("loss-click", {})

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
}

function toVec([x, y]: [number, number]): Vector2D {
    return { x: x, y: y }
}
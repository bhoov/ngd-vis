import * as d3 from 'd3'
import { D3Sel, linspace } from '../util/xd3'
import { Vector2D } from '../util/types'
import { SVGOptions, SVGVisComponent, MarginInfo } from '../util/SVGVisComponent'
import { SimpleEventHandler } from '../util/SimpleEventHandler';
import { SVG } from "../util/SVGplus"
import { ManualUpdater } from "./ManualUpdater"

interface GraphOptions {
    margin: MarginInfo
    maxWidth: number
    maxHeight: number
    width?: number
    height?: number
    xRange: [number, number]
    yRange: [number, number]
}

interface ScaleXY {
    x: d3.ScaleLinear<number, number>
    y: d3.ScaleLinear<number, number>
}

interface GraphScales {
    toPx: ScaleXY,
    toMath: ScaleXY,
}

interface GraphSels {
    paths: D3Sel[]
    cursorDots: D3Sel[]
    cursorLine: D3Sel
}

type DATA = number[] // List of alphas in y=alpha * x^2

export class QuadraticPlots extends SVGVisComponent<DATA> {
    cssname = "quadratic-plots"
    maskId: string

    _data: DATA

    options: GraphOptions = {
        // options  = { 
        margin: { top: 0, right: 0, bottom: 40, left: 0 },
        maxWidth: 400,
        maxHeight: 250,
        xRange: [-3, 3],
        yRange: [-0.05, 8.82],
    }

    sels: Partial<GraphSels> = {}
    timer: d3.Timer

    constructor(d3parent: D3Sel, eventHandler?: SimpleEventHandler, options = {}, ID = 0) {
        super(d3parent, eventHandler, options, ID)
        this.maskId = `line-mask-${this.ID}`
        super.initSVG(options) // Calls init in this class
        this.base.classed(this.cssname, true)
    }

    get toPxScales(): ScaleXY {
        const op = this.options
        return {
            x: d3.scaleLinear()
                .domain(op.xRange)
                .range([0, op.width]),
            y: d3.scaleLinear()
                .domain(op.yRange)
                .range([op.height, 0]),
        }
    }

    intoPx(v: Vector2D) {
        return { x: this.toPxScales.x(v.x), y: this.toPxScales.y(v.y) }
    }

    // Take a vector in the coordinate system and return it to the math coordinates
    intoMath(v: Vector2D) {
        return { x: this.toPxScales.x.invert(v.x), y: this.toPxScales.y.invert(v.y) }
    }

    // Turn a number into a vector
    num2vec(x: number): Vector2D {
        const op = this.options
        // return { x: x, y: op.landscape.loss(x) }
        return { x: x, y: x ** 2 }
    }

    lineMaker(f: (x: number) => number) {
        return d3.line<number>()
            .x((d: number, i: number) => this.toPxScales.x(d))
            .y((d: number, i: number) => this.toPxScales.y(f(d)))
    }

    init() {
        const self = this;
        const op = this.options;
        const sels = this.sels;

        this.base
            .attr('width', op.maxWidth)
            .attr('height', op.maxHeight)

        Object.keys(this.layers).forEach(k => {
            console.log("Running on layer: ", k);
            const g = this.layers[k]
                .attr("transform", `${SVG.translate(op.margin.left, op.margin.top)}`)
        })

        this.layers.bg.append('rect')
            .classed("bg-rect", true)
            .attr('width', op.width)
            .attr('height', op.height)

        // const f = (x: number) => 0.5 * (x ** 2)

        const fac = 1.4;
        const aa = [1 / fac, 1, fac];
        // const aa = [fac];
        const updaters = aa.map(a => {
            return new ManualUpdater(
                (x: number) => a * x,
                (x: number) => a,
                1,
                0.01,
            )
        })

        sels.paths = updaters.map(u => {
            return this.layers.main.append("path")
                .datum(linspace(op.xRange[0], op.xRange[1], 100))
                .classed("line-path", true)
                .attr('d', d => {
                    return this.lineMaker(x => u.loss(x))(d)
                })
        })

        // Cursor Line Logic
        sels.cursorLine = this.base.append('path')
            .classed('cursor-line', true)
            .classed('hidden', true)

        sels.cursorDots = updaters.map(u => {
            return this.base.append('circle')
                .classed("cursor-dot", true)
                .attr("r", "3px")
        })

        this.base.on('mousemove', function () {
            const mouse = d3.mouse(this)
            sels.cursorLine.attr('d', d3.line()([[mouse[0], 0], [mouse[0], op.height]]))

            // sels.cursorDots.forEach((c, i) => {
            //     c.attr('cx', mouse[0])
            //         .attr('cy', () => self.toPxScales.y(updaters[i].loss(self.toPxScales.x.invert(mouse[0]))))
            // })
        })

        this.base.on('mouseout', () => {
            sels.cursorLine.classed("hidden", true)
            if (self.timer == null) sels.cursorDots.forEach(c => c.classed("hidden", true))
        })

        this.base.on('mouseover', () => {
            sels.cursorLine.classed("hidden", false)
            if (self.timer == null) sels.cursorDots.forEach(c => c.classed("hidden", false))
        })

        this.base.on('click', function () {
            const mouse = d3.mouse(this)
            const val = self.toPxScales.x.invert(mouse[0])
            sels.cursorDots.forEach((c, i) => {
                const u = updaters[i]
                const xClick = self.toPxScales.x.invert(mouse[0])
                c.attr('cx', mouse[0])
                c.attr('cy', self.toPxScales.y(u.loss(xClick)))
            })

            if (self.timer == null) {
                self.timer = d3.interval((time) => {
                    sels.cursorDots.forEach((c, i) => {
                        const u = updaters[i]
                        const xNow = self.toPxScales.x.invert(+c.attr('cx'))
                        const xNext = u.next(xNow)
                        c.attr('cx', self.toPxScales.x(xNext))
                        c.attr('cy', self.toPxScales.y(u.loss(xNext)))
                    })
                }, 10)
            }
            else {
                self.timer.stop()
                self.timer = null
            }
        })
    }

    _render(data: DATA) {
        // this.plotFuncs
    }

    data(): DATA
    data(val: DATA): this
    data(val?) {
        if (val == null) return this._data
        return this
    }
}
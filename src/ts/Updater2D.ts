import * as d3 from 'd3'
import * as nj from "numjs"
import { Array } from "./types"

// For 2D plots only
type Function = (x: Array) => Array
type ErrorFunction = (x: Array) => number

const defaultErrorFunction = (v: Array) => v.get(0) * v.get(1) - 1
const defaultDfFunction: Function = v => nj.array([v.get(1), v.get(0)])

const defaultStep2Lr: d3.ScaleLinear<number, number> = d3.scaleLinear().domain([0, 0.8]).range([0.001, 0.25])

export class Updater2D {
    df: Function
    err: ErrorFunction
    target: Array
    q: number                               // 0 -> 1, where 0 is SGD and 1 is NGD. 0.5 is sqrt NGD. [step = - eta * H ^ (-1/q) * g] (H = 0 when q=0)
    eta: number                             // aka 'learning rate'
    step2lr: d3.ScaleLinear<number, number>

    constructor(q = 0, eta = 0.1, target=[0, 0], err: ErrorFunction=defaultErrorFunction, df:Function=defaultDfFunction, step2lr = defaultStep2Lr) {
        this.q = q;
        this.eta = eta;
        this.err = err;
        this.df = df;
        this.target = nj.array(target)
        this.step2lr = step2lr
    }

    // Amount to scale size of learning rate arrows
    get lrScale() {
        return this.step2lr(this.eta)
    }

    sqrtErr(v: Array): number {
        // @ts-ignore
        return nj.sqrt(this.absErr(v))
    }

    absErr(v: Array): number {
        return <number>nj.abs(this.err(v)).get(0)
    }

    loss(v: Array): number {
        // @ts-ignore
        return nj.power(this.err(v), 2) / 2
    }

    eigenvalues(v: Array): Array {
        //@ts-ignore
        const ex = nj.power(v, 2).sum()
        const ey = nj.power(v, 2).sum()
        return nj.array([ex, ey])
    }

    gradient(v: Array): Array {
        const err = this.err(v)
        const g: Array = nj.multiply(this.df(v), err)
        return g
    }

    dv(v: Array): Array {
        const g = this.gradient(v)
        const ev = this.eigenvalues(v)

        const dv: Array = nj.divide(nj.multiply(g, -1), nj.abs(nj.power(ev, this.q)))
        return dv
    }

    lr(v: Array): Array {
        const dv = this.dv(v)
        const absErr = this.absErr(v)
        const lrScale = this.step2lr(this.eta)
        const lr: Array = nj.multiply(dv, lrScale).divide(absErr)
        return lr
    }

    next(v: Array): Array {
        const dv = this.dv(v)
        const newx: Array = nj.add(v, nj.multiply(dv, this.eta))
        return newx
    }

    nextLr(v: Array): Array {
        const g = this.lr(v);
        const z: Array = nj.add(v, nj.multiply(g, 3))
        return z
    }
}

export class BlockUpdater2D extends Updater2D {
    eigenvalues(v: Array): Array {
        return nj.multiply(nj.power(this.df(v), 2), 2)
    }
}
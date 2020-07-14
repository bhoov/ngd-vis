import * as d3 from 'd3'
import * as nj from "numjs"
import * as tp from "./types"
import { Array } from "./types"

// const defaultErrorFunction = (v: Array) => v.get(0) * v.get(1) - 1
const defaultErrorFunction = (v: Array) => {
    //@ts-ignore
    return nj.dot(nj.array([[1, 2], [2, 1]]), v)
}
const defaultDfFunction = (v: Array) => nj.array([[1, 2], [2, 1]])
const defaultStep2Lr: d3.ScaleLinear<number, number> = d3.scaleLinear().domain([0, 0.8]).range([0.001, 0.25])
const defaultLoss = (fv: Array) => nj.sum(nj.divide(nj.power(fv, 2), 2))

interface UpdaterOptions {
    df: tp.MapFunction
    f: tp.MapFunction
    q: number                               // 0 -> 1, where 0 is SGD and 1 is NGD. 0.5 is sqrt NGD. [step = - eta * H ^ (-1/q) * g] (H = 0 when q=0)
    eta: number                             // aka 'learning rate'
    step2lr: d3.ScaleLinear<number, number>
    loss: tp.ReduceFunction
}
export class Updater2D {
    // Set Default Options
    op: UpdaterOptions = {
        //@ts-ignore
        f: defaultErrorFunction,
        //@ts-ignore
        df: defaultDfFunction,
        q: 0,
        eta: 0.1,
        step2lr: defaultStep2Lr,
        loss: defaultLoss,
    }

    constructor(options: Partial<UpdaterOptions> = {}) {
        this.updateOptions(options);
    }

    updateOptions(options: Partial<UpdaterOptions>) {
        Object.keys(options).forEach(k => this.op[k] = options[k]);
    }

    // Create constructor functions:
    f(): tp.MapFunction
    f(val: tp.MapFunction): this
    f(val?) {
        if (val == null) return this.op.f
        this.op.f = val
        return this
    }

    df(): tp.MapFunction
    df(val: tp.MapFunction): this
    df(val?) {
        if (val == null) { return this.op.df }
        this.op.df = val
        return this
    }

    eta(): number
    eta(val: number): this
    eta(val?) {
        if (val == null) {
            return this.op.eta
        }
        this.op.eta = val
        return this
    }

    q(): number
    q(val: number): this
    q(val?) {
        if (val == null) {
            return this.op.q
        }
        this.op.q = val
        return this
    }

    step2lr(): d3.ScaleLinear<number, number>
    step2lr(val: d3.ScaleLinear<number, number>): this
    step2lr(val?) {
        if (val == null) { return this.op.step2lr }
        this.op.step2lr = val
        return this
    }

    // Amount to scale size of learning rate arrows
    get lrScale() {
        return this.op.step2lr(this.op.eta)
    }

    sqrtErr(v: Array): number {
        // @ts-ignore
        return Math.sqrt(this.absErr(v))
    }

    absErr(v: Array): number {
        return Math.abs(this.loss(v))
    }

    loss(v: Array): number {
        // Override the loss function if error exists
        // Clarify this for my future self
        return this.op.loss(this.op.f(v))
    }

    eigenvalues(v: Array): Array {
        const ex = nj.power(v, 2).sum()
        const ey = nj.power(v, 2).sum()
        return nj.array([ex, ey])
    }

    gradient(v: Array): Array {
        const err = this.loss(v)

        //@ts-ignore
        const df = this.op.df(v)

        const g: Array = nj.multiply(df, err)
        // //@ts-ignore
        // const g: Array = nj.dot(this._df(v), err)

        return g
    }

    dv(v: Array): Array {
        const g = this.gradient(v)
        const ev = this.eigenvalues(v)

        const modEvs = nj.abs(nj.power(ev, this.op.q))
        const dv: Array = nj.divide(nj.multiply(g, -1), modEvs)
        return dv
    }

    lr(v: Array): Array {
        const dv = this.dv(v)
        const absErr = this.absErr(v)
        const lrScale = this.op.step2lr(this.op.eta)
        const lr: Array = nj.multiply(dv, lrScale).divide(absErr)
        return lr
    }

    next(v: Array): Array {
        const dv = this.dv(v)
        const newx: Array = nj.add(v, nj.multiply(dv, this.op.eta))
        return newx
    }

    nextLr(v: Array): Array {
        const g = this.lr(v);
        const z: Array = nj.add(v, nj.multiply(g, 3))
        return z
    }

    // Convert to block diagonal updater
    toBlock(): BlockUpdater2D {
        const blockUpdater = new BlockUpdater2D(this.op)
        return blockUpdater
    }

    // Create a new full updater from this object. Useful if one of the derived classes needs to implement
    toFull(): Updater2D {
        const fullUpdater = new Updater2D(this.op)
        return fullUpdater
    }
}

export class BlockUpdater2D extends Updater2D {
    eigenvalues(v: Array): Array {
        return nj.multiply(nj.power(this.op.df(v), 2), 2)
    }
}
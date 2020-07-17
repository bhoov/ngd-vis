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
const defaultStep2Lr: d3.ScaleLinear<number, number> = d3.scaleLinear().domain([0, 0.8]).range([0.001, 0.5])
const defaultLoss = (fv: Array) => nj.sum(nj.divide(nj.power(fv, 2), 2))

interface UpdaterOptions {
    df: tp.MapFunction
    f: tp.MapFunction
    target?
    q: number                               // 0 -> 1, where 0 is SGD and 1 is NGD. 0.5 is sqrt NGD. [step = - eta * H ^ (-1/q) * g] (H = 0 when q=0)
    eta: number                             // aka 'learning rate'
    step2lr: d3.ScaleLinear<number, number>
    loss: tp.ReduceFunction
}

export abstract class BaseUpdater2D {
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

    constructor(options: Partial<UpdaterOptions>={}) {
        console.log("Running base updater constructor");
        this.updateOptions(options)
    }

    updateOptions(options: Partial<UpdaterOptions>) {
        Object.keys(options).forEach(k => this.op[k] = options[k]);
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

    loss(v: Array): number {
        return this.op.loss(this.op.f(v))
    }

    gradient(v: Array): Array {
        const err = this.loss(v)
        const df = this.op.df(v)
        const g: Array = nj.multiply(df, err)
        return g
    }

    lr(v: Array) {
        const dv = this.dv(v)
        const absLoss = Math.abs(this.loss(v))
        const eps = 1e-10;
        const lr: Array = nj.multiply(dv, this.lrScale).divide(absLoss + eps)
        return lr
    }

    next(v: Array) {
        const dv = this.dv(v)
        const newx = nj.subtract(v, nj.multiply(dv, this.op.eta))
        //@ts-ignore
        return newx
    }

    abstract dv(v: Array)

    nextLr(v: Array): Array {
        const g = this.lr(v);
        const z: Array = nj.add(v, nj.multiply(g, -1))
        return z
    }

    abstract toBlock()
    abstract toFull()
}
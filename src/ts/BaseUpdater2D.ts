import * as d3 from 'd3'
import * as nj from "numjs"
import * as tp from "./types"
import { Array } from "./types"

// const defaultErrorFunction = (v: Array) => v.get(0) * v.get(1) - 1
const defaultF = (v: Array) => {
    //@ts-ignore
    return nj.dot(nj.array([[1, 2], [2, 1]]), v)
}
const defaultDf = (v: Array) => nj.array([[1, 2], [2, 1]])
const defaultErr = fv => fv
const defaultLoss = (err: Array) => nj.sum(nj.divide(nj.power(err, 2), 2))
const defaultPlotting = loss => loss
const defaultStep2Lr: d3.ScaleLinear<number, number> = d3.scaleLinear().domain([0, 0.8]).range([0.001, 0.5])

interface UpdaterOptions {
    f: tp.MapFunction
    df: tp.MapFunction
    error
    loss: tp.ReduceFunction
    forPlotting
    q: number                               // 0 -> 1, where 0 is SGD and 1 is NGD. 0.5 is sqrt NGD. [step = - eta * H ^ (-1/q) * g] (H = 0 when q=0)
    eta: number                             // aka 'learning rate'
    step2lr: d3.ScaleLinear<number, number>
}

export abstract class BaseUpdater2D {
    op: UpdaterOptions = {
        //@ts-ignore
        f: defaultF,
        //@ts-ignore
        df: defaultDf,
        error: defaultErr,
        forPlotting: defaultPlotting,
        q: 0,
        eta: 0.1,
        step2lr: defaultStep2Lr,
        loss: defaultLoss,
    }

    constructor(options: Partial<UpdaterOptions>={}) {
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

    error(v: Array) {
        return this.op.error(this.op.f(v))
    }

    loss(v: Array): number {
        const loss = this.op.loss(this.error(v))
        return loss
    }

    plotF(v: Array): number {
        return this.op.forPlotting(this.loss(v))
    }

    gradient(v: Array): Array {
        const loss = this.loss(v)
        const df = this.op.df(v)
        const g: Array = nj.multiply(df, loss)
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
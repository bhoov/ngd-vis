import * as d3 from 'd3'
import * as nj from "numjs"
import * as tp from "./types"
import { Array } from "./types"

// const defaultErrorFunction = (v: Array) => v.get(0) * v.get(1) - 1
const defaultErrorFunction = (v: Array) => {
    //@ts-ignore
  return nj.dot(nj.array([[1,2],[2,1]]), v)  
}
const defaultDfFunction = (v: Array) => nj.array([[1,2],[2,1]])

const defaultStep2Lr: d3.ScaleLinear<number, number> = d3.scaleLinear().domain([0, 0.8]).range([0.001, 0.25])

export class Updater2D {
    _df: tp.MapFunction
    _f: tp.MapFunction
    _q: number                               // 0 -> 1, where 0 is SGD and 1 is NGD. 0.5 is sqrt NGD. [step = - eta * H ^ (-1/q) * g] (H = 0 when q=0)
    _eta: number                             // aka 'learning rate'
    _step2lr: d3.ScaleLinear<number, number>
    _err: tp.ReduceFunction

    constructor(f=defaultErrorFunction, df=defaultDfFunction, q=0, eta=0.1, step2lr = defaultStep2Lr) {
        this._q = q;
        this._eta = eta;
        //@ts-ignore
        this._f = f;
        //@ts-ignore
        this._df = df;
        this._step2lr = step2lr
        this._err = null
    }

    err(): tp.ReduceFunction
    err(val:tp.ReduceFunction): this
    err(val?) {
        if (val == null) {
            return this._err
        }
        this._err = val
        return this
    }

    // Create constructor functions:
    f(): tp.MapFunction
    f(val:tp.MapFunction): this
    f(val?) {
        if (val == null) return this._f
        this.f = val
        return this
    }

    df(): tp.MapFunction
    df(val:tp.MapFunction): this
    df(val?) {
        if (val == null) { return this._df }
        this._df = val
        return this
    }

    eta(): number
    eta(val:number): this
    eta(val?) {
        if (val == null) {
            return this._eta
        }
        this._eta = val
        return this
    }

    q(): number
    q(val:number): this
    q(val?) {
        if (val == null) {
            return this._q
        }
        this._q = val
        return this
    }

    step2lr(): d3.ScaleLinear<number,number>
    step2lr(val:d3.ScaleLinear<number,number>): this
    step2lr(val?) {
        if (val == null) { return this._step2lr}
        this._step2lr = val 
        return this
    }

    // Amount to scale size of learning rate arrows
    get lrScale() {
        return this._step2lr(this._eta)
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
        if (this._err != null) {
            return this._err(v)
        }
        // @ts-ignore
        return nj.sum(nj.divide(nj.power(this._f(v), 2), 2))
    }

    eigenvalues(v: Array): Array {
        //@ts-ignore
        const ex = nj.power(v, 2).sum()
        const ey = nj.power(v, 2).sum()
        return nj.array([ex, ey])
    }

    gradient(v: Array): Array {
        const err = this.loss(v)
        
        //@ts-ignore
        const df = this._df(v)

        const g: Array = nj.multiply(df, err)
        // //@ts-ignore
        // const g: Array = nj.dot(this._df(v), err)

        return g
    }

    dv(v: Array): Array {
        const g = this.gradient(v)
        const ev = this.eigenvalues(v)

        const dv: Array = nj.divide(nj.multiply(g, -1), nj.abs(nj.power(ev, this._q)))
        return dv
    }

    lr(v: Array): Array {
        const dv = this.dv(v)
        const absErr = this.absErr(v)
        const lrScale = this._step2lr(this._eta)
        const lr: Array = nj.multiply(dv, lrScale).divide(absErr)
        return lr
    }

    next(v: Array): Array {
        const dv = this.dv(v)
        const newx: Array = nj.add(v, nj.multiply(dv, this._eta))
        return newx
    }

    nextLr(v: Array): Array {
        const g = this.lr(v);
        const z: Array = nj.add(v, nj.multiply(g, 3))
        return z
    }

    // Convert to block diagonal updater
    toBlock(): BlockUpdater2D {
        const err = this._err
        const blockUpdater = new BlockUpdater2D().q(this.q()).eta(this.eta()).f(this._f).df(this._df)
        blockUpdater.err(err)
        return blockUpdater
    }

    // Create a new full updater from this object. Useful if one of the derived classes needs to implement
    toFull(): Updater2D {
        const err = this._err
        const fullUpdater = new Updater2D().q(this.q()).eta(this.eta()).f(this._f).df(this._df)
        fullUpdater.err(err)
        return fullUpdater
    }
}

export class BlockUpdater2D extends Updater2D {
    eigenvalues(v: Array): Array {
        return nj.multiply(nj.power(this._df(v), 2), 2)
    }
}
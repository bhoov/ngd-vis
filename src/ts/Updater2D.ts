import * as d3 from 'd3'
import * as nj from "numjs"
import * as tp from "./types"
import { Array } from "./types"
import { BaseUpdater2D } from "./BaseUpdater2D"

const defaultErrorFunction = v => {
    return nj.dot(nj.array([[1, 2], [2, 1]]), v)
}
const defaultDfFunction = v => nj.array([[1, 2], [2, 1]])
const defaultStep2Lr: d3.ScaleLinear<number, number> = d3.scaleLinear().domain([0, 0.8]).range([0.001, 0.25])
const defaultError = fv => fv
const defaultLoss = err => nj.sum(nj.divide(nj.power(err, 2), 2))

interface UpdaterOptions {
    f
    df
    error
    loss
    q: number                               // 0 -> 1, where 0 is SGD and 1 is NGD. 0.5 is sqrt NGD. [step = - eta * H ^ (-1/q) * g] (H = 0 when q=0)
    eta: number                             // aka 'learning rate'
    step2lr: d3.ScaleLinear<number, number>
}

function getOrthMatrix(S) {
    const theta = 0.5 * Math.atan2(S.get(0,1) + S.get(1,0), S.get(0,0) - S.get(1,1))
    const cos = Math.cos(theta)
    const sin = Math.sin(theta)
    return nj.array([[cos, -sin], [sin, cos]])
}

interface SVDResults { U, d, V }

function SVD2d(M): SVDResults {
    const U = getOrthMatrix(nj.dot(M, M.T))
    let V = getOrthMatrix(nj.dot(M.T, M))
    const preDiag = nj.dot(U.T, nj.dot(M, V))
    let d = nj.array([preDiag.get(0,0), preDiag.get(1,1)])
    //@ts-ignore
    const dSign = d.tolist().map(x => x >= 0 ? 1 : -1)
    V = nj.array(V.tolist().map((row, i) => {
        return row.map((x, j) => {
            return x * dSign[j] 
        })
    }))
    d = nj.abs(d)
    return {U, d, V}
}

export class Updater2D extends BaseUpdater2D {
    // Set Default Options
    op: UpdaterOptions = {
        //@ts-ignore
        f: defaultErrorFunction,
        //@ts-ignore
        df: defaultDfFunction,
        error: defaultError,
        loss: defaultLoss,
        q: 0,
        eta: 0.1,
        step2lr: defaultStep2Lr,
    }

    constructor(options: Partial<UpdaterOptions>={}) {
        super()
        this.updateOptions(options)
    }

    dv(v: Array) {
        const jac = this.op.df(v)
        const err = this.error(v)
        const {U, d, V} = SVD2d(jac)

        const dDamp = nj.multiply(d, nj.power(d, -2 * this.op.q))

        const D = nj.array([[dDamp.get(0), 0], [0, dDamp.get(1)]])
        const preFac = nj.dot(U, D)
        // const postFac = err.shape == undefined ? nj.dot(V, nj.array([err, err])): nj.dot(V, err) // Not accurate math
        const postFac = nj.dot(V, err)
        //@ts-ignore
        const out = nj.dot(preFac, postFac)

        return out
    }

    lr(v: Array) {
        const dv = this.dv(v)
        const eps = 1e-10;
        //@ts-ignore
        const lr: Array = nj.multiply(dv, this.lrScale).divide(Math.sqrt(this.loss(v) + eps)) //.divide(absLoss + eps)
        return lr
    }

    // Convert to block diagonal updater // Nothing different rn
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
}
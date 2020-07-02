import { Vector2D } from './util/types'
import * as d3 from 'd3'

type ErrorFunc = (v: Vector2D) => number

const defaultError: ErrorFunc = v => v.x * v.y - 1
const defaultStep2Lr: d3.ScaleLinear<number, number> = d3.scaleLinear().domain([0, 0.8]).range([0.001, 0.25])

export class Updater {
    err: ErrorFunc                          // The error function. Loss is the error squared
    q: number                               // 0 -> 1, where 0 is SGD and 1 is NGD. 0.5 is sqrt NGD. [step = - eta * H ^ (-1/q) * g] (H = 0 when q=0)
    eta: number                             // aka 'learning rate'
    step2lr: d3.ScaleLinear<number, number> // Format the learning rate for display

    constructor(q = 0, eta = 0.1, err = defaultError, step2lr = defaultStep2Lr) {
        this.err = err;
        this.q = q;
        this.eta = eta;
        this.step2lr = step2lr;
    }

    // Amount to scale size of learning rate arrows
    get lrScale() {
        return this.step2lr(this.eta)
    }

    // Take abs value of error
    // Err(v:Vector2D):number {
    //     return this.err(v)
    // }
    // Take abs value of error
    sqrtErr(v: Vector2D): number {
        return Math.sqrt(Math.abs(this.err(v)))
    }

    absErr(v: Vector2D): number {
        return Math.abs(this.err(v))
    }

    // Calculate error squared
    loss(v: Vector2D): number {
        return Math.pow(this.err(v), 2)
    }

    gradient(v: Vector2D): Vector2D {
        const err = this.err(v);
        const gx = v.y * err;
        const gy = v.x * err;
        return { x: gx, y: gy }
    }

    eigenvalues(v: Vector2D): Vector2D {
        const getEv = (x, y) => Math.pow(x, 2) + Math.pow(y, 2)
        const ex = getEv(v.x, v.y)
        const ey = getEv(v.x, v.y)
        return { x: ex, y: ey }
    }

    dv(v: Vector2D): Vector2D {
        const g = this.gradient(v)
        const ev = this.eigenvalues(v)
        const dvx = -g.x / Math.abs(Math.pow(ev.x, this.q))
        const dvy = -g.y / Math.abs(Math.pow(ev.y, this.q))
        return { x: dvx, y: dvy }
    }

    lr(v: Vector2D): Vector2D {
        const dv = this.dv(v)
        const absErr = this.absErr(v)
        const lrScale = this.step2lr(this.eta)
        const lrx = lrScale * dv.x / absErr
        const lry = lrScale * dv.y / absErr
        return { x: lrx, y: lry }
    }

    // Get next v value
    next(v: Vector2D): Vector2D {
        const dv = this.dv(v)
        const newx = v.x + dv.x * this.eta;
        const newy = v.y + dv.y * this.eta;
        return { x: newx, y: newy }
    }

    nextLr(v: Vector2D): Vector2D {
        const g = this.lr(v);
        const x = v.x + g.x * 3;
        const y = v.y + g.y * 3;
        // const dv = this.dv(v)
        // const x = v.x + dv.x * this.eta;
        // const y = v.y + dv.y * this.eta;
        return { x: x, y: y }
    }
}

export class BlockUpdater extends Updater {
    eigenvalues(v: Vector2D): Vector2D {
        const ex = 2 * Math.pow(v.y, 2)
        const ey = 2 * Math.pow(v.x, 2)
        return { x: ex, y: ey }
    }
}
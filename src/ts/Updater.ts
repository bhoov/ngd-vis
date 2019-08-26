import {Vector2D} from './types'
const simpleError = (v:Vector2D) => v.x * v.y - 1

export class Updater {
    err: (v:Vector2D) => number
    loss: number
    q: number // 0 -> 1, where 0 is SGD and 1 is NGD. 0.5 is sqrt NGD
    eta: number // aka 'learning rate'

    constructor(q=0, err=simpleError) {
        this.err = err;
    }

    absErr(v:Vector2D):number {
        return Math.abs(this.err(v))
    }

    gradients(v:Vector2D):Vector2D {
        const err = this.err(v);
        const gx = v.y * err;
        const gy = v.x * err;
        return {x: gx, y: gy}
    }

    eigenvalues(v:Vector2D):Vector2D {
        const getEv = (x, y) => Math.pow(x, 2) + Math.pow(y, 2)
        const ex = getEv(v.x, v.y)
        const ey = getEv(v.x, v.y)
        return {x: ex, y: ey}
    }

    dv(v:Vector2D): Vector2D {
        const g = this.gradients(v)
        const ev = this.eigenvalues(v)
        const dvx = -g.x * Math.abs(Math.pow(ev.x, this.q))
        const dvy = -g.y * Math.abs(Math.pow(ev.y, this.q))
        return {x: dvx, y: dvy}
    }

    lr(v:Vector2D): Vector2D {
        const dv = this.dv(v)
        const absErr = this.absErr(v)
        const lrx = dv.x / absErr
        const lry = dv.y / absErr
        return {x: lrx, y: lry}
    }

    next(v:Vector2D): Vector2D {
        const dv = this.dv(v)
        const newx = v.x + dv.x * this.eta;
        const newy = v.y + dv.y * this.eta;
        return {x: newx, y: newy}
    }
}

class BlockUpdater extends Updater {
    eigenvalues(v:Vector2D):Vector2D {
        const ex = 2 * Math.pow(v.y, 2)
        const ey = 2 * Math.pow(v.x, 2)
        return {x: ex, y: ey}
    }
}
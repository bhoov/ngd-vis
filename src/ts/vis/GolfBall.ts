import * as d3 from 'd3'
import { ManualUpdater } from "./ManualUpdater"
import { Vector2D } from "../types"
import * as R from 'ramda'

export class GolfBall {
    _x: number
    updater: ManualUpdater

    constructor(updater: ManualUpdater, x = 0) {
        this.updater = updater
        this._x = x
    }

    get x () {
        return this._x
    }

    set x(v: number) {
        this._x = v
    }

    nextX(): number {
        return this.updater.next(this._x)
    }

    next(): GolfBall {
        const out = R.assoc('x', this.updater.next(this._x), this)
        return new GolfBall(this.updater, this.nextX())
    }

    step_(): this {
        R.assoc('x', this.nextX(), this)
        return this
    }

    toVec(f: (x: number) => number): Vector2D {
        return {
            x: this._x,
            y: f(this._x)
        }
    }
}
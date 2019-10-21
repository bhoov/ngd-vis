import * as d3 from 'd3'
import { ManualUpdater } from "./ManualUpdater"
import { Vector2D } from "../types"
import * as R from 'ramda'
import { Subject } from "rxjs"

type BallHistory = {
    classname: string
    val: number
}

export class GolfBall {
    _x: number
    updater: ManualUpdater
    classname: string
    stream: Subject<BallHistory> // Pushes history of x values to this

    constructor(updater: ManualUpdater, classname: string, x = 0) {
        this.updater = updater
        this._x = x
        this.classname = classname
        this.stream = new Subject()
    }

    get x() {
        return this._x
    }

    set x(v: number) {
        this._x = v
    }

    nextX(): number {
        return this.updater.next(this._x)
    }

    next(): GolfBall {
        const nextX = this.nextX()
        this.stream.next({
            classname: this.classname,
            val: nextX
        })
        return new GolfBall(this.updater, this.classname, this.nextX())
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
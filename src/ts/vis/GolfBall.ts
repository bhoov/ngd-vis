import * as d3 from 'd3'
import { ManualUpdater } from "./ManualUpdater"
import { Vector2D } from "../types"
import * as R from 'ramda'

export class GolfBall {
    x: number
    updater: ManualUpdater

    constructor(updater: ManualUpdater, x = 0) {
        this.updater = updater
        this.x = x
    }

    nextX(): number {
        return this.updater.next(this.x)
    }

    next(): GolfBall {
        const out = R.assoc('x', this.updater.next(this.x), this)
        return new GolfBall(this.updater, this.nextX())
    }

    toVec(f: (x: number) => number): Vector2D {
        return {
            x: this.x,
            y: f(this.x)
        }
    }
}
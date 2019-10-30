import * as d3 from 'd3'
import { ManualUpdater } from "./ManualUpdater"
import { Vector2D } from "../util/types"
import * as R from 'ramda'
import { Subject, BehaviorSubject } from "rxjs"

export type BallHistory = {
    classname: string
    x: number
    loss: number
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
        return new GolfBall(this.updater, this.classname, this.nextX())
    }

    /**
     * Use the updater to take the next step
     * 
     * @param forceX Force the nextX to be of this value
     */
    step_(forceX:number|null=null): this {
        if (forceX != null) this.x = forceX
        else this.x = this.nextX()

        this.stream.next({
            classname: this.classname,
            x: this.x,
            loss: this.updater.loss(this.x)
        })
        return this
    }

    toVec(f: (x: number) => number): Vector2D {
        return {
            x: this._x,
            y: f(this._x)
        }
    }

    q(): number
    q(val: number): this
    q(val?) {
        if (val == null) return this.updater.q
        this.updater.q = val
        return this
    }

    eta(): number
    eta(val: number): this
    eta(val?) {
        if (val == null) return this.updater.eta
        this.updater.eta = val
        return this
    }
}
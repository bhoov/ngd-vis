import { Vector2D } from '../types'
import * as d3 from 'd3'

const defaultStep2Lr: d3.ScaleLinear<number, number> = d3.scaleLinear().domain([0, 0.8]).range([0.001, 0.25])

type SimpleFunc = (x: number) => number

export class ManualUpdater {
    f: (x: number) => number
    df: (x: number) => number
    ddf: (x: number) => number

    q: number   // 0 -> 1, where 0 is SGD and 1 is NGD. 0.5 is sqrt NGD. [step = - eta * H ^ (-1/q) * g] (H = 0 when q=0)
    eta: number // aka 'learning rate'

    constructor(f, df, ddf, q = 0, eta = 0.1) {
        this.f = f;
        this.df = df;
        this.ddf = ddf;
        this.q = q;
        this.eta = eta;
    }

    // Calculate error squared of the base function
    loss(x: number): number {
        return 0.5 * Math.pow(this.f(x), 2)
    }

    // Gradient at x
    gradient(x: number): number {
        return this.f(x) * this.df(x)
    }

    // Full hessian at x
    hess(x: number): number {
        return Math.pow(this.df(x), 2) + this.f(x) * this.ddf(x)
    }

    // The positive semi-definite hessian at x
    psdhess(x: number): number {
        return Math.pow(this.df(x), 2)
    }

    // The amount to update at x given the learning rate eta
    step(x: number): number {
        const step = y => - this.eta * y;
        // Could use psdhess in the equation below, but due to numerical issues this formulation computes more reliably
        const updateAmt = this.f(x) * Math.pow(this.df(x), 1 - (2 * this.q))
        return step(updateAmt)
    }

    // Get the next x value after taking a step
    next(x: number): number {
        return x + this.step(x)
    }
}
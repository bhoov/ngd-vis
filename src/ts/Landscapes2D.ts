import * as tp from "./types"
import * as nj from "numjs"
import * as d3 from "d3"
import {SimpleNetUpdater} from "./SimpleNetUpdater"
import {Updater2D} from "./Updater2D"
import {LandscapeLoss} from "./LandscapeLoss"
import {linspace} from "./util/xd3"

export interface Landscape2D {
    name: string
    f
    df
    error
    loss
    forPlotting
    updaterClass
    colorScale: d3.ScaleLinear<number, number | string>
    xrange: [number, number]
    yrange: [number, number]
    target?
    nContours?: number
    nx?: number
    ny?: number
    step2lr?
    eta?
}


// Parameters defining elliptical
const A = nj.array([[1,2], [2,1]])

// Parameters defining bumpy landscape
const freqs = linspace(-1, 0, 4).map(x => Math.exp(x))
// const freqs = [1,2]
const amps = freqs.map(x => 1/x)
export const bumpy = LandscapeLoss(freqs, amps)

export const landscapes2d: { [k: string]: Landscape2D } = {
    SimpleNet2D: {
        name: "SimpleNet2D",
        f: (v: tp.Array) => v.get(0) * v.get(1),
        df: (v: tp.Array) => nj.array([v.get(1), v.get(0)]),
        error: fv => fv - 1,
        loss: x => x,
        forPlotting: loss => loss,
        updaterClass: SimpleNetUpdater,
        colorScale: d3.scaleLinear()
            .domain([-1, -0.1, 1.6])
            //@ts-ignore
            .range(["white", "steelblue", "white"])
            //@ts-ignore
            .interpolate(d3.interpolateRgb.gamma(2.2)),
        xrange: [0, 1.6],
        yrange: [0, 1.6],
        nContours: 20,
    },

    // Broken CHain Net Landscape using normal Updater 2D (doesn't handle (2,1) shaped Jac)
    ChainNet: {
        name: "ChainNet",
        f: (v: tp.Array) => Math.pow(v.get(0), 2) * v.get(1),
        // df: (v: tp.Array) => nj.array([[v.get(0)], [v.get(1)]]),
        df: (v: tp.Array) => nj.array([[v.get(0), 0], [0, v.get(1)]]),
        error: fv => fv - 1,
        loss: x => x, // Loss should always be a function of error!
        forPlotting: loss => loss,
        updaterClass: Updater2D,
        colorScale: d3.scaleLinear()
            .domain([-1, 0, 1.6])
            //@ts-ignore
            .range(["white", "steelblue", "red"])
            //@ts-ignore
            .interpolate(d3.interpolateRgb.gamma(2.2)),
        xrange: [0, 1.6],
        yrange: [0, 1.6],
        nContours: 20,
    },

    Elliptical: {
        name: "Elliptical",
        f: v => nj.dot(A, v),
        df: v => A,
        error: fv => fv,
        loss: (err: tp.Array) => nj.sum(nj.divide(nj.power(err, 2), 2)),
        forPlotting: loss => Math.log(1 + loss),
        updaterClass: Updater2D,
        colorScale: d3.scalePow()
            .exponent(0.5)
            .domain([0, 36])
            //@ts-ignore
            .range(["steelblue", "white"])
            //@ts-ignore
            .interpolate(d3.interpolateRgb.gamma(2.2)),
        xrange: [-2, 2],
        yrange: [-2, 2],
        nContours: 30,
        nx: 7,
        ny: 7,
        step2lr: d3.scaleLinear().domain([0, 1]).range([0.1, 1.5])
    },

    Landscape1: {
        name: "Landscape1",
        f: bumpy.forward,
        df: bumpy.jacobian,
        error: fv => fv, // The function value is the error itself
        loss: (err: tp.Array) => nj.sum(nj.power(err, 2)) / 2,
        forPlotting: loss => Math.log(1 + loss),
        updaterClass: Updater2D,
        colorScale: d3.scalePow()
            .exponent(0.5)
            .domain([0, 100])
            //@ts-ignore
            .range(["steelblue", "white"])
            //@ts-ignore
            .interpolate(d3.interpolateRgb.gamma(2.2)),
        xrange: [1.5, 8.4],
        yrange: [3, 10.5],
        nContours: 20,
        nx: 12,
        ny: 12,
        eta: 0.001,
        step2lr: d3.scaleLinear().domain([0, 0.05]).range([0.0001, 0.8])
    },

}
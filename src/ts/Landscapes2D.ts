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
    loss
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
const bumpy = LandscapeLoss(freqs, amps)

export const landscapes2d: { [k: string]: Landscape2D } = {
    SimpleNet2D: {
        name: "SimpleNet2D",
        f: (v: tp.Array) => (v.get(0) * v.get(1) - 1),
        df: (v: tp.Array) => nj.array([v.get(1), v.get(0)]),
        updaterClass: SimpleNetUpdater,
        colorScale: d3.scaleLinear()
            .domain([-1, 0, 1.6])
            //@ts-ignore
            .range(["white", "steelblue", "red"])
            //@ts-ignore
            .interpolate(d3.interpolateRgb.gamma(2.2)),
        xrange: [0, 1.6],
        yrange: [0, 1.6],
        nContours: 20,
        loss: x => x,
    },

    Elliptical: {
        name: "Elliptical",
        //@ts-ignore
        f: (v: tp.Array) => nj.dot(A, v),
        //@ts-ignore
        df: (v: tp.Array) => A,
        updaterClass: Updater2D,
        target: nj.array([0,0]),
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
        loss: (fv: tp.Array) => nj.sum(nj.divide(nj.power(fv, 2), 2)),
        step2lr: d3.scaleLinear().domain([0, 1]).range([0.1, 1.5])
    },

    Landscape1: {
        name: "Landscape1",
        f: bumpy.forward,
        df: bumpy.jacobian,
        updaterClass: Updater2D,
        target: null,
        colorScale: d3.scalePow()
            .exponent(0.5)
            .domain([0, 100])
            //@ts-ignore
            .range(["steelblue", "white"])
            //@ts-ignore
            .interpolate(d3.interpolateRgb.gamma(2.2)),
        xrange: [2.4, 8.4],
        yrange: [2.2, 8.83],
        nContours: 20,
        nx: 12,
        ny: 12,
        eta: 0.001,
        loss: (fv: tp.Array) => nj.sum(nj.power(fv, 2)) / 2,
        // loss: (fv: tp.Array) => fv,
        step2lr: d3.scaleLinear().domain([0, 1]).range([0.2, 1])
    },

}
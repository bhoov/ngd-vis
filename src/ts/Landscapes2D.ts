import * as tp from "./types"
import * as nj from "numjs"
import * as d3 from "d3"
import {BaseUpdater2D} from "./BaseUpdater2D"
import {SimpleNetUpdater} from "./SimpleNetUpdater"
import {Updater2D} from "./Updater2D"

export interface Landscape2D {
    name: string
    f
    df
    loss
    updaterClass
    target?
    xrange: [number, number]
    yrange: [number, number]
    nContours?: number
    colorScale: d3.ScaleLinear<number, number | string>
}

const A = nj.array([[1,2], [2,1]])

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
        loss: (fv: tp.Array) => nj.sum(nj.divide(nj.power(fv, 2), 2))
    },
}
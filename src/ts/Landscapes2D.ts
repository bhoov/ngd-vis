import * as tp from "./types"
import * as nj from "numjs"
import * as d3 from "d3"

export interface Landscape2D {
    name: string
    f: tp.MapFunction
    df: tp.MapFunction
    loss: tp.ReduceFunction
    xrange: [number, number]
    yrange: [number, number]
    colorScale: d3.ScaleLinear<number, number | string>
}


export const landscapes2d: { [k: string]: Landscape2D } = {
    SimpleNet2D: {
        name: "SimpleNet2D",
        //@ts-ignore
        f: (v: tp.Array) => (v.get(0) * v.get(1) - 1),
        df: (v: tp.Array) => nj.array([v.get(1), v.get(0)]),
        colorScale: d3.scaleLinear()
            .domain([-1, 0, 1.6])
            //@ts-ignore
            .range(["white", "steelblue", "red"])
            //@ts-ignore
            .interpolate(d3.interpolateRgb.gamma(2.2)),
        xrange: [0, 1.6],
        yrange: [0, 1.6],
        //@ts-ignore
        loss: x => x,
    },

    Elliptical: {
        name: "Elliptical",
        //@ts-ignore
        f: (v: tp.Array) => nj.dot(nj.array([[1, 2], [2, 1]]), v),
        //@ts-ignore
        df: (v: tp.Array) => nj.array([[1, 2], [2, 1]]),
        colorScale: d3.scaleLinear()
            .domain([-1, 0, 1.6])
            //@ts-ignore
            .range(["white", "steelblue", "red"])
            //@ts-ignore
            .interpolate(d3.interpolateRgb.gamma(2.2)),
        xrange: [-1, 1],
        yrange: [-1, 1],
        loss: (fv: tp.Array) => nj.sum(nj.divide(nj.power(fv, 2), 2))
    },

}
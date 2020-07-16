import * as nj from "numjs"

export interface Point {
    x: number
    y: number
}

export interface LabeledPoint extends Point {
    label: number
}

export interface NetCoef {
    b0: number
    b1: number
}

export function toVec([x, y]: [number, number]): Vector2D {
    return { x: x, y: y }
}

export interface Vector2D {
    x: number
    y: number
}

// numjs convenience types
export type Array = nj.NdArray<number>

export type MapFunction = (x: Array) => Array
export type ReduceFunction = (x: Array) => number
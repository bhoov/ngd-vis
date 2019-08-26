

export interface SVGOptions {
    margin: MarginInfo
    maxWidth: number
    maxHeight: number
    pad: number
    width?:number
    height?:number
}
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

export type MarginInfo = {
    top:number
    right:number
    bottom:number
    left:number
}

export interface Vector2D {
    x: number
    y: number
}

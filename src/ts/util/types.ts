
export function toVec([x, y]: [number, number]): Vector2D {
    return { x: x, y: y }
}

export interface Vector2D {
    x: number
    y: number
}
export const baseLoss = x => 1 / 2 * Math.pow(x, 2)
export const getPlotFunc = (z: Landscape) => (x: number) => z.loss(z.f(x))

export interface Landscape {
    f: (x: number) => number
    df: (x: number) => number
    xrange: [number, number]
    yrange: [number, number]
    loss: (x: number) => number
}


export const landscapes: { [k: string]: Landscape } = {
    hole: {
        f: x => Math.tanh(x/2),
        df: x => Math.pow(Math.cosh(x/2), -2)/2,
        xrange: [-12, 12],
        yrange: [0, 0.6],
        loss: baseLoss
    },
    steps: {
        f: x => Math.tanh(x - 11) / 4 + Math.tanh(x - 6) / 4 + Math.tanh(x) + Math.tanh(x + 6) / 4 + Math.tanh(x + 11) / 4,
        df: x => Math.pow(Math.cosh(x - 11), -2) / 4 + Math.pow(Math.cosh(x - 6), -2) / 4 + Math.pow(Math.cosh(x), -2) + Math.pow(Math.cosh(x + 6), -2) / 4 + Math.pow(Math.cosh(x + 11), -2) / 4,
        xrange: [-13.6, 13.6],
        yrange: [0, 2.5],
        loss: baseLoss
    },
    seagull: {
        f: x => Math.sign(x) * (1 - (1 / (1 + Math.abs(x)))),
        df: x => 1 / Math.pow(1 + Math.abs(x), 2),
        xrange: [-12, 12],
        yrange: [0, 0.6],
        loss: baseLoss
    },
    bowl: {
        f:  x => Math.sinh(x/5),
        df: x => Math.cosh(x/5)/5,
        xrange: [-15, 15],
        yrange: [0, 100],
        loss: baseLoss
    },
    deep_net: {
        f: x => Math.pow(Math.abs(x/10+1), 3) - 1,  // depth = 4
        df: x => 3/10 * Math.pow(Math.abs(x/10+1), 2),
        xrange: [-9.9, 9.9],
        yrange: [0, 3],
        loss: baseLoss
    }
}
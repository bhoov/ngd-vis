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
        f: x => Math.tanh(6*x),
        df: x => 6*Math.pow(Math.cosh(6*x), -2),
        xrange: [-1, 1],  // [-6, 6],
        yrange: [0, 0.6],
        loss: baseLoss
    },
    steps: {
        f: x => 0.5*(Math.tanh(13.6*x - 11) / 4 + Math.tanh(13.6*x - 6) / 4 + Math.tanh(13.6*x) + Math.tanh(13.6*x + 6) / 4 + Math.tanh(13.6*x + 11) / 4),
        df: x => 0.5*13.6*(Math.pow(Math.cosh(13.6*x - 11), -2) / 4 + Math.pow(Math.cosh(13.6*x - 6), -2) / 4 + Math.pow(Math.cosh(13.6*x), -2) + Math.pow(Math.cosh(13.6*x + 6), -2) / 4 + Math.pow(Math.cosh(13.6*x + 11), -2) / 4),
        xrange: [-1, 1],  // [-13.6, 13.6],
        yrange: [0, 0.6], // [0, 2.5],
        loss: baseLoss
    },
    seagull: {
        f: x => Math.sign(x) * (1 - (1 / (1 + Math.abs(12*x)))),
        df: x => 12 / Math.pow(1 + Math.abs(12*x), 2),
        xrange: [-1, 1],  // [-12, 12],
        yrange: [0, 0.6],
        loss: baseLoss
    },
    bowl: {
        f:  x => 0.1*Math.sinh(3*x),
        df: x => 0.1*3*Math.cosh(3*x),
        xrange: [-1, 1],  // [-3, 3],
        yrange: [0, 0.6], // [0, 100],
        loss: baseLoss
    }
}
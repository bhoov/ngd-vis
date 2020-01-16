export const baseLoss = x => 1 / 2 * Math.pow(x, 2)
export const getPlotFunc = (z: Landscape) => (x: number) => z.loss(z.f(x))

export interface Landscape {
    name: string
    f: (x: number) => number
    df: (x: number) => number
    xrange: [number, number]
    yrange: [number, number]
    loss: (x: number) => number
}


export const landscapes: { [k: string]: Landscape } = {
    hole: {
        name: "hole",
        f: x => Math.tanh(x*13.5),
        df: x => Math.pow(Math.cosh(x*13.5), -2) * 13.5,
        xrange: [-6 / 13.5, 6 / 13.5],
        yrange: [0, 0.6],
        loss: baseLoss
    },
    steps: {
        name: "steps",
        f: x => Math.tanh(x * 13.5 - 11) / 4 + Math.tanh(x * 13.5 - 6) / 4 + Math.tanh(x * 13.5) + Math.tanh(x * 13.5 + 6) / 4 + Math.tanh(x * 13.5 + 11) / 4,
        df: x => (Math.pow(Math.cosh(x * 13.5 - 11), -2) / 4 + Math.pow(Math.cosh(x * 13.5 - 6), -2) / 4 + Math.pow(Math.cosh(x * 13.5), -2) + Math.pow(Math.cosh(x * 13.5 + 6), -2) / 4 + Math.pow(Math.cosh(x * 13.5 + 11), -2) / 4 ) * 13.5,
        xrange: [-13.5 / 13.5, 13.5 / 13.5],
        yrange: [0, 2.5],
        loss: baseLoss
    },
    seagull: {
        name: "seagull",
        f: x => Math.sign(x) * (1 - (1 / (1 + Math.abs(x * 16.5)))),
        df: x => 16.5 / Math.pow(1 + Math.abs(x * 16.5), 2),
        xrange: [-12 / 16.5, 12 / 16.5],
        yrange: [0, 0.6],
        loss: baseLoss
    },
    bowl: {
        name: "bowl",
        f:  x => Math.sinh(x/3),
        df: x => Math.cosh(x/3)/3,
        xrange: [-3 * 3, 3 * 3],
        yrange: [0, 50],
        loss: baseLoss
    },
    deep_net: {
        name: "deep_net",
        f: x => Math.pow(Math.abs(x/3+1), 3) - 1,  // depth = 4
        df: x => 3/3 * Math.pow(Math.abs(x/3+1), 2),
        // xrange: [-0.7*4, 0.7*4],
        xrange: [-0.95*3, 0.95*3],
        yrange: [0, 4],
        loss: baseLoss
    }
}
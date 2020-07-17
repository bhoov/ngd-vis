import * as nj from "numjs"

export function LandscapeLoss(freqs: number[], amps: number[]) {
    if (freqs.length != amps.length) throw "Expect amplitudes and frequencies to be vectors of the same length"

    function _forward(v: nj.NdArray<number>) {
        const { y, y_x } = layer1(v)
        const { sc, sc_y } = layer2(y)
        const { z, z_y, z_sc } = layer3(y, sc)

        return { y, y_x, sc, sc_y, z, z_y, z_sc }
    }

    function forward(v: nj.NdArray<number>): nj.NdArray<number> {
        const { z } = _forward(v)
        return z
    }

    function jacobian(v: nj.NdArray<number>) {
        const { z_sc, sc_y, z_y, y_x } = _forward(v)
        const out_y = nj.add(nj.dot(z_sc, sc_y), z_y)
        return nj.dot(out_y, y_x).T
    }

    function layer1(v: nj.NdArray<number>) {
        const x1 = v.get(0),
            x2 = v.get(1)

        let y1 = x1, y2 = x2,
            dy1 = 0, dy2 = 0

        freqs.forEach((f, i) => {
            const a = amps[i]

            const theta1 = f * x1,
                theta2 = f * x2
            y1 += (a * Math.sin(theta2))
            y2 += (a * Math.cos(theta1))
            dy1 += a * f * Math.cos(theta2)
            dy2 += a * f * -Math.sin(theta1)
        })

        return {
            y: nj.array([y1, y2]),
            y_x: nj.array([[1, dy1], [dy2, 1]])
        }
    }

    function layer2(v: nj.NdArray<number>) {
        const y1 = v.get(0),
            y2 = v.get(1)

        let c1 = 0, c2 = 0, dc1 = 0, dc2 = 0,
            s1 = 0, s2 = 0, ds1 = 0, ds2 = 0

        freqs.forEach((f, i) => {
            const a = amps[i]
            const theta1 = f * y1, s01 = Math.sin(theta1), c01 = Math.cos(theta1),
                theta2 = f * y2, s02 = Math.sin(theta2), c02 = Math.cos(theta2)

            s1 += a * s01
            c1 += a * c01
            s2 += a * s02
            c2 += a * c02
            ds1 += a * f * c01
            dc1 += a * f * (-s01)
            ds2 += a * f * c02
            dc2 += a * f * (-s02)
        })

        return {
            sc: nj.array([s1, s2, c1, c2]),
            sc_y:nj.array([[ds1, 0], [0, ds2],
                [dc1, 0],[0, dc2]])
        }
    }

    function layer3(v: nj.NdArray<number>, sc: nj.NdArray<number>) {
        const y1 = v.get(0),
            y2 = v.get(1)

        const [s1, s2, c1, c2] = sc.tolist()

        const z1 = (y1 * s2) + (c1 * y2),
            z2 = (s1 * y2) + (y1 * c2),
            z1_dy = [s2, c1],
            z2_dy = [c2, s1],
            z1_dsc = [0, y1, y2, 0],
            z2_dsc = [y2, 0, 0, y1]

        return {
            z: nj.array([z1, z2]),
            z_y: nj.array([z1_dy, z2_dy]),
            z_sc: nj.array([z1_dsc, z2_dsc])
        }
    }

    return {
        freqs,
        amps,
        forward,
        jacobian,
    }
}
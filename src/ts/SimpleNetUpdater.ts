import * as d3 from 'd3'
import * as nj from "numjs"
import * as tp from "./types"
import { Array } from "./types"
import { BaseUpdater2D } from "./BaseUpdater2D"

export class SimpleNetUpdater extends BaseUpdater2D {
    eigenvalues(v: Array): Array {
        const ex = nj.power(v, 2).sum()
        const ey = nj.power(v, 2).sum()
        return nj.array([ex, ey])
    }

    dv(v: Array): Array {
        const g = this.gradient(v)
        const ev = this.eigenvalues(v)

        const modEvs = nj.abs(nj.power(ev, this.op.q))
        const dv: Array = nj.divide(g, modEvs)
        return dv
    }

    // Convert to block diagonal updater
    toBlock(): BlockSimpleNetUpdater {
        const blockUpdater = new BlockSimpleNetUpdater(this.op)
        return blockUpdater
    }

    // Create a new full updater from this object. Useful if one of the derived classes needs to implement
    toFull(): SimpleNetUpdater {
        const fullUpdater = new SimpleNetUpdater(this.op)
        return fullUpdater
    }
}

export class BlockSimpleNetUpdater extends SimpleNetUpdater {
    eigenvalues(v: Array): Array {
        return nj.multiply(nj.power(this.op.df(v), 2), 2)
    }
}
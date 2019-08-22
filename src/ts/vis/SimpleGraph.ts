import * as d3 from 'd3'
import {D3Sel} from '../util/xd3'
import {SVGVisComponent, HTMLVisComponent} from '../util/VisComponent'
import { SimpleEventHandler } from '../util/SimpleEventHandler';

type T = number[]

export class SimpleGraph extends SVGVisComponent<T> {
    cssname = "simple-cake"
    _data: T
    options = {}

    constructor(d3parent: D3Sel, eventHandler?: SimpleEventHandler, options={}) {
        super(d3parent, eventHandler, options)
        this.base.classed(this.cssname, true)
        this.init()
    }

    init() { 
        this.base
    }

    data():number[]
    data(val:number[]): this
    data(val?) {
        if (val == null) return this._data
        this._data = val
        return this
    }
}
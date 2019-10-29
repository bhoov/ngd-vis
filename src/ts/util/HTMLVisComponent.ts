import {VisComponent} from './VisComponent'
import {SimpleEventHandler} from './SimpleEventHandler'
import {D3Sel} from './xd3'

export abstract class HTMLVisComponent<DataInterface> extends VisComponent<DataInterface> {

    protected constructor(d3parent: D3Sel, eventHandler?: SimpleEventHandler, options: {} = {}) {
        super(d3parent, eventHandler)
        this.initHTML(options)
    }

    /**
     * Must be called immediately after the `super()` constructor call of inhereting classes
     * 
     * - Creates `base` attribute on parent
     * - Add additional static elements defined in `init()`
     */
    initHTML(options: {} = {}) {
        this.updateOptions(options)
        this.base = this.parent.append('div')
        this.init() // Add additional static elements
    }
}
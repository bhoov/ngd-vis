import * as d3 from 'd3'
import {D3Sel} from '../util/xd3'
import {legendColor} from 'd3-svg-legend'
import {SVGOptions} from '../types'
import {SVGVisComponent, HTMLVisComponent} from '../util/VisComponent'
import { SimpleEventHandler } from '../util/SimpleEventHandler';
import {SVG} from '../util/SVGplus'
import {getContourValues} from '../plotting'

type T = number[]

export class SimpleGraph extends SVGVisComponent<T> {
    cssname = "simple-graph"

    _data: T

    options:SVGOptions = {
        maxWidth: 450,
        maxHeight: 450,
        margin: {top: 50, right: 75, bottom: 75, left: 50},
        pad: 30,
    }

    // Scales
    xrange = [0, 1.6]
    yrange = [0, 1.6]
    x
    y
    color
    contours
    thresholds

    // Selections
    xaxis
    yaxis
    legend
    tip
    xlabel
    ylabel

    // Specify the grid for the contours
    n: number = 50
    m: number = 50


    constructor(d3parent: D3Sel, eventHandler?: SimpleEventHandler, options={}) {
        super(d3parent, eventHandler, options)
        this.base.classed(this.cssname, true)
        this.init()
    }

    plotContours() {

        const func = (x, y) =>  x * y;

        const vals = getContourValues(this.n, this.m, this.xrange, this.yrange, func)
        this.thresholds = d3.range(0, d3.max(vals), 0.1);
        this.contours.thresholds(this.thresholds);
            // .map(function(p) { return Math.pow(2, p); });

        this.color = d3.scaleLog().interpolate(() => d3.interpolateYlGnBu);
        const op = this.options;

        const contours = this.base.selectAll("path.contour")
            .data(this.contours(vals))

        contours.join("path")
            .attr("class", "contour")
            .attr("d", d3.geoPath(d3.geoIdentity().scale(op.width / this.n)))
            .attr("fill", d => {
                // console.log(d);
                return this.color(d.value)
            })
            .classed('main-fit', d => (d.value == 1))
            // .attr("stroke-width", 0.5)
            // .attr("stroke", "black")
    }

    plotArrow() {
        var line = this.base.append("line")
             .attr("x1",this.x(0.25))  
             .attr("y1",this.y(0.25))  
             .attr("x2",this.x(0.5))  
             .attr("y2",this.y(0.25))  
             .attr("stroke","red")  
             .attr("stroke-width",2)  
             .attr("marker-end","url(#arrow)");  
    }

    init() { 
        const op = this.options

        op.width = op.maxWidth - (op.margin.left + op.margin.right)
        op.height = op.maxHeight - (op.margin.top + op.margin.bottom)

        this.contours = d3.contours().size([this.n, this.m])
        SVG.addArrows(this.svg)

        this.svg
            .attr("width", op.width)
            .attr("height", op.height)

        this.base = SVG.group(this.base, '', {x: op.margin.left, y: op.margin.top})

        this.x = d3.scaleLinear().domain(this.xrange).range([0, op.width])
        this.y = d3.scaleLinear().domain(this.yrange).range([op.height, 0])

        this.xaxis = this.base.append("g")
            .attr("class", "axis axis--x")
            .attr("transform", SVG.translate(0, op.height))
            .call(d3.axisBottom(this.x).ticks(3, "s"));
        
        this.yaxis = this.base.append("g")
            .attr("class", "axis axis--y")
            .attr("transform", SVG.translate(0, 0))
            .call(d3.axisLeft(this.y).ticks(3, "s"));

        this.xlabel = this.base.append("text")
            .text("w0")
            .attr("class", "titles")
            .attr("transform", SVG.translate(op.width/2, op.height + op.pad))

        this.ylabel = this.base.append("text")
            .text("w1")
            .attr("class", "titles")
            .attr("transform", SVG.translate(-op.pad, op.height/2) + SVG.rotate(-90))

        this.legend = this.svg.append("g")
            .attr("class", "legend")
            .attr("transform", SVG.translate(op.width + op.pad / 2, 0)); 

        this.plotContours()
        this.plotArrow()
        // this.plotArrows()
    }

    data():number[]
    data(val:number[]): this
    data(val?) {
        if (val == null) return this._data
        this._data = val
        return this
    }
}
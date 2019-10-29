import * as d3 from 'd3'
import { MarginInfo } from './util/SVGplus'
import { D3Sel } from './util/xd3'
import {range} from 'ramda'

export function addSVG(div: string, width: number, height: number, margin: MarginInfo): D3Sel {

    var svg = d3.select(div).append("svg")
        .attr("width", "100%")
        .attr("height", "100%")
        .attr("viewBox", "0 0 " + (width + margin.left + margin.right) + " " + (height + margin.top + margin.bottom))
        .attr("preserveAspectRatio", "xMidYMid meet")
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    return svg;
}

type DomainRange = number[]

export function getContourValues(n: number, m: number, xrange: DomainRange, yrange: DomainRange, func: (x: number, y: number) => number) {
    let values = new Array(n * m)

    for (var j = 0.5, k = 0; j < m; ++j) {
        for (var i = 0.5; i < n; ++i, ++k) {
            const xval = ((i / n) * (xrange[1] - xrange[0])) + xrange[0];
            const yval = (1 - (j / m)) * (yrange[1] - yrange[0]) + yrange[0];
            values[k] = func(xval, yval);
        }
    }

    return values
}

export function uniform(a, b) {
    return Math.random() * (b - a) + a;
}

export function genUniform(a:number, b:number, n:number) {
    return range(0, n).map(x => {return {x: uniform(a, b), y: uniform(a,b)}})
}

export function normal(mean, variance) {
    var s = 0;
    while (s == 0 || s > 1) {
        var u = uniform(-1,1),
        v = uniform(-1,1);
        s = u * u + v * v;
    }

    var standard = Math.sqrt(-2 * Math.log(s) / s) * u;
    return mean + Math.sqrt(variance) * standard;
}

export function genNormal(mean:number, variance:number, n:number) {
    return range(0, n).map(x => {return {x: normal(mean, variance), y: uniform(mean,variance)}})
}
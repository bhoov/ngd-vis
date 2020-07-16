import * as d3 from 'd3'
import { BaseType } from 'd3'

export const linspace = (start, end, n) => {
    const delta = (end - start) / (n - 1)
    return d3.range(start, end + delta, delta).slice(0, n)
}

/**
 * Convert values spaced evenly on a power scale. When exp=1, same as linspace
 */
export const powspace = (start, end, n, exp=1) => {
    const scale = d3.scalePow().exponent(exp).domain([start, end]).range([start, end])
    return linspace(start,end,n).map(x => scale(x))
}

export type D3Sel = d3.Selection<any, any, any, any>
export type d3S<T extends BaseType, U = any> = d3.Selection<T, U, any, any>

d3.selection.prototype.clear = function () {
    this.selectAll('*').remove();
    return this;
}

d3.selection.prototype.toggleClass = function (className) {
    this.classed(className, !this.classed(className));
    return this;
}

d3.selection.prototype.show = function () {
    this.style('display', 'initial');
    return this;
}

d3.selection.prototype.hide = function () {
    this.style('display', 'none');
    return this;
}

d3.selection.prototype.toggle = function () {
    var isHidden = this.style('display') == 'none';
    return this.style('display', isHidden ? 'inherit' : 'none');
}

d3.selection.prototype.after = function (tagName) {
    var elements = [];

    this.each(function () {
        var element = document.createElement(tagName);
        this.parentNode.insertBefore(element, this.nextSibling);
        elements.push(element);
    });

    return d3.selectAll(elements);
}

d3.selection.prototype.before = function (tagName) {
    var elements = [];

    this.each(function () {
        var element = document.createElement(tagName);
        this.parentNode.insertBefore(element, this);
        elements.push(element);
    });

    return d3.selectAll(elements);
}
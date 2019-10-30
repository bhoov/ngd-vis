import * as d3 from 'd3'
import { legendColor, LegendColor } from 'd3-svg-legend'
import { D3Sel } from './util/xd3'
import * as R from 'ramda'
import { MarginInfo } from './util/SVGVisComponent'
import { NetCoef, LabeledPoint } from './types'
import { SVG } from './util/SVGplus'
import { uniform, normal } from './plotting'

export class SimpleContour {
  cssName = "basic-line-graph"
  pad: number
  margin: MarginInfo
  width: number
  height: number
  svg: D3Sel
  n: number
  m: number
  x: d3.ScaleLinear<number, number>
  y: d3.ScaleLinear<number, number>
  xaxis: D3Sel
  yaxis: D3Sel
  legend: LegendColor

  w0range: [number, number]
  w1range: [number, number]

  // constructor
  constructor(div) {
    this.pad = 30;
    this.margin = { top: 40, right: 40, bottom: 40, left: 40 };
    this.width = 350 - this.margin.left - this.margin.right;
    this.height = 350 - this.margin.top - this.margin.bottom;
    this.svg = SVG.addSVG(div, this.width, this.height, this.margin);
    this.svg.classed(this.cssName, true)

    this.n = 250;
    this.m = 250;

    this.x = d3.scaleLinear().domain(this.w0range).range([0, this.width]);
    this.y = d3.scaleLinear().domain(this.w1range).range([this.height, 0]);

    this.w0range = [0, 1]
    this.w1range = [0, 1]

    this.setup();
  }

  plot() {

    var x1 = this.x.domain()[0],
      x2 = this.x.domain()[1];

  }

  setup() {
    this.xaxis = this.svg.append("g")
      .attr("class", "axis axis--x")
      .attr("transform", SVG.translate(0, this.height))
      .call(d3.axisBottom(this.x).ticks(3, "s"));

    this.yaxis = this.svg.append("g")
      .attr("class", "axis axis--y")
      .attr("transform", SVG.translate(0, 0))
      .call(d3.axisLeft(this.y).ticks(3, "s"));

    this.svg.append("text")
      .text("w0")
      .attr("class", "titles")
      .attr("transform", SVG.translate(this.height + this.pad, this.width / 2))
      .attr("alignment-baseline", "baseline");

    this.svg.append("text")
      .text("Y")
      .attr("class", "titles")
      .attr("transform", SVG.translate(-this.pad, this.height / 2) + SVG.rotate(90))
      .attr("alignment-baseline", "hanging");

    //   this.svg.append("g")
    //   .attr("class", "legend")
    //   .attr("transform", "translate(" + this.width / 2 + "," + this.height + ")"); 

    //   this.legend = legendColor()
    //     .labelFormat(d3.format(".2g"))
    //     .title("Loss");

  }

}
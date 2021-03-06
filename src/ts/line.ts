import * as d3 from 'd3'
import { legendColor, LegendColor } from 'd3-svg-legend'
import { D3Sel } from './util/xd3'
import { MarginInfo } from './util/SVGVisComponent'
import { NetCoef, LabeledPoint } from './types'
import { addSVG } from './plotting'
import { uniform, normal } from './plotting'

export class Line {
  cssName = "basic-line-graph"
  obj_coef: NetCoef
  net_coef: NetCoef
  points: LabeledPoint[]
  pad: number
  margin: MarginInfo
  width: number
  height: number
  svg: D3Sel
  n: number
  m: number
  x: d3.ScaleLinear<number, number>
  y: d3.ScaleLinear<number, number>
  color: string[]
  xaxis: D3Sel
  yaxis: D3Sel
  legend: LegendColor

  // constructor
  constructor(div) {

    this.obj_coef = { 'b0': uniform(-4, 4), 'b1': uniform(-4, 4) };
    this.net_coef = { 'b0': uniform(-1, 1), 'b1': uniform(-1, 1) };
    this.points = [];

    this.pad = 30;
    this.margin = { top: 40, right: 40, bottom: 40, left: 40 };
    this.width = 350 - this.margin.left - this.margin.right;
    this.height = 350 - this.margin.top - this.margin.bottom;
    this.svg = addSVG(div, this.width, this.height, this.margin);
    this.svg.classed(this.cssName, true)

    this.n = 250;
    this.m = 250;

    this.x = d3.scaleLinear().domain([-10, 10]).range([0, this.width]);
    this.y = d3.scaleLinear().domain([-10, 10]).range([this.height, 0]);
    this.color = ["black", "green", "orange"];

    this.setup();
  }

  objective(b0, b1) {
    this.obj_coef.b0 = b0;
    this.obj_coef.b1 = b1;
    this.plot();
  }

  network(b0, b1) {
    this.net_coef.b0 = b0;
    this.net_coef.b1 = b1;
    this.plot();
  }

  sample(n) {

    this.points = [];
    for (var i = 0; i < n; i++) {
      var point_x = normal(0, 5),
        point_y = this.obj_coef.b0 + this.obj_coef.b1 * point_x + normal(0, 10);
      this.points.push({ 'x': point_x, 'y': point_y, 'label': 0 });
    }
    return this.points;
  }

  plot() {

    var x1 = this.x.domain()[0],
      x2 = this.x.domain()[1];

    // add function lines
    var line = this.svg.selectAll("line.function")
      .data([this.obj_coef, this.net_coef])
      .raise();

    line.join("line")
      .attr("x1", this.x(x1))
      .attr("y1", (d) => { return this.y(d.b0 + d.b1 * x1); })
      .attr("x2", this.x(x2))
      .attr("y2", (d) => { return this.y(d.b0 + d.b1 * x2); })
      .attr("class", "function")
      .attr("id", (d, i) => { return i ? 'estimate' : 'true'; });

    // add data points

    var circle = this.svg.selectAll("circle").data(this.points);

    circle.attr("cx", (d) => { return this.x(d.x) })
      .attr("cy", (d) => { return this.y(d.y); });

    circle.enter().append("circle")
      .attr("cx", (d) => { return this.x(d.x) })
      .attr("cy", (d) => { return this.y(d.y); })
      .attr("r", 2)
      .attr("fill", (d) => { return this.color[d.label]; })
      .attr("class", "sample");

    circle.exit().remove();


  }

  setup() {
    this.xaxis = this.svg.append("g")
      .attr("class", "axis axis--x")
      .attr("transform", "translate(0," + this.height / 2 + ")")
      .call(d3.axisBottom(this.x).ticks(3, "s"));

    this.yaxis = this.svg.append("g")
      .attr("class", "axis axis--y")
      .attr("transform", "translate(" + this.width / 2 + ",0)")
      .call(d3.axisLeft(this.y).ticks(3, "s"));

    this.svg.append("text")
      .text("X")
      .attr("class", "titles")
      .attr("transform", "translate(" + -this.pad + "," + this.height / 2 + ")")
      .attr("alignment-baseline", "baseline");

    this.svg.append("text")
      .text("Y")
      .attr("class", "titles")
      .attr("transform", "translate(" + this.width / 2 + "," + (this.height + this.pad) + ")")
      .attr("alignment-baseline", "hanging");

    this.svg.append("g")
      .attr("class", "legend")
      .attr("transform", "translate(" + this.width / 2 + "," + this.height + ")");

    this.legend = legendColor()
      .labelFormat(d3.format(".2g"))
      .title("Loss");

  }

}
import * as d3 from 'd3'
import {MarginInfo} from './types'
import {D3Sel} from './util/xd3'

export function addSVG(div:string, width:number, height:number, margin:MarginInfo):D3Sel {

	var svg = d3.select(div).append("svg")
	    .attr("width", "100%")
	    .attr("height", "100%")
	    .attr("viewBox", "0 0 " + (width + margin.left + margin.right) + " " + (height + margin.top + margin.bottom))
	    .attr("preserveAspectRatio", "xMidYMid meet")
	  .append("g")
	    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

	return svg;
}
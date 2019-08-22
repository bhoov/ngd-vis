import * as d3 from "d3"

/**
 * Created by hen on 5/15/17.
 * Modified by hoo on 4/16/19.
 */

export class SVG {
    
    static translate({x, y}):string {
        return "translate(" + x + "," + y + ")"
    }

    static group(parent, classes, pos = {x: 0, y: 0}) {
        return parent.append('g')
            .attr('class', classes)
            .attr("transform", SVG.translate(pos))
    }
}

export class SVGMeasurements {

    private measureElement: d3.Selection<any, any, any, any>;

    constructor(baseElement, classes = '') {
        this.measureElement = baseElement.append('text')
            .attr('x', 0)
            .attr('y', -20)
            .attr('class', classes)

    }

    textLength(text, style = null) {
        this.measureElement.attr('style', style);
        this.measureElement.text(text);
        const tl = (<SVGTextElement> this.measureElement.node()).getComputedTextLength();
        this.measureElement.text('');

        return tl;
    }
}
/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/index.ts","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/file-loader/dist/cjs.js?name=index.html!./src/index.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?name=index.html!./src/index.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "index.html";

/***/ }),

/***/ "./src/css/main.scss":
/*!***************************!*\
  !*** ./src/css/main.scss ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ts_main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ts/main */ "./src/ts/main.ts");
/* harmony import */ var _file_loader_name_index_html_index_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! file-loader?name=index.html!./index.html */ "./node_modules/file-loader/dist/cjs.js?name=index.html!./src/index.html");
/* harmony import */ var _file_loader_name_index_html_index_html__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_file_loader_name_index_html_index_html__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _css_main_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./css/main.scss */ "./src/css/main.scss");
/* harmony import */ var _css_main_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_css_main_scss__WEBPACK_IMPORTED_MODULE_2__);



Object(_ts_main__WEBPACK_IMPORTED_MODULE_0__["main"])();


/***/ }),

/***/ "./src/ts/GolfLandscapes.ts":
/*!**********************************!*\
  !*** ./src/ts/GolfLandscapes.ts ***!
  \**********************************/
/*! exports provided: baseLoss, getPlotFunc, landscapes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "baseLoss", function() { return baseLoss; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPlotFunc", function() { return getPlotFunc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "landscapes", function() { return landscapes; });
const baseLoss = x => 1 / 2 * Math.pow(x, 2);
const getPlotFunc = (z) => (x) => z.loss(z.f(x));
const landscapes = {
    hole: {
        f: x => Math.tanh(x / 2),
        df: x => Math.pow(Math.cosh(x / 2), -2) / 2,
        xrange: [-12, 12],
        yrange: [0, 0.6],
        loss: baseLoss
    },
    steps: {
        f: x => Math.tanh(x - 11) / 4 + Math.tanh(x - 6) / 4 + Math.tanh(x) + Math.tanh(x + 6) / 4 + Math.tanh(x + 11) / 4,
        df: x => Math.pow(Math.cosh(x - 11), -2) / 4 + Math.pow(Math.cosh(x - 6), -2) / 4 + Math.pow(Math.cosh(x), -2) + Math.pow(Math.cosh(x + 6), -2) / 4 + Math.pow(Math.cosh(x + 11), -2) / 4,
        xrange: [-13.6, 13.6],
        yrange: [0, 2.5],
        loss: baseLoss
    },
    seagull: {
        f: x => Math.sign(x) * (1 - (1 / (1 + Math.abs(x)))),
        df: x => 1 / Math.pow(1 + Math.abs(x), 2),
        xrange: [-12, 12],
        yrange: [0, 0.6],
        loss: baseLoss
    },
    bowl: {
        f: x => Math.sinh(x / 5),
        df: x => Math.cosh(x / 5) / 5,
        xrange: [-15, 15],
        yrange: [0, 100],
        loss: baseLoss
    },
    deep_net: {
        f: x => Math.pow(Math.abs(x / 10 + 1), 3) - 1,
        df: x => 3 / 10 * Math.pow(Math.abs(x / 10 + 1), 2),
        xrange: [-9.9, 9.9],
        yrange: [0, 3],
        loss: baseLoss
    }
};


/***/ }),

/***/ "./src/ts/Updater.ts":
/*!***************************!*\
  !*** ./src/ts/Updater.ts ***!
  \***************************/
/*! exports provided: Updater, BlockUpdater */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Updater", function() { return Updater; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockUpdater", function() { return BlockUpdater; });
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3 */ "./node_modules/d3/index.js");

const defaultError = v => v.x * v.y - 1;
const defaultStep2Lr = d3__WEBPACK_IMPORTED_MODULE_0__["scaleLinear"]().domain([0, 0.8]).range([0.001, 0.25]);
class Updater {
    constructor(q = 0, eta = 0.1, err = defaultError, step2lr = defaultStep2Lr) {
        this.err = err;
        this.q = q;
        this.eta = eta;
        this.step2lr = step2lr;
    }
    // Amount to scale size of learning rate arrows
    get lrScale() {
        return this.step2lr(this.eta);
    }
    // Take abs value of error
    absErr(v) {
        return Math.abs(this.err(v));
    }
    // Calculate error squared
    loss(v) {
        return Math.pow(this.err(v), 2);
    }
    gradient(v) {
        const err = this.err(v);
        const gx = v.y * err;
        const gy = v.x * err;
        return { x: gx, y: gy };
    }
    eigenvalues(v) {
        const getEv = (x, y) => Math.pow(x, 2) + Math.pow(y, 2);
        const ex = getEv(v.x, v.y);
        const ey = getEv(v.x, v.y);
        return { x: ex, y: ey };
    }
    dv(v) {
        const g = this.gradient(v);
        const ev = this.eigenvalues(v);
        const dvx = -g.x / Math.abs(Math.pow(ev.x, this.q));
        const dvy = -g.y / Math.abs(Math.pow(ev.y, this.q));
        return { x: dvx, y: dvy };
    }
    lr(v) {
        const dv = this.dv(v);
        const absErr = this.absErr(v);
        const lrScale = this.step2lr(this.eta);
        const lrx = lrScale * dv.x / absErr;
        const lry = lrScale * dv.y / absErr;
        return { x: lrx, y: lry };
    }
    // Get next v value
    next(v) {
        const dv = this.dv(v);
        const newx = v.x + dv.x * this.eta;
        const newy = v.y + dv.y * this.eta;
        return { x: newx, y: newy };
    }
    nextLr(v) {
        const g = this.lr(v);
        const x = v.x + g.x;
        const y = v.y + g.y;
        return { x: x, y: y };
    }
}
class BlockUpdater extends Updater {
    eigenvalues(v) {
        const ex = 2 * Math.pow(v.y, 2);
        const ey = 2 * Math.pow(v.x, 2);
        return { x: ex, y: ey };
    }
}


/***/ }),

/***/ "./src/ts/main.ts":
/*!************************!*\
  !*** ./src/ts/main.ts ***!
  \************************/
/*! exports provided: main */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "main", function() { return main; });
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3 */ "./node_modules/d3/index.js");
/* harmony import */ var _vis_ContourPlot__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vis/ContourPlot */ "./src/ts/vis/ContourPlot.ts");
/* harmony import */ var _vis_GolfHole1D__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./vis/GolfHole1D */ "./src/ts/vis/GolfHole1D.ts");
/* harmony import */ var _vis_GolfLosses__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./vis/GolfLosses */ "./src/ts/vis/GolfLosses.ts");
/* harmony import */ var _vis_GolfXDist__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./vis/GolfXDist */ "./src/ts/vis/GolfXDist.ts");
/* harmony import */ var _vis_GolfBall__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./vis/GolfBall */ "./src/ts/vis/GolfBall.ts");
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ramda */ "./node_modules/ramda/es/index.js");
/* harmony import */ var _util_SimpleEventHandler__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./util/SimpleEventHandler */ "./src/ts/util/SimpleEventHandler.ts");
/* harmony import */ var _vis_ManualUpdater__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./vis/ManualUpdater */ "./src/ts/vis/ManualUpdater.ts");
/* harmony import */ var _GolfLandscapes__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./GolfLandscapes */ "./src/ts/GolfLandscapes.ts");










const toFixed = ramda__WEBPACK_IMPORTED_MODULE_6__["curry"]((ndigits, x) => x.toFixed(ndigits));
const toQ = toFixed(1);
const toEta = toFixed(4);
function plotQuiverGraph() {
    const vis1 = d3__WEBPACK_IMPORTED_MODULE_0__["select"]('#vis1');
    const sels = {
        quiverPlot: vis1.select('#chart'),
        qId: vis1.select('#q-val'),
        etaId: vis1.select('#eta-val'),
        qSlider: vis1.select('#q-slider'),
        etaSlider: vis1.select('#eta-slider'),
        hessType: vis1.select('#hess-type')
    };
    const vizs = {
        graph: new _vis_ContourPlot__WEBPACK_IMPORTED_MODULE_1__["ContourPlot"](sels.quiverPlot)
    };
    const defaults = {
        // Note to also change the default value in the html file!
        q: 0,
        eta: 0.1
    };
    const scales = {
        q: d3__WEBPACK_IMPORTED_MODULE_0__["scaleLinear"]().range([0, 10]).domain([0, 1]),
        eta: d3__WEBPACK_IMPORTED_MODULE_0__["scaleLinear"]().range([1, 1000]).domain([Math.pow(10, -5), 0.6])
    };
    // Initialize graph parameters to match the defaults
    vizs.graph.q(defaults.q);
    vizs.graph.eta(defaults.eta);
    sels.qSlider.property('value', scales.q(defaults.q));
    sels.etaSlider.property('value', scales.eta(defaults.eta));
    sels.qId.text(toQ(defaults.q));
    sels.etaId.text(toEta(defaults.eta));
    sels.qSlider.on('input', function () {
        const me = d3__WEBPACK_IMPORTED_MODULE_0__["select"](this);
        const v = scales.q.invert(+me.property('value'));
        vizs.graph.q(v);
        sels.qId.text(`${toQ(v)}`);
    });
    sels.etaSlider.on('input', function () {
        const me = d3__WEBPACK_IMPORTED_MODULE_0__["select"](this);
        const v = scales.eta.invert(me.property('value'));
        vizs.graph.eta(v);
        sels.etaId.text(`${toEta(v)}`);
    });
    sels.hessType.on('input', function () {
        const self = d3__WEBPACK_IMPORTED_MODULE_0__["select"](this);
        const v = self.property('value');
        vizs.graph.setUpdater(v);
    });
}
function plotGolfHole() {
    const vis2 = d3__WEBPACK_IMPORTED_MODULE_0__["select"]("#vis2");
    const sels = {
        chart: vis2.select('#chart'),
        chartXDist: vis2.select('#chart-xdist'),
        chartLosses: vis2.select('#chart-losses'),
        landscapeSelector: vis2.select('.landscape-select')
    };
    const defaults = {
        landscape: "seagull"
    };
    const eventHandler = new _util_SimpleEventHandler__WEBPACK_IMPORTED_MODULE_7__["SimpleEventHandler"](vis2.node());
    const vizs = {
        graph: new _vis_GolfHole1D__WEBPACK_IMPORTED_MODULE_2__["GolfHole1D"](sels.chart, eventHandler),
        chartXDist: new _vis_GolfXDist__WEBPACK_IMPORTED_MODULE_4__["GolfXDist"](sels.chartXDist, eventHandler),
        chartLosses: new _vis_GolfLosses__WEBPACK_IMPORTED_MODULE_3__["GolfLosses"](sels.chartLosses, eventHandler)
    };
    // Attach golfball info to loss tracker
    eventHandler.bind('loss-click', (e) => {
        vizs.chartXDist.clearPaths();
        vizs.chartLosses.clearPaths();
    });
    // Configure html page to work with defaults
    sels.landscapeSelector.property('value', defaults.landscape);
    vizs.graph.landscape(_GolfLandscapes__WEBPACK_IMPORTED_MODULE_9__["landscapes"][defaults.landscape]);
    const streams = vizs.graph.data().map(b => b.stream);
    const plotter = {
        next: d => {
            vizs.chartXDist.plotPath(d);
            vizs.chartLosses.plotPath(d);
        }
    };
    streams.forEach(s => s.subscribe(plotter));
    // Gather interactivity for the golf ball plot
    sels.landscapeSelector.on('input', function () {
        const self = d3__WEBPACK_IMPORTED_MODULE_0__["select"](this);
        const v = self.property('value');
        vizs.graph.landscape(_GolfLandscapes__WEBPACK_IMPORTED_MODULE_9__["landscapes"][v]);
    });
}
function plotGolfHoleSlider() {
    const vis3 = d3__WEBPACK_IMPORTED_MODULE_0__["select"]("#vis3");
    const sels = {
        chart: vis3.select('#chart'),
        chartLosses: vis3.select('#chart-losses'),
        chartXDist: vis3.select('#chart-xdist'),
        qId: vis3.select('#q-val'),
        etaId: vis3.select('#eta-val'),
        qSlider: vis3.select('#q-slider'),
        etaSlider: vis3.select('#eta-slider'),
        landscapeSelector: vis3.select('.landscape-select')
    };
    const eventHandler = new _util_SimpleEventHandler__WEBPACK_IMPORTED_MODULE_7__["SimpleEventHandler"](vis3.node());
    const vizs = {
        graph: new _vis_GolfHole1D__WEBPACK_IMPORTED_MODULE_2__["GolfHole1D"](sels.chart, eventHandler, { maxIter: 1.5e3 }),
        chartLosses: new _vis_GolfLosses__WEBPACK_IMPORTED_MODULE_3__["GolfLosses"](sels.chartLosses, eventHandler),
        chartXDist: new _vis_GolfXDist__WEBPACK_IMPORTED_MODULE_4__["GolfXDist"](sels.chartXDist, eventHandler)
    };
    const defaults = {
        // Note to also change the default value in the html file!
        q: 0.5,
        eta: 0.1,
        landscape: "seagull"
    };
    // Attach golfball info to loss tracker
    eventHandler.bind('loss-click', (e) => {
        vizs.chartXDist.clearPaths();
        vizs.chartLosses.clearPaths();
    });
    // Put data into viz
    vizs.graph.data([new _vis_GolfBall__WEBPACK_IMPORTED_MODULE_5__["GolfBall"](new _vis_ManualUpdater__WEBPACK_IMPORTED_MODULE_8__["ManualUpdater"](_GolfLandscapes__WEBPACK_IMPORTED_MODULE_9__["landscapes"].hole.f, _GolfLandscapes__WEBPACK_IMPORTED_MODULE_9__["landscapes"].hole.df, defaults.q, defaults.eta), "golf-ball")]);
    vizs.graph.landscape(_GolfLandscapes__WEBPACK_IMPORTED_MODULE_9__["landscapes"].steps);
    // const etaRange = [-5, 2].map(x => Math.pow(10, x))
    const etaRange = [-3, 2].map(x => Math.pow(10, x));
    const scales = {
        q: d3__WEBPACK_IMPORTED_MODULE_0__["scaleLinear"]().range([0, 10]).domain([0, 1]),
        eta: d3__WEBPACK_IMPORTED_MODULE_0__["scaleLog"]().range([1, 1000]).domain(etaRange).base(10)
    };
    // Initialize graph parameters to match the defaults
    vizs.graph.landscape(_GolfLandscapes__WEBPACK_IMPORTED_MODULE_9__["landscapes"][defaults.landscape]);
    sels.landscapeSelector.property('value', defaults.landscape);
    sels.qSlider.property('value', scales.q(defaults.q));
    sels.etaSlider.property('value', scales.eta(defaults.eta));
    sels.qId.text(toQ(defaults.q));
    sels.etaId.text(toEta(defaults.eta));
    // Configure Interactivity
    sels.qSlider.on('input', function () {
        const me = d3__WEBPACK_IMPORTED_MODULE_0__["select"](this);
        const v = scales.q.invert(me.property('value'));
        vizs.graph.dataHead.q(v);
        sels.qId.text(`${toQ(v)}`);
    });
    sels.etaSlider.on('input', function () {
        const me = d3__WEBPACK_IMPORTED_MODULE_0__["select"](this);
        const v = scales.eta.invert(me.property('value'));
        vizs.graph.dataHead.eta(v);
        sels.etaId.text(`${toEta(v)}`);
    });
    sels.landscapeSelector.on('input', function () {
        const self = d3__WEBPACK_IMPORTED_MODULE_0__["select"](this);
        const v = self.property('value');
        vizs.graph.landscape(_GolfLandscapes__WEBPACK_IMPORTED_MODULE_9__["landscapes"][v]);
    });
    // Assign streams
    const streams = vizs.graph.data().map(b => b.stream);
    const plotter = {
        next: d => {
            vizs.chartXDist.plotPath(d);
            vizs.chartLosses.plotPath(d);
        }
    };
    streams.forEach(s => s.subscribe(plotter));
}
function main() {
    console.log("RUNNING");
    plotQuiverGraph();
    plotGolfHole();
    plotGolfHoleSlider();
}


/***/ }),

/***/ "./src/ts/plotting.ts":
/*!****************************!*\
  !*** ./src/ts/plotting.ts ***!
  \****************************/
/*! exports provided: addSVG, getContourValues, uniform, genUniform, normal, genNormal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addSVG", function() { return addSVG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getContourValues", function() { return getContourValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uniform", function() { return uniform; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "genUniform", function() { return genUniform; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normal", function() { return normal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "genNormal", function() { return genNormal; });
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3 */ "./node_modules/d3/index.js");
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ramda */ "./node_modules/ramda/es/index.js");


function addSVG(div, width, height, margin) {
    var svg = d3__WEBPACK_IMPORTED_MODULE_0__["select"](div).append("svg")
        .attr("width", "100%")
        .attr("height", "100%")
        .attr("viewBox", "0 0 " + (width + margin.left + margin.right) + " " + (height + margin.top + margin.bottom))
        .attr("preserveAspectRatio", "xMidYMid meet")
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
    return svg;
}
function getContourValues(n, m, xrange, yrange, func) {
    let values = new Array(n * m);
    for (var j = 0.5, k = 0; j < m; ++j) {
        for (var i = 0.5; i < n; ++i, ++k) {
            const xval = ((i / n) * (xrange[1] - xrange[0])) + xrange[0];
            const yval = (1 - (j / m)) * (yrange[1] - yrange[0]) + yrange[0];
            values[k] = func(xval, yval);
        }
    }
    return values;
}
function uniform(a, b) {
    return Math.random() * (b - a) + a;
}
function genUniform(a, b, n) {
    return Object(ramda__WEBPACK_IMPORTED_MODULE_1__["range"])(0, n).map(x => { return { x: uniform(a, b), y: uniform(a, b) }; });
}
function normal(mean, variance) {
    var s = 0;
    while (s == 0 || s > 1) {
        var u = uniform(-1, 1), v = uniform(-1, 1);
        s = u * u + v * v;
    }
    var standard = Math.sqrt(-2 * Math.log(s) / s) * u;
    return mean + Math.sqrt(variance) * standard;
}
function genNormal(mean, variance, n) {
    return Object(ramda__WEBPACK_IMPORTED_MODULE_1__["range"])(0, n).map(x => { return { x: normal(mean, variance), y: uniform(mean, variance) }; });
}


/***/ }),

/***/ "./src/ts/util/Chart2dVisComponent.ts":
/*!********************************************!*\
  !*** ./src/ts/util/Chart2dVisComponent.ts ***!
  \********************************************/
/*! exports provided: Chart2D */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Chart2D", function() { return Chart2D; });
/* harmony import */ var _SVGVisComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SVGVisComponent */ "./src/ts/util/SVGVisComponent.ts");

/**
 * Create a class that can be used for plotting charts (line graphs, bar graphs, etc.).
 */
class Chart2D extends _SVGVisComponent__WEBPACK_IMPORTED_MODULE_0__["SVGVisComponent"] {
    // Put a vector into the coordinate system used by the visualization
    intoVis(v) {
        return { x: this.scales.x(v.x), y: this.scales.y(v.y) };
    }
    // Take a vector in the coordinate system and return it to the math coordinates
    intoMath(v) {
        return { x: this.scales.x.invert(v.x), y: this.scales.y.invert(v.y) };
    }
}


/***/ }),

/***/ "./src/ts/util/SVGVisComponent.ts":
/*!****************************************!*\
  !*** ./src/ts/util/SVGVisComponent.ts ***!
  \****************************************/
/*! exports provided: SVGVisComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SVGVisComponent", function() { return SVGVisComponent; });
/* harmony import */ var _VisComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VisComponent */ "./src/ts/util/VisComponent.ts");
/* harmony import */ var _SVGplus__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SVGplus */ "./src/ts/util/SVGplus.ts");


class SVGVisComponent extends _VisComponent__WEBPACK_IMPORTED_MODULE_0__["VisComponent"] {
    constructor(d3parent, eventHandler, options = {}) {
        super(d3parent, eventHandler);
        this.options = {
            margin: { top: 0, right: 0, bottom: 0, left: 0 },
            maxWidth: 450,
            maxHeight: 450,
        };
    }
    /**
     * Must be called immediately after the `super()` constructor call of inhereting classes.
     *
     * - Calculates height and width for options
     * - Adds 'svg' and 'base' objects to the div.
     * - Adds layers on the base to work with if passed
     * - Runs defined static initialization defined in `init()`
     */
    initSVG(options = {}, defaultLayers = []) {
        this.updateOptions(options);
        const op = this.options;
        op.width = op.maxWidth - (op.margin.left + op.margin.right);
        op.height = op.maxHeight - (op.margin.top + op.margin.bottom);
        this.svg = _SVGplus__WEBPACK_IMPORTED_MODULE_1__["SVG"].addSVG(this.parent, op.width, op.height, op.margin);
        this.base = _SVGplus__WEBPACK_IMPORTED_MODULE_1__["SVG"].group(this.svg, ''); // Let HTML author assign the class name and ID
        this.layers = {};
        if (defaultLayers) {
            // construction order is important !
            defaultLayers.forEach(layer => {
                this.layers[layer] = _SVGplus__WEBPACK_IMPORTED_MODULE_1__["SVG"].group(this.base, layer);
            });
        }
        this.init();
    }
}


/***/ }),

/***/ "./src/ts/util/SVGplus.ts":
/*!********************************!*\
  !*** ./src/ts/util/SVGplus.ts ***!
  \********************************/
/*! exports provided: SVG, SVGMeasurements */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SVG", function() { return SVG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SVGMeasurements", function() { return SVGMeasurements; });
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ramda */ "./node_modules/ramda/es/index.js");

/**
 * Created by hen on 5/15/17.
 * Modified by hoo on 4/16/19.
 */
class SVG {
    static translate(x, y) {
        return `translate(${x},${y})`;
    }
    static rotate(deg, orig) {
        if (orig == null)
            return `rotate(${deg})`;
        return `rotate(${deg},${orig.x},${orig.y})`;
    }
    static skew(degx, degy = 0) {
        return `skew(${degx}, ${degy})`;
    }
    static skewX(deg) {
        return `skewX(${deg})`;
    }
    static skewY(deg) {
        return `skewY(${deg})`;
    }
    static scale(x, y) {
        const yscale = y != null ? y : x;
        return `scale(${x}, ${yscale})`;
    }
    static group(parent, classes, pos = { x: 0, y: 0 }) {
        return parent.append('g')
            .attr('class', classes)
            .attr("transform", SVG.translate(pos.x, pos.y));
    }
    static addSVG(parent, width, height, margin) {
        var svg = parent.append("svg")
            .attr("width", "100%")
            .attr("height", "100%")
            .attr("viewBox", "0 0 " + (width + margin.left + margin.right) + " " + (height + margin.top + margin.bottom))
            .attr("preserveAspectRatio", "xMidYMid meet")
            .append("g")
            .attr("transform", SVG.translate(margin.left, margin.top));
        return svg;
    }
    static addArrows(parent) {
        parent.append('defs')
            .append('marker')
            .attr("id", "arrow")
            .attr("markerUnits", "strokeWidth")
            .attr("markerWidth", 9)
            .attr("markerHeight", 9)
            .attr("viewBox", "0 0 12 12")
            .attr("refX", 6)
            .attr("refY", 6)
            .attr("orient", 'auto')
            .append('path')
            .attr('d', "M2,2 L10,6 L2,10 L6,6 L2,2")
            .style("fill: #f00");
    }
    static insertArrow(parent, x1, y1, x2, y2, color, width) {
        return parent.append("line")
            .attr("x1", x1)
            .attr("y1", y1)
            .attr("x2", x2)
            .attr("y2", y2)
            .attr("stroke", color)
            .attr("stroke-width", width)
            .attr("marker-end", "url(#arrow)");
    }
    static meshgrid(nx, ny, xrange, yrange) {
        const scale = (vals, range) => vals.map(v => (v * (range[1] - range[0])) + range[0]);
        const pointify = (xvals, yvals) => {
            const out = [];
            xvals.forEach(x => {
                yvals.forEach(y => {
                    out.push({ x: x, y: y });
                });
            });
            return out;
        };
        const xvals = scale(ramda__WEBPACK_IMPORTED_MODULE_0__["range"](0, nx).map(x => (x + 0.5) / nx), xrange);
        const yvals = scale(ramda__WEBPACK_IMPORTED_MODULE_0__["range"](0, ny).map(y => (y + 0.5) / ny), yrange);
        return pointify(xvals, yvals);
    }
}
class SVGMeasurements {
    constructor(baseElement, classes = '') {
        this.measureElement = baseElement.append('text')
            .attr('x', 0)
            .attr('y', -20)
            .attr('class', classes);
    }
    textLength(text, style = null) {
        this.measureElement.attr('style', style);
        this.measureElement.text(text);
        const tl = this.measureElement.node().getComputedTextLength();
        this.measureElement.text('');
        return tl;
    }
}


/***/ }),

/***/ "./src/ts/util/SimpleEventHandler.ts":
/*!*******************************************!*\
  !*** ./src/ts/util/SimpleEventHandler.ts ***!
  \*******************************************/
/*! exports provided: SimpleEventHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimpleEventHandler", function() { return SimpleEventHandler; });
/**
 * Created by hen on 5/15/17.
 * Modified by hoo on 4/16/19.
 */
class SimpleEventHandler {
    constructor(element) {
        this.element = element;
        this.eventListeners = [];
    }
    bind(eventNames, eventFunction) {
        for (const eventName of eventNames.split(' ')) {
            this.eventListeners.push({ eventName, eventFunction });
            const eventFunctionWrap = e => eventFunction(e.detail, e);
            this.element.addEventListener(eventName, eventFunctionWrap, false);
        }
    }
    getListeners() {
        return this.eventListeners;
    }
    trigger(eventName, detail) {
        this.element.dispatchEvent(new CustomEvent(eventName, { detail }));
    }
}


/***/ }),

/***/ "./src/ts/util/VisComponent.ts":
/*!*************************************!*\
  !*** ./src/ts/util/VisComponent.ts ***!
  \*************************************/
/*! exports provided: VisComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisComponent", function() { return VisComponent; });
/* harmony import */ var _SimpleEventHandler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SimpleEventHandler */ "./src/ts/util/SimpleEventHandler.ts");

/**
 * Should have VComponentHTML and VComponentSVG
 *
 * Common Properties:
 * - events
 * - eventHandler (V important)
 * - options (Maintains public state. Can expose these with get/set functions with auto update)
 * - _current (Maintains private state)
 * - cssName (synced with corresponding CSS file)
 * - parent (HTML is div containing the base, SVG is SVG element)
 * - base (HTML is div with css_name established)
 * - _data (Data used to create and render the component)
 * - _renderData (Data needed to display. This may not be needed, but is currently used in histogram) * * Common Methods:
 * - constructor
 * - _render()      Consider replacing with `_updateData()` that updates all data at once
 * - update()       Consider replacing this with `data()` that auto updates data
 * - redraw()
 * - destroy()
 */
class VisComponent {
    /**
     * @param {D3Sel} d3parent  D3 selection of parent SVG DOM Element
     * @param {SimpleEventHandler} eventHandler a global event handler object or 'null' for local event handler
     */
    constructor(d3parent, eventHandler, ID = 0) {
        this.parent = d3parent;
        this.eventHandler = eventHandler || new _SimpleEventHandler__WEBPACK_IMPORTED_MODULE_0__["SimpleEventHandler"](this.parent.node());
        this.ID = ID;
    }
    /**
     * Given an ID, create a new instance of this class with the events and css_name modified by the id
     */
    newInstance(id) { }
    /**
     * The static property that contains all class related events.
     * Should be overwritten and event strings have to be unique!!
     */
    get events() {
        const event = (eventName) => `${this.baseName}_${eventName}`;
        return {
            noEvent: event('NoEvent')
        };
    }
    get baseName() {
        return `${this.cssname}_ID${this.ID}`;
    }
    /**
     * Set many options at once
     *
     * @param options Reset options to passed values
     */
    updateOptions(options) {
        Object.keys(options).forEach(k => this.options[k] = options[k]);
    }
    destroy() {
        this.base.remove();
    }
}


/***/ }),

/***/ "./src/ts/util/xd3.ts":
/*!****************************!*\
  !*** ./src/ts/util/xd3.ts ***!
  \****************************/
/*! exports provided: linspace */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "linspace", function() { return linspace; });
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3 */ "./node_modules/d3/index.js");

const linspace = (start, end, n) => {
    const delta = (end - start) / (n - 1);
    return d3__WEBPACK_IMPORTED_MODULE_0__["range"](start, end + delta, delta).slice(0, n);
};
d3__WEBPACK_IMPORTED_MODULE_0__["selection"].prototype.clear = function () {
    this.selectAll('*').remove();
    return this;
};
d3__WEBPACK_IMPORTED_MODULE_0__["selection"].prototype.toggleClass = function (className) {
    this.classed(className, !this.classed(className));
    return this;
};
d3__WEBPACK_IMPORTED_MODULE_0__["selection"].prototype.show = function () {
    this.style('display', 'initial');
    return this;
};
d3__WEBPACK_IMPORTED_MODULE_0__["selection"].prototype.hide = function () {
    this.style('display', 'none');
    return this;
};
d3__WEBPACK_IMPORTED_MODULE_0__["selection"].prototype.toggle = function () {
    var isHidden = this.style('display') == 'none';
    return this.style('display', isHidden ? 'inherit' : 'none');
};
d3__WEBPACK_IMPORTED_MODULE_0__["selection"].prototype.after = function (tagName) {
    var elements = [];
    this.each(function () {
        var element = document.createElement(tagName);
        this.parentNode.insertBefore(element, this.nextSibling);
        elements.push(element);
    });
    return d3__WEBPACK_IMPORTED_MODULE_0__["selectAll"](elements);
};
d3__WEBPACK_IMPORTED_MODULE_0__["selection"].prototype.before = function (tagName) {
    var elements = [];
    this.each(function () {
        var element = document.createElement(tagName);
        this.parentNode.insertBefore(element, this);
        elements.push(element);
    });
    return d3__WEBPACK_IMPORTED_MODULE_0__["selectAll"](elements);
};


/***/ }),

/***/ "./src/ts/vis/ContourPlot.ts":
/*!***********************************!*\
  !*** ./src/ts/vis/ContourPlot.ts ***!
  \***********************************/
/*! exports provided: ContourPlot */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContourPlot", function() { return ContourPlot; });
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3 */ "./node_modules/d3/index.js");
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ramda */ "./node_modules/ramda/es/index.js");
/* harmony import */ var _util_SVGVisComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/SVGVisComponent */ "./src/ts/util/SVGVisComponent.ts");
/* harmony import */ var _util_SVGplus__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/SVGplus */ "./src/ts/util/SVGplus.ts");
/* harmony import */ var _plotting__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../plotting */ "./src/ts/plotting.ts");
/* harmony import */ var _Updater__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Updater */ "./src/ts/Updater.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");








class ContourPlot extends _util_SVGVisComponent__WEBPACK_IMPORTED_MODULE_2__["SVGVisComponent"] {
    constructor(d3parent, eventHandler, options = {}) {
        super(d3parent, eventHandler, options);
        this.cssname = "simple-graph";
        this.options = {
            maxWidth: 450,
            maxHeight: 500,
            margin: { top: 50, right: 75, bottom: 125, left: 50 },
            pad: 30,
            xrange: [0, 2.5],
            yrange: [0, 2.5],
            n: 500,
            m: 500,
        }; // #state
        this.scales = {};
        this.sels = {};
        // Other
        this._curr = { x: 0.1, y: 0.2 }; // #state
        // Specify the grid for the contours
        this.ideal = 1; // #state
        super.initSVG(this.options);
        this.base.classed(this.cssname, true);
        this.updater = new _Updater__WEBPACK_IMPORTED_MODULE_5__["Updater"]();
        this.initPlot();
    }
    setUpdater(name) {
        const args = [this.q(), this.eta()];
        if (name == 'block') {
            this.updater = new _Updater__WEBPACK_IMPORTED_MODULE_5__["BlockUpdater"](this.q(), this.eta());
        }
        else if (name == 'full') {
            this.updater = new _Updater__WEBPACK_IMPORTED_MODULE_5__["Updater"](this.q(), this.eta());
        }
        else {
            console.log("Please enter a valid input as updater");
        }
        this.updateQuivers();
    }
    plotMinimum() {
        const self = this;
        const op = this.options;
        const scales = this.scales;
        const makeX = (nx) => ramda__WEBPACK_IMPORTED_MODULE_1__["range"](0, nx).map(d3__WEBPACK_IMPORTED_MODULE_0__["scaleLinear"]().domain([0, nx]).range([0.00001, op.xrange[1]]));
        const yFunc = x => 1 / x;
        const xvals = makeX(100);
        const yvals = xvals.map(yFunc); //.map(y => scales.y(y))
        const data = ramda__WEBPACK_IMPORTED_MODULE_1__["zip"](xvals.map(scales.x), yvals.map(scales.y));
        const lineGen = d3__WEBPACK_IMPORTED_MODULE_0__["line"]();
        const pathData = lineGen(data);
        const minimumGroup = this.base.append('g').attr('id', 'minimum-group');
        console.log("Path data: ", pathData);
        minimumGroup.append('path')
            .attr('d', lineGen(data))
            .classed('minimum', true)
            .style('stroke-width', 2.5)
            .style('stroke', 'blue')
            .style('fill', null);
    }
    plotContours() {
        const self = this;
        const op = this.options;
        const scales = this.scales;
        const contourFunc = (x, y) => this.updater.absErr({ x: x, y: y });
        const vals = Object(_plotting__WEBPACK_IMPORTED_MODULE_4__["getContourValues"])(op.n, op.m, op.xrange, op.yrange, contourFunc);
        let thresholds = d3__WEBPACK_IMPORTED_MODULE_0__["range"](d3__WEBPACK_IMPORTED_MODULE_0__["min"](vals), d3__WEBPACK_IMPORTED_MODULE_0__["max"](vals), 0.25);
        // Because the minimum value is not a contour but a value, we need to do what we can to approach the min.
        const weighted = 0.91;
        const newMin = (weighted * thresholds[0] + (1 - weighted) * thresholds[1]) / 2;
        thresholds = ramda__WEBPACK_IMPORTED_MODULE_1__["insert"](1, newMin, thresholds);
        // const newMin = 0;
        scales.color = d3__WEBPACK_IMPORTED_MODULE_0__["scaleLog"]().interpolate(() => d3__WEBPACK_IMPORTED_MODULE_0__["interpolateYlGnBu"]);
        scales.contours.thresholds(thresholds);
        const contourVals = scales.contours(vals);
        const contourGroup = this.base.append('g').attr('id', 'contour-group');
        const contours = contourGroup.selectAll("path.contour")
            .data(contourVals);
        contours.join("path")
            .attr("class", "contour")
            .attr("d", d3__WEBPACK_IMPORTED_MODULE_0__["geoPath"](d3__WEBPACK_IMPORTED_MODULE_0__["geoIdentity"]().scale(op.width / op.n)))
            .attr("fill", d => {
            return scales.color(d.value);
        })
            .classed('main-fit', d => {
            return d.value == newMin;
        })
            .classed('not-fit', d => {
            return d.value != newMin;
        });
    }
    addCircle(v, prev = null) {
        const self = this;
        const scales = this.scales;
        const sels = this.sels;
        if (prev != null) {
            this.base.append('line')
                .attr('x1', scales.x(prev.x))
                .attr('y1', scales.y(prev.y))
                .attr('x2', scales.x(v.x))
                .attr('y2', scales.y(v.y))
                .classed('descending-line', true);
        }
        sels.circle = this.base.append('circle')
            .attr('cx', scales.x(v.x))
            .attr('cy', scales.y(v.y))
            .attr('r', 2)
            .classed('descending-point', true);
        return v;
    }
    clearCircles() {
        d3__WEBPACK_IMPORTED_MODULE_0__["selectAll"]('.descending-point').remove();
        d3__WEBPACK_IMPORTED_MODULE_0__["selectAll"]('.descending-line').remove();
    }
    clearQuivers() {
        d3__WEBPACK_IMPORTED_MODULE_0__["selectAll"]('.quiver').remove();
        this.sels.arrows = [];
    }
    plotDescent() {
        const self = this;
        let prevVal = null;
        const subObj = {
            next: (val) => {
                this.addCircle(val, prevVal);
                prevVal = val;
            },
            err: (err) => console.log(err),
            complete: () => console.log("COMPLETE")
        };
        const prep = () => {
            this.addCircle(this.curr());
            prevVal = this.curr();
        };
        this.ticker = Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["interval"])(20).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["startWith"])(prep()), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["scan"])(v => self.updater.next(v), self.curr()), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["take"])(1000)).subscribe(subObj);
    }
    intoVis(v) {
        return { x: this.scales.x(v.x), y: this.scales.y(v.y) };
    }
    intoMath(v) {
        return { x: this.scales.x.invert(v.x), y: this.scales.y.invert(v.y) };
    }
    updateQuivers() {
        const self = this;
        const sels = this.sels;
        const scales = this.scales;
        // Modify arrows inplace
        sels.arrows.forEach(arrow => {
            const pt = this.intoMath({
                x: +arrow.attr('x1'),
                y: +arrow.attr('y1')
            });
            const pt2 = self.updater.nextLr(pt);
            arrow.attr('x2', scales.x(pt2.x))
                .attr('y2', scales.y(pt2.y));
        });
    }
    createQuivers() {
        const self = this;
        const op = this.options;
        const scales = this.scales;
        const sels = this.sels;
        const nx = 8, ny = 8;
        const points = _util_SVGplus__WEBPACK_IMPORTED_MODULE_3__["SVG"].meshgrid(nx, ny, op.xrange, op.yrange);
        const color = "red";
        const width = 2;
        const quiverGroup = this.base.append('g').attr('id', 'quiver-group'); // init should have these groups already selected
        this.clearQuivers();
        sels.arrows = points.map(pt => {
            const pt2 = self.updater.nextLr(pt);
            const arrow = _util_SVGplus__WEBPACK_IMPORTED_MODULE_3__["SVG"].insertArrow(quiverGroup, scales.x(pt.x), scales.y(pt.y), scales.x(pt2.x), scales.y(pt2.y), color, width);
            arrow.classed('quiver', true);
            return arrow;
        });
    }
    initPlot() {
        // Initialize plots
        this.plotContours();
        this.createQuivers();
    }
    init() {
        const self = this;
        const op = this.options;
        const scales = this.scales;
        const sels = this.sels;
        // Add definitions
        _util_SVGplus__WEBPACK_IMPORTED_MODULE_3__["SVG"].addArrows(this.svg);
        // Create scales
        scales.contours = d3__WEBPACK_IMPORTED_MODULE_0__["contours"]().size([op.n, op.m]);
        scales.curve = d3__WEBPACK_IMPORTED_MODULE_0__["curveCatmullRom"].alpha(0.5);
        scales.x = d3__WEBPACK_IMPORTED_MODULE_0__["scaleLinear"]().domain(op.xrange).range([0, op.width]);
        scales.y = d3__WEBPACK_IMPORTED_MODULE_0__["scaleLinear"]().domain(op.yrange).range([op.height, 0]);
        // Add Axes and labels
        sels.xaxis = this.base.append("g")
            .attr("class", "axis axis--x")
            .attr("transform", _util_SVGplus__WEBPACK_IMPORTED_MODULE_3__["SVG"].translate(0, op.height))
            .call(d3__WEBPACK_IMPORTED_MODULE_0__["axisBottom"](scales.x).ticks(3, "s"));
        sels.yaxis = this.base.append("g")
            .attr("class", "axis axis--y")
            .attr("transform", _util_SVGplus__WEBPACK_IMPORTED_MODULE_3__["SVG"].translate(0, 0))
            .call(d3__WEBPACK_IMPORTED_MODULE_0__["axisLeft"](scales.y).ticks(3, "s"));
        sels.xlabel = this.base.append("text")
            .text("w0")
            .attr("class", "titles")
            .attr("transform", _util_SVGplus__WEBPACK_IMPORTED_MODULE_3__["SVG"].translate(op.width / 2, op.height + op.pad));
        sels.ylabel = this.base.append("text")
            .text("w1")
            .attr("class", "titles")
            .attr("transform", _util_SVGplus__WEBPACK_IMPORTED_MODULE_3__["SVG"].translate(-op.pad, op.height / 2) + _util_SVGplus__WEBPACK_IMPORTED_MODULE_3__["SVG"].rotate(-90));
        // Create click behavior
        this.base.on('click', function () {
            if (self.ticker != undefined) {
                self.ticker.unsubscribe();
            }
            const coords = d3__WEBPACK_IMPORTED_MODULE_0__["mouse"](this);
            self.curr({ x: scales.x.invert(coords[0]), y: scales.y.invert(coords[1]) });
            self.addCircle(self.curr());
            self.clearCircles();
            self.plotDescent();
        });
    }
    curr(val) {
        if (val == null) {
            return this._curr;
        }
        this._curr = val;
        return this;
    }
    data(val) {
        if (val == null)
            return this._data;
        this._data = val;
        return this;
    }
    q(val) {
        if (val == null) {
            return this.updater.q;
        }
        this.updater.q = val;
        this.updateQuivers();
        return this;
    }
    eta(val) {
        if (val == null) {
            return this.updater.eta;
        }
        this.updater.eta = val;
        this.updateQuivers();
        return this;
    }
}


/***/ }),

/***/ "./src/ts/vis/GolfBall.ts":
/*!********************************!*\
  !*** ./src/ts/vis/GolfBall.ts ***!
  \********************************/
/*! exports provided: GolfBall */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GolfBall", function() { return GolfBall; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");

class GolfBall {
    constructor(updater, classname, x = 0) {
        this.updater = updater;
        this._x = x;
        this.classname = classname;
        this.stream = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
    }
    get x() {
        return this._x;
    }
    set x(v) {
        this._x = v;
    }
    nextX() {
        return this.updater.next(this._x);
    }
    next() {
        const nextX = this.nextX();
        return new GolfBall(this.updater, this.classname, this.nextX());
    }
    /**
     * Use the updater to take the next step
     *
     * @param forceX Force the nextX to be of this value
     */
    step_(forceX = null) {
        if (forceX != null)
            this.x = forceX;
        else
            this.x = this.nextX();
        this.stream.next({
            classname: this.classname,
            x: this.x,
            loss: this.updater.loss(this.x)
        });
        return this;
    }
    toVec(f) {
        return {
            x: this._x,
            y: f(this._x)
        };
    }
    q(val) {
        if (val == null)
            return this.updater.q;
        this.updater.q = val;
        return this;
    }
    eta(val) {
        if (val == null)
            return this.updater.eta;
        this.updater.eta = val;
        return this;
    }
}


/***/ }),

/***/ "./src/ts/vis/GolfHole1D.ts":
/*!**********************************!*\
  !*** ./src/ts/vis/GolfHole1D.ts ***!
  \**********************************/
/*! exports provided: GolfHole1D */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GolfHole1D", function() { return GolfHole1D; });
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3 */ "./node_modules/d3/index.js");
/* harmony import */ var _util_xd3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/xd3 */ "./src/ts/util/xd3.ts");
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ramda */ "./node_modules/ramda/es/index.js");
/* harmony import */ var _util_SVGVisComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/SVGVisComponent */ "./src/ts/util/SVGVisComponent.ts");
/* harmony import */ var _util_SVGplus__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util/SVGplus */ "./src/ts/util/SVGplus.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _ManualUpdater__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ManualUpdater */ "./src/ts/vis/ManualUpdater.ts");
/* harmony import */ var _GolfBall__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./GolfBall */ "./src/ts/vis/GolfBall.ts");
/* harmony import */ var _GolfLandscapes__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../GolfLandscapes */ "./src/ts/GolfLandscapes.ts");










// // Note that plotFunc is the loss function we plot and func is the component of the loss function needed for the updater
// // export const func = x => Math.tanh(x)
// // export const dFunc = x => Math.pow(Math.cosh(x), -2)
// export const func = x => Math.tanh(x - 11) / 4 + Math.tanh(x - 6) / 4 + Math.tanh(x) + Math.tanh(x + 6) / 4 + Math.tanh(x + 11) / 4
// export const dFunc = x => Math.pow(Math.cosh(x - 11), -2) / 4 + Math.pow(Math.cosh(x - 6), -2) / 4 + Math.pow(Math.cosh(x), -2) + Math.pow(Math.cosh(x + 6), -2) / 4 + Math.pow(Math.cosh(x + 11), -2) / 4
// // export const func = x => Math.sign(x) * (1 - (1 / (1 + Math.abs(x))))
// // export const dFunc = x => 1 / Math.pow(1 + Math.abs(x), 2)
// export const plotFunc = x => baseLoss(func(x))
class GolfHole1D extends _util_SVGVisComponent__WEBPACK_IMPORTED_MODULE_3__["SVGVisComponent"] {
    constructor(d3parent, eventHandler, options = {}) {
        super(d3parent, eventHandler, options);
        this.cssname = "golf-hole-chart";
        this.options = {
            maxWidth: 400,
            maxHeight: 200,
            margin: { top: 10, right: 10, bottom: 40, left: 50 },
            pad: 30,
            maxIter: 600,
            landscape: _GolfLandscapes__WEBPACK_IMPORTED_MODULE_9__["landscapes"].hole
        };
        this.scales = {};
        this.sels = {};
        super.initSVG(options, ["bg"]);
        this.base.classed(this.cssname, true);
        this.init();
        // const data = [
        //     new GolfBall(new ManualUpdater(func, dFunc, 0, 0.5), 'golf-ball-sgd', 4),
        //     new GolfBall(new ManualUpdater(func, dFunc, 0.5, 0.07), 'golf-ball-sngd', 3),
        //     new GolfBall(new ManualUpdater(func, dFunc, 1, 0.01), 'golf-ball-ngd', 5)
        // ]
        const z = this.options.landscape;
        const data = [
            new _GolfBall__WEBPACK_IMPORTED_MODULE_8__["GolfBall"](new _ManualUpdater__WEBPACK_IMPORTED_MODULE_7__["ManualUpdater"](z.f, z.df, 0, 0.9), 'golf-ball-sgd', 4),
            new _GolfBall__WEBPACK_IMPORTED_MODULE_8__["GolfBall"](new _ManualUpdater__WEBPACK_IMPORTED_MODULE_7__["ManualUpdater"](z.f, z.df, 0.5, 0.1), 'golf-ball-sngd', 3),
            new _GolfBall__WEBPACK_IMPORTED_MODULE_8__["GolfBall"](new _ManualUpdater__WEBPACK_IMPORTED_MODULE_7__["ManualUpdater"](z.f, z.df, 1, 0.003), 'golf-ball-ngd', 5)
        ];
        this.data(data);
        this.initBalls();
    }
    landscape(val) {
        if (val == null)
            return this.options.landscape;
        const op = this.options;
        op.landscape = val;
        // Update xrange and yrange
        this.updateScales(op);
        this.updateAxes(this.scales, op);
        // Update data
        this.data().forEach(b => {
            b.updater.f = val.f;
            b.updater.df = val.df;
        });
        const xs = Object(_util_xd3__WEBPACK_IMPORTED_MODULE_1__["linspace"])(op.landscape.xrange[0], op.landscape.xrange[1], 1000);
        this.clearCurve();
        this.plotCurve(xs);
        return this;
    }
    /** Return first updater in data */
    get dataHead() {
        try {
            return this.data()[0];
        }
        catch (err) {
            console.log("Looks like there is no data in this golf hole");
            console.log(err);
        }
    }
    /**
     * Put a vector into the coordinate system used by the visualization
     *
     * @param v Vector
     */
    intoVis(v) {
        return { x: this.scales.x(v.x), y: this.scales.y(v.y) };
    }
    // Take a vector in the coordinate system and return it to the math coordinates
    intoMath(v) {
        return { x: this.scales.x.invert(v.x), y: this.scales.y.invert(v.y) };
    }
    // Turn a number into a vector
    num2vec(x) {
        const op = this.options;
        return { x: x, y: op.landscape.loss(x) };
    }
    // Turn a ball into a vector in the visualization coordinate system
    ball2vis(b) {
        return this.intoVis(b.toVec(Object(_GolfLandscapes__WEBPACK_IMPORTED_MODULE_9__["getPlotFunc"])(this.options.landscape)));
    }
    // Plot a ball on the chart
    plotBall(b) {
        const self = this;
        const toClass = name => '.' + name;
        const clsSel = toClass(b.classname);
        const ball = this.ball2vis(b);
        self.sels.ball = self.base.selectAll(clsSel)
            .data([ball])
            .join('circle')
            .classed('golf-ball', true)
            .classed(b.classname, true)
            .attr("cx", d => d.x)
            .attr("cy", d => d.y)
            .attr("r", "5px");
    }
    clearCurve() {
        this.layers.bg.selectAll('.line').remove();
    }
    /**
     * Plot the values of all x according to the function
     *
     * @param x A linspace of x values over which to plot a curve
     */
    plotCurve(x) {
        const self = this, scales = this.scales, sels = this.sels;
        scales.paths.forEach(line => {
            this.layers.bg.append("path")
                .datum(x)
                .attr("class", "line")
                .attr("d", d => {
                return line(d);
            });
        });
    }
    updateScales(op) {
        const scales = this.scales;
        scales.x = d3__WEBPACK_IMPORTED_MODULE_0__["scaleLinear"]().domain(op.landscape.xrange).range([0, op.width]);
        scales.y = d3__WEBPACK_IMPORTED_MODULE_0__["scaleLinear"]().domain(op.landscape.yrange).range([op.height, 0]);
    }
    updateAxes(scales, op) {
        const sels = this.sels;
        sels.xaxis.call(d3__WEBPACK_IMPORTED_MODULE_0__["axisBottom"](scales.x).tickValues([0]).tickFormat(x => '0'));
    }
    init() {
        const self = this;
        const op = this.options;
        const scales = this.scales;
        const sels = this.sels;
        this.updateScales(op);
        sels.xaxis = this.base.append("g")
            .attr("class", "axis axis--x")
            .attr("transform", _util_SVGplus__WEBPACK_IMPORTED_MODULE_4__["SVG"].translate(0, op.height));
        sels.xlabel = this.base.append("text")
            .text("\u03B8 - \u03B8*")
            .attr("class", "titles")
            .attr("transform", _util_SVGplus__WEBPACK_IMPORTED_MODULE_4__["SVG"].translate(op.width / 2, op.height + op.pad));
        this.updateAxes(scales, op);
        const baseLine = d3__WEBPACK_IMPORTED_MODULE_0__["line"]()
            .x((d, i) => scales.x(d))
            .y((d, i) => scales.y(Object(_GolfLandscapes__WEBPACK_IMPORTED_MODULE_9__["getPlotFunc"])(op.landscape)(d)))
            .curve(d3__WEBPACK_IMPORTED_MODULE_0__["curveLinear"]);
        scales.paths = [baseLine];
        const xs = Object(_util_xd3__WEBPACK_IMPORTED_MODULE_1__["linspace"])(op.landscape.xrange[0], op.landscape.xrange[1], 1000);
        this.plotCurve(xs);
    }
    initBalls() {
        const self = this, op = this.options;
        // Create Backdrop for mouse interfaces
        this.sels.backdrop = this.base.append("g")
            .attr("id", "backdrop")
            .classed('grass', true)
            .append("rect")
            .attr("height", op.height)
            .attr("width", op.width);
        const tooSmall = (x) => x < (op.landscape.xrange[0]);
        const tooBig = (x) => x > (op.landscape.xrange[1]);
        const outOfBounds = (x) => {
            return (isNaN(x) || tooSmall(x) || tooBig(x));
        };
        const fixOutOfBounds = (x) => {
            let out;
            if (isNaN(x))
                out = op.landscape.xrange[0];
            else if (tooSmall(x))
                out = op.landscape.xrange[0];
            else if (tooBig(x))
                out = op.landscape.xrange[1];
            else
                out = x;
            return out;
        };
        function getNextBall(b) {
            const nextX = b.nextX();
            const currBallSel = self.base.select(`.${b.classname}`);
            const forceX = fixOutOfBounds(nextX);
            if (!currBallSel.classed('dead-ball')) {
                return b.step_(forceX);
            }
            return b;
        }
        const subObj = {
            next: gbs => {
                gbs.forEach(b => self.plotBall(b));
            },
            error: b => console.log("ERROR: ", b),
            complete: () => console.log("COMPLETE"),
        };
        const ticker = () => Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["interval"])(10).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["scan"])((acc) => {
            // Unsubscriber ticker if all balls dead
            if (ramda__WEBPACK_IMPORTED_MODULE_2__["all"]((b) => d3__WEBPACK_IMPORTED_MODULE_0__["select"](`.${b.classname}`).classed('dead-ball'), self.data())) {
                runningTicker.unsubscribe();
            }
            self.data().forEach(b => getNextBall(b));
            return self.data();
        }, self.data()), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["take"])(op.maxIter)).subscribe(subObj);
        // Running ticker starts as an empty subscription object, is later replaced by the running ticker
        let runningTicker = {
            unsubscribe: () => console.log("Empty Ticker!")
        };
        this.sels.backdrop.on('click', function () {
            runningTicker.unsubscribe();
            console.log("Unsubscribing ticker");
            const click = toVec(d3__WEBPACK_IMPORTED_MODULE_0__["mouse"](this));
            d3__WEBPACK_IMPORTED_MODULE_0__["selectAll"]('.golf-ball').classed('dead-ball', false);
            self.data().forEach((b, i) => b.x = self.intoMath(click).x);
            self.data().forEach(b => self.plotBall(b));
            self.eventHandler.trigger("loss-click", {});
            runningTicker = ticker();
        });
    }
    data(val) {
        if (val == null)
            return this._data;
        this._data = val;
        return this;
    }
}
function toVec([x, y]) {
    return { x: x, y: y };
}


/***/ }),

/***/ "./src/ts/vis/GolfLosses.ts":
/*!**********************************!*\
  !*** ./src/ts/vis/GolfLosses.ts ***!
  \**********************************/
/*! exports provided: GolfLosses */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GolfLosses", function() { return GolfLosses; });
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3 */ "./node_modules/d3/index.js");
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ramda */ "./node_modules/ramda/es/index.js");
/* harmony import */ var _util_Chart2dVisComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/Chart2dVisComponent */ "./src/ts/util/Chart2dVisComponent.ts");
/* harmony import */ var _util_SVGplus__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/SVGplus */ "./src/ts/util/SVGplus.ts");




const axisOffset = 1; // Use this to cover the plotted lines
class GolfLosses extends _util_Chart2dVisComponent__WEBPACK_IMPORTED_MODULE_2__["Chart2D"] {
    constructor(d3parent, eventHandler, options = {}) {
        super(d3parent, eventHandler, options);
        this.cssname = "line-plot";
        this.options = {
            maxWidth: 350,
            maxHeight: 250,
            margin: { top: 10, right: 10, bottom: 30, left: 30 },
            pad: { top: 5, right: 1, bottom: 10, left: 15 },
            xrange: [0, 600],
            yrange: [2, 1e-2],
        };
        this.scales = {};
        this.sels = {};
        super.initSVG(this.options, ["bg"]);
        this.base.classed(this.cssname, true);
        this.data({});
    }
    /**
     * Plot the values of all x according to the function
     *
     * @param x A linspace of x values over which to plot a curve
     */
    addDataKey_(classname) {
        const self = this;
        if (!ramda__WEBPACK_IMPORTED_MODULE_1__["has"](classname, this.data())) {
            console.log(`Adding key: ${classname}`);
            this.data()[classname] = {
                sel: self.initBaseLine(classname),
                vals: []
            };
        }
    }
    // Live update the xrange
    updateScales(xrange) {
        const op = this.options;
        this.scales.x = d3__WEBPACK_IMPORTED_MODULE_0__["scaleLinear"]().domain(xrange).range([0, op.width]).clamp(true);
    }
    clearPaths() {
        this.data(ramda__WEBPACK_IMPORTED_MODULE_1__["map"](d => ramda__WEBPACK_IMPORTED_MODULE_1__["assoc"]('vals', [], d), this.data()));
    }
    plotPath(d) {
        const self = this;
        this.addDataKey_(d.classname);
        const currVals = this.data()[d.classname];
        currVals.vals.push(d.loss);
        // sliding x-axis
        const newXrange = [Math.max(0, currVals.vals.length - this.options.xrange[1]), Math.max(currVals.vals.length, this.options.xrange[1])];
        // const newXrange = [0, currVals.vals.length]
        this.updateScales(newXrange);
        this.createPath();
        currVals.sel.data([currVals])
            .join("path")
            .classed(d.classname, true)
            .attr("d", d => {
            return self.path(d.vals);
        });
    }
    initBaseLine(classname) {
        return this.layers.bg.append("path")
            .classed(classname, true)
            .classed('line', true);
    }
    init() {
        const self = this;
        const op = this.options;
        const scales = this.scales;
        const sels = this.sels;
        this.createScales();
        this.createPath();
        this.createAxes();
    }
    createScales() {
        const scales = this.scales;
        const op = this.options;
        scales.x = d3__WEBPACK_IMPORTED_MODULE_0__["scaleLinear"]().domain(op.xrange).range([0, op.width]).clamp(true);
        scales.y = d3__WEBPACK_IMPORTED_MODULE_0__["scaleLog"]().domain(op.yrange).range([0, op.height]).clamp(true);
    }
    createAxes() {
        const sels = this.sels;
        const scales = this.scales;
        const op = this.options;
        // Create axes
        sels.yaxis = this.base.append("g")
            .attr("class", "axis axis--y")
            .attr("transform", _util_SVGplus__WEBPACK_IMPORTED_MODULE_3__["SVG"].translate(0, -axisOffset))
            // @ts-ignore
            .call(d3__WEBPACK_IMPORTED_MODULE_0__["axisLeft"](scales.y).tickFormat("").ticks(4));
        sels.xaxis = this.base.append("g")
            .attr("class", "axis axis--x")
            .attr("transform", _util_SVGplus__WEBPACK_IMPORTED_MODULE_3__["SVG"].translate(0, op.height - axisOffset))
            // @ts-ignore
            .call(d3__WEBPACK_IMPORTED_MODULE_0__["axisBottom"](scales.x).tickFormat("").ticks(4));
        // Add xlabel
        this.base.append("text")
            .attr("transform", _util_SVGplus__WEBPACK_IMPORTED_MODULE_3__["SVG"].translate(op.width / 2, op.margin.top + op.height + 10))
            .style("text-anchor", "middle")
            .text("Time");
        // Add ylabel
        this.base.append("text")
            .style("text-anchor", "middle")
            .text("Loss")
            .attr("y", op.pad.left - op.margin.left)
            .attr("x", op.pad.top - (op.height / 2))
            .attr("transform", _util_SVGplus__WEBPACK_IMPORTED_MODULE_3__["SVG"].rotate(-90));
        // .attr("transform", SVG.translate(op.margin.left, op.height/2))
    }
    createPath() {
        this.path = d3__WEBPACK_IMPORTED_MODULE_0__["line"]()
            .x((d, i) => this.scales.x(i))
            .y((d, i) => this.scales.y(d))
            .curve(d3__WEBPACK_IMPORTED_MODULE_0__["curveLinear"]);
    }
    data(val) {
        if (val == null)
            return this._data;
        this._data = val;
        return this;
    }
}


/***/ }),

/***/ "./src/ts/vis/GolfXDist.ts":
/*!*********************************!*\
  !*** ./src/ts/vis/GolfXDist.ts ***!
  \*********************************/
/*! exports provided: GolfXDist */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GolfXDist", function() { return GolfXDist; });
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3 */ "./node_modules/d3/index.js");
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ramda */ "./node_modules/ramda/es/index.js");
/* harmony import */ var _util_Chart2dVisComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/Chart2dVisComponent */ "./src/ts/util/Chart2dVisComponent.ts");
/* harmony import */ var _util_SVGplus__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/SVGplus */ "./src/ts/util/SVGplus.ts");




const axisOffset = 1; // Use this to cover the plotted lines
class GolfXDist extends _util_Chart2dVisComponent__WEBPACK_IMPORTED_MODULE_2__["Chart2D"] {
    constructor(d3parent, eventHandler, options = {}) {
        super(d3parent, eventHandler, options);
        this.cssname = "line-plot";
        this.options = {
            maxWidth: 350,
            maxHeight: 250,
            margin: { top: 10, right: 10, bottom: 30, left: 30 },
            pad: { top: 5, right: 1, bottom: 10, left: 15 },
            xrange: [0, 600],
            yrange: [15, 0],
        };
        this.scales = {};
        this.sels = {};
        super.initSVG(this.options, ["bg"]);
        this.base.classed(this.cssname, true);
        this.data({});
    }
    /**
     * Plot the values of all x according to the function
     *
     * @param x A linspace of x values over which to plot a curve
     */
    addDataKey_(classname) {
        const self = this;
        if (!ramda__WEBPACK_IMPORTED_MODULE_1__["has"](classname, this.data())) {
            console.log(`Adding key: ${classname}`);
            this.data()[classname] = {
                sel: self.initBaseLine(classname),
                vals: []
            };
        }
    }
    clearPaths() {
        this.data(ramda__WEBPACK_IMPORTED_MODULE_1__["map"](d => ramda__WEBPACK_IMPORTED_MODULE_1__["assoc"]('vals', [], d), this.data()));
    }
    plotPath(d) {
        const self = this;
        this.addDataKey_(d.classname);
        const currVals = this.data()[d.classname];
        currVals.vals.push(Math.abs(d.x));
        // sliding x-axis
        const newXrange = [Math.max(0, currVals.vals.length - this.options.xrange[1]), Math.max(currVals.vals.length, this.options.xrange[1])];
        // const newXrange = [0, currVals.vals.length]
        this.updateScales(newXrange);
        this.createPath();
        currVals.sel.data([currVals])
            .join("path")
            .classed(d.classname, true)
            .attr("d", d => {
            return self.path(d.vals);
        });
    }
    // Live update the xrange
    updateScales(xrange) {
        const op = this.options;
        this.scales.x = d3__WEBPACK_IMPORTED_MODULE_0__["scaleLinear"]().domain(xrange).range([0, op.width]).clamp(true);
    }
    initBaseLine(classname) {
        return this.layers.bg.append("path")
            .classed(classname, true)
            .classed('line', true);
    }
    createScales() {
        const op = this.options;
        this.scales.x = d3__WEBPACK_IMPORTED_MODULE_0__["scaleLinear"]().domain(op.xrange).range([0, op.width]).clamp(true);
        this.scales.y = d3__WEBPACK_IMPORTED_MODULE_0__["scaleLinear"]().domain(op.yrange).range([0, op.height]).clamp(true);
    }
    init() {
        const self = this;
        const op = this.options;
        const scales = this.scales;
        const sels = this.sels;
        this.createScales();
        this.createPath();
        this.createAxes();
    }
    createAxes() {
        const sels = this.sels;
        const scales = this.scales;
        const op = this.options;
        // Create axes
        sels.xaxis = this.base.append("g")
            .attr("class", "axis axis--x")
            .attr("transform", _util_SVGplus__WEBPACK_IMPORTED_MODULE_3__["SVG"].translate(0, op.height - axisOffset))
            // @ts-ignore
            .call(d3__WEBPACK_IMPORTED_MODULE_0__["axisBottom"](scales.x).ticks(4).tickFormat(""));
        sels.yaxis = this.base.append("g")
            .attr("class", "axis axis--y")
            .attr("transform", _util_SVGplus__WEBPACK_IMPORTED_MODULE_3__["SVG"].translate(0, -axisOffset))
            // @ts-ignore
            .call(d3__WEBPACK_IMPORTED_MODULE_0__["axisLeft"](scales.y).ticks(4).tickFormat(""));
        this.base.append("text")
            .attr("transform", _util_SVGplus__WEBPACK_IMPORTED_MODULE_3__["SVG"].translate(op.width / 2, op.margin.top + op.height + 10))
            .style("text-anchor", "middle")
            .text("Time");
        this.base.append("text")
            .style("text-anchor", "middle")
            .text("\u03B8 - \u03B8*")
            .attr("y", op.pad.left - op.margin.left)
            .attr("x", op.pad.top - (op.height / 2))
            .attr("transform", _util_SVGplus__WEBPACK_IMPORTED_MODULE_3__["SVG"].rotate(-90));
    }
    createPath() {
        this.path = d3__WEBPACK_IMPORTED_MODULE_0__["line"]()
            .x((d, i) => this.scales.x(i))
            .y((d, i) => this.scales.y(d))
            .curve(d3__WEBPACK_IMPORTED_MODULE_0__["curveLinear"]);
    }
    data(val) {
        if (val == null)
            return this._data;
        this._data = val;
        return this;
    }
}


/***/ }),

/***/ "./src/ts/vis/ManualUpdater.ts":
/*!*************************************!*\
  !*** ./src/ts/vis/ManualUpdater.ts ***!
  \*************************************/
/*! exports provided: ManualUpdater */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManualUpdater", function() { return ManualUpdater; });
/* harmony import */ var _GolfLandscapes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../GolfLandscapes */ "./src/ts/GolfLandscapes.ts");

class ManualUpdater {
    constructor(f, df, q = 0, eta = 0.1) {
        this.f = f;
        this.df = df;
        this.q = q;
        this.eta = eta;
    }
    // Calculate error squared of the base function
    loss(x) {
        return Object(_GolfLandscapes__WEBPACK_IMPORTED_MODULE_0__["baseLoss"])(this.f(x));
    }
    // Gradient at x
    gradient(x) {
        return this.f(x) * this.df(x);
    }
    // The positive semi-definite hessian at x
    psdhess(x) {
        return Math.pow(this.df(x), 2);
    }
    // The amount to update at x given the learning rate eta
    step(x) {
        const step = y => -this.eta * y;
        // Could use psdhess in the equation below, but due to numerical issues this formulation computes more reliably
        const updateAmt = this.f(x) * Math.pow(this.df(x), 1 - (2 * this.q));
        return step(updateAmt);
    }
    // Get the next x value after taking a step
    next(x) {
        return x + this.step(x);
    }
}


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nzcy9tYWluLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy90cy9Hb2xmTGFuZHNjYXBlcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHMvVXBkYXRlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHMvbWFpbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHMvcGxvdHRpbmcudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RzL3V0aWwvQ2hhcnQyZFZpc0NvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHMvdXRpbC9TVkdWaXNDb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RzL3V0aWwvU1ZHcGx1cy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHMvdXRpbC9TaW1wbGVFdmVudEhhbmRsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RzL3V0aWwvVmlzQ29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3NyYy90cy91dGlsL3hkMy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHMvdmlzL0NvbnRvdXJQbG90LnRzIiwid2VicGFjazovLy8uL3NyYy90cy92aXMvR29sZkJhbGwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RzL3Zpcy9Hb2xmSG9sZTFELnRzIiwid2VicGFjazovLy8uL3NyYy90cy92aXMvR29sZkxvc3Nlcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHMvdmlzL0dvbGZYRGlzdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHMvdmlzL01hbnVhbFVwZGF0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsUUFBUSxvQkFBb0I7UUFDNUI7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FB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QUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQztRQUN6TCxNQUFNLEVBQUUsQ0FBQyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUM7UUFDckIsTUFBTSxFQUFFLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQztRQUNoQixJQUFJLEVBQUUsUUFBUTtLQUNqQjtJQUNELE9BQU8sRUFBRTtRQUNMLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDcEQsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3pDLE1BQU0s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QUFPLEVBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFDO0lBQ3pCLENBQUM7SUFFRCxXQUFXLENBQUMsQ0FBVTtRQUNsQixNQUFNLEtBQUssR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUN2RCxNQUFNLEVBQUUsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzFCLE1BQU0sRUFBRSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDMUIsT0FBTyxFQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBQztJQUN6QixDQUFDO0lBRUQsRUFBRSxDQUFDLENBQVU7UUFDVCxNQUFNLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztRQUMxQixNQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztRQUM5QixNQUFNLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ25ELE1BQU0sR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbkQsT0FBTyxFQUFDLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBQztJQUMzQixDQUFDO0lBRUQsRUFBRSxDQUFDLENBQVU7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QUFFLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBRUQsd0RBQXdEO0lBQ3hELElBQUksQ0FBQyxDQUFTO1FBQ1YsTUFBTSxJQUFJLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFFLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDO1FBQ2pDLCtHQUErRztRQUMvRyxNQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3BFLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUMxQixDQUFDO0lBRUQsMkNBQTJDO0lBQzNDLElBQUksQ0FBQyxDQUFTO1FBQ1YsT0FBTyxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDM0IsQ0FBQztDQUNKIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbiBcdGZ1bmN0aW9uIHdlYnBhY2tKc29ucENhbGxiYWNrKGRhdGEpIHtcbiBcdFx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcbiBcdFx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcbiBcdFx0dmFyIGV4ZWN1dGVNb2R1bGVzID0gZGF0YVsyXTtcblxuIFx0XHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcbiBcdFx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG4gXHRcdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIHJlc29sdmVzID0gW107XG4gXHRcdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuIFx0XHRcdFx0cmVzb2x2ZXMucHVzaChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0pO1xuIFx0XHRcdH1cbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHR9XG4gXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihkYXRhKTtcblxuIFx0XHR3aGlsZShyZXNvbHZlcy5sZW5ndGgpIHtcbiBcdFx0XHRyZXNvbHZlcy5zaGlmdCgpKCk7XG4gXHRcdH1cblxuIFx0XHQvLyBhZGQgZW50cnkgbW9kdWxlcyBmcm9tIGxvYWRlZCBjaHVuayB0byBkZWZlcnJlZCBsaXN0XG4gXHRcdGRlZmVycmVkTW9kdWxlcy5wdXNoLmFwcGx5KGRlZmVycmVkTW9kdWxlcywgZXhlY3V0ZU1vZHVsZXMgfHwgW10pO1xuXG4gXHRcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gYWxsIGNodW5rcyByZWFkeVxuIFx0XHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiBcdH07XG4gXHRmdW5jdGlvbiBjaGVja0RlZmVycmVkTW9kdWxlcygpIHtcbiBcdFx0dmFyIHJlc3VsdDtcbiBcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGRlZmVycmVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdHZhciBkZWZlcnJlZE1vZHVsZSA9IGRlZmVycmVkTW9kdWxlc1tpXTtcbiBcdFx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcbiBcdFx0XHRmb3IodmFyIGogPSAxOyBqIDwgZGVmZXJyZWRNb2R1bGUubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdHZhciBkZXBJZCA9IGRlZmVycmVkTW9kdWxlW2pdO1xuIFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2RlcElkXSAhPT0gMCkgZnVsZmlsbGVkID0gZmFsc2U7XG4gXHRcdFx0fVxuIFx0XHRcdGlmKGZ1bGZpbGxlZCkge1xuIFx0XHRcdFx0ZGVmZXJyZWRNb2R1bGVzLnNwbGljZShpLS0sIDEpO1xuIFx0XHRcdFx0cmVzdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBkZWZlcnJlZE1vZHVsZVswXSk7XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0cmV0dXJuIHJlc3VsdDtcbiBcdH1cblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdC8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuIFx0Ly8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwibWFpblwiOiAwXG4gXHR9O1xuXG4gXHR2YXIgZGVmZXJyZWRNb2R1bGVzID0gW107XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdHZhciBqc29ucEFycmF5ID0gd2luZG93W1wid2VicGFja0pzb25wXCJdID0gd2luZG93W1wid2VicGFja0pzb25wXCJdIHx8IFtdO1xuIFx0dmFyIG9sZEpzb25wRnVuY3Rpb24gPSBqc29ucEFycmF5LnB1c2guYmluZChqc29ucEFycmF5KTtcbiBcdGpzb25wQXJyYXkucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrO1xuIFx0anNvbnBBcnJheSA9IGpzb25wQXJyYXkuc2xpY2UoKTtcbiBcdGZvcih2YXIgaSA9IDA7IGkgPCBqc29ucEFycmF5Lmxlbmd0aDsgaSsrKSB3ZWJwYWNrSnNvbnBDYWxsYmFjayhqc29ucEFycmF5W2ldKTtcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gb2xkSnNvbnBGdW5jdGlvbjtcblxuXG4gXHQvLyBhZGQgZW50cnkgbW9kdWxlIHRvIGRlZmVycmVkIGxpc3RcbiBcdGRlZmVycmVkTW9kdWxlcy5wdXNoKFtcIi4vc3JjL2luZGV4LnRzXCIsXCJ2ZW5kb3JcIl0pO1xuIFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiByZWFkeVxuIFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbmRleC5odG1sXCI7IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0IHttYWlufSBmcm9tICcuL3RzL21haW4nXG5cbmltcG9ydCBcIiFmaWxlLWxvYWRlcj9uYW1lPWluZGV4Lmh0bWwhLi9pbmRleC5odG1sXCI7XG5pbXBvcnQgXCIuL2Nzcy9tYWluLnNjc3NcIlxuXG5tYWluKCkiLCJleHBvcnQgY29uc3QgYmFzZUxvc3MgPSB4ID0+IDEgLyAyICogTWF0aC5wb3coeCwgMilcbmV4cG9ydCBjb25zdCBnZXRQbG90RnVuYyA9ICh6OiBMYW5kc2NhcGUpID0+ICh4OiBudW1iZXIpID0+IHoubG9zcyh6LmYoeCkpXG5cbmV4cG9ydCBpbnRlcmZhY2UgTGFuZHNjYXBlIHtcbiAgICBmOiAoeDogbnVtYmVyKSA9PiBudW1iZXJcbiAgICBkZjogKHg6IG51bWJlcikgPT4gbnVtYmVyXG4gICAgeHJhbmdlOiBbbnVtYmVyLCBudW1iZXJdXG4gICAgeXJhbmdlOiBbbnVtYmVyLCBudW1iZXJdXG4gICAgbG9zczogKHg6IG51bWJlcikgPT4gbnVtYmVyXG59XG5cblxuZXhwb3J0IGNvbnN0IGxhbmRzY2FwZXM6IHsgW2s6IHN0cmluZ106IExhbmRzY2FwZSB9ID0ge1xuICAgIGhvbGU6IHtcbiAgICAgICAgZjogeCA9PiBNYXRoLnRhbmgoeC8yKSxcbiAgICAgICAgZGY6IHggPT4gTWF0aC5wb3coTWF0aC5jb3NoKHgvMiksIC0yKS8yLFxuICAgICAgICB4cmFuZ2U6IFstMTIsIDEyXSxcbiAgICAgICAgeXJhbmdlOiBbMCwgMC42XSxcbiAgICAgICAgbG9zczogYmFzZUxvc3NcbiAgICB9LFxuICAgIHN0ZXBzOiB7XG4gICAgICAgIGY6IHggPT4gTWF0aC50YW5oKHggLSAxMSkgLyA0ICsgTWF0aC50YW5oKHggLSA2KSAvIDQgKyBNYXRoLnRhbmgoeCkgKyBNYXRoLnRhbmgoeCArIDYpIC8gNCArIE1hdGgudGFuaCh4ICsgMTEpIC8gNCxcbiAgICAgICAgZGY6IHggPT4gTWF0aC5wb3coTWF0aC5jb3NoKHggLSAxMSksIC0yKSAvIDQgKyBNYXRoLnBvdyhNYXRoLmNvc2goeCAtIDYpLCAtMikgLyA0ICsgTWF0aC5wb3coTWF0aC5jb3NoKHgpLCAtMikgKyBNYXRoLnBvdyhNYXRoLmNvc2goeCArIDYpLCAtMikgLyA0ICsgTWF0aC5wb3coTWF0aC5jb3NoKHggKyAxMSksIC0yKSAvIDQsXG4gICAgICAgIHhyYW5nZTogWy0xMy42LCAxMy42XSxcbiAgICAgICAgeXJhbmdlOiBbMCwgMi41XSxcbiAgICAgICAgbG9zczogYmFzZUxvc3NcbiAgICB9LFxuICAgIHNlYWd1bGw6IHtcbiAgICAgICAgZjogeCA9PiBNYXRoLnNpZ24oeCkgKiAoMSAtICgxIC8gKDEgKyBNYXRoLmFicyh4KSkpKSxcbiAgICAgICAgZGY6IHggPT4gMSAvIE1hdGgucG93KDEgKyBNYXRoLmFicyh4KSwgMiksXG4gICAgICAgIHhyYW5nZTogWy0xMiwgMTJdLFxuICAgICAgICB5cmFuZ2U6IFswLCAwLjZdLFxuICAgICAgICBsb3NzOiBiYXNlTG9zc1xuICAgIH0sXG4gICAgYm93bDoge1xuICAgICAgICBmOiAgeCA9PiBNYXRoLnNpbmgoeC81KSxcbiAgICAgICAgZGY6IHggPT4gTWF0aC5jb3NoKHgvNSkvNSxcbiAgICAgICAgeHJhbmdlOiBbLTE1LCAxNV0sXG4gICAgICAgIHlyYW5nZTogWzAsIDEwMF0sXG4gICAgICAgIGxvc3M6IGJhc2VMb3NzXG4gICAgfSxcbiAgICBkZWVwX25ldDoge1xuICAgICAgICBmOiB4ID0+IE1hdGgucG93KE1hdGguYWJzKHgvMTArMSksIDMpIC0gMSwgIC8vIGRlcHRoID0gNFxuICAgICAgICBkZjogeCA9PiAzLzEwICogTWF0aC5wb3coTWF0aC5hYnMoeC8xMCsxKSwgMiksXG4gICAgICAgIHhyYW5nZTogWy05LjksIDkuOV0sXG4gICAgICAgIHlyYW5nZTogWzAsIDNdLFxuICAgICAgICBsb3NzOiBiYXNlTG9zc1xuICAgIH1cbn0iLCJpbXBvcnQge1ZlY3RvcjJEfSBmcm9tICcuL3V0aWwvdHlwZXMnXG5pbXBvcnQgKiBhcyBkMyBmcm9tICdkMydcblxudHlwZSBFcnJvckZ1bmMgPSAodjogVmVjdG9yMkQpID0+IG51bWJlclxuXG5cbmNvbnN0IGRlZmF1bHRFcnJvcjogRXJyb3JGdW5jID0gdiA9PiB2LnggKiB2LnkgLSAxXG5jb25zdCBkZWZhdWx0U3RlcDJMcjogZDMuU2NhbGVMaW5lYXI8bnVtYmVyLCBudW1iZXI+ID0gZDMuc2NhbGVMaW5lYXIoKS5kb21haW4oWzAsIDAuOF0pLnJhbmdlKFswLjAwMSwgMC4yNV0pXG5cbmV4cG9ydCBjbGFzcyBVcGRhdGVyIHtcbiAgICBlcnI6IEVycm9yRnVuYyAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gVGhlIGVycm9yIGZ1bmN0aW9uLiBMb3NzIGlzIHRoZSBlcnJvciBzcXVhcmVkXG4gICAgcTogbnVtYmVyICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIDAgLT4gMSwgd2hlcmUgMCBpcyBTR0QgYW5kIDEgaXMgTkdELiAwLjUgaXMgc3FydCBOR0QuIFtzdGVwID0gLSBldGEgKiBIIF4gKC0xL3EpICogZ10gKEggPSAwIHdoZW4gcT0wKVxuICAgIGV0YTogbnVtYmVyICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBha2EgJ2xlYXJuaW5nIHJhdGUnXG4gICAgc3RlcDJscjogZDMuU2NhbGVMaW5lYXI8bnVtYmVyLCBudW1iZXI+IC8vIEZvcm1hdCB0aGUgbGVhcm5pbmcgcmF0ZSBmb3IgZGlzcGxheVxuXG4gICAgY29uc3RydWN0b3IocT0wLCBldGE9MC4xLCBlcnI9ZGVmYXVsdEVycm9yLCBzdGVwMmxyPWRlZmF1bHRTdGVwMkxyKSB7XG4gICAgICAgIHRoaXMuZXJyID0gZXJyO1xuICAgICAgICB0aGlzLnEgPSBxO1xuICAgICAgICB0aGlzLmV0YSA9IGV0YTtcbiAgICAgICAgdGhpcy5zdGVwMmxyID0gc3RlcDJscjtcbiAgICB9XG5cbiAgICAvLyBBbW91bnQgdG8gc2NhbGUgc2l6ZSBvZiBsZWFybmluZyByYXRlIGFycm93c1xuICAgIGdldCBsclNjYWxlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGVwMmxyKHRoaXMuZXRhKVxuICAgIH1cblxuICAgIC8vIFRha2UgYWJzIHZhbHVlIG9mIGVycm9yXG4gICAgYWJzRXJyKHY6VmVjdG9yMkQpOm51bWJlciB7XG4gICAgICAgIHJldHVybiBNYXRoLmFicyh0aGlzLmVycih2KSlcbiAgICB9XG5cbiAgICAvLyBDYWxjdWxhdGUgZXJyb3Igc3F1YXJlZFxuICAgIGxvc3ModjpWZWN0b3IyRCk6bnVtYmVye1xuICAgICAgICByZXR1cm4gTWF0aC5wb3codGhpcy5lcnIodiksIDIpXG4gICAgfVxuXG4gICAgZ3JhZGllbnQodjpWZWN0b3IyRCk6VmVjdG9yMkQge1xuICAgICAgICBjb25zdCBlcnIgPSB0aGlzLmVycih2KTtcbiAgICAgICAgY29uc3QgZ3ggPSB2LnkgKiBlcnI7XG4gICAgICAgIGNvbnN0IGd5ID0gdi54ICogZXJyO1xuICAgICAgICByZXR1cm4ge3g6IGd4LCB5OiBneX1cbiAgICB9XG5cbiAgICBlaWdlbnZhbHVlcyh2OlZlY3RvcjJEKTpWZWN0b3IyRCB7XG4gICAgICAgIGNvbnN0IGdldEV2ID0gKHgsIHkpID0+IE1hdGgucG93KHgsIDIpICsgTWF0aC5wb3coeSwgMilcbiAgICAgICAgY29uc3QgZXggPSBnZXRFdih2LngsIHYueSlcbiAgICAgICAgY29uc3QgZXkgPSBnZXRFdih2LngsIHYueSlcbiAgICAgICAgcmV0dXJuIHt4OiBleCwgeTogZXl9XG4gICAgfVxuXG4gICAgZHYodjpWZWN0b3IyRCk6IFZlY3RvcjJEIHtcbiAgICAgICAgY29uc3QgZyA9IHRoaXMuZ3JhZGllbnQodilcbiAgICAgICAgY29uc3QgZXYgPSB0aGlzLmVpZ2VudmFsdWVzKHYpXG4gICAgICAgIGNvbnN0IGR2eCA9IC1nLnggLyBNYXRoLmFicyhNYXRoLnBvdyhldi54LCB0aGlzLnEpKVxuICAgICAgICBjb25zdCBkdnkgPSAtZy55IC8gTWF0aC5hYnMoTWF0aC5wb3coZXYueSwgdGhpcy5xKSlcbiAgICAgICAgcmV0dXJuIHt4OiBkdngsIHk6IGR2eX1cbiAgICB9XG5cbiAgICBscih2OlZlY3RvcjJEKTogVmVjdG9yMkQge1xuICAgICAgICBjb25zdCBkdiA9IHRoaXMuZHYodilcbiAgICAgICAgY29uc3QgYWJzRXJyID0gdGhpcy5hYnNFcnIodilcbiAgICAgICAgY29uc3QgbHJTY2FsZSA9IHRoaXMuc3RlcDJscih0aGlzLmV0YSlcbiAgICAgICAgY29uc3QgbHJ4ID0gbHJTY2FsZSAqIGR2LnggLyBhYnNFcnJcbiAgICAgICAgY29uc3QgbHJ5ID0gbHJTY2FsZSAqIGR2LnkgLyBhYnNFcnJcbiAgICAgICAgcmV0dXJuIHt4OiBscngsIHk6IGxyeX1cbiAgICB9XG5cbiAgICAvLyBHZXQgbmV4dCB2IHZhbHVlXG4gICAgbmV4dCh2OlZlY3RvcjJEKTogVmVjdG9yMkQge1xuICAgICAgICBjb25zdCBkdiA9IHRoaXMuZHYodilcbiAgICAgICAgY29uc3QgbmV3eCA9IHYueCArIGR2LnggKiB0aGlzLmV0YTtcbiAgICAgICAgY29uc3QgbmV3eSA9IHYueSArIGR2LnkgKiB0aGlzLmV0YTtcbiAgICAgICAgcmV0dXJuIHt4OiBuZXd4LCB5OiBuZXd5fVxuICAgIH1cblxuICAgIG5leHRMcih2OlZlY3RvcjJEKTogVmVjdG9yMkQge1xuICAgICAgICBjb25zdCBnID0gdGhpcy5scih2KTtcbiAgICAgICAgY29uc3QgeCA9IHYueCArIGcueDtcbiAgICAgICAgY29uc3QgeSA9IHYueSArIGcueTtcbiAgICAgICAgcmV0dXJuIHt4OiB4LCB5OiB5fVxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIEJsb2NrVXBkYXRlciBleHRlbmRzIFVwZGF0ZXIge1xuICAgIGVpZ2VudmFsdWVzKHY6VmVjdG9yMkQpOlZlY3RvcjJEIHtcbiAgICAgICAgY29uc3QgZXggPSAyICogTWF0aC5wb3codi55LCAyKVxuICAgICAgICBjb25zdCBleSA9IDIgKiBNYXRoLnBvdyh2LngsIDIpXG4gICAgICAgIHJldHVybiB7eDogZXgsIHk6IGV5fVxuICAgIH1cbn0iLCJpbXBvcnQgKiBhcyBkMyBmcm9tICdkMydcbmltcG9ydCB7IENvbnRvdXJQbG90IH0gZnJvbSAnLi92aXMvQ29udG91clBsb3QnXG5pbXBvcnQgeyBEM1NlbCB9IGZyb20gJy4vdXRpbC94ZDMnXG5pbXBvcnQgeyBHb2xmSG9sZTFEIH0gZnJvbSAnLi92aXMvR29sZkhvbGUxRCdcbmltcG9ydCB7IEdvbGZMb3NzZXMgfSBmcm9tICcuL3Zpcy9Hb2xmTG9zc2VzJ1xuaW1wb3J0IHsgR29sZlhEaXN0IH0gZnJvbSAnLi92aXMvR29sZlhEaXN0J1xuaW1wb3J0IHsgR29sZkJhbGwgfSBmcm9tICcuL3Zpcy9Hb2xmQmFsbCdcbmltcG9ydCAqIGFzIFIgZnJvbSAncmFtZGEnXG5pbXBvcnQgeyBTaW1wbGVFdmVudEhhbmRsZXIgfSBmcm9tICcuL3V0aWwvU2ltcGxlRXZlbnRIYW5kbGVyJ1xuaW1wb3J0IHsgTWFudWFsVXBkYXRlciB9IGZyb20gJy4vdmlzL01hbnVhbFVwZGF0ZXInXG5pbXBvcnQgeyBsYW5kc2NhcGVzLCBMYW5kc2NhcGUgfSBmcm9tICcuL0dvbGZMYW5kc2NhcGVzJ1xuXG5jb25zdCB0b0ZpeGVkID0gUi5jdXJyeSgobmRpZ2l0cywgeCkgPT4geC50b0ZpeGVkKG5kaWdpdHMpKVxuY29uc3QgdG9RID0gdG9GaXhlZCgxKVxuY29uc3QgdG9FdGEgPSB0b0ZpeGVkKDQpXG5cbmZ1bmN0aW9uIHBsb3RRdWl2ZXJHcmFwaCgpIHtcblx0Y29uc3QgdmlzMSA9IGQzLnNlbGVjdCgnI3ZpczEnKVxuXHRjb25zdCBzZWxzID0ge1xuXHRcdHF1aXZlclBsb3Q6IHZpczEuc2VsZWN0KCcjY2hhcnQnKSxcblx0XHRxSWQ6IHZpczEuc2VsZWN0KCcjcS12YWwnKSxcblx0XHRldGFJZDogdmlzMS5zZWxlY3QoJyNldGEtdmFsJyksXG5cdFx0cVNsaWRlcjogdmlzMS5zZWxlY3QoJyNxLXNsaWRlcicpLFxuXHRcdGV0YVNsaWRlcjogdmlzMS5zZWxlY3QoJyNldGEtc2xpZGVyJyksXG5cdFx0aGVzc1R5cGU6IHZpczEuc2VsZWN0KCcjaGVzcy10eXBlJylcblx0fVxuXG5cdGNvbnN0IHZpenMgPSB7XG5cdFx0Z3JhcGg6IG5ldyBDb250b3VyUGxvdChzZWxzLnF1aXZlclBsb3QpXG5cdH1cblxuXHRjb25zdCBkZWZhdWx0cyA9IHtcblx0XHQvLyBOb3RlIHRvIGFsc28gY2hhbmdlIHRoZSBkZWZhdWx0IHZhbHVlIGluIHRoZSBodG1sIGZpbGUhXG5cdFx0cTogMCxcblx0XHRldGE6IDAuMVxuXHR9XG5cblx0Y29uc3Qgc2NhbGVzID0ge1xuXHRcdHE6IGQzLnNjYWxlTGluZWFyKCkucmFuZ2UoWzAsIDEwXSkuZG9tYWluKFswLCAxXSksXG5cdFx0ZXRhOiBkMy5zY2FsZUxpbmVhcigpLnJhbmdlKFsxLCAxMDAwXSkuZG9tYWluKFtNYXRoLnBvdygxMCwgLTUpLCAwLjZdKVxuXHR9XG5cblx0Ly8gSW5pdGlhbGl6ZSBncmFwaCBwYXJhbWV0ZXJzIHRvIG1hdGNoIHRoZSBkZWZhdWx0c1xuXHR2aXpzLmdyYXBoLnEoZGVmYXVsdHMucSlcblx0dml6cy5ncmFwaC5ldGEoZGVmYXVsdHMuZXRhKVxuXHRzZWxzLnFTbGlkZXIucHJvcGVydHkoJ3ZhbHVlJywgc2NhbGVzLnEoZGVmYXVsdHMucSkpXG5cdHNlbHMuZXRhU2xpZGVyLnByb3BlcnR5KCd2YWx1ZScsIHNjYWxlcy5ldGEoZGVmYXVsdHMuZXRhKSlcblxuXHRzZWxzLnFJZC50ZXh0KHRvUShkZWZhdWx0cy5xKSlcblx0c2Vscy5ldGFJZC50ZXh0KHRvRXRhKGRlZmF1bHRzLmV0YSkpXG5cblx0c2Vscy5xU2xpZGVyLm9uKCdpbnB1dCcsIGZ1bmN0aW9uICgpIHtcblx0XHRjb25zdCBtZSA9IGQzLnNlbGVjdCh0aGlzKVxuXHRcdGNvbnN0IHYgPSBzY2FsZXMucS5pbnZlcnQoK21lLnByb3BlcnR5KCd2YWx1ZScpKTtcblx0XHR2aXpzLmdyYXBoLnEodik7XG5cdFx0c2Vscy5xSWQudGV4dChgJHt0b1Eodil9YClcblx0fSlcblxuXHRzZWxzLmV0YVNsaWRlci5vbignaW5wdXQnLCBmdW5jdGlvbiAoKSB7XG5cdFx0Y29uc3QgbWUgPSBkMy5zZWxlY3QodGhpcylcblx0XHRjb25zdCB2ID0gc2NhbGVzLmV0YS5pbnZlcnQobWUucHJvcGVydHkoJ3ZhbHVlJykpO1xuXHRcdHZpenMuZ3JhcGguZXRhKHYpXG5cdFx0c2Vscy5ldGFJZC50ZXh0KGAke3RvRXRhKHYpfWApXG5cdH0pXG5cblx0c2Vscy5oZXNzVHlwZS5vbignaW5wdXQnLCBmdW5jdGlvbiAoKSB7XG5cdFx0Y29uc3Qgc2VsZiA9IGQzLnNlbGVjdCh0aGlzKVxuXHRcdGNvbnN0IHYgPSBzZWxmLnByb3BlcnR5KCd2YWx1ZScpXG5cdFx0dml6cy5ncmFwaC5zZXRVcGRhdGVyKHYpXG5cdH0pXG59XG5cbmZ1bmN0aW9uIHBsb3RHb2xmSG9sZSgpIHtcblx0Y29uc3QgdmlzMiA9IGQzLnNlbGVjdChcIiN2aXMyXCIpO1xuXHRjb25zdCBzZWxzID0ge1xuXHRcdGNoYXJ0OiB2aXMyLnNlbGVjdCgnI2NoYXJ0JyksXG5cdFx0Y2hhcnRYRGlzdDogdmlzMi5zZWxlY3QoJyNjaGFydC14ZGlzdCcpLFxuXHRcdGNoYXJ0TG9zc2VzOiB2aXMyLnNlbGVjdCgnI2NoYXJ0LWxvc3NlcycpLFxuXHRcdGxhbmRzY2FwZVNlbGVjdG9yOiB2aXMyLnNlbGVjdCgnLmxhbmRzY2FwZS1zZWxlY3QnKVxuXHR9XG5cblx0Y29uc3QgZGVmYXVsdHMgPSB7XG5cdFx0bGFuZHNjYXBlOiBcInNlYWd1bGxcIlxuXHR9XG5cblx0Y29uc3QgZXZlbnRIYW5kbGVyID0gbmV3IFNpbXBsZUV2ZW50SGFuZGxlcig8RWxlbWVudD52aXMyLm5vZGUoKSlcblx0Y29uc3Qgdml6cyA9IHtcblx0XHRncmFwaDogbmV3IEdvbGZIb2xlMUQoc2Vscy5jaGFydCwgZXZlbnRIYW5kbGVyKSxcblx0XHRjaGFydFhEaXN0OiBuZXcgR29sZlhEaXN0KHNlbHMuY2hhcnRYRGlzdCwgZXZlbnRIYW5kbGVyKSxcblx0XHRjaGFydExvc3NlczogbmV3IEdvbGZMb3NzZXMoc2Vscy5jaGFydExvc3NlcywgZXZlbnRIYW5kbGVyKVxuXHR9XG5cblx0Ly8gQXR0YWNoIGdvbGZiYWxsIGluZm8gdG8gbG9zcyB0cmFja2VyXG5cdGV2ZW50SGFuZGxlci5iaW5kKCdsb3NzLWNsaWNrJywgKGUpID0+IHtcblx0XHR2aXpzLmNoYXJ0WERpc3QuY2xlYXJQYXRocygpXG5cdFx0dml6cy5jaGFydExvc3Nlcy5jbGVhclBhdGhzKClcblx0fSlcblxuXHQvLyBDb25maWd1cmUgaHRtbCBwYWdlIHRvIHdvcmsgd2l0aCBkZWZhdWx0c1xuXHRzZWxzLmxhbmRzY2FwZVNlbGVjdG9yLnByb3BlcnR5KCd2YWx1ZScsIGRlZmF1bHRzLmxhbmRzY2FwZSlcblx0dml6cy5ncmFwaC5sYW5kc2NhcGUobGFuZHNjYXBlc1tkZWZhdWx0cy5sYW5kc2NhcGVdKVxuXG5cdGNvbnN0IHN0cmVhbXMgPSB2aXpzLmdyYXBoLmRhdGEoKS5tYXAoYiA9PiBiLnN0cmVhbSlcblx0Y29uc3QgcGxvdHRlciA9IHtcblx0XHRuZXh0OiBkID0+IHtcblx0XHRcdHZpenMuY2hhcnRYRGlzdC5wbG90UGF0aChkKVxuXHRcdFx0dml6cy5jaGFydExvc3Nlcy5wbG90UGF0aChkKVxuXHRcdH1cblx0fVxuXHRzdHJlYW1zLmZvckVhY2gocyA9PiBzLnN1YnNjcmliZShwbG90dGVyKSlcblxuXHQvLyBHYXRoZXIgaW50ZXJhY3Rpdml0eSBmb3IgdGhlIGdvbGYgYmFsbCBwbG90XG5cdHNlbHMubGFuZHNjYXBlU2VsZWN0b3Iub24oJ2lucHV0JywgZnVuY3Rpb24gKCkge1xuXHRcdGNvbnN0IHNlbGYgPSBkMy5zZWxlY3QodGhpcylcblx0XHRjb25zdCB2ID0gc2VsZi5wcm9wZXJ0eSgndmFsdWUnKVxuXHRcdHZpenMuZ3JhcGgubGFuZHNjYXBlKGxhbmRzY2FwZXNbdl0pXG5cdH0pXG59XG5cbmZ1bmN0aW9uIHBsb3RHb2xmSG9sZVNsaWRlcigpIHtcblx0Y29uc3QgdmlzMyA9IGQzLnNlbGVjdChcIiN2aXMzXCIpO1xuXG5cdGNvbnN0IHNlbHMgPSB7XG5cdFx0Y2hhcnQ6IHZpczMuc2VsZWN0KCcjY2hhcnQnKSxcblx0XHRjaGFydExvc3NlczogdmlzMy5zZWxlY3QoJyNjaGFydC1sb3NzZXMnKSxcblx0XHRjaGFydFhEaXN0OiB2aXMzLnNlbGVjdCgnI2NoYXJ0LXhkaXN0JyksXG5cdFx0cUlkOiB2aXMzLnNlbGVjdCgnI3EtdmFsJyksXG5cdFx0ZXRhSWQ6IHZpczMuc2VsZWN0KCcjZXRhLXZhbCcpLFxuXHRcdHFTbGlkZXI6IHZpczMuc2VsZWN0KCcjcS1zbGlkZXInKSxcblx0XHRldGFTbGlkZXI6IHZpczMuc2VsZWN0KCcjZXRhLXNsaWRlcicpLFxuXHRcdGxhbmRzY2FwZVNlbGVjdG9yOiB2aXMzLnNlbGVjdCgnLmxhbmRzY2FwZS1zZWxlY3QnKVxuXHR9XG5cblx0Y29uc3QgZXZlbnRIYW5kbGVyID0gbmV3IFNpbXBsZUV2ZW50SGFuZGxlcig8RWxlbWVudD52aXMzLm5vZGUoKSlcblxuXHRjb25zdCB2aXpzID0ge1xuXHRcdGdyYXBoOiBuZXcgR29sZkhvbGUxRChzZWxzLmNoYXJ0LCBldmVudEhhbmRsZXIsIHsgbWF4SXRlcjogMS41ZTMgfSksXG5cdFx0Y2hhcnRMb3NzZXM6IG5ldyBHb2xmTG9zc2VzKHNlbHMuY2hhcnRMb3NzZXMsIGV2ZW50SGFuZGxlciksXG5cdFx0Y2hhcnRYRGlzdDogbmV3IEdvbGZYRGlzdChzZWxzLmNoYXJ0WERpc3QsIGV2ZW50SGFuZGxlcilcblx0fVxuXG5cdGNvbnN0IGRlZmF1bHRzID0ge1xuXHRcdC8vIE5vdGUgdG8gYWxzbyBjaGFuZ2UgdGhlIGRlZmF1bHQgdmFsdWUgaW4gdGhlIGh0bWwgZmlsZSFcblx0XHRxOiAwLjUsXG5cdFx0ZXRhOiAwLjEsXG5cdFx0bGFuZHNjYXBlOiBcInNlYWd1bGxcIlxuXHR9XG5cblx0Ly8gQXR0YWNoIGdvbGZiYWxsIGluZm8gdG8gbG9zcyB0cmFja2VyXG5cdGV2ZW50SGFuZGxlci5iaW5kKCdsb3NzLWNsaWNrJywgKGUpID0+IHtcblx0XHR2aXpzLmNoYXJ0WERpc3QuY2xlYXJQYXRocygpXG5cdFx0dml6cy5jaGFydExvc3Nlcy5jbGVhclBhdGhzKClcblx0fSlcblxuXHQvLyBQdXQgZGF0YSBpbnRvIHZpelxuXHR2aXpzLmdyYXBoLmRhdGEoW25ldyBHb2xmQmFsbChuZXcgTWFudWFsVXBkYXRlcihsYW5kc2NhcGVzLmhvbGUuZiwgbGFuZHNjYXBlcy5ob2xlLmRmLCBkZWZhdWx0cy5xLCBkZWZhdWx0cy5ldGEpLCBcImdvbGYtYmFsbFwiKV0pXG5cblx0dml6cy5ncmFwaC5sYW5kc2NhcGUobGFuZHNjYXBlcy5zdGVwcylcblxuXHQvLyBjb25zdCBldGFSYW5nZSA9IFstNSwgMl0ubWFwKHggPT4gTWF0aC5wb3coMTAsIHgpKVxuXHRjb25zdCBldGFSYW5nZSA9IFstMywgMl0ubWFwKHggPT4gTWF0aC5wb3coMTAsIHgpKVxuXHRjb25zdCBzY2FsZXMgPSB7XG5cdFx0cTogZDMuc2NhbGVMaW5lYXIoKS5yYW5nZShbMCwgMTBdKS5kb21haW4oWzAsIDFdKSxcblx0XHRldGE6IGQzLnNjYWxlTG9nKCkucmFuZ2UoWzEsIDEwMDBdKS5kb21haW4oZXRhUmFuZ2UpLmJhc2UoMTApXG5cdH1cblxuXHQvLyBJbml0aWFsaXplIGdyYXBoIHBhcmFtZXRlcnMgdG8gbWF0Y2ggdGhlIGRlZmF1bHRzXG5cdHZpenMuZ3JhcGgubGFuZHNjYXBlKGxhbmRzY2FwZXNbZGVmYXVsdHMubGFuZHNjYXBlXSlcblx0c2Vscy5sYW5kc2NhcGVTZWxlY3Rvci5wcm9wZXJ0eSgndmFsdWUnLCBkZWZhdWx0cy5sYW5kc2NhcGUpXG5cblx0c2Vscy5xU2xpZGVyLnByb3BlcnR5KCd2YWx1ZScsIHNjYWxlcy5xKGRlZmF1bHRzLnEpKVxuXHRzZWxzLmV0YVNsaWRlci5wcm9wZXJ0eSgndmFsdWUnLCBzY2FsZXMuZXRhKGRlZmF1bHRzLmV0YSkpXG5cdHNlbHMucUlkLnRleHQodG9RKGRlZmF1bHRzLnEpKVxuXHRzZWxzLmV0YUlkLnRleHQodG9FdGEoZGVmYXVsdHMuZXRhKSlcblxuXHQvLyBDb25maWd1cmUgSW50ZXJhY3Rpdml0eVxuXHRzZWxzLnFTbGlkZXIub24oJ2lucHV0JywgZnVuY3Rpb24gKCkge1xuXHRcdGNvbnN0IG1lID0gZDMuc2VsZWN0KHRoaXMpXG5cdFx0Y29uc3QgdiA9IHNjYWxlcy5xLmludmVydChtZS5wcm9wZXJ0eSgndmFsdWUnKSk7XG5cdFx0dml6cy5ncmFwaC5kYXRhSGVhZC5xKHYpXG5cdFx0c2Vscy5xSWQudGV4dChgJHt0b1Eodil9YClcblx0fSlcblxuXHRzZWxzLmV0YVNsaWRlci5vbignaW5wdXQnLCBmdW5jdGlvbiAoKSB7XG5cdFx0Y29uc3QgbWUgPSBkMy5zZWxlY3QodGhpcylcblx0XHRjb25zdCB2ID0gc2NhbGVzLmV0YS5pbnZlcnQobWUucHJvcGVydHkoJ3ZhbHVlJykpO1xuXHRcdHZpenMuZ3JhcGguZGF0YUhlYWQuZXRhKHYpXG5cdFx0c2Vscy5ldGFJZC50ZXh0KGAke3RvRXRhKHYpfWApXG5cdH0pXG5cblx0c2Vscy5sYW5kc2NhcGVTZWxlY3Rvci5vbignaW5wdXQnLCBmdW5jdGlvbiAoKSB7XG5cdFx0Y29uc3Qgc2VsZiA9IGQzLnNlbGVjdCh0aGlzKVxuXHRcdGNvbnN0IHYgPSBzZWxmLnByb3BlcnR5KCd2YWx1ZScpXG5cdFx0dml6cy5ncmFwaC5sYW5kc2NhcGUobGFuZHNjYXBlc1t2XSlcblx0fSlcblxuXHQvLyBBc3NpZ24gc3RyZWFtc1xuXHRjb25zdCBzdHJlYW1zID0gdml6cy5ncmFwaC5kYXRhKCkubWFwKGIgPT4gYi5zdHJlYW0pXG5cdGNvbnN0IHBsb3R0ZXIgPSB7XG5cdFx0bmV4dDogZCA9PiB7XG5cdFx0XHR2aXpzLmNoYXJ0WERpc3QucGxvdFBhdGgoZClcblx0XHRcdHZpenMuY2hhcnRMb3NzZXMucGxvdFBhdGgoZClcblx0XHR9XG5cdH1cblx0c3RyZWFtcy5mb3JFYWNoKHMgPT4gcy5zdWJzY3JpYmUocGxvdHRlcikpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtYWluKCkge1xuXHRjb25zb2xlLmxvZyhcIlJVTk5JTkdcIik7XG5cdHBsb3RRdWl2ZXJHcmFwaCgpO1xuXHRwbG90R29sZkhvbGUoKTtcblx0cGxvdEdvbGZIb2xlU2xpZGVyKCk7XG59XG5cbiIsImltcG9ydCAqIGFzIGQzIGZyb20gJ2QzJ1xuaW1wb3J0IHsgTWFyZ2luSW5mbyB9IGZyb20gJy4vdXRpbC9TVkdWaXNDb21wb25lbnQnXG5pbXBvcnQgeyBEM1NlbCB9IGZyb20gJy4vdXRpbC94ZDMnXG5pbXBvcnQge3JhbmdlfSBmcm9tICdyYW1kYSdcblxuZXhwb3J0IGZ1bmN0aW9uIGFkZFNWRyhkaXY6IHN0cmluZywgd2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIsIG1hcmdpbjogTWFyZ2luSW5mbyk6IEQzU2VsIHtcblxuICAgIHZhciBzdmcgPSBkMy5zZWxlY3QoZGl2KS5hcHBlbmQoXCJzdmdcIilcbiAgICAgICAgLmF0dHIoXCJ3aWR0aFwiLCBcIjEwMCVcIilcbiAgICAgICAgLmF0dHIoXCJoZWlnaHRcIiwgXCIxMDAlXCIpXG4gICAgICAgIC5hdHRyKFwidmlld0JveFwiLCBcIjAgMCBcIiArICh3aWR0aCArIG1hcmdpbi5sZWZ0ICsgbWFyZ2luLnJpZ2h0KSArIFwiIFwiICsgKGhlaWdodCArIG1hcmdpbi50b3AgKyBtYXJnaW4uYm90dG9tKSlcbiAgICAgICAgLmF0dHIoXCJwcmVzZXJ2ZUFzcGVjdFJhdGlvXCIsIFwieE1pZFlNaWQgbWVldFwiKVxuICAgICAgICAuYXBwZW5kKFwiZ1wiKVxuICAgICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBcInRyYW5zbGF0ZShcIiArIG1hcmdpbi5sZWZ0ICsgXCIsXCIgKyBtYXJnaW4udG9wICsgXCIpXCIpO1xuXG4gICAgcmV0dXJuIHN2Zztcbn1cblxudHlwZSBEb21haW5SYW5nZSA9IG51bWJlcltdXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRDb250b3VyVmFsdWVzKG46IG51bWJlciwgbTogbnVtYmVyLCB4cmFuZ2U6IERvbWFpblJhbmdlLCB5cmFuZ2U6IERvbWFpblJhbmdlLCBmdW5jOiAoeDogbnVtYmVyLCB5OiBudW1iZXIpID0+IG51bWJlcikge1xuICAgIGxldCB2YWx1ZXMgPSBuZXcgQXJyYXkobiAqIG0pXG5cbiAgICBmb3IgKHZhciBqID0gMC41LCBrID0gMDsgaiA8IG07ICsraikge1xuICAgICAgICBmb3IgKHZhciBpID0gMC41OyBpIDwgbjsgKytpLCArK2spIHtcbiAgICAgICAgICAgIGNvbnN0IHh2YWwgPSAoKGkgLyBuKSAqICh4cmFuZ2VbMV0gLSB4cmFuZ2VbMF0pKSArIHhyYW5nZVswXTtcbiAgICAgICAgICAgIGNvbnN0IHl2YWwgPSAoMSAtIChqIC8gbSkpICogKHlyYW5nZVsxXSAtIHlyYW5nZVswXSkgKyB5cmFuZ2VbMF07XG4gICAgICAgICAgICB2YWx1ZXNba10gPSBmdW5jKHh2YWwsIHl2YWwpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbHVlc1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdW5pZm9ybShhLCBiKSB7XG4gICAgcmV0dXJuIE1hdGgucmFuZG9tKCkgKiAoYiAtIGEpICsgYTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdlblVuaWZvcm0oYTpudW1iZXIsIGI6bnVtYmVyLCBuOm51bWJlcikge1xuICAgIHJldHVybiByYW5nZSgwLCBuKS5tYXAoeCA9PiB7cmV0dXJuIHt4OiB1bmlmb3JtKGEsIGIpLCB5OiB1bmlmb3JtKGEsYil9fSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5vcm1hbChtZWFuLCB2YXJpYW5jZSkge1xuICAgIHZhciBzID0gMDtcbiAgICB3aGlsZSAocyA9PSAwIHx8IHMgPiAxKSB7XG4gICAgICAgIHZhciB1ID0gdW5pZm9ybSgtMSwxKSxcbiAgICAgICAgdiA9IHVuaWZvcm0oLTEsMSk7XG4gICAgICAgIHMgPSB1ICogdSArIHYgKiB2O1xuICAgIH1cblxuICAgIHZhciBzdGFuZGFyZCA9IE1hdGguc3FydCgtMiAqIE1hdGgubG9nKHMpIC8gcykgKiB1O1xuICAgIHJldHVybiBtZWFuICsgTWF0aC5zcXJ0KHZhcmlhbmNlKSAqIHN0YW5kYXJkO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2VuTm9ybWFsKG1lYW46bnVtYmVyLCB2YXJpYW5jZTpudW1iZXIsIG46bnVtYmVyKSB7XG4gICAgcmV0dXJuIHJhbmdlKDAsIG4pLm1hcCh4ID0+IHtyZXR1cm4ge3g6IG5vcm1hbChtZWFuLCB2YXJpYW5jZSksIHk6IHVuaWZvcm0obWVhbix2YXJpYW5jZSl9fSlcbn0iLCJpbXBvcnQgKiBhcyBkMyBmcm9tICdkMydcbmltcG9ydCB7IFZlY3RvcjJEIH0gZnJvbSAnLi90eXBlcydcbmltcG9ydCB7IFNWR1Zpc0NvbXBvbmVudCwgU1ZHT3B0aW9ucywgTWFyZ2luSW5mbyB9IGZyb20gXCIuL1NWR1Zpc0NvbXBvbmVudFwiXG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2hhcnRPcHRpb25zIGV4dGVuZHMgU1ZHT3B0aW9ucyB7XG4gICAgeHJhbmdlOiBbbnVtYmVyLCBudW1iZXJdXG4gICAgeXJhbmdlOiBbbnVtYmVyLCBudW1iZXJdXG4gICAgcGFkOiBNYXJnaW5JbmZvICAgICAgICAgICAgIC8vIERpc3RhbmNlIGZyb20gZWRnZXMuIERlbWFyY2F0ZSB3aGVuIHRoaW5ncyBhcmUgdG9vIGNsb3NlIHRvIHRoZSBlZGdlXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2hhcnRTY2FsZXMge1xuICAgIHg/OiBkMy5TY2FsZUxpbmVhcjxudW1iZXIsIG51bWJlcj4sXG4gICAgeT86IGQzLlNjYWxlTGluZWFyPG51bWJlciwgbnVtYmVyPixcbn1cbi8qKlxuICogQ3JlYXRlIGEgY2xhc3MgdGhhdCBjYW4gYmUgdXNlZCBmb3IgcGxvdHRpbmcgY2hhcnRzIChsaW5lIGdyYXBocywgYmFyIGdyYXBocywgZXRjLikuXG4gKi9cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBDaGFydDJEPERhdGFJbnRlcmZhY2U+IGV4dGVuZHMgU1ZHVmlzQ29tcG9uZW50PERhdGFJbnRlcmZhY2U+IHtcbiAgICBvcHRpb25zOiBDaGFydE9wdGlvbnNcbiAgICBzY2FsZXM6IENoYXJ0U2NhbGVzXG5cbiAgICAvLyBQdXQgYSB2ZWN0b3IgaW50byB0aGUgY29vcmRpbmF0ZSBzeXN0ZW0gdXNlZCBieSB0aGUgdmlzdWFsaXphdGlvblxuICAgIGludG9WaXModjogVmVjdG9yMkQpIHtcbiAgICAgICAgcmV0dXJuIHsgeDogdGhpcy5zY2FsZXMueCh2LngpLCB5OiB0aGlzLnNjYWxlcy55KHYueSkgfVxuICAgIH1cblxuICAgIC8vIFRha2UgYSB2ZWN0b3IgaW4gdGhlIGNvb3JkaW5hdGUgc3lzdGVtIGFuZCByZXR1cm4gaXQgdG8gdGhlIG1hdGggY29vcmRpbmF0ZXNcbiAgICBpbnRvTWF0aCh2OiBWZWN0b3IyRCkge1xuICAgICAgICByZXR1cm4geyB4OiB0aGlzLnNjYWxlcy54LmludmVydCh2LngpLCB5OiB0aGlzLnNjYWxlcy55LmludmVydCh2LnkpIH1cbiAgICB9XG5cbiAgICAvLyBJbnN0YW50aWF0ZSB0aGUgYXhlcyBvZiB0aGUgY2hhcnQuIFJlaW1wbGVtZW50IGRlcGVuZGluZyBvbiBob3cgd2Ugd2FudCB0aGUgYXhlcyB0byBhcHBlYXJcbiAgICBwcm90ZWN0ZWQgYWJzdHJhY3QgY3JlYXRlQXhlcygpXG5cbiAgICAvLyBJbnN0YW50aWF0ZSB0aGUgc2NhbGVzIGZyb20gdGhlIHhyYW5nZSBhbmQgdGhlIHlyYW5nZVxuICAgIHByb3RlY3RlZCBhYnN0cmFjdCBjcmVhdGVTY2FsZXMoKVxufSIsImltcG9ydCB7IEQzU2VsIH0gZnJvbSBcIi4veGQzXCJcbmltcG9ydCB7IFZpc0NvbXBvbmVudCB9IGZyb20gXCIuL1Zpc0NvbXBvbmVudFwiXG5pbXBvcnQgeyBTaW1wbGVFdmVudEhhbmRsZXIgfSBmcm9tIFwiLi9TaW1wbGVFdmVudEhhbmRsZXJcIjtcbmltcG9ydCB7IFNWRyB9IGZyb20gXCIuL1NWR3BsdXNcIjtcblxuZXhwb3J0IHR5cGUgTWFyZ2luSW5mbyA9IHtcbiAgICB0b3A6bnVtYmVyXG4gICAgcmlnaHQ6bnVtYmVyXG4gICAgYm90dG9tOm51bWJlclxuICAgIGxlZnQ6bnVtYmVyXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU1ZHT3B0aW9ucyB7XG4gICAgbWFyZ2luOiBNYXJnaW5JbmZvXG4gICAgbWF4V2lkdGg6IG51bWJlciAgICAgICAgLy8gVGhlIHRvdGFsIHdpZHRoIG9mIHRoZSBjb21wb25lbnRcbiAgICBtYXhIZWlnaHQ6IG51bWJlciAgICAgICAvLyBUaGUgdG90YWwgaGVpZ2h0IG9mIHRoZSBjb21wb25lbnRcbiAgICB3aWR0aD86IG51bWJlciAgICAgICAgICAvLyBUaGUgdG90YWwgd2lkdGggLSBhcHBsaWNhYmxlIG1hcmdpbnNcbiAgICBoZWlnaHQ/OiBudW1iZXIgICAgICAgICAvLyBUaGUgdG90YWwgaGVpZ2h0IC0gYXBwbGljYWJsZSBtYXJnaW5zXG59XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBTVkdWaXNDb21wb25lbnQ8RGF0YUludGVyZmFjZT4gZXh0ZW5kcyBWaXNDb21wb25lbnQ8RGF0YUludGVyZmFjZT4ge1xuICAgIHByb3RlY3RlZCBsYXllcnM6IHsgbWFpbj86IEQzU2VsLCBmZz86IEQzU2VsLCBiZz86IEQzU2VsLCBba2V5OiBzdHJpbmddOiBEM1NlbCB9O1xuICAgIHByb3RlY3RlZCBzdmc6IEQzU2VsXG4gICAgcHJvdGVjdGVkIG9wdGlvbnM6IFNWR09wdGlvbnMgPSB7XG4gICAgICAgIG1hcmdpbjogeyB0b3A6IDAsIHJpZ2h0OiAwLCBib3R0b206IDAsIGxlZnQ6IDAgfSxcbiAgICAgICAgbWF4V2lkdGg6IDQ1MCxcbiAgICAgICAgbWF4SGVpZ2h0OiA0NTAsXG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGNvbnN0cnVjdG9yKGQzcGFyZW50OiBEM1NlbCwgZXZlbnRIYW5kbGVyPzogU2ltcGxlRXZlbnRIYW5kbGVyLCBvcHRpb25zOiB7fSA9IHt9KSB7XG4gICAgICAgIHN1cGVyKGQzcGFyZW50LCBldmVudEhhbmRsZXIpXG4gICAgfVxuXG4gICAgLyoqIFxuICAgICAqIE11c3QgYmUgY2FsbGVkIGltbWVkaWF0ZWx5IGFmdGVyIHRoZSBgc3VwZXIoKWAgY29uc3RydWN0b3IgY2FsbCBvZiBpbmhlcmV0aW5nIGNsYXNzZXMuXG4gICAgICogXG4gICAgICogLSBDYWxjdWxhdGVzIGhlaWdodCBhbmQgd2lkdGggZm9yIG9wdGlvbnNcbiAgICAgKiAtIEFkZHMgJ3N2ZycgYW5kICdiYXNlJyBvYmplY3RzIHRvIHRoZSBkaXYuXG4gICAgICogLSBBZGRzIGxheWVycyBvbiB0aGUgYmFzZSB0byB3b3JrIHdpdGggaWYgcGFzc2VkXG4gICAgICogLSBSdW5zIGRlZmluZWQgc3RhdGljIGluaXRpYWxpemF0aW9uIGRlZmluZWQgaW4gYGluaXQoKWBcbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgaW5pdFNWRyhvcHRpb25zID0ge30sIGRlZmF1bHRMYXllcnMgPSBbXSkge1xuICAgICAgICB0aGlzLnVwZGF0ZU9wdGlvbnMob3B0aW9ucylcbiAgICAgICAgY29uc3Qgb3AgPSB0aGlzLm9wdGlvbnM7XG4gICAgICAgIG9wLndpZHRoID0gb3AubWF4V2lkdGggLSAob3AubWFyZ2luLmxlZnQgKyBvcC5tYXJnaW4ucmlnaHQpXG4gICAgICAgIG9wLmhlaWdodCA9IG9wLm1heEhlaWdodCAtIChvcC5tYXJnaW4udG9wICsgb3AubWFyZ2luLmJvdHRvbSlcblxuICAgICAgICB0aGlzLnN2ZyA9IFNWRy5hZGRTVkcodGhpcy5wYXJlbnQsIG9wLndpZHRoLCBvcC5oZWlnaHQsIG9wLm1hcmdpbilcbiAgICAgICAgdGhpcy5iYXNlID0gU1ZHLmdyb3VwKHRoaXMuc3ZnLCAnJyk7IC8vIExldCBIVE1MIGF1dGhvciBhc3NpZ24gdGhlIGNsYXNzIG5hbWUgYW5kIElEXG4gICAgICAgIHRoaXMubGF5ZXJzID0ge307XG4gICAgICAgIGlmIChkZWZhdWx0TGF5ZXJzKSB7XG4gICAgICAgICAgICAvLyBjb25zdHJ1Y3Rpb24gb3JkZXIgaXMgaW1wb3J0YW50ICFcbiAgICAgICAgICAgIGRlZmF1bHRMYXllcnMuZm9yRWFjaChsYXllciA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5sYXllcnNbbGF5ZXJdID0gU1ZHLmdyb3VwKHRoaXMuYmFzZSwgbGF5ZXIpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmluaXQoKVxuICAgIH1cbn0iLCJpbXBvcnQgKiBhcyBkMyBmcm9tIFwiZDNcIlxuaW1wb3J0ICogYXMgUiBmcm9tICdyYW1kYSdcbmltcG9ydCB7TWFyZ2luSW5mb30gZnJvbSAnLi9TVkdWaXNDb21wb25lbnQnXG5pbXBvcnQge0QzU2VsfSBmcm9tICcuLi91dGlsL3hkMydcblxuLyoqXG4gKiBDcmVhdGVkIGJ5IGhlbiBvbiA1LzE1LzE3LlxuICogTW9kaWZpZWQgYnkgaG9vIG9uIDQvMTYvMTkuXG4gKi9cblxuZXhwb3J0IGNsYXNzIFNWRyB7XG4gICAgXG4gICAgc3RhdGljIHRyYW5zbGF0ZSh4Om51bWJlciwgeTpudW1iZXIpOnN0cmluZyB7XG4gICAgICAgIHJldHVybiBgdHJhbnNsYXRlKCR7eH0sJHt5fSlgXG4gICAgfVxuXG4gICAgc3RhdGljIHJvdGF0ZShkZWc6bnVtYmVyLCBvcmlnPzp7eDpudW1iZXIsIHk6bnVtYmVyfSk6c3RyaW5nIHtcbiAgICAgICAgaWYgKG9yaWcgPT0gbnVsbCkgXG4gICAgICAgICAgICByZXR1cm4gYHJvdGF0ZSgke2RlZ30pYFxuXG4gICAgICAgIHJldHVybiBgcm90YXRlKCR7ZGVnfSwke29yaWcueH0sJHtvcmlnLnl9KWBcbiAgICB9XG5cbiAgICBzdGF0aWMgc2tldyhkZWd4Om51bWJlciwgZGVneT0wKSB7XG4gICAgICAgIHJldHVybiBgc2tldygke2RlZ3h9LCAke2RlZ3l9KWBcbiAgICB9XG5cbiAgICBzdGF0aWMgc2tld1goZGVnOm51bWJlcikge1xuICAgICAgICByZXR1cm4gYHNrZXdYKCR7ZGVnfSlgXG4gICAgfVxuXG4gICAgc3RhdGljIHNrZXdZKGRlZzpudW1iZXIpIHtcbiAgICAgICAgcmV0dXJuIGBza2V3WSgke2RlZ30pYFxuICAgIH1cblxuICAgIHN0YXRpYyBzY2FsZSh4Om51bWJlciwgeT86bnVtYmVyKTpzdHJpbmcge1xuICAgICAgICBjb25zdCB5c2NhbGUgPSB5ICE9IG51bGwgPyB5IDogeDtcblxuICAgICAgICByZXR1cm4gYHNjYWxlKCR7eH0sICR7eXNjYWxlfSlgXG4gICAgfVxuXG4gICAgc3RhdGljIGdyb3VwKHBhcmVudCwgY2xhc3NlcywgcG9zID0ge3g6IDAsIHk6IDB9KSB7XG4gICAgICAgIHJldHVybiBwYXJlbnQuYXBwZW5kKCdnJylcbiAgICAgICAgICAgIC5hdHRyKCdjbGFzcycsIGNsYXNzZXMpXG4gICAgICAgICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBTVkcudHJhbnNsYXRlKHBvcy54LCBwb3MueSkpXG4gICAgfVxuXG4gICAgc3RhdGljIGFkZFNWRyhwYXJlbnQ6RDNTZWwsIHdpZHRoOm51bWJlciwgaGVpZ2h0Om51bWJlciwgbWFyZ2luOk1hcmdpbkluZm8pOkQzU2VsIHtcblxuICAgICAgICB2YXIgc3ZnID0gcGFyZW50LmFwcGVuZChcInN2Z1wiKVxuICAgICAgICAgICAgLmF0dHIoXCJ3aWR0aFwiLCBcIjEwMCVcIilcbiAgICAgICAgICAgIC5hdHRyKFwiaGVpZ2h0XCIsIFwiMTAwJVwiKVxuICAgICAgICAgICAgLmF0dHIoXCJ2aWV3Qm94XCIsIFwiMCAwIFwiICsgKHdpZHRoICsgbWFyZ2luLmxlZnQgKyBtYXJnaW4ucmlnaHQpICsgXCIgXCIgKyAoaGVpZ2h0ICsgbWFyZ2luLnRvcCArIG1hcmdpbi5ib3R0b20pKVxuICAgICAgICAgICAgLmF0dHIoXCJwcmVzZXJ2ZUFzcGVjdFJhdGlvXCIsIFwieE1pZFlNaWQgbWVldFwiKVxuICAgICAgICAuYXBwZW5kKFwiZ1wiKVxuICAgICAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgU1ZHLnRyYW5zbGF0ZShtYXJnaW4ubGVmdCwgbWFyZ2luLnRvcCkpO1xuXG4gICAgICAgIHJldHVybiBzdmc7XG4gICAgfVxuXG4gICAgc3RhdGljIGFkZEFycm93cyhwYXJlbnQ6RDNTZWwpIHtcbiAgICAgICAgcGFyZW50LmFwcGVuZCgnZGVmcycpXG4gICAgICAgICAgICAuYXBwZW5kKCdtYXJrZXInKVxuICAgICAgICAgICAgLmF0dHIoXCJpZFwiLCBcImFycm93XCIpXG4gICAgICAgICAgICAuYXR0cihcIm1hcmtlclVuaXRzXCIsIFwic3Ryb2tlV2lkdGhcIilcbiAgICAgICAgICAgIC5hdHRyKFwibWFya2VyV2lkdGhcIiwgOSlcbiAgICAgICAgICAgIC5hdHRyKFwibWFya2VySGVpZ2h0XCIsIDkpXG4gICAgICAgICAgICAuYXR0cihcInZpZXdCb3hcIiwgXCIwIDAgMTIgMTJcIilcbiAgICAgICAgICAgIC5hdHRyKFwicmVmWFwiLCA2KVxuICAgICAgICAgICAgLmF0dHIoXCJyZWZZXCIsIDYpXG4gICAgICAgICAgICAuYXR0cihcIm9yaWVudFwiLCAnYXV0bycpXG4gICAgICAgICAgICAuYXBwZW5kKCdwYXRoJylcbiAgICAgICAgICAgIC5hdHRyKCdkJywgXCJNMiwyIEwxMCw2IEwyLDEwIEw2LDYgTDIsMlwiKVxuICAgICAgICAgICAgLnN0eWxlKFwiZmlsbDogI2YwMFwiKVxuICAgIH1cblxuICAgIHN0YXRpYyBpbnNlcnRBcnJvdyhwYXJlbnQ6RDNTZWwsIHgxOm51bWJlciwgeTE6bnVtYmVyLCB4MjpudW1iZXIsIHkyOm51bWJlciwgY29sb3I6c3RyaW5nLCB3aWR0aDpudW1iZXIpIHtcbiAgICAgICAgcmV0dXJuIHBhcmVudC5hcHBlbmQoXCJsaW5lXCIpXG4gICAgICAgICAgICAgLmF0dHIoXCJ4MVwiLHgxKSAgXG4gICAgICAgICAgICAgLmF0dHIoXCJ5MVwiLHkxKSAgXG4gICAgICAgICAgICAgLmF0dHIoXCJ4MlwiLHgyKSAgXG4gICAgICAgICAgICAgLmF0dHIoXCJ5MlwiLHkyKSAgXG4gICAgICAgICAgICAgLmF0dHIoXCJzdHJva2VcIixjb2xvcikgIFxuICAgICAgICAgICAgIC5hdHRyKFwic3Ryb2tlLXdpZHRoXCIsd2lkdGgpICBcbiAgICAgICAgICAgICAuYXR0cihcIm1hcmtlci1lbmRcIixcInVybCgjYXJyb3cpXCIpOyAgXG4gICAgfVxuXG4gICAgc3RhdGljIG1lc2hncmlkKG54OiBudW1iZXIsIG55OiBudW1iZXIsIHhyYW5nZTogbnVtYmVyW10sIHlyYW5nZTogbnVtYmVyW10pIHtcbiAgICAgICAgY29uc3Qgc2NhbGUgPSAodmFsczpudW1iZXJbXSwgcmFuZ2UpID0+IHZhbHMubWFwKHYgPT4gKHYgKiAocmFuZ2VbMV0gLSByYW5nZVswXSkpICsgcmFuZ2VbMF0pO1xuXG4gICAgICAgIGNvbnN0IHBvaW50aWZ5ID0gKHh2YWxzOm51bWJlcltdLCB5dmFsczpudW1iZXJbXSkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgb3V0ID0gW11cbiAgICAgICAgICAgIHh2YWxzLmZvckVhY2goeCA9PiB7XG4gICAgICAgICAgICAgICAgeXZhbHMuZm9yRWFjaCh5ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgb3V0LnB1c2goe3g6IHgsIHk6IHl9KVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgcmV0dXJuIG91dFxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgeHZhbHMgPSBzY2FsZShSLnJhbmdlKDAsIG54KS5tYXAoeCA9PiAoeCArIDAuNSkgLyBueCksIHhyYW5nZSlcbiAgICAgICAgY29uc3QgeXZhbHMgPSBzY2FsZShSLnJhbmdlKDAsIG55KS5tYXAoeSA9PiAoeSArIDAuNSkgLyBueSksIHlyYW5nZSlcbiAgICAgICAgcmV0dXJuIHBvaW50aWZ5KHh2YWxzLCB5dmFscylcbiAgICB9XG5cbn1cblxuZXhwb3J0IGNsYXNzIFNWR01lYXN1cmVtZW50cyB7XG5cbiAgICBwcml2YXRlIG1lYXN1cmVFbGVtZW50OiBkMy5TZWxlY3Rpb248YW55LCBhbnksIGFueSwgYW55PjtcblxuICAgIGNvbnN0cnVjdG9yKGJhc2VFbGVtZW50LCBjbGFzc2VzID0gJycpIHtcbiAgICAgICAgdGhpcy5tZWFzdXJlRWxlbWVudCA9IGJhc2VFbGVtZW50LmFwcGVuZCgndGV4dCcpXG4gICAgICAgICAgICAuYXR0cigneCcsIDApXG4gICAgICAgICAgICAuYXR0cigneScsIC0yMClcbiAgICAgICAgICAgIC5hdHRyKCdjbGFzcycsIGNsYXNzZXMpXG5cbiAgICB9XG5cbiAgICB0ZXh0TGVuZ3RoKHRleHQsIHN0eWxlID0gbnVsbCkge1xuICAgICAgICB0aGlzLm1lYXN1cmVFbGVtZW50LmF0dHIoJ3N0eWxlJywgc3R5bGUpO1xuICAgICAgICB0aGlzLm1lYXN1cmVFbGVtZW50LnRleHQodGV4dCk7XG4gICAgICAgIGNvbnN0IHRsID0gKDxTVkdUZXh0RWxlbWVudD4gdGhpcy5tZWFzdXJlRWxlbWVudC5ub2RlKCkpLmdldENvbXB1dGVkVGV4dExlbmd0aCgpO1xuICAgICAgICB0aGlzLm1lYXN1cmVFbGVtZW50LnRleHQoJycpO1xuXG4gICAgICAgIHJldHVybiB0bDtcbiAgICB9XG59IiwiLyoqXG4gKiBDcmVhdGVkIGJ5IGhlbiBvbiA1LzE1LzE3LlxuICogTW9kaWZpZWQgYnkgaG9vIG9uIDQvMTYvMTkuXG4gKi9cbmV4cG9ydCBjbGFzcyBTaW1wbGVFdmVudEhhbmRsZXIge1xuXG4gICAgZWxlbWVudDogRWxlbWVudDtcbiAgICBldmVudExpc3RlbmVyczogb2JqZWN0W107XG5cbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50OiBFbGVtZW50KSB7XG4gICAgICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgICAgIHRoaXMuZXZlbnRMaXN0ZW5lcnMgPSBbXVxuICAgIH1cblxuICAgIGJpbmQoZXZlbnROYW1lczogc3RyaW5nLCBldmVudEZ1bmN0aW9uOiBGdW5jdGlvbikge1xuICAgICAgICBmb3IgKGNvbnN0IGV2ZW50TmFtZSBvZiBldmVudE5hbWVzLnNwbGl0KCcgJykpIHtcbiAgICAgICAgICAgIHRoaXMuZXZlbnRMaXN0ZW5lcnMucHVzaCh7ZXZlbnROYW1lLCBldmVudEZ1bmN0aW9ufSk7XG4gICAgICAgICAgICBjb25zdCBldmVudEZ1bmN0aW9uV3JhcCA9IGUgPT4gZXZlbnRGdW5jdGlvbihlLmRldGFpbCwgZSk7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGV2ZW50RnVuY3Rpb25XcmFwLCBmYWxzZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRMaXN0ZW5lcnMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmV2ZW50TGlzdGVuZXJzO1xuICAgIH1cblxuICAgIHRyaWdnZXIoZXZlbnROYW1lOiBzdHJpbmcsIGRldGFpbDogb2JqZWN0KSB7XG4gICAgICAgIHRoaXMuZWxlbWVudC5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChldmVudE5hbWUsIHtkZXRhaWx9KSk7XG4gICAgfVxufSIsIi8qKlxuICogQ3JlYXRlZCBieSBIZW5kcmlrIFN0cm9iZWx0IChoZW5kcmlrLnN0cm9iZWx0LmNvbSkgb24gMTIvMy8xNi5cbiAqIE1vZGlmaWVkIGJ5IEJlbiBIb292ZXIgb24gNC8xNi8yMDE5XG4gKi9cbmltcG9ydCB7IEQzU2VsIH0gZnJvbSBcIi4veGQzXCJcbmltcG9ydCB7IFNpbXBsZUV2ZW50SGFuZGxlciB9IGZyb20gXCIuL1NpbXBsZUV2ZW50SGFuZGxlclwiO1xuXG4vKipcbiAqIFNob3VsZCBoYXZlIFZDb21wb25lbnRIVE1MIGFuZCBWQ29tcG9uZW50U1ZHXG4gKlxuICogQ29tbW9uIFByb3BlcnRpZXM6XG4gKiAtIGV2ZW50c1xuICogLSBldmVudEhhbmRsZXIgKFYgaW1wb3J0YW50KVxuICogLSBvcHRpb25zIChNYWludGFpbnMgcHVibGljIHN0YXRlLiBDYW4gZXhwb3NlIHRoZXNlIHdpdGggZ2V0L3NldCBmdW5jdGlvbnMgd2l0aCBhdXRvIHVwZGF0ZSlcbiAqIC0gX2N1cnJlbnQgKE1haW50YWlucyBwcml2YXRlIHN0YXRlKVxuICogLSBjc3NOYW1lIChzeW5jZWQgd2l0aCBjb3JyZXNwb25kaW5nIENTUyBmaWxlKVxuICogLSBwYXJlbnQgKEhUTUwgaXMgZGl2IGNvbnRhaW5pbmcgdGhlIGJhc2UsIFNWRyBpcyBTVkcgZWxlbWVudClcbiAqIC0gYmFzZSAoSFRNTCBpcyBkaXYgd2l0aCBjc3NfbmFtZSBlc3RhYmxpc2hlZClcbiAqIC0gX2RhdGEgKERhdGEgdXNlZCB0byBjcmVhdGUgYW5kIHJlbmRlciB0aGUgY29tcG9uZW50KVxuICogLSBfcmVuZGVyRGF0YSAoRGF0YSBuZWVkZWQgdG8gZGlzcGxheS4gVGhpcyBtYXkgbm90IGJlIG5lZWRlZCwgYnV0IGlzIGN1cnJlbnRseSB1c2VkIGluIGhpc3RvZ3JhbSkgKiAqIENvbW1vbiBNZXRob2RzOlxuICogLSBjb25zdHJ1Y3RvclxuICogLSBfcmVuZGVyKCkgICAgICBDb25zaWRlciByZXBsYWNpbmcgd2l0aCBgX3VwZGF0ZURhdGEoKWAgdGhhdCB1cGRhdGVzIGFsbCBkYXRhIGF0IG9uY2VcbiAqIC0gdXBkYXRlKCkgICAgICAgQ29uc2lkZXIgcmVwbGFjaW5nIHRoaXMgd2l0aCBgZGF0YSgpYCB0aGF0IGF1dG8gdXBkYXRlcyBkYXRhXG4gKiAtIHJlZHJhdygpXG4gKiAtIGRlc3Ryb3koKVxuICovXG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBWaXNDb21wb25lbnQ8RGF0YUludGVyZmFjZT4ge1xuICAgIC8qKlxuICAgICAqIEdpdmVuIGFuIElELCBjcmVhdGUgYSBuZXcgaW5zdGFuY2Ugb2YgdGhpcyBjbGFzcyB3aXRoIHRoZSBldmVudHMgYW5kIGNzc19uYW1lIG1vZGlmaWVkIGJ5IHRoZSBpZFxuICAgICAqL1xuICAgIG5ld0luc3RhbmNlKGlkOiBudW1iZXIpIHsgfVxuXG4gICAgLyoqXG4gICAgICogVGhlIHN0YXRpYyBwcm9wZXJ0eSB0aGF0IGNvbnRhaW5zIGFsbCBjbGFzcyByZWxhdGVkIGV2ZW50cy5cbiAgICAgKiBTaG91bGQgYmUgb3ZlcndyaXR0ZW4gYW5kIGV2ZW50IHN0cmluZ3MgaGF2ZSB0byBiZSB1bmlxdWUhIVxuICAgICAqL1xuICAgIHByb3RlY3RlZCBnZXQgZXZlbnRzKCkge1xuICAgICAgICBjb25zdCBldmVudCA9IChldmVudE5hbWUpID0+IGAke3RoaXMuYmFzZU5hbWV9XyR7ZXZlbnROYW1lfWBcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG5vRXZlbnQ6IGV2ZW50KCdOb0V2ZW50JylcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByb3RlY3RlZCBnZXQgYmFzZU5hbWUoKSB7XG4gICAgICAgIHJldHVybiBgJHt0aGlzLmNzc25hbWV9X0lEJHt0aGlzLklEfWBcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgY3NzbmFtZTogc3RyaW5nOyAgICAgICAgICAgIC8vIE1ha2UgdGhlIHNhbWUgYXMgdGhlIGNvcnJlc3BvbmRpbmcgY3NzIGZpbGVcbiAgICBwcm90ZWN0ZWQgSUQ6IG51bWJlcjsgICAgICAgICAgICAgICAgIC8vIElEIGFzc29jaWF0ZWQgdG8gdW5pcXVlIGluc3RhbmNlIG9mIHZpc3VhbGl6YXRpb24uIERlZmF1bHRzIHRvIDBcblxuICAgIHByb3RlY3RlZCBhYnN0cmFjdCBvcHRpb25zOiB7fTtcbiAgICBwcm90ZWN0ZWQgZXZlbnRIYW5kbGVyOiBTaW1wbGVFdmVudEhhbmRsZXI7XG4gICAgcGFyZW50OiBEM1NlbDsgICAgICAgICAgICAgICAgICAgICAgICAvLyBQYXJlbnQgZDMgc2VsZWN0aW9uXG4gICAgYmFzZTogRDNTZWw7ICAgICAgICAgICAgICAgICAvLyBkMyBzZWxlY3Rpb24gdGhhdCBpcyBjcmVhdGVkIGJ5IHRoZSBpbml0XG4gICAgcHJvdGVjdGVkIF9kYXRhOiBEYXRhSW50ZXJmYWNlO1xuICAgIHByb3RlY3RlZCByZW5kZXJEYXRhOiB1bmtub3duO1xuXG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge0QzU2VsfSBkM3BhcmVudCAgRDMgc2VsZWN0aW9uIG9mIHBhcmVudCBTVkcgRE9NIEVsZW1lbnRcbiAgICAgKiBAcGFyYW0ge1NpbXBsZUV2ZW50SGFuZGxlcn0gZXZlbnRIYW5kbGVyIGEgZ2xvYmFsIGV2ZW50IGhhbmRsZXIgb2JqZWN0IG9yICdudWxsJyBmb3IgbG9jYWwgZXZlbnQgaGFuZGxlclxuICAgICAqL1xuICAgIHByb3RlY3RlZCBjb25zdHJ1Y3RvcihkM3BhcmVudDogRDNTZWwsIGV2ZW50SGFuZGxlcj86IFNpbXBsZUV2ZW50SGFuZGxlciwgSUQgPSAwKSB7XG4gICAgICAgIHRoaXMucGFyZW50ID0gZDNwYXJlbnQ7XG4gICAgICAgIHRoaXMuZXZlbnRIYW5kbGVyID0gZXZlbnRIYW5kbGVyIHx8IG5ldyBTaW1wbGVFdmVudEhhbmRsZXIodGhpcy5wYXJlbnQubm9kZSgpKTtcbiAgICAgICAgdGhpcy5JRCA9IElEO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNob3VsZCBiZSBvdmVyd3JpdHRlbiB0byBjcmVhdGUgbmVlZGVkIHN0YXRpYyBET00gZWxlbWVudHNcbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgYWJzdHJhY3QgaW5pdCgpO1xuXG4gICAgLyoqXG4gICAgICogRm9sbG93IHRoZSBEMyBjb252ZW50aW9uOiByZXRyaWV2ZSB0aGUgZGF0YSBpbnNpZGUgdGhlIGNsYXNzIGlmIG51bGwuIE90aGVyd2lzZSwgc2V0IHRoZSBkYXRhIGFuZCByZXR1cm4gJ3RoaXMnXG4gICAgICovXG4gICAgYWJzdHJhY3QgZGF0YSgpOiBEYXRhSW50ZXJmYWNlO1xuICAgIGFic3RyYWN0IGRhdGEoeDogRGF0YUludGVyZmFjZSk6IHRoaXM7XG5cbiAgICAvKipcbiAgICAgKiBTZXQgbWFueSBvcHRpb25zIGF0IG9uY2VcbiAgICAgKlxuICAgICAqIEBwYXJhbSBvcHRpb25zIFJlc2V0IG9wdGlvbnMgdG8gcGFzc2VkIHZhbHVlc1xuICAgICAqL1xuICAgIHVwZGF0ZU9wdGlvbnMob3B0aW9uczoge30pIHtcbiAgICAgICAgT2JqZWN0LmtleXMob3B0aW9ucykuZm9yRWFjaChrID0+IHRoaXMub3B0aW9uc1trXSA9IG9wdGlvbnNba10pO1xuICAgIH1cblxuICAgIGRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMuYmFzZS5yZW1vdmUoKTtcbiAgICB9XG59IiwiaW1wb3J0ICogYXMgZDMgZnJvbSAnZDMnXG5pbXBvcnQgeyBCYXNlVHlwZSB9IGZyb20gJ2QzJ1xuXG5leHBvcnQgY29uc3QgbGluc3BhY2UgPSAoc3RhcnQsIGVuZCwgbikgPT4ge1xuICAgIGNvbnN0IGRlbHRhID0gKGVuZCAtIHN0YXJ0KSAvIChuIC0gMSlcbiAgICByZXR1cm4gZDMucmFuZ2Uoc3RhcnQsIGVuZCArIGRlbHRhLCBkZWx0YSkuc2xpY2UoMCwgbilcbn1cblxuZXhwb3J0IHR5cGUgRDNTZWwgPSBkMy5TZWxlY3Rpb248YW55LCBhbnksIGFueSwgYW55PlxuZXhwb3J0IHR5cGUgZDNTPFQgZXh0ZW5kcyBCYXNlVHlwZSwgVSA9IGFueT4gPSBkMy5TZWxlY3Rpb248VCwgVSwgYW55LCBhbnk+XG5cbmQzLnNlbGVjdGlvbi5wcm90b3R5cGUuY2xlYXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5zZWxlY3RBbGwoJyonKS5yZW1vdmUoKTtcbiAgICByZXR1cm4gdGhpcztcbn1cblxuZDMuc2VsZWN0aW9uLnByb3RvdHlwZS50b2dnbGVDbGFzcyA9IGZ1bmN0aW9uIChjbGFzc05hbWUpIHtcbiAgICB0aGlzLmNsYXNzZWQoY2xhc3NOYW1lLCAhdGhpcy5jbGFzc2VkKGNsYXNzTmFtZSkpO1xuICAgIHJldHVybiB0aGlzO1xufVxuXG5kMy5zZWxlY3Rpb24ucHJvdG90eXBlLnNob3cgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5zdHlsZSgnZGlzcGxheScsICdpbml0aWFsJyk7XG4gICAgcmV0dXJuIHRoaXM7XG59XG5cbmQzLnNlbGVjdGlvbi5wcm90b3R5cGUuaGlkZSA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLnN0eWxlKCdkaXNwbGF5JywgJ25vbmUnKTtcbiAgICByZXR1cm4gdGhpcztcbn1cblxuZDMuc2VsZWN0aW9uLnByb3RvdHlwZS50b2dnbGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGlzSGlkZGVuID0gdGhpcy5zdHlsZSgnZGlzcGxheScpID09ICdub25lJztcbiAgICByZXR1cm4gdGhpcy5zdHlsZSgnZGlzcGxheScsIGlzSGlkZGVuID8gJ2luaGVyaXQnIDogJ25vbmUnKTtcbn1cblxuZDMuc2VsZWN0aW9uLnByb3RvdHlwZS5hZnRlciA9IGZ1bmN0aW9uICh0YWdOYW1lKSB7XG4gICAgdmFyIGVsZW1lbnRzID0gW107XG5cbiAgICB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnTmFtZSk7XG4gICAgICAgIHRoaXMucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoZWxlbWVudCwgdGhpcy5uZXh0U2libGluZyk7XG4gICAgICAgIGVsZW1lbnRzLnB1c2goZWxlbWVudCk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gZDMuc2VsZWN0QWxsKGVsZW1lbnRzKTtcbn1cblxuZDMuc2VsZWN0aW9uLnByb3RvdHlwZS5iZWZvcmUgPSBmdW5jdGlvbiAodGFnTmFtZSkge1xuICAgIHZhciBlbGVtZW50cyA9IFtdO1xuXG4gICAgdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZ05hbWUpO1xuICAgICAgICB0aGlzLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGVsZW1lbnQsIHRoaXMpO1xuICAgICAgICBlbGVtZW50cy5wdXNoKGVsZW1lbnQpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGQzLnNlbGVjdEFsbChlbGVtZW50cyk7XG59IiwiaW1wb3J0ICogYXMgZDMgZnJvbSAnZDMnXG5pbXBvcnQgeyBEM1NlbCB9IGZyb20gJy4uL3V0aWwveGQzJ1xuaW1wb3J0ICogYXMgUiBmcm9tICdyYW1kYSdcbmltcG9ydCB7IGxlZ2VuZENvbG9yIH0gZnJvbSAnZDMtc3ZnLWxlZ2VuZCdcbmltcG9ydCB7IFZlY3RvcjJEIH0gZnJvbSAnLi4vdXRpbC90eXBlcydcbmltcG9ydCB7IFNWR09wdGlvbnMsIFNWR1Zpc0NvbXBvbmVudCB9IGZyb20gJy4uL3V0aWwvU1ZHVmlzQ29tcG9uZW50J1xuaW1wb3J0IHsgU2ltcGxlRXZlbnRIYW5kbGVyIH0gZnJvbSAnLi4vdXRpbC9TaW1wbGVFdmVudEhhbmRsZXInO1xuaW1wb3J0IHsgU1ZHIH0gZnJvbSAnLi4vdXRpbC9TVkdwbHVzJ1xuaW1wb3J0IHsgZ2V0Q29udG91clZhbHVlcyB9IGZyb20gJy4uL3Bsb3R0aW5nJ1xuaW1wb3J0IHsgVXBkYXRlciwgQmxvY2tVcGRhdGVyIH0gZnJvbSAnLi4vVXBkYXRlcidcbmltcG9ydCB7IGludGVydmFsLCBmcm9tRXZlbnQgfSBmcm9tICdyeGpzJ1xuaW1wb3J0IHsgbWFwLCB0YXAsIHRha2UsIHN0YXJ0V2l0aCwgc2Nhbiwgc3dpdGNoTWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnXG5cbnR5cGUgVCA9IG51bWJlcltdXG5cbmludGVyZmFjZSBHcmFwaE9wdGlvbnMgZXh0ZW5kcyBTVkdPcHRpb25zIHtcbiAgICB4cmFuZ2U6IFtudW1iZXIsIG51bWJlcl1cbiAgICB5cmFuZ2U6IFtudW1iZXIsIG51bWJlcl1cbiAgICBuOiBudW1iZXIgICAgICAgICAgICAgICAgICAgLy8gTnVtYmVyIG9mIG1lc2hncmlkIHBvaW50cyBhbG9uZyB0aGUgeCBheGlzXG4gICAgbTogbnVtYmVyICAgICAgICAgICAgICAgICAgIC8vIE51bWJlciBvZiBtZXNoZ3JpZCBwb2ludHMgYWxvbmcgdGhlIHkgYXhpc1xuICAgIHBhZDogbnVtYmVyICAgICAgICAgICAgICAgICAvLyBBbm5vdGF0aW9ucyB0aGF0IGhhcHBlbiBpbiB0aGUgbWFyZ2luIG11c3QgdGFrZSBwbGFjZSBgcGFkYCBkaXN0YW5jZSBmcm9tIHRoZSBtYWluIGdyYXBoXG59XG5cbmludGVyZmFjZSBHcmFwaFNjYWxlcyB7XG4gICAgeD86IGQzLlNjYWxlTGluZWFyPG51bWJlciwgbnVtYmVyPixcbiAgICB5PzogZDMuU2NhbGVMaW5lYXI8bnVtYmVyLCBudW1iZXI+LFxuICAgIGNvbG9yPzogZDMuU2NhbGVMb2dhcml0aG1pYzxudW1iZXIsIHN0cmluZz4sXG4gICAgY3VydmU/OiBkMy5DdXJ2ZUNhdG11bGxSb21GYWN0b3J5LFxuICAgIGNvbnRvdXJzPzogZDMuQ29udG91cnMsXG4gICAgdGhyZXNob2xkcz86IG51bWJlcltdXG59XG5cbmludGVyZmFjZSBHcmFwaFNlbHMge1xuICAgIHhheGlzPzogRDNTZWxcbiAgICB5YXhpcz86IEQzU2VsXG4gICAgbGVnZW5kPzogRDNTZWxcbiAgICB0aXA/OiBEM1NlbFxuICAgIHhsYWJlbD86IEQzU2VsXG4gICAgeWxhYmVsPzogRDNTZWxcbiAgICBjaXJjbGU/OiBEM1NlbFxuICAgIGFycm93cz86IEQzU2VsW11cbn1cblxuZXhwb3J0IGNsYXNzIENvbnRvdXJQbG90IGV4dGVuZHMgU1ZHVmlzQ29tcG9uZW50PFQ+IHtcbiAgICBjc3NuYW1lID0gXCJzaW1wbGUtZ3JhcGhcIlxuXG4gICAgX2RhdGE6IFRcblxuICAgIG9wdGlvbnM6IEdyYXBoT3B0aW9ucyA9IHtcbiAgICAgICAgbWF4V2lkdGg6IDQ1MCxcbiAgICAgICAgbWF4SGVpZ2h0OiA1MDAsXG4gICAgICAgIG1hcmdpbjogeyB0b3A6IDUwLCByaWdodDogNzUsIGJvdHRvbTogMTI1LCBsZWZ0OiA1MCB9LFxuICAgICAgICBwYWQ6IDMwLFxuICAgICAgICB4cmFuZ2U6IFswLCAyLjVdLFxuICAgICAgICB5cmFuZ2U6IFswLCAyLjVdLFxuICAgICAgICBuOiA1MDAsXG4gICAgICAgIG06IDUwMCxcbiAgICB9IC8vICNzdGF0ZVxuXG4gICAgc2NhbGVzOiBHcmFwaFNjYWxlcyA9IHt9XG4gICAgc2VsczogR3JhcGhTZWxzID0ge31cblxuXG4gICAgLy8gT3RoZXJcbiAgICBfY3VycjogVmVjdG9yMkQgPSB7IHg6IDAuMSwgeTogMC4yIH0gLy8gI3N0YXRlXG4gICAgdGlja2VyXG4gICAgdXBkYXRlcjogVXBkYXRlclxuXG4gICAgLy8gU3BlY2lmeSB0aGUgZ3JpZCBmb3IgdGhlIGNvbnRvdXJzXG4gICAgaWRlYWw6IG51bWJlciA9IDEgLy8gI3N0YXRlXG5cbiAgICBjb25zdHJ1Y3RvcihkM3BhcmVudDogRDNTZWwsIGV2ZW50SGFuZGxlcj86IFNpbXBsZUV2ZW50SGFuZGxlciwgb3B0aW9ucyA9IHt9KSB7XG4gICAgICAgIHN1cGVyKGQzcGFyZW50LCBldmVudEhhbmRsZXIsIG9wdGlvbnMpXG4gICAgICAgIHN1cGVyLmluaXRTVkcodGhpcy5vcHRpb25zKVxuICAgICAgICB0aGlzLmJhc2UuY2xhc3NlZCh0aGlzLmNzc25hbWUsIHRydWUpXG4gICAgICAgIHRoaXMudXBkYXRlciA9IG5ldyBVcGRhdGVyKClcbiAgICAgICAgdGhpcy5pbml0UGxvdCgpXG4gICAgfVxuXG4gICAgc2V0VXBkYXRlcihuYW1lOiAnYmxvY2snIHwgJ2Z1bGwnKSB7XG4gICAgICAgIGNvbnN0IGFyZ3MgPSBbdGhpcy5xKCksIHRoaXMuZXRhKCldXG5cbiAgICAgICAgaWYgKG5hbWUgPT0gJ2Jsb2NrJykge1xuICAgICAgICAgICAgdGhpcy51cGRhdGVyID0gbmV3IEJsb2NrVXBkYXRlcih0aGlzLnEoKSwgdGhpcy5ldGEoKSlcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChuYW1lID09ICdmdWxsJykge1xuICAgICAgICAgICAgdGhpcy51cGRhdGVyID0gbmV3IFVwZGF0ZXIodGhpcy5xKCksIHRoaXMuZXRhKCkpXG4gICAgICAgIH1cblxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiUGxlYXNlIGVudGVyIGEgdmFsaWQgaW5wdXQgYXMgdXBkYXRlclwiKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnVwZGF0ZVF1aXZlcnMoKVxuICAgIH1cblxuICAgIHBsb3RNaW5pbXVtKCkge1xuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICAgICAgY29uc3Qgb3AgPSB0aGlzLm9wdGlvbnM7XG4gICAgICAgIGNvbnN0IHNjYWxlcyA9IHRoaXMuc2NhbGVzO1xuXG4gICAgICAgIGNvbnN0IG1ha2VYID0gKG54OiBudW1iZXIpID0+IFIucmFuZ2UoMCwgbngpLm1hcChkMy5zY2FsZUxpbmVhcigpLmRvbWFpbihbMCwgbnhdKS5yYW5nZShbMC4wMDAwMSwgb3AueHJhbmdlWzFdXSkpXG4gICAgICAgIGNvbnN0IHlGdW5jID0geCA9PiAxIC8geDtcbiAgICAgICAgY29uc3QgeHZhbHMgPSBtYWtlWCgxMDApXG4gICAgICAgIGNvbnN0IHl2YWxzID0geHZhbHMubWFwKHlGdW5jKS8vLm1hcCh5ID0+IHNjYWxlcy55KHkpKVxuXG4gICAgICAgIGNvbnN0IGRhdGEgPSBSLnppcCh4dmFscy5tYXAoc2NhbGVzLngpLCB5dmFscy5tYXAoc2NhbGVzLnkpKVxuICAgICAgICBjb25zdCBsaW5lR2VuID0gZDMubGluZSgpXG4gICAgICAgIGNvbnN0IHBhdGhEYXRhID0gbGluZUdlbihkYXRhKVxuXG4gICAgICAgIGNvbnN0IG1pbmltdW1Hcm91cCA9IHRoaXMuYmFzZS5hcHBlbmQoJ2cnKS5hdHRyKCdpZCcsICdtaW5pbXVtLWdyb3VwJylcblxuICAgICAgICBjb25zb2xlLmxvZyhcIlBhdGggZGF0YTogXCIsIHBhdGhEYXRhKTtcblxuICAgICAgICBtaW5pbXVtR3JvdXAuYXBwZW5kKCdwYXRoJylcbiAgICAgICAgICAgIC5hdHRyKCdkJywgbGluZUdlbihkYXRhKSlcbiAgICAgICAgICAgIC5jbGFzc2VkKCdtaW5pbXVtJywgdHJ1ZSlcbiAgICAgICAgICAgIC5zdHlsZSgnc3Ryb2tlLXdpZHRoJywgMi41KVxuICAgICAgICAgICAgLnN0eWxlKCdzdHJva2UnLCAnYmx1ZScpXG4gICAgICAgICAgICAuc3R5bGUoJ2ZpbGwnLCBudWxsKVxuICAgIH1cblxuICAgIHBsb3RDb250b3VycygpIHtcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgICAgIGNvbnN0IG9wID0gdGhpcy5vcHRpb25zO1xuICAgICAgICBjb25zdCBzY2FsZXMgPSB0aGlzLnNjYWxlcztcblxuICAgICAgICBjb25zdCBjb250b3VyRnVuYyA9ICh4LCB5KSA9PiB0aGlzLnVwZGF0ZXIuYWJzRXJyKHsgeDogeCwgeTogeSB9KVxuICAgICAgICBjb25zdCB2YWxzID0gZ2V0Q29udG91clZhbHVlcyhvcC5uLCBvcC5tLCBvcC54cmFuZ2UsIG9wLnlyYW5nZSwgY29udG91ckZ1bmMpXG4gICAgICAgIGxldCB0aHJlc2hvbGRzID0gZDMucmFuZ2UoZDMubWluKHZhbHMpLCBkMy5tYXgodmFscyksIDAuMjUpO1xuXG4gICAgICAgIC8vIEJlY2F1c2UgdGhlIG1pbmltdW0gdmFsdWUgaXMgbm90IGEgY29udG91ciBidXQgYSB2YWx1ZSwgd2UgbmVlZCB0byBkbyB3aGF0IHdlIGNhbiB0byBhcHByb2FjaCB0aGUgbWluLlxuICAgICAgICBjb25zdCB3ZWlnaHRlZCA9IDAuOTE7XG4gICAgICAgIGNvbnN0IG5ld01pbiA9ICh3ZWlnaHRlZCAqIHRocmVzaG9sZHNbMF0gKyAoMSAtIHdlaWdodGVkKSAqIHRocmVzaG9sZHNbMV0pIC8gMlxuICAgICAgICB0aHJlc2hvbGRzID0gUi5pbnNlcnQoMSwgbmV3TWluLCB0aHJlc2hvbGRzKVxuICAgICAgICAvLyBjb25zdCBuZXdNaW4gPSAwO1xuXG4gICAgICAgIHNjYWxlcy5jb2xvciA9IGQzLnNjYWxlTG9nKCkuaW50ZXJwb2xhdGUoKCkgPT4gZDMuaW50ZXJwb2xhdGVZbEduQnUpO1xuXG4gICAgICAgIHNjYWxlcy5jb250b3Vycy50aHJlc2hvbGRzKHRocmVzaG9sZHMpXG5cbiAgICAgICAgY29uc3QgY29udG91clZhbHMgPSBzY2FsZXMuY29udG91cnModmFscylcbiAgICAgICAgY29uc3QgY29udG91ckdyb3VwID0gdGhpcy5iYXNlLmFwcGVuZCgnZycpLmF0dHIoJ2lkJywgJ2NvbnRvdXItZ3JvdXAnKVxuICAgICAgICBjb25zdCBjb250b3VycyA9IGNvbnRvdXJHcm91cC5zZWxlY3RBbGwoXCJwYXRoLmNvbnRvdXJcIilcbiAgICAgICAgICAgIC5kYXRhKGNvbnRvdXJWYWxzKVxuXG4gICAgICAgIGNvbnRvdXJzLmpvaW4oXCJwYXRoXCIpXG4gICAgICAgICAgICAuYXR0cihcImNsYXNzXCIsIFwiY29udG91clwiKVxuICAgICAgICAgICAgLmF0dHIoXCJkXCIsIGQzLmdlb1BhdGgoZDMuZ2VvSWRlbnRpdHkoKS5zY2FsZShvcC53aWR0aCAvIG9wLm4pKSlcbiAgICAgICAgICAgIC5hdHRyKFwiZmlsbFwiLCBkID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gc2NhbGVzLmNvbG9yKGQudmFsdWUpXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNsYXNzZWQoJ21haW4tZml0JywgZCA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGQudmFsdWUgPT0gbmV3TWluO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jbGFzc2VkKCdub3QtZml0JywgZCA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGQudmFsdWUgIT0gbmV3TWluO1xuICAgICAgICAgICAgfSlcbiAgICB9XG5cbiAgICBhZGRDaXJjbGUodjogVmVjdG9yMkQsIHByZXY6IFZlY3RvcjJEID0gbnVsbCkge1xuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICAgICAgY29uc3Qgc2NhbGVzID0gdGhpcy5zY2FsZXM7XG4gICAgICAgIGNvbnN0IHNlbHMgPSB0aGlzLnNlbHM7XG5cbiAgICAgICAgaWYgKHByZXYgIT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5iYXNlLmFwcGVuZCgnbGluZScpXG4gICAgICAgICAgICAgICAgLmF0dHIoJ3gxJywgc2NhbGVzLngocHJldi54KSlcbiAgICAgICAgICAgICAgICAuYXR0cigneTEnLCBzY2FsZXMueShwcmV2LnkpKVxuICAgICAgICAgICAgICAgIC5hdHRyKCd4MicsIHNjYWxlcy54KHYueCkpXG4gICAgICAgICAgICAgICAgLmF0dHIoJ3kyJywgc2NhbGVzLnkodi55KSlcbiAgICAgICAgICAgICAgICAuY2xhc3NlZCgnZGVzY2VuZGluZy1saW5lJywgdHJ1ZSlcbiAgICAgICAgfVxuXG4gICAgICAgIHNlbHMuY2lyY2xlID0gdGhpcy5iYXNlLmFwcGVuZCgnY2lyY2xlJylcbiAgICAgICAgICAgIC5hdHRyKCdjeCcsIHNjYWxlcy54KHYueCkpXG4gICAgICAgICAgICAuYXR0cignY3knLCBzY2FsZXMueSh2LnkpKVxuICAgICAgICAgICAgLmF0dHIoJ3InLCAyKVxuICAgICAgICAgICAgLmNsYXNzZWQoJ2Rlc2NlbmRpbmctcG9pbnQnLCB0cnVlKVxuXG4gICAgICAgIHJldHVybiB2O1xuICAgIH1cblxuICAgIGNsZWFyQ2lyY2xlcygpIHtcbiAgICAgICAgZDMuc2VsZWN0QWxsKCcuZGVzY2VuZGluZy1wb2ludCcpLnJlbW92ZSgpXG4gICAgICAgIGQzLnNlbGVjdEFsbCgnLmRlc2NlbmRpbmctbGluZScpLnJlbW92ZSgpXG4gICAgfVxuXG4gICAgY2xlYXJRdWl2ZXJzKCkge1xuICAgICAgICBkMy5zZWxlY3RBbGwoJy5xdWl2ZXInKS5yZW1vdmUoKVxuICAgICAgICB0aGlzLnNlbHMuYXJyb3dzID0gW11cbiAgICB9XG5cbiAgICBwbG90RGVzY2VudCgpIHtcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgICAgIGxldCBwcmV2VmFsID0gbnVsbDtcblxuICAgICAgICBjb25zdCBzdWJPYmogPSB7XG4gICAgICAgICAgICBuZXh0OiAodmFsKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5hZGRDaXJjbGUodmFsLCBwcmV2VmFsKVxuICAgICAgICAgICAgICAgIHByZXZWYWwgPSB2YWxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlcnI6IChlcnIpID0+IGNvbnNvbGUubG9nKGVyciksXG4gICAgICAgICAgICBjb21wbGV0ZTogKCkgPT4gY29uc29sZS5sb2coXCJDT01QTEVURVwiKVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcHJlcCA9ICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuYWRkQ2lyY2xlKHRoaXMuY3VycigpKVxuICAgICAgICAgICAgcHJldlZhbCA9IHRoaXMuY3VycigpXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnRpY2tlciA9IGludGVydmFsKDIwKS5waXBlKFxuICAgICAgICAgICAgc3RhcnRXaXRoKHByZXAoKSksXG4gICAgICAgICAgICBzY2FuKHYgPT4gc2VsZi51cGRhdGVyLm5leHQodiksIHNlbGYuY3VycigpKSxcbiAgICAgICAgICAgIHRha2UoMTAwMClcbiAgICAgICAgKS5zdWJzY3JpYmUoc3ViT2JqKVxuICAgIH1cblxuICAgIGludG9WaXModjogVmVjdG9yMkQpIHtcbiAgICAgICAgcmV0dXJuIHsgeDogdGhpcy5zY2FsZXMueCh2LngpLCB5OiB0aGlzLnNjYWxlcy55KHYueSkgfVxuICAgIH1cblxuICAgIGludG9NYXRoKHY6IFZlY3RvcjJEKSB7XG4gICAgICAgIHJldHVybiB7IHg6IHRoaXMuc2NhbGVzLnguaW52ZXJ0KHYueCksIHk6IHRoaXMuc2NhbGVzLnkuaW52ZXJ0KHYueSkgfVxuICAgIH1cblxuICAgIHVwZGF0ZVF1aXZlcnMoKSB7XG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuICAgICAgICBjb25zdCBzZWxzID0gdGhpcy5zZWxzO1xuICAgICAgICBjb25zdCBzY2FsZXMgPSB0aGlzLnNjYWxlcztcblxuICAgICAgICAvLyBNb2RpZnkgYXJyb3dzIGlucGxhY2VcbiAgICAgICAgc2Vscy5hcnJvd3MuZm9yRWFjaChhcnJvdyA9PiB7XG4gICAgICAgICAgICBjb25zdCBwdDogVmVjdG9yMkQgPSB0aGlzLmludG9NYXRoKHtcbiAgICAgICAgICAgICAgICB4OiArYXJyb3cuYXR0cigneDEnKSxcbiAgICAgICAgICAgICAgICB5OiArYXJyb3cuYXR0cigneTEnKVxuICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgY29uc3QgcHQyID0gc2VsZi51cGRhdGVyLm5leHRMcihwdClcbiAgICAgICAgICAgIGFycm93LmF0dHIoJ3gyJywgc2NhbGVzLngocHQyLngpKVxuICAgICAgICAgICAgICAgIC5hdHRyKCd5MicsIHNjYWxlcy55KHB0Mi55KSlcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBjcmVhdGVRdWl2ZXJzKCkge1xuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICAgICAgY29uc3Qgb3AgPSB0aGlzLm9wdGlvbnM7XG4gICAgICAgIGNvbnN0IHNjYWxlcyA9IHRoaXMuc2NhbGVzO1xuICAgICAgICBjb25zdCBzZWxzID0gdGhpcy5zZWxzO1xuXG4gICAgICAgIGNvbnN0IG54ID0gOCwgbnkgPSA4O1xuICAgICAgICBjb25zdCBwb2ludHMgPSBTVkcubWVzaGdyaWQobngsIG55LCBvcC54cmFuZ2UsIG9wLnlyYW5nZSlcbiAgICAgICAgY29uc3QgY29sb3IgPSBcInJlZFwiO1xuICAgICAgICBjb25zdCB3aWR0aCA9IDI7XG5cbiAgICAgICAgY29uc3QgcXVpdmVyR3JvdXAgPSB0aGlzLmJhc2UuYXBwZW5kKCdnJykuYXR0cignaWQnLCAncXVpdmVyLWdyb3VwJykgLy8gaW5pdCBzaG91bGQgaGF2ZSB0aGVzZSBncm91cHMgYWxyZWFkeSBzZWxlY3RlZFxuICAgICAgICB0aGlzLmNsZWFyUXVpdmVycygpXG5cbiAgICAgICAgc2Vscy5hcnJvd3MgPSBwb2ludHMubWFwKHB0ID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHB0MiA9IHNlbGYudXBkYXRlci5uZXh0THIocHQpXG4gICAgICAgICAgICBjb25zdCBhcnJvdyA9IFNWRy5pbnNlcnRBcnJvdyhxdWl2ZXJHcm91cCwgc2NhbGVzLngocHQueCksIHNjYWxlcy55KHB0LnkpLCBzY2FsZXMueChwdDIueCksIHNjYWxlcy55KHB0Mi55KSwgY29sb3IsIHdpZHRoKVxuICAgICAgICAgICAgYXJyb3cuY2xhc3NlZCgncXVpdmVyJywgdHJ1ZSlcbiAgICAgICAgICAgIHJldHVybiBhcnJvd1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIGluaXRQbG90KCkge1xuICAgICAgICAvLyBJbml0aWFsaXplIHBsb3RzXG4gICAgICAgIHRoaXMucGxvdENvbnRvdXJzKClcbiAgICAgICAgdGhpcy5jcmVhdGVRdWl2ZXJzKClcbiAgICB9XG5cbiAgICBpbml0KCkge1xuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICAgICAgY29uc3Qgb3AgPSB0aGlzLm9wdGlvbnM7XG4gICAgICAgIGNvbnN0IHNjYWxlcyA9IHRoaXMuc2NhbGVzO1xuICAgICAgICBjb25zdCBzZWxzID0gdGhpcy5zZWxzO1xuXG4gICAgICAgIC8vIEFkZCBkZWZpbml0aW9uc1xuICAgICAgICBTVkcuYWRkQXJyb3dzKHRoaXMuc3ZnKVxuXG4gICAgICAgIC8vIENyZWF0ZSBzY2FsZXNcbiAgICAgICAgc2NhbGVzLmNvbnRvdXJzID0gZDMuY29udG91cnMoKS5zaXplKFtvcC5uLCBvcC5tXSlcbiAgICAgICAgc2NhbGVzLmN1cnZlID0gZDMuY3VydmVDYXRtdWxsUm9tLmFscGhhKDAuNSlcbiAgICAgICAgc2NhbGVzLnggPSBkMy5zY2FsZUxpbmVhcigpLmRvbWFpbihvcC54cmFuZ2UpLnJhbmdlKFswLCBvcC53aWR0aF0pXG4gICAgICAgIHNjYWxlcy55ID0gZDMuc2NhbGVMaW5lYXIoKS5kb21haW4ob3AueXJhbmdlKS5yYW5nZShbb3AuaGVpZ2h0LCAwXSlcblxuICAgICAgICAvLyBBZGQgQXhlcyBhbmQgbGFiZWxzXG4gICAgICAgIHNlbHMueGF4aXMgPSB0aGlzLmJhc2UuYXBwZW5kKFwiZ1wiKVxuICAgICAgICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcImF4aXMgYXhpcy0teFwiKVxuICAgICAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgU1ZHLnRyYW5zbGF0ZSgwLCBvcC5oZWlnaHQpKVxuICAgICAgICAgICAgLmNhbGwoZDMuYXhpc0JvdHRvbShzY2FsZXMueCkudGlja3MoMywgXCJzXCIpKTtcblxuICAgICAgICBzZWxzLnlheGlzID0gdGhpcy5iYXNlLmFwcGVuZChcImdcIilcbiAgICAgICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJheGlzIGF4aXMtLXlcIilcbiAgICAgICAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIFNWRy50cmFuc2xhdGUoMCwgMCkpXG4gICAgICAgICAgICAuY2FsbChkMy5heGlzTGVmdChzY2FsZXMueSkudGlja3MoMywgXCJzXCIpKTtcblxuICAgICAgICBzZWxzLnhsYWJlbCA9IHRoaXMuYmFzZS5hcHBlbmQoXCJ0ZXh0XCIpXG4gICAgICAgICAgICAudGV4dChcIncwXCIpXG4gICAgICAgICAgICAuYXR0cihcImNsYXNzXCIsIFwidGl0bGVzXCIpXG4gICAgICAgICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBTVkcudHJhbnNsYXRlKG9wLndpZHRoIC8gMiwgb3AuaGVpZ2h0ICsgb3AucGFkKSlcblxuICAgICAgICBzZWxzLnlsYWJlbCA9IHRoaXMuYmFzZS5hcHBlbmQoXCJ0ZXh0XCIpXG4gICAgICAgICAgICAudGV4dChcIncxXCIpXG4gICAgICAgICAgICAuYXR0cihcImNsYXNzXCIsIFwidGl0bGVzXCIpXG4gICAgICAgICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBTVkcudHJhbnNsYXRlKC1vcC5wYWQsIG9wLmhlaWdodCAvIDIpICsgU1ZHLnJvdGF0ZSgtOTApKVxuXG4gICAgICAgIC8vIENyZWF0ZSBjbGljayBiZWhhdmlvclxuICAgICAgICB0aGlzLmJhc2Uub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKHNlbGYudGlja2VyICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHNlbGYudGlja2VyLnVuc3Vic2NyaWJlKClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGNvb3JkcyA9IGQzLm1vdXNlKHRoaXMpO1xuICAgICAgICAgICAgc2VsZi5jdXJyKHsgeDogc2NhbGVzLnguaW52ZXJ0KGNvb3Jkc1swXSksIHk6IHNjYWxlcy55LmludmVydChjb29yZHNbMV0pIH0pXG4gICAgICAgICAgICBzZWxmLmFkZENpcmNsZShzZWxmLmN1cnIoKSlcbiAgICAgICAgICAgIHNlbGYuY2xlYXJDaXJjbGVzKCk7XG4gICAgICAgICAgICBzZWxmLnBsb3REZXNjZW50KCk7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgY3VycigpOiBWZWN0b3IyRFxuICAgIGN1cnIodmFsOiBWZWN0b3IyRCk6IHRoaXNcbiAgICBjdXJyKHZhbD8pIHtcbiAgICAgICAgaWYgKHZhbCA9PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fY3VyclxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fY3VyciA9IHZhbDtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgZGF0YSgpOiBudW1iZXJbXVxuICAgIGRhdGEodmFsOiBudW1iZXJbXSk6IHRoaXNcbiAgICBkYXRhKHZhbD8pIHtcbiAgICAgICAgaWYgKHZhbCA9PSBudWxsKSByZXR1cm4gdGhpcy5fZGF0YVxuICAgICAgICB0aGlzLl9kYXRhID0gdmFsXG4gICAgICAgIHJldHVybiB0aGlzXG4gICAgfVxuXG4gICAgcSgpOiBudW1iZXJcbiAgICBxKHZhbDogbnVtYmVyKTogdGhpc1xuICAgIHEodmFsPykge1xuICAgICAgICBpZiAodmFsID09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnVwZGF0ZXIucTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMudXBkYXRlci5xID0gdmFsXG4gICAgICAgIHRoaXMudXBkYXRlUXVpdmVycygpXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGV0YSgpOiBudW1iZXJcbiAgICBldGEodmFsOiBudW1iZXIpOiB0aGlzXG4gICAgZXRhKHZhbD8pIHtcbiAgICAgICAgaWYgKHZhbCA9PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy51cGRhdGVyLmV0YTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMudXBkYXRlci5ldGEgPSB2YWxcbiAgICAgICAgdGhpcy51cGRhdGVRdWl2ZXJzKClcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxufSIsImltcG9ydCAqIGFzIGQzIGZyb20gJ2QzJ1xuaW1wb3J0IHsgTWFudWFsVXBkYXRlciB9IGZyb20gXCIuL01hbnVhbFVwZGF0ZXJcIlxuaW1wb3J0IHsgVmVjdG9yMkQgfSBmcm9tIFwiLi4vdXRpbC90eXBlc1wiXG5pbXBvcnQgKiBhcyBSIGZyb20gJ3JhbWRhJ1xuaW1wb3J0IHsgU3ViamVjdCwgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSBcInJ4anNcIlxuXG5leHBvcnQgdHlwZSBCYWxsSGlzdG9yeSA9IHtcbiAgICBjbGFzc25hbWU6IHN0cmluZ1xuICAgIHg6IG51bWJlclxuICAgIGxvc3M6IG51bWJlclxufVxuXG5leHBvcnQgY2xhc3MgR29sZkJhbGwge1xuICAgIF94OiBudW1iZXJcbiAgICB1cGRhdGVyOiBNYW51YWxVcGRhdGVyXG4gICAgY2xhc3NuYW1lOiBzdHJpbmdcbiAgICBzdHJlYW06IFN1YmplY3Q8QmFsbEhpc3Rvcnk+IC8vIFB1c2hlcyBoaXN0b3J5IG9mIHggdmFsdWVzIHRvIHRoaXNcblxuICAgIGNvbnN0cnVjdG9yKHVwZGF0ZXI6IE1hbnVhbFVwZGF0ZXIsIGNsYXNzbmFtZTogc3RyaW5nLCB4ID0gMCkge1xuICAgICAgICB0aGlzLnVwZGF0ZXIgPSB1cGRhdGVyXG4gICAgICAgIHRoaXMuX3ggPSB4XG4gICAgICAgIHRoaXMuY2xhc3NuYW1lID0gY2xhc3NuYW1lXG4gICAgICAgIHRoaXMuc3RyZWFtID0gbmV3IFN1YmplY3QoKVxuICAgIH1cblxuICAgIGdldCB4KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5feFxuICAgIH1cblxuICAgIHNldCB4KHY6IG51bWJlcikge1xuICAgICAgICB0aGlzLl94ID0gdlxuICAgIH1cblxuICAgIG5leHRYKCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLnVwZGF0ZXIubmV4dCh0aGlzLl94KVxuICAgIH1cblxuICAgIG5leHQoKTogR29sZkJhbGwge1xuICAgICAgICBjb25zdCBuZXh0WCA9IHRoaXMubmV4dFgoKVxuICAgICAgICByZXR1cm4gbmV3IEdvbGZCYWxsKHRoaXMudXBkYXRlciwgdGhpcy5jbGFzc25hbWUsIHRoaXMubmV4dFgoKSlcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBVc2UgdGhlIHVwZGF0ZXIgdG8gdGFrZSB0aGUgbmV4dCBzdGVwXG4gICAgICogXG4gICAgICogQHBhcmFtIGZvcmNlWCBGb3JjZSB0aGUgbmV4dFggdG8gYmUgb2YgdGhpcyB2YWx1ZVxuICAgICAqL1xuICAgIHN0ZXBfKGZvcmNlWDpudW1iZXJ8bnVsbD1udWxsKTogdGhpcyB7XG4gICAgICAgIGlmIChmb3JjZVggIT0gbnVsbCkgdGhpcy54ID0gZm9yY2VYXG4gICAgICAgIGVsc2UgdGhpcy54ID0gdGhpcy5uZXh0WCgpXG5cbiAgICAgICAgdGhpcy5zdHJlYW0ubmV4dCh7XG4gICAgICAgICAgICBjbGFzc25hbWU6IHRoaXMuY2xhc3NuYW1lLFxuICAgICAgICAgICAgeDogdGhpcy54LFxuICAgICAgICAgICAgbG9zczogdGhpcy51cGRhdGVyLmxvc3ModGhpcy54KVxuICAgICAgICB9KVxuICAgICAgICByZXR1cm4gdGhpc1xuICAgIH1cblxuICAgIHRvVmVjKGY6ICh4OiBudW1iZXIpID0+IG51bWJlcik6IFZlY3RvcjJEIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHg6IHRoaXMuX3gsXG4gICAgICAgICAgICB5OiBmKHRoaXMuX3gpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBxKCk6IG51bWJlclxuICAgIHEodmFsOiBudW1iZXIpOiB0aGlzXG4gICAgcSh2YWw/KSB7XG4gICAgICAgIGlmICh2YWwgPT0gbnVsbCkgcmV0dXJuIHRoaXMudXBkYXRlci5xXG4gICAgICAgIHRoaXMudXBkYXRlci5xID0gdmFsXG4gICAgICAgIHJldHVybiB0aGlzXG4gICAgfVxuXG4gICAgZXRhKCk6IG51bWJlclxuICAgIGV0YSh2YWw6IG51bWJlcik6IHRoaXNcbiAgICBldGEodmFsPykge1xuICAgICAgICBpZiAodmFsID09IG51bGwpIHJldHVybiB0aGlzLnVwZGF0ZXIuZXRhXG4gICAgICAgIHRoaXMudXBkYXRlci5ldGEgPSB2YWxcbiAgICAgICAgcmV0dXJuIHRoaXNcbiAgICB9XG59IiwiaW1wb3J0ICogYXMgZDMgZnJvbSAnZDMnXG5pbXBvcnQgeyBEM1NlbCwgbGluc3BhY2UgfSBmcm9tICcuLi91dGlsL3hkMydcbmltcG9ydCAqIGFzIFIgZnJvbSAncmFtZGEnXG5pbXBvcnQgeyBWZWN0b3IyRCB9IGZyb20gJy4uL3V0aWwvdHlwZXMnXG5pbXBvcnQgeyBTVkdPcHRpb25zLCBTVkdWaXNDb21wb25lbnQgfSBmcm9tICcuLi91dGlsL1NWR1Zpc0NvbXBvbmVudCdcbmltcG9ydCB7IFNpbXBsZUV2ZW50SGFuZGxlciB9IGZyb20gJy4uL3V0aWwvU2ltcGxlRXZlbnRIYW5kbGVyJztcbmltcG9ydCB7IFNWRyB9IGZyb20gJy4uL3V0aWwvU1ZHcGx1cydcbmltcG9ydCB7IGludGVydmFsLCBmcm9tRXZlbnQgfSBmcm9tICdyeGpzJ1xuaW1wb3J0IHsgdGFrZSwgc2NhbiB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJ1xuaW1wb3J0IHsgTWFudWFsVXBkYXRlciB9IGZyb20gJy4vTWFudWFsVXBkYXRlcidcbmltcG9ydCB7IEdvbGZCYWxsIH0gZnJvbSAnLi9Hb2xmQmFsbCdcbmltcG9ydCB7IGxhbmRzY2FwZXMsIExhbmRzY2FwZSwgYmFzZUxvc3MsIGdldFBsb3RGdW5jIH0gZnJvbSBcIi4uL0dvbGZMYW5kc2NhcGVzXCI7XG5cblxudHlwZSBUID0gR29sZkJhbGxbXVxuXG5pbnRlcmZhY2UgR3JhcGhPcHRpb25zIGV4dGVuZHMgU1ZHT3B0aW9ucyB7XG4gICAgcGFkOiBudW1iZXJcbiAgICBtYXhJdGVyOiBudW1iZXIgLy8gSG93IG1hbnkgaXRlcmF0aW9ucyB0byB0YWtlP1xuICAgIGxhbmRzY2FwZTogTGFuZHNjYXBlXG59XG5cbmludGVyZmFjZSBHcmFwaFNjYWxlcyB7XG4gICAgeD86IGQzLlNjYWxlTGluZWFyPG51bWJlciwgbnVtYmVyPixcbiAgICB5PzogZDMuU2NhbGVMaW5lYXI8bnVtYmVyLCBudW1iZXI+LFxuICAgIHBhdGhzPzogZDMuTGluZTxudW1iZXI+W11cbn1cblxuaW50ZXJmYWNlIEdyYXBoU2VscyB7XG4gICAgeGF4aXM/OiBEM1NlbFxuICAgIHlheGlzPzogRDNTZWxcbiAgICB4bGFiZWw/OiBEM1NlbFxuICAgIGxpbmU/OiBEM1NlbFxuICAgIGJhY2tkcm9wPzogRDNTZWxcbiAgICBiYWxsPzogRDNTZWxcbn1cblxuLy8gLy8gTm90ZSB0aGF0IHBsb3RGdW5jIGlzIHRoZSBsb3NzIGZ1bmN0aW9uIHdlIHBsb3QgYW5kIGZ1bmMgaXMgdGhlIGNvbXBvbmVudCBvZiB0aGUgbG9zcyBmdW5jdGlvbiBuZWVkZWQgZm9yIHRoZSB1cGRhdGVyXG4vLyAvLyBleHBvcnQgY29uc3QgZnVuYyA9IHggPT4gTWF0aC50YW5oKHgpXG4vLyAvLyBleHBvcnQgY29uc3QgZEZ1bmMgPSB4ID0+IE1hdGgucG93KE1hdGguY29zaCh4KSwgLTIpXG4vLyBleHBvcnQgY29uc3QgZnVuYyA9IHggPT4gTWF0aC50YW5oKHggLSAxMSkgLyA0ICsgTWF0aC50YW5oKHggLSA2KSAvIDQgKyBNYXRoLnRhbmgoeCkgKyBNYXRoLnRhbmgoeCArIDYpIC8gNCArIE1hdGgudGFuaCh4ICsgMTEpIC8gNFxuLy8gZXhwb3J0IGNvbnN0IGRGdW5jID0geCA9PiBNYXRoLnBvdyhNYXRoLmNvc2goeCAtIDExKSwgLTIpIC8gNCArIE1hdGgucG93KE1hdGguY29zaCh4IC0gNiksIC0yKSAvIDQgKyBNYXRoLnBvdyhNYXRoLmNvc2goeCksIC0yKSArIE1hdGgucG93KE1hdGguY29zaCh4ICsgNiksIC0yKSAvIDQgKyBNYXRoLnBvdyhNYXRoLmNvc2goeCArIDExKSwgLTIpIC8gNFxuLy8gLy8gZXhwb3J0IGNvbnN0IGZ1bmMgPSB4ID0+IE1hdGguc2lnbih4KSAqICgxIC0gKDEgLyAoMSArIE1hdGguYWJzKHgpKSkpXG4vLyAvLyBleHBvcnQgY29uc3QgZEZ1bmMgPSB4ID0+IDEgLyBNYXRoLnBvdygxICsgTWF0aC5hYnMoeCksIDIpXG5cbi8vIGV4cG9ydCBjb25zdCBwbG90RnVuYyA9IHggPT4gYmFzZUxvc3MoZnVuYyh4KSlcblxuZXhwb3J0IGNsYXNzIEdvbGZIb2xlMUQgZXh0ZW5kcyBTVkdWaXNDb21wb25lbnQ8VD4ge1xuICAgIGNzc25hbWUgPSBcImdvbGYtaG9sZS1jaGFydFwiXG5cbiAgICBfZGF0YTogVFxuXG4gICAgb3B0aW9uczogR3JhcGhPcHRpb25zID0ge1xuICAgICAgICBtYXhXaWR0aDogNDAwLFxuICAgICAgICBtYXhIZWlnaHQ6IDIwMCxcbiAgICAgICAgbWFyZ2luOiB7IHRvcDogMTAsIHJpZ2h0OiAxMCwgYm90dG9tOiA0MCwgbGVmdDogNTAgfSxcbiAgICAgICAgcGFkOiAzMCxcbiAgICAgICAgbWF4SXRlcjogNjAwLFxuICAgICAgICBsYW5kc2NhcGU6IGxhbmRzY2FwZXMuaG9sZVxuICAgIH1cblxuICAgIHNjYWxlczogR3JhcGhTY2FsZXMgPSB7fVxuXG4gICAgc2VsczogR3JhcGhTZWxzID0ge31cblxuICAgIGNvbnN0cnVjdG9yKGQzcGFyZW50OiBEM1NlbCwgZXZlbnRIYW5kbGVyPzogU2ltcGxlRXZlbnRIYW5kbGVyLCBvcHRpb25zID0ge30pIHtcbiAgICAgICAgc3VwZXIoZDNwYXJlbnQsIGV2ZW50SGFuZGxlciwgb3B0aW9ucylcbiAgICAgICAgc3VwZXIuaW5pdFNWRyhvcHRpb25zLCBbXCJiZ1wiXSlcbiAgICAgICAgdGhpcy5iYXNlLmNsYXNzZWQodGhpcy5jc3NuYW1lLCB0cnVlKVxuICAgICAgICB0aGlzLmluaXQoKVxuXG4gICAgICAgIC8vIGNvbnN0IGRhdGEgPSBbXG4gICAgICAgIC8vICAgICBuZXcgR29sZkJhbGwobmV3IE1hbnVhbFVwZGF0ZXIoZnVuYywgZEZ1bmMsIDAsIDAuNSksICdnb2xmLWJhbGwtc2dkJywgNCksXG4gICAgICAgIC8vICAgICBuZXcgR29sZkJhbGwobmV3IE1hbnVhbFVwZGF0ZXIoZnVuYywgZEZ1bmMsIDAuNSwgMC4wNyksICdnb2xmLWJhbGwtc25nZCcsIDMpLFxuICAgICAgICAvLyAgICAgbmV3IEdvbGZCYWxsKG5ldyBNYW51YWxVcGRhdGVyKGZ1bmMsIGRGdW5jLCAxLCAwLjAxKSwgJ2dvbGYtYmFsbC1uZ2QnLCA1KVxuICAgICAgICAvLyBdXG4gICAgICAgIGNvbnN0IHogPSB0aGlzLm9wdGlvbnMubGFuZHNjYXBlXG4gICAgICAgIGNvbnN0IGRhdGEgPSBbXG4gICAgICAgICAgICBuZXcgR29sZkJhbGwobmV3IE1hbnVhbFVwZGF0ZXIoei5mLCB6LmRmLCAwLCAwLjkpLCAnZ29sZi1iYWxsLXNnZCcsIDQpLFxuICAgICAgICAgICAgbmV3IEdvbGZCYWxsKG5ldyBNYW51YWxVcGRhdGVyKHouZiwgei5kZiwgMC41LCAwLjEpLCAnZ29sZi1iYWxsLXNuZ2QnLCAzKSxcbiAgICAgICAgICAgIG5ldyBHb2xmQmFsbChuZXcgTWFudWFsVXBkYXRlcih6LmYsIHouZGYsIDEsIDAuMDAzKSwgJ2dvbGYtYmFsbC1uZ2QnLCA1KVxuICAgICAgICBdXG5cbiAgICAgICAgdGhpcy5kYXRhKGRhdGEpXG4gICAgICAgIHRoaXMuaW5pdEJhbGxzKClcbiAgICB9XG5cbiAgICBsYW5kc2NhcGUoKTogTGFuZHNjYXBlXG4gICAgbGFuZHNjYXBlKHZhbDogTGFuZHNjYXBlKTogdGhpc1xuICAgIGxhbmRzY2FwZSh2YWw/KSB7XG4gICAgICAgIGlmICh2YWwgPT0gbnVsbCkgcmV0dXJuIHRoaXMub3B0aW9ucy5sYW5kc2NhcGVcbiAgICAgICAgY29uc3Qgb3AgPSB0aGlzLm9wdGlvbnNcbiAgICAgICAgb3AubGFuZHNjYXBlID0gdmFsXG5cbiAgICAgICAgLy8gVXBkYXRlIHhyYW5nZSBhbmQgeXJhbmdlXG4gICAgICAgIHRoaXMudXBkYXRlU2NhbGVzKG9wKVxuICAgICAgICB0aGlzLnVwZGF0ZUF4ZXModGhpcy5zY2FsZXMsIG9wKVxuXG4gICAgICAgIC8vIFVwZGF0ZSBkYXRhXG4gICAgICAgIHRoaXMuZGF0YSgpLmZvckVhY2goYiA9PiB7XG4gICAgICAgICAgICBiLnVwZGF0ZXIuZiA9IHZhbC5mXG4gICAgICAgICAgICBiLnVwZGF0ZXIuZGYgPSB2YWwuZGZcbiAgICAgICAgfSlcblxuICAgICAgICBjb25zdCB4cyA9IGxpbnNwYWNlKG9wLmxhbmRzY2FwZS54cmFuZ2VbMF0sIG9wLmxhbmRzY2FwZS54cmFuZ2VbMV0sIDEwMDApXG4gICAgICAgIHRoaXMuY2xlYXJDdXJ2ZSgpXG4gICAgICAgIHRoaXMucGxvdEN1cnZlKHhzKVxuXG4gICAgICAgIHJldHVybiB0aGlzXG4gICAgfVxuXG4gICAgLyoqIFJldHVybiBmaXJzdCB1cGRhdGVyIGluIGRhdGEgKi9cbiAgICBnZXQgZGF0YUhlYWQoKTogR29sZkJhbGwge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZGF0YSgpWzBdXG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJMb29rcyBsaWtlIHRoZXJlIGlzIG5vIGRhdGEgaW4gdGhpcyBnb2xmIGhvbGVcIik7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUHV0IGEgdmVjdG9yIGludG8gdGhlIGNvb3JkaW5hdGUgc3lzdGVtIHVzZWQgYnkgdGhlIHZpc3VhbGl6YXRpb25cbiAgICAgKiBcbiAgICAgKiBAcGFyYW0gdiBWZWN0b3IgXG4gICAgICovXG4gICAgaW50b1Zpcyh2OiBWZWN0b3IyRCkge1xuICAgICAgICByZXR1cm4geyB4OiB0aGlzLnNjYWxlcy54KHYueCksIHk6IHRoaXMuc2NhbGVzLnkodi55KSB9XG4gICAgfVxuXG4gICAgLy8gVGFrZSBhIHZlY3RvciBpbiB0aGUgY29vcmRpbmF0ZSBzeXN0ZW0gYW5kIHJldHVybiBpdCB0byB0aGUgbWF0aCBjb29yZGluYXRlc1xuICAgIGludG9NYXRoKHY6IFZlY3RvcjJEKSB7XG4gICAgICAgIHJldHVybiB7IHg6IHRoaXMuc2NhbGVzLnguaW52ZXJ0KHYueCksIHk6IHRoaXMuc2NhbGVzLnkuaW52ZXJ0KHYueSkgfVxuICAgIH1cblxuICAgIC8vIFR1cm4gYSBudW1iZXIgaW50byBhIHZlY3RvclxuICAgIG51bTJ2ZWMoeDogbnVtYmVyKTogVmVjdG9yMkQge1xuICAgICAgICBjb25zdCBvcCA9IHRoaXMub3B0aW9uc1xuICAgICAgICByZXR1cm4geyB4OiB4LCB5OiBvcC5sYW5kc2NhcGUubG9zcyh4KSB9XG4gICAgfVxuXG4gICAgLy8gVHVybiBhIGJhbGwgaW50byBhIHZlY3RvciBpbiB0aGUgdmlzdWFsaXphdGlvbiBjb29yZGluYXRlIHN5c3RlbVxuICAgIGJhbGwydmlzKGI6IEdvbGZCYWxsKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmludG9WaXMoYi50b1ZlYyhnZXRQbG90RnVuYyh0aGlzLm9wdGlvbnMubGFuZHNjYXBlKSkpXG4gICAgfVxuXG4gICAgLy8gUGxvdCBhIGJhbGwgb24gdGhlIGNoYXJ0XG4gICAgcGxvdEJhbGwoYjogR29sZkJhbGwpIHtcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG5cbiAgICAgICAgY29uc3QgdG9DbGFzcyA9IG5hbWUgPT4gJy4nICsgbmFtZVxuICAgICAgICBjb25zdCBjbHNTZWwgPSB0b0NsYXNzKGIuY2xhc3NuYW1lKVxuXG4gICAgICAgIGNvbnN0IGJhbGwgPSB0aGlzLmJhbGwydmlzKGIpXG4gICAgICAgIHNlbGYuc2Vscy5iYWxsID0gc2VsZi5iYXNlLnNlbGVjdEFsbChjbHNTZWwpXG4gICAgICAgICAgICAuZGF0YShbYmFsbF0pXG4gICAgICAgICAgICAuam9pbignY2lyY2xlJylcbiAgICAgICAgICAgIC5jbGFzc2VkKCdnb2xmLWJhbGwnLCB0cnVlKVxuICAgICAgICAgICAgLmNsYXNzZWQoYi5jbGFzc25hbWUsIHRydWUpXG4gICAgICAgICAgICAuYXR0cihcImN4XCIsIGQgPT4gZC54KVxuICAgICAgICAgICAgLmF0dHIoXCJjeVwiLCBkID0+IGQueSlcbiAgICAgICAgICAgIC5hdHRyKFwiclwiLCBcIjVweFwiKVxuICAgIH1cblxuICAgIGNsZWFyQ3VydmUoKSB7XG4gICAgICAgIHRoaXMubGF5ZXJzLmJnLnNlbGVjdEFsbCgnLmxpbmUnKS5yZW1vdmUoKVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFBsb3QgdGhlIHZhbHVlcyBvZiBhbGwgeCBhY2NvcmRpbmcgdG8gdGhlIGZ1bmN0aW9uXG4gICAgICogXG4gICAgICogQHBhcmFtIHggQSBsaW5zcGFjZSBvZiB4IHZhbHVlcyBvdmVyIHdoaWNoIHRvIHBsb3QgYSBjdXJ2ZVxuICAgICAqL1xuICAgIHBsb3RDdXJ2ZSh4OiBudW1iZXJbXSkge1xuICAgICAgICBjb25zdCBzZWxmID0gdGhpcywgc2NhbGVzID0gdGhpcy5zY2FsZXMsIHNlbHMgPSB0aGlzLnNlbHM7XG5cbiAgICAgICAgc2NhbGVzLnBhdGhzLmZvckVhY2gobGluZSA9PiB7XG4gICAgICAgICAgICB0aGlzLmxheWVycy5iZy5hcHBlbmQoXCJwYXRoXCIpXG4gICAgICAgICAgICAgICAgLmRhdHVtKHgpXG4gICAgICAgICAgICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcImxpbmVcIilcbiAgICAgICAgICAgICAgICAuYXR0cihcImRcIiwgZCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBsaW5lKGQpXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICB1cGRhdGVTY2FsZXMob3A6IEdyYXBoT3B0aW9ucykge1xuICAgICAgICBjb25zdCBzY2FsZXMgPSB0aGlzLnNjYWxlc1xuXG4gICAgICAgIHNjYWxlcy54ID0gZDMuc2NhbGVMaW5lYXIoKS5kb21haW4ob3AubGFuZHNjYXBlLnhyYW5nZSkucmFuZ2UoWzAsIG9wLndpZHRoXSlcbiAgICAgICAgc2NhbGVzLnkgPSBkMy5zY2FsZUxpbmVhcigpLmRvbWFpbihvcC5sYW5kc2NhcGUueXJhbmdlKS5yYW5nZShbb3AuaGVpZ2h0LCAwXSlcbiAgICB9XG5cbiAgICB1cGRhdGVBeGVzKHNjYWxlczogR3JhcGhTY2FsZXMsIG9wOiBHcmFwaE9wdGlvbnMpIHtcbiAgICAgICAgY29uc3Qgc2VscyA9IHRoaXMuc2Vsc1xuICAgICAgICBzZWxzLnhheGlzLmNhbGwoZDMuYXhpc0JvdHRvbShzY2FsZXMueCkudGlja1ZhbHVlcyhbMF0pLnRpY2tGb3JtYXQoeCA9PiAnMCcpKVxuICAgIH1cblxuICAgIGluaXQoKSB7XG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuICAgICAgICBjb25zdCBvcCA9IHRoaXMub3B0aW9ucztcbiAgICAgICAgY29uc3Qgc2NhbGVzID0gdGhpcy5zY2FsZXM7XG4gICAgICAgIGNvbnN0IHNlbHMgPSB0aGlzLnNlbHM7XG5cbiAgICAgICAgdGhpcy51cGRhdGVTY2FsZXMob3ApXG5cbiAgICAgICAgc2Vscy54YXhpcyA9IHRoaXMuYmFzZS5hcHBlbmQoXCJnXCIpXG4gICAgICAgICAgICAuYXR0cihcImNsYXNzXCIsIFwiYXhpcyBheGlzLS14XCIpXG4gICAgICAgICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBTVkcudHJhbnNsYXRlKDAsIG9wLmhlaWdodCkpXG5cbiAgICAgICAgc2Vscy54bGFiZWwgPSB0aGlzLmJhc2UuYXBwZW5kKFwidGV4dFwiKVxuICAgICAgICAgICAgLnRleHQoXCJcXHUwM0I4IC0gXFx1MDNCOCpcIilcbiAgICAgICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJ0aXRsZXNcIilcbiAgICAgICAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIFNWRy50cmFuc2xhdGUob3Aud2lkdGggLyAyLCBvcC5oZWlnaHQgKyBvcC5wYWQpKVxuXG4gICAgICAgIHRoaXMudXBkYXRlQXhlcyhzY2FsZXMsIG9wKVxuXG4gICAgICAgIGNvbnN0IGJhc2VMaW5lID0gZDMubGluZTxudW1iZXI+KClcbiAgICAgICAgICAgIC54KChkOiBudW1iZXIsIGk6IG51bWJlcikgPT4gc2NhbGVzLngoZCkpXG4gICAgICAgICAgICAueSgoZDogbnVtYmVyLCBpOiBudW1iZXIpID0+IHNjYWxlcy55KGdldFBsb3RGdW5jKG9wLmxhbmRzY2FwZSkoZCkpKVxuICAgICAgICAgICAgLmN1cnZlKGQzLmN1cnZlTGluZWFyKVxuXG4gICAgICAgIHNjYWxlcy5wYXRocyA9IFtiYXNlTGluZV1cblxuICAgICAgICBjb25zdCB4cyA9IGxpbnNwYWNlKG9wLmxhbmRzY2FwZS54cmFuZ2VbMF0sIG9wLmxhbmRzY2FwZS54cmFuZ2VbMV0sIDEwMDApXG4gICAgICAgIHRoaXMucGxvdEN1cnZlKHhzKVxuICAgIH1cblxuICAgIGluaXRCYWxscygpIHtcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXMsIG9wID0gdGhpcy5vcHRpb25zO1xuXG4gICAgICAgIC8vIENyZWF0ZSBCYWNrZHJvcCBmb3IgbW91c2UgaW50ZXJmYWNlc1xuICAgICAgICB0aGlzLnNlbHMuYmFja2Ryb3AgPSB0aGlzLmJhc2UuYXBwZW5kKFwiZ1wiKVxuICAgICAgICAgICAgLmF0dHIoXCJpZFwiLCBcImJhY2tkcm9wXCIpXG4gICAgICAgICAgICAuY2xhc3NlZCgnZ3Jhc3MnLCB0cnVlKVxuICAgICAgICAgICAgLmFwcGVuZChcInJlY3RcIilcbiAgICAgICAgICAgIC5hdHRyKFwiaGVpZ2h0XCIsIG9wLmhlaWdodClcbiAgICAgICAgICAgIC5hdHRyKFwid2lkdGhcIiwgb3Aud2lkdGgpXG4gICAgICAgIGNvbnN0IHRvb1NtYWxsID0gKHg6IG51bWJlcikgPT4geCA8IChvcC5sYW5kc2NhcGUueHJhbmdlWzBdKVxuICAgICAgICBjb25zdCB0b29CaWcgPSAoeDogbnVtYmVyKSA9PiB4ID4gKG9wLmxhbmRzY2FwZS54cmFuZ2VbMV0pXG5cbiAgICAgICAgY29uc3Qgb3V0T2ZCb3VuZHMgPSAoeDogbnVtYmVyKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gKGlzTmFOKHgpIHx8IHRvb1NtYWxsKHgpIHx8IHRvb0JpZyh4KSlcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGZpeE91dE9mQm91bmRzID0gKHg6IG51bWJlcikgPT4ge1xuICAgICAgICAgICAgbGV0IG91dDogbnVtYmVyXG5cbiAgICAgICAgICAgIGlmIChpc05hTih4KSkgb3V0ID0gb3AubGFuZHNjYXBlLnhyYW5nZVswXVxuICAgICAgICAgICAgZWxzZSBpZiAodG9vU21hbGwoeCkpIG91dCA9IG9wLmxhbmRzY2FwZS54cmFuZ2VbMF1cbiAgICAgICAgICAgIGVsc2UgaWYgKHRvb0JpZyh4KSkgb3V0ID0gb3AubGFuZHNjYXBlLnhyYW5nZVsxXVxuICAgICAgICAgICAgZWxzZSBvdXQgPSB4XG5cbiAgICAgICAgICAgIHJldHVybiBvdXRcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIGdldE5leHRCYWxsKGI6IEdvbGZCYWxsKTogR29sZkJhbGwge1xuICAgICAgICAgICAgY29uc3QgbmV4dFggPSBiLm5leHRYKClcbiAgICAgICAgICAgIGNvbnN0IGN1cnJCYWxsU2VsID0gc2VsZi5iYXNlLnNlbGVjdChgLiR7Yi5jbGFzc25hbWV9YClcbiAgICAgICAgICAgIGNvbnN0IGZvcmNlWCA9IGZpeE91dE9mQm91bmRzKG5leHRYKVxuICAgICAgICAgICAgaWYgKCFjdXJyQmFsbFNlbC5jbGFzc2VkKCdkZWFkLWJhbGwnKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBiLnN0ZXBfKGZvcmNlWClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBiXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBzdWJPYmogPSB7XG4gICAgICAgICAgICBuZXh0OiBnYnMgPT4ge1xuICAgICAgICAgICAgICAgIGdicy5mb3JFYWNoKGIgPT4gc2VsZi5wbG90QmFsbChiKSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlcnJvcjogYiA9PiBjb25zb2xlLmxvZyhcIkVSUk9SOiBcIiwgYiksXG4gICAgICAgICAgICBjb21wbGV0ZTogKCkgPT4gY29uc29sZS5sb2coXCJDT01QTEVURVwiKSxcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHRpY2tlciA9ICgpID0+IGludGVydmFsKDEwKS5waXBlKFxuICAgICAgICAgICAgc2NhbigoYWNjOiBUKSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gVW5zdWJzY3JpYmVyIHRpY2tlciBpZiBhbGwgYmFsbHMgZGVhZFxuICAgICAgICAgICAgICAgIGlmIChSLmFsbCgoYjogR29sZkJhbGwpID0+IGQzLnNlbGVjdChgLiR7Yi5jbGFzc25hbWV9YCkuY2xhc3NlZCgnZGVhZC1iYWxsJyksIHNlbGYuZGF0YSgpKSkge1xuICAgICAgICAgICAgICAgICAgICBydW5uaW5nVGlja2VyLnVuc3Vic2NyaWJlKClcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBzZWxmLmRhdGEoKS5mb3JFYWNoKGIgPT4gZ2V0TmV4dEJhbGwoYikpXG4gICAgICAgICAgICAgICAgcmV0dXJuIHNlbGYuZGF0YSgpXG4gICAgICAgICAgICB9LCBzZWxmLmRhdGEoKSksXG4gICAgICAgICAgICB0YWtlKG9wLm1heEl0ZXIpXG4gICAgICAgICkuc3Vic2NyaWJlKHN1Yk9iailcblxuICAgICAgICAvLyBSdW5uaW5nIHRpY2tlciBzdGFydHMgYXMgYW4gZW1wdHkgc3Vic2NyaXB0aW9uIG9iamVjdCwgaXMgbGF0ZXIgcmVwbGFjZWQgYnkgdGhlIHJ1bm5pbmcgdGlja2VyXG4gICAgICAgIGxldCBydW5uaW5nVGlja2VyID0ge1xuICAgICAgICAgICAgdW5zdWJzY3JpYmU6ICgpID0+IGNvbnNvbGUubG9nKFwiRW1wdHkgVGlja2VyIVwiKVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zZWxzLmJhY2tkcm9wLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJ1bm5pbmdUaWNrZXIudW5zdWJzY3JpYmUoKVxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJVbnN1YnNjcmliaW5nIHRpY2tlclwiKTtcbiAgICAgICAgICAgIGNvbnN0IGNsaWNrID0gdG9WZWMoZDMubW91c2UodGhpcykpXG4gICAgICAgICAgICBkMy5zZWxlY3RBbGwoJy5nb2xmLWJhbGwnKS5jbGFzc2VkKCdkZWFkLWJhbGwnLCBmYWxzZSlcbiAgICAgICAgICAgIHNlbGYuZGF0YSgpLmZvckVhY2goKGIsIGkpID0+IGIueCA9IHNlbGYuaW50b01hdGgoY2xpY2spLngpXG4gICAgICAgICAgICBzZWxmLmRhdGEoKS5mb3JFYWNoKGIgPT4gc2VsZi5wbG90QmFsbChiKSlcbiAgICAgICAgICAgIHNlbGYuZXZlbnRIYW5kbGVyLnRyaWdnZXIoXCJsb3NzLWNsaWNrXCIsIHt9KVxuXG4gICAgICAgICAgICBydW5uaW5nVGlja2VyID0gdGlja2VyKClcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBkYXRhKCk6IFRcbiAgICBkYXRhKHZhbDogVCk6IHRoaXNcbiAgICBkYXRhKHZhbD8pIHtcbiAgICAgICAgaWYgKHZhbCA9PSBudWxsKSByZXR1cm4gdGhpcy5fZGF0YVxuICAgICAgICB0aGlzLl9kYXRhID0gdmFsO1xuICAgICAgICByZXR1cm4gdGhpc1xuICAgIH1cbn1cblxuZnVuY3Rpb24gdG9WZWMoW3gsIHldOiBbbnVtYmVyLCBudW1iZXJdKTogVmVjdG9yMkQge1xuICAgIHJldHVybiB7IHg6IHgsIHk6IHkgfVxufSIsImltcG9ydCAqIGFzIGQzIGZyb20gJ2QzJ1xuaW1wb3J0ICogYXMgUiBmcm9tICdyYW1kYSdcblxuaW1wb3J0IHsgQ2hhcnQyRCwgQ2hhcnRPcHRpb25zLCBDaGFydFNjYWxlcyB9IGZyb20gJy4uL3V0aWwvQ2hhcnQyZFZpc0NvbXBvbmVudCdcbmltcG9ydCB7IFNpbXBsZUV2ZW50SGFuZGxlciB9IGZyb20gJy4uL3V0aWwvU2ltcGxlRXZlbnRIYW5kbGVyJ1xuaW1wb3J0IHsgRDNTZWwgfSBmcm9tICcuLi91dGlsL3hkMydcbmltcG9ydCB7IFNWRyB9IGZyb20gJy4uL3V0aWwvU1ZHcGx1cydcblxuaW1wb3J0IHsgQmFsbEhpc3RvcnkgfSBmcm9tICcuL0dvbGZCYWxsJ1xuXG5jb25zdCBheGlzT2Zmc2V0ID0gMSAvLyBVc2UgdGhpcyB0byBjb3ZlciB0aGUgcGxvdHRlZCBsaW5lc1xuXG5pbnRlcmZhY2UgR3JhcGhTZWxzIHtcbiAgICB4YXhpcz86IEQzU2VsXG4gICAgeWF4aXM/OiBEM1NlbFxuICAgIHhsYWJlbD86IEQzU2VsXG4gICAgbGluZT86IEQzU2VsXG4gICAgYmFja2Ryb3A/OiBEM1NlbFxuICAgIGJhbGw/OiBEM1NlbFxufVxuXG50eXBlIFRyYWNrZXIgPSB7XG4gICAgc2VsOiBEM1NlbCxcbiAgICB2YWxzOiBudW1iZXJbXVxufVxuXG50eXBlIExpbmVUcmFja2VyID0ge1xuICAgIChrZXk6IHN0cmluZyk6IFRyYWNrZXJcbn1cblxudHlwZSBUID0gTGluZVRyYWNrZXJcblxuXG5leHBvcnQgY2xhc3MgR29sZkxvc3NlcyBleHRlbmRzIENoYXJ0MkQ8VD4ge1xuICAgIGNzc25hbWUgPSBcImxpbmUtcGxvdFwiXG5cbiAgICBfZGF0YTogVFxuXG4gICAgb3B0aW9uczogQ2hhcnRPcHRpb25zID0ge1xuICAgICAgICBtYXhXaWR0aDogMzUwLFxuICAgICAgICBtYXhIZWlnaHQ6IDI1MCxcbiAgICAgICAgbWFyZ2luOiB7IHRvcDogMTAsIHJpZ2h0OiAxMCwgYm90dG9tOiAzMCwgbGVmdDogMzAgfSxcbiAgICAgICAgcGFkOiB7IHRvcDogNSwgcmlnaHQ6IDEsIGJvdHRvbTogMTAsIGxlZnQ6IDE1IH0sXG4gICAgICAgIHhyYW5nZTogWzAsIDYwMF0sXG4gICAgICAgIHlyYW5nZTogWzIsIDFlLTJdLFxuICAgIH1cblxuICAgIHNjYWxlczogQ2hhcnRTY2FsZXMgPSB7fVxuXG4gICAgc2VsczogR3JhcGhTZWxzID0ge31cblxuICAgIHBhdGg6IGQzLkxpbmU8bnVtYmVyPlxuXG4gICAgY29uc3RydWN0b3IoZDNwYXJlbnQ6IEQzU2VsLCBldmVudEhhbmRsZXI/OiBTaW1wbGVFdmVudEhhbmRsZXIsIG9wdGlvbnMgPSB7fSkge1xuICAgICAgICBzdXBlcihkM3BhcmVudCwgZXZlbnRIYW5kbGVyLCBvcHRpb25zKVxuICAgICAgICBzdXBlci5pbml0U1ZHKHRoaXMub3B0aW9ucywgW1wiYmdcIl0pXG4gICAgICAgIHRoaXMuYmFzZS5jbGFzc2VkKHRoaXMuY3NzbmFtZSwgdHJ1ZSlcbiAgICAgICAgdGhpcy5kYXRhKDxMaW5lVHJhY2tlcj57fSlcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBQbG90IHRoZSB2YWx1ZXMgb2YgYWxsIHggYWNjb3JkaW5nIHRvIHRoZSBmdW5jdGlvblxuICAgICAqIFxuICAgICAqIEBwYXJhbSB4IEEgbGluc3BhY2Ugb2YgeCB2YWx1ZXMgb3ZlciB3aGljaCB0byBwbG90IGEgY3VydmVcbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgYWRkRGF0YUtleV8oY2xhc3NuYW1lOiBzdHJpbmcpIHtcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXNcbiAgICAgICAgaWYgKCFSLmhhcyhjbGFzc25hbWUsIHRoaXMuZGF0YSgpKSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coYEFkZGluZyBrZXk6ICR7Y2xhc3NuYW1lfWApO1xuICAgICAgICAgICAgdGhpcy5kYXRhKClbY2xhc3NuYW1lXSA9IHtcbiAgICAgICAgICAgICAgICBzZWw6IHNlbGYuaW5pdEJhc2VMaW5lKGNsYXNzbmFtZSksXG4gICAgICAgICAgICAgICAgdmFsczogW11cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIExpdmUgdXBkYXRlIHRoZSB4cmFuZ2VcbiAgICB1cGRhdGVTY2FsZXMoeHJhbmdlKSB7XG4gICAgICAgIGNvbnN0IG9wID0gdGhpcy5vcHRpb25zXG4gICAgICAgIHRoaXMuc2NhbGVzLnggPSBkMy5zY2FsZUxpbmVhcigpLmRvbWFpbih4cmFuZ2UpLnJhbmdlKFswLCBvcC53aWR0aF0pLmNsYW1wKHRydWUpXG4gICAgfVxuXG4gICAgY2xlYXJQYXRocygpIHtcbiAgICAgICAgdGhpcy5kYXRhKFIubWFwKGQgPT4gUi5hc3NvYygndmFscycsIFtdLCBkKSwgdGhpcy5kYXRhKCkpKVxuICAgIH1cblxuICAgIHBsb3RQYXRoKGQ6IEJhbGxIaXN0b3J5KSB7XG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuICAgICAgICB0aGlzLmFkZERhdGFLZXlfKGQuY2xhc3NuYW1lKTtcblxuICAgICAgICBjb25zdCBjdXJyVmFscyA9IHRoaXMuZGF0YSgpW2QuY2xhc3NuYW1lXTtcbiAgICAgICAgY3VyclZhbHMudmFscy5wdXNoKGQubG9zcylcblxuICAgICAgICAvLyBzbGlkaW5nIHgtYXhpc1xuICAgICAgICBjb25zdCBuZXdYcmFuZ2UgPSBbTWF0aC5tYXgoMCwgY3VyclZhbHMudmFscy5sZW5ndGgtdGhpcy5vcHRpb25zLnhyYW5nZVsxXSksIE1hdGgubWF4KGN1cnJWYWxzLnZhbHMubGVuZ3RoLHRoaXMub3B0aW9ucy54cmFuZ2VbMV0pXVxuICAgICAgICAvLyBjb25zdCBuZXdYcmFuZ2UgPSBbMCwgY3VyclZhbHMudmFscy5sZW5ndGhdXG4gICAgICAgIHRoaXMudXBkYXRlU2NhbGVzKG5ld1hyYW5nZSlcbiAgICAgICAgdGhpcy5jcmVhdGVQYXRoKClcblxuICAgICAgICBjdXJyVmFscy5zZWwuZGF0YShbY3VyclZhbHNdKVxuICAgICAgICAgICAgLmpvaW4oXCJwYXRoXCIpXG4gICAgICAgICAgICAuY2xhc3NlZChkLmNsYXNzbmFtZSwgdHJ1ZSlcbiAgICAgICAgICAgIC5hdHRyKFwiZFwiLCBkID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gc2VsZi5wYXRoKGQudmFscylcbiAgICAgICAgICAgIH0pXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBpbml0QmFzZUxpbmUoY2xhc3NuYW1lOiBzdHJpbmcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubGF5ZXJzLmJnLmFwcGVuZChcInBhdGhcIilcbiAgICAgICAgICAgIC5jbGFzc2VkKGNsYXNzbmFtZSwgdHJ1ZSlcbiAgICAgICAgICAgIC5jbGFzc2VkKCdsaW5lJywgdHJ1ZSlcbiAgICB9XG5cbiAgICBpbml0KCkge1xuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICAgICAgY29uc3Qgb3AgPSB0aGlzLm9wdGlvbnM7XG4gICAgICAgIGNvbnN0IHNjYWxlcyA9IHRoaXMuc2NhbGVzO1xuICAgICAgICBjb25zdCBzZWxzID0gdGhpcy5zZWxzO1xuXG4gICAgICAgIHRoaXMuY3JlYXRlU2NhbGVzKClcbiAgICAgICAgdGhpcy5jcmVhdGVQYXRoKClcbiAgICAgICAgdGhpcy5jcmVhdGVBeGVzKClcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgY3JlYXRlU2NhbGVzKCkge1xuICAgICAgICBjb25zdCBzY2FsZXMgPSB0aGlzLnNjYWxlc1xuICAgICAgICBjb25zdCBvcCA9IHRoaXMub3B0aW9uc1xuXG4gICAgICAgIHNjYWxlcy54ID0gZDMuc2NhbGVMaW5lYXIoKS5kb21haW4ob3AueHJhbmdlKS5yYW5nZShbMCwgb3Aud2lkdGhdKS5jbGFtcCh0cnVlKVxuICAgICAgICBzY2FsZXMueSA9IGQzLnNjYWxlTG9nKCkuZG9tYWluKG9wLnlyYW5nZSkucmFuZ2UoWzAsIG9wLmhlaWdodF0pLmNsYW1wKHRydWUpXG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGNyZWF0ZUF4ZXMoKSB7XG4gICAgICAgIGNvbnN0IHNlbHMgPSB0aGlzLnNlbHNcbiAgICAgICAgY29uc3Qgc2NhbGVzID0gdGhpcy5zY2FsZXNcbiAgICAgICAgY29uc3Qgb3AgPSB0aGlzLm9wdGlvbnNcblxuICAgICAgICAvLyBDcmVhdGUgYXhlc1xuICAgICAgICBzZWxzLnlheGlzID0gdGhpcy5iYXNlLmFwcGVuZChcImdcIilcbiAgICAgICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJheGlzIGF4aXMtLXlcIilcbiAgICAgICAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIFNWRy50cmFuc2xhdGUoMCwgLSBheGlzT2Zmc2V0KSlcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgIC5jYWxsKGQzLmF4aXNMZWZ0KHNjYWxlcy55KS50aWNrRm9ybWF0KFwiXCIpLnRpY2tzKDQpKTtcblxuICAgICAgICBzZWxzLnhheGlzID0gdGhpcy5iYXNlLmFwcGVuZChcImdcIilcbiAgICAgICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJheGlzIGF4aXMtLXhcIilcbiAgICAgICAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIFNWRy50cmFuc2xhdGUoMCwgb3AuaGVpZ2h0IC0gYXhpc09mZnNldCkpXG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICAuY2FsbChkMy5heGlzQm90dG9tKHNjYWxlcy54KS50aWNrRm9ybWF0KFwiXCIpLnRpY2tzKDQpKTtcblxuICAgICAgICAvLyBBZGQgeGxhYmVsXG4gICAgICAgIHRoaXMuYmFzZS5hcHBlbmQoXCJ0ZXh0XCIpXG4gICAgICAgICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBTVkcudHJhbnNsYXRlKG9wLndpZHRoIC8gMiwgb3AubWFyZ2luLnRvcCArIG9wLmhlaWdodCArIDEwKSlcbiAgICAgICAgICAgIC5zdHlsZShcInRleHQtYW5jaG9yXCIsIFwibWlkZGxlXCIpXG4gICAgICAgICAgICAudGV4dChcIlRpbWVcIilcblxuICAgICAgICAvLyBBZGQgeWxhYmVsXG4gICAgICAgIHRoaXMuYmFzZS5hcHBlbmQoXCJ0ZXh0XCIpXG4gICAgICAgICAgICAuc3R5bGUoXCJ0ZXh0LWFuY2hvclwiLCBcIm1pZGRsZVwiKVxuICAgICAgICAgICAgLnRleHQoXCJMb3NzXCIpXG4gICAgICAgICAgICAuYXR0cihcInlcIiwgb3AucGFkLmxlZnQgLSBvcC5tYXJnaW4ubGVmdClcbiAgICAgICAgICAgIC5hdHRyKFwieFwiLCBvcC5wYWQudG9wIC0gKG9wLmhlaWdodCAvIDIpKVxuICAgICAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgU1ZHLnJvdGF0ZSgtOTApKVxuICAgICAgICAvLyAuYXR0cihcInRyYW5zZm9ybVwiLCBTVkcudHJhbnNsYXRlKG9wLm1hcmdpbi5sZWZ0LCBvcC5oZWlnaHQvMikpXG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGNyZWF0ZVBhdGgoKSB7XG4gICAgICAgIHRoaXMucGF0aCA9IGQzLmxpbmU8bnVtYmVyPigpXG4gICAgICAgICAgICAueCgoZDogbnVtYmVyLCBpOiBudW1iZXIpID0+IHRoaXMuc2NhbGVzLngoaSkpXG4gICAgICAgICAgICAueSgoZDogbnVtYmVyLCBpOiBudW1iZXIpID0+IHRoaXMuc2NhbGVzLnkoZCkpXG4gICAgICAgICAgICAuY3VydmUoZDMuY3VydmVMaW5lYXIpXG4gICAgfVxuXG4gICAgZGF0YSgpOiBUXG4gICAgZGF0YSh2YWw6IFQpOiB0aGlzXG4gICAgZGF0YSh2YWw/KSB7XG4gICAgICAgIGlmICh2YWwgPT0gbnVsbCkgcmV0dXJuIHRoaXMuX2RhdGFcbiAgICAgICAgdGhpcy5fZGF0YSA9IHZhbDtcbiAgICAgICAgcmV0dXJuIHRoaXNcbiAgICB9XG59IiwiaW1wb3J0ICogYXMgZDMgZnJvbSAnZDMnXG5pbXBvcnQgKiBhcyBSIGZyb20gJ3JhbWRhJ1xuXG5pbXBvcnQgeyBDaGFydDJELCBDaGFydE9wdGlvbnMsIENoYXJ0U2NhbGVzIH0gZnJvbSAnLi4vdXRpbC9DaGFydDJkVmlzQ29tcG9uZW50J1xuaW1wb3J0IHsgU2ltcGxlRXZlbnRIYW5kbGVyIH0gZnJvbSAnLi4vdXRpbC9TaW1wbGVFdmVudEhhbmRsZXInXG5pbXBvcnQgeyBEM1NlbCB9IGZyb20gJy4uL3V0aWwveGQzJ1xuaW1wb3J0IHsgU1ZHIH0gZnJvbSAnLi4vdXRpbC9TVkdwbHVzJ1xuaW1wb3J0IHsgQmFsbEhpc3RvcnkgfSBmcm9tICcuL0dvbGZCYWxsJ1xuXG5jb25zdCBheGlzT2Zmc2V0ID0gMSAvLyBVc2UgdGhpcyB0byBjb3ZlciB0aGUgcGxvdHRlZCBsaW5lc1xuXG5pbnRlcmZhY2UgR3JhcGhTZWxzIHtcbiAgICB4YXhpcz86IEQzU2VsXG4gICAgeWF4aXM/OiBEM1NlbFxuICAgIHhsYWJlbD86IEQzU2VsXG4gICAgbGluZT86IEQzU2VsXG4gICAgYmFja2Ryb3A/OiBEM1NlbFxuICAgIGJhbGw/OiBEM1NlbFxufVxuXG50eXBlIFRyYWNrZXIgPSB7XG4gICAgc2VsOiBEM1NlbCxcbiAgICB2YWxzOiBudW1iZXJbXVxufVxuXG50eXBlIExpbmVUcmFja2VyID0ge1xuICAgIChrZXk6IHN0cmluZyk6IFRyYWNrZXJcbn1cblxudHlwZSBUID0gTGluZVRyYWNrZXJcblxuZXhwb3J0IGNsYXNzIEdvbGZYRGlzdCBleHRlbmRzIENoYXJ0MkQ8VD4ge1xuICAgIGNzc25hbWUgPSBcImxpbmUtcGxvdFwiXG5cbiAgICBfZGF0YTogVFxuXG4gICAgb3B0aW9uczogQ2hhcnRPcHRpb25zID0ge1xuICAgICAgICBtYXhXaWR0aDogMzUwLFxuICAgICAgICBtYXhIZWlnaHQ6IDI1MCxcbiAgICAgICAgbWFyZ2luOiB7IHRvcDogMTAsIHJpZ2h0OiAxMCwgYm90dG9tOiAzMCwgbGVmdDogMzAgfSxcbiAgICAgICAgcGFkOiB7IHRvcDogNSwgcmlnaHQ6IDEsIGJvdHRvbTogMTAsIGxlZnQ6IDE1IH0sXG4gICAgICAgIHhyYW5nZTogWzAsIDYwMF0sXG4gICAgICAgIHlyYW5nZTogWzE1LCAwXSxcbiAgICB9XG5cbiAgICBzY2FsZXM6IENoYXJ0U2NhbGVzID0ge31cblxuICAgIHNlbHM6IEdyYXBoU2VscyA9IHt9XG5cbiAgICBwYXRoOiBkMy5MaW5lPG51bWJlcj5cblxuICAgIGNvbnN0cnVjdG9yKGQzcGFyZW50OiBEM1NlbCwgZXZlbnRIYW5kbGVyPzogU2ltcGxlRXZlbnRIYW5kbGVyLCBvcHRpb25zID0ge30pIHtcbiAgICAgICAgc3VwZXIoZDNwYXJlbnQsIGV2ZW50SGFuZGxlciwgb3B0aW9ucylcbiAgICAgICAgc3VwZXIuaW5pdFNWRyh0aGlzLm9wdGlvbnMsIFtcImJnXCJdKVxuICAgICAgICB0aGlzLmJhc2UuY2xhc3NlZCh0aGlzLmNzc25hbWUsIHRydWUpXG4gICAgICAgIHRoaXMuZGF0YSg8TGluZVRyYWNrZXI+e30pXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUGxvdCB0aGUgdmFsdWVzIG9mIGFsbCB4IGFjY29yZGluZyB0byB0aGUgZnVuY3Rpb25cbiAgICAgKiBcbiAgICAgKiBAcGFyYW0geCBBIGxpbnNwYWNlIG9mIHggdmFsdWVzIG92ZXIgd2hpY2ggdG8gcGxvdCBhIGN1cnZlXG4gICAgICovXG4gICAgcHJvdGVjdGVkIGFkZERhdGFLZXlfKGNsYXNzbmFtZTogc3RyaW5nKSB7XG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzXG4gICAgICAgIGlmICghUi5oYXMoY2xhc3NuYW1lLCB0aGlzLmRhdGEoKSkpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBBZGRpbmcga2V5OiAke2NsYXNzbmFtZX1gKTtcbiAgICAgICAgICAgIHRoaXMuZGF0YSgpW2NsYXNzbmFtZV0gPSB7XG4gICAgICAgICAgICAgICAgc2VsOiBzZWxmLmluaXRCYXNlTGluZShjbGFzc25hbWUpLFxuICAgICAgICAgICAgICAgIHZhbHM6IFtdXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjbGVhclBhdGhzKCkge1xuICAgICAgICB0aGlzLmRhdGEoUi5tYXAoZCA9PiBSLmFzc29jKCd2YWxzJywgW10sIGQpLCB0aGlzLmRhdGEoKSkpXG4gICAgfVxuXG4gICAgcGxvdFBhdGgoZDogQmFsbEhpc3RvcnkpIHtcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgICAgIHRoaXMuYWRkRGF0YUtleV8oZC5jbGFzc25hbWUpO1xuXG4gICAgICAgIGNvbnN0IGN1cnJWYWxzID0gdGhpcy5kYXRhKClbZC5jbGFzc25hbWVdO1xuICAgICAgICBjdXJyVmFscy52YWxzLnB1c2goTWF0aC5hYnMoZC54KSk7XG5cbiAgICAgICAgLy8gc2xpZGluZyB4LWF4aXNcbiAgICAgICAgY29uc3QgbmV3WHJhbmdlID0gW01hdGgubWF4KDAsIGN1cnJWYWxzLnZhbHMubGVuZ3RoLXRoaXMub3B0aW9ucy54cmFuZ2VbMV0pLCBNYXRoLm1heChjdXJyVmFscy52YWxzLmxlbmd0aCx0aGlzLm9wdGlvbnMueHJhbmdlWzFdKV1cbiAgICAgICAgLy8gY29uc3QgbmV3WHJhbmdlID0gWzAsIGN1cnJWYWxzLnZhbHMubGVuZ3RoXVxuICAgICAgICB0aGlzLnVwZGF0ZVNjYWxlcyhuZXdYcmFuZ2UpXG4gICAgICAgIHRoaXMuY3JlYXRlUGF0aCgpXG5cbiAgICAgICAgY3VyclZhbHMuc2VsLmRhdGEoW2N1cnJWYWxzXSlcbiAgICAgICAgICAgIC5qb2luKFwicGF0aFwiKVxuICAgICAgICAgICAgLmNsYXNzZWQoZC5jbGFzc25hbWUsIHRydWUpXG4gICAgICAgICAgICAuYXR0cihcImRcIiwgZCA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHNlbGYucGF0aChkLnZhbHMpXG4gICAgICAgICAgICB9KVxuICAgIH1cblxuICAgIC8vIExpdmUgdXBkYXRlIHRoZSB4cmFuZ2VcbiAgICB1cGRhdGVTY2FsZXMoeHJhbmdlKSB7XG4gICAgICAgIGNvbnN0IG9wID0gdGhpcy5vcHRpb25zXG4gICAgICAgIHRoaXMuc2NhbGVzLnggPSBkMy5zY2FsZUxpbmVhcigpLmRvbWFpbih4cmFuZ2UpLnJhbmdlKFswLCBvcC53aWR0aF0pLmNsYW1wKHRydWUpXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBpbml0QmFzZUxpbmUoY2xhc3NuYW1lOiBzdHJpbmcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubGF5ZXJzLmJnLmFwcGVuZChcInBhdGhcIilcbiAgICAgICAgICAgIC5jbGFzc2VkKGNsYXNzbmFtZSwgdHJ1ZSlcbiAgICAgICAgICAgIC5jbGFzc2VkKCdsaW5lJywgdHJ1ZSlcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgY3JlYXRlU2NhbGVzKCkge1xuICAgICAgICBjb25zdCBvcCA9IHRoaXMub3B0aW9uc1xuICAgICAgICB0aGlzLnNjYWxlcy54ID0gZDMuc2NhbGVMaW5lYXIoKS5kb21haW4ob3AueHJhbmdlKS5yYW5nZShbMCwgb3Aud2lkdGhdKS5jbGFtcCh0cnVlKVxuICAgICAgICB0aGlzLnNjYWxlcy55ID0gZDMuc2NhbGVMaW5lYXIoKS5kb21haW4ob3AueXJhbmdlKS5yYW5nZShbMCwgb3AuaGVpZ2h0XSkuY2xhbXAodHJ1ZSlcbiAgICB9XG5cbiAgICBpbml0KCkge1xuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICAgICAgY29uc3Qgb3AgPSB0aGlzLm9wdGlvbnM7XG4gICAgICAgIGNvbnN0IHNjYWxlcyA9IHRoaXMuc2NhbGVzO1xuICAgICAgICBjb25zdCBzZWxzID0gdGhpcy5zZWxzO1xuXG4gICAgICAgIHRoaXMuY3JlYXRlU2NhbGVzKClcbiAgICAgICAgdGhpcy5jcmVhdGVQYXRoKClcbiAgICAgICAgdGhpcy5jcmVhdGVBeGVzKClcbiAgICB9XG5cblxuICAgIHByb3RlY3RlZCBjcmVhdGVBeGVzKCkge1xuICAgICAgICBjb25zdCBzZWxzID0gdGhpcy5zZWxzXG4gICAgICAgIGNvbnN0IHNjYWxlcyA9IHRoaXMuc2NhbGVzXG4gICAgICAgIGNvbnN0IG9wID0gdGhpcy5vcHRpb25zXG5cbiAgICAgICAgLy8gQ3JlYXRlIGF4ZXNcbiAgICAgICAgc2Vscy54YXhpcyA9IHRoaXMuYmFzZS5hcHBlbmQoXCJnXCIpXG4gICAgICAgICAgICAuYXR0cihcImNsYXNzXCIsIFwiYXhpcyBheGlzLS14XCIpXG4gICAgICAgICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBTVkcudHJhbnNsYXRlKDAsIG9wLmhlaWdodCAtIGF4aXNPZmZzZXQpKVxuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgLmNhbGwoZDMuYXhpc0JvdHRvbShzY2FsZXMueCkudGlja3MoNCkudGlja0Zvcm1hdChcIlwiKSk7XG5cbiAgICAgICAgc2Vscy55YXhpcyA9IHRoaXMuYmFzZS5hcHBlbmQoXCJnXCIpXG4gICAgICAgICAgICAuYXR0cihcImNsYXNzXCIsIFwiYXhpcyBheGlzLS15XCIpXG4gICAgICAgICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBTVkcudHJhbnNsYXRlKDAsIC0gYXhpc09mZnNldCkpXG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICAuY2FsbChkMy5heGlzTGVmdChzY2FsZXMueSkudGlja3MoNCkudGlja0Zvcm1hdChcIlwiKSk7XG5cbiAgICAgICAgdGhpcy5iYXNlLmFwcGVuZChcInRleHRcIilcbiAgICAgICAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIFNWRy50cmFuc2xhdGUob3Aud2lkdGggLyAyLCBvcC5tYXJnaW4udG9wICsgb3AuaGVpZ2h0ICsgMTApKVxuICAgICAgICAgICAgLnN0eWxlKFwidGV4dC1hbmNob3JcIiwgXCJtaWRkbGVcIilcbiAgICAgICAgICAgIC50ZXh0KFwiVGltZVwiKVxuXG4gICAgICAgIHRoaXMuYmFzZS5hcHBlbmQoXCJ0ZXh0XCIpXG4gICAgICAgICAgICAuc3R5bGUoXCJ0ZXh0LWFuY2hvclwiLCBcIm1pZGRsZVwiKVxuICAgICAgICAgICAgLnRleHQoXCJcXHUwM0I4IC0gXFx1MDNCOCpcIilcbiAgICAgICAgICAgIC5hdHRyKFwieVwiLCBvcC5wYWQubGVmdCAtIG9wLm1hcmdpbi5sZWZ0KVxuICAgICAgICAgICAgLmF0dHIoXCJ4XCIsIG9wLnBhZC50b3AgLSAob3AuaGVpZ2h0IC8gMikpXG4gICAgICAgICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBTVkcucm90YXRlKC05MCkpXG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGNyZWF0ZVBhdGgoKSB7XG4gICAgICAgIHRoaXMucGF0aCA9IGQzLmxpbmU8bnVtYmVyPigpXG4gICAgICAgICAgICAueCgoZDogbnVtYmVyLCBpOiBudW1iZXIpID0+IHRoaXMuc2NhbGVzLngoaSkpXG4gICAgICAgICAgICAueSgoZDogbnVtYmVyLCBpOiBudW1iZXIpID0+IHRoaXMuc2NhbGVzLnkoZCkpXG4gICAgICAgICAgICAuY3VydmUoZDMuY3VydmVMaW5lYXIpXG4gICAgfVxuXG4gICAgZGF0YSgpOiBUXG4gICAgZGF0YSh2YWw6IFQpOiB0aGlzXG4gICAgZGF0YSh2YWw/KSB7XG4gICAgICAgIGlmICh2YWwgPT0gbnVsbCkgcmV0dXJuIHRoaXMuX2RhdGFcbiAgICAgICAgdGhpcy5fZGF0YSA9IHZhbDtcbiAgICAgICAgcmV0dXJuIHRoaXNcbiAgICB9XG59IiwiaW1wb3J0ICogYXMgZDMgZnJvbSAnZDMnXG5pbXBvcnQgeyBiYXNlTG9zcyB9IGZyb20gJy4uL0dvbGZMYW5kc2NhcGVzJ1xuXG5leHBvcnQgY2xhc3MgTWFudWFsVXBkYXRlciB7XG4gICAgZjogKHg6IG51bWJlcikgPT4gbnVtYmVyXG4gICAgZGY6ICh4OiBudW1iZXIpID0+IG51bWJlclxuXG4gICAgcTogbnVtYmVyICAgLy8gMCAtPiAxLCB3aGVyZSAwIGlzIFNHRCBhbmQgMSBpcyBOR0QuIDAuNSBpcyBzcXJ0IE5HRC4gW3N0ZXAgPSAtIGV0YSAqIEggXiAoLTEvcSkgKiBnXSAoSCA9IDAgd2hlbiBxPTApXG4gICAgZXRhOiBudW1iZXIgLy8gYWthICdsZWFybmluZyByYXRlJ1xuXG4gICAgY29uc3RydWN0b3IoZiwgZGYsIHEgPSAwLCBldGEgPSAwLjEpIHtcbiAgICAgICAgdGhpcy5mID0gZjtcbiAgICAgICAgdGhpcy5kZiA9IGRmO1xuICAgICAgICB0aGlzLnEgPSBxO1xuICAgICAgICB0aGlzLmV0YSA9IGV0YTtcbiAgICB9XG5cbiAgICAvLyBDYWxjdWxhdGUgZXJyb3Igc3F1YXJlZCBvZiB0aGUgYmFzZSBmdW5jdGlvblxuICAgIGxvc3MoeDogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIGJhc2VMb3NzKHRoaXMuZih4KSlcbiAgICB9XG5cbiAgICAvLyBHcmFkaWVudCBhdCB4XG4gICAgZ3JhZGllbnQoeDogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZih4KSAqIHRoaXMuZGYoeClcbiAgICB9XG5cbiAgICAvLyBUaGUgcG9zaXRpdmUgc2VtaS1kZWZpbml0ZSBoZXNzaWFuIGF0IHhcbiAgICBwc2RoZXNzKHg6IG51bWJlcik6IG51bWJlciB7XG4gICAgICAgIHJldHVybiBNYXRoLnBvdyh0aGlzLmRmKHgpLCAyKVxuICAgIH1cblxuICAgIC8vIFRoZSBhbW91bnQgdG8gdXBkYXRlIGF0IHggZ2l2ZW4gdGhlIGxlYXJuaW5nIHJhdGUgZXRhXG4gICAgc3RlcCh4OiBudW1iZXIpOiBudW1iZXIge1xuICAgICAgICBjb25zdCBzdGVwID0geSA9PiAtIHRoaXMuZXRhICogeTtcbiAgICAgICAgLy8gQ291bGQgdXNlIHBzZGhlc3MgaW4gdGhlIGVxdWF0aW9uIGJlbG93LCBidXQgZHVlIHRvIG51bWVyaWNhbCBpc3N1ZXMgdGhpcyBmb3JtdWxhdGlvbiBjb21wdXRlcyBtb3JlIHJlbGlhYmx5XG4gICAgICAgIGNvbnN0IHVwZGF0ZUFtdCA9IHRoaXMuZih4KSAqIE1hdGgucG93KHRoaXMuZGYoeCksIDEgLSAoMiAqIHRoaXMucSkpXG4gICAgICAgIHJldHVybiBzdGVwKHVwZGF0ZUFtdClcbiAgICB9XG5cbiAgICAvLyBHZXQgdGhlIG5leHQgeCB2YWx1ZSBhZnRlciB0YWtpbmcgYSBzdGVwXG4gICAgbmV4dCh4OiBudW1iZXIpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4geCArIHRoaXMuc3RlcCh4KVxuICAgIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9
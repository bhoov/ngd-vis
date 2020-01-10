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
        name: "hole",
        f: x => Math.tanh(x * 3),
        df: x => Math.pow(Math.cosh(x * 3), -2) * 3,
        xrange: [-6 / 3, 6 / 3],
        yrange: [0, 0.6],
        loss: baseLoss
    },
    steps: {
        name: "steps",
        f: x => Math.tanh(x * 9.5 - 11) / 4 + Math.tanh(x * 9.5 - 6) / 4 + Math.tanh(x * 9.5) + Math.tanh(x * 9.5 + 6) / 4 + Math.tanh(x * 9.5 + 11) / 4,
        df: x => (Math.pow(Math.cosh(x * 9.5 - 11), -2) / 4 + Math.pow(Math.cosh(x * 9.5 - 6), -2) / 4 + Math.pow(Math.cosh(x * 9.5), -2) + Math.pow(Math.cosh(x * 9.5 + 6), -2) / 4 + Math.pow(Math.cosh(x * 9.5 + 11), -2) / 4) * 9.5,
        xrange: [-13.6 / 9.5, 13.6 / 9.5],
        yrange: [0, 2.5],
        loss: baseLoss
    },
    seagull: {
        name: "seagull",
        f: x => Math.sign(x) * (1 - (1 / (1 + Math.abs(x * 6)))),
        df: x => 6 / Math.pow(1 + Math.abs(x * 6), 2),
        xrange: [-12 / 6, 12 / 6],
        yrange: [0, 0.6],
        loss: baseLoss
    },
    bowl: {
        name: "bowl",
        f: x => Math.sinh(x / 3),
        df: x => Math.cosh(x / 3) / 3,
        xrange: [-3 * 3, 3 * 3],
        yrange: [0, 50],
        loss: baseLoss
    },
    deep_net: {
        name: "deep_net",
        f: x => Math.pow(Math.abs(x / 3 + 1), 3) - 1,
        df: x => 3 / 3 * Math.pow(Math.abs(x / 3 + 1), 2),
        // xrange: [-0.7*4, 0.7*4],
        xrange: [-0.9 * 3, 0.9 * 3],
        yrange: [0, 4],
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
/* harmony import */ var _util_UId__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util/UId */ "./src/ts/util/UId.ts");
/* harmony import */ var _vis_ContourPlot__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./vis/ContourPlot */ "./src/ts/vis/ContourPlot.ts");
/* harmony import */ var _vis_GolfHole1D__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./vis/GolfHole1D */ "./src/ts/vis/GolfHole1D.ts");
/* harmony import */ var _vis_GolfLosses__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./vis/GolfLosses */ "./src/ts/vis/GolfLosses.ts");
/* harmony import */ var _vis_GolfXDist__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./vis/GolfXDist */ "./src/ts/vis/GolfXDist.ts");
/* harmony import */ var _vis_GolfBall__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./vis/GolfBall */ "./src/ts/vis/GolfBall.ts");
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ramda */ "./node_modules/ramda/es/index.js");
/* harmony import */ var _util_SimpleEventHandler__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./util/SimpleEventHandler */ "./src/ts/util/SimpleEventHandler.ts");
/* harmony import */ var _vis_ManualUpdater__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./vis/ManualUpdater */ "./src/ts/vis/ManualUpdater.ts");
/* harmony import */ var _GolfLandscapes__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./GolfLandscapes */ "./src/ts/GolfLandscapes.ts");











const toFixed = ramda__WEBPACK_IMPORTED_MODULE_7__["curry"]((ndigits, x) => x.toFixed(ndigits));
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
        graph: new _vis_ContourPlot__WEBPACK_IMPORTED_MODULE_2__["ContourPlot"](sels.quiverPlot)
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
    const eventHandler = new _util_SimpleEventHandler__WEBPACK_IMPORTED_MODULE_8__["SimpleEventHandler"](vis2.node());
    const vizs = {
        graph: new _vis_GolfHole1D__WEBPACK_IMPORTED_MODULE_3__["GolfHole1D"](sels.chart, eventHandler, {}, _util_UId__WEBPACK_IMPORTED_MODULE_1__["UId"].uid()),
        chartXDist: new _vis_GolfXDist__WEBPACK_IMPORTED_MODULE_5__["GolfXDist"](sels.chartXDist, eventHandler),
        chartLosses: new _vis_GolfLosses__WEBPACK_IMPORTED_MODULE_4__["GolfLosses"](sels.chartLosses, eventHandler)
    };
    // Attach golfball info to loss tracker
    eventHandler.bind('loss-click', (e) => {
        vizs.chartXDist.clearPaths();
        vizs.chartLosses.clearPaths();
    });
    // Configure html page to work with defaults
    sels.landscapeSelector.property('value', defaults.landscape);
    vizs.graph.landscape(_GolfLandscapes__WEBPACK_IMPORTED_MODULE_10__["landscapes"][defaults.landscape]);
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
        vizs.graph.landscape(_GolfLandscapes__WEBPACK_IMPORTED_MODULE_10__["landscapes"][v]);
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
    const eventHandler = new _util_SimpleEventHandler__WEBPACK_IMPORTED_MODULE_8__["SimpleEventHandler"](vis3.node());
    const vizs = {
        graph: new _vis_GolfHole1D__WEBPACK_IMPORTED_MODULE_3__["GolfHole1D"](sels.chart, eventHandler, { maxIter: 1.5e3 }, _util_UId__WEBPACK_IMPORTED_MODULE_1__["UId"].uid()),
        chartLosses: new _vis_GolfLosses__WEBPACK_IMPORTED_MODULE_4__["GolfLosses"](sels.chartLosses, eventHandler),
        chartXDist: new _vis_GolfXDist__WEBPACK_IMPORTED_MODULE_5__["GolfXDist"](sels.chartXDist, eventHandler)
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
    vizs.graph.data([new _vis_GolfBall__WEBPACK_IMPORTED_MODULE_6__["GolfBall"](new _vis_ManualUpdater__WEBPACK_IMPORTED_MODULE_9__["ManualUpdater"](_GolfLandscapes__WEBPACK_IMPORTED_MODULE_10__["landscapes"].hole.f, _GolfLandscapes__WEBPACK_IMPORTED_MODULE_10__["landscapes"].hole.df, defaults.q, defaults.eta), "golf-ball")]);
    vizs.graph.landscape(_GolfLandscapes__WEBPACK_IMPORTED_MODULE_10__["landscapes"].steps);
    // const etaRange = [-5, 2].map(x => Math.pow(10, x))
    const etaRange = [-3, 2].map(x => Math.pow(10, x));
    const scales = {
        q: d3__WEBPACK_IMPORTED_MODULE_0__["scaleLinear"]().range([0, 10]).domain([0, 1]),
        eta: d3__WEBPACK_IMPORTED_MODULE_0__["scaleLog"]().range([1, 1000]).domain(etaRange).base(10)
    };
    // Initialize graph parameters to match the defaults
    vizs.graph.landscape(_GolfLandscapes__WEBPACK_IMPORTED_MODULE_10__["landscapes"][defaults.landscape]);
    sels.landscapeSelector.property('value', defaults.landscape);
    sels.qSlider.property('value', scales.q(defaults.q));
    sels.etaSlider.property('value', scales.eta(defaults.eta));
    sels.qId.text(toQ(defaults.q));
    sels.etaId.text(toEta(defaults.eta));
    // Configure Interactivity
    sels.qSlider.on('input', function () {
        const me = d3__WEBPACK_IMPORTED_MODULE_0__["select"](this);
        const v = scales.q.invert(me.property('value'));
        vizs.graph.q(v);
        sels.qId.text(`${toQ(v)}`);
    });
    sels.etaSlider.on('input', function () {
        const me = d3__WEBPACK_IMPORTED_MODULE_0__["select"](this);
        const v = scales.eta.invert(me.property('value'));
        vizs.graph.eta(v);
        sels.etaId.text(`${toEta(v)}`);
    });
    sels.landscapeSelector.on('input', function () {
        const self = d3__WEBPACK_IMPORTED_MODULE_0__["select"](this);
        const v = self.property('value');
        vizs.graph.landscape(_GolfLandscapes__WEBPACK_IMPORTED_MODULE_10__["landscapes"][v]);
    });
    // Assign streams
    const streams = vizs.graph.data().map(b => b.stream);
    const plotter = {
        next: d => {
            vizs.chartXDist.plotPath(d, vizs.graph.scales.base2math.x.invert);
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
    constructor(d3parent, eventHandler, options = {}, ID = 0) {
        super(d3parent, eventHandler, ID);
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

/***/ "./src/ts/util/UId.ts":
/*!****************************!*\
  !*** ./src/ts/util/UId.ts ***!
  \****************************/
/*! exports provided: UId */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UId", function() { return UId; });
let the_unique_id_counter = 0;
let the_unique_string_counter = 0;
class UId {
    static uid() {
        the_unique_id_counter += 1;
        return the_unique_id_counter;
    }
    static simpleUId(prefix = '') {
        the_unique_string_counter += 1;
        return prefix + the_unique_string_counter;
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
        this.ticker = Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["interval"])(10).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["startWith"])(prep()), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["scan"])(v => self.updater.next(v), self.curr()), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["take"])(1000)).subscribe(subObj);
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










let CLEARED = 0;
// // Note that plotFunc is the loss function we plot and func is the component of the loss function needed for the updater
// // export const func = x => Math.tanh(x)
// // export const dFunc = x => Math.pow(Math.cosh(x), -2)
// export const func = x => Math.tanh(x - 11) / 4 + Math.tanh(x - 6) / 4 + Math.tanh(x) + Math.tanh(x + 6) / 4 + Math.tanh(x + 11) / 4
// export const dFunc = x => Math.pow(Math.cosh(x - 11), -2) / 4 + Math.pow(Math.cosh(x - 6), -2) / 4 + Math.pow(Math.cosh(x), -2) + Math.pow(Math.cosh(x + 6), -2) / 4 + Math.pow(Math.cosh(x + 11), -2) / 4
// // export const func = x => Math.sign(x) * (1 - (1 / (1 + Math.abs(x))))
// // export const dFunc = x => 1 / Math.pow(1 + Math.abs(x), 2)
// export const plotFunc = x => baseLoss(func(x))
class GolfHole1D extends _util_SVGVisComponent__WEBPACK_IMPORTED_MODULE_3__["SVGVisComponent"] {
    constructor(d3parent, eventHandler, options = {}, ID = 0) {
        super(d3parent, eventHandler, options, ID);
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
        this.maskId = `line-mask-${this.ID}`;
        super.initSVG(options, ["bg"]);
        this.base.classed(this.cssname, true);
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
        this.clearCurve();
        this.plotCurve();
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
        return { x: this.scales.math2px.x(v.x), y: this.scales.math2px.y(v.y) };
    }
    // Take a vector in the coordinate system and return it to the math coordinates
    intoMath(v) {
        return { x: this.scales.math2px.x.invert(v.x), y: this.scales.math2px.y.invert(v.y) };
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
        this.sels.maskLine.html('');
        this.base.selectAll('#line-background').html('');
    }
    plotCurveByDefault(xs) {
        const self = this, scales = this.scales, sels = this.sels;
        scales.paths.forEach(line => {
            this.layers.bg.append("path")
                .datum(xs)
                .attr("class", "line")
                .attr("d", d => {
                return line(d);
            });
        });
    }
    plotCurveByGradient(xs) {
        const self = this, scales = this.scales, sels = this.sels, op = this.options;
        const xwidth = op.width * (xs[1] - xs[0]) / (d3__WEBPACK_IMPORTED_MODULE_0__["max"](xs) - d3__WEBPACK_IMPORTED_MODULE_0__["min"](xs)); // Assumes length of xs > 1
        const ballUpdater = self.data()[0].updater;
        // Clear mask
        const line = scales.paths[0];
        sels.maskLine.attr('d', line(xs));
        const colorScale = d3__WEBPACK_IMPORTED_MODULE_0__["scaleSequential"](d3__WEBPACK_IMPORTED_MODULE_0__["interpolatePlasma"]);
        // Check the gradient range
        const updateAmts = xs.map(x => Math.log(Math.abs(ballUpdater.updateModifier(x))));
        const clampedScale = ramda__WEBPACK_IMPORTED_MODULE_2__["curry"]((min, max, arr) => {
            const clamper = ramda__WEBPACK_IMPORTED_MODULE_2__["clamp"](min, max);
            const clampedArr = ramda__WEBPACK_IMPORTED_MODULE_2__["map"](clamper, arr);
            return arr.map(x => x - d3__WEBPACK_IMPORTED_MODULE_0__["mean"](clampedArr));
            // return clampedArr.map(x => x - d3.mean(clampedArr))
        });
        // const clamper = clampedScale(-2, 2);
        // const data = d3.zip(xs, clamper(updateAmts)).map(d => {return {x: d[0], updateAmt: d[1]}})
        const data = d3__WEBPACK_IMPORTED_MODULE_0__["zip"](xs, updateAmts).map(d => { return { x: d[0], updateAmt: d[1] }; });
        // const extent = d3.extent(clamper(updateAmts))
        // console.log("Extent: ", extent);
        //@ts-ignore
        const cscale = d3__WEBPACK_IMPORTED_MODULE_0__["scaleLinear"]().domain([-2, 0, 2]).range(["#67a9cf", "#f7f7f7", "#ef8a62"]);
        sels.lineBackground.selectAll('.grad-box')
            .data(data)
            .join('rect')
            .classed('grad-box', true)
            .attr('height', op.height)
            .attr('width', self.scales.math2px.x(xwidth))
            .attr('x', d => self.scales.math2px.x(d.x))
            .attr('y', 0)
            .attr('fill', d => {
            return cscale(d.updateAmt);
        });
        sels.lineBackground.attr('mask', `url(#${this.maskId})`);
    }
    /**
     * Plot the values of all x according to the function
     *
     * @param x A linspace of x values over which to plot a curve
     */
    plotCurve() {
        const op = this.options;
        const xs = Object(_util_xd3__WEBPACK_IMPORTED_MODULE_1__["linspace"])(op.landscape.xrange[0], op.landscape.xrange[1], 1000);
        const self = this, scales = this.scales, sels = this.sels;
        if (self.data() != null) {
            if (self.data().length > 1)
                self.plotCurveByDefault(xs);
            else
                self.plotCurveByGradient(xs);
        }
    }
    updateScales(op) {
        const scales = this.scales;
        const xbaseRange = [-1, 1];
        const ybaseRange = [1, 0];
        const xpxRange = [0, op.width];
        const ypxRange = [op.height, 0];
        scales.base2math = {
            x: d3__WEBPACK_IMPORTED_MODULE_0__["scaleLinear"]().domain(xbaseRange).range(op.landscape.xrange),
            y: d3__WEBPACK_IMPORTED_MODULE_0__["scaleLinear"]().domain(ybaseRange).range(op.landscape.yrange)
        };
        scales.base2px = {
            x: d3__WEBPACK_IMPORTED_MODULE_0__["scaleLinear"]().domain(xbaseRange).range(xpxRange),
            y: d3__WEBPACK_IMPORTED_MODULE_0__["scaleLinear"]().domain(ybaseRange).range(ypxRange)
        };
        scales.math2px = {
            x: d3__WEBPACK_IMPORTED_MODULE_0__["scaleLinear"]().domain(op.landscape.xrange).range(xpxRange),
            y: d3__WEBPACK_IMPORTED_MODULE_0__["scaleLinear"]().domain(op.landscape.yrange).range(ypxRange)
        };
        scales.paths = this.newPaths(op.landscape);
    }
    updateAxes(scales, op) {
        const sels = this.sels;
        sels.xaxis.call(d3__WEBPACK_IMPORTED_MODULE_0__["axisBottom"](scales.math2px.x).tickValues([0]).tickFormat(x => '0'));
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
        // Add base mask
        sels.mask = this.base.append('mask').attr('id', this.maskId);
        sels.maskBackground = sels.mask.append('rect')
            .attr('width', op.width)
            .attr('height', op.height)
            .attr('fill', 'black');
        sels.maskLine = sels.mask.
            selectAll("#transparent-line").
            data([1])
            .join('path')
            .attr('id', 'transparent-line')
            .attr('stroke', 'white')
            .attr('stroke-width', '5px');
        sels.lineBackground = self.base.selectAll('#line-background')
            .data([1])
            .join('g')
            .attr('id', 'line-background');
        this.updateAxes(scales, op);
        scales.paths = this.newPaths(op.landscape);
        this.plotCurve();
    }
    newPaths(landscape) {
        const scales = this.scales;
        const baseLine = d3__WEBPACK_IMPORTED_MODULE_0__["line"]()
            .x((d, i) => scales.math2px.x(d))
            .y((d, i) => scales.math2px.y(Object(_GolfLandscapes__WEBPACK_IMPORTED_MODULE_9__["getPlotFunc"])(landscape)(d)))
            .curve(d3__WEBPACK_IMPORTED_MODULE_0__["curveLinear"]);
        return [baseLine];
    }
    initBalls() {
        const self = this, op = this.options;
        // Create Backdrop for mouse interfaces
        this.sels.backdrop = this.layers.bg.append("g")
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
        const plotBalls = function () {
            runningTicker.unsubscribe();
            const click = toVec(d3__WEBPACK_IMPORTED_MODULE_0__["mouse"](this));
            d3__WEBPACK_IMPORTED_MODULE_0__["selectAll"]('.golf-ball').classed('dead-ball', false);
            self.data().forEach((b, i) => b.x = self.intoMath(click).x);
            self.data().forEach(b => self.plotBall(b));
            self.eventHandler.trigger("loss-click", {});
            runningTicker = ticker();
        };
        this.sels.backdrop.on('click', plotBalls);
        // this.sels.mask.on('click', plotBalls)
        this.sels.lineBackground.on('click', plotBalls);
    }
    q(val) {
        if (val == null)
            return this.dataHead.updater.q;
        this.dataHead.q(val);
        this.plotCurve();
        return this;
    }
    eta(val) {
        if (val == null)
            return this.dataHead.updater.q;
        this.dataHead.eta(val);
        // this.plotCurve()
        return this;
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
            yrange: [1, 0],
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
    plotPath(d, scale) {
        const self = this;
        this.addDataKey_(d.classname);
        const scaler = (scale == null) ? x => x : scale;
        const currVals = this.data()[d.classname];
        currVals.vals.push(scaler(Math.abs(d.x)));
        // sliding x-axis
        const newXrange = [Math.max(0, currVals.vals.length - this.options.xrange[1]), Math.max(currVals.vals.length, this.options.xrange[1])];
        this.updateScales(newXrange);
        this.createPath(); // Depends on x scale
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
    updateModifier(x) {
        return Math.pow(this.df(x), 1 - (2 * this.q));
    }
    updateAmt(x) {
        return this.f(x) * this.updateModifier(x);
    }
    // The amount to update at x given the learning rate eta
    step(x) {
        // Could use psdhess in the equation below, but due to numerical issues this formulation computes more reliably
        return -this.eta * this.updateAmt(x);
    }
    // Get the next x value after taking a step
    next(x) {
        return x + this.step(x);
    }
}


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nzcy9tYWluLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy90cy9Hb2xmTGFuZHNjYXBlcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHMvVXBkYXRlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHMvbWFpbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHMvcGxvdHRpbmcudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RzL3V0aWwvQ2hhcnQyZFZpc0NvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHMvdXRpbC9TVkdWaXNDb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RzL3V0aWwvU1ZHcGx1cy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHMvdXRpbC9TaW1wbGVFdmVudEhhbmRsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RzL3V0aWwvVUlkLnRzIiwid2VicGFjazovLy8uL3NyYy90cy91dGlsL1Zpc0NvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHMvdXRpbC94ZDMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RzL3Zpcy9Db250b3VyUGxvdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHMvdmlzL0dvbGZCYWxsLnRzIiwid2VicGFjazovLy8uL3NyYy90cy92aXMvR29sZkhvbGUxRC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHMvdmlzL0dvbGZMb3NzZXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RzL3Zpcy9Hb2xmWERpc3QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RzL3Zpcy9NYW51YWxVcGRhdGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLFFBQVEsb0JBQW9C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RyxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQztRQUNoSixFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLEdBQUcsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBRSxHQUFHLEdBQUc7UUFDaE8sTUFBTSxFQUFFLENBQUMsQ0FBQyxJQUFJLEdBQUcsR0FBRyxFQUFFLElBQUksR0FBRyxHQUFHLENBQUM7UUFDakMsTUFBTSxFQUFFLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQztRQUNoQixJQUFJLEVBQUUsUUFBUTtLQUNqQjtJQUNELE9BQU8sRUFBRTtRQUNMLElBQUksRUFBRSxTQUFTO1FBQ2YsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFB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LEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNqRCxDQUFDO0lBRUQsU0FBUyxDQUFDLENBQVM7UUFDZixPQUFPLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7SUFDN0MsQ0FBQztJQUVELHdEQUF3RDtJQUN4RCxJQUFJLENBQUMsQ0FBUztRQUNWLCtHQUErRztRQUMvRyxPQUFPLENBQUUsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBRUQsMkNBQTJDO0lBQzNDLElBQUksQ0FBQyxDQUFTO1FBQ1YsT0FBTyxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDM0IsQ0FBQztDQUNKIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbiBcdGZ1bmN0aW9uIHdlYnBhY2tKc29ucENhbGxiYWNrKGRhdGEpIHtcbiBcdFx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcbiBcdFx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcbiBcdFx0dmFyIGV4ZWN1dGVNb2R1bGVzID0gZGF0YVsyXTtcblxuIFx0XHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcbiBcdFx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG4gXHRcdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIHJlc29sdmVzID0gW107XG4gXHRcdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuIFx0XHRcdFx0cmVzb2x2ZXMucHVzaChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0pO1xuIFx0XHRcdH1cbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHR9XG4gXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihkYXRhKTtcblxuIFx0XHR3aGlsZShyZXNvbHZlcy5sZW5ndGgpIHtcbiBcdFx0XHRyZXNvbHZlcy5zaGlmdCgpKCk7XG4gXHRcdH1cblxuIFx0XHQvLyBhZGQgZW50cnkgbW9kdWxlcyBmcm9tIGxvYWRlZCBjaHVuayB0byBkZWZlcnJlZCBsaXN0XG4gXHRcdGRlZmVycmVkTW9kdWxlcy5wdXNoLmFwcGx5KGRlZmVycmVkTW9kdWxlcywgZXhlY3V0ZU1vZHVsZXMgfHwgW10pO1xuXG4gXHRcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gYWxsIGNodW5rcyByZWFkeVxuIFx0XHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiBcdH07XG4gXHRmdW5jdGlvbiBjaGVja0RlZmVycmVkTW9kdWxlcygpIHtcbiBcdFx0dmFyIHJlc3VsdDtcbiBcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGRlZmVycmVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdHZhciBkZWZlcnJlZE1vZHVsZSA9IGRlZmVycmVkTW9kdWxlc1tpXTtcbiBcdFx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcbiBcdFx0XHRmb3IodmFyIGogPSAxOyBqIDwgZGVmZXJyZWRNb2R1bGUubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdHZhciBkZXBJZCA9IGRlZmVycmVkTW9kdWxlW2pdO1xuIFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2RlcElkXSAhPT0gMCkgZnVsZmlsbGVkID0gZmFsc2U7XG4gXHRcdFx0fVxuIFx0XHRcdGlmKGZ1bGZpbGxlZCkge1xuIFx0XHRcdFx0ZGVmZXJyZWRNb2R1bGVzLnNwbGljZShpLS0sIDEpO1xuIFx0XHRcdFx0cmVzdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBkZWZlcnJlZE1vZHVsZVswXSk7XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0cmV0dXJuIHJlc3VsdDtcbiBcdH1cblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdC8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuIFx0Ly8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwibWFpblwiOiAwXG4gXHR9O1xuXG4gXHR2YXIgZGVmZXJyZWRNb2R1bGVzID0gW107XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdHZhciBqc29ucEFycmF5ID0gd2luZG93W1wid2VicGFja0pzb25wXCJdID0gd2luZG93W1wid2VicGFja0pzb25wXCJdIHx8IFtdO1xuIFx0dmFyIG9sZEpzb25wRnVuY3Rpb24gPSBqc29ucEFycmF5LnB1c2guYmluZChqc29ucEFycmF5KTtcbiBcdGpzb25wQXJyYXkucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrO1xuIFx0anNvbnBBcnJheSA9IGpzb25wQXJyYXkuc2xpY2UoKTtcbiBcdGZvcih2YXIgaSA9IDA7IGkgPCBqc29ucEFycmF5Lmxlbmd0aDsgaSsrKSB3ZWJwYWNrSnNvbnBDYWxsYmFjayhqc29ucEFycmF5W2ldKTtcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gb2xkSnNvbnBGdW5jdGlvbjtcblxuXG4gXHQvLyBhZGQgZW50cnkgbW9kdWxlIHRvIGRlZmVycmVkIGxpc3RcbiBcdGRlZmVycmVkTW9kdWxlcy5wdXNoKFtcIi4vc3JjL2luZGV4LnRzXCIsXCJ2ZW5kb3JcIl0pO1xuIFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiByZWFkeVxuIFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbmRleC5odG1sXCI7IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0IHttYWlufSBmcm9tICcuL3RzL21haW4nXG5cbmltcG9ydCBcIiFmaWxlLWxvYWRlcj9uYW1lPWluZGV4Lmh0bWwhLi9pbmRleC5odG1sXCI7XG5pbXBvcnQgXCIuL2Nzcy9tYWluLnNjc3NcIlxuXG5tYWluKCkiLCJleHBvcnQgY29uc3QgYmFzZUxvc3MgPSB4ID0+IDEgLyAyICogTWF0aC5wb3coeCwgMilcbmV4cG9ydCBjb25zdCBnZXRQbG90RnVuYyA9ICh6OiBMYW5kc2NhcGUpID0+ICh4OiBudW1iZXIpID0+IHoubG9zcyh6LmYoeCkpXG5cbmV4cG9ydCBpbnRlcmZhY2UgTGFuZHNjYXBlIHtcbiAgICBuYW1lOiBzdHJpbmdcbiAgICBmOiAoeDogbnVtYmVyKSA9PiBudW1iZXJcbiAgICBkZjogKHg6IG51bWJlcikgPT4gbnVtYmVyXG4gICAgeHJhbmdlOiBbbnVtYmVyLCBudW1iZXJdXG4gICAgeXJhbmdlOiBbbnVtYmVyLCBudW1iZXJdXG4gICAgbG9zczogKHg6IG51bWJlcikgPT4gbnVtYmVyXG59XG5cblxuZXhwb3J0IGNvbnN0IGxhbmRzY2FwZXM6IHsgW2s6IHN0cmluZ106IExhbmRzY2FwZSB9ID0ge1xuICAgIGhvbGU6IHtcbiAgICAgICAgbmFtZTogXCJob2xlXCIsXG4gICAgICAgIGY6IHggPT4gTWF0aC50YW5oKHgqMyksXG4gICAgICAgIGRmOiB4ID0+IE1hdGgucG93KE1hdGguY29zaCh4KjMpLCAtMikgKiAzLFxuICAgICAgICB4cmFuZ2U6IFstNiAvIDMsIDYgLyAzXSxcbiAgICAgICAgeXJhbmdlOiBbMCwgMC42XSxcbiAgICAgICAgbG9zczogYmFzZUxvc3NcbiAgICB9LFxuICAgIHN0ZXBzOiB7XG4gICAgICAgIG5hbWU6IFwic3RlcHNcIixcbiAgICAgICAgZjogeCA9PiBNYXRoLnRhbmgoeCAqIDkuNSAtIDExKSAvIDQgKyBNYXRoLnRhbmgoeCAqIDkuNSAtIDYpIC8gNCArIE1hdGgudGFuaCh4ICogOS41KSArIE1hdGgudGFuaCh4ICogOS41ICsgNikgLyA0ICsgTWF0aC50YW5oKHggKiA5LjUgKyAxMSkgLyA0LFxuICAgICAgICBkZjogeCA9PiAoTWF0aC5wb3coTWF0aC5jb3NoKHggKiA5LjUgLSAxMSksIC0yKSAvIDQgKyBNYXRoLnBvdyhNYXRoLmNvc2goeCAqIDkuNSAtIDYpLCAtMikgLyA0ICsgTWF0aC5wb3coTWF0aC5jb3NoKHggKiA5LjUpLCAtMikgKyBNYXRoLnBvdyhNYXRoLmNvc2goeCAqIDkuNSArIDYpLCAtMikgLyA0ICsgTWF0aC5wb3coTWF0aC5jb3NoKHggKiA5LjUgKyAxMSksIC0yKSAvIDQgKSAqIDkuNSxcbiAgICAgICAgeHJhbmdlOiBbLTEzLjYgLyA5LjUsIDEzLjYgLyA5LjVdLFxuICAgICAgICB5cmFuZ2U6IFswLCAyLjVdLFxuICAgICAgICBsb3NzOiBiYXNlTG9zc1xuICAgIH0sXG4gICAgc2VhZ3VsbDoge1xuICAgICAgICBuYW1lOiBcInNlYWd1bGxcIixcbiAgICAgICAgZjogeCA9PiBNYXRoLnNpZ24oeCkgKiAoMSAtICgxIC8gKDEgKyBNYXRoLmFicyh4ICogNikpKSksXG4gICAgICAgIGRmOiB4ID0+IDYgLyBNYXRoLnBvdygxICsgTWF0aC5hYnMoeCAqIDYpLCAyKSxcbiAgICAgICAgeHJhbmdlOiBbLTEyIC8gNiwgMTIgLyA2XSxcbiAgICAgICAgeXJhbmdlOiBbMCwgMC42XSxcbiAgICAgICAgbG9zczogYmFzZUxvc3NcbiAgICB9LFxuICAgIGJvd2w6IHtcbiAgICAgICAgbmFtZTogXCJib3dsXCIsXG4gICAgICAgIGY6ICB4ID0+IE1hdGguc2luaCh4LzMpLFxuICAgICAgICBkZjogeCA9PiBNYXRoLmNvc2goeC8zKS8zLFxuICAgICAgICB4cmFuZ2U6IFstMyAqIDMsIDMgKiAzXSxcbiAgICAgICAgeXJhbmdlOiBbMCwgNTBdLFxuICAgICAgICBsb3NzOiBiYXNlTG9zc1xuICAgIH0sXG4gICAgZGVlcF9uZXQ6IHtcbiAgICAgICAgbmFtZTogXCJkZWVwX25ldFwiLFxuICAgICAgICBmOiB4ID0+IE1hdGgucG93KE1hdGguYWJzKHgvMysxKSwgMykgLSAxLCAgLy8gZGVwdGggPSA0XG4gICAgICAgIGRmOiB4ID0+IDMvMyAqIE1hdGgucG93KE1hdGguYWJzKHgvMysxKSwgMiksXG4gICAgICAgIC8vIHhyYW5nZTogWy0wLjcqNCwgMC43KjRdLFxuICAgICAgICB4cmFuZ2U6IFstMC45KjMsIDAuOSozXSxcbiAgICAgICAgeXJhbmdlOiBbMCwgNF0sXG4gICAgICAgIGxvc3M6IGJhc2VMb3NzXG4gICAgfVxufSIsImltcG9ydCB7VmVjdG9yMkR9IGZyb20gJy4vdXRpbC90eXBlcydcbmltcG9ydCAqIGFzIGQzIGZyb20gJ2QzJ1xuXG50eXBlIEVycm9yRnVuYyA9ICh2OiBWZWN0b3IyRCkgPT4gbnVtYmVyXG5cblxuY29uc3QgZGVmYXVsdEVycm9yOiBFcnJvckZ1bmMgPSB2ID0+IHYueCAqIHYueSAtIDFcbmNvbnN0IGRlZmF1bHRTdGVwMkxyOiBkMy5TY2FsZUxpbmVhcjxudW1iZXIsIG51bWJlcj4gPSBkMy5zY2FsZUxpbmVhcigpLmRvbWFpbihbMCwgMC44XSkucmFuZ2UoWzAuMDAxLCAwLjI1XSlcblxuZXhwb3J0IGNsYXNzIFVwZGF0ZXIge1xuICAgIGVycjogRXJyb3JGdW5jICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBUaGUgZXJyb3IgZnVuY3Rpb24uIExvc3MgaXMgdGhlIGVycm9yIHNxdWFyZWRcbiAgICBxOiBudW1iZXIgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gMCAtPiAxLCB3aGVyZSAwIGlzIFNHRCBhbmQgMSBpcyBOR0QuIDAuNSBpcyBzcXJ0IE5HRC4gW3N0ZXAgPSAtIGV0YSAqIEggXiAoLTEvcSkgKiBnXSAoSCA9IDAgd2hlbiBxPTApXG4gICAgZXRhOiBudW1iZXIgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGFrYSAnbGVhcm5pbmcgcmF0ZSdcbiAgICBzdGVwMmxyOiBkMy5TY2FsZUxpbmVhcjxudW1iZXIsIG51bWJlcj4gLy8gRm9ybWF0IHRoZSBsZWFybmluZyByYXRlIGZvciBkaXNwbGF5XG5cbiAgICBjb25zdHJ1Y3RvcihxPTAsIGV0YT0wLjEsIGVycj1kZWZhdWx0RXJyb3IsIHN0ZXAybHI9ZGVmYXVsdFN0ZXAyTHIpIHtcbiAgICAgICAgdGhpcy5lcnIgPSBlcnI7XG4gICAgICAgIHRoaXMucSA9IHE7XG4gICAgICAgIHRoaXMuZXRhID0gZXRhO1xuICAgICAgICB0aGlzLnN0ZXAybHIgPSBzdGVwMmxyO1xuICAgIH1cblxuICAgIC8vIEFtb3VudCB0byBzY2FsZSBzaXplIG9mIGxlYXJuaW5nIHJhdGUgYXJyb3dzXG4gICAgZ2V0IGxyU2NhbGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0ZXAybHIodGhpcy5ldGEpXG4gICAgfVxuXG4gICAgLy8gVGFrZSBhYnMgdmFsdWUgb2YgZXJyb3JcbiAgICBhYnNFcnIodjpWZWN0b3IyRCk6bnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIE1hdGguYWJzKHRoaXMuZXJyKHYpKVxuICAgIH1cblxuICAgIC8vIENhbGN1bGF0ZSBlcnJvciBzcXVhcmVkXG4gICAgbG9zcyh2OlZlY3RvcjJEKTpudW1iZXJ7XG4gICAgICAgIHJldHVybiBNYXRoLnBvdyh0aGlzLmVycih2KSwgMilcbiAgICB9XG5cbiAgICBncmFkaWVudCh2OlZlY3RvcjJEKTpWZWN0b3IyRCB7XG4gICAgICAgIGNvbnN0IGVyciA9IHRoaXMuZXJyKHYpO1xuICAgICAgICBjb25zdCBneCA9IHYueSAqIGVycjtcbiAgICAgICAgY29uc3QgZ3kgPSB2LnggKiBlcnI7XG4gICAgICAgIHJldHVybiB7eDogZ3gsIHk6IGd5fVxuICAgIH1cblxuICAgIGVpZ2VudmFsdWVzKHY6VmVjdG9yMkQpOlZlY3RvcjJEIHtcbiAgICAgICAgY29uc3QgZ2V0RXYgPSAoeCwgeSkgPT4gTWF0aC5wb3coeCwgMikgKyBNYXRoLnBvdyh5LCAyKVxuICAgICAgICBjb25zdCBleCA9IGdldEV2KHYueCwgdi55KVxuICAgICAgICBjb25zdCBleSA9IGdldEV2KHYueCwgdi55KVxuICAgICAgICByZXR1cm4ge3g6IGV4LCB5OiBleX1cbiAgICB9XG5cbiAgICBkdih2OlZlY3RvcjJEKTogVmVjdG9yMkQge1xuICAgICAgICBjb25zdCBnID0gdGhpcy5ncmFkaWVudCh2KVxuICAgICAgICBjb25zdCBldiA9IHRoaXMuZWlnZW52YWx1ZXModilcbiAgICAgICAgY29uc3QgZHZ4ID0gLWcueCAvIE1hdGguYWJzKE1hdGgucG93KGV2LngsIHRoaXMucSkpXG4gICAgICAgIGNvbnN0IGR2eSA9IC1nLnkgLyBNYXRoLmFicyhNYXRoLnBvdyhldi55LCB0aGlzLnEpKVxuICAgICAgICByZXR1cm4ge3g6IGR2eCwgeTogZHZ5fVxuICAgIH1cblxuICAgIGxyKHY6VmVjdG9yMkQpOiBWZWN0b3IyRCB7XG4gICAgICAgIGNvbnN0IGR2ID0gdGhpcy5kdih2KVxuICAgICAgICBjb25zdCBhYnNFcnIgPSB0aGlzLmFic0Vycih2KVxuICAgICAgICBjb25zdCBsclNjYWxlID0gdGhpcy5zdGVwMmxyKHRoaXMuZXRhKVxuICAgICAgICBjb25zdCBscnggPSBsclNjYWxlICogZHYueCAvIGFic0VyclxuICAgICAgICBjb25zdCBscnkgPSBsclNjYWxlICogZHYueSAvIGFic0VyclxuICAgICAgICByZXR1cm4ge3g6IGxyeCwgeTogbHJ5fVxuICAgIH1cblxuICAgIC8vIEdldCBuZXh0IHYgdmFsdWVcbiAgICBuZXh0KHY6VmVjdG9yMkQpOiBWZWN0b3IyRCB7XG4gICAgICAgIGNvbnN0IGR2ID0gdGhpcy5kdih2KVxuICAgICAgICBjb25zdCBuZXd4ID0gdi54ICsgZHYueCAqIHRoaXMuZXRhO1xuICAgICAgICBjb25zdCBuZXd5ID0gdi55ICsgZHYueSAqIHRoaXMuZXRhO1xuICAgICAgICByZXR1cm4ge3g6IG5ld3gsIHk6IG5ld3l9XG4gICAgfVxuXG4gICAgbmV4dExyKHY6VmVjdG9yMkQpOiBWZWN0b3IyRCB7XG4gICAgICAgIGNvbnN0IGcgPSB0aGlzLmxyKHYpO1xuICAgICAgICBjb25zdCB4ID0gdi54ICsgZy54O1xuICAgICAgICBjb25zdCB5ID0gdi55ICsgZy55O1xuICAgICAgICByZXR1cm4ge3g6IHgsIHk6IHl9XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgQmxvY2tVcGRhdGVyIGV4dGVuZHMgVXBkYXRlciB7XG4gICAgZWlnZW52YWx1ZXModjpWZWN0b3IyRCk6VmVjdG9yMkQge1xuICAgICAgICBjb25zdCBleCA9IDIgKiBNYXRoLnBvdyh2LnksIDIpXG4gICAgICAgIGNvbnN0IGV5ID0gMiAqIE1hdGgucG93KHYueCwgMilcbiAgICAgICAgcmV0dXJuIHt4OiBleCwgeTogZXl9XG4gICAgfVxufSIsImltcG9ydCAqIGFzIGQzIGZyb20gJ2QzJ1xuaW1wb3J0IHsgVUlkIH0gZnJvbSAnLi91dGlsL1VJZCdcbmltcG9ydCB7IENvbnRvdXJQbG90IH0gZnJvbSAnLi92aXMvQ29udG91clBsb3QnXG5pbXBvcnQgeyBEM1NlbCB9IGZyb20gJy4vdXRpbC94ZDMnXG5pbXBvcnQgeyBHb2xmSG9sZTFEIH0gZnJvbSAnLi92aXMvR29sZkhvbGUxRCdcbmltcG9ydCB7IEdvbGZMb3NzZXMgfSBmcm9tICcuL3Zpcy9Hb2xmTG9zc2VzJ1xuaW1wb3J0IHsgR29sZlhEaXN0IH0gZnJvbSAnLi92aXMvR29sZlhEaXN0J1xuaW1wb3J0IHsgR29sZkJhbGwgfSBmcm9tICcuL3Zpcy9Hb2xmQmFsbCdcbmltcG9ydCAqIGFzIFIgZnJvbSAncmFtZGEnXG5pbXBvcnQgeyBTaW1wbGVFdmVudEhhbmRsZXIgfSBmcm9tICcuL3V0aWwvU2ltcGxlRXZlbnRIYW5kbGVyJ1xuaW1wb3J0IHsgTWFudWFsVXBkYXRlciB9IGZyb20gJy4vdmlzL01hbnVhbFVwZGF0ZXInXG5pbXBvcnQgeyBsYW5kc2NhcGVzLCBMYW5kc2NhcGUgfSBmcm9tICcuL0dvbGZMYW5kc2NhcGVzJ1xuXG5jb25zdCB0b0ZpeGVkID0gUi5jdXJyeSgobmRpZ2l0cywgeCkgPT4geC50b0ZpeGVkKG5kaWdpdHMpKVxuY29uc3QgdG9RID0gdG9GaXhlZCgxKVxuY29uc3QgdG9FdGEgPSB0b0ZpeGVkKDQpXG5cbmZ1bmN0aW9uIHBsb3RRdWl2ZXJHcmFwaCgpIHtcblx0Y29uc3QgdmlzMSA9IGQzLnNlbGVjdCgnI3ZpczEnKVxuXHRjb25zdCBzZWxzID0ge1xuXHRcdHF1aXZlclBsb3Q6IHZpczEuc2VsZWN0KCcjY2hhcnQnKSxcblx0XHRxSWQ6IHZpczEuc2VsZWN0KCcjcS12YWwnKSxcblx0XHRldGFJZDogdmlzMS5zZWxlY3QoJyNldGEtdmFsJyksXG5cdFx0cVNsaWRlcjogdmlzMS5zZWxlY3QoJyNxLXNsaWRlcicpLFxuXHRcdGV0YVNsaWRlcjogdmlzMS5zZWxlY3QoJyNldGEtc2xpZGVyJyksXG5cdFx0aGVzc1R5cGU6IHZpczEuc2VsZWN0KCcjaGVzcy10eXBlJylcblx0fVxuXG5cdGNvbnN0IHZpenMgPSB7XG5cdFx0Z3JhcGg6IG5ldyBDb250b3VyUGxvdChzZWxzLnF1aXZlclBsb3QpXG5cdH1cblxuXHRjb25zdCBkZWZhdWx0cyA9IHtcblx0XHQvLyBOb3RlIHRvIGFsc28gY2hhbmdlIHRoZSBkZWZhdWx0IHZhbHVlIGluIHRoZSBodG1sIGZpbGUhXG5cdFx0cTogMCxcblx0XHRldGE6IDAuMVxuXHR9XG5cblx0Y29uc3Qgc2NhbGVzID0ge1xuXHRcdHE6IGQzLnNjYWxlTGluZWFyKCkucmFuZ2UoWzAsIDEwXSkuZG9tYWluKFswLCAxXSksXG5cdFx0ZXRhOiBkMy5zY2FsZUxpbmVhcigpLnJhbmdlKFsxLCAxMDAwXSkuZG9tYWluKFtNYXRoLnBvdygxMCwgLTUpLCAwLjZdKVxuXHR9XG5cblx0Ly8gSW5pdGlhbGl6ZSBncmFwaCBwYXJhbWV0ZXJzIHRvIG1hdGNoIHRoZSBkZWZhdWx0c1xuXHR2aXpzLmdyYXBoLnEoZGVmYXVsdHMucSlcblx0dml6cy5ncmFwaC5ldGEoZGVmYXVsdHMuZXRhKVxuXHRzZWxzLnFTbGlkZXIucHJvcGVydHkoJ3ZhbHVlJywgc2NhbGVzLnEoZGVmYXVsdHMucSkpXG5cdHNlbHMuZXRhU2xpZGVyLnByb3BlcnR5KCd2YWx1ZScsIHNjYWxlcy5ldGEoZGVmYXVsdHMuZXRhKSlcblxuXHRzZWxzLnFJZC50ZXh0KHRvUShkZWZhdWx0cy5xKSlcblx0c2Vscy5ldGFJZC50ZXh0KHRvRXRhKGRlZmF1bHRzLmV0YSkpXG5cblx0c2Vscy5xU2xpZGVyLm9uKCdpbnB1dCcsIGZ1bmN0aW9uICgpIHtcblx0XHRjb25zdCBtZSA9IGQzLnNlbGVjdCh0aGlzKVxuXHRcdGNvbnN0IHYgPSBzY2FsZXMucS5pbnZlcnQoK21lLnByb3BlcnR5KCd2YWx1ZScpKTtcblx0XHR2aXpzLmdyYXBoLnEodik7XG5cdFx0c2Vscy5xSWQudGV4dChgJHt0b1Eodil9YClcblx0fSlcblxuXHRzZWxzLmV0YVNsaWRlci5vbignaW5wdXQnLCBmdW5jdGlvbiAoKSB7XG5cdFx0Y29uc3QgbWUgPSBkMy5zZWxlY3QodGhpcylcblx0XHRjb25zdCB2ID0gc2NhbGVzLmV0YS5pbnZlcnQobWUucHJvcGVydHkoJ3ZhbHVlJykpO1xuXHRcdHZpenMuZ3JhcGguZXRhKHYpXG5cdFx0c2Vscy5ldGFJZC50ZXh0KGAke3RvRXRhKHYpfWApXG5cdH0pXG5cblx0c2Vscy5oZXNzVHlwZS5vbignaW5wdXQnLCBmdW5jdGlvbiAoKSB7XG5cdFx0Y29uc3Qgc2VsZiA9IGQzLnNlbGVjdCh0aGlzKVxuXHRcdGNvbnN0IHYgPSBzZWxmLnByb3BlcnR5KCd2YWx1ZScpXG5cdFx0dml6cy5ncmFwaC5zZXRVcGRhdGVyKHYpXG5cdH0pXG59XG5cbmZ1bmN0aW9uIHBsb3RHb2xmSG9sZSgpIHtcblx0Y29uc3QgdmlzMiA9IGQzLnNlbGVjdChcIiN2aXMyXCIpO1xuXHRjb25zdCBzZWxzID0ge1xuXHRcdGNoYXJ0OiB2aXMyLnNlbGVjdCgnI2NoYXJ0JyksXG5cdFx0Y2hhcnRYRGlzdDogdmlzMi5zZWxlY3QoJyNjaGFydC14ZGlzdCcpLFxuXHRcdGNoYXJ0TG9zc2VzOiB2aXMyLnNlbGVjdCgnI2NoYXJ0LWxvc3NlcycpLFxuXHRcdGxhbmRzY2FwZVNlbGVjdG9yOiB2aXMyLnNlbGVjdCgnLmxhbmRzY2FwZS1zZWxlY3QnKVxuXHR9XG5cblx0Y29uc3QgZGVmYXVsdHMgPSB7XG5cdFx0bGFuZHNjYXBlOiBcInNlYWd1bGxcIlxuXHR9XG5cblx0Y29uc3QgZXZlbnRIYW5kbGVyID0gbmV3IFNpbXBsZUV2ZW50SGFuZGxlcig8RWxlbWVudD52aXMyLm5vZGUoKSlcblx0Y29uc3Qgdml6cyA9IHtcblx0XHRncmFwaDogbmV3IEdvbGZIb2xlMUQoc2Vscy5jaGFydCwgZXZlbnRIYW5kbGVyLCB7fSwgVUlkLnVpZCgpKSxcblx0XHRjaGFydFhEaXN0OiBuZXcgR29sZlhEaXN0KHNlbHMuY2hhcnRYRGlzdCwgZXZlbnRIYW5kbGVyKSxcblx0XHRjaGFydExvc3NlczogbmV3IEdvbGZMb3NzZXMoc2Vscy5jaGFydExvc3NlcywgZXZlbnRIYW5kbGVyKVxuXHR9XG5cblx0Ly8gQXR0YWNoIGdvbGZiYWxsIGluZm8gdG8gbG9zcyB0cmFja2VyXG5cdGV2ZW50SGFuZGxlci5iaW5kKCdsb3NzLWNsaWNrJywgKGUpID0+IHtcblx0XHR2aXpzLmNoYXJ0WERpc3QuY2xlYXJQYXRocygpXG5cdFx0dml6cy5jaGFydExvc3Nlcy5jbGVhclBhdGhzKClcblx0fSlcblxuXHQvLyBDb25maWd1cmUgaHRtbCBwYWdlIHRvIHdvcmsgd2l0aCBkZWZhdWx0c1xuXHRzZWxzLmxhbmRzY2FwZVNlbGVjdG9yLnByb3BlcnR5KCd2YWx1ZScsIGRlZmF1bHRzLmxhbmRzY2FwZSlcblx0dml6cy5ncmFwaC5sYW5kc2NhcGUobGFuZHNjYXBlc1tkZWZhdWx0cy5sYW5kc2NhcGVdKVxuXG5cdGNvbnN0IHN0cmVhbXMgPSB2aXpzLmdyYXBoLmRhdGEoKS5tYXAoYiA9PiBiLnN0cmVhbSlcblx0Y29uc3QgcGxvdHRlciA9IHtcblx0XHRuZXh0OiBkID0+IHtcblx0XHRcdHZpenMuY2hhcnRYRGlzdC5wbG90UGF0aChkKVxuXHRcdFx0dml6cy5jaGFydExvc3Nlcy5wbG90UGF0aChkKVxuXHRcdH1cblx0fVxuXHRzdHJlYW1zLmZvckVhY2gocyA9PiBzLnN1YnNjcmliZShwbG90dGVyKSlcblxuXHQvLyBHYXRoZXIgaW50ZXJhY3Rpdml0eSBmb3IgdGhlIGdvbGYgYmFsbCBwbG90XG5cdHNlbHMubGFuZHNjYXBlU2VsZWN0b3Iub24oJ2lucHV0JywgZnVuY3Rpb24gKCkge1xuXHRcdGNvbnN0IHNlbGYgPSBkMy5zZWxlY3QodGhpcylcblx0XHRjb25zdCB2ID0gc2VsZi5wcm9wZXJ0eSgndmFsdWUnKVxuXHRcdHZpenMuZ3JhcGgubGFuZHNjYXBlKGxhbmRzY2FwZXNbdl0pXG5cdH0pXG59XG5cbmZ1bmN0aW9uIHBsb3RHb2xmSG9sZVNsaWRlcigpIHtcblx0Y29uc3QgdmlzMyA9IGQzLnNlbGVjdChcIiN2aXMzXCIpO1xuXG5cdGNvbnN0IHNlbHMgPSB7XG5cdFx0Y2hhcnQ6IHZpczMuc2VsZWN0KCcjY2hhcnQnKSxcblx0XHRjaGFydExvc3NlczogdmlzMy5zZWxlY3QoJyNjaGFydC1sb3NzZXMnKSxcblx0XHRjaGFydFhEaXN0OiB2aXMzLnNlbGVjdCgnI2NoYXJ0LXhkaXN0JyksXG5cdFx0cUlkOiB2aXMzLnNlbGVjdCgnI3EtdmFsJyksXG5cdFx0ZXRhSWQ6IHZpczMuc2VsZWN0KCcjZXRhLXZhbCcpLFxuXHRcdHFTbGlkZXI6IHZpczMuc2VsZWN0KCcjcS1zbGlkZXInKSxcblx0XHRldGFTbGlkZXI6IHZpczMuc2VsZWN0KCcjZXRhLXNsaWRlcicpLFxuXHRcdGxhbmRzY2FwZVNlbGVjdG9yOiB2aXMzLnNlbGVjdCgnLmxhbmRzY2FwZS1zZWxlY3QnKVxuXHR9XG5cblx0Y29uc3QgZXZlbnRIYW5kbGVyID0gbmV3IFNpbXBsZUV2ZW50SGFuZGxlcig8RWxlbWVudD52aXMzLm5vZGUoKSlcblxuXHRjb25zdCB2aXpzID0ge1xuXHRcdGdyYXBoOiBuZXcgR29sZkhvbGUxRChzZWxzLmNoYXJ0LCBldmVudEhhbmRsZXIsIHsgbWF4SXRlcjogMS41ZTMgfSwgVUlkLnVpZCgpKSxcblx0XHRjaGFydExvc3NlczogbmV3IEdvbGZMb3NzZXMoc2Vscy5jaGFydExvc3NlcywgZXZlbnRIYW5kbGVyKSxcblx0XHRjaGFydFhEaXN0OiBuZXcgR29sZlhEaXN0KHNlbHMuY2hhcnRYRGlzdCwgZXZlbnRIYW5kbGVyKVxuXHR9XG5cblx0Y29uc3QgZGVmYXVsdHMgPSB7XG5cdFx0Ly8gTm90ZSB0byBhbHNvIGNoYW5nZSB0aGUgZGVmYXVsdCB2YWx1ZSBpbiB0aGUgaHRtbCBmaWxlIVxuXHRcdHE6IDAuNSxcblx0XHRldGE6IDAuMSxcblx0XHRsYW5kc2NhcGU6IFwic2VhZ3VsbFwiXG5cdH1cblxuXHQvLyBBdHRhY2ggZ29sZmJhbGwgaW5mbyB0byBsb3NzIHRyYWNrZXJcblx0ZXZlbnRIYW5kbGVyLmJpbmQoJ2xvc3MtY2xpY2snLCAoZSkgPT4ge1xuXHRcdHZpenMuY2hhcnRYRGlzdC5jbGVhclBhdGhzKClcblx0XHR2aXpzLmNoYXJ0TG9zc2VzLmNsZWFyUGF0aHMoKVxuXHR9KVxuXG5cdC8vIFB1dCBkYXRhIGludG8gdml6XG5cdHZpenMuZ3JhcGguZGF0YShbbmV3IEdvbGZCYWxsKG5ldyBNYW51YWxVcGRhdGVyKGxhbmRzY2FwZXMuaG9sZS5mLCBsYW5kc2NhcGVzLmhvbGUuZGYsIGRlZmF1bHRzLnEsIGRlZmF1bHRzLmV0YSksIFwiZ29sZi1iYWxsXCIpXSlcblxuXHR2aXpzLmdyYXBoLmxhbmRzY2FwZShsYW5kc2NhcGVzLnN0ZXBzKVxuXG5cdC8vIGNvbnN0IGV0YVJhbmdlID0gWy01LCAyXS5tYXAoeCA9PiBNYXRoLnBvdygxMCwgeCkpXG5cdGNvbnN0IGV0YVJhbmdlID0gWy0zLCAyXS5tYXAoeCA9PiBNYXRoLnBvdygxMCwgeCkpXG5cdGNvbnN0IHNjYWxlcyA9IHtcblx0XHRxOiBkMy5zY2FsZUxpbmVhcigpLnJhbmdlKFswLCAxMF0pLmRvbWFpbihbMCwgMV0pLFxuXHRcdGV0YTogZDMuc2NhbGVMb2coKS5yYW5nZShbMSwgMTAwMF0pLmRvbWFpbihldGFSYW5nZSkuYmFzZSgxMClcblx0fVxuXG5cdC8vIEluaXRpYWxpemUgZ3JhcGggcGFyYW1ldGVycyB0byBtYXRjaCB0aGUgZGVmYXVsdHNcblx0dml6cy5ncmFwaC5sYW5kc2NhcGUobGFuZHNjYXBlc1tkZWZhdWx0cy5sYW5kc2NhcGVdKVxuXHRzZWxzLmxhbmRzY2FwZVNlbGVjdG9yLnByb3BlcnR5KCd2YWx1ZScsIGRlZmF1bHRzLmxhbmRzY2FwZSlcblxuXHRzZWxzLnFTbGlkZXIucHJvcGVydHkoJ3ZhbHVlJywgc2NhbGVzLnEoZGVmYXVsdHMucSkpXG5cdHNlbHMuZXRhU2xpZGVyLnByb3BlcnR5KCd2YWx1ZScsIHNjYWxlcy5ldGEoZGVmYXVsdHMuZXRhKSlcblx0c2Vscy5xSWQudGV4dCh0b1EoZGVmYXVsdHMucSkpXG5cdHNlbHMuZXRhSWQudGV4dCh0b0V0YShkZWZhdWx0cy5ldGEpKVxuXG5cdC8vIENvbmZpZ3VyZSBJbnRlcmFjdGl2aXR5XG5cdHNlbHMucVNsaWRlci5vbignaW5wdXQnLCBmdW5jdGlvbiAoKSB7XG5cdFx0Y29uc3QgbWUgPSBkMy5zZWxlY3QodGhpcylcblx0XHRjb25zdCB2ID0gc2NhbGVzLnEuaW52ZXJ0KG1lLnByb3BlcnR5KCd2YWx1ZScpKTtcblx0XHR2aXpzLmdyYXBoLnEodilcblx0XHRzZWxzLnFJZC50ZXh0KGAke3RvUSh2KX1gKVxuXHR9KVxuXG5cdHNlbHMuZXRhU2xpZGVyLm9uKCdpbnB1dCcsIGZ1bmN0aW9uICgpIHtcblx0XHRjb25zdCBtZSA9IGQzLnNlbGVjdCh0aGlzKVxuXHRcdGNvbnN0IHYgPSBzY2FsZXMuZXRhLmludmVydChtZS5wcm9wZXJ0eSgndmFsdWUnKSk7XG5cdFx0dml6cy5ncmFwaC5ldGEodilcblx0XHRzZWxzLmV0YUlkLnRleHQoYCR7dG9FdGEodil9YClcblx0fSlcblxuXHRzZWxzLmxhbmRzY2FwZVNlbGVjdG9yLm9uKCdpbnB1dCcsIGZ1bmN0aW9uICgpIHtcblx0XHRjb25zdCBzZWxmID0gZDMuc2VsZWN0KHRoaXMpXG5cdFx0Y29uc3QgdiA9IHNlbGYucHJvcGVydHkoJ3ZhbHVlJylcblx0XHR2aXpzLmdyYXBoLmxhbmRzY2FwZShsYW5kc2NhcGVzW3ZdKVxuXHR9KVxuXG5cdC8vIEFzc2lnbiBzdHJlYW1zXG5cdGNvbnN0IHN0cmVhbXMgPSB2aXpzLmdyYXBoLmRhdGEoKS5tYXAoYiA9PiBiLnN0cmVhbSlcblx0Y29uc3QgcGxvdHRlciA9IHtcblx0XHRuZXh0OiBkID0+IHtcblx0XHRcdHZpenMuY2hhcnRYRGlzdC5wbG90UGF0aChkLCB2aXpzLmdyYXBoLnNjYWxlcy5iYXNlMm1hdGgueC5pbnZlcnQpXG5cdFx0XHR2aXpzLmNoYXJ0TG9zc2VzLnBsb3RQYXRoKGQpXG5cdFx0fVxuXHR9XG5cdHN0cmVhbXMuZm9yRWFjaChzID0+IHMuc3Vic2NyaWJlKHBsb3R0ZXIpKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gbWFpbigpIHtcblx0Y29uc29sZS5sb2coXCJSVU5OSU5HXCIpO1xuXHRwbG90UXVpdmVyR3JhcGgoKTtcblx0cGxvdEdvbGZIb2xlKCk7XG5cdHBsb3RHb2xmSG9sZVNsaWRlcigpO1xufVxuXG4iLCJpbXBvcnQgKiBhcyBkMyBmcm9tICdkMydcbmltcG9ydCB7IE1hcmdpbkluZm8gfSBmcm9tICcuL3V0aWwvU1ZHVmlzQ29tcG9uZW50J1xuaW1wb3J0IHsgRDNTZWwgfSBmcm9tICcuL3V0aWwveGQzJ1xuaW1wb3J0IHtyYW5nZX0gZnJvbSAncmFtZGEnXG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRTVkcoZGl2OiBzdHJpbmcsIHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyLCBtYXJnaW46IE1hcmdpbkluZm8pOiBEM1NlbCB7XG5cbiAgICB2YXIgc3ZnID0gZDMuc2VsZWN0KGRpdikuYXBwZW5kKFwic3ZnXCIpXG4gICAgICAgIC5hdHRyKFwid2lkdGhcIiwgXCIxMDAlXCIpXG4gICAgICAgIC5hdHRyKFwiaGVpZ2h0XCIsIFwiMTAwJVwiKVxuICAgICAgICAuYXR0cihcInZpZXdCb3hcIiwgXCIwIDAgXCIgKyAod2lkdGggKyBtYXJnaW4ubGVmdCArIG1hcmdpbi5yaWdodCkgKyBcIiBcIiArIChoZWlnaHQgKyBtYXJnaW4udG9wICsgbWFyZ2luLmJvdHRvbSkpXG4gICAgICAgIC5hdHRyKFwicHJlc2VydmVBc3BlY3RSYXRpb1wiLCBcInhNaWRZTWlkIG1lZXRcIilcbiAgICAgICAgLmFwcGVuZChcImdcIilcbiAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgXCJ0cmFuc2xhdGUoXCIgKyBtYXJnaW4ubGVmdCArIFwiLFwiICsgbWFyZ2luLnRvcCArIFwiKVwiKTtcblxuICAgIHJldHVybiBzdmc7XG59XG5cbnR5cGUgRG9tYWluUmFuZ2UgPSBudW1iZXJbXVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q29udG91clZhbHVlcyhuOiBudW1iZXIsIG06IG51bWJlciwgeHJhbmdlOiBEb21haW5SYW5nZSwgeXJhbmdlOiBEb21haW5SYW5nZSwgZnVuYzogKHg6IG51bWJlciwgeTogbnVtYmVyKSA9PiBudW1iZXIpIHtcbiAgICBsZXQgdmFsdWVzID0gbmV3IEFycmF5KG4gKiBtKVxuXG4gICAgZm9yICh2YXIgaiA9IDAuNSwgayA9IDA7IGogPCBtOyArK2opIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDAuNTsgaSA8IG47ICsraSwgKytrKSB7XG4gICAgICAgICAgICBjb25zdCB4dmFsID0gKChpIC8gbikgKiAoeHJhbmdlWzFdIC0geHJhbmdlWzBdKSkgKyB4cmFuZ2VbMF07XG4gICAgICAgICAgICBjb25zdCB5dmFsID0gKDEgLSAoaiAvIG0pKSAqICh5cmFuZ2VbMV0gLSB5cmFuZ2VbMF0pICsgeXJhbmdlWzBdO1xuICAgICAgICAgICAgdmFsdWVzW2tdID0gZnVuYyh4dmFsLCB5dmFsKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB2YWx1ZXNcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVuaWZvcm0oYSwgYikge1xuICAgIHJldHVybiBNYXRoLnJhbmRvbSgpICogKGIgLSBhKSArIGE7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZW5Vbmlmb3JtKGE6bnVtYmVyLCBiOm51bWJlciwgbjpudW1iZXIpIHtcbiAgICByZXR1cm4gcmFuZ2UoMCwgbikubWFwKHggPT4ge3JldHVybiB7eDogdW5pZm9ybShhLCBiKSwgeTogdW5pZm9ybShhLGIpfX0pXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBub3JtYWwobWVhbiwgdmFyaWFuY2UpIHtcbiAgICB2YXIgcyA9IDA7XG4gICAgd2hpbGUgKHMgPT0gMCB8fCBzID4gMSkge1xuICAgICAgICB2YXIgdSA9IHVuaWZvcm0oLTEsMSksXG4gICAgICAgIHYgPSB1bmlmb3JtKC0xLDEpO1xuICAgICAgICBzID0gdSAqIHUgKyB2ICogdjtcbiAgICB9XG5cbiAgICB2YXIgc3RhbmRhcmQgPSBNYXRoLnNxcnQoLTIgKiBNYXRoLmxvZyhzKSAvIHMpICogdTtcbiAgICByZXR1cm4gbWVhbiArIE1hdGguc3FydCh2YXJpYW5jZSkgKiBzdGFuZGFyZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdlbk5vcm1hbChtZWFuOm51bWJlciwgdmFyaWFuY2U6bnVtYmVyLCBuOm51bWJlcikge1xuICAgIHJldHVybiByYW5nZSgwLCBuKS5tYXAoeCA9PiB7cmV0dXJuIHt4OiBub3JtYWwobWVhbiwgdmFyaWFuY2UpLCB5OiB1bmlmb3JtKG1lYW4sdmFyaWFuY2UpfX0pXG59IiwiaW1wb3J0ICogYXMgZDMgZnJvbSAnZDMnXG5pbXBvcnQgeyBWZWN0b3IyRCB9IGZyb20gJy4vdHlwZXMnXG5pbXBvcnQgeyBTVkdWaXNDb21wb25lbnQsIFNWR09wdGlvbnMsIE1hcmdpbkluZm8gfSBmcm9tIFwiLi9TVkdWaXNDb21wb25lbnRcIlxuXG5leHBvcnQgaW50ZXJmYWNlIENoYXJ0T3B0aW9ucyBleHRlbmRzIFNWR09wdGlvbnMge1xuICAgIHhyYW5nZTogW251bWJlciwgbnVtYmVyXVxuICAgIHlyYW5nZTogW251bWJlciwgbnVtYmVyXVxuICAgIHBhZDogTWFyZ2luSW5mbyAgICAgICAgICAgICAvLyBEaXN0YW5jZSBmcm9tIGVkZ2VzLiBEZW1hcmNhdGUgd2hlbiB0aGluZ3MgYXJlIHRvbyBjbG9zZSB0byB0aGUgZWRnZVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIENoYXJ0U2NhbGVzIHtcbiAgICB4PzogZDMuU2NhbGVMaW5lYXI8bnVtYmVyLCBudW1iZXI+LFxuICAgIHk/OiBkMy5TY2FsZUxpbmVhcjxudW1iZXIsIG51bWJlcj4sXG59XG4vKipcbiAqIENyZWF0ZSBhIGNsYXNzIHRoYXQgY2FuIGJlIHVzZWQgZm9yIHBsb3R0aW5nIGNoYXJ0cyAobGluZSBncmFwaHMsIGJhciBncmFwaHMsIGV0Yy4pLlxuICovXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQ2hhcnQyRDxEYXRhSW50ZXJmYWNlPiBleHRlbmRzIFNWR1Zpc0NvbXBvbmVudDxEYXRhSW50ZXJmYWNlPiB7XG4gICAgb3B0aW9uczogQ2hhcnRPcHRpb25zXG4gICAgc2NhbGVzOiBDaGFydFNjYWxlc1xuXG4gICAgLy8gUHV0IGEgdmVjdG9yIGludG8gdGhlIGNvb3JkaW5hdGUgc3lzdGVtIHVzZWQgYnkgdGhlIHZpc3VhbGl6YXRpb25cbiAgICBpbnRvVmlzKHY6IFZlY3RvcjJEKSB7XG4gICAgICAgIHJldHVybiB7IHg6IHRoaXMuc2NhbGVzLngodi54KSwgeTogdGhpcy5zY2FsZXMueSh2LnkpIH1cbiAgICB9XG5cbiAgICAvLyBUYWtlIGEgdmVjdG9yIGluIHRoZSBjb29yZGluYXRlIHN5c3RlbSBhbmQgcmV0dXJuIGl0IHRvIHRoZSBtYXRoIGNvb3JkaW5hdGVzXG4gICAgaW50b01hdGgodjogVmVjdG9yMkQpIHtcbiAgICAgICAgcmV0dXJuIHsgeDogdGhpcy5zY2FsZXMueC5pbnZlcnQodi54KSwgeTogdGhpcy5zY2FsZXMueS5pbnZlcnQodi55KSB9XG4gICAgfVxuXG4gICAgLy8gSW5zdGFudGlhdGUgdGhlIGF4ZXMgb2YgdGhlIGNoYXJ0LiBSZWltcGxlbWVudCBkZXBlbmRpbmcgb24gaG93IHdlIHdhbnQgdGhlIGF4ZXMgdG8gYXBwZWFyXG4gICAgcHJvdGVjdGVkIGFic3RyYWN0IGNyZWF0ZUF4ZXMoKVxuXG4gICAgLy8gSW5zdGFudGlhdGUgdGhlIHNjYWxlcyBmcm9tIHRoZSB4cmFuZ2UgYW5kIHRoZSB5cmFuZ2VcbiAgICBwcm90ZWN0ZWQgYWJzdHJhY3QgY3JlYXRlU2NhbGVzKClcbn0iLCJpbXBvcnQgeyBEM1NlbCB9IGZyb20gXCIuL3hkM1wiXG5pbXBvcnQgeyBWaXNDb21wb25lbnQgfSBmcm9tIFwiLi9WaXNDb21wb25lbnRcIlxuaW1wb3J0IHsgU2ltcGxlRXZlbnRIYW5kbGVyIH0gZnJvbSBcIi4vU2ltcGxlRXZlbnRIYW5kbGVyXCI7XG5pbXBvcnQgeyBTVkcgfSBmcm9tIFwiLi9TVkdwbHVzXCI7XG5cbmV4cG9ydCB0eXBlIE1hcmdpbkluZm8gPSB7XG4gICAgdG9wOm51bWJlclxuICAgIHJpZ2h0Om51bWJlclxuICAgIGJvdHRvbTpudW1iZXJcbiAgICBsZWZ0Om51bWJlclxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNWR09wdGlvbnMge1xuICAgIG1hcmdpbjogTWFyZ2luSW5mb1xuICAgIG1heFdpZHRoOiBudW1iZXIgICAgICAgIC8vIFRoZSB0b3RhbCB3aWR0aCBvZiB0aGUgY29tcG9uZW50XG4gICAgbWF4SGVpZ2h0OiBudW1iZXIgICAgICAgLy8gVGhlIHRvdGFsIGhlaWdodCBvZiB0aGUgY29tcG9uZW50XG4gICAgd2lkdGg/OiBudW1iZXIgICAgICAgICAgLy8gVGhlIHRvdGFsIHdpZHRoIC0gYXBwbGljYWJsZSBtYXJnaW5zXG4gICAgaGVpZ2h0PzogbnVtYmVyICAgICAgICAgLy8gVGhlIHRvdGFsIGhlaWdodCAtIGFwcGxpY2FibGUgbWFyZ2luc1xufVxuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgU1ZHVmlzQ29tcG9uZW50PERhdGFJbnRlcmZhY2U+IGV4dGVuZHMgVmlzQ29tcG9uZW50PERhdGFJbnRlcmZhY2U+IHtcbiAgICBwcm90ZWN0ZWQgbGF5ZXJzOiB7IG1haW4/OiBEM1NlbCwgZmc/OiBEM1NlbCwgYmc/OiBEM1NlbCwgW2tleTogc3RyaW5nXTogRDNTZWwgfTtcbiAgICBwcm90ZWN0ZWQgc3ZnOiBEM1NlbFxuICAgIHByb3RlY3RlZCBvcHRpb25zOiBTVkdPcHRpb25zID0ge1xuICAgICAgICBtYXJnaW46IHsgdG9wOiAwLCByaWdodDogMCwgYm90dG9tOiAwLCBsZWZ0OiAwIH0sXG4gICAgICAgIG1heFdpZHRoOiA0NTAsXG4gICAgICAgIG1heEhlaWdodDogNDUwLFxuICAgIH1cblxuICAgIHByb3RlY3RlZCBjb25zdHJ1Y3RvcihkM3BhcmVudDogRDNTZWwsIGV2ZW50SGFuZGxlcj86IFNpbXBsZUV2ZW50SGFuZGxlciwgb3B0aW9uczoge30gPSB7fSwgSUQ9MCkge1xuICAgICAgICBzdXBlcihkM3BhcmVudCwgZXZlbnRIYW5kbGVyLCBJRClcbiAgICB9XG5cbiAgICAvKiogXG4gICAgICogTXVzdCBiZSBjYWxsZWQgaW1tZWRpYXRlbHkgYWZ0ZXIgdGhlIGBzdXBlcigpYCBjb25zdHJ1Y3RvciBjYWxsIG9mIGluaGVyZXRpbmcgY2xhc3Nlcy5cbiAgICAgKiBcbiAgICAgKiAtIENhbGN1bGF0ZXMgaGVpZ2h0IGFuZCB3aWR0aCBmb3Igb3B0aW9uc1xuICAgICAqIC0gQWRkcyAnc3ZnJyBhbmQgJ2Jhc2UnIG9iamVjdHMgdG8gdGhlIGRpdi5cbiAgICAgKiAtIEFkZHMgbGF5ZXJzIG9uIHRoZSBiYXNlIHRvIHdvcmsgd2l0aCBpZiBwYXNzZWRcbiAgICAgKiAtIFJ1bnMgZGVmaW5lZCBzdGF0aWMgaW5pdGlhbGl6YXRpb24gZGVmaW5lZCBpbiBgaW5pdCgpYFxuICAgICAqL1xuICAgIHByb3RlY3RlZCBpbml0U1ZHKG9wdGlvbnMgPSB7fSwgZGVmYXVsdExheWVycyA9IFtdKSB7XG4gICAgICAgIHRoaXMudXBkYXRlT3B0aW9ucyhvcHRpb25zKVxuICAgICAgICBjb25zdCBvcCA9IHRoaXMub3B0aW9ucztcbiAgICAgICAgb3Aud2lkdGggPSBvcC5tYXhXaWR0aCAtIChvcC5tYXJnaW4ubGVmdCArIG9wLm1hcmdpbi5yaWdodClcbiAgICAgICAgb3AuaGVpZ2h0ID0gb3AubWF4SGVpZ2h0IC0gKG9wLm1hcmdpbi50b3AgKyBvcC5tYXJnaW4uYm90dG9tKVxuXG4gICAgICAgIHRoaXMuc3ZnID0gU1ZHLmFkZFNWRyh0aGlzLnBhcmVudCwgb3Aud2lkdGgsIG9wLmhlaWdodCwgb3AubWFyZ2luKVxuICAgICAgICB0aGlzLmJhc2UgPSBTVkcuZ3JvdXAodGhpcy5zdmcsICcnKTsgLy8gTGV0IEhUTUwgYXV0aG9yIGFzc2lnbiB0aGUgY2xhc3MgbmFtZSBhbmQgSURcbiAgICAgICAgdGhpcy5sYXllcnMgPSB7fTtcbiAgICAgICAgaWYgKGRlZmF1bHRMYXllcnMpIHtcbiAgICAgICAgICAgIC8vIGNvbnN0cnVjdGlvbiBvcmRlciBpcyBpbXBvcnRhbnQgIVxuICAgICAgICAgICAgZGVmYXVsdExheWVycy5mb3JFYWNoKGxheWVyID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmxheWVyc1tsYXllcl0gPSBTVkcuZ3JvdXAodGhpcy5iYXNlLCBsYXllcik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuaW5pdCgpXG4gICAgfVxufSIsImltcG9ydCAqIGFzIGQzIGZyb20gXCJkM1wiXG5pbXBvcnQgKiBhcyBSIGZyb20gJ3JhbWRhJ1xuaW1wb3J0IHtNYXJnaW5JbmZvfSBmcm9tICcuL1NWR1Zpc0NvbXBvbmVudCdcbmltcG9ydCB7RDNTZWx9IGZyb20gJy4uL3V0aWwveGQzJ1xuXG4vKipcbiAqIENyZWF0ZWQgYnkgaGVuIG9uIDUvMTUvMTcuXG4gKiBNb2RpZmllZCBieSBob28gb24gNC8xNi8xOS5cbiAqL1xuXG5leHBvcnQgY2xhc3MgU1ZHIHtcbiAgICBcbiAgICBzdGF0aWMgdHJhbnNsYXRlKHg6bnVtYmVyLCB5Om51bWJlcik6c3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIGB0cmFuc2xhdGUoJHt4fSwke3l9KWBcbiAgICB9XG5cbiAgICBzdGF0aWMgcm90YXRlKGRlZzpudW1iZXIsIG9yaWc/Ont4Om51bWJlciwgeTpudW1iZXJ9KTpzdHJpbmcge1xuICAgICAgICBpZiAob3JpZyA9PSBudWxsKSBcbiAgICAgICAgICAgIHJldHVybiBgcm90YXRlKCR7ZGVnfSlgXG5cbiAgICAgICAgcmV0dXJuIGByb3RhdGUoJHtkZWd9LCR7b3JpZy54fSwke29yaWcueX0pYFxuICAgIH1cblxuICAgIHN0YXRpYyBza2V3KGRlZ3g6bnVtYmVyLCBkZWd5PTApIHtcbiAgICAgICAgcmV0dXJuIGBza2V3KCR7ZGVneH0sICR7ZGVneX0pYFxuICAgIH1cblxuICAgIHN0YXRpYyBza2V3WChkZWc6bnVtYmVyKSB7XG4gICAgICAgIHJldHVybiBgc2tld1goJHtkZWd9KWBcbiAgICB9XG5cbiAgICBzdGF0aWMgc2tld1koZGVnOm51bWJlcikge1xuICAgICAgICByZXR1cm4gYHNrZXdZKCR7ZGVnfSlgXG4gICAgfVxuXG4gICAgc3RhdGljIHNjYWxlKHg6bnVtYmVyLCB5PzpudW1iZXIpOnN0cmluZyB7XG4gICAgICAgIGNvbnN0IHlzY2FsZSA9IHkgIT0gbnVsbCA/IHkgOiB4O1xuXG4gICAgICAgIHJldHVybiBgc2NhbGUoJHt4fSwgJHt5c2NhbGV9KWBcbiAgICB9XG5cbiAgICBzdGF0aWMgZ3JvdXAocGFyZW50LCBjbGFzc2VzLCBwb3MgPSB7eDogMCwgeTogMH0pIHtcbiAgICAgICAgcmV0dXJuIHBhcmVudC5hcHBlbmQoJ2cnKVxuICAgICAgICAgICAgLmF0dHIoJ2NsYXNzJywgY2xhc3NlcylcbiAgICAgICAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIFNWRy50cmFuc2xhdGUocG9zLngsIHBvcy55KSlcbiAgICB9XG5cbiAgICBzdGF0aWMgYWRkU1ZHKHBhcmVudDpEM1NlbCwgd2lkdGg6bnVtYmVyLCBoZWlnaHQ6bnVtYmVyLCBtYXJnaW46TWFyZ2luSW5mbyk6RDNTZWwge1xuXG4gICAgICAgIHZhciBzdmcgPSBwYXJlbnQuYXBwZW5kKFwic3ZnXCIpXG4gICAgICAgICAgICAuYXR0cihcIndpZHRoXCIsIFwiMTAwJVwiKVxuICAgICAgICAgICAgLmF0dHIoXCJoZWlnaHRcIiwgXCIxMDAlXCIpXG4gICAgICAgICAgICAuYXR0cihcInZpZXdCb3hcIiwgXCIwIDAgXCIgKyAod2lkdGggKyBtYXJnaW4ubGVmdCArIG1hcmdpbi5yaWdodCkgKyBcIiBcIiArIChoZWlnaHQgKyBtYXJnaW4udG9wICsgbWFyZ2luLmJvdHRvbSkpXG4gICAgICAgICAgICAuYXR0cihcInByZXNlcnZlQXNwZWN0UmF0aW9cIiwgXCJ4TWlkWU1pZCBtZWV0XCIpXG4gICAgICAgIC5hcHBlbmQoXCJnXCIpXG4gICAgICAgICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBTVkcudHJhbnNsYXRlKG1hcmdpbi5sZWZ0LCBtYXJnaW4udG9wKSk7XG5cbiAgICAgICAgcmV0dXJuIHN2ZztcbiAgICB9XG5cbiAgICBzdGF0aWMgYWRkQXJyb3dzKHBhcmVudDpEM1NlbCkge1xuICAgICAgICBwYXJlbnQuYXBwZW5kKCdkZWZzJylcbiAgICAgICAgICAgIC5hcHBlbmQoJ21hcmtlcicpXG4gICAgICAgICAgICAuYXR0cihcImlkXCIsIFwiYXJyb3dcIilcbiAgICAgICAgICAgIC5hdHRyKFwibWFya2VyVW5pdHNcIiwgXCJzdHJva2VXaWR0aFwiKVxuICAgICAgICAgICAgLmF0dHIoXCJtYXJrZXJXaWR0aFwiLCA5KVxuICAgICAgICAgICAgLmF0dHIoXCJtYXJrZXJIZWlnaHRcIiwgOSlcbiAgICAgICAgICAgIC5hdHRyKFwidmlld0JveFwiLCBcIjAgMCAxMiAxMlwiKVxuICAgICAgICAgICAgLmF0dHIoXCJyZWZYXCIsIDYpXG4gICAgICAgICAgICAuYXR0cihcInJlZllcIiwgNilcbiAgICAgICAgICAgIC5hdHRyKFwib3JpZW50XCIsICdhdXRvJylcbiAgICAgICAgICAgIC5hcHBlbmQoJ3BhdGgnKVxuICAgICAgICAgICAgLmF0dHIoJ2QnLCBcIk0yLDIgTDEwLDYgTDIsMTAgTDYsNiBMMiwyXCIpXG4gICAgICAgICAgICAuc3R5bGUoXCJmaWxsOiAjZjAwXCIpXG4gICAgfVxuXG4gICAgc3RhdGljIGluc2VydEFycm93KHBhcmVudDpEM1NlbCwgeDE6bnVtYmVyLCB5MTpudW1iZXIsIHgyOm51bWJlciwgeTI6bnVtYmVyLCBjb2xvcjpzdHJpbmcsIHdpZHRoOm51bWJlcikge1xuICAgICAgICByZXR1cm4gcGFyZW50LmFwcGVuZChcImxpbmVcIilcbiAgICAgICAgICAgICAuYXR0cihcIngxXCIseDEpICBcbiAgICAgICAgICAgICAuYXR0cihcInkxXCIseTEpICBcbiAgICAgICAgICAgICAuYXR0cihcIngyXCIseDIpICBcbiAgICAgICAgICAgICAuYXR0cihcInkyXCIseTIpICBcbiAgICAgICAgICAgICAuYXR0cihcInN0cm9rZVwiLGNvbG9yKSAgXG4gICAgICAgICAgICAgLmF0dHIoXCJzdHJva2Utd2lkdGhcIix3aWR0aCkgIFxuICAgICAgICAgICAgIC5hdHRyKFwibWFya2VyLWVuZFwiLFwidXJsKCNhcnJvdylcIik7ICBcbiAgICB9XG5cbiAgICBzdGF0aWMgbWVzaGdyaWQobng6IG51bWJlciwgbnk6IG51bWJlciwgeHJhbmdlOiBudW1iZXJbXSwgeXJhbmdlOiBudW1iZXJbXSkge1xuICAgICAgICBjb25zdCBzY2FsZSA9ICh2YWxzOm51bWJlcltdLCByYW5nZSkgPT4gdmFscy5tYXAodiA9PiAodiAqIChyYW5nZVsxXSAtIHJhbmdlWzBdKSkgKyByYW5nZVswXSk7XG5cbiAgICAgICAgY29uc3QgcG9pbnRpZnkgPSAoeHZhbHM6bnVtYmVyW10sIHl2YWxzOm51bWJlcltdKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBvdXQgPSBbXVxuICAgICAgICAgICAgeHZhbHMuZm9yRWFjaCh4ID0+IHtcbiAgICAgICAgICAgICAgICB5dmFscy5mb3JFYWNoKHkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBvdXQucHVzaCh7eDogeCwgeTogeX0pXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICByZXR1cm4gb3V0XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB4dmFscyA9IHNjYWxlKFIucmFuZ2UoMCwgbngpLm1hcCh4ID0+ICh4ICsgMC41KSAvIG54KSwgeHJhbmdlKVxuICAgICAgICBjb25zdCB5dmFscyA9IHNjYWxlKFIucmFuZ2UoMCwgbnkpLm1hcCh5ID0+ICh5ICsgMC41KSAvIG55KSwgeXJhbmdlKVxuICAgICAgICByZXR1cm4gcG9pbnRpZnkoeHZhbHMsIHl2YWxzKVxuICAgIH1cblxufVxuXG5leHBvcnQgY2xhc3MgU1ZHTWVhc3VyZW1lbnRzIHtcblxuICAgIHByaXZhdGUgbWVhc3VyZUVsZW1lbnQ6IGQzLlNlbGVjdGlvbjxhbnksIGFueSwgYW55LCBhbnk+O1xuXG4gICAgY29uc3RydWN0b3IoYmFzZUVsZW1lbnQsIGNsYXNzZXMgPSAnJykge1xuICAgICAgICB0aGlzLm1lYXN1cmVFbGVtZW50ID0gYmFzZUVsZW1lbnQuYXBwZW5kKCd0ZXh0JylcbiAgICAgICAgICAgIC5hdHRyKCd4JywgMClcbiAgICAgICAgICAgIC5hdHRyKCd5JywgLTIwKVxuICAgICAgICAgICAgLmF0dHIoJ2NsYXNzJywgY2xhc3NlcylcblxuICAgIH1cblxuICAgIHRleHRMZW5ndGgodGV4dCwgc3R5bGUgPSBudWxsKSB7XG4gICAgICAgIHRoaXMubWVhc3VyZUVsZW1lbnQuYXR0cignc3R5bGUnLCBzdHlsZSk7XG4gICAgICAgIHRoaXMubWVhc3VyZUVsZW1lbnQudGV4dCh0ZXh0KTtcbiAgICAgICAgY29uc3QgdGwgPSAoPFNWR1RleHRFbGVtZW50PiB0aGlzLm1lYXN1cmVFbGVtZW50Lm5vZGUoKSkuZ2V0Q29tcHV0ZWRUZXh0TGVuZ3RoKCk7XG4gICAgICAgIHRoaXMubWVhc3VyZUVsZW1lbnQudGV4dCgnJyk7XG5cbiAgICAgICAgcmV0dXJuIHRsO1xuICAgIH1cbn0iLCIvKipcbiAqIENyZWF0ZWQgYnkgaGVuIG9uIDUvMTUvMTcuXG4gKiBNb2RpZmllZCBieSBob28gb24gNC8xNi8xOS5cbiAqL1xuZXhwb3J0IGNsYXNzIFNpbXBsZUV2ZW50SGFuZGxlciB7XG5cbiAgICBlbGVtZW50OiBFbGVtZW50O1xuICAgIGV2ZW50TGlzdGVuZXJzOiBvYmplY3RbXTtcblxuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnQ6IEVsZW1lbnQpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgICAgICAgdGhpcy5ldmVudExpc3RlbmVycyA9IFtdXG4gICAgfVxuXG4gICAgYmluZChldmVudE5hbWVzOiBzdHJpbmcsIGV2ZW50RnVuY3Rpb246IEZ1bmN0aW9uKSB7XG4gICAgICAgIGZvciAoY29uc3QgZXZlbnROYW1lIG9mIGV2ZW50TmFtZXMuc3BsaXQoJyAnKSkge1xuICAgICAgICAgICAgdGhpcy5ldmVudExpc3RlbmVycy5wdXNoKHtldmVudE5hbWUsIGV2ZW50RnVuY3Rpb259KTtcbiAgICAgICAgICAgIGNvbnN0IGV2ZW50RnVuY3Rpb25XcmFwID0gZSA9PiBldmVudEZ1bmN0aW9uKGUuZGV0YWlsLCBlKTtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgZXZlbnRGdW5jdGlvbldyYXAsIGZhbHNlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldExpc3RlbmVycygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZXZlbnRMaXN0ZW5lcnM7XG4gICAgfVxuXG4gICAgdHJpZ2dlcihldmVudE5hbWU6IHN0cmluZywgZGV0YWlsOiBvYmplY3QpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KGV2ZW50TmFtZSwge2RldGFpbH0pKTtcbiAgICB9XG59IiwibGV0IHRoZV91bmlxdWVfaWRfY291bnRlciA9IDA7XG5sZXQgdGhlX3VuaXF1ZV9zdHJpbmdfY291bnRlciA9IDA7XG5cbmV4cG9ydCBjbGFzcyBVSWQge1xuICAgIHN0YXRpYyB1aWQoKTogbnVtYmVyIHtcbiAgICAgICAgdGhlX3VuaXF1ZV9pZF9jb3VudGVyICs9IDE7XG4gICAgICAgIHJldHVybiB0aGVfdW5pcXVlX2lkX2NvdW50ZXJcbiAgICB9XG4gICAgc3RhdGljIHNpbXBsZVVJZChwcmVmaXg9JycpOiBzdHJpbmcge1xuICAgICAgICB0aGVfdW5pcXVlX3N0cmluZ19jb3VudGVyICs9IDE7XG5cbiAgICAgICAgcmV0dXJuIHByZWZpeCArIHRoZV91bmlxdWVfc3RyaW5nX2NvdW50ZXI7XG4gICAgfVxufVxuIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IEhlbmRyaWsgU3Ryb2JlbHQgKGhlbmRyaWsuc3Ryb2JlbHQuY29tKSBvbiAxMi8zLzE2LlxuICogTW9kaWZpZWQgYnkgQmVuIEhvb3ZlciBvbiA0LzE2LzIwMTlcbiAqL1xuaW1wb3J0IHsgRDNTZWwgfSBmcm9tIFwiLi94ZDNcIlxuaW1wb3J0IHsgU2ltcGxlRXZlbnRIYW5kbGVyIH0gZnJvbSBcIi4vU2ltcGxlRXZlbnRIYW5kbGVyXCI7XG5cbi8qKlxuICogU2hvdWxkIGhhdmUgVkNvbXBvbmVudEhUTUwgYW5kIFZDb21wb25lbnRTVkdcbiAqXG4gKiBDb21tb24gUHJvcGVydGllczpcbiAqIC0gZXZlbnRzXG4gKiAtIGV2ZW50SGFuZGxlciAoViBpbXBvcnRhbnQpXG4gKiAtIG9wdGlvbnMgKE1haW50YWlucyBwdWJsaWMgc3RhdGUuIENhbiBleHBvc2UgdGhlc2Ugd2l0aCBnZXQvc2V0IGZ1bmN0aW9ucyB3aXRoIGF1dG8gdXBkYXRlKVxuICogLSBfY3VycmVudCAoTWFpbnRhaW5zIHByaXZhdGUgc3RhdGUpXG4gKiAtIGNzc05hbWUgKHN5bmNlZCB3aXRoIGNvcnJlc3BvbmRpbmcgQ1NTIGZpbGUpXG4gKiAtIHBhcmVudCAoSFRNTCBpcyBkaXYgY29udGFpbmluZyB0aGUgYmFzZSwgU1ZHIGlzIFNWRyBlbGVtZW50KVxuICogLSBiYXNlIChIVE1MIGlzIGRpdiB3aXRoIGNzc19uYW1lIGVzdGFibGlzaGVkKVxuICogLSBfZGF0YSAoRGF0YSB1c2VkIHRvIGNyZWF0ZSBhbmQgcmVuZGVyIHRoZSBjb21wb25lbnQpXG4gKiAtIF9yZW5kZXJEYXRhIChEYXRhIG5lZWRlZCB0byBkaXNwbGF5LiBUaGlzIG1heSBub3QgYmUgbmVlZGVkLCBidXQgaXMgY3VycmVudGx5IHVzZWQgaW4gaGlzdG9ncmFtKSAqICogQ29tbW9uIE1ldGhvZHM6XG4gKiAtIGNvbnN0cnVjdG9yXG4gKiAtIF9yZW5kZXIoKSAgICAgIENvbnNpZGVyIHJlcGxhY2luZyB3aXRoIGBfdXBkYXRlRGF0YSgpYCB0aGF0IHVwZGF0ZXMgYWxsIGRhdGEgYXQgb25jZVxuICogLSB1cGRhdGUoKSAgICAgICBDb25zaWRlciByZXBsYWNpbmcgdGhpcyB3aXRoIGBkYXRhKClgIHRoYXQgYXV0byB1cGRhdGVzIGRhdGFcbiAqIC0gcmVkcmF3KClcbiAqIC0gZGVzdHJveSgpXG4gKi9cblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFZpc0NvbXBvbmVudDxEYXRhSW50ZXJmYWNlPiB7XG4gICAgLyoqXG4gICAgICogR2l2ZW4gYW4gSUQsIGNyZWF0ZSBhIG5ldyBpbnN0YW5jZSBvZiB0aGlzIGNsYXNzIHdpdGggdGhlIGV2ZW50cyBhbmQgY3NzX25hbWUgbW9kaWZpZWQgYnkgdGhlIGlkXG4gICAgICovXG4gICAgbmV3SW5zdGFuY2UoaWQ6IG51bWJlcikgeyB9XG5cbiAgICAvKipcbiAgICAgKiBUaGUgc3RhdGljIHByb3BlcnR5IHRoYXQgY29udGFpbnMgYWxsIGNsYXNzIHJlbGF0ZWQgZXZlbnRzLlxuICAgICAqIFNob3VsZCBiZSBvdmVyd3JpdHRlbiBhbmQgZXZlbnQgc3RyaW5ncyBoYXZlIHRvIGJlIHVuaXF1ZSEhXG4gICAgICovXG4gICAgcHJvdGVjdGVkIGdldCBldmVudHMoKSB7XG4gICAgICAgIGNvbnN0IGV2ZW50ID0gKGV2ZW50TmFtZSkgPT4gYCR7dGhpcy5iYXNlTmFtZX1fJHtldmVudE5hbWV9YFxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbm9FdmVudDogZXZlbnQoJ05vRXZlbnQnKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGdldCBiYXNlTmFtZSgpIHtcbiAgICAgICAgcmV0dXJuIGAke3RoaXMuY3NzbmFtZX1fSUQke3RoaXMuSUR9YFxuICAgIH1cblxuICAgIHByb3RlY3RlZCBjc3NuYW1lOiBzdHJpbmc7ICAgICAgICAgICAgLy8gTWFrZSB0aGUgc2FtZSBhcyB0aGUgY29ycmVzcG9uZGluZyBjc3MgZmlsZVxuICAgIHByb3RlY3RlZCBJRDogbnVtYmVyOyAgICAgICAgICAgICAgICAgLy8gSUQgYXNzb2NpYXRlZCB0byB1bmlxdWUgaW5zdGFuY2Ugb2YgdmlzdWFsaXphdGlvbi4gRGVmYXVsdHMgdG8gMFxuXG4gICAgcHJvdGVjdGVkIGFic3RyYWN0IG9wdGlvbnM6IHt9O1xuICAgIHByb3RlY3RlZCBldmVudEhhbmRsZXI6IFNpbXBsZUV2ZW50SGFuZGxlcjtcbiAgICBwYXJlbnQ6IEQzU2VsOyAgICAgICAgICAgICAgICAgICAgICAgIC8vIFBhcmVudCBkMyBzZWxlY3Rpb25cbiAgICBiYXNlOiBEM1NlbDsgICAgICAgICAgICAgICAgIC8vIGQzIHNlbGVjdGlvbiB0aGF0IGlzIGNyZWF0ZWQgYnkgdGhlIGluaXRcbiAgICBwcm90ZWN0ZWQgX2RhdGE6IERhdGFJbnRlcmZhY2U7XG4gICAgcHJvdGVjdGVkIHJlbmRlckRhdGE6IHVua25vd247XG5cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7RDNTZWx9IGQzcGFyZW50ICBEMyBzZWxlY3Rpb24gb2YgcGFyZW50IFNWRyBET00gRWxlbWVudFxuICAgICAqIEBwYXJhbSB7U2ltcGxlRXZlbnRIYW5kbGVyfSBldmVudEhhbmRsZXIgYSBnbG9iYWwgZXZlbnQgaGFuZGxlciBvYmplY3Qgb3IgJ251bGwnIGZvciBsb2NhbCBldmVudCBoYW5kbGVyXG4gICAgICovXG4gICAgcHJvdGVjdGVkIGNvbnN0cnVjdG9yKGQzcGFyZW50OiBEM1NlbCwgZXZlbnRIYW5kbGVyPzogU2ltcGxlRXZlbnRIYW5kbGVyLCBJRCA9IDApIHtcbiAgICAgICAgdGhpcy5wYXJlbnQgPSBkM3BhcmVudDtcbiAgICAgICAgdGhpcy5ldmVudEhhbmRsZXIgPSBldmVudEhhbmRsZXIgfHwgbmV3IFNpbXBsZUV2ZW50SGFuZGxlcih0aGlzLnBhcmVudC5ub2RlKCkpO1xuICAgICAgICB0aGlzLklEID0gSUQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2hvdWxkIGJlIG92ZXJ3cml0dGVuIHRvIGNyZWF0ZSBuZWVkZWQgc3RhdGljIERPTSBlbGVtZW50c1xuICAgICAqL1xuICAgIHByb3RlY3RlZCBhYnN0cmFjdCBpbml0KCk7XG5cbiAgICAvKipcbiAgICAgKiBGb2xsb3cgdGhlIEQzIGNvbnZlbnRpb246IHJldHJpZXZlIHRoZSBkYXRhIGluc2lkZSB0aGUgY2xhc3MgaWYgbnVsbC4gT3RoZXJ3aXNlLCBzZXQgdGhlIGRhdGEgYW5kIHJldHVybiAndGhpcydcbiAgICAgKi9cbiAgICBhYnN0cmFjdCBkYXRhKCk6IERhdGFJbnRlcmZhY2U7XG4gICAgYWJzdHJhY3QgZGF0YSh4OiBEYXRhSW50ZXJmYWNlKTogdGhpcztcblxuICAgIC8qKlxuICAgICAqIFNldCBtYW55IG9wdGlvbnMgYXQgb25jZVxuICAgICAqXG4gICAgICogQHBhcmFtIG9wdGlvbnMgUmVzZXQgb3B0aW9ucyB0byBwYXNzZWQgdmFsdWVzXG4gICAgICovXG4gICAgdXBkYXRlT3B0aW9ucyhvcHRpb25zOiB7fSkge1xuICAgICAgICBPYmplY3Qua2V5cyhvcHRpb25zKS5mb3JFYWNoKGsgPT4gdGhpcy5vcHRpb25zW2tdID0gb3B0aW9uc1trXSk7XG4gICAgfVxuXG4gICAgZGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy5iYXNlLnJlbW92ZSgpO1xuICAgIH1cbn0iLCJpbXBvcnQgKiBhcyBkMyBmcm9tICdkMydcbmltcG9ydCB7IEJhc2VUeXBlIH0gZnJvbSAnZDMnXG5cbmV4cG9ydCBjb25zdCBsaW5zcGFjZSA9IChzdGFydCwgZW5kLCBuKSA9PiB7XG4gICAgY29uc3QgZGVsdGEgPSAoZW5kIC0gc3RhcnQpIC8gKG4gLSAxKVxuICAgIHJldHVybiBkMy5yYW5nZShzdGFydCwgZW5kICsgZGVsdGEsIGRlbHRhKS5zbGljZSgwLCBuKVxufVxuXG5leHBvcnQgdHlwZSBEM1NlbCA9IGQzLlNlbGVjdGlvbjxhbnksIGFueSwgYW55LCBhbnk+XG5leHBvcnQgdHlwZSBkM1M8VCBleHRlbmRzIEJhc2VUeXBlLCBVID0gYW55PiA9IGQzLlNlbGVjdGlvbjxULCBVLCBhbnksIGFueT5cblxuZDMuc2VsZWN0aW9uLnByb3RvdHlwZS5jbGVhciA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLnNlbGVjdEFsbCgnKicpLnJlbW92ZSgpO1xuICAgIHJldHVybiB0aGlzO1xufVxuXG5kMy5zZWxlY3Rpb24ucHJvdG90eXBlLnRvZ2dsZUNsYXNzID0gZnVuY3Rpb24gKGNsYXNzTmFtZSkge1xuICAgIHRoaXMuY2xhc3NlZChjbGFzc05hbWUsICF0aGlzLmNsYXNzZWQoY2xhc3NOYW1lKSk7XG4gICAgcmV0dXJuIHRoaXM7XG59XG5cbmQzLnNlbGVjdGlvbi5wcm90b3R5cGUuc2hvdyA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLnN0eWxlKCdkaXNwbGF5JywgJ2luaXRpYWwnKTtcbiAgICByZXR1cm4gdGhpcztcbn1cblxuZDMuc2VsZWN0aW9uLnByb3RvdHlwZS5oaWRlID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuc3R5bGUoJ2Rpc3BsYXknLCAnbm9uZScpO1xuICAgIHJldHVybiB0aGlzO1xufVxuXG5kMy5zZWxlY3Rpb24ucHJvdG90eXBlLnRvZ2dsZSA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgaXNIaWRkZW4gPSB0aGlzLnN0eWxlKCdkaXNwbGF5JykgPT0gJ25vbmUnO1xuICAgIHJldHVybiB0aGlzLnN0eWxlKCdkaXNwbGF5JywgaXNIaWRkZW4gPyAnaW5oZXJpdCcgOiAnbm9uZScpO1xufVxuXG5kMy5zZWxlY3Rpb24ucHJvdG90eXBlLmFmdGVyID0gZnVuY3Rpb24gKHRhZ05hbWUpIHtcbiAgICB2YXIgZWxlbWVudHMgPSBbXTtcblxuICAgIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWdOYW1lKTtcbiAgICAgICAgdGhpcy5wYXJlbnROb2RlLmluc2VydEJlZm9yZShlbGVtZW50LCB0aGlzLm5leHRTaWJsaW5nKTtcbiAgICAgICAgZWxlbWVudHMucHVzaChlbGVtZW50KTtcbiAgICB9KTtcblxuICAgIHJldHVybiBkMy5zZWxlY3RBbGwoZWxlbWVudHMpO1xufVxuXG5kMy5zZWxlY3Rpb24ucHJvdG90eXBlLmJlZm9yZSA9IGZ1bmN0aW9uICh0YWdOYW1lKSB7XG4gICAgdmFyIGVsZW1lbnRzID0gW107XG5cbiAgICB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnTmFtZSk7XG4gICAgICAgIHRoaXMucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoZWxlbWVudCwgdGhpcyk7XG4gICAgICAgIGVsZW1lbnRzLnB1c2goZWxlbWVudCk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gZDMuc2VsZWN0QWxsKGVsZW1lbnRzKTtcbn0iLCJpbXBvcnQgKiBhcyBkMyBmcm9tICdkMydcbmltcG9ydCB7IEQzU2VsIH0gZnJvbSAnLi4vdXRpbC94ZDMnXG5pbXBvcnQgKiBhcyBSIGZyb20gJ3JhbWRhJ1xuaW1wb3J0IHsgbGVnZW5kQ29sb3IgfSBmcm9tICdkMy1zdmctbGVnZW5kJ1xuaW1wb3J0IHsgVmVjdG9yMkQgfSBmcm9tICcuLi91dGlsL3R5cGVzJ1xuaW1wb3J0IHsgU1ZHT3B0aW9ucywgU1ZHVmlzQ29tcG9uZW50IH0gZnJvbSAnLi4vdXRpbC9TVkdWaXNDb21wb25lbnQnXG5pbXBvcnQgeyBTaW1wbGVFdmVudEhhbmRsZXIgfSBmcm9tICcuLi91dGlsL1NpbXBsZUV2ZW50SGFuZGxlcic7XG5pbXBvcnQgeyBTVkcgfSBmcm9tICcuLi91dGlsL1NWR3BsdXMnXG5pbXBvcnQgeyBnZXRDb250b3VyVmFsdWVzIH0gZnJvbSAnLi4vcGxvdHRpbmcnXG5pbXBvcnQgeyBVcGRhdGVyLCBCbG9ja1VwZGF0ZXIgfSBmcm9tICcuLi9VcGRhdGVyJ1xuaW1wb3J0IHsgaW50ZXJ2YWwsIGZyb21FdmVudCB9IGZyb20gJ3J4anMnXG5pbXBvcnQgeyBtYXAsIHRhcCwgdGFrZSwgc3RhcnRXaXRoLCBzY2FuLCBzd2l0Y2hNYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycydcblxudHlwZSBUID0gbnVtYmVyW11cblxuaW50ZXJmYWNlIEdyYXBoT3B0aW9ucyBleHRlbmRzIFNWR09wdGlvbnMge1xuICAgIHhyYW5nZTogW251bWJlciwgbnVtYmVyXVxuICAgIHlyYW5nZTogW251bWJlciwgbnVtYmVyXVxuICAgIG46IG51bWJlciAgICAgICAgICAgICAgICAgICAvLyBOdW1iZXIgb2YgbWVzaGdyaWQgcG9pbnRzIGFsb25nIHRoZSB4IGF4aXNcbiAgICBtOiBudW1iZXIgICAgICAgICAgICAgICAgICAgLy8gTnVtYmVyIG9mIG1lc2hncmlkIHBvaW50cyBhbG9uZyB0aGUgeSBheGlzXG4gICAgcGFkOiBudW1iZXIgICAgICAgICAgICAgICAgIC8vIEFubm90YXRpb25zIHRoYXQgaGFwcGVuIGluIHRoZSBtYXJnaW4gbXVzdCB0YWtlIHBsYWNlIGBwYWRgIGRpc3RhbmNlIGZyb20gdGhlIG1haW4gZ3JhcGhcbn1cblxuaW50ZXJmYWNlIEdyYXBoU2NhbGVzIHtcbiAgICB4PzogZDMuU2NhbGVMaW5lYXI8bnVtYmVyLCBudW1iZXI+LFxuICAgIHk/OiBkMy5TY2FsZUxpbmVhcjxudW1iZXIsIG51bWJlcj4sXG4gICAgY29sb3I/OiBkMy5TY2FsZUxvZ2FyaXRobWljPG51bWJlciwgc3RyaW5nPixcbiAgICBjdXJ2ZT86IGQzLkN1cnZlQ2F0bXVsbFJvbUZhY3RvcnksXG4gICAgY29udG91cnM/OiBkMy5Db250b3VycyxcbiAgICB0aHJlc2hvbGRzPzogbnVtYmVyW11cbn1cblxuaW50ZXJmYWNlIEdyYXBoU2VscyB7XG4gICAgeGF4aXM/OiBEM1NlbFxuICAgIHlheGlzPzogRDNTZWxcbiAgICBsZWdlbmQ/OiBEM1NlbFxuICAgIHRpcD86IEQzU2VsXG4gICAgeGxhYmVsPzogRDNTZWxcbiAgICB5bGFiZWw/OiBEM1NlbFxuICAgIGNpcmNsZT86IEQzU2VsXG4gICAgYXJyb3dzPzogRDNTZWxbXVxufVxuXG5leHBvcnQgY2xhc3MgQ29udG91clBsb3QgZXh0ZW5kcyBTVkdWaXNDb21wb25lbnQ8VD4ge1xuICAgIGNzc25hbWUgPSBcInNpbXBsZS1ncmFwaFwiXG5cbiAgICBfZGF0YTogVFxuXG4gICAgb3B0aW9uczogR3JhcGhPcHRpb25zID0ge1xuICAgICAgICBtYXhXaWR0aDogNDUwLFxuICAgICAgICBtYXhIZWlnaHQ6IDUwMCxcbiAgICAgICAgbWFyZ2luOiB7IHRvcDogNTAsIHJpZ2h0OiA3NSwgYm90dG9tOiAxMjUsIGxlZnQ6IDUwIH0sXG4gICAgICAgIHBhZDogMzAsXG4gICAgICAgIHhyYW5nZTogWzAsIDIuNV0sXG4gICAgICAgIHlyYW5nZTogWzAsIDIuNV0sXG4gICAgICAgIG46IDUwMCxcbiAgICAgICAgbTogNTAwLFxuICAgIH0gLy8gI3N0YXRlXG5cbiAgICBzY2FsZXM6IEdyYXBoU2NhbGVzID0ge31cbiAgICBzZWxzOiBHcmFwaFNlbHMgPSB7fVxuXG5cbiAgICAvLyBPdGhlclxuICAgIF9jdXJyOiBWZWN0b3IyRCA9IHsgeDogMC4xLCB5OiAwLjIgfSAvLyAjc3RhdGVcbiAgICB0aWNrZXJcbiAgICB1cGRhdGVyOiBVcGRhdGVyXG5cbiAgICAvLyBTcGVjaWZ5IHRoZSBncmlkIGZvciB0aGUgY29udG91cnNcbiAgICBpZGVhbDogbnVtYmVyID0gMSAvLyAjc3RhdGVcblxuICAgIGNvbnN0cnVjdG9yKGQzcGFyZW50OiBEM1NlbCwgZXZlbnRIYW5kbGVyPzogU2ltcGxlRXZlbnRIYW5kbGVyLCBvcHRpb25zID0ge30pIHtcbiAgICAgICAgc3VwZXIoZDNwYXJlbnQsIGV2ZW50SGFuZGxlciwgb3B0aW9ucylcbiAgICAgICAgc3VwZXIuaW5pdFNWRyh0aGlzLm9wdGlvbnMpXG4gICAgICAgIHRoaXMuYmFzZS5jbGFzc2VkKHRoaXMuY3NzbmFtZSwgdHJ1ZSlcbiAgICAgICAgdGhpcy51cGRhdGVyID0gbmV3IFVwZGF0ZXIoKVxuICAgICAgICB0aGlzLmluaXRQbG90KClcbiAgICB9XG5cbiAgICBzZXRVcGRhdGVyKG5hbWU6ICdibG9jaycgfCAnZnVsbCcpIHtcbiAgICAgICAgY29uc3QgYXJncyA9IFt0aGlzLnEoKSwgdGhpcy5ldGEoKV1cblxuICAgICAgICBpZiAobmFtZSA9PSAnYmxvY2snKSB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZXIgPSBuZXcgQmxvY2tVcGRhdGVyKHRoaXMucSgpLCB0aGlzLmV0YSgpKVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKG5hbWUgPT0gJ2Z1bGwnKSB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZXIgPSBuZXcgVXBkYXRlcih0aGlzLnEoKSwgdGhpcy5ldGEoKSlcbiAgICAgICAgfVxuXG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJQbGVhc2UgZW50ZXIgYSB2YWxpZCBpbnB1dCBhcyB1cGRhdGVyXCIpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudXBkYXRlUXVpdmVycygpXG4gICAgfVxuXG4gICAgcGxvdE1pbmltdW0oKSB7XG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuICAgICAgICBjb25zdCBvcCA9IHRoaXMub3B0aW9ucztcbiAgICAgICAgY29uc3Qgc2NhbGVzID0gdGhpcy5zY2FsZXM7XG5cbiAgICAgICAgY29uc3QgbWFrZVggPSAobng6IG51bWJlcikgPT4gUi5yYW5nZSgwLCBueCkubWFwKGQzLnNjYWxlTGluZWFyKCkuZG9tYWluKFswLCBueF0pLnJhbmdlKFswLjAwMDAxLCBvcC54cmFuZ2VbMV1dKSlcbiAgICAgICAgY29uc3QgeUZ1bmMgPSB4ID0+IDEgLyB4O1xuICAgICAgICBjb25zdCB4dmFscyA9IG1ha2VYKDEwMClcbiAgICAgICAgY29uc3QgeXZhbHMgPSB4dmFscy5tYXAoeUZ1bmMpLy8ubWFwKHkgPT4gc2NhbGVzLnkoeSkpXG5cbiAgICAgICAgY29uc3QgZGF0YSA9IFIuemlwKHh2YWxzLm1hcChzY2FsZXMueCksIHl2YWxzLm1hcChzY2FsZXMueSkpXG4gICAgICAgIGNvbnN0IGxpbmVHZW4gPSBkMy5saW5lKClcbiAgICAgICAgY29uc3QgcGF0aERhdGEgPSBsaW5lR2VuKGRhdGEpXG5cbiAgICAgICAgY29uc3QgbWluaW11bUdyb3VwID0gdGhpcy5iYXNlLmFwcGVuZCgnZycpLmF0dHIoJ2lkJywgJ21pbmltdW0tZ3JvdXAnKVxuXG4gICAgICAgIGNvbnNvbGUubG9nKFwiUGF0aCBkYXRhOiBcIiwgcGF0aERhdGEpO1xuXG4gICAgICAgIG1pbmltdW1Hcm91cC5hcHBlbmQoJ3BhdGgnKVxuICAgICAgICAgICAgLmF0dHIoJ2QnLCBsaW5lR2VuKGRhdGEpKVxuICAgICAgICAgICAgLmNsYXNzZWQoJ21pbmltdW0nLCB0cnVlKVxuICAgICAgICAgICAgLnN0eWxlKCdzdHJva2Utd2lkdGgnLCAyLjUpXG4gICAgICAgICAgICAuc3R5bGUoJ3N0cm9rZScsICdibHVlJylcbiAgICAgICAgICAgIC5zdHlsZSgnZmlsbCcsIG51bGwpXG4gICAgfVxuXG4gICAgcGxvdENvbnRvdXJzKCkge1xuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICAgICAgY29uc3Qgb3AgPSB0aGlzLm9wdGlvbnM7XG4gICAgICAgIGNvbnN0IHNjYWxlcyA9IHRoaXMuc2NhbGVzO1xuXG4gICAgICAgIGNvbnN0IGNvbnRvdXJGdW5jID0gKHgsIHkpID0+IHRoaXMudXBkYXRlci5hYnNFcnIoeyB4OiB4LCB5OiB5IH0pXG4gICAgICAgIGNvbnN0IHZhbHMgPSBnZXRDb250b3VyVmFsdWVzKG9wLm4sIG9wLm0sIG9wLnhyYW5nZSwgb3AueXJhbmdlLCBjb250b3VyRnVuYylcbiAgICAgICAgbGV0IHRocmVzaG9sZHMgPSBkMy5yYW5nZShkMy5taW4odmFscyksIGQzLm1heCh2YWxzKSwgMC4yNSk7XG5cbiAgICAgICAgLy8gQmVjYXVzZSB0aGUgbWluaW11bSB2YWx1ZSBpcyBub3QgYSBjb250b3VyIGJ1dCBhIHZhbHVlLCB3ZSBuZWVkIHRvIGRvIHdoYXQgd2UgY2FuIHRvIGFwcHJvYWNoIHRoZSBtaW4uXG4gICAgICAgIGNvbnN0IHdlaWdodGVkID0gMC45MTtcbiAgICAgICAgY29uc3QgbmV3TWluID0gKHdlaWdodGVkICogdGhyZXNob2xkc1swXSArICgxIC0gd2VpZ2h0ZWQpICogdGhyZXNob2xkc1sxXSkgLyAyXG4gICAgICAgIHRocmVzaG9sZHMgPSBSLmluc2VydCgxLCBuZXdNaW4sIHRocmVzaG9sZHMpXG4gICAgICAgIC8vIGNvbnN0IG5ld01pbiA9IDA7XG5cbiAgICAgICAgc2NhbGVzLmNvbG9yID0gZDMuc2NhbGVMb2coKS5pbnRlcnBvbGF0ZSgoKSA9PiBkMy5pbnRlcnBvbGF0ZVlsR25CdSk7XG5cbiAgICAgICAgc2NhbGVzLmNvbnRvdXJzLnRocmVzaG9sZHModGhyZXNob2xkcylcblxuICAgICAgICBjb25zdCBjb250b3VyVmFscyA9IHNjYWxlcy5jb250b3Vycyh2YWxzKVxuICAgICAgICBjb25zdCBjb250b3VyR3JvdXAgPSB0aGlzLmJhc2UuYXBwZW5kKCdnJykuYXR0cignaWQnLCAnY29udG91ci1ncm91cCcpXG4gICAgICAgIGNvbnN0IGNvbnRvdXJzID0gY29udG91ckdyb3VwLnNlbGVjdEFsbChcInBhdGguY29udG91clwiKVxuICAgICAgICAgICAgLmRhdGEoY29udG91clZhbHMpXG5cbiAgICAgICAgY29udG91cnMuam9pbihcInBhdGhcIilcbiAgICAgICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJjb250b3VyXCIpXG4gICAgICAgICAgICAuYXR0cihcImRcIiwgZDMuZ2VvUGF0aChkMy5nZW9JZGVudGl0eSgpLnNjYWxlKG9wLndpZHRoIC8gb3AubikpKVxuICAgICAgICAgICAgLmF0dHIoXCJmaWxsXCIsIGQgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBzY2FsZXMuY29sb3IoZC52YWx1ZSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2xhc3NlZCgnbWFpbi1maXQnLCBkID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZC52YWx1ZSA9PSBuZXdNaW47XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNsYXNzZWQoJ25vdC1maXQnLCBkID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZC52YWx1ZSAhPSBuZXdNaW47XG4gICAgICAgICAgICB9KVxuICAgIH1cblxuICAgIGFkZENpcmNsZSh2OiBWZWN0b3IyRCwgcHJldjogVmVjdG9yMkQgPSBudWxsKSB7XG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuICAgICAgICBjb25zdCBzY2FsZXMgPSB0aGlzLnNjYWxlcztcbiAgICAgICAgY29uc3Qgc2VscyA9IHRoaXMuc2VscztcblxuICAgICAgICBpZiAocHJldiAhPSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLmJhc2UuYXBwZW5kKCdsaW5lJylcbiAgICAgICAgICAgICAgICAuYXR0cigneDEnLCBzY2FsZXMueChwcmV2LngpKVxuICAgICAgICAgICAgICAgIC5hdHRyKCd5MScsIHNjYWxlcy55KHByZXYueSkpXG4gICAgICAgICAgICAgICAgLmF0dHIoJ3gyJywgc2NhbGVzLngodi54KSlcbiAgICAgICAgICAgICAgICAuYXR0cigneTInLCBzY2FsZXMueSh2LnkpKVxuICAgICAgICAgICAgICAgIC5jbGFzc2VkKCdkZXNjZW5kaW5nLWxpbmUnLCB0cnVlKVxuICAgICAgICB9XG5cbiAgICAgICAgc2Vscy5jaXJjbGUgPSB0aGlzLmJhc2UuYXBwZW5kKCdjaXJjbGUnKVxuICAgICAgICAgICAgLmF0dHIoJ2N4Jywgc2NhbGVzLngodi54KSlcbiAgICAgICAgICAgIC5hdHRyKCdjeScsIHNjYWxlcy55KHYueSkpXG4gICAgICAgICAgICAuYXR0cigncicsIDIpXG4gICAgICAgICAgICAuY2xhc3NlZCgnZGVzY2VuZGluZy1wb2ludCcsIHRydWUpXG5cbiAgICAgICAgcmV0dXJuIHY7XG4gICAgfVxuXG4gICAgY2xlYXJDaXJjbGVzKCkge1xuICAgICAgICBkMy5zZWxlY3RBbGwoJy5kZXNjZW5kaW5nLXBvaW50JykucmVtb3ZlKClcbiAgICAgICAgZDMuc2VsZWN0QWxsKCcuZGVzY2VuZGluZy1saW5lJykucmVtb3ZlKClcbiAgICB9XG5cbiAgICBjbGVhclF1aXZlcnMoKSB7XG4gICAgICAgIGQzLnNlbGVjdEFsbCgnLnF1aXZlcicpLnJlbW92ZSgpXG4gICAgICAgIHRoaXMuc2Vscy5hcnJvd3MgPSBbXVxuICAgIH1cblxuICAgIHBsb3REZXNjZW50KCkge1xuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICAgICAgbGV0IHByZXZWYWwgPSBudWxsO1xuXG4gICAgICAgIGNvbnN0IHN1Yk9iaiA9IHtcbiAgICAgICAgICAgIG5leHQ6ICh2YWwpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmFkZENpcmNsZSh2YWwsIHByZXZWYWwpXG4gICAgICAgICAgICAgICAgcHJldlZhbCA9IHZhbFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVycjogKGVycikgPT4gY29uc29sZS5sb2coZXJyKSxcbiAgICAgICAgICAgIGNvbXBsZXRlOiAoKSA9PiBjb25zb2xlLmxvZyhcIkNPTVBMRVRFXCIpXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBwcmVwID0gKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5hZGRDaXJjbGUodGhpcy5jdXJyKCkpXG4gICAgICAgICAgICBwcmV2VmFsID0gdGhpcy5jdXJyKClcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMudGlja2VyID0gaW50ZXJ2YWwoMTApLnBpcGUoXG4gICAgICAgICAgICBzdGFydFdpdGgocHJlcCgpKSxcbiAgICAgICAgICAgIHNjYW4odiA9PiBzZWxmLnVwZGF0ZXIubmV4dCh2KSwgc2VsZi5jdXJyKCkpLFxuICAgICAgICAgICAgdGFrZSgxMDAwKVxuICAgICAgICApLnN1YnNjcmliZShzdWJPYmopXG4gICAgfVxuXG4gICAgaW50b1Zpcyh2OiBWZWN0b3IyRCkge1xuICAgICAgICByZXR1cm4geyB4OiB0aGlzLnNjYWxlcy54KHYueCksIHk6IHRoaXMuc2NhbGVzLnkodi55KSB9XG4gICAgfVxuXG4gICAgaW50b01hdGgodjogVmVjdG9yMkQpIHtcbiAgICAgICAgcmV0dXJuIHsgeDogdGhpcy5zY2FsZXMueC5pbnZlcnQodi54KSwgeTogdGhpcy5zY2FsZXMueS5pbnZlcnQodi55KSB9XG4gICAgfVxuXG4gICAgdXBkYXRlUXVpdmVycygpIHtcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgICAgIGNvbnN0IHNlbHMgPSB0aGlzLnNlbHM7XG4gICAgICAgIGNvbnN0IHNjYWxlcyA9IHRoaXMuc2NhbGVzO1xuXG4gICAgICAgIC8vIE1vZGlmeSBhcnJvd3MgaW5wbGFjZVxuICAgICAgICBzZWxzLmFycm93cy5mb3JFYWNoKGFycm93ID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHB0OiBWZWN0b3IyRCA9IHRoaXMuaW50b01hdGgoe1xuICAgICAgICAgICAgICAgIHg6ICthcnJvdy5hdHRyKCd4MScpLFxuICAgICAgICAgICAgICAgIHk6ICthcnJvdy5hdHRyKCd5MScpXG4gICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICBjb25zdCBwdDIgPSBzZWxmLnVwZGF0ZXIubmV4dExyKHB0KVxuICAgICAgICAgICAgYXJyb3cuYXR0cigneDInLCBzY2FsZXMueChwdDIueCkpXG4gICAgICAgICAgICAgICAgLmF0dHIoJ3kyJywgc2NhbGVzLnkocHQyLnkpKVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGNyZWF0ZVF1aXZlcnMoKSB7XG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuICAgICAgICBjb25zdCBvcCA9IHRoaXMub3B0aW9ucztcbiAgICAgICAgY29uc3Qgc2NhbGVzID0gdGhpcy5zY2FsZXM7XG4gICAgICAgIGNvbnN0IHNlbHMgPSB0aGlzLnNlbHM7XG5cbiAgICAgICAgY29uc3QgbnggPSA4LCBueSA9IDg7XG4gICAgICAgIGNvbnN0IHBvaW50cyA9IFNWRy5tZXNoZ3JpZChueCwgbnksIG9wLnhyYW5nZSwgb3AueXJhbmdlKVxuICAgICAgICBjb25zdCBjb2xvciA9IFwicmVkXCI7XG4gICAgICAgIGNvbnN0IHdpZHRoID0gMjtcblxuICAgICAgICBjb25zdCBxdWl2ZXJHcm91cCA9IHRoaXMuYmFzZS5hcHBlbmQoJ2cnKS5hdHRyKCdpZCcsICdxdWl2ZXItZ3JvdXAnKSAvLyBpbml0IHNob3VsZCBoYXZlIHRoZXNlIGdyb3VwcyBhbHJlYWR5IHNlbGVjdGVkXG4gICAgICAgIHRoaXMuY2xlYXJRdWl2ZXJzKClcblxuICAgICAgICBzZWxzLmFycm93cyA9IHBvaW50cy5tYXAocHQgPT4ge1xuICAgICAgICAgICAgY29uc3QgcHQyID0gc2VsZi51cGRhdGVyLm5leHRMcihwdClcbiAgICAgICAgICAgIGNvbnN0IGFycm93ID0gU1ZHLmluc2VydEFycm93KHF1aXZlckdyb3VwLCBzY2FsZXMueChwdC54KSwgc2NhbGVzLnkocHQueSksIHNjYWxlcy54KHB0Mi54KSwgc2NhbGVzLnkocHQyLnkpLCBjb2xvciwgd2lkdGgpXG4gICAgICAgICAgICBhcnJvdy5jbGFzc2VkKCdxdWl2ZXInLCB0cnVlKVxuICAgICAgICAgICAgcmV0dXJuIGFycm93XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgaW5pdFBsb3QoKSB7XG4gICAgICAgIC8vIEluaXRpYWxpemUgcGxvdHNcbiAgICAgICAgdGhpcy5wbG90Q29udG91cnMoKVxuICAgICAgICB0aGlzLmNyZWF0ZVF1aXZlcnMoKVxuICAgIH1cblxuICAgIGluaXQoKSB7XG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuICAgICAgICBjb25zdCBvcCA9IHRoaXMub3B0aW9ucztcbiAgICAgICAgY29uc3Qgc2NhbGVzID0gdGhpcy5zY2FsZXM7XG4gICAgICAgIGNvbnN0IHNlbHMgPSB0aGlzLnNlbHM7XG5cbiAgICAgICAgLy8gQWRkIGRlZmluaXRpb25zXG4gICAgICAgIFNWRy5hZGRBcnJvd3ModGhpcy5zdmcpXG5cbiAgICAgICAgLy8gQ3JlYXRlIHNjYWxlc1xuICAgICAgICBzY2FsZXMuY29udG91cnMgPSBkMy5jb250b3VycygpLnNpemUoW29wLm4sIG9wLm1dKVxuICAgICAgICBzY2FsZXMuY3VydmUgPSBkMy5jdXJ2ZUNhdG11bGxSb20uYWxwaGEoMC41KVxuICAgICAgICBzY2FsZXMueCA9IGQzLnNjYWxlTGluZWFyKCkuZG9tYWluKG9wLnhyYW5nZSkucmFuZ2UoWzAsIG9wLndpZHRoXSlcbiAgICAgICAgc2NhbGVzLnkgPSBkMy5zY2FsZUxpbmVhcigpLmRvbWFpbihvcC55cmFuZ2UpLnJhbmdlKFtvcC5oZWlnaHQsIDBdKVxuXG4gICAgICAgIC8vIEFkZCBBeGVzIGFuZCBsYWJlbHNcbiAgICAgICAgc2Vscy54YXhpcyA9IHRoaXMuYmFzZS5hcHBlbmQoXCJnXCIpXG4gICAgICAgICAgICAuYXR0cihcImNsYXNzXCIsIFwiYXhpcyBheGlzLS14XCIpXG4gICAgICAgICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBTVkcudHJhbnNsYXRlKDAsIG9wLmhlaWdodCkpXG4gICAgICAgICAgICAuY2FsbChkMy5heGlzQm90dG9tKHNjYWxlcy54KS50aWNrcygzLCBcInNcIikpO1xuXG4gICAgICAgIHNlbHMueWF4aXMgPSB0aGlzLmJhc2UuYXBwZW5kKFwiZ1wiKVxuICAgICAgICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcImF4aXMgYXhpcy0teVwiKVxuICAgICAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgU1ZHLnRyYW5zbGF0ZSgwLCAwKSlcbiAgICAgICAgICAgIC5jYWxsKGQzLmF4aXNMZWZ0KHNjYWxlcy55KS50aWNrcygzLCBcInNcIikpO1xuXG4gICAgICAgIHNlbHMueGxhYmVsID0gdGhpcy5iYXNlLmFwcGVuZChcInRleHRcIilcbiAgICAgICAgICAgIC50ZXh0KFwidzBcIilcbiAgICAgICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJ0aXRsZXNcIilcbiAgICAgICAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIFNWRy50cmFuc2xhdGUob3Aud2lkdGggLyAyLCBvcC5oZWlnaHQgKyBvcC5wYWQpKVxuXG4gICAgICAgIHNlbHMueWxhYmVsID0gdGhpcy5iYXNlLmFwcGVuZChcInRleHRcIilcbiAgICAgICAgICAgIC50ZXh0KFwidzFcIilcbiAgICAgICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJ0aXRsZXNcIilcbiAgICAgICAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIFNWRy50cmFuc2xhdGUoLW9wLnBhZCwgb3AuaGVpZ2h0IC8gMikgKyBTVkcucm90YXRlKC05MCkpXG5cbiAgICAgICAgLy8gQ3JlYXRlIGNsaWNrIGJlaGF2aW9yXG4gICAgICAgIHRoaXMuYmFzZS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAoc2VsZi50aWNrZXIgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgc2VsZi50aWNrZXIudW5zdWJzY3JpYmUoKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgY29vcmRzID0gZDMubW91c2UodGhpcyk7XG4gICAgICAgICAgICBzZWxmLmN1cnIoeyB4OiBzY2FsZXMueC5pbnZlcnQoY29vcmRzWzBdKSwgeTogc2NhbGVzLnkuaW52ZXJ0KGNvb3Jkc1sxXSkgfSlcbiAgICAgICAgICAgIHNlbGYuYWRkQ2lyY2xlKHNlbGYuY3VycigpKVxuICAgICAgICAgICAgc2VsZi5jbGVhckNpcmNsZXMoKTtcbiAgICAgICAgICAgIHNlbGYucGxvdERlc2NlbnQoKTtcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBjdXJyKCk6IFZlY3RvcjJEXG4gICAgY3Vycih2YWw6IFZlY3RvcjJEKTogdGhpc1xuICAgIGN1cnIodmFsPykge1xuICAgICAgICBpZiAodmFsID09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9jdXJyXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9jdXJyID0gdmFsO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBkYXRhKCk6IG51bWJlcltdXG4gICAgZGF0YSh2YWw6IG51bWJlcltdKTogdGhpc1xuICAgIGRhdGEodmFsPykge1xuICAgICAgICBpZiAodmFsID09IG51bGwpIHJldHVybiB0aGlzLl9kYXRhXG4gICAgICAgIHRoaXMuX2RhdGEgPSB2YWxcbiAgICAgICAgcmV0dXJuIHRoaXNcbiAgICB9XG5cbiAgICBxKCk6IG51bWJlclxuICAgIHEodmFsOiBudW1iZXIpOiB0aGlzXG4gICAgcSh2YWw/KSB7XG4gICAgICAgIGlmICh2YWwgPT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMudXBkYXRlci5xO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy51cGRhdGVyLnEgPSB2YWxcbiAgICAgICAgdGhpcy51cGRhdGVRdWl2ZXJzKClcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgZXRhKCk6IG51bWJlclxuICAgIGV0YSh2YWw6IG51bWJlcik6IHRoaXNcbiAgICBldGEodmFsPykge1xuICAgICAgICBpZiAodmFsID09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnVwZGF0ZXIuZXRhO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy51cGRhdGVyLmV0YSA9IHZhbFxuICAgICAgICB0aGlzLnVwZGF0ZVF1aXZlcnMoKVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG59IiwiaW1wb3J0ICogYXMgZDMgZnJvbSAnZDMnXG5pbXBvcnQgeyBNYW51YWxVcGRhdGVyIH0gZnJvbSBcIi4vTWFudWFsVXBkYXRlclwiXG5pbXBvcnQgeyBWZWN0b3IyRCB9IGZyb20gXCIuLi91dGlsL3R5cGVzXCJcbmltcG9ydCAqIGFzIFIgZnJvbSAncmFtZGEnXG5pbXBvcnQgeyBTdWJqZWN0LCBCZWhhdmlvclN1YmplY3QgfSBmcm9tIFwicnhqc1wiXG5cbmV4cG9ydCB0eXBlIEJhbGxIaXN0b3J5ID0ge1xuICAgIGNsYXNzbmFtZTogc3RyaW5nXG4gICAgeDogbnVtYmVyXG4gICAgbG9zczogbnVtYmVyXG59XG5cbmV4cG9ydCBjbGFzcyBHb2xmQmFsbCB7XG4gICAgX3g6IG51bWJlclxuICAgIHVwZGF0ZXI6IE1hbnVhbFVwZGF0ZXJcbiAgICBjbGFzc25hbWU6IHN0cmluZ1xuICAgIHN0cmVhbTogU3ViamVjdDxCYWxsSGlzdG9yeT4gLy8gUHVzaGVzIGhpc3Rvcnkgb2YgeCB2YWx1ZXMgdG8gdGhpc1xuXG4gICAgY29uc3RydWN0b3IodXBkYXRlcjogTWFudWFsVXBkYXRlciwgY2xhc3NuYW1lOiBzdHJpbmcsIHggPSAwKSB7XG4gICAgICAgIHRoaXMudXBkYXRlciA9IHVwZGF0ZXJcbiAgICAgICAgdGhpcy5feCA9IHhcbiAgICAgICAgdGhpcy5jbGFzc25hbWUgPSBjbGFzc25hbWVcbiAgICAgICAgdGhpcy5zdHJlYW0gPSBuZXcgU3ViamVjdCgpXG4gICAgfVxuXG4gICAgZ2V0IHgoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl94XG4gICAgfVxuXG4gICAgc2V0IHgodjogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuX3ggPSB2XG4gICAgfVxuXG4gICAgbmV4dFgoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudXBkYXRlci5uZXh0KHRoaXMuX3gpXG4gICAgfVxuXG4gICAgbmV4dCgpOiBHb2xmQmFsbCB7XG4gICAgICAgIGNvbnN0IG5leHRYID0gdGhpcy5uZXh0WCgpXG4gICAgICAgIHJldHVybiBuZXcgR29sZkJhbGwodGhpcy51cGRhdGVyLCB0aGlzLmNsYXNzbmFtZSwgdGhpcy5uZXh0WCgpKVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFVzZSB0aGUgdXBkYXRlciB0byB0YWtlIHRoZSBuZXh0IHN0ZXBcbiAgICAgKiBcbiAgICAgKiBAcGFyYW0gZm9yY2VYIEZvcmNlIHRoZSBuZXh0WCB0byBiZSBvZiB0aGlzIHZhbHVlXG4gICAgICovXG4gICAgc3RlcF8oZm9yY2VYOm51bWJlcnxudWxsPW51bGwpOiB0aGlzIHtcbiAgICAgICAgaWYgKGZvcmNlWCAhPSBudWxsKSB0aGlzLnggPSBmb3JjZVhcbiAgICAgICAgZWxzZSB0aGlzLnggPSB0aGlzLm5leHRYKClcblxuICAgICAgICB0aGlzLnN0cmVhbS5uZXh0KHtcbiAgICAgICAgICAgIGNsYXNzbmFtZTogdGhpcy5jbGFzc25hbWUsXG4gICAgICAgICAgICB4OiB0aGlzLngsXG4gICAgICAgICAgICBsb3NzOiB0aGlzLnVwZGF0ZXIubG9zcyh0aGlzLngpXG4gICAgICAgIH0pXG4gICAgICAgIHJldHVybiB0aGlzXG4gICAgfVxuXG4gICAgdG9WZWMoZjogKHg6IG51bWJlcikgPT4gbnVtYmVyKTogVmVjdG9yMkQge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgeDogdGhpcy5feCxcbiAgICAgICAgICAgIHk6IGYodGhpcy5feClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHEoKTogbnVtYmVyXG4gICAgcSh2YWw6IG51bWJlcik6IHRoaXNcbiAgICBxKHZhbD8pIHtcbiAgICAgICAgaWYgKHZhbCA9PSBudWxsKSByZXR1cm4gdGhpcy51cGRhdGVyLnFcbiAgICAgICAgdGhpcy51cGRhdGVyLnEgPSB2YWxcbiAgICAgICAgcmV0dXJuIHRoaXNcbiAgICB9XG5cbiAgICBldGEoKTogbnVtYmVyXG4gICAgZXRhKHZhbDogbnVtYmVyKTogdGhpc1xuICAgIGV0YSh2YWw/KSB7XG4gICAgICAgIGlmICh2YWwgPT0gbnVsbCkgcmV0dXJuIHRoaXMudXBkYXRlci5ldGFcbiAgICAgICAgdGhpcy51cGRhdGVyLmV0YSA9IHZhbFxuICAgICAgICByZXR1cm4gdGhpc1xuICAgIH1cbn0iLCJpbXBvcnQgKiBhcyBkMyBmcm9tICdkMydcbmltcG9ydCB7IEQzU2VsLCBsaW5zcGFjZSB9IGZyb20gJy4uL3V0aWwveGQzJ1xuaW1wb3J0ICogYXMgUiBmcm9tICdyYW1kYSdcbmltcG9ydCB7IFZlY3RvcjJEIH0gZnJvbSAnLi4vdXRpbC90eXBlcydcbmltcG9ydCB7IFNWR09wdGlvbnMsIFNWR1Zpc0NvbXBvbmVudCB9IGZyb20gJy4uL3V0aWwvU1ZHVmlzQ29tcG9uZW50J1xuaW1wb3J0IHsgU2ltcGxlRXZlbnRIYW5kbGVyIH0gZnJvbSAnLi4vdXRpbC9TaW1wbGVFdmVudEhhbmRsZXInO1xuaW1wb3J0IHsgU1ZHIH0gZnJvbSAnLi4vdXRpbC9TVkdwbHVzJ1xuaW1wb3J0IHsgaW50ZXJ2YWwsIGZyb21FdmVudCB9IGZyb20gJ3J4anMnXG5pbXBvcnQgeyB0YWtlLCBzY2FuIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnXG5pbXBvcnQgeyBNYW51YWxVcGRhdGVyIH0gZnJvbSAnLi9NYW51YWxVcGRhdGVyJ1xuaW1wb3J0IHsgR29sZkJhbGwgfSBmcm9tICcuL0dvbGZCYWxsJ1xuaW1wb3J0IHsgbGFuZHNjYXBlcywgTGFuZHNjYXBlLCBiYXNlTG9zcywgZ2V0UGxvdEZ1bmMgfSBmcm9tIFwiLi4vR29sZkxhbmRzY2FwZXNcIjtcblxuXG50eXBlIFQgPSBHb2xmQmFsbFtdXG5cbmludGVyZmFjZSBHcmFwaE9wdGlvbnMgZXh0ZW5kcyBTVkdPcHRpb25zIHtcbiAgICBwYWQ6IG51bWJlclxuICAgIG1heEl0ZXI6IG51bWJlciAvLyBIb3cgbWFueSBpdGVyYXRpb25zIHRvIHRha2U/XG4gICAgbGFuZHNjYXBlOiBMYW5kc2NhcGVcbn1cblxuaW50ZXJmYWNlIFNjYWxlWFkge1xuICAgIHg6IGQzLlNjYWxlTGluZWFyPG51bWJlcixudW1iZXI+XG4gICAgeTogZDMuU2NhbGVMaW5lYXI8bnVtYmVyLG51bWJlcj5cbn1cblxuaW50ZXJmYWNlIEdyYXBoU2NhbGVzIHtcbiAgICBiYXNlMm1hdGg/OiBTY2FsZVhZLFxuICAgIGJhc2UycHg/OiBTY2FsZVhZLFxuICAgIG1hdGgycHg/OiBTY2FsZVhZLFxuICAgIHBhdGhzPzogZDMuTGluZTxudW1iZXI+W10sXG4gICAgY29sb3I/OiBkMy5TY2FsZVNlcXVlbnRpYWw8bnVtYmVyPixcbn1cblxuaW50ZXJmYWNlIEdyYXBoU2VscyB7XG4gICAgeGF4aXM/OiBEM1NlbFxuICAgIHlheGlzPzogRDNTZWxcbiAgICB4bGFiZWw/OiBEM1NlbFxuICAgIGxpbmU/OiBEM1NlbFxuICAgIGJhY2tkcm9wPzogRDNTZWxcbiAgICBiYWxsPzogRDNTZWxcbiAgICBtYXNrPzogRDNTZWxcbiAgICBtYXNrTGluZT86IEQzU2VsXG4gICAgbWFza0JhY2tncm91bmQ/OiBEM1NlbFxuICAgIGxpbmVCYWNrZ3JvdW5kPzogRDNTZWxcbn1cblxubGV0IENMRUFSRUQgPSAwO1xuLy8gLy8gTm90ZSB0aGF0IHBsb3RGdW5jIGlzIHRoZSBsb3NzIGZ1bmN0aW9uIHdlIHBsb3QgYW5kIGZ1bmMgaXMgdGhlIGNvbXBvbmVudCBvZiB0aGUgbG9zcyBmdW5jdGlvbiBuZWVkZWQgZm9yIHRoZSB1cGRhdGVyXG4vLyAvLyBleHBvcnQgY29uc3QgZnVuYyA9IHggPT4gTWF0aC50YW5oKHgpXG4vLyAvLyBleHBvcnQgY29uc3QgZEZ1bmMgPSB4ID0+IE1hdGgucG93KE1hdGguY29zaCh4KSwgLTIpXG4vLyBleHBvcnQgY29uc3QgZnVuYyA9IHggPT4gTWF0aC50YW5oKHggLSAxMSkgLyA0ICsgTWF0aC50YW5oKHggLSA2KSAvIDQgKyBNYXRoLnRhbmgoeCkgKyBNYXRoLnRhbmgoeCArIDYpIC8gNCArIE1hdGgudGFuaCh4ICsgMTEpIC8gNFxuLy8gZXhwb3J0IGNvbnN0IGRGdW5jID0geCA9PiBNYXRoLnBvdyhNYXRoLmNvc2goeCAtIDExKSwgLTIpIC8gNCArIE1hdGgucG93KE1hdGguY29zaCh4IC0gNiksIC0yKSAvIDQgKyBNYXRoLnBvdyhNYXRoLmNvc2goeCksIC0yKSArIE1hdGgucG93KE1hdGguY29zaCh4ICsgNiksIC0yKSAvIDQgKyBNYXRoLnBvdyhNYXRoLmNvc2goeCArIDExKSwgLTIpIC8gNFxuLy8gLy8gZXhwb3J0IGNvbnN0IGZ1bmMgPSB4ID0+IE1hdGguc2lnbih4KSAqICgxIC0gKDEgLyAoMSArIE1hdGguYWJzKHgpKSkpXG4vLyAvLyBleHBvcnQgY29uc3QgZEZ1bmMgPSB4ID0+IDEgLyBNYXRoLnBvdygxICsgTWF0aC5hYnMoeCksIDIpXG5cbi8vIGV4cG9ydCBjb25zdCBwbG90RnVuYyA9IHggPT4gYmFzZUxvc3MoZnVuYyh4KSlcblxuZXhwb3J0IGNsYXNzIEdvbGZIb2xlMUQgZXh0ZW5kcyBTVkdWaXNDb21wb25lbnQ8VD4ge1xuICAgIGNzc25hbWUgPSBcImdvbGYtaG9sZS1jaGFydFwiXG4gICAgbWFza0lkOiBzdHJpbmdcblxuICAgIF9kYXRhOiBUXG5cbiAgICBvcHRpb25zOiBHcmFwaE9wdGlvbnMgPSB7XG4gICAgICAgIG1heFdpZHRoOiA0MDAsXG4gICAgICAgIG1heEhlaWdodDogMjAwLFxuICAgICAgICBtYXJnaW46IHsgdG9wOiAxMCwgcmlnaHQ6IDEwLCBib3R0b206IDQwLCBsZWZ0OiA1MCB9LFxuICAgICAgICBwYWQ6IDMwLFxuICAgICAgICBtYXhJdGVyOiA2MDAsXG4gICAgICAgIGxhbmRzY2FwZTogbGFuZHNjYXBlcy5ob2xlXG4gICAgfVxuXG4gICAgc2NhbGVzOiBHcmFwaFNjYWxlcyA9IHt9XG5cbiAgICBzZWxzOiBHcmFwaFNlbHMgPSB7fVxuXG4gICAgY29uc3RydWN0b3IoZDNwYXJlbnQ6IEQzU2VsLCBldmVudEhhbmRsZXI/OiBTaW1wbGVFdmVudEhhbmRsZXIsIG9wdGlvbnMgPSB7fSwgSUQgPSAwKSB7XG4gICAgICAgIHN1cGVyKGQzcGFyZW50LCBldmVudEhhbmRsZXIsIG9wdGlvbnMsIElEKVxuICAgICAgICB0aGlzLm1hc2tJZCA9IGBsaW5lLW1hc2stJHt0aGlzLklEfWBcbiAgICAgICAgc3VwZXIuaW5pdFNWRyhvcHRpb25zLCBbXCJiZ1wiXSlcbiAgICAgICAgdGhpcy5iYXNlLmNsYXNzZWQodGhpcy5jc3NuYW1lLCB0cnVlKVxuXG4gICAgICAgIC8vIGNvbnN0IGRhdGEgPSBbXG4gICAgICAgIC8vICAgICBuZXcgR29sZkJhbGwobmV3IE1hbnVhbFVwZGF0ZXIoZnVuYywgZEZ1bmMsIDAsIDAuNSksICdnb2xmLWJhbGwtc2dkJywgNCksXG4gICAgICAgIC8vICAgICBuZXcgR29sZkJhbGwobmV3IE1hbnVhbFVwZGF0ZXIoZnVuYywgZEZ1bmMsIDAuNSwgMC4wNyksICdnb2xmLWJhbGwtc25nZCcsIDMpLFxuICAgICAgICAvLyAgICAgbmV3IEdvbGZCYWxsKG5ldyBNYW51YWxVcGRhdGVyKGZ1bmMsIGRGdW5jLCAxLCAwLjAxKSwgJ2dvbGYtYmFsbC1uZ2QnLCA1KVxuICAgICAgICAvLyBdXG4gICAgICAgIGNvbnN0IHogPSB0aGlzLm9wdGlvbnMubGFuZHNjYXBlXG4gICAgICAgIGNvbnN0IGRhdGEgPSBbXG4gICAgICAgICAgICBuZXcgR29sZkJhbGwobmV3IE1hbnVhbFVwZGF0ZXIoei5mLCB6LmRmLCAwLCAwLjkpLCAnZ29sZi1iYWxsLXNnZCcsIDQpLFxuICAgICAgICAgICAgbmV3IEdvbGZCYWxsKG5ldyBNYW51YWxVcGRhdGVyKHouZiwgei5kZiwgMC41LCAwLjEpLCAnZ29sZi1iYWxsLXNuZ2QnLCAzKSxcbiAgICAgICAgICAgIG5ldyBHb2xmQmFsbChuZXcgTWFudWFsVXBkYXRlcih6LmYsIHouZGYsIDEsIDAuMDAzKSwgJ2dvbGYtYmFsbC1uZ2QnLCA1KVxuICAgICAgICBdXG5cbiAgICAgICAgdGhpcy5kYXRhKGRhdGEpXG4gICAgICAgIHRoaXMuaW5pdEJhbGxzKClcbiAgICB9XG5cbiAgICBsYW5kc2NhcGUoKTogTGFuZHNjYXBlXG4gICAgbGFuZHNjYXBlKHZhbDogTGFuZHNjYXBlKTogdGhpc1xuICAgIGxhbmRzY2FwZSh2YWw/KSB7XG4gICAgICAgIGlmICh2YWwgPT0gbnVsbCkgcmV0dXJuIHRoaXMub3B0aW9ucy5sYW5kc2NhcGVcbiAgICAgICAgY29uc3Qgb3AgPSB0aGlzLm9wdGlvbnNcbiAgICAgICAgb3AubGFuZHNjYXBlID0gdmFsXG5cbiAgICAgICAgLy8gVXBkYXRlIHhyYW5nZSBhbmQgeXJhbmdlXG4gICAgICAgIHRoaXMudXBkYXRlU2NhbGVzKG9wKVxuICAgICAgICB0aGlzLnVwZGF0ZUF4ZXModGhpcy5zY2FsZXMsIG9wKVxuXG4gICAgICAgIC8vIFVwZGF0ZSBkYXRhXG4gICAgICAgIHRoaXMuZGF0YSgpLmZvckVhY2goYiA9PiB7XG4gICAgICAgICAgICBiLnVwZGF0ZXIuZiA9IHZhbC5mXG4gICAgICAgICAgICBiLnVwZGF0ZXIuZGYgPSB2YWwuZGZcbiAgICAgICAgfSlcblxuICAgICAgICB0aGlzLmNsZWFyQ3VydmUoKVxuICAgICAgICB0aGlzLnBsb3RDdXJ2ZSgpXG5cbiAgICAgICAgcmV0dXJuIHRoaXNcbiAgICB9XG5cbiAgICAvKiogUmV0dXJuIGZpcnN0IHVwZGF0ZXIgaW4gZGF0YSAqL1xuICAgIGdldCBkYXRhSGVhZCgpOiBHb2xmQmFsbCB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5kYXRhKClbMF1cbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkxvb2tzIGxpa2UgdGhlcmUgaXMgbm8gZGF0YSBpbiB0aGlzIGdvbGYgaG9sZVwiKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBQdXQgYSB2ZWN0b3IgaW50byB0aGUgY29vcmRpbmF0ZSBzeXN0ZW0gdXNlZCBieSB0aGUgdmlzdWFsaXphdGlvblxuICAgICAqIFxuICAgICAqIEBwYXJhbSB2IFZlY3RvciBcbiAgICAgKi9cbiAgICBpbnRvVmlzKHY6IFZlY3RvcjJEKSB7XG4gICAgICAgIHJldHVybiB7IHg6IHRoaXMuc2NhbGVzLm1hdGgycHgueCh2LngpLCB5OiB0aGlzLnNjYWxlcy5tYXRoMnB4Lnkodi55KSB9XG4gICAgfVxuXG4gICAgLy8gVGFrZSBhIHZlY3RvciBpbiB0aGUgY29vcmRpbmF0ZSBzeXN0ZW0gYW5kIHJldHVybiBpdCB0byB0aGUgbWF0aCBjb29yZGluYXRlc1xuICAgIGludG9NYXRoKHY6IFZlY3RvcjJEKSB7XG4gICAgICAgIHJldHVybiB7IHg6IHRoaXMuc2NhbGVzLm1hdGgycHgueC5pbnZlcnQodi54KSwgeTogdGhpcy5zY2FsZXMubWF0aDJweC55LmludmVydCh2LnkpIH1cbiAgICB9XG5cbiAgICAvLyBUdXJuIGEgbnVtYmVyIGludG8gYSB2ZWN0b3JcbiAgICBudW0ydmVjKHg6IG51bWJlcik6IFZlY3RvcjJEIHtcbiAgICAgICAgY29uc3Qgb3AgPSB0aGlzLm9wdGlvbnNcbiAgICAgICAgcmV0dXJuIHsgeDogeCwgeTogb3AubGFuZHNjYXBlLmxvc3MoeCkgfVxuICAgIH1cblxuICAgIC8vIFR1cm4gYSBiYWxsIGludG8gYSB2ZWN0b3IgaW4gdGhlIHZpc3VhbGl6YXRpb24gY29vcmRpbmF0ZSBzeXN0ZW1cbiAgICBiYWxsMnZpcyhiOiBHb2xmQmFsbCkge1xuICAgICAgICByZXR1cm4gdGhpcy5pbnRvVmlzKGIudG9WZWMoZ2V0UGxvdEZ1bmModGhpcy5vcHRpb25zLmxhbmRzY2FwZSkpKVxuICAgIH1cblxuICAgIC8vIFBsb3QgYSBiYWxsIG9uIHRoZSBjaGFydFxuICAgIHBsb3RCYWxsKGI6IEdvbGZCYWxsKSB7XG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuXG4gICAgICAgIGNvbnN0IHRvQ2xhc3MgPSBuYW1lID0+ICcuJyArIG5hbWVcbiAgICAgICAgY29uc3QgY2xzU2VsID0gdG9DbGFzcyhiLmNsYXNzbmFtZSlcblxuICAgICAgICBjb25zdCBiYWxsID0gdGhpcy5iYWxsMnZpcyhiKVxuICAgICAgICBzZWxmLnNlbHMuYmFsbCA9IHNlbGYuYmFzZS5zZWxlY3RBbGwoY2xzU2VsKVxuICAgICAgICAgICAgLmRhdGEoW2JhbGxdKVxuICAgICAgICAgICAgLmpvaW4oJ2NpcmNsZScpXG4gICAgICAgICAgICAuY2xhc3NlZCgnZ29sZi1iYWxsJywgdHJ1ZSlcbiAgICAgICAgICAgIC5jbGFzc2VkKGIuY2xhc3NuYW1lLCB0cnVlKVxuICAgICAgICAgICAgLmF0dHIoXCJjeFwiLCBkID0+IGQueClcbiAgICAgICAgICAgIC5hdHRyKFwiY3lcIiwgZCA9PiBkLnkpXG4gICAgICAgICAgICAuYXR0cihcInJcIiwgXCI1cHhcIilcbiAgICB9XG5cbiAgICBjbGVhckN1cnZlKCkge1xuICAgICAgICB0aGlzLmxheWVycy5iZy5zZWxlY3RBbGwoJy5saW5lJykucmVtb3ZlKClcbiAgICAgICAgdGhpcy5zZWxzLm1hc2tMaW5lLmh0bWwoJycpXG4gICAgICAgIHRoaXMuYmFzZS5zZWxlY3RBbGwoJyNsaW5lLWJhY2tncm91bmQnKS5odG1sKCcnKVxuICAgIH1cblxuICAgIHBsb3RDdXJ2ZUJ5RGVmYXVsdCh4czogbnVtYmVyW10pIHtcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXMsIHNjYWxlcyA9IHRoaXMuc2NhbGVzLCBzZWxzID0gdGhpcy5zZWxzO1xuXG4gICAgICAgIHNjYWxlcy5wYXRocy5mb3JFYWNoKGxpbmUgPT4ge1xuICAgICAgICAgICAgdGhpcy5sYXllcnMuYmcuYXBwZW5kKFwicGF0aFwiKVxuICAgICAgICAgICAgICAgIC5kYXR1bSh4cylcbiAgICAgICAgICAgICAgICAuYXR0cihcImNsYXNzXCIsIFwibGluZVwiKVxuICAgICAgICAgICAgICAgIC5hdHRyKFwiZFwiLCBkID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGxpbmUoZClcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIHBsb3RDdXJ2ZUJ5R3JhZGllbnQoeHM6IG51bWJlcltdKSB7XG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzLCBzY2FsZXMgPSB0aGlzLnNjYWxlcywgc2VscyA9IHRoaXMuc2Vscywgb3AgPSB0aGlzLm9wdGlvbnM7XG5cbiAgICAgICAgY29uc3QgeHdpZHRoID0gb3Aud2lkdGggKiAoeHNbMV0gLSB4c1swXSkgLyAoZDMubWF4KHhzKSAtIGQzLm1pbih4cykpIC8vIEFzc3VtZXMgbGVuZ3RoIG9mIHhzID4gMVxuXG4gICAgICAgIGNvbnN0IGJhbGxVcGRhdGVyID0gc2VsZi5kYXRhKClbMF0udXBkYXRlclxuXG4gICAgICAgIC8vIENsZWFyIG1hc2tcbiAgICAgICAgY29uc3QgbGluZSA9IHNjYWxlcy5wYXRoc1swXVxuXG4gICAgICAgIHNlbHMubWFza0xpbmUuYXR0cignZCcsIGxpbmUoeHMpKVxuXG4gICAgICAgIGNvbnN0IGNvbG9yU2NhbGUgPSBkMy5zY2FsZVNlcXVlbnRpYWwoZDMuaW50ZXJwb2xhdGVQbGFzbWEpXG4gICAgICAgIFxuICAgICAgICAvLyBDaGVjayB0aGUgZ3JhZGllbnQgcmFuZ2VcbiAgICAgICAgY29uc3QgdXBkYXRlQW10cyA9IHhzLm1hcCh4ID0+IE1hdGgubG9nKE1hdGguYWJzKGJhbGxVcGRhdGVyLnVwZGF0ZU1vZGlmaWVyKHgpKSkpXG5cbiAgICAgICAgY29uc3QgY2xhbXBlZFNjYWxlID0gUi5jdXJyeSgobWluOm51bWJlciwgbWF4Om51bWJlciwgYXJyOm51bWJlcltdKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBjbGFtcGVyID0gUi5jbGFtcChtaW4sIG1heClcbiAgICAgICAgICAgIGNvbnN0IGNsYW1wZWRBcnIgPSBSLm1hcChjbGFtcGVyLCBhcnIpXG4gICAgICAgICAgICByZXR1cm4gYXJyLm1hcCh4ID0+IHggLSBkMy5tZWFuKGNsYW1wZWRBcnIpKVxuICAgICAgICAgICAgLy8gcmV0dXJuIGNsYW1wZWRBcnIubWFwKHggPT4geCAtIGQzLm1lYW4oY2xhbXBlZEFycikpXG4gICAgICAgIH0pXG5cbiAgICAgICAgLy8gY29uc3QgY2xhbXBlciA9IGNsYW1wZWRTY2FsZSgtMiwgMik7XG4gICAgICAgIC8vIGNvbnN0IGRhdGEgPSBkMy56aXAoeHMsIGNsYW1wZXIodXBkYXRlQW10cykpLm1hcChkID0+IHtyZXR1cm4ge3g6IGRbMF0sIHVwZGF0ZUFtdDogZFsxXX19KVxuICAgICAgICBjb25zdCBkYXRhID0gZDMuemlwKHhzLCB1cGRhdGVBbXRzKS5tYXAoZCA9PiB7cmV0dXJuIHt4OiBkWzBdLCB1cGRhdGVBbXQ6IGRbMV19fSlcbiAgICAgICAgLy8gY29uc3QgZXh0ZW50ID0gZDMuZXh0ZW50KGNsYW1wZXIodXBkYXRlQW10cykpXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiRXh0ZW50OiBcIiwgZXh0ZW50KTtcblxuXG4gICAgICAgIC8vQHRzLWlnbm9yZVxuICAgICAgICBjb25zdCBjc2NhbGUgPSBkMy5zY2FsZUxpbmVhcigpLmRvbWFpbihbLTIsIDAsIDJdKS5yYW5nZShbXCIjNjdhOWNmXCIsIFwiI2Y3ZjdmN1wiLCBcIiNlZjhhNjJcIl0pXG5cbiAgICAgICAgc2Vscy5saW5lQmFja2dyb3VuZC5zZWxlY3RBbGwoJy5ncmFkLWJveCcpXG4gICAgICAgICAgICAuZGF0YShkYXRhKVxuICAgICAgICAgICAgLmpvaW4oJ3JlY3QnKVxuICAgICAgICAgICAgLmNsYXNzZWQoJ2dyYWQtYm94JywgdHJ1ZSlcbiAgICAgICAgICAgIC5hdHRyKCdoZWlnaHQnLCBvcC5oZWlnaHQpXG4gICAgICAgICAgICAuYXR0cignd2lkdGgnLCBzZWxmLnNjYWxlcy5tYXRoMnB4LngoeHdpZHRoKSlcbiAgICAgICAgICAgIC5hdHRyKCd4JywgZCA9PiBzZWxmLnNjYWxlcy5tYXRoMnB4LngoZC54KSlcbiAgICAgICAgICAgIC5hdHRyKCd5JywgMClcbiAgICAgICAgICAgIC5hdHRyKCdmaWxsJywgZCA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNzY2FsZShkLnVwZGF0ZUFtdClcbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgc2Vscy5saW5lQmFja2dyb3VuZC5hdHRyKCdtYXNrJywgYHVybCgjJHt0aGlzLm1hc2tJZH0pYClcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBQbG90IHRoZSB2YWx1ZXMgb2YgYWxsIHggYWNjb3JkaW5nIHRvIHRoZSBmdW5jdGlvblxuICAgICAqIFxuICAgICAqIEBwYXJhbSB4IEEgbGluc3BhY2Ugb2YgeCB2YWx1ZXMgb3ZlciB3aGljaCB0byBwbG90IGEgY3VydmVcbiAgICAgKi9cbiAgICBwbG90Q3VydmUoKSB7XG4gICAgICAgIGNvbnN0IG9wID0gdGhpcy5vcHRpb25zXG4gICAgICAgIGNvbnN0IHhzID0gbGluc3BhY2Uob3AubGFuZHNjYXBlLnhyYW5nZVswXSwgb3AubGFuZHNjYXBlLnhyYW5nZVsxXSwgMTAwMClcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXMsIHNjYWxlcyA9IHRoaXMuc2NhbGVzLCBzZWxzID0gdGhpcy5zZWxzO1xuXG4gICAgICAgIGlmIChzZWxmLmRhdGEoKSAhPSBudWxsKSB7XG4gICAgICAgICAgICBpZiAoc2VsZi5kYXRhKCkubGVuZ3RoID4gMSkgc2VsZi5wbG90Q3VydmVCeURlZmF1bHQoeHMpXG4gICAgICAgICAgICBlbHNlIHNlbGYucGxvdEN1cnZlQnlHcmFkaWVudCh4cylcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHVwZGF0ZVNjYWxlcyhvcDogR3JhcGhPcHRpb25zKSB7XG4gICAgICAgIGNvbnN0IHNjYWxlcyA9IHRoaXMuc2NhbGVzXG5cbiAgICAgICAgY29uc3QgeGJhc2VSYW5nZSA9IFstMSwgMV1cbiAgICAgICAgY29uc3QgeWJhc2VSYW5nZSA9IFsxLCAwXVxuXG4gICAgICAgIGNvbnN0IHhweFJhbmdlID0gWzAsIG9wLndpZHRoXVxuICAgICAgICBjb25zdCB5cHhSYW5nZSA9IFtvcC5oZWlnaHQsIDBdXG5cbiAgICAgICAgc2NhbGVzLmJhc2UybWF0aCA9IHtcbiAgICAgICAgICAgIHg6IGQzLnNjYWxlTGluZWFyKCkuZG9tYWluKHhiYXNlUmFuZ2UpLnJhbmdlKG9wLmxhbmRzY2FwZS54cmFuZ2UpLFxuICAgICAgICAgICAgeTogZDMuc2NhbGVMaW5lYXIoKS5kb21haW4oeWJhc2VSYW5nZSkucmFuZ2Uob3AubGFuZHNjYXBlLnlyYW5nZSlcbiAgICAgICAgfVxuICAgICAgICBzY2FsZXMuYmFzZTJweCA9IHtcbiAgICAgICAgICAgIHg6IGQzLnNjYWxlTGluZWFyKCkuZG9tYWluKHhiYXNlUmFuZ2UpLnJhbmdlKHhweFJhbmdlKSxcbiAgICAgICAgICAgIHk6IGQzLnNjYWxlTGluZWFyKCkuZG9tYWluKHliYXNlUmFuZ2UpLnJhbmdlKHlweFJhbmdlKVxuICAgICAgICB9XG4gICAgICAgIHNjYWxlcy5tYXRoMnB4ID0ge1xuICAgICAgICAgICAgeDogZDMuc2NhbGVMaW5lYXIoKS5kb21haW4ob3AubGFuZHNjYXBlLnhyYW5nZSkucmFuZ2UoeHB4UmFuZ2UpLFxuICAgICAgICAgICAgeTogZDMuc2NhbGVMaW5lYXIoKS5kb21haW4ob3AubGFuZHNjYXBlLnlyYW5nZSkucmFuZ2UoeXB4UmFuZ2UpXG4gICAgICAgIH1cblxuICAgICAgICBzY2FsZXMucGF0aHMgPSB0aGlzLm5ld1BhdGhzKG9wLmxhbmRzY2FwZSlcbiAgICB9XG5cbiAgICB1cGRhdGVBeGVzKHNjYWxlczogR3JhcGhTY2FsZXMsIG9wOiBHcmFwaE9wdGlvbnMpIHtcbiAgICAgICAgY29uc3Qgc2VscyA9IHRoaXMuc2Vsc1xuICAgICAgICBzZWxzLnhheGlzLmNhbGwoZDMuYXhpc0JvdHRvbShzY2FsZXMubWF0aDJweC54KS50aWNrVmFsdWVzKFswXSkudGlja0Zvcm1hdCh4ID0+ICcwJykpXG4gICAgfVxuXG4gICAgaW5pdCgpIHtcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgICAgIGNvbnN0IG9wID0gdGhpcy5vcHRpb25zO1xuICAgICAgICBjb25zdCBzY2FsZXMgPSB0aGlzLnNjYWxlcztcbiAgICAgICAgY29uc3Qgc2VscyA9IHRoaXMuc2VscztcblxuICAgICAgICB0aGlzLnVwZGF0ZVNjYWxlcyhvcClcblxuICAgICAgICBzZWxzLnhheGlzID0gdGhpcy5iYXNlLmFwcGVuZChcImdcIilcbiAgICAgICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJheGlzIGF4aXMtLXhcIilcbiAgICAgICAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIFNWRy50cmFuc2xhdGUoMCwgb3AuaGVpZ2h0KSlcblxuICAgICAgICBzZWxzLnhsYWJlbCA9IHRoaXMuYmFzZS5hcHBlbmQoXCJ0ZXh0XCIpXG4gICAgICAgICAgICAudGV4dChcIlxcdTAzQjggLSBcXHUwM0I4KlwiKVxuICAgICAgICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcInRpdGxlc1wiKVxuICAgICAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgU1ZHLnRyYW5zbGF0ZShvcC53aWR0aCAvIDIsIG9wLmhlaWdodCArIG9wLnBhZCkpXG5cbiAgICAgICAgLy8gQWRkIGJhc2UgbWFza1xuICAgICAgICBzZWxzLm1hc2sgPSB0aGlzLmJhc2UuYXBwZW5kKCdtYXNrJykuYXR0cignaWQnLCB0aGlzLm1hc2tJZClcblxuICAgICAgICBzZWxzLm1hc2tCYWNrZ3JvdW5kID0gc2Vscy5tYXNrLmFwcGVuZCgncmVjdCcpXG4gICAgICAgICAgICAuYXR0cignd2lkdGgnLCBvcC53aWR0aClcbiAgICAgICAgICAgIC5hdHRyKCdoZWlnaHQnLCBvcC5oZWlnaHQpXG4gICAgICAgICAgICAuYXR0cignZmlsbCcsICdibGFjaycpXG5cbiAgICAgICAgc2Vscy5tYXNrTGluZSA9IHNlbHMubWFzay5cbiAgICAgICAgICAgIHNlbGVjdEFsbChcIiN0cmFuc3BhcmVudC1saW5lXCIpLlxuICAgICAgICAgICAgZGF0YShbMV0pXG4gICAgICAgICAgICAuam9pbigncGF0aCcpXG4gICAgICAgICAgICAuYXR0cignaWQnLCAndHJhbnNwYXJlbnQtbGluZScpXG4gICAgICAgICAgICAuYXR0cignc3Ryb2tlJywgJ3doaXRlJylcbiAgICAgICAgICAgIC5hdHRyKCdzdHJva2Utd2lkdGgnLCAnNXB4JylcblxuICAgICAgICBzZWxzLmxpbmVCYWNrZ3JvdW5kID0gc2VsZi5iYXNlLnNlbGVjdEFsbCgnI2xpbmUtYmFja2dyb3VuZCcpXG4gICAgICAgICAgICAuZGF0YShbMV0pXG4gICAgICAgICAgICAuam9pbignZycpXG4gICAgICAgICAgICAuYXR0cignaWQnLCAnbGluZS1iYWNrZ3JvdW5kJylcblxuICAgICAgICB0aGlzLnVwZGF0ZUF4ZXMoc2NhbGVzLCBvcClcblxuICAgICAgICBzY2FsZXMucGF0aHMgPSB0aGlzLm5ld1BhdGhzKG9wLmxhbmRzY2FwZSlcblxuICAgICAgICB0aGlzLnBsb3RDdXJ2ZSgpXG4gICAgfVxuXG4gICAgbmV3UGF0aHMobGFuZHNjYXBlOiBMYW5kc2NhcGUpIHtcbiAgICAgICAgY29uc3Qgc2NhbGVzID0gdGhpcy5zY2FsZXNcbiAgICAgICAgY29uc3QgYmFzZUxpbmUgPSBkMy5saW5lPG51bWJlcj4oKVxuICAgICAgICAgICAgLngoKGQ6IG51bWJlciwgaTogbnVtYmVyKSA9PiBzY2FsZXMubWF0aDJweC54KGQpKVxuICAgICAgICAgICAgLnkoKGQ6IG51bWJlciwgaTogbnVtYmVyKSA9PiBzY2FsZXMubWF0aDJweC55KGdldFBsb3RGdW5jKGxhbmRzY2FwZSkoZCkpKVxuICAgICAgICAgICAgLmN1cnZlKGQzLmN1cnZlTGluZWFyKVxuXG4gICAgICAgIHJldHVybiBbYmFzZUxpbmVdXG4gICAgfVxuXG4gICAgaW5pdEJhbGxzKCkge1xuICAgICAgICBjb25zdCBzZWxmID0gdGhpcywgb3AgPSB0aGlzLm9wdGlvbnM7XG5cbiAgICAgICAgLy8gQ3JlYXRlIEJhY2tkcm9wIGZvciBtb3VzZSBpbnRlcmZhY2VzXG4gICAgICAgIHRoaXMuc2Vscy5iYWNrZHJvcCA9IHRoaXMubGF5ZXJzLmJnLmFwcGVuZChcImdcIilcbiAgICAgICAgICAgIC5hdHRyKFwiaWRcIiwgXCJiYWNrZHJvcFwiKVxuICAgICAgICAgICAgLmNsYXNzZWQoJ2dyYXNzJywgdHJ1ZSlcbiAgICAgICAgICAgIC5hcHBlbmQoXCJyZWN0XCIpXG4gICAgICAgICAgICAuYXR0cihcImhlaWdodFwiLCBvcC5oZWlnaHQpXG4gICAgICAgICAgICAuYXR0cihcIndpZHRoXCIsIG9wLndpZHRoKVxuXG4gICAgICAgIGNvbnN0IHRvb1NtYWxsID0gKHg6IG51bWJlcikgPT4geCA8IChvcC5sYW5kc2NhcGUueHJhbmdlWzBdKVxuICAgICAgICBjb25zdCB0b29CaWcgPSAoeDogbnVtYmVyKSA9PiB4ID4gKG9wLmxhbmRzY2FwZS54cmFuZ2VbMV0pXG5cbiAgICAgICAgY29uc3Qgb3V0T2ZCb3VuZHMgPSAoeDogbnVtYmVyKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gKGlzTmFOKHgpIHx8IHRvb1NtYWxsKHgpIHx8IHRvb0JpZyh4KSlcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGZpeE91dE9mQm91bmRzID0gKHg6IG51bWJlcikgPT4ge1xuICAgICAgICAgICAgbGV0IG91dDogbnVtYmVyXG5cbiAgICAgICAgICAgIGlmIChpc05hTih4KSkgb3V0ID0gb3AubGFuZHNjYXBlLnhyYW5nZVswXVxuICAgICAgICAgICAgZWxzZSBpZiAodG9vU21hbGwoeCkpIG91dCA9IG9wLmxhbmRzY2FwZS54cmFuZ2VbMF1cbiAgICAgICAgICAgIGVsc2UgaWYgKHRvb0JpZyh4KSkgb3V0ID0gb3AubGFuZHNjYXBlLnhyYW5nZVsxXVxuICAgICAgICAgICAgZWxzZSBvdXQgPSB4XG5cbiAgICAgICAgICAgIHJldHVybiBvdXRcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIGdldE5leHRCYWxsKGI6IEdvbGZCYWxsKTogR29sZkJhbGwge1xuICAgICAgICAgICAgY29uc3QgbmV4dFggPSBiLm5leHRYKClcbiAgICAgICAgICAgIGNvbnN0IGN1cnJCYWxsU2VsID0gc2VsZi5iYXNlLnNlbGVjdChgLiR7Yi5jbGFzc25hbWV9YClcbiAgICAgICAgICAgIGNvbnN0IGZvcmNlWCA9IGZpeE91dE9mQm91bmRzKG5leHRYKVxuICAgICAgICAgICAgaWYgKCFjdXJyQmFsbFNlbC5jbGFzc2VkKCdkZWFkLWJhbGwnKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBiLnN0ZXBfKGZvcmNlWClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBiXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBzdWJPYmogPSB7XG4gICAgICAgICAgICBuZXh0OiBnYnMgPT4ge1xuICAgICAgICAgICAgICAgIGdicy5mb3JFYWNoKGIgPT4gc2VsZi5wbG90QmFsbChiKSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlcnJvcjogYiA9PiBjb25zb2xlLmxvZyhcIkVSUk9SOiBcIiwgYiksXG4gICAgICAgICAgICBjb21wbGV0ZTogKCkgPT4gY29uc29sZS5sb2coXCJDT01QTEVURVwiKSxcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHRpY2tlciA9ICgpID0+IGludGVydmFsKDEwKS5waXBlKFxuICAgICAgICAgICAgc2NhbigoYWNjOiBUKSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gVW5zdWJzY3JpYmVyIHRpY2tlciBpZiBhbGwgYmFsbHMgZGVhZFxuICAgICAgICAgICAgICAgIGlmIChSLmFsbCgoYjogR29sZkJhbGwpID0+IGQzLnNlbGVjdChgLiR7Yi5jbGFzc25hbWV9YCkuY2xhc3NlZCgnZGVhZC1iYWxsJyksIHNlbGYuZGF0YSgpKSkge1xuICAgICAgICAgICAgICAgICAgICBydW5uaW5nVGlja2VyLnVuc3Vic2NyaWJlKClcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBzZWxmLmRhdGEoKS5mb3JFYWNoKGIgPT4gZ2V0TmV4dEJhbGwoYikpXG4gICAgICAgICAgICAgICAgcmV0dXJuIHNlbGYuZGF0YSgpXG4gICAgICAgICAgICB9LCBzZWxmLmRhdGEoKSksXG4gICAgICAgICAgICB0YWtlKG9wLm1heEl0ZXIpXG4gICAgICAgICkuc3Vic2NyaWJlKHN1Yk9iailcblxuICAgICAgICAvLyBSdW5uaW5nIHRpY2tlciBzdGFydHMgYXMgYW4gZW1wdHkgc3Vic2NyaXB0aW9uIG9iamVjdCwgaXMgbGF0ZXIgcmVwbGFjZWQgYnkgdGhlIHJ1bm5pbmcgdGlja2VyXG4gICAgICAgIGxldCBydW5uaW5nVGlja2VyID0ge1xuICAgICAgICAgICAgdW5zdWJzY3JpYmU6ICgpID0+IGNvbnNvbGUubG9nKFwiRW1wdHkgVGlja2VyIVwiKVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcGxvdEJhbGxzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcnVubmluZ1RpY2tlci51bnN1YnNjcmliZSgpXG4gICAgICAgICAgICBjb25zdCBjbGljayA9IHRvVmVjKGQzLm1vdXNlKHRoaXMpKVxuICAgICAgICAgICAgZDMuc2VsZWN0QWxsKCcuZ29sZi1iYWxsJykuY2xhc3NlZCgnZGVhZC1iYWxsJywgZmFsc2UpXG4gICAgICAgICAgICBzZWxmLmRhdGEoKS5mb3JFYWNoKChiLCBpKSA9PiBiLnggPSBzZWxmLmludG9NYXRoKGNsaWNrKS54KVxuICAgICAgICAgICAgc2VsZi5kYXRhKCkuZm9yRWFjaChiID0+IHNlbGYucGxvdEJhbGwoYikpXG4gICAgICAgICAgICBzZWxmLmV2ZW50SGFuZGxlci50cmlnZ2VyKFwibG9zcy1jbGlja1wiLCB7fSlcblxuICAgICAgICAgICAgcnVubmluZ1RpY2tlciA9IHRpY2tlcigpXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnNlbHMuYmFja2Ryb3Aub24oJ2NsaWNrJywgcGxvdEJhbGxzKVxuICAgICAgICAvLyB0aGlzLnNlbHMubWFzay5vbignY2xpY2snLCBwbG90QmFsbHMpXG4gICAgICAgIHRoaXMuc2Vscy5saW5lQmFja2dyb3VuZC5vbignY2xpY2snLCBwbG90QmFsbHMpXG4gICAgfVxuXG4gICAgcSgpOiBudW1iZXJcbiAgICBxKHZhbDogbnVtYmVyKTogdGhpc1xuICAgIHEodmFsPykge1xuICAgICAgICBpZiAodmFsID09IG51bGwpIHJldHVybiB0aGlzLmRhdGFIZWFkLnVwZGF0ZXIucVxuICAgICAgICB0aGlzLmRhdGFIZWFkLnEodmFsKVxuICAgICAgICB0aGlzLnBsb3RDdXJ2ZSgpXG4gICAgICAgIHJldHVybiB0aGlzXG4gICAgfVxuXG4gICAgZXRhKCk6IG51bWJlclxuICAgIGV0YSh2YWw6IG51bWJlcik6IHRoaXNcbiAgICBldGEodmFsPykge1xuICAgICAgICBpZiAodmFsID09IG51bGwpIHJldHVybiB0aGlzLmRhdGFIZWFkLnVwZGF0ZXIucVxuICAgICAgICB0aGlzLmRhdGFIZWFkLmV0YSh2YWwpXG4gICAgICAgIC8vIHRoaXMucGxvdEN1cnZlKClcbiAgICAgICAgcmV0dXJuIHRoaXNcbiAgICB9XG5cbiAgICBkYXRhKCk6IFRcbiAgICBkYXRhKHZhbDogVCk6IHRoaXNcbiAgICBkYXRhKHZhbD8pIHtcbiAgICAgICAgaWYgKHZhbCA9PSBudWxsKSByZXR1cm4gdGhpcy5fZGF0YVxuICAgICAgICB0aGlzLl9kYXRhID0gdmFsO1xuICAgICAgICByZXR1cm4gdGhpc1xuICAgIH1cbn1cblxuZnVuY3Rpb24gdG9WZWMoW3gsIHldOiBbbnVtYmVyLCBudW1iZXJdKTogVmVjdG9yMkQge1xuICAgIHJldHVybiB7IHg6IHgsIHk6IHkgfVxufSIsImltcG9ydCAqIGFzIGQzIGZyb20gJ2QzJ1xuaW1wb3J0ICogYXMgUiBmcm9tICdyYW1kYSdcblxuaW1wb3J0IHsgQ2hhcnQyRCwgQ2hhcnRPcHRpb25zLCBDaGFydFNjYWxlcyB9IGZyb20gJy4uL3V0aWwvQ2hhcnQyZFZpc0NvbXBvbmVudCdcbmltcG9ydCB7IFNpbXBsZUV2ZW50SGFuZGxlciB9IGZyb20gJy4uL3V0aWwvU2ltcGxlRXZlbnRIYW5kbGVyJ1xuaW1wb3J0IHsgRDNTZWwgfSBmcm9tICcuLi91dGlsL3hkMydcbmltcG9ydCB7IFNWRyB9IGZyb20gJy4uL3V0aWwvU1ZHcGx1cydcblxuaW1wb3J0IHsgQmFsbEhpc3RvcnkgfSBmcm9tICcuL0dvbGZCYWxsJ1xuXG5jb25zdCBheGlzT2Zmc2V0ID0gMSAvLyBVc2UgdGhpcyB0byBjb3ZlciB0aGUgcGxvdHRlZCBsaW5lc1xuXG5pbnRlcmZhY2UgR3JhcGhTZWxzIHtcbiAgICB4YXhpcz86IEQzU2VsXG4gICAgeWF4aXM/OiBEM1NlbFxuICAgIHhsYWJlbD86IEQzU2VsXG4gICAgbGluZT86IEQzU2VsXG4gICAgYmFja2Ryb3A/OiBEM1NlbFxuICAgIGJhbGw/OiBEM1NlbFxufVxuXG50eXBlIFRyYWNrZXIgPSB7XG4gICAgc2VsOiBEM1NlbCxcbiAgICB2YWxzOiBudW1iZXJbXVxufVxuXG50eXBlIExpbmVUcmFja2VyID0ge1xuICAgIChrZXk6IHN0cmluZyk6IFRyYWNrZXJcbn1cblxudHlwZSBUID0gTGluZVRyYWNrZXJcblxuXG5leHBvcnQgY2xhc3MgR29sZkxvc3NlcyBleHRlbmRzIENoYXJ0MkQ8VD4ge1xuICAgIGNzc25hbWUgPSBcImxpbmUtcGxvdFwiXG5cbiAgICBfZGF0YTogVFxuXG4gICAgb3B0aW9uczogQ2hhcnRPcHRpb25zID0ge1xuICAgICAgICBtYXhXaWR0aDogMzUwLFxuICAgICAgICBtYXhIZWlnaHQ6IDI1MCxcbiAgICAgICAgbWFyZ2luOiB7IHRvcDogMTAsIHJpZ2h0OiAxMCwgYm90dG9tOiAzMCwgbGVmdDogMzAgfSxcbiAgICAgICAgcGFkOiB7IHRvcDogNSwgcmlnaHQ6IDEsIGJvdHRvbTogMTAsIGxlZnQ6IDE1IH0sXG4gICAgICAgIHhyYW5nZTogWzAsIDYwMF0sXG4gICAgICAgIHlyYW5nZTogWzIsIDFlLTJdLFxuICAgIH1cblxuICAgIHNjYWxlczogQ2hhcnRTY2FsZXMgPSB7fVxuXG4gICAgc2VsczogR3JhcGhTZWxzID0ge31cblxuICAgIHBhdGg6IGQzLkxpbmU8bnVtYmVyPlxuXG4gICAgY29uc3RydWN0b3IoZDNwYXJlbnQ6IEQzU2VsLCBldmVudEhhbmRsZXI/OiBTaW1wbGVFdmVudEhhbmRsZXIsIG9wdGlvbnMgPSB7fSkge1xuICAgICAgICBzdXBlcihkM3BhcmVudCwgZXZlbnRIYW5kbGVyLCBvcHRpb25zKVxuICAgICAgICBzdXBlci5pbml0U1ZHKHRoaXMub3B0aW9ucywgW1wiYmdcIl0pXG4gICAgICAgIHRoaXMuYmFzZS5jbGFzc2VkKHRoaXMuY3NzbmFtZSwgdHJ1ZSlcbiAgICAgICAgdGhpcy5kYXRhKDxMaW5lVHJhY2tlcj57fSlcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBQbG90IHRoZSB2YWx1ZXMgb2YgYWxsIHggYWNjb3JkaW5nIHRvIHRoZSBmdW5jdGlvblxuICAgICAqIFxuICAgICAqIEBwYXJhbSB4IEEgbGluc3BhY2Ugb2YgeCB2YWx1ZXMgb3ZlciB3aGljaCB0byBwbG90IGEgY3VydmVcbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgYWRkRGF0YUtleV8oY2xhc3NuYW1lOiBzdHJpbmcpIHtcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXNcbiAgICAgICAgaWYgKCFSLmhhcyhjbGFzc25hbWUsIHRoaXMuZGF0YSgpKSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coYEFkZGluZyBrZXk6ICR7Y2xhc3NuYW1lfWApO1xuICAgICAgICAgICAgdGhpcy5kYXRhKClbY2xhc3NuYW1lXSA9IHtcbiAgICAgICAgICAgICAgICBzZWw6IHNlbGYuaW5pdEJhc2VMaW5lKGNsYXNzbmFtZSksXG4gICAgICAgICAgICAgICAgdmFsczogW11cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIExpdmUgdXBkYXRlIHRoZSB4cmFuZ2VcbiAgICB1cGRhdGVTY2FsZXMoeHJhbmdlKSB7XG4gICAgICAgIGNvbnN0IG9wID0gdGhpcy5vcHRpb25zXG4gICAgICAgIHRoaXMuc2NhbGVzLnggPSBkMy5zY2FsZUxpbmVhcigpLmRvbWFpbih4cmFuZ2UpLnJhbmdlKFswLCBvcC53aWR0aF0pLmNsYW1wKHRydWUpXG4gICAgfVxuXG4gICAgY2xlYXJQYXRocygpIHtcbiAgICAgICAgdGhpcy5kYXRhKFIubWFwKGQgPT4gUi5hc3NvYygndmFscycsIFtdLCBkKSwgdGhpcy5kYXRhKCkpKVxuICAgIH1cblxuICAgIHBsb3RQYXRoKGQ6IEJhbGxIaXN0b3J5KSB7XG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuICAgICAgICB0aGlzLmFkZERhdGFLZXlfKGQuY2xhc3NuYW1lKTtcblxuICAgICAgICBjb25zdCBjdXJyVmFscyA9IHRoaXMuZGF0YSgpW2QuY2xhc3NuYW1lXTtcbiAgICAgICAgY3VyclZhbHMudmFscy5wdXNoKGQubG9zcylcblxuICAgICAgICAvLyBzbGlkaW5nIHgtYXhpc1xuICAgICAgICBjb25zdCBuZXdYcmFuZ2UgPSBbTWF0aC5tYXgoMCwgY3VyclZhbHMudmFscy5sZW5ndGgtdGhpcy5vcHRpb25zLnhyYW5nZVsxXSksIE1hdGgubWF4KGN1cnJWYWxzLnZhbHMubGVuZ3RoLHRoaXMub3B0aW9ucy54cmFuZ2VbMV0pXVxuICAgICAgICAvLyBjb25zdCBuZXdYcmFuZ2UgPSBbMCwgY3VyclZhbHMudmFscy5sZW5ndGhdXG4gICAgICAgIHRoaXMudXBkYXRlU2NhbGVzKG5ld1hyYW5nZSlcbiAgICAgICAgdGhpcy5jcmVhdGVQYXRoKClcblxuICAgICAgICBjdXJyVmFscy5zZWwuZGF0YShbY3VyclZhbHNdKVxuICAgICAgICAgICAgLmpvaW4oXCJwYXRoXCIpXG4gICAgICAgICAgICAuY2xhc3NlZChkLmNsYXNzbmFtZSwgdHJ1ZSlcbiAgICAgICAgICAgIC5hdHRyKFwiZFwiLCBkID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gc2VsZi5wYXRoKGQudmFscylcbiAgICAgICAgICAgIH0pXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBpbml0QmFzZUxpbmUoY2xhc3NuYW1lOiBzdHJpbmcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubGF5ZXJzLmJnLmFwcGVuZChcInBhdGhcIilcbiAgICAgICAgICAgIC5jbGFzc2VkKGNsYXNzbmFtZSwgdHJ1ZSlcbiAgICAgICAgICAgIC5jbGFzc2VkKCdsaW5lJywgdHJ1ZSlcbiAgICB9XG5cbiAgICBpbml0KCkge1xuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICAgICAgY29uc3Qgb3AgPSB0aGlzLm9wdGlvbnM7XG4gICAgICAgIGNvbnN0IHNjYWxlcyA9IHRoaXMuc2NhbGVzO1xuICAgICAgICBjb25zdCBzZWxzID0gdGhpcy5zZWxzO1xuXG4gICAgICAgIHRoaXMuY3JlYXRlU2NhbGVzKClcbiAgICAgICAgdGhpcy5jcmVhdGVQYXRoKClcbiAgICAgICAgdGhpcy5jcmVhdGVBeGVzKClcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgY3JlYXRlU2NhbGVzKCkge1xuICAgICAgICBjb25zdCBzY2FsZXMgPSB0aGlzLnNjYWxlc1xuICAgICAgICBjb25zdCBvcCA9IHRoaXMub3B0aW9uc1xuXG4gICAgICAgIHNjYWxlcy54ID0gZDMuc2NhbGVMaW5lYXIoKS5kb21haW4ob3AueHJhbmdlKS5yYW5nZShbMCwgb3Aud2lkdGhdKS5jbGFtcCh0cnVlKVxuICAgICAgICBzY2FsZXMueSA9IGQzLnNjYWxlTG9nKCkuZG9tYWluKG9wLnlyYW5nZSkucmFuZ2UoWzAsIG9wLmhlaWdodF0pLmNsYW1wKHRydWUpXG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGNyZWF0ZUF4ZXMoKSB7XG4gICAgICAgIGNvbnN0IHNlbHMgPSB0aGlzLnNlbHNcbiAgICAgICAgY29uc3Qgc2NhbGVzID0gdGhpcy5zY2FsZXNcbiAgICAgICAgY29uc3Qgb3AgPSB0aGlzLm9wdGlvbnNcblxuICAgICAgICAvLyBDcmVhdGUgYXhlc1xuICAgICAgICBzZWxzLnlheGlzID0gdGhpcy5iYXNlLmFwcGVuZChcImdcIilcbiAgICAgICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJheGlzIGF4aXMtLXlcIilcbiAgICAgICAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIFNWRy50cmFuc2xhdGUoMCwgLSBheGlzT2Zmc2V0KSlcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgIC5jYWxsKGQzLmF4aXNMZWZ0KHNjYWxlcy55KS50aWNrRm9ybWF0KFwiXCIpLnRpY2tzKDQpKTtcblxuICAgICAgICBzZWxzLnhheGlzID0gdGhpcy5iYXNlLmFwcGVuZChcImdcIilcbiAgICAgICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJheGlzIGF4aXMtLXhcIilcbiAgICAgICAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIFNWRy50cmFuc2xhdGUoMCwgb3AuaGVpZ2h0IC0gYXhpc09mZnNldCkpXG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICAuY2FsbChkMy5heGlzQm90dG9tKHNjYWxlcy54KS50aWNrRm9ybWF0KFwiXCIpLnRpY2tzKDQpKTtcblxuICAgICAgICAvLyBBZGQgeGxhYmVsXG4gICAgICAgIHRoaXMuYmFzZS5hcHBlbmQoXCJ0ZXh0XCIpXG4gICAgICAgICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBTVkcudHJhbnNsYXRlKG9wLndpZHRoIC8gMiwgb3AubWFyZ2luLnRvcCArIG9wLmhlaWdodCArIDEwKSlcbiAgICAgICAgICAgIC5zdHlsZShcInRleHQtYW5jaG9yXCIsIFwibWlkZGxlXCIpXG4gICAgICAgICAgICAudGV4dChcIlRpbWVcIilcblxuICAgICAgICAvLyBBZGQgeWxhYmVsXG4gICAgICAgIHRoaXMuYmFzZS5hcHBlbmQoXCJ0ZXh0XCIpXG4gICAgICAgICAgICAuc3R5bGUoXCJ0ZXh0LWFuY2hvclwiLCBcIm1pZGRsZVwiKVxuICAgICAgICAgICAgLnRleHQoXCJMb3NzXCIpXG4gICAgICAgICAgICAuYXR0cihcInlcIiwgb3AucGFkLmxlZnQgLSBvcC5tYXJnaW4ubGVmdClcbiAgICAgICAgICAgIC5hdHRyKFwieFwiLCBvcC5wYWQudG9wIC0gKG9wLmhlaWdodCAvIDIpKVxuICAgICAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgU1ZHLnJvdGF0ZSgtOTApKVxuICAgICAgICAvLyAuYXR0cihcInRyYW5zZm9ybVwiLCBTVkcudHJhbnNsYXRlKG9wLm1hcmdpbi5sZWZ0LCBvcC5oZWlnaHQvMikpXG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGNyZWF0ZVBhdGgoKSB7XG4gICAgICAgIHRoaXMucGF0aCA9IGQzLmxpbmU8bnVtYmVyPigpXG4gICAgICAgICAgICAueCgoZDogbnVtYmVyLCBpOiBudW1iZXIpID0+IHRoaXMuc2NhbGVzLngoaSkpXG4gICAgICAgICAgICAueSgoZDogbnVtYmVyLCBpOiBudW1iZXIpID0+IHRoaXMuc2NhbGVzLnkoZCkpXG4gICAgICAgICAgICAuY3VydmUoZDMuY3VydmVMaW5lYXIpXG4gICAgfVxuXG4gICAgZGF0YSgpOiBUXG4gICAgZGF0YSh2YWw6IFQpOiB0aGlzXG4gICAgZGF0YSh2YWw/KSB7XG4gICAgICAgIGlmICh2YWwgPT0gbnVsbCkgcmV0dXJuIHRoaXMuX2RhdGFcbiAgICAgICAgdGhpcy5fZGF0YSA9IHZhbDtcbiAgICAgICAgcmV0dXJuIHRoaXNcbiAgICB9XG59IiwiaW1wb3J0ICogYXMgZDMgZnJvbSAnZDMnXG5pbXBvcnQgKiBhcyBSIGZyb20gJ3JhbWRhJ1xuXG5pbXBvcnQgeyBDaGFydDJELCBDaGFydE9wdGlvbnMsIENoYXJ0U2NhbGVzIH0gZnJvbSAnLi4vdXRpbC9DaGFydDJkVmlzQ29tcG9uZW50J1xuaW1wb3J0IHsgU2ltcGxlRXZlbnRIYW5kbGVyIH0gZnJvbSAnLi4vdXRpbC9TaW1wbGVFdmVudEhhbmRsZXInXG5pbXBvcnQgeyBEM1NlbCB9IGZyb20gJy4uL3V0aWwveGQzJ1xuaW1wb3J0IHsgU1ZHIH0gZnJvbSAnLi4vdXRpbC9TVkdwbHVzJ1xuaW1wb3J0IHsgQmFsbEhpc3RvcnkgfSBmcm9tICcuL0dvbGZCYWxsJ1xuXG5jb25zdCBheGlzT2Zmc2V0ID0gMSAvLyBVc2UgdGhpcyB0byBjb3ZlciB0aGUgcGxvdHRlZCBsaW5lc1xuXG5pbnRlcmZhY2UgR3JhcGhTZWxzIHtcbiAgICB4YXhpcz86IEQzU2VsXG4gICAgeWF4aXM/OiBEM1NlbFxuICAgIHhsYWJlbD86IEQzU2VsXG4gICAgbGluZT86IEQzU2VsXG4gICAgYmFja2Ryb3A/OiBEM1NlbFxuICAgIGJhbGw/OiBEM1NlbFxufVxuXG50eXBlIFRyYWNrZXIgPSB7XG4gICAgc2VsOiBEM1NlbCxcbiAgICB2YWxzOiBudW1iZXJbXVxufVxuXG50eXBlIExpbmVUcmFja2VyID0ge1xuICAgIChrZXk6IHN0cmluZyk6IFRyYWNrZXJcbn1cblxudHlwZSBUID0gTGluZVRyYWNrZXJcblxuZXhwb3J0IGNsYXNzIEdvbGZYRGlzdCBleHRlbmRzIENoYXJ0MkQ8VD4ge1xuICAgIGNzc25hbWUgPSBcImxpbmUtcGxvdFwiXG5cbiAgICBfZGF0YTogVFxuXG4gICAgb3B0aW9uczogQ2hhcnRPcHRpb25zID0ge1xuICAgICAgICBtYXhXaWR0aDogMzUwLFxuICAgICAgICBtYXhIZWlnaHQ6IDI1MCxcbiAgICAgICAgbWFyZ2luOiB7IHRvcDogMTAsIHJpZ2h0OiAxMCwgYm90dG9tOiAzMCwgbGVmdDogMzAgfSxcbiAgICAgICAgcGFkOiB7IHRvcDogNSwgcmlnaHQ6IDEsIGJvdHRvbTogMTAsIGxlZnQ6IDE1IH0sXG4gICAgICAgIHhyYW5nZTogWzAsIDYwMF0sXG4gICAgICAgIHlyYW5nZTogWzEsIDBdLFxuICAgIH1cblxuICAgIHNjYWxlczogQ2hhcnRTY2FsZXMgPSB7fVxuXG4gICAgc2VsczogR3JhcGhTZWxzID0ge31cblxuICAgIHBhdGg6IGQzLkxpbmU8bnVtYmVyPlxuXG4gICAgY29uc3RydWN0b3IoZDNwYXJlbnQ6IEQzU2VsLCBldmVudEhhbmRsZXI/OiBTaW1wbGVFdmVudEhhbmRsZXIsIG9wdGlvbnMgPSB7fSkge1xuICAgICAgICBzdXBlcihkM3BhcmVudCwgZXZlbnRIYW5kbGVyLCBvcHRpb25zKVxuICAgICAgICBzdXBlci5pbml0U1ZHKHRoaXMub3B0aW9ucywgW1wiYmdcIl0pXG4gICAgICAgIHRoaXMuYmFzZS5jbGFzc2VkKHRoaXMuY3NzbmFtZSwgdHJ1ZSlcbiAgICAgICAgdGhpcy5kYXRhKDxMaW5lVHJhY2tlcj57fSlcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBQbG90IHRoZSB2YWx1ZXMgb2YgYWxsIHggYWNjb3JkaW5nIHRvIHRoZSBmdW5jdGlvblxuICAgICAqIFxuICAgICAqIEBwYXJhbSB4IEEgbGluc3BhY2Ugb2YgeCB2YWx1ZXMgb3ZlciB3aGljaCB0byBwbG90IGEgY3VydmVcbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgYWRkRGF0YUtleV8oY2xhc3NuYW1lOiBzdHJpbmcpIHtcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXNcbiAgICAgICAgaWYgKCFSLmhhcyhjbGFzc25hbWUsIHRoaXMuZGF0YSgpKSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coYEFkZGluZyBrZXk6ICR7Y2xhc3NuYW1lfWApO1xuICAgICAgICAgICAgdGhpcy5kYXRhKClbY2xhc3NuYW1lXSA9IHtcbiAgICAgICAgICAgICAgICBzZWw6IHNlbGYuaW5pdEJhc2VMaW5lKGNsYXNzbmFtZSksXG4gICAgICAgICAgICAgICAgdmFsczogW11cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNsZWFyUGF0aHMoKSB7XG4gICAgICAgIHRoaXMuZGF0YShSLm1hcChkID0+IFIuYXNzb2MoJ3ZhbHMnLCBbXSwgZCksIHRoaXMuZGF0YSgpKSlcbiAgICB9XG5cbiAgICBwbG90UGF0aChkOiBCYWxsSGlzdG9yeSwgc2NhbGU/KSB7XG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuICAgICAgICB0aGlzLmFkZERhdGFLZXlfKGQuY2xhc3NuYW1lKTtcblxuICAgICAgICBjb25zdCBzY2FsZXIgPSAoc2NhbGUgPT0gbnVsbCkgPyB4ID0+IHggOiBzY2FsZVxuXG4gICAgICAgIGNvbnN0IGN1cnJWYWxzID0gdGhpcy5kYXRhKClbZC5jbGFzc25hbWVdO1xuICAgICAgICBjdXJyVmFscy52YWxzLnB1c2goc2NhbGVyKE1hdGguYWJzKGQueCkpKTtcblxuICAgICAgICAvLyBzbGlkaW5nIHgtYXhpc1xuICAgICAgICBjb25zdCBuZXdYcmFuZ2UgPSBbTWF0aC5tYXgoMCwgY3VyclZhbHMudmFscy5sZW5ndGgtdGhpcy5vcHRpb25zLnhyYW5nZVsxXSksIE1hdGgubWF4KGN1cnJWYWxzLnZhbHMubGVuZ3RoLHRoaXMub3B0aW9ucy54cmFuZ2VbMV0pXVxuICAgICAgICB0aGlzLnVwZGF0ZVNjYWxlcyhuZXdYcmFuZ2UpXG4gICAgICAgIHRoaXMuY3JlYXRlUGF0aCgpIC8vIERlcGVuZHMgb24geCBzY2FsZVxuXG5cbiAgICAgICAgY3VyclZhbHMuc2VsLmRhdGEoW2N1cnJWYWxzXSlcbiAgICAgICAgICAgIC5qb2luKFwicGF0aFwiKVxuICAgICAgICAgICAgLmNsYXNzZWQoZC5jbGFzc25hbWUsIHRydWUpXG4gICAgICAgICAgICAuYXR0cihcImRcIiwgZCA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHNlbGYucGF0aChkLnZhbHMpXG4gICAgICAgICAgICB9KVxuICAgIH1cblxuICAgIC8vIExpdmUgdXBkYXRlIHRoZSB4cmFuZ2VcbiAgICB1cGRhdGVTY2FsZXMoeHJhbmdlKSB7XG4gICAgICAgIGNvbnN0IG9wID0gdGhpcy5vcHRpb25zXG4gICAgICAgIHRoaXMuc2NhbGVzLnggPSBkMy5zY2FsZUxpbmVhcigpLmRvbWFpbih4cmFuZ2UpLnJhbmdlKFswLCBvcC53aWR0aF0pLmNsYW1wKHRydWUpXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBpbml0QmFzZUxpbmUoY2xhc3NuYW1lOiBzdHJpbmcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubGF5ZXJzLmJnLmFwcGVuZChcInBhdGhcIilcbiAgICAgICAgICAgIC5jbGFzc2VkKGNsYXNzbmFtZSwgdHJ1ZSlcbiAgICAgICAgICAgIC5jbGFzc2VkKCdsaW5lJywgdHJ1ZSlcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgY3JlYXRlU2NhbGVzKCkge1xuICAgICAgICBjb25zdCBvcCA9IHRoaXMub3B0aW9uc1xuICAgICAgICB0aGlzLnNjYWxlcy54ID0gZDMuc2NhbGVMaW5lYXIoKS5kb21haW4ob3AueHJhbmdlKS5yYW5nZShbMCwgb3Aud2lkdGhdKS5jbGFtcCh0cnVlKVxuICAgICAgICB0aGlzLnNjYWxlcy55ID0gZDMuc2NhbGVMaW5lYXIoKS5kb21haW4ob3AueXJhbmdlKS5yYW5nZShbMCwgb3AuaGVpZ2h0XSkuY2xhbXAodHJ1ZSlcbiAgICB9XG5cbiAgICBpbml0KCkge1xuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICAgICAgY29uc3Qgb3AgPSB0aGlzLm9wdGlvbnM7XG4gICAgICAgIGNvbnN0IHNjYWxlcyA9IHRoaXMuc2NhbGVzO1xuICAgICAgICBjb25zdCBzZWxzID0gdGhpcy5zZWxzO1xuXG4gICAgICAgIHRoaXMuY3JlYXRlU2NhbGVzKClcbiAgICAgICAgdGhpcy5jcmVhdGVQYXRoKClcbiAgICAgICAgdGhpcy5jcmVhdGVBeGVzKClcbiAgICB9XG5cblxuICAgIHByb3RlY3RlZCBjcmVhdGVBeGVzKCkge1xuICAgICAgICBjb25zdCBzZWxzID0gdGhpcy5zZWxzXG4gICAgICAgIGNvbnN0IHNjYWxlcyA9IHRoaXMuc2NhbGVzXG4gICAgICAgIGNvbnN0IG9wID0gdGhpcy5vcHRpb25zXG5cbiAgICAgICAgLy8gQ3JlYXRlIGF4ZXNcbiAgICAgICAgc2Vscy54YXhpcyA9IHRoaXMuYmFzZS5hcHBlbmQoXCJnXCIpXG4gICAgICAgICAgICAuYXR0cihcImNsYXNzXCIsIFwiYXhpcyBheGlzLS14XCIpXG4gICAgICAgICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBTVkcudHJhbnNsYXRlKDAsIG9wLmhlaWdodCAtIGF4aXNPZmZzZXQpKVxuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgLmNhbGwoZDMuYXhpc0JvdHRvbShzY2FsZXMueCkudGlja3MoNCkudGlja0Zvcm1hdChcIlwiKSk7XG5cbiAgICAgICAgc2Vscy55YXhpcyA9IHRoaXMuYmFzZS5hcHBlbmQoXCJnXCIpXG4gICAgICAgICAgICAuYXR0cihcImNsYXNzXCIsIFwiYXhpcyBheGlzLS15XCIpXG4gICAgICAgICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBTVkcudHJhbnNsYXRlKDAsIC0gYXhpc09mZnNldCkpXG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICAuY2FsbChkMy5heGlzTGVmdChzY2FsZXMueSkudGlja3MoNCkudGlja0Zvcm1hdChcIlwiKSk7XG5cbiAgICAgICAgdGhpcy5iYXNlLmFwcGVuZChcInRleHRcIilcbiAgICAgICAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIFNWRy50cmFuc2xhdGUob3Aud2lkdGggLyAyLCBvcC5tYXJnaW4udG9wICsgb3AuaGVpZ2h0ICsgMTApKVxuICAgICAgICAgICAgLnN0eWxlKFwidGV4dC1hbmNob3JcIiwgXCJtaWRkbGVcIilcbiAgICAgICAgICAgIC50ZXh0KFwiVGltZVwiKVxuXG4gICAgICAgIHRoaXMuYmFzZS5hcHBlbmQoXCJ0ZXh0XCIpXG4gICAgICAgICAgICAuc3R5bGUoXCJ0ZXh0LWFuY2hvclwiLCBcIm1pZGRsZVwiKVxuICAgICAgICAgICAgLnRleHQoXCJcXHUwM0I4IC0gXFx1MDNCOCpcIilcbiAgICAgICAgICAgIC5hdHRyKFwieVwiLCBvcC5wYWQubGVmdCAtIG9wLm1hcmdpbi5sZWZ0KVxuICAgICAgICAgICAgLmF0dHIoXCJ4XCIsIG9wLnBhZC50b3AgLSAob3AuaGVpZ2h0IC8gMikpXG4gICAgICAgICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBTVkcucm90YXRlKC05MCkpXG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGNyZWF0ZVBhdGgoKSB7XG4gICAgICAgIHRoaXMucGF0aCA9IGQzLmxpbmU8bnVtYmVyPigpXG4gICAgICAgICAgICAueCgoZDogbnVtYmVyLCBpOiBudW1iZXIpID0+IHRoaXMuc2NhbGVzLngoaSkpXG4gICAgICAgICAgICAueSgoZDogbnVtYmVyLCBpOiBudW1iZXIpID0+IHRoaXMuc2NhbGVzLnkoZCkpXG4gICAgICAgICAgICAuY3VydmUoZDMuY3VydmVMaW5lYXIpXG4gICAgfVxuXG4gICAgZGF0YSgpOiBUXG4gICAgZGF0YSh2YWw6IFQpOiB0aGlzXG4gICAgZGF0YSh2YWw/KSB7XG4gICAgICAgIGlmICh2YWwgPT0gbnVsbCkgcmV0dXJuIHRoaXMuX2RhdGFcbiAgICAgICAgdGhpcy5fZGF0YSA9IHZhbDtcbiAgICAgICAgcmV0dXJuIHRoaXNcbiAgICB9XG59IiwiaW1wb3J0ICogYXMgZDMgZnJvbSAnZDMnXG5pbXBvcnQgeyBiYXNlTG9zcyB9IGZyb20gJy4uL0dvbGZMYW5kc2NhcGVzJ1xuXG5leHBvcnQgY2xhc3MgTWFudWFsVXBkYXRlciB7XG4gICAgZjogKHg6IG51bWJlcikgPT4gbnVtYmVyXG4gICAgZGY6ICh4OiBudW1iZXIpID0+IG51bWJlclxuXG4gICAgcTogbnVtYmVyICAgLy8gMCAtPiAxLCB3aGVyZSAwIGlzIFNHRCBhbmQgMSBpcyBOR0QuIDAuNSBpcyBzcXJ0IE5HRC4gW3N0ZXAgPSAtIGV0YSAqIEggXiAoLTEvcSkgKiBnXSAoSCA9IDAgd2hlbiBxPTApXG4gICAgZXRhOiBudW1iZXIgLy8gYWthICdsZWFybmluZyByYXRlJ1xuXG4gICAgY29uc3RydWN0b3IoZiwgZGYsIHEgPSAwLCBldGEgPSAwLjEpIHtcbiAgICAgICAgdGhpcy5mID0gZjtcbiAgICAgICAgdGhpcy5kZiA9IGRmO1xuICAgICAgICB0aGlzLnEgPSBxO1xuICAgICAgICB0aGlzLmV0YSA9IGV0YTtcbiAgICB9XG5cbiAgICAvLyBDYWxjdWxhdGUgZXJyb3Igc3F1YXJlZCBvZiB0aGUgYmFzZSBmdW5jdGlvblxuICAgIGxvc3MoeDogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIGJhc2VMb3NzKHRoaXMuZih4KSlcbiAgICB9XG5cbiAgICAvLyBHcmFkaWVudCBhdCB4XG4gICAgZ3JhZGllbnQoeDogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZih4KSAqIHRoaXMuZGYoeClcbiAgICB9XG5cbiAgICAvLyBUaGUgcG9zaXRpdmUgc2VtaS1kZWZpbml0ZSBoZXNzaWFuIGF0IHhcbiAgICBwc2RoZXNzKHg6IG51bWJlcik6IG51bWJlciB7XG4gICAgICAgIHJldHVybiBNYXRoLnBvdyh0aGlzLmRmKHgpLCAyKVxuICAgIH1cblxuICAgIHVwZGF0ZU1vZGlmaWVyKHg6IG51bWJlcik6IG51bWJlciB7XG4gICAgICAgIHJldHVybiBNYXRoLnBvdyh0aGlzLmRmKHgpLCAxIC0gKDIgKiB0aGlzLnEpKVxuICAgIH1cblxuICAgIHVwZGF0ZUFtdCh4OiBudW1iZXIpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5mKHgpICogdGhpcy51cGRhdGVNb2RpZmllcih4KVxuICAgIH1cblxuICAgIC8vIFRoZSBhbW91bnQgdG8gdXBkYXRlIGF0IHggZ2l2ZW4gdGhlIGxlYXJuaW5nIHJhdGUgZXRhXG4gICAgc3RlcCh4OiBudW1iZXIpOiBudW1iZXIge1xuICAgICAgICAvLyBDb3VsZCB1c2UgcHNkaGVzcyBpbiB0aGUgZXF1YXRpb24gYmVsb3csIGJ1dCBkdWUgdG8gbnVtZXJpY2FsIGlzc3VlcyB0aGlzIGZvcm11bGF0aW9uIGNvbXB1dGVzIG1vcmUgcmVsaWFibHlcbiAgICAgICAgcmV0dXJuIC0gdGhpcy5ldGEgKiB0aGlzLnVwZGF0ZUFtdCh4KVxuICAgIH1cblxuICAgIC8vIEdldCB0aGUgbmV4dCB4IHZhbHVlIGFmdGVyIHRha2luZyBhIHN0ZXBcbiAgICBuZXh0KHg6IG51bWJlcik6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB4ICsgdGhpcy5zdGVwKHgpXG4gICAgfVxufSJdLCJzb3VyY2VSb290IjoiIn0=
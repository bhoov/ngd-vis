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
        f: x => Math.tanh(x * 13.5),
        df: x => Math.pow(Math.cosh(x * 13.5), -2) * 13.5,
        xrange: [-6 / 13.5, 6 / 13.5],
        yrange: [0, 0.6],
        loss: baseLoss
    },
    steps: {
        name: "steps",
        f: x => Math.tanh(x * 13.5 - 11) / 4 + Math.tanh(x * 13.5 - 6) / 4 + Math.tanh(x * 13.5) + Math.tanh(x * 13.5 + 6) / 4 + Math.tanh(x * 13.5 + 11) / 4,
        df: x => (Math.pow(Math.cosh(x * 13.5 - 11), -2) / 4 + Math.pow(Math.cosh(x * 13.5 - 6), -2) / 4 + Math.pow(Math.cosh(x * 13.5), -2) + Math.pow(Math.cosh(x * 13.5 + 6), -2) / 4 + Math.pow(Math.cosh(x * 13.5 + 11), -2) / 4) * 13.5,
        xrange: [-13.5 / 13.5, 13.5 / 13.5],
        yrange: [0, 2.5],
        loss: baseLoss
    },
    seagull: {
        name: "seagull",
        f: x => Math.sign(x) * (1 - (1 / (1 + Math.abs(x * 16.5)))),
        df: x => 16.5 / Math.pow(1 + Math.abs(x * 16.5), 2),
        xrange: [-12 / 16.5, 12 / 16.5],
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
        xrange: [-0.95 * 3, 0.95 * 3],
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
    // Err(v:Vector2D):number {
    //     return this.err(v)
    // }
    // Take abs value of error
    sqrtErr(v) {
        return Math.sqrt(Math.abs(this.err(v)));
    }
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
        const x = v.x + g.x * 3;
        const y = v.y + g.y * 3;
        // const dv = this.dv(v)
        // const x = v.x + dv.x * this.eta;
        // const y = v.y + dv.y * this.eta;
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
        eta: 0.05
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
function plotGolfHole3Ball() {
    const vis2 = d3__WEBPACK_IMPORTED_MODULE_0__["select"]("#vis2");
    const sels = {
        chart: vis2.select('#chart'),
        chartXDist: vis2.select('#chart-xdist'),
        chartLosses: vis2.select('#chart-losses'),
        landscapeSelector: vis2.select('.landscape-select')
    };
    const eventHandler = new _util_SimpleEventHandler__WEBPACK_IMPORTED_MODULE_8__["SimpleEventHandler"](vis2.node());
    const vizs = {
        graph: new _vis_GolfHole1D__WEBPACK_IMPORTED_MODULE_3__["GolfHole1D"](sels.chart, eventHandler, {}, _util_UId__WEBPACK_IMPORTED_MODULE_1__["UId"].uid()),
        chartXDist: new _vis_GolfXDist__WEBPACK_IMPORTED_MODULE_5__["GolfXDist"](sels.chartXDist, eventHandler),
        chartLosses: new _vis_GolfLosses__WEBPACK_IMPORTED_MODULE_4__["GolfLosses"](sels.chartLosses, eventHandler)
    };
    // Corresponds to qs = [0, 0.5, 1]
    const defaultEta = {
        seagull: [0.005, 0.005, 0.005],
        hole: [0.005, 0.005, 0.005],
        steps: [0.005, 0.005, 0.005],
        bowl: [0.03, 0.03, 0.03],
        deep_net: [0.01, 0.01, 0.01],
    };
    const defaults = {
        landscape: "seagull",
        qs: [0, 0.5, 1],
        classNames: ['golf-ball-sgd', 'golf-ball-sngd', 'golf-ball-ngd'],
    };
    defaults.etas = defaultEta[defaults.landscape];
    const defaultLandscape = _GolfLandscapes__WEBPACK_IMPORTED_MODULE_10__["landscapes"][defaults.landscape];
    //@ts-ignore
    const defaultBalls = d3__WEBPACK_IMPORTED_MODULE_0__["zip"](defaults.qs, defaults.etas, defaults.classNames).map((x) => new _vis_GolfBall__WEBPACK_IMPORTED_MODULE_6__["GolfBall"](new _vis_ManualUpdater__WEBPACK_IMPORTED_MODULE_9__["ManualUpdater"](defaultLandscape.f, defaultLandscape.df, x[0], x[1]), x[2]));
    vizs.graph.data(defaultBalls);
    // Attach golfball info to loss tracker
    eventHandler.bind('loss-click', (e) => {
        vizs.chartXDist.clearPaths();
        vizs.chartLosses.clearPaths();
    });
    // Configure html page to work with defaults
    sels.landscapeSelector.property('value', defaults.landscape);
    vizs.graph.landscape(_GolfLandscapes__WEBPACK_IMPORTED_MODULE_10__["landscapes"][defaults.landscape]);
    let runningStreams = [];
    // Assign streams
    const assignStreams = (graph, currentStreams = []) => {
        const streams = graph.data().map(b => b.stream);
        const plotter = {
            next: d => {
                vizs.chartXDist.plotPath(d, graph.scales.base2math.x.invert);
                vizs.chartLosses.plotPath(d, graph.scales.base2loss);
            }
        };
        currentStreams.forEach(s => s.unsubscribe());
        const activatedStreams = streams.map(s => {
            return s.subscribe(plotter);
        });
        return activatedStreams;
    };
    // Gather interactivity for the golf ball plot
    sels.landscapeSelector.on('input', function () {
        const self = d3__WEBPACK_IMPORTED_MODULE_0__["select"](this);
        const v = self.property('value');
        vizs.chartLosses.resetXrange_();
        vizs.chartXDist.resetXrange_();
        vizs.graph.landscape(_GolfLandscapes__WEBPACK_IMPORTED_MODULE_10__["landscapes"][v]);
        vizs.graph.dataFromBase(vizs.graph.dataToBase_());
        runningStreams = assignStreams(vizs.graph, runningStreams);
    });
    runningStreams = assignStreams(vizs.graph, runningStreams);
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
        landscape: "seagull",
        q: 0.5,
        eta: 0.01
    };
    // Attach golfball info to loss tracker
    eventHandler.bind('loss-click', (e) => {
        vizs.chartXDist.clearPaths();
        vizs.chartLosses.clearPaths();
    });
    // Put data into viz
    vizs.graph.data([new _vis_GolfBall__WEBPACK_IMPORTED_MODULE_6__["GolfBall"](new _vis_ManualUpdater__WEBPACK_IMPORTED_MODULE_9__["ManualUpdater"](_GolfLandscapes__WEBPACK_IMPORTED_MODULE_10__["landscapes"].hole.f, _GolfLandscapes__WEBPACK_IMPORTED_MODULE_10__["landscapes"].hole.df, defaults.q, defaults.eta), "golf-ball")]);
    // const etaRange = [-5, 2].map(x => Math.pow(10, x))
    const etaRange = [-3, 0].map(x => Math.pow(10, x));
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
    // Assign streams
    let runningStreams = [];
    const assignStreams = (graph, currentStreams = []) => {
        const streams = graph.data().map(b => b.stream);
        const plotter = {
            next: d => {
                vizs.chartXDist.plotPath(d, graph.scales.base2math.x.invert);
                vizs.chartLosses.plotPath(d, graph.scales.base2loss);
            }
        };
        currentStreams.forEach(s => s.unsubscribe());
        const activatedStreams = streams.map(s => {
            return s.subscribe(plotter);
        });
        return activatedStreams;
    };
    // Adjust slider reactivity
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
        vizs.chartLosses.resetXrange_();
        vizs.chartXDist.resetXrange_();
        vizs.graph.landscape(_GolfLandscapes__WEBPACK_IMPORTED_MODULE_10__["landscapes"][v]);
        vizs.graph.dataFromBase(vizs.graph.dataToBase_());
        runningStreams = assignStreams(vizs.graph, runningStreams);
    });
    runningStreams = assignStreams(vizs.graph, runningStreams);
}
function main() {
    console.log("RUNNING");
    plotQuiverGraph();
    plotGolfHole3Ball();
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
            .attr("markerWidth", 5.5)
            .attr("markerHeight", 5.5)
            .attr("viewBox", "0 0 12 12")
            .attr("refX", 6)
            .attr("refY", 6)
            .attr("orient", 'auto')
            .append('path')
            .attr('d', "M2,2 L10,6 L2,10 L6,6 L2,2");
        // .style("fill: #f00")
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
            xrange: [0, 1.6],
            yrange: [0, 1.6],
            n: 500,
            m: 500,
            circleEvery: 4,
        }; // #state
        this.scales = {};
        this.sels = {};
        // Other
        this._curr = {
            currLoc: {
                x: 0.1,
                y: 0.2
            },
            step: 0
        };
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
    // plotMinimum() {
    //     const self = this;
    //     const op = this.options;
    //     const scales = this.scales;
    //     const makeX = (nx: number) => R.range(0, nx).map(d3.scaleLinear().domain([0, nx]).range([0.00001, op.xrange[1]]))
    //     const yFunc = x => 1 / x;
    //     const xvals = makeX(100)
    //     const yvals = xvals.map(yFunc)//.map(y => scales.y(y))
    //     const data = R.zip(xvals.map(scales.x), yvals.map(scales.y))
    //     const lineGen = d3.line()
    //     const pathData = lineGen(data)
    //     const minimumGroup = this.base.append('g').attr('id', 'minimum-group')
    //     console.log("Path data: ", pathData);
    //     minimumGroup.append('path')
    //         .attr('d', lineGen(data))
    //         .classed('minimum', true)
    //         .style('stroke-width', 2.5)
    //         .style('stroke', 'blue')
    //         .style('fill', null)
    // }
    plotContours() {
        const self = this;
        const op = this.options;
        const scales = this.scales;
        const contourFunc = (x, y) => this.updater.absErr({ x: x, y: y });
        const vals = Object(_plotting__WEBPACK_IMPORTED_MODULE_4__["getContourValues"])(op.n, op.m, op.xrange, op.yrange, contourFunc);
        let thresholds = d3__WEBPACK_IMPORTED_MODULE_0__["range"](d3__WEBPACK_IMPORTED_MODULE_0__["min"](vals), d3__WEBPACK_IMPORTED_MODULE_0__["max"](vals), 0.08);
        // const contourFunc = (x, y) => this.updater.Err({ x: x, y: y })
        // const vals = getContourValues(op.n, op.m, op.xrange, op.yrange, contourFunc)
        // let thresholds = d3.range(d3.min(vals), -d3.min(vals), 0.08);
        // 
        // Because the minimum value is not a contour but a value, we need to do what we can to approach the min.
        const weighted = 0.95;
        const newMin = (weighted * thresholds[0] + (1 - weighted) * thresholds[1]) / 2;
        // const newMin = 0;
        thresholds = ramda__WEBPACK_IMPORTED_MODULE_1__["insert"](1, newMin, thresholds);
        // scales.color = d3.scaleLinear().domain([-3,3]).range([0.4, 0.6]).interpolate(() => d3.interpolateRdYlBu);
        scales.color = d3__WEBPACK_IMPORTED_MODULE_0__["scaleLinear"]().domain([-1, 0.1]).range([0, 1]).interpolate(() => d3__WEBPACK_IMPORTED_MODULE_0__["interpolateBlues"]);
        // scales.color = d3.scaleSequentialLog(d3.extent(thresholds), d3.interpolateMagma)
        scales.contours.thresholds(thresholds);
        const contourVals = scales.contours(vals);
        const contourGroup = this.base.append('g').attr('id', 'contour-group');
        const contours = contourGroup.selectAll("path.contour")
            .data(contourVals);
        contours.join("path")
            .attr("class", "contour")
            .attr("d", d3__WEBPACK_IMPORTED_MODULE_0__["geoPath"](d3__WEBPACK_IMPORTED_MODULE_0__["geoIdentity"]().scale(op.width / op.n)))
            .attr("fill", d => {
            return scales.color(-Math.sqrt(d.value));
        })
            .classed('main-fit', d => {
            return d.value == newMin;
        })
            .classed('not-fit', d => {
            return d.value != newMin;
        });
        // legend({color, title: "Value", tickFormat: ","})
    }
    addStep(v, prev = null) {
        const self = this;
        const op = this.options;
        const scales = this.scales;
        const sels = this.sels;
        const cx = scales.x(v.x);
        const cy = scales.y(v.y);
        if (prev != null) {
            this.base.append('line')
                .attr('x1', scales.x(prev.x))
                .attr('y1', scales.y(prev.y))
                .attr('x2', cx)
                .attr('y2', cy)
                .classed('descending-line', true);
        }
        // Check border conditions
        if (v.x >= op.xrange[1] || v.y >= op.yrange[1]) {
            this.ticker.unsubscribe();
            return v;
        }
        if (((this._curr.step % op.circleEvery) == 0) || (prev == null)) {
            console.log("Curr step: ", this._curr.step);
            sels.circle = this.base.append('circle')
                .attr('cx', cx)
                .attr('cy', cy)
                .attr('r', 2)
                .classed('descending-point', true);
        }
        this._curr.step += 1;
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
                this.addStep(val, prevVal);
                prevVal = val;
            },
            err: (err) => console.log(err),
            complete: () => console.log("COMPLETE")
        };
        const prep = () => {
            this.addStep(this.curr());
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
        const nx = 11, ny = 11;
        const points = _util_SVGplus__WEBPACK_IMPORTED_MODULE_3__["SVG"].meshgrid(nx, ny, op.xrange, op.yrange);
        const color = "blue";
        const width = 1.25;
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
        scales.x = d3__WEBPACK_IMPORTED_MODULE_0__["scaleLinear"]().domain(op.xrange).range([0, op.width]).clamp(true);
        scales.y = d3__WEBPACK_IMPORTED_MODULE_0__["scaleLinear"]().domain(op.yrange).range([op.height, 0]).clamp(true);
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
            self._curr.step = 0;
            self.curr({ x: scales.x.invert(coords[0]), y: scales.y.invert(coords[1]) });
            // if (self.curr().x > 0 && self.curr().y > 0 && self.curr().x < (op.xrange[1] - 0.1) && self.curr().y < (op.yrange[1] - 0.1)) {
            if (self.curr().x > 0 && self.curr().y > 0) {
                self.addStep(self.curr());
                self.clearCircles();
                self.plotDescent();
            }
        });
    }
    curr(val) {
        if (val == null) {
            return this._curr.currLoc;
        }
        this._curr.currLoc = val;
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
            margin: { top: 5, right: 10, bottom: 40, left: 10 },
            pad: 30,
            maxIter: 600,
            landscape: _GolfLandscapes__WEBPACK_IMPORTED_MODULE_9__["landscapes"].hole
        };
        this.scales = {};
        this.sels = {};
        this.maskId = `line-mask-${this.ID}`;
        super.initSVG(options, ["bg"]);
        this.base.classed(this.cssname, true);
        const z = this.options.landscape;
        // Need to have initial data
        const data = [
            new _GolfBall__WEBPACK_IMPORTED_MODULE_8__["GolfBall"](new _ManualUpdater__WEBPACK_IMPORTED_MODULE_7__["ManualUpdater"](z.f, z.df, 0, 0.9), 'golf-ball-sgd', 4),
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
        const self = this, op = this.options, scales = this.scales, sels = this.sels;
        scales.paths.forEach(line => {
            this.layers.bg.append("path")
                .datum(xs)
                .attr("class", "line")
                .attr("d", d => {
                return line(d);
            });
        });
        sels.lineBackground.selectAll(".grad-box")
            .data([1])
            .join('rect')
            .classed('grad-box', true)
            .attr("width", op.width)
            .attr("height", op.height)
            .attr("fill-opacity", 0.0);
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
        scales.base2loss = d3__WEBPACK_IMPORTED_MODULE_0__["scaleLinear"]().domain(op.landscape.yrange).range([0, 1]);
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
        sels.backdrop = this.layers.bg.append("g")
            .attr("id", "backdrop")
            .classed('grass', true)
            .append("rect")
            .attr("height", op.height)
            .attr("width", op.width);
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
        const tooSmall = (x) => x < (op.landscape.xrange[0]);
        const tooBig = (x) => x > (op.landscape.xrange[1]);
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
        // this.sels.backdrop.on('click', plotBalls)
        // this.sels.maskBackground.on('click', plotBalls)
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
        this.initBalls();
        return this;
    }
    /**
     * INPLACE change the golf balls into the BASE scale
     */
    dataToBase_() {
        this.data().map(b => {
            b.x = this.scales.base2math.x.invert(b.x);
            return b;
        });
        return this.data();
    }
    /**
     * Modify the golf balls and change their x value from BASE to the new MATH
     */
    dataFromBase(val) {
        val.forEach(b => {
            b.x = this.scales.base2math.x(b.x);
        });
        this.initBalls();
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
            yrange: [1.1, 1e-3],
        };
        this.scales = {};
        this.sels = {};
        super.initSVG(this.options, ["bg"]);
        this.base.classed(this.cssname, true);
        this.defaultXrange = this.options.xrange;
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
    plotPath(d, scale) {
        const self = this;
        this.addDataKey_(d.classname);
        const scaler = (scale == null) ? x => x : scale;
        const currVals = this.data()[d.classname];
        currVals.vals.push(scaler(d.loss));
        // sliding x-axis
        const newXrange = [Math.max(0, currVals.vals.length - this.options.xrange[1]), Math.max(currVals.vals.length, this.options.xrange[1])];
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
    resetXrange_() {
        this.options.xrange = this.defaultXrange;
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
        this.defaultXrange = this.options.xrange;
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
    resetXrange_() {
        this.options.xrange = this.defaultXrange;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nzcy9tYWluLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy90cy9Hb2xmTGFuZHNjYXBlcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHMvVXBkYXRlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHMvbWFpbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHMvcGxvdHRpbmcudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RzL3V0aWwvQ2hhcnQyZFZpc0NvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHMvdXRpbC9TVkdWaXNDb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RzL3V0aWwvU1ZHcGx1cy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHMvdXRpbC9TaW1wbGVFdmVudEhhbmRsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RzL3V0aWwvVUlkLnRzIiwid2VicGFjazovLy8uL3NyYy90cy91dGlsL1Zpc0NvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHMvdXRpbC94ZDMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RzL3Zpcy9Db250b3VyUGxvdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHMvdmlzL0dvbGZCYWxsLnRzIiwid2VicGFjazovLy8uL3NyYy90cy92aXMvR29sZkhvbGUxRC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHMvdmlzL0dvbGZMb3NzZXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RzL3Zpcy9Hb2xmWERpc3QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RzL3Zpcy9NYW51YWxVcGRhdGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLFFBQVEsb0JBQW9C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SSxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQztRQUNySixFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBRSxHQUFHLElBQUk7UUFDdE8sTUFBTSxFQUFFLENBQUMsQ0FBQyxJQUFJLEdBQUcsSUFBSSxFQUFFLElBQUksR0FBRyxJQUFJLENBQUM7UUFDbkMsTUFBTSxFQUFFLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQztRQUNoQixJQUFJLEVBQUUsUUFBUTtLQUNqQjtJQUNELE9BQU8sRUFBRTtRQUNMLElBQUksRUFBRSxTQUFTO1FBQ2YsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFB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QUMsQ0FBUztRQUNkLE9BQU8sSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBRUQsMENBQTBDO0lBQzFDLE9BQU8sQ0FBQyxDQUFTO1FBQ2IsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUFFRCxjQUFjLENBQUMsQ0FBUztRQUNwQixPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2pELENBQUM7SUFFRCxTQUFTLENBQUMsQ0FBUztRQUNmLE9BQU8sSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBRUQsd0RBQXdEO0lBQ3hELElBQUksQ0FBQyxDQUFTO1FBQ1YsK0dBQStHO1FBQy9HLE9BQU8sQ0FBRSxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUFFRCwyQ0FBMkM7SUFDM0MsSUFBSSxDQUFDLENBQVM7UUFDVixPQUFPLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUMzQixDQUFDO0NBQ0oiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuIFx0ZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soZGF0YSkge1xuIFx0XHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuIFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuIFx0XHR2YXIgZXhlY3V0ZU1vZHVsZXMgPSBkYXRhWzJdO1xuXG4gXHRcdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuIFx0XHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcbiBcdFx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXTtcbiBcdFx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG4gXHRcdFx0fVxuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdH1cbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZihwYXJlbnRKc29ucEZ1bmN0aW9uKSBwYXJlbnRKc29ucEZ1bmN0aW9uKGRhdGEpO1xuXG4gXHRcdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuIFx0XHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcbiBcdFx0fVxuXG4gXHRcdC8vIGFkZCBlbnRyeSBtb2R1bGVzIGZyb20gbG9hZGVkIGNodW5rIHRvIGRlZmVycmVkIGxpc3RcbiBcdFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2guYXBwbHkoZGVmZXJyZWRNb2R1bGVzLCBleGVjdXRlTW9kdWxlcyB8fCBbXSk7XG5cbiBcdFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiBhbGwgY2h1bmtzIHJlYWR5XG4gXHRcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIFx0fTtcbiBcdGZ1bmN0aW9uIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCkge1xuIFx0XHR2YXIgcmVzdWx0O1xuIFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0dmFyIGRlZmVycmVkTW9kdWxlID0gZGVmZXJyZWRNb2R1bGVzW2ldO1xuIFx0XHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuIFx0XHRcdGZvcih2YXIgaiA9IDE7IGogPCBkZWZlcnJlZE1vZHVsZS5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0dmFyIGRlcElkID0gZGVmZXJyZWRNb2R1bGVbal07XG4gXHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbZGVwSWRdICE9PSAwKSBmdWxmaWxsZWQgPSBmYWxzZTtcbiBcdFx0XHR9XG4gXHRcdFx0aWYoZnVsZmlsbGVkKSB7XG4gXHRcdFx0XHRkZWZlcnJlZE1vZHVsZXMuc3BsaWNlKGktLSwgMSk7XG4gXHRcdFx0XHRyZXN1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IGRlZmVycmVkTW9kdWxlWzBdKTtcbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHRyZXR1cm4gcmVzdWx0O1xuIFx0fVxuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuIFx0Ly8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4gXHQvLyBQcm9taXNlID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJtYWluXCI6IDBcbiBcdH07XG5cbiBcdHZhciBkZWZlcnJlZE1vZHVsZXMgPSBbXTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0dmFyIGpzb25wQXJyYXkgPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gfHwgW107XG4gXHR2YXIgb2xkSnNvbnBGdW5jdGlvbiA9IGpzb25wQXJyYXkucHVzaC5iaW5kKGpzb25wQXJyYXkpO1xuIFx0anNvbnBBcnJheS5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7XG4gXHRqc29ucEFycmF5ID0ganNvbnBBcnJheS5zbGljZSgpO1xuIFx0Zm9yKHZhciBpID0gMDsgaSA8IGpzb25wQXJyYXkubGVuZ3RoOyBpKyspIHdlYnBhY2tKc29ucENhbGxiYWNrKGpzb25wQXJyYXlbaV0pO1xuIFx0dmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSBvbGRKc29ucEZ1bmN0aW9uO1xuXG5cbiBcdC8vIGFkZCBlbnRyeSBtb2R1bGUgdG8gZGVmZXJyZWQgbGlzdFxuIFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2goW1wiLi9zcmMvaW5kZXgudHNcIixcInZlbmRvclwiXSk7XG4gXHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIHJlYWR5XG4gXHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImluZGV4Lmh0bWxcIjsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJpbXBvcnQge21haW59IGZyb20gJy4vdHMvbWFpbidcblxuaW1wb3J0IFwiIWZpbGUtbG9hZGVyP25hbWU9aW5kZXguaHRtbCEuL2luZGV4Lmh0bWxcIjtcbmltcG9ydCBcIi4vY3NzL21haW4uc2Nzc1wiXG5cbm1haW4oKSIsImV4cG9ydCBjb25zdCBiYXNlTG9zcyA9IHggPT4gMSAvIDIgKiBNYXRoLnBvdyh4LCAyKVxuZXhwb3J0IGNvbnN0IGdldFBsb3RGdW5jID0gKHo6IExhbmRzY2FwZSkgPT4gKHg6IG51bWJlcikgPT4gei5sb3NzKHouZih4KSlcblxuZXhwb3J0IGludGVyZmFjZSBMYW5kc2NhcGUge1xuICAgIG5hbWU6IHN0cmluZ1xuICAgIGY6ICh4OiBudW1iZXIpID0+IG51bWJlclxuICAgIGRmOiAoeDogbnVtYmVyKSA9PiBudW1iZXJcbiAgICB4cmFuZ2U6IFtudW1iZXIsIG51bWJlcl1cbiAgICB5cmFuZ2U6IFtudW1iZXIsIG51bWJlcl1cbiAgICBsb3NzOiAoeDogbnVtYmVyKSA9PiBudW1iZXJcbn1cblxuXG5leHBvcnQgY29uc3QgbGFuZHNjYXBlczogeyBbazogc3RyaW5nXTogTGFuZHNjYXBlIH0gPSB7XG4gICAgaG9sZToge1xuICAgICAgICBuYW1lOiBcImhvbGVcIixcbiAgICAgICAgZjogeCA9PiBNYXRoLnRhbmgoeCoxMy41KSxcbiAgICAgICAgZGY6IHggPT4gTWF0aC5wb3coTWF0aC5jb3NoKHgqMTMuNSksIC0yKSAqIDEzLjUsXG4gICAgICAgIHhyYW5nZTogWy02IC8gMTMuNSwgNiAvIDEzLjVdLFxuICAgICAgICB5cmFuZ2U6IFswLCAwLjZdLFxuICAgICAgICBsb3NzOiBiYXNlTG9zc1xuICAgIH0sXG4gICAgc3RlcHM6IHtcbiAgICAgICAgbmFtZTogXCJzdGVwc1wiLFxuICAgICAgICBmOiB4ID0+IE1hdGgudGFuaCh4ICogMTMuNSAtIDExKSAvIDQgKyBNYXRoLnRhbmgoeCAqIDEzLjUgLSA2KSAvIDQgKyBNYXRoLnRhbmgoeCAqIDEzLjUpICsgTWF0aC50YW5oKHggKiAxMy41ICsgNikgLyA0ICsgTWF0aC50YW5oKHggKiAxMy41ICsgMTEpIC8gNCxcbiAgICAgICAgZGY6IHggPT4gKE1hdGgucG93KE1hdGguY29zaCh4ICogMTMuNSAtIDExKSwgLTIpIC8gNCArIE1hdGgucG93KE1hdGguY29zaCh4ICogMTMuNSAtIDYpLCAtMikgLyA0ICsgTWF0aC5wb3coTWF0aC5jb3NoKHggKiAxMy41KSwgLTIpICsgTWF0aC5wb3coTWF0aC5jb3NoKHggKiAxMy41ICsgNiksIC0yKSAvIDQgKyBNYXRoLnBvdyhNYXRoLmNvc2goeCAqIDEzLjUgKyAxMSksIC0yKSAvIDQgKSAqIDEzLjUsXG4gICAgICAgIHhyYW5nZTogWy0xMy41IC8gMTMuNSwgMTMuNSAvIDEzLjVdLFxuICAgICAgICB5cmFuZ2U6IFswLCAyLjVdLFxuICAgICAgICBsb3NzOiBiYXNlTG9zc1xuICAgIH0sXG4gICAgc2VhZ3VsbDoge1xuICAgICAgICBuYW1lOiBcInNlYWd1bGxcIixcbiAgICAgICAgZjogeCA9PiBNYXRoLnNpZ24oeCkgKiAoMSAtICgxIC8gKDEgKyBNYXRoLmFicyh4ICogMTYuNSkpKSksXG4gICAgICAgIGRmOiB4ID0+IDE2LjUgLyBNYXRoLnBvdygxICsgTWF0aC5hYnMoeCAqIDE2LjUpLCAyKSxcbiAgICAgICAgeHJhbmdlOiBbLTEyIC8gMTYuNSwgMTIgLyAxNi41XSxcbiAgICAgICAgeXJhbmdlOiBbMCwgMC42XSxcbiAgICAgICAgbG9zczogYmFzZUxvc3NcbiAgICB9LFxuICAgIGJvd2w6IHtcbiAgICAgICAgbmFtZTogXCJib3dsXCIsXG4gICAgICAgIGY6ICB4ID0+IE1hdGguc2luaCh4LzMpLFxuICAgICAgICBkZjogeCA9PiBNYXRoLmNvc2goeC8zKS8zLFxuICAgICAgICB4cmFuZ2U6IFstMyAqIDMsIDMgKiAzXSxcbiAgICAgICAgeXJhbmdlOiBbMCwgNTBdLFxuICAgICAgICBsb3NzOiBiYXNlTG9zc1xuICAgIH0sXG4gICAgZGVlcF9uZXQ6IHtcbiAgICAgICAgbmFtZTogXCJkZWVwX25ldFwiLFxuICAgICAgICBmOiB4ID0+IE1hdGgucG93KE1hdGguYWJzKHgvMysxKSwgMykgLSAxLCAgLy8gZGVwdGggPSA0XG4gICAgICAgIGRmOiB4ID0+IDMvMyAqIE1hdGgucG93KE1hdGguYWJzKHgvMysxKSwgMiksXG4gICAgICAgIC8vIHhyYW5nZTogWy0wLjcqNCwgMC43KjRdLFxuICAgICAgICB4cmFuZ2U6IFstMC45NSozLCAwLjk1KjNdLFxuICAgICAgICB5cmFuZ2U6IFswLCA0XSxcbiAgICAgICAgbG9zczogYmFzZUxvc3NcbiAgICB9XG59IiwiaW1wb3J0IHtWZWN0b3IyRH0gZnJvbSAnLi91dGlsL3R5cGVzJ1xuaW1wb3J0ICogYXMgZDMgZnJvbSAnZDMnXG5cbnR5cGUgRXJyb3JGdW5jID0gKHY6IFZlY3RvcjJEKSA9PiBudW1iZXJcblxuXG5jb25zdCBkZWZhdWx0RXJyb3I6IEVycm9yRnVuYyA9IHYgPT4gdi54ICogdi55IC0gMVxuY29uc3QgZGVmYXVsdFN0ZXAyTHI6IGQzLlNjYWxlTGluZWFyPG51bWJlciwgbnVtYmVyPiA9IGQzLnNjYWxlTGluZWFyKCkuZG9tYWluKFswLCAwLjhdKS5yYW5nZShbMC4wMDEsIDAuMjVdKVxuXG5leHBvcnQgY2xhc3MgVXBkYXRlciB7XG4gICAgZXJyOiBFcnJvckZ1bmMgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRoZSBlcnJvciBmdW5jdGlvbi4gTG9zcyBpcyB0aGUgZXJyb3Igc3F1YXJlZFxuICAgIHE6IG51bWJlciAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAwIC0+IDEsIHdoZXJlIDAgaXMgU0dEIGFuZCAxIGlzIE5HRC4gMC41IGlzIHNxcnQgTkdELiBbc3RlcCA9IC0gZXRhICogSCBeICgtMS9xKSAqIGddIChIID0gMCB3aGVuIHE9MClcbiAgICBldGE6IG51bWJlciAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gYWthICdsZWFybmluZyByYXRlJ1xuICAgIHN0ZXAybHI6IGQzLlNjYWxlTGluZWFyPG51bWJlciwgbnVtYmVyPiAvLyBGb3JtYXQgdGhlIGxlYXJuaW5nIHJhdGUgZm9yIGRpc3BsYXlcblxuICAgIGNvbnN0cnVjdG9yKHE9MCwgZXRhPTAuMSwgZXJyPWRlZmF1bHRFcnJvciwgc3RlcDJscj1kZWZhdWx0U3RlcDJMcikge1xuICAgICAgICB0aGlzLmVyciA9IGVycjtcbiAgICAgICAgdGhpcy5xID0gcTtcbiAgICAgICAgdGhpcy5ldGEgPSBldGE7XG4gICAgICAgIHRoaXMuc3RlcDJsciA9IHN0ZXAybHI7XG4gICAgfVxuXG4gICAgLy8gQW1vdW50IHRvIHNjYWxlIHNpemUgb2YgbGVhcm5pbmcgcmF0ZSBhcnJvd3NcbiAgICBnZXQgbHJTY2FsZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RlcDJscih0aGlzLmV0YSlcbiAgICB9XG5cbiAgICAvLyBUYWtlIGFicyB2YWx1ZSBvZiBlcnJvclxuICAgIC8vIEVycih2OlZlY3RvcjJEKTpudW1iZXIge1xuICAgIC8vICAgICByZXR1cm4gdGhpcy5lcnIodilcbiAgICAvLyB9XG4gICAgLy8gVGFrZSBhYnMgdmFsdWUgb2YgZXJyb3JcbiAgICBzcXJ0RXJyKHY6VmVjdG9yMkQpOm51bWJlciB7XG4gICAgICAgIHJldHVybiBNYXRoLnNxcnQoTWF0aC5hYnModGhpcy5lcnIodikpKVxuICAgIH1cblxuICAgIGFic0Vycih2OlZlY3RvcjJEKTpudW1iZXIge1xuICAgICAgICByZXR1cm4gTWF0aC5hYnModGhpcy5lcnIodikpXG4gICAgfVxuXG4gICAgLy8gQ2FsY3VsYXRlIGVycm9yIHNxdWFyZWRcbiAgICBsb3NzKHY6VmVjdG9yMkQpOm51bWJlcntcbiAgICAgICAgcmV0dXJuIE1hdGgucG93KHRoaXMuZXJyKHYpLCAyKVxuICAgIH1cblxuICAgIGdyYWRpZW50KHY6VmVjdG9yMkQpOlZlY3RvcjJEIHtcbiAgICAgICAgY29uc3QgZXJyID0gdGhpcy5lcnIodik7XG4gICAgICAgIGNvbnN0IGd4ID0gdi55ICogZXJyO1xuICAgICAgICBjb25zdCBneSA9IHYueCAqIGVycjtcbiAgICAgICAgcmV0dXJuIHt4OiBneCwgeTogZ3l9XG4gICAgfVxuXG4gICAgZWlnZW52YWx1ZXModjpWZWN0b3IyRCk6VmVjdG9yMkQge1xuICAgICAgICBjb25zdCBnZXRFdiA9ICh4LCB5KSA9PiBNYXRoLnBvdyh4LCAyKSArIE1hdGgucG93KHksIDIpXG4gICAgICAgIGNvbnN0IGV4ID0gZ2V0RXYodi54LCB2LnkpXG4gICAgICAgIGNvbnN0IGV5ID0gZ2V0RXYodi54LCB2LnkpXG4gICAgICAgIHJldHVybiB7eDogZXgsIHk6IGV5fVxuICAgIH1cblxuICAgIGR2KHY6VmVjdG9yMkQpOiBWZWN0b3IyRCB7XG4gICAgICAgIGNvbnN0IGcgPSB0aGlzLmdyYWRpZW50KHYpXG4gICAgICAgIGNvbnN0IGV2ID0gdGhpcy5laWdlbnZhbHVlcyh2KVxuICAgICAgICBjb25zdCBkdnggPSAtZy54IC8gTWF0aC5hYnMoTWF0aC5wb3coZXYueCwgdGhpcy5xKSlcbiAgICAgICAgY29uc3QgZHZ5ID0gLWcueSAvIE1hdGguYWJzKE1hdGgucG93KGV2LnksIHRoaXMucSkpXG4gICAgICAgIHJldHVybiB7eDogZHZ4LCB5OiBkdnl9XG4gICAgfVxuXG4gICAgbHIodjpWZWN0b3IyRCk6IFZlY3RvcjJEIHtcbiAgICAgICAgY29uc3QgZHYgPSB0aGlzLmR2KHYpXG4gICAgICAgIGNvbnN0IGFic0VyciA9IHRoaXMuYWJzRXJyKHYpXG4gICAgICAgIGNvbnN0IGxyU2NhbGUgPSB0aGlzLnN0ZXAybHIodGhpcy5ldGEpXG4gICAgICAgIGNvbnN0IGxyeCA9IGxyU2NhbGUgKiBkdi54IC8gYWJzRXJyXG4gICAgICAgIGNvbnN0IGxyeSA9IGxyU2NhbGUgKiBkdi55IC8gYWJzRXJyXG4gICAgICAgIHJldHVybiB7eDogbHJ4LCB5OiBscnl9XG4gICAgfVxuXG4gICAgLy8gR2V0IG5leHQgdiB2YWx1ZVxuICAgIG5leHQodjpWZWN0b3IyRCk6IFZlY3RvcjJEIHtcbiAgICAgICAgY29uc3QgZHYgPSB0aGlzLmR2KHYpXG4gICAgICAgIGNvbnN0IG5ld3ggPSB2LnggKyBkdi54ICogdGhpcy5ldGE7XG4gICAgICAgIGNvbnN0IG5ld3kgPSB2LnkgKyBkdi55ICogdGhpcy5ldGE7XG4gICAgICAgIHJldHVybiB7eDogbmV3eCwgeTogbmV3eX1cbiAgICB9XG5cbiAgICBuZXh0THIodjpWZWN0b3IyRCk6IFZlY3RvcjJEIHtcbiAgICAgICAgY29uc3QgZyA9IHRoaXMubHIodik7XG4gICAgICAgIGNvbnN0IHggPSB2LnggKyBnLnggKiAzO1xuICAgICAgICBjb25zdCB5ID0gdi55ICsgZy55ICogMztcbiAgICAgICAgLy8gY29uc3QgZHYgPSB0aGlzLmR2KHYpXG4gICAgICAgIC8vIGNvbnN0IHggPSB2LnggKyBkdi54ICogdGhpcy5ldGE7XG4gICAgICAgIC8vIGNvbnN0IHkgPSB2LnkgKyBkdi55ICogdGhpcy5ldGE7XG4gICAgICAgIHJldHVybiB7eDogeCwgeTogeX1cbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBCbG9ja1VwZGF0ZXIgZXh0ZW5kcyBVcGRhdGVyIHtcbiAgICBlaWdlbnZhbHVlcyh2OlZlY3RvcjJEKTpWZWN0b3IyRCB7XG4gICAgICAgIGNvbnN0IGV4ID0gMiAqIE1hdGgucG93KHYueSwgMilcbiAgICAgICAgY29uc3QgZXkgPSAyICogTWF0aC5wb3codi54LCAyKVxuICAgICAgICByZXR1cm4ge3g6IGV4LCB5OiBleX1cbiAgICB9XG59IiwiaW1wb3J0ICogYXMgZDMgZnJvbSAnZDMnXG5pbXBvcnQgeyBVSWQgfSBmcm9tICcuL3V0aWwvVUlkJ1xuaW1wb3J0IHsgQ29udG91clBsb3QgfSBmcm9tICcuL3Zpcy9Db250b3VyUGxvdCdcbmltcG9ydCB7IEQzU2VsIH0gZnJvbSAnLi91dGlsL3hkMydcbmltcG9ydCB7IEdvbGZIb2xlMUQgfSBmcm9tICcuL3Zpcy9Hb2xmSG9sZTFEJ1xuaW1wb3J0IHsgR29sZkxvc3NlcyB9IGZyb20gJy4vdmlzL0dvbGZMb3NzZXMnXG5pbXBvcnQgeyBHb2xmWERpc3QgfSBmcm9tICcuL3Zpcy9Hb2xmWERpc3QnXG5pbXBvcnQgeyBHb2xmQmFsbCB9IGZyb20gJy4vdmlzL0dvbGZCYWxsJ1xuaW1wb3J0ICogYXMgUiBmcm9tICdyYW1kYSdcbmltcG9ydCB7IFNpbXBsZUV2ZW50SGFuZGxlciB9IGZyb20gJy4vdXRpbC9TaW1wbGVFdmVudEhhbmRsZXInXG5pbXBvcnQgeyBNYW51YWxVcGRhdGVyIH0gZnJvbSAnLi92aXMvTWFudWFsVXBkYXRlcidcbmltcG9ydCB7IGxhbmRzY2FwZXMsIExhbmRzY2FwZSB9IGZyb20gJy4vR29sZkxhbmRzY2FwZXMnXG5cbmNvbnN0IHRvRml4ZWQgPSBSLmN1cnJ5KChuZGlnaXRzLCB4KSA9PiB4LnRvRml4ZWQobmRpZ2l0cykpXG5jb25zdCB0b1EgPSB0b0ZpeGVkKDEpXG5jb25zdCB0b0V0YSA9IHRvRml4ZWQoNClcblxuXG5mdW5jdGlvbiBwbG90UXVpdmVyR3JhcGgoKSB7XG4gICAgY29uc3QgdmlzMSA9IGQzLnNlbGVjdCgnI3ZpczEnKVxuICAgIGNvbnN0IHNlbHMgPSB7XG4gICAgICAgIHF1aXZlclBsb3Q6IHZpczEuc2VsZWN0KCcjY2hhcnQnKSxcbiAgICAgICAgcUlkOiB2aXMxLnNlbGVjdCgnI3EtdmFsJyksXG4gICAgICAgIGV0YUlkOiB2aXMxLnNlbGVjdCgnI2V0YS12YWwnKSxcbiAgICAgICAgcVNsaWRlcjogdmlzMS5zZWxlY3QoJyNxLXNsaWRlcicpLFxuICAgICAgICBldGFTbGlkZXI6IHZpczEuc2VsZWN0KCcjZXRhLXNsaWRlcicpLFxuICAgICAgICBoZXNzVHlwZTogdmlzMS5zZWxlY3QoJyNoZXNzLXR5cGUnKVxuICAgIH1cblxuICAgIGNvbnN0IHZpenMgPSB7XG4gICAgICAgIGdyYXBoOiBuZXcgQ29udG91clBsb3Qoc2Vscy5xdWl2ZXJQbG90KVxuICAgIH1cblxuICAgIGNvbnN0IGRlZmF1bHRzID0ge1xuICAgICAgICAvLyBOb3RlIHRvIGFsc28gY2hhbmdlIHRoZSBkZWZhdWx0IHZhbHVlIGluIHRoZSBodG1sIGZpbGUhXG4gICAgICAgIHE6IDAsXG4gICAgICAgIGV0YTogMC4wNVxuICAgIH1cblxuICAgIGNvbnN0IHNjYWxlcyA9IHtcbiAgICAgICAgcTogZDMuc2NhbGVMaW5lYXIoKS5yYW5nZShbMCwgMTBdKS5kb21haW4oWzAsIDFdKSxcbiAgICAgICAgZXRhOiBkMy5zY2FsZUxpbmVhcigpLnJhbmdlKFsxLCAxMDAwXSkuZG9tYWluKFtNYXRoLnBvdygxMCwgLTUpLCAwLjZdKVxuICAgIH1cblxuICAgIC8vIEluaXRpYWxpemUgZ3JhcGggcGFyYW1ldGVycyB0byBtYXRjaCB0aGUgZGVmYXVsdHNcbiAgICB2aXpzLmdyYXBoLnEoZGVmYXVsdHMucSlcbiAgICB2aXpzLmdyYXBoLmV0YShkZWZhdWx0cy5ldGEpXG4gICAgc2Vscy5xU2xpZGVyLnByb3BlcnR5KCd2YWx1ZScsIHNjYWxlcy5xKGRlZmF1bHRzLnEpKVxuICAgIHNlbHMuZXRhU2xpZGVyLnByb3BlcnR5KCd2YWx1ZScsIHNjYWxlcy5ldGEoZGVmYXVsdHMuZXRhKSlcblxuICAgIHNlbHMucUlkLnRleHQodG9RKGRlZmF1bHRzLnEpKVxuICAgIHNlbHMuZXRhSWQudGV4dCh0b0V0YShkZWZhdWx0cy5ldGEpKVxuXG4gICAgc2Vscy5xU2xpZGVyLm9uKCdpbnB1dCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc3QgbWUgPSBkMy5zZWxlY3QodGhpcylcbiAgICAgICAgY29uc3QgdiA9IHNjYWxlcy5xLmludmVydCgrbWUucHJvcGVydHkoJ3ZhbHVlJykpO1xuICAgICAgICB2aXpzLmdyYXBoLnEodik7XG4gICAgICAgIHNlbHMucUlkLnRleHQoYCR7dG9RKHYpfWApXG4gICAgfSlcblxuICAgIHNlbHMuZXRhU2xpZGVyLm9uKCdpbnB1dCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc3QgbWUgPSBkMy5zZWxlY3QodGhpcylcbiAgICAgICAgY29uc3QgdiA9IHNjYWxlcy5ldGEuaW52ZXJ0KG1lLnByb3BlcnR5KCd2YWx1ZScpKTtcbiAgICAgICAgdml6cy5ncmFwaC5ldGEodilcbiAgICAgICAgc2Vscy5ldGFJZC50ZXh0KGAke3RvRXRhKHYpfWApXG4gICAgfSlcblxuICAgIHNlbHMuaGVzc1R5cGUub24oJ2lucHV0JywgZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zdCBzZWxmID0gZDMuc2VsZWN0KHRoaXMpXG4gICAgICAgIGNvbnN0IHYgPSBzZWxmLnByb3BlcnR5KCd2YWx1ZScpXG4gICAgICAgIHZpenMuZ3JhcGguc2V0VXBkYXRlcih2KVxuICAgIH0pXG59XG5cbmZ1bmN0aW9uIHBsb3RHb2xmSG9sZTNCYWxsKCkge1xuICAgIGNvbnN0IHZpczIgPSBkMy5zZWxlY3QoXCIjdmlzMlwiKTtcbiAgICBjb25zdCBzZWxzID0ge1xuICAgICAgICBjaGFydDogdmlzMi5zZWxlY3QoJyNjaGFydCcpLFxuICAgICAgICBjaGFydFhEaXN0OiB2aXMyLnNlbGVjdCgnI2NoYXJ0LXhkaXN0JyksXG4gICAgICAgIGNoYXJ0TG9zc2VzOiB2aXMyLnNlbGVjdCgnI2NoYXJ0LWxvc3NlcycpLFxuICAgICAgICBsYW5kc2NhcGVTZWxlY3RvcjogdmlzMi5zZWxlY3QoJy5sYW5kc2NhcGUtc2VsZWN0JylcbiAgICB9XG5cbiAgICBjb25zdCBldmVudEhhbmRsZXIgPSBuZXcgU2ltcGxlRXZlbnRIYW5kbGVyKDxFbGVtZW50PnZpczIubm9kZSgpKVxuICAgIGNvbnN0IHZpenMgPSB7XG4gICAgICAgIGdyYXBoOiBuZXcgR29sZkhvbGUxRChzZWxzLmNoYXJ0LCBldmVudEhhbmRsZXIsIHt9LCBVSWQudWlkKCkpLFxuICAgICAgICBjaGFydFhEaXN0OiBuZXcgR29sZlhEaXN0KHNlbHMuY2hhcnRYRGlzdCwgZXZlbnRIYW5kbGVyKSxcbiAgICAgICAgY2hhcnRMb3NzZXM6IG5ldyBHb2xmTG9zc2VzKHNlbHMuY2hhcnRMb3NzZXMsIGV2ZW50SGFuZGxlcilcbiAgICB9XG5cbiAgICBpbnRlcmZhY2UgR29sZkRlZmF1bHRzIHtcbiAgICAgICAgbGFuZHNjYXBlOiBzdHJpbmdcbiAgICAgICAgcXM6IG51bWJlcltdXG4gICAgICAgIGNsYXNzTmFtZXM6IHN0cmluZ1tdXG4gICAgICAgIGV0YXM/OiBudW1iZXJbXVxuICAgIH1cblxuXHQvLyBDb3JyZXNwb25kcyB0byBxcyA9IFswLCAwLjUsIDFdXG5cdGNvbnN0IGRlZmF1bHRFdGEgPSB7XG5cdFx0c2VhZ3VsbDogWzAuMDA1LCAwLjAwNSwgMC4wMDVdLFxuXHRcdGhvbGU6IFswLjAwNSwgMC4wMDUsIDAuMDA1XSxcblx0XHRzdGVwczogWzAuMDA1LCAwLjAwNSwgMC4wMDVdLFxuXHRcdGJvd2w6IFswLjAzLCAwLjAzLCAwLjAzXSxcblx0XHRkZWVwX25ldDogWzAuMDEsIDAuMDEsIDAuMDFdLFxuXHR9XG5cbiAgICBjb25zdCBkZWZhdWx0czogR29sZkRlZmF1bHRzID0ge1xuICAgICAgICBsYW5kc2NhcGU6IFwic2VhZ3VsbFwiLFxuICAgICAgICBxczogWzAsIDAuNSwgMV0sXG4gICAgICAgIGNsYXNzTmFtZXM6IFsnZ29sZi1iYWxsLXNnZCcsICdnb2xmLWJhbGwtc25nZCcsICdnb2xmLWJhbGwtbmdkJ10sIC8vIERvbid0IGNoYW5nZSB0aGVzZSB1bmxlc3MgeW91IHdhbnQgdG8gcGxheSB3aXRoIENTUyEhXG4gICAgfVxuICAgIGRlZmF1bHRzLmV0YXMgPSBkZWZhdWx0RXRhW2RlZmF1bHRzLmxhbmRzY2FwZV1cblxuICAgIGNvbnN0IGRlZmF1bHRMYW5kc2NhcGUgPSBsYW5kc2NhcGVzW2RlZmF1bHRzLmxhbmRzY2FwZV1cblxuICAgIC8vQHRzLWlnbm9yZVxuICAgIGNvbnN0IGRlZmF1bHRCYWxscyA9IGQzLnppcChkZWZhdWx0cy5xcywgZGVmYXVsdHMuZXRhcywgZGVmYXVsdHMuY2xhc3NOYW1lcykubWFwKCh4KSA9PiBuZXcgR29sZkJhbGwobmV3IE1hbnVhbFVwZGF0ZXIoZGVmYXVsdExhbmRzY2FwZS5mLCBkZWZhdWx0TGFuZHNjYXBlLmRmLCB4WzBdLCB4WzFdKSwgeFsyXSkpXG5cbiAgICB2aXpzLmdyYXBoLmRhdGEoZGVmYXVsdEJhbGxzKVxuXG4gICAgLy8gQXR0YWNoIGdvbGZiYWxsIGluZm8gdG8gbG9zcyB0cmFja2VyXG4gICAgZXZlbnRIYW5kbGVyLmJpbmQoJ2xvc3MtY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICB2aXpzLmNoYXJ0WERpc3QuY2xlYXJQYXRocygpXG4gICAgICAgIHZpenMuY2hhcnRMb3NzZXMuY2xlYXJQYXRocygpXG4gICAgfSlcblxuICAgIC8vIENvbmZpZ3VyZSBodG1sIHBhZ2UgdG8gd29yayB3aXRoIGRlZmF1bHRzXG4gICAgc2Vscy5sYW5kc2NhcGVTZWxlY3Rvci5wcm9wZXJ0eSgndmFsdWUnLCBkZWZhdWx0cy5sYW5kc2NhcGUpXG4gICAgdml6cy5ncmFwaC5sYW5kc2NhcGUobGFuZHNjYXBlc1tkZWZhdWx0cy5sYW5kc2NhcGVdKVxuXG4gICAgbGV0IHJ1bm5pbmdTdHJlYW1zID0gW11cblxuICAgIC8vIEFzc2lnbiBzdHJlYW1zXG4gICAgY29uc3QgYXNzaWduU3RyZWFtcyA9IChncmFwaDpHb2xmSG9sZTFELCBjdXJyZW50U3RyZWFtcz1bXSkgPT4ge1xuICAgICAgICBjb25zdCBzdHJlYW1zID0gZ3JhcGguZGF0YSgpLm1hcChiID0+IGIuc3RyZWFtKVxuXG4gICAgICAgIGNvbnN0IHBsb3R0ZXIgPSB7XG4gICAgICAgICAgICBuZXh0OiBkID0+IHtcbiAgICAgICAgICAgICAgICB2aXpzLmNoYXJ0WERpc3QucGxvdFBhdGgoZCwgZ3JhcGguc2NhbGVzLmJhc2UybWF0aC54LmludmVydClcbiAgICAgICAgICAgICAgICB2aXpzLmNoYXJ0TG9zc2VzLnBsb3RQYXRoKGQsIGdyYXBoLnNjYWxlcy5iYXNlMmxvc3MpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjdXJyZW50U3RyZWFtcy5mb3JFYWNoKHMgPT4gcy51bnN1YnNjcmliZSgpKVxuXG4gICAgICAgIGNvbnN0IGFjdGl2YXRlZFN0cmVhbXMgPSBzdHJlYW1zLm1hcChzID0+IHtcbiAgICAgICAgICAgIHJldHVybiBzLnN1YnNjcmliZShwbG90dGVyKVxuICAgICAgICB9KVxuICAgICAgICByZXR1cm4gYWN0aXZhdGVkU3RyZWFtc1xuICAgIH1cblxuICAgIC8vIEdhdGhlciBpbnRlcmFjdGl2aXR5IGZvciB0aGUgZ29sZiBiYWxsIHBsb3RcbiAgICBzZWxzLmxhbmRzY2FwZVNlbGVjdG9yLm9uKCdpbnB1dCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc3Qgc2VsZiA9IGQzLnNlbGVjdCh0aGlzKVxuICAgICAgICBjb25zdCB2ID0gc2VsZi5wcm9wZXJ0eSgndmFsdWUnKVxuICAgICAgICB2aXpzLmNoYXJ0TG9zc2VzLnJlc2V0WHJhbmdlXygpXG4gICAgICAgIHZpenMuY2hhcnRYRGlzdC5yZXNldFhyYW5nZV8oKVxuICAgICAgICB2aXpzLmdyYXBoLmxhbmRzY2FwZShsYW5kc2NhcGVzW3ZdKVxuICAgICAgICB2aXpzLmdyYXBoLmRhdGFGcm9tQmFzZSh2aXpzLmdyYXBoLmRhdGFUb0Jhc2VfKCkpXG4gICAgICAgIHJ1bm5pbmdTdHJlYW1zID0gYXNzaWduU3RyZWFtcyh2aXpzLmdyYXBoLCBydW5uaW5nU3RyZWFtcylcbiAgICB9KVxuICAgIHJ1bm5pbmdTdHJlYW1zID0gYXNzaWduU3RyZWFtcyh2aXpzLmdyYXBoLCBydW5uaW5nU3RyZWFtcylcbn1cblxuZnVuY3Rpb24gcGxvdEdvbGZIb2xlU2xpZGVyKCkge1xuICAgIGNvbnN0IHZpczMgPSBkMy5zZWxlY3QoXCIjdmlzM1wiKTtcblxuICAgIGNvbnN0IHNlbHMgPSB7XG4gICAgICAgIGNoYXJ0OiB2aXMzLnNlbGVjdCgnI2NoYXJ0JyksXG4gICAgICAgIGNoYXJ0TG9zc2VzOiB2aXMzLnNlbGVjdCgnI2NoYXJ0LWxvc3NlcycpLFxuICAgICAgICBjaGFydFhEaXN0OiB2aXMzLnNlbGVjdCgnI2NoYXJ0LXhkaXN0JyksXG4gICAgICAgIHFJZDogdmlzMy5zZWxlY3QoJyNxLXZhbCcpLFxuICAgICAgICBldGFJZDogdmlzMy5zZWxlY3QoJyNldGEtdmFsJyksXG4gICAgICAgIHFTbGlkZXI6IHZpczMuc2VsZWN0KCcjcS1zbGlkZXInKSxcbiAgICAgICAgZXRhU2xpZGVyOiB2aXMzLnNlbGVjdCgnI2V0YS1zbGlkZXInKSxcbiAgICAgICAgbGFuZHNjYXBlU2VsZWN0b3I6IHZpczMuc2VsZWN0KCcubGFuZHNjYXBlLXNlbGVjdCcpXG4gICAgfVxuXG4gICAgY29uc3QgZXZlbnRIYW5kbGVyID0gbmV3IFNpbXBsZUV2ZW50SGFuZGxlcig8RWxlbWVudD52aXMzLm5vZGUoKSlcblxuICAgIGNvbnN0IHZpenMgPSB7XG4gICAgICAgIGdyYXBoOiBuZXcgR29sZkhvbGUxRChzZWxzLmNoYXJ0LCBldmVudEhhbmRsZXIsIHsgbWF4SXRlcjogMS41ZTMgfSwgVUlkLnVpZCgpKSxcbiAgICAgICAgY2hhcnRMb3NzZXM6IG5ldyBHb2xmTG9zc2VzKHNlbHMuY2hhcnRMb3NzZXMsIGV2ZW50SGFuZGxlciksXG4gICAgICAgIGNoYXJ0WERpc3Q6IG5ldyBHb2xmWERpc3Qoc2Vscy5jaGFydFhEaXN0LCBldmVudEhhbmRsZXIpXG4gICAgfVxuXG4gICAgY29uc3QgZGVmYXVsdHMgPSB7XG4gICAgICAgIC8vIE5vdGUgdG8gYWxzbyBjaGFuZ2UgdGhlIGRlZmF1bHQgdmFsdWUgaW4gdGhlIGh0bWwgZmlsZSFcbiAgICAgICAgbGFuZHNjYXBlOiBcInNlYWd1bGxcIixcbiAgICAgICAgcTogMC41LFxuICAgICAgICBldGE6IDAuMDFcbiAgICB9XG5cbiAgICAvLyBBdHRhY2ggZ29sZmJhbGwgaW5mbyB0byBsb3NzIHRyYWNrZXJcbiAgICBldmVudEhhbmRsZXIuYmluZCgnbG9zcy1jbGljaycsIChlKSA9PiB7XG4gICAgICAgIHZpenMuY2hhcnRYRGlzdC5jbGVhclBhdGhzKClcbiAgICAgICAgdml6cy5jaGFydExvc3Nlcy5jbGVhclBhdGhzKClcbiAgICB9KVxuXG4gICAgLy8gUHV0IGRhdGEgaW50byB2aXpcbiAgICB2aXpzLmdyYXBoLmRhdGEoW25ldyBHb2xmQmFsbChuZXcgTWFudWFsVXBkYXRlcihsYW5kc2NhcGVzLmhvbGUuZiwgbGFuZHNjYXBlcy5ob2xlLmRmLCBkZWZhdWx0cy5xLCBkZWZhdWx0cy5ldGEpLCBcImdvbGYtYmFsbFwiKV0pXG5cbiAgICAvLyBjb25zdCBldGFSYW5nZSA9IFstNSwgMl0ubWFwKHggPT4gTWF0aC5wb3coMTAsIHgpKVxuICAgIGNvbnN0IGV0YVJhbmdlID0gWy0zLCAwXS5tYXAoeCA9PiBNYXRoLnBvdygxMCwgeCkpXG4gICAgY29uc3Qgc2NhbGVzID0ge1xuICAgICAgICBxOiBkMy5zY2FsZUxpbmVhcigpLnJhbmdlKFswLCAxMF0pLmRvbWFpbihbMCwgMV0pLFxuICAgICAgICBldGE6IGQzLnNjYWxlTG9nKCkucmFuZ2UoWzEsIDEwMDBdKS5kb21haW4oZXRhUmFuZ2UpLmJhc2UoMTApXG4gICAgfVxuXG4gICAgLy8gSW5pdGlhbGl6ZSBncmFwaCBwYXJhbWV0ZXJzIHRvIG1hdGNoIHRoZSBkZWZhdWx0c1xuICAgIHZpenMuZ3JhcGgubGFuZHNjYXBlKGxhbmRzY2FwZXNbZGVmYXVsdHMubGFuZHNjYXBlXSlcbiAgICBzZWxzLmxhbmRzY2FwZVNlbGVjdG9yLnByb3BlcnR5KCd2YWx1ZScsIGRlZmF1bHRzLmxhbmRzY2FwZSlcblxuICAgIHNlbHMucVNsaWRlci5wcm9wZXJ0eSgndmFsdWUnLCBzY2FsZXMucShkZWZhdWx0cy5xKSlcbiAgICBzZWxzLmV0YVNsaWRlci5wcm9wZXJ0eSgndmFsdWUnLCBzY2FsZXMuZXRhKGRlZmF1bHRzLmV0YSkpXG4gICAgc2Vscy5xSWQudGV4dCh0b1EoZGVmYXVsdHMucSkpXG4gICAgc2Vscy5ldGFJZC50ZXh0KHRvRXRhKGRlZmF1bHRzLmV0YSkpXG5cbiAgICAvLyBBc3NpZ24gc3RyZWFtc1xuICAgIGxldCBydW5uaW5nU3RyZWFtcyA9IFtdXG4gICAgY29uc3QgYXNzaWduU3RyZWFtcyA9IChncmFwaDpHb2xmSG9sZTFELCBjdXJyZW50U3RyZWFtcz1bXSkgPT4ge1xuICAgICAgICBjb25zdCBzdHJlYW1zID0gZ3JhcGguZGF0YSgpLm1hcChiID0+IGIuc3RyZWFtKVxuXG4gICAgICAgIGNvbnN0IHBsb3R0ZXIgPSB7XG4gICAgICAgICAgICBuZXh0OiBkID0+IHtcbiAgICAgICAgICAgICAgICB2aXpzLmNoYXJ0WERpc3QucGxvdFBhdGgoZCwgZ3JhcGguc2NhbGVzLmJhc2UybWF0aC54LmludmVydClcbiAgICAgICAgICAgICAgICB2aXpzLmNoYXJ0TG9zc2VzLnBsb3RQYXRoKGQsIGdyYXBoLnNjYWxlcy5iYXNlMmxvc3MpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjdXJyZW50U3RyZWFtcy5mb3JFYWNoKHMgPT4gcy51bnN1YnNjcmliZSgpKVxuXG4gICAgICAgIGNvbnN0IGFjdGl2YXRlZFN0cmVhbXMgPSBzdHJlYW1zLm1hcChzID0+IHtcbiAgICAgICAgICAgIHJldHVybiBzLnN1YnNjcmliZShwbG90dGVyKVxuICAgICAgICB9KVxuXG4gICAgICAgIHJldHVybiBhY3RpdmF0ZWRTdHJlYW1zXG4gICAgfVxuXG4gICAgLy8gQWRqdXN0IHNsaWRlciByZWFjdGl2aXR5XG4gICAgc2Vscy5xU2xpZGVyLm9uKCdpbnB1dCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc3QgbWUgPSBkMy5zZWxlY3QodGhpcylcbiAgICAgICAgY29uc3QgdiA9IHNjYWxlcy5xLmludmVydChtZS5wcm9wZXJ0eSgndmFsdWUnKSk7XG4gICAgICAgIHZpenMuZ3JhcGgucSh2KVxuICAgICAgICBzZWxzLnFJZC50ZXh0KGAke3RvUSh2KX1gKVxuICAgIH0pXG5cbiAgICBzZWxzLmV0YVNsaWRlci5vbignaW5wdXQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnN0IG1lID0gZDMuc2VsZWN0KHRoaXMpXG4gICAgICAgIGNvbnN0IHYgPSBzY2FsZXMuZXRhLmludmVydChtZS5wcm9wZXJ0eSgndmFsdWUnKSk7XG4gICAgICAgIHZpenMuZ3JhcGguZXRhKHYpXG4gICAgICAgIHNlbHMuZXRhSWQudGV4dChgJHt0b0V0YSh2KX1gKVxuICAgIH0pXG5cbiAgICBzZWxzLmxhbmRzY2FwZVNlbGVjdG9yLm9uKCdpbnB1dCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc3Qgc2VsZiA9IGQzLnNlbGVjdCh0aGlzKVxuICAgICAgICBjb25zdCB2ID0gc2VsZi5wcm9wZXJ0eSgndmFsdWUnKVxuICAgICAgICB2aXpzLmNoYXJ0TG9zc2VzLnJlc2V0WHJhbmdlXygpXG4gICAgICAgIHZpenMuY2hhcnRYRGlzdC5yZXNldFhyYW5nZV8oKVxuICAgICAgICB2aXpzLmdyYXBoLmxhbmRzY2FwZShsYW5kc2NhcGVzW3ZdKVxuICAgICAgICB2aXpzLmdyYXBoLmRhdGFGcm9tQmFzZSh2aXpzLmdyYXBoLmRhdGFUb0Jhc2VfKCkpXG4gICAgICAgIHJ1bm5pbmdTdHJlYW1zID0gYXNzaWduU3RyZWFtcyh2aXpzLmdyYXBoLCBydW5uaW5nU3RyZWFtcylcbiAgICB9KVxuICAgIHJ1bm5pbmdTdHJlYW1zID0gYXNzaWduU3RyZWFtcyh2aXpzLmdyYXBoLCBydW5uaW5nU3RyZWFtcylcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1haW4oKSB7XG4gICAgY29uc29sZS5sb2coXCJSVU5OSU5HXCIpO1xuICAgIHBsb3RRdWl2ZXJHcmFwaCgpO1xuICAgIHBsb3RHb2xmSG9sZTNCYWxsKCk7XG4gICAgcGxvdEdvbGZIb2xlU2xpZGVyKCk7XG59XG4iLCJpbXBvcnQgKiBhcyBkMyBmcm9tICdkMydcbmltcG9ydCB7IE1hcmdpbkluZm8gfSBmcm9tICcuL3V0aWwvU1ZHVmlzQ29tcG9uZW50J1xuaW1wb3J0IHsgRDNTZWwgfSBmcm9tICcuL3V0aWwveGQzJ1xuaW1wb3J0IHtyYW5nZX0gZnJvbSAncmFtZGEnXG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRTVkcoZGl2OiBzdHJpbmcsIHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyLCBtYXJnaW46IE1hcmdpbkluZm8pOiBEM1NlbCB7XG5cbiAgICB2YXIgc3ZnID0gZDMuc2VsZWN0KGRpdikuYXBwZW5kKFwic3ZnXCIpXG4gICAgICAgIC5hdHRyKFwid2lkdGhcIiwgXCIxMDAlXCIpXG4gICAgICAgIC5hdHRyKFwiaGVpZ2h0XCIsIFwiMTAwJVwiKVxuICAgICAgICAuYXR0cihcInZpZXdCb3hcIiwgXCIwIDAgXCIgKyAod2lkdGggKyBtYXJnaW4ubGVmdCArIG1hcmdpbi5yaWdodCkgKyBcIiBcIiArIChoZWlnaHQgKyBtYXJnaW4udG9wICsgbWFyZ2luLmJvdHRvbSkpXG4gICAgICAgIC5hdHRyKFwicHJlc2VydmVBc3BlY3RSYXRpb1wiLCBcInhNaWRZTWlkIG1lZXRcIilcbiAgICAgICAgLmFwcGVuZChcImdcIilcbiAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgXCJ0cmFuc2xhdGUoXCIgKyBtYXJnaW4ubGVmdCArIFwiLFwiICsgbWFyZ2luLnRvcCArIFwiKVwiKTtcblxuICAgIHJldHVybiBzdmc7XG59XG5cbnR5cGUgRG9tYWluUmFuZ2UgPSBudW1iZXJbXVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q29udG91clZhbHVlcyhuOiBudW1iZXIsIG06IG51bWJlciwgeHJhbmdlOiBEb21haW5SYW5nZSwgeXJhbmdlOiBEb21haW5SYW5nZSwgZnVuYzogKHg6IG51bWJlciwgeTogbnVtYmVyKSA9PiBudW1iZXIpIHtcbiAgICBsZXQgdmFsdWVzID0gbmV3IEFycmF5KG4gKiBtKVxuXG4gICAgZm9yICh2YXIgaiA9IDAuNSwgayA9IDA7IGogPCBtOyArK2opIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDAuNTsgaSA8IG47ICsraSwgKytrKSB7XG4gICAgICAgICAgICBjb25zdCB4dmFsID0gKChpIC8gbikgKiAoeHJhbmdlWzFdIC0geHJhbmdlWzBdKSkgKyB4cmFuZ2VbMF07XG4gICAgICAgICAgICBjb25zdCB5dmFsID0gKDEgLSAoaiAvIG0pKSAqICh5cmFuZ2VbMV0gLSB5cmFuZ2VbMF0pICsgeXJhbmdlWzBdO1xuICAgICAgICAgICAgdmFsdWVzW2tdID0gZnVuYyh4dmFsLCB5dmFsKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB2YWx1ZXNcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVuaWZvcm0oYSwgYikge1xuICAgIHJldHVybiBNYXRoLnJhbmRvbSgpICogKGIgLSBhKSArIGE7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZW5Vbmlmb3JtKGE6bnVtYmVyLCBiOm51bWJlciwgbjpudW1iZXIpIHtcbiAgICByZXR1cm4gcmFuZ2UoMCwgbikubWFwKHggPT4ge3JldHVybiB7eDogdW5pZm9ybShhLCBiKSwgeTogdW5pZm9ybShhLGIpfX0pXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBub3JtYWwobWVhbiwgdmFyaWFuY2UpIHtcbiAgICB2YXIgcyA9IDA7XG4gICAgd2hpbGUgKHMgPT0gMCB8fCBzID4gMSkge1xuICAgICAgICB2YXIgdSA9IHVuaWZvcm0oLTEsMSksXG4gICAgICAgIHYgPSB1bmlmb3JtKC0xLDEpO1xuICAgICAgICBzID0gdSAqIHUgKyB2ICogdjtcbiAgICB9XG5cbiAgICB2YXIgc3RhbmRhcmQgPSBNYXRoLnNxcnQoLTIgKiBNYXRoLmxvZyhzKSAvIHMpICogdTtcbiAgICByZXR1cm4gbWVhbiArIE1hdGguc3FydCh2YXJpYW5jZSkgKiBzdGFuZGFyZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdlbk5vcm1hbChtZWFuOm51bWJlciwgdmFyaWFuY2U6bnVtYmVyLCBuOm51bWJlcikge1xuICAgIHJldHVybiByYW5nZSgwLCBuKS5tYXAoeCA9PiB7cmV0dXJuIHt4OiBub3JtYWwobWVhbiwgdmFyaWFuY2UpLCB5OiB1bmlmb3JtKG1lYW4sdmFyaWFuY2UpfX0pXG59IiwiaW1wb3J0ICogYXMgZDMgZnJvbSAnZDMnXG5pbXBvcnQgeyBWZWN0b3IyRCB9IGZyb20gJy4vdHlwZXMnXG5pbXBvcnQgeyBTVkdWaXNDb21wb25lbnQsIFNWR09wdGlvbnMsIE1hcmdpbkluZm8gfSBmcm9tIFwiLi9TVkdWaXNDb21wb25lbnRcIlxuXG5leHBvcnQgaW50ZXJmYWNlIENoYXJ0T3B0aW9ucyBleHRlbmRzIFNWR09wdGlvbnMge1xuICAgIHhyYW5nZTogW251bWJlciwgbnVtYmVyXVxuICAgIHlyYW5nZTogW251bWJlciwgbnVtYmVyXVxuICAgIHBhZDogTWFyZ2luSW5mbyAgICAgICAgICAgICAvLyBEaXN0YW5jZSBmcm9tIGVkZ2VzLiBEZW1hcmNhdGUgd2hlbiB0aGluZ3MgYXJlIHRvbyBjbG9zZSB0byB0aGUgZWRnZVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIENoYXJ0U2NhbGVzIHtcbiAgICB4PzogZDMuU2NhbGVMaW5lYXI8bnVtYmVyLCBudW1iZXI+LFxuICAgIHk/OiBkMy5TY2FsZUxpbmVhcjxudW1iZXIsIG51bWJlcj4sXG59XG4vKipcbiAqIENyZWF0ZSBhIGNsYXNzIHRoYXQgY2FuIGJlIHVzZWQgZm9yIHBsb3R0aW5nIGNoYXJ0cyAobGluZSBncmFwaHMsIGJhciBncmFwaHMsIGV0Yy4pLlxuICovXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQ2hhcnQyRDxEYXRhSW50ZXJmYWNlPiBleHRlbmRzIFNWR1Zpc0NvbXBvbmVudDxEYXRhSW50ZXJmYWNlPiB7XG4gICAgb3B0aW9uczogQ2hhcnRPcHRpb25zXG4gICAgc2NhbGVzOiBDaGFydFNjYWxlc1xuXG4gICAgLy8gUHV0IGEgdmVjdG9yIGludG8gdGhlIGNvb3JkaW5hdGUgc3lzdGVtIHVzZWQgYnkgdGhlIHZpc3VhbGl6YXRpb25cbiAgICBpbnRvVmlzKHY6IFZlY3RvcjJEKSB7XG4gICAgICAgIHJldHVybiB7IHg6IHRoaXMuc2NhbGVzLngodi54KSwgeTogdGhpcy5zY2FsZXMueSh2LnkpIH1cbiAgICB9XG5cbiAgICAvLyBUYWtlIGEgdmVjdG9yIGluIHRoZSBjb29yZGluYXRlIHN5c3RlbSBhbmQgcmV0dXJuIGl0IHRvIHRoZSBtYXRoIGNvb3JkaW5hdGVzXG4gICAgaW50b01hdGgodjogVmVjdG9yMkQpIHtcbiAgICAgICAgcmV0dXJuIHsgeDogdGhpcy5zY2FsZXMueC5pbnZlcnQodi54KSwgeTogdGhpcy5zY2FsZXMueS5pbnZlcnQodi55KSB9XG4gICAgfVxuXG4gICAgLy8gSW5zdGFudGlhdGUgdGhlIGF4ZXMgb2YgdGhlIGNoYXJ0LiBSZWltcGxlbWVudCBkZXBlbmRpbmcgb24gaG93IHdlIHdhbnQgdGhlIGF4ZXMgdG8gYXBwZWFyXG4gICAgcHJvdGVjdGVkIGFic3RyYWN0IGNyZWF0ZUF4ZXMoKVxuXG4gICAgLy8gSW5zdGFudGlhdGUgdGhlIHNjYWxlcyBmcm9tIHRoZSB4cmFuZ2UgYW5kIHRoZSB5cmFuZ2VcbiAgICBwcm90ZWN0ZWQgYWJzdHJhY3QgY3JlYXRlU2NhbGVzKClcbn0iLCJpbXBvcnQgeyBEM1NlbCB9IGZyb20gXCIuL3hkM1wiXG5pbXBvcnQgeyBWaXNDb21wb25lbnQgfSBmcm9tIFwiLi9WaXNDb21wb25lbnRcIlxuaW1wb3J0IHsgU2ltcGxlRXZlbnRIYW5kbGVyIH0gZnJvbSBcIi4vU2ltcGxlRXZlbnRIYW5kbGVyXCI7XG5pbXBvcnQgeyBTVkcgfSBmcm9tIFwiLi9TVkdwbHVzXCI7XG5cbmV4cG9ydCB0eXBlIE1hcmdpbkluZm8gPSB7XG4gICAgdG9wOm51bWJlclxuICAgIHJpZ2h0Om51bWJlclxuICAgIGJvdHRvbTpudW1iZXJcbiAgICBsZWZ0Om51bWJlclxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNWR09wdGlvbnMge1xuICAgIG1hcmdpbjogTWFyZ2luSW5mb1xuICAgIG1heFdpZHRoOiBudW1iZXIgICAgICAgIC8vIFRoZSB0b3RhbCB3aWR0aCBvZiB0aGUgY29tcG9uZW50XG4gICAgbWF4SGVpZ2h0OiBudW1iZXIgICAgICAgLy8gVGhlIHRvdGFsIGhlaWdodCBvZiB0aGUgY29tcG9uZW50XG4gICAgd2lkdGg/OiBudW1iZXIgICAgICAgICAgLy8gVGhlIHRvdGFsIHdpZHRoIC0gYXBwbGljYWJsZSBtYXJnaW5zXG4gICAgaGVpZ2h0PzogbnVtYmVyICAgICAgICAgLy8gVGhlIHRvdGFsIGhlaWdodCAtIGFwcGxpY2FibGUgbWFyZ2luc1xufVxuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgU1ZHVmlzQ29tcG9uZW50PERhdGFJbnRlcmZhY2U+IGV4dGVuZHMgVmlzQ29tcG9uZW50PERhdGFJbnRlcmZhY2U+IHtcbiAgICBwcm90ZWN0ZWQgbGF5ZXJzOiB7IG1haW4/OiBEM1NlbCwgZmc/OiBEM1NlbCwgYmc/OiBEM1NlbCwgW2tleTogc3RyaW5nXTogRDNTZWwgfTtcbiAgICBwcm90ZWN0ZWQgc3ZnOiBEM1NlbFxuICAgIHByb3RlY3RlZCBvcHRpb25zOiBTVkdPcHRpb25zID0ge1xuICAgICAgICBtYXJnaW46IHsgdG9wOiAwLCByaWdodDogMCwgYm90dG9tOiAwLCBsZWZ0OiAwIH0sXG4gICAgICAgIG1heFdpZHRoOiA0NTAsXG4gICAgICAgIG1heEhlaWdodDogNDUwLFxuICAgIH1cblxuICAgIHByb3RlY3RlZCBjb25zdHJ1Y3RvcihkM3BhcmVudDogRDNTZWwsIGV2ZW50SGFuZGxlcj86IFNpbXBsZUV2ZW50SGFuZGxlciwgb3B0aW9uczoge30gPSB7fSwgSUQ9MCkge1xuICAgICAgICBzdXBlcihkM3BhcmVudCwgZXZlbnRIYW5kbGVyLCBJRClcbiAgICB9XG5cbiAgICAvKiogXG4gICAgICogTXVzdCBiZSBjYWxsZWQgaW1tZWRpYXRlbHkgYWZ0ZXIgdGhlIGBzdXBlcigpYCBjb25zdHJ1Y3RvciBjYWxsIG9mIGluaGVyZXRpbmcgY2xhc3Nlcy5cbiAgICAgKiBcbiAgICAgKiAtIENhbGN1bGF0ZXMgaGVpZ2h0IGFuZCB3aWR0aCBmb3Igb3B0aW9uc1xuICAgICAqIC0gQWRkcyAnc3ZnJyBhbmQgJ2Jhc2UnIG9iamVjdHMgdG8gdGhlIGRpdi5cbiAgICAgKiAtIEFkZHMgbGF5ZXJzIG9uIHRoZSBiYXNlIHRvIHdvcmsgd2l0aCBpZiBwYXNzZWRcbiAgICAgKiAtIFJ1bnMgZGVmaW5lZCBzdGF0aWMgaW5pdGlhbGl6YXRpb24gZGVmaW5lZCBpbiBgaW5pdCgpYFxuICAgICAqL1xuICAgIHByb3RlY3RlZCBpbml0U1ZHKG9wdGlvbnMgPSB7fSwgZGVmYXVsdExheWVycyA9IFtdKSB7XG4gICAgICAgIHRoaXMudXBkYXRlT3B0aW9ucyhvcHRpb25zKVxuICAgICAgICBjb25zdCBvcCA9IHRoaXMub3B0aW9ucztcbiAgICAgICAgb3Aud2lkdGggPSBvcC5tYXhXaWR0aCAtIChvcC5tYXJnaW4ubGVmdCArIG9wLm1hcmdpbi5yaWdodClcbiAgICAgICAgb3AuaGVpZ2h0ID0gb3AubWF4SGVpZ2h0IC0gKG9wLm1hcmdpbi50b3AgKyBvcC5tYXJnaW4uYm90dG9tKVxuXG4gICAgICAgIHRoaXMuc3ZnID0gU1ZHLmFkZFNWRyh0aGlzLnBhcmVudCwgb3Aud2lkdGgsIG9wLmhlaWdodCwgb3AubWFyZ2luKVxuICAgICAgICB0aGlzLmJhc2UgPSBTVkcuZ3JvdXAodGhpcy5zdmcsICcnKTsgLy8gTGV0IEhUTUwgYXV0aG9yIGFzc2lnbiB0aGUgY2xhc3MgbmFtZSBhbmQgSURcbiAgICAgICAgdGhpcy5sYXllcnMgPSB7fTtcbiAgICAgICAgaWYgKGRlZmF1bHRMYXllcnMpIHtcbiAgICAgICAgICAgIC8vIGNvbnN0cnVjdGlvbiBvcmRlciBpcyBpbXBvcnRhbnQgIVxuICAgICAgICAgICAgZGVmYXVsdExheWVycy5mb3JFYWNoKGxheWVyID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmxheWVyc1tsYXllcl0gPSBTVkcuZ3JvdXAodGhpcy5iYXNlLCBsYXllcik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuaW5pdCgpXG4gICAgfVxufSIsImltcG9ydCAqIGFzIGQzIGZyb20gXCJkM1wiXG5pbXBvcnQgKiBhcyBSIGZyb20gJ3JhbWRhJ1xuaW1wb3J0IHtNYXJnaW5JbmZvfSBmcm9tICcuL1NWR1Zpc0NvbXBvbmVudCdcbmltcG9ydCB7RDNTZWx9IGZyb20gJy4uL3V0aWwveGQzJ1xuXG4vKipcbiAqIENyZWF0ZWQgYnkgaGVuIG9uIDUvMTUvMTcuXG4gKiBNb2RpZmllZCBieSBob28gb24gNC8xNi8xOS5cbiAqL1xuXG5leHBvcnQgY2xhc3MgU1ZHIHtcbiAgICBcbiAgICBzdGF0aWMgdHJhbnNsYXRlKHg6bnVtYmVyLCB5Om51bWJlcik6c3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIGB0cmFuc2xhdGUoJHt4fSwke3l9KWBcbiAgICB9XG5cbiAgICBzdGF0aWMgcm90YXRlKGRlZzpudW1iZXIsIG9yaWc/Ont4Om51bWJlciwgeTpudW1iZXJ9KTpzdHJpbmcge1xuICAgICAgICBpZiAob3JpZyA9PSBudWxsKSBcbiAgICAgICAgICAgIHJldHVybiBgcm90YXRlKCR7ZGVnfSlgXG5cbiAgICAgICAgcmV0dXJuIGByb3RhdGUoJHtkZWd9LCR7b3JpZy54fSwke29yaWcueX0pYFxuICAgIH1cblxuICAgIHN0YXRpYyBza2V3KGRlZ3g6bnVtYmVyLCBkZWd5PTApIHtcbiAgICAgICAgcmV0dXJuIGBza2V3KCR7ZGVneH0sICR7ZGVneX0pYFxuICAgIH1cblxuICAgIHN0YXRpYyBza2V3WChkZWc6bnVtYmVyKSB7XG4gICAgICAgIHJldHVybiBgc2tld1goJHtkZWd9KWBcbiAgICB9XG5cbiAgICBzdGF0aWMgc2tld1koZGVnOm51bWJlcikge1xuICAgICAgICByZXR1cm4gYHNrZXdZKCR7ZGVnfSlgXG4gICAgfVxuXG4gICAgc3RhdGljIHNjYWxlKHg6bnVtYmVyLCB5PzpudW1iZXIpOnN0cmluZyB7XG4gICAgICAgIGNvbnN0IHlzY2FsZSA9IHkgIT0gbnVsbCA/IHkgOiB4O1xuXG4gICAgICAgIHJldHVybiBgc2NhbGUoJHt4fSwgJHt5c2NhbGV9KWBcbiAgICB9XG5cbiAgICBzdGF0aWMgZ3JvdXAocGFyZW50LCBjbGFzc2VzLCBwb3MgPSB7eDogMCwgeTogMH0pIHtcbiAgICAgICAgcmV0dXJuIHBhcmVudC5hcHBlbmQoJ2cnKVxuICAgICAgICAgICAgLmF0dHIoJ2NsYXNzJywgY2xhc3NlcylcbiAgICAgICAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIFNWRy50cmFuc2xhdGUocG9zLngsIHBvcy55KSlcbiAgICB9XG5cbiAgICBzdGF0aWMgYWRkU1ZHKHBhcmVudDpEM1NlbCwgd2lkdGg6bnVtYmVyLCBoZWlnaHQ6bnVtYmVyLCBtYXJnaW46TWFyZ2luSW5mbyk6RDNTZWwge1xuXG4gICAgICAgIHZhciBzdmcgPSBwYXJlbnQuYXBwZW5kKFwic3ZnXCIpXG4gICAgICAgICAgICAuYXR0cihcIndpZHRoXCIsIFwiMTAwJVwiKVxuICAgICAgICAgICAgLmF0dHIoXCJoZWlnaHRcIiwgXCIxMDAlXCIpXG4gICAgICAgICAgICAuYXR0cihcInZpZXdCb3hcIiwgXCIwIDAgXCIgKyAod2lkdGggKyBtYXJnaW4ubGVmdCArIG1hcmdpbi5yaWdodCkgKyBcIiBcIiArIChoZWlnaHQgKyBtYXJnaW4udG9wICsgbWFyZ2luLmJvdHRvbSkpXG4gICAgICAgICAgICAuYXR0cihcInByZXNlcnZlQXNwZWN0UmF0aW9cIiwgXCJ4TWlkWU1pZCBtZWV0XCIpXG4gICAgICAgIC5hcHBlbmQoXCJnXCIpXG4gICAgICAgICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBTVkcudHJhbnNsYXRlKG1hcmdpbi5sZWZ0LCBtYXJnaW4udG9wKSk7XG5cbiAgICAgICAgcmV0dXJuIHN2ZztcbiAgICB9XG5cbiAgICBzdGF0aWMgYWRkQXJyb3dzKHBhcmVudDpEM1NlbCkge1xuICAgICAgICBwYXJlbnQuYXBwZW5kKCdkZWZzJylcbiAgICAgICAgICAgIC5hcHBlbmQoJ21hcmtlcicpXG4gICAgICAgICAgICAuYXR0cihcImlkXCIsIFwiYXJyb3dcIilcbiAgICAgICAgICAgIC5hdHRyKFwibWFya2VyVW5pdHNcIiwgXCJzdHJva2VXaWR0aFwiKVxuICAgICAgICAgICAgLmF0dHIoXCJtYXJrZXJXaWR0aFwiLCA1LjUpXG4gICAgICAgICAgICAuYXR0cihcIm1hcmtlckhlaWdodFwiLCA1LjUpXG4gICAgICAgICAgICAuYXR0cihcInZpZXdCb3hcIiwgXCIwIDAgMTIgMTJcIilcbiAgICAgICAgICAgIC5hdHRyKFwicmVmWFwiLCA2KVxuICAgICAgICAgICAgLmF0dHIoXCJyZWZZXCIsIDYpXG4gICAgICAgICAgICAuYXR0cihcIm9yaWVudFwiLCAnYXV0bycpXG4gICAgICAgICAgICAuYXBwZW5kKCdwYXRoJylcbiAgICAgICAgICAgIC5hdHRyKCdkJywgXCJNMiwyIEwxMCw2IEwyLDEwIEw2LDYgTDIsMlwiKVxuICAgICAgICAgICAgLy8gLnN0eWxlKFwiZmlsbDogI2YwMFwiKVxuICAgIH1cblxuICAgIHN0YXRpYyBpbnNlcnRBcnJvdyhwYXJlbnQ6RDNTZWwsIHgxOm51bWJlciwgeTE6bnVtYmVyLCB4MjpudW1iZXIsIHkyOm51bWJlciwgY29sb3I6c3RyaW5nLCB3aWR0aDpudW1iZXIpIHtcbiAgICAgICAgcmV0dXJuIHBhcmVudC5hcHBlbmQoXCJsaW5lXCIpXG4gICAgICAgICAgICAgLmF0dHIoXCJ4MVwiLHgxKSAgXG4gICAgICAgICAgICAgLmF0dHIoXCJ5MVwiLHkxKSAgXG4gICAgICAgICAgICAgLmF0dHIoXCJ4MlwiLHgyKSAgXG4gICAgICAgICAgICAgLmF0dHIoXCJ5MlwiLHkyKSAgXG4gICAgICAgICAgICAgLmF0dHIoXCJzdHJva2VcIixjb2xvcikgIFxuICAgICAgICAgICAgIC5hdHRyKFwic3Ryb2tlLXdpZHRoXCIsd2lkdGgpICBcbiAgICAgICAgICAgICAuYXR0cihcIm1hcmtlci1lbmRcIixcInVybCgjYXJyb3cpXCIpOyAgXG4gICAgfVxuXG4gICAgc3RhdGljIG1lc2hncmlkKG54OiBudW1iZXIsIG55OiBudW1iZXIsIHhyYW5nZTogbnVtYmVyW10sIHlyYW5nZTogbnVtYmVyW10pIHtcbiAgICAgICAgY29uc3Qgc2NhbGUgPSAodmFsczpudW1iZXJbXSwgcmFuZ2UpID0+IHZhbHMubWFwKHYgPT4gKHYgKiAocmFuZ2VbMV0gLSByYW5nZVswXSkpICsgcmFuZ2VbMF0pO1xuXG4gICAgICAgIGNvbnN0IHBvaW50aWZ5ID0gKHh2YWxzOm51bWJlcltdLCB5dmFsczpudW1iZXJbXSkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgb3V0ID0gW11cbiAgICAgICAgICAgIHh2YWxzLmZvckVhY2goeCA9PiB7XG4gICAgICAgICAgICAgICAgeXZhbHMuZm9yRWFjaCh5ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgb3V0LnB1c2goe3g6IHgsIHk6IHl9KVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgcmV0dXJuIG91dFxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgeHZhbHMgPSBzY2FsZShSLnJhbmdlKDAsIG54KS5tYXAoeCA9PiAoeCArIDAuNSkgLyBueCksIHhyYW5nZSlcbiAgICAgICAgY29uc3QgeXZhbHMgPSBzY2FsZShSLnJhbmdlKDAsIG55KS5tYXAoeSA9PiAoeSArIDAuNSkgLyBueSksIHlyYW5nZSlcbiAgICAgICAgcmV0dXJuIHBvaW50aWZ5KHh2YWxzLCB5dmFscylcbiAgICB9XG5cbn1cblxuZXhwb3J0IGNsYXNzIFNWR01lYXN1cmVtZW50cyB7XG5cbiAgICBwcml2YXRlIG1lYXN1cmVFbGVtZW50OiBkMy5TZWxlY3Rpb248YW55LCBhbnksIGFueSwgYW55PjtcblxuICAgIGNvbnN0cnVjdG9yKGJhc2VFbGVtZW50LCBjbGFzc2VzID0gJycpIHtcbiAgICAgICAgdGhpcy5tZWFzdXJlRWxlbWVudCA9IGJhc2VFbGVtZW50LmFwcGVuZCgndGV4dCcpXG4gICAgICAgICAgICAuYXR0cigneCcsIDApXG4gICAgICAgICAgICAuYXR0cigneScsIC0yMClcbiAgICAgICAgICAgIC5hdHRyKCdjbGFzcycsIGNsYXNzZXMpXG5cbiAgICB9XG5cbiAgICB0ZXh0TGVuZ3RoKHRleHQsIHN0eWxlID0gbnVsbCkge1xuICAgICAgICB0aGlzLm1lYXN1cmVFbGVtZW50LmF0dHIoJ3N0eWxlJywgc3R5bGUpO1xuICAgICAgICB0aGlzLm1lYXN1cmVFbGVtZW50LnRleHQodGV4dCk7XG4gICAgICAgIGNvbnN0IHRsID0gKDxTVkdUZXh0RWxlbWVudD4gdGhpcy5tZWFzdXJlRWxlbWVudC5ub2RlKCkpLmdldENvbXB1dGVkVGV4dExlbmd0aCgpO1xuICAgICAgICB0aGlzLm1lYXN1cmVFbGVtZW50LnRleHQoJycpO1xuXG4gICAgICAgIHJldHVybiB0bDtcbiAgICB9XG59IiwiLyoqXG4gKiBDcmVhdGVkIGJ5IGhlbiBvbiA1LzE1LzE3LlxuICogTW9kaWZpZWQgYnkgaG9vIG9uIDQvMTYvMTkuXG4gKi9cbmV4cG9ydCBjbGFzcyBTaW1wbGVFdmVudEhhbmRsZXIge1xuXG4gICAgZWxlbWVudDogRWxlbWVudDtcbiAgICBldmVudExpc3RlbmVyczogb2JqZWN0W107XG5cbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50OiBFbGVtZW50KSB7XG4gICAgICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgICAgIHRoaXMuZXZlbnRMaXN0ZW5lcnMgPSBbXVxuICAgIH1cblxuICAgIGJpbmQoZXZlbnROYW1lczogc3RyaW5nLCBldmVudEZ1bmN0aW9uOiBGdW5jdGlvbikge1xuICAgICAgICBmb3IgKGNvbnN0IGV2ZW50TmFtZSBvZiBldmVudE5hbWVzLnNwbGl0KCcgJykpIHtcbiAgICAgICAgICAgIHRoaXMuZXZlbnRMaXN0ZW5lcnMucHVzaCh7ZXZlbnROYW1lLCBldmVudEZ1bmN0aW9ufSk7XG4gICAgICAgICAgICBjb25zdCBldmVudEZ1bmN0aW9uV3JhcCA9IGUgPT4gZXZlbnRGdW5jdGlvbihlLmRldGFpbCwgZSk7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGV2ZW50RnVuY3Rpb25XcmFwLCBmYWxzZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRMaXN0ZW5lcnMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmV2ZW50TGlzdGVuZXJzO1xuICAgIH1cblxuICAgIHRyaWdnZXIoZXZlbnROYW1lOiBzdHJpbmcsIGRldGFpbDogb2JqZWN0KSB7XG4gICAgICAgIHRoaXMuZWxlbWVudC5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChldmVudE5hbWUsIHtkZXRhaWx9KSk7XG4gICAgfVxufSIsImxldCB0aGVfdW5pcXVlX2lkX2NvdW50ZXIgPSAwO1xubGV0IHRoZV91bmlxdWVfc3RyaW5nX2NvdW50ZXIgPSAwO1xuXG5leHBvcnQgY2xhc3MgVUlkIHtcbiAgICBzdGF0aWMgdWlkKCk6IG51bWJlciB7XG4gICAgICAgIHRoZV91bmlxdWVfaWRfY291bnRlciArPSAxO1xuICAgICAgICByZXR1cm4gdGhlX3VuaXF1ZV9pZF9jb3VudGVyXG4gICAgfVxuICAgIHN0YXRpYyBzaW1wbGVVSWQocHJlZml4PScnKTogc3RyaW5nIHtcbiAgICAgICAgdGhlX3VuaXF1ZV9zdHJpbmdfY291bnRlciArPSAxO1xuXG4gICAgICAgIHJldHVybiBwcmVmaXggKyB0aGVfdW5pcXVlX3N0cmluZ19jb3VudGVyO1xuICAgIH1cbn1cbiIsIi8qKlxuICogQ3JlYXRlZCBieSBIZW5kcmlrIFN0cm9iZWx0IChoZW5kcmlrLnN0cm9iZWx0LmNvbSkgb24gMTIvMy8xNi5cbiAqIE1vZGlmaWVkIGJ5IEJlbiBIb292ZXIgb24gNC8xNi8yMDE5XG4gKi9cbmltcG9ydCB7IEQzU2VsIH0gZnJvbSBcIi4veGQzXCJcbmltcG9ydCB7IFNpbXBsZUV2ZW50SGFuZGxlciB9IGZyb20gXCIuL1NpbXBsZUV2ZW50SGFuZGxlclwiO1xuXG4vKipcbiAqIFNob3VsZCBoYXZlIFZDb21wb25lbnRIVE1MIGFuZCBWQ29tcG9uZW50U1ZHXG4gKlxuICogQ29tbW9uIFByb3BlcnRpZXM6XG4gKiAtIGV2ZW50c1xuICogLSBldmVudEhhbmRsZXIgKFYgaW1wb3J0YW50KVxuICogLSBvcHRpb25zIChNYWludGFpbnMgcHVibGljIHN0YXRlLiBDYW4gZXhwb3NlIHRoZXNlIHdpdGggZ2V0L3NldCBmdW5jdGlvbnMgd2l0aCBhdXRvIHVwZGF0ZSlcbiAqIC0gX2N1cnJlbnQgKE1haW50YWlucyBwcml2YXRlIHN0YXRlKVxuICogLSBjc3NOYW1lIChzeW5jZWQgd2l0aCBjb3JyZXNwb25kaW5nIENTUyBmaWxlKVxuICogLSBwYXJlbnQgKEhUTUwgaXMgZGl2IGNvbnRhaW5pbmcgdGhlIGJhc2UsIFNWRyBpcyBTVkcgZWxlbWVudClcbiAqIC0gYmFzZSAoSFRNTCBpcyBkaXYgd2l0aCBjc3NfbmFtZSBlc3RhYmxpc2hlZClcbiAqIC0gX2RhdGEgKERhdGEgdXNlZCB0byBjcmVhdGUgYW5kIHJlbmRlciB0aGUgY29tcG9uZW50KVxuICogLSBfcmVuZGVyRGF0YSAoRGF0YSBuZWVkZWQgdG8gZGlzcGxheS4gVGhpcyBtYXkgbm90IGJlIG5lZWRlZCwgYnV0IGlzIGN1cnJlbnRseSB1c2VkIGluIGhpc3RvZ3JhbSkgKiAqIENvbW1vbiBNZXRob2RzOlxuICogLSBjb25zdHJ1Y3RvclxuICogLSBfcmVuZGVyKCkgICAgICBDb25zaWRlciByZXBsYWNpbmcgd2l0aCBgX3VwZGF0ZURhdGEoKWAgdGhhdCB1cGRhdGVzIGFsbCBkYXRhIGF0IG9uY2VcbiAqIC0gdXBkYXRlKCkgICAgICAgQ29uc2lkZXIgcmVwbGFjaW5nIHRoaXMgd2l0aCBgZGF0YSgpYCB0aGF0IGF1dG8gdXBkYXRlcyBkYXRhXG4gKiAtIHJlZHJhdygpXG4gKiAtIGRlc3Ryb3koKVxuICovXG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBWaXNDb21wb25lbnQ8RGF0YUludGVyZmFjZT4ge1xuICAgIC8qKlxuICAgICAqIEdpdmVuIGFuIElELCBjcmVhdGUgYSBuZXcgaW5zdGFuY2Ugb2YgdGhpcyBjbGFzcyB3aXRoIHRoZSBldmVudHMgYW5kIGNzc19uYW1lIG1vZGlmaWVkIGJ5IHRoZSBpZFxuICAgICAqL1xuICAgIG5ld0luc3RhbmNlKGlkOiBudW1iZXIpIHsgfVxuXG4gICAgLyoqXG4gICAgICogVGhlIHN0YXRpYyBwcm9wZXJ0eSB0aGF0IGNvbnRhaW5zIGFsbCBjbGFzcyByZWxhdGVkIGV2ZW50cy5cbiAgICAgKiBTaG91bGQgYmUgb3ZlcndyaXR0ZW4gYW5kIGV2ZW50IHN0cmluZ3MgaGF2ZSB0byBiZSB1bmlxdWUhIVxuICAgICAqL1xuICAgIHByb3RlY3RlZCBnZXQgZXZlbnRzKCkge1xuICAgICAgICBjb25zdCBldmVudCA9IChldmVudE5hbWUpID0+IGAke3RoaXMuYmFzZU5hbWV9XyR7ZXZlbnROYW1lfWBcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG5vRXZlbnQ6IGV2ZW50KCdOb0V2ZW50JylcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByb3RlY3RlZCBnZXQgYmFzZU5hbWUoKSB7XG4gICAgICAgIHJldHVybiBgJHt0aGlzLmNzc25hbWV9X0lEJHt0aGlzLklEfWBcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgY3NzbmFtZTogc3RyaW5nOyAgICAgICAgICAgIC8vIE1ha2UgdGhlIHNhbWUgYXMgdGhlIGNvcnJlc3BvbmRpbmcgY3NzIGZpbGVcbiAgICBwcm90ZWN0ZWQgSUQ6IG51bWJlcjsgICAgICAgICAgICAgICAgIC8vIElEIGFzc29jaWF0ZWQgdG8gdW5pcXVlIGluc3RhbmNlIG9mIHZpc3VhbGl6YXRpb24uIERlZmF1bHRzIHRvIDBcblxuICAgIHByb3RlY3RlZCBhYnN0cmFjdCBvcHRpb25zOiB7fTtcbiAgICBwcm90ZWN0ZWQgZXZlbnRIYW5kbGVyOiBTaW1wbGVFdmVudEhhbmRsZXI7XG4gICAgcGFyZW50OiBEM1NlbDsgICAgICAgICAgICAgICAgICAgICAgICAvLyBQYXJlbnQgZDMgc2VsZWN0aW9uXG4gICAgYmFzZTogRDNTZWw7ICAgICAgICAgICAgICAgICAvLyBkMyBzZWxlY3Rpb24gdGhhdCBpcyBjcmVhdGVkIGJ5IHRoZSBpbml0XG4gICAgcHJvdGVjdGVkIF9kYXRhOiBEYXRhSW50ZXJmYWNlO1xuICAgIHByb3RlY3RlZCByZW5kZXJEYXRhOiB1bmtub3duO1xuXG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge0QzU2VsfSBkM3BhcmVudCAgRDMgc2VsZWN0aW9uIG9mIHBhcmVudCBTVkcgRE9NIEVsZW1lbnRcbiAgICAgKiBAcGFyYW0ge1NpbXBsZUV2ZW50SGFuZGxlcn0gZXZlbnRIYW5kbGVyIGEgZ2xvYmFsIGV2ZW50IGhhbmRsZXIgb2JqZWN0IG9yICdudWxsJyBmb3IgbG9jYWwgZXZlbnQgaGFuZGxlclxuICAgICAqL1xuICAgIHByb3RlY3RlZCBjb25zdHJ1Y3RvcihkM3BhcmVudDogRDNTZWwsIGV2ZW50SGFuZGxlcj86IFNpbXBsZUV2ZW50SGFuZGxlciwgSUQgPSAwKSB7XG4gICAgICAgIHRoaXMucGFyZW50ID0gZDNwYXJlbnQ7XG4gICAgICAgIHRoaXMuZXZlbnRIYW5kbGVyID0gZXZlbnRIYW5kbGVyIHx8IG5ldyBTaW1wbGVFdmVudEhhbmRsZXIodGhpcy5wYXJlbnQubm9kZSgpKTtcbiAgICAgICAgdGhpcy5JRCA9IElEO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNob3VsZCBiZSBvdmVyd3JpdHRlbiB0byBjcmVhdGUgbmVlZGVkIHN0YXRpYyBET00gZWxlbWVudHNcbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgYWJzdHJhY3QgaW5pdCgpO1xuXG4gICAgLyoqXG4gICAgICogRm9sbG93IHRoZSBEMyBjb252ZW50aW9uOiByZXRyaWV2ZSB0aGUgZGF0YSBpbnNpZGUgdGhlIGNsYXNzIGlmIG51bGwuIE90aGVyd2lzZSwgc2V0IHRoZSBkYXRhIGFuZCByZXR1cm4gJ3RoaXMnXG4gICAgICovXG4gICAgYWJzdHJhY3QgZGF0YSgpOiBEYXRhSW50ZXJmYWNlO1xuICAgIGFic3RyYWN0IGRhdGEoeDogRGF0YUludGVyZmFjZSk6IHRoaXM7XG5cbiAgICAvKipcbiAgICAgKiBTZXQgbWFueSBvcHRpb25zIGF0IG9uY2VcbiAgICAgKlxuICAgICAqIEBwYXJhbSBvcHRpb25zIFJlc2V0IG9wdGlvbnMgdG8gcGFzc2VkIHZhbHVlc1xuICAgICAqL1xuICAgIHVwZGF0ZU9wdGlvbnMob3B0aW9uczoge30pIHtcbiAgICAgICAgT2JqZWN0LmtleXMob3B0aW9ucykuZm9yRWFjaChrID0+IHRoaXMub3B0aW9uc1trXSA9IG9wdGlvbnNba10pO1xuICAgIH1cblxuICAgIGRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMuYmFzZS5yZW1vdmUoKTtcbiAgICB9XG59IiwiaW1wb3J0ICogYXMgZDMgZnJvbSAnZDMnXG5pbXBvcnQgeyBCYXNlVHlwZSB9IGZyb20gJ2QzJ1xuXG5leHBvcnQgY29uc3QgbGluc3BhY2UgPSAoc3RhcnQsIGVuZCwgbikgPT4ge1xuICAgIGNvbnN0IGRlbHRhID0gKGVuZCAtIHN0YXJ0KSAvIChuIC0gMSlcbiAgICByZXR1cm4gZDMucmFuZ2Uoc3RhcnQsIGVuZCArIGRlbHRhLCBkZWx0YSkuc2xpY2UoMCwgbilcbn1cblxuZXhwb3J0IHR5cGUgRDNTZWwgPSBkMy5TZWxlY3Rpb248YW55LCBhbnksIGFueSwgYW55PlxuZXhwb3J0IHR5cGUgZDNTPFQgZXh0ZW5kcyBCYXNlVHlwZSwgVSA9IGFueT4gPSBkMy5TZWxlY3Rpb248VCwgVSwgYW55LCBhbnk+XG5cbmQzLnNlbGVjdGlvbi5wcm90b3R5cGUuY2xlYXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5zZWxlY3RBbGwoJyonKS5yZW1vdmUoKTtcbiAgICByZXR1cm4gdGhpcztcbn1cblxuZDMuc2VsZWN0aW9uLnByb3RvdHlwZS50b2dnbGVDbGFzcyA9IGZ1bmN0aW9uIChjbGFzc05hbWUpIHtcbiAgICB0aGlzLmNsYXNzZWQoY2xhc3NOYW1lLCAhdGhpcy5jbGFzc2VkKGNsYXNzTmFtZSkpO1xuICAgIHJldHVybiB0aGlzO1xufVxuXG5kMy5zZWxlY3Rpb24ucHJvdG90eXBlLnNob3cgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5zdHlsZSgnZGlzcGxheScsICdpbml0aWFsJyk7XG4gICAgcmV0dXJuIHRoaXM7XG59XG5cbmQzLnNlbGVjdGlvbi5wcm90b3R5cGUuaGlkZSA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLnN0eWxlKCdkaXNwbGF5JywgJ25vbmUnKTtcbiAgICByZXR1cm4gdGhpcztcbn1cblxuZDMuc2VsZWN0aW9uLnByb3RvdHlwZS50b2dnbGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGlzSGlkZGVuID0gdGhpcy5zdHlsZSgnZGlzcGxheScpID09ICdub25lJztcbiAgICByZXR1cm4gdGhpcy5zdHlsZSgnZGlzcGxheScsIGlzSGlkZGVuID8gJ2luaGVyaXQnIDogJ25vbmUnKTtcbn1cblxuZDMuc2VsZWN0aW9uLnByb3RvdHlwZS5hZnRlciA9IGZ1bmN0aW9uICh0YWdOYW1lKSB7XG4gICAgdmFyIGVsZW1lbnRzID0gW107XG5cbiAgICB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnTmFtZSk7XG4gICAgICAgIHRoaXMucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoZWxlbWVudCwgdGhpcy5uZXh0U2libGluZyk7XG4gICAgICAgIGVsZW1lbnRzLnB1c2goZWxlbWVudCk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gZDMuc2VsZWN0QWxsKGVsZW1lbnRzKTtcbn1cblxuZDMuc2VsZWN0aW9uLnByb3RvdHlwZS5iZWZvcmUgPSBmdW5jdGlvbiAodGFnTmFtZSkge1xuICAgIHZhciBlbGVtZW50cyA9IFtdO1xuXG4gICAgdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZ05hbWUpO1xuICAgICAgICB0aGlzLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGVsZW1lbnQsIHRoaXMpO1xuICAgICAgICBlbGVtZW50cy5wdXNoKGVsZW1lbnQpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGQzLnNlbGVjdEFsbChlbGVtZW50cyk7XG59IiwiaW1wb3J0ICogYXMgZDMgZnJvbSAnZDMnXG5pbXBvcnQgeyBEM1NlbCB9IGZyb20gJy4uL3V0aWwveGQzJ1xuaW1wb3J0ICogYXMgUiBmcm9tICdyYW1kYSdcbmltcG9ydCB7IGxlZ2VuZENvbG9yIH0gZnJvbSAnZDMtc3ZnLWxlZ2VuZCdcbmltcG9ydCB7IFZlY3RvcjJEIH0gZnJvbSAnLi4vdXRpbC90eXBlcydcbmltcG9ydCB7IFNWR09wdGlvbnMsIFNWR1Zpc0NvbXBvbmVudCB9IGZyb20gJy4uL3V0aWwvU1ZHVmlzQ29tcG9uZW50J1xuaW1wb3J0IHsgU2ltcGxlRXZlbnRIYW5kbGVyIH0gZnJvbSAnLi4vdXRpbC9TaW1wbGVFdmVudEhhbmRsZXInO1xuaW1wb3J0IHsgU1ZHIH0gZnJvbSAnLi4vdXRpbC9TVkdwbHVzJ1xuaW1wb3J0IHsgZ2V0Q29udG91clZhbHVlcyB9IGZyb20gJy4uL3Bsb3R0aW5nJ1xuaW1wb3J0IHsgVXBkYXRlciwgQmxvY2tVcGRhdGVyIH0gZnJvbSAnLi4vVXBkYXRlcidcbmltcG9ydCB7IGludGVydmFsLCBmcm9tRXZlbnQgfSBmcm9tICdyeGpzJ1xuaW1wb3J0IHsgbWFwLCB0YXAsIHRha2UsIHN0YXJ0V2l0aCwgc2Nhbiwgc3dpdGNoTWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnXG5cbnR5cGUgVCA9IG51bWJlcltdXG5cbmludGVyZmFjZSBHcmFwaE9wdGlvbnMgZXh0ZW5kcyBTVkdPcHRpb25zIHtcbiAgICB4cmFuZ2U6IFtudW1iZXIsIG51bWJlcl1cbiAgICB5cmFuZ2U6IFtudW1iZXIsIG51bWJlcl1cbiAgICBuOiBudW1iZXIgICAgICAgICAgICAgICAgICAgLy8gTnVtYmVyIG9mIG1lc2hncmlkIHBvaW50cyBhbG9uZyB0aGUgeCBheGlzXG4gICAgbTogbnVtYmVyICAgICAgICAgICAgICAgICAgIC8vIE51bWJlciBvZiBtZXNoZ3JpZCBwb2ludHMgYWxvbmcgdGhlIHkgYXhpc1xuICAgIHBhZDogbnVtYmVyICAgICAgICAgICAgICAgICAvLyBBbm5vdGF0aW9ucyB0aGF0IGhhcHBlbiBpbiB0aGUgbWFyZ2luIG11c3QgdGFrZSBwbGFjZSBgcGFkYCBkaXN0YW5jZSBmcm9tIHRoZSBtYWluIGdyYXBoXG4gICAgY2lyY2xlRXZlcnk6IG51bWJlclxufVxuXG5pbnRlcmZhY2UgR3JhcGhTY2FsZXMge1xuICAgIHg/OiBkMy5TY2FsZUxpbmVhcjxudW1iZXIsIG51bWJlcj4sXG4gICAgeT86IGQzLlNjYWxlTGluZWFyPG51bWJlciwgbnVtYmVyPixcbiAgICBjb2xvcj86IGQzLlNjYWxlTGluZWFyPG51bWJlciwgc3RyaW5nPixcbiAgICBjdXJ2ZT86IGQzLkN1cnZlQ2F0bXVsbFJvbUZhY3RvcnksXG4gICAgY29udG91cnM/OiBkMy5Db250b3VycyxcbiAgICB0aHJlc2hvbGRzPzogbnVtYmVyW11cbn1cblxuaW50ZXJmYWNlIEdyYXBoU2VscyB7XG4gICAgeGF4aXM/OiBEM1NlbFxuICAgIHlheGlzPzogRDNTZWxcbiAgICBsZWdlbmQ/OiBEM1NlbFxuICAgIHRpcD86IEQzU2VsXG4gICAgeGxhYmVsPzogRDNTZWxcbiAgICB5bGFiZWw/OiBEM1NlbFxuICAgIGNpcmNsZT86IEQzU2VsXG4gICAgYXJyb3dzPzogRDNTZWxbXVxufVxuXG5leHBvcnQgY2xhc3MgQ29udG91clBsb3QgZXh0ZW5kcyBTVkdWaXNDb21wb25lbnQ8VD4ge1xuICAgIGNzc25hbWUgPSBcInNpbXBsZS1ncmFwaFwiXG5cbiAgICBfZGF0YTogVFxuXG4gICAgb3B0aW9uczogR3JhcGhPcHRpb25zID0ge1xuICAgICAgICBtYXhXaWR0aDogNDUwLFxuICAgICAgICBtYXhIZWlnaHQ6IDUwMCxcbiAgICAgICAgbWFyZ2luOiB7IHRvcDogNTAsIHJpZ2h0OiA3NSwgYm90dG9tOiAxMjUsIGxlZnQ6IDUwIH0sXG4gICAgICAgIHBhZDogMzAsXG4gICAgICAgIHhyYW5nZTogWzAsIDEuNl0sXG4gICAgICAgIHlyYW5nZTogWzAsIDEuNl0sXG4gICAgICAgIG46IDUwMCxcbiAgICAgICAgbTogNTAwLFxuICAgICAgICBjaXJjbGVFdmVyeTogNCxcbiAgICB9IC8vICNzdGF0ZVxuXG4gICAgc2NhbGVzOiBHcmFwaFNjYWxlcyA9IHt9XG4gICAgc2VsczogR3JhcGhTZWxzID0ge31cblxuXG4gICAgLy8gT3RoZXJcbiAgICBfY3VyciA9IHtcbiAgICAgICAgY3VyckxvYzoge1xuICAgICAgICAgICAgeDogMC4xLFxuICAgICAgICAgICAgeTogMC4yXG4gICAgICAgIH0sXG4gICAgICAgIHN0ZXA6IDBcbiAgICB9XG4gICAgdGlja2VyXG4gICAgdXBkYXRlcjogVXBkYXRlclxuXG4gICAgLy8gU3BlY2lmeSB0aGUgZ3JpZCBmb3IgdGhlIGNvbnRvdXJzXG4gICAgaWRlYWw6IG51bWJlciA9IDEgLy8gI3N0YXRlXG5cbiAgICBjb25zdHJ1Y3RvcihkM3BhcmVudDogRDNTZWwsIGV2ZW50SGFuZGxlcj86IFNpbXBsZUV2ZW50SGFuZGxlciwgb3B0aW9ucyA9IHt9KSB7XG4gICAgICAgIHN1cGVyKGQzcGFyZW50LCBldmVudEhhbmRsZXIsIG9wdGlvbnMpXG4gICAgICAgIHN1cGVyLmluaXRTVkcodGhpcy5vcHRpb25zKVxuICAgICAgICB0aGlzLmJhc2UuY2xhc3NlZCh0aGlzLmNzc25hbWUsIHRydWUpXG4gICAgICAgIHRoaXMudXBkYXRlciA9IG5ldyBVcGRhdGVyKClcbiAgICAgICAgdGhpcy5pbml0UGxvdCgpXG4gICAgfVxuXG4gICAgc2V0VXBkYXRlcihuYW1lOiAnYmxvY2snIHwgJ2Z1bGwnKSB7XG4gICAgICAgIGNvbnN0IGFyZ3MgPSBbdGhpcy5xKCksIHRoaXMuZXRhKCldXG5cbiAgICAgICAgaWYgKG5hbWUgPT0gJ2Jsb2NrJykge1xuICAgICAgICAgICAgdGhpcy51cGRhdGVyID0gbmV3IEJsb2NrVXBkYXRlcih0aGlzLnEoKSwgdGhpcy5ldGEoKSlcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChuYW1lID09ICdmdWxsJykge1xuICAgICAgICAgICAgdGhpcy51cGRhdGVyID0gbmV3IFVwZGF0ZXIodGhpcy5xKCksIHRoaXMuZXRhKCkpXG4gICAgICAgIH1cblxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiUGxlYXNlIGVudGVyIGEgdmFsaWQgaW5wdXQgYXMgdXBkYXRlclwiKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnVwZGF0ZVF1aXZlcnMoKVxuICAgIH1cblxuICAgIC8vIHBsb3RNaW5pbXVtKCkge1xuICAgIC8vICAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICAvLyAgICAgY29uc3Qgb3AgPSB0aGlzLm9wdGlvbnM7XG4gICAgLy8gICAgIGNvbnN0IHNjYWxlcyA9IHRoaXMuc2NhbGVzO1xuXG4gICAgLy8gICAgIGNvbnN0IG1ha2VYID0gKG54OiBudW1iZXIpID0+IFIucmFuZ2UoMCwgbngpLm1hcChkMy5zY2FsZUxpbmVhcigpLmRvbWFpbihbMCwgbnhdKS5yYW5nZShbMC4wMDAwMSwgb3AueHJhbmdlWzFdXSkpXG4gICAgLy8gICAgIGNvbnN0IHlGdW5jID0geCA9PiAxIC8geDtcbiAgICAvLyAgICAgY29uc3QgeHZhbHMgPSBtYWtlWCgxMDApXG4gICAgLy8gICAgIGNvbnN0IHl2YWxzID0geHZhbHMubWFwKHlGdW5jKS8vLm1hcCh5ID0+IHNjYWxlcy55KHkpKVxuXG4gICAgLy8gICAgIGNvbnN0IGRhdGEgPSBSLnppcCh4dmFscy5tYXAoc2NhbGVzLngpLCB5dmFscy5tYXAoc2NhbGVzLnkpKVxuICAgIC8vICAgICBjb25zdCBsaW5lR2VuID0gZDMubGluZSgpXG4gICAgLy8gICAgIGNvbnN0IHBhdGhEYXRhID0gbGluZUdlbihkYXRhKVxuXG4gICAgLy8gICAgIGNvbnN0IG1pbmltdW1Hcm91cCA9IHRoaXMuYmFzZS5hcHBlbmQoJ2cnKS5hdHRyKCdpZCcsICdtaW5pbXVtLWdyb3VwJylcblxuICAgIC8vICAgICBjb25zb2xlLmxvZyhcIlBhdGggZGF0YTogXCIsIHBhdGhEYXRhKTtcblxuICAgIC8vICAgICBtaW5pbXVtR3JvdXAuYXBwZW5kKCdwYXRoJylcbiAgICAvLyAgICAgICAgIC5hdHRyKCdkJywgbGluZUdlbihkYXRhKSlcbiAgICAvLyAgICAgICAgIC5jbGFzc2VkKCdtaW5pbXVtJywgdHJ1ZSlcbiAgICAvLyAgICAgICAgIC5zdHlsZSgnc3Ryb2tlLXdpZHRoJywgMi41KVxuICAgIC8vICAgICAgICAgLnN0eWxlKCdzdHJva2UnLCAnYmx1ZScpXG4gICAgLy8gICAgICAgICAuc3R5bGUoJ2ZpbGwnLCBudWxsKVxuICAgIC8vIH1cblxuICAgIHBsb3RDb250b3VycygpIHtcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgICAgIGNvbnN0IG9wID0gdGhpcy5vcHRpb25zO1xuICAgICAgICBjb25zdCBzY2FsZXMgPSB0aGlzLnNjYWxlcztcblxuICAgICAgICBjb25zdCBjb250b3VyRnVuYyA9ICh4LCB5KSA9PiB0aGlzLnVwZGF0ZXIuYWJzRXJyKHsgeDogeCwgeTogeSB9KVxuICAgICAgICBjb25zdCB2YWxzID0gZ2V0Q29udG91clZhbHVlcyhvcC5uLCBvcC5tLCBvcC54cmFuZ2UsIG9wLnlyYW5nZSwgY29udG91ckZ1bmMpXG4gICAgICAgIGxldCB0aHJlc2hvbGRzID0gZDMucmFuZ2UoZDMubWluKHZhbHMpLCBkMy5tYXgodmFscyksIDAuMDgpO1xuICAgICAgICAvLyBjb25zdCBjb250b3VyRnVuYyA9ICh4LCB5KSA9PiB0aGlzLnVwZGF0ZXIuRXJyKHsgeDogeCwgeTogeSB9KVxuICAgICAgICAvLyBjb25zdCB2YWxzID0gZ2V0Q29udG91clZhbHVlcyhvcC5uLCBvcC5tLCBvcC54cmFuZ2UsIG9wLnlyYW5nZSwgY29udG91ckZ1bmMpXG4gICAgICAgIC8vIGxldCB0aHJlc2hvbGRzID0gZDMucmFuZ2UoZDMubWluKHZhbHMpLCAtZDMubWluKHZhbHMpLCAwLjA4KTtcbi8vIFxuICAgICAgICAvLyBCZWNhdXNlIHRoZSBtaW5pbXVtIHZhbHVlIGlzIG5vdCBhIGNvbnRvdXIgYnV0IGEgdmFsdWUsIHdlIG5lZWQgdG8gZG8gd2hhdCB3ZSBjYW4gdG8gYXBwcm9hY2ggdGhlIG1pbi5cbiAgICAgICAgY29uc3Qgd2VpZ2h0ZWQgPSAwLjk1O1xuICAgICAgICBjb25zdCBuZXdNaW4gPSAod2VpZ2h0ZWQgKiB0aHJlc2hvbGRzWzBdICsgKDEgLSB3ZWlnaHRlZCkgKiB0aHJlc2hvbGRzWzFdKSAvIDJcbiAgICAgICAgLy8gY29uc3QgbmV3TWluID0gMDtcbiAgICAgICAgdGhyZXNob2xkcyA9IFIuaW5zZXJ0KDEsIG5ld01pbiwgdGhyZXNob2xkcylcblxuXG4gICAgICAgIC8vIHNjYWxlcy5jb2xvciA9IGQzLnNjYWxlTGluZWFyKCkuZG9tYWluKFstMywzXSkucmFuZ2UoWzAuNCwgMC42XSkuaW50ZXJwb2xhdGUoKCkgPT4gZDMuaW50ZXJwb2xhdGVSZFlsQnUpO1xuICAgICAgICBzY2FsZXMuY29sb3IgPSBkMy5zY2FsZUxpbmVhcigpLmRvbWFpbihbLTEsMC4xXSkucmFuZ2UoWzAsIDFdKS5pbnRlcnBvbGF0ZSgoKSA9PiBkMy5pbnRlcnBvbGF0ZUJsdWVzKTtcbiAgICAgICAgLy8gc2NhbGVzLmNvbG9yID0gZDMuc2NhbGVTZXF1ZW50aWFsTG9nKGQzLmV4dGVudCh0aHJlc2hvbGRzKSwgZDMuaW50ZXJwb2xhdGVNYWdtYSlcblxuICAgICAgICBzY2FsZXMuY29udG91cnMudGhyZXNob2xkcyh0aHJlc2hvbGRzKVxuXG4gICAgICAgIGNvbnN0IGNvbnRvdXJWYWxzID0gc2NhbGVzLmNvbnRvdXJzKHZhbHMpXG4gICAgICAgIGNvbnN0IGNvbnRvdXJHcm91cCA9IHRoaXMuYmFzZS5hcHBlbmQoJ2cnKS5hdHRyKCdpZCcsICdjb250b3VyLWdyb3VwJylcbiAgICAgICAgY29uc3QgY29udG91cnMgPSBjb250b3VyR3JvdXAuc2VsZWN0QWxsKFwicGF0aC5jb250b3VyXCIpXG4gICAgICAgICAgICAuZGF0YShjb250b3VyVmFscylcblxuICAgICAgICBjb250b3Vycy5qb2luKFwicGF0aFwiKVxuICAgICAgICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcImNvbnRvdXJcIilcbiAgICAgICAgICAgIC5hdHRyKFwiZFwiLCBkMy5nZW9QYXRoKGQzLmdlb0lkZW50aXR5KCkuc2NhbGUob3Aud2lkdGggLyBvcC5uKSkpXG4gICAgICAgICAgICAuYXR0cihcImZpbGxcIiwgZCA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHNjYWxlcy5jb2xvcigtTWF0aC5zcXJ0KGQudmFsdWUpKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jbGFzc2VkKCdtYWluLWZpdCcsIGQgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBkLnZhbHVlID09IG5ld01pbjtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2xhc3NlZCgnbm90LWZpdCcsIGQgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBkLnZhbHVlICE9IG5ld01pbjtcbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgLy8gbGVnZW5kKHtjb2xvciwgdGl0bGU6IFwiVmFsdWVcIiwgdGlja0Zvcm1hdDogXCIsXCJ9KVxuICAgIH1cblxuICAgIGFkZFN0ZXAodjogVmVjdG9yMkQsIHByZXY6IFZlY3RvcjJEID0gbnVsbCkge1xuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICAgICAgY29uc3Qgb3AgPSB0aGlzLm9wdGlvbnM7XG4gICAgICAgIGNvbnN0IHNjYWxlcyA9IHRoaXMuc2NhbGVzO1xuICAgICAgICBjb25zdCBzZWxzID0gdGhpcy5zZWxzO1xuXG4gICAgICAgIGNvbnN0IGN4ID0gc2NhbGVzLngodi54KVxuICAgICAgICBjb25zdCBjeSA9IHNjYWxlcy55KHYueSlcblxuICAgICAgICBpZiAocHJldiAhPSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLmJhc2UuYXBwZW5kKCdsaW5lJylcbiAgICAgICAgICAgICAgICAuYXR0cigneDEnLCBzY2FsZXMueChwcmV2LngpKVxuICAgICAgICAgICAgICAgIC5hdHRyKCd5MScsIHNjYWxlcy55KHByZXYueSkpXG4gICAgICAgICAgICAgICAgLmF0dHIoJ3gyJywgY3gpXG4gICAgICAgICAgICAgICAgLmF0dHIoJ3kyJywgY3kpXG4gICAgICAgICAgICAgICAgLmNsYXNzZWQoJ2Rlc2NlbmRpbmctbGluZScsIHRydWUpXG4gICAgICAgIH1cblxuICAgICAgICAvLyBDaGVjayBib3JkZXIgY29uZGl0aW9uc1xuICAgICAgICBpZiAodi54ID49IG9wLnhyYW5nZVsxXSB8fCB2LnkgPj0gb3AueXJhbmdlWzFdKSB7XG4gICAgICAgICAgICB0aGlzLnRpY2tlci51bnN1YnNjcmliZSgpXG4gICAgICAgICAgICByZXR1cm4gdlxuICAgICAgICB9XG5cblxuICAgICAgICBpZiAoKCh0aGlzLl9jdXJyLnN0ZXAgJSBvcC5jaXJjbGVFdmVyeSkgPT0gMCkgfHwgKHByZXYgPT0gbnVsbCkpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQ3VyciBzdGVwOiBcIiwgdGhpcy5fY3Vyci5zdGVwKTtcbiAgICAgICAgICAgIHNlbHMuY2lyY2xlID0gdGhpcy5iYXNlLmFwcGVuZCgnY2lyY2xlJylcbiAgICAgICAgICAgICAgICAuYXR0cignY3gnLCBjeClcbiAgICAgICAgICAgICAgICAuYXR0cignY3knLCBjeSlcbiAgICAgICAgICAgICAgICAuYXR0cigncicsIDIpXG4gICAgICAgICAgICAgICAgLmNsYXNzZWQoJ2Rlc2NlbmRpbmctcG9pbnQnLCB0cnVlKVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fY3Vyci5zdGVwICs9IDFcblxuICAgICAgICByZXR1cm4gdjtcbiAgICB9XG5cbiAgICBjbGVhckNpcmNsZXMoKSB7XG4gICAgICAgIGQzLnNlbGVjdEFsbCgnLmRlc2NlbmRpbmctcG9pbnQnKS5yZW1vdmUoKVxuICAgICAgICBkMy5zZWxlY3RBbGwoJy5kZXNjZW5kaW5nLWxpbmUnKS5yZW1vdmUoKVxuICAgIH1cblxuICAgIGNsZWFyUXVpdmVycygpIHtcbiAgICAgICAgZDMuc2VsZWN0QWxsKCcucXVpdmVyJykucmVtb3ZlKClcbiAgICAgICAgdGhpcy5zZWxzLmFycm93cyA9IFtdXG4gICAgfVxuXG4gICAgcGxvdERlc2NlbnQoKSB7XG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuICAgICAgICBsZXQgcHJldlZhbCA9IG51bGw7XG5cbiAgICAgICAgY29uc3Qgc3ViT2JqID0ge1xuICAgICAgICAgICAgbmV4dDogKHZhbCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuYWRkU3RlcCh2YWwsIHByZXZWYWwpXG4gICAgICAgICAgICAgICAgcHJldlZhbCA9IHZhbFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVycjogKGVycikgPT4gY29uc29sZS5sb2coZXJyKSxcbiAgICAgICAgICAgIGNvbXBsZXRlOiAoKSA9PiBjb25zb2xlLmxvZyhcIkNPTVBMRVRFXCIpXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBwcmVwID0gKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5hZGRTdGVwKHRoaXMuY3VycigpKVxuICAgICAgICAgICAgcHJldlZhbCA9IHRoaXMuY3VycigpXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnRpY2tlciA9IGludGVydmFsKDEwKS5waXBlKFxuICAgICAgICAgICAgc3RhcnRXaXRoKHByZXAoKSksXG4gICAgICAgICAgICBzY2FuKHYgPT4gc2VsZi51cGRhdGVyLm5leHQodiksIHNlbGYuY3VycigpKSxcbiAgICAgICAgICAgIHRha2UoMTAwMClcbiAgICAgICAgKS5zdWJzY3JpYmUoc3ViT2JqKVxuICAgIH1cblxuICAgIGludG9WaXModjogVmVjdG9yMkQpIHtcbiAgICAgICAgcmV0dXJuIHsgeDogdGhpcy5zY2FsZXMueCh2LngpLCB5OiB0aGlzLnNjYWxlcy55KHYueSkgfVxuICAgIH1cblxuICAgIGludG9NYXRoKHY6IFZlY3RvcjJEKSB7XG4gICAgICAgIHJldHVybiB7IHg6IHRoaXMuc2NhbGVzLnguaW52ZXJ0KHYueCksIHk6IHRoaXMuc2NhbGVzLnkuaW52ZXJ0KHYueSkgfVxuICAgIH1cblxuICAgIHVwZGF0ZVF1aXZlcnMoKSB7XG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuICAgICAgICBjb25zdCBzZWxzID0gdGhpcy5zZWxzO1xuICAgICAgICBjb25zdCBzY2FsZXMgPSB0aGlzLnNjYWxlcztcblxuICAgICAgICAvLyBNb2RpZnkgYXJyb3dzIGlucGxhY2VcbiAgICAgICAgc2Vscy5hcnJvd3MuZm9yRWFjaChhcnJvdyA9PiB7XG4gICAgICAgICAgICBjb25zdCBwdDogVmVjdG9yMkQgPSB0aGlzLmludG9NYXRoKHtcbiAgICAgICAgICAgICAgICB4OiArYXJyb3cuYXR0cigneDEnKSxcbiAgICAgICAgICAgICAgICB5OiArYXJyb3cuYXR0cigneTEnKVxuICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgY29uc3QgcHQyID0gc2VsZi51cGRhdGVyLm5leHRMcihwdClcbiAgICAgICAgICAgIGFycm93LmF0dHIoJ3gyJywgc2NhbGVzLngocHQyLngpKVxuICAgICAgICAgICAgICAgIC5hdHRyKCd5MicsIHNjYWxlcy55KHB0Mi55KSlcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBjcmVhdGVRdWl2ZXJzKCkge1xuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICAgICAgY29uc3Qgb3AgPSB0aGlzLm9wdGlvbnM7XG4gICAgICAgIGNvbnN0IHNjYWxlcyA9IHRoaXMuc2NhbGVzO1xuICAgICAgICBjb25zdCBzZWxzID0gdGhpcy5zZWxzO1xuXG4gICAgICAgIGNvbnN0IG54ID0gMTEsIG55ID0gMTE7XG4gICAgICAgIGNvbnN0IHBvaW50cyA9IFNWRy5tZXNoZ3JpZChueCwgbnksIG9wLnhyYW5nZSwgb3AueXJhbmdlKVxuICAgICAgICBjb25zdCBjb2xvciA9IFwiYmx1ZVwiOyBcbiAgICAgICAgY29uc3Qgd2lkdGggPSAxLjI1OyBcblxuICAgICAgICBjb25zdCBxdWl2ZXJHcm91cCA9IHRoaXMuYmFzZS5hcHBlbmQoJ2cnKS5hdHRyKCdpZCcsICdxdWl2ZXItZ3JvdXAnKSAvLyBpbml0IHNob3VsZCBoYXZlIHRoZXNlIGdyb3VwcyBhbHJlYWR5IHNlbGVjdGVkXG4gICAgICAgIHRoaXMuY2xlYXJRdWl2ZXJzKClcblxuICAgICAgICBzZWxzLmFycm93cyA9IHBvaW50cy5tYXAocHQgPT4ge1xuICAgICAgICAgICAgY29uc3QgcHQyID0gc2VsZi51cGRhdGVyLm5leHRMcihwdClcbiAgICAgICAgICAgIGNvbnN0IGFycm93ID0gU1ZHLmluc2VydEFycm93KHF1aXZlckdyb3VwLCBzY2FsZXMueChwdC54KSwgc2NhbGVzLnkocHQueSksIHNjYWxlcy54KHB0Mi54KSwgc2NhbGVzLnkocHQyLnkpLCBjb2xvciwgd2lkdGgpXG4gICAgICAgICAgICBhcnJvdy5jbGFzc2VkKCdxdWl2ZXInLCB0cnVlKVxuICAgICAgICAgICAgcmV0dXJuIGFycm93XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgaW5pdFBsb3QoKSB7XG4gICAgICAgIC8vIEluaXRpYWxpemUgcGxvdHNcbiAgICAgICAgdGhpcy5wbG90Q29udG91cnMoKVxuICAgICAgICB0aGlzLmNyZWF0ZVF1aXZlcnMoKVxuICAgIH1cblxuICAgIGluaXQoKSB7XG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuICAgICAgICBjb25zdCBvcCA9IHRoaXMub3B0aW9ucztcbiAgICAgICAgY29uc3Qgc2NhbGVzID0gdGhpcy5zY2FsZXM7XG4gICAgICAgIGNvbnN0IHNlbHMgPSB0aGlzLnNlbHM7XG5cbiAgICAgICAgLy8gQWRkIGRlZmluaXRpb25zXG4gICAgICAgIFNWRy5hZGRBcnJvd3ModGhpcy5zdmcpXG5cbiAgICAgICAgLy8gQ3JlYXRlIHNjYWxlc1xuICAgICAgICBzY2FsZXMuY29udG91cnMgPSBkMy5jb250b3VycygpLnNpemUoW29wLm4sIG9wLm1dKVxuICAgICAgICBzY2FsZXMuY3VydmUgPSBkMy5jdXJ2ZUNhdG11bGxSb20uYWxwaGEoMC41KVxuICAgICAgICBzY2FsZXMueCA9IGQzLnNjYWxlTGluZWFyKCkuZG9tYWluKG9wLnhyYW5nZSkucmFuZ2UoWzAsIG9wLndpZHRoXSkuY2xhbXAodHJ1ZSlcbiAgICAgICAgc2NhbGVzLnkgPSBkMy5zY2FsZUxpbmVhcigpLmRvbWFpbihvcC55cmFuZ2UpLnJhbmdlKFtvcC5oZWlnaHQsIDBdKS5jbGFtcCh0cnVlKVxuXG4gICAgICAgIC8vIEFkZCBBeGVzIGFuZCBsYWJlbHNcbiAgICAgICAgc2Vscy54YXhpcyA9IHRoaXMuYmFzZS5hcHBlbmQoXCJnXCIpXG4gICAgICAgICAgICAuYXR0cihcImNsYXNzXCIsIFwiYXhpcyBheGlzLS14XCIpXG4gICAgICAgICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBTVkcudHJhbnNsYXRlKDAsIG9wLmhlaWdodCkpXG4gICAgICAgICAgICAuY2FsbChkMy5heGlzQm90dG9tKHNjYWxlcy54KS50aWNrcygzLCBcInNcIikpO1xuXG4gICAgICAgIHNlbHMueWF4aXMgPSB0aGlzLmJhc2UuYXBwZW5kKFwiZ1wiKVxuICAgICAgICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcImF4aXMgYXhpcy0teVwiKVxuICAgICAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgU1ZHLnRyYW5zbGF0ZSgwLCAwKSlcbiAgICAgICAgICAgIC5jYWxsKGQzLmF4aXNMZWZ0KHNjYWxlcy55KS50aWNrcygzLCBcInNcIikpO1xuXG4gICAgICAgIHNlbHMueGxhYmVsID0gdGhpcy5iYXNlLmFwcGVuZChcInRleHRcIilcbiAgICAgICAgICAgIC50ZXh0KFwidzBcIilcbiAgICAgICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJ0aXRsZXNcIilcbiAgICAgICAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIFNWRy50cmFuc2xhdGUob3Aud2lkdGggLyAyLCBvcC5oZWlnaHQgKyBvcC5wYWQpKVxuXG4gICAgICAgIHNlbHMueWxhYmVsID0gdGhpcy5iYXNlLmFwcGVuZChcInRleHRcIilcbiAgICAgICAgICAgIC50ZXh0KFwidzFcIilcbiAgICAgICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJ0aXRsZXNcIilcbiAgICAgICAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIFNWRy50cmFuc2xhdGUoLW9wLnBhZCwgb3AuaGVpZ2h0IC8gMikgKyBTVkcucm90YXRlKC05MCkpXG5cbiAgICAgICAgLy8gQ3JlYXRlIGNsaWNrIGJlaGF2aW9yXG4gICAgICAgIHRoaXMuYmFzZS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAoc2VsZi50aWNrZXIgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgc2VsZi50aWNrZXIudW5zdWJzY3JpYmUoKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgY29vcmRzID0gZDMubW91c2UodGhpcyk7XG4gICAgICAgICAgICBzZWxmLl9jdXJyLnN0ZXAgPSAwXG4gICAgICAgICAgICBzZWxmLmN1cnIoeyB4OiBzY2FsZXMueC5pbnZlcnQoY29vcmRzWzBdKSwgeTogc2NhbGVzLnkuaW52ZXJ0KGNvb3Jkc1sxXSkgfSlcblxuICAgICAgICAgICAgLy8gaWYgKHNlbGYuY3VycigpLnggPiAwICYmIHNlbGYuY3VycigpLnkgPiAwICYmIHNlbGYuY3VycigpLnggPCAob3AueHJhbmdlWzFdIC0gMC4xKSAmJiBzZWxmLmN1cnIoKS55IDwgKG9wLnlyYW5nZVsxXSAtIDAuMSkpIHtcbiAgICAgICAgICAgIGlmIChzZWxmLmN1cnIoKS54ID4gMCAmJiBzZWxmLmN1cnIoKS55ID4gMCkge1xuICAgICAgICAgICAgICAgIHNlbGYuYWRkU3RlcChzZWxmLmN1cnIoKSlcbiAgICAgICAgICAgICAgICBzZWxmLmNsZWFyQ2lyY2xlcygpO1xuICAgICAgICAgICAgICAgIHNlbGYucGxvdERlc2NlbnQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBjdXJyKCk6IFZlY3RvcjJEXG4gICAgY3Vycih2YWw6IFZlY3RvcjJEKTogdGhpc1xuICAgIGN1cnIodmFsPykge1xuICAgICAgICBpZiAodmFsID09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9jdXJyLmN1cnJMb2NcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX2N1cnIuY3VyckxvYyA9IHZhbDtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgZGF0YSgpOiBudW1iZXJbXVxuICAgIGRhdGEodmFsOiBudW1iZXJbXSk6IHRoaXNcbiAgICBkYXRhKHZhbD8pIHtcbiAgICAgICAgaWYgKHZhbCA9PSBudWxsKSByZXR1cm4gdGhpcy5fZGF0YVxuICAgICAgICB0aGlzLl9kYXRhID0gdmFsXG4gICAgICAgIHJldHVybiB0aGlzXG4gICAgfVxuXG4gICAgcSgpOiBudW1iZXJcbiAgICBxKHZhbDogbnVtYmVyKTogdGhpc1xuICAgIHEodmFsPykge1xuICAgICAgICBpZiAodmFsID09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnVwZGF0ZXIucTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMudXBkYXRlci5xID0gdmFsXG4gICAgICAgIHRoaXMudXBkYXRlUXVpdmVycygpXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGV0YSgpOiBudW1iZXJcbiAgICBldGEodmFsOiBudW1iZXIpOiB0aGlzXG4gICAgZXRhKHZhbD8pIHtcbiAgICAgICAgaWYgKHZhbCA9PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy51cGRhdGVyLmV0YTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMudXBkYXRlci5ldGEgPSB2YWxcbiAgICAgICAgdGhpcy51cGRhdGVRdWl2ZXJzKClcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxufSIsImltcG9ydCAqIGFzIGQzIGZyb20gJ2QzJ1xuaW1wb3J0IHsgTWFudWFsVXBkYXRlciB9IGZyb20gXCIuL01hbnVhbFVwZGF0ZXJcIlxuaW1wb3J0IHsgVmVjdG9yMkQgfSBmcm9tIFwiLi4vdXRpbC90eXBlc1wiXG5pbXBvcnQgKiBhcyBSIGZyb20gJ3JhbWRhJ1xuaW1wb3J0IHsgU3ViamVjdCwgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSBcInJ4anNcIlxuXG5leHBvcnQgdHlwZSBCYWxsSGlzdG9yeSA9IHtcbiAgICBjbGFzc25hbWU6IHN0cmluZ1xuICAgIHg6IG51bWJlclxuICAgIGxvc3M6IG51bWJlclxufVxuXG5leHBvcnQgY2xhc3MgR29sZkJhbGwge1xuICAgIF94OiBudW1iZXJcbiAgICB1cGRhdGVyOiBNYW51YWxVcGRhdGVyXG4gICAgY2xhc3NuYW1lOiBzdHJpbmdcbiAgICBzdHJlYW06IFN1YmplY3Q8QmFsbEhpc3Rvcnk+IC8vIFB1c2hlcyBoaXN0b3J5IG9mIHggdmFsdWVzIHRvIHRoaXNcblxuICAgIGNvbnN0cnVjdG9yKHVwZGF0ZXI6IE1hbnVhbFVwZGF0ZXIsIGNsYXNzbmFtZTogc3RyaW5nLCB4ID0gMCkge1xuICAgICAgICB0aGlzLnVwZGF0ZXIgPSB1cGRhdGVyXG4gICAgICAgIHRoaXMuX3ggPSB4XG4gICAgICAgIHRoaXMuY2xhc3NuYW1lID0gY2xhc3NuYW1lXG4gICAgICAgIHRoaXMuc3RyZWFtID0gbmV3IFN1YmplY3QoKVxuICAgIH1cblxuICAgIGdldCB4KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5feFxuICAgIH1cblxuICAgIHNldCB4KHY6IG51bWJlcikge1xuICAgICAgICB0aGlzLl94ID0gdlxuICAgIH1cblxuICAgIG5leHRYKCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLnVwZGF0ZXIubmV4dCh0aGlzLl94KVxuICAgIH1cblxuICAgIG5leHQoKTogR29sZkJhbGwge1xuICAgICAgICBjb25zdCBuZXh0WCA9IHRoaXMubmV4dFgoKVxuICAgICAgICByZXR1cm4gbmV3IEdvbGZCYWxsKHRoaXMudXBkYXRlciwgdGhpcy5jbGFzc25hbWUsIHRoaXMubmV4dFgoKSlcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBVc2UgdGhlIHVwZGF0ZXIgdG8gdGFrZSB0aGUgbmV4dCBzdGVwXG4gICAgICogXG4gICAgICogQHBhcmFtIGZvcmNlWCBGb3JjZSB0aGUgbmV4dFggdG8gYmUgb2YgdGhpcyB2YWx1ZVxuICAgICAqL1xuICAgIHN0ZXBfKGZvcmNlWDpudW1iZXJ8bnVsbD1udWxsKTogdGhpcyB7XG4gICAgICAgIGlmIChmb3JjZVggIT0gbnVsbCkgdGhpcy54ID0gZm9yY2VYXG4gICAgICAgIGVsc2UgdGhpcy54ID0gdGhpcy5uZXh0WCgpXG5cbiAgICAgICAgdGhpcy5zdHJlYW0ubmV4dCh7XG4gICAgICAgICAgICBjbGFzc25hbWU6IHRoaXMuY2xhc3NuYW1lLFxuICAgICAgICAgICAgeDogdGhpcy54LFxuICAgICAgICAgICAgbG9zczogdGhpcy51cGRhdGVyLmxvc3ModGhpcy54KVxuICAgICAgICB9KVxuICAgICAgICByZXR1cm4gdGhpc1xuICAgIH1cblxuICAgIHRvVmVjKGY6ICh4OiBudW1iZXIpID0+IG51bWJlcik6IFZlY3RvcjJEIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHg6IHRoaXMuX3gsXG4gICAgICAgICAgICB5OiBmKHRoaXMuX3gpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBxKCk6IG51bWJlclxuICAgIHEodmFsOiBudW1iZXIpOiB0aGlzXG4gICAgcSh2YWw/KSB7XG4gICAgICAgIGlmICh2YWwgPT0gbnVsbCkgcmV0dXJuIHRoaXMudXBkYXRlci5xXG4gICAgICAgIHRoaXMudXBkYXRlci5xID0gdmFsXG4gICAgICAgIHJldHVybiB0aGlzXG4gICAgfVxuXG4gICAgZXRhKCk6IG51bWJlclxuICAgIGV0YSh2YWw6IG51bWJlcik6IHRoaXNcbiAgICBldGEodmFsPykge1xuICAgICAgICBpZiAodmFsID09IG51bGwpIHJldHVybiB0aGlzLnVwZGF0ZXIuZXRhXG4gICAgICAgIHRoaXMudXBkYXRlci5ldGEgPSB2YWxcbiAgICAgICAgcmV0dXJuIHRoaXNcbiAgICB9XG59IiwiaW1wb3J0ICogYXMgZDMgZnJvbSAnZDMnXG5pbXBvcnQgeyBEM1NlbCwgbGluc3BhY2UgfSBmcm9tICcuLi91dGlsL3hkMydcbmltcG9ydCAqIGFzIFIgZnJvbSAncmFtZGEnXG5pbXBvcnQgeyBWZWN0b3IyRCB9IGZyb20gJy4uL3V0aWwvdHlwZXMnXG5pbXBvcnQgeyBTVkdPcHRpb25zLCBTVkdWaXNDb21wb25lbnQgfSBmcm9tICcuLi91dGlsL1NWR1Zpc0NvbXBvbmVudCdcbmltcG9ydCB7IFNpbXBsZUV2ZW50SGFuZGxlciB9IGZyb20gJy4uL3V0aWwvU2ltcGxlRXZlbnRIYW5kbGVyJztcbmltcG9ydCB7IFNWRyB9IGZyb20gJy4uL3V0aWwvU1ZHcGx1cydcbmltcG9ydCB7IGludGVydmFsLCBmcm9tRXZlbnQgfSBmcm9tICdyeGpzJ1xuaW1wb3J0IHsgdGFrZSwgc2NhbiB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJ1xuaW1wb3J0IHsgTWFudWFsVXBkYXRlciB9IGZyb20gJy4vTWFudWFsVXBkYXRlcidcbmltcG9ydCB7IEdvbGZCYWxsIH0gZnJvbSAnLi9Hb2xmQmFsbCdcbmltcG9ydCB7IGxhbmRzY2FwZXMsIExhbmRzY2FwZSwgYmFzZUxvc3MsIGdldFBsb3RGdW5jIH0gZnJvbSBcIi4uL0dvbGZMYW5kc2NhcGVzXCI7XG5cblxudHlwZSBUID0gR29sZkJhbGxbXVxuXG5pbnRlcmZhY2UgR3JhcGhPcHRpb25zIGV4dGVuZHMgU1ZHT3B0aW9ucyB7XG4gICAgcGFkOiBudW1iZXJcbiAgICBtYXhJdGVyOiBudW1iZXIgLy8gSG93IG1hbnkgaXRlcmF0aW9ucyB0byB0YWtlP1xuICAgIGxhbmRzY2FwZTogTGFuZHNjYXBlXG59XG5cbmludGVyZmFjZSBTY2FsZVhZIHtcbiAgICB4OiBkMy5TY2FsZUxpbmVhcjxudW1iZXIsbnVtYmVyPlxuICAgIHk6IGQzLlNjYWxlTGluZWFyPG51bWJlcixudW1iZXI+XG59XG5cbmludGVyZmFjZSBHcmFwaFNjYWxlcyB7XG4gICAgYmFzZTJtYXRoPzogU2NhbGVYWSxcbiAgICBiYXNlMnB4PzogU2NhbGVYWSxcbiAgICBtYXRoMnB4PzogU2NhbGVYWSxcbiAgICBiYXNlMmxvc3M/OiBkMy5TY2FsZUxpbmVhcjxudW1iZXIsIG51bWJlcj4sXG4gICAgcGF0aHM/OiBkMy5MaW5lPG51bWJlcj5bXSxcbiAgICBjb2xvcj86IGQzLlNjYWxlU2VxdWVudGlhbDxudW1iZXI+LFxufVxuXG5pbnRlcmZhY2UgR3JhcGhTZWxzIHtcbiAgICB4YXhpcz86IEQzU2VsXG4gICAgeWF4aXM/OiBEM1NlbFxuICAgIHhsYWJlbD86IEQzU2VsXG4gICAgbGluZT86IEQzU2VsXG4gICAgYmFja2Ryb3A/OiBEM1NlbFxuICAgIGJhbGw/OiBEM1NlbFxuICAgIG1hc2s/OiBEM1NlbFxuICAgIG1hc2tMaW5lPzogRDNTZWxcbiAgICBtYXNrQmFja2dyb3VuZD86IEQzU2VsXG4gICAgbGluZUJhY2tncm91bmQ/OiBEM1NlbFxufVxuXG5sZXQgQ0xFQVJFRCA9IDA7XG4vLyAvLyBOb3RlIHRoYXQgcGxvdEZ1bmMgaXMgdGhlIGxvc3MgZnVuY3Rpb24gd2UgcGxvdCBhbmQgZnVuYyBpcyB0aGUgY29tcG9uZW50IG9mIHRoZSBsb3NzIGZ1bmN0aW9uIG5lZWRlZCBmb3IgdGhlIHVwZGF0ZXJcbi8vIC8vIGV4cG9ydCBjb25zdCBmdW5jID0geCA9PiBNYXRoLnRhbmgoeClcbi8vIC8vIGV4cG9ydCBjb25zdCBkRnVuYyA9IHggPT4gTWF0aC5wb3coTWF0aC5jb3NoKHgpLCAtMilcbi8vIGV4cG9ydCBjb25zdCBmdW5jID0geCA9PiBNYXRoLnRhbmgoeCAtIDExKSAvIDQgKyBNYXRoLnRhbmgoeCAtIDYpIC8gNCArIE1hdGgudGFuaCh4KSArIE1hdGgudGFuaCh4ICsgNikgLyA0ICsgTWF0aC50YW5oKHggKyAxMSkgLyA0XG4vLyBleHBvcnQgY29uc3QgZEZ1bmMgPSB4ID0+IE1hdGgucG93KE1hdGguY29zaCh4IC0gMTEpLCAtMikgLyA0ICsgTWF0aC5wb3coTWF0aC5jb3NoKHggLSA2KSwgLTIpIC8gNCArIE1hdGgucG93KE1hdGguY29zaCh4KSwgLTIpICsgTWF0aC5wb3coTWF0aC5jb3NoKHggKyA2KSwgLTIpIC8gNCArIE1hdGgucG93KE1hdGguY29zaCh4ICsgMTEpLCAtMikgLyA0XG4vLyAvLyBleHBvcnQgY29uc3QgZnVuYyA9IHggPT4gTWF0aC5zaWduKHgpICogKDEgLSAoMSAvICgxICsgTWF0aC5hYnMoeCkpKSlcbi8vIC8vIGV4cG9ydCBjb25zdCBkRnVuYyA9IHggPT4gMSAvIE1hdGgucG93KDEgKyBNYXRoLmFicyh4KSwgMilcblxuLy8gZXhwb3J0IGNvbnN0IHBsb3RGdW5jID0geCA9PiBiYXNlTG9zcyhmdW5jKHgpKVxuXG5leHBvcnQgY2xhc3MgR29sZkhvbGUxRCBleHRlbmRzIFNWR1Zpc0NvbXBvbmVudDxUPiB7XG4gICAgY3NzbmFtZSA9IFwiZ29sZi1ob2xlLWNoYXJ0XCJcbiAgICBtYXNrSWQ6IHN0cmluZ1xuXG4gICAgX2RhdGE6IFRcblxuICAgIG9wdGlvbnM6IEdyYXBoT3B0aW9ucyA9IHtcbiAgICAgICAgbWF4V2lkdGg6IDQwMCxcbiAgICAgICAgbWF4SGVpZ2h0OiAyMDAsXG4gICAgICAgIG1hcmdpbjogeyB0b3A6IDUsIHJpZ2h0OiAxMCwgYm90dG9tOiA0MCwgbGVmdDogMTAgfSxcbiAgICAgICAgcGFkOiAzMCxcbiAgICAgICAgbWF4SXRlcjogNjAwLFxuICAgICAgICBsYW5kc2NhcGU6IGxhbmRzY2FwZXMuaG9sZVxuICAgIH1cblxuICAgIHNjYWxlczogR3JhcGhTY2FsZXMgPSB7fVxuXG4gICAgc2VsczogR3JhcGhTZWxzID0ge31cblxuICAgIGNvbnN0cnVjdG9yKGQzcGFyZW50OiBEM1NlbCwgZXZlbnRIYW5kbGVyPzogU2ltcGxlRXZlbnRIYW5kbGVyLCBvcHRpb25zID0ge30sIElEID0gMCkge1xuICAgICAgICBzdXBlcihkM3BhcmVudCwgZXZlbnRIYW5kbGVyLCBvcHRpb25zLCBJRClcbiAgICAgICAgdGhpcy5tYXNrSWQgPSBgbGluZS1tYXNrLSR7dGhpcy5JRH1gXG4gICAgICAgIHN1cGVyLmluaXRTVkcob3B0aW9ucywgW1wiYmdcIl0pXG4gICAgICAgIHRoaXMuYmFzZS5jbGFzc2VkKHRoaXMuY3NzbmFtZSwgdHJ1ZSlcblxuICAgICAgICBjb25zdCB6ID0gdGhpcy5vcHRpb25zLmxhbmRzY2FwZVxuICAgICAgICBcbiAgICAgICAgLy8gTmVlZCB0byBoYXZlIGluaXRpYWwgZGF0YVxuICAgICAgICBjb25zdCBkYXRhID0gW1xuICAgICAgICAgICAgbmV3IEdvbGZCYWxsKG5ldyBNYW51YWxVcGRhdGVyKHouZiwgei5kZiwgMCwgMC45KSwgJ2dvbGYtYmFsbC1zZ2QnLCA0KSxcbiAgICAgICAgXVxuXG4gICAgICAgIHRoaXMuZGF0YShkYXRhKVxuICAgICAgICB0aGlzLmluaXRCYWxscygpXG4gICAgfVxuXG4gICAgbGFuZHNjYXBlKCk6IExhbmRzY2FwZVxuICAgIGxhbmRzY2FwZSh2YWw6IExhbmRzY2FwZSk6IHRoaXNcbiAgICBsYW5kc2NhcGUodmFsPykge1xuICAgICAgICBpZiAodmFsID09IG51bGwpIHJldHVybiB0aGlzLm9wdGlvbnMubGFuZHNjYXBlXG4gICAgICAgIGNvbnN0IG9wID0gdGhpcy5vcHRpb25zXG4gICAgICAgIG9wLmxhbmRzY2FwZSA9IHZhbFxuXG4gICAgICAgIC8vIFVwZGF0ZSB4cmFuZ2UgYW5kIHlyYW5nZVxuICAgICAgICB0aGlzLnVwZGF0ZVNjYWxlcyhvcClcbiAgICAgICAgdGhpcy51cGRhdGVBeGVzKHRoaXMuc2NhbGVzLCBvcClcblxuICAgICAgICAvLyBVcGRhdGUgZGF0YVxuICAgICAgICB0aGlzLmRhdGEoKS5mb3JFYWNoKGIgPT4ge1xuICAgICAgICAgICAgYi51cGRhdGVyLmYgPSB2YWwuZlxuICAgICAgICAgICAgYi51cGRhdGVyLmRmID0gdmFsLmRmXG4gICAgICAgIH0pXG5cbiAgICAgICAgdGhpcy5jbGVhckN1cnZlKClcbiAgICAgICAgdGhpcy5wbG90Q3VydmUoKVxuXG4gICAgICAgIHJldHVybiB0aGlzXG4gICAgfVxuXG4gICAgLyoqIFJldHVybiBmaXJzdCB1cGRhdGVyIGluIGRhdGEgKi9cbiAgICBnZXQgZGF0YUhlYWQoKTogR29sZkJhbGwge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZGF0YSgpWzBdXG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJMb29rcyBsaWtlIHRoZXJlIGlzIG5vIGRhdGEgaW4gdGhpcyBnb2xmIGhvbGVcIik7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUHV0IGEgdmVjdG9yIGludG8gdGhlIGNvb3JkaW5hdGUgc3lzdGVtIHVzZWQgYnkgdGhlIHZpc3VhbGl6YXRpb25cbiAgICAgKiBcbiAgICAgKiBAcGFyYW0gdiBWZWN0b3IgXG4gICAgICovXG4gICAgaW50b1Zpcyh2OiBWZWN0b3IyRCkge1xuICAgICAgICByZXR1cm4geyB4OiB0aGlzLnNjYWxlcy5tYXRoMnB4Lngodi54KSwgeTogdGhpcy5zY2FsZXMubWF0aDJweC55KHYueSkgfVxuICAgIH1cblxuICAgIC8vIFRha2UgYSB2ZWN0b3IgaW4gdGhlIGNvb3JkaW5hdGUgc3lzdGVtIGFuZCByZXR1cm4gaXQgdG8gdGhlIG1hdGggY29vcmRpbmF0ZXNcbiAgICBpbnRvTWF0aCh2OiBWZWN0b3IyRCkge1xuICAgICAgICByZXR1cm4geyB4OiB0aGlzLnNjYWxlcy5tYXRoMnB4LnguaW52ZXJ0KHYueCksIHk6IHRoaXMuc2NhbGVzLm1hdGgycHgueS5pbnZlcnQodi55KSB9XG4gICAgfVxuXG4gICAgLy8gVHVybiBhIG51bWJlciBpbnRvIGEgdmVjdG9yXG4gICAgbnVtMnZlYyh4OiBudW1iZXIpOiBWZWN0b3IyRCB7XG4gICAgICAgIGNvbnN0IG9wID0gdGhpcy5vcHRpb25zXG4gICAgICAgIHJldHVybiB7IHg6IHgsIHk6IG9wLmxhbmRzY2FwZS5sb3NzKHgpIH1cbiAgICB9XG5cbiAgICAvLyBUdXJuIGEgYmFsbCBpbnRvIGEgdmVjdG9yIGluIHRoZSB2aXN1YWxpemF0aW9uIGNvb3JkaW5hdGUgc3lzdGVtXG4gICAgYmFsbDJ2aXMoYjogR29sZkJhbGwpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaW50b1ZpcyhiLnRvVmVjKGdldFBsb3RGdW5jKHRoaXMub3B0aW9ucy5sYW5kc2NhcGUpKSlcbiAgICB9XG5cbiAgICAvLyBQbG90IGEgYmFsbCBvbiB0aGUgY2hhcnRcbiAgICBwbG90QmFsbChiOiBHb2xmQmFsbCkge1xuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcblxuICAgICAgICBjb25zdCB0b0NsYXNzID0gbmFtZSA9PiAnLicgKyBuYW1lXG4gICAgICAgIGNvbnN0IGNsc1NlbCA9IHRvQ2xhc3MoYi5jbGFzc25hbWUpXG5cbiAgICAgICAgY29uc3QgYmFsbCA9IHRoaXMuYmFsbDJ2aXMoYilcbiAgICAgICAgc2VsZi5zZWxzLmJhbGwgPSBzZWxmLmJhc2Uuc2VsZWN0QWxsKGNsc1NlbClcbiAgICAgICAgICAgIC5kYXRhKFtiYWxsXSlcbiAgICAgICAgICAgIC5qb2luKCdjaXJjbGUnKVxuICAgICAgICAgICAgLmNsYXNzZWQoJ2dvbGYtYmFsbCcsIHRydWUpXG4gICAgICAgICAgICAuY2xhc3NlZChiLmNsYXNzbmFtZSwgdHJ1ZSlcbiAgICAgICAgICAgIC5hdHRyKFwiY3hcIiwgZCA9PiBkLngpXG4gICAgICAgICAgICAuYXR0cihcImN5XCIsIGQgPT4gZC55KVxuICAgICAgICAgICAgLmF0dHIoXCJyXCIsIFwiNXB4XCIpXG4gICAgfVxuXG4gICAgY2xlYXJDdXJ2ZSgpIHtcbiAgICAgICAgdGhpcy5sYXllcnMuYmcuc2VsZWN0QWxsKCcubGluZScpLnJlbW92ZSgpXG4gICAgICAgIHRoaXMuc2Vscy5tYXNrTGluZS5odG1sKCcnKVxuICAgICAgICB0aGlzLmJhc2Uuc2VsZWN0QWxsKCcjbGluZS1iYWNrZ3JvdW5kJykuaHRtbCgnJylcbiAgICB9XG5cbiAgICBwbG90Q3VydmVCeURlZmF1bHQoeHM6IG51bWJlcltdKSB7XG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzLCBvcCA9IHRoaXMub3B0aW9ucywgc2NhbGVzID0gdGhpcy5zY2FsZXMsIHNlbHMgPSB0aGlzLnNlbHM7XG5cbiAgICAgICAgc2NhbGVzLnBhdGhzLmZvckVhY2gobGluZSA9PiB7XG4gICAgICAgICAgICB0aGlzLmxheWVycy5iZy5hcHBlbmQoXCJwYXRoXCIpXG4gICAgICAgICAgICAgICAgLmRhdHVtKHhzKVxuICAgICAgICAgICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJsaW5lXCIpXG4gICAgICAgICAgICAgICAgLmF0dHIoXCJkXCIsIGQgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbGluZShkKVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG5cbiAgICAgICAgc2Vscy5saW5lQmFja2dyb3VuZC5zZWxlY3RBbGwoXCIuZ3JhZC1ib3hcIilcbiAgICAgICAgICAgIC5kYXRhKFsxXSlcbiAgICAgICAgICAgIC5qb2luKCdyZWN0JylcbiAgICAgICAgICAgIC5jbGFzc2VkKCdncmFkLWJveCcsIHRydWUpXG4gICAgICAgICAgICAuYXR0cihcIndpZHRoXCIsIG9wLndpZHRoKVxuICAgICAgICAgICAgLmF0dHIoXCJoZWlnaHRcIiwgb3AuaGVpZ2h0KVxuICAgICAgICAgICAgLmF0dHIoXCJmaWxsLW9wYWNpdHlcIiwgMC4wKVxuICAgIH1cblxuICAgIHBsb3RDdXJ2ZUJ5R3JhZGllbnQoeHM6IG51bWJlcltdKSB7XG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzLCBzY2FsZXMgPSB0aGlzLnNjYWxlcywgc2VscyA9IHRoaXMuc2Vscywgb3AgPSB0aGlzLm9wdGlvbnM7XG5cbiAgICAgICAgY29uc3QgeHdpZHRoID0gb3Aud2lkdGggKiAoeHNbMV0gLSB4c1swXSkgLyAoZDMubWF4KHhzKSAtIGQzLm1pbih4cykpIC8vIEFzc3VtZXMgbGVuZ3RoIG9mIHhzID4gMVxuXG4gICAgICAgIGNvbnN0IGJhbGxVcGRhdGVyID0gc2VsZi5kYXRhKClbMF0udXBkYXRlclxuXG4gICAgICAgIC8vIENsZWFyIG1hc2tcbiAgICAgICAgY29uc3QgbGluZSA9IHNjYWxlcy5wYXRoc1swXVxuXG4gICAgICAgIHNlbHMubWFza0xpbmUuYXR0cignZCcsIGxpbmUoeHMpKVxuXG4gICAgICAgIGNvbnN0IGNvbG9yU2NhbGUgPSBkMy5zY2FsZVNlcXVlbnRpYWwoZDMuaW50ZXJwb2xhdGVQbGFzbWEpXG4gICAgICAgIFxuICAgICAgICAvLyBDaGVjayB0aGUgZ3JhZGllbnQgcmFuZ2VcbiAgICAgICAgY29uc3QgdXBkYXRlQW10cyA9IHhzLm1hcCh4ID0+IE1hdGgubG9nKE1hdGguYWJzKGJhbGxVcGRhdGVyLnVwZGF0ZU1vZGlmaWVyKHgpKSkpXG5cbiAgICAgICAgY29uc3QgY2xhbXBlZFNjYWxlID0gUi5jdXJyeSgobWluOm51bWJlciwgbWF4Om51bWJlciwgYXJyOm51bWJlcltdKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBjbGFtcGVyID0gUi5jbGFtcChtaW4sIG1heClcbiAgICAgICAgICAgIGNvbnN0IGNsYW1wZWRBcnIgPSBSLm1hcChjbGFtcGVyLCBhcnIpXG4gICAgICAgICAgICByZXR1cm4gYXJyLm1hcCh4ID0+IHggLSBkMy5tZWFuKGNsYW1wZWRBcnIpKVxuICAgICAgICAgICAgLy8gcmV0dXJuIGNsYW1wZWRBcnIubWFwKHggPT4geCAtIGQzLm1lYW4oY2xhbXBlZEFycikpXG4gICAgICAgIH0pXG5cbiAgICAgICAgLy8gY29uc3QgY2xhbXBlciA9IGNsYW1wZWRTY2FsZSgtMiwgMik7XG4gICAgICAgIC8vIGNvbnN0IGRhdGEgPSBkMy56aXAoeHMsIGNsYW1wZXIodXBkYXRlQW10cykpLm1hcChkID0+IHtyZXR1cm4ge3g6IGRbMF0sIHVwZGF0ZUFtdDogZFsxXX19KVxuICAgICAgICBjb25zdCBkYXRhID0gZDMuemlwKHhzLCB1cGRhdGVBbXRzKS5tYXAoZCA9PiB7cmV0dXJuIHt4OiBkWzBdLCB1cGRhdGVBbXQ6IGRbMV19fSlcbiAgICAgICAgLy8gY29uc3QgZXh0ZW50ID0gZDMuZXh0ZW50KGNsYW1wZXIodXBkYXRlQW10cykpXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiRXh0ZW50OiBcIiwgZXh0ZW50KTtcblxuXG4gICAgICAgIC8vQHRzLWlnbm9yZVxuICAgICAgICBjb25zdCBjc2NhbGUgPSBkMy5zY2FsZUxpbmVhcigpLmRvbWFpbihbLTIsIDAsIDJdKS5yYW5nZShbXCIjNjdhOWNmXCIsIFwiI2Y3ZjdmN1wiLCBcIiNlZjhhNjJcIl0pXG5cbiAgICAgICAgc2Vscy5saW5lQmFja2dyb3VuZC5zZWxlY3RBbGwoJy5ncmFkLWJveCcpXG4gICAgICAgICAgICAuZGF0YShkYXRhKVxuICAgICAgICAgICAgLmpvaW4oJ3JlY3QnKVxuICAgICAgICAgICAgLmNsYXNzZWQoJ2dyYWQtYm94JywgdHJ1ZSlcbiAgICAgICAgICAgIC5hdHRyKCdoZWlnaHQnLCBvcC5oZWlnaHQpXG4gICAgICAgICAgICAuYXR0cignd2lkdGgnLCBzZWxmLnNjYWxlcy5tYXRoMnB4LngoeHdpZHRoKSlcbiAgICAgICAgICAgIC5hdHRyKCd4JywgZCA9PiBzZWxmLnNjYWxlcy5tYXRoMnB4LngoZC54KSlcbiAgICAgICAgICAgIC5hdHRyKCd5JywgMClcbiAgICAgICAgICAgIC5hdHRyKCdmaWxsJywgZCA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNzY2FsZShkLnVwZGF0ZUFtdClcbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgc2Vscy5saW5lQmFja2dyb3VuZC5hdHRyKCdtYXNrJywgYHVybCgjJHt0aGlzLm1hc2tJZH0pYClcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBQbG90IHRoZSB2YWx1ZXMgb2YgYWxsIHggYWNjb3JkaW5nIHRvIHRoZSBmdW5jdGlvblxuICAgICAqIFxuICAgICAqIEBwYXJhbSB4IEEgbGluc3BhY2Ugb2YgeCB2YWx1ZXMgb3ZlciB3aGljaCB0byBwbG90IGEgY3VydmVcbiAgICAgKi9cbiAgICBwbG90Q3VydmUoKSB7XG4gICAgICAgIGNvbnN0IG9wID0gdGhpcy5vcHRpb25zXG4gICAgICAgIGNvbnN0IHhzID0gbGluc3BhY2Uob3AubGFuZHNjYXBlLnhyYW5nZVswXSwgb3AubGFuZHNjYXBlLnhyYW5nZVsxXSwgMTAwMClcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXMsIHNjYWxlcyA9IHRoaXMuc2NhbGVzLCBzZWxzID0gdGhpcy5zZWxzO1xuXG4gICAgICAgIGlmIChzZWxmLmRhdGEoKSAhPSBudWxsKSB7XG4gICAgICAgICAgICBpZiAoc2VsZi5kYXRhKCkubGVuZ3RoID4gMSkgc2VsZi5wbG90Q3VydmVCeURlZmF1bHQoeHMpXG4gICAgICAgICAgICBlbHNlIHNlbGYucGxvdEN1cnZlQnlHcmFkaWVudCh4cylcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHVwZGF0ZVNjYWxlcyhvcDogR3JhcGhPcHRpb25zKSB7XG4gICAgICAgIGNvbnN0IHNjYWxlcyA9IHRoaXMuc2NhbGVzXG5cbiAgICAgICAgY29uc3QgeGJhc2VSYW5nZSA9IFstMSwgMV1cbiAgICAgICAgY29uc3QgeWJhc2VSYW5nZSA9IFsxLCAwXVxuXG4gICAgICAgIGNvbnN0IHhweFJhbmdlID0gWzAsIG9wLndpZHRoXVxuICAgICAgICBjb25zdCB5cHhSYW5nZSA9IFtvcC5oZWlnaHQsIDBdXG5cbiAgICAgICAgc2NhbGVzLmJhc2UybWF0aCA9IHtcbiAgICAgICAgICAgIHg6IGQzLnNjYWxlTGluZWFyKCkuZG9tYWluKHhiYXNlUmFuZ2UpLnJhbmdlKG9wLmxhbmRzY2FwZS54cmFuZ2UpLFxuICAgICAgICAgICAgeTogZDMuc2NhbGVMaW5lYXIoKS5kb21haW4oeWJhc2VSYW5nZSkucmFuZ2Uob3AubGFuZHNjYXBlLnlyYW5nZSlcbiAgICAgICAgfVxuICAgICAgICBzY2FsZXMuYmFzZTJweCA9IHtcbiAgICAgICAgICAgIHg6IGQzLnNjYWxlTGluZWFyKCkuZG9tYWluKHhiYXNlUmFuZ2UpLnJhbmdlKHhweFJhbmdlKSxcbiAgICAgICAgICAgIHk6IGQzLnNjYWxlTGluZWFyKCkuZG9tYWluKHliYXNlUmFuZ2UpLnJhbmdlKHlweFJhbmdlKVxuICAgICAgICB9XG4gICAgICAgIHNjYWxlcy5tYXRoMnB4ID0ge1xuICAgICAgICAgICAgeDogZDMuc2NhbGVMaW5lYXIoKS5kb21haW4ob3AubGFuZHNjYXBlLnhyYW5nZSkucmFuZ2UoeHB4UmFuZ2UpLFxuICAgICAgICAgICAgeTogZDMuc2NhbGVMaW5lYXIoKS5kb21haW4ob3AubGFuZHNjYXBlLnlyYW5nZSkucmFuZ2UoeXB4UmFuZ2UpXG4gICAgICAgIH1cblxuICAgICAgICBzY2FsZXMuYmFzZTJsb3NzID0gZDMuc2NhbGVMaW5lYXIoKS5kb21haW4ob3AubGFuZHNjYXBlLnlyYW5nZSkucmFuZ2UoWzAsIDFdKVxuXG4gICAgICAgIHNjYWxlcy5wYXRocyA9IHRoaXMubmV3UGF0aHMob3AubGFuZHNjYXBlKVxuICAgIH1cblxuICAgIHVwZGF0ZUF4ZXMoc2NhbGVzOiBHcmFwaFNjYWxlcywgb3A6IEdyYXBoT3B0aW9ucykge1xuICAgICAgICBjb25zdCBzZWxzID0gdGhpcy5zZWxzXG4gICAgICAgIHNlbHMueGF4aXMuY2FsbChkMy5heGlzQm90dG9tKHNjYWxlcy5tYXRoMnB4LngpLnRpY2tWYWx1ZXMoWzBdKS50aWNrRm9ybWF0KHggPT4gJzAnKSlcbiAgICB9XG5cbiAgICBpbml0KCkge1xuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICAgICAgY29uc3Qgb3AgPSB0aGlzLm9wdGlvbnM7XG4gICAgICAgIGNvbnN0IHNjYWxlcyA9IHRoaXMuc2NhbGVzO1xuICAgICAgICBjb25zdCBzZWxzID0gdGhpcy5zZWxzO1xuXG4gICAgICAgIHRoaXMudXBkYXRlU2NhbGVzKG9wKVxuXG4gICAgICAgIHNlbHMueGF4aXMgPSB0aGlzLmJhc2UuYXBwZW5kKFwiZ1wiKVxuICAgICAgICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcImF4aXMgYXhpcy0teFwiKVxuICAgICAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgU1ZHLnRyYW5zbGF0ZSgwLCBvcC5oZWlnaHQpKVxuXG4gICAgICAgIHNlbHMueGxhYmVsID0gdGhpcy5iYXNlLmFwcGVuZChcInRleHRcIilcbiAgICAgICAgICAgIC50ZXh0KFwiXFx1MDNCOCAtIFxcdTAzQjgqXCIpXG4gICAgICAgICAgICAuYXR0cihcImNsYXNzXCIsIFwidGl0bGVzXCIpXG4gICAgICAgICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBTVkcudHJhbnNsYXRlKG9wLndpZHRoIC8gMiwgb3AuaGVpZ2h0ICsgb3AucGFkKSlcblxuICAgICAgICAvLyBBZGQgYmFzZSBtYXNrXG4gICAgICAgIHNlbHMubWFzayA9IHRoaXMuYmFzZS5hcHBlbmQoJ21hc2snKS5hdHRyKCdpZCcsIHRoaXMubWFza0lkKVxuXG4gICAgICAgIHNlbHMubWFza0JhY2tncm91bmQgPSBzZWxzLm1hc2suYXBwZW5kKCdyZWN0JylcbiAgICAgICAgICAgIC5hdHRyKCd3aWR0aCcsIG9wLndpZHRoKVxuICAgICAgICAgICAgLmF0dHIoJ2hlaWdodCcsIG9wLmhlaWdodClcbiAgICAgICAgICAgIC5hdHRyKCdmaWxsJywgJ2JsYWNrJylcblxuICAgICAgICBzZWxzLm1hc2tMaW5lID0gc2Vscy5tYXNrLlxuICAgICAgICAgICAgc2VsZWN0QWxsKFwiI3RyYW5zcGFyZW50LWxpbmVcIikuXG4gICAgICAgICAgICBkYXRhKFsxXSlcbiAgICAgICAgICAgIC5qb2luKCdwYXRoJylcbiAgICAgICAgICAgIC5hdHRyKCdpZCcsICd0cmFuc3BhcmVudC1saW5lJylcbiAgICAgICAgICAgIC5hdHRyKCdzdHJva2UnLCAnd2hpdGUnKVxuICAgICAgICAgICAgLmF0dHIoJ3N0cm9rZS13aWR0aCcsICc1cHgnKVxuXG4gICAgICAgIHNlbHMubGluZUJhY2tncm91bmQgPSBzZWxmLmJhc2Uuc2VsZWN0QWxsKCcjbGluZS1iYWNrZ3JvdW5kJylcbiAgICAgICAgICAgIC5kYXRhKFsxXSlcbiAgICAgICAgICAgIC5qb2luKCdnJylcbiAgICAgICAgICAgIC5hdHRyKCdpZCcsICdsaW5lLWJhY2tncm91bmQnKVxuXG4gICAgICAgIHNlbHMuYmFja2Ryb3AgPSB0aGlzLmxheWVycy5iZy5hcHBlbmQoXCJnXCIpXG4gICAgICAgICAgICAuYXR0cihcImlkXCIsIFwiYmFja2Ryb3BcIilcbiAgICAgICAgICAgIC5jbGFzc2VkKCdncmFzcycsIHRydWUpXG4gICAgICAgICAgICAuYXBwZW5kKFwicmVjdFwiKVxuICAgICAgICAgICAgLmF0dHIoXCJoZWlnaHRcIiwgb3AuaGVpZ2h0KVxuICAgICAgICAgICAgLmF0dHIoXCJ3aWR0aFwiLCBvcC53aWR0aClcblxuICAgICAgICB0aGlzLnVwZGF0ZUF4ZXMoc2NhbGVzLCBvcClcblxuICAgICAgICBzY2FsZXMucGF0aHMgPSB0aGlzLm5ld1BhdGhzKG9wLmxhbmRzY2FwZSlcblxuICAgICAgICB0aGlzLnBsb3RDdXJ2ZSgpXG4gICAgfVxuXG4gICAgbmV3UGF0aHMobGFuZHNjYXBlOiBMYW5kc2NhcGUpIHtcbiAgICAgICAgY29uc3Qgc2NhbGVzID0gdGhpcy5zY2FsZXNcbiAgICAgICAgY29uc3QgYmFzZUxpbmUgPSBkMy5saW5lPG51bWJlcj4oKVxuICAgICAgICAgICAgLngoKGQ6IG51bWJlciwgaTogbnVtYmVyKSA9PiBzY2FsZXMubWF0aDJweC54KGQpKVxuICAgICAgICAgICAgLnkoKGQ6IG51bWJlciwgaTogbnVtYmVyKSA9PiBzY2FsZXMubWF0aDJweC55KGdldFBsb3RGdW5jKGxhbmRzY2FwZSkoZCkpKVxuICAgICAgICAgICAgLmN1cnZlKGQzLmN1cnZlTGluZWFyKVxuXG4gICAgICAgIHJldHVybiBbYmFzZUxpbmVdXG4gICAgfVxuXG4gICAgaW5pdEJhbGxzKCkge1xuICAgICAgICBjb25zdCBzZWxmID0gdGhpcywgb3AgPSB0aGlzLm9wdGlvbnM7XG5cbiAgICAgICAgY29uc3QgdG9vU21hbGwgPSAoeDogbnVtYmVyKSA9PiB4IDwgKG9wLmxhbmRzY2FwZS54cmFuZ2VbMF0pXG4gICAgICAgIGNvbnN0IHRvb0JpZyA9ICh4OiBudW1iZXIpID0+IHggPiAob3AubGFuZHNjYXBlLnhyYW5nZVsxXSlcblxuICAgICAgICBjb25zdCBmaXhPdXRPZkJvdW5kcyA9ICh4OiBudW1iZXIpID0+IHtcbiAgICAgICAgICAgIGxldCBvdXQ6IG51bWJlclxuXG4gICAgICAgICAgICBpZiAoaXNOYU4oeCkpIG91dCA9IG9wLmxhbmRzY2FwZS54cmFuZ2VbMF1cbiAgICAgICAgICAgIGVsc2UgaWYgKHRvb1NtYWxsKHgpKSBvdXQgPSBvcC5sYW5kc2NhcGUueHJhbmdlWzBdXG4gICAgICAgICAgICBlbHNlIGlmICh0b29CaWcoeCkpIG91dCA9IG9wLmxhbmRzY2FwZS54cmFuZ2VbMV1cbiAgICAgICAgICAgIGVsc2Ugb3V0ID0geFxuXG4gICAgICAgICAgICByZXR1cm4gb3V0XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBnZXROZXh0QmFsbChiOiBHb2xmQmFsbCk6IEdvbGZCYWxsIHtcbiAgICAgICAgICAgIGNvbnN0IG5leHRYID0gYi5uZXh0WCgpXG4gICAgICAgICAgICBjb25zdCBjdXJyQmFsbFNlbCA9IHNlbGYuYmFzZS5zZWxlY3QoYC4ke2IuY2xhc3NuYW1lfWApXG4gICAgICAgICAgICBjb25zdCBmb3JjZVggPSBmaXhPdXRPZkJvdW5kcyhuZXh0WClcbiAgICAgICAgICAgIGlmICghY3VyckJhbGxTZWwuY2xhc3NlZCgnZGVhZC1iYWxsJykpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYi5zdGVwXyhmb3JjZVgpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gYlxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgc3ViT2JqID0ge1xuICAgICAgICAgICAgbmV4dDogZ2JzID0+IHtcbiAgICAgICAgICAgICAgICBnYnMuZm9yRWFjaChiID0+IHNlbGYucGxvdEJhbGwoYikpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXJyb3I6IGIgPT4gY29uc29sZS5sb2coXCJFUlJPUjogXCIsIGIpLFxuICAgICAgICAgICAgY29tcGxldGU6ICgpID0+IGNvbnNvbGUubG9nKFwiQ09NUExFVEVcIiksXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB0aWNrZXIgPSAoKSA9PiBpbnRlcnZhbCgxMCkucGlwZShcbiAgICAgICAgICAgIHNjYW4oKGFjYzogVCkgPT4ge1xuICAgICAgICAgICAgICAgIC8vIFVuc3Vic2NyaWJlciB0aWNrZXIgaWYgYWxsIGJhbGxzIGRlYWRcbiAgICAgICAgICAgICAgICBpZiAoUi5hbGwoKGI6IEdvbGZCYWxsKSA9PiBkMy5zZWxlY3QoYC4ke2IuY2xhc3NuYW1lfWApLmNsYXNzZWQoJ2RlYWQtYmFsbCcpLCBzZWxmLmRhdGEoKSkpIHtcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ1RpY2tlci51bnN1YnNjcmliZSgpXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgc2VsZi5kYXRhKCkuZm9yRWFjaChiID0+IGdldE5leHRCYWxsKGIpKVxuICAgICAgICAgICAgICAgIHJldHVybiBzZWxmLmRhdGEoKVxuICAgICAgICAgICAgfSwgc2VsZi5kYXRhKCkpLFxuICAgICAgICAgICAgdGFrZShvcC5tYXhJdGVyKVxuICAgICAgICApLnN1YnNjcmliZShzdWJPYmopXG5cbiAgICAgICAgLy8gUnVubmluZyB0aWNrZXIgc3RhcnRzIGFzIGFuIGVtcHR5IHN1YnNjcmlwdGlvbiBvYmplY3QsIGlzIGxhdGVyIHJlcGxhY2VkIGJ5IHRoZSBydW5uaW5nIHRpY2tlclxuICAgICAgICBsZXQgcnVubmluZ1RpY2tlciA9IHtcbiAgICAgICAgICAgIHVuc3Vic2NyaWJlOiAoKSA9PiBjb25zb2xlLmxvZyhcIkVtcHR5IFRpY2tlciFcIilcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHBsb3RCYWxscyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJ1bm5pbmdUaWNrZXIudW5zdWJzY3JpYmUoKVxuICAgICAgICAgICAgY29uc3QgY2xpY2sgPSB0b1ZlYyhkMy5tb3VzZSh0aGlzKSlcbiAgICAgICAgICAgIGQzLnNlbGVjdEFsbCgnLmdvbGYtYmFsbCcpLmNsYXNzZWQoJ2RlYWQtYmFsbCcsIGZhbHNlKVxuICAgICAgICAgICAgc2VsZi5kYXRhKCkuZm9yRWFjaCgoYiwgaSkgPT4gYi54ID0gc2VsZi5pbnRvTWF0aChjbGljaykueClcbiAgICAgICAgICAgIHNlbGYuZGF0YSgpLmZvckVhY2goYiA9PiBzZWxmLnBsb3RCYWxsKGIpKVxuICAgICAgICAgICAgc2VsZi5ldmVudEhhbmRsZXIudHJpZ2dlcihcImxvc3MtY2xpY2tcIiwge30pXG5cbiAgICAgICAgICAgIHJ1bm5pbmdUaWNrZXIgPSB0aWNrZXIoKVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gdGhpcy5zZWxzLmJhY2tkcm9wLm9uKCdjbGljaycsIHBsb3RCYWxscylcbiAgICAgICAgLy8gdGhpcy5zZWxzLm1hc2tCYWNrZ3JvdW5kLm9uKCdjbGljaycsIHBsb3RCYWxscylcbiAgICAgICAgLy8gdGhpcy5zZWxzLm1hc2sub24oJ2NsaWNrJywgcGxvdEJhbGxzKVxuICAgICAgICB0aGlzLnNlbHMubGluZUJhY2tncm91bmQub24oJ2NsaWNrJywgcGxvdEJhbGxzKVxuICAgIH1cblxuICAgIHEoKTogbnVtYmVyXG4gICAgcSh2YWw6IG51bWJlcik6IHRoaXNcbiAgICBxKHZhbD8pIHtcbiAgICAgICAgaWYgKHZhbCA9PSBudWxsKSByZXR1cm4gdGhpcy5kYXRhSGVhZC51cGRhdGVyLnFcbiAgICAgICAgdGhpcy5kYXRhSGVhZC5xKHZhbClcbiAgICAgICAgdGhpcy5wbG90Q3VydmUoKVxuICAgICAgICByZXR1cm4gdGhpc1xuICAgIH1cblxuICAgIGV0YSgpOiBudW1iZXJcbiAgICBldGEodmFsOiBudW1iZXIpOiB0aGlzXG4gICAgZXRhKHZhbD8pIHtcbiAgICAgICAgaWYgKHZhbCA9PSBudWxsKSByZXR1cm4gdGhpcy5kYXRhSGVhZC51cGRhdGVyLnFcbiAgICAgICAgdGhpcy5kYXRhSGVhZC5ldGEodmFsKVxuICAgICAgICAvLyB0aGlzLnBsb3RDdXJ2ZSgpXG4gICAgICAgIHJldHVybiB0aGlzXG4gICAgfVxuXG4gICAgZGF0YSgpOiBUXG4gICAgZGF0YSh2YWw6IFQpOiB0aGlzXG4gICAgZGF0YSh2YWw/KSB7XG4gICAgICAgIGlmICh2YWwgPT0gbnVsbCkgcmV0dXJuIHRoaXMuX2RhdGFcbiAgICAgICAgdGhpcy5fZGF0YSA9IHZhbDtcbiAgICAgICAgdGhpcy5pbml0QmFsbHMoKVxuICAgICAgICByZXR1cm4gdGhpc1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIElOUExBQ0UgY2hhbmdlIHRoZSBnb2xmIGJhbGxzIGludG8gdGhlIEJBU0Ugc2NhbGVcbiAgICAgKi9cbiAgICBkYXRhVG9CYXNlXygpOiBUIHtcbiAgICAgICAgdGhpcy5kYXRhKCkubWFwKGIgPT4ge1xuICAgICAgICAgICAgYi54ID0gdGhpcy5zY2FsZXMuYmFzZTJtYXRoLnguaW52ZXJ0KGIueClcbiAgICAgICAgICAgIHJldHVybiBiXG4gICAgICAgIH0pXG5cbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YSgpXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTW9kaWZ5IHRoZSBnb2xmIGJhbGxzIGFuZCBjaGFuZ2UgdGhlaXIgeCB2YWx1ZSBmcm9tIEJBU0UgdG8gdGhlIG5ldyBNQVRIXG4gICAgICovXG4gICAgZGF0YUZyb21CYXNlKHZhbDogVCk6IHRoaXMge1xuICAgICAgICB2YWwuZm9yRWFjaChiID0+IHtcbiAgICAgICAgICAgIGIueCA9IHRoaXMuc2NhbGVzLmJhc2UybWF0aC54KGIueClcbiAgICAgICAgfSlcblxuICAgICAgICB0aGlzLmluaXRCYWxscygpXG4gICAgICAgIHJldHVybiB0aGlzXG4gICAgfVxufVxuXG5mdW5jdGlvbiB0b1ZlYyhbeCwgeV06IFtudW1iZXIsIG51bWJlcl0pOiBWZWN0b3IyRCB7XG4gICAgcmV0dXJuIHsgeDogeCwgeTogeSB9XG59IiwiaW1wb3J0ICogYXMgZDMgZnJvbSAnZDMnXG5pbXBvcnQgKiBhcyBSIGZyb20gJ3JhbWRhJ1xuXG5pbXBvcnQgeyBDaGFydDJELCBDaGFydE9wdGlvbnMsIENoYXJ0U2NhbGVzIH0gZnJvbSAnLi4vdXRpbC9DaGFydDJkVmlzQ29tcG9uZW50J1xuaW1wb3J0IHsgU2ltcGxlRXZlbnRIYW5kbGVyIH0gZnJvbSAnLi4vdXRpbC9TaW1wbGVFdmVudEhhbmRsZXInXG5pbXBvcnQgeyBEM1NlbCB9IGZyb20gJy4uL3V0aWwveGQzJ1xuaW1wb3J0IHsgU1ZHIH0gZnJvbSAnLi4vdXRpbC9TVkdwbHVzJ1xuXG5pbXBvcnQgeyBCYWxsSGlzdG9yeSB9IGZyb20gJy4vR29sZkJhbGwnXG5cbmNvbnN0IGF4aXNPZmZzZXQgPSAxIC8vIFVzZSB0aGlzIHRvIGNvdmVyIHRoZSBwbG90dGVkIGxpbmVzXG5cbmludGVyZmFjZSBHcmFwaFNlbHMge1xuICAgIHhheGlzPzogRDNTZWxcbiAgICB5YXhpcz86IEQzU2VsXG4gICAgeGxhYmVsPzogRDNTZWxcbiAgICBsaW5lPzogRDNTZWxcbiAgICBiYWNrZHJvcD86IEQzU2VsXG4gICAgYmFsbD86IEQzU2VsXG59XG5cbnR5cGUgVHJhY2tlciA9IHtcbiAgICBzZWw6IEQzU2VsLFxuICAgIHZhbHM6IG51bWJlcltdXG59XG5cbnR5cGUgTGluZVRyYWNrZXIgPSB7XG4gICAgKGtleTogc3RyaW5nKTogVHJhY2tlclxufVxuXG50eXBlIFQgPSBMaW5lVHJhY2tlclxuXG5cbmV4cG9ydCBjbGFzcyBHb2xmTG9zc2VzIGV4dGVuZHMgQ2hhcnQyRDxUPiB7XG4gICAgY3NzbmFtZSA9IFwibGluZS1wbG90XCJcblxuICAgIF9kYXRhOiBUXG5cbiAgICBvcHRpb25zOiBDaGFydE9wdGlvbnMgPSB7XG4gICAgICAgIG1heFdpZHRoOiAzNTAsXG4gICAgICAgIG1heEhlaWdodDogMjUwLFxuICAgICAgICBtYXJnaW46IHsgdG9wOiAxMCwgcmlnaHQ6IDEwLCBib3R0b206IDMwLCBsZWZ0OiAzMCB9LFxuICAgICAgICBwYWQ6IHsgdG9wOiA1LCByaWdodDogMSwgYm90dG9tOiAxMCwgbGVmdDogMTUgfSxcbiAgICAgICAgeHJhbmdlOiBbMCwgNjAwXSxcbiAgICAgICAgeXJhbmdlOiBbMS4xLCAxZS0zXSxcbiAgICB9XG4gICAgZGVmYXVsdFhyYW5nZTogW251bWJlciwgbnVtYmVyXVxuXG4gICAgc2NhbGVzOiBDaGFydFNjYWxlcyA9IHt9XG5cbiAgICBzZWxzOiBHcmFwaFNlbHMgPSB7fVxuXG4gICAgcGF0aDogZDMuTGluZTxudW1iZXI+XG5cbiAgICBjb25zdHJ1Y3RvcihkM3BhcmVudDogRDNTZWwsIGV2ZW50SGFuZGxlcj86IFNpbXBsZUV2ZW50SGFuZGxlciwgb3B0aW9ucyA9IHt9KSB7XG4gICAgICAgIHN1cGVyKGQzcGFyZW50LCBldmVudEhhbmRsZXIsIG9wdGlvbnMpXG4gICAgICAgIHN1cGVyLmluaXRTVkcodGhpcy5vcHRpb25zLCBbXCJiZ1wiXSlcbiAgICAgICAgdGhpcy5iYXNlLmNsYXNzZWQodGhpcy5jc3NuYW1lLCB0cnVlKVxuICAgICAgICB0aGlzLmRlZmF1bHRYcmFuZ2UgPSB0aGlzLm9wdGlvbnMueHJhbmdlXG4gICAgICAgIHRoaXMuZGF0YSg8TGluZVRyYWNrZXI+e30pXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUGxvdCB0aGUgdmFsdWVzIG9mIGFsbCB4IGFjY29yZGluZyB0byB0aGUgZnVuY3Rpb25cbiAgICAgKiBcbiAgICAgKiBAcGFyYW0geCBBIGxpbnNwYWNlIG9mIHggdmFsdWVzIG92ZXIgd2hpY2ggdG8gcGxvdCBhIGN1cnZlXG4gICAgICovXG4gICAgcHJvdGVjdGVkIGFkZERhdGFLZXlfKGNsYXNzbmFtZTogc3RyaW5nKSB7XG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzXG4gICAgICAgIGlmICghUi5oYXMoY2xhc3NuYW1lLCB0aGlzLmRhdGEoKSkpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBBZGRpbmcga2V5OiAke2NsYXNzbmFtZX1gKTtcbiAgICAgICAgICAgIHRoaXMuZGF0YSgpW2NsYXNzbmFtZV0gPSB7XG4gICAgICAgICAgICAgICAgc2VsOiBzZWxmLmluaXRCYXNlTGluZShjbGFzc25hbWUpLFxuICAgICAgICAgICAgICAgIHZhbHM6IFtdXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBMaXZlIHVwZGF0ZSB0aGUgeHJhbmdlXG4gICAgdXBkYXRlU2NhbGVzKHhyYW5nZSkge1xuICAgICAgICBjb25zdCBvcCA9IHRoaXMub3B0aW9uc1xuICAgICAgICB0aGlzLnNjYWxlcy54ID0gZDMuc2NhbGVMaW5lYXIoKS5kb21haW4oeHJhbmdlKS5yYW5nZShbMCwgb3Aud2lkdGhdKS5jbGFtcCh0cnVlKVxuICAgIH1cblxuICAgIGNsZWFyUGF0aHMoKSB7XG4gICAgICAgIHRoaXMuZGF0YShSLm1hcChkID0+IFIuYXNzb2MoJ3ZhbHMnLCBbXSwgZCksIHRoaXMuZGF0YSgpKSlcbiAgICB9XG5cbiAgICBwbG90UGF0aChkOiBCYWxsSGlzdG9yeSwgc2NhbGU/KSB7XG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuICAgICAgICB0aGlzLmFkZERhdGFLZXlfKGQuY2xhc3NuYW1lKTtcblxuICAgICAgICBjb25zdCBzY2FsZXIgPSAoc2NhbGUgPT0gbnVsbCkgPyB4ID0+IHggOiBzY2FsZVxuXG4gICAgICAgIGNvbnN0IGN1cnJWYWxzID0gdGhpcy5kYXRhKClbZC5jbGFzc25hbWVdO1xuICAgICAgICBjdXJyVmFscy52YWxzLnB1c2goc2NhbGVyKGQubG9zcykpXG5cbiAgICAgICAgLy8gc2xpZGluZyB4LWF4aXNcbiAgICAgICAgY29uc3QgbmV3WHJhbmdlID0gW01hdGgubWF4KDAsIGN1cnJWYWxzLnZhbHMubGVuZ3RoLXRoaXMub3B0aW9ucy54cmFuZ2VbMV0pLCBNYXRoLm1heChjdXJyVmFscy52YWxzLmxlbmd0aCx0aGlzLm9wdGlvbnMueHJhbmdlWzFdKV1cbiAgICAgICAgdGhpcy51cGRhdGVTY2FsZXMobmV3WHJhbmdlKVxuICAgICAgICB0aGlzLmNyZWF0ZVBhdGgoKVxuXG4gICAgICAgIGN1cnJWYWxzLnNlbC5kYXRhKFtjdXJyVmFsc10pXG4gICAgICAgICAgICAuam9pbihcInBhdGhcIilcbiAgICAgICAgICAgIC5jbGFzc2VkKGQuY2xhc3NuYW1lLCB0cnVlKVxuICAgICAgICAgICAgLmF0dHIoXCJkXCIsIGQgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBzZWxmLnBhdGgoZC52YWxzKVxuICAgICAgICAgICAgfSlcbiAgICB9XG5cbiAgICBwcml2YXRlIGluaXRCYXNlTGluZShjbGFzc25hbWU6IHN0cmluZykge1xuICAgICAgICByZXR1cm4gdGhpcy5sYXllcnMuYmcuYXBwZW5kKFwicGF0aFwiKVxuICAgICAgICAgICAgLmNsYXNzZWQoY2xhc3NuYW1lLCB0cnVlKVxuICAgICAgICAgICAgLmNsYXNzZWQoJ2xpbmUnLCB0cnVlKVxuICAgIH1cblxuICAgIGluaXQoKSB7XG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuICAgICAgICBjb25zdCBvcCA9IHRoaXMub3B0aW9ucztcbiAgICAgICAgY29uc3Qgc2NhbGVzID0gdGhpcy5zY2FsZXM7XG4gICAgICAgIGNvbnN0IHNlbHMgPSB0aGlzLnNlbHM7XG5cbiAgICAgICAgdGhpcy5jcmVhdGVTY2FsZXMoKVxuICAgICAgICB0aGlzLmNyZWF0ZVBhdGgoKVxuICAgICAgICB0aGlzLmNyZWF0ZUF4ZXMoKVxuICAgIH1cblxuICAgIHByb3RlY3RlZCBjcmVhdGVTY2FsZXMoKSB7XG4gICAgICAgIGNvbnN0IHNjYWxlcyA9IHRoaXMuc2NhbGVzXG4gICAgICAgIGNvbnN0IG9wID0gdGhpcy5vcHRpb25zXG5cbiAgICAgICAgc2NhbGVzLnggPSBkMy5zY2FsZUxpbmVhcigpLmRvbWFpbihvcC54cmFuZ2UpLnJhbmdlKFswLCBvcC53aWR0aF0pLmNsYW1wKHRydWUpXG4gICAgICAgIHNjYWxlcy55ID0gZDMuc2NhbGVMb2coKS5kb21haW4ob3AueXJhbmdlKS5yYW5nZShbMCwgb3AuaGVpZ2h0XSkuY2xhbXAodHJ1ZSlcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgY3JlYXRlQXhlcygpIHtcbiAgICAgICAgY29uc3Qgc2VscyA9IHRoaXMuc2Vsc1xuICAgICAgICBjb25zdCBzY2FsZXMgPSB0aGlzLnNjYWxlc1xuICAgICAgICBjb25zdCBvcCA9IHRoaXMub3B0aW9uc1xuXG4gICAgICAgIC8vIENyZWF0ZSBheGVzXG4gICAgICAgIHNlbHMueWF4aXMgPSB0aGlzLmJhc2UuYXBwZW5kKFwiZ1wiKVxuICAgICAgICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcImF4aXMgYXhpcy0teVwiKVxuICAgICAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgU1ZHLnRyYW5zbGF0ZSgwLCAtIGF4aXNPZmZzZXQpKVxuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgLmNhbGwoZDMuYXhpc0xlZnQoc2NhbGVzLnkpLnRpY2tGb3JtYXQoXCJcIikudGlja3MoNCkpO1xuXG4gICAgICAgIHNlbHMueGF4aXMgPSB0aGlzLmJhc2UuYXBwZW5kKFwiZ1wiKVxuICAgICAgICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcImF4aXMgYXhpcy0teFwiKVxuICAgICAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgU1ZHLnRyYW5zbGF0ZSgwLCBvcC5oZWlnaHQgLSBheGlzT2Zmc2V0KSlcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgIC5jYWxsKGQzLmF4aXNCb3R0b20oc2NhbGVzLngpLnRpY2tGb3JtYXQoXCJcIikudGlja3MoNCkpO1xuXG4gICAgICAgIC8vIEFkZCB4bGFiZWxcbiAgICAgICAgdGhpcy5iYXNlLmFwcGVuZChcInRleHRcIilcbiAgICAgICAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIFNWRy50cmFuc2xhdGUob3Aud2lkdGggLyAyLCBvcC5tYXJnaW4udG9wICsgb3AuaGVpZ2h0ICsgMTApKVxuICAgICAgICAgICAgLnN0eWxlKFwidGV4dC1hbmNob3JcIiwgXCJtaWRkbGVcIilcbiAgICAgICAgICAgIC50ZXh0KFwiVGltZVwiKVxuXG4gICAgICAgIC8vIEFkZCB5bGFiZWxcbiAgICAgICAgdGhpcy5iYXNlLmFwcGVuZChcInRleHRcIilcbiAgICAgICAgICAgIC5zdHlsZShcInRleHQtYW5jaG9yXCIsIFwibWlkZGxlXCIpXG4gICAgICAgICAgICAudGV4dChcIkxvc3NcIilcbiAgICAgICAgICAgIC5hdHRyKFwieVwiLCBvcC5wYWQubGVmdCAtIG9wLm1hcmdpbi5sZWZ0KVxuICAgICAgICAgICAgLmF0dHIoXCJ4XCIsIG9wLnBhZC50b3AgLSAob3AuaGVpZ2h0IC8gMikpXG4gICAgICAgICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBTVkcucm90YXRlKC05MCkpXG4gICAgICAgIC8vIC5hdHRyKFwidHJhbnNmb3JtXCIsIFNWRy50cmFuc2xhdGUob3AubWFyZ2luLmxlZnQsIG9wLmhlaWdodC8yKSlcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgY3JlYXRlUGF0aCgpIHtcbiAgICAgICAgdGhpcy5wYXRoID0gZDMubGluZTxudW1iZXI+KClcbiAgICAgICAgICAgIC54KChkOiBudW1iZXIsIGk6IG51bWJlcikgPT4gdGhpcy5zY2FsZXMueChpKSlcbiAgICAgICAgICAgIC55KChkOiBudW1iZXIsIGk6IG51bWJlcikgPT4gdGhpcy5zY2FsZXMueShkKSlcbiAgICAgICAgICAgIC5jdXJ2ZShkMy5jdXJ2ZUxpbmVhcilcbiAgICB9XG5cbiAgICBkYXRhKCk6IFRcbiAgICBkYXRhKHZhbDogVCk6IHRoaXNcbiAgICBkYXRhKHZhbD8pIHtcbiAgICAgICAgaWYgKHZhbCA9PSBudWxsKSByZXR1cm4gdGhpcy5fZGF0YVxuICAgICAgICB0aGlzLl9kYXRhID0gdmFsO1xuICAgICAgICByZXR1cm4gdGhpc1xuICAgIH1cblxuICAgIHJlc2V0WHJhbmdlXygpOiB0aGlzIHtcbiAgICAgICAgdGhpcy5vcHRpb25zLnhyYW5nZSA9IHRoaXMuZGVmYXVsdFhyYW5nZVxuICAgICAgICByZXR1cm4gdGhpc1xuICAgIH1cbn0iLCJpbXBvcnQgKiBhcyBkMyBmcm9tICdkMydcbmltcG9ydCAqIGFzIFIgZnJvbSAncmFtZGEnXG5cbmltcG9ydCB7IENoYXJ0MkQsIENoYXJ0T3B0aW9ucywgQ2hhcnRTY2FsZXMgfSBmcm9tICcuLi91dGlsL0NoYXJ0MmRWaXNDb21wb25lbnQnXG5pbXBvcnQgeyBTaW1wbGVFdmVudEhhbmRsZXIgfSBmcm9tICcuLi91dGlsL1NpbXBsZUV2ZW50SGFuZGxlcidcbmltcG9ydCB7IEQzU2VsIH0gZnJvbSAnLi4vdXRpbC94ZDMnXG5pbXBvcnQgeyBTVkcgfSBmcm9tICcuLi91dGlsL1NWR3BsdXMnXG5pbXBvcnQgeyBCYWxsSGlzdG9yeSB9IGZyb20gJy4vR29sZkJhbGwnXG5cbmNvbnN0IGF4aXNPZmZzZXQgPSAxIC8vIFVzZSB0aGlzIHRvIGNvdmVyIHRoZSBwbG90dGVkIGxpbmVzXG5cbmludGVyZmFjZSBHcmFwaFNlbHMge1xuICAgIHhheGlzPzogRDNTZWxcbiAgICB5YXhpcz86IEQzU2VsXG4gICAgeGxhYmVsPzogRDNTZWxcbiAgICBsaW5lPzogRDNTZWxcbiAgICBiYWNrZHJvcD86IEQzU2VsXG4gICAgYmFsbD86IEQzU2VsXG59XG5cbnR5cGUgVHJhY2tlciA9IHtcbiAgICBzZWw6IEQzU2VsLFxuICAgIHZhbHM6IG51bWJlcltdXG59XG5cbnR5cGUgTGluZVRyYWNrZXIgPSB7XG4gICAgKGtleTogc3RyaW5nKTogVHJhY2tlclxufVxuXG50eXBlIFQgPSBMaW5lVHJhY2tlclxuXG5leHBvcnQgY2xhc3MgR29sZlhEaXN0IGV4dGVuZHMgQ2hhcnQyRDxUPiB7XG4gICAgY3NzbmFtZSA9IFwibGluZS1wbG90XCJcblxuICAgIF9kYXRhOiBUXG5cbiAgICBvcHRpb25zOiBDaGFydE9wdGlvbnMgPSB7XG4gICAgICAgIG1heFdpZHRoOiAzNTAsXG4gICAgICAgIG1heEhlaWdodDogMjUwLFxuICAgICAgICBtYXJnaW46IHsgdG9wOiAxMCwgcmlnaHQ6IDEwLCBib3R0b206IDMwLCBsZWZ0OiAzMCB9LFxuICAgICAgICBwYWQ6IHsgdG9wOiA1LCByaWdodDogMSwgYm90dG9tOiAxMCwgbGVmdDogMTUgfSxcbiAgICAgICAgeHJhbmdlOiBbMCwgNjAwXSxcbiAgICAgICAgeXJhbmdlOiBbMSwgMF0sXG4gICAgfVxuXG4gICAgZGVmYXVsdFhyYW5nZTogW251bWJlciwgbnVtYmVyXVxuXG4gICAgc2NhbGVzOiBDaGFydFNjYWxlcyA9IHt9XG5cbiAgICBzZWxzOiBHcmFwaFNlbHMgPSB7fVxuXG4gICAgcGF0aDogZDMuTGluZTxudW1iZXI+XG5cbiAgICBjb25zdHJ1Y3RvcihkM3BhcmVudDogRDNTZWwsIGV2ZW50SGFuZGxlcj86IFNpbXBsZUV2ZW50SGFuZGxlciwgb3B0aW9ucyA9IHt9KSB7XG4gICAgICAgIHN1cGVyKGQzcGFyZW50LCBldmVudEhhbmRsZXIsIG9wdGlvbnMpXG4gICAgICAgIHN1cGVyLmluaXRTVkcodGhpcy5vcHRpb25zLCBbXCJiZ1wiXSlcbiAgICAgICAgdGhpcy5iYXNlLmNsYXNzZWQodGhpcy5jc3NuYW1lLCB0cnVlKVxuICAgICAgICB0aGlzLmRlZmF1bHRYcmFuZ2UgPSB0aGlzLm9wdGlvbnMueHJhbmdlXG4gICAgICAgIHRoaXMuZGF0YSg8TGluZVRyYWNrZXI+e30pXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUGxvdCB0aGUgdmFsdWVzIG9mIGFsbCB4IGFjY29yZGluZyB0byB0aGUgZnVuY3Rpb25cbiAgICAgKiBcbiAgICAgKiBAcGFyYW0geCBBIGxpbnNwYWNlIG9mIHggdmFsdWVzIG92ZXIgd2hpY2ggdG8gcGxvdCBhIGN1cnZlXG4gICAgICovXG4gICAgcHJvdGVjdGVkIGFkZERhdGFLZXlfKGNsYXNzbmFtZTogc3RyaW5nKSB7XG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzXG4gICAgICAgIGlmICghUi5oYXMoY2xhc3NuYW1lLCB0aGlzLmRhdGEoKSkpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBBZGRpbmcga2V5OiAke2NsYXNzbmFtZX1gKTtcbiAgICAgICAgICAgIHRoaXMuZGF0YSgpW2NsYXNzbmFtZV0gPSB7XG4gICAgICAgICAgICAgICAgc2VsOiBzZWxmLmluaXRCYXNlTGluZShjbGFzc25hbWUpLFxuICAgICAgICAgICAgICAgIHZhbHM6IFtdXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjbGVhclBhdGhzKCkge1xuICAgICAgICB0aGlzLmRhdGEoUi5tYXAoZCA9PiBSLmFzc29jKCd2YWxzJywgW10sIGQpLCB0aGlzLmRhdGEoKSkpXG4gICAgfVxuXG4gICAgcGxvdFBhdGgoZDogQmFsbEhpc3RvcnksIHNjYWxlPykge1xuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICAgICAgdGhpcy5hZGREYXRhS2V5XyhkLmNsYXNzbmFtZSk7XG5cbiAgICAgICAgY29uc3Qgc2NhbGVyID0gKHNjYWxlID09IG51bGwpID8geCA9PiB4IDogc2NhbGVcblxuICAgICAgICBjb25zdCBjdXJyVmFscyA9IHRoaXMuZGF0YSgpW2QuY2xhc3NuYW1lXTtcbiAgICAgICAgY3VyclZhbHMudmFscy5wdXNoKHNjYWxlcihNYXRoLmFicyhkLngpKSk7XG5cbiAgICAgICAgLy8gc2xpZGluZyB4LWF4aXNcbiAgICAgICAgY29uc3QgbmV3WHJhbmdlID0gW01hdGgubWF4KDAsIGN1cnJWYWxzLnZhbHMubGVuZ3RoLXRoaXMub3B0aW9ucy54cmFuZ2VbMV0pLCBNYXRoLm1heChjdXJyVmFscy52YWxzLmxlbmd0aCx0aGlzLm9wdGlvbnMueHJhbmdlWzFdKV1cbiAgICAgICAgdGhpcy51cGRhdGVTY2FsZXMobmV3WHJhbmdlKVxuICAgICAgICB0aGlzLmNyZWF0ZVBhdGgoKSAvLyBEZXBlbmRzIG9uIHggc2NhbGVcblxuXG4gICAgICAgIGN1cnJWYWxzLnNlbC5kYXRhKFtjdXJyVmFsc10pXG4gICAgICAgICAgICAuam9pbihcInBhdGhcIilcbiAgICAgICAgICAgIC5jbGFzc2VkKGQuY2xhc3NuYW1lLCB0cnVlKVxuICAgICAgICAgICAgLmF0dHIoXCJkXCIsIGQgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBzZWxmLnBhdGgoZC52YWxzKVxuICAgICAgICAgICAgfSlcbiAgICB9XG5cbiAgICAvLyBMaXZlIHVwZGF0ZSB0aGUgeHJhbmdlXG4gICAgdXBkYXRlU2NhbGVzKHhyYW5nZSkge1xuICAgICAgICBjb25zdCBvcCA9IHRoaXMub3B0aW9uc1xuICAgICAgICB0aGlzLnNjYWxlcy54ID0gZDMuc2NhbGVMaW5lYXIoKS5kb21haW4oeHJhbmdlKS5yYW5nZShbMCwgb3Aud2lkdGhdKS5jbGFtcCh0cnVlKVxuICAgIH1cblxuICAgIHByaXZhdGUgaW5pdEJhc2VMaW5lKGNsYXNzbmFtZTogc3RyaW5nKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmxheWVycy5iZy5hcHBlbmQoXCJwYXRoXCIpXG4gICAgICAgICAgICAuY2xhc3NlZChjbGFzc25hbWUsIHRydWUpXG4gICAgICAgICAgICAuY2xhc3NlZCgnbGluZScsIHRydWUpXG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGNyZWF0ZVNjYWxlcygpIHtcbiAgICAgICAgY29uc3Qgb3AgPSB0aGlzLm9wdGlvbnNcbiAgICAgICAgdGhpcy5zY2FsZXMueCA9IGQzLnNjYWxlTGluZWFyKCkuZG9tYWluKG9wLnhyYW5nZSkucmFuZ2UoWzAsIG9wLndpZHRoXSkuY2xhbXAodHJ1ZSlcbiAgICAgICAgdGhpcy5zY2FsZXMueSA9IGQzLnNjYWxlTGluZWFyKCkuZG9tYWluKG9wLnlyYW5nZSkucmFuZ2UoWzAsIG9wLmhlaWdodF0pLmNsYW1wKHRydWUpXG4gICAgfVxuXG4gICAgaW5pdCgpIHtcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgICAgIGNvbnN0IG9wID0gdGhpcy5vcHRpb25zO1xuICAgICAgICBjb25zdCBzY2FsZXMgPSB0aGlzLnNjYWxlcztcbiAgICAgICAgY29uc3Qgc2VscyA9IHRoaXMuc2VscztcblxuICAgICAgICB0aGlzLmNyZWF0ZVNjYWxlcygpXG4gICAgICAgIHRoaXMuY3JlYXRlUGF0aCgpXG4gICAgICAgIHRoaXMuY3JlYXRlQXhlcygpXG4gICAgfVxuXG5cbiAgICBwcm90ZWN0ZWQgY3JlYXRlQXhlcygpIHtcbiAgICAgICAgY29uc3Qgc2VscyA9IHRoaXMuc2Vsc1xuICAgICAgICBjb25zdCBzY2FsZXMgPSB0aGlzLnNjYWxlc1xuICAgICAgICBjb25zdCBvcCA9IHRoaXMub3B0aW9uc1xuXG4gICAgICAgIC8vIENyZWF0ZSBheGVzXG4gICAgICAgIHNlbHMueGF4aXMgPSB0aGlzLmJhc2UuYXBwZW5kKFwiZ1wiKVxuICAgICAgICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcImF4aXMgYXhpcy0teFwiKVxuICAgICAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgU1ZHLnRyYW5zbGF0ZSgwLCBvcC5oZWlnaHQgLSBheGlzT2Zmc2V0KSlcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgIC5jYWxsKGQzLmF4aXNCb3R0b20oc2NhbGVzLngpLnRpY2tzKDQpLnRpY2tGb3JtYXQoXCJcIikpO1xuXG4gICAgICAgIHNlbHMueWF4aXMgPSB0aGlzLmJhc2UuYXBwZW5kKFwiZ1wiKVxuICAgICAgICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcImF4aXMgYXhpcy0teVwiKVxuICAgICAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgU1ZHLnRyYW5zbGF0ZSgwLCAtIGF4aXNPZmZzZXQpKVxuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgLmNhbGwoZDMuYXhpc0xlZnQoc2NhbGVzLnkpLnRpY2tzKDQpLnRpY2tGb3JtYXQoXCJcIikpO1xuXG4gICAgICAgIHRoaXMuYmFzZS5hcHBlbmQoXCJ0ZXh0XCIpXG4gICAgICAgICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBTVkcudHJhbnNsYXRlKG9wLndpZHRoIC8gMiwgb3AubWFyZ2luLnRvcCArIG9wLmhlaWdodCArIDEwKSlcbiAgICAgICAgICAgIC5zdHlsZShcInRleHQtYW5jaG9yXCIsIFwibWlkZGxlXCIpXG4gICAgICAgICAgICAudGV4dChcIlRpbWVcIilcblxuICAgICAgICB0aGlzLmJhc2UuYXBwZW5kKFwidGV4dFwiKVxuICAgICAgICAgICAgLnN0eWxlKFwidGV4dC1hbmNob3JcIiwgXCJtaWRkbGVcIilcbiAgICAgICAgICAgIC50ZXh0KFwiXFx1MDNCOCAtIFxcdTAzQjgqXCIpXG4gICAgICAgICAgICAuYXR0cihcInlcIiwgb3AucGFkLmxlZnQgLSBvcC5tYXJnaW4ubGVmdClcbiAgICAgICAgICAgIC5hdHRyKFwieFwiLCBvcC5wYWQudG9wIC0gKG9wLmhlaWdodCAvIDIpKVxuICAgICAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgU1ZHLnJvdGF0ZSgtOTApKVxuICAgIH1cblxuICAgIHByb3RlY3RlZCBjcmVhdGVQYXRoKCkge1xuICAgICAgICB0aGlzLnBhdGggPSBkMy5saW5lPG51bWJlcj4oKVxuICAgICAgICAgICAgLngoKGQ6IG51bWJlciwgaTogbnVtYmVyKSA9PiB0aGlzLnNjYWxlcy54KGkpKVxuICAgICAgICAgICAgLnkoKGQ6IG51bWJlciwgaTogbnVtYmVyKSA9PiB0aGlzLnNjYWxlcy55KGQpKVxuICAgICAgICAgICAgLmN1cnZlKGQzLmN1cnZlTGluZWFyKVxuICAgIH1cblxuICAgIGRhdGEoKTogVFxuICAgIGRhdGEodmFsOiBUKTogdGhpc1xuICAgIGRhdGEodmFsPykge1xuICAgICAgICBpZiAodmFsID09IG51bGwpIHJldHVybiB0aGlzLl9kYXRhXG4gICAgICAgIHRoaXMuX2RhdGEgPSB2YWw7XG4gICAgICAgIHJldHVybiB0aGlzXG4gICAgfVxuXG4gICAgcmVzZXRYcmFuZ2VfKCk6IHRoaXMge1xuICAgICAgICB0aGlzLm9wdGlvbnMueHJhbmdlID0gdGhpcy5kZWZhdWx0WHJhbmdlXG4gICAgICAgIHJldHVybiB0aGlzXG4gICAgfVxufSIsImltcG9ydCAqIGFzIGQzIGZyb20gJ2QzJ1xuaW1wb3J0IHsgYmFzZUxvc3MgfSBmcm9tICcuLi9Hb2xmTGFuZHNjYXBlcydcblxuZXhwb3J0IGNsYXNzIE1hbnVhbFVwZGF0ZXIge1xuICAgIGY6ICh4OiBudW1iZXIpID0+IG51bWJlclxuICAgIGRmOiAoeDogbnVtYmVyKSA9PiBudW1iZXJcblxuICAgIHE6IG51bWJlciAgIC8vIDAgLT4gMSwgd2hlcmUgMCBpcyBTR0QgYW5kIDEgaXMgTkdELiAwLjUgaXMgc3FydCBOR0QuIFtzdGVwID0gLSBldGEgKiBIIF4gKC0xL3EpICogZ10gKEggPSAwIHdoZW4gcT0wKVxuICAgIGV0YTogbnVtYmVyIC8vIGFrYSAnbGVhcm5pbmcgcmF0ZSdcblxuICAgIGNvbnN0cnVjdG9yKGYsIGRmLCBxID0gMCwgZXRhID0gMC4xKSB7XG4gICAgICAgIHRoaXMuZiA9IGY7XG4gICAgICAgIHRoaXMuZGYgPSBkZjtcbiAgICAgICAgdGhpcy5xID0gcTtcbiAgICAgICAgdGhpcy5ldGEgPSBldGE7XG4gICAgfVxuXG4gICAgLy8gQ2FsY3VsYXRlIGVycm9yIHNxdWFyZWQgb2YgdGhlIGJhc2UgZnVuY3Rpb25cbiAgICBsb3NzKHg6IG51bWJlcik6IG51bWJlciB7XG4gICAgICAgIHJldHVybiBiYXNlTG9zcyh0aGlzLmYoeCkpXG4gICAgfVxuXG4gICAgLy8gR3JhZGllbnQgYXQgeFxuICAgIGdyYWRpZW50KHg6IG51bWJlcik6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLmYoeCkgKiB0aGlzLmRmKHgpXG4gICAgfVxuXG4gICAgLy8gVGhlIHBvc2l0aXZlIHNlbWktZGVmaW5pdGUgaGVzc2lhbiBhdCB4XG4gICAgcHNkaGVzcyh4OiBudW1iZXIpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gTWF0aC5wb3codGhpcy5kZih4KSwgMilcbiAgICB9XG5cbiAgICB1cGRhdGVNb2RpZmllcih4OiBudW1iZXIpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gTWF0aC5wb3codGhpcy5kZih4KSwgMSAtICgyICogdGhpcy5xKSlcbiAgICB9XG5cbiAgICB1cGRhdGVBbXQoeDogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZih4KSAqIHRoaXMudXBkYXRlTW9kaWZpZXIoeClcbiAgICB9XG5cbiAgICAvLyBUaGUgYW1vdW50IHRvIHVwZGF0ZSBhdCB4IGdpdmVuIHRoZSBsZWFybmluZyByYXRlIGV0YVxuICAgIHN0ZXAoeDogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgICAgLy8gQ291bGQgdXNlIHBzZGhlc3MgaW4gdGhlIGVxdWF0aW9uIGJlbG93LCBidXQgZHVlIHRvIG51bWVyaWNhbCBpc3N1ZXMgdGhpcyBmb3JtdWxhdGlvbiBjb21wdXRlcyBtb3JlIHJlbGlhYmx5XG4gICAgICAgIHJldHVybiAtIHRoaXMuZXRhICogdGhpcy51cGRhdGVBbXQoeClcbiAgICB9XG5cbiAgICAvLyBHZXQgdGhlIG5leHQgeCB2YWx1ZSBhZnRlciB0YWtpbmcgYSBzdGVwXG4gICAgbmV4dCh4OiBudW1iZXIpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4geCArIHRoaXMuc3RlcCh4KVxuICAgIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9
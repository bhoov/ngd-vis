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
        // Check border conditions
        if (v.x >= op.xrange[1] || v.y >= op.yrange[1]) {
            this.ticker.unsubscribe();
            return v;
        }
        if (prev != null) {
            this.base.append('line')
                .attr('x1', scales.x(prev.x))
                .attr('y1', scales.y(prev.y))
                .attr('x2', cx)
                .attr('y2', cy)
                .classed('descending-line', true);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nzcy9tYWluLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy90cy9Hb2xmTGFuZHNjYXBlcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHMvVXBkYXRlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHMvbWFpbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHMvcGxvdHRpbmcudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RzL3V0aWwvQ2hhcnQyZFZpc0NvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHMvdXRpbC9TVkdWaXNDb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RzL3V0aWwvU1ZHcGx1cy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHMvdXRpbC9TaW1wbGVFdmVudEhhbmRsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RzL3V0aWwvVUlkLnRzIiwid2VicGFjazovLy8uL3NyYy90cy91dGlsL1Zpc0NvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHMvdXRpbC94ZDMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RzL3Zpcy9Db250b3VyUGxvdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHMvdmlzL0dvbGZCYWxsLnRzIiwid2VicGFjazovLy8uL3NyYy90cy92aXMvR29sZkhvbGUxRC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHMvdmlzL0dvbGZMb3NzZXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RzL3Zpcy9Hb2xmWERpc3QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RzL3Zpcy9NYW51YWxVcGRhdGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLFFBQVEsb0JBQW9C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SSxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQztRQUNySixFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBRSxHQUFHLElBQUk7UUFDdE8sTUFBTSxFQUFFLENBQUMsQ0FBQyxJQUFJLEdBQUcsSUFBSSxFQUFFLElBQUksR0FBRyxJQUFJLENBQUM7UUFDbkMsTUFBTSxFQUFFLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQztRQUNoQixJQUFJLEVBQUUsUUFBUTtLQUNqQjtJQUNELE9BQU8sRUFBRTtRQUNMLElBQUksRUFBRSxTQUFTO1FBQ2YsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFB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QUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDakMsQ0FBQztJQUVELDBDQUEwQztJQUMxQyxPQUFPLENBQUMsQ0FBUztRQUNiLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBRUQsY0FBYyxDQUFDLENBQVM7UUFDcEIsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNqRCxDQUFDO0lBRUQsU0FBUyxDQUFDLENBQVM7UUFDZixPQUFPLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7SUFDN0MsQ0FBQztJQUVELHdEQUF3RDtJQUN4RCxJQUFJLENBQUMsQ0FBUztRQUNWLCtHQUErRztRQUMvRyxPQUFPLENBQUUsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBRUQsMkNBQTJDO0lBQzNDLElBQUksQ0FBQyxDQUFTO1FBQ1YsT0FBTyxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDM0IsQ0FBQztDQUNKIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbiBcdGZ1bmN0aW9uIHdlYnBhY2tKc29ucENhbGxiYWNrKGRhdGEpIHtcbiBcdFx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcbiBcdFx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcbiBcdFx0dmFyIGV4ZWN1dGVNb2R1bGVzID0gZGF0YVsyXTtcblxuIFx0XHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcbiBcdFx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG4gXHRcdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIHJlc29sdmVzID0gW107XG4gXHRcdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuIFx0XHRcdFx0cmVzb2x2ZXMucHVzaChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0pO1xuIFx0XHRcdH1cbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHR9XG4gXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihkYXRhKTtcblxuIFx0XHR3aGlsZShyZXNvbHZlcy5sZW5ndGgpIHtcbiBcdFx0XHRyZXNvbHZlcy5zaGlmdCgpKCk7XG4gXHRcdH1cblxuIFx0XHQvLyBhZGQgZW50cnkgbW9kdWxlcyBmcm9tIGxvYWRlZCBjaHVuayB0byBkZWZlcnJlZCBsaXN0XG4gXHRcdGRlZmVycmVkTW9kdWxlcy5wdXNoLmFwcGx5KGRlZmVycmVkTW9kdWxlcywgZXhlY3V0ZU1vZHVsZXMgfHwgW10pO1xuXG4gXHRcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gYWxsIGNodW5rcyByZWFkeVxuIFx0XHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiBcdH07XG4gXHRmdW5jdGlvbiBjaGVja0RlZmVycmVkTW9kdWxlcygpIHtcbiBcdFx0dmFyIHJlc3VsdDtcbiBcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGRlZmVycmVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdHZhciBkZWZlcnJlZE1vZHVsZSA9IGRlZmVycmVkTW9kdWxlc1tpXTtcbiBcdFx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcbiBcdFx0XHRmb3IodmFyIGogPSAxOyBqIDwgZGVmZXJyZWRNb2R1bGUubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdHZhciBkZXBJZCA9IGRlZmVycmVkTW9kdWxlW2pdO1xuIFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2RlcElkXSAhPT0gMCkgZnVsZmlsbGVkID0gZmFsc2U7XG4gXHRcdFx0fVxuIFx0XHRcdGlmKGZ1bGZpbGxlZCkge1xuIFx0XHRcdFx0ZGVmZXJyZWRNb2R1bGVzLnNwbGljZShpLS0sIDEpO1xuIFx0XHRcdFx0cmVzdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBkZWZlcnJlZE1vZHVsZVswXSk7XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0cmV0dXJuIHJlc3VsdDtcbiBcdH1cblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdC8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuIFx0Ly8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwibWFpblwiOiAwXG4gXHR9O1xuXG4gXHR2YXIgZGVmZXJyZWRNb2R1bGVzID0gW107XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdHZhciBqc29ucEFycmF5ID0gd2luZG93W1wid2VicGFja0pzb25wXCJdID0gd2luZG93W1wid2VicGFja0pzb25wXCJdIHx8IFtdO1xuIFx0dmFyIG9sZEpzb25wRnVuY3Rpb24gPSBqc29ucEFycmF5LnB1c2guYmluZChqc29ucEFycmF5KTtcbiBcdGpzb25wQXJyYXkucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrO1xuIFx0anNvbnBBcnJheSA9IGpzb25wQXJyYXkuc2xpY2UoKTtcbiBcdGZvcih2YXIgaSA9IDA7IGkgPCBqc29ucEFycmF5Lmxlbmd0aDsgaSsrKSB3ZWJwYWNrSnNvbnBDYWxsYmFjayhqc29ucEFycmF5W2ldKTtcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gb2xkSnNvbnBGdW5jdGlvbjtcblxuXG4gXHQvLyBhZGQgZW50cnkgbW9kdWxlIHRvIGRlZmVycmVkIGxpc3RcbiBcdGRlZmVycmVkTW9kdWxlcy5wdXNoKFtcIi4vc3JjL2luZGV4LnRzXCIsXCJ2ZW5kb3JcIl0pO1xuIFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiByZWFkeVxuIFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbmRleC5odG1sXCI7IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0IHttYWlufSBmcm9tICcuL3RzL21haW4nXG5cbmltcG9ydCBcIiFmaWxlLWxvYWRlcj9uYW1lPWluZGV4Lmh0bWwhLi9pbmRleC5odG1sXCI7XG5pbXBvcnQgXCIuL2Nzcy9tYWluLnNjc3NcIlxuXG5tYWluKCkiLCJleHBvcnQgY29uc3QgYmFzZUxvc3MgPSB4ID0+IDEgLyAyICogTWF0aC5wb3coeCwgMilcbmV4cG9ydCBjb25zdCBnZXRQbG90RnVuYyA9ICh6OiBMYW5kc2NhcGUpID0+ICh4OiBudW1iZXIpID0+IHoubG9zcyh6LmYoeCkpXG5cbmV4cG9ydCBpbnRlcmZhY2UgTGFuZHNjYXBlIHtcbiAgICBuYW1lOiBzdHJpbmdcbiAgICBmOiAoeDogbnVtYmVyKSA9PiBudW1iZXJcbiAgICBkZjogKHg6IG51bWJlcikgPT4gbnVtYmVyXG4gICAgeHJhbmdlOiBbbnVtYmVyLCBudW1iZXJdXG4gICAgeXJhbmdlOiBbbnVtYmVyLCBudW1iZXJdXG4gICAgbG9zczogKHg6IG51bWJlcikgPT4gbnVtYmVyXG59XG5cblxuZXhwb3J0IGNvbnN0IGxhbmRzY2FwZXM6IHsgW2s6IHN0cmluZ106IExhbmRzY2FwZSB9ID0ge1xuICAgIGhvbGU6IHtcbiAgICAgICAgbmFtZTogXCJob2xlXCIsXG4gICAgICAgIGY6IHggPT4gTWF0aC50YW5oKHgqMTMuNSksXG4gICAgICAgIGRmOiB4ID0+IE1hdGgucG93KE1hdGguY29zaCh4KjEzLjUpLCAtMikgKiAxMy41LFxuICAgICAgICB4cmFuZ2U6IFstNiAvIDEzLjUsIDYgLyAxMy41XSxcbiAgICAgICAgeXJhbmdlOiBbMCwgMC42XSxcbiAgICAgICAgbG9zczogYmFzZUxvc3NcbiAgICB9LFxuICAgIHN0ZXBzOiB7XG4gICAgICAgIG5hbWU6IFwic3RlcHNcIixcbiAgICAgICAgZjogeCA9PiBNYXRoLnRhbmgoeCAqIDEzLjUgLSAxMSkgLyA0ICsgTWF0aC50YW5oKHggKiAxMy41IC0gNikgLyA0ICsgTWF0aC50YW5oKHggKiAxMy41KSArIE1hdGgudGFuaCh4ICogMTMuNSArIDYpIC8gNCArIE1hdGgudGFuaCh4ICogMTMuNSArIDExKSAvIDQsXG4gICAgICAgIGRmOiB4ID0+IChNYXRoLnBvdyhNYXRoLmNvc2goeCAqIDEzLjUgLSAxMSksIC0yKSAvIDQgKyBNYXRoLnBvdyhNYXRoLmNvc2goeCAqIDEzLjUgLSA2KSwgLTIpIC8gNCArIE1hdGgucG93KE1hdGguY29zaCh4ICogMTMuNSksIC0yKSArIE1hdGgucG93KE1hdGguY29zaCh4ICogMTMuNSArIDYpLCAtMikgLyA0ICsgTWF0aC5wb3coTWF0aC5jb3NoKHggKiAxMy41ICsgMTEpLCAtMikgLyA0ICkgKiAxMy41LFxuICAgICAgICB4cmFuZ2U6IFstMTMuNSAvIDEzLjUsIDEzLjUgLyAxMy41XSxcbiAgICAgICAgeXJhbmdlOiBbMCwgMi41XSxcbiAgICAgICAgbG9zczogYmFzZUxvc3NcbiAgICB9LFxuICAgIHNlYWd1bGw6IHtcbiAgICAgICAgbmFtZTogXCJzZWFndWxsXCIsXG4gICAgICAgIGY6IHggPT4gTWF0aC5zaWduKHgpICogKDEgLSAoMSAvICgxICsgTWF0aC5hYnMoeCAqIDE2LjUpKSkpLFxuICAgICAgICBkZjogeCA9PiAxNi41IC8gTWF0aC5wb3coMSArIE1hdGguYWJzKHggKiAxNi41KSwgMiksXG4gICAgICAgIHhyYW5nZTogWy0xMiAvIDE2LjUsIDEyIC8gMTYuNV0sXG4gICAgICAgIHlyYW5nZTogWzAsIDAuNl0sXG4gICAgICAgIGxvc3M6IGJhc2VMb3NzXG4gICAgfSxcbiAgICBib3dsOiB7XG4gICAgICAgIG5hbWU6IFwiYm93bFwiLFxuICAgICAgICBmOiAgeCA9PiBNYXRoLnNpbmgoeC8zKSxcbiAgICAgICAgZGY6IHggPT4gTWF0aC5jb3NoKHgvMykvMyxcbiAgICAgICAgeHJhbmdlOiBbLTMgKiAzLCAzICogM10sXG4gICAgICAgIHlyYW5nZTogWzAsIDUwXSxcbiAgICAgICAgbG9zczogYmFzZUxvc3NcbiAgICB9LFxuICAgIGRlZXBfbmV0OiB7XG4gICAgICAgIG5hbWU6IFwiZGVlcF9uZXRcIixcbiAgICAgICAgZjogeCA9PiBNYXRoLnBvdyhNYXRoLmFicyh4LzMrMSksIDMpIC0gMSwgIC8vIGRlcHRoID0gNFxuICAgICAgICBkZjogeCA9PiAzLzMgKiBNYXRoLnBvdyhNYXRoLmFicyh4LzMrMSksIDIpLFxuICAgICAgICAvLyB4cmFuZ2U6IFstMC43KjQsIDAuNyo0XSxcbiAgICAgICAgeHJhbmdlOiBbLTAuOTUqMywgMC45NSozXSxcbiAgICAgICAgeXJhbmdlOiBbMCwgNF0sXG4gICAgICAgIGxvc3M6IGJhc2VMb3NzXG4gICAgfVxufSIsImltcG9ydCB7VmVjdG9yMkR9IGZyb20gJy4vdXRpbC90eXBlcydcbmltcG9ydCAqIGFzIGQzIGZyb20gJ2QzJ1xuXG50eXBlIEVycm9yRnVuYyA9ICh2OiBWZWN0b3IyRCkgPT4gbnVtYmVyXG5cblxuY29uc3QgZGVmYXVsdEVycm9yOiBFcnJvckZ1bmMgPSB2ID0+IHYueCAqIHYueSAtIDFcbmNvbnN0IGRlZmF1bHRTdGVwMkxyOiBkMy5TY2FsZUxpbmVhcjxudW1iZXIsIG51bWJlcj4gPSBkMy5zY2FsZUxpbmVhcigpLmRvbWFpbihbMCwgMC44XSkucmFuZ2UoWzAuMDAxLCAwLjI1XSlcblxuZXhwb3J0IGNsYXNzIFVwZGF0ZXIge1xuICAgIGVycjogRXJyb3JGdW5jICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBUaGUgZXJyb3IgZnVuY3Rpb24uIExvc3MgaXMgdGhlIGVycm9yIHNxdWFyZWRcbiAgICBxOiBudW1iZXIgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gMCAtPiAxLCB3aGVyZSAwIGlzIFNHRCBhbmQgMSBpcyBOR0QuIDAuNSBpcyBzcXJ0IE5HRC4gW3N0ZXAgPSAtIGV0YSAqIEggXiAoLTEvcSkgKiBnXSAoSCA9IDAgd2hlbiBxPTApXG4gICAgZXRhOiBudW1iZXIgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGFrYSAnbGVhcm5pbmcgcmF0ZSdcbiAgICBzdGVwMmxyOiBkMy5TY2FsZUxpbmVhcjxudW1iZXIsIG51bWJlcj4gLy8gRm9ybWF0IHRoZSBsZWFybmluZyByYXRlIGZvciBkaXNwbGF5XG5cbiAgICBjb25zdHJ1Y3RvcihxPTAsIGV0YT0wLjEsIGVycj1kZWZhdWx0RXJyb3IsIHN0ZXAybHI9ZGVmYXVsdFN0ZXAyTHIpIHtcbiAgICAgICAgdGhpcy5lcnIgPSBlcnI7XG4gICAgICAgIHRoaXMucSA9IHE7XG4gICAgICAgIHRoaXMuZXRhID0gZXRhO1xuICAgICAgICB0aGlzLnN0ZXAybHIgPSBzdGVwMmxyO1xuICAgIH1cblxuICAgIC8vIEFtb3VudCB0byBzY2FsZSBzaXplIG9mIGxlYXJuaW5nIHJhdGUgYXJyb3dzXG4gICAgZ2V0IGxyU2NhbGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0ZXAybHIodGhpcy5ldGEpXG4gICAgfVxuXG4gICAgLy8gVGFrZSBhYnMgdmFsdWUgb2YgZXJyb3JcbiAgICAvLyBFcnIodjpWZWN0b3IyRCk6bnVtYmVyIHtcbiAgICAvLyAgICAgcmV0dXJuIHRoaXMuZXJyKHYpXG4gICAgLy8gfVxuICAgIC8vIFRha2UgYWJzIHZhbHVlIG9mIGVycm9yXG4gICAgc3FydEVycih2OlZlY3RvcjJEKTpudW1iZXIge1xuICAgICAgICByZXR1cm4gTWF0aC5zcXJ0KE1hdGguYWJzKHRoaXMuZXJyKHYpKSlcbiAgICB9XG5cbiAgICBhYnNFcnIodjpWZWN0b3IyRCk6bnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIE1hdGguYWJzKHRoaXMuZXJyKHYpKVxuICAgIH1cblxuICAgIC8vIENhbGN1bGF0ZSBlcnJvciBzcXVhcmVkXG4gICAgbG9zcyh2OlZlY3RvcjJEKTpudW1iZXJ7XG4gICAgICAgIHJldHVybiBNYXRoLnBvdyh0aGlzLmVycih2KSwgMilcbiAgICB9XG5cbiAgICBncmFkaWVudCh2OlZlY3RvcjJEKTpWZWN0b3IyRCB7XG4gICAgICAgIGNvbnN0IGVyciA9IHRoaXMuZXJyKHYpO1xuICAgICAgICBjb25zdCBneCA9IHYueSAqIGVycjtcbiAgICAgICAgY29uc3QgZ3kgPSB2LnggKiBlcnI7XG4gICAgICAgIHJldHVybiB7eDogZ3gsIHk6IGd5fVxuICAgIH1cblxuICAgIGVpZ2VudmFsdWVzKHY6VmVjdG9yMkQpOlZlY3RvcjJEIHtcbiAgICAgICAgY29uc3QgZ2V0RXYgPSAoeCwgeSkgPT4gTWF0aC5wb3coeCwgMikgKyBNYXRoLnBvdyh5LCAyKVxuICAgICAgICBjb25zdCBleCA9IGdldEV2KHYueCwgdi55KVxuICAgICAgICBjb25zdCBleSA9IGdldEV2KHYueCwgdi55KVxuICAgICAgICByZXR1cm4ge3g6IGV4LCB5OiBleX1cbiAgICB9XG5cbiAgICBkdih2OlZlY3RvcjJEKTogVmVjdG9yMkQge1xuICAgICAgICBjb25zdCBnID0gdGhpcy5ncmFkaWVudCh2KVxuICAgICAgICBjb25zdCBldiA9IHRoaXMuZWlnZW52YWx1ZXModilcbiAgICAgICAgY29uc3QgZHZ4ID0gLWcueCAvIE1hdGguYWJzKE1hdGgucG93KGV2LngsIHRoaXMucSkpXG4gICAgICAgIGNvbnN0IGR2eSA9IC1nLnkgLyBNYXRoLmFicyhNYXRoLnBvdyhldi55LCB0aGlzLnEpKVxuICAgICAgICByZXR1cm4ge3g6IGR2eCwgeTogZHZ5fVxuICAgIH1cblxuICAgIGxyKHY6VmVjdG9yMkQpOiBWZWN0b3IyRCB7XG4gICAgICAgIGNvbnN0IGR2ID0gdGhpcy5kdih2KVxuICAgICAgICBjb25zdCBhYnNFcnIgPSB0aGlzLmFic0Vycih2KVxuICAgICAgICBjb25zdCBsclNjYWxlID0gdGhpcy5zdGVwMmxyKHRoaXMuZXRhKVxuICAgICAgICBjb25zdCBscnggPSBsclNjYWxlICogZHYueCAvIGFic0VyclxuICAgICAgICBjb25zdCBscnkgPSBsclNjYWxlICogZHYueSAvIGFic0VyclxuICAgICAgICByZXR1cm4ge3g6IGxyeCwgeTogbHJ5fVxuICAgIH1cblxuICAgIC8vIEdldCBuZXh0IHYgdmFsdWVcbiAgICBuZXh0KHY6VmVjdG9yMkQpOiBWZWN0b3IyRCB7XG4gICAgICAgIGNvbnN0IGR2ID0gdGhpcy5kdih2KVxuICAgICAgICBjb25zdCBuZXd4ID0gdi54ICsgZHYueCAqIHRoaXMuZXRhO1xuICAgICAgICBjb25zdCBuZXd5ID0gdi55ICsgZHYueSAqIHRoaXMuZXRhO1xuICAgICAgICByZXR1cm4ge3g6IG5ld3gsIHk6IG5ld3l9XG4gICAgfVxuXG4gICAgbmV4dExyKHY6VmVjdG9yMkQpOiBWZWN0b3IyRCB7XG4gICAgICAgIGNvbnN0IGcgPSB0aGlzLmxyKHYpO1xuICAgICAgICBjb25zdCB4ID0gdi54ICsgZy54ICogMztcbiAgICAgICAgY29uc3QgeSA9IHYueSArIGcueSAqIDM7XG4gICAgICAgIC8vIGNvbnN0IGR2ID0gdGhpcy5kdih2KVxuICAgICAgICAvLyBjb25zdCB4ID0gdi54ICsgZHYueCAqIHRoaXMuZXRhO1xuICAgICAgICAvLyBjb25zdCB5ID0gdi55ICsgZHYueSAqIHRoaXMuZXRhO1xuICAgICAgICByZXR1cm4ge3g6IHgsIHk6IHl9XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgQmxvY2tVcGRhdGVyIGV4dGVuZHMgVXBkYXRlciB7XG4gICAgZWlnZW52YWx1ZXModjpWZWN0b3IyRCk6VmVjdG9yMkQge1xuICAgICAgICBjb25zdCBleCA9IDIgKiBNYXRoLnBvdyh2LnksIDIpXG4gICAgICAgIGNvbnN0IGV5ID0gMiAqIE1hdGgucG93KHYueCwgMilcbiAgICAgICAgcmV0dXJuIHt4OiBleCwgeTogZXl9XG4gICAgfVxufSIsImltcG9ydCAqIGFzIGQzIGZyb20gJ2QzJ1xuaW1wb3J0IHsgVUlkIH0gZnJvbSAnLi91dGlsL1VJZCdcbmltcG9ydCB7IENvbnRvdXJQbG90IH0gZnJvbSAnLi92aXMvQ29udG91clBsb3QnXG5pbXBvcnQgeyBEM1NlbCB9IGZyb20gJy4vdXRpbC94ZDMnXG5pbXBvcnQgeyBHb2xmSG9sZTFEIH0gZnJvbSAnLi92aXMvR29sZkhvbGUxRCdcbmltcG9ydCB7IEdvbGZMb3NzZXMgfSBmcm9tICcuL3Zpcy9Hb2xmTG9zc2VzJ1xuaW1wb3J0IHsgR29sZlhEaXN0IH0gZnJvbSAnLi92aXMvR29sZlhEaXN0J1xuaW1wb3J0IHsgR29sZkJhbGwgfSBmcm9tICcuL3Zpcy9Hb2xmQmFsbCdcbmltcG9ydCAqIGFzIFIgZnJvbSAncmFtZGEnXG5pbXBvcnQgeyBTaW1wbGVFdmVudEhhbmRsZXIgfSBmcm9tICcuL3V0aWwvU2ltcGxlRXZlbnRIYW5kbGVyJ1xuaW1wb3J0IHsgTWFudWFsVXBkYXRlciB9IGZyb20gJy4vdmlzL01hbnVhbFVwZGF0ZXInXG5pbXBvcnQgeyBsYW5kc2NhcGVzLCBMYW5kc2NhcGUgfSBmcm9tICcuL0dvbGZMYW5kc2NhcGVzJ1xuXG5jb25zdCB0b0ZpeGVkID0gUi5jdXJyeSgobmRpZ2l0cywgeCkgPT4geC50b0ZpeGVkKG5kaWdpdHMpKVxuY29uc3QgdG9RID0gdG9GaXhlZCgxKVxuY29uc3QgdG9FdGEgPSB0b0ZpeGVkKDQpXG5cblxuZnVuY3Rpb24gcGxvdFF1aXZlckdyYXBoKCkge1xuICAgIGNvbnN0IHZpczEgPSBkMy5zZWxlY3QoJyN2aXMxJylcbiAgICBjb25zdCBzZWxzID0ge1xuICAgICAgICBxdWl2ZXJQbG90OiB2aXMxLnNlbGVjdCgnI2NoYXJ0JyksXG4gICAgICAgIHFJZDogdmlzMS5zZWxlY3QoJyNxLXZhbCcpLFxuICAgICAgICBldGFJZDogdmlzMS5zZWxlY3QoJyNldGEtdmFsJyksXG4gICAgICAgIHFTbGlkZXI6IHZpczEuc2VsZWN0KCcjcS1zbGlkZXInKSxcbiAgICAgICAgZXRhU2xpZGVyOiB2aXMxLnNlbGVjdCgnI2V0YS1zbGlkZXInKSxcbiAgICAgICAgaGVzc1R5cGU6IHZpczEuc2VsZWN0KCcjaGVzcy10eXBlJylcbiAgICB9XG5cbiAgICBjb25zdCB2aXpzID0ge1xuICAgICAgICBncmFwaDogbmV3IENvbnRvdXJQbG90KHNlbHMucXVpdmVyUGxvdClcbiAgICB9XG5cbiAgICBjb25zdCBkZWZhdWx0cyA9IHtcbiAgICAgICAgLy8gTm90ZSB0byBhbHNvIGNoYW5nZSB0aGUgZGVmYXVsdCB2YWx1ZSBpbiB0aGUgaHRtbCBmaWxlIVxuICAgICAgICBxOiAwLFxuICAgICAgICBldGE6IDAuMDVcbiAgICB9XG5cbiAgICBjb25zdCBzY2FsZXMgPSB7XG4gICAgICAgIHE6IGQzLnNjYWxlTGluZWFyKCkucmFuZ2UoWzAsIDEwXSkuZG9tYWluKFswLCAxXSksXG4gICAgICAgIGV0YTogZDMuc2NhbGVMaW5lYXIoKS5yYW5nZShbMSwgMTAwMF0pLmRvbWFpbihbTWF0aC5wb3coMTAsIC01KSwgMC42XSlcbiAgICB9XG5cbiAgICAvLyBJbml0aWFsaXplIGdyYXBoIHBhcmFtZXRlcnMgdG8gbWF0Y2ggdGhlIGRlZmF1bHRzXG4gICAgdml6cy5ncmFwaC5xKGRlZmF1bHRzLnEpXG4gICAgdml6cy5ncmFwaC5ldGEoZGVmYXVsdHMuZXRhKVxuICAgIHNlbHMucVNsaWRlci5wcm9wZXJ0eSgndmFsdWUnLCBzY2FsZXMucShkZWZhdWx0cy5xKSlcbiAgICBzZWxzLmV0YVNsaWRlci5wcm9wZXJ0eSgndmFsdWUnLCBzY2FsZXMuZXRhKGRlZmF1bHRzLmV0YSkpXG5cbiAgICBzZWxzLnFJZC50ZXh0KHRvUShkZWZhdWx0cy5xKSlcbiAgICBzZWxzLmV0YUlkLnRleHQodG9FdGEoZGVmYXVsdHMuZXRhKSlcblxuICAgIHNlbHMucVNsaWRlci5vbignaW5wdXQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnN0IG1lID0gZDMuc2VsZWN0KHRoaXMpXG4gICAgICAgIGNvbnN0IHYgPSBzY2FsZXMucS5pbnZlcnQoK21lLnByb3BlcnR5KCd2YWx1ZScpKTtcbiAgICAgICAgdml6cy5ncmFwaC5xKHYpO1xuICAgICAgICBzZWxzLnFJZC50ZXh0KGAke3RvUSh2KX1gKVxuICAgIH0pXG5cbiAgICBzZWxzLmV0YVNsaWRlci5vbignaW5wdXQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnN0IG1lID0gZDMuc2VsZWN0KHRoaXMpXG4gICAgICAgIGNvbnN0IHYgPSBzY2FsZXMuZXRhLmludmVydChtZS5wcm9wZXJ0eSgndmFsdWUnKSk7XG4gICAgICAgIHZpenMuZ3JhcGguZXRhKHYpXG4gICAgICAgIHNlbHMuZXRhSWQudGV4dChgJHt0b0V0YSh2KX1gKVxuICAgIH0pXG5cbiAgICBzZWxzLmhlc3NUeXBlLm9uKCdpbnB1dCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc3Qgc2VsZiA9IGQzLnNlbGVjdCh0aGlzKVxuICAgICAgICBjb25zdCB2ID0gc2VsZi5wcm9wZXJ0eSgndmFsdWUnKVxuICAgICAgICB2aXpzLmdyYXBoLnNldFVwZGF0ZXIodilcbiAgICB9KVxufVxuXG5mdW5jdGlvbiBwbG90R29sZkhvbGUzQmFsbCgpIHtcbiAgICBjb25zdCB2aXMyID0gZDMuc2VsZWN0KFwiI3ZpczJcIik7XG4gICAgY29uc3Qgc2VscyA9IHtcbiAgICAgICAgY2hhcnQ6IHZpczIuc2VsZWN0KCcjY2hhcnQnKSxcbiAgICAgICAgY2hhcnRYRGlzdDogdmlzMi5zZWxlY3QoJyNjaGFydC14ZGlzdCcpLFxuICAgICAgICBjaGFydExvc3NlczogdmlzMi5zZWxlY3QoJyNjaGFydC1sb3NzZXMnKSxcbiAgICAgICAgbGFuZHNjYXBlU2VsZWN0b3I6IHZpczIuc2VsZWN0KCcubGFuZHNjYXBlLXNlbGVjdCcpXG4gICAgfVxuXG4gICAgY29uc3QgZXZlbnRIYW5kbGVyID0gbmV3IFNpbXBsZUV2ZW50SGFuZGxlcig8RWxlbWVudD52aXMyLm5vZGUoKSlcbiAgICBjb25zdCB2aXpzID0ge1xuICAgICAgICBncmFwaDogbmV3IEdvbGZIb2xlMUQoc2Vscy5jaGFydCwgZXZlbnRIYW5kbGVyLCB7fSwgVUlkLnVpZCgpKSxcbiAgICAgICAgY2hhcnRYRGlzdDogbmV3IEdvbGZYRGlzdChzZWxzLmNoYXJ0WERpc3QsIGV2ZW50SGFuZGxlciksXG4gICAgICAgIGNoYXJ0TG9zc2VzOiBuZXcgR29sZkxvc3NlcyhzZWxzLmNoYXJ0TG9zc2VzLCBldmVudEhhbmRsZXIpXG4gICAgfVxuXG4gICAgaW50ZXJmYWNlIEdvbGZEZWZhdWx0cyB7XG4gICAgICAgIGxhbmRzY2FwZTogc3RyaW5nXG4gICAgICAgIHFzOiBudW1iZXJbXVxuICAgICAgICBjbGFzc05hbWVzOiBzdHJpbmdbXVxuICAgICAgICBldGFzPzogbnVtYmVyW11cbiAgICB9XG5cblx0Ly8gQ29ycmVzcG9uZHMgdG8gcXMgPSBbMCwgMC41LCAxXVxuXHRjb25zdCBkZWZhdWx0RXRhID0ge1xuXHRcdHNlYWd1bGw6IFswLjAwNSwgMC4wMDUsIDAuMDA1XSxcblx0XHRob2xlOiBbMC4wMDUsIDAuMDA1LCAwLjAwNV0sXG5cdFx0c3RlcHM6IFswLjAwNSwgMC4wMDUsIDAuMDA1XSxcblx0XHRib3dsOiBbMC4wMywgMC4wMywgMC4wM10sXG5cdFx0ZGVlcF9uZXQ6IFswLjAxLCAwLjAxLCAwLjAxXSxcblx0fVxuXG4gICAgY29uc3QgZGVmYXVsdHM6IEdvbGZEZWZhdWx0cyA9IHtcbiAgICAgICAgbGFuZHNjYXBlOiBcInNlYWd1bGxcIixcbiAgICAgICAgcXM6IFswLCAwLjUsIDFdLFxuICAgICAgICBjbGFzc05hbWVzOiBbJ2dvbGYtYmFsbC1zZ2QnLCAnZ29sZi1iYWxsLXNuZ2QnLCAnZ29sZi1iYWxsLW5nZCddLCAvLyBEb24ndCBjaGFuZ2UgdGhlc2UgdW5sZXNzIHlvdSB3YW50IHRvIHBsYXkgd2l0aCBDU1MhIVxuICAgIH1cbiAgICBkZWZhdWx0cy5ldGFzID0gZGVmYXVsdEV0YVtkZWZhdWx0cy5sYW5kc2NhcGVdXG5cbiAgICBjb25zdCBkZWZhdWx0TGFuZHNjYXBlID0gbGFuZHNjYXBlc1tkZWZhdWx0cy5sYW5kc2NhcGVdXG5cbiAgICAvL0B0cy1pZ25vcmVcbiAgICBjb25zdCBkZWZhdWx0QmFsbHMgPSBkMy56aXAoZGVmYXVsdHMucXMsIGRlZmF1bHRzLmV0YXMsIGRlZmF1bHRzLmNsYXNzTmFtZXMpLm1hcCgoeCkgPT4gbmV3IEdvbGZCYWxsKG5ldyBNYW51YWxVcGRhdGVyKGRlZmF1bHRMYW5kc2NhcGUuZiwgZGVmYXVsdExhbmRzY2FwZS5kZiwgeFswXSwgeFsxXSksIHhbMl0pKVxuXG4gICAgdml6cy5ncmFwaC5kYXRhKGRlZmF1bHRCYWxscylcblxuICAgIC8vIEF0dGFjaCBnb2xmYmFsbCBpbmZvIHRvIGxvc3MgdHJhY2tlclxuICAgIGV2ZW50SGFuZGxlci5iaW5kKCdsb3NzLWNsaWNrJywgKGUpID0+IHtcbiAgICAgICAgdml6cy5jaGFydFhEaXN0LmNsZWFyUGF0aHMoKVxuICAgICAgICB2aXpzLmNoYXJ0TG9zc2VzLmNsZWFyUGF0aHMoKVxuICAgIH0pXG5cbiAgICAvLyBDb25maWd1cmUgaHRtbCBwYWdlIHRvIHdvcmsgd2l0aCBkZWZhdWx0c1xuICAgIHNlbHMubGFuZHNjYXBlU2VsZWN0b3IucHJvcGVydHkoJ3ZhbHVlJywgZGVmYXVsdHMubGFuZHNjYXBlKVxuICAgIHZpenMuZ3JhcGgubGFuZHNjYXBlKGxhbmRzY2FwZXNbZGVmYXVsdHMubGFuZHNjYXBlXSlcblxuICAgIGxldCBydW5uaW5nU3RyZWFtcyA9IFtdXG5cbiAgICAvLyBBc3NpZ24gc3RyZWFtc1xuICAgIGNvbnN0IGFzc2lnblN0cmVhbXMgPSAoZ3JhcGg6R29sZkhvbGUxRCwgY3VycmVudFN0cmVhbXM9W10pID0+IHtcbiAgICAgICAgY29uc3Qgc3RyZWFtcyA9IGdyYXBoLmRhdGEoKS5tYXAoYiA9PiBiLnN0cmVhbSlcblxuICAgICAgICBjb25zdCBwbG90dGVyID0ge1xuICAgICAgICAgICAgbmV4dDogZCA9PiB7XG4gICAgICAgICAgICAgICAgdml6cy5jaGFydFhEaXN0LnBsb3RQYXRoKGQsIGdyYXBoLnNjYWxlcy5iYXNlMm1hdGgueC5pbnZlcnQpXG4gICAgICAgICAgICAgICAgdml6cy5jaGFydExvc3Nlcy5wbG90UGF0aChkLCBncmFwaC5zY2FsZXMuYmFzZTJsb3NzKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY3VycmVudFN0cmVhbXMuZm9yRWFjaChzID0+IHMudW5zdWJzY3JpYmUoKSlcblxuICAgICAgICBjb25zdCBhY3RpdmF0ZWRTdHJlYW1zID0gc3RyZWFtcy5tYXAocyA9PiB7XG4gICAgICAgICAgICByZXR1cm4gcy5zdWJzY3JpYmUocGxvdHRlcilcbiAgICAgICAgfSlcbiAgICAgICAgcmV0dXJuIGFjdGl2YXRlZFN0cmVhbXNcbiAgICB9XG5cbiAgICAvLyBHYXRoZXIgaW50ZXJhY3Rpdml0eSBmb3IgdGhlIGdvbGYgYmFsbCBwbG90XG4gICAgc2Vscy5sYW5kc2NhcGVTZWxlY3Rvci5vbignaW5wdXQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnN0IHNlbGYgPSBkMy5zZWxlY3QodGhpcylcbiAgICAgICAgY29uc3QgdiA9IHNlbGYucHJvcGVydHkoJ3ZhbHVlJylcbiAgICAgICAgdml6cy5jaGFydExvc3Nlcy5yZXNldFhyYW5nZV8oKVxuICAgICAgICB2aXpzLmNoYXJ0WERpc3QucmVzZXRYcmFuZ2VfKClcbiAgICAgICAgdml6cy5ncmFwaC5sYW5kc2NhcGUobGFuZHNjYXBlc1t2XSlcbiAgICAgICAgdml6cy5ncmFwaC5kYXRhRnJvbUJhc2Uodml6cy5ncmFwaC5kYXRhVG9CYXNlXygpKVxuICAgICAgICBydW5uaW5nU3RyZWFtcyA9IGFzc2lnblN0cmVhbXModml6cy5ncmFwaCwgcnVubmluZ1N0cmVhbXMpXG4gICAgfSlcbiAgICBydW5uaW5nU3RyZWFtcyA9IGFzc2lnblN0cmVhbXModml6cy5ncmFwaCwgcnVubmluZ1N0cmVhbXMpXG59XG5cbmZ1bmN0aW9uIHBsb3RHb2xmSG9sZVNsaWRlcigpIHtcbiAgICBjb25zdCB2aXMzID0gZDMuc2VsZWN0KFwiI3ZpczNcIik7XG5cbiAgICBjb25zdCBzZWxzID0ge1xuICAgICAgICBjaGFydDogdmlzMy5zZWxlY3QoJyNjaGFydCcpLFxuICAgICAgICBjaGFydExvc3NlczogdmlzMy5zZWxlY3QoJyNjaGFydC1sb3NzZXMnKSxcbiAgICAgICAgY2hhcnRYRGlzdDogdmlzMy5zZWxlY3QoJyNjaGFydC14ZGlzdCcpLFxuICAgICAgICBxSWQ6IHZpczMuc2VsZWN0KCcjcS12YWwnKSxcbiAgICAgICAgZXRhSWQ6IHZpczMuc2VsZWN0KCcjZXRhLXZhbCcpLFxuICAgICAgICBxU2xpZGVyOiB2aXMzLnNlbGVjdCgnI3Etc2xpZGVyJyksXG4gICAgICAgIGV0YVNsaWRlcjogdmlzMy5zZWxlY3QoJyNldGEtc2xpZGVyJyksXG4gICAgICAgIGxhbmRzY2FwZVNlbGVjdG9yOiB2aXMzLnNlbGVjdCgnLmxhbmRzY2FwZS1zZWxlY3QnKVxuICAgIH1cblxuICAgIGNvbnN0IGV2ZW50SGFuZGxlciA9IG5ldyBTaW1wbGVFdmVudEhhbmRsZXIoPEVsZW1lbnQ+dmlzMy5ub2RlKCkpXG5cbiAgICBjb25zdCB2aXpzID0ge1xuICAgICAgICBncmFwaDogbmV3IEdvbGZIb2xlMUQoc2Vscy5jaGFydCwgZXZlbnRIYW5kbGVyLCB7IG1heEl0ZXI6IDEuNWUzIH0sIFVJZC51aWQoKSksXG4gICAgICAgIGNoYXJ0TG9zc2VzOiBuZXcgR29sZkxvc3NlcyhzZWxzLmNoYXJ0TG9zc2VzLCBldmVudEhhbmRsZXIpLFxuICAgICAgICBjaGFydFhEaXN0OiBuZXcgR29sZlhEaXN0KHNlbHMuY2hhcnRYRGlzdCwgZXZlbnRIYW5kbGVyKVxuICAgIH1cblxuICAgIGNvbnN0IGRlZmF1bHRzID0ge1xuICAgICAgICAvLyBOb3RlIHRvIGFsc28gY2hhbmdlIHRoZSBkZWZhdWx0IHZhbHVlIGluIHRoZSBodG1sIGZpbGUhXG4gICAgICAgIGxhbmRzY2FwZTogXCJzZWFndWxsXCIsXG4gICAgICAgIHE6IDAuNSxcbiAgICAgICAgZXRhOiAwLjAxXG4gICAgfVxuXG4gICAgLy8gQXR0YWNoIGdvbGZiYWxsIGluZm8gdG8gbG9zcyB0cmFja2VyXG4gICAgZXZlbnRIYW5kbGVyLmJpbmQoJ2xvc3MtY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICB2aXpzLmNoYXJ0WERpc3QuY2xlYXJQYXRocygpXG4gICAgICAgIHZpenMuY2hhcnRMb3NzZXMuY2xlYXJQYXRocygpXG4gICAgfSlcblxuICAgIC8vIFB1dCBkYXRhIGludG8gdml6XG4gICAgdml6cy5ncmFwaC5kYXRhKFtuZXcgR29sZkJhbGwobmV3IE1hbnVhbFVwZGF0ZXIobGFuZHNjYXBlcy5ob2xlLmYsIGxhbmRzY2FwZXMuaG9sZS5kZiwgZGVmYXVsdHMucSwgZGVmYXVsdHMuZXRhKSwgXCJnb2xmLWJhbGxcIildKVxuXG4gICAgLy8gY29uc3QgZXRhUmFuZ2UgPSBbLTUsIDJdLm1hcCh4ID0+IE1hdGgucG93KDEwLCB4KSlcbiAgICBjb25zdCBldGFSYW5nZSA9IFstMywgMF0ubWFwKHggPT4gTWF0aC5wb3coMTAsIHgpKVxuICAgIGNvbnN0IHNjYWxlcyA9IHtcbiAgICAgICAgcTogZDMuc2NhbGVMaW5lYXIoKS5yYW5nZShbMCwgMTBdKS5kb21haW4oWzAsIDFdKSxcbiAgICAgICAgZXRhOiBkMy5zY2FsZUxvZygpLnJhbmdlKFsxLCAxMDAwXSkuZG9tYWluKGV0YVJhbmdlKS5iYXNlKDEwKVxuICAgIH1cblxuICAgIC8vIEluaXRpYWxpemUgZ3JhcGggcGFyYW1ldGVycyB0byBtYXRjaCB0aGUgZGVmYXVsdHNcbiAgICB2aXpzLmdyYXBoLmxhbmRzY2FwZShsYW5kc2NhcGVzW2RlZmF1bHRzLmxhbmRzY2FwZV0pXG4gICAgc2Vscy5sYW5kc2NhcGVTZWxlY3Rvci5wcm9wZXJ0eSgndmFsdWUnLCBkZWZhdWx0cy5sYW5kc2NhcGUpXG5cbiAgICBzZWxzLnFTbGlkZXIucHJvcGVydHkoJ3ZhbHVlJywgc2NhbGVzLnEoZGVmYXVsdHMucSkpXG4gICAgc2Vscy5ldGFTbGlkZXIucHJvcGVydHkoJ3ZhbHVlJywgc2NhbGVzLmV0YShkZWZhdWx0cy5ldGEpKVxuICAgIHNlbHMucUlkLnRleHQodG9RKGRlZmF1bHRzLnEpKVxuICAgIHNlbHMuZXRhSWQudGV4dCh0b0V0YShkZWZhdWx0cy5ldGEpKVxuXG4gICAgLy8gQXNzaWduIHN0cmVhbXNcbiAgICBsZXQgcnVubmluZ1N0cmVhbXMgPSBbXVxuICAgIGNvbnN0IGFzc2lnblN0cmVhbXMgPSAoZ3JhcGg6R29sZkhvbGUxRCwgY3VycmVudFN0cmVhbXM9W10pID0+IHtcbiAgICAgICAgY29uc3Qgc3RyZWFtcyA9IGdyYXBoLmRhdGEoKS5tYXAoYiA9PiBiLnN0cmVhbSlcblxuICAgICAgICBjb25zdCBwbG90dGVyID0ge1xuICAgICAgICAgICAgbmV4dDogZCA9PiB7XG4gICAgICAgICAgICAgICAgdml6cy5jaGFydFhEaXN0LnBsb3RQYXRoKGQsIGdyYXBoLnNjYWxlcy5iYXNlMm1hdGgueC5pbnZlcnQpXG4gICAgICAgICAgICAgICAgdml6cy5jaGFydExvc3Nlcy5wbG90UGF0aChkLCBncmFwaC5zY2FsZXMuYmFzZTJsb3NzKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY3VycmVudFN0cmVhbXMuZm9yRWFjaChzID0+IHMudW5zdWJzY3JpYmUoKSlcblxuICAgICAgICBjb25zdCBhY3RpdmF0ZWRTdHJlYW1zID0gc3RyZWFtcy5tYXAocyA9PiB7XG4gICAgICAgICAgICByZXR1cm4gcy5zdWJzY3JpYmUocGxvdHRlcilcbiAgICAgICAgfSlcblxuICAgICAgICByZXR1cm4gYWN0aXZhdGVkU3RyZWFtc1xuICAgIH1cblxuICAgIC8vIEFkanVzdCBzbGlkZXIgcmVhY3Rpdml0eVxuICAgIHNlbHMucVNsaWRlci5vbignaW5wdXQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnN0IG1lID0gZDMuc2VsZWN0KHRoaXMpXG4gICAgICAgIGNvbnN0IHYgPSBzY2FsZXMucS5pbnZlcnQobWUucHJvcGVydHkoJ3ZhbHVlJykpO1xuICAgICAgICB2aXpzLmdyYXBoLnEodilcbiAgICAgICAgc2Vscy5xSWQudGV4dChgJHt0b1Eodil9YClcbiAgICB9KVxuXG4gICAgc2Vscy5ldGFTbGlkZXIub24oJ2lucHV0JywgZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zdCBtZSA9IGQzLnNlbGVjdCh0aGlzKVxuICAgICAgICBjb25zdCB2ID0gc2NhbGVzLmV0YS5pbnZlcnQobWUucHJvcGVydHkoJ3ZhbHVlJykpO1xuICAgICAgICB2aXpzLmdyYXBoLmV0YSh2KVxuICAgICAgICBzZWxzLmV0YUlkLnRleHQoYCR7dG9FdGEodil9YClcbiAgICB9KVxuXG4gICAgc2Vscy5sYW5kc2NhcGVTZWxlY3Rvci5vbignaW5wdXQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnN0IHNlbGYgPSBkMy5zZWxlY3QodGhpcylcbiAgICAgICAgY29uc3QgdiA9IHNlbGYucHJvcGVydHkoJ3ZhbHVlJylcbiAgICAgICAgdml6cy5jaGFydExvc3Nlcy5yZXNldFhyYW5nZV8oKVxuICAgICAgICB2aXpzLmNoYXJ0WERpc3QucmVzZXRYcmFuZ2VfKClcbiAgICAgICAgdml6cy5ncmFwaC5sYW5kc2NhcGUobGFuZHNjYXBlc1t2XSlcbiAgICAgICAgdml6cy5ncmFwaC5kYXRhRnJvbUJhc2Uodml6cy5ncmFwaC5kYXRhVG9CYXNlXygpKVxuICAgICAgICBydW5uaW5nU3RyZWFtcyA9IGFzc2lnblN0cmVhbXModml6cy5ncmFwaCwgcnVubmluZ1N0cmVhbXMpXG4gICAgfSlcbiAgICBydW5uaW5nU3RyZWFtcyA9IGFzc2lnblN0cmVhbXModml6cy5ncmFwaCwgcnVubmluZ1N0cmVhbXMpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtYWluKCkge1xuICAgIGNvbnNvbGUubG9nKFwiUlVOTklOR1wiKTtcbiAgICBwbG90UXVpdmVyR3JhcGgoKTtcbiAgICBwbG90R29sZkhvbGUzQmFsbCgpO1xuICAgIHBsb3RHb2xmSG9sZVNsaWRlcigpO1xufVxuIiwiaW1wb3J0ICogYXMgZDMgZnJvbSAnZDMnXG5pbXBvcnQgeyBNYXJnaW5JbmZvIH0gZnJvbSAnLi91dGlsL1NWR1Zpc0NvbXBvbmVudCdcbmltcG9ydCB7IEQzU2VsIH0gZnJvbSAnLi91dGlsL3hkMydcbmltcG9ydCB7cmFuZ2V9IGZyb20gJ3JhbWRhJ1xuXG5leHBvcnQgZnVuY3Rpb24gYWRkU1ZHKGRpdjogc3RyaW5nLCB3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlciwgbWFyZ2luOiBNYXJnaW5JbmZvKTogRDNTZWwge1xuXG4gICAgdmFyIHN2ZyA9IGQzLnNlbGVjdChkaXYpLmFwcGVuZChcInN2Z1wiKVxuICAgICAgICAuYXR0cihcIndpZHRoXCIsIFwiMTAwJVwiKVxuICAgICAgICAuYXR0cihcImhlaWdodFwiLCBcIjEwMCVcIilcbiAgICAgICAgLmF0dHIoXCJ2aWV3Qm94XCIsIFwiMCAwIFwiICsgKHdpZHRoICsgbWFyZ2luLmxlZnQgKyBtYXJnaW4ucmlnaHQpICsgXCIgXCIgKyAoaGVpZ2h0ICsgbWFyZ2luLnRvcCArIG1hcmdpbi5ib3R0b20pKVxuICAgICAgICAuYXR0cihcInByZXNlcnZlQXNwZWN0UmF0aW9cIiwgXCJ4TWlkWU1pZCBtZWV0XCIpXG4gICAgICAgIC5hcHBlbmQoXCJnXCIpXG4gICAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIFwidHJhbnNsYXRlKFwiICsgbWFyZ2luLmxlZnQgKyBcIixcIiArIG1hcmdpbi50b3AgKyBcIilcIik7XG5cbiAgICByZXR1cm4gc3ZnO1xufVxuXG50eXBlIERvbWFpblJhbmdlID0gbnVtYmVyW11cblxuZXhwb3J0IGZ1bmN0aW9uIGdldENvbnRvdXJWYWx1ZXMobjogbnVtYmVyLCBtOiBudW1iZXIsIHhyYW5nZTogRG9tYWluUmFuZ2UsIHlyYW5nZTogRG9tYWluUmFuZ2UsIGZ1bmM6ICh4OiBudW1iZXIsIHk6IG51bWJlcikgPT4gbnVtYmVyKSB7XG4gICAgbGV0IHZhbHVlcyA9IG5ldyBBcnJheShuICogbSlcblxuICAgIGZvciAodmFyIGogPSAwLjUsIGsgPSAwOyBqIDwgbTsgKytqKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwLjU7IGkgPCBuOyArK2ksICsraykge1xuICAgICAgICAgICAgY29uc3QgeHZhbCA9ICgoaSAvIG4pICogKHhyYW5nZVsxXSAtIHhyYW5nZVswXSkpICsgeHJhbmdlWzBdO1xuICAgICAgICAgICAgY29uc3QgeXZhbCA9ICgxIC0gKGogLyBtKSkgKiAoeXJhbmdlWzFdIC0geXJhbmdlWzBdKSArIHlyYW5nZVswXTtcbiAgICAgICAgICAgIHZhbHVlc1trXSA9IGZ1bmMoeHZhbCwgeXZhbCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdmFsdWVzXG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1bmlmb3JtKGEsIGIpIHtcbiAgICByZXR1cm4gTWF0aC5yYW5kb20oKSAqIChiIC0gYSkgKyBhO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2VuVW5pZm9ybShhOm51bWJlciwgYjpudW1iZXIsIG46bnVtYmVyKSB7XG4gICAgcmV0dXJuIHJhbmdlKDAsIG4pLm1hcCh4ID0+IHtyZXR1cm4ge3g6IHVuaWZvcm0oYSwgYiksIHk6IHVuaWZvcm0oYSxiKX19KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gbm9ybWFsKG1lYW4sIHZhcmlhbmNlKSB7XG4gICAgdmFyIHMgPSAwO1xuICAgIHdoaWxlIChzID09IDAgfHwgcyA+IDEpIHtcbiAgICAgICAgdmFyIHUgPSB1bmlmb3JtKC0xLDEpLFxuICAgICAgICB2ID0gdW5pZm9ybSgtMSwxKTtcbiAgICAgICAgcyA9IHUgKiB1ICsgdiAqIHY7XG4gICAgfVxuXG4gICAgdmFyIHN0YW5kYXJkID0gTWF0aC5zcXJ0KC0yICogTWF0aC5sb2cocykgLyBzKSAqIHU7XG4gICAgcmV0dXJuIG1lYW4gKyBNYXRoLnNxcnQodmFyaWFuY2UpICogc3RhbmRhcmQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZW5Ob3JtYWwobWVhbjpudW1iZXIsIHZhcmlhbmNlOm51bWJlciwgbjpudW1iZXIpIHtcbiAgICByZXR1cm4gcmFuZ2UoMCwgbikubWFwKHggPT4ge3JldHVybiB7eDogbm9ybWFsKG1lYW4sIHZhcmlhbmNlKSwgeTogdW5pZm9ybShtZWFuLHZhcmlhbmNlKX19KVxufSIsImltcG9ydCAqIGFzIGQzIGZyb20gJ2QzJ1xuaW1wb3J0IHsgVmVjdG9yMkQgfSBmcm9tICcuL3R5cGVzJ1xuaW1wb3J0IHsgU1ZHVmlzQ29tcG9uZW50LCBTVkdPcHRpb25zLCBNYXJnaW5JbmZvIH0gZnJvbSBcIi4vU1ZHVmlzQ29tcG9uZW50XCJcblxuZXhwb3J0IGludGVyZmFjZSBDaGFydE9wdGlvbnMgZXh0ZW5kcyBTVkdPcHRpb25zIHtcbiAgICB4cmFuZ2U6IFtudW1iZXIsIG51bWJlcl1cbiAgICB5cmFuZ2U6IFtudW1iZXIsIG51bWJlcl1cbiAgICBwYWQ6IE1hcmdpbkluZm8gICAgICAgICAgICAgLy8gRGlzdGFuY2UgZnJvbSBlZGdlcy4gRGVtYXJjYXRlIHdoZW4gdGhpbmdzIGFyZSB0b28gY2xvc2UgdG8gdGhlIGVkZ2Vcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDaGFydFNjYWxlcyB7XG4gICAgeD86IGQzLlNjYWxlTGluZWFyPG51bWJlciwgbnVtYmVyPixcbiAgICB5PzogZDMuU2NhbGVMaW5lYXI8bnVtYmVyLCBudW1iZXI+LFxufVxuLyoqXG4gKiBDcmVhdGUgYSBjbGFzcyB0aGF0IGNhbiBiZSB1c2VkIGZvciBwbG90dGluZyBjaGFydHMgKGxpbmUgZ3JhcGhzLCBiYXIgZ3JhcGhzLCBldGMuKS5cbiAqL1xuZXhwb3J0IGFic3RyYWN0IGNsYXNzIENoYXJ0MkQ8RGF0YUludGVyZmFjZT4gZXh0ZW5kcyBTVkdWaXNDb21wb25lbnQ8RGF0YUludGVyZmFjZT4ge1xuICAgIG9wdGlvbnM6IENoYXJ0T3B0aW9uc1xuICAgIHNjYWxlczogQ2hhcnRTY2FsZXNcblxuICAgIC8vIFB1dCBhIHZlY3RvciBpbnRvIHRoZSBjb29yZGluYXRlIHN5c3RlbSB1c2VkIGJ5IHRoZSB2aXN1YWxpemF0aW9uXG4gICAgaW50b1Zpcyh2OiBWZWN0b3IyRCkge1xuICAgICAgICByZXR1cm4geyB4OiB0aGlzLnNjYWxlcy54KHYueCksIHk6IHRoaXMuc2NhbGVzLnkodi55KSB9XG4gICAgfVxuXG4gICAgLy8gVGFrZSBhIHZlY3RvciBpbiB0aGUgY29vcmRpbmF0ZSBzeXN0ZW0gYW5kIHJldHVybiBpdCB0byB0aGUgbWF0aCBjb29yZGluYXRlc1xuICAgIGludG9NYXRoKHY6IFZlY3RvcjJEKSB7XG4gICAgICAgIHJldHVybiB7IHg6IHRoaXMuc2NhbGVzLnguaW52ZXJ0KHYueCksIHk6IHRoaXMuc2NhbGVzLnkuaW52ZXJ0KHYueSkgfVxuICAgIH1cblxuICAgIC8vIEluc3RhbnRpYXRlIHRoZSBheGVzIG9mIHRoZSBjaGFydC4gUmVpbXBsZW1lbnQgZGVwZW5kaW5nIG9uIGhvdyB3ZSB3YW50IHRoZSBheGVzIHRvIGFwcGVhclxuICAgIHByb3RlY3RlZCBhYnN0cmFjdCBjcmVhdGVBeGVzKClcblxuICAgIC8vIEluc3RhbnRpYXRlIHRoZSBzY2FsZXMgZnJvbSB0aGUgeHJhbmdlIGFuZCB0aGUgeXJhbmdlXG4gICAgcHJvdGVjdGVkIGFic3RyYWN0IGNyZWF0ZVNjYWxlcygpXG59IiwiaW1wb3J0IHsgRDNTZWwgfSBmcm9tIFwiLi94ZDNcIlxuaW1wb3J0IHsgVmlzQ29tcG9uZW50IH0gZnJvbSBcIi4vVmlzQ29tcG9uZW50XCJcbmltcG9ydCB7IFNpbXBsZUV2ZW50SGFuZGxlciB9IGZyb20gXCIuL1NpbXBsZUV2ZW50SGFuZGxlclwiO1xuaW1wb3J0IHsgU1ZHIH0gZnJvbSBcIi4vU1ZHcGx1c1wiO1xuXG5leHBvcnQgdHlwZSBNYXJnaW5JbmZvID0ge1xuICAgIHRvcDpudW1iZXJcbiAgICByaWdodDpudW1iZXJcbiAgICBib3R0b206bnVtYmVyXG4gICAgbGVmdDpudW1iZXJcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTVkdPcHRpb25zIHtcbiAgICBtYXJnaW46IE1hcmdpbkluZm9cbiAgICBtYXhXaWR0aDogbnVtYmVyICAgICAgICAvLyBUaGUgdG90YWwgd2lkdGggb2YgdGhlIGNvbXBvbmVudFxuICAgIG1heEhlaWdodDogbnVtYmVyICAgICAgIC8vIFRoZSB0b3RhbCBoZWlnaHQgb2YgdGhlIGNvbXBvbmVudFxuICAgIHdpZHRoPzogbnVtYmVyICAgICAgICAgIC8vIFRoZSB0b3RhbCB3aWR0aCAtIGFwcGxpY2FibGUgbWFyZ2luc1xuICAgIGhlaWdodD86IG51bWJlciAgICAgICAgIC8vIFRoZSB0b3RhbCBoZWlnaHQgLSBhcHBsaWNhYmxlIG1hcmdpbnNcbn1cblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFNWR1Zpc0NvbXBvbmVudDxEYXRhSW50ZXJmYWNlPiBleHRlbmRzIFZpc0NvbXBvbmVudDxEYXRhSW50ZXJmYWNlPiB7XG4gICAgcHJvdGVjdGVkIGxheWVyczogeyBtYWluPzogRDNTZWwsIGZnPzogRDNTZWwsIGJnPzogRDNTZWwsIFtrZXk6IHN0cmluZ106IEQzU2VsIH07XG4gICAgcHJvdGVjdGVkIHN2ZzogRDNTZWxcbiAgICBwcm90ZWN0ZWQgb3B0aW9uczogU1ZHT3B0aW9ucyA9IHtcbiAgICAgICAgbWFyZ2luOiB7IHRvcDogMCwgcmlnaHQ6IDAsIGJvdHRvbTogMCwgbGVmdDogMCB9LFxuICAgICAgICBtYXhXaWR0aDogNDUwLFxuICAgICAgICBtYXhIZWlnaHQ6IDQ1MCxcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgY29uc3RydWN0b3IoZDNwYXJlbnQ6IEQzU2VsLCBldmVudEhhbmRsZXI/OiBTaW1wbGVFdmVudEhhbmRsZXIsIG9wdGlvbnM6IHt9ID0ge30sIElEPTApIHtcbiAgICAgICAgc3VwZXIoZDNwYXJlbnQsIGV2ZW50SGFuZGxlciwgSUQpXG4gICAgfVxuXG4gICAgLyoqIFxuICAgICAqIE11c3QgYmUgY2FsbGVkIGltbWVkaWF0ZWx5IGFmdGVyIHRoZSBgc3VwZXIoKWAgY29uc3RydWN0b3IgY2FsbCBvZiBpbmhlcmV0aW5nIGNsYXNzZXMuXG4gICAgICogXG4gICAgICogLSBDYWxjdWxhdGVzIGhlaWdodCBhbmQgd2lkdGggZm9yIG9wdGlvbnNcbiAgICAgKiAtIEFkZHMgJ3N2ZycgYW5kICdiYXNlJyBvYmplY3RzIHRvIHRoZSBkaXYuXG4gICAgICogLSBBZGRzIGxheWVycyBvbiB0aGUgYmFzZSB0byB3b3JrIHdpdGggaWYgcGFzc2VkXG4gICAgICogLSBSdW5zIGRlZmluZWQgc3RhdGljIGluaXRpYWxpemF0aW9uIGRlZmluZWQgaW4gYGluaXQoKWBcbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgaW5pdFNWRyhvcHRpb25zID0ge30sIGRlZmF1bHRMYXllcnMgPSBbXSkge1xuICAgICAgICB0aGlzLnVwZGF0ZU9wdGlvbnMob3B0aW9ucylcbiAgICAgICAgY29uc3Qgb3AgPSB0aGlzLm9wdGlvbnM7XG4gICAgICAgIG9wLndpZHRoID0gb3AubWF4V2lkdGggLSAob3AubWFyZ2luLmxlZnQgKyBvcC5tYXJnaW4ucmlnaHQpXG4gICAgICAgIG9wLmhlaWdodCA9IG9wLm1heEhlaWdodCAtIChvcC5tYXJnaW4udG9wICsgb3AubWFyZ2luLmJvdHRvbSlcblxuICAgICAgICB0aGlzLnN2ZyA9IFNWRy5hZGRTVkcodGhpcy5wYXJlbnQsIG9wLndpZHRoLCBvcC5oZWlnaHQsIG9wLm1hcmdpbilcbiAgICAgICAgdGhpcy5iYXNlID0gU1ZHLmdyb3VwKHRoaXMuc3ZnLCAnJyk7IC8vIExldCBIVE1MIGF1dGhvciBhc3NpZ24gdGhlIGNsYXNzIG5hbWUgYW5kIElEXG4gICAgICAgIHRoaXMubGF5ZXJzID0ge307XG4gICAgICAgIGlmIChkZWZhdWx0TGF5ZXJzKSB7XG4gICAgICAgICAgICAvLyBjb25zdHJ1Y3Rpb24gb3JkZXIgaXMgaW1wb3J0YW50ICFcbiAgICAgICAgICAgIGRlZmF1bHRMYXllcnMuZm9yRWFjaChsYXllciA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5sYXllcnNbbGF5ZXJdID0gU1ZHLmdyb3VwKHRoaXMuYmFzZSwgbGF5ZXIpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmluaXQoKVxuICAgIH1cbn0iLCJpbXBvcnQgKiBhcyBkMyBmcm9tIFwiZDNcIlxuaW1wb3J0ICogYXMgUiBmcm9tICdyYW1kYSdcbmltcG9ydCB7TWFyZ2luSW5mb30gZnJvbSAnLi9TVkdWaXNDb21wb25lbnQnXG5pbXBvcnQge0QzU2VsfSBmcm9tICcuLi91dGlsL3hkMydcblxuLyoqXG4gKiBDcmVhdGVkIGJ5IGhlbiBvbiA1LzE1LzE3LlxuICogTW9kaWZpZWQgYnkgaG9vIG9uIDQvMTYvMTkuXG4gKi9cblxuZXhwb3J0IGNsYXNzIFNWRyB7XG4gICAgXG4gICAgc3RhdGljIHRyYW5zbGF0ZSh4Om51bWJlciwgeTpudW1iZXIpOnN0cmluZyB7XG4gICAgICAgIHJldHVybiBgdHJhbnNsYXRlKCR7eH0sJHt5fSlgXG4gICAgfVxuXG4gICAgc3RhdGljIHJvdGF0ZShkZWc6bnVtYmVyLCBvcmlnPzp7eDpudW1iZXIsIHk6bnVtYmVyfSk6c3RyaW5nIHtcbiAgICAgICAgaWYgKG9yaWcgPT0gbnVsbCkgXG4gICAgICAgICAgICByZXR1cm4gYHJvdGF0ZSgke2RlZ30pYFxuXG4gICAgICAgIHJldHVybiBgcm90YXRlKCR7ZGVnfSwke29yaWcueH0sJHtvcmlnLnl9KWBcbiAgICB9XG5cbiAgICBzdGF0aWMgc2tldyhkZWd4Om51bWJlciwgZGVneT0wKSB7XG4gICAgICAgIHJldHVybiBgc2tldygke2RlZ3h9LCAke2RlZ3l9KWBcbiAgICB9XG5cbiAgICBzdGF0aWMgc2tld1goZGVnOm51bWJlcikge1xuICAgICAgICByZXR1cm4gYHNrZXdYKCR7ZGVnfSlgXG4gICAgfVxuXG4gICAgc3RhdGljIHNrZXdZKGRlZzpudW1iZXIpIHtcbiAgICAgICAgcmV0dXJuIGBza2V3WSgke2RlZ30pYFxuICAgIH1cblxuICAgIHN0YXRpYyBzY2FsZSh4Om51bWJlciwgeT86bnVtYmVyKTpzdHJpbmcge1xuICAgICAgICBjb25zdCB5c2NhbGUgPSB5ICE9IG51bGwgPyB5IDogeDtcblxuICAgICAgICByZXR1cm4gYHNjYWxlKCR7eH0sICR7eXNjYWxlfSlgXG4gICAgfVxuXG4gICAgc3RhdGljIGdyb3VwKHBhcmVudCwgY2xhc3NlcywgcG9zID0ge3g6IDAsIHk6IDB9KSB7XG4gICAgICAgIHJldHVybiBwYXJlbnQuYXBwZW5kKCdnJylcbiAgICAgICAgICAgIC5hdHRyKCdjbGFzcycsIGNsYXNzZXMpXG4gICAgICAgICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBTVkcudHJhbnNsYXRlKHBvcy54LCBwb3MueSkpXG4gICAgfVxuXG4gICAgc3RhdGljIGFkZFNWRyhwYXJlbnQ6RDNTZWwsIHdpZHRoOm51bWJlciwgaGVpZ2h0Om51bWJlciwgbWFyZ2luOk1hcmdpbkluZm8pOkQzU2VsIHtcblxuICAgICAgICB2YXIgc3ZnID0gcGFyZW50LmFwcGVuZChcInN2Z1wiKVxuICAgICAgICAgICAgLmF0dHIoXCJ3aWR0aFwiLCBcIjEwMCVcIilcbiAgICAgICAgICAgIC5hdHRyKFwiaGVpZ2h0XCIsIFwiMTAwJVwiKVxuICAgICAgICAgICAgLmF0dHIoXCJ2aWV3Qm94XCIsIFwiMCAwIFwiICsgKHdpZHRoICsgbWFyZ2luLmxlZnQgKyBtYXJnaW4ucmlnaHQpICsgXCIgXCIgKyAoaGVpZ2h0ICsgbWFyZ2luLnRvcCArIG1hcmdpbi5ib3R0b20pKVxuICAgICAgICAgICAgLmF0dHIoXCJwcmVzZXJ2ZUFzcGVjdFJhdGlvXCIsIFwieE1pZFlNaWQgbWVldFwiKVxuICAgICAgICAuYXBwZW5kKFwiZ1wiKVxuICAgICAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgU1ZHLnRyYW5zbGF0ZShtYXJnaW4ubGVmdCwgbWFyZ2luLnRvcCkpO1xuXG4gICAgICAgIHJldHVybiBzdmc7XG4gICAgfVxuXG4gICAgc3RhdGljIGFkZEFycm93cyhwYXJlbnQ6RDNTZWwpIHtcbiAgICAgICAgcGFyZW50LmFwcGVuZCgnZGVmcycpXG4gICAgICAgICAgICAuYXBwZW5kKCdtYXJrZXInKVxuICAgICAgICAgICAgLmF0dHIoXCJpZFwiLCBcImFycm93XCIpXG4gICAgICAgICAgICAuYXR0cihcIm1hcmtlclVuaXRzXCIsIFwic3Ryb2tlV2lkdGhcIilcbiAgICAgICAgICAgIC5hdHRyKFwibWFya2VyV2lkdGhcIiwgNS41KVxuICAgICAgICAgICAgLmF0dHIoXCJtYXJrZXJIZWlnaHRcIiwgNS41KVxuICAgICAgICAgICAgLmF0dHIoXCJ2aWV3Qm94XCIsIFwiMCAwIDEyIDEyXCIpXG4gICAgICAgICAgICAuYXR0cihcInJlZlhcIiwgNilcbiAgICAgICAgICAgIC5hdHRyKFwicmVmWVwiLCA2KVxuICAgICAgICAgICAgLmF0dHIoXCJvcmllbnRcIiwgJ2F1dG8nKVxuICAgICAgICAgICAgLmFwcGVuZCgncGF0aCcpXG4gICAgICAgICAgICAuYXR0cignZCcsIFwiTTIsMiBMMTAsNiBMMiwxMCBMNiw2IEwyLDJcIilcbiAgICAgICAgICAgIC8vIC5zdHlsZShcImZpbGw6ICNmMDBcIilcbiAgICB9XG5cbiAgICBzdGF0aWMgaW5zZXJ0QXJyb3cocGFyZW50OkQzU2VsLCB4MTpudW1iZXIsIHkxOm51bWJlciwgeDI6bnVtYmVyLCB5MjpudW1iZXIsIGNvbG9yOnN0cmluZywgd2lkdGg6bnVtYmVyKSB7XG4gICAgICAgIHJldHVybiBwYXJlbnQuYXBwZW5kKFwibGluZVwiKVxuICAgICAgICAgICAgIC5hdHRyKFwieDFcIix4MSkgIFxuICAgICAgICAgICAgIC5hdHRyKFwieTFcIix5MSkgIFxuICAgICAgICAgICAgIC5hdHRyKFwieDJcIix4MikgIFxuICAgICAgICAgICAgIC5hdHRyKFwieTJcIix5MikgIFxuICAgICAgICAgICAgIC5hdHRyKFwic3Ryb2tlXCIsY29sb3IpICBcbiAgICAgICAgICAgICAuYXR0cihcInN0cm9rZS13aWR0aFwiLHdpZHRoKSAgXG4gICAgICAgICAgICAgLmF0dHIoXCJtYXJrZXItZW5kXCIsXCJ1cmwoI2Fycm93KVwiKTsgIFxuICAgIH1cblxuICAgIHN0YXRpYyBtZXNoZ3JpZChueDogbnVtYmVyLCBueTogbnVtYmVyLCB4cmFuZ2U6IG51bWJlcltdLCB5cmFuZ2U6IG51bWJlcltdKSB7XG4gICAgICAgIGNvbnN0IHNjYWxlID0gKHZhbHM6bnVtYmVyW10sIHJhbmdlKSA9PiB2YWxzLm1hcCh2ID0+ICh2ICogKHJhbmdlWzFdIC0gcmFuZ2VbMF0pKSArIHJhbmdlWzBdKTtcblxuICAgICAgICBjb25zdCBwb2ludGlmeSA9ICh4dmFsczpudW1iZXJbXSwgeXZhbHM6bnVtYmVyW10pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG91dCA9IFtdXG4gICAgICAgICAgICB4dmFscy5mb3JFYWNoKHggPT4ge1xuICAgICAgICAgICAgICAgIHl2YWxzLmZvckVhY2goeSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIG91dC5wdXNoKHt4OiB4LCB5OiB5fSlcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIHJldHVybiBvdXRcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHh2YWxzID0gc2NhbGUoUi5yYW5nZSgwLCBueCkubWFwKHggPT4gKHggKyAwLjUpIC8gbngpLCB4cmFuZ2UpXG4gICAgICAgIGNvbnN0IHl2YWxzID0gc2NhbGUoUi5yYW5nZSgwLCBueSkubWFwKHkgPT4gKHkgKyAwLjUpIC8gbnkpLCB5cmFuZ2UpXG4gICAgICAgIHJldHVybiBwb2ludGlmeSh4dmFscywgeXZhbHMpXG4gICAgfVxuXG59XG5cbmV4cG9ydCBjbGFzcyBTVkdNZWFzdXJlbWVudHMge1xuXG4gICAgcHJpdmF0ZSBtZWFzdXJlRWxlbWVudDogZDMuU2VsZWN0aW9uPGFueSwgYW55LCBhbnksIGFueT47XG5cbiAgICBjb25zdHJ1Y3RvcihiYXNlRWxlbWVudCwgY2xhc3NlcyA9ICcnKSB7XG4gICAgICAgIHRoaXMubWVhc3VyZUVsZW1lbnQgPSBiYXNlRWxlbWVudC5hcHBlbmQoJ3RleHQnKVxuICAgICAgICAgICAgLmF0dHIoJ3gnLCAwKVxuICAgICAgICAgICAgLmF0dHIoJ3knLCAtMjApXG4gICAgICAgICAgICAuYXR0cignY2xhc3MnLCBjbGFzc2VzKVxuXG4gICAgfVxuXG4gICAgdGV4dExlbmd0aCh0ZXh0LCBzdHlsZSA9IG51bGwpIHtcbiAgICAgICAgdGhpcy5tZWFzdXJlRWxlbWVudC5hdHRyKCdzdHlsZScsIHN0eWxlKTtcbiAgICAgICAgdGhpcy5tZWFzdXJlRWxlbWVudC50ZXh0KHRleHQpO1xuICAgICAgICBjb25zdCB0bCA9ICg8U1ZHVGV4dEVsZW1lbnQ+IHRoaXMubWVhc3VyZUVsZW1lbnQubm9kZSgpKS5nZXRDb21wdXRlZFRleHRMZW5ndGgoKTtcbiAgICAgICAgdGhpcy5tZWFzdXJlRWxlbWVudC50ZXh0KCcnKTtcblxuICAgICAgICByZXR1cm4gdGw7XG4gICAgfVxufSIsIi8qKlxuICogQ3JlYXRlZCBieSBoZW4gb24gNS8xNS8xNy5cbiAqIE1vZGlmaWVkIGJ5IGhvbyBvbiA0LzE2LzE5LlxuICovXG5leHBvcnQgY2xhc3MgU2ltcGxlRXZlbnRIYW5kbGVyIHtcblxuICAgIGVsZW1lbnQ6IEVsZW1lbnQ7XG4gICAgZXZlbnRMaXN0ZW5lcnM6IG9iamVjdFtdO1xuXG4gICAgY29uc3RydWN0b3IoZWxlbWVudDogRWxlbWVudCkge1xuICAgICAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuICAgICAgICB0aGlzLmV2ZW50TGlzdGVuZXJzID0gW11cbiAgICB9XG5cbiAgICBiaW5kKGV2ZW50TmFtZXM6IHN0cmluZywgZXZlbnRGdW5jdGlvbjogRnVuY3Rpb24pIHtcbiAgICAgICAgZm9yIChjb25zdCBldmVudE5hbWUgb2YgZXZlbnROYW1lcy5zcGxpdCgnICcpKSB7XG4gICAgICAgICAgICB0aGlzLmV2ZW50TGlzdGVuZXJzLnB1c2goe2V2ZW50TmFtZSwgZXZlbnRGdW5jdGlvbn0pO1xuICAgICAgICAgICAgY29uc3QgZXZlbnRGdW5jdGlvbldyYXAgPSBlID0+IGV2ZW50RnVuY3Rpb24oZS5kZXRhaWwsIGUpO1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBldmVudEZ1bmN0aW9uV3JhcCwgZmFsc2UpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0TGlzdGVuZXJzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5ldmVudExpc3RlbmVycztcbiAgICB9XG5cbiAgICB0cmlnZ2VyKGV2ZW50TmFtZTogc3RyaW5nLCBkZXRhaWw6IG9iamVjdCkge1xuICAgICAgICB0aGlzLmVsZW1lbnQuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoZXZlbnROYW1lLCB7ZGV0YWlsfSkpO1xuICAgIH1cbn0iLCJsZXQgdGhlX3VuaXF1ZV9pZF9jb3VudGVyID0gMDtcbmxldCB0aGVfdW5pcXVlX3N0cmluZ19jb3VudGVyID0gMDtcblxuZXhwb3J0IGNsYXNzIFVJZCB7XG4gICAgc3RhdGljIHVpZCgpOiBudW1iZXIge1xuICAgICAgICB0aGVfdW5pcXVlX2lkX2NvdW50ZXIgKz0gMTtcbiAgICAgICAgcmV0dXJuIHRoZV91bmlxdWVfaWRfY291bnRlclxuICAgIH1cbiAgICBzdGF0aWMgc2ltcGxlVUlkKHByZWZpeD0nJyk6IHN0cmluZyB7XG4gICAgICAgIHRoZV91bmlxdWVfc3RyaW5nX2NvdW50ZXIgKz0gMTtcblxuICAgICAgICByZXR1cm4gcHJlZml4ICsgdGhlX3VuaXF1ZV9zdHJpbmdfY291bnRlcjtcbiAgICB9XG59XG4iLCIvKipcbiAqIENyZWF0ZWQgYnkgSGVuZHJpayBTdHJvYmVsdCAoaGVuZHJpay5zdHJvYmVsdC5jb20pIG9uIDEyLzMvMTYuXG4gKiBNb2RpZmllZCBieSBCZW4gSG9vdmVyIG9uIDQvMTYvMjAxOVxuICovXG5pbXBvcnQgeyBEM1NlbCB9IGZyb20gXCIuL3hkM1wiXG5pbXBvcnQgeyBTaW1wbGVFdmVudEhhbmRsZXIgfSBmcm9tIFwiLi9TaW1wbGVFdmVudEhhbmRsZXJcIjtcblxuLyoqXG4gKiBTaG91bGQgaGF2ZSBWQ29tcG9uZW50SFRNTCBhbmQgVkNvbXBvbmVudFNWR1xuICpcbiAqIENvbW1vbiBQcm9wZXJ0aWVzOlxuICogLSBldmVudHNcbiAqIC0gZXZlbnRIYW5kbGVyIChWIGltcG9ydGFudClcbiAqIC0gb3B0aW9ucyAoTWFpbnRhaW5zIHB1YmxpYyBzdGF0ZS4gQ2FuIGV4cG9zZSB0aGVzZSB3aXRoIGdldC9zZXQgZnVuY3Rpb25zIHdpdGggYXV0byB1cGRhdGUpXG4gKiAtIF9jdXJyZW50IChNYWludGFpbnMgcHJpdmF0ZSBzdGF0ZSlcbiAqIC0gY3NzTmFtZSAoc3luY2VkIHdpdGggY29ycmVzcG9uZGluZyBDU1MgZmlsZSlcbiAqIC0gcGFyZW50IChIVE1MIGlzIGRpdiBjb250YWluaW5nIHRoZSBiYXNlLCBTVkcgaXMgU1ZHIGVsZW1lbnQpXG4gKiAtIGJhc2UgKEhUTUwgaXMgZGl2IHdpdGggY3NzX25hbWUgZXN0YWJsaXNoZWQpXG4gKiAtIF9kYXRhIChEYXRhIHVzZWQgdG8gY3JlYXRlIGFuZCByZW5kZXIgdGhlIGNvbXBvbmVudClcbiAqIC0gX3JlbmRlckRhdGEgKERhdGEgbmVlZGVkIHRvIGRpc3BsYXkuIFRoaXMgbWF5IG5vdCBiZSBuZWVkZWQsIGJ1dCBpcyBjdXJyZW50bHkgdXNlZCBpbiBoaXN0b2dyYW0pICogKiBDb21tb24gTWV0aG9kczpcbiAqIC0gY29uc3RydWN0b3JcbiAqIC0gX3JlbmRlcigpICAgICAgQ29uc2lkZXIgcmVwbGFjaW5nIHdpdGggYF91cGRhdGVEYXRhKClgIHRoYXQgdXBkYXRlcyBhbGwgZGF0YSBhdCBvbmNlXG4gKiAtIHVwZGF0ZSgpICAgICAgIENvbnNpZGVyIHJlcGxhY2luZyB0aGlzIHdpdGggYGRhdGEoKWAgdGhhdCBhdXRvIHVwZGF0ZXMgZGF0YVxuICogLSByZWRyYXcoKVxuICogLSBkZXN0cm95KClcbiAqL1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgVmlzQ29tcG9uZW50PERhdGFJbnRlcmZhY2U+IHtcbiAgICAvKipcbiAgICAgKiBHaXZlbiBhbiBJRCwgY3JlYXRlIGEgbmV3IGluc3RhbmNlIG9mIHRoaXMgY2xhc3Mgd2l0aCB0aGUgZXZlbnRzIGFuZCBjc3NfbmFtZSBtb2RpZmllZCBieSB0aGUgaWRcbiAgICAgKi9cbiAgICBuZXdJbnN0YW5jZShpZDogbnVtYmVyKSB7IH1cblxuICAgIC8qKlxuICAgICAqIFRoZSBzdGF0aWMgcHJvcGVydHkgdGhhdCBjb250YWlucyBhbGwgY2xhc3MgcmVsYXRlZCBldmVudHMuXG4gICAgICogU2hvdWxkIGJlIG92ZXJ3cml0dGVuIGFuZCBldmVudCBzdHJpbmdzIGhhdmUgdG8gYmUgdW5pcXVlISFcbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgZ2V0IGV2ZW50cygpIHtcbiAgICAgICAgY29uc3QgZXZlbnQgPSAoZXZlbnROYW1lKSA9PiBgJHt0aGlzLmJhc2VOYW1lfV8ke2V2ZW50TmFtZX1gXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBub0V2ZW50OiBldmVudCgnTm9FdmVudCcpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgZ2V0IGJhc2VOYW1lKCkge1xuICAgICAgICByZXR1cm4gYCR7dGhpcy5jc3NuYW1lfV9JRCR7dGhpcy5JRH1gXG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGNzc25hbWU6IHN0cmluZzsgICAgICAgICAgICAvLyBNYWtlIHRoZSBzYW1lIGFzIHRoZSBjb3JyZXNwb25kaW5nIGNzcyBmaWxlXG4gICAgcHJvdGVjdGVkIElEOiBudW1iZXI7ICAgICAgICAgICAgICAgICAvLyBJRCBhc3NvY2lhdGVkIHRvIHVuaXF1ZSBpbnN0YW5jZSBvZiB2aXN1YWxpemF0aW9uLiBEZWZhdWx0cyB0byAwXG5cbiAgICBwcm90ZWN0ZWQgYWJzdHJhY3Qgb3B0aW9uczoge307XG4gICAgcHJvdGVjdGVkIGV2ZW50SGFuZGxlcjogU2ltcGxlRXZlbnRIYW5kbGVyO1xuICAgIHBhcmVudDogRDNTZWw7ICAgICAgICAgICAgICAgICAgICAgICAgLy8gUGFyZW50IGQzIHNlbGVjdGlvblxuICAgIGJhc2U6IEQzU2VsOyAgICAgICAgICAgICAgICAgLy8gZDMgc2VsZWN0aW9uIHRoYXQgaXMgY3JlYXRlZCBieSB0aGUgaW5pdFxuICAgIHByb3RlY3RlZCBfZGF0YTogRGF0YUludGVyZmFjZTtcbiAgICBwcm90ZWN0ZWQgcmVuZGVyRGF0YTogdW5rbm93bjtcblxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtEM1NlbH0gZDNwYXJlbnQgIEQzIHNlbGVjdGlvbiBvZiBwYXJlbnQgU1ZHIERPTSBFbGVtZW50XG4gICAgICogQHBhcmFtIHtTaW1wbGVFdmVudEhhbmRsZXJ9IGV2ZW50SGFuZGxlciBhIGdsb2JhbCBldmVudCBoYW5kbGVyIG9iamVjdCBvciAnbnVsbCcgZm9yIGxvY2FsIGV2ZW50IGhhbmRsZXJcbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgY29uc3RydWN0b3IoZDNwYXJlbnQ6IEQzU2VsLCBldmVudEhhbmRsZXI/OiBTaW1wbGVFdmVudEhhbmRsZXIsIElEID0gMCkge1xuICAgICAgICB0aGlzLnBhcmVudCA9IGQzcGFyZW50O1xuICAgICAgICB0aGlzLmV2ZW50SGFuZGxlciA9IGV2ZW50SGFuZGxlciB8fCBuZXcgU2ltcGxlRXZlbnRIYW5kbGVyKHRoaXMucGFyZW50Lm5vZGUoKSk7XG4gICAgICAgIHRoaXMuSUQgPSBJRDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTaG91bGQgYmUgb3ZlcndyaXR0ZW4gdG8gY3JlYXRlIG5lZWRlZCBzdGF0aWMgRE9NIGVsZW1lbnRzXG4gICAgICovXG4gICAgcHJvdGVjdGVkIGFic3RyYWN0IGluaXQoKTtcblxuICAgIC8qKlxuICAgICAqIEZvbGxvdyB0aGUgRDMgY29udmVudGlvbjogcmV0cmlldmUgdGhlIGRhdGEgaW5zaWRlIHRoZSBjbGFzcyBpZiBudWxsLiBPdGhlcndpc2UsIHNldCB0aGUgZGF0YSBhbmQgcmV0dXJuICd0aGlzJ1xuICAgICAqL1xuICAgIGFic3RyYWN0IGRhdGEoKTogRGF0YUludGVyZmFjZTtcbiAgICBhYnN0cmFjdCBkYXRhKHg6IERhdGFJbnRlcmZhY2UpOiB0aGlzO1xuXG4gICAgLyoqXG4gICAgICogU2V0IG1hbnkgb3B0aW9ucyBhdCBvbmNlXG4gICAgICpcbiAgICAgKiBAcGFyYW0gb3B0aW9ucyBSZXNldCBvcHRpb25zIHRvIHBhc3NlZCB2YWx1ZXNcbiAgICAgKi9cbiAgICB1cGRhdGVPcHRpb25zKG9wdGlvbnM6IHt9KSB7XG4gICAgICAgIE9iamVjdC5rZXlzKG9wdGlvbnMpLmZvckVhY2goayA9PiB0aGlzLm9wdGlvbnNba10gPSBvcHRpb25zW2tdKTtcbiAgICB9XG5cbiAgICBkZXN0cm95KCkge1xuICAgICAgICB0aGlzLmJhc2UucmVtb3ZlKCk7XG4gICAgfVxufSIsImltcG9ydCAqIGFzIGQzIGZyb20gJ2QzJ1xuaW1wb3J0IHsgQmFzZVR5cGUgfSBmcm9tICdkMydcblxuZXhwb3J0IGNvbnN0IGxpbnNwYWNlID0gKHN0YXJ0LCBlbmQsIG4pID0+IHtcbiAgICBjb25zdCBkZWx0YSA9IChlbmQgLSBzdGFydCkgLyAobiAtIDEpXG4gICAgcmV0dXJuIGQzLnJhbmdlKHN0YXJ0LCBlbmQgKyBkZWx0YSwgZGVsdGEpLnNsaWNlKDAsIG4pXG59XG5cbmV4cG9ydCB0eXBlIEQzU2VsID0gZDMuU2VsZWN0aW9uPGFueSwgYW55LCBhbnksIGFueT5cbmV4cG9ydCB0eXBlIGQzUzxUIGV4dGVuZHMgQmFzZVR5cGUsIFUgPSBhbnk+ID0gZDMuU2VsZWN0aW9uPFQsIFUsIGFueSwgYW55PlxuXG5kMy5zZWxlY3Rpb24ucHJvdG90eXBlLmNsZWFyID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuc2VsZWN0QWxsKCcqJykucmVtb3ZlKCk7XG4gICAgcmV0dXJuIHRoaXM7XG59XG5cbmQzLnNlbGVjdGlvbi5wcm90b3R5cGUudG9nZ2xlQ2xhc3MgPSBmdW5jdGlvbiAoY2xhc3NOYW1lKSB7XG4gICAgdGhpcy5jbGFzc2VkKGNsYXNzTmFtZSwgIXRoaXMuY2xhc3NlZChjbGFzc05hbWUpKTtcbiAgICByZXR1cm4gdGhpcztcbn1cblxuZDMuc2VsZWN0aW9uLnByb3RvdHlwZS5zaG93ID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuc3R5bGUoJ2Rpc3BsYXknLCAnaW5pdGlhbCcpO1xuICAgIHJldHVybiB0aGlzO1xufVxuXG5kMy5zZWxlY3Rpb24ucHJvdG90eXBlLmhpZGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5zdHlsZSgnZGlzcGxheScsICdub25lJyk7XG4gICAgcmV0dXJuIHRoaXM7XG59XG5cbmQzLnNlbGVjdGlvbi5wcm90b3R5cGUudG9nZ2xlID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBpc0hpZGRlbiA9IHRoaXMuc3R5bGUoJ2Rpc3BsYXknKSA9PSAnbm9uZSc7XG4gICAgcmV0dXJuIHRoaXMuc3R5bGUoJ2Rpc3BsYXknLCBpc0hpZGRlbiA/ICdpbmhlcml0JyA6ICdub25lJyk7XG59XG5cbmQzLnNlbGVjdGlvbi5wcm90b3R5cGUuYWZ0ZXIgPSBmdW5jdGlvbiAodGFnTmFtZSkge1xuICAgIHZhciBlbGVtZW50cyA9IFtdO1xuXG4gICAgdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZ05hbWUpO1xuICAgICAgICB0aGlzLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGVsZW1lbnQsIHRoaXMubmV4dFNpYmxpbmcpO1xuICAgICAgICBlbGVtZW50cy5wdXNoKGVsZW1lbnQpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGQzLnNlbGVjdEFsbChlbGVtZW50cyk7XG59XG5cbmQzLnNlbGVjdGlvbi5wcm90b3R5cGUuYmVmb3JlID0gZnVuY3Rpb24gKHRhZ05hbWUpIHtcbiAgICB2YXIgZWxlbWVudHMgPSBbXTtcblxuICAgIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWdOYW1lKTtcbiAgICAgICAgdGhpcy5wYXJlbnROb2RlLmluc2VydEJlZm9yZShlbGVtZW50LCB0aGlzKTtcbiAgICAgICAgZWxlbWVudHMucHVzaChlbGVtZW50KTtcbiAgICB9KTtcblxuICAgIHJldHVybiBkMy5zZWxlY3RBbGwoZWxlbWVudHMpO1xufSIsImltcG9ydCAqIGFzIGQzIGZyb20gJ2QzJ1xuaW1wb3J0IHsgRDNTZWwgfSBmcm9tICcuLi91dGlsL3hkMydcbmltcG9ydCAqIGFzIFIgZnJvbSAncmFtZGEnXG5pbXBvcnQgeyBsZWdlbmRDb2xvciB9IGZyb20gJ2QzLXN2Zy1sZWdlbmQnXG5pbXBvcnQgeyBWZWN0b3IyRCB9IGZyb20gJy4uL3V0aWwvdHlwZXMnXG5pbXBvcnQgeyBTVkdPcHRpb25zLCBTVkdWaXNDb21wb25lbnQgfSBmcm9tICcuLi91dGlsL1NWR1Zpc0NvbXBvbmVudCdcbmltcG9ydCB7IFNpbXBsZUV2ZW50SGFuZGxlciB9IGZyb20gJy4uL3V0aWwvU2ltcGxlRXZlbnRIYW5kbGVyJztcbmltcG9ydCB7IFNWRyB9IGZyb20gJy4uL3V0aWwvU1ZHcGx1cydcbmltcG9ydCB7IGdldENvbnRvdXJWYWx1ZXMgfSBmcm9tICcuLi9wbG90dGluZydcbmltcG9ydCB7IFVwZGF0ZXIsIEJsb2NrVXBkYXRlciB9IGZyb20gJy4uL1VwZGF0ZXInXG5pbXBvcnQgeyBpbnRlcnZhbCwgZnJvbUV2ZW50IH0gZnJvbSAncnhqcydcbmltcG9ydCB7IG1hcCwgdGFwLCB0YWtlLCBzdGFydFdpdGgsIHNjYW4sIHN3aXRjaE1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJ1xuXG50eXBlIFQgPSBudW1iZXJbXVxuXG5pbnRlcmZhY2UgR3JhcGhPcHRpb25zIGV4dGVuZHMgU1ZHT3B0aW9ucyB7XG4gICAgeHJhbmdlOiBbbnVtYmVyLCBudW1iZXJdXG4gICAgeXJhbmdlOiBbbnVtYmVyLCBudW1iZXJdXG4gICAgbjogbnVtYmVyICAgICAgICAgICAgICAgICAgIC8vIE51bWJlciBvZiBtZXNoZ3JpZCBwb2ludHMgYWxvbmcgdGhlIHggYXhpc1xuICAgIG06IG51bWJlciAgICAgICAgICAgICAgICAgICAvLyBOdW1iZXIgb2YgbWVzaGdyaWQgcG9pbnRzIGFsb25nIHRoZSB5IGF4aXNcbiAgICBwYWQ6IG51bWJlciAgICAgICAgICAgICAgICAgLy8gQW5ub3RhdGlvbnMgdGhhdCBoYXBwZW4gaW4gdGhlIG1hcmdpbiBtdXN0IHRha2UgcGxhY2UgYHBhZGAgZGlzdGFuY2UgZnJvbSB0aGUgbWFpbiBncmFwaFxuICAgIGNpcmNsZUV2ZXJ5OiBudW1iZXJcbn1cblxuaW50ZXJmYWNlIEdyYXBoU2NhbGVzIHtcbiAgICB4PzogZDMuU2NhbGVMaW5lYXI8bnVtYmVyLCBudW1iZXI+LFxuICAgIHk/OiBkMy5TY2FsZUxpbmVhcjxudW1iZXIsIG51bWJlcj4sXG4gICAgY29sb3I/OiBkMy5TY2FsZUxpbmVhcjxudW1iZXIsIHN0cmluZz4sXG4gICAgY3VydmU/OiBkMy5DdXJ2ZUNhdG11bGxSb21GYWN0b3J5LFxuICAgIGNvbnRvdXJzPzogZDMuQ29udG91cnMsXG4gICAgdGhyZXNob2xkcz86IG51bWJlcltdXG59XG5cbmludGVyZmFjZSBHcmFwaFNlbHMge1xuICAgIHhheGlzPzogRDNTZWxcbiAgICB5YXhpcz86IEQzU2VsXG4gICAgbGVnZW5kPzogRDNTZWxcbiAgICB0aXA/OiBEM1NlbFxuICAgIHhsYWJlbD86IEQzU2VsXG4gICAgeWxhYmVsPzogRDNTZWxcbiAgICBjaXJjbGU/OiBEM1NlbFxuICAgIGFycm93cz86IEQzU2VsW11cbn1cblxuZXhwb3J0IGNsYXNzIENvbnRvdXJQbG90IGV4dGVuZHMgU1ZHVmlzQ29tcG9uZW50PFQ+IHtcbiAgICBjc3NuYW1lID0gXCJzaW1wbGUtZ3JhcGhcIlxuXG4gICAgX2RhdGE6IFRcblxuICAgIG9wdGlvbnM6IEdyYXBoT3B0aW9ucyA9IHtcbiAgICAgICAgbWF4V2lkdGg6IDQ1MCxcbiAgICAgICAgbWF4SGVpZ2h0OiA1MDAsXG4gICAgICAgIG1hcmdpbjogeyB0b3A6IDUwLCByaWdodDogNzUsIGJvdHRvbTogMTI1LCBsZWZ0OiA1MCB9LFxuICAgICAgICBwYWQ6IDMwLFxuICAgICAgICB4cmFuZ2U6IFswLCAxLjZdLFxuICAgICAgICB5cmFuZ2U6IFswLCAxLjZdLFxuICAgICAgICBuOiA1MDAsXG4gICAgICAgIG06IDUwMCxcbiAgICAgICAgY2lyY2xlRXZlcnk6IDQsXG4gICAgfSAvLyAjc3RhdGVcblxuICAgIHNjYWxlczogR3JhcGhTY2FsZXMgPSB7fVxuICAgIHNlbHM6IEdyYXBoU2VscyA9IHt9XG5cblxuICAgIC8vIE90aGVyXG4gICAgX2N1cnIgPSB7XG4gICAgICAgIGN1cnJMb2M6IHtcbiAgICAgICAgICAgIHg6IDAuMSxcbiAgICAgICAgICAgIHk6IDAuMlxuICAgICAgICB9LFxuICAgICAgICBzdGVwOiAwXG4gICAgfVxuICAgIHRpY2tlclxuICAgIHVwZGF0ZXI6IFVwZGF0ZXJcblxuICAgIC8vIFNwZWNpZnkgdGhlIGdyaWQgZm9yIHRoZSBjb250b3Vyc1xuICAgIGlkZWFsOiBudW1iZXIgPSAxIC8vICNzdGF0ZVxuXG4gICAgY29uc3RydWN0b3IoZDNwYXJlbnQ6IEQzU2VsLCBldmVudEhhbmRsZXI/OiBTaW1wbGVFdmVudEhhbmRsZXIsIG9wdGlvbnMgPSB7fSkge1xuICAgICAgICBzdXBlcihkM3BhcmVudCwgZXZlbnRIYW5kbGVyLCBvcHRpb25zKVxuICAgICAgICBzdXBlci5pbml0U1ZHKHRoaXMub3B0aW9ucylcbiAgICAgICAgdGhpcy5iYXNlLmNsYXNzZWQodGhpcy5jc3NuYW1lLCB0cnVlKVxuICAgICAgICB0aGlzLnVwZGF0ZXIgPSBuZXcgVXBkYXRlcigpXG4gICAgICAgIHRoaXMuaW5pdFBsb3QoKVxuICAgIH1cblxuICAgIHNldFVwZGF0ZXIobmFtZTogJ2Jsb2NrJyB8ICdmdWxsJykge1xuICAgICAgICBjb25zdCBhcmdzID0gW3RoaXMucSgpLCB0aGlzLmV0YSgpXVxuXG4gICAgICAgIGlmIChuYW1lID09ICdibG9jaycpIHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlciA9IG5ldyBCbG9ja1VwZGF0ZXIodGhpcy5xKCksIHRoaXMuZXRhKCkpXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAobmFtZSA9PSAnZnVsbCcpIHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlciA9IG5ldyBVcGRhdGVyKHRoaXMucSgpLCB0aGlzLmV0YSgpKVxuICAgICAgICB9XG5cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlBsZWFzZSBlbnRlciBhIHZhbGlkIGlucHV0IGFzIHVwZGF0ZXJcIik7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy51cGRhdGVRdWl2ZXJzKClcbiAgICB9XG5cbiAgICAvLyBwbG90TWluaW11bSgpIHtcbiAgICAvLyAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgLy8gICAgIGNvbnN0IG9wID0gdGhpcy5vcHRpb25zO1xuICAgIC8vICAgICBjb25zdCBzY2FsZXMgPSB0aGlzLnNjYWxlcztcblxuICAgIC8vICAgICBjb25zdCBtYWtlWCA9IChueDogbnVtYmVyKSA9PiBSLnJhbmdlKDAsIG54KS5tYXAoZDMuc2NhbGVMaW5lYXIoKS5kb21haW4oWzAsIG54XSkucmFuZ2UoWzAuMDAwMDEsIG9wLnhyYW5nZVsxXV0pKVxuICAgIC8vICAgICBjb25zdCB5RnVuYyA9IHggPT4gMSAvIHg7XG4gICAgLy8gICAgIGNvbnN0IHh2YWxzID0gbWFrZVgoMTAwKVxuICAgIC8vICAgICBjb25zdCB5dmFscyA9IHh2YWxzLm1hcCh5RnVuYykvLy5tYXAoeSA9PiBzY2FsZXMueSh5KSlcblxuICAgIC8vICAgICBjb25zdCBkYXRhID0gUi56aXAoeHZhbHMubWFwKHNjYWxlcy54KSwgeXZhbHMubWFwKHNjYWxlcy55KSlcbiAgICAvLyAgICAgY29uc3QgbGluZUdlbiA9IGQzLmxpbmUoKVxuICAgIC8vICAgICBjb25zdCBwYXRoRGF0YSA9IGxpbmVHZW4oZGF0YSlcblxuICAgIC8vICAgICBjb25zdCBtaW5pbXVtR3JvdXAgPSB0aGlzLmJhc2UuYXBwZW5kKCdnJykuYXR0cignaWQnLCAnbWluaW11bS1ncm91cCcpXG5cbiAgICAvLyAgICAgY29uc29sZS5sb2coXCJQYXRoIGRhdGE6IFwiLCBwYXRoRGF0YSk7XG5cbiAgICAvLyAgICAgbWluaW11bUdyb3VwLmFwcGVuZCgncGF0aCcpXG4gICAgLy8gICAgICAgICAuYXR0cignZCcsIGxpbmVHZW4oZGF0YSkpXG4gICAgLy8gICAgICAgICAuY2xhc3NlZCgnbWluaW11bScsIHRydWUpXG4gICAgLy8gICAgICAgICAuc3R5bGUoJ3N0cm9rZS13aWR0aCcsIDIuNSlcbiAgICAvLyAgICAgICAgIC5zdHlsZSgnc3Ryb2tlJywgJ2JsdWUnKVxuICAgIC8vICAgICAgICAgLnN0eWxlKCdmaWxsJywgbnVsbClcbiAgICAvLyB9XG5cbiAgICBwbG90Q29udG91cnMoKSB7XG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuICAgICAgICBjb25zdCBvcCA9IHRoaXMub3B0aW9ucztcbiAgICAgICAgY29uc3Qgc2NhbGVzID0gdGhpcy5zY2FsZXM7XG5cbiAgICAgICAgY29uc3QgY29udG91ckZ1bmMgPSAoeCwgeSkgPT4gdGhpcy51cGRhdGVyLmFic0Vycih7IHg6IHgsIHk6IHkgfSlcbiAgICAgICAgY29uc3QgdmFscyA9IGdldENvbnRvdXJWYWx1ZXMob3Aubiwgb3AubSwgb3AueHJhbmdlLCBvcC55cmFuZ2UsIGNvbnRvdXJGdW5jKVxuICAgICAgICBsZXQgdGhyZXNob2xkcyA9IGQzLnJhbmdlKGQzLm1pbih2YWxzKSwgZDMubWF4KHZhbHMpLCAwLjA4KTtcbiAgICAgICAgLy8gY29uc3QgY29udG91ckZ1bmMgPSAoeCwgeSkgPT4gdGhpcy51cGRhdGVyLkVycih7IHg6IHgsIHk6IHkgfSlcbiAgICAgICAgLy8gY29uc3QgdmFscyA9IGdldENvbnRvdXJWYWx1ZXMob3Aubiwgb3AubSwgb3AueHJhbmdlLCBvcC55cmFuZ2UsIGNvbnRvdXJGdW5jKVxuICAgICAgICAvLyBsZXQgdGhyZXNob2xkcyA9IGQzLnJhbmdlKGQzLm1pbih2YWxzKSwgLWQzLm1pbih2YWxzKSwgMC4wOCk7XG4vLyBcbiAgICAgICAgLy8gQmVjYXVzZSB0aGUgbWluaW11bSB2YWx1ZSBpcyBub3QgYSBjb250b3VyIGJ1dCBhIHZhbHVlLCB3ZSBuZWVkIHRvIGRvIHdoYXQgd2UgY2FuIHRvIGFwcHJvYWNoIHRoZSBtaW4uXG4gICAgICAgIGNvbnN0IHdlaWdodGVkID0gMC45NTtcbiAgICAgICAgY29uc3QgbmV3TWluID0gKHdlaWdodGVkICogdGhyZXNob2xkc1swXSArICgxIC0gd2VpZ2h0ZWQpICogdGhyZXNob2xkc1sxXSkgLyAyXG4gICAgICAgIC8vIGNvbnN0IG5ld01pbiA9IDA7XG4gICAgICAgIHRocmVzaG9sZHMgPSBSLmluc2VydCgxLCBuZXdNaW4sIHRocmVzaG9sZHMpXG5cblxuICAgICAgICAvLyBzY2FsZXMuY29sb3IgPSBkMy5zY2FsZUxpbmVhcigpLmRvbWFpbihbLTMsM10pLnJhbmdlKFswLjQsIDAuNl0pLmludGVycG9sYXRlKCgpID0+IGQzLmludGVycG9sYXRlUmRZbEJ1KTtcbiAgICAgICAgc2NhbGVzLmNvbG9yID0gZDMuc2NhbGVMaW5lYXIoKS5kb21haW4oWy0xLDAuMV0pLnJhbmdlKFswLCAxXSkuaW50ZXJwb2xhdGUoKCkgPT4gZDMuaW50ZXJwb2xhdGVCbHVlcyk7XG4gICAgICAgIC8vIHNjYWxlcy5jb2xvciA9IGQzLnNjYWxlU2VxdWVudGlhbExvZyhkMy5leHRlbnQodGhyZXNob2xkcyksIGQzLmludGVycG9sYXRlTWFnbWEpXG5cbiAgICAgICAgc2NhbGVzLmNvbnRvdXJzLnRocmVzaG9sZHModGhyZXNob2xkcylcblxuICAgICAgICBjb25zdCBjb250b3VyVmFscyA9IHNjYWxlcy5jb250b3Vycyh2YWxzKVxuICAgICAgICBjb25zdCBjb250b3VyR3JvdXAgPSB0aGlzLmJhc2UuYXBwZW5kKCdnJykuYXR0cignaWQnLCAnY29udG91ci1ncm91cCcpXG4gICAgICAgIGNvbnN0IGNvbnRvdXJzID0gY29udG91ckdyb3VwLnNlbGVjdEFsbChcInBhdGguY29udG91clwiKVxuICAgICAgICAgICAgLmRhdGEoY29udG91clZhbHMpXG5cbiAgICAgICAgY29udG91cnMuam9pbihcInBhdGhcIilcbiAgICAgICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJjb250b3VyXCIpXG4gICAgICAgICAgICAuYXR0cihcImRcIiwgZDMuZ2VvUGF0aChkMy5nZW9JZGVudGl0eSgpLnNjYWxlKG9wLndpZHRoIC8gb3AubikpKVxuICAgICAgICAgICAgLmF0dHIoXCJmaWxsXCIsIGQgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBzY2FsZXMuY29sb3IoLU1hdGguc3FydChkLnZhbHVlKSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2xhc3NlZCgnbWFpbi1maXQnLCBkID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZC52YWx1ZSA9PSBuZXdNaW47XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNsYXNzZWQoJ25vdC1maXQnLCBkID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZC52YWx1ZSAhPSBuZXdNaW47XG4gICAgICAgICAgICB9KVxuXG4gICAgICAgIC8vIGxlZ2VuZCh7Y29sb3IsIHRpdGxlOiBcIlZhbHVlXCIsIHRpY2tGb3JtYXQ6IFwiLFwifSlcbiAgICB9XG5cbiAgICBhZGRTdGVwKHY6IFZlY3RvcjJELCBwcmV2OiBWZWN0b3IyRCA9IG51bGwpIHtcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgICAgIGNvbnN0IG9wID0gdGhpcy5vcHRpb25zO1xuICAgICAgICBjb25zdCBzY2FsZXMgPSB0aGlzLnNjYWxlcztcbiAgICAgICAgY29uc3Qgc2VscyA9IHRoaXMuc2VscztcblxuICAgICAgICBjb25zdCBjeCA9IHNjYWxlcy54KHYueClcbiAgICAgICAgY29uc3QgY3kgPSBzY2FsZXMueSh2LnkpXG5cbiAgICAgICAgLy8gQ2hlY2sgYm9yZGVyIGNvbmRpdGlvbnNcbiAgICAgICAgaWYgKHYueCA+PSBvcC54cmFuZ2VbMV0gfHwgdi55ID49IG9wLnlyYW5nZVsxXSkge1xuICAgICAgICAgICAgdGhpcy50aWNrZXIudW5zdWJzY3JpYmUoKVxuICAgICAgICAgICAgcmV0dXJuIHZcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwcmV2ICE9IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuYmFzZS5hcHBlbmQoJ2xpbmUnKVxuICAgICAgICAgICAgICAgIC5hdHRyKCd4MScsIHNjYWxlcy54KHByZXYueCkpXG4gICAgICAgICAgICAgICAgLmF0dHIoJ3kxJywgc2NhbGVzLnkocHJldi55KSlcbiAgICAgICAgICAgICAgICAuYXR0cigneDInLCBjeClcbiAgICAgICAgICAgICAgICAuYXR0cigneTInLCBjeSlcbiAgICAgICAgICAgICAgICAuY2xhc3NlZCgnZGVzY2VuZGluZy1saW5lJywgdHJ1ZSlcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICgoKHRoaXMuX2N1cnIuc3RlcCAlIG9wLmNpcmNsZUV2ZXJ5KSA9PSAwKSB8fCAocHJldiA9PSBudWxsKSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJDdXJyIHN0ZXA6IFwiLCB0aGlzLl9jdXJyLnN0ZXApO1xuICAgICAgICAgICAgc2Vscy5jaXJjbGUgPSB0aGlzLmJhc2UuYXBwZW5kKCdjaXJjbGUnKVxuICAgICAgICAgICAgICAgIC5hdHRyKCdjeCcsIGN4KVxuICAgICAgICAgICAgICAgIC5hdHRyKCdjeScsIGN5KVxuICAgICAgICAgICAgICAgIC5hdHRyKCdyJywgMilcbiAgICAgICAgICAgICAgICAuY2xhc3NlZCgnZGVzY2VuZGluZy1wb2ludCcsIHRydWUpXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9jdXJyLnN0ZXAgKz0gMVxuXG4gICAgICAgIHJldHVybiB2O1xuICAgIH1cblxuICAgIGNsZWFyQ2lyY2xlcygpIHtcbiAgICAgICAgZDMuc2VsZWN0QWxsKCcuZGVzY2VuZGluZy1wb2ludCcpLnJlbW92ZSgpXG4gICAgICAgIGQzLnNlbGVjdEFsbCgnLmRlc2NlbmRpbmctbGluZScpLnJlbW92ZSgpXG4gICAgfVxuXG4gICAgY2xlYXJRdWl2ZXJzKCkge1xuICAgICAgICBkMy5zZWxlY3RBbGwoJy5xdWl2ZXInKS5yZW1vdmUoKVxuICAgICAgICB0aGlzLnNlbHMuYXJyb3dzID0gW11cbiAgICB9XG5cbiAgICBwbG90RGVzY2VudCgpIHtcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgICAgIGxldCBwcmV2VmFsID0gbnVsbDtcblxuICAgICAgICBjb25zdCBzdWJPYmogPSB7XG4gICAgICAgICAgICBuZXh0OiAodmFsKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5hZGRTdGVwKHZhbCwgcHJldlZhbClcbiAgICAgICAgICAgICAgICBwcmV2VmFsID0gdmFsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXJyOiAoZXJyKSA9PiBjb25zb2xlLmxvZyhlcnIpLFxuICAgICAgICAgICAgY29tcGxldGU6ICgpID0+IGNvbnNvbGUubG9nKFwiQ09NUExFVEVcIilcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHByZXAgPSAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmFkZFN0ZXAodGhpcy5jdXJyKCkpXG4gICAgICAgICAgICBwcmV2VmFsID0gdGhpcy5jdXJyKClcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMudGlja2VyID0gaW50ZXJ2YWwoMTApLnBpcGUoXG4gICAgICAgICAgICBzdGFydFdpdGgocHJlcCgpKSxcbiAgICAgICAgICAgIHNjYW4odiA9PiBzZWxmLnVwZGF0ZXIubmV4dCh2KSwgc2VsZi5jdXJyKCkpLFxuICAgICAgICAgICAgdGFrZSgxMDAwKVxuICAgICAgICApLnN1YnNjcmliZShzdWJPYmopXG4gICAgfVxuXG4gICAgaW50b1Zpcyh2OiBWZWN0b3IyRCkge1xuICAgICAgICByZXR1cm4geyB4OiB0aGlzLnNjYWxlcy54KHYueCksIHk6IHRoaXMuc2NhbGVzLnkodi55KSB9XG4gICAgfVxuXG4gICAgaW50b01hdGgodjogVmVjdG9yMkQpIHtcbiAgICAgICAgcmV0dXJuIHsgeDogdGhpcy5zY2FsZXMueC5pbnZlcnQodi54KSwgeTogdGhpcy5zY2FsZXMueS5pbnZlcnQodi55KSB9XG4gICAgfVxuXG4gICAgdXBkYXRlUXVpdmVycygpIHtcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgICAgIGNvbnN0IHNlbHMgPSB0aGlzLnNlbHM7XG4gICAgICAgIGNvbnN0IHNjYWxlcyA9IHRoaXMuc2NhbGVzO1xuXG4gICAgICAgIC8vIE1vZGlmeSBhcnJvd3MgaW5wbGFjZVxuICAgICAgICBzZWxzLmFycm93cy5mb3JFYWNoKGFycm93ID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHB0OiBWZWN0b3IyRCA9IHRoaXMuaW50b01hdGgoe1xuICAgICAgICAgICAgICAgIHg6ICthcnJvdy5hdHRyKCd4MScpLFxuICAgICAgICAgICAgICAgIHk6ICthcnJvdy5hdHRyKCd5MScpXG4gICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICBjb25zdCBwdDIgPSBzZWxmLnVwZGF0ZXIubmV4dExyKHB0KVxuICAgICAgICAgICAgYXJyb3cuYXR0cigneDInLCBzY2FsZXMueChwdDIueCkpXG4gICAgICAgICAgICAgICAgLmF0dHIoJ3kyJywgc2NhbGVzLnkocHQyLnkpKVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGNyZWF0ZVF1aXZlcnMoKSB7XG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuICAgICAgICBjb25zdCBvcCA9IHRoaXMub3B0aW9ucztcbiAgICAgICAgY29uc3Qgc2NhbGVzID0gdGhpcy5zY2FsZXM7XG4gICAgICAgIGNvbnN0IHNlbHMgPSB0aGlzLnNlbHM7XG5cbiAgICAgICAgY29uc3QgbnggPSAxMSwgbnkgPSAxMTtcbiAgICAgICAgY29uc3QgcG9pbnRzID0gU1ZHLm1lc2hncmlkKG54LCBueSwgb3AueHJhbmdlLCBvcC55cmFuZ2UpXG4gICAgICAgIGNvbnN0IGNvbG9yID0gXCJibHVlXCI7IFxuICAgICAgICBjb25zdCB3aWR0aCA9IDEuMjU7IFxuXG4gICAgICAgIGNvbnN0IHF1aXZlckdyb3VwID0gdGhpcy5iYXNlLmFwcGVuZCgnZycpLmF0dHIoJ2lkJywgJ3F1aXZlci1ncm91cCcpIC8vIGluaXQgc2hvdWxkIGhhdmUgdGhlc2UgZ3JvdXBzIGFscmVhZHkgc2VsZWN0ZWRcbiAgICAgICAgdGhpcy5jbGVhclF1aXZlcnMoKVxuXG4gICAgICAgIHNlbHMuYXJyb3dzID0gcG9pbnRzLm1hcChwdCA9PiB7XG4gICAgICAgICAgICBjb25zdCBwdDIgPSBzZWxmLnVwZGF0ZXIubmV4dExyKHB0KVxuICAgICAgICAgICAgY29uc3QgYXJyb3cgPSBTVkcuaW5zZXJ0QXJyb3cocXVpdmVyR3JvdXAsIHNjYWxlcy54KHB0LngpLCBzY2FsZXMueShwdC55KSwgc2NhbGVzLngocHQyLngpLCBzY2FsZXMueShwdDIueSksIGNvbG9yLCB3aWR0aClcbiAgICAgICAgICAgIGFycm93LmNsYXNzZWQoJ3F1aXZlcicsIHRydWUpXG4gICAgICAgICAgICByZXR1cm4gYXJyb3dcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBpbml0UGxvdCgpIHtcbiAgICAgICAgLy8gSW5pdGlhbGl6ZSBwbG90c1xuICAgICAgICB0aGlzLnBsb3RDb250b3VycygpXG4gICAgICAgIHRoaXMuY3JlYXRlUXVpdmVycygpXG4gICAgfVxuXG4gICAgaW5pdCgpIHtcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgICAgIGNvbnN0IG9wID0gdGhpcy5vcHRpb25zO1xuICAgICAgICBjb25zdCBzY2FsZXMgPSB0aGlzLnNjYWxlcztcbiAgICAgICAgY29uc3Qgc2VscyA9IHRoaXMuc2VscztcblxuICAgICAgICAvLyBBZGQgZGVmaW5pdGlvbnNcbiAgICAgICAgU1ZHLmFkZEFycm93cyh0aGlzLnN2ZylcblxuICAgICAgICAvLyBDcmVhdGUgc2NhbGVzXG4gICAgICAgIHNjYWxlcy5jb250b3VycyA9IGQzLmNvbnRvdXJzKCkuc2l6ZShbb3Aubiwgb3AubV0pXG4gICAgICAgIHNjYWxlcy5jdXJ2ZSA9IGQzLmN1cnZlQ2F0bXVsbFJvbS5hbHBoYSgwLjUpXG4gICAgICAgIHNjYWxlcy54ID0gZDMuc2NhbGVMaW5lYXIoKS5kb21haW4ob3AueHJhbmdlKS5yYW5nZShbMCwgb3Aud2lkdGhdKVxuICAgICAgICBzY2FsZXMueSA9IGQzLnNjYWxlTGluZWFyKCkuZG9tYWluKG9wLnlyYW5nZSkucmFuZ2UoW29wLmhlaWdodCwgMF0pXG5cbiAgICAgICAgLy8gQWRkIEF4ZXMgYW5kIGxhYmVsc1xuICAgICAgICBzZWxzLnhheGlzID0gdGhpcy5iYXNlLmFwcGVuZChcImdcIilcbiAgICAgICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJheGlzIGF4aXMtLXhcIilcbiAgICAgICAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIFNWRy50cmFuc2xhdGUoMCwgb3AuaGVpZ2h0KSlcbiAgICAgICAgICAgIC5jYWxsKGQzLmF4aXNCb3R0b20oc2NhbGVzLngpLnRpY2tzKDMsIFwic1wiKSk7XG5cbiAgICAgICAgc2Vscy55YXhpcyA9IHRoaXMuYmFzZS5hcHBlbmQoXCJnXCIpXG4gICAgICAgICAgICAuYXR0cihcImNsYXNzXCIsIFwiYXhpcyBheGlzLS15XCIpXG4gICAgICAgICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBTVkcudHJhbnNsYXRlKDAsIDApKVxuICAgICAgICAgICAgLmNhbGwoZDMuYXhpc0xlZnQoc2NhbGVzLnkpLnRpY2tzKDMsIFwic1wiKSk7XG5cbiAgICAgICAgc2Vscy54bGFiZWwgPSB0aGlzLmJhc2UuYXBwZW5kKFwidGV4dFwiKVxuICAgICAgICAgICAgLnRleHQoXCJ3MFwiKVxuICAgICAgICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcInRpdGxlc1wiKVxuICAgICAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgU1ZHLnRyYW5zbGF0ZShvcC53aWR0aCAvIDIsIG9wLmhlaWdodCArIG9wLnBhZCkpXG5cbiAgICAgICAgc2Vscy55bGFiZWwgPSB0aGlzLmJhc2UuYXBwZW5kKFwidGV4dFwiKVxuICAgICAgICAgICAgLnRleHQoXCJ3MVwiKVxuICAgICAgICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcInRpdGxlc1wiKVxuICAgICAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgU1ZHLnRyYW5zbGF0ZSgtb3AucGFkLCBvcC5oZWlnaHQgLyAyKSArIFNWRy5yb3RhdGUoLTkwKSlcblxuICAgICAgICAvLyBDcmVhdGUgY2xpY2sgYmVoYXZpb3JcbiAgICAgICAgdGhpcy5iYXNlLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmIChzZWxmLnRpY2tlciAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBzZWxmLnRpY2tlci51bnN1YnNjcmliZSgpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBjb29yZHMgPSBkMy5tb3VzZSh0aGlzKTtcbiAgICAgICAgICAgIHNlbGYuX2N1cnIuc3RlcCA9IDBcbiAgICAgICAgICAgIHNlbGYuY3Vycih7IHg6IHNjYWxlcy54LmludmVydChjb29yZHNbMF0pLCB5OiBzY2FsZXMueS5pbnZlcnQoY29vcmRzWzFdKSB9KVxuXG4gICAgICAgICAgICAvLyBpZiAoc2VsZi5jdXJyKCkueCA+IDAgJiYgc2VsZi5jdXJyKCkueSA+IDAgJiYgc2VsZi5jdXJyKCkueCA8IChvcC54cmFuZ2VbMV0gLSAwLjEpICYmIHNlbGYuY3VycigpLnkgPCAob3AueXJhbmdlWzFdIC0gMC4xKSkge1xuICAgICAgICAgICAgaWYgKHNlbGYuY3VycigpLnggPiAwICYmIHNlbGYuY3VycigpLnkgPiAwKSB7XG4gICAgICAgICAgICAgICAgc2VsZi5hZGRTdGVwKHNlbGYuY3VycigpKVxuICAgICAgICAgICAgICAgIHNlbGYuY2xlYXJDaXJjbGVzKCk7XG4gICAgICAgICAgICAgICAgc2VsZi5wbG90RGVzY2VudCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGN1cnIoKTogVmVjdG9yMkRcbiAgICBjdXJyKHZhbDogVmVjdG9yMkQpOiB0aGlzXG4gICAgY3Vycih2YWw/KSB7XG4gICAgICAgIGlmICh2YWwgPT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2N1cnIuY3VyckxvY1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fY3Vyci5jdXJyTG9jID0gdmFsO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBkYXRhKCk6IG51bWJlcltdXG4gICAgZGF0YSh2YWw6IG51bWJlcltdKTogdGhpc1xuICAgIGRhdGEodmFsPykge1xuICAgICAgICBpZiAodmFsID09IG51bGwpIHJldHVybiB0aGlzLl9kYXRhXG4gICAgICAgIHRoaXMuX2RhdGEgPSB2YWxcbiAgICAgICAgcmV0dXJuIHRoaXNcbiAgICB9XG5cbiAgICBxKCk6IG51bWJlclxuICAgIHEodmFsOiBudW1iZXIpOiB0aGlzXG4gICAgcSh2YWw/KSB7XG4gICAgICAgIGlmICh2YWwgPT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMudXBkYXRlci5xO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy51cGRhdGVyLnEgPSB2YWxcbiAgICAgICAgdGhpcy51cGRhdGVRdWl2ZXJzKClcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgZXRhKCk6IG51bWJlclxuICAgIGV0YSh2YWw6IG51bWJlcik6IHRoaXNcbiAgICBldGEodmFsPykge1xuICAgICAgICBpZiAodmFsID09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnVwZGF0ZXIuZXRhO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy51cGRhdGVyLmV0YSA9IHZhbFxuICAgICAgICB0aGlzLnVwZGF0ZVF1aXZlcnMoKVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG59IiwiaW1wb3J0ICogYXMgZDMgZnJvbSAnZDMnXG5pbXBvcnQgeyBNYW51YWxVcGRhdGVyIH0gZnJvbSBcIi4vTWFudWFsVXBkYXRlclwiXG5pbXBvcnQgeyBWZWN0b3IyRCB9IGZyb20gXCIuLi91dGlsL3R5cGVzXCJcbmltcG9ydCAqIGFzIFIgZnJvbSAncmFtZGEnXG5pbXBvcnQgeyBTdWJqZWN0LCBCZWhhdmlvclN1YmplY3QgfSBmcm9tIFwicnhqc1wiXG5cbmV4cG9ydCB0eXBlIEJhbGxIaXN0b3J5ID0ge1xuICAgIGNsYXNzbmFtZTogc3RyaW5nXG4gICAgeDogbnVtYmVyXG4gICAgbG9zczogbnVtYmVyXG59XG5cbmV4cG9ydCBjbGFzcyBHb2xmQmFsbCB7XG4gICAgX3g6IG51bWJlclxuICAgIHVwZGF0ZXI6IE1hbnVhbFVwZGF0ZXJcbiAgICBjbGFzc25hbWU6IHN0cmluZ1xuICAgIHN0cmVhbTogU3ViamVjdDxCYWxsSGlzdG9yeT4gLy8gUHVzaGVzIGhpc3Rvcnkgb2YgeCB2YWx1ZXMgdG8gdGhpc1xuXG4gICAgY29uc3RydWN0b3IodXBkYXRlcjogTWFudWFsVXBkYXRlciwgY2xhc3NuYW1lOiBzdHJpbmcsIHggPSAwKSB7XG4gICAgICAgIHRoaXMudXBkYXRlciA9IHVwZGF0ZXJcbiAgICAgICAgdGhpcy5feCA9IHhcbiAgICAgICAgdGhpcy5jbGFzc25hbWUgPSBjbGFzc25hbWVcbiAgICAgICAgdGhpcy5zdHJlYW0gPSBuZXcgU3ViamVjdCgpXG4gICAgfVxuXG4gICAgZ2V0IHgoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl94XG4gICAgfVxuXG4gICAgc2V0IHgodjogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuX3ggPSB2XG4gICAgfVxuXG4gICAgbmV4dFgoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudXBkYXRlci5uZXh0KHRoaXMuX3gpXG4gICAgfVxuXG4gICAgbmV4dCgpOiBHb2xmQmFsbCB7XG4gICAgICAgIGNvbnN0IG5leHRYID0gdGhpcy5uZXh0WCgpXG4gICAgICAgIHJldHVybiBuZXcgR29sZkJhbGwodGhpcy51cGRhdGVyLCB0aGlzLmNsYXNzbmFtZSwgdGhpcy5uZXh0WCgpKVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFVzZSB0aGUgdXBkYXRlciB0byB0YWtlIHRoZSBuZXh0IHN0ZXBcbiAgICAgKiBcbiAgICAgKiBAcGFyYW0gZm9yY2VYIEZvcmNlIHRoZSBuZXh0WCB0byBiZSBvZiB0aGlzIHZhbHVlXG4gICAgICovXG4gICAgc3RlcF8oZm9yY2VYOm51bWJlcnxudWxsPW51bGwpOiB0aGlzIHtcbiAgICAgICAgaWYgKGZvcmNlWCAhPSBudWxsKSB0aGlzLnggPSBmb3JjZVhcbiAgICAgICAgZWxzZSB0aGlzLnggPSB0aGlzLm5leHRYKClcblxuICAgICAgICB0aGlzLnN0cmVhbS5uZXh0KHtcbiAgICAgICAgICAgIGNsYXNzbmFtZTogdGhpcy5jbGFzc25hbWUsXG4gICAgICAgICAgICB4OiB0aGlzLngsXG4gICAgICAgICAgICBsb3NzOiB0aGlzLnVwZGF0ZXIubG9zcyh0aGlzLngpXG4gICAgICAgIH0pXG4gICAgICAgIHJldHVybiB0aGlzXG4gICAgfVxuXG4gICAgdG9WZWMoZjogKHg6IG51bWJlcikgPT4gbnVtYmVyKTogVmVjdG9yMkQge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgeDogdGhpcy5feCxcbiAgICAgICAgICAgIHk6IGYodGhpcy5feClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHEoKTogbnVtYmVyXG4gICAgcSh2YWw6IG51bWJlcik6IHRoaXNcbiAgICBxKHZhbD8pIHtcbiAgICAgICAgaWYgKHZhbCA9PSBudWxsKSByZXR1cm4gdGhpcy51cGRhdGVyLnFcbiAgICAgICAgdGhpcy51cGRhdGVyLnEgPSB2YWxcbiAgICAgICAgcmV0dXJuIHRoaXNcbiAgICB9XG5cbiAgICBldGEoKTogbnVtYmVyXG4gICAgZXRhKHZhbDogbnVtYmVyKTogdGhpc1xuICAgIGV0YSh2YWw/KSB7XG4gICAgICAgIGlmICh2YWwgPT0gbnVsbCkgcmV0dXJuIHRoaXMudXBkYXRlci5ldGFcbiAgICAgICAgdGhpcy51cGRhdGVyLmV0YSA9IHZhbFxuICAgICAgICByZXR1cm4gdGhpc1xuICAgIH1cbn0iLCJpbXBvcnQgKiBhcyBkMyBmcm9tICdkMydcbmltcG9ydCB7IEQzU2VsLCBsaW5zcGFjZSB9IGZyb20gJy4uL3V0aWwveGQzJ1xuaW1wb3J0ICogYXMgUiBmcm9tICdyYW1kYSdcbmltcG9ydCB7IFZlY3RvcjJEIH0gZnJvbSAnLi4vdXRpbC90eXBlcydcbmltcG9ydCB7IFNWR09wdGlvbnMsIFNWR1Zpc0NvbXBvbmVudCB9IGZyb20gJy4uL3V0aWwvU1ZHVmlzQ29tcG9uZW50J1xuaW1wb3J0IHsgU2ltcGxlRXZlbnRIYW5kbGVyIH0gZnJvbSAnLi4vdXRpbC9TaW1wbGVFdmVudEhhbmRsZXInO1xuaW1wb3J0IHsgU1ZHIH0gZnJvbSAnLi4vdXRpbC9TVkdwbHVzJ1xuaW1wb3J0IHsgaW50ZXJ2YWwsIGZyb21FdmVudCB9IGZyb20gJ3J4anMnXG5pbXBvcnQgeyB0YWtlLCBzY2FuIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnXG5pbXBvcnQgeyBNYW51YWxVcGRhdGVyIH0gZnJvbSAnLi9NYW51YWxVcGRhdGVyJ1xuaW1wb3J0IHsgR29sZkJhbGwgfSBmcm9tICcuL0dvbGZCYWxsJ1xuaW1wb3J0IHsgbGFuZHNjYXBlcywgTGFuZHNjYXBlLCBiYXNlTG9zcywgZ2V0UGxvdEZ1bmMgfSBmcm9tIFwiLi4vR29sZkxhbmRzY2FwZXNcIjtcblxuXG50eXBlIFQgPSBHb2xmQmFsbFtdXG5cbmludGVyZmFjZSBHcmFwaE9wdGlvbnMgZXh0ZW5kcyBTVkdPcHRpb25zIHtcbiAgICBwYWQ6IG51bWJlclxuICAgIG1heEl0ZXI6IG51bWJlciAvLyBIb3cgbWFueSBpdGVyYXRpb25zIHRvIHRha2U/XG4gICAgbGFuZHNjYXBlOiBMYW5kc2NhcGVcbn1cblxuaW50ZXJmYWNlIFNjYWxlWFkge1xuICAgIHg6IGQzLlNjYWxlTGluZWFyPG51bWJlcixudW1iZXI+XG4gICAgeTogZDMuU2NhbGVMaW5lYXI8bnVtYmVyLG51bWJlcj5cbn1cblxuaW50ZXJmYWNlIEdyYXBoU2NhbGVzIHtcbiAgICBiYXNlMm1hdGg/OiBTY2FsZVhZLFxuICAgIGJhc2UycHg/OiBTY2FsZVhZLFxuICAgIG1hdGgycHg/OiBTY2FsZVhZLFxuICAgIGJhc2UybG9zcz86IGQzLlNjYWxlTGluZWFyPG51bWJlciwgbnVtYmVyPixcbiAgICBwYXRocz86IGQzLkxpbmU8bnVtYmVyPltdLFxuICAgIGNvbG9yPzogZDMuU2NhbGVTZXF1ZW50aWFsPG51bWJlcj4sXG59XG5cbmludGVyZmFjZSBHcmFwaFNlbHMge1xuICAgIHhheGlzPzogRDNTZWxcbiAgICB5YXhpcz86IEQzU2VsXG4gICAgeGxhYmVsPzogRDNTZWxcbiAgICBsaW5lPzogRDNTZWxcbiAgICBiYWNrZHJvcD86IEQzU2VsXG4gICAgYmFsbD86IEQzU2VsXG4gICAgbWFzaz86IEQzU2VsXG4gICAgbWFza0xpbmU/OiBEM1NlbFxuICAgIG1hc2tCYWNrZ3JvdW5kPzogRDNTZWxcbiAgICBsaW5lQmFja2dyb3VuZD86IEQzU2VsXG59XG5cbmxldCBDTEVBUkVEID0gMDtcbi8vIC8vIE5vdGUgdGhhdCBwbG90RnVuYyBpcyB0aGUgbG9zcyBmdW5jdGlvbiB3ZSBwbG90IGFuZCBmdW5jIGlzIHRoZSBjb21wb25lbnQgb2YgdGhlIGxvc3MgZnVuY3Rpb24gbmVlZGVkIGZvciB0aGUgdXBkYXRlclxuLy8gLy8gZXhwb3J0IGNvbnN0IGZ1bmMgPSB4ID0+IE1hdGgudGFuaCh4KVxuLy8gLy8gZXhwb3J0IGNvbnN0IGRGdW5jID0geCA9PiBNYXRoLnBvdyhNYXRoLmNvc2goeCksIC0yKVxuLy8gZXhwb3J0IGNvbnN0IGZ1bmMgPSB4ID0+IE1hdGgudGFuaCh4IC0gMTEpIC8gNCArIE1hdGgudGFuaCh4IC0gNikgLyA0ICsgTWF0aC50YW5oKHgpICsgTWF0aC50YW5oKHggKyA2KSAvIDQgKyBNYXRoLnRhbmgoeCArIDExKSAvIDRcbi8vIGV4cG9ydCBjb25zdCBkRnVuYyA9IHggPT4gTWF0aC5wb3coTWF0aC5jb3NoKHggLSAxMSksIC0yKSAvIDQgKyBNYXRoLnBvdyhNYXRoLmNvc2goeCAtIDYpLCAtMikgLyA0ICsgTWF0aC5wb3coTWF0aC5jb3NoKHgpLCAtMikgKyBNYXRoLnBvdyhNYXRoLmNvc2goeCArIDYpLCAtMikgLyA0ICsgTWF0aC5wb3coTWF0aC5jb3NoKHggKyAxMSksIC0yKSAvIDRcbi8vIC8vIGV4cG9ydCBjb25zdCBmdW5jID0geCA9PiBNYXRoLnNpZ24oeCkgKiAoMSAtICgxIC8gKDEgKyBNYXRoLmFicyh4KSkpKVxuLy8gLy8gZXhwb3J0IGNvbnN0IGRGdW5jID0geCA9PiAxIC8gTWF0aC5wb3coMSArIE1hdGguYWJzKHgpLCAyKVxuXG4vLyBleHBvcnQgY29uc3QgcGxvdEZ1bmMgPSB4ID0+IGJhc2VMb3NzKGZ1bmMoeCkpXG5cbmV4cG9ydCBjbGFzcyBHb2xmSG9sZTFEIGV4dGVuZHMgU1ZHVmlzQ29tcG9uZW50PFQ+IHtcbiAgICBjc3NuYW1lID0gXCJnb2xmLWhvbGUtY2hhcnRcIlxuICAgIG1hc2tJZDogc3RyaW5nXG5cbiAgICBfZGF0YTogVFxuXG4gICAgb3B0aW9uczogR3JhcGhPcHRpb25zID0ge1xuICAgICAgICBtYXhXaWR0aDogNDAwLFxuICAgICAgICBtYXhIZWlnaHQ6IDIwMCxcbiAgICAgICAgbWFyZ2luOiB7IHRvcDogNSwgcmlnaHQ6IDEwLCBib3R0b206IDQwLCBsZWZ0OiAxMCB9LFxuICAgICAgICBwYWQ6IDMwLFxuICAgICAgICBtYXhJdGVyOiA2MDAsXG4gICAgICAgIGxhbmRzY2FwZTogbGFuZHNjYXBlcy5ob2xlXG4gICAgfVxuXG4gICAgc2NhbGVzOiBHcmFwaFNjYWxlcyA9IHt9XG5cbiAgICBzZWxzOiBHcmFwaFNlbHMgPSB7fVxuXG4gICAgY29uc3RydWN0b3IoZDNwYXJlbnQ6IEQzU2VsLCBldmVudEhhbmRsZXI/OiBTaW1wbGVFdmVudEhhbmRsZXIsIG9wdGlvbnMgPSB7fSwgSUQgPSAwKSB7XG4gICAgICAgIHN1cGVyKGQzcGFyZW50LCBldmVudEhhbmRsZXIsIG9wdGlvbnMsIElEKVxuICAgICAgICB0aGlzLm1hc2tJZCA9IGBsaW5lLW1hc2stJHt0aGlzLklEfWBcbiAgICAgICAgc3VwZXIuaW5pdFNWRyhvcHRpb25zLCBbXCJiZ1wiXSlcbiAgICAgICAgdGhpcy5iYXNlLmNsYXNzZWQodGhpcy5jc3NuYW1lLCB0cnVlKVxuXG4gICAgICAgIGNvbnN0IHogPSB0aGlzLm9wdGlvbnMubGFuZHNjYXBlXG4gICAgICAgIFxuICAgICAgICAvLyBOZWVkIHRvIGhhdmUgaW5pdGlhbCBkYXRhXG4gICAgICAgIGNvbnN0IGRhdGEgPSBbXG4gICAgICAgICAgICBuZXcgR29sZkJhbGwobmV3IE1hbnVhbFVwZGF0ZXIoei5mLCB6LmRmLCAwLCAwLjkpLCAnZ29sZi1iYWxsLXNnZCcsIDQpLFxuICAgICAgICBdXG5cbiAgICAgICAgdGhpcy5kYXRhKGRhdGEpXG4gICAgICAgIHRoaXMuaW5pdEJhbGxzKClcbiAgICB9XG5cbiAgICBsYW5kc2NhcGUoKTogTGFuZHNjYXBlXG4gICAgbGFuZHNjYXBlKHZhbDogTGFuZHNjYXBlKTogdGhpc1xuICAgIGxhbmRzY2FwZSh2YWw/KSB7XG4gICAgICAgIGlmICh2YWwgPT0gbnVsbCkgcmV0dXJuIHRoaXMub3B0aW9ucy5sYW5kc2NhcGVcbiAgICAgICAgY29uc3Qgb3AgPSB0aGlzLm9wdGlvbnNcbiAgICAgICAgb3AubGFuZHNjYXBlID0gdmFsXG5cbiAgICAgICAgLy8gVXBkYXRlIHhyYW5nZSBhbmQgeXJhbmdlXG4gICAgICAgIHRoaXMudXBkYXRlU2NhbGVzKG9wKVxuICAgICAgICB0aGlzLnVwZGF0ZUF4ZXModGhpcy5zY2FsZXMsIG9wKVxuXG4gICAgICAgIC8vIFVwZGF0ZSBkYXRhXG4gICAgICAgIHRoaXMuZGF0YSgpLmZvckVhY2goYiA9PiB7XG4gICAgICAgICAgICBiLnVwZGF0ZXIuZiA9IHZhbC5mXG4gICAgICAgICAgICBiLnVwZGF0ZXIuZGYgPSB2YWwuZGZcbiAgICAgICAgfSlcblxuICAgICAgICB0aGlzLmNsZWFyQ3VydmUoKVxuICAgICAgICB0aGlzLnBsb3RDdXJ2ZSgpXG5cbiAgICAgICAgcmV0dXJuIHRoaXNcbiAgICB9XG5cbiAgICAvKiogUmV0dXJuIGZpcnN0IHVwZGF0ZXIgaW4gZGF0YSAqL1xuICAgIGdldCBkYXRhSGVhZCgpOiBHb2xmQmFsbCB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5kYXRhKClbMF1cbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkxvb2tzIGxpa2UgdGhlcmUgaXMgbm8gZGF0YSBpbiB0aGlzIGdvbGYgaG9sZVwiKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBQdXQgYSB2ZWN0b3IgaW50byB0aGUgY29vcmRpbmF0ZSBzeXN0ZW0gdXNlZCBieSB0aGUgdmlzdWFsaXphdGlvblxuICAgICAqIFxuICAgICAqIEBwYXJhbSB2IFZlY3RvciBcbiAgICAgKi9cbiAgICBpbnRvVmlzKHY6IFZlY3RvcjJEKSB7XG4gICAgICAgIHJldHVybiB7IHg6IHRoaXMuc2NhbGVzLm1hdGgycHgueCh2LngpLCB5OiB0aGlzLnNjYWxlcy5tYXRoMnB4Lnkodi55KSB9XG4gICAgfVxuXG4gICAgLy8gVGFrZSBhIHZlY3RvciBpbiB0aGUgY29vcmRpbmF0ZSBzeXN0ZW0gYW5kIHJldHVybiBpdCB0byB0aGUgbWF0aCBjb29yZGluYXRlc1xuICAgIGludG9NYXRoKHY6IFZlY3RvcjJEKSB7XG4gICAgICAgIHJldHVybiB7IHg6IHRoaXMuc2NhbGVzLm1hdGgycHgueC5pbnZlcnQodi54KSwgeTogdGhpcy5zY2FsZXMubWF0aDJweC55LmludmVydCh2LnkpIH1cbiAgICB9XG5cbiAgICAvLyBUdXJuIGEgbnVtYmVyIGludG8gYSB2ZWN0b3JcbiAgICBudW0ydmVjKHg6IG51bWJlcik6IFZlY3RvcjJEIHtcbiAgICAgICAgY29uc3Qgb3AgPSB0aGlzLm9wdGlvbnNcbiAgICAgICAgcmV0dXJuIHsgeDogeCwgeTogb3AubGFuZHNjYXBlLmxvc3MoeCkgfVxuICAgIH1cblxuICAgIC8vIFR1cm4gYSBiYWxsIGludG8gYSB2ZWN0b3IgaW4gdGhlIHZpc3VhbGl6YXRpb24gY29vcmRpbmF0ZSBzeXN0ZW1cbiAgICBiYWxsMnZpcyhiOiBHb2xmQmFsbCkge1xuICAgICAgICByZXR1cm4gdGhpcy5pbnRvVmlzKGIudG9WZWMoZ2V0UGxvdEZ1bmModGhpcy5vcHRpb25zLmxhbmRzY2FwZSkpKVxuICAgIH1cblxuICAgIC8vIFBsb3QgYSBiYWxsIG9uIHRoZSBjaGFydFxuICAgIHBsb3RCYWxsKGI6IEdvbGZCYWxsKSB7XG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuXG4gICAgICAgIGNvbnN0IHRvQ2xhc3MgPSBuYW1lID0+ICcuJyArIG5hbWVcbiAgICAgICAgY29uc3QgY2xzU2VsID0gdG9DbGFzcyhiLmNsYXNzbmFtZSlcblxuICAgICAgICBjb25zdCBiYWxsID0gdGhpcy5iYWxsMnZpcyhiKVxuICAgICAgICBzZWxmLnNlbHMuYmFsbCA9IHNlbGYuYmFzZS5zZWxlY3RBbGwoY2xzU2VsKVxuICAgICAgICAgICAgLmRhdGEoW2JhbGxdKVxuICAgICAgICAgICAgLmpvaW4oJ2NpcmNsZScpXG4gICAgICAgICAgICAuY2xhc3NlZCgnZ29sZi1iYWxsJywgdHJ1ZSlcbiAgICAgICAgICAgIC5jbGFzc2VkKGIuY2xhc3NuYW1lLCB0cnVlKVxuICAgICAgICAgICAgLmF0dHIoXCJjeFwiLCBkID0+IGQueClcbiAgICAgICAgICAgIC5hdHRyKFwiY3lcIiwgZCA9PiBkLnkpXG4gICAgICAgICAgICAuYXR0cihcInJcIiwgXCI1cHhcIilcbiAgICB9XG5cbiAgICBjbGVhckN1cnZlKCkge1xuICAgICAgICB0aGlzLmxheWVycy5iZy5zZWxlY3RBbGwoJy5saW5lJykucmVtb3ZlKClcbiAgICAgICAgdGhpcy5zZWxzLm1hc2tMaW5lLmh0bWwoJycpXG4gICAgICAgIHRoaXMuYmFzZS5zZWxlY3RBbGwoJyNsaW5lLWJhY2tncm91bmQnKS5odG1sKCcnKVxuICAgIH1cblxuICAgIHBsb3RDdXJ2ZUJ5RGVmYXVsdCh4czogbnVtYmVyW10pIHtcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXMsIG9wID0gdGhpcy5vcHRpb25zLCBzY2FsZXMgPSB0aGlzLnNjYWxlcywgc2VscyA9IHRoaXMuc2VscztcblxuICAgICAgICBzY2FsZXMucGF0aHMuZm9yRWFjaChsaW5lID0+IHtcbiAgICAgICAgICAgIHRoaXMubGF5ZXJzLmJnLmFwcGVuZChcInBhdGhcIilcbiAgICAgICAgICAgICAgICAuZGF0dW0oeHMpXG4gICAgICAgICAgICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcImxpbmVcIilcbiAgICAgICAgICAgICAgICAuYXR0cihcImRcIiwgZCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBsaW5lKGQpXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcblxuICAgICAgICBzZWxzLmxpbmVCYWNrZ3JvdW5kLnNlbGVjdEFsbChcIi5ncmFkLWJveFwiKVxuICAgICAgICAgICAgLmRhdGEoWzFdKVxuICAgICAgICAgICAgLmpvaW4oJ3JlY3QnKVxuICAgICAgICAgICAgLmNsYXNzZWQoJ2dyYWQtYm94JywgdHJ1ZSlcbiAgICAgICAgICAgIC5hdHRyKFwid2lkdGhcIiwgb3Aud2lkdGgpXG4gICAgICAgICAgICAuYXR0cihcImhlaWdodFwiLCBvcC5oZWlnaHQpXG4gICAgICAgICAgICAuYXR0cihcImZpbGwtb3BhY2l0eVwiLCAwLjApXG4gICAgfVxuXG4gICAgcGxvdEN1cnZlQnlHcmFkaWVudCh4czogbnVtYmVyW10pIHtcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXMsIHNjYWxlcyA9IHRoaXMuc2NhbGVzLCBzZWxzID0gdGhpcy5zZWxzLCBvcCA9IHRoaXMub3B0aW9ucztcblxuICAgICAgICBjb25zdCB4d2lkdGggPSBvcC53aWR0aCAqICh4c1sxXSAtIHhzWzBdKSAvIChkMy5tYXgoeHMpIC0gZDMubWluKHhzKSkgLy8gQXNzdW1lcyBsZW5ndGggb2YgeHMgPiAxXG5cbiAgICAgICAgY29uc3QgYmFsbFVwZGF0ZXIgPSBzZWxmLmRhdGEoKVswXS51cGRhdGVyXG5cbiAgICAgICAgLy8gQ2xlYXIgbWFza1xuICAgICAgICBjb25zdCBsaW5lID0gc2NhbGVzLnBhdGhzWzBdXG5cbiAgICAgICAgc2Vscy5tYXNrTGluZS5hdHRyKCdkJywgbGluZSh4cykpXG5cbiAgICAgICAgY29uc3QgY29sb3JTY2FsZSA9IGQzLnNjYWxlU2VxdWVudGlhbChkMy5pbnRlcnBvbGF0ZVBsYXNtYSlcbiAgICAgICAgXG4gICAgICAgIC8vIENoZWNrIHRoZSBncmFkaWVudCByYW5nZVxuICAgICAgICBjb25zdCB1cGRhdGVBbXRzID0geHMubWFwKHggPT4gTWF0aC5sb2coTWF0aC5hYnMoYmFsbFVwZGF0ZXIudXBkYXRlTW9kaWZpZXIoeCkpKSlcblxuICAgICAgICBjb25zdCBjbGFtcGVkU2NhbGUgPSBSLmN1cnJ5KChtaW46bnVtYmVyLCBtYXg6bnVtYmVyLCBhcnI6bnVtYmVyW10pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNsYW1wZXIgPSBSLmNsYW1wKG1pbiwgbWF4KVxuICAgICAgICAgICAgY29uc3QgY2xhbXBlZEFyciA9IFIubWFwKGNsYW1wZXIsIGFycilcbiAgICAgICAgICAgIHJldHVybiBhcnIubWFwKHggPT4geCAtIGQzLm1lYW4oY2xhbXBlZEFycikpXG4gICAgICAgICAgICAvLyByZXR1cm4gY2xhbXBlZEFyci5tYXAoeCA9PiB4IC0gZDMubWVhbihjbGFtcGVkQXJyKSlcbiAgICAgICAgfSlcblxuICAgICAgICAvLyBjb25zdCBjbGFtcGVyID0gY2xhbXBlZFNjYWxlKC0yLCAyKTtcbiAgICAgICAgLy8gY29uc3QgZGF0YSA9IGQzLnppcCh4cywgY2xhbXBlcih1cGRhdGVBbXRzKSkubWFwKGQgPT4ge3JldHVybiB7eDogZFswXSwgdXBkYXRlQW10OiBkWzFdfX0pXG4gICAgICAgIGNvbnN0IGRhdGEgPSBkMy56aXAoeHMsIHVwZGF0ZUFtdHMpLm1hcChkID0+IHtyZXR1cm4ge3g6IGRbMF0sIHVwZGF0ZUFtdDogZFsxXX19KVxuICAgICAgICAvLyBjb25zdCBleHRlbnQgPSBkMy5leHRlbnQoY2xhbXBlcih1cGRhdGVBbXRzKSlcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJFeHRlbnQ6IFwiLCBleHRlbnQpO1xuXG5cbiAgICAgICAgLy9AdHMtaWdub3JlXG4gICAgICAgIGNvbnN0IGNzY2FsZSA9IGQzLnNjYWxlTGluZWFyKCkuZG9tYWluKFstMiwgMCwgMl0pLnJhbmdlKFtcIiM2N2E5Y2ZcIiwgXCIjZjdmN2Y3XCIsIFwiI2VmOGE2MlwiXSlcblxuICAgICAgICBzZWxzLmxpbmVCYWNrZ3JvdW5kLnNlbGVjdEFsbCgnLmdyYWQtYm94JylcbiAgICAgICAgICAgIC5kYXRhKGRhdGEpXG4gICAgICAgICAgICAuam9pbigncmVjdCcpXG4gICAgICAgICAgICAuY2xhc3NlZCgnZ3JhZC1ib3gnLCB0cnVlKVxuICAgICAgICAgICAgLmF0dHIoJ2hlaWdodCcsIG9wLmhlaWdodClcbiAgICAgICAgICAgIC5hdHRyKCd3aWR0aCcsIHNlbGYuc2NhbGVzLm1hdGgycHgueCh4d2lkdGgpKVxuICAgICAgICAgICAgLmF0dHIoJ3gnLCBkID0+IHNlbGYuc2NhbGVzLm1hdGgycHgueChkLngpKVxuICAgICAgICAgICAgLmF0dHIoJ3knLCAwKVxuICAgICAgICAgICAgLmF0dHIoJ2ZpbGwnLCBkID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY3NjYWxlKGQudXBkYXRlQW10KVxuICAgICAgICAgICAgfSlcblxuICAgICAgICBzZWxzLmxpbmVCYWNrZ3JvdW5kLmF0dHIoJ21hc2snLCBgdXJsKCMke3RoaXMubWFza0lkfSlgKVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFBsb3QgdGhlIHZhbHVlcyBvZiBhbGwgeCBhY2NvcmRpbmcgdG8gdGhlIGZ1bmN0aW9uXG4gICAgICogXG4gICAgICogQHBhcmFtIHggQSBsaW5zcGFjZSBvZiB4IHZhbHVlcyBvdmVyIHdoaWNoIHRvIHBsb3QgYSBjdXJ2ZVxuICAgICAqL1xuICAgIHBsb3RDdXJ2ZSgpIHtcbiAgICAgICAgY29uc3Qgb3AgPSB0aGlzLm9wdGlvbnNcbiAgICAgICAgY29uc3QgeHMgPSBsaW5zcGFjZShvcC5sYW5kc2NhcGUueHJhbmdlWzBdLCBvcC5sYW5kc2NhcGUueHJhbmdlWzFdLCAxMDAwKVxuICAgICAgICBjb25zdCBzZWxmID0gdGhpcywgc2NhbGVzID0gdGhpcy5zY2FsZXMsIHNlbHMgPSB0aGlzLnNlbHM7XG5cbiAgICAgICAgaWYgKHNlbGYuZGF0YSgpICE9IG51bGwpIHtcbiAgICAgICAgICAgIGlmIChzZWxmLmRhdGEoKS5sZW5ndGggPiAxKSBzZWxmLnBsb3RDdXJ2ZUJ5RGVmYXVsdCh4cylcbiAgICAgICAgICAgIGVsc2Ugc2VsZi5wbG90Q3VydmVCeUdyYWRpZW50KHhzKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgdXBkYXRlU2NhbGVzKG9wOiBHcmFwaE9wdGlvbnMpIHtcbiAgICAgICAgY29uc3Qgc2NhbGVzID0gdGhpcy5zY2FsZXNcblxuICAgICAgICBjb25zdCB4YmFzZVJhbmdlID0gWy0xLCAxXVxuICAgICAgICBjb25zdCB5YmFzZVJhbmdlID0gWzEsIDBdXG5cbiAgICAgICAgY29uc3QgeHB4UmFuZ2UgPSBbMCwgb3Aud2lkdGhdXG4gICAgICAgIGNvbnN0IHlweFJhbmdlID0gW29wLmhlaWdodCwgMF1cblxuICAgICAgICBzY2FsZXMuYmFzZTJtYXRoID0ge1xuICAgICAgICAgICAgeDogZDMuc2NhbGVMaW5lYXIoKS5kb21haW4oeGJhc2VSYW5nZSkucmFuZ2Uob3AubGFuZHNjYXBlLnhyYW5nZSksXG4gICAgICAgICAgICB5OiBkMy5zY2FsZUxpbmVhcigpLmRvbWFpbih5YmFzZVJhbmdlKS5yYW5nZShvcC5sYW5kc2NhcGUueXJhbmdlKVxuICAgICAgICB9XG4gICAgICAgIHNjYWxlcy5iYXNlMnB4ID0ge1xuICAgICAgICAgICAgeDogZDMuc2NhbGVMaW5lYXIoKS5kb21haW4oeGJhc2VSYW5nZSkucmFuZ2UoeHB4UmFuZ2UpLFxuICAgICAgICAgICAgeTogZDMuc2NhbGVMaW5lYXIoKS5kb21haW4oeWJhc2VSYW5nZSkucmFuZ2UoeXB4UmFuZ2UpXG4gICAgICAgIH1cbiAgICAgICAgc2NhbGVzLm1hdGgycHggPSB7XG4gICAgICAgICAgICB4OiBkMy5zY2FsZUxpbmVhcigpLmRvbWFpbihvcC5sYW5kc2NhcGUueHJhbmdlKS5yYW5nZSh4cHhSYW5nZSksXG4gICAgICAgICAgICB5OiBkMy5zY2FsZUxpbmVhcigpLmRvbWFpbihvcC5sYW5kc2NhcGUueXJhbmdlKS5yYW5nZSh5cHhSYW5nZSlcbiAgICAgICAgfVxuXG4gICAgICAgIHNjYWxlcy5iYXNlMmxvc3MgPSBkMy5zY2FsZUxpbmVhcigpLmRvbWFpbihvcC5sYW5kc2NhcGUueXJhbmdlKS5yYW5nZShbMCwgMV0pXG5cbiAgICAgICAgc2NhbGVzLnBhdGhzID0gdGhpcy5uZXdQYXRocyhvcC5sYW5kc2NhcGUpXG4gICAgfVxuXG4gICAgdXBkYXRlQXhlcyhzY2FsZXM6IEdyYXBoU2NhbGVzLCBvcDogR3JhcGhPcHRpb25zKSB7XG4gICAgICAgIGNvbnN0IHNlbHMgPSB0aGlzLnNlbHNcbiAgICAgICAgc2Vscy54YXhpcy5jYWxsKGQzLmF4aXNCb3R0b20oc2NhbGVzLm1hdGgycHgueCkudGlja1ZhbHVlcyhbMF0pLnRpY2tGb3JtYXQoeCA9PiAnMCcpKVxuICAgIH1cblxuICAgIGluaXQoKSB7XG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuICAgICAgICBjb25zdCBvcCA9IHRoaXMub3B0aW9ucztcbiAgICAgICAgY29uc3Qgc2NhbGVzID0gdGhpcy5zY2FsZXM7XG4gICAgICAgIGNvbnN0IHNlbHMgPSB0aGlzLnNlbHM7XG5cbiAgICAgICAgdGhpcy51cGRhdGVTY2FsZXMob3ApXG5cbiAgICAgICAgc2Vscy54YXhpcyA9IHRoaXMuYmFzZS5hcHBlbmQoXCJnXCIpXG4gICAgICAgICAgICAuYXR0cihcImNsYXNzXCIsIFwiYXhpcyBheGlzLS14XCIpXG4gICAgICAgICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBTVkcudHJhbnNsYXRlKDAsIG9wLmhlaWdodCkpXG5cbiAgICAgICAgc2Vscy54bGFiZWwgPSB0aGlzLmJhc2UuYXBwZW5kKFwidGV4dFwiKVxuICAgICAgICAgICAgLnRleHQoXCJcXHUwM0I4IC0gXFx1MDNCOCpcIilcbiAgICAgICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJ0aXRsZXNcIilcbiAgICAgICAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIFNWRy50cmFuc2xhdGUob3Aud2lkdGggLyAyLCBvcC5oZWlnaHQgKyBvcC5wYWQpKVxuXG4gICAgICAgIC8vIEFkZCBiYXNlIG1hc2tcbiAgICAgICAgc2Vscy5tYXNrID0gdGhpcy5iYXNlLmFwcGVuZCgnbWFzaycpLmF0dHIoJ2lkJywgdGhpcy5tYXNrSWQpXG5cbiAgICAgICAgc2Vscy5tYXNrQmFja2dyb3VuZCA9IHNlbHMubWFzay5hcHBlbmQoJ3JlY3QnKVxuICAgICAgICAgICAgLmF0dHIoJ3dpZHRoJywgb3Aud2lkdGgpXG4gICAgICAgICAgICAuYXR0cignaGVpZ2h0Jywgb3AuaGVpZ2h0KVxuICAgICAgICAgICAgLmF0dHIoJ2ZpbGwnLCAnYmxhY2snKVxuXG4gICAgICAgIHNlbHMubWFza0xpbmUgPSBzZWxzLm1hc2suXG4gICAgICAgICAgICBzZWxlY3RBbGwoXCIjdHJhbnNwYXJlbnQtbGluZVwiKS5cbiAgICAgICAgICAgIGRhdGEoWzFdKVxuICAgICAgICAgICAgLmpvaW4oJ3BhdGgnKVxuICAgICAgICAgICAgLmF0dHIoJ2lkJywgJ3RyYW5zcGFyZW50LWxpbmUnKVxuICAgICAgICAgICAgLmF0dHIoJ3N0cm9rZScsICd3aGl0ZScpXG4gICAgICAgICAgICAuYXR0cignc3Ryb2tlLXdpZHRoJywgJzVweCcpXG5cbiAgICAgICAgc2Vscy5saW5lQmFja2dyb3VuZCA9IHNlbGYuYmFzZS5zZWxlY3RBbGwoJyNsaW5lLWJhY2tncm91bmQnKVxuICAgICAgICAgICAgLmRhdGEoWzFdKVxuICAgICAgICAgICAgLmpvaW4oJ2cnKVxuICAgICAgICAgICAgLmF0dHIoJ2lkJywgJ2xpbmUtYmFja2dyb3VuZCcpXG5cbiAgICAgICAgc2Vscy5iYWNrZHJvcCA9IHRoaXMubGF5ZXJzLmJnLmFwcGVuZChcImdcIilcbiAgICAgICAgICAgIC5hdHRyKFwiaWRcIiwgXCJiYWNrZHJvcFwiKVxuICAgICAgICAgICAgLmNsYXNzZWQoJ2dyYXNzJywgdHJ1ZSlcbiAgICAgICAgICAgIC5hcHBlbmQoXCJyZWN0XCIpXG4gICAgICAgICAgICAuYXR0cihcImhlaWdodFwiLCBvcC5oZWlnaHQpXG4gICAgICAgICAgICAuYXR0cihcIndpZHRoXCIsIG9wLndpZHRoKVxuXG4gICAgICAgIHRoaXMudXBkYXRlQXhlcyhzY2FsZXMsIG9wKVxuXG4gICAgICAgIHNjYWxlcy5wYXRocyA9IHRoaXMubmV3UGF0aHMob3AubGFuZHNjYXBlKVxuXG4gICAgICAgIHRoaXMucGxvdEN1cnZlKClcbiAgICB9XG5cbiAgICBuZXdQYXRocyhsYW5kc2NhcGU6IExhbmRzY2FwZSkge1xuICAgICAgICBjb25zdCBzY2FsZXMgPSB0aGlzLnNjYWxlc1xuICAgICAgICBjb25zdCBiYXNlTGluZSA9IGQzLmxpbmU8bnVtYmVyPigpXG4gICAgICAgICAgICAueCgoZDogbnVtYmVyLCBpOiBudW1iZXIpID0+IHNjYWxlcy5tYXRoMnB4LngoZCkpXG4gICAgICAgICAgICAueSgoZDogbnVtYmVyLCBpOiBudW1iZXIpID0+IHNjYWxlcy5tYXRoMnB4LnkoZ2V0UGxvdEZ1bmMobGFuZHNjYXBlKShkKSkpXG4gICAgICAgICAgICAuY3VydmUoZDMuY3VydmVMaW5lYXIpXG5cbiAgICAgICAgcmV0dXJuIFtiYXNlTGluZV1cbiAgICB9XG5cbiAgICBpbml0QmFsbHMoKSB7XG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzLCBvcCA9IHRoaXMub3B0aW9ucztcblxuICAgICAgICBjb25zdCB0b29TbWFsbCA9ICh4OiBudW1iZXIpID0+IHggPCAob3AubGFuZHNjYXBlLnhyYW5nZVswXSlcbiAgICAgICAgY29uc3QgdG9vQmlnID0gKHg6IG51bWJlcikgPT4geCA+IChvcC5sYW5kc2NhcGUueHJhbmdlWzFdKVxuXG4gICAgICAgIGNvbnN0IGZpeE91dE9mQm91bmRzID0gKHg6IG51bWJlcikgPT4ge1xuICAgICAgICAgICAgbGV0IG91dDogbnVtYmVyXG5cbiAgICAgICAgICAgIGlmIChpc05hTih4KSkgb3V0ID0gb3AubGFuZHNjYXBlLnhyYW5nZVswXVxuICAgICAgICAgICAgZWxzZSBpZiAodG9vU21hbGwoeCkpIG91dCA9IG9wLmxhbmRzY2FwZS54cmFuZ2VbMF1cbiAgICAgICAgICAgIGVsc2UgaWYgKHRvb0JpZyh4KSkgb3V0ID0gb3AubGFuZHNjYXBlLnhyYW5nZVsxXVxuICAgICAgICAgICAgZWxzZSBvdXQgPSB4XG5cbiAgICAgICAgICAgIHJldHVybiBvdXRcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIGdldE5leHRCYWxsKGI6IEdvbGZCYWxsKTogR29sZkJhbGwge1xuICAgICAgICAgICAgY29uc3QgbmV4dFggPSBiLm5leHRYKClcbiAgICAgICAgICAgIGNvbnN0IGN1cnJCYWxsU2VsID0gc2VsZi5iYXNlLnNlbGVjdChgLiR7Yi5jbGFzc25hbWV9YClcbiAgICAgICAgICAgIGNvbnN0IGZvcmNlWCA9IGZpeE91dE9mQm91bmRzKG5leHRYKVxuICAgICAgICAgICAgaWYgKCFjdXJyQmFsbFNlbC5jbGFzc2VkKCdkZWFkLWJhbGwnKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBiLnN0ZXBfKGZvcmNlWClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBiXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBzdWJPYmogPSB7XG4gICAgICAgICAgICBuZXh0OiBnYnMgPT4ge1xuICAgICAgICAgICAgICAgIGdicy5mb3JFYWNoKGIgPT4gc2VsZi5wbG90QmFsbChiKSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlcnJvcjogYiA9PiBjb25zb2xlLmxvZyhcIkVSUk9SOiBcIiwgYiksXG4gICAgICAgICAgICBjb21wbGV0ZTogKCkgPT4gY29uc29sZS5sb2coXCJDT01QTEVURVwiKSxcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHRpY2tlciA9ICgpID0+IGludGVydmFsKDEwKS5waXBlKFxuICAgICAgICAgICAgc2NhbigoYWNjOiBUKSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gVW5zdWJzY3JpYmVyIHRpY2tlciBpZiBhbGwgYmFsbHMgZGVhZFxuICAgICAgICAgICAgICAgIGlmIChSLmFsbCgoYjogR29sZkJhbGwpID0+IGQzLnNlbGVjdChgLiR7Yi5jbGFzc25hbWV9YCkuY2xhc3NlZCgnZGVhZC1iYWxsJyksIHNlbGYuZGF0YSgpKSkge1xuICAgICAgICAgICAgICAgICAgICBydW5uaW5nVGlja2VyLnVuc3Vic2NyaWJlKClcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBzZWxmLmRhdGEoKS5mb3JFYWNoKGIgPT4gZ2V0TmV4dEJhbGwoYikpXG4gICAgICAgICAgICAgICAgcmV0dXJuIHNlbGYuZGF0YSgpXG4gICAgICAgICAgICB9LCBzZWxmLmRhdGEoKSksXG4gICAgICAgICAgICB0YWtlKG9wLm1heEl0ZXIpXG4gICAgICAgICkuc3Vic2NyaWJlKHN1Yk9iailcblxuICAgICAgICAvLyBSdW5uaW5nIHRpY2tlciBzdGFydHMgYXMgYW4gZW1wdHkgc3Vic2NyaXB0aW9uIG9iamVjdCwgaXMgbGF0ZXIgcmVwbGFjZWQgYnkgdGhlIHJ1bm5pbmcgdGlja2VyXG4gICAgICAgIGxldCBydW5uaW5nVGlja2VyID0ge1xuICAgICAgICAgICAgdW5zdWJzY3JpYmU6ICgpID0+IGNvbnNvbGUubG9nKFwiRW1wdHkgVGlja2VyIVwiKVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcGxvdEJhbGxzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcnVubmluZ1RpY2tlci51bnN1YnNjcmliZSgpXG4gICAgICAgICAgICBjb25zdCBjbGljayA9IHRvVmVjKGQzLm1vdXNlKHRoaXMpKVxuICAgICAgICAgICAgZDMuc2VsZWN0QWxsKCcuZ29sZi1iYWxsJykuY2xhc3NlZCgnZGVhZC1iYWxsJywgZmFsc2UpXG4gICAgICAgICAgICBzZWxmLmRhdGEoKS5mb3JFYWNoKChiLCBpKSA9PiBiLnggPSBzZWxmLmludG9NYXRoKGNsaWNrKS54KVxuICAgICAgICAgICAgc2VsZi5kYXRhKCkuZm9yRWFjaChiID0+IHNlbGYucGxvdEJhbGwoYikpXG4gICAgICAgICAgICBzZWxmLmV2ZW50SGFuZGxlci50cmlnZ2VyKFwibG9zcy1jbGlja1wiLCB7fSlcblxuICAgICAgICAgICAgcnVubmluZ1RpY2tlciA9IHRpY2tlcigpXG4gICAgICAgIH1cblxuICAgICAgICAvLyB0aGlzLnNlbHMuYmFja2Ryb3Aub24oJ2NsaWNrJywgcGxvdEJhbGxzKVxuICAgICAgICAvLyB0aGlzLnNlbHMubWFza0JhY2tncm91bmQub24oJ2NsaWNrJywgcGxvdEJhbGxzKVxuICAgICAgICAvLyB0aGlzLnNlbHMubWFzay5vbignY2xpY2snLCBwbG90QmFsbHMpXG4gICAgICAgIHRoaXMuc2Vscy5saW5lQmFja2dyb3VuZC5vbignY2xpY2snLCBwbG90QmFsbHMpXG4gICAgfVxuXG4gICAgcSgpOiBudW1iZXJcbiAgICBxKHZhbDogbnVtYmVyKTogdGhpc1xuICAgIHEodmFsPykge1xuICAgICAgICBpZiAodmFsID09IG51bGwpIHJldHVybiB0aGlzLmRhdGFIZWFkLnVwZGF0ZXIucVxuICAgICAgICB0aGlzLmRhdGFIZWFkLnEodmFsKVxuICAgICAgICB0aGlzLnBsb3RDdXJ2ZSgpXG4gICAgICAgIHJldHVybiB0aGlzXG4gICAgfVxuXG4gICAgZXRhKCk6IG51bWJlclxuICAgIGV0YSh2YWw6IG51bWJlcik6IHRoaXNcbiAgICBldGEodmFsPykge1xuICAgICAgICBpZiAodmFsID09IG51bGwpIHJldHVybiB0aGlzLmRhdGFIZWFkLnVwZGF0ZXIucVxuICAgICAgICB0aGlzLmRhdGFIZWFkLmV0YSh2YWwpXG4gICAgICAgIC8vIHRoaXMucGxvdEN1cnZlKClcbiAgICAgICAgcmV0dXJuIHRoaXNcbiAgICB9XG5cbiAgICBkYXRhKCk6IFRcbiAgICBkYXRhKHZhbDogVCk6IHRoaXNcbiAgICBkYXRhKHZhbD8pIHtcbiAgICAgICAgaWYgKHZhbCA9PSBudWxsKSByZXR1cm4gdGhpcy5fZGF0YVxuICAgICAgICB0aGlzLl9kYXRhID0gdmFsO1xuICAgICAgICB0aGlzLmluaXRCYWxscygpXG4gICAgICAgIHJldHVybiB0aGlzXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSU5QTEFDRSBjaGFuZ2UgdGhlIGdvbGYgYmFsbHMgaW50byB0aGUgQkFTRSBzY2FsZVxuICAgICAqL1xuICAgIGRhdGFUb0Jhc2VfKCk6IFQge1xuICAgICAgICB0aGlzLmRhdGEoKS5tYXAoYiA9PiB7XG4gICAgICAgICAgICBiLnggPSB0aGlzLnNjYWxlcy5iYXNlMm1hdGgueC5pbnZlcnQoYi54KVxuICAgICAgICAgICAgcmV0dXJuIGJcbiAgICAgICAgfSlcblxuICAgICAgICByZXR1cm4gdGhpcy5kYXRhKClcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBNb2RpZnkgdGhlIGdvbGYgYmFsbHMgYW5kIGNoYW5nZSB0aGVpciB4IHZhbHVlIGZyb20gQkFTRSB0byB0aGUgbmV3IE1BVEhcbiAgICAgKi9cbiAgICBkYXRhRnJvbUJhc2UodmFsOiBUKTogdGhpcyB7XG4gICAgICAgIHZhbC5mb3JFYWNoKGIgPT4ge1xuICAgICAgICAgICAgYi54ID0gdGhpcy5zY2FsZXMuYmFzZTJtYXRoLngoYi54KVxuICAgICAgICB9KVxuXG4gICAgICAgIHRoaXMuaW5pdEJhbGxzKClcbiAgICAgICAgcmV0dXJuIHRoaXNcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHRvVmVjKFt4LCB5XTogW251bWJlciwgbnVtYmVyXSk6IFZlY3RvcjJEIHtcbiAgICByZXR1cm4geyB4OiB4LCB5OiB5IH1cbn0iLCJpbXBvcnQgKiBhcyBkMyBmcm9tICdkMydcbmltcG9ydCAqIGFzIFIgZnJvbSAncmFtZGEnXG5cbmltcG9ydCB7IENoYXJ0MkQsIENoYXJ0T3B0aW9ucywgQ2hhcnRTY2FsZXMgfSBmcm9tICcuLi91dGlsL0NoYXJ0MmRWaXNDb21wb25lbnQnXG5pbXBvcnQgeyBTaW1wbGVFdmVudEhhbmRsZXIgfSBmcm9tICcuLi91dGlsL1NpbXBsZUV2ZW50SGFuZGxlcidcbmltcG9ydCB7IEQzU2VsIH0gZnJvbSAnLi4vdXRpbC94ZDMnXG5pbXBvcnQgeyBTVkcgfSBmcm9tICcuLi91dGlsL1NWR3BsdXMnXG5cbmltcG9ydCB7IEJhbGxIaXN0b3J5IH0gZnJvbSAnLi9Hb2xmQmFsbCdcblxuY29uc3QgYXhpc09mZnNldCA9IDEgLy8gVXNlIHRoaXMgdG8gY292ZXIgdGhlIHBsb3R0ZWQgbGluZXNcblxuaW50ZXJmYWNlIEdyYXBoU2VscyB7XG4gICAgeGF4aXM/OiBEM1NlbFxuICAgIHlheGlzPzogRDNTZWxcbiAgICB4bGFiZWw/OiBEM1NlbFxuICAgIGxpbmU/OiBEM1NlbFxuICAgIGJhY2tkcm9wPzogRDNTZWxcbiAgICBiYWxsPzogRDNTZWxcbn1cblxudHlwZSBUcmFja2VyID0ge1xuICAgIHNlbDogRDNTZWwsXG4gICAgdmFsczogbnVtYmVyW11cbn1cblxudHlwZSBMaW5lVHJhY2tlciA9IHtcbiAgICAoa2V5OiBzdHJpbmcpOiBUcmFja2VyXG59XG5cbnR5cGUgVCA9IExpbmVUcmFja2VyXG5cblxuZXhwb3J0IGNsYXNzIEdvbGZMb3NzZXMgZXh0ZW5kcyBDaGFydDJEPFQ+IHtcbiAgICBjc3NuYW1lID0gXCJsaW5lLXBsb3RcIlxuXG4gICAgX2RhdGE6IFRcblxuICAgIG9wdGlvbnM6IENoYXJ0T3B0aW9ucyA9IHtcbiAgICAgICAgbWF4V2lkdGg6IDM1MCxcbiAgICAgICAgbWF4SGVpZ2h0OiAyNTAsXG4gICAgICAgIG1hcmdpbjogeyB0b3A6IDEwLCByaWdodDogMTAsIGJvdHRvbTogMzAsIGxlZnQ6IDMwIH0sXG4gICAgICAgIHBhZDogeyB0b3A6IDUsIHJpZ2h0OiAxLCBib3R0b206IDEwLCBsZWZ0OiAxNSB9LFxuICAgICAgICB4cmFuZ2U6IFswLCA2MDBdLFxuICAgICAgICB5cmFuZ2U6IFsxLjEsIDFlLTNdLFxuICAgIH1cbiAgICBkZWZhdWx0WHJhbmdlOiBbbnVtYmVyLCBudW1iZXJdXG5cbiAgICBzY2FsZXM6IENoYXJ0U2NhbGVzID0ge31cblxuICAgIHNlbHM6IEdyYXBoU2VscyA9IHt9XG5cbiAgICBwYXRoOiBkMy5MaW5lPG51bWJlcj5cblxuICAgIGNvbnN0cnVjdG9yKGQzcGFyZW50OiBEM1NlbCwgZXZlbnRIYW5kbGVyPzogU2ltcGxlRXZlbnRIYW5kbGVyLCBvcHRpb25zID0ge30pIHtcbiAgICAgICAgc3VwZXIoZDNwYXJlbnQsIGV2ZW50SGFuZGxlciwgb3B0aW9ucylcbiAgICAgICAgc3VwZXIuaW5pdFNWRyh0aGlzLm9wdGlvbnMsIFtcImJnXCJdKVxuICAgICAgICB0aGlzLmJhc2UuY2xhc3NlZCh0aGlzLmNzc25hbWUsIHRydWUpXG4gICAgICAgIHRoaXMuZGVmYXVsdFhyYW5nZSA9IHRoaXMub3B0aW9ucy54cmFuZ2VcbiAgICAgICAgdGhpcy5kYXRhKDxMaW5lVHJhY2tlcj57fSlcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBQbG90IHRoZSB2YWx1ZXMgb2YgYWxsIHggYWNjb3JkaW5nIHRvIHRoZSBmdW5jdGlvblxuICAgICAqIFxuICAgICAqIEBwYXJhbSB4IEEgbGluc3BhY2Ugb2YgeCB2YWx1ZXMgb3ZlciB3aGljaCB0byBwbG90IGEgY3VydmVcbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgYWRkRGF0YUtleV8oY2xhc3NuYW1lOiBzdHJpbmcpIHtcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXNcbiAgICAgICAgaWYgKCFSLmhhcyhjbGFzc25hbWUsIHRoaXMuZGF0YSgpKSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coYEFkZGluZyBrZXk6ICR7Y2xhc3NuYW1lfWApO1xuICAgICAgICAgICAgdGhpcy5kYXRhKClbY2xhc3NuYW1lXSA9IHtcbiAgICAgICAgICAgICAgICBzZWw6IHNlbGYuaW5pdEJhc2VMaW5lKGNsYXNzbmFtZSksXG4gICAgICAgICAgICAgICAgdmFsczogW11cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIExpdmUgdXBkYXRlIHRoZSB4cmFuZ2VcbiAgICB1cGRhdGVTY2FsZXMoeHJhbmdlKSB7XG4gICAgICAgIGNvbnN0IG9wID0gdGhpcy5vcHRpb25zXG4gICAgICAgIHRoaXMuc2NhbGVzLnggPSBkMy5zY2FsZUxpbmVhcigpLmRvbWFpbih4cmFuZ2UpLnJhbmdlKFswLCBvcC53aWR0aF0pLmNsYW1wKHRydWUpXG4gICAgfVxuXG4gICAgY2xlYXJQYXRocygpIHtcbiAgICAgICAgdGhpcy5kYXRhKFIubWFwKGQgPT4gUi5hc3NvYygndmFscycsIFtdLCBkKSwgdGhpcy5kYXRhKCkpKVxuICAgIH1cblxuICAgIHBsb3RQYXRoKGQ6IEJhbGxIaXN0b3J5LCBzY2FsZT8pIHtcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgICAgIHRoaXMuYWRkRGF0YUtleV8oZC5jbGFzc25hbWUpO1xuXG4gICAgICAgIGNvbnN0IHNjYWxlciA9IChzY2FsZSA9PSBudWxsKSA/IHggPT4geCA6IHNjYWxlXG5cbiAgICAgICAgY29uc3QgY3VyclZhbHMgPSB0aGlzLmRhdGEoKVtkLmNsYXNzbmFtZV07XG4gICAgICAgIGN1cnJWYWxzLnZhbHMucHVzaChzY2FsZXIoZC5sb3NzKSlcblxuICAgICAgICAvLyBzbGlkaW5nIHgtYXhpc1xuICAgICAgICBjb25zdCBuZXdYcmFuZ2UgPSBbTWF0aC5tYXgoMCwgY3VyclZhbHMudmFscy5sZW5ndGgtdGhpcy5vcHRpb25zLnhyYW5nZVsxXSksIE1hdGgubWF4KGN1cnJWYWxzLnZhbHMubGVuZ3RoLHRoaXMub3B0aW9ucy54cmFuZ2VbMV0pXVxuICAgICAgICB0aGlzLnVwZGF0ZVNjYWxlcyhuZXdYcmFuZ2UpXG4gICAgICAgIHRoaXMuY3JlYXRlUGF0aCgpXG5cbiAgICAgICAgY3VyclZhbHMuc2VsLmRhdGEoW2N1cnJWYWxzXSlcbiAgICAgICAgICAgIC5qb2luKFwicGF0aFwiKVxuICAgICAgICAgICAgLmNsYXNzZWQoZC5jbGFzc25hbWUsIHRydWUpXG4gICAgICAgICAgICAuYXR0cihcImRcIiwgZCA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHNlbGYucGF0aChkLnZhbHMpXG4gICAgICAgICAgICB9KVxuICAgIH1cblxuICAgIHByaXZhdGUgaW5pdEJhc2VMaW5lKGNsYXNzbmFtZTogc3RyaW5nKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmxheWVycy5iZy5hcHBlbmQoXCJwYXRoXCIpXG4gICAgICAgICAgICAuY2xhc3NlZChjbGFzc25hbWUsIHRydWUpXG4gICAgICAgICAgICAuY2xhc3NlZCgnbGluZScsIHRydWUpXG4gICAgfVxuXG4gICAgaW5pdCgpIHtcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgICAgIGNvbnN0IG9wID0gdGhpcy5vcHRpb25zO1xuICAgICAgICBjb25zdCBzY2FsZXMgPSB0aGlzLnNjYWxlcztcbiAgICAgICAgY29uc3Qgc2VscyA9IHRoaXMuc2VscztcblxuICAgICAgICB0aGlzLmNyZWF0ZVNjYWxlcygpXG4gICAgICAgIHRoaXMuY3JlYXRlUGF0aCgpXG4gICAgICAgIHRoaXMuY3JlYXRlQXhlcygpXG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGNyZWF0ZVNjYWxlcygpIHtcbiAgICAgICAgY29uc3Qgc2NhbGVzID0gdGhpcy5zY2FsZXNcbiAgICAgICAgY29uc3Qgb3AgPSB0aGlzLm9wdGlvbnNcblxuICAgICAgICBzY2FsZXMueCA9IGQzLnNjYWxlTGluZWFyKCkuZG9tYWluKG9wLnhyYW5nZSkucmFuZ2UoWzAsIG9wLndpZHRoXSkuY2xhbXAodHJ1ZSlcbiAgICAgICAgc2NhbGVzLnkgPSBkMy5zY2FsZUxvZygpLmRvbWFpbihvcC55cmFuZ2UpLnJhbmdlKFswLCBvcC5oZWlnaHRdKS5jbGFtcCh0cnVlKVxuICAgIH1cblxuICAgIHByb3RlY3RlZCBjcmVhdGVBeGVzKCkge1xuICAgICAgICBjb25zdCBzZWxzID0gdGhpcy5zZWxzXG4gICAgICAgIGNvbnN0IHNjYWxlcyA9IHRoaXMuc2NhbGVzXG4gICAgICAgIGNvbnN0IG9wID0gdGhpcy5vcHRpb25zXG5cbiAgICAgICAgLy8gQ3JlYXRlIGF4ZXNcbiAgICAgICAgc2Vscy55YXhpcyA9IHRoaXMuYmFzZS5hcHBlbmQoXCJnXCIpXG4gICAgICAgICAgICAuYXR0cihcImNsYXNzXCIsIFwiYXhpcyBheGlzLS15XCIpXG4gICAgICAgICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBTVkcudHJhbnNsYXRlKDAsIC0gYXhpc09mZnNldCkpXG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICAuY2FsbChkMy5heGlzTGVmdChzY2FsZXMueSkudGlja0Zvcm1hdChcIlwiKS50aWNrcyg0KSk7XG5cbiAgICAgICAgc2Vscy54YXhpcyA9IHRoaXMuYmFzZS5hcHBlbmQoXCJnXCIpXG4gICAgICAgICAgICAuYXR0cihcImNsYXNzXCIsIFwiYXhpcyBheGlzLS14XCIpXG4gICAgICAgICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBTVkcudHJhbnNsYXRlKDAsIG9wLmhlaWdodCAtIGF4aXNPZmZzZXQpKVxuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgLmNhbGwoZDMuYXhpc0JvdHRvbShzY2FsZXMueCkudGlja0Zvcm1hdChcIlwiKS50aWNrcyg0KSk7XG5cbiAgICAgICAgLy8gQWRkIHhsYWJlbFxuICAgICAgICB0aGlzLmJhc2UuYXBwZW5kKFwidGV4dFwiKVxuICAgICAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgU1ZHLnRyYW5zbGF0ZShvcC53aWR0aCAvIDIsIG9wLm1hcmdpbi50b3AgKyBvcC5oZWlnaHQgKyAxMCkpXG4gICAgICAgICAgICAuc3R5bGUoXCJ0ZXh0LWFuY2hvclwiLCBcIm1pZGRsZVwiKVxuICAgICAgICAgICAgLnRleHQoXCJUaW1lXCIpXG5cbiAgICAgICAgLy8gQWRkIHlsYWJlbFxuICAgICAgICB0aGlzLmJhc2UuYXBwZW5kKFwidGV4dFwiKVxuICAgICAgICAgICAgLnN0eWxlKFwidGV4dC1hbmNob3JcIiwgXCJtaWRkbGVcIilcbiAgICAgICAgICAgIC50ZXh0KFwiTG9zc1wiKVxuICAgICAgICAgICAgLmF0dHIoXCJ5XCIsIG9wLnBhZC5sZWZ0IC0gb3AubWFyZ2luLmxlZnQpXG4gICAgICAgICAgICAuYXR0cihcInhcIiwgb3AucGFkLnRvcCAtIChvcC5oZWlnaHQgLyAyKSlcbiAgICAgICAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIFNWRy5yb3RhdGUoLTkwKSlcbiAgICAgICAgLy8gLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgU1ZHLnRyYW5zbGF0ZShvcC5tYXJnaW4ubGVmdCwgb3AuaGVpZ2h0LzIpKVxuICAgIH1cblxuICAgIHByb3RlY3RlZCBjcmVhdGVQYXRoKCkge1xuICAgICAgICB0aGlzLnBhdGggPSBkMy5saW5lPG51bWJlcj4oKVxuICAgICAgICAgICAgLngoKGQ6IG51bWJlciwgaTogbnVtYmVyKSA9PiB0aGlzLnNjYWxlcy54KGkpKVxuICAgICAgICAgICAgLnkoKGQ6IG51bWJlciwgaTogbnVtYmVyKSA9PiB0aGlzLnNjYWxlcy55KGQpKVxuICAgICAgICAgICAgLmN1cnZlKGQzLmN1cnZlTGluZWFyKVxuICAgIH1cblxuICAgIGRhdGEoKTogVFxuICAgIGRhdGEodmFsOiBUKTogdGhpc1xuICAgIGRhdGEodmFsPykge1xuICAgICAgICBpZiAodmFsID09IG51bGwpIHJldHVybiB0aGlzLl9kYXRhXG4gICAgICAgIHRoaXMuX2RhdGEgPSB2YWw7XG4gICAgICAgIHJldHVybiB0aGlzXG4gICAgfVxuXG4gICAgcmVzZXRYcmFuZ2VfKCk6IHRoaXMge1xuICAgICAgICB0aGlzLm9wdGlvbnMueHJhbmdlID0gdGhpcy5kZWZhdWx0WHJhbmdlXG4gICAgICAgIHJldHVybiB0aGlzXG4gICAgfVxufSIsImltcG9ydCAqIGFzIGQzIGZyb20gJ2QzJ1xuaW1wb3J0ICogYXMgUiBmcm9tICdyYW1kYSdcblxuaW1wb3J0IHsgQ2hhcnQyRCwgQ2hhcnRPcHRpb25zLCBDaGFydFNjYWxlcyB9IGZyb20gJy4uL3V0aWwvQ2hhcnQyZFZpc0NvbXBvbmVudCdcbmltcG9ydCB7IFNpbXBsZUV2ZW50SGFuZGxlciB9IGZyb20gJy4uL3V0aWwvU2ltcGxlRXZlbnRIYW5kbGVyJ1xuaW1wb3J0IHsgRDNTZWwgfSBmcm9tICcuLi91dGlsL3hkMydcbmltcG9ydCB7IFNWRyB9IGZyb20gJy4uL3V0aWwvU1ZHcGx1cydcbmltcG9ydCB7IEJhbGxIaXN0b3J5IH0gZnJvbSAnLi9Hb2xmQmFsbCdcblxuY29uc3QgYXhpc09mZnNldCA9IDEgLy8gVXNlIHRoaXMgdG8gY292ZXIgdGhlIHBsb3R0ZWQgbGluZXNcblxuaW50ZXJmYWNlIEdyYXBoU2VscyB7XG4gICAgeGF4aXM/OiBEM1NlbFxuICAgIHlheGlzPzogRDNTZWxcbiAgICB4bGFiZWw/OiBEM1NlbFxuICAgIGxpbmU/OiBEM1NlbFxuICAgIGJhY2tkcm9wPzogRDNTZWxcbiAgICBiYWxsPzogRDNTZWxcbn1cblxudHlwZSBUcmFja2VyID0ge1xuICAgIHNlbDogRDNTZWwsXG4gICAgdmFsczogbnVtYmVyW11cbn1cblxudHlwZSBMaW5lVHJhY2tlciA9IHtcbiAgICAoa2V5OiBzdHJpbmcpOiBUcmFja2VyXG59XG5cbnR5cGUgVCA9IExpbmVUcmFja2VyXG5cbmV4cG9ydCBjbGFzcyBHb2xmWERpc3QgZXh0ZW5kcyBDaGFydDJEPFQ+IHtcbiAgICBjc3NuYW1lID0gXCJsaW5lLXBsb3RcIlxuXG4gICAgX2RhdGE6IFRcblxuICAgIG9wdGlvbnM6IENoYXJ0T3B0aW9ucyA9IHtcbiAgICAgICAgbWF4V2lkdGg6IDM1MCxcbiAgICAgICAgbWF4SGVpZ2h0OiAyNTAsXG4gICAgICAgIG1hcmdpbjogeyB0b3A6IDEwLCByaWdodDogMTAsIGJvdHRvbTogMzAsIGxlZnQ6IDMwIH0sXG4gICAgICAgIHBhZDogeyB0b3A6IDUsIHJpZ2h0OiAxLCBib3R0b206IDEwLCBsZWZ0OiAxNSB9LFxuICAgICAgICB4cmFuZ2U6IFswLCA2MDBdLFxuICAgICAgICB5cmFuZ2U6IFsxLCAwXSxcbiAgICB9XG5cbiAgICBkZWZhdWx0WHJhbmdlOiBbbnVtYmVyLCBudW1iZXJdXG5cbiAgICBzY2FsZXM6IENoYXJ0U2NhbGVzID0ge31cblxuICAgIHNlbHM6IEdyYXBoU2VscyA9IHt9XG5cbiAgICBwYXRoOiBkMy5MaW5lPG51bWJlcj5cblxuICAgIGNvbnN0cnVjdG9yKGQzcGFyZW50OiBEM1NlbCwgZXZlbnRIYW5kbGVyPzogU2ltcGxlRXZlbnRIYW5kbGVyLCBvcHRpb25zID0ge30pIHtcbiAgICAgICAgc3VwZXIoZDNwYXJlbnQsIGV2ZW50SGFuZGxlciwgb3B0aW9ucylcbiAgICAgICAgc3VwZXIuaW5pdFNWRyh0aGlzLm9wdGlvbnMsIFtcImJnXCJdKVxuICAgICAgICB0aGlzLmJhc2UuY2xhc3NlZCh0aGlzLmNzc25hbWUsIHRydWUpXG4gICAgICAgIHRoaXMuZGVmYXVsdFhyYW5nZSA9IHRoaXMub3B0aW9ucy54cmFuZ2VcbiAgICAgICAgdGhpcy5kYXRhKDxMaW5lVHJhY2tlcj57fSlcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBQbG90IHRoZSB2YWx1ZXMgb2YgYWxsIHggYWNjb3JkaW5nIHRvIHRoZSBmdW5jdGlvblxuICAgICAqIFxuICAgICAqIEBwYXJhbSB4IEEgbGluc3BhY2Ugb2YgeCB2YWx1ZXMgb3ZlciB3aGljaCB0byBwbG90IGEgY3VydmVcbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgYWRkRGF0YUtleV8oY2xhc3NuYW1lOiBzdHJpbmcpIHtcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXNcbiAgICAgICAgaWYgKCFSLmhhcyhjbGFzc25hbWUsIHRoaXMuZGF0YSgpKSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coYEFkZGluZyBrZXk6ICR7Y2xhc3NuYW1lfWApO1xuICAgICAgICAgICAgdGhpcy5kYXRhKClbY2xhc3NuYW1lXSA9IHtcbiAgICAgICAgICAgICAgICBzZWw6IHNlbGYuaW5pdEJhc2VMaW5lKGNsYXNzbmFtZSksXG4gICAgICAgICAgICAgICAgdmFsczogW11cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNsZWFyUGF0aHMoKSB7XG4gICAgICAgIHRoaXMuZGF0YShSLm1hcChkID0+IFIuYXNzb2MoJ3ZhbHMnLCBbXSwgZCksIHRoaXMuZGF0YSgpKSlcbiAgICB9XG5cbiAgICBwbG90UGF0aChkOiBCYWxsSGlzdG9yeSwgc2NhbGU/KSB7XG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuICAgICAgICB0aGlzLmFkZERhdGFLZXlfKGQuY2xhc3NuYW1lKTtcblxuICAgICAgICBjb25zdCBzY2FsZXIgPSAoc2NhbGUgPT0gbnVsbCkgPyB4ID0+IHggOiBzY2FsZVxuXG4gICAgICAgIGNvbnN0IGN1cnJWYWxzID0gdGhpcy5kYXRhKClbZC5jbGFzc25hbWVdO1xuICAgICAgICBjdXJyVmFscy52YWxzLnB1c2goc2NhbGVyKE1hdGguYWJzKGQueCkpKTtcblxuICAgICAgICAvLyBzbGlkaW5nIHgtYXhpc1xuICAgICAgICBjb25zdCBuZXdYcmFuZ2UgPSBbTWF0aC5tYXgoMCwgY3VyclZhbHMudmFscy5sZW5ndGgtdGhpcy5vcHRpb25zLnhyYW5nZVsxXSksIE1hdGgubWF4KGN1cnJWYWxzLnZhbHMubGVuZ3RoLHRoaXMub3B0aW9ucy54cmFuZ2VbMV0pXVxuICAgICAgICB0aGlzLnVwZGF0ZVNjYWxlcyhuZXdYcmFuZ2UpXG4gICAgICAgIHRoaXMuY3JlYXRlUGF0aCgpIC8vIERlcGVuZHMgb24geCBzY2FsZVxuXG5cbiAgICAgICAgY3VyclZhbHMuc2VsLmRhdGEoW2N1cnJWYWxzXSlcbiAgICAgICAgICAgIC5qb2luKFwicGF0aFwiKVxuICAgICAgICAgICAgLmNsYXNzZWQoZC5jbGFzc25hbWUsIHRydWUpXG4gICAgICAgICAgICAuYXR0cihcImRcIiwgZCA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHNlbGYucGF0aChkLnZhbHMpXG4gICAgICAgICAgICB9KVxuICAgIH1cblxuICAgIC8vIExpdmUgdXBkYXRlIHRoZSB4cmFuZ2VcbiAgICB1cGRhdGVTY2FsZXMoeHJhbmdlKSB7XG4gICAgICAgIGNvbnN0IG9wID0gdGhpcy5vcHRpb25zXG4gICAgICAgIHRoaXMuc2NhbGVzLnggPSBkMy5zY2FsZUxpbmVhcigpLmRvbWFpbih4cmFuZ2UpLnJhbmdlKFswLCBvcC53aWR0aF0pLmNsYW1wKHRydWUpXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBpbml0QmFzZUxpbmUoY2xhc3NuYW1lOiBzdHJpbmcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubGF5ZXJzLmJnLmFwcGVuZChcInBhdGhcIilcbiAgICAgICAgICAgIC5jbGFzc2VkKGNsYXNzbmFtZSwgdHJ1ZSlcbiAgICAgICAgICAgIC5jbGFzc2VkKCdsaW5lJywgdHJ1ZSlcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgY3JlYXRlU2NhbGVzKCkge1xuICAgICAgICBjb25zdCBvcCA9IHRoaXMub3B0aW9uc1xuICAgICAgICB0aGlzLnNjYWxlcy54ID0gZDMuc2NhbGVMaW5lYXIoKS5kb21haW4ob3AueHJhbmdlKS5yYW5nZShbMCwgb3Aud2lkdGhdKS5jbGFtcCh0cnVlKVxuICAgICAgICB0aGlzLnNjYWxlcy55ID0gZDMuc2NhbGVMaW5lYXIoKS5kb21haW4ob3AueXJhbmdlKS5yYW5nZShbMCwgb3AuaGVpZ2h0XSkuY2xhbXAodHJ1ZSlcbiAgICB9XG5cbiAgICBpbml0KCkge1xuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICAgICAgY29uc3Qgb3AgPSB0aGlzLm9wdGlvbnM7XG4gICAgICAgIGNvbnN0IHNjYWxlcyA9IHRoaXMuc2NhbGVzO1xuICAgICAgICBjb25zdCBzZWxzID0gdGhpcy5zZWxzO1xuXG4gICAgICAgIHRoaXMuY3JlYXRlU2NhbGVzKClcbiAgICAgICAgdGhpcy5jcmVhdGVQYXRoKClcbiAgICAgICAgdGhpcy5jcmVhdGVBeGVzKClcbiAgICB9XG5cblxuICAgIHByb3RlY3RlZCBjcmVhdGVBeGVzKCkge1xuICAgICAgICBjb25zdCBzZWxzID0gdGhpcy5zZWxzXG4gICAgICAgIGNvbnN0IHNjYWxlcyA9IHRoaXMuc2NhbGVzXG4gICAgICAgIGNvbnN0IG9wID0gdGhpcy5vcHRpb25zXG5cbiAgICAgICAgLy8gQ3JlYXRlIGF4ZXNcbiAgICAgICAgc2Vscy54YXhpcyA9IHRoaXMuYmFzZS5hcHBlbmQoXCJnXCIpXG4gICAgICAgICAgICAuYXR0cihcImNsYXNzXCIsIFwiYXhpcyBheGlzLS14XCIpXG4gICAgICAgICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBTVkcudHJhbnNsYXRlKDAsIG9wLmhlaWdodCAtIGF4aXNPZmZzZXQpKVxuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgLmNhbGwoZDMuYXhpc0JvdHRvbShzY2FsZXMueCkudGlja3MoNCkudGlja0Zvcm1hdChcIlwiKSk7XG5cbiAgICAgICAgc2Vscy55YXhpcyA9IHRoaXMuYmFzZS5hcHBlbmQoXCJnXCIpXG4gICAgICAgICAgICAuYXR0cihcImNsYXNzXCIsIFwiYXhpcyBheGlzLS15XCIpXG4gICAgICAgICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBTVkcudHJhbnNsYXRlKDAsIC0gYXhpc09mZnNldCkpXG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICAuY2FsbChkMy5heGlzTGVmdChzY2FsZXMueSkudGlja3MoNCkudGlja0Zvcm1hdChcIlwiKSk7XG5cbiAgICAgICAgdGhpcy5iYXNlLmFwcGVuZChcInRleHRcIilcbiAgICAgICAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIFNWRy50cmFuc2xhdGUob3Aud2lkdGggLyAyLCBvcC5tYXJnaW4udG9wICsgb3AuaGVpZ2h0ICsgMTApKVxuICAgICAgICAgICAgLnN0eWxlKFwidGV4dC1hbmNob3JcIiwgXCJtaWRkbGVcIilcbiAgICAgICAgICAgIC50ZXh0KFwiVGltZVwiKVxuXG4gICAgICAgIHRoaXMuYmFzZS5hcHBlbmQoXCJ0ZXh0XCIpXG4gICAgICAgICAgICAuc3R5bGUoXCJ0ZXh0LWFuY2hvclwiLCBcIm1pZGRsZVwiKVxuICAgICAgICAgICAgLnRleHQoXCJcXHUwM0I4IC0gXFx1MDNCOCpcIilcbiAgICAgICAgICAgIC5hdHRyKFwieVwiLCBvcC5wYWQubGVmdCAtIG9wLm1hcmdpbi5sZWZ0KVxuICAgICAgICAgICAgLmF0dHIoXCJ4XCIsIG9wLnBhZC50b3AgLSAob3AuaGVpZ2h0IC8gMikpXG4gICAgICAgICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBTVkcucm90YXRlKC05MCkpXG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGNyZWF0ZVBhdGgoKSB7XG4gICAgICAgIHRoaXMucGF0aCA9IGQzLmxpbmU8bnVtYmVyPigpXG4gICAgICAgICAgICAueCgoZDogbnVtYmVyLCBpOiBudW1iZXIpID0+IHRoaXMuc2NhbGVzLngoaSkpXG4gICAgICAgICAgICAueSgoZDogbnVtYmVyLCBpOiBudW1iZXIpID0+IHRoaXMuc2NhbGVzLnkoZCkpXG4gICAgICAgICAgICAuY3VydmUoZDMuY3VydmVMaW5lYXIpXG4gICAgfVxuXG4gICAgZGF0YSgpOiBUXG4gICAgZGF0YSh2YWw6IFQpOiB0aGlzXG4gICAgZGF0YSh2YWw/KSB7XG4gICAgICAgIGlmICh2YWwgPT0gbnVsbCkgcmV0dXJuIHRoaXMuX2RhdGFcbiAgICAgICAgdGhpcy5fZGF0YSA9IHZhbDtcbiAgICAgICAgcmV0dXJuIHRoaXNcbiAgICB9XG5cbiAgICByZXNldFhyYW5nZV8oKTogdGhpcyB7XG4gICAgICAgIHRoaXMub3B0aW9ucy54cmFuZ2UgPSB0aGlzLmRlZmF1bHRYcmFuZ2VcbiAgICAgICAgcmV0dXJuIHRoaXNcbiAgICB9XG59IiwiaW1wb3J0ICogYXMgZDMgZnJvbSAnZDMnXG5pbXBvcnQgeyBiYXNlTG9zcyB9IGZyb20gJy4uL0dvbGZMYW5kc2NhcGVzJ1xuXG5leHBvcnQgY2xhc3MgTWFudWFsVXBkYXRlciB7XG4gICAgZjogKHg6IG51bWJlcikgPT4gbnVtYmVyXG4gICAgZGY6ICh4OiBudW1iZXIpID0+IG51bWJlclxuXG4gICAgcTogbnVtYmVyICAgLy8gMCAtPiAxLCB3aGVyZSAwIGlzIFNHRCBhbmQgMSBpcyBOR0QuIDAuNSBpcyBzcXJ0IE5HRC4gW3N0ZXAgPSAtIGV0YSAqIEggXiAoLTEvcSkgKiBnXSAoSCA9IDAgd2hlbiBxPTApXG4gICAgZXRhOiBudW1iZXIgLy8gYWthICdsZWFybmluZyByYXRlJ1xuXG4gICAgY29uc3RydWN0b3IoZiwgZGYsIHEgPSAwLCBldGEgPSAwLjEpIHtcbiAgICAgICAgdGhpcy5mID0gZjtcbiAgICAgICAgdGhpcy5kZiA9IGRmO1xuICAgICAgICB0aGlzLnEgPSBxO1xuICAgICAgICB0aGlzLmV0YSA9IGV0YTtcbiAgICB9XG5cbiAgICAvLyBDYWxjdWxhdGUgZXJyb3Igc3F1YXJlZCBvZiB0aGUgYmFzZSBmdW5jdGlvblxuICAgIGxvc3MoeDogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIGJhc2VMb3NzKHRoaXMuZih4KSlcbiAgICB9XG5cbiAgICAvLyBHcmFkaWVudCBhdCB4XG4gICAgZ3JhZGllbnQoeDogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZih4KSAqIHRoaXMuZGYoeClcbiAgICB9XG5cbiAgICAvLyBUaGUgcG9zaXRpdmUgc2VtaS1kZWZpbml0ZSBoZXNzaWFuIGF0IHhcbiAgICBwc2RoZXNzKHg6IG51bWJlcik6IG51bWJlciB7XG4gICAgICAgIHJldHVybiBNYXRoLnBvdyh0aGlzLmRmKHgpLCAyKVxuICAgIH1cblxuICAgIHVwZGF0ZU1vZGlmaWVyKHg6IG51bWJlcik6IG51bWJlciB7XG4gICAgICAgIHJldHVybiBNYXRoLnBvdyh0aGlzLmRmKHgpLCAxIC0gKDIgKiB0aGlzLnEpKVxuICAgIH1cblxuICAgIHVwZGF0ZUFtdCh4OiBudW1iZXIpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5mKHgpICogdGhpcy51cGRhdGVNb2RpZmllcih4KVxuICAgIH1cblxuICAgIC8vIFRoZSBhbW91bnQgdG8gdXBkYXRlIGF0IHggZ2l2ZW4gdGhlIGxlYXJuaW5nIHJhdGUgZXRhXG4gICAgc3RlcCh4OiBudW1iZXIpOiBudW1iZXIge1xuICAgICAgICAvLyBDb3VsZCB1c2UgcHNkaGVzcyBpbiB0aGUgZXF1YXRpb24gYmVsb3csIGJ1dCBkdWUgdG8gbnVtZXJpY2FsIGlzc3VlcyB0aGlzIGZvcm11bGF0aW9uIGNvbXB1dGVzIG1vcmUgcmVsaWFibHlcbiAgICAgICAgcmV0dXJuIC0gdGhpcy5ldGEgKiB0aGlzLnVwZGF0ZUFtdCh4KVxuICAgIH1cblxuICAgIC8vIEdldCB0aGUgbmV4dCB4IHZhbHVlIGFmdGVyIHRha2luZyBhIHN0ZXBcbiAgICBuZXh0KHg6IG51bWJlcik6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB4ICsgdGhpcy5zdGVwKHgpXG4gICAgfVxufSJdLCJzb3VyY2VSb290IjoiIn0=
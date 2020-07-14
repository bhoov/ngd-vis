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

/***/ "./src/ts/Landscapes2D.ts":
/*!********************************!*\
  !*** ./src/ts/Landscapes2D.ts ***!
  \********************************/
/*! exports provided: landscapes2d */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "landscapes2d", function() { return landscapes2d; });
/* harmony import */ var numjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! numjs */ "./node_modules/numjs/src/index.js");
/* harmony import */ var numjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(numjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3 */ "./node_modules/d3/index.js");


const landscapes2d = {
    SimpleNet2D: {
        name: "SimpleNet2D",
        //@ts-ignore
        f: (v) => (v.get(0) * v.get(1) - 1),
        df: (v) => numjs__WEBPACK_IMPORTED_MODULE_0__["array"]([v.get(1), v.get(0)]),
        colorScale: d3__WEBPACK_IMPORTED_MODULE_1__["scaleLinear"]()
            .domain([-1, 0, 1.6])
            //@ts-ignore
            .range(["white", "steelblue", "red"])
            //@ts-ignore
            .interpolate(d3__WEBPACK_IMPORTED_MODULE_1__["interpolateRgb"].gamma(2.2)),
        xrange: [0, 1.6],
        yrange: [0, 1.6],
        //@ts-ignore
        loss: x => x,
    },
    Elliptical: {
        name: "Elliptical",
        //@ts-ignore
        f: (v) => numjs__WEBPACK_IMPORTED_MODULE_0__["dot"](numjs__WEBPACK_IMPORTED_MODULE_0__["array"]([[1, 2], [2, 1]]), v),
        //@ts-ignore
        df: (v) => numjs__WEBPACK_IMPORTED_MODULE_0__["array"]([[1, 2], [2, 1]]),
        colorScale: d3__WEBPACK_IMPORTED_MODULE_1__["scaleLinear"]()
            .domain([-1, 0, 1.6])
            //@ts-ignore
            .range(["white", "steelblue", "red"])
            //@ts-ignore
            .interpolate(d3__WEBPACK_IMPORTED_MODULE_1__["interpolateRgb"].gamma(2.2)),
        xrange: [-1, 1],
        yrange: [-1, 1],
        loss: (fv) => numjs__WEBPACK_IMPORTED_MODULE_0__["sum"](numjs__WEBPACK_IMPORTED_MODULE_0__["divide"](numjs__WEBPACK_IMPORTED_MODULE_0__["power"](fv, 2), 2))
    },
};


/***/ }),

/***/ "./src/ts/Updater2D.ts":
/*!*****************************!*\
  !*** ./src/ts/Updater2D.ts ***!
  \*****************************/
/*! exports provided: Updater2D, BlockUpdater2D */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Updater2D", function() { return Updater2D; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockUpdater2D", function() { return BlockUpdater2D; });
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3 */ "./node_modules/d3/index.js");
/* harmony import */ var numjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! numjs */ "./node_modules/numjs/src/index.js");
/* harmony import */ var numjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(numjs__WEBPACK_IMPORTED_MODULE_1__);


// const defaultErrorFunction = (v: Array) => v.get(0) * v.get(1) - 1
const defaultErrorFunction = (v) => {
    //@ts-ignore
    return numjs__WEBPACK_IMPORTED_MODULE_1__["dot"](numjs__WEBPACK_IMPORTED_MODULE_1__["array"]([[1, 2], [2, 1]]), v);
};
const defaultDfFunction = (v) => numjs__WEBPACK_IMPORTED_MODULE_1__["array"]([[1, 2], [2, 1]]);
const defaultStep2Lr = d3__WEBPACK_IMPORTED_MODULE_0__["scaleLinear"]().domain([0, 0.8]).range([0.001, 0.25]);
const defaultLoss = (fv) => numjs__WEBPACK_IMPORTED_MODULE_1__["sum"](numjs__WEBPACK_IMPORTED_MODULE_1__["divide"](numjs__WEBPACK_IMPORTED_MODULE_1__["power"](fv, 2), 2));
class Updater2D {
    constructor(options = {}) {
        // Set Default Options
        this.op = {
            //@ts-ignore
            f: defaultErrorFunction,
            //@ts-ignore
            df: defaultDfFunction,
            q: 0,
            eta: 0.1,
            step2lr: defaultStep2Lr,
            loss: defaultLoss,
        };
        this.updateOptions(options);
    }
    updateOptions(options) {
        Object.keys(options).forEach(k => this.op[k] = options[k]);
    }
    f(val) {
        if (val == null)
            return this.op.f;
        this.op.f = val;
        return this;
    }
    df(val) {
        if (val == null) {
            return this.op.df;
        }
        this.op.df = val;
        return this;
    }
    eta(val) {
        if (val == null) {
            return this.op.eta;
        }
        this.op.eta = val;
        return this;
    }
    q(val) {
        if (val == null) {
            return this.op.q;
        }
        this.op.q = val;
        return this;
    }
    step2lr(val) {
        if (val == null) {
            return this.op.step2lr;
        }
        this.op.step2lr = val;
        return this;
    }
    // Amount to scale size of learning rate arrows
    get lrScale() {
        return this.op.step2lr(this.op.eta);
    }
    sqrtErr(v) {
        // @ts-ignore
        return Math.sqrt(this.absErr(v));
    }
    absErr(v) {
        return Math.abs(this.loss(v));
    }
    loss(v) {
        // Override the loss function if error exists
        // Clarify this for my future self
        return this.op.loss(this.op.f(v));
    }
    eigenvalues(v) {
        //@ts-ignore
        const ex = numjs__WEBPACK_IMPORTED_MODULE_1__["power"](v, 2).sum();
        const ey = numjs__WEBPACK_IMPORTED_MODULE_1__["power"](v, 2).sum();
        return numjs__WEBPACK_IMPORTED_MODULE_1__["array"]([ex, ey]);
    }
    gradient(v) {
        const err = this.loss(v);
        //@ts-ignore
        const df = this.op.df(v);
        const g = numjs__WEBPACK_IMPORTED_MODULE_1__["multiply"](df, err);
        // //@ts-ignore
        // const g: Array = nj.dot(this._df(v), err)
        return g;
    }
    dv(v) {
        const g = this.gradient(v);
        const ev = this.eigenvalues(v);
        const dv = numjs__WEBPACK_IMPORTED_MODULE_1__["divide"](numjs__WEBPACK_IMPORTED_MODULE_1__["multiply"](g, -1), numjs__WEBPACK_IMPORTED_MODULE_1__["abs"](numjs__WEBPACK_IMPORTED_MODULE_1__["power"](ev, this.op.q)));
        return dv;
    }
    lr(v) {
        const dv = this.dv(v);
        const absErr = this.absErr(v);
        const lrScale = this.op.step2lr(this.op.eta);
        const lr = numjs__WEBPACK_IMPORTED_MODULE_1__["multiply"](dv, lrScale).divide(absErr);
        return lr;
    }
    next(v) {
        const dv = this.dv(v);
        const newx = numjs__WEBPACK_IMPORTED_MODULE_1__["add"](v, numjs__WEBPACK_IMPORTED_MODULE_1__["multiply"](dv, this.op.eta));
        return newx;
    }
    nextLr(v) {
        const g = this.lr(v);
        const z = numjs__WEBPACK_IMPORTED_MODULE_1__["add"](v, numjs__WEBPACK_IMPORTED_MODULE_1__["multiply"](g, 3));
        return z;
    }
    // Convert to block diagonal updater
    toBlock() {
        const blockUpdater = new BlockUpdater2D(this.op);
        return blockUpdater;
    }
    // Create a new full updater from this object. Useful if one of the derived classes needs to implement
    toFull() {
        const fullUpdater = new Updater2D(this.op);
        return fullUpdater;
    }
}
class BlockUpdater2D extends Updater2D {
    eigenvalues(v) {
        return numjs__WEBPACK_IMPORTED_MODULE_1__["multiply"](numjs__WEBPACK_IMPORTED_MODULE_1__["power"](this.op.df(v), 2), 2);
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
/* harmony import */ var _vis_GeneralContourPlot__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./vis/GeneralContourPlot */ "./src/ts/vis/GeneralContourPlot.ts");
/* harmony import */ var _util_xd3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./util/xd3 */ "./src/ts/util/xd3.ts");
/* harmony import */ var _vis_GolfHole1D__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./vis/GolfHole1D */ "./src/ts/vis/GolfHole1D.ts");
/* harmony import */ var _vis_GolfLosses__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./vis/GolfLosses */ "./src/ts/vis/GolfLosses.ts");
/* harmony import */ var _vis_GolfXDist__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./vis/GolfXDist */ "./src/ts/vis/GolfXDist.ts");
/* harmony import */ var _vis_GolfBall__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./vis/GolfBall */ "./src/ts/vis/GolfBall.ts");
/* harmony import */ var _vis_SimpleNet__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./vis/SimpleNet */ "./src/ts/vis/SimpleNet.ts");
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ramda */ "./node_modules/ramda/es/index.js");
/* harmony import */ var _util_SimpleEventHandler__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./util/SimpleEventHandler */ "./src/ts/util/SimpleEventHandler.ts");
/* harmony import */ var _vis_ManualUpdater__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./vis/ManualUpdater */ "./src/ts/vis/ManualUpdater.ts");
/* harmony import */ var _GolfLandscapes__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./GolfLandscapes */ "./src/ts/GolfLandscapes.ts");
/* harmony import */ var _Landscapes2D__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Landscapes2D */ "./src/ts/Landscapes2D.ts");
/* harmony import */ var _vis_QuadraticPlots__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./vis/QuadraticPlots */ "./src/ts/vis/QuadraticPlots.ts");
/* harmony import */ var _vis_LossSurface2D__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./vis/LossSurface2D */ "./src/ts/vis/LossSurface2D.ts");
















const toFixed = ramda__WEBPACK_IMPORTED_MODULE_9__["curry"]((ndigits, x) => x.toFixed(ndigits));
const toQ = toFixed(1);
const toEta = toFixed(4);
function plotJaggedLoss2D() {
    const vis = d3__WEBPACK_IMPORTED_MODULE_0__["select"]("#vis-2d-loss");
    const eventHandler = new _util_SimpleEventHandler__WEBPACK_IMPORTED_MODULE_10__["SimpleEventHandler"](vis.node());
    const sels = {
        plot: vis.select("#loss-2d")
    };
    const vizs = {
        plot: new _vis_LossSurface2D__WEBPACK_IMPORTED_MODULE_15__["LossSurface2D"](sels.plot, eventHandler)
    };
}
function plotQuadraticFuncs() {
    const vis = d3__WEBPACK_IMPORTED_MODULE_0__["select"]("#vis-quad");
    const eventHandler = new _util_SimpleEventHandler__WEBPACK_IMPORTED_MODULE_10__["SimpleEventHandler"](vis.node());
    const sels = {
        quadPlot: vis.select("#quad-plot")
    };
    const vizs = {
        quadPlot: new _vis_QuadraticPlots__WEBPACK_IMPORTED_MODULE_14__["QuadraticPlots"](sels.quadPlot, eventHandler)
    };
    vizs.quadPlot.data([1 / 1.4, 1, 1.4]);
}
function plotQuiverGraph() {
    const vis1 = d3__WEBPACK_IMPORTED_MODULE_0__["select"]('#vis1');
    const sels = {
        quiverPlot: vis1.select('#chart'),
        qId: vis1.select('#q-val'),
        etaId: vis1.select('#eta-val'),
        qSlider: vis1.select('#q-slider'),
        etaSlider: vis1.select('#eta-slider'),
        hessType: vis1.select('#hess-type'),
        simpleNet: vis1.select("#simple-net-container"),
    };
    const eventHandler = new _util_SimpleEventHandler__WEBPACK_IMPORTED_MODULE_10__["SimpleEventHandler"](vis1.node());
    const vizs = {
        graph: _vis_GeneralContourPlot__WEBPACK_IMPORTED_MODULE_2__["ContourPlot"].fromLandscape(sels.quiverPlot, eventHandler, _Landscapes2D__WEBPACK_IMPORTED_MODULE_13__["landscapes2d"].Elliptical),
        simpleNet: new _vis_SimpleNet__WEBPACK_IMPORTED_MODULE_8__["SimpleNet"](sels.simpleNet, eventHandler)
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
    // Add center line
    const xrange = Object(_util_xd3__WEBPACK_IMPORTED_MODULE_3__["linspace"])(0.6, 1.6, vizs.graph.options.m);
    const eps = 0.0001;
    const fitLine = x => 1 / (x + eps);
    const centerContour = d3__WEBPACK_IMPORTED_MODULE_0__["line"]()
        .x(d => vizs.graph.scales.x.clamp(true)(d[0]))
        .y(d => vizs.graph.scales.y.clamp(true)(fitLine(d[0])));
    const mainFit = vizs.graph.base
        .append("path")
        .classed("main-fit", true)
        // i doesn't matter, need filler for line to work
        .attr("d", centerContour(xrange.map((x, i) => [x, i])));
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
    // Catch event of step
    eventHandler.bind(_vis_GeneralContourPlot__WEBPACK_IMPORTED_MODULE_2__["ContourPlot"].events.stepAdded, (v) => {
        vizs.simpleNet.setState(v);
    });
}
function plotGolfHole3Ball() {
    const vis2 = d3__WEBPACK_IMPORTED_MODULE_0__["select"]("#vis2");
    const sels = {
        chart: vis2.select('#chart'),
        chartXDist: vis2.select('#chart-xdist'),
        chartLosses: vis2.select('#chart-losses'),
        landscapeSelector: vis2.select('.landscape-select'),
    };
    const eventHandler = new _util_SimpleEventHandler__WEBPACK_IMPORTED_MODULE_10__["SimpleEventHandler"](vis2.node());
    const vizs = {
        graph: new _vis_GolfHole1D__WEBPACK_IMPORTED_MODULE_4__["GolfHole1D"](sels.chart, eventHandler, {}, _util_UId__WEBPACK_IMPORTED_MODULE_1__["UId"].uid()),
        chartXDist: new _vis_GolfXDist__WEBPACK_IMPORTED_MODULE_6__["GolfXDist"](sels.chartXDist, eventHandler),
        chartLosses: new _vis_GolfLosses__WEBPACK_IMPORTED_MODULE_5__["GolfLosses"](sels.chartLosses, eventHandler),
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
    const defaultLandscape = _GolfLandscapes__WEBPACK_IMPORTED_MODULE_12__["landscapes"][defaults.landscape];
    //@ts-ignore
    const defaultBalls = d3__WEBPACK_IMPORTED_MODULE_0__["zip"](defaults.qs, defaults.etas, defaults.classNames).map((x) => new _vis_GolfBall__WEBPACK_IMPORTED_MODULE_7__["GolfBall"](new _vis_ManualUpdater__WEBPACK_IMPORTED_MODULE_11__["ManualUpdater"](defaultLandscape.f, defaultLandscape.df, x[0], x[1]), x[2]));
    vizs.graph.data(defaultBalls);
    // Attach golfball info to loss tracker
    eventHandler.bind('loss-click', (e) => {
        vizs.chartXDist.clearPaths();
        vizs.chartLosses.clearPaths();
    });
    // Configure html page to work with defaults
    sels.landscapeSelector.property('value', defaults.landscape);
    vizs.graph.landscape(_GolfLandscapes__WEBPACK_IMPORTED_MODULE_12__["landscapes"][defaults.landscape]);
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
        vizs.graph.landscape(_GolfLandscapes__WEBPACK_IMPORTED_MODULE_12__["landscapes"][v]);
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
    const eventHandler = new _util_SimpleEventHandler__WEBPACK_IMPORTED_MODULE_10__["SimpleEventHandler"](vis3.node());
    const vizs = {
        graph: new _vis_GolfHole1D__WEBPACK_IMPORTED_MODULE_4__["GolfHole1D"](sels.chart, eventHandler, { maxIter: 1.5e3 }, _util_UId__WEBPACK_IMPORTED_MODULE_1__["UId"].uid()),
        chartLosses: new _vis_GolfLosses__WEBPACK_IMPORTED_MODULE_5__["GolfLosses"](sels.chartLosses, eventHandler),
        chartXDist: new _vis_GolfXDist__WEBPACK_IMPORTED_MODULE_6__["GolfXDist"](sels.chartXDist, eventHandler)
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
    vizs.graph.data([new _vis_GolfBall__WEBPACK_IMPORTED_MODULE_7__["GolfBall"](new _vis_ManualUpdater__WEBPACK_IMPORTED_MODULE_11__["ManualUpdater"](_GolfLandscapes__WEBPACK_IMPORTED_MODULE_12__["landscapes"].hole.f, _GolfLandscapes__WEBPACK_IMPORTED_MODULE_12__["landscapes"].hole.df, defaults.q, defaults.eta), "golf-ball")]);
    // const etaRange = [-5, 2].map(x => Math.pow(10, x))
    const etaRange = [-3, 0].map(x => Math.pow(10, x));
    const scales = {
        q: d3__WEBPACK_IMPORTED_MODULE_0__["scaleLinear"]().range([0, 10]).domain([0, 1]),
        eta: d3__WEBPACK_IMPORTED_MODULE_0__["scaleLog"]().range([1, 1000]).domain(etaRange).base(10)
    };
    // Initialize graph parameters to match the defaults
    vizs.graph.landscape(_GolfLandscapes__WEBPACK_IMPORTED_MODULE_12__["landscapes"][defaults.landscape]);
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
        vizs.graph.landscape(_GolfLandscapes__WEBPACK_IMPORTED_MODULE_12__["landscapes"][v]);
        vizs.graph.dataFromBase(vizs.graph.dataToBase_());
        runningStreams = assignStreams(vizs.graph, runningStreams);
    });
    runningStreams = assignStreams(vizs.graph, runningStreams);
}
function testing() {
    console.log("TEST");
    // let A = nj.array([[1,2], [2,1]])
    // let v = nj.array([1,3])
    // const up = new Updater2D()
    // console.log("LR: ", up.lr(v));
    // console.log("Gradient: ", up.gradient(v));
    // console.log("ERR: ", up._f(v));
    // console.log("NJ Array Inception: ", nj.array(v))
    // // let v = nj.array([1,2])
    // let v2 = nj.array([4,5])
    // console.log(v);
    // //@ts-ignore
    // console.log(nj.dot(A, v));
    console.log("END TEST");
}
function main() {
    testing();
    // console.log(nj.multiply(v, v2));
    plotQuadraticFuncs();
    plotQuiverGraph();
    // plotGolfHole3Ball();
    // plotGolfHoleSlider();
    // plotJaggedLoss2D();
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
/**
 *
 * @param nx Number of gridpoints along x
 * @param ny Number of gridpoints along y
 * @param xrange Range along x axis
 * @param yrange Range along y axis
 * @param func (x,y) => number, function to plot
 */
function getContourValues(nx, ny, xrange, yrange, func) {
    let values = new Array(nx * ny);
    for (var j = 0.5, k = 0; j < ny; ++j) {
        for (var i = 0.5; i < nx; ++i, ++k) {
            const xval = ((i / nx) * (xrange[1] - xrange[0])) + xrange[0];
            const yval = (1 - (j / ny)) * (yrange[1] - yrange[0]) + yrange[0];
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

/***/ "./src/ts/util/HTMLVisComponent.ts":
/*!*****************************************!*\
  !*** ./src/ts/util/HTMLVisComponent.ts ***!
  \*****************************************/
/*! exports provided: HTMLVisComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTMLVisComponent", function() { return HTMLVisComponent; });
/* harmony import */ var _VisComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VisComponent */ "./src/ts/util/VisComponent.ts");

class HTMLVisComponent extends _VisComponent__WEBPACK_IMPORTED_MODULE_0__["VisComponent"] {
    constructor(d3parent, eventHandler, options = {}, ID = 0) {
        super(d3parent, eventHandler, ID);
        this.initHTML(options);
    }
    /**
     * Must be called immediately after the `super()` constructor call of inhereting classes
     *
     * - Creates `base` attribute on parent
     * - Add additional static elements defined in `init()`
     */
    initHTML(options = {}) {
        this.updateOptions(options);
        this.base = this.parent.append('div');
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
    initSVG(options = {}, defaultLayers = ["bg", "main", "fg"]) {
        this.updateOptions(options);
        const op = this.options;
        op.width = op.maxWidth - (op.margin.left + op.margin.right);
        op.height = op.maxHeight - (op.margin.top + op.margin.bottom);
        this.svg = this.parent.append('svg')
            .attr("width", "100%")
            .attr("height", "100%")
            .attr("viewBox", `0 0 ${op.width + op.margin.left + op.margin.right} ${op.height + op.margin.top + op.margin.bottom}`)
            .append('g')
            .attr("transform", _SVGplus__WEBPACK_IMPORTED_MODULE_1__["SVG"].translate(op.margin.left, op.margin.top));
        // this.svg = SVG.addSVG(this.parent, op.width, op.height, op.margin)
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

/***/ "./src/ts/vis/GeneralContourPlot.ts":
/*!******************************************!*\
  !*** ./src/ts/vis/GeneralContourPlot.ts ***!
  \******************************************/
/*! exports provided: ContourPlot */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContourPlot", function() { return ContourPlot; });
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3 */ "./node_modules/d3/index.js");
/* harmony import */ var _util_xd3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/xd3 */ "./src/ts/util/xd3.ts");
/* harmony import */ var _util_SVGVisComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/SVGVisComponent */ "./src/ts/util/SVGVisComponent.ts");
/* harmony import */ var _util_SVGplus__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/SVGplus */ "./src/ts/util/SVGplus.ts");
/* harmony import */ var _plotting__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../plotting */ "./src/ts/plotting.ts");
/* harmony import */ var _Updater2D__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Updater2D */ "./src/ts/Updater2D.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var numjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! numjs */ "./node_modules/numjs/src/index.js");
/* harmony import */ var numjs__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(numjs__WEBPACK_IMPORTED_MODULE_8__);









const EVENTS = {
    stepAdded: "SimpleNet_StepAdded"
};
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
            n: 200,
            m: 200,
            circleEvery: 4,
            updater: null,
            xlabel: "w0",
            ylabel: "w1",
            title: null,
            //@ts-ignore
            colorScale: d3__WEBPACK_IMPORTED_MODULE_0__["scaleLinear"]()
                .domain([0, 1.4])
                //@ts-ignore
                .range(["steelblue", "white"])
                //@ts-ignore
                .interpolate(d3__WEBPACK_IMPORTED_MODULE_0__["interpolateRgb"].gamma(2.2)),
            maxTick: 1000,
            interval: 10,
        };
        this.sels = {};
        // Other
        this._curr = {
            currLoc: numjs__WEBPACK_IMPORTED_MODULE_8__["array"]([0.1, 0.2]),
            step: 0,
            ticker: null,
        };
        super.initSVG(options);
        this.base.classed(this.cssname, true);
        this.options.updater = options.updater == null ? new _Updater2D__WEBPACK_IMPORTED_MODULE_5__["Updater2D"]() : options.updater;
        this.initPlot();
    }
    static fromLandscape(d3parent, eventHandler, t) {
        console.log("From Landscape");
        const updater = new _Updater2D__WEBPACK_IMPORTED_MODULE_5__["Updater2D"](t);
        const newOptions = Object.assign(Object.assign({}, t), { updater });
        return new ContourPlot(d3parent, eventHandler, newOptions);
    }
    linspace() {
        const op = this.options;
        const linspaceX = Object(_util_xd3__WEBPACK_IMPORTED_MODULE_1__["linspace"])(op.xrange[0], op.xrange[1], op.n);
        const linspaceY = Object(_util_xd3__WEBPACK_IMPORTED_MODULE_1__["linspace"])(op.yrange[0], op.yrange[1], op.m);
        return d3__WEBPACK_IMPORTED_MODULE_0__["zip"](linspaceX, linspaceY);
    }
    setUpdater(name) {
        const op = this.options;
        if (name == 'block') {
            op.updater = op.updater.toBlock();
        }
        else if (name == 'full') {
            op.updater = op.updater.toFull();
        }
        else {
            console.log("Please enter a valid input as updater");
        }
        this.updateQuivers();
    }
    get scales() {
        const op = this.options;
        return {
            x: d3__WEBPACK_IMPORTED_MODULE_0__["scaleLinear"]().domain(op.xrange).range([0, op.width]),
            y: d3__WEBPACK_IMPORTED_MODULE_0__["scaleLinear"]().domain(op.yrange).range([op.height, 0]),
            contours: d3__WEBPACK_IMPORTED_MODULE_0__["contours"]().size([op.n, op.m]),
            curve: d3__WEBPACK_IMPORTED_MODULE_0__["curveCatmullRom"].alpha(0.5),
            color: op.colorScale
        };
    }
    plotContours() {
        const self = this;
        const op = this.options;
        const scales = this.scales;
        // const contourFunc = (x, y) => this.updater.absErr(nj.array([x, y]))
        const contourFunc = (x, y) => {
            const loss = op.updater.loss(numjs__WEBPACK_IMPORTED_MODULE_8__["array"]([x, y]));
            return loss;
        };
        const vals = Object(_plotting__WEBPACK_IMPORTED_MODULE_4__["getContourValues"])(op.n, op.m, op.xrange, op.yrange, contourFunc);
        let thresholds = Object(_util_xd3__WEBPACK_IMPORTED_MODULE_1__["linspace"])(d3__WEBPACK_IMPORTED_MODULE_0__["min"](vals), d3__WEBPACK_IMPORTED_MODULE_0__["max"](vals), 20);
        const contourVals = scales.contours.thresholds(thresholds)(vals);
        const contourGroup = this.base.append('g').attr('id', 'contour-group');
        const contours = contourGroup.selectAll("path.contour")
            .data(contourVals);
        contours.join("path")
            .attr("class", "contour")
            .attr("d", d3__WEBPACK_IMPORTED_MODULE_0__["geoPath"](d3__WEBPACK_IMPORTED_MODULE_0__["geoIdentity"]().scale(op.width / op.n)))
            .attr("fill", d => {
            return scales.color(d.value);
        })
            .classed("not-fit", true);
    }
    addStep(v, prev = null) {
        const self = this;
        const op = this.options;
        const scales = this.scales;
        const sels = this.sels;
        const cx = scales.x.clamp(true)(v.get(0));
        const cy = scales.y.clamp(true)(v.get(1));
        if (prev != null) {
            this.base.append('line')
                .attr('x1', scales.x(prev.get(0)))
                .attr('y1', scales.y(prev.get(1)))
                .attr('x2', cx)
                .attr('y2', cy)
                .classed('descending-line', true);
        }
        // Check border conditions
        if (v.get(0) >= op.xrange[1] || v.get(1) >= op.yrange[1]) {
            this._curr.ticker.unsubscribe();
            return v;
        }
        if (((this._curr.step % op.circleEvery) == 0) || (prev == null)) {
            sels.circle = this.base.append('circle')
                .attr('cx', cx)
                .attr('cy', cy)
                .attr('r', 2)
                .classed('descending-point', true);
        }
        this._curr.step += 1;
        this.eventHandler.trigger(EVENTS.stepAdded, v);
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
        const op = this.options;
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
        this._curr.ticker = Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["interval"])(op.interval).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["startWith"])(prep()), 
        //@ts-ignore
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["scan"])(v => op.updater.next(v), self.curr()), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["take"])(op.maxTick)).subscribe(subObj);
    }
    intoVis(v) {
        return { x: this.scales.x(v.get(0)), y: this.scales.y(v.get(1)) };
    }
    intoMath(v) {
        return { x: this.scales.x.invert(v.x), y: this.scales.y.invert(v.y) };
    }
    updateQuivers() {
        const self = this;
        const op = this.options;
        const sels = this.sels;
        const scales = this.scales;
        // Modify arrows inplace
        sels.arrows.forEach(arrow => {
            const pt = this.intoMath({
                x: +arrow.attr('x1'),
                y: +arrow.attr('y1')
            });
            const v = numjs__WEBPACK_IMPORTED_MODULE_8__["array"]([pt.x, pt.y]);
            const pt2 = op.updater.nextLr(v);
            arrow.attr('x2', scales.x(pt2.get(0)))
                .attr('y2', scales.y(pt2.get(1)));
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
            const pt2 = op.updater.nextLr(numjs__WEBPACK_IMPORTED_MODULE_8__["array"]([pt.x, pt.y]));
            //@ts-ignore
            const arrow = _util_SVGplus__WEBPACK_IMPORTED_MODULE_3__["SVG"].insertArrow(quiverGroup, scales.x(pt.x), scales.y(pt.y), scales.x(pt2.get(0)), scales.y(pt2.get(1)), color, width);
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
            .classed("axis-label", true)
            .attr("text-anchor", "middle")
            .attr("class", "titles")
            .attr("transform", _util_SVGplus__WEBPACK_IMPORTED_MODULE_3__["SVG"].translate(op.width / 2, op.height + op.pad))
            .text(op.xlabel);
        sels.ylabel = this.base.append("text")
            .classed("axis-label", true)
            .attr("text-anchor", "middle")
            .attr("class", "titles")
            .attr("transform", _util_SVGplus__WEBPACK_IMPORTED_MODULE_3__["SVG"].translate(-op.pad, op.height / 2) + _util_SVGplus__WEBPACK_IMPORTED_MODULE_3__["SVG"].rotate(-90))
            .text(op.ylabel);
        sels.title = this.base.append("text")
            .classed("axis-label", true)
            .attr("text-anchor", "middle")
            .attr("class", "titles")
            .attr("transform", _util_SVGplus__WEBPACK_IMPORTED_MODULE_3__["SVG"].translate(op.width / 2, -op.pad / 2))
            .text(op.title);
        // Create click behavior
        this.base.on('click', function () {
            if (self._curr.ticker != undefined) {
                self._curr.ticker.unsubscribe();
            }
            const coords = d3__WEBPACK_IMPORTED_MODULE_0__["mouse"](this);
            self._curr.step = 0;
            self.curr([scales.x.invert(coords[0]), scales.y.invert(coords[1])]);
            // if (self.curr().x > 0 && self.curr().y > 0 && self.curr().x < (op.xrange[1] - 0.1) && self.curr().y < (op.yrange[1] - 0.1)) {
            // if (self.curr().get(0) > 0 && self.curr().get(1) > 0) {
            self.addStep(self.curr());
            self.clearCircles();
            self.plotDescent();
            // }
        });
    }
    curr(val) {
        if (val == null) {
            return this._curr.currLoc;
        }
        this._curr.currLoc = numjs__WEBPACK_IMPORTED_MODULE_8__["array"](val);
        return this;
    }
    data(val) {
        if (val == null)
            return this._data;
        this._data = val;
        return this;
    }
    q(val) {
        const op = this.options;
        if (val == null) {
            return op.updater.q();
        }
        op.updater.q(val);
        this.updateQuivers();
        return this;
    }
    eta(val) {
        const op = this.options;
        if (val == null) {
            return op.updater.eta();
        }
        op.updater.eta(val);
        this.updateQuivers();
        return this;
    }
}
ContourPlot.events = EVENTS;


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

/***/ "./src/ts/vis/LossSurface2D.ts":
/*!*************************************!*\
  !*** ./src/ts/vis/LossSurface2D.ts ***!
  \*************************************/
/*! exports provided: jaggedLoss, LossSurface2D */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "jaggedLoss", function() { return jaggedLoss; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LossSurface2D", function() { return LossSurface2D; });
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3 */ "./node_modules/d3/index.js");
/* harmony import */ var _util_xd3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/xd3 */ "./src/ts/util/xd3.ts");
/* harmony import */ var _util_SVGVisComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/SVGVisComponent */ "./src/ts/util/SVGVisComponent.ts");
/* harmony import */ var _util_SVGplus__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/SVGplus */ "./src/ts/util/SVGplus.ts");
/* harmony import */ var _plotting__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../plotting */ "./src/ts/plotting.ts");





function jaggedLoss(x1, x2) {
    const freqs = Object(_util_xd3__WEBPACK_IMPORTED_MODULE_1__["linspace"])(-2, 3, 7).map(x => Math.exp(x));
    const aa = freqs.map(x => 1 / x);
    let y1 = x1, y2 = x2;
    freqs.forEach((h, m) => {
        y1 = aa[m] * Math.sin(h * x2) + y1;
        y2 = aa[m] * Math.cos(h * x1) + y2;
    });
    const s1 = freqs.reduce((acc, h, m) => (aa[m] * Math.sin(h * y1)) + acc, 0);
    const c1 = freqs.reduce((acc, h, m) => (aa[m] * Math.cos(h * y1)) + acc, 0);
    const s2 = freqs.reduce((acc, h, m) => (aa[m] * Math.sin(h * y2)) + acc, 0);
    const c2 = freqs.reduce((acc, h, m) => (aa[m] * Math.cos(h * y2)) + acc, 0);
    const z1 = y1 * s2 + c1 * y2;
    const z2 = s1 * y2 + y1 * c2;
    return (Math.pow(z1, 2) + Math.pow(z2, 2));
}
const EVENTS = {
    stepAdded: "SimpleNet_StepAdded"
};
class LossSurface2D extends _util_SVGVisComponent__WEBPACK_IMPORTED_MODULE_2__["SVGVisComponent"] {
    constructor(d3parent, eventHandler, options = {}) {
        super(d3parent, eventHandler, options);
        this.cssname = "simple-graph";
        this.options = {
            maxWidth: 450,
            maxHeight: 500,
            margin: { top: 50, right: 75, bottom: 125, left: 50 },
            pad: 30,
            xrange: [0, 8],
            yrange: [0, 8],
            n: 100,
            m: 100,
        }; // #state
        this.scales = {};
        this.sels = {};
        super.initSVG(this.options);
        this.base.classed(this.cssname, true);
        this.initPlot();
    }
    plotContours() {
        const self = this;
        const op = this.options;
        const scales = this.scales;
        const contourFunc = jaggedLoss;
        const vals = Object(_plotting__WEBPACK_IMPORTED_MODULE_4__["getContourValues"])(op.n, op.m, op.xrange, op.yrange, contourFunc);
        let thresholds = Object(_util_xd3__WEBPACK_IMPORTED_MODULE_1__["linspace"])(d3__WEBPACK_IMPORTED_MODULE_0__["min"](vals), d3__WEBPACK_IMPORTED_MODULE_0__["max"](vals), 25);
        scales.color = d3__WEBPACK_IMPORTED_MODULE_0__["scaleLinear"]().domain(d3__WEBPACK_IMPORTED_MODULE_0__["extent"](vals)).range([0, 1]).interpolate(() => d3__WEBPACK_IMPORTED_MODULE_0__["interpolateBlues"]);
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
            .classed('not-fit', d => {
            return true;
        });
    }
    intoVis(v) {
        return { x: this.scales.x(v.x), y: this.scales.y(v.y) };
    }
    intoMath(v) {
        return { x: this.scales.x.invert(v.x), y: this.scales.y.invert(v.y) };
    }
    initPlot() {
        // Initialize plots
        this.plotContours();
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
        // sels.xlabel = this.base.append("text")
        //     .text("w0")
        //     .attr("class", "titles")
        //     .attr("transform", SVG.translate(op.width / 2, op.height + op.pad))
        // sels.ylabel = this.base.append("text")
        //     .text("w1")
        //     .attr("class", "titles")
        //     .attr("transform", SVG.translate(-op.pad, op.height / 2) + SVG.rotate(-90))
    }
    data(val) {
        if (val == null)
            return this._data;
        this._data = val;
        return this;
    }
}
LossSurface2D.events = EVENTS;


/***/ }),

/***/ "./src/ts/vis/ManualUpdater.ts":
/*!*************************************!*\
  !*** ./src/ts/vis/ManualUpdater.ts ***!
  \*************************************/
/*! exports provided: ManualUpdater, ManualUpdater2D */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManualUpdater", function() { return ManualUpdater; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManualUpdater2D", function() { return ManualUpdater2D; });
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
class ManualUpdater2D {
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


/***/ }),

/***/ "./src/ts/vis/QuadraticPlots.ts":
/*!**************************************!*\
  !*** ./src/ts/vis/QuadraticPlots.ts ***!
  \**************************************/
/*! exports provided: QuadraticPlots */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuadraticPlots", function() { return QuadraticPlots; });
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3 */ "./node_modules/d3/index.js");
/* harmony import */ var _util_xd3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/xd3 */ "./src/ts/util/xd3.ts");
/* harmony import */ var _util_SVGVisComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/SVGVisComponent */ "./src/ts/util/SVGVisComponent.ts");
/* harmony import */ var _util_SVGplus__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/SVGplus */ "./src/ts/util/SVGplus.ts");
/* harmony import */ var _ManualUpdater__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ManualUpdater */ "./src/ts/vis/ManualUpdater.ts");





class QuadraticPlots extends _util_SVGVisComponent__WEBPACK_IMPORTED_MODULE_2__["SVGVisComponent"] {
    constructor(d3parent, eventHandler, options = {}, ID = 0) {
        super(d3parent, eventHandler, options, ID);
        this.cssname = "quadratic-plots";
        this.options = {
            // options  = { 
            margin: { top: 0, right: 0, bottom: 40, left: 0 },
            maxWidth: 400,
            maxHeight: 250,
            xRange: [-3, 3],
            yRange: [-0.05, 8.82],
        };
        this.sels = {};
        this.maskId = `line-mask-${this.ID}`;
        super.initSVG(options); // Calls init in this class
        this.base.classed(this.cssname, true);
    }
    get toPxScales() {
        const op = this.options;
        return {
            x: d3__WEBPACK_IMPORTED_MODULE_0__["scaleLinear"]()
                .domain(op.xRange)
                .range([0, op.width]),
            y: d3__WEBPACK_IMPORTED_MODULE_0__["scaleLinear"]()
                .domain(op.yRange)
                .range([op.height, 0]),
        };
    }
    intoPx(v) {
        return { x: this.toPxScales.x(v.x), y: this.toPxScales.y(v.y) };
    }
    // Take a vector in the coordinate system and return it to the math coordinates
    intoMath(v) {
        return { x: this.toPxScales.x.invert(v.x), y: this.toPxScales.y.invert(v.y) };
    }
    // Turn a number into a vector
    num2vec(x) {
        const op = this.options;
        // return { x: x, y: op.landscape.loss(x) }
        return { x: x, y: Math.pow(x, 2) };
    }
    lineMaker(f) {
        return d3__WEBPACK_IMPORTED_MODULE_0__["line"]()
            .x((d, i) => this.toPxScales.x(d))
            .y((d, i) => this.toPxScales.y(f(d)));
    }
    init() {
        const self = this;
        const op = this.options;
        const sels = this.sels;
        this.base
            .attr('width', op.maxWidth)
            .attr('height', op.maxHeight);
        Object.keys(this.layers).forEach(k => {
            console.log("Running on layer: ", k);
            const g = this.layers[k]
                .attr("transform", `${_util_SVGplus__WEBPACK_IMPORTED_MODULE_3__["SVG"].translate(op.margin.left, op.margin.top)}`);
        });
        this.layers.bg.append('rect')
            .classed("bg-rect", true)
            .attr('width', op.width)
            .attr('height', op.height);
        // const f = (x: number) => 0.5 * (x ** 2)
        const fac = 1.4;
        const aa = [1 / fac, 1, fac];
        // const aa = [fac];
        const updaters = aa.map(a => {
            return new _ManualUpdater__WEBPACK_IMPORTED_MODULE_4__["ManualUpdater"]((x) => a * x, (x) => a, 1, 0.01);
        });
        sels.paths = updaters.map(u => {
            return this.layers.main.append("path")
                .datum(Object(_util_xd3__WEBPACK_IMPORTED_MODULE_1__["linspace"])(op.xRange[0], op.xRange[1], 100))
                .classed("line-path", true)
                .attr('d', d => {
                return this.lineMaker(x => u.loss(x))(d);
            });
        });
        // Cursor Line Logic
        sels.cursorLine = this.base.append('path')
            .classed('cursor-line', true)
            .classed('hidden', true);
        sels.cursorDots = updaters.map(u => {
            return this.base.append('circle')
                .classed("cursor-dot", true)
                .attr("r", "3px");
        });
        this.base.on('mousemove', function () {
            const mouse = d3__WEBPACK_IMPORTED_MODULE_0__["mouse"](this);
            sels.cursorLine.attr('d', d3__WEBPACK_IMPORTED_MODULE_0__["line"]()([[mouse[0], 0], [mouse[0], op.height]]));
            // sels.cursorDots.forEach((c, i) => {
            //     c.attr('cx', mouse[0])
            //         .attr('cy', () => self.toPxScales.y(updaters[i].loss(self.toPxScales.x.invert(mouse[0]))))
            // })
        });
        this.base.on('mouseout', () => {
            sels.cursorLine.classed("hidden", true);
            if (self.timer == null)
                sels.cursorDots.forEach(c => c.classed("hidden", true));
        });
        this.base.on('mouseover', () => {
            sels.cursorLine.classed("hidden", false);
            if (self.timer == null)
                sels.cursorDots.forEach(c => c.classed("hidden", false));
        });
        this.base.on('click', function () {
            const mouse = d3__WEBPACK_IMPORTED_MODULE_0__["mouse"](this);
            const val = self.toPxScales.x.invert(mouse[0]);
            sels.cursorDots.forEach((c, i) => {
                const u = updaters[i];
                const xClick = self.toPxScales.x.invert(mouse[0]);
                c.attr('cx', mouse[0]);
                c.attr('cy', self.toPxScales.y(u.loss(xClick)));
            });
            if (self.timer == null) {
                self.timer = d3__WEBPACK_IMPORTED_MODULE_0__["interval"]((time) => {
                    sels.cursorDots.forEach((c, i) => {
                        const u = updaters[i];
                        const xNow = self.toPxScales.x.invert(+c.attr('cx'));
                        const xNext = u.next(xNow);
                        c.attr('cx', self.toPxScales.x(xNext));
                        c.attr('cy', self.toPxScales.y(u.loss(xNext)));
                    });
                }, 10);
            }
            else {
                self.timer.stop();
                self.timer = null;
            }
        });
    }
    _render(data) {
        // this.plotFuncs
    }
    data(val) {
        if (val == null)
            return this._data;
        return this;
    }
}


/***/ }),

/***/ "./src/ts/vis/SimpleNet.ts":
/*!*********************************!*\
  !*** ./src/ts/vis/SimpleNet.ts ***!
  \*********************************/
/*! exports provided: SimpleNet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimpleNet", function() { return SimpleNet; });
/* harmony import */ var _util_HTMLVisComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/HTMLVisComponent */ "./src/ts/util/HTMLVisComponent.ts");
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3 */ "./node_modules/d3/index.js");


class SimpleNet extends _util_HTMLVisComponent__WEBPACK_IMPORTED_MODULE_0__["HTMLVisComponent"] {
    constructor(d3parent, eventHandler, options = {}, ID = 0) {
        super(d3parent, eventHandler, options, ID);
        this.cssname = "simple-net-svg";
        this.options = {};
        this.sels = {};
        this.base.classed(this.cssname, true);
        super.initHTML();
        this.init();
    }
    get strokeWidthScale() {
        return d3__WEBPACK_IMPORTED_MODULE_1__["scaleLinear"]().range([4.2, 60]).domain([0, 1.7]);
    }
    get opacityScale() {
        return d3__WEBPACK_IMPORTED_MODULE_1__["scaleLinear"]().range([0.2, 1]).domain([0, 1.7]);
    }
    init() {
        const sels = this.sels;
        const ops = this.options;
        const htmlContent = `
    <svg viewBox="0 0 2660 555" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="5">
    <g id="net-value">
      <path id="net-val-1-rect" d="M1998.8 67.6A65.8 65.8 0 001933.1 2h-163.5a65.8 65.8 0 00-65.8 65.7v27.8a65.8 65.8 0 0065.8 65.8H1933a65.8 65.8 0 0065.7-65.8V67.6z" fill="#fff" stroke="#000" stroke-width="3.8"/>
      <text id="net-val-1" x="1826.3" y="112.4" font-family="'IBMPlexThai-SemiBold','IBM Plex Thai',sans-serif" font-weight="600" font-size="83.3" text-anchor="middle">
        0
      </text>
      <path id="net-val-0-rect" d="M945.8 67.6A65.8 65.8 0 00880 2H716.5a65.8 65.8 0 00-65.7 65.7v27.8a65.8 65.8 0 0065.7 65.8h163.6a65.8 65.8 0 0065.7-65.8V67.6z" fill="#fff" stroke="#000" stroke-width="3.8"/>
      <text id="net-val-0" x="773.3" y="112.4" font-family="'IBMPlexThai-SemiBold','IBM Plex Thai',sans-serif" font-weight="600" font-size="83.3" text-anchor="middle">
        0
      </text>
    </g>
    <g id="net-node" fill="#ebebeb">
      <circle cx="276.2" cy="278.1" r="276.2"/>
      <circle cx="1331.1" cy="278.1" r="276.2"/>
      <circle cx="2383.1" cy="278.1" r="276.2"/>
    </g>
    <g id="net-line">
      <path id="net-line-0" d="M552.5 280.2h502.4a2 2 0 000-4.2H552.5a2 2 0 000 4.2z" fill="none" stroke="#000" stroke-width="4.2" stroke-miterlimit="1.5"/>
      <path id="net-line-1" d="M1607.3 278.1h499.5" fill="none" stroke="#000" stroke-width="4.2" stroke-miterlimit="1.5"/>
    </g>
    <path id="MJX-4-TEX-I-77" d="M806.2 405.3c0-2.3 1-4.4 3-6.3 2.1-2 4.4-3 6.8-3 2 0 3.8.9 5.4 2.8 1.6 2 2.5 5 2.6 9.2 0 3.2-1 9.4-3.1 18.6-1.6 6-3 11-4.4 14.9a96 96 0 01-5.6 13 30 30 0 01-8.9 11 19.4 19.4 0 01-11.6 3.8c-4.8 0-9-.9-12.6-2.6-3.7-1.7-6.3-4-8-7l-.4.7c-4.5 6-9.8 8.9-16.2 8.9a33.2 33.2 0 01-15.7-4 15.4 15.4 0 01-6-6.4 21.2 21.2 0 01-2.2-10.1 73 73 0 015.5-23.6c3.7-10 5.5-16.2 5.6-19V404c0-.3-.2-.7-.6-1.1-.4-.5-1-.7-1.8-.7h-.6c-2.5 0-4.8 1-6.8 3.1-2 2-3.7 4.3-4.9 6.6a42.7 42.7 0 00-2.7 6.8c-.6 2.2-1 3.3-1.3 3.6-.2.2-1 .3-2.6.3H717c-.7-.7-1-1.1-1-1.5a71.6 71.6 0 015-12.8c1.6-3 4-5.9 7.1-8.3 3.1-2.5 6.6-3.7 10.5-3.7 4.6 0 8.2 1.3 10.7 4 2.4 2.7 3.7 5.8 3.7 9.4 0 1.9-1.8 7.7-5.3 17.4a71.3 71.3 0 00-5.4 22.5c0 5 1.2 8.4 3.4 10.5a13 13 0 008.6 3.2c4.6 0 8.7-3.3 12.3-9.9l.8-1.4v-5.2l.1-1.3.2-1.1.1-1.5a86.4 86.4 0 001-4.8c.1-.9.4-2.2 1-3.9.5-1.7 1-3.4 1.3-5.2.3-1.7.9-4 1.8-6.9 3-12.3 4.9-18.9 5.3-19.9 1.4-2.9 3.7-4.3 7-4.3 2 0 3.4.5 4.1 1.6.8 1 1.2 2 1.3 3 0 1.5-1.5 8.3-4.7 20.7a588.2 588.2 0 00-5.1 21.4 35 35 0 00-.4 5.6v1.1c0 1.7.2 3.2.5 4.7.4 1.5 1.4 3.1 3.1 4.7 1.7 1.6 4.1 2.5 7.3 2.6 7.6 0 13.7-6.6 18.2-19.7a100 100 0 005.2-20.2c0-3.6-.7-6.4-2.1-8.4-1.4-2-2.8-3.8-4.2-5.2a6.3 6.3 0 01-2.1-4.5z" fill-rule="nonzero"/>
    <path id="MJX-4-TEX-N-30" d="M839.1 445.9c4.3-6.2 10.1-9.3 17.5-9.3a21.4 21.4 0 0119.9 13.5c2.8 6.3 4.2 15 4.2 26 0 11.9-1.6 20.9-5 27.1a19.5 19.5 0 01-6.2 7.7 20.7 20.7 0 01-12.8 4.3c-2 0-4-.2-6-.7a20 20 0 01-6.9-3.6c-2.7-2-4.7-4.6-6.3-7.7-3.2-6.2-4.9-15.2-4.9-27 0-13.3 2.2-23.4 6.5-30.3zm25.7-1.4a10.9 10.9 0 00-16.3 0c-2 2-3.2 4.7-3.8 8.2a162 162 0 00-.9 22c0 12 .3 20 1 23.7.5 3.8 2 6.8 4 9 2.2 2.3 4.8 3.5 8 3.5 3 0 5.6-1.2 7.7-3.5 2.2-2.2 3.6-5.4 4.1-9.5.5-4.2.8-11.9 1-23.2 0-11-.4-18.3-1-21.8a16 16 0 00-3.8-8.4z" fill-rule="nonzero"/>
    <path id="MJX-6-TEX-I-77" d="M1861.1 405.3c0-2.3 1-4.4 3-6.3 2.1-2 4.4-3 6.9-3 1.9 0 3.7.9 5.3 2.8 1.6 2 2.5 5 2.6 9.2 0 3.2-1 9.4-3 18.6-1.7 6-3.2 11-4.5 14.9a96 96 0 01-5.6 13 30 30 0 01-8.9 11 19.4 19.4 0 01-11.6 3.8c-4.8 0-9-.9-12.6-2.6-3.7-1.7-6.3-4-8-7l-.4.7c-4.4 6-9.8 8.9-16.2 8.9a33.2 33.2 0 01-15.6-4 15.4 15.4 0 01-6-6.4 21.2 21.2 0 01-2.3-10.1 73 73 0 015.5-23.6c3.7-10 5.6-16.2 5.7-19V404c0-.3-.3-.7-.7-1.1-.4-.5-1-.7-1.8-.7h-.6c-2.5 0-4.7 1-6.8 3.1-2 2-3.7 4.3-4.8 6.6a42.6 42.6 0 00-2.8 6.8c-.6 2.2-1 3.3-1.3 3.6-.2.2-1 .3-2.6.3h-2.2c-.7-.7-1-1.1-1-1.5a71.7 71.7 0 015-12.8c1.6-3 4-5.9 7.1-8.3 3.1-2.5 6.6-3.7 10.5-3.7 4.7 0 8.2 1.3 10.7 4s3.7 5.8 3.7 9.4c0 1.9-1.8 7.7-5.3 17.4a71.3 71.3 0 00-5.4 22.5c0 5 1.2 8.4 3.4 10.5a13 13 0 008.6 3.2c4.6 0 8.7-3.3 12.3-9.9l.8-1.4v-5.2l.1-1.3.2-1.1c0-.5 0-1 .2-1.5a93 93 0 001-4.8c0-.9.4-2.2.9-3.9.5-1.7 1-3.4 1.3-5.2.3-1.7 1-4 1.8-6.9 3-12.3 4.9-18.9 5.3-19.9 1.4-2.9 3.7-4.3 7-4.3 2 0 3.4.5 4.1 1.6.8 1 1.2 2 1.3 3 0 1.5-1.5 8.3-4.6 20.7a587 587 0 00-5.2 21.4c-.2 1.1-.3 3-.3 5.6v1.1c0 1.7.1 3.2.4 4.7.4 1.5 1.4 3.1 3.1 4.7 1.7 1.6 4.2 2.5 7.3 2.6 7.6 0 13.7-6.6 18.2-19.7a99.7 99.7 0 005.2-20.2c0-3.6-.7-6.4-2-8.4-1.5-2-2.9-3.8-4.3-5.2a6.3 6.3 0 01-2-4.5z" fill-rule="nonzero"/>
    <path id="MJX-6-TEX-N-31" d="M1907.4 446.7l-1.5.6-4.5 1.1c-2 .4-4.2.6-6.7.8h-2.1v-5.3h2.1a37.2 37.2 0 0016.4-4.4c1.2-.8 2.2-1.7 3.2-2.5.1-.2.6-.4 1.3-.4.7 0 1.4.3 2 .7v68.4c.6.6 1 1 1.5 1a76.4 76.4 0 009.8.7h3v5.3h-1.3c-1.6-.2-7.7-.3-18.2-.3-10.3 0-16.3 0-17.9.3h-1.4v-5.3h7.3a27.1 27.1 0 004.7-.4l1-.2.6-.6.7-.5v-59z" fill-rule="nonzero"/>
    <text x="210.3" y="473.5" font-family="'IBMPlexThai-Medium','IBM Plex Thai',sans-serif" font-weight="500" font-size="50">
      INPUT
    </text>
    <text x="2292.3" y="473.5" font-family="'IBMPlexThai-Medium','IBM Plex Thai',sans-serif" font-weight="500" font-size="50">
      OUTPUT
    </text>
    <g id="net-cell" fill="#fff" stroke="#000" stroke-width="3.8">
      <path d="M2536.4 182.8a63 63 0 00-63-63h-169a63 63 0 00-63 63v165.8a63 63 0 0063 63h169a63 63 0 0063-63V182.8zM1478.6 182.8a63 63 0 00-63-63h-169a63 63 0 00-63 63v165.8a63 63 0 0063 63h169a63 63 0 0063-63V182.8zM423.7 170.3a63 63 0 00-63-63h-169a63 63 0 00-63 63V336a63 63 0 0063 63h169a63 63 0 0063-63V170.3z"/>
    </g>
    <text id="net-node-2" x="2351.4" y="311.9" font-family="'IBMPlexThai-SemiBold','IBM Plex Thai',sans-serif" font-weight="500" font-size="100" text-anchor="middle">
      2
    </text>
    <text id="net-node-1" x="1292.1" y="311.9" font-family="'IBMPlexThai-SemiBold','IBM Plex Thai',sans-serif" font-weight="500" font-size="100" text-anchor="middle">
      1
    </text>
    <text id="net-node-0" x="238.7" y="299.4" font-family="'IBMPlexThai-SemiBold','IBM Plex Thai',sans-serif" font-weight="500" font-size="100" text-anchor="middle">
      0
    </text>
    </svg>
    `;
        this.base.html(htmlContent);
        sels.svg = this.base.select('svg')
            .attr('width', "100%")
            .attr('height', "100%");
        sels.lines = {
            w0: this.base.select("#net-line-0"),
            w1: this.base.select("#net-line-1")
        };
        sels.lineVals = {
            w0: this.base.select("#net-val-0"),
            w1: this.base.select("#net-val-1"),
        };
        sels.nodeVals = {
            n0: this.base.select("#net-node-0"),
            n1: this.base.select("#net-node-1"),
            n2: this.base.select("#net-node-2"),
        };
        sels.nodeVals.n0.text("1");
        sels.nodeVals.n1.text("_");
        sels.nodeVals.n2.text("_");
        sels.lineVals.w0.text("_");
        sels.lineVals.w1.text("_");
    }
    setState(v) {
        const sels = this.sels;
        const w0 = v.get(0);
        const w1 = v.get(1);
        sels.lineVals.w0.text(w0.toFixed(2));
        sels.lineVals.w1.text(w1.toFixed(2));
        sels.nodeVals.n1.text(w0.toFixed(2));
        sels.nodeVals.n2.text((w0 * w1).toFixed(2));
        sels.lines.w0
            .attr("stroke-width", this.strokeWidthScale(w0))
            .attr("opacity", this.opacityScale(w0));
        sels.lines.w1
            .attr("stroke-width", this.strokeWidthScale(w1))
            .attr("opacity", this.opacityScale(w1));
    }
    data(val) {
        return null;
    }
}


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nzcy9tYWluLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy90cy9Hb2xmTGFuZHNjYXBlcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHMvTGFuZHNjYXBlczJELnRzIiwid2VicGFjazovLy8uL3NyYy90cy9VcGRhdGVyMkQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RzL21haW4udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RzL3Bsb3R0aW5nLnRzIiwid2VicGFjazovLy8uL3NyYy90cy91dGlsL0NoYXJ0MmRWaXNDb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RzL3V0aWwvSFRNTFZpc0NvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHMvdXRpbC9TVkdWaXNDb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RzL3V0aWwvU1ZHcGx1cy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHMvdXRpbC9TaW1wbGVFdmVudEhhbmRsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RzL3V0aWwvVUlkLnRzIiwid2VicGFjazovLy8uL3NyYy90cy91dGlsL1Zpc0NvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHMvdXRpbC94ZDMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RzL3Zpcy9HZW5lcmFsQ29udG91clBsb3QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RzL3Zpcy9Hb2xmQmFsbC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHMvdmlzL0dvbGZIb2xlMUQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RzL3Zpcy9Hb2xmTG9zc2VzLnRzIiwid2VicGFjazovLy8uL3NyYy90cy92aXMvR29sZlhEaXN0LnRzIiwid2VicGFjazovLy8uL3NyYy90cy92aXMvTG9zc1N1cmZhY2UyRC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHMvdmlzL01hbnVhbFVwZGF0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RzL3Zpcy9RdWFkcmF0aWNQbG90cy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHMvdmlzL1NpbXBsZU5ldC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSxRQUFRLG9CQUFvQjtRQUM1QjtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLGlCQUFpQiw0QkFBNEI7UUFDN0M7UUFDQTtRQUNBLGtCQUFrQiwyQkFBMkI7UUFDN0M7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQSxnQkFBZ0IsdUJBQXVCO1FBQ3ZDOzs7UUFHQTtRQUNBO1FBQ0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDdkpBLGlCQUFpQixxQkFBdUIsZ0I7Ozs7Ozs7Ozs7O0FDQXhDLHVDOzs7Ozs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBOEI7QUFFcUI7QUFDM0I7QUFFeEIscURBQUksRUFBRTs7Ozs7Ozs7Ozs7OztBQ0xOO0FBQUE7QUFBQTtBQUFBO0FBQU8sTUFBTSxRQUFRLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUM1QyxNQUFNLFdBQVcsR0FBRyxDQUFDLENBQVksRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFTLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQVluRSxNQUFNLFVBQVUsR0FBK0I7SUFDbEQsSUFBSSxFQUFFO1FBQ0YsSUFBSSxFQUFFLE1BQU07UUFDWixDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBQyxJQUFJLENBQUM7UUFDekIsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUk7UUFDL0MsTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUM7UUFDN0IsTUFBTSxFQUFFLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQztRQUNoQixJQUFJLEVBQUUsUUFBUTtLQUNqQjtJQUNELEtBQUssRUFBRTtRQUNILElBQUksRUFBRSxPQUFPO1FBQ2IsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUM7UUFDckosRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENB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Q3hCLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUM7SUFDNUIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3BELElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUUxRCxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzlCLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUM7SUFFcEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFO1FBQ3JCLE1BQU0sRUFBRSxHQUFHLHlDQUFTLENBQUMsSUFBSSxDQUFDO1FBQzFCLE1BQU0sQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1FBQ2pELElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2hCLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7SUFDOUIsQ0FBQyxDQUFDO0lBRUYsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFO1FBQ3ZCLE1BQU0sRUFBRSxHQUFHLHlDQUFTLENBQUMsSUFBSSxDQUFDO1FBQzFCLE1BQU0sQ0FBQyxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztRQUNsRCxJQUFJLENBQUMsS0FBSyxD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R0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxFQUFFO1FBQ2xDLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsRUFBRTtJQUN0QyxDQUFDLENBQUM7SUFFRixNQUFNLEVBQUUsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUMsQ0FBQztJQUMzRSxNQUFNLEVBQUUsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUMsQ0FBQztJQUMzRSxNQUFNLEVBQUUsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUMsQ0FBQztJQUMzRSxNQUFNLEVBQUUsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUMs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QUssQ0FBQyxFQUFFO2FBQ1YsSUFBSSxDQUFDLGNBQWMsRUFBRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsRUFBRSxDQUFDLENBQUM7YUFDL0MsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBRXpDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRTthQUNWLElBQUksQ0FBQyxjQUFjLEVBQUUsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEVBQUUsQ0FBQyxDQUFDO2FBQy9DLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUUzQyxDQUFDO0lBS0QsSUFBSSxDQUFDLEdBQUk7UUFDUCxPQUFPLElBQUk7SUFDYixDQUFDO0NBQ0YiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuIFx0ZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soZGF0YSkge1xuIFx0XHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuIFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuIFx0XHR2YXIgZXhlY3V0ZU1vZHVsZXMgPSBkYXRhWzJdO1xuXG4gXHRcdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuIFx0XHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcbiBcdFx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXTtcbiBcdFx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG4gXHRcdFx0fVxuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdH1cbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZihwYXJlbnRKc29ucEZ1bmN0aW9uKSBwYXJlbnRKc29ucEZ1bmN0aW9uKGRhdGEpO1xuXG4gXHRcdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuIFx0XHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcbiBcdFx0fVxuXG4gXHRcdC8vIGFkZCBlbnRyeSBtb2R1bGVzIGZyb20gbG9hZGVkIGNodW5rIHRvIGRlZmVycmVkIGxpc3RcbiBcdFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2guYXBwbHkoZGVmZXJyZWRNb2R1bGVzLCBleGVjdXRlTW9kdWxlcyB8fCBbXSk7XG5cbiBcdFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiBhbGwgY2h1bmtzIHJlYWR5XG4gXHRcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIFx0fTtcbiBcdGZ1bmN0aW9uIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCkge1xuIFx0XHR2YXIgcmVzdWx0O1xuIFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0dmFyIGRlZmVycmVkTW9kdWxlID0gZGVmZXJyZWRNb2R1bGVzW2ldO1xuIFx0XHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuIFx0XHRcdGZvcih2YXIgaiA9IDE7IGogPCBkZWZlcnJlZE1vZHVsZS5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0dmFyIGRlcElkID0gZGVmZXJyZWRNb2R1bGVbal07XG4gXHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbZGVwSWRdICE9PSAwKSBmdWxmaWxsZWQgPSBmYWxzZTtcbiBcdFx0XHR9XG4gXHRcdFx0aWYoZnVsZmlsbGVkKSB7XG4gXHRcdFx0XHRkZWZlcnJlZE1vZHVsZXMuc3BsaWNlKGktLSwgMSk7XG4gXHRcdFx0XHRyZXN1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IGRlZmVycmVkTW9kdWxlWzBdKTtcbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHRyZXR1cm4gcmVzdWx0O1xuIFx0fVxuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuIFx0Ly8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4gXHQvLyBQcm9taXNlID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJtYWluXCI6IDBcbiBcdH07XG5cbiBcdHZhciBkZWZlcnJlZE1vZHVsZXMgPSBbXTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0dmFyIGpzb25wQXJyYXkgPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gfHwgW107XG4gXHR2YXIgb2xkSnNvbnBGdW5jdGlvbiA9IGpzb25wQXJyYXkucHVzaC5iaW5kKGpzb25wQXJyYXkpO1xuIFx0anNvbnBBcnJheS5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7XG4gXHRqc29ucEFycmF5ID0ganNvbnBBcnJheS5zbGljZSgpO1xuIFx0Zm9yKHZhciBpID0gMDsgaSA8IGpzb25wQXJyYXkubGVuZ3RoOyBpKyspIHdlYnBhY2tKc29ucENhbGxiYWNrKGpzb25wQXJyYXlbaV0pO1xuIFx0dmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSBvbGRKc29ucEZ1bmN0aW9uO1xuXG5cbiBcdC8vIGFkZCBlbnRyeSBtb2R1bGUgdG8gZGVmZXJyZWQgbGlzdFxuIFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2goW1wiLi9zcmMvaW5kZXgudHNcIixcInZlbmRvclwiXSk7XG4gXHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIHJlYWR5XG4gXHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImluZGV4Lmh0bWxcIjsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJpbXBvcnQge21haW59IGZyb20gJy4vdHMvbWFpbidcblxuaW1wb3J0IFwiIWZpbGUtbG9hZGVyP25hbWU9aW5kZXguaHRtbCEuL2luZGV4Lmh0bWxcIjtcbmltcG9ydCBcIi4vY3NzL21haW4uc2Nzc1wiXG5cbm1haW4oKSIsImV4cG9ydCBjb25zdCBiYXNlTG9zcyA9IHggPT4gMSAvIDIgKiBNYXRoLnBvdyh4LCAyKVxuZXhwb3J0IGNvbnN0IGdldFBsb3RGdW5jID0gKHo6IExhbmRzY2FwZSkgPT4gKHg6IG51bWJlcikgPT4gei5sb3NzKHouZih4KSlcblxuZXhwb3J0IGludGVyZmFjZSBMYW5kc2NhcGUge1xuICAgIG5hbWU6IHN0cmluZ1xuICAgIGY6ICh4OiBudW1iZXIpID0+IG51bWJlclxuICAgIGRmOiAoeDogbnVtYmVyKSA9PiBudW1iZXJcbiAgICB4cmFuZ2U6IFtudW1iZXIsIG51bWJlcl1cbiAgICB5cmFuZ2U6IFtudW1iZXIsIG51bWJlcl1cbiAgICBsb3NzOiAoeDogbnVtYmVyKSA9PiBudW1iZXJcbn1cblxuXG5leHBvcnQgY29uc3QgbGFuZHNjYXBlczogeyBbazogc3RyaW5nXTogTGFuZHNjYXBlIH0gPSB7XG4gICAgaG9sZToge1xuICAgICAgICBuYW1lOiBcImhvbGVcIixcbiAgICAgICAgZjogeCA9PiBNYXRoLnRhbmgoeCoxMy41KSxcbiAgICAgICAgZGY6IHggPT4gTWF0aC5wb3coTWF0aC5jb3NoKHgqMTMuNSksIC0yKSAqIDEzLjUsXG4gICAgICAgIHhyYW5nZTogWy02IC8gMTMuNSwgNiAvIDEzLjVdLFxuICAgICAgICB5cmFuZ2U6IFswLCAwLjZdLFxuICAgICAgICBsb3NzOiBiYXNlTG9zc1xuICAgIH0sXG4gICAgc3RlcHM6IHtcbiAgICAgICAgbmFtZTogXCJzdGVwc1wiLFxuICAgICAgICBmOiB4ID0+IE1hdGgudGFuaCh4ICogMTMuNSAtIDExKSAvIDQgKyBNYXRoLnRhbmgoeCAqIDEzLjUgLSA2KSAvIDQgKyBNYXRoLnRhbmgoeCAqIDEzLjUpICsgTWF0aC50YW5oKHggKiAxMy41ICsgNikgLyA0ICsgTWF0aC50YW5oKHggKiAxMy41ICsgMTEpIC8gNCxcbiAgICAgICAgZGY6IHggPT4gKE1hdGgucG93KE1hdGguY29zaCh4ICogMTMuNSAtIDExKSwgLTIpIC8gNCArIE1hdGgucG93KE1hdGguY29zaCh4ICogMTMuNSAtIDYpLCAtMikgLyA0ICsgTWF0aC5wb3coTWF0aC5jb3NoKHggKiAxMy41KSwgLTIpICsgTWF0aC5wb3coTWF0aC5jb3NoKHggKiAxMy41ICsgNiksIC0yKSAvIDQgKyBNYXRoLnBvdyhNYXRoLmNvc2goeCAqIDEzLjUgKyAxMSksIC0yKSAvIDQgKSAqIDEzLjUsXG4gICAgICAgIHhyYW5nZTogWy0xMy41IC8gMTMuNSwgMTMuNSAvIDEzLjVdLFxuICAgICAgICB5cmFuZ2U6IFswLCAyLjVdLFxuICAgICAgICBsb3NzOiBiYXNlTG9zc1xuICAgIH0sXG4gICAgc2VhZ3VsbDoge1xuICAgICAgICBuYW1lOiBcInNlYWd1bGxcIixcbiAgICAgICAgZjogeCA9PiBNYXRoLnNpZ24oeCkgKiAoMSAtICgxIC8gKDEgKyBNYXRoLmFicyh4ICogMTYuNSkpKSksXG4gICAgICAgIGRmOiB4ID0+IDE2LjUgLyBNYXRoLnBvdygxICsgTWF0aC5hYnMoeCAqIDE2LjUpLCAyKSxcbiAgICAgICAgeHJhbmdlOiBbLTEyIC8gMTYuNSwgMTIgLyAxNi41XSxcbiAgICAgICAgeXJhbmdlOiBbMCwgMC42XSxcbiAgICAgICAgbG9zczogYmFzZUxvc3NcbiAgICB9LFxuICAgIGJvd2w6IHtcbiAgICAgICAgbmFtZTogXCJib3dsXCIsXG4gICAgICAgIGY6ICB4ID0+IE1hdGguc2luaCh4LzMpLFxuICAgICAgICBkZjogeCA9PiBNYXRoLmNvc2goeC8zKS8zLFxuICAgICAgICB4cmFuZ2U6IFstMyAqIDMsIDMgKiAzXSxcbiAgICAgICAgeXJhbmdlOiBbMCwgNTBdLFxuICAgICAgICBsb3NzOiBiYXNlTG9zc1xuICAgIH0sXG4gICAgZGVlcF9uZXQ6IHtcbiAgICAgICAgbmFtZTogXCJkZWVwX25ldFwiLFxuICAgICAgICBmOiB4ID0+IE1hdGgucG93KE1hdGguYWJzKHgvMysxKSwgMykgLSAxLCAgLy8gZGVwdGggPSA0XG4gICAgICAgIGRmOiB4ID0+IDMvMyAqIE1hdGgucG93KE1hdGguYWJzKHgvMysxKSwgMiksXG4gICAgICAgIC8vIHhyYW5nZTogWy0wLjcqNCwgMC43KjRdLFxuICAgICAgICB4cmFuZ2U6IFstMC45NSozLCAwLjk1KjNdLFxuICAgICAgICB5cmFuZ2U6IFswLCA0XSxcbiAgICAgICAgbG9zczogYmFzZUxvc3NcbiAgICB9XG59IiwiaW1wb3J0ICogYXMgdHAgZnJvbSBcIi4vdHlwZXNcIlxuaW1wb3J0ICogYXMgbmogZnJvbSBcIm51bWpzXCJcbmltcG9ydCAqIGFzIGQzIGZyb20gXCJkM1wiXG5cbmV4cG9ydCBpbnRlcmZhY2UgTGFuZHNjYXBlMkQge1xuICAgIG5hbWU6IHN0cmluZ1xuICAgIGY6IHRwLk1hcEZ1bmN0aW9uXG4gICAgZGY6IHRwLk1hcEZ1bmN0aW9uXG4gICAgbG9zczogdHAuUmVkdWNlRnVuY3Rpb25cbiAgICB4cmFuZ2U6IFtudW1iZXIsIG51bWJlcl1cbiAgICB5cmFuZ2U6IFtudW1iZXIsIG51bWJlcl1cbiAgICBjb2xvclNjYWxlOiBkMy5TY2FsZUxpbmVhcjxudW1iZXIsIG51bWJlciB8IHN0cmluZz5cbn1cblxuXG5leHBvcnQgY29uc3QgbGFuZHNjYXBlczJkOiB7IFtrOiBzdHJpbmddOiBMYW5kc2NhcGUyRCB9ID0ge1xuICAgIFNpbXBsZU5ldDJEOiB7XG4gICAgICAgIG5hbWU6IFwiU2ltcGxlTmV0MkRcIixcbiAgICAgICAgLy9AdHMtaWdub3JlXG4gICAgICAgIGY6ICh2OiB0cC5BcnJheSkgPT4gKHYuZ2V0KDApICogdi5nZXQoMSkgLSAxKSxcbiAgICAgICAgZGY6ICh2OiB0cC5BcnJheSkgPT4gbmouYXJyYXkoW3YuZ2V0KDEpLCB2LmdldCgwKV0pLFxuICAgICAgICBjb2xvclNjYWxlOiBkMy5zY2FsZUxpbmVhcigpXG4gICAgICAgICAgICAuZG9tYWluKFstMSwgMCwgMS42XSlcbiAgICAgICAgICAgIC8vQHRzLWlnbm9yZVxuICAgICAgICAgICAgLnJhbmdlKFtcIndoaXRlXCIsIFwic3RlZWxibHVlXCIsIFwicmVkXCJdKVxuICAgICAgICAgICAgLy9AdHMtaWdub3JlXG4gICAgICAgICAgICAuaW50ZXJwb2xhdGUoZDMuaW50ZXJwb2xhdGVSZ2IuZ2FtbWEoMi4yKSksXG4gICAgICAgIHhyYW5nZTogWzAsIDEuNl0sXG4gICAgICAgIHlyYW5nZTogWzAsIDEuNl0sXG4gICAgICAgIC8vQHRzLWlnbm9yZVxuICAgICAgICBsb3NzOiB4ID0+IHgsXG4gICAgfSxcblxuICAgIEVsbGlwdGljYWw6IHtcbiAgICAgICAgbmFtZTogXCJFbGxpcHRpY2FsXCIsXG4gICAgICAgIC8vQHRzLWlnbm9yZVxuICAgICAgICBmOiAodjogdHAuQXJyYXkpID0+IG5qLmRvdChuai5hcnJheShbWzEsIDJdLCBbMiwgMV1dKSwgdiksXG4gICAgICAgIC8vQHRzLWlnbm9yZVxuICAgICAgICBkZjogKHY6IHRwLkFycmF5KSA9PiBuai5hcnJheShbWzEsIDJdLCBbMiwgMV1dKSxcbiAgICAgICAgY29sb3JTY2FsZTogZDMuc2NhbGVMaW5lYXIoKVxuICAgICAgICAgICAgLmRvbWFpbihbLTEsIDAsIDEuNl0pXG4gICAgICAgICAgICAvL0B0cy1pZ25vcmVcbiAgICAgICAgICAgIC5yYW5nZShbXCJ3aGl0ZVwiLCBcInN0ZWVsYmx1ZVwiLCBcInJlZFwiXSlcbiAgICAgICAgICAgIC8vQHRzLWlnbm9yZVxuICAgICAgICAgICAgLmludGVycG9sYXRlKGQzLmludGVycG9sYXRlUmdiLmdhbW1hKDIuMikpLFxuICAgICAgICB4cmFuZ2U6IFstMSwgMV0sXG4gICAgICAgIHlyYW5nZTogWy0xLCAxXSxcbiAgICAgICAgbG9zczogKGZ2OiBBcnJheSkgPT4gbmouc3VtKG5qLmRpdmlkZShuai5wb3dlcihmdiwgMiksIDIpKVxuICAgIH0sXG5cbn0iLCJpbXBvcnQgKiBhcyBkMyBmcm9tICdkMydcbmltcG9ydCAqIGFzIG5qIGZyb20gXCJudW1qc1wiXG5pbXBvcnQgKiBhcyB0cCBmcm9tIFwiLi90eXBlc1wiXG5pbXBvcnQgeyBBcnJheSB9IGZyb20gXCIuL3R5cGVzXCJcblxuLy8gY29uc3QgZGVmYXVsdEVycm9yRnVuY3Rpb24gPSAodjogQXJyYXkpID0+IHYuZ2V0KDApICogdi5nZXQoMSkgLSAxXG5jb25zdCBkZWZhdWx0RXJyb3JGdW5jdGlvbiA9ICh2OiBBcnJheSkgPT4ge1xuICAgIC8vQHRzLWlnbm9yZVxuICAgIHJldHVybiBuai5kb3QobmouYXJyYXkoW1sxLCAyXSwgWzIsIDFdXSksIHYpXG59XG5jb25zdCBkZWZhdWx0RGZGdW5jdGlvbiA9ICh2OiBBcnJheSkgPT4gbmouYXJyYXkoW1sxLCAyXSwgWzIsIDFdXSlcbmNvbnN0IGRlZmF1bHRTdGVwMkxyOiBkMy5TY2FsZUxpbmVhcjxudW1iZXIsIG51bWJlcj4gPSBkMy5zY2FsZUxpbmVhcigpLmRvbWFpbihbMCwgMC44XSkucmFuZ2UoWzAuMDAxLCAwLjI1XSlcbmNvbnN0IGRlZmF1bHRMb3NzID0gKGZ2OiBBcnJheSkgPT4gbmouc3VtKG5qLmRpdmlkZShuai5wb3dlcihmdiwgMiksIDIpKVxuXG5pbnRlcmZhY2UgVXBkYXRlck9wdGlvbnMge1xuICAgIGRmOiB0cC5NYXBGdW5jdGlvblxuICAgIGY6IHRwLk1hcEZ1bmN0aW9uXG4gICAgcTogbnVtYmVyICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIDAgLT4gMSwgd2hlcmUgMCBpcyBTR0QgYW5kIDEgaXMgTkdELiAwLjUgaXMgc3FydCBOR0QuIFtzdGVwID0gLSBldGEgKiBIIF4gKC0xL3EpICogZ10gKEggPSAwIHdoZW4gcT0wKVxuICAgIGV0YTogbnVtYmVyICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBha2EgJ2xlYXJuaW5nIHJhdGUnXG4gICAgc3RlcDJscjogZDMuU2NhbGVMaW5lYXI8bnVtYmVyLCBudW1iZXI+XG4gICAgbG9zczogdHAuUmVkdWNlRnVuY3Rpb25cbn1cbmV4cG9ydCBjbGFzcyBVcGRhdGVyMkQge1xuICAgIC8vIFNldCBEZWZhdWx0IE9wdGlvbnNcbiAgICBvcDogVXBkYXRlck9wdGlvbnMgPSB7XG4gICAgICAgIC8vQHRzLWlnbm9yZVxuICAgICAgICBmOiBkZWZhdWx0RXJyb3JGdW5jdGlvbixcbiAgICAgICAgLy9AdHMtaWdub3JlXG4gICAgICAgIGRmOiBkZWZhdWx0RGZGdW5jdGlvbixcbiAgICAgICAgcTogMCxcbiAgICAgICAgZXRhOiAwLjEsXG4gICAgICAgIHN0ZXAybHI6IGRlZmF1bHRTdGVwMkxyLFxuICAgICAgICBsb3NzOiBkZWZhdWx0TG9zcyxcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zOiBQYXJ0aWFsPFVwZGF0ZXJPcHRpb25zPiA9IHt9KSB7XG4gICAgICAgIHRoaXMudXBkYXRlT3B0aW9ucyhvcHRpb25zKTtcbiAgICB9XG5cbiAgICB1cGRhdGVPcHRpb25zKG9wdGlvbnM6IFBhcnRpYWw8VXBkYXRlck9wdGlvbnM+KSB7XG4gICAgICAgIE9iamVjdC5rZXlzKG9wdGlvbnMpLmZvckVhY2goayA9PiB0aGlzLm9wW2tdID0gb3B0aW9uc1trXSk7XG4gICAgfVxuXG4gICAgLy8gQ3JlYXRlIGNvbnN0cnVjdG9yIGZ1bmN0aW9uczpcbiAgICBmKCk6IHRwLk1hcEZ1bmN0aW9uXG4gICAgZih2YWw6IHRwLk1hcEZ1bmN0aW9uKTogdGhpc1xuICAgIGYodmFsPykge1xuICAgICAgICBpZiAodmFsID09IG51bGwpIHJldHVybiB0aGlzLm9wLmZcbiAgICAgICAgdGhpcy5vcC5mID0gdmFsXG4gICAgICAgIHJldHVybiB0aGlzXG4gICAgfVxuXG4gICAgZGYoKTogdHAuTWFwRnVuY3Rpb25cbiAgICBkZih2YWw6IHRwLk1hcEZ1bmN0aW9uKTogdGhpc1xuICAgIGRmKHZhbD8pIHtcbiAgICAgICAgaWYgKHZhbCA9PSBudWxsKSB7IHJldHVybiB0aGlzLm9wLmRmIH1cbiAgICAgICAgdGhpcy5vcC5kZiA9IHZhbFxuICAgICAgICByZXR1cm4gdGhpc1xuICAgIH1cblxuICAgIGV0YSgpOiBudW1iZXJcbiAgICBldGEodmFsOiBudW1iZXIpOiB0aGlzXG4gICAgZXRhKHZhbD8pIHtcbiAgICAgICAgaWYgKHZhbCA9PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5vcC5ldGFcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm9wLmV0YSA9IHZhbFxuICAgICAgICByZXR1cm4gdGhpc1xuICAgIH1cblxuICAgIHEoKTogbnVtYmVyXG4gICAgcSh2YWw6IG51bWJlcik6IHRoaXNcbiAgICBxKHZhbD8pIHtcbiAgICAgICAgaWYgKHZhbCA9PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5vcC5xXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5vcC5xID0gdmFsXG4gICAgICAgIHJldHVybiB0aGlzXG4gICAgfVxuXG4gICAgc3RlcDJscigpOiBkMy5TY2FsZUxpbmVhcjxudW1iZXIsIG51bWJlcj5cbiAgICBzdGVwMmxyKHZhbDogZDMuU2NhbGVMaW5lYXI8bnVtYmVyLCBudW1iZXI+KTogdGhpc1xuICAgIHN0ZXAybHIodmFsPykge1xuICAgICAgICBpZiAodmFsID09IG51bGwpIHsgcmV0dXJuIHRoaXMub3Auc3RlcDJsciB9XG4gICAgICAgIHRoaXMub3Auc3RlcDJsciA9IHZhbFxuICAgICAgICByZXR1cm4gdGhpc1xuICAgIH1cblxuICAgIC8vIEFtb3VudCB0byBzY2FsZSBzaXplIG9mIGxlYXJuaW5nIHJhdGUgYXJyb3dzXG4gICAgZ2V0IGxyU2NhbGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm9wLnN0ZXAybHIodGhpcy5vcC5ldGEpXG4gICAgfVxuXG4gICAgc3FydEVycih2OiBBcnJheSk6IG51bWJlciB7XG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgcmV0dXJuIE1hdGguc3FydCh0aGlzLmFic0Vycih2KSlcbiAgICB9XG5cbiAgICBhYnNFcnIodjogQXJyYXkpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gTWF0aC5hYnModGhpcy5sb3NzKHYpKVxuICAgIH1cblxuICAgIGxvc3ModjogQXJyYXkpOiBudW1iZXIge1xuICAgICAgICAvLyBPdmVycmlkZSB0aGUgbG9zcyBmdW5jdGlvbiBpZiBlcnJvciBleGlzdHNcbiAgICAgICAgLy8gQ2xhcmlmeSB0aGlzIGZvciBteSBmdXR1cmUgc2VsZlxuICAgICAgICByZXR1cm4gdGhpcy5vcC5sb3NzKHRoaXMub3AuZih2KSlcbiAgICB9XG5cbiAgICBlaWdlbnZhbHVlcyh2OiBBcnJheSk6IEFycmF5IHtcbiAgICAgICAgLy9AdHMtaWdub3JlXG4gICAgICAgIGNvbnN0IGV4ID0gbmoucG93ZXIodiwgMikuc3VtKClcbiAgICAgICAgY29uc3QgZXkgPSBuai5wb3dlcih2LCAyKS5zdW0oKVxuICAgICAgICByZXR1cm4gbmouYXJyYXkoW2V4LCBleV0pXG4gICAgfVxuXG4gICAgZ3JhZGllbnQodjogQXJyYXkpOiBBcnJheSB7XG4gICAgICAgIGNvbnN0IGVyciA9IHRoaXMubG9zcyh2KVxuXG4gICAgICAgIC8vQHRzLWlnbm9yZVxuICAgICAgICBjb25zdCBkZiA9IHRoaXMub3AuZGYodilcblxuICAgICAgICBjb25zdCBnOiBBcnJheSA9IG5qLm11bHRpcGx5KGRmLCBlcnIpXG4gICAgICAgIC8vIC8vQHRzLWlnbm9yZVxuICAgICAgICAvLyBjb25zdCBnOiBBcnJheSA9IG5qLmRvdCh0aGlzLl9kZih2KSwgZXJyKVxuXG4gICAgICAgIHJldHVybiBnXG4gICAgfVxuXG4gICAgZHYodjogQXJyYXkpOiBBcnJheSB7XG4gICAgICAgIGNvbnN0IGcgPSB0aGlzLmdyYWRpZW50KHYpXG4gICAgICAgIGNvbnN0IGV2ID0gdGhpcy5laWdlbnZhbHVlcyh2KVxuXG4gICAgICAgIGNvbnN0IGR2OiBBcnJheSA9IG5qLmRpdmlkZShuai5tdWx0aXBseShnLCAtMSksIG5qLmFicyhuai5wb3dlcihldiwgdGhpcy5vcC5xKSkpXG4gICAgICAgIHJldHVybiBkdlxuICAgIH1cblxuICAgIGxyKHY6IEFycmF5KTogQXJyYXkge1xuICAgICAgICBjb25zdCBkdiA9IHRoaXMuZHYodilcbiAgICAgICAgY29uc3QgYWJzRXJyID0gdGhpcy5hYnNFcnIodilcbiAgICAgICAgY29uc3QgbHJTY2FsZSA9IHRoaXMub3Auc3RlcDJscih0aGlzLm9wLmV0YSlcbiAgICAgICAgY29uc3QgbHI6IEFycmF5ID0gbmoubXVsdGlwbHkoZHYsIGxyU2NhbGUpLmRpdmlkZShhYnNFcnIpXG4gICAgICAgIHJldHVybiBsclxuICAgIH1cblxuICAgIG5leHQodjogQXJyYXkpOiBBcnJheSB7XG4gICAgICAgIGNvbnN0IGR2ID0gdGhpcy5kdih2KVxuICAgICAgICBjb25zdCBuZXd4OiBBcnJheSA9IG5qLmFkZCh2LCBuai5tdWx0aXBseShkdiwgdGhpcy5vcC5ldGEpKVxuICAgICAgICByZXR1cm4gbmV3eFxuICAgIH1cblxuICAgIG5leHRMcih2OiBBcnJheSk6IEFycmF5IHtcbiAgICAgICAgY29uc3QgZyA9IHRoaXMubHIodik7XG4gICAgICAgIGNvbnN0IHo6IEFycmF5ID0gbmouYWRkKHYsIG5qLm11bHRpcGx5KGcsIDMpKVxuICAgICAgICByZXR1cm4gelxuICAgIH1cblxuICAgIC8vIENvbnZlcnQgdG8gYmxvY2sgZGlhZ29uYWwgdXBkYXRlclxuICAgIHRvQmxvY2soKTogQmxvY2tVcGRhdGVyMkQge1xuICAgICAgICBjb25zdCBibG9ja1VwZGF0ZXIgPSBuZXcgQmxvY2tVcGRhdGVyMkQodGhpcy5vcClcbiAgICAgICAgcmV0dXJuIGJsb2NrVXBkYXRlclxuICAgIH1cblxuICAgIC8vIENyZWF0ZSBhIG5ldyBmdWxsIHVwZGF0ZXIgZnJvbSB0aGlzIG9iamVjdC4gVXNlZnVsIGlmIG9uZSBvZiB0aGUgZGVyaXZlZCBjbGFzc2VzIG5lZWRzIHRvIGltcGxlbWVudFxuICAgIHRvRnVsbCgpOiBVcGRhdGVyMkQge1xuICAgICAgICBjb25zdCBmdWxsVXBkYXRlciA9IG5ldyBVcGRhdGVyMkQodGhpcy5vcClcbiAgICAgICAgcmV0dXJuIGZ1bGxVcGRhdGVyXG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgQmxvY2tVcGRhdGVyMkQgZXh0ZW5kcyBVcGRhdGVyMkQge1xuICAgIGVpZ2VudmFsdWVzKHY6IEFycmF5KTogQXJyYXkge1xuICAgICAgICByZXR1cm4gbmoubXVsdGlwbHkobmoucG93ZXIodGhpcy5vcC5kZih2KSwgMiksIDIpXG4gICAgfVxufSIsImltcG9ydCAqIGFzIGQzIGZyb20gJ2QzJ1xuaW1wb3J0IHsgVUlkIH0gZnJvbSAnLi91dGlsL1VJZCdcbmltcG9ydCB7IENvbnRvdXJQbG90IH0gZnJvbSAnLi92aXMvR2VuZXJhbENvbnRvdXJQbG90J1xuaW1wb3J0IHsgVXBkYXRlcjJEIH0gZnJvbSAnLi9VcGRhdGVyMkQnXG5pbXBvcnQgeyBEM1NlbCwgbGluc3BhY2UgfSBmcm9tICcuL3V0aWwveGQzJ1xuaW1wb3J0IHsgR29sZkhvbGUxRCB9IGZyb20gJy4vdmlzL0dvbGZIb2xlMUQnXG5pbXBvcnQgeyBHb2xmTG9zc2VzIH0gZnJvbSAnLi92aXMvR29sZkxvc3NlcydcbmltcG9ydCB7IEdvbGZYRGlzdCB9IGZyb20gJy4vdmlzL0dvbGZYRGlzdCdcbmltcG9ydCB7IEdvbGZCYWxsIH0gZnJvbSAnLi92aXMvR29sZkJhbGwnXG5pbXBvcnQgeyBTaW1wbGVOZXQgfSBmcm9tIFwiLi92aXMvU2ltcGxlTmV0XCJcbmltcG9ydCAqIGFzIFIgZnJvbSAncmFtZGEnXG5pbXBvcnQgeyBTaW1wbGVFdmVudEhhbmRsZXIgfSBmcm9tICcuL3V0aWwvU2ltcGxlRXZlbnRIYW5kbGVyJ1xuaW1wb3J0IHsgTWFudWFsVXBkYXRlciB9IGZyb20gJy4vdmlzL01hbnVhbFVwZGF0ZXInXG5pbXBvcnQgeyBsYW5kc2NhcGVzIH0gZnJvbSAnLi9Hb2xmTGFuZHNjYXBlcydcbmltcG9ydCB7IGxhbmRzY2FwZXMyZCB9IGZyb20gJy4vTGFuZHNjYXBlczJEJ1xuaW1wb3J0IHsgQXJyYXkgfSBmcm9tICcuL3R5cGVzJ1xuaW1wb3J0IHsgUXVhZHJhdGljUGxvdHMgfSBmcm9tIFwiLi92aXMvUXVhZHJhdGljUGxvdHNcIlxuaW1wb3J0IHsgTG9zc1N1cmZhY2UyRCB9IGZyb20gXCIuL3Zpcy9Mb3NzU3VyZmFjZTJEXCJcbmltcG9ydCAqIGFzIG5qIGZyb20gXCJudW1qc1wiXG5cbmNvbnN0IHRvRml4ZWQgPSBSLmN1cnJ5KChuZGlnaXRzLCB4KSA9PiB4LnRvRml4ZWQobmRpZ2l0cykpXG5jb25zdCB0b1EgPSB0b0ZpeGVkKDEpXG5jb25zdCB0b0V0YSA9IHRvRml4ZWQoNClcblxuZnVuY3Rpb24gcGxvdEphZ2dlZExvc3MyRCgpIHtcbiAgICBjb25zdCB2aXMgPSBkMy5zZWxlY3QoXCIjdmlzLTJkLWxvc3NcIilcbiAgICBjb25zdCBldmVudEhhbmRsZXIgPSBuZXcgU2ltcGxlRXZlbnRIYW5kbGVyKDxFbGVtZW50PnZpcy5ub2RlKCkpXG4gICAgY29uc3Qgc2VscyA9IHtcbiAgICAgICAgcGxvdDogdmlzLnNlbGVjdChcIiNsb3NzLTJkXCIpXG4gICAgfVxuXG4gICAgY29uc3Qgdml6cyA9IHtcbiAgICAgICAgcGxvdDogbmV3IExvc3NTdXJmYWNlMkQoc2Vscy5wbG90LCBldmVudEhhbmRsZXIpXG4gICAgfVxufVxuXG5mdW5jdGlvbiBwbG90UXVhZHJhdGljRnVuY3MoKSB7XG4gICAgY29uc3QgdmlzID0gZDMuc2VsZWN0KFwiI3Zpcy1xdWFkXCIpXG4gICAgY29uc3QgZXZlbnRIYW5kbGVyID0gbmV3IFNpbXBsZUV2ZW50SGFuZGxlcig8RWxlbWVudD52aXMubm9kZSgpKVxuXG4gICAgY29uc3Qgc2VscyA9IHtcbiAgICAgICAgcXVhZFBsb3Q6IHZpcy5zZWxlY3QoXCIjcXVhZC1wbG90XCIpXG4gICAgfVxuXG4gICAgY29uc3Qgdml6cyA9IHtcbiAgICAgICAgcXVhZFBsb3Q6IG5ldyBRdWFkcmF0aWNQbG90cyhzZWxzLnF1YWRQbG90LCBldmVudEhhbmRsZXIpXG4gICAgfVxuXG4gICAgdml6cy5xdWFkUGxvdC5kYXRhKFsxIC8gMS40LCAxLCAxLjRdKVxufVxuXG5mdW5jdGlvbiBwbG90UXVpdmVyR3JhcGgoKSB7XG4gICAgY29uc3QgdmlzMSA9IGQzLnNlbGVjdCgnI3ZpczEnKVxuICAgIGNvbnN0IHNlbHMgPSB7XG4gICAgICAgIHF1aXZlclBsb3Q6IHZpczEuc2VsZWN0KCcjY2hhcnQnKSxcbiAgICAgICAgcUlkOiB2aXMxLnNlbGVjdCgnI3EtdmFsJyksXG4gICAgICAgIGV0YUlkOiB2aXMxLnNlbGVjdCgnI2V0YS12YWwnKSxcbiAgICAgICAgcVNsaWRlcjogdmlzMS5zZWxlY3QoJyNxLXNsaWRlcicpLFxuICAgICAgICBldGFTbGlkZXI6IHZpczEuc2VsZWN0KCcjZXRhLXNsaWRlcicpLFxuICAgICAgICBoZXNzVHlwZTogdmlzMS5zZWxlY3QoJyNoZXNzLXR5cGUnKSxcbiAgICAgICAgc2ltcGxlTmV0OiB2aXMxLnNlbGVjdChcIiNzaW1wbGUtbmV0LWNvbnRhaW5lclwiKSxcbiAgICB9XG4gICAgY29uc3QgZXZlbnRIYW5kbGVyID0gbmV3IFNpbXBsZUV2ZW50SGFuZGxlcig8RWxlbWVudD52aXMxLm5vZGUoKSlcblxuICAgIGNvbnN0IHZpenMgPSB7XG4gICAgICAgIGdyYXBoOiBDb250b3VyUGxvdC5mcm9tTGFuZHNjYXBlKHNlbHMucXVpdmVyUGxvdCwgZXZlbnRIYW5kbGVyLCBsYW5kc2NhcGVzMmQuRWxsaXB0aWNhbCksXG4gICAgICAgIHNpbXBsZU5ldDogbmV3IFNpbXBsZU5ldChzZWxzLnNpbXBsZU5ldCwgZXZlbnRIYW5kbGVyKVxuICAgIH1cblxuICAgIGNvbnN0IGRlZmF1bHRzID0ge1xuICAgICAgICAvLyBOb3RlIHRvIGFsc28gY2hhbmdlIHRoZSBkZWZhdWx0IHZhbHVlIGluIHRoZSBodG1sIGZpbGUhXG4gICAgICAgIHE6IDAsXG4gICAgICAgIGV0YTogMC4wNVxuICAgIH1cblxuICAgIGNvbnN0IHNjYWxlcyA9IHtcbiAgICAgICAgcTogZDMuc2NhbGVMaW5lYXIoKS5yYW5nZShbMCwgMTBdKS5kb21haW4oWzAsIDFdKSxcbiAgICAgICAgZXRhOiBkMy5zY2FsZUxpbmVhcigpLnJhbmdlKFsxLCAxMDAwXSkuZG9tYWluKFtNYXRoLnBvdygxMCwgLTUpLCAwLjZdKVxuICAgIH1cblxuICAgIC8vIEFkZCBjZW50ZXIgbGluZVxuICAgIGNvbnN0IHhyYW5nZSA9IGxpbnNwYWNlKDAuNiwgMS42LCB2aXpzLmdyYXBoLm9wdGlvbnMubSlcbiAgICBjb25zdCBlcHMgPSAwLjAwMDFcbiAgICBjb25zdCBmaXRMaW5lID0geCA9PiAxIC8gKHggKyBlcHMpO1xuICAgIGNvbnN0IGNlbnRlckNvbnRvdXIgPSBkMy5saW5lKClcbiAgICAgICAgLngoZCA9PiB2aXpzLmdyYXBoLnNjYWxlcy54LmNsYW1wKHRydWUpKGRbMF0pKVxuICAgICAgICAueShkID0+IHZpenMuZ3JhcGguc2NhbGVzLnkuY2xhbXAodHJ1ZSkoZml0TGluZShkWzBdKSkpXG5cbiAgICBjb25zdCBtYWluRml0ID0gdml6cy5ncmFwaC5iYXNlXG4gICAgICAgIC5hcHBlbmQoXCJwYXRoXCIpXG4gICAgICAgIC5jbGFzc2VkKFwibWFpbi1maXRcIiwgdHJ1ZSlcbiAgICAgICAgLy8gaSBkb2Vzbid0IG1hdHRlciwgbmVlZCBmaWxsZXIgZm9yIGxpbmUgdG8gd29ya1xuICAgICAgICAuYXR0cihcImRcIiwgY2VudGVyQ29udG91cih4cmFuZ2UubWFwKCh4LCBpKSA9PiBbeCwgaV0pKSlcblxuICAgIC8vIEluaXRpYWxpemUgZ3JhcGggcGFyYW1ldGVycyB0byBtYXRjaCB0aGUgZGVmYXVsdHNcbiAgICB2aXpzLmdyYXBoLnEoZGVmYXVsdHMucSlcbiAgICB2aXpzLmdyYXBoLmV0YShkZWZhdWx0cy5ldGEpXG4gICAgc2Vscy5xU2xpZGVyLnByb3BlcnR5KCd2YWx1ZScsIHNjYWxlcy5xKGRlZmF1bHRzLnEpKVxuICAgIHNlbHMuZXRhU2xpZGVyLnByb3BlcnR5KCd2YWx1ZScsIHNjYWxlcy5ldGEoZGVmYXVsdHMuZXRhKSlcblxuICAgIHNlbHMucUlkLnRleHQodG9RKGRlZmF1bHRzLnEpKVxuICAgIHNlbHMuZXRhSWQudGV4dCh0b0V0YShkZWZhdWx0cy5ldGEpKVxuXG4gICAgc2Vscy5xU2xpZGVyLm9uKCdpbnB1dCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc3QgbWUgPSBkMy5zZWxlY3QodGhpcylcbiAgICAgICAgY29uc3QgdiA9IHNjYWxlcy5xLmludmVydCgrbWUucHJvcGVydHkoJ3ZhbHVlJykpO1xuICAgICAgICB2aXpzLmdyYXBoLnEodik7XG4gICAgICAgIHNlbHMucUlkLnRleHQoYCR7dG9RKHYpfWApXG4gICAgfSlcblxuICAgIHNlbHMuZXRhU2xpZGVyLm9uKCdpbnB1dCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc3QgbWUgPSBkMy5zZWxlY3QodGhpcylcbiAgICAgICAgY29uc3QgdiA9IHNjYWxlcy5ldGEuaW52ZXJ0KG1lLnByb3BlcnR5KCd2YWx1ZScpKTtcbiAgICAgICAgdml6cy5ncmFwaC5ldGEodilcbiAgICAgICAgc2Vscy5ldGFJZC50ZXh0KGAke3RvRXRhKHYpfWApXG4gICAgfSlcblxuICAgIHNlbHMuaGVzc1R5cGUub24oJ2lucHV0JywgZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zdCBzZWxmID0gZDMuc2VsZWN0KHRoaXMpXG4gICAgICAgIGNvbnN0IHYgPSBzZWxmLnByb3BlcnR5KCd2YWx1ZScpXG4gICAgICAgIHZpenMuZ3JhcGguc2V0VXBkYXRlcih2KVxuICAgIH0pXG5cbiAgICAvLyBDYXRjaCBldmVudCBvZiBzdGVwXG4gICAgZXZlbnRIYW5kbGVyLmJpbmQoQ29udG91clBsb3QuZXZlbnRzLnN0ZXBBZGRlZCwgKHY6IEFycmF5KSA9PiB7XG4gICAgICAgIHZpenMuc2ltcGxlTmV0LnNldFN0YXRlKHYpXG4gICAgfSlcbn1cblxuZnVuY3Rpb24gcGxvdEdvbGZIb2xlM0JhbGwoKSB7XG4gICAgY29uc3QgdmlzMiA9IGQzLnNlbGVjdChcIiN2aXMyXCIpO1xuICAgIGNvbnN0IHNlbHMgPSB7XG4gICAgICAgIGNoYXJ0OiB2aXMyLnNlbGVjdCgnI2NoYXJ0JyksXG4gICAgICAgIGNoYXJ0WERpc3Q6IHZpczIuc2VsZWN0KCcjY2hhcnQteGRpc3QnKSxcbiAgICAgICAgY2hhcnRMb3NzZXM6IHZpczIuc2VsZWN0KCcjY2hhcnQtbG9zc2VzJyksXG4gICAgICAgIGxhbmRzY2FwZVNlbGVjdG9yOiB2aXMyLnNlbGVjdCgnLmxhbmRzY2FwZS1zZWxlY3QnKSxcbiAgICB9XG5cbiAgICBjb25zdCBldmVudEhhbmRsZXIgPSBuZXcgU2ltcGxlRXZlbnRIYW5kbGVyKDxFbGVtZW50PnZpczIubm9kZSgpKVxuICAgIGNvbnN0IHZpenMgPSB7XG4gICAgICAgIGdyYXBoOiBuZXcgR29sZkhvbGUxRChzZWxzLmNoYXJ0LCBldmVudEhhbmRsZXIsIHt9LCBVSWQudWlkKCkpLFxuICAgICAgICBjaGFydFhEaXN0OiBuZXcgR29sZlhEaXN0KHNlbHMuY2hhcnRYRGlzdCwgZXZlbnRIYW5kbGVyKSxcbiAgICAgICAgY2hhcnRMb3NzZXM6IG5ldyBHb2xmTG9zc2VzKHNlbHMuY2hhcnRMb3NzZXMsIGV2ZW50SGFuZGxlciksXG4gICAgfVxuXG4gICAgaW50ZXJmYWNlIEdvbGZEZWZhdWx0cyB7XG4gICAgICAgIGxhbmRzY2FwZTogc3RyaW5nXG4gICAgICAgIHFzOiBudW1iZXJbXVxuICAgICAgICBjbGFzc05hbWVzOiBzdHJpbmdbXVxuICAgICAgICBldGFzPzogbnVtYmVyW11cbiAgICB9XG5cbiAgICAvLyBDb3JyZXNwb25kcyB0byBxcyA9IFswLCAwLjUsIDFdXG4gICAgY29uc3QgZGVmYXVsdEV0YSA9IHtcbiAgICAgICAgc2VhZ3VsbDogWzAuMDA1LCAwLjAwNSwgMC4wMDVdLFxuICAgICAgICBob2xlOiBbMC4wMDUsIDAuMDA1LCAwLjAwNV0sXG4gICAgICAgIHN0ZXBzOiBbMC4wMDUsIDAuMDA1LCAwLjAwNV0sXG4gICAgICAgIGJvd2w6IFswLjAzLCAwLjAzLCAwLjAzXSxcbiAgICAgICAgZGVlcF9uZXQ6IFswLjAxLCAwLjAxLCAwLjAxXSxcbiAgICB9XG5cbiAgICBjb25zdCBkZWZhdWx0czogR29sZkRlZmF1bHRzID0ge1xuICAgICAgICBsYW5kc2NhcGU6IFwic2VhZ3VsbFwiLFxuICAgICAgICBxczogWzAsIDAuNSwgMV0sXG4gICAgICAgIGNsYXNzTmFtZXM6IFsnZ29sZi1iYWxsLXNnZCcsICdnb2xmLWJhbGwtc25nZCcsICdnb2xmLWJhbGwtbmdkJ10sIC8vIERvbid0IGNoYW5nZSB0aGVzZSB1bmxlc3MgeW91IHdhbnQgdG8gcGxheSB3aXRoIENTUyEhXG4gICAgfVxuICAgIGRlZmF1bHRzLmV0YXMgPSBkZWZhdWx0RXRhW2RlZmF1bHRzLmxhbmRzY2FwZV1cblxuICAgIGNvbnN0IGRlZmF1bHRMYW5kc2NhcGUgPSBsYW5kc2NhcGVzW2RlZmF1bHRzLmxhbmRzY2FwZV1cblxuICAgIC8vQHRzLWlnbm9yZVxuICAgIGNvbnN0IGRlZmF1bHRCYWxscyA9IGQzLnppcChkZWZhdWx0cy5xcywgZGVmYXVsdHMuZXRhcywgZGVmYXVsdHMuY2xhc3NOYW1lcykubWFwKCh4KSA9PiBuZXcgR29sZkJhbGwobmV3IE1hbnVhbFVwZGF0ZXIoZGVmYXVsdExhbmRzY2FwZS5mLCBkZWZhdWx0TGFuZHNjYXBlLmRmLCB4WzBdLCB4WzFdKSwgeFsyXSkpXG5cbiAgICB2aXpzLmdyYXBoLmRhdGEoZGVmYXVsdEJhbGxzKVxuXG4gICAgLy8gQXR0YWNoIGdvbGZiYWxsIGluZm8gdG8gbG9zcyB0cmFja2VyXG4gICAgZXZlbnRIYW5kbGVyLmJpbmQoJ2xvc3MtY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICB2aXpzLmNoYXJ0WERpc3QuY2xlYXJQYXRocygpXG4gICAgICAgIHZpenMuY2hhcnRMb3NzZXMuY2xlYXJQYXRocygpXG4gICAgfSlcblxuICAgIC8vIENvbmZpZ3VyZSBodG1sIHBhZ2UgdG8gd29yayB3aXRoIGRlZmF1bHRzXG4gICAgc2Vscy5sYW5kc2NhcGVTZWxlY3Rvci5wcm9wZXJ0eSgndmFsdWUnLCBkZWZhdWx0cy5sYW5kc2NhcGUpXG4gICAgdml6cy5ncmFwaC5sYW5kc2NhcGUobGFuZHNjYXBlc1tkZWZhdWx0cy5sYW5kc2NhcGVdKVxuXG4gICAgbGV0IHJ1bm5pbmdTdHJlYW1zID0gW11cblxuICAgIC8vIEFzc2lnbiBzdHJlYW1zXG4gICAgY29uc3QgYXNzaWduU3RyZWFtcyA9IChncmFwaDogR29sZkhvbGUxRCwgY3VycmVudFN0cmVhbXMgPSBbXSkgPT4ge1xuICAgICAgICBjb25zdCBzdHJlYW1zID0gZ3JhcGguZGF0YSgpLm1hcChiID0+IGIuc3RyZWFtKVxuXG4gICAgICAgIGNvbnN0IHBsb3R0ZXIgPSB7XG4gICAgICAgICAgICBuZXh0OiBkID0+IHtcbiAgICAgICAgICAgICAgICB2aXpzLmNoYXJ0WERpc3QucGxvdFBhdGgoZCwgZ3JhcGguc2NhbGVzLmJhc2UybWF0aC54LmludmVydClcbiAgICAgICAgICAgICAgICB2aXpzLmNoYXJ0TG9zc2VzLnBsb3RQYXRoKGQsIGdyYXBoLnNjYWxlcy5iYXNlMmxvc3MpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjdXJyZW50U3RyZWFtcy5mb3JFYWNoKHMgPT4gcy51bnN1YnNjcmliZSgpKVxuXG4gICAgICAgIGNvbnN0IGFjdGl2YXRlZFN0cmVhbXMgPSBzdHJlYW1zLm1hcChzID0+IHtcbiAgICAgICAgICAgIHJldHVybiBzLnN1YnNjcmliZShwbG90dGVyKVxuICAgICAgICB9KVxuICAgICAgICByZXR1cm4gYWN0aXZhdGVkU3RyZWFtc1xuICAgIH1cblxuICAgIC8vIEdhdGhlciBpbnRlcmFjdGl2aXR5IGZvciB0aGUgZ29sZiBiYWxsIHBsb3RcbiAgICBzZWxzLmxhbmRzY2FwZVNlbGVjdG9yLm9uKCdpbnB1dCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc3Qgc2VsZiA9IGQzLnNlbGVjdCh0aGlzKVxuICAgICAgICBjb25zdCB2ID0gc2VsZi5wcm9wZXJ0eSgndmFsdWUnKVxuICAgICAgICB2aXpzLmNoYXJ0TG9zc2VzLnJlc2V0WHJhbmdlXygpXG4gICAgICAgIHZpenMuY2hhcnRYRGlzdC5yZXNldFhyYW5nZV8oKVxuICAgICAgICB2aXpzLmdyYXBoLmxhbmRzY2FwZShsYW5kc2NhcGVzW3ZdKVxuICAgICAgICB2aXpzLmdyYXBoLmRhdGFGcm9tQmFzZSh2aXpzLmdyYXBoLmRhdGFUb0Jhc2VfKCkpXG4gICAgICAgIHJ1bm5pbmdTdHJlYW1zID0gYXNzaWduU3RyZWFtcyh2aXpzLmdyYXBoLCBydW5uaW5nU3RyZWFtcylcbiAgICB9KVxuICAgIHJ1bm5pbmdTdHJlYW1zID0gYXNzaWduU3RyZWFtcyh2aXpzLmdyYXBoLCBydW5uaW5nU3RyZWFtcylcbn1cblxuZnVuY3Rpb24gcGxvdEdvbGZIb2xlU2xpZGVyKCkge1xuICAgIGNvbnN0IHZpczMgPSBkMy5zZWxlY3QoXCIjdmlzM1wiKTtcblxuICAgIGNvbnN0IHNlbHMgPSB7XG4gICAgICAgIGNoYXJ0OiB2aXMzLnNlbGVjdCgnI2NoYXJ0JyksXG4gICAgICAgIGNoYXJ0TG9zc2VzOiB2aXMzLnNlbGVjdCgnI2NoYXJ0LWxvc3NlcycpLFxuICAgICAgICBjaGFydFhEaXN0OiB2aXMzLnNlbGVjdCgnI2NoYXJ0LXhkaXN0JyksXG4gICAgICAgIHFJZDogdmlzMy5zZWxlY3QoJyNxLXZhbCcpLFxuICAgICAgICBldGFJZDogdmlzMy5zZWxlY3QoJyNldGEtdmFsJyksXG4gICAgICAgIHFTbGlkZXI6IHZpczMuc2VsZWN0KCcjcS1zbGlkZXInKSxcbiAgICAgICAgZXRhU2xpZGVyOiB2aXMzLnNlbGVjdCgnI2V0YS1zbGlkZXInKSxcbiAgICAgICAgbGFuZHNjYXBlU2VsZWN0b3I6IHZpczMuc2VsZWN0KCcubGFuZHNjYXBlLXNlbGVjdCcpXG4gICAgfVxuXG4gICAgY29uc3QgZXZlbnRIYW5kbGVyID0gbmV3IFNpbXBsZUV2ZW50SGFuZGxlcig8RWxlbWVudD52aXMzLm5vZGUoKSlcblxuICAgIGNvbnN0IHZpenMgPSB7XG4gICAgICAgIGdyYXBoOiBuZXcgR29sZkhvbGUxRChzZWxzLmNoYXJ0LCBldmVudEhhbmRsZXIsIHsgbWF4SXRlcjogMS41ZTMgfSwgVUlkLnVpZCgpKSxcbiAgICAgICAgY2hhcnRMb3NzZXM6IG5ldyBHb2xmTG9zc2VzKHNlbHMuY2hhcnRMb3NzZXMsIGV2ZW50SGFuZGxlciksXG4gICAgICAgIGNoYXJ0WERpc3Q6IG5ldyBHb2xmWERpc3Qoc2Vscy5jaGFydFhEaXN0LCBldmVudEhhbmRsZXIpXG4gICAgfVxuXG4gICAgY29uc3QgZGVmYXVsdHMgPSB7XG4gICAgICAgIC8vIE5vdGUgdG8gYWxzbyBjaGFuZ2UgdGhlIGRlZmF1bHQgdmFsdWUgaW4gdGhlIGh0bWwgZmlsZSFcbiAgICAgICAgbGFuZHNjYXBlOiBcInNlYWd1bGxcIixcbiAgICAgICAgcTogMC41LFxuICAgICAgICBldGE6IDAuMDFcbiAgICB9XG5cbiAgICAvLyBBdHRhY2ggZ29sZmJhbGwgaW5mbyB0byBsb3NzIHRyYWNrZXJcbiAgICBldmVudEhhbmRsZXIuYmluZCgnbG9zcy1jbGljaycsIChlKSA9PiB7XG4gICAgICAgIHZpenMuY2hhcnRYRGlzdC5jbGVhclBhdGhzKClcbiAgICAgICAgdml6cy5jaGFydExvc3Nlcy5jbGVhclBhdGhzKClcbiAgICB9KVxuXG4gICAgLy8gUHV0IGRhdGEgaW50byB2aXpcbiAgICB2aXpzLmdyYXBoLmRhdGEoW25ldyBHb2xmQmFsbChuZXcgTWFudWFsVXBkYXRlcihsYW5kc2NhcGVzLmhvbGUuZiwgbGFuZHNjYXBlcy5ob2xlLmRmLCBkZWZhdWx0cy5xLCBkZWZhdWx0cy5ldGEpLCBcImdvbGYtYmFsbFwiKV0pXG5cbiAgICAvLyBjb25zdCBldGFSYW5nZSA9IFstNSwgMl0ubWFwKHggPT4gTWF0aC5wb3coMTAsIHgpKVxuICAgIGNvbnN0IGV0YVJhbmdlID0gWy0zLCAwXS5tYXAoeCA9PiBNYXRoLnBvdygxMCwgeCkpXG4gICAgY29uc3Qgc2NhbGVzID0ge1xuICAgICAgICBxOiBkMy5zY2FsZUxpbmVhcigpLnJhbmdlKFswLCAxMF0pLmRvbWFpbihbMCwgMV0pLFxuICAgICAgICBldGE6IGQzLnNjYWxlTG9nKCkucmFuZ2UoWzEsIDEwMDBdKS5kb21haW4oZXRhUmFuZ2UpLmJhc2UoMTApXG4gICAgfVxuXG4gICAgLy8gSW5pdGlhbGl6ZSBncmFwaCBwYXJhbWV0ZXJzIHRvIG1hdGNoIHRoZSBkZWZhdWx0c1xuICAgIHZpenMuZ3JhcGgubGFuZHNjYXBlKGxhbmRzY2FwZXNbZGVmYXVsdHMubGFuZHNjYXBlXSlcbiAgICBzZWxzLmxhbmRzY2FwZVNlbGVjdG9yLnByb3BlcnR5KCd2YWx1ZScsIGRlZmF1bHRzLmxhbmRzY2FwZSlcblxuICAgIHNlbHMucVNsaWRlci5wcm9wZXJ0eSgndmFsdWUnLCBzY2FsZXMucShkZWZhdWx0cy5xKSlcbiAgICBzZWxzLmV0YVNsaWRlci5wcm9wZXJ0eSgndmFsdWUnLCBzY2FsZXMuZXRhKGRlZmF1bHRzLmV0YSkpXG4gICAgc2Vscy5xSWQudGV4dCh0b1EoZGVmYXVsdHMucSkpXG4gICAgc2Vscy5ldGFJZC50ZXh0KHRvRXRhKGRlZmF1bHRzLmV0YSkpXG5cbiAgICAvLyBBc3NpZ24gc3RyZWFtc1xuICAgIGxldCBydW5uaW5nU3RyZWFtcyA9IFtdXG4gICAgY29uc3QgYXNzaWduU3RyZWFtcyA9IChncmFwaDogR29sZkhvbGUxRCwgY3VycmVudFN0cmVhbXMgPSBbXSkgPT4ge1xuICAgICAgICBjb25zdCBzdHJlYW1zID0gZ3JhcGguZGF0YSgpLm1hcChiID0+IGIuc3RyZWFtKVxuXG4gICAgICAgIGNvbnN0IHBsb3R0ZXIgPSB7XG4gICAgICAgICAgICBuZXh0OiBkID0+IHtcbiAgICAgICAgICAgICAgICB2aXpzLmNoYXJ0WERpc3QucGxvdFBhdGgoZCwgZ3JhcGguc2NhbGVzLmJhc2UybWF0aC54LmludmVydClcbiAgICAgICAgICAgICAgICB2aXpzLmNoYXJ0TG9zc2VzLnBsb3RQYXRoKGQsIGdyYXBoLnNjYWxlcy5iYXNlMmxvc3MpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjdXJyZW50U3RyZWFtcy5mb3JFYWNoKHMgPT4gcy51bnN1YnNjcmliZSgpKVxuXG4gICAgICAgIGNvbnN0IGFjdGl2YXRlZFN0cmVhbXMgPSBzdHJlYW1zLm1hcChzID0+IHtcbiAgICAgICAgICAgIHJldHVybiBzLnN1YnNjcmliZShwbG90dGVyKVxuICAgICAgICB9KVxuXG4gICAgICAgIHJldHVybiBhY3RpdmF0ZWRTdHJlYW1zXG4gICAgfVxuXG4gICAgLy8gQWRqdXN0IHNsaWRlciByZWFjdGl2aXR5XG4gICAgc2Vscy5xU2xpZGVyLm9uKCdpbnB1dCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc3QgbWUgPSBkMy5zZWxlY3QodGhpcylcbiAgICAgICAgY29uc3QgdiA9IHNjYWxlcy5xLmludmVydChtZS5wcm9wZXJ0eSgndmFsdWUnKSk7XG4gICAgICAgIHZpenMuZ3JhcGgucSh2KVxuICAgICAgICBzZWxzLnFJZC50ZXh0KGAke3RvUSh2KX1gKVxuICAgIH0pXG5cbiAgICBzZWxzLmV0YVNsaWRlci5vbignaW5wdXQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnN0IG1lID0gZDMuc2VsZWN0KHRoaXMpXG4gICAgICAgIGNvbnN0IHYgPSBzY2FsZXMuZXRhLmludmVydChtZS5wcm9wZXJ0eSgndmFsdWUnKSk7XG4gICAgICAgIHZpenMuZ3JhcGguZXRhKHYpXG4gICAgICAgIHNlbHMuZXRhSWQudGV4dChgJHt0b0V0YSh2KX1gKVxuICAgIH0pXG5cbiAgICBzZWxzLmxhbmRzY2FwZVNlbGVjdG9yLm9uKCdpbnB1dCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc3Qgc2VsZiA9IGQzLnNlbGVjdCh0aGlzKVxuICAgICAgICBjb25zdCB2ID0gc2VsZi5wcm9wZXJ0eSgndmFsdWUnKVxuICAgICAgICB2aXpzLmNoYXJ0TG9zc2VzLnJlc2V0WHJhbmdlXygpXG4gICAgICAgIHZpenMuY2hhcnRYRGlzdC5yZXNldFhyYW5nZV8oKVxuICAgICAgICB2aXpzLmdyYXBoLmxhbmRzY2FwZShsYW5kc2NhcGVzW3ZdKVxuICAgICAgICB2aXpzLmdyYXBoLmRhdGFGcm9tQmFzZSh2aXpzLmdyYXBoLmRhdGFUb0Jhc2VfKCkpXG4gICAgICAgIHJ1bm5pbmdTdHJlYW1zID0gYXNzaWduU3RyZWFtcyh2aXpzLmdyYXBoLCBydW5uaW5nU3RyZWFtcylcbiAgICB9KVxuICAgIHJ1bm5pbmdTdHJlYW1zID0gYXNzaWduU3RyZWFtcyh2aXpzLmdyYXBoLCBydW5uaW5nU3RyZWFtcylcbn1cblxuZnVuY3Rpb24gdGVzdGluZygpIHtcbiAgICBjb25zb2xlLmxvZyhcIlRFU1RcIik7XG4gICAgLy8gbGV0IEEgPSBuai5hcnJheShbWzEsMl0sIFsyLDFdXSlcbiAgICAvLyBsZXQgdiA9IG5qLmFycmF5KFsxLDNdKVxuICAgIC8vIGNvbnN0IHVwID0gbmV3IFVwZGF0ZXIyRCgpXG5cbiAgICAvLyBjb25zb2xlLmxvZyhcIkxSOiBcIiwgdXAubHIodikpO1xuICAgIC8vIGNvbnNvbGUubG9nKFwiR3JhZGllbnQ6IFwiLCB1cC5ncmFkaWVudCh2KSk7XG4gICAgLy8gY29uc29sZS5sb2coXCJFUlI6IFwiLCB1cC5fZih2KSk7XG5cbiAgICAvLyBjb25zb2xlLmxvZyhcIk5KIEFycmF5IEluY2VwdGlvbjogXCIsIG5qLmFycmF5KHYpKVxuICAgIC8vIC8vIGxldCB2ID0gbmouYXJyYXkoWzEsMl0pXG4gICAgLy8gbGV0IHYyID0gbmouYXJyYXkoWzQsNV0pXG4gICAgLy8gY29uc29sZS5sb2codik7XG5cbiAgICAvLyAvL0B0cy1pZ25vcmVcbiAgICAvLyBjb25zb2xlLmxvZyhuai5kb3QoQSwgdikpO1xuXG4gICAgY29uc29sZS5sb2coXCJFTkQgVEVTVFwiKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1haW4oKSB7XG4gICAgdGVzdGluZygpXG5cbiAgICAvLyBjb25zb2xlLmxvZyhuai5tdWx0aXBseSh2LCB2MikpO1xuICAgIHBsb3RRdWFkcmF0aWNGdW5jcygpO1xuICAgIHBsb3RRdWl2ZXJHcmFwaCgpO1xuICAgIC8vIHBsb3RHb2xmSG9sZTNCYWxsKCk7XG4gICAgLy8gcGxvdEdvbGZIb2xlU2xpZGVyKCk7XG4gICAgLy8gcGxvdEphZ2dlZExvc3MyRCgpO1xufVxuIiwiaW1wb3J0ICogYXMgZDMgZnJvbSAnZDMnXG5pbXBvcnQgeyBNYXJnaW5JbmZvIH0gZnJvbSAnLi91dGlsL1NWR1Zpc0NvbXBvbmVudCdcbmltcG9ydCB7IEQzU2VsIH0gZnJvbSAnLi91dGlsL3hkMydcbmltcG9ydCB7cmFuZ2V9IGZyb20gJ3JhbWRhJ1xuXG5leHBvcnQgZnVuY3Rpb24gYWRkU1ZHKGRpdjogc3RyaW5nLCB3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlciwgbWFyZ2luOiBNYXJnaW5JbmZvKTogRDNTZWwge1xuXG4gICAgdmFyIHN2ZyA9IGQzLnNlbGVjdChkaXYpLmFwcGVuZChcInN2Z1wiKVxuICAgICAgICAuYXR0cihcIndpZHRoXCIsIFwiMTAwJVwiKVxuICAgICAgICAuYXR0cihcImhlaWdodFwiLCBcIjEwMCVcIilcbiAgICAgICAgLmF0dHIoXCJ2aWV3Qm94XCIsIFwiMCAwIFwiICsgKHdpZHRoICsgbWFyZ2luLmxlZnQgKyBtYXJnaW4ucmlnaHQpICsgXCIgXCIgKyAoaGVpZ2h0ICsgbWFyZ2luLnRvcCArIG1hcmdpbi5ib3R0b20pKVxuICAgICAgICAuYXR0cihcInByZXNlcnZlQXNwZWN0UmF0aW9cIiwgXCJ4TWlkWU1pZCBtZWV0XCIpXG4gICAgICAgIC5hcHBlbmQoXCJnXCIpXG4gICAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIFwidHJhbnNsYXRlKFwiICsgbWFyZ2luLmxlZnQgKyBcIixcIiArIG1hcmdpbi50b3AgKyBcIilcIik7XG5cbiAgICByZXR1cm4gc3ZnO1xufVxuXG50eXBlIERvbWFpblJhbmdlID0gbnVtYmVyW11cblxuLyoqXG4gKiBcbiAqIEBwYXJhbSBueCBOdW1iZXIgb2YgZ3JpZHBvaW50cyBhbG9uZyB4XG4gKiBAcGFyYW0gbnkgTnVtYmVyIG9mIGdyaWRwb2ludHMgYWxvbmcgeVxuICogQHBhcmFtIHhyYW5nZSBSYW5nZSBhbG9uZyB4IGF4aXNcbiAqIEBwYXJhbSB5cmFuZ2UgUmFuZ2UgYWxvbmcgeSBheGlzXG4gKiBAcGFyYW0gZnVuYyAoeCx5KSA9PiBudW1iZXIsIGZ1bmN0aW9uIHRvIHBsb3RcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldENvbnRvdXJWYWx1ZXMobng6IG51bWJlciwgbnk6IG51bWJlciwgeHJhbmdlOiBEb21haW5SYW5nZSwgeXJhbmdlOiBEb21haW5SYW5nZSwgZnVuYzogKHg6IG51bWJlciwgeTogbnVtYmVyKSA9PiBudW1iZXIpIHtcbiAgICBsZXQgdmFsdWVzID0gbmV3IEFycmF5KG54ICogbnkpXG5cbiAgICBmb3IgKHZhciBqID0gMC41LCBrID0gMDsgaiA8IG55OyArK2opIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDAuNTsgaSA8IG54OyArK2ksICsraykge1xuICAgICAgICAgICAgY29uc3QgeHZhbCA9ICgoaSAvIG54KSAqICh4cmFuZ2VbMV0gLSB4cmFuZ2VbMF0pKSArIHhyYW5nZVswXTtcbiAgICAgICAgICAgIGNvbnN0IHl2YWwgPSAoMSAtIChqIC8gbnkpKSAqICh5cmFuZ2VbMV0gLSB5cmFuZ2VbMF0pICsgeXJhbmdlWzBdO1xuICAgICAgICAgICAgdmFsdWVzW2tdID0gZnVuYyh4dmFsLCB5dmFsKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB2YWx1ZXNcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVuaWZvcm0oYSwgYikge1xuICAgIHJldHVybiBNYXRoLnJhbmRvbSgpICogKGIgLSBhKSArIGE7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZW5Vbmlmb3JtKGE6bnVtYmVyLCBiOm51bWJlciwgbjpudW1iZXIpIHtcbiAgICByZXR1cm4gcmFuZ2UoMCwgbikubWFwKHggPT4ge3JldHVybiB7eDogdW5pZm9ybShhLCBiKSwgeTogdW5pZm9ybShhLGIpfX0pXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBub3JtYWwobWVhbiwgdmFyaWFuY2UpIHtcbiAgICB2YXIgcyA9IDA7XG4gICAgd2hpbGUgKHMgPT0gMCB8fCBzID4gMSkge1xuICAgICAgICB2YXIgdSA9IHVuaWZvcm0oLTEsMSksXG4gICAgICAgIHYgPSB1bmlmb3JtKC0xLDEpO1xuICAgICAgICBzID0gdSAqIHUgKyB2ICogdjtcbiAgICB9XG5cbiAgICB2YXIgc3RhbmRhcmQgPSBNYXRoLnNxcnQoLTIgKiBNYXRoLmxvZyhzKSAvIHMpICogdTtcbiAgICByZXR1cm4gbWVhbiArIE1hdGguc3FydCh2YXJpYW5jZSkgKiBzdGFuZGFyZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdlbk5vcm1hbChtZWFuOm51bWJlciwgdmFyaWFuY2U6bnVtYmVyLCBuOm51bWJlcikge1xuICAgIHJldHVybiByYW5nZSgwLCBuKS5tYXAoeCA9PiB7cmV0dXJuIHt4OiBub3JtYWwobWVhbiwgdmFyaWFuY2UpLCB5OiB1bmlmb3JtKG1lYW4sdmFyaWFuY2UpfX0pXG59IiwiaW1wb3J0ICogYXMgZDMgZnJvbSAnZDMnXG5pbXBvcnQgeyBWZWN0b3IyRCB9IGZyb20gJy4uL3R5cGVzJ1xuaW1wb3J0IHsgU1ZHVmlzQ29tcG9uZW50LCBTVkdPcHRpb25zLCBNYXJnaW5JbmZvIH0gZnJvbSBcIi4vU1ZHVmlzQ29tcG9uZW50XCJcblxuZXhwb3J0IGludGVyZmFjZSBDaGFydE9wdGlvbnMgZXh0ZW5kcyBTVkdPcHRpb25zIHtcbiAgICB4cmFuZ2U6IFtudW1iZXIsIG51bWJlcl1cbiAgICB5cmFuZ2U6IFtudW1iZXIsIG51bWJlcl1cbiAgICBwYWQ6IE1hcmdpbkluZm8gICAgICAgICAgICAgLy8gRGlzdGFuY2UgZnJvbSBlZGdlcy4gRGVtYXJjYXRlIHdoZW4gdGhpbmdzIGFyZSB0b28gY2xvc2UgdG8gdGhlIGVkZ2Vcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDaGFydFNjYWxlcyB7XG4gICAgeD86IGQzLlNjYWxlTGluZWFyPG51bWJlciwgbnVtYmVyPixcbiAgICB5PzogZDMuU2NhbGVMaW5lYXI8bnVtYmVyLCBudW1iZXI+LFxufVxuLyoqXG4gKiBDcmVhdGUgYSBjbGFzcyB0aGF0IGNhbiBiZSB1c2VkIGZvciBwbG90dGluZyBjaGFydHMgKGxpbmUgZ3JhcGhzLCBiYXIgZ3JhcGhzLCBldGMuKS5cbiAqL1xuZXhwb3J0IGFic3RyYWN0IGNsYXNzIENoYXJ0MkQ8RGF0YUludGVyZmFjZT4gZXh0ZW5kcyBTVkdWaXNDb21wb25lbnQ8RGF0YUludGVyZmFjZT4ge1xuICAgIG9wdGlvbnM6IENoYXJ0T3B0aW9uc1xuICAgIHNjYWxlczogQ2hhcnRTY2FsZXNcblxuICAgIC8vIFB1dCBhIHZlY3RvciBpbnRvIHRoZSBjb29yZGluYXRlIHN5c3RlbSB1c2VkIGJ5IHRoZSB2aXN1YWxpemF0aW9uXG4gICAgaW50b1Zpcyh2OiBWZWN0b3IyRCkge1xuICAgICAgICByZXR1cm4geyB4OiB0aGlzLnNjYWxlcy54KHYueCksIHk6IHRoaXMuc2NhbGVzLnkodi55KSB9XG4gICAgfVxuXG4gICAgLy8gVGFrZSBhIHZlY3RvciBpbiB0aGUgY29vcmRpbmF0ZSBzeXN0ZW0gYW5kIHJldHVybiBpdCB0byB0aGUgbWF0aCBjb29yZGluYXRlc1xuICAgIGludG9NYXRoKHY6IFZlY3RvcjJEKSB7XG4gICAgICAgIHJldHVybiB7IHg6IHRoaXMuc2NhbGVzLnguaW52ZXJ0KHYueCksIHk6IHRoaXMuc2NhbGVzLnkuaW52ZXJ0KHYueSkgfVxuICAgIH1cblxuICAgIC8vIEluc3RhbnRpYXRlIHRoZSBheGVzIG9mIHRoZSBjaGFydC4gUmVpbXBsZW1lbnQgZGVwZW5kaW5nIG9uIGhvdyB3ZSB3YW50IHRoZSBheGVzIHRvIGFwcGVhclxuICAgIHByb3RlY3RlZCBhYnN0cmFjdCBjcmVhdGVBeGVzKClcblxuICAgIC8vIEluc3RhbnRpYXRlIHRoZSBzY2FsZXMgZnJvbSB0aGUgeHJhbmdlIGFuZCB0aGUgeXJhbmdlXG4gICAgcHJvdGVjdGVkIGFic3RyYWN0IGNyZWF0ZVNjYWxlcygpXG59IiwiaW1wb3J0IHtWaXNDb21wb25lbnR9IGZyb20gJy4vVmlzQ29tcG9uZW50J1xuaW1wb3J0IHtTaW1wbGVFdmVudEhhbmRsZXJ9IGZyb20gJy4vU2ltcGxlRXZlbnRIYW5kbGVyJ1xuaW1wb3J0IHtEM1NlbH0gZnJvbSAnLi94ZDMnXG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBIVE1MVmlzQ29tcG9uZW50PERhdGFJbnRlcmZhY2U+IGV4dGVuZHMgVmlzQ29tcG9uZW50PERhdGFJbnRlcmZhY2U+IHtcblxuICAgIHByb3RlY3RlZCBjb25zdHJ1Y3RvcihkM3BhcmVudDogRDNTZWwsIGV2ZW50SGFuZGxlcj86IFNpbXBsZUV2ZW50SGFuZGxlciwgb3B0aW9uczoge30gPSB7fSwgSUQ9MCkge1xuICAgICAgICBzdXBlcihkM3BhcmVudCwgZXZlbnRIYW5kbGVyLCBJRClcbiAgICAgICAgdGhpcy5pbml0SFRNTChvcHRpb25zKVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIE11c3QgYmUgY2FsbGVkIGltbWVkaWF0ZWx5IGFmdGVyIHRoZSBgc3VwZXIoKWAgY29uc3RydWN0b3IgY2FsbCBvZiBpbmhlcmV0aW5nIGNsYXNzZXNcbiAgICAgKiBcbiAgICAgKiAtIENyZWF0ZXMgYGJhc2VgIGF0dHJpYnV0ZSBvbiBwYXJlbnRcbiAgICAgKiAtIEFkZCBhZGRpdGlvbmFsIHN0YXRpYyBlbGVtZW50cyBkZWZpbmVkIGluIGBpbml0KClgXG4gICAgICovXG4gICAgaW5pdEhUTUwob3B0aW9uczoge30gPSB7fSkge1xuICAgICAgICB0aGlzLnVwZGF0ZU9wdGlvbnMob3B0aW9ucylcbiAgICAgICAgdGhpcy5iYXNlID0gdGhpcy5wYXJlbnQuYXBwZW5kKCdkaXYnKVxuICAgIH1cbn0iLCJpbXBvcnQgeyBEM1NlbCB9IGZyb20gXCIuL3hkM1wiXG5pbXBvcnQgeyBWaXNDb21wb25lbnQgfSBmcm9tIFwiLi9WaXNDb21wb25lbnRcIlxuaW1wb3J0IHsgU2ltcGxlRXZlbnRIYW5kbGVyIH0gZnJvbSBcIi4vU2ltcGxlRXZlbnRIYW5kbGVyXCI7XG5pbXBvcnQgeyBTVkcgfSBmcm9tIFwiLi9TVkdwbHVzXCI7XG5cbmV4cG9ydCB0eXBlIE1hcmdpbkluZm8gPSB7XG4gICAgdG9wOm51bWJlclxuICAgIHJpZ2h0Om51bWJlclxuICAgIGJvdHRvbTpudW1iZXJcbiAgICBsZWZ0Om51bWJlclxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNWR09wdGlvbnMge1xuICAgIG1hcmdpbjogTWFyZ2luSW5mb1xuICAgIG1heFdpZHRoOiBudW1iZXIgICAgICAgIC8vIFRoZSB0b3RhbCB3aWR0aCBvZiB0aGUgY29tcG9uZW50XG4gICAgbWF4SGVpZ2h0OiBudW1iZXIgICAgICAgLy8gVGhlIHRvdGFsIGhlaWdodCBvZiB0aGUgY29tcG9uZW50XG4gICAgd2lkdGg/OiBudW1iZXIgICAgICAgICAgLy8gVGhlIHRvdGFsIHdpZHRoIC0gYXBwbGljYWJsZSBtYXJnaW5zXG4gICAgaGVpZ2h0PzogbnVtYmVyICAgICAgICAgLy8gVGhlIHRvdGFsIGhlaWdodCAtIGFwcGxpY2FibGUgbWFyZ2luc1xufVxuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgU1ZHVmlzQ29tcG9uZW50PERhdGFJbnRlcmZhY2U+IGV4dGVuZHMgVmlzQ29tcG9uZW50PERhdGFJbnRlcmZhY2U+IHtcbiAgICBwcm90ZWN0ZWQgc3ZnOiBEM1NlbFxuICAgIGxheWVyczogeyBtYWluPzogRDNTZWwsIGZnPzogRDNTZWwsIGJnPzogRDNTZWwsIFtrZXk6IHN0cmluZ106IEQzU2VsIH07XG4gICAgcHJvdGVjdGVkIG9wdGlvbnM6IFNWR09wdGlvbnMgPSB7XG4gICAgICAgIG1hcmdpbjogeyB0b3A6IDAsIHJpZ2h0OiAwLCBib3R0b206IDAsIGxlZnQ6IDAgfSxcbiAgICAgICAgbWF4V2lkdGg6IDQ1MCxcbiAgICAgICAgbWF4SGVpZ2h0OiA0NTAsXG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGNvbnN0cnVjdG9yKGQzcGFyZW50OiBEM1NlbCwgZXZlbnRIYW5kbGVyPzogU2ltcGxlRXZlbnRIYW5kbGVyLCBvcHRpb25zOiB7fSA9IHt9LCBJRD0wKSB7XG4gICAgICAgIHN1cGVyKGQzcGFyZW50LCBldmVudEhhbmRsZXIsIElEKVxuICAgIH1cblxuICAgIC8qKiBcbiAgICAgKiBNdXN0IGJlIGNhbGxlZCBpbW1lZGlhdGVseSBhZnRlciB0aGUgYHN1cGVyKClgIGNvbnN0cnVjdG9yIGNhbGwgb2YgaW5oZXJldGluZyBjbGFzc2VzLlxuICAgICAqIFxuICAgICAqIC0gQ2FsY3VsYXRlcyBoZWlnaHQgYW5kIHdpZHRoIGZvciBvcHRpb25zXG4gICAgICogLSBBZGRzICdzdmcnIGFuZCAnYmFzZScgb2JqZWN0cyB0byB0aGUgZGl2LlxuICAgICAqIC0gQWRkcyBsYXllcnMgb24gdGhlIGJhc2UgdG8gd29yayB3aXRoIGlmIHBhc3NlZFxuICAgICAqIC0gUnVucyBkZWZpbmVkIHN0YXRpYyBpbml0aWFsaXphdGlvbiBkZWZpbmVkIGluIGBpbml0KClgXG4gICAgICovXG4gICAgcHJvdGVjdGVkIGluaXRTVkcob3B0aW9ucyA9IHt9LCBkZWZhdWx0TGF5ZXJzID0gW1wiYmdcIiwgXCJtYWluXCIsIFwiZmdcIl0pIHtcbiAgICAgICAgdGhpcy51cGRhdGVPcHRpb25zKG9wdGlvbnMpXG4gICAgICAgIGNvbnN0IG9wID0gdGhpcy5vcHRpb25zO1xuICAgICAgICBvcC53aWR0aCA9IG9wLm1heFdpZHRoIC0gKG9wLm1hcmdpbi5sZWZ0ICsgb3AubWFyZ2luLnJpZ2h0KVxuICAgICAgICBvcC5oZWlnaHQgPSBvcC5tYXhIZWlnaHQgLSAob3AubWFyZ2luLnRvcCArIG9wLm1hcmdpbi5ib3R0b20pXG5cbiAgICAgICAgdGhpcy5zdmcgPSB0aGlzLnBhcmVudC5hcHBlbmQoJ3N2ZycpXG4gICAgICAgICAgICAuYXR0cihcIndpZHRoXCIsIFwiMTAwJVwiKVxuICAgICAgICAgICAgLmF0dHIoXCJoZWlnaHRcIiwgXCIxMDAlXCIpXG4gICAgICAgICAgICAuYXR0cihcInZpZXdCb3hcIiwgYDAgMCAke29wLndpZHRoICsgb3AubWFyZ2luLmxlZnQgKyBvcC5tYXJnaW4ucmlnaHR9ICR7b3AuaGVpZ2h0ICsgb3AubWFyZ2luLnRvcCArIG9wLm1hcmdpbi5ib3R0b219YClcbiAgICAgICAgICAgIC5hcHBlbmQoJ2cnKVxuICAgICAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgU1ZHLnRyYW5zbGF0ZShvcC5tYXJnaW4ubGVmdCwgb3AubWFyZ2luLnRvcCkpXG5cbiAgICAgICAgLy8gdGhpcy5zdmcgPSBTVkcuYWRkU1ZHKHRoaXMucGFyZW50LCBvcC53aWR0aCwgb3AuaGVpZ2h0LCBvcC5tYXJnaW4pXG4gICAgICAgIHRoaXMuYmFzZSA9IFNWRy5ncm91cCh0aGlzLnN2ZywgJycpOyAvLyBMZXQgSFRNTCBhdXRob3IgYXNzaWduIHRoZSBjbGFzcyBuYW1lIGFuZCBJRFxuICAgICAgICB0aGlzLmxheWVycyA9IHt9O1xuICAgICAgICBpZiAoZGVmYXVsdExheWVycykge1xuICAgICAgICAgICAgLy8gY29uc3RydWN0aW9uIG9yZGVyIGlzIGltcG9ydGFudCAhXG4gICAgICAgICAgICBkZWZhdWx0TGF5ZXJzLmZvckVhY2gobGF5ZXIgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubGF5ZXJzW2xheWVyXSA9IFNWRy5ncm91cCh0aGlzLmJhc2UsIGxheWVyKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5pbml0KClcbiAgICB9XG59IiwiaW1wb3J0ICogYXMgZDMgZnJvbSBcImQzXCJcbmltcG9ydCAqIGFzIFIgZnJvbSAncmFtZGEnXG5pbXBvcnQge01hcmdpbkluZm99IGZyb20gJy4vU1ZHVmlzQ29tcG9uZW50J1xuaW1wb3J0IHtEM1NlbH0gZnJvbSAnLi4vdXRpbC94ZDMnXG5cbi8qKlxuICogQ3JlYXRlZCBieSBoZW4gb24gNS8xNS8xNy5cbiAqIE1vZGlmaWVkIGJ5IGhvbyBvbiA0LzE2LzE5LlxuICovXG5cbmV4cG9ydCBjbGFzcyBTVkcge1xuICAgIFxuICAgIHN0YXRpYyB0cmFuc2xhdGUoeDpudW1iZXIsIHk6bnVtYmVyKTpzdHJpbmcge1xuICAgICAgICByZXR1cm4gYHRyYW5zbGF0ZSgke3h9LCR7eX0pYFxuICAgIH1cblxuICAgIHN0YXRpYyByb3RhdGUoZGVnOm51bWJlciwgb3JpZz86e3g6bnVtYmVyLCB5Om51bWJlcn0pOnN0cmluZyB7XG4gICAgICAgIGlmIChvcmlnID09IG51bGwpIFxuICAgICAgICAgICAgcmV0dXJuIGByb3RhdGUoJHtkZWd9KWBcblxuICAgICAgICByZXR1cm4gYHJvdGF0ZSgke2RlZ30sJHtvcmlnLnh9LCR7b3JpZy55fSlgXG4gICAgfVxuXG4gICAgc3RhdGljIHNrZXcoZGVneDpudW1iZXIsIGRlZ3k9MCkge1xuICAgICAgICByZXR1cm4gYHNrZXcoJHtkZWd4fSwgJHtkZWd5fSlgXG4gICAgfVxuXG4gICAgc3RhdGljIHNrZXdYKGRlZzpudW1iZXIpIHtcbiAgICAgICAgcmV0dXJuIGBza2V3WCgke2RlZ30pYFxuICAgIH1cblxuICAgIHN0YXRpYyBza2V3WShkZWc6bnVtYmVyKSB7XG4gICAgICAgIHJldHVybiBgc2tld1koJHtkZWd9KWBcbiAgICB9XG5cbiAgICBzdGF0aWMgc2NhbGUoeDpudW1iZXIsIHk/Om51bWJlcik6c3RyaW5nIHtcbiAgICAgICAgY29uc3QgeXNjYWxlID0geSAhPSBudWxsID8geSA6IHg7XG5cbiAgICAgICAgcmV0dXJuIGBzY2FsZSgke3h9LCAke3lzY2FsZX0pYFxuICAgIH1cblxuICAgIHN0YXRpYyBncm91cChwYXJlbnQsIGNsYXNzZXMsIHBvcyA9IHt4OiAwLCB5OiAwfSkge1xuICAgICAgICByZXR1cm4gcGFyZW50LmFwcGVuZCgnZycpXG4gICAgICAgICAgICAuYXR0cignY2xhc3MnLCBjbGFzc2VzKVxuICAgICAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgU1ZHLnRyYW5zbGF0ZShwb3MueCwgcG9zLnkpKVxuICAgIH1cblxuICAgIHN0YXRpYyBhZGRTVkcocGFyZW50OkQzU2VsLCB3aWR0aDpudW1iZXIsIGhlaWdodDpudW1iZXIsIG1hcmdpbjpNYXJnaW5JbmZvKTpEM1NlbCB7XG5cbiAgICAgICAgdmFyIHN2ZyA9IHBhcmVudC5hcHBlbmQoXCJzdmdcIilcbiAgICAgICAgICAgIC5hdHRyKFwid2lkdGhcIiwgXCIxMDAlXCIpXG4gICAgICAgICAgICAuYXR0cihcImhlaWdodFwiLCBcIjEwMCVcIilcbiAgICAgICAgICAgIC5hdHRyKFwidmlld0JveFwiLCBcIjAgMCBcIiArICh3aWR0aCArIG1hcmdpbi5sZWZ0ICsgbWFyZ2luLnJpZ2h0KSArIFwiIFwiICsgKGhlaWdodCArIG1hcmdpbi50b3AgKyBtYXJnaW4uYm90dG9tKSlcbiAgICAgICAgICAgIC5hdHRyKFwicHJlc2VydmVBc3BlY3RSYXRpb1wiLCBcInhNaWRZTWlkIG1lZXRcIilcbiAgICAgICAgLmFwcGVuZChcImdcIilcbiAgICAgICAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIFNWRy50cmFuc2xhdGUobWFyZ2luLmxlZnQsIG1hcmdpbi50b3ApKTtcblxuICAgICAgICByZXR1cm4gc3ZnO1xuICAgIH1cblxuICAgIHN0YXRpYyBhZGRBcnJvd3MocGFyZW50OkQzU2VsKSB7XG4gICAgICAgIHBhcmVudC5hcHBlbmQoJ2RlZnMnKVxuICAgICAgICAgICAgLmFwcGVuZCgnbWFya2VyJylcbiAgICAgICAgICAgIC5hdHRyKFwiaWRcIiwgXCJhcnJvd1wiKVxuICAgICAgICAgICAgLmF0dHIoXCJtYXJrZXJVbml0c1wiLCBcInN0cm9rZVdpZHRoXCIpXG4gICAgICAgICAgICAuYXR0cihcIm1hcmtlcldpZHRoXCIsIDUuNSlcbiAgICAgICAgICAgIC5hdHRyKFwibWFya2VySGVpZ2h0XCIsIDUuNSlcbiAgICAgICAgICAgIC5hdHRyKFwidmlld0JveFwiLCBcIjAgMCAxMiAxMlwiKVxuICAgICAgICAgICAgLmF0dHIoXCJyZWZYXCIsIDYpXG4gICAgICAgICAgICAuYXR0cihcInJlZllcIiwgNilcbiAgICAgICAgICAgIC5hdHRyKFwib3JpZW50XCIsICdhdXRvJylcbiAgICAgICAgICAgIC5hcHBlbmQoJ3BhdGgnKVxuICAgICAgICAgICAgLmF0dHIoJ2QnLCBcIk0yLDIgTDEwLDYgTDIsMTAgTDYsNiBMMiwyXCIpXG4gICAgICAgICAgICAvLyAuc3R5bGUoXCJmaWxsOiAjZjAwXCIpXG4gICAgfVxuXG4gICAgc3RhdGljIGluc2VydEFycm93KHBhcmVudDpEM1NlbCwgeDE6bnVtYmVyLCB5MTpudW1iZXIsIHgyOm51bWJlciwgeTI6bnVtYmVyLCBjb2xvcjpzdHJpbmcsIHdpZHRoOm51bWJlcikge1xuICAgICAgICByZXR1cm4gcGFyZW50LmFwcGVuZChcImxpbmVcIilcbiAgICAgICAgICAgICAuYXR0cihcIngxXCIseDEpICBcbiAgICAgICAgICAgICAuYXR0cihcInkxXCIseTEpICBcbiAgICAgICAgICAgICAuYXR0cihcIngyXCIseDIpICBcbiAgICAgICAgICAgICAuYXR0cihcInkyXCIseTIpICBcbiAgICAgICAgICAgICAuYXR0cihcInN0cm9rZVwiLGNvbG9yKSAgXG4gICAgICAgICAgICAgLmF0dHIoXCJzdHJva2Utd2lkdGhcIix3aWR0aCkgIFxuICAgICAgICAgICAgIC5hdHRyKFwibWFya2VyLWVuZFwiLFwidXJsKCNhcnJvdylcIik7ICBcbiAgICB9XG5cbiAgICBzdGF0aWMgbWVzaGdyaWQobng6IG51bWJlciwgbnk6IG51bWJlciwgeHJhbmdlOiBudW1iZXJbXSwgeXJhbmdlOiBudW1iZXJbXSkge1xuICAgICAgICBjb25zdCBzY2FsZSA9ICh2YWxzOm51bWJlcltdLCByYW5nZSkgPT4gdmFscy5tYXAodiA9PiAodiAqIChyYW5nZVsxXSAtIHJhbmdlWzBdKSkgKyByYW5nZVswXSk7XG5cbiAgICAgICAgY29uc3QgcG9pbnRpZnkgPSAoeHZhbHM6bnVtYmVyW10sIHl2YWxzOm51bWJlcltdKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBvdXQgPSBbXVxuICAgICAgICAgICAgeHZhbHMuZm9yRWFjaCh4ID0+IHtcbiAgICAgICAgICAgICAgICB5dmFscy5mb3JFYWNoKHkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBvdXQucHVzaCh7eDogeCwgeTogeX0pXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICByZXR1cm4gb3V0XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB4dmFscyA9IHNjYWxlKFIucmFuZ2UoMCwgbngpLm1hcCh4ID0+ICh4ICsgMC41KSAvIG54KSwgeHJhbmdlKVxuICAgICAgICBjb25zdCB5dmFscyA9IHNjYWxlKFIucmFuZ2UoMCwgbnkpLm1hcCh5ID0+ICh5ICsgMC41KSAvIG55KSwgeXJhbmdlKVxuICAgICAgICByZXR1cm4gcG9pbnRpZnkoeHZhbHMsIHl2YWxzKVxuICAgIH1cblxufVxuXG5leHBvcnQgY2xhc3MgU1ZHTWVhc3VyZW1lbnRzIHtcblxuICAgIHByaXZhdGUgbWVhc3VyZUVsZW1lbnQ6IGQzLlNlbGVjdGlvbjxhbnksIGFueSwgYW55LCBhbnk+O1xuXG4gICAgY29uc3RydWN0b3IoYmFzZUVsZW1lbnQsIGNsYXNzZXMgPSAnJykge1xuICAgICAgICB0aGlzLm1lYXN1cmVFbGVtZW50ID0gYmFzZUVsZW1lbnQuYXBwZW5kKCd0ZXh0JylcbiAgICAgICAgICAgIC5hdHRyKCd4JywgMClcbiAgICAgICAgICAgIC5hdHRyKCd5JywgLTIwKVxuICAgICAgICAgICAgLmF0dHIoJ2NsYXNzJywgY2xhc3NlcylcblxuICAgIH1cblxuICAgIHRleHRMZW5ndGgodGV4dCwgc3R5bGUgPSBudWxsKSB7XG4gICAgICAgIHRoaXMubWVhc3VyZUVsZW1lbnQuYXR0cignc3R5bGUnLCBzdHlsZSk7XG4gICAgICAgIHRoaXMubWVhc3VyZUVsZW1lbnQudGV4dCh0ZXh0KTtcbiAgICAgICAgY29uc3QgdGwgPSAoPFNWR1RleHRFbGVtZW50PiB0aGlzLm1lYXN1cmVFbGVtZW50Lm5vZGUoKSkuZ2V0Q29tcHV0ZWRUZXh0TGVuZ3RoKCk7XG4gICAgICAgIHRoaXMubWVhc3VyZUVsZW1lbnQudGV4dCgnJyk7XG5cbiAgICAgICAgcmV0dXJuIHRsO1xuICAgIH1cbn0iLCIvKipcbiAqIENyZWF0ZWQgYnkgaGVuIG9uIDUvMTUvMTcuXG4gKiBNb2RpZmllZCBieSBob28gb24gNC8xNi8xOS5cbiAqL1xuZXhwb3J0IGNsYXNzIFNpbXBsZUV2ZW50SGFuZGxlciB7XG5cbiAgICBlbGVtZW50OiBFbGVtZW50O1xuICAgIGV2ZW50TGlzdGVuZXJzOiBvYmplY3RbXTtcblxuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnQ6IEVsZW1lbnQpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgICAgICAgdGhpcy5ldmVudExpc3RlbmVycyA9IFtdXG4gICAgfVxuXG4gICAgYmluZChldmVudE5hbWVzOiBzdHJpbmcsIGV2ZW50RnVuY3Rpb246IEZ1bmN0aW9uKSB7XG4gICAgICAgIGZvciAoY29uc3QgZXZlbnROYW1lIG9mIGV2ZW50TmFtZXMuc3BsaXQoJyAnKSkge1xuICAgICAgICAgICAgdGhpcy5ldmVudExpc3RlbmVycy5wdXNoKHtldmVudE5hbWUsIGV2ZW50RnVuY3Rpb259KTtcbiAgICAgICAgICAgIGNvbnN0IGV2ZW50RnVuY3Rpb25XcmFwID0gZSA9PiBldmVudEZ1bmN0aW9uKGUuZGV0YWlsLCBlKTtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgZXZlbnRGdW5jdGlvbldyYXAsIGZhbHNlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldExpc3RlbmVycygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZXZlbnRMaXN0ZW5lcnM7XG4gICAgfVxuXG4gICAgdHJpZ2dlcihldmVudE5hbWU6IHN0cmluZywgZGV0YWlsOiBvYmplY3QpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KGV2ZW50TmFtZSwge2RldGFpbH0pKTtcbiAgICB9XG59IiwibGV0IHRoZV91bmlxdWVfaWRfY291bnRlciA9IDA7XG5sZXQgdGhlX3VuaXF1ZV9zdHJpbmdfY291bnRlciA9IDA7XG5cbmV4cG9ydCBjbGFzcyBVSWQge1xuICAgIHN0YXRpYyB1aWQoKTogbnVtYmVyIHtcbiAgICAgICAgdGhlX3VuaXF1ZV9pZF9jb3VudGVyICs9IDE7XG4gICAgICAgIHJldHVybiB0aGVfdW5pcXVlX2lkX2NvdW50ZXJcbiAgICB9XG4gICAgc3RhdGljIHNpbXBsZVVJZChwcmVmaXg9JycpOiBzdHJpbmcge1xuICAgICAgICB0aGVfdW5pcXVlX3N0cmluZ19jb3VudGVyICs9IDE7XG5cbiAgICAgICAgcmV0dXJuIHByZWZpeCArIHRoZV91bmlxdWVfc3RyaW5nX2NvdW50ZXI7XG4gICAgfVxufVxuIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IEhlbmRyaWsgU3Ryb2JlbHQgKGhlbmRyaWsuc3Ryb2JlbHQuY29tKSBvbiAxMi8zLzE2LlxuICogTW9kaWZpZWQgYnkgQmVuIEhvb3ZlciBvbiA0LzE2LzIwMTlcbiAqL1xuaW1wb3J0IHsgRDNTZWwgfSBmcm9tIFwiLi94ZDNcIlxuaW1wb3J0IHsgU2ltcGxlRXZlbnRIYW5kbGVyIH0gZnJvbSBcIi4vU2ltcGxlRXZlbnRIYW5kbGVyXCI7XG5cbi8qKlxuICogU2hvdWxkIGhhdmUgVkNvbXBvbmVudEhUTUwgYW5kIFZDb21wb25lbnRTVkdcbiAqXG4gKiBDb21tb24gUHJvcGVydGllczpcbiAqIC0gZXZlbnRzXG4gKiAtIGV2ZW50SGFuZGxlciAoViBpbXBvcnRhbnQpXG4gKiAtIG9wdGlvbnMgKE1haW50YWlucyBwdWJsaWMgc3RhdGUuIENhbiBleHBvc2UgdGhlc2Ugd2l0aCBnZXQvc2V0IGZ1bmN0aW9ucyB3aXRoIGF1dG8gdXBkYXRlKVxuICogLSBfY3VycmVudCAoTWFpbnRhaW5zIHByaXZhdGUgc3RhdGUpXG4gKiAtIGNzc05hbWUgKHN5bmNlZCB3aXRoIGNvcnJlc3BvbmRpbmcgQ1NTIGZpbGUpXG4gKiAtIHBhcmVudCAoSFRNTCBpcyBkaXYgY29udGFpbmluZyB0aGUgYmFzZSwgU1ZHIGlzIFNWRyBlbGVtZW50KVxuICogLSBiYXNlIChIVE1MIGlzIGRpdiB3aXRoIGNzc19uYW1lIGVzdGFibGlzaGVkKVxuICogLSBfZGF0YSAoRGF0YSB1c2VkIHRvIGNyZWF0ZSBhbmQgcmVuZGVyIHRoZSBjb21wb25lbnQpXG4gKiAtIF9yZW5kZXJEYXRhIChEYXRhIG5lZWRlZCB0byBkaXNwbGF5LiBUaGlzIG1heSBub3QgYmUgbmVlZGVkLCBidXQgaXMgY3VycmVudGx5IHVzZWQgaW4gaGlzdG9ncmFtKSAqICogQ29tbW9uIE1ldGhvZHM6XG4gKiAtIGNvbnN0cnVjdG9yXG4gKiAtIF9yZW5kZXIoKSAgICAgIENvbnNpZGVyIHJlcGxhY2luZyB3aXRoIGBfdXBkYXRlRGF0YSgpYCB0aGF0IHVwZGF0ZXMgYWxsIGRhdGEgYXQgb25jZVxuICogLSB1cGRhdGUoKSAgICAgICBDb25zaWRlciByZXBsYWNpbmcgdGhpcyB3aXRoIGBkYXRhKClgIHRoYXQgYXV0byB1cGRhdGVzIGRhdGFcbiAqIC0gcmVkcmF3KClcbiAqIC0gZGVzdHJveSgpXG4gKi9cblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFZpc0NvbXBvbmVudDxEYXRhSW50ZXJmYWNlPiB7XG4gICAgLyoqXG4gICAgICogR2l2ZW4gYW4gSUQsIGNyZWF0ZSBhIG5ldyBpbnN0YW5jZSBvZiB0aGlzIGNsYXNzIHdpdGggdGhlIGV2ZW50cyBhbmQgY3NzX25hbWUgbW9kaWZpZWQgYnkgdGhlIGlkXG4gICAgICovXG4gICAgbmV3SW5zdGFuY2UoaWQ6IG51bWJlcikgeyB9XG5cbiAgICAvKipcbiAgICAgKiBUaGUgc3RhdGljIHByb3BlcnR5IHRoYXQgY29udGFpbnMgYWxsIGNsYXNzIHJlbGF0ZWQgZXZlbnRzLlxuICAgICAqIFNob3VsZCBiZSBvdmVyd3JpdHRlbiBhbmQgZXZlbnQgc3RyaW5ncyBoYXZlIHRvIGJlIHVuaXF1ZSEhXG4gICAgICovXG5cbiAgICBwcm90ZWN0ZWQgZ2V0IGJhc2VOYW1lKCkge1xuICAgICAgICByZXR1cm4gYCR7dGhpcy5jc3NuYW1lfV9JRCR7dGhpcy5JRH1gXG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGNzc25hbWU6IHN0cmluZzsgICAgICAgICAgICAvLyBNYWtlIHRoZSBzYW1lIGFzIHRoZSBjb3JyZXNwb25kaW5nIGNzcyBmaWxlXG4gICAgcHJvdGVjdGVkIElEOiBudW1iZXI7ICAgICAgICAgICAgICAgICAvLyBJRCBhc3NvY2lhdGVkIHRvIHVuaXF1ZSBpbnN0YW5jZSBvZiB2aXN1YWxpemF0aW9uLiBEZWZhdWx0cyB0byAwXG5cbiAgICBwcm90ZWN0ZWQgYWJzdHJhY3Qgb3B0aW9uczoge307XG4gICAgcHJvdGVjdGVkIGV2ZW50SGFuZGxlcjogU2ltcGxlRXZlbnRIYW5kbGVyO1xuICAgIHBhcmVudDogRDNTZWw7ICAgICAgICAgICAgICAgICAgICAgICAgLy8gUGFyZW50IGQzIHNlbGVjdGlvblxuICAgIGJhc2U6IEQzU2VsOyAgICAgICAgICAgICAgICAgLy8gZDMgc2VsZWN0aW9uIHRoYXQgaXMgY3JlYXRlZCBieSB0aGUgaW5pdFxuICAgIHByb3RlY3RlZCBfZGF0YTogRGF0YUludGVyZmFjZTtcbiAgICBwcm90ZWN0ZWQgcmVuZGVyRGF0YTogdW5rbm93bjtcblxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtEM1NlbH0gZDNwYXJlbnQgIEQzIHNlbGVjdGlvbiBvZiBwYXJlbnQgU1ZHIERPTSBFbGVtZW50XG4gICAgICogQHBhcmFtIHtTaW1wbGVFdmVudEhhbmRsZXJ9IGV2ZW50SGFuZGxlciBhIGdsb2JhbCBldmVudCBoYW5kbGVyIG9iamVjdCBvciAnbnVsbCcgZm9yIGxvY2FsIGV2ZW50IGhhbmRsZXJcbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgY29uc3RydWN0b3IoZDNwYXJlbnQ6IEQzU2VsLCBldmVudEhhbmRsZXI/OiBTaW1wbGVFdmVudEhhbmRsZXIsIElEID0gMCkge1xuICAgICAgICB0aGlzLnBhcmVudCA9IGQzcGFyZW50O1xuICAgICAgICB0aGlzLmV2ZW50SGFuZGxlciA9IGV2ZW50SGFuZGxlciB8fCBuZXcgU2ltcGxlRXZlbnRIYW5kbGVyKHRoaXMucGFyZW50Lm5vZGUoKSk7XG4gICAgICAgIHRoaXMuSUQgPSBJRDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTaG91bGQgYmUgb3ZlcndyaXR0ZW4gdG8gY3JlYXRlIG5lZWRlZCBzdGF0aWMgRE9NIGVsZW1lbnRzXG4gICAgICovXG4gICAgcHJvdGVjdGVkIGFic3RyYWN0IGluaXQoKTtcblxuICAgIC8qKlxuICAgICAqIEZvbGxvdyB0aGUgRDMgY29udmVudGlvbjogcmV0cmlldmUgdGhlIGRhdGEgaW5zaWRlIHRoZSBjbGFzcyBpZiBudWxsLiBPdGhlcndpc2UsIHNldCB0aGUgZGF0YSBhbmQgcmV0dXJuICd0aGlzJ1xuICAgICAqL1xuICAgIGFic3RyYWN0IGRhdGEoKTogRGF0YUludGVyZmFjZTtcbiAgICBhYnN0cmFjdCBkYXRhKHg6IERhdGFJbnRlcmZhY2UpOiB0aGlzO1xuXG4gICAgLyoqXG4gICAgICogU2V0IG1hbnkgb3B0aW9ucyBhdCBvbmNlXG4gICAgICpcbiAgICAgKiBAcGFyYW0gb3B0aW9ucyBSZXNldCBvcHRpb25zIHRvIHBhc3NlZCB2YWx1ZXNcbiAgICAgKi9cbiAgICB1cGRhdGVPcHRpb25zKG9wdGlvbnM6IHt9KSB7XG4gICAgICAgIE9iamVjdC5rZXlzKG9wdGlvbnMpLmZvckVhY2goayA9PiB0aGlzLm9wdGlvbnNba10gPSBvcHRpb25zW2tdKTtcbiAgICB9XG5cbiAgICBkZXN0cm95KCkge1xuICAgICAgICB0aGlzLmJhc2UucmVtb3ZlKCk7XG4gICAgfVxufSIsImltcG9ydCAqIGFzIGQzIGZyb20gJ2QzJ1xuaW1wb3J0IHsgQmFzZVR5cGUgfSBmcm9tICdkMydcblxuZXhwb3J0IGNvbnN0IGxpbnNwYWNlID0gKHN0YXJ0LCBlbmQsIG4pID0+IHtcbiAgICBjb25zdCBkZWx0YSA9IChlbmQgLSBzdGFydCkgLyAobiAtIDEpXG4gICAgcmV0dXJuIGQzLnJhbmdlKHN0YXJ0LCBlbmQgKyBkZWx0YSwgZGVsdGEpLnNsaWNlKDAsIG4pXG59XG5cbmV4cG9ydCB0eXBlIEQzU2VsID0gZDMuU2VsZWN0aW9uPGFueSwgYW55LCBhbnksIGFueT5cbmV4cG9ydCB0eXBlIGQzUzxUIGV4dGVuZHMgQmFzZVR5cGUsIFUgPSBhbnk+ID0gZDMuU2VsZWN0aW9uPFQsIFUsIGFueSwgYW55PlxuXG5kMy5zZWxlY3Rpb24ucHJvdG90eXBlLmNsZWFyID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuc2VsZWN0QWxsKCcqJykucmVtb3ZlKCk7XG4gICAgcmV0dXJuIHRoaXM7XG59XG5cbmQzLnNlbGVjdGlvbi5wcm90b3R5cGUudG9nZ2xlQ2xhc3MgPSBmdW5jdGlvbiAoY2xhc3NOYW1lKSB7XG4gICAgdGhpcy5jbGFzc2VkKGNsYXNzTmFtZSwgIXRoaXMuY2xhc3NlZChjbGFzc05hbWUpKTtcbiAgICByZXR1cm4gdGhpcztcbn1cblxuZDMuc2VsZWN0aW9uLnByb3RvdHlwZS5zaG93ID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuc3R5bGUoJ2Rpc3BsYXknLCAnaW5pdGlhbCcpO1xuICAgIHJldHVybiB0aGlzO1xufVxuXG5kMy5zZWxlY3Rpb24ucHJvdG90eXBlLmhpZGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5zdHlsZSgnZGlzcGxheScsICdub25lJyk7XG4gICAgcmV0dXJuIHRoaXM7XG59XG5cbmQzLnNlbGVjdGlvbi5wcm90b3R5cGUudG9nZ2xlID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBpc0hpZGRlbiA9IHRoaXMuc3R5bGUoJ2Rpc3BsYXknKSA9PSAnbm9uZSc7XG4gICAgcmV0dXJuIHRoaXMuc3R5bGUoJ2Rpc3BsYXknLCBpc0hpZGRlbiA/ICdpbmhlcml0JyA6ICdub25lJyk7XG59XG5cbmQzLnNlbGVjdGlvbi5wcm90b3R5cGUuYWZ0ZXIgPSBmdW5jdGlvbiAodGFnTmFtZSkge1xuICAgIHZhciBlbGVtZW50cyA9IFtdO1xuXG4gICAgdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZ05hbWUpO1xuICAgICAgICB0aGlzLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGVsZW1lbnQsIHRoaXMubmV4dFNpYmxpbmcpO1xuICAgICAgICBlbGVtZW50cy5wdXNoKGVsZW1lbnQpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGQzLnNlbGVjdEFsbChlbGVtZW50cyk7XG59XG5cbmQzLnNlbGVjdGlvbi5wcm90b3R5cGUuYmVmb3JlID0gZnVuY3Rpb24gKHRhZ05hbWUpIHtcbiAgICB2YXIgZWxlbWVudHMgPSBbXTtcblxuICAgIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWdOYW1lKTtcbiAgICAgICAgdGhpcy5wYXJlbnROb2RlLmluc2VydEJlZm9yZShlbGVtZW50LCB0aGlzKTtcbiAgICAgICAgZWxlbWVudHMucHVzaChlbGVtZW50KTtcbiAgICB9KTtcblxuICAgIHJldHVybiBkMy5zZWxlY3RBbGwoZWxlbWVudHMpO1xufSIsImltcG9ydCAqIGFzIGQzIGZyb20gJ2QzJ1xuaW1wb3J0IHsgTGFuZHNjYXBlMkQgfSBmcm9tIFwiLi4vTGFuZHNjYXBlczJEXCJcbmltcG9ydCB7IEQzU2VsLCBsaW5zcGFjZSB9IGZyb20gJy4uL3V0aWwveGQzJ1xuaW1wb3J0IHsgVmVjdG9yMkQsIEFycmF5IH0gZnJvbSAnLi4vdHlwZXMnXG5pbXBvcnQgeyBTVkdPcHRpb25zLCBTVkdWaXNDb21wb25lbnQgfSBmcm9tICcuLi91dGlsL1NWR1Zpc0NvbXBvbmVudCdcbmltcG9ydCB7IFNpbXBsZUV2ZW50SGFuZGxlciB9IGZyb20gJy4uL3V0aWwvU2ltcGxlRXZlbnRIYW5kbGVyJztcbmltcG9ydCB7IFNWRyB9IGZyb20gJy4uL3V0aWwvU1ZHcGx1cydcbmltcG9ydCB7IGdldENvbnRvdXJWYWx1ZXMgfSBmcm9tICcuLi9wbG90dGluZydcbmltcG9ydCB7IFVwZGF0ZXIyRCB9IGZyb20gJy4uL1VwZGF0ZXIyRCdcbmltcG9ydCB7IGludGVydmFsIH0gZnJvbSAncnhqcydcbmltcG9ydCB7IHRha2UsIHN0YXJ0V2l0aCwgc2NhbiB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJ1xuaW1wb3J0ICogYXMgbmogZnJvbSBcIm51bWpzXCJcblxudHlwZSBUID0gbnVtYmVyW11cblxuaW50ZXJmYWNlIEdyYXBoT3B0aW9ucyBleHRlbmRzIFNWR09wdGlvbnMge1xuICAgIHhyYW5nZTogW251bWJlciwgbnVtYmVyXVxuICAgIHlyYW5nZTogW251bWJlciwgbnVtYmVyXVxuICAgIG46IG51bWJlciAgICAgICAgICAgICAgICAgICAvLyBOdW1iZXIgb2YgbWVzaGdyaWQgcG9pbnRzIGFsb25nIHRoZSB4IGF4aXNcbiAgICBtOiBudW1iZXIgICAgICAgICAgICAgICAgICAgLy8gTnVtYmVyIG9mIG1lc2hncmlkIHBvaW50cyBhbG9uZyB0aGUgeSBheGlzXG4gICAgcGFkOiBudW1iZXIgICAgICAgICAgICAgICAgIC8vIEFubm90YXRpb25zIHRoYXQgaGFwcGVuIGluIHRoZSBtYXJnaW4gbXVzdCB0YWtlIHBsYWNlIGBwYWRgIGRpc3RhbmNlIGZyb20gdGhlIG1haW4gZ3JhcGhcbiAgICBjaXJjbGVFdmVyeTogbnVtYmVyXG4gICAgdXBkYXRlcjogVXBkYXRlcjJEXG4gICAgeGxhYmVsOiBzdHJpbmdcbiAgICB5bGFiZWw6IHN0cmluZ1xuICAgIHRpdGxlOiBzdHJpbmdcbiAgICBjb2xvclNjYWxlOiAoeDogbnVtYmVyKSA9PiBzdHJpbmcgfCBudW1iZXJcbiAgICBtYXhUaWNrOiBudW1iZXIgLy8gbWF4IG51bWJlciBvZiBkZXNjZW50IHVwZGF0ZXMgdG8gdGFrZVxuICAgIGludGVydmFsOiBudW1iZXIgLy8gdGltZSBiZXR3ZWVuIGRlc2NlbnQgdXBkYXRlc1xufVxuXG5pbnRlcmZhY2UgR3JhcGhTY2FsZXMge1xuICAgIHg/OiBkMy5TY2FsZUxpbmVhcjxudW1iZXIsIG51bWJlcj4sXG4gICAgeT86IGQzLlNjYWxlTGluZWFyPG51bWJlciwgbnVtYmVyPixcbiAgICBjb2xvcj86ICh4OiBudW1iZXIpID0+IHN0cmluZyB8IG51bWJlcixcbiAgICBjdXJ2ZT86IGQzLkN1cnZlQ2F0bXVsbFJvbUZhY3RvcnksXG4gICAgY29udG91cnM/OiBkMy5Db250b3VycyxcbiAgICB0aHJlc2hvbGRzPzogbnVtYmVyW11cbn1cblxuaW50ZXJmYWNlIEdyYXBoU2VscyB7XG4gICAgeGF4aXM/OiBEM1NlbFxuICAgIHlheGlzPzogRDNTZWxcbiAgICBsZWdlbmQ/OiBEM1NlbFxuICAgIHRpcD86IEQzU2VsXG4gICAgeGxhYmVsPzogRDNTZWxcbiAgICB5bGFiZWw/OiBEM1NlbFxuICAgIGNpcmNsZT86IEQzU2VsXG4gICAgYXJyb3dzPzogRDNTZWxbXVxuICAgIHRpdGxlPzogRDNTZWxcbn1cblxuY29uc3QgRVZFTlRTID0ge1xuICAgIHN0ZXBBZGRlZDogXCJTaW1wbGVOZXRfU3RlcEFkZGVkXCJcbn1cblxuZXhwb3J0IGNsYXNzIENvbnRvdXJQbG90IGV4dGVuZHMgU1ZHVmlzQ29tcG9uZW50PFQ+IHtcbiAgICBjc3NuYW1lID0gXCJzaW1wbGUtZ3JhcGhcIlxuXG4gICAgX2RhdGE6IFRcblxuICAgIG9wdGlvbnM6IEdyYXBoT3B0aW9ucyA9IHtcbiAgICAgICAgbWF4V2lkdGg6IDQ1MCxcbiAgICAgICAgbWF4SGVpZ2h0OiA1MDAsXG4gICAgICAgIG1hcmdpbjogeyB0b3A6IDUwLCByaWdodDogNzUsIGJvdHRvbTogMTI1LCBsZWZ0OiA1MCB9LFxuICAgICAgICBwYWQ6IDMwLFxuICAgICAgICB4cmFuZ2U6IFswLCAxLjZdLFxuICAgICAgICB5cmFuZ2U6IFswLCAxLjZdLFxuICAgICAgICBuOiAyMDAsXG4gICAgICAgIG06IDIwMCxcbiAgICAgICAgY2lyY2xlRXZlcnk6IDQsXG4gICAgICAgIHVwZGF0ZXI6IG51bGwsXG4gICAgICAgIHhsYWJlbDogXCJ3MFwiLFxuICAgICAgICB5bGFiZWw6IFwidzFcIixcbiAgICAgICAgdGl0bGU6IG51bGwsXG4gICAgICAgIC8vQHRzLWlnbm9yZVxuICAgICAgICBjb2xvclNjYWxlOiBkMy5zY2FsZUxpbmVhcigpXG4gICAgICAgICAgICAuZG9tYWluKFswLCAxLjRdKVxuICAgICAgICAgICAgLy9AdHMtaWdub3JlXG4gICAgICAgICAgICAucmFuZ2UoW1wic3RlZWxibHVlXCIsIFwid2hpdGVcIl0pXG4gICAgICAgICAgICAvL0B0cy1pZ25vcmVcbiAgICAgICAgICAgIC5pbnRlcnBvbGF0ZShkMy5pbnRlcnBvbGF0ZVJnYi5nYW1tYSgyLjIpKSxcbiAgICAgICAgbWF4VGljazogMTAwMCxcbiAgICAgICAgaW50ZXJ2YWw6IDEwLFxuICAgIH1cblxuICAgIHNlbHM6IEdyYXBoU2VscyA9IHt9XG5cbiAgICAvLyBPdGhlclxuICAgIF9jdXJyID0ge1xuICAgICAgICBjdXJyTG9jOiBuai5hcnJheShbMC4xLCAwLjJdKSxcbiAgICAgICAgc3RlcDogMCxcbiAgICAgICAgdGlja2VyOiBudWxsLFxuICAgIH1cblxuICAgIHN0YXRpYyBldmVudHMgPSBFVkVOVFNcblxuICAgIGNvbnN0cnVjdG9yKGQzcGFyZW50OiBEM1NlbCwgZXZlbnRIYW5kbGVyPzogU2ltcGxlRXZlbnRIYW5kbGVyLCBvcHRpb25zOiBQYXJ0aWFsPEdyYXBoT3B0aW9ucz4gPSB7fSkge1xuICAgICAgICBzdXBlcihkM3BhcmVudCwgZXZlbnRIYW5kbGVyLCBvcHRpb25zKVxuICAgICAgICBzdXBlci5pbml0U1ZHKG9wdGlvbnMpXG4gICAgICAgIHRoaXMuYmFzZS5jbGFzc2VkKHRoaXMuY3NzbmFtZSwgdHJ1ZSlcbiAgICAgICAgdGhpcy5vcHRpb25zLnVwZGF0ZXIgPSBvcHRpb25zLnVwZGF0ZXIgPT0gbnVsbCA/IG5ldyBVcGRhdGVyMkQoKSA6IG9wdGlvbnMudXBkYXRlclxuICAgICAgICB0aGlzLmluaXRQbG90KClcbiAgICB9XG5cbiAgICBzdGF0aWMgZnJvbUxhbmRzY2FwZShkM3BhcmVudDogRDNTZWwsIGV2ZW50SGFuZGxlcjogU2ltcGxlRXZlbnRIYW5kbGVyLCB0OiBMYW5kc2NhcGUyRCk6IENvbnRvdXJQbG90IHtcbiAgICAgICAgY29uc29sZS5sb2coXCJGcm9tIExhbmRzY2FwZVwiKTtcbiAgICAgICAgY29uc3QgdXBkYXRlciA9IG5ldyBVcGRhdGVyMkQodClcbiAgICAgICAgY29uc3QgbmV3T3B0aW9ucyA9IHsgLi4udCwgdXBkYXRlciB9XG4gICAgICAgIHJldHVybiBuZXcgQ29udG91clBsb3QoZDNwYXJlbnQsIGV2ZW50SGFuZGxlciwgbmV3T3B0aW9ucylcbiAgICB9XG5cbiAgICBsaW5zcGFjZSgpOiBbbnVtYmVyLCBudW1iZXJdW10ge1xuICAgICAgICBjb25zdCBvcCA9IHRoaXMub3B0aW9uc1xuICAgICAgICBjb25zdCBsaW5zcGFjZVggPSBsaW5zcGFjZShvcC54cmFuZ2VbMF0sIG9wLnhyYW5nZVsxXSwgb3AubilcbiAgICAgICAgY29uc3QgbGluc3BhY2VZID0gbGluc3BhY2Uob3AueXJhbmdlWzBdLCBvcC55cmFuZ2VbMV0sIG9wLm0pXG5cbiAgICAgICAgcmV0dXJuIDxbbnVtYmVyLCBudW1iZXJdW10+ZDMuemlwKGxpbnNwYWNlWCwgbGluc3BhY2VZKVxuICAgIH1cblxuICAgIHNldFVwZGF0ZXIobmFtZTogJ2Jsb2NrJyB8ICdmdWxsJykge1xuICAgICAgICBjb25zdCBvcCA9IHRoaXMub3B0aW9uc1xuICAgICAgICBpZiAobmFtZSA9PSAnYmxvY2snKSB7XG4gICAgICAgICAgICBvcC51cGRhdGVyID0gb3AudXBkYXRlci50b0Jsb2NrKClcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChuYW1lID09ICdmdWxsJykge1xuICAgICAgICAgICAgb3AudXBkYXRlciA9IG9wLnVwZGF0ZXIudG9GdWxsKClcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiUGxlYXNlIGVudGVyIGEgdmFsaWQgaW5wdXQgYXMgdXBkYXRlclwiKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnVwZGF0ZVF1aXZlcnMoKVxuICAgIH1cblxuICAgIGdldCBzY2FsZXMoKTogR3JhcGhTY2FsZXMge1xuICAgICAgICBjb25zdCBvcCA9IHRoaXMub3B0aW9uc1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgeDogZDMuc2NhbGVMaW5lYXIoKS5kb21haW4ob3AueHJhbmdlKS5yYW5nZShbMCwgb3Aud2lkdGhdKSxcbiAgICAgICAgICAgIHk6IGQzLnNjYWxlTGluZWFyKCkuZG9tYWluKG9wLnlyYW5nZSkucmFuZ2UoW29wLmhlaWdodCwgMF0pLFxuICAgICAgICAgICAgY29udG91cnM6IGQzLmNvbnRvdXJzKCkuc2l6ZShbb3Aubiwgb3AubV0pLFxuICAgICAgICAgICAgY3VydmU6IGQzLmN1cnZlQ2F0bXVsbFJvbS5hbHBoYSgwLjUpLFxuICAgICAgICAgICAgY29sb3I6IG9wLmNvbG9yU2NhbGVcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHBsb3RDb250b3VycygpIHtcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgICAgIGNvbnN0IG9wID0gdGhpcy5vcHRpb25zO1xuICAgICAgICBjb25zdCBzY2FsZXMgPSB0aGlzLnNjYWxlcztcblxuICAgICAgICAvLyBjb25zdCBjb250b3VyRnVuYyA9ICh4LCB5KSA9PiB0aGlzLnVwZGF0ZXIuYWJzRXJyKG5qLmFycmF5KFt4LCB5XSkpXG4gICAgICAgIGNvbnN0IGNvbnRvdXJGdW5jID0gKHgsIHkpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGxvc3MgPSBvcC51cGRhdGVyLmxvc3MobmouYXJyYXkoW3gsIHldKSlcbiAgICAgICAgICAgIHJldHVybiBsb3NzXG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgdmFscyA9IGdldENvbnRvdXJWYWx1ZXMob3Aubiwgb3AubSwgb3AueHJhbmdlLCBvcC55cmFuZ2UsIGNvbnRvdXJGdW5jKVxuICAgICAgICBsZXQgdGhyZXNob2xkcyA9IGxpbnNwYWNlKGQzLm1pbih2YWxzKSwgZDMubWF4KHZhbHMpLCAyMClcblxuICAgICAgICBjb25zdCBjb250b3VyVmFscyA9IHNjYWxlcy5jb250b3Vycy50aHJlc2hvbGRzKHRocmVzaG9sZHMpKHZhbHMpXG4gICAgICAgIGNvbnN0IGNvbnRvdXJHcm91cCA9IHRoaXMuYmFzZS5hcHBlbmQoJ2cnKS5hdHRyKCdpZCcsICdjb250b3VyLWdyb3VwJylcbiAgICAgICAgY29uc3QgY29udG91cnMgPSBjb250b3VyR3JvdXAuc2VsZWN0QWxsKFwicGF0aC5jb250b3VyXCIpXG4gICAgICAgICAgICAuZGF0YShjb250b3VyVmFscylcblxuICAgICAgICBjb250b3Vycy5qb2luKFwicGF0aFwiKVxuICAgICAgICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcImNvbnRvdXJcIilcbiAgICAgICAgICAgIC5hdHRyKFwiZFwiLCBkMy5nZW9QYXRoKGQzLmdlb0lkZW50aXR5KCkuc2NhbGUob3Aud2lkdGggLyBvcC5uKSkpXG4gICAgICAgICAgICAuYXR0cihcImZpbGxcIiwgZCA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHNjYWxlcy5jb2xvcihkLnZhbHVlKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jbGFzc2VkKFwibm90LWZpdFwiLCB0cnVlKVxuICAgIH1cblxuICAgIGFkZFN0ZXAodjogQXJyYXksIHByZXY6IEFycmF5ID0gbnVsbCkge1xuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICAgICAgY29uc3Qgb3AgPSB0aGlzLm9wdGlvbnM7XG4gICAgICAgIGNvbnN0IHNjYWxlcyA9IHRoaXMuc2NhbGVzO1xuICAgICAgICBjb25zdCBzZWxzID0gdGhpcy5zZWxzO1xuXG4gICAgICAgIGNvbnN0IGN4ID0gc2NhbGVzLnguY2xhbXAodHJ1ZSkodi5nZXQoMCkpXG4gICAgICAgIGNvbnN0IGN5ID0gc2NhbGVzLnkuY2xhbXAodHJ1ZSkodi5nZXQoMSkpXG5cbiAgICAgICAgaWYgKHByZXYgIT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5iYXNlLmFwcGVuZCgnbGluZScpXG4gICAgICAgICAgICAgICAgLmF0dHIoJ3gxJywgc2NhbGVzLngocHJldi5nZXQoMCkpKVxuICAgICAgICAgICAgICAgIC5hdHRyKCd5MScsIHNjYWxlcy55KHByZXYuZ2V0KDEpKSlcbiAgICAgICAgICAgICAgICAuYXR0cigneDInLCBjeClcbiAgICAgICAgICAgICAgICAuYXR0cigneTInLCBjeSlcbiAgICAgICAgICAgICAgICAuY2xhc3NlZCgnZGVzY2VuZGluZy1saW5lJywgdHJ1ZSlcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIENoZWNrIGJvcmRlciBjb25kaXRpb25zXG4gICAgICAgIGlmICh2LmdldCgwKSA+PSBvcC54cmFuZ2VbMV0gfHwgdi5nZXQoMSkgPj0gb3AueXJhbmdlWzFdKSB7XG4gICAgICAgICAgICB0aGlzLl9jdXJyLnRpY2tlci51bnN1YnNjcmliZSgpXG4gICAgICAgICAgICByZXR1cm4gdlxuICAgICAgICB9XG5cblxuICAgICAgICBpZiAoKCh0aGlzLl9jdXJyLnN0ZXAgJSBvcC5jaXJjbGVFdmVyeSkgPT0gMCkgfHwgKHByZXYgPT0gbnVsbCkpIHtcbiAgICAgICAgICAgIHNlbHMuY2lyY2xlID0gdGhpcy5iYXNlLmFwcGVuZCgnY2lyY2xlJylcbiAgICAgICAgICAgICAgICAuYXR0cignY3gnLCBjeClcbiAgICAgICAgICAgICAgICAuYXR0cignY3knLCBjeSlcbiAgICAgICAgICAgICAgICAuYXR0cigncicsIDIpXG4gICAgICAgICAgICAgICAgLmNsYXNzZWQoJ2Rlc2NlbmRpbmctcG9pbnQnLCB0cnVlKVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fY3Vyci5zdGVwICs9IDFcblxuICAgICAgICB0aGlzLmV2ZW50SGFuZGxlci50cmlnZ2VyKEVWRU5UUy5zdGVwQWRkZWQsIHYpXG4gICAgICAgIHJldHVybiB2O1xuICAgIH1cblxuICAgIGNsZWFyQ2lyY2xlcygpIHtcbiAgICAgICAgZDMuc2VsZWN0QWxsKCcuZGVzY2VuZGluZy1wb2ludCcpLnJlbW92ZSgpXG4gICAgICAgIGQzLnNlbGVjdEFsbCgnLmRlc2NlbmRpbmctbGluZScpLnJlbW92ZSgpXG4gICAgfVxuXG4gICAgY2xlYXJRdWl2ZXJzKCkge1xuICAgICAgICBkMy5zZWxlY3RBbGwoJy5xdWl2ZXInKS5yZW1vdmUoKVxuICAgICAgICB0aGlzLnNlbHMuYXJyb3dzID0gW11cbiAgICB9XG5cbiAgICBwbG90RGVzY2VudCgpIHtcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgICAgIGNvbnN0IG9wID0gdGhpcy5vcHRpb25zO1xuICAgICAgICBsZXQgcHJldlZhbCA9IG51bGw7XG5cbiAgICAgICAgY29uc3Qgc3ViT2JqID0ge1xuICAgICAgICAgICAgbmV4dDogKHZhbCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuYWRkU3RlcCh2YWwsIHByZXZWYWwpXG4gICAgICAgICAgICAgICAgcHJldlZhbCA9IHZhbFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVycjogKGVycikgPT4gY29uc29sZS5sb2coZXJyKSxcbiAgICAgICAgICAgIGNvbXBsZXRlOiAoKSA9PiBjb25zb2xlLmxvZyhcIkNPTVBMRVRFXCIpXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBwcmVwID0gKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5hZGRTdGVwKHRoaXMuY3VycigpKVxuICAgICAgICAgICAgcHJldlZhbCA9IHRoaXMuY3VycigpXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9jdXJyLnRpY2tlciA9IGludGVydmFsKG9wLmludGVydmFsKS5waXBlKFxuICAgICAgICAgICAgc3RhcnRXaXRoKHByZXAoKSksXG4gICAgICAgICAgICAvL0B0cy1pZ25vcmVcbiAgICAgICAgICAgIHNjYW4odiA9PiBvcC51cGRhdGVyLm5leHQodiksIHNlbGYuY3VycigpKSxcbiAgICAgICAgICAgIHRha2Uob3AubWF4VGljaylcbiAgICAgICAgKS5zdWJzY3JpYmUoc3ViT2JqKVxuICAgIH1cblxuICAgIGludG9WaXModjogQXJyYXkpIHtcbiAgICAgICAgcmV0dXJuIHsgeDogdGhpcy5zY2FsZXMueCh2LmdldCgwKSksIHk6IHRoaXMuc2NhbGVzLnkodi5nZXQoMSkpIH1cbiAgICB9XG5cbiAgICBpbnRvTWF0aCh2OiBWZWN0b3IyRCkge1xuICAgICAgICByZXR1cm4geyB4OiB0aGlzLnNjYWxlcy54LmludmVydCh2LngpLCB5OiB0aGlzLnNjYWxlcy55LmludmVydCh2LnkpIH1cbiAgICB9XG5cbiAgICB1cGRhdGVRdWl2ZXJzKCkge1xuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICAgICAgY29uc3Qgb3AgPSB0aGlzLm9wdGlvbnM7XG4gICAgICAgIGNvbnN0IHNlbHMgPSB0aGlzLnNlbHM7XG4gICAgICAgIGNvbnN0IHNjYWxlcyA9IHRoaXMuc2NhbGVzO1xuXG4gICAgICAgIC8vIE1vZGlmeSBhcnJvd3MgaW5wbGFjZVxuICAgICAgICBzZWxzLmFycm93cy5mb3JFYWNoKGFycm93ID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHB0OiBWZWN0b3IyRCA9IHRoaXMuaW50b01hdGgoe1xuICAgICAgICAgICAgICAgIHg6ICthcnJvdy5hdHRyKCd4MScpLFxuICAgICAgICAgICAgICAgIHk6ICthcnJvdy5hdHRyKCd5MScpXG4gICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICBjb25zdCB2ID0gbmouYXJyYXkoW3B0LngsIHB0LnldKVxuXG4gICAgICAgICAgICBjb25zdCBwdDIgPSBvcC51cGRhdGVyLm5leHRMcih2KVxuICAgICAgICAgICAgYXJyb3cuYXR0cigneDInLCBzY2FsZXMueChwdDIuZ2V0KDApKSlcbiAgICAgICAgICAgICAgICAuYXR0cigneTInLCBzY2FsZXMueShwdDIuZ2V0KDEpKSlcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBjcmVhdGVRdWl2ZXJzKCkge1xuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICAgICAgY29uc3Qgb3AgPSB0aGlzLm9wdGlvbnM7XG4gICAgICAgIGNvbnN0IHNjYWxlcyA9IHRoaXMuc2NhbGVzO1xuICAgICAgICBjb25zdCBzZWxzID0gdGhpcy5zZWxzO1xuXG4gICAgICAgIGNvbnN0IG54ID0gMTEsIG55ID0gMTE7XG4gICAgICAgIGNvbnN0IHBvaW50cyA9IFNWRy5tZXNoZ3JpZChueCwgbnksIG9wLnhyYW5nZSwgb3AueXJhbmdlKVxuICAgICAgICBjb25zdCBjb2xvciA9IFwiYmx1ZVwiO1xuICAgICAgICBjb25zdCB3aWR0aCA9IDEuMjU7XG5cbiAgICAgICAgY29uc3QgcXVpdmVyR3JvdXAgPSB0aGlzLmJhc2UuYXBwZW5kKCdnJykuYXR0cignaWQnLCAncXVpdmVyLWdyb3VwJykgLy8gaW5pdCBzaG91bGQgaGF2ZSB0aGVzZSBncm91cHMgYWxyZWFkeSBzZWxlY3RlZFxuICAgICAgICB0aGlzLmNsZWFyUXVpdmVycygpXG5cbiAgICAgICAgc2Vscy5hcnJvd3MgPSBwb2ludHMubWFwKHB0ID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHB0MiA9IG9wLnVwZGF0ZXIubmV4dExyKG5qLmFycmF5KFtwdC54LCBwdC55XSkpXG4gICAgICAgICAgICAvL0B0cy1pZ25vcmVcbiAgICAgICAgICAgIGNvbnN0IGFycm93ID0gU1ZHLmluc2VydEFycm93KHF1aXZlckdyb3VwLCBzY2FsZXMueChwdC54KSwgc2NhbGVzLnkocHQueSksIHNjYWxlcy54KHB0Mi5nZXQoMCkpLCBzY2FsZXMueShwdDIuZ2V0KDEpKSwgY29sb3IsIHdpZHRoKVxuICAgICAgICAgICAgYXJyb3cuY2xhc3NlZCgncXVpdmVyJywgdHJ1ZSlcbiAgICAgICAgICAgIHJldHVybiBhcnJvd1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIGluaXRQbG90KCkge1xuICAgICAgICAvLyBJbml0aWFsaXplIHBsb3RzXG4gICAgICAgIHRoaXMucGxvdENvbnRvdXJzKClcbiAgICAgICAgdGhpcy5jcmVhdGVRdWl2ZXJzKClcbiAgICB9XG5cbiAgICBpbml0KCkge1xuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICAgICAgY29uc3Qgb3AgPSB0aGlzLm9wdGlvbnM7XG4gICAgICAgIGNvbnN0IHNjYWxlcyA9IHRoaXMuc2NhbGVzO1xuICAgICAgICBjb25zdCBzZWxzID0gdGhpcy5zZWxzO1xuXG4gICAgICAgIC8vIEFkZCBkZWZpbml0aW9uc1xuICAgICAgICBTVkcuYWRkQXJyb3dzKHRoaXMuc3ZnKVxuXG4gICAgICAgIC8vIENyZWF0ZSBzY2FsZXNcbiAgICAgICAgLy8gQWRkIEF4ZXMgYW5kIGxhYmVsc1xuICAgICAgICBzZWxzLnhheGlzID0gdGhpcy5iYXNlLmFwcGVuZChcImdcIilcbiAgICAgICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJheGlzIGF4aXMtLXhcIilcbiAgICAgICAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIFNWRy50cmFuc2xhdGUoMCwgb3AuaGVpZ2h0KSlcbiAgICAgICAgICAgIC5jYWxsKGQzLmF4aXNCb3R0b20oc2NhbGVzLngpLnRpY2tzKDMsIFwic1wiKSk7XG5cbiAgICAgICAgc2Vscy55YXhpcyA9IHRoaXMuYmFzZS5hcHBlbmQoXCJnXCIpXG4gICAgICAgICAgICAuYXR0cihcImNsYXNzXCIsIFwiYXhpcyBheGlzLS15XCIpXG4gICAgICAgICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBTVkcudHJhbnNsYXRlKDAsIDApKVxuICAgICAgICAgICAgLmNhbGwoZDMuYXhpc0xlZnQoc2NhbGVzLnkpLnRpY2tzKDMsIFwic1wiKSk7XG5cbiAgICAgICAgc2Vscy54bGFiZWwgPSB0aGlzLmJhc2UuYXBwZW5kKFwidGV4dFwiKVxuICAgICAgICAgICAgLmNsYXNzZWQoXCJheGlzLWxhYmVsXCIsIHRydWUpXG4gICAgICAgICAgICAuYXR0cihcInRleHQtYW5jaG9yXCIsIFwibWlkZGxlXCIpXG4gICAgICAgICAgICAuYXR0cihcImNsYXNzXCIsIFwidGl0bGVzXCIpXG4gICAgICAgICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBTVkcudHJhbnNsYXRlKG9wLndpZHRoIC8gMiwgb3AuaGVpZ2h0ICsgb3AucGFkKSlcbiAgICAgICAgICAgIC50ZXh0KG9wLnhsYWJlbClcblxuICAgICAgICBzZWxzLnlsYWJlbCA9IHRoaXMuYmFzZS5hcHBlbmQoXCJ0ZXh0XCIpXG4gICAgICAgICAgICAuY2xhc3NlZChcImF4aXMtbGFiZWxcIiwgdHJ1ZSlcbiAgICAgICAgICAgIC5hdHRyKFwidGV4dC1hbmNob3JcIiwgXCJtaWRkbGVcIilcbiAgICAgICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJ0aXRsZXNcIilcbiAgICAgICAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIFNWRy50cmFuc2xhdGUoLW9wLnBhZCwgb3AuaGVpZ2h0IC8gMikgKyBTVkcucm90YXRlKC05MCkpXG4gICAgICAgICAgICAudGV4dChvcC55bGFiZWwpXG5cbiAgICAgICAgc2Vscy50aXRsZSA9IHRoaXMuYmFzZS5hcHBlbmQoXCJ0ZXh0XCIpXG4gICAgICAgICAgICAuY2xhc3NlZChcImF4aXMtbGFiZWxcIiwgdHJ1ZSlcbiAgICAgICAgICAgIC5hdHRyKFwidGV4dC1hbmNob3JcIiwgXCJtaWRkbGVcIilcbiAgICAgICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJ0aXRsZXNcIilcbiAgICAgICAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIFNWRy50cmFuc2xhdGUob3Aud2lkdGggLyAyLCAtb3AucGFkIC8gMikpXG4gICAgICAgICAgICAudGV4dChvcC50aXRsZSlcblxuICAgICAgICAvLyBDcmVhdGUgY2xpY2sgYmVoYXZpb3JcbiAgICAgICAgdGhpcy5iYXNlLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmIChzZWxmLl9jdXJyLnRpY2tlciAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBzZWxmLl9jdXJyLnRpY2tlci51bnN1YnNjcmliZSgpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBjb29yZHMgPSBkMy5tb3VzZSh0aGlzKTtcbiAgICAgICAgICAgIHNlbGYuX2N1cnIuc3RlcCA9IDBcbiAgICAgICAgICAgIHNlbGYuY3Vycihbc2NhbGVzLnguaW52ZXJ0KGNvb3Jkc1swXSksIHNjYWxlcy55LmludmVydChjb29yZHNbMV0pXSlcblxuICAgICAgICAgICAgLy8gaWYgKHNlbGYuY3VycigpLnggPiAwICYmIHNlbGYuY3VycigpLnkgPiAwICYmIHNlbGYuY3VycigpLnggPCAob3AueHJhbmdlWzFdIC0gMC4xKSAmJiBzZWxmLmN1cnIoKS55IDwgKG9wLnlyYW5nZVsxXSAtIDAuMSkpIHtcbiAgICAgICAgICAgIC8vIGlmIChzZWxmLmN1cnIoKS5nZXQoMCkgPiAwICYmIHNlbGYuY3VycigpLmdldCgxKSA+IDApIHtcbiAgICAgICAgICAgIHNlbGYuYWRkU3RlcChzZWxmLmN1cnIoKSlcbiAgICAgICAgICAgIHNlbGYuY2xlYXJDaXJjbGVzKCk7XG4gICAgICAgICAgICBzZWxmLnBsb3REZXNjZW50KCk7XG4gICAgICAgICAgICAvLyB9XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgY3VycigpOiBBcnJheVxuICAgIGN1cnIodmFsOiBBcnJheSB8IG51bWJlcltdKTogdGhpc1xuICAgIGN1cnIodmFsPykge1xuICAgICAgICBpZiAodmFsID09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9jdXJyLmN1cnJMb2NcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX2N1cnIuY3VyckxvYyA9IG5qLmFycmF5KHZhbCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGRhdGEoKTogbnVtYmVyW11cbiAgICBkYXRhKHZhbDogbnVtYmVyW10pOiB0aGlzXG4gICAgZGF0YSh2YWw/KSB7XG4gICAgICAgIGlmICh2YWwgPT0gbnVsbCkgcmV0dXJuIHRoaXMuX2RhdGFcbiAgICAgICAgdGhpcy5fZGF0YSA9IHZhbFxuICAgICAgICByZXR1cm4gdGhpc1xuICAgIH1cblxuICAgIHEoKTogbnVtYmVyXG4gICAgcSh2YWw6IG51bWJlcik6IHRoaXNcbiAgICBxKHZhbD8pIHtcbiAgICAgICAgY29uc3Qgb3AgPSB0aGlzLm9wdGlvbnNcbiAgICAgICAgaWYgKHZhbCA9PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gb3AudXBkYXRlci5xKCk7XG4gICAgICAgIH1cblxuICAgICAgICBvcC51cGRhdGVyLnEodmFsKVxuICAgICAgICB0aGlzLnVwZGF0ZVF1aXZlcnMoKVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBldGEoKTogbnVtYmVyXG4gICAgZXRhKHZhbDogbnVtYmVyKTogdGhpc1xuICAgIGV0YSh2YWw/KSB7XG4gICAgICAgIGNvbnN0IG9wID0gdGhpcy5vcHRpb25zXG4gICAgICAgIGlmICh2YWwgPT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIG9wLnVwZGF0ZXIuZXRhKCk7XG4gICAgICAgIH1cblxuICAgICAgICBvcC51cGRhdGVyLmV0YSh2YWwpXG4gICAgICAgIHRoaXMudXBkYXRlUXVpdmVycygpXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbn0iLCJpbXBvcnQgKiBhcyBkMyBmcm9tICdkMydcbmltcG9ydCB7IE1hbnVhbFVwZGF0ZXIgfSBmcm9tIFwiLi9NYW51YWxVcGRhdGVyXCJcbmltcG9ydCB7IFZlY3RvcjJEIH0gZnJvbSBcIi4uL3R5cGVzXCJcbmltcG9ydCAqIGFzIFIgZnJvbSAncmFtZGEnXG5pbXBvcnQgeyBTdWJqZWN0LCBCZWhhdmlvclN1YmplY3QgfSBmcm9tIFwicnhqc1wiXG5cbmV4cG9ydCB0eXBlIEJhbGxIaXN0b3J5ID0ge1xuICAgIGNsYXNzbmFtZTogc3RyaW5nXG4gICAgeDogbnVtYmVyXG4gICAgbG9zczogbnVtYmVyXG59XG5cbmV4cG9ydCBjbGFzcyBHb2xmQmFsbCB7XG4gICAgX3g6IG51bWJlclxuICAgIHVwZGF0ZXI6IE1hbnVhbFVwZGF0ZXJcbiAgICBjbGFzc25hbWU6IHN0cmluZ1xuICAgIHN0cmVhbTogU3ViamVjdDxCYWxsSGlzdG9yeT4gLy8gUHVzaGVzIGhpc3Rvcnkgb2YgeCB2YWx1ZXMgdG8gdGhpc1xuXG4gICAgY29uc3RydWN0b3IodXBkYXRlcjogTWFudWFsVXBkYXRlciwgY2xhc3NuYW1lOiBzdHJpbmcsIHggPSAwKSB7XG4gICAgICAgIHRoaXMudXBkYXRlciA9IHVwZGF0ZXJcbiAgICAgICAgdGhpcy5feCA9IHhcbiAgICAgICAgdGhpcy5jbGFzc25hbWUgPSBjbGFzc25hbWVcbiAgICAgICAgdGhpcy5zdHJlYW0gPSBuZXcgU3ViamVjdCgpXG4gICAgfVxuXG4gICAgZ2V0IHgoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl94XG4gICAgfVxuXG4gICAgc2V0IHgodjogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuX3ggPSB2XG4gICAgfVxuXG4gICAgbmV4dFgoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudXBkYXRlci5uZXh0KHRoaXMuX3gpXG4gICAgfVxuXG4gICAgbmV4dCgpOiBHb2xmQmFsbCB7XG4gICAgICAgIGNvbnN0IG5leHRYID0gdGhpcy5uZXh0WCgpXG4gICAgICAgIHJldHVybiBuZXcgR29sZkJhbGwodGhpcy51cGRhdGVyLCB0aGlzLmNsYXNzbmFtZSwgdGhpcy5uZXh0WCgpKVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFVzZSB0aGUgdXBkYXRlciB0byB0YWtlIHRoZSBuZXh0IHN0ZXBcbiAgICAgKiBcbiAgICAgKiBAcGFyYW0gZm9yY2VYIEZvcmNlIHRoZSBuZXh0WCB0byBiZSBvZiB0aGlzIHZhbHVlXG4gICAgICovXG4gICAgc3RlcF8oZm9yY2VYOm51bWJlcnxudWxsPW51bGwpOiB0aGlzIHtcbiAgICAgICAgaWYgKGZvcmNlWCAhPSBudWxsKSB0aGlzLnggPSBmb3JjZVhcbiAgICAgICAgZWxzZSB0aGlzLnggPSB0aGlzLm5leHRYKClcblxuICAgICAgICB0aGlzLnN0cmVhbS5uZXh0KHtcbiAgICAgICAgICAgIGNsYXNzbmFtZTogdGhpcy5jbGFzc25hbWUsXG4gICAgICAgICAgICB4OiB0aGlzLngsXG4gICAgICAgICAgICBsb3NzOiB0aGlzLnVwZGF0ZXIubG9zcyh0aGlzLngpXG4gICAgICAgIH0pXG4gICAgICAgIHJldHVybiB0aGlzXG4gICAgfVxuXG4gICAgdG9WZWMoZjogKHg6IG51bWJlcikgPT4gbnVtYmVyKTogVmVjdG9yMkQge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgeDogdGhpcy5feCxcbiAgICAgICAgICAgIHk6IGYodGhpcy5feClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHEoKTogbnVtYmVyXG4gICAgcSh2YWw6IG51bWJlcik6IHRoaXNcbiAgICBxKHZhbD8pIHtcbiAgICAgICAgaWYgKHZhbCA9PSBudWxsKSByZXR1cm4gdGhpcy51cGRhdGVyLnFcbiAgICAgICAgdGhpcy51cGRhdGVyLnEgPSB2YWxcbiAgICAgICAgcmV0dXJuIHRoaXNcbiAgICB9XG5cbiAgICBldGEoKTogbnVtYmVyXG4gICAgZXRhKHZhbDogbnVtYmVyKTogdGhpc1xuICAgIGV0YSh2YWw/KSB7XG4gICAgICAgIGlmICh2YWwgPT0gbnVsbCkgcmV0dXJuIHRoaXMudXBkYXRlci5ldGFcbiAgICAgICAgdGhpcy51cGRhdGVyLmV0YSA9IHZhbFxuICAgICAgICByZXR1cm4gdGhpc1xuICAgIH1cbn0iLCJpbXBvcnQgKiBhcyBkMyBmcm9tICdkMydcbmltcG9ydCB7IEQzU2VsLCBsaW5zcGFjZSB9IGZyb20gJy4uL3V0aWwveGQzJ1xuaW1wb3J0ICogYXMgUiBmcm9tICdyYW1kYSdcbmltcG9ydCB7IFZlY3RvcjJEIH0gZnJvbSAnLi4vdHlwZXMnXG5pbXBvcnQgeyBTVkdPcHRpb25zLCBTVkdWaXNDb21wb25lbnQgfSBmcm9tICcuLi91dGlsL1NWR1Zpc0NvbXBvbmVudCdcbmltcG9ydCB7IFNpbXBsZUV2ZW50SGFuZGxlciB9IGZyb20gJy4uL3V0aWwvU2ltcGxlRXZlbnRIYW5kbGVyJztcbmltcG9ydCB7IFNWRyB9IGZyb20gJy4uL3V0aWwvU1ZHcGx1cydcbmltcG9ydCB7IGludGVydmFsLCBmcm9tRXZlbnQgfSBmcm9tICdyeGpzJ1xuaW1wb3J0IHsgdGFrZSwgc2NhbiB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJ1xuaW1wb3J0IHsgTWFudWFsVXBkYXRlciB9IGZyb20gJy4vTWFudWFsVXBkYXRlcidcbmltcG9ydCB7IEdvbGZCYWxsIH0gZnJvbSAnLi9Hb2xmQmFsbCdcbmltcG9ydCB7IGxhbmRzY2FwZXMsIExhbmRzY2FwZSwgYmFzZUxvc3MsIGdldFBsb3RGdW5jIH0gZnJvbSBcIi4uL0dvbGZMYW5kc2NhcGVzXCI7XG5cblxudHlwZSBUID0gR29sZkJhbGxbXVxuXG5pbnRlcmZhY2UgR3JhcGhPcHRpb25zIGV4dGVuZHMgU1ZHT3B0aW9ucyB7XG4gICAgcGFkOiBudW1iZXJcbiAgICBtYXhJdGVyOiBudW1iZXIgLy8gSG93IG1hbnkgaXRlcmF0aW9ucyB0byB0YWtlP1xuICAgIGxhbmRzY2FwZTogTGFuZHNjYXBlXG59XG5cbmludGVyZmFjZSBTY2FsZVhZIHtcbiAgICB4OiBkMy5TY2FsZUxpbmVhcjxudW1iZXIsbnVtYmVyPlxuICAgIHk6IGQzLlNjYWxlTGluZWFyPG51bWJlcixudW1iZXI+XG59XG5cbmludGVyZmFjZSBHcmFwaFNjYWxlcyB7XG4gICAgYmFzZTJtYXRoPzogU2NhbGVYWSxcbiAgICBiYXNlMnB4PzogU2NhbGVYWSxcbiAgICBtYXRoMnB4PzogU2NhbGVYWSxcbiAgICBiYXNlMmxvc3M/OiBkMy5TY2FsZUxpbmVhcjxudW1iZXIsIG51bWJlcj4sXG4gICAgcGF0aHM/OiBkMy5MaW5lPG51bWJlcj5bXSxcbiAgICBjb2xvcj86IGQzLlNjYWxlU2VxdWVudGlhbDxudW1iZXI+LFxufVxuXG5pbnRlcmZhY2UgR3JhcGhTZWxzIHtcbiAgICB4YXhpcz86IEQzU2VsXG4gICAgeWF4aXM/OiBEM1NlbFxuICAgIHhsYWJlbD86IEQzU2VsXG4gICAgbGluZT86IEQzU2VsXG4gICAgYmFja2Ryb3A/OiBEM1NlbFxuICAgIGJhbGw/OiBEM1NlbFxuICAgIG1hc2s/OiBEM1NlbFxuICAgIG1hc2tMaW5lPzogRDNTZWxcbiAgICBtYXNrQmFja2dyb3VuZD86IEQzU2VsXG4gICAgbGluZUJhY2tncm91bmQ/OiBEM1NlbFxufVxuXG5sZXQgQ0xFQVJFRCA9IDA7XG4vLyAvLyBOb3RlIHRoYXQgcGxvdEZ1bmMgaXMgdGhlIGxvc3MgZnVuY3Rpb24gd2UgcGxvdCBhbmQgZnVuYyBpcyB0aGUgY29tcG9uZW50IG9mIHRoZSBsb3NzIGZ1bmN0aW9uIG5lZWRlZCBmb3IgdGhlIHVwZGF0ZXJcbi8vIC8vIGV4cG9ydCBjb25zdCBmdW5jID0geCA9PiBNYXRoLnRhbmgoeClcbi8vIC8vIGV4cG9ydCBjb25zdCBkRnVuYyA9IHggPT4gTWF0aC5wb3coTWF0aC5jb3NoKHgpLCAtMilcbi8vIGV4cG9ydCBjb25zdCBmdW5jID0geCA9PiBNYXRoLnRhbmgoeCAtIDExKSAvIDQgKyBNYXRoLnRhbmgoeCAtIDYpIC8gNCArIE1hdGgudGFuaCh4KSArIE1hdGgudGFuaCh4ICsgNikgLyA0ICsgTWF0aC50YW5oKHggKyAxMSkgLyA0XG4vLyBleHBvcnQgY29uc3QgZEZ1bmMgPSB4ID0+IE1hdGgucG93KE1hdGguY29zaCh4IC0gMTEpLCAtMikgLyA0ICsgTWF0aC5wb3coTWF0aC5jb3NoKHggLSA2KSwgLTIpIC8gNCArIE1hdGgucG93KE1hdGguY29zaCh4KSwgLTIpICsgTWF0aC5wb3coTWF0aC5jb3NoKHggKyA2KSwgLTIpIC8gNCArIE1hdGgucG93KE1hdGguY29zaCh4ICsgMTEpLCAtMikgLyA0XG4vLyAvLyBleHBvcnQgY29uc3QgZnVuYyA9IHggPT4gTWF0aC5zaWduKHgpICogKDEgLSAoMSAvICgxICsgTWF0aC5hYnMoeCkpKSlcbi8vIC8vIGV4cG9ydCBjb25zdCBkRnVuYyA9IHggPT4gMSAvIE1hdGgucG93KDEgKyBNYXRoLmFicyh4KSwgMilcblxuLy8gZXhwb3J0IGNvbnN0IHBsb3RGdW5jID0geCA9PiBiYXNlTG9zcyhmdW5jKHgpKVxuXG5leHBvcnQgY2xhc3MgR29sZkhvbGUxRCBleHRlbmRzIFNWR1Zpc0NvbXBvbmVudDxUPiB7XG4gICAgY3NzbmFtZSA9IFwiZ29sZi1ob2xlLWNoYXJ0XCJcbiAgICBtYXNrSWQ6IHN0cmluZ1xuXG4gICAgX2RhdGE6IFRcblxuICAgIG9wdGlvbnM6IEdyYXBoT3B0aW9ucyA9IHtcbiAgICAgICAgbWF4V2lkdGg6IDQwMCxcbiAgICAgICAgbWF4SGVpZ2h0OiAyMDAsXG4gICAgICAgIG1hcmdpbjogeyB0b3A6IDUsIHJpZ2h0OiAxMCwgYm90dG9tOiA0MCwgbGVmdDogMTAgfSxcbiAgICAgICAgcGFkOiAzMCxcbiAgICAgICAgbWF4SXRlcjogNjAwLFxuICAgICAgICBsYW5kc2NhcGU6IGxhbmRzY2FwZXMuaG9sZVxuICAgIH1cblxuICAgIHNjYWxlczogR3JhcGhTY2FsZXMgPSB7fVxuXG4gICAgc2VsczogR3JhcGhTZWxzID0ge31cblxuICAgIGNvbnN0cnVjdG9yKGQzcGFyZW50OiBEM1NlbCwgZXZlbnRIYW5kbGVyPzogU2ltcGxlRXZlbnRIYW5kbGVyLCBvcHRpb25zID0ge30sIElEID0gMCkge1xuICAgICAgICBzdXBlcihkM3BhcmVudCwgZXZlbnRIYW5kbGVyLCBvcHRpb25zLCBJRClcbiAgICAgICAgdGhpcy5tYXNrSWQgPSBgbGluZS1tYXNrLSR7dGhpcy5JRH1gXG4gICAgICAgIHN1cGVyLmluaXRTVkcob3B0aW9ucywgW1wiYmdcIl0pXG4gICAgICAgIHRoaXMuYmFzZS5jbGFzc2VkKHRoaXMuY3NzbmFtZSwgdHJ1ZSlcblxuICAgICAgICBjb25zdCB6ID0gdGhpcy5vcHRpb25zLmxhbmRzY2FwZVxuICAgICAgICBcbiAgICAgICAgLy8gTmVlZCB0byBoYXZlIGluaXRpYWwgZGF0YVxuICAgICAgICBjb25zdCBkYXRhID0gW1xuICAgICAgICAgICAgbmV3IEdvbGZCYWxsKG5ldyBNYW51YWxVcGRhdGVyKHouZiwgei5kZiwgMCwgMC45KSwgJ2dvbGYtYmFsbC1zZ2QnLCA0KSxcbiAgICAgICAgXVxuXG4gICAgICAgIHRoaXMuZGF0YShkYXRhKVxuICAgICAgICB0aGlzLmluaXRCYWxscygpXG4gICAgfVxuXG4gICAgbGFuZHNjYXBlKCk6IExhbmRzY2FwZVxuICAgIGxhbmRzY2FwZSh2YWw6IExhbmRzY2FwZSk6IHRoaXNcbiAgICBsYW5kc2NhcGUodmFsPykge1xuICAgICAgICBpZiAodmFsID09IG51bGwpIHJldHVybiB0aGlzLm9wdGlvbnMubGFuZHNjYXBlXG4gICAgICAgIGNvbnN0IG9wID0gdGhpcy5vcHRpb25zXG4gICAgICAgIG9wLmxhbmRzY2FwZSA9IHZhbFxuXG4gICAgICAgIC8vIFVwZGF0ZSB4cmFuZ2UgYW5kIHlyYW5nZVxuICAgICAgICB0aGlzLnVwZGF0ZVNjYWxlcyhvcClcbiAgICAgICAgdGhpcy51cGRhdGVBeGVzKHRoaXMuc2NhbGVzLCBvcClcblxuICAgICAgICAvLyBVcGRhdGUgZGF0YVxuICAgICAgICB0aGlzLmRhdGEoKS5mb3JFYWNoKGIgPT4ge1xuICAgICAgICAgICAgYi51cGRhdGVyLmYgPSB2YWwuZlxuICAgICAgICAgICAgYi51cGRhdGVyLmRmID0gdmFsLmRmXG4gICAgICAgIH0pXG5cbiAgICAgICAgdGhpcy5jbGVhckN1cnZlKClcbiAgICAgICAgdGhpcy5wbG90Q3VydmUoKVxuXG4gICAgICAgIHJldHVybiB0aGlzXG4gICAgfVxuXG4gICAgLyoqIFJldHVybiBmaXJzdCB1cGRhdGVyIGluIGRhdGEgKi9cbiAgICBnZXQgZGF0YUhlYWQoKTogR29sZkJhbGwge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZGF0YSgpWzBdXG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJMb29rcyBsaWtlIHRoZXJlIGlzIG5vIGRhdGEgaW4gdGhpcyBnb2xmIGhvbGVcIik7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUHV0IGEgdmVjdG9yIGludG8gdGhlIGNvb3JkaW5hdGUgc3lzdGVtIHVzZWQgYnkgdGhlIHZpc3VhbGl6YXRpb25cbiAgICAgKiBcbiAgICAgKiBAcGFyYW0gdiBWZWN0b3IgXG4gICAgICovXG4gICAgaW50b1Zpcyh2OiBWZWN0b3IyRCkge1xuICAgICAgICByZXR1cm4geyB4OiB0aGlzLnNjYWxlcy5tYXRoMnB4Lngodi54KSwgeTogdGhpcy5zY2FsZXMubWF0aDJweC55KHYueSkgfVxuICAgIH1cblxuICAgIC8vIFRha2UgYSB2ZWN0b3IgaW4gdGhlIGNvb3JkaW5hdGUgc3lzdGVtIGFuZCByZXR1cm4gaXQgdG8gdGhlIG1hdGggY29vcmRpbmF0ZXNcbiAgICBpbnRvTWF0aCh2OiBWZWN0b3IyRCkge1xuICAgICAgICByZXR1cm4geyB4OiB0aGlzLnNjYWxlcy5tYXRoMnB4LnguaW52ZXJ0KHYueCksIHk6IHRoaXMuc2NhbGVzLm1hdGgycHgueS5pbnZlcnQodi55KSB9XG4gICAgfVxuXG4gICAgLy8gVHVybiBhIG51bWJlciBpbnRvIGEgdmVjdG9yXG4gICAgbnVtMnZlYyh4OiBudW1iZXIpOiBWZWN0b3IyRCB7XG4gICAgICAgIGNvbnN0IG9wID0gdGhpcy5vcHRpb25zXG4gICAgICAgIHJldHVybiB7IHg6IHgsIHk6IG9wLmxhbmRzY2FwZS5sb3NzKHgpIH1cbiAgICB9XG5cbiAgICAvLyBUdXJuIGEgYmFsbCBpbnRvIGEgdmVjdG9yIGluIHRoZSB2aXN1YWxpemF0aW9uIGNvb3JkaW5hdGUgc3lzdGVtXG4gICAgYmFsbDJ2aXMoYjogR29sZkJhbGwpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaW50b1ZpcyhiLnRvVmVjKGdldFBsb3RGdW5jKHRoaXMub3B0aW9ucy5sYW5kc2NhcGUpKSlcbiAgICB9XG5cbiAgICAvLyBQbG90IGEgYmFsbCBvbiB0aGUgY2hhcnRcbiAgICBwbG90QmFsbChiOiBHb2xmQmFsbCkge1xuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcblxuICAgICAgICBjb25zdCB0b0NsYXNzID0gbmFtZSA9PiAnLicgKyBuYW1lXG4gICAgICAgIGNvbnN0IGNsc1NlbCA9IHRvQ2xhc3MoYi5jbGFzc25hbWUpXG5cbiAgICAgICAgY29uc3QgYmFsbCA9IHRoaXMuYmFsbDJ2aXMoYilcbiAgICAgICAgc2VsZi5zZWxzLmJhbGwgPSBzZWxmLmJhc2Uuc2VsZWN0QWxsKGNsc1NlbClcbiAgICAgICAgICAgIC5kYXRhKFtiYWxsXSlcbiAgICAgICAgICAgIC5qb2luKCdjaXJjbGUnKVxuICAgICAgICAgICAgLmNsYXNzZWQoJ2dvbGYtYmFsbCcsIHRydWUpXG4gICAgICAgICAgICAuY2xhc3NlZChiLmNsYXNzbmFtZSwgdHJ1ZSlcbiAgICAgICAgICAgIC5hdHRyKFwiY3hcIiwgZCA9PiBkLngpXG4gICAgICAgICAgICAuYXR0cihcImN5XCIsIGQgPT4gZC55KVxuICAgICAgICAgICAgLmF0dHIoXCJyXCIsIFwiNXB4XCIpXG4gICAgfVxuXG4gICAgY2xlYXJDdXJ2ZSgpIHtcbiAgICAgICAgdGhpcy5sYXllcnMuYmcuc2VsZWN0QWxsKCcubGluZScpLnJlbW92ZSgpXG4gICAgICAgIHRoaXMuc2Vscy5tYXNrTGluZS5odG1sKCcnKVxuICAgICAgICB0aGlzLmJhc2Uuc2VsZWN0QWxsKCcjbGluZS1iYWNrZ3JvdW5kJykuaHRtbCgnJylcbiAgICB9XG5cbiAgICBwbG90Q3VydmVCeURlZmF1bHQoeHM6IG51bWJlcltdKSB7XG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzLCBvcCA9IHRoaXMub3B0aW9ucywgc2NhbGVzID0gdGhpcy5zY2FsZXMsIHNlbHMgPSB0aGlzLnNlbHM7XG5cbiAgICAgICAgc2NhbGVzLnBhdGhzLmZvckVhY2gobGluZSA9PiB7XG4gICAgICAgICAgICB0aGlzLmxheWVycy5iZy5hcHBlbmQoXCJwYXRoXCIpXG4gICAgICAgICAgICAgICAgLmRhdHVtKHhzKVxuICAgICAgICAgICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJsaW5lXCIpXG4gICAgICAgICAgICAgICAgLmF0dHIoXCJkXCIsIGQgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbGluZShkKVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG5cbiAgICAgICAgc2Vscy5saW5lQmFja2dyb3VuZC5zZWxlY3RBbGwoXCIuZ3JhZC1ib3hcIilcbiAgICAgICAgICAgIC5kYXRhKFsxXSlcbiAgICAgICAgICAgIC5qb2luKCdyZWN0JylcbiAgICAgICAgICAgIC5jbGFzc2VkKCdncmFkLWJveCcsIHRydWUpXG4gICAgICAgICAgICAuYXR0cihcIndpZHRoXCIsIG9wLndpZHRoKVxuICAgICAgICAgICAgLmF0dHIoXCJoZWlnaHRcIiwgb3AuaGVpZ2h0KVxuICAgICAgICAgICAgLmF0dHIoXCJmaWxsLW9wYWNpdHlcIiwgMC4wKVxuICAgIH1cblxuICAgIHBsb3RDdXJ2ZUJ5R3JhZGllbnQoeHM6IG51bWJlcltdKSB7XG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzLCBzY2FsZXMgPSB0aGlzLnNjYWxlcywgc2VscyA9IHRoaXMuc2Vscywgb3AgPSB0aGlzLm9wdGlvbnM7XG5cbiAgICAgICAgY29uc3QgeHdpZHRoID0gb3Aud2lkdGggKiAoeHNbMV0gLSB4c1swXSkgLyAoZDMubWF4KHhzKSAtIGQzLm1pbih4cykpIC8vIEFzc3VtZXMgbGVuZ3RoIG9mIHhzID4gMVxuXG4gICAgICAgIGNvbnN0IGJhbGxVcGRhdGVyID0gc2VsZi5kYXRhKClbMF0udXBkYXRlclxuXG4gICAgICAgIC8vIENsZWFyIG1hc2tcbiAgICAgICAgY29uc3QgbGluZSA9IHNjYWxlcy5wYXRoc1swXVxuXG4gICAgICAgIHNlbHMubWFza0xpbmUuYXR0cignZCcsIGxpbmUoeHMpKVxuXG4gICAgICAgIGNvbnN0IGNvbG9yU2NhbGUgPSBkMy5zY2FsZVNlcXVlbnRpYWwoZDMuaW50ZXJwb2xhdGVQbGFzbWEpXG4gICAgICAgIFxuICAgICAgICAvLyBDaGVjayB0aGUgZ3JhZGllbnQgcmFuZ2VcbiAgICAgICAgY29uc3QgdXBkYXRlQW10cyA9IHhzLm1hcCh4ID0+IE1hdGgubG9nKE1hdGguYWJzKGJhbGxVcGRhdGVyLnVwZGF0ZU1vZGlmaWVyKHgpKSkpXG5cbiAgICAgICAgY29uc3QgY2xhbXBlZFNjYWxlID0gUi5jdXJyeSgobWluOm51bWJlciwgbWF4Om51bWJlciwgYXJyOm51bWJlcltdKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBjbGFtcGVyID0gUi5jbGFtcChtaW4sIG1heClcbiAgICAgICAgICAgIGNvbnN0IGNsYW1wZWRBcnIgPSBSLm1hcChjbGFtcGVyLCBhcnIpXG4gICAgICAgICAgICByZXR1cm4gYXJyLm1hcCh4ID0+IHggLSBkMy5tZWFuKGNsYW1wZWRBcnIpKVxuICAgICAgICAgICAgLy8gcmV0dXJuIGNsYW1wZWRBcnIubWFwKHggPT4geCAtIGQzLm1lYW4oY2xhbXBlZEFycikpXG4gICAgICAgIH0pXG5cbiAgICAgICAgLy8gY29uc3QgY2xhbXBlciA9IGNsYW1wZWRTY2FsZSgtMiwgMik7XG4gICAgICAgIC8vIGNvbnN0IGRhdGEgPSBkMy56aXAoeHMsIGNsYW1wZXIodXBkYXRlQW10cykpLm1hcChkID0+IHtyZXR1cm4ge3g6IGRbMF0sIHVwZGF0ZUFtdDogZFsxXX19KVxuICAgICAgICBjb25zdCBkYXRhID0gZDMuemlwKHhzLCB1cGRhdGVBbXRzKS5tYXAoZCA9PiB7cmV0dXJuIHt4OiBkWzBdLCB1cGRhdGVBbXQ6IGRbMV19fSlcbiAgICAgICAgLy8gY29uc3QgZXh0ZW50ID0gZDMuZXh0ZW50KGNsYW1wZXIodXBkYXRlQW10cykpXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiRXh0ZW50OiBcIiwgZXh0ZW50KTtcblxuXG4gICAgICAgIC8vQHRzLWlnbm9yZVxuICAgICAgICBjb25zdCBjc2NhbGUgPSBkMy5zY2FsZUxpbmVhcigpLmRvbWFpbihbLTIsIDAsIDJdKS5yYW5nZShbXCIjNjdhOWNmXCIsIFwiI2Y3ZjdmN1wiLCBcIiNlZjhhNjJcIl0pXG5cbiAgICAgICAgc2Vscy5saW5lQmFja2dyb3VuZC5zZWxlY3RBbGwoJy5ncmFkLWJveCcpXG4gICAgICAgICAgICAuZGF0YShkYXRhKVxuICAgICAgICAgICAgLmpvaW4oJ3JlY3QnKVxuICAgICAgICAgICAgLmNsYXNzZWQoJ2dyYWQtYm94JywgdHJ1ZSlcbiAgICAgICAgICAgIC5hdHRyKCdoZWlnaHQnLCBvcC5oZWlnaHQpXG4gICAgICAgICAgICAuYXR0cignd2lkdGgnLCBzZWxmLnNjYWxlcy5tYXRoMnB4LngoeHdpZHRoKSlcbiAgICAgICAgICAgIC5hdHRyKCd4JywgZCA9PiBzZWxmLnNjYWxlcy5tYXRoMnB4LngoZC54KSlcbiAgICAgICAgICAgIC5hdHRyKCd5JywgMClcbiAgICAgICAgICAgIC5hdHRyKCdmaWxsJywgZCA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNzY2FsZShkLnVwZGF0ZUFtdClcbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgc2Vscy5saW5lQmFja2dyb3VuZC5hdHRyKCdtYXNrJywgYHVybCgjJHt0aGlzLm1hc2tJZH0pYClcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBQbG90IHRoZSB2YWx1ZXMgb2YgYWxsIHggYWNjb3JkaW5nIHRvIHRoZSBmdW5jdGlvblxuICAgICAqIFxuICAgICAqIEBwYXJhbSB4IEEgbGluc3BhY2Ugb2YgeCB2YWx1ZXMgb3ZlciB3aGljaCB0byBwbG90IGEgY3VydmVcbiAgICAgKi9cbiAgICBwbG90Q3VydmUoKSB7XG4gICAgICAgIGNvbnN0IG9wID0gdGhpcy5vcHRpb25zXG4gICAgICAgIGNvbnN0IHhzID0gbGluc3BhY2Uob3AubGFuZHNjYXBlLnhyYW5nZVswXSwgb3AubGFuZHNjYXBlLnhyYW5nZVsxXSwgMTAwMClcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXMsIHNjYWxlcyA9IHRoaXMuc2NhbGVzLCBzZWxzID0gdGhpcy5zZWxzO1xuXG4gICAgICAgIGlmIChzZWxmLmRhdGEoKSAhPSBudWxsKSB7XG4gICAgICAgICAgICBpZiAoc2VsZi5kYXRhKCkubGVuZ3RoID4gMSkgc2VsZi5wbG90Q3VydmVCeURlZmF1bHQoeHMpXG4gICAgICAgICAgICBlbHNlIHNlbGYucGxvdEN1cnZlQnlHcmFkaWVudCh4cylcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHVwZGF0ZVNjYWxlcyhvcDogR3JhcGhPcHRpb25zKSB7XG4gICAgICAgIGNvbnN0IHNjYWxlcyA9IHRoaXMuc2NhbGVzXG5cbiAgICAgICAgY29uc3QgeGJhc2VSYW5nZSA9IFstMSwgMV1cbiAgICAgICAgY29uc3QgeWJhc2VSYW5nZSA9IFsxLCAwXVxuXG4gICAgICAgIGNvbnN0IHhweFJhbmdlID0gWzAsIG9wLndpZHRoXVxuICAgICAgICBjb25zdCB5cHhSYW5nZSA9IFtvcC5oZWlnaHQsIDBdXG5cbiAgICAgICAgc2NhbGVzLmJhc2UybWF0aCA9IHtcbiAgICAgICAgICAgIHg6IGQzLnNjYWxlTGluZWFyKCkuZG9tYWluKHhiYXNlUmFuZ2UpLnJhbmdlKG9wLmxhbmRzY2FwZS54cmFuZ2UpLFxuICAgICAgICAgICAgeTogZDMuc2NhbGVMaW5lYXIoKS5kb21haW4oeWJhc2VSYW5nZSkucmFuZ2Uob3AubGFuZHNjYXBlLnlyYW5nZSlcbiAgICAgICAgfVxuICAgICAgICBzY2FsZXMuYmFzZTJweCA9IHtcbiAgICAgICAgICAgIHg6IGQzLnNjYWxlTGluZWFyKCkuZG9tYWluKHhiYXNlUmFuZ2UpLnJhbmdlKHhweFJhbmdlKSxcbiAgICAgICAgICAgIHk6IGQzLnNjYWxlTGluZWFyKCkuZG9tYWluKHliYXNlUmFuZ2UpLnJhbmdlKHlweFJhbmdlKVxuICAgICAgICB9XG4gICAgICAgIHNjYWxlcy5tYXRoMnB4ID0ge1xuICAgICAgICAgICAgeDogZDMuc2NhbGVMaW5lYXIoKS5kb21haW4ob3AubGFuZHNjYXBlLnhyYW5nZSkucmFuZ2UoeHB4UmFuZ2UpLFxuICAgICAgICAgICAgeTogZDMuc2NhbGVMaW5lYXIoKS5kb21haW4ob3AubGFuZHNjYXBlLnlyYW5nZSkucmFuZ2UoeXB4UmFuZ2UpXG4gICAgICAgIH1cblxuICAgICAgICBzY2FsZXMuYmFzZTJsb3NzID0gZDMuc2NhbGVMaW5lYXIoKS5kb21haW4ob3AubGFuZHNjYXBlLnlyYW5nZSkucmFuZ2UoWzAsIDFdKVxuXG4gICAgICAgIHNjYWxlcy5wYXRocyA9IHRoaXMubmV3UGF0aHMob3AubGFuZHNjYXBlKVxuICAgIH1cblxuICAgIHVwZGF0ZUF4ZXMoc2NhbGVzOiBHcmFwaFNjYWxlcywgb3A6IEdyYXBoT3B0aW9ucykge1xuICAgICAgICBjb25zdCBzZWxzID0gdGhpcy5zZWxzXG4gICAgICAgIHNlbHMueGF4aXMuY2FsbChkMy5heGlzQm90dG9tKHNjYWxlcy5tYXRoMnB4LngpLnRpY2tWYWx1ZXMoWzBdKS50aWNrRm9ybWF0KHggPT4gJzAnKSlcbiAgICB9XG5cbiAgICBpbml0KCkge1xuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICAgICAgY29uc3Qgb3AgPSB0aGlzLm9wdGlvbnM7XG4gICAgICAgIGNvbnN0IHNjYWxlcyA9IHRoaXMuc2NhbGVzO1xuICAgICAgICBjb25zdCBzZWxzID0gdGhpcy5zZWxzO1xuXG4gICAgICAgIHRoaXMudXBkYXRlU2NhbGVzKG9wKVxuXG4gICAgICAgIHNlbHMueGF4aXMgPSB0aGlzLmJhc2UuYXBwZW5kKFwiZ1wiKVxuICAgICAgICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcImF4aXMgYXhpcy0teFwiKVxuICAgICAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgU1ZHLnRyYW5zbGF0ZSgwLCBvcC5oZWlnaHQpKVxuXG4gICAgICAgIHNlbHMueGxhYmVsID0gdGhpcy5iYXNlLmFwcGVuZChcInRleHRcIilcbiAgICAgICAgICAgIC50ZXh0KFwiXFx1MDNCOCAtIFxcdTAzQjgqXCIpXG4gICAgICAgICAgICAuYXR0cihcImNsYXNzXCIsIFwidGl0bGVzXCIpXG4gICAgICAgICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBTVkcudHJhbnNsYXRlKG9wLndpZHRoIC8gMiwgb3AuaGVpZ2h0ICsgb3AucGFkKSlcblxuICAgICAgICAvLyBBZGQgYmFzZSBtYXNrXG4gICAgICAgIHNlbHMubWFzayA9IHRoaXMuYmFzZS5hcHBlbmQoJ21hc2snKS5hdHRyKCdpZCcsIHRoaXMubWFza0lkKVxuXG4gICAgICAgIHNlbHMubWFza0JhY2tncm91bmQgPSBzZWxzLm1hc2suYXBwZW5kKCdyZWN0JylcbiAgICAgICAgICAgIC5hdHRyKCd3aWR0aCcsIG9wLndpZHRoKVxuICAgICAgICAgICAgLmF0dHIoJ2hlaWdodCcsIG9wLmhlaWdodClcbiAgICAgICAgICAgIC5hdHRyKCdmaWxsJywgJ2JsYWNrJylcblxuICAgICAgICBzZWxzLm1hc2tMaW5lID0gc2Vscy5tYXNrLlxuICAgICAgICAgICAgc2VsZWN0QWxsKFwiI3RyYW5zcGFyZW50LWxpbmVcIikuXG4gICAgICAgICAgICBkYXRhKFsxXSlcbiAgICAgICAgICAgIC5qb2luKCdwYXRoJylcbiAgICAgICAgICAgIC5hdHRyKCdpZCcsICd0cmFuc3BhcmVudC1saW5lJylcbiAgICAgICAgICAgIC5hdHRyKCdzdHJva2UnLCAnd2hpdGUnKVxuICAgICAgICAgICAgLmF0dHIoJ3N0cm9rZS13aWR0aCcsICc1cHgnKVxuXG4gICAgICAgIHNlbHMubGluZUJhY2tncm91bmQgPSBzZWxmLmJhc2Uuc2VsZWN0QWxsKCcjbGluZS1iYWNrZ3JvdW5kJylcbiAgICAgICAgICAgIC5kYXRhKFsxXSlcbiAgICAgICAgICAgIC5qb2luKCdnJylcbiAgICAgICAgICAgIC5hdHRyKCdpZCcsICdsaW5lLWJhY2tncm91bmQnKVxuXG4gICAgICAgIHNlbHMuYmFja2Ryb3AgPSB0aGlzLmxheWVycy5iZy5hcHBlbmQoXCJnXCIpXG4gICAgICAgICAgICAuYXR0cihcImlkXCIsIFwiYmFja2Ryb3BcIilcbiAgICAgICAgICAgIC5jbGFzc2VkKCdncmFzcycsIHRydWUpXG4gICAgICAgICAgICAuYXBwZW5kKFwicmVjdFwiKVxuICAgICAgICAgICAgLmF0dHIoXCJoZWlnaHRcIiwgb3AuaGVpZ2h0KVxuICAgICAgICAgICAgLmF0dHIoXCJ3aWR0aFwiLCBvcC53aWR0aClcblxuICAgICAgICB0aGlzLnVwZGF0ZUF4ZXMoc2NhbGVzLCBvcClcblxuICAgICAgICBzY2FsZXMucGF0aHMgPSB0aGlzLm5ld1BhdGhzKG9wLmxhbmRzY2FwZSlcblxuICAgICAgICB0aGlzLnBsb3RDdXJ2ZSgpXG4gICAgfVxuXG4gICAgbmV3UGF0aHMobGFuZHNjYXBlOiBMYW5kc2NhcGUpIHtcbiAgICAgICAgY29uc3Qgc2NhbGVzID0gdGhpcy5zY2FsZXNcbiAgICAgICAgY29uc3QgYmFzZUxpbmUgPSBkMy5saW5lPG51bWJlcj4oKVxuICAgICAgICAgICAgLngoKGQ6IG51bWJlciwgaTogbnVtYmVyKSA9PiBzY2FsZXMubWF0aDJweC54KGQpKVxuICAgICAgICAgICAgLnkoKGQ6IG51bWJlciwgaTogbnVtYmVyKSA9PiBzY2FsZXMubWF0aDJweC55KGdldFBsb3RGdW5jKGxhbmRzY2FwZSkoZCkpKVxuICAgICAgICAgICAgLmN1cnZlKGQzLmN1cnZlTGluZWFyKVxuXG4gICAgICAgIHJldHVybiBbYmFzZUxpbmVdXG4gICAgfVxuXG4gICAgaW5pdEJhbGxzKCkge1xuICAgICAgICBjb25zdCBzZWxmID0gdGhpcywgb3AgPSB0aGlzLm9wdGlvbnM7XG5cbiAgICAgICAgY29uc3QgdG9vU21hbGwgPSAoeDogbnVtYmVyKSA9PiB4IDwgKG9wLmxhbmRzY2FwZS54cmFuZ2VbMF0pXG4gICAgICAgIGNvbnN0IHRvb0JpZyA9ICh4OiBudW1iZXIpID0+IHggPiAob3AubGFuZHNjYXBlLnhyYW5nZVsxXSlcblxuICAgICAgICBjb25zdCBmaXhPdXRPZkJvdW5kcyA9ICh4OiBudW1iZXIpID0+IHtcbiAgICAgICAgICAgIGxldCBvdXQ6IG51bWJlclxuXG4gICAgICAgICAgICBpZiAoaXNOYU4oeCkpIG91dCA9IG9wLmxhbmRzY2FwZS54cmFuZ2VbMF1cbiAgICAgICAgICAgIGVsc2UgaWYgKHRvb1NtYWxsKHgpKSBvdXQgPSBvcC5sYW5kc2NhcGUueHJhbmdlWzBdXG4gICAgICAgICAgICBlbHNlIGlmICh0b29CaWcoeCkpIG91dCA9IG9wLmxhbmRzY2FwZS54cmFuZ2VbMV1cbiAgICAgICAgICAgIGVsc2Ugb3V0ID0geFxuXG4gICAgICAgICAgICByZXR1cm4gb3V0XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBnZXROZXh0QmFsbChiOiBHb2xmQmFsbCk6IEdvbGZCYWxsIHtcbiAgICAgICAgICAgIGNvbnN0IG5leHRYID0gYi5uZXh0WCgpXG4gICAgICAgICAgICBjb25zdCBjdXJyQmFsbFNlbCA9IHNlbGYuYmFzZS5zZWxlY3QoYC4ke2IuY2xhc3NuYW1lfWApXG4gICAgICAgICAgICBjb25zdCBmb3JjZVggPSBmaXhPdXRPZkJvdW5kcyhuZXh0WClcbiAgICAgICAgICAgIGlmICghY3VyckJhbGxTZWwuY2xhc3NlZCgnZGVhZC1iYWxsJykpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYi5zdGVwXyhmb3JjZVgpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gYlxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgc3ViT2JqID0ge1xuICAgICAgICAgICAgbmV4dDogZ2JzID0+IHtcbiAgICAgICAgICAgICAgICBnYnMuZm9yRWFjaChiID0+IHNlbGYucGxvdEJhbGwoYikpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXJyb3I6IGIgPT4gY29uc29sZS5sb2coXCJFUlJPUjogXCIsIGIpLFxuICAgICAgICAgICAgY29tcGxldGU6ICgpID0+IGNvbnNvbGUubG9nKFwiQ09NUExFVEVcIiksXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB0aWNrZXIgPSAoKSA9PiBpbnRlcnZhbCgxMCkucGlwZShcbiAgICAgICAgICAgIHNjYW4oKGFjYzogVCkgPT4ge1xuICAgICAgICAgICAgICAgIC8vIFVuc3Vic2NyaWJlciB0aWNrZXIgaWYgYWxsIGJhbGxzIGRlYWRcbiAgICAgICAgICAgICAgICBpZiAoUi5hbGwoKGI6IEdvbGZCYWxsKSA9PiBkMy5zZWxlY3QoYC4ke2IuY2xhc3NuYW1lfWApLmNsYXNzZWQoJ2RlYWQtYmFsbCcpLCBzZWxmLmRhdGEoKSkpIHtcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ1RpY2tlci51bnN1YnNjcmliZSgpXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgc2VsZi5kYXRhKCkuZm9yRWFjaChiID0+IGdldE5leHRCYWxsKGIpKVxuICAgICAgICAgICAgICAgIHJldHVybiBzZWxmLmRhdGEoKVxuICAgICAgICAgICAgfSwgc2VsZi5kYXRhKCkpLFxuICAgICAgICAgICAgdGFrZShvcC5tYXhJdGVyKVxuICAgICAgICApLnN1YnNjcmliZShzdWJPYmopXG5cbiAgICAgICAgLy8gUnVubmluZyB0aWNrZXIgc3RhcnRzIGFzIGFuIGVtcHR5IHN1YnNjcmlwdGlvbiBvYmplY3QsIGlzIGxhdGVyIHJlcGxhY2VkIGJ5IHRoZSBydW5uaW5nIHRpY2tlclxuICAgICAgICBsZXQgcnVubmluZ1RpY2tlciA9IHtcbiAgICAgICAgICAgIHVuc3Vic2NyaWJlOiAoKSA9PiBjb25zb2xlLmxvZyhcIkVtcHR5IFRpY2tlciFcIilcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHBsb3RCYWxscyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJ1bm5pbmdUaWNrZXIudW5zdWJzY3JpYmUoKVxuICAgICAgICAgICAgY29uc3QgY2xpY2sgPSB0b1ZlYyhkMy5tb3VzZSh0aGlzKSlcbiAgICAgICAgICAgIGQzLnNlbGVjdEFsbCgnLmdvbGYtYmFsbCcpLmNsYXNzZWQoJ2RlYWQtYmFsbCcsIGZhbHNlKVxuICAgICAgICAgICAgc2VsZi5kYXRhKCkuZm9yRWFjaCgoYiwgaSkgPT4gYi54ID0gc2VsZi5pbnRvTWF0aChjbGljaykueClcbiAgICAgICAgICAgIHNlbGYuZGF0YSgpLmZvckVhY2goYiA9PiBzZWxmLnBsb3RCYWxsKGIpKVxuICAgICAgICAgICAgc2VsZi5ldmVudEhhbmRsZXIudHJpZ2dlcihcImxvc3MtY2xpY2tcIiwge30pXG5cbiAgICAgICAgICAgIHJ1bm5pbmdUaWNrZXIgPSB0aWNrZXIoKVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gdGhpcy5zZWxzLmJhY2tkcm9wLm9uKCdjbGljaycsIHBsb3RCYWxscylcbiAgICAgICAgLy8gdGhpcy5zZWxzLm1hc2tCYWNrZ3JvdW5kLm9uKCdjbGljaycsIHBsb3RCYWxscylcbiAgICAgICAgLy8gdGhpcy5zZWxzLm1hc2sub24oJ2NsaWNrJywgcGxvdEJhbGxzKVxuICAgICAgICB0aGlzLnNlbHMubGluZUJhY2tncm91bmQub24oJ2NsaWNrJywgcGxvdEJhbGxzKVxuICAgIH1cblxuICAgIHEoKTogbnVtYmVyXG4gICAgcSh2YWw6IG51bWJlcik6IHRoaXNcbiAgICBxKHZhbD8pIHtcbiAgICAgICAgaWYgKHZhbCA9PSBudWxsKSByZXR1cm4gdGhpcy5kYXRhSGVhZC51cGRhdGVyLnFcbiAgICAgICAgdGhpcy5kYXRhSGVhZC5xKHZhbClcbiAgICAgICAgdGhpcy5wbG90Q3VydmUoKVxuICAgICAgICByZXR1cm4gdGhpc1xuICAgIH1cblxuICAgIGV0YSgpOiBudW1iZXJcbiAgICBldGEodmFsOiBudW1iZXIpOiB0aGlzXG4gICAgZXRhKHZhbD8pIHtcbiAgICAgICAgaWYgKHZhbCA9PSBudWxsKSByZXR1cm4gdGhpcy5kYXRhSGVhZC51cGRhdGVyLnFcbiAgICAgICAgdGhpcy5kYXRhSGVhZC5ldGEodmFsKVxuICAgICAgICAvLyB0aGlzLnBsb3RDdXJ2ZSgpXG4gICAgICAgIHJldHVybiB0aGlzXG4gICAgfVxuXG4gICAgZGF0YSgpOiBUXG4gICAgZGF0YSh2YWw6IFQpOiB0aGlzXG4gICAgZGF0YSh2YWw/KSB7XG4gICAgICAgIGlmICh2YWwgPT0gbnVsbCkgcmV0dXJuIHRoaXMuX2RhdGFcbiAgICAgICAgdGhpcy5fZGF0YSA9IHZhbDtcbiAgICAgICAgdGhpcy5pbml0QmFsbHMoKVxuICAgICAgICByZXR1cm4gdGhpc1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIElOUExBQ0UgY2hhbmdlIHRoZSBnb2xmIGJhbGxzIGludG8gdGhlIEJBU0Ugc2NhbGVcbiAgICAgKi9cbiAgICBkYXRhVG9CYXNlXygpOiBUIHtcbiAgICAgICAgdGhpcy5kYXRhKCkubWFwKGIgPT4ge1xuICAgICAgICAgICAgYi54ID0gdGhpcy5zY2FsZXMuYmFzZTJtYXRoLnguaW52ZXJ0KGIueClcbiAgICAgICAgICAgIHJldHVybiBiXG4gICAgICAgIH0pXG5cbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YSgpXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTW9kaWZ5IHRoZSBnb2xmIGJhbGxzIGFuZCBjaGFuZ2UgdGhlaXIgeCB2YWx1ZSBmcm9tIEJBU0UgdG8gdGhlIG5ldyBNQVRIXG4gICAgICovXG4gICAgZGF0YUZyb21CYXNlKHZhbDogVCk6IHRoaXMge1xuICAgICAgICB2YWwuZm9yRWFjaChiID0+IHtcbiAgICAgICAgICAgIGIueCA9IHRoaXMuc2NhbGVzLmJhc2UybWF0aC54KGIueClcbiAgICAgICAgfSlcblxuICAgICAgICB0aGlzLmluaXRCYWxscygpXG4gICAgICAgIHJldHVybiB0aGlzXG4gICAgfVxufVxuXG5mdW5jdGlvbiB0b1ZlYyhbeCwgeV06IFtudW1iZXIsIG51bWJlcl0pOiBWZWN0b3IyRCB7XG4gICAgcmV0dXJuIHsgeDogeCwgeTogeSB9XG59IiwiaW1wb3J0ICogYXMgZDMgZnJvbSAnZDMnXG5pbXBvcnQgKiBhcyBSIGZyb20gJ3JhbWRhJ1xuXG5pbXBvcnQgeyBDaGFydDJELCBDaGFydE9wdGlvbnMsIENoYXJ0U2NhbGVzIH0gZnJvbSAnLi4vdXRpbC9DaGFydDJkVmlzQ29tcG9uZW50J1xuaW1wb3J0IHsgU2ltcGxlRXZlbnRIYW5kbGVyIH0gZnJvbSAnLi4vdXRpbC9TaW1wbGVFdmVudEhhbmRsZXInXG5pbXBvcnQgeyBEM1NlbCB9IGZyb20gJy4uL3V0aWwveGQzJ1xuaW1wb3J0IHsgU1ZHIH0gZnJvbSAnLi4vdXRpbC9TVkdwbHVzJ1xuXG5pbXBvcnQgeyBCYWxsSGlzdG9yeSB9IGZyb20gJy4vR29sZkJhbGwnXG5cbmNvbnN0IGF4aXNPZmZzZXQgPSAxIC8vIFVzZSB0aGlzIHRvIGNvdmVyIHRoZSBwbG90dGVkIGxpbmVzXG5cbmludGVyZmFjZSBHcmFwaFNlbHMge1xuICAgIHhheGlzPzogRDNTZWxcbiAgICB5YXhpcz86IEQzU2VsXG4gICAgeGxhYmVsPzogRDNTZWxcbiAgICBsaW5lPzogRDNTZWxcbiAgICBiYWNrZHJvcD86IEQzU2VsXG4gICAgYmFsbD86IEQzU2VsXG59XG5cbnR5cGUgVHJhY2tlciA9IHtcbiAgICBzZWw6IEQzU2VsLFxuICAgIHZhbHM6IG51bWJlcltdXG59XG5cbnR5cGUgTGluZVRyYWNrZXIgPSB7XG4gICAgKGtleTogc3RyaW5nKTogVHJhY2tlclxufVxuXG50eXBlIFQgPSBMaW5lVHJhY2tlclxuXG5cbmV4cG9ydCBjbGFzcyBHb2xmTG9zc2VzIGV4dGVuZHMgQ2hhcnQyRDxUPiB7XG4gICAgY3NzbmFtZSA9IFwibGluZS1wbG90XCJcblxuICAgIF9kYXRhOiBUXG5cbiAgICBvcHRpb25zOiBDaGFydE9wdGlvbnMgPSB7XG4gICAgICAgIG1heFdpZHRoOiAzNTAsXG4gICAgICAgIG1heEhlaWdodDogMjUwLFxuICAgICAgICBtYXJnaW46IHsgdG9wOiAxMCwgcmlnaHQ6IDEwLCBib3R0b206IDMwLCBsZWZ0OiAzMCB9LFxuICAgICAgICBwYWQ6IHsgdG9wOiA1LCByaWdodDogMSwgYm90dG9tOiAxMCwgbGVmdDogMTUgfSxcbiAgICAgICAgeHJhbmdlOiBbMCwgNjAwXSxcbiAgICAgICAgeXJhbmdlOiBbMS4xLCAxZS0zXSxcbiAgICB9XG4gICAgZGVmYXVsdFhyYW5nZTogW251bWJlciwgbnVtYmVyXVxuXG4gICAgc2NhbGVzOiBDaGFydFNjYWxlcyA9IHt9XG5cbiAgICBzZWxzOiBHcmFwaFNlbHMgPSB7fVxuXG4gICAgcGF0aDogZDMuTGluZTxudW1iZXI+XG5cbiAgICBjb25zdHJ1Y3RvcihkM3BhcmVudDogRDNTZWwsIGV2ZW50SGFuZGxlcj86IFNpbXBsZUV2ZW50SGFuZGxlciwgb3B0aW9ucyA9IHt9KSB7XG4gICAgICAgIHN1cGVyKGQzcGFyZW50LCBldmVudEhhbmRsZXIsIG9wdGlvbnMpXG4gICAgICAgIHN1cGVyLmluaXRTVkcodGhpcy5vcHRpb25zLCBbXCJiZ1wiXSlcbiAgICAgICAgdGhpcy5iYXNlLmNsYXNzZWQodGhpcy5jc3NuYW1lLCB0cnVlKVxuICAgICAgICB0aGlzLmRlZmF1bHRYcmFuZ2UgPSB0aGlzLm9wdGlvbnMueHJhbmdlXG4gICAgICAgIHRoaXMuZGF0YSg8TGluZVRyYWNrZXI+e30pXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUGxvdCB0aGUgdmFsdWVzIG9mIGFsbCB4IGFjY29yZGluZyB0byB0aGUgZnVuY3Rpb25cbiAgICAgKiBcbiAgICAgKiBAcGFyYW0geCBBIGxpbnNwYWNlIG9mIHggdmFsdWVzIG92ZXIgd2hpY2ggdG8gcGxvdCBhIGN1cnZlXG4gICAgICovXG4gICAgcHJvdGVjdGVkIGFkZERhdGFLZXlfKGNsYXNzbmFtZTogc3RyaW5nKSB7XG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzXG4gICAgICAgIGlmICghUi5oYXMoY2xhc3NuYW1lLCB0aGlzLmRhdGEoKSkpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBBZGRpbmcga2V5OiAke2NsYXNzbmFtZX1gKTtcbiAgICAgICAgICAgIHRoaXMuZGF0YSgpW2NsYXNzbmFtZV0gPSB7XG4gICAgICAgICAgICAgICAgc2VsOiBzZWxmLmluaXRCYXNlTGluZShjbGFzc25hbWUpLFxuICAgICAgICAgICAgICAgIHZhbHM6IFtdXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBMaXZlIHVwZGF0ZSB0aGUgeHJhbmdlXG4gICAgdXBkYXRlU2NhbGVzKHhyYW5nZSkge1xuICAgICAgICBjb25zdCBvcCA9IHRoaXMub3B0aW9uc1xuICAgICAgICB0aGlzLnNjYWxlcy54ID0gZDMuc2NhbGVMaW5lYXIoKS5kb21haW4oeHJhbmdlKS5yYW5nZShbMCwgb3Aud2lkdGhdKS5jbGFtcCh0cnVlKVxuICAgIH1cblxuICAgIGNsZWFyUGF0aHMoKSB7XG4gICAgICAgIHRoaXMuZGF0YShSLm1hcChkID0+IFIuYXNzb2MoJ3ZhbHMnLCBbXSwgZCksIHRoaXMuZGF0YSgpKSlcbiAgICB9XG5cbiAgICBwbG90UGF0aChkOiBCYWxsSGlzdG9yeSwgc2NhbGU/KSB7XG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuICAgICAgICB0aGlzLmFkZERhdGFLZXlfKGQuY2xhc3NuYW1lKTtcblxuICAgICAgICBjb25zdCBzY2FsZXIgPSAoc2NhbGUgPT0gbnVsbCkgPyB4ID0+IHggOiBzY2FsZVxuXG4gICAgICAgIGNvbnN0IGN1cnJWYWxzID0gdGhpcy5kYXRhKClbZC5jbGFzc25hbWVdO1xuICAgICAgICBjdXJyVmFscy52YWxzLnB1c2goc2NhbGVyKGQubG9zcykpXG5cbiAgICAgICAgLy8gc2xpZGluZyB4LWF4aXNcbiAgICAgICAgY29uc3QgbmV3WHJhbmdlID0gW01hdGgubWF4KDAsIGN1cnJWYWxzLnZhbHMubGVuZ3RoLXRoaXMub3B0aW9ucy54cmFuZ2VbMV0pLCBNYXRoLm1heChjdXJyVmFscy52YWxzLmxlbmd0aCx0aGlzLm9wdGlvbnMueHJhbmdlWzFdKV1cbiAgICAgICAgdGhpcy51cGRhdGVTY2FsZXMobmV3WHJhbmdlKVxuICAgICAgICB0aGlzLmNyZWF0ZVBhdGgoKVxuXG4gICAgICAgIGN1cnJWYWxzLnNlbC5kYXRhKFtjdXJyVmFsc10pXG4gICAgICAgICAgICAuam9pbihcInBhdGhcIilcbiAgICAgICAgICAgIC5jbGFzc2VkKGQuY2xhc3NuYW1lLCB0cnVlKVxuICAgICAgICAgICAgLmF0dHIoXCJkXCIsIGQgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBzZWxmLnBhdGgoZC52YWxzKVxuICAgICAgICAgICAgfSlcbiAgICB9XG5cbiAgICBwcml2YXRlIGluaXRCYXNlTGluZShjbGFzc25hbWU6IHN0cmluZykge1xuICAgICAgICByZXR1cm4gdGhpcy5sYXllcnMuYmcuYXBwZW5kKFwicGF0aFwiKVxuICAgICAgICAgICAgLmNsYXNzZWQoY2xhc3NuYW1lLCB0cnVlKVxuICAgICAgICAgICAgLmNsYXNzZWQoJ2xpbmUnLCB0cnVlKVxuICAgIH1cblxuICAgIGluaXQoKSB7XG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuICAgICAgICBjb25zdCBvcCA9IHRoaXMub3B0aW9ucztcbiAgICAgICAgY29uc3Qgc2NhbGVzID0gdGhpcy5zY2FsZXM7XG4gICAgICAgIGNvbnN0IHNlbHMgPSB0aGlzLnNlbHM7XG5cbiAgICAgICAgdGhpcy5jcmVhdGVTY2FsZXMoKVxuICAgICAgICB0aGlzLmNyZWF0ZVBhdGgoKVxuICAgICAgICB0aGlzLmNyZWF0ZUF4ZXMoKVxuICAgIH1cblxuICAgIHByb3RlY3RlZCBjcmVhdGVTY2FsZXMoKSB7XG4gICAgICAgIGNvbnN0IHNjYWxlcyA9IHRoaXMuc2NhbGVzXG4gICAgICAgIGNvbnN0IG9wID0gdGhpcy5vcHRpb25zXG5cbiAgICAgICAgc2NhbGVzLnggPSBkMy5zY2FsZUxpbmVhcigpLmRvbWFpbihvcC54cmFuZ2UpLnJhbmdlKFswLCBvcC53aWR0aF0pLmNsYW1wKHRydWUpXG4gICAgICAgIHNjYWxlcy55ID0gZDMuc2NhbGVMb2coKS5kb21haW4ob3AueXJhbmdlKS5yYW5nZShbMCwgb3AuaGVpZ2h0XSkuY2xhbXAodHJ1ZSlcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgY3JlYXRlQXhlcygpIHtcbiAgICAgICAgY29uc3Qgc2VscyA9IHRoaXMuc2Vsc1xuICAgICAgICBjb25zdCBzY2FsZXMgPSB0aGlzLnNjYWxlc1xuICAgICAgICBjb25zdCBvcCA9IHRoaXMub3B0aW9uc1xuXG4gICAgICAgIC8vIENyZWF0ZSBheGVzXG4gICAgICAgIHNlbHMueWF4aXMgPSB0aGlzLmJhc2UuYXBwZW5kKFwiZ1wiKVxuICAgICAgICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcImF4aXMgYXhpcy0teVwiKVxuICAgICAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgU1ZHLnRyYW5zbGF0ZSgwLCAtIGF4aXNPZmZzZXQpKVxuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgLmNhbGwoZDMuYXhpc0xlZnQoc2NhbGVzLnkpLnRpY2tGb3JtYXQoXCJcIikudGlja3MoNCkpO1xuXG4gICAgICAgIHNlbHMueGF4aXMgPSB0aGlzLmJhc2UuYXBwZW5kKFwiZ1wiKVxuICAgICAgICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcImF4aXMgYXhpcy0teFwiKVxuICAgICAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgU1ZHLnRyYW5zbGF0ZSgwLCBvcC5oZWlnaHQgLSBheGlzT2Zmc2V0KSlcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgIC5jYWxsKGQzLmF4aXNCb3R0b20oc2NhbGVzLngpLnRpY2tGb3JtYXQoXCJcIikudGlja3MoNCkpO1xuXG4gICAgICAgIC8vIEFkZCB4bGFiZWxcbiAgICAgICAgdGhpcy5iYXNlLmFwcGVuZChcInRleHRcIilcbiAgICAgICAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIFNWRy50cmFuc2xhdGUob3Aud2lkdGggLyAyLCBvcC5tYXJnaW4udG9wICsgb3AuaGVpZ2h0ICsgMTApKVxuICAgICAgICAgICAgLnN0eWxlKFwidGV4dC1hbmNob3JcIiwgXCJtaWRkbGVcIilcbiAgICAgICAgICAgIC50ZXh0KFwiVGltZVwiKVxuXG4gICAgICAgIC8vIEFkZCB5bGFiZWxcbiAgICAgICAgdGhpcy5iYXNlLmFwcGVuZChcInRleHRcIilcbiAgICAgICAgICAgIC5zdHlsZShcInRleHQtYW5jaG9yXCIsIFwibWlkZGxlXCIpXG4gICAgICAgICAgICAudGV4dChcIkxvc3NcIilcbiAgICAgICAgICAgIC5hdHRyKFwieVwiLCBvcC5wYWQubGVmdCAtIG9wLm1hcmdpbi5sZWZ0KVxuICAgICAgICAgICAgLmF0dHIoXCJ4XCIsIG9wLnBhZC50b3AgLSAob3AuaGVpZ2h0IC8gMikpXG4gICAgICAgICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBTVkcucm90YXRlKC05MCkpXG4gICAgICAgIC8vIC5hdHRyKFwidHJhbnNmb3JtXCIsIFNWRy50cmFuc2xhdGUob3AubWFyZ2luLmxlZnQsIG9wLmhlaWdodC8yKSlcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgY3JlYXRlUGF0aCgpIHtcbiAgICAgICAgdGhpcy5wYXRoID0gZDMubGluZTxudW1iZXI+KClcbiAgICAgICAgICAgIC54KChkOiBudW1iZXIsIGk6IG51bWJlcikgPT4gdGhpcy5zY2FsZXMueChpKSlcbiAgICAgICAgICAgIC55KChkOiBudW1iZXIsIGk6IG51bWJlcikgPT4gdGhpcy5zY2FsZXMueShkKSlcbiAgICAgICAgICAgIC5jdXJ2ZShkMy5jdXJ2ZUxpbmVhcilcbiAgICB9XG5cbiAgICBkYXRhKCk6IFRcbiAgICBkYXRhKHZhbDogVCk6IHRoaXNcbiAgICBkYXRhKHZhbD8pIHtcbiAgICAgICAgaWYgKHZhbCA9PSBudWxsKSByZXR1cm4gdGhpcy5fZGF0YVxuICAgICAgICB0aGlzLl9kYXRhID0gdmFsO1xuICAgICAgICByZXR1cm4gdGhpc1xuICAgIH1cblxuICAgIHJlc2V0WHJhbmdlXygpOiB0aGlzIHtcbiAgICAgICAgdGhpcy5vcHRpb25zLnhyYW5nZSA9IHRoaXMuZGVmYXVsdFhyYW5nZVxuICAgICAgICByZXR1cm4gdGhpc1xuICAgIH1cbn0iLCJpbXBvcnQgKiBhcyBkMyBmcm9tICdkMydcbmltcG9ydCAqIGFzIFIgZnJvbSAncmFtZGEnXG5cbmltcG9ydCB7IENoYXJ0MkQsIENoYXJ0T3B0aW9ucywgQ2hhcnRTY2FsZXMgfSBmcm9tICcuLi91dGlsL0NoYXJ0MmRWaXNDb21wb25lbnQnXG5pbXBvcnQgeyBTaW1wbGVFdmVudEhhbmRsZXIgfSBmcm9tICcuLi91dGlsL1NpbXBsZUV2ZW50SGFuZGxlcidcbmltcG9ydCB7IEQzU2VsIH0gZnJvbSAnLi4vdXRpbC94ZDMnXG5pbXBvcnQgeyBTVkcgfSBmcm9tICcuLi91dGlsL1NWR3BsdXMnXG5pbXBvcnQgeyBCYWxsSGlzdG9yeSB9IGZyb20gJy4vR29sZkJhbGwnXG5cbmNvbnN0IGF4aXNPZmZzZXQgPSAxIC8vIFVzZSB0aGlzIHRvIGNvdmVyIHRoZSBwbG90dGVkIGxpbmVzXG5cbmludGVyZmFjZSBHcmFwaFNlbHMge1xuICAgIHhheGlzPzogRDNTZWxcbiAgICB5YXhpcz86IEQzU2VsXG4gICAgeGxhYmVsPzogRDNTZWxcbiAgICBsaW5lPzogRDNTZWxcbiAgICBiYWNrZHJvcD86IEQzU2VsXG4gICAgYmFsbD86IEQzU2VsXG59XG5cbnR5cGUgVHJhY2tlciA9IHtcbiAgICBzZWw6IEQzU2VsLFxuICAgIHZhbHM6IG51bWJlcltdXG59XG5cbnR5cGUgTGluZVRyYWNrZXIgPSB7XG4gICAgKGtleTogc3RyaW5nKTogVHJhY2tlclxufVxuXG50eXBlIFQgPSBMaW5lVHJhY2tlclxuXG5leHBvcnQgY2xhc3MgR29sZlhEaXN0IGV4dGVuZHMgQ2hhcnQyRDxUPiB7XG4gICAgY3NzbmFtZSA9IFwibGluZS1wbG90XCJcblxuICAgIF9kYXRhOiBUXG5cbiAgICBvcHRpb25zOiBDaGFydE9wdGlvbnMgPSB7XG4gICAgICAgIG1heFdpZHRoOiAzNTAsXG4gICAgICAgIG1heEhlaWdodDogMjUwLFxuICAgICAgICBtYXJnaW46IHsgdG9wOiAxMCwgcmlnaHQ6IDEwLCBib3R0b206IDMwLCBsZWZ0OiAzMCB9LFxuICAgICAgICBwYWQ6IHsgdG9wOiA1LCByaWdodDogMSwgYm90dG9tOiAxMCwgbGVmdDogMTUgfSxcbiAgICAgICAgeHJhbmdlOiBbMCwgNjAwXSxcbiAgICAgICAgeXJhbmdlOiBbMSwgMF0sXG4gICAgfVxuXG4gICAgZGVmYXVsdFhyYW5nZTogW251bWJlciwgbnVtYmVyXVxuXG4gICAgc2NhbGVzOiBDaGFydFNjYWxlcyA9IHt9XG5cbiAgICBzZWxzOiBHcmFwaFNlbHMgPSB7fVxuXG4gICAgcGF0aDogZDMuTGluZTxudW1iZXI+XG5cbiAgICBjb25zdHJ1Y3RvcihkM3BhcmVudDogRDNTZWwsIGV2ZW50SGFuZGxlcj86IFNpbXBsZUV2ZW50SGFuZGxlciwgb3B0aW9ucyA9IHt9KSB7XG4gICAgICAgIHN1cGVyKGQzcGFyZW50LCBldmVudEhhbmRsZXIsIG9wdGlvbnMpXG4gICAgICAgIHN1cGVyLmluaXRTVkcodGhpcy5vcHRpb25zLCBbXCJiZ1wiXSlcbiAgICAgICAgdGhpcy5iYXNlLmNsYXNzZWQodGhpcy5jc3NuYW1lLCB0cnVlKVxuICAgICAgICB0aGlzLmRlZmF1bHRYcmFuZ2UgPSB0aGlzLm9wdGlvbnMueHJhbmdlXG4gICAgICAgIHRoaXMuZGF0YSg8TGluZVRyYWNrZXI+e30pXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUGxvdCB0aGUgdmFsdWVzIG9mIGFsbCB4IGFjY29yZGluZyB0byB0aGUgZnVuY3Rpb25cbiAgICAgKiBcbiAgICAgKiBAcGFyYW0geCBBIGxpbnNwYWNlIG9mIHggdmFsdWVzIG92ZXIgd2hpY2ggdG8gcGxvdCBhIGN1cnZlXG4gICAgICovXG4gICAgcHJvdGVjdGVkIGFkZERhdGFLZXlfKGNsYXNzbmFtZTogc3RyaW5nKSB7XG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzXG4gICAgICAgIGlmICghUi5oYXMoY2xhc3NuYW1lLCB0aGlzLmRhdGEoKSkpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBBZGRpbmcga2V5OiAke2NsYXNzbmFtZX1gKTtcbiAgICAgICAgICAgIHRoaXMuZGF0YSgpW2NsYXNzbmFtZV0gPSB7XG4gICAgICAgICAgICAgICAgc2VsOiBzZWxmLmluaXRCYXNlTGluZShjbGFzc25hbWUpLFxuICAgICAgICAgICAgICAgIHZhbHM6IFtdXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjbGVhclBhdGhzKCkge1xuICAgICAgICB0aGlzLmRhdGEoUi5tYXAoZCA9PiBSLmFzc29jKCd2YWxzJywgW10sIGQpLCB0aGlzLmRhdGEoKSkpXG4gICAgfVxuXG4gICAgcGxvdFBhdGgoZDogQmFsbEhpc3RvcnksIHNjYWxlPykge1xuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICAgICAgdGhpcy5hZGREYXRhS2V5XyhkLmNsYXNzbmFtZSk7XG5cbiAgICAgICAgY29uc3Qgc2NhbGVyID0gKHNjYWxlID09IG51bGwpID8geCA9PiB4IDogc2NhbGVcblxuICAgICAgICBjb25zdCBjdXJyVmFscyA9IHRoaXMuZGF0YSgpW2QuY2xhc3NuYW1lXTtcbiAgICAgICAgY3VyclZhbHMudmFscy5wdXNoKHNjYWxlcihNYXRoLmFicyhkLngpKSk7XG5cbiAgICAgICAgLy8gc2xpZGluZyB4LWF4aXNcbiAgICAgICAgY29uc3QgbmV3WHJhbmdlID0gW01hdGgubWF4KDAsIGN1cnJWYWxzLnZhbHMubGVuZ3RoLXRoaXMub3B0aW9ucy54cmFuZ2VbMV0pLCBNYXRoLm1heChjdXJyVmFscy52YWxzLmxlbmd0aCx0aGlzLm9wdGlvbnMueHJhbmdlWzFdKV1cbiAgICAgICAgdGhpcy51cGRhdGVTY2FsZXMobmV3WHJhbmdlKVxuICAgICAgICB0aGlzLmNyZWF0ZVBhdGgoKSAvLyBEZXBlbmRzIG9uIHggc2NhbGVcblxuXG4gICAgICAgIGN1cnJWYWxzLnNlbC5kYXRhKFtjdXJyVmFsc10pXG4gICAgICAgICAgICAuam9pbihcInBhdGhcIilcbiAgICAgICAgICAgIC5jbGFzc2VkKGQuY2xhc3NuYW1lLCB0cnVlKVxuICAgICAgICAgICAgLmF0dHIoXCJkXCIsIGQgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBzZWxmLnBhdGgoZC52YWxzKVxuICAgICAgICAgICAgfSlcbiAgICB9XG5cbiAgICAvLyBMaXZlIHVwZGF0ZSB0aGUgeHJhbmdlXG4gICAgdXBkYXRlU2NhbGVzKHhyYW5nZSkge1xuICAgICAgICBjb25zdCBvcCA9IHRoaXMub3B0aW9uc1xuICAgICAgICB0aGlzLnNjYWxlcy54ID0gZDMuc2NhbGVMaW5lYXIoKS5kb21haW4oeHJhbmdlKS5yYW5nZShbMCwgb3Aud2lkdGhdKS5jbGFtcCh0cnVlKVxuICAgIH1cblxuICAgIHByaXZhdGUgaW5pdEJhc2VMaW5lKGNsYXNzbmFtZTogc3RyaW5nKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmxheWVycy5iZy5hcHBlbmQoXCJwYXRoXCIpXG4gICAgICAgICAgICAuY2xhc3NlZChjbGFzc25hbWUsIHRydWUpXG4gICAgICAgICAgICAuY2xhc3NlZCgnbGluZScsIHRydWUpXG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGNyZWF0ZVNjYWxlcygpIHtcbiAgICAgICAgY29uc3Qgb3AgPSB0aGlzLm9wdGlvbnNcbiAgICAgICAgdGhpcy5zY2FsZXMueCA9IGQzLnNjYWxlTGluZWFyKCkuZG9tYWluKG9wLnhyYW5nZSkucmFuZ2UoWzAsIG9wLndpZHRoXSkuY2xhbXAodHJ1ZSlcbiAgICAgICAgdGhpcy5zY2FsZXMueSA9IGQzLnNjYWxlTGluZWFyKCkuZG9tYWluKG9wLnlyYW5nZSkucmFuZ2UoWzAsIG9wLmhlaWdodF0pLmNsYW1wKHRydWUpXG4gICAgfVxuXG4gICAgaW5pdCgpIHtcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgICAgIGNvbnN0IG9wID0gdGhpcy5vcHRpb25zO1xuICAgICAgICBjb25zdCBzY2FsZXMgPSB0aGlzLnNjYWxlcztcbiAgICAgICAgY29uc3Qgc2VscyA9IHRoaXMuc2VscztcblxuICAgICAgICB0aGlzLmNyZWF0ZVNjYWxlcygpXG4gICAgICAgIHRoaXMuY3JlYXRlUGF0aCgpXG4gICAgICAgIHRoaXMuY3JlYXRlQXhlcygpXG4gICAgfVxuXG5cbiAgICBwcm90ZWN0ZWQgY3JlYXRlQXhlcygpIHtcbiAgICAgICAgY29uc3Qgc2VscyA9IHRoaXMuc2Vsc1xuICAgICAgICBjb25zdCBzY2FsZXMgPSB0aGlzLnNjYWxlc1xuICAgICAgICBjb25zdCBvcCA9IHRoaXMub3B0aW9uc1xuXG4gICAgICAgIC8vIENyZWF0ZSBheGVzXG4gICAgICAgIHNlbHMueGF4aXMgPSB0aGlzLmJhc2UuYXBwZW5kKFwiZ1wiKVxuICAgICAgICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcImF4aXMgYXhpcy0teFwiKVxuICAgICAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgU1ZHLnRyYW5zbGF0ZSgwLCBvcC5oZWlnaHQgLSBheGlzT2Zmc2V0KSlcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgIC5jYWxsKGQzLmF4aXNCb3R0b20oc2NhbGVzLngpLnRpY2tzKDQpLnRpY2tGb3JtYXQoXCJcIikpO1xuXG4gICAgICAgIHNlbHMueWF4aXMgPSB0aGlzLmJhc2UuYXBwZW5kKFwiZ1wiKVxuICAgICAgICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcImF4aXMgYXhpcy0teVwiKVxuICAgICAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgU1ZHLnRyYW5zbGF0ZSgwLCAtIGF4aXNPZmZzZXQpKVxuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgLmNhbGwoZDMuYXhpc0xlZnQoc2NhbGVzLnkpLnRpY2tzKDQpLnRpY2tGb3JtYXQoXCJcIikpO1xuXG4gICAgICAgIHRoaXMuYmFzZS5hcHBlbmQoXCJ0ZXh0XCIpXG4gICAgICAgICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBTVkcudHJhbnNsYXRlKG9wLndpZHRoIC8gMiwgb3AubWFyZ2luLnRvcCArIG9wLmhlaWdodCArIDEwKSlcbiAgICAgICAgICAgIC5zdHlsZShcInRleHQtYW5jaG9yXCIsIFwibWlkZGxlXCIpXG4gICAgICAgICAgICAudGV4dChcIlRpbWVcIilcblxuICAgICAgICB0aGlzLmJhc2UuYXBwZW5kKFwidGV4dFwiKVxuICAgICAgICAgICAgLnN0eWxlKFwidGV4dC1hbmNob3JcIiwgXCJtaWRkbGVcIilcbiAgICAgICAgICAgIC50ZXh0KFwiXFx1MDNCOCAtIFxcdTAzQjgqXCIpXG4gICAgICAgICAgICAuYXR0cihcInlcIiwgb3AucGFkLmxlZnQgLSBvcC5tYXJnaW4ubGVmdClcbiAgICAgICAgICAgIC5hdHRyKFwieFwiLCBvcC5wYWQudG9wIC0gKG9wLmhlaWdodCAvIDIpKVxuICAgICAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgU1ZHLnJvdGF0ZSgtOTApKVxuICAgIH1cblxuICAgIHByb3RlY3RlZCBjcmVhdGVQYXRoKCkge1xuICAgICAgICB0aGlzLnBhdGggPSBkMy5saW5lPG51bWJlcj4oKVxuICAgICAgICAgICAgLngoKGQ6IG51bWJlciwgaTogbnVtYmVyKSA9PiB0aGlzLnNjYWxlcy54KGkpKVxuICAgICAgICAgICAgLnkoKGQ6IG51bWJlciwgaTogbnVtYmVyKSA9PiB0aGlzLnNjYWxlcy55KGQpKVxuICAgICAgICAgICAgLmN1cnZlKGQzLmN1cnZlTGluZWFyKVxuICAgIH1cblxuICAgIGRhdGEoKTogVFxuICAgIGRhdGEodmFsOiBUKTogdGhpc1xuICAgIGRhdGEodmFsPykge1xuICAgICAgICBpZiAodmFsID09IG51bGwpIHJldHVybiB0aGlzLl9kYXRhXG4gICAgICAgIHRoaXMuX2RhdGEgPSB2YWw7XG4gICAgICAgIHJldHVybiB0aGlzXG4gICAgfVxuXG4gICAgcmVzZXRYcmFuZ2VfKCk6IHRoaXMge1xuICAgICAgICB0aGlzLm9wdGlvbnMueHJhbmdlID0gdGhpcy5kZWZhdWx0WHJhbmdlXG4gICAgICAgIHJldHVybiB0aGlzXG4gICAgfVxufSIsImltcG9ydCAqIGFzIGQzIGZyb20gJ2QzJ1xuaW1wb3J0IHsgRDNTZWwsIGxpbnNwYWNlIH0gZnJvbSAnLi4vdXRpbC94ZDMnXG5pbXBvcnQgKiBhcyBSIGZyb20gJ3JhbWRhJ1xuaW1wb3J0IHsgbGVnZW5kQ29sb3IgfSBmcm9tICdkMy1zdmctbGVnZW5kJ1xuaW1wb3J0IHsgVmVjdG9yMkQgfSBmcm9tICcuLi90eXBlcydcbmltcG9ydCB7IFNWR09wdGlvbnMsIFNWR1Zpc0NvbXBvbmVudCB9IGZyb20gJy4uL3V0aWwvU1ZHVmlzQ29tcG9uZW50J1xuaW1wb3J0IHsgU2ltcGxlRXZlbnRIYW5kbGVyIH0gZnJvbSAnLi4vdXRpbC9TaW1wbGVFdmVudEhhbmRsZXInO1xuaW1wb3J0IHsgU1ZHIH0gZnJvbSAnLi4vdXRpbC9TVkdwbHVzJ1xuaW1wb3J0IHsgZ2V0Q29udG91clZhbHVlcyB9IGZyb20gJy4uL3Bsb3R0aW5nJ1xuaW1wb3J0IHsgVXBkYXRlciwgQmxvY2tVcGRhdGVyIH0gZnJvbSAnLi4vQ29udG91clBsb3RVcGRhdGVyJ1xuaW1wb3J0IHsgaW50ZXJ2YWwsIGZyb21FdmVudCB9IGZyb20gJ3J4anMnXG5pbXBvcnQgeyBtYXAsIHRhcCwgdGFrZSwgc3RhcnRXaXRoLCBzY2FuLCBzd2l0Y2hNYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycydcblxudHlwZSBUID0gbnVtYmVyW11cblxuZXhwb3J0IGZ1bmN0aW9uIGphZ2dlZExvc3MoeDE6bnVtYmVyLCB4MjpudW1iZXIpOm51bWJlciB7XG4gICAgY29uc3QgZnJlcXMgPSBsaW5zcGFjZSgtMiwgMywgNykubWFwKHggPT4gTWF0aC5leHAoeCkpXG4gICAgY29uc3QgYWEgPSBmcmVxcy5tYXAoeCA9PiAxL3gpXG5cbiAgICBsZXQgeTEgPSB4MSwgeTIgPSB4MlxuICAgIGZyZXFzLmZvckVhY2goKGgsIG0pID0+IHtcbiAgICAgICAgeTEgPSBhYVttXSAqIE1hdGguc2luKGggKiB4MikgKyB5MVxuICAgICAgICB5MiA9IGFhW21dICogTWF0aC5jb3MoaCAqIHgxKSArIHkyXG4gICAgfSlcblxuICAgIGNvbnN0IHMxID0gZnJlcXMucmVkdWNlKChhY2MsIGgsIG0pID0+IChhYVttXSAqIE1hdGguc2luKGggKiB5MSkpICsgYWNjLCAwKVxuICAgIGNvbnN0IGMxID0gZnJlcXMucmVkdWNlKChhY2MsIGgsIG0pID0+IChhYVttXSAqIE1hdGguY29zKGggKiB5MSkpICsgYWNjLCAwKVxuICAgIGNvbnN0IHMyID0gZnJlcXMucmVkdWNlKChhY2MsIGgsIG0pID0+IChhYVttXSAqIE1hdGguc2luKGggKiB5MikpICsgYWNjLCAwKVxuICAgIGNvbnN0IGMyID0gZnJlcXMucmVkdWNlKChhY2MsIGgsIG0pID0+IChhYVttXSAqIE1hdGguY29zKGggKiB5MikpICsgYWNjLCAwKVxuXG4gICAgY29uc3QgejEgPSB5MSAqIHMyICsgYzEgKiB5MlxuICAgIGNvbnN0IHoyID0gczEgKiB5MiArIHkxICogYzJcbiAgICByZXR1cm4gKE1hdGgucG93KHoxLCAyKSArIE1hdGgucG93KHoyLCAyKSlcbn1cblxuaW50ZXJmYWNlIEdyYXBoT3B0aW9ucyBleHRlbmRzIFNWR09wdGlvbnMge1xuICAgIHhyYW5nZTogW251bWJlciwgbnVtYmVyXVxuICAgIHlyYW5nZTogW251bWJlciwgbnVtYmVyXVxuICAgIG46IG51bWJlciAgICAgICAgICAgICAgICAgICAvLyBOdW1iZXIgb2YgbWVzaGdyaWQgcG9pbnRzIGFsb25nIHRoZSB4IGF4aXNcbiAgICBtOiBudW1iZXIgICAgICAgICAgICAgICAgICAgLy8gTnVtYmVyIG9mIG1lc2hncmlkIHBvaW50cyBhbG9uZyB0aGUgeSBheGlzXG4gICAgcGFkOiBudW1iZXIgICAgICAgICAgICAgICAgIC8vIEFubm90YXRpb25zIHRoYXQgaGFwcGVuIGluIHRoZSBtYXJnaW4gbXVzdCB0YWtlIHBsYWNlIGBwYWRgIGRpc3RhbmNlIGZyb20gdGhlIG1haW4gZ3JhcGhcbn1cblxuaW50ZXJmYWNlIEdyYXBoU2NhbGVzIHtcbiAgICB4PzogZDMuU2NhbGVMaW5lYXI8bnVtYmVyLCBudW1iZXI+LFxuICAgIHk/OiBkMy5TY2FsZUxpbmVhcjxudW1iZXIsIG51bWJlcj4sXG4gICAgLy8gY29sb3I/OiBkMy5TY2FsZUxpbmVhcjxudW1iZXIsIHN0cmluZz4sXG4gICAgY29sb3I/OiBkMy5TY2FsZUxpbmVhcjxudW1iZXIsIHN0cmluZz4sXG4gICAgY3VydmU/OiBkMy5DdXJ2ZUNhdG11bGxSb21GYWN0b3J5LFxuICAgIGNvbnRvdXJzPzogZDMuQ29udG91cnMsXG4gICAgdGhyZXNob2xkcz86IG51bWJlcltdXG59XG5cbmludGVyZmFjZSBHcmFwaFNlbHMge1xuICAgIHhheGlzPzogRDNTZWxcbiAgICB5YXhpcz86IEQzU2VsXG4gICAgbGVnZW5kPzogRDNTZWxcbiAgICB0aXA/OiBEM1NlbFxuICAgIHhsYWJlbD86IEQzU2VsXG4gICAgeWxhYmVsPzogRDNTZWxcbiAgICBjaXJjbGU/OiBEM1NlbFxuICAgIGFycm93cz86IEQzU2VsW11cbn1cblxuY29uc3QgRVZFTlRTID0ge1xuICBzdGVwQWRkZWQ6IFwiU2ltcGxlTmV0X1N0ZXBBZGRlZFwiXG59XG5cbmV4cG9ydCBjbGFzcyBMb3NzU3VyZmFjZTJEIGV4dGVuZHMgU1ZHVmlzQ29tcG9uZW50PFQ+IHtcbiAgICBjc3NuYW1lID0gXCJzaW1wbGUtZ3JhcGhcIlxuXG4gICAgX2RhdGE6IFRcblxuICAgIG9wdGlvbnM6IEdyYXBoT3B0aW9ucyA9IHtcbiAgICAgICAgbWF4V2lkdGg6IDQ1MCxcbiAgICAgICAgbWF4SGVpZ2h0OiA1MDAsXG4gICAgICAgIG1hcmdpbjogeyB0b3A6IDUwLCByaWdodDogNzUsIGJvdHRvbTogMTI1LCBsZWZ0OiA1MCB9LFxuICAgICAgICBwYWQ6IDMwLFxuICAgICAgICB4cmFuZ2U6IFswLCA4XSxcbiAgICAgICAgeXJhbmdlOiBbMCwgOF0sXG4gICAgICAgIG46IDEwMCxcbiAgICAgICAgbTogMTAwLFxuICAgIH0gLy8gI3N0YXRlXG5cbiAgICBzY2FsZXM6IEdyYXBoU2NhbGVzID0ge31cbiAgICBzZWxzOiBHcmFwaFNlbHMgPSB7fVxuXG4gICAgc3RhdGljIGV2ZW50cyA9IEVWRU5UU1xuXG4gICAgY29uc3RydWN0b3IoZDNwYXJlbnQ6IEQzU2VsLCBldmVudEhhbmRsZXI/OiBTaW1wbGVFdmVudEhhbmRsZXIsIG9wdGlvbnMgPSB7fSkge1xuICAgICAgICBzdXBlcihkM3BhcmVudCwgZXZlbnRIYW5kbGVyLCBvcHRpb25zKVxuICAgICAgICBzdXBlci5pbml0U1ZHKHRoaXMub3B0aW9ucylcbiAgICAgICAgdGhpcy5iYXNlLmNsYXNzZWQodGhpcy5jc3NuYW1lLCB0cnVlKVxuICAgICAgICB0aGlzLmluaXRQbG90KClcbiAgICB9XG5cbiAgICBwbG90Q29udG91cnMoKSB7XG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuICAgICAgICBjb25zdCBvcCA9IHRoaXMub3B0aW9ucztcbiAgICAgICAgY29uc3Qgc2NhbGVzID0gdGhpcy5zY2FsZXM7XG5cbiAgICAgICAgY29uc3QgY29udG91ckZ1bmMgPSBqYWdnZWRMb3NzXG4gICAgICAgIGNvbnN0IHZhbHMgPSBnZXRDb250b3VyVmFsdWVzKG9wLm4sIG9wLm0sIG9wLnhyYW5nZSwgb3AueXJhbmdlLCBjb250b3VyRnVuYylcbiAgICAgICAgbGV0IHRocmVzaG9sZHMgPSBsaW5zcGFjZShkMy5taW4odmFscyksIGQzLm1heCh2YWxzKSwgMjUpO1xuXG4gICAgICAgIHNjYWxlcy5jb2xvciA9IGQzLnNjYWxlTGluZWFyKCkuZG9tYWluKGQzLmV4dGVudCh2YWxzKSkucmFuZ2UoWzAsIDFdKS5pbnRlcnBvbGF0ZSgoKSA9PiBkMy5pbnRlcnBvbGF0ZUJsdWVzKTtcblxuICAgICAgICBzY2FsZXMuY29udG91cnMudGhyZXNob2xkcyh0aHJlc2hvbGRzKVxuXG4gICAgICAgIGNvbnN0IGNvbnRvdXJWYWxzID0gc2NhbGVzLmNvbnRvdXJzKHZhbHMpXG4gICAgICAgIGNvbnN0IGNvbnRvdXJHcm91cCA9IHRoaXMuYmFzZS5hcHBlbmQoJ2cnKS5hdHRyKCdpZCcsICdjb250b3VyLWdyb3VwJylcbiAgICAgICAgY29uc3QgY29udG91cnMgPSBjb250b3VyR3JvdXAuc2VsZWN0QWxsKFwicGF0aC5jb250b3VyXCIpXG4gICAgICAgICAgICAuZGF0YShjb250b3VyVmFscylcblxuXG4gICAgICAgIGNvbnRvdXJzLmpvaW4oXCJwYXRoXCIpXG4gICAgICAgICAgICAuYXR0cihcImNsYXNzXCIsIFwiY29udG91clwiKVxuICAgICAgICAgICAgLmF0dHIoXCJkXCIsIGQzLmdlb1BhdGgoZDMuZ2VvSWRlbnRpdHkoKS5zY2FsZShvcC53aWR0aCAvIG9wLm4pKSlcbiAgICAgICAgICAgIC5hdHRyKFwiZmlsbFwiLCBkID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gc2NhbGVzLmNvbG9yKGQudmFsdWUpXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNsYXNzZWQoJ25vdC1maXQnLCBkID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICAgICAgfSlcblxuICAgIH1cblxuXG4gICAgaW50b1Zpcyh2OiBWZWN0b3IyRCkge1xuICAgICAgICByZXR1cm4geyB4OiB0aGlzLnNjYWxlcy54KHYueCksIHk6IHRoaXMuc2NhbGVzLnkodi55KSB9XG4gICAgfVxuXG4gICAgaW50b01hdGgodjogVmVjdG9yMkQpIHtcbiAgICAgICAgcmV0dXJuIHsgeDogdGhpcy5zY2FsZXMueC5pbnZlcnQodi54KSwgeTogdGhpcy5zY2FsZXMueS5pbnZlcnQodi55KSB9XG4gICAgfVxuXG4gICAgaW5pdFBsb3QoKSB7XG4gICAgICAgIC8vIEluaXRpYWxpemUgcGxvdHNcbiAgICAgICAgdGhpcy5wbG90Q29udG91cnMoKVxuICAgIH1cblxuICAgIGluaXQoKSB7XG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuICAgICAgICBjb25zdCBvcCA9IHRoaXMub3B0aW9ucztcbiAgICAgICAgY29uc3Qgc2NhbGVzID0gdGhpcy5zY2FsZXM7XG4gICAgICAgIGNvbnN0IHNlbHMgPSB0aGlzLnNlbHM7XG5cbiAgICAgICAgLy8gQWRkIGRlZmluaXRpb25zXG4gICAgICAgIFNWRy5hZGRBcnJvd3ModGhpcy5zdmcpXG5cbiAgICAgICAgLy8gQ3JlYXRlIHNjYWxlc1xuICAgICAgICBzY2FsZXMuY29udG91cnMgPSBkMy5jb250b3VycygpLnNpemUoW29wLm4sIG9wLm1dKVxuICAgICAgICBzY2FsZXMuY3VydmUgPSBkMy5jdXJ2ZUNhdG11bGxSb20uYWxwaGEoMC41KVxuICAgICAgICBzY2FsZXMueCA9IGQzLnNjYWxlTGluZWFyKCkuZG9tYWluKG9wLnhyYW5nZSkucmFuZ2UoWzAsIG9wLndpZHRoXSlcbiAgICAgICAgc2NhbGVzLnkgPSBkMy5zY2FsZUxpbmVhcigpLmRvbWFpbihvcC55cmFuZ2UpLnJhbmdlKFtvcC5oZWlnaHQsIDBdKVxuXG4gICAgICAgIC8vIEFkZCBBeGVzIGFuZCBsYWJlbHNcbiAgICAgICAgc2Vscy54YXhpcyA9IHRoaXMuYmFzZS5hcHBlbmQoXCJnXCIpXG4gICAgICAgICAgICAuYXR0cihcImNsYXNzXCIsIFwiYXhpcyBheGlzLS14XCIpXG4gICAgICAgICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBTVkcudHJhbnNsYXRlKDAsIG9wLmhlaWdodCkpXG4gICAgICAgICAgICAuY2FsbChkMy5heGlzQm90dG9tKHNjYWxlcy54KS50aWNrcygzLCBcInNcIikpO1xuXG4gICAgICAgIHNlbHMueWF4aXMgPSB0aGlzLmJhc2UuYXBwZW5kKFwiZ1wiKVxuICAgICAgICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcImF4aXMgYXhpcy0teVwiKVxuICAgICAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgU1ZHLnRyYW5zbGF0ZSgwLCAwKSlcbiAgICAgICAgICAgIC5jYWxsKGQzLmF4aXNMZWZ0KHNjYWxlcy55KS50aWNrcygzLCBcInNcIikpO1xuXG4gICAgICAgIC8vIHNlbHMueGxhYmVsID0gdGhpcy5iYXNlLmFwcGVuZChcInRleHRcIilcbiAgICAgICAgLy8gICAgIC50ZXh0KFwidzBcIilcbiAgICAgICAgLy8gICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJ0aXRsZXNcIilcbiAgICAgICAgLy8gICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIFNWRy50cmFuc2xhdGUob3Aud2lkdGggLyAyLCBvcC5oZWlnaHQgKyBvcC5wYWQpKVxuXG4gICAgICAgIC8vIHNlbHMueWxhYmVsID0gdGhpcy5iYXNlLmFwcGVuZChcInRleHRcIilcbiAgICAgICAgLy8gICAgIC50ZXh0KFwidzFcIilcbiAgICAgICAgLy8gICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJ0aXRsZXNcIilcbiAgICAgICAgLy8gICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIFNWRy50cmFuc2xhdGUoLW9wLnBhZCwgb3AuaGVpZ2h0IC8gMikgKyBTVkcucm90YXRlKC05MCkpXG4gICAgfVxuXG4gICAgZGF0YSgpOiBudW1iZXJbXVxuICAgIGRhdGEodmFsOiBudW1iZXJbXSk6IHRoaXNcbiAgICBkYXRhKHZhbD8pIHtcbiAgICAgICAgaWYgKHZhbCA9PSBudWxsKSByZXR1cm4gdGhpcy5fZGF0YVxuICAgICAgICB0aGlzLl9kYXRhID0gdmFsXG4gICAgICAgIHJldHVybiB0aGlzXG4gICAgfVxufSIsImltcG9ydCAqIGFzIGQzIGZyb20gJ2QzJ1xuaW1wb3J0IHsgYmFzZUxvc3MgfSBmcm9tICcuLi9Hb2xmTGFuZHNjYXBlcydcblxuZXhwb3J0IGNsYXNzIE1hbnVhbFVwZGF0ZXIge1xuICAgIGY6ICh4OiBudW1iZXIpID0+IG51bWJlclxuICAgIGRmOiAoeDogbnVtYmVyKSA9PiBudW1iZXJcblxuICAgIC8vIHEgPSAxL3EgaW4gdGhlIEludGVyZmFjZSAoZHVlIHRvIG5pY2UgcHJvcGVydGllcyBvZiB0aGlzIGRlZmluaXRpb24pIGlzIGEgZGlmZmVyZW50IHZhbHVlIHRoYW4gdGhpc1xuICAgIHE6IG51bWJlciAgIC8vIDAgLT4gMSwgd2hlcmUgMCBpcyBTR0QgYW5kIDEgaXMgTkdELiAwLjUgaXMgc3FydCBOR0QuIFtzdGVwID0gLSBldGEgKiBIIF4gKC0xL3EpICogZ10gKEggPSAwIHdoZW4gcT0wKVxuICAgIGV0YTogbnVtYmVyIC8vIGFrYSAnbGVhcm5pbmcgcmF0ZSdcblxuICAgIGNvbnN0cnVjdG9yKGYsIGRmLCBxID0gMCwgZXRhID0gMC4xKSB7XG4gICAgICAgIHRoaXMuZiA9IGY7XG4gICAgICAgIHRoaXMuZGYgPSBkZjtcbiAgICAgICAgdGhpcy5xID0gcTtcbiAgICAgICAgdGhpcy5ldGEgPSBldGE7XG4gICAgfVxuXG4gICAgLy8gQ2FsY3VsYXRlIGVycm9yIHNxdWFyZWQgb2YgdGhlIGJhc2UgZnVuY3Rpb25cbiAgICBsb3NzKHg6IG51bWJlcik6IG51bWJlciB7XG4gICAgICAgIHJldHVybiBiYXNlTG9zcyh0aGlzLmYoeCkpXG4gICAgfVxuXG4gICAgLy8gR3JhZGllbnQgYXQgeFxuICAgIGdyYWRpZW50KHg6IG51bWJlcik6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLmYoeCkgKiB0aGlzLmRmKHgpXG4gICAgfVxuXG4gICAgLy8gVGhlIHBvc2l0aXZlIHNlbWktZGVmaW5pdGUgaGVzc2lhbiBhdCB4XG4gICAgcHNkaGVzcyh4OiBudW1iZXIpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gTWF0aC5wb3codGhpcy5kZih4KSwgMilcbiAgICB9XG5cbiAgICB1cGRhdGVNb2RpZmllcih4OiBudW1iZXIpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gTWF0aC5wb3codGhpcy5kZih4KSwgMSAtICgyICogdGhpcy5xKSlcbiAgICB9XG5cbiAgICB1cGRhdGVBbXQoeDogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZih4KSAqIHRoaXMudXBkYXRlTW9kaWZpZXIoeClcbiAgICB9XG5cbiAgICAvLyBUaGUgYW1vdW50IHRvIHVwZGF0ZSBhdCB4IGdpdmVuIHRoZSBsZWFybmluZyByYXRlIGV0YVxuICAgIHN0ZXAoeDogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgICAgLy8gQ291bGQgdXNlIHBzZGhlc3MgaW4gdGhlIGVxdWF0aW9uIGJlbG93LCBidXQgZHVlIHRvIG51bWVyaWNhbCBpc3N1ZXMgdGhpcyBmb3JtdWxhdGlvbiBjb21wdXRlcyBtb3JlIHJlbGlhYmx5XG4gICAgICAgIHJldHVybiAtIHRoaXMuZXRhICogdGhpcy51cGRhdGVBbXQoeClcbiAgICB9XG5cbiAgICAvLyBHZXQgdGhlIG5leHQgeCB2YWx1ZSBhZnRlciB0YWtpbmcgYSBzdGVwXG4gICAgbmV4dCh4OiBudW1iZXIpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4geCArIHRoaXMuc3RlcCh4KVxuICAgIH1cbn1cblxuXG5leHBvcnQgY2xhc3MgTWFudWFsVXBkYXRlcjJEIHtcbiAgICBmOiAoeDogbnVtYmVyKSA9PiBudW1iZXJcbiAgICBkZjogKHg6IG51bWJlcikgPT4gbnVtYmVyXG5cbiAgICAvLyBxID0gMS9xIGluIHRoZSBJbnRlcmZhY2UgKGR1ZSB0byBuaWNlIHByb3BlcnRpZXMgb2YgdGhpcyBkZWZpbml0aW9uKSBpcyBhIGRpZmZlcmVudCB2YWx1ZSB0aGFuIHRoaXNcbiAgICBxOiBudW1iZXIgICAvLyAwIC0+IDEsIHdoZXJlIDAgaXMgU0dEIGFuZCAxIGlzIE5HRC4gMC41IGlzIHNxcnQgTkdELiBbc3RlcCA9IC0gZXRhICogSCBeICgtMS9xKSAqIGddIChIID0gMCB3aGVuIHE9MClcbiAgICBldGE6IG51bWJlciAvLyBha2EgJ2xlYXJuaW5nIHJhdGUnXG5cbiAgICBjb25zdHJ1Y3RvcihmLCBkZiwgcSA9IDAsIGV0YSA9IDAuMSkge1xuICAgICAgICB0aGlzLmYgPSBmO1xuICAgICAgICB0aGlzLmRmID0gZGY7XG4gICAgICAgIHRoaXMucSA9IHE7XG4gICAgICAgIHRoaXMuZXRhID0gZXRhO1xuICAgIH1cblxuICAgIC8vIENhbGN1bGF0ZSBlcnJvciBzcXVhcmVkIG9mIHRoZSBiYXNlIGZ1bmN0aW9uXG4gICAgbG9zcyh4OiBudW1iZXIpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gYmFzZUxvc3ModGhpcy5mKHgpKVxuICAgIH1cblxuICAgIC8vIEdyYWRpZW50IGF0IHhcbiAgICBncmFkaWVudCh4OiBudW1iZXIpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5mKHgpICogdGhpcy5kZih4KVxuICAgIH1cblxuICAgIC8vIFRoZSBwb3NpdGl2ZSBzZW1pLWRlZmluaXRlIGhlc3NpYW4gYXQgeFxuICAgIHBzZGhlc3MoeDogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIE1hdGgucG93KHRoaXMuZGYoeCksIDIpXG4gICAgfVxuXG4gICAgdXBkYXRlTW9kaWZpZXIoeDogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIE1hdGgucG93KHRoaXMuZGYoeCksIDEgLSAoMiAqIHRoaXMucSkpXG4gICAgfVxuXG4gICAgdXBkYXRlQW10KHg6IG51bWJlcik6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLmYoeCkgKiB0aGlzLnVwZGF0ZU1vZGlmaWVyKHgpXG4gICAgfVxuXG4gICAgLy8gVGhlIGFtb3VudCB0byB1cGRhdGUgYXQgeCBnaXZlbiB0aGUgbGVhcm5pbmcgcmF0ZSBldGFcbiAgICBzdGVwKHg6IG51bWJlcik6IG51bWJlciB7XG4gICAgICAgIC8vIENvdWxkIHVzZSBwc2RoZXNzIGluIHRoZSBlcXVhdGlvbiBiZWxvdywgYnV0IGR1ZSB0byBudW1lcmljYWwgaXNzdWVzIHRoaXMgZm9ybXVsYXRpb24gY29tcHV0ZXMgbW9yZSByZWxpYWJseVxuICAgICAgICByZXR1cm4gLSB0aGlzLmV0YSAqIHRoaXMudXBkYXRlQW10KHgpXG4gICAgfVxuXG4gICAgLy8gR2V0IHRoZSBuZXh0IHggdmFsdWUgYWZ0ZXIgdGFraW5nIGEgc3RlcFxuICAgIG5leHQoeDogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHggKyB0aGlzLnN0ZXAoeClcbiAgICB9XG59IiwiaW1wb3J0ICogYXMgZDMgZnJvbSAnZDMnXG5pbXBvcnQgeyBEM1NlbCwgbGluc3BhY2UgfSBmcm9tICcuLi91dGlsL3hkMydcbmltcG9ydCB7IFZlY3RvcjJEIH0gZnJvbSAnLi4vdHlwZXMnXG5pbXBvcnQgeyBTVkdPcHRpb25zLCBTVkdWaXNDb21wb25lbnQsIE1hcmdpbkluZm8gfSBmcm9tICcuLi91dGlsL1NWR1Zpc0NvbXBvbmVudCdcbmltcG9ydCB7IFNpbXBsZUV2ZW50SGFuZGxlciB9IGZyb20gJy4uL3V0aWwvU2ltcGxlRXZlbnRIYW5kbGVyJztcbmltcG9ydCB7IFNWRyB9IGZyb20gXCIuLi91dGlsL1NWR3BsdXNcIlxuaW1wb3J0IHsgTWFudWFsVXBkYXRlciB9IGZyb20gXCIuL01hbnVhbFVwZGF0ZXJcIlxuXG5pbnRlcmZhY2UgR3JhcGhPcHRpb25zIHtcbiAgICBtYXJnaW46IE1hcmdpbkluZm9cbiAgICBtYXhXaWR0aDogbnVtYmVyXG4gICAgbWF4SGVpZ2h0OiBudW1iZXJcbiAgICB3aWR0aD86IG51bWJlclxuICAgIGhlaWdodD86IG51bWJlclxuICAgIHhSYW5nZTogW251bWJlciwgbnVtYmVyXVxuICAgIHlSYW5nZTogW251bWJlciwgbnVtYmVyXVxufVxuXG5pbnRlcmZhY2UgU2NhbGVYWSB7XG4gICAgeDogZDMuU2NhbGVMaW5lYXI8bnVtYmVyLCBudW1iZXI+XG4gICAgeTogZDMuU2NhbGVMaW5lYXI8bnVtYmVyLCBudW1iZXI+XG59XG5cbmludGVyZmFjZSBHcmFwaFNjYWxlcyB7XG4gICAgdG9QeDogU2NhbGVYWSxcbiAgICB0b01hdGg6IFNjYWxlWFksXG59XG5cbmludGVyZmFjZSBHcmFwaFNlbHMge1xuICAgIHBhdGhzOiBEM1NlbFtdXG4gICAgY3Vyc29yRG90czogRDNTZWxbXVxuICAgIGN1cnNvckxpbmU6IEQzU2VsXG59XG5cbnR5cGUgREFUQSA9IG51bWJlcltdIC8vIExpc3Qgb2YgYWxwaGFzIGluIHk9YWxwaGEgKiB4XjJcblxuZXhwb3J0IGNsYXNzIFF1YWRyYXRpY1Bsb3RzIGV4dGVuZHMgU1ZHVmlzQ29tcG9uZW50PERBVEE+IHtcbiAgICBjc3NuYW1lID0gXCJxdWFkcmF0aWMtcGxvdHNcIlxuICAgIG1hc2tJZDogc3RyaW5nXG5cbiAgICBfZGF0YTogREFUQVxuXG4gICAgb3B0aW9uczogR3JhcGhPcHRpb25zID0ge1xuICAgICAgICAvLyBvcHRpb25zICA9IHsgXG4gICAgICAgIG1hcmdpbjogeyB0b3A6IDAsIHJpZ2h0OiAwLCBib3R0b206IDQwLCBsZWZ0OiAwIH0sXG4gICAgICAgIG1heFdpZHRoOiA0MDAsXG4gICAgICAgIG1heEhlaWdodDogMjUwLFxuICAgICAgICB4UmFuZ2U6IFstMywgM10sXG4gICAgICAgIHlSYW5nZTogWy0wLjA1LCA4LjgyXSxcbiAgICB9XG5cbiAgICBzZWxzOiBQYXJ0aWFsPEdyYXBoU2Vscz4gPSB7fVxuICAgIHRpbWVyOiBkMy5UaW1lclxuXG4gICAgY29uc3RydWN0b3IoZDNwYXJlbnQ6IEQzU2VsLCBldmVudEhhbmRsZXI/OiBTaW1wbGVFdmVudEhhbmRsZXIsIG9wdGlvbnMgPSB7fSwgSUQgPSAwKSB7XG4gICAgICAgIHN1cGVyKGQzcGFyZW50LCBldmVudEhhbmRsZXIsIG9wdGlvbnMsIElEKVxuICAgICAgICB0aGlzLm1hc2tJZCA9IGBsaW5lLW1hc2stJHt0aGlzLklEfWBcbiAgICAgICAgc3VwZXIuaW5pdFNWRyhvcHRpb25zKSAvLyBDYWxscyBpbml0IGluIHRoaXMgY2xhc3NcbiAgICAgICAgdGhpcy5iYXNlLmNsYXNzZWQodGhpcy5jc3NuYW1lLCB0cnVlKVxuICAgIH1cblxuICAgIGdldCB0b1B4U2NhbGVzKCk6IFNjYWxlWFkge1xuICAgICAgICBjb25zdCBvcCA9IHRoaXMub3B0aW9uc1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgeDogZDMuc2NhbGVMaW5lYXIoKVxuICAgICAgICAgICAgICAgIC5kb21haW4ob3AueFJhbmdlKVxuICAgICAgICAgICAgICAgIC5yYW5nZShbMCwgb3Aud2lkdGhdKSxcbiAgICAgICAgICAgIHk6IGQzLnNjYWxlTGluZWFyKClcbiAgICAgICAgICAgICAgICAuZG9tYWluKG9wLnlSYW5nZSlcbiAgICAgICAgICAgICAgICAucmFuZ2UoW29wLmhlaWdodCwgMF0pLFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgaW50b1B4KHY6IFZlY3RvcjJEKSB7XG4gICAgICAgIHJldHVybiB7IHg6IHRoaXMudG9QeFNjYWxlcy54KHYueCksIHk6IHRoaXMudG9QeFNjYWxlcy55KHYueSkgfVxuICAgIH1cblxuICAgIC8vIFRha2UgYSB2ZWN0b3IgaW4gdGhlIGNvb3JkaW5hdGUgc3lzdGVtIGFuZCByZXR1cm4gaXQgdG8gdGhlIG1hdGggY29vcmRpbmF0ZXNcbiAgICBpbnRvTWF0aCh2OiBWZWN0b3IyRCkge1xuICAgICAgICByZXR1cm4geyB4OiB0aGlzLnRvUHhTY2FsZXMueC5pbnZlcnQodi54KSwgeTogdGhpcy50b1B4U2NhbGVzLnkuaW52ZXJ0KHYueSkgfVxuICAgIH1cblxuICAgIC8vIFR1cm4gYSBudW1iZXIgaW50byBhIHZlY3RvclxuICAgIG51bTJ2ZWMoeDogbnVtYmVyKTogVmVjdG9yMkQge1xuICAgICAgICBjb25zdCBvcCA9IHRoaXMub3B0aW9uc1xuICAgICAgICAvLyByZXR1cm4geyB4OiB4LCB5OiBvcC5sYW5kc2NhcGUubG9zcyh4KSB9XG4gICAgICAgIHJldHVybiB7IHg6IHgsIHk6IHggKiogMiB9XG4gICAgfVxuXG4gICAgbGluZU1ha2VyKGY6ICh4OiBudW1iZXIpID0+IG51bWJlcikge1xuICAgICAgICByZXR1cm4gZDMubGluZTxudW1iZXI+KClcbiAgICAgICAgICAgIC54KChkOiBudW1iZXIsIGk6IG51bWJlcikgPT4gdGhpcy50b1B4U2NhbGVzLngoZCkpXG4gICAgICAgICAgICAueSgoZDogbnVtYmVyLCBpOiBudW1iZXIpID0+IHRoaXMudG9QeFNjYWxlcy55KGYoZCkpKVxuICAgIH1cblxuICAgIGluaXQoKSB7XG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuICAgICAgICBjb25zdCBvcCA9IHRoaXMub3B0aW9ucztcbiAgICAgICAgY29uc3Qgc2VscyA9IHRoaXMuc2VscztcblxuICAgICAgICB0aGlzLmJhc2VcbiAgICAgICAgICAgIC5hdHRyKCd3aWR0aCcsIG9wLm1heFdpZHRoKVxuICAgICAgICAgICAgLmF0dHIoJ2hlaWdodCcsIG9wLm1heEhlaWdodClcblxuICAgICAgICBPYmplY3Qua2V5cyh0aGlzLmxheWVycykuZm9yRWFjaChrID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiUnVubmluZyBvbiBsYXllcjogXCIsIGspO1xuICAgICAgICAgICAgY29uc3QgZyA9IHRoaXMubGF5ZXJzW2tdXG4gICAgICAgICAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgYCR7U1ZHLnRyYW5zbGF0ZShvcC5tYXJnaW4ubGVmdCwgb3AubWFyZ2luLnRvcCl9YClcbiAgICAgICAgfSlcblxuICAgICAgICB0aGlzLmxheWVycy5iZy5hcHBlbmQoJ3JlY3QnKVxuICAgICAgICAgICAgLmNsYXNzZWQoXCJiZy1yZWN0XCIsIHRydWUpXG4gICAgICAgICAgICAuYXR0cignd2lkdGgnLCBvcC53aWR0aClcbiAgICAgICAgICAgIC5hdHRyKCdoZWlnaHQnLCBvcC5oZWlnaHQpXG5cbiAgICAgICAgLy8gY29uc3QgZiA9ICh4OiBudW1iZXIpID0+IDAuNSAqICh4ICoqIDIpXG5cbiAgICAgICAgY29uc3QgZmFjID0gMS40O1xuICAgICAgICBjb25zdCBhYSA9IFsxIC8gZmFjLCAxLCBmYWNdO1xuICAgICAgICAvLyBjb25zdCBhYSA9IFtmYWNdO1xuICAgICAgICBjb25zdCB1cGRhdGVycyA9IGFhLm1hcChhID0+IHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgTWFudWFsVXBkYXRlcihcbiAgICAgICAgICAgICAgICAoeDogbnVtYmVyKSA9PiBhICogeCxcbiAgICAgICAgICAgICAgICAoeDogbnVtYmVyKSA9PiBhLFxuICAgICAgICAgICAgICAgIDEsXG4gICAgICAgICAgICAgICAgMC4wMSxcbiAgICAgICAgICAgIClcbiAgICAgICAgfSlcblxuICAgICAgICBzZWxzLnBhdGhzID0gdXBkYXRlcnMubWFwKHUgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMubGF5ZXJzLm1haW4uYXBwZW5kKFwicGF0aFwiKVxuICAgICAgICAgICAgICAgIC5kYXR1bShsaW5zcGFjZShvcC54UmFuZ2VbMF0sIG9wLnhSYW5nZVsxXSwgMTAwKSlcbiAgICAgICAgICAgICAgICAuY2xhc3NlZChcImxpbmUtcGF0aFwiLCB0cnVlKVxuICAgICAgICAgICAgICAgIC5hdHRyKCdkJywgZCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmxpbmVNYWtlcih4ID0+IHUubG9zcyh4KSkoZClcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICB9KVxuXG4gICAgICAgIC8vIEN1cnNvciBMaW5lIExvZ2ljXG4gICAgICAgIHNlbHMuY3Vyc29yTGluZSA9IHRoaXMuYmFzZS5hcHBlbmQoJ3BhdGgnKVxuICAgICAgICAgICAgLmNsYXNzZWQoJ2N1cnNvci1saW5lJywgdHJ1ZSlcbiAgICAgICAgICAgIC5jbGFzc2VkKCdoaWRkZW4nLCB0cnVlKVxuXG4gICAgICAgIHNlbHMuY3Vyc29yRG90cyA9IHVwZGF0ZXJzLm1hcCh1ID0+IHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmJhc2UuYXBwZW5kKCdjaXJjbGUnKVxuICAgICAgICAgICAgICAgIC5jbGFzc2VkKFwiY3Vyc29yLWRvdFwiLCB0cnVlKVxuICAgICAgICAgICAgICAgIC5hdHRyKFwiclwiLCBcIjNweFwiKVxuICAgICAgICB9KVxuXG4gICAgICAgIHRoaXMuYmFzZS5vbignbW91c2Vtb3ZlJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgY29uc3QgbW91c2UgPSBkMy5tb3VzZSh0aGlzKVxuICAgICAgICAgICAgc2Vscy5jdXJzb3JMaW5lLmF0dHIoJ2QnLCBkMy5saW5lKCkoW1ttb3VzZVswXSwgMF0sIFttb3VzZVswXSwgb3AuaGVpZ2h0XV0pKVxuXG4gICAgICAgICAgICAvLyBzZWxzLmN1cnNvckRvdHMuZm9yRWFjaCgoYywgaSkgPT4ge1xuICAgICAgICAgICAgLy8gICAgIGMuYXR0cignY3gnLCBtb3VzZVswXSlcbiAgICAgICAgICAgIC8vICAgICAgICAgLmF0dHIoJ2N5JywgKCkgPT4gc2VsZi50b1B4U2NhbGVzLnkodXBkYXRlcnNbaV0ubG9zcyhzZWxmLnRvUHhTY2FsZXMueC5pbnZlcnQobW91c2VbMF0pKSkpXG4gICAgICAgICAgICAvLyB9KVxuICAgICAgICB9KVxuXG4gICAgICAgIHRoaXMuYmFzZS5vbignbW91c2VvdXQnLCAoKSA9PiB7XG4gICAgICAgICAgICBzZWxzLmN1cnNvckxpbmUuY2xhc3NlZChcImhpZGRlblwiLCB0cnVlKVxuICAgICAgICAgICAgaWYgKHNlbGYudGltZXIgPT0gbnVsbCkgc2Vscy5jdXJzb3JEb3RzLmZvckVhY2goYyA9PiBjLmNsYXNzZWQoXCJoaWRkZW5cIiwgdHJ1ZSkpXG4gICAgICAgIH0pXG5cbiAgICAgICAgdGhpcy5iYXNlLm9uKCdtb3VzZW92ZXInLCAoKSA9PiB7XG4gICAgICAgICAgICBzZWxzLmN1cnNvckxpbmUuY2xhc3NlZChcImhpZGRlblwiLCBmYWxzZSlcbiAgICAgICAgICAgIGlmIChzZWxmLnRpbWVyID09IG51bGwpIHNlbHMuY3Vyc29yRG90cy5mb3JFYWNoKGMgPT4gYy5jbGFzc2VkKFwiaGlkZGVuXCIsIGZhbHNlKSlcbiAgICAgICAgfSlcblxuICAgICAgICB0aGlzLmJhc2Uub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgY29uc3QgbW91c2UgPSBkMy5tb3VzZSh0aGlzKVxuICAgICAgICAgICAgY29uc3QgdmFsID0gc2VsZi50b1B4U2NhbGVzLnguaW52ZXJ0KG1vdXNlWzBdKVxuICAgICAgICAgICAgc2Vscy5jdXJzb3JEb3RzLmZvckVhY2goKGMsIGkpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB1ID0gdXBkYXRlcnNbaV1cbiAgICAgICAgICAgICAgICBjb25zdCB4Q2xpY2sgPSBzZWxmLnRvUHhTY2FsZXMueC5pbnZlcnQobW91c2VbMF0pXG4gICAgICAgICAgICAgICAgYy5hdHRyKCdjeCcsIG1vdXNlWzBdKVxuICAgICAgICAgICAgICAgIGMuYXR0cignY3knLCBzZWxmLnRvUHhTY2FsZXMueSh1Lmxvc3MoeENsaWNrKSkpXG4gICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICBpZiAoc2VsZi50aW1lciA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgc2VsZi50aW1lciA9IGQzLmludGVydmFsKCh0aW1lKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHNlbHMuY3Vyc29yRG90cy5mb3JFYWNoKChjLCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB1ID0gdXBkYXRlcnNbaV1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHhOb3cgPSBzZWxmLnRvUHhTY2FsZXMueC5pbnZlcnQoK2MuYXR0cignY3gnKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHhOZXh0ID0gdS5uZXh0KHhOb3cpXG4gICAgICAgICAgICAgICAgICAgICAgICBjLmF0dHIoJ2N4Jywgc2VsZi50b1B4U2NhbGVzLngoeE5leHQpKVxuICAgICAgICAgICAgICAgICAgICAgICAgYy5hdHRyKCdjeScsIHNlbGYudG9QeFNjYWxlcy55KHUubG9zcyh4TmV4dCkpKVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH0sIDEwKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgc2VsZi50aW1lci5zdG9wKClcbiAgICAgICAgICAgICAgICBzZWxmLnRpbWVyID0gbnVsbFxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIF9yZW5kZXIoZGF0YTogREFUQSkge1xuICAgICAgICAvLyB0aGlzLnBsb3RGdW5jc1xuICAgIH1cblxuICAgIGRhdGEoKTogREFUQVxuICAgIGRhdGEodmFsOiBEQVRBKTogdGhpc1xuICAgIGRhdGEodmFsPykge1xuICAgICAgICBpZiAodmFsID09IG51bGwpIHJldHVybiB0aGlzLl9kYXRhXG4gICAgICAgIHJldHVybiB0aGlzXG4gICAgfVxufSIsImltcG9ydCB7IEhUTUxWaXNDb21wb25lbnQgfSBmcm9tICcuLi91dGlsL0hUTUxWaXNDb21wb25lbnQnXG5pbXBvcnQgKiBhcyBkMyBmcm9tICdkMydcbmltcG9ydCB7IEQzU2VsIH0gZnJvbSAnLi4vdXRpbC94ZDMnXG5pbXBvcnQgeyBBcnJheSB9IGZyb20gJy4uL3R5cGVzJ1xuaW1wb3J0ICogYXMgUiBmcm9tICdyYW1kYSdcbmltcG9ydCB7IFNpbXBsZUV2ZW50SGFuZGxlciB9IGZyb20gJy4uL3V0aWwvU2ltcGxlRXZlbnRIYW5kbGVyJztcbmltcG9ydCB7IFNWRyB9IGZyb20gJy4uL3V0aWwvU1ZHcGx1cydcbmltcG9ydCAqIGFzIG5qIGZyb20gXCJudW1qc1wiXG5cbmludGVyZmFjZSBTaW1wbGVOZXRTZWxzIHtcbiAgc3ZnOiBEM1NlbFxuICBub2RlVmFsczoge1xuICAgIG4wOiBEM1NlbFxuICAgIG4xOiBEM1NlbFxuICAgIG4yOiBEM1NlbFxuICB9XG4gIGxpbmVzOiB7XG4gICAgdzA6IEQzU2VsXG4gICAgdzE6IEQzU2VsXG4gIH1cbiAgbGluZVZhbHM6IHtcbiAgICB3MDogRDNTZWxcbiAgICB3MTogRDNTZWxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgU2ltcGxlTmV0IGV4dGVuZHMgSFRNTFZpc0NvbXBvbmVudDxudWxsPiB7XG4gIGNzc25hbWUgPSBcInNpbXBsZS1uZXQtc3ZnXCJcbiAgb3B0aW9ucyA9IHt9XG4gIHNlbHM6UGFydGlhbDxTaW1wbGVOZXRTZWxzPiA9IHt9XG5cblxuICBjb25zdHJ1Y3RvcihkM3BhcmVudDogRDNTZWwsIGV2ZW50SGFuZGxlcj86IFNpbXBsZUV2ZW50SGFuZGxlciwgb3B0aW9ucyA9IHt9LCBJRCA9IDApIHtcbiAgICBzdXBlcihkM3BhcmVudCwgZXZlbnRIYW5kbGVyLCBvcHRpb25zLCBJRClcbiAgICB0aGlzLmJhc2UuY2xhc3NlZCh0aGlzLmNzc25hbWUsIHRydWUpXG4gICAgc3VwZXIuaW5pdEhUTUwoKVxuICAgIHRoaXMuaW5pdCgpXG4gIH1cblxuICBnZXQgc3Ryb2tlV2lkdGhTY2FsZSgpOiBkMy5TY2FsZUxpbmVhcjxudW1iZXIsIG51bWJlcj4ge1xuICAgICAgcmV0dXJuIGQzLnNjYWxlTGluZWFyKCkucmFuZ2UoWzQuMiwgNjBdKS5kb21haW4oWzAsIDEuN10pXG4gIH1cblxuICBnZXQgb3BhY2l0eVNjYWxlKCk6IGQzLlNjYWxlTGluZWFyPG51bWJlciwgbnVtYmVyPiB7XG4gICAgICByZXR1cm4gZDMuc2NhbGVMaW5lYXIoKS5yYW5nZShbMC4yLCAxXSkuZG9tYWluKFswLCAxLjddKVxuICB9XG5cbiAgaW5pdCgpIHtcbiAgICBjb25zdCBzZWxzID0gdGhpcy5zZWxzXG4gICAgY29uc3Qgb3BzID0gdGhpcy5vcHRpb25zXG5cbiAgICBjb25zdCBodG1sQ29udGVudCA9IGBcbiAgICA8c3ZnIHZpZXdCb3g9XCIwIDAgMjY2MCA1NTVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgZmlsbC1ydWxlPVwiZXZlbm9kZFwiIGNsaXAtcnVsZT1cImV2ZW5vZGRcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIiBzdHJva2UtbWl0ZXJsaW1pdD1cIjVcIj5cbiAgICA8ZyBpZD1cIm5ldC12YWx1ZVwiPlxuICAgICAgPHBhdGggaWQ9XCJuZXQtdmFsLTEtcmVjdFwiIGQ9XCJNMTk5OC44IDY3LjZBNjUuOCA2NS44IDAgMDAxOTMzLjEgMmgtMTYzLjVhNjUuOCA2NS44IDAgMDAtNjUuOCA2NS43djI3LjhhNjUuOCA2NS44IDAgMDA2NS44IDY1LjhIMTkzM2E2NS44IDY1LjggMCAwMDY1LjctNjUuOFY2Ny42elwiIGZpbGw9XCIjZmZmXCIgc3Ryb2tlPVwiIzAwMFwiIHN0cm9rZS13aWR0aD1cIjMuOFwiLz5cbiAgICAgIDx0ZXh0IGlkPVwibmV0LXZhbC0xXCIgeD1cIjE4MjYuM1wiIHk9XCIxMTIuNFwiIGZvbnQtZmFtaWx5PVwiJ0lCTVBsZXhUaGFpLVNlbWlCb2xkJywnSUJNIFBsZXggVGhhaScsc2Fucy1zZXJpZlwiIGZvbnQtd2VpZ2h0PVwiNjAwXCIgZm9udC1zaXplPVwiODMuM1wiIHRleHQtYW5jaG9yPVwibWlkZGxlXCI+XG4gICAgICAgIDBcbiAgICAgIDwvdGV4dD5cbiAgICAgIDxwYXRoIGlkPVwibmV0LXZhbC0wLXJlY3RcIiBkPVwiTTk0NS44IDY3LjZBNjUuOCA2NS44IDAgMDA4ODAgMkg3MTYuNWE2NS44IDY1LjggMCAwMC02NS43IDY1Ljd2MjcuOGE2NS44IDY1LjggMCAwMDY1LjcgNjUuOGgxNjMuNmE2NS44IDY1LjggMCAwMDY1LjctNjUuOFY2Ny42elwiIGZpbGw9XCIjZmZmXCIgc3Ryb2tlPVwiIzAwMFwiIHN0cm9rZS13aWR0aD1cIjMuOFwiLz5cbiAgICAgIDx0ZXh0IGlkPVwibmV0LXZhbC0wXCIgeD1cIjc3My4zXCIgeT1cIjExMi40XCIgZm9udC1mYW1pbHk9XCInSUJNUGxleFRoYWktU2VtaUJvbGQnLCdJQk0gUGxleCBUaGFpJyxzYW5zLXNlcmlmXCIgZm9udC13ZWlnaHQ9XCI2MDBcIiBmb250LXNpemU9XCI4My4zXCIgdGV4dC1hbmNob3I9XCJtaWRkbGVcIj5cbiAgICAgICAgMFxuICAgICAgPC90ZXh0PlxuICAgIDwvZz5cbiAgICA8ZyBpZD1cIm5ldC1ub2RlXCIgZmlsbD1cIiNlYmViZWJcIj5cbiAgICAgIDxjaXJjbGUgY3g9XCIyNzYuMlwiIGN5PVwiMjc4LjFcIiByPVwiMjc2LjJcIi8+XG4gICAgICA8Y2lyY2xlIGN4PVwiMTMzMS4xXCIgY3k9XCIyNzguMVwiIHI9XCIyNzYuMlwiLz5cbiAgICAgIDxjaXJjbGUgY3g9XCIyMzgzLjFcIiBjeT1cIjI3OC4xXCIgcj1cIjI3Ni4yXCIvPlxuICAgIDwvZz5cbiAgICA8ZyBpZD1cIm5ldC1saW5lXCI+XG4gICAgICA8cGF0aCBpZD1cIm5ldC1saW5lLTBcIiBkPVwiTTU1Mi41IDI4MC4yaDUwMi40YTIgMiAwIDAwMC00LjJINTUyLjVhMiAyIDAgMDAwIDQuMnpcIiBmaWxsPVwibm9uZVwiIHN0cm9rZT1cIiMwMDBcIiBzdHJva2Utd2lkdGg9XCI0LjJcIiBzdHJva2UtbWl0ZXJsaW1pdD1cIjEuNVwiLz5cbiAgICAgIDxwYXRoIGlkPVwibmV0LWxpbmUtMVwiIGQ9XCJNMTYwNy4zIDI3OC4xaDQ5OS41XCIgZmlsbD1cIm5vbmVcIiBzdHJva2U9XCIjMDAwXCIgc3Ryb2tlLXdpZHRoPVwiNC4yXCIgc3Ryb2tlLW1pdGVybGltaXQ9XCIxLjVcIi8+XG4gICAgPC9nPlxuICAgIDxwYXRoIGlkPVwiTUpYLTQtVEVYLUktNzdcIiBkPVwiTTgwNi4yIDQwNS4zYzAtMi4zIDEtNC40IDMtNi4zIDIuMS0yIDQuNC0zIDYuOC0zIDIgMCAzLjguOSA1LjQgMi44IDEuNiAyIDIuNSA1IDIuNiA5LjIgMCAzLjItMSA5LjQtMy4xIDE4LjYtMS42IDYtMyAxMS00LjQgMTQuOWE5NiA5NiAwIDAxLTUuNiAxMyAzMCAzMCAwIDAxLTguOSAxMSAxOS40IDE5LjQgMCAwMS0xMS42IDMuOGMtNC44IDAtOS0uOS0xMi42LTIuNi0zLjctMS43LTYuMy00LTgtN2wtLjQuN2MtNC41IDYtOS44IDguOS0xNi4yIDguOWEzMy4yIDMzLjIgMCAwMS0xNS43LTQgMTUuNCAxNS40IDAgMDEtNi02LjQgMjEuMiAyMS4yIDAgMDEtMi4yLTEwLjEgNzMgNzMgMCAwMTUuNS0yMy42YzMuNy0xMCA1LjUtMTYuMiA1LjYtMTlWNDA0YzAtLjMtLjItLjctLjYtMS4xLS40LS41LTEtLjctMS44LS43aC0uNmMtMi41IDAtNC44IDEtNi44IDMuMS0yIDItMy43IDQuMy00LjkgNi42YTQyLjcgNDIuNyAwIDAwLTIuNyA2LjhjLS42IDIuMi0xIDMuMy0xLjMgMy42LS4yLjItMSAuMy0yLjYuM0g3MTdjLS43LS43LTEtMS4xLTEtMS41YTcxLjYgNzEuNiAwIDAxNS0xMi44YzEuNi0zIDQtNS45IDcuMS04LjMgMy4xLTIuNSA2LjYtMy43IDEwLjUtMy43IDQuNiAwIDguMiAxLjMgMTAuNyA0IDIuNCAyLjcgMy43IDUuOCAzLjcgOS40IDAgMS45LTEuOCA3LjctNS4zIDE3LjRhNzEuMyA3MS4zIDAgMDAtNS40IDIyLjVjMCA1IDEuMiA4LjQgMy40IDEwLjVhMTMgMTMgMCAwMDguNiAzLjJjNC42IDAgOC43LTMuMyAxMi4zLTkuOWwuOC0xLjR2LTUuMmwuMS0xLjMuMi0xLjEuMS0xLjVhODYuNCA4Ni40IDAgMDAxLTQuOGMuMS0uOS40LTIuMiAxLTMuOS41LTEuNyAxLTMuNCAxLjMtNS4yLjMtMS43LjktNCAxLjgtNi45IDMtMTIuMyA0LjktMTguOSA1LjMtMTkuOSAxLjQtMi45IDMuNy00LjMgNy00LjMgMiAwIDMuNC41IDQuMSAxLjYuOCAxIDEuMiAyIDEuMyAzIDAgMS41LTEuNSA4LjMtNC43IDIwLjdhNTg4LjIgNTg4LjIgMCAwMC01LjEgMjEuNCAzNSAzNSAwIDAwLS40IDUuNnYxLjFjMCAxLjcuMiAzLjIuNSA0LjcuNCAxLjUgMS40IDMuMSAzLjEgNC43IDEuNyAxLjYgNC4xIDIuNSA3LjMgMi42IDcuNiAwIDEzLjctNi42IDE4LjItMTkuN2ExMDAgMTAwIDAgMDA1LjItMjAuMmMwLTMuNi0uNy02LjQtMi4xLTguNC0xLjQtMi0yLjgtMy44LTQuMi01LjJhNi4zIDYuMyAwIDAxLTIuMS00LjV6XCIgZmlsbC1ydWxlPVwibm9uemVyb1wiLz5cbiAgICA8cGF0aCBpZD1cIk1KWC00LVRFWC1OLTMwXCIgZD1cIk04MzkuMSA0NDUuOWM0LjMtNi4yIDEwLjEtOS4zIDE3LjUtOS4zYTIxLjQgMjEuNCAwIDAxMTkuOSAxMy41YzIuOCA2LjMgNC4yIDE1IDQuMiAyNiAwIDExLjktMS42IDIwLjktNSAyNy4xYTE5LjUgMTkuNSAwIDAxLTYuMiA3LjcgMjAuNyAyMC43IDAgMDEtMTIuOCA0LjNjLTIgMC00LS4yLTYtLjdhMjAgMjAgMCAwMS02LjktMy42Yy0yLjctMi00LjctNC42LTYuMy03LjctMy4yLTYuMi00LjktMTUuMi00LjktMjcgMC0xMy4zIDIuMi0yMy40IDYuNS0zMC4zem0yNS43LTEuNGExMC45IDEwLjkgMCAwMC0xNi4zIDBjLTIgMi0zLjIgNC43LTMuOCA4LjJhMTYyIDE2MiAwIDAwLS45IDIyYzAgMTIgLjMgMjAgMSAyMy43LjUgMy44IDIgNi44IDQgOSAyLjIgMi4zIDQuOCAzLjUgOCAzLjUgMyAwIDUuNi0xLjIgNy43LTMuNSAyLjItMi4yIDMuNi01LjQgNC4xLTkuNS41LTQuMi44LTExLjkgMS0yMy4yIDAtMTEtLjQtMTguMy0xLTIxLjhhMTYgMTYgMCAwMC0zLjgtOC40elwiIGZpbGwtcnVsZT1cIm5vbnplcm9cIi8+XG4gICAgPHBhdGggaWQ9XCJNSlgtNi1URVgtSS03N1wiIGQ9XCJNMTg2MS4xIDQwNS4zYzAtMi4zIDEtNC40IDMtNi4zIDIuMS0yIDQuNC0zIDYuOS0zIDEuOSAwIDMuNy45IDUuMyAyLjggMS42IDIgMi41IDUgMi42IDkuMiAwIDMuMi0xIDkuNC0zIDE4LjYtMS43IDYtMy4yIDExLTQuNSAxNC45YTk2IDk2IDAgMDEtNS42IDEzIDMwIDMwIDAgMDEtOC45IDExIDE5LjQgMTkuNCAwIDAxLTExLjYgMy44Yy00LjggMC05LS45LTEyLjYtMi42LTMuNy0xLjctNi4zLTQtOC03bC0uNC43Yy00LjQgNi05LjggOC45LTE2LjIgOC45YTMzLjIgMzMuMiAwIDAxLTE1LjYtNCAxNS40IDE1LjQgMCAwMS02LTYuNCAyMS4yIDIxLjIgMCAwMS0yLjMtMTAuMSA3MyA3MyAwIDAxNS41LTIzLjZjMy43LTEwIDUuNi0xNi4yIDUuNy0xOVY0MDRjMC0uMy0uMy0uNy0uNy0xLjEtLjQtLjUtMS0uNy0xLjgtLjdoLS42Yy0yLjUgMC00LjcgMS02LjggMy4xLTIgMi0zLjcgNC4zLTQuOCA2LjZhNDIuNiA0Mi42IDAgMDAtMi44IDYuOGMtLjYgMi4yLTEgMy4zLTEuMyAzLjYtLjIuMi0xIC4zLTIuNi4zaC0yLjJjLS43LS43LTEtMS4xLTEtMS41YTcxLjcgNzEuNyAwIDAxNS0xMi44YzEuNi0zIDQtNS45IDcuMS04LjMgMy4xLTIuNSA2LjYtMy43IDEwLjUtMy43IDQuNyAwIDguMiAxLjMgMTAuNyA0czMuNyA1LjggMy43IDkuNGMwIDEuOS0xLjggNy43LTUuMyAxNy40YTcxLjMgNzEuMyAwIDAwLTUuNCAyMi41YzAgNSAxLjIgOC40IDMuNCAxMC41YTEzIDEzIDAgMDA4LjYgMy4yYzQuNiAwIDguNy0zLjMgMTIuMy05LjlsLjgtMS40di01LjJsLjEtMS4zLjItMS4xYzAtLjUgMC0xIC4yLTEuNWE5MyA5MyAwIDAwMS00LjhjMC0uOS40LTIuMi45LTMuOS41LTEuNyAxLTMuNCAxLjMtNS4yLjMtMS43IDEtNCAxLjgtNi45IDMtMTIuMyA0LjktMTguOSA1LjMtMTkuOSAxLjQtMi45IDMuNy00LjMgNy00LjMgMiAwIDMuNC41IDQuMSAxLjYuOCAxIDEuMiAyIDEuMyAzIDAgMS41LTEuNSA4LjMtNC42IDIwLjdhNTg3IDU4NyAwIDAwLTUuMiAyMS40Yy0uMiAxLjEtLjMgMy0uMyA1LjZ2MS4xYzAgMS43LjEgMy4yLjQgNC43LjQgMS41IDEuNCAzLjEgMy4xIDQuNyAxLjcgMS42IDQuMiAyLjUgNy4zIDIuNiA3LjYgMCAxMy43LTYuNiAxOC4yLTE5LjdhOTkuNyA5OS43IDAgMDA1LjItMjAuMmMwLTMuNi0uNy02LjQtMi04LjQtMS41LTItMi45LTMuOC00LjMtNS4yYTYuMyA2LjMgMCAwMS0yLTQuNXpcIiBmaWxsLXJ1bGU9XCJub256ZXJvXCIvPlxuICAgIDxwYXRoIGlkPVwiTUpYLTYtVEVYLU4tMzFcIiBkPVwiTTE5MDcuNCA0NDYuN2wtMS41LjYtNC41IDEuMWMtMiAuNC00LjIuNi02LjcuOGgtMi4xdi01LjNoMi4xYTM3LjIgMzcuMiAwIDAwMTYuNC00LjRjMS4yLS44IDIuMi0xLjcgMy4yLTIuNS4xLS4yLjYtLjQgMS4zLS40LjcgMCAxLjQuMyAyIC43djY4LjRjLjYuNiAxIDEgMS41IDFhNzYuNCA3Ni40IDAgMDA5LjguN2gzdjUuM2gtMS4zYy0xLjYtLjItNy43LS4zLTE4LjItLjMtMTAuMyAwLTE2LjMgMC0xNy45LjNoLTEuNHYtNS4zaDcuM2EyNy4xIDI3LjEgMCAwMDQuNy0uNGwxLS4yLjYtLjYuNy0uNXYtNTl6XCIgZmlsbC1ydWxlPVwibm9uemVyb1wiLz5cbiAgICA8dGV4dCB4PVwiMjEwLjNcIiB5PVwiNDczLjVcIiBmb250LWZhbWlseT1cIidJQk1QbGV4VGhhaS1NZWRpdW0nLCdJQk0gUGxleCBUaGFpJyxzYW5zLXNlcmlmXCIgZm9udC13ZWlnaHQ9XCI1MDBcIiBmb250LXNpemU9XCI1MFwiPlxuICAgICAgSU5QVVRcbiAgICA8L3RleHQ+XG4gICAgPHRleHQgeD1cIjIyOTIuM1wiIHk9XCI0NzMuNVwiIGZvbnQtZmFtaWx5PVwiJ0lCTVBsZXhUaGFpLU1lZGl1bScsJ0lCTSBQbGV4IFRoYWknLHNhbnMtc2VyaWZcIiBmb250LXdlaWdodD1cIjUwMFwiIGZvbnQtc2l6ZT1cIjUwXCI+XG4gICAgICBPVVRQVVRcbiAgICA8L3RleHQ+XG4gICAgPGcgaWQ9XCJuZXQtY2VsbFwiIGZpbGw9XCIjZmZmXCIgc3Ryb2tlPVwiIzAwMFwiIHN0cm9rZS13aWR0aD1cIjMuOFwiPlxuICAgICAgPHBhdGggZD1cIk0yNTM2LjQgMTgyLjhhNjMgNjMgMCAwMC02My02M2gtMTY5YTYzIDYzIDAgMDAtNjMgNjN2MTY1LjhhNjMgNjMgMCAwMDYzIDYzaDE2OWE2MyA2MyAwIDAwNjMtNjNWMTgyLjh6TTE0NzguNiAxODIuOGE2MyA2MyAwIDAwLTYzLTYzaC0xNjlhNjMgNjMgMCAwMC02MyA2M3YxNjUuOGE2MyA2MyAwIDAwNjMgNjNoMTY5YTYzIDYzIDAgMDA2My02M1YxODIuOHpNNDIzLjcgMTcwLjNhNjMgNjMgMCAwMC02My02M2gtMTY5YTYzIDYzIDAgMDAtNjMgNjNWMzM2YTYzIDYzIDAgMDA2MyA2M2gxNjlhNjMgNjMgMCAwMDYzLTYzVjE3MC4zelwiLz5cbiAgICA8L2c+XG4gICAgPHRleHQgaWQ9XCJuZXQtbm9kZS0yXCIgeD1cIjIzNTEuNFwiIHk9XCIzMTEuOVwiIGZvbnQtZmFtaWx5PVwiJ0lCTVBsZXhUaGFpLVNlbWlCb2xkJywnSUJNIFBsZXggVGhhaScsc2Fucy1zZXJpZlwiIGZvbnQtd2VpZ2h0PVwiNTAwXCIgZm9udC1zaXplPVwiMTAwXCIgdGV4dC1hbmNob3I9XCJtaWRkbGVcIj5cbiAgICAgIDJcbiAgICA8L3RleHQ+XG4gICAgPHRleHQgaWQ9XCJuZXQtbm9kZS0xXCIgeD1cIjEyOTIuMVwiIHk9XCIzMTEuOVwiIGZvbnQtZmFtaWx5PVwiJ0lCTVBsZXhUaGFpLVNlbWlCb2xkJywnSUJNIFBsZXggVGhhaScsc2Fucy1zZXJpZlwiIGZvbnQtd2VpZ2h0PVwiNTAwXCIgZm9udC1zaXplPVwiMTAwXCIgdGV4dC1hbmNob3I9XCJtaWRkbGVcIj5cbiAgICAgIDFcbiAgICA8L3RleHQ+XG4gICAgPHRleHQgaWQ9XCJuZXQtbm9kZS0wXCIgeD1cIjIzOC43XCIgeT1cIjI5OS40XCIgZm9udC1mYW1pbHk9XCInSUJNUGxleFRoYWktU2VtaUJvbGQnLCdJQk0gUGxleCBUaGFpJyxzYW5zLXNlcmlmXCIgZm9udC13ZWlnaHQ9XCI1MDBcIiBmb250LXNpemU9XCIxMDBcIiB0ZXh0LWFuY2hvcj1cIm1pZGRsZVwiPlxuICAgICAgMFxuICAgIDwvdGV4dD5cbiAgICA8L3N2Zz5cbiAgICBgXG5cbiAgICB0aGlzLmJhc2UuaHRtbChodG1sQ29udGVudClcbiAgICBzZWxzLnN2ZyA9IHRoaXMuYmFzZS5zZWxlY3QoJ3N2ZycpXG4gICAgICAuYXR0cignd2lkdGgnLCBcIjEwMCVcIilcbiAgICAgIC5hdHRyKCdoZWlnaHQnLCBcIjEwMCVcIilcblxuICAgIHNlbHMubGluZXMgPSB7XG4gICAgICB3MDogdGhpcy5iYXNlLnNlbGVjdChcIiNuZXQtbGluZS0wXCIpLFxuICAgICAgdzE6IHRoaXMuYmFzZS5zZWxlY3QoXCIjbmV0LWxpbmUtMVwiKVxuICAgIH1cblxuICAgIHNlbHMubGluZVZhbHMgPSB7XG4gICAgICB3MDogdGhpcy5iYXNlLnNlbGVjdChcIiNuZXQtdmFsLTBcIiksXG4gICAgICB3MTogdGhpcy5iYXNlLnNlbGVjdChcIiNuZXQtdmFsLTFcIiksXG4gICAgfVxuXG4gICAgc2Vscy5ub2RlVmFscyA9IHtcbiAgICAgIG4wOiB0aGlzLmJhc2Uuc2VsZWN0KFwiI25ldC1ub2RlLTBcIiksXG4gICAgICBuMTogdGhpcy5iYXNlLnNlbGVjdChcIiNuZXQtbm9kZS0xXCIpLFxuICAgICAgbjI6IHRoaXMuYmFzZS5zZWxlY3QoXCIjbmV0LW5vZGUtMlwiKSxcbiAgICB9XG5cbiAgICBzZWxzLm5vZGVWYWxzLm4wLnRleHQoXCIxXCIpXG4gICAgc2Vscy5ub2RlVmFscy5uMS50ZXh0KFwiX1wiKVxuICAgIHNlbHMubm9kZVZhbHMubjIudGV4dChcIl9cIilcblxuICAgIHNlbHMubGluZVZhbHMudzAudGV4dChcIl9cIilcbiAgICBzZWxzLmxpbmVWYWxzLncxLnRleHQoXCJfXCIpXG5cbiAgfVxuXG4gIHNldFN0YXRlKHY6IEFycmF5KSB7XG4gICAgY29uc3Qgc2VscyA9IHRoaXMuc2Vsc1xuXG4gICAgY29uc3QgdzAgPSB2LmdldCgwKVxuICAgIGNvbnN0IHcxID0gdi5nZXQoMSlcblxuICAgIHNlbHMubGluZVZhbHMudzAudGV4dCh3MC50b0ZpeGVkKDIpKVxuICAgIHNlbHMubGluZVZhbHMudzEudGV4dCh3MS50b0ZpeGVkKDIpKVxuXG4gICAgc2Vscy5ub2RlVmFscy5uMS50ZXh0KHcwLnRvRml4ZWQoMikpXG4gICAgc2Vscy5ub2RlVmFscy5uMi50ZXh0KCh3MCAqIHcxKS50b0ZpeGVkKDIpKVxuXG4gICAgc2Vscy5saW5lcy53MFxuICAgICAgLmF0dHIoXCJzdHJva2Utd2lkdGhcIiwgdGhpcy5zdHJva2VXaWR0aFNjYWxlKHcwKSlcbiAgICAgIC5hdHRyKFwib3BhY2l0eVwiLCB0aGlzLm9wYWNpdHlTY2FsZSh3MCkpXG5cbiAgICBzZWxzLmxpbmVzLncxXG4gICAgICAuYXR0cihcInN0cm9rZS13aWR0aFwiLCB0aGlzLnN0cm9rZVdpZHRoU2NhbGUodzEpKVxuICAgICAgLmF0dHIoXCJvcGFjaXR5XCIsIHRoaXMub3BhY2l0eVNjYWxlKHcxKSlcbiAgICBcbiAgfVxuXG4gIC8vIFRPIGtlZXAgdGhlIEFQSSBjb25zaXN0ZW50LlxuICBkYXRhKCk6IG51bGxcbiAgZGF0YSh2YWw6IG51bGwpOiB0aGlzXG4gIGRhdGEodmFsPykge1xuICAgIHJldHVybiBudWxsXG4gIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9
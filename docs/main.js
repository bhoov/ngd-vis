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

/***/ "./src/ts/BaseUpdater2D.ts":
/*!*********************************!*\
  !*** ./src/ts/BaseUpdater2D.ts ***!
  \*********************************/
/*! exports provided: BaseUpdater2D */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseUpdater2D", function() { return BaseUpdater2D; });
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3 */ "./node_modules/d3/index.js");
/* harmony import */ var numjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! numjs */ "./node_modules/numjs/src/index.js");
/* harmony import */ var numjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(numjs__WEBPACK_IMPORTED_MODULE_1__);


// const defaultErrorFunction = (v: Array) => v.get(0) * v.get(1) - 1
const defaultErrorFunction = (v) => {
    //@ts-ignore
    return numjs__WEBPACK_IMPORTED_MODULE_1__["dot"](numjs__WEBPACK_IMPORTED_MODULE_1__["array"]([[1, 2], [2, 1]]), v);
};
const defaultDfFunction = (v) => numjs__WEBPACK_IMPORTED_MODULE_1__["array"]([[1, 2], [2, 1]]);
const defaultStep2Lr = d3__WEBPACK_IMPORTED_MODULE_0__["scaleLinear"]().domain([0, 0.8]).range([0.001, 0.5]);
const defaultLoss = (fv) => numjs__WEBPACK_IMPORTED_MODULE_1__["sum"](numjs__WEBPACK_IMPORTED_MODULE_1__["divide"](numjs__WEBPACK_IMPORTED_MODULE_1__["power"](fv, 2), 2));
class BaseUpdater2D {
    constructor(options = {}) {
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
        console.log("Running base updater constructor");
        this.updateOptions(options);
    }
    updateOptions(options) {
        Object.keys(options).forEach(k => this.op[k] = options[k]);
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
    loss(v) {
        return this.op.loss(this.op.f(v));
    }
    gradient(v) {
        const err = this.loss(v);
        const df = this.op.df(v);
        const g = numjs__WEBPACK_IMPORTED_MODULE_1__["multiply"](df, err);
        return g;
    }
    lr(v) {
        const dv = this.dv(v);
        const absLoss = Math.abs(this.loss(v));
        const eps = 1e-10;
        const lr = numjs__WEBPACK_IMPORTED_MODULE_1__["multiply"](dv, this.lrScale).divide(absLoss + eps);
        return lr;
    }
    next(v) {
        const dv = this.dv(v);
        const newx = numjs__WEBPACK_IMPORTED_MODULE_1__["subtract"](v, numjs__WEBPACK_IMPORTED_MODULE_1__["multiply"](dv, this.op.eta));
        //@ts-ignore
        return newx;
    }
    nextLr(v) {
        const g = this.lr(v);
        const z = numjs__WEBPACK_IMPORTED_MODULE_1__["add"](v, numjs__WEBPACK_IMPORTED_MODULE_1__["multiply"](g, -1));
        return z;
    }
}


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
/* harmony import */ var _SimpleNetUpdater__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SimpleNetUpdater */ "./src/ts/SimpleNetUpdater.ts");
/* harmony import */ var _Updater2D__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Updater2D */ "./src/ts/Updater2D.ts");




const A = numjs__WEBPACK_IMPORTED_MODULE_0__["array"]([[1, 2], [2, 1]]);
const landscapes2d = {
    SimpleNet2D: {
        name: "SimpleNet2D",
        f: (v) => (v.get(0) * v.get(1) - 1),
        df: (v) => numjs__WEBPACK_IMPORTED_MODULE_0__["array"]([v.get(1), v.get(0)]),
        updaterClass: _SimpleNetUpdater__WEBPACK_IMPORTED_MODULE_2__["SimpleNetUpdater"],
        colorScale: d3__WEBPACK_IMPORTED_MODULE_1__["scaleLinear"]()
            .domain([-1, 0, 1.6])
            //@ts-ignore
            .range(["white", "steelblue", "red"])
            //@ts-ignore
            .interpolate(d3__WEBPACK_IMPORTED_MODULE_1__["interpolateRgb"].gamma(2.2)),
        xrange: [0, 1.6],
        yrange: [0, 1.6],
        nContours: 20,
        loss: x => x,
    },
    Elliptical: {
        name: "Elliptical",
        //@ts-ignore
        f: (v) => numjs__WEBPACK_IMPORTED_MODULE_0__["dot"](A, v),
        //@ts-ignore
        df: (v) => A,
        updaterClass: _Updater2D__WEBPACK_IMPORTED_MODULE_3__["Updater2D"],
        target: numjs__WEBPACK_IMPORTED_MODULE_0__["array"]([0, 0]),
        colorScale: d3__WEBPACK_IMPORTED_MODULE_1__["scalePow"]()
            .exponent(0.5)
            .domain([0, 36])
            //@ts-ignore
            .range(["steelblue", "white"])
            //@ts-ignore
            .interpolate(d3__WEBPACK_IMPORTED_MODULE_1__["interpolateRgb"].gamma(2.2)),
        xrange: [-2, 2],
        yrange: [-2, 2],
        nContours: 30,
        nx: 7,
        ny: 7,
        loss: (fv) => numjs__WEBPACK_IMPORTED_MODULE_0__["sum"](numjs__WEBPACK_IMPORTED_MODULE_0__["divide"](numjs__WEBPACK_IMPORTED_MODULE_0__["power"](fv, 2), 2)),
        step2lr: d3__WEBPACK_IMPORTED_MODULE_1__["scaleLinear"]().domain([0, 1]).range([0.1, 1.5])
    },
};


/***/ }),

/***/ "./src/ts/SimpleNetUpdater.ts":
/*!************************************!*\
  !*** ./src/ts/SimpleNetUpdater.ts ***!
  \************************************/
/*! exports provided: SimpleNetUpdater, BlockSimpleNetUpdater */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimpleNetUpdater", function() { return SimpleNetUpdater; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockSimpleNetUpdater", function() { return BlockSimpleNetUpdater; });
/* harmony import */ var numjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! numjs */ "./node_modules/numjs/src/index.js");
/* harmony import */ var numjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(numjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _BaseUpdater2D__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BaseUpdater2D */ "./src/ts/BaseUpdater2D.ts");


class SimpleNetUpdater extends _BaseUpdater2D__WEBPACK_IMPORTED_MODULE_1__["BaseUpdater2D"] {
    eigenvalues(v) {
        const ex = numjs__WEBPACK_IMPORTED_MODULE_0__["power"](v, 2).sum();
        const ey = numjs__WEBPACK_IMPORTED_MODULE_0__["power"](v, 2).sum();
        return numjs__WEBPACK_IMPORTED_MODULE_0__["array"]([ex, ey]);
    }
    dv(v) {
        const g = this.gradient(v);
        const ev = this.eigenvalues(v);
        const modEvs = numjs__WEBPACK_IMPORTED_MODULE_0__["abs"](numjs__WEBPACK_IMPORTED_MODULE_0__["power"](ev, this.op.q));
        const dv = numjs__WEBPACK_IMPORTED_MODULE_0__["divide"](g, modEvs);
        return dv;
    }
    // Convert to block diagonal updater
    toBlock() {
        const blockUpdater = new BlockSimpleNetUpdater(this.op);
        return blockUpdater;
    }
    // Create a new full updater from this object. Useful if one of the derived classes needs to implement
    toFull() {
        const fullUpdater = new SimpleNetUpdater(this.op);
        return fullUpdater;
    }
}
class BlockSimpleNetUpdater extends SimpleNetUpdater {
    eigenvalues(v) {
        return numjs__WEBPACK_IMPORTED_MODULE_0__["multiply"](numjs__WEBPACK_IMPORTED_MODULE_0__["power"](this.op.df(v), 2), 2);
    }
}


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
/* harmony import */ var _BaseUpdater2D__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BaseUpdater2D */ "./src/ts/BaseUpdater2D.ts");



// const defaultErrorFunction = (v: Array) => v.get(0) * v.get(1) - 1
const defaultErrorFunction = v => {
    return numjs__WEBPACK_IMPORTED_MODULE_1__["dot"](numjs__WEBPACK_IMPORTED_MODULE_1__["array"]([[1, 2], [2, 1]]), v);
};
const defaultDfFunction = v => numjs__WEBPACK_IMPORTED_MODULE_1__["array"]([[1, 2], [2, 1]]);
const defaultStep2Lr = d3__WEBPACK_IMPORTED_MODULE_0__["scaleLinear"]().domain([0, 0.8]).range([0.001, 0.25]);
const defaultLoss = fv => numjs__WEBPACK_IMPORTED_MODULE_1__["sum"](numjs__WEBPACK_IMPORTED_MODULE_1__["divide"](numjs__WEBPACK_IMPORTED_MODULE_1__["power"](fv, 2), 2));
function getOrthMatrix(S) {
    const theta = 0.5 * Math.atan2(S.get(0, 1) + S.get(1, 0), S.get(0, 0) - S.get(1, 1));
    const cos = Math.cos(theta);
    const sin = Math.sin(theta);
    return numjs__WEBPACK_IMPORTED_MODULE_1__["array"]([[cos, -sin], [sin, cos]]);
}
function SVD2d(M) {
    const U = getOrthMatrix(numjs__WEBPACK_IMPORTED_MODULE_1__["dot"](M, M.T));
    let V = getOrthMatrix(numjs__WEBPACK_IMPORTED_MODULE_1__["dot"](M.T, M));
    const prePreDiag = numjs__WEBPACK_IMPORTED_MODULE_1__["dot"](M, V);
    const preDiag = numjs__WEBPACK_IMPORTED_MODULE_1__["dot"](U.T, numjs__WEBPACK_IMPORTED_MODULE_1__["dot"](M, V));
    let d = numjs__WEBPACK_IMPORTED_MODULE_1__["array"]([preDiag.get(0, 0), preDiag.get(1, 1)]);
    //@ts-ignore
    const dSign = d.tolist().map(x => x >= 0 ? 1 : -1);
    V = numjs__WEBPACK_IMPORTED_MODULE_1__["array"](V.tolist().map((row, i) => {
        return row.map((x, j) => {
            return x * dSign[j];
        });
    }));
    d = numjs__WEBPACK_IMPORTED_MODULE_1__["abs"](d);
    return { U, d, V };
}
class Updater2D extends _BaseUpdater2D__WEBPACK_IMPORTED_MODULE_2__["BaseUpdater2D"] {
    constructor() {
        super(...arguments);
        // Set Default Options
        this.op = {
            //@ts-ignore
            f: defaultErrorFunction,
            //@ts-ignore
            df: defaultDfFunction,
            target: numjs__WEBPACK_IMPORTED_MODULE_1__["array"]([0, 0]),
            q: 0,
            eta: 0.1,
            step2lr: defaultStep2Lr,
            loss: defaultLoss,
        };
    }
    error(v) {
        return numjs__WEBPACK_IMPORTED_MODULE_1__["subtract"](this.op.f(v), this.op.target);
    }
    dv(v) {
        const jac = this.op.df(v);
        const err = this.error(v);
        const { U, d, V } = SVD2d(jac);
        const dDamp = numjs__WEBPACK_IMPORTED_MODULE_1__["multiply"](d, numjs__WEBPACK_IMPORTED_MODULE_1__["power"](d, -2 * this.op.q));
        const D = numjs__WEBPACK_IMPORTED_MODULE_1__["array"]([[dDamp.get(0), 0], [0, dDamp.get(1)]]);
        const preFac = numjs__WEBPACK_IMPORTED_MODULE_1__["dot"](U, D);
        const postFac = numjs__WEBPACK_IMPORTED_MODULE_1__["dot"](V, err);
        //@ts-ignore
        const out = numjs__WEBPACK_IMPORTED_MODULE_1__["dot"](preFac, postFac);
        return out;
    }
    lr(v) {
        const dv = this.dv(v);
        const absLoss = Math.abs(this.loss(v));
        const eps = 1e-10;
        //@ts-ignore
        const lr = numjs__WEBPACK_IMPORTED_MODULE_1__["multiply"](dv, this.lrScale).divide(Math.sqrt(this.loss(v) + eps)); //.divide(absLoss + eps)
        return lr;
    }
    // Convert to block diagonal updater // Nothing different rn
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
function plotElliptical() {
    const vis0 = d3__WEBPACK_IMPORTED_MODULE_0__["select"]('#vis0');
    const sels = {
        quiverPlot: vis0.select('#chart'),
        qId: vis0.select('#q-val'),
        etaId: vis0.select('#eta-val'),
        qSlider: vis0.select('#q-slider'),
        etaSlider: vis0.select('#eta-slider'),
        hessType: vis0.select('#hess-type'),
    };
    const eventHandler = new _util_SimpleEventHandler__WEBPACK_IMPORTED_MODULE_10__["SimpleEventHandler"](vis0.node());
    const vizs = {
        graph: _vis_GeneralContourPlot__WEBPACK_IMPORTED_MODULE_2__["ContourPlot"].fromLandscape(sels.quiverPlot, eventHandler, _Landscapes2D__WEBPACK_IMPORTED_MODULE_13__["landscapes2d"].Elliptical),
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
        graph: _vis_GeneralContourPlot__WEBPACK_IMPORTED_MODULE_2__["ContourPlot"].fromLandscape(sels.quiverPlot, eventHandler, _Landscapes2D__WEBPACK_IMPORTED_MODULE_13__["landscapes2d"].SimpleNet2D),
        // graph: ContourPlot.fromLandscape(sels.quiverPlot, eventHandler, landscapes2d.Elliptical), // BROKEN Why?
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
    plotQuadraticFuncs();
    plotElliptical();
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
/*! exports provided: linspace, logspace, powspace */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "linspace", function() { return linspace; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logspace", function() { return logspace; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "powspace", function() { return powspace; });
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3 */ "./node_modules/d3/index.js");

/**
 * Create n linearly spaced values between start and end
 */
const linspace = (start, end, n) => {
    const delta = (end - start) / (n - 1);
    return d3__WEBPACK_IMPORTED_MODULE_0__["range"](start, end + delta, delta).slice(0, n);
};
/**
 * Create n logarithmically spaced values between start and end
 */
const logspace = (start, end, n, base = 10) => {
    const scale = d3__WEBPACK_IMPORTED_MODULE_0__["scaleLog"]().base(base).domain([start, end]).range([start, end]);
    return linspace(start, end, n).map(scale);
};
/**
 * Convert values spaced evenly on a power scale. When exp=1, same as linspace
 */
const powspace = (start, end, n, exp = 1) => {
    const scale = d3__WEBPACK_IMPORTED_MODULE_0__["scalePow"]().exponent(exp).domain([start, end]).range([start, end]);
    return linspace(start, end, n).map(scale);
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
            n: 201,
            m: 201,
            nx: 11,
            ny: 11,
            nContours: 20,
            circleEvery: 4,
            updater: null,
            xlabel: "x",
            ylabel: "y",
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
        const updater = new t.updaterClass(t);
        const newOptions = Object.assign(Object.assign({}, t), { updater });
        return new ContourPlot(d3parent, eventHandler, newOptions);
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
        // let thresholds = linspace(d3.min(vals), d3.max(vals), 20)
        let thresholds = Object(_util_xd3__WEBPACK_IMPORTED_MODULE_1__["powspace"])(d3__WEBPACK_IMPORTED_MODULE_0__["min"](vals), d3__WEBPACK_IMPORTED_MODULE_0__["max"](vals), op.nContours, 1);
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
        this.base.selectAll('.descending-point').remove();
        this.base.selectAll('.descending-line').remove();
    }
    clearQuivers() {
        this.base.selectAll('.quiver').remove();
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
            const pt1 = numjs__WEBPACK_IMPORTED_MODULE_8__["array"]([pt.x, pt.y]);
            const pt2 = op.updater.nextLr(pt1);
            arrow.attr('x2', scales.x(pt2.get(0)))
                .attr('y2', scales.y(pt2.get(1)));
        });
    }
    createQuivers() {
        const self = this;
        const op = this.options;
        const scales = this.scales;
        const sels = this.sels;
        const points = _util_SVGplus__WEBPACK_IMPORTED_MODULE_3__["SVG"].meshgrid(op.nx, op.ny, op.xrange, op.yrange);
        const color = "blue";
        const width = 1.25;
        const quiverGroup = this.base.append('g').attr('id', 'quiver-group'); // init should have these groups already selected
        this.clearQuivers();
        sels.arrows = points.map(pt => {
            const pt1 = numjs__WEBPACK_IMPORTED_MODULE_8__["array"]([pt.x, pt.y]);
            const pt2 = op.updater.nextLr(pt1);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nzcy9tYWluLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy90cy9CYXNlVXBkYXRlcjJELnRzIiwid2VicGFjazovLy8uL3NyYy90cy9Hb2xmTGFuZHNjYXBlcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHMvTGFuZHNjYXBlczJELnRzIiwid2VicGFjazovLy8uL3NyYy90cy9TaW1wbGVOZXRVcGRhdGVyLnRzIiwid2VicGFjazovLy8uL3NyYy90cy9VcGRhdGVyMkQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RzL21haW4udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RzL3Bsb3R0aW5nLnRzIiwid2VicGFjazovLy8uL3NyYy90cy91dGlsL0NoYXJ0MmRWaXNDb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RzL3V0aWwvSFRNTFZpc0NvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHMvdXRpbC9TVkdWaXNDb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RzL3V0aWwvU1ZHcGx1cy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHMvdXRpbC9TaW1wbGVFdmVudEhhbmRsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RzL3V0aWwvVUlkLnRzIiwid2VicGFjazovLy8uL3NyYy90cy91dGlsL1Zpc0NvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHMvdXRpbC94ZDMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RzL3Zpcy9HZW5lcmFsQ29udG91clBsb3QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RzL3Zpcy9Hb2xmQmFsbC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHMvdmlzL0dvbGZIb2xlMUQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RzL3Zpcy9Hb2xmTG9zc2VzLnRzIiwid2VicGFjazovLy8uL3NyYy90cy92aXMvR29sZlhEaXN0LnRzIiwid2VicGFjazovLy8uL3NyYy90cy92aXMvTG9zc1N1cmZhY2UyRC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHMvdmlzL01hbnVhbFVwZGF0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RzL3Zpcy9RdWFkcmF0aWNQbG90cy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHMvdmlzL1NpbXBsZU5ldC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSxRQUFRLG9CQUFvQjtRQUM1QjtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLGlCQUFpQiw0QkFBNEI7UUFDN0M7UUFDQTtRQUNBLGtCQUFrQiwyQkFBMkI7UUFDN0M7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FB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QUMsRUFBRSxHQUFHLENBQUM7UUFDaEIsSUFBSSxFQUFFLFFBQVE7S0FDakI7SUFDRCxLQUFLLEVBQUU7UUFDSCxJQUFJLEVBQUUsT0FBTztRQUNiLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDO1FBQ3JKLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFD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LEVBQUUsQ0FBUSxFQUFFLE9BQVksRUFBRSxFQUFFLEVBQUU7SUFDM0UsTUFBTSxLQUFLLEdBQUcsMkNBQVcsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDL0UsT0FBTyxRQUFRLENBQUMsS0FBSyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDO0FBQzdDLENBQUM7QUFFRDs7R0FFRztBQUNJLE1BQU0sUUFBUSxHQUFHLENBQUMsS0FBSyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsR0FBRyxHQUFDLENBQUMsRUFBRSxFQUFFO0lBQzdDLE1BQU0sS0FBSyxHQUFHLDJDQUFXLEVBQUUsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ2xGLE9BQU8sUUFBUSxDQUFDLEtBQUssRUFBQyxHQUFHLEVBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQztBQUMzQyxDQUFDO0FBS0QsNENBQVksQ0FBQyxTQUFTLENBQUMsS0FBSyxHQUFHO0lBQzNCLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDN0IsT0FBTyxJQUFJLENBQUM7QUFDaEIsQ0FBQztBQUVELDRDQUFZLENBQUMsU0FBUyxDQUFDLFdBQVcsR0FBRyxVQUFVLFNBQVM7SUFDcEQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7SUFDbEQsT0FBTyxJQUFJLENBQUM7QUFDaEIsQ0FBQztBQUVELDRDQUFZLENBQUMsU0FBUyxD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RUFBRSxDQUFDLEdBQUcsRUFBRTtRQUNsQyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLEVBQUU7SUFDdEMsQ0FBQyxDQUFDO0lBRUYsTUFBTSxFQUFFLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDLENBQUM7SUFDM0UsTUFBTSxFQUFFLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDLENBQUM7SUFDM0UsTUFBTSxFQUFFLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDLENBQUM7SUFDM0UsTUFBTSxFQUFFLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDLENBQUM7SUFFM0UsTUFBTSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRTtJQUM1QixNQUFNLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFO0lBQzVCLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUM5QyxDQUFDO0FBK0JELE1BQU0sTUFBTSxHQUFHO0lBQ2IsU0FBUyxFQUFFLHFCQUFxQjtDQUNqQztBQUVNLE1BQU0sYUFBYyxTQUFRLHFFQUFrQjtJQXFCakQsWUFBWSxRQUFlLEVBQUUsWUFBaUMsRUFBRSxPQUFPLEdBQUcsRUFBRTtRQUN4RSxLQUFLLENBQUMsUUFBUSxFQUFFLFlBQVksRUFBRSxPQUFPLENBQUM7UUFyQjFDLFlBQU8sR0FBRyxjQUFjO1FBSXhCLFlBQU8sR0FBaUI7WUFDcEIsUUFBUSxFQUFFLEdBQUc7WUFDYixTQUFTLEVBQUUsR0FBRztZQUNkLE1BQU0sRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUU7WUFDckQsR0FBRyxFQUFFLEVBQUU7WUFDUCxNQUFNLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ2QsTUFBTSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUNkLENBQUMsRUFBRSxHQUFHO1lBQ04sQ0FBQyxFQUFFLEdBQUc7U0FDVCxFQUFDLFNBQVM7UUFFWCxXQUFNLEdBQWdCLEVBQUU7UUFDeEIsU0FBSSxHQUFjLEVBQUU7UUFNaEIsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQzNCLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDO1FBQ3JDLElBQUksQ0FBQyxRQUFRLEVBQUU7SUFDbkIsQ0FBQztJQUVELFlBQVk7UUFDUixNQUFNLElBQUksR0FBRyxJQUFJLENBQUM7UUFDbEIsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUN4QixNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBRTNCLE1BQU0sV0FBVyxHQUFHLFVBQVU7UUFDOUIsTUFBTSxJQUFJLEdBQUcsa0VBQWdCLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLE1BQU0sRUFBRSxXQUFXLENBQUM7UUFDNUUsSUFBSSxVQUFVLEdBQUcsMERBQVEsQ0FBQyxzQ0FBTSxDQUFDLElBQUksQ0FBQyxFQUFFLHNDQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFFMUQsTUFBTSxDQUFDLEtBQUssR0FBRyw4Q0FBYyxFQUFFLENBQUMsTUFBTSxDQUFDLHlDQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsR0FBRyxFQUFFLENBQUMsbURBQW1CLENBQUMsQ0FBQztRQUU3RyxNQUFNLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUM7UUFFdEMsTUFBTSxXQUFXLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUM7UUFDekMsTUFBTSxZQUFZLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxlQUFlLENBQUM7UUFDdEUsTUFBTSxRQUFRLEdBQUcsWUFBWSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUM7YUFDbEQsSUFBSSxDQUFDLFdBQVcsQ0FBQztRQUd0QixRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQzthQUNoQixJQUFJLENBQUMsT0FBTyxFQUFFLFNBQVMsQ0FBQzthQUN4QixJQUFJLENBQUMsR0FBRyxFQUFFLDBDQUFVLENBQUMsOENBQWMsRUFBRSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQzlELElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLEVBQUU7WUFDZCxPQUFPLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztRQUNoQyxDQUFDLENBQUM7YUFDRCxPQUFPLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxFQUFFO1lBQ3BCLE9BQU8sSUFBSTtRQUNmLENBQUMsQ0FBQztJQUVWLENBQUM7SUFHRCxPQUFPLENBQUMsQ0FBVztRQUNmLE9BQU8sRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7SUFDM0QsQ0FBQztJQUVELFFBQVEsQ0FBQyxDQUFXO1FBQ2hCLE9BQU8sRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtJQUN6RSxDQUFDO0lBRUQsUUFBUTtRQUNKLG1CQUFtQjtRQUNuQixJQUFJLENBQUMsWUFBWSxFQUFFO0lBQ3ZCLENBQUM7SUFFRCxJQUFJO1FBQ0EsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2xCLE1BQU0sRUFBRSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDeEIsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUMzQixNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBRXZCLGtCQUFrQjtRQUNsQixpREFBRyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDO1FBRXZCLGdCQUFnQjtRQUNoQixNQUFNLENBQUMsUUFBUSxHQUFHLDJDQUFXLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNsRCxNQUFNLENBQUMsS0FBSyxHQUFHLGtEQUFrQixDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7UUFDNUMsTUFBTSxDQUFDLENBQUMsR0FBRyw4Q0FBYyxFQUFFLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2xFLE1BQU0sQ0FBQyxDQUFDLEdBQUcsOENBQWMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQztRQUVuRSxzQkFBc0I7UUFDdEIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUM7YUFDN0IsSUFBSSxDQUFDLE9BQU8sRUFBRSxjQUFjLENBQUM7YUFDN0IsSUFBSSxDQUFDLFdBQVcsRUFBRSxpREFBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2FBQzlDLElBQUksQ0FBQyw2Q0FBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFFakQsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUM7YUFDN0IsSUFBSSxDQUFDLE9BQU8sRUFBRSxjQUFjLENBQUM7YUFDN0IsSUFBSSxDQUFDLFdBQVcsRUFBRSxpREFBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7YUFDdEMsSUFBSSxDQUFDLDJDQUFXLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUUvQyx5Q0FBeUM7UUFDekMsa0JBQWtCO1FBQ2xCLCtCQUErQjtRQUMvQiwwRUFBMEU7UUFFMUUseUNBQXlDO1FBQ3pDLGtCQUFrQjtRQUNsQiwrQkFBK0I7UUFDL0Isa0ZBQWtGO0lBQ3RGLENBQUM7SUFJRCxJQUFJLENBQUMsR0FBSTtRQUNMLElBQUksR0FBRyxJQUFJLElBQUk7WUFBRSxPQUFPLElBQUksQ0FBQyxLQUFLO1FBQ2xDLElBQUksQ0FBQyxLQUFLLEdBQUcsR0FBRztRQUNoQixPQUFPLElBQUk7SUFDZixDQUFDOztBQWpHTSxvQkFBTSxHQUFHLE1BQU07Ozs7Ozs7Ozs7Ozs7QUN0RjFCO0FBQUE7QUFBQTtBQUFBO0FBQTRDO0FBRXJDLE1BQU0sYUFBYTtJQVF0QixZQUFZLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxHQUFHLEdBQUcsR0FBRztRQUMvQixJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNYLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDO1FBQ2IsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDWCxJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztJQUNuQixDQUFDO0lBRUQsK0NBQStDO0lBQy9DLElBQUksQ0FBQyxDQUFTO1FBQ1YsT0FBTyxnRUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQUVELGdCQUFnQjtJQUNoQixRQUFRLENBQUMsQ0FBUztRQUNkLE9BQU8sSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBRUQsMENBQTBDO0lBQzFDLE9BQU8sQ0FBQyxDQUFTO1FBQ2IsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUFFRCxjQUFjLENBQUMsQ0FBUztRQUNwQixPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2pELENBQUM7SUFFRCxTQUFTLENBQUMsQ0FBUztRQUNmLE9BQU8sSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBRUQsd0RBQXdEO0lBQ3hELElBQUksQ0FBQyxDQUFTO1FBQ1YsK0dBQStHO1FBQy9HLE9BQU8sQ0FBRSxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUFFRCwyQ0FBMkM7SUFDM0MsSUFBSSxDQUFDLENBQVM7UUFDVixPQUFPLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUMzQixDQUFDO0NBQ0o7QUFHTSxNQUFNLGVBQWU7SUFReEIsWUFBWSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsR0FBRyxHQUFHLEdBQUc7UUFDL0IsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDWCxJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQztRQUNiLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ1gsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7SUFDbkIsQ0FBQztJQUVELCtDQUErQztJQUMvQyxJQUFJLENBQUMsQ0FBUztRQUNWLE9BQU8sZ0VBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUFFRCxnQkFBZ0I7SUFDaEIsUUFBUSxDQUFDLENBQVM7UUFDZCxPQUFPLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDakMsQ0FBQztJQUVELDBDQUEwQztJQUMxQyxPQUFPLENBQUMsQ0FBUztRQUNiLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBRUQsY0FBYyxDQUFDLENBQVM7UUFDcEIsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNqRCxDQUFDO0lBRUQsU0FBUyxDQUFDLENBQVM7UUFDZixPQUFPLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7SUFDN0MsQ0FBQztJQUVELHdEQUF3RDtJQUN4RCxJQUFJLENBQUMsQ0FBUztRQUNWLCtHQUErRztRQUMvRyxPQUFPLENBQUUsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBRUQsMkNBQTJDO0lBQzNDLElBQUksQ0FBQyxDQUFTO1FBQ1YsT0FBTyxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDM0IsQ0FBQztDQUNKOzs7Ozs7Ozs7Ozs7O0FDdEdEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXdCO0FBQ3FCO0FBRW9DO0FBRTVDO0FBQ1U7QUE4QnhDLE1BQU0sY0FBZSxTQUFRLHFFQUFxQjtJQWtCckQsWUFBWSxRQUFlLEVBQUUsWUFBaUMsRUFBRSxPQUFPLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxDQUFDO1FBQ2hGLEtBQUssQ0FBQyxRQUFRLEVBQUUsWUFBWSxFQUFFLE9BQU8sRUFBRSxFQUFFLENBQUM7UUFsQjlDLFlBQU8sR0FBRyxpQkFBaUI7UUFLM0IsWUFBTyxHQUFpQjtZQUNwQixnQkFBZ0I7WUFDaEIsTUFBTSxFQUFFLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLE1BQU0sRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRTtZQUNqRCxRQUFRLEVBQUUsR0FBRztZQUNiLFNBQVMsRUFBRSxHQUFHO1lBQ2QsTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ2YsTUFBTSxFQUFFLENBQUMsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDO1NBQ3hCO1FBRUQsU0FBSSxHQUF1QixFQUFFO1FBS3pCLElBQUksQ0FBQyxNQUFNLEdBQUcsYUFBYSxJQUFJLENBQUMsRUFBRSxFQUFFO1FBQ3BDLEtBQUssQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEVBQUMsMkJBQTJCO1FBQ2xELElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDO0lBQ3pDLENBQUM7SUFFRCxJQUFJLFVBQVU7UUFDVixNQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsT0FBTztRQUN2QixPQUFPO1lBQ0gsQ0FBQyxFQUFFLDhDQUFjLEVBQUU7aUJBQ2QsTUFBTSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7aUJBQ2pCLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDekIsQ0FBQyxFQUFFLDhDQUFjLEVBQUU7aUJBQ2QsTUFBTSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7aUJBQ2pCLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUM7U0FDN0I7SUFDTCxDQUFDO0lBRUQsTUFBTSxDQUFDLENBQVc7UUFDZCxPQUFPLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO0lBQ25FLENBQUM7SUFFRCwrRUFBK0U7SUFDL0UsUUFBUSxDQUFDLENBQVc7UUFDaEIsT0FBTyxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO0lBQ2pGLENBQUM7SUFFRCw4QkFBOEI7SUFDOUIsT0FBTyxDQUFDLENBQVM7UUFDYixNQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsT0FBTztRQUN2QiwyQ0FBMkM7UUFDM0MsT0FBTyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLFVBQUMsRUFBSSxDQUFDLEdBQUU7SUFDOUIsQ0FBQztJQUVELFNBQVMsQ0FBQyxDQUF3QjtRQUM5QixPQUFPLHVDQUFPLEVBQVU7YUFDbkIsQ0FBQyxDQUFDLENBQUMsQ0FBUyxFQUFFLENBQVMsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDakQsQ0FBQyxDQUFDLENBQUMsQ0FBUyxFQUFFLENBQVMsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDN0QsQ0FBQztJQUVELElBQUk7UUFDQSxNQUFNLElBQUksR0FBRyxJQUFJLENBQUM7UUFDbEIsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUN4QixNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBRXZCLElBQUksQ0FBQyxJQUFJO2FBQ0osSUFBSSxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUMsUUFBUSxDQUFDO2FBQzFCLElBQUksQ0FBQyxRQUFRLEVBQUUsRUFBRSxDQUFDLFNBQVMsQ0FBQztRQUVqQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDakMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUNyQyxNQUFNLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztpQkFDbkIsSUFBSSxDQUFDLFdBQVcsRUFBRSxHQUFHLGlEQUFHLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQztRQUM3RSxDQUFDLENBQUM7UUFFRixJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDO2FBQ3hCLE9BQU8sQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDO2FBQ3hCLElBQUksQ0FBQyxPQUFPLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQzthQUN2QixJQUFJLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxNQUFNLENBQUM7UUFFOUIsMENBQTBDO1FBRTFDLE1BQU0sR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUNoQixNQUFNLEVBQUUsR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQzdCLG9CQUFvQjtRQUNwQixNQUFNLFFBQVEsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFO1lBQ3hCLE9BQU8sSUFBSSw0REFBYSxDQUNwQixDQUFDLENBQVMsRUFBRSxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFDcEIsQ0FBQyxDQUFTLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFDaEIsQ0FBQyxFQUNELElBQUksQ0FDUDtRQUNMLENBQUMsQ0FBQztRQUVGLElBQUksQ0FBQyxLQUFLLEdBQUcsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUMxQixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUM7aUJBQ2pDLEtBQUssQ0FBQywwREFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztpQkFDaEQsT0FBTyxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUM7aUJBQzFCLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUU7Z0JBQ1gsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM1QyxDQUFDLENBQUM7UUFDVixDQUFDLENBQUM7UUFFRixvQkFBb0I7UUFDcEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUM7YUFDckMsT0FBTyxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUM7YUFDNUIsT0FBTyxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUM7UUFFNUIsSUFBSSxDQUFDLFVBQVUsR0FBRyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFO1lBQy9CLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDO2lCQUM1QixPQUFPLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQztpQkFDM0IsSUFBSSxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUM7UUFDekIsQ0FBQyxDQUFDO1FBRUYsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsV0FBVyxFQUFFO1lBQ3RCLE1BQU0sS0FBSyxHQUFHLHdDQUFRLENBQUMsSUFBSSxDQUFDO1lBQzVCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSx1Q0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBRTVFLHNDQUFzQztZQUN0Qyw2QkFBNkI7WUFDN0IscUdBQXFHO1lBQ3JHLEtBQUs7UUFDVCxDQUFDLENBQUM7UUFFRixJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxVQUFVLEVBQUUsR0FBRyxFQUFFO1lBQzFCLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUM7WUFDdkMsSUFBSSxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUk7Z0JBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNuRixDQUFDLENBQUM7UUFFRixJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxXQUFXLEVBQUUsR0FBRyxFQUFFO1lBQzNCLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxLQUFLLENBQUM7WUFDeEMsSUFBSSxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUk7Z0JBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUNwRixDQUFDLENBQUM7UUFFRixJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUU7WUFDbEIsTUFBTSxLQUFLLEdBQUcsd0NBQVEsQ0FBQyxJQUFJLENBQUM7WUFDNUIsTUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM5QyxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtnQkFDN0IsTUFBTSxDQUFDLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQztnQkFDckIsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDakQsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUN0QixDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDbkQsQ0FBQyxDQUFDO1lBRUYsSUFBSSxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksRUFBRTtnQkFDcEIsSUFBSSxDQUFDLEtBQUssR0FBRywyQ0FBVyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUU7b0JBQzlCLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO3dCQUM3QixNQUFNLENBQUMsR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDO3dCQUNyQixNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO3dCQUNwRCxNQUFNLEtBQUssR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQzt3QkFDMUIsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7d0JBQ3RDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztvQkFDbEQsQ0FBQyxDQUFDO2dCQUNOLENBQUMsRUFBRSxFQUFFLENBQUM7YUFDVDtpQkFDSTtnQkFDRCxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRTtnQkFDakIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJO2FBQ3BCO1FBQ0wsQ0FBQyxDQUFDO0lBQ04sQ0FBQztJQUVELE9BQU8sQ0FBQyxJQUFVO1FBQ2QsaUJBQWlCO0lBQ3JCLENBQUM7SUFJRCxJQUFJLENBQUMsR0FBSTtRQUNMLElBQUksR0FBRyxJQUFJLElBQUk7WUFBRSxPQUFPLElBQUksQ0FBQyxLQUFLO1FBQ2xDLE9BQU8sSUFBSTtJQUNmLENBQUM7Q0FDSjs7Ozs7Ozs7Ozs7OztBQy9NRDtBQUFBO0FBQUE7QUFBQTtBQUEyRDtBQUNuQztBQXlCakIsTUFBTSxTQUFVLFNBQVEsdUVBQXNCO0lBTW5ELFlBQVksUUFBZSxFQUFFLFlBQWlDLEVBQUUsT0FBTyxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsQ0FBQztRQUNsRixLQUFLLENBQUMsUUFBUSxFQUFFLFlBQVksRUFBRSxPQUFPLEVBQUUsRUFBRSxDQUFDO1FBTjVDLFlBQU8sR0FBRyxnQkFBZ0I7UUFDMUIsWUFBTyxHQUFHLEVBQUU7UUFDWixTQUFJLEdBQTBCLEVBQUU7UUFLOUIsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUM7UUFDckMsS0FBSyxDQUFDLFFBQVEsRUFBRTtRQUNoQixJQUFJLENBQUMsSUFBSSxFQUFFO0lBQ2IsQ0FBQztJQUVELElBQUksZ0JBQWdCO1FBQ2hCLE9BQU8sOENBQWMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztJQUM3RCxDQUFDO0lBRUQsSUFBSSxZQUFZO1FBQ1osT0FBTyw4Q0FBYyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQzVELENBQUM7SUFFRCxJQUFJO1FBQ0YsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUk7UUFDdEIsTUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLE9BQU87UUFFeEIsTUFBTSxXQUFXLEdBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tBNENuQjtRQUVELElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQztRQUMzQixJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQzthQUMvQixJQUFJLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQzthQUNyQixJQUFJLENBQUMsUUFBUSxFQUFFLE1BQU0sQ0FBQztRQUV6QixJQUFJLENBQUMsS0FBSyxHQUFHO1lBQ1gsRUFBRSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQztZQUNuQyxFQUFFLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDO1NBQ3BDO1FBRUQsSUFBSSxDQUFDLFFBQVEsR0FBRztZQUNkLEVBQUUsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUM7WUFDbEMsRUFBRSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQztTQUNuQztRQUVELElBQUksQ0FBQyxRQUFRLEdBQUc7WUFDZCxFQUFFLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDO1lBQ25DLEVBQUUsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUM7WUFDbkMsRUFBRSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQztTQUNwQztRQUVELElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7UUFDMUIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQztRQUMxQixJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDO1FBRTFCLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7UUFDMUIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQztJQUU1QixDQUFDO0lBRUQsUUFBUSxDQUFDLENBQVE7UUFDZixNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSTtRQUV0QixNQUFNLEVBQUUsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUNuQixNQUFNLEVBQUUsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUVuQixJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNwQyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUVwQyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNwQyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRTNDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRTthQUNWLElBQUksQ0FBQyxjQUFjLEVBQUUsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEVBQUUsQ0FBQyxDQUFDO2FBQy9DLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUV6QyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUU7YUFDVixJQUFJLENBQUMsY0FBYyxFQUFFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFFLENBQUMsQ0FBQzthQUMvQyxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLENBQUM7SUFFM0MsQ0FBQztJQUtELElBQUksQ0FBQyxHQUFJO1FBQ1AsT0FBTyxJQUFJO0lBQ2IsQ0FBQztDQUNGIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbiBcdGZ1bmN0aW9uIHdlYnBhY2tKc29ucENhbGxiYWNrKGRhdGEpIHtcbiBcdFx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcbiBcdFx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcbiBcdFx0dmFyIGV4ZWN1dGVNb2R1bGVzID0gZGF0YVsyXTtcblxuIFx0XHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcbiBcdFx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG4gXHRcdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIHJlc29sdmVzID0gW107XG4gXHRcdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuIFx0XHRcdFx0cmVzb2x2ZXMucHVzaChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0pO1xuIFx0XHRcdH1cbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHR9XG4gXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihkYXRhKTtcblxuIFx0XHR3aGlsZShyZXNvbHZlcy5sZW5ndGgpIHtcbiBcdFx0XHRyZXNvbHZlcy5zaGlmdCgpKCk7XG4gXHRcdH1cblxuIFx0XHQvLyBhZGQgZW50cnkgbW9kdWxlcyBmcm9tIGxvYWRlZCBjaHVuayB0byBkZWZlcnJlZCBsaXN0XG4gXHRcdGRlZmVycmVkTW9kdWxlcy5wdXNoLmFwcGx5KGRlZmVycmVkTW9kdWxlcywgZXhlY3V0ZU1vZHVsZXMgfHwgW10pO1xuXG4gXHRcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gYWxsIGNodW5rcyByZWFkeVxuIFx0XHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiBcdH07XG4gXHRmdW5jdGlvbiBjaGVja0RlZmVycmVkTW9kdWxlcygpIHtcbiBcdFx0dmFyIHJlc3VsdDtcbiBcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGRlZmVycmVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdHZhciBkZWZlcnJlZE1vZHVsZSA9IGRlZmVycmVkTW9kdWxlc1tpXTtcbiBcdFx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcbiBcdFx0XHRmb3IodmFyIGogPSAxOyBqIDwgZGVmZXJyZWRNb2R1bGUubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdHZhciBkZXBJZCA9IGRlZmVycmVkTW9kdWxlW2pdO1xuIFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2RlcElkXSAhPT0gMCkgZnVsZmlsbGVkID0gZmFsc2U7XG4gXHRcdFx0fVxuIFx0XHRcdGlmKGZ1bGZpbGxlZCkge1xuIFx0XHRcdFx0ZGVmZXJyZWRNb2R1bGVzLnNwbGljZShpLS0sIDEpO1xuIFx0XHRcdFx0cmVzdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBkZWZlcnJlZE1vZHVsZVswXSk7XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0cmV0dXJuIHJlc3VsdDtcbiBcdH1cblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdC8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuIFx0Ly8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwibWFpblwiOiAwXG4gXHR9O1xuXG4gXHR2YXIgZGVmZXJyZWRNb2R1bGVzID0gW107XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdHZhciBqc29ucEFycmF5ID0gd2luZG93W1wid2VicGFja0pzb25wXCJdID0gd2luZG93W1wid2VicGFja0pzb25wXCJdIHx8IFtdO1xuIFx0dmFyIG9sZEpzb25wRnVuY3Rpb24gPSBqc29ucEFycmF5LnB1c2guYmluZChqc29ucEFycmF5KTtcbiBcdGpzb25wQXJyYXkucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrO1xuIFx0anNvbnBBcnJheSA9IGpzb25wQXJyYXkuc2xpY2UoKTtcbiBcdGZvcih2YXIgaSA9IDA7IGkgPCBqc29ucEFycmF5Lmxlbmd0aDsgaSsrKSB3ZWJwYWNrSnNvbnBDYWxsYmFjayhqc29ucEFycmF5W2ldKTtcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gb2xkSnNvbnBGdW5jdGlvbjtcblxuXG4gXHQvLyBhZGQgZW50cnkgbW9kdWxlIHRvIGRlZmVycmVkIGxpc3RcbiBcdGRlZmVycmVkTW9kdWxlcy5wdXNoKFtcIi4vc3JjL2luZGV4LnRzXCIsXCJ2ZW5kb3JcIl0pO1xuIFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiByZWFkeVxuIFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbmRleC5odG1sXCI7IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0IHttYWlufSBmcm9tICcuL3RzL21haW4nXG5cbmltcG9ydCBcIiFmaWxlLWxvYWRlcj9uYW1lPWluZGV4Lmh0bWwhLi9pbmRleC5odG1sXCI7XG5pbXBvcnQgXCIuL2Nzcy9tYWluLnNjc3NcIlxuXG5tYWluKCkiLCJpbXBvcnQgKiBhcyBkMyBmcm9tICdkMydcbmltcG9ydCAqIGFzIG5qIGZyb20gXCJudW1qc1wiXG5pbXBvcnQgKiBhcyB0cCBmcm9tIFwiLi90eXBlc1wiXG5pbXBvcnQgeyBBcnJheSB9IGZyb20gXCIuL3R5cGVzXCJcblxuLy8gY29uc3QgZGVmYXVsdEVycm9yRnVuY3Rpb24gPSAodjogQXJyYXkpID0+IHYuZ2V0KDApICogdi5nZXQoMSkgLSAxXG5jb25zdCBkZWZhdWx0RXJyb3JGdW5jdGlvbiA9ICh2OiBBcnJheSkgPT4ge1xuICAgIC8vQHRzLWlnbm9yZVxuICAgIHJldHVybiBuai5kb3QobmouYXJyYXkoW1sxLCAyXSwgWzIsIDFdXSksIHYpXG59XG5jb25zdCBkZWZhdWx0RGZGdW5jdGlvbiA9ICh2OiBBcnJheSkgPT4gbmouYXJyYXkoW1sxLCAyXSwgWzIsIDFdXSlcbmNvbnN0IGRlZmF1bHRTdGVwMkxyOiBkMy5TY2FsZUxpbmVhcjxudW1iZXIsIG51bWJlcj4gPSBkMy5zY2FsZUxpbmVhcigpLmRvbWFpbihbMCwgMC44XSkucmFuZ2UoWzAuMDAxLCAwLjVdKVxuY29uc3QgZGVmYXVsdExvc3MgPSAoZnY6IEFycmF5KSA9PiBuai5zdW0obmouZGl2aWRlKG5qLnBvd2VyKGZ2LCAyKSwgMikpXG5cbmludGVyZmFjZSBVcGRhdGVyT3B0aW9ucyB7XG4gICAgZGY6IHRwLk1hcEZ1bmN0aW9uXG4gICAgZjogdHAuTWFwRnVuY3Rpb25cbiAgICB0YXJnZXQ/XG4gICAgcTogbnVtYmVyICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIDAgLT4gMSwgd2hlcmUgMCBpcyBTR0QgYW5kIDEgaXMgTkdELiAwLjUgaXMgc3FydCBOR0QuIFtzdGVwID0gLSBldGEgKiBIIF4gKC0xL3EpICogZ10gKEggPSAwIHdoZW4gcT0wKVxuICAgIGV0YTogbnVtYmVyICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBha2EgJ2xlYXJuaW5nIHJhdGUnXG4gICAgc3RlcDJscjogZDMuU2NhbGVMaW5lYXI8bnVtYmVyLCBudW1iZXI+XG4gICAgbG9zczogdHAuUmVkdWNlRnVuY3Rpb25cbn1cblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEJhc2VVcGRhdGVyMkQge1xuICAgIG9wOiBVcGRhdGVyT3B0aW9ucyA9IHtcbiAgICAgICAgLy9AdHMtaWdub3JlXG4gICAgICAgIGY6IGRlZmF1bHRFcnJvckZ1bmN0aW9uLFxuICAgICAgICAvL0B0cy1pZ25vcmVcbiAgICAgICAgZGY6IGRlZmF1bHREZkZ1bmN0aW9uLFxuICAgICAgICBxOiAwLFxuICAgICAgICBldGE6IDAuMSxcbiAgICAgICAgc3RlcDJscjogZGVmYXVsdFN0ZXAyTHIsXG4gICAgICAgIGxvc3M6IGRlZmF1bHRMb3NzLFxuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnM6IFBhcnRpYWw8VXBkYXRlck9wdGlvbnM+PXt9KSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiUnVubmluZyBiYXNlIHVwZGF0ZXIgY29uc3RydWN0b3JcIik7XG4gICAgICAgIHRoaXMudXBkYXRlT3B0aW9ucyhvcHRpb25zKVxuICAgIH1cblxuICAgIHVwZGF0ZU9wdGlvbnMob3B0aW9uczogUGFydGlhbDxVcGRhdGVyT3B0aW9ucz4pIHtcbiAgICAgICAgT2JqZWN0LmtleXMob3B0aW9ucykuZm9yRWFjaChrID0+IHRoaXMub3Bba10gPSBvcHRpb25zW2tdKTtcbiAgICB9XG5cbiAgICBldGEoKTogbnVtYmVyXG4gICAgZXRhKHZhbDogbnVtYmVyKTogdGhpc1xuICAgIGV0YSh2YWw/KSB7XG4gICAgICAgIGlmICh2YWwgPT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMub3AuZXRhXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5vcC5ldGEgPSB2YWxcbiAgICAgICAgcmV0dXJuIHRoaXNcbiAgICB9XG5cbiAgICBxKCk6IG51bWJlclxuICAgIHEodmFsOiBudW1iZXIpOiB0aGlzXG4gICAgcSh2YWw/KSB7XG4gICAgICAgIGlmICh2YWwgPT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMub3AucVxuICAgICAgICB9XG4gICAgICAgIHRoaXMub3AucSA9IHZhbFxuICAgICAgICByZXR1cm4gdGhpc1xuICAgIH1cblxuICAgIHN0ZXAybHIoKTogZDMuU2NhbGVMaW5lYXI8bnVtYmVyLCBudW1iZXI+XG4gICAgc3RlcDJscih2YWw6IGQzLlNjYWxlTGluZWFyPG51bWJlciwgbnVtYmVyPik6IHRoaXNcbiAgICBzdGVwMmxyKHZhbD8pIHtcbiAgICAgICAgaWYgKHZhbCA9PSBudWxsKSB7IHJldHVybiB0aGlzLm9wLnN0ZXAybHIgfVxuICAgICAgICB0aGlzLm9wLnN0ZXAybHIgPSB2YWxcbiAgICAgICAgcmV0dXJuIHRoaXNcbiAgICB9XG5cbiAgICAvLyBBbW91bnQgdG8gc2NhbGUgc2l6ZSBvZiBsZWFybmluZyByYXRlIGFycm93c1xuICAgIGdldCBsclNjYWxlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5vcC5zdGVwMmxyKHRoaXMub3AuZXRhKVxuICAgIH1cblxuICAgIGxvc3ModjogQXJyYXkpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5vcC5sb3NzKHRoaXMub3AuZih2KSlcbiAgICB9XG5cbiAgICBncmFkaWVudCh2OiBBcnJheSk6IEFycmF5IHtcbiAgICAgICAgY29uc3QgZXJyID0gdGhpcy5sb3NzKHYpXG4gICAgICAgIGNvbnN0IGRmID0gdGhpcy5vcC5kZih2KVxuICAgICAgICBjb25zdCBnOiBBcnJheSA9IG5qLm11bHRpcGx5KGRmLCBlcnIpXG4gICAgICAgIHJldHVybiBnXG4gICAgfVxuXG4gICAgbHIodjogQXJyYXkpIHtcbiAgICAgICAgY29uc3QgZHYgPSB0aGlzLmR2KHYpXG4gICAgICAgIGNvbnN0IGFic0xvc3MgPSBNYXRoLmFicyh0aGlzLmxvc3ModikpXG4gICAgICAgIGNvbnN0IGVwcyA9IDFlLTEwO1xuICAgICAgICBjb25zdCBscjogQXJyYXkgPSBuai5tdWx0aXBseShkdiwgdGhpcy5sclNjYWxlKS5kaXZpZGUoYWJzTG9zcyArIGVwcylcbiAgICAgICAgcmV0dXJuIGxyXG4gICAgfVxuXG4gICAgbmV4dCh2OiBBcnJheSkge1xuICAgICAgICBjb25zdCBkdiA9IHRoaXMuZHYodilcbiAgICAgICAgY29uc3QgbmV3eCA9IG5qLnN1YnRyYWN0KHYsIG5qLm11bHRpcGx5KGR2LCB0aGlzLm9wLmV0YSkpXG4gICAgICAgIC8vQHRzLWlnbm9yZVxuICAgICAgICByZXR1cm4gbmV3eFxuICAgIH1cblxuICAgIGFic3RyYWN0IGR2KHY6IEFycmF5KVxuXG4gICAgbmV4dExyKHY6IEFycmF5KTogQXJyYXkge1xuICAgICAgICBjb25zdCBnID0gdGhpcy5scih2KTtcbiAgICAgICAgY29uc3QgejogQXJyYXkgPSBuai5hZGQodiwgbmoubXVsdGlwbHkoZywgLTEpKVxuICAgICAgICByZXR1cm4gelxuICAgIH1cblxuICAgIGFic3RyYWN0IHRvQmxvY2soKVxuICAgIGFic3RyYWN0IHRvRnVsbCgpXG59IiwiZXhwb3J0IGNvbnN0IGJhc2VMb3NzID0geCA9PiAxIC8gMiAqIE1hdGgucG93KHgsIDIpXG5leHBvcnQgY29uc3QgZ2V0UGxvdEZ1bmMgPSAoejogTGFuZHNjYXBlKSA9PiAoeDogbnVtYmVyKSA9PiB6Lmxvc3Moei5mKHgpKVxuXG5leHBvcnQgaW50ZXJmYWNlIExhbmRzY2FwZSB7XG4gICAgbmFtZTogc3RyaW5nXG4gICAgZjogKHg6IG51bWJlcikgPT4gbnVtYmVyXG4gICAgZGY6ICh4OiBudW1iZXIpID0+IG51bWJlclxuICAgIHhyYW5nZTogW251bWJlciwgbnVtYmVyXVxuICAgIHlyYW5nZTogW251bWJlciwgbnVtYmVyXVxuICAgIGxvc3M6ICh4OiBudW1iZXIpID0+IG51bWJlclxufVxuXG5cbmV4cG9ydCBjb25zdCBsYW5kc2NhcGVzOiB7IFtrOiBzdHJpbmddOiBMYW5kc2NhcGUgfSA9IHtcbiAgICBob2xlOiB7XG4gICAgICAgIG5hbWU6IFwiaG9sZVwiLFxuICAgICAgICBmOiB4ID0+IE1hdGgudGFuaCh4KjEzLjUpLFxuICAgICAgICBkZjogeCA9PiBNYXRoLnBvdyhNYXRoLmNvc2goeCoxMy41KSwgLTIpICogMTMuNSxcbiAgICAgICAgeHJhbmdlOiBbLTYgLyAxMy41LCA2IC8gMTMuNV0sXG4gICAgICAgIHlyYW5nZTogWzAsIDAuNl0sXG4gICAgICAgIGxvc3M6IGJhc2VMb3NzXG4gICAgfSxcbiAgICBzdGVwczoge1xuICAgICAgICBuYW1lOiBcInN0ZXBzXCIsXG4gICAgICAgIGY6IHggPT4gTWF0aC50YW5oKHggKiAxMy41IC0gMTEpIC8gNCArIE1hdGgudGFuaCh4ICogMTMuNSAtIDYpIC8gNCArIE1hdGgudGFuaCh4ICogMTMuNSkgKyBNYXRoLnRhbmgoeCAqIDEzLjUgKyA2KSAvIDQgKyBNYXRoLnRhbmgoeCAqIDEzLjUgKyAxMSkgLyA0LFxuICAgICAgICBkZjogeCA9PiAoTWF0aC5wb3coTWF0aC5jb3NoKHggKiAxMy41IC0gMTEpLCAtMikgLyA0ICsgTWF0aC5wb3coTWF0aC5jb3NoKHggKiAxMy41IC0gNiksIC0yKSAvIDQgKyBNYXRoLnBvdyhNYXRoLmNvc2goeCAqIDEzLjUpLCAtMikgKyBNYXRoLnBvdyhNYXRoLmNvc2goeCAqIDEzLjUgKyA2KSwgLTIpIC8gNCArIE1hdGgucG93KE1hdGguY29zaCh4ICogMTMuNSArIDExKSwgLTIpIC8gNCApICogMTMuNSxcbiAgICAgICAgeHJhbmdlOiBbLTEzLjUgLyAxMy41LCAxMy41IC8gMTMuNV0sXG4gICAgICAgIHlyYW5nZTogWzAsIDIuNV0sXG4gICAgICAgIGxvc3M6IGJhc2VMb3NzXG4gICAgfSxcbiAgICBzZWFndWxsOiB7XG4gICAgICAgIG5hbWU6IFwic2VhZ3VsbFwiLFxuICAgICAgICBmOiB4ID0+IE1hdGguc2lnbih4KSAqICgxIC0gKDEgLyAoMSArIE1hdGguYWJzKHggKiAxNi41KSkpKSxcbiAgICAgICAgZGY6IHggPT4gMTYuNSAvIE1hdGgucG93KDEgKyBNYXRoLmFicyh4ICogMTYuNSksIDIpLFxuICAgICAgICB4cmFuZ2U6IFstMTIgLyAxNi41LCAxMiAvIDE2LjVdLFxuICAgICAgICB5cmFuZ2U6IFswLCAwLjZdLFxuICAgICAgICBsb3NzOiBiYXNlTG9zc1xuICAgIH0sXG4gICAgYm93bDoge1xuICAgICAgICBuYW1lOiBcImJvd2xcIixcbiAgICAgICAgZjogIHggPT4gTWF0aC5zaW5oKHgvMyksXG4gICAgICAgIGRmOiB4ID0+IE1hdGguY29zaCh4LzMpLzMsXG4gICAgICAgIHhyYW5nZTogWy0zICogMywgMyAqIDNdLFxuICAgICAgICB5cmFuZ2U6IFswLCA1MF0sXG4gICAgICAgIGxvc3M6IGJhc2VMb3NzXG4gICAgfSxcbiAgICBkZWVwX25ldDoge1xuICAgICAgICBuYW1lOiBcImRlZXBfbmV0XCIsXG4gICAgICAgIGY6IHggPT4gTWF0aC5wb3coTWF0aC5hYnMoeC8zKzEpLCAzKSAtIDEsICAvLyBkZXB0aCA9IDRcbiAgICAgICAgZGY6IHggPT4gMy8zICogTWF0aC5wb3coTWF0aC5hYnMoeC8zKzEpLCAyKSxcbiAgICAgICAgLy8geHJhbmdlOiBbLTAuNyo0LCAwLjcqNF0sXG4gICAgICAgIHhyYW5nZTogWy0wLjk1KjMsIDAuOTUqM10sXG4gICAgICAgIHlyYW5nZTogWzAsIDRdLFxuICAgICAgICBsb3NzOiBiYXNlTG9zc1xuICAgIH1cbn0iLCJpbXBvcnQgKiBhcyB0cCBmcm9tIFwiLi90eXBlc1wiXG5pbXBvcnQgKiBhcyBuaiBmcm9tIFwibnVtanNcIlxuaW1wb3J0ICogYXMgZDMgZnJvbSBcImQzXCJcbmltcG9ydCB7QmFzZVVwZGF0ZXIyRH0gZnJvbSBcIi4vQmFzZVVwZGF0ZXIyRFwiXG5pbXBvcnQge1NpbXBsZU5ldFVwZGF0ZXJ9IGZyb20gXCIuL1NpbXBsZU5ldFVwZGF0ZXJcIlxuaW1wb3J0IHtVcGRhdGVyMkR9IGZyb20gXCIuL1VwZGF0ZXIyRFwiXG5cbmV4cG9ydCBpbnRlcmZhY2UgTGFuZHNjYXBlMkQge1xuICAgIG5hbWU6IHN0cmluZ1xuICAgIGZcbiAgICBkZlxuICAgIGxvc3NcbiAgICB1cGRhdGVyQ2xhc3NcbiAgICBjb2xvclNjYWxlOiBkMy5TY2FsZUxpbmVhcjxudW1iZXIsIG51bWJlciB8IHN0cmluZz5cbiAgICB4cmFuZ2U6IFtudW1iZXIsIG51bWJlcl1cbiAgICB5cmFuZ2U6IFtudW1iZXIsIG51bWJlcl1cbiAgICB0YXJnZXQ/XG4gICAgbkNvbnRvdXJzPzogbnVtYmVyXG4gICAgbng/OiBudW1iZXJcbiAgICBueT86IG51bWJlclxuICAgIHN0ZXAybHI/XG59XG5cbmNvbnN0IEEgPSBuai5hcnJheShbWzEsMl0sIFsyLDFdXSlcblxuZXhwb3J0IGNvbnN0IGxhbmRzY2FwZXMyZDogeyBbazogc3RyaW5nXTogTGFuZHNjYXBlMkQgfSA9IHtcbiAgICBTaW1wbGVOZXQyRDoge1xuICAgICAgICBuYW1lOiBcIlNpbXBsZU5ldDJEXCIsXG4gICAgICAgIGY6ICh2OiB0cC5BcnJheSkgPT4gKHYuZ2V0KDApICogdi5nZXQoMSkgLSAxKSxcbiAgICAgICAgZGY6ICh2OiB0cC5BcnJheSkgPT4gbmouYXJyYXkoW3YuZ2V0KDEpLCB2LmdldCgwKV0pLFxuICAgICAgICB1cGRhdGVyQ2xhc3M6IFNpbXBsZU5ldFVwZGF0ZXIsXG4gICAgICAgIGNvbG9yU2NhbGU6IGQzLnNjYWxlTGluZWFyKClcbiAgICAgICAgICAgIC5kb21haW4oWy0xLCAwLCAxLjZdKVxuICAgICAgICAgICAgLy9AdHMtaWdub3JlXG4gICAgICAgICAgICAucmFuZ2UoW1wid2hpdGVcIiwgXCJzdGVlbGJsdWVcIiwgXCJyZWRcIl0pXG4gICAgICAgICAgICAvL0B0cy1pZ25vcmVcbiAgICAgICAgICAgIC5pbnRlcnBvbGF0ZShkMy5pbnRlcnBvbGF0ZVJnYi5nYW1tYSgyLjIpKSxcbiAgICAgICAgeHJhbmdlOiBbMCwgMS42XSxcbiAgICAgICAgeXJhbmdlOiBbMCwgMS42XSxcbiAgICAgICAgbkNvbnRvdXJzOiAyMCxcbiAgICAgICAgbG9zczogeCA9PiB4LFxuICAgIH0sXG5cbiAgICBFbGxpcHRpY2FsOiB7XG4gICAgICAgIG5hbWU6IFwiRWxsaXB0aWNhbFwiLFxuICAgICAgICAvL0B0cy1pZ25vcmVcbiAgICAgICAgZjogKHY6IHRwLkFycmF5KSA9PiBuai5kb3QoQSwgdiksXG4gICAgICAgIC8vQHRzLWlnbm9yZVxuICAgICAgICBkZjogKHY6IHRwLkFycmF5KSA9PiBBLFxuICAgICAgICB1cGRhdGVyQ2xhc3M6IFVwZGF0ZXIyRCxcbiAgICAgICAgdGFyZ2V0OiBuai5hcnJheShbMCwwXSksXG4gICAgICAgIGNvbG9yU2NhbGU6IGQzLnNjYWxlUG93KClcbiAgICAgICAgICAgIC5leHBvbmVudCgwLjUpXG4gICAgICAgICAgICAuZG9tYWluKFswLCAzNl0pXG4gICAgICAgICAgICAvL0B0cy1pZ25vcmVcbiAgICAgICAgICAgIC5yYW5nZShbXCJzdGVlbGJsdWVcIiwgXCJ3aGl0ZVwiXSlcbiAgICAgICAgICAgIC8vQHRzLWlnbm9yZVxuICAgICAgICAgICAgLmludGVycG9sYXRlKGQzLmludGVycG9sYXRlUmdiLmdhbW1hKDIuMikpLFxuICAgICAgICB4cmFuZ2U6IFstMiwgMl0sXG4gICAgICAgIHlyYW5nZTogWy0yLCAyXSxcbiAgICAgICAgbkNvbnRvdXJzOiAzMCxcbiAgICAgICAgbng6IDcsXG4gICAgICAgIG55OiA3LFxuICAgICAgICBsb3NzOiAoZnY6IHRwLkFycmF5KSA9PiBuai5zdW0obmouZGl2aWRlKG5qLnBvd2VyKGZ2LCAyKSwgMikpLFxuICAgICAgICBzdGVwMmxyOiBkMy5zY2FsZUxpbmVhcigpLmRvbWFpbihbMCwgMV0pLnJhbmdlKFswLjEsIDEuNV0pXG4gICAgfSxcbn0iLCJpbXBvcnQgKiBhcyBkMyBmcm9tICdkMydcbmltcG9ydCAqIGFzIG5qIGZyb20gXCJudW1qc1wiXG5pbXBvcnQgKiBhcyB0cCBmcm9tIFwiLi90eXBlc1wiXG5pbXBvcnQgeyBBcnJheSB9IGZyb20gXCIuL3R5cGVzXCJcbmltcG9ydCB7IEJhc2VVcGRhdGVyMkQgfSBmcm9tIFwiLi9CYXNlVXBkYXRlcjJEXCJcblxuZXhwb3J0IGNsYXNzIFNpbXBsZU5ldFVwZGF0ZXIgZXh0ZW5kcyBCYXNlVXBkYXRlcjJEIHtcbiAgICBlaWdlbnZhbHVlcyh2OiBBcnJheSk6IEFycmF5IHtcbiAgICAgICAgY29uc3QgZXggPSBuai5wb3dlcih2LCAyKS5zdW0oKVxuICAgICAgICBjb25zdCBleSA9IG5qLnBvd2VyKHYsIDIpLnN1bSgpXG4gICAgICAgIHJldHVybiBuai5hcnJheShbZXgsIGV5XSlcbiAgICB9XG5cbiAgICBkdih2OiBBcnJheSk6IEFycmF5IHtcbiAgICAgICAgY29uc3QgZyA9IHRoaXMuZ3JhZGllbnQodilcbiAgICAgICAgY29uc3QgZXYgPSB0aGlzLmVpZ2VudmFsdWVzKHYpXG5cbiAgICAgICAgY29uc3QgbW9kRXZzID0gbmouYWJzKG5qLnBvd2VyKGV2LCB0aGlzLm9wLnEpKVxuICAgICAgICBjb25zdCBkdjogQXJyYXkgPSBuai5kaXZpZGUoZywgbW9kRXZzKVxuICAgICAgICByZXR1cm4gZHZcbiAgICB9XG5cbiAgICAvLyBDb252ZXJ0IHRvIGJsb2NrIGRpYWdvbmFsIHVwZGF0ZXJcbiAgICB0b0Jsb2NrKCk6IEJsb2NrU2ltcGxlTmV0VXBkYXRlciB7XG4gICAgICAgIGNvbnN0IGJsb2NrVXBkYXRlciA9IG5ldyBCbG9ja1NpbXBsZU5ldFVwZGF0ZXIodGhpcy5vcClcbiAgICAgICAgcmV0dXJuIGJsb2NrVXBkYXRlclxuICAgIH1cblxuICAgIC8vIENyZWF0ZSBhIG5ldyBmdWxsIHVwZGF0ZXIgZnJvbSB0aGlzIG9iamVjdC4gVXNlZnVsIGlmIG9uZSBvZiB0aGUgZGVyaXZlZCBjbGFzc2VzIG5lZWRzIHRvIGltcGxlbWVudFxuICAgIHRvRnVsbCgpOiBTaW1wbGVOZXRVcGRhdGVyIHtcbiAgICAgICAgY29uc3QgZnVsbFVwZGF0ZXIgPSBuZXcgU2ltcGxlTmV0VXBkYXRlcih0aGlzLm9wKVxuICAgICAgICByZXR1cm4gZnVsbFVwZGF0ZXJcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBCbG9ja1NpbXBsZU5ldFVwZGF0ZXIgZXh0ZW5kcyBTaW1wbGVOZXRVcGRhdGVyIHtcbiAgICBlaWdlbnZhbHVlcyh2OiBBcnJheSk6IEFycmF5IHtcbiAgICAgICAgcmV0dXJuIG5qLm11bHRpcGx5KG5qLnBvd2VyKHRoaXMub3AuZGYodiksIDIpLCAyKVxuICAgIH1cbn0iLCJpbXBvcnQgKiBhcyBkMyBmcm9tICdkMydcbmltcG9ydCAqIGFzIG5qIGZyb20gXCJudW1qc1wiXG5pbXBvcnQgKiBhcyB0cCBmcm9tIFwiLi90eXBlc1wiXG5pbXBvcnQgeyBBcnJheSB9IGZyb20gXCIuL3R5cGVzXCJcbmltcG9ydCB7IEJhc2VVcGRhdGVyMkQgfSBmcm9tIFwiLi9CYXNlVXBkYXRlcjJEXCJcblxuLy8gY29uc3QgZGVmYXVsdEVycm9yRnVuY3Rpb24gPSAodjogQXJyYXkpID0+IHYuZ2V0KDApICogdi5nZXQoMSkgLSAxXG5jb25zdCBkZWZhdWx0RXJyb3JGdW5jdGlvbiA9IHYgPT4ge1xuICAgIHJldHVybiBuai5kb3QobmouYXJyYXkoW1sxLCAyXSwgWzIsIDFdXSksIHYpXG59XG5jb25zdCBkZWZhdWx0RGZGdW5jdGlvbiA9IHYgPT4gbmouYXJyYXkoW1sxLCAyXSwgWzIsIDFdXSlcbmNvbnN0IGRlZmF1bHRTdGVwMkxyOiBkMy5TY2FsZUxpbmVhcjxudW1iZXIsIG51bWJlcj4gPSBkMy5zY2FsZUxpbmVhcigpLmRvbWFpbihbMCwgMC44XSkucmFuZ2UoWzAuMDAxLCAwLjI1XSlcbmNvbnN0IGRlZmF1bHRMb3NzID0gZnYgPT4gbmouc3VtKG5qLmRpdmlkZShuai5wb3dlcihmdiwgMiksIDIpKVxuXG5pbnRlcmZhY2UgVXBkYXRlck9wdGlvbnMge1xuICAgIGRmXG4gICAgdGFyZ2V0XG4gICAgZlxuICAgIHE6IG51bWJlciAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAwIC0+IDEsIHdoZXJlIDAgaXMgU0dEIGFuZCAxIGlzIE5HRC4gMC41IGlzIHNxcnQgTkdELiBbc3RlcCA9IC0gZXRhICogSCBeICgtMS9xKSAqIGddIChIID0gMCB3aGVuIHE9MClcbiAgICBldGE6IG51bWJlciAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gYWthICdsZWFybmluZyByYXRlJ1xuICAgIHN0ZXAybHI6IGQzLlNjYWxlTGluZWFyPG51bWJlciwgbnVtYmVyPlxuICAgIGxvc3Ncbn1cblxuZnVuY3Rpb24gZ2V0T3J0aE1hdHJpeChTKSB7XG4gICAgY29uc3QgdGhldGEgPSAwLjUgKiBNYXRoLmF0YW4yKFMuZ2V0KDAsMSkgKyBTLmdldCgxLDApLCBTLmdldCgwLDApIC0gUy5nZXQoMSwxKSlcbiAgICBjb25zdCBjb3MgPSBNYXRoLmNvcyh0aGV0YSlcbiAgICBjb25zdCBzaW4gPSBNYXRoLnNpbih0aGV0YSlcbiAgICByZXR1cm4gbmouYXJyYXkoW1tjb3MsIC1zaW5dLCBbc2luLCBjb3NdXSlcbn1cblxuaW50ZXJmYWNlIFNWRFJlc3VsdHMgeyBVLCBkLCBWIH1cblxuZnVuY3Rpb24gU1ZEMmQoTSk6IFNWRFJlc3VsdHMge1xuICAgIGNvbnN0IFUgPSBnZXRPcnRoTWF0cml4KG5qLmRvdChNLCBNLlQpKVxuICAgIGxldCBWID0gZ2V0T3J0aE1hdHJpeChuai5kb3QoTS5ULCBNKSlcbiAgICBjb25zdCBwcmVQcmVEaWFnID0gbmouZG90KE0sIFYpXG4gICAgY29uc3QgcHJlRGlhZyA9IG5qLmRvdChVLlQsIG5qLmRvdChNLCBWKSlcbiAgICBsZXQgZCA9IG5qLmFycmF5KFtwcmVEaWFnLmdldCgwLDApLCBwcmVEaWFnLmdldCgxLDEpXSlcbiAgICAvL0B0cy1pZ25vcmVcbiAgICBjb25zdCBkU2lnbiA9IGQudG9saXN0KCkubWFwKHggPT4geCA+PSAwID8gMSA6IC0xKVxuICAgIFYgPSBuai5hcnJheShWLnRvbGlzdCgpLm1hcCgocm93LCBpKSA9PiB7XG4gICAgICAgIHJldHVybiByb3cubWFwKCh4LCBqKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4geCAqIGRTaWduW2pdIFxuICAgICAgICB9KVxuICAgIH0pKVxuICAgIGQgPSBuai5hYnMoZClcbiAgICByZXR1cm4ge1UsIGQsIFZ9XG59XG5cbmV4cG9ydCBjbGFzcyBVcGRhdGVyMkQgZXh0ZW5kcyBCYXNlVXBkYXRlcjJEIHtcbiAgICAvLyBTZXQgRGVmYXVsdCBPcHRpb25zXG4gICAgb3A6IFVwZGF0ZXJPcHRpb25zID0ge1xuICAgICAgICAvL0B0cy1pZ25vcmVcbiAgICAgICAgZjogZGVmYXVsdEVycm9yRnVuY3Rpb24sXG4gICAgICAgIC8vQHRzLWlnbm9yZVxuICAgICAgICBkZjogZGVmYXVsdERmRnVuY3Rpb24sXG4gICAgICAgIHRhcmdldDogbmouYXJyYXkoWzAsMF0pLFxuICAgICAgICBxOiAwLFxuICAgICAgICBldGE6IDAuMSxcbiAgICAgICAgc3RlcDJscjogZGVmYXVsdFN0ZXAyTHIsXG4gICAgICAgIGxvc3M6IGRlZmF1bHRMb3NzLFxuICAgIH1cblxuICAgIGVycm9yKHY6IEFycmF5KTogbmouTmRBcnJheTxudW1iZXI+IHtcbiAgICAgICAgcmV0dXJuIG5qLnN1YnRyYWN0KHRoaXMub3AuZih2KSwgdGhpcy5vcC50YXJnZXQpXG4gICAgfVxuXG4gICAgZHYodjogQXJyYXkpIHtcbiAgICAgICAgY29uc3QgamFjID0gdGhpcy5vcC5kZih2KVxuICAgICAgICBjb25zdCBlcnIgPSB0aGlzLmVycm9yKHYpXG4gICAgICAgIGNvbnN0IHtVLCBkLCBWfSA9IFNWRDJkKGphYylcblxuICAgICAgICBjb25zdCBkRGFtcCA9IG5qLm11bHRpcGx5KGQsIG5qLnBvd2VyKGQsIC0yICogdGhpcy5vcC5xKSlcblxuICAgICAgICBjb25zdCBEID0gbmouYXJyYXkoW1tkRGFtcC5nZXQoMCksIDBdLCBbMCwgZERhbXAuZ2V0KDEpXV0pXG4gICAgICAgIGNvbnN0IHByZUZhYyA9IG5qLmRvdChVLCBEKVxuICAgICAgICBjb25zdCBwb3N0RmFjID0gbmouZG90KFYsIGVycilcbiAgICAgICAgLy9AdHMtaWdub3JlXG4gICAgICAgIGNvbnN0IG91dCA9IG5qLmRvdChwcmVGYWMsIHBvc3RGYWMpXG5cbiAgICAgICAgcmV0dXJuIG91dFxuICAgIH1cblxuICAgIGxyKHY6IEFycmF5KSB7XG4gICAgICAgIGNvbnN0IGR2ID0gdGhpcy5kdih2KVxuICAgICAgICBjb25zdCBhYnNMb3NzID0gTWF0aC5hYnModGhpcy5sb3NzKHYpKVxuICAgICAgICBjb25zdCBlcHMgPSAxZS0xMDtcbiAgICAgICAgLy9AdHMtaWdub3JlXG4gICAgICAgIGNvbnN0IGxyOiBBcnJheSA9IG5qLm11bHRpcGx5KGR2LCB0aGlzLmxyU2NhbGUpLmRpdmlkZShNYXRoLnNxcnQodGhpcy5sb3NzKHYpICsgZXBzKSkgLy8uZGl2aWRlKGFic0xvc3MgKyBlcHMpXG4gICAgICAgIHJldHVybiBsclxuICAgIH1cblxuICAgIC8vIENvbnZlcnQgdG8gYmxvY2sgZGlhZ29uYWwgdXBkYXRlciAvLyBOb3RoaW5nIGRpZmZlcmVudCByblxuICAgIHRvQmxvY2soKTogQmxvY2tVcGRhdGVyMkQge1xuICAgICAgICBjb25zdCBibG9ja1VwZGF0ZXIgPSBuZXcgQmxvY2tVcGRhdGVyMkQodGhpcy5vcClcbiAgICAgICAgcmV0dXJuIGJsb2NrVXBkYXRlclxuICAgIH1cblxuICAgIC8vIENyZWF0ZSBhIG5ldyBmdWxsIHVwZGF0ZXIgZnJvbSB0aGlzIG9iamVjdC4gVXNlZnVsIGlmIG9uZSBvZiB0aGUgZGVyaXZlZCBjbGFzc2VzIG5lZWRzIHRvIGltcGxlbWVudFxuICAgIHRvRnVsbCgpOiBVcGRhdGVyMkQge1xuICAgICAgICBjb25zdCBmdWxsVXBkYXRlciA9IG5ldyBVcGRhdGVyMkQodGhpcy5vcClcbiAgICAgICAgcmV0dXJuIGZ1bGxVcGRhdGVyXG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgQmxvY2tVcGRhdGVyMkQgZXh0ZW5kcyBVcGRhdGVyMkQge1xufSIsImltcG9ydCAqIGFzIGQzIGZyb20gJ2QzJ1xuaW1wb3J0IHsgVUlkIH0gZnJvbSAnLi91dGlsL1VJZCdcbmltcG9ydCB7IENvbnRvdXJQbG90IH0gZnJvbSAnLi92aXMvR2VuZXJhbENvbnRvdXJQbG90J1xuaW1wb3J0IHsgRDNTZWwsIGxpbnNwYWNlIH0gZnJvbSAnLi91dGlsL3hkMydcbmltcG9ydCB7IEdvbGZIb2xlMUQgfSBmcm9tICcuL3Zpcy9Hb2xmSG9sZTFEJ1xuaW1wb3J0IHsgR29sZkxvc3NlcyB9IGZyb20gJy4vdmlzL0dvbGZMb3NzZXMnXG5pbXBvcnQgeyBHb2xmWERpc3QgfSBmcm9tICcuL3Zpcy9Hb2xmWERpc3QnXG5pbXBvcnQgeyBHb2xmQmFsbCB9IGZyb20gJy4vdmlzL0dvbGZCYWxsJ1xuaW1wb3J0IHsgU2ltcGxlTmV0IH0gZnJvbSBcIi4vdmlzL1NpbXBsZU5ldFwiXG5pbXBvcnQgKiBhcyBSIGZyb20gJ3JhbWRhJ1xuaW1wb3J0IHsgU2ltcGxlRXZlbnRIYW5kbGVyIH0gZnJvbSAnLi91dGlsL1NpbXBsZUV2ZW50SGFuZGxlcidcbmltcG9ydCB7IE1hbnVhbFVwZGF0ZXIgfSBmcm9tICcuL3Zpcy9NYW51YWxVcGRhdGVyJ1xuaW1wb3J0IHsgbGFuZHNjYXBlcyB9IGZyb20gJy4vR29sZkxhbmRzY2FwZXMnXG5pbXBvcnQgeyBsYW5kc2NhcGVzMmQgfSBmcm9tICcuL0xhbmRzY2FwZXMyRCdcbmltcG9ydCB7IEFycmF5IH0gZnJvbSAnLi90eXBlcydcbmltcG9ydCB7IFF1YWRyYXRpY1Bsb3RzIH0gZnJvbSBcIi4vdmlzL1F1YWRyYXRpY1Bsb3RzXCJcbmltcG9ydCB7IExvc3NTdXJmYWNlMkQgfSBmcm9tIFwiLi92aXMvTG9zc1N1cmZhY2UyRFwiXG5pbXBvcnQgKiBhcyBuaiBmcm9tIFwibnVtanNcIlxuXG5jb25zdCB0b0ZpeGVkID0gUi5jdXJyeSgobmRpZ2l0cywgeCkgPT4geC50b0ZpeGVkKG5kaWdpdHMpKVxuY29uc3QgdG9RID0gdG9GaXhlZCgxKVxuY29uc3QgdG9FdGEgPSB0b0ZpeGVkKDQpXG5cbmZ1bmN0aW9uIHBsb3RFbGxpcHRpY2FsKCkge1xuICAgIGNvbnN0IHZpczAgPSBkMy5zZWxlY3QoJyN2aXMwJylcbiAgICBjb25zdCBzZWxzID0ge1xuICAgICAgICBxdWl2ZXJQbG90OiB2aXMwLnNlbGVjdCgnI2NoYXJ0JyksXG4gICAgICAgIHFJZDogdmlzMC5zZWxlY3QoJyNxLXZhbCcpLFxuICAgICAgICBldGFJZDogdmlzMC5zZWxlY3QoJyNldGEtdmFsJyksXG4gICAgICAgIHFTbGlkZXI6IHZpczAuc2VsZWN0KCcjcS1zbGlkZXInKSxcbiAgICAgICAgZXRhU2xpZGVyOiB2aXMwLnNlbGVjdCgnI2V0YS1zbGlkZXInKSxcbiAgICAgICAgaGVzc1R5cGU6IHZpczAuc2VsZWN0KCcjaGVzcy10eXBlJyksXG4gICAgfVxuICAgIGNvbnN0IGV2ZW50SGFuZGxlciA9IG5ldyBTaW1wbGVFdmVudEhhbmRsZXIoPEVsZW1lbnQ+dmlzMC5ub2RlKCkpXG5cbiAgICBjb25zdCB2aXpzID0ge1xuICAgICAgICBncmFwaDogQ29udG91clBsb3QuZnJvbUxhbmRzY2FwZShzZWxzLnF1aXZlclBsb3QsIGV2ZW50SGFuZGxlciwgbGFuZHNjYXBlczJkLkVsbGlwdGljYWwpLFxuICAgIH1cblxuICAgIGNvbnN0IGRlZmF1bHRzID0ge1xuICAgICAgICAvLyBOb3RlIHRvIGFsc28gY2hhbmdlIHRoZSBkZWZhdWx0IHZhbHVlIGluIHRoZSBodG1sIGZpbGUhXG4gICAgICAgIHE6IDAsXG4gICAgICAgIGV0YTogMC4wNVxuICAgIH1cblxuICAgIGNvbnN0IHNjYWxlcyA9IHtcbiAgICAgICAgcTogZDMuc2NhbGVMaW5lYXIoKS5yYW5nZShbMCwgMTBdKS5kb21haW4oWzAsIDFdKSxcbiAgICAgICAgZXRhOiBkMy5zY2FsZUxpbmVhcigpLnJhbmdlKFsxLCAxMDAwXSkuZG9tYWluKFtNYXRoLnBvdygxMCwgLTUpLCAwLjZdKVxuICAgIH1cblxuICAgIC8vIEluaXRpYWxpemUgZ3JhcGggcGFyYW1ldGVycyB0byBtYXRjaCB0aGUgZGVmYXVsdHNcbiAgICB2aXpzLmdyYXBoLnEoZGVmYXVsdHMucSlcbiAgICB2aXpzLmdyYXBoLmV0YShkZWZhdWx0cy5ldGEpXG4gICAgc2Vscy5xU2xpZGVyLnByb3BlcnR5KCd2YWx1ZScsIHNjYWxlcy5xKGRlZmF1bHRzLnEpKVxuICAgIHNlbHMuZXRhU2xpZGVyLnByb3BlcnR5KCd2YWx1ZScsIHNjYWxlcy5ldGEoZGVmYXVsdHMuZXRhKSlcblxuICAgIHNlbHMucUlkLnRleHQodG9RKGRlZmF1bHRzLnEpKVxuICAgIHNlbHMuZXRhSWQudGV4dCh0b0V0YShkZWZhdWx0cy5ldGEpKVxuXG4gICAgc2Vscy5xU2xpZGVyLm9uKCdpbnB1dCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc3QgbWUgPSBkMy5zZWxlY3QodGhpcylcbiAgICAgICAgY29uc3QgdiA9IHNjYWxlcy5xLmludmVydCgrbWUucHJvcGVydHkoJ3ZhbHVlJykpO1xuICAgICAgICB2aXpzLmdyYXBoLnEodik7XG4gICAgICAgIHNlbHMucUlkLnRleHQoYCR7dG9RKHYpfWApXG4gICAgfSlcblxuICAgIHNlbHMuZXRhU2xpZGVyLm9uKCdpbnB1dCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc3QgbWUgPSBkMy5zZWxlY3QodGhpcylcbiAgICAgICAgY29uc3QgdiA9IHNjYWxlcy5ldGEuaW52ZXJ0KG1lLnByb3BlcnR5KCd2YWx1ZScpKTtcbiAgICAgICAgdml6cy5ncmFwaC5ldGEodilcbiAgICAgICAgc2Vscy5ldGFJZC50ZXh0KGAke3RvRXRhKHYpfWApXG4gICAgfSlcblxuICAgIHNlbHMuaGVzc1R5cGUub24oJ2lucHV0JywgZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zdCBzZWxmID0gZDMuc2VsZWN0KHRoaXMpXG4gICAgICAgIGNvbnN0IHYgPSBzZWxmLnByb3BlcnR5KCd2YWx1ZScpXG4gICAgICAgIHZpenMuZ3JhcGguc2V0VXBkYXRlcih2KVxuICAgIH0pXG59XG5cbmZ1bmN0aW9uIHBsb3RKYWdnZWRMb3NzMkQoKSB7XG4gICAgY29uc3QgdmlzID0gZDMuc2VsZWN0KFwiI3Zpcy0yZC1sb3NzXCIpXG4gICAgY29uc3QgZXZlbnRIYW5kbGVyID0gbmV3IFNpbXBsZUV2ZW50SGFuZGxlcig8RWxlbWVudD52aXMubm9kZSgpKVxuICAgIGNvbnN0IHNlbHMgPSB7XG4gICAgICAgIHBsb3Q6IHZpcy5zZWxlY3QoXCIjbG9zcy0yZFwiKVxuICAgIH1cblxuICAgIGNvbnN0IHZpenMgPSB7XG4gICAgICAgIHBsb3Q6IG5ldyBMb3NzU3VyZmFjZTJEKHNlbHMucGxvdCwgZXZlbnRIYW5kbGVyKVxuICAgIH1cbn1cblxuZnVuY3Rpb24gcGxvdFF1YWRyYXRpY0Z1bmNzKCkge1xuICAgIGNvbnN0IHZpcyA9IGQzLnNlbGVjdChcIiN2aXMtcXVhZFwiKVxuICAgIGNvbnN0IGV2ZW50SGFuZGxlciA9IG5ldyBTaW1wbGVFdmVudEhhbmRsZXIoPEVsZW1lbnQ+dmlzLm5vZGUoKSlcblxuICAgIGNvbnN0IHNlbHMgPSB7XG4gICAgICAgIHF1YWRQbG90OiB2aXMuc2VsZWN0KFwiI3F1YWQtcGxvdFwiKVxuICAgIH1cblxuICAgIGNvbnN0IHZpenMgPSB7XG4gICAgICAgIHF1YWRQbG90OiBuZXcgUXVhZHJhdGljUGxvdHMoc2Vscy5xdWFkUGxvdCwgZXZlbnRIYW5kbGVyKVxuICAgIH1cblxuICAgIHZpenMucXVhZFBsb3QuZGF0YShbMSAvIDEuNCwgMSwgMS40XSlcbn1cblxuZnVuY3Rpb24gcGxvdFF1aXZlckdyYXBoKCkge1xuICAgIGNvbnN0IHZpczEgPSBkMy5zZWxlY3QoJyN2aXMxJylcbiAgICBjb25zdCBzZWxzID0ge1xuICAgICAgICBxdWl2ZXJQbG90OiB2aXMxLnNlbGVjdCgnI2NoYXJ0JyksXG4gICAgICAgIHFJZDogdmlzMS5zZWxlY3QoJyNxLXZhbCcpLFxuICAgICAgICBldGFJZDogdmlzMS5zZWxlY3QoJyNldGEtdmFsJyksXG4gICAgICAgIHFTbGlkZXI6IHZpczEuc2VsZWN0KCcjcS1zbGlkZXInKSxcbiAgICAgICAgZXRhU2xpZGVyOiB2aXMxLnNlbGVjdCgnI2V0YS1zbGlkZXInKSxcbiAgICAgICAgaGVzc1R5cGU6IHZpczEuc2VsZWN0KCcjaGVzcy10eXBlJyksXG4gICAgICAgIHNpbXBsZU5ldDogdmlzMS5zZWxlY3QoXCIjc2ltcGxlLW5ldC1jb250YWluZXJcIiksXG4gICAgfVxuICAgIGNvbnN0IGV2ZW50SGFuZGxlciA9IG5ldyBTaW1wbGVFdmVudEhhbmRsZXIoPEVsZW1lbnQ+dmlzMS5ub2RlKCkpXG5cbiAgICBjb25zdCB2aXpzID0ge1xuICAgICAgICBncmFwaDogQ29udG91clBsb3QuZnJvbUxhbmRzY2FwZShzZWxzLnF1aXZlclBsb3QsIGV2ZW50SGFuZGxlciwgbGFuZHNjYXBlczJkLlNpbXBsZU5ldDJEKSxcbiAgICAgICAgLy8gZ3JhcGg6IENvbnRvdXJQbG90LmZyb21MYW5kc2NhcGUoc2Vscy5xdWl2ZXJQbG90LCBldmVudEhhbmRsZXIsIGxhbmRzY2FwZXMyZC5FbGxpcHRpY2FsKSwgLy8gQlJPS0VOIFdoeT9cbiAgICAgICAgc2ltcGxlTmV0OiBuZXcgU2ltcGxlTmV0KHNlbHMuc2ltcGxlTmV0LCBldmVudEhhbmRsZXIpXG4gICAgfVxuXG4gICAgY29uc3QgZGVmYXVsdHMgPSB7XG4gICAgICAgIC8vIE5vdGUgdG8gYWxzbyBjaGFuZ2UgdGhlIGRlZmF1bHQgdmFsdWUgaW4gdGhlIGh0bWwgZmlsZSFcbiAgICAgICAgcTogMCxcbiAgICAgICAgZXRhOiAwLjA1XG4gICAgfVxuXG4gICAgY29uc3Qgc2NhbGVzID0ge1xuICAgICAgICBxOiBkMy5zY2FsZUxpbmVhcigpLnJhbmdlKFswLCAxMF0pLmRvbWFpbihbMCwgMV0pLFxuICAgICAgICBldGE6IGQzLnNjYWxlTGluZWFyKCkucmFuZ2UoWzEsIDEwMDBdKS5kb21haW4oW01hdGgucG93KDEwLCAtNSksIDAuNl0pXG4gICAgfVxuXG4gICAgLy8gQWRkIGNlbnRlciBsaW5lXG4gICAgY29uc3QgeHJhbmdlID0gbGluc3BhY2UoMC42LCAxLjYsIHZpenMuZ3JhcGgub3B0aW9ucy5tKVxuICAgIGNvbnN0IGVwcyA9IDAuMDAwMVxuICAgIGNvbnN0IGZpdExpbmUgPSB4ID0+IDEgLyAoeCArIGVwcyk7XG4gICAgY29uc3QgY2VudGVyQ29udG91ciA9IGQzLmxpbmUoKVxuICAgICAgICAueChkID0+IHZpenMuZ3JhcGguc2NhbGVzLnguY2xhbXAodHJ1ZSkoZFswXSkpXG4gICAgICAgIC55KGQgPT4gdml6cy5ncmFwaC5zY2FsZXMueS5jbGFtcCh0cnVlKShmaXRMaW5lKGRbMF0pKSlcblxuICAgIGNvbnN0IG1haW5GaXQgPSB2aXpzLmdyYXBoLmJhc2VcbiAgICAgICAgLmFwcGVuZChcInBhdGhcIilcbiAgICAgICAgLmNsYXNzZWQoXCJtYWluLWZpdFwiLCB0cnVlKVxuICAgICAgICAvLyBpIGRvZXNuJ3QgbWF0dGVyLCBuZWVkIGZpbGxlciBmb3IgbGluZSB0byB3b3JrXG4gICAgICAgIC5hdHRyKFwiZFwiLCBjZW50ZXJDb250b3VyKHhyYW5nZS5tYXAoKHgsIGkpID0+IFt4LCBpXSkpKVxuXG4gICAgLy8gSW5pdGlhbGl6ZSBncmFwaCBwYXJhbWV0ZXJzIHRvIG1hdGNoIHRoZSBkZWZhdWx0c1xuICAgIHZpenMuZ3JhcGgucShkZWZhdWx0cy5xKVxuICAgIHZpenMuZ3JhcGguZXRhKGRlZmF1bHRzLmV0YSlcbiAgICBzZWxzLnFTbGlkZXIucHJvcGVydHkoJ3ZhbHVlJywgc2NhbGVzLnEoZGVmYXVsdHMucSkpXG4gICAgc2Vscy5ldGFTbGlkZXIucHJvcGVydHkoJ3ZhbHVlJywgc2NhbGVzLmV0YShkZWZhdWx0cy5ldGEpKVxuXG4gICAgc2Vscy5xSWQudGV4dCh0b1EoZGVmYXVsdHMucSkpXG4gICAgc2Vscy5ldGFJZC50ZXh0KHRvRXRhKGRlZmF1bHRzLmV0YSkpXG5cbiAgICBzZWxzLnFTbGlkZXIub24oJ2lucHV0JywgZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zdCBtZSA9IGQzLnNlbGVjdCh0aGlzKVxuICAgICAgICBjb25zdCB2ID0gc2NhbGVzLnEuaW52ZXJ0KCttZS5wcm9wZXJ0eSgndmFsdWUnKSk7XG4gICAgICAgIHZpenMuZ3JhcGgucSh2KTtcbiAgICAgICAgc2Vscy5xSWQudGV4dChgJHt0b1Eodil9YClcbiAgICB9KVxuXG4gICAgc2Vscy5ldGFTbGlkZXIub24oJ2lucHV0JywgZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zdCBtZSA9IGQzLnNlbGVjdCh0aGlzKVxuICAgICAgICBjb25zdCB2ID0gc2NhbGVzLmV0YS5pbnZlcnQobWUucHJvcGVydHkoJ3ZhbHVlJykpO1xuICAgICAgICB2aXpzLmdyYXBoLmV0YSh2KVxuICAgICAgICBzZWxzLmV0YUlkLnRleHQoYCR7dG9FdGEodil9YClcbiAgICB9KVxuXG4gICAgc2Vscy5oZXNzVHlwZS5vbignaW5wdXQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnN0IHNlbGYgPSBkMy5zZWxlY3QodGhpcylcbiAgICAgICAgY29uc3QgdiA9IHNlbGYucHJvcGVydHkoJ3ZhbHVlJylcbiAgICAgICAgdml6cy5ncmFwaC5zZXRVcGRhdGVyKHYpXG4gICAgfSlcblxuICAgIC8vIENhdGNoIGV2ZW50IG9mIHN0ZXBcbiAgICBldmVudEhhbmRsZXIuYmluZChDb250b3VyUGxvdC5ldmVudHMuc3RlcEFkZGVkLCAodjogQXJyYXkpID0+IHtcbiAgICAgICAgdml6cy5zaW1wbGVOZXQuc2V0U3RhdGUodilcbiAgICB9KVxufVxuXG5mdW5jdGlvbiBwbG90R29sZkhvbGUzQmFsbCgpIHtcbiAgICBjb25zdCB2aXMyID0gZDMuc2VsZWN0KFwiI3ZpczJcIik7XG4gICAgY29uc3Qgc2VscyA9IHtcbiAgICAgICAgY2hhcnQ6IHZpczIuc2VsZWN0KCcjY2hhcnQnKSxcbiAgICAgICAgY2hhcnRYRGlzdDogdmlzMi5zZWxlY3QoJyNjaGFydC14ZGlzdCcpLFxuICAgICAgICBjaGFydExvc3NlczogdmlzMi5zZWxlY3QoJyNjaGFydC1sb3NzZXMnKSxcbiAgICAgICAgbGFuZHNjYXBlU2VsZWN0b3I6IHZpczIuc2VsZWN0KCcubGFuZHNjYXBlLXNlbGVjdCcpLFxuICAgIH1cblxuICAgIGNvbnN0IGV2ZW50SGFuZGxlciA9IG5ldyBTaW1wbGVFdmVudEhhbmRsZXIoPEVsZW1lbnQ+dmlzMi5ub2RlKCkpXG4gICAgY29uc3Qgdml6cyA9IHtcbiAgICAgICAgZ3JhcGg6IG5ldyBHb2xmSG9sZTFEKHNlbHMuY2hhcnQsIGV2ZW50SGFuZGxlciwge30sIFVJZC51aWQoKSksXG4gICAgICAgIGNoYXJ0WERpc3Q6IG5ldyBHb2xmWERpc3Qoc2Vscy5jaGFydFhEaXN0LCBldmVudEhhbmRsZXIpLFxuICAgICAgICBjaGFydExvc3NlczogbmV3IEdvbGZMb3NzZXMoc2Vscy5jaGFydExvc3NlcywgZXZlbnRIYW5kbGVyKSxcbiAgICB9XG5cbiAgICBpbnRlcmZhY2UgR29sZkRlZmF1bHRzIHtcbiAgICAgICAgbGFuZHNjYXBlOiBzdHJpbmdcbiAgICAgICAgcXM6IG51bWJlcltdXG4gICAgICAgIGNsYXNzTmFtZXM6IHN0cmluZ1tdXG4gICAgICAgIGV0YXM/OiBudW1iZXJbXVxuICAgIH1cblxuICAgIC8vIENvcnJlc3BvbmRzIHRvIHFzID0gWzAsIDAuNSwgMV1cbiAgICBjb25zdCBkZWZhdWx0RXRhID0ge1xuICAgICAgICBzZWFndWxsOiBbMC4wMDUsIDAuMDA1LCAwLjAwNV0sXG4gICAgICAgIGhvbGU6IFswLjAwNSwgMC4wMDUsIDAuMDA1XSxcbiAgICAgICAgc3RlcHM6IFswLjAwNSwgMC4wMDUsIDAuMDA1XSxcbiAgICAgICAgYm93bDogWzAuMDMsIDAuMDMsIDAuMDNdLFxuICAgICAgICBkZWVwX25ldDogWzAuMDEsIDAuMDEsIDAuMDFdLFxuICAgIH1cblxuICAgIGNvbnN0IGRlZmF1bHRzOiBHb2xmRGVmYXVsdHMgPSB7XG4gICAgICAgIGxhbmRzY2FwZTogXCJzZWFndWxsXCIsXG4gICAgICAgIHFzOiBbMCwgMC41LCAxXSxcbiAgICAgICAgY2xhc3NOYW1lczogWydnb2xmLWJhbGwtc2dkJywgJ2dvbGYtYmFsbC1zbmdkJywgJ2dvbGYtYmFsbC1uZ2QnXSwgLy8gRG9uJ3QgY2hhbmdlIHRoZXNlIHVubGVzcyB5b3Ugd2FudCB0byBwbGF5IHdpdGggQ1NTISFcbiAgICB9XG4gICAgZGVmYXVsdHMuZXRhcyA9IGRlZmF1bHRFdGFbZGVmYXVsdHMubGFuZHNjYXBlXVxuXG4gICAgY29uc3QgZGVmYXVsdExhbmRzY2FwZSA9IGxhbmRzY2FwZXNbZGVmYXVsdHMubGFuZHNjYXBlXVxuXG4gICAgLy9AdHMtaWdub3JlXG4gICAgY29uc3QgZGVmYXVsdEJhbGxzID0gZDMuemlwKGRlZmF1bHRzLnFzLCBkZWZhdWx0cy5ldGFzLCBkZWZhdWx0cy5jbGFzc05hbWVzKS5tYXAoKHgpID0+IG5ldyBHb2xmQmFsbChuZXcgTWFudWFsVXBkYXRlcihkZWZhdWx0TGFuZHNjYXBlLmYsIGRlZmF1bHRMYW5kc2NhcGUuZGYsIHhbMF0sIHhbMV0pLCB4WzJdKSlcblxuICAgIHZpenMuZ3JhcGguZGF0YShkZWZhdWx0QmFsbHMpXG5cbiAgICAvLyBBdHRhY2ggZ29sZmJhbGwgaW5mbyB0byBsb3NzIHRyYWNrZXJcbiAgICBldmVudEhhbmRsZXIuYmluZCgnbG9zcy1jbGljaycsIChlKSA9PiB7XG4gICAgICAgIHZpenMuY2hhcnRYRGlzdC5jbGVhclBhdGhzKClcbiAgICAgICAgdml6cy5jaGFydExvc3Nlcy5jbGVhclBhdGhzKClcbiAgICB9KVxuXG4gICAgLy8gQ29uZmlndXJlIGh0bWwgcGFnZSB0byB3b3JrIHdpdGggZGVmYXVsdHNcbiAgICBzZWxzLmxhbmRzY2FwZVNlbGVjdG9yLnByb3BlcnR5KCd2YWx1ZScsIGRlZmF1bHRzLmxhbmRzY2FwZSlcbiAgICB2aXpzLmdyYXBoLmxhbmRzY2FwZShsYW5kc2NhcGVzW2RlZmF1bHRzLmxhbmRzY2FwZV0pXG5cbiAgICBsZXQgcnVubmluZ1N0cmVhbXMgPSBbXVxuXG4gICAgLy8gQXNzaWduIHN0cmVhbXNcbiAgICBjb25zdCBhc3NpZ25TdHJlYW1zID0gKGdyYXBoOiBHb2xmSG9sZTFELCBjdXJyZW50U3RyZWFtcyA9IFtdKSA9PiB7XG4gICAgICAgIGNvbnN0IHN0cmVhbXMgPSBncmFwaC5kYXRhKCkubWFwKGIgPT4gYi5zdHJlYW0pXG5cbiAgICAgICAgY29uc3QgcGxvdHRlciA9IHtcbiAgICAgICAgICAgIG5leHQ6IGQgPT4ge1xuICAgICAgICAgICAgICAgIHZpenMuY2hhcnRYRGlzdC5wbG90UGF0aChkLCBncmFwaC5zY2FsZXMuYmFzZTJtYXRoLnguaW52ZXJ0KVxuICAgICAgICAgICAgICAgIHZpenMuY2hhcnRMb3NzZXMucGxvdFBhdGgoZCwgZ3JhcGguc2NhbGVzLmJhc2UybG9zcylcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGN1cnJlbnRTdHJlYW1zLmZvckVhY2gocyA9PiBzLnVuc3Vic2NyaWJlKCkpXG5cbiAgICAgICAgY29uc3QgYWN0aXZhdGVkU3RyZWFtcyA9IHN0cmVhbXMubWFwKHMgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHMuc3Vic2NyaWJlKHBsb3R0ZXIpXG4gICAgICAgIH0pXG4gICAgICAgIHJldHVybiBhY3RpdmF0ZWRTdHJlYW1zXG4gICAgfVxuXG4gICAgLy8gR2F0aGVyIGludGVyYWN0aXZpdHkgZm9yIHRoZSBnb2xmIGJhbGwgcGxvdFxuICAgIHNlbHMubGFuZHNjYXBlU2VsZWN0b3Iub24oJ2lucHV0JywgZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zdCBzZWxmID0gZDMuc2VsZWN0KHRoaXMpXG4gICAgICAgIGNvbnN0IHYgPSBzZWxmLnByb3BlcnR5KCd2YWx1ZScpXG4gICAgICAgIHZpenMuY2hhcnRMb3NzZXMucmVzZXRYcmFuZ2VfKClcbiAgICAgICAgdml6cy5jaGFydFhEaXN0LnJlc2V0WHJhbmdlXygpXG4gICAgICAgIHZpenMuZ3JhcGgubGFuZHNjYXBlKGxhbmRzY2FwZXNbdl0pXG4gICAgICAgIHZpenMuZ3JhcGguZGF0YUZyb21CYXNlKHZpenMuZ3JhcGguZGF0YVRvQmFzZV8oKSlcbiAgICAgICAgcnVubmluZ1N0cmVhbXMgPSBhc3NpZ25TdHJlYW1zKHZpenMuZ3JhcGgsIHJ1bm5pbmdTdHJlYW1zKVxuICAgIH0pXG4gICAgcnVubmluZ1N0cmVhbXMgPSBhc3NpZ25TdHJlYW1zKHZpenMuZ3JhcGgsIHJ1bm5pbmdTdHJlYW1zKVxufVxuXG5mdW5jdGlvbiBwbG90R29sZkhvbGVTbGlkZXIoKSB7XG4gICAgY29uc3QgdmlzMyA9IGQzLnNlbGVjdChcIiN2aXMzXCIpO1xuXG4gICAgY29uc3Qgc2VscyA9IHtcbiAgICAgICAgY2hhcnQ6IHZpczMuc2VsZWN0KCcjY2hhcnQnKSxcbiAgICAgICAgY2hhcnRMb3NzZXM6IHZpczMuc2VsZWN0KCcjY2hhcnQtbG9zc2VzJyksXG4gICAgICAgIGNoYXJ0WERpc3Q6IHZpczMuc2VsZWN0KCcjY2hhcnQteGRpc3QnKSxcbiAgICAgICAgcUlkOiB2aXMzLnNlbGVjdCgnI3EtdmFsJyksXG4gICAgICAgIGV0YUlkOiB2aXMzLnNlbGVjdCgnI2V0YS12YWwnKSxcbiAgICAgICAgcVNsaWRlcjogdmlzMy5zZWxlY3QoJyNxLXNsaWRlcicpLFxuICAgICAgICBldGFTbGlkZXI6IHZpczMuc2VsZWN0KCcjZXRhLXNsaWRlcicpLFxuICAgICAgICBsYW5kc2NhcGVTZWxlY3RvcjogdmlzMy5zZWxlY3QoJy5sYW5kc2NhcGUtc2VsZWN0JylcbiAgICB9XG5cbiAgICBjb25zdCBldmVudEhhbmRsZXIgPSBuZXcgU2ltcGxlRXZlbnRIYW5kbGVyKDxFbGVtZW50PnZpczMubm9kZSgpKVxuXG4gICAgY29uc3Qgdml6cyA9IHtcbiAgICAgICAgZ3JhcGg6IG5ldyBHb2xmSG9sZTFEKHNlbHMuY2hhcnQsIGV2ZW50SGFuZGxlciwgeyBtYXhJdGVyOiAxLjVlMyB9LCBVSWQudWlkKCkpLFxuICAgICAgICBjaGFydExvc3NlczogbmV3IEdvbGZMb3NzZXMoc2Vscy5jaGFydExvc3NlcywgZXZlbnRIYW5kbGVyKSxcbiAgICAgICAgY2hhcnRYRGlzdDogbmV3IEdvbGZYRGlzdChzZWxzLmNoYXJ0WERpc3QsIGV2ZW50SGFuZGxlcilcbiAgICB9XG5cbiAgICBjb25zdCBkZWZhdWx0cyA9IHtcbiAgICAgICAgLy8gTm90ZSB0byBhbHNvIGNoYW5nZSB0aGUgZGVmYXVsdCB2YWx1ZSBpbiB0aGUgaHRtbCBmaWxlIVxuICAgICAgICBsYW5kc2NhcGU6IFwic2VhZ3VsbFwiLFxuICAgICAgICBxOiAwLjUsXG4gICAgICAgIGV0YTogMC4wMVxuICAgIH1cblxuICAgIC8vIEF0dGFjaCBnb2xmYmFsbCBpbmZvIHRvIGxvc3MgdHJhY2tlclxuICAgIGV2ZW50SGFuZGxlci5iaW5kKCdsb3NzLWNsaWNrJywgKGUpID0+IHtcbiAgICAgICAgdml6cy5jaGFydFhEaXN0LmNsZWFyUGF0aHMoKVxuICAgICAgICB2aXpzLmNoYXJ0TG9zc2VzLmNsZWFyUGF0aHMoKVxuICAgIH0pXG5cbiAgICAvLyBQdXQgZGF0YSBpbnRvIHZpelxuICAgIHZpenMuZ3JhcGguZGF0YShbbmV3IEdvbGZCYWxsKG5ldyBNYW51YWxVcGRhdGVyKGxhbmRzY2FwZXMuaG9sZS5mLCBsYW5kc2NhcGVzLmhvbGUuZGYsIGRlZmF1bHRzLnEsIGRlZmF1bHRzLmV0YSksIFwiZ29sZi1iYWxsXCIpXSlcblxuICAgIC8vIGNvbnN0IGV0YVJhbmdlID0gWy01LCAyXS5tYXAoeCA9PiBNYXRoLnBvdygxMCwgeCkpXG4gICAgY29uc3QgZXRhUmFuZ2UgPSBbLTMsIDBdLm1hcCh4ID0+IE1hdGgucG93KDEwLCB4KSlcbiAgICBjb25zdCBzY2FsZXMgPSB7XG4gICAgICAgIHE6IGQzLnNjYWxlTGluZWFyKCkucmFuZ2UoWzAsIDEwXSkuZG9tYWluKFswLCAxXSksXG4gICAgICAgIGV0YTogZDMuc2NhbGVMb2coKS5yYW5nZShbMSwgMTAwMF0pLmRvbWFpbihldGFSYW5nZSkuYmFzZSgxMClcbiAgICB9XG5cbiAgICAvLyBJbml0aWFsaXplIGdyYXBoIHBhcmFtZXRlcnMgdG8gbWF0Y2ggdGhlIGRlZmF1bHRzXG4gICAgdml6cy5ncmFwaC5sYW5kc2NhcGUobGFuZHNjYXBlc1tkZWZhdWx0cy5sYW5kc2NhcGVdKVxuICAgIHNlbHMubGFuZHNjYXBlU2VsZWN0b3IucHJvcGVydHkoJ3ZhbHVlJywgZGVmYXVsdHMubGFuZHNjYXBlKVxuXG4gICAgc2Vscy5xU2xpZGVyLnByb3BlcnR5KCd2YWx1ZScsIHNjYWxlcy5xKGRlZmF1bHRzLnEpKVxuICAgIHNlbHMuZXRhU2xpZGVyLnByb3BlcnR5KCd2YWx1ZScsIHNjYWxlcy5ldGEoZGVmYXVsdHMuZXRhKSlcbiAgICBzZWxzLnFJZC50ZXh0KHRvUShkZWZhdWx0cy5xKSlcbiAgICBzZWxzLmV0YUlkLnRleHQodG9FdGEoZGVmYXVsdHMuZXRhKSlcblxuICAgIC8vIEFzc2lnbiBzdHJlYW1zXG4gICAgbGV0IHJ1bm5pbmdTdHJlYW1zID0gW11cbiAgICBjb25zdCBhc3NpZ25TdHJlYW1zID0gKGdyYXBoOiBHb2xmSG9sZTFELCBjdXJyZW50U3RyZWFtcyA9IFtdKSA9PiB7XG4gICAgICAgIGNvbnN0IHN0cmVhbXMgPSBncmFwaC5kYXRhKCkubWFwKGIgPT4gYi5zdHJlYW0pXG5cbiAgICAgICAgY29uc3QgcGxvdHRlciA9IHtcbiAgICAgICAgICAgIG5leHQ6IGQgPT4ge1xuICAgICAgICAgICAgICAgIHZpenMuY2hhcnRYRGlzdC5wbG90UGF0aChkLCBncmFwaC5zY2FsZXMuYmFzZTJtYXRoLnguaW52ZXJ0KVxuICAgICAgICAgICAgICAgIHZpenMuY2hhcnRMb3NzZXMucGxvdFBhdGgoZCwgZ3JhcGguc2NhbGVzLmJhc2UybG9zcylcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGN1cnJlbnRTdHJlYW1zLmZvckVhY2gocyA9PiBzLnVuc3Vic2NyaWJlKCkpXG5cbiAgICAgICAgY29uc3QgYWN0aXZhdGVkU3RyZWFtcyA9IHN0cmVhbXMubWFwKHMgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHMuc3Vic2NyaWJlKHBsb3R0ZXIpXG4gICAgICAgIH0pXG5cbiAgICAgICAgcmV0dXJuIGFjdGl2YXRlZFN0cmVhbXNcbiAgICB9XG5cbiAgICAvLyBBZGp1c3Qgc2xpZGVyIHJlYWN0aXZpdHlcbiAgICBzZWxzLnFTbGlkZXIub24oJ2lucHV0JywgZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zdCBtZSA9IGQzLnNlbGVjdCh0aGlzKVxuICAgICAgICBjb25zdCB2ID0gc2NhbGVzLnEuaW52ZXJ0KG1lLnByb3BlcnR5KCd2YWx1ZScpKTtcbiAgICAgICAgdml6cy5ncmFwaC5xKHYpXG4gICAgICAgIHNlbHMucUlkLnRleHQoYCR7dG9RKHYpfWApXG4gICAgfSlcblxuICAgIHNlbHMuZXRhU2xpZGVyLm9uKCdpbnB1dCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc3QgbWUgPSBkMy5zZWxlY3QodGhpcylcbiAgICAgICAgY29uc3QgdiA9IHNjYWxlcy5ldGEuaW52ZXJ0KG1lLnByb3BlcnR5KCd2YWx1ZScpKTtcbiAgICAgICAgdml6cy5ncmFwaC5ldGEodilcbiAgICAgICAgc2Vscy5ldGFJZC50ZXh0KGAke3RvRXRhKHYpfWApXG4gICAgfSlcblxuICAgIHNlbHMubGFuZHNjYXBlU2VsZWN0b3Iub24oJ2lucHV0JywgZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zdCBzZWxmID0gZDMuc2VsZWN0KHRoaXMpXG4gICAgICAgIGNvbnN0IHYgPSBzZWxmLnByb3BlcnR5KCd2YWx1ZScpXG4gICAgICAgIHZpenMuY2hhcnRMb3NzZXMucmVzZXRYcmFuZ2VfKClcbiAgICAgICAgdml6cy5jaGFydFhEaXN0LnJlc2V0WHJhbmdlXygpXG4gICAgICAgIHZpenMuZ3JhcGgubGFuZHNjYXBlKGxhbmRzY2FwZXNbdl0pXG4gICAgICAgIHZpenMuZ3JhcGguZGF0YUZyb21CYXNlKHZpenMuZ3JhcGguZGF0YVRvQmFzZV8oKSlcbiAgICAgICAgcnVubmluZ1N0cmVhbXMgPSBhc3NpZ25TdHJlYW1zKHZpenMuZ3JhcGgsIHJ1bm5pbmdTdHJlYW1zKVxuICAgIH0pXG4gICAgcnVubmluZ1N0cmVhbXMgPSBhc3NpZ25TdHJlYW1zKHZpenMuZ3JhcGgsIHJ1bm5pbmdTdHJlYW1zKVxufVxuXG5mdW5jdGlvbiB0ZXN0aW5nKCkge1xuICAgIGNvbnNvbGUubG9nKFwiVEVTVFwiKTtcbiAgICAvLyBsZXQgQSA9IG5qLmFycmF5KFtbMSwyXSwgWzIsMV1dKVxuICAgIC8vIGxldCB2ID0gbmouYXJyYXkoWzEsM10pXG4gICAgLy8gY29uc3QgdXAgPSBuZXcgVXBkYXRlcjJEKClcblxuICAgIC8vIGNvbnNvbGUubG9nKFwiTFI6IFwiLCB1cC5scih2KSk7XG4gICAgLy8gY29uc29sZS5sb2coXCJHcmFkaWVudDogXCIsIHVwLmdyYWRpZW50KHYpKTtcbiAgICAvLyBjb25zb2xlLmxvZyhcIkVSUjogXCIsIHVwLl9mKHYpKTtcblxuICAgIC8vIGNvbnNvbGUubG9nKFwiTkogQXJyYXkgSW5jZXB0aW9uOiBcIiwgbmouYXJyYXkodikpXG4gICAgLy8gLy8gbGV0IHYgPSBuai5hcnJheShbMSwyXSlcbiAgICAvLyBsZXQgdjIgPSBuai5hcnJheShbNCw1XSlcbiAgICAvLyBjb25zb2xlLmxvZyh2KTtcblxuICAgIC8vIC8vQHRzLWlnbm9yZVxuICAgIC8vIGNvbnNvbGUubG9nKG5qLmRvdChBLCB2KSk7XG5cbiAgICBjb25zb2xlLmxvZyhcIkVORCBURVNUXCIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWFpbigpIHtcbiAgICB0ZXN0aW5nKClcblxuICAgIHBsb3RRdWFkcmF0aWNGdW5jcygpO1xuICAgIHBsb3RFbGxpcHRpY2FsKCk7XG4gICAgcGxvdFF1aXZlckdyYXBoKCk7XG4gICAgLy8gcGxvdEdvbGZIb2xlM0JhbGwoKTtcbiAgICAvLyBwbG90R29sZkhvbGVTbGlkZXIoKTtcbiAgICAvLyBwbG90SmFnZ2VkTG9zczJEKCk7XG59XG4iLCJpbXBvcnQgKiBhcyBkMyBmcm9tICdkMydcbmltcG9ydCB7IE1hcmdpbkluZm8gfSBmcm9tICcuL3V0aWwvU1ZHVmlzQ29tcG9uZW50J1xuaW1wb3J0IHsgRDNTZWwgfSBmcm9tICcuL3V0aWwveGQzJ1xuaW1wb3J0IHtyYW5nZX0gZnJvbSAncmFtZGEnXG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRTVkcoZGl2OiBzdHJpbmcsIHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyLCBtYXJnaW46IE1hcmdpbkluZm8pOiBEM1NlbCB7XG5cbiAgICB2YXIgc3ZnID0gZDMuc2VsZWN0KGRpdikuYXBwZW5kKFwic3ZnXCIpXG4gICAgICAgIC5hdHRyKFwid2lkdGhcIiwgXCIxMDAlXCIpXG4gICAgICAgIC5hdHRyKFwiaGVpZ2h0XCIsIFwiMTAwJVwiKVxuICAgICAgICAuYXR0cihcInZpZXdCb3hcIiwgXCIwIDAgXCIgKyAod2lkdGggKyBtYXJnaW4ubGVmdCArIG1hcmdpbi5yaWdodCkgKyBcIiBcIiArIChoZWlnaHQgKyBtYXJnaW4udG9wICsgbWFyZ2luLmJvdHRvbSkpXG4gICAgICAgIC5hdHRyKFwicHJlc2VydmVBc3BlY3RSYXRpb1wiLCBcInhNaWRZTWlkIG1lZXRcIilcbiAgICAgICAgLmFwcGVuZChcImdcIilcbiAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgXCJ0cmFuc2xhdGUoXCIgKyBtYXJnaW4ubGVmdCArIFwiLFwiICsgbWFyZ2luLnRvcCArIFwiKVwiKTtcblxuICAgIHJldHVybiBzdmc7XG59XG5cbnR5cGUgRG9tYWluUmFuZ2UgPSBudW1iZXJbXVxuXG4vKipcbiAqIFxuICogQHBhcmFtIG54IE51bWJlciBvZiBncmlkcG9pbnRzIGFsb25nIHhcbiAqIEBwYXJhbSBueSBOdW1iZXIgb2YgZ3JpZHBvaW50cyBhbG9uZyB5XG4gKiBAcGFyYW0geHJhbmdlIFJhbmdlIGFsb25nIHggYXhpc1xuICogQHBhcmFtIHlyYW5nZSBSYW5nZSBhbG9uZyB5IGF4aXNcbiAqIEBwYXJhbSBmdW5jICh4LHkpID0+IG51bWJlciwgZnVuY3Rpb24gdG8gcGxvdFxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q29udG91clZhbHVlcyhueDogbnVtYmVyLCBueTogbnVtYmVyLCB4cmFuZ2U6IERvbWFpblJhbmdlLCB5cmFuZ2U6IERvbWFpblJhbmdlLCBmdW5jOiAoeDogbnVtYmVyLCB5OiBudW1iZXIpID0+IG51bWJlcikge1xuICAgIGxldCB2YWx1ZXMgPSBuZXcgQXJyYXkobnggKiBueSlcblxuICAgIGZvciAodmFyIGogPSAwLjUsIGsgPSAwOyBqIDwgbnk7ICsraikge1xuICAgICAgICBmb3IgKHZhciBpID0gMC41OyBpIDwgbng7ICsraSwgKytrKSB7XG4gICAgICAgICAgICBjb25zdCB4dmFsID0gKChpIC8gbngpICogKHhyYW5nZVsxXSAtIHhyYW5nZVswXSkpICsgeHJhbmdlWzBdO1xuICAgICAgICAgICAgY29uc3QgeXZhbCA9ICgxIC0gKGogLyBueSkpICogKHlyYW5nZVsxXSAtIHlyYW5nZVswXSkgKyB5cmFuZ2VbMF07XG4gICAgICAgICAgICB2YWx1ZXNba10gPSBmdW5jKHh2YWwsIHl2YWwpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbHVlc1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdW5pZm9ybShhLCBiKSB7XG4gICAgcmV0dXJuIE1hdGgucmFuZG9tKCkgKiAoYiAtIGEpICsgYTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdlblVuaWZvcm0oYTpudW1iZXIsIGI6bnVtYmVyLCBuOm51bWJlcikge1xuICAgIHJldHVybiByYW5nZSgwLCBuKS5tYXAoeCA9PiB7cmV0dXJuIHt4OiB1bmlmb3JtKGEsIGIpLCB5OiB1bmlmb3JtKGEsYil9fSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5vcm1hbChtZWFuLCB2YXJpYW5jZSkge1xuICAgIHZhciBzID0gMDtcbiAgICB3aGlsZSAocyA9PSAwIHx8IHMgPiAxKSB7XG4gICAgICAgIHZhciB1ID0gdW5pZm9ybSgtMSwxKSxcbiAgICAgICAgdiA9IHVuaWZvcm0oLTEsMSk7XG4gICAgICAgIHMgPSB1ICogdSArIHYgKiB2O1xuICAgIH1cblxuICAgIHZhciBzdGFuZGFyZCA9IE1hdGguc3FydCgtMiAqIE1hdGgubG9nKHMpIC8gcykgKiB1O1xuICAgIHJldHVybiBtZWFuICsgTWF0aC5zcXJ0KHZhcmlhbmNlKSAqIHN0YW5kYXJkO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2VuTm9ybWFsKG1lYW46bnVtYmVyLCB2YXJpYW5jZTpudW1iZXIsIG46bnVtYmVyKSB7XG4gICAgcmV0dXJuIHJhbmdlKDAsIG4pLm1hcCh4ID0+IHtyZXR1cm4ge3g6IG5vcm1hbChtZWFuLCB2YXJpYW5jZSksIHk6IHVuaWZvcm0obWVhbix2YXJpYW5jZSl9fSlcbn0iLCJpbXBvcnQgKiBhcyBkMyBmcm9tICdkMydcbmltcG9ydCB7IFZlY3RvcjJEIH0gZnJvbSAnLi4vdHlwZXMnXG5pbXBvcnQgeyBTVkdWaXNDb21wb25lbnQsIFNWR09wdGlvbnMsIE1hcmdpbkluZm8gfSBmcm9tIFwiLi9TVkdWaXNDb21wb25lbnRcIlxuXG5leHBvcnQgaW50ZXJmYWNlIENoYXJ0T3B0aW9ucyBleHRlbmRzIFNWR09wdGlvbnMge1xuICAgIHhyYW5nZTogW251bWJlciwgbnVtYmVyXVxuICAgIHlyYW5nZTogW251bWJlciwgbnVtYmVyXVxuICAgIHBhZDogTWFyZ2luSW5mbyAgICAgICAgICAgICAvLyBEaXN0YW5jZSBmcm9tIGVkZ2VzLiBEZW1hcmNhdGUgd2hlbiB0aGluZ3MgYXJlIHRvbyBjbG9zZSB0byB0aGUgZWRnZVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIENoYXJ0U2NhbGVzIHtcbiAgICB4PzogZDMuU2NhbGVMaW5lYXI8bnVtYmVyLCBudW1iZXI+LFxuICAgIHk/OiBkMy5TY2FsZUxpbmVhcjxudW1iZXIsIG51bWJlcj4sXG59XG4vKipcbiAqIENyZWF0ZSBhIGNsYXNzIHRoYXQgY2FuIGJlIHVzZWQgZm9yIHBsb3R0aW5nIGNoYXJ0cyAobGluZSBncmFwaHMsIGJhciBncmFwaHMsIGV0Yy4pLlxuICovXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQ2hhcnQyRDxEYXRhSW50ZXJmYWNlPiBleHRlbmRzIFNWR1Zpc0NvbXBvbmVudDxEYXRhSW50ZXJmYWNlPiB7XG4gICAgb3B0aW9uczogQ2hhcnRPcHRpb25zXG4gICAgc2NhbGVzOiBDaGFydFNjYWxlc1xuXG4gICAgLy8gUHV0IGEgdmVjdG9yIGludG8gdGhlIGNvb3JkaW5hdGUgc3lzdGVtIHVzZWQgYnkgdGhlIHZpc3VhbGl6YXRpb25cbiAgICBpbnRvVmlzKHY6IFZlY3RvcjJEKSB7XG4gICAgICAgIHJldHVybiB7IHg6IHRoaXMuc2NhbGVzLngodi54KSwgeTogdGhpcy5zY2FsZXMueSh2LnkpIH1cbiAgICB9XG5cbiAgICAvLyBUYWtlIGEgdmVjdG9yIGluIHRoZSBjb29yZGluYXRlIHN5c3RlbSBhbmQgcmV0dXJuIGl0IHRvIHRoZSBtYXRoIGNvb3JkaW5hdGVzXG4gICAgaW50b01hdGgodjogVmVjdG9yMkQpIHtcbiAgICAgICAgcmV0dXJuIHsgeDogdGhpcy5zY2FsZXMueC5pbnZlcnQodi54KSwgeTogdGhpcy5zY2FsZXMueS5pbnZlcnQodi55KSB9XG4gICAgfVxuXG4gICAgLy8gSW5zdGFudGlhdGUgdGhlIGF4ZXMgb2YgdGhlIGNoYXJ0LiBSZWltcGxlbWVudCBkZXBlbmRpbmcgb24gaG93IHdlIHdhbnQgdGhlIGF4ZXMgdG8gYXBwZWFyXG4gICAgcHJvdGVjdGVkIGFic3RyYWN0IGNyZWF0ZUF4ZXMoKVxuXG4gICAgLy8gSW5zdGFudGlhdGUgdGhlIHNjYWxlcyBmcm9tIHRoZSB4cmFuZ2UgYW5kIHRoZSB5cmFuZ2VcbiAgICBwcm90ZWN0ZWQgYWJzdHJhY3QgY3JlYXRlU2NhbGVzKClcbn0iLCJpbXBvcnQge1Zpc0NvbXBvbmVudH0gZnJvbSAnLi9WaXNDb21wb25lbnQnXG5pbXBvcnQge1NpbXBsZUV2ZW50SGFuZGxlcn0gZnJvbSAnLi9TaW1wbGVFdmVudEhhbmRsZXInXG5pbXBvcnQge0QzU2VsfSBmcm9tICcuL3hkMydcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEhUTUxWaXNDb21wb25lbnQ8RGF0YUludGVyZmFjZT4gZXh0ZW5kcyBWaXNDb21wb25lbnQ8RGF0YUludGVyZmFjZT4ge1xuXG4gICAgcHJvdGVjdGVkIGNvbnN0cnVjdG9yKGQzcGFyZW50OiBEM1NlbCwgZXZlbnRIYW5kbGVyPzogU2ltcGxlRXZlbnRIYW5kbGVyLCBvcHRpb25zOiB7fSA9IHt9LCBJRD0wKSB7XG4gICAgICAgIHN1cGVyKGQzcGFyZW50LCBldmVudEhhbmRsZXIsIElEKVxuICAgICAgICB0aGlzLmluaXRIVE1MKG9wdGlvbnMpXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTXVzdCBiZSBjYWxsZWQgaW1tZWRpYXRlbHkgYWZ0ZXIgdGhlIGBzdXBlcigpYCBjb25zdHJ1Y3RvciBjYWxsIG9mIGluaGVyZXRpbmcgY2xhc3Nlc1xuICAgICAqIFxuICAgICAqIC0gQ3JlYXRlcyBgYmFzZWAgYXR0cmlidXRlIG9uIHBhcmVudFxuICAgICAqIC0gQWRkIGFkZGl0aW9uYWwgc3RhdGljIGVsZW1lbnRzIGRlZmluZWQgaW4gYGluaXQoKWBcbiAgICAgKi9cbiAgICBpbml0SFRNTChvcHRpb25zOiB7fSA9IHt9KSB7XG4gICAgICAgIHRoaXMudXBkYXRlT3B0aW9ucyhvcHRpb25zKVxuICAgICAgICB0aGlzLmJhc2UgPSB0aGlzLnBhcmVudC5hcHBlbmQoJ2RpdicpXG4gICAgfVxufSIsImltcG9ydCB7IEQzU2VsIH0gZnJvbSBcIi4veGQzXCJcbmltcG9ydCB7IFZpc0NvbXBvbmVudCB9IGZyb20gXCIuL1Zpc0NvbXBvbmVudFwiXG5pbXBvcnQgeyBTaW1wbGVFdmVudEhhbmRsZXIgfSBmcm9tIFwiLi9TaW1wbGVFdmVudEhhbmRsZXJcIjtcbmltcG9ydCB7IFNWRyB9IGZyb20gXCIuL1NWR3BsdXNcIjtcblxuZXhwb3J0IHR5cGUgTWFyZ2luSW5mbyA9IHtcbiAgICB0b3A6bnVtYmVyXG4gICAgcmlnaHQ6bnVtYmVyXG4gICAgYm90dG9tOm51bWJlclxuICAgIGxlZnQ6bnVtYmVyXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU1ZHT3B0aW9ucyB7XG4gICAgbWFyZ2luOiBNYXJnaW5JbmZvXG4gICAgbWF4V2lkdGg6IG51bWJlciAgICAgICAgLy8gVGhlIHRvdGFsIHdpZHRoIG9mIHRoZSBjb21wb25lbnRcbiAgICBtYXhIZWlnaHQ6IG51bWJlciAgICAgICAvLyBUaGUgdG90YWwgaGVpZ2h0IG9mIHRoZSBjb21wb25lbnRcbiAgICB3aWR0aD86IG51bWJlciAgICAgICAgICAvLyBUaGUgdG90YWwgd2lkdGggLSBhcHBsaWNhYmxlIG1hcmdpbnNcbiAgICBoZWlnaHQ/OiBudW1iZXIgICAgICAgICAvLyBUaGUgdG90YWwgaGVpZ2h0IC0gYXBwbGljYWJsZSBtYXJnaW5zXG59XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBTVkdWaXNDb21wb25lbnQ8RGF0YUludGVyZmFjZT4gZXh0ZW5kcyBWaXNDb21wb25lbnQ8RGF0YUludGVyZmFjZT4ge1xuICAgIHByb3RlY3RlZCBzdmc6IEQzU2VsXG4gICAgbGF5ZXJzOiB7IG1haW4/OiBEM1NlbCwgZmc/OiBEM1NlbCwgYmc/OiBEM1NlbCwgW2tleTogc3RyaW5nXTogRDNTZWwgfTtcbiAgICBwcm90ZWN0ZWQgb3B0aW9uczogU1ZHT3B0aW9ucyA9IHtcbiAgICAgICAgbWFyZ2luOiB7IHRvcDogMCwgcmlnaHQ6IDAsIGJvdHRvbTogMCwgbGVmdDogMCB9LFxuICAgICAgICBtYXhXaWR0aDogNDUwLFxuICAgICAgICBtYXhIZWlnaHQ6IDQ1MCxcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgY29uc3RydWN0b3IoZDNwYXJlbnQ6IEQzU2VsLCBldmVudEhhbmRsZXI/OiBTaW1wbGVFdmVudEhhbmRsZXIsIG9wdGlvbnM6IHt9ID0ge30sIElEPTApIHtcbiAgICAgICAgc3VwZXIoZDNwYXJlbnQsIGV2ZW50SGFuZGxlciwgSUQpXG4gICAgfVxuXG4gICAgLyoqIFxuICAgICAqIE11c3QgYmUgY2FsbGVkIGltbWVkaWF0ZWx5IGFmdGVyIHRoZSBgc3VwZXIoKWAgY29uc3RydWN0b3IgY2FsbCBvZiBpbmhlcmV0aW5nIGNsYXNzZXMuXG4gICAgICogXG4gICAgICogLSBDYWxjdWxhdGVzIGhlaWdodCBhbmQgd2lkdGggZm9yIG9wdGlvbnNcbiAgICAgKiAtIEFkZHMgJ3N2ZycgYW5kICdiYXNlJyBvYmplY3RzIHRvIHRoZSBkaXYuXG4gICAgICogLSBBZGRzIGxheWVycyBvbiB0aGUgYmFzZSB0byB3b3JrIHdpdGggaWYgcGFzc2VkXG4gICAgICogLSBSdW5zIGRlZmluZWQgc3RhdGljIGluaXRpYWxpemF0aW9uIGRlZmluZWQgaW4gYGluaXQoKWBcbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgaW5pdFNWRyhvcHRpb25zID0ge30sIGRlZmF1bHRMYXllcnMgPSBbXCJiZ1wiLCBcIm1haW5cIiwgXCJmZ1wiXSkge1xuICAgICAgICB0aGlzLnVwZGF0ZU9wdGlvbnMob3B0aW9ucylcbiAgICAgICAgY29uc3Qgb3AgPSB0aGlzLm9wdGlvbnM7XG4gICAgICAgIG9wLndpZHRoID0gb3AubWF4V2lkdGggLSAob3AubWFyZ2luLmxlZnQgKyBvcC5tYXJnaW4ucmlnaHQpXG4gICAgICAgIG9wLmhlaWdodCA9IG9wLm1heEhlaWdodCAtIChvcC5tYXJnaW4udG9wICsgb3AubWFyZ2luLmJvdHRvbSlcblxuICAgICAgICB0aGlzLnN2ZyA9IHRoaXMucGFyZW50LmFwcGVuZCgnc3ZnJylcbiAgICAgICAgICAgIC5hdHRyKFwid2lkdGhcIiwgXCIxMDAlXCIpXG4gICAgICAgICAgICAuYXR0cihcImhlaWdodFwiLCBcIjEwMCVcIilcbiAgICAgICAgICAgIC5hdHRyKFwidmlld0JveFwiLCBgMCAwICR7b3Aud2lkdGggKyBvcC5tYXJnaW4ubGVmdCArIG9wLm1hcmdpbi5yaWdodH0gJHtvcC5oZWlnaHQgKyBvcC5tYXJnaW4udG9wICsgb3AubWFyZ2luLmJvdHRvbX1gKVxuICAgICAgICAgICAgLmFwcGVuZCgnZycpXG4gICAgICAgICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBTVkcudHJhbnNsYXRlKG9wLm1hcmdpbi5sZWZ0LCBvcC5tYXJnaW4udG9wKSlcblxuICAgICAgICAvLyB0aGlzLnN2ZyA9IFNWRy5hZGRTVkcodGhpcy5wYXJlbnQsIG9wLndpZHRoLCBvcC5oZWlnaHQsIG9wLm1hcmdpbilcbiAgICAgICAgdGhpcy5iYXNlID0gU1ZHLmdyb3VwKHRoaXMuc3ZnLCAnJyk7IC8vIExldCBIVE1MIGF1dGhvciBhc3NpZ24gdGhlIGNsYXNzIG5hbWUgYW5kIElEXG4gICAgICAgIHRoaXMubGF5ZXJzID0ge307XG4gICAgICAgIGlmIChkZWZhdWx0TGF5ZXJzKSB7XG4gICAgICAgICAgICAvLyBjb25zdHJ1Y3Rpb24gb3JkZXIgaXMgaW1wb3J0YW50ICFcbiAgICAgICAgICAgIGRlZmF1bHRMYXllcnMuZm9yRWFjaChsYXllciA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5sYXllcnNbbGF5ZXJdID0gU1ZHLmdyb3VwKHRoaXMuYmFzZSwgbGF5ZXIpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmluaXQoKVxuICAgIH1cbn0iLCJpbXBvcnQgKiBhcyBkMyBmcm9tIFwiZDNcIlxuaW1wb3J0ICogYXMgUiBmcm9tICdyYW1kYSdcbmltcG9ydCB7TWFyZ2luSW5mb30gZnJvbSAnLi9TVkdWaXNDb21wb25lbnQnXG5pbXBvcnQge0QzU2VsfSBmcm9tICcuLi91dGlsL3hkMydcblxuLyoqXG4gKiBDcmVhdGVkIGJ5IGhlbiBvbiA1LzE1LzE3LlxuICogTW9kaWZpZWQgYnkgaG9vIG9uIDQvMTYvMTkuXG4gKi9cblxuZXhwb3J0IGNsYXNzIFNWRyB7XG4gICAgXG4gICAgc3RhdGljIHRyYW5zbGF0ZSh4Om51bWJlciwgeTpudW1iZXIpOnN0cmluZyB7XG4gICAgICAgIHJldHVybiBgdHJhbnNsYXRlKCR7eH0sJHt5fSlgXG4gICAgfVxuXG4gICAgc3RhdGljIHJvdGF0ZShkZWc6bnVtYmVyLCBvcmlnPzp7eDpudW1iZXIsIHk6bnVtYmVyfSk6c3RyaW5nIHtcbiAgICAgICAgaWYgKG9yaWcgPT0gbnVsbCkgXG4gICAgICAgICAgICByZXR1cm4gYHJvdGF0ZSgke2RlZ30pYFxuXG4gICAgICAgIHJldHVybiBgcm90YXRlKCR7ZGVnfSwke29yaWcueH0sJHtvcmlnLnl9KWBcbiAgICB9XG5cbiAgICBzdGF0aWMgc2tldyhkZWd4Om51bWJlciwgZGVneT0wKSB7XG4gICAgICAgIHJldHVybiBgc2tldygke2RlZ3h9LCAke2RlZ3l9KWBcbiAgICB9XG5cbiAgICBzdGF0aWMgc2tld1goZGVnOm51bWJlcikge1xuICAgICAgICByZXR1cm4gYHNrZXdYKCR7ZGVnfSlgXG4gICAgfVxuXG4gICAgc3RhdGljIHNrZXdZKGRlZzpudW1iZXIpIHtcbiAgICAgICAgcmV0dXJuIGBza2V3WSgke2RlZ30pYFxuICAgIH1cblxuICAgIHN0YXRpYyBzY2FsZSh4Om51bWJlciwgeT86bnVtYmVyKTpzdHJpbmcge1xuICAgICAgICBjb25zdCB5c2NhbGUgPSB5ICE9IG51bGwgPyB5IDogeDtcblxuICAgICAgICByZXR1cm4gYHNjYWxlKCR7eH0sICR7eXNjYWxlfSlgXG4gICAgfVxuXG4gICAgc3RhdGljIGdyb3VwKHBhcmVudCwgY2xhc3NlcywgcG9zID0ge3g6IDAsIHk6IDB9KSB7XG4gICAgICAgIHJldHVybiBwYXJlbnQuYXBwZW5kKCdnJylcbiAgICAgICAgICAgIC5hdHRyKCdjbGFzcycsIGNsYXNzZXMpXG4gICAgICAgICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBTVkcudHJhbnNsYXRlKHBvcy54LCBwb3MueSkpXG4gICAgfVxuXG4gICAgc3RhdGljIGFkZFNWRyhwYXJlbnQ6RDNTZWwsIHdpZHRoOm51bWJlciwgaGVpZ2h0Om51bWJlciwgbWFyZ2luOk1hcmdpbkluZm8pOkQzU2VsIHtcblxuICAgICAgICB2YXIgc3ZnID0gcGFyZW50LmFwcGVuZChcInN2Z1wiKVxuICAgICAgICAgICAgLmF0dHIoXCJ3aWR0aFwiLCBcIjEwMCVcIilcbiAgICAgICAgICAgIC5hdHRyKFwiaGVpZ2h0XCIsIFwiMTAwJVwiKVxuICAgICAgICAgICAgLmF0dHIoXCJ2aWV3Qm94XCIsIFwiMCAwIFwiICsgKHdpZHRoICsgbWFyZ2luLmxlZnQgKyBtYXJnaW4ucmlnaHQpICsgXCIgXCIgKyAoaGVpZ2h0ICsgbWFyZ2luLnRvcCArIG1hcmdpbi5ib3R0b20pKVxuICAgICAgICAgICAgLmF0dHIoXCJwcmVzZXJ2ZUFzcGVjdFJhdGlvXCIsIFwieE1pZFlNaWQgbWVldFwiKVxuICAgICAgICAuYXBwZW5kKFwiZ1wiKVxuICAgICAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgU1ZHLnRyYW5zbGF0ZShtYXJnaW4ubGVmdCwgbWFyZ2luLnRvcCkpO1xuXG4gICAgICAgIHJldHVybiBzdmc7XG4gICAgfVxuXG4gICAgc3RhdGljIGFkZEFycm93cyhwYXJlbnQ6RDNTZWwpIHtcbiAgICAgICAgcGFyZW50LmFwcGVuZCgnZGVmcycpXG4gICAgICAgICAgICAuYXBwZW5kKCdtYXJrZXInKVxuICAgICAgICAgICAgLmF0dHIoXCJpZFwiLCBcImFycm93XCIpXG4gICAgICAgICAgICAuYXR0cihcIm1hcmtlclVuaXRzXCIsIFwic3Ryb2tlV2lkdGhcIilcbiAgICAgICAgICAgIC5hdHRyKFwibWFya2VyV2lkdGhcIiwgNS41KVxuICAgICAgICAgICAgLmF0dHIoXCJtYXJrZXJIZWlnaHRcIiwgNS41KVxuICAgICAgICAgICAgLmF0dHIoXCJ2aWV3Qm94XCIsIFwiMCAwIDEyIDEyXCIpXG4gICAgICAgICAgICAuYXR0cihcInJlZlhcIiwgNilcbiAgICAgICAgICAgIC5hdHRyKFwicmVmWVwiLCA2KVxuICAgICAgICAgICAgLmF0dHIoXCJvcmllbnRcIiwgJ2F1dG8nKVxuICAgICAgICAgICAgLmFwcGVuZCgncGF0aCcpXG4gICAgICAgICAgICAuYXR0cignZCcsIFwiTTIsMiBMMTAsNiBMMiwxMCBMNiw2IEwyLDJcIilcbiAgICAgICAgICAgIC8vIC5zdHlsZShcImZpbGw6ICNmMDBcIilcbiAgICB9XG5cbiAgICBzdGF0aWMgaW5zZXJ0QXJyb3cocGFyZW50OkQzU2VsLCB4MTpudW1iZXIsIHkxOm51bWJlciwgeDI6bnVtYmVyLCB5MjpudW1iZXIsIGNvbG9yOnN0cmluZywgd2lkdGg6bnVtYmVyKSB7XG4gICAgICAgIHJldHVybiBwYXJlbnQuYXBwZW5kKFwibGluZVwiKVxuICAgICAgICAgICAgIC5hdHRyKFwieDFcIix4MSkgIFxuICAgICAgICAgICAgIC5hdHRyKFwieTFcIix5MSkgIFxuICAgICAgICAgICAgIC5hdHRyKFwieDJcIix4MikgIFxuICAgICAgICAgICAgIC5hdHRyKFwieTJcIix5MikgIFxuICAgICAgICAgICAgIC5hdHRyKFwic3Ryb2tlXCIsY29sb3IpICBcbiAgICAgICAgICAgICAuYXR0cihcInN0cm9rZS13aWR0aFwiLHdpZHRoKSAgXG4gICAgICAgICAgICAgLmF0dHIoXCJtYXJrZXItZW5kXCIsXCJ1cmwoI2Fycm93KVwiKTsgIFxuICAgIH1cblxuICAgIHN0YXRpYyBtZXNoZ3JpZChueDogbnVtYmVyLCBueTogbnVtYmVyLCB4cmFuZ2U6IG51bWJlcltdLCB5cmFuZ2U6IG51bWJlcltdKSB7XG4gICAgICAgIGNvbnN0IHNjYWxlID0gKHZhbHM6bnVtYmVyW10sIHJhbmdlKSA9PiB2YWxzLm1hcCh2ID0+ICh2ICogKHJhbmdlWzFdIC0gcmFuZ2VbMF0pKSArIHJhbmdlWzBdKTtcblxuICAgICAgICBjb25zdCBwb2ludGlmeSA9ICh4dmFsczpudW1iZXJbXSwgeXZhbHM6bnVtYmVyW10pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG91dCA9IFtdXG4gICAgICAgICAgICB4dmFscy5mb3JFYWNoKHggPT4ge1xuICAgICAgICAgICAgICAgIHl2YWxzLmZvckVhY2goeSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIG91dC5wdXNoKHt4OiB4LCB5OiB5fSlcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIHJldHVybiBvdXRcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHh2YWxzID0gc2NhbGUoUi5yYW5nZSgwLCBueCkubWFwKHggPT4gKHggKyAwLjUpIC8gbngpLCB4cmFuZ2UpXG4gICAgICAgIGNvbnN0IHl2YWxzID0gc2NhbGUoUi5yYW5nZSgwLCBueSkubWFwKHkgPT4gKHkgKyAwLjUpIC8gbnkpLCB5cmFuZ2UpXG4gICAgICAgIHJldHVybiBwb2ludGlmeSh4dmFscywgeXZhbHMpXG4gICAgfVxuXG59XG5cbmV4cG9ydCBjbGFzcyBTVkdNZWFzdXJlbWVudHMge1xuXG4gICAgcHJpdmF0ZSBtZWFzdXJlRWxlbWVudDogZDMuU2VsZWN0aW9uPGFueSwgYW55LCBhbnksIGFueT47XG5cbiAgICBjb25zdHJ1Y3RvcihiYXNlRWxlbWVudCwgY2xhc3NlcyA9ICcnKSB7XG4gICAgICAgIHRoaXMubWVhc3VyZUVsZW1lbnQgPSBiYXNlRWxlbWVudC5hcHBlbmQoJ3RleHQnKVxuICAgICAgICAgICAgLmF0dHIoJ3gnLCAwKVxuICAgICAgICAgICAgLmF0dHIoJ3knLCAtMjApXG4gICAgICAgICAgICAuYXR0cignY2xhc3MnLCBjbGFzc2VzKVxuXG4gICAgfVxuXG4gICAgdGV4dExlbmd0aCh0ZXh0LCBzdHlsZSA9IG51bGwpIHtcbiAgICAgICAgdGhpcy5tZWFzdXJlRWxlbWVudC5hdHRyKCdzdHlsZScsIHN0eWxlKTtcbiAgICAgICAgdGhpcy5tZWFzdXJlRWxlbWVudC50ZXh0KHRleHQpO1xuICAgICAgICBjb25zdCB0bCA9ICg8U1ZHVGV4dEVsZW1lbnQ+IHRoaXMubWVhc3VyZUVsZW1lbnQubm9kZSgpKS5nZXRDb21wdXRlZFRleHRMZW5ndGgoKTtcbiAgICAgICAgdGhpcy5tZWFzdXJlRWxlbWVudC50ZXh0KCcnKTtcblxuICAgICAgICByZXR1cm4gdGw7XG4gICAgfVxufSIsIi8qKlxuICogQ3JlYXRlZCBieSBoZW4gb24gNS8xNS8xNy5cbiAqIE1vZGlmaWVkIGJ5IGhvbyBvbiA0LzE2LzE5LlxuICovXG5leHBvcnQgY2xhc3MgU2ltcGxlRXZlbnRIYW5kbGVyIHtcblxuICAgIGVsZW1lbnQ6IEVsZW1lbnQ7XG4gICAgZXZlbnRMaXN0ZW5lcnM6IG9iamVjdFtdO1xuXG4gICAgY29uc3RydWN0b3IoZWxlbWVudDogRWxlbWVudCkge1xuICAgICAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuICAgICAgICB0aGlzLmV2ZW50TGlzdGVuZXJzID0gW11cbiAgICB9XG5cbiAgICBiaW5kKGV2ZW50TmFtZXM6IHN0cmluZywgZXZlbnRGdW5jdGlvbjogRnVuY3Rpb24pIHtcbiAgICAgICAgZm9yIChjb25zdCBldmVudE5hbWUgb2YgZXZlbnROYW1lcy5zcGxpdCgnICcpKSB7XG4gICAgICAgICAgICB0aGlzLmV2ZW50TGlzdGVuZXJzLnB1c2goe2V2ZW50TmFtZSwgZXZlbnRGdW5jdGlvbn0pO1xuICAgICAgICAgICAgY29uc3QgZXZlbnRGdW5jdGlvbldyYXAgPSBlID0+IGV2ZW50RnVuY3Rpb24oZS5kZXRhaWwsIGUpO1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBldmVudEZ1bmN0aW9uV3JhcCwgZmFsc2UpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0TGlzdGVuZXJzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5ldmVudExpc3RlbmVycztcbiAgICB9XG5cbiAgICB0cmlnZ2VyKGV2ZW50TmFtZTogc3RyaW5nLCBkZXRhaWw6IG9iamVjdCkge1xuICAgICAgICB0aGlzLmVsZW1lbnQuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoZXZlbnROYW1lLCB7ZGV0YWlsfSkpO1xuICAgIH1cbn0iLCJsZXQgdGhlX3VuaXF1ZV9pZF9jb3VudGVyID0gMDtcbmxldCB0aGVfdW5pcXVlX3N0cmluZ19jb3VudGVyID0gMDtcblxuZXhwb3J0IGNsYXNzIFVJZCB7XG4gICAgc3RhdGljIHVpZCgpOiBudW1iZXIge1xuICAgICAgICB0aGVfdW5pcXVlX2lkX2NvdW50ZXIgKz0gMTtcbiAgICAgICAgcmV0dXJuIHRoZV91bmlxdWVfaWRfY291bnRlclxuICAgIH1cbiAgICBzdGF0aWMgc2ltcGxlVUlkKHByZWZpeD0nJyk6IHN0cmluZyB7XG4gICAgICAgIHRoZV91bmlxdWVfc3RyaW5nX2NvdW50ZXIgKz0gMTtcblxuICAgICAgICByZXR1cm4gcHJlZml4ICsgdGhlX3VuaXF1ZV9zdHJpbmdfY291bnRlcjtcbiAgICB9XG59XG4iLCIvKipcbiAqIENyZWF0ZWQgYnkgSGVuZHJpayBTdHJvYmVsdCAoaGVuZHJpay5zdHJvYmVsdC5jb20pIG9uIDEyLzMvMTYuXG4gKiBNb2RpZmllZCBieSBCZW4gSG9vdmVyIG9uIDQvMTYvMjAxOVxuICovXG5pbXBvcnQgeyBEM1NlbCB9IGZyb20gXCIuL3hkM1wiXG5pbXBvcnQgeyBTaW1wbGVFdmVudEhhbmRsZXIgfSBmcm9tIFwiLi9TaW1wbGVFdmVudEhhbmRsZXJcIjtcblxuLyoqXG4gKiBTaG91bGQgaGF2ZSBWQ29tcG9uZW50SFRNTCBhbmQgVkNvbXBvbmVudFNWR1xuICpcbiAqIENvbW1vbiBQcm9wZXJ0aWVzOlxuICogLSBldmVudHNcbiAqIC0gZXZlbnRIYW5kbGVyIChWIGltcG9ydGFudClcbiAqIC0gb3B0aW9ucyAoTWFpbnRhaW5zIHB1YmxpYyBzdGF0ZS4gQ2FuIGV4cG9zZSB0aGVzZSB3aXRoIGdldC9zZXQgZnVuY3Rpb25zIHdpdGggYXV0byB1cGRhdGUpXG4gKiAtIF9jdXJyZW50IChNYWludGFpbnMgcHJpdmF0ZSBzdGF0ZSlcbiAqIC0gY3NzTmFtZSAoc3luY2VkIHdpdGggY29ycmVzcG9uZGluZyBDU1MgZmlsZSlcbiAqIC0gcGFyZW50IChIVE1MIGlzIGRpdiBjb250YWluaW5nIHRoZSBiYXNlLCBTVkcgaXMgU1ZHIGVsZW1lbnQpXG4gKiAtIGJhc2UgKEhUTUwgaXMgZGl2IHdpdGggY3NzX25hbWUgZXN0YWJsaXNoZWQpXG4gKiAtIF9kYXRhIChEYXRhIHVzZWQgdG8gY3JlYXRlIGFuZCByZW5kZXIgdGhlIGNvbXBvbmVudClcbiAqIC0gX3JlbmRlckRhdGEgKERhdGEgbmVlZGVkIHRvIGRpc3BsYXkuIFRoaXMgbWF5IG5vdCBiZSBuZWVkZWQsIGJ1dCBpcyBjdXJyZW50bHkgdXNlZCBpbiBoaXN0b2dyYW0pICogKiBDb21tb24gTWV0aG9kczpcbiAqIC0gY29uc3RydWN0b3JcbiAqIC0gX3JlbmRlcigpICAgICAgQ29uc2lkZXIgcmVwbGFjaW5nIHdpdGggYF91cGRhdGVEYXRhKClgIHRoYXQgdXBkYXRlcyBhbGwgZGF0YSBhdCBvbmNlXG4gKiAtIHVwZGF0ZSgpICAgICAgIENvbnNpZGVyIHJlcGxhY2luZyB0aGlzIHdpdGggYGRhdGEoKWAgdGhhdCBhdXRvIHVwZGF0ZXMgZGF0YVxuICogLSByZWRyYXcoKVxuICogLSBkZXN0cm95KClcbiAqL1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgVmlzQ29tcG9uZW50PERhdGFJbnRlcmZhY2U+IHtcbiAgICAvKipcbiAgICAgKiBHaXZlbiBhbiBJRCwgY3JlYXRlIGEgbmV3IGluc3RhbmNlIG9mIHRoaXMgY2xhc3Mgd2l0aCB0aGUgZXZlbnRzIGFuZCBjc3NfbmFtZSBtb2RpZmllZCBieSB0aGUgaWRcbiAgICAgKi9cbiAgICBuZXdJbnN0YW5jZShpZDogbnVtYmVyKSB7IH1cblxuICAgIC8qKlxuICAgICAqIFRoZSBzdGF0aWMgcHJvcGVydHkgdGhhdCBjb250YWlucyBhbGwgY2xhc3MgcmVsYXRlZCBldmVudHMuXG4gICAgICogU2hvdWxkIGJlIG92ZXJ3cml0dGVuIGFuZCBldmVudCBzdHJpbmdzIGhhdmUgdG8gYmUgdW5pcXVlISFcbiAgICAgKi9cblxuICAgIHByb3RlY3RlZCBnZXQgYmFzZU5hbWUoKSB7XG4gICAgICAgIHJldHVybiBgJHt0aGlzLmNzc25hbWV9X0lEJHt0aGlzLklEfWBcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgY3NzbmFtZTogc3RyaW5nOyAgICAgICAgICAgIC8vIE1ha2UgdGhlIHNhbWUgYXMgdGhlIGNvcnJlc3BvbmRpbmcgY3NzIGZpbGVcbiAgICBwcm90ZWN0ZWQgSUQ6IG51bWJlcjsgICAgICAgICAgICAgICAgIC8vIElEIGFzc29jaWF0ZWQgdG8gdW5pcXVlIGluc3RhbmNlIG9mIHZpc3VhbGl6YXRpb24uIERlZmF1bHRzIHRvIDBcblxuICAgIHByb3RlY3RlZCBhYnN0cmFjdCBvcHRpb25zOiB7fTtcbiAgICBwcm90ZWN0ZWQgZXZlbnRIYW5kbGVyOiBTaW1wbGVFdmVudEhhbmRsZXI7XG4gICAgcGFyZW50OiBEM1NlbDsgICAgICAgICAgICAgICAgICAgICAgICAvLyBQYXJlbnQgZDMgc2VsZWN0aW9uXG4gICAgYmFzZTogRDNTZWw7ICAgICAgICAgICAgICAgICAvLyBkMyBzZWxlY3Rpb24gdGhhdCBpcyBjcmVhdGVkIGJ5IHRoZSBpbml0XG4gICAgcHJvdGVjdGVkIF9kYXRhOiBEYXRhSW50ZXJmYWNlO1xuICAgIHByb3RlY3RlZCByZW5kZXJEYXRhOiB1bmtub3duO1xuXG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge0QzU2VsfSBkM3BhcmVudCAgRDMgc2VsZWN0aW9uIG9mIHBhcmVudCBTVkcgRE9NIEVsZW1lbnRcbiAgICAgKiBAcGFyYW0ge1NpbXBsZUV2ZW50SGFuZGxlcn0gZXZlbnRIYW5kbGVyIGEgZ2xvYmFsIGV2ZW50IGhhbmRsZXIgb2JqZWN0IG9yICdudWxsJyBmb3IgbG9jYWwgZXZlbnQgaGFuZGxlclxuICAgICAqL1xuICAgIHByb3RlY3RlZCBjb25zdHJ1Y3RvcihkM3BhcmVudDogRDNTZWwsIGV2ZW50SGFuZGxlcj86IFNpbXBsZUV2ZW50SGFuZGxlciwgSUQgPSAwKSB7XG4gICAgICAgIHRoaXMucGFyZW50ID0gZDNwYXJlbnQ7XG4gICAgICAgIHRoaXMuZXZlbnRIYW5kbGVyID0gZXZlbnRIYW5kbGVyIHx8IG5ldyBTaW1wbGVFdmVudEhhbmRsZXIodGhpcy5wYXJlbnQubm9kZSgpKTtcbiAgICAgICAgdGhpcy5JRCA9IElEO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNob3VsZCBiZSBvdmVyd3JpdHRlbiB0byBjcmVhdGUgbmVlZGVkIHN0YXRpYyBET00gZWxlbWVudHNcbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgYWJzdHJhY3QgaW5pdCgpO1xuXG4gICAgLyoqXG4gICAgICogRm9sbG93IHRoZSBEMyBjb252ZW50aW9uOiByZXRyaWV2ZSB0aGUgZGF0YSBpbnNpZGUgdGhlIGNsYXNzIGlmIG51bGwuIE90aGVyd2lzZSwgc2V0IHRoZSBkYXRhIGFuZCByZXR1cm4gJ3RoaXMnXG4gICAgICovXG4gICAgYWJzdHJhY3QgZGF0YSgpOiBEYXRhSW50ZXJmYWNlO1xuICAgIGFic3RyYWN0IGRhdGEoeDogRGF0YUludGVyZmFjZSk6IHRoaXM7XG5cbiAgICAvKipcbiAgICAgKiBTZXQgbWFueSBvcHRpb25zIGF0IG9uY2VcbiAgICAgKlxuICAgICAqIEBwYXJhbSBvcHRpb25zIFJlc2V0IG9wdGlvbnMgdG8gcGFzc2VkIHZhbHVlc1xuICAgICAqL1xuICAgIHVwZGF0ZU9wdGlvbnMob3B0aW9uczoge30pIHtcbiAgICAgICAgT2JqZWN0LmtleXMob3B0aW9ucykuZm9yRWFjaChrID0+IHRoaXMub3B0aW9uc1trXSA9IG9wdGlvbnNba10pO1xuICAgIH1cblxuICAgIGRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMuYmFzZS5yZW1vdmUoKTtcbiAgICB9XG59IiwiaW1wb3J0ICogYXMgZDMgZnJvbSAnZDMnXG5pbXBvcnQgeyBCYXNlVHlwZSB9IGZyb20gJ2QzJ1xuXG4vKipcbiAqIENyZWF0ZSBuIGxpbmVhcmx5IHNwYWNlZCB2YWx1ZXMgYmV0d2VlbiBzdGFydCBhbmQgZW5kXG4gKi9cbmV4cG9ydCBjb25zdCBsaW5zcGFjZSA9IChzdGFydCwgZW5kLCBuKSA9PiB7XG4gICAgY29uc3QgZGVsdGEgPSAoZW5kIC0gc3RhcnQpIC8gKG4gLSAxKVxuICAgIHJldHVybiBkMy5yYW5nZShzdGFydCwgZW5kICsgZGVsdGEsIGRlbHRhKS5zbGljZSgwLCBuKVxufVxuXG4vKiogXG4gKiBDcmVhdGUgbiBsb2dhcml0aG1pY2FsbHkgc3BhY2VkIHZhbHVlcyBiZXR3ZWVuIHN0YXJ0IGFuZCBlbmRcbiAqL1xuZXhwb3J0IGNvbnN0IGxvZ3NwYWNlID0gKHN0YXJ0Om51bWJlciwgZW5kOm51bWJlciwgbjpudW1iZXIsIGJhc2U6bnVtYmVyPTEwKSA9PiB7XG4gICAgY29uc3Qgc2NhbGUgPSBkMy5zY2FsZUxvZygpLmJhc2UoYmFzZSkuZG9tYWluKFtzdGFydCwgZW5kXSkucmFuZ2UoW3N0YXJ0LCBlbmRdKVxuICAgIHJldHVybiBsaW5zcGFjZShzdGFydCwgZW5kLCBuKS5tYXAoc2NhbGUpXG59XG5cbi8qKlxuICogQ29udmVydCB2YWx1ZXMgc3BhY2VkIGV2ZW5seSBvbiBhIHBvd2VyIHNjYWxlLiBXaGVuIGV4cD0xLCBzYW1lIGFzIGxpbnNwYWNlXG4gKi9cbmV4cG9ydCBjb25zdCBwb3dzcGFjZSA9IChzdGFydCwgZW5kLCBuLCBleHA9MSkgPT4ge1xuICAgIGNvbnN0IHNjYWxlID0gZDMuc2NhbGVQb3coKS5leHBvbmVudChleHApLmRvbWFpbihbc3RhcnQsIGVuZF0pLnJhbmdlKFtzdGFydCwgZW5kXSlcbiAgICByZXR1cm4gbGluc3BhY2Uoc3RhcnQsZW5kLG4pLm1hcChzY2FsZSlcbn1cblxuZXhwb3J0IHR5cGUgRDNTZWwgPSBkMy5TZWxlY3Rpb248YW55LCBhbnksIGFueSwgYW55PlxuZXhwb3J0IHR5cGUgZDNTPFQgZXh0ZW5kcyBCYXNlVHlwZSwgVSA9IGFueT4gPSBkMy5TZWxlY3Rpb248VCwgVSwgYW55LCBhbnk+XG5cbmQzLnNlbGVjdGlvbi5wcm90b3R5cGUuY2xlYXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5zZWxlY3RBbGwoJyonKS5yZW1vdmUoKTtcbiAgICByZXR1cm4gdGhpcztcbn1cblxuZDMuc2VsZWN0aW9uLnByb3RvdHlwZS50b2dnbGVDbGFzcyA9IGZ1bmN0aW9uIChjbGFzc05hbWUpIHtcbiAgICB0aGlzLmNsYXNzZWQoY2xhc3NOYW1lLCAhdGhpcy5jbGFzc2VkKGNsYXNzTmFtZSkpO1xuICAgIHJldHVybiB0aGlzO1xufVxuXG5kMy5zZWxlY3Rpb24ucHJvdG90eXBlLnNob3cgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5zdHlsZSgnZGlzcGxheScsICdpbml0aWFsJyk7XG4gICAgcmV0dXJuIHRoaXM7XG59XG5cbmQzLnNlbGVjdGlvbi5wcm90b3R5cGUuaGlkZSA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLnN0eWxlKCdkaXNwbGF5JywgJ25vbmUnKTtcbiAgICByZXR1cm4gdGhpcztcbn1cblxuZDMuc2VsZWN0aW9uLnByb3RvdHlwZS50b2dnbGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGlzSGlkZGVuID0gdGhpcy5zdHlsZSgnZGlzcGxheScpID09ICdub25lJztcbiAgICByZXR1cm4gdGhpcy5zdHlsZSgnZGlzcGxheScsIGlzSGlkZGVuID8gJ2luaGVyaXQnIDogJ25vbmUnKTtcbn1cblxuZDMuc2VsZWN0aW9uLnByb3RvdHlwZS5hZnRlciA9IGZ1bmN0aW9uICh0YWdOYW1lKSB7XG4gICAgdmFyIGVsZW1lbnRzID0gW107XG5cbiAgICB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnTmFtZSk7XG4gICAgICAgIHRoaXMucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoZWxlbWVudCwgdGhpcy5uZXh0U2libGluZyk7XG4gICAgICAgIGVsZW1lbnRzLnB1c2goZWxlbWVudCk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gZDMuc2VsZWN0QWxsKGVsZW1lbnRzKTtcbn1cblxuZDMuc2VsZWN0aW9uLnByb3RvdHlwZS5iZWZvcmUgPSBmdW5jdGlvbiAodGFnTmFtZSkge1xuICAgIHZhciBlbGVtZW50cyA9IFtdO1xuXG4gICAgdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZ05hbWUpO1xuICAgICAgICB0aGlzLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGVsZW1lbnQsIHRoaXMpO1xuICAgICAgICBlbGVtZW50cy5wdXNoKGVsZW1lbnQpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGQzLnNlbGVjdEFsbChlbGVtZW50cyk7XG59IiwiaW1wb3J0ICogYXMgZDMgZnJvbSAnZDMnXG5pbXBvcnQgeyBMYW5kc2NhcGUyRCB9IGZyb20gXCIuLi9MYW5kc2NhcGVzMkRcIlxuaW1wb3J0IHsgRDNTZWwsIGxpbnNwYWNlLCBwb3dzcGFjZX0gZnJvbSAnLi4vdXRpbC94ZDMnXG5pbXBvcnQgeyBWZWN0b3IyRCwgQXJyYXkgfSBmcm9tICcuLi90eXBlcydcbmltcG9ydCB7IFNWR09wdGlvbnMsIFNWR1Zpc0NvbXBvbmVudCB9IGZyb20gJy4uL3V0aWwvU1ZHVmlzQ29tcG9uZW50J1xuaW1wb3J0IHsgU2ltcGxlRXZlbnRIYW5kbGVyIH0gZnJvbSAnLi4vdXRpbC9TaW1wbGVFdmVudEhhbmRsZXInO1xuaW1wb3J0IHsgU1ZHIH0gZnJvbSAnLi4vdXRpbC9TVkdwbHVzJ1xuaW1wb3J0IHsgZ2V0Q29udG91clZhbHVlcyB9IGZyb20gJy4uL3Bsb3R0aW5nJ1xuaW1wb3J0IHsgVXBkYXRlcjJEIH0gZnJvbSAnLi4vVXBkYXRlcjJEJ1xuaW1wb3J0IHsgaW50ZXJ2YWwgfSBmcm9tICdyeGpzJ1xuaW1wb3J0IHsgdGFrZSwgc3RhcnRXaXRoLCBzY2FuIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnXG5pbXBvcnQgKiBhcyBuaiBmcm9tIFwibnVtanNcIlxuXG50eXBlIFQgPSBudW1iZXJbXVxuXG5pbnRlcmZhY2UgR3JhcGhPcHRpb25zIGV4dGVuZHMgU1ZHT3B0aW9ucyB7XG4gICAgeHJhbmdlOiBbbnVtYmVyLCBudW1iZXJdXG4gICAgeXJhbmdlOiBbbnVtYmVyLCBudW1iZXJdXG4gICAgbjogbnVtYmVyICAgICAgICAgICAgICAgICAgIC8vIE51bWJlciBvZiBtZXNoZ3JpZCBwb2ludHMgYWxvbmcgdGhlIHggYXhpcyBmb3IgY29udG91cnNcbiAgICBtOiBudW1iZXIgICAgICAgICAgICAgICAgICAgLy8gTnVtYmVyIG9mIG1lc2hncmlkIHBvaW50cyBhbG9uZyB0aGUgeSBheGlzIGZvciBjb250b3Vyc1xuICAgIG54OiBudW1iZXIgICAgICAgICAgICAgICAgICAgLy8gTnVtYmVyIG9mIG1lc2hncmlkIHBvaW50cyBhbG9uZyB0aGUgeCBheGlzIGZvciBxdWl2ZXJzXG4gICAgbnk6IG51bWJlciAgICAgICAgICAgICAgICAgICAvLyBOdW1iZXIgb2YgbWVzaGdyaWQgcG9pbnRzIGFsb25nIHRoZSB4IGF4aXMgZm9yIHF1aXZlcnNcbiAgICBwYWQ6IG51bWJlciAgICAgICAgICAgICAgICAgLy8gQW5ub3RhdGlvbnMgdGhhdCBoYXBwZW4gaW4gdGhlIG1hcmdpbiBtdXN0IHRha2UgcGxhY2UgYHBhZGAgZGlzdGFuY2UgZnJvbSB0aGUgbWFpbiBncmFwaFxuICAgIG5Db250b3VyczogbnVtYmVyXG4gICAgY2lyY2xlRXZlcnk6IG51bWJlclxuICAgIHVwZGF0ZXI6IFVwZGF0ZXIyRFxuICAgIHhsYWJlbDogc3RyaW5nXG4gICAgeWxhYmVsOiBzdHJpbmdcbiAgICB0aXRsZTogc3RyaW5nXG4gICAgY29sb3JTY2FsZTogKHg6IG51bWJlcikgPT4gc3RyaW5nIHwgbnVtYmVyXG4gICAgbWF4VGljazogbnVtYmVyIC8vIG1heCBudW1iZXIgb2YgZGVzY2VudCB1cGRhdGVzIHRvIHRha2VcbiAgICBpbnRlcnZhbDogbnVtYmVyIC8vIHRpbWUgYmV0d2VlbiBkZXNjZW50IHVwZGF0ZXNcbn1cblxuaW50ZXJmYWNlIEdyYXBoU2NhbGVzIHtcbiAgICB4PzogZDMuU2NhbGVMaW5lYXI8bnVtYmVyLCBudW1iZXI+LFxuICAgIHk/OiBkMy5TY2FsZUxpbmVhcjxudW1iZXIsIG51bWJlcj4sXG4gICAgY29sb3I/OiAoeDogbnVtYmVyKSA9PiBzdHJpbmcgfCBudW1iZXIsXG4gICAgY3VydmU/OiBkMy5DdXJ2ZUNhdG11bGxSb21GYWN0b3J5LFxuICAgIGNvbnRvdXJzPzogZDMuQ29udG91cnMsXG4gICAgdGhyZXNob2xkcz86IG51bWJlcltdXG59XG5cbmludGVyZmFjZSBHcmFwaFNlbHMge1xuICAgIHhheGlzPzogRDNTZWxcbiAgICB5YXhpcz86IEQzU2VsXG4gICAgbGVnZW5kPzogRDNTZWxcbiAgICB0aXA/OiBEM1NlbFxuICAgIHhsYWJlbD86IEQzU2VsXG4gICAgeWxhYmVsPzogRDNTZWxcbiAgICBjaXJjbGU/OiBEM1NlbFxuICAgIGFycm93cz86IEQzU2VsW11cbiAgICB0aXRsZT86IEQzU2VsXG59XG5cbmNvbnN0IEVWRU5UUyA9IHtcbiAgICBzdGVwQWRkZWQ6IFwiU2ltcGxlTmV0X1N0ZXBBZGRlZFwiXG59XG5cbmV4cG9ydCBjbGFzcyBDb250b3VyUGxvdCBleHRlbmRzIFNWR1Zpc0NvbXBvbmVudDxUPiB7XG4gICAgY3NzbmFtZSA9IFwic2ltcGxlLWdyYXBoXCJcblxuICAgIF9kYXRhOiBUXG5cbiAgICBvcHRpb25zOiBHcmFwaE9wdGlvbnMgPSB7XG4gICAgICAgIG1heFdpZHRoOiA0NTAsXG4gICAgICAgIG1heEhlaWdodDogNTAwLFxuICAgICAgICBtYXJnaW46IHsgdG9wOiA1MCwgcmlnaHQ6IDc1LCBib3R0b206IDEyNSwgbGVmdDogNTAgfSxcbiAgICAgICAgcGFkOiAzMCxcbiAgICAgICAgeHJhbmdlOiBbMCwgMS42XSxcbiAgICAgICAgeXJhbmdlOiBbMCwgMS42XSxcbiAgICAgICAgbjogMjAxLFxuICAgICAgICBtOiAyMDEsXG4gICAgICAgIG54OiAxMSxcbiAgICAgICAgbnk6IDExLFxuICAgICAgICBuQ29udG91cnM6IDIwLFxuICAgICAgICBjaXJjbGVFdmVyeTogNCxcbiAgICAgICAgdXBkYXRlcjogbnVsbCxcbiAgICAgICAgeGxhYmVsOiBcInhcIixcbiAgICAgICAgeWxhYmVsOiBcInlcIixcbiAgICAgICAgdGl0bGU6IG51bGwsXG4gICAgICAgIC8vQHRzLWlnbm9yZVxuICAgICAgICBjb2xvclNjYWxlOiBkMy5zY2FsZUxpbmVhcigpXG4gICAgICAgICAgICAuZG9tYWluKFswLCAxLjRdKVxuICAgICAgICAgICAgLy9AdHMtaWdub3JlXG4gICAgICAgICAgICAucmFuZ2UoW1wic3RlZWxibHVlXCIsIFwid2hpdGVcIl0pXG4gICAgICAgICAgICAvL0B0cy1pZ25vcmVcbiAgICAgICAgICAgIC5pbnRlcnBvbGF0ZShkMy5pbnRlcnBvbGF0ZVJnYi5nYW1tYSgyLjIpKSxcbiAgICAgICAgbWF4VGljazogMTAwMCxcbiAgICAgICAgaW50ZXJ2YWw6IDEwLFxuICAgIH1cblxuICAgIHNlbHM6IEdyYXBoU2VscyA9IHt9XG5cbiAgICAvLyBPdGhlclxuICAgIF9jdXJyID0ge1xuICAgICAgICBjdXJyTG9jOiBuai5hcnJheShbMC4xLCAwLjJdKSxcbiAgICAgICAgc3RlcDogMCxcbiAgICAgICAgdGlja2VyOiBudWxsLFxuICAgIH1cblxuICAgIHN0YXRpYyBldmVudHMgPSBFVkVOVFNcblxuICAgIGNvbnN0cnVjdG9yKGQzcGFyZW50OiBEM1NlbCwgZXZlbnRIYW5kbGVyPzogU2ltcGxlRXZlbnRIYW5kbGVyLCBvcHRpb25zOiBQYXJ0aWFsPEdyYXBoT3B0aW9ucz4gPSB7fSkge1xuICAgICAgICBzdXBlcihkM3BhcmVudCwgZXZlbnRIYW5kbGVyLCBvcHRpb25zKVxuICAgICAgICBzdXBlci5pbml0U1ZHKG9wdGlvbnMpXG4gICAgICAgIHRoaXMuYmFzZS5jbGFzc2VkKHRoaXMuY3NzbmFtZSwgdHJ1ZSlcbiAgICAgICAgdGhpcy5vcHRpb25zLnVwZGF0ZXIgPSBvcHRpb25zLnVwZGF0ZXIgPT0gbnVsbCA/IG5ldyBVcGRhdGVyMkQoKSA6IG9wdGlvbnMudXBkYXRlclxuICAgICAgICB0aGlzLmluaXRQbG90KClcbiAgICB9XG5cbiAgICBzdGF0aWMgZnJvbUxhbmRzY2FwZShkM3BhcmVudDogRDNTZWwsIGV2ZW50SGFuZGxlcjogU2ltcGxlRXZlbnRIYW5kbGVyLCB0OiBMYW5kc2NhcGUyRCk6IENvbnRvdXJQbG90IHtcbiAgICAgICAgY29uc29sZS5sb2coXCJGcm9tIExhbmRzY2FwZVwiKTtcbiAgICAgICAgY29uc3QgdXBkYXRlciA9IG5ldyB0LnVwZGF0ZXJDbGFzcyh0KVxuICAgICAgICBjb25zdCBuZXdPcHRpb25zID0geyAuLi50LCB1cGRhdGVyIH1cbiAgICAgICAgcmV0dXJuIG5ldyBDb250b3VyUGxvdChkM3BhcmVudCwgZXZlbnRIYW5kbGVyLCBuZXdPcHRpb25zKVxuICAgIH1cblxuICAgIHNldFVwZGF0ZXIobmFtZTogJ2Jsb2NrJyB8ICdmdWxsJykge1xuICAgICAgICBjb25zdCBvcCA9IHRoaXMub3B0aW9uc1xuICAgICAgICBpZiAobmFtZSA9PSAnYmxvY2snKSB7XG4gICAgICAgICAgICBvcC51cGRhdGVyID0gb3AudXBkYXRlci50b0Jsb2NrKClcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChuYW1lID09ICdmdWxsJykge1xuICAgICAgICAgICAgb3AudXBkYXRlciA9IG9wLnVwZGF0ZXIudG9GdWxsKClcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiUGxlYXNlIGVudGVyIGEgdmFsaWQgaW5wdXQgYXMgdXBkYXRlclwiKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnVwZGF0ZVF1aXZlcnMoKVxuICAgIH1cblxuICAgIGdldCBzY2FsZXMoKTogR3JhcGhTY2FsZXMge1xuICAgICAgICBjb25zdCBvcCA9IHRoaXMub3B0aW9uc1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgeDogZDMuc2NhbGVMaW5lYXIoKS5kb21haW4ob3AueHJhbmdlKS5yYW5nZShbMCwgb3Aud2lkdGhdKSxcbiAgICAgICAgICAgIHk6IGQzLnNjYWxlTGluZWFyKCkuZG9tYWluKG9wLnlyYW5nZSkucmFuZ2UoW29wLmhlaWdodCwgMF0pLFxuICAgICAgICAgICAgY29udG91cnM6IGQzLmNvbnRvdXJzKCkuc2l6ZShbb3Aubiwgb3AubV0pLFxuICAgICAgICAgICAgY3VydmU6IGQzLmN1cnZlQ2F0bXVsbFJvbS5hbHBoYSgwLjUpLFxuICAgICAgICAgICAgY29sb3I6IG9wLmNvbG9yU2NhbGVcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHBsb3RDb250b3VycygpIHtcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgICAgIGNvbnN0IG9wID0gdGhpcy5vcHRpb25zO1xuICAgICAgICBjb25zdCBzY2FsZXMgPSB0aGlzLnNjYWxlcztcblxuICAgICAgICAvLyBjb25zdCBjb250b3VyRnVuYyA9ICh4LCB5KSA9PiB0aGlzLnVwZGF0ZXIuYWJzRXJyKG5qLmFycmF5KFt4LCB5XSkpXG4gICAgICAgIGNvbnN0IGNvbnRvdXJGdW5jID0gKHgsIHkpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGxvc3MgPSBvcC51cGRhdGVyLmxvc3MobmouYXJyYXkoW3gsIHldKSlcbiAgICAgICAgICAgIHJldHVybiBsb3NzXG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgdmFscyA9IGdldENvbnRvdXJWYWx1ZXMob3Aubiwgb3AubSwgb3AueHJhbmdlLCBvcC55cmFuZ2UsIGNvbnRvdXJGdW5jKVxuICAgICAgICAvLyBsZXQgdGhyZXNob2xkcyA9IGxpbnNwYWNlKGQzLm1pbih2YWxzKSwgZDMubWF4KHZhbHMpLCAyMClcbiAgICAgICAgbGV0IHRocmVzaG9sZHMgPSBwb3dzcGFjZShkMy5taW4odmFscyksIGQzLm1heCh2YWxzKSwgb3AubkNvbnRvdXJzLCAxKVxuXG4gICAgICAgIGNvbnN0IGNvbnRvdXJWYWxzID0gc2NhbGVzLmNvbnRvdXJzLnRocmVzaG9sZHModGhyZXNob2xkcykodmFscylcbiAgICAgICAgY29uc3QgY29udG91ckdyb3VwID0gdGhpcy5iYXNlLmFwcGVuZCgnZycpLmF0dHIoJ2lkJywgJ2NvbnRvdXItZ3JvdXAnKVxuICAgICAgICBjb25zdCBjb250b3VycyA9IGNvbnRvdXJHcm91cC5zZWxlY3RBbGwoXCJwYXRoLmNvbnRvdXJcIilcbiAgICAgICAgICAgIC5kYXRhKGNvbnRvdXJWYWxzKVxuXG4gICAgICAgIGNvbnRvdXJzLmpvaW4oXCJwYXRoXCIpXG4gICAgICAgICAgICAuYXR0cihcImNsYXNzXCIsIFwiY29udG91clwiKVxuICAgICAgICAgICAgLmF0dHIoXCJkXCIsIGQzLmdlb1BhdGgoZDMuZ2VvSWRlbnRpdHkoKS5zY2FsZShvcC53aWR0aCAvIG9wLm4pKSlcbiAgICAgICAgICAgIC5hdHRyKFwiZmlsbFwiLCBkID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gc2NhbGVzLmNvbG9yKGQudmFsdWUpXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNsYXNzZWQoXCJub3QtZml0XCIsIHRydWUpXG4gICAgfVxuXG4gICAgYWRkU3RlcCh2OiBBcnJheSwgcHJldjogQXJyYXkgPSBudWxsKSB7XG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuICAgICAgICBjb25zdCBvcCA9IHRoaXMub3B0aW9ucztcbiAgICAgICAgY29uc3Qgc2NhbGVzID0gdGhpcy5zY2FsZXM7XG4gICAgICAgIGNvbnN0IHNlbHMgPSB0aGlzLnNlbHM7XG5cbiAgICAgICAgY29uc3QgY3ggPSBzY2FsZXMueC5jbGFtcCh0cnVlKSh2LmdldCgwKSlcbiAgICAgICAgY29uc3QgY3kgPSBzY2FsZXMueS5jbGFtcCh0cnVlKSh2LmdldCgxKSlcblxuICAgICAgICBpZiAocHJldiAhPSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLmJhc2UuYXBwZW5kKCdsaW5lJylcbiAgICAgICAgICAgICAgICAuYXR0cigneDEnLCBzY2FsZXMueChwcmV2LmdldCgwKSkpXG4gICAgICAgICAgICAgICAgLmF0dHIoJ3kxJywgc2NhbGVzLnkocHJldi5nZXQoMSkpKVxuICAgICAgICAgICAgICAgIC5hdHRyKCd4MicsIGN4KVxuICAgICAgICAgICAgICAgIC5hdHRyKCd5MicsIGN5KVxuICAgICAgICAgICAgICAgIC5jbGFzc2VkKCdkZXNjZW5kaW5nLWxpbmUnLCB0cnVlKVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gQ2hlY2sgYm9yZGVyIGNvbmRpdGlvbnNcbiAgICAgICAgaWYgKHYuZ2V0KDApID49IG9wLnhyYW5nZVsxXSB8fCB2LmdldCgxKSA+PSBvcC55cmFuZ2VbMV0pIHtcbiAgICAgICAgICAgIHRoaXMuX2N1cnIudGlja2VyLnVuc3Vic2NyaWJlKClcbiAgICAgICAgICAgIHJldHVybiB2XG4gICAgICAgIH1cblxuXG4gICAgICAgIGlmICgoKHRoaXMuX2N1cnIuc3RlcCAlIG9wLmNpcmNsZUV2ZXJ5KSA9PSAwKSB8fCAocHJldiA9PSBudWxsKSkge1xuICAgICAgICAgICAgc2Vscy5jaXJjbGUgPSB0aGlzLmJhc2UuYXBwZW5kKCdjaXJjbGUnKVxuICAgICAgICAgICAgICAgIC5hdHRyKCdjeCcsIGN4KVxuICAgICAgICAgICAgICAgIC5hdHRyKCdjeScsIGN5KVxuICAgICAgICAgICAgICAgIC5hdHRyKCdyJywgMilcbiAgICAgICAgICAgICAgICAuY2xhc3NlZCgnZGVzY2VuZGluZy1wb2ludCcsIHRydWUpXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9jdXJyLnN0ZXAgKz0gMVxuICAgICAgICB0aGlzLmV2ZW50SGFuZGxlci50cmlnZ2VyKEVWRU5UUy5zdGVwQWRkZWQsIHYpXG4gICAgICAgIHJldHVybiB2O1xuICAgIH1cblxuICAgIGNsZWFyQ2lyY2xlcygpIHtcbiAgICAgICAgdGhpcy5iYXNlLnNlbGVjdEFsbCgnLmRlc2NlbmRpbmctcG9pbnQnKS5yZW1vdmUoKVxuICAgICAgICB0aGlzLmJhc2Uuc2VsZWN0QWxsKCcuZGVzY2VuZGluZy1saW5lJykucmVtb3ZlKClcbiAgICB9XG5cbiAgICBjbGVhclF1aXZlcnMoKSB7XG4gICAgICAgIHRoaXMuYmFzZS5zZWxlY3RBbGwoJy5xdWl2ZXInKS5yZW1vdmUoKVxuICAgICAgICB0aGlzLnNlbHMuYXJyb3dzID0gW11cbiAgICB9XG5cbiAgICBwbG90RGVzY2VudCgpIHtcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgICAgIGNvbnN0IG9wID0gdGhpcy5vcHRpb25zO1xuICAgICAgICBsZXQgcHJldlZhbCA9IG51bGw7XG5cbiAgICAgICAgY29uc3Qgc3ViT2JqID0ge1xuICAgICAgICAgICAgbmV4dDogKHZhbCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuYWRkU3RlcCh2YWwsIHByZXZWYWwpXG4gICAgICAgICAgICAgICAgcHJldlZhbCA9IHZhbFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVycjogKGVycikgPT4gY29uc29sZS5sb2coZXJyKSxcbiAgICAgICAgICAgIGNvbXBsZXRlOiAoKSA9PiBjb25zb2xlLmxvZyhcIkNPTVBMRVRFXCIpXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBwcmVwID0gKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5hZGRTdGVwKHRoaXMuY3VycigpKVxuICAgICAgICAgICAgcHJldlZhbCA9IHRoaXMuY3VycigpXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9jdXJyLnRpY2tlciA9IGludGVydmFsKG9wLmludGVydmFsKS5waXBlKFxuICAgICAgICAgICAgc3RhcnRXaXRoKHByZXAoKSksXG4gICAgICAgICAgICAvL0B0cy1pZ25vcmVcbiAgICAgICAgICAgIHNjYW4odiA9PiBvcC51cGRhdGVyLm5leHQodiksIHNlbGYuY3VycigpKSxcbiAgICAgICAgICAgIHRha2Uob3AubWF4VGljaylcbiAgICAgICAgKS5zdWJzY3JpYmUoc3ViT2JqKVxuICAgIH1cblxuICAgIGludG9WaXModjogQXJyYXkpIHtcbiAgICAgICAgcmV0dXJuIHsgeDogdGhpcy5zY2FsZXMueCh2LmdldCgwKSksIHk6IHRoaXMuc2NhbGVzLnkodi5nZXQoMSkpIH1cbiAgICB9XG5cbiAgICBpbnRvTWF0aCh2OiBWZWN0b3IyRCkge1xuICAgICAgICByZXR1cm4geyB4OiB0aGlzLnNjYWxlcy54LmludmVydCh2LngpLCB5OiB0aGlzLnNjYWxlcy55LmludmVydCh2LnkpIH1cbiAgICB9XG5cbiAgICB1cGRhdGVRdWl2ZXJzKCkge1xuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICAgICAgY29uc3Qgb3AgPSB0aGlzLm9wdGlvbnM7XG4gICAgICAgIGNvbnN0IHNlbHMgPSB0aGlzLnNlbHM7XG4gICAgICAgIGNvbnN0IHNjYWxlcyA9IHRoaXMuc2NhbGVzO1xuXG4gICAgICAgIC8vIE1vZGlmeSBhcnJvd3MgaW5wbGFjZVxuICAgICAgICBzZWxzLmFycm93cy5mb3JFYWNoKGFycm93ID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHB0OiBWZWN0b3IyRCA9IHRoaXMuaW50b01hdGgoe1xuICAgICAgICAgICAgICAgIHg6ICthcnJvdy5hdHRyKCd4MScpLFxuICAgICAgICAgICAgICAgIHk6ICthcnJvdy5hdHRyKCd5MScpXG4gICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICBjb25zdCBwdDEgPSBuai5hcnJheShbcHQueCwgcHQueV0pXG4gICAgICAgICAgICBjb25zdCBwdDIgPSBvcC51cGRhdGVyLm5leHRMcihwdDEpXG5cbiAgICAgICAgICAgIGFycm93LmF0dHIoJ3gyJywgc2NhbGVzLngocHQyLmdldCgwKSkpXG4gICAgICAgICAgICAgICAgLmF0dHIoJ3kyJywgc2NhbGVzLnkocHQyLmdldCgxKSkpXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgY3JlYXRlUXVpdmVycygpIHtcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgICAgIGNvbnN0IG9wID0gdGhpcy5vcHRpb25zO1xuICAgICAgICBjb25zdCBzY2FsZXMgPSB0aGlzLnNjYWxlcztcbiAgICAgICAgY29uc3Qgc2VscyA9IHRoaXMuc2VscztcblxuICAgICAgICBjb25zdCBwb2ludHMgPSBTVkcubWVzaGdyaWQob3AubngsIG9wLm55LCBvcC54cmFuZ2UsIG9wLnlyYW5nZSlcbiAgICAgICAgY29uc3QgY29sb3IgPSBcImJsdWVcIjtcbiAgICAgICAgY29uc3Qgd2lkdGggPSAxLjI1O1xuXG4gICAgICAgIGNvbnN0IHF1aXZlckdyb3VwID0gdGhpcy5iYXNlLmFwcGVuZCgnZycpLmF0dHIoJ2lkJywgJ3F1aXZlci1ncm91cCcpIC8vIGluaXQgc2hvdWxkIGhhdmUgdGhlc2UgZ3JvdXBzIGFscmVhZHkgc2VsZWN0ZWRcbiAgICAgICAgdGhpcy5jbGVhclF1aXZlcnMoKVxuXG4gICAgICAgIHNlbHMuYXJyb3dzID0gcG9pbnRzLm1hcChwdCA9PiB7XG4gICAgICAgICAgICBjb25zdCBwdDEgPSBuai5hcnJheShbcHQueCwgcHQueV0pXG4gICAgICAgICAgICBjb25zdCBwdDIgPSBvcC51cGRhdGVyLm5leHRMcihwdDEpXG4gICAgICAgICAgICAvL0B0cy1pZ25vcmVcbiAgICAgICAgICAgIGNvbnN0IGFycm93ID0gU1ZHLmluc2VydEFycm93KHF1aXZlckdyb3VwLCBzY2FsZXMueChwdC54KSwgc2NhbGVzLnkocHQueSksIHNjYWxlcy54KHB0Mi5nZXQoMCkpLCBzY2FsZXMueShwdDIuZ2V0KDEpKSwgY29sb3IsIHdpZHRoKVxuICAgICAgICAgICAgYXJyb3cuY2xhc3NlZCgncXVpdmVyJywgdHJ1ZSlcbiAgICAgICAgICAgIHJldHVybiBhcnJvd1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIGluaXRQbG90KCkge1xuICAgICAgICAvLyBJbml0aWFsaXplIHBsb3RzXG4gICAgICAgIHRoaXMucGxvdENvbnRvdXJzKClcbiAgICAgICAgdGhpcy5jcmVhdGVRdWl2ZXJzKClcbiAgICB9XG5cbiAgICBpbml0KCkge1xuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICAgICAgY29uc3Qgb3AgPSB0aGlzLm9wdGlvbnM7XG4gICAgICAgIGNvbnN0IHNjYWxlcyA9IHRoaXMuc2NhbGVzO1xuICAgICAgICBjb25zdCBzZWxzID0gdGhpcy5zZWxzO1xuXG4gICAgICAgIC8vIEFkZCBkZWZpbml0aW9uc1xuICAgICAgICBTVkcuYWRkQXJyb3dzKHRoaXMuc3ZnKVxuXG4gICAgICAgIC8vIENyZWF0ZSBzY2FsZXNcbiAgICAgICAgLy8gQWRkIEF4ZXMgYW5kIGxhYmVsc1xuICAgICAgICBzZWxzLnhheGlzID0gdGhpcy5iYXNlLmFwcGVuZChcImdcIilcbiAgICAgICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJheGlzIGF4aXMtLXhcIilcbiAgICAgICAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIFNWRy50cmFuc2xhdGUoMCwgb3AuaGVpZ2h0KSlcbiAgICAgICAgICAgIC5jYWxsKGQzLmF4aXNCb3R0b20oc2NhbGVzLngpLnRpY2tzKDMsIFwic1wiKSk7XG5cbiAgICAgICAgc2Vscy55YXhpcyA9IHRoaXMuYmFzZS5hcHBlbmQoXCJnXCIpXG4gICAgICAgICAgICAuYXR0cihcImNsYXNzXCIsIFwiYXhpcyBheGlzLS15XCIpXG4gICAgICAgICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBTVkcudHJhbnNsYXRlKDAsIDApKVxuICAgICAgICAgICAgLmNhbGwoZDMuYXhpc0xlZnQoc2NhbGVzLnkpLnRpY2tzKDMsIFwic1wiKSk7XG5cbiAgICAgICAgc2Vscy54bGFiZWwgPSB0aGlzLmJhc2UuYXBwZW5kKFwidGV4dFwiKVxuICAgICAgICAgICAgLmNsYXNzZWQoXCJheGlzLWxhYmVsXCIsIHRydWUpXG4gICAgICAgICAgICAuYXR0cihcInRleHQtYW5jaG9yXCIsIFwibWlkZGxlXCIpXG4gICAgICAgICAgICAuYXR0cihcImNsYXNzXCIsIFwidGl0bGVzXCIpXG4gICAgICAgICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBTVkcudHJhbnNsYXRlKG9wLndpZHRoIC8gMiwgb3AuaGVpZ2h0ICsgb3AucGFkKSlcbiAgICAgICAgICAgIC50ZXh0KG9wLnhsYWJlbClcblxuICAgICAgICBzZWxzLnlsYWJlbCA9IHRoaXMuYmFzZS5hcHBlbmQoXCJ0ZXh0XCIpXG4gICAgICAgICAgICAuY2xhc3NlZChcImF4aXMtbGFiZWxcIiwgdHJ1ZSlcbiAgICAgICAgICAgIC5hdHRyKFwidGV4dC1hbmNob3JcIiwgXCJtaWRkbGVcIilcbiAgICAgICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJ0aXRsZXNcIilcbiAgICAgICAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIFNWRy50cmFuc2xhdGUoLW9wLnBhZCwgb3AuaGVpZ2h0IC8gMikgKyBTVkcucm90YXRlKC05MCkpXG4gICAgICAgICAgICAudGV4dChvcC55bGFiZWwpXG5cbiAgICAgICAgc2Vscy50aXRsZSA9IHRoaXMuYmFzZS5hcHBlbmQoXCJ0ZXh0XCIpXG4gICAgICAgICAgICAuY2xhc3NlZChcImF4aXMtbGFiZWxcIiwgdHJ1ZSlcbiAgICAgICAgICAgIC5hdHRyKFwidGV4dC1hbmNob3JcIiwgXCJtaWRkbGVcIilcbiAgICAgICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJ0aXRsZXNcIilcbiAgICAgICAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIFNWRy50cmFuc2xhdGUob3Aud2lkdGggLyAyLCAtb3AucGFkIC8gMikpXG4gICAgICAgICAgICAudGV4dChvcC50aXRsZSlcblxuICAgICAgICAvLyBDcmVhdGUgY2xpY2sgYmVoYXZpb3JcbiAgICAgICAgdGhpcy5iYXNlLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmIChzZWxmLl9jdXJyLnRpY2tlciAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBzZWxmLl9jdXJyLnRpY2tlci51bnN1YnNjcmliZSgpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBjb29yZHMgPSBkMy5tb3VzZSh0aGlzKTtcbiAgICAgICAgICAgIHNlbGYuX2N1cnIuc3RlcCA9IDBcbiAgICAgICAgICAgIHNlbGYuY3Vycihbc2NhbGVzLnguaW52ZXJ0KGNvb3Jkc1swXSksIHNjYWxlcy55LmludmVydChjb29yZHNbMV0pXSlcblxuICAgICAgICAgICAgLy8gaWYgKHNlbGYuY3VycigpLnggPiAwICYmIHNlbGYuY3VycigpLnkgPiAwICYmIHNlbGYuY3VycigpLnggPCAob3AueHJhbmdlWzFdIC0gMC4xKSAmJiBzZWxmLmN1cnIoKS55IDwgKG9wLnlyYW5nZVsxXSAtIDAuMSkpIHtcbiAgICAgICAgICAgIC8vIGlmIChzZWxmLmN1cnIoKS5nZXQoMCkgPiAwICYmIHNlbGYuY3VycigpLmdldCgxKSA+IDApIHtcbiAgICAgICAgICAgIHNlbGYuYWRkU3RlcChzZWxmLmN1cnIoKSlcbiAgICAgICAgICAgIHNlbGYuY2xlYXJDaXJjbGVzKCk7XG4gICAgICAgICAgICBzZWxmLnBsb3REZXNjZW50KCk7XG4gICAgICAgICAgICAvLyB9XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgY3VycigpOiBBcnJheVxuICAgIGN1cnIodmFsOiBBcnJheSB8IG51bWJlcltdKTogdGhpc1xuICAgIGN1cnIodmFsPykge1xuICAgICAgICBpZiAodmFsID09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9jdXJyLmN1cnJMb2NcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX2N1cnIuY3VyckxvYyA9IG5qLmFycmF5KHZhbCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGRhdGEoKTogbnVtYmVyW11cbiAgICBkYXRhKHZhbDogbnVtYmVyW10pOiB0aGlzXG4gICAgZGF0YSh2YWw/KSB7XG4gICAgICAgIGlmICh2YWwgPT0gbnVsbCkgcmV0dXJuIHRoaXMuX2RhdGFcbiAgICAgICAgdGhpcy5fZGF0YSA9IHZhbFxuICAgICAgICByZXR1cm4gdGhpc1xuICAgIH1cblxuICAgIHEoKTogbnVtYmVyXG4gICAgcSh2YWw6IG51bWJlcik6IHRoaXNcbiAgICBxKHZhbD8pIHtcbiAgICAgICAgY29uc3Qgb3AgPSB0aGlzLm9wdGlvbnNcbiAgICAgICAgaWYgKHZhbCA9PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gb3AudXBkYXRlci5xKCk7XG4gICAgICAgIH1cblxuICAgICAgICBvcC51cGRhdGVyLnEodmFsKVxuICAgICAgICB0aGlzLnVwZGF0ZVF1aXZlcnMoKVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBldGEoKTogbnVtYmVyXG4gICAgZXRhKHZhbDogbnVtYmVyKTogdGhpc1xuICAgIGV0YSh2YWw/KSB7XG4gICAgICAgIGNvbnN0IG9wID0gdGhpcy5vcHRpb25zXG4gICAgICAgIGlmICh2YWwgPT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIG9wLnVwZGF0ZXIuZXRhKCk7XG4gICAgICAgIH1cblxuICAgICAgICBvcC51cGRhdGVyLmV0YSh2YWwpXG4gICAgICAgIHRoaXMudXBkYXRlUXVpdmVycygpXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbn0iLCJpbXBvcnQgKiBhcyBkMyBmcm9tICdkMydcbmltcG9ydCB7IE1hbnVhbFVwZGF0ZXIgfSBmcm9tIFwiLi9NYW51YWxVcGRhdGVyXCJcbmltcG9ydCB7IFZlY3RvcjJEIH0gZnJvbSBcIi4uL3R5cGVzXCJcbmltcG9ydCAqIGFzIFIgZnJvbSAncmFtZGEnXG5pbXBvcnQgeyBTdWJqZWN0LCBCZWhhdmlvclN1YmplY3QgfSBmcm9tIFwicnhqc1wiXG5cbmV4cG9ydCB0eXBlIEJhbGxIaXN0b3J5ID0ge1xuICAgIGNsYXNzbmFtZTogc3RyaW5nXG4gICAgeDogbnVtYmVyXG4gICAgbG9zczogbnVtYmVyXG59XG5cbmV4cG9ydCBjbGFzcyBHb2xmQmFsbCB7XG4gICAgX3g6IG51bWJlclxuICAgIHVwZGF0ZXI6IE1hbnVhbFVwZGF0ZXJcbiAgICBjbGFzc25hbWU6IHN0cmluZ1xuICAgIHN0cmVhbTogU3ViamVjdDxCYWxsSGlzdG9yeT4gLy8gUHVzaGVzIGhpc3Rvcnkgb2YgeCB2YWx1ZXMgdG8gdGhpc1xuXG4gICAgY29uc3RydWN0b3IodXBkYXRlcjogTWFudWFsVXBkYXRlciwgY2xhc3NuYW1lOiBzdHJpbmcsIHggPSAwKSB7XG4gICAgICAgIHRoaXMudXBkYXRlciA9IHVwZGF0ZXJcbiAgICAgICAgdGhpcy5feCA9IHhcbiAgICAgICAgdGhpcy5jbGFzc25hbWUgPSBjbGFzc25hbWVcbiAgICAgICAgdGhpcy5zdHJlYW0gPSBuZXcgU3ViamVjdCgpXG4gICAgfVxuXG4gICAgZ2V0IHgoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl94XG4gICAgfVxuXG4gICAgc2V0IHgodjogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuX3ggPSB2XG4gICAgfVxuXG4gICAgbmV4dFgoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudXBkYXRlci5uZXh0KHRoaXMuX3gpXG4gICAgfVxuXG4gICAgbmV4dCgpOiBHb2xmQmFsbCB7XG4gICAgICAgIGNvbnN0IG5leHRYID0gdGhpcy5uZXh0WCgpXG4gICAgICAgIHJldHVybiBuZXcgR29sZkJhbGwodGhpcy51cGRhdGVyLCB0aGlzLmNsYXNzbmFtZSwgdGhpcy5uZXh0WCgpKVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFVzZSB0aGUgdXBkYXRlciB0byB0YWtlIHRoZSBuZXh0IHN0ZXBcbiAgICAgKiBcbiAgICAgKiBAcGFyYW0gZm9yY2VYIEZvcmNlIHRoZSBuZXh0WCB0byBiZSBvZiB0aGlzIHZhbHVlXG4gICAgICovXG4gICAgc3RlcF8oZm9yY2VYOm51bWJlcnxudWxsPW51bGwpOiB0aGlzIHtcbiAgICAgICAgaWYgKGZvcmNlWCAhPSBudWxsKSB0aGlzLnggPSBmb3JjZVhcbiAgICAgICAgZWxzZSB0aGlzLnggPSB0aGlzLm5leHRYKClcblxuICAgICAgICB0aGlzLnN0cmVhbS5uZXh0KHtcbiAgICAgICAgICAgIGNsYXNzbmFtZTogdGhpcy5jbGFzc25hbWUsXG4gICAgICAgICAgICB4OiB0aGlzLngsXG4gICAgICAgICAgICBsb3NzOiB0aGlzLnVwZGF0ZXIubG9zcyh0aGlzLngpXG4gICAgICAgIH0pXG4gICAgICAgIHJldHVybiB0aGlzXG4gICAgfVxuXG4gICAgdG9WZWMoZjogKHg6IG51bWJlcikgPT4gbnVtYmVyKTogVmVjdG9yMkQge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgeDogdGhpcy5feCxcbiAgICAgICAgICAgIHk6IGYodGhpcy5feClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHEoKTogbnVtYmVyXG4gICAgcSh2YWw6IG51bWJlcik6IHRoaXNcbiAgICBxKHZhbD8pIHtcbiAgICAgICAgaWYgKHZhbCA9PSBudWxsKSByZXR1cm4gdGhpcy51cGRhdGVyLnFcbiAgICAgICAgdGhpcy51cGRhdGVyLnEgPSB2YWxcbiAgICAgICAgcmV0dXJuIHRoaXNcbiAgICB9XG5cbiAgICBldGEoKTogbnVtYmVyXG4gICAgZXRhKHZhbDogbnVtYmVyKTogdGhpc1xuICAgIGV0YSh2YWw/KSB7XG4gICAgICAgIGlmICh2YWwgPT0gbnVsbCkgcmV0dXJuIHRoaXMudXBkYXRlci5ldGFcbiAgICAgICAgdGhpcy51cGRhdGVyLmV0YSA9IHZhbFxuICAgICAgICByZXR1cm4gdGhpc1xuICAgIH1cbn0iLCJpbXBvcnQgKiBhcyBkMyBmcm9tICdkMydcbmltcG9ydCB7IEQzU2VsLCBsaW5zcGFjZSB9IGZyb20gJy4uL3V0aWwveGQzJ1xuaW1wb3J0ICogYXMgUiBmcm9tICdyYW1kYSdcbmltcG9ydCB7IFZlY3RvcjJEIH0gZnJvbSAnLi4vdHlwZXMnXG5pbXBvcnQgeyBTVkdPcHRpb25zLCBTVkdWaXNDb21wb25lbnQgfSBmcm9tICcuLi91dGlsL1NWR1Zpc0NvbXBvbmVudCdcbmltcG9ydCB7IFNpbXBsZUV2ZW50SGFuZGxlciB9IGZyb20gJy4uL3V0aWwvU2ltcGxlRXZlbnRIYW5kbGVyJztcbmltcG9ydCB7IFNWRyB9IGZyb20gJy4uL3V0aWwvU1ZHcGx1cydcbmltcG9ydCB7IGludGVydmFsLCBmcm9tRXZlbnQgfSBmcm9tICdyeGpzJ1xuaW1wb3J0IHsgdGFrZSwgc2NhbiB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJ1xuaW1wb3J0IHsgTWFudWFsVXBkYXRlciB9IGZyb20gJy4vTWFudWFsVXBkYXRlcidcbmltcG9ydCB7IEdvbGZCYWxsIH0gZnJvbSAnLi9Hb2xmQmFsbCdcbmltcG9ydCB7IGxhbmRzY2FwZXMsIExhbmRzY2FwZSwgYmFzZUxvc3MsIGdldFBsb3RGdW5jIH0gZnJvbSBcIi4uL0dvbGZMYW5kc2NhcGVzXCI7XG5cblxudHlwZSBUID0gR29sZkJhbGxbXVxuXG5pbnRlcmZhY2UgR3JhcGhPcHRpb25zIGV4dGVuZHMgU1ZHT3B0aW9ucyB7XG4gICAgcGFkOiBudW1iZXJcbiAgICBtYXhJdGVyOiBudW1iZXIgLy8gSG93IG1hbnkgaXRlcmF0aW9ucyB0byB0YWtlP1xuICAgIGxhbmRzY2FwZTogTGFuZHNjYXBlXG59XG5cbmludGVyZmFjZSBTY2FsZVhZIHtcbiAgICB4OiBkMy5TY2FsZUxpbmVhcjxudW1iZXIsbnVtYmVyPlxuICAgIHk6IGQzLlNjYWxlTGluZWFyPG51bWJlcixudW1iZXI+XG59XG5cbmludGVyZmFjZSBHcmFwaFNjYWxlcyB7XG4gICAgYmFzZTJtYXRoPzogU2NhbGVYWSxcbiAgICBiYXNlMnB4PzogU2NhbGVYWSxcbiAgICBtYXRoMnB4PzogU2NhbGVYWSxcbiAgICBiYXNlMmxvc3M/OiBkMy5TY2FsZUxpbmVhcjxudW1iZXIsIG51bWJlcj4sXG4gICAgcGF0aHM/OiBkMy5MaW5lPG51bWJlcj5bXSxcbiAgICBjb2xvcj86IGQzLlNjYWxlU2VxdWVudGlhbDxudW1iZXI+LFxufVxuXG5pbnRlcmZhY2UgR3JhcGhTZWxzIHtcbiAgICB4YXhpcz86IEQzU2VsXG4gICAgeWF4aXM/OiBEM1NlbFxuICAgIHhsYWJlbD86IEQzU2VsXG4gICAgbGluZT86IEQzU2VsXG4gICAgYmFja2Ryb3A/OiBEM1NlbFxuICAgIGJhbGw/OiBEM1NlbFxuICAgIG1hc2s/OiBEM1NlbFxuICAgIG1hc2tMaW5lPzogRDNTZWxcbiAgICBtYXNrQmFja2dyb3VuZD86IEQzU2VsXG4gICAgbGluZUJhY2tncm91bmQ/OiBEM1NlbFxufVxuXG5sZXQgQ0xFQVJFRCA9IDA7XG4vLyAvLyBOb3RlIHRoYXQgcGxvdEZ1bmMgaXMgdGhlIGxvc3MgZnVuY3Rpb24gd2UgcGxvdCBhbmQgZnVuYyBpcyB0aGUgY29tcG9uZW50IG9mIHRoZSBsb3NzIGZ1bmN0aW9uIG5lZWRlZCBmb3IgdGhlIHVwZGF0ZXJcbi8vIC8vIGV4cG9ydCBjb25zdCBmdW5jID0geCA9PiBNYXRoLnRhbmgoeClcbi8vIC8vIGV4cG9ydCBjb25zdCBkRnVuYyA9IHggPT4gTWF0aC5wb3coTWF0aC5jb3NoKHgpLCAtMilcbi8vIGV4cG9ydCBjb25zdCBmdW5jID0geCA9PiBNYXRoLnRhbmgoeCAtIDExKSAvIDQgKyBNYXRoLnRhbmgoeCAtIDYpIC8gNCArIE1hdGgudGFuaCh4KSArIE1hdGgudGFuaCh4ICsgNikgLyA0ICsgTWF0aC50YW5oKHggKyAxMSkgLyA0XG4vLyBleHBvcnQgY29uc3QgZEZ1bmMgPSB4ID0+IE1hdGgucG93KE1hdGguY29zaCh4IC0gMTEpLCAtMikgLyA0ICsgTWF0aC5wb3coTWF0aC5jb3NoKHggLSA2KSwgLTIpIC8gNCArIE1hdGgucG93KE1hdGguY29zaCh4KSwgLTIpICsgTWF0aC5wb3coTWF0aC5jb3NoKHggKyA2KSwgLTIpIC8gNCArIE1hdGgucG93KE1hdGguY29zaCh4ICsgMTEpLCAtMikgLyA0XG4vLyAvLyBleHBvcnQgY29uc3QgZnVuYyA9IHggPT4gTWF0aC5zaWduKHgpICogKDEgLSAoMSAvICgxICsgTWF0aC5hYnMoeCkpKSlcbi8vIC8vIGV4cG9ydCBjb25zdCBkRnVuYyA9IHggPT4gMSAvIE1hdGgucG93KDEgKyBNYXRoLmFicyh4KSwgMilcblxuLy8gZXhwb3J0IGNvbnN0IHBsb3RGdW5jID0geCA9PiBiYXNlTG9zcyhmdW5jKHgpKVxuXG5leHBvcnQgY2xhc3MgR29sZkhvbGUxRCBleHRlbmRzIFNWR1Zpc0NvbXBvbmVudDxUPiB7XG4gICAgY3NzbmFtZSA9IFwiZ29sZi1ob2xlLWNoYXJ0XCJcbiAgICBtYXNrSWQ6IHN0cmluZ1xuXG4gICAgX2RhdGE6IFRcblxuICAgIG9wdGlvbnM6IEdyYXBoT3B0aW9ucyA9IHtcbiAgICAgICAgbWF4V2lkdGg6IDQwMCxcbiAgICAgICAgbWF4SGVpZ2h0OiAyMDAsXG4gICAgICAgIG1hcmdpbjogeyB0b3A6IDUsIHJpZ2h0OiAxMCwgYm90dG9tOiA0MCwgbGVmdDogMTAgfSxcbiAgICAgICAgcGFkOiAzMCxcbiAgICAgICAgbWF4SXRlcjogNjAwLFxuICAgICAgICBsYW5kc2NhcGU6IGxhbmRzY2FwZXMuaG9sZVxuICAgIH1cblxuICAgIHNjYWxlczogR3JhcGhTY2FsZXMgPSB7fVxuXG4gICAgc2VsczogR3JhcGhTZWxzID0ge31cblxuICAgIGNvbnN0cnVjdG9yKGQzcGFyZW50OiBEM1NlbCwgZXZlbnRIYW5kbGVyPzogU2ltcGxlRXZlbnRIYW5kbGVyLCBvcHRpb25zID0ge30sIElEID0gMCkge1xuICAgICAgICBzdXBlcihkM3BhcmVudCwgZXZlbnRIYW5kbGVyLCBvcHRpb25zLCBJRClcbiAgICAgICAgdGhpcy5tYXNrSWQgPSBgbGluZS1tYXNrLSR7dGhpcy5JRH1gXG4gICAgICAgIHN1cGVyLmluaXRTVkcob3B0aW9ucywgW1wiYmdcIl0pXG4gICAgICAgIHRoaXMuYmFzZS5jbGFzc2VkKHRoaXMuY3NzbmFtZSwgdHJ1ZSlcblxuICAgICAgICBjb25zdCB6ID0gdGhpcy5vcHRpb25zLmxhbmRzY2FwZVxuICAgICAgICBcbiAgICAgICAgLy8gTmVlZCB0byBoYXZlIGluaXRpYWwgZGF0YVxuICAgICAgICBjb25zdCBkYXRhID0gW1xuICAgICAgICAgICAgbmV3IEdvbGZCYWxsKG5ldyBNYW51YWxVcGRhdGVyKHouZiwgei5kZiwgMCwgMC45KSwgJ2dvbGYtYmFsbC1zZ2QnLCA0KSxcbiAgICAgICAgXVxuXG4gICAgICAgIHRoaXMuZGF0YShkYXRhKVxuICAgICAgICB0aGlzLmluaXRCYWxscygpXG4gICAgfVxuXG4gICAgbGFuZHNjYXBlKCk6IExhbmRzY2FwZVxuICAgIGxhbmRzY2FwZSh2YWw6IExhbmRzY2FwZSk6IHRoaXNcbiAgICBsYW5kc2NhcGUodmFsPykge1xuICAgICAgICBpZiAodmFsID09IG51bGwpIHJldHVybiB0aGlzLm9wdGlvbnMubGFuZHNjYXBlXG4gICAgICAgIGNvbnN0IG9wID0gdGhpcy5vcHRpb25zXG4gICAgICAgIG9wLmxhbmRzY2FwZSA9IHZhbFxuXG4gICAgICAgIC8vIFVwZGF0ZSB4cmFuZ2UgYW5kIHlyYW5nZVxuICAgICAgICB0aGlzLnVwZGF0ZVNjYWxlcyhvcClcbiAgICAgICAgdGhpcy51cGRhdGVBeGVzKHRoaXMuc2NhbGVzLCBvcClcblxuICAgICAgICAvLyBVcGRhdGUgZGF0YVxuICAgICAgICB0aGlzLmRhdGEoKS5mb3JFYWNoKGIgPT4ge1xuICAgICAgICAgICAgYi51cGRhdGVyLmYgPSB2YWwuZlxuICAgICAgICAgICAgYi51cGRhdGVyLmRmID0gdmFsLmRmXG4gICAgICAgIH0pXG5cbiAgICAgICAgdGhpcy5jbGVhckN1cnZlKClcbiAgICAgICAgdGhpcy5wbG90Q3VydmUoKVxuXG4gICAgICAgIHJldHVybiB0aGlzXG4gICAgfVxuXG4gICAgLyoqIFJldHVybiBmaXJzdCB1cGRhdGVyIGluIGRhdGEgKi9cbiAgICBnZXQgZGF0YUhlYWQoKTogR29sZkJhbGwge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZGF0YSgpWzBdXG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJMb29rcyBsaWtlIHRoZXJlIGlzIG5vIGRhdGEgaW4gdGhpcyBnb2xmIGhvbGVcIik7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUHV0IGEgdmVjdG9yIGludG8gdGhlIGNvb3JkaW5hdGUgc3lzdGVtIHVzZWQgYnkgdGhlIHZpc3VhbGl6YXRpb25cbiAgICAgKiBcbiAgICAgKiBAcGFyYW0gdiBWZWN0b3IgXG4gICAgICovXG4gICAgaW50b1Zpcyh2OiBWZWN0b3IyRCkge1xuICAgICAgICByZXR1cm4geyB4OiB0aGlzLnNjYWxlcy5tYXRoMnB4Lngodi54KSwgeTogdGhpcy5zY2FsZXMubWF0aDJweC55KHYueSkgfVxuICAgIH1cblxuICAgIC8vIFRha2UgYSB2ZWN0b3IgaW4gdGhlIGNvb3JkaW5hdGUgc3lzdGVtIGFuZCByZXR1cm4gaXQgdG8gdGhlIG1hdGggY29vcmRpbmF0ZXNcbiAgICBpbnRvTWF0aCh2OiBWZWN0b3IyRCkge1xuICAgICAgICByZXR1cm4geyB4OiB0aGlzLnNjYWxlcy5tYXRoMnB4LnguaW52ZXJ0KHYueCksIHk6IHRoaXMuc2NhbGVzLm1hdGgycHgueS5pbnZlcnQodi55KSB9XG4gICAgfVxuXG4gICAgLy8gVHVybiBhIG51bWJlciBpbnRvIGEgdmVjdG9yXG4gICAgbnVtMnZlYyh4OiBudW1iZXIpOiBWZWN0b3IyRCB7XG4gICAgICAgIGNvbnN0IG9wID0gdGhpcy5vcHRpb25zXG4gICAgICAgIHJldHVybiB7IHg6IHgsIHk6IG9wLmxhbmRzY2FwZS5sb3NzKHgpIH1cbiAgICB9XG5cbiAgICAvLyBUdXJuIGEgYmFsbCBpbnRvIGEgdmVjdG9yIGluIHRoZSB2aXN1YWxpemF0aW9uIGNvb3JkaW5hdGUgc3lzdGVtXG4gICAgYmFsbDJ2aXMoYjogR29sZkJhbGwpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaW50b1ZpcyhiLnRvVmVjKGdldFBsb3RGdW5jKHRoaXMub3B0aW9ucy5sYW5kc2NhcGUpKSlcbiAgICB9XG5cbiAgICAvLyBQbG90IGEgYmFsbCBvbiB0aGUgY2hhcnRcbiAgICBwbG90QmFsbChiOiBHb2xmQmFsbCkge1xuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcblxuICAgICAgICBjb25zdCB0b0NsYXNzID0gbmFtZSA9PiAnLicgKyBuYW1lXG4gICAgICAgIGNvbnN0IGNsc1NlbCA9IHRvQ2xhc3MoYi5jbGFzc25hbWUpXG5cbiAgICAgICAgY29uc3QgYmFsbCA9IHRoaXMuYmFsbDJ2aXMoYilcbiAgICAgICAgc2VsZi5zZWxzLmJhbGwgPSBzZWxmLmJhc2Uuc2VsZWN0QWxsKGNsc1NlbClcbiAgICAgICAgICAgIC5kYXRhKFtiYWxsXSlcbiAgICAgICAgICAgIC5qb2luKCdjaXJjbGUnKVxuICAgICAgICAgICAgLmNsYXNzZWQoJ2dvbGYtYmFsbCcsIHRydWUpXG4gICAgICAgICAgICAuY2xhc3NlZChiLmNsYXNzbmFtZSwgdHJ1ZSlcbiAgICAgICAgICAgIC5hdHRyKFwiY3hcIiwgZCA9PiBkLngpXG4gICAgICAgICAgICAuYXR0cihcImN5XCIsIGQgPT4gZC55KVxuICAgICAgICAgICAgLmF0dHIoXCJyXCIsIFwiNXB4XCIpXG4gICAgfVxuXG4gICAgY2xlYXJDdXJ2ZSgpIHtcbiAgICAgICAgdGhpcy5sYXllcnMuYmcuc2VsZWN0QWxsKCcubGluZScpLnJlbW92ZSgpXG4gICAgICAgIHRoaXMuc2Vscy5tYXNrTGluZS5odG1sKCcnKVxuICAgICAgICB0aGlzLmJhc2Uuc2VsZWN0QWxsKCcjbGluZS1iYWNrZ3JvdW5kJykuaHRtbCgnJylcbiAgICB9XG5cbiAgICBwbG90Q3VydmVCeURlZmF1bHQoeHM6IG51bWJlcltdKSB7XG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzLCBvcCA9IHRoaXMub3B0aW9ucywgc2NhbGVzID0gdGhpcy5zY2FsZXMsIHNlbHMgPSB0aGlzLnNlbHM7XG5cbiAgICAgICAgc2NhbGVzLnBhdGhzLmZvckVhY2gobGluZSA9PiB7XG4gICAgICAgICAgICB0aGlzLmxheWVycy5iZy5hcHBlbmQoXCJwYXRoXCIpXG4gICAgICAgICAgICAgICAgLmRhdHVtKHhzKVxuICAgICAgICAgICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJsaW5lXCIpXG4gICAgICAgICAgICAgICAgLmF0dHIoXCJkXCIsIGQgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbGluZShkKVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG5cbiAgICAgICAgc2Vscy5saW5lQmFja2dyb3VuZC5zZWxlY3RBbGwoXCIuZ3JhZC1ib3hcIilcbiAgICAgICAgICAgIC5kYXRhKFsxXSlcbiAgICAgICAgICAgIC5qb2luKCdyZWN0JylcbiAgICAgICAgICAgIC5jbGFzc2VkKCdncmFkLWJveCcsIHRydWUpXG4gICAgICAgICAgICAuYXR0cihcIndpZHRoXCIsIG9wLndpZHRoKVxuICAgICAgICAgICAgLmF0dHIoXCJoZWlnaHRcIiwgb3AuaGVpZ2h0KVxuICAgICAgICAgICAgLmF0dHIoXCJmaWxsLW9wYWNpdHlcIiwgMC4wKVxuICAgIH1cblxuICAgIHBsb3RDdXJ2ZUJ5R3JhZGllbnQoeHM6IG51bWJlcltdKSB7XG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzLCBzY2FsZXMgPSB0aGlzLnNjYWxlcywgc2VscyA9IHRoaXMuc2Vscywgb3AgPSB0aGlzLm9wdGlvbnM7XG5cbiAgICAgICAgY29uc3QgeHdpZHRoID0gb3Aud2lkdGggKiAoeHNbMV0gLSB4c1swXSkgLyAoZDMubWF4KHhzKSAtIGQzLm1pbih4cykpIC8vIEFzc3VtZXMgbGVuZ3RoIG9mIHhzID4gMVxuXG4gICAgICAgIGNvbnN0IGJhbGxVcGRhdGVyID0gc2VsZi5kYXRhKClbMF0udXBkYXRlclxuXG4gICAgICAgIC8vIENsZWFyIG1hc2tcbiAgICAgICAgY29uc3QgbGluZSA9IHNjYWxlcy5wYXRoc1swXVxuXG4gICAgICAgIHNlbHMubWFza0xpbmUuYXR0cignZCcsIGxpbmUoeHMpKVxuXG4gICAgICAgIGNvbnN0IGNvbG9yU2NhbGUgPSBkMy5zY2FsZVNlcXVlbnRpYWwoZDMuaW50ZXJwb2xhdGVQbGFzbWEpXG4gICAgICAgIFxuICAgICAgICAvLyBDaGVjayB0aGUgZ3JhZGllbnQgcmFuZ2VcbiAgICAgICAgY29uc3QgdXBkYXRlQW10cyA9IHhzLm1hcCh4ID0+IE1hdGgubG9nKE1hdGguYWJzKGJhbGxVcGRhdGVyLnVwZGF0ZU1vZGlmaWVyKHgpKSkpXG5cbiAgICAgICAgY29uc3QgY2xhbXBlZFNjYWxlID0gUi5jdXJyeSgobWluOm51bWJlciwgbWF4Om51bWJlciwgYXJyOm51bWJlcltdKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBjbGFtcGVyID0gUi5jbGFtcChtaW4sIG1heClcbiAgICAgICAgICAgIGNvbnN0IGNsYW1wZWRBcnIgPSBSLm1hcChjbGFtcGVyLCBhcnIpXG4gICAgICAgICAgICByZXR1cm4gYXJyLm1hcCh4ID0+IHggLSBkMy5tZWFuKGNsYW1wZWRBcnIpKVxuICAgICAgICAgICAgLy8gcmV0dXJuIGNsYW1wZWRBcnIubWFwKHggPT4geCAtIGQzLm1lYW4oY2xhbXBlZEFycikpXG4gICAgICAgIH0pXG5cbiAgICAgICAgLy8gY29uc3QgY2xhbXBlciA9IGNsYW1wZWRTY2FsZSgtMiwgMik7XG4gICAgICAgIC8vIGNvbnN0IGRhdGEgPSBkMy56aXAoeHMsIGNsYW1wZXIodXBkYXRlQW10cykpLm1hcChkID0+IHtyZXR1cm4ge3g6IGRbMF0sIHVwZGF0ZUFtdDogZFsxXX19KVxuICAgICAgICBjb25zdCBkYXRhID0gZDMuemlwKHhzLCB1cGRhdGVBbXRzKS5tYXAoZCA9PiB7cmV0dXJuIHt4OiBkWzBdLCB1cGRhdGVBbXQ6IGRbMV19fSlcbiAgICAgICAgLy8gY29uc3QgZXh0ZW50ID0gZDMuZXh0ZW50KGNsYW1wZXIodXBkYXRlQW10cykpXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiRXh0ZW50OiBcIiwgZXh0ZW50KTtcblxuXG4gICAgICAgIC8vQHRzLWlnbm9yZVxuICAgICAgICBjb25zdCBjc2NhbGUgPSBkMy5zY2FsZUxpbmVhcigpLmRvbWFpbihbLTIsIDAsIDJdKS5yYW5nZShbXCIjNjdhOWNmXCIsIFwiI2Y3ZjdmN1wiLCBcIiNlZjhhNjJcIl0pXG5cbiAgICAgICAgc2Vscy5saW5lQmFja2dyb3VuZC5zZWxlY3RBbGwoJy5ncmFkLWJveCcpXG4gICAgICAgICAgICAuZGF0YShkYXRhKVxuICAgICAgICAgICAgLmpvaW4oJ3JlY3QnKVxuICAgICAgICAgICAgLmNsYXNzZWQoJ2dyYWQtYm94JywgdHJ1ZSlcbiAgICAgICAgICAgIC5hdHRyKCdoZWlnaHQnLCBvcC5oZWlnaHQpXG4gICAgICAgICAgICAuYXR0cignd2lkdGgnLCBzZWxmLnNjYWxlcy5tYXRoMnB4LngoeHdpZHRoKSlcbiAgICAgICAgICAgIC5hdHRyKCd4JywgZCA9PiBzZWxmLnNjYWxlcy5tYXRoMnB4LngoZC54KSlcbiAgICAgICAgICAgIC5hdHRyKCd5JywgMClcbiAgICAgICAgICAgIC5hdHRyKCdmaWxsJywgZCA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNzY2FsZShkLnVwZGF0ZUFtdClcbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgc2Vscy5saW5lQmFja2dyb3VuZC5hdHRyKCdtYXNrJywgYHVybCgjJHt0aGlzLm1hc2tJZH0pYClcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBQbG90IHRoZSB2YWx1ZXMgb2YgYWxsIHggYWNjb3JkaW5nIHRvIHRoZSBmdW5jdGlvblxuICAgICAqIFxuICAgICAqIEBwYXJhbSB4IEEgbGluc3BhY2Ugb2YgeCB2YWx1ZXMgb3ZlciB3aGljaCB0byBwbG90IGEgY3VydmVcbiAgICAgKi9cbiAgICBwbG90Q3VydmUoKSB7XG4gICAgICAgIGNvbnN0IG9wID0gdGhpcy5vcHRpb25zXG4gICAgICAgIGNvbnN0IHhzID0gbGluc3BhY2Uob3AubGFuZHNjYXBlLnhyYW5nZVswXSwgb3AubGFuZHNjYXBlLnhyYW5nZVsxXSwgMTAwMClcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXMsIHNjYWxlcyA9IHRoaXMuc2NhbGVzLCBzZWxzID0gdGhpcy5zZWxzO1xuXG4gICAgICAgIGlmIChzZWxmLmRhdGEoKSAhPSBudWxsKSB7XG4gICAgICAgICAgICBpZiAoc2VsZi5kYXRhKCkubGVuZ3RoID4gMSkgc2VsZi5wbG90Q3VydmVCeURlZmF1bHQoeHMpXG4gICAgICAgICAgICBlbHNlIHNlbGYucGxvdEN1cnZlQnlHcmFkaWVudCh4cylcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHVwZGF0ZVNjYWxlcyhvcDogR3JhcGhPcHRpb25zKSB7XG4gICAgICAgIGNvbnN0IHNjYWxlcyA9IHRoaXMuc2NhbGVzXG5cbiAgICAgICAgY29uc3QgeGJhc2VSYW5nZSA9IFstMSwgMV1cbiAgICAgICAgY29uc3QgeWJhc2VSYW5nZSA9IFsxLCAwXVxuXG4gICAgICAgIGNvbnN0IHhweFJhbmdlID0gWzAsIG9wLndpZHRoXVxuICAgICAgICBjb25zdCB5cHhSYW5nZSA9IFtvcC5oZWlnaHQsIDBdXG5cbiAgICAgICAgc2NhbGVzLmJhc2UybWF0aCA9IHtcbiAgICAgICAgICAgIHg6IGQzLnNjYWxlTGluZWFyKCkuZG9tYWluKHhiYXNlUmFuZ2UpLnJhbmdlKG9wLmxhbmRzY2FwZS54cmFuZ2UpLFxuICAgICAgICAgICAgeTogZDMuc2NhbGVMaW5lYXIoKS5kb21haW4oeWJhc2VSYW5nZSkucmFuZ2Uob3AubGFuZHNjYXBlLnlyYW5nZSlcbiAgICAgICAgfVxuICAgICAgICBzY2FsZXMuYmFzZTJweCA9IHtcbiAgICAgICAgICAgIHg6IGQzLnNjYWxlTGluZWFyKCkuZG9tYWluKHhiYXNlUmFuZ2UpLnJhbmdlKHhweFJhbmdlKSxcbiAgICAgICAgICAgIHk6IGQzLnNjYWxlTGluZWFyKCkuZG9tYWluKHliYXNlUmFuZ2UpLnJhbmdlKHlweFJhbmdlKVxuICAgICAgICB9XG4gICAgICAgIHNjYWxlcy5tYXRoMnB4ID0ge1xuICAgICAgICAgICAgeDogZDMuc2NhbGVMaW5lYXIoKS5kb21haW4ob3AubGFuZHNjYXBlLnhyYW5nZSkucmFuZ2UoeHB4UmFuZ2UpLFxuICAgICAgICAgICAgeTogZDMuc2NhbGVMaW5lYXIoKS5kb21haW4ob3AubGFuZHNjYXBlLnlyYW5nZSkucmFuZ2UoeXB4UmFuZ2UpXG4gICAgICAgIH1cblxuICAgICAgICBzY2FsZXMuYmFzZTJsb3NzID0gZDMuc2NhbGVMaW5lYXIoKS5kb21haW4ob3AubGFuZHNjYXBlLnlyYW5nZSkucmFuZ2UoWzAsIDFdKVxuXG4gICAgICAgIHNjYWxlcy5wYXRocyA9IHRoaXMubmV3UGF0aHMob3AubGFuZHNjYXBlKVxuICAgIH1cblxuICAgIHVwZGF0ZUF4ZXMoc2NhbGVzOiBHcmFwaFNjYWxlcywgb3A6IEdyYXBoT3B0aW9ucykge1xuICAgICAgICBjb25zdCBzZWxzID0gdGhpcy5zZWxzXG4gICAgICAgIHNlbHMueGF4aXMuY2FsbChkMy5heGlzQm90dG9tKHNjYWxlcy5tYXRoMnB4LngpLnRpY2tWYWx1ZXMoWzBdKS50aWNrRm9ybWF0KHggPT4gJzAnKSlcbiAgICB9XG5cbiAgICBpbml0KCkge1xuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICAgICAgY29uc3Qgb3AgPSB0aGlzLm9wdGlvbnM7XG4gICAgICAgIGNvbnN0IHNjYWxlcyA9IHRoaXMuc2NhbGVzO1xuICAgICAgICBjb25zdCBzZWxzID0gdGhpcy5zZWxzO1xuXG4gICAgICAgIHRoaXMudXBkYXRlU2NhbGVzKG9wKVxuXG4gICAgICAgIHNlbHMueGF4aXMgPSB0aGlzLmJhc2UuYXBwZW5kKFwiZ1wiKVxuICAgICAgICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcImF4aXMgYXhpcy0teFwiKVxuICAgICAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgU1ZHLnRyYW5zbGF0ZSgwLCBvcC5oZWlnaHQpKVxuXG4gICAgICAgIHNlbHMueGxhYmVsID0gdGhpcy5iYXNlLmFwcGVuZChcInRleHRcIilcbiAgICAgICAgICAgIC50ZXh0KFwiXFx1MDNCOCAtIFxcdTAzQjgqXCIpXG4gICAgICAgICAgICAuYXR0cihcImNsYXNzXCIsIFwidGl0bGVzXCIpXG4gICAgICAgICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBTVkcudHJhbnNsYXRlKG9wLndpZHRoIC8gMiwgb3AuaGVpZ2h0ICsgb3AucGFkKSlcblxuICAgICAgICAvLyBBZGQgYmFzZSBtYXNrXG4gICAgICAgIHNlbHMubWFzayA9IHRoaXMuYmFzZS5hcHBlbmQoJ21hc2snKS5hdHRyKCdpZCcsIHRoaXMubWFza0lkKVxuXG4gICAgICAgIHNlbHMubWFza0JhY2tncm91bmQgPSBzZWxzLm1hc2suYXBwZW5kKCdyZWN0JylcbiAgICAgICAgICAgIC5hdHRyKCd3aWR0aCcsIG9wLndpZHRoKVxuICAgICAgICAgICAgLmF0dHIoJ2hlaWdodCcsIG9wLmhlaWdodClcbiAgICAgICAgICAgIC5hdHRyKCdmaWxsJywgJ2JsYWNrJylcblxuICAgICAgICBzZWxzLm1hc2tMaW5lID0gc2Vscy5tYXNrLlxuICAgICAgICAgICAgc2VsZWN0QWxsKFwiI3RyYW5zcGFyZW50LWxpbmVcIikuXG4gICAgICAgICAgICBkYXRhKFsxXSlcbiAgICAgICAgICAgIC5qb2luKCdwYXRoJylcbiAgICAgICAgICAgIC5hdHRyKCdpZCcsICd0cmFuc3BhcmVudC1saW5lJylcbiAgICAgICAgICAgIC5hdHRyKCdzdHJva2UnLCAnd2hpdGUnKVxuICAgICAgICAgICAgLmF0dHIoJ3N0cm9rZS13aWR0aCcsICc1cHgnKVxuXG4gICAgICAgIHNlbHMubGluZUJhY2tncm91bmQgPSBzZWxmLmJhc2Uuc2VsZWN0QWxsKCcjbGluZS1iYWNrZ3JvdW5kJylcbiAgICAgICAgICAgIC5kYXRhKFsxXSlcbiAgICAgICAgICAgIC5qb2luKCdnJylcbiAgICAgICAgICAgIC5hdHRyKCdpZCcsICdsaW5lLWJhY2tncm91bmQnKVxuXG4gICAgICAgIHNlbHMuYmFja2Ryb3AgPSB0aGlzLmxheWVycy5iZy5hcHBlbmQoXCJnXCIpXG4gICAgICAgICAgICAuYXR0cihcImlkXCIsIFwiYmFja2Ryb3BcIilcbiAgICAgICAgICAgIC5jbGFzc2VkKCdncmFzcycsIHRydWUpXG4gICAgICAgICAgICAuYXBwZW5kKFwicmVjdFwiKVxuICAgICAgICAgICAgLmF0dHIoXCJoZWlnaHRcIiwgb3AuaGVpZ2h0KVxuICAgICAgICAgICAgLmF0dHIoXCJ3aWR0aFwiLCBvcC53aWR0aClcblxuICAgICAgICB0aGlzLnVwZGF0ZUF4ZXMoc2NhbGVzLCBvcClcblxuICAgICAgICBzY2FsZXMucGF0aHMgPSB0aGlzLm5ld1BhdGhzKG9wLmxhbmRzY2FwZSlcblxuICAgICAgICB0aGlzLnBsb3RDdXJ2ZSgpXG4gICAgfVxuXG4gICAgbmV3UGF0aHMobGFuZHNjYXBlOiBMYW5kc2NhcGUpIHtcbiAgICAgICAgY29uc3Qgc2NhbGVzID0gdGhpcy5zY2FsZXNcbiAgICAgICAgY29uc3QgYmFzZUxpbmUgPSBkMy5saW5lPG51bWJlcj4oKVxuICAgICAgICAgICAgLngoKGQ6IG51bWJlciwgaTogbnVtYmVyKSA9PiBzY2FsZXMubWF0aDJweC54KGQpKVxuICAgICAgICAgICAgLnkoKGQ6IG51bWJlciwgaTogbnVtYmVyKSA9PiBzY2FsZXMubWF0aDJweC55KGdldFBsb3RGdW5jKGxhbmRzY2FwZSkoZCkpKVxuICAgICAgICAgICAgLmN1cnZlKGQzLmN1cnZlTGluZWFyKVxuXG4gICAgICAgIHJldHVybiBbYmFzZUxpbmVdXG4gICAgfVxuXG4gICAgaW5pdEJhbGxzKCkge1xuICAgICAgICBjb25zdCBzZWxmID0gdGhpcywgb3AgPSB0aGlzLm9wdGlvbnM7XG5cbiAgICAgICAgY29uc3QgdG9vU21hbGwgPSAoeDogbnVtYmVyKSA9PiB4IDwgKG9wLmxhbmRzY2FwZS54cmFuZ2VbMF0pXG4gICAgICAgIGNvbnN0IHRvb0JpZyA9ICh4OiBudW1iZXIpID0+IHggPiAob3AubGFuZHNjYXBlLnhyYW5nZVsxXSlcblxuICAgICAgICBjb25zdCBmaXhPdXRPZkJvdW5kcyA9ICh4OiBudW1iZXIpID0+IHtcbiAgICAgICAgICAgIGxldCBvdXQ6IG51bWJlclxuXG4gICAgICAgICAgICBpZiAoaXNOYU4oeCkpIG91dCA9IG9wLmxhbmRzY2FwZS54cmFuZ2VbMF1cbiAgICAgICAgICAgIGVsc2UgaWYgKHRvb1NtYWxsKHgpKSBvdXQgPSBvcC5sYW5kc2NhcGUueHJhbmdlWzBdXG4gICAgICAgICAgICBlbHNlIGlmICh0b29CaWcoeCkpIG91dCA9IG9wLmxhbmRzY2FwZS54cmFuZ2VbMV1cbiAgICAgICAgICAgIGVsc2Ugb3V0ID0geFxuXG4gICAgICAgICAgICByZXR1cm4gb3V0XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBnZXROZXh0QmFsbChiOiBHb2xmQmFsbCk6IEdvbGZCYWxsIHtcbiAgICAgICAgICAgIGNvbnN0IG5leHRYID0gYi5uZXh0WCgpXG4gICAgICAgICAgICBjb25zdCBjdXJyQmFsbFNlbCA9IHNlbGYuYmFzZS5zZWxlY3QoYC4ke2IuY2xhc3NuYW1lfWApXG4gICAgICAgICAgICBjb25zdCBmb3JjZVggPSBmaXhPdXRPZkJvdW5kcyhuZXh0WClcbiAgICAgICAgICAgIGlmICghY3VyckJhbGxTZWwuY2xhc3NlZCgnZGVhZC1iYWxsJykpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYi5zdGVwXyhmb3JjZVgpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gYlxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgc3ViT2JqID0ge1xuICAgICAgICAgICAgbmV4dDogZ2JzID0+IHtcbiAgICAgICAgICAgICAgICBnYnMuZm9yRWFjaChiID0+IHNlbGYucGxvdEJhbGwoYikpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXJyb3I6IGIgPT4gY29uc29sZS5sb2coXCJFUlJPUjogXCIsIGIpLFxuICAgICAgICAgICAgY29tcGxldGU6ICgpID0+IGNvbnNvbGUubG9nKFwiQ09NUExFVEVcIiksXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB0aWNrZXIgPSAoKSA9PiBpbnRlcnZhbCgxMCkucGlwZShcbiAgICAgICAgICAgIHNjYW4oKGFjYzogVCkgPT4ge1xuICAgICAgICAgICAgICAgIC8vIFVuc3Vic2NyaWJlciB0aWNrZXIgaWYgYWxsIGJhbGxzIGRlYWRcbiAgICAgICAgICAgICAgICBpZiAoUi5hbGwoKGI6IEdvbGZCYWxsKSA9PiBkMy5zZWxlY3QoYC4ke2IuY2xhc3NuYW1lfWApLmNsYXNzZWQoJ2RlYWQtYmFsbCcpLCBzZWxmLmRhdGEoKSkpIHtcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ1RpY2tlci51bnN1YnNjcmliZSgpXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgc2VsZi5kYXRhKCkuZm9yRWFjaChiID0+IGdldE5leHRCYWxsKGIpKVxuICAgICAgICAgICAgICAgIHJldHVybiBzZWxmLmRhdGEoKVxuICAgICAgICAgICAgfSwgc2VsZi5kYXRhKCkpLFxuICAgICAgICAgICAgdGFrZShvcC5tYXhJdGVyKVxuICAgICAgICApLnN1YnNjcmliZShzdWJPYmopXG5cbiAgICAgICAgLy8gUnVubmluZyB0aWNrZXIgc3RhcnRzIGFzIGFuIGVtcHR5IHN1YnNjcmlwdGlvbiBvYmplY3QsIGlzIGxhdGVyIHJlcGxhY2VkIGJ5IHRoZSBydW5uaW5nIHRpY2tlclxuICAgICAgICBsZXQgcnVubmluZ1RpY2tlciA9IHtcbiAgICAgICAgICAgIHVuc3Vic2NyaWJlOiAoKSA9PiBjb25zb2xlLmxvZyhcIkVtcHR5IFRpY2tlciFcIilcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHBsb3RCYWxscyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJ1bm5pbmdUaWNrZXIudW5zdWJzY3JpYmUoKVxuICAgICAgICAgICAgY29uc3QgY2xpY2sgPSB0b1ZlYyhkMy5tb3VzZSh0aGlzKSlcbiAgICAgICAgICAgIGQzLnNlbGVjdEFsbCgnLmdvbGYtYmFsbCcpLmNsYXNzZWQoJ2RlYWQtYmFsbCcsIGZhbHNlKVxuICAgICAgICAgICAgc2VsZi5kYXRhKCkuZm9yRWFjaCgoYiwgaSkgPT4gYi54ID0gc2VsZi5pbnRvTWF0aChjbGljaykueClcbiAgICAgICAgICAgIHNlbGYuZGF0YSgpLmZvckVhY2goYiA9PiBzZWxmLnBsb3RCYWxsKGIpKVxuICAgICAgICAgICAgc2VsZi5ldmVudEhhbmRsZXIudHJpZ2dlcihcImxvc3MtY2xpY2tcIiwge30pXG5cbiAgICAgICAgICAgIHJ1bm5pbmdUaWNrZXIgPSB0aWNrZXIoKVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gdGhpcy5zZWxzLmJhY2tkcm9wLm9uKCdjbGljaycsIHBsb3RCYWxscylcbiAgICAgICAgLy8gdGhpcy5zZWxzLm1hc2tCYWNrZ3JvdW5kLm9uKCdjbGljaycsIHBsb3RCYWxscylcbiAgICAgICAgLy8gdGhpcy5zZWxzLm1hc2sub24oJ2NsaWNrJywgcGxvdEJhbGxzKVxuICAgICAgICB0aGlzLnNlbHMubGluZUJhY2tncm91bmQub24oJ2NsaWNrJywgcGxvdEJhbGxzKVxuICAgIH1cblxuICAgIHEoKTogbnVtYmVyXG4gICAgcSh2YWw6IG51bWJlcik6IHRoaXNcbiAgICBxKHZhbD8pIHtcbiAgICAgICAgaWYgKHZhbCA9PSBudWxsKSByZXR1cm4gdGhpcy5kYXRhSGVhZC51cGRhdGVyLnFcbiAgICAgICAgdGhpcy5kYXRhSGVhZC5xKHZhbClcbiAgICAgICAgdGhpcy5wbG90Q3VydmUoKVxuICAgICAgICByZXR1cm4gdGhpc1xuICAgIH1cblxuICAgIGV0YSgpOiBudW1iZXJcbiAgICBldGEodmFsOiBudW1iZXIpOiB0aGlzXG4gICAgZXRhKHZhbD8pIHtcbiAgICAgICAgaWYgKHZhbCA9PSBudWxsKSByZXR1cm4gdGhpcy5kYXRhSGVhZC51cGRhdGVyLnFcbiAgICAgICAgdGhpcy5kYXRhSGVhZC5ldGEodmFsKVxuICAgICAgICAvLyB0aGlzLnBsb3RDdXJ2ZSgpXG4gICAgICAgIHJldHVybiB0aGlzXG4gICAgfVxuXG4gICAgZGF0YSgpOiBUXG4gICAgZGF0YSh2YWw6IFQpOiB0aGlzXG4gICAgZGF0YSh2YWw/KSB7XG4gICAgICAgIGlmICh2YWwgPT0gbnVsbCkgcmV0dXJuIHRoaXMuX2RhdGFcbiAgICAgICAgdGhpcy5fZGF0YSA9IHZhbDtcbiAgICAgICAgdGhpcy5pbml0QmFsbHMoKVxuICAgICAgICByZXR1cm4gdGhpc1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIElOUExBQ0UgY2hhbmdlIHRoZSBnb2xmIGJhbGxzIGludG8gdGhlIEJBU0Ugc2NhbGVcbiAgICAgKi9cbiAgICBkYXRhVG9CYXNlXygpOiBUIHtcbiAgICAgICAgdGhpcy5kYXRhKCkubWFwKGIgPT4ge1xuICAgICAgICAgICAgYi54ID0gdGhpcy5zY2FsZXMuYmFzZTJtYXRoLnguaW52ZXJ0KGIueClcbiAgICAgICAgICAgIHJldHVybiBiXG4gICAgICAgIH0pXG5cbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YSgpXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTW9kaWZ5IHRoZSBnb2xmIGJhbGxzIGFuZCBjaGFuZ2UgdGhlaXIgeCB2YWx1ZSBmcm9tIEJBU0UgdG8gdGhlIG5ldyBNQVRIXG4gICAgICovXG4gICAgZGF0YUZyb21CYXNlKHZhbDogVCk6IHRoaXMge1xuICAgICAgICB2YWwuZm9yRWFjaChiID0+IHtcbiAgICAgICAgICAgIGIueCA9IHRoaXMuc2NhbGVzLmJhc2UybWF0aC54KGIueClcbiAgICAgICAgfSlcblxuICAgICAgICB0aGlzLmluaXRCYWxscygpXG4gICAgICAgIHJldHVybiB0aGlzXG4gICAgfVxufVxuXG5mdW5jdGlvbiB0b1ZlYyhbeCwgeV06IFtudW1iZXIsIG51bWJlcl0pOiBWZWN0b3IyRCB7XG4gICAgcmV0dXJuIHsgeDogeCwgeTogeSB9XG59IiwiaW1wb3J0ICogYXMgZDMgZnJvbSAnZDMnXG5pbXBvcnQgKiBhcyBSIGZyb20gJ3JhbWRhJ1xuXG5pbXBvcnQgeyBDaGFydDJELCBDaGFydE9wdGlvbnMsIENoYXJ0U2NhbGVzIH0gZnJvbSAnLi4vdXRpbC9DaGFydDJkVmlzQ29tcG9uZW50J1xuaW1wb3J0IHsgU2ltcGxlRXZlbnRIYW5kbGVyIH0gZnJvbSAnLi4vdXRpbC9TaW1wbGVFdmVudEhhbmRsZXInXG5pbXBvcnQgeyBEM1NlbCB9IGZyb20gJy4uL3V0aWwveGQzJ1xuaW1wb3J0IHsgU1ZHIH0gZnJvbSAnLi4vdXRpbC9TVkdwbHVzJ1xuXG5pbXBvcnQgeyBCYWxsSGlzdG9yeSB9IGZyb20gJy4vR29sZkJhbGwnXG5cbmNvbnN0IGF4aXNPZmZzZXQgPSAxIC8vIFVzZSB0aGlzIHRvIGNvdmVyIHRoZSBwbG90dGVkIGxpbmVzXG5cbmludGVyZmFjZSBHcmFwaFNlbHMge1xuICAgIHhheGlzPzogRDNTZWxcbiAgICB5YXhpcz86IEQzU2VsXG4gICAgeGxhYmVsPzogRDNTZWxcbiAgICBsaW5lPzogRDNTZWxcbiAgICBiYWNrZHJvcD86IEQzU2VsXG4gICAgYmFsbD86IEQzU2VsXG59XG5cbnR5cGUgVHJhY2tlciA9IHtcbiAgICBzZWw6IEQzU2VsLFxuICAgIHZhbHM6IG51bWJlcltdXG59XG5cbnR5cGUgTGluZVRyYWNrZXIgPSB7XG4gICAgKGtleTogc3RyaW5nKTogVHJhY2tlclxufVxuXG50eXBlIFQgPSBMaW5lVHJhY2tlclxuXG5cbmV4cG9ydCBjbGFzcyBHb2xmTG9zc2VzIGV4dGVuZHMgQ2hhcnQyRDxUPiB7XG4gICAgY3NzbmFtZSA9IFwibGluZS1wbG90XCJcblxuICAgIF9kYXRhOiBUXG5cbiAgICBvcHRpb25zOiBDaGFydE9wdGlvbnMgPSB7XG4gICAgICAgIG1heFdpZHRoOiAzNTAsXG4gICAgICAgIG1heEhlaWdodDogMjUwLFxuICAgICAgICBtYXJnaW46IHsgdG9wOiAxMCwgcmlnaHQ6IDEwLCBib3R0b206IDMwLCBsZWZ0OiAzMCB9LFxuICAgICAgICBwYWQ6IHsgdG9wOiA1LCByaWdodDogMSwgYm90dG9tOiAxMCwgbGVmdDogMTUgfSxcbiAgICAgICAgeHJhbmdlOiBbMCwgNjAwXSxcbiAgICAgICAgeXJhbmdlOiBbMS4xLCAxZS0zXSxcbiAgICB9XG4gICAgZGVmYXVsdFhyYW5nZTogW251bWJlciwgbnVtYmVyXVxuXG4gICAgc2NhbGVzOiBDaGFydFNjYWxlcyA9IHt9XG5cbiAgICBzZWxzOiBHcmFwaFNlbHMgPSB7fVxuXG4gICAgcGF0aDogZDMuTGluZTxudW1iZXI+XG5cbiAgICBjb25zdHJ1Y3RvcihkM3BhcmVudDogRDNTZWwsIGV2ZW50SGFuZGxlcj86IFNpbXBsZUV2ZW50SGFuZGxlciwgb3B0aW9ucyA9IHt9KSB7XG4gICAgICAgIHN1cGVyKGQzcGFyZW50LCBldmVudEhhbmRsZXIsIG9wdGlvbnMpXG4gICAgICAgIHN1cGVyLmluaXRTVkcodGhpcy5vcHRpb25zLCBbXCJiZ1wiXSlcbiAgICAgICAgdGhpcy5iYXNlLmNsYXNzZWQodGhpcy5jc3NuYW1lLCB0cnVlKVxuICAgICAgICB0aGlzLmRlZmF1bHRYcmFuZ2UgPSB0aGlzLm9wdGlvbnMueHJhbmdlXG4gICAgICAgIHRoaXMuZGF0YSg8TGluZVRyYWNrZXI+e30pXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUGxvdCB0aGUgdmFsdWVzIG9mIGFsbCB4IGFjY29yZGluZyB0byB0aGUgZnVuY3Rpb25cbiAgICAgKiBcbiAgICAgKiBAcGFyYW0geCBBIGxpbnNwYWNlIG9mIHggdmFsdWVzIG92ZXIgd2hpY2ggdG8gcGxvdCBhIGN1cnZlXG4gICAgICovXG4gICAgcHJvdGVjdGVkIGFkZERhdGFLZXlfKGNsYXNzbmFtZTogc3RyaW5nKSB7XG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzXG4gICAgICAgIGlmICghUi5oYXMoY2xhc3NuYW1lLCB0aGlzLmRhdGEoKSkpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBBZGRpbmcga2V5OiAke2NsYXNzbmFtZX1gKTtcbiAgICAgICAgICAgIHRoaXMuZGF0YSgpW2NsYXNzbmFtZV0gPSB7XG4gICAgICAgICAgICAgICAgc2VsOiBzZWxmLmluaXRCYXNlTGluZShjbGFzc25hbWUpLFxuICAgICAgICAgICAgICAgIHZhbHM6IFtdXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBMaXZlIHVwZGF0ZSB0aGUgeHJhbmdlXG4gICAgdXBkYXRlU2NhbGVzKHhyYW5nZSkge1xuICAgICAgICBjb25zdCBvcCA9IHRoaXMub3B0aW9uc1xuICAgICAgICB0aGlzLnNjYWxlcy54ID0gZDMuc2NhbGVMaW5lYXIoKS5kb21haW4oeHJhbmdlKS5yYW5nZShbMCwgb3Aud2lkdGhdKS5jbGFtcCh0cnVlKVxuICAgIH1cblxuICAgIGNsZWFyUGF0aHMoKSB7XG4gICAgICAgIHRoaXMuZGF0YShSLm1hcChkID0+IFIuYXNzb2MoJ3ZhbHMnLCBbXSwgZCksIHRoaXMuZGF0YSgpKSlcbiAgICB9XG5cbiAgICBwbG90UGF0aChkOiBCYWxsSGlzdG9yeSwgc2NhbGU/KSB7XG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuICAgICAgICB0aGlzLmFkZERhdGFLZXlfKGQuY2xhc3NuYW1lKTtcblxuICAgICAgICBjb25zdCBzY2FsZXIgPSAoc2NhbGUgPT0gbnVsbCkgPyB4ID0+IHggOiBzY2FsZVxuXG4gICAgICAgIGNvbnN0IGN1cnJWYWxzID0gdGhpcy5kYXRhKClbZC5jbGFzc25hbWVdO1xuICAgICAgICBjdXJyVmFscy52YWxzLnB1c2goc2NhbGVyKGQubG9zcykpXG5cbiAgICAgICAgLy8gc2xpZGluZyB4LWF4aXNcbiAgICAgICAgY29uc3QgbmV3WHJhbmdlID0gW01hdGgubWF4KDAsIGN1cnJWYWxzLnZhbHMubGVuZ3RoLXRoaXMub3B0aW9ucy54cmFuZ2VbMV0pLCBNYXRoLm1heChjdXJyVmFscy52YWxzLmxlbmd0aCx0aGlzLm9wdGlvbnMueHJhbmdlWzFdKV1cbiAgICAgICAgdGhpcy51cGRhdGVTY2FsZXMobmV3WHJhbmdlKVxuICAgICAgICB0aGlzLmNyZWF0ZVBhdGgoKVxuXG4gICAgICAgIGN1cnJWYWxzLnNlbC5kYXRhKFtjdXJyVmFsc10pXG4gICAgICAgICAgICAuam9pbihcInBhdGhcIilcbiAgICAgICAgICAgIC5jbGFzc2VkKGQuY2xhc3NuYW1lLCB0cnVlKVxuICAgICAgICAgICAgLmF0dHIoXCJkXCIsIGQgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBzZWxmLnBhdGgoZC52YWxzKVxuICAgICAgICAgICAgfSlcbiAgICB9XG5cbiAgICBwcml2YXRlIGluaXRCYXNlTGluZShjbGFzc25hbWU6IHN0cmluZykge1xuICAgICAgICByZXR1cm4gdGhpcy5sYXllcnMuYmcuYXBwZW5kKFwicGF0aFwiKVxuICAgICAgICAgICAgLmNsYXNzZWQoY2xhc3NuYW1lLCB0cnVlKVxuICAgICAgICAgICAgLmNsYXNzZWQoJ2xpbmUnLCB0cnVlKVxuICAgIH1cblxuICAgIGluaXQoKSB7XG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuICAgICAgICBjb25zdCBvcCA9IHRoaXMub3B0aW9ucztcbiAgICAgICAgY29uc3Qgc2NhbGVzID0gdGhpcy5zY2FsZXM7XG4gICAgICAgIGNvbnN0IHNlbHMgPSB0aGlzLnNlbHM7XG5cbiAgICAgICAgdGhpcy5jcmVhdGVTY2FsZXMoKVxuICAgICAgICB0aGlzLmNyZWF0ZVBhdGgoKVxuICAgICAgICB0aGlzLmNyZWF0ZUF4ZXMoKVxuICAgIH1cblxuICAgIHByb3RlY3RlZCBjcmVhdGVTY2FsZXMoKSB7XG4gICAgICAgIGNvbnN0IHNjYWxlcyA9IHRoaXMuc2NhbGVzXG4gICAgICAgIGNvbnN0IG9wID0gdGhpcy5vcHRpb25zXG5cbiAgICAgICAgc2NhbGVzLnggPSBkMy5zY2FsZUxpbmVhcigpLmRvbWFpbihvcC54cmFuZ2UpLnJhbmdlKFswLCBvcC53aWR0aF0pLmNsYW1wKHRydWUpXG4gICAgICAgIHNjYWxlcy55ID0gZDMuc2NhbGVMb2coKS5kb21haW4ob3AueXJhbmdlKS5yYW5nZShbMCwgb3AuaGVpZ2h0XSkuY2xhbXAodHJ1ZSlcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgY3JlYXRlQXhlcygpIHtcbiAgICAgICAgY29uc3Qgc2VscyA9IHRoaXMuc2Vsc1xuICAgICAgICBjb25zdCBzY2FsZXMgPSB0aGlzLnNjYWxlc1xuICAgICAgICBjb25zdCBvcCA9IHRoaXMub3B0aW9uc1xuXG4gICAgICAgIC8vIENyZWF0ZSBheGVzXG4gICAgICAgIHNlbHMueWF4aXMgPSB0aGlzLmJhc2UuYXBwZW5kKFwiZ1wiKVxuICAgICAgICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcImF4aXMgYXhpcy0teVwiKVxuICAgICAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgU1ZHLnRyYW5zbGF0ZSgwLCAtIGF4aXNPZmZzZXQpKVxuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgLmNhbGwoZDMuYXhpc0xlZnQoc2NhbGVzLnkpLnRpY2tGb3JtYXQoXCJcIikudGlja3MoNCkpO1xuXG4gICAgICAgIHNlbHMueGF4aXMgPSB0aGlzLmJhc2UuYXBwZW5kKFwiZ1wiKVxuICAgICAgICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcImF4aXMgYXhpcy0teFwiKVxuICAgICAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgU1ZHLnRyYW5zbGF0ZSgwLCBvcC5oZWlnaHQgLSBheGlzT2Zmc2V0KSlcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgIC5jYWxsKGQzLmF4aXNCb3R0b20oc2NhbGVzLngpLnRpY2tGb3JtYXQoXCJcIikudGlja3MoNCkpO1xuXG4gICAgICAgIC8vIEFkZCB4bGFiZWxcbiAgICAgICAgdGhpcy5iYXNlLmFwcGVuZChcInRleHRcIilcbiAgICAgICAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIFNWRy50cmFuc2xhdGUob3Aud2lkdGggLyAyLCBvcC5tYXJnaW4udG9wICsgb3AuaGVpZ2h0ICsgMTApKVxuICAgICAgICAgICAgLnN0eWxlKFwidGV4dC1hbmNob3JcIiwgXCJtaWRkbGVcIilcbiAgICAgICAgICAgIC50ZXh0KFwiVGltZVwiKVxuXG4gICAgICAgIC8vIEFkZCB5bGFiZWxcbiAgICAgICAgdGhpcy5iYXNlLmFwcGVuZChcInRleHRcIilcbiAgICAgICAgICAgIC5zdHlsZShcInRleHQtYW5jaG9yXCIsIFwibWlkZGxlXCIpXG4gICAgICAgICAgICAudGV4dChcIkxvc3NcIilcbiAgICAgICAgICAgIC5hdHRyKFwieVwiLCBvcC5wYWQubGVmdCAtIG9wLm1hcmdpbi5sZWZ0KVxuICAgICAgICAgICAgLmF0dHIoXCJ4XCIsIG9wLnBhZC50b3AgLSAob3AuaGVpZ2h0IC8gMikpXG4gICAgICAgICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBTVkcucm90YXRlKC05MCkpXG4gICAgICAgIC8vIC5hdHRyKFwidHJhbnNmb3JtXCIsIFNWRy50cmFuc2xhdGUob3AubWFyZ2luLmxlZnQsIG9wLmhlaWdodC8yKSlcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgY3JlYXRlUGF0aCgpIHtcbiAgICAgICAgdGhpcy5wYXRoID0gZDMubGluZTxudW1iZXI+KClcbiAgICAgICAgICAgIC54KChkOiBudW1iZXIsIGk6IG51bWJlcikgPT4gdGhpcy5zY2FsZXMueChpKSlcbiAgICAgICAgICAgIC55KChkOiBudW1iZXIsIGk6IG51bWJlcikgPT4gdGhpcy5zY2FsZXMueShkKSlcbiAgICAgICAgICAgIC5jdXJ2ZShkMy5jdXJ2ZUxpbmVhcilcbiAgICB9XG5cbiAgICBkYXRhKCk6IFRcbiAgICBkYXRhKHZhbDogVCk6IHRoaXNcbiAgICBkYXRhKHZhbD8pIHtcbiAgICAgICAgaWYgKHZhbCA9PSBudWxsKSByZXR1cm4gdGhpcy5fZGF0YVxuICAgICAgICB0aGlzLl9kYXRhID0gdmFsO1xuICAgICAgICByZXR1cm4gdGhpc1xuICAgIH1cblxuICAgIHJlc2V0WHJhbmdlXygpOiB0aGlzIHtcbiAgICAgICAgdGhpcy5vcHRpb25zLnhyYW5nZSA9IHRoaXMuZGVmYXVsdFhyYW5nZVxuICAgICAgICByZXR1cm4gdGhpc1xuICAgIH1cbn0iLCJpbXBvcnQgKiBhcyBkMyBmcm9tICdkMydcbmltcG9ydCAqIGFzIFIgZnJvbSAncmFtZGEnXG5cbmltcG9ydCB7IENoYXJ0MkQsIENoYXJ0T3B0aW9ucywgQ2hhcnRTY2FsZXMgfSBmcm9tICcuLi91dGlsL0NoYXJ0MmRWaXNDb21wb25lbnQnXG5pbXBvcnQgeyBTaW1wbGVFdmVudEhhbmRsZXIgfSBmcm9tICcuLi91dGlsL1NpbXBsZUV2ZW50SGFuZGxlcidcbmltcG9ydCB7IEQzU2VsIH0gZnJvbSAnLi4vdXRpbC94ZDMnXG5pbXBvcnQgeyBTVkcgfSBmcm9tICcuLi91dGlsL1NWR3BsdXMnXG5pbXBvcnQgeyBCYWxsSGlzdG9yeSB9IGZyb20gJy4vR29sZkJhbGwnXG5cbmNvbnN0IGF4aXNPZmZzZXQgPSAxIC8vIFVzZSB0aGlzIHRvIGNvdmVyIHRoZSBwbG90dGVkIGxpbmVzXG5cbmludGVyZmFjZSBHcmFwaFNlbHMge1xuICAgIHhheGlzPzogRDNTZWxcbiAgICB5YXhpcz86IEQzU2VsXG4gICAgeGxhYmVsPzogRDNTZWxcbiAgICBsaW5lPzogRDNTZWxcbiAgICBiYWNrZHJvcD86IEQzU2VsXG4gICAgYmFsbD86IEQzU2VsXG59XG5cbnR5cGUgVHJhY2tlciA9IHtcbiAgICBzZWw6IEQzU2VsLFxuICAgIHZhbHM6IG51bWJlcltdXG59XG5cbnR5cGUgTGluZVRyYWNrZXIgPSB7XG4gICAgKGtleTogc3RyaW5nKTogVHJhY2tlclxufVxuXG50eXBlIFQgPSBMaW5lVHJhY2tlclxuXG5leHBvcnQgY2xhc3MgR29sZlhEaXN0IGV4dGVuZHMgQ2hhcnQyRDxUPiB7XG4gICAgY3NzbmFtZSA9IFwibGluZS1wbG90XCJcblxuICAgIF9kYXRhOiBUXG5cbiAgICBvcHRpb25zOiBDaGFydE9wdGlvbnMgPSB7XG4gICAgICAgIG1heFdpZHRoOiAzNTAsXG4gICAgICAgIG1heEhlaWdodDogMjUwLFxuICAgICAgICBtYXJnaW46IHsgdG9wOiAxMCwgcmlnaHQ6IDEwLCBib3R0b206IDMwLCBsZWZ0OiAzMCB9LFxuICAgICAgICBwYWQ6IHsgdG9wOiA1LCByaWdodDogMSwgYm90dG9tOiAxMCwgbGVmdDogMTUgfSxcbiAgICAgICAgeHJhbmdlOiBbMCwgNjAwXSxcbiAgICAgICAgeXJhbmdlOiBbMSwgMF0sXG4gICAgfVxuXG4gICAgZGVmYXVsdFhyYW5nZTogW251bWJlciwgbnVtYmVyXVxuXG4gICAgc2NhbGVzOiBDaGFydFNjYWxlcyA9IHt9XG5cbiAgICBzZWxzOiBHcmFwaFNlbHMgPSB7fVxuXG4gICAgcGF0aDogZDMuTGluZTxudW1iZXI+XG5cbiAgICBjb25zdHJ1Y3RvcihkM3BhcmVudDogRDNTZWwsIGV2ZW50SGFuZGxlcj86IFNpbXBsZUV2ZW50SGFuZGxlciwgb3B0aW9ucyA9IHt9KSB7XG4gICAgICAgIHN1cGVyKGQzcGFyZW50LCBldmVudEhhbmRsZXIsIG9wdGlvbnMpXG4gICAgICAgIHN1cGVyLmluaXRTVkcodGhpcy5vcHRpb25zLCBbXCJiZ1wiXSlcbiAgICAgICAgdGhpcy5iYXNlLmNsYXNzZWQodGhpcy5jc3NuYW1lLCB0cnVlKVxuICAgICAgICB0aGlzLmRlZmF1bHRYcmFuZ2UgPSB0aGlzLm9wdGlvbnMueHJhbmdlXG4gICAgICAgIHRoaXMuZGF0YSg8TGluZVRyYWNrZXI+e30pXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUGxvdCB0aGUgdmFsdWVzIG9mIGFsbCB4IGFjY29yZGluZyB0byB0aGUgZnVuY3Rpb25cbiAgICAgKiBcbiAgICAgKiBAcGFyYW0geCBBIGxpbnNwYWNlIG9mIHggdmFsdWVzIG92ZXIgd2hpY2ggdG8gcGxvdCBhIGN1cnZlXG4gICAgICovXG4gICAgcHJvdGVjdGVkIGFkZERhdGFLZXlfKGNsYXNzbmFtZTogc3RyaW5nKSB7XG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzXG4gICAgICAgIGlmICghUi5oYXMoY2xhc3NuYW1lLCB0aGlzLmRhdGEoKSkpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBBZGRpbmcga2V5OiAke2NsYXNzbmFtZX1gKTtcbiAgICAgICAgICAgIHRoaXMuZGF0YSgpW2NsYXNzbmFtZV0gPSB7XG4gICAgICAgICAgICAgICAgc2VsOiBzZWxmLmluaXRCYXNlTGluZShjbGFzc25hbWUpLFxuICAgICAgICAgICAgICAgIHZhbHM6IFtdXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjbGVhclBhdGhzKCkge1xuICAgICAgICB0aGlzLmRhdGEoUi5tYXAoZCA9PiBSLmFzc29jKCd2YWxzJywgW10sIGQpLCB0aGlzLmRhdGEoKSkpXG4gICAgfVxuXG4gICAgcGxvdFBhdGgoZDogQmFsbEhpc3RvcnksIHNjYWxlPykge1xuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICAgICAgdGhpcy5hZGREYXRhS2V5XyhkLmNsYXNzbmFtZSk7XG5cbiAgICAgICAgY29uc3Qgc2NhbGVyID0gKHNjYWxlID09IG51bGwpID8geCA9PiB4IDogc2NhbGVcblxuICAgICAgICBjb25zdCBjdXJyVmFscyA9IHRoaXMuZGF0YSgpW2QuY2xhc3NuYW1lXTtcbiAgICAgICAgY3VyclZhbHMudmFscy5wdXNoKHNjYWxlcihNYXRoLmFicyhkLngpKSk7XG5cbiAgICAgICAgLy8gc2xpZGluZyB4LWF4aXNcbiAgICAgICAgY29uc3QgbmV3WHJhbmdlID0gW01hdGgubWF4KDAsIGN1cnJWYWxzLnZhbHMubGVuZ3RoLXRoaXMub3B0aW9ucy54cmFuZ2VbMV0pLCBNYXRoLm1heChjdXJyVmFscy52YWxzLmxlbmd0aCx0aGlzLm9wdGlvbnMueHJhbmdlWzFdKV1cbiAgICAgICAgdGhpcy51cGRhdGVTY2FsZXMobmV3WHJhbmdlKVxuICAgICAgICB0aGlzLmNyZWF0ZVBhdGgoKSAvLyBEZXBlbmRzIG9uIHggc2NhbGVcblxuXG4gICAgICAgIGN1cnJWYWxzLnNlbC5kYXRhKFtjdXJyVmFsc10pXG4gICAgICAgICAgICAuam9pbihcInBhdGhcIilcbiAgICAgICAgICAgIC5jbGFzc2VkKGQuY2xhc3NuYW1lLCB0cnVlKVxuICAgICAgICAgICAgLmF0dHIoXCJkXCIsIGQgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBzZWxmLnBhdGgoZC52YWxzKVxuICAgICAgICAgICAgfSlcbiAgICB9XG5cbiAgICAvLyBMaXZlIHVwZGF0ZSB0aGUgeHJhbmdlXG4gICAgdXBkYXRlU2NhbGVzKHhyYW5nZSkge1xuICAgICAgICBjb25zdCBvcCA9IHRoaXMub3B0aW9uc1xuICAgICAgICB0aGlzLnNjYWxlcy54ID0gZDMuc2NhbGVMaW5lYXIoKS5kb21haW4oeHJhbmdlKS5yYW5nZShbMCwgb3Aud2lkdGhdKS5jbGFtcCh0cnVlKVxuICAgIH1cblxuICAgIHByaXZhdGUgaW5pdEJhc2VMaW5lKGNsYXNzbmFtZTogc3RyaW5nKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmxheWVycy5iZy5hcHBlbmQoXCJwYXRoXCIpXG4gICAgICAgICAgICAuY2xhc3NlZChjbGFzc25hbWUsIHRydWUpXG4gICAgICAgICAgICAuY2xhc3NlZCgnbGluZScsIHRydWUpXG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGNyZWF0ZVNjYWxlcygpIHtcbiAgICAgICAgY29uc3Qgb3AgPSB0aGlzLm9wdGlvbnNcbiAgICAgICAgdGhpcy5zY2FsZXMueCA9IGQzLnNjYWxlTGluZWFyKCkuZG9tYWluKG9wLnhyYW5nZSkucmFuZ2UoWzAsIG9wLndpZHRoXSkuY2xhbXAodHJ1ZSlcbiAgICAgICAgdGhpcy5zY2FsZXMueSA9IGQzLnNjYWxlTGluZWFyKCkuZG9tYWluKG9wLnlyYW5nZSkucmFuZ2UoWzAsIG9wLmhlaWdodF0pLmNsYW1wKHRydWUpXG4gICAgfVxuXG4gICAgaW5pdCgpIHtcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgICAgIGNvbnN0IG9wID0gdGhpcy5vcHRpb25zO1xuICAgICAgICBjb25zdCBzY2FsZXMgPSB0aGlzLnNjYWxlcztcbiAgICAgICAgY29uc3Qgc2VscyA9IHRoaXMuc2VscztcblxuICAgICAgICB0aGlzLmNyZWF0ZVNjYWxlcygpXG4gICAgICAgIHRoaXMuY3JlYXRlUGF0aCgpXG4gICAgICAgIHRoaXMuY3JlYXRlQXhlcygpXG4gICAgfVxuXG5cbiAgICBwcm90ZWN0ZWQgY3JlYXRlQXhlcygpIHtcbiAgICAgICAgY29uc3Qgc2VscyA9IHRoaXMuc2Vsc1xuICAgICAgICBjb25zdCBzY2FsZXMgPSB0aGlzLnNjYWxlc1xuICAgICAgICBjb25zdCBvcCA9IHRoaXMub3B0aW9uc1xuXG4gICAgICAgIC8vIENyZWF0ZSBheGVzXG4gICAgICAgIHNlbHMueGF4aXMgPSB0aGlzLmJhc2UuYXBwZW5kKFwiZ1wiKVxuICAgICAgICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcImF4aXMgYXhpcy0teFwiKVxuICAgICAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgU1ZHLnRyYW5zbGF0ZSgwLCBvcC5oZWlnaHQgLSBheGlzT2Zmc2V0KSlcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgIC5jYWxsKGQzLmF4aXNCb3R0b20oc2NhbGVzLngpLnRpY2tzKDQpLnRpY2tGb3JtYXQoXCJcIikpO1xuXG4gICAgICAgIHNlbHMueWF4aXMgPSB0aGlzLmJhc2UuYXBwZW5kKFwiZ1wiKVxuICAgICAgICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcImF4aXMgYXhpcy0teVwiKVxuICAgICAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgU1ZHLnRyYW5zbGF0ZSgwLCAtIGF4aXNPZmZzZXQpKVxuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgLmNhbGwoZDMuYXhpc0xlZnQoc2NhbGVzLnkpLnRpY2tzKDQpLnRpY2tGb3JtYXQoXCJcIikpO1xuXG4gICAgICAgIHRoaXMuYmFzZS5hcHBlbmQoXCJ0ZXh0XCIpXG4gICAgICAgICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBTVkcudHJhbnNsYXRlKG9wLndpZHRoIC8gMiwgb3AubWFyZ2luLnRvcCArIG9wLmhlaWdodCArIDEwKSlcbiAgICAgICAgICAgIC5zdHlsZShcInRleHQtYW5jaG9yXCIsIFwibWlkZGxlXCIpXG4gICAgICAgICAgICAudGV4dChcIlRpbWVcIilcblxuICAgICAgICB0aGlzLmJhc2UuYXBwZW5kKFwidGV4dFwiKVxuICAgICAgICAgICAgLnN0eWxlKFwidGV4dC1hbmNob3JcIiwgXCJtaWRkbGVcIilcbiAgICAgICAgICAgIC50ZXh0KFwiXFx1MDNCOCAtIFxcdTAzQjgqXCIpXG4gICAgICAgICAgICAuYXR0cihcInlcIiwgb3AucGFkLmxlZnQgLSBvcC5tYXJnaW4ubGVmdClcbiAgICAgICAgICAgIC5hdHRyKFwieFwiLCBvcC5wYWQudG9wIC0gKG9wLmhlaWdodCAvIDIpKVxuICAgICAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgU1ZHLnJvdGF0ZSgtOTApKVxuICAgIH1cblxuICAgIHByb3RlY3RlZCBjcmVhdGVQYXRoKCkge1xuICAgICAgICB0aGlzLnBhdGggPSBkMy5saW5lPG51bWJlcj4oKVxuICAgICAgICAgICAgLngoKGQ6IG51bWJlciwgaTogbnVtYmVyKSA9PiB0aGlzLnNjYWxlcy54KGkpKVxuICAgICAgICAgICAgLnkoKGQ6IG51bWJlciwgaTogbnVtYmVyKSA9PiB0aGlzLnNjYWxlcy55KGQpKVxuICAgICAgICAgICAgLmN1cnZlKGQzLmN1cnZlTGluZWFyKVxuICAgIH1cblxuICAgIGRhdGEoKTogVFxuICAgIGRhdGEodmFsOiBUKTogdGhpc1xuICAgIGRhdGEodmFsPykge1xuICAgICAgICBpZiAodmFsID09IG51bGwpIHJldHVybiB0aGlzLl9kYXRhXG4gICAgICAgIHRoaXMuX2RhdGEgPSB2YWw7XG4gICAgICAgIHJldHVybiB0aGlzXG4gICAgfVxuXG4gICAgcmVzZXRYcmFuZ2VfKCk6IHRoaXMge1xuICAgICAgICB0aGlzLm9wdGlvbnMueHJhbmdlID0gdGhpcy5kZWZhdWx0WHJhbmdlXG4gICAgICAgIHJldHVybiB0aGlzXG4gICAgfVxufSIsImltcG9ydCAqIGFzIGQzIGZyb20gJ2QzJ1xuaW1wb3J0IHsgRDNTZWwsIGxpbnNwYWNlIH0gZnJvbSAnLi4vdXRpbC94ZDMnXG5pbXBvcnQgKiBhcyBSIGZyb20gJ3JhbWRhJ1xuaW1wb3J0IHsgbGVnZW5kQ29sb3IgfSBmcm9tICdkMy1zdmctbGVnZW5kJ1xuaW1wb3J0IHsgVmVjdG9yMkQgfSBmcm9tICcuLi90eXBlcydcbmltcG9ydCB7IFNWR09wdGlvbnMsIFNWR1Zpc0NvbXBvbmVudCB9IGZyb20gJy4uL3V0aWwvU1ZHVmlzQ29tcG9uZW50J1xuaW1wb3J0IHsgU2ltcGxlRXZlbnRIYW5kbGVyIH0gZnJvbSAnLi4vdXRpbC9TaW1wbGVFdmVudEhhbmRsZXInO1xuaW1wb3J0IHsgU1ZHIH0gZnJvbSAnLi4vdXRpbC9TVkdwbHVzJ1xuaW1wb3J0IHsgZ2V0Q29udG91clZhbHVlcyB9IGZyb20gJy4uL3Bsb3R0aW5nJ1xuaW1wb3J0IHsgVXBkYXRlciwgQmxvY2tVcGRhdGVyIH0gZnJvbSAnLi4vQ29udG91clBsb3RVcGRhdGVyJ1xuaW1wb3J0IHsgaW50ZXJ2YWwsIGZyb21FdmVudCB9IGZyb20gJ3J4anMnXG5pbXBvcnQgeyBtYXAsIHRhcCwgdGFrZSwgc3RhcnRXaXRoLCBzY2FuLCBzd2l0Y2hNYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycydcblxudHlwZSBUID0gbnVtYmVyW11cblxuZXhwb3J0IGZ1bmN0aW9uIGphZ2dlZExvc3MoeDE6bnVtYmVyLCB4MjpudW1iZXIpOm51bWJlciB7XG4gICAgY29uc3QgZnJlcXMgPSBsaW5zcGFjZSgtMiwgMywgNykubWFwKHggPT4gTWF0aC5leHAoeCkpXG4gICAgY29uc3QgYWEgPSBmcmVxcy5tYXAoeCA9PiAxL3gpXG5cbiAgICBsZXQgeTEgPSB4MSwgeTIgPSB4MlxuICAgIGZyZXFzLmZvckVhY2goKGgsIG0pID0+IHtcbiAgICAgICAgeTEgPSBhYVttXSAqIE1hdGguc2luKGggKiB4MikgKyB5MVxuICAgICAgICB5MiA9IGFhW21dICogTWF0aC5jb3MoaCAqIHgxKSArIHkyXG4gICAgfSlcblxuICAgIGNvbnN0IHMxID0gZnJlcXMucmVkdWNlKChhY2MsIGgsIG0pID0+IChhYVttXSAqIE1hdGguc2luKGggKiB5MSkpICsgYWNjLCAwKVxuICAgIGNvbnN0IGMxID0gZnJlcXMucmVkdWNlKChhY2MsIGgsIG0pID0+IChhYVttXSAqIE1hdGguY29zKGggKiB5MSkpICsgYWNjLCAwKVxuICAgIGNvbnN0IHMyID0gZnJlcXMucmVkdWNlKChhY2MsIGgsIG0pID0+IChhYVttXSAqIE1hdGguc2luKGggKiB5MikpICsgYWNjLCAwKVxuICAgIGNvbnN0IGMyID0gZnJlcXMucmVkdWNlKChhY2MsIGgsIG0pID0+IChhYVttXSAqIE1hdGguY29zKGggKiB5MikpICsgYWNjLCAwKVxuXG4gICAgY29uc3QgejEgPSB5MSAqIHMyICsgYzEgKiB5MlxuICAgIGNvbnN0IHoyID0gczEgKiB5MiArIHkxICogYzJcbiAgICByZXR1cm4gKE1hdGgucG93KHoxLCAyKSArIE1hdGgucG93KHoyLCAyKSlcbn1cblxuaW50ZXJmYWNlIEdyYXBoT3B0aW9ucyBleHRlbmRzIFNWR09wdGlvbnMge1xuICAgIHhyYW5nZTogW251bWJlciwgbnVtYmVyXVxuICAgIHlyYW5nZTogW251bWJlciwgbnVtYmVyXVxuICAgIG46IG51bWJlciAgICAgICAgICAgICAgICAgICAvLyBOdW1iZXIgb2YgbWVzaGdyaWQgcG9pbnRzIGFsb25nIHRoZSB4IGF4aXNcbiAgICBtOiBudW1iZXIgICAgICAgICAgICAgICAgICAgLy8gTnVtYmVyIG9mIG1lc2hncmlkIHBvaW50cyBhbG9uZyB0aGUgeSBheGlzXG4gICAgcGFkOiBudW1iZXIgICAgICAgICAgICAgICAgIC8vIEFubm90YXRpb25zIHRoYXQgaGFwcGVuIGluIHRoZSBtYXJnaW4gbXVzdCB0YWtlIHBsYWNlIGBwYWRgIGRpc3RhbmNlIGZyb20gdGhlIG1haW4gZ3JhcGhcbn1cblxuaW50ZXJmYWNlIEdyYXBoU2NhbGVzIHtcbiAgICB4PzogZDMuU2NhbGVMaW5lYXI8bnVtYmVyLCBudW1iZXI+LFxuICAgIHk/OiBkMy5TY2FsZUxpbmVhcjxudW1iZXIsIG51bWJlcj4sXG4gICAgLy8gY29sb3I/OiBkMy5TY2FsZUxpbmVhcjxudW1iZXIsIHN0cmluZz4sXG4gICAgY29sb3I/OiBkMy5TY2FsZUxpbmVhcjxudW1iZXIsIHN0cmluZz4sXG4gICAgY3VydmU/OiBkMy5DdXJ2ZUNhdG11bGxSb21GYWN0b3J5LFxuICAgIGNvbnRvdXJzPzogZDMuQ29udG91cnMsXG4gICAgdGhyZXNob2xkcz86IG51bWJlcltdXG59XG5cbmludGVyZmFjZSBHcmFwaFNlbHMge1xuICAgIHhheGlzPzogRDNTZWxcbiAgICB5YXhpcz86IEQzU2VsXG4gICAgbGVnZW5kPzogRDNTZWxcbiAgICB0aXA/OiBEM1NlbFxuICAgIHhsYWJlbD86IEQzU2VsXG4gICAgeWxhYmVsPzogRDNTZWxcbiAgICBjaXJjbGU/OiBEM1NlbFxuICAgIGFycm93cz86IEQzU2VsW11cbn1cblxuY29uc3QgRVZFTlRTID0ge1xuICBzdGVwQWRkZWQ6IFwiU2ltcGxlTmV0X1N0ZXBBZGRlZFwiXG59XG5cbmV4cG9ydCBjbGFzcyBMb3NzU3VyZmFjZTJEIGV4dGVuZHMgU1ZHVmlzQ29tcG9uZW50PFQ+IHtcbiAgICBjc3NuYW1lID0gXCJzaW1wbGUtZ3JhcGhcIlxuXG4gICAgX2RhdGE6IFRcblxuICAgIG9wdGlvbnM6IEdyYXBoT3B0aW9ucyA9IHtcbiAgICAgICAgbWF4V2lkdGg6IDQ1MCxcbiAgICAgICAgbWF4SGVpZ2h0OiA1MDAsXG4gICAgICAgIG1hcmdpbjogeyB0b3A6IDUwLCByaWdodDogNzUsIGJvdHRvbTogMTI1LCBsZWZ0OiA1MCB9LFxuICAgICAgICBwYWQ6IDMwLFxuICAgICAgICB4cmFuZ2U6IFswLCA4XSxcbiAgICAgICAgeXJhbmdlOiBbMCwgOF0sXG4gICAgICAgIG46IDEwMCxcbiAgICAgICAgbTogMTAwLFxuICAgIH0gLy8gI3N0YXRlXG5cbiAgICBzY2FsZXM6IEdyYXBoU2NhbGVzID0ge31cbiAgICBzZWxzOiBHcmFwaFNlbHMgPSB7fVxuXG4gICAgc3RhdGljIGV2ZW50cyA9IEVWRU5UU1xuXG4gICAgY29uc3RydWN0b3IoZDNwYXJlbnQ6IEQzU2VsLCBldmVudEhhbmRsZXI/OiBTaW1wbGVFdmVudEhhbmRsZXIsIG9wdGlvbnMgPSB7fSkge1xuICAgICAgICBzdXBlcihkM3BhcmVudCwgZXZlbnRIYW5kbGVyLCBvcHRpb25zKVxuICAgICAgICBzdXBlci5pbml0U1ZHKHRoaXMub3B0aW9ucylcbiAgICAgICAgdGhpcy5iYXNlLmNsYXNzZWQodGhpcy5jc3NuYW1lLCB0cnVlKVxuICAgICAgICB0aGlzLmluaXRQbG90KClcbiAgICB9XG5cbiAgICBwbG90Q29udG91cnMoKSB7XG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuICAgICAgICBjb25zdCBvcCA9IHRoaXMub3B0aW9ucztcbiAgICAgICAgY29uc3Qgc2NhbGVzID0gdGhpcy5zY2FsZXM7XG5cbiAgICAgICAgY29uc3QgY29udG91ckZ1bmMgPSBqYWdnZWRMb3NzXG4gICAgICAgIGNvbnN0IHZhbHMgPSBnZXRDb250b3VyVmFsdWVzKG9wLm4sIG9wLm0sIG9wLnhyYW5nZSwgb3AueXJhbmdlLCBjb250b3VyRnVuYylcbiAgICAgICAgbGV0IHRocmVzaG9sZHMgPSBsaW5zcGFjZShkMy5taW4odmFscyksIGQzLm1heCh2YWxzKSwgMjUpO1xuXG4gICAgICAgIHNjYWxlcy5jb2xvciA9IGQzLnNjYWxlTGluZWFyKCkuZG9tYWluKGQzLmV4dGVudCh2YWxzKSkucmFuZ2UoWzAsIDFdKS5pbnRlcnBvbGF0ZSgoKSA9PiBkMy5pbnRlcnBvbGF0ZUJsdWVzKTtcblxuICAgICAgICBzY2FsZXMuY29udG91cnMudGhyZXNob2xkcyh0aHJlc2hvbGRzKVxuXG4gICAgICAgIGNvbnN0IGNvbnRvdXJWYWxzID0gc2NhbGVzLmNvbnRvdXJzKHZhbHMpXG4gICAgICAgIGNvbnN0IGNvbnRvdXJHcm91cCA9IHRoaXMuYmFzZS5hcHBlbmQoJ2cnKS5hdHRyKCdpZCcsICdjb250b3VyLWdyb3VwJylcbiAgICAgICAgY29uc3QgY29udG91cnMgPSBjb250b3VyR3JvdXAuc2VsZWN0QWxsKFwicGF0aC5jb250b3VyXCIpXG4gICAgICAgICAgICAuZGF0YShjb250b3VyVmFscylcblxuXG4gICAgICAgIGNvbnRvdXJzLmpvaW4oXCJwYXRoXCIpXG4gICAgICAgICAgICAuYXR0cihcImNsYXNzXCIsIFwiY29udG91clwiKVxuICAgICAgICAgICAgLmF0dHIoXCJkXCIsIGQzLmdlb1BhdGgoZDMuZ2VvSWRlbnRpdHkoKS5zY2FsZShvcC53aWR0aCAvIG9wLm4pKSlcbiAgICAgICAgICAgIC5hdHRyKFwiZmlsbFwiLCBkID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gc2NhbGVzLmNvbG9yKGQudmFsdWUpXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNsYXNzZWQoJ25vdC1maXQnLCBkID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICAgICAgfSlcblxuICAgIH1cblxuXG4gICAgaW50b1Zpcyh2OiBWZWN0b3IyRCkge1xuICAgICAgICByZXR1cm4geyB4OiB0aGlzLnNjYWxlcy54KHYueCksIHk6IHRoaXMuc2NhbGVzLnkodi55KSB9XG4gICAgfVxuXG4gICAgaW50b01hdGgodjogVmVjdG9yMkQpIHtcbiAgICAgICAgcmV0dXJuIHsgeDogdGhpcy5zY2FsZXMueC5pbnZlcnQodi54KSwgeTogdGhpcy5zY2FsZXMueS5pbnZlcnQodi55KSB9XG4gICAgfVxuXG4gICAgaW5pdFBsb3QoKSB7XG4gICAgICAgIC8vIEluaXRpYWxpemUgcGxvdHNcbiAgICAgICAgdGhpcy5wbG90Q29udG91cnMoKVxuICAgIH1cblxuICAgIGluaXQoKSB7XG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuICAgICAgICBjb25zdCBvcCA9IHRoaXMub3B0aW9ucztcbiAgICAgICAgY29uc3Qgc2NhbGVzID0gdGhpcy5zY2FsZXM7XG4gICAgICAgIGNvbnN0IHNlbHMgPSB0aGlzLnNlbHM7XG5cbiAgICAgICAgLy8gQWRkIGRlZmluaXRpb25zXG4gICAgICAgIFNWRy5hZGRBcnJvd3ModGhpcy5zdmcpXG5cbiAgICAgICAgLy8gQ3JlYXRlIHNjYWxlc1xuICAgICAgICBzY2FsZXMuY29udG91cnMgPSBkMy5jb250b3VycygpLnNpemUoW29wLm4sIG9wLm1dKVxuICAgICAgICBzY2FsZXMuY3VydmUgPSBkMy5jdXJ2ZUNhdG11bGxSb20uYWxwaGEoMC41KVxuICAgICAgICBzY2FsZXMueCA9IGQzLnNjYWxlTGluZWFyKCkuZG9tYWluKG9wLnhyYW5nZSkucmFuZ2UoWzAsIG9wLndpZHRoXSlcbiAgICAgICAgc2NhbGVzLnkgPSBkMy5zY2FsZUxpbmVhcigpLmRvbWFpbihvcC55cmFuZ2UpLnJhbmdlKFtvcC5oZWlnaHQsIDBdKVxuXG4gICAgICAgIC8vIEFkZCBBeGVzIGFuZCBsYWJlbHNcbiAgICAgICAgc2Vscy54YXhpcyA9IHRoaXMuYmFzZS5hcHBlbmQoXCJnXCIpXG4gICAgICAgICAgICAuYXR0cihcImNsYXNzXCIsIFwiYXhpcyBheGlzLS14XCIpXG4gICAgICAgICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBTVkcudHJhbnNsYXRlKDAsIG9wLmhlaWdodCkpXG4gICAgICAgICAgICAuY2FsbChkMy5heGlzQm90dG9tKHNjYWxlcy54KS50aWNrcygzLCBcInNcIikpO1xuXG4gICAgICAgIHNlbHMueWF4aXMgPSB0aGlzLmJhc2UuYXBwZW5kKFwiZ1wiKVxuICAgICAgICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcImF4aXMgYXhpcy0teVwiKVxuICAgICAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgU1ZHLnRyYW5zbGF0ZSgwLCAwKSlcbiAgICAgICAgICAgIC5jYWxsKGQzLmF4aXNMZWZ0KHNjYWxlcy55KS50aWNrcygzLCBcInNcIikpO1xuXG4gICAgICAgIC8vIHNlbHMueGxhYmVsID0gdGhpcy5iYXNlLmFwcGVuZChcInRleHRcIilcbiAgICAgICAgLy8gICAgIC50ZXh0KFwidzBcIilcbiAgICAgICAgLy8gICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJ0aXRsZXNcIilcbiAgICAgICAgLy8gICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIFNWRy50cmFuc2xhdGUob3Aud2lkdGggLyAyLCBvcC5oZWlnaHQgKyBvcC5wYWQpKVxuXG4gICAgICAgIC8vIHNlbHMueWxhYmVsID0gdGhpcy5iYXNlLmFwcGVuZChcInRleHRcIilcbiAgICAgICAgLy8gICAgIC50ZXh0KFwidzFcIilcbiAgICAgICAgLy8gICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJ0aXRsZXNcIilcbiAgICAgICAgLy8gICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIFNWRy50cmFuc2xhdGUoLW9wLnBhZCwgb3AuaGVpZ2h0IC8gMikgKyBTVkcucm90YXRlKC05MCkpXG4gICAgfVxuXG4gICAgZGF0YSgpOiBudW1iZXJbXVxuICAgIGRhdGEodmFsOiBudW1iZXJbXSk6IHRoaXNcbiAgICBkYXRhKHZhbD8pIHtcbiAgICAgICAgaWYgKHZhbCA9PSBudWxsKSByZXR1cm4gdGhpcy5fZGF0YVxuICAgICAgICB0aGlzLl9kYXRhID0gdmFsXG4gICAgICAgIHJldHVybiB0aGlzXG4gICAgfVxufSIsImltcG9ydCAqIGFzIGQzIGZyb20gJ2QzJ1xuaW1wb3J0IHsgYmFzZUxvc3MgfSBmcm9tICcuLi9Hb2xmTGFuZHNjYXBlcydcblxuZXhwb3J0IGNsYXNzIE1hbnVhbFVwZGF0ZXIge1xuICAgIGY6ICh4OiBudW1iZXIpID0+IG51bWJlclxuICAgIGRmOiAoeDogbnVtYmVyKSA9PiBudW1iZXJcblxuICAgIC8vIHEgPSAxL3EgaW4gdGhlIEludGVyZmFjZSAoZHVlIHRvIG5pY2UgcHJvcGVydGllcyBvZiB0aGlzIGRlZmluaXRpb24pIGlzIGEgZGlmZmVyZW50IHZhbHVlIHRoYW4gdGhpc1xuICAgIHE6IG51bWJlciAgIC8vIDAgLT4gMSwgd2hlcmUgMCBpcyBTR0QgYW5kIDEgaXMgTkdELiAwLjUgaXMgc3FydCBOR0QuIFtzdGVwID0gLSBldGEgKiBIIF4gKC0xL3EpICogZ10gKEggPSAwIHdoZW4gcT0wKVxuICAgIGV0YTogbnVtYmVyIC8vIGFrYSAnbGVhcm5pbmcgcmF0ZSdcblxuICAgIGNvbnN0cnVjdG9yKGYsIGRmLCBxID0gMCwgZXRhID0gMC4xKSB7XG4gICAgICAgIHRoaXMuZiA9IGY7XG4gICAgICAgIHRoaXMuZGYgPSBkZjtcbiAgICAgICAgdGhpcy5xID0gcTtcbiAgICAgICAgdGhpcy5ldGEgPSBldGE7XG4gICAgfVxuXG4gICAgLy8gQ2FsY3VsYXRlIGVycm9yIHNxdWFyZWQgb2YgdGhlIGJhc2UgZnVuY3Rpb25cbiAgICBsb3NzKHg6IG51bWJlcik6IG51bWJlciB7XG4gICAgICAgIHJldHVybiBiYXNlTG9zcyh0aGlzLmYoeCkpXG4gICAgfVxuXG4gICAgLy8gR3JhZGllbnQgYXQgeFxuICAgIGdyYWRpZW50KHg6IG51bWJlcik6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLmYoeCkgKiB0aGlzLmRmKHgpXG4gICAgfVxuXG4gICAgLy8gVGhlIHBvc2l0aXZlIHNlbWktZGVmaW5pdGUgaGVzc2lhbiBhdCB4XG4gICAgcHNkaGVzcyh4OiBudW1iZXIpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gTWF0aC5wb3codGhpcy5kZih4KSwgMilcbiAgICB9XG5cbiAgICB1cGRhdGVNb2RpZmllcih4OiBudW1iZXIpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gTWF0aC5wb3codGhpcy5kZih4KSwgMSAtICgyICogdGhpcy5xKSlcbiAgICB9XG5cbiAgICB1cGRhdGVBbXQoeDogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZih4KSAqIHRoaXMudXBkYXRlTW9kaWZpZXIoeClcbiAgICB9XG5cbiAgICAvLyBUaGUgYW1vdW50IHRvIHVwZGF0ZSBhdCB4IGdpdmVuIHRoZSBsZWFybmluZyByYXRlIGV0YVxuICAgIHN0ZXAoeDogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgICAgLy8gQ291bGQgdXNlIHBzZGhlc3MgaW4gdGhlIGVxdWF0aW9uIGJlbG93LCBidXQgZHVlIHRvIG51bWVyaWNhbCBpc3N1ZXMgdGhpcyBmb3JtdWxhdGlvbiBjb21wdXRlcyBtb3JlIHJlbGlhYmx5XG4gICAgICAgIHJldHVybiAtIHRoaXMuZXRhICogdGhpcy51cGRhdGVBbXQoeClcbiAgICB9XG5cbiAgICAvLyBHZXQgdGhlIG5leHQgeCB2YWx1ZSBhZnRlciB0YWtpbmcgYSBzdGVwXG4gICAgbmV4dCh4OiBudW1iZXIpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4geCArIHRoaXMuc3RlcCh4KVxuICAgIH1cbn1cblxuXG5leHBvcnQgY2xhc3MgTWFudWFsVXBkYXRlcjJEIHtcbiAgICBmOiAoeDogbnVtYmVyKSA9PiBudW1iZXJcbiAgICBkZjogKHg6IG51bWJlcikgPT4gbnVtYmVyXG5cbiAgICAvLyBxID0gMS9xIGluIHRoZSBJbnRlcmZhY2UgKGR1ZSB0byBuaWNlIHByb3BlcnRpZXMgb2YgdGhpcyBkZWZpbml0aW9uKSBpcyBhIGRpZmZlcmVudCB2YWx1ZSB0aGFuIHRoaXNcbiAgICBxOiBudW1iZXIgICAvLyAwIC0+IDEsIHdoZXJlIDAgaXMgU0dEIGFuZCAxIGlzIE5HRC4gMC41IGlzIHNxcnQgTkdELiBbc3RlcCA9IC0gZXRhICogSCBeICgtMS9xKSAqIGddIChIID0gMCB3aGVuIHE9MClcbiAgICBldGE6IG51bWJlciAvLyBha2EgJ2xlYXJuaW5nIHJhdGUnXG5cbiAgICBjb25zdHJ1Y3RvcihmLCBkZiwgcSA9IDAsIGV0YSA9IDAuMSkge1xuICAgICAgICB0aGlzLmYgPSBmO1xuICAgICAgICB0aGlzLmRmID0gZGY7XG4gICAgICAgIHRoaXMucSA9IHE7XG4gICAgICAgIHRoaXMuZXRhID0gZXRhO1xuICAgIH1cblxuICAgIC8vIENhbGN1bGF0ZSBlcnJvciBzcXVhcmVkIG9mIHRoZSBiYXNlIGZ1bmN0aW9uXG4gICAgbG9zcyh4OiBudW1iZXIpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gYmFzZUxvc3ModGhpcy5mKHgpKVxuICAgIH1cblxuICAgIC8vIEdyYWRpZW50IGF0IHhcbiAgICBncmFkaWVudCh4OiBudW1iZXIpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5mKHgpICogdGhpcy5kZih4KVxuICAgIH1cblxuICAgIC8vIFRoZSBwb3NpdGl2ZSBzZW1pLWRlZmluaXRlIGhlc3NpYW4gYXQgeFxuICAgIHBzZGhlc3MoeDogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIE1hdGgucG93KHRoaXMuZGYoeCksIDIpXG4gICAgfVxuXG4gICAgdXBkYXRlTW9kaWZpZXIoeDogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIE1hdGgucG93KHRoaXMuZGYoeCksIDEgLSAoMiAqIHRoaXMucSkpXG4gICAgfVxuXG4gICAgdXBkYXRlQW10KHg6IG51bWJlcik6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLmYoeCkgKiB0aGlzLnVwZGF0ZU1vZGlmaWVyKHgpXG4gICAgfVxuXG4gICAgLy8gVGhlIGFtb3VudCB0byB1cGRhdGUgYXQgeCBnaXZlbiB0aGUgbGVhcm5pbmcgcmF0ZSBldGFcbiAgICBzdGVwKHg6IG51bWJlcik6IG51bWJlciB7XG4gICAgICAgIC8vIENvdWxkIHVzZSBwc2RoZXNzIGluIHRoZSBlcXVhdGlvbiBiZWxvdywgYnV0IGR1ZSB0byBudW1lcmljYWwgaXNzdWVzIHRoaXMgZm9ybXVsYXRpb24gY29tcHV0ZXMgbW9yZSByZWxpYWJseVxuICAgICAgICByZXR1cm4gLSB0aGlzLmV0YSAqIHRoaXMudXBkYXRlQW10KHgpXG4gICAgfVxuXG4gICAgLy8gR2V0IHRoZSBuZXh0IHggdmFsdWUgYWZ0ZXIgdGFraW5nIGEgc3RlcFxuICAgIG5leHQoeDogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHggKyB0aGlzLnN0ZXAoeClcbiAgICB9XG59IiwiaW1wb3J0ICogYXMgZDMgZnJvbSAnZDMnXG5pbXBvcnQgeyBEM1NlbCwgbGluc3BhY2UgfSBmcm9tICcuLi91dGlsL3hkMydcbmltcG9ydCB7IFZlY3RvcjJEIH0gZnJvbSAnLi4vdHlwZXMnXG5pbXBvcnQgeyBTVkdPcHRpb25zLCBTVkdWaXNDb21wb25lbnQsIE1hcmdpbkluZm8gfSBmcm9tICcuLi91dGlsL1NWR1Zpc0NvbXBvbmVudCdcbmltcG9ydCB7IFNpbXBsZUV2ZW50SGFuZGxlciB9IGZyb20gJy4uL3V0aWwvU2ltcGxlRXZlbnRIYW5kbGVyJztcbmltcG9ydCB7IFNWRyB9IGZyb20gXCIuLi91dGlsL1NWR3BsdXNcIlxuaW1wb3J0IHsgTWFudWFsVXBkYXRlciB9IGZyb20gXCIuL01hbnVhbFVwZGF0ZXJcIlxuXG5pbnRlcmZhY2UgR3JhcGhPcHRpb25zIHtcbiAgICBtYXJnaW46IE1hcmdpbkluZm9cbiAgICBtYXhXaWR0aDogbnVtYmVyXG4gICAgbWF4SGVpZ2h0OiBudW1iZXJcbiAgICB3aWR0aD86IG51bWJlclxuICAgIGhlaWdodD86IG51bWJlclxuICAgIHhSYW5nZTogW251bWJlciwgbnVtYmVyXVxuICAgIHlSYW5nZTogW251bWJlciwgbnVtYmVyXVxufVxuXG5pbnRlcmZhY2UgU2NhbGVYWSB7XG4gICAgeDogZDMuU2NhbGVMaW5lYXI8bnVtYmVyLCBudW1iZXI+XG4gICAgeTogZDMuU2NhbGVMaW5lYXI8bnVtYmVyLCBudW1iZXI+XG59XG5cbmludGVyZmFjZSBHcmFwaFNjYWxlcyB7XG4gICAgdG9QeDogU2NhbGVYWSxcbiAgICB0b01hdGg6IFNjYWxlWFksXG59XG5cbmludGVyZmFjZSBHcmFwaFNlbHMge1xuICAgIHBhdGhzOiBEM1NlbFtdXG4gICAgY3Vyc29yRG90czogRDNTZWxbXVxuICAgIGN1cnNvckxpbmU6IEQzU2VsXG59XG5cbnR5cGUgREFUQSA9IG51bWJlcltdIC8vIExpc3Qgb2YgYWxwaGFzIGluIHk9YWxwaGEgKiB4XjJcblxuZXhwb3J0IGNsYXNzIFF1YWRyYXRpY1Bsb3RzIGV4dGVuZHMgU1ZHVmlzQ29tcG9uZW50PERBVEE+IHtcbiAgICBjc3NuYW1lID0gXCJxdWFkcmF0aWMtcGxvdHNcIlxuICAgIG1hc2tJZDogc3RyaW5nXG5cbiAgICBfZGF0YTogREFUQVxuXG4gICAgb3B0aW9uczogR3JhcGhPcHRpb25zID0ge1xuICAgICAgICAvLyBvcHRpb25zICA9IHsgXG4gICAgICAgIG1hcmdpbjogeyB0b3A6IDAsIHJpZ2h0OiAwLCBib3R0b206IDQwLCBsZWZ0OiAwIH0sXG4gICAgICAgIG1heFdpZHRoOiA0MDAsXG4gICAgICAgIG1heEhlaWdodDogMjUwLFxuICAgICAgICB4UmFuZ2U6IFstMywgM10sXG4gICAgICAgIHlSYW5nZTogWy0wLjA1LCA4LjgyXSxcbiAgICB9XG5cbiAgICBzZWxzOiBQYXJ0aWFsPEdyYXBoU2Vscz4gPSB7fVxuICAgIHRpbWVyOiBkMy5UaW1lclxuXG4gICAgY29uc3RydWN0b3IoZDNwYXJlbnQ6IEQzU2VsLCBldmVudEhhbmRsZXI/OiBTaW1wbGVFdmVudEhhbmRsZXIsIG9wdGlvbnMgPSB7fSwgSUQgPSAwKSB7XG4gICAgICAgIHN1cGVyKGQzcGFyZW50LCBldmVudEhhbmRsZXIsIG9wdGlvbnMsIElEKVxuICAgICAgICB0aGlzLm1hc2tJZCA9IGBsaW5lLW1hc2stJHt0aGlzLklEfWBcbiAgICAgICAgc3VwZXIuaW5pdFNWRyhvcHRpb25zKSAvLyBDYWxscyBpbml0IGluIHRoaXMgY2xhc3NcbiAgICAgICAgdGhpcy5iYXNlLmNsYXNzZWQodGhpcy5jc3NuYW1lLCB0cnVlKVxuICAgIH1cblxuICAgIGdldCB0b1B4U2NhbGVzKCk6IFNjYWxlWFkge1xuICAgICAgICBjb25zdCBvcCA9IHRoaXMub3B0aW9uc1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgeDogZDMuc2NhbGVMaW5lYXIoKVxuICAgICAgICAgICAgICAgIC5kb21haW4ob3AueFJhbmdlKVxuICAgICAgICAgICAgICAgIC5yYW5nZShbMCwgb3Aud2lkdGhdKSxcbiAgICAgICAgICAgIHk6IGQzLnNjYWxlTGluZWFyKClcbiAgICAgICAgICAgICAgICAuZG9tYWluKG9wLnlSYW5nZSlcbiAgICAgICAgICAgICAgICAucmFuZ2UoW29wLmhlaWdodCwgMF0pLFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgaW50b1B4KHY6IFZlY3RvcjJEKSB7XG4gICAgICAgIHJldHVybiB7IHg6IHRoaXMudG9QeFNjYWxlcy54KHYueCksIHk6IHRoaXMudG9QeFNjYWxlcy55KHYueSkgfVxuICAgIH1cblxuICAgIC8vIFRha2UgYSB2ZWN0b3IgaW4gdGhlIGNvb3JkaW5hdGUgc3lzdGVtIGFuZCByZXR1cm4gaXQgdG8gdGhlIG1hdGggY29vcmRpbmF0ZXNcbiAgICBpbnRvTWF0aCh2OiBWZWN0b3IyRCkge1xuICAgICAgICByZXR1cm4geyB4OiB0aGlzLnRvUHhTY2FsZXMueC5pbnZlcnQodi54KSwgeTogdGhpcy50b1B4U2NhbGVzLnkuaW52ZXJ0KHYueSkgfVxuICAgIH1cblxuICAgIC8vIFR1cm4gYSBudW1iZXIgaW50byBhIHZlY3RvclxuICAgIG51bTJ2ZWMoeDogbnVtYmVyKTogVmVjdG9yMkQge1xuICAgICAgICBjb25zdCBvcCA9IHRoaXMub3B0aW9uc1xuICAgICAgICAvLyByZXR1cm4geyB4OiB4LCB5OiBvcC5sYW5kc2NhcGUubG9zcyh4KSB9XG4gICAgICAgIHJldHVybiB7IHg6IHgsIHk6IHggKiogMiB9XG4gICAgfVxuXG4gICAgbGluZU1ha2VyKGY6ICh4OiBudW1iZXIpID0+IG51bWJlcikge1xuICAgICAgICByZXR1cm4gZDMubGluZTxudW1iZXI+KClcbiAgICAgICAgICAgIC54KChkOiBudW1iZXIsIGk6IG51bWJlcikgPT4gdGhpcy50b1B4U2NhbGVzLngoZCkpXG4gICAgICAgICAgICAueSgoZDogbnVtYmVyLCBpOiBudW1iZXIpID0+IHRoaXMudG9QeFNjYWxlcy55KGYoZCkpKVxuICAgIH1cblxuICAgIGluaXQoKSB7XG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuICAgICAgICBjb25zdCBvcCA9IHRoaXMub3B0aW9ucztcbiAgICAgICAgY29uc3Qgc2VscyA9IHRoaXMuc2VscztcblxuICAgICAgICB0aGlzLmJhc2VcbiAgICAgICAgICAgIC5hdHRyKCd3aWR0aCcsIG9wLm1heFdpZHRoKVxuICAgICAgICAgICAgLmF0dHIoJ2hlaWdodCcsIG9wLm1heEhlaWdodClcblxuICAgICAgICBPYmplY3Qua2V5cyh0aGlzLmxheWVycykuZm9yRWFjaChrID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiUnVubmluZyBvbiBsYXllcjogXCIsIGspO1xuICAgICAgICAgICAgY29uc3QgZyA9IHRoaXMubGF5ZXJzW2tdXG4gICAgICAgICAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgYCR7U1ZHLnRyYW5zbGF0ZShvcC5tYXJnaW4ubGVmdCwgb3AubWFyZ2luLnRvcCl9YClcbiAgICAgICAgfSlcblxuICAgICAgICB0aGlzLmxheWVycy5iZy5hcHBlbmQoJ3JlY3QnKVxuICAgICAgICAgICAgLmNsYXNzZWQoXCJiZy1yZWN0XCIsIHRydWUpXG4gICAgICAgICAgICAuYXR0cignd2lkdGgnLCBvcC53aWR0aClcbiAgICAgICAgICAgIC5hdHRyKCdoZWlnaHQnLCBvcC5oZWlnaHQpXG5cbiAgICAgICAgLy8gY29uc3QgZiA9ICh4OiBudW1iZXIpID0+IDAuNSAqICh4ICoqIDIpXG5cbiAgICAgICAgY29uc3QgZmFjID0gMS40O1xuICAgICAgICBjb25zdCBhYSA9IFsxIC8gZmFjLCAxLCBmYWNdO1xuICAgICAgICAvLyBjb25zdCBhYSA9IFtmYWNdO1xuICAgICAgICBjb25zdCB1cGRhdGVycyA9IGFhLm1hcChhID0+IHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgTWFudWFsVXBkYXRlcihcbiAgICAgICAgICAgICAgICAoeDogbnVtYmVyKSA9PiBhICogeCxcbiAgICAgICAgICAgICAgICAoeDogbnVtYmVyKSA9PiBhLFxuICAgICAgICAgICAgICAgIDEsXG4gICAgICAgICAgICAgICAgMC4wMSxcbiAgICAgICAgICAgIClcbiAgICAgICAgfSlcblxuICAgICAgICBzZWxzLnBhdGhzID0gdXBkYXRlcnMubWFwKHUgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMubGF5ZXJzLm1haW4uYXBwZW5kKFwicGF0aFwiKVxuICAgICAgICAgICAgICAgIC5kYXR1bShsaW5zcGFjZShvcC54UmFuZ2VbMF0sIG9wLnhSYW5nZVsxXSwgMTAwKSlcbiAgICAgICAgICAgICAgICAuY2xhc3NlZChcImxpbmUtcGF0aFwiLCB0cnVlKVxuICAgICAgICAgICAgICAgIC5hdHRyKCdkJywgZCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmxpbmVNYWtlcih4ID0+IHUubG9zcyh4KSkoZClcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICB9KVxuXG4gICAgICAgIC8vIEN1cnNvciBMaW5lIExvZ2ljXG4gICAgICAgIHNlbHMuY3Vyc29yTGluZSA9IHRoaXMuYmFzZS5hcHBlbmQoJ3BhdGgnKVxuICAgICAgICAgICAgLmNsYXNzZWQoJ2N1cnNvci1saW5lJywgdHJ1ZSlcbiAgICAgICAgICAgIC5jbGFzc2VkKCdoaWRkZW4nLCB0cnVlKVxuXG4gICAgICAgIHNlbHMuY3Vyc29yRG90cyA9IHVwZGF0ZXJzLm1hcCh1ID0+IHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmJhc2UuYXBwZW5kKCdjaXJjbGUnKVxuICAgICAgICAgICAgICAgIC5jbGFzc2VkKFwiY3Vyc29yLWRvdFwiLCB0cnVlKVxuICAgICAgICAgICAgICAgIC5hdHRyKFwiclwiLCBcIjNweFwiKVxuICAgICAgICB9KVxuXG4gICAgICAgIHRoaXMuYmFzZS5vbignbW91c2Vtb3ZlJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgY29uc3QgbW91c2UgPSBkMy5tb3VzZSh0aGlzKVxuICAgICAgICAgICAgc2Vscy5jdXJzb3JMaW5lLmF0dHIoJ2QnLCBkMy5saW5lKCkoW1ttb3VzZVswXSwgMF0sIFttb3VzZVswXSwgb3AuaGVpZ2h0XV0pKVxuXG4gICAgICAgICAgICAvLyBzZWxzLmN1cnNvckRvdHMuZm9yRWFjaCgoYywgaSkgPT4ge1xuICAgICAgICAgICAgLy8gICAgIGMuYXR0cignY3gnLCBtb3VzZVswXSlcbiAgICAgICAgICAgIC8vICAgICAgICAgLmF0dHIoJ2N5JywgKCkgPT4gc2VsZi50b1B4U2NhbGVzLnkodXBkYXRlcnNbaV0ubG9zcyhzZWxmLnRvUHhTY2FsZXMueC5pbnZlcnQobW91c2VbMF0pKSkpXG4gICAgICAgICAgICAvLyB9KVxuICAgICAgICB9KVxuXG4gICAgICAgIHRoaXMuYmFzZS5vbignbW91c2VvdXQnLCAoKSA9PiB7XG4gICAgICAgICAgICBzZWxzLmN1cnNvckxpbmUuY2xhc3NlZChcImhpZGRlblwiLCB0cnVlKVxuICAgICAgICAgICAgaWYgKHNlbGYudGltZXIgPT0gbnVsbCkgc2Vscy5jdXJzb3JEb3RzLmZvckVhY2goYyA9PiBjLmNsYXNzZWQoXCJoaWRkZW5cIiwgdHJ1ZSkpXG4gICAgICAgIH0pXG5cbiAgICAgICAgdGhpcy5iYXNlLm9uKCdtb3VzZW92ZXInLCAoKSA9PiB7XG4gICAgICAgICAgICBzZWxzLmN1cnNvckxpbmUuY2xhc3NlZChcImhpZGRlblwiLCBmYWxzZSlcbiAgICAgICAgICAgIGlmIChzZWxmLnRpbWVyID09IG51bGwpIHNlbHMuY3Vyc29yRG90cy5mb3JFYWNoKGMgPT4gYy5jbGFzc2VkKFwiaGlkZGVuXCIsIGZhbHNlKSlcbiAgICAgICAgfSlcblxuICAgICAgICB0aGlzLmJhc2Uub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgY29uc3QgbW91c2UgPSBkMy5tb3VzZSh0aGlzKVxuICAgICAgICAgICAgY29uc3QgdmFsID0gc2VsZi50b1B4U2NhbGVzLnguaW52ZXJ0KG1vdXNlWzBdKVxuICAgICAgICAgICAgc2Vscy5jdXJzb3JEb3RzLmZvckVhY2goKGMsIGkpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB1ID0gdXBkYXRlcnNbaV1cbiAgICAgICAgICAgICAgICBjb25zdCB4Q2xpY2sgPSBzZWxmLnRvUHhTY2FsZXMueC5pbnZlcnQobW91c2VbMF0pXG4gICAgICAgICAgICAgICAgYy5hdHRyKCdjeCcsIG1vdXNlWzBdKVxuICAgICAgICAgICAgICAgIGMuYXR0cignY3knLCBzZWxmLnRvUHhTY2FsZXMueSh1Lmxvc3MoeENsaWNrKSkpXG4gICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICBpZiAoc2VsZi50aW1lciA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgc2VsZi50aW1lciA9IGQzLmludGVydmFsKCh0aW1lKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHNlbHMuY3Vyc29yRG90cy5mb3JFYWNoKChjLCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB1ID0gdXBkYXRlcnNbaV1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHhOb3cgPSBzZWxmLnRvUHhTY2FsZXMueC5pbnZlcnQoK2MuYXR0cignY3gnKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHhOZXh0ID0gdS5uZXh0KHhOb3cpXG4gICAgICAgICAgICAgICAgICAgICAgICBjLmF0dHIoJ2N4Jywgc2VsZi50b1B4U2NhbGVzLngoeE5leHQpKVxuICAgICAgICAgICAgICAgICAgICAgICAgYy5hdHRyKCdjeScsIHNlbGYudG9QeFNjYWxlcy55KHUubG9zcyh4TmV4dCkpKVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH0sIDEwKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgc2VsZi50aW1lci5zdG9wKClcbiAgICAgICAgICAgICAgICBzZWxmLnRpbWVyID0gbnVsbFxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIF9yZW5kZXIoZGF0YTogREFUQSkge1xuICAgICAgICAvLyB0aGlzLnBsb3RGdW5jc1xuICAgIH1cblxuICAgIGRhdGEoKTogREFUQVxuICAgIGRhdGEodmFsOiBEQVRBKTogdGhpc1xuICAgIGRhdGEodmFsPykge1xuICAgICAgICBpZiAodmFsID09IG51bGwpIHJldHVybiB0aGlzLl9kYXRhXG4gICAgICAgIHJldHVybiB0aGlzXG4gICAgfVxufSIsImltcG9ydCB7IEhUTUxWaXNDb21wb25lbnQgfSBmcm9tICcuLi91dGlsL0hUTUxWaXNDb21wb25lbnQnXG5pbXBvcnQgKiBhcyBkMyBmcm9tICdkMydcbmltcG9ydCB7IEQzU2VsIH0gZnJvbSAnLi4vdXRpbC94ZDMnXG5pbXBvcnQgeyBBcnJheSB9IGZyb20gJy4uL3R5cGVzJ1xuaW1wb3J0ICogYXMgUiBmcm9tICdyYW1kYSdcbmltcG9ydCB7IFNpbXBsZUV2ZW50SGFuZGxlciB9IGZyb20gJy4uL3V0aWwvU2ltcGxlRXZlbnRIYW5kbGVyJztcbmltcG9ydCB7IFNWRyB9IGZyb20gJy4uL3V0aWwvU1ZHcGx1cydcbmltcG9ydCAqIGFzIG5qIGZyb20gXCJudW1qc1wiXG5cbmludGVyZmFjZSBTaW1wbGVOZXRTZWxzIHtcbiAgc3ZnOiBEM1NlbFxuICBub2RlVmFsczoge1xuICAgIG4wOiBEM1NlbFxuICAgIG4xOiBEM1NlbFxuICAgIG4yOiBEM1NlbFxuICB9XG4gIGxpbmVzOiB7XG4gICAgdzA6IEQzU2VsXG4gICAgdzE6IEQzU2VsXG4gIH1cbiAgbGluZVZhbHM6IHtcbiAgICB3MDogRDNTZWxcbiAgICB3MTogRDNTZWxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgU2ltcGxlTmV0IGV4dGVuZHMgSFRNTFZpc0NvbXBvbmVudDxudWxsPiB7XG4gIGNzc25hbWUgPSBcInNpbXBsZS1uZXQtc3ZnXCJcbiAgb3B0aW9ucyA9IHt9XG4gIHNlbHM6UGFydGlhbDxTaW1wbGVOZXRTZWxzPiA9IHt9XG5cblxuICBjb25zdHJ1Y3RvcihkM3BhcmVudDogRDNTZWwsIGV2ZW50SGFuZGxlcj86IFNpbXBsZUV2ZW50SGFuZGxlciwgb3B0aW9ucyA9IHt9LCBJRCA9IDApIHtcbiAgICBzdXBlcihkM3BhcmVudCwgZXZlbnRIYW5kbGVyLCBvcHRpb25zLCBJRClcbiAgICB0aGlzLmJhc2UuY2xhc3NlZCh0aGlzLmNzc25hbWUsIHRydWUpXG4gICAgc3VwZXIuaW5pdEhUTUwoKVxuICAgIHRoaXMuaW5pdCgpXG4gIH1cblxuICBnZXQgc3Ryb2tlV2lkdGhTY2FsZSgpOiBkMy5TY2FsZUxpbmVhcjxudW1iZXIsIG51bWJlcj4ge1xuICAgICAgcmV0dXJuIGQzLnNjYWxlTGluZWFyKCkucmFuZ2UoWzQuMiwgNjBdKS5kb21haW4oWzAsIDEuN10pXG4gIH1cblxuICBnZXQgb3BhY2l0eVNjYWxlKCk6IGQzLlNjYWxlTGluZWFyPG51bWJlciwgbnVtYmVyPiB7XG4gICAgICByZXR1cm4gZDMuc2NhbGVMaW5lYXIoKS5yYW5nZShbMC4yLCAxXSkuZG9tYWluKFswLCAxLjddKVxuICB9XG5cbiAgaW5pdCgpIHtcbiAgICBjb25zdCBzZWxzID0gdGhpcy5zZWxzXG4gICAgY29uc3Qgb3BzID0gdGhpcy5vcHRpb25zXG5cbiAgICBjb25zdCBodG1sQ29udGVudCA9IGBcbiAgICA8c3ZnIHZpZXdCb3g9XCIwIDAgMjY2MCA1NTVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgZmlsbC1ydWxlPVwiZXZlbm9kZFwiIGNsaXAtcnVsZT1cImV2ZW5vZGRcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIiBzdHJva2UtbWl0ZXJsaW1pdD1cIjVcIj5cbiAgICA8ZyBpZD1cIm5ldC12YWx1ZVwiPlxuICAgICAgPHBhdGggaWQ9XCJuZXQtdmFsLTEtcmVjdFwiIGQ9XCJNMTk5OC44IDY3LjZBNjUuOCA2NS44IDAgMDAxOTMzLjEgMmgtMTYzLjVhNjUuOCA2NS44IDAgMDAtNjUuOCA2NS43djI3LjhhNjUuOCA2NS44IDAgMDA2NS44IDY1LjhIMTkzM2E2NS44IDY1LjggMCAwMDY1LjctNjUuOFY2Ny42elwiIGZpbGw9XCIjZmZmXCIgc3Ryb2tlPVwiIzAwMFwiIHN0cm9rZS13aWR0aD1cIjMuOFwiLz5cbiAgICAgIDx0ZXh0IGlkPVwibmV0LXZhbC0xXCIgeD1cIjE4MjYuM1wiIHk9XCIxMTIuNFwiIGZvbnQtZmFtaWx5PVwiJ0lCTVBsZXhUaGFpLVNlbWlCb2xkJywnSUJNIFBsZXggVGhhaScsc2Fucy1zZXJpZlwiIGZvbnQtd2VpZ2h0PVwiNjAwXCIgZm9udC1zaXplPVwiODMuM1wiIHRleHQtYW5jaG9yPVwibWlkZGxlXCI+XG4gICAgICAgIDBcbiAgICAgIDwvdGV4dD5cbiAgICAgIDxwYXRoIGlkPVwibmV0LXZhbC0wLXJlY3RcIiBkPVwiTTk0NS44IDY3LjZBNjUuOCA2NS44IDAgMDA4ODAgMkg3MTYuNWE2NS44IDY1LjggMCAwMC02NS43IDY1Ljd2MjcuOGE2NS44IDY1LjggMCAwMDY1LjcgNjUuOGgxNjMuNmE2NS44IDY1LjggMCAwMDY1LjctNjUuOFY2Ny42elwiIGZpbGw9XCIjZmZmXCIgc3Ryb2tlPVwiIzAwMFwiIHN0cm9rZS13aWR0aD1cIjMuOFwiLz5cbiAgICAgIDx0ZXh0IGlkPVwibmV0LXZhbC0wXCIgeD1cIjc3My4zXCIgeT1cIjExMi40XCIgZm9udC1mYW1pbHk9XCInSUJNUGxleFRoYWktU2VtaUJvbGQnLCdJQk0gUGxleCBUaGFpJyxzYW5zLXNlcmlmXCIgZm9udC13ZWlnaHQ9XCI2MDBcIiBmb250LXNpemU9XCI4My4zXCIgdGV4dC1hbmNob3I9XCJtaWRkbGVcIj5cbiAgICAgICAgMFxuICAgICAgPC90ZXh0PlxuICAgIDwvZz5cbiAgICA8ZyBpZD1cIm5ldC1ub2RlXCIgZmlsbD1cIiNlYmViZWJcIj5cbiAgICAgIDxjaXJjbGUgY3g9XCIyNzYuMlwiIGN5PVwiMjc4LjFcIiByPVwiMjc2LjJcIi8+XG4gICAgICA8Y2lyY2xlIGN4PVwiMTMzMS4xXCIgY3k9XCIyNzguMVwiIHI9XCIyNzYuMlwiLz5cbiAgICAgIDxjaXJjbGUgY3g9XCIyMzgzLjFcIiBjeT1cIjI3OC4xXCIgcj1cIjI3Ni4yXCIvPlxuICAgIDwvZz5cbiAgICA8ZyBpZD1cIm5ldC1saW5lXCI+XG4gICAgICA8cGF0aCBpZD1cIm5ldC1saW5lLTBcIiBkPVwiTTU1Mi41IDI4MC4yaDUwMi40YTIgMiAwIDAwMC00LjJINTUyLjVhMiAyIDAgMDAwIDQuMnpcIiBmaWxsPVwibm9uZVwiIHN0cm9rZT1cIiMwMDBcIiBzdHJva2Utd2lkdGg9XCI0LjJcIiBzdHJva2UtbWl0ZXJsaW1pdD1cIjEuNVwiLz5cbiAgICAgIDxwYXRoIGlkPVwibmV0LWxpbmUtMVwiIGQ9XCJNMTYwNy4zIDI3OC4xaDQ5OS41XCIgZmlsbD1cIm5vbmVcIiBzdHJva2U9XCIjMDAwXCIgc3Ryb2tlLXdpZHRoPVwiNC4yXCIgc3Ryb2tlLW1pdGVybGltaXQ9XCIxLjVcIi8+XG4gICAgPC9nPlxuICAgIDxwYXRoIGlkPVwiTUpYLTQtVEVYLUktNzdcIiBkPVwiTTgwNi4yIDQwNS4zYzAtMi4zIDEtNC40IDMtNi4zIDIuMS0yIDQuNC0zIDYuOC0zIDIgMCAzLjguOSA1LjQgMi44IDEuNiAyIDIuNSA1IDIuNiA5LjIgMCAzLjItMSA5LjQtMy4xIDE4LjYtMS42IDYtMyAxMS00LjQgMTQuOWE5NiA5NiAwIDAxLTUuNiAxMyAzMCAzMCAwIDAxLTguOSAxMSAxOS40IDE5LjQgMCAwMS0xMS42IDMuOGMtNC44IDAtOS0uOS0xMi42LTIuNi0zLjctMS43LTYuMy00LTgtN2wtLjQuN2MtNC41IDYtOS44IDguOS0xNi4yIDguOWEzMy4yIDMzLjIgMCAwMS0xNS43LTQgMTUuNCAxNS40IDAgMDEtNi02LjQgMjEuMiAyMS4yIDAgMDEtMi4yLTEwLjEgNzMgNzMgMCAwMTUuNS0yMy42YzMuNy0xMCA1LjUtMTYuMiA1LjYtMTlWNDA0YzAtLjMtLjItLjctLjYtMS4xLS40LS41LTEtLjctMS44LS43aC0uNmMtMi41IDAtNC44IDEtNi44IDMuMS0yIDItMy43IDQuMy00LjkgNi42YTQyLjcgNDIuNyAwIDAwLTIuNyA2LjhjLS42IDIuMi0xIDMuMy0xLjMgMy42LS4yLjItMSAuMy0yLjYuM0g3MTdjLS43LS43LTEtMS4xLTEtMS41YTcxLjYgNzEuNiAwIDAxNS0xMi44YzEuNi0zIDQtNS45IDcuMS04LjMgMy4xLTIuNSA2LjYtMy43IDEwLjUtMy43IDQuNiAwIDguMiAxLjMgMTAuNyA0IDIuNCAyLjcgMy43IDUuOCAzLjcgOS40IDAgMS45LTEuOCA3LjctNS4zIDE3LjRhNzEuMyA3MS4zIDAgMDAtNS40IDIyLjVjMCA1IDEuMiA4LjQgMy40IDEwLjVhMTMgMTMgMCAwMDguNiAzLjJjNC42IDAgOC43LTMuMyAxMi4zLTkuOWwuOC0xLjR2LTUuMmwuMS0xLjMuMi0xLjEuMS0xLjVhODYuNCA4Ni40IDAgMDAxLTQuOGMuMS0uOS40LTIuMiAxLTMuOS41LTEuNyAxLTMuNCAxLjMtNS4yLjMtMS43LjktNCAxLjgtNi45IDMtMTIuMyA0LjktMTguOSA1LjMtMTkuOSAxLjQtMi45IDMuNy00LjMgNy00LjMgMiAwIDMuNC41IDQuMSAxLjYuOCAxIDEuMiAyIDEuMyAzIDAgMS41LTEuNSA4LjMtNC43IDIwLjdhNTg4LjIgNTg4LjIgMCAwMC01LjEgMjEuNCAzNSAzNSAwIDAwLS40IDUuNnYxLjFjMCAxLjcuMiAzLjIuNSA0LjcuNCAxLjUgMS40IDMuMSAzLjEgNC43IDEuNyAxLjYgNC4xIDIuNSA3LjMgMi42IDcuNiAwIDEzLjctNi42IDE4LjItMTkuN2ExMDAgMTAwIDAgMDA1LjItMjAuMmMwLTMuNi0uNy02LjQtMi4xLTguNC0xLjQtMi0yLjgtMy44LTQuMi01LjJhNi4zIDYuMyAwIDAxLTIuMS00LjV6XCIgZmlsbC1ydWxlPVwibm9uemVyb1wiLz5cbiAgICA8cGF0aCBpZD1cIk1KWC00LVRFWC1OLTMwXCIgZD1cIk04MzkuMSA0NDUuOWM0LjMtNi4yIDEwLjEtOS4zIDE3LjUtOS4zYTIxLjQgMjEuNCAwIDAxMTkuOSAxMy41YzIuOCA2LjMgNC4yIDE1IDQuMiAyNiAwIDExLjktMS42IDIwLjktNSAyNy4xYTE5LjUgMTkuNSAwIDAxLTYuMiA3LjcgMjAuNyAyMC43IDAgMDEtMTIuOCA0LjNjLTIgMC00LS4yLTYtLjdhMjAgMjAgMCAwMS02LjktMy42Yy0yLjctMi00LjctNC42LTYuMy03LjctMy4yLTYuMi00LjktMTUuMi00LjktMjcgMC0xMy4zIDIuMi0yMy40IDYuNS0zMC4zem0yNS43LTEuNGExMC45IDEwLjkgMCAwMC0xNi4zIDBjLTIgMi0zLjIgNC43LTMuOCA4LjJhMTYyIDE2MiAwIDAwLS45IDIyYzAgMTIgLjMgMjAgMSAyMy43LjUgMy44IDIgNi44IDQgOSAyLjIgMi4zIDQuOCAzLjUgOCAzLjUgMyAwIDUuNi0xLjIgNy43LTMuNSAyLjItMi4yIDMuNi01LjQgNC4xLTkuNS41LTQuMi44LTExLjkgMS0yMy4yIDAtMTEtLjQtMTguMy0xLTIxLjhhMTYgMTYgMCAwMC0zLjgtOC40elwiIGZpbGwtcnVsZT1cIm5vbnplcm9cIi8+XG4gICAgPHBhdGggaWQ9XCJNSlgtNi1URVgtSS03N1wiIGQ9XCJNMTg2MS4xIDQwNS4zYzAtMi4zIDEtNC40IDMtNi4zIDIuMS0yIDQuNC0zIDYuOS0zIDEuOSAwIDMuNy45IDUuMyAyLjggMS42IDIgMi41IDUgMi42IDkuMiAwIDMuMi0xIDkuNC0zIDE4LjYtMS43IDYtMy4yIDExLTQuNSAxNC45YTk2IDk2IDAgMDEtNS42IDEzIDMwIDMwIDAgMDEtOC45IDExIDE5LjQgMTkuNCAwIDAxLTExLjYgMy44Yy00LjggMC05LS45LTEyLjYtMi42LTMuNy0xLjctNi4zLTQtOC03bC0uNC43Yy00LjQgNi05LjggOC45LTE2LjIgOC45YTMzLjIgMzMuMiAwIDAxLTE1LjYtNCAxNS40IDE1LjQgMCAwMS02LTYuNCAyMS4yIDIxLjIgMCAwMS0yLjMtMTAuMSA3MyA3MyAwIDAxNS41LTIzLjZjMy43LTEwIDUuNi0xNi4yIDUuNy0xOVY0MDRjMC0uMy0uMy0uNy0uNy0xLjEtLjQtLjUtMS0uNy0xLjgtLjdoLS42Yy0yLjUgMC00LjcgMS02LjggMy4xLTIgMi0zLjcgNC4zLTQuOCA2LjZhNDIuNiA0Mi42IDAgMDAtMi44IDYuOGMtLjYgMi4yLTEgMy4zLTEuMyAzLjYtLjIuMi0xIC4zLTIuNi4zaC0yLjJjLS43LS43LTEtMS4xLTEtMS41YTcxLjcgNzEuNyAwIDAxNS0xMi44YzEuNi0zIDQtNS45IDcuMS04LjMgMy4xLTIuNSA2LjYtMy43IDEwLjUtMy43IDQuNyAwIDguMiAxLjMgMTAuNyA0czMuNyA1LjggMy43IDkuNGMwIDEuOS0xLjggNy43LTUuMyAxNy40YTcxLjMgNzEuMyAwIDAwLTUuNCAyMi41YzAgNSAxLjIgOC40IDMuNCAxMC41YTEzIDEzIDAgMDA4LjYgMy4yYzQuNiAwIDguNy0zLjMgMTIuMy05LjlsLjgtMS40di01LjJsLjEtMS4zLjItMS4xYzAtLjUgMC0xIC4yLTEuNWE5MyA5MyAwIDAwMS00LjhjMC0uOS40LTIuMi45LTMuOS41LTEuNyAxLTMuNCAxLjMtNS4yLjMtMS43IDEtNCAxLjgtNi45IDMtMTIuMyA0LjktMTguOSA1LjMtMTkuOSAxLjQtMi45IDMuNy00LjMgNy00LjMgMiAwIDMuNC41IDQuMSAxLjYuOCAxIDEuMiAyIDEuMyAzIDAgMS41LTEuNSA4LjMtNC42IDIwLjdhNTg3IDU4NyAwIDAwLTUuMiAyMS40Yy0uMiAxLjEtLjMgMy0uMyA1LjZ2MS4xYzAgMS43LjEgMy4yLjQgNC43LjQgMS41IDEuNCAzLjEgMy4xIDQuNyAxLjcgMS42IDQuMiAyLjUgNy4zIDIuNiA3LjYgMCAxMy43LTYuNiAxOC4yLTE5LjdhOTkuNyA5OS43IDAgMDA1LjItMjAuMmMwLTMuNi0uNy02LjQtMi04LjQtMS41LTItMi45LTMuOC00LjMtNS4yYTYuMyA2LjMgMCAwMS0yLTQuNXpcIiBmaWxsLXJ1bGU9XCJub256ZXJvXCIvPlxuICAgIDxwYXRoIGlkPVwiTUpYLTYtVEVYLU4tMzFcIiBkPVwiTTE5MDcuNCA0NDYuN2wtMS41LjYtNC41IDEuMWMtMiAuNC00LjIuNi02LjcuOGgtMi4xdi01LjNoMi4xYTM3LjIgMzcuMiAwIDAwMTYuNC00LjRjMS4yLS44IDIuMi0xLjcgMy4yLTIuNS4xLS4yLjYtLjQgMS4zLS40LjcgMCAxLjQuMyAyIC43djY4LjRjLjYuNiAxIDEgMS41IDFhNzYuNCA3Ni40IDAgMDA5LjguN2gzdjUuM2gtMS4zYy0xLjYtLjItNy43LS4zLTE4LjItLjMtMTAuMyAwLTE2LjMgMC0xNy45LjNoLTEuNHYtNS4zaDcuM2EyNy4xIDI3LjEgMCAwMDQuNy0uNGwxLS4yLjYtLjYuNy0uNXYtNTl6XCIgZmlsbC1ydWxlPVwibm9uemVyb1wiLz5cbiAgICA8dGV4dCB4PVwiMjEwLjNcIiB5PVwiNDczLjVcIiBmb250LWZhbWlseT1cIidJQk1QbGV4VGhhaS1NZWRpdW0nLCdJQk0gUGxleCBUaGFpJyxzYW5zLXNlcmlmXCIgZm9udC13ZWlnaHQ9XCI1MDBcIiBmb250LXNpemU9XCI1MFwiPlxuICAgICAgSU5QVVRcbiAgICA8L3RleHQ+XG4gICAgPHRleHQgeD1cIjIyOTIuM1wiIHk9XCI0NzMuNVwiIGZvbnQtZmFtaWx5PVwiJ0lCTVBsZXhUaGFpLU1lZGl1bScsJ0lCTSBQbGV4IFRoYWknLHNhbnMtc2VyaWZcIiBmb250LXdlaWdodD1cIjUwMFwiIGZvbnQtc2l6ZT1cIjUwXCI+XG4gICAgICBPVVRQVVRcbiAgICA8L3RleHQ+XG4gICAgPGcgaWQ9XCJuZXQtY2VsbFwiIGZpbGw9XCIjZmZmXCIgc3Ryb2tlPVwiIzAwMFwiIHN0cm9rZS13aWR0aD1cIjMuOFwiPlxuICAgICAgPHBhdGggZD1cIk0yNTM2LjQgMTgyLjhhNjMgNjMgMCAwMC02My02M2gtMTY5YTYzIDYzIDAgMDAtNjMgNjN2MTY1LjhhNjMgNjMgMCAwMDYzIDYzaDE2OWE2MyA2MyAwIDAwNjMtNjNWMTgyLjh6TTE0NzguNiAxODIuOGE2MyA2MyAwIDAwLTYzLTYzaC0xNjlhNjMgNjMgMCAwMC02MyA2M3YxNjUuOGE2MyA2MyAwIDAwNjMgNjNoMTY5YTYzIDYzIDAgMDA2My02M1YxODIuOHpNNDIzLjcgMTcwLjNhNjMgNjMgMCAwMC02My02M2gtMTY5YTYzIDYzIDAgMDAtNjMgNjNWMzM2YTYzIDYzIDAgMDA2MyA2M2gxNjlhNjMgNjMgMCAwMDYzLTYzVjE3MC4zelwiLz5cbiAgICA8L2c+XG4gICAgPHRleHQgaWQ9XCJuZXQtbm9kZS0yXCIgeD1cIjIzNTEuNFwiIHk9XCIzMTEuOVwiIGZvbnQtZmFtaWx5PVwiJ0lCTVBsZXhUaGFpLVNlbWlCb2xkJywnSUJNIFBsZXggVGhhaScsc2Fucy1zZXJpZlwiIGZvbnQtd2VpZ2h0PVwiNTAwXCIgZm9udC1zaXplPVwiMTAwXCIgdGV4dC1hbmNob3I9XCJtaWRkbGVcIj5cbiAgICAgIDJcbiAgICA8L3RleHQ+XG4gICAgPHRleHQgaWQ9XCJuZXQtbm9kZS0xXCIgeD1cIjEyOTIuMVwiIHk9XCIzMTEuOVwiIGZvbnQtZmFtaWx5PVwiJ0lCTVBsZXhUaGFpLVNlbWlCb2xkJywnSUJNIFBsZXggVGhhaScsc2Fucy1zZXJpZlwiIGZvbnQtd2VpZ2h0PVwiNTAwXCIgZm9udC1zaXplPVwiMTAwXCIgdGV4dC1hbmNob3I9XCJtaWRkbGVcIj5cbiAgICAgIDFcbiAgICA8L3RleHQ+XG4gICAgPHRleHQgaWQ9XCJuZXQtbm9kZS0wXCIgeD1cIjIzOC43XCIgeT1cIjI5OS40XCIgZm9udC1mYW1pbHk9XCInSUJNUGxleFRoYWktU2VtaUJvbGQnLCdJQk0gUGxleCBUaGFpJyxzYW5zLXNlcmlmXCIgZm9udC13ZWlnaHQ9XCI1MDBcIiBmb250LXNpemU9XCIxMDBcIiB0ZXh0LWFuY2hvcj1cIm1pZGRsZVwiPlxuICAgICAgMFxuICAgIDwvdGV4dD5cbiAgICA8L3N2Zz5cbiAgICBgXG5cbiAgICB0aGlzLmJhc2UuaHRtbChodG1sQ29udGVudClcbiAgICBzZWxzLnN2ZyA9IHRoaXMuYmFzZS5zZWxlY3QoJ3N2ZycpXG4gICAgICAuYXR0cignd2lkdGgnLCBcIjEwMCVcIilcbiAgICAgIC5hdHRyKCdoZWlnaHQnLCBcIjEwMCVcIilcblxuICAgIHNlbHMubGluZXMgPSB7XG4gICAgICB3MDogdGhpcy5iYXNlLnNlbGVjdChcIiNuZXQtbGluZS0wXCIpLFxuICAgICAgdzE6IHRoaXMuYmFzZS5zZWxlY3QoXCIjbmV0LWxpbmUtMVwiKVxuICAgIH1cblxuICAgIHNlbHMubGluZVZhbHMgPSB7XG4gICAgICB3MDogdGhpcy5iYXNlLnNlbGVjdChcIiNuZXQtdmFsLTBcIiksXG4gICAgICB3MTogdGhpcy5iYXNlLnNlbGVjdChcIiNuZXQtdmFsLTFcIiksXG4gICAgfVxuXG4gICAgc2Vscy5ub2RlVmFscyA9IHtcbiAgICAgIG4wOiB0aGlzLmJhc2Uuc2VsZWN0KFwiI25ldC1ub2RlLTBcIiksXG4gICAgICBuMTogdGhpcy5iYXNlLnNlbGVjdChcIiNuZXQtbm9kZS0xXCIpLFxuICAgICAgbjI6IHRoaXMuYmFzZS5zZWxlY3QoXCIjbmV0LW5vZGUtMlwiKSxcbiAgICB9XG5cbiAgICBzZWxzLm5vZGVWYWxzLm4wLnRleHQoXCIxXCIpXG4gICAgc2Vscy5ub2RlVmFscy5uMS50ZXh0KFwiX1wiKVxuICAgIHNlbHMubm9kZVZhbHMubjIudGV4dChcIl9cIilcblxuICAgIHNlbHMubGluZVZhbHMudzAudGV4dChcIl9cIilcbiAgICBzZWxzLmxpbmVWYWxzLncxLnRleHQoXCJfXCIpXG5cbiAgfVxuXG4gIHNldFN0YXRlKHY6IEFycmF5KSB7XG4gICAgY29uc3Qgc2VscyA9IHRoaXMuc2Vsc1xuXG4gICAgY29uc3QgdzAgPSB2LmdldCgwKVxuICAgIGNvbnN0IHcxID0gdi5nZXQoMSlcblxuICAgIHNlbHMubGluZVZhbHMudzAudGV4dCh3MC50b0ZpeGVkKDIpKVxuICAgIHNlbHMubGluZVZhbHMudzEudGV4dCh3MS50b0ZpeGVkKDIpKVxuXG4gICAgc2Vscy5ub2RlVmFscy5uMS50ZXh0KHcwLnRvRml4ZWQoMikpXG4gICAgc2Vscy5ub2RlVmFscy5uMi50ZXh0KCh3MCAqIHcxKS50b0ZpeGVkKDIpKVxuXG4gICAgc2Vscy5saW5lcy53MFxuICAgICAgLmF0dHIoXCJzdHJva2Utd2lkdGhcIiwgdGhpcy5zdHJva2VXaWR0aFNjYWxlKHcwKSlcbiAgICAgIC5hdHRyKFwib3BhY2l0eVwiLCB0aGlzLm9wYWNpdHlTY2FsZSh3MCkpXG5cbiAgICBzZWxzLmxpbmVzLncxXG4gICAgICAuYXR0cihcInN0cm9rZS13aWR0aFwiLCB0aGlzLnN0cm9rZVdpZHRoU2NhbGUodzEpKVxuICAgICAgLmF0dHIoXCJvcGFjaXR5XCIsIHRoaXMub3BhY2l0eVNjYWxlKHcxKSlcbiAgICBcbiAgfVxuXG4gIC8vIFRPIGtlZXAgdGhlIEFQSSBjb25zaXN0ZW50LlxuICBkYXRhKCk6IG51bGxcbiAgZGF0YSh2YWw6IG51bGwpOiB0aGlzXG4gIGRhdGEodmFsPykge1xuICAgIHJldHVybiBudWxsXG4gIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9
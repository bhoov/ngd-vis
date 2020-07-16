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
const defaultStep2Lr = d3__WEBPACK_IMPORTED_MODULE_0__["scaleLinear"]().domain([0, 0.8]).range([0.001, 0.25]);
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
        const lrScale = this.op.step2lr(this.op.eta);
        const lr = numjs__WEBPACK_IMPORTED_MODULE_1__["multiply"](dv, lrScale).divide(absLoss);
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
        const z = numjs__WEBPACK_IMPORTED_MODULE_1__["add"](v, numjs__WEBPACK_IMPORTED_MODULE_1__["multiply"](g, -3));
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
        loss: (fv) => numjs__WEBPACK_IMPORTED_MODULE_0__["sum"](numjs__WEBPACK_IMPORTED_MODULE_0__["divide"](numjs__WEBPACK_IMPORTED_MODULE_0__["power"](fv, 2), 2))
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
/* harmony import */ var _vis_NewGeneralContourPlot__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./vis/NewGeneralContourPlot */ "./src/ts/vis/NewGeneralContourPlot.ts");
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


// import { ContourPlot } from './vis/GeneralContourPlot'














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
        graph: _vis_NewGeneralContourPlot__WEBPACK_IMPORTED_MODULE_2__["ContourPlot"].fromLandscape(sels.quiverPlot, eventHandler, _Landscapes2D__WEBPACK_IMPORTED_MODULE_13__["landscapes2d"].Elliptical),
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
        graph: _vis_NewGeneralContourPlot__WEBPACK_IMPORTED_MODULE_2__["ContourPlot"].fromLandscape(sels.quiverPlot, eventHandler, _Landscapes2D__WEBPACK_IMPORTED_MODULE_13__["landscapes2d"].SimpleNet2D),
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
    eventHandler.bind(_vis_NewGeneralContourPlot__WEBPACK_IMPORTED_MODULE_2__["ContourPlot"].events.stepAdded, (v) => {
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
/*! exports provided: linspace, powspace */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "linspace", function() { return linspace; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "powspace", function() { return powspace; });
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3 */ "./node_modules/d3/index.js");

const linspace = (start, end, n) => {
    const delta = (end - start) / (n - 1);
    return d3__WEBPACK_IMPORTED_MODULE_0__["range"](start, end + delta, delta).slice(0, n);
};
/**
 * Convert values spaced evenly on a power scale. When exp=1, same as linspace
 */
const powspace = (start, end, n, exp = 1) => {
    const scale = d3__WEBPACK_IMPORTED_MODULE_0__["scalePow"]().exponent(exp).domain([start, end]).range([start, end]);
    return linspace(start, end, n).map(x => scale(x));
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

/***/ "./src/ts/vis/NewGeneralContourPlot.ts":
/*!*********************************************!*\
  !*** ./src/ts/vis/NewGeneralContourPlot.ts ***!
  \*********************************************/
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nzcy9tYWluLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy90cy9CYXNlVXBkYXRlcjJELnRzIiwid2VicGFjazovLy8uL3NyYy90cy9Hb2xmTGFuZHNjYXBlcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHMvTGFuZHNjYXBlczJELnRzIiwid2VicGFjazovLy8uL3NyYy90cy9TaW1wbGVOZXRVcGRhdGVyLnRzIiwid2VicGFjazovLy8uL3NyYy90cy9VcGRhdGVyMkQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RzL21haW4udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RzL3Bsb3R0aW5nLnRzIiwid2VicGFjazovLy8uL3NyYy90cy91dGlsL0NoYXJ0MmRWaXNDb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RzL3V0aWwvSFRNTFZpc0NvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHMvdXRpbC9TVkdWaXNDb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RzL3V0aWwvU1ZHcGx1cy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHMvdXRpbC9TaW1wbGVFdmVudEhhbmRsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RzL3V0aWwvVUlkLnRzIiwid2VicGFjazovLy8uL3NyYy90cy91dGlsL1Zpc0NvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHMvdXRpbC94ZDMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RzL3Zpcy9Hb2xmQmFsbC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHMvdmlzL0dvbGZIb2xlMUQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RzL3Zpcy9Hb2xmTG9zc2VzLnRzIiwid2VicGFjazovLy8uL3NyYy90cy92aXMvR29sZlhEaXN0LnRzIiwid2VicGFjazovLy8uL3NyYy90cy92aXMvTG9zc1N1cmZhY2UyRC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHMvdmlzL01hbnVhbFVwZGF0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RzL3Zpcy9OZXdHZW5lcmFsQ29udG91clBsb3QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RzL3Zpcy9RdWFkcmF0aWNQbG90cy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHMvdmlzL1NpbXBsZU5ldC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSxRQUFRLG9CQUFvQjtRQUM1QjtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLGlCQUFpQiw0QkFBNEI7UUFDN0M7UUFDQTtRQUNBLGtCQUFrQiwyQkFBMkI7UUFDN0M7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFF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SUFBSSxDQUFDO1FBQzdCLE1BQU0sRUFBRSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUM7UUFDaEIsSUFBSSxFQUFFLFFBQVE7S0FDakI7SUFDRCxLQUFLLEVBQUU7UUFDSCxJQUFJLEVBQUUsT0FBTztRQUNiLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDO1FBQ3JKLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFFLEdBQUcsSUFBSTtRQUN0TyxNQUFNLEVBQUUsQ0FBQyxDQUFDLElBQUksR0FBRyxJQUFJLEVBQUUsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNuQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDO1FBQ2hCLElBQUksRUFBRSxRQUFRO0tBQ2pCO0lBQ0QsT0FBTyxFQUFFO1FBQ0wsSUFBSSxFQUFFLFNBQVM7UUFDZixDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMzRCxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ25ELE1BQU0sRUFBRSxDQUFDLENBQUMsRUFBRSxHQUFHLElBQUksRUFBRSxFQUFFLEdBQUcsSUFBSSxDQUFDO1FBQy9CLE1BQU0sRUFBRSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUM7UUFDaEIsSUFBSSxFQUFFLFFBQVE7S0FDakI7SUFDRCxJQUFJLEVBQUU7UUFDRixJQUFJLEVBQUUsTUFBTTtRQUNaLENBQUMsRUFBRyxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFDLENBQUMsQ0FBQztRQUN2QixFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBQyxDQUFDLENBQUMsR0FBQyxDQUFDO1FBQ3pCLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3ZCLE1BQU0sRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUM7UUFDZixJQUFJLEVBQUUsUUFBUTtLQUNqQjtJQUNELFFBQVEsRUFBRTtRQUNOLElBQUksRUFBRSxVQUFVO1FBQ2hCLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUMsQ0FBQyxHQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUM7UUFDeEMsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFDLENBQUMsR0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDM0MsMkJBQTJCO1FBQzNCLE1BQU0sRUFBRSxDQUFDLENBQUMsSUFBSSxHQUFDLENBQUMsRUFBRSxJQUFJLEdBQUMsQ0FBQyxDQUFDO1FBQ3pCLE1BQU0sRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDZCxJQUFJLEVBQUUsUUFBUTtLQUNqQjtDQUNKOzs7Ozs7Ozs7Ozs7O0FDdEREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTJCO0FBQ0g7QUFFMkI7QUFDZDtBQWVyQyxNQUFNLENBQUMsR0FBRywyQ0FBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUUzQixNQUFNLFlBQVksR0FBaUM7SUFDdEQsV0FBVyxFQUFFO1FBQ1QsSUFBSSxFQUFFLGFBQWE7UUFDbkIsQ0FBQyxFQUFFLENBQUMsQ0FBVyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDN0MsRUFBRSxFQUFFLENBQUMsQ0FBVyxFQUFFLEVBQUUsQ0FBQywyQ0FBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbkQsWUFBWSxFQUFFLGtFQUFnQjtRQUM5QixVQUFVLEVBQUUsOENBQWMsRUFBRTthQUN2QixNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFDckIsWUFBWTthQUNYLEtBQUssQ0FBQyxDQUFDLE9BQU8sRUFBRSxXQUFXLEVBQUUsS0FBSyxDQUFDLENBQUM7WUFDckMsWUFBWTthQUNYLFdBQVcsQ0FBQyxpREFBaUIsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDOUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQztRQUNoQixNQUFNLEVBQUUsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDO1FBQ2hCLFNBQVMsRUFBRSxFQUFFO1FBQ2IsSUFBSSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztLQUNmO0lBRUQsVUFBVSxFQUFFO1FBQ1IsSUFBSSxFQUFFLFlBQVk7UUFDbEIsWUFBWTtRQUNaLENBQUMsRUFBRSxDQUFDLENBQVcsRUFBRSxFQUFFLENBQUMseUNBQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ2hDLFlBQVk7UUFDWixFQUFFLEVBQUUsQ0FBQyxDQUFXLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDdEIsWUFBWSxFQUFFLG9EQUFTO1FBQ3ZCLE1BQU0sRUFBRSwyQ0FBUSxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3ZCLFVBQVUsRUFBRSwyQ0FBVyxFQUFFO2FBQ3BCLFFBQVEsQ0FBQyxHQUFHLENBQUM7YUFDYixNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7WUFDaEIsWUFBWTthQUNYLEtBQUssQ0FBQyxDQUFDLFdBQVcsRUFBRSxPQUFPLENBQUMsQ0FBQztZQUM5QixZQUFZO2FBQ1gsV0FBVyxDQUFDLGlEQUFpQixDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUM5QyxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDZixNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDZixTQUFTLEVBQUUsRUFBRTtRQUNiLElBQUksRUFBRSxDQUFDLEVBQVksRUFBRSxFQUFFLENBQUMseUNBQU0sQ0FBQyw0Q0FBUyxDQUFDLDJDQUFRLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0tBQ2hFO0NBQ0o7Ozs7Ozs7Ozs7Ozs7QUMzREQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTJCO0FBR29CO0FBRXhDLE1BQU0sZ0JBQWlCLFNBQVEsNERBQWE7SUFDL0MsV0FBVyxDQUFDLENBQVE7UUFDaEIsTUFBTSxFQUFFLEdBQUcsMkNBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFO1FBQy9CLE1BQU0sRUFBRSxHQUFHLDJDQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRTtRQUMvQixPQUFPLDJDQUFRLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDN0IsQ0FBQztJQUVELEVBQUUsQ0FBQyxDQUFRO1FBQ1AsTUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7UUFDMUIsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7UUFFOUIsTUFBTSxNQUFNLEdBQUcseUNBQU0sQ0FBQywyQ0FBUSxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzlDLE1BQU0sRUFBRSxHQUFVLDRDQUFTLENBQUMsQ0FBQyxFQUFFLE1BQU0sQ0FBQztRQUN0QyxPQUFPLEVBQUU7SUFDYixDQUFDO0lBRUQsb0NBQW9DO0lBQ3BDLE9BQU87UUFDSCxNQUFNLFlBQVksR0FBRyxJQUFJLHFCQUFxQixDQUFDLElBQUksQ0FBQyxFQUFFLENBQUM7UUFDdkQsT0FBTyxZQUFZO0lBQ3ZCLENBQUM7SUFFRCxzR0FBc0c7SUFDdEcsTUFBTTtRQUNGLE1BQU0sV0FBVyxHQUFHLElBQUksZ0JBQWdCLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQztRQUNqRCxPQUFPLFdBQVc7SUFDdEIsQ0FBQztDQUNKO0FBRU0sTUFBTSxxQkFBc0IsU0FBUSxnQkFBZ0I7SUFDdkQsV0FBVyxDQUFDLENBQVE7UUFDaEIsT0FBTyw4Q0FBVyxDQUFDLDJDQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ3JELENBQUM7Q0FDSjs7Ozs7Ozs7Ozs7OztBQ3ZDRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUF3QjtBQUNHO0FBR29CO0FBRS9DLHFFQUFxRTtBQUNyRSxNQUFNLG9CQUFvQixHQUFHLENBQUMsQ0FBQyxFQUFFO0lBQzdCLE9BQU8seUNBQU0sQ0FBQywyQ0FBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUNoRCxDQUFDO0FBQ0QsTUFBTSxpQkFBaUIsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLDJDQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ3pELE1BQU0sY0FBYyxHQUFtQyw4Q0FBYyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDO0FBQzdHLE1BQU0sV0FBVyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMseUNBQU0sQ0FBQyw0Q0FBUyxDQUFDLDJDQUFRLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBWS9ELFNBQVMsYUFBYSxDQUFDLENBQUM7SUFDcEIsTUFBTSxLQUFLLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUM7SUFDaEYsTUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUM7SUFDM0IsTUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUM7SUFDM0IsT0FBTywyQ0FBUSxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO0FBQzlDLENBQUM7QUFJRCxTQUFTLEtBQUssQ0FBQyxDQUFDO0lBQ1osTUFBTSxDQUFDLEdBQUcsYUFBYSxDQUFDLHlDQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN2QyxJQUFJLENBQUMsR0FBRyxhQUFhLENBQUMseUNBQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ3JDLE1BQU0sVUFBVSxHQUFHLHlDQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUMvQixNQUFNLE9BQU8sR0FBRyx5Q0FBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUseUNBQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDekMsSUFBSSxDQUFDLEdBQUcsMkNBQVEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDdEQsWUFBWTtJQUNaLE1BQU0sS0FBSyxHQUFHLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2xELENBQUMsR0FBRywyQ0FBUSxDQUFDLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEVBQUU7UUFDbkMsT0FBTyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ3BCLE9BQU8sQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDdkIsQ0FBQyxDQUFDO0lBQ04sQ0FBQyxDQUFDLENBQUM7SUFDSCxDQUFDLEdBQUcseUNBQU0sQ0FBQyxDQUFDLENBQUM7SUFDYixPQUFPLEVBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUM7QUFDcEIsQ0FBQztBQUVNLE1BQU0sU0FBVSxTQUFRLDREQUFhO0lBQTVDOztRQUNJLHNCQUFzQjtRQUN0QixPQUFFLEdBQW1CO1lBQ2pCLFlBQVk7WUFDWixDQUFDLEVBQUUsb0JBQW9CO1lBQ3ZCLFlBQVk7WUFDWixFQUFFLEVBQUUsaUJBQWlCO1lBQ3JCLE1BQU0sRUFBRSwyQ0FBUSxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3ZCLENBQUMsRUFBRSxDQUFDO1lBQ0osR0FBRyxFQUFFLEdBQUc7WUFDUixPQUFPLEVBQUUsY0FBYztZQUN2QixJQUFJLEVBQUUsV0FBVztTQUNwQjtJQWlDTCxDQUFDO0lBL0JHLEtBQUssQ0FBQyxDQUFRO1FBQ1YsT0FBTyw4Q0FBVyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO0lBQ3BELENBQUM7SUFFRCxFQUFFLENBQUMsQ0FBUTtRQUNQLE1BQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUN6QixNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUN6QixNQUFNLEVBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUMsR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDO1FBRTVCLE1BQU0sS0FBSyxHQUFHLDhDQUFXLENBQUMsQ0FBQyxFQUFFLDJDQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFekQsTUFBTSxDQUFDLEdBQUcsMkNBQVEsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMxRCxNQUFNLE1BQU0sR0FBRyx5Q0FBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDM0IsTUFBTSxPQUFPLEdBQUcseUNBQU0sQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDO1FBQzlCLFlBQVk7UUFDWixNQUFNLEdBQUcsR0FBRyx5Q0FBTSxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUM7UUFFbkMsT0FBTyxHQUFHO0lBQ2QsQ0FBQztJQUVELDREQUE0RDtJQUM1RCxPQUFPO1FBQ0gsTUFBTSxZQUFZLEdBQUcsSUFBSSxjQUFjLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQztRQUNoRCxPQUFPLFlBQVk7SUFDdkIsQ0FBQztJQUVELHNHQUFzRztJQUN0RyxNQUFNO1FBQ0YsTUFBTSxXQUFXLEdBQUcsSUFBSSxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQztRQUMxQyxPQUFPLFdBQVc7SUFDdEIsQ0FBQztDQUNKO0FBRU0sTUFBTSxjQUFlLFNBQVEsU0FBUztDQUM1Qzs7Ozs7Ozs7Ozs7OztBQ2xHRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBd0I7QUFDUTtBQUNoQyx5REFBeUQ7QUFDQTtBQUNiO0FBQ0M7QUFDQTtBQUNGO0FBQ0Y7QUFDRTtBQUNqQjtBQUNvQztBQUNYO0FBQ047QUFDQTtBQUVRO0FBQ0Y7QUFHbkQsTUFBTSxPQUFPLEdBQUcsMkNBQU8sQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDM0QsTUFBTSxHQUFHLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQztBQUN0QixNQUFNLEtBQUssR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDO0FBRXhCLFNBQVMsY0FBYztJQUNuQixNQUFNLElBQUksR0FBRyx5Q0FBUyxDQUFDLE9BQU8sQ0FBQztJQUMvQixNQUFNLElBQUksR0FBRztRQUNULFVBQVUsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQztRQUNqQyxHQUFHLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUM7UUFDMUIsS0FBSyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDO1FBQzlCLE9BQU8sRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQztRQUNqQyxTQUFTLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUM7UUFDckMsUUFBUSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDO0tBQ3RDO0lBQ0QsTUFBTSxZQUFZLEdBQUcsSUFBSSw0RUFBa0IsQ0FBVSxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7SUFFakUsTUFBTSxJQUFJLEdBQUc7UUFDVCxLQUFLLEVBQUUsc0VBQVcsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxZQUFZLEVBQUUsMkRBQVksQ0FBQyxVQUFVLENBQUM7S0FDM0Y7SUFFRCxNQUFNLFFBQVEsR0FBRztRQUNiLDBEQUEwRDtRQUMxRCxDQUFDLEVBQUUsQ0FBQztRQUNKLEdBQUcsRUFBRSxJQUFJO0tBQ1o7SUFFRCxNQUFNLE1BQU0sR0FBRztRQUNYLENBQUMsRUFBRSw4Q0FBYyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ2pELEdBQUcsRUFBRSw4Q0FBYyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztLQUN6RTtJQUVELG9EQUFvRDtJQUNwRCxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO0lBQ3hCLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUM7SUFDNUIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3BELElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUUxRCxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzlCLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUM7SUFFcEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFO1FBQ3JCLE1BQU0sRUFBRSxHQUFHLHlDQUFTLENBQUMsSUFBSSxDQUFDO1FBQzFCLE1BQU0sQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1FBQ2pELElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2hCLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7SUFDOUIsQ0FBQyxDQUFDO0lBRUYsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFO1FBQ3ZCLE1BQU0sRUFBRSxHQUFHLHlDQUFTLENBQUMsSUFBSSxDQUFDO1FBQzFCLE1BQU0sQ0FBQyxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztRQUNsRCxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDakIsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUNsQyxDQUFDLENBQUM7SUFFRixJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUU7UUFDdEIsTUFBTSxJQUFJLEdBQUcseUNBQVMsQ0FBQyxJQUFJLENBQUM7UUFDNUIsTUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUM7UUFDaEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO0lBQzVCLENBQUMsQ0FBQztBQUNOLENBQUM7QUFFRCxTQUFTLGdCQUFnQjtJQUNyQixNQUFNLEdBQUcsR0FBRyx5Q0FBUyxDQUFDLGNBQWMsQ0FBQztJQUNyQyxNQUFNLFlBQVksR0FBRyxJQUFJLDRFQUFrQixDQUFVLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNoRSxNQUFNLElBQUksR0FBRztRQUNULElBQUksRUFBRSxHQUFHLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQztLQUMvQjtJQUVELE1BQU0sSUFBSSxHQUFHO1FBQ1QsSUFBSSxFQUFFLElBQUksaUVBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLFlBQVksQ0FBQztLQUNuRDtBQUNMLENBQUM7QUFFRCxTQUFTLGtCQUFrQjtJQUN2QixNQUFNLEdBQUcsR0FBRyx5Q0FBUyxDQUFDLFdBQVcsQ0FBQztJQUNsQyxNQUFNLFlBQVksR0FBRyxJQUFJLDRFQUFrQixDQUFVLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUVoRSxNQUFNLElBQUksR0FBRztRQUNULFFBQVEsRUFBRSxHQUFHLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQztLQUNyQztJQUVELE1BQU0sSUFBSSxHQUFHO1FBQ1QsUUFBUSxFQUFFLElBQUksbUVBQWMsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLFlBQVksQ0FBQztLQUM1RDtJQUVELElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7QUFDekMsQ0FBQztBQUVELFNBQVMsZUFBZTtJQUNwQixNQUFNLElBQUksR0FBRyx5Q0FBUyxDQUFDLE9BQU8sQ0FBQztJQUMvQixNQUFNLElBQUksR0FBRztRQUNULFVBQVUsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQztRQUNqQyxHQUFHLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUM7UUFDMUIsS0FBSyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDO1FBQzlCLE9BQU8sRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQztRQUNqQyxTQUFTLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUM7UUFDckMsUUFBUSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDO1FBQ25DLFNBQVMsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLHVCQUF1QixDQUFDO0tBQ2xEO0lBQ0QsTUFBTSxZQUFZLEdBQUcsSUFBSSw0RUFBa0IsQ0FBVSxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7SUFFakUsTUFBTSxJQUFJLEdBQUc7UUFDVCxLQUFLLEVBQUUsc0VBQVcsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxZQUFZLEVBQUUsMkRBQVksQ0FBQyxXQUFXLENBQUM7UUFDekYsMkdBQTJHO1FBQzNHLFNBQVMsRUFBRSxJQUFJLHdEQUFTLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxZQUFZLENBQUM7S0FDekQ7SUFFRCxNQUFNLFFBQVEsR0FBRztRQUNiLDBEQUEwRDtRQUMxRCxDQUFDLEVBQUUsQ0FBQztRQUNKLEdBQUcsRUFBRSxJQUFJO0tBQ1o7SUFFRCxNQUFNLE1BQU0sR0FBRztRQUNYLENBQUMsRUFBRSw4Q0FBYyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ2pELEdBQUcsRUFBRSw4Q0FBYyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztLQUN6RTtJQUVELGtCQUFrQjtJQUNsQixNQUFNLE1BQU0sR0FBRywwREFBUSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBQ3ZELE1BQU0sR0FBRyxHQUFHLE1BQU07SUFDbEIsTUFBTSxPQUFPLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUM7SUFDbkMsTUFBTSxhQUFhLEdBQUcsdUNBQU8sRUFBRTtTQUMxQixDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQzdDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFFM0QsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJO1NBQzFCLE1BQU0sQ0FBQyxNQUFNLENBQUM7U0FDZCxPQUFPLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQztRQUMxQixpREFBaUQ7U0FDaEQsSUFBSSxDQUFDLEdBQUcsRUFBRSxhQUFhLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUUzRCxvREFBb0Q7SUFDcEQsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztJQUN4QixJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDO0lBQzVCLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNwRCxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUM7SUFFMUQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUM5QixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBRXBDLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRTtRQUNyQixNQUFNLEVBQUUsR0FBRyx5Q0FBUyxDQUFDLElBQUksQ0FBQztRQUMxQixNQUFNLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztRQUNqRCxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNoQixJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO0lBQzlCLENBQUMsQ0FBQztJQUVGLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRTtRQUN2QixNQUFNLEVBQUUsR0FBRyx5Q0FBUyxDQUFDLElBQUksQ0FBQztRQUMxQixNQUFNLENBQUMsR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7UUFDbEQsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ2pCLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7SUFDbEMsQ0FBQyxDQUFDO0lBRUYsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFO1FBQ3RCLE1BQU0sSUFBSSxHQUFHLHlDQUFTLENBQUMsSUFBSSxDQUFDO1FBQzVCLE1BQU0sQ0FBQyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDO1FBQ2hDLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztJQUM1QixDQUFDLENBQUM7SUFFRixzQkFBc0I7SUFDdEIsWUFBWSxDQUFDLElBQUksQ0FBQyxzRUFBVyxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFRLEVBQUUsRUFBRTtRQUN6RCxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7SUFDOUIsQ0FBQyxDQUFDO0FBQ04sQ0FBQztBQUVELFNBQVMsaUJBQWlCO0lBQ3RCLE1BQU0sSUFBSSxHQUFHLHlDQUFTLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDaEMsTUFBTSxJQUFJLEdBQUc7UUFDVCxLQUFLLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUM7UUFDNUIsVUFBVSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDO1FBQ3ZDLFdBQVcsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLGVBQWUsQ0FBQztRQUN6QyxpQkFBaUIsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLG1CQUFtQixDQUFDO0tBQ3REO0lBRUQsTUFBTSxZQUFZLEdBQUcsSUFBSSw0RUFBa0IsQ0FBVSxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDakUsTUFBTSxJQUFJLEdBQUc7UUFDVCxLQUFLLEVBQUUsSUFBSSwwREFBVSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsWUFBWSxFQUFFLEVBQUUsRUFBRSw2Q0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQzlELFVBQVUsRUFBRSxJQUFJLHdEQUFTLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxZQUFZLENBQUM7UUFDeEQsV0FBVyxFQUFFLElBQUksMERBQVUsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLFlBQVksQ0FBQztLQUM5RDtJQVNELGtDQUFrQztJQUNsQyxNQUFNLFVBQVUsR0FBRztRQUNmLE9BQU8sRUFBRSxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxDQUFDO1FBQzlCLElBQUksRUFBRSxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxDQUFDO1FBQzNCLEtBQUssRUFBRSxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxDQUFDO1FBQzVCLElBQUksRUFBRSxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDO1FBQ3hCLFFBQVEsRUFBRSxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDO0tBQy9CO0lBRUQsTUFBTSxRQUFRLEdBQWlCO1FBQzNCLFNBQVMsRUFBRSxTQUFTO1FBQ3BCLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDO1FBQ2YsVUFBVSxFQUFFLENBQUMsZUFBZSxFQUFFLGdCQUFnQixFQUFFLGVBQWUsQ0FBQztLQUNuRTtJQUNELFFBQVEsQ0FBQyxJQUFJLEdBQUcsVUFBVSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUM7SUFFOUMsTUFBTSxnQkFBZ0IsR0FBRywyREFBVSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUM7SUFFdkQsWUFBWTtJQUNaLE1BQU0sWUFBWSxHQUFHLHNDQUFNLENBQUMsUUFBUSxDQUFDLEVBQUUsRUFBRSxRQUFRLENBQUMsSUFBSSxFQUFFLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLElBQUksc0RBQVEsQ0FBQyxJQUFJLGlFQUFhLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxFQUFFLGdCQUFnQixDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFFbkwsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDO0lBRTdCLHVDQUF1QztJQUN2QyxZQUFZLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFO1FBQ2xDLElBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxFQUFFO1FBQzVCLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxFQUFFO0lBQ2pDLENBQUMsQ0FBQztJQUVGLDRDQUE0QztJQUM1QyxJQUFJLENBQUMsaUJBQWlCLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxRQUFRLENBQUMsU0FBUyxDQUFDO0lBQzVELElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLDJEQUFVLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBRXBELElBQUksY0FBYyxHQUFHLEVBQUU7SUFFdkIsaUJBQWlCO0lBQ2pCLE1BQU0sYUFBYSxHQUFHLENBQUMsS0FBaUIsRUFBRSxjQUFjLEdBQUcsRUFBRSxFQUFFLEVBQUU7UUFDN0QsTUFBTSxPQUFPLEdBQUcsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUM7UUFFL0MsTUFBTSxPQUFPLEdBQUc7WUFDWixJQUFJLEVBQUUsQ0FBQyxDQUFDLEVBQUU7Z0JBQ04sSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUM7Z0JBQzVELElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQztZQUN4RCxDQUFDO1NBQ0o7UUFFRCxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBRTVDLE1BQU0sZ0JBQWdCLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUNyQyxPQUFPLENBQUMsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDO1FBQy9CLENBQUMsQ0FBQztRQUNGLE9BQU8sZ0JBQWdCO0lBQzNCLENBQUM7SUFFRCw4Q0FBOEM7SUFDOUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUU7UUFDL0IsTUFBTSxJQUFJLEdBQUcseUNBQVMsQ0FBQyxJQUFJLENBQUM7UUFDNUIsTUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUM7UUFDaEMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxZQUFZLEVBQUU7UUFDL0IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLEVBQUU7UUFDOUIsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsMkRBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNuQyxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ2pELGNBQWMsR0FBRyxhQUFhLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxjQUFjLENBQUM7SUFDOUQsQ0FBQyxDQUFDO0lBQ0YsY0FBYyxHQUFHLGFBQWEsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLGNBQWMsQ0FBQztBQUM5RCxDQUFDO0FBRUQsU0FBUyxrQkFBa0I7SUFDdkIsTUFBTSxJQUFJLEdBQUcseUNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUVoQyxNQUFNLElBQUksR0FBRztRQUNULEtBQUssRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQztRQUM1QixXQUFXLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxlQUFlLENBQUM7UUFDekMsVUFBVSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDO1FBQ3ZDLEdBQUcsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQztRQUMxQixLQUFLLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUM7UUFDOUIsT0FBTyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDO1FBQ2pDLFNBQVMsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQztRQUNyQyxpQkFBaUIsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLG1CQUFtQixDQUFDO0tBQ3REO0lBRUQsTUFBTSxZQUFZLEdBQUcsSUFBSSw0RUFBa0IsQ0FBVSxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7SUFFakUsTUFBTSxJQUFJLEdBQUc7UUFDVCxLQUFLLEVBQUUsSUFBSSwwREFBVSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsWUFBWSxFQUFFLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxFQUFFLDZDQUFHLENBQUMsR0FBRyxFQUFFLENBQUM7UUFDOUUsV0FBVyxFQUFFLElBQUksMERBQVUsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLFlBQVksQ0FBQztRQUMzRCxVQUFVLEVBQUUsSUFBSSx3REFBUyxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsWUFBWSxDQUFDO0tBQzNEO0lBRUQsTUFBTSxRQUFRLEdBQUc7UUFDYiwwREFBMEQ7UUFDMUQsU0FBUyxFQUFFLFNBQVM7UUFDcEIsQ0FBQyxFQUFFLEdBQUc7UUFDTixHQUFHLEVBQUUsSUFBSTtLQUNaO0lBRUQsdUNBQXVDO0lBQ3ZDLFlBQVksQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUU7UUFDbEMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLEVBQUU7UUFDNUIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLEVBQUU7SUFDakMsQ0FBQyxDQUFDO0lBRUYsb0JBQW9CO0lBQ3BCLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxzREFBUSxDQUFDLElBQUksaUVBQWEsQ0FBQywyREFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsMkRBQVUsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLFFBQVEsQ0FBQyxDQUFDLEVBQUUsUUFBUSxDQUFDLEdBQUcsQ0FBQyxFQUFFLFdBQVcsQ0FBQyxDQUFDLENBQUM7SUFFaEkscURBQXFEO0lBQ3JELE1BQU0sUUFBUSxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDbEQsTUFBTSxNQUFNLEdBQUc7UUFDWCxDQUFDLEVBQUUsOENBQWMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNqRCxHQUFHLEVBQUUsMkNBQVcsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDO0tBQ2hFO0lBRUQsb0RBQW9EO0lBQ3BELElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLDJEQUFVLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ3BELElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFLFFBQVEsQ0FBQyxTQUFTLENBQUM7SUFFNUQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3BELElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUMxRCxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzlCLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUM7SUFFcEMsaUJBQWlCO0lBQ2pCLElBQUksY0FBYyxHQUFHLEVBQUU7SUFDdkIsTUFBTSxhQUFhLEdBQUcsQ0FBQyxLQUFpQixFQUFFLGNBQWMsR0FBRyxFQUFFLEVBQUUsRUFBRTtRQUM3RCxNQUFNLE9BQU8sR0FBRyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQztRQUUvQyxNQUFNLE9BQU8sR0FBRztZQUNaLElBQUksRUFBRSxDQUFDLENBQUMsRUFBRTtnQkFDTixJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQztnQkFDNUQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDO1lBQ3hELENBQUM7U0FDSjtRQUVELGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUM7UUFFNUMsTUFBTSxnQkFBZ0IsR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFO1lBQ3JDLE9BQU8sQ0FBQyxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUM7UUFDL0IsQ0FBQyxDQUFDO1FBRUYsT0FBTyxnQkFBZ0I7SUFDM0IsQ0FBQztJQUVELDJCQUEyQjtJQUMzQixJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUU7UUFDckIsTUFBTSxFQUFFLEdBQUcseUNBQVMsQ0FBQyxJQUFJLENBQUM7UUFDMUIsTUFBTSxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1FBQ2hELElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNmLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7SUFDOUIsQ0FBQyxDQUFDO0lBRUYsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFO1FBQ3ZCLE1BQU0sRUFBRSxHQUFHLHlDQUFTLENBQUMsSUFBSSxDQUFDO1FBQzFCLE1BQU0sQ0FBQyxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztRQUNsRCxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDakIsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUNsQyxDQUFDLENBQUM7SUFFRixJQUFJLENBQUMsaUJBQWlCLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRTtRQUMvQixNQUFNLElBQUksR0FBRyx5Q0FBUyxDQUFDLElBQUksQ0FBQztRQUM1QixNQUFNLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQztRQUNoQyxJQUFJLENBQUMsV0FBVyxDQUFDLFlBQVksRUFBRTtRQUMvQixJQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksRUFBRTtRQUM5QixJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQywyREFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ25DLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDakQsY0FBYyxHQUFHLGFBQWEsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLGNBQWMsQ0FBQztJQUM5RCxDQUFDLENBQUM7SUFDRixjQUFjLEdBQUcsYUFBYSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsY0FBYyxDQUFDO0FBQzlELENBQUM7QUFFRCxTQUFTLE9BQU87SUFDWixPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3BCLG1DQUFtQztJQUNuQywwQkFBMEI7SUFDMUIsNkJBQTZCO0lBRTdCLGlDQUFpQztJQUNqQyw2Q0FBNkM7SUFDN0Msa0NBQWtDO0lBRWxDLG1EQUFtRDtJQUNuRCw2QkFBNkI7SUFDN0IsMkJBQTJCO0lBQzNCLGtCQUFrQjtJQUVsQixlQUFlO0lBQ2YsNkJBQTZCO0lBRTdCLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUM7QUFDNUIsQ0FBQztBQUVNLFNBQVMsSUFBSTtJQUNoQixPQUFPLEVBQUU7SUFFVCxrQkFBa0IsRUFBRSxDQUFDO0lBQ3JCLGNBQWMsRUFBRSxDQUFDO0lBQ2pCLGVBQWUsRUFBRSxDQUFDO0lBQ2xCLHVCQUF1QjtJQUN2Qix3QkFBd0I7SUFDeEIsc0JBQXNCO0FBQzFCLENBQUM7Ozs7Ozs7Ozs7Ozs7QUN6WkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXdCO0FBR0c7QUFFcEIsU0FBUyxNQUFNLENBQUMsR0FBVyxFQUFFLEtBQWEsRUFBRSxNQUFjLEVBQUUsTUFBa0I7SUFFakYsSUFBSSxHQUFHLEdBQUcseUNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDO1NBQ2pDLElBQUksQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDO1NBQ3JCLElBQUksQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFDO1NBQ3RCLElBQUksQ0FBQyxTQUFTLEVBQUUsTUFBTSxHQUFHLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsR0FBRyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUM1RyxJQUFJLENBQUMscUJBQXFCLEVBQUUsZUFBZSxDQUFDO1NBQzVDLE1BQU0sQ0FBQyxHQUFHLENBQUM7U0FDWCxJQUFJLENBQUMsV0FBVyxFQUFFLFlBQVksR0FBRyxNQUFNLENBQUMsSUFBSSxHQUFHLEdBQUcsR0FBRyxNQUFNLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDO0lBRTVFLE9BQU8sR0FBRyxDQUFDO0FBQ2YsQ0FBQztBQUlEOzs7Ozs7O0dBT0c7QUFDSSxTQUFTLGdCQUFnQixDQUFDLEVBQVUsRUFBRSxFQUFVLEVBQUUsTUFBbUIsRUFBRSxNQUFtQixFQUFFLElBQXNDO0lBQ3JJLElBQUksTUFBTSxHQUFHLElBQUksS0FBSyxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUM7SUFFL0IsS0FBSyxJQUFJLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFO1FBQ2xDLEtBQUssSUFBSSxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUU7WUFDaEMsTUFBTSxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM5RCxNQUFNLElBQUksR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNsRSxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztTQUNoQztLQUNKO0lBRUQsT0FBTyxNQUFNO0FBQ2pCLENBQUM7QUFFTSxTQUFTLE9BQU8sQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUN4QixPQUFPLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDdkMsQ0FBQztBQUVNLFNBQVMsVUFBVSxDQUFDLENBQVEsRUFBRSxDQUFRLEVBQUUsQ0FBUTtJQUNuRCxPQUFPLG1EQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxHQUFFLE9BQU8sRUFBQyxDQUFDLEVBQUUsT0FBTyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsT0FBTyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsRUFBQyxHQUFDLENBQUM7QUFDN0UsQ0FBQztBQUVNLFNBQVMsTUFBTSxDQUFDLElBQUksRUFBRSxRQUFRO0lBQ2pDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNWLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFO1FBQ3BCLElBQUksQ0FBQyxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsRUFDckIsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQztRQUNsQixDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0tBQ3JCO0lBRUQsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNuRCxPQUFPLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLFFBQVEsQ0FBQztBQUNqRCxDQUFDO0FBRU0sU0FBUyxTQUFTLENBQUMsSUFBVyxFQUFFLFFBQWUsRUFBRSxDQUFRO0lBQzVELE9BQU8sbURBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUUsT0FBTyxFQUFDLENBQUMsRUFBRSxNQUFNLENBQUMsSUFBSSxFQUFFLFFBQVEsQ0FBQyxFQUFFLENBQUMsRUFBRSxPQUFPLENBQUMsSUFBSSxFQUFDLFFBQVEsQ0FBQyxFQUFDLEdBQUMsQ0FBQztBQUNoRyxDQUFDOzs7Ozs7Ozs7Ozs7O0FDOUREO0FBQUE7QUFBQTtBQUEyRTtBQVkzRTs7R0FFRztBQUNJLE1BQWUsT0FBdUIsU0FBUSxnRUFBOEI7SUFJL0Usb0VBQW9FO0lBQ3BFLE9BQU8sQ0FBQyxDQUFXO1FBQ2YsT0FBTyxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtJQUMzRCxDQUFDO0lBRUQsK0VBQStFO0lBQy9FLFFBQVEsQ0FBQyxDQUFXO1FBQ2hCLE9BQU8sRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtJQUN6RSxDQUFDO0NBT0o7Ozs7Ozs7Ozs7Ozs7QUNwQ0Q7QUFBQTtBQUFBO0FBQTJDO0FBSXBDLE1BQWUsZ0JBQWdDLFNBQVEsMERBQTJCO0lBRXJGLFlBQXNCLFFBQWUsRUFBRSxZQUFpQyxFQUFFLFVBQWMsRUFBRSxFQUFFLEVBQUUsR0FBQyxDQUFDO1FBQzVGLEtBQUssQ0FBQyxRQUFRLEVBQUUsWUFBWSxFQUFFLEVBQUUsQ0FBQztRQUNqQyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQztJQUMxQixDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSCxRQUFRLENBQUMsVUFBYyxFQUFFO1FBQ3JCLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDO1FBQzNCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDO0lBQ3pDLENBQUM7Q0FDSjs7Ozs7Ozs7Ozs7OztBQ3BCRDtBQUFBO0FBQUE7QUFBQTtBQUE2QztBQUViO0FBaUJ6QixNQUFlLGVBQStCLFNBQVEsMERBQTJCO0lBU3BGLFlBQXNCLFFBQWUsRUFBRSxZQUFpQyxFQUFFLFVBQWMsRUFBRSxFQUFFLEVBQUUsR0FBQyxDQUFDO1FBQzVGLEtBQUssQ0FBQyxRQUFRLEVBQUUsWUFBWSxFQUFFLEVBQUUsQ0FBQztRQVAzQixZQUFPLEdBQWU7WUFDNUIsTUFBTSxFQUFFLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRTtZQUNoRCxRQUFRLEVBQUUsR0FBRztZQUNiLFNBQVMsRUFBRSxHQUFHO1NBQ2pCO0lBSUQsQ0FBQztJQUVEOzs7Ozs7O09BT0c7SUFDTyxPQUFPLENBQUMsT0FBTyxHQUFHLEVBQUUsRUFBRSxhQUFhLEdBQUcsQ0FBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQztRQUNoRSxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQztRQUMzQixNQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQ3hCLEVBQUUsQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDLFFBQVEsR0FBRyxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDO1FBQzNELEVBQUUsQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDLFNBQVMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDO1FBRTdELElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDO2FBQy9CLElBQUksQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDO2FBQ3JCLElBQUksQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFDO2FBQ3RCLElBQUksQ0FBQyxTQUFTLEVBQUUsT0FBTyxFQUFFLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUMsS0FBSyxJQUFJLEVBQUUsQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQzthQUNySCxNQUFNLENBQUMsR0FBRyxDQUFDO2FBQ1gsSUFBSSxDQUFDLFdBQVcsRUFBRSw0Q0FBRyxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBRXBFLHFFQUFxRTtRQUNyRSxJQUFJLENBQUMsSUFBSSxHQUFHLDRDQUFHLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQywrQ0FBK0M7UUFDcEYsSUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUM7UUFDakIsSUFBSSxhQUFhLEVBQUU7WUFDZixvQ0FBb0M7WUFDcEMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRTtnQkFDMUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyw0Q0FBRyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO1lBQ3JELENBQUMsQ0FBQyxDQUFDO1NBQ047UUFFRCxJQUFJLENBQUMsSUFBSSxFQUFFO0lBQ2YsQ0FBQztDQUNKOzs7Ozs7Ozs7Ozs7O0FDakVEO0FBQUE7QUFBQTtBQUFBO0FBQTBCO0FBSTFCOzs7R0FHRztBQUVJLE1BQU0sR0FBRztJQUVaLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBUSxFQUFFLENBQVE7UUFDL0IsT0FBTyxhQUFhLENBQUMsSUFBSSxDQUFDLEdBQUc7SUFDakMsQ0FBQztJQUVELE1BQU0sQ0FBQyxNQUFNLENBQUMsR0FBVSxFQUFFLElBQTBCO1FBQ2hELElBQUksSUFBSSxJQUFJLElBQUk7WUFDWixPQUFPLFVBQVUsR0FBRyxHQUFHO1FBRTNCLE9BQU8sVUFBVSxHQUFHLElBQUksSUFBSSxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxHQUFHO0lBQy9DLENBQUM7SUFFRCxNQUFNLENBQUMsSUFBSSxDQUFDLElBQVcsRUFBRSxJQUFJLEdBQUMsQ0FBQztRQUMzQixPQUFPLFFBQVEsSUFBSSxLQUFLLElBQUksR0FBRztJQUNuQyxDQUFDO0lBRUQsTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFVO1FBQ25CLE9BQU8sU0FBUyxHQUFHLEdBQUc7SUFDMUIsQ0FBQztJQUVELE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBVTtRQUNuQixPQUFPLFNBQVMsR0FBRyxHQUFHO0lBQzFCLENBQUM7SUFFRCxNQUFNLENBQUMsS0FBSyxDQUFDLENBQVEsRUFBRSxDQUFTO1FBQzVCLE1BQU0sTUFBTSxHQUFHLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRWpDLE9BQU8sU0FBUyxDQUFDLEtBQUssTUFBTSxHQUFHO0lBQ25DLENBQUM7SUFFRCxNQUFNLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxPQUFPLEVBQUUsR0FBRyxHQUFHLEVBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFDO1FBQzVDLE9BQU8sTUFBTSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUM7YUFDcEIsSUFBSSxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUM7YUFDdEIsSUFBSSxDQUFDLFdBQVcsRUFBRSxHQUFHLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3ZELENBQUM7SUFFRCxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQVksRUFBRSxLQUFZLEVBQUUsTUFBYSxFQUFFLE1BQWlCO1FBRXRFLElBQUksR0FBRyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDO2FBQ3pCLElBQUksQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDO2FBQ3JCLElBQUksQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFDO2FBQ3RCLElBQUksQ0FBQyxTQUFTLEVBQUUsTUFBTSxHQUFHLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsR0FBRyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQzthQUM1RyxJQUFJLENBQUMscUJBQXFCLEVBQUUsZUFBZSxDQUFDO2FBQ2hELE1BQU0sQ0FBQyxHQUFHLENBQUM7YUFDUCxJQUFJLENBQUMsV0FBVyxFQUFFLEdBQUcsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUUvRCxPQUFPLEdBQUcsQ0FBQztJQUNmLENBQUM7SUFFRCxNQUFNLENBQUMsU0FBUyxDQUFDLE1BQVk7UUFDekIsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUM7YUFDaEIsTUFBTSxDQUFDLFFBQVEsQ0FBQzthQUNoQixJQUFJLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQzthQUNuQixJQUFJLENBQUMsYUFBYSxFQUFFLGFBQWEsQ0FBQzthQUNsQyxJQUFJLENBQUMsYUFBYSxFQUFFLEdBQUcsQ0FBQzthQUN4QixJQUFJLENBQUMsY0FBYyxFQUFFLEdBQUcsQ0FBQzthQUN6QixJQUFJLENBQUMsU0FBUyxFQUFFLFdBQVcsQ0FBQzthQUM1QixJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQzthQUNmLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO2FBQ2YsSUFBSSxDQUFDLFFBQVEsRUFBRSxNQUFNLENBQUM7YUFDdEIsTUFBTSxDQUFDLE1BQU0sQ0FBQzthQUNkLElBQUksQ0FBQyxHQUFHLEVBQUUsNEJBQTRCLENBQUM7UUFDeEMsdUJBQXVCO0lBQy9CLENBQUM7SUFFRCxNQUFNLENBQUMsV0FBVyxDQUFDLE1BQVksRUFBRSxFQUFTLEVBQUUsRUFBUyxFQUFFLEVBQVMsRUFBRSxFQUFTLEVBQUUsS0FBWSxFQUFFLEtBQVk7UUFDbkcsT0FBTyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQzthQUN0QixJQUFJLENBQUMsSUFBSSxFQUFDLEVBQUUsQ0FBQzthQUNiLElBQUksQ0FBQyxJQUFJLEVBQUMsRUFBRSxDQUFDO2FBQ2IsSUFBSSxDQUFDLElBQUksRUFBQyxFQUFFLENBQUM7YUFDYixJQUFJLENBQUMsSUFBSSxFQUFDLEVBQUUsQ0FBQzthQUNiLElBQUksQ0FBQyxRQUFRLEVBQUMsS0FBSyxDQUFDO2FBQ3BCLElBQUksQ0FBQyxjQUFjLEVBQUMsS0FBSyxDQUFDO2FBQzFCLElBQUksQ0FBQyxZQUFZLEVBQUMsYUFBYSxDQUFDLENBQUM7SUFDM0MsQ0FBQztJQUVELE1BQU0sQ0FBQyxRQUFRLENBQUMsRUFBVSxFQUFFLEVBQVUsRUFBRSxNQUFnQixFQUFFLE1BQWdCO1FBQ3RFLE1BQU0sS0FBSyxHQUFHLENBQUMsSUFBYSxFQUFFLEtBQUssRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFOUYsTUFBTSxRQUFRLEdBQUcsQ0FBQyxLQUFjLEVBQUUsS0FBYyxFQUFFLEVBQUU7WUFDaEQsTUFBTSxHQUFHLEdBQUcsRUFBRTtZQUNkLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUU7Z0JBQ2QsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRTtvQkFDZCxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFDLENBQUM7Z0JBQzFCLENBQUMsQ0FBQztZQUNOLENBQUMsQ0FBQztZQUNGLE9BQU8sR0FBRztRQUNkLENBQUM7UUFFRCxNQUFNLEtBQUssR0FBRyxLQUFLLENBQUMsMkNBQU8sQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsTUFBTSxDQUFDO1FBQ3BFLE1BQU0sS0FBSyxHQUFHLEtBQUssQ0FBQywyQ0FBTyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxNQUFNLENBQUM7UUFDcEUsT0FBTyxRQUFRLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQztJQUNqQyxDQUFDO0NBRUo7QUFFTSxNQUFNLGVBQWU7SUFJeEIsWUFBWSxXQUFXLEVBQUUsT0FBTyxHQUFHLEVBQUU7UUFDakMsSUFBSSxDQUFDLGNBQWMsR0FBRyxXQUFXLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQzthQUMzQyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQzthQUNaLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUM7YUFDZCxJQUFJLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQztJQUUvQixDQUFDO0lBRUQsVUFBVSxDQUFDLElBQUksRUFBRSxLQUFLLEdBQUcsSUFBSTtRQUN6QixJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDekMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDL0IsTUFBTSxFQUFFLEdBQXFCLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxFQUFHLENBQUMscUJBQXFCLEVBQUUsQ0FBQztRQUNqRixJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUU3QixPQUFPLEVBQUUsQ0FBQztJQUNkLENBQUM7Q0FDSjs7Ozs7Ozs7Ozs7OztBQy9IRDtBQUFBO0FBQUE7OztHQUdHO0FBQ0ksTUFBTSxrQkFBa0I7SUFLM0IsWUFBWSxPQUFnQjtRQUN4QixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztRQUN2QixJQUFJLENBQUMsY0FBYyxHQUFHLEVBQUU7SUFDNUIsQ0FBQztJQUVELElBQUksQ0FBQyxVQUFrQixFQUFFLGFBQXVCO1FBQzVDLEtBQUssTUFBTSxTQUFTLElBQUksVUFBVSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUMzQyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxFQUFDLFNBQVMsRUFBRSxhQUFhLEVBQUMsQ0FBQyxDQUFDO1lBQ3JELE1BQU0saUJBQWlCLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQztZQUMxRCxJQUFJLENBQUMsT0FBTyxDQUFDLGdCQUFnQixDQUFDLFNBQVMsRUFBRSxpQkFBaUIsRUFBRSxLQUFLLENBQUMsQ0FBQztTQUN0RTtJQUNMLENBQUM7SUFFRCxZQUFZO1FBQ1IsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDO0lBQy9CLENBQUM7SUFFRCxPQUFPLENBQUMsU0FBaUIsRUFBRSxNQUFjO1FBQ3JDLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLElBQUksV0FBVyxDQUFDLFNBQVMsRUFBRSxFQUFDLE1BQU0sRUFBQyxDQUFDLENBQUMsQ0FBQztJQUNyRSxDQUFDO0NBQ0o7Ozs7Ozs7Ozs7Ozs7QUM3QkQ7QUFBQTtBQUFBLElBQUkscUJBQXFCLEdBQUcsQ0FBQyxDQUFDO0FBQzlCLElBQUkseUJBQXlCLEdBQUcsQ0FBQyxDQUFDO0FBRTNCLE1BQU0sR0FBRztJQUNaLE1BQU0sQ0FBQyxHQUFHO1FBQ04scUJBQXFCLElBQUksQ0FBQyxDQUFDO1FBQzNCLE9BQU8scUJBQXFCO0lBQ2hDLENBQUM7SUFDRCxNQUFNLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBQyxFQUFFO1FBQ3RCLHlCQUF5QixJQUFJLENBQUMsQ0FBQztRQUUvQixPQUFPLE1BQU0sR0FBRyx5QkFBeUIsQ0FBQztJQUM5QyxDQUFDO0NBQ0o7Ozs7Ozs7Ozs7Ozs7QUNSRDtBQUFBO0FBQUE7QUFBMEQ7QUFFMUQ7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQWtCRztBQUVJLE1BQWUsWUFBWTtJQTBCOUI7OztPQUdHO0lBQ0gsWUFBc0IsUUFBZSxFQUFFLFlBQWlDLEVBQUUsRUFBRSxHQUFHLENBQUM7UUFDNUUsSUFBSSxDQUFDLE1BQU0sR0FBRyxRQUFRLENBQUM7UUFDdkIsSUFBSSxDQUFDLFlBQVksR0FBRyxZQUFZLElBQUksSUFBSSxzRUFBa0IsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7UUFDL0UsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUM7SUFDakIsQ0FBQztJQWpDRDs7T0FFRztJQUNILFdBQVcsQ0FBQyxFQUFVLElBQUksQ0FBQztJQUUzQjs7O09BR0c7SUFFSCxJQUFjLFFBQVE7UUFDbEIsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLE1BQU0sSUFBSSxDQUFDLEVBQUUsRUFBRTtJQUN6QyxDQUFDO0lBa0NEOzs7O09BSUc7SUFDSCxhQUFhLENBQUMsT0FBVztRQUNyQixNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDcEUsQ0FBQztJQUVELE9BQU87UUFDSCxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ3ZCLENBQUM7Q0FDSjs7Ozs7Ozs7Ozs7OztBQ3RGRDtBQUFBO0FBQUE7QUFBQTtBQUF3QjtBQUdqQixNQUFNLFFBQVEsR0FBRyxDQUFDLEtBQUssRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLEVBQUU7SUFDdEMsTUFBTSxLQUFLLEdBQUcsQ0FBQyxHQUFHLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3JDLE9BQU8sd0NBQVEsQ0FBQyxLQUFLLEVBQUUsR0FBRyxHQUFHLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUMxRCxDQUFDO0FBRUQ7O0dBRUc7QUFDSSxNQUFNLFFBQVEsR0FBRyxDQUFDLEtBQUssRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsR0FBQyxDQUFDLEVBQUUsRUFBRTtJQUM3QyxNQUFNLEtBQUssR0FBRywyQ0FBVyxFQUFFLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsQ0FBQztJQUNsRixPQUFPLFFBQVEsQ0FBQyxLQUFLLEVBQUMsR0FBRyxFQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNuRCxDQUFDO0FBS0QsNENBQVksQ0FBQyxTQUFTLENBQUMsS0FBSyxHQUFHO0lBQzNCLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDN0IsT0FBTyxJQUFJLENBQUM7QUFDaEIsQ0FBQztBQUVELDRDQUFZLENBQUMsU0FBUyxDQUFDLFdBQVcsR0FBRyxVQUFVLFNBQVM7SUFDcEQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7SUFDbEQsT0FBTyxJQUFJLENBQUM7QUFDaEIsQ0FBQztBQUVELDRDQUFZLENBQUMsU0FBUyxDQUFDLElBQUksR0FBRztJQUMxQixJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsRUFBRSxTQUFTLENBQUMsQ0FBQztJQUNqQyxPQUFPLElBQUksQ0FBQztBQUNoQixDQUFDO0FBRUQsNENBQVksQ0FBQyxTQUFTLENBQUMsSUFBSSxHQUFHO0lBQzFCLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQzlCLE9BQU8sSUFBSSxDQUFDO0FBQ2hCLENBQUM7QUFFRCw0Q0FBWSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUc7SUFDNUIsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsSUFBSSxNQUFNLENBQUM7SUFDL0MsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsRUFBRSxRQUFRLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDaEUsQ0FBQztBQUVELDRDQUFZLENBQUMsU0FBUyxDQUFDLEtBQUssR0FBRyxVQUFVLE9BQU87SUFDNUMsSUFBSSxRQUFRLEdBQUcsRUFBRSxDQUFDO0lBRWxCLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDTixJQUFJLE9BQU8sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzlDLElBQUksQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDeEQsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUMzQixDQUFDLENBQUMsQ0FBQztJQUVILE9BQU8sNENBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUNsQyxDQUFDO0FBRUQsNENBQVksQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLFVBQVUsT0FBTztJQUM3QyxJQUFJLFFBQVEsR0FBRyxFQUFFLENBQUM7SUFFbEIsSUFBSSxDQUFDLElBQUksQ0FBQztRQUNOLElBQUksT0FBTyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDOUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzVDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDM0IsQ0FBQyxDQUFDLENBQUM7SUFFSCxPQUFPLDRDQUFZLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDbEMsQ0FBQzs7Ozs7Ozs7Ozs7OztBQzlERDtBQUFBO0FBQUE7QUFBK0M7QUFReEMsTUFBTSxRQUFRO0lBTWpCLFlBQVksT0FBc0IsRUFBRSxTQUFpQixFQUFFLENBQUMsR0FBRyxDQUFDO1FBQ3hELElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTztRQUN0QixJQUFJLENBQUMsRUFBRSxHQUFHLENBQUM7UUFDWCxJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVM7UUFDMUIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLDRDQUFPLEVBQUU7SUFDL0IsQ0FBQztJQUVELElBQUksQ0FBQztRQUNELE9BQU8sSUFBSSxDQUFDLEVBQUU7SUFDbEIsQ0FBQztJQUVELElBQUksQ0FBQyxDQUFDLENBQVM7UUFDWCxJQUFJLENBQUMsRUFBRSxHQUFHLENBQUM7SUFDZixDQUFDO0lBRUQsS0FBSztRQUNELE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQztJQUNyQyxDQUFDO0lBRUQsSUFBSTtRQUNBLE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLEVBQUU7UUFDMUIsT0FBTyxJQUFJLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ25FLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsS0FBSyxDQUFDLFNBQW1CLElBQUk7UUFDekIsSUFBSSxNQUFNLElBQUksSUFBSTtZQUFFLElBQUksQ0FBQyxDQUFDLEdBQUcsTUFBTTs7WUFDOUIsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxFQUFFO1FBRTFCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDO1lBQ2IsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTO1lBQ3pCLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztZQUNULElBQUksRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1NBQ2xDLENBQUM7UUFDRixPQUFPLElBQUk7SUFDZixDQUFDO0lBRUQsS0FBSyxDQUFDLENBQXdCO1FBQzFCLE9BQU87WUFDSCxDQUFDLEVBQUUsSUFBSSxDQUFDLEVBQUU7WUFDVixDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUM7U0FDaEI7SUFDTCxDQUFDO0lBSUQsQ0FBQyxDQUFDLEdBQUk7UUFDRixJQUFJLEdBQUcsSUFBSSxJQUFJO1lBQUUsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDdEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsR0FBRztRQUNwQixPQUFPLElBQUk7SUFDZixDQUFDO0lBSUQsR0FBRyxDQUFDLEdBQUk7UUFDSixJQUFJLEdBQUcsSUFBSSxJQUFJO1lBQUUsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUc7UUFDeEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEdBQUcsR0FBRztRQUN0QixPQUFPLElBQUk7SUFDZixDQUFDO0NBQ0o7Ozs7Ozs7Ozs7Ozs7QUNqRkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXdCO0FBQ3FCO0FBQ25CO0FBRTJDO0FBRWhDO0FBQ0s7QUFDQztBQUNJO0FBQ1Y7QUFDNEM7QUFzQ2pGLElBQUksT0FBTyxHQUFHLENBQUMsQ0FBQztBQUNoQiwySEFBMkg7QUFDM0gsMkNBQTJDO0FBQzNDLDBEQUEwRDtBQUMxRCxzSUFBc0k7QUFDdEksNk1BQTZNO0FBQzdNLDJFQUEyRTtBQUMzRSxnRUFBZ0U7QUFFaEUsaURBQWlEO0FBRTFDLE1BQU0sVUFBVyxTQUFRLHFFQUFrQjtJQW1COUMsWUFBWSxRQUFlLEVBQUUsWUFBaUMsRUFBRSxPQUFPLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxDQUFDO1FBQ2hGLEtBQUssQ0FBQyxRQUFRLEVBQUUsWUFBWSxFQUFFLE9BQU8sRUFBRSxFQUFFLENBQUM7UUFuQjlDLFlBQU8sR0FBRyxpQkFBaUI7UUFLM0IsWUFBTyxHQUFpQjtZQUNwQixRQUFRLEVBQUUsR0FBRztZQUNiLFNBQVMsRUFBRSxHQUFHO1lBQ2QsTUFBTSxFQUFFLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRTtZQUNuRCxHQUFHLEVBQUUsRUFBRTtZQUNQLE9BQU8sRUFBRSxHQUFHO1lBQ1osU0FBUyxFQUFFLDBEQUFVLENBQUMsSUFBSTtTQUM3QjtRQUVELFdBQU0sR0FBZ0IsRUFBRTtRQUV4QixTQUFJLEdBQWMsRUFBRTtRQUloQixJQUFJLENBQUMsTUFBTSxHQUFHLGFBQWEsSUFBSSxDQUFDLEVBQUUsRUFBRTtRQUNwQyxLQUFLLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzlCLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDO1FBRXJDLE1BQU0sQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUztRQUVoQyw0QkFBNEI7UUFDNUIsTUFBTSxJQUFJLEdBQUc7WUFDVCxJQUFJLGtEQUFRLENBQUMsSUFBSSw0REFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsR0FBRyxDQUFDLEVBQUUsZUFBZSxFQUFFLENBQUMsQ0FBQztTQUN6RTtRQUVELElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQ2YsSUFBSSxDQUFDLFNBQVMsRUFBRTtJQUNwQixDQUFDO0lBSUQsU0FBUyxDQUFDLEdBQUk7UUFDVixJQUFJLEdBQUcsSUFBSSxJQUFJO1lBQUUsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVM7UUFDOUMsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLE9BQU87UUFDdkIsRUFBRSxDQUFDLFNBQVMsR0FBRyxHQUFHO1FBRWxCLDJCQUEyQjtRQUMzQixJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQztRQUNyQixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDO1FBRWhDLGNBQWM7UUFDZCxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFO1lBQ3BCLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDO1lBQ25CLENBQUMsQ0FBQyxPQUFPLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxFQUFFO1FBQ3pCLENBQUMsQ0FBQztRQUVGLElBQUksQ0FBQyxVQUFVLEVBQUU7UUFDakIsSUFBSSxDQUFDLFNBQVMsRUFBRTtRQUVoQixPQUFPLElBQUk7SUFDZixDQUFDO0lBRUQsbUNBQW1DO0lBQ25DLElBQUksUUFBUTtRQUNSLElBQUk7WUFDQSxPQUFPLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7U0FDeEI7UUFDRCxPQUFPLEdBQUcsRUFBRTtZQUNSLE9BQU8sQ0FBQyxHQUFHLENBQUMsK0NBQStDLENBQUMsQ0FBQztZQUM3RCxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ3BCO0lBQ0wsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxPQUFPLENBQUMsQ0FBVztRQUNmLE9BQU8sRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtJQUMzRSxDQUFDO0lBRUQsK0VBQStFO0lBQy9FLFFBQVEsQ0FBQyxDQUFXO1FBQ2hCLE9BQU8sRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO0lBQ3pGLENBQUM7SUFFRCw4QkFBOEI7SUFDOUIsT0FBTyxDQUFDLENBQVM7UUFDYixNQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsT0FBTztRQUN2QixPQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUU7SUFDNUMsQ0FBQztJQUVELG1FQUFtRTtJQUNuRSxRQUFRLENBQUMsQ0FBVztRQUNoQixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxtRUFBVyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztJQUNyRSxDQUFDO0lBRUQsMkJBQTJCO0lBQzNCLFFBQVEsQ0FBQyxDQUFXO1FBQ2hCLE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQztRQUVsQixNQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLEdBQUcsR0FBRyxJQUFJO1FBQ2xDLE1BQU0sTUFBTSxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO1FBRW5DLE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1FBQzdCLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQzthQUN2QyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUNaLElBQUksQ0FBQyxRQUFRLENBQUM7YUFDZCxPQUFPLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQzthQUMxQixPQUFPLENBQUMsQ0FBQyxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUM7YUFDMUIsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDcEIsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDcEIsSUFBSSxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUM7SUFDekIsQ0FBQztJQUVELFVBQVU7UUFDTixJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUMsTUFBTSxFQUFFO1FBQzFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUM7UUFDM0IsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDO0lBQ3BELENBQUM7SUFFRCxrQkFBa0IsQ0FBQyxFQUFZO1FBQzNCLE1BQU0sSUFBSSxHQUFHLElBQUksRUFBRSxFQUFFLEdBQUcsSUFBSSxDQUFDLE9BQU8sRUFBRSxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztRQUU3RSxNQUFNLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUN4QixJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDO2lCQUN4QixLQUFLLENBQUMsRUFBRSxDQUFDO2lCQUNULElBQUksQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDO2lCQUNyQixJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFO2dCQUNYLE9BQU8sSUFBSSxDQUFDLENBQUMsQ0FBQztZQUNsQixDQUFDLENBQUM7UUFDVixDQUFDLENBQUM7UUFFRixJQUFJLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUM7YUFDckMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDVCxJQUFJLENBQUMsTUFBTSxDQUFDO2FBQ1osT0FBTyxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUM7YUFDekIsSUFBSSxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDO2FBQ3ZCLElBQUksQ0FBQyxRQUFRLEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQzthQUN6QixJQUFJLENBQUMsY0FBYyxFQUFFLEdBQUcsQ0FBQztJQUNsQyxDQUFDO0lBRUQsbUJBQW1CLENBQUMsRUFBWTtRQUM1QixNQUFNLElBQUksR0FBRyxJQUFJLEVBQUUsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLEVBQUUsRUFBRSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7UUFFN0UsTUFBTSxNQUFNLEdBQUcsRUFBRSxDQUFDLEtBQUssR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLHNDQUFNLENBQUMsRUFBRSxDQUFDLEdBQUcsc0NBQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFDLDJCQUEyQjtRQUVqRyxNQUFNLFdBQVcsR0FBRyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTztRQUUxQyxhQUFhO1FBQ2IsTUFBTSxJQUFJLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFFNUIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUVqQyxNQUFNLFVBQVUsR0FBRyxrREFBa0IsQ0FBQyxvREFBb0IsQ0FBQztRQUUzRCwyQkFBMkI7UUFDM0IsTUFBTSxVQUFVLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUVqRixNQUFNLFlBQVksR0FBRywyQ0FBTyxDQUFDLENBQUMsR0FBVSxFQUFFLEdBQVUsRUFBRSxHQUFZLEVBQUUsRUFBRTtZQUNsRSxNQUFNLE9BQU8sR0FBRywyQ0FBTyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7WUFDakMsTUFBTSxVQUFVLEdBQUcseUNBQUssQ0FBQyxPQUFPLEVBQUUsR0FBRyxDQUFDO1lBQ3RDLE9BQU8sR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyx1Q0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQzVDLHNEQUFzRDtRQUMxRCxDQUFDLENBQUM7UUFFRix1Q0FBdUM7UUFDdkMsNkZBQTZGO1FBQzdGLE1BQU0sSUFBSSxHQUFHLHNDQUFNLENBQUMsRUFBRSxFQUFFLFVBQVUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxHQUFFLE9BQU8sRUFBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLFNBQVMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsR0FBQyxDQUFDO1FBQ2pGLGdEQUFnRDtRQUNoRCxtQ0FBbUM7UUFHbkMsWUFBWTtRQUNaLE1BQU0sTUFBTSxHQUFHLDhDQUFjLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsQ0FBQyxDQUFDO1FBRTNGLElBQUksQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQzthQUNyQyxJQUFJLENBQUMsSUFBSSxDQUFDO2FBQ1YsSUFBSSxDQUFDLE1BQU0sQ0FBQzthQUNaLE9BQU8sQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDO2FBQ3pCLElBQUksQ0FBQyxRQUFRLEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQzthQUN6QixJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQzthQUM1QyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUMxQyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQzthQUNaLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLEVBQUU7WUFDZCxPQUFPLE1BQU0sQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO1FBQzlCLENBQUMsQ0FBQztRQUVOLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxRQUFRLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQztJQUM1RCxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILFNBQVM7UUFDTCxNQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsT0FBTztRQUN2QixNQUFNLEVBQUUsR0FBRywwREFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQztRQUN6RSxNQUFNLElBQUksR0FBRyxJQUFJLEVBQUUsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7UUFFMUQsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksSUFBSSxFQUFFO1lBQ3JCLElBQUksSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLE1BQU0sR0FBRyxDQUFDO2dCQUFFLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxFQUFFLENBQUM7O2dCQUNsRCxJQUFJLENBQUMsbUJBQW1CLENBQUMsRUFBRSxDQUFDO1NBQ3BDO0lBQ0wsQ0FBQztJQUVELFlBQVksQ0FBQyxFQUFnQjtRQUN6QixNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTTtRQUUxQixNQUFNLFVBQVUsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUMxQixNQUFNLFVBQVUsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7UUFFekIsTUFBTSxRQUFRLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQztRQUM5QixNQUFNLFFBQVEsR0FBRyxDQUFDLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO1FBRS9CLE1BQU0sQ0FBQyxTQUFTLEdBQUc7WUFDZixDQUFDLEVBQUUsOENBQWMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUM7WUFDakUsQ0FBQyxFQUFFLDhDQUFjLEVBQUUsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDO1NBQ3BFO1FBQ0QsTUFBTSxDQUFDLE9BQU8sR0FBRztZQUNiLENBQUMsRUFBRSw4Q0FBYyxFQUFFLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUM7WUFDdEQsQ0FBQyxFQUFFLDhDQUFjLEVBQUUsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQztTQUN6RDtRQUNELE1BQU0sQ0FBQyxPQUFPLEdBQUc7WUFDYixDQUFDLEVBQUUsOENBQWMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUM7WUFDL0QsQ0FBQyxFQUFFLDhDQUFjLEVBQUUsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDO1NBQ2xFO1FBRUQsTUFBTSxDQUFDLFNBQVMsR0FBRyw4Q0FBYyxFQUFFLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBRTdFLE1BQU0sQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDO0lBQzlDLENBQUM7SUFFRCxVQUFVLENBQUMsTUFBbUIsRUFBRSxFQUFnQjtRQUM1QyxNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSTtRQUN0QixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyw2Q0FBYSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUN6RixDQUFDO0lBRUQsSUFBSTtRQUNBLE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQztRQUNsQixNQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQ3hCLE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDM0IsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztRQUV2QixJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQztRQUVyQixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQzthQUM3QixJQUFJLENBQUMsT0FBTyxFQUFFLGNBQWMsQ0FBQzthQUM3QixJQUFJLENBQUMsV0FBVyxFQUFFLGlEQUFHLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUM7UUFFbkQsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUM7YUFDakMsSUFBSSxDQUFDLGtCQUFrQixDQUFDO2FBQ3hCLElBQUksQ0FBQyxPQUFPLEVBQUUsUUFBUSxDQUFDO2FBQ3ZCLElBQUksQ0FBQyxXQUFXLEVBQUUsaURBQUcsQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLEtBQUssR0FBRyxDQUFDLEVBQUUsRUFBRSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUM7UUFFdkUsZ0JBQWdCO1FBQ2hCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDO1FBRTVELElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDO2FBQ3pDLElBQUksQ0FBQyxPQUFPLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQzthQUN2QixJQUFJLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxNQUFNLENBQUM7YUFDekIsSUFBSSxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUM7UUFFMUIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsSUFBSTtZQUNyQixTQUFTLENBQUMsbUJBQW1CLENBQUM7WUFDOUIsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDUixJQUFJLENBQUMsTUFBTSxDQUFDO2FBQ1osSUFBSSxDQUFDLElBQUksRUFBRSxrQkFBa0IsQ0FBQzthQUM5QixJQUFJLENBQUMsUUFBUSxFQUFFLE9BQU8sQ0FBQzthQUN2QixJQUFJLENBQUMsY0FBYyxFQUFFLEtBQUssQ0FBQztRQUVoQyxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLGtCQUFrQixDQUFDO2FBQ3hELElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ1QsSUFBSSxDQUFDLEdBQUcsQ0FBQzthQUNULElBQUksQ0FBQyxJQUFJLEVBQUUsaUJBQWlCLENBQUM7UUFFbEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDO2FBQ3JDLElBQUksQ0FBQyxJQUFJLEVBQUUsVUFBVSxDQUFDO2FBQ3RCLE9BQU8sQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDO2FBQ3RCLE1BQU0sQ0FBQyxNQUFNLENBQUM7YUFDZCxJQUFJLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxNQUFNLENBQUM7YUFDekIsSUFBSSxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDO1FBRTVCLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQztRQUUzQixNQUFNLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQztRQUUxQyxJQUFJLENBQUMsU0FBUyxFQUFFO0lBQ3BCLENBQUM7SUFFRCxRQUFRLENBQUMsU0FBb0I7UUFDekIsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU07UUFDMUIsTUFBTSxRQUFRLEdBQUcsdUNBQU8sRUFBVTthQUM3QixDQUFDLENBQUMsQ0FBQyxDQUFTLEVBQUUsQ0FBUyxFQUFFLEVBQUUsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUNoRCxDQUFDLENBQUMsQ0FBQyxDQUFTLEVBQUUsQ0FBUyxFQUFFLEVBQUUsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxtRUFBVyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDeEUsS0FBSyxDQUFDLDhDQUFjLENBQUM7UUFFMUIsT0FBTyxDQUFDLFFBQVEsQ0FBQztJQUNyQixDQUFDO0lBRUQsU0FBUztRQUNMLE1BQU0sSUFBSSxHQUFHLElBQUksRUFBRSxFQUFFLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUVyQyxNQUFNLFFBQVEsR0FBRyxDQUFDLENBQVMsRUFBRSxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDNUQsTUFBTSxNQUFNLEdBQUcsQ0FBQyxDQUFTLEVBQUUsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRTFELE1BQU0sY0FBYyxHQUFHLENBQUMsQ0FBUyxFQUFFLEVBQUU7WUFDakMsSUFBSSxHQUFXO1lBRWYsSUFBSSxLQUFLLENBQUMsQ0FBQyxDQUFDO2dCQUFFLEdBQUcsR0FBRyxFQUFFLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7aUJBQ3JDLElBQUksUUFBUSxDQUFDLENBQUMsQ0FBQztnQkFBRSxHQUFHLEdBQUcsRUFBRSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO2lCQUM3QyxJQUFJLE1BQU0sQ0FBQyxDQUFDLENBQUM7Z0JBQUUsR0FBRyxHQUFHLEVBQUUsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQzs7Z0JBQzNDLEdBQUcsR0FBRyxDQUFDO1lBRVosT0FBTyxHQUFHO1FBQ2QsQ0FBQztRQUVELFNBQVMsV0FBVyxDQUFDLENBQVc7WUFDNUIsTUFBTSxLQUFLLEdBQUcsQ0FBQyxDQUFDLEtBQUssRUFBRTtZQUN2QixNQUFNLFdBQVcsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQztZQUN2RCxNQUFNLE1BQU0sR0FBRyxjQUFjLENBQUMsS0FBSyxDQUFDO1lBQ3BDLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxFQUFFO2dCQUNuQyxPQUFPLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDO2FBQ3pCO1lBQ0QsT0FBTyxDQUFDO1FBQ1osQ0FBQztRQUVELE1BQU0sTUFBTSxHQUFHO1lBQ1gsSUFBSSxFQUFFLEdBQUcsQ0FBQyxFQUFFO2dCQUNSLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3RDLENBQUM7WUFDRCxLQUFLLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUM7WUFDckMsUUFBUSxFQUFFLEdBQUcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDO1NBQzFDO1FBRUQsTUFBTSxNQUFNLEdBQUcsR0FBRyxFQUFFLENBQUMscURBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQ2xDLDJEQUFJLENBQUMsQ0FBQyxHQUFNLEVBQUUsRUFBRTtZQUNaLHdDQUF3QztZQUN4QyxJQUFJLHlDQUFLLENBQUMsQ0FBQyxDQUFXLEVBQUUsRUFBRSxDQUFDLHlDQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLEVBQUUsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLEVBQUU7Z0JBQ3hGLGFBQWEsQ0FBQyxXQUFXLEVBQUU7YUFDOUI7WUFFRCxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3hDLE9BQU8sSUFBSSxDQUFDLElBQUksRUFBRTtRQUN0QixDQUFDLEVBQUUsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLEVBQ2YsMkRBQUksQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLENBQ25CLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQztRQUVuQixpR0FBaUc7UUFDakcsSUFBSSxhQUFhLEdBQUc7WUFDaEIsV0FBVyxFQUFFLEdBQUcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDO1NBQ2xEO1FBRUQsTUFBTSxTQUFTLEdBQUc7WUFDZCxhQUFhLENBQUMsV0FBVyxFQUFFO1lBQzNCLE1BQU0sS0FBSyxHQUFHLEtBQUssQ0FBQyx3Q0FBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ25DLDRDQUFZLENBQUMsWUFBWSxDQUFDLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxLQUFLLENBQUM7WUFDdEQsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDM0QsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDMUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsWUFBWSxFQUFFLEVBQUUsQ0FBQztZQUUzQyxhQUFhLEdBQUcsTUFBTSxFQUFFO1FBQzVCLENBQUM7UUFFRCw0Q0FBNEM7UUFDNUMsa0RBQWtEO1FBQ2xELHdDQUF3QztRQUN4QyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFLFNBQVMsQ0FBQztJQUNuRCxDQUFDO0lBSUQsQ0FBQyxDQUFDLEdBQUk7UUFDRixJQUFJLEdBQUcsSUFBSSxJQUFJO1lBQUUsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQy9DLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQztRQUNwQixJQUFJLENBQUMsU0FBUyxFQUFFO1FBQ2hCLE9BQU8sSUFBSTtJQUNmLENBQUM7SUFJRCxHQUFHLENBQUMsR0FBSTtRQUNKLElBQUksR0FBRyxJQUFJLElBQUk7WUFBRSxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDL0MsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDO1FBQ3RCLG1CQUFtQjtRQUNuQixPQUFPLElBQUk7SUFDZixDQUFDO0lBSUQsSUFBSSxDQUFDLEdBQUk7UUFDTCxJQUFJLEdBQUcsSUFBSSxJQUFJO1lBQUUsT0FBTyxJQUFJLENBQUMsS0FBSztRQUNsQyxJQUFJLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQztRQUNqQixJQUFJLENBQUMsU0FBUyxFQUFFO1FBQ2hCLE9BQU8sSUFBSTtJQUNmLENBQUM7SUFFRDs7T0FFRztJQUNILFdBQVc7UUFDUCxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFO1lBQ2hCLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3pDLE9BQU8sQ0FBQztRQUNaLENBQUMsQ0FBQztRQUVGLE9BQU8sSUFBSSxDQUFDLElBQUksRUFBRTtJQUN0QixDQUFDO0lBRUQ7O09BRUc7SUFDSCxZQUFZLENBQUMsR0FBTTtRQUNmLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDWixDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3RDLENBQUMsQ0FBQztRQUVGLElBQUksQ0FBQyxTQUFTLEVBQUU7UUFDaEIsT0FBTyxJQUFJO0lBQ2YsQ0FBQztDQUNKO0FBRUQsU0FBUyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFtQjtJQUNuQyxPQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFO0FBQ3pCLENBQUM7Ozs7Ozs7Ozs7Ozs7QUNuZUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXdCO0FBQ0U7QUFFc0Q7QUFHM0M7QUFJckMsTUFBTSxVQUFVLEdBQUcsQ0FBQyxFQUFDLHNDQUFzQztBQXVCcEQsTUFBTSxVQUFXLFNBQVEsaUVBQVU7SUFxQnRDLFlBQVksUUFBZSxFQUFFLFlBQWlDLEVBQUUsT0FBTyxHQUFHLEVBQUU7UUFDeEUsS0FBSyxDQUFDLFFBQVEsRUFBRSxZQUFZLEVBQUUsT0FBTyxDQUFDO1FBckIxQyxZQUFPLEdBQUcsV0FBVztRQUlyQixZQUFPLEdBQWlCO1lBQ3BCLFFBQVEsRUFBRSxHQUFHO1lBQ2IsU0FBUyxFQUFFLEdBQUc7WUFDZCxNQUFNLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFO1lBQ3BELEdBQUcsRUFBRSxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxNQUFNLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUU7WUFDL0MsTUFBTSxFQUFFLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQztZQUNoQixNQUFNLEVBQUUsQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDO1NBQ3RCO1FBR0QsV0FBTSxHQUFnQixFQUFFO1FBRXhCLFNBQUksR0FBYyxFQUFFO1FBTWhCLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ25DLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDO1FBQ3JDLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNO1FBQ3hDLElBQUksQ0FBQyxJQUFJLENBQWMsRUFBRSxDQUFDO0lBQzlCLENBQUM7SUFFRDs7OztPQUlHO0lBQ08sV0FBVyxDQUFDLFNBQWlCO1FBQ25DLE1BQU0sSUFBSSxHQUFHLElBQUk7UUFDakIsSUFBSSxDQUFDLHlDQUFLLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFO1lBQ2hDLE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxTQUFTLEVBQUUsQ0FBQyxDQUFDO1lBQ3hDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxTQUFTLENBQUMsR0FBRztnQkFDckIsR0FBRyxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDO2dCQUNqQyxJQUFJLEVBQUUsRUFBRTthQUNYO1NBQ0o7SUFDTCxDQUFDO0lBRUQseUJBQXlCO0lBQ3pCLFlBQVksQ0FBQyxNQUFNO1FBQ2YsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLE9BQU87UUFDdkIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsOENBQWMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQztJQUNwRixDQUFDO0lBRUQsVUFBVTtRQUNOLElBQUksQ0FBQyxJQUFJLENBQUMseUNBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLDJDQUFPLENBQUMsTUFBTSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztJQUM5RCxDQUFDO0lBRUQsUUFBUSxDQUFDLENBQWMsRUFBRSxLQUFNO1FBQzNCLE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQztRQUNsQixJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUU5QixNQUFNLE1BQU0sR0FBRyxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUs7UUFFL0MsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUMxQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRWxDLGlCQUFpQjtRQUNqQixNQUFNLFNBQVMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ25JLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDO1FBQzVCLElBQUksQ0FBQyxVQUFVLEVBQUU7UUFFakIsUUFBUSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQzthQUN4QixJQUFJLENBQUMsTUFBTSxDQUFDO2FBQ1osT0FBTyxDQUFDLENBQUMsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDO2FBQzFCLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUU7WUFDWCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztRQUM1QixDQUFDLENBQUM7SUFDVixDQUFDO0lBRU8sWUFBWSxDQUFDLFNBQWlCO1FBQ2xDLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQzthQUMvQixPQUFPLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQzthQUN4QixPQUFPLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQztJQUM5QixDQUFDO0lBRUQsSUFBSTtRQUNBLE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQztRQUNsQixNQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQ3hCLE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDM0IsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztRQUV2QixJQUFJLENBQUMsWUFBWSxFQUFFO1FBQ25CLElBQUksQ0FBQyxVQUFVLEVBQUU7UUFDakIsSUFBSSxDQUFDLFVBQVUsRUFBRTtJQUNyQixDQUFDO0lBRVMsWUFBWTtRQUNsQixNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTTtRQUMxQixNQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsT0FBTztRQUV2QixNQUFNLENBQUMsQ0FBQyxHQUFHLDhDQUFjLEVBQUUsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDO1FBQzlFLE1BQU0sQ0FBQyxDQUFDLEdBQUcsMkNBQVcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUM7SUFDaEYsQ0FBQztJQUVTLFVBQVU7UUFDaEIsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUk7UUFDdEIsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU07UUFDMUIsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLE9BQU87UUFFdkIsY0FBYztRQUNkLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDO2FBQzdCLElBQUksQ0FBQyxPQUFPLEVBQUUsY0FBYyxDQUFDO2FBQzdCLElBQUksQ0FBQyxXQUFXLEVBQUUsaURBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLENBQUUsVUFBVSxDQUFDLENBQUM7WUFDbEQsYUFBYTthQUNaLElBQUksQ0FBQywyQ0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFekQsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUM7YUFDN0IsSUFBSSxDQUFDLE9BQU8sRUFBRSxjQUFjLENBQUM7YUFDN0IsSUFBSSxDQUFDLFdBQVcsRUFBRSxpREFBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLE1BQU0sR0FBRyxVQUFVLENBQUMsQ0FBQztZQUM1RCxhQUFhO2FBQ1osSUFBSSxDQUFDLDZDQUFhLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUUzRCxhQUFhO1FBQ2IsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDO2FBQ25CLElBQUksQ0FBQyxXQUFXLEVBQUUsaURBQUcsQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLEtBQUssR0FBRyxDQUFDLEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUMsQ0FBQzthQUM5RSxLQUFLLENBQUMsYUFBYSxFQUFFLFFBQVEsQ0FBQzthQUM5QixJQUFJLENBQUMsTUFBTSxDQUFDO1FBRWpCLGFBQWE7UUFDYixJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUM7YUFDbkIsS0FBSyxDQUFDLGFBQWEsRUFBRSxRQUFRLENBQUM7YUFDOUIsSUFBSSxDQUFDLE1BQU0sQ0FBQzthQUNaLElBQUksQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUM7YUFDdkMsSUFBSSxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDLEVBQUUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7YUFDdkMsSUFBSSxDQUFDLFdBQVcsRUFBRSxpREFBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3ZDLGlFQUFpRTtJQUNyRSxDQUFDO0lBRVMsVUFBVTtRQUNoQixJQUFJLENBQUMsSUFBSSxHQUFHLHVDQUFPLEVBQVU7YUFDeEIsQ0FBQyxDQUFDLENBQUMsQ0FBUyxFQUFFLENBQVMsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDN0MsQ0FBQyxDQUFDLENBQUMsQ0FBUyxFQUFFLENBQVMsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDN0MsS0FBSyxDQUFDLDhDQUFjLENBQUM7SUFDOUIsQ0FBQztJQUlELElBQUksQ0FBQyxHQUFJO1FBQ0wsSUFBSSxHQUFHLElBQUksSUFBSTtZQUFFLE9BQU8sSUFBSSxDQUFDLEtBQUs7UUFDbEMsSUFBSSxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUM7UUFDakIsT0FBTyxJQUFJO0lBQ2YsQ0FBQztJQUVELFlBQVk7UUFDUixJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsYUFBYTtRQUN4QyxPQUFPLElBQUk7SUFDZixDQUFDO0NBQ0o7Ozs7Ozs7Ozs7Ozs7QUM1TEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXdCO0FBQ0U7QUFFc0Q7QUFHM0M7QUFHckMsTUFBTSxVQUFVLEdBQUcsQ0FBQyxFQUFDLHNDQUFzQztBQXNCcEQsTUFBTSxTQUFVLFNBQVEsaUVBQVU7SUFzQnJDLFlBQVksUUFBZSxFQUFFLFlBQWlDLEVBQUUsT0FBTyxHQUFHLEVBQUU7UUFDeEUsS0FBSyxDQUFDLFFBQVEsRUFBRSxZQUFZLEVBQUUsT0FBTyxDQUFDO1FBdEIxQyxZQUFPLEdBQUcsV0FBVztRQUlyQixZQUFPLEdBQWlCO1lBQ3BCLFFBQVEsRUFBRSxHQUFHO1lBQ2IsU0FBUyxFQUFFLEdBQUc7WUFDZCxNQUFNLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFO1lBQ3BELEdBQUcsRUFBRSxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxNQUFNLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUU7WUFDL0MsTUFBTSxFQUFFLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQztZQUNoQixNQUFNLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1NBQ2pCO1FBSUQsV0FBTSxHQUFnQixFQUFFO1FBRXhCLFNBQUksR0FBYyxFQUFFO1FBTWhCLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ25DLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDO1FBQ3JDLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNO1FBQ3hDLElBQUksQ0FBQyxJQUFJLENBQWMsRUFBRSxDQUFDO0lBQzlCLENBQUM7SUFFRDs7OztPQUlHO0lBQ08sV0FBVyxDQUFDLFNBQWlCO1FBQ25DLE1BQU0sSUFBSSxHQUFHLElBQUk7UUFDakIsSUFBSSxDQUFDLHlDQUFLLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFO1lBQ2hDLE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxTQUFTLEVBQUUsQ0FBQyxDQUFDO1lBQ3hDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxTQUFTLENBQUMsR0FBRztnQkFDckIsR0FBRyxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDO2dCQUNqQyxJQUFJLEVBQUUsRUFBRTthQUNYO1NBQ0o7SUFDTCxDQUFDO0lBRUQsVUFBVTtRQUNOLElBQUksQ0FBQyxJQUFJLENBQUMseUNBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLDJDQUFPLENBQUMsTUFBTSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztJQUM5RCxDQUFDO0lBRUQsUUFBUSxDQUFDLENBQWMsRUFBRSxLQUFNO1FBQzNCLE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQztRQUNsQixJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUU5QixNQUFNLE1BQU0sR0FBRyxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUs7UUFFL0MsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUMxQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRTFDLGlCQUFpQjtRQUNqQixNQUFNLFNBQVMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ25JLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDO1FBQzVCLElBQUksQ0FBQyxVQUFVLEVBQUUsRUFBQyxxQkFBcUI7UUFHdkMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQzthQUN4QixJQUFJLENBQUMsTUFBTSxDQUFDO2FBQ1osT0FBTyxDQUFDLENBQUMsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDO2FBQzFCLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUU7WUFDWCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztRQUM1QixDQUFDLENBQUM7SUFDVixDQUFDO0lBRUQseUJBQXlCO0lBQ3pCLFlBQVksQ0FBQyxNQUFNO1FBQ2YsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLE9BQU87UUFDdkIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsOENBQWMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQztJQUNwRixDQUFDO0lBRU8sWUFBWSxDQUFDLFNBQWlCO1FBQ2xDLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQzthQUMvQixPQUFPLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQzthQUN4QixPQUFPLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQztJQUM5QixDQUFDO0lBRVMsWUFBWTtRQUNsQixNQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsT0FBTztRQUN2QixJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyw4Q0FBYyxFQUFFLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQztRQUNuRixJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyw4Q0FBYyxFQUFFLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQztJQUN4RixDQUFDO0lBRUQsSUFBSTtRQUNBLE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQztRQUNsQixNQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQ3hCLE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDM0IsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztRQUV2QixJQUFJLENBQUMsWUFBWSxFQUFFO1FBQ25CLElBQUksQ0FBQyxVQUFVLEVBQUU7UUFDakIsSUFBSSxDQUFDLFVBQVUsRUFBRTtJQUNyQixDQUFDO0lBR1MsVUFBVTtRQUNoQixNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSTtRQUN0QixNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTTtRQUMxQixNQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsT0FBTztRQUV2QixjQUFjO1FBQ2QsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUM7YUFDN0IsSUFBSSxDQUFDLE9BQU8sRUFBRSxjQUFjLENBQUM7YUFDN0IsSUFBSSxDQUFDLFdBQVcsRUFBRSxpREFBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLE1BQU0sR0FBRyxVQUFVLENBQUMsQ0FBQztZQUM1RCxhQUFhO2FBQ1osSUFBSSxDQUFDLDZDQUFhLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUUzRCxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQzthQUM3QixJQUFJLENBQUMsT0FBTyxFQUFFLGNBQWMsQ0FBQzthQUM3QixJQUFJLENBQUMsV0FBVyxFQUFFLGlEQUFHLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxDQUFFLFVBQVUsQ0FBQyxDQUFDO1lBQ2xELGFBQWE7YUFDWixJQUFJLENBQUMsMkNBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBRXpELElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQzthQUNuQixJQUFJLENBQUMsV0FBVyxFQUFFLGlEQUFHLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxNQUFNLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDLENBQUM7YUFDOUUsS0FBSyxDQUFDLGFBQWEsRUFBRSxRQUFRLENBQUM7YUFDOUIsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUVqQixJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUM7YUFDbkIsS0FBSyxDQUFDLGFBQWEsRUFBRSxRQUFRLENBQUM7YUFDOUIsSUFBSSxDQUFDLGtCQUFrQixDQUFDO2FBQ3hCLElBQUksQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUM7YUFDdkMsSUFBSSxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDLEVBQUUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7YUFDdkMsSUFBSSxDQUFDLFdBQVcsRUFBRSxpREFBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQzNDLENBQUM7SUFFUyxVQUFVO1FBQ2hCLElBQUksQ0FBQyxJQUFJLEdBQUcsdUNBQU8sRUFBVTthQUN4QixDQUFDLENBQUMsQ0FBQyxDQUFTLEVBQUUsQ0FBUyxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUM3QyxDQUFDLENBQUMsQ0FBQyxDQUFTLEVBQUUsQ0FBUyxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUM3QyxLQUFLLENBQUMsOENBQWMsQ0FBQztJQUM5QixDQUFDO0lBSUQsSUFBSSxDQUFDLEdBQUk7UUFDTCxJQUFJLEdBQUcsSUFBSSxJQUFJO1lBQUUsT0FBTyxJQUFJLENBQUMsS0FBSztRQUNsQyxJQUFJLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQztRQUNqQixPQUFPLElBQUk7SUFDZixDQUFDO0lBRUQsWUFBWTtRQUNSLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxhQUFhO1FBQ3hDLE9BQU8sSUFBSTtJQUNmLENBQUM7Q0FDSjs7Ozs7Ozs7Ozs7OztBQ3hMRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXdCO0FBQ3FCO0FBSXdCO0FBRWhDO0FBQ1M7QUFPdkMsU0FBUyxVQUFVLENBQUMsRUFBUyxFQUFFLEVBQVM7SUFDM0MsTUFBTSxLQUFLLEdBQUcsMERBQVEsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN0RCxNQUFNLEVBQUUsR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFDLENBQUMsQ0FBQztJQUU5QixJQUFJLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUU7SUFDcEIsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtRQUNuQixFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLEVBQUU7UUFDbEMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxFQUFFO0lBQ3RDLENBQUMsQ0FBQztJQUVGLE1BQU0sRUFBRSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQyxDQUFDO0lBQzNFLE1BQU0sRUFBRSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQyxDQUFDO0lBQzNFLE1BQU0sRUFBRSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQyxDQUFDO0lBQzNFLE1BQU0sRUFBRSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FB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QUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLFdBQVcsRUFBRTtZQUN0QixNQUFNLEtBQUssR0FBRyx3Q0FBUSxDQUFDLElBQUksQ0FBQztZQUM1QixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsdUNBQU8sRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUU1RSxzQ0FBc0M7WUFDdEMsNkJBQTZCO1lBQzdCLHFHQUFxRztZQUNyRyxLQUFLO1FBQ1QsQ0FBQyxDQUFDO1FBRUYsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsVUFBVSxFQUFFLEdBQUcsRUFBRTtZQUMxQixJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDO1lBQ3ZDLElBQUksSUFBSSxDQUFDLEtBQUssSUFBSSxJQUFJO2dCQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDbkYsQ0FBQyxDQUFDO1FBRUYsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsV0FBVyxFQUFFLEdBQUcsRUFBRTtZQUMzQixJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsS0FBSyxDQUFDO1lBQ3hDLElBQUksSUFBSSxDQUFDLEtBQUssSUFBSSxJQUFJO2dCQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDcEYsQ0FBQyxDQUFDO1FBRUYsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFO1lBQ2xC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LE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUUzQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUU7YUFDVixJQUFJLENBQUMsY0FBYyxFQUFFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFFLENBQUMsQ0FBQzthQUMvQyxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLENBQUM7UUFFekMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFO2FBQ1YsSUFBSSxDQUFDLGNBQWMsRUFBRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsRUFBRSxDQUFDLENBQUM7YUFDL0MsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBRTNDLENBQUM7SUFLRCxJQUFJLENBQUMsR0FBSTtRQUNQLE9BQU8sSUFBSTtJQUNiLENBQUM7Q0FDRiIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG4gXHRmdW5jdGlvbiB3ZWJwYWNrSnNvbnBDYWxsYmFjayhkYXRhKSB7XG4gXHRcdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG4gXHRcdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG4gXHRcdHZhciBleGVjdXRlTW9kdWxlcyA9IGRhdGFbMl07XG5cbiBcdFx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG4gXHRcdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuIFx0XHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdO1xuIFx0XHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcbiBcdFx0XHR9XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcbiBcdFx0fVxuIFx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGlmKHBhcmVudEpzb25wRnVuY3Rpb24pIHBhcmVudEpzb25wRnVuY3Rpb24oZGF0YSk7XG5cbiBcdFx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG4gXHRcdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuIFx0XHR9XG5cbiBcdFx0Ly8gYWRkIGVudHJ5IG1vZHVsZXMgZnJvbSBsb2FkZWQgY2h1bmsgdG8gZGVmZXJyZWQgbGlzdFxuIFx0XHRkZWZlcnJlZE1vZHVsZXMucHVzaC5hcHBseShkZWZlcnJlZE1vZHVsZXMsIGV4ZWN1dGVNb2R1bGVzIHx8IFtdKTtcblxuIFx0XHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIGFsbCBjaHVua3MgcmVhZHlcbiBcdFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4gXHR9O1xuIFx0ZnVuY3Rpb24gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKSB7XG4gXHRcdHZhciByZXN1bHQ7XG4gXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHR2YXIgZGVmZXJyZWRNb2R1bGUgPSBkZWZlcnJlZE1vZHVsZXNbaV07XG4gXHRcdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG4gXHRcdFx0Zm9yKHZhciBqID0gMTsgaiA8IGRlZmVycmVkTW9kdWxlLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHR2YXIgZGVwSWQgPSBkZWZlcnJlZE1vZHVsZVtqXTtcbiBcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tkZXBJZF0gIT09IDApIGZ1bGZpbGxlZCA9IGZhbHNlO1xuIFx0XHRcdH1cbiBcdFx0XHRpZihmdWxmaWxsZWQpIHtcbiBcdFx0XHRcdGRlZmVycmVkTW9kdWxlcy5zcGxpY2UoaS0tLCAxKTtcbiBcdFx0XHRcdHJlc3VsdCA9IF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gZGVmZXJyZWRNb2R1bGVbMF0pO1xuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdHJldHVybiByZXN1bHQ7XG4gXHR9XG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4gXHQvLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbiBcdC8vIFByb21pc2UgPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHRcIm1haW5cIjogMFxuIFx0fTtcblxuIFx0dmFyIGRlZmVycmVkTW9kdWxlcyA9IFtdO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHR2YXIganNvbnBBcnJheSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSB8fCBbXTtcbiBcdHZhciBvbGRKc29ucEZ1bmN0aW9uID0ganNvbnBBcnJheS5wdXNoLmJpbmQoanNvbnBBcnJheSk7XG4gXHRqc29ucEFycmF5LnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjaztcbiBcdGpzb25wQXJyYXkgPSBqc29ucEFycmF5LnNsaWNlKCk7XG4gXHRmb3IodmFyIGkgPSAwOyBpIDwganNvbnBBcnJheS5sZW5ndGg7IGkrKykgd2VicGFja0pzb25wQ2FsbGJhY2soanNvbnBBcnJheVtpXSk7XG4gXHR2YXIgcGFyZW50SnNvbnBGdW5jdGlvbiA9IG9sZEpzb25wRnVuY3Rpb247XG5cblxuIFx0Ly8gYWRkIGVudHJ5IG1vZHVsZSB0byBkZWZlcnJlZCBsaXN0XG4gXHRkZWZlcnJlZE1vZHVsZXMucHVzaChbXCIuL3NyYy9pbmRleC50c1wiLFwidmVuZG9yXCJdKTtcbiBcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gcmVhZHlcbiBcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW5kZXguaHRtbFwiOyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImltcG9ydCB7bWFpbn0gZnJvbSAnLi90cy9tYWluJ1xuXG5pbXBvcnQgXCIhZmlsZS1sb2FkZXI/bmFtZT1pbmRleC5odG1sIS4vaW5kZXguaHRtbFwiO1xuaW1wb3J0IFwiLi9jc3MvbWFpbi5zY3NzXCJcblxubWFpbigpIiwiaW1wb3J0ICogYXMgZDMgZnJvbSAnZDMnXG5pbXBvcnQgKiBhcyBuaiBmcm9tIFwibnVtanNcIlxuaW1wb3J0ICogYXMgdHAgZnJvbSBcIi4vdHlwZXNcIlxuaW1wb3J0IHsgQXJyYXkgfSBmcm9tIFwiLi90eXBlc1wiXG5cbi8vIGNvbnN0IGRlZmF1bHRFcnJvckZ1bmN0aW9uID0gKHY6IEFycmF5KSA9PiB2LmdldCgwKSAqIHYuZ2V0KDEpIC0gMVxuY29uc3QgZGVmYXVsdEVycm9yRnVuY3Rpb24gPSAodjogQXJyYXkpID0+IHtcbiAgICAvL0B0cy1pZ25vcmVcbiAgICByZXR1cm4gbmouZG90KG5qLmFycmF5KFtbMSwgMl0sIFsyLCAxXV0pLCB2KVxufVxuY29uc3QgZGVmYXVsdERmRnVuY3Rpb24gPSAodjogQXJyYXkpID0+IG5qLmFycmF5KFtbMSwgMl0sIFsyLCAxXV0pXG5jb25zdCBkZWZhdWx0U3RlcDJMcjogZDMuU2NhbGVMaW5lYXI8bnVtYmVyLCBudW1iZXI+ID0gZDMuc2NhbGVMaW5lYXIoKS5kb21haW4oWzAsIDAuOF0pLnJhbmdlKFswLjAwMSwgMC4yNV0pXG5jb25zdCBkZWZhdWx0TG9zcyA9IChmdjogQXJyYXkpID0+IG5qLnN1bShuai5kaXZpZGUobmoucG93ZXIoZnYsIDIpLCAyKSlcblxuaW50ZXJmYWNlIFVwZGF0ZXJPcHRpb25zIHtcbiAgICBkZjogdHAuTWFwRnVuY3Rpb25cbiAgICBmOiB0cC5NYXBGdW5jdGlvblxuICAgIHRhcmdldD9cbiAgICBxOiBudW1iZXIgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gMCAtPiAxLCB3aGVyZSAwIGlzIFNHRCBhbmQgMSBpcyBOR0QuIDAuNSBpcyBzcXJ0IE5HRC4gW3N0ZXAgPSAtIGV0YSAqIEggXiAoLTEvcSkgKiBnXSAoSCA9IDAgd2hlbiBxPTApXG4gICAgZXRhOiBudW1iZXIgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGFrYSAnbGVhcm5pbmcgcmF0ZSdcbiAgICBzdGVwMmxyOiBkMy5TY2FsZUxpbmVhcjxudW1iZXIsIG51bWJlcj5cbiAgICBsb3NzOiB0cC5SZWR1Y2VGdW5jdGlvblxufVxuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQmFzZVVwZGF0ZXIyRCB7XG4gICAgb3A6IFVwZGF0ZXJPcHRpb25zID0ge1xuICAgICAgICAvL0B0cy1pZ25vcmVcbiAgICAgICAgZjogZGVmYXVsdEVycm9yRnVuY3Rpb24sXG4gICAgICAgIC8vQHRzLWlnbm9yZVxuICAgICAgICBkZjogZGVmYXVsdERmRnVuY3Rpb24sXG4gICAgICAgIHE6IDAsXG4gICAgICAgIGV0YTogMC4xLFxuICAgICAgICBzdGVwMmxyOiBkZWZhdWx0U3RlcDJMcixcbiAgICAgICAgbG9zczogZGVmYXVsdExvc3MsXG4gICAgfVxuXG4gICAgY29uc3RydWN0b3Iob3B0aW9uczogUGFydGlhbDxVcGRhdGVyT3B0aW9ucz49e30pIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJSdW5uaW5nIGJhc2UgdXBkYXRlciBjb25zdHJ1Y3RvclwiKTtcbiAgICAgICAgdGhpcy51cGRhdGVPcHRpb25zKG9wdGlvbnMpXG4gICAgfVxuXG4gICAgdXBkYXRlT3B0aW9ucyhvcHRpb25zOiBQYXJ0aWFsPFVwZGF0ZXJPcHRpb25zPikge1xuICAgICAgICBPYmplY3Qua2V5cyhvcHRpb25zKS5mb3JFYWNoKGsgPT4gdGhpcy5vcFtrXSA9IG9wdGlvbnNba10pO1xuICAgIH1cblxuICAgIGV0YSgpOiBudW1iZXJcbiAgICBldGEodmFsOiBudW1iZXIpOiB0aGlzXG4gICAgZXRhKHZhbD8pIHtcbiAgICAgICAgaWYgKHZhbCA9PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5vcC5ldGFcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm9wLmV0YSA9IHZhbFxuICAgICAgICByZXR1cm4gdGhpc1xuICAgIH1cblxuICAgIHEoKTogbnVtYmVyXG4gICAgcSh2YWw6IG51bWJlcik6IHRoaXNcbiAgICBxKHZhbD8pIHtcbiAgICAgICAgaWYgKHZhbCA9PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5vcC5xXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5vcC5xID0gdmFsXG4gICAgICAgIHJldHVybiB0aGlzXG4gICAgfVxuXG4gICAgc3RlcDJscigpOiBkMy5TY2FsZUxpbmVhcjxudW1iZXIsIG51bWJlcj5cbiAgICBzdGVwMmxyKHZhbDogZDMuU2NhbGVMaW5lYXI8bnVtYmVyLCBudW1iZXI+KTogdGhpc1xuICAgIHN0ZXAybHIodmFsPykge1xuICAgICAgICBpZiAodmFsID09IG51bGwpIHsgcmV0dXJuIHRoaXMub3Auc3RlcDJsciB9XG4gICAgICAgIHRoaXMub3Auc3RlcDJsciA9IHZhbFxuICAgICAgICByZXR1cm4gdGhpc1xuICAgIH1cblxuICAgIC8vIEFtb3VudCB0byBzY2FsZSBzaXplIG9mIGxlYXJuaW5nIHJhdGUgYXJyb3dzXG4gICAgZ2V0IGxyU2NhbGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm9wLnN0ZXAybHIodGhpcy5vcC5ldGEpXG4gICAgfVxuXG4gICAgbG9zcyh2OiBBcnJheSk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLm9wLmxvc3ModGhpcy5vcC5mKHYpKVxuICAgIH1cblxuICAgIGdyYWRpZW50KHY6IEFycmF5KTogQXJyYXkge1xuICAgICAgICBjb25zdCBlcnIgPSB0aGlzLmxvc3ModilcbiAgICAgICAgY29uc3QgZGYgPSB0aGlzLm9wLmRmKHYpXG4gICAgICAgIGNvbnN0IGc6IEFycmF5ID0gbmoubXVsdGlwbHkoZGYsIGVycilcbiAgICAgICAgcmV0dXJuIGdcbiAgICB9XG5cbiAgICBscih2OiBBcnJheSk6IEFycmF5IHtcbiAgICAgICAgY29uc3QgZHYgPSB0aGlzLmR2KHYpXG4gICAgICAgIGNvbnN0IGFic0xvc3MgPSBNYXRoLmFicyh0aGlzLmxvc3ModikpXG4gICAgICAgIGNvbnN0IGxyU2NhbGUgPSB0aGlzLm9wLnN0ZXAybHIodGhpcy5vcC5ldGEpXG4gICAgICAgIGNvbnN0IGxyOiBBcnJheSA9IG5qLm11bHRpcGx5KGR2LCBsclNjYWxlKS5kaXZpZGUoYWJzTG9zcylcbiAgICAgICAgcmV0dXJuIGxyXG4gICAgfVxuXG4gICAgbmV4dCh2OiBBcnJheSkge1xuICAgICAgICBjb25zdCBkdiA9IHRoaXMuZHYodilcbiAgICAgICAgY29uc3QgbmV3eCA9IG5qLnN1YnRyYWN0KHYsIG5qLm11bHRpcGx5KGR2LCB0aGlzLm9wLmV0YSkpXG4gICAgICAgIC8vQHRzLWlnbm9yZVxuICAgICAgICByZXR1cm4gbmV3eFxuICAgIH1cblxuICAgIGFic3RyYWN0IGR2KHY6IEFycmF5KVxuXG4gICAgbmV4dExyKHY6IEFycmF5KTogQXJyYXkge1xuICAgICAgICBjb25zdCBnID0gdGhpcy5scih2KTtcbiAgICAgICAgY29uc3QgejogQXJyYXkgPSBuai5hZGQodiwgbmoubXVsdGlwbHkoZywgLTMpKVxuICAgICAgICByZXR1cm4gelxuICAgIH1cblxuICAgIGFic3RyYWN0IHRvQmxvY2soKVxuICAgIGFic3RyYWN0IHRvRnVsbCgpXG59IiwiZXhwb3J0IGNvbnN0IGJhc2VMb3NzID0geCA9PiAxIC8gMiAqIE1hdGgucG93KHgsIDIpXG5leHBvcnQgY29uc3QgZ2V0UGxvdEZ1bmMgPSAoejogTGFuZHNjYXBlKSA9PiAoeDogbnVtYmVyKSA9PiB6Lmxvc3Moei5mKHgpKVxuXG5leHBvcnQgaW50ZXJmYWNlIExhbmRzY2FwZSB7XG4gICAgbmFtZTogc3RyaW5nXG4gICAgZjogKHg6IG51bWJlcikgPT4gbnVtYmVyXG4gICAgZGY6ICh4OiBudW1iZXIpID0+IG51bWJlclxuICAgIHhyYW5nZTogW251bWJlciwgbnVtYmVyXVxuICAgIHlyYW5nZTogW251bWJlciwgbnVtYmVyXVxuICAgIGxvc3M6ICh4OiBudW1iZXIpID0+IG51bWJlclxufVxuXG5cbmV4cG9ydCBjb25zdCBsYW5kc2NhcGVzOiB7IFtrOiBzdHJpbmddOiBMYW5kc2NhcGUgfSA9IHtcbiAgICBob2xlOiB7XG4gICAgICAgIG5hbWU6IFwiaG9sZVwiLFxuICAgICAgICBmOiB4ID0+IE1hdGgudGFuaCh4KjEzLjUpLFxuICAgICAgICBkZjogeCA9PiBNYXRoLnBvdyhNYXRoLmNvc2goeCoxMy41KSwgLTIpICogMTMuNSxcbiAgICAgICAgeHJhbmdlOiBbLTYgLyAxMy41LCA2IC8gMTMuNV0sXG4gICAgICAgIHlyYW5nZTogWzAsIDAuNl0sXG4gICAgICAgIGxvc3M6IGJhc2VMb3NzXG4gICAgfSxcbiAgICBzdGVwczoge1xuICAgICAgICBuYW1lOiBcInN0ZXBzXCIsXG4gICAgICAgIGY6IHggPT4gTWF0aC50YW5oKHggKiAxMy41IC0gMTEpIC8gNCArIE1hdGgudGFuaCh4ICogMTMuNSAtIDYpIC8gNCArIE1hdGgudGFuaCh4ICogMTMuNSkgKyBNYXRoLnRhbmgoeCAqIDEzLjUgKyA2KSAvIDQgKyBNYXRoLnRhbmgoeCAqIDEzLjUgKyAxMSkgLyA0LFxuICAgICAgICBkZjogeCA9PiAoTWF0aC5wb3coTWF0aC5jb3NoKHggKiAxMy41IC0gMTEpLCAtMikgLyA0ICsgTWF0aC5wb3coTWF0aC5jb3NoKHggKiAxMy41IC0gNiksIC0yKSAvIDQgKyBNYXRoLnBvdyhNYXRoLmNvc2goeCAqIDEzLjUpLCAtMikgKyBNYXRoLnBvdyhNYXRoLmNvc2goeCAqIDEzLjUgKyA2KSwgLTIpIC8gNCArIE1hdGgucG93KE1hdGguY29zaCh4ICogMTMuNSArIDExKSwgLTIpIC8gNCApICogMTMuNSxcbiAgICAgICAgeHJhbmdlOiBbLTEzLjUgLyAxMy41LCAxMy41IC8gMTMuNV0sXG4gICAgICAgIHlyYW5nZTogWzAsIDIuNV0sXG4gICAgICAgIGxvc3M6IGJhc2VMb3NzXG4gICAgfSxcbiAgICBzZWFndWxsOiB7XG4gICAgICAgIG5hbWU6IFwic2VhZ3VsbFwiLFxuICAgICAgICBmOiB4ID0+IE1hdGguc2lnbih4KSAqICgxIC0gKDEgLyAoMSArIE1hdGguYWJzKHggKiAxNi41KSkpKSxcbiAgICAgICAgZGY6IHggPT4gMTYuNSAvIE1hdGgucG93KDEgKyBNYXRoLmFicyh4ICogMTYuNSksIDIpLFxuICAgICAgICB4cmFuZ2U6IFstMTIgLyAxNi41LCAxMiAvIDE2LjVdLFxuICAgICAgICB5cmFuZ2U6IFswLCAwLjZdLFxuICAgICAgICBsb3NzOiBiYXNlTG9zc1xuICAgIH0sXG4gICAgYm93bDoge1xuICAgICAgICBuYW1lOiBcImJvd2xcIixcbiAgICAgICAgZjogIHggPT4gTWF0aC5zaW5oKHgvMyksXG4gICAgICAgIGRmOiB4ID0+IE1hdGguY29zaCh4LzMpLzMsXG4gICAgICAgIHhyYW5nZTogWy0zICogMywgMyAqIDNdLFxuICAgICAgICB5cmFuZ2U6IFswLCA1MF0sXG4gICAgICAgIGxvc3M6IGJhc2VMb3NzXG4gICAgfSxcbiAgICBkZWVwX25ldDoge1xuICAgICAgICBuYW1lOiBcImRlZXBfbmV0XCIsXG4gICAgICAgIGY6IHggPT4gTWF0aC5wb3coTWF0aC5hYnMoeC8zKzEpLCAzKSAtIDEsICAvLyBkZXB0aCA9IDRcbiAgICAgICAgZGY6IHggPT4gMy8zICogTWF0aC5wb3coTWF0aC5hYnMoeC8zKzEpLCAyKSxcbiAgICAgICAgLy8geHJhbmdlOiBbLTAuNyo0LCAwLjcqNF0sXG4gICAgICAgIHhyYW5nZTogWy0wLjk1KjMsIDAuOTUqM10sXG4gICAgICAgIHlyYW5nZTogWzAsIDRdLFxuICAgICAgICBsb3NzOiBiYXNlTG9zc1xuICAgIH1cbn0iLCJpbXBvcnQgKiBhcyB0cCBmcm9tIFwiLi90eXBlc1wiXG5pbXBvcnQgKiBhcyBuaiBmcm9tIFwibnVtanNcIlxuaW1wb3J0ICogYXMgZDMgZnJvbSBcImQzXCJcbmltcG9ydCB7QmFzZVVwZGF0ZXIyRH0gZnJvbSBcIi4vQmFzZVVwZGF0ZXIyRFwiXG5pbXBvcnQge1NpbXBsZU5ldFVwZGF0ZXJ9IGZyb20gXCIuL1NpbXBsZU5ldFVwZGF0ZXJcIlxuaW1wb3J0IHtVcGRhdGVyMkR9IGZyb20gXCIuL1VwZGF0ZXIyRFwiXG5cbmV4cG9ydCBpbnRlcmZhY2UgTGFuZHNjYXBlMkQge1xuICAgIG5hbWU6IHN0cmluZ1xuICAgIGZcbiAgICBkZlxuICAgIGxvc3NcbiAgICB1cGRhdGVyQ2xhc3NcbiAgICB0YXJnZXQ/XG4gICAgeHJhbmdlOiBbbnVtYmVyLCBudW1iZXJdXG4gICAgeXJhbmdlOiBbbnVtYmVyLCBudW1iZXJdXG4gICAgbkNvbnRvdXJzPzogbnVtYmVyXG4gICAgY29sb3JTY2FsZTogZDMuU2NhbGVMaW5lYXI8bnVtYmVyLCBudW1iZXIgfCBzdHJpbmc+XG59XG5cbmNvbnN0IEEgPSBuai5hcnJheShbWzEsMl0sIFsyLDFdXSlcblxuZXhwb3J0IGNvbnN0IGxhbmRzY2FwZXMyZDogeyBbazogc3RyaW5nXTogTGFuZHNjYXBlMkQgfSA9IHtcbiAgICBTaW1wbGVOZXQyRDoge1xuICAgICAgICBuYW1lOiBcIlNpbXBsZU5ldDJEXCIsXG4gICAgICAgIGY6ICh2OiB0cC5BcnJheSkgPT4gKHYuZ2V0KDApICogdi5nZXQoMSkgLSAxKSxcbiAgICAgICAgZGY6ICh2OiB0cC5BcnJheSkgPT4gbmouYXJyYXkoW3YuZ2V0KDEpLCB2LmdldCgwKV0pLFxuICAgICAgICB1cGRhdGVyQ2xhc3M6IFNpbXBsZU5ldFVwZGF0ZXIsXG4gICAgICAgIGNvbG9yU2NhbGU6IGQzLnNjYWxlTGluZWFyKClcbiAgICAgICAgICAgIC5kb21haW4oWy0xLCAwLCAxLjZdKVxuICAgICAgICAgICAgLy9AdHMtaWdub3JlXG4gICAgICAgICAgICAucmFuZ2UoW1wid2hpdGVcIiwgXCJzdGVlbGJsdWVcIiwgXCJyZWRcIl0pXG4gICAgICAgICAgICAvL0B0cy1pZ25vcmVcbiAgICAgICAgICAgIC5pbnRlcnBvbGF0ZShkMy5pbnRlcnBvbGF0ZVJnYi5nYW1tYSgyLjIpKSxcbiAgICAgICAgeHJhbmdlOiBbMCwgMS42XSxcbiAgICAgICAgeXJhbmdlOiBbMCwgMS42XSxcbiAgICAgICAgbkNvbnRvdXJzOiAyMCxcbiAgICAgICAgbG9zczogeCA9PiB4LFxuICAgIH0sXG5cbiAgICBFbGxpcHRpY2FsOiB7XG4gICAgICAgIG5hbWU6IFwiRWxsaXB0aWNhbFwiLFxuICAgICAgICAvL0B0cy1pZ25vcmVcbiAgICAgICAgZjogKHY6IHRwLkFycmF5KSA9PiBuai5kb3QoQSwgdiksXG4gICAgICAgIC8vQHRzLWlnbm9yZVxuICAgICAgICBkZjogKHY6IHRwLkFycmF5KSA9PiBBLFxuICAgICAgICB1cGRhdGVyQ2xhc3M6IFVwZGF0ZXIyRCxcbiAgICAgICAgdGFyZ2V0OiBuai5hcnJheShbMCwwXSksXG4gICAgICAgIGNvbG9yU2NhbGU6IGQzLnNjYWxlUG93KClcbiAgICAgICAgICAgIC5leHBvbmVudCgwLjUpXG4gICAgICAgICAgICAuZG9tYWluKFswLCAzNl0pXG4gICAgICAgICAgICAvL0B0cy1pZ25vcmVcbiAgICAgICAgICAgIC5yYW5nZShbXCJzdGVlbGJsdWVcIiwgXCJ3aGl0ZVwiXSlcbiAgICAgICAgICAgIC8vQHRzLWlnbm9yZVxuICAgICAgICAgICAgLmludGVycG9sYXRlKGQzLmludGVycG9sYXRlUmdiLmdhbW1hKDIuMikpLFxuICAgICAgICB4cmFuZ2U6IFstMiwgMl0sXG4gICAgICAgIHlyYW5nZTogWy0yLCAyXSxcbiAgICAgICAgbkNvbnRvdXJzOiAzMCxcbiAgICAgICAgbG9zczogKGZ2OiB0cC5BcnJheSkgPT4gbmouc3VtKG5qLmRpdmlkZShuai5wb3dlcihmdiwgMiksIDIpKVxuICAgIH0sXG59IiwiaW1wb3J0ICogYXMgZDMgZnJvbSAnZDMnXG5pbXBvcnQgKiBhcyBuaiBmcm9tIFwibnVtanNcIlxuaW1wb3J0ICogYXMgdHAgZnJvbSBcIi4vdHlwZXNcIlxuaW1wb3J0IHsgQXJyYXkgfSBmcm9tIFwiLi90eXBlc1wiXG5pbXBvcnQgeyBCYXNlVXBkYXRlcjJEIH0gZnJvbSBcIi4vQmFzZVVwZGF0ZXIyRFwiXG5cbmV4cG9ydCBjbGFzcyBTaW1wbGVOZXRVcGRhdGVyIGV4dGVuZHMgQmFzZVVwZGF0ZXIyRCB7XG4gICAgZWlnZW52YWx1ZXModjogQXJyYXkpOiBBcnJheSB7XG4gICAgICAgIGNvbnN0IGV4ID0gbmoucG93ZXIodiwgMikuc3VtKClcbiAgICAgICAgY29uc3QgZXkgPSBuai5wb3dlcih2LCAyKS5zdW0oKVxuICAgICAgICByZXR1cm4gbmouYXJyYXkoW2V4LCBleV0pXG4gICAgfVxuXG4gICAgZHYodjogQXJyYXkpOiBBcnJheSB7XG4gICAgICAgIGNvbnN0IGcgPSB0aGlzLmdyYWRpZW50KHYpXG4gICAgICAgIGNvbnN0IGV2ID0gdGhpcy5laWdlbnZhbHVlcyh2KVxuXG4gICAgICAgIGNvbnN0IG1vZEV2cyA9IG5qLmFicyhuai5wb3dlcihldiwgdGhpcy5vcC5xKSlcbiAgICAgICAgY29uc3QgZHY6IEFycmF5ID0gbmouZGl2aWRlKGcsIG1vZEV2cylcbiAgICAgICAgcmV0dXJuIGR2XG4gICAgfVxuXG4gICAgLy8gQ29udmVydCB0byBibG9jayBkaWFnb25hbCB1cGRhdGVyXG4gICAgdG9CbG9jaygpOiBCbG9ja1NpbXBsZU5ldFVwZGF0ZXIge1xuICAgICAgICBjb25zdCBibG9ja1VwZGF0ZXIgPSBuZXcgQmxvY2tTaW1wbGVOZXRVcGRhdGVyKHRoaXMub3ApXG4gICAgICAgIHJldHVybiBibG9ja1VwZGF0ZXJcbiAgICB9XG5cbiAgICAvLyBDcmVhdGUgYSBuZXcgZnVsbCB1cGRhdGVyIGZyb20gdGhpcyBvYmplY3QuIFVzZWZ1bCBpZiBvbmUgb2YgdGhlIGRlcml2ZWQgY2xhc3NlcyBuZWVkcyB0byBpbXBsZW1lbnRcbiAgICB0b0Z1bGwoKTogU2ltcGxlTmV0VXBkYXRlciB7XG4gICAgICAgIGNvbnN0IGZ1bGxVcGRhdGVyID0gbmV3IFNpbXBsZU5ldFVwZGF0ZXIodGhpcy5vcClcbiAgICAgICAgcmV0dXJuIGZ1bGxVcGRhdGVyXG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgQmxvY2tTaW1wbGVOZXRVcGRhdGVyIGV4dGVuZHMgU2ltcGxlTmV0VXBkYXRlciB7XG4gICAgZWlnZW52YWx1ZXModjogQXJyYXkpOiBBcnJheSB7XG4gICAgICAgIHJldHVybiBuai5tdWx0aXBseShuai5wb3dlcih0aGlzLm9wLmRmKHYpLCAyKSwgMilcbiAgICB9XG59IiwiaW1wb3J0ICogYXMgZDMgZnJvbSAnZDMnXG5pbXBvcnQgKiBhcyBuaiBmcm9tIFwibnVtanNcIlxuaW1wb3J0ICogYXMgdHAgZnJvbSBcIi4vdHlwZXNcIlxuaW1wb3J0IHsgQXJyYXkgfSBmcm9tIFwiLi90eXBlc1wiXG5pbXBvcnQgeyBCYXNlVXBkYXRlcjJEIH0gZnJvbSBcIi4vQmFzZVVwZGF0ZXIyRFwiXG5cbi8vIGNvbnN0IGRlZmF1bHRFcnJvckZ1bmN0aW9uID0gKHY6IEFycmF5KSA9PiB2LmdldCgwKSAqIHYuZ2V0KDEpIC0gMVxuY29uc3QgZGVmYXVsdEVycm9yRnVuY3Rpb24gPSB2ID0+IHtcbiAgICByZXR1cm4gbmouZG90KG5qLmFycmF5KFtbMSwgMl0sIFsyLCAxXV0pLCB2KVxufVxuY29uc3QgZGVmYXVsdERmRnVuY3Rpb24gPSB2ID0+IG5qLmFycmF5KFtbMSwgMl0sIFsyLCAxXV0pXG5jb25zdCBkZWZhdWx0U3RlcDJMcjogZDMuU2NhbGVMaW5lYXI8bnVtYmVyLCBudW1iZXI+ID0gZDMuc2NhbGVMaW5lYXIoKS5kb21haW4oWzAsIDAuOF0pLnJhbmdlKFswLjAwMSwgMC4yNV0pXG5jb25zdCBkZWZhdWx0TG9zcyA9IGZ2ID0+IG5qLnN1bShuai5kaXZpZGUobmoucG93ZXIoZnYsIDIpLCAyKSlcblxuaW50ZXJmYWNlIFVwZGF0ZXJPcHRpb25zIHtcbiAgICBkZlxuICAgIHRhcmdldFxuICAgIGZcbiAgICBxOiBudW1iZXIgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gMCAtPiAxLCB3aGVyZSAwIGlzIFNHRCBhbmQgMSBpcyBOR0QuIDAuNSBpcyBzcXJ0IE5HRC4gW3N0ZXAgPSAtIGV0YSAqIEggXiAoLTEvcSkgKiBnXSAoSCA9IDAgd2hlbiBxPTApXG4gICAgZXRhOiBudW1iZXIgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGFrYSAnbGVhcm5pbmcgcmF0ZSdcbiAgICBzdGVwMmxyOiBkMy5TY2FsZUxpbmVhcjxudW1iZXIsIG51bWJlcj5cbiAgICBsb3NzXG59XG5cbmZ1bmN0aW9uIGdldE9ydGhNYXRyaXgoUykge1xuICAgIGNvbnN0IHRoZXRhID0gMC41ICogTWF0aC5hdGFuMihTLmdldCgwLDEpICsgUy5nZXQoMSwwKSwgUy5nZXQoMCwwKSAtIFMuZ2V0KDEsMSkpXG4gICAgY29uc3QgY29zID0gTWF0aC5jb3ModGhldGEpXG4gICAgY29uc3Qgc2luID0gTWF0aC5zaW4odGhldGEpXG4gICAgcmV0dXJuIG5qLmFycmF5KFtbY29zLCAtc2luXSwgW3NpbiwgY29zXV0pXG59XG5cbmludGVyZmFjZSBTVkRSZXN1bHRzIHsgVSwgZCwgViB9XG5cbmZ1bmN0aW9uIFNWRDJkKE0pOiBTVkRSZXN1bHRzIHtcbiAgICBjb25zdCBVID0gZ2V0T3J0aE1hdHJpeChuai5kb3QoTSwgTS5UKSlcbiAgICBsZXQgViA9IGdldE9ydGhNYXRyaXgobmouZG90KE0uVCwgTSkpXG4gICAgY29uc3QgcHJlUHJlRGlhZyA9IG5qLmRvdChNLCBWKVxuICAgIGNvbnN0IHByZURpYWcgPSBuai5kb3QoVS5ULCBuai5kb3QoTSwgVikpXG4gICAgbGV0IGQgPSBuai5hcnJheShbcHJlRGlhZy5nZXQoMCwwKSwgcHJlRGlhZy5nZXQoMSwxKV0pXG4gICAgLy9AdHMtaWdub3JlXG4gICAgY29uc3QgZFNpZ24gPSBkLnRvbGlzdCgpLm1hcCh4ID0+IHggPj0gMCA/IDEgOiAtMSlcbiAgICBWID0gbmouYXJyYXkoVi50b2xpc3QoKS5tYXAoKHJvdywgaSkgPT4ge1xuICAgICAgICByZXR1cm4gcm93Lm1hcCgoeCwgaikgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHggKiBkU2lnbltqXSBcbiAgICAgICAgfSlcbiAgICB9KSlcbiAgICBkID0gbmouYWJzKGQpXG4gICAgcmV0dXJuIHtVLCBkLCBWfVxufVxuXG5leHBvcnQgY2xhc3MgVXBkYXRlcjJEIGV4dGVuZHMgQmFzZVVwZGF0ZXIyRCB7XG4gICAgLy8gU2V0IERlZmF1bHQgT3B0aW9uc1xuICAgIG9wOiBVcGRhdGVyT3B0aW9ucyA9IHtcbiAgICAgICAgLy9AdHMtaWdub3JlXG4gICAgICAgIGY6IGRlZmF1bHRFcnJvckZ1bmN0aW9uLFxuICAgICAgICAvL0B0cy1pZ25vcmVcbiAgICAgICAgZGY6IGRlZmF1bHREZkZ1bmN0aW9uLFxuICAgICAgICB0YXJnZXQ6IG5qLmFycmF5KFswLDBdKSxcbiAgICAgICAgcTogMCxcbiAgICAgICAgZXRhOiAwLjEsXG4gICAgICAgIHN0ZXAybHI6IGRlZmF1bHRTdGVwMkxyLFxuICAgICAgICBsb3NzOiBkZWZhdWx0TG9zcyxcbiAgICB9XG5cbiAgICBlcnJvcih2OiBBcnJheSk6IG5qLk5kQXJyYXk8bnVtYmVyPiB7XG4gICAgICAgIHJldHVybiBuai5zdWJ0cmFjdCh0aGlzLm9wLmYodiksIHRoaXMub3AudGFyZ2V0KVxuICAgIH1cblxuICAgIGR2KHY6IEFycmF5KSB7XG4gICAgICAgIGNvbnN0IGphYyA9IHRoaXMub3AuZGYodilcbiAgICAgICAgY29uc3QgZXJyID0gdGhpcy5lcnJvcih2KVxuICAgICAgICBjb25zdCB7VSwgZCwgVn0gPSBTVkQyZChqYWMpXG5cbiAgICAgICAgY29uc3QgZERhbXAgPSBuai5tdWx0aXBseShkLCBuai5wb3dlcihkLCAtMiAqIHRoaXMub3AucSkpXG5cbiAgICAgICAgY29uc3QgRCA9IG5qLmFycmF5KFtbZERhbXAuZ2V0KDApLCAwXSwgWzAsIGREYW1wLmdldCgxKV1dKVxuICAgICAgICBjb25zdCBwcmVGYWMgPSBuai5kb3QoVSwgRClcbiAgICAgICAgY29uc3QgcG9zdEZhYyA9IG5qLmRvdChWLCBlcnIpXG4gICAgICAgIC8vQHRzLWlnbm9yZVxuICAgICAgICBjb25zdCBvdXQgPSBuai5kb3QocHJlRmFjLCBwb3N0RmFjKVxuXG4gICAgICAgIHJldHVybiBvdXRcbiAgICB9XG5cbiAgICAvLyBDb252ZXJ0IHRvIGJsb2NrIGRpYWdvbmFsIHVwZGF0ZXIgLy8gTm90aGluZyBkaWZmZXJlbnQgcm5cbiAgICB0b0Jsb2NrKCk6IEJsb2NrVXBkYXRlcjJEIHtcbiAgICAgICAgY29uc3QgYmxvY2tVcGRhdGVyID0gbmV3IEJsb2NrVXBkYXRlcjJEKHRoaXMub3ApXG4gICAgICAgIHJldHVybiBibG9ja1VwZGF0ZXJcbiAgICB9XG5cbiAgICAvLyBDcmVhdGUgYSBuZXcgZnVsbCB1cGRhdGVyIGZyb20gdGhpcyBvYmplY3QuIFVzZWZ1bCBpZiBvbmUgb2YgdGhlIGRlcml2ZWQgY2xhc3NlcyBuZWVkcyB0byBpbXBsZW1lbnRcbiAgICB0b0Z1bGwoKTogVXBkYXRlcjJEIHtcbiAgICAgICAgY29uc3QgZnVsbFVwZGF0ZXIgPSBuZXcgVXBkYXRlcjJEKHRoaXMub3ApXG4gICAgICAgIHJldHVybiBmdWxsVXBkYXRlclxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIEJsb2NrVXBkYXRlcjJEIGV4dGVuZHMgVXBkYXRlcjJEIHtcbn0iLCJpbXBvcnQgKiBhcyBkMyBmcm9tICdkMydcbmltcG9ydCB7IFVJZCB9IGZyb20gJy4vdXRpbC9VSWQnXG4vLyBpbXBvcnQgeyBDb250b3VyUGxvdCB9IGZyb20gJy4vdmlzL0dlbmVyYWxDb250b3VyUGxvdCdcbmltcG9ydCB7IENvbnRvdXJQbG90IH0gZnJvbSAnLi92aXMvTmV3R2VuZXJhbENvbnRvdXJQbG90J1xuaW1wb3J0IHsgRDNTZWwsIGxpbnNwYWNlIH0gZnJvbSAnLi91dGlsL3hkMydcbmltcG9ydCB7IEdvbGZIb2xlMUQgfSBmcm9tICcuL3Zpcy9Hb2xmSG9sZTFEJ1xuaW1wb3J0IHsgR29sZkxvc3NlcyB9IGZyb20gJy4vdmlzL0dvbGZMb3NzZXMnXG5pbXBvcnQgeyBHb2xmWERpc3QgfSBmcm9tICcuL3Zpcy9Hb2xmWERpc3QnXG5pbXBvcnQgeyBHb2xmQmFsbCB9IGZyb20gJy4vdmlzL0dvbGZCYWxsJ1xuaW1wb3J0IHsgU2ltcGxlTmV0IH0gZnJvbSBcIi4vdmlzL1NpbXBsZU5ldFwiXG5pbXBvcnQgKiBhcyBSIGZyb20gJ3JhbWRhJ1xuaW1wb3J0IHsgU2ltcGxlRXZlbnRIYW5kbGVyIH0gZnJvbSAnLi91dGlsL1NpbXBsZUV2ZW50SGFuZGxlcidcbmltcG9ydCB7IE1hbnVhbFVwZGF0ZXIgfSBmcm9tICcuL3Zpcy9NYW51YWxVcGRhdGVyJ1xuaW1wb3J0IHsgbGFuZHNjYXBlcyB9IGZyb20gJy4vR29sZkxhbmRzY2FwZXMnXG5pbXBvcnQgeyBsYW5kc2NhcGVzMmQgfSBmcm9tICcuL0xhbmRzY2FwZXMyRCdcbmltcG9ydCB7IEFycmF5IH0gZnJvbSAnLi90eXBlcydcbmltcG9ydCB7IFF1YWRyYXRpY1Bsb3RzIH0gZnJvbSBcIi4vdmlzL1F1YWRyYXRpY1Bsb3RzXCJcbmltcG9ydCB7IExvc3NTdXJmYWNlMkQgfSBmcm9tIFwiLi92aXMvTG9zc1N1cmZhY2UyRFwiXG5pbXBvcnQgKiBhcyBuaiBmcm9tIFwibnVtanNcIlxuXG5jb25zdCB0b0ZpeGVkID0gUi5jdXJyeSgobmRpZ2l0cywgeCkgPT4geC50b0ZpeGVkKG5kaWdpdHMpKVxuY29uc3QgdG9RID0gdG9GaXhlZCgxKVxuY29uc3QgdG9FdGEgPSB0b0ZpeGVkKDQpXG5cbmZ1bmN0aW9uIHBsb3RFbGxpcHRpY2FsKCkge1xuICAgIGNvbnN0IHZpczAgPSBkMy5zZWxlY3QoJyN2aXMwJylcbiAgICBjb25zdCBzZWxzID0ge1xuICAgICAgICBxdWl2ZXJQbG90OiB2aXMwLnNlbGVjdCgnI2NoYXJ0JyksXG4gICAgICAgIHFJZDogdmlzMC5zZWxlY3QoJyNxLXZhbCcpLFxuICAgICAgICBldGFJZDogdmlzMC5zZWxlY3QoJyNldGEtdmFsJyksXG4gICAgICAgIHFTbGlkZXI6IHZpczAuc2VsZWN0KCcjcS1zbGlkZXInKSxcbiAgICAgICAgZXRhU2xpZGVyOiB2aXMwLnNlbGVjdCgnI2V0YS1zbGlkZXInKSxcbiAgICAgICAgaGVzc1R5cGU6IHZpczAuc2VsZWN0KCcjaGVzcy10eXBlJyksXG4gICAgfVxuICAgIGNvbnN0IGV2ZW50SGFuZGxlciA9IG5ldyBTaW1wbGVFdmVudEhhbmRsZXIoPEVsZW1lbnQ+dmlzMC5ub2RlKCkpXG5cbiAgICBjb25zdCB2aXpzID0ge1xuICAgICAgICBncmFwaDogQ29udG91clBsb3QuZnJvbUxhbmRzY2FwZShzZWxzLnF1aXZlclBsb3QsIGV2ZW50SGFuZGxlciwgbGFuZHNjYXBlczJkLkVsbGlwdGljYWwpLFxuICAgIH1cblxuICAgIGNvbnN0IGRlZmF1bHRzID0ge1xuICAgICAgICAvLyBOb3RlIHRvIGFsc28gY2hhbmdlIHRoZSBkZWZhdWx0IHZhbHVlIGluIHRoZSBodG1sIGZpbGUhXG4gICAgICAgIHE6IDAsXG4gICAgICAgIGV0YTogMC4wNVxuICAgIH1cblxuICAgIGNvbnN0IHNjYWxlcyA9IHtcbiAgICAgICAgcTogZDMuc2NhbGVMaW5lYXIoKS5yYW5nZShbMCwgMTBdKS5kb21haW4oWzAsIDFdKSxcbiAgICAgICAgZXRhOiBkMy5zY2FsZUxpbmVhcigpLnJhbmdlKFsxLCAxMDAwXSkuZG9tYWluKFtNYXRoLnBvdygxMCwgLTUpLCAwLjZdKVxuICAgIH1cblxuICAgIC8vIEluaXRpYWxpemUgZ3JhcGggcGFyYW1ldGVycyB0byBtYXRjaCB0aGUgZGVmYXVsdHNcbiAgICB2aXpzLmdyYXBoLnEoZGVmYXVsdHMucSlcbiAgICB2aXpzLmdyYXBoLmV0YShkZWZhdWx0cy5ldGEpXG4gICAgc2Vscy5xU2xpZGVyLnByb3BlcnR5KCd2YWx1ZScsIHNjYWxlcy5xKGRlZmF1bHRzLnEpKVxuICAgIHNlbHMuZXRhU2xpZGVyLnByb3BlcnR5KCd2YWx1ZScsIHNjYWxlcy5ldGEoZGVmYXVsdHMuZXRhKSlcblxuICAgIHNlbHMucUlkLnRleHQodG9RKGRlZmF1bHRzLnEpKVxuICAgIHNlbHMuZXRhSWQudGV4dCh0b0V0YShkZWZhdWx0cy5ldGEpKVxuXG4gICAgc2Vscy5xU2xpZGVyLm9uKCdpbnB1dCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc3QgbWUgPSBkMy5zZWxlY3QodGhpcylcbiAgICAgICAgY29uc3QgdiA9IHNjYWxlcy5xLmludmVydCgrbWUucHJvcGVydHkoJ3ZhbHVlJykpO1xuICAgICAgICB2aXpzLmdyYXBoLnEodik7XG4gICAgICAgIHNlbHMucUlkLnRleHQoYCR7dG9RKHYpfWApXG4gICAgfSlcblxuICAgIHNlbHMuZXRhU2xpZGVyLm9uKCdpbnB1dCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc3QgbWUgPSBkMy5zZWxlY3QodGhpcylcbiAgICAgICAgY29uc3QgdiA9IHNjYWxlcy5ldGEuaW52ZXJ0KG1lLnByb3BlcnR5KCd2YWx1ZScpKTtcbiAgICAgICAgdml6cy5ncmFwaC5ldGEodilcbiAgICAgICAgc2Vscy5ldGFJZC50ZXh0KGAke3RvRXRhKHYpfWApXG4gICAgfSlcblxuICAgIHNlbHMuaGVzc1R5cGUub24oJ2lucHV0JywgZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zdCBzZWxmID0gZDMuc2VsZWN0KHRoaXMpXG4gICAgICAgIGNvbnN0IHYgPSBzZWxmLnByb3BlcnR5KCd2YWx1ZScpXG4gICAgICAgIHZpenMuZ3JhcGguc2V0VXBkYXRlcih2KVxuICAgIH0pXG59XG5cbmZ1bmN0aW9uIHBsb3RKYWdnZWRMb3NzMkQoKSB7XG4gICAgY29uc3QgdmlzID0gZDMuc2VsZWN0KFwiI3Zpcy0yZC1sb3NzXCIpXG4gICAgY29uc3QgZXZlbnRIYW5kbGVyID0gbmV3IFNpbXBsZUV2ZW50SGFuZGxlcig8RWxlbWVudD52aXMubm9kZSgpKVxuICAgIGNvbnN0IHNlbHMgPSB7XG4gICAgICAgIHBsb3Q6IHZpcy5zZWxlY3QoXCIjbG9zcy0yZFwiKVxuICAgIH1cblxuICAgIGNvbnN0IHZpenMgPSB7XG4gICAgICAgIHBsb3Q6IG5ldyBMb3NzU3VyZmFjZTJEKHNlbHMucGxvdCwgZXZlbnRIYW5kbGVyKVxuICAgIH1cbn1cblxuZnVuY3Rpb24gcGxvdFF1YWRyYXRpY0Z1bmNzKCkge1xuICAgIGNvbnN0IHZpcyA9IGQzLnNlbGVjdChcIiN2aXMtcXVhZFwiKVxuICAgIGNvbnN0IGV2ZW50SGFuZGxlciA9IG5ldyBTaW1wbGVFdmVudEhhbmRsZXIoPEVsZW1lbnQ+dmlzLm5vZGUoKSlcblxuICAgIGNvbnN0IHNlbHMgPSB7XG4gICAgICAgIHF1YWRQbG90OiB2aXMuc2VsZWN0KFwiI3F1YWQtcGxvdFwiKVxuICAgIH1cblxuICAgIGNvbnN0IHZpenMgPSB7XG4gICAgICAgIHF1YWRQbG90OiBuZXcgUXVhZHJhdGljUGxvdHMoc2Vscy5xdWFkUGxvdCwgZXZlbnRIYW5kbGVyKVxuICAgIH1cblxuICAgIHZpenMucXVhZFBsb3QuZGF0YShbMSAvIDEuNCwgMSwgMS40XSlcbn1cblxuZnVuY3Rpb24gcGxvdFF1aXZlckdyYXBoKCkge1xuICAgIGNvbnN0IHZpczEgPSBkMy5zZWxlY3QoJyN2aXMxJylcbiAgICBjb25zdCBzZWxzID0ge1xuICAgICAgICBxdWl2ZXJQbG90OiB2aXMxLnNlbGVjdCgnI2NoYXJ0JyksXG4gICAgICAgIHFJZDogdmlzMS5zZWxlY3QoJyNxLXZhbCcpLFxuICAgICAgICBldGFJZDogdmlzMS5zZWxlY3QoJyNldGEtdmFsJyksXG4gICAgICAgIHFTbGlkZXI6IHZpczEuc2VsZWN0KCcjcS1zbGlkZXInKSxcbiAgICAgICAgZXRhU2xpZGVyOiB2aXMxLnNlbGVjdCgnI2V0YS1zbGlkZXInKSxcbiAgICAgICAgaGVzc1R5cGU6IHZpczEuc2VsZWN0KCcjaGVzcy10eXBlJyksXG4gICAgICAgIHNpbXBsZU5ldDogdmlzMS5zZWxlY3QoXCIjc2ltcGxlLW5ldC1jb250YWluZXJcIiksXG4gICAgfVxuICAgIGNvbnN0IGV2ZW50SGFuZGxlciA9IG5ldyBTaW1wbGVFdmVudEhhbmRsZXIoPEVsZW1lbnQ+dmlzMS5ub2RlKCkpXG5cbiAgICBjb25zdCB2aXpzID0ge1xuICAgICAgICBncmFwaDogQ29udG91clBsb3QuZnJvbUxhbmRzY2FwZShzZWxzLnF1aXZlclBsb3QsIGV2ZW50SGFuZGxlciwgbGFuZHNjYXBlczJkLlNpbXBsZU5ldDJEKSxcbiAgICAgICAgLy8gZ3JhcGg6IENvbnRvdXJQbG90LmZyb21MYW5kc2NhcGUoc2Vscy5xdWl2ZXJQbG90LCBldmVudEhhbmRsZXIsIGxhbmRzY2FwZXMyZC5FbGxpcHRpY2FsKSwgLy8gQlJPS0VOIFdoeT9cbiAgICAgICAgc2ltcGxlTmV0OiBuZXcgU2ltcGxlTmV0KHNlbHMuc2ltcGxlTmV0LCBldmVudEhhbmRsZXIpXG4gICAgfVxuXG4gICAgY29uc3QgZGVmYXVsdHMgPSB7XG4gICAgICAgIC8vIE5vdGUgdG8gYWxzbyBjaGFuZ2UgdGhlIGRlZmF1bHQgdmFsdWUgaW4gdGhlIGh0bWwgZmlsZSFcbiAgICAgICAgcTogMCxcbiAgICAgICAgZXRhOiAwLjA1XG4gICAgfVxuXG4gICAgY29uc3Qgc2NhbGVzID0ge1xuICAgICAgICBxOiBkMy5zY2FsZUxpbmVhcigpLnJhbmdlKFswLCAxMF0pLmRvbWFpbihbMCwgMV0pLFxuICAgICAgICBldGE6IGQzLnNjYWxlTGluZWFyKCkucmFuZ2UoWzEsIDEwMDBdKS5kb21haW4oW01hdGgucG93KDEwLCAtNSksIDAuNl0pXG4gICAgfVxuXG4gICAgLy8gQWRkIGNlbnRlciBsaW5lXG4gICAgY29uc3QgeHJhbmdlID0gbGluc3BhY2UoMC42LCAxLjYsIHZpenMuZ3JhcGgub3B0aW9ucy5tKVxuICAgIGNvbnN0IGVwcyA9IDAuMDAwMVxuICAgIGNvbnN0IGZpdExpbmUgPSB4ID0+IDEgLyAoeCArIGVwcyk7XG4gICAgY29uc3QgY2VudGVyQ29udG91ciA9IGQzLmxpbmUoKVxuICAgICAgICAueChkID0+IHZpenMuZ3JhcGguc2NhbGVzLnguY2xhbXAodHJ1ZSkoZFswXSkpXG4gICAgICAgIC55KGQgPT4gdml6cy5ncmFwaC5zY2FsZXMueS5jbGFtcCh0cnVlKShmaXRMaW5lKGRbMF0pKSlcblxuICAgIGNvbnN0IG1haW5GaXQgPSB2aXpzLmdyYXBoLmJhc2VcbiAgICAgICAgLmFwcGVuZChcInBhdGhcIilcbiAgICAgICAgLmNsYXNzZWQoXCJtYWluLWZpdFwiLCB0cnVlKVxuICAgICAgICAvLyBpIGRvZXNuJ3QgbWF0dGVyLCBuZWVkIGZpbGxlciBmb3IgbGluZSB0byB3b3JrXG4gICAgICAgIC5hdHRyKFwiZFwiLCBjZW50ZXJDb250b3VyKHhyYW5nZS5tYXAoKHgsIGkpID0+IFt4LCBpXSkpKVxuXG4gICAgLy8gSW5pdGlhbGl6ZSBncmFwaCBwYXJhbWV0ZXJzIHRvIG1hdGNoIHRoZSBkZWZhdWx0c1xuICAgIHZpenMuZ3JhcGgucShkZWZhdWx0cy5xKVxuICAgIHZpenMuZ3JhcGguZXRhKGRlZmF1bHRzLmV0YSlcbiAgICBzZWxzLnFTbGlkZXIucHJvcGVydHkoJ3ZhbHVlJywgc2NhbGVzLnEoZGVmYXVsdHMucSkpXG4gICAgc2Vscy5ldGFTbGlkZXIucHJvcGVydHkoJ3ZhbHVlJywgc2NhbGVzLmV0YShkZWZhdWx0cy5ldGEpKVxuXG4gICAgc2Vscy5xSWQudGV4dCh0b1EoZGVmYXVsdHMucSkpXG4gICAgc2Vscy5ldGFJZC50ZXh0KHRvRXRhKGRlZmF1bHRzLmV0YSkpXG5cbiAgICBzZWxzLnFTbGlkZXIub24oJ2lucHV0JywgZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zdCBtZSA9IGQzLnNlbGVjdCh0aGlzKVxuICAgICAgICBjb25zdCB2ID0gc2NhbGVzLnEuaW52ZXJ0KCttZS5wcm9wZXJ0eSgndmFsdWUnKSk7XG4gICAgICAgIHZpenMuZ3JhcGgucSh2KTtcbiAgICAgICAgc2Vscy5xSWQudGV4dChgJHt0b1Eodil9YClcbiAgICB9KVxuXG4gICAgc2Vscy5ldGFTbGlkZXIub24oJ2lucHV0JywgZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zdCBtZSA9IGQzLnNlbGVjdCh0aGlzKVxuICAgICAgICBjb25zdCB2ID0gc2NhbGVzLmV0YS5pbnZlcnQobWUucHJvcGVydHkoJ3ZhbHVlJykpO1xuICAgICAgICB2aXpzLmdyYXBoLmV0YSh2KVxuICAgICAgICBzZWxzLmV0YUlkLnRleHQoYCR7dG9FdGEodil9YClcbiAgICB9KVxuXG4gICAgc2Vscy5oZXNzVHlwZS5vbignaW5wdXQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnN0IHNlbGYgPSBkMy5zZWxlY3QodGhpcylcbiAgICAgICAgY29uc3QgdiA9IHNlbGYucHJvcGVydHkoJ3ZhbHVlJylcbiAgICAgICAgdml6cy5ncmFwaC5zZXRVcGRhdGVyKHYpXG4gICAgfSlcblxuICAgIC8vIENhdGNoIGV2ZW50IG9mIHN0ZXBcbiAgICBldmVudEhhbmRsZXIuYmluZChDb250b3VyUGxvdC5ldmVudHMuc3RlcEFkZGVkLCAodjogQXJyYXkpID0+IHtcbiAgICAgICAgdml6cy5zaW1wbGVOZXQuc2V0U3RhdGUodilcbiAgICB9KVxufVxuXG5mdW5jdGlvbiBwbG90R29sZkhvbGUzQmFsbCgpIHtcbiAgICBjb25zdCB2aXMyID0gZDMuc2VsZWN0KFwiI3ZpczJcIik7XG4gICAgY29uc3Qgc2VscyA9IHtcbiAgICAgICAgY2hhcnQ6IHZpczIuc2VsZWN0KCcjY2hhcnQnKSxcbiAgICAgICAgY2hhcnRYRGlzdDogdmlzMi5zZWxlY3QoJyNjaGFydC14ZGlzdCcpLFxuICAgICAgICBjaGFydExvc3NlczogdmlzMi5zZWxlY3QoJyNjaGFydC1sb3NzZXMnKSxcbiAgICAgICAgbGFuZHNjYXBlU2VsZWN0b3I6IHZpczIuc2VsZWN0KCcubGFuZHNjYXBlLXNlbGVjdCcpLFxuICAgIH1cblxuICAgIGNvbnN0IGV2ZW50SGFuZGxlciA9IG5ldyBTaW1wbGVFdmVudEhhbmRsZXIoPEVsZW1lbnQ+dmlzMi5ub2RlKCkpXG4gICAgY29uc3Qgdml6cyA9IHtcbiAgICAgICAgZ3JhcGg6IG5ldyBHb2xmSG9sZTFEKHNlbHMuY2hhcnQsIGV2ZW50SGFuZGxlciwge30sIFVJZC51aWQoKSksXG4gICAgICAgIGNoYXJ0WERpc3Q6IG5ldyBHb2xmWERpc3Qoc2Vscy5jaGFydFhEaXN0LCBldmVudEhhbmRsZXIpLFxuICAgICAgICBjaGFydExvc3NlczogbmV3IEdvbGZMb3NzZXMoc2Vscy5jaGFydExvc3NlcywgZXZlbnRIYW5kbGVyKSxcbiAgICB9XG5cbiAgICBpbnRlcmZhY2UgR29sZkRlZmF1bHRzIHtcbiAgICAgICAgbGFuZHNjYXBlOiBzdHJpbmdcbiAgICAgICAgcXM6IG51bWJlcltdXG4gICAgICAgIGNsYXNzTmFtZXM6IHN0cmluZ1tdXG4gICAgICAgIGV0YXM/OiBudW1iZXJbXVxuICAgIH1cblxuICAgIC8vIENvcnJlc3BvbmRzIHRvIHFzID0gWzAsIDAuNSwgMV1cbiAgICBjb25zdCBkZWZhdWx0RXRhID0ge1xuICAgICAgICBzZWFndWxsOiBbMC4wMDUsIDAuMDA1LCAwLjAwNV0sXG4gICAgICAgIGhvbGU6IFswLjAwNSwgMC4wMDUsIDAuMDA1XSxcbiAgICAgICAgc3RlcHM6IFswLjAwNSwgMC4wMDUsIDAuMDA1XSxcbiAgICAgICAgYm93bDogWzAuMDMsIDAuMDMsIDAuMDNdLFxuICAgICAgICBkZWVwX25ldDogWzAuMDEsIDAuMDEsIDAuMDFdLFxuICAgIH1cblxuICAgIGNvbnN0IGRlZmF1bHRzOiBHb2xmRGVmYXVsdHMgPSB7XG4gICAgICAgIGxhbmRzY2FwZTogXCJzZWFndWxsXCIsXG4gICAgICAgIHFzOiBbMCwgMC41LCAxXSxcbiAgICAgICAgY2xhc3NOYW1lczogWydnb2xmLWJhbGwtc2dkJywgJ2dvbGYtYmFsbC1zbmdkJywgJ2dvbGYtYmFsbC1uZ2QnXSwgLy8gRG9uJ3QgY2hhbmdlIHRoZXNlIHVubGVzcyB5b3Ugd2FudCB0byBwbGF5IHdpdGggQ1NTISFcbiAgICB9XG4gICAgZGVmYXVsdHMuZXRhcyA9IGRlZmF1bHRFdGFbZGVmYXVsdHMubGFuZHNjYXBlXVxuXG4gICAgY29uc3QgZGVmYXVsdExhbmRzY2FwZSA9IGxhbmRzY2FwZXNbZGVmYXVsdHMubGFuZHNjYXBlXVxuXG4gICAgLy9AdHMtaWdub3JlXG4gICAgY29uc3QgZGVmYXVsdEJhbGxzID0gZDMuemlwKGRlZmF1bHRzLnFzLCBkZWZhdWx0cy5ldGFzLCBkZWZhdWx0cy5jbGFzc05hbWVzKS5tYXAoKHgpID0+IG5ldyBHb2xmQmFsbChuZXcgTWFudWFsVXBkYXRlcihkZWZhdWx0TGFuZHNjYXBlLmYsIGRlZmF1bHRMYW5kc2NhcGUuZGYsIHhbMF0sIHhbMV0pLCB4WzJdKSlcblxuICAgIHZpenMuZ3JhcGguZGF0YShkZWZhdWx0QmFsbHMpXG5cbiAgICAvLyBBdHRhY2ggZ29sZmJhbGwgaW5mbyB0byBsb3NzIHRyYWNrZXJcbiAgICBldmVudEhhbmRsZXIuYmluZCgnbG9zcy1jbGljaycsIChlKSA9PiB7XG4gICAgICAgIHZpenMuY2hhcnRYRGlzdC5jbGVhclBhdGhzKClcbiAgICAgICAgdml6cy5jaGFydExvc3Nlcy5jbGVhclBhdGhzKClcbiAgICB9KVxuXG4gICAgLy8gQ29uZmlndXJlIGh0bWwgcGFnZSB0byB3b3JrIHdpdGggZGVmYXVsdHNcbiAgICBzZWxzLmxhbmRzY2FwZVNlbGVjdG9yLnByb3BlcnR5KCd2YWx1ZScsIGRlZmF1bHRzLmxhbmRzY2FwZSlcbiAgICB2aXpzLmdyYXBoLmxhbmRzY2FwZShsYW5kc2NhcGVzW2RlZmF1bHRzLmxhbmRzY2FwZV0pXG5cbiAgICBsZXQgcnVubmluZ1N0cmVhbXMgPSBbXVxuXG4gICAgLy8gQXNzaWduIHN0cmVhbXNcbiAgICBjb25zdCBhc3NpZ25TdHJlYW1zID0gKGdyYXBoOiBHb2xmSG9sZTFELCBjdXJyZW50U3RyZWFtcyA9IFtdKSA9PiB7XG4gICAgICAgIGNvbnN0IHN0cmVhbXMgPSBncmFwaC5kYXRhKCkubWFwKGIgPT4gYi5zdHJlYW0pXG5cbiAgICAgICAgY29uc3QgcGxvdHRlciA9IHtcbiAgICAgICAgICAgIG5leHQ6IGQgPT4ge1xuICAgICAgICAgICAgICAgIHZpenMuY2hhcnRYRGlzdC5wbG90UGF0aChkLCBncmFwaC5zY2FsZXMuYmFzZTJtYXRoLnguaW52ZXJ0KVxuICAgICAgICAgICAgICAgIHZpenMuY2hhcnRMb3NzZXMucGxvdFBhdGgoZCwgZ3JhcGguc2NhbGVzLmJhc2UybG9zcylcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGN1cnJlbnRTdHJlYW1zLmZvckVhY2gocyA9PiBzLnVuc3Vic2NyaWJlKCkpXG5cbiAgICAgICAgY29uc3QgYWN0aXZhdGVkU3RyZWFtcyA9IHN0cmVhbXMubWFwKHMgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHMuc3Vic2NyaWJlKHBsb3R0ZXIpXG4gICAgICAgIH0pXG4gICAgICAgIHJldHVybiBhY3RpdmF0ZWRTdHJlYW1zXG4gICAgfVxuXG4gICAgLy8gR2F0aGVyIGludGVyYWN0aXZpdHkgZm9yIHRoZSBnb2xmIGJhbGwgcGxvdFxuICAgIHNlbHMubGFuZHNjYXBlU2VsZWN0b3Iub24oJ2lucHV0JywgZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zdCBzZWxmID0gZDMuc2VsZWN0KHRoaXMpXG4gICAgICAgIGNvbnN0IHYgPSBzZWxmLnByb3BlcnR5KCd2YWx1ZScpXG4gICAgICAgIHZpenMuY2hhcnRMb3NzZXMucmVzZXRYcmFuZ2VfKClcbiAgICAgICAgdml6cy5jaGFydFhEaXN0LnJlc2V0WHJhbmdlXygpXG4gICAgICAgIHZpenMuZ3JhcGgubGFuZHNjYXBlKGxhbmRzY2FwZXNbdl0pXG4gICAgICAgIHZpenMuZ3JhcGguZGF0YUZyb21CYXNlKHZpenMuZ3JhcGguZGF0YVRvQmFzZV8oKSlcbiAgICAgICAgcnVubmluZ1N0cmVhbXMgPSBhc3NpZ25TdHJlYW1zKHZpenMuZ3JhcGgsIHJ1bm5pbmdTdHJlYW1zKVxuICAgIH0pXG4gICAgcnVubmluZ1N0cmVhbXMgPSBhc3NpZ25TdHJlYW1zKHZpenMuZ3JhcGgsIHJ1bm5pbmdTdHJlYW1zKVxufVxuXG5mdW5jdGlvbiBwbG90R29sZkhvbGVTbGlkZXIoKSB7XG4gICAgY29uc3QgdmlzMyA9IGQzLnNlbGVjdChcIiN2aXMzXCIpO1xuXG4gICAgY29uc3Qgc2VscyA9IHtcbiAgICAgICAgY2hhcnQ6IHZpczMuc2VsZWN0KCcjY2hhcnQnKSxcbiAgICAgICAgY2hhcnRMb3NzZXM6IHZpczMuc2VsZWN0KCcjY2hhcnQtbG9zc2VzJyksXG4gICAgICAgIGNoYXJ0WERpc3Q6IHZpczMuc2VsZWN0KCcjY2hhcnQteGRpc3QnKSxcbiAgICAgICAgcUlkOiB2aXMzLnNlbGVjdCgnI3EtdmFsJyksXG4gICAgICAgIGV0YUlkOiB2aXMzLnNlbGVjdCgnI2V0YS12YWwnKSxcbiAgICAgICAgcVNsaWRlcjogdmlzMy5zZWxlY3QoJyNxLXNsaWRlcicpLFxuICAgICAgICBldGFTbGlkZXI6IHZpczMuc2VsZWN0KCcjZXRhLXNsaWRlcicpLFxuICAgICAgICBsYW5kc2NhcGVTZWxlY3RvcjogdmlzMy5zZWxlY3QoJy5sYW5kc2NhcGUtc2VsZWN0JylcbiAgICB9XG5cbiAgICBjb25zdCBldmVudEhhbmRsZXIgPSBuZXcgU2ltcGxlRXZlbnRIYW5kbGVyKDxFbGVtZW50PnZpczMubm9kZSgpKVxuXG4gICAgY29uc3Qgdml6cyA9IHtcbiAgICAgICAgZ3JhcGg6IG5ldyBHb2xmSG9sZTFEKHNlbHMuY2hhcnQsIGV2ZW50SGFuZGxlciwgeyBtYXhJdGVyOiAxLjVlMyB9LCBVSWQudWlkKCkpLFxuICAgICAgICBjaGFydExvc3NlczogbmV3IEdvbGZMb3NzZXMoc2Vscy5jaGFydExvc3NlcywgZXZlbnRIYW5kbGVyKSxcbiAgICAgICAgY2hhcnRYRGlzdDogbmV3IEdvbGZYRGlzdChzZWxzLmNoYXJ0WERpc3QsIGV2ZW50SGFuZGxlcilcbiAgICB9XG5cbiAgICBjb25zdCBkZWZhdWx0cyA9IHtcbiAgICAgICAgLy8gTm90ZSB0byBhbHNvIGNoYW5nZSB0aGUgZGVmYXVsdCB2YWx1ZSBpbiB0aGUgaHRtbCBmaWxlIVxuICAgICAgICBsYW5kc2NhcGU6IFwic2VhZ3VsbFwiLFxuICAgICAgICBxOiAwLjUsXG4gICAgICAgIGV0YTogMC4wMVxuICAgIH1cblxuICAgIC8vIEF0dGFjaCBnb2xmYmFsbCBpbmZvIHRvIGxvc3MgdHJhY2tlclxuICAgIGV2ZW50SGFuZGxlci5iaW5kKCdsb3NzLWNsaWNrJywgKGUpID0+IHtcbiAgICAgICAgdml6cy5jaGFydFhEaXN0LmNsZWFyUGF0aHMoKVxuICAgICAgICB2aXpzLmNoYXJ0TG9zc2VzLmNsZWFyUGF0aHMoKVxuICAgIH0pXG5cbiAgICAvLyBQdXQgZGF0YSBpbnRvIHZpelxuICAgIHZpenMuZ3JhcGguZGF0YShbbmV3IEdvbGZCYWxsKG5ldyBNYW51YWxVcGRhdGVyKGxhbmRzY2FwZXMuaG9sZS5mLCBsYW5kc2NhcGVzLmhvbGUuZGYsIGRlZmF1bHRzLnEsIGRlZmF1bHRzLmV0YSksIFwiZ29sZi1iYWxsXCIpXSlcblxuICAgIC8vIGNvbnN0IGV0YVJhbmdlID0gWy01LCAyXS5tYXAoeCA9PiBNYXRoLnBvdygxMCwgeCkpXG4gICAgY29uc3QgZXRhUmFuZ2UgPSBbLTMsIDBdLm1hcCh4ID0+IE1hdGgucG93KDEwLCB4KSlcbiAgICBjb25zdCBzY2FsZXMgPSB7XG4gICAgICAgIHE6IGQzLnNjYWxlTGluZWFyKCkucmFuZ2UoWzAsIDEwXSkuZG9tYWluKFswLCAxXSksXG4gICAgICAgIGV0YTogZDMuc2NhbGVMb2coKS5yYW5nZShbMSwgMTAwMF0pLmRvbWFpbihldGFSYW5nZSkuYmFzZSgxMClcbiAgICB9XG5cbiAgICAvLyBJbml0aWFsaXplIGdyYXBoIHBhcmFtZXRlcnMgdG8gbWF0Y2ggdGhlIGRlZmF1bHRzXG4gICAgdml6cy5ncmFwaC5sYW5kc2NhcGUobGFuZHNjYXBlc1tkZWZhdWx0cy5sYW5kc2NhcGVdKVxuICAgIHNlbHMubGFuZHNjYXBlU2VsZWN0b3IucHJvcGVydHkoJ3ZhbHVlJywgZGVmYXVsdHMubGFuZHNjYXBlKVxuXG4gICAgc2Vscy5xU2xpZGVyLnByb3BlcnR5KCd2YWx1ZScsIHNjYWxlcy5xKGRlZmF1bHRzLnEpKVxuICAgIHNlbHMuZXRhU2xpZGVyLnByb3BlcnR5KCd2YWx1ZScsIHNjYWxlcy5ldGEoZGVmYXVsdHMuZXRhKSlcbiAgICBzZWxzLnFJZC50ZXh0KHRvUShkZWZhdWx0cy5xKSlcbiAgICBzZWxzLmV0YUlkLnRleHQodG9FdGEoZGVmYXVsdHMuZXRhKSlcblxuICAgIC8vIEFzc2lnbiBzdHJlYW1zXG4gICAgbGV0IHJ1bm5pbmdTdHJlYW1zID0gW11cbiAgICBjb25zdCBhc3NpZ25TdHJlYW1zID0gKGdyYXBoOiBHb2xmSG9sZTFELCBjdXJyZW50U3RyZWFtcyA9IFtdKSA9PiB7XG4gICAgICAgIGNvbnN0IHN0cmVhbXMgPSBncmFwaC5kYXRhKCkubWFwKGIgPT4gYi5zdHJlYW0pXG5cbiAgICAgICAgY29uc3QgcGxvdHRlciA9IHtcbiAgICAgICAgICAgIG5leHQ6IGQgPT4ge1xuICAgICAgICAgICAgICAgIHZpenMuY2hhcnRYRGlzdC5wbG90UGF0aChkLCBncmFwaC5zY2FsZXMuYmFzZTJtYXRoLnguaW52ZXJ0KVxuICAgICAgICAgICAgICAgIHZpenMuY2hhcnRMb3NzZXMucGxvdFBhdGgoZCwgZ3JhcGguc2NhbGVzLmJhc2UybG9zcylcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGN1cnJlbnRTdHJlYW1zLmZvckVhY2gocyA9PiBzLnVuc3Vic2NyaWJlKCkpXG5cbiAgICAgICAgY29uc3QgYWN0aXZhdGVkU3RyZWFtcyA9IHN0cmVhbXMubWFwKHMgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHMuc3Vic2NyaWJlKHBsb3R0ZXIpXG4gICAgICAgIH0pXG5cbiAgICAgICAgcmV0dXJuIGFjdGl2YXRlZFN0cmVhbXNcbiAgICB9XG5cbiAgICAvLyBBZGp1c3Qgc2xpZGVyIHJlYWN0aXZpdHlcbiAgICBzZWxzLnFTbGlkZXIub24oJ2lucHV0JywgZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zdCBtZSA9IGQzLnNlbGVjdCh0aGlzKVxuICAgICAgICBjb25zdCB2ID0gc2NhbGVzLnEuaW52ZXJ0KG1lLnByb3BlcnR5KCd2YWx1ZScpKTtcbiAgICAgICAgdml6cy5ncmFwaC5xKHYpXG4gICAgICAgIHNlbHMucUlkLnRleHQoYCR7dG9RKHYpfWApXG4gICAgfSlcblxuICAgIHNlbHMuZXRhU2xpZGVyLm9uKCdpbnB1dCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc3QgbWUgPSBkMy5zZWxlY3QodGhpcylcbiAgICAgICAgY29uc3QgdiA9IHNjYWxlcy5ldGEuaW52ZXJ0KG1lLnByb3BlcnR5KCd2YWx1ZScpKTtcbiAgICAgICAgdml6cy5ncmFwaC5ldGEodilcbiAgICAgICAgc2Vscy5ldGFJZC50ZXh0KGAke3RvRXRhKHYpfWApXG4gICAgfSlcblxuICAgIHNlbHMubGFuZHNjYXBlU2VsZWN0b3Iub24oJ2lucHV0JywgZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zdCBzZWxmID0gZDMuc2VsZWN0KHRoaXMpXG4gICAgICAgIGNvbnN0IHYgPSBzZWxmLnByb3BlcnR5KCd2YWx1ZScpXG4gICAgICAgIHZpenMuY2hhcnRMb3NzZXMucmVzZXRYcmFuZ2VfKClcbiAgICAgICAgdml6cy5jaGFydFhEaXN0LnJlc2V0WHJhbmdlXygpXG4gICAgICAgIHZpenMuZ3JhcGgubGFuZHNjYXBlKGxhbmRzY2FwZXNbdl0pXG4gICAgICAgIHZpenMuZ3JhcGguZGF0YUZyb21CYXNlKHZpenMuZ3JhcGguZGF0YVRvQmFzZV8oKSlcbiAgICAgICAgcnVubmluZ1N0cmVhbXMgPSBhc3NpZ25TdHJlYW1zKHZpenMuZ3JhcGgsIHJ1bm5pbmdTdHJlYW1zKVxuICAgIH0pXG4gICAgcnVubmluZ1N0cmVhbXMgPSBhc3NpZ25TdHJlYW1zKHZpenMuZ3JhcGgsIHJ1bm5pbmdTdHJlYW1zKVxufVxuXG5mdW5jdGlvbiB0ZXN0aW5nKCkge1xuICAgIGNvbnNvbGUubG9nKFwiVEVTVFwiKTtcbiAgICAvLyBsZXQgQSA9IG5qLmFycmF5KFtbMSwyXSwgWzIsMV1dKVxuICAgIC8vIGxldCB2ID0gbmouYXJyYXkoWzEsM10pXG4gICAgLy8gY29uc3QgdXAgPSBuZXcgVXBkYXRlcjJEKClcblxuICAgIC8vIGNvbnNvbGUubG9nKFwiTFI6IFwiLCB1cC5scih2KSk7XG4gICAgLy8gY29uc29sZS5sb2coXCJHcmFkaWVudDogXCIsIHVwLmdyYWRpZW50KHYpKTtcbiAgICAvLyBjb25zb2xlLmxvZyhcIkVSUjogXCIsIHVwLl9mKHYpKTtcblxuICAgIC8vIGNvbnNvbGUubG9nKFwiTkogQXJyYXkgSW5jZXB0aW9uOiBcIiwgbmouYXJyYXkodikpXG4gICAgLy8gLy8gbGV0IHYgPSBuai5hcnJheShbMSwyXSlcbiAgICAvLyBsZXQgdjIgPSBuai5hcnJheShbNCw1XSlcbiAgICAvLyBjb25zb2xlLmxvZyh2KTtcblxuICAgIC8vIC8vQHRzLWlnbm9yZVxuICAgIC8vIGNvbnNvbGUubG9nKG5qLmRvdChBLCB2KSk7XG5cbiAgICBjb25zb2xlLmxvZyhcIkVORCBURVNUXCIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWFpbigpIHtcbiAgICB0ZXN0aW5nKClcblxuICAgIHBsb3RRdWFkcmF0aWNGdW5jcygpO1xuICAgIHBsb3RFbGxpcHRpY2FsKCk7XG4gICAgcGxvdFF1aXZlckdyYXBoKCk7XG4gICAgLy8gcGxvdEdvbGZIb2xlM0JhbGwoKTtcbiAgICAvLyBwbG90R29sZkhvbGVTbGlkZXIoKTtcbiAgICAvLyBwbG90SmFnZ2VkTG9zczJEKCk7XG59XG4iLCJpbXBvcnQgKiBhcyBkMyBmcm9tICdkMydcbmltcG9ydCB7IE1hcmdpbkluZm8gfSBmcm9tICcuL3V0aWwvU1ZHVmlzQ29tcG9uZW50J1xuaW1wb3J0IHsgRDNTZWwgfSBmcm9tICcuL3V0aWwveGQzJ1xuaW1wb3J0IHtyYW5nZX0gZnJvbSAncmFtZGEnXG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRTVkcoZGl2OiBzdHJpbmcsIHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyLCBtYXJnaW46IE1hcmdpbkluZm8pOiBEM1NlbCB7XG5cbiAgICB2YXIgc3ZnID0gZDMuc2VsZWN0KGRpdikuYXBwZW5kKFwic3ZnXCIpXG4gICAgICAgIC5hdHRyKFwid2lkdGhcIiwgXCIxMDAlXCIpXG4gICAgICAgIC5hdHRyKFwiaGVpZ2h0XCIsIFwiMTAwJVwiKVxuICAgICAgICAuYXR0cihcInZpZXdCb3hcIiwgXCIwIDAgXCIgKyAod2lkdGggKyBtYXJnaW4ubGVmdCArIG1hcmdpbi5yaWdodCkgKyBcIiBcIiArIChoZWlnaHQgKyBtYXJnaW4udG9wICsgbWFyZ2luLmJvdHRvbSkpXG4gICAgICAgIC5hdHRyKFwicHJlc2VydmVBc3BlY3RSYXRpb1wiLCBcInhNaWRZTWlkIG1lZXRcIilcbiAgICAgICAgLmFwcGVuZChcImdcIilcbiAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgXCJ0cmFuc2xhdGUoXCIgKyBtYXJnaW4ubGVmdCArIFwiLFwiICsgbWFyZ2luLnRvcCArIFwiKVwiKTtcblxuICAgIHJldHVybiBzdmc7XG59XG5cbnR5cGUgRG9tYWluUmFuZ2UgPSBudW1iZXJbXVxuXG4vKipcbiAqIFxuICogQHBhcmFtIG54IE51bWJlciBvZiBncmlkcG9pbnRzIGFsb25nIHhcbiAqIEBwYXJhbSBueSBOdW1iZXIgb2YgZ3JpZHBvaW50cyBhbG9uZyB5XG4gKiBAcGFyYW0geHJhbmdlIFJhbmdlIGFsb25nIHggYXhpc1xuICogQHBhcmFtIHlyYW5nZSBSYW5nZSBhbG9uZyB5IGF4aXNcbiAqIEBwYXJhbSBmdW5jICh4LHkpID0+IG51bWJlciwgZnVuY3Rpb24gdG8gcGxvdFxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q29udG91clZhbHVlcyhueDogbnVtYmVyLCBueTogbnVtYmVyLCB4cmFuZ2U6IERvbWFpblJhbmdlLCB5cmFuZ2U6IERvbWFpblJhbmdlLCBmdW5jOiAoeDogbnVtYmVyLCB5OiBudW1iZXIpID0+IG51bWJlcikge1xuICAgIGxldCB2YWx1ZXMgPSBuZXcgQXJyYXkobnggKiBueSlcblxuICAgIGZvciAodmFyIGogPSAwLjUsIGsgPSAwOyBqIDwgbnk7ICsraikge1xuICAgICAgICBmb3IgKHZhciBpID0gMC41OyBpIDwgbng7ICsraSwgKytrKSB7XG4gICAgICAgICAgICBjb25zdCB4dmFsID0gKChpIC8gbngpICogKHhyYW5nZVsxXSAtIHhyYW5nZVswXSkpICsgeHJhbmdlWzBdO1xuICAgICAgICAgICAgY29uc3QgeXZhbCA9ICgxIC0gKGogLyBueSkpICogKHlyYW5nZVsxXSAtIHlyYW5nZVswXSkgKyB5cmFuZ2VbMF07XG4gICAgICAgICAgICB2YWx1ZXNba10gPSBmdW5jKHh2YWwsIHl2YWwpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbHVlc1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdW5pZm9ybShhLCBiKSB7XG4gICAgcmV0dXJuIE1hdGgucmFuZG9tKCkgKiAoYiAtIGEpICsgYTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdlblVuaWZvcm0oYTpudW1iZXIsIGI6bnVtYmVyLCBuOm51bWJlcikge1xuICAgIHJldHVybiByYW5nZSgwLCBuKS5tYXAoeCA9PiB7cmV0dXJuIHt4OiB1bmlmb3JtKGEsIGIpLCB5OiB1bmlmb3JtKGEsYil9fSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5vcm1hbChtZWFuLCB2YXJpYW5jZSkge1xuICAgIHZhciBzID0gMDtcbiAgICB3aGlsZSAocyA9PSAwIHx8IHMgPiAxKSB7XG4gICAgICAgIHZhciB1ID0gdW5pZm9ybSgtMSwxKSxcbiAgICAgICAgdiA9IHVuaWZvcm0oLTEsMSk7XG4gICAgICAgIHMgPSB1ICogdSArIHYgKiB2O1xuICAgIH1cblxuICAgIHZhciBzdGFuZGFyZCA9IE1hdGguc3FydCgtMiAqIE1hdGgubG9nKHMpIC8gcykgKiB1O1xuICAgIHJldHVybiBtZWFuICsgTWF0aC5zcXJ0KHZhcmlhbmNlKSAqIHN0YW5kYXJkO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2VuTm9ybWFsKG1lYW46bnVtYmVyLCB2YXJpYW5jZTpudW1iZXIsIG46bnVtYmVyKSB7XG4gICAgcmV0dXJuIHJhbmdlKDAsIG4pLm1hcCh4ID0+IHtyZXR1cm4ge3g6IG5vcm1hbChtZWFuLCB2YXJpYW5jZSksIHk6IHVuaWZvcm0obWVhbix2YXJpYW5jZSl9fSlcbn0iLCJpbXBvcnQgKiBhcyBkMyBmcm9tICdkMydcbmltcG9ydCB7IFZlY3RvcjJEIH0gZnJvbSAnLi4vdHlwZXMnXG5pbXBvcnQgeyBTVkdWaXNDb21wb25lbnQsIFNWR09wdGlvbnMsIE1hcmdpbkluZm8gfSBmcm9tIFwiLi9TVkdWaXNDb21wb25lbnRcIlxuXG5leHBvcnQgaW50ZXJmYWNlIENoYXJ0T3B0aW9ucyBleHRlbmRzIFNWR09wdGlvbnMge1xuICAgIHhyYW5nZTogW251bWJlciwgbnVtYmVyXVxuICAgIHlyYW5nZTogW251bWJlciwgbnVtYmVyXVxuICAgIHBhZDogTWFyZ2luSW5mbyAgICAgICAgICAgICAvLyBEaXN0YW5jZSBmcm9tIGVkZ2VzLiBEZW1hcmNhdGUgd2hlbiB0aGluZ3MgYXJlIHRvbyBjbG9zZSB0byB0aGUgZWRnZVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIENoYXJ0U2NhbGVzIHtcbiAgICB4PzogZDMuU2NhbGVMaW5lYXI8bnVtYmVyLCBudW1iZXI+LFxuICAgIHk/OiBkMy5TY2FsZUxpbmVhcjxudW1iZXIsIG51bWJlcj4sXG59XG4vKipcbiAqIENyZWF0ZSBhIGNsYXNzIHRoYXQgY2FuIGJlIHVzZWQgZm9yIHBsb3R0aW5nIGNoYXJ0cyAobGluZSBncmFwaHMsIGJhciBncmFwaHMsIGV0Yy4pLlxuICovXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQ2hhcnQyRDxEYXRhSW50ZXJmYWNlPiBleHRlbmRzIFNWR1Zpc0NvbXBvbmVudDxEYXRhSW50ZXJmYWNlPiB7XG4gICAgb3B0aW9uczogQ2hhcnRPcHRpb25zXG4gICAgc2NhbGVzOiBDaGFydFNjYWxlc1xuXG4gICAgLy8gUHV0IGEgdmVjdG9yIGludG8gdGhlIGNvb3JkaW5hdGUgc3lzdGVtIHVzZWQgYnkgdGhlIHZpc3VhbGl6YXRpb25cbiAgICBpbnRvVmlzKHY6IFZlY3RvcjJEKSB7XG4gICAgICAgIHJldHVybiB7IHg6IHRoaXMuc2NhbGVzLngodi54KSwgeTogdGhpcy5zY2FsZXMueSh2LnkpIH1cbiAgICB9XG5cbiAgICAvLyBUYWtlIGEgdmVjdG9yIGluIHRoZSBjb29yZGluYXRlIHN5c3RlbSBhbmQgcmV0dXJuIGl0IHRvIHRoZSBtYXRoIGNvb3JkaW5hdGVzXG4gICAgaW50b01hdGgodjogVmVjdG9yMkQpIHtcbiAgICAgICAgcmV0dXJuIHsgeDogdGhpcy5zY2FsZXMueC5pbnZlcnQodi54KSwgeTogdGhpcy5zY2FsZXMueS5pbnZlcnQodi55KSB9XG4gICAgfVxuXG4gICAgLy8gSW5zdGFudGlhdGUgdGhlIGF4ZXMgb2YgdGhlIGNoYXJ0LiBSZWltcGxlbWVudCBkZXBlbmRpbmcgb24gaG93IHdlIHdhbnQgdGhlIGF4ZXMgdG8gYXBwZWFyXG4gICAgcHJvdGVjdGVkIGFic3RyYWN0IGNyZWF0ZUF4ZXMoKVxuXG4gICAgLy8gSW5zdGFudGlhdGUgdGhlIHNjYWxlcyBmcm9tIHRoZSB4cmFuZ2UgYW5kIHRoZSB5cmFuZ2VcbiAgICBwcm90ZWN0ZWQgYWJzdHJhY3QgY3JlYXRlU2NhbGVzKClcbn0iLCJpbXBvcnQge1Zpc0NvbXBvbmVudH0gZnJvbSAnLi9WaXNDb21wb25lbnQnXG5pbXBvcnQge1NpbXBsZUV2ZW50SGFuZGxlcn0gZnJvbSAnLi9TaW1wbGVFdmVudEhhbmRsZXInXG5pbXBvcnQge0QzU2VsfSBmcm9tICcuL3hkMydcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEhUTUxWaXNDb21wb25lbnQ8RGF0YUludGVyZmFjZT4gZXh0ZW5kcyBWaXNDb21wb25lbnQ8RGF0YUludGVyZmFjZT4ge1xuXG4gICAgcHJvdGVjdGVkIGNvbnN0cnVjdG9yKGQzcGFyZW50OiBEM1NlbCwgZXZlbnRIYW5kbGVyPzogU2ltcGxlRXZlbnRIYW5kbGVyLCBvcHRpb25zOiB7fSA9IHt9LCBJRD0wKSB7XG4gICAgICAgIHN1cGVyKGQzcGFyZW50LCBldmVudEhhbmRsZXIsIElEKVxuICAgICAgICB0aGlzLmluaXRIVE1MKG9wdGlvbnMpXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTXVzdCBiZSBjYWxsZWQgaW1tZWRpYXRlbHkgYWZ0ZXIgdGhlIGBzdXBlcigpYCBjb25zdHJ1Y3RvciBjYWxsIG9mIGluaGVyZXRpbmcgY2xhc3Nlc1xuICAgICAqIFxuICAgICAqIC0gQ3JlYXRlcyBgYmFzZWAgYXR0cmlidXRlIG9uIHBhcmVudFxuICAgICAqIC0gQWRkIGFkZGl0aW9uYWwgc3RhdGljIGVsZW1lbnRzIGRlZmluZWQgaW4gYGluaXQoKWBcbiAgICAgKi9cbiAgICBpbml0SFRNTChvcHRpb25zOiB7fSA9IHt9KSB7XG4gICAgICAgIHRoaXMudXBkYXRlT3B0aW9ucyhvcHRpb25zKVxuICAgICAgICB0aGlzLmJhc2UgPSB0aGlzLnBhcmVudC5hcHBlbmQoJ2RpdicpXG4gICAgfVxufSIsImltcG9ydCB7IEQzU2VsIH0gZnJvbSBcIi4veGQzXCJcbmltcG9ydCB7IFZpc0NvbXBvbmVudCB9IGZyb20gXCIuL1Zpc0NvbXBvbmVudFwiXG5pbXBvcnQgeyBTaW1wbGVFdmVudEhhbmRsZXIgfSBmcm9tIFwiLi9TaW1wbGVFdmVudEhhbmRsZXJcIjtcbmltcG9ydCB7IFNWRyB9IGZyb20gXCIuL1NWR3BsdXNcIjtcblxuZXhwb3J0IHR5cGUgTWFyZ2luSW5mbyA9IHtcbiAgICB0b3A6bnVtYmVyXG4gICAgcmlnaHQ6bnVtYmVyXG4gICAgYm90dG9tOm51bWJlclxuICAgIGxlZnQ6bnVtYmVyXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU1ZHT3B0aW9ucyB7XG4gICAgbWFyZ2luOiBNYXJnaW5JbmZvXG4gICAgbWF4V2lkdGg6IG51bWJlciAgICAgICAgLy8gVGhlIHRvdGFsIHdpZHRoIG9mIHRoZSBjb21wb25lbnRcbiAgICBtYXhIZWlnaHQ6IG51bWJlciAgICAgICAvLyBUaGUgdG90YWwgaGVpZ2h0IG9mIHRoZSBjb21wb25lbnRcbiAgICB3aWR0aD86IG51bWJlciAgICAgICAgICAvLyBUaGUgdG90YWwgd2lkdGggLSBhcHBsaWNhYmxlIG1hcmdpbnNcbiAgICBoZWlnaHQ/OiBudW1iZXIgICAgICAgICAvLyBUaGUgdG90YWwgaGVpZ2h0IC0gYXBwbGljYWJsZSBtYXJnaW5zXG59XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBTVkdWaXNDb21wb25lbnQ8RGF0YUludGVyZmFjZT4gZXh0ZW5kcyBWaXNDb21wb25lbnQ8RGF0YUludGVyZmFjZT4ge1xuICAgIHByb3RlY3RlZCBzdmc6IEQzU2VsXG4gICAgbGF5ZXJzOiB7IG1haW4/OiBEM1NlbCwgZmc/OiBEM1NlbCwgYmc/OiBEM1NlbCwgW2tleTogc3RyaW5nXTogRDNTZWwgfTtcbiAgICBwcm90ZWN0ZWQgb3B0aW9uczogU1ZHT3B0aW9ucyA9IHtcbiAgICAgICAgbWFyZ2luOiB7IHRvcDogMCwgcmlnaHQ6IDAsIGJvdHRvbTogMCwgbGVmdDogMCB9LFxuICAgICAgICBtYXhXaWR0aDogNDUwLFxuICAgICAgICBtYXhIZWlnaHQ6IDQ1MCxcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgY29uc3RydWN0b3IoZDNwYXJlbnQ6IEQzU2VsLCBldmVudEhhbmRsZXI/OiBTaW1wbGVFdmVudEhhbmRsZXIsIG9wdGlvbnM6IHt9ID0ge30sIElEPTApIHtcbiAgICAgICAgc3VwZXIoZDNwYXJlbnQsIGV2ZW50SGFuZGxlciwgSUQpXG4gICAgfVxuXG4gICAgLyoqIFxuICAgICAqIE11c3QgYmUgY2FsbGVkIGltbWVkaWF0ZWx5IGFmdGVyIHRoZSBgc3VwZXIoKWAgY29uc3RydWN0b3IgY2FsbCBvZiBpbmhlcmV0aW5nIGNsYXNzZXMuXG4gICAgICogXG4gICAgICogLSBDYWxjdWxhdGVzIGhlaWdodCBhbmQgd2lkdGggZm9yIG9wdGlvbnNcbiAgICAgKiAtIEFkZHMgJ3N2ZycgYW5kICdiYXNlJyBvYmplY3RzIHRvIHRoZSBkaXYuXG4gICAgICogLSBBZGRzIGxheWVycyBvbiB0aGUgYmFzZSB0byB3b3JrIHdpdGggaWYgcGFzc2VkXG4gICAgICogLSBSdW5zIGRlZmluZWQgc3RhdGljIGluaXRpYWxpemF0aW9uIGRlZmluZWQgaW4gYGluaXQoKWBcbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgaW5pdFNWRyhvcHRpb25zID0ge30sIGRlZmF1bHRMYXllcnMgPSBbXCJiZ1wiLCBcIm1haW5cIiwgXCJmZ1wiXSkge1xuICAgICAgICB0aGlzLnVwZGF0ZU9wdGlvbnMob3B0aW9ucylcbiAgICAgICAgY29uc3Qgb3AgPSB0aGlzLm9wdGlvbnM7XG4gICAgICAgIG9wLndpZHRoID0gb3AubWF4V2lkdGggLSAob3AubWFyZ2luLmxlZnQgKyBvcC5tYXJnaW4ucmlnaHQpXG4gICAgICAgIG9wLmhlaWdodCA9IG9wLm1heEhlaWdodCAtIChvcC5tYXJnaW4udG9wICsgb3AubWFyZ2luLmJvdHRvbSlcblxuICAgICAgICB0aGlzLnN2ZyA9IHRoaXMucGFyZW50LmFwcGVuZCgnc3ZnJylcbiAgICAgICAgICAgIC5hdHRyKFwid2lkdGhcIiwgXCIxMDAlXCIpXG4gICAgICAgICAgICAuYXR0cihcImhlaWdodFwiLCBcIjEwMCVcIilcbiAgICAgICAgICAgIC5hdHRyKFwidmlld0JveFwiLCBgMCAwICR7b3Aud2lkdGggKyBvcC5tYXJnaW4ubGVmdCArIG9wLm1hcmdpbi5yaWdodH0gJHtvcC5oZWlnaHQgKyBvcC5tYXJnaW4udG9wICsgb3AubWFyZ2luLmJvdHRvbX1gKVxuICAgICAgICAgICAgLmFwcGVuZCgnZycpXG4gICAgICAgICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBTVkcudHJhbnNsYXRlKG9wLm1hcmdpbi5sZWZ0LCBvcC5tYXJnaW4udG9wKSlcblxuICAgICAgICAvLyB0aGlzLnN2ZyA9IFNWRy5hZGRTVkcodGhpcy5wYXJlbnQsIG9wLndpZHRoLCBvcC5oZWlnaHQsIG9wLm1hcmdpbilcbiAgICAgICAgdGhpcy5iYXNlID0gU1ZHLmdyb3VwKHRoaXMuc3ZnLCAnJyk7IC8vIExldCBIVE1MIGF1dGhvciBhc3NpZ24gdGhlIGNsYXNzIG5hbWUgYW5kIElEXG4gICAgICAgIHRoaXMubGF5ZXJzID0ge307XG4gICAgICAgIGlmIChkZWZhdWx0TGF5ZXJzKSB7XG4gICAgICAgICAgICAvLyBjb25zdHJ1Y3Rpb24gb3JkZXIgaXMgaW1wb3J0YW50ICFcbiAgICAgICAgICAgIGRlZmF1bHRMYXllcnMuZm9yRWFjaChsYXllciA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5sYXllcnNbbGF5ZXJdID0gU1ZHLmdyb3VwKHRoaXMuYmFzZSwgbGF5ZXIpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmluaXQoKVxuICAgIH1cbn0iLCJpbXBvcnQgKiBhcyBkMyBmcm9tIFwiZDNcIlxuaW1wb3J0ICogYXMgUiBmcm9tICdyYW1kYSdcbmltcG9ydCB7TWFyZ2luSW5mb30gZnJvbSAnLi9TVkdWaXNDb21wb25lbnQnXG5pbXBvcnQge0QzU2VsfSBmcm9tICcuLi91dGlsL3hkMydcblxuLyoqXG4gKiBDcmVhdGVkIGJ5IGhlbiBvbiA1LzE1LzE3LlxuICogTW9kaWZpZWQgYnkgaG9vIG9uIDQvMTYvMTkuXG4gKi9cblxuZXhwb3J0IGNsYXNzIFNWRyB7XG4gICAgXG4gICAgc3RhdGljIHRyYW5zbGF0ZSh4Om51bWJlciwgeTpudW1iZXIpOnN0cmluZyB7XG4gICAgICAgIHJldHVybiBgdHJhbnNsYXRlKCR7eH0sJHt5fSlgXG4gICAgfVxuXG4gICAgc3RhdGljIHJvdGF0ZShkZWc6bnVtYmVyLCBvcmlnPzp7eDpudW1iZXIsIHk6bnVtYmVyfSk6c3RyaW5nIHtcbiAgICAgICAgaWYgKG9yaWcgPT0gbnVsbCkgXG4gICAgICAgICAgICByZXR1cm4gYHJvdGF0ZSgke2RlZ30pYFxuXG4gICAgICAgIHJldHVybiBgcm90YXRlKCR7ZGVnfSwke29yaWcueH0sJHtvcmlnLnl9KWBcbiAgICB9XG5cbiAgICBzdGF0aWMgc2tldyhkZWd4Om51bWJlciwgZGVneT0wKSB7XG4gICAgICAgIHJldHVybiBgc2tldygke2RlZ3h9LCAke2RlZ3l9KWBcbiAgICB9XG5cbiAgICBzdGF0aWMgc2tld1goZGVnOm51bWJlcikge1xuICAgICAgICByZXR1cm4gYHNrZXdYKCR7ZGVnfSlgXG4gICAgfVxuXG4gICAgc3RhdGljIHNrZXdZKGRlZzpudW1iZXIpIHtcbiAgICAgICAgcmV0dXJuIGBza2V3WSgke2RlZ30pYFxuICAgIH1cblxuICAgIHN0YXRpYyBzY2FsZSh4Om51bWJlciwgeT86bnVtYmVyKTpzdHJpbmcge1xuICAgICAgICBjb25zdCB5c2NhbGUgPSB5ICE9IG51bGwgPyB5IDogeDtcblxuICAgICAgICByZXR1cm4gYHNjYWxlKCR7eH0sICR7eXNjYWxlfSlgXG4gICAgfVxuXG4gICAgc3RhdGljIGdyb3VwKHBhcmVudCwgY2xhc3NlcywgcG9zID0ge3g6IDAsIHk6IDB9KSB7XG4gICAgICAgIHJldHVybiBwYXJlbnQuYXBwZW5kKCdnJylcbiAgICAgICAgICAgIC5hdHRyKCdjbGFzcycsIGNsYXNzZXMpXG4gICAgICAgICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBTVkcudHJhbnNsYXRlKHBvcy54LCBwb3MueSkpXG4gICAgfVxuXG4gICAgc3RhdGljIGFkZFNWRyhwYXJlbnQ6RDNTZWwsIHdpZHRoOm51bWJlciwgaGVpZ2h0Om51bWJlciwgbWFyZ2luOk1hcmdpbkluZm8pOkQzU2VsIHtcblxuICAgICAgICB2YXIgc3ZnID0gcGFyZW50LmFwcGVuZChcInN2Z1wiKVxuICAgICAgICAgICAgLmF0dHIoXCJ3aWR0aFwiLCBcIjEwMCVcIilcbiAgICAgICAgICAgIC5hdHRyKFwiaGVpZ2h0XCIsIFwiMTAwJVwiKVxuICAgICAgICAgICAgLmF0dHIoXCJ2aWV3Qm94XCIsIFwiMCAwIFwiICsgKHdpZHRoICsgbWFyZ2luLmxlZnQgKyBtYXJnaW4ucmlnaHQpICsgXCIgXCIgKyAoaGVpZ2h0ICsgbWFyZ2luLnRvcCArIG1hcmdpbi5ib3R0b20pKVxuICAgICAgICAgICAgLmF0dHIoXCJwcmVzZXJ2ZUFzcGVjdFJhdGlvXCIsIFwieE1pZFlNaWQgbWVldFwiKVxuICAgICAgICAuYXBwZW5kKFwiZ1wiKVxuICAgICAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgU1ZHLnRyYW5zbGF0ZShtYXJnaW4ubGVmdCwgbWFyZ2luLnRvcCkpO1xuXG4gICAgICAgIHJldHVybiBzdmc7XG4gICAgfVxuXG4gICAgc3RhdGljIGFkZEFycm93cyhwYXJlbnQ6RDNTZWwpIHtcbiAgICAgICAgcGFyZW50LmFwcGVuZCgnZGVmcycpXG4gICAgICAgICAgICAuYXBwZW5kKCdtYXJrZXInKVxuICAgICAgICAgICAgLmF0dHIoXCJpZFwiLCBcImFycm93XCIpXG4gICAgICAgICAgICAuYXR0cihcIm1hcmtlclVuaXRzXCIsIFwic3Ryb2tlV2lkdGhcIilcbiAgICAgICAgICAgIC5hdHRyKFwibWFya2VyV2lkdGhcIiwgNS41KVxuICAgICAgICAgICAgLmF0dHIoXCJtYXJrZXJIZWlnaHRcIiwgNS41KVxuICAgICAgICAgICAgLmF0dHIoXCJ2aWV3Qm94XCIsIFwiMCAwIDEyIDEyXCIpXG4gICAgICAgICAgICAuYXR0cihcInJlZlhcIiwgNilcbiAgICAgICAgICAgIC5hdHRyKFwicmVmWVwiLCA2KVxuICAgICAgICAgICAgLmF0dHIoXCJvcmllbnRcIiwgJ2F1dG8nKVxuICAgICAgICAgICAgLmFwcGVuZCgncGF0aCcpXG4gICAgICAgICAgICAuYXR0cignZCcsIFwiTTIsMiBMMTAsNiBMMiwxMCBMNiw2IEwyLDJcIilcbiAgICAgICAgICAgIC8vIC5zdHlsZShcImZpbGw6ICNmMDBcIilcbiAgICB9XG5cbiAgICBzdGF0aWMgaW5zZXJ0QXJyb3cocGFyZW50OkQzU2VsLCB4MTpudW1iZXIsIHkxOm51bWJlciwgeDI6bnVtYmVyLCB5MjpudW1iZXIsIGNvbG9yOnN0cmluZywgd2lkdGg6bnVtYmVyKSB7XG4gICAgICAgIHJldHVybiBwYXJlbnQuYXBwZW5kKFwibGluZVwiKVxuICAgICAgICAgICAgIC5hdHRyKFwieDFcIix4MSkgIFxuICAgICAgICAgICAgIC5hdHRyKFwieTFcIix5MSkgIFxuICAgICAgICAgICAgIC5hdHRyKFwieDJcIix4MikgIFxuICAgICAgICAgICAgIC5hdHRyKFwieTJcIix5MikgIFxuICAgICAgICAgICAgIC5hdHRyKFwic3Ryb2tlXCIsY29sb3IpICBcbiAgICAgICAgICAgICAuYXR0cihcInN0cm9rZS13aWR0aFwiLHdpZHRoKSAgXG4gICAgICAgICAgICAgLmF0dHIoXCJtYXJrZXItZW5kXCIsXCJ1cmwoI2Fycm93KVwiKTsgIFxuICAgIH1cblxuICAgIHN0YXRpYyBtZXNoZ3JpZChueDogbnVtYmVyLCBueTogbnVtYmVyLCB4cmFuZ2U6IG51bWJlcltdLCB5cmFuZ2U6IG51bWJlcltdKSB7XG4gICAgICAgIGNvbnN0IHNjYWxlID0gKHZhbHM6bnVtYmVyW10sIHJhbmdlKSA9PiB2YWxzLm1hcCh2ID0+ICh2ICogKHJhbmdlWzFdIC0gcmFuZ2VbMF0pKSArIHJhbmdlWzBdKTtcblxuICAgICAgICBjb25zdCBwb2ludGlmeSA9ICh4dmFsczpudW1iZXJbXSwgeXZhbHM6bnVtYmVyW10pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG91dCA9IFtdXG4gICAgICAgICAgICB4dmFscy5mb3JFYWNoKHggPT4ge1xuICAgICAgICAgICAgICAgIHl2YWxzLmZvckVhY2goeSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIG91dC5wdXNoKHt4OiB4LCB5OiB5fSlcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIHJldHVybiBvdXRcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHh2YWxzID0gc2NhbGUoUi5yYW5nZSgwLCBueCkubWFwKHggPT4gKHggKyAwLjUpIC8gbngpLCB4cmFuZ2UpXG4gICAgICAgIGNvbnN0IHl2YWxzID0gc2NhbGUoUi5yYW5nZSgwLCBueSkubWFwKHkgPT4gKHkgKyAwLjUpIC8gbnkpLCB5cmFuZ2UpXG4gICAgICAgIHJldHVybiBwb2ludGlmeSh4dmFscywgeXZhbHMpXG4gICAgfVxuXG59XG5cbmV4cG9ydCBjbGFzcyBTVkdNZWFzdXJlbWVudHMge1xuXG4gICAgcHJpdmF0ZSBtZWFzdXJlRWxlbWVudDogZDMuU2VsZWN0aW9uPGFueSwgYW55LCBhbnksIGFueT47XG5cbiAgICBjb25zdHJ1Y3RvcihiYXNlRWxlbWVudCwgY2xhc3NlcyA9ICcnKSB7XG4gICAgICAgIHRoaXMubWVhc3VyZUVsZW1lbnQgPSBiYXNlRWxlbWVudC5hcHBlbmQoJ3RleHQnKVxuICAgICAgICAgICAgLmF0dHIoJ3gnLCAwKVxuICAgICAgICAgICAgLmF0dHIoJ3knLCAtMjApXG4gICAgICAgICAgICAuYXR0cignY2xhc3MnLCBjbGFzc2VzKVxuXG4gICAgfVxuXG4gICAgdGV4dExlbmd0aCh0ZXh0LCBzdHlsZSA9IG51bGwpIHtcbiAgICAgICAgdGhpcy5tZWFzdXJlRWxlbWVudC5hdHRyKCdzdHlsZScsIHN0eWxlKTtcbiAgICAgICAgdGhpcy5tZWFzdXJlRWxlbWVudC50ZXh0KHRleHQpO1xuICAgICAgICBjb25zdCB0bCA9ICg8U1ZHVGV4dEVsZW1lbnQ+IHRoaXMubWVhc3VyZUVsZW1lbnQubm9kZSgpKS5nZXRDb21wdXRlZFRleHRMZW5ndGgoKTtcbiAgICAgICAgdGhpcy5tZWFzdXJlRWxlbWVudC50ZXh0KCcnKTtcblxuICAgICAgICByZXR1cm4gdGw7XG4gICAgfVxufSIsIi8qKlxuICogQ3JlYXRlZCBieSBoZW4gb24gNS8xNS8xNy5cbiAqIE1vZGlmaWVkIGJ5IGhvbyBvbiA0LzE2LzE5LlxuICovXG5leHBvcnQgY2xhc3MgU2ltcGxlRXZlbnRIYW5kbGVyIHtcblxuICAgIGVsZW1lbnQ6IEVsZW1lbnQ7XG4gICAgZXZlbnRMaXN0ZW5lcnM6IG9iamVjdFtdO1xuXG4gICAgY29uc3RydWN0b3IoZWxlbWVudDogRWxlbWVudCkge1xuICAgICAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuICAgICAgICB0aGlzLmV2ZW50TGlzdGVuZXJzID0gW11cbiAgICB9XG5cbiAgICBiaW5kKGV2ZW50TmFtZXM6IHN0cmluZywgZXZlbnRGdW5jdGlvbjogRnVuY3Rpb24pIHtcbiAgICAgICAgZm9yIChjb25zdCBldmVudE5hbWUgb2YgZXZlbnROYW1lcy5zcGxpdCgnICcpKSB7XG4gICAgICAgICAgICB0aGlzLmV2ZW50TGlzdGVuZXJzLnB1c2goe2V2ZW50TmFtZSwgZXZlbnRGdW5jdGlvbn0pO1xuICAgICAgICAgICAgY29uc3QgZXZlbnRGdW5jdGlvbldyYXAgPSBlID0+IGV2ZW50RnVuY3Rpb24oZS5kZXRhaWwsIGUpO1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBldmVudEZ1bmN0aW9uV3JhcCwgZmFsc2UpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0TGlzdGVuZXJzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5ldmVudExpc3RlbmVycztcbiAgICB9XG5cbiAgICB0cmlnZ2VyKGV2ZW50TmFtZTogc3RyaW5nLCBkZXRhaWw6IG9iamVjdCkge1xuICAgICAgICB0aGlzLmVsZW1lbnQuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoZXZlbnROYW1lLCB7ZGV0YWlsfSkpO1xuICAgIH1cbn0iLCJsZXQgdGhlX3VuaXF1ZV9pZF9jb3VudGVyID0gMDtcbmxldCB0aGVfdW5pcXVlX3N0cmluZ19jb3VudGVyID0gMDtcblxuZXhwb3J0IGNsYXNzIFVJZCB7XG4gICAgc3RhdGljIHVpZCgpOiBudW1iZXIge1xuICAgICAgICB0aGVfdW5pcXVlX2lkX2NvdW50ZXIgKz0gMTtcbiAgICAgICAgcmV0dXJuIHRoZV91bmlxdWVfaWRfY291bnRlclxuICAgIH1cbiAgICBzdGF0aWMgc2ltcGxlVUlkKHByZWZpeD0nJyk6IHN0cmluZyB7XG4gICAgICAgIHRoZV91bmlxdWVfc3RyaW5nX2NvdW50ZXIgKz0gMTtcblxuICAgICAgICByZXR1cm4gcHJlZml4ICsgdGhlX3VuaXF1ZV9zdHJpbmdfY291bnRlcjtcbiAgICB9XG59XG4iLCIvKipcbiAqIENyZWF0ZWQgYnkgSGVuZHJpayBTdHJvYmVsdCAoaGVuZHJpay5zdHJvYmVsdC5jb20pIG9uIDEyLzMvMTYuXG4gKiBNb2RpZmllZCBieSBCZW4gSG9vdmVyIG9uIDQvMTYvMjAxOVxuICovXG5pbXBvcnQgeyBEM1NlbCB9IGZyb20gXCIuL3hkM1wiXG5pbXBvcnQgeyBTaW1wbGVFdmVudEhhbmRsZXIgfSBmcm9tIFwiLi9TaW1wbGVFdmVudEhhbmRsZXJcIjtcblxuLyoqXG4gKiBTaG91bGQgaGF2ZSBWQ29tcG9uZW50SFRNTCBhbmQgVkNvbXBvbmVudFNWR1xuICpcbiAqIENvbW1vbiBQcm9wZXJ0aWVzOlxuICogLSBldmVudHNcbiAqIC0gZXZlbnRIYW5kbGVyIChWIGltcG9ydGFudClcbiAqIC0gb3B0aW9ucyAoTWFpbnRhaW5zIHB1YmxpYyBzdGF0ZS4gQ2FuIGV4cG9zZSB0aGVzZSB3aXRoIGdldC9zZXQgZnVuY3Rpb25zIHdpdGggYXV0byB1cGRhdGUpXG4gKiAtIF9jdXJyZW50IChNYWludGFpbnMgcHJpdmF0ZSBzdGF0ZSlcbiAqIC0gY3NzTmFtZSAoc3luY2VkIHdpdGggY29ycmVzcG9uZGluZyBDU1MgZmlsZSlcbiAqIC0gcGFyZW50IChIVE1MIGlzIGRpdiBjb250YWluaW5nIHRoZSBiYXNlLCBTVkcgaXMgU1ZHIGVsZW1lbnQpXG4gKiAtIGJhc2UgKEhUTUwgaXMgZGl2IHdpdGggY3NzX25hbWUgZXN0YWJsaXNoZWQpXG4gKiAtIF9kYXRhIChEYXRhIHVzZWQgdG8gY3JlYXRlIGFuZCByZW5kZXIgdGhlIGNvbXBvbmVudClcbiAqIC0gX3JlbmRlckRhdGEgKERhdGEgbmVlZGVkIHRvIGRpc3BsYXkuIFRoaXMgbWF5IG5vdCBiZSBuZWVkZWQsIGJ1dCBpcyBjdXJyZW50bHkgdXNlZCBpbiBoaXN0b2dyYW0pICogKiBDb21tb24gTWV0aG9kczpcbiAqIC0gY29uc3RydWN0b3JcbiAqIC0gX3JlbmRlcigpICAgICAgQ29uc2lkZXIgcmVwbGFjaW5nIHdpdGggYF91cGRhdGVEYXRhKClgIHRoYXQgdXBkYXRlcyBhbGwgZGF0YSBhdCBvbmNlXG4gKiAtIHVwZGF0ZSgpICAgICAgIENvbnNpZGVyIHJlcGxhY2luZyB0aGlzIHdpdGggYGRhdGEoKWAgdGhhdCBhdXRvIHVwZGF0ZXMgZGF0YVxuICogLSByZWRyYXcoKVxuICogLSBkZXN0cm95KClcbiAqL1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgVmlzQ29tcG9uZW50PERhdGFJbnRlcmZhY2U+IHtcbiAgICAvKipcbiAgICAgKiBHaXZlbiBhbiBJRCwgY3JlYXRlIGEgbmV3IGluc3RhbmNlIG9mIHRoaXMgY2xhc3Mgd2l0aCB0aGUgZXZlbnRzIGFuZCBjc3NfbmFtZSBtb2RpZmllZCBieSB0aGUgaWRcbiAgICAgKi9cbiAgICBuZXdJbnN0YW5jZShpZDogbnVtYmVyKSB7IH1cblxuICAgIC8qKlxuICAgICAqIFRoZSBzdGF0aWMgcHJvcGVydHkgdGhhdCBjb250YWlucyBhbGwgY2xhc3MgcmVsYXRlZCBldmVudHMuXG4gICAgICogU2hvdWxkIGJlIG92ZXJ3cml0dGVuIGFuZCBldmVudCBzdHJpbmdzIGhhdmUgdG8gYmUgdW5pcXVlISFcbiAgICAgKi9cblxuICAgIHByb3RlY3RlZCBnZXQgYmFzZU5hbWUoKSB7XG4gICAgICAgIHJldHVybiBgJHt0aGlzLmNzc25hbWV9X0lEJHt0aGlzLklEfWBcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgY3NzbmFtZTogc3RyaW5nOyAgICAgICAgICAgIC8vIE1ha2UgdGhlIHNhbWUgYXMgdGhlIGNvcnJlc3BvbmRpbmcgY3NzIGZpbGVcbiAgICBwcm90ZWN0ZWQgSUQ6IG51bWJlcjsgICAgICAgICAgICAgICAgIC8vIElEIGFzc29jaWF0ZWQgdG8gdW5pcXVlIGluc3RhbmNlIG9mIHZpc3VhbGl6YXRpb24uIERlZmF1bHRzIHRvIDBcblxuICAgIHByb3RlY3RlZCBhYnN0cmFjdCBvcHRpb25zOiB7fTtcbiAgICBwcm90ZWN0ZWQgZXZlbnRIYW5kbGVyOiBTaW1wbGVFdmVudEhhbmRsZXI7XG4gICAgcGFyZW50OiBEM1NlbDsgICAgICAgICAgICAgICAgICAgICAgICAvLyBQYXJlbnQgZDMgc2VsZWN0aW9uXG4gICAgYmFzZTogRDNTZWw7ICAgICAgICAgICAgICAgICAvLyBkMyBzZWxlY3Rpb24gdGhhdCBpcyBjcmVhdGVkIGJ5IHRoZSBpbml0XG4gICAgcHJvdGVjdGVkIF9kYXRhOiBEYXRhSW50ZXJmYWNlO1xuICAgIHByb3RlY3RlZCByZW5kZXJEYXRhOiB1bmtub3duO1xuXG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge0QzU2VsfSBkM3BhcmVudCAgRDMgc2VsZWN0aW9uIG9mIHBhcmVudCBTVkcgRE9NIEVsZW1lbnRcbiAgICAgKiBAcGFyYW0ge1NpbXBsZUV2ZW50SGFuZGxlcn0gZXZlbnRIYW5kbGVyIGEgZ2xvYmFsIGV2ZW50IGhhbmRsZXIgb2JqZWN0IG9yICdudWxsJyBmb3IgbG9jYWwgZXZlbnQgaGFuZGxlclxuICAgICAqL1xuICAgIHByb3RlY3RlZCBjb25zdHJ1Y3RvcihkM3BhcmVudDogRDNTZWwsIGV2ZW50SGFuZGxlcj86IFNpbXBsZUV2ZW50SGFuZGxlciwgSUQgPSAwKSB7XG4gICAgICAgIHRoaXMucGFyZW50ID0gZDNwYXJlbnQ7XG4gICAgICAgIHRoaXMuZXZlbnRIYW5kbGVyID0gZXZlbnRIYW5kbGVyIHx8IG5ldyBTaW1wbGVFdmVudEhhbmRsZXIodGhpcy5wYXJlbnQubm9kZSgpKTtcbiAgICAgICAgdGhpcy5JRCA9IElEO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNob3VsZCBiZSBvdmVyd3JpdHRlbiB0byBjcmVhdGUgbmVlZGVkIHN0YXRpYyBET00gZWxlbWVudHNcbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgYWJzdHJhY3QgaW5pdCgpO1xuXG4gICAgLyoqXG4gICAgICogRm9sbG93IHRoZSBEMyBjb252ZW50aW9uOiByZXRyaWV2ZSB0aGUgZGF0YSBpbnNpZGUgdGhlIGNsYXNzIGlmIG51bGwuIE90aGVyd2lzZSwgc2V0IHRoZSBkYXRhIGFuZCByZXR1cm4gJ3RoaXMnXG4gICAgICovXG4gICAgYWJzdHJhY3QgZGF0YSgpOiBEYXRhSW50ZXJmYWNlO1xuICAgIGFic3RyYWN0IGRhdGEoeDogRGF0YUludGVyZmFjZSk6IHRoaXM7XG5cbiAgICAvKipcbiAgICAgKiBTZXQgbWFueSBvcHRpb25zIGF0IG9uY2VcbiAgICAgKlxuICAgICAqIEBwYXJhbSBvcHRpb25zIFJlc2V0IG9wdGlvbnMgdG8gcGFzc2VkIHZhbHVlc1xuICAgICAqL1xuICAgIHVwZGF0ZU9wdGlvbnMob3B0aW9uczoge30pIHtcbiAgICAgICAgT2JqZWN0LmtleXMob3B0aW9ucykuZm9yRWFjaChrID0+IHRoaXMub3B0aW9uc1trXSA9IG9wdGlvbnNba10pO1xuICAgIH1cblxuICAgIGRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMuYmFzZS5yZW1vdmUoKTtcbiAgICB9XG59IiwiaW1wb3J0ICogYXMgZDMgZnJvbSAnZDMnXG5pbXBvcnQgeyBCYXNlVHlwZSB9IGZyb20gJ2QzJ1xuXG5leHBvcnQgY29uc3QgbGluc3BhY2UgPSAoc3RhcnQsIGVuZCwgbikgPT4ge1xuICAgIGNvbnN0IGRlbHRhID0gKGVuZCAtIHN0YXJ0KSAvIChuIC0gMSlcbiAgICByZXR1cm4gZDMucmFuZ2Uoc3RhcnQsIGVuZCArIGRlbHRhLCBkZWx0YSkuc2xpY2UoMCwgbilcbn1cblxuLyoqXG4gKiBDb252ZXJ0IHZhbHVlcyBzcGFjZWQgZXZlbmx5IG9uIGEgcG93ZXIgc2NhbGUuIFdoZW4gZXhwPTEsIHNhbWUgYXMgbGluc3BhY2VcbiAqL1xuZXhwb3J0IGNvbnN0IHBvd3NwYWNlID0gKHN0YXJ0LCBlbmQsIG4sIGV4cD0xKSA9PiB7XG4gICAgY29uc3Qgc2NhbGUgPSBkMy5zY2FsZVBvdygpLmV4cG9uZW50KGV4cCkuZG9tYWluKFtzdGFydCwgZW5kXSkucmFuZ2UoW3N0YXJ0LCBlbmRdKVxuICAgIHJldHVybiBsaW5zcGFjZShzdGFydCxlbmQsbikubWFwKHggPT4gc2NhbGUoeCkpXG59XG5cbmV4cG9ydCB0eXBlIEQzU2VsID0gZDMuU2VsZWN0aW9uPGFueSwgYW55LCBhbnksIGFueT5cbmV4cG9ydCB0eXBlIGQzUzxUIGV4dGVuZHMgQmFzZVR5cGUsIFUgPSBhbnk+ID0gZDMuU2VsZWN0aW9uPFQsIFUsIGFueSwgYW55PlxuXG5kMy5zZWxlY3Rpb24ucHJvdG90eXBlLmNsZWFyID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuc2VsZWN0QWxsKCcqJykucmVtb3ZlKCk7XG4gICAgcmV0dXJuIHRoaXM7XG59XG5cbmQzLnNlbGVjdGlvbi5wcm90b3R5cGUudG9nZ2xlQ2xhc3MgPSBmdW5jdGlvbiAoY2xhc3NOYW1lKSB7XG4gICAgdGhpcy5jbGFzc2VkKGNsYXNzTmFtZSwgIXRoaXMuY2xhc3NlZChjbGFzc05hbWUpKTtcbiAgICByZXR1cm4gdGhpcztcbn1cblxuZDMuc2VsZWN0aW9uLnByb3RvdHlwZS5zaG93ID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuc3R5bGUoJ2Rpc3BsYXknLCAnaW5pdGlhbCcpO1xuICAgIHJldHVybiB0aGlzO1xufVxuXG5kMy5zZWxlY3Rpb24ucHJvdG90eXBlLmhpZGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5zdHlsZSgnZGlzcGxheScsICdub25lJyk7XG4gICAgcmV0dXJuIHRoaXM7XG59XG5cbmQzLnNlbGVjdGlvbi5wcm90b3R5cGUudG9nZ2xlID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBpc0hpZGRlbiA9IHRoaXMuc3R5bGUoJ2Rpc3BsYXknKSA9PSAnbm9uZSc7XG4gICAgcmV0dXJuIHRoaXMuc3R5bGUoJ2Rpc3BsYXknLCBpc0hpZGRlbiA/ICdpbmhlcml0JyA6ICdub25lJyk7XG59XG5cbmQzLnNlbGVjdGlvbi5wcm90b3R5cGUuYWZ0ZXIgPSBmdW5jdGlvbiAodGFnTmFtZSkge1xuICAgIHZhciBlbGVtZW50cyA9IFtdO1xuXG4gICAgdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZ05hbWUpO1xuICAgICAgICB0aGlzLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGVsZW1lbnQsIHRoaXMubmV4dFNpYmxpbmcpO1xuICAgICAgICBlbGVtZW50cy5wdXNoKGVsZW1lbnQpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGQzLnNlbGVjdEFsbChlbGVtZW50cyk7XG59XG5cbmQzLnNlbGVjdGlvbi5wcm90b3R5cGUuYmVmb3JlID0gZnVuY3Rpb24gKHRhZ05hbWUpIHtcbiAgICB2YXIgZWxlbWVudHMgPSBbXTtcblxuICAgIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWdOYW1lKTtcbiAgICAgICAgdGhpcy5wYXJlbnROb2RlLmluc2VydEJlZm9yZShlbGVtZW50LCB0aGlzKTtcbiAgICAgICAgZWxlbWVudHMucHVzaChlbGVtZW50KTtcbiAgICB9KTtcblxuICAgIHJldHVybiBkMy5zZWxlY3RBbGwoZWxlbWVudHMpO1xufSIsImltcG9ydCAqIGFzIGQzIGZyb20gJ2QzJ1xuaW1wb3J0IHsgTWFudWFsVXBkYXRlciB9IGZyb20gXCIuL01hbnVhbFVwZGF0ZXJcIlxuaW1wb3J0IHsgVmVjdG9yMkQgfSBmcm9tIFwiLi4vdHlwZXNcIlxuaW1wb3J0ICogYXMgUiBmcm9tICdyYW1kYSdcbmltcG9ydCB7IFN1YmplY3QsIEJlaGF2aW9yU3ViamVjdCB9IGZyb20gXCJyeGpzXCJcblxuZXhwb3J0IHR5cGUgQmFsbEhpc3RvcnkgPSB7XG4gICAgY2xhc3NuYW1lOiBzdHJpbmdcbiAgICB4OiBudW1iZXJcbiAgICBsb3NzOiBudW1iZXJcbn1cblxuZXhwb3J0IGNsYXNzIEdvbGZCYWxsIHtcbiAgICBfeDogbnVtYmVyXG4gICAgdXBkYXRlcjogTWFudWFsVXBkYXRlclxuICAgIGNsYXNzbmFtZTogc3RyaW5nXG4gICAgc3RyZWFtOiBTdWJqZWN0PEJhbGxIaXN0b3J5PiAvLyBQdXNoZXMgaGlzdG9yeSBvZiB4IHZhbHVlcyB0byB0aGlzXG5cbiAgICBjb25zdHJ1Y3Rvcih1cGRhdGVyOiBNYW51YWxVcGRhdGVyLCBjbGFzc25hbWU6IHN0cmluZywgeCA9IDApIHtcbiAgICAgICAgdGhpcy51cGRhdGVyID0gdXBkYXRlclxuICAgICAgICB0aGlzLl94ID0geFxuICAgICAgICB0aGlzLmNsYXNzbmFtZSA9IGNsYXNzbmFtZVxuICAgICAgICB0aGlzLnN0cmVhbSA9IG5ldyBTdWJqZWN0KClcbiAgICB9XG5cbiAgICBnZXQgeCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3hcbiAgICB9XG5cbiAgICBzZXQgeCh2OiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5feCA9IHZcbiAgICB9XG5cbiAgICBuZXh0WCgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy51cGRhdGVyLm5leHQodGhpcy5feClcbiAgICB9XG5cbiAgICBuZXh0KCk6IEdvbGZCYWxsIHtcbiAgICAgICAgY29uc3QgbmV4dFggPSB0aGlzLm5leHRYKClcbiAgICAgICAgcmV0dXJuIG5ldyBHb2xmQmFsbCh0aGlzLnVwZGF0ZXIsIHRoaXMuY2xhc3NuYW1lLCB0aGlzLm5leHRYKCkpXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVXNlIHRoZSB1cGRhdGVyIHRvIHRha2UgdGhlIG5leHQgc3RlcFxuICAgICAqIFxuICAgICAqIEBwYXJhbSBmb3JjZVggRm9yY2UgdGhlIG5leHRYIHRvIGJlIG9mIHRoaXMgdmFsdWVcbiAgICAgKi9cbiAgICBzdGVwXyhmb3JjZVg6bnVtYmVyfG51bGw9bnVsbCk6IHRoaXMge1xuICAgICAgICBpZiAoZm9yY2VYICE9IG51bGwpIHRoaXMueCA9IGZvcmNlWFxuICAgICAgICBlbHNlIHRoaXMueCA9IHRoaXMubmV4dFgoKVxuXG4gICAgICAgIHRoaXMuc3RyZWFtLm5leHQoe1xuICAgICAgICAgICAgY2xhc3NuYW1lOiB0aGlzLmNsYXNzbmFtZSxcbiAgICAgICAgICAgIHg6IHRoaXMueCxcbiAgICAgICAgICAgIGxvc3M6IHRoaXMudXBkYXRlci5sb3NzKHRoaXMueClcbiAgICAgICAgfSlcbiAgICAgICAgcmV0dXJuIHRoaXNcbiAgICB9XG5cbiAgICB0b1ZlYyhmOiAoeDogbnVtYmVyKSA9PiBudW1iZXIpOiBWZWN0b3IyRCB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB4OiB0aGlzLl94LFxuICAgICAgICAgICAgeTogZih0aGlzLl94KVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcSgpOiBudW1iZXJcbiAgICBxKHZhbDogbnVtYmVyKTogdGhpc1xuICAgIHEodmFsPykge1xuICAgICAgICBpZiAodmFsID09IG51bGwpIHJldHVybiB0aGlzLnVwZGF0ZXIucVxuICAgICAgICB0aGlzLnVwZGF0ZXIucSA9IHZhbFxuICAgICAgICByZXR1cm4gdGhpc1xuICAgIH1cblxuICAgIGV0YSgpOiBudW1iZXJcbiAgICBldGEodmFsOiBudW1iZXIpOiB0aGlzXG4gICAgZXRhKHZhbD8pIHtcbiAgICAgICAgaWYgKHZhbCA9PSBudWxsKSByZXR1cm4gdGhpcy51cGRhdGVyLmV0YVxuICAgICAgICB0aGlzLnVwZGF0ZXIuZXRhID0gdmFsXG4gICAgICAgIHJldHVybiB0aGlzXG4gICAgfVxufSIsImltcG9ydCAqIGFzIGQzIGZyb20gJ2QzJ1xuaW1wb3J0IHsgRDNTZWwsIGxpbnNwYWNlIH0gZnJvbSAnLi4vdXRpbC94ZDMnXG5pbXBvcnQgKiBhcyBSIGZyb20gJ3JhbWRhJ1xuaW1wb3J0IHsgVmVjdG9yMkQgfSBmcm9tICcuLi90eXBlcydcbmltcG9ydCB7IFNWR09wdGlvbnMsIFNWR1Zpc0NvbXBvbmVudCB9IGZyb20gJy4uL3V0aWwvU1ZHVmlzQ29tcG9uZW50J1xuaW1wb3J0IHsgU2ltcGxlRXZlbnRIYW5kbGVyIH0gZnJvbSAnLi4vdXRpbC9TaW1wbGVFdmVudEhhbmRsZXInO1xuaW1wb3J0IHsgU1ZHIH0gZnJvbSAnLi4vdXRpbC9TVkdwbHVzJ1xuaW1wb3J0IHsgaW50ZXJ2YWwsIGZyb21FdmVudCB9IGZyb20gJ3J4anMnXG5pbXBvcnQgeyB0YWtlLCBzY2FuIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnXG5pbXBvcnQgeyBNYW51YWxVcGRhdGVyIH0gZnJvbSAnLi9NYW51YWxVcGRhdGVyJ1xuaW1wb3J0IHsgR29sZkJhbGwgfSBmcm9tICcuL0dvbGZCYWxsJ1xuaW1wb3J0IHsgbGFuZHNjYXBlcywgTGFuZHNjYXBlLCBiYXNlTG9zcywgZ2V0UGxvdEZ1bmMgfSBmcm9tIFwiLi4vR29sZkxhbmRzY2FwZXNcIjtcblxuXG50eXBlIFQgPSBHb2xmQmFsbFtdXG5cbmludGVyZmFjZSBHcmFwaE9wdGlvbnMgZXh0ZW5kcyBTVkdPcHRpb25zIHtcbiAgICBwYWQ6IG51bWJlclxuICAgIG1heEl0ZXI6IG51bWJlciAvLyBIb3cgbWFueSBpdGVyYXRpb25zIHRvIHRha2U/XG4gICAgbGFuZHNjYXBlOiBMYW5kc2NhcGVcbn1cblxuaW50ZXJmYWNlIFNjYWxlWFkge1xuICAgIHg6IGQzLlNjYWxlTGluZWFyPG51bWJlcixudW1iZXI+XG4gICAgeTogZDMuU2NhbGVMaW5lYXI8bnVtYmVyLG51bWJlcj5cbn1cblxuaW50ZXJmYWNlIEdyYXBoU2NhbGVzIHtcbiAgICBiYXNlMm1hdGg/OiBTY2FsZVhZLFxuICAgIGJhc2UycHg/OiBTY2FsZVhZLFxuICAgIG1hdGgycHg/OiBTY2FsZVhZLFxuICAgIGJhc2UybG9zcz86IGQzLlNjYWxlTGluZWFyPG51bWJlciwgbnVtYmVyPixcbiAgICBwYXRocz86IGQzLkxpbmU8bnVtYmVyPltdLFxuICAgIGNvbG9yPzogZDMuU2NhbGVTZXF1ZW50aWFsPG51bWJlcj4sXG59XG5cbmludGVyZmFjZSBHcmFwaFNlbHMge1xuICAgIHhheGlzPzogRDNTZWxcbiAgICB5YXhpcz86IEQzU2VsXG4gICAgeGxhYmVsPzogRDNTZWxcbiAgICBsaW5lPzogRDNTZWxcbiAgICBiYWNrZHJvcD86IEQzU2VsXG4gICAgYmFsbD86IEQzU2VsXG4gICAgbWFzaz86IEQzU2VsXG4gICAgbWFza0xpbmU/OiBEM1NlbFxuICAgIG1hc2tCYWNrZ3JvdW5kPzogRDNTZWxcbiAgICBsaW5lQmFja2dyb3VuZD86IEQzU2VsXG59XG5cbmxldCBDTEVBUkVEID0gMDtcbi8vIC8vIE5vdGUgdGhhdCBwbG90RnVuYyBpcyB0aGUgbG9zcyBmdW5jdGlvbiB3ZSBwbG90IGFuZCBmdW5jIGlzIHRoZSBjb21wb25lbnQgb2YgdGhlIGxvc3MgZnVuY3Rpb24gbmVlZGVkIGZvciB0aGUgdXBkYXRlclxuLy8gLy8gZXhwb3J0IGNvbnN0IGZ1bmMgPSB4ID0+IE1hdGgudGFuaCh4KVxuLy8gLy8gZXhwb3J0IGNvbnN0IGRGdW5jID0geCA9PiBNYXRoLnBvdyhNYXRoLmNvc2goeCksIC0yKVxuLy8gZXhwb3J0IGNvbnN0IGZ1bmMgPSB4ID0+IE1hdGgudGFuaCh4IC0gMTEpIC8gNCArIE1hdGgudGFuaCh4IC0gNikgLyA0ICsgTWF0aC50YW5oKHgpICsgTWF0aC50YW5oKHggKyA2KSAvIDQgKyBNYXRoLnRhbmgoeCArIDExKSAvIDRcbi8vIGV4cG9ydCBjb25zdCBkRnVuYyA9IHggPT4gTWF0aC5wb3coTWF0aC5jb3NoKHggLSAxMSksIC0yKSAvIDQgKyBNYXRoLnBvdyhNYXRoLmNvc2goeCAtIDYpLCAtMikgLyA0ICsgTWF0aC5wb3coTWF0aC5jb3NoKHgpLCAtMikgKyBNYXRoLnBvdyhNYXRoLmNvc2goeCArIDYpLCAtMikgLyA0ICsgTWF0aC5wb3coTWF0aC5jb3NoKHggKyAxMSksIC0yKSAvIDRcbi8vIC8vIGV4cG9ydCBjb25zdCBmdW5jID0geCA9PiBNYXRoLnNpZ24oeCkgKiAoMSAtICgxIC8gKDEgKyBNYXRoLmFicyh4KSkpKVxuLy8gLy8gZXhwb3J0IGNvbnN0IGRGdW5jID0geCA9PiAxIC8gTWF0aC5wb3coMSArIE1hdGguYWJzKHgpLCAyKVxuXG4vLyBleHBvcnQgY29uc3QgcGxvdEZ1bmMgPSB4ID0+IGJhc2VMb3NzKGZ1bmMoeCkpXG5cbmV4cG9ydCBjbGFzcyBHb2xmSG9sZTFEIGV4dGVuZHMgU1ZHVmlzQ29tcG9uZW50PFQ+IHtcbiAgICBjc3NuYW1lID0gXCJnb2xmLWhvbGUtY2hhcnRcIlxuICAgIG1hc2tJZDogc3RyaW5nXG5cbiAgICBfZGF0YTogVFxuXG4gICAgb3B0aW9uczogR3JhcGhPcHRpb25zID0ge1xuICAgICAgICBtYXhXaWR0aDogNDAwLFxuICAgICAgICBtYXhIZWlnaHQ6IDIwMCxcbiAgICAgICAgbWFyZ2luOiB7IHRvcDogNSwgcmlnaHQ6IDEwLCBib3R0b206IDQwLCBsZWZ0OiAxMCB9LFxuICAgICAgICBwYWQ6IDMwLFxuICAgICAgICBtYXhJdGVyOiA2MDAsXG4gICAgICAgIGxhbmRzY2FwZTogbGFuZHNjYXBlcy5ob2xlXG4gICAgfVxuXG4gICAgc2NhbGVzOiBHcmFwaFNjYWxlcyA9IHt9XG5cbiAgICBzZWxzOiBHcmFwaFNlbHMgPSB7fVxuXG4gICAgY29uc3RydWN0b3IoZDNwYXJlbnQ6IEQzU2VsLCBldmVudEhhbmRsZXI/OiBTaW1wbGVFdmVudEhhbmRsZXIsIG9wdGlvbnMgPSB7fSwgSUQgPSAwKSB7XG4gICAgICAgIHN1cGVyKGQzcGFyZW50LCBldmVudEhhbmRsZXIsIG9wdGlvbnMsIElEKVxuICAgICAgICB0aGlzLm1hc2tJZCA9IGBsaW5lLW1hc2stJHt0aGlzLklEfWBcbiAgICAgICAgc3VwZXIuaW5pdFNWRyhvcHRpb25zLCBbXCJiZ1wiXSlcbiAgICAgICAgdGhpcy5iYXNlLmNsYXNzZWQodGhpcy5jc3NuYW1lLCB0cnVlKVxuXG4gICAgICAgIGNvbnN0IHogPSB0aGlzLm9wdGlvbnMubGFuZHNjYXBlXG4gICAgICAgIFxuICAgICAgICAvLyBOZWVkIHRvIGhhdmUgaW5pdGlhbCBkYXRhXG4gICAgICAgIGNvbnN0IGRhdGEgPSBbXG4gICAgICAgICAgICBuZXcgR29sZkJhbGwobmV3IE1hbnVhbFVwZGF0ZXIoei5mLCB6LmRmLCAwLCAwLjkpLCAnZ29sZi1iYWxsLXNnZCcsIDQpLFxuICAgICAgICBdXG5cbiAgICAgICAgdGhpcy5kYXRhKGRhdGEpXG4gICAgICAgIHRoaXMuaW5pdEJhbGxzKClcbiAgICB9XG5cbiAgICBsYW5kc2NhcGUoKTogTGFuZHNjYXBlXG4gICAgbGFuZHNjYXBlKHZhbDogTGFuZHNjYXBlKTogdGhpc1xuICAgIGxhbmRzY2FwZSh2YWw/KSB7XG4gICAgICAgIGlmICh2YWwgPT0gbnVsbCkgcmV0dXJuIHRoaXMub3B0aW9ucy5sYW5kc2NhcGVcbiAgICAgICAgY29uc3Qgb3AgPSB0aGlzLm9wdGlvbnNcbiAgICAgICAgb3AubGFuZHNjYXBlID0gdmFsXG5cbiAgICAgICAgLy8gVXBkYXRlIHhyYW5nZSBhbmQgeXJhbmdlXG4gICAgICAgIHRoaXMudXBkYXRlU2NhbGVzKG9wKVxuICAgICAgICB0aGlzLnVwZGF0ZUF4ZXModGhpcy5zY2FsZXMsIG9wKVxuXG4gICAgICAgIC8vIFVwZGF0ZSBkYXRhXG4gICAgICAgIHRoaXMuZGF0YSgpLmZvckVhY2goYiA9PiB7XG4gICAgICAgICAgICBiLnVwZGF0ZXIuZiA9IHZhbC5mXG4gICAgICAgICAgICBiLnVwZGF0ZXIuZGYgPSB2YWwuZGZcbiAgICAgICAgfSlcblxuICAgICAgICB0aGlzLmNsZWFyQ3VydmUoKVxuICAgICAgICB0aGlzLnBsb3RDdXJ2ZSgpXG5cbiAgICAgICAgcmV0dXJuIHRoaXNcbiAgICB9XG5cbiAgICAvKiogUmV0dXJuIGZpcnN0IHVwZGF0ZXIgaW4gZGF0YSAqL1xuICAgIGdldCBkYXRhSGVhZCgpOiBHb2xmQmFsbCB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5kYXRhKClbMF1cbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkxvb2tzIGxpa2UgdGhlcmUgaXMgbm8gZGF0YSBpbiB0aGlzIGdvbGYgaG9sZVwiKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBQdXQgYSB2ZWN0b3IgaW50byB0aGUgY29vcmRpbmF0ZSBzeXN0ZW0gdXNlZCBieSB0aGUgdmlzdWFsaXphdGlvblxuICAgICAqIFxuICAgICAqIEBwYXJhbSB2IFZlY3RvciBcbiAgICAgKi9cbiAgICBpbnRvVmlzKHY6IFZlY3RvcjJEKSB7XG4gICAgICAgIHJldHVybiB7IHg6IHRoaXMuc2NhbGVzLm1hdGgycHgueCh2LngpLCB5OiB0aGlzLnNjYWxlcy5tYXRoMnB4Lnkodi55KSB9XG4gICAgfVxuXG4gICAgLy8gVGFrZSBhIHZlY3RvciBpbiB0aGUgY29vcmRpbmF0ZSBzeXN0ZW0gYW5kIHJldHVybiBpdCB0byB0aGUgbWF0aCBjb29yZGluYXRlc1xuICAgIGludG9NYXRoKHY6IFZlY3RvcjJEKSB7XG4gICAgICAgIHJldHVybiB7IHg6IHRoaXMuc2NhbGVzLm1hdGgycHgueC5pbnZlcnQodi54KSwgeTogdGhpcy5zY2FsZXMubWF0aDJweC55LmludmVydCh2LnkpIH1cbiAgICB9XG5cbiAgICAvLyBUdXJuIGEgbnVtYmVyIGludG8gYSB2ZWN0b3JcbiAgICBudW0ydmVjKHg6IG51bWJlcik6IFZlY3RvcjJEIHtcbiAgICAgICAgY29uc3Qgb3AgPSB0aGlzLm9wdGlvbnNcbiAgICAgICAgcmV0dXJuIHsgeDogeCwgeTogb3AubGFuZHNjYXBlLmxvc3MoeCkgfVxuICAgIH1cblxuICAgIC8vIFR1cm4gYSBiYWxsIGludG8gYSB2ZWN0b3IgaW4gdGhlIHZpc3VhbGl6YXRpb24gY29vcmRpbmF0ZSBzeXN0ZW1cbiAgICBiYWxsMnZpcyhiOiBHb2xmQmFsbCkge1xuICAgICAgICByZXR1cm4gdGhpcy5pbnRvVmlzKGIudG9WZWMoZ2V0UGxvdEZ1bmModGhpcy5vcHRpb25zLmxhbmRzY2FwZSkpKVxuICAgIH1cblxuICAgIC8vIFBsb3QgYSBiYWxsIG9uIHRoZSBjaGFydFxuICAgIHBsb3RCYWxsKGI6IEdvbGZCYWxsKSB7XG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuXG4gICAgICAgIGNvbnN0IHRvQ2xhc3MgPSBuYW1lID0+ICcuJyArIG5hbWVcbiAgICAgICAgY29uc3QgY2xzU2VsID0gdG9DbGFzcyhiLmNsYXNzbmFtZSlcblxuICAgICAgICBjb25zdCBiYWxsID0gdGhpcy5iYWxsMnZpcyhiKVxuICAgICAgICBzZWxmLnNlbHMuYmFsbCA9IHNlbGYuYmFzZS5zZWxlY3RBbGwoY2xzU2VsKVxuICAgICAgICAgICAgLmRhdGEoW2JhbGxdKVxuICAgICAgICAgICAgLmpvaW4oJ2NpcmNsZScpXG4gICAgICAgICAgICAuY2xhc3NlZCgnZ29sZi1iYWxsJywgdHJ1ZSlcbiAgICAgICAgICAgIC5jbGFzc2VkKGIuY2xhc3NuYW1lLCB0cnVlKVxuICAgICAgICAgICAgLmF0dHIoXCJjeFwiLCBkID0+IGQueClcbiAgICAgICAgICAgIC5hdHRyKFwiY3lcIiwgZCA9PiBkLnkpXG4gICAgICAgICAgICAuYXR0cihcInJcIiwgXCI1cHhcIilcbiAgICB9XG5cbiAgICBjbGVhckN1cnZlKCkge1xuICAgICAgICB0aGlzLmxheWVycy5iZy5zZWxlY3RBbGwoJy5saW5lJykucmVtb3ZlKClcbiAgICAgICAgdGhpcy5zZWxzLm1hc2tMaW5lLmh0bWwoJycpXG4gICAgICAgIHRoaXMuYmFzZS5zZWxlY3RBbGwoJyNsaW5lLWJhY2tncm91bmQnKS5odG1sKCcnKVxuICAgIH1cblxuICAgIHBsb3RDdXJ2ZUJ5RGVmYXVsdCh4czogbnVtYmVyW10pIHtcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXMsIG9wID0gdGhpcy5vcHRpb25zLCBzY2FsZXMgPSB0aGlzLnNjYWxlcywgc2VscyA9IHRoaXMuc2VscztcblxuICAgICAgICBzY2FsZXMucGF0aHMuZm9yRWFjaChsaW5lID0+IHtcbiAgICAgICAgICAgIHRoaXMubGF5ZXJzLmJnLmFwcGVuZChcInBhdGhcIilcbiAgICAgICAgICAgICAgICAuZGF0dW0oeHMpXG4gICAgICAgICAgICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcImxpbmVcIilcbiAgICAgICAgICAgICAgICAuYXR0cihcImRcIiwgZCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBsaW5lKGQpXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcblxuICAgICAgICBzZWxzLmxpbmVCYWNrZ3JvdW5kLnNlbGVjdEFsbChcIi5ncmFkLWJveFwiKVxuICAgICAgICAgICAgLmRhdGEoWzFdKVxuICAgICAgICAgICAgLmpvaW4oJ3JlY3QnKVxuICAgICAgICAgICAgLmNsYXNzZWQoJ2dyYWQtYm94JywgdHJ1ZSlcbiAgICAgICAgICAgIC5hdHRyKFwid2lkdGhcIiwgb3Aud2lkdGgpXG4gICAgICAgICAgICAuYXR0cihcImhlaWdodFwiLCBvcC5oZWlnaHQpXG4gICAgICAgICAgICAuYXR0cihcImZpbGwtb3BhY2l0eVwiLCAwLjApXG4gICAgfVxuXG4gICAgcGxvdEN1cnZlQnlHcmFkaWVudCh4czogbnVtYmVyW10pIHtcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXMsIHNjYWxlcyA9IHRoaXMuc2NhbGVzLCBzZWxzID0gdGhpcy5zZWxzLCBvcCA9IHRoaXMub3B0aW9ucztcblxuICAgICAgICBjb25zdCB4d2lkdGggPSBvcC53aWR0aCAqICh4c1sxXSAtIHhzWzBdKSAvIChkMy5tYXgoeHMpIC0gZDMubWluKHhzKSkgLy8gQXNzdW1lcyBsZW5ndGggb2YgeHMgPiAxXG5cbiAgICAgICAgY29uc3QgYmFsbFVwZGF0ZXIgPSBzZWxmLmRhdGEoKVswXS51cGRhdGVyXG5cbiAgICAgICAgLy8gQ2xlYXIgbWFza1xuICAgICAgICBjb25zdCBsaW5lID0gc2NhbGVzLnBhdGhzWzBdXG5cbiAgICAgICAgc2Vscy5tYXNrTGluZS5hdHRyKCdkJywgbGluZSh4cykpXG5cbiAgICAgICAgY29uc3QgY29sb3JTY2FsZSA9IGQzLnNjYWxlU2VxdWVudGlhbChkMy5pbnRlcnBvbGF0ZVBsYXNtYSlcbiAgICAgICAgXG4gICAgICAgIC8vIENoZWNrIHRoZSBncmFkaWVudCByYW5nZVxuICAgICAgICBjb25zdCB1cGRhdGVBbXRzID0geHMubWFwKHggPT4gTWF0aC5sb2coTWF0aC5hYnMoYmFsbFVwZGF0ZXIudXBkYXRlTW9kaWZpZXIoeCkpKSlcblxuICAgICAgICBjb25zdCBjbGFtcGVkU2NhbGUgPSBSLmN1cnJ5KChtaW46bnVtYmVyLCBtYXg6bnVtYmVyLCBhcnI6bnVtYmVyW10pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNsYW1wZXIgPSBSLmNsYW1wKG1pbiwgbWF4KVxuICAgICAgICAgICAgY29uc3QgY2xhbXBlZEFyciA9IFIubWFwKGNsYW1wZXIsIGFycilcbiAgICAgICAgICAgIHJldHVybiBhcnIubWFwKHggPT4geCAtIGQzLm1lYW4oY2xhbXBlZEFycikpXG4gICAgICAgICAgICAvLyByZXR1cm4gY2xhbXBlZEFyci5tYXAoeCA9PiB4IC0gZDMubWVhbihjbGFtcGVkQXJyKSlcbiAgICAgICAgfSlcblxuICAgICAgICAvLyBjb25zdCBjbGFtcGVyID0gY2xhbXBlZFNjYWxlKC0yLCAyKTtcbiAgICAgICAgLy8gY29uc3QgZGF0YSA9IGQzLnppcCh4cywgY2xhbXBlcih1cGRhdGVBbXRzKSkubWFwKGQgPT4ge3JldHVybiB7eDogZFswXSwgdXBkYXRlQW10OiBkWzFdfX0pXG4gICAgICAgIGNvbnN0IGRhdGEgPSBkMy56aXAoeHMsIHVwZGF0ZUFtdHMpLm1hcChkID0+IHtyZXR1cm4ge3g6IGRbMF0sIHVwZGF0ZUFtdDogZFsxXX19KVxuICAgICAgICAvLyBjb25zdCBleHRlbnQgPSBkMy5leHRlbnQoY2xhbXBlcih1cGRhdGVBbXRzKSlcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJFeHRlbnQ6IFwiLCBleHRlbnQpO1xuXG5cbiAgICAgICAgLy9AdHMtaWdub3JlXG4gICAgICAgIGNvbnN0IGNzY2FsZSA9IGQzLnNjYWxlTGluZWFyKCkuZG9tYWluKFstMiwgMCwgMl0pLnJhbmdlKFtcIiM2N2E5Y2ZcIiwgXCIjZjdmN2Y3XCIsIFwiI2VmOGE2MlwiXSlcblxuICAgICAgICBzZWxzLmxpbmVCYWNrZ3JvdW5kLnNlbGVjdEFsbCgnLmdyYWQtYm94JylcbiAgICAgICAgICAgIC5kYXRhKGRhdGEpXG4gICAgICAgICAgICAuam9pbigncmVjdCcpXG4gICAgICAgICAgICAuY2xhc3NlZCgnZ3JhZC1ib3gnLCB0cnVlKVxuICAgICAgICAgICAgLmF0dHIoJ2hlaWdodCcsIG9wLmhlaWdodClcbiAgICAgICAgICAgIC5hdHRyKCd3aWR0aCcsIHNlbGYuc2NhbGVzLm1hdGgycHgueCh4d2lkdGgpKVxuICAgICAgICAgICAgLmF0dHIoJ3gnLCBkID0+IHNlbGYuc2NhbGVzLm1hdGgycHgueChkLngpKVxuICAgICAgICAgICAgLmF0dHIoJ3knLCAwKVxuICAgICAgICAgICAgLmF0dHIoJ2ZpbGwnLCBkID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY3NjYWxlKGQudXBkYXRlQW10KVxuICAgICAgICAgICAgfSlcblxuICAgICAgICBzZWxzLmxpbmVCYWNrZ3JvdW5kLmF0dHIoJ21hc2snLCBgdXJsKCMke3RoaXMubWFza0lkfSlgKVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFBsb3QgdGhlIHZhbHVlcyBvZiBhbGwgeCBhY2NvcmRpbmcgdG8gdGhlIGZ1bmN0aW9uXG4gICAgICogXG4gICAgICogQHBhcmFtIHggQSBsaW5zcGFjZSBvZiB4IHZhbHVlcyBvdmVyIHdoaWNoIHRvIHBsb3QgYSBjdXJ2ZVxuICAgICAqL1xuICAgIHBsb3RDdXJ2ZSgpIHtcbiAgICAgICAgY29uc3Qgb3AgPSB0aGlzLm9wdGlvbnNcbiAgICAgICAgY29uc3QgeHMgPSBsaW5zcGFjZShvcC5sYW5kc2NhcGUueHJhbmdlWzBdLCBvcC5sYW5kc2NhcGUueHJhbmdlWzFdLCAxMDAwKVxuICAgICAgICBjb25zdCBzZWxmID0gdGhpcywgc2NhbGVzID0gdGhpcy5zY2FsZXMsIHNlbHMgPSB0aGlzLnNlbHM7XG5cbiAgICAgICAgaWYgKHNlbGYuZGF0YSgpICE9IG51bGwpIHtcbiAgICAgICAgICAgIGlmIChzZWxmLmRhdGEoKS5sZW5ndGggPiAxKSBzZWxmLnBsb3RDdXJ2ZUJ5RGVmYXVsdCh4cylcbiAgICAgICAgICAgIGVsc2Ugc2VsZi5wbG90Q3VydmVCeUdyYWRpZW50KHhzKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgdXBkYXRlU2NhbGVzKG9wOiBHcmFwaE9wdGlvbnMpIHtcbiAgICAgICAgY29uc3Qgc2NhbGVzID0gdGhpcy5zY2FsZXNcblxuICAgICAgICBjb25zdCB4YmFzZVJhbmdlID0gWy0xLCAxXVxuICAgICAgICBjb25zdCB5YmFzZVJhbmdlID0gWzEsIDBdXG5cbiAgICAgICAgY29uc3QgeHB4UmFuZ2UgPSBbMCwgb3Aud2lkdGhdXG4gICAgICAgIGNvbnN0IHlweFJhbmdlID0gW29wLmhlaWdodCwgMF1cblxuICAgICAgICBzY2FsZXMuYmFzZTJtYXRoID0ge1xuICAgICAgICAgICAgeDogZDMuc2NhbGVMaW5lYXIoKS5kb21haW4oeGJhc2VSYW5nZSkucmFuZ2Uob3AubGFuZHNjYXBlLnhyYW5nZSksXG4gICAgICAgICAgICB5OiBkMy5zY2FsZUxpbmVhcigpLmRvbWFpbih5YmFzZVJhbmdlKS5yYW5nZShvcC5sYW5kc2NhcGUueXJhbmdlKVxuICAgICAgICB9XG4gICAgICAgIHNjYWxlcy5iYXNlMnB4ID0ge1xuICAgICAgICAgICAgeDogZDMuc2NhbGVMaW5lYXIoKS5kb21haW4oeGJhc2VSYW5nZSkucmFuZ2UoeHB4UmFuZ2UpLFxuICAgICAgICAgICAgeTogZDMuc2NhbGVMaW5lYXIoKS5kb21haW4oeWJhc2VSYW5nZSkucmFuZ2UoeXB4UmFuZ2UpXG4gICAgICAgIH1cbiAgICAgICAgc2NhbGVzLm1hdGgycHggPSB7XG4gICAgICAgICAgICB4OiBkMy5zY2FsZUxpbmVhcigpLmRvbWFpbihvcC5sYW5kc2NhcGUueHJhbmdlKS5yYW5nZSh4cHhSYW5nZSksXG4gICAgICAgICAgICB5OiBkMy5zY2FsZUxpbmVhcigpLmRvbWFpbihvcC5sYW5kc2NhcGUueXJhbmdlKS5yYW5nZSh5cHhSYW5nZSlcbiAgICAgICAgfVxuXG4gICAgICAgIHNjYWxlcy5iYXNlMmxvc3MgPSBkMy5zY2FsZUxpbmVhcigpLmRvbWFpbihvcC5sYW5kc2NhcGUueXJhbmdlKS5yYW5nZShbMCwgMV0pXG5cbiAgICAgICAgc2NhbGVzLnBhdGhzID0gdGhpcy5uZXdQYXRocyhvcC5sYW5kc2NhcGUpXG4gICAgfVxuXG4gICAgdXBkYXRlQXhlcyhzY2FsZXM6IEdyYXBoU2NhbGVzLCBvcDogR3JhcGhPcHRpb25zKSB7XG4gICAgICAgIGNvbnN0IHNlbHMgPSB0aGlzLnNlbHNcbiAgICAgICAgc2Vscy54YXhpcy5jYWxsKGQzLmF4aXNCb3R0b20oc2NhbGVzLm1hdGgycHgueCkudGlja1ZhbHVlcyhbMF0pLnRpY2tGb3JtYXQoeCA9PiAnMCcpKVxuICAgIH1cblxuICAgIGluaXQoKSB7XG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuICAgICAgICBjb25zdCBvcCA9IHRoaXMub3B0aW9ucztcbiAgICAgICAgY29uc3Qgc2NhbGVzID0gdGhpcy5zY2FsZXM7XG4gICAgICAgIGNvbnN0IHNlbHMgPSB0aGlzLnNlbHM7XG5cbiAgICAgICAgdGhpcy51cGRhdGVTY2FsZXMob3ApXG5cbiAgICAgICAgc2Vscy54YXhpcyA9IHRoaXMuYmFzZS5hcHBlbmQoXCJnXCIpXG4gICAgICAgICAgICAuYXR0cihcImNsYXNzXCIsIFwiYXhpcyBheGlzLS14XCIpXG4gICAgICAgICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBTVkcudHJhbnNsYXRlKDAsIG9wLmhlaWdodCkpXG5cbiAgICAgICAgc2Vscy54bGFiZWwgPSB0aGlzLmJhc2UuYXBwZW5kKFwidGV4dFwiKVxuICAgICAgICAgICAgLnRleHQoXCJcXHUwM0I4IC0gXFx1MDNCOCpcIilcbiAgICAgICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJ0aXRsZXNcIilcbiAgICAgICAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIFNWRy50cmFuc2xhdGUob3Aud2lkdGggLyAyLCBvcC5oZWlnaHQgKyBvcC5wYWQpKVxuXG4gICAgICAgIC8vIEFkZCBiYXNlIG1hc2tcbiAgICAgICAgc2Vscy5tYXNrID0gdGhpcy5iYXNlLmFwcGVuZCgnbWFzaycpLmF0dHIoJ2lkJywgdGhpcy5tYXNrSWQpXG5cbiAgICAgICAgc2Vscy5tYXNrQmFja2dyb3VuZCA9IHNlbHMubWFzay5hcHBlbmQoJ3JlY3QnKVxuICAgICAgICAgICAgLmF0dHIoJ3dpZHRoJywgb3Aud2lkdGgpXG4gICAgICAgICAgICAuYXR0cignaGVpZ2h0Jywgb3AuaGVpZ2h0KVxuICAgICAgICAgICAgLmF0dHIoJ2ZpbGwnLCAnYmxhY2snKVxuXG4gICAgICAgIHNlbHMubWFza0xpbmUgPSBzZWxzLm1hc2suXG4gICAgICAgICAgICBzZWxlY3RBbGwoXCIjdHJhbnNwYXJlbnQtbGluZVwiKS5cbiAgICAgICAgICAgIGRhdGEoWzFdKVxuICAgICAgICAgICAgLmpvaW4oJ3BhdGgnKVxuICAgICAgICAgICAgLmF0dHIoJ2lkJywgJ3RyYW5zcGFyZW50LWxpbmUnKVxuICAgICAgICAgICAgLmF0dHIoJ3N0cm9rZScsICd3aGl0ZScpXG4gICAgICAgICAgICAuYXR0cignc3Ryb2tlLXdpZHRoJywgJzVweCcpXG5cbiAgICAgICAgc2Vscy5saW5lQmFja2dyb3VuZCA9IHNlbGYuYmFzZS5zZWxlY3RBbGwoJyNsaW5lLWJhY2tncm91bmQnKVxuICAgICAgICAgICAgLmRhdGEoWzFdKVxuICAgICAgICAgICAgLmpvaW4oJ2cnKVxuICAgICAgICAgICAgLmF0dHIoJ2lkJywgJ2xpbmUtYmFja2dyb3VuZCcpXG5cbiAgICAgICAgc2Vscy5iYWNrZHJvcCA9IHRoaXMubGF5ZXJzLmJnLmFwcGVuZChcImdcIilcbiAgICAgICAgICAgIC5hdHRyKFwiaWRcIiwgXCJiYWNrZHJvcFwiKVxuICAgICAgICAgICAgLmNsYXNzZWQoJ2dyYXNzJywgdHJ1ZSlcbiAgICAgICAgICAgIC5hcHBlbmQoXCJyZWN0XCIpXG4gICAgICAgICAgICAuYXR0cihcImhlaWdodFwiLCBvcC5oZWlnaHQpXG4gICAgICAgICAgICAuYXR0cihcIndpZHRoXCIsIG9wLndpZHRoKVxuXG4gICAgICAgIHRoaXMudXBkYXRlQXhlcyhzY2FsZXMsIG9wKVxuXG4gICAgICAgIHNjYWxlcy5wYXRocyA9IHRoaXMubmV3UGF0aHMob3AubGFuZHNjYXBlKVxuXG4gICAgICAgIHRoaXMucGxvdEN1cnZlKClcbiAgICB9XG5cbiAgICBuZXdQYXRocyhsYW5kc2NhcGU6IExhbmRzY2FwZSkge1xuICAgICAgICBjb25zdCBzY2FsZXMgPSB0aGlzLnNjYWxlc1xuICAgICAgICBjb25zdCBiYXNlTGluZSA9IGQzLmxpbmU8bnVtYmVyPigpXG4gICAgICAgICAgICAueCgoZDogbnVtYmVyLCBpOiBudW1iZXIpID0+IHNjYWxlcy5tYXRoMnB4LngoZCkpXG4gICAgICAgICAgICAueSgoZDogbnVtYmVyLCBpOiBudW1iZXIpID0+IHNjYWxlcy5tYXRoMnB4LnkoZ2V0UGxvdEZ1bmMobGFuZHNjYXBlKShkKSkpXG4gICAgICAgICAgICAuY3VydmUoZDMuY3VydmVMaW5lYXIpXG5cbiAgICAgICAgcmV0dXJuIFtiYXNlTGluZV1cbiAgICB9XG5cbiAgICBpbml0QmFsbHMoKSB7XG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzLCBvcCA9IHRoaXMub3B0aW9ucztcblxuICAgICAgICBjb25zdCB0b29TbWFsbCA9ICh4OiBudW1iZXIpID0+IHggPCAob3AubGFuZHNjYXBlLnhyYW5nZVswXSlcbiAgICAgICAgY29uc3QgdG9vQmlnID0gKHg6IG51bWJlcikgPT4geCA+IChvcC5sYW5kc2NhcGUueHJhbmdlWzFdKVxuXG4gICAgICAgIGNvbnN0IGZpeE91dE9mQm91bmRzID0gKHg6IG51bWJlcikgPT4ge1xuICAgICAgICAgICAgbGV0IG91dDogbnVtYmVyXG5cbiAgICAgICAgICAgIGlmIChpc05hTih4KSkgb3V0ID0gb3AubGFuZHNjYXBlLnhyYW5nZVswXVxuICAgICAgICAgICAgZWxzZSBpZiAodG9vU21hbGwoeCkpIG91dCA9IG9wLmxhbmRzY2FwZS54cmFuZ2VbMF1cbiAgICAgICAgICAgIGVsc2UgaWYgKHRvb0JpZyh4KSkgb3V0ID0gb3AubGFuZHNjYXBlLnhyYW5nZVsxXVxuICAgICAgICAgICAgZWxzZSBvdXQgPSB4XG5cbiAgICAgICAgICAgIHJldHVybiBvdXRcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIGdldE5leHRCYWxsKGI6IEdvbGZCYWxsKTogR29sZkJhbGwge1xuICAgICAgICAgICAgY29uc3QgbmV4dFggPSBiLm5leHRYKClcbiAgICAgICAgICAgIGNvbnN0IGN1cnJCYWxsU2VsID0gc2VsZi5iYXNlLnNlbGVjdChgLiR7Yi5jbGFzc25hbWV9YClcbiAgICAgICAgICAgIGNvbnN0IGZvcmNlWCA9IGZpeE91dE9mQm91bmRzKG5leHRYKVxuICAgICAgICAgICAgaWYgKCFjdXJyQmFsbFNlbC5jbGFzc2VkKCdkZWFkLWJhbGwnKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBiLnN0ZXBfKGZvcmNlWClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBiXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBzdWJPYmogPSB7XG4gICAgICAgICAgICBuZXh0OiBnYnMgPT4ge1xuICAgICAgICAgICAgICAgIGdicy5mb3JFYWNoKGIgPT4gc2VsZi5wbG90QmFsbChiKSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlcnJvcjogYiA9PiBjb25zb2xlLmxvZyhcIkVSUk9SOiBcIiwgYiksXG4gICAgICAgICAgICBjb21wbGV0ZTogKCkgPT4gY29uc29sZS5sb2coXCJDT01QTEVURVwiKSxcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHRpY2tlciA9ICgpID0+IGludGVydmFsKDEwKS5waXBlKFxuICAgICAgICAgICAgc2NhbigoYWNjOiBUKSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gVW5zdWJzY3JpYmVyIHRpY2tlciBpZiBhbGwgYmFsbHMgZGVhZFxuICAgICAgICAgICAgICAgIGlmIChSLmFsbCgoYjogR29sZkJhbGwpID0+IGQzLnNlbGVjdChgLiR7Yi5jbGFzc25hbWV9YCkuY2xhc3NlZCgnZGVhZC1iYWxsJyksIHNlbGYuZGF0YSgpKSkge1xuICAgICAgICAgICAgICAgICAgICBydW5uaW5nVGlja2VyLnVuc3Vic2NyaWJlKClcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBzZWxmLmRhdGEoKS5mb3JFYWNoKGIgPT4gZ2V0TmV4dEJhbGwoYikpXG4gICAgICAgICAgICAgICAgcmV0dXJuIHNlbGYuZGF0YSgpXG4gICAgICAgICAgICB9LCBzZWxmLmRhdGEoKSksXG4gICAgICAgICAgICB0YWtlKG9wLm1heEl0ZXIpXG4gICAgICAgICkuc3Vic2NyaWJlKHN1Yk9iailcblxuICAgICAgICAvLyBSdW5uaW5nIHRpY2tlciBzdGFydHMgYXMgYW4gZW1wdHkgc3Vic2NyaXB0aW9uIG9iamVjdCwgaXMgbGF0ZXIgcmVwbGFjZWQgYnkgdGhlIHJ1bm5pbmcgdGlja2VyXG4gICAgICAgIGxldCBydW5uaW5nVGlja2VyID0ge1xuICAgICAgICAgICAgdW5zdWJzY3JpYmU6ICgpID0+IGNvbnNvbGUubG9nKFwiRW1wdHkgVGlja2VyIVwiKVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcGxvdEJhbGxzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcnVubmluZ1RpY2tlci51bnN1YnNjcmliZSgpXG4gICAgICAgICAgICBjb25zdCBjbGljayA9IHRvVmVjKGQzLm1vdXNlKHRoaXMpKVxuICAgICAgICAgICAgZDMuc2VsZWN0QWxsKCcuZ29sZi1iYWxsJykuY2xhc3NlZCgnZGVhZC1iYWxsJywgZmFsc2UpXG4gICAgICAgICAgICBzZWxmLmRhdGEoKS5mb3JFYWNoKChiLCBpKSA9PiBiLnggPSBzZWxmLmludG9NYXRoKGNsaWNrKS54KVxuICAgICAgICAgICAgc2VsZi5kYXRhKCkuZm9yRWFjaChiID0+IHNlbGYucGxvdEJhbGwoYikpXG4gICAgICAgICAgICBzZWxmLmV2ZW50SGFuZGxlci50cmlnZ2VyKFwibG9zcy1jbGlja1wiLCB7fSlcblxuICAgICAgICAgICAgcnVubmluZ1RpY2tlciA9IHRpY2tlcigpXG4gICAgICAgIH1cblxuICAgICAgICAvLyB0aGlzLnNlbHMuYmFja2Ryb3Aub24oJ2NsaWNrJywgcGxvdEJhbGxzKVxuICAgICAgICAvLyB0aGlzLnNlbHMubWFza0JhY2tncm91bmQub24oJ2NsaWNrJywgcGxvdEJhbGxzKVxuICAgICAgICAvLyB0aGlzLnNlbHMubWFzay5vbignY2xpY2snLCBwbG90QmFsbHMpXG4gICAgICAgIHRoaXMuc2Vscy5saW5lQmFja2dyb3VuZC5vbignY2xpY2snLCBwbG90QmFsbHMpXG4gICAgfVxuXG4gICAgcSgpOiBudW1iZXJcbiAgICBxKHZhbDogbnVtYmVyKTogdGhpc1xuICAgIHEodmFsPykge1xuICAgICAgICBpZiAodmFsID09IG51bGwpIHJldHVybiB0aGlzLmRhdGFIZWFkLnVwZGF0ZXIucVxuICAgICAgICB0aGlzLmRhdGFIZWFkLnEodmFsKVxuICAgICAgICB0aGlzLnBsb3RDdXJ2ZSgpXG4gICAgICAgIHJldHVybiB0aGlzXG4gICAgfVxuXG4gICAgZXRhKCk6IG51bWJlclxuICAgIGV0YSh2YWw6IG51bWJlcik6IHRoaXNcbiAgICBldGEodmFsPykge1xuICAgICAgICBpZiAodmFsID09IG51bGwpIHJldHVybiB0aGlzLmRhdGFIZWFkLnVwZGF0ZXIucVxuICAgICAgICB0aGlzLmRhdGFIZWFkLmV0YSh2YWwpXG4gICAgICAgIC8vIHRoaXMucGxvdEN1cnZlKClcbiAgICAgICAgcmV0dXJuIHRoaXNcbiAgICB9XG5cbiAgICBkYXRhKCk6IFRcbiAgICBkYXRhKHZhbDogVCk6IHRoaXNcbiAgICBkYXRhKHZhbD8pIHtcbiAgICAgICAgaWYgKHZhbCA9PSBudWxsKSByZXR1cm4gdGhpcy5fZGF0YVxuICAgICAgICB0aGlzLl9kYXRhID0gdmFsO1xuICAgICAgICB0aGlzLmluaXRCYWxscygpXG4gICAgICAgIHJldHVybiB0aGlzXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSU5QTEFDRSBjaGFuZ2UgdGhlIGdvbGYgYmFsbHMgaW50byB0aGUgQkFTRSBzY2FsZVxuICAgICAqL1xuICAgIGRhdGFUb0Jhc2VfKCk6IFQge1xuICAgICAgICB0aGlzLmRhdGEoKS5tYXAoYiA9PiB7XG4gICAgICAgICAgICBiLnggPSB0aGlzLnNjYWxlcy5iYXNlMm1hdGgueC5pbnZlcnQoYi54KVxuICAgICAgICAgICAgcmV0dXJuIGJcbiAgICAgICAgfSlcblxuICAgICAgICByZXR1cm4gdGhpcy5kYXRhKClcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBNb2RpZnkgdGhlIGdvbGYgYmFsbHMgYW5kIGNoYW5nZSB0aGVpciB4IHZhbHVlIGZyb20gQkFTRSB0byB0aGUgbmV3IE1BVEhcbiAgICAgKi9cbiAgICBkYXRhRnJvbUJhc2UodmFsOiBUKTogdGhpcyB7XG4gICAgICAgIHZhbC5mb3JFYWNoKGIgPT4ge1xuICAgICAgICAgICAgYi54ID0gdGhpcy5zY2FsZXMuYmFzZTJtYXRoLngoYi54KVxuICAgICAgICB9KVxuXG4gICAgICAgIHRoaXMuaW5pdEJhbGxzKClcbiAgICAgICAgcmV0dXJuIHRoaXNcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHRvVmVjKFt4LCB5XTogW251bWJlciwgbnVtYmVyXSk6IFZlY3RvcjJEIHtcbiAgICByZXR1cm4geyB4OiB4LCB5OiB5IH1cbn0iLCJpbXBvcnQgKiBhcyBkMyBmcm9tICdkMydcbmltcG9ydCAqIGFzIFIgZnJvbSAncmFtZGEnXG5cbmltcG9ydCB7IENoYXJ0MkQsIENoYXJ0T3B0aW9ucywgQ2hhcnRTY2FsZXMgfSBmcm9tICcuLi91dGlsL0NoYXJ0MmRWaXNDb21wb25lbnQnXG5pbXBvcnQgeyBTaW1wbGVFdmVudEhhbmRsZXIgfSBmcm9tICcuLi91dGlsL1NpbXBsZUV2ZW50SGFuZGxlcidcbmltcG9ydCB7IEQzU2VsIH0gZnJvbSAnLi4vdXRpbC94ZDMnXG5pbXBvcnQgeyBTVkcgfSBmcm9tICcuLi91dGlsL1NWR3BsdXMnXG5cbmltcG9ydCB7IEJhbGxIaXN0b3J5IH0gZnJvbSAnLi9Hb2xmQmFsbCdcblxuY29uc3QgYXhpc09mZnNldCA9IDEgLy8gVXNlIHRoaXMgdG8gY292ZXIgdGhlIHBsb3R0ZWQgbGluZXNcblxuaW50ZXJmYWNlIEdyYXBoU2VscyB7XG4gICAgeGF4aXM/OiBEM1NlbFxuICAgIHlheGlzPzogRDNTZWxcbiAgICB4bGFiZWw/OiBEM1NlbFxuICAgIGxpbmU/OiBEM1NlbFxuICAgIGJhY2tkcm9wPzogRDNTZWxcbiAgICBiYWxsPzogRDNTZWxcbn1cblxudHlwZSBUcmFja2VyID0ge1xuICAgIHNlbDogRDNTZWwsXG4gICAgdmFsczogbnVtYmVyW11cbn1cblxudHlwZSBMaW5lVHJhY2tlciA9IHtcbiAgICAoa2V5OiBzdHJpbmcpOiBUcmFja2VyXG59XG5cbnR5cGUgVCA9IExpbmVUcmFja2VyXG5cblxuZXhwb3J0IGNsYXNzIEdvbGZMb3NzZXMgZXh0ZW5kcyBDaGFydDJEPFQ+IHtcbiAgICBjc3NuYW1lID0gXCJsaW5lLXBsb3RcIlxuXG4gICAgX2RhdGE6IFRcblxuICAgIG9wdGlvbnM6IENoYXJ0T3B0aW9ucyA9IHtcbiAgICAgICAgbWF4V2lkdGg6IDM1MCxcbiAgICAgICAgbWF4SGVpZ2h0OiAyNTAsXG4gICAgICAgIG1hcmdpbjogeyB0b3A6IDEwLCByaWdodDogMTAsIGJvdHRvbTogMzAsIGxlZnQ6IDMwIH0sXG4gICAgICAgIHBhZDogeyB0b3A6IDUsIHJpZ2h0OiAxLCBib3R0b206IDEwLCBsZWZ0OiAxNSB9LFxuICAgICAgICB4cmFuZ2U6IFswLCA2MDBdLFxuICAgICAgICB5cmFuZ2U6IFsxLjEsIDFlLTNdLFxuICAgIH1cbiAgICBkZWZhdWx0WHJhbmdlOiBbbnVtYmVyLCBudW1iZXJdXG5cbiAgICBzY2FsZXM6IENoYXJ0U2NhbGVzID0ge31cblxuICAgIHNlbHM6IEdyYXBoU2VscyA9IHt9XG5cbiAgICBwYXRoOiBkMy5MaW5lPG51bWJlcj5cblxuICAgIGNvbnN0cnVjdG9yKGQzcGFyZW50OiBEM1NlbCwgZXZlbnRIYW5kbGVyPzogU2ltcGxlRXZlbnRIYW5kbGVyLCBvcHRpb25zID0ge30pIHtcbiAgICAgICAgc3VwZXIoZDNwYXJlbnQsIGV2ZW50SGFuZGxlciwgb3B0aW9ucylcbiAgICAgICAgc3VwZXIuaW5pdFNWRyh0aGlzLm9wdGlvbnMsIFtcImJnXCJdKVxuICAgICAgICB0aGlzLmJhc2UuY2xhc3NlZCh0aGlzLmNzc25hbWUsIHRydWUpXG4gICAgICAgIHRoaXMuZGVmYXVsdFhyYW5nZSA9IHRoaXMub3B0aW9ucy54cmFuZ2VcbiAgICAgICAgdGhpcy5kYXRhKDxMaW5lVHJhY2tlcj57fSlcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBQbG90IHRoZSB2YWx1ZXMgb2YgYWxsIHggYWNjb3JkaW5nIHRvIHRoZSBmdW5jdGlvblxuICAgICAqIFxuICAgICAqIEBwYXJhbSB4IEEgbGluc3BhY2Ugb2YgeCB2YWx1ZXMgb3ZlciB3aGljaCB0byBwbG90IGEgY3VydmVcbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgYWRkRGF0YUtleV8oY2xhc3NuYW1lOiBzdHJpbmcpIHtcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXNcbiAgICAgICAgaWYgKCFSLmhhcyhjbGFzc25hbWUsIHRoaXMuZGF0YSgpKSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coYEFkZGluZyBrZXk6ICR7Y2xhc3NuYW1lfWApO1xuICAgICAgICAgICAgdGhpcy5kYXRhKClbY2xhc3NuYW1lXSA9IHtcbiAgICAgICAgICAgICAgICBzZWw6IHNlbGYuaW5pdEJhc2VMaW5lKGNsYXNzbmFtZSksXG4gICAgICAgICAgICAgICAgdmFsczogW11cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIExpdmUgdXBkYXRlIHRoZSB4cmFuZ2VcbiAgICB1cGRhdGVTY2FsZXMoeHJhbmdlKSB7XG4gICAgICAgIGNvbnN0IG9wID0gdGhpcy5vcHRpb25zXG4gICAgICAgIHRoaXMuc2NhbGVzLnggPSBkMy5zY2FsZUxpbmVhcigpLmRvbWFpbih4cmFuZ2UpLnJhbmdlKFswLCBvcC53aWR0aF0pLmNsYW1wKHRydWUpXG4gICAgfVxuXG4gICAgY2xlYXJQYXRocygpIHtcbiAgICAgICAgdGhpcy5kYXRhKFIubWFwKGQgPT4gUi5hc3NvYygndmFscycsIFtdLCBkKSwgdGhpcy5kYXRhKCkpKVxuICAgIH1cblxuICAgIHBsb3RQYXRoKGQ6IEJhbGxIaXN0b3J5LCBzY2FsZT8pIHtcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgICAgIHRoaXMuYWRkRGF0YUtleV8oZC5jbGFzc25hbWUpO1xuXG4gICAgICAgIGNvbnN0IHNjYWxlciA9IChzY2FsZSA9PSBudWxsKSA/IHggPT4geCA6IHNjYWxlXG5cbiAgICAgICAgY29uc3QgY3VyclZhbHMgPSB0aGlzLmRhdGEoKVtkLmNsYXNzbmFtZV07XG4gICAgICAgIGN1cnJWYWxzLnZhbHMucHVzaChzY2FsZXIoZC5sb3NzKSlcblxuICAgICAgICAvLyBzbGlkaW5nIHgtYXhpc1xuICAgICAgICBjb25zdCBuZXdYcmFuZ2UgPSBbTWF0aC5tYXgoMCwgY3VyclZhbHMudmFscy5sZW5ndGgtdGhpcy5vcHRpb25zLnhyYW5nZVsxXSksIE1hdGgubWF4KGN1cnJWYWxzLnZhbHMubGVuZ3RoLHRoaXMub3B0aW9ucy54cmFuZ2VbMV0pXVxuICAgICAgICB0aGlzLnVwZGF0ZVNjYWxlcyhuZXdYcmFuZ2UpXG4gICAgICAgIHRoaXMuY3JlYXRlUGF0aCgpXG5cbiAgICAgICAgY3VyclZhbHMuc2VsLmRhdGEoW2N1cnJWYWxzXSlcbiAgICAgICAgICAgIC5qb2luKFwicGF0aFwiKVxuICAgICAgICAgICAgLmNsYXNzZWQoZC5jbGFzc25hbWUsIHRydWUpXG4gICAgICAgICAgICAuYXR0cihcImRcIiwgZCA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHNlbGYucGF0aChkLnZhbHMpXG4gICAgICAgICAgICB9KVxuICAgIH1cblxuICAgIHByaXZhdGUgaW5pdEJhc2VMaW5lKGNsYXNzbmFtZTogc3RyaW5nKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmxheWVycy5iZy5hcHBlbmQoXCJwYXRoXCIpXG4gICAgICAgICAgICAuY2xhc3NlZChjbGFzc25hbWUsIHRydWUpXG4gICAgICAgICAgICAuY2xhc3NlZCgnbGluZScsIHRydWUpXG4gICAgfVxuXG4gICAgaW5pdCgpIHtcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgICAgIGNvbnN0IG9wID0gdGhpcy5vcHRpb25zO1xuICAgICAgICBjb25zdCBzY2FsZXMgPSB0aGlzLnNjYWxlcztcbiAgICAgICAgY29uc3Qgc2VscyA9IHRoaXMuc2VscztcblxuICAgICAgICB0aGlzLmNyZWF0ZVNjYWxlcygpXG4gICAgICAgIHRoaXMuY3JlYXRlUGF0aCgpXG4gICAgICAgIHRoaXMuY3JlYXRlQXhlcygpXG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGNyZWF0ZVNjYWxlcygpIHtcbiAgICAgICAgY29uc3Qgc2NhbGVzID0gdGhpcy5zY2FsZXNcbiAgICAgICAgY29uc3Qgb3AgPSB0aGlzLm9wdGlvbnNcblxuICAgICAgICBzY2FsZXMueCA9IGQzLnNjYWxlTGluZWFyKCkuZG9tYWluKG9wLnhyYW5nZSkucmFuZ2UoWzAsIG9wLndpZHRoXSkuY2xhbXAodHJ1ZSlcbiAgICAgICAgc2NhbGVzLnkgPSBkMy5zY2FsZUxvZygpLmRvbWFpbihvcC55cmFuZ2UpLnJhbmdlKFswLCBvcC5oZWlnaHRdKS5jbGFtcCh0cnVlKVxuICAgIH1cblxuICAgIHByb3RlY3RlZCBjcmVhdGVBeGVzKCkge1xuICAgICAgICBjb25zdCBzZWxzID0gdGhpcy5zZWxzXG4gICAgICAgIGNvbnN0IHNjYWxlcyA9IHRoaXMuc2NhbGVzXG4gICAgICAgIGNvbnN0IG9wID0gdGhpcy5vcHRpb25zXG5cbiAgICAgICAgLy8gQ3JlYXRlIGF4ZXNcbiAgICAgICAgc2Vscy55YXhpcyA9IHRoaXMuYmFzZS5hcHBlbmQoXCJnXCIpXG4gICAgICAgICAgICAuYXR0cihcImNsYXNzXCIsIFwiYXhpcyBheGlzLS15XCIpXG4gICAgICAgICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBTVkcudHJhbnNsYXRlKDAsIC0gYXhpc09mZnNldCkpXG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICAuY2FsbChkMy5heGlzTGVmdChzY2FsZXMueSkudGlja0Zvcm1hdChcIlwiKS50aWNrcyg0KSk7XG5cbiAgICAgICAgc2Vscy54YXhpcyA9IHRoaXMuYmFzZS5hcHBlbmQoXCJnXCIpXG4gICAgICAgICAgICAuYXR0cihcImNsYXNzXCIsIFwiYXhpcyBheGlzLS14XCIpXG4gICAgICAgICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBTVkcudHJhbnNsYXRlKDAsIG9wLmhlaWdodCAtIGF4aXNPZmZzZXQpKVxuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgLmNhbGwoZDMuYXhpc0JvdHRvbShzY2FsZXMueCkudGlja0Zvcm1hdChcIlwiKS50aWNrcyg0KSk7XG5cbiAgICAgICAgLy8gQWRkIHhsYWJlbFxuICAgICAgICB0aGlzLmJhc2UuYXBwZW5kKFwidGV4dFwiKVxuICAgICAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgU1ZHLnRyYW5zbGF0ZShvcC53aWR0aCAvIDIsIG9wLm1hcmdpbi50b3AgKyBvcC5oZWlnaHQgKyAxMCkpXG4gICAgICAgICAgICAuc3R5bGUoXCJ0ZXh0LWFuY2hvclwiLCBcIm1pZGRsZVwiKVxuICAgICAgICAgICAgLnRleHQoXCJUaW1lXCIpXG5cbiAgICAgICAgLy8gQWRkIHlsYWJlbFxuICAgICAgICB0aGlzLmJhc2UuYXBwZW5kKFwidGV4dFwiKVxuICAgICAgICAgICAgLnN0eWxlKFwidGV4dC1hbmNob3JcIiwgXCJtaWRkbGVcIilcbiAgICAgICAgICAgIC50ZXh0KFwiTG9zc1wiKVxuICAgICAgICAgICAgLmF0dHIoXCJ5XCIsIG9wLnBhZC5sZWZ0IC0gb3AubWFyZ2luLmxlZnQpXG4gICAgICAgICAgICAuYXR0cihcInhcIiwgb3AucGFkLnRvcCAtIChvcC5oZWlnaHQgLyAyKSlcbiAgICAgICAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIFNWRy5yb3RhdGUoLTkwKSlcbiAgICAgICAgLy8gLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgU1ZHLnRyYW5zbGF0ZShvcC5tYXJnaW4ubGVmdCwgb3AuaGVpZ2h0LzIpKVxuICAgIH1cblxuICAgIHByb3RlY3RlZCBjcmVhdGVQYXRoKCkge1xuICAgICAgICB0aGlzLnBhdGggPSBkMy5saW5lPG51bWJlcj4oKVxuICAgICAgICAgICAgLngoKGQ6IG51bWJlciwgaTogbnVtYmVyKSA9PiB0aGlzLnNjYWxlcy54KGkpKVxuICAgICAgICAgICAgLnkoKGQ6IG51bWJlciwgaTogbnVtYmVyKSA9PiB0aGlzLnNjYWxlcy55KGQpKVxuICAgICAgICAgICAgLmN1cnZlKGQzLmN1cnZlTGluZWFyKVxuICAgIH1cblxuICAgIGRhdGEoKTogVFxuICAgIGRhdGEodmFsOiBUKTogdGhpc1xuICAgIGRhdGEodmFsPykge1xuICAgICAgICBpZiAodmFsID09IG51bGwpIHJldHVybiB0aGlzLl9kYXRhXG4gICAgICAgIHRoaXMuX2RhdGEgPSB2YWw7XG4gICAgICAgIHJldHVybiB0aGlzXG4gICAgfVxuXG4gICAgcmVzZXRYcmFuZ2VfKCk6IHRoaXMge1xuICAgICAgICB0aGlzLm9wdGlvbnMueHJhbmdlID0gdGhpcy5kZWZhdWx0WHJhbmdlXG4gICAgICAgIHJldHVybiB0aGlzXG4gICAgfVxufSIsImltcG9ydCAqIGFzIGQzIGZyb20gJ2QzJ1xuaW1wb3J0ICogYXMgUiBmcm9tICdyYW1kYSdcblxuaW1wb3J0IHsgQ2hhcnQyRCwgQ2hhcnRPcHRpb25zLCBDaGFydFNjYWxlcyB9IGZyb20gJy4uL3V0aWwvQ2hhcnQyZFZpc0NvbXBvbmVudCdcbmltcG9ydCB7IFNpbXBsZUV2ZW50SGFuZGxlciB9IGZyb20gJy4uL3V0aWwvU2ltcGxlRXZlbnRIYW5kbGVyJ1xuaW1wb3J0IHsgRDNTZWwgfSBmcm9tICcuLi91dGlsL3hkMydcbmltcG9ydCB7IFNWRyB9IGZyb20gJy4uL3V0aWwvU1ZHcGx1cydcbmltcG9ydCB7IEJhbGxIaXN0b3J5IH0gZnJvbSAnLi9Hb2xmQmFsbCdcblxuY29uc3QgYXhpc09mZnNldCA9IDEgLy8gVXNlIHRoaXMgdG8gY292ZXIgdGhlIHBsb3R0ZWQgbGluZXNcblxuaW50ZXJmYWNlIEdyYXBoU2VscyB7XG4gICAgeGF4aXM/OiBEM1NlbFxuICAgIHlheGlzPzogRDNTZWxcbiAgICB4bGFiZWw/OiBEM1NlbFxuICAgIGxpbmU/OiBEM1NlbFxuICAgIGJhY2tkcm9wPzogRDNTZWxcbiAgICBiYWxsPzogRDNTZWxcbn1cblxudHlwZSBUcmFja2VyID0ge1xuICAgIHNlbDogRDNTZWwsXG4gICAgdmFsczogbnVtYmVyW11cbn1cblxudHlwZSBMaW5lVHJhY2tlciA9IHtcbiAgICAoa2V5OiBzdHJpbmcpOiBUcmFja2VyXG59XG5cbnR5cGUgVCA9IExpbmVUcmFja2VyXG5cbmV4cG9ydCBjbGFzcyBHb2xmWERpc3QgZXh0ZW5kcyBDaGFydDJEPFQ+IHtcbiAgICBjc3NuYW1lID0gXCJsaW5lLXBsb3RcIlxuXG4gICAgX2RhdGE6IFRcblxuICAgIG9wdGlvbnM6IENoYXJ0T3B0aW9ucyA9IHtcbiAgICAgICAgbWF4V2lkdGg6IDM1MCxcbiAgICAgICAgbWF4SGVpZ2h0OiAyNTAsXG4gICAgICAgIG1hcmdpbjogeyB0b3A6IDEwLCByaWdodDogMTAsIGJvdHRvbTogMzAsIGxlZnQ6IDMwIH0sXG4gICAgICAgIHBhZDogeyB0b3A6IDUsIHJpZ2h0OiAxLCBib3R0b206IDEwLCBsZWZ0OiAxNSB9LFxuICAgICAgICB4cmFuZ2U6IFswLCA2MDBdLFxuICAgICAgICB5cmFuZ2U6IFsxLCAwXSxcbiAgICB9XG5cbiAgICBkZWZhdWx0WHJhbmdlOiBbbnVtYmVyLCBudW1iZXJdXG5cbiAgICBzY2FsZXM6IENoYXJ0U2NhbGVzID0ge31cblxuICAgIHNlbHM6IEdyYXBoU2VscyA9IHt9XG5cbiAgICBwYXRoOiBkMy5MaW5lPG51bWJlcj5cblxuICAgIGNvbnN0cnVjdG9yKGQzcGFyZW50OiBEM1NlbCwgZXZlbnRIYW5kbGVyPzogU2ltcGxlRXZlbnRIYW5kbGVyLCBvcHRpb25zID0ge30pIHtcbiAgICAgICAgc3VwZXIoZDNwYXJlbnQsIGV2ZW50SGFuZGxlciwgb3B0aW9ucylcbiAgICAgICAgc3VwZXIuaW5pdFNWRyh0aGlzLm9wdGlvbnMsIFtcImJnXCJdKVxuICAgICAgICB0aGlzLmJhc2UuY2xhc3NlZCh0aGlzLmNzc25hbWUsIHRydWUpXG4gICAgICAgIHRoaXMuZGVmYXVsdFhyYW5nZSA9IHRoaXMub3B0aW9ucy54cmFuZ2VcbiAgICAgICAgdGhpcy5kYXRhKDxMaW5lVHJhY2tlcj57fSlcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBQbG90IHRoZSB2YWx1ZXMgb2YgYWxsIHggYWNjb3JkaW5nIHRvIHRoZSBmdW5jdGlvblxuICAgICAqIFxuICAgICAqIEBwYXJhbSB4IEEgbGluc3BhY2Ugb2YgeCB2YWx1ZXMgb3ZlciB3aGljaCB0byBwbG90IGEgY3VydmVcbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgYWRkRGF0YUtleV8oY2xhc3NuYW1lOiBzdHJpbmcpIHtcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXNcbiAgICAgICAgaWYgKCFSLmhhcyhjbGFzc25hbWUsIHRoaXMuZGF0YSgpKSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coYEFkZGluZyBrZXk6ICR7Y2xhc3NuYW1lfWApO1xuICAgICAgICAgICAgdGhpcy5kYXRhKClbY2xhc3NuYW1lXSA9IHtcbiAgICAgICAgICAgICAgICBzZWw6IHNlbGYuaW5pdEJhc2VMaW5lKGNsYXNzbmFtZSksXG4gICAgICAgICAgICAgICAgdmFsczogW11cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNsZWFyUGF0aHMoKSB7XG4gICAgICAgIHRoaXMuZGF0YShSLm1hcChkID0+IFIuYXNzb2MoJ3ZhbHMnLCBbXSwgZCksIHRoaXMuZGF0YSgpKSlcbiAgICB9XG5cbiAgICBwbG90UGF0aChkOiBCYWxsSGlzdG9yeSwgc2NhbGU/KSB7XG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuICAgICAgICB0aGlzLmFkZERhdGFLZXlfKGQuY2xhc3NuYW1lKTtcblxuICAgICAgICBjb25zdCBzY2FsZXIgPSAoc2NhbGUgPT0gbnVsbCkgPyB4ID0+IHggOiBzY2FsZVxuXG4gICAgICAgIGNvbnN0IGN1cnJWYWxzID0gdGhpcy5kYXRhKClbZC5jbGFzc25hbWVdO1xuICAgICAgICBjdXJyVmFscy52YWxzLnB1c2goc2NhbGVyKE1hdGguYWJzKGQueCkpKTtcblxuICAgICAgICAvLyBzbGlkaW5nIHgtYXhpc1xuICAgICAgICBjb25zdCBuZXdYcmFuZ2UgPSBbTWF0aC5tYXgoMCwgY3VyclZhbHMudmFscy5sZW5ndGgtdGhpcy5vcHRpb25zLnhyYW5nZVsxXSksIE1hdGgubWF4KGN1cnJWYWxzLnZhbHMubGVuZ3RoLHRoaXMub3B0aW9ucy54cmFuZ2VbMV0pXVxuICAgICAgICB0aGlzLnVwZGF0ZVNjYWxlcyhuZXdYcmFuZ2UpXG4gICAgICAgIHRoaXMuY3JlYXRlUGF0aCgpIC8vIERlcGVuZHMgb24geCBzY2FsZVxuXG5cbiAgICAgICAgY3VyclZhbHMuc2VsLmRhdGEoW2N1cnJWYWxzXSlcbiAgICAgICAgICAgIC5qb2luKFwicGF0aFwiKVxuICAgICAgICAgICAgLmNsYXNzZWQoZC5jbGFzc25hbWUsIHRydWUpXG4gICAgICAgICAgICAuYXR0cihcImRcIiwgZCA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHNlbGYucGF0aChkLnZhbHMpXG4gICAgICAgICAgICB9KVxuICAgIH1cblxuICAgIC8vIExpdmUgdXBkYXRlIHRoZSB4cmFuZ2VcbiAgICB1cGRhdGVTY2FsZXMoeHJhbmdlKSB7XG4gICAgICAgIGNvbnN0IG9wID0gdGhpcy5vcHRpb25zXG4gICAgICAgIHRoaXMuc2NhbGVzLnggPSBkMy5zY2FsZUxpbmVhcigpLmRvbWFpbih4cmFuZ2UpLnJhbmdlKFswLCBvcC53aWR0aF0pLmNsYW1wKHRydWUpXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBpbml0QmFzZUxpbmUoY2xhc3NuYW1lOiBzdHJpbmcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubGF5ZXJzLmJnLmFwcGVuZChcInBhdGhcIilcbiAgICAgICAgICAgIC5jbGFzc2VkKGNsYXNzbmFtZSwgdHJ1ZSlcbiAgICAgICAgICAgIC5jbGFzc2VkKCdsaW5lJywgdHJ1ZSlcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgY3JlYXRlU2NhbGVzKCkge1xuICAgICAgICBjb25zdCBvcCA9IHRoaXMub3B0aW9uc1xuICAgICAgICB0aGlzLnNjYWxlcy54ID0gZDMuc2NhbGVMaW5lYXIoKS5kb21haW4ob3AueHJhbmdlKS5yYW5nZShbMCwgb3Aud2lkdGhdKS5jbGFtcCh0cnVlKVxuICAgICAgICB0aGlzLnNjYWxlcy55ID0gZDMuc2NhbGVMaW5lYXIoKS5kb21haW4ob3AueXJhbmdlKS5yYW5nZShbMCwgb3AuaGVpZ2h0XSkuY2xhbXAodHJ1ZSlcbiAgICB9XG5cbiAgICBpbml0KCkge1xuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICAgICAgY29uc3Qgb3AgPSB0aGlzLm9wdGlvbnM7XG4gICAgICAgIGNvbnN0IHNjYWxlcyA9IHRoaXMuc2NhbGVzO1xuICAgICAgICBjb25zdCBzZWxzID0gdGhpcy5zZWxzO1xuXG4gICAgICAgIHRoaXMuY3JlYXRlU2NhbGVzKClcbiAgICAgICAgdGhpcy5jcmVhdGVQYXRoKClcbiAgICAgICAgdGhpcy5jcmVhdGVBeGVzKClcbiAgICB9XG5cblxuICAgIHByb3RlY3RlZCBjcmVhdGVBeGVzKCkge1xuICAgICAgICBjb25zdCBzZWxzID0gdGhpcy5zZWxzXG4gICAgICAgIGNvbnN0IHNjYWxlcyA9IHRoaXMuc2NhbGVzXG4gICAgICAgIGNvbnN0IG9wID0gdGhpcy5vcHRpb25zXG5cbiAgICAgICAgLy8gQ3JlYXRlIGF4ZXNcbiAgICAgICAgc2Vscy54YXhpcyA9IHRoaXMuYmFzZS5hcHBlbmQoXCJnXCIpXG4gICAgICAgICAgICAuYXR0cihcImNsYXNzXCIsIFwiYXhpcyBheGlzLS14XCIpXG4gICAgICAgICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBTVkcudHJhbnNsYXRlKDAsIG9wLmhlaWdodCAtIGF4aXNPZmZzZXQpKVxuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgLmNhbGwoZDMuYXhpc0JvdHRvbShzY2FsZXMueCkudGlja3MoNCkudGlja0Zvcm1hdChcIlwiKSk7XG5cbiAgICAgICAgc2Vscy55YXhpcyA9IHRoaXMuYmFzZS5hcHBlbmQoXCJnXCIpXG4gICAgICAgICAgICAuYXR0cihcImNsYXNzXCIsIFwiYXhpcyBheGlzLS15XCIpXG4gICAgICAgICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBTVkcudHJhbnNsYXRlKDAsIC0gYXhpc09mZnNldCkpXG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICAuY2FsbChkMy5heGlzTGVmdChzY2FsZXMueSkudGlja3MoNCkudGlja0Zvcm1hdChcIlwiKSk7XG5cbiAgICAgICAgdGhpcy5iYXNlLmFwcGVuZChcInRleHRcIilcbiAgICAgICAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIFNWRy50cmFuc2xhdGUob3Aud2lkdGggLyAyLCBvcC5tYXJnaW4udG9wICsgb3AuaGVpZ2h0ICsgMTApKVxuICAgICAgICAgICAgLnN0eWxlKFwidGV4dC1hbmNob3JcIiwgXCJtaWRkbGVcIilcbiAgICAgICAgICAgIC50ZXh0KFwiVGltZVwiKVxuXG4gICAgICAgIHRoaXMuYmFzZS5hcHBlbmQoXCJ0ZXh0XCIpXG4gICAgICAgICAgICAuc3R5bGUoXCJ0ZXh0LWFuY2hvclwiLCBcIm1pZGRsZVwiKVxuICAgICAgICAgICAgLnRleHQoXCJcXHUwM0I4IC0gXFx1MDNCOCpcIilcbiAgICAgICAgICAgIC5hdHRyKFwieVwiLCBvcC5wYWQubGVmdCAtIG9wLm1hcmdpbi5sZWZ0KVxuICAgICAgICAgICAgLmF0dHIoXCJ4XCIsIG9wLnBhZC50b3AgLSAob3AuaGVpZ2h0IC8gMikpXG4gICAgICAgICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBTVkcucm90YXRlKC05MCkpXG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGNyZWF0ZVBhdGgoKSB7XG4gICAgICAgIHRoaXMucGF0aCA9IGQzLmxpbmU8bnVtYmVyPigpXG4gICAgICAgICAgICAueCgoZDogbnVtYmVyLCBpOiBudW1iZXIpID0+IHRoaXMuc2NhbGVzLngoaSkpXG4gICAgICAgICAgICAueSgoZDogbnVtYmVyLCBpOiBudW1iZXIpID0+IHRoaXMuc2NhbGVzLnkoZCkpXG4gICAgICAgICAgICAuY3VydmUoZDMuY3VydmVMaW5lYXIpXG4gICAgfVxuXG4gICAgZGF0YSgpOiBUXG4gICAgZGF0YSh2YWw6IFQpOiB0aGlzXG4gICAgZGF0YSh2YWw/KSB7XG4gICAgICAgIGlmICh2YWwgPT0gbnVsbCkgcmV0dXJuIHRoaXMuX2RhdGFcbiAgICAgICAgdGhpcy5fZGF0YSA9IHZhbDtcbiAgICAgICAgcmV0dXJuIHRoaXNcbiAgICB9XG5cbiAgICByZXNldFhyYW5nZV8oKTogdGhpcyB7XG4gICAgICAgIHRoaXMub3B0aW9ucy54cmFuZ2UgPSB0aGlzLmRlZmF1bHRYcmFuZ2VcbiAgICAgICAgcmV0dXJuIHRoaXNcbiAgICB9XG59IiwiaW1wb3J0ICogYXMgZDMgZnJvbSAnZDMnXG5pbXBvcnQgeyBEM1NlbCwgbGluc3BhY2UgfSBmcm9tICcuLi91dGlsL3hkMydcbmltcG9ydCAqIGFzIFIgZnJvbSAncmFtZGEnXG5pbXBvcnQgeyBsZWdlbmRDb2xvciB9IGZyb20gJ2QzLXN2Zy1sZWdlbmQnXG5pbXBvcnQgeyBWZWN0b3IyRCB9IGZyb20gJy4uL3R5cGVzJ1xuaW1wb3J0IHsgU1ZHT3B0aW9ucywgU1ZHVmlzQ29tcG9uZW50IH0gZnJvbSAnLi4vdXRpbC9TVkdWaXNDb21wb25lbnQnXG5pbXBvcnQgeyBTaW1wbGVFdmVudEhhbmRsZXIgfSBmcm9tICcuLi91dGlsL1NpbXBsZUV2ZW50SGFuZGxlcic7XG5pbXBvcnQgeyBTVkcgfSBmcm9tICcuLi91dGlsL1NWR3BsdXMnXG5pbXBvcnQgeyBnZXRDb250b3VyVmFsdWVzIH0gZnJvbSAnLi4vcGxvdHRpbmcnXG5pbXBvcnQgeyBVcGRhdGVyLCBCbG9ja1VwZGF0ZXIgfSBmcm9tICcuLi9Db250b3VyUGxvdFVwZGF0ZXInXG5pbXBvcnQgeyBpbnRlcnZhbCwgZnJvbUV2ZW50IH0gZnJvbSAncnhqcydcbmltcG9ydCB7IG1hcCwgdGFwLCB0YWtlLCBzdGFydFdpdGgsIHNjYW4sIHN3aXRjaE1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJ1xuXG50eXBlIFQgPSBudW1iZXJbXVxuXG5leHBvcnQgZnVuY3Rpb24gamFnZ2VkTG9zcyh4MTpudW1iZXIsIHgyOm51bWJlcik6bnVtYmVyIHtcbiAgICBjb25zdCBmcmVxcyA9IGxpbnNwYWNlKC0yLCAzLCA3KS5tYXAoeCA9PiBNYXRoLmV4cCh4KSlcbiAgICBjb25zdCBhYSA9IGZyZXFzLm1hcCh4ID0+IDEveClcblxuICAgIGxldCB5MSA9IHgxLCB5MiA9IHgyXG4gICAgZnJlcXMuZm9yRWFjaCgoaCwgbSkgPT4ge1xuICAgICAgICB5MSA9IGFhW21dICogTWF0aC5zaW4oaCAqIHgyKSArIHkxXG4gICAgICAgIHkyID0gYWFbbV0gKiBNYXRoLmNvcyhoICogeDEpICsgeTJcbiAgICB9KVxuXG4gICAgY29uc3QgczEgPSBmcmVxcy5yZWR1Y2UoKGFjYywgaCwgbSkgPT4gKGFhW21dICogTWF0aC5zaW4oaCAqIHkxKSkgKyBhY2MsIDApXG4gICAgY29uc3QgYzEgPSBmcmVxcy5yZWR1Y2UoKGFjYywgaCwgbSkgPT4gKGFhW21dICogTWF0aC5jb3MoaCAqIHkxKSkgKyBhY2MsIDApXG4gICAgY29uc3QgczIgPSBmcmVxcy5yZWR1Y2UoKGFjYywgaCwgbSkgPT4gKGFhW21dICogTWF0aC5zaW4oaCAqIHkyKSkgKyBhY2MsIDApXG4gICAgY29uc3QgYzIgPSBmcmVxcy5yZWR1Y2UoKGFjYywgaCwgbSkgPT4gKGFhW21dICogTWF0aC5jb3MoaCAqIHkyKSkgKyBhY2MsIDApXG5cbiAgICBjb25zdCB6MSA9IHkxICogczIgKyBjMSAqIHkyXG4gICAgY29uc3QgejIgPSBzMSAqIHkyICsgeTEgKiBjMlxuICAgIHJldHVybiAoTWF0aC5wb3coejEsIDIpICsgTWF0aC5wb3coejIsIDIpKVxufVxuXG5pbnRlcmZhY2UgR3JhcGhPcHRpb25zIGV4dGVuZHMgU1ZHT3B0aW9ucyB7XG4gICAgeHJhbmdlOiBbbnVtYmVyLCBudW1iZXJdXG4gICAgeXJhbmdlOiBbbnVtYmVyLCBudW1iZXJdXG4gICAgbjogbnVtYmVyICAgICAgICAgICAgICAgICAgIC8vIE51bWJlciBvZiBtZXNoZ3JpZCBwb2ludHMgYWxvbmcgdGhlIHggYXhpc1xuICAgIG06IG51bWJlciAgICAgICAgICAgICAgICAgICAvLyBOdW1iZXIgb2YgbWVzaGdyaWQgcG9pbnRzIGFsb25nIHRoZSB5IGF4aXNcbiAgICBwYWQ6IG51bWJlciAgICAgICAgICAgICAgICAgLy8gQW5ub3RhdGlvbnMgdGhhdCBoYXBwZW4gaW4gdGhlIG1hcmdpbiBtdXN0IHRha2UgcGxhY2UgYHBhZGAgZGlzdGFuY2UgZnJvbSB0aGUgbWFpbiBncmFwaFxufVxuXG5pbnRlcmZhY2UgR3JhcGhTY2FsZXMge1xuICAgIHg/OiBkMy5TY2FsZUxpbmVhcjxudW1iZXIsIG51bWJlcj4sXG4gICAgeT86IGQzLlNjYWxlTGluZWFyPG51bWJlciwgbnVtYmVyPixcbiAgICAvLyBjb2xvcj86IGQzLlNjYWxlTGluZWFyPG51bWJlciwgc3RyaW5nPixcbiAgICBjb2xvcj86IGQzLlNjYWxlTGluZWFyPG51bWJlciwgc3RyaW5nPixcbiAgICBjdXJ2ZT86IGQzLkN1cnZlQ2F0bXVsbFJvbUZhY3RvcnksXG4gICAgY29udG91cnM/OiBkMy5Db250b3VycyxcbiAgICB0aHJlc2hvbGRzPzogbnVtYmVyW11cbn1cblxuaW50ZXJmYWNlIEdyYXBoU2VscyB7XG4gICAgeGF4aXM/OiBEM1NlbFxuICAgIHlheGlzPzogRDNTZWxcbiAgICBsZWdlbmQ/OiBEM1NlbFxuICAgIHRpcD86IEQzU2VsXG4gICAgeGxhYmVsPzogRDNTZWxcbiAgICB5bGFiZWw/OiBEM1NlbFxuICAgIGNpcmNsZT86IEQzU2VsXG4gICAgYXJyb3dzPzogRDNTZWxbXVxufVxuXG5jb25zdCBFVkVOVFMgPSB7XG4gIHN0ZXBBZGRlZDogXCJTaW1wbGVOZXRfU3RlcEFkZGVkXCJcbn1cblxuZXhwb3J0IGNsYXNzIExvc3NTdXJmYWNlMkQgZXh0ZW5kcyBTVkdWaXNDb21wb25lbnQ8VD4ge1xuICAgIGNzc25hbWUgPSBcInNpbXBsZS1ncmFwaFwiXG5cbiAgICBfZGF0YTogVFxuXG4gICAgb3B0aW9uczogR3JhcGhPcHRpb25zID0ge1xuICAgICAgICBtYXhXaWR0aDogNDUwLFxuICAgICAgICBtYXhIZWlnaHQ6IDUwMCxcbiAgICAgICAgbWFyZ2luOiB7IHRvcDogNTAsIHJpZ2h0OiA3NSwgYm90dG9tOiAxMjUsIGxlZnQ6IDUwIH0sXG4gICAgICAgIHBhZDogMzAsXG4gICAgICAgIHhyYW5nZTogWzAsIDhdLFxuICAgICAgICB5cmFuZ2U6IFswLCA4XSxcbiAgICAgICAgbjogMTAwLFxuICAgICAgICBtOiAxMDAsXG4gICAgfSAvLyAjc3RhdGVcblxuICAgIHNjYWxlczogR3JhcGhTY2FsZXMgPSB7fVxuICAgIHNlbHM6IEdyYXBoU2VscyA9IHt9XG5cbiAgICBzdGF0aWMgZXZlbnRzID0gRVZFTlRTXG5cbiAgICBjb25zdHJ1Y3RvcihkM3BhcmVudDogRDNTZWwsIGV2ZW50SGFuZGxlcj86IFNpbXBsZUV2ZW50SGFuZGxlciwgb3B0aW9ucyA9IHt9KSB7XG4gICAgICAgIHN1cGVyKGQzcGFyZW50LCBldmVudEhhbmRsZXIsIG9wdGlvbnMpXG4gICAgICAgIHN1cGVyLmluaXRTVkcodGhpcy5vcHRpb25zKVxuICAgICAgICB0aGlzLmJhc2UuY2xhc3NlZCh0aGlzLmNzc25hbWUsIHRydWUpXG4gICAgICAgIHRoaXMuaW5pdFBsb3QoKVxuICAgIH1cblxuICAgIHBsb3RDb250b3VycygpIHtcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgICAgIGNvbnN0IG9wID0gdGhpcy5vcHRpb25zO1xuICAgICAgICBjb25zdCBzY2FsZXMgPSB0aGlzLnNjYWxlcztcblxuICAgICAgICBjb25zdCBjb250b3VyRnVuYyA9IGphZ2dlZExvc3NcbiAgICAgICAgY29uc3QgdmFscyA9IGdldENvbnRvdXJWYWx1ZXMob3Aubiwgb3AubSwgb3AueHJhbmdlLCBvcC55cmFuZ2UsIGNvbnRvdXJGdW5jKVxuICAgICAgICBsZXQgdGhyZXNob2xkcyA9IGxpbnNwYWNlKGQzLm1pbih2YWxzKSwgZDMubWF4KHZhbHMpLCAyNSk7XG5cbiAgICAgICAgc2NhbGVzLmNvbG9yID0gZDMuc2NhbGVMaW5lYXIoKS5kb21haW4oZDMuZXh0ZW50KHZhbHMpKS5yYW5nZShbMCwgMV0pLmludGVycG9sYXRlKCgpID0+IGQzLmludGVycG9sYXRlQmx1ZXMpO1xuXG4gICAgICAgIHNjYWxlcy5jb250b3Vycy50aHJlc2hvbGRzKHRocmVzaG9sZHMpXG5cbiAgICAgICAgY29uc3QgY29udG91clZhbHMgPSBzY2FsZXMuY29udG91cnModmFscylcbiAgICAgICAgY29uc3QgY29udG91ckdyb3VwID0gdGhpcy5iYXNlLmFwcGVuZCgnZycpLmF0dHIoJ2lkJywgJ2NvbnRvdXItZ3JvdXAnKVxuICAgICAgICBjb25zdCBjb250b3VycyA9IGNvbnRvdXJHcm91cC5zZWxlY3RBbGwoXCJwYXRoLmNvbnRvdXJcIilcbiAgICAgICAgICAgIC5kYXRhKGNvbnRvdXJWYWxzKVxuXG5cbiAgICAgICAgY29udG91cnMuam9pbihcInBhdGhcIilcbiAgICAgICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJjb250b3VyXCIpXG4gICAgICAgICAgICAuYXR0cihcImRcIiwgZDMuZ2VvUGF0aChkMy5nZW9JZGVudGl0eSgpLnNjYWxlKG9wLndpZHRoIC8gb3AubikpKVxuICAgICAgICAgICAgLmF0dHIoXCJmaWxsXCIsIGQgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBzY2FsZXMuY29sb3IoZC52YWx1ZSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2xhc3NlZCgnbm90LWZpdCcsIGQgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgICAgICB9KVxuXG4gICAgfVxuXG5cbiAgICBpbnRvVmlzKHY6IFZlY3RvcjJEKSB7XG4gICAgICAgIHJldHVybiB7IHg6IHRoaXMuc2NhbGVzLngodi54KSwgeTogdGhpcy5zY2FsZXMueSh2LnkpIH1cbiAgICB9XG5cbiAgICBpbnRvTWF0aCh2OiBWZWN0b3IyRCkge1xuICAgICAgICByZXR1cm4geyB4OiB0aGlzLnNjYWxlcy54LmludmVydCh2LngpLCB5OiB0aGlzLnNjYWxlcy55LmludmVydCh2LnkpIH1cbiAgICB9XG5cbiAgICBpbml0UGxvdCgpIHtcbiAgICAgICAgLy8gSW5pdGlhbGl6ZSBwbG90c1xuICAgICAgICB0aGlzLnBsb3RDb250b3VycygpXG4gICAgfVxuXG4gICAgaW5pdCgpIHtcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgICAgIGNvbnN0IG9wID0gdGhpcy5vcHRpb25zO1xuICAgICAgICBjb25zdCBzY2FsZXMgPSB0aGlzLnNjYWxlcztcbiAgICAgICAgY29uc3Qgc2VscyA9IHRoaXMuc2VscztcblxuICAgICAgICAvLyBBZGQgZGVmaW5pdGlvbnNcbiAgICAgICAgU1ZHLmFkZEFycm93cyh0aGlzLnN2ZylcblxuICAgICAgICAvLyBDcmVhdGUgc2NhbGVzXG4gICAgICAgIHNjYWxlcy5jb250b3VycyA9IGQzLmNvbnRvdXJzKCkuc2l6ZShbb3Aubiwgb3AubV0pXG4gICAgICAgIHNjYWxlcy5jdXJ2ZSA9IGQzLmN1cnZlQ2F0bXVsbFJvbS5hbHBoYSgwLjUpXG4gICAgICAgIHNjYWxlcy54ID0gZDMuc2NhbGVMaW5lYXIoKS5kb21haW4ob3AueHJhbmdlKS5yYW5nZShbMCwgb3Aud2lkdGhdKVxuICAgICAgICBzY2FsZXMueSA9IGQzLnNjYWxlTGluZWFyKCkuZG9tYWluKG9wLnlyYW5nZSkucmFuZ2UoW29wLmhlaWdodCwgMF0pXG5cbiAgICAgICAgLy8gQWRkIEF4ZXMgYW5kIGxhYmVsc1xuICAgICAgICBzZWxzLnhheGlzID0gdGhpcy5iYXNlLmFwcGVuZChcImdcIilcbiAgICAgICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJheGlzIGF4aXMtLXhcIilcbiAgICAgICAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIFNWRy50cmFuc2xhdGUoMCwgb3AuaGVpZ2h0KSlcbiAgICAgICAgICAgIC5jYWxsKGQzLmF4aXNCb3R0b20oc2NhbGVzLngpLnRpY2tzKDMsIFwic1wiKSk7XG5cbiAgICAgICAgc2Vscy55YXhpcyA9IHRoaXMuYmFzZS5hcHBlbmQoXCJnXCIpXG4gICAgICAgICAgICAuYXR0cihcImNsYXNzXCIsIFwiYXhpcyBheGlzLS15XCIpXG4gICAgICAgICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBTVkcudHJhbnNsYXRlKDAsIDApKVxuICAgICAgICAgICAgLmNhbGwoZDMuYXhpc0xlZnQoc2NhbGVzLnkpLnRpY2tzKDMsIFwic1wiKSk7XG5cbiAgICAgICAgLy8gc2Vscy54bGFiZWwgPSB0aGlzLmJhc2UuYXBwZW5kKFwidGV4dFwiKVxuICAgICAgICAvLyAgICAgLnRleHQoXCJ3MFwiKVxuICAgICAgICAvLyAgICAgLmF0dHIoXCJjbGFzc1wiLCBcInRpdGxlc1wiKVxuICAgICAgICAvLyAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgU1ZHLnRyYW5zbGF0ZShvcC53aWR0aCAvIDIsIG9wLmhlaWdodCArIG9wLnBhZCkpXG5cbiAgICAgICAgLy8gc2Vscy55bGFiZWwgPSB0aGlzLmJhc2UuYXBwZW5kKFwidGV4dFwiKVxuICAgICAgICAvLyAgICAgLnRleHQoXCJ3MVwiKVxuICAgICAgICAvLyAgICAgLmF0dHIoXCJjbGFzc1wiLCBcInRpdGxlc1wiKVxuICAgICAgICAvLyAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgU1ZHLnRyYW5zbGF0ZSgtb3AucGFkLCBvcC5oZWlnaHQgLyAyKSArIFNWRy5yb3RhdGUoLTkwKSlcbiAgICB9XG5cbiAgICBkYXRhKCk6IG51bWJlcltdXG4gICAgZGF0YSh2YWw6IG51bWJlcltdKTogdGhpc1xuICAgIGRhdGEodmFsPykge1xuICAgICAgICBpZiAodmFsID09IG51bGwpIHJldHVybiB0aGlzLl9kYXRhXG4gICAgICAgIHRoaXMuX2RhdGEgPSB2YWxcbiAgICAgICAgcmV0dXJuIHRoaXNcbiAgICB9XG59IiwiaW1wb3J0ICogYXMgZDMgZnJvbSAnZDMnXG5pbXBvcnQgeyBiYXNlTG9zcyB9IGZyb20gJy4uL0dvbGZMYW5kc2NhcGVzJ1xuXG5leHBvcnQgY2xhc3MgTWFudWFsVXBkYXRlciB7XG4gICAgZjogKHg6IG51bWJlcikgPT4gbnVtYmVyXG4gICAgZGY6ICh4OiBudW1iZXIpID0+IG51bWJlclxuXG4gICAgLy8gcSA9IDEvcSBpbiB0aGUgSW50ZXJmYWNlIChkdWUgdG8gbmljZSBwcm9wZXJ0aWVzIG9mIHRoaXMgZGVmaW5pdGlvbikgaXMgYSBkaWZmZXJlbnQgdmFsdWUgdGhhbiB0aGlzXG4gICAgcTogbnVtYmVyICAgLy8gMCAtPiAxLCB3aGVyZSAwIGlzIFNHRCBhbmQgMSBpcyBOR0QuIDAuNSBpcyBzcXJ0IE5HRC4gW3N0ZXAgPSAtIGV0YSAqIEggXiAoLTEvcSkgKiBnXSAoSCA9IDAgd2hlbiBxPTApXG4gICAgZXRhOiBudW1iZXIgLy8gYWthICdsZWFybmluZyByYXRlJ1xuXG4gICAgY29uc3RydWN0b3IoZiwgZGYsIHEgPSAwLCBldGEgPSAwLjEpIHtcbiAgICAgICAgdGhpcy5mID0gZjtcbiAgICAgICAgdGhpcy5kZiA9IGRmO1xuICAgICAgICB0aGlzLnEgPSBxO1xuICAgICAgICB0aGlzLmV0YSA9IGV0YTtcbiAgICB9XG5cbiAgICAvLyBDYWxjdWxhdGUgZXJyb3Igc3F1YXJlZCBvZiB0aGUgYmFzZSBmdW5jdGlvblxuICAgIGxvc3MoeDogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIGJhc2VMb3NzKHRoaXMuZih4KSlcbiAgICB9XG5cbiAgICAvLyBHcmFkaWVudCBhdCB4XG4gICAgZ3JhZGllbnQoeDogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZih4KSAqIHRoaXMuZGYoeClcbiAgICB9XG5cbiAgICAvLyBUaGUgcG9zaXRpdmUgc2VtaS1kZWZpbml0ZSBoZXNzaWFuIGF0IHhcbiAgICBwc2RoZXNzKHg6IG51bWJlcik6IG51bWJlciB7XG4gICAgICAgIHJldHVybiBNYXRoLnBvdyh0aGlzLmRmKHgpLCAyKVxuICAgIH1cblxuICAgIHVwZGF0ZU1vZGlmaWVyKHg6IG51bWJlcik6IG51bWJlciB7XG4gICAgICAgIHJldHVybiBNYXRoLnBvdyh0aGlzLmRmKHgpLCAxIC0gKDIgKiB0aGlzLnEpKVxuICAgIH1cblxuICAgIHVwZGF0ZUFtdCh4OiBudW1iZXIpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5mKHgpICogdGhpcy51cGRhdGVNb2RpZmllcih4KVxuICAgIH1cblxuICAgIC8vIFRoZSBhbW91bnQgdG8gdXBkYXRlIGF0IHggZ2l2ZW4gdGhlIGxlYXJuaW5nIHJhdGUgZXRhXG4gICAgc3RlcCh4OiBudW1iZXIpOiBudW1iZXIge1xuICAgICAgICAvLyBDb3VsZCB1c2UgcHNkaGVzcyBpbiB0aGUgZXF1YXRpb24gYmVsb3csIGJ1dCBkdWUgdG8gbnVtZXJpY2FsIGlzc3VlcyB0aGlzIGZvcm11bGF0aW9uIGNvbXB1dGVzIG1vcmUgcmVsaWFibHlcbiAgICAgICAgcmV0dXJuIC0gdGhpcy5ldGEgKiB0aGlzLnVwZGF0ZUFtdCh4KVxuICAgIH1cblxuICAgIC8vIEdldCB0aGUgbmV4dCB4IHZhbHVlIGFmdGVyIHRha2luZyBhIHN0ZXBcbiAgICBuZXh0KHg6IG51bWJlcik6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB4ICsgdGhpcy5zdGVwKHgpXG4gICAgfVxufVxuXG5cbmV4cG9ydCBjbGFzcyBNYW51YWxVcGRhdGVyMkQge1xuICAgIGY6ICh4OiBudW1iZXIpID0+IG51bWJlclxuICAgIGRmOiAoeDogbnVtYmVyKSA9PiBudW1iZXJcblxuICAgIC8vIHEgPSAxL3EgaW4gdGhlIEludGVyZmFjZSAoZHVlIHRvIG5pY2UgcHJvcGVydGllcyBvZiB0aGlzIGRlZmluaXRpb24pIGlzIGEgZGlmZmVyZW50IHZhbHVlIHRoYW4gdGhpc1xuICAgIHE6IG51bWJlciAgIC8vIDAgLT4gMSwgd2hlcmUgMCBpcyBTR0QgYW5kIDEgaXMgTkdELiAwLjUgaXMgc3FydCBOR0QuIFtzdGVwID0gLSBldGEgKiBIIF4gKC0xL3EpICogZ10gKEggPSAwIHdoZW4gcT0wKVxuICAgIGV0YTogbnVtYmVyIC8vIGFrYSAnbGVhcm5pbmcgcmF0ZSdcblxuICAgIGNvbnN0cnVjdG9yKGYsIGRmLCBxID0gMCwgZXRhID0gMC4xKSB7XG4gICAgICAgIHRoaXMuZiA9IGY7XG4gICAgICAgIHRoaXMuZGYgPSBkZjtcbiAgICAgICAgdGhpcy5xID0gcTtcbiAgICAgICAgdGhpcy5ldGEgPSBldGE7XG4gICAgfVxuXG4gICAgLy8gQ2FsY3VsYXRlIGVycm9yIHNxdWFyZWQgb2YgdGhlIGJhc2UgZnVuY3Rpb25cbiAgICBsb3NzKHg6IG51bWJlcik6IG51bWJlciB7XG4gICAgICAgIHJldHVybiBiYXNlTG9zcyh0aGlzLmYoeCkpXG4gICAgfVxuXG4gICAgLy8gR3JhZGllbnQgYXQgeFxuICAgIGdyYWRpZW50KHg6IG51bWJlcik6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLmYoeCkgKiB0aGlzLmRmKHgpXG4gICAgfVxuXG4gICAgLy8gVGhlIHBvc2l0aXZlIHNlbWktZGVmaW5pdGUgaGVzc2lhbiBhdCB4XG4gICAgcHNkaGVzcyh4OiBudW1iZXIpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gTWF0aC5wb3codGhpcy5kZih4KSwgMilcbiAgICB9XG5cbiAgICB1cGRhdGVNb2RpZmllcih4OiBudW1iZXIpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gTWF0aC5wb3codGhpcy5kZih4KSwgMSAtICgyICogdGhpcy5xKSlcbiAgICB9XG5cbiAgICB1cGRhdGVBbXQoeDogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZih4KSAqIHRoaXMudXBkYXRlTW9kaWZpZXIoeClcbiAgICB9XG5cbiAgICAvLyBUaGUgYW1vdW50IHRvIHVwZGF0ZSBhdCB4IGdpdmVuIHRoZSBsZWFybmluZyByYXRlIGV0YVxuICAgIHN0ZXAoeDogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgICAgLy8gQ291bGQgdXNlIHBzZGhlc3MgaW4gdGhlIGVxdWF0aW9uIGJlbG93LCBidXQgZHVlIHRvIG51bWVyaWNhbCBpc3N1ZXMgdGhpcyBmb3JtdWxhdGlvbiBjb21wdXRlcyBtb3JlIHJlbGlhYmx5XG4gICAgICAgIHJldHVybiAtIHRoaXMuZXRhICogdGhpcy51cGRhdGVBbXQoeClcbiAgICB9XG5cbiAgICAvLyBHZXQgdGhlIG5leHQgeCB2YWx1ZSBhZnRlciB0YWtpbmcgYSBzdGVwXG4gICAgbmV4dCh4OiBudW1iZXIpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4geCArIHRoaXMuc3RlcCh4KVxuICAgIH1cbn0iLCJpbXBvcnQgKiBhcyBkMyBmcm9tICdkMydcbmltcG9ydCB7IExhbmRzY2FwZTJEIH0gZnJvbSBcIi4uL0xhbmRzY2FwZXMyRFwiXG5pbXBvcnQgeyBEM1NlbCwgbGluc3BhY2UsIHBvd3NwYWNlfSBmcm9tICcuLi91dGlsL3hkMydcbmltcG9ydCB7IFZlY3RvcjJELCBBcnJheSB9IGZyb20gJy4uL3R5cGVzJ1xuaW1wb3J0IHsgU1ZHT3B0aW9ucywgU1ZHVmlzQ29tcG9uZW50IH0gZnJvbSAnLi4vdXRpbC9TVkdWaXNDb21wb25lbnQnXG5pbXBvcnQgeyBTaW1wbGVFdmVudEhhbmRsZXIgfSBmcm9tICcuLi91dGlsL1NpbXBsZUV2ZW50SGFuZGxlcic7XG5pbXBvcnQgeyBTVkcgfSBmcm9tICcuLi91dGlsL1NWR3BsdXMnXG5pbXBvcnQgeyBnZXRDb250b3VyVmFsdWVzIH0gZnJvbSAnLi4vcGxvdHRpbmcnXG5pbXBvcnQgeyBVcGRhdGVyMkQgfSBmcm9tICcuLi9VcGRhdGVyMkQnXG5pbXBvcnQgeyBpbnRlcnZhbCB9IGZyb20gJ3J4anMnXG5pbXBvcnQgeyB0YWtlLCBzdGFydFdpdGgsIHNjYW4gfSBmcm9tICdyeGpzL29wZXJhdG9ycydcbmltcG9ydCAqIGFzIG5qIGZyb20gXCJudW1qc1wiXG5cbnR5cGUgVCA9IG51bWJlcltdXG5cbmludGVyZmFjZSBHcmFwaE9wdGlvbnMgZXh0ZW5kcyBTVkdPcHRpb25zIHtcbiAgICB4cmFuZ2U6IFtudW1iZXIsIG51bWJlcl1cbiAgICB5cmFuZ2U6IFtudW1iZXIsIG51bWJlcl1cbiAgICBuOiBudW1iZXIgICAgICAgICAgICAgICAgICAgLy8gTnVtYmVyIG9mIG1lc2hncmlkIHBvaW50cyBhbG9uZyB0aGUgeCBheGlzXG4gICAgbTogbnVtYmVyICAgICAgICAgICAgICAgICAgIC8vIE51bWJlciBvZiBtZXNoZ3JpZCBwb2ludHMgYWxvbmcgdGhlIHkgYXhpc1xuICAgIHBhZDogbnVtYmVyICAgICAgICAgICAgICAgICAvLyBBbm5vdGF0aW9ucyB0aGF0IGhhcHBlbiBpbiB0aGUgbWFyZ2luIG11c3QgdGFrZSBwbGFjZSBgcGFkYCBkaXN0YW5jZSBmcm9tIHRoZSBtYWluIGdyYXBoXG4gICAgbkNvbnRvdXJzOiBudW1iZXJcbiAgICBjaXJjbGVFdmVyeTogbnVtYmVyXG4gICAgdXBkYXRlcjogVXBkYXRlcjJEXG4gICAgeGxhYmVsOiBzdHJpbmdcbiAgICB5bGFiZWw6IHN0cmluZ1xuICAgIHRpdGxlOiBzdHJpbmdcbiAgICBjb2xvclNjYWxlOiAoeDogbnVtYmVyKSA9PiBzdHJpbmcgfCBudW1iZXJcbiAgICBtYXhUaWNrOiBudW1iZXIgLy8gbWF4IG51bWJlciBvZiBkZXNjZW50IHVwZGF0ZXMgdG8gdGFrZVxuICAgIGludGVydmFsOiBudW1iZXIgLy8gdGltZSBiZXR3ZWVuIGRlc2NlbnQgdXBkYXRlc1xufVxuXG5pbnRlcmZhY2UgR3JhcGhTY2FsZXMge1xuICAgIHg/OiBkMy5TY2FsZUxpbmVhcjxudW1iZXIsIG51bWJlcj4sXG4gICAgeT86IGQzLlNjYWxlTGluZWFyPG51bWJlciwgbnVtYmVyPixcbiAgICBjb2xvcj86ICh4OiBudW1iZXIpID0+IHN0cmluZyB8IG51bWJlcixcbiAgICBjdXJ2ZT86IGQzLkN1cnZlQ2F0bXVsbFJvbUZhY3RvcnksXG4gICAgY29udG91cnM/OiBkMy5Db250b3VycyxcbiAgICB0aHJlc2hvbGRzPzogbnVtYmVyW11cbn1cblxuaW50ZXJmYWNlIEdyYXBoU2VscyB7XG4gICAgeGF4aXM/OiBEM1NlbFxuICAgIHlheGlzPzogRDNTZWxcbiAgICBsZWdlbmQ/OiBEM1NlbFxuICAgIHRpcD86IEQzU2VsXG4gICAgeGxhYmVsPzogRDNTZWxcbiAgICB5bGFiZWw/OiBEM1NlbFxuICAgIGNpcmNsZT86IEQzU2VsXG4gICAgYXJyb3dzPzogRDNTZWxbXVxuICAgIHRpdGxlPzogRDNTZWxcbn1cblxuY29uc3QgRVZFTlRTID0ge1xuICAgIHN0ZXBBZGRlZDogXCJTaW1wbGVOZXRfU3RlcEFkZGVkXCJcbn1cblxuZXhwb3J0IGNsYXNzIENvbnRvdXJQbG90IGV4dGVuZHMgU1ZHVmlzQ29tcG9uZW50PFQ+IHtcbiAgICBjc3NuYW1lID0gXCJzaW1wbGUtZ3JhcGhcIlxuXG4gICAgX2RhdGE6IFRcblxuICAgIG9wdGlvbnM6IEdyYXBoT3B0aW9ucyA9IHtcbiAgICAgICAgbWF4V2lkdGg6IDQ1MCxcbiAgICAgICAgbWF4SGVpZ2h0OiA1MDAsXG4gICAgICAgIG1hcmdpbjogeyB0b3A6IDUwLCByaWdodDogNzUsIGJvdHRvbTogMTI1LCBsZWZ0OiA1MCB9LFxuICAgICAgICBwYWQ6IDMwLFxuICAgICAgICB4cmFuZ2U6IFswLCAxLjZdLFxuICAgICAgICB5cmFuZ2U6IFswLCAxLjZdLFxuICAgICAgICBuOiAyMDEsXG4gICAgICAgIG06IDIwMSxcbiAgICAgICAgbkNvbnRvdXJzOiAyMCxcbiAgICAgICAgY2lyY2xlRXZlcnk6IDQsXG4gICAgICAgIHVwZGF0ZXI6IG51bGwsXG4gICAgICAgIHhsYWJlbDogXCJ4XCIsXG4gICAgICAgIHlsYWJlbDogXCJ5XCIsXG4gICAgICAgIHRpdGxlOiBudWxsLFxuICAgICAgICAvL0B0cy1pZ25vcmVcbiAgICAgICAgY29sb3JTY2FsZTogZDMuc2NhbGVMaW5lYXIoKVxuICAgICAgICAgICAgLmRvbWFpbihbMCwgMS40XSlcbiAgICAgICAgICAgIC8vQHRzLWlnbm9yZVxuICAgICAgICAgICAgLnJhbmdlKFtcInN0ZWVsYmx1ZVwiLCBcIndoaXRlXCJdKVxuICAgICAgICAgICAgLy9AdHMtaWdub3JlXG4gICAgICAgICAgICAuaW50ZXJwb2xhdGUoZDMuaW50ZXJwb2xhdGVSZ2IuZ2FtbWEoMi4yKSksXG4gICAgICAgIG1heFRpY2s6IDEwMDAsXG4gICAgICAgIGludGVydmFsOiAxMCxcbiAgICB9XG5cbiAgICBzZWxzOiBHcmFwaFNlbHMgPSB7fVxuXG4gICAgLy8gT3RoZXJcbiAgICBfY3VyciA9IHtcbiAgICAgICAgY3VyckxvYzogbmouYXJyYXkoWzAuMSwgMC4yXSksXG4gICAgICAgIHN0ZXA6IDAsXG4gICAgICAgIHRpY2tlcjogbnVsbCxcbiAgICB9XG5cbiAgICBzdGF0aWMgZXZlbnRzID0gRVZFTlRTXG5cbiAgICBjb25zdHJ1Y3RvcihkM3BhcmVudDogRDNTZWwsIGV2ZW50SGFuZGxlcj86IFNpbXBsZUV2ZW50SGFuZGxlciwgb3B0aW9uczogUGFydGlhbDxHcmFwaE9wdGlvbnM+ID0ge30pIHtcbiAgICAgICAgc3VwZXIoZDNwYXJlbnQsIGV2ZW50SGFuZGxlciwgb3B0aW9ucylcbiAgICAgICAgc3VwZXIuaW5pdFNWRyhvcHRpb25zKVxuICAgICAgICB0aGlzLmJhc2UuY2xhc3NlZCh0aGlzLmNzc25hbWUsIHRydWUpXG4gICAgICAgIHRoaXMub3B0aW9ucy51cGRhdGVyID0gb3B0aW9ucy51cGRhdGVyID09IG51bGwgPyBuZXcgVXBkYXRlcjJEKCkgOiBvcHRpb25zLnVwZGF0ZXJcbiAgICAgICAgdGhpcy5pbml0UGxvdCgpXG4gICAgfVxuXG4gICAgc3RhdGljIGZyb21MYW5kc2NhcGUoZDNwYXJlbnQ6IEQzU2VsLCBldmVudEhhbmRsZXI6IFNpbXBsZUV2ZW50SGFuZGxlciwgdDogTGFuZHNjYXBlMkQpOiBDb250b3VyUGxvdCB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiRnJvbSBMYW5kc2NhcGVcIik7XG4gICAgICAgIGNvbnN0IHVwZGF0ZXIgPSBuZXcgdC51cGRhdGVyQ2xhc3ModClcbiAgICAgICAgY29uc3QgbmV3T3B0aW9ucyA9IHsgLi4udCwgdXBkYXRlciB9XG4gICAgICAgIHJldHVybiBuZXcgQ29udG91clBsb3QoZDNwYXJlbnQsIGV2ZW50SGFuZGxlciwgbmV3T3B0aW9ucylcbiAgICB9XG5cbiAgICBzZXRVcGRhdGVyKG5hbWU6ICdibG9jaycgfCAnZnVsbCcpIHtcbiAgICAgICAgY29uc3Qgb3AgPSB0aGlzLm9wdGlvbnNcbiAgICAgICAgaWYgKG5hbWUgPT0gJ2Jsb2NrJykge1xuICAgICAgICAgICAgb3AudXBkYXRlciA9IG9wLnVwZGF0ZXIudG9CbG9jaygpXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAobmFtZSA9PSAnZnVsbCcpIHtcbiAgICAgICAgICAgIG9wLnVwZGF0ZXIgPSBvcC51cGRhdGVyLnRvRnVsbCgpXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlBsZWFzZSBlbnRlciBhIHZhbGlkIGlucHV0IGFzIHVwZGF0ZXJcIik7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy51cGRhdGVRdWl2ZXJzKClcbiAgICB9XG5cbiAgICBnZXQgc2NhbGVzKCk6IEdyYXBoU2NhbGVzIHtcbiAgICAgICAgY29uc3Qgb3AgPSB0aGlzLm9wdGlvbnNcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHg6IGQzLnNjYWxlTGluZWFyKCkuZG9tYWluKG9wLnhyYW5nZSkucmFuZ2UoWzAsIG9wLndpZHRoXSksXG4gICAgICAgICAgICB5OiBkMy5zY2FsZUxpbmVhcigpLmRvbWFpbihvcC55cmFuZ2UpLnJhbmdlKFtvcC5oZWlnaHQsIDBdKSxcbiAgICAgICAgICAgIGNvbnRvdXJzOiBkMy5jb250b3VycygpLnNpemUoW29wLm4sIG9wLm1dKSxcbiAgICAgICAgICAgIGN1cnZlOiBkMy5jdXJ2ZUNhdG11bGxSb20uYWxwaGEoMC41KSxcbiAgICAgICAgICAgIGNvbG9yOiBvcC5jb2xvclNjYWxlXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwbG90Q29udG91cnMoKSB7XG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuICAgICAgICBjb25zdCBvcCA9IHRoaXMub3B0aW9ucztcbiAgICAgICAgY29uc3Qgc2NhbGVzID0gdGhpcy5zY2FsZXM7XG5cbiAgICAgICAgLy8gY29uc3QgY29udG91ckZ1bmMgPSAoeCwgeSkgPT4gdGhpcy51cGRhdGVyLmFic0Vycihuai5hcnJheShbeCwgeV0pKVxuICAgICAgICBjb25zdCBjb250b3VyRnVuYyA9ICh4LCB5KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBsb3NzID0gb3AudXBkYXRlci5sb3NzKG5qLmFycmF5KFt4LCB5XSkpXG4gICAgICAgICAgICByZXR1cm4gbG9zc1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHZhbHMgPSBnZXRDb250b3VyVmFsdWVzKG9wLm4sIG9wLm0sIG9wLnhyYW5nZSwgb3AueXJhbmdlLCBjb250b3VyRnVuYylcbiAgICAgICAgLy8gbGV0IHRocmVzaG9sZHMgPSBsaW5zcGFjZShkMy5taW4odmFscyksIGQzLm1heCh2YWxzKSwgMjApXG4gICAgICAgIGxldCB0aHJlc2hvbGRzID0gcG93c3BhY2UoZDMubWluKHZhbHMpLCBkMy5tYXgodmFscyksIG9wLm5Db250b3VycywgMSlcblxuICAgICAgICBjb25zdCBjb250b3VyVmFscyA9IHNjYWxlcy5jb250b3Vycy50aHJlc2hvbGRzKHRocmVzaG9sZHMpKHZhbHMpXG4gICAgICAgIGNvbnN0IGNvbnRvdXJHcm91cCA9IHRoaXMuYmFzZS5hcHBlbmQoJ2cnKS5hdHRyKCdpZCcsICdjb250b3VyLWdyb3VwJylcbiAgICAgICAgY29uc3QgY29udG91cnMgPSBjb250b3VyR3JvdXAuc2VsZWN0QWxsKFwicGF0aC5jb250b3VyXCIpXG4gICAgICAgICAgICAuZGF0YShjb250b3VyVmFscylcblxuICAgICAgICBjb250b3Vycy5qb2luKFwicGF0aFwiKVxuICAgICAgICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcImNvbnRvdXJcIilcbiAgICAgICAgICAgIC5hdHRyKFwiZFwiLCBkMy5nZW9QYXRoKGQzLmdlb0lkZW50aXR5KCkuc2NhbGUob3Aud2lkdGggLyBvcC5uKSkpXG4gICAgICAgICAgICAuYXR0cihcImZpbGxcIiwgZCA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHNjYWxlcy5jb2xvcihkLnZhbHVlKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jbGFzc2VkKFwibm90LWZpdFwiLCB0cnVlKVxuICAgIH1cblxuICAgIGFkZFN0ZXAodjogQXJyYXksIHByZXY6IEFycmF5ID0gbnVsbCkge1xuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICAgICAgY29uc3Qgb3AgPSB0aGlzLm9wdGlvbnM7XG4gICAgICAgIGNvbnN0IHNjYWxlcyA9IHRoaXMuc2NhbGVzO1xuICAgICAgICBjb25zdCBzZWxzID0gdGhpcy5zZWxzO1xuXG4gICAgICAgIGNvbnN0IGN4ID0gc2NhbGVzLnguY2xhbXAodHJ1ZSkodi5nZXQoMCkpXG4gICAgICAgIGNvbnN0IGN5ID0gc2NhbGVzLnkuY2xhbXAodHJ1ZSkodi5nZXQoMSkpXG5cbiAgICAgICAgaWYgKHByZXYgIT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5iYXNlLmFwcGVuZCgnbGluZScpXG4gICAgICAgICAgICAgICAgLmF0dHIoJ3gxJywgc2NhbGVzLngocHJldi5nZXQoMCkpKVxuICAgICAgICAgICAgICAgIC5hdHRyKCd5MScsIHNjYWxlcy55KHByZXYuZ2V0KDEpKSlcbiAgICAgICAgICAgICAgICAuYXR0cigneDInLCBjeClcbiAgICAgICAgICAgICAgICAuYXR0cigneTInLCBjeSlcbiAgICAgICAgICAgICAgICAuY2xhc3NlZCgnZGVzY2VuZGluZy1saW5lJywgdHJ1ZSlcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIENoZWNrIGJvcmRlciBjb25kaXRpb25zXG4gICAgICAgIGlmICh2LmdldCgwKSA+PSBvcC54cmFuZ2VbMV0gfHwgdi5nZXQoMSkgPj0gb3AueXJhbmdlWzFdKSB7XG4gICAgICAgICAgICB0aGlzLl9jdXJyLnRpY2tlci51bnN1YnNjcmliZSgpXG4gICAgICAgICAgICByZXR1cm4gdlxuICAgICAgICB9XG5cblxuICAgICAgICBpZiAoKCh0aGlzLl9jdXJyLnN0ZXAgJSBvcC5jaXJjbGVFdmVyeSkgPT0gMCkgfHwgKHByZXYgPT0gbnVsbCkpIHtcbiAgICAgICAgICAgIHNlbHMuY2lyY2xlID0gdGhpcy5iYXNlLmFwcGVuZCgnY2lyY2xlJylcbiAgICAgICAgICAgICAgICAuYXR0cignY3gnLCBjeClcbiAgICAgICAgICAgICAgICAuYXR0cignY3knLCBjeSlcbiAgICAgICAgICAgICAgICAuYXR0cigncicsIDIpXG4gICAgICAgICAgICAgICAgLmNsYXNzZWQoJ2Rlc2NlbmRpbmctcG9pbnQnLCB0cnVlKVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fY3Vyci5zdGVwICs9IDFcbiAgICAgICAgdGhpcy5ldmVudEhhbmRsZXIudHJpZ2dlcihFVkVOVFMuc3RlcEFkZGVkLCB2KVxuICAgICAgICByZXR1cm4gdjtcbiAgICB9XG5cbiAgICBjbGVhckNpcmNsZXMoKSB7XG4gICAgICAgIHRoaXMuYmFzZS5zZWxlY3RBbGwoJy5kZXNjZW5kaW5nLXBvaW50JykucmVtb3ZlKClcbiAgICAgICAgdGhpcy5iYXNlLnNlbGVjdEFsbCgnLmRlc2NlbmRpbmctbGluZScpLnJlbW92ZSgpXG4gICAgfVxuXG4gICAgY2xlYXJRdWl2ZXJzKCkge1xuICAgICAgICB0aGlzLmJhc2Uuc2VsZWN0QWxsKCcucXVpdmVyJykucmVtb3ZlKClcbiAgICAgICAgdGhpcy5zZWxzLmFycm93cyA9IFtdXG4gICAgfVxuXG4gICAgcGxvdERlc2NlbnQoKSB7XG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuICAgICAgICBjb25zdCBvcCA9IHRoaXMub3B0aW9ucztcbiAgICAgICAgbGV0IHByZXZWYWwgPSBudWxsO1xuXG4gICAgICAgIGNvbnN0IHN1Yk9iaiA9IHtcbiAgICAgICAgICAgIG5leHQ6ICh2YWwpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmFkZFN0ZXAodmFsLCBwcmV2VmFsKVxuICAgICAgICAgICAgICAgIHByZXZWYWwgPSB2YWxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlcnI6IChlcnIpID0+IGNvbnNvbGUubG9nKGVyciksXG4gICAgICAgICAgICBjb21wbGV0ZTogKCkgPT4gY29uc29sZS5sb2coXCJDT01QTEVURVwiKVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcHJlcCA9ICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuYWRkU3RlcCh0aGlzLmN1cnIoKSlcbiAgICAgICAgICAgIHByZXZWYWwgPSB0aGlzLmN1cnIoKVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fY3Vyci50aWNrZXIgPSBpbnRlcnZhbChvcC5pbnRlcnZhbCkucGlwZShcbiAgICAgICAgICAgIHN0YXJ0V2l0aChwcmVwKCkpLFxuICAgICAgICAgICAgLy9AdHMtaWdub3JlXG4gICAgICAgICAgICBzY2FuKHYgPT4gb3AudXBkYXRlci5uZXh0KHYpLCBzZWxmLmN1cnIoKSksXG4gICAgICAgICAgICB0YWtlKG9wLm1heFRpY2spXG4gICAgICAgICkuc3Vic2NyaWJlKHN1Yk9iailcbiAgICB9XG5cbiAgICBpbnRvVmlzKHY6IEFycmF5KSB7XG4gICAgICAgIHJldHVybiB7IHg6IHRoaXMuc2NhbGVzLngodi5nZXQoMCkpLCB5OiB0aGlzLnNjYWxlcy55KHYuZ2V0KDEpKSB9XG4gICAgfVxuXG4gICAgaW50b01hdGgodjogVmVjdG9yMkQpIHtcbiAgICAgICAgcmV0dXJuIHsgeDogdGhpcy5zY2FsZXMueC5pbnZlcnQodi54KSwgeTogdGhpcy5zY2FsZXMueS5pbnZlcnQodi55KSB9XG4gICAgfVxuXG4gICAgdXBkYXRlUXVpdmVycygpIHtcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgICAgIGNvbnN0IG9wID0gdGhpcy5vcHRpb25zO1xuICAgICAgICBjb25zdCBzZWxzID0gdGhpcy5zZWxzO1xuICAgICAgICBjb25zdCBzY2FsZXMgPSB0aGlzLnNjYWxlcztcblxuICAgICAgICAvLyBNb2RpZnkgYXJyb3dzIGlucGxhY2VcbiAgICAgICAgc2Vscy5hcnJvd3MuZm9yRWFjaChhcnJvdyA9PiB7XG4gICAgICAgICAgICBjb25zdCBwdDogVmVjdG9yMkQgPSB0aGlzLmludG9NYXRoKHtcbiAgICAgICAgICAgICAgICB4OiArYXJyb3cuYXR0cigneDEnKSxcbiAgICAgICAgICAgICAgICB5OiArYXJyb3cuYXR0cigneTEnKVxuICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgY29uc3QgdiA9IG5qLmFycmF5KFtwdC54LCBwdC55XSlcblxuICAgICAgICAgICAgY29uc3QgcHQyID0gb3AudXBkYXRlci5uZXh0THIodilcbiAgICAgICAgICAgIGFycm93LmF0dHIoJ3gyJywgc2NhbGVzLngocHQyLmdldCgwKSkpXG4gICAgICAgICAgICAgICAgLmF0dHIoJ3kyJywgc2NhbGVzLnkocHQyLmdldCgxKSkpXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgY3JlYXRlUXVpdmVycygpIHtcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgICAgIGNvbnN0IG9wID0gdGhpcy5vcHRpb25zO1xuICAgICAgICBjb25zdCBzY2FsZXMgPSB0aGlzLnNjYWxlcztcbiAgICAgICAgY29uc3Qgc2VscyA9IHRoaXMuc2VscztcblxuICAgICAgICBjb25zdCBueCA9IDExLCBueSA9IDExO1xuICAgICAgICBjb25zdCBwb2ludHMgPSBTVkcubWVzaGdyaWQobngsIG55LCBvcC54cmFuZ2UsIG9wLnlyYW5nZSlcbiAgICAgICAgY29uc3QgY29sb3IgPSBcImJsdWVcIjtcbiAgICAgICAgY29uc3Qgd2lkdGggPSAxLjI1O1xuXG4gICAgICAgIGNvbnN0IHF1aXZlckdyb3VwID0gdGhpcy5iYXNlLmFwcGVuZCgnZycpLmF0dHIoJ2lkJywgJ3F1aXZlci1ncm91cCcpIC8vIGluaXQgc2hvdWxkIGhhdmUgdGhlc2UgZ3JvdXBzIGFscmVhZHkgc2VsZWN0ZWRcbiAgICAgICAgdGhpcy5jbGVhclF1aXZlcnMoKVxuXG4gICAgICAgIHNlbHMuYXJyb3dzID0gcG9pbnRzLm1hcChwdCA9PiB7XG4gICAgICAgICAgICBjb25zdCBwdDIgPSBvcC51cGRhdGVyLm5leHRMcihuai5hcnJheShbcHQueCwgcHQueV0pKVxuICAgICAgICAgICAgLy9AdHMtaWdub3JlXG4gICAgICAgICAgICBjb25zdCBhcnJvdyA9IFNWRy5pbnNlcnRBcnJvdyhxdWl2ZXJHcm91cCwgc2NhbGVzLngocHQueCksIHNjYWxlcy55KHB0LnkpLCBzY2FsZXMueChwdDIuZ2V0KDApKSwgc2NhbGVzLnkocHQyLmdldCgxKSksIGNvbG9yLCB3aWR0aClcbiAgICAgICAgICAgIGFycm93LmNsYXNzZWQoJ3F1aXZlcicsIHRydWUpXG4gICAgICAgICAgICByZXR1cm4gYXJyb3dcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBpbml0UGxvdCgpIHtcbiAgICAgICAgLy8gSW5pdGlhbGl6ZSBwbG90c1xuICAgICAgICB0aGlzLnBsb3RDb250b3VycygpXG4gICAgICAgIHRoaXMuY3JlYXRlUXVpdmVycygpXG4gICAgfVxuXG4gICAgaW5pdCgpIHtcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgICAgIGNvbnN0IG9wID0gdGhpcy5vcHRpb25zO1xuICAgICAgICBjb25zdCBzY2FsZXMgPSB0aGlzLnNjYWxlcztcbiAgICAgICAgY29uc3Qgc2VscyA9IHRoaXMuc2VscztcblxuICAgICAgICAvLyBBZGQgZGVmaW5pdGlvbnNcbiAgICAgICAgU1ZHLmFkZEFycm93cyh0aGlzLnN2ZylcblxuICAgICAgICAvLyBDcmVhdGUgc2NhbGVzXG4gICAgICAgIC8vIEFkZCBBeGVzIGFuZCBsYWJlbHNcbiAgICAgICAgc2Vscy54YXhpcyA9IHRoaXMuYmFzZS5hcHBlbmQoXCJnXCIpXG4gICAgICAgICAgICAuYXR0cihcImNsYXNzXCIsIFwiYXhpcyBheGlzLS14XCIpXG4gICAgICAgICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBTVkcudHJhbnNsYXRlKDAsIG9wLmhlaWdodCkpXG4gICAgICAgICAgICAuY2FsbChkMy5heGlzQm90dG9tKHNjYWxlcy54KS50aWNrcygzLCBcInNcIikpO1xuXG4gICAgICAgIHNlbHMueWF4aXMgPSB0aGlzLmJhc2UuYXBwZW5kKFwiZ1wiKVxuICAgICAgICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcImF4aXMgYXhpcy0teVwiKVxuICAgICAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgU1ZHLnRyYW5zbGF0ZSgwLCAwKSlcbiAgICAgICAgICAgIC5jYWxsKGQzLmF4aXNMZWZ0KHNjYWxlcy55KS50aWNrcygzLCBcInNcIikpO1xuXG4gICAgICAgIHNlbHMueGxhYmVsID0gdGhpcy5iYXNlLmFwcGVuZChcInRleHRcIilcbiAgICAgICAgICAgIC5jbGFzc2VkKFwiYXhpcy1sYWJlbFwiLCB0cnVlKVxuICAgICAgICAgICAgLmF0dHIoXCJ0ZXh0LWFuY2hvclwiLCBcIm1pZGRsZVwiKVxuICAgICAgICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcInRpdGxlc1wiKVxuICAgICAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgU1ZHLnRyYW5zbGF0ZShvcC53aWR0aCAvIDIsIG9wLmhlaWdodCArIG9wLnBhZCkpXG4gICAgICAgICAgICAudGV4dChvcC54bGFiZWwpXG5cbiAgICAgICAgc2Vscy55bGFiZWwgPSB0aGlzLmJhc2UuYXBwZW5kKFwidGV4dFwiKVxuICAgICAgICAgICAgLmNsYXNzZWQoXCJheGlzLWxhYmVsXCIsIHRydWUpXG4gICAgICAgICAgICAuYXR0cihcInRleHQtYW5jaG9yXCIsIFwibWlkZGxlXCIpXG4gICAgICAgICAgICAuYXR0cihcImNsYXNzXCIsIFwidGl0bGVzXCIpXG4gICAgICAgICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBTVkcudHJhbnNsYXRlKC1vcC5wYWQsIG9wLmhlaWdodCAvIDIpICsgU1ZHLnJvdGF0ZSgtOTApKVxuICAgICAgICAgICAgLnRleHQob3AueWxhYmVsKVxuXG4gICAgICAgIHNlbHMudGl0bGUgPSB0aGlzLmJhc2UuYXBwZW5kKFwidGV4dFwiKVxuICAgICAgICAgICAgLmNsYXNzZWQoXCJheGlzLWxhYmVsXCIsIHRydWUpXG4gICAgICAgICAgICAuYXR0cihcInRleHQtYW5jaG9yXCIsIFwibWlkZGxlXCIpXG4gICAgICAgICAgICAuYXR0cihcImNsYXNzXCIsIFwidGl0bGVzXCIpXG4gICAgICAgICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBTVkcudHJhbnNsYXRlKG9wLndpZHRoIC8gMiwgLW9wLnBhZCAvIDIpKVxuICAgICAgICAgICAgLnRleHQob3AudGl0bGUpXG5cbiAgICAgICAgLy8gQ3JlYXRlIGNsaWNrIGJlaGF2aW9yXG4gICAgICAgIHRoaXMuYmFzZS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAoc2VsZi5fY3Vyci50aWNrZXIgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgc2VsZi5fY3Vyci50aWNrZXIudW5zdWJzY3JpYmUoKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgY29vcmRzID0gZDMubW91c2UodGhpcyk7XG4gICAgICAgICAgICBzZWxmLl9jdXJyLnN0ZXAgPSAwXG4gICAgICAgICAgICBzZWxmLmN1cnIoW3NjYWxlcy54LmludmVydChjb29yZHNbMF0pLCBzY2FsZXMueS5pbnZlcnQoY29vcmRzWzFdKV0pXG5cbiAgICAgICAgICAgIC8vIGlmIChzZWxmLmN1cnIoKS54ID4gMCAmJiBzZWxmLmN1cnIoKS55ID4gMCAmJiBzZWxmLmN1cnIoKS54IDwgKG9wLnhyYW5nZVsxXSAtIDAuMSkgJiYgc2VsZi5jdXJyKCkueSA8IChvcC55cmFuZ2VbMV0gLSAwLjEpKSB7XG4gICAgICAgICAgICAvLyBpZiAoc2VsZi5jdXJyKCkuZ2V0KDApID4gMCAmJiBzZWxmLmN1cnIoKS5nZXQoMSkgPiAwKSB7XG4gICAgICAgICAgICBzZWxmLmFkZFN0ZXAoc2VsZi5jdXJyKCkpXG4gICAgICAgICAgICBzZWxmLmNsZWFyQ2lyY2xlcygpO1xuICAgICAgICAgICAgc2VsZi5wbG90RGVzY2VudCgpO1xuICAgICAgICAgICAgLy8gfVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGN1cnIoKTogQXJyYXlcbiAgICBjdXJyKHZhbDogQXJyYXkgfCBudW1iZXJbXSk6IHRoaXNcbiAgICBjdXJyKHZhbD8pIHtcbiAgICAgICAgaWYgKHZhbCA9PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fY3Vyci5jdXJyTG9jXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9jdXJyLmN1cnJMb2MgPSBuai5hcnJheSh2YWwpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBkYXRhKCk6IG51bWJlcltdXG4gICAgZGF0YSh2YWw6IG51bWJlcltdKTogdGhpc1xuICAgIGRhdGEodmFsPykge1xuICAgICAgICBpZiAodmFsID09IG51bGwpIHJldHVybiB0aGlzLl9kYXRhXG4gICAgICAgIHRoaXMuX2RhdGEgPSB2YWxcbiAgICAgICAgcmV0dXJuIHRoaXNcbiAgICB9XG5cbiAgICBxKCk6IG51bWJlclxuICAgIHEodmFsOiBudW1iZXIpOiB0aGlzXG4gICAgcSh2YWw/KSB7XG4gICAgICAgIGNvbnN0IG9wID0gdGhpcy5vcHRpb25zXG4gICAgICAgIGlmICh2YWwgPT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIG9wLnVwZGF0ZXIucSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgb3AudXBkYXRlci5xKHZhbClcbiAgICAgICAgdGhpcy51cGRhdGVRdWl2ZXJzKClcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgZXRhKCk6IG51bWJlclxuICAgIGV0YSh2YWw6IG51bWJlcik6IHRoaXNcbiAgICBldGEodmFsPykge1xuICAgICAgICBjb25zdCBvcCA9IHRoaXMub3B0aW9uc1xuICAgICAgICBpZiAodmFsID09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiBvcC51cGRhdGVyLmV0YSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgb3AudXBkYXRlci5ldGEodmFsKVxuICAgICAgICB0aGlzLnVwZGF0ZVF1aXZlcnMoKVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG59IiwiaW1wb3J0ICogYXMgZDMgZnJvbSAnZDMnXG5pbXBvcnQgeyBEM1NlbCwgbGluc3BhY2UgfSBmcm9tICcuLi91dGlsL3hkMydcbmltcG9ydCB7IFZlY3RvcjJEIH0gZnJvbSAnLi4vdHlwZXMnXG5pbXBvcnQgeyBTVkdPcHRpb25zLCBTVkdWaXNDb21wb25lbnQsIE1hcmdpbkluZm8gfSBmcm9tICcuLi91dGlsL1NWR1Zpc0NvbXBvbmVudCdcbmltcG9ydCB7IFNpbXBsZUV2ZW50SGFuZGxlciB9IGZyb20gJy4uL3V0aWwvU2ltcGxlRXZlbnRIYW5kbGVyJztcbmltcG9ydCB7IFNWRyB9IGZyb20gXCIuLi91dGlsL1NWR3BsdXNcIlxuaW1wb3J0IHsgTWFudWFsVXBkYXRlciB9IGZyb20gXCIuL01hbnVhbFVwZGF0ZXJcIlxuXG5pbnRlcmZhY2UgR3JhcGhPcHRpb25zIHtcbiAgICBtYXJnaW46IE1hcmdpbkluZm9cbiAgICBtYXhXaWR0aDogbnVtYmVyXG4gICAgbWF4SGVpZ2h0OiBudW1iZXJcbiAgICB3aWR0aD86IG51bWJlclxuICAgIGhlaWdodD86IG51bWJlclxuICAgIHhSYW5nZTogW251bWJlciwgbnVtYmVyXVxuICAgIHlSYW5nZTogW251bWJlciwgbnVtYmVyXVxufVxuXG5pbnRlcmZhY2UgU2NhbGVYWSB7XG4gICAgeDogZDMuU2NhbGVMaW5lYXI8bnVtYmVyLCBudW1iZXI+XG4gICAgeTogZDMuU2NhbGVMaW5lYXI8bnVtYmVyLCBudW1iZXI+XG59XG5cbmludGVyZmFjZSBHcmFwaFNjYWxlcyB7XG4gICAgdG9QeDogU2NhbGVYWSxcbiAgICB0b01hdGg6IFNjYWxlWFksXG59XG5cbmludGVyZmFjZSBHcmFwaFNlbHMge1xuICAgIHBhdGhzOiBEM1NlbFtdXG4gICAgY3Vyc29yRG90czogRDNTZWxbXVxuICAgIGN1cnNvckxpbmU6IEQzU2VsXG59XG5cbnR5cGUgREFUQSA9IG51bWJlcltdIC8vIExpc3Qgb2YgYWxwaGFzIGluIHk9YWxwaGEgKiB4XjJcblxuZXhwb3J0IGNsYXNzIFF1YWRyYXRpY1Bsb3RzIGV4dGVuZHMgU1ZHVmlzQ29tcG9uZW50PERBVEE+IHtcbiAgICBjc3NuYW1lID0gXCJxdWFkcmF0aWMtcGxvdHNcIlxuICAgIG1hc2tJZDogc3RyaW5nXG5cbiAgICBfZGF0YTogREFUQVxuXG4gICAgb3B0aW9uczogR3JhcGhPcHRpb25zID0ge1xuICAgICAgICAvLyBvcHRpb25zICA9IHsgXG4gICAgICAgIG1hcmdpbjogeyB0b3A6IDAsIHJpZ2h0OiAwLCBib3R0b206IDQwLCBsZWZ0OiAwIH0sXG4gICAgICAgIG1heFdpZHRoOiA0MDAsXG4gICAgICAgIG1heEhlaWdodDogMjUwLFxuICAgICAgICB4UmFuZ2U6IFstMywgM10sXG4gICAgICAgIHlSYW5nZTogWy0wLjA1LCA4LjgyXSxcbiAgICB9XG5cbiAgICBzZWxzOiBQYXJ0aWFsPEdyYXBoU2Vscz4gPSB7fVxuICAgIHRpbWVyOiBkMy5UaW1lclxuXG4gICAgY29uc3RydWN0b3IoZDNwYXJlbnQ6IEQzU2VsLCBldmVudEhhbmRsZXI/OiBTaW1wbGVFdmVudEhhbmRsZXIsIG9wdGlvbnMgPSB7fSwgSUQgPSAwKSB7XG4gICAgICAgIHN1cGVyKGQzcGFyZW50LCBldmVudEhhbmRsZXIsIG9wdGlvbnMsIElEKVxuICAgICAgICB0aGlzLm1hc2tJZCA9IGBsaW5lLW1hc2stJHt0aGlzLklEfWBcbiAgICAgICAgc3VwZXIuaW5pdFNWRyhvcHRpb25zKSAvLyBDYWxscyBpbml0IGluIHRoaXMgY2xhc3NcbiAgICAgICAgdGhpcy5iYXNlLmNsYXNzZWQodGhpcy5jc3NuYW1lLCB0cnVlKVxuICAgIH1cblxuICAgIGdldCB0b1B4U2NhbGVzKCk6IFNjYWxlWFkge1xuICAgICAgICBjb25zdCBvcCA9IHRoaXMub3B0aW9uc1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgeDogZDMuc2NhbGVMaW5lYXIoKVxuICAgICAgICAgICAgICAgIC5kb21haW4ob3AueFJhbmdlKVxuICAgICAgICAgICAgICAgIC5yYW5nZShbMCwgb3Aud2lkdGhdKSxcbiAgICAgICAgICAgIHk6IGQzLnNjYWxlTGluZWFyKClcbiAgICAgICAgICAgICAgICAuZG9tYWluKG9wLnlSYW5nZSlcbiAgICAgICAgICAgICAgICAucmFuZ2UoW29wLmhlaWdodCwgMF0pLFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgaW50b1B4KHY6IFZlY3RvcjJEKSB7XG4gICAgICAgIHJldHVybiB7IHg6IHRoaXMudG9QeFNjYWxlcy54KHYueCksIHk6IHRoaXMudG9QeFNjYWxlcy55KHYueSkgfVxuICAgIH1cblxuICAgIC8vIFRha2UgYSB2ZWN0b3IgaW4gdGhlIGNvb3JkaW5hdGUgc3lzdGVtIGFuZCByZXR1cm4gaXQgdG8gdGhlIG1hdGggY29vcmRpbmF0ZXNcbiAgICBpbnRvTWF0aCh2OiBWZWN0b3IyRCkge1xuICAgICAgICByZXR1cm4geyB4OiB0aGlzLnRvUHhTY2FsZXMueC5pbnZlcnQodi54KSwgeTogdGhpcy50b1B4U2NhbGVzLnkuaW52ZXJ0KHYueSkgfVxuICAgIH1cblxuICAgIC8vIFR1cm4gYSBudW1iZXIgaW50byBhIHZlY3RvclxuICAgIG51bTJ2ZWMoeDogbnVtYmVyKTogVmVjdG9yMkQge1xuICAgICAgICBjb25zdCBvcCA9IHRoaXMub3B0aW9uc1xuICAgICAgICAvLyByZXR1cm4geyB4OiB4LCB5OiBvcC5sYW5kc2NhcGUubG9zcyh4KSB9XG4gICAgICAgIHJldHVybiB7IHg6IHgsIHk6IHggKiogMiB9XG4gICAgfVxuXG4gICAgbGluZU1ha2VyKGY6ICh4OiBudW1iZXIpID0+IG51bWJlcikge1xuICAgICAgICByZXR1cm4gZDMubGluZTxudW1iZXI+KClcbiAgICAgICAgICAgIC54KChkOiBudW1iZXIsIGk6IG51bWJlcikgPT4gdGhpcy50b1B4U2NhbGVzLngoZCkpXG4gICAgICAgICAgICAueSgoZDogbnVtYmVyLCBpOiBudW1iZXIpID0+IHRoaXMudG9QeFNjYWxlcy55KGYoZCkpKVxuICAgIH1cblxuICAgIGluaXQoKSB7XG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuICAgICAgICBjb25zdCBvcCA9IHRoaXMub3B0aW9ucztcbiAgICAgICAgY29uc3Qgc2VscyA9IHRoaXMuc2VscztcblxuICAgICAgICB0aGlzLmJhc2VcbiAgICAgICAgICAgIC5hdHRyKCd3aWR0aCcsIG9wLm1heFdpZHRoKVxuICAgICAgICAgICAgLmF0dHIoJ2hlaWdodCcsIG9wLm1heEhlaWdodClcblxuICAgICAgICBPYmplY3Qua2V5cyh0aGlzLmxheWVycykuZm9yRWFjaChrID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiUnVubmluZyBvbiBsYXllcjogXCIsIGspO1xuICAgICAgICAgICAgY29uc3QgZyA9IHRoaXMubGF5ZXJzW2tdXG4gICAgICAgICAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgYCR7U1ZHLnRyYW5zbGF0ZShvcC5tYXJnaW4ubGVmdCwgb3AubWFyZ2luLnRvcCl9YClcbiAgICAgICAgfSlcblxuICAgICAgICB0aGlzLmxheWVycy5iZy5hcHBlbmQoJ3JlY3QnKVxuICAgICAgICAgICAgLmNsYXNzZWQoXCJiZy1yZWN0XCIsIHRydWUpXG4gICAgICAgICAgICAuYXR0cignd2lkdGgnLCBvcC53aWR0aClcbiAgICAgICAgICAgIC5hdHRyKCdoZWlnaHQnLCBvcC5oZWlnaHQpXG5cbiAgICAgICAgLy8gY29uc3QgZiA9ICh4OiBudW1iZXIpID0+IDAuNSAqICh4ICoqIDIpXG5cbiAgICAgICAgY29uc3QgZmFjID0gMS40O1xuICAgICAgICBjb25zdCBhYSA9IFsxIC8gZmFjLCAxLCBmYWNdO1xuICAgICAgICAvLyBjb25zdCBhYSA9IFtmYWNdO1xuICAgICAgICBjb25zdCB1cGRhdGVycyA9IGFhLm1hcChhID0+IHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgTWFudWFsVXBkYXRlcihcbiAgICAgICAgICAgICAgICAoeDogbnVtYmVyKSA9PiBhICogeCxcbiAgICAgICAgICAgICAgICAoeDogbnVtYmVyKSA9PiBhLFxuICAgICAgICAgICAgICAgIDEsXG4gICAgICAgICAgICAgICAgMC4wMSxcbiAgICAgICAgICAgIClcbiAgICAgICAgfSlcblxuICAgICAgICBzZWxzLnBhdGhzID0gdXBkYXRlcnMubWFwKHUgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMubGF5ZXJzLm1haW4uYXBwZW5kKFwicGF0aFwiKVxuICAgICAgICAgICAgICAgIC5kYXR1bShsaW5zcGFjZShvcC54UmFuZ2VbMF0sIG9wLnhSYW5nZVsxXSwgMTAwKSlcbiAgICAgICAgICAgICAgICAuY2xhc3NlZChcImxpbmUtcGF0aFwiLCB0cnVlKVxuICAgICAgICAgICAgICAgIC5hdHRyKCdkJywgZCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmxpbmVNYWtlcih4ID0+IHUubG9zcyh4KSkoZClcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICB9KVxuXG4gICAgICAgIC8vIEN1cnNvciBMaW5lIExvZ2ljXG4gICAgICAgIHNlbHMuY3Vyc29yTGluZSA9IHRoaXMuYmFzZS5hcHBlbmQoJ3BhdGgnKVxuICAgICAgICAgICAgLmNsYXNzZWQoJ2N1cnNvci1saW5lJywgdHJ1ZSlcbiAgICAgICAgICAgIC5jbGFzc2VkKCdoaWRkZW4nLCB0cnVlKVxuXG4gICAgICAgIHNlbHMuY3Vyc29yRG90cyA9IHVwZGF0ZXJzLm1hcCh1ID0+IHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmJhc2UuYXBwZW5kKCdjaXJjbGUnKVxuICAgICAgICAgICAgICAgIC5jbGFzc2VkKFwiY3Vyc29yLWRvdFwiLCB0cnVlKVxuICAgICAgICAgICAgICAgIC5hdHRyKFwiclwiLCBcIjNweFwiKVxuICAgICAgICB9KVxuXG4gICAgICAgIHRoaXMuYmFzZS5vbignbW91c2Vtb3ZlJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgY29uc3QgbW91c2UgPSBkMy5tb3VzZSh0aGlzKVxuICAgICAgICAgICAgc2Vscy5jdXJzb3JMaW5lLmF0dHIoJ2QnLCBkMy5saW5lKCkoW1ttb3VzZVswXSwgMF0sIFttb3VzZVswXSwgb3AuaGVpZ2h0XV0pKVxuXG4gICAgICAgICAgICAvLyBzZWxzLmN1cnNvckRvdHMuZm9yRWFjaCgoYywgaSkgPT4ge1xuICAgICAgICAgICAgLy8gICAgIGMuYXR0cignY3gnLCBtb3VzZVswXSlcbiAgICAgICAgICAgIC8vICAgICAgICAgLmF0dHIoJ2N5JywgKCkgPT4gc2VsZi50b1B4U2NhbGVzLnkodXBkYXRlcnNbaV0ubG9zcyhzZWxmLnRvUHhTY2FsZXMueC5pbnZlcnQobW91c2VbMF0pKSkpXG4gICAgICAgICAgICAvLyB9KVxuICAgICAgICB9KVxuXG4gICAgICAgIHRoaXMuYmFzZS5vbignbW91c2VvdXQnLCAoKSA9PiB7XG4gICAgICAgICAgICBzZWxzLmN1cnNvckxpbmUuY2xhc3NlZChcImhpZGRlblwiLCB0cnVlKVxuICAgICAgICAgICAgaWYgKHNlbGYudGltZXIgPT0gbnVsbCkgc2Vscy5jdXJzb3JEb3RzLmZvckVhY2goYyA9PiBjLmNsYXNzZWQoXCJoaWRkZW5cIiwgdHJ1ZSkpXG4gICAgICAgIH0pXG5cbiAgICAgICAgdGhpcy5iYXNlLm9uKCdtb3VzZW92ZXInLCAoKSA9PiB7XG4gICAgICAgICAgICBzZWxzLmN1cnNvckxpbmUuY2xhc3NlZChcImhpZGRlblwiLCBmYWxzZSlcbiAgICAgICAgICAgIGlmIChzZWxmLnRpbWVyID09IG51bGwpIHNlbHMuY3Vyc29yRG90cy5mb3JFYWNoKGMgPT4gYy5jbGFzc2VkKFwiaGlkZGVuXCIsIGZhbHNlKSlcbiAgICAgICAgfSlcblxuICAgICAgICB0aGlzLmJhc2Uub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgY29uc3QgbW91c2UgPSBkMy5tb3VzZSh0aGlzKVxuICAgICAgICAgICAgY29uc3QgdmFsID0gc2VsZi50b1B4U2NhbGVzLnguaW52ZXJ0KG1vdXNlWzBdKVxuICAgICAgICAgICAgc2Vscy5jdXJzb3JEb3RzLmZvckVhY2goKGMsIGkpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB1ID0gdXBkYXRlcnNbaV1cbiAgICAgICAgICAgICAgICBjb25zdCB4Q2xpY2sgPSBzZWxmLnRvUHhTY2FsZXMueC5pbnZlcnQobW91c2VbMF0pXG4gICAgICAgICAgICAgICAgYy5hdHRyKCdjeCcsIG1vdXNlWzBdKVxuICAgICAgICAgICAgICAgIGMuYXR0cignY3knLCBzZWxmLnRvUHhTY2FsZXMueSh1Lmxvc3MoeENsaWNrKSkpXG4gICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICBpZiAoc2VsZi50aW1lciA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgc2VsZi50aW1lciA9IGQzLmludGVydmFsKCh0aW1lKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHNlbHMuY3Vyc29yRG90cy5mb3JFYWNoKChjLCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB1ID0gdXBkYXRlcnNbaV1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHhOb3cgPSBzZWxmLnRvUHhTY2FsZXMueC5pbnZlcnQoK2MuYXR0cignY3gnKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHhOZXh0ID0gdS5uZXh0KHhOb3cpXG4gICAgICAgICAgICAgICAgICAgICAgICBjLmF0dHIoJ2N4Jywgc2VsZi50b1B4U2NhbGVzLngoeE5leHQpKVxuICAgICAgICAgICAgICAgICAgICAgICAgYy5hdHRyKCdjeScsIHNlbGYudG9QeFNjYWxlcy55KHUubG9zcyh4TmV4dCkpKVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH0sIDEwKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgc2VsZi50aW1lci5zdG9wKClcbiAgICAgICAgICAgICAgICBzZWxmLnRpbWVyID0gbnVsbFxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIF9yZW5kZXIoZGF0YTogREFUQSkge1xuICAgICAgICAvLyB0aGlzLnBsb3RGdW5jc1xuICAgIH1cblxuICAgIGRhdGEoKTogREFUQVxuICAgIGRhdGEodmFsOiBEQVRBKTogdGhpc1xuICAgIGRhdGEodmFsPykge1xuICAgICAgICBpZiAodmFsID09IG51bGwpIHJldHVybiB0aGlzLl9kYXRhXG4gICAgICAgIHJldHVybiB0aGlzXG4gICAgfVxufSIsImltcG9ydCB7IEhUTUxWaXNDb21wb25lbnQgfSBmcm9tICcuLi91dGlsL0hUTUxWaXNDb21wb25lbnQnXG5pbXBvcnQgKiBhcyBkMyBmcm9tICdkMydcbmltcG9ydCB7IEQzU2VsIH0gZnJvbSAnLi4vdXRpbC94ZDMnXG5pbXBvcnQgeyBBcnJheSB9IGZyb20gJy4uL3R5cGVzJ1xuaW1wb3J0ICogYXMgUiBmcm9tICdyYW1kYSdcbmltcG9ydCB7IFNpbXBsZUV2ZW50SGFuZGxlciB9IGZyb20gJy4uL3V0aWwvU2ltcGxlRXZlbnRIYW5kbGVyJztcbmltcG9ydCB7IFNWRyB9IGZyb20gJy4uL3V0aWwvU1ZHcGx1cydcbmltcG9ydCAqIGFzIG5qIGZyb20gXCJudW1qc1wiXG5cbmludGVyZmFjZSBTaW1wbGVOZXRTZWxzIHtcbiAgc3ZnOiBEM1NlbFxuICBub2RlVmFsczoge1xuICAgIG4wOiBEM1NlbFxuICAgIG4xOiBEM1NlbFxuICAgIG4yOiBEM1NlbFxuICB9XG4gIGxpbmVzOiB7XG4gICAgdzA6IEQzU2VsXG4gICAgdzE6IEQzU2VsXG4gIH1cbiAgbGluZVZhbHM6IHtcbiAgICB3MDogRDNTZWxcbiAgICB3MTogRDNTZWxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgU2ltcGxlTmV0IGV4dGVuZHMgSFRNTFZpc0NvbXBvbmVudDxudWxsPiB7XG4gIGNzc25hbWUgPSBcInNpbXBsZS1uZXQtc3ZnXCJcbiAgb3B0aW9ucyA9IHt9XG4gIHNlbHM6UGFydGlhbDxTaW1wbGVOZXRTZWxzPiA9IHt9XG5cblxuICBjb25zdHJ1Y3RvcihkM3BhcmVudDogRDNTZWwsIGV2ZW50SGFuZGxlcj86IFNpbXBsZUV2ZW50SGFuZGxlciwgb3B0aW9ucyA9IHt9LCBJRCA9IDApIHtcbiAgICBzdXBlcihkM3BhcmVudCwgZXZlbnRIYW5kbGVyLCBvcHRpb25zLCBJRClcbiAgICB0aGlzLmJhc2UuY2xhc3NlZCh0aGlzLmNzc25hbWUsIHRydWUpXG4gICAgc3VwZXIuaW5pdEhUTUwoKVxuICAgIHRoaXMuaW5pdCgpXG4gIH1cblxuICBnZXQgc3Ryb2tlV2lkdGhTY2FsZSgpOiBkMy5TY2FsZUxpbmVhcjxudW1iZXIsIG51bWJlcj4ge1xuICAgICAgcmV0dXJuIGQzLnNjYWxlTGluZWFyKCkucmFuZ2UoWzQuMiwgNjBdKS5kb21haW4oWzAsIDEuN10pXG4gIH1cblxuICBnZXQgb3BhY2l0eVNjYWxlKCk6IGQzLlNjYWxlTGluZWFyPG51bWJlciwgbnVtYmVyPiB7XG4gICAgICByZXR1cm4gZDMuc2NhbGVMaW5lYXIoKS5yYW5nZShbMC4yLCAxXSkuZG9tYWluKFswLCAxLjddKVxuICB9XG5cbiAgaW5pdCgpIHtcbiAgICBjb25zdCBzZWxzID0gdGhpcy5zZWxzXG4gICAgY29uc3Qgb3BzID0gdGhpcy5vcHRpb25zXG5cbiAgICBjb25zdCBodG1sQ29udGVudCA9IGBcbiAgICA8c3ZnIHZpZXdCb3g9XCIwIDAgMjY2MCA1NTVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgZmlsbC1ydWxlPVwiZXZlbm9kZFwiIGNsaXAtcnVsZT1cImV2ZW5vZGRcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIiBzdHJva2UtbWl0ZXJsaW1pdD1cIjVcIj5cbiAgICA8ZyBpZD1cIm5ldC12YWx1ZVwiPlxuICAgICAgPHBhdGggaWQ9XCJuZXQtdmFsLTEtcmVjdFwiIGQ9XCJNMTk5OC44IDY3LjZBNjUuOCA2NS44IDAgMDAxOTMzLjEgMmgtMTYzLjVhNjUuOCA2NS44IDAgMDAtNjUuOCA2NS43djI3LjhhNjUuOCA2NS44IDAgMDA2NS44IDY1LjhIMTkzM2E2NS44IDY1LjggMCAwMDY1LjctNjUuOFY2Ny42elwiIGZpbGw9XCIjZmZmXCIgc3Ryb2tlPVwiIzAwMFwiIHN0cm9rZS13aWR0aD1cIjMuOFwiLz5cbiAgICAgIDx0ZXh0IGlkPVwibmV0LXZhbC0xXCIgeD1cIjE4MjYuM1wiIHk9XCIxMTIuNFwiIGZvbnQtZmFtaWx5PVwiJ0lCTVBsZXhUaGFpLVNlbWlCb2xkJywnSUJNIFBsZXggVGhhaScsc2Fucy1zZXJpZlwiIGZvbnQtd2VpZ2h0PVwiNjAwXCIgZm9udC1zaXplPVwiODMuM1wiIHRleHQtYW5jaG9yPVwibWlkZGxlXCI+XG4gICAgICAgIDBcbiAgICAgIDwvdGV4dD5cbiAgICAgIDxwYXRoIGlkPVwibmV0LXZhbC0wLXJlY3RcIiBkPVwiTTk0NS44IDY3LjZBNjUuOCA2NS44IDAgMDA4ODAgMkg3MTYuNWE2NS44IDY1LjggMCAwMC02NS43IDY1Ljd2MjcuOGE2NS44IDY1LjggMCAwMDY1LjcgNjUuOGgxNjMuNmE2NS44IDY1LjggMCAwMDY1LjctNjUuOFY2Ny42elwiIGZpbGw9XCIjZmZmXCIgc3Ryb2tlPVwiIzAwMFwiIHN0cm9rZS13aWR0aD1cIjMuOFwiLz5cbiAgICAgIDx0ZXh0IGlkPVwibmV0LXZhbC0wXCIgeD1cIjc3My4zXCIgeT1cIjExMi40XCIgZm9udC1mYW1pbHk9XCInSUJNUGxleFRoYWktU2VtaUJvbGQnLCdJQk0gUGxleCBUaGFpJyxzYW5zLXNlcmlmXCIgZm9udC13ZWlnaHQ9XCI2MDBcIiBmb250LXNpemU9XCI4My4zXCIgdGV4dC1hbmNob3I9XCJtaWRkbGVcIj5cbiAgICAgICAgMFxuICAgICAgPC90ZXh0PlxuICAgIDwvZz5cbiAgICA8ZyBpZD1cIm5ldC1ub2RlXCIgZmlsbD1cIiNlYmViZWJcIj5cbiAgICAgIDxjaXJjbGUgY3g9XCIyNzYuMlwiIGN5PVwiMjc4LjFcIiByPVwiMjc2LjJcIi8+XG4gICAgICA8Y2lyY2xlIGN4PVwiMTMzMS4xXCIgY3k9XCIyNzguMVwiIHI9XCIyNzYuMlwiLz5cbiAgICAgIDxjaXJjbGUgY3g9XCIyMzgzLjFcIiBjeT1cIjI3OC4xXCIgcj1cIjI3Ni4yXCIvPlxuICAgIDwvZz5cbiAgICA8ZyBpZD1cIm5ldC1saW5lXCI+XG4gICAgICA8cGF0aCBpZD1cIm5ldC1saW5lLTBcIiBkPVwiTTU1Mi41IDI4MC4yaDUwMi40YTIgMiAwIDAwMC00LjJINTUyLjVhMiAyIDAgMDAwIDQuMnpcIiBmaWxsPVwibm9uZVwiIHN0cm9rZT1cIiMwMDBcIiBzdHJva2Utd2lkdGg9XCI0LjJcIiBzdHJva2UtbWl0ZXJsaW1pdD1cIjEuNVwiLz5cbiAgICAgIDxwYXRoIGlkPVwibmV0LWxpbmUtMVwiIGQ9XCJNMTYwNy4zIDI3OC4xaDQ5OS41XCIgZmlsbD1cIm5vbmVcIiBzdHJva2U9XCIjMDAwXCIgc3Ryb2tlLXdpZHRoPVwiNC4yXCIgc3Ryb2tlLW1pdGVybGltaXQ9XCIxLjVcIi8+XG4gICAgPC9nPlxuICAgIDxwYXRoIGlkPVwiTUpYLTQtVEVYLUktNzdcIiBkPVwiTTgwNi4yIDQwNS4zYzAtMi4zIDEtNC40IDMtNi4zIDIuMS0yIDQuNC0zIDYuOC0zIDIgMCAzLjguOSA1LjQgMi44IDEuNiAyIDIuNSA1IDIuNiA5LjIgMCAzLjItMSA5LjQtMy4xIDE4LjYtMS42IDYtMyAxMS00LjQgMTQuOWE5NiA5NiAwIDAxLTUuNiAxMyAzMCAzMCAwIDAxLTguOSAxMSAxOS40IDE5LjQgMCAwMS0xMS42IDMuOGMtNC44IDAtOS0uOS0xMi42LTIuNi0zLjctMS43LTYuMy00LTgtN2wtLjQuN2MtNC41IDYtOS44IDguOS0xNi4yIDguOWEzMy4yIDMzLjIgMCAwMS0xNS43LTQgMTUuNCAxNS40IDAgMDEtNi02LjQgMjEuMiAyMS4yIDAgMDEtMi4yLTEwLjEgNzMgNzMgMCAwMTUuNS0yMy42YzMuNy0xMCA1LjUtMTYuMiA1LjYtMTlWNDA0YzAtLjMtLjItLjctLjYtMS4xLS40LS41LTEtLjctMS44LS43aC0uNmMtMi41IDAtNC44IDEtNi44IDMuMS0yIDItMy43IDQuMy00LjkgNi42YTQyLjcgNDIuNyAwIDAwLTIuNyA2LjhjLS42IDIuMi0xIDMuMy0xLjMgMy42LS4yLjItMSAuMy0yLjYuM0g3MTdjLS43LS43LTEtMS4xLTEtMS41YTcxLjYgNzEuNiAwIDAxNS0xMi44YzEuNi0zIDQtNS45IDcuMS04LjMgMy4xLTIuNSA2LjYtMy43IDEwLjUtMy43IDQuNiAwIDguMiAxLjMgMTAuNyA0IDIuNCAyLjcgMy43IDUuOCAzLjcgOS40IDAgMS45LTEuOCA3LjctNS4zIDE3LjRhNzEuMyA3MS4zIDAgMDAtNS40IDIyLjVjMCA1IDEuMiA4LjQgMy40IDEwLjVhMTMgMTMgMCAwMDguNiAzLjJjNC42IDAgOC43LTMuMyAxMi4zLTkuOWwuOC0xLjR2LTUuMmwuMS0xLjMuMi0xLjEuMS0xLjVhODYuNCA4Ni40IDAgMDAxLTQuOGMuMS0uOS40LTIuMiAxLTMuOS41LTEuNyAxLTMuNCAxLjMtNS4yLjMtMS43LjktNCAxLjgtNi45IDMtMTIuMyA0LjktMTguOSA1LjMtMTkuOSAxLjQtMi45IDMuNy00LjMgNy00LjMgMiAwIDMuNC41IDQuMSAxLjYuOCAxIDEuMiAyIDEuMyAzIDAgMS41LTEuNSA4LjMtNC43IDIwLjdhNTg4LjIgNTg4LjIgMCAwMC01LjEgMjEuNCAzNSAzNSAwIDAwLS40IDUuNnYxLjFjMCAxLjcuMiAzLjIuNSA0LjcuNCAxLjUgMS40IDMuMSAzLjEgNC43IDEuNyAxLjYgNC4xIDIuNSA3LjMgMi42IDcuNiAwIDEzLjctNi42IDE4LjItMTkuN2ExMDAgMTAwIDAgMDA1LjItMjAuMmMwLTMuNi0uNy02LjQtMi4xLTguNC0xLjQtMi0yLjgtMy44LTQuMi01LjJhNi4zIDYuMyAwIDAxLTIuMS00LjV6XCIgZmlsbC1ydWxlPVwibm9uemVyb1wiLz5cbiAgICA8cGF0aCBpZD1cIk1KWC00LVRFWC1OLTMwXCIgZD1cIk04MzkuMSA0NDUuOWM0LjMtNi4yIDEwLjEtOS4zIDE3LjUtOS4zYTIxLjQgMjEuNCAwIDAxMTkuOSAxMy41YzIuOCA2LjMgNC4yIDE1IDQuMiAyNiAwIDExLjktMS42IDIwLjktNSAyNy4xYTE5LjUgMTkuNSAwIDAxLTYuMiA3LjcgMjAuNyAyMC43IDAgMDEtMTIuOCA0LjNjLTIgMC00LS4yLTYtLjdhMjAgMjAgMCAwMS02LjktMy42Yy0yLjctMi00LjctNC42LTYuMy03LjctMy4yLTYuMi00LjktMTUuMi00LjktMjcgMC0xMy4zIDIuMi0yMy40IDYuNS0zMC4zem0yNS43LTEuNGExMC45IDEwLjkgMCAwMC0xNi4zIDBjLTIgMi0zLjIgNC43LTMuOCA4LjJhMTYyIDE2MiAwIDAwLS45IDIyYzAgMTIgLjMgMjAgMSAyMy43LjUgMy44IDIgNi44IDQgOSAyLjIgMi4zIDQuOCAzLjUgOCAzLjUgMyAwIDUuNi0xLjIgNy43LTMuNSAyLjItMi4yIDMuNi01LjQgNC4xLTkuNS41LTQuMi44LTExLjkgMS0yMy4yIDAtMTEtLjQtMTguMy0xLTIxLjhhMTYgMTYgMCAwMC0zLjgtOC40elwiIGZpbGwtcnVsZT1cIm5vbnplcm9cIi8+XG4gICAgPHBhdGggaWQ9XCJNSlgtNi1URVgtSS03N1wiIGQ9XCJNMTg2MS4xIDQwNS4zYzAtMi4zIDEtNC40IDMtNi4zIDIuMS0yIDQuNC0zIDYuOS0zIDEuOSAwIDMuNy45IDUuMyAyLjggMS42IDIgMi41IDUgMi42IDkuMiAwIDMuMi0xIDkuNC0zIDE4LjYtMS43IDYtMy4yIDExLTQuNSAxNC45YTk2IDk2IDAgMDEtNS42IDEzIDMwIDMwIDAgMDEtOC45IDExIDE5LjQgMTkuNCAwIDAxLTExLjYgMy44Yy00LjggMC05LS45LTEyLjYtMi42LTMuNy0xLjctNi4zLTQtOC03bC0uNC43Yy00LjQgNi05LjggOC45LTE2LjIgOC45YTMzLjIgMzMuMiAwIDAxLTE1LjYtNCAxNS40IDE1LjQgMCAwMS02LTYuNCAyMS4yIDIxLjIgMCAwMS0yLjMtMTAuMSA3MyA3MyAwIDAxNS41LTIzLjZjMy43LTEwIDUuNi0xNi4yIDUuNy0xOVY0MDRjMC0uMy0uMy0uNy0uNy0xLjEtLjQtLjUtMS0uNy0xLjgtLjdoLS42Yy0yLjUgMC00LjcgMS02LjggMy4xLTIgMi0zLjcgNC4zLTQuOCA2LjZhNDIuNiA0Mi42IDAgMDAtMi44IDYuOGMtLjYgMi4yLTEgMy4zLTEuMyAzLjYtLjIuMi0xIC4zLTIuNi4zaC0yLjJjLS43LS43LTEtMS4xLTEtMS41YTcxLjcgNzEuNyAwIDAxNS0xMi44YzEuNi0zIDQtNS45IDcuMS04LjMgMy4xLTIuNSA2LjYtMy43IDEwLjUtMy43IDQuNyAwIDguMiAxLjMgMTAuNyA0czMuNyA1LjggMy43IDkuNGMwIDEuOS0xLjggNy43LTUuMyAxNy40YTcxLjMgNzEuMyAwIDAwLTUuNCAyMi41YzAgNSAxLjIgOC40IDMuNCAxMC41YTEzIDEzIDAgMDA4LjYgMy4yYzQuNiAwIDguNy0zLjMgMTIuMy05LjlsLjgtMS40di01LjJsLjEtMS4zLjItMS4xYzAtLjUgMC0xIC4yLTEuNWE5MyA5MyAwIDAwMS00LjhjMC0uOS40LTIuMi45LTMuOS41LTEuNyAxLTMuNCAxLjMtNS4yLjMtMS43IDEtNCAxLjgtNi45IDMtMTIuMyA0LjktMTguOSA1LjMtMTkuOSAxLjQtMi45IDMuNy00LjMgNy00LjMgMiAwIDMuNC41IDQuMSAxLjYuOCAxIDEuMiAyIDEuMyAzIDAgMS41LTEuNSA4LjMtNC42IDIwLjdhNTg3IDU4NyAwIDAwLTUuMiAyMS40Yy0uMiAxLjEtLjMgMy0uMyA1LjZ2MS4xYzAgMS43LjEgMy4yLjQgNC43LjQgMS41IDEuNCAzLjEgMy4xIDQuNyAxLjcgMS42IDQuMiAyLjUgNy4zIDIuNiA3LjYgMCAxMy43LTYuNiAxOC4yLTE5LjdhOTkuNyA5OS43IDAgMDA1LjItMjAuMmMwLTMuNi0uNy02LjQtMi04LjQtMS41LTItMi45LTMuOC00LjMtNS4yYTYuMyA2LjMgMCAwMS0yLTQuNXpcIiBmaWxsLXJ1bGU9XCJub256ZXJvXCIvPlxuICAgIDxwYXRoIGlkPVwiTUpYLTYtVEVYLU4tMzFcIiBkPVwiTTE5MDcuNCA0NDYuN2wtMS41LjYtNC41IDEuMWMtMiAuNC00LjIuNi02LjcuOGgtMi4xdi01LjNoMi4xYTM3LjIgMzcuMiAwIDAwMTYuNC00LjRjMS4yLS44IDIuMi0xLjcgMy4yLTIuNS4xLS4yLjYtLjQgMS4zLS40LjcgMCAxLjQuMyAyIC43djY4LjRjLjYuNiAxIDEgMS41IDFhNzYuNCA3Ni40IDAgMDA5LjguN2gzdjUuM2gtMS4zYy0xLjYtLjItNy43LS4zLTE4LjItLjMtMTAuMyAwLTE2LjMgMC0xNy45LjNoLTEuNHYtNS4zaDcuM2EyNy4xIDI3LjEgMCAwMDQuNy0uNGwxLS4yLjYtLjYuNy0uNXYtNTl6XCIgZmlsbC1ydWxlPVwibm9uemVyb1wiLz5cbiAgICA8dGV4dCB4PVwiMjEwLjNcIiB5PVwiNDczLjVcIiBmb250LWZhbWlseT1cIidJQk1QbGV4VGhhaS1NZWRpdW0nLCdJQk0gUGxleCBUaGFpJyxzYW5zLXNlcmlmXCIgZm9udC13ZWlnaHQ9XCI1MDBcIiBmb250LXNpemU9XCI1MFwiPlxuICAgICAgSU5QVVRcbiAgICA8L3RleHQ+XG4gICAgPHRleHQgeD1cIjIyOTIuM1wiIHk9XCI0NzMuNVwiIGZvbnQtZmFtaWx5PVwiJ0lCTVBsZXhUaGFpLU1lZGl1bScsJ0lCTSBQbGV4IFRoYWknLHNhbnMtc2VyaWZcIiBmb250LXdlaWdodD1cIjUwMFwiIGZvbnQtc2l6ZT1cIjUwXCI+XG4gICAgICBPVVRQVVRcbiAgICA8L3RleHQ+XG4gICAgPGcgaWQ9XCJuZXQtY2VsbFwiIGZpbGw9XCIjZmZmXCIgc3Ryb2tlPVwiIzAwMFwiIHN0cm9rZS13aWR0aD1cIjMuOFwiPlxuICAgICAgPHBhdGggZD1cIk0yNTM2LjQgMTgyLjhhNjMgNjMgMCAwMC02My02M2gtMTY5YTYzIDYzIDAgMDAtNjMgNjN2MTY1LjhhNjMgNjMgMCAwMDYzIDYzaDE2OWE2MyA2MyAwIDAwNjMtNjNWMTgyLjh6TTE0NzguNiAxODIuOGE2MyA2MyAwIDAwLTYzLTYzaC0xNjlhNjMgNjMgMCAwMC02MyA2M3YxNjUuOGE2MyA2MyAwIDAwNjMgNjNoMTY5YTYzIDYzIDAgMDA2My02M1YxODIuOHpNNDIzLjcgMTcwLjNhNjMgNjMgMCAwMC02My02M2gtMTY5YTYzIDYzIDAgMDAtNjMgNjNWMzM2YTYzIDYzIDAgMDA2MyA2M2gxNjlhNjMgNjMgMCAwMDYzLTYzVjE3MC4zelwiLz5cbiAgICA8L2c+XG4gICAgPHRleHQgaWQ9XCJuZXQtbm9kZS0yXCIgeD1cIjIzNTEuNFwiIHk9XCIzMTEuOVwiIGZvbnQtZmFtaWx5PVwiJ0lCTVBsZXhUaGFpLVNlbWlCb2xkJywnSUJNIFBsZXggVGhhaScsc2Fucy1zZXJpZlwiIGZvbnQtd2VpZ2h0PVwiNTAwXCIgZm9udC1zaXplPVwiMTAwXCIgdGV4dC1hbmNob3I9XCJtaWRkbGVcIj5cbiAgICAgIDJcbiAgICA8L3RleHQ+XG4gICAgPHRleHQgaWQ9XCJuZXQtbm9kZS0xXCIgeD1cIjEyOTIuMVwiIHk9XCIzMTEuOVwiIGZvbnQtZmFtaWx5PVwiJ0lCTVBsZXhUaGFpLVNlbWlCb2xkJywnSUJNIFBsZXggVGhhaScsc2Fucy1zZXJpZlwiIGZvbnQtd2VpZ2h0PVwiNTAwXCIgZm9udC1zaXplPVwiMTAwXCIgdGV4dC1hbmNob3I9XCJtaWRkbGVcIj5cbiAgICAgIDFcbiAgICA8L3RleHQ+XG4gICAgPHRleHQgaWQ9XCJuZXQtbm9kZS0wXCIgeD1cIjIzOC43XCIgeT1cIjI5OS40XCIgZm9udC1mYW1pbHk9XCInSUJNUGxleFRoYWktU2VtaUJvbGQnLCdJQk0gUGxleCBUaGFpJyxzYW5zLXNlcmlmXCIgZm9udC13ZWlnaHQ9XCI1MDBcIiBmb250LXNpemU9XCIxMDBcIiB0ZXh0LWFuY2hvcj1cIm1pZGRsZVwiPlxuICAgICAgMFxuICAgIDwvdGV4dD5cbiAgICA8L3N2Zz5cbiAgICBgXG5cbiAgICB0aGlzLmJhc2UuaHRtbChodG1sQ29udGVudClcbiAgICBzZWxzLnN2ZyA9IHRoaXMuYmFzZS5zZWxlY3QoJ3N2ZycpXG4gICAgICAuYXR0cignd2lkdGgnLCBcIjEwMCVcIilcbiAgICAgIC5hdHRyKCdoZWlnaHQnLCBcIjEwMCVcIilcblxuICAgIHNlbHMubGluZXMgPSB7XG4gICAgICB3MDogdGhpcy5iYXNlLnNlbGVjdChcIiNuZXQtbGluZS0wXCIpLFxuICAgICAgdzE6IHRoaXMuYmFzZS5zZWxlY3QoXCIjbmV0LWxpbmUtMVwiKVxuICAgIH1cblxuICAgIHNlbHMubGluZVZhbHMgPSB7XG4gICAgICB3MDogdGhpcy5iYXNlLnNlbGVjdChcIiNuZXQtdmFsLTBcIiksXG4gICAgICB3MTogdGhpcy5iYXNlLnNlbGVjdChcIiNuZXQtdmFsLTFcIiksXG4gICAgfVxuXG4gICAgc2Vscy5ub2RlVmFscyA9IHtcbiAgICAgIG4wOiB0aGlzLmJhc2Uuc2VsZWN0KFwiI25ldC1ub2RlLTBcIiksXG4gICAgICBuMTogdGhpcy5iYXNlLnNlbGVjdChcIiNuZXQtbm9kZS0xXCIpLFxuICAgICAgbjI6IHRoaXMuYmFzZS5zZWxlY3QoXCIjbmV0LW5vZGUtMlwiKSxcbiAgICB9XG5cbiAgICBzZWxzLm5vZGVWYWxzLm4wLnRleHQoXCIxXCIpXG4gICAgc2Vscy5ub2RlVmFscy5uMS50ZXh0KFwiX1wiKVxuICAgIHNlbHMubm9kZVZhbHMubjIudGV4dChcIl9cIilcblxuICAgIHNlbHMubGluZVZhbHMudzAudGV4dChcIl9cIilcbiAgICBzZWxzLmxpbmVWYWxzLncxLnRleHQoXCJfXCIpXG5cbiAgfVxuXG4gIHNldFN0YXRlKHY6IEFycmF5KSB7XG4gICAgY29uc3Qgc2VscyA9IHRoaXMuc2Vsc1xuXG4gICAgY29uc3QgdzAgPSB2LmdldCgwKVxuICAgIGNvbnN0IHcxID0gdi5nZXQoMSlcblxuICAgIHNlbHMubGluZVZhbHMudzAudGV4dCh3MC50b0ZpeGVkKDIpKVxuICAgIHNlbHMubGluZVZhbHMudzEudGV4dCh3MS50b0ZpeGVkKDIpKVxuXG4gICAgc2Vscy5ub2RlVmFscy5uMS50ZXh0KHcwLnRvRml4ZWQoMikpXG4gICAgc2Vscy5ub2RlVmFscy5uMi50ZXh0KCh3MCAqIHcxKS50b0ZpeGVkKDIpKVxuXG4gICAgc2Vscy5saW5lcy53MFxuICAgICAgLmF0dHIoXCJzdHJva2Utd2lkdGhcIiwgdGhpcy5zdHJva2VXaWR0aFNjYWxlKHcwKSlcbiAgICAgIC5hdHRyKFwib3BhY2l0eVwiLCB0aGlzLm9wYWNpdHlTY2FsZSh3MCkpXG5cbiAgICBzZWxzLmxpbmVzLncxXG4gICAgICAuYXR0cihcInN0cm9rZS13aWR0aFwiLCB0aGlzLnN0cm9rZVdpZHRoU2NhbGUodzEpKVxuICAgICAgLmF0dHIoXCJvcGFjaXR5XCIsIHRoaXMub3BhY2l0eVNjYWxlKHcxKSlcbiAgICBcbiAgfVxuXG4gIC8vIFRPIGtlZXAgdGhlIEFQSSBjb25zaXN0ZW50LlxuICBkYXRhKCk6IG51bGxcbiAgZGF0YSh2YWw6IG51bGwpOiB0aGlzXG4gIGRhdGEodmFsPykge1xuICAgIHJldHVybiBudWxsXG4gIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9
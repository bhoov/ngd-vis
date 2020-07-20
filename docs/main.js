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
const defaultF = (v) => {
    //@ts-ignore
    return numjs__WEBPACK_IMPORTED_MODULE_1__["dot"](numjs__WEBPACK_IMPORTED_MODULE_1__["array"]([[1, 2], [2, 1]]), v);
};
const defaultDf = (v) => numjs__WEBPACK_IMPORTED_MODULE_1__["array"]([[1, 2], [2, 1]]);
const defaultErr = v => numjs__WEBPACK_IMPORTED_MODULE_1__["subtract"](v, numjs__WEBPACK_IMPORTED_MODULE_1__["array"]([0, 0]));
const defaultLoss = (err) => numjs__WEBPACK_IMPORTED_MODULE_1__["sum"](numjs__WEBPACK_IMPORTED_MODULE_1__["divide"](numjs__WEBPACK_IMPORTED_MODULE_1__["power"](err, 2), 2));
const defaultStep2Lr = d3__WEBPACK_IMPORTED_MODULE_0__["scaleLinear"]().domain([0, 0.8]).range([0.001, 0.5]);
class BaseUpdater2D {
    constructor(options = {}) {
        this.op = {
            //@ts-ignore
            f: defaultF,
            //@ts-ignore
            df: defaultDf,
            error: defaultErr,
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
    error(v) {
        return this.op.error(this.op.f(v));
    }
    loss(v) {
        const loss = this.op.loss(this.error(v));
        return loss;
    }
    gradient(v) {
        // const loss = this.loss(v)
        const err = this.error(v);
        const df = this.op.df(v);
        // const g: Array = nj.multiply(df, loss)
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

/***/ "./src/ts/LandscapeLoss.ts":
/*!*********************************!*\
  !*** ./src/ts/LandscapeLoss.ts ***!
  \*********************************/
/*! exports provided: LandscapeLoss */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandscapeLoss", function() { return LandscapeLoss; });
/* harmony import */ var numjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! numjs */ "./node_modules/numjs/src/index.js");
/* harmony import */ var numjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(numjs__WEBPACK_IMPORTED_MODULE_0__);

function LandscapeLoss(freqs, amps) {
    if (freqs.length != amps.length)
        throw "Expect amplitudes and frequencies to be vectors of the same length";
    function _forward(v) {
        const { y, y_x } = layer1(v);
        const { sc, sc_y } = layer2(y);
        const { z, z_y, z_sc } = layer3(y, sc);
        return { y, y_x, sc, sc_y, z, z_y, z_sc };
    }
    function forward(v) {
        const { z } = _forward(v);
        return z;
    }
    function jacobian(v) {
        const { z_sc, sc_y, z_y, y_x } = _forward(v);
        const out_y = numjs__WEBPACK_IMPORTED_MODULE_0__["add"](numjs__WEBPACK_IMPORTED_MODULE_0__["dot"](z_sc, sc_y), z_y);
        return numjs__WEBPACK_IMPORTED_MODULE_0__["dot"](out_y, y_x).T;
    }
    function layer1(v) {
        const x1 = v.get(0), x2 = v.get(1);
        let y1 = x1, y2 = x2, dy1 = 0, dy2 = 0;
        freqs.forEach((f, i) => {
            const a = amps[i];
            const theta1 = f * x1, theta2 = f * x2;
            y1 += (a * Math.sin(theta2));
            y2 += (a * Math.cos(theta1));
            dy1 += a * f * Math.cos(theta2);
            dy2 += a * f * -Math.sin(theta1);
        });
        return {
            y: numjs__WEBPACK_IMPORTED_MODULE_0__["array"]([y1, y2]),
            y_x: numjs__WEBPACK_IMPORTED_MODULE_0__["array"]([[1, dy1], [dy2, 1]])
        };
    }
    function layer2(v) {
        const y1 = v.get(0), y2 = v.get(1);
        let c1 = 0, c2 = 0, dc1 = 0, dc2 = 0, s1 = 0, s2 = 0, ds1 = 0, ds2 = 0;
        freqs.forEach((f, i) => {
            const a = amps[i];
            const theta1 = f * y1, s01 = Math.sin(theta1), c01 = Math.cos(theta1), theta2 = f * y2, s02 = Math.sin(theta2), c02 = Math.cos(theta2);
            s1 += a * s01;
            c1 += a * c01;
            s2 += a * s02;
            c2 += a * c02;
            ds1 += a * f * c01;
            dc1 += a * f * (-s01);
            ds2 += a * f * c02;
            dc2 += a * f * (-s02);
        });
        return {
            sc: numjs__WEBPACK_IMPORTED_MODULE_0__["array"]([s1, s2, c1, c2]),
            sc_y: numjs__WEBPACK_IMPORTED_MODULE_0__["array"]([[ds1, 0], [0, ds2],
                [dc1, 0], [0, dc2]])
        };
    }
    function layer3(v, sc) {
        const y1 = v.get(0), y2 = v.get(1);
        const [s1, s2, c1, c2] = sc.tolist();
        const z1 = (y1 * s2) + (c1 * y2), z2 = (s1 * y2) + (y1 * c2), z1_dy = [s2, c1], z2_dy = [c2, s1], z1_dsc = [0, y1, y2, 0], z2_dsc = [y2, 0, 0, y1];
        return {
            z: numjs__WEBPACK_IMPORTED_MODULE_0__["array"]([z1, z2]),
            z_y: numjs__WEBPACK_IMPORTED_MODULE_0__["array"]([z1_dy, z2_dy]),
            z_sc: numjs__WEBPACK_IMPORTED_MODULE_0__["array"]([z1_dsc, z2_dsc])
        };
    }
    return {
        freqs,
        amps,
        forward,
        jacobian,
    };
}


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
/* harmony import */ var _LandscapeLoss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./LandscapeLoss */ "./src/ts/LandscapeLoss.ts");
/* harmony import */ var _util_xd3__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./util/xd3 */ "./src/ts/util/xd3.ts");






// Parameters defining elliptical
const A = numjs__WEBPACK_IMPORTED_MODULE_0__["array"]([[1, 2], [2, 1]]);
// Parameters defining bumpy landscape
const freqs = Object(_util_xd3__WEBPACK_IMPORTED_MODULE_5__["linspace"])(-1, 0, 4).map(x => Math.exp(x));
// const freqs = [1,2]
const amps = freqs.map(x => 1 / x);
const bumpy = Object(_LandscapeLoss__WEBPACK_IMPORTED_MODULE_4__["LandscapeLoss"])(freqs, amps);
const landscapes2d = {
    SimpleNet2D: {
        name: "SimpleNet2D",
        f: (v) => (v.get(0) * v.get(1) - 1),
        df: (v) => numjs__WEBPACK_IMPORTED_MODULE_0__["array"]([v.get(1), v.get(0)]),
        error: fv => fv - 1,
        loss: x => x,
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
    },
    ChainNet: {
        name: "ChainNet",
        f: (v) => Math.pow(v.get(0), 2) * v.get(1),
        df: (v) => numjs__WEBPACK_IMPORTED_MODULE_0__["array"]([[v.get(0)], [v.get(1)]]),
        error: fv => fv - 1,
        loss: x => x,
        updaterClass: _Updater2D__WEBPACK_IMPORTED_MODULE_3__["Updater2D"],
        colorScale: d3__WEBPACK_IMPORTED_MODULE_1__["scaleLinear"]()
            .domain([-1, 0, 1.6])
            //@ts-ignore
            .range(["white", "steelblue", "red"])
            //@ts-ignore
            .interpolate(d3__WEBPACK_IMPORTED_MODULE_1__["interpolateRgb"].gamma(2.2)),
        xrange: [0, 1.6],
        yrange: [0, 1.6],
        nContours: 20,
    },
    Elliptical: {
        name: "Elliptical",
        f: v => numjs__WEBPACK_IMPORTED_MODULE_0__["dot"](A, v),
        df: v => A,
        error: fv => numjs__WEBPACK_IMPORTED_MODULE_0__["subtract"](fv, numjs__WEBPACK_IMPORTED_MODULE_0__["array"]([0, 0])),
        loss: (err) => numjs__WEBPACK_IMPORTED_MODULE_0__["sum"](numjs__WEBPACK_IMPORTED_MODULE_0__["divide"](numjs__WEBPACK_IMPORTED_MODULE_0__["power"](err, 2), 2)),
        updaterClass: _Updater2D__WEBPACK_IMPORTED_MODULE_3__["Updater2D"],
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
        step2lr: d3__WEBPACK_IMPORTED_MODULE_1__["scaleLinear"]().domain([0, 1]).range([0.1, 1.5])
    },
    Landscape1: {
        name: "Landscape1",
        f: bumpy.forward,
        df: bumpy.jacobian,
        error: fv => fv,
        loss: (err) => numjs__WEBPACK_IMPORTED_MODULE_0__["sum"](numjs__WEBPACK_IMPORTED_MODULE_0__["power"](err, 2)) / 2,
        // loss: (fv: tp.Array) => Math.log(1 + nj.sum(nj.power(fv, 2)) / 2),
        // loss: (fv: tp.Array) => fv,
        updaterClass: _Updater2D__WEBPACK_IMPORTED_MODULE_3__["Updater2D"],
        colorScale: d3__WEBPACK_IMPORTED_MODULE_1__["scalePow"]()
            .exponent(0.5)
            .domain([0, 100])
            //@ts-ignore
            .range(["steelblue", "white"])
            //@ts-ignore
            .interpolate(d3__WEBPACK_IMPORTED_MODULE_1__["interpolateRgb"].gamma(2.2)),
        // xrange: [2.4, 8.4], // OG
        // yrange: [2.2, 8.83], // OG
        xrange: [-2, 2],
        yrange: [-2, 2],
        nContours: 20,
        nx: 12,
        ny: 12,
        eta: 0.001,
        step2lr: d3__WEBPACK_IMPORTED_MODULE_1__["scaleLinear"]().domain([0, 1]).range([0.2, 1])
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



const defaultErrorFunction = v => {
    return numjs__WEBPACK_IMPORTED_MODULE_1__["dot"](numjs__WEBPACK_IMPORTED_MODULE_1__["array"]([[1, 2], [2, 1]]), v);
};
const defaultDfFunction = v => numjs__WEBPACK_IMPORTED_MODULE_1__["array"]([[1, 2], [2, 1]]);
const defaultStep2Lr = d3__WEBPACK_IMPORTED_MODULE_0__["scaleLinear"]().domain([0, 0.8]).range([0.001, 0.25]);
const defaultError = fv => numjs__WEBPACK_IMPORTED_MODULE_1__["subtract"](fv, numjs__WEBPACK_IMPORTED_MODULE_1__["array"]([0, 0]));
const defaultLoss = err => numjs__WEBPACK_IMPORTED_MODULE_1__["sum"](numjs__WEBPACK_IMPORTED_MODULE_1__["divide"](numjs__WEBPACK_IMPORTED_MODULE_1__["power"](err, 2), 2));
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
    constructor(options = {}) {
        super();
        // Set Default Options
        this.op = {
            //@ts-ignore
            f: defaultErrorFunction,
            //@ts-ignore
            df: defaultDfFunction,
            error: defaultError,
            loss: defaultLoss,
            q: 0,
            eta: 0.1,
            step2lr: defaultStep2Lr,
        };
        this.updateOptions(options);
    }
    dv(v) {
        const jac = this.op.df(v);
        const err = this.op.error(v);
        console.log(`Found error: ${err}`);
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
function plotBumpyLoss2D() {
    const vis = d3__WEBPACK_IMPORTED_MODULE_0__["select"]("#vis-2d-loss");
    const eventHandler = new _util_SimpleEventHandler__WEBPACK_IMPORTED_MODULE_10__["SimpleEventHandler"](vis.node());
    const sels = {
        plot: vis.select("#loss-2d"),
        qId: vis.select('#q-val'),
        etaId: vis.select('#eta-val'),
        qSlider: vis.select('#q-slider'),
        etaSlider: vis.select('#eta-slider'),
        hessType: vis.select('#hess-type'),
    };
    const vizs = {
        plot: _vis_GeneralContourPlot__WEBPACK_IMPORTED_MODULE_2__["ContourPlot"].fromLandscape(sels.plot, eventHandler, _Landscapes2D__WEBPACK_IMPORTED_MODULE_13__["landscapes2d"].Landscape1),
    };
    const defaults = {
        // Note to also change the default value in the html file!
        q: 0,
        eta: 0.05
    };
    const scales = {
        q: d3__WEBPACK_IMPORTED_MODULE_0__["scaleLinear"]().range([0, 10]).domain([0, 1]),
        eta: d3__WEBPACK_IMPORTED_MODULE_0__["scaleLinear"]().range([1, 1000]).domain([Math.pow(10, -8), 0.004])
    };
    // Initialize graph parameters to match the defaults
    vizs.plot.q(defaults.q);
    vizs.plot.eta(defaults.eta);
    sels.qSlider.property('value', scales.q(defaults.q));
    sels.etaSlider.property('value', scales.eta(defaults.eta));
    sels.qId.text(toQ(defaults.q));
    sels.etaId.text(toEta(defaults.eta));
    sels.qSlider.on('input', function () {
        const me = d3__WEBPACK_IMPORTED_MODULE_0__["select"](this);
        const v = scales.q.invert(+me.property('value'));
        vizs.plot.q(v);
        sels.qId.text(`${toQ(v)}`);
    });
    sels.etaSlider.on('input', function () {
        const me = d3__WEBPACK_IMPORTED_MODULE_0__["select"](this);
        const v = scales.eta.invert(me.property('value'));
        vizs.plot.eta(v);
        sels.etaId.text(`${toEta(v)}`);
    });
    sels.hessType.on('input', function () {
        const self = d3__WEBPACK_IMPORTED_MODULE_0__["select"](this);
        const v = self.property('value');
        vizs.plot.setUpdater(v);
    });
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
    // const bumpy = LandscapeLoss([1,2,3], [1,1,1])
    // const v = nj.array([1,1])
    // console.log("Forward Results: ", bumpy.forward(v))
    // console.log("Jac Results: ", bumpy.jacobian(v))
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
    plotBumpyLoss2D();
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
        let prevLoss = -Infinity;
        this._curr.ticker = Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["interval"])(op.interval).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["startWith"])(prep()), 
        //@ts-ignore
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["scan"])(v => {
            const loss = self.options.updater.loss(v);
            // if (loss >= prevLoss) {
            //     console.log(`Found Higher Loss :'(. Increased by ${loss - prevLoss}`);
            //     prevLoss = loss;
            // }
            // else {
            //     // console.log(`Yep new loss is lower than prev loss: ${loss - prevLoss}`);
            //     console.log(`Loss is lower :)`);
            // }
            return op.updater.next(v);
        }, self.curr()), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["take"])(op.maxTick)).subscribe(subObj);
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
            console.log("Clicked: ", self.curr());
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nzcy9tYWluLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy90cy9CYXNlVXBkYXRlcjJELnRzIiwid2VicGFjazovLy8uL3NyYy90cy9Hb2xmTGFuZHNjYXBlcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHMvTGFuZHNjYXBlTG9zcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHMvTGFuZHNjYXBlczJELnRzIiwid2VicGFjazovLy8uL3NyYy90cy9TaW1wbGVOZXRVcGRhdGVyLnRzIiwid2VicGFjazovLy8uL3NyYy90cy9VcGRhdGVyMkQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RzL21haW4udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RzL3Bsb3R0aW5nLnRzIiwid2VicGFjazovLy8uL3NyYy90cy91dGlsL0NoYXJ0MmRWaXNDb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RzL3V0aWwvSFRNTFZpc0NvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHMvdXRpbC9TVkdWaXNDb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RzL3V0aWwvU1ZHcGx1cy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHMvdXRpbC9TaW1wbGVFdmVudEhhbmRsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RzL3V0aWwvVUlkLnRzIiwid2VicGFjazovLy8uL3NyYy90cy91dGlsL1Zpc0NvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHMvdXRpbC94ZDMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RzL3Zpcy9HZW5lcmFsQ29udG91clBsb3QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RzL3Zpcy9Hb2xmQmFsbC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHMvdmlzL0dvbGZIb2xlMUQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RzL3Zpcy9Hb2xmTG9zc2VzLnRzIiwid2VicGFjazovLy8uL3NyYy90cy92aXMvR29sZlhEaXN0LnRzIiwid2VicGFjazovLy8uL3NyYy90cy92aXMvTWFudWFsVXBkYXRlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHMvdmlzL1F1YWRyYXRpY1Bsb3RzLnRzIiwid2VicGFjazovLy8uL3NyYy90cy92aXMvU2ltcGxlTmV0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLFFBQVEsb0JBQW9CO1FBQzVCO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsaUJBQWlCLDRCQUE0QjtRQUM3QztRQUNBO1FBQ0Esa0JBQWtCLDJCQUEyQjtRQUM3QztRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7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QUFDLENBQUM7YUFDL0MsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBRXpDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRTthQUNWLElBQUksQ0FBQyxjQUFjLEVBQUUsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEVBQUUsQ0FBQyxDQUFDO2FBQy9DLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUUzQyxDQUFDO0lBS0QsSUFBSSxDQUFDLEdBQUk7UUFDUCxPQUFPLElBQUk7SUFDYixDQUFDO0NBQ0YiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuIFx0ZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soZGF0YSkge1xuIFx0XHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuIFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuIFx0XHR2YXIgZXhlY3V0ZU1vZHVsZXMgPSBkYXRhWzJdO1xuXG4gXHRcdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuIFx0XHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcbiBcdFx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXTtcbiBcdFx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG4gXHRcdFx0fVxuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdH1cbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZihwYXJlbnRKc29ucEZ1bmN0aW9uKSBwYXJlbnRKc29ucEZ1bmN0aW9uKGRhdGEpO1xuXG4gXHRcdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuIFx0XHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcbiBcdFx0fVxuXG4gXHRcdC8vIGFkZCBlbnRyeSBtb2R1bGVzIGZyb20gbG9hZGVkIGNodW5rIHRvIGRlZmVycmVkIGxpc3RcbiBcdFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2guYXBwbHkoZGVmZXJyZWRNb2R1bGVzLCBleGVjdXRlTW9kdWxlcyB8fCBbXSk7XG5cbiBcdFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiBhbGwgY2h1bmtzIHJlYWR5XG4gXHRcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIFx0fTtcbiBcdGZ1bmN0aW9uIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCkge1xuIFx0XHR2YXIgcmVzdWx0O1xuIFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0dmFyIGRlZmVycmVkTW9kdWxlID0gZGVmZXJyZWRNb2R1bGVzW2ldO1xuIFx0XHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuIFx0XHRcdGZvcih2YXIgaiA9IDE7IGogPCBkZWZlcnJlZE1vZHVsZS5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0dmFyIGRlcElkID0gZGVmZXJyZWRNb2R1bGVbal07XG4gXHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbZGVwSWRdICE9PSAwKSBmdWxmaWxsZWQgPSBmYWxzZTtcbiBcdFx0XHR9XG4gXHRcdFx0aWYoZnVsZmlsbGVkKSB7XG4gXHRcdFx0XHRkZWZlcnJlZE1vZHVsZXMuc3BsaWNlKGktLSwgMSk7XG4gXHRcdFx0XHRyZXN1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IGRlZmVycmVkTW9kdWxlWzBdKTtcbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHRyZXR1cm4gcmVzdWx0O1xuIFx0fVxuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuIFx0Ly8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4gXHQvLyBQcm9taXNlID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJtYWluXCI6IDBcbiBcdH07XG5cbiBcdHZhciBkZWZlcnJlZE1vZHVsZXMgPSBbXTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0dmFyIGpzb25wQXJyYXkgPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gfHwgW107XG4gXHR2YXIgb2xkSnNvbnBGdW5jdGlvbiA9IGpzb25wQXJyYXkucHVzaC5iaW5kKGpzb25wQXJyYXkpO1xuIFx0anNvbnBBcnJheS5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7XG4gXHRqc29ucEFycmF5ID0ganNvbnBBcnJheS5zbGljZSgpO1xuIFx0Zm9yKHZhciBpID0gMDsgaSA8IGpzb25wQXJyYXkubGVuZ3RoOyBpKyspIHdlYnBhY2tKc29ucENhbGxiYWNrKGpzb25wQXJyYXlbaV0pO1xuIFx0dmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSBvbGRKc29ucEZ1bmN0aW9uO1xuXG5cbiBcdC8vIGFkZCBlbnRyeSBtb2R1bGUgdG8gZGVmZXJyZWQgbGlzdFxuIFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2goW1wiLi9zcmMvaW5kZXgudHNcIixcInZlbmRvclwiXSk7XG4gXHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIHJlYWR5XG4gXHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImluZGV4Lmh0bWxcIjsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJpbXBvcnQge21haW59IGZyb20gJy4vdHMvbWFpbidcblxuaW1wb3J0IFwiIWZpbGUtbG9hZGVyP25hbWU9aW5kZXguaHRtbCEuL2luZGV4Lmh0bWxcIjtcbmltcG9ydCBcIi4vY3NzL21haW4uc2Nzc1wiXG5cbm1haW4oKSIsImltcG9ydCAqIGFzIGQzIGZyb20gJ2QzJ1xuaW1wb3J0ICogYXMgbmogZnJvbSBcIm51bWpzXCJcbmltcG9ydCAqIGFzIHRwIGZyb20gXCIuL3R5cGVzXCJcbmltcG9ydCB7IEFycmF5IH0gZnJvbSBcIi4vdHlwZXNcIlxuXG4vLyBjb25zdCBkZWZhdWx0RXJyb3JGdW5jdGlvbiA9ICh2OiBBcnJheSkgPT4gdi5nZXQoMCkgKiB2LmdldCgxKSAtIDFcbmNvbnN0IGRlZmF1bHRGID0gKHY6IEFycmF5KSA9PiB7XG4gICAgLy9AdHMtaWdub3JlXG4gICAgcmV0dXJuIG5qLmRvdChuai5hcnJheShbWzEsIDJdLCBbMiwgMV1dKSwgdilcbn1cbmNvbnN0IGRlZmF1bHREZiA9ICh2OiBBcnJheSkgPT4gbmouYXJyYXkoW1sxLCAyXSwgWzIsIDFdXSlcbmNvbnN0IGRlZmF1bHRFcnIgPSB2ID0+IG5qLnN1YnRyYWN0KHYsIG5qLmFycmF5KFswLDBdKSlcbmNvbnN0IGRlZmF1bHRMb3NzID0gKGVycjogQXJyYXkpID0+IG5qLnN1bShuai5kaXZpZGUobmoucG93ZXIoZXJyLCAyKSwgMikpXG5jb25zdCBkZWZhdWx0U3RlcDJMcjogZDMuU2NhbGVMaW5lYXI8bnVtYmVyLCBudW1iZXI+ID0gZDMuc2NhbGVMaW5lYXIoKS5kb21haW4oWzAsIDAuOF0pLnJhbmdlKFswLjAwMSwgMC41XSlcblxuaW50ZXJmYWNlIFVwZGF0ZXJPcHRpb25zIHtcbiAgICBkZjogdHAuTWFwRnVuY3Rpb25cbiAgICBmOiB0cC5NYXBGdW5jdGlvblxuICAgIGVycm9yXG4gICAgcTogbnVtYmVyICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIDAgLT4gMSwgd2hlcmUgMCBpcyBTR0QgYW5kIDEgaXMgTkdELiAwLjUgaXMgc3FydCBOR0QuIFtzdGVwID0gLSBldGEgKiBIIF4gKC0xL3EpICogZ10gKEggPSAwIHdoZW4gcT0wKVxuICAgIGV0YTogbnVtYmVyICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBha2EgJ2xlYXJuaW5nIHJhdGUnXG4gICAgc3RlcDJscjogZDMuU2NhbGVMaW5lYXI8bnVtYmVyLCBudW1iZXI+XG4gICAgbG9zczogdHAuUmVkdWNlRnVuY3Rpb25cbn1cblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEJhc2VVcGRhdGVyMkQge1xuICAgIG9wOiBVcGRhdGVyT3B0aW9ucyA9IHtcbiAgICAgICAgLy9AdHMtaWdub3JlXG4gICAgICAgIGY6IGRlZmF1bHRGLFxuICAgICAgICAvL0B0cy1pZ25vcmVcbiAgICAgICAgZGY6IGRlZmF1bHREZixcbiAgICAgICAgZXJyb3I6IGRlZmF1bHRFcnIsXG4gICAgICAgIHE6IDAsXG4gICAgICAgIGV0YTogMC4xLFxuICAgICAgICBzdGVwMmxyOiBkZWZhdWx0U3RlcDJMcixcbiAgICAgICAgbG9zczogZGVmYXVsdExvc3MsXG4gICAgfVxuXG4gICAgY29uc3RydWN0b3Iob3B0aW9uczogUGFydGlhbDxVcGRhdGVyT3B0aW9ucz49e30pIHtcbiAgICAgICAgdGhpcy51cGRhdGVPcHRpb25zKG9wdGlvbnMpXG4gICAgfVxuXG4gICAgdXBkYXRlT3B0aW9ucyhvcHRpb25zOiBQYXJ0aWFsPFVwZGF0ZXJPcHRpb25zPikge1xuICAgICAgICBPYmplY3Qua2V5cyhvcHRpb25zKS5mb3JFYWNoKGsgPT4gdGhpcy5vcFtrXSA9IG9wdGlvbnNba10pO1xuICAgIH1cblxuICAgIGV0YSgpOiBudW1iZXJcbiAgICBldGEodmFsOiBudW1iZXIpOiB0aGlzXG4gICAgZXRhKHZhbD8pIHtcbiAgICAgICAgaWYgKHZhbCA9PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5vcC5ldGFcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm9wLmV0YSA9IHZhbFxuICAgICAgICByZXR1cm4gdGhpc1xuICAgIH1cblxuICAgIHEoKTogbnVtYmVyXG4gICAgcSh2YWw6IG51bWJlcik6IHRoaXNcbiAgICBxKHZhbD8pIHtcbiAgICAgICAgaWYgKHZhbCA9PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5vcC5xXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5vcC5xID0gdmFsXG4gICAgICAgIHJldHVybiB0aGlzXG4gICAgfVxuXG4gICAgc3RlcDJscigpOiBkMy5TY2FsZUxpbmVhcjxudW1iZXIsIG51bWJlcj5cbiAgICBzdGVwMmxyKHZhbDogZDMuU2NhbGVMaW5lYXI8bnVtYmVyLCBudW1iZXI+KTogdGhpc1xuICAgIHN0ZXAybHIodmFsPykge1xuICAgICAgICBpZiAodmFsID09IG51bGwpIHsgcmV0dXJuIHRoaXMub3Auc3RlcDJsciB9XG4gICAgICAgIHRoaXMub3Auc3RlcDJsciA9IHZhbFxuICAgICAgICByZXR1cm4gdGhpc1xuICAgIH1cblxuICAgIC8vIEFtb3VudCB0byBzY2FsZSBzaXplIG9mIGxlYXJuaW5nIHJhdGUgYXJyb3dzXG4gICAgZ2V0IGxyU2NhbGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm9wLnN0ZXAybHIodGhpcy5vcC5ldGEpXG4gICAgfVxuXG4gICAgZXJyb3IodjogQXJyYXkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMub3AuZXJyb3IodGhpcy5vcC5mKHYpKVxuICAgIH1cblxuICAgIGxvc3ModjogQXJyYXkpOiBudW1iZXIge1xuICAgICAgICBjb25zdCBsb3NzID0gdGhpcy5vcC5sb3NzKHRoaXMuZXJyb3IodikpXG4gICAgICAgIHJldHVybiBsb3NzXG4gICAgfVxuXG4gICAgZ3JhZGllbnQodjogQXJyYXkpOiBBcnJheSB7XG4gICAgICAgIC8vIGNvbnN0IGxvc3MgPSB0aGlzLmxvc3ModilcbiAgICAgICAgY29uc3QgZXJyID0gdGhpcy5lcnJvcih2KVxuICAgICAgICBjb25zdCBkZiA9IHRoaXMub3AuZGYodilcbiAgICAgICAgLy8gY29uc3QgZzogQXJyYXkgPSBuai5tdWx0aXBseShkZiwgbG9zcylcbiAgICAgICAgY29uc3QgZzogQXJyYXkgPSBuai5tdWx0aXBseShkZiwgZXJyKVxuICAgICAgICByZXR1cm4gZ1xuICAgIH1cblxuICAgIGxyKHY6IEFycmF5KSB7XG4gICAgICAgIGNvbnN0IGR2ID0gdGhpcy5kdih2KVxuICAgICAgICBjb25zdCBhYnNMb3NzID0gTWF0aC5hYnModGhpcy5sb3NzKHYpKVxuICAgICAgICBjb25zdCBlcHMgPSAxZS0xMDtcbiAgICAgICAgY29uc3QgbHI6IEFycmF5ID0gbmoubXVsdGlwbHkoZHYsIHRoaXMubHJTY2FsZSkuZGl2aWRlKGFic0xvc3MgKyBlcHMpXG4gICAgICAgIHJldHVybiBsclxuICAgIH1cblxuICAgIG5leHQodjogQXJyYXkpIHtcbiAgICAgICAgY29uc3QgZHYgPSB0aGlzLmR2KHYpXG4gICAgICAgIGNvbnN0IG5ld3ggPSBuai5zdWJ0cmFjdCh2LCBuai5tdWx0aXBseShkdiwgdGhpcy5vcC5ldGEpKVxuICAgICAgICAvL0B0cy1pZ25vcmVcbiAgICAgICAgcmV0dXJuIG5ld3hcbiAgICB9XG5cbiAgICBhYnN0cmFjdCBkdih2OiBBcnJheSlcblxuICAgIG5leHRMcih2OiBBcnJheSk6IEFycmF5IHtcbiAgICAgICAgY29uc3QgZyA9IHRoaXMubHIodik7XG4gICAgICAgIGNvbnN0IHo6IEFycmF5ID0gbmouYWRkKHYsIG5qLm11bHRpcGx5KGcsIC0xKSlcbiAgICAgICAgcmV0dXJuIHpcbiAgICB9XG5cbiAgICBhYnN0cmFjdCB0b0Jsb2NrKClcbiAgICBhYnN0cmFjdCB0b0Z1bGwoKVxufSIsImV4cG9ydCBjb25zdCBiYXNlTG9zcyA9IHggPT4gMSAvIDIgKiBNYXRoLnBvdyh4LCAyKVxuZXhwb3J0IGNvbnN0IGdldFBsb3RGdW5jID0gKHo6IExhbmRzY2FwZSkgPT4gKHg6IG51bWJlcikgPT4gei5sb3NzKHouZih4KSlcblxuZXhwb3J0IGludGVyZmFjZSBMYW5kc2NhcGUge1xuICAgIG5hbWU6IHN0cmluZ1xuICAgIGY6ICh4OiBudW1iZXIpID0+IG51bWJlclxuICAgIGRmOiAoeDogbnVtYmVyKSA9PiBudW1iZXJcbiAgICB4cmFuZ2U6IFtudW1iZXIsIG51bWJlcl1cbiAgICB5cmFuZ2U6IFtudW1iZXIsIG51bWJlcl1cbiAgICBsb3NzOiAoeDogbnVtYmVyKSA9PiBudW1iZXJcbn1cblxuXG5leHBvcnQgY29uc3QgbGFuZHNjYXBlczogeyBbazogc3RyaW5nXTogTGFuZHNjYXBlIH0gPSB7XG4gICAgaG9sZToge1xuICAgICAgICBuYW1lOiBcImhvbGVcIixcbiAgICAgICAgZjogeCA9PiBNYXRoLnRhbmgoeCoxMy41KSxcbiAgICAgICAgZGY6IHggPT4gTWF0aC5wb3coTWF0aC5jb3NoKHgqMTMuNSksIC0yKSAqIDEzLjUsXG4gICAgICAgIHhyYW5nZTogWy02IC8gMTMuNSwgNiAvIDEzLjVdLFxuICAgICAgICB5cmFuZ2U6IFswLCAwLjZdLFxuICAgICAgICBsb3NzOiBiYXNlTG9zc1xuICAgIH0sXG4gICAgc3RlcHM6IHtcbiAgICAgICAgbmFtZTogXCJzdGVwc1wiLFxuICAgICAgICBmOiB4ID0+IE1hdGgudGFuaCh4ICogMTMuNSAtIDExKSAvIDQgKyBNYXRoLnRhbmgoeCAqIDEzLjUgLSA2KSAvIDQgKyBNYXRoLnRhbmgoeCAqIDEzLjUpICsgTWF0aC50YW5oKHggKiAxMy41ICsgNikgLyA0ICsgTWF0aC50YW5oKHggKiAxMy41ICsgMTEpIC8gNCxcbiAgICAgICAgZGY6IHggPT4gKE1hdGgucG93KE1hdGguY29zaCh4ICogMTMuNSAtIDExKSwgLTIpIC8gNCArIE1hdGgucG93KE1hdGguY29zaCh4ICogMTMuNSAtIDYpLCAtMikgLyA0ICsgTWF0aC5wb3coTWF0aC5jb3NoKHggKiAxMy41KSwgLTIpICsgTWF0aC5wb3coTWF0aC5jb3NoKHggKiAxMy41ICsgNiksIC0yKSAvIDQgKyBNYXRoLnBvdyhNYXRoLmNvc2goeCAqIDEzLjUgKyAxMSksIC0yKSAvIDQgKSAqIDEzLjUsXG4gICAgICAgIHhyYW5nZTogWy0xMy41IC8gMTMuNSwgMTMuNSAvIDEzLjVdLFxuICAgICAgICB5cmFuZ2U6IFswLCAyLjVdLFxuICAgICAgICBsb3NzOiBiYXNlTG9zc1xuICAgIH0sXG4gICAgc2VhZ3VsbDoge1xuICAgICAgICBuYW1lOiBcInNlYWd1bGxcIixcbiAgICAgICAgZjogeCA9PiBNYXRoLnNpZ24oeCkgKiAoMSAtICgxIC8gKDEgKyBNYXRoLmFicyh4ICogMTYuNSkpKSksXG4gICAgICAgIGRmOiB4ID0+IDE2LjUgLyBNYXRoLnBvdygxICsgTWF0aC5hYnMoeCAqIDE2LjUpLCAyKSxcbiAgICAgICAgeHJhbmdlOiBbLTEyIC8gMTYuNSwgMTIgLyAxNi41XSxcbiAgICAgICAgeXJhbmdlOiBbMCwgMC42XSxcbiAgICAgICAgbG9zczogYmFzZUxvc3NcbiAgICB9LFxuICAgIGJvd2w6IHtcbiAgICAgICAgbmFtZTogXCJib3dsXCIsXG4gICAgICAgIGY6ICB4ID0+IE1hdGguc2luaCh4LzMpLFxuICAgICAgICBkZjogeCA9PiBNYXRoLmNvc2goeC8zKS8zLFxuICAgICAgICB4cmFuZ2U6IFstMyAqIDMsIDMgKiAzXSxcbiAgICAgICAgeXJhbmdlOiBbMCwgNTBdLFxuICAgICAgICBsb3NzOiBiYXNlTG9zc1xuICAgIH0sXG4gICAgZGVlcF9uZXQ6IHtcbiAgICAgICAgbmFtZTogXCJkZWVwX25ldFwiLFxuICAgICAgICBmOiB4ID0+IE1hdGgucG93KE1hdGguYWJzKHgvMysxKSwgMykgLSAxLCAgLy8gZGVwdGggPSA0XG4gICAgICAgIGRmOiB4ID0+IDMvMyAqIE1hdGgucG93KE1hdGguYWJzKHgvMysxKSwgMiksXG4gICAgICAgIC8vIHhyYW5nZTogWy0wLjcqNCwgMC43KjRdLFxuICAgICAgICB4cmFuZ2U6IFstMC45NSozLCAwLjk1KjNdLFxuICAgICAgICB5cmFuZ2U6IFswLCA0XSxcbiAgICAgICAgbG9zczogYmFzZUxvc3NcbiAgICB9XG59IiwiaW1wb3J0ICogYXMgbmogZnJvbSBcIm51bWpzXCJcblxuZXhwb3J0IGZ1bmN0aW9uIExhbmRzY2FwZUxvc3MoZnJlcXM6IG51bWJlcltdLCBhbXBzOiBudW1iZXJbXSkge1xuICAgIGlmIChmcmVxcy5sZW5ndGggIT0gYW1wcy5sZW5ndGgpIHRocm93IFwiRXhwZWN0IGFtcGxpdHVkZXMgYW5kIGZyZXF1ZW5jaWVzIHRvIGJlIHZlY3RvcnMgb2YgdGhlIHNhbWUgbGVuZ3RoXCJcblxuICAgIGZ1bmN0aW9uIF9mb3J3YXJkKHY6IG5qLk5kQXJyYXk8bnVtYmVyPikge1xuICAgICAgICBjb25zdCB7IHksIHlfeCB9ID0gbGF5ZXIxKHYpXG4gICAgICAgIGNvbnN0IHsgc2MsIHNjX3kgfSA9IGxheWVyMih5KVxuICAgICAgICBjb25zdCB7IHosIHpfeSwgel9zYyB9ID0gbGF5ZXIzKHksIHNjKVxuXG4gICAgICAgIHJldHVybiB7IHksIHlfeCwgc2MsIHNjX3ksIHosIHpfeSwgel9zYyB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZm9yd2FyZCh2OiBuai5OZEFycmF5PG51bWJlcj4pOiBuai5OZEFycmF5PG51bWJlcj4ge1xuICAgICAgICBjb25zdCB7IHogfSA9IF9mb3J3YXJkKHYpXG4gICAgICAgIHJldHVybiB6XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gamFjb2JpYW4odjogbmouTmRBcnJheTxudW1iZXI+KSB7XG4gICAgICAgIGNvbnN0IHsgel9zYywgc2NfeSwgel95LCB5X3ggfSA9IF9mb3J3YXJkKHYpXG4gICAgICAgIGNvbnN0IG91dF95ID0gbmouYWRkKG5qLmRvdCh6X3NjLCBzY195KSwgel95KVxuICAgICAgICByZXR1cm4gbmouZG90KG91dF95LCB5X3gpLlRcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsYXllcjEodjogbmouTmRBcnJheTxudW1iZXI+KSB7XG4gICAgICAgIGNvbnN0IHgxID0gdi5nZXQoMCksXG4gICAgICAgICAgICB4MiA9IHYuZ2V0KDEpXG5cbiAgICAgICAgbGV0IHkxID0geDEsIHkyID0geDIsXG4gICAgICAgICAgICBkeTEgPSAwLCBkeTIgPSAwXG5cbiAgICAgICAgZnJlcXMuZm9yRWFjaCgoZiwgaSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgYSA9IGFtcHNbaV1cblxuICAgICAgICAgICAgY29uc3QgdGhldGExID0gZiAqIHgxLFxuICAgICAgICAgICAgICAgIHRoZXRhMiA9IGYgKiB4MlxuICAgICAgICAgICAgeTEgKz0gKGEgKiBNYXRoLnNpbih0aGV0YTIpKVxuICAgICAgICAgICAgeTIgKz0gKGEgKiBNYXRoLmNvcyh0aGV0YTEpKVxuICAgICAgICAgICAgZHkxICs9IGEgKiBmICogTWF0aC5jb3ModGhldGEyKVxuICAgICAgICAgICAgZHkyICs9IGEgKiBmICogLU1hdGguc2luKHRoZXRhMSlcbiAgICAgICAgfSlcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgeTogbmouYXJyYXkoW3kxLCB5Ml0pLFxuICAgICAgICAgICAgeV94OiBuai5hcnJheShbWzEsIGR5MV0sIFtkeTIsIDFdXSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGxheWVyMih2OiBuai5OZEFycmF5PG51bWJlcj4pIHtcbiAgICAgICAgY29uc3QgeTEgPSB2LmdldCgwKSxcbiAgICAgICAgICAgIHkyID0gdi5nZXQoMSlcblxuICAgICAgICBsZXQgYzEgPSAwLCBjMiA9IDAsIGRjMSA9IDAsIGRjMiA9IDAsXG4gICAgICAgICAgICBzMSA9IDAsIHMyID0gMCwgZHMxID0gMCwgZHMyID0gMFxuXG4gICAgICAgIGZyZXFzLmZvckVhY2goKGYsIGkpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGEgPSBhbXBzW2ldXG4gICAgICAgICAgICBjb25zdCB0aGV0YTEgPSBmICogeTEsIHMwMSA9IE1hdGguc2luKHRoZXRhMSksIGMwMSA9IE1hdGguY29zKHRoZXRhMSksXG4gICAgICAgICAgICAgICAgdGhldGEyID0gZiAqIHkyLCBzMDIgPSBNYXRoLnNpbih0aGV0YTIpLCBjMDIgPSBNYXRoLmNvcyh0aGV0YTIpXG5cbiAgICAgICAgICAgIHMxICs9IGEgKiBzMDFcbiAgICAgICAgICAgIGMxICs9IGEgKiBjMDFcbiAgICAgICAgICAgIHMyICs9IGEgKiBzMDJcbiAgICAgICAgICAgIGMyICs9IGEgKiBjMDJcbiAgICAgICAgICAgIGRzMSArPSBhICogZiAqIGMwMVxuICAgICAgICAgICAgZGMxICs9IGEgKiBmICogKC1zMDEpXG4gICAgICAgICAgICBkczIgKz0gYSAqIGYgKiBjMDJcbiAgICAgICAgICAgIGRjMiArPSBhICogZiAqICgtczAyKVxuICAgICAgICB9KVxuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBzYzogbmouYXJyYXkoW3MxLCBzMiwgYzEsIGMyXSksXG4gICAgICAgICAgICBzY195Om5qLmFycmF5KFtbZHMxLCAwXSwgWzAsIGRzMl0sXG4gICAgICAgICAgICAgICAgW2RjMSwgMF0sWzAsIGRjMl1dKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbGF5ZXIzKHY6IG5qLk5kQXJyYXk8bnVtYmVyPiwgc2M6IG5qLk5kQXJyYXk8bnVtYmVyPikge1xuICAgICAgICBjb25zdCB5MSA9IHYuZ2V0KDApLFxuICAgICAgICAgICAgeTIgPSB2LmdldCgxKVxuXG4gICAgICAgIGNvbnN0IFtzMSwgczIsIGMxLCBjMl0gPSBzYy50b2xpc3QoKVxuXG4gICAgICAgIGNvbnN0IHoxID0gKHkxICogczIpICsgKGMxICogeTIpLFxuICAgICAgICAgICAgejIgPSAoczEgKiB5MikgKyAoeTEgKiBjMiksXG4gICAgICAgICAgICB6MV9keSA9IFtzMiwgYzFdLFxuICAgICAgICAgICAgejJfZHkgPSBbYzIsIHMxXSxcbiAgICAgICAgICAgIHoxX2RzYyA9IFswLCB5MSwgeTIsIDBdLFxuICAgICAgICAgICAgejJfZHNjID0gW3kyLCAwLCAwLCB5MV1cblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgejogbmouYXJyYXkoW3oxLCB6Ml0pLFxuICAgICAgICAgICAgel95OiBuai5hcnJheShbejFfZHksIHoyX2R5XSksXG4gICAgICAgICAgICB6X3NjOiBuai5hcnJheShbejFfZHNjLCB6Ml9kc2NdKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgZnJlcXMsXG4gICAgICAgIGFtcHMsXG4gICAgICAgIGZvcndhcmQsXG4gICAgICAgIGphY29iaWFuLFxuICAgIH1cbn0iLCJpbXBvcnQgKiBhcyB0cCBmcm9tIFwiLi90eXBlc1wiXG5pbXBvcnQgKiBhcyBuaiBmcm9tIFwibnVtanNcIlxuaW1wb3J0ICogYXMgZDMgZnJvbSBcImQzXCJcbmltcG9ydCB7U2ltcGxlTmV0VXBkYXRlcn0gZnJvbSBcIi4vU2ltcGxlTmV0VXBkYXRlclwiXG5pbXBvcnQge1VwZGF0ZXIyRH0gZnJvbSBcIi4vVXBkYXRlcjJEXCJcbmltcG9ydCB7TGFuZHNjYXBlTG9zc30gZnJvbSBcIi4vTGFuZHNjYXBlTG9zc1wiXG5pbXBvcnQge2xpbnNwYWNlfSBmcm9tIFwiLi91dGlsL3hkM1wiXG5cbmV4cG9ydCBpbnRlcmZhY2UgTGFuZHNjYXBlMkQge1xuICAgIG5hbWU6IHN0cmluZ1xuICAgIGZcbiAgICBkZlxuICAgIGVycm9yXG4gICAgbG9zc1xuICAgIHVwZGF0ZXJDbGFzc1xuICAgIGNvbG9yU2NhbGU6IGQzLlNjYWxlTGluZWFyPG51bWJlciwgbnVtYmVyIHwgc3RyaW5nPlxuICAgIHhyYW5nZTogW251bWJlciwgbnVtYmVyXVxuICAgIHlyYW5nZTogW251bWJlciwgbnVtYmVyXVxuICAgIHRhcmdldD9cbiAgICBuQ29udG91cnM/OiBudW1iZXJcbiAgICBueD86IG51bWJlclxuICAgIG55PzogbnVtYmVyXG4gICAgc3RlcDJscj9cbiAgICBldGE/XG59XG5cblxuLy8gUGFyYW1ldGVycyBkZWZpbmluZyBlbGxpcHRpY2FsXG5jb25zdCBBID0gbmouYXJyYXkoW1sxLDJdLCBbMiwxXV0pXG5cbi8vIFBhcmFtZXRlcnMgZGVmaW5pbmcgYnVtcHkgbGFuZHNjYXBlXG5jb25zdCBmcmVxcyA9IGxpbnNwYWNlKC0xLCAwLCA0KS5tYXAoeCA9PiBNYXRoLmV4cCh4KSlcbi8vIGNvbnN0IGZyZXFzID0gWzEsMl1cbmNvbnN0IGFtcHMgPSBmcmVxcy5tYXAoeCA9PiAxL3gpXG5jb25zdCBidW1weSA9IExhbmRzY2FwZUxvc3MoZnJlcXMsIGFtcHMpXG5cbmV4cG9ydCBjb25zdCBsYW5kc2NhcGVzMmQ6IHsgW2s6IHN0cmluZ106IExhbmRzY2FwZTJEIH0gPSB7XG4gICAgU2ltcGxlTmV0MkQ6IHtcbiAgICAgICAgbmFtZTogXCJTaW1wbGVOZXQyRFwiLFxuICAgICAgICBmOiAodjogdHAuQXJyYXkpID0+ICh2LmdldCgwKSAqIHYuZ2V0KDEpIC0gMSksXG4gICAgICAgIGRmOiAodjogdHAuQXJyYXkpID0+IG5qLmFycmF5KFt2LmdldCgxKSwgdi5nZXQoMCldKSxcbiAgICAgICAgZXJyb3I6IGZ2ID0+IGZ2IC0gMSxcbiAgICAgICAgbG9zczogeCA9PiB4LFxuICAgICAgICB1cGRhdGVyQ2xhc3M6IFNpbXBsZU5ldFVwZGF0ZXIsXG4gICAgICAgIGNvbG9yU2NhbGU6IGQzLnNjYWxlTGluZWFyKClcbiAgICAgICAgICAgIC5kb21haW4oWy0xLCAwLCAxLjZdKVxuICAgICAgICAgICAgLy9AdHMtaWdub3JlXG4gICAgICAgICAgICAucmFuZ2UoW1wid2hpdGVcIiwgXCJzdGVlbGJsdWVcIiwgXCJyZWRcIl0pXG4gICAgICAgICAgICAvL0B0cy1pZ25vcmVcbiAgICAgICAgICAgIC5pbnRlcnBvbGF0ZShkMy5pbnRlcnBvbGF0ZVJnYi5nYW1tYSgyLjIpKSxcbiAgICAgICAgeHJhbmdlOiBbMCwgMS42XSxcbiAgICAgICAgeXJhbmdlOiBbMCwgMS42XSxcbiAgICAgICAgbkNvbnRvdXJzOiAyMCxcbiAgICB9LFxuXG4gICAgQ2hhaW5OZXQ6IHtcbiAgICAgICAgbmFtZTogXCJDaGFpbk5ldFwiLFxuICAgICAgICBmOiAodjogdHAuQXJyYXkpID0+IE1hdGgucG93KHYuZ2V0KDApLCAyKSAqIHYuZ2V0KDEpLFxuICAgICAgICBkZjogKHY6IHRwLkFycmF5KSA9PiBuai5hcnJheShbW3YuZ2V0KDApXSwgW3YuZ2V0KDEpXV0pLFxuICAgICAgICBlcnJvcjogZnYgPT4gZnYgLSAxLFxuICAgICAgICBsb3NzOiB4ID0+IHgsIC8vIExvc3Mgc2hvdWxkIGFsd2F5cyBiZSBhIGZ1bmN0aW9uIG9mIGVycm9yIVxuICAgICAgICB1cGRhdGVyQ2xhc3M6IFVwZGF0ZXIyRCxcbiAgICAgICAgY29sb3JTY2FsZTogZDMuc2NhbGVMaW5lYXIoKVxuICAgICAgICAgICAgLmRvbWFpbihbLTEsIDAsIDEuNl0pXG4gICAgICAgICAgICAvL0B0cy1pZ25vcmVcbiAgICAgICAgICAgIC5yYW5nZShbXCJ3aGl0ZVwiLCBcInN0ZWVsYmx1ZVwiLCBcInJlZFwiXSlcbiAgICAgICAgICAgIC8vQHRzLWlnbm9yZVxuICAgICAgICAgICAgLmludGVycG9sYXRlKGQzLmludGVycG9sYXRlUmdiLmdhbW1hKDIuMikpLFxuICAgICAgICB4cmFuZ2U6IFswLCAxLjZdLFxuICAgICAgICB5cmFuZ2U6IFswLCAxLjZdLFxuICAgICAgICBuQ29udG91cnM6IDIwLFxuICAgIH0sXG5cbiAgICBFbGxpcHRpY2FsOiB7XG4gICAgICAgIG5hbWU6IFwiRWxsaXB0aWNhbFwiLFxuICAgICAgICBmOiB2ID0+IG5qLmRvdChBLCB2KSxcbiAgICAgICAgZGY6IHYgPT4gQSxcbiAgICAgICAgZXJyb3I6IGZ2ID0+IG5qLnN1YnRyYWN0KGZ2LCBuai5hcnJheShbMCwwXSkpLFxuICAgICAgICBsb3NzOiAoZXJyOiB0cC5BcnJheSkgPT4gbmouc3VtKG5qLmRpdmlkZShuai5wb3dlcihlcnIsIDIpLCAyKSksXG4gICAgICAgIHVwZGF0ZXJDbGFzczogVXBkYXRlcjJELFxuICAgICAgICBjb2xvclNjYWxlOiBkMy5zY2FsZVBvdygpXG4gICAgICAgICAgICAuZXhwb25lbnQoMC41KVxuICAgICAgICAgICAgLmRvbWFpbihbMCwgMzZdKVxuICAgICAgICAgICAgLy9AdHMtaWdub3JlXG4gICAgICAgICAgICAucmFuZ2UoW1wic3RlZWxibHVlXCIsIFwid2hpdGVcIl0pXG4gICAgICAgICAgICAvL0B0cy1pZ25vcmVcbiAgICAgICAgICAgIC5pbnRlcnBvbGF0ZShkMy5pbnRlcnBvbGF0ZVJnYi5nYW1tYSgyLjIpKSxcbiAgICAgICAgeHJhbmdlOiBbLTIsIDJdLFxuICAgICAgICB5cmFuZ2U6IFstMiwgMl0sXG4gICAgICAgIG5Db250b3VyczogMzAsXG4gICAgICAgIG54OiA3LFxuICAgICAgICBueTogNyxcbiAgICAgICAgc3RlcDJscjogZDMuc2NhbGVMaW5lYXIoKS5kb21haW4oWzAsIDFdKS5yYW5nZShbMC4xLCAxLjVdKVxuICAgIH0sXG5cbiAgICBMYW5kc2NhcGUxOiB7XG4gICAgICAgIG5hbWU6IFwiTGFuZHNjYXBlMVwiLFxuICAgICAgICBmOiBidW1weS5mb3J3YXJkLFxuICAgICAgICBkZjogYnVtcHkuamFjb2JpYW4sXG4gICAgICAgIGVycm9yOiBmdiA9PiBmdiwgLy8gVGhlIGZ1bmN0aW9uIHZhbHVlIGlzIHRoZSBlcnJvciBpdHNlbGZcbiAgICAgICAgbG9zczogKGVycjogdHAuQXJyYXkpID0+IG5qLnN1bShuai5wb3dlcihlcnIsIDIpKSAvIDIsXG4gICAgICAgIC8vIGxvc3M6IChmdjogdHAuQXJyYXkpID0+IE1hdGgubG9nKDEgKyBuai5zdW0obmoucG93ZXIoZnYsIDIpKSAvIDIpLFxuICAgICAgICAvLyBsb3NzOiAoZnY6IHRwLkFycmF5KSA9PiBmdixcbiAgICAgICAgdXBkYXRlckNsYXNzOiBVcGRhdGVyMkQsXG4gICAgICAgIGNvbG9yU2NhbGU6IGQzLnNjYWxlUG93KClcbiAgICAgICAgICAgIC5leHBvbmVudCgwLjUpXG4gICAgICAgICAgICAuZG9tYWluKFswLCAxMDBdKVxuICAgICAgICAgICAgLy9AdHMtaWdub3JlXG4gICAgICAgICAgICAucmFuZ2UoW1wic3RlZWxibHVlXCIsIFwid2hpdGVcIl0pXG4gICAgICAgICAgICAvL0B0cy1pZ25vcmVcbiAgICAgICAgICAgIC5pbnRlcnBvbGF0ZShkMy5pbnRlcnBvbGF0ZVJnYi5nYW1tYSgyLjIpKSxcbiAgICAgICAgLy8geHJhbmdlOiBbMi40LCA4LjRdLCAvLyBPR1xuICAgICAgICAvLyB5cmFuZ2U6IFsyLjIsIDguODNdLCAvLyBPR1xuICAgICAgICB4cmFuZ2U6IFstMiwgMl0sIC8vIFdvcmtzP1xuICAgICAgICB5cmFuZ2U6IFstMiwgMl0sIC8vIFdvcmtzP1xuICAgICAgICBuQ29udG91cnM6IDIwLFxuICAgICAgICBueDogMTIsXG4gICAgICAgIG55OiAxMixcbiAgICAgICAgZXRhOiAwLjAwMSxcbiAgICAgICAgc3RlcDJscjogZDMuc2NhbGVMaW5lYXIoKS5kb21haW4oWzAsIDFdKS5yYW5nZShbMC4yLCAxXSlcbiAgICB9LFxuXG59IiwiaW1wb3J0ICogYXMgZDMgZnJvbSAnZDMnXG5pbXBvcnQgKiBhcyBuaiBmcm9tIFwibnVtanNcIlxuaW1wb3J0ICogYXMgdHAgZnJvbSBcIi4vdHlwZXNcIlxuaW1wb3J0IHsgQXJyYXkgfSBmcm9tIFwiLi90eXBlc1wiXG5pbXBvcnQgeyBCYXNlVXBkYXRlcjJEIH0gZnJvbSBcIi4vQmFzZVVwZGF0ZXIyRFwiXG5cbmV4cG9ydCBjbGFzcyBTaW1wbGVOZXRVcGRhdGVyIGV4dGVuZHMgQmFzZVVwZGF0ZXIyRCB7XG4gICAgZWlnZW52YWx1ZXModjogQXJyYXkpOiBBcnJheSB7XG4gICAgICAgIGNvbnN0IGV4ID0gbmoucG93ZXIodiwgMikuc3VtKClcbiAgICAgICAgY29uc3QgZXkgPSBuai5wb3dlcih2LCAyKS5zdW0oKVxuICAgICAgICByZXR1cm4gbmouYXJyYXkoW2V4LCBleV0pXG4gICAgfVxuXG4gICAgZHYodjogQXJyYXkpOiBBcnJheSB7XG4gICAgICAgIGNvbnN0IGcgPSB0aGlzLmdyYWRpZW50KHYpXG4gICAgICAgIGNvbnN0IGV2ID0gdGhpcy5laWdlbnZhbHVlcyh2KVxuXG4gICAgICAgIGNvbnN0IG1vZEV2cyA9IG5qLmFicyhuai5wb3dlcihldiwgdGhpcy5vcC5xKSlcbiAgICAgICAgY29uc3QgZHY6IEFycmF5ID0gbmouZGl2aWRlKGcsIG1vZEV2cylcbiAgICAgICAgcmV0dXJuIGR2XG4gICAgfVxuXG4gICAgLy8gQ29udmVydCB0byBibG9jayBkaWFnb25hbCB1cGRhdGVyXG4gICAgdG9CbG9jaygpOiBCbG9ja1NpbXBsZU5ldFVwZGF0ZXIge1xuICAgICAgICBjb25zdCBibG9ja1VwZGF0ZXIgPSBuZXcgQmxvY2tTaW1wbGVOZXRVcGRhdGVyKHRoaXMub3ApXG4gICAgICAgIHJldHVybiBibG9ja1VwZGF0ZXJcbiAgICB9XG5cbiAgICAvLyBDcmVhdGUgYSBuZXcgZnVsbCB1cGRhdGVyIGZyb20gdGhpcyBvYmplY3QuIFVzZWZ1bCBpZiBvbmUgb2YgdGhlIGRlcml2ZWQgY2xhc3NlcyBuZWVkcyB0byBpbXBsZW1lbnRcbiAgICB0b0Z1bGwoKTogU2ltcGxlTmV0VXBkYXRlciB7XG4gICAgICAgIGNvbnN0IGZ1bGxVcGRhdGVyID0gbmV3IFNpbXBsZU5ldFVwZGF0ZXIodGhpcy5vcClcbiAgICAgICAgcmV0dXJuIGZ1bGxVcGRhdGVyXG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgQmxvY2tTaW1wbGVOZXRVcGRhdGVyIGV4dGVuZHMgU2ltcGxlTmV0VXBkYXRlciB7XG4gICAgZWlnZW52YWx1ZXModjogQXJyYXkpOiBBcnJheSB7XG4gICAgICAgIHJldHVybiBuai5tdWx0aXBseShuai5wb3dlcih0aGlzLm9wLmRmKHYpLCAyKSwgMilcbiAgICB9XG59IiwiaW1wb3J0ICogYXMgZDMgZnJvbSAnZDMnXG5pbXBvcnQgKiBhcyBuaiBmcm9tIFwibnVtanNcIlxuaW1wb3J0ICogYXMgdHAgZnJvbSBcIi4vdHlwZXNcIlxuaW1wb3J0IHsgQXJyYXkgfSBmcm9tIFwiLi90eXBlc1wiXG5pbXBvcnQgeyBCYXNlVXBkYXRlcjJEIH0gZnJvbSBcIi4vQmFzZVVwZGF0ZXIyRFwiXG5cbmNvbnN0IGRlZmF1bHRFcnJvckZ1bmN0aW9uID0gdiA9PiB7XG4gICAgcmV0dXJuIG5qLmRvdChuai5hcnJheShbWzEsIDJdLCBbMiwgMV1dKSwgdilcbn1cbmNvbnN0IGRlZmF1bHREZkZ1bmN0aW9uID0gdiA9PiBuai5hcnJheShbWzEsIDJdLCBbMiwgMV1dKVxuY29uc3QgZGVmYXVsdFN0ZXAyTHI6IGQzLlNjYWxlTGluZWFyPG51bWJlciwgbnVtYmVyPiA9IGQzLnNjYWxlTGluZWFyKCkuZG9tYWluKFswLCAwLjhdKS5yYW5nZShbMC4wMDEsIDAuMjVdKVxuY29uc3QgZGVmYXVsdEVycm9yID0gZnYgPT4gbmouc3VidHJhY3QoZnYsIG5qLmFycmF5KFswLDBdKSlcbmNvbnN0IGRlZmF1bHRMb3NzID0gZXJyID0+IG5qLnN1bShuai5kaXZpZGUobmoucG93ZXIoZXJyLCAyKSwgMikpXG5cbmludGVyZmFjZSBVcGRhdGVyT3B0aW9ucyB7XG4gICAgZlxuICAgIGRmXG4gICAgZXJyb3JcbiAgICBsb3NzXG4gICAgcTogbnVtYmVyICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIDAgLT4gMSwgd2hlcmUgMCBpcyBTR0QgYW5kIDEgaXMgTkdELiAwLjUgaXMgc3FydCBOR0QuIFtzdGVwID0gLSBldGEgKiBIIF4gKC0xL3EpICogZ10gKEggPSAwIHdoZW4gcT0wKVxuICAgIGV0YTogbnVtYmVyICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBha2EgJ2xlYXJuaW5nIHJhdGUnXG4gICAgc3RlcDJscjogZDMuU2NhbGVMaW5lYXI8bnVtYmVyLCBudW1iZXI+XG59XG5cbmZ1bmN0aW9uIGdldE9ydGhNYXRyaXgoUykge1xuICAgIGNvbnN0IHRoZXRhID0gMC41ICogTWF0aC5hdGFuMihTLmdldCgwLDEpICsgUy5nZXQoMSwwKSwgUy5nZXQoMCwwKSAtIFMuZ2V0KDEsMSkpXG4gICAgY29uc3QgY29zID0gTWF0aC5jb3ModGhldGEpXG4gICAgY29uc3Qgc2luID0gTWF0aC5zaW4odGhldGEpXG4gICAgcmV0dXJuIG5qLmFycmF5KFtbY29zLCAtc2luXSwgW3NpbiwgY29zXV0pXG59XG5cbmludGVyZmFjZSBTVkRSZXN1bHRzIHsgVSwgZCwgViB9XG5cbmZ1bmN0aW9uIFNWRDJkKE0pOiBTVkRSZXN1bHRzIHtcbiAgICBjb25zdCBVID0gZ2V0T3J0aE1hdHJpeChuai5kb3QoTSwgTS5UKSlcbiAgICBsZXQgViA9IGdldE9ydGhNYXRyaXgobmouZG90KE0uVCwgTSkpXG4gICAgY29uc3QgcHJlUHJlRGlhZyA9IG5qLmRvdChNLCBWKVxuICAgIGNvbnN0IHByZURpYWcgPSBuai5kb3QoVS5ULCBuai5kb3QoTSwgVikpXG4gICAgbGV0IGQgPSBuai5hcnJheShbcHJlRGlhZy5nZXQoMCwwKSwgcHJlRGlhZy5nZXQoMSwxKV0pXG4gICAgLy9AdHMtaWdub3JlXG4gICAgY29uc3QgZFNpZ24gPSBkLnRvbGlzdCgpLm1hcCh4ID0+IHggPj0gMCA/IDEgOiAtMSlcbiAgICBWID0gbmouYXJyYXkoVi50b2xpc3QoKS5tYXAoKHJvdywgaSkgPT4ge1xuICAgICAgICByZXR1cm4gcm93Lm1hcCgoeCwgaikgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHggKiBkU2lnbltqXSBcbiAgICAgICAgfSlcbiAgICB9KSlcbiAgICBkID0gbmouYWJzKGQpXG4gICAgcmV0dXJuIHtVLCBkLCBWfVxufVxuXG5leHBvcnQgY2xhc3MgVXBkYXRlcjJEIGV4dGVuZHMgQmFzZVVwZGF0ZXIyRCB7XG4gICAgLy8gU2V0IERlZmF1bHQgT3B0aW9uc1xuICAgIG9wOiBVcGRhdGVyT3B0aW9ucyA9IHtcbiAgICAgICAgLy9AdHMtaWdub3JlXG4gICAgICAgIGY6IGRlZmF1bHRFcnJvckZ1bmN0aW9uLFxuICAgICAgICAvL0B0cy1pZ25vcmVcbiAgICAgICAgZGY6IGRlZmF1bHREZkZ1bmN0aW9uLFxuICAgICAgICBlcnJvcjogZGVmYXVsdEVycm9yLFxuICAgICAgICBsb3NzOiBkZWZhdWx0TG9zcyxcbiAgICAgICAgcTogMCxcbiAgICAgICAgZXRhOiAwLjEsXG4gICAgICAgIHN0ZXAybHI6IGRlZmF1bHRTdGVwMkxyLFxuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnM6IFBhcnRpYWw8VXBkYXRlck9wdGlvbnM+PXt9KSB7XG4gICAgICAgIHN1cGVyKClcbiAgICAgICAgdGhpcy51cGRhdGVPcHRpb25zKG9wdGlvbnMpXG4gICAgfVxuXG4gICAgZHYodjogQXJyYXkpIHtcbiAgICAgICAgY29uc3QgamFjID0gdGhpcy5vcC5kZih2KVxuICAgICAgICBjb25zdCBlcnIgPSB0aGlzLm9wLmVycm9yKHYpXG4gICAgICAgIGNvbnNvbGUubG9nKGBGb3VuZCBlcnJvcjogJHtlcnJ9YCk7XG4gICAgICAgIGNvbnN0IHtVLCBkLCBWfSA9IFNWRDJkKGphYylcblxuICAgICAgICBjb25zdCBkRGFtcCA9IG5qLm11bHRpcGx5KGQsIG5qLnBvd2VyKGQsIC0yICogdGhpcy5vcC5xKSlcblxuICAgICAgICBjb25zdCBEID0gbmouYXJyYXkoW1tkRGFtcC5nZXQoMCksIDBdLCBbMCwgZERhbXAuZ2V0KDEpXV0pXG4gICAgICAgIGNvbnN0IHByZUZhYyA9IG5qLmRvdChVLCBEKVxuICAgICAgICBjb25zdCBwb3N0RmFjID0gbmouZG90KFYsIGVycilcbiAgICAgICAgLy9AdHMtaWdub3JlXG4gICAgICAgIGNvbnN0IG91dCA9IG5qLmRvdChwcmVGYWMsIHBvc3RGYWMpXG5cbiAgICAgICAgcmV0dXJuIG91dFxuICAgIH1cblxuICAgIGxyKHY6IEFycmF5KSB7XG4gICAgICAgIGNvbnN0IGR2ID0gdGhpcy5kdih2KVxuICAgICAgICBjb25zdCBlcHMgPSAxZS0xMDtcbiAgICAgICAgLy9AdHMtaWdub3JlXG4gICAgICAgIGNvbnN0IGxyOiBBcnJheSA9IG5qLm11bHRpcGx5KGR2LCB0aGlzLmxyU2NhbGUpLmRpdmlkZShNYXRoLnNxcnQodGhpcy5sb3NzKHYpICsgZXBzKSkgLy8uZGl2aWRlKGFic0xvc3MgKyBlcHMpXG4gICAgICAgIHJldHVybiBsclxuICAgIH1cblxuICAgIC8vIENvbnZlcnQgdG8gYmxvY2sgZGlhZ29uYWwgdXBkYXRlciAvLyBOb3RoaW5nIGRpZmZlcmVudCByblxuICAgIHRvQmxvY2soKTogQmxvY2tVcGRhdGVyMkQge1xuICAgICAgICBjb25zdCBibG9ja1VwZGF0ZXIgPSBuZXcgQmxvY2tVcGRhdGVyMkQodGhpcy5vcClcbiAgICAgICAgcmV0dXJuIGJsb2NrVXBkYXRlclxuICAgIH1cblxuICAgIC8vIENyZWF0ZSBhIG5ldyBmdWxsIHVwZGF0ZXIgZnJvbSB0aGlzIG9iamVjdC4gVXNlZnVsIGlmIG9uZSBvZiB0aGUgZGVyaXZlZCBjbGFzc2VzIG5lZWRzIHRvIGltcGxlbWVudFxuICAgIHRvRnVsbCgpOiBVcGRhdGVyMkQge1xuICAgICAgICBjb25zdCBmdWxsVXBkYXRlciA9IG5ldyBVcGRhdGVyMkQodGhpcy5vcClcbiAgICAgICAgcmV0dXJuIGZ1bGxVcGRhdGVyXG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgQmxvY2tVcGRhdGVyMkQgZXh0ZW5kcyBVcGRhdGVyMkQge1xufSIsImltcG9ydCAqIGFzIGQzIGZyb20gJ2QzJ1xuaW1wb3J0IHsgVUlkIH0gZnJvbSAnLi91dGlsL1VJZCdcbmltcG9ydCB7IENvbnRvdXJQbG90IH0gZnJvbSAnLi92aXMvR2VuZXJhbENvbnRvdXJQbG90J1xuaW1wb3J0IHsgRDNTZWwsIGxpbnNwYWNlIH0gZnJvbSAnLi91dGlsL3hkMydcbmltcG9ydCB7IEdvbGZIb2xlMUQgfSBmcm9tICcuL3Zpcy9Hb2xmSG9sZTFEJ1xuaW1wb3J0IHsgR29sZkxvc3NlcyB9IGZyb20gJy4vdmlzL0dvbGZMb3NzZXMnXG5pbXBvcnQgeyBHb2xmWERpc3QgfSBmcm9tICcuL3Zpcy9Hb2xmWERpc3QnXG5pbXBvcnQgeyBHb2xmQmFsbCB9IGZyb20gJy4vdmlzL0dvbGZCYWxsJ1xuaW1wb3J0IHsgU2ltcGxlTmV0IH0gZnJvbSBcIi4vdmlzL1NpbXBsZU5ldFwiXG5pbXBvcnQgKiBhcyBSIGZyb20gJ3JhbWRhJ1xuaW1wb3J0IHsgU2ltcGxlRXZlbnRIYW5kbGVyIH0gZnJvbSAnLi91dGlsL1NpbXBsZUV2ZW50SGFuZGxlcidcbmltcG9ydCB7IE1hbnVhbFVwZGF0ZXIgfSBmcm9tICcuL3Zpcy9NYW51YWxVcGRhdGVyJ1xuaW1wb3J0IHsgbGFuZHNjYXBlcyB9IGZyb20gJy4vR29sZkxhbmRzY2FwZXMnXG5pbXBvcnQgeyBsYW5kc2NhcGVzMmQgfSBmcm9tICcuL0xhbmRzY2FwZXMyRCdcbmltcG9ydCB7IEFycmF5IH0gZnJvbSAnLi90eXBlcydcbmltcG9ydCB7IFF1YWRyYXRpY1Bsb3RzIH0gZnJvbSBcIi4vdmlzL1F1YWRyYXRpY1Bsb3RzXCJcbmltcG9ydCB7IExhbmRzY2FwZUxvc3MgfSBmcm9tIFwiLi9MYW5kc2NhcGVMb3NzXCJcbmltcG9ydCAqIGFzIG5qIGZyb20gXCJudW1qc1wiXG5cbmNvbnN0IHRvRml4ZWQgPSBSLmN1cnJ5KChuZGlnaXRzLCB4KSA9PiB4LnRvRml4ZWQobmRpZ2l0cykpXG5jb25zdCB0b1EgPSB0b0ZpeGVkKDEpXG5jb25zdCB0b0V0YSA9IHRvRml4ZWQoNClcblxuZnVuY3Rpb24gcGxvdEVsbGlwdGljYWwoKSB7XG4gICAgY29uc3QgdmlzMCA9IGQzLnNlbGVjdCgnI3ZpczAnKVxuICAgIGNvbnN0IHNlbHMgPSB7XG4gICAgICAgIHF1aXZlclBsb3Q6IHZpczAuc2VsZWN0KCcjY2hhcnQnKSxcbiAgICAgICAgcUlkOiB2aXMwLnNlbGVjdCgnI3EtdmFsJyksXG4gICAgICAgIGV0YUlkOiB2aXMwLnNlbGVjdCgnI2V0YS12YWwnKSxcbiAgICAgICAgcVNsaWRlcjogdmlzMC5zZWxlY3QoJyNxLXNsaWRlcicpLFxuICAgICAgICBldGFTbGlkZXI6IHZpczAuc2VsZWN0KCcjZXRhLXNsaWRlcicpLFxuICAgICAgICBoZXNzVHlwZTogdmlzMC5zZWxlY3QoJyNoZXNzLXR5cGUnKSxcbiAgICB9XG4gICAgY29uc3QgZXZlbnRIYW5kbGVyID0gbmV3IFNpbXBsZUV2ZW50SGFuZGxlcig8RWxlbWVudD52aXMwLm5vZGUoKSlcblxuICAgIGNvbnN0IHZpenMgPSB7XG4gICAgICAgIGdyYXBoOiBDb250b3VyUGxvdC5mcm9tTGFuZHNjYXBlKHNlbHMucXVpdmVyUGxvdCwgZXZlbnRIYW5kbGVyLCBsYW5kc2NhcGVzMmQuRWxsaXB0aWNhbCksXG4gICAgfVxuXG4gICAgY29uc3QgZGVmYXVsdHMgPSB7XG4gICAgICAgIC8vIE5vdGUgdG8gYWxzbyBjaGFuZ2UgdGhlIGRlZmF1bHQgdmFsdWUgaW4gdGhlIGh0bWwgZmlsZSFcbiAgICAgICAgcTogMCxcbiAgICAgICAgZXRhOiAwLjA1XG4gICAgfVxuXG4gICAgY29uc3Qgc2NhbGVzID0ge1xuICAgICAgICBxOiBkMy5zY2FsZUxpbmVhcigpLnJhbmdlKFswLCAxMF0pLmRvbWFpbihbMCwgMV0pLFxuICAgICAgICBldGE6IGQzLnNjYWxlTGluZWFyKCkucmFuZ2UoWzEsIDEwMDBdKS5kb21haW4oW01hdGgucG93KDEwLCAtNSksIDAuNl0pXG4gICAgfVxuXG4gICAgLy8gSW5pdGlhbGl6ZSBncmFwaCBwYXJhbWV0ZXJzIHRvIG1hdGNoIHRoZSBkZWZhdWx0c1xuICAgIHZpenMuZ3JhcGgucShkZWZhdWx0cy5xKVxuICAgIHZpenMuZ3JhcGguZXRhKGRlZmF1bHRzLmV0YSlcbiAgICBzZWxzLnFTbGlkZXIucHJvcGVydHkoJ3ZhbHVlJywgc2NhbGVzLnEoZGVmYXVsdHMucSkpXG4gICAgc2Vscy5ldGFTbGlkZXIucHJvcGVydHkoJ3ZhbHVlJywgc2NhbGVzLmV0YShkZWZhdWx0cy5ldGEpKVxuXG4gICAgc2Vscy5xSWQudGV4dCh0b1EoZGVmYXVsdHMucSkpXG4gICAgc2Vscy5ldGFJZC50ZXh0KHRvRXRhKGRlZmF1bHRzLmV0YSkpXG5cbiAgICBzZWxzLnFTbGlkZXIub24oJ2lucHV0JywgZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zdCBtZSA9IGQzLnNlbGVjdCh0aGlzKVxuICAgICAgICBjb25zdCB2ID0gc2NhbGVzLnEuaW52ZXJ0KCttZS5wcm9wZXJ0eSgndmFsdWUnKSk7XG4gICAgICAgIHZpenMuZ3JhcGgucSh2KTtcbiAgICAgICAgc2Vscy5xSWQudGV4dChgJHt0b1Eodil9YClcbiAgICB9KVxuXG4gICAgc2Vscy5ldGFTbGlkZXIub24oJ2lucHV0JywgZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zdCBtZSA9IGQzLnNlbGVjdCh0aGlzKVxuICAgICAgICBjb25zdCB2ID0gc2NhbGVzLmV0YS5pbnZlcnQobWUucHJvcGVydHkoJ3ZhbHVlJykpO1xuICAgICAgICB2aXpzLmdyYXBoLmV0YSh2KVxuICAgICAgICBzZWxzLmV0YUlkLnRleHQoYCR7dG9FdGEodil9YClcbiAgICB9KVxuXG4gICAgc2Vscy5oZXNzVHlwZS5vbignaW5wdXQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnN0IHNlbGYgPSBkMy5zZWxlY3QodGhpcylcbiAgICAgICAgY29uc3QgdiA9IHNlbGYucHJvcGVydHkoJ3ZhbHVlJylcbiAgICAgICAgdml6cy5ncmFwaC5zZXRVcGRhdGVyKHYpXG4gICAgfSlcbn1cblxuZnVuY3Rpb24gcGxvdEJ1bXB5TG9zczJEKCkge1xuICAgIGNvbnN0IHZpcyA9IGQzLnNlbGVjdChcIiN2aXMtMmQtbG9zc1wiKVxuICAgIGNvbnN0IGV2ZW50SGFuZGxlciA9IG5ldyBTaW1wbGVFdmVudEhhbmRsZXIoPEVsZW1lbnQ+dmlzLm5vZGUoKSlcbiAgICBjb25zdCBzZWxzID0ge1xuICAgICAgICBwbG90OiB2aXMuc2VsZWN0KFwiI2xvc3MtMmRcIiksXG4gICAgICAgIHFJZDogdmlzLnNlbGVjdCgnI3EtdmFsJyksXG4gICAgICAgIGV0YUlkOiB2aXMuc2VsZWN0KCcjZXRhLXZhbCcpLFxuICAgICAgICBxU2xpZGVyOiB2aXMuc2VsZWN0KCcjcS1zbGlkZXInKSxcbiAgICAgICAgZXRhU2xpZGVyOiB2aXMuc2VsZWN0KCcjZXRhLXNsaWRlcicpLFxuICAgICAgICBoZXNzVHlwZTogdmlzLnNlbGVjdCgnI2hlc3MtdHlwZScpLFxuICAgIH1cblxuICAgIGNvbnN0IHZpenMgPSB7XG4gICAgICAgIHBsb3Q6IENvbnRvdXJQbG90LmZyb21MYW5kc2NhcGUoc2Vscy5wbG90LCBldmVudEhhbmRsZXIsIGxhbmRzY2FwZXMyZC5MYW5kc2NhcGUxKSxcbiAgICB9XG5cbiAgICBjb25zdCBkZWZhdWx0cyA9IHtcbiAgICAgICAgLy8gTm90ZSB0byBhbHNvIGNoYW5nZSB0aGUgZGVmYXVsdCB2YWx1ZSBpbiB0aGUgaHRtbCBmaWxlIVxuICAgICAgICBxOiAwLFxuICAgICAgICBldGE6IDAuMDVcbiAgICB9XG5cbiAgICBjb25zdCBzY2FsZXMgPSB7XG4gICAgICAgIHE6IGQzLnNjYWxlTGluZWFyKCkucmFuZ2UoWzAsIDEwXSkuZG9tYWluKFswLCAxXSksXG4gICAgICAgIGV0YTogZDMuc2NhbGVMaW5lYXIoKS5yYW5nZShbMSwgMTAwMF0pLmRvbWFpbihbTWF0aC5wb3coMTAsIC04KSwgMC4wMDRdKVxuICAgIH1cblxuICAgIC8vIEluaXRpYWxpemUgZ3JhcGggcGFyYW1ldGVycyB0byBtYXRjaCB0aGUgZGVmYXVsdHNcbiAgICB2aXpzLnBsb3QucShkZWZhdWx0cy5xKVxuICAgIHZpenMucGxvdC5ldGEoZGVmYXVsdHMuZXRhKVxuICAgIHNlbHMucVNsaWRlci5wcm9wZXJ0eSgndmFsdWUnLCBzY2FsZXMucShkZWZhdWx0cy5xKSlcbiAgICBzZWxzLmV0YVNsaWRlci5wcm9wZXJ0eSgndmFsdWUnLCBzY2FsZXMuZXRhKGRlZmF1bHRzLmV0YSkpXG5cbiAgICBzZWxzLnFJZC50ZXh0KHRvUShkZWZhdWx0cy5xKSlcbiAgICBzZWxzLmV0YUlkLnRleHQodG9FdGEoZGVmYXVsdHMuZXRhKSlcblxuICAgIHNlbHMucVNsaWRlci5vbignaW5wdXQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnN0IG1lID0gZDMuc2VsZWN0KHRoaXMpXG4gICAgICAgIGNvbnN0IHYgPSBzY2FsZXMucS5pbnZlcnQoK21lLnByb3BlcnR5KCd2YWx1ZScpKTtcbiAgICAgICAgdml6cy5wbG90LnEodik7XG4gICAgICAgIHNlbHMucUlkLnRleHQoYCR7dG9RKHYpfWApXG4gICAgfSlcblxuICAgIHNlbHMuZXRhU2xpZGVyLm9uKCdpbnB1dCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc3QgbWUgPSBkMy5zZWxlY3QodGhpcylcbiAgICAgICAgY29uc3QgdiA9IHNjYWxlcy5ldGEuaW52ZXJ0KG1lLnByb3BlcnR5KCd2YWx1ZScpKTtcbiAgICAgICAgdml6cy5wbG90LmV0YSh2KVxuICAgICAgICBzZWxzLmV0YUlkLnRleHQoYCR7dG9FdGEodil9YClcbiAgICB9KVxuXG4gICAgc2Vscy5oZXNzVHlwZS5vbignaW5wdXQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnN0IHNlbGYgPSBkMy5zZWxlY3QodGhpcylcbiAgICAgICAgY29uc3QgdiA9IHNlbGYucHJvcGVydHkoJ3ZhbHVlJylcbiAgICAgICAgdml6cy5wbG90LnNldFVwZGF0ZXIodilcbiAgICB9KVxufVxuXG5mdW5jdGlvbiBwbG90UXVhZHJhdGljRnVuY3MoKSB7XG4gICAgY29uc3QgdmlzID0gZDMuc2VsZWN0KFwiI3Zpcy1xdWFkXCIpXG4gICAgY29uc3QgZXZlbnRIYW5kbGVyID0gbmV3IFNpbXBsZUV2ZW50SGFuZGxlcig8RWxlbWVudD52aXMubm9kZSgpKVxuXG4gICAgY29uc3Qgc2VscyA9IHtcbiAgICAgICAgcXVhZFBsb3Q6IHZpcy5zZWxlY3QoXCIjcXVhZC1wbG90XCIpXG4gICAgfVxuXG4gICAgY29uc3Qgdml6cyA9IHtcbiAgICAgICAgcXVhZFBsb3Q6IG5ldyBRdWFkcmF0aWNQbG90cyhzZWxzLnF1YWRQbG90LCBldmVudEhhbmRsZXIpXG4gICAgfVxuXG4gICAgdml6cy5xdWFkUGxvdC5kYXRhKFsxIC8gMS40LCAxLCAxLjRdKVxufVxuXG5mdW5jdGlvbiBwbG90UXVpdmVyR3JhcGgoKSB7XG4gICAgY29uc3QgdmlzMSA9IGQzLnNlbGVjdCgnI3ZpczEnKVxuICAgIGNvbnN0IHNlbHMgPSB7XG4gICAgICAgIHF1aXZlclBsb3Q6IHZpczEuc2VsZWN0KCcjY2hhcnQnKSxcbiAgICAgICAgcUlkOiB2aXMxLnNlbGVjdCgnI3EtdmFsJyksXG4gICAgICAgIGV0YUlkOiB2aXMxLnNlbGVjdCgnI2V0YS12YWwnKSxcbiAgICAgICAgcVNsaWRlcjogdmlzMS5zZWxlY3QoJyNxLXNsaWRlcicpLFxuICAgICAgICBldGFTbGlkZXI6IHZpczEuc2VsZWN0KCcjZXRhLXNsaWRlcicpLFxuICAgICAgICBoZXNzVHlwZTogdmlzMS5zZWxlY3QoJyNoZXNzLXR5cGUnKSxcbiAgICAgICAgc2ltcGxlTmV0OiB2aXMxLnNlbGVjdChcIiNzaW1wbGUtbmV0LWNvbnRhaW5lclwiKSxcbiAgICB9XG4gICAgY29uc3QgZXZlbnRIYW5kbGVyID0gbmV3IFNpbXBsZUV2ZW50SGFuZGxlcig8RWxlbWVudD52aXMxLm5vZGUoKSlcblxuICAgIGNvbnN0IHZpenMgPSB7XG4gICAgICAgIGdyYXBoOiBDb250b3VyUGxvdC5mcm9tTGFuZHNjYXBlKHNlbHMucXVpdmVyUGxvdCwgZXZlbnRIYW5kbGVyLCBsYW5kc2NhcGVzMmQuU2ltcGxlTmV0MkQpLFxuICAgICAgICAvLyBncmFwaDogQ29udG91clBsb3QuZnJvbUxhbmRzY2FwZShzZWxzLnF1aXZlclBsb3QsIGV2ZW50SGFuZGxlciwgbGFuZHNjYXBlczJkLkVsbGlwdGljYWwpLCAvLyBCUk9LRU4gV2h5P1xuICAgICAgICBzaW1wbGVOZXQ6IG5ldyBTaW1wbGVOZXQoc2Vscy5zaW1wbGVOZXQsIGV2ZW50SGFuZGxlcilcbiAgICB9XG5cbiAgICBjb25zdCBkZWZhdWx0cyA9IHtcbiAgICAgICAgLy8gTm90ZSB0byBhbHNvIGNoYW5nZSB0aGUgZGVmYXVsdCB2YWx1ZSBpbiB0aGUgaHRtbCBmaWxlIVxuICAgICAgICBxOiAwLFxuICAgICAgICBldGE6IDAuMDVcbiAgICB9XG5cbiAgICBjb25zdCBzY2FsZXMgPSB7XG4gICAgICAgIHE6IGQzLnNjYWxlTGluZWFyKCkucmFuZ2UoWzAsIDEwXSkuZG9tYWluKFswLCAxXSksXG4gICAgICAgIGV0YTogZDMuc2NhbGVMaW5lYXIoKS5yYW5nZShbMSwgMTAwMF0pLmRvbWFpbihbTWF0aC5wb3coMTAsIC01KSwgMC42XSlcbiAgICB9XG5cbiAgICAvLyBBZGQgY2VudGVyIGxpbmVcbiAgICBjb25zdCB4cmFuZ2UgPSBsaW5zcGFjZSgwLjYsIDEuNiwgdml6cy5ncmFwaC5vcHRpb25zLm0pXG4gICAgY29uc3QgZXBzID0gMC4wMDAxXG4gICAgY29uc3QgZml0TGluZSA9IHggPT4gMSAvICh4ICsgZXBzKTtcbiAgICBjb25zdCBjZW50ZXJDb250b3VyID0gZDMubGluZSgpXG4gICAgICAgIC54KGQgPT4gdml6cy5ncmFwaC5zY2FsZXMueC5jbGFtcCh0cnVlKShkWzBdKSlcbiAgICAgICAgLnkoZCA9PiB2aXpzLmdyYXBoLnNjYWxlcy55LmNsYW1wKHRydWUpKGZpdExpbmUoZFswXSkpKVxuXG4gICAgY29uc3QgbWFpbkZpdCA9IHZpenMuZ3JhcGguYmFzZVxuICAgICAgICAuYXBwZW5kKFwicGF0aFwiKVxuICAgICAgICAuY2xhc3NlZChcIm1haW4tZml0XCIsIHRydWUpXG4gICAgICAgIC8vIGkgZG9lc24ndCBtYXR0ZXIsIG5lZWQgZmlsbGVyIGZvciBsaW5lIHRvIHdvcmtcbiAgICAgICAgLmF0dHIoXCJkXCIsIGNlbnRlckNvbnRvdXIoeHJhbmdlLm1hcCgoeCwgaSkgPT4gW3gsIGldKSkpXG5cbiAgICAvLyBJbml0aWFsaXplIGdyYXBoIHBhcmFtZXRlcnMgdG8gbWF0Y2ggdGhlIGRlZmF1bHRzXG4gICAgdml6cy5ncmFwaC5xKGRlZmF1bHRzLnEpXG4gICAgdml6cy5ncmFwaC5ldGEoZGVmYXVsdHMuZXRhKVxuICAgIHNlbHMucVNsaWRlci5wcm9wZXJ0eSgndmFsdWUnLCBzY2FsZXMucShkZWZhdWx0cy5xKSlcbiAgICBzZWxzLmV0YVNsaWRlci5wcm9wZXJ0eSgndmFsdWUnLCBzY2FsZXMuZXRhKGRlZmF1bHRzLmV0YSkpXG5cbiAgICBzZWxzLnFJZC50ZXh0KHRvUShkZWZhdWx0cy5xKSlcbiAgICBzZWxzLmV0YUlkLnRleHQodG9FdGEoZGVmYXVsdHMuZXRhKSlcblxuICAgIHNlbHMucVNsaWRlci5vbignaW5wdXQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnN0IG1lID0gZDMuc2VsZWN0KHRoaXMpXG4gICAgICAgIGNvbnN0IHYgPSBzY2FsZXMucS5pbnZlcnQoK21lLnByb3BlcnR5KCd2YWx1ZScpKTtcbiAgICAgICAgdml6cy5ncmFwaC5xKHYpO1xuICAgICAgICBzZWxzLnFJZC50ZXh0KGAke3RvUSh2KX1gKVxuICAgIH0pXG5cbiAgICBzZWxzLmV0YVNsaWRlci5vbignaW5wdXQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnN0IG1lID0gZDMuc2VsZWN0KHRoaXMpXG4gICAgICAgIGNvbnN0IHYgPSBzY2FsZXMuZXRhLmludmVydChtZS5wcm9wZXJ0eSgndmFsdWUnKSk7XG4gICAgICAgIHZpenMuZ3JhcGguZXRhKHYpXG4gICAgICAgIHNlbHMuZXRhSWQudGV4dChgJHt0b0V0YSh2KX1gKVxuICAgIH0pXG5cbiAgICBzZWxzLmhlc3NUeXBlLm9uKCdpbnB1dCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc3Qgc2VsZiA9IGQzLnNlbGVjdCh0aGlzKVxuICAgICAgICBjb25zdCB2ID0gc2VsZi5wcm9wZXJ0eSgndmFsdWUnKVxuICAgICAgICB2aXpzLmdyYXBoLnNldFVwZGF0ZXIodilcbiAgICB9KVxuXG4gICAgLy8gQ2F0Y2ggZXZlbnQgb2Ygc3RlcFxuICAgIGV2ZW50SGFuZGxlci5iaW5kKENvbnRvdXJQbG90LmV2ZW50cy5zdGVwQWRkZWQsICh2OiBBcnJheSkgPT4ge1xuICAgICAgICB2aXpzLnNpbXBsZU5ldC5zZXRTdGF0ZSh2KVxuICAgIH0pXG59XG5cbmZ1bmN0aW9uIHBsb3RHb2xmSG9sZTNCYWxsKCkge1xuICAgIGNvbnN0IHZpczIgPSBkMy5zZWxlY3QoXCIjdmlzMlwiKTtcbiAgICBjb25zdCBzZWxzID0ge1xuICAgICAgICBjaGFydDogdmlzMi5zZWxlY3QoJyNjaGFydCcpLFxuICAgICAgICBjaGFydFhEaXN0OiB2aXMyLnNlbGVjdCgnI2NoYXJ0LXhkaXN0JyksXG4gICAgICAgIGNoYXJ0TG9zc2VzOiB2aXMyLnNlbGVjdCgnI2NoYXJ0LWxvc3NlcycpLFxuICAgICAgICBsYW5kc2NhcGVTZWxlY3RvcjogdmlzMi5zZWxlY3QoJy5sYW5kc2NhcGUtc2VsZWN0JyksXG4gICAgfVxuXG4gICAgY29uc3QgZXZlbnRIYW5kbGVyID0gbmV3IFNpbXBsZUV2ZW50SGFuZGxlcig8RWxlbWVudD52aXMyLm5vZGUoKSlcbiAgICBjb25zdCB2aXpzID0ge1xuICAgICAgICBncmFwaDogbmV3IEdvbGZIb2xlMUQoc2Vscy5jaGFydCwgZXZlbnRIYW5kbGVyLCB7fSwgVUlkLnVpZCgpKSxcbiAgICAgICAgY2hhcnRYRGlzdDogbmV3IEdvbGZYRGlzdChzZWxzLmNoYXJ0WERpc3QsIGV2ZW50SGFuZGxlciksXG4gICAgICAgIGNoYXJ0TG9zc2VzOiBuZXcgR29sZkxvc3NlcyhzZWxzLmNoYXJ0TG9zc2VzLCBldmVudEhhbmRsZXIpLFxuICAgIH1cblxuICAgIGludGVyZmFjZSBHb2xmRGVmYXVsdHMge1xuICAgICAgICBsYW5kc2NhcGU6IHN0cmluZ1xuICAgICAgICBxczogbnVtYmVyW11cbiAgICAgICAgY2xhc3NOYW1lczogc3RyaW5nW11cbiAgICAgICAgZXRhcz86IG51bWJlcltdXG4gICAgfVxuXG4gICAgLy8gQ29ycmVzcG9uZHMgdG8gcXMgPSBbMCwgMC41LCAxXVxuICAgIGNvbnN0IGRlZmF1bHRFdGEgPSB7XG4gICAgICAgIHNlYWd1bGw6IFswLjAwNSwgMC4wMDUsIDAuMDA1XSxcbiAgICAgICAgaG9sZTogWzAuMDA1LCAwLjAwNSwgMC4wMDVdLFxuICAgICAgICBzdGVwczogWzAuMDA1LCAwLjAwNSwgMC4wMDVdLFxuICAgICAgICBib3dsOiBbMC4wMywgMC4wMywgMC4wM10sXG4gICAgICAgIGRlZXBfbmV0OiBbMC4wMSwgMC4wMSwgMC4wMV0sXG4gICAgfVxuXG4gICAgY29uc3QgZGVmYXVsdHM6IEdvbGZEZWZhdWx0cyA9IHtcbiAgICAgICAgbGFuZHNjYXBlOiBcInNlYWd1bGxcIixcbiAgICAgICAgcXM6IFswLCAwLjUsIDFdLFxuICAgICAgICBjbGFzc05hbWVzOiBbJ2dvbGYtYmFsbC1zZ2QnLCAnZ29sZi1iYWxsLXNuZ2QnLCAnZ29sZi1iYWxsLW5nZCddLCAvLyBEb24ndCBjaGFuZ2UgdGhlc2UgdW5sZXNzIHlvdSB3YW50IHRvIHBsYXkgd2l0aCBDU1MhIVxuICAgIH1cbiAgICBkZWZhdWx0cy5ldGFzID0gZGVmYXVsdEV0YVtkZWZhdWx0cy5sYW5kc2NhcGVdXG5cbiAgICBjb25zdCBkZWZhdWx0TGFuZHNjYXBlID0gbGFuZHNjYXBlc1tkZWZhdWx0cy5sYW5kc2NhcGVdXG5cbiAgICAvL0B0cy1pZ25vcmVcbiAgICBjb25zdCBkZWZhdWx0QmFsbHMgPSBkMy56aXAoZGVmYXVsdHMucXMsIGRlZmF1bHRzLmV0YXMsIGRlZmF1bHRzLmNsYXNzTmFtZXMpLm1hcCgoeCkgPT4gbmV3IEdvbGZCYWxsKG5ldyBNYW51YWxVcGRhdGVyKGRlZmF1bHRMYW5kc2NhcGUuZiwgZGVmYXVsdExhbmRzY2FwZS5kZiwgeFswXSwgeFsxXSksIHhbMl0pKVxuXG4gICAgdml6cy5ncmFwaC5kYXRhKGRlZmF1bHRCYWxscylcblxuICAgIC8vIEF0dGFjaCBnb2xmYmFsbCBpbmZvIHRvIGxvc3MgdHJhY2tlclxuICAgIGV2ZW50SGFuZGxlci5iaW5kKCdsb3NzLWNsaWNrJywgKGUpID0+IHtcbiAgICAgICAgdml6cy5jaGFydFhEaXN0LmNsZWFyUGF0aHMoKVxuICAgICAgICB2aXpzLmNoYXJ0TG9zc2VzLmNsZWFyUGF0aHMoKVxuICAgIH0pXG5cbiAgICAvLyBDb25maWd1cmUgaHRtbCBwYWdlIHRvIHdvcmsgd2l0aCBkZWZhdWx0c1xuICAgIHNlbHMubGFuZHNjYXBlU2VsZWN0b3IucHJvcGVydHkoJ3ZhbHVlJywgZGVmYXVsdHMubGFuZHNjYXBlKVxuICAgIHZpenMuZ3JhcGgubGFuZHNjYXBlKGxhbmRzY2FwZXNbZGVmYXVsdHMubGFuZHNjYXBlXSlcblxuICAgIGxldCBydW5uaW5nU3RyZWFtcyA9IFtdXG5cbiAgICAvLyBBc3NpZ24gc3RyZWFtc1xuICAgIGNvbnN0IGFzc2lnblN0cmVhbXMgPSAoZ3JhcGg6IEdvbGZIb2xlMUQsIGN1cnJlbnRTdHJlYW1zID0gW10pID0+IHtcbiAgICAgICAgY29uc3Qgc3RyZWFtcyA9IGdyYXBoLmRhdGEoKS5tYXAoYiA9PiBiLnN0cmVhbSlcblxuICAgICAgICBjb25zdCBwbG90dGVyID0ge1xuICAgICAgICAgICAgbmV4dDogZCA9PiB7XG4gICAgICAgICAgICAgICAgdml6cy5jaGFydFhEaXN0LnBsb3RQYXRoKGQsIGdyYXBoLnNjYWxlcy5iYXNlMm1hdGgueC5pbnZlcnQpXG4gICAgICAgICAgICAgICAgdml6cy5jaGFydExvc3Nlcy5wbG90UGF0aChkLCBncmFwaC5zY2FsZXMuYmFzZTJsb3NzKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY3VycmVudFN0cmVhbXMuZm9yRWFjaChzID0+IHMudW5zdWJzY3JpYmUoKSlcblxuICAgICAgICBjb25zdCBhY3RpdmF0ZWRTdHJlYW1zID0gc3RyZWFtcy5tYXAocyA9PiB7XG4gICAgICAgICAgICByZXR1cm4gcy5zdWJzY3JpYmUocGxvdHRlcilcbiAgICAgICAgfSlcbiAgICAgICAgcmV0dXJuIGFjdGl2YXRlZFN0cmVhbXNcbiAgICB9XG5cbiAgICAvLyBHYXRoZXIgaW50ZXJhY3Rpdml0eSBmb3IgdGhlIGdvbGYgYmFsbCBwbG90XG4gICAgc2Vscy5sYW5kc2NhcGVTZWxlY3Rvci5vbignaW5wdXQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnN0IHNlbGYgPSBkMy5zZWxlY3QodGhpcylcbiAgICAgICAgY29uc3QgdiA9IHNlbGYucHJvcGVydHkoJ3ZhbHVlJylcbiAgICAgICAgdml6cy5jaGFydExvc3Nlcy5yZXNldFhyYW5nZV8oKVxuICAgICAgICB2aXpzLmNoYXJ0WERpc3QucmVzZXRYcmFuZ2VfKClcbiAgICAgICAgdml6cy5ncmFwaC5sYW5kc2NhcGUobGFuZHNjYXBlc1t2XSlcbiAgICAgICAgdml6cy5ncmFwaC5kYXRhRnJvbUJhc2Uodml6cy5ncmFwaC5kYXRhVG9CYXNlXygpKVxuICAgICAgICBydW5uaW5nU3RyZWFtcyA9IGFzc2lnblN0cmVhbXModml6cy5ncmFwaCwgcnVubmluZ1N0cmVhbXMpXG4gICAgfSlcbiAgICBydW5uaW5nU3RyZWFtcyA9IGFzc2lnblN0cmVhbXModml6cy5ncmFwaCwgcnVubmluZ1N0cmVhbXMpXG59XG5cbmZ1bmN0aW9uIHBsb3RHb2xmSG9sZVNsaWRlcigpIHtcbiAgICBjb25zdCB2aXMzID0gZDMuc2VsZWN0KFwiI3ZpczNcIik7XG5cbiAgICBjb25zdCBzZWxzID0ge1xuICAgICAgICBjaGFydDogdmlzMy5zZWxlY3QoJyNjaGFydCcpLFxuICAgICAgICBjaGFydExvc3NlczogdmlzMy5zZWxlY3QoJyNjaGFydC1sb3NzZXMnKSxcbiAgICAgICAgY2hhcnRYRGlzdDogdmlzMy5zZWxlY3QoJyNjaGFydC14ZGlzdCcpLFxuICAgICAgICBxSWQ6IHZpczMuc2VsZWN0KCcjcS12YWwnKSxcbiAgICAgICAgZXRhSWQ6IHZpczMuc2VsZWN0KCcjZXRhLXZhbCcpLFxuICAgICAgICBxU2xpZGVyOiB2aXMzLnNlbGVjdCgnI3Etc2xpZGVyJyksXG4gICAgICAgIGV0YVNsaWRlcjogdmlzMy5zZWxlY3QoJyNldGEtc2xpZGVyJyksXG4gICAgICAgIGxhbmRzY2FwZVNlbGVjdG9yOiB2aXMzLnNlbGVjdCgnLmxhbmRzY2FwZS1zZWxlY3QnKVxuICAgIH1cblxuICAgIGNvbnN0IGV2ZW50SGFuZGxlciA9IG5ldyBTaW1wbGVFdmVudEhhbmRsZXIoPEVsZW1lbnQ+dmlzMy5ub2RlKCkpXG5cbiAgICBjb25zdCB2aXpzID0ge1xuICAgICAgICBncmFwaDogbmV3IEdvbGZIb2xlMUQoc2Vscy5jaGFydCwgZXZlbnRIYW5kbGVyLCB7IG1heEl0ZXI6IDEuNWUzIH0sIFVJZC51aWQoKSksXG4gICAgICAgIGNoYXJ0TG9zc2VzOiBuZXcgR29sZkxvc3NlcyhzZWxzLmNoYXJ0TG9zc2VzLCBldmVudEhhbmRsZXIpLFxuICAgICAgICBjaGFydFhEaXN0OiBuZXcgR29sZlhEaXN0KHNlbHMuY2hhcnRYRGlzdCwgZXZlbnRIYW5kbGVyKVxuICAgIH1cblxuICAgIGNvbnN0IGRlZmF1bHRzID0ge1xuICAgICAgICAvLyBOb3RlIHRvIGFsc28gY2hhbmdlIHRoZSBkZWZhdWx0IHZhbHVlIGluIHRoZSBodG1sIGZpbGUhXG4gICAgICAgIGxhbmRzY2FwZTogXCJzZWFndWxsXCIsXG4gICAgICAgIHE6IDAuNSxcbiAgICAgICAgZXRhOiAwLjAxXG4gICAgfVxuXG4gICAgLy8gQXR0YWNoIGdvbGZiYWxsIGluZm8gdG8gbG9zcyB0cmFja2VyXG4gICAgZXZlbnRIYW5kbGVyLmJpbmQoJ2xvc3MtY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICB2aXpzLmNoYXJ0WERpc3QuY2xlYXJQYXRocygpXG4gICAgICAgIHZpenMuY2hhcnRMb3NzZXMuY2xlYXJQYXRocygpXG4gICAgfSlcblxuICAgIC8vIFB1dCBkYXRhIGludG8gdml6XG4gICAgdml6cy5ncmFwaC5kYXRhKFtuZXcgR29sZkJhbGwobmV3IE1hbnVhbFVwZGF0ZXIobGFuZHNjYXBlcy5ob2xlLmYsIGxhbmRzY2FwZXMuaG9sZS5kZiwgZGVmYXVsdHMucSwgZGVmYXVsdHMuZXRhKSwgXCJnb2xmLWJhbGxcIildKVxuXG4gICAgLy8gY29uc3QgZXRhUmFuZ2UgPSBbLTUsIDJdLm1hcCh4ID0+IE1hdGgucG93KDEwLCB4KSlcbiAgICBjb25zdCBldGFSYW5nZSA9IFstMywgMF0ubWFwKHggPT4gTWF0aC5wb3coMTAsIHgpKVxuICAgIGNvbnN0IHNjYWxlcyA9IHtcbiAgICAgICAgcTogZDMuc2NhbGVMaW5lYXIoKS5yYW5nZShbMCwgMTBdKS5kb21haW4oWzAsIDFdKSxcbiAgICAgICAgZXRhOiBkMy5zY2FsZUxvZygpLnJhbmdlKFsxLCAxMDAwXSkuZG9tYWluKGV0YVJhbmdlKS5iYXNlKDEwKVxuICAgIH1cblxuICAgIC8vIEluaXRpYWxpemUgZ3JhcGggcGFyYW1ldGVycyB0byBtYXRjaCB0aGUgZGVmYXVsdHNcbiAgICB2aXpzLmdyYXBoLmxhbmRzY2FwZShsYW5kc2NhcGVzW2RlZmF1bHRzLmxhbmRzY2FwZV0pXG4gICAgc2Vscy5sYW5kc2NhcGVTZWxlY3Rvci5wcm9wZXJ0eSgndmFsdWUnLCBkZWZhdWx0cy5sYW5kc2NhcGUpXG5cbiAgICBzZWxzLnFTbGlkZXIucHJvcGVydHkoJ3ZhbHVlJywgc2NhbGVzLnEoZGVmYXVsdHMucSkpXG4gICAgc2Vscy5ldGFTbGlkZXIucHJvcGVydHkoJ3ZhbHVlJywgc2NhbGVzLmV0YShkZWZhdWx0cy5ldGEpKVxuICAgIHNlbHMucUlkLnRleHQodG9RKGRlZmF1bHRzLnEpKVxuICAgIHNlbHMuZXRhSWQudGV4dCh0b0V0YShkZWZhdWx0cy5ldGEpKVxuXG4gICAgLy8gQXNzaWduIHN0cmVhbXNcbiAgICBsZXQgcnVubmluZ1N0cmVhbXMgPSBbXVxuICAgIGNvbnN0IGFzc2lnblN0cmVhbXMgPSAoZ3JhcGg6IEdvbGZIb2xlMUQsIGN1cnJlbnRTdHJlYW1zID0gW10pID0+IHtcbiAgICAgICAgY29uc3Qgc3RyZWFtcyA9IGdyYXBoLmRhdGEoKS5tYXAoYiA9PiBiLnN0cmVhbSlcblxuICAgICAgICBjb25zdCBwbG90dGVyID0ge1xuICAgICAgICAgICAgbmV4dDogZCA9PiB7XG4gICAgICAgICAgICAgICAgdml6cy5jaGFydFhEaXN0LnBsb3RQYXRoKGQsIGdyYXBoLnNjYWxlcy5iYXNlMm1hdGgueC5pbnZlcnQpXG4gICAgICAgICAgICAgICAgdml6cy5jaGFydExvc3Nlcy5wbG90UGF0aChkLCBncmFwaC5zY2FsZXMuYmFzZTJsb3NzKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY3VycmVudFN0cmVhbXMuZm9yRWFjaChzID0+IHMudW5zdWJzY3JpYmUoKSlcblxuICAgICAgICBjb25zdCBhY3RpdmF0ZWRTdHJlYW1zID0gc3RyZWFtcy5tYXAocyA9PiB7XG4gICAgICAgICAgICByZXR1cm4gcy5zdWJzY3JpYmUocGxvdHRlcilcbiAgICAgICAgfSlcblxuICAgICAgICByZXR1cm4gYWN0aXZhdGVkU3RyZWFtc1xuICAgIH1cblxuICAgIC8vIEFkanVzdCBzbGlkZXIgcmVhY3Rpdml0eVxuICAgIHNlbHMucVNsaWRlci5vbignaW5wdXQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnN0IG1lID0gZDMuc2VsZWN0KHRoaXMpXG4gICAgICAgIGNvbnN0IHYgPSBzY2FsZXMucS5pbnZlcnQobWUucHJvcGVydHkoJ3ZhbHVlJykpO1xuICAgICAgICB2aXpzLmdyYXBoLnEodilcbiAgICAgICAgc2Vscy5xSWQudGV4dChgJHt0b1Eodil9YClcbiAgICB9KVxuXG4gICAgc2Vscy5ldGFTbGlkZXIub24oJ2lucHV0JywgZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zdCBtZSA9IGQzLnNlbGVjdCh0aGlzKVxuICAgICAgICBjb25zdCB2ID0gc2NhbGVzLmV0YS5pbnZlcnQobWUucHJvcGVydHkoJ3ZhbHVlJykpO1xuICAgICAgICB2aXpzLmdyYXBoLmV0YSh2KVxuICAgICAgICBzZWxzLmV0YUlkLnRleHQoYCR7dG9FdGEodil9YClcbiAgICB9KVxuXG4gICAgc2Vscy5sYW5kc2NhcGVTZWxlY3Rvci5vbignaW5wdXQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnN0IHNlbGYgPSBkMy5zZWxlY3QodGhpcylcbiAgICAgICAgY29uc3QgdiA9IHNlbGYucHJvcGVydHkoJ3ZhbHVlJylcbiAgICAgICAgdml6cy5jaGFydExvc3Nlcy5yZXNldFhyYW5nZV8oKVxuICAgICAgICB2aXpzLmNoYXJ0WERpc3QucmVzZXRYcmFuZ2VfKClcbiAgICAgICAgdml6cy5ncmFwaC5sYW5kc2NhcGUobGFuZHNjYXBlc1t2XSlcbiAgICAgICAgdml6cy5ncmFwaC5kYXRhRnJvbUJhc2Uodml6cy5ncmFwaC5kYXRhVG9CYXNlXygpKVxuICAgICAgICBydW5uaW5nU3RyZWFtcyA9IGFzc2lnblN0cmVhbXModml6cy5ncmFwaCwgcnVubmluZ1N0cmVhbXMpXG4gICAgfSlcbiAgICBydW5uaW5nU3RyZWFtcyA9IGFzc2lnblN0cmVhbXModml6cy5ncmFwaCwgcnVubmluZ1N0cmVhbXMpXG59XG5cbmZ1bmN0aW9uIHRlc3RpbmcoKSB7XG4gICAgY29uc29sZS5sb2coXCJURVNUXCIpO1xuICAgIC8vIGxldCBBID0gbmouYXJyYXkoW1sxLDJdLCBbMiwxXV0pXG4gICAgLy8gbGV0IHYgPSBuai5hcnJheShbMSwzXSlcbiAgICAvLyBjb25zdCB1cCA9IG5ldyBVcGRhdGVyMkQoKVxuXG4gICAgLy8gY29uc29sZS5sb2coXCJMUjogXCIsIHVwLmxyKHYpKTtcbiAgICAvLyBjb25zb2xlLmxvZyhcIkdyYWRpZW50OiBcIiwgdXAuZ3JhZGllbnQodikpO1xuICAgIC8vIGNvbnNvbGUubG9nKFwiRVJSOiBcIiwgdXAuX2YodikpO1xuXG4gICAgLy8gY29uc29sZS5sb2coXCJOSiBBcnJheSBJbmNlcHRpb246IFwiLCBuai5hcnJheSh2KSlcbiAgICAvLyAvLyBsZXQgdiA9IG5qLmFycmF5KFsxLDJdKVxuICAgIC8vIGxldCB2MiA9IG5qLmFycmF5KFs0LDVdKVxuICAgIC8vIGNvbnNvbGUubG9nKHYpO1xuXG4gICAgLy8gLy9AdHMtaWdub3JlXG4gICAgLy8gY29uc29sZS5sb2cobmouZG90KEEsIHYpKTtcblxuICAgIC8vIGNvbnN0IGJ1bXB5ID0gTGFuZHNjYXBlTG9zcyhbMSwyLDNdLCBbMSwxLDFdKVxuXG4gICAgLy8gY29uc3QgdiA9IG5qLmFycmF5KFsxLDFdKVxuXG4gICAgLy8gY29uc29sZS5sb2coXCJGb3J3YXJkIFJlc3VsdHM6IFwiLCBidW1weS5mb3J3YXJkKHYpKVxuICAgIC8vIGNvbnNvbGUubG9nKFwiSmFjIFJlc3VsdHM6IFwiLCBidW1weS5qYWNvYmlhbih2KSlcbiAgICBjb25zb2xlLmxvZyhcIkVORCBURVNUXCIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWFpbigpIHtcbiAgICB0ZXN0aW5nKClcblxuICAgIHBsb3RRdWFkcmF0aWNGdW5jcygpO1xuICAgIHBsb3RFbGxpcHRpY2FsKCk7XG4gICAgcGxvdFF1aXZlckdyYXBoKCk7XG4gICAgLy8gcGxvdEdvbGZIb2xlM0JhbGwoKTtcbiAgICAvLyBwbG90R29sZkhvbGVTbGlkZXIoKTtcbiAgICAvLyBwbG90SmFnZ2VkTG9zczJEKCk7XG4gICAgcGxvdEJ1bXB5TG9zczJEKCk7XG59XG4iLCJpbXBvcnQgKiBhcyBkMyBmcm9tICdkMydcbmltcG9ydCB7IE1hcmdpbkluZm8gfSBmcm9tICcuL3V0aWwvU1ZHVmlzQ29tcG9uZW50J1xuaW1wb3J0IHsgRDNTZWwgfSBmcm9tICcuL3V0aWwveGQzJ1xuaW1wb3J0IHtyYW5nZX0gZnJvbSAncmFtZGEnXG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRTVkcoZGl2OiBzdHJpbmcsIHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyLCBtYXJnaW46IE1hcmdpbkluZm8pOiBEM1NlbCB7XG5cbiAgICB2YXIgc3ZnID0gZDMuc2VsZWN0KGRpdikuYXBwZW5kKFwic3ZnXCIpXG4gICAgICAgIC5hdHRyKFwid2lkdGhcIiwgXCIxMDAlXCIpXG4gICAgICAgIC5hdHRyKFwiaGVpZ2h0XCIsIFwiMTAwJVwiKVxuICAgICAgICAuYXR0cihcInZpZXdCb3hcIiwgXCIwIDAgXCIgKyAod2lkdGggKyBtYXJnaW4ubGVmdCArIG1hcmdpbi5yaWdodCkgKyBcIiBcIiArIChoZWlnaHQgKyBtYXJnaW4udG9wICsgbWFyZ2luLmJvdHRvbSkpXG4gICAgICAgIC5hdHRyKFwicHJlc2VydmVBc3BlY3RSYXRpb1wiLCBcInhNaWRZTWlkIG1lZXRcIilcbiAgICAgICAgLmFwcGVuZChcImdcIilcbiAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgXCJ0cmFuc2xhdGUoXCIgKyBtYXJnaW4ubGVmdCArIFwiLFwiICsgbWFyZ2luLnRvcCArIFwiKVwiKTtcblxuICAgIHJldHVybiBzdmc7XG59XG5cbnR5cGUgRG9tYWluUmFuZ2UgPSBudW1iZXJbXVxuXG4vKipcbiAqIFxuICogQHBhcmFtIG54IE51bWJlciBvZiBncmlkcG9pbnRzIGFsb25nIHhcbiAqIEBwYXJhbSBueSBOdW1iZXIgb2YgZ3JpZHBvaW50cyBhbG9uZyB5XG4gKiBAcGFyYW0geHJhbmdlIFJhbmdlIGFsb25nIHggYXhpc1xuICogQHBhcmFtIHlyYW5nZSBSYW5nZSBhbG9uZyB5IGF4aXNcbiAqIEBwYXJhbSBmdW5jICh4LHkpID0+IG51bWJlciwgZnVuY3Rpb24gdG8gcGxvdFxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q29udG91clZhbHVlcyhueDogbnVtYmVyLCBueTogbnVtYmVyLCB4cmFuZ2U6IERvbWFpblJhbmdlLCB5cmFuZ2U6IERvbWFpblJhbmdlLCBmdW5jOiAoeDogbnVtYmVyLCB5OiBudW1iZXIpID0+IG51bWJlcikge1xuICAgIGxldCB2YWx1ZXMgPSBuZXcgQXJyYXkobnggKiBueSlcblxuICAgIGZvciAodmFyIGogPSAwLjUsIGsgPSAwOyBqIDwgbnk7ICsraikge1xuICAgICAgICBmb3IgKHZhciBpID0gMC41OyBpIDwgbng7ICsraSwgKytrKSB7XG4gICAgICAgICAgICBjb25zdCB4dmFsID0gKChpIC8gbngpICogKHhyYW5nZVsxXSAtIHhyYW5nZVswXSkpICsgeHJhbmdlWzBdO1xuICAgICAgICAgICAgY29uc3QgeXZhbCA9ICgxIC0gKGogLyBueSkpICogKHlyYW5nZVsxXSAtIHlyYW5nZVswXSkgKyB5cmFuZ2VbMF07XG4gICAgICAgICAgICB2YWx1ZXNba10gPSBmdW5jKHh2YWwsIHl2YWwpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbHVlc1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdW5pZm9ybShhLCBiKSB7XG4gICAgcmV0dXJuIE1hdGgucmFuZG9tKCkgKiAoYiAtIGEpICsgYTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdlblVuaWZvcm0oYTpudW1iZXIsIGI6bnVtYmVyLCBuOm51bWJlcikge1xuICAgIHJldHVybiByYW5nZSgwLCBuKS5tYXAoeCA9PiB7cmV0dXJuIHt4OiB1bmlmb3JtKGEsIGIpLCB5OiB1bmlmb3JtKGEsYil9fSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5vcm1hbChtZWFuLCB2YXJpYW5jZSkge1xuICAgIHZhciBzID0gMDtcbiAgICB3aGlsZSAocyA9PSAwIHx8IHMgPiAxKSB7XG4gICAgICAgIHZhciB1ID0gdW5pZm9ybSgtMSwxKSxcbiAgICAgICAgdiA9IHVuaWZvcm0oLTEsMSk7XG4gICAgICAgIHMgPSB1ICogdSArIHYgKiB2O1xuICAgIH1cblxuICAgIHZhciBzdGFuZGFyZCA9IE1hdGguc3FydCgtMiAqIE1hdGgubG9nKHMpIC8gcykgKiB1O1xuICAgIHJldHVybiBtZWFuICsgTWF0aC5zcXJ0KHZhcmlhbmNlKSAqIHN0YW5kYXJkO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2VuTm9ybWFsKG1lYW46bnVtYmVyLCB2YXJpYW5jZTpudW1iZXIsIG46bnVtYmVyKSB7XG4gICAgcmV0dXJuIHJhbmdlKDAsIG4pLm1hcCh4ID0+IHtyZXR1cm4ge3g6IG5vcm1hbChtZWFuLCB2YXJpYW5jZSksIHk6IHVuaWZvcm0obWVhbix2YXJpYW5jZSl9fSlcbn0iLCJpbXBvcnQgKiBhcyBkMyBmcm9tICdkMydcbmltcG9ydCB7IFZlY3RvcjJEIH0gZnJvbSAnLi4vdHlwZXMnXG5pbXBvcnQgeyBTVkdWaXNDb21wb25lbnQsIFNWR09wdGlvbnMsIE1hcmdpbkluZm8gfSBmcm9tIFwiLi9TVkdWaXNDb21wb25lbnRcIlxuXG5leHBvcnQgaW50ZXJmYWNlIENoYXJ0T3B0aW9ucyBleHRlbmRzIFNWR09wdGlvbnMge1xuICAgIHhyYW5nZTogW251bWJlciwgbnVtYmVyXVxuICAgIHlyYW5nZTogW251bWJlciwgbnVtYmVyXVxuICAgIHBhZDogTWFyZ2luSW5mbyAgICAgICAgICAgICAvLyBEaXN0YW5jZSBmcm9tIGVkZ2VzLiBEZW1hcmNhdGUgd2hlbiB0aGluZ3MgYXJlIHRvbyBjbG9zZSB0byB0aGUgZWRnZVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIENoYXJ0U2NhbGVzIHtcbiAgICB4PzogZDMuU2NhbGVMaW5lYXI8bnVtYmVyLCBudW1iZXI+LFxuICAgIHk/OiBkMy5TY2FsZUxpbmVhcjxudW1iZXIsIG51bWJlcj4sXG59XG4vKipcbiAqIENyZWF0ZSBhIGNsYXNzIHRoYXQgY2FuIGJlIHVzZWQgZm9yIHBsb3R0aW5nIGNoYXJ0cyAobGluZSBncmFwaHMsIGJhciBncmFwaHMsIGV0Yy4pLlxuICovXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQ2hhcnQyRDxEYXRhSW50ZXJmYWNlPiBleHRlbmRzIFNWR1Zpc0NvbXBvbmVudDxEYXRhSW50ZXJmYWNlPiB7XG4gICAgb3B0aW9uczogQ2hhcnRPcHRpb25zXG4gICAgc2NhbGVzOiBDaGFydFNjYWxlc1xuXG4gICAgLy8gUHV0IGEgdmVjdG9yIGludG8gdGhlIGNvb3JkaW5hdGUgc3lzdGVtIHVzZWQgYnkgdGhlIHZpc3VhbGl6YXRpb25cbiAgICBpbnRvVmlzKHY6IFZlY3RvcjJEKSB7XG4gICAgICAgIHJldHVybiB7IHg6IHRoaXMuc2NhbGVzLngodi54KSwgeTogdGhpcy5zY2FsZXMueSh2LnkpIH1cbiAgICB9XG5cbiAgICAvLyBUYWtlIGEgdmVjdG9yIGluIHRoZSBjb29yZGluYXRlIHN5c3RlbSBhbmQgcmV0dXJuIGl0IHRvIHRoZSBtYXRoIGNvb3JkaW5hdGVzXG4gICAgaW50b01hdGgodjogVmVjdG9yMkQpIHtcbiAgICAgICAgcmV0dXJuIHsgeDogdGhpcy5zY2FsZXMueC5pbnZlcnQodi54KSwgeTogdGhpcy5zY2FsZXMueS5pbnZlcnQodi55KSB9XG4gICAgfVxuXG4gICAgLy8gSW5zdGFudGlhdGUgdGhlIGF4ZXMgb2YgdGhlIGNoYXJ0LiBSZWltcGxlbWVudCBkZXBlbmRpbmcgb24gaG93IHdlIHdhbnQgdGhlIGF4ZXMgdG8gYXBwZWFyXG4gICAgcHJvdGVjdGVkIGFic3RyYWN0IGNyZWF0ZUF4ZXMoKVxuXG4gICAgLy8gSW5zdGFudGlhdGUgdGhlIHNjYWxlcyBmcm9tIHRoZSB4cmFuZ2UgYW5kIHRoZSB5cmFuZ2VcbiAgICBwcm90ZWN0ZWQgYWJzdHJhY3QgY3JlYXRlU2NhbGVzKClcbn0iLCJpbXBvcnQge1Zpc0NvbXBvbmVudH0gZnJvbSAnLi9WaXNDb21wb25lbnQnXG5pbXBvcnQge1NpbXBsZUV2ZW50SGFuZGxlcn0gZnJvbSAnLi9TaW1wbGVFdmVudEhhbmRsZXInXG5pbXBvcnQge0QzU2VsfSBmcm9tICcuL3hkMydcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEhUTUxWaXNDb21wb25lbnQ8RGF0YUludGVyZmFjZT4gZXh0ZW5kcyBWaXNDb21wb25lbnQ8RGF0YUludGVyZmFjZT4ge1xuXG4gICAgcHJvdGVjdGVkIGNvbnN0cnVjdG9yKGQzcGFyZW50OiBEM1NlbCwgZXZlbnRIYW5kbGVyPzogU2ltcGxlRXZlbnRIYW5kbGVyLCBvcHRpb25zOiB7fSA9IHt9LCBJRD0wKSB7XG4gICAgICAgIHN1cGVyKGQzcGFyZW50LCBldmVudEhhbmRsZXIsIElEKVxuICAgICAgICB0aGlzLmluaXRIVE1MKG9wdGlvbnMpXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTXVzdCBiZSBjYWxsZWQgaW1tZWRpYXRlbHkgYWZ0ZXIgdGhlIGBzdXBlcigpYCBjb25zdHJ1Y3RvciBjYWxsIG9mIGluaGVyZXRpbmcgY2xhc3Nlc1xuICAgICAqIFxuICAgICAqIC0gQ3JlYXRlcyBgYmFzZWAgYXR0cmlidXRlIG9uIHBhcmVudFxuICAgICAqIC0gQWRkIGFkZGl0aW9uYWwgc3RhdGljIGVsZW1lbnRzIGRlZmluZWQgaW4gYGluaXQoKWBcbiAgICAgKi9cbiAgICBpbml0SFRNTChvcHRpb25zOiB7fSA9IHt9KSB7XG4gICAgICAgIHRoaXMudXBkYXRlT3B0aW9ucyhvcHRpb25zKVxuICAgICAgICB0aGlzLmJhc2UgPSB0aGlzLnBhcmVudC5hcHBlbmQoJ2RpdicpXG4gICAgfVxufSIsImltcG9ydCB7IEQzU2VsIH0gZnJvbSBcIi4veGQzXCJcbmltcG9ydCB7IFZpc0NvbXBvbmVudCB9IGZyb20gXCIuL1Zpc0NvbXBvbmVudFwiXG5pbXBvcnQgeyBTaW1wbGVFdmVudEhhbmRsZXIgfSBmcm9tIFwiLi9TaW1wbGVFdmVudEhhbmRsZXJcIjtcbmltcG9ydCB7IFNWRyB9IGZyb20gXCIuL1NWR3BsdXNcIjtcblxuZXhwb3J0IHR5cGUgTWFyZ2luSW5mbyA9IHtcbiAgICB0b3A6bnVtYmVyXG4gICAgcmlnaHQ6bnVtYmVyXG4gICAgYm90dG9tOm51bWJlclxuICAgIGxlZnQ6bnVtYmVyXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU1ZHT3B0aW9ucyB7XG4gICAgbWFyZ2luOiBNYXJnaW5JbmZvXG4gICAgbWF4V2lkdGg6IG51bWJlciAgICAgICAgLy8gVGhlIHRvdGFsIHdpZHRoIG9mIHRoZSBjb21wb25lbnRcbiAgICBtYXhIZWlnaHQ6IG51bWJlciAgICAgICAvLyBUaGUgdG90YWwgaGVpZ2h0IG9mIHRoZSBjb21wb25lbnRcbiAgICB3aWR0aD86IG51bWJlciAgICAgICAgICAvLyBUaGUgdG90YWwgd2lkdGggLSBhcHBsaWNhYmxlIG1hcmdpbnNcbiAgICBoZWlnaHQ/OiBudW1iZXIgICAgICAgICAvLyBUaGUgdG90YWwgaGVpZ2h0IC0gYXBwbGljYWJsZSBtYXJnaW5zXG59XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBTVkdWaXNDb21wb25lbnQ8RGF0YUludGVyZmFjZT4gZXh0ZW5kcyBWaXNDb21wb25lbnQ8RGF0YUludGVyZmFjZT4ge1xuICAgIHByb3RlY3RlZCBzdmc6IEQzU2VsXG4gICAgbGF5ZXJzOiB7IG1haW4/OiBEM1NlbCwgZmc/OiBEM1NlbCwgYmc/OiBEM1NlbCwgW2tleTogc3RyaW5nXTogRDNTZWwgfTtcbiAgICBwcm90ZWN0ZWQgb3B0aW9uczogU1ZHT3B0aW9ucyA9IHtcbiAgICAgICAgbWFyZ2luOiB7IHRvcDogMCwgcmlnaHQ6IDAsIGJvdHRvbTogMCwgbGVmdDogMCB9LFxuICAgICAgICBtYXhXaWR0aDogNDUwLFxuICAgICAgICBtYXhIZWlnaHQ6IDQ1MCxcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgY29uc3RydWN0b3IoZDNwYXJlbnQ6IEQzU2VsLCBldmVudEhhbmRsZXI/OiBTaW1wbGVFdmVudEhhbmRsZXIsIG9wdGlvbnM6IHt9ID0ge30sIElEPTApIHtcbiAgICAgICAgc3VwZXIoZDNwYXJlbnQsIGV2ZW50SGFuZGxlciwgSUQpXG4gICAgfVxuXG4gICAgLyoqIFxuICAgICAqIE11c3QgYmUgY2FsbGVkIGltbWVkaWF0ZWx5IGFmdGVyIHRoZSBgc3VwZXIoKWAgY29uc3RydWN0b3IgY2FsbCBvZiBpbmhlcmV0aW5nIGNsYXNzZXMuXG4gICAgICogXG4gICAgICogLSBDYWxjdWxhdGVzIGhlaWdodCBhbmQgd2lkdGggZm9yIG9wdGlvbnNcbiAgICAgKiAtIEFkZHMgJ3N2ZycgYW5kICdiYXNlJyBvYmplY3RzIHRvIHRoZSBkaXYuXG4gICAgICogLSBBZGRzIGxheWVycyBvbiB0aGUgYmFzZSB0byB3b3JrIHdpdGggaWYgcGFzc2VkXG4gICAgICogLSBSdW5zIGRlZmluZWQgc3RhdGljIGluaXRpYWxpemF0aW9uIGRlZmluZWQgaW4gYGluaXQoKWBcbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgaW5pdFNWRyhvcHRpb25zID0ge30sIGRlZmF1bHRMYXllcnMgPSBbXCJiZ1wiLCBcIm1haW5cIiwgXCJmZ1wiXSkge1xuICAgICAgICB0aGlzLnVwZGF0ZU9wdGlvbnMob3B0aW9ucylcbiAgICAgICAgY29uc3Qgb3AgPSB0aGlzLm9wdGlvbnM7XG4gICAgICAgIG9wLndpZHRoID0gb3AubWF4V2lkdGggLSAob3AubWFyZ2luLmxlZnQgKyBvcC5tYXJnaW4ucmlnaHQpXG4gICAgICAgIG9wLmhlaWdodCA9IG9wLm1heEhlaWdodCAtIChvcC5tYXJnaW4udG9wICsgb3AubWFyZ2luLmJvdHRvbSlcblxuICAgICAgICB0aGlzLnN2ZyA9IHRoaXMucGFyZW50LmFwcGVuZCgnc3ZnJylcbiAgICAgICAgICAgIC5hdHRyKFwid2lkdGhcIiwgXCIxMDAlXCIpXG4gICAgICAgICAgICAuYXR0cihcImhlaWdodFwiLCBcIjEwMCVcIilcbiAgICAgICAgICAgIC5hdHRyKFwidmlld0JveFwiLCBgMCAwICR7b3Aud2lkdGggKyBvcC5tYXJnaW4ubGVmdCArIG9wLm1hcmdpbi5yaWdodH0gJHtvcC5oZWlnaHQgKyBvcC5tYXJnaW4udG9wICsgb3AubWFyZ2luLmJvdHRvbX1gKVxuICAgICAgICAgICAgLmFwcGVuZCgnZycpXG4gICAgICAgICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBTVkcudHJhbnNsYXRlKG9wLm1hcmdpbi5sZWZ0LCBvcC5tYXJnaW4udG9wKSlcblxuICAgICAgICAvLyB0aGlzLnN2ZyA9IFNWRy5hZGRTVkcodGhpcy5wYXJlbnQsIG9wLndpZHRoLCBvcC5oZWlnaHQsIG9wLm1hcmdpbilcbiAgICAgICAgdGhpcy5iYXNlID0gU1ZHLmdyb3VwKHRoaXMuc3ZnLCAnJyk7IC8vIExldCBIVE1MIGF1dGhvciBhc3NpZ24gdGhlIGNsYXNzIG5hbWUgYW5kIElEXG4gICAgICAgIHRoaXMubGF5ZXJzID0ge307XG4gICAgICAgIGlmIChkZWZhdWx0TGF5ZXJzKSB7XG4gICAgICAgICAgICAvLyBjb25zdHJ1Y3Rpb24gb3JkZXIgaXMgaW1wb3J0YW50ICFcbiAgICAgICAgICAgIGRlZmF1bHRMYXllcnMuZm9yRWFjaChsYXllciA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5sYXllcnNbbGF5ZXJdID0gU1ZHLmdyb3VwKHRoaXMuYmFzZSwgbGF5ZXIpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmluaXQoKVxuICAgIH1cbn0iLCJpbXBvcnQgKiBhcyBkMyBmcm9tIFwiZDNcIlxuaW1wb3J0ICogYXMgUiBmcm9tICdyYW1kYSdcbmltcG9ydCB7TWFyZ2luSW5mb30gZnJvbSAnLi9TVkdWaXNDb21wb25lbnQnXG5pbXBvcnQge0QzU2VsfSBmcm9tICcuLi91dGlsL3hkMydcblxuLyoqXG4gKiBDcmVhdGVkIGJ5IGhlbiBvbiA1LzE1LzE3LlxuICogTW9kaWZpZWQgYnkgaG9vIG9uIDQvMTYvMTkuXG4gKi9cblxuZXhwb3J0IGNsYXNzIFNWRyB7XG4gICAgXG4gICAgc3RhdGljIHRyYW5zbGF0ZSh4Om51bWJlciwgeTpudW1iZXIpOnN0cmluZyB7XG4gICAgICAgIHJldHVybiBgdHJhbnNsYXRlKCR7eH0sJHt5fSlgXG4gICAgfVxuXG4gICAgc3RhdGljIHJvdGF0ZShkZWc6bnVtYmVyLCBvcmlnPzp7eDpudW1iZXIsIHk6bnVtYmVyfSk6c3RyaW5nIHtcbiAgICAgICAgaWYgKG9yaWcgPT0gbnVsbCkgXG4gICAgICAgICAgICByZXR1cm4gYHJvdGF0ZSgke2RlZ30pYFxuXG4gICAgICAgIHJldHVybiBgcm90YXRlKCR7ZGVnfSwke29yaWcueH0sJHtvcmlnLnl9KWBcbiAgICB9XG5cbiAgICBzdGF0aWMgc2tldyhkZWd4Om51bWJlciwgZGVneT0wKSB7XG4gICAgICAgIHJldHVybiBgc2tldygke2RlZ3h9LCAke2RlZ3l9KWBcbiAgICB9XG5cbiAgICBzdGF0aWMgc2tld1goZGVnOm51bWJlcikge1xuICAgICAgICByZXR1cm4gYHNrZXdYKCR7ZGVnfSlgXG4gICAgfVxuXG4gICAgc3RhdGljIHNrZXdZKGRlZzpudW1iZXIpIHtcbiAgICAgICAgcmV0dXJuIGBza2V3WSgke2RlZ30pYFxuICAgIH1cblxuICAgIHN0YXRpYyBzY2FsZSh4Om51bWJlciwgeT86bnVtYmVyKTpzdHJpbmcge1xuICAgICAgICBjb25zdCB5c2NhbGUgPSB5ICE9IG51bGwgPyB5IDogeDtcblxuICAgICAgICByZXR1cm4gYHNjYWxlKCR7eH0sICR7eXNjYWxlfSlgXG4gICAgfVxuXG4gICAgc3RhdGljIGdyb3VwKHBhcmVudCwgY2xhc3NlcywgcG9zID0ge3g6IDAsIHk6IDB9KSB7XG4gICAgICAgIHJldHVybiBwYXJlbnQuYXBwZW5kKCdnJylcbiAgICAgICAgICAgIC5hdHRyKCdjbGFzcycsIGNsYXNzZXMpXG4gICAgICAgICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBTVkcudHJhbnNsYXRlKHBvcy54LCBwb3MueSkpXG4gICAgfVxuXG4gICAgc3RhdGljIGFkZFNWRyhwYXJlbnQ6RDNTZWwsIHdpZHRoOm51bWJlciwgaGVpZ2h0Om51bWJlciwgbWFyZ2luOk1hcmdpbkluZm8pOkQzU2VsIHtcblxuICAgICAgICB2YXIgc3ZnID0gcGFyZW50LmFwcGVuZChcInN2Z1wiKVxuICAgICAgICAgICAgLmF0dHIoXCJ3aWR0aFwiLCBcIjEwMCVcIilcbiAgICAgICAgICAgIC5hdHRyKFwiaGVpZ2h0XCIsIFwiMTAwJVwiKVxuICAgICAgICAgICAgLmF0dHIoXCJ2aWV3Qm94XCIsIFwiMCAwIFwiICsgKHdpZHRoICsgbWFyZ2luLmxlZnQgKyBtYXJnaW4ucmlnaHQpICsgXCIgXCIgKyAoaGVpZ2h0ICsgbWFyZ2luLnRvcCArIG1hcmdpbi5ib3R0b20pKVxuICAgICAgICAgICAgLmF0dHIoXCJwcmVzZXJ2ZUFzcGVjdFJhdGlvXCIsIFwieE1pZFlNaWQgbWVldFwiKVxuICAgICAgICAuYXBwZW5kKFwiZ1wiKVxuICAgICAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgU1ZHLnRyYW5zbGF0ZShtYXJnaW4ubGVmdCwgbWFyZ2luLnRvcCkpO1xuXG4gICAgICAgIHJldHVybiBzdmc7XG4gICAgfVxuXG4gICAgc3RhdGljIGFkZEFycm93cyhwYXJlbnQ6RDNTZWwpIHtcbiAgICAgICAgcGFyZW50LmFwcGVuZCgnZGVmcycpXG4gICAgICAgICAgICAuYXBwZW5kKCdtYXJrZXInKVxuICAgICAgICAgICAgLmF0dHIoXCJpZFwiLCBcImFycm93XCIpXG4gICAgICAgICAgICAuYXR0cihcIm1hcmtlclVuaXRzXCIsIFwic3Ryb2tlV2lkdGhcIilcbiAgICAgICAgICAgIC5hdHRyKFwibWFya2VyV2lkdGhcIiwgNS41KVxuICAgICAgICAgICAgLmF0dHIoXCJtYXJrZXJIZWlnaHRcIiwgNS41KVxuICAgICAgICAgICAgLmF0dHIoXCJ2aWV3Qm94XCIsIFwiMCAwIDEyIDEyXCIpXG4gICAgICAgICAgICAuYXR0cihcInJlZlhcIiwgNilcbiAgICAgICAgICAgIC5hdHRyKFwicmVmWVwiLCA2KVxuICAgICAgICAgICAgLmF0dHIoXCJvcmllbnRcIiwgJ2F1dG8nKVxuICAgICAgICAgICAgLmFwcGVuZCgncGF0aCcpXG4gICAgICAgICAgICAuYXR0cignZCcsIFwiTTIsMiBMMTAsNiBMMiwxMCBMNiw2IEwyLDJcIilcbiAgICAgICAgICAgIC8vIC5zdHlsZShcImZpbGw6ICNmMDBcIilcbiAgICB9XG5cbiAgICBzdGF0aWMgaW5zZXJ0QXJyb3cocGFyZW50OkQzU2VsLCB4MTpudW1iZXIsIHkxOm51bWJlciwgeDI6bnVtYmVyLCB5MjpudW1iZXIsIGNvbG9yOnN0cmluZywgd2lkdGg6bnVtYmVyKSB7XG4gICAgICAgIHJldHVybiBwYXJlbnQuYXBwZW5kKFwibGluZVwiKVxuICAgICAgICAgICAgIC5hdHRyKFwieDFcIix4MSkgIFxuICAgICAgICAgICAgIC5hdHRyKFwieTFcIix5MSkgIFxuICAgICAgICAgICAgIC5hdHRyKFwieDJcIix4MikgIFxuICAgICAgICAgICAgIC5hdHRyKFwieTJcIix5MikgIFxuICAgICAgICAgICAgIC5hdHRyKFwic3Ryb2tlXCIsY29sb3IpICBcbiAgICAgICAgICAgICAuYXR0cihcInN0cm9rZS13aWR0aFwiLHdpZHRoKSAgXG4gICAgICAgICAgICAgLmF0dHIoXCJtYXJrZXItZW5kXCIsXCJ1cmwoI2Fycm93KVwiKTsgIFxuICAgIH1cblxuICAgIHN0YXRpYyBtZXNoZ3JpZChueDogbnVtYmVyLCBueTogbnVtYmVyLCB4cmFuZ2U6IG51bWJlcltdLCB5cmFuZ2U6IG51bWJlcltdKSB7XG4gICAgICAgIGNvbnN0IHNjYWxlID0gKHZhbHM6bnVtYmVyW10sIHJhbmdlKSA9PiB2YWxzLm1hcCh2ID0+ICh2ICogKHJhbmdlWzFdIC0gcmFuZ2VbMF0pKSArIHJhbmdlWzBdKTtcblxuICAgICAgICBjb25zdCBwb2ludGlmeSA9ICh4dmFsczpudW1iZXJbXSwgeXZhbHM6bnVtYmVyW10pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG91dCA9IFtdXG4gICAgICAgICAgICB4dmFscy5mb3JFYWNoKHggPT4ge1xuICAgICAgICAgICAgICAgIHl2YWxzLmZvckVhY2goeSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIG91dC5wdXNoKHt4OiB4LCB5OiB5fSlcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIHJldHVybiBvdXRcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHh2YWxzID0gc2NhbGUoUi5yYW5nZSgwLCBueCkubWFwKHggPT4gKHggKyAwLjUpIC8gbngpLCB4cmFuZ2UpXG4gICAgICAgIGNvbnN0IHl2YWxzID0gc2NhbGUoUi5yYW5nZSgwLCBueSkubWFwKHkgPT4gKHkgKyAwLjUpIC8gbnkpLCB5cmFuZ2UpXG4gICAgICAgIHJldHVybiBwb2ludGlmeSh4dmFscywgeXZhbHMpXG4gICAgfVxuXG59XG5cbmV4cG9ydCBjbGFzcyBTVkdNZWFzdXJlbWVudHMge1xuXG4gICAgcHJpdmF0ZSBtZWFzdXJlRWxlbWVudDogZDMuU2VsZWN0aW9uPGFueSwgYW55LCBhbnksIGFueT47XG5cbiAgICBjb25zdHJ1Y3RvcihiYXNlRWxlbWVudCwgY2xhc3NlcyA9ICcnKSB7XG4gICAgICAgIHRoaXMubWVhc3VyZUVsZW1lbnQgPSBiYXNlRWxlbWVudC5hcHBlbmQoJ3RleHQnKVxuICAgICAgICAgICAgLmF0dHIoJ3gnLCAwKVxuICAgICAgICAgICAgLmF0dHIoJ3knLCAtMjApXG4gICAgICAgICAgICAuYXR0cignY2xhc3MnLCBjbGFzc2VzKVxuXG4gICAgfVxuXG4gICAgdGV4dExlbmd0aCh0ZXh0LCBzdHlsZSA9IG51bGwpIHtcbiAgICAgICAgdGhpcy5tZWFzdXJlRWxlbWVudC5hdHRyKCdzdHlsZScsIHN0eWxlKTtcbiAgICAgICAgdGhpcy5tZWFzdXJlRWxlbWVudC50ZXh0KHRleHQpO1xuICAgICAgICBjb25zdCB0bCA9ICg8U1ZHVGV4dEVsZW1lbnQ+IHRoaXMubWVhc3VyZUVsZW1lbnQubm9kZSgpKS5nZXRDb21wdXRlZFRleHRMZW5ndGgoKTtcbiAgICAgICAgdGhpcy5tZWFzdXJlRWxlbWVudC50ZXh0KCcnKTtcblxuICAgICAgICByZXR1cm4gdGw7XG4gICAgfVxufSIsIi8qKlxuICogQ3JlYXRlZCBieSBoZW4gb24gNS8xNS8xNy5cbiAqIE1vZGlmaWVkIGJ5IGhvbyBvbiA0LzE2LzE5LlxuICovXG5leHBvcnQgY2xhc3MgU2ltcGxlRXZlbnRIYW5kbGVyIHtcblxuICAgIGVsZW1lbnQ6IEVsZW1lbnQ7XG4gICAgZXZlbnRMaXN0ZW5lcnM6IG9iamVjdFtdO1xuXG4gICAgY29uc3RydWN0b3IoZWxlbWVudDogRWxlbWVudCkge1xuICAgICAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuICAgICAgICB0aGlzLmV2ZW50TGlzdGVuZXJzID0gW11cbiAgICB9XG5cbiAgICBiaW5kKGV2ZW50TmFtZXM6IHN0cmluZywgZXZlbnRGdW5jdGlvbjogRnVuY3Rpb24pIHtcbiAgICAgICAgZm9yIChjb25zdCBldmVudE5hbWUgb2YgZXZlbnROYW1lcy5zcGxpdCgnICcpKSB7XG4gICAgICAgICAgICB0aGlzLmV2ZW50TGlzdGVuZXJzLnB1c2goe2V2ZW50TmFtZSwgZXZlbnRGdW5jdGlvbn0pO1xuICAgICAgICAgICAgY29uc3QgZXZlbnRGdW5jdGlvbldyYXAgPSBlID0+IGV2ZW50RnVuY3Rpb24oZS5kZXRhaWwsIGUpO1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBldmVudEZ1bmN0aW9uV3JhcCwgZmFsc2UpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0TGlzdGVuZXJzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5ldmVudExpc3RlbmVycztcbiAgICB9XG5cbiAgICB0cmlnZ2VyKGV2ZW50TmFtZTogc3RyaW5nLCBkZXRhaWw6IG9iamVjdCkge1xuICAgICAgICB0aGlzLmVsZW1lbnQuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoZXZlbnROYW1lLCB7ZGV0YWlsfSkpO1xuICAgIH1cbn0iLCJsZXQgdGhlX3VuaXF1ZV9pZF9jb3VudGVyID0gMDtcbmxldCB0aGVfdW5pcXVlX3N0cmluZ19jb3VudGVyID0gMDtcblxuZXhwb3J0IGNsYXNzIFVJZCB7XG4gICAgc3RhdGljIHVpZCgpOiBudW1iZXIge1xuICAgICAgICB0aGVfdW5pcXVlX2lkX2NvdW50ZXIgKz0gMTtcbiAgICAgICAgcmV0dXJuIHRoZV91bmlxdWVfaWRfY291bnRlclxuICAgIH1cbiAgICBzdGF0aWMgc2ltcGxlVUlkKHByZWZpeD0nJyk6IHN0cmluZyB7XG4gICAgICAgIHRoZV91bmlxdWVfc3RyaW5nX2NvdW50ZXIgKz0gMTtcblxuICAgICAgICByZXR1cm4gcHJlZml4ICsgdGhlX3VuaXF1ZV9zdHJpbmdfY291bnRlcjtcbiAgICB9XG59XG4iLCIvKipcbiAqIENyZWF0ZWQgYnkgSGVuZHJpayBTdHJvYmVsdCAoaGVuZHJpay5zdHJvYmVsdC5jb20pIG9uIDEyLzMvMTYuXG4gKiBNb2RpZmllZCBieSBCZW4gSG9vdmVyIG9uIDQvMTYvMjAxOVxuICovXG5pbXBvcnQgeyBEM1NlbCB9IGZyb20gXCIuL3hkM1wiXG5pbXBvcnQgeyBTaW1wbGVFdmVudEhhbmRsZXIgfSBmcm9tIFwiLi9TaW1wbGVFdmVudEhhbmRsZXJcIjtcblxuLyoqXG4gKiBTaG91bGQgaGF2ZSBWQ29tcG9uZW50SFRNTCBhbmQgVkNvbXBvbmVudFNWR1xuICpcbiAqIENvbW1vbiBQcm9wZXJ0aWVzOlxuICogLSBldmVudHNcbiAqIC0gZXZlbnRIYW5kbGVyIChWIGltcG9ydGFudClcbiAqIC0gb3B0aW9ucyAoTWFpbnRhaW5zIHB1YmxpYyBzdGF0ZS4gQ2FuIGV4cG9zZSB0aGVzZSB3aXRoIGdldC9zZXQgZnVuY3Rpb25zIHdpdGggYXV0byB1cGRhdGUpXG4gKiAtIF9jdXJyZW50IChNYWludGFpbnMgcHJpdmF0ZSBzdGF0ZSlcbiAqIC0gY3NzTmFtZSAoc3luY2VkIHdpdGggY29ycmVzcG9uZGluZyBDU1MgZmlsZSlcbiAqIC0gcGFyZW50IChIVE1MIGlzIGRpdiBjb250YWluaW5nIHRoZSBiYXNlLCBTVkcgaXMgU1ZHIGVsZW1lbnQpXG4gKiAtIGJhc2UgKEhUTUwgaXMgZGl2IHdpdGggY3NzX25hbWUgZXN0YWJsaXNoZWQpXG4gKiAtIF9kYXRhIChEYXRhIHVzZWQgdG8gY3JlYXRlIGFuZCByZW5kZXIgdGhlIGNvbXBvbmVudClcbiAqIC0gX3JlbmRlckRhdGEgKERhdGEgbmVlZGVkIHRvIGRpc3BsYXkuIFRoaXMgbWF5IG5vdCBiZSBuZWVkZWQsIGJ1dCBpcyBjdXJyZW50bHkgdXNlZCBpbiBoaXN0b2dyYW0pICogKiBDb21tb24gTWV0aG9kczpcbiAqIC0gY29uc3RydWN0b3JcbiAqIC0gX3JlbmRlcigpICAgICAgQ29uc2lkZXIgcmVwbGFjaW5nIHdpdGggYF91cGRhdGVEYXRhKClgIHRoYXQgdXBkYXRlcyBhbGwgZGF0YSBhdCBvbmNlXG4gKiAtIHVwZGF0ZSgpICAgICAgIENvbnNpZGVyIHJlcGxhY2luZyB0aGlzIHdpdGggYGRhdGEoKWAgdGhhdCBhdXRvIHVwZGF0ZXMgZGF0YVxuICogLSByZWRyYXcoKVxuICogLSBkZXN0cm95KClcbiAqL1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgVmlzQ29tcG9uZW50PERhdGFJbnRlcmZhY2U+IHtcbiAgICAvKipcbiAgICAgKiBHaXZlbiBhbiBJRCwgY3JlYXRlIGEgbmV3IGluc3RhbmNlIG9mIHRoaXMgY2xhc3Mgd2l0aCB0aGUgZXZlbnRzIGFuZCBjc3NfbmFtZSBtb2RpZmllZCBieSB0aGUgaWRcbiAgICAgKi9cbiAgICBuZXdJbnN0YW5jZShpZDogbnVtYmVyKSB7IH1cblxuICAgIC8qKlxuICAgICAqIFRoZSBzdGF0aWMgcHJvcGVydHkgdGhhdCBjb250YWlucyBhbGwgY2xhc3MgcmVsYXRlZCBldmVudHMuXG4gICAgICogU2hvdWxkIGJlIG92ZXJ3cml0dGVuIGFuZCBldmVudCBzdHJpbmdzIGhhdmUgdG8gYmUgdW5pcXVlISFcbiAgICAgKi9cblxuICAgIHByb3RlY3RlZCBnZXQgYmFzZU5hbWUoKSB7XG4gICAgICAgIHJldHVybiBgJHt0aGlzLmNzc25hbWV9X0lEJHt0aGlzLklEfWBcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgY3NzbmFtZTogc3RyaW5nOyAgICAgICAgICAgIC8vIE1ha2UgdGhlIHNhbWUgYXMgdGhlIGNvcnJlc3BvbmRpbmcgY3NzIGZpbGVcbiAgICBwcm90ZWN0ZWQgSUQ6IG51bWJlcjsgICAgICAgICAgICAgICAgIC8vIElEIGFzc29jaWF0ZWQgdG8gdW5pcXVlIGluc3RhbmNlIG9mIHZpc3VhbGl6YXRpb24uIERlZmF1bHRzIHRvIDBcblxuICAgIHByb3RlY3RlZCBhYnN0cmFjdCBvcHRpb25zOiB7fTtcbiAgICBwcm90ZWN0ZWQgZXZlbnRIYW5kbGVyOiBTaW1wbGVFdmVudEhhbmRsZXI7XG4gICAgcGFyZW50OiBEM1NlbDsgICAgICAgICAgICAgICAgICAgICAgICAvLyBQYXJlbnQgZDMgc2VsZWN0aW9uXG4gICAgYmFzZTogRDNTZWw7ICAgICAgICAgICAgICAgICAvLyBkMyBzZWxlY3Rpb24gdGhhdCBpcyBjcmVhdGVkIGJ5IHRoZSBpbml0XG4gICAgcHJvdGVjdGVkIF9kYXRhOiBEYXRhSW50ZXJmYWNlO1xuICAgIHByb3RlY3RlZCByZW5kZXJEYXRhOiB1bmtub3duO1xuXG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge0QzU2VsfSBkM3BhcmVudCAgRDMgc2VsZWN0aW9uIG9mIHBhcmVudCBTVkcgRE9NIEVsZW1lbnRcbiAgICAgKiBAcGFyYW0ge1NpbXBsZUV2ZW50SGFuZGxlcn0gZXZlbnRIYW5kbGVyIGEgZ2xvYmFsIGV2ZW50IGhhbmRsZXIgb2JqZWN0IG9yICdudWxsJyBmb3IgbG9jYWwgZXZlbnQgaGFuZGxlclxuICAgICAqL1xuICAgIHByb3RlY3RlZCBjb25zdHJ1Y3RvcihkM3BhcmVudDogRDNTZWwsIGV2ZW50SGFuZGxlcj86IFNpbXBsZUV2ZW50SGFuZGxlciwgSUQgPSAwKSB7XG4gICAgICAgIHRoaXMucGFyZW50ID0gZDNwYXJlbnQ7XG4gICAgICAgIHRoaXMuZXZlbnRIYW5kbGVyID0gZXZlbnRIYW5kbGVyIHx8IG5ldyBTaW1wbGVFdmVudEhhbmRsZXIodGhpcy5wYXJlbnQubm9kZSgpKTtcbiAgICAgICAgdGhpcy5JRCA9IElEO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNob3VsZCBiZSBvdmVyd3JpdHRlbiB0byBjcmVhdGUgbmVlZGVkIHN0YXRpYyBET00gZWxlbWVudHNcbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgYWJzdHJhY3QgaW5pdCgpO1xuXG4gICAgLyoqXG4gICAgICogRm9sbG93IHRoZSBEMyBjb252ZW50aW9uOiByZXRyaWV2ZSB0aGUgZGF0YSBpbnNpZGUgdGhlIGNsYXNzIGlmIG51bGwuIE90aGVyd2lzZSwgc2V0IHRoZSBkYXRhIGFuZCByZXR1cm4gJ3RoaXMnXG4gICAgICovXG4gICAgYWJzdHJhY3QgZGF0YSgpOiBEYXRhSW50ZXJmYWNlO1xuICAgIGFic3RyYWN0IGRhdGEoeDogRGF0YUludGVyZmFjZSk6IHRoaXM7XG5cbiAgICAvKipcbiAgICAgKiBTZXQgbWFueSBvcHRpb25zIGF0IG9uY2VcbiAgICAgKlxuICAgICAqIEBwYXJhbSBvcHRpb25zIFJlc2V0IG9wdGlvbnMgdG8gcGFzc2VkIHZhbHVlc1xuICAgICAqL1xuICAgIHVwZGF0ZU9wdGlvbnMob3B0aW9uczoge30pIHtcbiAgICAgICAgT2JqZWN0LmtleXMob3B0aW9ucykuZm9yRWFjaChrID0+IHRoaXMub3B0aW9uc1trXSA9IG9wdGlvbnNba10pO1xuICAgIH1cblxuICAgIGRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMuYmFzZS5yZW1vdmUoKTtcbiAgICB9XG59IiwiaW1wb3J0ICogYXMgZDMgZnJvbSAnZDMnXG5pbXBvcnQgeyBCYXNlVHlwZSB9IGZyb20gJ2QzJ1xuXG4vKipcbiAqIENyZWF0ZSBuIGxpbmVhcmx5IHNwYWNlZCB2YWx1ZXMgYmV0d2VlbiBzdGFydCBhbmQgZW5kXG4gKi9cbmV4cG9ydCBjb25zdCBsaW5zcGFjZSA9IChzdGFydCwgZW5kLCBuKSA9PiB7XG4gICAgY29uc3QgZGVsdGEgPSAoZW5kIC0gc3RhcnQpIC8gKG4gLSAxKVxuICAgIHJldHVybiBkMy5yYW5nZShzdGFydCwgZW5kICsgZGVsdGEsIGRlbHRhKS5zbGljZSgwLCBuKVxufVxuXG4vKiogXG4gKiBDcmVhdGUgbiBsb2dhcml0aG1pY2FsbHkgc3BhY2VkIHZhbHVlcyBiZXR3ZWVuIHN0YXJ0IGFuZCBlbmRcbiAqL1xuZXhwb3J0IGNvbnN0IGxvZ3NwYWNlID0gKHN0YXJ0Om51bWJlciwgZW5kOm51bWJlciwgbjpudW1iZXIsIGJhc2U6bnVtYmVyPTEwKSA9PiB7XG4gICAgY29uc3Qgc2NhbGUgPSBkMy5zY2FsZUxvZygpLmJhc2UoYmFzZSkuZG9tYWluKFtzdGFydCwgZW5kXSkucmFuZ2UoW3N0YXJ0LCBlbmRdKVxuICAgIHJldHVybiBsaW5zcGFjZShzdGFydCwgZW5kLCBuKS5tYXAoc2NhbGUpXG59XG5cbi8qKlxuICogQ29udmVydCB2YWx1ZXMgc3BhY2VkIGV2ZW5seSBvbiBhIHBvd2VyIHNjYWxlLiBXaGVuIGV4cD0xLCBzYW1lIGFzIGxpbnNwYWNlXG4gKi9cbmV4cG9ydCBjb25zdCBwb3dzcGFjZSA9IChzdGFydCwgZW5kLCBuLCBleHA9MSkgPT4ge1xuICAgIGNvbnN0IHNjYWxlID0gZDMuc2NhbGVQb3coKS5leHBvbmVudChleHApLmRvbWFpbihbc3RhcnQsIGVuZF0pLnJhbmdlKFtzdGFydCwgZW5kXSlcbiAgICByZXR1cm4gbGluc3BhY2Uoc3RhcnQsZW5kLG4pLm1hcChzY2FsZSlcbn1cblxuZXhwb3J0IHR5cGUgRDNTZWwgPSBkMy5TZWxlY3Rpb248YW55LCBhbnksIGFueSwgYW55PlxuZXhwb3J0IHR5cGUgZDNTPFQgZXh0ZW5kcyBCYXNlVHlwZSwgVSA9IGFueT4gPSBkMy5TZWxlY3Rpb248VCwgVSwgYW55LCBhbnk+XG5cbmQzLnNlbGVjdGlvbi5wcm90b3R5cGUuY2xlYXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5zZWxlY3RBbGwoJyonKS5yZW1vdmUoKTtcbiAgICByZXR1cm4gdGhpcztcbn1cblxuZDMuc2VsZWN0aW9uLnByb3RvdHlwZS50b2dnbGVDbGFzcyA9IGZ1bmN0aW9uIChjbGFzc05hbWUpIHtcbiAgICB0aGlzLmNsYXNzZWQoY2xhc3NOYW1lLCAhdGhpcy5jbGFzc2VkKGNsYXNzTmFtZSkpO1xuICAgIHJldHVybiB0aGlzO1xufVxuXG5kMy5zZWxlY3Rpb24ucHJvdG90eXBlLnNob3cgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5zdHlsZSgnZGlzcGxheScsICdpbml0aWFsJyk7XG4gICAgcmV0dXJuIHRoaXM7XG59XG5cbmQzLnNlbGVjdGlvbi5wcm90b3R5cGUuaGlkZSA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLnN0eWxlKCdkaXNwbGF5JywgJ25vbmUnKTtcbiAgICByZXR1cm4gdGhpcztcbn1cblxuZDMuc2VsZWN0aW9uLnByb3RvdHlwZS50b2dnbGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGlzSGlkZGVuID0gdGhpcy5zdHlsZSgnZGlzcGxheScpID09ICdub25lJztcbiAgICByZXR1cm4gdGhpcy5zdHlsZSgnZGlzcGxheScsIGlzSGlkZGVuID8gJ2luaGVyaXQnIDogJ25vbmUnKTtcbn1cblxuZDMuc2VsZWN0aW9uLnByb3RvdHlwZS5hZnRlciA9IGZ1bmN0aW9uICh0YWdOYW1lKSB7XG4gICAgdmFyIGVsZW1lbnRzID0gW107XG5cbiAgICB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnTmFtZSk7XG4gICAgICAgIHRoaXMucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoZWxlbWVudCwgdGhpcy5uZXh0U2libGluZyk7XG4gICAgICAgIGVsZW1lbnRzLnB1c2goZWxlbWVudCk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gZDMuc2VsZWN0QWxsKGVsZW1lbnRzKTtcbn1cblxuZDMuc2VsZWN0aW9uLnByb3RvdHlwZS5iZWZvcmUgPSBmdW5jdGlvbiAodGFnTmFtZSkge1xuICAgIHZhciBlbGVtZW50cyA9IFtdO1xuXG4gICAgdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZ05hbWUpO1xuICAgICAgICB0aGlzLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGVsZW1lbnQsIHRoaXMpO1xuICAgICAgICBlbGVtZW50cy5wdXNoKGVsZW1lbnQpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGQzLnNlbGVjdEFsbChlbGVtZW50cyk7XG59IiwiaW1wb3J0ICogYXMgZDMgZnJvbSAnZDMnXG5pbXBvcnQgeyBMYW5kc2NhcGUyRCB9IGZyb20gXCIuLi9MYW5kc2NhcGVzMkRcIlxuaW1wb3J0IHsgRDNTZWwsIGxpbnNwYWNlLCBwb3dzcGFjZX0gZnJvbSAnLi4vdXRpbC94ZDMnXG5pbXBvcnQgeyBWZWN0b3IyRCwgQXJyYXkgfSBmcm9tICcuLi90eXBlcydcbmltcG9ydCB7IFNWR09wdGlvbnMsIFNWR1Zpc0NvbXBvbmVudCB9IGZyb20gJy4uL3V0aWwvU1ZHVmlzQ29tcG9uZW50J1xuaW1wb3J0IHsgU2ltcGxlRXZlbnRIYW5kbGVyIH0gZnJvbSAnLi4vdXRpbC9TaW1wbGVFdmVudEhhbmRsZXInO1xuaW1wb3J0IHsgU1ZHIH0gZnJvbSAnLi4vdXRpbC9TVkdwbHVzJ1xuaW1wb3J0IHsgZ2V0Q29udG91clZhbHVlcyB9IGZyb20gJy4uL3Bsb3R0aW5nJ1xuaW1wb3J0IHsgVXBkYXRlcjJEIH0gZnJvbSAnLi4vVXBkYXRlcjJEJ1xuaW1wb3J0IHsgaW50ZXJ2YWwgfSBmcm9tICdyeGpzJ1xuaW1wb3J0IHsgdGFrZSwgc3RhcnRXaXRoLCBzY2FuIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnXG5pbXBvcnQgKiBhcyBuaiBmcm9tIFwibnVtanNcIlxuXG50eXBlIFQgPSBudW1iZXJbXVxuXG5pbnRlcmZhY2UgR3JhcGhPcHRpb25zIGV4dGVuZHMgU1ZHT3B0aW9ucyB7XG4gICAgeHJhbmdlOiBbbnVtYmVyLCBudW1iZXJdXG4gICAgeXJhbmdlOiBbbnVtYmVyLCBudW1iZXJdXG4gICAgbjogbnVtYmVyICAgICAgICAgICAgICAgICAgIC8vIE51bWJlciBvZiBtZXNoZ3JpZCBwb2ludHMgYWxvbmcgdGhlIHggYXhpcyBmb3IgY29udG91cnNcbiAgICBtOiBudW1iZXIgICAgICAgICAgICAgICAgICAgLy8gTnVtYmVyIG9mIG1lc2hncmlkIHBvaW50cyBhbG9uZyB0aGUgeSBheGlzIGZvciBjb250b3Vyc1xuICAgIG54OiBudW1iZXIgICAgICAgICAgICAgICAgICAgLy8gTnVtYmVyIG9mIG1lc2hncmlkIHBvaW50cyBhbG9uZyB0aGUgeCBheGlzIGZvciBxdWl2ZXJzXG4gICAgbnk6IG51bWJlciAgICAgICAgICAgICAgICAgICAvLyBOdW1iZXIgb2YgbWVzaGdyaWQgcG9pbnRzIGFsb25nIHRoZSB4IGF4aXMgZm9yIHF1aXZlcnNcbiAgICBwYWQ6IG51bWJlciAgICAgICAgICAgICAgICAgLy8gQW5ub3RhdGlvbnMgdGhhdCBoYXBwZW4gaW4gdGhlIG1hcmdpbiBtdXN0IHRha2UgcGxhY2UgYHBhZGAgZGlzdGFuY2UgZnJvbSB0aGUgbWFpbiBncmFwaFxuICAgIG5Db250b3VyczogbnVtYmVyXG4gICAgY2lyY2xlRXZlcnk6IG51bWJlclxuICAgIHVwZGF0ZXI6IFVwZGF0ZXIyRFxuICAgIHhsYWJlbDogc3RyaW5nXG4gICAgeWxhYmVsOiBzdHJpbmdcbiAgICB0aXRsZTogc3RyaW5nXG4gICAgY29sb3JTY2FsZTogKHg6IG51bWJlcikgPT4gc3RyaW5nIHwgbnVtYmVyXG4gICAgbWF4VGljazogbnVtYmVyIC8vIG1heCBudW1iZXIgb2YgZGVzY2VudCB1cGRhdGVzIHRvIHRha2VcbiAgICBpbnRlcnZhbDogbnVtYmVyIC8vIHRpbWUgYmV0d2VlbiBkZXNjZW50IHVwZGF0ZXNcbn1cblxuaW50ZXJmYWNlIEdyYXBoU2NhbGVzIHtcbiAgICB4PzogZDMuU2NhbGVMaW5lYXI8bnVtYmVyLCBudW1iZXI+LFxuICAgIHk/OiBkMy5TY2FsZUxpbmVhcjxudW1iZXIsIG51bWJlcj4sXG4gICAgY29sb3I/OiAoeDogbnVtYmVyKSA9PiBzdHJpbmcgfCBudW1iZXIsXG4gICAgY3VydmU/OiBkMy5DdXJ2ZUNhdG11bGxSb21GYWN0b3J5LFxuICAgIGNvbnRvdXJzPzogZDMuQ29udG91cnMsXG4gICAgdGhyZXNob2xkcz86IG51bWJlcltdXG59XG5cbmludGVyZmFjZSBHcmFwaFNlbHMge1xuICAgIHhheGlzPzogRDNTZWxcbiAgICB5YXhpcz86IEQzU2VsXG4gICAgbGVnZW5kPzogRDNTZWxcbiAgICB0aXA/OiBEM1NlbFxuICAgIHhsYWJlbD86IEQzU2VsXG4gICAgeWxhYmVsPzogRDNTZWxcbiAgICBjaXJjbGU/OiBEM1NlbFxuICAgIGFycm93cz86IEQzU2VsW11cbiAgICB0aXRsZT86IEQzU2VsXG59XG5cbmNvbnN0IEVWRU5UUyA9IHtcbiAgICBzdGVwQWRkZWQ6IFwiU2ltcGxlTmV0X1N0ZXBBZGRlZFwiXG59XG5cbmV4cG9ydCBjbGFzcyBDb250b3VyUGxvdCBleHRlbmRzIFNWR1Zpc0NvbXBvbmVudDxUPiB7XG4gICAgY3NzbmFtZSA9IFwic2ltcGxlLWdyYXBoXCJcblxuICAgIF9kYXRhOiBUXG5cbiAgICBvcHRpb25zOiBHcmFwaE9wdGlvbnMgPSB7XG4gICAgICAgIG1heFdpZHRoOiA0NTAsXG4gICAgICAgIG1heEhlaWdodDogNTAwLFxuICAgICAgICBtYXJnaW46IHsgdG9wOiA1MCwgcmlnaHQ6IDc1LCBib3R0b206IDEyNSwgbGVmdDogNTAgfSxcbiAgICAgICAgcGFkOiAzMCxcbiAgICAgICAgeHJhbmdlOiBbMCwgMS42XSxcbiAgICAgICAgeXJhbmdlOiBbMCwgMS42XSxcbiAgICAgICAgbjogMjAxLFxuICAgICAgICBtOiAyMDEsXG4gICAgICAgIG54OiAxMSxcbiAgICAgICAgbnk6IDExLFxuICAgICAgICBuQ29udG91cnM6IDIwLFxuICAgICAgICBjaXJjbGVFdmVyeTogNCxcbiAgICAgICAgdXBkYXRlcjogbnVsbCxcbiAgICAgICAgeGxhYmVsOiBcInhcIixcbiAgICAgICAgeWxhYmVsOiBcInlcIixcbiAgICAgICAgdGl0bGU6IG51bGwsXG4gICAgICAgIC8vQHRzLWlnbm9yZVxuICAgICAgICBjb2xvclNjYWxlOiBkMy5zY2FsZUxpbmVhcigpXG4gICAgICAgICAgICAuZG9tYWluKFswLCAxLjRdKVxuICAgICAgICAgICAgLy9AdHMtaWdub3JlXG4gICAgICAgICAgICAucmFuZ2UoW1wic3RlZWxibHVlXCIsIFwid2hpdGVcIl0pXG4gICAgICAgICAgICAvL0B0cy1pZ25vcmVcbiAgICAgICAgICAgIC5pbnRlcnBvbGF0ZShkMy5pbnRlcnBvbGF0ZVJnYi5nYW1tYSgyLjIpKSxcbiAgICAgICAgbWF4VGljazogMTAwMCxcbiAgICAgICAgaW50ZXJ2YWw6IDEwLFxuICAgIH1cblxuICAgIHNlbHM6IEdyYXBoU2VscyA9IHt9XG5cbiAgICAvLyBPdGhlclxuICAgIF9jdXJyID0ge1xuICAgICAgICBjdXJyTG9jOiBuai5hcnJheShbMC4xLCAwLjJdKSxcbiAgICAgICAgc3RlcDogMCxcbiAgICAgICAgdGlja2VyOiBudWxsLFxuICAgIH1cblxuICAgIHN0YXRpYyBldmVudHMgPSBFVkVOVFNcblxuICAgIGNvbnN0cnVjdG9yKGQzcGFyZW50OiBEM1NlbCwgZXZlbnRIYW5kbGVyPzogU2ltcGxlRXZlbnRIYW5kbGVyLCBvcHRpb25zOiBQYXJ0aWFsPEdyYXBoT3B0aW9ucz4gPSB7fSkge1xuICAgICAgICBzdXBlcihkM3BhcmVudCwgZXZlbnRIYW5kbGVyLCBvcHRpb25zKVxuICAgICAgICBzdXBlci5pbml0U1ZHKG9wdGlvbnMpXG4gICAgICAgIHRoaXMuYmFzZS5jbGFzc2VkKHRoaXMuY3NzbmFtZSwgdHJ1ZSlcbiAgICAgICAgdGhpcy5vcHRpb25zLnVwZGF0ZXIgPSBvcHRpb25zLnVwZGF0ZXIgPT0gbnVsbCA/IG5ldyBVcGRhdGVyMkQoKSA6IG9wdGlvbnMudXBkYXRlclxuICAgICAgICB0aGlzLmluaXRQbG90KClcbiAgICB9XG5cbiAgICBzdGF0aWMgZnJvbUxhbmRzY2FwZShkM3BhcmVudDogRDNTZWwsIGV2ZW50SGFuZGxlcjogU2ltcGxlRXZlbnRIYW5kbGVyLCB0OiBMYW5kc2NhcGUyRCk6IENvbnRvdXJQbG90IHtcbiAgICAgICAgY29uc3QgdXBkYXRlciA9IG5ldyB0LnVwZGF0ZXJDbGFzcyh0KVxuICAgICAgICBjb25zdCBuZXdPcHRpb25zID0geyAuLi50LCB1cGRhdGVyIH1cbiAgICAgICAgcmV0dXJuIG5ldyBDb250b3VyUGxvdChkM3BhcmVudCwgZXZlbnRIYW5kbGVyLCBuZXdPcHRpb25zKVxuICAgIH1cblxuICAgIHNldFVwZGF0ZXIobmFtZTogJ2Jsb2NrJyB8ICdmdWxsJykge1xuICAgICAgICBjb25zdCBvcCA9IHRoaXMub3B0aW9uc1xuICAgICAgICBpZiAobmFtZSA9PSAnYmxvY2snKSB7XG4gICAgICAgICAgICBvcC51cGRhdGVyID0gb3AudXBkYXRlci50b0Jsb2NrKClcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChuYW1lID09ICdmdWxsJykge1xuICAgICAgICAgICAgb3AudXBkYXRlciA9IG9wLnVwZGF0ZXIudG9GdWxsKClcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiUGxlYXNlIGVudGVyIGEgdmFsaWQgaW5wdXQgYXMgdXBkYXRlclwiKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnVwZGF0ZVF1aXZlcnMoKVxuICAgIH1cblxuICAgIGdldCBzY2FsZXMoKTogR3JhcGhTY2FsZXMge1xuICAgICAgICBjb25zdCBvcCA9IHRoaXMub3B0aW9uc1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgeDogZDMuc2NhbGVMaW5lYXIoKS5kb21haW4ob3AueHJhbmdlKS5yYW5nZShbMCwgb3Aud2lkdGhdKSxcbiAgICAgICAgICAgIHk6IGQzLnNjYWxlTGluZWFyKCkuZG9tYWluKG9wLnlyYW5nZSkucmFuZ2UoW29wLmhlaWdodCwgMF0pLFxuICAgICAgICAgICAgY29udG91cnM6IGQzLmNvbnRvdXJzKCkuc2l6ZShbb3Aubiwgb3AubV0pLFxuICAgICAgICAgICAgY3VydmU6IGQzLmN1cnZlQ2F0bXVsbFJvbS5hbHBoYSgwLjUpLFxuICAgICAgICAgICAgY29sb3I6IG9wLmNvbG9yU2NhbGVcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHBsb3RDb250b3VycygpIHtcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgICAgIGNvbnN0IG9wID0gdGhpcy5vcHRpb25zO1xuICAgICAgICBjb25zdCBzY2FsZXMgPSB0aGlzLnNjYWxlcztcblxuICAgICAgICAvLyBjb25zdCBjb250b3VyRnVuYyA9ICh4LCB5KSA9PiB0aGlzLnVwZGF0ZXIuYWJzRXJyKG5qLmFycmF5KFt4LCB5XSkpXG4gICAgICAgIGNvbnN0IGNvbnRvdXJGdW5jID0gKHgsIHkpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGxvc3MgPSBvcC51cGRhdGVyLmxvc3MobmouYXJyYXkoW3gsIHldKSlcbiAgICAgICAgICAgIHJldHVybiBsb3NzXG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgdmFscyA9IGdldENvbnRvdXJWYWx1ZXMob3Aubiwgb3AubSwgb3AueHJhbmdlLCBvcC55cmFuZ2UsIGNvbnRvdXJGdW5jKVxuICAgICAgICAvLyBsZXQgdGhyZXNob2xkcyA9IGxpbnNwYWNlKGQzLm1pbih2YWxzKSwgZDMubWF4KHZhbHMpLCAyMClcbiAgICAgICAgbGV0IHRocmVzaG9sZHMgPSBwb3dzcGFjZShkMy5taW4odmFscyksIGQzLm1heCh2YWxzKSwgb3AubkNvbnRvdXJzLCAxKVxuXG4gICAgICAgIGNvbnN0IGNvbnRvdXJWYWxzID0gc2NhbGVzLmNvbnRvdXJzLnRocmVzaG9sZHModGhyZXNob2xkcykodmFscylcbiAgICAgICAgY29uc3QgY29udG91ckdyb3VwID0gdGhpcy5iYXNlLmFwcGVuZCgnZycpLmF0dHIoJ2lkJywgJ2NvbnRvdXItZ3JvdXAnKVxuICAgICAgICBjb25zdCBjb250b3VycyA9IGNvbnRvdXJHcm91cC5zZWxlY3RBbGwoXCJwYXRoLmNvbnRvdXJcIilcbiAgICAgICAgICAgIC5kYXRhKGNvbnRvdXJWYWxzKVxuXG4gICAgICAgIGNvbnRvdXJzLmpvaW4oXCJwYXRoXCIpXG4gICAgICAgICAgICAuYXR0cihcImNsYXNzXCIsIFwiY29udG91clwiKVxuICAgICAgICAgICAgLmF0dHIoXCJkXCIsIGQzLmdlb1BhdGgoZDMuZ2VvSWRlbnRpdHkoKS5zY2FsZShvcC53aWR0aCAvIG9wLm4pKSlcbiAgICAgICAgICAgIC5hdHRyKFwiZmlsbFwiLCBkID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gc2NhbGVzLmNvbG9yKGQudmFsdWUpXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNsYXNzZWQoXCJub3QtZml0XCIsIHRydWUpXG4gICAgfVxuXG4gICAgYWRkU3RlcCh2OiBBcnJheSwgcHJldjogQXJyYXkgPSBudWxsKSB7XG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuICAgICAgICBjb25zdCBvcCA9IHRoaXMub3B0aW9ucztcbiAgICAgICAgY29uc3Qgc2NhbGVzID0gdGhpcy5zY2FsZXM7XG4gICAgICAgIGNvbnN0IHNlbHMgPSB0aGlzLnNlbHM7XG5cbiAgICAgICAgY29uc3QgY3ggPSBzY2FsZXMueC5jbGFtcCh0cnVlKSh2LmdldCgwKSlcbiAgICAgICAgY29uc3QgY3kgPSBzY2FsZXMueS5jbGFtcCh0cnVlKSh2LmdldCgxKSlcblxuICAgICAgICBpZiAocHJldiAhPSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLmJhc2UuYXBwZW5kKCdsaW5lJylcbiAgICAgICAgICAgICAgICAuYXR0cigneDEnLCBzY2FsZXMueChwcmV2LmdldCgwKSkpXG4gICAgICAgICAgICAgICAgLmF0dHIoJ3kxJywgc2NhbGVzLnkocHJldi5nZXQoMSkpKVxuICAgICAgICAgICAgICAgIC5hdHRyKCd4MicsIGN4KVxuICAgICAgICAgICAgICAgIC5hdHRyKCd5MicsIGN5KVxuICAgICAgICAgICAgICAgIC5jbGFzc2VkKCdkZXNjZW5kaW5nLWxpbmUnLCB0cnVlKVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gQ2hlY2sgYm9yZGVyIGNvbmRpdGlvbnNcbiAgICAgICAgaWYgKHYuZ2V0KDApID49IG9wLnhyYW5nZVsxXSB8fCB2LmdldCgxKSA+PSBvcC55cmFuZ2VbMV0pIHtcbiAgICAgICAgICAgIHRoaXMuX2N1cnIudGlja2VyLnVuc3Vic2NyaWJlKClcbiAgICAgICAgICAgIHJldHVybiB2XG4gICAgICAgIH1cblxuXG4gICAgICAgIGlmICgoKHRoaXMuX2N1cnIuc3RlcCAlIG9wLmNpcmNsZUV2ZXJ5KSA9PSAwKSB8fCAocHJldiA9PSBudWxsKSkge1xuICAgICAgICAgICAgc2Vscy5jaXJjbGUgPSB0aGlzLmJhc2UuYXBwZW5kKCdjaXJjbGUnKVxuICAgICAgICAgICAgICAgIC5hdHRyKCdjeCcsIGN4KVxuICAgICAgICAgICAgICAgIC5hdHRyKCdjeScsIGN5KVxuICAgICAgICAgICAgICAgIC5hdHRyKCdyJywgMilcbiAgICAgICAgICAgICAgICAuY2xhc3NlZCgnZGVzY2VuZGluZy1wb2ludCcsIHRydWUpXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9jdXJyLnN0ZXAgKz0gMVxuICAgICAgICB0aGlzLmV2ZW50SGFuZGxlci50cmlnZ2VyKEVWRU5UUy5zdGVwQWRkZWQsIHYpXG4gICAgICAgIHJldHVybiB2O1xuICAgIH1cblxuICAgIGNsZWFyQ2lyY2xlcygpIHtcbiAgICAgICAgdGhpcy5iYXNlLnNlbGVjdEFsbCgnLmRlc2NlbmRpbmctcG9pbnQnKS5yZW1vdmUoKVxuICAgICAgICB0aGlzLmJhc2Uuc2VsZWN0QWxsKCcuZGVzY2VuZGluZy1saW5lJykucmVtb3ZlKClcbiAgICB9XG5cbiAgICBjbGVhclF1aXZlcnMoKSB7XG4gICAgICAgIHRoaXMuYmFzZS5zZWxlY3RBbGwoJy5xdWl2ZXInKS5yZW1vdmUoKVxuICAgICAgICB0aGlzLnNlbHMuYXJyb3dzID0gW11cbiAgICB9XG5cbiAgICBwbG90RGVzY2VudCgpIHtcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgICAgIGNvbnN0IG9wID0gdGhpcy5vcHRpb25zO1xuICAgICAgICBsZXQgcHJldlZhbCA9IG51bGw7XG5cbiAgICAgICAgY29uc3Qgc3ViT2JqID0ge1xuICAgICAgICAgICAgbmV4dDogKHZhbCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuYWRkU3RlcCh2YWwsIHByZXZWYWwpXG4gICAgICAgICAgICAgICAgcHJldlZhbCA9IHZhbFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVycjogKGVycikgPT4gY29uc29sZS5sb2coZXJyKSxcbiAgICAgICAgICAgIGNvbXBsZXRlOiAoKSA9PiBjb25zb2xlLmxvZyhcIkNPTVBMRVRFXCIpXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBwcmVwID0gKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5hZGRTdGVwKHRoaXMuY3VycigpKVxuICAgICAgICAgICAgcHJldlZhbCA9IHRoaXMuY3VycigpXG4gICAgICAgIH1cblxuICAgICAgICBsZXQgcHJldkxvc3MgPSAtSW5maW5pdHk7XG4gICAgICAgIHRoaXMuX2N1cnIudGlja2VyID0gaW50ZXJ2YWwob3AuaW50ZXJ2YWwpLnBpcGUoXG4gICAgICAgICAgICBzdGFydFdpdGgocHJlcCgpKSxcbiAgICAgICAgICAgIC8vQHRzLWlnbm9yZVxuICAgICAgICAgICAgc2Nhbih2ID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBsb3NzID0gc2VsZi5vcHRpb25zLnVwZGF0ZXIubG9zcyh2KVxuICAgICAgICAgICAgICAgIC8vIGlmIChsb3NzID49IHByZXZMb3NzKSB7XG4gICAgICAgICAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKGBGb3VuZCBIaWdoZXIgTG9zcyA6JyguIEluY3JlYXNlZCBieSAke2xvc3MgLSBwcmV2TG9zc31gKTtcbiAgICAgICAgICAgICAgICAvLyAgICAgcHJldkxvc3MgPSBsb3NzO1xuICAgICAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgICAgICAvLyBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyAgICAgLy8gY29uc29sZS5sb2coYFllcCBuZXcgbG9zcyBpcyBsb3dlciB0aGFuIHByZXYgbG9zczogJHtsb3NzIC0gcHJldkxvc3N9YCk7XG4gICAgICAgICAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKGBMb3NzIGlzIGxvd2VyIDopYCk7XG4gICAgICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgICAgIHJldHVybiBvcC51cGRhdGVyLm5leHQodilcbiAgICAgICAgICAgIH0sIHNlbGYuY3VycigpKSxcbiAgICAgICAgICAgIHRha2Uob3AubWF4VGljaylcbiAgICAgICAgKS5zdWJzY3JpYmUoc3ViT2JqKVxuICAgIH1cblxuICAgIGludG9WaXModjogQXJyYXkpIHtcbiAgICAgICAgcmV0dXJuIHsgeDogdGhpcy5zY2FsZXMueCh2LmdldCgwKSksIHk6IHRoaXMuc2NhbGVzLnkodi5nZXQoMSkpIH1cbiAgICB9XG5cbiAgICBpbnRvTWF0aCh2OiBWZWN0b3IyRCkge1xuICAgICAgICByZXR1cm4geyB4OiB0aGlzLnNjYWxlcy54LmludmVydCh2LngpLCB5OiB0aGlzLnNjYWxlcy55LmludmVydCh2LnkpIH1cbiAgICB9XG5cbiAgICB1cGRhdGVRdWl2ZXJzKCkge1xuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICAgICAgY29uc3Qgb3AgPSB0aGlzLm9wdGlvbnM7XG4gICAgICAgIGNvbnN0IHNlbHMgPSB0aGlzLnNlbHM7XG4gICAgICAgIGNvbnN0IHNjYWxlcyA9IHRoaXMuc2NhbGVzO1xuXG4gICAgICAgIC8vIE1vZGlmeSBhcnJvd3MgaW5wbGFjZVxuICAgICAgICBzZWxzLmFycm93cy5mb3JFYWNoKGFycm93ID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHB0OiBWZWN0b3IyRCA9IHRoaXMuaW50b01hdGgoe1xuICAgICAgICAgICAgICAgIHg6ICthcnJvdy5hdHRyKCd4MScpLFxuICAgICAgICAgICAgICAgIHk6ICthcnJvdy5hdHRyKCd5MScpXG4gICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICBjb25zdCBwdDEgPSBuai5hcnJheShbcHQueCwgcHQueV0pXG4gICAgICAgICAgICBjb25zdCBwdDIgPSBvcC51cGRhdGVyLm5leHRMcihwdDEpXG5cbiAgICAgICAgICAgIGFycm93LmF0dHIoJ3gyJywgc2NhbGVzLngocHQyLmdldCgwKSkpXG4gICAgICAgICAgICAgICAgLmF0dHIoJ3kyJywgc2NhbGVzLnkocHQyLmdldCgxKSkpXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgY3JlYXRlUXVpdmVycygpIHtcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgICAgIGNvbnN0IG9wID0gdGhpcy5vcHRpb25zO1xuICAgICAgICBjb25zdCBzY2FsZXMgPSB0aGlzLnNjYWxlcztcbiAgICAgICAgY29uc3Qgc2VscyA9IHRoaXMuc2VscztcblxuICAgICAgICBjb25zdCBwb2ludHMgPSBTVkcubWVzaGdyaWQob3AubngsIG9wLm55LCBvcC54cmFuZ2UsIG9wLnlyYW5nZSlcbiAgICAgICAgY29uc3QgY29sb3IgPSBcImJsdWVcIjtcbiAgICAgICAgY29uc3Qgd2lkdGggPSAxLjI1O1xuXG4gICAgICAgIGNvbnN0IHF1aXZlckdyb3VwID0gdGhpcy5iYXNlLmFwcGVuZCgnZycpLmF0dHIoJ2lkJywgJ3F1aXZlci1ncm91cCcpIC8vIGluaXQgc2hvdWxkIGhhdmUgdGhlc2UgZ3JvdXBzIGFscmVhZHkgc2VsZWN0ZWRcbiAgICAgICAgdGhpcy5jbGVhclF1aXZlcnMoKVxuXG4gICAgICAgIHNlbHMuYXJyb3dzID0gcG9pbnRzLm1hcChwdCA9PiB7XG4gICAgICAgICAgICBjb25zdCBwdDEgPSBuai5hcnJheShbcHQueCwgcHQueV0pXG4gICAgICAgICAgICBjb25zdCBwdDIgPSBvcC51cGRhdGVyLm5leHRMcihwdDEpXG4gICAgICAgICAgICAvL0B0cy1pZ25vcmVcbiAgICAgICAgICAgIGNvbnN0IGFycm93ID0gU1ZHLmluc2VydEFycm93KHF1aXZlckdyb3VwLCBzY2FsZXMueChwdC54KSwgc2NhbGVzLnkocHQueSksIHNjYWxlcy54KHB0Mi5nZXQoMCkpLCBzY2FsZXMueShwdDIuZ2V0KDEpKSwgY29sb3IsIHdpZHRoKVxuICAgICAgICAgICAgYXJyb3cuY2xhc3NlZCgncXVpdmVyJywgdHJ1ZSlcbiAgICAgICAgICAgIHJldHVybiBhcnJvd1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIGluaXRQbG90KCkge1xuICAgICAgICAvLyBJbml0aWFsaXplIHBsb3RzXG4gICAgICAgIHRoaXMucGxvdENvbnRvdXJzKClcbiAgICAgICAgdGhpcy5jcmVhdGVRdWl2ZXJzKClcbiAgICB9XG5cbiAgICBpbml0KCkge1xuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICAgICAgY29uc3Qgb3AgPSB0aGlzLm9wdGlvbnM7XG4gICAgICAgIGNvbnN0IHNjYWxlcyA9IHRoaXMuc2NhbGVzO1xuICAgICAgICBjb25zdCBzZWxzID0gdGhpcy5zZWxzO1xuXG4gICAgICAgIC8vIEFkZCBkZWZpbml0aW9uc1xuICAgICAgICBTVkcuYWRkQXJyb3dzKHRoaXMuc3ZnKVxuXG4gICAgICAgIC8vIENyZWF0ZSBzY2FsZXNcbiAgICAgICAgLy8gQWRkIEF4ZXMgYW5kIGxhYmVsc1xuICAgICAgICBzZWxzLnhheGlzID0gdGhpcy5iYXNlLmFwcGVuZChcImdcIilcbiAgICAgICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJheGlzIGF4aXMtLXhcIilcbiAgICAgICAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIFNWRy50cmFuc2xhdGUoMCwgb3AuaGVpZ2h0KSlcbiAgICAgICAgICAgIC5jYWxsKGQzLmF4aXNCb3R0b20oc2NhbGVzLngpLnRpY2tzKDMsIFwic1wiKSk7XG5cbiAgICAgICAgc2Vscy55YXhpcyA9IHRoaXMuYmFzZS5hcHBlbmQoXCJnXCIpXG4gICAgICAgICAgICAuYXR0cihcImNsYXNzXCIsIFwiYXhpcyBheGlzLS15XCIpXG4gICAgICAgICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBTVkcudHJhbnNsYXRlKDAsIDApKVxuICAgICAgICAgICAgLmNhbGwoZDMuYXhpc0xlZnQoc2NhbGVzLnkpLnRpY2tzKDMsIFwic1wiKSk7XG5cbiAgICAgICAgc2Vscy54bGFiZWwgPSB0aGlzLmJhc2UuYXBwZW5kKFwidGV4dFwiKVxuICAgICAgICAgICAgLmNsYXNzZWQoXCJheGlzLWxhYmVsXCIsIHRydWUpXG4gICAgICAgICAgICAuYXR0cihcInRleHQtYW5jaG9yXCIsIFwibWlkZGxlXCIpXG4gICAgICAgICAgICAuYXR0cihcImNsYXNzXCIsIFwidGl0bGVzXCIpXG4gICAgICAgICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBTVkcudHJhbnNsYXRlKG9wLndpZHRoIC8gMiwgb3AuaGVpZ2h0ICsgb3AucGFkKSlcbiAgICAgICAgICAgIC50ZXh0KG9wLnhsYWJlbClcblxuICAgICAgICBzZWxzLnlsYWJlbCA9IHRoaXMuYmFzZS5hcHBlbmQoXCJ0ZXh0XCIpXG4gICAgICAgICAgICAuY2xhc3NlZChcImF4aXMtbGFiZWxcIiwgdHJ1ZSlcbiAgICAgICAgICAgIC5hdHRyKFwidGV4dC1hbmNob3JcIiwgXCJtaWRkbGVcIilcbiAgICAgICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJ0aXRsZXNcIilcbiAgICAgICAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIFNWRy50cmFuc2xhdGUoLW9wLnBhZCwgb3AuaGVpZ2h0IC8gMikgKyBTVkcucm90YXRlKC05MCkpXG4gICAgICAgICAgICAudGV4dChvcC55bGFiZWwpXG5cbiAgICAgICAgc2Vscy50aXRsZSA9IHRoaXMuYmFzZS5hcHBlbmQoXCJ0ZXh0XCIpXG4gICAgICAgICAgICAuY2xhc3NlZChcImF4aXMtbGFiZWxcIiwgdHJ1ZSlcbiAgICAgICAgICAgIC5hdHRyKFwidGV4dC1hbmNob3JcIiwgXCJtaWRkbGVcIilcbiAgICAgICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJ0aXRsZXNcIilcbiAgICAgICAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIFNWRy50cmFuc2xhdGUob3Aud2lkdGggLyAyLCAtb3AucGFkIC8gMikpXG4gICAgICAgICAgICAudGV4dChvcC50aXRsZSlcblxuICAgICAgICAvLyBDcmVhdGUgY2xpY2sgYmVoYXZpb3JcbiAgICAgICAgdGhpcy5iYXNlLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmIChzZWxmLl9jdXJyLnRpY2tlciAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBzZWxmLl9jdXJyLnRpY2tlci51bnN1YnNjcmliZSgpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBjb29yZHMgPSBkMy5tb3VzZSh0aGlzKTtcbiAgICAgICAgICAgIHNlbGYuX2N1cnIuc3RlcCA9IDBcbiAgICAgICAgICAgIHNlbGYuY3Vycihbc2NhbGVzLnguaW52ZXJ0KGNvb3Jkc1swXSksIHNjYWxlcy55LmludmVydChjb29yZHNbMV0pXSlcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQ2xpY2tlZDogXCIsIHNlbGYuY3VycigpKTtcblxuICAgICAgICAgICAgLy8gaWYgKHNlbGYuY3VycigpLnggPiAwICYmIHNlbGYuY3VycigpLnkgPiAwICYmIHNlbGYuY3VycigpLnggPCAob3AueHJhbmdlWzFdIC0gMC4xKSAmJiBzZWxmLmN1cnIoKS55IDwgKG9wLnlyYW5nZVsxXSAtIDAuMSkpIHtcbiAgICAgICAgICAgIC8vIGlmIChzZWxmLmN1cnIoKS5nZXQoMCkgPiAwICYmIHNlbGYuY3VycigpLmdldCgxKSA+IDApIHtcbiAgICAgICAgICAgIHNlbGYuYWRkU3RlcChzZWxmLmN1cnIoKSlcbiAgICAgICAgICAgIHNlbGYuY2xlYXJDaXJjbGVzKCk7XG4gICAgICAgICAgICBzZWxmLnBsb3REZXNjZW50KCk7XG4gICAgICAgICAgICAvLyB9XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgY3VycigpOiBBcnJheVxuICAgIGN1cnIodmFsOiBBcnJheSB8IG51bWJlcltdKTogdGhpc1xuICAgIGN1cnIodmFsPykge1xuICAgICAgICBpZiAodmFsID09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9jdXJyLmN1cnJMb2NcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX2N1cnIuY3VyckxvYyA9IG5qLmFycmF5KHZhbCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGRhdGEoKTogbnVtYmVyW11cbiAgICBkYXRhKHZhbDogbnVtYmVyW10pOiB0aGlzXG4gICAgZGF0YSh2YWw/KSB7XG4gICAgICAgIGlmICh2YWwgPT0gbnVsbCkgcmV0dXJuIHRoaXMuX2RhdGFcbiAgICAgICAgdGhpcy5fZGF0YSA9IHZhbFxuICAgICAgICByZXR1cm4gdGhpc1xuICAgIH1cblxuICAgIHEoKTogbnVtYmVyXG4gICAgcSh2YWw6IG51bWJlcik6IHRoaXNcbiAgICBxKHZhbD8pIHtcbiAgICAgICAgY29uc3Qgb3AgPSB0aGlzLm9wdGlvbnNcbiAgICAgICAgaWYgKHZhbCA9PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gb3AudXBkYXRlci5xKCk7XG4gICAgICAgIH1cblxuICAgICAgICBvcC51cGRhdGVyLnEodmFsKVxuICAgICAgICB0aGlzLnVwZGF0ZVF1aXZlcnMoKVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBldGEoKTogbnVtYmVyXG4gICAgZXRhKHZhbDogbnVtYmVyKTogdGhpc1xuICAgIGV0YSh2YWw/KSB7XG4gICAgICAgIGNvbnN0IG9wID0gdGhpcy5vcHRpb25zXG4gICAgICAgIGlmICh2YWwgPT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIG9wLnVwZGF0ZXIuZXRhKCk7XG4gICAgICAgIH1cblxuICAgICAgICBvcC51cGRhdGVyLmV0YSh2YWwpXG4gICAgICAgIHRoaXMudXBkYXRlUXVpdmVycygpXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbn0iLCJpbXBvcnQgKiBhcyBkMyBmcm9tICdkMydcbmltcG9ydCB7IE1hbnVhbFVwZGF0ZXIgfSBmcm9tIFwiLi9NYW51YWxVcGRhdGVyXCJcbmltcG9ydCB7IFZlY3RvcjJEIH0gZnJvbSBcIi4uL3R5cGVzXCJcbmltcG9ydCAqIGFzIFIgZnJvbSAncmFtZGEnXG5pbXBvcnQgeyBTdWJqZWN0LCBCZWhhdmlvclN1YmplY3QgfSBmcm9tIFwicnhqc1wiXG5cbmV4cG9ydCB0eXBlIEJhbGxIaXN0b3J5ID0ge1xuICAgIGNsYXNzbmFtZTogc3RyaW5nXG4gICAgeDogbnVtYmVyXG4gICAgbG9zczogbnVtYmVyXG59XG5cbmV4cG9ydCBjbGFzcyBHb2xmQmFsbCB7XG4gICAgX3g6IG51bWJlclxuICAgIHVwZGF0ZXI6IE1hbnVhbFVwZGF0ZXJcbiAgICBjbGFzc25hbWU6IHN0cmluZ1xuICAgIHN0cmVhbTogU3ViamVjdDxCYWxsSGlzdG9yeT4gLy8gUHVzaGVzIGhpc3Rvcnkgb2YgeCB2YWx1ZXMgdG8gdGhpc1xuXG4gICAgY29uc3RydWN0b3IodXBkYXRlcjogTWFudWFsVXBkYXRlciwgY2xhc3NuYW1lOiBzdHJpbmcsIHggPSAwKSB7XG4gICAgICAgIHRoaXMudXBkYXRlciA9IHVwZGF0ZXJcbiAgICAgICAgdGhpcy5feCA9IHhcbiAgICAgICAgdGhpcy5jbGFzc25hbWUgPSBjbGFzc25hbWVcbiAgICAgICAgdGhpcy5zdHJlYW0gPSBuZXcgU3ViamVjdCgpXG4gICAgfVxuXG4gICAgZ2V0IHgoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl94XG4gICAgfVxuXG4gICAgc2V0IHgodjogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuX3ggPSB2XG4gICAgfVxuXG4gICAgbmV4dFgoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudXBkYXRlci5uZXh0KHRoaXMuX3gpXG4gICAgfVxuXG4gICAgbmV4dCgpOiBHb2xmQmFsbCB7XG4gICAgICAgIGNvbnN0IG5leHRYID0gdGhpcy5uZXh0WCgpXG4gICAgICAgIHJldHVybiBuZXcgR29sZkJhbGwodGhpcy51cGRhdGVyLCB0aGlzLmNsYXNzbmFtZSwgdGhpcy5uZXh0WCgpKVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFVzZSB0aGUgdXBkYXRlciB0byB0YWtlIHRoZSBuZXh0IHN0ZXBcbiAgICAgKiBcbiAgICAgKiBAcGFyYW0gZm9yY2VYIEZvcmNlIHRoZSBuZXh0WCB0byBiZSBvZiB0aGlzIHZhbHVlXG4gICAgICovXG4gICAgc3RlcF8oZm9yY2VYOm51bWJlcnxudWxsPW51bGwpOiB0aGlzIHtcbiAgICAgICAgaWYgKGZvcmNlWCAhPSBudWxsKSB0aGlzLnggPSBmb3JjZVhcbiAgICAgICAgZWxzZSB0aGlzLnggPSB0aGlzLm5leHRYKClcblxuICAgICAgICB0aGlzLnN0cmVhbS5uZXh0KHtcbiAgICAgICAgICAgIGNsYXNzbmFtZTogdGhpcy5jbGFzc25hbWUsXG4gICAgICAgICAgICB4OiB0aGlzLngsXG4gICAgICAgICAgICBsb3NzOiB0aGlzLnVwZGF0ZXIubG9zcyh0aGlzLngpXG4gICAgICAgIH0pXG4gICAgICAgIHJldHVybiB0aGlzXG4gICAgfVxuXG4gICAgdG9WZWMoZjogKHg6IG51bWJlcikgPT4gbnVtYmVyKTogVmVjdG9yMkQge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgeDogdGhpcy5feCxcbiAgICAgICAgICAgIHk6IGYodGhpcy5feClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHEoKTogbnVtYmVyXG4gICAgcSh2YWw6IG51bWJlcik6IHRoaXNcbiAgICBxKHZhbD8pIHtcbiAgICAgICAgaWYgKHZhbCA9PSBudWxsKSByZXR1cm4gdGhpcy51cGRhdGVyLnFcbiAgICAgICAgdGhpcy51cGRhdGVyLnEgPSB2YWxcbiAgICAgICAgcmV0dXJuIHRoaXNcbiAgICB9XG5cbiAgICBldGEoKTogbnVtYmVyXG4gICAgZXRhKHZhbDogbnVtYmVyKTogdGhpc1xuICAgIGV0YSh2YWw/KSB7XG4gICAgICAgIGlmICh2YWwgPT0gbnVsbCkgcmV0dXJuIHRoaXMudXBkYXRlci5ldGFcbiAgICAgICAgdGhpcy51cGRhdGVyLmV0YSA9IHZhbFxuICAgICAgICByZXR1cm4gdGhpc1xuICAgIH1cbn0iLCJpbXBvcnQgKiBhcyBkMyBmcm9tICdkMydcbmltcG9ydCB7IEQzU2VsLCBsaW5zcGFjZSB9IGZyb20gJy4uL3V0aWwveGQzJ1xuaW1wb3J0ICogYXMgUiBmcm9tICdyYW1kYSdcbmltcG9ydCB7IFZlY3RvcjJEIH0gZnJvbSAnLi4vdHlwZXMnXG5pbXBvcnQgeyBTVkdPcHRpb25zLCBTVkdWaXNDb21wb25lbnQgfSBmcm9tICcuLi91dGlsL1NWR1Zpc0NvbXBvbmVudCdcbmltcG9ydCB7IFNpbXBsZUV2ZW50SGFuZGxlciB9IGZyb20gJy4uL3V0aWwvU2ltcGxlRXZlbnRIYW5kbGVyJztcbmltcG9ydCB7IFNWRyB9IGZyb20gJy4uL3V0aWwvU1ZHcGx1cydcbmltcG9ydCB7IGludGVydmFsLCBmcm9tRXZlbnQgfSBmcm9tICdyeGpzJ1xuaW1wb3J0IHsgdGFrZSwgc2NhbiB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJ1xuaW1wb3J0IHsgTWFudWFsVXBkYXRlciB9IGZyb20gJy4vTWFudWFsVXBkYXRlcidcbmltcG9ydCB7IEdvbGZCYWxsIH0gZnJvbSAnLi9Hb2xmQmFsbCdcbmltcG9ydCB7IGxhbmRzY2FwZXMsIExhbmRzY2FwZSwgYmFzZUxvc3MsIGdldFBsb3RGdW5jIH0gZnJvbSBcIi4uL0dvbGZMYW5kc2NhcGVzXCI7XG5cblxudHlwZSBUID0gR29sZkJhbGxbXVxuXG5pbnRlcmZhY2UgR3JhcGhPcHRpb25zIGV4dGVuZHMgU1ZHT3B0aW9ucyB7XG4gICAgcGFkOiBudW1iZXJcbiAgICBtYXhJdGVyOiBudW1iZXIgLy8gSG93IG1hbnkgaXRlcmF0aW9ucyB0byB0YWtlP1xuICAgIGxhbmRzY2FwZTogTGFuZHNjYXBlXG59XG5cbmludGVyZmFjZSBTY2FsZVhZIHtcbiAgICB4OiBkMy5TY2FsZUxpbmVhcjxudW1iZXIsbnVtYmVyPlxuICAgIHk6IGQzLlNjYWxlTGluZWFyPG51bWJlcixudW1iZXI+XG59XG5cbmludGVyZmFjZSBHcmFwaFNjYWxlcyB7XG4gICAgYmFzZTJtYXRoPzogU2NhbGVYWSxcbiAgICBiYXNlMnB4PzogU2NhbGVYWSxcbiAgICBtYXRoMnB4PzogU2NhbGVYWSxcbiAgICBiYXNlMmxvc3M/OiBkMy5TY2FsZUxpbmVhcjxudW1iZXIsIG51bWJlcj4sXG4gICAgcGF0aHM/OiBkMy5MaW5lPG51bWJlcj5bXSxcbiAgICBjb2xvcj86IGQzLlNjYWxlU2VxdWVudGlhbDxudW1iZXI+LFxufVxuXG5pbnRlcmZhY2UgR3JhcGhTZWxzIHtcbiAgICB4YXhpcz86IEQzU2VsXG4gICAgeWF4aXM/OiBEM1NlbFxuICAgIHhsYWJlbD86IEQzU2VsXG4gICAgbGluZT86IEQzU2VsXG4gICAgYmFja2Ryb3A/OiBEM1NlbFxuICAgIGJhbGw/OiBEM1NlbFxuICAgIG1hc2s/OiBEM1NlbFxuICAgIG1hc2tMaW5lPzogRDNTZWxcbiAgICBtYXNrQmFja2dyb3VuZD86IEQzU2VsXG4gICAgbGluZUJhY2tncm91bmQ/OiBEM1NlbFxufVxuXG5sZXQgQ0xFQVJFRCA9IDA7XG4vLyAvLyBOb3RlIHRoYXQgcGxvdEZ1bmMgaXMgdGhlIGxvc3MgZnVuY3Rpb24gd2UgcGxvdCBhbmQgZnVuYyBpcyB0aGUgY29tcG9uZW50IG9mIHRoZSBsb3NzIGZ1bmN0aW9uIG5lZWRlZCBmb3IgdGhlIHVwZGF0ZXJcbi8vIC8vIGV4cG9ydCBjb25zdCBmdW5jID0geCA9PiBNYXRoLnRhbmgoeClcbi8vIC8vIGV4cG9ydCBjb25zdCBkRnVuYyA9IHggPT4gTWF0aC5wb3coTWF0aC5jb3NoKHgpLCAtMilcbi8vIGV4cG9ydCBjb25zdCBmdW5jID0geCA9PiBNYXRoLnRhbmgoeCAtIDExKSAvIDQgKyBNYXRoLnRhbmgoeCAtIDYpIC8gNCArIE1hdGgudGFuaCh4KSArIE1hdGgudGFuaCh4ICsgNikgLyA0ICsgTWF0aC50YW5oKHggKyAxMSkgLyA0XG4vLyBleHBvcnQgY29uc3QgZEZ1bmMgPSB4ID0+IE1hdGgucG93KE1hdGguY29zaCh4IC0gMTEpLCAtMikgLyA0ICsgTWF0aC5wb3coTWF0aC5jb3NoKHggLSA2KSwgLTIpIC8gNCArIE1hdGgucG93KE1hdGguY29zaCh4KSwgLTIpICsgTWF0aC5wb3coTWF0aC5jb3NoKHggKyA2KSwgLTIpIC8gNCArIE1hdGgucG93KE1hdGguY29zaCh4ICsgMTEpLCAtMikgLyA0XG4vLyAvLyBleHBvcnQgY29uc3QgZnVuYyA9IHggPT4gTWF0aC5zaWduKHgpICogKDEgLSAoMSAvICgxICsgTWF0aC5hYnMoeCkpKSlcbi8vIC8vIGV4cG9ydCBjb25zdCBkRnVuYyA9IHggPT4gMSAvIE1hdGgucG93KDEgKyBNYXRoLmFicyh4KSwgMilcblxuLy8gZXhwb3J0IGNvbnN0IHBsb3RGdW5jID0geCA9PiBiYXNlTG9zcyhmdW5jKHgpKVxuXG5leHBvcnQgY2xhc3MgR29sZkhvbGUxRCBleHRlbmRzIFNWR1Zpc0NvbXBvbmVudDxUPiB7XG4gICAgY3NzbmFtZSA9IFwiZ29sZi1ob2xlLWNoYXJ0XCJcbiAgICBtYXNrSWQ6IHN0cmluZ1xuXG4gICAgX2RhdGE6IFRcblxuICAgIG9wdGlvbnM6IEdyYXBoT3B0aW9ucyA9IHtcbiAgICAgICAgbWF4V2lkdGg6IDQwMCxcbiAgICAgICAgbWF4SGVpZ2h0OiAyMDAsXG4gICAgICAgIG1hcmdpbjogeyB0b3A6IDUsIHJpZ2h0OiAxMCwgYm90dG9tOiA0MCwgbGVmdDogMTAgfSxcbiAgICAgICAgcGFkOiAzMCxcbiAgICAgICAgbWF4SXRlcjogNjAwLFxuICAgICAgICBsYW5kc2NhcGU6IGxhbmRzY2FwZXMuaG9sZVxuICAgIH1cblxuICAgIHNjYWxlczogR3JhcGhTY2FsZXMgPSB7fVxuXG4gICAgc2VsczogR3JhcGhTZWxzID0ge31cblxuICAgIGNvbnN0cnVjdG9yKGQzcGFyZW50OiBEM1NlbCwgZXZlbnRIYW5kbGVyPzogU2ltcGxlRXZlbnRIYW5kbGVyLCBvcHRpb25zID0ge30sIElEID0gMCkge1xuICAgICAgICBzdXBlcihkM3BhcmVudCwgZXZlbnRIYW5kbGVyLCBvcHRpb25zLCBJRClcbiAgICAgICAgdGhpcy5tYXNrSWQgPSBgbGluZS1tYXNrLSR7dGhpcy5JRH1gXG4gICAgICAgIHN1cGVyLmluaXRTVkcob3B0aW9ucywgW1wiYmdcIl0pXG4gICAgICAgIHRoaXMuYmFzZS5jbGFzc2VkKHRoaXMuY3NzbmFtZSwgdHJ1ZSlcblxuICAgICAgICBjb25zdCB6ID0gdGhpcy5vcHRpb25zLmxhbmRzY2FwZVxuICAgICAgICBcbiAgICAgICAgLy8gTmVlZCB0byBoYXZlIGluaXRpYWwgZGF0YVxuICAgICAgICBjb25zdCBkYXRhID0gW1xuICAgICAgICAgICAgbmV3IEdvbGZCYWxsKG5ldyBNYW51YWxVcGRhdGVyKHouZiwgei5kZiwgMCwgMC45KSwgJ2dvbGYtYmFsbC1zZ2QnLCA0KSxcbiAgICAgICAgXVxuXG4gICAgICAgIHRoaXMuZGF0YShkYXRhKVxuICAgICAgICB0aGlzLmluaXRCYWxscygpXG4gICAgfVxuXG4gICAgbGFuZHNjYXBlKCk6IExhbmRzY2FwZVxuICAgIGxhbmRzY2FwZSh2YWw6IExhbmRzY2FwZSk6IHRoaXNcbiAgICBsYW5kc2NhcGUodmFsPykge1xuICAgICAgICBpZiAodmFsID09IG51bGwpIHJldHVybiB0aGlzLm9wdGlvbnMubGFuZHNjYXBlXG4gICAgICAgIGNvbnN0IG9wID0gdGhpcy5vcHRpb25zXG4gICAgICAgIG9wLmxhbmRzY2FwZSA9IHZhbFxuXG4gICAgICAgIC8vIFVwZGF0ZSB4cmFuZ2UgYW5kIHlyYW5nZVxuICAgICAgICB0aGlzLnVwZGF0ZVNjYWxlcyhvcClcbiAgICAgICAgdGhpcy51cGRhdGVBeGVzKHRoaXMuc2NhbGVzLCBvcClcblxuICAgICAgICAvLyBVcGRhdGUgZGF0YVxuICAgICAgICB0aGlzLmRhdGEoKS5mb3JFYWNoKGIgPT4ge1xuICAgICAgICAgICAgYi51cGRhdGVyLmYgPSB2YWwuZlxuICAgICAgICAgICAgYi51cGRhdGVyLmRmID0gdmFsLmRmXG4gICAgICAgIH0pXG5cbiAgICAgICAgdGhpcy5jbGVhckN1cnZlKClcbiAgICAgICAgdGhpcy5wbG90Q3VydmUoKVxuXG4gICAgICAgIHJldHVybiB0aGlzXG4gICAgfVxuXG4gICAgLyoqIFJldHVybiBmaXJzdCB1cGRhdGVyIGluIGRhdGEgKi9cbiAgICBnZXQgZGF0YUhlYWQoKTogR29sZkJhbGwge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZGF0YSgpWzBdXG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJMb29rcyBsaWtlIHRoZXJlIGlzIG5vIGRhdGEgaW4gdGhpcyBnb2xmIGhvbGVcIik7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUHV0IGEgdmVjdG9yIGludG8gdGhlIGNvb3JkaW5hdGUgc3lzdGVtIHVzZWQgYnkgdGhlIHZpc3VhbGl6YXRpb25cbiAgICAgKiBcbiAgICAgKiBAcGFyYW0gdiBWZWN0b3IgXG4gICAgICovXG4gICAgaW50b1Zpcyh2OiBWZWN0b3IyRCkge1xuICAgICAgICByZXR1cm4geyB4OiB0aGlzLnNjYWxlcy5tYXRoMnB4Lngodi54KSwgeTogdGhpcy5zY2FsZXMubWF0aDJweC55KHYueSkgfVxuICAgIH1cblxuICAgIC8vIFRha2UgYSB2ZWN0b3IgaW4gdGhlIGNvb3JkaW5hdGUgc3lzdGVtIGFuZCByZXR1cm4gaXQgdG8gdGhlIG1hdGggY29vcmRpbmF0ZXNcbiAgICBpbnRvTWF0aCh2OiBWZWN0b3IyRCkge1xuICAgICAgICByZXR1cm4geyB4OiB0aGlzLnNjYWxlcy5tYXRoMnB4LnguaW52ZXJ0KHYueCksIHk6IHRoaXMuc2NhbGVzLm1hdGgycHgueS5pbnZlcnQodi55KSB9XG4gICAgfVxuXG4gICAgLy8gVHVybiBhIG51bWJlciBpbnRvIGEgdmVjdG9yXG4gICAgbnVtMnZlYyh4OiBudW1iZXIpOiBWZWN0b3IyRCB7XG4gICAgICAgIGNvbnN0IG9wID0gdGhpcy5vcHRpb25zXG4gICAgICAgIHJldHVybiB7IHg6IHgsIHk6IG9wLmxhbmRzY2FwZS5sb3NzKHgpIH1cbiAgICB9XG5cbiAgICAvLyBUdXJuIGEgYmFsbCBpbnRvIGEgdmVjdG9yIGluIHRoZSB2aXN1YWxpemF0aW9uIGNvb3JkaW5hdGUgc3lzdGVtXG4gICAgYmFsbDJ2aXMoYjogR29sZkJhbGwpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaW50b1ZpcyhiLnRvVmVjKGdldFBsb3RGdW5jKHRoaXMub3B0aW9ucy5sYW5kc2NhcGUpKSlcbiAgICB9XG5cbiAgICAvLyBQbG90IGEgYmFsbCBvbiB0aGUgY2hhcnRcbiAgICBwbG90QmFsbChiOiBHb2xmQmFsbCkge1xuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcblxuICAgICAgICBjb25zdCB0b0NsYXNzID0gbmFtZSA9PiAnLicgKyBuYW1lXG4gICAgICAgIGNvbnN0IGNsc1NlbCA9IHRvQ2xhc3MoYi5jbGFzc25hbWUpXG5cbiAgICAgICAgY29uc3QgYmFsbCA9IHRoaXMuYmFsbDJ2aXMoYilcbiAgICAgICAgc2VsZi5zZWxzLmJhbGwgPSBzZWxmLmJhc2Uuc2VsZWN0QWxsKGNsc1NlbClcbiAgICAgICAgICAgIC5kYXRhKFtiYWxsXSlcbiAgICAgICAgICAgIC5qb2luKCdjaXJjbGUnKVxuICAgICAgICAgICAgLmNsYXNzZWQoJ2dvbGYtYmFsbCcsIHRydWUpXG4gICAgICAgICAgICAuY2xhc3NlZChiLmNsYXNzbmFtZSwgdHJ1ZSlcbiAgICAgICAgICAgIC5hdHRyKFwiY3hcIiwgZCA9PiBkLngpXG4gICAgICAgICAgICAuYXR0cihcImN5XCIsIGQgPT4gZC55KVxuICAgICAgICAgICAgLmF0dHIoXCJyXCIsIFwiNXB4XCIpXG4gICAgfVxuXG4gICAgY2xlYXJDdXJ2ZSgpIHtcbiAgICAgICAgdGhpcy5sYXllcnMuYmcuc2VsZWN0QWxsKCcubGluZScpLnJlbW92ZSgpXG4gICAgICAgIHRoaXMuc2Vscy5tYXNrTGluZS5odG1sKCcnKVxuICAgICAgICB0aGlzLmJhc2Uuc2VsZWN0QWxsKCcjbGluZS1iYWNrZ3JvdW5kJykuaHRtbCgnJylcbiAgICB9XG5cbiAgICBwbG90Q3VydmVCeURlZmF1bHQoeHM6IG51bWJlcltdKSB7XG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzLCBvcCA9IHRoaXMub3B0aW9ucywgc2NhbGVzID0gdGhpcy5zY2FsZXMsIHNlbHMgPSB0aGlzLnNlbHM7XG5cbiAgICAgICAgc2NhbGVzLnBhdGhzLmZvckVhY2gobGluZSA9PiB7XG4gICAgICAgICAgICB0aGlzLmxheWVycy5iZy5hcHBlbmQoXCJwYXRoXCIpXG4gICAgICAgICAgICAgICAgLmRhdHVtKHhzKVxuICAgICAgICAgICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJsaW5lXCIpXG4gICAgICAgICAgICAgICAgLmF0dHIoXCJkXCIsIGQgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbGluZShkKVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG5cbiAgICAgICAgc2Vscy5saW5lQmFja2dyb3VuZC5zZWxlY3RBbGwoXCIuZ3JhZC1ib3hcIilcbiAgICAgICAgICAgIC5kYXRhKFsxXSlcbiAgICAgICAgICAgIC5qb2luKCdyZWN0JylcbiAgICAgICAgICAgIC5jbGFzc2VkKCdncmFkLWJveCcsIHRydWUpXG4gICAgICAgICAgICAuYXR0cihcIndpZHRoXCIsIG9wLndpZHRoKVxuICAgICAgICAgICAgLmF0dHIoXCJoZWlnaHRcIiwgb3AuaGVpZ2h0KVxuICAgICAgICAgICAgLmF0dHIoXCJmaWxsLW9wYWNpdHlcIiwgMC4wKVxuICAgIH1cblxuICAgIHBsb3RDdXJ2ZUJ5R3JhZGllbnQoeHM6IG51bWJlcltdKSB7XG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzLCBzY2FsZXMgPSB0aGlzLnNjYWxlcywgc2VscyA9IHRoaXMuc2Vscywgb3AgPSB0aGlzLm9wdGlvbnM7XG5cbiAgICAgICAgY29uc3QgeHdpZHRoID0gb3Aud2lkdGggKiAoeHNbMV0gLSB4c1swXSkgLyAoZDMubWF4KHhzKSAtIGQzLm1pbih4cykpIC8vIEFzc3VtZXMgbGVuZ3RoIG9mIHhzID4gMVxuXG4gICAgICAgIGNvbnN0IGJhbGxVcGRhdGVyID0gc2VsZi5kYXRhKClbMF0udXBkYXRlclxuXG4gICAgICAgIC8vIENsZWFyIG1hc2tcbiAgICAgICAgY29uc3QgbGluZSA9IHNjYWxlcy5wYXRoc1swXVxuXG4gICAgICAgIHNlbHMubWFza0xpbmUuYXR0cignZCcsIGxpbmUoeHMpKVxuXG4gICAgICAgIGNvbnN0IGNvbG9yU2NhbGUgPSBkMy5zY2FsZVNlcXVlbnRpYWwoZDMuaW50ZXJwb2xhdGVQbGFzbWEpXG4gICAgICAgIFxuICAgICAgICAvLyBDaGVjayB0aGUgZ3JhZGllbnQgcmFuZ2VcbiAgICAgICAgY29uc3QgdXBkYXRlQW10cyA9IHhzLm1hcCh4ID0+IE1hdGgubG9nKE1hdGguYWJzKGJhbGxVcGRhdGVyLnVwZGF0ZU1vZGlmaWVyKHgpKSkpXG5cbiAgICAgICAgY29uc3QgY2xhbXBlZFNjYWxlID0gUi5jdXJyeSgobWluOm51bWJlciwgbWF4Om51bWJlciwgYXJyOm51bWJlcltdKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBjbGFtcGVyID0gUi5jbGFtcChtaW4sIG1heClcbiAgICAgICAgICAgIGNvbnN0IGNsYW1wZWRBcnIgPSBSLm1hcChjbGFtcGVyLCBhcnIpXG4gICAgICAgICAgICByZXR1cm4gYXJyLm1hcCh4ID0+IHggLSBkMy5tZWFuKGNsYW1wZWRBcnIpKVxuICAgICAgICAgICAgLy8gcmV0dXJuIGNsYW1wZWRBcnIubWFwKHggPT4geCAtIGQzLm1lYW4oY2xhbXBlZEFycikpXG4gICAgICAgIH0pXG5cbiAgICAgICAgLy8gY29uc3QgY2xhbXBlciA9IGNsYW1wZWRTY2FsZSgtMiwgMik7XG4gICAgICAgIC8vIGNvbnN0IGRhdGEgPSBkMy56aXAoeHMsIGNsYW1wZXIodXBkYXRlQW10cykpLm1hcChkID0+IHtyZXR1cm4ge3g6IGRbMF0sIHVwZGF0ZUFtdDogZFsxXX19KVxuICAgICAgICBjb25zdCBkYXRhID0gZDMuemlwKHhzLCB1cGRhdGVBbXRzKS5tYXAoZCA9PiB7cmV0dXJuIHt4OiBkWzBdLCB1cGRhdGVBbXQ6IGRbMV19fSlcbiAgICAgICAgLy8gY29uc3QgZXh0ZW50ID0gZDMuZXh0ZW50KGNsYW1wZXIodXBkYXRlQW10cykpXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiRXh0ZW50OiBcIiwgZXh0ZW50KTtcblxuXG4gICAgICAgIC8vQHRzLWlnbm9yZVxuICAgICAgICBjb25zdCBjc2NhbGUgPSBkMy5zY2FsZUxpbmVhcigpLmRvbWFpbihbLTIsIDAsIDJdKS5yYW5nZShbXCIjNjdhOWNmXCIsIFwiI2Y3ZjdmN1wiLCBcIiNlZjhhNjJcIl0pXG5cbiAgICAgICAgc2Vscy5saW5lQmFja2dyb3VuZC5zZWxlY3RBbGwoJy5ncmFkLWJveCcpXG4gICAgICAgICAgICAuZGF0YShkYXRhKVxuICAgICAgICAgICAgLmpvaW4oJ3JlY3QnKVxuICAgICAgICAgICAgLmNsYXNzZWQoJ2dyYWQtYm94JywgdHJ1ZSlcbiAgICAgICAgICAgIC5hdHRyKCdoZWlnaHQnLCBvcC5oZWlnaHQpXG4gICAgICAgICAgICAuYXR0cignd2lkdGgnLCBzZWxmLnNjYWxlcy5tYXRoMnB4LngoeHdpZHRoKSlcbiAgICAgICAgICAgIC5hdHRyKCd4JywgZCA9PiBzZWxmLnNjYWxlcy5tYXRoMnB4LngoZC54KSlcbiAgICAgICAgICAgIC5hdHRyKCd5JywgMClcbiAgICAgICAgICAgIC5hdHRyKCdmaWxsJywgZCA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNzY2FsZShkLnVwZGF0ZUFtdClcbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgc2Vscy5saW5lQmFja2dyb3VuZC5hdHRyKCdtYXNrJywgYHVybCgjJHt0aGlzLm1hc2tJZH0pYClcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBQbG90IHRoZSB2YWx1ZXMgb2YgYWxsIHggYWNjb3JkaW5nIHRvIHRoZSBmdW5jdGlvblxuICAgICAqIFxuICAgICAqIEBwYXJhbSB4IEEgbGluc3BhY2Ugb2YgeCB2YWx1ZXMgb3ZlciB3aGljaCB0byBwbG90IGEgY3VydmVcbiAgICAgKi9cbiAgICBwbG90Q3VydmUoKSB7XG4gICAgICAgIGNvbnN0IG9wID0gdGhpcy5vcHRpb25zXG4gICAgICAgIGNvbnN0IHhzID0gbGluc3BhY2Uob3AubGFuZHNjYXBlLnhyYW5nZVswXSwgb3AubGFuZHNjYXBlLnhyYW5nZVsxXSwgMTAwMClcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXMsIHNjYWxlcyA9IHRoaXMuc2NhbGVzLCBzZWxzID0gdGhpcy5zZWxzO1xuXG4gICAgICAgIGlmIChzZWxmLmRhdGEoKSAhPSBudWxsKSB7XG4gICAgICAgICAgICBpZiAoc2VsZi5kYXRhKCkubGVuZ3RoID4gMSkgc2VsZi5wbG90Q3VydmVCeURlZmF1bHQoeHMpXG4gICAgICAgICAgICBlbHNlIHNlbGYucGxvdEN1cnZlQnlHcmFkaWVudCh4cylcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHVwZGF0ZVNjYWxlcyhvcDogR3JhcGhPcHRpb25zKSB7XG4gICAgICAgIGNvbnN0IHNjYWxlcyA9IHRoaXMuc2NhbGVzXG5cbiAgICAgICAgY29uc3QgeGJhc2VSYW5nZSA9IFstMSwgMV1cbiAgICAgICAgY29uc3QgeWJhc2VSYW5nZSA9IFsxLCAwXVxuXG4gICAgICAgIGNvbnN0IHhweFJhbmdlID0gWzAsIG9wLndpZHRoXVxuICAgICAgICBjb25zdCB5cHhSYW5nZSA9IFtvcC5oZWlnaHQsIDBdXG5cbiAgICAgICAgc2NhbGVzLmJhc2UybWF0aCA9IHtcbiAgICAgICAgICAgIHg6IGQzLnNjYWxlTGluZWFyKCkuZG9tYWluKHhiYXNlUmFuZ2UpLnJhbmdlKG9wLmxhbmRzY2FwZS54cmFuZ2UpLFxuICAgICAgICAgICAgeTogZDMuc2NhbGVMaW5lYXIoKS5kb21haW4oeWJhc2VSYW5nZSkucmFuZ2Uob3AubGFuZHNjYXBlLnlyYW5nZSlcbiAgICAgICAgfVxuICAgICAgICBzY2FsZXMuYmFzZTJweCA9IHtcbiAgICAgICAgICAgIHg6IGQzLnNjYWxlTGluZWFyKCkuZG9tYWluKHhiYXNlUmFuZ2UpLnJhbmdlKHhweFJhbmdlKSxcbiAgICAgICAgICAgIHk6IGQzLnNjYWxlTGluZWFyKCkuZG9tYWluKHliYXNlUmFuZ2UpLnJhbmdlKHlweFJhbmdlKVxuICAgICAgICB9XG4gICAgICAgIHNjYWxlcy5tYXRoMnB4ID0ge1xuICAgICAgICAgICAgeDogZDMuc2NhbGVMaW5lYXIoKS5kb21haW4ob3AubGFuZHNjYXBlLnhyYW5nZSkucmFuZ2UoeHB4UmFuZ2UpLFxuICAgICAgICAgICAgeTogZDMuc2NhbGVMaW5lYXIoKS5kb21haW4ob3AubGFuZHNjYXBlLnlyYW5nZSkucmFuZ2UoeXB4UmFuZ2UpXG4gICAgICAgIH1cblxuICAgICAgICBzY2FsZXMuYmFzZTJsb3NzID0gZDMuc2NhbGVMaW5lYXIoKS5kb21haW4ob3AubGFuZHNjYXBlLnlyYW5nZSkucmFuZ2UoWzAsIDFdKVxuXG4gICAgICAgIHNjYWxlcy5wYXRocyA9IHRoaXMubmV3UGF0aHMob3AubGFuZHNjYXBlKVxuICAgIH1cblxuICAgIHVwZGF0ZUF4ZXMoc2NhbGVzOiBHcmFwaFNjYWxlcywgb3A6IEdyYXBoT3B0aW9ucykge1xuICAgICAgICBjb25zdCBzZWxzID0gdGhpcy5zZWxzXG4gICAgICAgIHNlbHMueGF4aXMuY2FsbChkMy5heGlzQm90dG9tKHNjYWxlcy5tYXRoMnB4LngpLnRpY2tWYWx1ZXMoWzBdKS50aWNrRm9ybWF0KHggPT4gJzAnKSlcbiAgICB9XG5cbiAgICBpbml0KCkge1xuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICAgICAgY29uc3Qgb3AgPSB0aGlzLm9wdGlvbnM7XG4gICAgICAgIGNvbnN0IHNjYWxlcyA9IHRoaXMuc2NhbGVzO1xuICAgICAgICBjb25zdCBzZWxzID0gdGhpcy5zZWxzO1xuXG4gICAgICAgIHRoaXMudXBkYXRlU2NhbGVzKG9wKVxuXG4gICAgICAgIHNlbHMueGF4aXMgPSB0aGlzLmJhc2UuYXBwZW5kKFwiZ1wiKVxuICAgICAgICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcImF4aXMgYXhpcy0teFwiKVxuICAgICAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgU1ZHLnRyYW5zbGF0ZSgwLCBvcC5oZWlnaHQpKVxuXG4gICAgICAgIHNlbHMueGxhYmVsID0gdGhpcy5iYXNlLmFwcGVuZChcInRleHRcIilcbiAgICAgICAgICAgIC50ZXh0KFwiXFx1MDNCOCAtIFxcdTAzQjgqXCIpXG4gICAgICAgICAgICAuYXR0cihcImNsYXNzXCIsIFwidGl0bGVzXCIpXG4gICAgICAgICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBTVkcudHJhbnNsYXRlKG9wLndpZHRoIC8gMiwgb3AuaGVpZ2h0ICsgb3AucGFkKSlcblxuICAgICAgICAvLyBBZGQgYmFzZSBtYXNrXG4gICAgICAgIHNlbHMubWFzayA9IHRoaXMuYmFzZS5hcHBlbmQoJ21hc2snKS5hdHRyKCdpZCcsIHRoaXMubWFza0lkKVxuXG4gICAgICAgIHNlbHMubWFza0JhY2tncm91bmQgPSBzZWxzLm1hc2suYXBwZW5kKCdyZWN0JylcbiAgICAgICAgICAgIC5hdHRyKCd3aWR0aCcsIG9wLndpZHRoKVxuICAgICAgICAgICAgLmF0dHIoJ2hlaWdodCcsIG9wLmhlaWdodClcbiAgICAgICAgICAgIC5hdHRyKCdmaWxsJywgJ2JsYWNrJylcblxuICAgICAgICBzZWxzLm1hc2tMaW5lID0gc2Vscy5tYXNrLlxuICAgICAgICAgICAgc2VsZWN0QWxsKFwiI3RyYW5zcGFyZW50LWxpbmVcIikuXG4gICAgICAgICAgICBkYXRhKFsxXSlcbiAgICAgICAgICAgIC5qb2luKCdwYXRoJylcbiAgICAgICAgICAgIC5hdHRyKCdpZCcsICd0cmFuc3BhcmVudC1saW5lJylcbiAgICAgICAgICAgIC5hdHRyKCdzdHJva2UnLCAnd2hpdGUnKVxuICAgICAgICAgICAgLmF0dHIoJ3N0cm9rZS13aWR0aCcsICc1cHgnKVxuXG4gICAgICAgIHNlbHMubGluZUJhY2tncm91bmQgPSBzZWxmLmJhc2Uuc2VsZWN0QWxsKCcjbGluZS1iYWNrZ3JvdW5kJylcbiAgICAgICAgICAgIC5kYXRhKFsxXSlcbiAgICAgICAgICAgIC5qb2luKCdnJylcbiAgICAgICAgICAgIC5hdHRyKCdpZCcsICdsaW5lLWJhY2tncm91bmQnKVxuXG4gICAgICAgIHNlbHMuYmFja2Ryb3AgPSB0aGlzLmxheWVycy5iZy5hcHBlbmQoXCJnXCIpXG4gICAgICAgICAgICAuYXR0cihcImlkXCIsIFwiYmFja2Ryb3BcIilcbiAgICAgICAgICAgIC5jbGFzc2VkKCdncmFzcycsIHRydWUpXG4gICAgICAgICAgICAuYXBwZW5kKFwicmVjdFwiKVxuICAgICAgICAgICAgLmF0dHIoXCJoZWlnaHRcIiwgb3AuaGVpZ2h0KVxuICAgICAgICAgICAgLmF0dHIoXCJ3aWR0aFwiLCBvcC53aWR0aClcblxuICAgICAgICB0aGlzLnVwZGF0ZUF4ZXMoc2NhbGVzLCBvcClcblxuICAgICAgICBzY2FsZXMucGF0aHMgPSB0aGlzLm5ld1BhdGhzKG9wLmxhbmRzY2FwZSlcblxuICAgICAgICB0aGlzLnBsb3RDdXJ2ZSgpXG4gICAgfVxuXG4gICAgbmV3UGF0aHMobGFuZHNjYXBlOiBMYW5kc2NhcGUpIHtcbiAgICAgICAgY29uc3Qgc2NhbGVzID0gdGhpcy5zY2FsZXNcbiAgICAgICAgY29uc3QgYmFzZUxpbmUgPSBkMy5saW5lPG51bWJlcj4oKVxuICAgICAgICAgICAgLngoKGQ6IG51bWJlciwgaTogbnVtYmVyKSA9PiBzY2FsZXMubWF0aDJweC54KGQpKVxuICAgICAgICAgICAgLnkoKGQ6IG51bWJlciwgaTogbnVtYmVyKSA9PiBzY2FsZXMubWF0aDJweC55KGdldFBsb3RGdW5jKGxhbmRzY2FwZSkoZCkpKVxuICAgICAgICAgICAgLmN1cnZlKGQzLmN1cnZlTGluZWFyKVxuXG4gICAgICAgIHJldHVybiBbYmFzZUxpbmVdXG4gICAgfVxuXG4gICAgaW5pdEJhbGxzKCkge1xuICAgICAgICBjb25zdCBzZWxmID0gdGhpcywgb3AgPSB0aGlzLm9wdGlvbnM7XG5cbiAgICAgICAgY29uc3QgdG9vU21hbGwgPSAoeDogbnVtYmVyKSA9PiB4IDwgKG9wLmxhbmRzY2FwZS54cmFuZ2VbMF0pXG4gICAgICAgIGNvbnN0IHRvb0JpZyA9ICh4OiBudW1iZXIpID0+IHggPiAob3AubGFuZHNjYXBlLnhyYW5nZVsxXSlcblxuICAgICAgICBjb25zdCBmaXhPdXRPZkJvdW5kcyA9ICh4OiBudW1iZXIpID0+IHtcbiAgICAgICAgICAgIGxldCBvdXQ6IG51bWJlclxuXG4gICAgICAgICAgICBpZiAoaXNOYU4oeCkpIG91dCA9IG9wLmxhbmRzY2FwZS54cmFuZ2VbMF1cbiAgICAgICAgICAgIGVsc2UgaWYgKHRvb1NtYWxsKHgpKSBvdXQgPSBvcC5sYW5kc2NhcGUueHJhbmdlWzBdXG4gICAgICAgICAgICBlbHNlIGlmICh0b29CaWcoeCkpIG91dCA9IG9wLmxhbmRzY2FwZS54cmFuZ2VbMV1cbiAgICAgICAgICAgIGVsc2Ugb3V0ID0geFxuXG4gICAgICAgICAgICByZXR1cm4gb3V0XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBnZXROZXh0QmFsbChiOiBHb2xmQmFsbCk6IEdvbGZCYWxsIHtcbiAgICAgICAgICAgIGNvbnN0IG5leHRYID0gYi5uZXh0WCgpXG4gICAgICAgICAgICBjb25zdCBjdXJyQmFsbFNlbCA9IHNlbGYuYmFzZS5zZWxlY3QoYC4ke2IuY2xhc3NuYW1lfWApXG4gICAgICAgICAgICBjb25zdCBmb3JjZVggPSBmaXhPdXRPZkJvdW5kcyhuZXh0WClcbiAgICAgICAgICAgIGlmICghY3VyckJhbGxTZWwuY2xhc3NlZCgnZGVhZC1iYWxsJykpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYi5zdGVwXyhmb3JjZVgpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gYlxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgc3ViT2JqID0ge1xuICAgICAgICAgICAgbmV4dDogZ2JzID0+IHtcbiAgICAgICAgICAgICAgICBnYnMuZm9yRWFjaChiID0+IHNlbGYucGxvdEJhbGwoYikpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXJyb3I6IGIgPT4gY29uc29sZS5sb2coXCJFUlJPUjogXCIsIGIpLFxuICAgICAgICAgICAgY29tcGxldGU6ICgpID0+IGNvbnNvbGUubG9nKFwiQ09NUExFVEVcIiksXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB0aWNrZXIgPSAoKSA9PiBpbnRlcnZhbCgxMCkucGlwZShcbiAgICAgICAgICAgIHNjYW4oKGFjYzogVCkgPT4ge1xuICAgICAgICAgICAgICAgIC8vIFVuc3Vic2NyaWJlciB0aWNrZXIgaWYgYWxsIGJhbGxzIGRlYWRcbiAgICAgICAgICAgICAgICBpZiAoUi5hbGwoKGI6IEdvbGZCYWxsKSA9PiBkMy5zZWxlY3QoYC4ke2IuY2xhc3NuYW1lfWApLmNsYXNzZWQoJ2RlYWQtYmFsbCcpLCBzZWxmLmRhdGEoKSkpIHtcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ1RpY2tlci51bnN1YnNjcmliZSgpXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgc2VsZi5kYXRhKCkuZm9yRWFjaChiID0+IGdldE5leHRCYWxsKGIpKVxuICAgICAgICAgICAgICAgIHJldHVybiBzZWxmLmRhdGEoKVxuICAgICAgICAgICAgfSwgc2VsZi5kYXRhKCkpLFxuICAgICAgICAgICAgdGFrZShvcC5tYXhJdGVyKVxuICAgICAgICApLnN1YnNjcmliZShzdWJPYmopXG5cbiAgICAgICAgLy8gUnVubmluZyB0aWNrZXIgc3RhcnRzIGFzIGFuIGVtcHR5IHN1YnNjcmlwdGlvbiBvYmplY3QsIGlzIGxhdGVyIHJlcGxhY2VkIGJ5IHRoZSBydW5uaW5nIHRpY2tlclxuICAgICAgICBsZXQgcnVubmluZ1RpY2tlciA9IHtcbiAgICAgICAgICAgIHVuc3Vic2NyaWJlOiAoKSA9PiBjb25zb2xlLmxvZyhcIkVtcHR5IFRpY2tlciFcIilcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHBsb3RCYWxscyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJ1bm5pbmdUaWNrZXIudW5zdWJzY3JpYmUoKVxuICAgICAgICAgICAgY29uc3QgY2xpY2sgPSB0b1ZlYyhkMy5tb3VzZSh0aGlzKSlcbiAgICAgICAgICAgIGQzLnNlbGVjdEFsbCgnLmdvbGYtYmFsbCcpLmNsYXNzZWQoJ2RlYWQtYmFsbCcsIGZhbHNlKVxuICAgICAgICAgICAgc2VsZi5kYXRhKCkuZm9yRWFjaCgoYiwgaSkgPT4gYi54ID0gc2VsZi5pbnRvTWF0aChjbGljaykueClcbiAgICAgICAgICAgIHNlbGYuZGF0YSgpLmZvckVhY2goYiA9PiBzZWxmLnBsb3RCYWxsKGIpKVxuICAgICAgICAgICAgc2VsZi5ldmVudEhhbmRsZXIudHJpZ2dlcihcImxvc3MtY2xpY2tcIiwge30pXG5cbiAgICAgICAgICAgIHJ1bm5pbmdUaWNrZXIgPSB0aWNrZXIoKVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gdGhpcy5zZWxzLmJhY2tkcm9wLm9uKCdjbGljaycsIHBsb3RCYWxscylcbiAgICAgICAgLy8gdGhpcy5zZWxzLm1hc2tCYWNrZ3JvdW5kLm9uKCdjbGljaycsIHBsb3RCYWxscylcbiAgICAgICAgLy8gdGhpcy5zZWxzLm1hc2sub24oJ2NsaWNrJywgcGxvdEJhbGxzKVxuICAgICAgICB0aGlzLnNlbHMubGluZUJhY2tncm91bmQub24oJ2NsaWNrJywgcGxvdEJhbGxzKVxuICAgIH1cblxuICAgIHEoKTogbnVtYmVyXG4gICAgcSh2YWw6IG51bWJlcik6IHRoaXNcbiAgICBxKHZhbD8pIHtcbiAgICAgICAgaWYgKHZhbCA9PSBudWxsKSByZXR1cm4gdGhpcy5kYXRhSGVhZC51cGRhdGVyLnFcbiAgICAgICAgdGhpcy5kYXRhSGVhZC5xKHZhbClcbiAgICAgICAgdGhpcy5wbG90Q3VydmUoKVxuICAgICAgICByZXR1cm4gdGhpc1xuICAgIH1cblxuICAgIGV0YSgpOiBudW1iZXJcbiAgICBldGEodmFsOiBudW1iZXIpOiB0aGlzXG4gICAgZXRhKHZhbD8pIHtcbiAgICAgICAgaWYgKHZhbCA9PSBudWxsKSByZXR1cm4gdGhpcy5kYXRhSGVhZC51cGRhdGVyLnFcbiAgICAgICAgdGhpcy5kYXRhSGVhZC5ldGEodmFsKVxuICAgICAgICAvLyB0aGlzLnBsb3RDdXJ2ZSgpXG4gICAgICAgIHJldHVybiB0aGlzXG4gICAgfVxuXG4gICAgZGF0YSgpOiBUXG4gICAgZGF0YSh2YWw6IFQpOiB0aGlzXG4gICAgZGF0YSh2YWw/KSB7XG4gICAgICAgIGlmICh2YWwgPT0gbnVsbCkgcmV0dXJuIHRoaXMuX2RhdGFcbiAgICAgICAgdGhpcy5fZGF0YSA9IHZhbDtcbiAgICAgICAgdGhpcy5pbml0QmFsbHMoKVxuICAgICAgICByZXR1cm4gdGhpc1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIElOUExBQ0UgY2hhbmdlIHRoZSBnb2xmIGJhbGxzIGludG8gdGhlIEJBU0Ugc2NhbGVcbiAgICAgKi9cbiAgICBkYXRhVG9CYXNlXygpOiBUIHtcbiAgICAgICAgdGhpcy5kYXRhKCkubWFwKGIgPT4ge1xuICAgICAgICAgICAgYi54ID0gdGhpcy5zY2FsZXMuYmFzZTJtYXRoLnguaW52ZXJ0KGIueClcbiAgICAgICAgICAgIHJldHVybiBiXG4gICAgICAgIH0pXG5cbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YSgpXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTW9kaWZ5IHRoZSBnb2xmIGJhbGxzIGFuZCBjaGFuZ2UgdGhlaXIgeCB2YWx1ZSBmcm9tIEJBU0UgdG8gdGhlIG5ldyBNQVRIXG4gICAgICovXG4gICAgZGF0YUZyb21CYXNlKHZhbDogVCk6IHRoaXMge1xuICAgICAgICB2YWwuZm9yRWFjaChiID0+IHtcbiAgICAgICAgICAgIGIueCA9IHRoaXMuc2NhbGVzLmJhc2UybWF0aC54KGIueClcbiAgICAgICAgfSlcblxuICAgICAgICB0aGlzLmluaXRCYWxscygpXG4gICAgICAgIHJldHVybiB0aGlzXG4gICAgfVxufVxuXG5mdW5jdGlvbiB0b1ZlYyhbeCwgeV06IFtudW1iZXIsIG51bWJlcl0pOiBWZWN0b3IyRCB7XG4gICAgcmV0dXJuIHsgeDogeCwgeTogeSB9XG59IiwiaW1wb3J0ICogYXMgZDMgZnJvbSAnZDMnXG5pbXBvcnQgKiBhcyBSIGZyb20gJ3JhbWRhJ1xuXG5pbXBvcnQgeyBDaGFydDJELCBDaGFydE9wdGlvbnMsIENoYXJ0U2NhbGVzIH0gZnJvbSAnLi4vdXRpbC9DaGFydDJkVmlzQ29tcG9uZW50J1xuaW1wb3J0IHsgU2ltcGxlRXZlbnRIYW5kbGVyIH0gZnJvbSAnLi4vdXRpbC9TaW1wbGVFdmVudEhhbmRsZXInXG5pbXBvcnQgeyBEM1NlbCB9IGZyb20gJy4uL3V0aWwveGQzJ1xuaW1wb3J0IHsgU1ZHIH0gZnJvbSAnLi4vdXRpbC9TVkdwbHVzJ1xuXG5pbXBvcnQgeyBCYWxsSGlzdG9yeSB9IGZyb20gJy4vR29sZkJhbGwnXG5cbmNvbnN0IGF4aXNPZmZzZXQgPSAxIC8vIFVzZSB0aGlzIHRvIGNvdmVyIHRoZSBwbG90dGVkIGxpbmVzXG5cbmludGVyZmFjZSBHcmFwaFNlbHMge1xuICAgIHhheGlzPzogRDNTZWxcbiAgICB5YXhpcz86IEQzU2VsXG4gICAgeGxhYmVsPzogRDNTZWxcbiAgICBsaW5lPzogRDNTZWxcbiAgICBiYWNrZHJvcD86IEQzU2VsXG4gICAgYmFsbD86IEQzU2VsXG59XG5cbnR5cGUgVHJhY2tlciA9IHtcbiAgICBzZWw6IEQzU2VsLFxuICAgIHZhbHM6IG51bWJlcltdXG59XG5cbnR5cGUgTGluZVRyYWNrZXIgPSB7XG4gICAgKGtleTogc3RyaW5nKTogVHJhY2tlclxufVxuXG50eXBlIFQgPSBMaW5lVHJhY2tlclxuXG5cbmV4cG9ydCBjbGFzcyBHb2xmTG9zc2VzIGV4dGVuZHMgQ2hhcnQyRDxUPiB7XG4gICAgY3NzbmFtZSA9IFwibGluZS1wbG90XCJcblxuICAgIF9kYXRhOiBUXG5cbiAgICBvcHRpb25zOiBDaGFydE9wdGlvbnMgPSB7XG4gICAgICAgIG1heFdpZHRoOiAzNTAsXG4gICAgICAgIG1heEhlaWdodDogMjUwLFxuICAgICAgICBtYXJnaW46IHsgdG9wOiAxMCwgcmlnaHQ6IDEwLCBib3R0b206IDMwLCBsZWZ0OiAzMCB9LFxuICAgICAgICBwYWQ6IHsgdG9wOiA1LCByaWdodDogMSwgYm90dG9tOiAxMCwgbGVmdDogMTUgfSxcbiAgICAgICAgeHJhbmdlOiBbMCwgNjAwXSxcbiAgICAgICAgeXJhbmdlOiBbMS4xLCAxZS0zXSxcbiAgICB9XG4gICAgZGVmYXVsdFhyYW5nZTogW251bWJlciwgbnVtYmVyXVxuXG4gICAgc2NhbGVzOiBDaGFydFNjYWxlcyA9IHt9XG5cbiAgICBzZWxzOiBHcmFwaFNlbHMgPSB7fVxuXG4gICAgcGF0aDogZDMuTGluZTxudW1iZXI+XG5cbiAgICBjb25zdHJ1Y3RvcihkM3BhcmVudDogRDNTZWwsIGV2ZW50SGFuZGxlcj86IFNpbXBsZUV2ZW50SGFuZGxlciwgb3B0aW9ucyA9IHt9KSB7XG4gICAgICAgIHN1cGVyKGQzcGFyZW50LCBldmVudEhhbmRsZXIsIG9wdGlvbnMpXG4gICAgICAgIHN1cGVyLmluaXRTVkcodGhpcy5vcHRpb25zLCBbXCJiZ1wiXSlcbiAgICAgICAgdGhpcy5iYXNlLmNsYXNzZWQodGhpcy5jc3NuYW1lLCB0cnVlKVxuICAgICAgICB0aGlzLmRlZmF1bHRYcmFuZ2UgPSB0aGlzLm9wdGlvbnMueHJhbmdlXG4gICAgICAgIHRoaXMuZGF0YSg8TGluZVRyYWNrZXI+e30pXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUGxvdCB0aGUgdmFsdWVzIG9mIGFsbCB4IGFjY29yZGluZyB0byB0aGUgZnVuY3Rpb25cbiAgICAgKiBcbiAgICAgKiBAcGFyYW0geCBBIGxpbnNwYWNlIG9mIHggdmFsdWVzIG92ZXIgd2hpY2ggdG8gcGxvdCBhIGN1cnZlXG4gICAgICovXG4gICAgcHJvdGVjdGVkIGFkZERhdGFLZXlfKGNsYXNzbmFtZTogc3RyaW5nKSB7XG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzXG4gICAgICAgIGlmICghUi5oYXMoY2xhc3NuYW1lLCB0aGlzLmRhdGEoKSkpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBBZGRpbmcga2V5OiAke2NsYXNzbmFtZX1gKTtcbiAgICAgICAgICAgIHRoaXMuZGF0YSgpW2NsYXNzbmFtZV0gPSB7XG4gICAgICAgICAgICAgICAgc2VsOiBzZWxmLmluaXRCYXNlTGluZShjbGFzc25hbWUpLFxuICAgICAgICAgICAgICAgIHZhbHM6IFtdXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBMaXZlIHVwZGF0ZSB0aGUgeHJhbmdlXG4gICAgdXBkYXRlU2NhbGVzKHhyYW5nZSkge1xuICAgICAgICBjb25zdCBvcCA9IHRoaXMub3B0aW9uc1xuICAgICAgICB0aGlzLnNjYWxlcy54ID0gZDMuc2NhbGVMaW5lYXIoKS5kb21haW4oeHJhbmdlKS5yYW5nZShbMCwgb3Aud2lkdGhdKS5jbGFtcCh0cnVlKVxuICAgIH1cblxuICAgIGNsZWFyUGF0aHMoKSB7XG4gICAgICAgIHRoaXMuZGF0YShSLm1hcChkID0+IFIuYXNzb2MoJ3ZhbHMnLCBbXSwgZCksIHRoaXMuZGF0YSgpKSlcbiAgICB9XG5cbiAgICBwbG90UGF0aChkOiBCYWxsSGlzdG9yeSwgc2NhbGU/KSB7XG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuICAgICAgICB0aGlzLmFkZERhdGFLZXlfKGQuY2xhc3NuYW1lKTtcblxuICAgICAgICBjb25zdCBzY2FsZXIgPSAoc2NhbGUgPT0gbnVsbCkgPyB4ID0+IHggOiBzY2FsZVxuXG4gICAgICAgIGNvbnN0IGN1cnJWYWxzID0gdGhpcy5kYXRhKClbZC5jbGFzc25hbWVdO1xuICAgICAgICBjdXJyVmFscy52YWxzLnB1c2goc2NhbGVyKGQubG9zcykpXG5cbiAgICAgICAgLy8gc2xpZGluZyB4LWF4aXNcbiAgICAgICAgY29uc3QgbmV3WHJhbmdlID0gW01hdGgubWF4KDAsIGN1cnJWYWxzLnZhbHMubGVuZ3RoLXRoaXMub3B0aW9ucy54cmFuZ2VbMV0pLCBNYXRoLm1heChjdXJyVmFscy52YWxzLmxlbmd0aCx0aGlzLm9wdGlvbnMueHJhbmdlWzFdKV1cbiAgICAgICAgdGhpcy51cGRhdGVTY2FsZXMobmV3WHJhbmdlKVxuICAgICAgICB0aGlzLmNyZWF0ZVBhdGgoKVxuXG4gICAgICAgIGN1cnJWYWxzLnNlbC5kYXRhKFtjdXJyVmFsc10pXG4gICAgICAgICAgICAuam9pbihcInBhdGhcIilcbiAgICAgICAgICAgIC5jbGFzc2VkKGQuY2xhc3NuYW1lLCB0cnVlKVxuICAgICAgICAgICAgLmF0dHIoXCJkXCIsIGQgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBzZWxmLnBhdGgoZC52YWxzKVxuICAgICAgICAgICAgfSlcbiAgICB9XG5cbiAgICBwcml2YXRlIGluaXRCYXNlTGluZShjbGFzc25hbWU6IHN0cmluZykge1xuICAgICAgICByZXR1cm4gdGhpcy5sYXllcnMuYmcuYXBwZW5kKFwicGF0aFwiKVxuICAgICAgICAgICAgLmNsYXNzZWQoY2xhc3NuYW1lLCB0cnVlKVxuICAgICAgICAgICAgLmNsYXNzZWQoJ2xpbmUnLCB0cnVlKVxuICAgIH1cblxuICAgIGluaXQoKSB7XG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuICAgICAgICBjb25zdCBvcCA9IHRoaXMub3B0aW9ucztcbiAgICAgICAgY29uc3Qgc2NhbGVzID0gdGhpcy5zY2FsZXM7XG4gICAgICAgIGNvbnN0IHNlbHMgPSB0aGlzLnNlbHM7XG5cbiAgICAgICAgdGhpcy5jcmVhdGVTY2FsZXMoKVxuICAgICAgICB0aGlzLmNyZWF0ZVBhdGgoKVxuICAgICAgICB0aGlzLmNyZWF0ZUF4ZXMoKVxuICAgIH1cblxuICAgIHByb3RlY3RlZCBjcmVhdGVTY2FsZXMoKSB7XG4gICAgICAgIGNvbnN0IHNjYWxlcyA9IHRoaXMuc2NhbGVzXG4gICAgICAgIGNvbnN0IG9wID0gdGhpcy5vcHRpb25zXG5cbiAgICAgICAgc2NhbGVzLnggPSBkMy5zY2FsZUxpbmVhcigpLmRvbWFpbihvcC54cmFuZ2UpLnJhbmdlKFswLCBvcC53aWR0aF0pLmNsYW1wKHRydWUpXG4gICAgICAgIHNjYWxlcy55ID0gZDMuc2NhbGVMb2coKS5kb21haW4ob3AueXJhbmdlKS5yYW5nZShbMCwgb3AuaGVpZ2h0XSkuY2xhbXAodHJ1ZSlcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgY3JlYXRlQXhlcygpIHtcbiAgICAgICAgY29uc3Qgc2VscyA9IHRoaXMuc2Vsc1xuICAgICAgICBjb25zdCBzY2FsZXMgPSB0aGlzLnNjYWxlc1xuICAgICAgICBjb25zdCBvcCA9IHRoaXMub3B0aW9uc1xuXG4gICAgICAgIC8vIENyZWF0ZSBheGVzXG4gICAgICAgIHNlbHMueWF4aXMgPSB0aGlzLmJhc2UuYXBwZW5kKFwiZ1wiKVxuICAgICAgICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcImF4aXMgYXhpcy0teVwiKVxuICAgICAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgU1ZHLnRyYW5zbGF0ZSgwLCAtIGF4aXNPZmZzZXQpKVxuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgLmNhbGwoZDMuYXhpc0xlZnQoc2NhbGVzLnkpLnRpY2tGb3JtYXQoXCJcIikudGlja3MoNCkpO1xuXG4gICAgICAgIHNlbHMueGF4aXMgPSB0aGlzLmJhc2UuYXBwZW5kKFwiZ1wiKVxuICAgICAgICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcImF4aXMgYXhpcy0teFwiKVxuICAgICAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgU1ZHLnRyYW5zbGF0ZSgwLCBvcC5oZWlnaHQgLSBheGlzT2Zmc2V0KSlcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgIC5jYWxsKGQzLmF4aXNCb3R0b20oc2NhbGVzLngpLnRpY2tGb3JtYXQoXCJcIikudGlja3MoNCkpO1xuXG4gICAgICAgIC8vIEFkZCB4bGFiZWxcbiAgICAgICAgdGhpcy5iYXNlLmFwcGVuZChcInRleHRcIilcbiAgICAgICAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIFNWRy50cmFuc2xhdGUob3Aud2lkdGggLyAyLCBvcC5tYXJnaW4udG9wICsgb3AuaGVpZ2h0ICsgMTApKVxuICAgICAgICAgICAgLnN0eWxlKFwidGV4dC1hbmNob3JcIiwgXCJtaWRkbGVcIilcbiAgICAgICAgICAgIC50ZXh0KFwiVGltZVwiKVxuXG4gICAgICAgIC8vIEFkZCB5bGFiZWxcbiAgICAgICAgdGhpcy5iYXNlLmFwcGVuZChcInRleHRcIilcbiAgICAgICAgICAgIC5zdHlsZShcInRleHQtYW5jaG9yXCIsIFwibWlkZGxlXCIpXG4gICAgICAgICAgICAudGV4dChcIkxvc3NcIilcbiAgICAgICAgICAgIC5hdHRyKFwieVwiLCBvcC5wYWQubGVmdCAtIG9wLm1hcmdpbi5sZWZ0KVxuICAgICAgICAgICAgLmF0dHIoXCJ4XCIsIG9wLnBhZC50b3AgLSAob3AuaGVpZ2h0IC8gMikpXG4gICAgICAgICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBTVkcucm90YXRlKC05MCkpXG4gICAgICAgIC8vIC5hdHRyKFwidHJhbnNmb3JtXCIsIFNWRy50cmFuc2xhdGUob3AubWFyZ2luLmxlZnQsIG9wLmhlaWdodC8yKSlcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgY3JlYXRlUGF0aCgpIHtcbiAgICAgICAgdGhpcy5wYXRoID0gZDMubGluZTxudW1iZXI+KClcbiAgICAgICAgICAgIC54KChkOiBudW1iZXIsIGk6IG51bWJlcikgPT4gdGhpcy5zY2FsZXMueChpKSlcbiAgICAgICAgICAgIC55KChkOiBudW1iZXIsIGk6IG51bWJlcikgPT4gdGhpcy5zY2FsZXMueShkKSlcbiAgICAgICAgICAgIC5jdXJ2ZShkMy5jdXJ2ZUxpbmVhcilcbiAgICB9XG5cbiAgICBkYXRhKCk6IFRcbiAgICBkYXRhKHZhbDogVCk6IHRoaXNcbiAgICBkYXRhKHZhbD8pIHtcbiAgICAgICAgaWYgKHZhbCA9PSBudWxsKSByZXR1cm4gdGhpcy5fZGF0YVxuICAgICAgICB0aGlzLl9kYXRhID0gdmFsO1xuICAgICAgICByZXR1cm4gdGhpc1xuICAgIH1cblxuICAgIHJlc2V0WHJhbmdlXygpOiB0aGlzIHtcbiAgICAgICAgdGhpcy5vcHRpb25zLnhyYW5nZSA9IHRoaXMuZGVmYXVsdFhyYW5nZVxuICAgICAgICByZXR1cm4gdGhpc1xuICAgIH1cbn0iLCJpbXBvcnQgKiBhcyBkMyBmcm9tICdkMydcbmltcG9ydCAqIGFzIFIgZnJvbSAncmFtZGEnXG5cbmltcG9ydCB7IENoYXJ0MkQsIENoYXJ0T3B0aW9ucywgQ2hhcnRTY2FsZXMgfSBmcm9tICcuLi91dGlsL0NoYXJ0MmRWaXNDb21wb25lbnQnXG5pbXBvcnQgeyBTaW1wbGVFdmVudEhhbmRsZXIgfSBmcm9tICcuLi91dGlsL1NpbXBsZUV2ZW50SGFuZGxlcidcbmltcG9ydCB7IEQzU2VsIH0gZnJvbSAnLi4vdXRpbC94ZDMnXG5pbXBvcnQgeyBTVkcgfSBmcm9tICcuLi91dGlsL1NWR3BsdXMnXG5pbXBvcnQgeyBCYWxsSGlzdG9yeSB9IGZyb20gJy4vR29sZkJhbGwnXG5cbmNvbnN0IGF4aXNPZmZzZXQgPSAxIC8vIFVzZSB0aGlzIHRvIGNvdmVyIHRoZSBwbG90dGVkIGxpbmVzXG5cbmludGVyZmFjZSBHcmFwaFNlbHMge1xuICAgIHhheGlzPzogRDNTZWxcbiAgICB5YXhpcz86IEQzU2VsXG4gICAgeGxhYmVsPzogRDNTZWxcbiAgICBsaW5lPzogRDNTZWxcbiAgICBiYWNrZHJvcD86IEQzU2VsXG4gICAgYmFsbD86IEQzU2VsXG59XG5cbnR5cGUgVHJhY2tlciA9IHtcbiAgICBzZWw6IEQzU2VsLFxuICAgIHZhbHM6IG51bWJlcltdXG59XG5cbnR5cGUgTGluZVRyYWNrZXIgPSB7XG4gICAgKGtleTogc3RyaW5nKTogVHJhY2tlclxufVxuXG50eXBlIFQgPSBMaW5lVHJhY2tlclxuXG5leHBvcnQgY2xhc3MgR29sZlhEaXN0IGV4dGVuZHMgQ2hhcnQyRDxUPiB7XG4gICAgY3NzbmFtZSA9IFwibGluZS1wbG90XCJcblxuICAgIF9kYXRhOiBUXG5cbiAgICBvcHRpb25zOiBDaGFydE9wdGlvbnMgPSB7XG4gICAgICAgIG1heFdpZHRoOiAzNTAsXG4gICAgICAgIG1heEhlaWdodDogMjUwLFxuICAgICAgICBtYXJnaW46IHsgdG9wOiAxMCwgcmlnaHQ6IDEwLCBib3R0b206IDMwLCBsZWZ0OiAzMCB9LFxuICAgICAgICBwYWQ6IHsgdG9wOiA1LCByaWdodDogMSwgYm90dG9tOiAxMCwgbGVmdDogMTUgfSxcbiAgICAgICAgeHJhbmdlOiBbMCwgNjAwXSxcbiAgICAgICAgeXJhbmdlOiBbMSwgMF0sXG4gICAgfVxuXG4gICAgZGVmYXVsdFhyYW5nZTogW251bWJlciwgbnVtYmVyXVxuXG4gICAgc2NhbGVzOiBDaGFydFNjYWxlcyA9IHt9XG5cbiAgICBzZWxzOiBHcmFwaFNlbHMgPSB7fVxuXG4gICAgcGF0aDogZDMuTGluZTxudW1iZXI+XG5cbiAgICBjb25zdHJ1Y3RvcihkM3BhcmVudDogRDNTZWwsIGV2ZW50SGFuZGxlcj86IFNpbXBsZUV2ZW50SGFuZGxlciwgb3B0aW9ucyA9IHt9KSB7XG4gICAgICAgIHN1cGVyKGQzcGFyZW50LCBldmVudEhhbmRsZXIsIG9wdGlvbnMpXG4gICAgICAgIHN1cGVyLmluaXRTVkcodGhpcy5vcHRpb25zLCBbXCJiZ1wiXSlcbiAgICAgICAgdGhpcy5iYXNlLmNsYXNzZWQodGhpcy5jc3NuYW1lLCB0cnVlKVxuICAgICAgICB0aGlzLmRlZmF1bHRYcmFuZ2UgPSB0aGlzLm9wdGlvbnMueHJhbmdlXG4gICAgICAgIHRoaXMuZGF0YSg8TGluZVRyYWNrZXI+e30pXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUGxvdCB0aGUgdmFsdWVzIG9mIGFsbCB4IGFjY29yZGluZyB0byB0aGUgZnVuY3Rpb25cbiAgICAgKiBcbiAgICAgKiBAcGFyYW0geCBBIGxpbnNwYWNlIG9mIHggdmFsdWVzIG92ZXIgd2hpY2ggdG8gcGxvdCBhIGN1cnZlXG4gICAgICovXG4gICAgcHJvdGVjdGVkIGFkZERhdGFLZXlfKGNsYXNzbmFtZTogc3RyaW5nKSB7XG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzXG4gICAgICAgIGlmICghUi5oYXMoY2xhc3NuYW1lLCB0aGlzLmRhdGEoKSkpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBBZGRpbmcga2V5OiAke2NsYXNzbmFtZX1gKTtcbiAgICAgICAgICAgIHRoaXMuZGF0YSgpW2NsYXNzbmFtZV0gPSB7XG4gICAgICAgICAgICAgICAgc2VsOiBzZWxmLmluaXRCYXNlTGluZShjbGFzc25hbWUpLFxuICAgICAgICAgICAgICAgIHZhbHM6IFtdXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjbGVhclBhdGhzKCkge1xuICAgICAgICB0aGlzLmRhdGEoUi5tYXAoZCA9PiBSLmFzc29jKCd2YWxzJywgW10sIGQpLCB0aGlzLmRhdGEoKSkpXG4gICAgfVxuXG4gICAgcGxvdFBhdGgoZDogQmFsbEhpc3RvcnksIHNjYWxlPykge1xuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICAgICAgdGhpcy5hZGREYXRhS2V5XyhkLmNsYXNzbmFtZSk7XG5cbiAgICAgICAgY29uc3Qgc2NhbGVyID0gKHNjYWxlID09IG51bGwpID8geCA9PiB4IDogc2NhbGVcblxuICAgICAgICBjb25zdCBjdXJyVmFscyA9IHRoaXMuZGF0YSgpW2QuY2xhc3NuYW1lXTtcbiAgICAgICAgY3VyclZhbHMudmFscy5wdXNoKHNjYWxlcihNYXRoLmFicyhkLngpKSk7XG5cbiAgICAgICAgLy8gc2xpZGluZyB4LWF4aXNcbiAgICAgICAgY29uc3QgbmV3WHJhbmdlID0gW01hdGgubWF4KDAsIGN1cnJWYWxzLnZhbHMubGVuZ3RoLXRoaXMub3B0aW9ucy54cmFuZ2VbMV0pLCBNYXRoLm1heChjdXJyVmFscy52YWxzLmxlbmd0aCx0aGlzLm9wdGlvbnMueHJhbmdlWzFdKV1cbiAgICAgICAgdGhpcy51cGRhdGVTY2FsZXMobmV3WHJhbmdlKVxuICAgICAgICB0aGlzLmNyZWF0ZVBhdGgoKSAvLyBEZXBlbmRzIG9uIHggc2NhbGVcblxuXG4gICAgICAgIGN1cnJWYWxzLnNlbC5kYXRhKFtjdXJyVmFsc10pXG4gICAgICAgICAgICAuam9pbihcInBhdGhcIilcbiAgICAgICAgICAgIC5jbGFzc2VkKGQuY2xhc3NuYW1lLCB0cnVlKVxuICAgICAgICAgICAgLmF0dHIoXCJkXCIsIGQgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBzZWxmLnBhdGgoZC52YWxzKVxuICAgICAgICAgICAgfSlcbiAgICB9XG5cbiAgICAvLyBMaXZlIHVwZGF0ZSB0aGUgeHJhbmdlXG4gICAgdXBkYXRlU2NhbGVzKHhyYW5nZSkge1xuICAgICAgICBjb25zdCBvcCA9IHRoaXMub3B0aW9uc1xuICAgICAgICB0aGlzLnNjYWxlcy54ID0gZDMuc2NhbGVMaW5lYXIoKS5kb21haW4oeHJhbmdlKS5yYW5nZShbMCwgb3Aud2lkdGhdKS5jbGFtcCh0cnVlKVxuICAgIH1cblxuICAgIHByaXZhdGUgaW5pdEJhc2VMaW5lKGNsYXNzbmFtZTogc3RyaW5nKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmxheWVycy5iZy5hcHBlbmQoXCJwYXRoXCIpXG4gICAgICAgICAgICAuY2xhc3NlZChjbGFzc25hbWUsIHRydWUpXG4gICAgICAgICAgICAuY2xhc3NlZCgnbGluZScsIHRydWUpXG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGNyZWF0ZVNjYWxlcygpIHtcbiAgICAgICAgY29uc3Qgb3AgPSB0aGlzLm9wdGlvbnNcbiAgICAgICAgdGhpcy5zY2FsZXMueCA9IGQzLnNjYWxlTGluZWFyKCkuZG9tYWluKG9wLnhyYW5nZSkucmFuZ2UoWzAsIG9wLndpZHRoXSkuY2xhbXAodHJ1ZSlcbiAgICAgICAgdGhpcy5zY2FsZXMueSA9IGQzLnNjYWxlTGluZWFyKCkuZG9tYWluKG9wLnlyYW5nZSkucmFuZ2UoWzAsIG9wLmhlaWdodF0pLmNsYW1wKHRydWUpXG4gICAgfVxuXG4gICAgaW5pdCgpIHtcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgICAgIGNvbnN0IG9wID0gdGhpcy5vcHRpb25zO1xuICAgICAgICBjb25zdCBzY2FsZXMgPSB0aGlzLnNjYWxlcztcbiAgICAgICAgY29uc3Qgc2VscyA9IHRoaXMuc2VscztcblxuICAgICAgICB0aGlzLmNyZWF0ZVNjYWxlcygpXG4gICAgICAgIHRoaXMuY3JlYXRlUGF0aCgpXG4gICAgICAgIHRoaXMuY3JlYXRlQXhlcygpXG4gICAgfVxuXG5cbiAgICBwcm90ZWN0ZWQgY3JlYXRlQXhlcygpIHtcbiAgICAgICAgY29uc3Qgc2VscyA9IHRoaXMuc2Vsc1xuICAgICAgICBjb25zdCBzY2FsZXMgPSB0aGlzLnNjYWxlc1xuICAgICAgICBjb25zdCBvcCA9IHRoaXMub3B0aW9uc1xuXG4gICAgICAgIC8vIENyZWF0ZSBheGVzXG4gICAgICAgIHNlbHMueGF4aXMgPSB0aGlzLmJhc2UuYXBwZW5kKFwiZ1wiKVxuICAgICAgICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcImF4aXMgYXhpcy0teFwiKVxuICAgICAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgU1ZHLnRyYW5zbGF0ZSgwLCBvcC5oZWlnaHQgLSBheGlzT2Zmc2V0KSlcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgIC5jYWxsKGQzLmF4aXNCb3R0b20oc2NhbGVzLngpLnRpY2tzKDQpLnRpY2tGb3JtYXQoXCJcIikpO1xuXG4gICAgICAgIHNlbHMueWF4aXMgPSB0aGlzLmJhc2UuYXBwZW5kKFwiZ1wiKVxuICAgICAgICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcImF4aXMgYXhpcy0teVwiKVxuICAgICAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgU1ZHLnRyYW5zbGF0ZSgwLCAtIGF4aXNPZmZzZXQpKVxuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgLmNhbGwoZDMuYXhpc0xlZnQoc2NhbGVzLnkpLnRpY2tzKDQpLnRpY2tGb3JtYXQoXCJcIikpO1xuXG4gICAgICAgIHRoaXMuYmFzZS5hcHBlbmQoXCJ0ZXh0XCIpXG4gICAgICAgICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBTVkcudHJhbnNsYXRlKG9wLndpZHRoIC8gMiwgb3AubWFyZ2luLnRvcCArIG9wLmhlaWdodCArIDEwKSlcbiAgICAgICAgICAgIC5zdHlsZShcInRleHQtYW5jaG9yXCIsIFwibWlkZGxlXCIpXG4gICAgICAgICAgICAudGV4dChcIlRpbWVcIilcblxuICAgICAgICB0aGlzLmJhc2UuYXBwZW5kKFwidGV4dFwiKVxuICAgICAgICAgICAgLnN0eWxlKFwidGV4dC1hbmNob3JcIiwgXCJtaWRkbGVcIilcbiAgICAgICAgICAgIC50ZXh0KFwiXFx1MDNCOCAtIFxcdTAzQjgqXCIpXG4gICAgICAgICAgICAuYXR0cihcInlcIiwgb3AucGFkLmxlZnQgLSBvcC5tYXJnaW4ubGVmdClcbiAgICAgICAgICAgIC5hdHRyKFwieFwiLCBvcC5wYWQudG9wIC0gKG9wLmhlaWdodCAvIDIpKVxuICAgICAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgU1ZHLnJvdGF0ZSgtOTApKVxuICAgIH1cblxuICAgIHByb3RlY3RlZCBjcmVhdGVQYXRoKCkge1xuICAgICAgICB0aGlzLnBhdGggPSBkMy5saW5lPG51bWJlcj4oKVxuICAgICAgICAgICAgLngoKGQ6IG51bWJlciwgaTogbnVtYmVyKSA9PiB0aGlzLnNjYWxlcy54KGkpKVxuICAgICAgICAgICAgLnkoKGQ6IG51bWJlciwgaTogbnVtYmVyKSA9PiB0aGlzLnNjYWxlcy55KGQpKVxuICAgICAgICAgICAgLmN1cnZlKGQzLmN1cnZlTGluZWFyKVxuICAgIH1cblxuICAgIGRhdGEoKTogVFxuICAgIGRhdGEodmFsOiBUKTogdGhpc1xuICAgIGRhdGEodmFsPykge1xuICAgICAgICBpZiAodmFsID09IG51bGwpIHJldHVybiB0aGlzLl9kYXRhXG4gICAgICAgIHRoaXMuX2RhdGEgPSB2YWw7XG4gICAgICAgIHJldHVybiB0aGlzXG4gICAgfVxuXG4gICAgcmVzZXRYcmFuZ2VfKCk6IHRoaXMge1xuICAgICAgICB0aGlzLm9wdGlvbnMueHJhbmdlID0gdGhpcy5kZWZhdWx0WHJhbmdlXG4gICAgICAgIHJldHVybiB0aGlzXG4gICAgfVxufSIsImltcG9ydCAqIGFzIGQzIGZyb20gJ2QzJ1xuaW1wb3J0IHsgYmFzZUxvc3MgfSBmcm9tICcuLi9Hb2xmTGFuZHNjYXBlcydcblxuZXhwb3J0IGNsYXNzIE1hbnVhbFVwZGF0ZXIge1xuICAgIGY6ICh4OiBudW1iZXIpID0+IG51bWJlclxuICAgIGRmOiAoeDogbnVtYmVyKSA9PiBudW1iZXJcblxuICAgIC8vIHEgPSAxL3EgaW4gdGhlIEludGVyZmFjZSAoZHVlIHRvIG5pY2UgcHJvcGVydGllcyBvZiB0aGlzIGRlZmluaXRpb24pIGlzIGEgZGlmZmVyZW50IHZhbHVlIHRoYW4gdGhpc1xuICAgIHE6IG51bWJlciAgIC8vIDAgLT4gMSwgd2hlcmUgMCBpcyBTR0QgYW5kIDEgaXMgTkdELiAwLjUgaXMgc3FydCBOR0QuIFtzdGVwID0gLSBldGEgKiBIIF4gKC0xL3EpICogZ10gKEggPSAwIHdoZW4gcT0wKVxuICAgIGV0YTogbnVtYmVyIC8vIGFrYSAnbGVhcm5pbmcgcmF0ZSdcblxuICAgIGNvbnN0cnVjdG9yKGYsIGRmLCBxID0gMCwgZXRhID0gMC4xKSB7XG4gICAgICAgIHRoaXMuZiA9IGY7XG4gICAgICAgIHRoaXMuZGYgPSBkZjtcbiAgICAgICAgdGhpcy5xID0gcTtcbiAgICAgICAgdGhpcy5ldGEgPSBldGE7XG4gICAgfVxuXG4gICAgLy8gQ2FsY3VsYXRlIGVycm9yIHNxdWFyZWQgb2YgdGhlIGJhc2UgZnVuY3Rpb25cbiAgICBsb3NzKHg6IG51bWJlcik6IG51bWJlciB7XG4gICAgICAgIHJldHVybiBiYXNlTG9zcyh0aGlzLmYoeCkpXG4gICAgfVxuXG4gICAgLy8gR3JhZGllbnQgYXQgeFxuICAgIGdyYWRpZW50KHg6IG51bWJlcik6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLmYoeCkgKiB0aGlzLmRmKHgpXG4gICAgfVxuXG4gICAgLy8gVGhlIHBvc2l0aXZlIHNlbWktZGVmaW5pdGUgaGVzc2lhbiBhdCB4XG4gICAgcHNkaGVzcyh4OiBudW1iZXIpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gTWF0aC5wb3codGhpcy5kZih4KSwgMilcbiAgICB9XG5cbiAgICB1cGRhdGVNb2RpZmllcih4OiBudW1iZXIpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gTWF0aC5wb3codGhpcy5kZih4KSwgMSAtICgyICogdGhpcy5xKSlcbiAgICB9XG5cbiAgICB1cGRhdGVBbXQoeDogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZih4KSAqIHRoaXMudXBkYXRlTW9kaWZpZXIoeClcbiAgICB9XG5cbiAgICAvLyBUaGUgYW1vdW50IHRvIHVwZGF0ZSBhdCB4IGdpdmVuIHRoZSBsZWFybmluZyByYXRlIGV0YVxuICAgIHN0ZXAoeDogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgICAgLy8gQ291bGQgdXNlIHBzZGhlc3MgaW4gdGhlIGVxdWF0aW9uIGJlbG93LCBidXQgZHVlIHRvIG51bWVyaWNhbCBpc3N1ZXMgdGhpcyBmb3JtdWxhdGlvbiBjb21wdXRlcyBtb3JlIHJlbGlhYmx5XG4gICAgICAgIHJldHVybiAtIHRoaXMuZXRhICogdGhpcy51cGRhdGVBbXQoeClcbiAgICB9XG5cbiAgICAvLyBHZXQgdGhlIG5leHQgeCB2YWx1ZSBhZnRlciB0YWtpbmcgYSBzdGVwXG4gICAgbmV4dCh4OiBudW1iZXIpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4geCArIHRoaXMuc3RlcCh4KVxuICAgIH1cbn1cblxuXG5leHBvcnQgY2xhc3MgTWFudWFsVXBkYXRlcjJEIHtcbiAgICBmOiAoeDogbnVtYmVyKSA9PiBudW1iZXJcbiAgICBkZjogKHg6IG51bWJlcikgPT4gbnVtYmVyXG5cbiAgICAvLyBxID0gMS9xIGluIHRoZSBJbnRlcmZhY2UgKGR1ZSB0byBuaWNlIHByb3BlcnRpZXMgb2YgdGhpcyBkZWZpbml0aW9uKSBpcyBhIGRpZmZlcmVudCB2YWx1ZSB0aGFuIHRoaXNcbiAgICBxOiBudW1iZXIgICAvLyAwIC0+IDEsIHdoZXJlIDAgaXMgU0dEIGFuZCAxIGlzIE5HRC4gMC41IGlzIHNxcnQgTkdELiBbc3RlcCA9IC0gZXRhICogSCBeICgtMS9xKSAqIGddIChIID0gMCB3aGVuIHE9MClcbiAgICBldGE6IG51bWJlciAvLyBha2EgJ2xlYXJuaW5nIHJhdGUnXG5cbiAgICBjb25zdHJ1Y3RvcihmLCBkZiwgcSA9IDAsIGV0YSA9IDAuMSkge1xuICAgICAgICB0aGlzLmYgPSBmO1xuICAgICAgICB0aGlzLmRmID0gZGY7XG4gICAgICAgIHRoaXMucSA9IHE7XG4gICAgICAgIHRoaXMuZXRhID0gZXRhO1xuICAgIH1cblxuICAgIC8vIENhbGN1bGF0ZSBlcnJvciBzcXVhcmVkIG9mIHRoZSBiYXNlIGZ1bmN0aW9uXG4gICAgbG9zcyh4OiBudW1iZXIpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gYmFzZUxvc3ModGhpcy5mKHgpKVxuICAgIH1cblxuICAgIC8vIEdyYWRpZW50IGF0IHhcbiAgICBncmFkaWVudCh4OiBudW1iZXIpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5mKHgpICogdGhpcy5kZih4KVxuICAgIH1cblxuICAgIC8vIFRoZSBwb3NpdGl2ZSBzZW1pLWRlZmluaXRlIGhlc3NpYW4gYXQgeFxuICAgIHBzZGhlc3MoeDogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIE1hdGgucG93KHRoaXMuZGYoeCksIDIpXG4gICAgfVxuXG4gICAgdXBkYXRlTW9kaWZpZXIoeDogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIE1hdGgucG93KHRoaXMuZGYoeCksIDEgLSAoMiAqIHRoaXMucSkpXG4gICAgfVxuXG4gICAgdXBkYXRlQW10KHg6IG51bWJlcik6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLmYoeCkgKiB0aGlzLnVwZGF0ZU1vZGlmaWVyKHgpXG4gICAgfVxuXG4gICAgLy8gVGhlIGFtb3VudCB0byB1cGRhdGUgYXQgeCBnaXZlbiB0aGUgbGVhcm5pbmcgcmF0ZSBldGFcbiAgICBzdGVwKHg6IG51bWJlcik6IG51bWJlciB7XG4gICAgICAgIC8vIENvdWxkIHVzZSBwc2RoZXNzIGluIHRoZSBlcXVhdGlvbiBiZWxvdywgYnV0IGR1ZSB0byBudW1lcmljYWwgaXNzdWVzIHRoaXMgZm9ybXVsYXRpb24gY29tcHV0ZXMgbW9yZSByZWxpYWJseVxuICAgICAgICByZXR1cm4gLSB0aGlzLmV0YSAqIHRoaXMudXBkYXRlQW10KHgpXG4gICAgfVxuXG4gICAgLy8gR2V0IHRoZSBuZXh0IHggdmFsdWUgYWZ0ZXIgdGFraW5nIGEgc3RlcFxuICAgIG5leHQoeDogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHggKyB0aGlzLnN0ZXAoeClcbiAgICB9XG59IiwiaW1wb3J0ICogYXMgZDMgZnJvbSAnZDMnXG5pbXBvcnQgeyBEM1NlbCwgbGluc3BhY2UgfSBmcm9tICcuLi91dGlsL3hkMydcbmltcG9ydCB7IFZlY3RvcjJEIH0gZnJvbSAnLi4vdHlwZXMnXG5pbXBvcnQgeyBTVkdPcHRpb25zLCBTVkdWaXNDb21wb25lbnQsIE1hcmdpbkluZm8gfSBmcm9tICcuLi91dGlsL1NWR1Zpc0NvbXBvbmVudCdcbmltcG9ydCB7IFNpbXBsZUV2ZW50SGFuZGxlciB9IGZyb20gJy4uL3V0aWwvU2ltcGxlRXZlbnRIYW5kbGVyJztcbmltcG9ydCB7IFNWRyB9IGZyb20gXCIuLi91dGlsL1NWR3BsdXNcIlxuaW1wb3J0IHsgTWFudWFsVXBkYXRlciB9IGZyb20gXCIuL01hbnVhbFVwZGF0ZXJcIlxuXG5pbnRlcmZhY2UgR3JhcGhPcHRpb25zIHtcbiAgICBtYXJnaW46IE1hcmdpbkluZm9cbiAgICBtYXhXaWR0aDogbnVtYmVyXG4gICAgbWF4SGVpZ2h0OiBudW1iZXJcbiAgICB3aWR0aD86IG51bWJlclxuICAgIGhlaWdodD86IG51bWJlclxuICAgIHhSYW5nZTogW251bWJlciwgbnVtYmVyXVxuICAgIHlSYW5nZTogW251bWJlciwgbnVtYmVyXVxufVxuXG5pbnRlcmZhY2UgU2NhbGVYWSB7XG4gICAgeDogZDMuU2NhbGVMaW5lYXI8bnVtYmVyLCBudW1iZXI+XG4gICAgeTogZDMuU2NhbGVMaW5lYXI8bnVtYmVyLCBudW1iZXI+XG59XG5cbmludGVyZmFjZSBHcmFwaFNjYWxlcyB7XG4gICAgdG9QeDogU2NhbGVYWSxcbiAgICB0b01hdGg6IFNjYWxlWFksXG59XG5cbmludGVyZmFjZSBHcmFwaFNlbHMge1xuICAgIHBhdGhzOiBEM1NlbFtdXG4gICAgY3Vyc29yRG90czogRDNTZWxbXVxuICAgIGN1cnNvckxpbmU6IEQzU2VsXG59XG5cbnR5cGUgREFUQSA9IG51bWJlcltdIC8vIExpc3Qgb2YgYWxwaGFzIGluIHk9YWxwaGEgKiB4XjJcblxuZXhwb3J0IGNsYXNzIFF1YWRyYXRpY1Bsb3RzIGV4dGVuZHMgU1ZHVmlzQ29tcG9uZW50PERBVEE+IHtcbiAgICBjc3NuYW1lID0gXCJxdWFkcmF0aWMtcGxvdHNcIlxuICAgIG1hc2tJZDogc3RyaW5nXG5cbiAgICBfZGF0YTogREFUQVxuXG4gICAgb3B0aW9uczogR3JhcGhPcHRpb25zID0ge1xuICAgICAgICAvLyBvcHRpb25zICA9IHsgXG4gICAgICAgIG1hcmdpbjogeyB0b3A6IDAsIHJpZ2h0OiAwLCBib3R0b206IDQwLCBsZWZ0OiAwIH0sXG4gICAgICAgIG1heFdpZHRoOiA0MDAsXG4gICAgICAgIG1heEhlaWdodDogMjUwLFxuICAgICAgICB4UmFuZ2U6IFstMywgM10sXG4gICAgICAgIHlSYW5nZTogWy0wLjA1LCA4LjgyXSxcbiAgICB9XG5cbiAgICBzZWxzOiBQYXJ0aWFsPEdyYXBoU2Vscz4gPSB7fVxuICAgIHRpbWVyOiBkMy5UaW1lclxuXG4gICAgY29uc3RydWN0b3IoZDNwYXJlbnQ6IEQzU2VsLCBldmVudEhhbmRsZXI/OiBTaW1wbGVFdmVudEhhbmRsZXIsIG9wdGlvbnMgPSB7fSwgSUQgPSAwKSB7XG4gICAgICAgIHN1cGVyKGQzcGFyZW50LCBldmVudEhhbmRsZXIsIG9wdGlvbnMsIElEKVxuICAgICAgICB0aGlzLm1hc2tJZCA9IGBsaW5lLW1hc2stJHt0aGlzLklEfWBcbiAgICAgICAgc3VwZXIuaW5pdFNWRyhvcHRpb25zKSAvLyBDYWxscyBpbml0IGluIHRoaXMgY2xhc3NcbiAgICAgICAgdGhpcy5iYXNlLmNsYXNzZWQodGhpcy5jc3NuYW1lLCB0cnVlKVxuICAgIH1cblxuICAgIGdldCB0b1B4U2NhbGVzKCk6IFNjYWxlWFkge1xuICAgICAgICBjb25zdCBvcCA9IHRoaXMub3B0aW9uc1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgeDogZDMuc2NhbGVMaW5lYXIoKVxuICAgICAgICAgICAgICAgIC5kb21haW4ob3AueFJhbmdlKVxuICAgICAgICAgICAgICAgIC5yYW5nZShbMCwgb3Aud2lkdGhdKSxcbiAgICAgICAgICAgIHk6IGQzLnNjYWxlTGluZWFyKClcbiAgICAgICAgICAgICAgICAuZG9tYWluKG9wLnlSYW5nZSlcbiAgICAgICAgICAgICAgICAucmFuZ2UoW29wLmhlaWdodCwgMF0pLFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgaW50b1B4KHY6IFZlY3RvcjJEKSB7XG4gICAgICAgIHJldHVybiB7IHg6IHRoaXMudG9QeFNjYWxlcy54KHYueCksIHk6IHRoaXMudG9QeFNjYWxlcy55KHYueSkgfVxuICAgIH1cblxuICAgIC8vIFRha2UgYSB2ZWN0b3IgaW4gdGhlIGNvb3JkaW5hdGUgc3lzdGVtIGFuZCByZXR1cm4gaXQgdG8gdGhlIG1hdGggY29vcmRpbmF0ZXNcbiAgICBpbnRvTWF0aCh2OiBWZWN0b3IyRCkge1xuICAgICAgICByZXR1cm4geyB4OiB0aGlzLnRvUHhTY2FsZXMueC5pbnZlcnQodi54KSwgeTogdGhpcy50b1B4U2NhbGVzLnkuaW52ZXJ0KHYueSkgfVxuICAgIH1cblxuICAgIC8vIFR1cm4gYSBudW1iZXIgaW50byBhIHZlY3RvclxuICAgIG51bTJ2ZWMoeDogbnVtYmVyKTogVmVjdG9yMkQge1xuICAgICAgICBjb25zdCBvcCA9IHRoaXMub3B0aW9uc1xuICAgICAgICAvLyByZXR1cm4geyB4OiB4LCB5OiBvcC5sYW5kc2NhcGUubG9zcyh4KSB9XG4gICAgICAgIHJldHVybiB7IHg6IHgsIHk6IHggKiogMiB9XG4gICAgfVxuXG4gICAgbGluZU1ha2VyKGY6ICh4OiBudW1iZXIpID0+IG51bWJlcikge1xuICAgICAgICByZXR1cm4gZDMubGluZTxudW1iZXI+KClcbiAgICAgICAgICAgIC54KChkOiBudW1iZXIsIGk6IG51bWJlcikgPT4gdGhpcy50b1B4U2NhbGVzLngoZCkpXG4gICAgICAgICAgICAueSgoZDogbnVtYmVyLCBpOiBudW1iZXIpID0+IHRoaXMudG9QeFNjYWxlcy55KGYoZCkpKVxuICAgIH1cblxuICAgIGluaXQoKSB7XG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuICAgICAgICBjb25zdCBvcCA9IHRoaXMub3B0aW9ucztcbiAgICAgICAgY29uc3Qgc2VscyA9IHRoaXMuc2VscztcblxuICAgICAgICB0aGlzLmJhc2VcbiAgICAgICAgICAgIC5hdHRyKCd3aWR0aCcsIG9wLm1heFdpZHRoKVxuICAgICAgICAgICAgLmF0dHIoJ2hlaWdodCcsIG9wLm1heEhlaWdodClcblxuICAgICAgICBPYmplY3Qua2V5cyh0aGlzLmxheWVycykuZm9yRWFjaChrID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGcgPSB0aGlzLmxheWVyc1trXVxuICAgICAgICAgICAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIGAke1NWRy50cmFuc2xhdGUob3AubWFyZ2luLmxlZnQsIG9wLm1hcmdpbi50b3ApfWApXG4gICAgICAgIH0pXG5cbiAgICAgICAgdGhpcy5sYXllcnMuYmcuYXBwZW5kKCdyZWN0JylcbiAgICAgICAgICAgIC5jbGFzc2VkKFwiYmctcmVjdFwiLCB0cnVlKVxuICAgICAgICAgICAgLmF0dHIoJ3dpZHRoJywgb3Aud2lkdGgpXG4gICAgICAgICAgICAuYXR0cignaGVpZ2h0Jywgb3AuaGVpZ2h0KVxuXG4gICAgICAgIC8vIGNvbnN0IGYgPSAoeDogbnVtYmVyKSA9PiAwLjUgKiAoeCAqKiAyKVxuXG4gICAgICAgIGNvbnN0IGZhYyA9IDEuNDtcbiAgICAgICAgY29uc3QgYWEgPSBbMSAvIGZhYywgMSwgZmFjXTtcbiAgICAgICAgLy8gY29uc3QgYWEgPSBbZmFjXTtcbiAgICAgICAgY29uc3QgdXBkYXRlcnMgPSBhYS5tYXAoYSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IE1hbnVhbFVwZGF0ZXIoXG4gICAgICAgICAgICAgICAgKHg6IG51bWJlcikgPT4gYSAqIHgsXG4gICAgICAgICAgICAgICAgKHg6IG51bWJlcikgPT4gYSxcbiAgICAgICAgICAgICAgICAxLFxuICAgICAgICAgICAgICAgIDAuMDEsXG4gICAgICAgICAgICApXG4gICAgICAgIH0pXG5cbiAgICAgICAgc2Vscy5wYXRocyA9IHVwZGF0ZXJzLm1hcCh1ID0+IHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmxheWVycy5tYWluLmFwcGVuZChcInBhdGhcIilcbiAgICAgICAgICAgICAgICAuZGF0dW0obGluc3BhY2Uob3AueFJhbmdlWzBdLCBvcC54UmFuZ2VbMV0sIDEwMCkpXG4gICAgICAgICAgICAgICAgLmNsYXNzZWQoXCJsaW5lLXBhdGhcIiwgdHJ1ZSlcbiAgICAgICAgICAgICAgICAuYXR0cignZCcsIGQgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5saW5lTWFrZXIoeCA9PiB1Lmxvc3MoeCkpKGQpXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcblxuICAgICAgICAvLyBDdXJzb3IgTGluZSBMb2dpY1xuICAgICAgICBzZWxzLmN1cnNvckxpbmUgPSB0aGlzLmJhc2UuYXBwZW5kKCdwYXRoJylcbiAgICAgICAgICAgIC5jbGFzc2VkKCdjdXJzb3ItbGluZScsIHRydWUpXG4gICAgICAgICAgICAuY2xhc3NlZCgnaGlkZGVuJywgdHJ1ZSlcblxuICAgICAgICBzZWxzLmN1cnNvckRvdHMgPSB1cGRhdGVycy5tYXAodSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5iYXNlLmFwcGVuZCgnY2lyY2xlJylcbiAgICAgICAgICAgICAgICAuY2xhc3NlZChcImN1cnNvci1kb3RcIiwgdHJ1ZSlcbiAgICAgICAgICAgICAgICAuYXR0cihcInJcIiwgXCIzcHhcIilcbiAgICAgICAgfSlcblxuICAgICAgICB0aGlzLmJhc2Uub24oJ21vdXNlbW92ZScsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGNvbnN0IG1vdXNlID0gZDMubW91c2UodGhpcylcbiAgICAgICAgICAgIHNlbHMuY3Vyc29yTGluZS5hdHRyKCdkJywgZDMubGluZSgpKFtbbW91c2VbMF0sIDBdLCBbbW91c2VbMF0sIG9wLmhlaWdodF1dKSlcblxuICAgICAgICAgICAgLy8gc2Vscy5jdXJzb3JEb3RzLmZvckVhY2goKGMsIGkpID0+IHtcbiAgICAgICAgICAgIC8vICAgICBjLmF0dHIoJ2N4JywgbW91c2VbMF0pXG4gICAgICAgICAgICAvLyAgICAgICAgIC5hdHRyKCdjeScsICgpID0+IHNlbGYudG9QeFNjYWxlcy55KHVwZGF0ZXJzW2ldLmxvc3Moc2VsZi50b1B4U2NhbGVzLnguaW52ZXJ0KG1vdXNlWzBdKSkpKVxuICAgICAgICAgICAgLy8gfSlcbiAgICAgICAgfSlcblxuICAgICAgICB0aGlzLmJhc2Uub24oJ21vdXNlb3V0JywgKCkgPT4ge1xuICAgICAgICAgICAgc2Vscy5jdXJzb3JMaW5lLmNsYXNzZWQoXCJoaWRkZW5cIiwgdHJ1ZSlcbiAgICAgICAgICAgIGlmIChzZWxmLnRpbWVyID09IG51bGwpIHNlbHMuY3Vyc29yRG90cy5mb3JFYWNoKGMgPT4gYy5jbGFzc2VkKFwiaGlkZGVuXCIsIHRydWUpKVxuICAgICAgICB9KVxuXG4gICAgICAgIHRoaXMuYmFzZS5vbignbW91c2VvdmVyJywgKCkgPT4ge1xuICAgICAgICAgICAgc2Vscy5jdXJzb3JMaW5lLmNsYXNzZWQoXCJoaWRkZW5cIiwgZmFsc2UpXG4gICAgICAgICAgICBpZiAoc2VsZi50aW1lciA9PSBudWxsKSBzZWxzLmN1cnNvckRvdHMuZm9yRWFjaChjID0+IGMuY2xhc3NlZChcImhpZGRlblwiLCBmYWxzZSkpXG4gICAgICAgIH0pXG5cbiAgICAgICAgdGhpcy5iYXNlLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGNvbnN0IG1vdXNlID0gZDMubW91c2UodGhpcylcbiAgICAgICAgICAgIGNvbnN0IHZhbCA9IHNlbGYudG9QeFNjYWxlcy54LmludmVydChtb3VzZVswXSlcbiAgICAgICAgICAgIHNlbHMuY3Vyc29yRG90cy5mb3JFYWNoKChjLCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgdSA9IHVwZGF0ZXJzW2ldXG4gICAgICAgICAgICAgICAgY29uc3QgeENsaWNrID0gc2VsZi50b1B4U2NhbGVzLnguaW52ZXJ0KG1vdXNlWzBdKVxuICAgICAgICAgICAgICAgIGMuYXR0cignY3gnLCBtb3VzZVswXSlcbiAgICAgICAgICAgICAgICBjLmF0dHIoJ2N5Jywgc2VsZi50b1B4U2NhbGVzLnkodS5sb3NzKHhDbGljaykpKVxuICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgaWYgKHNlbGYudGltZXIgPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHNlbGYudGltZXIgPSBkMy5pbnRlcnZhbCgodGltZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBzZWxzLmN1cnNvckRvdHMuZm9yRWFjaCgoYywgaSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdSA9IHVwZGF0ZXJzW2ldXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB4Tm93ID0gc2VsZi50b1B4U2NhbGVzLnguaW52ZXJ0KCtjLmF0dHIoJ2N4JykpXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB4TmV4dCA9IHUubmV4dCh4Tm93KVxuICAgICAgICAgICAgICAgICAgICAgICAgYy5hdHRyKCdjeCcsIHNlbGYudG9QeFNjYWxlcy54KHhOZXh0KSlcbiAgICAgICAgICAgICAgICAgICAgICAgIGMuYXR0cignY3knLCBzZWxmLnRvUHhTY2FsZXMueSh1Lmxvc3MoeE5leHQpKSlcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9LCAxMClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHNlbGYudGltZXIuc3RvcCgpXG4gICAgICAgICAgICAgICAgc2VsZi50aW1lciA9IG51bGxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBfcmVuZGVyKGRhdGE6IERBVEEpIHtcbiAgICAgICAgLy8gdGhpcy5wbG90RnVuY3NcbiAgICB9XG5cbiAgICBkYXRhKCk6IERBVEFcbiAgICBkYXRhKHZhbDogREFUQSk6IHRoaXNcbiAgICBkYXRhKHZhbD8pIHtcbiAgICAgICAgaWYgKHZhbCA9PSBudWxsKSByZXR1cm4gdGhpcy5fZGF0YVxuICAgICAgICByZXR1cm4gdGhpc1xuICAgIH1cbn0iLCJpbXBvcnQgeyBIVE1MVmlzQ29tcG9uZW50IH0gZnJvbSAnLi4vdXRpbC9IVE1MVmlzQ29tcG9uZW50J1xuaW1wb3J0ICogYXMgZDMgZnJvbSAnZDMnXG5pbXBvcnQgeyBEM1NlbCB9IGZyb20gJy4uL3V0aWwveGQzJ1xuaW1wb3J0IHsgQXJyYXkgfSBmcm9tICcuLi90eXBlcydcbmltcG9ydCAqIGFzIFIgZnJvbSAncmFtZGEnXG5pbXBvcnQgeyBTaW1wbGVFdmVudEhhbmRsZXIgfSBmcm9tICcuLi91dGlsL1NpbXBsZUV2ZW50SGFuZGxlcic7XG5pbXBvcnQgeyBTVkcgfSBmcm9tICcuLi91dGlsL1NWR3BsdXMnXG5pbXBvcnQgKiBhcyBuaiBmcm9tIFwibnVtanNcIlxuXG5pbnRlcmZhY2UgU2ltcGxlTmV0U2VscyB7XG4gIHN2ZzogRDNTZWxcbiAgbm9kZVZhbHM6IHtcbiAgICBuMDogRDNTZWxcbiAgICBuMTogRDNTZWxcbiAgICBuMjogRDNTZWxcbiAgfVxuICBsaW5lczoge1xuICAgIHcwOiBEM1NlbFxuICAgIHcxOiBEM1NlbFxuICB9XG4gIGxpbmVWYWxzOiB7XG4gICAgdzA6IEQzU2VsXG4gICAgdzE6IEQzU2VsXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFNpbXBsZU5ldCBleHRlbmRzIEhUTUxWaXNDb21wb25lbnQ8bnVsbD4ge1xuICBjc3NuYW1lID0gXCJzaW1wbGUtbmV0LXN2Z1wiXG4gIG9wdGlvbnMgPSB7fVxuICBzZWxzOlBhcnRpYWw8U2ltcGxlTmV0U2Vscz4gPSB7fVxuXG5cbiAgY29uc3RydWN0b3IoZDNwYXJlbnQ6IEQzU2VsLCBldmVudEhhbmRsZXI/OiBTaW1wbGVFdmVudEhhbmRsZXIsIG9wdGlvbnMgPSB7fSwgSUQgPSAwKSB7XG4gICAgc3VwZXIoZDNwYXJlbnQsIGV2ZW50SGFuZGxlciwgb3B0aW9ucywgSUQpXG4gICAgdGhpcy5iYXNlLmNsYXNzZWQodGhpcy5jc3NuYW1lLCB0cnVlKVxuICAgIHN1cGVyLmluaXRIVE1MKClcbiAgICB0aGlzLmluaXQoKVxuICB9XG5cbiAgZ2V0IHN0cm9rZVdpZHRoU2NhbGUoKTogZDMuU2NhbGVMaW5lYXI8bnVtYmVyLCBudW1iZXI+IHtcbiAgICAgIHJldHVybiBkMy5zY2FsZUxpbmVhcigpLnJhbmdlKFs0LjIsIDYwXSkuZG9tYWluKFswLCAxLjddKVxuICB9XG5cbiAgZ2V0IG9wYWNpdHlTY2FsZSgpOiBkMy5TY2FsZUxpbmVhcjxudW1iZXIsIG51bWJlcj4ge1xuICAgICAgcmV0dXJuIGQzLnNjYWxlTGluZWFyKCkucmFuZ2UoWzAuMiwgMV0pLmRvbWFpbihbMCwgMS43XSlcbiAgfVxuXG4gIGluaXQoKSB7XG4gICAgY29uc3Qgc2VscyA9IHRoaXMuc2Vsc1xuICAgIGNvbnN0IG9wcyA9IHRoaXMub3B0aW9uc1xuXG4gICAgY29uc3QgaHRtbENvbnRlbnQgPSBgXG4gICAgPHN2ZyB2aWV3Qm94PVwiMCAwIDI2NjAgNTU1XCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIGZpbGwtcnVsZT1cImV2ZW5vZGRcIiBjbGlwLXJ1bGU9XCJldmVub2RkXCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCIgc3Ryb2tlLW1pdGVybGltaXQ9XCI1XCI+XG4gICAgPGcgaWQ9XCJuZXQtdmFsdWVcIj5cbiAgICAgIDxwYXRoIGlkPVwibmV0LXZhbC0xLXJlY3RcIiBkPVwiTTE5OTguOCA2Ny42QTY1LjggNjUuOCAwIDAwMTkzMy4xIDJoLTE2My41YTY1LjggNjUuOCAwIDAwLTY1LjggNjUuN3YyNy44YTY1LjggNjUuOCAwIDAwNjUuOCA2NS44SDE5MzNhNjUuOCA2NS44IDAgMDA2NS43LTY1LjhWNjcuNnpcIiBmaWxsPVwiI2ZmZlwiIHN0cm9rZT1cIiMwMDBcIiBzdHJva2Utd2lkdGg9XCIzLjhcIi8+XG4gICAgICA8dGV4dCBpZD1cIm5ldC12YWwtMVwiIHg9XCIxODI2LjNcIiB5PVwiMTEyLjRcIiBmb250LWZhbWlseT1cIidJQk1QbGV4VGhhaS1TZW1pQm9sZCcsJ0lCTSBQbGV4IFRoYWknLHNhbnMtc2VyaWZcIiBmb250LXdlaWdodD1cIjYwMFwiIGZvbnQtc2l6ZT1cIjgzLjNcIiB0ZXh0LWFuY2hvcj1cIm1pZGRsZVwiPlxuICAgICAgICAwXG4gICAgICA8L3RleHQ+XG4gICAgICA8cGF0aCBpZD1cIm5ldC12YWwtMC1yZWN0XCIgZD1cIk05NDUuOCA2Ny42QTY1LjggNjUuOCAwIDAwODgwIDJINzE2LjVhNjUuOCA2NS44IDAgMDAtNjUuNyA2NS43djI3LjhhNjUuOCA2NS44IDAgMDA2NS43IDY1LjhoMTYzLjZhNjUuOCA2NS44IDAgMDA2NS43LTY1LjhWNjcuNnpcIiBmaWxsPVwiI2ZmZlwiIHN0cm9rZT1cIiMwMDBcIiBzdHJva2Utd2lkdGg9XCIzLjhcIi8+XG4gICAgICA8dGV4dCBpZD1cIm5ldC12YWwtMFwiIHg9XCI3NzMuM1wiIHk9XCIxMTIuNFwiIGZvbnQtZmFtaWx5PVwiJ0lCTVBsZXhUaGFpLVNlbWlCb2xkJywnSUJNIFBsZXggVGhhaScsc2Fucy1zZXJpZlwiIGZvbnQtd2VpZ2h0PVwiNjAwXCIgZm9udC1zaXplPVwiODMuM1wiIHRleHQtYW5jaG9yPVwibWlkZGxlXCI+XG4gICAgICAgIDBcbiAgICAgIDwvdGV4dD5cbiAgICA8L2c+XG4gICAgPGcgaWQ9XCJuZXQtbm9kZVwiIGZpbGw9XCIjZWJlYmViXCI+XG4gICAgICA8Y2lyY2xlIGN4PVwiMjc2LjJcIiBjeT1cIjI3OC4xXCIgcj1cIjI3Ni4yXCIvPlxuICAgICAgPGNpcmNsZSBjeD1cIjEzMzEuMVwiIGN5PVwiMjc4LjFcIiByPVwiMjc2LjJcIi8+XG4gICAgICA8Y2lyY2xlIGN4PVwiMjM4My4xXCIgY3k9XCIyNzguMVwiIHI9XCIyNzYuMlwiLz5cbiAgICA8L2c+XG4gICAgPGcgaWQ9XCJuZXQtbGluZVwiPlxuICAgICAgPHBhdGggaWQ9XCJuZXQtbGluZS0wXCIgZD1cIk01NTIuNSAyODAuMmg1MDIuNGEyIDIgMCAwMDAtNC4ySDU1Mi41YTIgMiAwIDAwMCA0LjJ6XCIgZmlsbD1cIm5vbmVcIiBzdHJva2U9XCIjMDAwXCIgc3Ryb2tlLXdpZHRoPVwiNC4yXCIgc3Ryb2tlLW1pdGVybGltaXQ9XCIxLjVcIi8+XG4gICAgICA8cGF0aCBpZD1cIm5ldC1saW5lLTFcIiBkPVwiTTE2MDcuMyAyNzguMWg0OTkuNVwiIGZpbGw9XCJub25lXCIgc3Ryb2tlPVwiIzAwMFwiIHN0cm9rZS13aWR0aD1cIjQuMlwiIHN0cm9rZS1taXRlcmxpbWl0PVwiMS41XCIvPlxuICAgIDwvZz5cbiAgICA8cGF0aCBpZD1cIk1KWC00LVRFWC1JLTc3XCIgZD1cIk04MDYuMiA0MDUuM2MwLTIuMyAxLTQuNCAzLTYuMyAyLjEtMiA0LjQtMyA2LjgtMyAyIDAgMy44LjkgNS40IDIuOCAxLjYgMiAyLjUgNSAyLjYgOS4yIDAgMy4yLTEgOS40LTMuMSAxOC42LTEuNiA2LTMgMTEtNC40IDE0LjlhOTYgOTYgMCAwMS01LjYgMTMgMzAgMzAgMCAwMS04LjkgMTEgMTkuNCAxOS40IDAgMDEtMTEuNiAzLjhjLTQuOCAwLTktLjktMTIuNi0yLjYtMy43LTEuNy02LjMtNC04LTdsLS40LjdjLTQuNSA2LTkuOCA4LjktMTYuMiA4LjlhMzMuMiAzMy4yIDAgMDEtMTUuNy00IDE1LjQgMTUuNCAwIDAxLTYtNi40IDIxLjIgMjEuMiAwIDAxLTIuMi0xMC4xIDczIDczIDAgMDE1LjUtMjMuNmMzLjctMTAgNS41LTE2LjIgNS42LTE5VjQwNGMwLS4zLS4yLS43LS42LTEuMS0uNC0uNS0xLS43LTEuOC0uN2gtLjZjLTIuNSAwLTQuOCAxLTYuOCAzLjEtMiAyLTMuNyA0LjMtNC45IDYuNmE0Mi43IDQyLjcgMCAwMC0yLjcgNi44Yy0uNiAyLjItMSAzLjMtMS4zIDMuNi0uMi4yLTEgLjMtMi42LjNINzE3Yy0uNy0uNy0xLTEuMS0xLTEuNWE3MS42IDcxLjYgMCAwMTUtMTIuOGMxLjYtMyA0LTUuOSA3LjEtOC4zIDMuMS0yLjUgNi42LTMuNyAxMC41LTMuNyA0LjYgMCA4LjIgMS4zIDEwLjcgNCAyLjQgMi43IDMuNyA1LjggMy43IDkuNCAwIDEuOS0xLjggNy43LTUuMyAxNy40YTcxLjMgNzEuMyAwIDAwLTUuNCAyMi41YzAgNSAxLjIgOC40IDMuNCAxMC41YTEzIDEzIDAgMDA4LjYgMy4yYzQuNiAwIDguNy0zLjMgMTIuMy05LjlsLjgtMS40di01LjJsLjEtMS4zLjItMS4xLjEtMS41YTg2LjQgODYuNCAwIDAwMS00LjhjLjEtLjkuNC0yLjIgMS0zLjkuNS0xLjcgMS0zLjQgMS4zLTUuMi4zLTEuNy45LTQgMS44LTYuOSAzLTEyLjMgNC45LTE4LjkgNS4zLTE5LjkgMS40LTIuOSAzLjctNC4zIDctNC4zIDIgMCAzLjQuNSA0LjEgMS42LjggMSAxLjIgMiAxLjMgMyAwIDEuNS0xLjUgOC4zLTQuNyAyMC43YTU4OC4yIDU4OC4yIDAgMDAtNS4xIDIxLjQgMzUgMzUgMCAwMC0uNCA1LjZ2MS4xYzAgMS43LjIgMy4yLjUgNC43LjQgMS41IDEuNCAzLjEgMy4xIDQuNyAxLjcgMS42IDQuMSAyLjUgNy4zIDIuNiA3LjYgMCAxMy43LTYuNiAxOC4yLTE5LjdhMTAwIDEwMCAwIDAwNS4yLTIwLjJjMC0zLjYtLjctNi40LTIuMS04LjQtMS40LTItMi44LTMuOC00LjItNS4yYTYuMyA2LjMgMCAwMS0yLjEtNC41elwiIGZpbGwtcnVsZT1cIm5vbnplcm9cIi8+XG4gICAgPHBhdGggaWQ9XCJNSlgtNC1URVgtTi0zMFwiIGQ9XCJNODM5LjEgNDQ1LjljNC4zLTYuMiAxMC4xLTkuMyAxNy41LTkuM2EyMS40IDIxLjQgMCAwMTE5LjkgMTMuNWMyLjggNi4zIDQuMiAxNSA0LjIgMjYgMCAxMS45LTEuNiAyMC45LTUgMjcuMWExOS41IDE5LjUgMCAwMS02LjIgNy43IDIwLjcgMjAuNyAwIDAxLTEyLjggNC4zYy0yIDAtNC0uMi02LS43YTIwIDIwIDAgMDEtNi45LTMuNmMtMi43LTItNC43LTQuNi02LjMtNy43LTMuMi02LjItNC45LTE1LjItNC45LTI3IDAtMTMuMyAyLjItMjMuNCA2LjUtMzAuM3ptMjUuNy0xLjRhMTAuOSAxMC45IDAgMDAtMTYuMyAwYy0yIDItMy4yIDQuNy0zLjggOC4yYTE2MiAxNjIgMCAwMC0uOSAyMmMwIDEyIC4zIDIwIDEgMjMuNy41IDMuOCAyIDYuOCA0IDkgMi4yIDIuMyA0LjggMy41IDggMy41IDMgMCA1LjYtMS4yIDcuNy0zLjUgMi4yLTIuMiAzLjYtNS40IDQuMS05LjUuNS00LjIuOC0xMS45IDEtMjMuMiAwLTExLS40LTE4LjMtMS0yMS44YTE2IDE2IDAgMDAtMy44LTguNHpcIiBmaWxsLXJ1bGU9XCJub256ZXJvXCIvPlxuICAgIDxwYXRoIGlkPVwiTUpYLTYtVEVYLUktNzdcIiBkPVwiTTE4NjEuMSA0MDUuM2MwLTIuMyAxLTQuNCAzLTYuMyAyLjEtMiA0LjQtMyA2LjktMyAxLjkgMCAzLjcuOSA1LjMgMi44IDEuNiAyIDIuNSA1IDIuNiA5LjIgMCAzLjItMSA5LjQtMyAxOC42LTEuNyA2LTMuMiAxMS00LjUgMTQuOWE5NiA5NiAwIDAxLTUuNiAxMyAzMCAzMCAwIDAxLTguOSAxMSAxOS40IDE5LjQgMCAwMS0xMS42IDMuOGMtNC44IDAtOS0uOS0xMi42LTIuNi0zLjctMS43LTYuMy00LTgtN2wtLjQuN2MtNC40IDYtOS44IDguOS0xNi4yIDguOWEzMy4yIDMzLjIgMCAwMS0xNS42LTQgMTUuNCAxNS40IDAgMDEtNi02LjQgMjEuMiAyMS4yIDAgMDEtMi4zLTEwLjEgNzMgNzMgMCAwMTUuNS0yMy42YzMuNy0xMCA1LjYtMTYuMiA1LjctMTlWNDA0YzAtLjMtLjMtLjctLjctMS4xLS40LS41LTEtLjctMS44LS43aC0uNmMtMi41IDAtNC43IDEtNi44IDMuMS0yIDItMy43IDQuMy00LjggNi42YTQyLjYgNDIuNiAwIDAwLTIuOCA2LjhjLS42IDIuMi0xIDMuMy0xLjMgMy42LS4yLjItMSAuMy0yLjYuM2gtMi4yYy0uNy0uNy0xLTEuMS0xLTEuNWE3MS43IDcxLjcgMCAwMTUtMTIuOGMxLjYtMyA0LTUuOSA3LjEtOC4zIDMuMS0yLjUgNi42LTMuNyAxMC41LTMuNyA0LjcgMCA4LjIgMS4zIDEwLjcgNHMzLjcgNS44IDMuNyA5LjRjMCAxLjktMS44IDcuNy01LjMgMTcuNGE3MS4zIDcxLjMgMCAwMC01LjQgMjIuNWMwIDUgMS4yIDguNCAzLjQgMTAuNWExMyAxMyAwIDAwOC42IDMuMmM0LjYgMCA4LjctMy4zIDEyLjMtOS45bC44LTEuNHYtNS4ybC4xLTEuMy4yLTEuMWMwLS41IDAtMSAuMi0xLjVhOTMgOTMgMCAwMDEtNC44YzAtLjkuNC0yLjIuOS0zLjkuNS0xLjcgMS0zLjQgMS4zLTUuMi4zLTEuNyAxLTQgMS44LTYuOSAzLTEyLjMgNC45LTE4LjkgNS4zLTE5LjkgMS40LTIuOSAzLjctNC4zIDctNC4zIDIgMCAzLjQuNSA0LjEgMS42LjggMSAxLjIgMiAxLjMgMyAwIDEuNS0xLjUgOC4zLTQuNiAyMC43YTU4NyA1ODcgMCAwMC01LjIgMjEuNGMtLjIgMS4xLS4zIDMtLjMgNS42djEuMWMwIDEuNy4xIDMuMi40IDQuNy40IDEuNSAxLjQgMy4xIDMuMSA0LjcgMS43IDEuNiA0LjIgMi41IDcuMyAyLjYgNy42IDAgMTMuNy02LjYgMTguMi0xOS43YTk5LjcgOTkuNyAwIDAwNS4yLTIwLjJjMC0zLjYtLjctNi40LTItOC40LTEuNS0yLTIuOS0zLjgtNC4zLTUuMmE2LjMgNi4zIDAgMDEtMi00LjV6XCIgZmlsbC1ydWxlPVwibm9uemVyb1wiLz5cbiAgICA8cGF0aCBpZD1cIk1KWC02LVRFWC1OLTMxXCIgZD1cIk0xOTA3LjQgNDQ2LjdsLTEuNS42LTQuNSAxLjFjLTIgLjQtNC4yLjYtNi43LjhoLTIuMXYtNS4zaDIuMWEzNy4yIDM3LjIgMCAwMDE2LjQtNC40YzEuMi0uOCAyLjItMS43IDMuMi0yLjUuMS0uMi42LS40IDEuMy0uNC43IDAgMS40LjMgMiAuN3Y2OC40Yy42LjYgMSAxIDEuNSAxYTc2LjQgNzYuNCAwIDAwOS44LjdoM3Y1LjNoLTEuM2MtMS42LS4yLTcuNy0uMy0xOC4yLS4zLTEwLjMgMC0xNi4zIDAtMTcuOS4zaC0xLjR2LTUuM2g3LjNhMjcuMSAyNy4xIDAgMDA0LjctLjRsMS0uMi42LS42LjctLjV2LTU5elwiIGZpbGwtcnVsZT1cIm5vbnplcm9cIi8+XG4gICAgPHRleHQgeD1cIjIxMC4zXCIgeT1cIjQ3My41XCIgZm9udC1mYW1pbHk9XCInSUJNUGxleFRoYWktTWVkaXVtJywnSUJNIFBsZXggVGhhaScsc2Fucy1zZXJpZlwiIGZvbnQtd2VpZ2h0PVwiNTAwXCIgZm9udC1zaXplPVwiNTBcIj5cbiAgICAgIElOUFVUXG4gICAgPC90ZXh0PlxuICAgIDx0ZXh0IHg9XCIyMjkyLjNcIiB5PVwiNDczLjVcIiBmb250LWZhbWlseT1cIidJQk1QbGV4VGhhaS1NZWRpdW0nLCdJQk0gUGxleCBUaGFpJyxzYW5zLXNlcmlmXCIgZm9udC13ZWlnaHQ9XCI1MDBcIiBmb250LXNpemU9XCI1MFwiPlxuICAgICAgT1VUUFVUXG4gICAgPC90ZXh0PlxuICAgIDxnIGlkPVwibmV0LWNlbGxcIiBmaWxsPVwiI2ZmZlwiIHN0cm9rZT1cIiMwMDBcIiBzdHJva2Utd2lkdGg9XCIzLjhcIj5cbiAgICAgIDxwYXRoIGQ9XCJNMjUzNi40IDE4Mi44YTYzIDYzIDAgMDAtNjMtNjNoLTE2OWE2MyA2MyAwIDAwLTYzIDYzdjE2NS44YTYzIDYzIDAgMDA2MyA2M2gxNjlhNjMgNjMgMCAwMDYzLTYzVjE4Mi44ek0xNDc4LjYgMTgyLjhhNjMgNjMgMCAwMC02My02M2gtMTY5YTYzIDYzIDAgMDAtNjMgNjN2MTY1LjhhNjMgNjMgMCAwMDYzIDYzaDE2OWE2MyA2MyAwIDAwNjMtNjNWMTgyLjh6TTQyMy43IDE3MC4zYTYzIDYzIDAgMDAtNjMtNjNoLTE2OWE2MyA2MyAwIDAwLTYzIDYzVjMzNmE2MyA2MyAwIDAwNjMgNjNoMTY5YTYzIDYzIDAgMDA2My02M1YxNzAuM3pcIi8+XG4gICAgPC9nPlxuICAgIDx0ZXh0IGlkPVwibmV0LW5vZGUtMlwiIHg9XCIyMzUxLjRcIiB5PVwiMzExLjlcIiBmb250LWZhbWlseT1cIidJQk1QbGV4VGhhaS1TZW1pQm9sZCcsJ0lCTSBQbGV4IFRoYWknLHNhbnMtc2VyaWZcIiBmb250LXdlaWdodD1cIjUwMFwiIGZvbnQtc2l6ZT1cIjEwMFwiIHRleHQtYW5jaG9yPVwibWlkZGxlXCI+XG4gICAgICAyXG4gICAgPC90ZXh0PlxuICAgIDx0ZXh0IGlkPVwibmV0LW5vZGUtMVwiIHg9XCIxMjkyLjFcIiB5PVwiMzExLjlcIiBmb250LWZhbWlseT1cIidJQk1QbGV4VGhhaS1TZW1pQm9sZCcsJ0lCTSBQbGV4IFRoYWknLHNhbnMtc2VyaWZcIiBmb250LXdlaWdodD1cIjUwMFwiIGZvbnQtc2l6ZT1cIjEwMFwiIHRleHQtYW5jaG9yPVwibWlkZGxlXCI+XG4gICAgICAxXG4gICAgPC90ZXh0PlxuICAgIDx0ZXh0IGlkPVwibmV0LW5vZGUtMFwiIHg9XCIyMzguN1wiIHk9XCIyOTkuNFwiIGZvbnQtZmFtaWx5PVwiJ0lCTVBsZXhUaGFpLVNlbWlCb2xkJywnSUJNIFBsZXggVGhhaScsc2Fucy1zZXJpZlwiIGZvbnQtd2VpZ2h0PVwiNTAwXCIgZm9udC1zaXplPVwiMTAwXCIgdGV4dC1hbmNob3I9XCJtaWRkbGVcIj5cbiAgICAgIDBcbiAgICA8L3RleHQ+XG4gICAgPC9zdmc+XG4gICAgYFxuXG4gICAgdGhpcy5iYXNlLmh0bWwoaHRtbENvbnRlbnQpXG4gICAgc2Vscy5zdmcgPSB0aGlzLmJhc2Uuc2VsZWN0KCdzdmcnKVxuICAgICAgLmF0dHIoJ3dpZHRoJywgXCIxMDAlXCIpXG4gICAgICAuYXR0cignaGVpZ2h0JywgXCIxMDAlXCIpXG5cbiAgICBzZWxzLmxpbmVzID0ge1xuICAgICAgdzA6IHRoaXMuYmFzZS5zZWxlY3QoXCIjbmV0LWxpbmUtMFwiKSxcbiAgICAgIHcxOiB0aGlzLmJhc2Uuc2VsZWN0KFwiI25ldC1saW5lLTFcIilcbiAgICB9XG5cbiAgICBzZWxzLmxpbmVWYWxzID0ge1xuICAgICAgdzA6IHRoaXMuYmFzZS5zZWxlY3QoXCIjbmV0LXZhbC0wXCIpLFxuICAgICAgdzE6IHRoaXMuYmFzZS5zZWxlY3QoXCIjbmV0LXZhbC0xXCIpLFxuICAgIH1cblxuICAgIHNlbHMubm9kZVZhbHMgPSB7XG4gICAgICBuMDogdGhpcy5iYXNlLnNlbGVjdChcIiNuZXQtbm9kZS0wXCIpLFxuICAgICAgbjE6IHRoaXMuYmFzZS5zZWxlY3QoXCIjbmV0LW5vZGUtMVwiKSxcbiAgICAgIG4yOiB0aGlzLmJhc2Uuc2VsZWN0KFwiI25ldC1ub2RlLTJcIiksXG4gICAgfVxuXG4gICAgc2Vscy5ub2RlVmFscy5uMC50ZXh0KFwiMVwiKVxuICAgIHNlbHMubm9kZVZhbHMubjEudGV4dChcIl9cIilcbiAgICBzZWxzLm5vZGVWYWxzLm4yLnRleHQoXCJfXCIpXG5cbiAgICBzZWxzLmxpbmVWYWxzLncwLnRleHQoXCJfXCIpXG4gICAgc2Vscy5saW5lVmFscy53MS50ZXh0KFwiX1wiKVxuXG4gIH1cblxuICBzZXRTdGF0ZSh2OiBBcnJheSkge1xuICAgIGNvbnN0IHNlbHMgPSB0aGlzLnNlbHNcblxuICAgIGNvbnN0IHcwID0gdi5nZXQoMClcbiAgICBjb25zdCB3MSA9IHYuZ2V0KDEpXG5cbiAgICBzZWxzLmxpbmVWYWxzLncwLnRleHQodzAudG9GaXhlZCgyKSlcbiAgICBzZWxzLmxpbmVWYWxzLncxLnRleHQodzEudG9GaXhlZCgyKSlcblxuICAgIHNlbHMubm9kZVZhbHMubjEudGV4dCh3MC50b0ZpeGVkKDIpKVxuICAgIHNlbHMubm9kZVZhbHMubjIudGV4dCgodzAgKiB3MSkudG9GaXhlZCgyKSlcblxuICAgIHNlbHMubGluZXMudzBcbiAgICAgIC5hdHRyKFwic3Ryb2tlLXdpZHRoXCIsIHRoaXMuc3Ryb2tlV2lkdGhTY2FsZSh3MCkpXG4gICAgICAuYXR0cihcIm9wYWNpdHlcIiwgdGhpcy5vcGFjaXR5U2NhbGUodzApKVxuXG4gICAgc2Vscy5saW5lcy53MVxuICAgICAgLmF0dHIoXCJzdHJva2Utd2lkdGhcIiwgdGhpcy5zdHJva2VXaWR0aFNjYWxlKHcxKSlcbiAgICAgIC5hdHRyKFwib3BhY2l0eVwiLCB0aGlzLm9wYWNpdHlTY2FsZSh3MSkpXG4gICAgXG4gIH1cblxuICAvLyBUTyBrZWVwIHRoZSBBUEkgY29uc2lzdGVudC5cbiAgZGF0YSgpOiBudWxsXG4gIGRhdGEodmFsOiBudWxsKTogdGhpc1xuICBkYXRhKHZhbD8pIHtcbiAgICByZXR1cm4gbnVsbFxuICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ==
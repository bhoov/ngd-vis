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
const defaultErr = fv => fv;
const defaultLoss = (err) => numjs__WEBPACK_IMPORTED_MODULE_1__["sum"](numjs__WEBPACK_IMPORTED_MODULE_1__["divide"](numjs__WEBPACK_IMPORTED_MODULE_1__["power"](err, 2), 2));
const defaultPlotting = loss => loss;
const defaultStep2Lr = d3__WEBPACK_IMPORTED_MODULE_0__["scaleLinear"]().domain([0, 0.8]).range([0.001, 0.5]);
class BaseUpdater2D {
    constructor(options = {}) {
        this.op = {
            //@ts-ignore
            f: defaultF,
            //@ts-ignore
            df: defaultDf,
            error: defaultErr,
            forPlotting: defaultPlotting,
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
    plotF(v) {
        return this.op.forPlotting(this.loss(v));
    }
    gradient(v) {
        const loss = this.loss(v);
        const df = this.op.df(v);
        const g = numjs__WEBPACK_IMPORTED_MODULE_1__["multiply"](df, loss);
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
/*! exports provided: bumpy, landscapes2d */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bumpy", function() { return bumpy; });
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
        f: (v) => v.get(0) * v.get(1),
        df: (v) => numjs__WEBPACK_IMPORTED_MODULE_0__["array"]([v.get(1), v.get(0)]),
        error: fv => fv - 1,
        loss: x => x,
        forPlotting: loss => loss,
        updaterClass: _SimpleNetUpdater__WEBPACK_IMPORTED_MODULE_2__["SimpleNetUpdater"],
        colorScale: d3__WEBPACK_IMPORTED_MODULE_1__["scaleLinear"]()
            .domain([-1, -0.1, 1.6])
            //@ts-ignore
            .range(["white", "steelblue", "white"])
            //@ts-ignore
            .interpolate(d3__WEBPACK_IMPORTED_MODULE_1__["interpolateRgb"].gamma(2.2)),
        xrange: [0, 1.6],
        yrange: [0, 1.6],
        nContours: 20,
    },
    // Broken CHain Net Landscape using normal Updater 2D (doesn't handle (2,1) shaped Jac)
    ChainNet: {
        name: "ChainNet",
        f: (v) => Math.pow(v.get(0), 2) * v.get(1),
        // df: (v: tp.Array) => nj.array([[v.get(0)], [v.get(1)]]),
        df: (v) => numjs__WEBPACK_IMPORTED_MODULE_0__["array"]([[v.get(0), 0], [0, v.get(1)]]),
        error: fv => fv - 1,
        loss: x => x,
        forPlotting: loss => loss,
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
        error: fv => fv,
        loss: (err) => numjs__WEBPACK_IMPORTED_MODULE_0__["sum"](numjs__WEBPACK_IMPORTED_MODULE_0__["divide"](numjs__WEBPACK_IMPORTED_MODULE_0__["power"](err, 2), 2)),
        forPlotting: loss => Math.log(1 + loss),
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
        forPlotting: loss => Math.log(1 + loss),
        updaterClass: _Updater2D__WEBPACK_IMPORTED_MODULE_3__["Updater2D"],
        colorScale: d3__WEBPACK_IMPORTED_MODULE_1__["scalePow"]()
            .exponent(0.5)
            .domain([0, 100])
            //@ts-ignore
            .range(["steelblue", "white"])
            //@ts-ignore
            .interpolate(d3__WEBPACK_IMPORTED_MODULE_1__["interpolateRgb"].gamma(2.2)),
        xrange: [1.5, 8.4],
        yrange: [3, 10.5],
        nContours: 20,
        nx: 12,
        ny: 12,
        eta: 0.001,
        step2lr: d3__WEBPACK_IMPORTED_MODULE_1__["scaleLinear"]().domain([0, 0.05]).range([0.0001, 0.8])
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
const defaultError = fv => fv;
const defaultLoss = err => numjs__WEBPACK_IMPORTED_MODULE_1__["sum"](numjs__WEBPACK_IMPORTED_MODULE_1__["divide"](numjs__WEBPACK_IMPORTED_MODULE_1__["power"](err, 2), 2));
const defaultPlotting = loss => loss;
function getOrthMatrix(S) {
    const theta = 0.5 * Math.atan2(S.get(0, 1) + S.get(1, 0), S.get(0, 0) - S.get(1, 1));
    const cos = Math.cos(theta);
    const sin = Math.sin(theta);
    return numjs__WEBPACK_IMPORTED_MODULE_1__["array"]([[cos, -sin], [sin, cos]]);
}
// Reconstruct from SVD using vector 'd' representing diagonals of D
function reconstructJac(U, d, V) {
    const D = numjs__WEBPACK_IMPORTED_MODULE_1__["array"]([[d.get(0), 0], [0, d.get(1)]]);
    const preFac = numjs__WEBPACK_IMPORTED_MODULE_1__["dot"](U, D);
    const out = numjs__WEBPACK_IMPORTED_MODULE_1__["dot"](preFac, V.T);
    return out;
}
// Compute SVD of a 2D matrix M
function SVD2d(M) {
    const U = getOrthMatrix(numjs__WEBPACK_IMPORTED_MODULE_1__["dot"](M, M.T));
    let V = getOrthMatrix(numjs__WEBPACK_IMPORTED_MODULE_1__["dot"](M.T, M));
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
            forPlotting: defaultPlotting,
            q: 0,
            eta: 0.1,
            step2lr: defaultStep2Lr,
        };
        this.updateOptions(options);
    }
    dv(v) {
        const jac = this.op.df(v);
        const err = this.error(v);
        const { U, d, V } = SVD2d(jac);
        const dq = numjs__WEBPACK_IMPORTED_MODULE_1__["multiply"](d, numjs__WEBPACK_IMPORTED_MODULE_1__["power"](d, -2 * this.op.q));
        const jac2 = reconstructJac(U, dq, V);
        // const jac2_og = reconstructJac(U, d, V)
        // console.log(nj.subtract(jac, jac2_og));
        const out = numjs__WEBPACK_IMPORTED_MODULE_1__["dot"](jac2, err);
        return out;
    }
    lr(v) {
        const dv = this.dv(v);
        const eps = 1e-10;
        //@ts-ignore
        const lr = numjs__WEBPACK_IMPORTED_MODULE_1__["multiply"](dv, this.lrScale).divide(Math.sqrt(Math.abs(this.loss(v)) + eps)); //.divide(absLoss + eps)
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
/* harmony import */ var numjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! numjs */ "./node_modules/numjs/src/index.js");
/* harmony import */ var numjs__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(numjs__WEBPACK_IMPORTED_MODULE_15__);
















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
    const v = numjs__WEBPACK_IMPORTED_MODULE_15__["array"]([4.184525, 4.597896]);
    const jac = numjs__WEBPACK_IMPORTED_MODULE_15__["array"]([[-3.548378, 28.623698], [-2.804393, -28.237896]]);
    const myJac = _Landscapes2D__WEBPACK_IMPORTED_MODULE_13__["bumpy"].jacobian(v);
    console.log("My: ", myJac);
    console.log("Theirs: ", jac);
    console.log(numjs__WEBPACK_IMPORTED_MODULE_15__["subtract"](jac, myJac));
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
    plotGolfHole3Ball();
    plotGolfHoleSlider();
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
            const loss = op.updater.plotF(numjs__WEBPACK_IMPORTED_MODULE_8__["array"]([x, y]));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nzcy9tYWluLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy90cy9CYXNlVXBkYXRlcjJELnRzIiwid2VicGFjazovLy8uL3NyYy90cy9Hb2xmTGFuZHNjYXBlcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHMvTGFuZHNjYXBlTG9zcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHMvTGFuZHNjYXBlczJELnRzIiwid2VicGFjazovLy8uL3NyYy90cy9TaW1wbGVOZXRVcGRhdGVyLnRzIiwid2VicGFjazovLy8uL3NyYy90cy9VcGRhdGVyMkQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RzL21haW4udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RzL3Bsb3R0aW5nLnRzIiwid2VicGFjazovLy8uL3NyYy90cy91dGlsL0NoYXJ0MmRWaXNDb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RzL3V0aWwvSFRNTFZpc0NvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHMvdXRpbC9TVkdWaXNDb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RzL3V0aWwvU1ZHcGx1cy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHMvdXRpbC9TaW1wbGVFdmVudEhhbmRsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RzL3V0aWwvVUlkLnRzIiwid2VicGFjazovLy8uL3NyYy90cy91dGlsL1Zpc0NvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHMvdXRpbC94ZDMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RzL3Zpcy9HZW5lcmFsQ29udG91clBsb3QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RzL3Zpcy9Hb2xmQmFsbC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHMvdmlzL0dvbGZIb2xlMUQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RzL3Zpcy9Hb2xmTG9zc2VzLnRzIiwid2VicGFjazovLy8uL3NyYy90cy92aXMvR29sZlhEaXN0LnRzIiwid2VicGFjazovLy8uL3NyYy90cy92aXMvTWFudWFsVXBkYXRlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHMvdmlzL1F1YWRyYXRpY1Bsb3RzLnRzIiwid2VicGFjazovLy8uL3NyYy90cy92aXMvU2ltcGxlTmV0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLFFBQVEsb0JBQW9CO1FBQzVCO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsaUJBQWlCLDRCQUE0QjtRQUM3QztRQUNBO1FBQ0Esa0JBQWtCLDJCQUEyQjtRQUM3QztRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7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QUFFO1FBQ0YsSUFBSSxFQUFFLE1BQU07UUFDWixDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBQyxJQUFJLENBQUM7UUFDekIsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUk7UUFDL0MsTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUM7UUFDN0IsTUFBTSxFQUFFLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQztRQUNoQixJQUFJLEVBQUUsUUFBUTtLQUNqQjtJQUNELEtBQUssRUFBRTtRQUNILElBQUksRUFBRSxPQUFPO1FBQ2IsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUM7UUFDckosRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUUsR0FBRyxJQUFJO1FBQ3RPLE1BQU0sRUFBRSxDQUFDLENBQUMsSUFBSSxHQUFHLElBQUksRUFBRSxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ25DLE1BQU0sRUFBRSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUM7UUFDaEIsSUFBSSxFQUFFLFFBQVE7S0FDakI7SUFDRCxPQUFPLEVBQUU7UUFDTCxJQUFJLEVBQUUsU0FBUztRQUNmLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzNELEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDbkQsTUFBTSxFQUFFLENBQUMsQ0FBQyxFQUFFLEdBQUcsSUFBSSxFQUFF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QztBQUM3RyxNQUFNLFlBQVksR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUU7QUFDN0IsTUFBTSxXQUFXLEdBQUcsR0FBRyxDQUFDLEVBQUUsQ0FBQyx5Q0FBTSxDQUFDLDRDQUFTLENBQUMsMkNBQVEsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDakUsTUFBTSxlQUFlLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJO0FBYXBDLFNBQVMsYUFBYSxDQUFDLENBQUM7SUFDcEIsTUFBTSxLQUFLLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUM7SUFDaEYsTUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUM7SUFDM0IsTUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUM7SUFDM0IsT0FBTywyQ0FBUSxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO0FBQzlDLENBQUM7QUFJRCxvRUFBb0U7QUFDcEUsU0FBUyxjQUFjLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDO0lBQzNCLE1BQU0sQ0FBQyxHQUFHLDJDQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDbEQsTUFBTSxNQUFN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QyxDQUFDO0lBRTNDLENBQUM7SUFLRCxJQUFJLENBQUMsR0FBSTtRQUNQLE9BQU8sSUFBSTtJQUNiLENBQUM7Q0FDRiIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG4gXHRmdW5jdGlvbiB3ZWJwYWNrSnNvbnBDYWxsYmFjayhkYXRhKSB7XG4gXHRcdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG4gXHRcdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG4gXHRcdHZhciBleGVjdXRlTW9kdWxlcyA9IGRhdGFbMl07XG5cbiBcdFx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG4gXHRcdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuIFx0XHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdO1xuIFx0XHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcbiBcdFx0XHR9XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcbiBcdFx0fVxuIFx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGlmKHBhcmVudEpzb25wRnVuY3Rpb24pIHBhcmVudEpzb25wRnVuY3Rpb24oZGF0YSk7XG5cbiBcdFx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG4gXHRcdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuIFx0XHR9XG5cbiBcdFx0Ly8gYWRkIGVudHJ5IG1vZHVsZXMgZnJvbSBsb2FkZWQgY2h1bmsgdG8gZGVmZXJyZWQgbGlzdFxuIFx0XHRkZWZlcnJlZE1vZHVsZXMucHVzaC5hcHBseShkZWZlcnJlZE1vZHVsZXMsIGV4ZWN1dGVNb2R1bGVzIHx8IFtdKTtcblxuIFx0XHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIGFsbCBjaHVua3MgcmVhZHlcbiBcdFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4gXHR9O1xuIFx0ZnVuY3Rpb24gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKSB7XG4gXHRcdHZhciByZXN1bHQ7XG4gXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHR2YXIgZGVmZXJyZWRNb2R1bGUgPSBkZWZlcnJlZE1vZHVsZXNbaV07XG4gXHRcdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG4gXHRcdFx0Zm9yKHZhciBqID0gMTsgaiA8IGRlZmVycmVkTW9kdWxlLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHR2YXIgZGVwSWQgPSBkZWZlcnJlZE1vZHVsZVtqXTtcbiBcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tkZXBJZF0gIT09IDApIGZ1bGZpbGxlZCA9IGZhbHNlO1xuIFx0XHRcdH1cbiBcdFx0XHRpZihmdWxmaWxsZWQpIHtcbiBcdFx0XHRcdGRlZmVycmVkTW9kdWxlcy5zcGxpY2UoaS0tLCAxKTtcbiBcdFx0XHRcdHJlc3VsdCA9IF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gZGVmZXJyZWRNb2R1bGVbMF0pO1xuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdHJldHVybiByZXN1bHQ7XG4gXHR9XG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4gXHQvLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbiBcdC8vIFByb21pc2UgPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHRcIm1haW5cIjogMFxuIFx0fTtcblxuIFx0dmFyIGRlZmVycmVkTW9kdWxlcyA9IFtdO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHR2YXIganNvbnBBcnJheSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSB8fCBbXTtcbiBcdHZhciBvbGRKc29ucEZ1bmN0aW9uID0ganNvbnBBcnJheS5wdXNoLmJpbmQoanNvbnBBcnJheSk7XG4gXHRqc29ucEFycmF5LnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjaztcbiBcdGpzb25wQXJyYXkgPSBqc29ucEFycmF5LnNsaWNlKCk7XG4gXHRmb3IodmFyIGkgPSAwOyBpIDwganNvbnBBcnJheS5sZW5ndGg7IGkrKykgd2VicGFja0pzb25wQ2FsbGJhY2soanNvbnBBcnJheVtpXSk7XG4gXHR2YXIgcGFyZW50SnNvbnBGdW5jdGlvbiA9IG9sZEpzb25wRnVuY3Rpb247XG5cblxuIFx0Ly8gYWRkIGVudHJ5IG1vZHVsZSB0byBkZWZlcnJlZCBsaXN0XG4gXHRkZWZlcnJlZE1vZHVsZXMucHVzaChbXCIuL3NyYy9pbmRleC50c1wiLFwidmVuZG9yXCJdKTtcbiBcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gcmVhZHlcbiBcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW5kZXguaHRtbFwiOyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImltcG9ydCB7bWFpbn0gZnJvbSAnLi90cy9tYWluJ1xuXG5pbXBvcnQgXCIhZmlsZS1sb2FkZXI/bmFtZT1pbmRleC5odG1sIS4vaW5kZXguaHRtbFwiO1xuaW1wb3J0IFwiLi9jc3MvbWFpbi5zY3NzXCJcblxubWFpbigpIiwiaW1wb3J0ICogYXMgZDMgZnJvbSAnZDMnXG5pbXBvcnQgKiBhcyBuaiBmcm9tIFwibnVtanNcIlxuaW1wb3J0ICogYXMgdHAgZnJvbSBcIi4vdHlwZXNcIlxuaW1wb3J0IHsgQXJyYXkgfSBmcm9tIFwiLi90eXBlc1wiXG5cbi8vIGNvbnN0IGRlZmF1bHRFcnJvckZ1bmN0aW9uID0gKHY6IEFycmF5KSA9PiB2LmdldCgwKSAqIHYuZ2V0KDEpIC0gMVxuY29uc3QgZGVmYXVsdEYgPSAodjogQXJyYXkpID0+IHtcbiAgICAvL0B0cy1pZ25vcmVcbiAgICByZXR1cm4gbmouZG90KG5qLmFycmF5KFtbMSwgMl0sIFsyLCAxXV0pLCB2KVxufVxuY29uc3QgZGVmYXVsdERmID0gKHY6IEFycmF5KSA9PiBuai5hcnJheShbWzEsIDJdLCBbMiwgMV1dKVxuY29uc3QgZGVmYXVsdEVyciA9IGZ2ID0+IGZ2XG5jb25zdCBkZWZhdWx0TG9zcyA9IChlcnI6IEFycmF5KSA9PiBuai5zdW0obmouZGl2aWRlKG5qLnBvd2VyKGVyciwgMiksIDIpKVxuY29uc3QgZGVmYXVsdFBsb3R0aW5nID0gbG9zcyA9PiBsb3NzXG5jb25zdCBkZWZhdWx0U3RlcDJMcjogZDMuU2NhbGVMaW5lYXI8bnVtYmVyLCBudW1iZXI+ID0gZDMuc2NhbGVMaW5lYXIoKS5kb21haW4oWzAsIDAuOF0pLnJhbmdlKFswLjAwMSwgMC41XSlcblxuaW50ZXJmYWNlIFVwZGF0ZXJPcHRpb25zIHtcbiAgICBmOiB0cC5NYXBGdW5jdGlvblxuICAgIGRmOiB0cC5NYXBGdW5jdGlvblxuICAgIGVycm9yXG4gICAgbG9zczogdHAuUmVkdWNlRnVuY3Rpb25cbiAgICBmb3JQbG90dGluZ1xuICAgIHE6IG51bWJlciAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAwIC0+IDEsIHdoZXJlIDAgaXMgU0dEIGFuZCAxIGlzIE5HRC4gMC41IGlzIHNxcnQgTkdELiBbc3RlcCA9IC0gZXRhICogSCBeICgtMS9xKSAqIGddIChIID0gMCB3aGVuIHE9MClcbiAgICBldGE6IG51bWJlciAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gYWthICdsZWFybmluZyByYXRlJ1xuICAgIHN0ZXAybHI6IGQzLlNjYWxlTGluZWFyPG51bWJlciwgbnVtYmVyPlxufVxuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQmFzZVVwZGF0ZXIyRCB7XG4gICAgb3A6IFVwZGF0ZXJPcHRpb25zID0ge1xuICAgICAgICAvL0B0cy1pZ25vcmVcbiAgICAgICAgZjogZGVmYXVsdEYsXG4gICAgICAgIC8vQHRzLWlnbm9yZVxuICAgICAgICBkZjogZGVmYXVsdERmLFxuICAgICAgICBlcnJvcjogZGVmYXVsdEVycixcbiAgICAgICAgZm9yUGxvdHRpbmc6IGRlZmF1bHRQbG90dGluZyxcbiAgICAgICAgcTogMCxcbiAgICAgICAgZXRhOiAwLjEsXG4gICAgICAgIHN0ZXAybHI6IGRlZmF1bHRTdGVwMkxyLFxuICAgICAgICBsb3NzOiBkZWZhdWx0TG9zcyxcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zOiBQYXJ0aWFsPFVwZGF0ZXJPcHRpb25zPj17fSkge1xuICAgICAgICB0aGlzLnVwZGF0ZU9wdGlvbnMob3B0aW9ucylcbiAgICB9XG5cbiAgICB1cGRhdGVPcHRpb25zKG9wdGlvbnM6IFBhcnRpYWw8VXBkYXRlck9wdGlvbnM+KSB7XG4gICAgICAgIE9iamVjdC5rZXlzKG9wdGlvbnMpLmZvckVhY2goayA9PiB0aGlzLm9wW2tdID0gb3B0aW9uc1trXSk7XG4gICAgfVxuXG4gICAgZXRhKCk6IG51bWJlclxuICAgIGV0YSh2YWw6IG51bWJlcik6IHRoaXNcbiAgICBldGEodmFsPykge1xuICAgICAgICBpZiAodmFsID09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm9wLmV0YVxuICAgICAgICB9XG4gICAgICAgIHRoaXMub3AuZXRhID0gdmFsXG4gICAgICAgIHJldHVybiB0aGlzXG4gICAgfVxuXG4gICAgcSgpOiBudW1iZXJcbiAgICBxKHZhbDogbnVtYmVyKTogdGhpc1xuICAgIHEodmFsPykge1xuICAgICAgICBpZiAodmFsID09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm9wLnFcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm9wLnEgPSB2YWxcbiAgICAgICAgcmV0dXJuIHRoaXNcbiAgICB9XG5cbiAgICBzdGVwMmxyKCk6IGQzLlNjYWxlTGluZWFyPG51bWJlciwgbnVtYmVyPlxuICAgIHN0ZXAybHIodmFsOiBkMy5TY2FsZUxpbmVhcjxudW1iZXIsIG51bWJlcj4pOiB0aGlzXG4gICAgc3RlcDJscih2YWw/KSB7XG4gICAgICAgIGlmICh2YWwgPT0gbnVsbCkgeyByZXR1cm4gdGhpcy5vcC5zdGVwMmxyIH1cbiAgICAgICAgdGhpcy5vcC5zdGVwMmxyID0gdmFsXG4gICAgICAgIHJldHVybiB0aGlzXG4gICAgfVxuXG4gICAgLy8gQW1vdW50IHRvIHNjYWxlIHNpemUgb2YgbGVhcm5pbmcgcmF0ZSBhcnJvd3NcbiAgICBnZXQgbHJTY2FsZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMub3Auc3RlcDJscih0aGlzLm9wLmV0YSlcbiAgICB9XG5cbiAgICBlcnJvcih2OiBBcnJheSkge1xuICAgICAgICByZXR1cm4gdGhpcy5vcC5lcnJvcih0aGlzLm9wLmYodikpXG4gICAgfVxuXG4gICAgbG9zcyh2OiBBcnJheSk6IG51bWJlciB7XG4gICAgICAgIGNvbnN0IGxvc3MgPSB0aGlzLm9wLmxvc3ModGhpcy5lcnJvcih2KSlcbiAgICAgICAgcmV0dXJuIGxvc3NcbiAgICB9XG5cbiAgICBwbG90Rih2OiBBcnJheSk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLm9wLmZvclBsb3R0aW5nKHRoaXMubG9zcyh2KSlcbiAgICB9XG5cbiAgICBncmFkaWVudCh2OiBBcnJheSk6IEFycmF5IHtcbiAgICAgICAgY29uc3QgbG9zcyA9IHRoaXMubG9zcyh2KVxuICAgICAgICBjb25zdCBkZiA9IHRoaXMub3AuZGYodilcbiAgICAgICAgY29uc3QgZzogQXJyYXkgPSBuai5tdWx0aXBseShkZiwgbG9zcylcbiAgICAgICAgcmV0dXJuIGdcbiAgICB9XG5cbiAgICBscih2OiBBcnJheSkge1xuICAgICAgICBjb25zdCBkdiA9IHRoaXMuZHYodilcbiAgICAgICAgY29uc3QgYWJzTG9zcyA9IE1hdGguYWJzKHRoaXMubG9zcyh2KSlcbiAgICAgICAgY29uc3QgZXBzID0gMWUtMTA7XG4gICAgICAgIGNvbnN0IGxyOiBBcnJheSA9IG5qLm11bHRpcGx5KGR2LCB0aGlzLmxyU2NhbGUpLmRpdmlkZShhYnNMb3NzICsgZXBzKVxuICAgICAgICByZXR1cm4gbHJcbiAgICB9XG5cbiAgICBuZXh0KHY6IEFycmF5KSB7XG4gICAgICAgIGNvbnN0IGR2ID0gdGhpcy5kdih2KVxuICAgICAgICBjb25zdCBuZXd4ID0gbmouc3VidHJhY3QodiwgbmoubXVsdGlwbHkoZHYsIHRoaXMub3AuZXRhKSlcbiAgICAgICAgLy9AdHMtaWdub3JlXG4gICAgICAgIHJldHVybiBuZXd4XG4gICAgfVxuXG4gICAgYWJzdHJhY3QgZHYodjogQXJyYXkpXG5cbiAgICBuZXh0THIodjogQXJyYXkpOiBBcnJheSB7XG4gICAgICAgIGNvbnN0IGcgPSB0aGlzLmxyKHYpO1xuICAgICAgICBjb25zdCB6OiBBcnJheSA9IG5qLmFkZCh2LCBuai5tdWx0aXBseShnLCAtMSkpXG4gICAgICAgIHJldHVybiB6XG4gICAgfVxuXG4gICAgYWJzdHJhY3QgdG9CbG9jaygpXG4gICAgYWJzdHJhY3QgdG9GdWxsKClcbn0iLCJleHBvcnQgY29uc3QgYmFzZUxvc3MgPSB4ID0+IDEgLyAyICogTWF0aC5wb3coeCwgMilcbmV4cG9ydCBjb25zdCBnZXRQbG90RnVuYyA9ICh6OiBMYW5kc2NhcGUpID0+ICh4OiBudW1iZXIpID0+IHoubG9zcyh6LmYoeCkpXG5cbmV4cG9ydCBpbnRlcmZhY2UgTGFuZHNjYXBlIHtcbiAgICBuYW1lOiBzdHJpbmdcbiAgICBmOiAoeDogbnVtYmVyKSA9PiBudW1iZXJcbiAgICBkZjogKHg6IG51bWJlcikgPT4gbnVtYmVyXG4gICAgeHJhbmdlOiBbbnVtYmVyLCBudW1iZXJdXG4gICAgeXJhbmdlOiBbbnVtYmVyLCBudW1iZXJdXG4gICAgbG9zczogKHg6IG51bWJlcikgPT4gbnVtYmVyXG59XG5cblxuZXhwb3J0IGNvbnN0IGxhbmRzY2FwZXM6IHsgW2s6IHN0cmluZ106IExhbmRzY2FwZSB9ID0ge1xuICAgIGhvbGU6IHtcbiAgICAgICAgbmFtZTogXCJob2xlXCIsXG4gICAgICAgIGY6IHggPT4gTWF0aC50YW5oKHgqMTMuNSksXG4gICAgICAgIGRmOiB4ID0+IE1hdGgucG93KE1hdGguY29zaCh4KjEzLjUpLCAtMikgKiAxMy41LFxuICAgICAgICB4cmFuZ2U6IFstNiAvIDEzLjUsIDYgLyAxMy41XSxcbiAgICAgICAgeXJhbmdlOiBbMCwgMC42XSxcbiAgICAgICAgbG9zczogYmFzZUxvc3NcbiAgICB9LFxuICAgIHN0ZXBzOiB7XG4gICAgICAgIG5hbWU6IFwic3RlcHNcIixcbiAgICAgICAgZjogeCA9PiBNYXRoLnRhbmgoeCAqIDEzLjUgLSAxMSkgLyA0ICsgTWF0aC50YW5oKHggKiAxMy41IC0gNikgLyA0ICsgTWF0aC50YW5oKHggKiAxMy41KSArIE1hdGgudGFuaCh4ICogMTMuNSArIDYpIC8gNCArIE1hdGgudGFuaCh4ICogMTMuNSArIDExKSAvIDQsXG4gICAgICAgIGRmOiB4ID0+IChNYXRoLnBvdyhNYXRoLmNvc2goeCAqIDEzLjUgLSAxMSksIC0yKSAvIDQgKyBNYXRoLnBvdyhNYXRoLmNvc2goeCAqIDEzLjUgLSA2KSwgLTIpIC8gNCArIE1hdGgucG93KE1hdGguY29zaCh4ICogMTMuNSksIC0yKSArIE1hdGgucG93KE1hdGguY29zaCh4ICogMTMuNSArIDYpLCAtMikgLyA0ICsgTWF0aC5wb3coTWF0aC5jb3NoKHggKiAxMy41ICsgMTEpLCAtMikgLyA0ICkgKiAxMy41LFxuICAgICAgICB4cmFuZ2U6IFstMTMuNSAvIDEzLjUsIDEzLjUgLyAxMy41XSxcbiAgICAgICAgeXJhbmdlOiBbMCwgMi41XSxcbiAgICAgICAgbG9zczogYmFzZUxvc3NcbiAgICB9LFxuICAgIHNlYWd1bGw6IHtcbiAgICAgICAgbmFtZTogXCJzZWFndWxsXCIsXG4gICAgICAgIGY6IHggPT4gTWF0aC5zaWduKHgpICogKDEgLSAoMSAvICgxICsgTWF0aC5hYnMoeCAqIDE2LjUpKSkpLFxuICAgICAgICBkZjogeCA9PiAxNi41IC8gTWF0aC5wb3coMSArIE1hdGguYWJzKHggKiAxNi41KSwgMiksXG4gICAgICAgIHhyYW5nZTogWy0xMiAvIDE2LjUsIDEyIC8gMTYuNV0sXG4gICAgICAgIHlyYW5nZTogWzAsIDAuNl0sXG4gICAgICAgIGxvc3M6IGJhc2VMb3NzXG4gICAgfSxcbiAgICBib3dsOiB7XG4gICAgICAgIG5hbWU6IFwiYm93bFwiLFxuICAgICAgICBmOiAgeCA9PiBNYXRoLnNpbmgoeC8zKSxcbiAgICAgICAgZGY6IHggPT4gTWF0aC5jb3NoKHgvMykvMyxcbiAgICAgICAgeHJhbmdlOiBbLTMgKiAzLCAzICogM10sXG4gICAgICAgIHlyYW5nZTogWzAsIDUwXSxcbiAgICAgICAgbG9zczogYmFzZUxvc3NcbiAgICB9LFxuICAgIGRlZXBfbmV0OiB7XG4gICAgICAgIG5hbWU6IFwiZGVlcF9uZXRcIixcbiAgICAgICAgZjogeCA9PiBNYXRoLnBvdyhNYXRoLmFicyh4LzMrMSksIDMpIC0gMSwgIC8vIGRlcHRoID0gNFxuICAgICAgICBkZjogeCA9PiAzLzMgKiBNYXRoLnBvdyhNYXRoLmFicyh4LzMrMSksIDIpLFxuICAgICAgICAvLyB4cmFuZ2U6IFstMC43KjQsIDAuNyo0XSxcbiAgICAgICAgeHJhbmdlOiBbLTAuOTUqMywgMC45NSozXSxcbiAgICAgICAgeXJhbmdlOiBbMCwgNF0sXG4gICAgICAgIGxvc3M6IGJhc2VMb3NzXG4gICAgfVxufSIsImltcG9ydCAqIGFzIG5qIGZyb20gXCJudW1qc1wiXG5cbmV4cG9ydCBmdW5jdGlvbiBMYW5kc2NhcGVMb3NzKGZyZXFzOiBudW1iZXJbXSwgYW1wczogbnVtYmVyW10pIHtcbiAgICBpZiAoZnJlcXMubGVuZ3RoICE9IGFtcHMubGVuZ3RoKSB0aHJvdyBcIkV4cGVjdCBhbXBsaXR1ZGVzIGFuZCBmcmVxdWVuY2llcyB0byBiZSB2ZWN0b3JzIG9mIHRoZSBzYW1lIGxlbmd0aFwiXG5cbiAgICBmdW5jdGlvbiBfZm9yd2FyZCh2OiBuai5OZEFycmF5PG51bWJlcj4pIHtcbiAgICAgICAgY29uc3QgeyB5LCB5X3ggfSA9IGxheWVyMSh2KVxuICAgICAgICBjb25zdCB7IHNjLCBzY195IH0gPSBsYXllcjIoeSlcbiAgICAgICAgY29uc3QgeyB6LCB6X3ksIHpfc2MgfSA9IGxheWVyMyh5LCBzYylcblxuICAgICAgICByZXR1cm4geyB5LCB5X3gsIHNjLCBzY195LCB6LCB6X3ksIHpfc2MgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGZvcndhcmQodjogbmouTmRBcnJheTxudW1iZXI+KTogbmouTmRBcnJheTxudW1iZXI+IHtcbiAgICAgICAgY29uc3QgeyB6IH0gPSBfZm9yd2FyZCh2KVxuICAgICAgICByZXR1cm4gelxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGphY29iaWFuKHY6IG5qLk5kQXJyYXk8bnVtYmVyPikge1xuICAgICAgICBjb25zdCB7IHpfc2MsIHNjX3ksIHpfeSwgeV94IH0gPSBfZm9yd2FyZCh2KVxuICAgICAgICBjb25zdCBvdXRfeSA9IG5qLmFkZChuai5kb3Qoel9zYywgc2NfeSksIHpfeSlcbiAgICAgICAgcmV0dXJuIG5qLmRvdChvdXRfeSwgeV94KS5UXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbGF5ZXIxKHY6IG5qLk5kQXJyYXk8bnVtYmVyPikge1xuICAgICAgICBjb25zdCB4MSA9IHYuZ2V0KDApLFxuICAgICAgICAgICAgeDIgPSB2LmdldCgxKVxuXG4gICAgICAgIGxldCB5MSA9IHgxLCB5MiA9IHgyLFxuICAgICAgICAgICAgZHkxID0gMCwgZHkyID0gMFxuXG4gICAgICAgIGZyZXFzLmZvckVhY2goKGYsIGkpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGEgPSBhbXBzW2ldXG5cbiAgICAgICAgICAgIGNvbnN0IHRoZXRhMSA9IGYgKiB4MSxcbiAgICAgICAgICAgICAgICB0aGV0YTIgPSBmICogeDJcbiAgICAgICAgICAgIHkxICs9IChhICogTWF0aC5zaW4odGhldGEyKSlcbiAgICAgICAgICAgIHkyICs9IChhICogTWF0aC5jb3ModGhldGExKSlcbiAgICAgICAgICAgIGR5MSArPSBhICogZiAqIE1hdGguY29zKHRoZXRhMilcbiAgICAgICAgICAgIGR5MiArPSBhICogZiAqIC1NYXRoLnNpbih0aGV0YTEpXG4gICAgICAgIH0pXG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHk6IG5qLmFycmF5KFt5MSwgeTJdKSxcbiAgICAgICAgICAgIHlfeDogbmouYXJyYXkoW1sxLCBkeTFdLCBbZHkyLCAxXV0pXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsYXllcjIodjogbmouTmRBcnJheTxudW1iZXI+KSB7XG4gICAgICAgIGNvbnN0IHkxID0gdi5nZXQoMCksXG4gICAgICAgICAgICB5MiA9IHYuZ2V0KDEpXG5cbiAgICAgICAgbGV0IGMxID0gMCwgYzIgPSAwLCBkYzEgPSAwLCBkYzIgPSAwLFxuICAgICAgICAgICAgczEgPSAwLCBzMiA9IDAsIGRzMSA9IDAsIGRzMiA9IDBcblxuICAgICAgICBmcmVxcy5mb3JFYWNoKChmLCBpKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBhID0gYW1wc1tpXVxuICAgICAgICAgICAgY29uc3QgdGhldGExID0gZiAqIHkxLCBzMDEgPSBNYXRoLnNpbih0aGV0YTEpLCBjMDEgPSBNYXRoLmNvcyh0aGV0YTEpLFxuICAgICAgICAgICAgICAgIHRoZXRhMiA9IGYgKiB5MiwgczAyID0gTWF0aC5zaW4odGhldGEyKSwgYzAyID0gTWF0aC5jb3ModGhldGEyKVxuXG4gICAgICAgICAgICBzMSArPSBhICogczAxXG4gICAgICAgICAgICBjMSArPSBhICogYzAxXG4gICAgICAgICAgICBzMiArPSBhICogczAyXG4gICAgICAgICAgICBjMiArPSBhICogYzAyXG4gICAgICAgICAgICBkczEgKz0gYSAqIGYgKiBjMDFcbiAgICAgICAgICAgIGRjMSArPSBhICogZiAqICgtczAxKVxuICAgICAgICAgICAgZHMyICs9IGEgKiBmICogYzAyXG4gICAgICAgICAgICBkYzIgKz0gYSAqIGYgKiAoLXMwMilcbiAgICAgICAgfSlcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgc2M6IG5qLmFycmF5KFtzMSwgczIsIGMxLCBjMl0pLFxuICAgICAgICAgICAgc2NfeTpuai5hcnJheShbW2RzMSwgMF0sIFswLCBkczJdLFxuICAgICAgICAgICAgICAgIFtkYzEsIDBdLFswLCBkYzJdXSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGxheWVyMyh2OiBuai5OZEFycmF5PG51bWJlcj4sIHNjOiBuai5OZEFycmF5PG51bWJlcj4pIHtcbiAgICAgICAgY29uc3QgeTEgPSB2LmdldCgwKSxcbiAgICAgICAgICAgIHkyID0gdi5nZXQoMSlcblxuICAgICAgICBjb25zdCBbczEsIHMyLCBjMSwgYzJdID0gc2MudG9saXN0KClcblxuICAgICAgICBjb25zdCB6MSA9ICh5MSAqIHMyKSArIChjMSAqIHkyKSxcbiAgICAgICAgICAgIHoyID0gKHMxICogeTIpICsgKHkxICogYzIpLFxuICAgICAgICAgICAgejFfZHkgPSBbczIsIGMxXSxcbiAgICAgICAgICAgIHoyX2R5ID0gW2MyLCBzMV0sXG4gICAgICAgICAgICB6MV9kc2MgPSBbMCwgeTEsIHkyLCAwXSxcbiAgICAgICAgICAgIHoyX2RzYyA9IFt5MiwgMCwgMCwgeTFdXG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHo6IG5qLmFycmF5KFt6MSwgejJdKSxcbiAgICAgICAgICAgIHpfeTogbmouYXJyYXkoW3oxX2R5LCB6Ml9keV0pLFxuICAgICAgICAgICAgel9zYzogbmouYXJyYXkoW3oxX2RzYywgejJfZHNjXSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIGZyZXFzLFxuICAgICAgICBhbXBzLFxuICAgICAgICBmb3J3YXJkLFxuICAgICAgICBqYWNvYmlhbixcbiAgICB9XG59IiwiaW1wb3J0ICogYXMgdHAgZnJvbSBcIi4vdHlwZXNcIlxuaW1wb3J0ICogYXMgbmogZnJvbSBcIm51bWpzXCJcbmltcG9ydCAqIGFzIGQzIGZyb20gXCJkM1wiXG5pbXBvcnQge1NpbXBsZU5ldFVwZGF0ZXJ9IGZyb20gXCIuL1NpbXBsZU5ldFVwZGF0ZXJcIlxuaW1wb3J0IHtVcGRhdGVyMkR9IGZyb20gXCIuL1VwZGF0ZXIyRFwiXG5pbXBvcnQge0xhbmRzY2FwZUxvc3N9IGZyb20gXCIuL0xhbmRzY2FwZUxvc3NcIlxuaW1wb3J0IHtsaW5zcGFjZX0gZnJvbSBcIi4vdXRpbC94ZDNcIlxuXG5leHBvcnQgaW50ZXJmYWNlIExhbmRzY2FwZTJEIHtcbiAgICBuYW1lOiBzdHJpbmdcbiAgICBmXG4gICAgZGZcbiAgICBlcnJvclxuICAgIGxvc3NcbiAgICBmb3JQbG90dGluZ1xuICAgIHVwZGF0ZXJDbGFzc1xuICAgIGNvbG9yU2NhbGU6IGQzLlNjYWxlTGluZWFyPG51bWJlciwgbnVtYmVyIHwgc3RyaW5nPlxuICAgIHhyYW5nZTogW251bWJlciwgbnVtYmVyXVxuICAgIHlyYW5nZTogW251bWJlciwgbnVtYmVyXVxuICAgIHRhcmdldD9cbiAgICBuQ29udG91cnM/OiBudW1iZXJcbiAgICBueD86IG51bWJlclxuICAgIG55PzogbnVtYmVyXG4gICAgc3RlcDJscj9cbiAgICBldGE/XG59XG5cblxuLy8gUGFyYW1ldGVycyBkZWZpbmluZyBlbGxpcHRpY2FsXG5jb25zdCBBID0gbmouYXJyYXkoW1sxLDJdLCBbMiwxXV0pXG5cbi8vIFBhcmFtZXRlcnMgZGVmaW5pbmcgYnVtcHkgbGFuZHNjYXBlXG5jb25zdCBmcmVxcyA9IGxpbnNwYWNlKC0xLCAwLCA0KS5tYXAoeCA9PiBNYXRoLmV4cCh4KSlcbi8vIGNvbnN0IGZyZXFzID0gWzEsMl1cbmNvbnN0IGFtcHMgPSBmcmVxcy5tYXAoeCA9PiAxL3gpXG5leHBvcnQgY29uc3QgYnVtcHkgPSBMYW5kc2NhcGVMb3NzKGZyZXFzLCBhbXBzKVxuXG5leHBvcnQgY29uc3QgbGFuZHNjYXBlczJkOiB7IFtrOiBzdHJpbmddOiBMYW5kc2NhcGUyRCB9ID0ge1xuICAgIFNpbXBsZU5ldDJEOiB7XG4gICAgICAgIG5hbWU6IFwiU2ltcGxlTmV0MkRcIixcbiAgICAgICAgZjogKHY6IHRwLkFycmF5KSA9PiB2LmdldCgwKSAqIHYuZ2V0KDEpLFxuICAgICAgICBkZjogKHY6IHRwLkFycmF5KSA9PiBuai5hcnJheShbdi5nZXQoMSksIHYuZ2V0KDApXSksXG4gICAgICAgIGVycm9yOiBmdiA9PiBmdiAtIDEsXG4gICAgICAgIGxvc3M6IHggPT4geCxcbiAgICAgICAgZm9yUGxvdHRpbmc6IGxvc3MgPT4gbG9zcyxcbiAgICAgICAgdXBkYXRlckNsYXNzOiBTaW1wbGVOZXRVcGRhdGVyLFxuICAgICAgICBjb2xvclNjYWxlOiBkMy5zY2FsZUxpbmVhcigpXG4gICAgICAgICAgICAuZG9tYWluKFstMSwgLTAuMSwgMS42XSlcbiAgICAgICAgICAgIC8vQHRzLWlnbm9yZVxuICAgICAgICAgICAgLnJhbmdlKFtcIndoaXRlXCIsIFwic3RlZWxibHVlXCIsIFwid2hpdGVcIl0pXG4gICAgICAgICAgICAvL0B0cy1pZ25vcmVcbiAgICAgICAgICAgIC5pbnRlcnBvbGF0ZShkMy5pbnRlcnBvbGF0ZVJnYi5nYW1tYSgyLjIpKSxcbiAgICAgICAgeHJhbmdlOiBbMCwgMS42XSxcbiAgICAgICAgeXJhbmdlOiBbMCwgMS42XSxcbiAgICAgICAgbkNvbnRvdXJzOiAyMCxcbiAgICB9LFxuXG4gICAgLy8gQnJva2VuIENIYWluIE5ldCBMYW5kc2NhcGUgdXNpbmcgbm9ybWFsIFVwZGF0ZXIgMkQgKGRvZXNuJ3QgaGFuZGxlICgyLDEpIHNoYXBlZCBKYWMpXG4gICAgQ2hhaW5OZXQ6IHtcbiAgICAgICAgbmFtZTogXCJDaGFpbk5ldFwiLFxuICAgICAgICBmOiAodjogdHAuQXJyYXkpID0+IE1hdGgucG93KHYuZ2V0KDApLCAyKSAqIHYuZ2V0KDEpLFxuICAgICAgICAvLyBkZjogKHY6IHRwLkFycmF5KSA9PiBuai5hcnJheShbW3YuZ2V0KDApXSwgW3YuZ2V0KDEpXV0pLFxuICAgICAgICBkZjogKHY6IHRwLkFycmF5KSA9PiBuai5hcnJheShbW3YuZ2V0KDApLCAwXSwgWzAsIHYuZ2V0KDEpXV0pLFxuICAgICAgICBlcnJvcjogZnYgPT4gZnYgLSAxLFxuICAgICAgICBsb3NzOiB4ID0+IHgsIC8vIExvc3Mgc2hvdWxkIGFsd2F5cyBiZSBhIGZ1bmN0aW9uIG9mIGVycm9yIVxuICAgICAgICBmb3JQbG90dGluZzogbG9zcyA9PiBsb3NzLFxuICAgICAgICB1cGRhdGVyQ2xhc3M6IFVwZGF0ZXIyRCxcbiAgICAgICAgY29sb3JTY2FsZTogZDMuc2NhbGVMaW5lYXIoKVxuICAgICAgICAgICAgLmRvbWFpbihbLTEsIDAsIDEuNl0pXG4gICAgICAgICAgICAvL0B0cy1pZ25vcmVcbiAgICAgICAgICAgIC5yYW5nZShbXCJ3aGl0ZVwiLCBcInN0ZWVsYmx1ZVwiLCBcInJlZFwiXSlcbiAgICAgICAgICAgIC8vQHRzLWlnbm9yZVxuICAgICAgICAgICAgLmludGVycG9sYXRlKGQzLmludGVycG9sYXRlUmdiLmdhbW1hKDIuMikpLFxuICAgICAgICB4cmFuZ2U6IFswLCAxLjZdLFxuICAgICAgICB5cmFuZ2U6IFswLCAxLjZdLFxuICAgICAgICBuQ29udG91cnM6IDIwLFxuICAgIH0sXG5cbiAgICBFbGxpcHRpY2FsOiB7XG4gICAgICAgIG5hbWU6IFwiRWxsaXB0aWNhbFwiLFxuICAgICAgICBmOiB2ID0+IG5qLmRvdChBLCB2KSxcbiAgICAgICAgZGY6IHYgPT4gQSxcbiAgICAgICAgZXJyb3I6IGZ2ID0+IGZ2LFxuICAgICAgICBsb3NzOiAoZXJyOiB0cC5BcnJheSkgPT4gbmouc3VtKG5qLmRpdmlkZShuai5wb3dlcihlcnIsIDIpLCAyKSksXG4gICAgICAgIGZvclBsb3R0aW5nOiBsb3NzID0+IE1hdGgubG9nKDEgKyBsb3NzKSxcbiAgICAgICAgdXBkYXRlckNsYXNzOiBVcGRhdGVyMkQsXG4gICAgICAgIGNvbG9yU2NhbGU6IGQzLnNjYWxlUG93KClcbiAgICAgICAgICAgIC5leHBvbmVudCgwLjUpXG4gICAgICAgICAgICAuZG9tYWluKFswLCAzNl0pXG4gICAgICAgICAgICAvL0B0cy1pZ25vcmVcbiAgICAgICAgICAgIC5yYW5nZShbXCJzdGVlbGJsdWVcIiwgXCJ3aGl0ZVwiXSlcbiAgICAgICAgICAgIC8vQHRzLWlnbm9yZVxuICAgICAgICAgICAgLmludGVycG9sYXRlKGQzLmludGVycG9sYXRlUmdiLmdhbW1hKDIuMikpLFxuICAgICAgICB4cmFuZ2U6IFstMiwgMl0sXG4gICAgICAgIHlyYW5nZTogWy0yLCAyXSxcbiAgICAgICAgbkNvbnRvdXJzOiAzMCxcbiAgICAgICAgbng6IDcsXG4gICAgICAgIG55OiA3LFxuICAgICAgICBzdGVwMmxyOiBkMy5zY2FsZUxpbmVhcigpLmRvbWFpbihbMCwgMV0pLnJhbmdlKFswLjEsIDEuNV0pXG4gICAgfSxcblxuICAgIExhbmRzY2FwZTE6IHtcbiAgICAgICAgbmFtZTogXCJMYW5kc2NhcGUxXCIsXG4gICAgICAgIGY6IGJ1bXB5LmZvcndhcmQsXG4gICAgICAgIGRmOiBidW1weS5qYWNvYmlhbixcbiAgICAgICAgZXJyb3I6IGZ2ID0+IGZ2LCAvLyBUaGUgZnVuY3Rpb24gdmFsdWUgaXMgdGhlIGVycm9yIGl0c2VsZlxuICAgICAgICBsb3NzOiAoZXJyOiB0cC5BcnJheSkgPT4gbmouc3VtKG5qLnBvd2VyKGVyciwgMikpIC8gMixcbiAgICAgICAgZm9yUGxvdHRpbmc6IGxvc3MgPT4gTWF0aC5sb2coMSArIGxvc3MpLFxuICAgICAgICB1cGRhdGVyQ2xhc3M6IFVwZGF0ZXIyRCxcbiAgICAgICAgY29sb3JTY2FsZTogZDMuc2NhbGVQb3coKVxuICAgICAgICAgICAgLmV4cG9uZW50KDAuNSlcbiAgICAgICAgICAgIC5kb21haW4oWzAsIDEwMF0pXG4gICAgICAgICAgICAvL0B0cy1pZ25vcmVcbiAgICAgICAgICAgIC5yYW5nZShbXCJzdGVlbGJsdWVcIiwgXCJ3aGl0ZVwiXSlcbiAgICAgICAgICAgIC8vQHRzLWlnbm9yZVxuICAgICAgICAgICAgLmludGVycG9sYXRlKGQzLmludGVycG9sYXRlUmdiLmdhbW1hKDIuMikpLFxuICAgICAgICB4cmFuZ2U6IFsxLjUsIDguNF0sXG4gICAgICAgIHlyYW5nZTogWzMsIDEwLjVdLFxuICAgICAgICBuQ29udG91cnM6IDIwLFxuICAgICAgICBueDogMTIsXG4gICAgICAgIG55OiAxMixcbiAgICAgICAgZXRhOiAwLjAwMSxcbiAgICAgICAgc3RlcDJscjogZDMuc2NhbGVMaW5lYXIoKS5kb21haW4oWzAsIDAuMDVdKS5yYW5nZShbMC4wMDAxLCAwLjhdKVxuICAgIH0sXG5cbn0iLCJpbXBvcnQgKiBhcyBkMyBmcm9tICdkMydcbmltcG9ydCAqIGFzIG5qIGZyb20gXCJudW1qc1wiXG5pbXBvcnQgKiBhcyB0cCBmcm9tIFwiLi90eXBlc1wiXG5pbXBvcnQgeyBBcnJheSB9IGZyb20gXCIuL3R5cGVzXCJcbmltcG9ydCB7IEJhc2VVcGRhdGVyMkQgfSBmcm9tIFwiLi9CYXNlVXBkYXRlcjJEXCJcblxuZXhwb3J0IGNsYXNzIFNpbXBsZU5ldFVwZGF0ZXIgZXh0ZW5kcyBCYXNlVXBkYXRlcjJEIHtcbiAgICBlaWdlbnZhbHVlcyh2OiBBcnJheSk6IEFycmF5IHtcbiAgICAgICAgY29uc3QgZXggPSBuai5wb3dlcih2LCAyKS5zdW0oKVxuICAgICAgICBjb25zdCBleSA9IG5qLnBvd2VyKHYsIDIpLnN1bSgpXG4gICAgICAgIHJldHVybiBuai5hcnJheShbZXgsIGV5XSlcbiAgICB9XG5cbiAgICBkdih2OiBBcnJheSk6IEFycmF5IHtcbiAgICAgICAgY29uc3QgZyA9IHRoaXMuZ3JhZGllbnQodilcbiAgICAgICAgY29uc3QgZXYgPSB0aGlzLmVpZ2VudmFsdWVzKHYpXG5cbiAgICAgICAgY29uc3QgbW9kRXZzID0gbmouYWJzKG5qLnBvd2VyKGV2LCB0aGlzLm9wLnEpKVxuICAgICAgICBjb25zdCBkdjogQXJyYXkgPSBuai5kaXZpZGUoZywgbW9kRXZzKVxuICAgICAgICByZXR1cm4gZHZcbiAgICB9XG5cbiAgICAvLyBDb252ZXJ0IHRvIGJsb2NrIGRpYWdvbmFsIHVwZGF0ZXJcbiAgICB0b0Jsb2NrKCk6IEJsb2NrU2ltcGxlTmV0VXBkYXRlciB7XG4gICAgICAgIGNvbnN0IGJsb2NrVXBkYXRlciA9IG5ldyBCbG9ja1NpbXBsZU5ldFVwZGF0ZXIodGhpcy5vcClcbiAgICAgICAgcmV0dXJuIGJsb2NrVXBkYXRlclxuICAgIH1cblxuICAgIC8vIENyZWF0ZSBhIG5ldyBmdWxsIHVwZGF0ZXIgZnJvbSB0aGlzIG9iamVjdC4gVXNlZnVsIGlmIG9uZSBvZiB0aGUgZGVyaXZlZCBjbGFzc2VzIG5lZWRzIHRvIGltcGxlbWVudFxuICAgIHRvRnVsbCgpOiBTaW1wbGVOZXRVcGRhdGVyIHtcbiAgICAgICAgY29uc3QgZnVsbFVwZGF0ZXIgPSBuZXcgU2ltcGxlTmV0VXBkYXRlcih0aGlzLm9wKVxuICAgICAgICByZXR1cm4gZnVsbFVwZGF0ZXJcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBCbG9ja1NpbXBsZU5ldFVwZGF0ZXIgZXh0ZW5kcyBTaW1wbGVOZXRVcGRhdGVyIHtcbiAgICBlaWdlbnZhbHVlcyh2OiBBcnJheSk6IEFycmF5IHtcbiAgICAgICAgcmV0dXJuIG5qLm11bHRpcGx5KG5qLnBvd2VyKHRoaXMub3AuZGYodiksIDIpLCAyKVxuICAgIH1cbn0iLCJpbXBvcnQgKiBhcyBkMyBmcm9tICdkMydcbmltcG9ydCAqIGFzIG5qIGZyb20gXCJudW1qc1wiXG5pbXBvcnQgKiBhcyB0cCBmcm9tIFwiLi90eXBlc1wiXG5pbXBvcnQgeyBBcnJheSB9IGZyb20gXCIuL3R5cGVzXCJcbmltcG9ydCB7IEJhc2VVcGRhdGVyMkQgfSBmcm9tIFwiLi9CYXNlVXBkYXRlcjJEXCJcblxuY29uc3QgZGVmYXVsdEVycm9yRnVuY3Rpb24gPSB2ID0+IHtcbiAgICByZXR1cm4gbmouZG90KG5qLmFycmF5KFtbMSwgMl0sIFsyLCAxXV0pLCB2KVxufVxuY29uc3QgZGVmYXVsdERmRnVuY3Rpb24gPSB2ID0+IG5qLmFycmF5KFtbMSwgMl0sIFsyLCAxXV0pXG5jb25zdCBkZWZhdWx0U3RlcDJMcjogZDMuU2NhbGVMaW5lYXI8bnVtYmVyLCBudW1iZXI+ID0gZDMuc2NhbGVMaW5lYXIoKS5kb21haW4oWzAsIDAuOF0pLnJhbmdlKFswLjAwMSwgMC4yNV0pXG5jb25zdCBkZWZhdWx0RXJyb3IgPSBmdiA9PiBmdlxuY29uc3QgZGVmYXVsdExvc3MgPSBlcnIgPT4gbmouc3VtKG5qLmRpdmlkZShuai5wb3dlcihlcnIsIDIpLCAyKSlcbmNvbnN0IGRlZmF1bHRQbG90dGluZyA9IGxvc3MgPT4gbG9zc1xuXG5pbnRlcmZhY2UgVXBkYXRlck9wdGlvbnMge1xuICAgIGZcbiAgICBkZlxuICAgIGVycm9yXG4gICAgbG9zc1xuICAgIGZvclBsb3R0aW5nXG4gICAgcTogbnVtYmVyICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIDAgLT4gMSwgd2hlcmUgMCBpcyBTR0QgYW5kIDEgaXMgTkdELiAwLjUgaXMgc3FydCBOR0QuIFtzdGVwID0gLSBldGEgKiBIIF4gKC0xL3EpICogZ10gKEggPSAwIHdoZW4gcT0wKVxuICAgIGV0YTogbnVtYmVyICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBha2EgJ2xlYXJuaW5nIHJhdGUnXG4gICAgc3RlcDJscjogZDMuU2NhbGVMaW5lYXI8bnVtYmVyLCBudW1iZXI+XG59XG5cbmZ1bmN0aW9uIGdldE9ydGhNYXRyaXgoUykge1xuICAgIGNvbnN0IHRoZXRhID0gMC41ICogTWF0aC5hdGFuMihTLmdldCgwLDEpICsgUy5nZXQoMSwwKSwgUy5nZXQoMCwwKSAtIFMuZ2V0KDEsMSkpXG4gICAgY29uc3QgY29zID0gTWF0aC5jb3ModGhldGEpXG4gICAgY29uc3Qgc2luID0gTWF0aC5zaW4odGhldGEpXG4gICAgcmV0dXJuIG5qLmFycmF5KFtbY29zLCAtc2luXSwgW3NpbiwgY29zXV0pXG59XG5cbmludGVyZmFjZSBTVkRSZXN1bHRzIHsgVSwgZCwgViB9XG5cbi8vIFJlY29uc3RydWN0IGZyb20gU1ZEIHVzaW5nIHZlY3RvciAnZCcgcmVwcmVzZW50aW5nIGRpYWdvbmFscyBvZiBEXG5mdW5jdGlvbiByZWNvbnN0cnVjdEphYyhVLCBkLCBWKSB7XG4gICAgY29uc3QgRCA9IG5qLmFycmF5KFtbZC5nZXQoMCksIDBdLCBbMCwgZC5nZXQoMSldXSlcbiAgICBjb25zdCBwcmVGYWMgPSBuai5kb3QoVSwgRClcbiAgICBjb25zdCBvdXQgPSBuai5kb3QocHJlRmFjLCBWLlQpXG5cbiAgICByZXR1cm4gb3V0XG59XG5cbi8vIENvbXB1dGUgU1ZEIG9mIGEgMkQgbWF0cml4IE1cbmZ1bmN0aW9uIFNWRDJkKE0pOiBTVkRSZXN1bHRzIHtcbiAgICBjb25zdCBVID0gZ2V0T3J0aE1hdHJpeChuai5kb3QoTSwgTS5UKSlcbiAgICBsZXQgViA9IGdldE9ydGhNYXRyaXgobmouZG90KE0uVCwgTSkpXG4gICAgY29uc3QgcHJlRGlhZyA9IG5qLmRvdChVLlQsIG5qLmRvdChNLCBWKSlcbiAgICBsZXQgZCA9IG5qLmFycmF5KFtwcmVEaWFnLmdldCgwLDApLCBwcmVEaWFnLmdldCgxLDEpXSlcbiAgICAvL0B0cy1pZ25vcmVcbiAgICBjb25zdCBkU2lnbiA9IGQudG9saXN0KCkubWFwKHggPT4geCA+PSAwID8gMSA6IC0xKVxuICAgIFYgPSBuai5hcnJheShWLnRvbGlzdCgpLm1hcCgocm93LCBpKSA9PiB7XG4gICAgICAgIHJldHVybiByb3cubWFwKCh4LCBqKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4geCAqIGRTaWduW2pdIFxuICAgICAgICB9KVxuICAgIH0pKVxuICAgIGQgPSBuai5hYnMoZClcbiAgICByZXR1cm4ge1UsIGQsIFZ9XG59XG5cbmV4cG9ydCBjbGFzcyBVcGRhdGVyMkQgZXh0ZW5kcyBCYXNlVXBkYXRlcjJEIHtcbiAgICAvLyBTZXQgRGVmYXVsdCBPcHRpb25zXG4gICAgb3A6IFVwZGF0ZXJPcHRpb25zID0ge1xuICAgICAgICAvL0B0cy1pZ25vcmVcbiAgICAgICAgZjogZGVmYXVsdEVycm9yRnVuY3Rpb24sXG4gICAgICAgIC8vQHRzLWlnbm9yZVxuICAgICAgICBkZjogZGVmYXVsdERmRnVuY3Rpb24sXG4gICAgICAgIGVycm9yOiBkZWZhdWx0RXJyb3IsXG4gICAgICAgIGxvc3M6IGRlZmF1bHRMb3NzLFxuICAgICAgICBmb3JQbG90dGluZzogZGVmYXVsdFBsb3R0aW5nLFxuICAgICAgICBxOiAwLFxuICAgICAgICBldGE6IDAuMSxcbiAgICAgICAgc3RlcDJscjogZGVmYXVsdFN0ZXAyTHIsXG4gICAgfVxuXG4gICAgY29uc3RydWN0b3Iob3B0aW9uczogUGFydGlhbDxVcGRhdGVyT3B0aW9ucz49e30pIHtcbiAgICAgICAgc3VwZXIoKVxuICAgICAgICB0aGlzLnVwZGF0ZU9wdGlvbnMob3B0aW9ucylcbiAgICB9XG5cbiAgICBkdih2OiBBcnJheSkge1xuICAgICAgICBjb25zdCBqYWMgPSB0aGlzLm9wLmRmKHYpXG4gICAgICAgIGNvbnN0IGVyciA9IHRoaXMuZXJyb3IodilcbiAgICAgICAgY29uc3Qge1UsIGQsIFZ9ID0gU1ZEMmQoamFjKVxuXG4gICAgICAgIGNvbnN0IGRxID0gbmoubXVsdGlwbHkoZCwgbmoucG93ZXIoZCwgLTIgKiB0aGlzLm9wLnEpKVxuICAgICAgICBjb25zdCBqYWMyID0gcmVjb25zdHJ1Y3RKYWMoVSwgZHEsIFYpXG4gICAgICAgIC8vIGNvbnN0IGphYzJfb2cgPSByZWNvbnN0cnVjdEphYyhVLCBkLCBWKVxuICAgICAgICAvLyBjb25zb2xlLmxvZyhuai5zdWJ0cmFjdChqYWMsIGphYzJfb2cpKTtcbiAgICAgICAgY29uc3Qgb3V0ID0gbmouZG90KGphYzIsIGVycilcblxuICAgICAgICByZXR1cm4gb3V0XG4gICAgfVxuXG4gICAgbHIodjogQXJyYXkpIHtcbiAgICAgICAgY29uc3QgZHYgPSB0aGlzLmR2KHYpXG4gICAgICAgIGNvbnN0IGVwcyA9IDFlLTEwO1xuICAgICAgICAvL0B0cy1pZ25vcmVcbiAgICAgICAgY29uc3QgbHI6IEFycmF5ID0gbmoubXVsdGlwbHkoZHYsIHRoaXMubHJTY2FsZSkuZGl2aWRlKE1hdGguc3FydChNYXRoLmFicyh0aGlzLmxvc3ModikpICsgZXBzKSkgLy8uZGl2aWRlKGFic0xvc3MgKyBlcHMpXG4gICAgICAgIHJldHVybiBsclxuICAgIH1cblxuICAgIC8vIENvbnZlcnQgdG8gYmxvY2sgZGlhZ29uYWwgdXBkYXRlciAvLyBOb3RoaW5nIGRpZmZlcmVudCByblxuICAgIHRvQmxvY2soKTogQmxvY2tVcGRhdGVyMkQge1xuICAgICAgICBjb25zdCBibG9ja1VwZGF0ZXIgPSBuZXcgQmxvY2tVcGRhdGVyMkQodGhpcy5vcClcbiAgICAgICAgcmV0dXJuIGJsb2NrVXBkYXRlclxuICAgIH1cblxuICAgIC8vIENyZWF0ZSBhIG5ldyBmdWxsIHVwZGF0ZXIgZnJvbSB0aGlzIG9iamVjdC4gVXNlZnVsIGlmIG9uZSBvZiB0aGUgZGVyaXZlZCBjbGFzc2VzIG5lZWRzIHRvIGltcGxlbWVudFxuICAgIHRvRnVsbCgpOiBVcGRhdGVyMkQge1xuICAgICAgICBjb25zdCBmdWxsVXBkYXRlciA9IG5ldyBVcGRhdGVyMkQodGhpcy5vcClcbiAgICAgICAgcmV0dXJuIGZ1bGxVcGRhdGVyXG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgQmxvY2tVcGRhdGVyMkQgZXh0ZW5kcyBVcGRhdGVyMkQge1xufSIsImltcG9ydCAqIGFzIGQzIGZyb20gJ2QzJ1xuaW1wb3J0IHsgVUlkIH0gZnJvbSAnLi91dGlsL1VJZCdcbmltcG9ydCB7IENvbnRvdXJQbG90IH0gZnJvbSAnLi92aXMvR2VuZXJhbENvbnRvdXJQbG90J1xuaW1wb3J0IHsgRDNTZWwsIGxpbnNwYWNlIH0gZnJvbSAnLi91dGlsL3hkMydcbmltcG9ydCB7IEdvbGZIb2xlMUQgfSBmcm9tICcuL3Zpcy9Hb2xmSG9sZTFEJ1xuaW1wb3J0IHsgR29sZkxvc3NlcyB9IGZyb20gJy4vdmlzL0dvbGZMb3NzZXMnXG5pbXBvcnQgeyBHb2xmWERpc3QgfSBmcm9tICcuL3Zpcy9Hb2xmWERpc3QnXG5pbXBvcnQgeyBHb2xmQmFsbCB9IGZyb20gJy4vdmlzL0dvbGZCYWxsJ1xuaW1wb3J0IHsgU2ltcGxlTmV0IH0gZnJvbSBcIi4vdmlzL1NpbXBsZU5ldFwiXG5pbXBvcnQgKiBhcyBSIGZyb20gJ3JhbWRhJ1xuaW1wb3J0IHsgU2ltcGxlRXZlbnRIYW5kbGVyIH0gZnJvbSAnLi91dGlsL1NpbXBsZUV2ZW50SGFuZGxlcidcbmltcG9ydCB7IE1hbnVhbFVwZGF0ZXIgfSBmcm9tICcuL3Zpcy9NYW51YWxVcGRhdGVyJ1xuaW1wb3J0IHsgbGFuZHNjYXBlcyB9IGZyb20gJy4vR29sZkxhbmRzY2FwZXMnXG5pbXBvcnQgeyBsYW5kc2NhcGVzMmQsIGJ1bXB5IH0gZnJvbSAnLi9MYW5kc2NhcGVzMkQnXG5pbXBvcnQgeyBBcnJheSB9IGZyb20gJy4vdHlwZXMnXG5pbXBvcnQgeyBRdWFkcmF0aWNQbG90cyB9IGZyb20gXCIuL3Zpcy9RdWFkcmF0aWNQbG90c1wiXG5pbXBvcnQgeyBMYW5kc2NhcGVMb3NzIH0gZnJvbSBcIi4vTGFuZHNjYXBlTG9zc1wiXG5pbXBvcnQgKiBhcyBuaiBmcm9tIFwibnVtanNcIlxuXG5jb25zdCB0b0ZpeGVkID0gUi5jdXJyeSgobmRpZ2l0cywgeCkgPT4geC50b0ZpeGVkKG5kaWdpdHMpKVxuY29uc3QgdG9RID0gdG9GaXhlZCgxKVxuY29uc3QgdG9FdGEgPSB0b0ZpeGVkKDQpXG5cbmZ1bmN0aW9uIHBsb3RFbGxpcHRpY2FsKCkge1xuICAgIGNvbnN0IHZpczAgPSBkMy5zZWxlY3QoJyN2aXMwJylcbiAgICBjb25zdCBzZWxzID0ge1xuICAgICAgICBxdWl2ZXJQbG90OiB2aXMwLnNlbGVjdCgnI2NoYXJ0JyksXG4gICAgICAgIHFJZDogdmlzMC5zZWxlY3QoJyNxLXZhbCcpLFxuICAgICAgICBldGFJZDogdmlzMC5zZWxlY3QoJyNldGEtdmFsJyksXG4gICAgICAgIHFTbGlkZXI6IHZpczAuc2VsZWN0KCcjcS1zbGlkZXInKSxcbiAgICAgICAgZXRhU2xpZGVyOiB2aXMwLnNlbGVjdCgnI2V0YS1zbGlkZXInKSxcbiAgICAgICAgaGVzc1R5cGU6IHZpczAuc2VsZWN0KCcjaGVzcy10eXBlJyksXG4gICAgfVxuICAgIGNvbnN0IGV2ZW50SGFuZGxlciA9IG5ldyBTaW1wbGVFdmVudEhhbmRsZXIoPEVsZW1lbnQ+dmlzMC5ub2RlKCkpXG5cbiAgICBjb25zdCB2aXpzID0ge1xuICAgICAgICBncmFwaDogQ29udG91clBsb3QuZnJvbUxhbmRzY2FwZShzZWxzLnF1aXZlclBsb3QsIGV2ZW50SGFuZGxlciwgbGFuZHNjYXBlczJkLkVsbGlwdGljYWwpLFxuICAgIH1cblxuICAgIGNvbnN0IGRlZmF1bHRzID0ge1xuICAgICAgICAvLyBOb3RlIHRvIGFsc28gY2hhbmdlIHRoZSBkZWZhdWx0IHZhbHVlIGluIHRoZSBodG1sIGZpbGUhXG4gICAgICAgIHE6IDAsXG4gICAgICAgIGV0YTogMC4wNVxuICAgIH1cblxuICAgIGNvbnN0IHNjYWxlcyA9IHtcbiAgICAgICAgcTogZDMuc2NhbGVMaW5lYXIoKS5yYW5nZShbMCwgMTBdKS5kb21haW4oWzAsIDFdKSxcbiAgICAgICAgZXRhOiBkMy5zY2FsZUxpbmVhcigpLnJhbmdlKFsxLCAxMDAwXSkuZG9tYWluKFtNYXRoLnBvdygxMCwgLTUpLCAwLjZdKVxuICAgIH1cblxuICAgIC8vIEluaXRpYWxpemUgZ3JhcGggcGFyYW1ldGVycyB0byBtYXRjaCB0aGUgZGVmYXVsdHNcbiAgICB2aXpzLmdyYXBoLnEoZGVmYXVsdHMucSlcbiAgICB2aXpzLmdyYXBoLmV0YShkZWZhdWx0cy5ldGEpXG4gICAgc2Vscy5xU2xpZGVyLnByb3BlcnR5KCd2YWx1ZScsIHNjYWxlcy5xKGRlZmF1bHRzLnEpKVxuICAgIHNlbHMuZXRhU2xpZGVyLnByb3BlcnR5KCd2YWx1ZScsIHNjYWxlcy5ldGEoZGVmYXVsdHMuZXRhKSlcblxuICAgIHNlbHMucUlkLnRleHQodG9RKGRlZmF1bHRzLnEpKVxuICAgIHNlbHMuZXRhSWQudGV4dCh0b0V0YShkZWZhdWx0cy5ldGEpKVxuXG4gICAgc2Vscy5xU2xpZGVyLm9uKCdpbnB1dCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc3QgbWUgPSBkMy5zZWxlY3QodGhpcylcbiAgICAgICAgY29uc3QgdiA9IHNjYWxlcy5xLmludmVydCgrbWUucHJvcGVydHkoJ3ZhbHVlJykpO1xuICAgICAgICB2aXpzLmdyYXBoLnEodik7XG4gICAgICAgIHNlbHMucUlkLnRleHQoYCR7dG9RKHYpfWApXG4gICAgfSlcblxuICAgIHNlbHMuZXRhU2xpZGVyLm9uKCdpbnB1dCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc3QgbWUgPSBkMy5zZWxlY3QodGhpcylcbiAgICAgICAgY29uc3QgdiA9IHNjYWxlcy5ldGEuaW52ZXJ0KG1lLnByb3BlcnR5KCd2YWx1ZScpKTtcbiAgICAgICAgdml6cy5ncmFwaC5ldGEodilcbiAgICAgICAgc2Vscy5ldGFJZC50ZXh0KGAke3RvRXRhKHYpfWApXG4gICAgfSlcblxuICAgIHNlbHMuaGVzc1R5cGUub24oJ2lucHV0JywgZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zdCBzZWxmID0gZDMuc2VsZWN0KHRoaXMpXG4gICAgICAgIGNvbnN0IHYgPSBzZWxmLnByb3BlcnR5KCd2YWx1ZScpXG4gICAgICAgIHZpenMuZ3JhcGguc2V0VXBkYXRlcih2KVxuICAgIH0pXG59XG5cbmZ1bmN0aW9uIHBsb3RCdW1weUxvc3MyRCgpIHtcbiAgICBjb25zdCB2aXMgPSBkMy5zZWxlY3QoXCIjdmlzLTJkLWxvc3NcIilcbiAgICBjb25zdCBldmVudEhhbmRsZXIgPSBuZXcgU2ltcGxlRXZlbnRIYW5kbGVyKDxFbGVtZW50PnZpcy5ub2RlKCkpXG4gICAgY29uc3Qgc2VscyA9IHtcbiAgICAgICAgcGxvdDogdmlzLnNlbGVjdChcIiNsb3NzLTJkXCIpLFxuICAgICAgICBxSWQ6IHZpcy5zZWxlY3QoJyNxLXZhbCcpLFxuICAgICAgICBldGFJZDogdmlzLnNlbGVjdCgnI2V0YS12YWwnKSxcbiAgICAgICAgcVNsaWRlcjogdmlzLnNlbGVjdCgnI3Etc2xpZGVyJyksXG4gICAgICAgIGV0YVNsaWRlcjogdmlzLnNlbGVjdCgnI2V0YS1zbGlkZXInKSxcbiAgICAgICAgaGVzc1R5cGU6IHZpcy5zZWxlY3QoJyNoZXNzLXR5cGUnKSxcbiAgICB9XG5cbiAgICBjb25zdCB2aXpzID0ge1xuICAgICAgICBwbG90OiBDb250b3VyUGxvdC5mcm9tTGFuZHNjYXBlKHNlbHMucGxvdCwgZXZlbnRIYW5kbGVyLCBsYW5kc2NhcGVzMmQuTGFuZHNjYXBlMSksXG4gICAgfVxuXG4gICAgY29uc3QgZGVmYXVsdHMgPSB7XG4gICAgICAgIC8vIE5vdGUgdG8gYWxzbyBjaGFuZ2UgdGhlIGRlZmF1bHQgdmFsdWUgaW4gdGhlIGh0bWwgZmlsZSFcbiAgICAgICAgcTogMCxcbiAgICAgICAgZXRhOiAwLjA1XG4gICAgfVxuXG4gICAgY29uc3Qgc2NhbGVzID0ge1xuICAgICAgICBxOiBkMy5zY2FsZUxpbmVhcigpLnJhbmdlKFswLCAxMF0pLmRvbWFpbihbMCwgMV0pLFxuICAgICAgICBldGE6IGQzLnNjYWxlTGluZWFyKCkucmFuZ2UoWzEsIDEwMDBdKS5kb21haW4oW01hdGgucG93KDEwLCAtOCksIDAuMDA0XSlcbiAgICB9XG5cbiAgICAvLyBJbml0aWFsaXplIGdyYXBoIHBhcmFtZXRlcnMgdG8gbWF0Y2ggdGhlIGRlZmF1bHRzXG4gICAgdml6cy5wbG90LnEoZGVmYXVsdHMucSlcbiAgICB2aXpzLnBsb3QuZXRhKGRlZmF1bHRzLmV0YSlcbiAgICBzZWxzLnFTbGlkZXIucHJvcGVydHkoJ3ZhbHVlJywgc2NhbGVzLnEoZGVmYXVsdHMucSkpXG4gICAgc2Vscy5ldGFTbGlkZXIucHJvcGVydHkoJ3ZhbHVlJywgc2NhbGVzLmV0YShkZWZhdWx0cy5ldGEpKVxuXG4gICAgc2Vscy5xSWQudGV4dCh0b1EoZGVmYXVsdHMucSkpXG4gICAgc2Vscy5ldGFJZC50ZXh0KHRvRXRhKGRlZmF1bHRzLmV0YSkpXG5cbiAgICBzZWxzLnFTbGlkZXIub24oJ2lucHV0JywgZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zdCBtZSA9IGQzLnNlbGVjdCh0aGlzKVxuICAgICAgICBjb25zdCB2ID0gc2NhbGVzLnEuaW52ZXJ0KCttZS5wcm9wZXJ0eSgndmFsdWUnKSk7XG4gICAgICAgIHZpenMucGxvdC5xKHYpO1xuICAgICAgICBzZWxzLnFJZC50ZXh0KGAke3RvUSh2KX1gKVxuICAgIH0pXG5cbiAgICBzZWxzLmV0YVNsaWRlci5vbignaW5wdXQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnN0IG1lID0gZDMuc2VsZWN0KHRoaXMpXG4gICAgICAgIGNvbnN0IHYgPSBzY2FsZXMuZXRhLmludmVydChtZS5wcm9wZXJ0eSgndmFsdWUnKSk7XG4gICAgICAgIHZpenMucGxvdC5ldGEodilcbiAgICAgICAgc2Vscy5ldGFJZC50ZXh0KGAke3RvRXRhKHYpfWApXG4gICAgfSlcblxuICAgIHNlbHMuaGVzc1R5cGUub24oJ2lucHV0JywgZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zdCBzZWxmID0gZDMuc2VsZWN0KHRoaXMpXG4gICAgICAgIGNvbnN0IHYgPSBzZWxmLnByb3BlcnR5KCd2YWx1ZScpXG4gICAgICAgIHZpenMucGxvdC5zZXRVcGRhdGVyKHYpXG4gICAgfSlcbn1cblxuZnVuY3Rpb24gcGxvdFF1YWRyYXRpY0Z1bmNzKCkge1xuICAgIGNvbnN0IHZpcyA9IGQzLnNlbGVjdChcIiN2aXMtcXVhZFwiKVxuICAgIGNvbnN0IGV2ZW50SGFuZGxlciA9IG5ldyBTaW1wbGVFdmVudEhhbmRsZXIoPEVsZW1lbnQ+dmlzLm5vZGUoKSlcblxuICAgIGNvbnN0IHNlbHMgPSB7XG4gICAgICAgIHF1YWRQbG90OiB2aXMuc2VsZWN0KFwiI3F1YWQtcGxvdFwiKVxuICAgIH1cblxuICAgIGNvbnN0IHZpenMgPSB7XG4gICAgICAgIHF1YWRQbG90OiBuZXcgUXVhZHJhdGljUGxvdHMoc2Vscy5xdWFkUGxvdCwgZXZlbnRIYW5kbGVyKVxuICAgIH1cblxuICAgIHZpenMucXVhZFBsb3QuZGF0YShbMSAvIDEuNCwgMSwgMS40XSlcbn1cblxuZnVuY3Rpb24gcGxvdFF1aXZlckdyYXBoKCkge1xuICAgIGNvbnN0IHZpczEgPSBkMy5zZWxlY3QoJyN2aXMxJylcbiAgICBjb25zdCBzZWxzID0ge1xuICAgICAgICBxdWl2ZXJQbG90OiB2aXMxLnNlbGVjdCgnI2NoYXJ0JyksXG4gICAgICAgIHFJZDogdmlzMS5zZWxlY3QoJyNxLXZhbCcpLFxuICAgICAgICBldGFJZDogdmlzMS5zZWxlY3QoJyNldGEtdmFsJyksXG4gICAgICAgIHFTbGlkZXI6IHZpczEuc2VsZWN0KCcjcS1zbGlkZXInKSxcbiAgICAgICAgZXRhU2xpZGVyOiB2aXMxLnNlbGVjdCgnI2V0YS1zbGlkZXInKSxcbiAgICAgICAgaGVzc1R5cGU6IHZpczEuc2VsZWN0KCcjaGVzcy10eXBlJyksXG4gICAgICAgIHNpbXBsZU5ldDogdmlzMS5zZWxlY3QoXCIjc2ltcGxlLW5ldC1jb250YWluZXJcIiksXG4gICAgfVxuICAgIGNvbnN0IGV2ZW50SGFuZGxlciA9IG5ldyBTaW1wbGVFdmVudEhhbmRsZXIoPEVsZW1lbnQ+dmlzMS5ub2RlKCkpXG5cbiAgICBjb25zdCB2aXpzID0ge1xuICAgICAgICBncmFwaDogQ29udG91clBsb3QuZnJvbUxhbmRzY2FwZShzZWxzLnF1aXZlclBsb3QsIGV2ZW50SGFuZGxlciwgbGFuZHNjYXBlczJkLlNpbXBsZU5ldDJEKSxcbiAgICAgICAgLy8gZ3JhcGg6IENvbnRvdXJQbG90LmZyb21MYW5kc2NhcGUoc2Vscy5xdWl2ZXJQbG90LCBldmVudEhhbmRsZXIsIGxhbmRzY2FwZXMyZC5FbGxpcHRpY2FsKSwgLy8gQlJPS0VOIFdoeT9cbiAgICAgICAgc2ltcGxlTmV0OiBuZXcgU2ltcGxlTmV0KHNlbHMuc2ltcGxlTmV0LCBldmVudEhhbmRsZXIpXG4gICAgfVxuXG4gICAgY29uc3QgZGVmYXVsdHMgPSB7XG4gICAgICAgIC8vIE5vdGUgdG8gYWxzbyBjaGFuZ2UgdGhlIGRlZmF1bHQgdmFsdWUgaW4gdGhlIGh0bWwgZmlsZSFcbiAgICAgICAgcTogMCxcbiAgICAgICAgZXRhOiAwLjA1XG4gICAgfVxuXG4gICAgY29uc3Qgc2NhbGVzID0ge1xuICAgICAgICBxOiBkMy5zY2FsZUxpbmVhcigpLnJhbmdlKFswLCAxMF0pLmRvbWFpbihbMCwgMV0pLFxuICAgICAgICBldGE6IGQzLnNjYWxlTGluZWFyKCkucmFuZ2UoWzEsIDEwMDBdKS5kb21haW4oW01hdGgucG93KDEwLCAtNSksIDAuNl0pXG4gICAgfVxuXG4gICAgLy8gQWRkIGNlbnRlciBsaW5lXG4gICAgY29uc3QgeHJhbmdlID0gbGluc3BhY2UoMC42LCAxLjYsIHZpenMuZ3JhcGgub3B0aW9ucy5tKVxuICAgIGNvbnN0IGVwcyA9IDAuMDAwMVxuICAgIGNvbnN0IGZpdExpbmUgPSB4ID0+IDEgLyAoeCArIGVwcyk7XG4gICAgY29uc3QgY2VudGVyQ29udG91ciA9IGQzLmxpbmUoKVxuICAgICAgICAueChkID0+IHZpenMuZ3JhcGguc2NhbGVzLnguY2xhbXAodHJ1ZSkoZFswXSkpXG4gICAgICAgIC55KGQgPT4gdml6cy5ncmFwaC5zY2FsZXMueS5jbGFtcCh0cnVlKShmaXRMaW5lKGRbMF0pKSlcblxuICAgIGNvbnN0IG1haW5GaXQgPSB2aXpzLmdyYXBoLmJhc2VcbiAgICAgICAgLmFwcGVuZChcInBhdGhcIilcbiAgICAgICAgLmNsYXNzZWQoXCJtYWluLWZpdFwiLCB0cnVlKVxuICAgICAgICAvLyBpIGRvZXNuJ3QgbWF0dGVyLCBuZWVkIGZpbGxlciBmb3IgbGluZSB0byB3b3JrXG4gICAgICAgIC5hdHRyKFwiZFwiLCBjZW50ZXJDb250b3VyKHhyYW5nZS5tYXAoKHgsIGkpID0+IFt4LCBpXSkpKVxuXG4gICAgLy8gSW5pdGlhbGl6ZSBncmFwaCBwYXJhbWV0ZXJzIHRvIG1hdGNoIHRoZSBkZWZhdWx0c1xuICAgIHZpenMuZ3JhcGgucShkZWZhdWx0cy5xKVxuICAgIHZpenMuZ3JhcGguZXRhKGRlZmF1bHRzLmV0YSlcbiAgICBzZWxzLnFTbGlkZXIucHJvcGVydHkoJ3ZhbHVlJywgc2NhbGVzLnEoZGVmYXVsdHMucSkpXG4gICAgc2Vscy5ldGFTbGlkZXIucHJvcGVydHkoJ3ZhbHVlJywgc2NhbGVzLmV0YShkZWZhdWx0cy5ldGEpKVxuXG4gICAgc2Vscy5xSWQudGV4dCh0b1EoZGVmYXVsdHMucSkpXG4gICAgc2Vscy5ldGFJZC50ZXh0KHRvRXRhKGRlZmF1bHRzLmV0YSkpXG5cbiAgICBzZWxzLnFTbGlkZXIub24oJ2lucHV0JywgZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zdCBtZSA9IGQzLnNlbGVjdCh0aGlzKVxuICAgICAgICBjb25zdCB2ID0gc2NhbGVzLnEuaW52ZXJ0KCttZS5wcm9wZXJ0eSgndmFsdWUnKSk7XG4gICAgICAgIHZpenMuZ3JhcGgucSh2KTtcbiAgICAgICAgc2Vscy5xSWQudGV4dChgJHt0b1Eodil9YClcbiAgICB9KVxuXG4gICAgc2Vscy5ldGFTbGlkZXIub24oJ2lucHV0JywgZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zdCBtZSA9IGQzLnNlbGVjdCh0aGlzKVxuICAgICAgICBjb25zdCB2ID0gc2NhbGVzLmV0YS5pbnZlcnQobWUucHJvcGVydHkoJ3ZhbHVlJykpO1xuICAgICAgICB2aXpzLmdyYXBoLmV0YSh2KVxuICAgICAgICBzZWxzLmV0YUlkLnRleHQoYCR7dG9FdGEodil9YClcbiAgICB9KVxuXG4gICAgc2Vscy5oZXNzVHlwZS5vbignaW5wdXQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnN0IHNlbGYgPSBkMy5zZWxlY3QodGhpcylcbiAgICAgICAgY29uc3QgdiA9IHNlbGYucHJvcGVydHkoJ3ZhbHVlJylcbiAgICAgICAgdml6cy5ncmFwaC5zZXRVcGRhdGVyKHYpXG4gICAgfSlcblxuICAgIC8vIENhdGNoIGV2ZW50IG9mIHN0ZXBcbiAgICBldmVudEhhbmRsZXIuYmluZChDb250b3VyUGxvdC5ldmVudHMuc3RlcEFkZGVkLCAodjogQXJyYXkpID0+IHtcbiAgICAgICAgdml6cy5zaW1wbGVOZXQuc2V0U3RhdGUodilcbiAgICB9KVxufVxuXG5mdW5jdGlvbiBwbG90R29sZkhvbGUzQmFsbCgpIHtcbiAgICBjb25zdCB2aXMyID0gZDMuc2VsZWN0KFwiI3ZpczJcIik7XG4gICAgY29uc3Qgc2VscyA9IHtcbiAgICAgICAgY2hhcnQ6IHZpczIuc2VsZWN0KCcjY2hhcnQnKSxcbiAgICAgICAgY2hhcnRYRGlzdDogdmlzMi5zZWxlY3QoJyNjaGFydC14ZGlzdCcpLFxuICAgICAgICBjaGFydExvc3NlczogdmlzMi5zZWxlY3QoJyNjaGFydC1sb3NzZXMnKSxcbiAgICAgICAgbGFuZHNjYXBlU2VsZWN0b3I6IHZpczIuc2VsZWN0KCcubGFuZHNjYXBlLXNlbGVjdCcpLFxuICAgIH1cblxuICAgIGNvbnN0IGV2ZW50SGFuZGxlciA9IG5ldyBTaW1wbGVFdmVudEhhbmRsZXIoPEVsZW1lbnQ+dmlzMi5ub2RlKCkpXG4gICAgY29uc3Qgdml6cyA9IHtcbiAgICAgICAgZ3JhcGg6IG5ldyBHb2xmSG9sZTFEKHNlbHMuY2hhcnQsIGV2ZW50SGFuZGxlciwge30sIFVJZC51aWQoKSksXG4gICAgICAgIGNoYXJ0WERpc3Q6IG5ldyBHb2xmWERpc3Qoc2Vscy5jaGFydFhEaXN0LCBldmVudEhhbmRsZXIpLFxuICAgICAgICBjaGFydExvc3NlczogbmV3IEdvbGZMb3NzZXMoc2Vscy5jaGFydExvc3NlcywgZXZlbnRIYW5kbGVyKSxcbiAgICB9XG5cbiAgICBpbnRlcmZhY2UgR29sZkRlZmF1bHRzIHtcbiAgICAgICAgbGFuZHNjYXBlOiBzdHJpbmdcbiAgICAgICAgcXM6IG51bWJlcltdXG4gICAgICAgIGNsYXNzTmFtZXM6IHN0cmluZ1tdXG4gICAgICAgIGV0YXM/OiBudW1iZXJbXVxuICAgIH1cblxuICAgIC8vIENvcnJlc3BvbmRzIHRvIHFzID0gWzAsIDAuNSwgMV1cbiAgICBjb25zdCBkZWZhdWx0RXRhID0ge1xuICAgICAgICBzZWFndWxsOiBbMC4wMDUsIDAuMDA1LCAwLjAwNV0sXG4gICAgICAgIGhvbGU6IFswLjAwNSwgMC4wMDUsIDAuMDA1XSxcbiAgICAgICAgc3RlcHM6IFswLjAwNSwgMC4wMDUsIDAuMDA1XSxcbiAgICAgICAgYm93bDogWzAuMDMsIDAuMDMsIDAuMDNdLFxuICAgICAgICBkZWVwX25ldDogWzAuMDEsIDAuMDEsIDAuMDFdLFxuICAgIH1cblxuICAgIGNvbnN0IGRlZmF1bHRzOiBHb2xmRGVmYXVsdHMgPSB7XG4gICAgICAgIGxhbmRzY2FwZTogXCJzZWFndWxsXCIsXG4gICAgICAgIHFzOiBbMCwgMC41LCAxXSxcbiAgICAgICAgY2xhc3NOYW1lczogWydnb2xmLWJhbGwtc2dkJywgJ2dvbGYtYmFsbC1zbmdkJywgJ2dvbGYtYmFsbC1uZ2QnXSwgLy8gRG9uJ3QgY2hhbmdlIHRoZXNlIHVubGVzcyB5b3Ugd2FudCB0byBwbGF5IHdpdGggQ1NTISFcbiAgICB9XG4gICAgZGVmYXVsdHMuZXRhcyA9IGRlZmF1bHRFdGFbZGVmYXVsdHMubGFuZHNjYXBlXVxuXG4gICAgY29uc3QgZGVmYXVsdExhbmRzY2FwZSA9IGxhbmRzY2FwZXNbZGVmYXVsdHMubGFuZHNjYXBlXVxuXG4gICAgLy9AdHMtaWdub3JlXG4gICAgY29uc3QgZGVmYXVsdEJhbGxzID0gZDMuemlwKGRlZmF1bHRzLnFzLCBkZWZhdWx0cy5ldGFzLCBkZWZhdWx0cy5jbGFzc05hbWVzKS5tYXAoKHgpID0+IG5ldyBHb2xmQmFsbChuZXcgTWFudWFsVXBkYXRlcihkZWZhdWx0TGFuZHNjYXBlLmYsIGRlZmF1bHRMYW5kc2NhcGUuZGYsIHhbMF0sIHhbMV0pLCB4WzJdKSlcblxuICAgIHZpenMuZ3JhcGguZGF0YShkZWZhdWx0QmFsbHMpXG5cbiAgICAvLyBBdHRhY2ggZ29sZmJhbGwgaW5mbyB0byBsb3NzIHRyYWNrZXJcbiAgICBldmVudEhhbmRsZXIuYmluZCgnbG9zcy1jbGljaycsIChlKSA9PiB7XG4gICAgICAgIHZpenMuY2hhcnRYRGlzdC5jbGVhclBhdGhzKClcbiAgICAgICAgdml6cy5jaGFydExvc3Nlcy5jbGVhclBhdGhzKClcbiAgICB9KVxuXG4gICAgLy8gQ29uZmlndXJlIGh0bWwgcGFnZSB0byB3b3JrIHdpdGggZGVmYXVsdHNcbiAgICBzZWxzLmxhbmRzY2FwZVNlbGVjdG9yLnByb3BlcnR5KCd2YWx1ZScsIGRlZmF1bHRzLmxhbmRzY2FwZSlcbiAgICB2aXpzLmdyYXBoLmxhbmRzY2FwZShsYW5kc2NhcGVzW2RlZmF1bHRzLmxhbmRzY2FwZV0pXG5cbiAgICBsZXQgcnVubmluZ1N0cmVhbXMgPSBbXVxuXG4gICAgLy8gQXNzaWduIHN0cmVhbXNcbiAgICBjb25zdCBhc3NpZ25TdHJlYW1zID0gKGdyYXBoOiBHb2xmSG9sZTFELCBjdXJyZW50U3RyZWFtcyA9IFtdKSA9PiB7XG4gICAgICAgIGNvbnN0IHN0cmVhbXMgPSBncmFwaC5kYXRhKCkubWFwKGIgPT4gYi5zdHJlYW0pXG5cbiAgICAgICAgY29uc3QgcGxvdHRlciA9IHtcbiAgICAgICAgICAgIG5leHQ6IGQgPT4ge1xuICAgICAgICAgICAgICAgIHZpenMuY2hhcnRYRGlzdC5wbG90UGF0aChkLCBncmFwaC5zY2FsZXMuYmFzZTJtYXRoLnguaW52ZXJ0KVxuICAgICAgICAgICAgICAgIHZpenMuY2hhcnRMb3NzZXMucGxvdFBhdGgoZCwgZ3JhcGguc2NhbGVzLmJhc2UybG9zcylcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGN1cnJlbnRTdHJlYW1zLmZvckVhY2gocyA9PiBzLnVuc3Vic2NyaWJlKCkpXG5cbiAgICAgICAgY29uc3QgYWN0aXZhdGVkU3RyZWFtcyA9IHN0cmVhbXMubWFwKHMgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHMuc3Vic2NyaWJlKHBsb3R0ZXIpXG4gICAgICAgIH0pXG4gICAgICAgIHJldHVybiBhY3RpdmF0ZWRTdHJlYW1zXG4gICAgfVxuXG4gICAgLy8gR2F0aGVyIGludGVyYWN0aXZpdHkgZm9yIHRoZSBnb2xmIGJhbGwgcGxvdFxuICAgIHNlbHMubGFuZHNjYXBlU2VsZWN0b3Iub24oJ2lucHV0JywgZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zdCBzZWxmID0gZDMuc2VsZWN0KHRoaXMpXG4gICAgICAgIGNvbnN0IHYgPSBzZWxmLnByb3BlcnR5KCd2YWx1ZScpXG4gICAgICAgIHZpenMuY2hhcnRMb3NzZXMucmVzZXRYcmFuZ2VfKClcbiAgICAgICAgdml6cy5jaGFydFhEaXN0LnJlc2V0WHJhbmdlXygpXG4gICAgICAgIHZpenMuZ3JhcGgubGFuZHNjYXBlKGxhbmRzY2FwZXNbdl0pXG4gICAgICAgIHZpenMuZ3JhcGguZGF0YUZyb21CYXNlKHZpenMuZ3JhcGguZGF0YVRvQmFzZV8oKSlcbiAgICAgICAgcnVubmluZ1N0cmVhbXMgPSBhc3NpZ25TdHJlYW1zKHZpenMuZ3JhcGgsIHJ1bm5pbmdTdHJlYW1zKVxuICAgIH0pXG4gICAgcnVubmluZ1N0cmVhbXMgPSBhc3NpZ25TdHJlYW1zKHZpenMuZ3JhcGgsIHJ1bm5pbmdTdHJlYW1zKVxufVxuXG5mdW5jdGlvbiBwbG90R29sZkhvbGVTbGlkZXIoKSB7XG4gICAgY29uc3QgdmlzMyA9IGQzLnNlbGVjdChcIiN2aXMzXCIpO1xuXG4gICAgY29uc3Qgc2VscyA9IHtcbiAgICAgICAgY2hhcnQ6IHZpczMuc2VsZWN0KCcjY2hhcnQnKSxcbiAgICAgICAgY2hhcnRMb3NzZXM6IHZpczMuc2VsZWN0KCcjY2hhcnQtbG9zc2VzJyksXG4gICAgICAgIGNoYXJ0WERpc3Q6IHZpczMuc2VsZWN0KCcjY2hhcnQteGRpc3QnKSxcbiAgICAgICAgcUlkOiB2aXMzLnNlbGVjdCgnI3EtdmFsJyksXG4gICAgICAgIGV0YUlkOiB2aXMzLnNlbGVjdCgnI2V0YS12YWwnKSxcbiAgICAgICAgcVNsaWRlcjogdmlzMy5zZWxlY3QoJyNxLXNsaWRlcicpLFxuICAgICAgICBldGFTbGlkZXI6IHZpczMuc2VsZWN0KCcjZXRhLXNsaWRlcicpLFxuICAgICAgICBsYW5kc2NhcGVTZWxlY3RvcjogdmlzMy5zZWxlY3QoJy5sYW5kc2NhcGUtc2VsZWN0JylcbiAgICB9XG5cbiAgICBjb25zdCBldmVudEhhbmRsZXIgPSBuZXcgU2ltcGxlRXZlbnRIYW5kbGVyKDxFbGVtZW50PnZpczMubm9kZSgpKVxuXG4gICAgY29uc3Qgdml6cyA9IHtcbiAgICAgICAgZ3JhcGg6IG5ldyBHb2xmSG9sZTFEKHNlbHMuY2hhcnQsIGV2ZW50SGFuZGxlciwgeyBtYXhJdGVyOiAxLjVlMyB9LCBVSWQudWlkKCkpLFxuICAgICAgICBjaGFydExvc3NlczogbmV3IEdvbGZMb3NzZXMoc2Vscy5jaGFydExvc3NlcywgZXZlbnRIYW5kbGVyKSxcbiAgICAgICAgY2hhcnRYRGlzdDogbmV3IEdvbGZYRGlzdChzZWxzLmNoYXJ0WERpc3QsIGV2ZW50SGFuZGxlcilcbiAgICB9XG5cbiAgICBjb25zdCBkZWZhdWx0cyA9IHtcbiAgICAgICAgLy8gTm90ZSB0byBhbHNvIGNoYW5nZSB0aGUgZGVmYXVsdCB2YWx1ZSBpbiB0aGUgaHRtbCBmaWxlIVxuICAgICAgICBsYW5kc2NhcGU6IFwic2VhZ3VsbFwiLFxuICAgICAgICBxOiAwLjUsXG4gICAgICAgIGV0YTogMC4wMVxuICAgIH1cblxuICAgIC8vIEF0dGFjaCBnb2xmYmFsbCBpbmZvIHRvIGxvc3MgdHJhY2tlclxuICAgIGV2ZW50SGFuZGxlci5iaW5kKCdsb3NzLWNsaWNrJywgKGUpID0+IHtcbiAgICAgICAgdml6cy5jaGFydFhEaXN0LmNsZWFyUGF0aHMoKVxuICAgICAgICB2aXpzLmNoYXJ0TG9zc2VzLmNsZWFyUGF0aHMoKVxuICAgIH0pXG5cbiAgICAvLyBQdXQgZGF0YSBpbnRvIHZpelxuICAgIHZpenMuZ3JhcGguZGF0YShbbmV3IEdvbGZCYWxsKG5ldyBNYW51YWxVcGRhdGVyKGxhbmRzY2FwZXMuaG9sZS5mLCBsYW5kc2NhcGVzLmhvbGUuZGYsIGRlZmF1bHRzLnEsIGRlZmF1bHRzLmV0YSksIFwiZ29sZi1iYWxsXCIpXSlcblxuICAgIC8vIGNvbnN0IGV0YVJhbmdlID0gWy01LCAyXS5tYXAoeCA9PiBNYXRoLnBvdygxMCwgeCkpXG4gICAgY29uc3QgZXRhUmFuZ2UgPSBbLTMsIDBdLm1hcCh4ID0+IE1hdGgucG93KDEwLCB4KSlcbiAgICBjb25zdCBzY2FsZXMgPSB7XG4gICAgICAgIHE6IGQzLnNjYWxlTGluZWFyKCkucmFuZ2UoWzAsIDEwXSkuZG9tYWluKFswLCAxXSksXG4gICAgICAgIGV0YTogZDMuc2NhbGVMb2coKS5yYW5nZShbMSwgMTAwMF0pLmRvbWFpbihldGFSYW5nZSkuYmFzZSgxMClcbiAgICB9XG5cbiAgICAvLyBJbml0aWFsaXplIGdyYXBoIHBhcmFtZXRlcnMgdG8gbWF0Y2ggdGhlIGRlZmF1bHRzXG4gICAgdml6cy5ncmFwaC5sYW5kc2NhcGUobGFuZHNjYXBlc1tkZWZhdWx0cy5sYW5kc2NhcGVdKVxuICAgIHNlbHMubGFuZHNjYXBlU2VsZWN0b3IucHJvcGVydHkoJ3ZhbHVlJywgZGVmYXVsdHMubGFuZHNjYXBlKVxuXG4gICAgc2Vscy5xU2xpZGVyLnByb3BlcnR5KCd2YWx1ZScsIHNjYWxlcy5xKGRlZmF1bHRzLnEpKVxuICAgIHNlbHMuZXRhU2xpZGVyLnByb3BlcnR5KCd2YWx1ZScsIHNjYWxlcy5ldGEoZGVmYXVsdHMuZXRhKSlcbiAgICBzZWxzLnFJZC50ZXh0KHRvUShkZWZhdWx0cy5xKSlcbiAgICBzZWxzLmV0YUlkLnRleHQodG9FdGEoZGVmYXVsdHMuZXRhKSlcblxuICAgIC8vIEFzc2lnbiBzdHJlYW1zXG4gICAgbGV0IHJ1bm5pbmdTdHJlYW1zID0gW11cbiAgICBjb25zdCBhc3NpZ25TdHJlYW1zID0gKGdyYXBoOiBHb2xmSG9sZTFELCBjdXJyZW50U3RyZWFtcyA9IFtdKSA9PiB7XG4gICAgICAgIGNvbnN0IHN0cmVhbXMgPSBncmFwaC5kYXRhKCkubWFwKGIgPT4gYi5zdHJlYW0pXG5cbiAgICAgICAgY29uc3QgcGxvdHRlciA9IHtcbiAgICAgICAgICAgIG5leHQ6IGQgPT4ge1xuICAgICAgICAgICAgICAgIHZpenMuY2hhcnRYRGlzdC5wbG90UGF0aChkLCBncmFwaC5zY2FsZXMuYmFzZTJtYXRoLnguaW52ZXJ0KVxuICAgICAgICAgICAgICAgIHZpenMuY2hhcnRMb3NzZXMucGxvdFBhdGgoZCwgZ3JhcGguc2NhbGVzLmJhc2UybG9zcylcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGN1cnJlbnRTdHJlYW1zLmZvckVhY2gocyA9PiBzLnVuc3Vic2NyaWJlKCkpXG5cbiAgICAgICAgY29uc3QgYWN0aXZhdGVkU3RyZWFtcyA9IHN0cmVhbXMubWFwKHMgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHMuc3Vic2NyaWJlKHBsb3R0ZXIpXG4gICAgICAgIH0pXG5cbiAgICAgICAgcmV0dXJuIGFjdGl2YXRlZFN0cmVhbXNcbiAgICB9XG5cbiAgICAvLyBBZGp1c3Qgc2xpZGVyIHJlYWN0aXZpdHlcbiAgICBzZWxzLnFTbGlkZXIub24oJ2lucHV0JywgZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zdCBtZSA9IGQzLnNlbGVjdCh0aGlzKVxuICAgICAgICBjb25zdCB2ID0gc2NhbGVzLnEuaW52ZXJ0KG1lLnByb3BlcnR5KCd2YWx1ZScpKTtcbiAgICAgICAgdml6cy5ncmFwaC5xKHYpXG4gICAgICAgIHNlbHMucUlkLnRleHQoYCR7dG9RKHYpfWApXG4gICAgfSlcblxuICAgIHNlbHMuZXRhU2xpZGVyLm9uKCdpbnB1dCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc3QgbWUgPSBkMy5zZWxlY3QodGhpcylcbiAgICAgICAgY29uc3QgdiA9IHNjYWxlcy5ldGEuaW52ZXJ0KG1lLnByb3BlcnR5KCd2YWx1ZScpKTtcbiAgICAgICAgdml6cy5ncmFwaC5ldGEodilcbiAgICAgICAgc2Vscy5ldGFJZC50ZXh0KGAke3RvRXRhKHYpfWApXG4gICAgfSlcblxuICAgIHNlbHMubGFuZHNjYXBlU2VsZWN0b3Iub24oJ2lucHV0JywgZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zdCBzZWxmID0gZDMuc2VsZWN0KHRoaXMpXG4gICAgICAgIGNvbnN0IHYgPSBzZWxmLnByb3BlcnR5KCd2YWx1ZScpXG4gICAgICAgIHZpenMuY2hhcnRMb3NzZXMucmVzZXRYcmFuZ2VfKClcbiAgICAgICAgdml6cy5jaGFydFhEaXN0LnJlc2V0WHJhbmdlXygpXG4gICAgICAgIHZpenMuZ3JhcGgubGFuZHNjYXBlKGxhbmRzY2FwZXNbdl0pXG4gICAgICAgIHZpenMuZ3JhcGguZGF0YUZyb21CYXNlKHZpenMuZ3JhcGguZGF0YVRvQmFzZV8oKSlcbiAgICAgICAgcnVubmluZ1N0cmVhbXMgPSBhc3NpZ25TdHJlYW1zKHZpenMuZ3JhcGgsIHJ1bm5pbmdTdHJlYW1zKVxuICAgIH0pXG4gICAgcnVubmluZ1N0cmVhbXMgPSBhc3NpZ25TdHJlYW1zKHZpenMuZ3JhcGgsIHJ1bm5pbmdTdHJlYW1zKVxufVxuXG5mdW5jdGlvbiB0ZXN0aW5nKCkge1xuICAgIGNvbnNvbGUubG9nKFwiVEVTVFwiKTtcblxuICAgIGNvbnN0IHYgPSBuai5hcnJheShbNC4xODQ1MjUsIDQuNTk3ODk2XSlcbiAgICBjb25zdCBqYWMgPSBuai5hcnJheShbWyAtMy41NDgzNzgsICAyOC42MjM2OThdLCBbIC0yLjgwNDM5MywgLTI4LjIzNzg5Nl1dKVxuICAgIFxuICAgIGNvbnN0IG15SmFjID0gYnVtcHkuamFjb2JpYW4odilcbiAgICBjb25zb2xlLmxvZyhcIk15OiBcIiwgbXlKYWMpO1xuICAgIGNvbnNvbGUubG9nKFwiVGhlaXJzOiBcIiwgamFjKTtcbiAgICBjb25zb2xlLmxvZyhuai5zdWJ0cmFjdChqYWMsIG15SmFjKSk7XG4gICAgLy8gbGV0IEEgPSBuai5hcnJheShbWzEsMl0sIFsyLDFdXSlcbiAgICAvLyBsZXQgdiA9IG5qLmFycmF5KFsxLDNdKVxuICAgIC8vIGNvbnN0IHVwID0gbmV3IFVwZGF0ZXIyRCgpXG5cbiAgICAvLyBjb25zb2xlLmxvZyhcIkxSOiBcIiwgdXAubHIodikpO1xuICAgIC8vIGNvbnNvbGUubG9nKFwiR3JhZGllbnQ6IFwiLCB1cC5ncmFkaWVudCh2KSk7XG4gICAgLy8gY29uc29sZS5sb2coXCJFUlI6IFwiLCB1cC5fZih2KSk7XG5cbiAgICAvLyBjb25zb2xlLmxvZyhcIk5KIEFycmF5IEluY2VwdGlvbjogXCIsIG5qLmFycmF5KHYpKVxuICAgIC8vIC8vIGxldCB2ID0gbmouYXJyYXkoWzEsMl0pXG4gICAgLy8gbGV0IHYyID0gbmouYXJyYXkoWzQsNV0pXG4gICAgLy8gY29uc29sZS5sb2codik7XG5cbiAgICAvLyAvL0B0cy1pZ25vcmVcbiAgICAvLyBjb25zb2xlLmxvZyhuai5kb3QoQSwgdikpO1xuXG4gICAgLy8gY29uc3QgYnVtcHkgPSBMYW5kc2NhcGVMb3NzKFsxLDIsM10sIFsxLDEsMV0pXG5cbiAgICAvLyBjb25zdCB2ID0gbmouYXJyYXkoWzEsMV0pXG5cbiAgICAvLyBjb25zb2xlLmxvZyhcIkZvcndhcmQgUmVzdWx0czogXCIsIGJ1bXB5LmZvcndhcmQodikpXG4gICAgLy8gY29uc29sZS5sb2coXCJKYWMgUmVzdWx0czogXCIsIGJ1bXB5LmphY29iaWFuKHYpKVxuICAgIGNvbnNvbGUubG9nKFwiRU5EIFRFU1RcIik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtYWluKCkge1xuICAgIHRlc3RpbmcoKVxuXG4gICAgcGxvdFF1YWRyYXRpY0Z1bmNzKCk7XG4gICAgcGxvdEVsbGlwdGljYWwoKTtcbiAgICBwbG90UXVpdmVyR3JhcGgoKTtcbiAgICBwbG90R29sZkhvbGUzQmFsbCgpO1xuICAgIHBsb3RHb2xmSG9sZVNsaWRlcigpO1xuICAgIHBsb3RCdW1weUxvc3MyRCgpO1xufVxuIiwiaW1wb3J0ICogYXMgZDMgZnJvbSAnZDMnXG5pbXBvcnQgeyBNYXJnaW5JbmZvIH0gZnJvbSAnLi91dGlsL1NWR1Zpc0NvbXBvbmVudCdcbmltcG9ydCB7IEQzU2VsIH0gZnJvbSAnLi91dGlsL3hkMydcbmltcG9ydCB7cmFuZ2V9IGZyb20gJ3JhbWRhJ1xuXG5leHBvcnQgZnVuY3Rpb24gYWRkU1ZHKGRpdjogc3RyaW5nLCB3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlciwgbWFyZ2luOiBNYXJnaW5JbmZvKTogRDNTZWwge1xuXG4gICAgdmFyIHN2ZyA9IGQzLnNlbGVjdChkaXYpLmFwcGVuZChcInN2Z1wiKVxuICAgICAgICAuYXR0cihcIndpZHRoXCIsIFwiMTAwJVwiKVxuICAgICAgICAuYXR0cihcImhlaWdodFwiLCBcIjEwMCVcIilcbiAgICAgICAgLmF0dHIoXCJ2aWV3Qm94XCIsIFwiMCAwIFwiICsgKHdpZHRoICsgbWFyZ2luLmxlZnQgKyBtYXJnaW4ucmlnaHQpICsgXCIgXCIgKyAoaGVpZ2h0ICsgbWFyZ2luLnRvcCArIG1hcmdpbi5ib3R0b20pKVxuICAgICAgICAuYXR0cihcInByZXNlcnZlQXNwZWN0UmF0aW9cIiwgXCJ4TWlkWU1pZCBtZWV0XCIpXG4gICAgICAgIC5hcHBlbmQoXCJnXCIpXG4gICAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIFwidHJhbnNsYXRlKFwiICsgbWFyZ2luLmxlZnQgKyBcIixcIiArIG1hcmdpbi50b3AgKyBcIilcIik7XG5cbiAgICByZXR1cm4gc3ZnO1xufVxuXG50eXBlIERvbWFpblJhbmdlID0gbnVtYmVyW11cblxuLyoqXG4gKiBcbiAqIEBwYXJhbSBueCBOdW1iZXIgb2YgZ3JpZHBvaW50cyBhbG9uZyB4XG4gKiBAcGFyYW0gbnkgTnVtYmVyIG9mIGdyaWRwb2ludHMgYWxvbmcgeVxuICogQHBhcmFtIHhyYW5nZSBSYW5nZSBhbG9uZyB4IGF4aXNcbiAqIEBwYXJhbSB5cmFuZ2UgUmFuZ2UgYWxvbmcgeSBheGlzXG4gKiBAcGFyYW0gZnVuYyAoeCx5KSA9PiBudW1iZXIsIGZ1bmN0aW9uIHRvIHBsb3RcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldENvbnRvdXJWYWx1ZXMobng6IG51bWJlciwgbnk6IG51bWJlciwgeHJhbmdlOiBEb21haW5SYW5nZSwgeXJhbmdlOiBEb21haW5SYW5nZSwgZnVuYzogKHg6IG51bWJlciwgeTogbnVtYmVyKSA9PiBudW1iZXIpIHtcbiAgICBsZXQgdmFsdWVzID0gbmV3IEFycmF5KG54ICogbnkpXG5cbiAgICBmb3IgKHZhciBqID0gMC41LCBrID0gMDsgaiA8IG55OyArK2opIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDAuNTsgaSA8IG54OyArK2ksICsraykge1xuICAgICAgICAgICAgY29uc3QgeHZhbCA9ICgoaSAvIG54KSAqICh4cmFuZ2VbMV0gLSB4cmFuZ2VbMF0pKSArIHhyYW5nZVswXTtcbiAgICAgICAgICAgIGNvbnN0IHl2YWwgPSAoMSAtIChqIC8gbnkpKSAqICh5cmFuZ2VbMV0gLSB5cmFuZ2VbMF0pICsgeXJhbmdlWzBdO1xuICAgICAgICAgICAgdmFsdWVzW2tdID0gZnVuYyh4dmFsLCB5dmFsKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB2YWx1ZXNcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVuaWZvcm0oYSwgYikge1xuICAgIHJldHVybiBNYXRoLnJhbmRvbSgpICogKGIgLSBhKSArIGE7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZW5Vbmlmb3JtKGE6bnVtYmVyLCBiOm51bWJlciwgbjpudW1iZXIpIHtcbiAgICByZXR1cm4gcmFuZ2UoMCwgbikubWFwKHggPT4ge3JldHVybiB7eDogdW5pZm9ybShhLCBiKSwgeTogdW5pZm9ybShhLGIpfX0pXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBub3JtYWwobWVhbiwgdmFyaWFuY2UpIHtcbiAgICB2YXIgcyA9IDA7XG4gICAgd2hpbGUgKHMgPT0gMCB8fCBzID4gMSkge1xuICAgICAgICB2YXIgdSA9IHVuaWZvcm0oLTEsMSksXG4gICAgICAgIHYgPSB1bmlmb3JtKC0xLDEpO1xuICAgICAgICBzID0gdSAqIHUgKyB2ICogdjtcbiAgICB9XG5cbiAgICB2YXIgc3RhbmRhcmQgPSBNYXRoLnNxcnQoLTIgKiBNYXRoLmxvZyhzKSAvIHMpICogdTtcbiAgICByZXR1cm4gbWVhbiArIE1hdGguc3FydCh2YXJpYW5jZSkgKiBzdGFuZGFyZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdlbk5vcm1hbChtZWFuOm51bWJlciwgdmFyaWFuY2U6bnVtYmVyLCBuOm51bWJlcikge1xuICAgIHJldHVybiByYW5nZSgwLCBuKS5tYXAoeCA9PiB7cmV0dXJuIHt4OiBub3JtYWwobWVhbiwgdmFyaWFuY2UpLCB5OiB1bmlmb3JtKG1lYW4sdmFyaWFuY2UpfX0pXG59IiwiaW1wb3J0ICogYXMgZDMgZnJvbSAnZDMnXG5pbXBvcnQgeyBWZWN0b3IyRCB9IGZyb20gJy4uL3R5cGVzJ1xuaW1wb3J0IHsgU1ZHVmlzQ29tcG9uZW50LCBTVkdPcHRpb25zLCBNYXJnaW5JbmZvIH0gZnJvbSBcIi4vU1ZHVmlzQ29tcG9uZW50XCJcblxuZXhwb3J0IGludGVyZmFjZSBDaGFydE9wdGlvbnMgZXh0ZW5kcyBTVkdPcHRpb25zIHtcbiAgICB4cmFuZ2U6IFtudW1iZXIsIG51bWJlcl1cbiAgICB5cmFuZ2U6IFtudW1iZXIsIG51bWJlcl1cbiAgICBwYWQ6IE1hcmdpbkluZm8gICAgICAgICAgICAgLy8gRGlzdGFuY2UgZnJvbSBlZGdlcy4gRGVtYXJjYXRlIHdoZW4gdGhpbmdzIGFyZSB0b28gY2xvc2UgdG8gdGhlIGVkZ2Vcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDaGFydFNjYWxlcyB7XG4gICAgeD86IGQzLlNjYWxlTGluZWFyPG51bWJlciwgbnVtYmVyPixcbiAgICB5PzogZDMuU2NhbGVMaW5lYXI8bnVtYmVyLCBudW1iZXI+LFxufVxuLyoqXG4gKiBDcmVhdGUgYSBjbGFzcyB0aGF0IGNhbiBiZSB1c2VkIGZvciBwbG90dGluZyBjaGFydHMgKGxpbmUgZ3JhcGhzLCBiYXIgZ3JhcGhzLCBldGMuKS5cbiAqL1xuZXhwb3J0IGFic3RyYWN0IGNsYXNzIENoYXJ0MkQ8RGF0YUludGVyZmFjZT4gZXh0ZW5kcyBTVkdWaXNDb21wb25lbnQ8RGF0YUludGVyZmFjZT4ge1xuICAgIG9wdGlvbnM6IENoYXJ0T3B0aW9uc1xuICAgIHNjYWxlczogQ2hhcnRTY2FsZXNcblxuICAgIC8vIFB1dCBhIHZlY3RvciBpbnRvIHRoZSBjb29yZGluYXRlIHN5c3RlbSB1c2VkIGJ5IHRoZSB2aXN1YWxpemF0aW9uXG4gICAgaW50b1Zpcyh2OiBWZWN0b3IyRCkge1xuICAgICAgICByZXR1cm4geyB4OiB0aGlzLnNjYWxlcy54KHYueCksIHk6IHRoaXMuc2NhbGVzLnkodi55KSB9XG4gICAgfVxuXG4gICAgLy8gVGFrZSBhIHZlY3RvciBpbiB0aGUgY29vcmRpbmF0ZSBzeXN0ZW0gYW5kIHJldHVybiBpdCB0byB0aGUgbWF0aCBjb29yZGluYXRlc1xuICAgIGludG9NYXRoKHY6IFZlY3RvcjJEKSB7XG4gICAgICAgIHJldHVybiB7IHg6IHRoaXMuc2NhbGVzLnguaW52ZXJ0KHYueCksIHk6IHRoaXMuc2NhbGVzLnkuaW52ZXJ0KHYueSkgfVxuICAgIH1cblxuICAgIC8vIEluc3RhbnRpYXRlIHRoZSBheGVzIG9mIHRoZSBjaGFydC4gUmVpbXBsZW1lbnQgZGVwZW5kaW5nIG9uIGhvdyB3ZSB3YW50IHRoZSBheGVzIHRvIGFwcGVhclxuICAgIHByb3RlY3RlZCBhYnN0cmFjdCBjcmVhdGVBeGVzKClcblxuICAgIC8vIEluc3RhbnRpYXRlIHRoZSBzY2FsZXMgZnJvbSB0aGUgeHJhbmdlIGFuZCB0aGUgeXJhbmdlXG4gICAgcHJvdGVjdGVkIGFic3RyYWN0IGNyZWF0ZVNjYWxlcygpXG59IiwiaW1wb3J0IHtWaXNDb21wb25lbnR9IGZyb20gJy4vVmlzQ29tcG9uZW50J1xuaW1wb3J0IHtTaW1wbGVFdmVudEhhbmRsZXJ9IGZyb20gJy4vU2ltcGxlRXZlbnRIYW5kbGVyJ1xuaW1wb3J0IHtEM1NlbH0gZnJvbSAnLi94ZDMnXG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBIVE1MVmlzQ29tcG9uZW50PERhdGFJbnRlcmZhY2U+IGV4dGVuZHMgVmlzQ29tcG9uZW50PERhdGFJbnRlcmZhY2U+IHtcblxuICAgIHByb3RlY3RlZCBjb25zdHJ1Y3RvcihkM3BhcmVudDogRDNTZWwsIGV2ZW50SGFuZGxlcj86IFNpbXBsZUV2ZW50SGFuZGxlciwgb3B0aW9uczoge30gPSB7fSwgSUQ9MCkge1xuICAgICAgICBzdXBlcihkM3BhcmVudCwgZXZlbnRIYW5kbGVyLCBJRClcbiAgICAgICAgdGhpcy5pbml0SFRNTChvcHRpb25zKVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIE11c3QgYmUgY2FsbGVkIGltbWVkaWF0ZWx5IGFmdGVyIHRoZSBgc3VwZXIoKWAgY29uc3RydWN0b3IgY2FsbCBvZiBpbmhlcmV0aW5nIGNsYXNzZXNcbiAgICAgKiBcbiAgICAgKiAtIENyZWF0ZXMgYGJhc2VgIGF0dHJpYnV0ZSBvbiBwYXJlbnRcbiAgICAgKiAtIEFkZCBhZGRpdGlvbmFsIHN0YXRpYyBlbGVtZW50cyBkZWZpbmVkIGluIGBpbml0KClgXG4gICAgICovXG4gICAgaW5pdEhUTUwob3B0aW9uczoge30gPSB7fSkge1xuICAgICAgICB0aGlzLnVwZGF0ZU9wdGlvbnMob3B0aW9ucylcbiAgICAgICAgdGhpcy5iYXNlID0gdGhpcy5wYXJlbnQuYXBwZW5kKCdkaXYnKVxuICAgIH1cbn0iLCJpbXBvcnQgeyBEM1NlbCB9IGZyb20gXCIuL3hkM1wiXG5pbXBvcnQgeyBWaXNDb21wb25lbnQgfSBmcm9tIFwiLi9WaXNDb21wb25lbnRcIlxuaW1wb3J0IHsgU2ltcGxlRXZlbnRIYW5kbGVyIH0gZnJvbSBcIi4vU2ltcGxlRXZlbnRIYW5kbGVyXCI7XG5pbXBvcnQgeyBTVkcgfSBmcm9tIFwiLi9TVkdwbHVzXCI7XG5cbmV4cG9ydCB0eXBlIE1hcmdpbkluZm8gPSB7XG4gICAgdG9wOm51bWJlclxuICAgIHJpZ2h0Om51bWJlclxuICAgIGJvdHRvbTpudW1iZXJcbiAgICBsZWZ0Om51bWJlclxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNWR09wdGlvbnMge1xuICAgIG1hcmdpbjogTWFyZ2luSW5mb1xuICAgIG1heFdpZHRoOiBudW1iZXIgICAgICAgIC8vIFRoZSB0b3RhbCB3aWR0aCBvZiB0aGUgY29tcG9uZW50XG4gICAgbWF4SGVpZ2h0OiBudW1iZXIgICAgICAgLy8gVGhlIHRvdGFsIGhlaWdodCBvZiB0aGUgY29tcG9uZW50XG4gICAgd2lkdGg/OiBudW1iZXIgICAgICAgICAgLy8gVGhlIHRvdGFsIHdpZHRoIC0gYXBwbGljYWJsZSBtYXJnaW5zXG4gICAgaGVpZ2h0PzogbnVtYmVyICAgICAgICAgLy8gVGhlIHRvdGFsIGhlaWdodCAtIGFwcGxpY2FibGUgbWFyZ2luc1xufVxuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgU1ZHVmlzQ29tcG9uZW50PERhdGFJbnRlcmZhY2U+IGV4dGVuZHMgVmlzQ29tcG9uZW50PERhdGFJbnRlcmZhY2U+IHtcbiAgICBwcm90ZWN0ZWQgc3ZnOiBEM1NlbFxuICAgIGxheWVyczogeyBtYWluPzogRDNTZWwsIGZnPzogRDNTZWwsIGJnPzogRDNTZWwsIFtrZXk6IHN0cmluZ106IEQzU2VsIH07XG4gICAgcHJvdGVjdGVkIG9wdGlvbnM6IFNWR09wdGlvbnMgPSB7XG4gICAgICAgIG1hcmdpbjogeyB0b3A6IDAsIHJpZ2h0OiAwLCBib3R0b206IDAsIGxlZnQ6IDAgfSxcbiAgICAgICAgbWF4V2lkdGg6IDQ1MCxcbiAgICAgICAgbWF4SGVpZ2h0OiA0NTAsXG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGNvbnN0cnVjdG9yKGQzcGFyZW50OiBEM1NlbCwgZXZlbnRIYW5kbGVyPzogU2ltcGxlRXZlbnRIYW5kbGVyLCBvcHRpb25zOiB7fSA9IHt9LCBJRD0wKSB7XG4gICAgICAgIHN1cGVyKGQzcGFyZW50LCBldmVudEhhbmRsZXIsIElEKVxuICAgIH1cblxuICAgIC8qKiBcbiAgICAgKiBNdXN0IGJlIGNhbGxlZCBpbW1lZGlhdGVseSBhZnRlciB0aGUgYHN1cGVyKClgIGNvbnN0cnVjdG9yIGNhbGwgb2YgaW5oZXJldGluZyBjbGFzc2VzLlxuICAgICAqIFxuICAgICAqIC0gQ2FsY3VsYXRlcyBoZWlnaHQgYW5kIHdpZHRoIGZvciBvcHRpb25zXG4gICAgICogLSBBZGRzICdzdmcnIGFuZCAnYmFzZScgb2JqZWN0cyB0byB0aGUgZGl2LlxuICAgICAqIC0gQWRkcyBsYXllcnMgb24gdGhlIGJhc2UgdG8gd29yayB3aXRoIGlmIHBhc3NlZFxuICAgICAqIC0gUnVucyBkZWZpbmVkIHN0YXRpYyBpbml0aWFsaXphdGlvbiBkZWZpbmVkIGluIGBpbml0KClgXG4gICAgICovXG4gICAgcHJvdGVjdGVkIGluaXRTVkcob3B0aW9ucyA9IHt9LCBkZWZhdWx0TGF5ZXJzID0gW1wiYmdcIiwgXCJtYWluXCIsIFwiZmdcIl0pIHtcbiAgICAgICAgdGhpcy51cGRhdGVPcHRpb25zKG9wdGlvbnMpXG4gICAgICAgIGNvbnN0IG9wID0gdGhpcy5vcHRpb25zO1xuICAgICAgICBvcC53aWR0aCA9IG9wLm1heFdpZHRoIC0gKG9wLm1hcmdpbi5sZWZ0ICsgb3AubWFyZ2luLnJpZ2h0KVxuICAgICAgICBvcC5oZWlnaHQgPSBvcC5tYXhIZWlnaHQgLSAob3AubWFyZ2luLnRvcCArIG9wLm1hcmdpbi5ib3R0b20pXG5cbiAgICAgICAgdGhpcy5zdmcgPSB0aGlzLnBhcmVudC5hcHBlbmQoJ3N2ZycpXG4gICAgICAgICAgICAuYXR0cihcIndpZHRoXCIsIFwiMTAwJVwiKVxuICAgICAgICAgICAgLmF0dHIoXCJoZWlnaHRcIiwgXCIxMDAlXCIpXG4gICAgICAgICAgICAuYXR0cihcInZpZXdCb3hcIiwgYDAgMCAke29wLndpZHRoICsgb3AubWFyZ2luLmxlZnQgKyBvcC5tYXJnaW4ucmlnaHR9ICR7b3AuaGVpZ2h0ICsgb3AubWFyZ2luLnRvcCArIG9wLm1hcmdpbi5ib3R0b219YClcbiAgICAgICAgICAgIC5hcHBlbmQoJ2cnKVxuICAgICAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgU1ZHLnRyYW5zbGF0ZShvcC5tYXJnaW4ubGVmdCwgb3AubWFyZ2luLnRvcCkpXG5cbiAgICAgICAgLy8gdGhpcy5zdmcgPSBTVkcuYWRkU1ZHKHRoaXMucGFyZW50LCBvcC53aWR0aCwgb3AuaGVpZ2h0LCBvcC5tYXJnaW4pXG4gICAgICAgIHRoaXMuYmFzZSA9IFNWRy5ncm91cCh0aGlzLnN2ZywgJycpOyAvLyBMZXQgSFRNTCBhdXRob3IgYXNzaWduIHRoZSBjbGFzcyBuYW1lIGFuZCBJRFxuICAgICAgICB0aGlzLmxheWVycyA9IHt9O1xuICAgICAgICBpZiAoZGVmYXVsdExheWVycykge1xuICAgICAgICAgICAgLy8gY29uc3RydWN0aW9uIG9yZGVyIGlzIGltcG9ydGFudCAhXG4gICAgICAgICAgICBkZWZhdWx0TGF5ZXJzLmZvckVhY2gobGF5ZXIgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubGF5ZXJzW2xheWVyXSA9IFNWRy5ncm91cCh0aGlzLmJhc2UsIGxheWVyKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5pbml0KClcbiAgICB9XG59IiwiaW1wb3J0ICogYXMgZDMgZnJvbSBcImQzXCJcbmltcG9ydCAqIGFzIFIgZnJvbSAncmFtZGEnXG5pbXBvcnQge01hcmdpbkluZm99IGZyb20gJy4vU1ZHVmlzQ29tcG9uZW50J1xuaW1wb3J0IHtEM1NlbH0gZnJvbSAnLi4vdXRpbC94ZDMnXG5cbi8qKlxuICogQ3JlYXRlZCBieSBoZW4gb24gNS8xNS8xNy5cbiAqIE1vZGlmaWVkIGJ5IGhvbyBvbiA0LzE2LzE5LlxuICovXG5cbmV4cG9ydCBjbGFzcyBTVkcge1xuICAgIFxuICAgIHN0YXRpYyB0cmFuc2xhdGUoeDpudW1iZXIsIHk6bnVtYmVyKTpzdHJpbmcge1xuICAgICAgICByZXR1cm4gYHRyYW5zbGF0ZSgke3h9LCR7eX0pYFxuICAgIH1cblxuICAgIHN0YXRpYyByb3RhdGUoZGVnOm51bWJlciwgb3JpZz86e3g6bnVtYmVyLCB5Om51bWJlcn0pOnN0cmluZyB7XG4gICAgICAgIGlmIChvcmlnID09IG51bGwpIFxuICAgICAgICAgICAgcmV0dXJuIGByb3RhdGUoJHtkZWd9KWBcblxuICAgICAgICByZXR1cm4gYHJvdGF0ZSgke2RlZ30sJHtvcmlnLnh9LCR7b3JpZy55fSlgXG4gICAgfVxuXG4gICAgc3RhdGljIHNrZXcoZGVneDpudW1iZXIsIGRlZ3k9MCkge1xuICAgICAgICByZXR1cm4gYHNrZXcoJHtkZWd4fSwgJHtkZWd5fSlgXG4gICAgfVxuXG4gICAgc3RhdGljIHNrZXdYKGRlZzpudW1iZXIpIHtcbiAgICAgICAgcmV0dXJuIGBza2V3WCgke2RlZ30pYFxuICAgIH1cblxuICAgIHN0YXRpYyBza2V3WShkZWc6bnVtYmVyKSB7XG4gICAgICAgIHJldHVybiBgc2tld1koJHtkZWd9KWBcbiAgICB9XG5cbiAgICBzdGF0aWMgc2NhbGUoeDpudW1iZXIsIHk/Om51bWJlcik6c3RyaW5nIHtcbiAgICAgICAgY29uc3QgeXNjYWxlID0geSAhPSBudWxsID8geSA6IHg7XG5cbiAgICAgICAgcmV0dXJuIGBzY2FsZSgke3h9LCAke3lzY2FsZX0pYFxuICAgIH1cblxuICAgIHN0YXRpYyBncm91cChwYXJlbnQsIGNsYXNzZXMsIHBvcyA9IHt4OiAwLCB5OiAwfSkge1xuICAgICAgICByZXR1cm4gcGFyZW50LmFwcGVuZCgnZycpXG4gICAgICAgICAgICAuYXR0cignY2xhc3MnLCBjbGFzc2VzKVxuICAgICAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgU1ZHLnRyYW5zbGF0ZShwb3MueCwgcG9zLnkpKVxuICAgIH1cblxuICAgIHN0YXRpYyBhZGRTVkcocGFyZW50OkQzU2VsLCB3aWR0aDpudW1iZXIsIGhlaWdodDpudW1iZXIsIG1hcmdpbjpNYXJnaW5JbmZvKTpEM1NlbCB7XG5cbiAgICAgICAgdmFyIHN2ZyA9IHBhcmVudC5hcHBlbmQoXCJzdmdcIilcbiAgICAgICAgICAgIC5hdHRyKFwid2lkdGhcIiwgXCIxMDAlXCIpXG4gICAgICAgICAgICAuYXR0cihcImhlaWdodFwiLCBcIjEwMCVcIilcbiAgICAgICAgICAgIC5hdHRyKFwidmlld0JveFwiLCBcIjAgMCBcIiArICh3aWR0aCArIG1hcmdpbi5sZWZ0ICsgbWFyZ2luLnJpZ2h0KSArIFwiIFwiICsgKGhlaWdodCArIG1hcmdpbi50b3AgKyBtYXJnaW4uYm90dG9tKSlcbiAgICAgICAgICAgIC5hdHRyKFwicHJlc2VydmVBc3BlY3RSYXRpb1wiLCBcInhNaWRZTWlkIG1lZXRcIilcbiAgICAgICAgLmFwcGVuZChcImdcIilcbiAgICAgICAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIFNWRy50cmFuc2xhdGUobWFyZ2luLmxlZnQsIG1hcmdpbi50b3ApKTtcblxuICAgICAgICByZXR1cm4gc3ZnO1xuICAgIH1cblxuICAgIHN0YXRpYyBhZGRBcnJvd3MocGFyZW50OkQzU2VsKSB7XG4gICAgICAgIHBhcmVudC5hcHBlbmQoJ2RlZnMnKVxuICAgICAgICAgICAgLmFwcGVuZCgnbWFya2VyJylcbiAgICAgICAgICAgIC5hdHRyKFwiaWRcIiwgXCJhcnJvd1wiKVxuICAgICAgICAgICAgLmF0dHIoXCJtYXJrZXJVbml0c1wiLCBcInN0cm9rZVdpZHRoXCIpXG4gICAgICAgICAgICAuYXR0cihcIm1hcmtlcldpZHRoXCIsIDUuNSlcbiAgICAgICAgICAgIC5hdHRyKFwibWFya2VySGVpZ2h0XCIsIDUuNSlcbiAgICAgICAgICAgIC5hdHRyKFwidmlld0JveFwiLCBcIjAgMCAxMiAxMlwiKVxuICAgICAgICAgICAgLmF0dHIoXCJyZWZYXCIsIDYpXG4gICAgICAgICAgICAuYXR0cihcInJlZllcIiwgNilcbiAgICAgICAgICAgIC5hdHRyKFwib3JpZW50XCIsICdhdXRvJylcbiAgICAgICAgICAgIC5hcHBlbmQoJ3BhdGgnKVxuICAgICAgICAgICAgLmF0dHIoJ2QnLCBcIk0yLDIgTDEwLDYgTDIsMTAgTDYsNiBMMiwyXCIpXG4gICAgICAgICAgICAvLyAuc3R5bGUoXCJmaWxsOiAjZjAwXCIpXG4gICAgfVxuXG4gICAgc3RhdGljIGluc2VydEFycm93KHBhcmVudDpEM1NlbCwgeDE6bnVtYmVyLCB5MTpudW1iZXIsIHgyOm51bWJlciwgeTI6bnVtYmVyLCBjb2xvcjpzdHJpbmcsIHdpZHRoOm51bWJlcikge1xuICAgICAgICByZXR1cm4gcGFyZW50LmFwcGVuZChcImxpbmVcIilcbiAgICAgICAgICAgICAuYXR0cihcIngxXCIseDEpICBcbiAgICAgICAgICAgICAuYXR0cihcInkxXCIseTEpICBcbiAgICAgICAgICAgICAuYXR0cihcIngyXCIseDIpICBcbiAgICAgICAgICAgICAuYXR0cihcInkyXCIseTIpICBcbiAgICAgICAgICAgICAuYXR0cihcInN0cm9rZVwiLGNvbG9yKSAgXG4gICAgICAgICAgICAgLmF0dHIoXCJzdHJva2Utd2lkdGhcIix3aWR0aCkgIFxuICAgICAgICAgICAgIC5hdHRyKFwibWFya2VyLWVuZFwiLFwidXJsKCNhcnJvdylcIik7ICBcbiAgICB9XG5cbiAgICBzdGF0aWMgbWVzaGdyaWQobng6IG51bWJlciwgbnk6IG51bWJlciwgeHJhbmdlOiBudW1iZXJbXSwgeXJhbmdlOiBudW1iZXJbXSkge1xuICAgICAgICBjb25zdCBzY2FsZSA9ICh2YWxzOm51bWJlcltdLCByYW5nZSkgPT4gdmFscy5tYXAodiA9PiAodiAqIChyYW5nZVsxXSAtIHJhbmdlWzBdKSkgKyByYW5nZVswXSk7XG5cbiAgICAgICAgY29uc3QgcG9pbnRpZnkgPSAoeHZhbHM6bnVtYmVyW10sIHl2YWxzOm51bWJlcltdKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBvdXQgPSBbXVxuICAgICAgICAgICAgeHZhbHMuZm9yRWFjaCh4ID0+IHtcbiAgICAgICAgICAgICAgICB5dmFscy5mb3JFYWNoKHkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBvdXQucHVzaCh7eDogeCwgeTogeX0pXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICByZXR1cm4gb3V0XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB4dmFscyA9IHNjYWxlKFIucmFuZ2UoMCwgbngpLm1hcCh4ID0+ICh4ICsgMC41KSAvIG54KSwgeHJhbmdlKVxuICAgICAgICBjb25zdCB5dmFscyA9IHNjYWxlKFIucmFuZ2UoMCwgbnkpLm1hcCh5ID0+ICh5ICsgMC41KSAvIG55KSwgeXJhbmdlKVxuICAgICAgICByZXR1cm4gcG9pbnRpZnkoeHZhbHMsIHl2YWxzKVxuICAgIH1cblxufVxuXG5leHBvcnQgY2xhc3MgU1ZHTWVhc3VyZW1lbnRzIHtcblxuICAgIHByaXZhdGUgbWVhc3VyZUVsZW1lbnQ6IGQzLlNlbGVjdGlvbjxhbnksIGFueSwgYW55LCBhbnk+O1xuXG4gICAgY29uc3RydWN0b3IoYmFzZUVsZW1lbnQsIGNsYXNzZXMgPSAnJykge1xuICAgICAgICB0aGlzLm1lYXN1cmVFbGVtZW50ID0gYmFzZUVsZW1lbnQuYXBwZW5kKCd0ZXh0JylcbiAgICAgICAgICAgIC5hdHRyKCd4JywgMClcbiAgICAgICAgICAgIC5hdHRyKCd5JywgLTIwKVxuICAgICAgICAgICAgLmF0dHIoJ2NsYXNzJywgY2xhc3NlcylcblxuICAgIH1cblxuICAgIHRleHRMZW5ndGgodGV4dCwgc3R5bGUgPSBudWxsKSB7XG4gICAgICAgIHRoaXMubWVhc3VyZUVsZW1lbnQuYXR0cignc3R5bGUnLCBzdHlsZSk7XG4gICAgICAgIHRoaXMubWVhc3VyZUVsZW1lbnQudGV4dCh0ZXh0KTtcbiAgICAgICAgY29uc3QgdGwgPSAoPFNWR1RleHRFbGVtZW50PiB0aGlzLm1lYXN1cmVFbGVtZW50Lm5vZGUoKSkuZ2V0Q29tcHV0ZWRUZXh0TGVuZ3RoKCk7XG4gICAgICAgIHRoaXMubWVhc3VyZUVsZW1lbnQudGV4dCgnJyk7XG5cbiAgICAgICAgcmV0dXJuIHRsO1xuICAgIH1cbn0iLCIvKipcbiAqIENyZWF0ZWQgYnkgaGVuIG9uIDUvMTUvMTcuXG4gKiBNb2RpZmllZCBieSBob28gb24gNC8xNi8xOS5cbiAqL1xuZXhwb3J0IGNsYXNzIFNpbXBsZUV2ZW50SGFuZGxlciB7XG5cbiAgICBlbGVtZW50OiBFbGVtZW50O1xuICAgIGV2ZW50TGlzdGVuZXJzOiBvYmplY3RbXTtcblxuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnQ6IEVsZW1lbnQpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgICAgICAgdGhpcy5ldmVudExpc3RlbmVycyA9IFtdXG4gICAgfVxuXG4gICAgYmluZChldmVudE5hbWVzOiBzdHJpbmcsIGV2ZW50RnVuY3Rpb246IEZ1bmN0aW9uKSB7XG4gICAgICAgIGZvciAoY29uc3QgZXZlbnROYW1lIG9mIGV2ZW50TmFtZXMuc3BsaXQoJyAnKSkge1xuICAgICAgICAgICAgdGhpcy5ldmVudExpc3RlbmVycy5wdXNoKHtldmVudE5hbWUsIGV2ZW50RnVuY3Rpb259KTtcbiAgICAgICAgICAgIGNvbnN0IGV2ZW50RnVuY3Rpb25XcmFwID0gZSA9PiBldmVudEZ1bmN0aW9uKGUuZGV0YWlsLCBlKTtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgZXZlbnRGdW5jdGlvbldyYXAsIGZhbHNlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldExpc3RlbmVycygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZXZlbnRMaXN0ZW5lcnM7XG4gICAgfVxuXG4gICAgdHJpZ2dlcihldmVudE5hbWU6IHN0cmluZywgZGV0YWlsOiBvYmplY3QpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KGV2ZW50TmFtZSwge2RldGFpbH0pKTtcbiAgICB9XG59IiwibGV0IHRoZV91bmlxdWVfaWRfY291bnRlciA9IDA7XG5sZXQgdGhlX3VuaXF1ZV9zdHJpbmdfY291bnRlciA9IDA7XG5cbmV4cG9ydCBjbGFzcyBVSWQge1xuICAgIHN0YXRpYyB1aWQoKTogbnVtYmVyIHtcbiAgICAgICAgdGhlX3VuaXF1ZV9pZF9jb3VudGVyICs9IDE7XG4gICAgICAgIHJldHVybiB0aGVfdW5pcXVlX2lkX2NvdW50ZXJcbiAgICB9XG4gICAgc3RhdGljIHNpbXBsZVVJZChwcmVmaXg9JycpOiBzdHJpbmcge1xuICAgICAgICB0aGVfdW5pcXVlX3N0cmluZ19jb3VudGVyICs9IDE7XG5cbiAgICAgICAgcmV0dXJuIHByZWZpeCArIHRoZV91bmlxdWVfc3RyaW5nX2NvdW50ZXI7XG4gICAgfVxufVxuIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IEhlbmRyaWsgU3Ryb2JlbHQgKGhlbmRyaWsuc3Ryb2JlbHQuY29tKSBvbiAxMi8zLzE2LlxuICogTW9kaWZpZWQgYnkgQmVuIEhvb3ZlciBvbiA0LzE2LzIwMTlcbiAqL1xuaW1wb3J0IHsgRDNTZWwgfSBmcm9tIFwiLi94ZDNcIlxuaW1wb3J0IHsgU2ltcGxlRXZlbnRIYW5kbGVyIH0gZnJvbSBcIi4vU2ltcGxlRXZlbnRIYW5kbGVyXCI7XG5cbi8qKlxuICogU2hvdWxkIGhhdmUgVkNvbXBvbmVudEhUTUwgYW5kIFZDb21wb25lbnRTVkdcbiAqXG4gKiBDb21tb24gUHJvcGVydGllczpcbiAqIC0gZXZlbnRzXG4gKiAtIGV2ZW50SGFuZGxlciAoViBpbXBvcnRhbnQpXG4gKiAtIG9wdGlvbnMgKE1haW50YWlucyBwdWJsaWMgc3RhdGUuIENhbiBleHBvc2UgdGhlc2Ugd2l0aCBnZXQvc2V0IGZ1bmN0aW9ucyB3aXRoIGF1dG8gdXBkYXRlKVxuICogLSBfY3VycmVudCAoTWFpbnRhaW5zIHByaXZhdGUgc3RhdGUpXG4gKiAtIGNzc05hbWUgKHN5bmNlZCB3aXRoIGNvcnJlc3BvbmRpbmcgQ1NTIGZpbGUpXG4gKiAtIHBhcmVudCAoSFRNTCBpcyBkaXYgY29udGFpbmluZyB0aGUgYmFzZSwgU1ZHIGlzIFNWRyBlbGVtZW50KVxuICogLSBiYXNlIChIVE1MIGlzIGRpdiB3aXRoIGNzc19uYW1lIGVzdGFibGlzaGVkKVxuICogLSBfZGF0YSAoRGF0YSB1c2VkIHRvIGNyZWF0ZSBhbmQgcmVuZGVyIHRoZSBjb21wb25lbnQpXG4gKiAtIF9yZW5kZXJEYXRhIChEYXRhIG5lZWRlZCB0byBkaXNwbGF5LiBUaGlzIG1heSBub3QgYmUgbmVlZGVkLCBidXQgaXMgY3VycmVudGx5IHVzZWQgaW4gaGlzdG9ncmFtKSAqICogQ29tbW9uIE1ldGhvZHM6XG4gKiAtIGNvbnN0cnVjdG9yXG4gKiAtIF9yZW5kZXIoKSAgICAgIENvbnNpZGVyIHJlcGxhY2luZyB3aXRoIGBfdXBkYXRlRGF0YSgpYCB0aGF0IHVwZGF0ZXMgYWxsIGRhdGEgYXQgb25jZVxuICogLSB1cGRhdGUoKSAgICAgICBDb25zaWRlciByZXBsYWNpbmcgdGhpcyB3aXRoIGBkYXRhKClgIHRoYXQgYXV0byB1cGRhdGVzIGRhdGFcbiAqIC0gcmVkcmF3KClcbiAqIC0gZGVzdHJveSgpXG4gKi9cblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFZpc0NvbXBvbmVudDxEYXRhSW50ZXJmYWNlPiB7XG4gICAgLyoqXG4gICAgICogR2l2ZW4gYW4gSUQsIGNyZWF0ZSBhIG5ldyBpbnN0YW5jZSBvZiB0aGlzIGNsYXNzIHdpdGggdGhlIGV2ZW50cyBhbmQgY3NzX25hbWUgbW9kaWZpZWQgYnkgdGhlIGlkXG4gICAgICovXG4gICAgbmV3SW5zdGFuY2UoaWQ6IG51bWJlcikgeyB9XG5cbiAgICAvKipcbiAgICAgKiBUaGUgc3RhdGljIHByb3BlcnR5IHRoYXQgY29udGFpbnMgYWxsIGNsYXNzIHJlbGF0ZWQgZXZlbnRzLlxuICAgICAqIFNob3VsZCBiZSBvdmVyd3JpdHRlbiBhbmQgZXZlbnQgc3RyaW5ncyBoYXZlIHRvIGJlIHVuaXF1ZSEhXG4gICAgICovXG5cbiAgICBwcm90ZWN0ZWQgZ2V0IGJhc2VOYW1lKCkge1xuICAgICAgICByZXR1cm4gYCR7dGhpcy5jc3NuYW1lfV9JRCR7dGhpcy5JRH1gXG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGNzc25hbWU6IHN0cmluZzsgICAgICAgICAgICAvLyBNYWtlIHRoZSBzYW1lIGFzIHRoZSBjb3JyZXNwb25kaW5nIGNzcyBmaWxlXG4gICAgcHJvdGVjdGVkIElEOiBudW1iZXI7ICAgICAgICAgICAgICAgICAvLyBJRCBhc3NvY2lhdGVkIHRvIHVuaXF1ZSBpbnN0YW5jZSBvZiB2aXN1YWxpemF0aW9uLiBEZWZhdWx0cyB0byAwXG5cbiAgICBwcm90ZWN0ZWQgYWJzdHJhY3Qgb3B0aW9uczoge307XG4gICAgcHJvdGVjdGVkIGV2ZW50SGFuZGxlcjogU2ltcGxlRXZlbnRIYW5kbGVyO1xuICAgIHBhcmVudDogRDNTZWw7ICAgICAgICAgICAgICAgICAgICAgICAgLy8gUGFyZW50IGQzIHNlbGVjdGlvblxuICAgIGJhc2U6IEQzU2VsOyAgICAgICAgICAgICAgICAgLy8gZDMgc2VsZWN0aW9uIHRoYXQgaXMgY3JlYXRlZCBieSB0aGUgaW5pdFxuICAgIHByb3RlY3RlZCBfZGF0YTogRGF0YUludGVyZmFjZTtcbiAgICBwcm90ZWN0ZWQgcmVuZGVyRGF0YTogdW5rbm93bjtcblxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtEM1NlbH0gZDNwYXJlbnQgIEQzIHNlbGVjdGlvbiBvZiBwYXJlbnQgU1ZHIERPTSBFbGVtZW50XG4gICAgICogQHBhcmFtIHtTaW1wbGVFdmVudEhhbmRsZXJ9IGV2ZW50SGFuZGxlciBhIGdsb2JhbCBldmVudCBoYW5kbGVyIG9iamVjdCBvciAnbnVsbCcgZm9yIGxvY2FsIGV2ZW50IGhhbmRsZXJcbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgY29uc3RydWN0b3IoZDNwYXJlbnQ6IEQzU2VsLCBldmVudEhhbmRsZXI/OiBTaW1wbGVFdmVudEhhbmRsZXIsIElEID0gMCkge1xuICAgICAgICB0aGlzLnBhcmVudCA9IGQzcGFyZW50O1xuICAgICAgICB0aGlzLmV2ZW50SGFuZGxlciA9IGV2ZW50SGFuZGxlciB8fCBuZXcgU2ltcGxlRXZlbnRIYW5kbGVyKHRoaXMucGFyZW50Lm5vZGUoKSk7XG4gICAgICAgIHRoaXMuSUQgPSBJRDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTaG91bGQgYmUgb3ZlcndyaXR0ZW4gdG8gY3JlYXRlIG5lZWRlZCBzdGF0aWMgRE9NIGVsZW1lbnRzXG4gICAgICovXG4gICAgcHJvdGVjdGVkIGFic3RyYWN0IGluaXQoKTtcblxuICAgIC8qKlxuICAgICAqIEZvbGxvdyB0aGUgRDMgY29udmVudGlvbjogcmV0cmlldmUgdGhlIGRhdGEgaW5zaWRlIHRoZSBjbGFzcyBpZiBudWxsLiBPdGhlcndpc2UsIHNldCB0aGUgZGF0YSBhbmQgcmV0dXJuICd0aGlzJ1xuICAgICAqL1xuICAgIGFic3RyYWN0IGRhdGEoKTogRGF0YUludGVyZmFjZTtcbiAgICBhYnN0cmFjdCBkYXRhKHg6IERhdGFJbnRlcmZhY2UpOiB0aGlzO1xuXG4gICAgLyoqXG4gICAgICogU2V0IG1hbnkgb3B0aW9ucyBhdCBvbmNlXG4gICAgICpcbiAgICAgKiBAcGFyYW0gb3B0aW9ucyBSZXNldCBvcHRpb25zIHRvIHBhc3NlZCB2YWx1ZXNcbiAgICAgKi9cbiAgICB1cGRhdGVPcHRpb25zKG9wdGlvbnM6IHt9KSB7XG4gICAgICAgIE9iamVjdC5rZXlzKG9wdGlvbnMpLmZvckVhY2goayA9PiB0aGlzLm9wdGlvbnNba10gPSBvcHRpb25zW2tdKTtcbiAgICB9XG5cbiAgICBkZXN0cm95KCkge1xuICAgICAgICB0aGlzLmJhc2UucmVtb3ZlKCk7XG4gICAgfVxufSIsImltcG9ydCAqIGFzIGQzIGZyb20gJ2QzJ1xuaW1wb3J0IHsgQmFzZVR5cGUgfSBmcm9tICdkMydcblxuLyoqXG4gKiBDcmVhdGUgbiBsaW5lYXJseSBzcGFjZWQgdmFsdWVzIGJldHdlZW4gc3RhcnQgYW5kIGVuZFxuICovXG5leHBvcnQgY29uc3QgbGluc3BhY2UgPSAoc3RhcnQsIGVuZCwgbikgPT4ge1xuICAgIGNvbnN0IGRlbHRhID0gKGVuZCAtIHN0YXJ0KSAvIChuIC0gMSlcbiAgICByZXR1cm4gZDMucmFuZ2Uoc3RhcnQsIGVuZCArIGRlbHRhLCBkZWx0YSkuc2xpY2UoMCwgbilcbn1cblxuLyoqIFxuICogQ3JlYXRlIG4gbG9nYXJpdGhtaWNhbGx5IHNwYWNlZCB2YWx1ZXMgYmV0d2VlbiBzdGFydCBhbmQgZW5kXG4gKi9cbmV4cG9ydCBjb25zdCBsb2dzcGFjZSA9IChzdGFydDpudW1iZXIsIGVuZDpudW1iZXIsIG46bnVtYmVyLCBiYXNlOm51bWJlcj0xMCkgPT4ge1xuICAgIGNvbnN0IHNjYWxlID0gZDMuc2NhbGVMb2coKS5iYXNlKGJhc2UpLmRvbWFpbihbc3RhcnQsIGVuZF0pLnJhbmdlKFtzdGFydCwgZW5kXSlcbiAgICByZXR1cm4gbGluc3BhY2Uoc3RhcnQsIGVuZCwgbikubWFwKHNjYWxlKVxufVxuXG4vKipcbiAqIENvbnZlcnQgdmFsdWVzIHNwYWNlZCBldmVubHkgb24gYSBwb3dlciBzY2FsZS4gV2hlbiBleHA9MSwgc2FtZSBhcyBsaW5zcGFjZVxuICovXG5leHBvcnQgY29uc3QgcG93c3BhY2UgPSAoc3RhcnQsIGVuZCwgbiwgZXhwPTEpID0+IHtcbiAgICBjb25zdCBzY2FsZSA9IGQzLnNjYWxlUG93KCkuZXhwb25lbnQoZXhwKS5kb21haW4oW3N0YXJ0LCBlbmRdKS5yYW5nZShbc3RhcnQsIGVuZF0pXG4gICAgcmV0dXJuIGxpbnNwYWNlKHN0YXJ0LGVuZCxuKS5tYXAoc2NhbGUpXG59XG5cbmV4cG9ydCB0eXBlIEQzU2VsID0gZDMuU2VsZWN0aW9uPGFueSwgYW55LCBhbnksIGFueT5cbmV4cG9ydCB0eXBlIGQzUzxUIGV4dGVuZHMgQmFzZVR5cGUsIFUgPSBhbnk+ID0gZDMuU2VsZWN0aW9uPFQsIFUsIGFueSwgYW55PlxuXG5kMy5zZWxlY3Rpb24ucHJvdG90eXBlLmNsZWFyID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuc2VsZWN0QWxsKCcqJykucmVtb3ZlKCk7XG4gICAgcmV0dXJuIHRoaXM7XG59XG5cbmQzLnNlbGVjdGlvbi5wcm90b3R5cGUudG9nZ2xlQ2xhc3MgPSBmdW5jdGlvbiAoY2xhc3NOYW1lKSB7XG4gICAgdGhpcy5jbGFzc2VkKGNsYXNzTmFtZSwgIXRoaXMuY2xhc3NlZChjbGFzc05hbWUpKTtcbiAgICByZXR1cm4gdGhpcztcbn1cblxuZDMuc2VsZWN0aW9uLnByb3RvdHlwZS5zaG93ID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuc3R5bGUoJ2Rpc3BsYXknLCAnaW5pdGlhbCcpO1xuICAgIHJldHVybiB0aGlzO1xufVxuXG5kMy5zZWxlY3Rpb24ucHJvdG90eXBlLmhpZGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5zdHlsZSgnZGlzcGxheScsICdub25lJyk7XG4gICAgcmV0dXJuIHRoaXM7XG59XG5cbmQzLnNlbGVjdGlvbi5wcm90b3R5cGUudG9nZ2xlID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBpc0hpZGRlbiA9IHRoaXMuc3R5bGUoJ2Rpc3BsYXknKSA9PSAnbm9uZSc7XG4gICAgcmV0dXJuIHRoaXMuc3R5bGUoJ2Rpc3BsYXknLCBpc0hpZGRlbiA/ICdpbmhlcml0JyA6ICdub25lJyk7XG59XG5cbmQzLnNlbGVjdGlvbi5wcm90b3R5cGUuYWZ0ZXIgPSBmdW5jdGlvbiAodGFnTmFtZSkge1xuICAgIHZhciBlbGVtZW50cyA9IFtdO1xuXG4gICAgdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZ05hbWUpO1xuICAgICAgICB0aGlzLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGVsZW1lbnQsIHRoaXMubmV4dFNpYmxpbmcpO1xuICAgICAgICBlbGVtZW50cy5wdXNoKGVsZW1lbnQpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGQzLnNlbGVjdEFsbChlbGVtZW50cyk7XG59XG5cbmQzLnNlbGVjdGlvbi5wcm90b3R5cGUuYmVmb3JlID0gZnVuY3Rpb24gKHRhZ05hbWUpIHtcbiAgICB2YXIgZWxlbWVudHMgPSBbXTtcblxuICAgIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWdOYW1lKTtcbiAgICAgICAgdGhpcy5wYXJlbnROb2RlLmluc2VydEJlZm9yZShlbGVtZW50LCB0aGlzKTtcbiAgICAgICAgZWxlbWVudHMucHVzaChlbGVtZW50KTtcbiAgICB9KTtcblxuICAgIHJldHVybiBkMy5zZWxlY3RBbGwoZWxlbWVudHMpO1xufSIsImltcG9ydCAqIGFzIGQzIGZyb20gJ2QzJ1xuaW1wb3J0IHsgTGFuZHNjYXBlMkQgfSBmcm9tIFwiLi4vTGFuZHNjYXBlczJEXCJcbmltcG9ydCB7IEQzU2VsLCBsaW5zcGFjZSwgcG93c3BhY2V9IGZyb20gJy4uL3V0aWwveGQzJ1xuaW1wb3J0IHsgVmVjdG9yMkQsIEFycmF5IH0gZnJvbSAnLi4vdHlwZXMnXG5pbXBvcnQgeyBTVkdPcHRpb25zLCBTVkdWaXNDb21wb25lbnQgfSBmcm9tICcuLi91dGlsL1NWR1Zpc0NvbXBvbmVudCdcbmltcG9ydCB7IFNpbXBsZUV2ZW50SGFuZGxlciB9IGZyb20gJy4uL3V0aWwvU2ltcGxlRXZlbnRIYW5kbGVyJztcbmltcG9ydCB7IFNWRyB9IGZyb20gJy4uL3V0aWwvU1ZHcGx1cydcbmltcG9ydCB7IGdldENvbnRvdXJWYWx1ZXMgfSBmcm9tICcuLi9wbG90dGluZydcbmltcG9ydCB7IFVwZGF0ZXIyRCB9IGZyb20gJy4uL1VwZGF0ZXIyRCdcbmltcG9ydCB7IGludGVydmFsIH0gZnJvbSAncnhqcydcbmltcG9ydCB7IHRha2UsIHN0YXJ0V2l0aCwgc2NhbiB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJ1xuaW1wb3J0ICogYXMgbmogZnJvbSBcIm51bWpzXCJcblxudHlwZSBUID0gbnVtYmVyW11cblxuaW50ZXJmYWNlIEdyYXBoT3B0aW9ucyBleHRlbmRzIFNWR09wdGlvbnMge1xuICAgIHhyYW5nZTogW251bWJlciwgbnVtYmVyXVxuICAgIHlyYW5nZTogW251bWJlciwgbnVtYmVyXVxuICAgIG46IG51bWJlciAgICAgICAgICAgICAgICAgICAvLyBOdW1iZXIgb2YgbWVzaGdyaWQgcG9pbnRzIGFsb25nIHRoZSB4IGF4aXMgZm9yIGNvbnRvdXJzXG4gICAgbTogbnVtYmVyICAgICAgICAgICAgICAgICAgIC8vIE51bWJlciBvZiBtZXNoZ3JpZCBwb2ludHMgYWxvbmcgdGhlIHkgYXhpcyBmb3IgY29udG91cnNcbiAgICBueDogbnVtYmVyICAgICAgICAgICAgICAgICAgIC8vIE51bWJlciBvZiBtZXNoZ3JpZCBwb2ludHMgYWxvbmcgdGhlIHggYXhpcyBmb3IgcXVpdmVyc1xuICAgIG55OiBudW1iZXIgICAgICAgICAgICAgICAgICAgLy8gTnVtYmVyIG9mIG1lc2hncmlkIHBvaW50cyBhbG9uZyB0aGUgeCBheGlzIGZvciBxdWl2ZXJzXG4gICAgcGFkOiBudW1iZXIgICAgICAgICAgICAgICAgIC8vIEFubm90YXRpb25zIHRoYXQgaGFwcGVuIGluIHRoZSBtYXJnaW4gbXVzdCB0YWtlIHBsYWNlIGBwYWRgIGRpc3RhbmNlIGZyb20gdGhlIG1haW4gZ3JhcGhcbiAgICBuQ29udG91cnM6IG51bWJlclxuICAgIGNpcmNsZUV2ZXJ5OiBudW1iZXJcbiAgICB1cGRhdGVyOiBVcGRhdGVyMkRcbiAgICB4bGFiZWw6IHN0cmluZ1xuICAgIHlsYWJlbDogc3RyaW5nXG4gICAgdGl0bGU6IHN0cmluZ1xuICAgIGNvbG9yU2NhbGU6ICh4OiBudW1iZXIpID0+IHN0cmluZyB8IG51bWJlclxuICAgIG1heFRpY2s6IG51bWJlciAvLyBtYXggbnVtYmVyIG9mIGRlc2NlbnQgdXBkYXRlcyB0byB0YWtlXG4gICAgaW50ZXJ2YWw6IG51bWJlciAvLyB0aW1lIGJldHdlZW4gZGVzY2VudCB1cGRhdGVzXG59XG5cbmludGVyZmFjZSBHcmFwaFNjYWxlcyB7XG4gICAgeD86IGQzLlNjYWxlTGluZWFyPG51bWJlciwgbnVtYmVyPixcbiAgICB5PzogZDMuU2NhbGVMaW5lYXI8bnVtYmVyLCBudW1iZXI+LFxuICAgIGNvbG9yPzogKHg6IG51bWJlcikgPT4gc3RyaW5nIHwgbnVtYmVyLFxuICAgIGN1cnZlPzogZDMuQ3VydmVDYXRtdWxsUm9tRmFjdG9yeSxcbiAgICBjb250b3Vycz86IGQzLkNvbnRvdXJzLFxuICAgIHRocmVzaG9sZHM/OiBudW1iZXJbXVxufVxuXG5pbnRlcmZhY2UgR3JhcGhTZWxzIHtcbiAgICB4YXhpcz86IEQzU2VsXG4gICAgeWF4aXM/OiBEM1NlbFxuICAgIGxlZ2VuZD86IEQzU2VsXG4gICAgdGlwPzogRDNTZWxcbiAgICB4bGFiZWw/OiBEM1NlbFxuICAgIHlsYWJlbD86IEQzU2VsXG4gICAgY2lyY2xlPzogRDNTZWxcbiAgICBhcnJvd3M/OiBEM1NlbFtdXG4gICAgdGl0bGU/OiBEM1NlbFxufVxuXG5jb25zdCBFVkVOVFMgPSB7XG4gICAgc3RlcEFkZGVkOiBcIlNpbXBsZU5ldF9TdGVwQWRkZWRcIlxufVxuXG5leHBvcnQgY2xhc3MgQ29udG91clBsb3QgZXh0ZW5kcyBTVkdWaXNDb21wb25lbnQ8VD4ge1xuICAgIGNzc25hbWUgPSBcInNpbXBsZS1ncmFwaFwiXG5cbiAgICBfZGF0YTogVFxuXG4gICAgb3B0aW9uczogR3JhcGhPcHRpb25zID0ge1xuICAgICAgICBtYXhXaWR0aDogNDUwLFxuICAgICAgICBtYXhIZWlnaHQ6IDUwMCxcbiAgICAgICAgbWFyZ2luOiB7IHRvcDogNTAsIHJpZ2h0OiA3NSwgYm90dG9tOiAxMjUsIGxlZnQ6IDUwIH0sXG4gICAgICAgIHBhZDogMzAsXG4gICAgICAgIHhyYW5nZTogWzAsIDEuNl0sXG4gICAgICAgIHlyYW5nZTogWzAsIDEuNl0sXG4gICAgICAgIG46IDIwMSxcbiAgICAgICAgbTogMjAxLFxuICAgICAgICBueDogMTEsXG4gICAgICAgIG55OiAxMSxcbiAgICAgICAgbkNvbnRvdXJzOiAyMCxcbiAgICAgICAgY2lyY2xlRXZlcnk6IDQsXG4gICAgICAgIHVwZGF0ZXI6IG51bGwsXG4gICAgICAgIHhsYWJlbDogXCJ4XCIsXG4gICAgICAgIHlsYWJlbDogXCJ5XCIsXG4gICAgICAgIHRpdGxlOiBudWxsLFxuICAgICAgICAvL0B0cy1pZ25vcmVcbiAgICAgICAgY29sb3JTY2FsZTogZDMuc2NhbGVMaW5lYXIoKVxuICAgICAgICAgICAgLmRvbWFpbihbMCwgMS40XSlcbiAgICAgICAgICAgIC8vQHRzLWlnbm9yZVxuICAgICAgICAgICAgLnJhbmdlKFtcInN0ZWVsYmx1ZVwiLCBcIndoaXRlXCJdKVxuICAgICAgICAgICAgLy9AdHMtaWdub3JlXG4gICAgICAgICAgICAuaW50ZXJwb2xhdGUoZDMuaW50ZXJwb2xhdGVSZ2IuZ2FtbWEoMi4yKSksXG4gICAgICAgIG1heFRpY2s6IDEwMDAsXG4gICAgICAgIGludGVydmFsOiAxMCxcbiAgICB9XG5cbiAgICBzZWxzOiBHcmFwaFNlbHMgPSB7fVxuXG4gICAgLy8gT3RoZXJcbiAgICBfY3VyciA9IHtcbiAgICAgICAgY3VyckxvYzogbmouYXJyYXkoWzAuMSwgMC4yXSksXG4gICAgICAgIHN0ZXA6IDAsXG4gICAgICAgIHRpY2tlcjogbnVsbCxcbiAgICB9XG5cbiAgICBzdGF0aWMgZXZlbnRzID0gRVZFTlRTXG5cbiAgICBjb25zdHJ1Y3RvcihkM3BhcmVudDogRDNTZWwsIGV2ZW50SGFuZGxlcj86IFNpbXBsZUV2ZW50SGFuZGxlciwgb3B0aW9uczogUGFydGlhbDxHcmFwaE9wdGlvbnM+ID0ge30pIHtcbiAgICAgICAgc3VwZXIoZDNwYXJlbnQsIGV2ZW50SGFuZGxlciwgb3B0aW9ucylcbiAgICAgICAgc3VwZXIuaW5pdFNWRyhvcHRpb25zKVxuICAgICAgICB0aGlzLmJhc2UuY2xhc3NlZCh0aGlzLmNzc25hbWUsIHRydWUpXG4gICAgICAgIHRoaXMub3B0aW9ucy51cGRhdGVyID0gb3B0aW9ucy51cGRhdGVyID09IG51bGwgPyBuZXcgVXBkYXRlcjJEKCkgOiBvcHRpb25zLnVwZGF0ZXJcbiAgICAgICAgdGhpcy5pbml0UGxvdCgpXG4gICAgfVxuXG4gICAgc3RhdGljIGZyb21MYW5kc2NhcGUoZDNwYXJlbnQ6IEQzU2VsLCBldmVudEhhbmRsZXI6IFNpbXBsZUV2ZW50SGFuZGxlciwgdDogTGFuZHNjYXBlMkQpOiBDb250b3VyUGxvdCB7XG4gICAgICAgIGNvbnN0IHVwZGF0ZXIgPSBuZXcgdC51cGRhdGVyQ2xhc3ModClcbiAgICAgICAgY29uc3QgbmV3T3B0aW9ucyA9IHsgLi4udCwgdXBkYXRlciB9XG4gICAgICAgIHJldHVybiBuZXcgQ29udG91clBsb3QoZDNwYXJlbnQsIGV2ZW50SGFuZGxlciwgbmV3T3B0aW9ucylcbiAgICB9XG5cbiAgICBzZXRVcGRhdGVyKG5hbWU6ICdibG9jaycgfCAnZnVsbCcpIHtcbiAgICAgICAgY29uc3Qgb3AgPSB0aGlzLm9wdGlvbnNcbiAgICAgICAgaWYgKG5hbWUgPT0gJ2Jsb2NrJykge1xuICAgICAgICAgICAgb3AudXBkYXRlciA9IG9wLnVwZGF0ZXIudG9CbG9jaygpXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAobmFtZSA9PSAnZnVsbCcpIHtcbiAgICAgICAgICAgIG9wLnVwZGF0ZXIgPSBvcC51cGRhdGVyLnRvRnVsbCgpXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlBsZWFzZSBlbnRlciBhIHZhbGlkIGlucHV0IGFzIHVwZGF0ZXJcIik7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy51cGRhdGVRdWl2ZXJzKClcbiAgICB9XG5cbiAgICBnZXQgc2NhbGVzKCk6IEdyYXBoU2NhbGVzIHtcbiAgICAgICAgY29uc3Qgb3AgPSB0aGlzLm9wdGlvbnNcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHg6IGQzLnNjYWxlTGluZWFyKCkuZG9tYWluKG9wLnhyYW5nZSkucmFuZ2UoWzAsIG9wLndpZHRoXSksXG4gICAgICAgICAgICB5OiBkMy5zY2FsZUxpbmVhcigpLmRvbWFpbihvcC55cmFuZ2UpLnJhbmdlKFtvcC5oZWlnaHQsIDBdKSxcbiAgICAgICAgICAgIGNvbnRvdXJzOiBkMy5jb250b3VycygpLnNpemUoW29wLm4sIG9wLm1dKSxcbiAgICAgICAgICAgIGN1cnZlOiBkMy5jdXJ2ZUNhdG11bGxSb20uYWxwaGEoMC41KSxcbiAgICAgICAgICAgIGNvbG9yOiBvcC5jb2xvclNjYWxlXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwbG90Q29udG91cnMoKSB7XG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuICAgICAgICBjb25zdCBvcCA9IHRoaXMub3B0aW9ucztcbiAgICAgICAgY29uc3Qgc2NhbGVzID0gdGhpcy5zY2FsZXM7XG5cbiAgICAgICAgLy8gY29uc3QgY29udG91ckZ1bmMgPSAoeCwgeSkgPT4gdGhpcy51cGRhdGVyLmFic0Vycihuai5hcnJheShbeCwgeV0pKVxuICAgICAgICBjb25zdCBjb250b3VyRnVuYyA9ICh4LCB5KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBsb3NzID0gb3AudXBkYXRlci5wbG90Rihuai5hcnJheShbeCwgeV0pKVxuICAgICAgICAgICAgcmV0dXJuIGxvc3NcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB2YWxzID0gZ2V0Q29udG91clZhbHVlcyhvcC5uLCBvcC5tLCBvcC54cmFuZ2UsIG9wLnlyYW5nZSwgY29udG91ckZ1bmMpXG4gICAgICAgIC8vIGxldCB0aHJlc2hvbGRzID0gbGluc3BhY2UoZDMubWluKHZhbHMpLCBkMy5tYXgodmFscyksIDIwKVxuICAgICAgICBsZXQgdGhyZXNob2xkcyA9IHBvd3NwYWNlKGQzLm1pbih2YWxzKSwgZDMubWF4KHZhbHMpLCBvcC5uQ29udG91cnMsIDEpXG5cbiAgICAgICAgY29uc3QgY29udG91clZhbHMgPSBzY2FsZXMuY29udG91cnMudGhyZXNob2xkcyh0aHJlc2hvbGRzKSh2YWxzKVxuICAgICAgICBjb25zdCBjb250b3VyR3JvdXAgPSB0aGlzLmJhc2UuYXBwZW5kKCdnJykuYXR0cignaWQnLCAnY29udG91ci1ncm91cCcpXG4gICAgICAgIGNvbnN0IGNvbnRvdXJzID0gY29udG91ckdyb3VwLnNlbGVjdEFsbChcInBhdGguY29udG91clwiKVxuICAgICAgICAgICAgLmRhdGEoY29udG91clZhbHMpXG5cbiAgICAgICAgY29udG91cnMuam9pbihcInBhdGhcIilcbiAgICAgICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJjb250b3VyXCIpXG4gICAgICAgICAgICAuYXR0cihcImRcIiwgZDMuZ2VvUGF0aChkMy5nZW9JZGVudGl0eSgpLnNjYWxlKG9wLndpZHRoIC8gb3AubikpKVxuICAgICAgICAgICAgLmF0dHIoXCJmaWxsXCIsIGQgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBzY2FsZXMuY29sb3IoZC52YWx1ZSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2xhc3NlZChcIm5vdC1maXRcIiwgdHJ1ZSlcbiAgICB9XG5cbiAgICBhZGRTdGVwKHY6IEFycmF5LCBwcmV2OiBBcnJheSA9IG51bGwpIHtcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgICAgIGNvbnN0IG9wID0gdGhpcy5vcHRpb25zO1xuICAgICAgICBjb25zdCBzY2FsZXMgPSB0aGlzLnNjYWxlcztcbiAgICAgICAgY29uc3Qgc2VscyA9IHRoaXMuc2VscztcblxuICAgICAgICBjb25zdCBjeCA9IHNjYWxlcy54LmNsYW1wKHRydWUpKHYuZ2V0KDApKVxuICAgICAgICBjb25zdCBjeSA9IHNjYWxlcy55LmNsYW1wKHRydWUpKHYuZ2V0KDEpKVxuXG4gICAgICAgIGlmIChwcmV2ICE9IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuYmFzZS5hcHBlbmQoJ2xpbmUnKVxuICAgICAgICAgICAgICAgIC5hdHRyKCd4MScsIHNjYWxlcy54KHByZXYuZ2V0KDApKSlcbiAgICAgICAgICAgICAgICAuYXR0cigneTEnLCBzY2FsZXMueShwcmV2LmdldCgxKSkpXG4gICAgICAgICAgICAgICAgLmF0dHIoJ3gyJywgY3gpXG4gICAgICAgICAgICAgICAgLmF0dHIoJ3kyJywgY3kpXG4gICAgICAgICAgICAgICAgLmNsYXNzZWQoJ2Rlc2NlbmRpbmctbGluZScsIHRydWUpXG4gICAgICAgIH1cblxuICAgICAgICAvLyBDaGVjayBib3JkZXIgY29uZGl0aW9uc1xuICAgICAgICBpZiAodi5nZXQoMCkgPj0gb3AueHJhbmdlWzFdIHx8IHYuZ2V0KDEpID49IG9wLnlyYW5nZVsxXSkge1xuICAgICAgICAgICAgdGhpcy5fY3Vyci50aWNrZXIudW5zdWJzY3JpYmUoKVxuICAgICAgICAgICAgcmV0dXJuIHZcbiAgICAgICAgfVxuXG5cbiAgICAgICAgaWYgKCgodGhpcy5fY3Vyci5zdGVwICUgb3AuY2lyY2xlRXZlcnkpID09IDApIHx8IChwcmV2ID09IG51bGwpKSB7XG4gICAgICAgICAgICBzZWxzLmNpcmNsZSA9IHRoaXMuYmFzZS5hcHBlbmQoJ2NpcmNsZScpXG4gICAgICAgICAgICAgICAgLmF0dHIoJ2N4JywgY3gpXG4gICAgICAgICAgICAgICAgLmF0dHIoJ2N5JywgY3kpXG4gICAgICAgICAgICAgICAgLmF0dHIoJ3InLCAyKVxuICAgICAgICAgICAgICAgIC5jbGFzc2VkKCdkZXNjZW5kaW5nLXBvaW50JywgdHJ1ZSlcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX2N1cnIuc3RlcCArPSAxXG4gICAgICAgIHRoaXMuZXZlbnRIYW5kbGVyLnRyaWdnZXIoRVZFTlRTLnN0ZXBBZGRlZCwgdilcbiAgICAgICAgcmV0dXJuIHY7XG4gICAgfVxuXG4gICAgY2xlYXJDaXJjbGVzKCkge1xuICAgICAgICB0aGlzLmJhc2Uuc2VsZWN0QWxsKCcuZGVzY2VuZGluZy1wb2ludCcpLnJlbW92ZSgpXG4gICAgICAgIHRoaXMuYmFzZS5zZWxlY3RBbGwoJy5kZXNjZW5kaW5nLWxpbmUnKS5yZW1vdmUoKVxuICAgIH1cblxuICAgIGNsZWFyUXVpdmVycygpIHtcbiAgICAgICAgdGhpcy5iYXNlLnNlbGVjdEFsbCgnLnF1aXZlcicpLnJlbW92ZSgpXG4gICAgICAgIHRoaXMuc2Vscy5hcnJvd3MgPSBbXVxuICAgIH1cblxuICAgIHBsb3REZXNjZW50KCkge1xuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICAgICAgY29uc3Qgb3AgPSB0aGlzLm9wdGlvbnM7XG4gICAgICAgIGxldCBwcmV2VmFsID0gbnVsbDtcblxuICAgICAgICBjb25zdCBzdWJPYmogPSB7XG4gICAgICAgICAgICBuZXh0OiAodmFsKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5hZGRTdGVwKHZhbCwgcHJldlZhbClcbiAgICAgICAgICAgICAgICBwcmV2VmFsID0gdmFsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXJyOiAoZXJyKSA9PiBjb25zb2xlLmxvZyhlcnIpLFxuICAgICAgICAgICAgY29tcGxldGU6ICgpID0+IGNvbnNvbGUubG9nKFwiQ09NUExFVEVcIilcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHByZXAgPSAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmFkZFN0ZXAodGhpcy5jdXJyKCkpXG4gICAgICAgICAgICBwcmV2VmFsID0gdGhpcy5jdXJyKClcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBwcmV2TG9zcyA9IC1JbmZpbml0eTtcbiAgICAgICAgdGhpcy5fY3Vyci50aWNrZXIgPSBpbnRlcnZhbChvcC5pbnRlcnZhbCkucGlwZShcbiAgICAgICAgICAgIHN0YXJ0V2l0aChwcmVwKCkpLFxuICAgICAgICAgICAgLy9AdHMtaWdub3JlXG4gICAgICAgICAgICBzY2FuKHYgPT4ge1xuICAgICAgICAgICAgICAgIC8vIGlmIChsb3NzID49IHByZXZMb3NzKSB7XG4gICAgICAgICAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKGBGb3VuZCBIaWdoZXIgTG9zcyA6JyguIEluY3JlYXNlZCBieSAke2xvc3MgLSBwcmV2TG9zc31gKTtcbiAgICAgICAgICAgICAgICAvLyAgICAgcHJldkxvc3MgPSBsb3NzO1xuICAgICAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgICAgICAvLyBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyAgICAgLy8gY29uc29sZS5sb2coYFllcCBuZXcgbG9zcyBpcyBsb3dlciB0aGFuIHByZXYgbG9zczogJHtsb3NzIC0gcHJldkxvc3N9YCk7XG4gICAgICAgICAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKGBMb3NzIGlzIGxvd2VyIDopYCk7XG4gICAgICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgICAgIHJldHVybiBvcC51cGRhdGVyLm5leHQodilcbiAgICAgICAgICAgIH0sIHNlbGYuY3VycigpKSxcbiAgICAgICAgICAgIHRha2Uob3AubWF4VGljaylcbiAgICAgICAgKS5zdWJzY3JpYmUoc3ViT2JqKVxuICAgIH1cblxuICAgIGludG9WaXModjogQXJyYXkpIHtcbiAgICAgICAgcmV0dXJuIHsgeDogdGhpcy5zY2FsZXMueCh2LmdldCgwKSksIHk6IHRoaXMuc2NhbGVzLnkodi5nZXQoMSkpIH1cbiAgICB9XG5cbiAgICBpbnRvTWF0aCh2OiBWZWN0b3IyRCkge1xuICAgICAgICByZXR1cm4geyB4OiB0aGlzLnNjYWxlcy54LmludmVydCh2LngpLCB5OiB0aGlzLnNjYWxlcy55LmludmVydCh2LnkpIH1cbiAgICB9XG5cbiAgICB1cGRhdGVRdWl2ZXJzKCkge1xuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICAgICAgY29uc3Qgb3AgPSB0aGlzLm9wdGlvbnM7XG4gICAgICAgIGNvbnN0IHNlbHMgPSB0aGlzLnNlbHM7XG4gICAgICAgIGNvbnN0IHNjYWxlcyA9IHRoaXMuc2NhbGVzO1xuXG4gICAgICAgIC8vIE1vZGlmeSBhcnJvd3MgaW5wbGFjZVxuICAgICAgICBzZWxzLmFycm93cy5mb3JFYWNoKGFycm93ID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHB0OiBWZWN0b3IyRCA9IHRoaXMuaW50b01hdGgoe1xuICAgICAgICAgICAgICAgIHg6ICthcnJvdy5hdHRyKCd4MScpLFxuICAgICAgICAgICAgICAgIHk6ICthcnJvdy5hdHRyKCd5MScpXG4gICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICBjb25zdCBwdDEgPSBuai5hcnJheShbcHQueCwgcHQueV0pXG4gICAgICAgICAgICBjb25zdCBwdDIgPSBvcC51cGRhdGVyLm5leHRMcihwdDEpXG5cbiAgICAgICAgICAgIGFycm93LmF0dHIoJ3gyJywgc2NhbGVzLngocHQyLmdldCgwKSkpXG4gICAgICAgICAgICAgICAgLmF0dHIoJ3kyJywgc2NhbGVzLnkocHQyLmdldCgxKSkpXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgY3JlYXRlUXVpdmVycygpIHtcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgICAgIGNvbnN0IG9wID0gdGhpcy5vcHRpb25zO1xuICAgICAgICBjb25zdCBzY2FsZXMgPSB0aGlzLnNjYWxlcztcbiAgICAgICAgY29uc3Qgc2VscyA9IHRoaXMuc2VscztcblxuICAgICAgICBjb25zdCBwb2ludHMgPSBTVkcubWVzaGdyaWQob3AubngsIG9wLm55LCBvcC54cmFuZ2UsIG9wLnlyYW5nZSlcbiAgICAgICAgY29uc3QgY29sb3IgPSBcImJsdWVcIjtcbiAgICAgICAgY29uc3Qgd2lkdGggPSAxLjI1O1xuXG4gICAgICAgIGNvbnN0IHF1aXZlckdyb3VwID0gdGhpcy5iYXNlLmFwcGVuZCgnZycpLmF0dHIoJ2lkJywgJ3F1aXZlci1ncm91cCcpIC8vIGluaXQgc2hvdWxkIGhhdmUgdGhlc2UgZ3JvdXBzIGFscmVhZHkgc2VsZWN0ZWRcbiAgICAgICAgdGhpcy5jbGVhclF1aXZlcnMoKVxuXG4gICAgICAgIHNlbHMuYXJyb3dzID0gcG9pbnRzLm1hcChwdCA9PiB7XG4gICAgICAgICAgICBjb25zdCBwdDEgPSBuai5hcnJheShbcHQueCwgcHQueV0pXG4gICAgICAgICAgICBjb25zdCBwdDIgPSBvcC51cGRhdGVyLm5leHRMcihwdDEpXG4gICAgICAgICAgICAvL0B0cy1pZ25vcmVcbiAgICAgICAgICAgIGNvbnN0IGFycm93ID0gU1ZHLmluc2VydEFycm93KHF1aXZlckdyb3VwLCBzY2FsZXMueChwdC54KSwgc2NhbGVzLnkocHQueSksIHNjYWxlcy54KHB0Mi5nZXQoMCkpLCBzY2FsZXMueShwdDIuZ2V0KDEpKSwgY29sb3IsIHdpZHRoKVxuICAgICAgICAgICAgYXJyb3cuY2xhc3NlZCgncXVpdmVyJywgdHJ1ZSlcbiAgICAgICAgICAgIHJldHVybiBhcnJvd1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIGluaXRQbG90KCkge1xuICAgICAgICAvLyBJbml0aWFsaXplIHBsb3RzXG4gICAgICAgIHRoaXMucGxvdENvbnRvdXJzKClcbiAgICAgICAgdGhpcy5jcmVhdGVRdWl2ZXJzKClcbiAgICB9XG5cbiAgICBpbml0KCkge1xuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICAgICAgY29uc3Qgb3AgPSB0aGlzLm9wdGlvbnM7XG4gICAgICAgIGNvbnN0IHNjYWxlcyA9IHRoaXMuc2NhbGVzO1xuICAgICAgICBjb25zdCBzZWxzID0gdGhpcy5zZWxzO1xuXG4gICAgICAgIC8vIEFkZCBkZWZpbml0aW9uc1xuICAgICAgICBTVkcuYWRkQXJyb3dzKHRoaXMuc3ZnKVxuXG4gICAgICAgIC8vIENyZWF0ZSBzY2FsZXNcbiAgICAgICAgLy8gQWRkIEF4ZXMgYW5kIGxhYmVsc1xuICAgICAgICBzZWxzLnhheGlzID0gdGhpcy5iYXNlLmFwcGVuZChcImdcIilcbiAgICAgICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJheGlzIGF4aXMtLXhcIilcbiAgICAgICAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIFNWRy50cmFuc2xhdGUoMCwgb3AuaGVpZ2h0KSlcbiAgICAgICAgICAgIC5jYWxsKGQzLmF4aXNCb3R0b20oc2NhbGVzLngpLnRpY2tzKDMsIFwic1wiKSk7XG5cbiAgICAgICAgc2Vscy55YXhpcyA9IHRoaXMuYmFzZS5hcHBlbmQoXCJnXCIpXG4gICAgICAgICAgICAuYXR0cihcImNsYXNzXCIsIFwiYXhpcyBheGlzLS15XCIpXG4gICAgICAgICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBTVkcudHJhbnNsYXRlKDAsIDApKVxuICAgICAgICAgICAgLmNhbGwoZDMuYXhpc0xlZnQoc2NhbGVzLnkpLnRpY2tzKDMsIFwic1wiKSk7XG5cbiAgICAgICAgc2Vscy54bGFiZWwgPSB0aGlzLmJhc2UuYXBwZW5kKFwidGV4dFwiKVxuICAgICAgICAgICAgLmNsYXNzZWQoXCJheGlzLWxhYmVsXCIsIHRydWUpXG4gICAgICAgICAgICAuYXR0cihcInRleHQtYW5jaG9yXCIsIFwibWlkZGxlXCIpXG4gICAgICAgICAgICAuYXR0cihcImNsYXNzXCIsIFwidGl0bGVzXCIpXG4gICAgICAgICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBTVkcudHJhbnNsYXRlKG9wLndpZHRoIC8gMiwgb3AuaGVpZ2h0ICsgb3AucGFkKSlcbiAgICAgICAgICAgIC50ZXh0KG9wLnhsYWJlbClcblxuICAgICAgICBzZWxzLnlsYWJlbCA9IHRoaXMuYmFzZS5hcHBlbmQoXCJ0ZXh0XCIpXG4gICAgICAgICAgICAuY2xhc3NlZChcImF4aXMtbGFiZWxcIiwgdHJ1ZSlcbiAgICAgICAgICAgIC5hdHRyKFwidGV4dC1hbmNob3JcIiwgXCJtaWRkbGVcIilcbiAgICAgICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJ0aXRsZXNcIilcbiAgICAgICAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIFNWRy50cmFuc2xhdGUoLW9wLnBhZCwgb3AuaGVpZ2h0IC8gMikgKyBTVkcucm90YXRlKC05MCkpXG4gICAgICAgICAgICAudGV4dChvcC55bGFiZWwpXG5cbiAgICAgICAgc2Vscy50aXRsZSA9IHRoaXMuYmFzZS5hcHBlbmQoXCJ0ZXh0XCIpXG4gICAgICAgICAgICAuY2xhc3NlZChcImF4aXMtbGFiZWxcIiwgdHJ1ZSlcbiAgICAgICAgICAgIC5hdHRyKFwidGV4dC1hbmNob3JcIiwgXCJtaWRkbGVcIilcbiAgICAgICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJ0aXRsZXNcIilcbiAgICAgICAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIFNWRy50cmFuc2xhdGUob3Aud2lkdGggLyAyLCAtb3AucGFkIC8gMikpXG4gICAgICAgICAgICAudGV4dChvcC50aXRsZSlcblxuICAgICAgICAvLyBDcmVhdGUgY2xpY2sgYmVoYXZpb3JcbiAgICAgICAgdGhpcy5iYXNlLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmIChzZWxmLl9jdXJyLnRpY2tlciAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBzZWxmLl9jdXJyLnRpY2tlci51bnN1YnNjcmliZSgpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBjb29yZHMgPSBkMy5tb3VzZSh0aGlzKTtcbiAgICAgICAgICAgIHNlbGYuX2N1cnIuc3RlcCA9IDBcbiAgICAgICAgICAgIHNlbGYuY3Vycihbc2NhbGVzLnguaW52ZXJ0KGNvb3Jkc1swXSksIHNjYWxlcy55LmludmVydChjb29yZHNbMV0pXSlcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQ2xpY2tlZDogXCIsIHNlbGYuY3VycigpKTtcblxuICAgICAgICAgICAgLy8gaWYgKHNlbGYuY3VycigpLnggPiAwICYmIHNlbGYuY3VycigpLnkgPiAwICYmIHNlbGYuY3VycigpLnggPCAob3AueHJhbmdlWzFdIC0gMC4xKSAmJiBzZWxmLmN1cnIoKS55IDwgKG9wLnlyYW5nZVsxXSAtIDAuMSkpIHtcbiAgICAgICAgICAgIC8vIGlmIChzZWxmLmN1cnIoKS5nZXQoMCkgPiAwICYmIHNlbGYuY3VycigpLmdldCgxKSA+IDApIHtcbiAgICAgICAgICAgIHNlbGYuYWRkU3RlcChzZWxmLmN1cnIoKSlcbiAgICAgICAgICAgIHNlbGYuY2xlYXJDaXJjbGVzKCk7XG4gICAgICAgICAgICBzZWxmLnBsb3REZXNjZW50KCk7XG4gICAgICAgICAgICAvLyB9XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgY3VycigpOiBBcnJheVxuICAgIGN1cnIodmFsOiBBcnJheSB8IG51bWJlcltdKTogdGhpc1xuICAgIGN1cnIodmFsPykge1xuICAgICAgICBpZiAodmFsID09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9jdXJyLmN1cnJMb2NcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX2N1cnIuY3VyckxvYyA9IG5qLmFycmF5KHZhbCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGRhdGEoKTogbnVtYmVyW11cbiAgICBkYXRhKHZhbDogbnVtYmVyW10pOiB0aGlzXG4gICAgZGF0YSh2YWw/KSB7XG4gICAgICAgIGlmICh2YWwgPT0gbnVsbCkgcmV0dXJuIHRoaXMuX2RhdGFcbiAgICAgICAgdGhpcy5fZGF0YSA9IHZhbFxuICAgICAgICByZXR1cm4gdGhpc1xuICAgIH1cblxuICAgIHEoKTogbnVtYmVyXG4gICAgcSh2YWw6IG51bWJlcik6IHRoaXNcbiAgICBxKHZhbD8pIHtcbiAgICAgICAgY29uc3Qgb3AgPSB0aGlzLm9wdGlvbnNcbiAgICAgICAgaWYgKHZhbCA9PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gb3AudXBkYXRlci5xKCk7XG4gICAgICAgIH1cblxuICAgICAgICBvcC51cGRhdGVyLnEodmFsKVxuICAgICAgICB0aGlzLnVwZGF0ZVF1aXZlcnMoKVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBldGEoKTogbnVtYmVyXG4gICAgZXRhKHZhbDogbnVtYmVyKTogdGhpc1xuICAgIGV0YSh2YWw/KSB7XG4gICAgICAgIGNvbnN0IG9wID0gdGhpcy5vcHRpb25zXG4gICAgICAgIGlmICh2YWwgPT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIG9wLnVwZGF0ZXIuZXRhKCk7XG4gICAgICAgIH1cblxuICAgICAgICBvcC51cGRhdGVyLmV0YSh2YWwpXG4gICAgICAgIHRoaXMudXBkYXRlUXVpdmVycygpXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbn0iLCJpbXBvcnQgKiBhcyBkMyBmcm9tICdkMydcbmltcG9ydCB7IE1hbnVhbFVwZGF0ZXIgfSBmcm9tIFwiLi9NYW51YWxVcGRhdGVyXCJcbmltcG9ydCB7IFZlY3RvcjJEIH0gZnJvbSBcIi4uL3R5cGVzXCJcbmltcG9ydCAqIGFzIFIgZnJvbSAncmFtZGEnXG5pbXBvcnQgeyBTdWJqZWN0LCBCZWhhdmlvclN1YmplY3QgfSBmcm9tIFwicnhqc1wiXG5cbmV4cG9ydCB0eXBlIEJhbGxIaXN0b3J5ID0ge1xuICAgIGNsYXNzbmFtZTogc3RyaW5nXG4gICAgeDogbnVtYmVyXG4gICAgbG9zczogbnVtYmVyXG59XG5cbmV4cG9ydCBjbGFzcyBHb2xmQmFsbCB7XG4gICAgX3g6IG51bWJlclxuICAgIHVwZGF0ZXI6IE1hbnVhbFVwZGF0ZXJcbiAgICBjbGFzc25hbWU6IHN0cmluZ1xuICAgIHN0cmVhbTogU3ViamVjdDxCYWxsSGlzdG9yeT4gLy8gUHVzaGVzIGhpc3Rvcnkgb2YgeCB2YWx1ZXMgdG8gdGhpc1xuXG4gICAgY29uc3RydWN0b3IodXBkYXRlcjogTWFudWFsVXBkYXRlciwgY2xhc3NuYW1lOiBzdHJpbmcsIHggPSAwKSB7XG4gICAgICAgIHRoaXMudXBkYXRlciA9IHVwZGF0ZXJcbiAgICAgICAgdGhpcy5feCA9IHhcbiAgICAgICAgdGhpcy5jbGFzc25hbWUgPSBjbGFzc25hbWVcbiAgICAgICAgdGhpcy5zdHJlYW0gPSBuZXcgU3ViamVjdCgpXG4gICAgfVxuXG4gICAgZ2V0IHgoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl94XG4gICAgfVxuXG4gICAgc2V0IHgodjogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuX3ggPSB2XG4gICAgfVxuXG4gICAgbmV4dFgoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudXBkYXRlci5uZXh0KHRoaXMuX3gpXG4gICAgfVxuXG4gICAgbmV4dCgpOiBHb2xmQmFsbCB7XG4gICAgICAgIGNvbnN0IG5leHRYID0gdGhpcy5uZXh0WCgpXG4gICAgICAgIHJldHVybiBuZXcgR29sZkJhbGwodGhpcy51cGRhdGVyLCB0aGlzLmNsYXNzbmFtZSwgdGhpcy5uZXh0WCgpKVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFVzZSB0aGUgdXBkYXRlciB0byB0YWtlIHRoZSBuZXh0IHN0ZXBcbiAgICAgKiBcbiAgICAgKiBAcGFyYW0gZm9yY2VYIEZvcmNlIHRoZSBuZXh0WCB0byBiZSBvZiB0aGlzIHZhbHVlXG4gICAgICovXG4gICAgc3RlcF8oZm9yY2VYOm51bWJlcnxudWxsPW51bGwpOiB0aGlzIHtcbiAgICAgICAgaWYgKGZvcmNlWCAhPSBudWxsKSB0aGlzLnggPSBmb3JjZVhcbiAgICAgICAgZWxzZSB0aGlzLnggPSB0aGlzLm5leHRYKClcblxuICAgICAgICB0aGlzLnN0cmVhbS5uZXh0KHtcbiAgICAgICAgICAgIGNsYXNzbmFtZTogdGhpcy5jbGFzc25hbWUsXG4gICAgICAgICAgICB4OiB0aGlzLngsXG4gICAgICAgICAgICBsb3NzOiB0aGlzLnVwZGF0ZXIubG9zcyh0aGlzLngpXG4gICAgICAgIH0pXG4gICAgICAgIHJldHVybiB0aGlzXG4gICAgfVxuXG4gICAgdG9WZWMoZjogKHg6IG51bWJlcikgPT4gbnVtYmVyKTogVmVjdG9yMkQge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgeDogdGhpcy5feCxcbiAgICAgICAgICAgIHk6IGYodGhpcy5feClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHEoKTogbnVtYmVyXG4gICAgcSh2YWw6IG51bWJlcik6IHRoaXNcbiAgICBxKHZhbD8pIHtcbiAgICAgICAgaWYgKHZhbCA9PSBudWxsKSByZXR1cm4gdGhpcy51cGRhdGVyLnFcbiAgICAgICAgdGhpcy51cGRhdGVyLnEgPSB2YWxcbiAgICAgICAgcmV0dXJuIHRoaXNcbiAgICB9XG5cbiAgICBldGEoKTogbnVtYmVyXG4gICAgZXRhKHZhbDogbnVtYmVyKTogdGhpc1xuICAgIGV0YSh2YWw/KSB7XG4gICAgICAgIGlmICh2YWwgPT0gbnVsbCkgcmV0dXJuIHRoaXMudXBkYXRlci5ldGFcbiAgICAgICAgdGhpcy51cGRhdGVyLmV0YSA9IHZhbFxuICAgICAgICByZXR1cm4gdGhpc1xuICAgIH1cbn0iLCJpbXBvcnQgKiBhcyBkMyBmcm9tICdkMydcbmltcG9ydCB7IEQzU2VsLCBsaW5zcGFjZSB9IGZyb20gJy4uL3V0aWwveGQzJ1xuaW1wb3J0ICogYXMgUiBmcm9tICdyYW1kYSdcbmltcG9ydCB7IFZlY3RvcjJEIH0gZnJvbSAnLi4vdHlwZXMnXG5pbXBvcnQgeyBTVkdPcHRpb25zLCBTVkdWaXNDb21wb25lbnQgfSBmcm9tICcuLi91dGlsL1NWR1Zpc0NvbXBvbmVudCdcbmltcG9ydCB7IFNpbXBsZUV2ZW50SGFuZGxlciB9IGZyb20gJy4uL3V0aWwvU2ltcGxlRXZlbnRIYW5kbGVyJztcbmltcG9ydCB7IFNWRyB9IGZyb20gJy4uL3V0aWwvU1ZHcGx1cydcbmltcG9ydCB7IGludGVydmFsLCBmcm9tRXZlbnQgfSBmcm9tICdyeGpzJ1xuaW1wb3J0IHsgdGFrZSwgc2NhbiB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJ1xuaW1wb3J0IHsgTWFudWFsVXBkYXRlciB9IGZyb20gJy4vTWFudWFsVXBkYXRlcidcbmltcG9ydCB7IEdvbGZCYWxsIH0gZnJvbSAnLi9Hb2xmQmFsbCdcbmltcG9ydCB7IGxhbmRzY2FwZXMsIExhbmRzY2FwZSwgYmFzZUxvc3MsIGdldFBsb3RGdW5jIH0gZnJvbSBcIi4uL0dvbGZMYW5kc2NhcGVzXCI7XG5cbnR5cGUgVCA9IEdvbGZCYWxsW11cblxuaW50ZXJmYWNlIEdyYXBoT3B0aW9ucyBleHRlbmRzIFNWR09wdGlvbnMge1xuICAgIHBhZDogbnVtYmVyXG4gICAgbWF4SXRlcjogbnVtYmVyIC8vIEhvdyBtYW55IGl0ZXJhdGlvbnMgdG8gdGFrZT9cbiAgICBsYW5kc2NhcGU6IExhbmRzY2FwZVxufVxuXG5pbnRlcmZhY2UgU2NhbGVYWSB7XG4gICAgeDogZDMuU2NhbGVMaW5lYXI8bnVtYmVyLG51bWJlcj5cbiAgICB5OiBkMy5TY2FsZUxpbmVhcjxudW1iZXIsbnVtYmVyPlxufVxuXG5pbnRlcmZhY2UgR3JhcGhTY2FsZXMge1xuICAgIGJhc2UybWF0aD86IFNjYWxlWFksXG4gICAgYmFzZTJweD86IFNjYWxlWFksXG4gICAgbWF0aDJweD86IFNjYWxlWFksXG4gICAgYmFzZTJsb3NzPzogZDMuU2NhbGVMaW5lYXI8bnVtYmVyLCBudW1iZXI+LFxuICAgIHBhdGhzPzogZDMuTGluZTxudW1iZXI+W10sXG4gICAgY29sb3I/OiBkMy5TY2FsZVNlcXVlbnRpYWw8bnVtYmVyPixcbn1cblxuaW50ZXJmYWNlIEdyYXBoU2VscyB7XG4gICAgeGF4aXM/OiBEM1NlbFxuICAgIHlheGlzPzogRDNTZWxcbiAgICB4bGFiZWw/OiBEM1NlbFxuICAgIGxpbmU/OiBEM1NlbFxuICAgIGJhY2tkcm9wPzogRDNTZWxcbiAgICBiYWxsPzogRDNTZWxcbiAgICBtYXNrPzogRDNTZWxcbiAgICBtYXNrTGluZT86IEQzU2VsXG4gICAgbWFza0JhY2tncm91bmQ/OiBEM1NlbFxuICAgIGxpbmVCYWNrZ3JvdW5kPzogRDNTZWxcbn1cblxubGV0IENMRUFSRUQgPSAwO1xuLy8gLy8gTm90ZSB0aGF0IHBsb3RGdW5jIGlzIHRoZSBsb3NzIGZ1bmN0aW9uIHdlIHBsb3QgYW5kIGZ1bmMgaXMgdGhlIGNvbXBvbmVudCBvZiB0aGUgbG9zcyBmdW5jdGlvbiBuZWVkZWQgZm9yIHRoZSB1cGRhdGVyXG4vLyAvLyBleHBvcnQgY29uc3QgZnVuYyA9IHggPT4gTWF0aC50YW5oKHgpXG4vLyAvLyBleHBvcnQgY29uc3QgZEZ1bmMgPSB4ID0+IE1hdGgucG93KE1hdGguY29zaCh4KSwgLTIpXG4vLyBleHBvcnQgY29uc3QgZnVuYyA9IHggPT4gTWF0aC50YW5oKHggLSAxMSkgLyA0ICsgTWF0aC50YW5oKHggLSA2KSAvIDQgKyBNYXRoLnRhbmgoeCkgKyBNYXRoLnRhbmgoeCArIDYpIC8gNCArIE1hdGgudGFuaCh4ICsgMTEpIC8gNFxuLy8gZXhwb3J0IGNvbnN0IGRGdW5jID0geCA9PiBNYXRoLnBvdyhNYXRoLmNvc2goeCAtIDExKSwgLTIpIC8gNCArIE1hdGgucG93KE1hdGguY29zaCh4IC0gNiksIC0yKSAvIDQgKyBNYXRoLnBvdyhNYXRoLmNvc2goeCksIC0yKSArIE1hdGgucG93KE1hdGguY29zaCh4ICsgNiksIC0yKSAvIDQgKyBNYXRoLnBvdyhNYXRoLmNvc2goeCArIDExKSwgLTIpIC8gNFxuLy8gLy8gZXhwb3J0IGNvbnN0IGZ1bmMgPSB4ID0+IE1hdGguc2lnbih4KSAqICgxIC0gKDEgLyAoMSArIE1hdGguYWJzKHgpKSkpXG4vLyAvLyBleHBvcnQgY29uc3QgZEZ1bmMgPSB4ID0+IDEgLyBNYXRoLnBvdygxICsgTWF0aC5hYnMoeCksIDIpXG5cbi8vIGV4cG9ydCBjb25zdCBwbG90RnVuYyA9IHggPT4gYmFzZUxvc3MoZnVuYyh4KSlcblxuZXhwb3J0IGNsYXNzIEdvbGZIb2xlMUQgZXh0ZW5kcyBTVkdWaXNDb21wb25lbnQ8VD4ge1xuICAgIGNzc25hbWUgPSBcImdvbGYtaG9sZS1jaGFydFwiXG4gICAgbWFza0lkOiBzdHJpbmdcblxuICAgIF9kYXRhOiBUXG5cbiAgICBvcHRpb25zOiBHcmFwaE9wdGlvbnMgPSB7XG4gICAgICAgIG1heFdpZHRoOiA0MDAsXG4gICAgICAgIG1heEhlaWdodDogMjAwLFxuICAgICAgICBtYXJnaW46IHsgdG9wOiA1LCByaWdodDogMTAsIGJvdHRvbTogNDAsIGxlZnQ6IDEwIH0sXG4gICAgICAgIHBhZDogMzAsXG4gICAgICAgIG1heEl0ZXI6IDYwMCxcbiAgICAgICAgbGFuZHNjYXBlOiBsYW5kc2NhcGVzLmhvbGVcbiAgICB9XG5cbiAgICBzY2FsZXM6IEdyYXBoU2NhbGVzID0ge31cblxuICAgIHNlbHM6IEdyYXBoU2VscyA9IHt9XG5cbiAgICBjb25zdHJ1Y3RvcihkM3BhcmVudDogRDNTZWwsIGV2ZW50SGFuZGxlcj86IFNpbXBsZUV2ZW50SGFuZGxlciwgb3B0aW9ucyA9IHt9LCBJRCA9IDApIHtcbiAgICAgICAgc3VwZXIoZDNwYXJlbnQsIGV2ZW50SGFuZGxlciwgb3B0aW9ucywgSUQpXG4gICAgICAgIHRoaXMubWFza0lkID0gYGxpbmUtbWFzay0ke3RoaXMuSUR9YFxuICAgICAgICBzdXBlci5pbml0U1ZHKG9wdGlvbnMsIFtcImJnXCJdKVxuICAgICAgICB0aGlzLmJhc2UuY2xhc3NlZCh0aGlzLmNzc25hbWUsIHRydWUpXG5cbiAgICAgICAgY29uc3QgeiA9IHRoaXMub3B0aW9ucy5sYW5kc2NhcGVcbiAgICAgICAgXG4gICAgICAgIC8vIE5lZWQgdG8gaGF2ZSBpbml0aWFsIGRhdGFcbiAgICAgICAgY29uc3QgZGF0YSA9IFtcbiAgICAgICAgICAgIG5ldyBHb2xmQmFsbChuZXcgTWFudWFsVXBkYXRlcih6LmYsIHouZGYsIDAsIDAuOSksICdnb2xmLWJhbGwtc2dkJywgNCksXG4gICAgICAgIF1cblxuICAgICAgICB0aGlzLmRhdGEoZGF0YSlcbiAgICAgICAgdGhpcy5pbml0QmFsbHMoKVxuICAgIH1cblxuICAgIGxhbmRzY2FwZSgpOiBMYW5kc2NhcGVcbiAgICBsYW5kc2NhcGUodmFsOiBMYW5kc2NhcGUpOiB0aGlzXG4gICAgbGFuZHNjYXBlKHZhbD8pIHtcbiAgICAgICAgaWYgKHZhbCA9PSBudWxsKSByZXR1cm4gdGhpcy5vcHRpb25zLmxhbmRzY2FwZVxuICAgICAgICBjb25zdCBvcCA9IHRoaXMub3B0aW9uc1xuICAgICAgICBvcC5sYW5kc2NhcGUgPSB2YWxcblxuICAgICAgICAvLyBVcGRhdGUgeHJhbmdlIGFuZCB5cmFuZ2VcbiAgICAgICAgdGhpcy51cGRhdGVTY2FsZXMob3ApXG4gICAgICAgIHRoaXMudXBkYXRlQXhlcyh0aGlzLnNjYWxlcywgb3ApXG5cbiAgICAgICAgLy8gVXBkYXRlIGRhdGFcbiAgICAgICAgdGhpcy5kYXRhKCkuZm9yRWFjaChiID0+IHtcbiAgICAgICAgICAgIGIudXBkYXRlci5mID0gdmFsLmZcbiAgICAgICAgICAgIGIudXBkYXRlci5kZiA9IHZhbC5kZlxuICAgICAgICB9KVxuXG4gICAgICAgIHRoaXMuY2xlYXJDdXJ2ZSgpXG4gICAgICAgIHRoaXMucGxvdEN1cnZlKClcblxuICAgICAgICByZXR1cm4gdGhpc1xuICAgIH1cblxuICAgIC8qKiBSZXR1cm4gZmlyc3QgdXBkYXRlciBpbiBkYXRhICovXG4gICAgZ2V0IGRhdGFIZWFkKCk6IEdvbGZCYWxsIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmRhdGEoKVswXVxuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiTG9va3MgbGlrZSB0aGVyZSBpcyBubyBkYXRhIGluIHRoaXMgZ29sZiBob2xlXCIpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFB1dCBhIHZlY3RvciBpbnRvIHRoZSBjb29yZGluYXRlIHN5c3RlbSB1c2VkIGJ5IHRoZSB2aXN1YWxpemF0aW9uXG4gICAgICogXG4gICAgICogQHBhcmFtIHYgVmVjdG9yIFxuICAgICAqL1xuICAgIGludG9WaXModjogVmVjdG9yMkQpIHtcbiAgICAgICAgcmV0dXJuIHsgeDogdGhpcy5zY2FsZXMubWF0aDJweC54KHYueCksIHk6IHRoaXMuc2NhbGVzLm1hdGgycHgueSh2LnkpIH1cbiAgICB9XG5cbiAgICAvLyBUYWtlIGEgdmVjdG9yIGluIHRoZSBjb29yZGluYXRlIHN5c3RlbSBhbmQgcmV0dXJuIGl0IHRvIHRoZSBtYXRoIGNvb3JkaW5hdGVzXG4gICAgaW50b01hdGgodjogVmVjdG9yMkQpIHtcbiAgICAgICAgcmV0dXJuIHsgeDogdGhpcy5zY2FsZXMubWF0aDJweC54LmludmVydCh2LngpLCB5OiB0aGlzLnNjYWxlcy5tYXRoMnB4LnkuaW52ZXJ0KHYueSkgfVxuICAgIH1cblxuICAgIC8vIFR1cm4gYSBudW1iZXIgaW50byBhIHZlY3RvclxuICAgIG51bTJ2ZWMoeDogbnVtYmVyKTogVmVjdG9yMkQge1xuICAgICAgICBjb25zdCBvcCA9IHRoaXMub3B0aW9uc1xuICAgICAgICByZXR1cm4geyB4OiB4LCB5OiBvcC5sYW5kc2NhcGUubG9zcyh4KSB9XG4gICAgfVxuXG4gICAgLy8gVHVybiBhIGJhbGwgaW50byBhIHZlY3RvciBpbiB0aGUgdmlzdWFsaXphdGlvbiBjb29yZGluYXRlIHN5c3RlbVxuICAgIGJhbGwydmlzKGI6IEdvbGZCYWxsKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmludG9WaXMoYi50b1ZlYyhnZXRQbG90RnVuYyh0aGlzLm9wdGlvbnMubGFuZHNjYXBlKSkpXG4gICAgfVxuXG4gICAgLy8gUGxvdCBhIGJhbGwgb24gdGhlIGNoYXJ0XG4gICAgcGxvdEJhbGwoYjogR29sZkJhbGwpIHtcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG5cbiAgICAgICAgY29uc3QgdG9DbGFzcyA9IG5hbWUgPT4gJy4nICsgbmFtZVxuICAgICAgICBjb25zdCBjbHNTZWwgPSB0b0NsYXNzKGIuY2xhc3NuYW1lKVxuXG4gICAgICAgIGNvbnN0IGJhbGwgPSB0aGlzLmJhbGwydmlzKGIpXG4gICAgICAgIHNlbGYuc2Vscy5iYWxsID0gc2VsZi5iYXNlLnNlbGVjdEFsbChjbHNTZWwpXG4gICAgICAgICAgICAuZGF0YShbYmFsbF0pXG4gICAgICAgICAgICAuam9pbignY2lyY2xlJylcbiAgICAgICAgICAgIC5jbGFzc2VkKCdnb2xmLWJhbGwnLCB0cnVlKVxuICAgICAgICAgICAgLmNsYXNzZWQoYi5jbGFzc25hbWUsIHRydWUpXG4gICAgICAgICAgICAuYXR0cihcImN4XCIsIGQgPT4gZC54KVxuICAgICAgICAgICAgLmF0dHIoXCJjeVwiLCBkID0+IGQueSlcbiAgICAgICAgICAgIC5hdHRyKFwiclwiLCBcIjVweFwiKVxuICAgIH1cblxuICAgIGNsZWFyQ3VydmUoKSB7XG4gICAgICAgIHRoaXMubGF5ZXJzLmJnLnNlbGVjdEFsbCgnLmxpbmUnKS5yZW1vdmUoKVxuICAgICAgICB0aGlzLnNlbHMubWFza0xpbmUuaHRtbCgnJylcbiAgICAgICAgdGhpcy5iYXNlLnNlbGVjdEFsbCgnI2xpbmUtYmFja2dyb3VuZCcpLmh0bWwoJycpXG4gICAgfVxuXG4gICAgcGxvdEN1cnZlQnlEZWZhdWx0KHhzOiBudW1iZXJbXSkge1xuICAgICAgICBjb25zdCBzZWxmID0gdGhpcywgb3AgPSB0aGlzLm9wdGlvbnMsIHNjYWxlcyA9IHRoaXMuc2NhbGVzLCBzZWxzID0gdGhpcy5zZWxzO1xuXG4gICAgICAgIHNjYWxlcy5wYXRocy5mb3JFYWNoKGxpbmUgPT4ge1xuICAgICAgICAgICAgdGhpcy5sYXllcnMuYmcuYXBwZW5kKFwicGF0aFwiKVxuICAgICAgICAgICAgICAgIC5kYXR1bSh4cylcbiAgICAgICAgICAgICAgICAuYXR0cihcImNsYXNzXCIsIFwibGluZVwiKVxuICAgICAgICAgICAgICAgIC5hdHRyKFwiZFwiLCBkID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGxpbmUoZClcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICB9KVxuXG4gICAgICAgIHNlbHMubGluZUJhY2tncm91bmQuc2VsZWN0QWxsKFwiLmdyYWQtYm94XCIpXG4gICAgICAgICAgICAuZGF0YShbMV0pXG4gICAgICAgICAgICAuam9pbigncmVjdCcpXG4gICAgICAgICAgICAuY2xhc3NlZCgnZ3JhZC1ib3gnLCB0cnVlKVxuICAgICAgICAgICAgLmF0dHIoXCJ3aWR0aFwiLCBvcC53aWR0aClcbiAgICAgICAgICAgIC5hdHRyKFwiaGVpZ2h0XCIsIG9wLmhlaWdodClcbiAgICAgICAgICAgIC5hdHRyKFwiZmlsbC1vcGFjaXR5XCIsIDAuMClcbiAgICB9XG5cbiAgICBwbG90Q3VydmVCeUdyYWRpZW50KHhzOiBudW1iZXJbXSkge1xuICAgICAgICBjb25zdCBzZWxmID0gdGhpcywgc2NhbGVzID0gdGhpcy5zY2FsZXMsIHNlbHMgPSB0aGlzLnNlbHMsIG9wID0gdGhpcy5vcHRpb25zO1xuXG4gICAgICAgIGNvbnN0IHh3aWR0aCA9IG9wLndpZHRoICogKHhzWzFdIC0geHNbMF0pIC8gKGQzLm1heCh4cykgLSBkMy5taW4oeHMpKSAvLyBBc3N1bWVzIGxlbmd0aCBvZiB4cyA+IDFcblxuICAgICAgICBjb25zdCBiYWxsVXBkYXRlciA9IHNlbGYuZGF0YSgpWzBdLnVwZGF0ZXJcblxuICAgICAgICAvLyBDbGVhciBtYXNrXG4gICAgICAgIGNvbnN0IGxpbmUgPSBzY2FsZXMucGF0aHNbMF1cblxuICAgICAgICBzZWxzLm1hc2tMaW5lLmF0dHIoJ2QnLCBsaW5lKHhzKSlcblxuICAgICAgICBjb25zdCBjb2xvclNjYWxlID0gZDMuc2NhbGVTZXF1ZW50aWFsKGQzLmludGVycG9sYXRlUGxhc21hKVxuICAgICAgICBcbiAgICAgICAgLy8gQ2hlY2sgdGhlIGdyYWRpZW50IHJhbmdlXG4gICAgICAgIGNvbnN0IHVwZGF0ZUFtdHMgPSB4cy5tYXAoeCA9PiBNYXRoLmxvZyhNYXRoLmFicyhiYWxsVXBkYXRlci51cGRhdGVNb2RpZmllcih4KSkpKVxuXG4gICAgICAgIGNvbnN0IGNsYW1wZWRTY2FsZSA9IFIuY3VycnkoKG1pbjpudW1iZXIsIG1heDpudW1iZXIsIGFycjpudW1iZXJbXSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgY2xhbXBlciA9IFIuY2xhbXAobWluLCBtYXgpXG4gICAgICAgICAgICBjb25zdCBjbGFtcGVkQXJyID0gUi5tYXAoY2xhbXBlciwgYXJyKVxuICAgICAgICAgICAgcmV0dXJuIGFyci5tYXAoeCA9PiB4IC0gZDMubWVhbihjbGFtcGVkQXJyKSlcbiAgICAgICAgICAgIC8vIHJldHVybiBjbGFtcGVkQXJyLm1hcCh4ID0+IHggLSBkMy5tZWFuKGNsYW1wZWRBcnIpKVxuICAgICAgICB9KVxuXG4gICAgICAgIC8vIGNvbnN0IGNsYW1wZXIgPSBjbGFtcGVkU2NhbGUoLTIsIDIpO1xuICAgICAgICAvLyBjb25zdCBkYXRhID0gZDMuemlwKHhzLCBjbGFtcGVyKHVwZGF0ZUFtdHMpKS5tYXAoZCA9PiB7cmV0dXJuIHt4OiBkWzBdLCB1cGRhdGVBbXQ6IGRbMV19fSlcbiAgICAgICAgY29uc3QgZGF0YSA9IGQzLnppcCh4cywgdXBkYXRlQW10cykubWFwKGQgPT4ge3JldHVybiB7eDogZFswXSwgdXBkYXRlQW10OiBkWzFdfX0pXG4gICAgICAgIC8vIGNvbnN0IGV4dGVudCA9IGQzLmV4dGVudChjbGFtcGVyKHVwZGF0ZUFtdHMpKVxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIkV4dGVudDogXCIsIGV4dGVudCk7XG5cblxuICAgICAgICAvL0B0cy1pZ25vcmVcbiAgICAgICAgY29uc3QgY3NjYWxlID0gZDMuc2NhbGVMaW5lYXIoKS5kb21haW4oWy0yLCAwLCAyXSkucmFuZ2UoW1wiIzY3YTljZlwiLCBcIiNmN2Y3ZjdcIiwgXCIjZWY4YTYyXCJdKVxuXG4gICAgICAgIHNlbHMubGluZUJhY2tncm91bmQuc2VsZWN0QWxsKCcuZ3JhZC1ib3gnKVxuICAgICAgICAgICAgLmRhdGEoZGF0YSlcbiAgICAgICAgICAgIC5qb2luKCdyZWN0JylcbiAgICAgICAgICAgIC5jbGFzc2VkKCdncmFkLWJveCcsIHRydWUpXG4gICAgICAgICAgICAuYXR0cignaGVpZ2h0Jywgb3AuaGVpZ2h0KVxuICAgICAgICAgICAgLmF0dHIoJ3dpZHRoJywgc2VsZi5zY2FsZXMubWF0aDJweC54KHh3aWR0aCkpXG4gICAgICAgICAgICAuYXR0cigneCcsIGQgPT4gc2VsZi5zY2FsZXMubWF0aDJweC54KGQueCkpXG4gICAgICAgICAgICAuYXR0cigneScsIDApXG4gICAgICAgICAgICAuYXR0cignZmlsbCcsIGQgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBjc2NhbGUoZC51cGRhdGVBbXQpXG4gICAgICAgICAgICB9KVxuXG4gICAgICAgIHNlbHMubGluZUJhY2tncm91bmQuYXR0cignbWFzaycsIGB1cmwoIyR7dGhpcy5tYXNrSWR9KWApXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUGxvdCB0aGUgdmFsdWVzIG9mIGFsbCB4IGFjY29yZGluZyB0byB0aGUgZnVuY3Rpb25cbiAgICAgKiBcbiAgICAgKiBAcGFyYW0geCBBIGxpbnNwYWNlIG9mIHggdmFsdWVzIG92ZXIgd2hpY2ggdG8gcGxvdCBhIGN1cnZlXG4gICAgICovXG4gICAgcGxvdEN1cnZlKCkge1xuICAgICAgICBjb25zdCBvcCA9IHRoaXMub3B0aW9uc1xuICAgICAgICBjb25zdCB4cyA9IGxpbnNwYWNlKG9wLmxhbmRzY2FwZS54cmFuZ2VbMF0sIG9wLmxhbmRzY2FwZS54cmFuZ2VbMV0sIDEwMDApXG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzLCBzY2FsZXMgPSB0aGlzLnNjYWxlcywgc2VscyA9IHRoaXMuc2VscztcblxuICAgICAgICBpZiAoc2VsZi5kYXRhKCkgIT0gbnVsbCkge1xuICAgICAgICAgICAgaWYgKHNlbGYuZGF0YSgpLmxlbmd0aCA+IDEpIHNlbGYucGxvdEN1cnZlQnlEZWZhdWx0KHhzKVxuICAgICAgICAgICAgZWxzZSBzZWxmLnBsb3RDdXJ2ZUJ5R3JhZGllbnQoeHMpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB1cGRhdGVTY2FsZXMob3A6IEdyYXBoT3B0aW9ucykge1xuICAgICAgICBjb25zdCBzY2FsZXMgPSB0aGlzLnNjYWxlc1xuXG4gICAgICAgIGNvbnN0IHhiYXNlUmFuZ2UgPSBbLTEsIDFdXG4gICAgICAgIGNvbnN0IHliYXNlUmFuZ2UgPSBbMSwgMF1cblxuICAgICAgICBjb25zdCB4cHhSYW5nZSA9IFswLCBvcC53aWR0aF1cbiAgICAgICAgY29uc3QgeXB4UmFuZ2UgPSBbb3AuaGVpZ2h0LCAwXVxuXG4gICAgICAgIHNjYWxlcy5iYXNlMm1hdGggPSB7XG4gICAgICAgICAgICB4OiBkMy5zY2FsZUxpbmVhcigpLmRvbWFpbih4YmFzZVJhbmdlKS5yYW5nZShvcC5sYW5kc2NhcGUueHJhbmdlKSxcbiAgICAgICAgICAgIHk6IGQzLnNjYWxlTGluZWFyKCkuZG9tYWluKHliYXNlUmFuZ2UpLnJhbmdlKG9wLmxhbmRzY2FwZS55cmFuZ2UpXG4gICAgICAgIH1cbiAgICAgICAgc2NhbGVzLmJhc2UycHggPSB7XG4gICAgICAgICAgICB4OiBkMy5zY2FsZUxpbmVhcigpLmRvbWFpbih4YmFzZVJhbmdlKS5yYW5nZSh4cHhSYW5nZSksXG4gICAgICAgICAgICB5OiBkMy5zY2FsZUxpbmVhcigpLmRvbWFpbih5YmFzZVJhbmdlKS5yYW5nZSh5cHhSYW5nZSlcbiAgICAgICAgfVxuICAgICAgICBzY2FsZXMubWF0aDJweCA9IHtcbiAgICAgICAgICAgIHg6IGQzLnNjYWxlTGluZWFyKCkuZG9tYWluKG9wLmxhbmRzY2FwZS54cmFuZ2UpLnJhbmdlKHhweFJhbmdlKSxcbiAgICAgICAgICAgIHk6IGQzLnNjYWxlTGluZWFyKCkuZG9tYWluKG9wLmxhbmRzY2FwZS55cmFuZ2UpLnJhbmdlKHlweFJhbmdlKVxuICAgICAgICB9XG5cbiAgICAgICAgc2NhbGVzLmJhc2UybG9zcyA9IGQzLnNjYWxlTGluZWFyKCkuZG9tYWluKG9wLmxhbmRzY2FwZS55cmFuZ2UpLnJhbmdlKFswLCAxXSlcblxuICAgICAgICBzY2FsZXMucGF0aHMgPSB0aGlzLm5ld1BhdGhzKG9wLmxhbmRzY2FwZSlcbiAgICB9XG5cbiAgICB1cGRhdGVBeGVzKHNjYWxlczogR3JhcGhTY2FsZXMsIG9wOiBHcmFwaE9wdGlvbnMpIHtcbiAgICAgICAgY29uc3Qgc2VscyA9IHRoaXMuc2Vsc1xuICAgICAgICBzZWxzLnhheGlzLmNhbGwoZDMuYXhpc0JvdHRvbShzY2FsZXMubWF0aDJweC54KS50aWNrVmFsdWVzKFswXSkudGlja0Zvcm1hdCh4ID0+ICcwJykpXG4gICAgfVxuXG4gICAgaW5pdCgpIHtcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgICAgIGNvbnN0IG9wID0gdGhpcy5vcHRpb25zO1xuICAgICAgICBjb25zdCBzY2FsZXMgPSB0aGlzLnNjYWxlcztcbiAgICAgICAgY29uc3Qgc2VscyA9IHRoaXMuc2VscztcblxuICAgICAgICB0aGlzLnVwZGF0ZVNjYWxlcyhvcClcblxuICAgICAgICBzZWxzLnhheGlzID0gdGhpcy5iYXNlLmFwcGVuZChcImdcIilcbiAgICAgICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJheGlzIGF4aXMtLXhcIilcbiAgICAgICAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIFNWRy50cmFuc2xhdGUoMCwgb3AuaGVpZ2h0KSlcblxuICAgICAgICBzZWxzLnhsYWJlbCA9IHRoaXMuYmFzZS5hcHBlbmQoXCJ0ZXh0XCIpXG4gICAgICAgICAgICAudGV4dChcIlxcdTAzQjggLSBcXHUwM0I4KlwiKVxuICAgICAgICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcInRpdGxlc1wiKVxuICAgICAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgU1ZHLnRyYW5zbGF0ZShvcC53aWR0aCAvIDIsIG9wLmhlaWdodCArIG9wLnBhZCkpXG5cbiAgICAgICAgLy8gQWRkIGJhc2UgbWFza1xuICAgICAgICBzZWxzLm1hc2sgPSB0aGlzLmJhc2UuYXBwZW5kKCdtYXNrJykuYXR0cignaWQnLCB0aGlzLm1hc2tJZClcblxuICAgICAgICBzZWxzLm1hc2tCYWNrZ3JvdW5kID0gc2Vscy5tYXNrLmFwcGVuZCgncmVjdCcpXG4gICAgICAgICAgICAuYXR0cignd2lkdGgnLCBvcC53aWR0aClcbiAgICAgICAgICAgIC5hdHRyKCdoZWlnaHQnLCBvcC5oZWlnaHQpXG4gICAgICAgICAgICAuYXR0cignZmlsbCcsICdibGFjaycpXG5cbiAgICAgICAgc2Vscy5tYXNrTGluZSA9IHNlbHMubWFzay5cbiAgICAgICAgICAgIHNlbGVjdEFsbChcIiN0cmFuc3BhcmVudC1saW5lXCIpLlxuICAgICAgICAgICAgZGF0YShbMV0pXG4gICAgICAgICAgICAuam9pbigncGF0aCcpXG4gICAgICAgICAgICAuYXR0cignaWQnLCAndHJhbnNwYXJlbnQtbGluZScpXG4gICAgICAgICAgICAuYXR0cignc3Ryb2tlJywgJ3doaXRlJylcbiAgICAgICAgICAgIC5hdHRyKCdzdHJva2Utd2lkdGgnLCAnNXB4JylcblxuICAgICAgICBzZWxzLmxpbmVCYWNrZ3JvdW5kID0gc2VsZi5iYXNlLnNlbGVjdEFsbCgnI2xpbmUtYmFja2dyb3VuZCcpXG4gICAgICAgICAgICAuZGF0YShbMV0pXG4gICAgICAgICAgICAuam9pbignZycpXG4gICAgICAgICAgICAuYXR0cignaWQnLCAnbGluZS1iYWNrZ3JvdW5kJylcblxuICAgICAgICBzZWxzLmJhY2tkcm9wID0gdGhpcy5sYXllcnMuYmcuYXBwZW5kKFwiZ1wiKVxuICAgICAgICAgICAgLmF0dHIoXCJpZFwiLCBcImJhY2tkcm9wXCIpXG4gICAgICAgICAgICAuY2xhc3NlZCgnZ3Jhc3MnLCB0cnVlKVxuICAgICAgICAgICAgLmFwcGVuZChcInJlY3RcIilcbiAgICAgICAgICAgIC5hdHRyKFwiaGVpZ2h0XCIsIG9wLmhlaWdodClcbiAgICAgICAgICAgIC5hdHRyKFwid2lkdGhcIiwgb3Aud2lkdGgpXG5cbiAgICAgICAgdGhpcy51cGRhdGVBeGVzKHNjYWxlcywgb3ApXG5cbiAgICAgICAgc2NhbGVzLnBhdGhzID0gdGhpcy5uZXdQYXRocyhvcC5sYW5kc2NhcGUpXG5cbiAgICAgICAgdGhpcy5wbG90Q3VydmUoKVxuICAgIH1cblxuICAgIG5ld1BhdGhzKGxhbmRzY2FwZTogTGFuZHNjYXBlKSB7XG4gICAgICAgIGNvbnN0IHNjYWxlcyA9IHRoaXMuc2NhbGVzXG4gICAgICAgIGNvbnN0IGJhc2VMaW5lID0gZDMubGluZTxudW1iZXI+KClcbiAgICAgICAgICAgIC54KChkOiBudW1iZXIsIGk6IG51bWJlcikgPT4gc2NhbGVzLm1hdGgycHgueChkKSlcbiAgICAgICAgICAgIC55KChkOiBudW1iZXIsIGk6IG51bWJlcikgPT4gc2NhbGVzLm1hdGgycHgueShnZXRQbG90RnVuYyhsYW5kc2NhcGUpKGQpKSlcbiAgICAgICAgICAgIC5jdXJ2ZShkMy5jdXJ2ZUxpbmVhcilcblxuICAgICAgICByZXR1cm4gW2Jhc2VMaW5lXVxuICAgIH1cblxuICAgIGluaXRCYWxscygpIHtcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXMsIG9wID0gdGhpcy5vcHRpb25zO1xuXG4gICAgICAgIGNvbnN0IHRvb1NtYWxsID0gKHg6IG51bWJlcikgPT4geCA8IChvcC5sYW5kc2NhcGUueHJhbmdlWzBdKVxuICAgICAgICBjb25zdCB0b29CaWcgPSAoeDogbnVtYmVyKSA9PiB4ID4gKG9wLmxhbmRzY2FwZS54cmFuZ2VbMV0pXG5cbiAgICAgICAgY29uc3QgZml4T3V0T2ZCb3VuZHMgPSAoeDogbnVtYmVyKSA9PiB7XG4gICAgICAgICAgICBsZXQgb3V0OiBudW1iZXJcblxuICAgICAgICAgICAgaWYgKGlzTmFOKHgpKSBvdXQgPSBvcC5sYW5kc2NhcGUueHJhbmdlWzBdXG4gICAgICAgICAgICBlbHNlIGlmICh0b29TbWFsbCh4KSkgb3V0ID0gb3AubGFuZHNjYXBlLnhyYW5nZVswXVxuICAgICAgICAgICAgZWxzZSBpZiAodG9vQmlnKHgpKSBvdXQgPSBvcC5sYW5kc2NhcGUueHJhbmdlWzFdXG4gICAgICAgICAgICBlbHNlIG91dCA9IHhcblxuICAgICAgICAgICAgcmV0dXJuIG91dFxuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gZ2V0TmV4dEJhbGwoYjogR29sZkJhbGwpOiBHb2xmQmFsbCB7XG4gICAgICAgICAgICBjb25zdCBuZXh0WCA9IGIubmV4dFgoKVxuICAgICAgICAgICAgY29uc3QgY3VyckJhbGxTZWwgPSBzZWxmLmJhc2Uuc2VsZWN0KGAuJHtiLmNsYXNzbmFtZX1gKVxuICAgICAgICAgICAgY29uc3QgZm9yY2VYID0gZml4T3V0T2ZCb3VuZHMobmV4dFgpXG4gICAgICAgICAgICBpZiAoIWN1cnJCYWxsU2VsLmNsYXNzZWQoJ2RlYWQtYmFsbCcpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGIuc3RlcF8oZm9yY2VYKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGJcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHN1Yk9iaiA9IHtcbiAgICAgICAgICAgIG5leHQ6IGdicyA9PiB7XG4gICAgICAgICAgICAgICAgZ2JzLmZvckVhY2goYiA9PiBzZWxmLnBsb3RCYWxsKGIpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVycm9yOiBiID0+IGNvbnNvbGUubG9nKFwiRVJST1I6IFwiLCBiKSxcbiAgICAgICAgICAgIGNvbXBsZXRlOiAoKSA9PiBjb25zb2xlLmxvZyhcIkNPTVBMRVRFXCIpLFxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgdGlja2VyID0gKCkgPT4gaW50ZXJ2YWwoMTApLnBpcGUoXG4gICAgICAgICAgICBzY2FuKChhY2M6IFQpID0+IHtcbiAgICAgICAgICAgICAgICAvLyBVbnN1YnNjcmliZXIgdGlja2VyIGlmIGFsbCBiYWxscyBkZWFkXG4gICAgICAgICAgICAgICAgaWYgKFIuYWxsKChiOiBHb2xmQmFsbCkgPT4gZDMuc2VsZWN0KGAuJHtiLmNsYXNzbmFtZX1gKS5jbGFzc2VkKCdkZWFkLWJhbGwnKSwgc2VsZi5kYXRhKCkpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmdUaWNrZXIudW5zdWJzY3JpYmUoKVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHNlbGYuZGF0YSgpLmZvckVhY2goYiA9PiBnZXROZXh0QmFsbChiKSlcbiAgICAgICAgICAgICAgICByZXR1cm4gc2VsZi5kYXRhKClcbiAgICAgICAgICAgIH0sIHNlbGYuZGF0YSgpKSxcbiAgICAgICAgICAgIHRha2Uob3AubWF4SXRlcilcbiAgICAgICAgKS5zdWJzY3JpYmUoc3ViT2JqKVxuXG4gICAgICAgIC8vIFJ1bm5pbmcgdGlja2VyIHN0YXJ0cyBhcyBhbiBlbXB0eSBzdWJzY3JpcHRpb24gb2JqZWN0LCBpcyBsYXRlciByZXBsYWNlZCBieSB0aGUgcnVubmluZyB0aWNrZXJcbiAgICAgICAgbGV0IHJ1bm5pbmdUaWNrZXIgPSB7XG4gICAgICAgICAgICB1bnN1YnNjcmliZTogKCkgPT4gY29uc29sZS5sb2coXCJFbXB0eSBUaWNrZXIhXCIpXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBwbG90QmFsbHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBydW5uaW5nVGlja2VyLnVuc3Vic2NyaWJlKClcbiAgICAgICAgICAgIGNvbnN0IGNsaWNrID0gdG9WZWMoZDMubW91c2UodGhpcykpXG4gICAgICAgICAgICBkMy5zZWxlY3RBbGwoJy5nb2xmLWJhbGwnKS5jbGFzc2VkKCdkZWFkLWJhbGwnLCBmYWxzZSlcbiAgICAgICAgICAgIHNlbGYuZGF0YSgpLmZvckVhY2goKGIsIGkpID0+IGIueCA9IHNlbGYuaW50b01hdGgoY2xpY2spLngpXG4gICAgICAgICAgICBzZWxmLmRhdGEoKS5mb3JFYWNoKGIgPT4gc2VsZi5wbG90QmFsbChiKSlcbiAgICAgICAgICAgIHNlbGYuZXZlbnRIYW5kbGVyLnRyaWdnZXIoXCJsb3NzLWNsaWNrXCIsIHt9KVxuXG4gICAgICAgICAgICBydW5uaW5nVGlja2VyID0gdGlja2VyKClcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHRoaXMuc2Vscy5iYWNrZHJvcC5vbignY2xpY2snLCBwbG90QmFsbHMpXG4gICAgICAgIC8vIHRoaXMuc2Vscy5tYXNrQmFja2dyb3VuZC5vbignY2xpY2snLCBwbG90QmFsbHMpXG4gICAgICAgIC8vIHRoaXMuc2Vscy5tYXNrLm9uKCdjbGljaycsIHBsb3RCYWxscylcbiAgICAgICAgdGhpcy5zZWxzLmxpbmVCYWNrZ3JvdW5kLm9uKCdjbGljaycsIHBsb3RCYWxscylcbiAgICB9XG5cbiAgICBxKCk6IG51bWJlclxuICAgIHEodmFsOiBudW1iZXIpOiB0aGlzXG4gICAgcSh2YWw/KSB7XG4gICAgICAgIGlmICh2YWwgPT0gbnVsbCkgcmV0dXJuIHRoaXMuZGF0YUhlYWQudXBkYXRlci5xXG4gICAgICAgIHRoaXMuZGF0YUhlYWQucSh2YWwpXG4gICAgICAgIHRoaXMucGxvdEN1cnZlKClcbiAgICAgICAgcmV0dXJuIHRoaXNcbiAgICB9XG5cbiAgICBldGEoKTogbnVtYmVyXG4gICAgZXRhKHZhbDogbnVtYmVyKTogdGhpc1xuICAgIGV0YSh2YWw/KSB7XG4gICAgICAgIGlmICh2YWwgPT0gbnVsbCkgcmV0dXJuIHRoaXMuZGF0YUhlYWQudXBkYXRlci5xXG4gICAgICAgIHRoaXMuZGF0YUhlYWQuZXRhKHZhbClcbiAgICAgICAgLy8gdGhpcy5wbG90Q3VydmUoKVxuICAgICAgICByZXR1cm4gdGhpc1xuICAgIH1cblxuICAgIGRhdGEoKTogVFxuICAgIGRhdGEodmFsOiBUKTogdGhpc1xuICAgIGRhdGEodmFsPykge1xuICAgICAgICBpZiAodmFsID09IG51bGwpIHJldHVybiB0aGlzLl9kYXRhXG4gICAgICAgIHRoaXMuX2RhdGEgPSB2YWw7XG4gICAgICAgIHRoaXMuaW5pdEJhbGxzKClcbiAgICAgICAgcmV0dXJuIHRoaXNcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJTlBMQUNFIGNoYW5nZSB0aGUgZ29sZiBiYWxscyBpbnRvIHRoZSBCQVNFIHNjYWxlXG4gICAgICovXG4gICAgZGF0YVRvQmFzZV8oKTogVCB7XG4gICAgICAgIHRoaXMuZGF0YSgpLm1hcChiID0+IHtcbiAgICAgICAgICAgIGIueCA9IHRoaXMuc2NhbGVzLmJhc2UybWF0aC54LmludmVydChiLngpXG4gICAgICAgICAgICByZXR1cm4gYlxuICAgICAgICB9KVxuXG4gICAgICAgIHJldHVybiB0aGlzLmRhdGEoKVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIE1vZGlmeSB0aGUgZ29sZiBiYWxscyBhbmQgY2hhbmdlIHRoZWlyIHggdmFsdWUgZnJvbSBCQVNFIHRvIHRoZSBuZXcgTUFUSFxuICAgICAqL1xuICAgIGRhdGFGcm9tQmFzZSh2YWw6IFQpOiB0aGlzIHtcbiAgICAgICAgdmFsLmZvckVhY2goYiA9PiB7XG4gICAgICAgICAgICBiLnggPSB0aGlzLnNjYWxlcy5iYXNlMm1hdGgueChiLngpXG4gICAgICAgIH0pXG5cbiAgICAgICAgdGhpcy5pbml0QmFsbHMoKVxuICAgICAgICByZXR1cm4gdGhpc1xuICAgIH1cbn1cblxuZnVuY3Rpb24gdG9WZWMoW3gsIHldOiBbbnVtYmVyLCBudW1iZXJdKTogVmVjdG9yMkQge1xuICAgIHJldHVybiB7IHg6IHgsIHk6IHkgfVxufSIsImltcG9ydCAqIGFzIGQzIGZyb20gJ2QzJ1xuaW1wb3J0ICogYXMgUiBmcm9tICdyYW1kYSdcblxuaW1wb3J0IHsgQ2hhcnQyRCwgQ2hhcnRPcHRpb25zLCBDaGFydFNjYWxlcyB9IGZyb20gJy4uL3V0aWwvQ2hhcnQyZFZpc0NvbXBvbmVudCdcbmltcG9ydCB7IFNpbXBsZUV2ZW50SGFuZGxlciB9IGZyb20gJy4uL3V0aWwvU2ltcGxlRXZlbnRIYW5kbGVyJ1xuaW1wb3J0IHsgRDNTZWwgfSBmcm9tICcuLi91dGlsL3hkMydcbmltcG9ydCB7IFNWRyB9IGZyb20gJy4uL3V0aWwvU1ZHcGx1cydcblxuaW1wb3J0IHsgQmFsbEhpc3RvcnkgfSBmcm9tICcuL0dvbGZCYWxsJ1xuXG5jb25zdCBheGlzT2Zmc2V0ID0gMSAvLyBVc2UgdGhpcyB0byBjb3ZlciB0aGUgcGxvdHRlZCBsaW5lc1xuXG5pbnRlcmZhY2UgR3JhcGhTZWxzIHtcbiAgICB4YXhpcz86IEQzU2VsXG4gICAgeWF4aXM/OiBEM1NlbFxuICAgIHhsYWJlbD86IEQzU2VsXG4gICAgbGluZT86IEQzU2VsXG4gICAgYmFja2Ryb3A/OiBEM1NlbFxuICAgIGJhbGw/OiBEM1NlbFxufVxuXG50eXBlIFRyYWNrZXIgPSB7XG4gICAgc2VsOiBEM1NlbCxcbiAgICB2YWxzOiBudW1iZXJbXVxufVxuXG50eXBlIExpbmVUcmFja2VyID0ge1xuICAgIChrZXk6IHN0cmluZyk6IFRyYWNrZXJcbn1cblxudHlwZSBUID0gTGluZVRyYWNrZXJcblxuXG5leHBvcnQgY2xhc3MgR29sZkxvc3NlcyBleHRlbmRzIENoYXJ0MkQ8VD4ge1xuICAgIGNzc25hbWUgPSBcImxpbmUtcGxvdFwiXG5cbiAgICBfZGF0YTogVFxuXG4gICAgb3B0aW9uczogQ2hhcnRPcHRpb25zID0ge1xuICAgICAgICBtYXhXaWR0aDogMzUwLFxuICAgICAgICBtYXhIZWlnaHQ6IDI1MCxcbiAgICAgICAgbWFyZ2luOiB7IHRvcDogMTAsIHJpZ2h0OiAxMCwgYm90dG9tOiAzMCwgbGVmdDogMzAgfSxcbiAgICAgICAgcGFkOiB7IHRvcDogNSwgcmlnaHQ6IDEsIGJvdHRvbTogMTAsIGxlZnQ6IDE1IH0sXG4gICAgICAgIHhyYW5nZTogWzAsIDYwMF0sXG4gICAgICAgIHlyYW5nZTogWzEuMSwgMWUtM10sXG4gICAgfVxuICAgIGRlZmF1bHRYcmFuZ2U6IFtudW1iZXIsIG51bWJlcl1cblxuICAgIHNjYWxlczogQ2hhcnRTY2FsZXMgPSB7fVxuXG4gICAgc2VsczogR3JhcGhTZWxzID0ge31cblxuICAgIHBhdGg6IGQzLkxpbmU8bnVtYmVyPlxuXG4gICAgY29uc3RydWN0b3IoZDNwYXJlbnQ6IEQzU2VsLCBldmVudEhhbmRsZXI/OiBTaW1wbGVFdmVudEhhbmRsZXIsIG9wdGlvbnMgPSB7fSkge1xuICAgICAgICBzdXBlcihkM3BhcmVudCwgZXZlbnRIYW5kbGVyLCBvcHRpb25zKVxuICAgICAgICBzdXBlci5pbml0U1ZHKHRoaXMub3B0aW9ucywgW1wiYmdcIl0pXG4gICAgICAgIHRoaXMuYmFzZS5jbGFzc2VkKHRoaXMuY3NzbmFtZSwgdHJ1ZSlcbiAgICAgICAgdGhpcy5kZWZhdWx0WHJhbmdlID0gdGhpcy5vcHRpb25zLnhyYW5nZVxuICAgICAgICB0aGlzLmRhdGEoPExpbmVUcmFja2VyPnt9KVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFBsb3QgdGhlIHZhbHVlcyBvZiBhbGwgeCBhY2NvcmRpbmcgdG8gdGhlIGZ1bmN0aW9uXG4gICAgICogXG4gICAgICogQHBhcmFtIHggQSBsaW5zcGFjZSBvZiB4IHZhbHVlcyBvdmVyIHdoaWNoIHRvIHBsb3QgYSBjdXJ2ZVxuICAgICAqL1xuICAgIHByb3RlY3RlZCBhZGREYXRhS2V5XyhjbGFzc25hbWU6IHN0cmluZykge1xuICAgICAgICBjb25zdCBzZWxmID0gdGhpc1xuICAgICAgICBpZiAoIVIuaGFzKGNsYXNzbmFtZSwgdGhpcy5kYXRhKCkpKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgQWRkaW5nIGtleTogJHtjbGFzc25hbWV9YCk7XG4gICAgICAgICAgICB0aGlzLmRhdGEoKVtjbGFzc25hbWVdID0ge1xuICAgICAgICAgICAgICAgIHNlbDogc2VsZi5pbml0QmFzZUxpbmUoY2xhc3NuYW1lKSxcbiAgICAgICAgICAgICAgICB2YWxzOiBbXVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gTGl2ZSB1cGRhdGUgdGhlIHhyYW5nZVxuICAgIHVwZGF0ZVNjYWxlcyh4cmFuZ2UpIHtcbiAgICAgICAgY29uc3Qgb3AgPSB0aGlzLm9wdGlvbnNcbiAgICAgICAgdGhpcy5zY2FsZXMueCA9IGQzLnNjYWxlTGluZWFyKCkuZG9tYWluKHhyYW5nZSkucmFuZ2UoWzAsIG9wLndpZHRoXSkuY2xhbXAodHJ1ZSlcbiAgICB9XG5cbiAgICBjbGVhclBhdGhzKCkge1xuICAgICAgICB0aGlzLmRhdGEoUi5tYXAoZCA9PiBSLmFzc29jKCd2YWxzJywgW10sIGQpLCB0aGlzLmRhdGEoKSkpXG4gICAgfVxuXG4gICAgcGxvdFBhdGgoZDogQmFsbEhpc3RvcnksIHNjYWxlPykge1xuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICAgICAgdGhpcy5hZGREYXRhS2V5XyhkLmNsYXNzbmFtZSk7XG5cbiAgICAgICAgY29uc3Qgc2NhbGVyID0gKHNjYWxlID09IG51bGwpID8geCA9PiB4IDogc2NhbGVcblxuICAgICAgICBjb25zdCBjdXJyVmFscyA9IHRoaXMuZGF0YSgpW2QuY2xhc3NuYW1lXTtcbiAgICAgICAgY3VyclZhbHMudmFscy5wdXNoKHNjYWxlcihkLmxvc3MpKVxuXG4gICAgICAgIC8vIHNsaWRpbmcgeC1heGlzXG4gICAgICAgIGNvbnN0IG5ld1hyYW5nZSA9IFtNYXRoLm1heCgwLCBjdXJyVmFscy52YWxzLmxlbmd0aC10aGlzLm9wdGlvbnMueHJhbmdlWzFdKSwgTWF0aC5tYXgoY3VyclZhbHMudmFscy5sZW5ndGgsdGhpcy5vcHRpb25zLnhyYW5nZVsxXSldXG4gICAgICAgIHRoaXMudXBkYXRlU2NhbGVzKG5ld1hyYW5nZSlcbiAgICAgICAgdGhpcy5jcmVhdGVQYXRoKClcblxuICAgICAgICBjdXJyVmFscy5zZWwuZGF0YShbY3VyclZhbHNdKVxuICAgICAgICAgICAgLmpvaW4oXCJwYXRoXCIpXG4gICAgICAgICAgICAuY2xhc3NlZChkLmNsYXNzbmFtZSwgdHJ1ZSlcbiAgICAgICAgICAgIC5hdHRyKFwiZFwiLCBkID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gc2VsZi5wYXRoKGQudmFscylcbiAgICAgICAgICAgIH0pXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBpbml0QmFzZUxpbmUoY2xhc3NuYW1lOiBzdHJpbmcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubGF5ZXJzLmJnLmFwcGVuZChcInBhdGhcIilcbiAgICAgICAgICAgIC5jbGFzc2VkKGNsYXNzbmFtZSwgdHJ1ZSlcbiAgICAgICAgICAgIC5jbGFzc2VkKCdsaW5lJywgdHJ1ZSlcbiAgICB9XG5cbiAgICBpbml0KCkge1xuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICAgICAgY29uc3Qgb3AgPSB0aGlzLm9wdGlvbnM7XG4gICAgICAgIGNvbnN0IHNjYWxlcyA9IHRoaXMuc2NhbGVzO1xuICAgICAgICBjb25zdCBzZWxzID0gdGhpcy5zZWxzO1xuXG4gICAgICAgIHRoaXMuY3JlYXRlU2NhbGVzKClcbiAgICAgICAgdGhpcy5jcmVhdGVQYXRoKClcbiAgICAgICAgdGhpcy5jcmVhdGVBeGVzKClcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgY3JlYXRlU2NhbGVzKCkge1xuICAgICAgICBjb25zdCBzY2FsZXMgPSB0aGlzLnNjYWxlc1xuICAgICAgICBjb25zdCBvcCA9IHRoaXMub3B0aW9uc1xuXG4gICAgICAgIHNjYWxlcy54ID0gZDMuc2NhbGVMaW5lYXIoKS5kb21haW4ob3AueHJhbmdlKS5yYW5nZShbMCwgb3Aud2lkdGhdKS5jbGFtcCh0cnVlKVxuICAgICAgICBzY2FsZXMueSA9IGQzLnNjYWxlTG9nKCkuZG9tYWluKG9wLnlyYW5nZSkucmFuZ2UoWzAsIG9wLmhlaWdodF0pLmNsYW1wKHRydWUpXG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGNyZWF0ZUF4ZXMoKSB7XG4gICAgICAgIGNvbnN0IHNlbHMgPSB0aGlzLnNlbHNcbiAgICAgICAgY29uc3Qgc2NhbGVzID0gdGhpcy5zY2FsZXNcbiAgICAgICAgY29uc3Qgb3AgPSB0aGlzLm9wdGlvbnNcblxuICAgICAgICAvLyBDcmVhdGUgYXhlc1xuICAgICAgICBzZWxzLnlheGlzID0gdGhpcy5iYXNlLmFwcGVuZChcImdcIilcbiAgICAgICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJheGlzIGF4aXMtLXlcIilcbiAgICAgICAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIFNWRy50cmFuc2xhdGUoMCwgLSBheGlzT2Zmc2V0KSlcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgIC5jYWxsKGQzLmF4aXNMZWZ0KHNjYWxlcy55KS50aWNrRm9ybWF0KFwiXCIpLnRpY2tzKDQpKTtcblxuICAgICAgICBzZWxzLnhheGlzID0gdGhpcy5iYXNlLmFwcGVuZChcImdcIilcbiAgICAgICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJheGlzIGF4aXMtLXhcIilcbiAgICAgICAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIFNWRy50cmFuc2xhdGUoMCwgb3AuaGVpZ2h0IC0gYXhpc09mZnNldCkpXG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICAuY2FsbChkMy5heGlzQm90dG9tKHNjYWxlcy54KS50aWNrRm9ybWF0KFwiXCIpLnRpY2tzKDQpKTtcblxuICAgICAgICAvLyBBZGQgeGxhYmVsXG4gICAgICAgIHRoaXMuYmFzZS5hcHBlbmQoXCJ0ZXh0XCIpXG4gICAgICAgICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBTVkcudHJhbnNsYXRlKG9wLndpZHRoIC8gMiwgb3AubWFyZ2luLnRvcCArIG9wLmhlaWdodCArIDEwKSlcbiAgICAgICAgICAgIC5zdHlsZShcInRleHQtYW5jaG9yXCIsIFwibWlkZGxlXCIpXG4gICAgICAgICAgICAudGV4dChcIlRpbWVcIilcblxuICAgICAgICAvLyBBZGQgeWxhYmVsXG4gICAgICAgIHRoaXMuYmFzZS5hcHBlbmQoXCJ0ZXh0XCIpXG4gICAgICAgICAgICAuc3R5bGUoXCJ0ZXh0LWFuY2hvclwiLCBcIm1pZGRsZVwiKVxuICAgICAgICAgICAgLnRleHQoXCJMb3NzXCIpXG4gICAgICAgICAgICAuYXR0cihcInlcIiwgb3AucGFkLmxlZnQgLSBvcC5tYXJnaW4ubGVmdClcbiAgICAgICAgICAgIC5hdHRyKFwieFwiLCBvcC5wYWQudG9wIC0gKG9wLmhlaWdodCAvIDIpKVxuICAgICAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgU1ZHLnJvdGF0ZSgtOTApKVxuICAgICAgICAvLyAuYXR0cihcInRyYW5zZm9ybVwiLCBTVkcudHJhbnNsYXRlKG9wLm1hcmdpbi5sZWZ0LCBvcC5oZWlnaHQvMikpXG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGNyZWF0ZVBhdGgoKSB7XG4gICAgICAgIHRoaXMucGF0aCA9IGQzLmxpbmU8bnVtYmVyPigpXG4gICAgICAgICAgICAueCgoZDogbnVtYmVyLCBpOiBudW1iZXIpID0+IHRoaXMuc2NhbGVzLngoaSkpXG4gICAgICAgICAgICAueSgoZDogbnVtYmVyLCBpOiBudW1iZXIpID0+IHRoaXMuc2NhbGVzLnkoZCkpXG4gICAgICAgICAgICAuY3VydmUoZDMuY3VydmVMaW5lYXIpXG4gICAgfVxuXG4gICAgZGF0YSgpOiBUXG4gICAgZGF0YSh2YWw6IFQpOiB0aGlzXG4gICAgZGF0YSh2YWw/KSB7XG4gICAgICAgIGlmICh2YWwgPT0gbnVsbCkgcmV0dXJuIHRoaXMuX2RhdGFcbiAgICAgICAgdGhpcy5fZGF0YSA9IHZhbDtcbiAgICAgICAgcmV0dXJuIHRoaXNcbiAgICB9XG5cbiAgICByZXNldFhyYW5nZV8oKTogdGhpcyB7XG4gICAgICAgIHRoaXMub3B0aW9ucy54cmFuZ2UgPSB0aGlzLmRlZmF1bHRYcmFuZ2VcbiAgICAgICAgcmV0dXJuIHRoaXNcbiAgICB9XG59IiwiaW1wb3J0ICogYXMgZDMgZnJvbSAnZDMnXG5pbXBvcnQgKiBhcyBSIGZyb20gJ3JhbWRhJ1xuXG5pbXBvcnQgeyBDaGFydDJELCBDaGFydE9wdGlvbnMsIENoYXJ0U2NhbGVzIH0gZnJvbSAnLi4vdXRpbC9DaGFydDJkVmlzQ29tcG9uZW50J1xuaW1wb3J0IHsgU2ltcGxlRXZlbnRIYW5kbGVyIH0gZnJvbSAnLi4vdXRpbC9TaW1wbGVFdmVudEhhbmRsZXInXG5pbXBvcnQgeyBEM1NlbCB9IGZyb20gJy4uL3V0aWwveGQzJ1xuaW1wb3J0IHsgU1ZHIH0gZnJvbSAnLi4vdXRpbC9TVkdwbHVzJ1xuaW1wb3J0IHsgQmFsbEhpc3RvcnkgfSBmcm9tICcuL0dvbGZCYWxsJ1xuXG5jb25zdCBheGlzT2Zmc2V0ID0gMSAvLyBVc2UgdGhpcyB0byBjb3ZlciB0aGUgcGxvdHRlZCBsaW5lc1xuXG5pbnRlcmZhY2UgR3JhcGhTZWxzIHtcbiAgICB4YXhpcz86IEQzU2VsXG4gICAgeWF4aXM/OiBEM1NlbFxuICAgIHhsYWJlbD86IEQzU2VsXG4gICAgbGluZT86IEQzU2VsXG4gICAgYmFja2Ryb3A/OiBEM1NlbFxuICAgIGJhbGw/OiBEM1NlbFxufVxuXG50eXBlIFRyYWNrZXIgPSB7XG4gICAgc2VsOiBEM1NlbCxcbiAgICB2YWxzOiBudW1iZXJbXVxufVxuXG50eXBlIExpbmVUcmFja2VyID0ge1xuICAgIChrZXk6IHN0cmluZyk6IFRyYWNrZXJcbn1cblxudHlwZSBUID0gTGluZVRyYWNrZXJcblxuZXhwb3J0IGNsYXNzIEdvbGZYRGlzdCBleHRlbmRzIENoYXJ0MkQ8VD4ge1xuICAgIGNzc25hbWUgPSBcImxpbmUtcGxvdFwiXG5cbiAgICBfZGF0YTogVFxuXG4gICAgb3B0aW9uczogQ2hhcnRPcHRpb25zID0ge1xuICAgICAgICBtYXhXaWR0aDogMzUwLFxuICAgICAgICBtYXhIZWlnaHQ6IDI1MCxcbiAgICAgICAgbWFyZ2luOiB7IHRvcDogMTAsIHJpZ2h0OiAxMCwgYm90dG9tOiAzMCwgbGVmdDogMzAgfSxcbiAgICAgICAgcGFkOiB7IHRvcDogNSwgcmlnaHQ6IDEsIGJvdHRvbTogMTAsIGxlZnQ6IDE1IH0sXG4gICAgICAgIHhyYW5nZTogWzAsIDYwMF0sXG4gICAgICAgIHlyYW5nZTogWzEsIDBdLFxuICAgIH1cblxuICAgIGRlZmF1bHRYcmFuZ2U6IFtudW1iZXIsIG51bWJlcl1cblxuICAgIHNjYWxlczogQ2hhcnRTY2FsZXMgPSB7fVxuXG4gICAgc2VsczogR3JhcGhTZWxzID0ge31cblxuICAgIHBhdGg6IGQzLkxpbmU8bnVtYmVyPlxuXG4gICAgY29uc3RydWN0b3IoZDNwYXJlbnQ6IEQzU2VsLCBldmVudEhhbmRsZXI/OiBTaW1wbGVFdmVudEhhbmRsZXIsIG9wdGlvbnMgPSB7fSkge1xuICAgICAgICBzdXBlcihkM3BhcmVudCwgZXZlbnRIYW5kbGVyLCBvcHRpb25zKVxuICAgICAgICBzdXBlci5pbml0U1ZHKHRoaXMub3B0aW9ucywgW1wiYmdcIl0pXG4gICAgICAgIHRoaXMuYmFzZS5jbGFzc2VkKHRoaXMuY3NzbmFtZSwgdHJ1ZSlcbiAgICAgICAgdGhpcy5kZWZhdWx0WHJhbmdlID0gdGhpcy5vcHRpb25zLnhyYW5nZVxuICAgICAgICB0aGlzLmRhdGEoPExpbmVUcmFja2VyPnt9KVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFBsb3QgdGhlIHZhbHVlcyBvZiBhbGwgeCBhY2NvcmRpbmcgdG8gdGhlIGZ1bmN0aW9uXG4gICAgICogXG4gICAgICogQHBhcmFtIHggQSBsaW5zcGFjZSBvZiB4IHZhbHVlcyBvdmVyIHdoaWNoIHRvIHBsb3QgYSBjdXJ2ZVxuICAgICAqL1xuICAgIHByb3RlY3RlZCBhZGREYXRhS2V5XyhjbGFzc25hbWU6IHN0cmluZykge1xuICAgICAgICBjb25zdCBzZWxmID0gdGhpc1xuICAgICAgICBpZiAoIVIuaGFzKGNsYXNzbmFtZSwgdGhpcy5kYXRhKCkpKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgQWRkaW5nIGtleTogJHtjbGFzc25hbWV9YCk7XG4gICAgICAgICAgICB0aGlzLmRhdGEoKVtjbGFzc25hbWVdID0ge1xuICAgICAgICAgICAgICAgIHNlbDogc2VsZi5pbml0QmFzZUxpbmUoY2xhc3NuYW1lKSxcbiAgICAgICAgICAgICAgICB2YWxzOiBbXVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2xlYXJQYXRocygpIHtcbiAgICAgICAgdGhpcy5kYXRhKFIubWFwKGQgPT4gUi5hc3NvYygndmFscycsIFtdLCBkKSwgdGhpcy5kYXRhKCkpKVxuICAgIH1cblxuICAgIHBsb3RQYXRoKGQ6IEJhbGxIaXN0b3J5LCBzY2FsZT8pIHtcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgICAgIHRoaXMuYWRkRGF0YUtleV8oZC5jbGFzc25hbWUpO1xuXG4gICAgICAgIGNvbnN0IHNjYWxlciA9IChzY2FsZSA9PSBudWxsKSA/IHggPT4geCA6IHNjYWxlXG5cbiAgICAgICAgY29uc3QgY3VyclZhbHMgPSB0aGlzLmRhdGEoKVtkLmNsYXNzbmFtZV07XG4gICAgICAgIGN1cnJWYWxzLnZhbHMucHVzaChzY2FsZXIoTWF0aC5hYnMoZC54KSkpO1xuXG4gICAgICAgIC8vIHNsaWRpbmcgeC1heGlzXG4gICAgICAgIGNvbnN0IG5ld1hyYW5nZSA9IFtNYXRoLm1heCgwLCBjdXJyVmFscy52YWxzLmxlbmd0aC10aGlzLm9wdGlvbnMueHJhbmdlWzFdKSwgTWF0aC5tYXgoY3VyclZhbHMudmFscy5sZW5ndGgsdGhpcy5vcHRpb25zLnhyYW5nZVsxXSldXG4gICAgICAgIHRoaXMudXBkYXRlU2NhbGVzKG5ld1hyYW5nZSlcbiAgICAgICAgdGhpcy5jcmVhdGVQYXRoKCkgLy8gRGVwZW5kcyBvbiB4IHNjYWxlXG5cblxuICAgICAgICBjdXJyVmFscy5zZWwuZGF0YShbY3VyclZhbHNdKVxuICAgICAgICAgICAgLmpvaW4oXCJwYXRoXCIpXG4gICAgICAgICAgICAuY2xhc3NlZChkLmNsYXNzbmFtZSwgdHJ1ZSlcbiAgICAgICAgICAgIC5hdHRyKFwiZFwiLCBkID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gc2VsZi5wYXRoKGQudmFscylcbiAgICAgICAgICAgIH0pXG4gICAgfVxuXG4gICAgLy8gTGl2ZSB1cGRhdGUgdGhlIHhyYW5nZVxuICAgIHVwZGF0ZVNjYWxlcyh4cmFuZ2UpIHtcbiAgICAgICAgY29uc3Qgb3AgPSB0aGlzLm9wdGlvbnNcbiAgICAgICAgdGhpcy5zY2FsZXMueCA9IGQzLnNjYWxlTGluZWFyKCkuZG9tYWluKHhyYW5nZSkucmFuZ2UoWzAsIG9wLndpZHRoXSkuY2xhbXAodHJ1ZSlcbiAgICB9XG5cbiAgICBwcml2YXRlIGluaXRCYXNlTGluZShjbGFzc25hbWU6IHN0cmluZykge1xuICAgICAgICByZXR1cm4gdGhpcy5sYXllcnMuYmcuYXBwZW5kKFwicGF0aFwiKVxuICAgICAgICAgICAgLmNsYXNzZWQoY2xhc3NuYW1lLCB0cnVlKVxuICAgICAgICAgICAgLmNsYXNzZWQoJ2xpbmUnLCB0cnVlKVxuICAgIH1cblxuICAgIHByb3RlY3RlZCBjcmVhdGVTY2FsZXMoKSB7XG4gICAgICAgIGNvbnN0IG9wID0gdGhpcy5vcHRpb25zXG4gICAgICAgIHRoaXMuc2NhbGVzLnggPSBkMy5zY2FsZUxpbmVhcigpLmRvbWFpbihvcC54cmFuZ2UpLnJhbmdlKFswLCBvcC53aWR0aF0pLmNsYW1wKHRydWUpXG4gICAgICAgIHRoaXMuc2NhbGVzLnkgPSBkMy5zY2FsZUxpbmVhcigpLmRvbWFpbihvcC55cmFuZ2UpLnJhbmdlKFswLCBvcC5oZWlnaHRdKS5jbGFtcCh0cnVlKVxuICAgIH1cblxuICAgIGluaXQoKSB7XG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuICAgICAgICBjb25zdCBvcCA9IHRoaXMub3B0aW9ucztcbiAgICAgICAgY29uc3Qgc2NhbGVzID0gdGhpcy5zY2FsZXM7XG4gICAgICAgIGNvbnN0IHNlbHMgPSB0aGlzLnNlbHM7XG5cbiAgICAgICAgdGhpcy5jcmVhdGVTY2FsZXMoKVxuICAgICAgICB0aGlzLmNyZWF0ZVBhdGgoKVxuICAgICAgICB0aGlzLmNyZWF0ZUF4ZXMoKVxuICAgIH1cblxuXG4gICAgcHJvdGVjdGVkIGNyZWF0ZUF4ZXMoKSB7XG4gICAgICAgIGNvbnN0IHNlbHMgPSB0aGlzLnNlbHNcbiAgICAgICAgY29uc3Qgc2NhbGVzID0gdGhpcy5zY2FsZXNcbiAgICAgICAgY29uc3Qgb3AgPSB0aGlzLm9wdGlvbnNcblxuICAgICAgICAvLyBDcmVhdGUgYXhlc1xuICAgICAgICBzZWxzLnhheGlzID0gdGhpcy5iYXNlLmFwcGVuZChcImdcIilcbiAgICAgICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJheGlzIGF4aXMtLXhcIilcbiAgICAgICAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIFNWRy50cmFuc2xhdGUoMCwgb3AuaGVpZ2h0IC0gYXhpc09mZnNldCkpXG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICAuY2FsbChkMy5heGlzQm90dG9tKHNjYWxlcy54KS50aWNrcyg0KS50aWNrRm9ybWF0KFwiXCIpKTtcblxuICAgICAgICBzZWxzLnlheGlzID0gdGhpcy5iYXNlLmFwcGVuZChcImdcIilcbiAgICAgICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJheGlzIGF4aXMtLXlcIilcbiAgICAgICAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIFNWRy50cmFuc2xhdGUoMCwgLSBheGlzT2Zmc2V0KSlcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgIC5jYWxsKGQzLmF4aXNMZWZ0KHNjYWxlcy55KS50aWNrcyg0KS50aWNrRm9ybWF0KFwiXCIpKTtcblxuICAgICAgICB0aGlzLmJhc2UuYXBwZW5kKFwidGV4dFwiKVxuICAgICAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgU1ZHLnRyYW5zbGF0ZShvcC53aWR0aCAvIDIsIG9wLm1hcmdpbi50b3AgKyBvcC5oZWlnaHQgKyAxMCkpXG4gICAgICAgICAgICAuc3R5bGUoXCJ0ZXh0LWFuY2hvclwiLCBcIm1pZGRsZVwiKVxuICAgICAgICAgICAgLnRleHQoXCJUaW1lXCIpXG5cbiAgICAgICAgdGhpcy5iYXNlLmFwcGVuZChcInRleHRcIilcbiAgICAgICAgICAgIC5zdHlsZShcInRleHQtYW5jaG9yXCIsIFwibWlkZGxlXCIpXG4gICAgICAgICAgICAudGV4dChcIlxcdTAzQjggLSBcXHUwM0I4KlwiKVxuICAgICAgICAgICAgLmF0dHIoXCJ5XCIsIG9wLnBhZC5sZWZ0IC0gb3AubWFyZ2luLmxlZnQpXG4gICAgICAgICAgICAuYXR0cihcInhcIiwgb3AucGFkLnRvcCAtIChvcC5oZWlnaHQgLyAyKSlcbiAgICAgICAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIFNWRy5yb3RhdGUoLTkwKSlcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgY3JlYXRlUGF0aCgpIHtcbiAgICAgICAgdGhpcy5wYXRoID0gZDMubGluZTxudW1iZXI+KClcbiAgICAgICAgICAgIC54KChkOiBudW1iZXIsIGk6IG51bWJlcikgPT4gdGhpcy5zY2FsZXMueChpKSlcbiAgICAgICAgICAgIC55KChkOiBudW1iZXIsIGk6IG51bWJlcikgPT4gdGhpcy5zY2FsZXMueShkKSlcbiAgICAgICAgICAgIC5jdXJ2ZShkMy5jdXJ2ZUxpbmVhcilcbiAgICB9XG5cbiAgICBkYXRhKCk6IFRcbiAgICBkYXRhKHZhbDogVCk6IHRoaXNcbiAgICBkYXRhKHZhbD8pIHtcbiAgICAgICAgaWYgKHZhbCA9PSBudWxsKSByZXR1cm4gdGhpcy5fZGF0YVxuICAgICAgICB0aGlzLl9kYXRhID0gdmFsO1xuICAgICAgICByZXR1cm4gdGhpc1xuICAgIH1cblxuICAgIHJlc2V0WHJhbmdlXygpOiB0aGlzIHtcbiAgICAgICAgdGhpcy5vcHRpb25zLnhyYW5nZSA9IHRoaXMuZGVmYXVsdFhyYW5nZVxuICAgICAgICByZXR1cm4gdGhpc1xuICAgIH1cbn0iLCJpbXBvcnQgKiBhcyBkMyBmcm9tICdkMydcbmltcG9ydCB7IGJhc2VMb3NzIH0gZnJvbSAnLi4vR29sZkxhbmRzY2FwZXMnXG5cbmV4cG9ydCBjbGFzcyBNYW51YWxVcGRhdGVyIHtcbiAgICBmOiAoeDogbnVtYmVyKSA9PiBudW1iZXJcbiAgICBkZjogKHg6IG51bWJlcikgPT4gbnVtYmVyXG5cbiAgICAvLyBxID0gMS9xIGluIHRoZSBJbnRlcmZhY2UgKGR1ZSB0byBuaWNlIHByb3BlcnRpZXMgb2YgdGhpcyBkZWZpbml0aW9uKSBpcyBhIGRpZmZlcmVudCB2YWx1ZSB0aGFuIHRoaXNcbiAgICBxOiBudW1iZXIgICAvLyAwIC0+IDEsIHdoZXJlIDAgaXMgU0dEIGFuZCAxIGlzIE5HRC4gMC41IGlzIHNxcnQgTkdELiBbc3RlcCA9IC0gZXRhICogSCBeICgtMS9xKSAqIGddIChIID0gMCB3aGVuIHE9MClcbiAgICBldGE6IG51bWJlciAvLyBha2EgJ2xlYXJuaW5nIHJhdGUnXG5cbiAgICBjb25zdHJ1Y3RvcihmLCBkZiwgcSA9IDAsIGV0YSA9IDAuMSkge1xuICAgICAgICB0aGlzLmYgPSBmO1xuICAgICAgICB0aGlzLmRmID0gZGY7XG4gICAgICAgIHRoaXMucSA9IHE7XG4gICAgICAgIHRoaXMuZXRhID0gZXRhO1xuICAgIH1cblxuICAgIC8vIENhbGN1bGF0ZSBlcnJvciBzcXVhcmVkIG9mIHRoZSBiYXNlIGZ1bmN0aW9uXG4gICAgbG9zcyh4OiBudW1iZXIpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gYmFzZUxvc3ModGhpcy5mKHgpKVxuICAgIH1cblxuICAgIC8vIEdyYWRpZW50IGF0IHhcbiAgICBncmFkaWVudCh4OiBudW1iZXIpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5mKHgpICogdGhpcy5kZih4KVxuICAgIH1cblxuICAgIC8vIFRoZSBwb3NpdGl2ZSBzZW1pLWRlZmluaXRlIGhlc3NpYW4gYXQgeFxuICAgIHBzZGhlc3MoeDogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIE1hdGgucG93KHRoaXMuZGYoeCksIDIpXG4gICAgfVxuXG4gICAgdXBkYXRlTW9kaWZpZXIoeDogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIE1hdGgucG93KHRoaXMuZGYoeCksIDEgLSAoMiAqIHRoaXMucSkpXG4gICAgfVxuXG4gICAgdXBkYXRlQW10KHg6IG51bWJlcik6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLmYoeCkgKiB0aGlzLnVwZGF0ZU1vZGlmaWVyKHgpXG4gICAgfVxuXG4gICAgLy8gVGhlIGFtb3VudCB0byB1cGRhdGUgYXQgeCBnaXZlbiB0aGUgbGVhcm5pbmcgcmF0ZSBldGFcbiAgICBzdGVwKHg6IG51bWJlcik6IG51bWJlciB7XG4gICAgICAgIC8vIENvdWxkIHVzZSBwc2RoZXNzIGluIHRoZSBlcXVhdGlvbiBiZWxvdywgYnV0IGR1ZSB0byBudW1lcmljYWwgaXNzdWVzIHRoaXMgZm9ybXVsYXRpb24gY29tcHV0ZXMgbW9yZSByZWxpYWJseVxuICAgICAgICByZXR1cm4gLSB0aGlzLmV0YSAqIHRoaXMudXBkYXRlQW10KHgpXG4gICAgfVxuXG4gICAgLy8gR2V0IHRoZSBuZXh0IHggdmFsdWUgYWZ0ZXIgdGFraW5nIGEgc3RlcFxuICAgIG5leHQoeDogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHggKyB0aGlzLnN0ZXAoeClcbiAgICB9XG59XG5cblxuZXhwb3J0IGNsYXNzIE1hbnVhbFVwZGF0ZXIyRCB7XG4gICAgZjogKHg6IG51bWJlcikgPT4gbnVtYmVyXG4gICAgZGY6ICh4OiBudW1iZXIpID0+IG51bWJlclxuXG4gICAgLy8gcSA9IDEvcSBpbiB0aGUgSW50ZXJmYWNlIChkdWUgdG8gbmljZSBwcm9wZXJ0aWVzIG9mIHRoaXMgZGVmaW5pdGlvbikgaXMgYSBkaWZmZXJlbnQgdmFsdWUgdGhhbiB0aGlzXG4gICAgcTogbnVtYmVyICAgLy8gMCAtPiAxLCB3aGVyZSAwIGlzIFNHRCBhbmQgMSBpcyBOR0QuIDAuNSBpcyBzcXJ0IE5HRC4gW3N0ZXAgPSAtIGV0YSAqIEggXiAoLTEvcSkgKiBnXSAoSCA9IDAgd2hlbiBxPTApXG4gICAgZXRhOiBudW1iZXIgLy8gYWthICdsZWFybmluZyByYXRlJ1xuXG4gICAgY29uc3RydWN0b3IoZiwgZGYsIHEgPSAwLCBldGEgPSAwLjEpIHtcbiAgICAgICAgdGhpcy5mID0gZjtcbiAgICAgICAgdGhpcy5kZiA9IGRmO1xuICAgICAgICB0aGlzLnEgPSBxO1xuICAgICAgICB0aGlzLmV0YSA9IGV0YTtcbiAgICB9XG5cbiAgICAvLyBDYWxjdWxhdGUgZXJyb3Igc3F1YXJlZCBvZiB0aGUgYmFzZSBmdW5jdGlvblxuICAgIGxvc3MoeDogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIGJhc2VMb3NzKHRoaXMuZih4KSlcbiAgICB9XG5cbiAgICAvLyBHcmFkaWVudCBhdCB4XG4gICAgZ3JhZGllbnQoeDogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZih4KSAqIHRoaXMuZGYoeClcbiAgICB9XG5cbiAgICAvLyBUaGUgcG9zaXRpdmUgc2VtaS1kZWZpbml0ZSBoZXNzaWFuIGF0IHhcbiAgICBwc2RoZXNzKHg6IG51bWJlcik6IG51bWJlciB7XG4gICAgICAgIHJldHVybiBNYXRoLnBvdyh0aGlzLmRmKHgpLCAyKVxuICAgIH1cblxuICAgIHVwZGF0ZU1vZGlmaWVyKHg6IG51bWJlcik6IG51bWJlciB7XG4gICAgICAgIHJldHVybiBNYXRoLnBvdyh0aGlzLmRmKHgpLCAxIC0gKDIgKiB0aGlzLnEpKVxuICAgIH1cblxuICAgIHVwZGF0ZUFtdCh4OiBudW1iZXIpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5mKHgpICogdGhpcy51cGRhdGVNb2RpZmllcih4KVxuICAgIH1cblxuICAgIC8vIFRoZSBhbW91bnQgdG8gdXBkYXRlIGF0IHggZ2l2ZW4gdGhlIGxlYXJuaW5nIHJhdGUgZXRhXG4gICAgc3RlcCh4OiBudW1iZXIpOiBudW1iZXIge1xuICAgICAgICAvLyBDb3VsZCB1c2UgcHNkaGVzcyBpbiB0aGUgZXF1YXRpb24gYmVsb3csIGJ1dCBkdWUgdG8gbnVtZXJpY2FsIGlzc3VlcyB0aGlzIGZvcm11bGF0aW9uIGNvbXB1dGVzIG1vcmUgcmVsaWFibHlcbiAgICAgICAgcmV0dXJuIC0gdGhpcy5ldGEgKiB0aGlzLnVwZGF0ZUFtdCh4KVxuICAgIH1cblxuICAgIC8vIEdldCB0aGUgbmV4dCB4IHZhbHVlIGFmdGVyIHRha2luZyBhIHN0ZXBcbiAgICBuZXh0KHg6IG51bWJlcik6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB4ICsgdGhpcy5zdGVwKHgpXG4gICAgfVxufSIsImltcG9ydCAqIGFzIGQzIGZyb20gJ2QzJ1xuaW1wb3J0IHsgRDNTZWwsIGxpbnNwYWNlIH0gZnJvbSAnLi4vdXRpbC94ZDMnXG5pbXBvcnQgeyBWZWN0b3IyRCB9IGZyb20gJy4uL3R5cGVzJ1xuaW1wb3J0IHsgU1ZHT3B0aW9ucywgU1ZHVmlzQ29tcG9uZW50LCBNYXJnaW5JbmZvIH0gZnJvbSAnLi4vdXRpbC9TVkdWaXNDb21wb25lbnQnXG5pbXBvcnQgeyBTaW1wbGVFdmVudEhhbmRsZXIgfSBmcm9tICcuLi91dGlsL1NpbXBsZUV2ZW50SGFuZGxlcic7XG5pbXBvcnQgeyBTVkcgfSBmcm9tIFwiLi4vdXRpbC9TVkdwbHVzXCJcbmltcG9ydCB7IE1hbnVhbFVwZGF0ZXIgfSBmcm9tIFwiLi9NYW51YWxVcGRhdGVyXCJcblxuaW50ZXJmYWNlIEdyYXBoT3B0aW9ucyB7XG4gICAgbWFyZ2luOiBNYXJnaW5JbmZvXG4gICAgbWF4V2lkdGg6IG51bWJlclxuICAgIG1heEhlaWdodDogbnVtYmVyXG4gICAgd2lkdGg/OiBudW1iZXJcbiAgICBoZWlnaHQ/OiBudW1iZXJcbiAgICB4UmFuZ2U6IFtudW1iZXIsIG51bWJlcl1cbiAgICB5UmFuZ2U6IFtudW1iZXIsIG51bWJlcl1cbn1cblxuaW50ZXJmYWNlIFNjYWxlWFkge1xuICAgIHg6IGQzLlNjYWxlTGluZWFyPG51bWJlciwgbnVtYmVyPlxuICAgIHk6IGQzLlNjYWxlTGluZWFyPG51bWJlciwgbnVtYmVyPlxufVxuXG5pbnRlcmZhY2UgR3JhcGhTY2FsZXMge1xuICAgIHRvUHg6IFNjYWxlWFksXG4gICAgdG9NYXRoOiBTY2FsZVhZLFxufVxuXG5pbnRlcmZhY2UgR3JhcGhTZWxzIHtcbiAgICBwYXRoczogRDNTZWxbXVxuICAgIGN1cnNvckRvdHM6IEQzU2VsW11cbiAgICBjdXJzb3JMaW5lOiBEM1NlbFxufVxuXG50eXBlIERBVEEgPSBudW1iZXJbXSAvLyBMaXN0IG9mIGFscGhhcyBpbiB5PWFscGhhICogeF4yXG5cbmV4cG9ydCBjbGFzcyBRdWFkcmF0aWNQbG90cyBleHRlbmRzIFNWR1Zpc0NvbXBvbmVudDxEQVRBPiB7XG4gICAgY3NzbmFtZSA9IFwicXVhZHJhdGljLXBsb3RzXCJcbiAgICBtYXNrSWQ6IHN0cmluZ1xuXG4gICAgX2RhdGE6IERBVEFcblxuICAgIG9wdGlvbnM6IEdyYXBoT3B0aW9ucyA9IHtcbiAgICAgICAgLy8gb3B0aW9ucyAgPSB7IFxuICAgICAgICBtYXJnaW46IHsgdG9wOiAwLCByaWdodDogMCwgYm90dG9tOiA0MCwgbGVmdDogMCB9LFxuICAgICAgICBtYXhXaWR0aDogNDAwLFxuICAgICAgICBtYXhIZWlnaHQ6IDI1MCxcbiAgICAgICAgeFJhbmdlOiBbLTMsIDNdLFxuICAgICAgICB5UmFuZ2U6IFstMC4wNSwgOC44Ml0sXG4gICAgfVxuXG4gICAgc2VsczogUGFydGlhbDxHcmFwaFNlbHM+ID0ge31cbiAgICB0aW1lcjogZDMuVGltZXJcblxuICAgIGNvbnN0cnVjdG9yKGQzcGFyZW50OiBEM1NlbCwgZXZlbnRIYW5kbGVyPzogU2ltcGxlRXZlbnRIYW5kbGVyLCBvcHRpb25zID0ge30sIElEID0gMCkge1xuICAgICAgICBzdXBlcihkM3BhcmVudCwgZXZlbnRIYW5kbGVyLCBvcHRpb25zLCBJRClcbiAgICAgICAgdGhpcy5tYXNrSWQgPSBgbGluZS1tYXNrLSR7dGhpcy5JRH1gXG4gICAgICAgIHN1cGVyLmluaXRTVkcob3B0aW9ucykgLy8gQ2FsbHMgaW5pdCBpbiB0aGlzIGNsYXNzXG4gICAgICAgIHRoaXMuYmFzZS5jbGFzc2VkKHRoaXMuY3NzbmFtZSwgdHJ1ZSlcbiAgICB9XG5cbiAgICBnZXQgdG9QeFNjYWxlcygpOiBTY2FsZVhZIHtcbiAgICAgICAgY29uc3Qgb3AgPSB0aGlzLm9wdGlvbnNcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHg6IGQzLnNjYWxlTGluZWFyKClcbiAgICAgICAgICAgICAgICAuZG9tYWluKG9wLnhSYW5nZSlcbiAgICAgICAgICAgICAgICAucmFuZ2UoWzAsIG9wLndpZHRoXSksXG4gICAgICAgICAgICB5OiBkMy5zY2FsZUxpbmVhcigpXG4gICAgICAgICAgICAgICAgLmRvbWFpbihvcC55UmFuZ2UpXG4gICAgICAgICAgICAgICAgLnJhbmdlKFtvcC5oZWlnaHQsIDBdKSxcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGludG9QeCh2OiBWZWN0b3IyRCkge1xuICAgICAgICByZXR1cm4geyB4OiB0aGlzLnRvUHhTY2FsZXMueCh2LngpLCB5OiB0aGlzLnRvUHhTY2FsZXMueSh2LnkpIH1cbiAgICB9XG5cbiAgICAvLyBUYWtlIGEgdmVjdG9yIGluIHRoZSBjb29yZGluYXRlIHN5c3RlbSBhbmQgcmV0dXJuIGl0IHRvIHRoZSBtYXRoIGNvb3JkaW5hdGVzXG4gICAgaW50b01hdGgodjogVmVjdG9yMkQpIHtcbiAgICAgICAgcmV0dXJuIHsgeDogdGhpcy50b1B4U2NhbGVzLnguaW52ZXJ0KHYueCksIHk6IHRoaXMudG9QeFNjYWxlcy55LmludmVydCh2LnkpIH1cbiAgICB9XG5cbiAgICAvLyBUdXJuIGEgbnVtYmVyIGludG8gYSB2ZWN0b3JcbiAgICBudW0ydmVjKHg6IG51bWJlcik6IFZlY3RvcjJEIHtcbiAgICAgICAgY29uc3Qgb3AgPSB0aGlzLm9wdGlvbnNcbiAgICAgICAgLy8gcmV0dXJuIHsgeDogeCwgeTogb3AubGFuZHNjYXBlLmxvc3MoeCkgfVxuICAgICAgICByZXR1cm4geyB4OiB4LCB5OiB4ICoqIDIgfVxuICAgIH1cblxuICAgIGxpbmVNYWtlcihmOiAoeDogbnVtYmVyKSA9PiBudW1iZXIpIHtcbiAgICAgICAgcmV0dXJuIGQzLmxpbmU8bnVtYmVyPigpXG4gICAgICAgICAgICAueCgoZDogbnVtYmVyLCBpOiBudW1iZXIpID0+IHRoaXMudG9QeFNjYWxlcy54KGQpKVxuICAgICAgICAgICAgLnkoKGQ6IG51bWJlciwgaTogbnVtYmVyKSA9PiB0aGlzLnRvUHhTY2FsZXMueShmKGQpKSlcbiAgICB9XG5cbiAgICBpbml0KCkge1xuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICAgICAgY29uc3Qgb3AgPSB0aGlzLm9wdGlvbnM7XG4gICAgICAgIGNvbnN0IHNlbHMgPSB0aGlzLnNlbHM7XG5cbiAgICAgICAgdGhpcy5iYXNlXG4gICAgICAgICAgICAuYXR0cignd2lkdGgnLCBvcC5tYXhXaWR0aClcbiAgICAgICAgICAgIC5hdHRyKCdoZWlnaHQnLCBvcC5tYXhIZWlnaHQpXG5cbiAgICAgICAgT2JqZWN0LmtleXModGhpcy5sYXllcnMpLmZvckVhY2goayA9PiB7XG4gICAgICAgICAgICBjb25zdCBnID0gdGhpcy5sYXllcnNba11cbiAgICAgICAgICAgICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBgJHtTVkcudHJhbnNsYXRlKG9wLm1hcmdpbi5sZWZ0LCBvcC5tYXJnaW4udG9wKX1gKVxuICAgICAgICB9KVxuXG4gICAgICAgIHRoaXMubGF5ZXJzLmJnLmFwcGVuZCgncmVjdCcpXG4gICAgICAgICAgICAuY2xhc3NlZChcImJnLXJlY3RcIiwgdHJ1ZSlcbiAgICAgICAgICAgIC5hdHRyKCd3aWR0aCcsIG9wLndpZHRoKVxuICAgICAgICAgICAgLmF0dHIoJ2hlaWdodCcsIG9wLmhlaWdodClcblxuICAgICAgICAvLyBjb25zdCBmID0gKHg6IG51bWJlcikgPT4gMC41ICogKHggKiogMilcblxuICAgICAgICBjb25zdCBmYWMgPSAxLjQ7XG4gICAgICAgIGNvbnN0IGFhID0gWzEgLyBmYWMsIDEsIGZhY107XG4gICAgICAgIC8vIGNvbnN0IGFhID0gW2ZhY107XG4gICAgICAgIGNvbnN0IHVwZGF0ZXJzID0gYWEubWFwKGEgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBNYW51YWxVcGRhdGVyKFxuICAgICAgICAgICAgICAgICh4OiBudW1iZXIpID0+IGEgKiB4LFxuICAgICAgICAgICAgICAgICh4OiBudW1iZXIpID0+IGEsXG4gICAgICAgICAgICAgICAgMSxcbiAgICAgICAgICAgICAgICAwLjAxLFxuICAgICAgICAgICAgKVxuICAgICAgICB9KVxuXG4gICAgICAgIHNlbHMucGF0aHMgPSB1cGRhdGVycy5tYXAodSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5sYXllcnMubWFpbi5hcHBlbmQoXCJwYXRoXCIpXG4gICAgICAgICAgICAgICAgLmRhdHVtKGxpbnNwYWNlKG9wLnhSYW5nZVswXSwgb3AueFJhbmdlWzFdLCAxMDApKVxuICAgICAgICAgICAgICAgIC5jbGFzc2VkKFwibGluZS1wYXRoXCIsIHRydWUpXG4gICAgICAgICAgICAgICAgLmF0dHIoJ2QnLCBkID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubGluZU1ha2VyKHggPT4gdS5sb3NzKHgpKShkKVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG5cbiAgICAgICAgLy8gQ3Vyc29yIExpbmUgTG9naWNcbiAgICAgICAgc2Vscy5jdXJzb3JMaW5lID0gdGhpcy5iYXNlLmFwcGVuZCgncGF0aCcpXG4gICAgICAgICAgICAuY2xhc3NlZCgnY3Vyc29yLWxpbmUnLCB0cnVlKVxuICAgICAgICAgICAgLmNsYXNzZWQoJ2hpZGRlbicsIHRydWUpXG5cbiAgICAgICAgc2Vscy5jdXJzb3JEb3RzID0gdXBkYXRlcnMubWFwKHUgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYmFzZS5hcHBlbmQoJ2NpcmNsZScpXG4gICAgICAgICAgICAgICAgLmNsYXNzZWQoXCJjdXJzb3ItZG90XCIsIHRydWUpXG4gICAgICAgICAgICAgICAgLmF0dHIoXCJyXCIsIFwiM3B4XCIpXG4gICAgICAgIH0pXG5cbiAgICAgICAgdGhpcy5iYXNlLm9uKCdtb3VzZW1vdmUnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBjb25zdCBtb3VzZSA9IGQzLm1vdXNlKHRoaXMpXG4gICAgICAgICAgICBzZWxzLmN1cnNvckxpbmUuYXR0cignZCcsIGQzLmxpbmUoKShbW21vdXNlWzBdLCAwXSwgW21vdXNlWzBdLCBvcC5oZWlnaHRdXSkpXG5cbiAgICAgICAgICAgIC8vIHNlbHMuY3Vyc29yRG90cy5mb3JFYWNoKChjLCBpKSA9PiB7XG4gICAgICAgICAgICAvLyAgICAgYy5hdHRyKCdjeCcsIG1vdXNlWzBdKVxuICAgICAgICAgICAgLy8gICAgICAgICAuYXR0cignY3knLCAoKSA9PiBzZWxmLnRvUHhTY2FsZXMueSh1cGRhdGVyc1tpXS5sb3NzKHNlbGYudG9QeFNjYWxlcy54LmludmVydChtb3VzZVswXSkpKSlcbiAgICAgICAgICAgIC8vIH0pXG4gICAgICAgIH0pXG5cbiAgICAgICAgdGhpcy5iYXNlLm9uKCdtb3VzZW91dCcsICgpID0+IHtcbiAgICAgICAgICAgIHNlbHMuY3Vyc29yTGluZS5jbGFzc2VkKFwiaGlkZGVuXCIsIHRydWUpXG4gICAgICAgICAgICBpZiAoc2VsZi50aW1lciA9PSBudWxsKSBzZWxzLmN1cnNvckRvdHMuZm9yRWFjaChjID0+IGMuY2xhc3NlZChcImhpZGRlblwiLCB0cnVlKSlcbiAgICAgICAgfSlcblxuICAgICAgICB0aGlzLmJhc2Uub24oJ21vdXNlb3ZlcicsICgpID0+IHtcbiAgICAgICAgICAgIHNlbHMuY3Vyc29yTGluZS5jbGFzc2VkKFwiaGlkZGVuXCIsIGZhbHNlKVxuICAgICAgICAgICAgaWYgKHNlbGYudGltZXIgPT0gbnVsbCkgc2Vscy5jdXJzb3JEb3RzLmZvckVhY2goYyA9PiBjLmNsYXNzZWQoXCJoaWRkZW5cIiwgZmFsc2UpKVxuICAgICAgICB9KVxuXG4gICAgICAgIHRoaXMuYmFzZS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBjb25zdCBtb3VzZSA9IGQzLm1vdXNlKHRoaXMpXG4gICAgICAgICAgICBjb25zdCB2YWwgPSBzZWxmLnRvUHhTY2FsZXMueC5pbnZlcnQobW91c2VbMF0pXG4gICAgICAgICAgICBzZWxzLmN1cnNvckRvdHMuZm9yRWFjaCgoYywgaSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHUgPSB1cGRhdGVyc1tpXVxuICAgICAgICAgICAgICAgIGNvbnN0IHhDbGljayA9IHNlbGYudG9QeFNjYWxlcy54LmludmVydChtb3VzZVswXSlcbiAgICAgICAgICAgICAgICBjLmF0dHIoJ2N4JywgbW91c2VbMF0pXG4gICAgICAgICAgICAgICAgYy5hdHRyKCdjeScsIHNlbGYudG9QeFNjYWxlcy55KHUubG9zcyh4Q2xpY2spKSlcbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIGlmIChzZWxmLnRpbWVyID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBzZWxmLnRpbWVyID0gZDMuaW50ZXJ2YWwoKHRpbWUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgc2Vscy5jdXJzb3JEb3RzLmZvckVhY2goKGMsIGkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHUgPSB1cGRhdGVyc1tpXVxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgeE5vdyA9IHNlbGYudG9QeFNjYWxlcy54LmludmVydCgrYy5hdHRyKCdjeCcpKVxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgeE5leHQgPSB1Lm5leHQoeE5vdylcbiAgICAgICAgICAgICAgICAgICAgICAgIGMuYXR0cignY3gnLCBzZWxmLnRvUHhTY2FsZXMueCh4TmV4dCkpXG4gICAgICAgICAgICAgICAgICAgICAgICBjLmF0dHIoJ2N5Jywgc2VsZi50b1B4U2NhbGVzLnkodS5sb3NzKHhOZXh0KSkpXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfSwgMTApXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBzZWxmLnRpbWVyLnN0b3AoKVxuICAgICAgICAgICAgICAgIHNlbGYudGltZXIgPSBudWxsXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgX3JlbmRlcihkYXRhOiBEQVRBKSB7XG4gICAgICAgIC8vIHRoaXMucGxvdEZ1bmNzXG4gICAgfVxuXG4gICAgZGF0YSgpOiBEQVRBXG4gICAgZGF0YSh2YWw6IERBVEEpOiB0aGlzXG4gICAgZGF0YSh2YWw/KSB7XG4gICAgICAgIGlmICh2YWwgPT0gbnVsbCkgcmV0dXJuIHRoaXMuX2RhdGFcbiAgICAgICAgcmV0dXJuIHRoaXNcbiAgICB9XG59IiwiaW1wb3J0IHsgSFRNTFZpc0NvbXBvbmVudCB9IGZyb20gJy4uL3V0aWwvSFRNTFZpc0NvbXBvbmVudCdcbmltcG9ydCAqIGFzIGQzIGZyb20gJ2QzJ1xuaW1wb3J0IHsgRDNTZWwgfSBmcm9tICcuLi91dGlsL3hkMydcbmltcG9ydCB7IEFycmF5IH0gZnJvbSAnLi4vdHlwZXMnXG5pbXBvcnQgKiBhcyBSIGZyb20gJ3JhbWRhJ1xuaW1wb3J0IHsgU2ltcGxlRXZlbnRIYW5kbGVyIH0gZnJvbSAnLi4vdXRpbC9TaW1wbGVFdmVudEhhbmRsZXInO1xuaW1wb3J0IHsgU1ZHIH0gZnJvbSAnLi4vdXRpbC9TVkdwbHVzJ1xuaW1wb3J0ICogYXMgbmogZnJvbSBcIm51bWpzXCJcblxuaW50ZXJmYWNlIFNpbXBsZU5ldFNlbHMge1xuICBzdmc6IEQzU2VsXG4gIG5vZGVWYWxzOiB7XG4gICAgbjA6IEQzU2VsXG4gICAgbjE6IEQzU2VsXG4gICAgbjI6IEQzU2VsXG4gIH1cbiAgbGluZXM6IHtcbiAgICB3MDogRDNTZWxcbiAgICB3MTogRDNTZWxcbiAgfVxuICBsaW5lVmFsczoge1xuICAgIHcwOiBEM1NlbFxuICAgIHcxOiBEM1NlbFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBTaW1wbGVOZXQgZXh0ZW5kcyBIVE1MVmlzQ29tcG9uZW50PG51bGw+IHtcbiAgY3NzbmFtZSA9IFwic2ltcGxlLW5ldC1zdmdcIlxuICBvcHRpb25zID0ge31cbiAgc2VsczpQYXJ0aWFsPFNpbXBsZU5ldFNlbHM+ID0ge31cblxuXG4gIGNvbnN0cnVjdG9yKGQzcGFyZW50OiBEM1NlbCwgZXZlbnRIYW5kbGVyPzogU2ltcGxlRXZlbnRIYW5kbGVyLCBvcHRpb25zID0ge30sIElEID0gMCkge1xuICAgIHN1cGVyKGQzcGFyZW50LCBldmVudEhhbmRsZXIsIG9wdGlvbnMsIElEKVxuICAgIHRoaXMuYmFzZS5jbGFzc2VkKHRoaXMuY3NzbmFtZSwgdHJ1ZSlcbiAgICBzdXBlci5pbml0SFRNTCgpXG4gICAgdGhpcy5pbml0KClcbiAgfVxuXG4gIGdldCBzdHJva2VXaWR0aFNjYWxlKCk6IGQzLlNjYWxlTGluZWFyPG51bWJlciwgbnVtYmVyPiB7XG4gICAgICByZXR1cm4gZDMuc2NhbGVMaW5lYXIoKS5yYW5nZShbNC4yLCA2MF0pLmRvbWFpbihbMCwgMS43XSlcbiAgfVxuXG4gIGdldCBvcGFjaXR5U2NhbGUoKTogZDMuU2NhbGVMaW5lYXI8bnVtYmVyLCBudW1iZXI+IHtcbiAgICAgIHJldHVybiBkMy5zY2FsZUxpbmVhcigpLnJhbmdlKFswLjIsIDFdKS5kb21haW4oWzAsIDEuN10pXG4gIH1cblxuICBpbml0KCkge1xuICAgIGNvbnN0IHNlbHMgPSB0aGlzLnNlbHNcbiAgICBjb25zdCBvcHMgPSB0aGlzLm9wdGlvbnNcblxuICAgIGNvbnN0IGh0bWxDb250ZW50ID0gYFxuICAgIDxzdmcgdmlld0JveD1cIjAgMCAyNjYwIDU1NVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBmaWxsLXJ1bGU9XCJldmVub2RkXCIgY2xpcC1ydWxlPVwiZXZlbm9kZFwiIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiIHN0cm9rZS1taXRlcmxpbWl0PVwiNVwiPlxuICAgIDxnIGlkPVwibmV0LXZhbHVlXCI+XG4gICAgICA8cGF0aCBpZD1cIm5ldC12YWwtMS1yZWN0XCIgZD1cIk0xOTk4LjggNjcuNkE2NS44IDY1LjggMCAwMDE5MzMuMSAyaC0xNjMuNWE2NS44IDY1LjggMCAwMC02NS44IDY1Ljd2MjcuOGE2NS44IDY1LjggMCAwMDY1LjggNjUuOEgxOTMzYTY1LjggNjUuOCAwIDAwNjUuNy02NS44VjY3LjZ6XCIgZmlsbD1cIiNmZmZcIiBzdHJva2U9XCIjMDAwXCIgc3Ryb2tlLXdpZHRoPVwiMy44XCIvPlxuICAgICAgPHRleHQgaWQ9XCJuZXQtdmFsLTFcIiB4PVwiMTgyNi4zXCIgeT1cIjExMi40XCIgZm9udC1mYW1pbHk9XCInSUJNUGxleFRoYWktU2VtaUJvbGQnLCdJQk0gUGxleCBUaGFpJyxzYW5zLXNlcmlmXCIgZm9udC13ZWlnaHQ9XCI2MDBcIiBmb250LXNpemU9XCI4My4zXCIgdGV4dC1hbmNob3I9XCJtaWRkbGVcIj5cbiAgICAgICAgMFxuICAgICAgPC90ZXh0PlxuICAgICAgPHBhdGggaWQ9XCJuZXQtdmFsLTAtcmVjdFwiIGQ9XCJNOTQ1LjggNjcuNkE2NS44IDY1LjggMCAwMDg4MCAySDcxNi41YTY1LjggNjUuOCAwIDAwLTY1LjcgNjUuN3YyNy44YTY1LjggNjUuOCAwIDAwNjUuNyA2NS44aDE2My42YTY1LjggNjUuOCAwIDAwNjUuNy02NS44VjY3LjZ6XCIgZmlsbD1cIiNmZmZcIiBzdHJva2U9XCIjMDAwXCIgc3Ryb2tlLXdpZHRoPVwiMy44XCIvPlxuICAgICAgPHRleHQgaWQ9XCJuZXQtdmFsLTBcIiB4PVwiNzczLjNcIiB5PVwiMTEyLjRcIiBmb250LWZhbWlseT1cIidJQk1QbGV4VGhhaS1TZW1pQm9sZCcsJ0lCTSBQbGV4IFRoYWknLHNhbnMtc2VyaWZcIiBmb250LXdlaWdodD1cIjYwMFwiIGZvbnQtc2l6ZT1cIjgzLjNcIiB0ZXh0LWFuY2hvcj1cIm1pZGRsZVwiPlxuICAgICAgICAwXG4gICAgICA8L3RleHQ+XG4gICAgPC9nPlxuICAgIDxnIGlkPVwibmV0LW5vZGVcIiBmaWxsPVwiI2ViZWJlYlwiPlxuICAgICAgPGNpcmNsZSBjeD1cIjI3Ni4yXCIgY3k9XCIyNzguMVwiIHI9XCIyNzYuMlwiLz5cbiAgICAgIDxjaXJjbGUgY3g9XCIxMzMxLjFcIiBjeT1cIjI3OC4xXCIgcj1cIjI3Ni4yXCIvPlxuICAgICAgPGNpcmNsZSBjeD1cIjIzODMuMVwiIGN5PVwiMjc4LjFcIiByPVwiMjc2LjJcIi8+XG4gICAgPC9nPlxuICAgIDxnIGlkPVwibmV0LWxpbmVcIj5cbiAgICAgIDxwYXRoIGlkPVwibmV0LWxpbmUtMFwiIGQ9XCJNNTUyLjUgMjgwLjJoNTAyLjRhMiAyIDAgMDAwLTQuMkg1NTIuNWEyIDIgMCAwMDAgNC4yelwiIGZpbGw9XCJub25lXCIgc3Ryb2tlPVwiIzAwMFwiIHN0cm9rZS13aWR0aD1cIjQuMlwiIHN0cm9rZS1taXRlcmxpbWl0PVwiMS41XCIvPlxuICAgICAgPHBhdGggaWQ9XCJuZXQtbGluZS0xXCIgZD1cIk0xNjA3LjMgMjc4LjFoNDk5LjVcIiBmaWxsPVwibm9uZVwiIHN0cm9rZT1cIiMwMDBcIiBzdHJva2Utd2lkdGg9XCI0LjJcIiBzdHJva2UtbWl0ZXJsaW1pdD1cIjEuNVwiLz5cbiAgICA8L2c+XG4gICAgPHBhdGggaWQ9XCJNSlgtNC1URVgtSS03N1wiIGQ9XCJNODA2LjIgNDA1LjNjMC0yLjMgMS00LjQgMy02LjMgMi4xLTIgNC40LTMgNi44LTMgMiAwIDMuOC45IDUuNCAyLjggMS42IDIgMi41IDUgMi42IDkuMiAwIDMuMi0xIDkuNC0zLjEgMTguNi0xLjYgNi0zIDExLTQuNCAxNC45YTk2IDk2IDAgMDEtNS42IDEzIDMwIDMwIDAgMDEtOC45IDExIDE5LjQgMTkuNCAwIDAxLTExLjYgMy44Yy00LjggMC05LS45LTEyLjYtMi42LTMuNy0xLjctNi4zLTQtOC03bC0uNC43Yy00LjUgNi05LjggOC45LTE2LjIgOC45YTMzLjIgMzMuMiAwIDAxLTE1LjctNCAxNS40IDE1LjQgMCAwMS02LTYuNCAyMS4yIDIxLjIgMCAwMS0yLjItMTAuMSA3MyA3MyAwIDAxNS41LTIzLjZjMy43LTEwIDUuNS0xNi4yIDUuNi0xOVY0MDRjMC0uMy0uMi0uNy0uNi0xLjEtLjQtLjUtMS0uNy0xLjgtLjdoLS42Yy0yLjUgMC00LjggMS02LjggMy4xLTIgMi0zLjcgNC4zLTQuOSA2LjZhNDIuNyA0Mi43IDAgMDAtMi43IDYuOGMtLjYgMi4yLTEgMy4zLTEuMyAzLjYtLjIuMi0xIC4zLTIuNi4zSDcxN2MtLjctLjctMS0xLjEtMS0xLjVhNzEuNiA3MS42IDAgMDE1LTEyLjhjMS42LTMgNC01LjkgNy4xLTguMyAzLjEtMi41IDYuNi0zLjcgMTAuNS0zLjcgNC42IDAgOC4yIDEuMyAxMC43IDQgMi40IDIuNyAzLjcgNS44IDMuNyA5LjQgMCAxLjktMS44IDcuNy01LjMgMTcuNGE3MS4zIDcxLjMgMCAwMC01LjQgMjIuNWMwIDUgMS4yIDguNCAzLjQgMTAuNWExMyAxMyAwIDAwOC42IDMuMmM0LjYgMCA4LjctMy4zIDEyLjMtOS45bC44LTEuNHYtNS4ybC4xLTEuMy4yLTEuMS4xLTEuNWE4Ni40IDg2LjQgMCAwMDEtNC44Yy4xLS45LjQtMi4yIDEtMy45LjUtMS43IDEtMy40IDEuMy01LjIuMy0xLjcuOS00IDEuOC02LjkgMy0xMi4zIDQuOS0xOC45IDUuMy0xOS45IDEuNC0yLjkgMy43LTQuMyA3LTQuMyAyIDAgMy40LjUgNC4xIDEuNi44IDEgMS4yIDIgMS4zIDMgMCAxLjUtMS41IDguMy00LjcgMjAuN2E1ODguMiA1ODguMiAwIDAwLTUuMSAyMS40IDM1IDM1IDAgMDAtLjQgNS42djEuMWMwIDEuNy4yIDMuMi41IDQuNy40IDEuNSAxLjQgMy4xIDMuMSA0LjcgMS43IDEuNiA0LjEgMi41IDcuMyAyLjYgNy42IDAgMTMuNy02LjYgMTguMi0xOS43YTEwMCAxMDAgMCAwMDUuMi0yMC4yYzAtMy42LS43LTYuNC0yLjEtOC40LTEuNC0yLTIuOC0zLjgtNC4yLTUuMmE2LjMgNi4zIDAgMDEtMi4xLTQuNXpcIiBmaWxsLXJ1bGU9XCJub256ZXJvXCIvPlxuICAgIDxwYXRoIGlkPVwiTUpYLTQtVEVYLU4tMzBcIiBkPVwiTTgzOS4xIDQ0NS45YzQuMy02LjIgMTAuMS05LjMgMTcuNS05LjNhMjEuNCAyMS40IDAgMDExOS45IDEzLjVjMi44IDYuMyA0LjIgMTUgNC4yIDI2IDAgMTEuOS0xLjYgMjAuOS01IDI3LjFhMTkuNSAxOS41IDAgMDEtNi4yIDcuNyAyMC43IDIwLjcgMCAwMS0xMi44IDQuM2MtMiAwLTQtLjItNi0uN2EyMCAyMCAwIDAxLTYuOS0zLjZjLTIuNy0yLTQuNy00LjYtNi4zLTcuNy0zLjItNi4yLTQuOS0xNS4yLTQuOS0yNyAwLTEzLjMgMi4yLTIzLjQgNi41LTMwLjN6bTI1LjctMS40YTEwLjkgMTAuOSAwIDAwLTE2LjMgMGMtMiAyLTMuMiA0LjctMy44IDguMmExNjIgMTYyIDAgMDAtLjkgMjJjMCAxMiAuMyAyMCAxIDIzLjcuNSAzLjggMiA2LjggNCA5IDIuMiAyLjMgNC44IDMuNSA4IDMuNSAzIDAgNS42LTEuMiA3LjctMy41IDIuMi0yLjIgMy42LTUuNCA0LjEtOS41LjUtNC4yLjgtMTEuOSAxLTIzLjIgMC0xMS0uNC0xOC4zLTEtMjEuOGExNiAxNiAwIDAwLTMuOC04LjR6XCIgZmlsbC1ydWxlPVwibm9uemVyb1wiLz5cbiAgICA8cGF0aCBpZD1cIk1KWC02LVRFWC1JLTc3XCIgZD1cIk0xODYxLjEgNDA1LjNjMC0yLjMgMS00LjQgMy02LjMgMi4xLTIgNC40LTMgNi45LTMgMS45IDAgMy43LjkgNS4zIDIuOCAxLjYgMiAyLjUgNSAyLjYgOS4yIDAgMy4yLTEgOS40LTMgMTguNi0xLjcgNi0zLjIgMTEtNC41IDE0LjlhOTYgOTYgMCAwMS01LjYgMTMgMzAgMzAgMCAwMS04LjkgMTEgMTkuNCAxOS40IDAgMDEtMTEuNiAzLjhjLTQuOCAwLTktLjktMTIuNi0yLjYtMy43LTEuNy02LjMtNC04LTdsLS40LjdjLTQuNCA2LTkuOCA4LjktMTYuMiA4LjlhMzMuMiAzMy4yIDAgMDEtMTUuNi00IDE1LjQgMTUuNCAwIDAxLTYtNi40IDIxLjIgMjEuMiAwIDAxLTIuMy0xMC4xIDczIDczIDAgMDE1LjUtMjMuNmMzLjctMTAgNS42LTE2LjIgNS43LTE5VjQwNGMwLS4zLS4zLS43LS43LTEuMS0uNC0uNS0xLS43LTEuOC0uN2gtLjZjLTIuNSAwLTQuNyAxLTYuOCAzLjEtMiAyLTMuNyA0LjMtNC44IDYuNmE0Mi42IDQyLjYgMCAwMC0yLjggNi44Yy0uNiAyLjItMSAzLjMtMS4zIDMuNi0uMi4yLTEgLjMtMi42LjNoLTIuMmMtLjctLjctMS0xLjEtMS0xLjVhNzEuNyA3MS43IDAgMDE1LTEyLjhjMS42LTMgNC01LjkgNy4xLTguMyAzLjEtMi41IDYuNi0zLjcgMTAuNS0zLjcgNC43IDAgOC4yIDEuMyAxMC43IDRzMy43IDUuOCAzLjcgOS40YzAgMS45LTEuOCA3LjctNS4zIDE3LjRhNzEuMyA3MS4zIDAgMDAtNS40IDIyLjVjMCA1IDEuMiA4LjQgMy40IDEwLjVhMTMgMTMgMCAwMDguNiAzLjJjNC42IDAgOC43LTMuMyAxMi4zLTkuOWwuOC0xLjR2LTUuMmwuMS0xLjMuMi0xLjFjMC0uNSAwLTEgLjItMS41YTkzIDkzIDAgMDAxLTQuOGMwLS45LjQtMi4yLjktMy45LjUtMS43IDEtMy40IDEuMy01LjIuMy0xLjcgMS00IDEuOC02LjkgMy0xMi4zIDQuOS0xOC45IDUuMy0xOS45IDEuNC0yLjkgMy43LTQuMyA3LTQuMyAyIDAgMy40LjUgNC4xIDEuNi44IDEgMS4yIDIgMS4zIDMgMCAxLjUtMS41IDguMy00LjYgMjAuN2E1ODcgNTg3IDAgMDAtNS4yIDIxLjRjLS4yIDEuMS0uMyAzLS4zIDUuNnYxLjFjMCAxLjcuMSAzLjIuNCA0LjcuNCAxLjUgMS40IDMuMSAzLjEgNC43IDEuNyAxLjYgNC4yIDIuNSA3LjMgMi42IDcuNiAwIDEzLjctNi42IDE4LjItMTkuN2E5OS43IDk5LjcgMCAwMDUuMi0yMC4yYzAtMy42LS43LTYuNC0yLTguNC0xLjUtMi0yLjktMy44LTQuMy01LjJhNi4zIDYuMyAwIDAxLTItNC41elwiIGZpbGwtcnVsZT1cIm5vbnplcm9cIi8+XG4gICAgPHBhdGggaWQ9XCJNSlgtNi1URVgtTi0zMVwiIGQ9XCJNMTkwNy40IDQ0Ni43bC0xLjUuNi00LjUgMS4xYy0yIC40LTQuMi42LTYuNy44aC0yLjF2LTUuM2gyLjFhMzcuMiAzNy4yIDAgMDAxNi40LTQuNGMxLjItLjggMi4yLTEuNyAzLjItMi41LjEtLjIuNi0uNCAxLjMtLjQuNyAwIDEuNC4zIDIgLjd2NjguNGMuNi42IDEgMSAxLjUgMWE3Ni40IDc2LjQgMCAwMDkuOC43aDN2NS4zaC0xLjNjLTEuNi0uMi03LjctLjMtMTguMi0uMy0xMC4zIDAtMTYuMyAwLTE3LjkuM2gtMS40di01LjNoNy4zYTI3LjEgMjcuMSAwIDAwNC43LS40bDEtLjIuNi0uNi43LS41di01OXpcIiBmaWxsLXJ1bGU9XCJub256ZXJvXCIvPlxuICAgIDx0ZXh0IHg9XCIyMTAuM1wiIHk9XCI0NzMuNVwiIGZvbnQtZmFtaWx5PVwiJ0lCTVBsZXhUaGFpLU1lZGl1bScsJ0lCTSBQbGV4IFRoYWknLHNhbnMtc2VyaWZcIiBmb250LXdlaWdodD1cIjUwMFwiIGZvbnQtc2l6ZT1cIjUwXCI+XG4gICAgICBJTlBVVFxuICAgIDwvdGV4dD5cbiAgICA8dGV4dCB4PVwiMjI5Mi4zXCIgeT1cIjQ3My41XCIgZm9udC1mYW1pbHk9XCInSUJNUGxleFRoYWktTWVkaXVtJywnSUJNIFBsZXggVGhhaScsc2Fucy1zZXJpZlwiIGZvbnQtd2VpZ2h0PVwiNTAwXCIgZm9udC1zaXplPVwiNTBcIj5cbiAgICAgIE9VVFBVVFxuICAgIDwvdGV4dD5cbiAgICA8ZyBpZD1cIm5ldC1jZWxsXCIgZmlsbD1cIiNmZmZcIiBzdHJva2U9XCIjMDAwXCIgc3Ryb2tlLXdpZHRoPVwiMy44XCI+XG4gICAgICA8cGF0aCBkPVwiTTI1MzYuNCAxODIuOGE2MyA2MyAwIDAwLTYzLTYzaC0xNjlhNjMgNjMgMCAwMC02MyA2M3YxNjUuOGE2MyA2MyAwIDAwNjMgNjNoMTY5YTYzIDYzIDAgMDA2My02M1YxODIuOHpNMTQ3OC42IDE4Mi44YTYzIDYzIDAgMDAtNjMtNjNoLTE2OWE2MyA2MyAwIDAwLTYzIDYzdjE2NS44YTYzIDYzIDAgMDA2MyA2M2gxNjlhNjMgNjMgMCAwMDYzLTYzVjE4Mi44ek00MjMuNyAxNzAuM2E2MyA2MyAwIDAwLTYzLTYzaC0xNjlhNjMgNjMgMCAwMC02MyA2M1YzMzZhNjMgNjMgMCAwMDYzIDYzaDE2OWE2MyA2MyAwIDAwNjMtNjNWMTcwLjN6XCIvPlxuICAgIDwvZz5cbiAgICA8dGV4dCBpZD1cIm5ldC1ub2RlLTJcIiB4PVwiMjM1MS40XCIgeT1cIjMxMS45XCIgZm9udC1mYW1pbHk9XCInSUJNUGxleFRoYWktU2VtaUJvbGQnLCdJQk0gUGxleCBUaGFpJyxzYW5zLXNlcmlmXCIgZm9udC13ZWlnaHQ9XCI1MDBcIiBmb250LXNpemU9XCIxMDBcIiB0ZXh0LWFuY2hvcj1cIm1pZGRsZVwiPlxuICAgICAgMlxuICAgIDwvdGV4dD5cbiAgICA8dGV4dCBpZD1cIm5ldC1ub2RlLTFcIiB4PVwiMTI5Mi4xXCIgeT1cIjMxMS45XCIgZm9udC1mYW1pbHk9XCInSUJNUGxleFRoYWktU2VtaUJvbGQnLCdJQk0gUGxleCBUaGFpJyxzYW5zLXNlcmlmXCIgZm9udC13ZWlnaHQ9XCI1MDBcIiBmb250LXNpemU9XCIxMDBcIiB0ZXh0LWFuY2hvcj1cIm1pZGRsZVwiPlxuICAgICAgMVxuICAgIDwvdGV4dD5cbiAgICA8dGV4dCBpZD1cIm5ldC1ub2RlLTBcIiB4PVwiMjM4LjdcIiB5PVwiMjk5LjRcIiBmb250LWZhbWlseT1cIidJQk1QbGV4VGhhaS1TZW1pQm9sZCcsJ0lCTSBQbGV4IFRoYWknLHNhbnMtc2VyaWZcIiBmb250LXdlaWdodD1cIjUwMFwiIGZvbnQtc2l6ZT1cIjEwMFwiIHRleHQtYW5jaG9yPVwibWlkZGxlXCI+XG4gICAgICAwXG4gICAgPC90ZXh0PlxuICAgIDwvc3ZnPlxuICAgIGBcblxuICAgIHRoaXMuYmFzZS5odG1sKGh0bWxDb250ZW50KVxuICAgIHNlbHMuc3ZnID0gdGhpcy5iYXNlLnNlbGVjdCgnc3ZnJylcbiAgICAgIC5hdHRyKCd3aWR0aCcsIFwiMTAwJVwiKVxuICAgICAgLmF0dHIoJ2hlaWdodCcsIFwiMTAwJVwiKVxuXG4gICAgc2Vscy5saW5lcyA9IHtcbiAgICAgIHcwOiB0aGlzLmJhc2Uuc2VsZWN0KFwiI25ldC1saW5lLTBcIiksXG4gICAgICB3MTogdGhpcy5iYXNlLnNlbGVjdChcIiNuZXQtbGluZS0xXCIpXG4gICAgfVxuXG4gICAgc2Vscy5saW5lVmFscyA9IHtcbiAgICAgIHcwOiB0aGlzLmJhc2Uuc2VsZWN0KFwiI25ldC12YWwtMFwiKSxcbiAgICAgIHcxOiB0aGlzLmJhc2Uuc2VsZWN0KFwiI25ldC12YWwtMVwiKSxcbiAgICB9XG5cbiAgICBzZWxzLm5vZGVWYWxzID0ge1xuICAgICAgbjA6IHRoaXMuYmFzZS5zZWxlY3QoXCIjbmV0LW5vZGUtMFwiKSxcbiAgICAgIG4xOiB0aGlzLmJhc2Uuc2VsZWN0KFwiI25ldC1ub2RlLTFcIiksXG4gICAgICBuMjogdGhpcy5iYXNlLnNlbGVjdChcIiNuZXQtbm9kZS0yXCIpLFxuICAgIH1cblxuICAgIHNlbHMubm9kZVZhbHMubjAudGV4dChcIjFcIilcbiAgICBzZWxzLm5vZGVWYWxzLm4xLnRleHQoXCJfXCIpXG4gICAgc2Vscy5ub2RlVmFscy5uMi50ZXh0KFwiX1wiKVxuXG4gICAgc2Vscy5saW5lVmFscy53MC50ZXh0KFwiX1wiKVxuICAgIHNlbHMubGluZVZhbHMudzEudGV4dChcIl9cIilcblxuICB9XG5cbiAgc2V0U3RhdGUodjogQXJyYXkpIHtcbiAgICBjb25zdCBzZWxzID0gdGhpcy5zZWxzXG5cbiAgICBjb25zdCB3MCA9IHYuZ2V0KDApXG4gICAgY29uc3QgdzEgPSB2LmdldCgxKVxuXG4gICAgc2Vscy5saW5lVmFscy53MC50ZXh0KHcwLnRvRml4ZWQoMikpXG4gICAgc2Vscy5saW5lVmFscy53MS50ZXh0KHcxLnRvRml4ZWQoMikpXG5cbiAgICBzZWxzLm5vZGVWYWxzLm4xLnRleHQodzAudG9GaXhlZCgyKSlcbiAgICBzZWxzLm5vZGVWYWxzLm4yLnRleHQoKHcwICogdzEpLnRvRml4ZWQoMikpXG5cbiAgICBzZWxzLmxpbmVzLncwXG4gICAgICAuYXR0cihcInN0cm9rZS13aWR0aFwiLCB0aGlzLnN0cm9rZVdpZHRoU2NhbGUodzApKVxuICAgICAgLmF0dHIoXCJvcGFjaXR5XCIsIHRoaXMub3BhY2l0eVNjYWxlKHcwKSlcblxuICAgIHNlbHMubGluZXMudzFcbiAgICAgIC5hdHRyKFwic3Ryb2tlLXdpZHRoXCIsIHRoaXMuc3Ryb2tlV2lkdGhTY2FsZSh3MSkpXG4gICAgICAuYXR0cihcIm9wYWNpdHlcIiwgdGhpcy5vcGFjaXR5U2NhbGUodzEpKVxuICAgIFxuICB9XG5cbiAgLy8gVE8ga2VlcCB0aGUgQVBJIGNvbnNpc3RlbnQuXG4gIGRhdGEoKTogbnVsbFxuICBkYXRhKHZhbDogbnVsbCk6IHRoaXNcbiAgZGF0YSh2YWw/KSB7XG4gICAgcmV0dXJuIG51bGxcbiAgfVxufSJdLCJzb3VyY2VSb290IjoiIn0=
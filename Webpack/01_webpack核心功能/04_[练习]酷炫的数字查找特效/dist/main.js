/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _page_evnet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page/evnet */ \"./src/page/evnet.js\");\n\r\n\n\n//# sourceURL=webpack://webpack/./src/index.js?");

/***/ }),

/***/ "./src/page/appendNumber.js":
/*!**********************************!*\
  !*** ./src/page/appendNumber.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ \"./src/utils/index.js\");\n/* harmony import */ var _utils_generateColor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/generateColor */ \"./src/utils/generateColor.js\");\n\r\n\r\n\r\nconst divContainer = document.querySelector('#divContainer')\r\nconst divCenter = document.querySelector('#divCenter')\r\n\r\n// 放入页面中的方法\r\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(n, isPrime) {\r\n\tconst span = document.createElement('span')\r\n\tspan.innerText = n\r\n\tif (isPrime) {\r\n\t\tconst color = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.generateColor)()\r\n\t\tspan.style.color = color\r\n\t\tgenerateCenterPrimeNumber(n, color)\r\n\t}\r\n\tdivContainer.appendChild(span)\r\n\tgenerateCenterNumber(n)\r\n}\r\n\r\n// 生成页面中间放大显示的数字方法\r\nfunction generateCenterNumber(n) {\r\n\tdivCenter.innerText = n\r\n}\r\n\r\n// 生成页面中间放大显示的素数方法\r\nfunction generateCenterPrimeNumber(n, color) {\r\n\tconst div = document.createElement('div')\r\n\tdiv.className = 'center'\r\n\tdiv.style.color = color\r\n\tdiv.innerText = n\r\n\tdocument.body.appendChild(div)\r\n\t// 加入div后强行渲染-读取某个元素的位置或尺寸信息即可\r\n\t// \t- 此时强行渲染但是不会进行绘制，所以用户无法感知这个变化\r\n\t//  - 如果不读取属性让渲染主线程渲染一次，那么这个div的初始样式就会被设置为后续的位置和透明度\r\n\t//  - 就不会变成我们所期望的那样从初始样式过渡到预定样式\r\n\tgetComputedStyle(div).left\r\n\tdiv.style.transform = `translate(${(0,_utils_generateColor__WEBPACK_IMPORTED_MODULE_1__._getRandom)(-200, 200)}px,${(0,_utils_generateColor__WEBPACK_IMPORTED_MODULE_1__._getRandom)(\r\n\t\t-200,\r\n\t\t200\r\n\t)}px)`\r\n\tdiv.style.opacity = 0\r\n}\r\n\n\n//# sourceURL=webpack://webpack/./src/page/appendNumber.js?");

/***/ }),

/***/ "./src/page/evnet.js":
/*!***************************!*\
  !*** ./src/page/evnet.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ \"./src/utils/index.js\");\n/* harmony import */ var _appendNumber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./appendNumber */ \"./src/page/appendNumber.js\");\n\r\n\r\n\r\nvar isStart = false\r\n\r\nconst n = new _utils__WEBPACK_IMPORTED_MODULE_0__.NumberTimer(100)\r\n\r\nn.onNumberCreated = function (num, isPrime) {\r\n\t;(0,_appendNumber__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(num, isPrime)\r\n}\r\n\r\nwindow.onclick = function () {\r\n\tif (isStart) {\r\n\t\tn.stop()\r\n\t\tisStart = false\r\n\t} else {\r\n\t\tn.start()\r\n\t\tisStart = true\r\n\t}\r\n}\r\n\n\n//# sourceURL=webpack://webpack/./src/page/evnet.js?");

/***/ }),

/***/ "./src/utils/generateColor.js":
/*!************************************!*\
  !*** ./src/utils/generateColor.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   _getRandom: () => (/* binding */ _getRandom),\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst colors = [\r\n\t'#ff9900',\r\n\t'#ccff33',\r\n\t'#99ff66',\r\n\t'#33ffff',\r\n\t'#ff3333',\r\n\t'#00fa9a'\r\n]\r\n\r\n// 获取一个随机整数\r\nfunction _getRandom(min, max) {\r\n\treturn Math.floor(Math.random() * (max - min) + min)\r\n}\r\n\r\n/**\r\n * 返回一个颜色数组中一个随机的颜色值\r\n */\r\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {\r\n\tconst num = _getRandom(0, colors.length)\r\n\treturn colors[num]\r\n}\r\n\n\n//# sourceURL=webpack://webpack/./src/utils/generateColor.js?");

/***/ }),

/***/ "./src/utils/generateNums.js":
/*!***********************************!*\
  !*** ./src/utils/generateNums.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ NumberTimer)\n/* harmony export */ });\n/* harmony import */ var _isPrime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isPrime */ \"./src/utils/isPrime.js\");\n\r\n\r\nclass NumberTimer {\r\n\tconstructor(duration = 500) {\r\n\t\tthis.duration = duration // 生成数组间隔时间\r\n\t\tthis.count = 1 // 初始数值\r\n\t\tthis.timerId = null\r\n\t\tthis.onNumberCreated = null\r\n\t}\r\n\r\n\t// 开始生成数字\r\n\tstart() {\r\n\t\t// 如果存在上一个计时器就不做处理\r\n\t\tif (this.timerId) {\r\n\t\t\treturn\r\n\t\t}\r\n\t\tthis.timerId = setInterval(() => {\r\n\t\t\tthis.onNumberCreated &&\r\n\t\t\t\tthis.onNumberCreated(this.count, (0,_isPrime__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this.count))\r\n\t\t\tthis.count++\r\n\t\t}, this.duration)\r\n\t}\r\n\r\n\t// 停止生成数字\r\n\tstop() {\r\n\t\tclearInterval(this.timerId)\r\n\t\tthis.timerId = null\r\n\t}\r\n}\r\n\n\n//# sourceURL=webpack://webpack/./src/utils/generateNums.js?");

/***/ }),

/***/ "./src/utils/index.js":
/*!****************************!*\
  !*** ./src/utils/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   NumberTimer: () => (/* reexport safe */ _generateNums__WEBPACK_IMPORTED_MODULE_2__[\"default\"]),\n/* harmony export */   generateColor: () => (/* reexport safe */ _generateColor__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n/* harmony export */   isPrime: () => (/* reexport safe */ _isPrime__WEBPACK_IMPORTED_MODULE_0__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var _isPrime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isPrime */ \"./src/utils/isPrime.js\");\n/* harmony import */ var _generateColor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./generateColor */ \"./src/utils/generateColor.js\");\n/* harmony import */ var _generateNums__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./generateNums */ \"./src/utils/generateNums.js\");\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://webpack/./src/utils/index.js?");

/***/ }),

/***/ "./src/utils/isPrime.js":
/*!******************************!*\
  !*** ./src/utils/isPrime.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// 设计\r\n//  - 假设判断数字5，那么除开 1 和自身，范围值为 2~4\r\n//  - 我们只需要循环2~4，如果被整除了，就表示是一个素数\r\n\r\n/**\r\n * 判断一个数是否是素数\r\n * 素数：仅能被 1 和自身整除的数\r\n * @param {Number} n\r\n * @returns {Boolean}\r\n */\r\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(n) {\r\n\t// 2 是最小的素数，小于2 都不是素数\r\n\tif (n < 2) return false\r\n\tfor (let i = 2; i < n; i++) {\r\n\t\t// 如果 n % i 余数为 0，表示这个数就不是素数，可以被除 1 以外和自身的数整除\r\n\t\tif (n % i === 0) {\r\n\t\t\treturn false\r\n\t\t}\r\n\t}\r\n\treturn true\r\n}\r\n\n\n//# sourceURL=webpack://webpack/./src/utils/isPrime.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
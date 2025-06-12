(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('node:path')) :
	typeof define === 'function' && define.amd ? define(['exports', 'node:path'], factory) :
	(global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.Index = {}, global.path));
})(this, (function (exports, path) { 'use strict';

	console.log('Hello world!', path.join(__dirname, 'text.js'));

	const a = 100;

	exports.a = a;

}));

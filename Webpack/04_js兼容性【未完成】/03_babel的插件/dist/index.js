"use strict";

require("core-js/modules/es.object.to-string.js");
require("core-js/modules/es.promise.js");
require("core-js/modules/es.array.includes.js");
new Promise(function (resolve, reject) {
  resolve();
});
var a = Math.pow(1, 3);
var value = 'aaa';
var arr = ['aaa', 'bbb', 'ccc', 'ddd'];
if (arr.includes(value)) {
  console.log('包含');
}
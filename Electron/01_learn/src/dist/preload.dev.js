"use strict";

var fs = require('fs');

var path = require('path');

var _require = require('electron'),
    contextBridge = _require.contextBridge; // * 前提是 contextIsolation: false 才可以被访问
// 预加载脚本是属于渲染进程的，所以可以直接使用 window 对象，但是它也可以和主进程进行通信
// 通过预加载脚本向渲染进程注入一些代码


window.myApi = {
  a: 1,
  // 向渲染进程注入一个函数，让渲染进程可以调用
  resolve: function resolve() {
    return path.resolve.apply(path, arguments);
  }
};
console.log('preload.js', window); // * exposeInMainWorld: 向主线程暴露一个变量，让渲染进程可以访问
// 暴露一个全局变量 Aversions，让渲染进程可以访问

contextBridge.exposeInMainWorld('Aversions', {
  node: function node() {
    return process.versions.node;
  },
  chrome: function chrome() {
    return process.versions.chrome;
  },
  electron: function electron() {
    return process.versions.electron;
  },
  // 除函数之外，我们也可以暴露变量
  name: 'coderjc',
  resolve: function resolve() {
    return path.resolve.apply(path, arguments);
  }
}); // !未知

contextBridge.exposeInIsolatedWorld(1004, 'electronA', {
  doThing: function doThing() {
    return console.log('~~doThing~~');
  }
});
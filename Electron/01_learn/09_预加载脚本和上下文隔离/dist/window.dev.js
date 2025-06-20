"use strict";

console.log('window.js loaded'); // * contextIsolation 需要为 false，这个上下文隔离关闭，才能让 preload 共享全局对象 window
// 获取通过预加载脚本加载 api
// console.log(window.myApi, require)
// console.log(window.myApi.resolve('index.html'))
// * 需要使用 contextBridge.exposeInMainWorld() 方法将 preload 中的方法暴露给渲染进程
// - 且 contextIsolation 需要为 true
// console.log('渲染进程:Aversions', Aversions)
// for (const key in Aversions) {
//     if (typeof Aversions[key] === 'function') {
//         console.log(Aversions[key]())
//     } else {
//         console.log(key, Aversions[key])
//     }
// }

window.electronA.doThing();
"use strict";

var _electron = require("electron");

var createWindow = function createWindow() {
  var win = new _electron.BrowserWindow({
    width: 800,
    height: 600
  }); // * 以工作目录为基准

  win.loadFile('./src/index.html');
}; // whenReady 生命周期，在 electron 完成初始化后触发


_electron.app.whenReady().then(function () {
  createWindow();
});
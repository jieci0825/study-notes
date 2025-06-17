"use strict";

var _require = require('electron'),
    ipcRenderer = _require.ipcRenderer;

var btn = document.getElementById('btn');
var text = document.getElementById('text');
ipcRenderer.on('receiveFromWindow2', function (event, message) {
  // 接收来自窗口 2 的消息
  text.innerText = message;
});
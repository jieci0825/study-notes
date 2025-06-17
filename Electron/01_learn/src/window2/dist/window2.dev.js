"use strict";

var _require = require('electron'),
    ipcRenderer = _require.ipcRenderer;

var btn = document.getElementById('btn');
var inp = document.getElementById('content');
btn.addEventListener('click', function () {
  var value = inp.value; // 向其他窗口(进程)发送消息-而不同窗口的通信需通过 主进程 来中转

  ipcRenderer.send('sendToWindow1', value);
  inp.value = '';
});
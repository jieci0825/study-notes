"use strict";

var _require = require('electron'),
    ipcRenderer = _require.ipcRenderer;

var btn = document.getElementById('btn');

var _ref = new MessageChannel(),
    port1 = _ref.port1,
    port2 = _ref.port2; // 将 port2 传递给主进程


ipcRenderer.postMessage('sendToMain', {
  message: 'hello'
}, [port1]);
btn.addEventListener('click', function () {
  console.log('点击了按钮'); // 向主进程发送消息

  port2.postMessage({
    type: 'click',
    content: '我是来自渲染进程的消息'
  });
});
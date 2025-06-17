"use strict";

self.addEventListener('message', function (event) {
  // 接收主线程发送的消息
  // const message = event.data
  // console.log('Worker received message:', message)
  // 获取传递过来的 port
  var port = event.ports[0];
  if (!port) return; // 向主线程发送消息

  port.postMessage('Hello from Worker!');
});
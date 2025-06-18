"use strict";

var _require = require('electron'),
    globalShortcut = _require.globalShortcut; // 注册全局快捷键


function registerGlobalShortcut(key) {} // 注册全局的开发者工具快捷键
//  * electron 页面级别的快捷键则在渲染进程中使用 web 中的 `addEventListener` 或 `onkeydown` 事件来监听即可
// 注册切换开发者工具快捷键


function registerDevToolsShortcut(win) {
  globalShortcut.register('F12', function () {
    console.log('----', win.idxx);

    if (win.webContents.isDevToolsOpened()) {
      win.webContents.closeDevTools();
    } else {
      win.webContents.openDevTools();
    }
  });
}

module.exports = {
  registerGlobalShortcut: registerGlobalShortcut,
  registerDevToolsShortcut: registerDevToolsShortcut
};
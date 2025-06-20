"use strict";

var _require = require('electron'),
    app = _require.app,
    BrowserWindow = _require.BrowserWindow,
    globalShortcut = _require.globalShortcut,
    ipcMain = _require.ipcMain,
    screen = _require.screen;

var _require2 = require('./shortcut'),
    registerDevToolsShortcut = _require2.registerDevToolsShortcut,
    addWindow = _require2.addWindow;

var path = require('path'); // 创建窗口


var createWindow = function createWindow() {
  var win = new BrowserWindow({
    width: 360,
    height: 480,
    autoHideMenuBar: true,
    // 隐藏菜单栏
    webPreferences: {
      // 如果设置为 true，则渲染进程可以访问 node.js API
      //  - 而如果这个是 false 的话，那么哪怕通过 preload 脚本暴露了一些 node api 也无法让渲染进程使用
      nodeIntegration: true,
      // 允许渲染进程使用 node
      // 如果设置为 true，则渲染进程可以访问 node.js API，默认为 true
      // contextIsolation: false, // 关闭上下文隔离，关闭之后渲染进程可以访问 node.js API
      preload: path.join(__dirname, 'preload.js') // 预加载脚本

    }
  });
  win.id = 1004;
  win.loadFile('./src/index.html'); // 将窗口添加到管理列表

  addWindow(win);
  return win;
};

app.whenReady().then(function () {
  var win = createWindow(); // 只需要调用一次快捷键注册

  registerDevToolsShortcut();
}); // 应用退出时取消所有快捷键

app.on('will-quit', function () {
  globalShortcut.unregisterAll();
}); // 防止应用完全退出（保持挂件运行）

app.on('window-all-closed', function () {
  // 在 macOS 上保持应用运行
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
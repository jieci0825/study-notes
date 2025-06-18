"use strict";

var _require = require('electron'),
    app = _require.app,
    BrowserWindow = _require.BrowserWindow,
    globalShortcut = _require.globalShortcut,
    ipcMain = _require.ipcMain,
    screen = _require.screen;

var _require2 = require('./shortcut'),
    registerDevToolsShortcut = _require2.registerDevToolsShortcut;

var idx = 0; // 创建窗口

var createWindow = function createWindow() {
  var win = new BrowserWindow({
    width: 360,
    height: 480,
    autoHideMenuBar: true,
    // 隐藏菜单栏
    webPreferences: {
      devTools: true,
      // 允许渲染进程使用开发者工具
      nodeIntegration: true,
      // 允许渲染进程使用 node
      contextIsolation: false,
      // 关闭上下文隔离
      webviewTag: true // 允许渲染进程使用 webview 标签

    }
  });
  win.idxx = idx++; // 挂件索引

  win.loadFile('./src/index.html');
  registerDevToolsShortcut(win);
  return win;
};

app.whenReady().then(function () {
  var win = createWindow();
  var win1 = createWindow();
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
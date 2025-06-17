"use strict";

var _require = require('electron'),
    app = _require.app,
    BrowserWindow = _require.BrowserWindow,
    globalShortcut = _require.globalShortcut,
    ipcMain = _require.ipcMain;

var path = require('path'); // 创建窗口


var createWindow = function createWindow(url) {
  var win = new BrowserWindow({
    width: 400,
    height: 300,
    autoHideMenuBar: true,
    // 隐藏菜单栏-隐藏后 单击 alt 键显示
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
  win.loadFile(url);
  return win;
}; // whenReady 生命周期，在 electron 完成初始化后触发


app.whenReady().then(function () {
  var url1 = path.join(__dirname, './window1/window1.html');
  var win1 = createWindow(url1); // 创建第二个窗口

  var url2 = path.join(__dirname, './window2/window2.html');
  var win2 = createWindow(url2); // * 监听事件，进行中转
  //  - 监听窗口 2 发送的消息

  ipcMain.on('sendToWindow1', function (event, message) {
    // 向窗口 1 发送消息
    win1.webContents.send('receiveFromWindow2', message);
  }); // 注册 ctrl + F12 快捷键来切换开发者工具

  globalShortcut.register('F12', function () {
    registerF12(win1);
    registerF12(win2);
  });
});

function registerF12(win) {
  if (win.webContents.isDevToolsOpened()) {
    win.webContents.closeDevTools();
  } else {
    win.webContents.openDevTools();
  }
} // 应用退出时取消所有快捷键


app.on('will-quit', function () {
  globalShortcut.unregisterAll();
});
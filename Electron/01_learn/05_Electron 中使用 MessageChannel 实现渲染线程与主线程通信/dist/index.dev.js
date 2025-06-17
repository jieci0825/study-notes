"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var _require = require('electron'),
    app = _require.app,
    BrowserWindow = _require.BrowserWindow,
    globalShortcut = _require.globalShortcut,
    ipcMain = _require.ipcMain; // 创建窗口


var createWindow = function createWindow() {
  var win = new BrowserWindow({
    width: 800,
    height: 600,
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
  win.loadFile('./src/index.html');
  return win;
}; // whenReady 生命周期，在 electron 完成初始化后触发


app.whenReady().then(function () {
  var win = createWindow(); // 注册 ctrl + F12 快捷键来切换开发者工具

  globalShortcut.register('F12', function () {
    if (win.webContents.isDevToolsOpened()) {
      win.webContents.closeDevTools();
    } else {
      win.webContents.openDevTools();
    }
  });
}); // 应用退出时取消所有快捷键

app.on('will-quit', function () {
  globalShortcut.unregisterAll();
});
ipcMain.on('sendToMain', function (event, message) {
  var _event$ports = _slicedToArray(event.ports, 1),
      port = _event$ports[0]; // console.log('收到消息：', message)
  // 监听消息


  port.on('message', function (msg) {
    console.log('MessageChannel:收到渲染进程的消息：', msg);
  }); // 开启

  port.start();
});
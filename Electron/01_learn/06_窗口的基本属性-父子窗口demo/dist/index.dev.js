"use strict";

var _require = require('electron'),
    app = _require.app,
    BrowserWindow = _require.BrowserWindow,
    globalShortcut = _require.globalShortcut,
    ipcMain = _require.ipcMain; // 创建窗口


var createWindow = function createWindow() {
  // 窗口属性详情：https://www.electronjs.org/zh/docs/latest/api/structures/base-window-options
  var win = new BrowserWindow({
    width: 800,
    height: 600,
    minWidth: 400,
    // 最小宽度
    minHeight: 300,
    // 最小高度
    autoHideMenuBar: true,
    // 隐藏菜单栏-隐藏后 单击 alt 键显示
    resizable: true,
    // 允许窗口调整大小
    movable: true,
    // 允许窗口移动
    // 窗口位置默认在屏幕中心
    // x: 100, // 窗口位置
    // y: 100, // 窗口位置
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
}; // 创建子窗口


var createChildWindow = function createChildWindow(parent) {
  var child = new BrowserWindow({
    width: 400,
    height: 300,
    parent: parent,
    // 设置父窗口
    modal: false,
    // 模态窗口
    webPreferences: {
      devTools: true,
      // 允许渲染进程使用开发者工具
      nodeIntegration: true,
      // 允许渲染进程使用 node
      contextIsolation: false // 关闭上下文隔离

    }
  });
  child.loadFile('./src/index-child.html');
  return child;
};
/* 
    * 父子组件关联
    - 当父组件关闭时，子组件也会关闭
    - 父组件移动时，子组件也会跟随移动
*/


app.whenReady().then(function () {
  var win = createWindow();
  var child = createChildWindow(win); // 也可以拿到父窗口的位置之后，再设置子窗口的位置

  var _win$getBounds = win.getBounds(),
      x = _win$getBounds.x,
      y = _win$getBounds.y;

  child.setPosition(x + 100, y + 100);
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
"use strict";

var _require = require('electron'),
    app = _require.app,
    BrowserWindow = _require.BrowserWindow,
    globalShortcut = _require.globalShortcut,
    ipcMain = _require.ipcMain,
    screen = _require.screen; // 创建窗口


var createWindow = function createWindow() {
  // 获取主显示器信息
  var _screen$getPrimaryDis = screen.getPrimaryDisplay().workAreaSize,
      screenWidth = _screen$getPrimaryDis.width,
      screenHeight = _screen$getPrimaryDis.height;
  var win = new BrowserWindow({
    width: 360,
    // 挂件宽度
    height: 480,
    // 挂件高度
    x: screenWidth - 380,
    // 距离屏幕右边20px
    y: 20,
    // 距离屏幕顶部20px
    transparent: true,
    // 窗口透明
    frame: false,
    // 去掉窗口边框
    resizable: false,
    // 禁止调整大小
    alwaysOnTop: true,
    // 始终置顶
    skipTaskbar: true,
    // 不显示在任务栏
    autoHideMenuBar: true,
    // 隐藏菜单栏
    hasShadow: false,
    // 移除窗口阴影
    focusable: true,
    // 允许获得焦点
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
  win.loadFile('./src/index.html'); // 右键菜单处理

  win.webContents.on('context-menu', function (event, params) {// 可以在这里添加自定义右键菜单
  }); // 防止窗口最小化

  win.on('minimize', function (event) {
    event.preventDefault();
  });
  return win;
};

app.whenReady().then(function () {
  var win = createWindow(); // 开发者工具快捷键

  globalShortcut.register('F12', function () {
    if (win.webContents.isDevToolsOpened()) {
      win.webContents.closeDevTools();
    } else {
      win.webContents.openDevTools();
    }
  }); // 切换置顶快捷键

  globalShortcut.register('F11', function () {
    var isAlwaysOnTop = win.isAlwaysOnTop();
    win.setAlwaysOnTop(!isAlwaysOnTop);
  }); // 退出应用快捷键

  globalShortcut.register('ESC', function () {
    app.quit();
  });
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
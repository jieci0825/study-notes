const { app, BrowserWindow, globalShortcut, ipcMain, screen } = require('electron')
const { registerDevToolsShortcut, addWindow } = require('./shortcut')

let idx = 0

// 创建窗口
const createWindow = () => {
    const win = new BrowserWindow({
        width: 360,
        height: 480,
        autoHideMenuBar: true, // 隐藏菜单栏
        webPreferences: {
            devTools: true, // 允许渲染进程使用开发者工具
            nodeIntegration: true, // 允许渲染进程使用 node
            contextIsolation: false, // 关闭上下文隔离
            webviewTag: true // 允许渲染进程使用 webview 标签
        }
    })

    win.idxx = idx++ // 挂件索引

    win.loadFile('./src/index.html')

    // 将窗口添加到管理列表
    addWindow(win)

    return win
}

app.whenReady().then(() => {
    const win = createWindow()
    const win1 = createWindow()
    
    // 只需要调用一次快捷键注册
    registerDevToolsShortcut()
})

// 应用退出时取消所有快捷键
app.on('will-quit', () => {
    globalShortcut.unregisterAll()
})

// 防止应用完全退出（保持挂件运行）
app.on('window-all-closed', () => {
    // 在 macOS 上保持应用运行
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

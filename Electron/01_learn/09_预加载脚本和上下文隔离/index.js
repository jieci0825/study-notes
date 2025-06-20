const { app, BrowserWindow, globalShortcut, ipcMain, screen } = require('electron')
const { registerDevToolsShortcut, addWindow } = require('./shortcut')
const path = require('path')

// 创建窗口
const createWindow = () => {
    const win = new BrowserWindow({
        width: 360,
        height: 480,
        autoHideMenuBar: true, // 隐藏菜单栏
        webPreferences: {
            // 如果设置为 true，则渲染进程可以访问 node.js API
            //  - 而如果这个是 false 的话，那么哪怕通过 preload 脚本暴露了一些 node api 也无法让渲染进程使用
            nodeIntegration: true, // 允许渲染进程使用 node
            // 如果设置为 true，则渲染进程可以访问 node.js API，默认为 true
            // contextIsolation: false, // 关闭上下文隔离，关闭之后渲染进程可以访问 node.js API
            preload: path.join(__dirname, 'preload.js') // 预加载脚本
        }
    })

    win.id = 1004

    win.loadFile('./src/index.html')

    // 将窗口添加到管理列表
    addWindow(win)

    return win
}

app.whenReady().then(() => {
    const win = createWindow()

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

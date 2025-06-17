// * 入口文件即是主进程

const { app, BrowserWindow, globalShortcut } = require('electron')

// 创建窗口
const createWindow = () => {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        autoHideMenuBar: true, // 隐藏菜单栏-隐藏后 单击 alt 键显示
        webPreferences: {
            devTools: true, // 允许渲染进程使用开发者工具
            nodeIntegration: true, // 允许渲染进程使用 node
            contextIsolation: false, // 关闭上下文隔离
            webviewTag: true // 允许渲染进程使用 webview 标签
        }
    })

    // 打开开发者工具（现在通过F12控制）
    // win.webContents.openDevTools()

    // * 以工作目录为基准
    win.loadFile('./src/window/window1.html')

    return win
}

// whenReady 生命周期，在 electron 完成初始化后触发
app.whenReady().then(() => {
    const win = createWindow()

    // 注册 ctrl + F12 快捷键来切换开发者工具
    globalShortcut.register('ctrl+F12', () => {
        if (win.webContents.isDevToolsOpened()) {
            win.webContents.closeDevTools()
        } else {
            win.webContents.openDevTools()
        }
    })
})

// 应用退出时取消所有快捷键
app.on('will-quit', () => {
    globalShortcut.unregisterAll()
})

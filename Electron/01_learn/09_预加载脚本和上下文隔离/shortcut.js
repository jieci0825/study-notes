const { globalShortcut, BrowserWindow } = require('electron')

// 存储所有窗口的数组
let windows = []

// 注册全局快捷键
function registerGlobalShortcut(key) {}

// 添加窗口到管理列表
function addWindow(win) {
    windows.push(win)

    // 窗口关闭时从数组中移除
    win.on('closed', () => {
        windows = windows.filter(w => w !== win)
    })
}

// 注册全局的开发者工具快捷键
//  * electron 页面级别的快捷键则在渲染进程中使用 web 中的 `addEventListener` 或 `onkeydown` 事件来监听即可
// 注册切换开发者工具快捷键
function registerDevToolsShortcut() {
    // 只注册一次全局快捷键
    if (!globalShortcut.isRegistered('F12')) {
        globalShortcut.register('F12', () => {
            // 获取当前焦点窗口
            const focusedWindow = BrowserWindow.getFocusedWindow()

            if (focusedWindow) {
                console.log('----', focusedWindow.idxx)
                if (focusedWindow.webContents.isDevToolsOpened()) {
                    focusedWindow.webContents.closeDevTools()
                } else {
                    focusedWindow.webContents.openDevTools()
                }
            } else {
                // 如果没有焦点窗口，使用第一个可用窗口
                const availableWindow = windows.find(w => !w.isDestroyed())
                if (availableWindow) {
                    if (availableWindow.webContents.isDevToolsOpened()) {
                        availableWindow.webContents.closeDevTools()
                    } else {
                        availableWindow.webContents.openDevTools()
                    }
                }
            }
        })
    }
}

module.exports = {
    registerGlobalShortcut,
    registerDevToolsShortcut,
    addWindow
}

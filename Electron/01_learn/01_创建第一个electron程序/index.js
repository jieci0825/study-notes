import { app, BrowserWindow } from 'electron'

// 创建窗口
const createWindow = () => {
    const win = new BrowserWindow({
        width: 800,
        height: 600
    })

    // * 以工作目录为基准
    win.loadFile('./src/index.html')
}

// whenReady 生命周期，在 electron 完成初始化后触发
app.whenReady().then(() => {
    createWindow()
})

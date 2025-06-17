const { ipcRenderer } = require('electron')

const btn = document.getElementById('btn')
const text = document.getElementById('text')

ipcRenderer.on('receiveFromWindow2', (event, message) => {
    // 接收来自窗口 2 的消息
    text.innerText = message
})

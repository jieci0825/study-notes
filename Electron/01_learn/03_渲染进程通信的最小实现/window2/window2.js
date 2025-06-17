const { ipcRenderer } = require('electron')

const btn = document.getElementById('btn')

const inp = document.getElementById('content')

btn.addEventListener('click', () => {
    const value = inp.value

    // 向其他窗口(进程)发送消息-而不同窗口的通信需通过 主进程 来中转
    // key传递多个参数：ipcRenderer.send('sendToWindow1', action, value)
    ipcRenderer.send('sendToWindow1', value)

    inp.value = ''
})

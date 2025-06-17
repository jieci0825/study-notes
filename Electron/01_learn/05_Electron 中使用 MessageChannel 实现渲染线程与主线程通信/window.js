const { ipcRenderer } = require('electron')

const btn = document.getElementById('btn')

const { port1, port2 } = new MessageChannel()

// 将 port2 传递给主进程
ipcRenderer.postMessage('sendToMain', { message: 'hello' }, [port1])

btn.addEventListener('click', () => {
    console.log('点击了按钮')
    // 向主进程发送消息
    port2.postMessage({
        type: 'click',
        content: '我是来自渲染进程的消息'
    })
})

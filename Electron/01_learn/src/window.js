const { ipcRenderer } = require('electron')

const btn = document.getElementById('btn')

const { port1, port2 } = new MessageChannel()

// 将 port1 传递给主进程
ipcRenderer.postMessage('sendToMain', { message: 'hello' }, [port1])

btn.addEventListener('click', () => {
    console.log('点击了按钮')
    // 向主进程发送消息
    port2.postMessage({
        type: 'click',
        content: '我是来自渲染进程的消息'
    })
})

// 监听主进程发送过来的消息 - 应该监听 port2，因为我们通过 port2 发送消息
port2.onmessage = event => {
    console.log('收到主进程的消息', event.data)
}

// 启动 port2
port2.start()

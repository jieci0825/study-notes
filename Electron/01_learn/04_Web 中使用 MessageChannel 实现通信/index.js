const btn = document.querySelector('#btn')

btn.addEventListener('click', () => {
    // 创建 worker 线程
    const worker = new Worker('./worker.js')

    // 创建 messageChannel
    const messageChannel = new MessageChannel()
    const p1 = messageChannel.port1
    const p2 = messageChannel.port2

    // 发送消息到 worker
    //  - 这里传递给子线程的数据，并不重要，所以第一个参数显示地传递了 null
    worker.postMessage(null, [p2])

    // 监听 worker 返回的数据
    p1.onmessage = e => {
        console.log('主线程', e.data)
    }
})

// console.log('开启的worker1')

// self 表示这个 worker 本身
self.onmessage = function (e) {
	console.log('我接收外部传递的值', e.data)
	let count = 0
	console.time('复杂运算')
	for (let i = 0; i < 100000000; i++) {
		count += e.data
	}
	console.timeEnd('复杂运算')
	// 传递给外部的值
	self.postMessage(count)
}

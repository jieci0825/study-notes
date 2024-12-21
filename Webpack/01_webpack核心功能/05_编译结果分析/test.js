// 模拟传入的 module 和 exports
var _module = {
	_exports: {}
}

function fn(__module, __exports) {
	// 这是模块内部的代码
	const aaa = 'aaa'
	const bbb = 'bbb'
	// 模拟导出
	__module._exports = aaa + bbb
}

fn(_module, _module._exports)

// 打印结果查看-这里就是模块代码执行后获取的导出结果
console.log(_module) // { _exports: 'aaabbb' }

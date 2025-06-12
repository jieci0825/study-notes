;(() => {
	// 这里就相当于我们自己写的 modules 对象，存储所有模块的的代码
	//  - 并且函数也会接收三个参数
	var __webpack_modules__ = {
		'./src/a.js': module => {
			// 为什么使用 eval 的方式，而不是直接一个函数呢？
			eval(
				"console.log('module a')\r\nmodule.exports = 'a'\r\n\n\n//# sourceURL=webpack:///./src/a.js?"
			)
		},

		'./src/index.js': (
			__unused_webpack_module,
			__unused_webpack_exports,
			__webpack_require__
		) => {
			eval(
				'console.log(\'index module\')\r\nconst a = __webpack_require__(/*! ./a */ "./src/a.js")\r\nconsole.log(a)\r\n\n\n//# sourceURL=webpack:///./src/index.js?'
			)
		}
	}

	// 这里就是定义保存模块导出结构的变量-实现缓存
	var __webpack_module_cache__ = {}

	// 这个就是相当于 require 的导入函数
	//  - 接收一个模块id
	function __webpack_require__(moduleId) {
		// 获取当前这个模块是否在缓存中
		var cachedModule = __webpack_module_cache__[moduleId]
		// 如果在就直接返回
		if (cachedModule !== undefined) {
			return cachedModule.exports
		}
		// 定义 module，但是这里没有直接给 module 定义一个属性 exports
		//  - 而是先缓存导出结果的变量先赋值，在赋值给 module 可以省略后续重复赋值的过程
		var module = (__webpack_module_cache__[moduleId] = {
			exports: {}
		})

		// 通过模块id，在保存所有模块对象中找到对应的模块函数并传入参数执行
		__webpack_modules__[moduleId](module, module.exports, __webpack_require__)

		// 因为在内部会 module.exports 重新赋值，所以外部就会改变，这里可以直接返回导出的结果
		return module.exports
	}

	// 执行入口文件
	var __webpack_exports__ = __webpack_require__('./src/index.js')
})()

// 手写一个打包结果

// 合并两个模块
//  - ./src/a.js
//  - ./src/index.js

// 打包后的结果不会存在任何模块化的东西，那些 commonjs 和 es6 这些都不会存在
// 就是一个普普通通的函数

/* ------------- 1、创建保存全部模块的对象 ------------- */
// 首页要解决合并后的代码不会造成全局变量的污染，很容易就联想到创建一个作用域，即函数
// - 所以我们可以将每一个模块都看出一个函数，形成一个作用域，避免全局变量的污染
// - 使用模块路径作为一个属性名，路径唯一
// - 然后使用函数作为这个属性值，在将模块代码放入这个函数里面
/* 
 modules 该对象保存了所有的模块和模块对应的代码
 但是这里定义的对象会出现一个全局变量污染，所以后续会作为参数直接传入
*/
// var modules = {
// 	// - 但是普通的js里面就没有 module 这个东西，所以需要用参数传递进去，也会存在直接使用 exports 导出，所以还要传入一个 exports
// 	'./src/a.js': function (module, exports) {
// 		console.log('module a')
// 		module.exports = 'a'
// 	},
// 	// - 还会存在使用 require 函数，所以也需要传入
// 	'./src/index.js': function (module, exports, require) {
// 		console.log('index module')
// 		// originCode: const a = require('./a')
// 		// 上面的代码会被 webpack 处理，变成唯一的路径，所以这里可以手写替换
// 		const a = require('./src/a.js')
// 		console.log(a)
// 	}
// }

/* ------------- 2、创建执行模块代码的函数 ------------- */
// 上面确保模块之间不会造成变量污染之后，也保存了模块之间的代码，所以我们还需要一个函数来执行这些代码
// - 可以使用自执行函数避免全局变量污染
// - 这个函数接收保存所有模块的对象
// - 为了避免这个 modules 对象造成全局变量污染，可以把它直接作为一个自变量对象传入自执行函数
// ;(function (modules) {
// 	// 这个自执行函数函数里面一定会执行入口文件, 所以这个自执行函数就要编写一个 require 函数
// 	//  - require 函数就相当于是运行一个模块，得到模块导出的结果
// 	//  - 接收一个模块 id，即一个模块唯一的东西，这里就是路径
// 	function require(moudleId) {
// 		// 得到这个模块 id 之后，就可以从保存全部模块的 modules 对象里面获取到这个模块的对应的函数
// 		var func = modules[moudleId]
// 		// 得到这个函数之后，我们要执行这个模块无非就是运行这个函数
// 		//  - 但是运行模块的函数的时候，这个函数需要接收三个参数 module, exports, require
// 		//  - module 和 exports 还没有，所以还要构造 module 和 exports
// 		// module 是一个普通对象
// 		var module = {
// 			// module 里面存在一个 exports 对象
// 			exports: {}
// 		}
// 		// exports 就是 module里面的 exports 属性
// 		var exports = module.exports
// 		// 传入参数开始运行，现在就要获取运行这个模块之后得到的导出结果
// 		func(module, exports, require) // 执行模块
// 		//  - 一个模块中导出的结果就是把对象 module.exports 重新赋值了
// 		//  - 而重新赋值之后，外部的 module.exports 的值就会改变
//    //  - 就算是模块内使用 exports 赋值导出，但是因为外部传入的 exports 参数实际也是 module.exports，所以不会影响最终结果
// 		//  - 所以只需要在这里直接获取 module.exports 的值即可
// 		var result = module.exports
// 		// 最后把这个结果返回
// 		return result
// 	}
// 	require('./src/index.js')
// })({
// 	'./src/a.js': function (module, exports) {
// 		console.log('module a')
// 		// 导出结果会把对象重新赋值
// 		module.exports = 'a'
// 	},
// 	'./src/index.js': function (module, exports, require) {
// 		console.log('index module')
// 		const a = require('./src/a.js')
// 		console.log(a)
// 	}
// })

/* ------------- 3、实现 commonJS 的缓存效果 ------------- */
// 上面就完美的实现了没有污染任何全局变量
// 但是 commonJS 具有缓存，同一个模块不会一直重复的反复导入
// 这样缓存之后，如果出现多个模块都引入了同一个模块的时候，就不会去重复的导入和执行了
// ;(function (modules) {
// 	// 定义一个变量，实现保存模块导出的缓存结果
// 	//  - 这个对象的 key 值就是模块的唯一 id，即路径
// 	//  - 对象的值就是这个模块的导出结果
// 	var moduleExports = {}

// 	function require(moudleId) {
// // 在执行前先查看有没有缓存
// if (moduleExports[moudleId]) {
// 	// 如果有缓存就不在导入并执行，直接返回
// 	return
// }
// 		var func = modules[moudleId]
// 		var module = {
// 			exports: {}
// 		}
// 		var exports = module.exports
// 		func(module, exports, require) // 执行模块
// 		var result = module.exports
// 		// 把模块的导出结果缓存起来
// 		moduleExports[moudleId] = result
// 		return result
// 	}
// 	require('./src/index.js')
// })({
// 	'./src/a.js': function (module, exports) {
// 		console.log('module a')
// 		module.exports = 'a'
// 	},
// 	'./src/index.js': function (module, exports, require) {
// 		console.log('index module')
// 		const a = require('./src/a.js')
// 		console.log(a)
// 	}
// })

/* ------------- 4、webpack 细节处理 ------------- */
// webpack中为了避免和 node 环境中 require函数 重名，把函数重命名为了 __webpack_require__
// ;(function (modules) {
// 	var moduleExports = {}

// 	function __webpack_require__(moudleId) {
// 		// 在执行前先查看有没有缓存
// 		if (moduleExports[moudleId]) {
// 			return
// 		}
// 		var func = modules[moudleId]
// 		var module = {
// 			exports: {}
// 		}
// 		var exports = module.exports
// 		func(module, exports, __webpack_require__)
// 		var result = module.exports
// 		moduleExports[moudleId] = result
// 		return result
// 	}
// 	__webpack_require__('./src/index.js')
// })({
// 	'./src/a.js': function (module, exports) {
// 		console.log('module a')
// 		module.exports = 'a'
// 	},
// 	'./src/index.js': function (module, exports, __webpack_require__) {
// 		console.log('index module')
// 		const a = __webpack_require__('./src/a.js')
// 		console.log(a)
// 	}
// })

/* ------------- 5、使用 eval ------------- */
;(function (modules) {
	var moduleExports = {}

	function __webpack_require__(moudleId) {
		// 在执行前先查看有没有缓存
		if (moduleExports[moudleId]) {
			return
		}
		var func = modules[moudleId]
		var module = {
			exports: {}
		}
		var exports = module.exports
		func(module, exports, __webpack_require__)
		var result = module.exports
		moduleExports[moudleId] = result
		return result
	}
	__webpack_require__('./src/index.js')
})({
	'./src/a.js': function (module, exports) {
		// console.log('module a')
		// module.exports = 'a'
		eval(
			"console.log('module a')\nmodule.exports = 'a'\n //# sourceURL=webpack:///./src/a.js?"
		)
	},
	'./src/index.js': function (module, exports, __webpack_require__) {
		// console.log('index module')
		// const a = __webpack_require__('./src/a.js')
		// a.abc()
		// console.log(a)
		eval(
			"console.log('index module')\nconst a = __webpack_require__('./src/a.js')\na.abc()\nconsole.log(a)\n//# sourceURL=webpack:///./src/index.js?"
		)
	}
})

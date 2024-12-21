const path = require('path')

module.exports = {
	mode: 'development',
	// 配置入口
	entry: {
		main: './src/index.js'
	},
	// 配置出口
	output: {
		filename: '[name].[chunkhash:5].js'
	},
	// 针对模块的配置
	module: {
		// rules 表示模块的匹配规则
		//  - 是一个数组可以设置多个规则
		//  - rules 顺序是从数组的后面看到前面
		//  - 比如三条规则,先看是否满足规则三,不满足再看规则二,如果规则二满足,就使用规则二里面的东西,规则二还不满足就依次类推
		//  - 每一个规则就是一个对象
		rules: [
			// 规则1
			{
				// test 是一个正则表达式，匹配模块的路径
				//  - 比如 ./src/index.js 这个文件，他就会用这个路径来规则里面的 test 正则匹配，如果能匹配上就使用
				test: /index\.js$/, // -- 表示匹配 index.js

				// ------ 测试顺序 -------
				use: ['./loader/loader1.js', './loader/loader2.js']

				// 当匹配规则成功后，就会在 use 里面查看加载器
				//  - 就会使用这些加载器
				//  - use 是一个数组，可存在多个加载器
				//  - 使用顺序是
				// use: [
				// 	// 数组里面的每一个项就表示一个加载器
				// 	{
				// 		// loader: [加载器的路径], loader 加载器的路径
				// 		//  - 加上这个路径，在webpack 内部直接用一个 require 函数就引入这个 loader 使用 require([加载器的路径])
				// 		//  - 也可以利用query参数查看
				// 		loader: './loader/test-loader?cVar=未知数',
				// 		// 可以自定义一些参数或者配置项
				// 		options: {
				// 			changeVar: '变量' // 比如把这 变量 两个字变成 var
				// 		},
				// 	}
				// ]
				// 当你的一个规则配置的加载器是只有一个简单的 loader 字符串时，可以简写，无需完整的写成一个对象，如下：
				// './loader/test-loader?cVar=未知数',
			},
			// 规则2
			{
				test: /\.js$/,
				use: ['./loader/loader3.js', './loader/loader4.js']
			}
			// 规则3
		]

		// noParse 表示是否不要解析某个模块
		// noParse: []
	}
}

const path = require('path')

module.exports = {
	mode: 'production',
	// 配置入口
	entry: {
		// 默认情况下的配置：
		//  - 属性名表示 chunk 的名称，属性值表示入口模块
		// 直接写 entry:'./src/index.js' 等同于 entry:{ main:'./src/index.js' }
		main: './src/index.js',

		// 这个可以配置多个
		a: './src/a.js'

		// 配置一个 chunk 下的多个入口模块
		// a: ['./src/a.js', './src/index.js'] // 启动模块有两个-不会影响最终生成只有一个 chunk 文件结果
	},

	// 配置出口
	output: {
		// 必须是一个绝对路径，表示打包后的资源放入在那个文件夹里面去, 默认是 dist(简写)，实际是一个完整的绝对路径
		path: path.resolve(__dirname, 'target'),
		// 配置的是合并的js文件的规则,即生成一个文件名
		//  - 静态写法：直接写一个文件名
		// filename: 'bundle.js',
		//  - 如果需要放入一个子文件夹里面去,可以直接写
		// filename: 'script/bundle.js'

		// 动态配置
		//  - name
		// filename: '[name].js'
		// filename: 'test/[name].js'
		// filename: 'abc[name]coder.js'

		//  - hash
		//  - [name]-[hash] 即可，当然中间这个 - 符号，可以是随便其他的字母或者符号
		// filename: '[name]-[hash].js'
		// filename: '[name]-[hash:8].js'

		//  - chunkhash
		// filename: '[name]-[chunkhash:5].js'

		//  - id
		filename: '[id]-[chunkhash:5].js'
	}
}

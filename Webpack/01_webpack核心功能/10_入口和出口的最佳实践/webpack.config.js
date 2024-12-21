const path = require('path')

module.exports = {
	mode: 'production',
	// 配置入口
	entry: {
		pageA: './src/pageA/index.js',
		pageB: './src/pageB/index.js',
		pageC: ['./src/pageC/main1.js', './src/pageC/main2.js']
	},
	// 配置出口
	output: {
		filename: '[name].[chunkhash:5].js'
	}
}

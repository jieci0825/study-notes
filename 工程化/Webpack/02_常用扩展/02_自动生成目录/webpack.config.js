const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	mode: 'production',
	entry: {
		home: './src/index.js',
		a: './src/a.js'
	},
	output: {
		path: __dirname + '/dist',
		filename: 'js/[name].[chunkhash:5].js' // 增加 js 文件夹路径
	},
	plugins: [new CleanWebpackPlugin(), new HtmlWebpackPlugin()]
}

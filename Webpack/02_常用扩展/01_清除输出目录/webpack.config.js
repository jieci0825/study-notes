const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
	mode: 'production',
	output: {
		path: __dirname + '/dist', // 需要配置这个选项，否则报错 clean-webpack-plugin: options.output.path not defined. Plugin disabled...
		filename: '[name].[chunkhash:5].js'
	},
	plugins: [new CleanWebpackPlugin()]
}

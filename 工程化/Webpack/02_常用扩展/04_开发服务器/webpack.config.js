const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	mode: 'development',
	output: {
		path: __dirname + '/dist',
		filename: 'js/[name].[chunkhash:5].js'
	},
	plugins: [
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			template: './public/index.html'
		})
	],
	devServer: {
		port: 8001,
		open: true
	}
}

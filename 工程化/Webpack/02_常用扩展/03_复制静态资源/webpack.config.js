const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')

module.exports = {
	mode: 'production',
	output: {
		path: __dirname + '/dist',
		filename: 'js/[name].[chunkhash:5].js'
	},
	plugins: [
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			template: './public/index.html'
		}),
		new CopyPlugin({
			patterns: [{ from: './public', to: __dirname + '/dist/public' }]
		})
	]
}

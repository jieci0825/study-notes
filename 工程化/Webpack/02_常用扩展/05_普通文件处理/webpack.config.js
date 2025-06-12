const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	mode: 'development',
	output: {
		path: __dirname + '/dist',
		filename: '[name].[chunkhash:5].js'
	},
	module: {
		rules: [
			{
				test: /\.(png)|(jpg)|(jpeg)|(gif)$/,
				use: [
					{
						loader: 'url-loader',
						options: {
							limit: 819200 //
						}
					}
				]
			}
		]
	},
	plugins: [
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			template: './public/index.html'
		})
	]
}

const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	mode: 'development',
	plugins: [
		new HtmlWebpackPlugin({
			template: './public/index.html'
		})
	],
	entry: './src/index.ts',
	output: {
		path: __dirname + '/dist',
		filename: '[name].[chunkhash:5].js'
	},
	resolve: {
		extensions: ['.ts', '.js', '.cjs', '.json']
	},
	module: {
		rules: [{ test: /\.([cm]?ts|tsx)$/, loader: 'ts-loader' }]
	},
	devServer: {
		port: 8001,
		open: true
	}
}

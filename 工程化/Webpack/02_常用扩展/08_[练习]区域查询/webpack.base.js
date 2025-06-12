const path = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopywebpackPlugin = require('copy-webpack-plugin')

// 公共配置
module.exports = {
	entry: {
		list: './src/list/index.js',
		detail: './src/detail/index.js'
	},
	output: {
		path: __dirname + '/dist',
		filename: 'scripts/[name].[chunkhash:5].js'
	},
	resolve: {
		alias: {
			'@': path.resolve(__dirname, 'src')
		}
	},
	stats: {
		modules: false,
		colors: true
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './public/list.html',
			filename: 'list.html',
			chunks: ['list']
		}),
		new HtmlWebpackPlugin({
			template: './public/detail.html',
			filename: 'detail.html',
			chunks: ['detail']
		}),
		new CopywebpackPlugin({
			patterns: [
				{ from: './public/css', to: __dirname + '/dist/css' },
				{ from: './public/img', to: __dirname + '/dist/img' }
			]
		})
	]
}

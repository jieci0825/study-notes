const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	mode: 'development',
	output: {
		path: __dirname + '/dist',
		filename: 'scripts/[name].[chunkhash:5].js'
		// publicPath: '/aa' // 指定index.html文件打包引用的一个基本路径：
	},
	module: {
		rules: [
			{
				test: /\.(png)|(jpg)|(jpeg)|(gif)$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: 'imgs/[name].[hash:5].[ext]'
						}
					}
				]
			}
		]
	},
	plugins: [
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			template: './public/index.html',
			filename: 'html/index.html'
		})
	],
	devServer: {
		// 打开打包后的dist输出目录下的 html/iAndex.html 文件
		open: ['html/index.html'],
		static: {
			// publicPath: '/abc'
		}
	}
}

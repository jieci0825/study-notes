const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const WebpackBundleAnalyzer = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

module.exports = {
	mode: 'production',
	output: {
		path: __dirname + '/dist'
	},
	plugins: [new CleanWebpackPlugin(), new WebpackBundleAnalyzer()]
}

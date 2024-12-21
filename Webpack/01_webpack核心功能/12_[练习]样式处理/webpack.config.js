module.exports = {
	mode: 'development',
	entry: {
		main: './src/index.js'
	},
	output: {
		filename: '[name].js'
	},
	devtool: 'source-map',
	module: {
		rules: [
			{
				test: /\.css$/,
				use: {
					loader: './loader/style-loader.js'
				}
			}
		]
	}
}

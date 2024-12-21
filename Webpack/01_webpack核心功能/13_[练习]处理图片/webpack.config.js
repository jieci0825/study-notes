module.exports = {
	mode: 'development',
	entry: {
		main: './src/index.js'
	},
	output: {
		filename: '[name].js'
	},
	module: {
		rules: [
			{
				test: /\.(jpg|png|jpeg|webp|gif)$/,
				exclude: /node_modules/,
				use: ['./loader/img-loader.js']
			}
		]
	}
}

const webpack = require('webpack')

module.exports = {
	mode: 'development',
	output: {
		path: __dirname + '/dist',
		filename: 'scripts/[name].[chunkhash:5].js'
	},
	plugins: [
		new webpack.ProvidePlugin({
			$: 'jquery',
			_: 'lodash'
		})
	]
}

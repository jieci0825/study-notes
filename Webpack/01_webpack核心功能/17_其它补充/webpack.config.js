const path = require('path')

module.exports = {
	mode: 'development',
	entry: {
		main: './src/index.js'
	},
	module: {
		alias: {
			'@': path.resolve(__dirname, 'src')
		}
	}
}

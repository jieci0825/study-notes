// 引入 plugin
const MyPlugin = require('./plugins/my-plugin')

module.exports = {
	mode: 'development',
	entry: {
		main: './src/index.js'
	},
	output: {
		filename: '[name].js'
	},
	devtool: 'source-map',
	plugins: [new MyPlugin()]
}

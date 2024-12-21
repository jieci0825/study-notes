// 引入 plugin
const FileListPlugin = require('./plugins/file-list-plugin')

module.exports = {
	mode: 'development',
	entry: {
		main: './src/index.js'
	},
	output: {
		filename: '[name].js'
	},
	devtool: 'source-map',
	plugins: [new FileListPlugin()]
}

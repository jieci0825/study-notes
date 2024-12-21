// 只需要通过 commonJS 导出一个对象即可
module.exports = {
	mode: 'production',
	entry: './src/main.js',
	output: {
		filename: 'index.js' // 文件名，默认为 main.js
	}
}

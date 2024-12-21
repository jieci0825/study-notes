const loaderUtils = require('loader-utils')

module.exports = function (source) {
	// 这里需要导出一个东西，因为是处理图片这个文件
	// const base64 = getBase64(source)
	//  - 这样导出就等于把图片的数据放入一个js文件种，作为模块使用导出
	// return `module.exports = \`${base64}\``

	const filename = getFilePath.call(this, source)
	return `module.exports = \`${filename}\``
}

module.exports.raw = true

function getBase64(buffer) {
	// 此处图片类型可以根据文件名称动态匹配
	return 'data:image/jpg;base64,' + buffer.toString('base64')
}

function getFilePath(buffer) {
	// contenthash规则 8表示长度 .[ext] 表示生成后缀
	const filename = loaderUtils.interpolateName(this, '[contenthash:8].[ext]', {
		content: buffer
	})
	this.emitFile(filename, buffer)
	return filename
}

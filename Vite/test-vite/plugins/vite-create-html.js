module.exports = function (options) {
	console.log('🚢 ~ 当前打印的内容 ~ options:', options)
	const data = options.inject?.data
	return {
		name: 'my-html-transform',
		transformIndexHtml(html) {
			let result = html
			if (data && data.title) {
				result = result.replace(/<title>(.*?)<\/title>/, `<title>${data.title}</title>`)
			}
			return result
		}
	}
}

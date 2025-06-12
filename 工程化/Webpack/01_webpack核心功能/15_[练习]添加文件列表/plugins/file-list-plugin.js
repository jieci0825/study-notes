const { Compilation } = require('webpack')

class FileListPlugin {
	apply(compiler) {
		compiler.hooks.emit.tap('FileListPlugin', compilation => {
			const filelist = []

			for (const key in compilation.assets) {
				var str = `【${key}】\n大小：${compilation.assets[key].size() / 1000}kb`
				filelist.push(str)
			}

			var str = filelist.join('\n\n')
			compilation.assets['filelist.txt'] = {
				source() {
					return str
				},
				size() {
					return str.length
				}
			}
		})
	}
}

module.exports = FileListPlugin

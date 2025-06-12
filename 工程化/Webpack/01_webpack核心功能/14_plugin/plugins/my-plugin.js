class MyPlugin {
	apply(compiler) {
		compiler.hooks.done.tap('MyPlugin', function (compilation) {
			console.log('运行了done方法!')
		})
	}
}

module.exports = MyPlugin

# clean-webpack-plugin

[clean-webpack-plugin](https://www.npmjs.com/package/clean-webpack-plugin)

这个插件可以帮助我们清除 webpack 打包的文件。也就是 dist 目录，因为我们再次打包时上一次打包的结果就没有用处了，就需要删除，手动删除就会显得比较麻烦

使用：

~~~js
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
	mode: 'production',
	output: {
		path: __dirname + '/dist', // 需要配置这个选项，否则报错 clean-webpack-plugin: options.output.path not defined. Plugin disabled...
		filename: '[name].[chunkhash:5].js'
	},
	plugins: [new CleanWebpackPlugin()]
}
~~~

效果如图：


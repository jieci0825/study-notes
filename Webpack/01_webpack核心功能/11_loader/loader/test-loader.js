const loaderUtils = require('loader-utils')

// 编写一个测试 loader
//  - loader 本质就是一个函数
/* 
  webpack 在打包的时候，会把源代码作为字符串传进来，然后经
  过 loader 函数的解析改变，返回一个新的字符串，然后webpack 在
  把这个新的字符串去做 AST(抽象语法树分析)
*/

// loader 是在 webpack 打包过程中运行的，基于 nodejs
//  - 因此也无法使用 ES Module 方式来导出loader，无法识别

// 这个函数接收一个参数
//  - sourceCode 源代码字符串
//  返回一个解析后的 sourceCode 源代码字符串
module.exports = function (sourceCode) {
	// 1、sourceCode: 变量 a = 111
	//  - 这里假设我们对 变量 a = 111 这个代码作出了修正，改为 var a = 111
	// return 'var a = 111'
	// 2、实际的修正
	// - 这个 sourceCode 就是一个字符串，所以可以进行一些字符串的api操作，比如替换
	// - 这里就是把源码的 变量 a = 111 的变量替换为 var
	// console.log(sourceCode)
	// return sourceCode.replace(/变量/g, 'var')
	// 3、还可以通过 loader 规则中定义的 options 中获取一些参数，来修改
	//  - webpack 运行的时候会有一个上下文 this，可以在这里获取
	// console.log(this.loaders[0].options)
	//  - 但是这样获取的话会比较繁琐，且 this 上的东西过于繁多
	//  - 可以借助第三方库【loader-utils】来获取这个 loader 的 options
	// const options = loaderUtils.getOptions(this) || {}

	// - 但是在 webpack 5 这个版本种，已经无法通过这个 loader-utils 的 getOptions 方法获取了
	// - 目前的方法是在上下文的  getOptions 可以拿到，也可也在 query 参数种可以拿到
	var options = this.getOptions() || {}
	var reg = new RegExp(options.changeVar, 'g')
	return sourceCode.replace(reg, 'var')
}

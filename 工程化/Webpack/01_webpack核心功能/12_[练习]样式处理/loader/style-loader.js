module.exports = function (sourceCode) {
	// 1、创建一个style标签
	// const style = document.createElement('style')
	// 2、将sourceCode的值赋值给style标签的innerHTML属性
	// style.innerHTML = sourceCode
	// 3、将style标签添加到head标签中
	// document.head.appendChild(style)
	//  - 直接返回 css 代码，ast 分析不出来，就会报错
	// 4、而在此时，只是在打包的时候编译，还没真正的运行，是无法获取到正确的 dom 对象的
	//  - 所以需要把这些作为源码字符串交给webpack，进行 ast 分析
	// tips 这里使用转移给 sourceCode 加上字符串符号，因为在正常书写js代码是就是一个html字符串
	//  - dom.innerHTML = `<h1>hello world</h1>`
	//  - 这里是设置样式而已
	// const result = `const style = document.createElement('style')
	//         style.innerHTML = \`${sourceCode}\`
	//         document.head.appendChild(style)`

	// --- 如果外部导入这个css文件的时候还需要接收这个返回的源码
	//  - 就可以把这个源码的字符串通过模块导出被外界得到
	// 这样可以得到的原因也很简单，index.css 文件的源码被修改了下列的 js 形式
	//  - 这样的形式就可以看做为一个单一的 js 文件，既然是 js 文件，那么直接使用导出语法即可
	const result = `const style = document.createElement('style')
          style.innerHTML = \`${sourceCode}\`
          document.head.appendChild(style)
          module.exports = \`${sourceCode}\``
	return result
}

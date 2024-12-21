function curry(func) {
	// 得到函数的参数
	//  - 第一个参数是函数，所以切割
	//  - 切割之后得到需要固定的参数
	const args = [...arguments].slice(1)

	const _that = this

	return function () {
		const curArgs = [...arguments] // 当前调用的参数
		const totalArgs = [...args, ...curArgs] // 合并参数
		// 判断参数是否足够了
		if (totalArgs.length >= func.length) {
			// 参数够了，执行函数
			return func(...totalArgs)
		} else {
			// 参数不够，继续固定
			return curry.call(_that, func, ...totalArgs)
		}
	}
}

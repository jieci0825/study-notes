function pipe(...args) {
	return function (val) {
		// for (let i = 0; i < args.length; i++) {
		// 	const func = args[i]
		// 	val = func(val)
		// }
		// return val
		return args.reduce((acc, func) => func(acc), val)
	}
}

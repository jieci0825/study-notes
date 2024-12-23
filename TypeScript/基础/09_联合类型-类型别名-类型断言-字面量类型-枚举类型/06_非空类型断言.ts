// 非空类型断言

function foo(message?: string) {
	// 可能会是 undefined ，如果为了正常运行，可以改为非空类型断言
	// console.log(message?.length)

	// ! 表示可以确定某个标识符是有值的， 跳过 ts 在编译阶段对它的检测
	console.log(message!.length) // 省去了 if 判断
}

foo()

export {}

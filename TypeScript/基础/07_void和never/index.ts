// 函数返回为  undefined 可以写成 void
function foo(): void {
	return undefined
}

// 如果一个函数永远都不会有返回的结果，可以写成 never
function bar(): never {
	while (true) {}
}

// 如果这个函数就是用来抛出一个异常的，这个也表示是没有返回结果的
//  - 因为没有使用 return 返回结果
function func(): never {
	throw new Error('发生了一个错误')
}

// never 的应用场景
// 1、现在 message 参数定义的是字符串或者数字类型
function handleMessage(message: string | number) {
	// 2、针对这些情况进行处理
	switch (typeof message) {
		case 'string':
			console.log('message 是字符串的处理方法')
			break
		case 'number':
			console.log('message 是数字的处理方法')
			break
		default:
			// 3、上面规则参数必须是 string 或者 number
			//  - 因为定义了类型，如果使用这个函数传递了其他类型，编译器就会直接报错了
			//  - 而且我们的代码已经把这两种情况都处理完成了，
			//  - 所以基于以上的情况，就永远不会进入我们这个分支，所以才能把 message 赋值给一个 never 类型
			const check: never = message
	}
}

// 4、但是如果其他人在调用的时候传递了一个布尔值
// handleMessage(true) // 报错：类型“boolean”的参数不能赋给类型“string | number”的参数。ts(2345)
//  - 此时如果报错了，他直接给 handleMessage 函数参数的联合类型多加了一个 Boolean，比如：
//    - function handleMessage(message: string | number | boolean) {...}
//  - 这里换个函数名称表示，伪代码，实际例子就是原来的函数名
function handleMessage1(message: string | number | boolean) {
	switch (typeof message) {
		case 'string':
			console.log('message 是字符串的处理方法')
			break
		case 'number':
			console.log('message 是数字的处理方法')
			break
		default:
		// const check: never = message // 报错：不能将类型“boolean”分配给类型“never”。ts(2322)
		//  - 这里报错是因为他虽然给 message 参数添加了 Boolean 类型，但是没有针对这个布尔的情况进行处理，所以就会可能进入这个分支
		//  - 因为可能会进入这个分支，所以就不能把这个 message 赋值给 never 类型
	}
}

// 如果需要针对布尔值处理，完整写法如下：
function handleMessage3(message: string | number | boolean) {
	switch (typeof message) {
		case 'string':
			console.log('message 是字符串的处理方法')
			break
		case 'number':
			console.log('message 是数字的处理方法')
			break
		// 在增加一个处理
		case 'boolean':
			console.log('message 是数字的处理方法')
			break
		default:
			const check: never = message
	}
}

handleMessage3(true)

export {}

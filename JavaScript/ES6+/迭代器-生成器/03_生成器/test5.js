function* bar() {
	yield 'aaa'
	yield 'bbb'
}

function* foo() {
	// 情况一：直接调用，但是只会生成一个生成器对象，而不会执行 bar
	// bar()

	// 情况二：使用 yield 关键字，这样返回的就是一个生成器对象
	// yield bar()

	// 情况三：使用 yiel 关键字，并加上 * 号，表示这个生成器函数也参与当前生成器函数
	yield* bar()
	yield 1
	yield 2
	yield 3
}

const generator = foo()

console.log(generator.next())
console.log(generator.next())
console.log(generator.next())
console.log(generator.next())
console.log(generator.next())

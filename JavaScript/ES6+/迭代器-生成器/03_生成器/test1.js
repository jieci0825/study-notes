function* foo() {
	console.log('第 1 次执行')
	yield 111 // yield 可以指定返回迭代的数据
	console.log('第 2 次执行')
	yield 222
	console.log('第 3 此执行')
	yield 333
}

const generator = foo()
console.log(generator.next())
console.log(generator.next())
console.log(generator.next())
console.log(generator.next())

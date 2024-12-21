function* foo() {
	let data = yield 1
	console.log('1: ', data)
	data = yield 2 + data
	console.log('2: ', data)
	yield 3 * data
}

const generator = foo()

console.log(generator.next())
console.log(generator.next(2))
console.log(generator.next(3))

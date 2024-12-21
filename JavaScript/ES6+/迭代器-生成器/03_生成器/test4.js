function* foo() {
	yield 1
	yield 2
	yield 3
}

const generator = foo()

// console.log(generator.next())
// console.log(generator.return())
// console.log(generator.return(111)) // 也可以传递参数
// console.log(generator.next())

console.log(generator.next())
console.log(generator.throw('aaaaassss'))
console.log(generator.next())

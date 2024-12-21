function sum(n1, n2 = 1, n3 = 1) {
	return n1 + n2 + n3
}

console.log(sum(1, 2))
console.log(sum(1))
console.log(sum(1, undefined, 3))

// 默认参数也可以是一个表达式

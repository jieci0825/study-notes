// 函数定义类型和返回值
//  - 定义参数
// function sum(n1: number, n2: number) {}
//  - 定义返回的类型，语法函数后面 :类型
function sum(n1: number, n2: number): number {
	return n1 + n2
}

console.log(sum(1, 2))

// 定义箭头函数
const sumArrow = (n1: number, n2: number): number => {
	return n1 + n2
}
console.log(sumArrow(11, 22))

// 添加注解
//  - 形参的名称可以不用一样
const sumArrow1: (num1: number, num2: number) => void = (n1: number, n2: number): number => {
	return n1 + n2
}

// 也可以通过类型别名提取出去
type SumArrowType = (num1: number, num2: number) => number

const sumArrow2: SumArrowType = (n1: number, n2: number): number => n1 + n2

function bar() {}

function foo(fn: () => void) {
	fn()
}

foo(bar)

export {}

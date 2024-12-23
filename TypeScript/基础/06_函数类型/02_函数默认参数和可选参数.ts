// 函数参数的默认值
function sum(n1: number = 1, n2: number = 2): number {
	return n1 + n2
}

// 可选参数
//  - 可选参数不能和默认值一起用
//  - 可选类型必须放在必选类型的后面
function sum1(n1: number, n2?: number): number {
	return n1 + (n2 || 0)
}

console.log(sum1(1))

export {}

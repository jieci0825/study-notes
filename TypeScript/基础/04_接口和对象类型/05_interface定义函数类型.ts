// 定义函数类型
interface Fn {
	// 参数name为string，返回一个数字类型的数组
	(name: string): number[]
}

// 此时name只能为string，也不能直接额外添加参数，需要咋接口哪里添加
const foo: Fn = function (name: string) {
	return [1]
}

export {}

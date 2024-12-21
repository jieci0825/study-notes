// 可以精确到数组每个数据的数据类型
const arr: [string, number, boolean, object, []] = ['a', 1, true, {}, []]

// 比如记录一个用户信息
interface IInfo {
	name: string
	age: number
	address: string
}

// 这样看起来如果觉得繁琐，就可以使用元组简写
const info: IInfo = {
	name: '张三',
	age: 20,
	address: '北京'
}

// 元组-简写
const infoArr: [string, number, string] = ['张三', 20, '北京']

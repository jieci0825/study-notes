// 规范：第一个字母大写 或者 I开头之后再接上第一个字母大写
//  - 比如： Type 和 IType
// 这样定义之后不能多一个属性也不能少一个属性
interface Info {
	name: string
	age: number
}

const info: Info = {
	name: '李四',
	age: 18
}

console.log(info)

export {}

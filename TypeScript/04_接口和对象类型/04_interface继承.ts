// 接口继承

// Info 继承 InfoSub，相当于又是一个混合
//  - 也可以继承多个
interface Info extends InfoSub, InfoSub2 {
	name: string
	age: number
	address?: string
	[propName: string]: any
	readonly gender: string
}

interface InfoSub {
	readonly id: number
}

interface InfoSub2 {
	height: string
}

const info: Info = {
	name: '李四',
	age: 18,
	hobby: ['乒乓球', '游戏', '看小说'],
	gender: '男',
	id: 1, // 继承后需要添加id
	height: '180cm'
}

console.log(info)

export {}

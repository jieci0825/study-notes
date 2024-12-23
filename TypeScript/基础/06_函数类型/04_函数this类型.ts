// 函数 this 类型
interface Info {
	user: string
	age: number
	foo: () => void
	// 定义 this
	add: (this: Info, a: any) => string
}

const info: Info = {
	user: '张新川',
	age: 19,
	foo: () => {},
	// 如果需要定义 this，必须是第一个参数定义，注意，要在接口哪里同步定义
	//  - 这样内部使用就会存在提示了
	//  - 传参的时候忽略这个 this 就可以
	add: function (this: Info, a: any) {
		return `${this.user}十年后就${this.age + 10}岁了 @@ ${a}`
	}
}

console.log(info.add(100))

export {}

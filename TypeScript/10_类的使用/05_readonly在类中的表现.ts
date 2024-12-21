class Person {
	// 表示只读
	readonly name: string

	constructor(name: string) {
		// 只有在函数构造器中初始化赋值，后续无法赋值
		this.name = name
	}

	setName(value: string) {
		// this.name = value // 报错：无法为“name”赋值，因为它是只读属性。ts(2540)
	}
}

const person = new Person('张三')
console.log(person.name)

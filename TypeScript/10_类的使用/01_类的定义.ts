class Person {
	// 设置默认值
	// name: string = 'a'
	// age: number = 19
	name: string
	age: number

	constructor(name: string, age: number) {
		// 也可也通过这里来初始化值
		this.name = name
		this.age = age
	}

	eating() {
		console.log(this.name + '正在吃东西')
	}
}

const p = new Person('辛天齐', 20)

p.eating()

export {}

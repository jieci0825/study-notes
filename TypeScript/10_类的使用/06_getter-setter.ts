class Person {
	private _name: string

	constructor(name: string) {
		this._name = name
	}

	get name() {
		return this._name
	}

	set name(newValue: string) {
		this._name = newValue
	}
}

const p = new Person('李四')

p.name = '张三'

console.log(p.name) // 输出 '张三'

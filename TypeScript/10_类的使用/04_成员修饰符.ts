// 在ts中，类的属性和方法支持三种修饰符
//  - public 公共的，表示任何地方可见的公共属性和方法，默认编写的属性和方法就是 public
//  - private 表示私有的，仅仅在当前这个类中可用。无法被继承使用
//  - protected 表示仅在类自身和子类中可见、受保护的属性或者方法

class Info {
	public name: string = '李四'
	private age: number = 20
	protected address: string = '长沙'

	constructor(name: string) {
		this.name = name
	}

	public action() {
		console.log('action~~')
	}
}

class SubInfo extends Info {
	hobby: string[] = ['乒乓球', '游戏']

	constructor(name: string, hobby: string[]) {
		super(name)
		this.hobby = hobby

		console.log(this.name) // 可以访问到父类中的属性，因为是 public 修饰的属性，子类可以继承使用。
		// console.log(this.age) // 报错：属性“age”为私有属性，只能在类“Info”中访问。ts(2341)
		console.log(this.address)
		this.address = '北京'
		console.log(this.address)
	}
}

const subInfo = new SubInfo('张三', ['篮球'])
subInfo.action()
console.log(subInfo.name)
// console.log(subInfo.age) // 属性“age”为私有属性，只能在类“Info”中访问
// console.log(subInfo.address) // 报错：属性“address”受保护，只能在类“Info”及其子类中访问

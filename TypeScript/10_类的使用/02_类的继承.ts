class Person {
	name: string = ''
	age: number = 0

	constructor(name: string, age: number) {
		this.name = name
		this.age = age
	}

	eating() {
		console.log(this.name + '正在吃东西')
	}
}

class Student extends Person {
	sno: string = ''

	constructor(sno: string, name: string, age: number) {
		super(name, age)
		this.sno = sno
	}

	studying() {
		console.log('学号为' + this.sno + '姓名为' + this.name + '的学生正在学习')
	}
}

class Teacher extends Person {
	title: string = ''

	constructor(title: string, name: string, age: number) {
		super(name, age)
		this.title = title
	}

	teaching() {
		console.log(this.title + '教师' + this.name + '正在教学')
	}
}

const p1 = new Teacher('高级', '张三', 35)
const p2 = new Student('SN23021', '李四', 16)

console.log(p1)
console.log(p2)

p1.eating()
p2.eating()

p1.teaching()
p2.studying()

export {}

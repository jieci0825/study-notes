type A<T> = string | number | T

// 如果正常定义 type 为 string 或者 number 的联合类型。就只能是这几个数字
const a: A<boolean> = 'hello'
const a1: A<boolean> = 111
//  - 但是配合泛型，就可以多增加一些类型
const a2: A<boolean> = true // 布尔值也是不会报错的
const a3: A<object> = {}

interface IType<T> {
	value: T // 类型为泛型
}

const o: IType<string> = {
	value: 'hello'
}

const o1: IType<number> = {
	value: 111
}

// 当然也可以多个
type B<T1, T2> = string | T1 | T2

const b: B<boolean, number> = true
const b1: B<boolean, number> = 111

interface IType1<T1, T2, T3> {
	a: T1
	b: T2
	c: T3
}

const o2: IType1<boolean, number, string> = {
	a: true,
	b: 111,
	c: 'hello'
}

// 类的使用也差不多
//  - 单个
class Person<T> {
	x: T
	y: T

	constructor(x: T, y: T) {
		this.x = x
		this.y = y
	}
}

new Person('aaa', 'bbb')

// - 多个
class Info<T1, T2, T3> {
	x: T1
	y: T2
	z: T3

	constructor(x: T1, y: T2, z: T3) {
		this.x = x
		this.y = y
		this.z = z
	}
}

new Info('aaa', 111, true)

export {}

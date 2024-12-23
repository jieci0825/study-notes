// 使用联合类型来约束
//  - 这样的话写起来繁琐不说，而且很难讲具有 length 的类型都穷举完毕
function getLength(arg: string | any[] | { length: number }) {
	return arg.length
}

//  - 比如这个类也具备 length 属性，但是不能传入，因为我们没有定义，还有函数也可能。所以这个方法不好
class Foo {
	a: number
	constructor(a: number) {
		this.a = a
	}
}
console.log('⭐ ~ 输出 ~ foo.length :', Foo.length) // 1

// getLength(new Foo(10)) // 报错: 类型“Foo”的参数不能赋给类型“string | any[] | { length: number; }”的参数。ts(2345)

// ************ 使用泛型进行类型约束 ************

// 定义一个接口，要求具备 length 属性，且返回的类型为 number
interface ILength {
	length: number
}

// 让泛型继承这个接口，就可以规定传入的参数必须具备 length 属性且返回的为数值型
//  - 这样就可以限制一下泛型，避免太过宽泛
function getLength2<T extends ILength>(arg: T): number {
	return arg.length
}

getLength2('123') // 3
getLength2([1, 2, 3]) // 3
getLength2({ length: 8 }) // 8
getLength2(Foo) // 1
getLength2(function () {}) // 0
// getLength2(10) // 报错: 类型“number”的参数不能赋给类型“ILength”的参数。ts(2345)

// 如果不加以约束的话，有些代码就通不过编译，如下：
function bar<T>(n1: T, n2: T) {
	// return n1 + n2 // 报错：运算符“+”不能应用于类型“T”和“T”
	//  - 这也是正常的，因为这个泛型使用的时候还可以传 undefined undefined。 null null
	//  - 这个就是无法相加的，所以会报错
}

// 通过约束一下就可以执行了
function bar1<T extends number>(n1: T, n2: T) {
	return n1 + n2
}

bar1(1, 2) // 3

// *********** keyof ***********

// 约束 key
const obj = {
	name: 'coderjc',
	age: '21',
	gender: '男'
}

// 类似用 obj 的 key 做了一个联合类型
type key = keyof typeof obj // 'name' | 'age' | 'gender'

// 所以这里把泛型 T 的 key 作为 泛型 K 的类型，就会保证 obj[key] 获取是成立的
function func1<T extends object, K extends keyof T>(obj: T, key: K) {
	console.log(obj[key])
}

export {}

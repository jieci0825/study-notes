// 类型断言使用场景

class Animal {}

class Dog extends Animal {
	handleCry() {
		console.log('Woof!')
	}
}

const dog = new Dog()

// 定义的类型是 Animal 这个父类
function foo(a: Animal) {
	// 这里虽然传入的是 dog 实例，上面存在 handleCry 方法，但是 ts 并不知道。只知道是 Animal
	// 	- 这里会报错，因为父类 Animal 上没有 handleCry 方法
	// a.handleCry() // 类型“Animal”上不存在属性“handleCry”。ts(2339)

	// 就可以使用类型断言
	//  - 把一个宽泛的类型定义为一个具体的类型
	;(a as Dog).handleCry() // 这样就不会报错了
}

// 传入的是 dog 这个子类，因为继承自 Animal 类，所以也不会报错
foo(dog)

export {}

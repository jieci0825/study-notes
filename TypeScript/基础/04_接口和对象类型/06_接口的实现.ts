interface IEat {
	eating: () => void
}

interface ISwim {
	swimming: () => void
}

// 类实现接口
class Animal {}

// 继承：只能单继承
// 接口：可以实现多个接口
//  - 实现了接口，类中就必须定义接口里面的类型
class Fish extends Animal implements IEat, ISwim {
	constructor() {
		super()
	}

	eating(): void {
		console.log('eating')
	}

	swimming(): void {
		console.log('swimming')
	}
}

// 形状
//  - 抽象类
abstract class Shape {
	// 抽象方法必须在抽象类中
	//  - 抽象方法允许没有方法体
	abstract getArea(): number
}

class Rect extends Shape {
	private width: number
	private height: number
	constructor(width: number, height: number) {
		super()
		this.width = width
		this.height = height
	}

	// 当一个类继承自抽象类的时候，必须实现抽象方法
	getArea(): number {
		return this.width * this.height
	}
}

class Circle extends Shape {
	private radius: number
	constructor(radius: number) {
		super()
		this.radius = radius
	}

	getArea(): number {
		return Math.PI * this.radius ** 2
	}
}

function makeArea(shape: Shape) {
	return shape.getArea()
}

console.log(makeArea(new Rect(3, 4))) // 12
console.log(makeArea(new Circle(5))) // 78.53981633974483

// 抽象类不能被实例化
// makeArea(new Shape() // 错误：类型“Shape”不实现类型“Shape”。

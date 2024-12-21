// 接受两个参数，可以实现继承
//  - 参数一：子类的构造函数
//  - 参数二：父类的构造函数
function helperInherit(child, parent) {
	// 1、第一种：直接将父类的原型赋值给子类的原型对象
	//  - 但是会导致父类的原型污染
	// child.prototype = parent.prototype

	// 2、第二种：通过中间对象
	//  - 2.1：创建一个对象，这个对象的隐式原型指向父类的原型对象
	// const obj = Object.create(parent.prototype)
	// 在将这个对象赋值给子类的原型，以后子类独有的方法都会加在这个对象上面不会污染父类
	// child.prototype = obj

	//  - 2.2：直接使用对象，原型对象可以使用新方法获取(不推荐)
	// const obj = {}
	// obj.__proto__ = parent.prototype

	//  - 2.3：还可以使用函数达到这个效果，兼容性更好
	//  - 创建一个函数
	//  - (也可也使用闭包让 Temp 这个函数只创建一次)
	const Temp = function () {}
	// 让函数的原型指向父类的原型
	Temp.prototype = parent.prototype
	// 使用 Temp 创建一个对象赋值给子类的原型，又因为我们将 Temp 的原型指向了父类的原型
	//  - 所以我们通过 Temp 创建的对象的隐士原型其实是指向的父类原型对象，又因为我们把这个创建的对象赋值给了子类的原型
	//  - 因此子类的原型还是可以通过 __proto__ 查找原型链的方式使用父类的方法
	child.prototype = new Temp()

	// -------------------------------------------
	// 此时 constructor 属性不存在，但是原型链查找会找到父类，所以重新定义
	child.prototype.constructor = child
	// 还会加上一个属性 super(超级) 表示父类，但是是保留字，无法作用属性和变量名称，所以修改一下
	//  - 可以方便子类获取父类的原型-但是不实用-不过标准模式(圣杯模式)是指向父类原型，
	// child.prototype.uber = parent.prototype
	//  - 可以直接指向父类的构造函数，这样在子类内部就可以直接使用 this.uber 去调用父类
	//    - 就可以不使用 call 绑定 this 调用父类
	child.prototype.uber = parent
}

function A(name, age) {
	this.name = name
	this.age = age
}
A.prototype.sayHello = function () {
	console.log('hello~')
}

function B(name, age, address) {
	// 借用一下 A 函数的赋值过程
	// A.call(this, name, age)
	this.uber(name, age)
	this.address = address
}

function C(name, age, money) {
	// 借用一下 A 函数的赋值过程
	A.call(this, name, age)
	this.money = money
}

// 需要在给 C 绑定自己的方法前实现继承
helperInherit(C, A)

C.prototype.howMuchMoney = function () {
	console.log(`我有${this.money}元`)
}

// 需要在给 B 绑定自己的方法前实现继承
helperInherit(B, A)

B.prototype.distribution = function () {
	console.log(`可以给你配送到家，你的地址是：${this.address}`)
}

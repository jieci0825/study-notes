function Person(firstName, lastName) {
	this.firstName = firstName
	this.lastName = lastName
	this.fullName = `${firstName} ${lastName}`
}

// 两种调用方式
//  - 普通函数直接调用
//  - new 调用

const p1 = new Person('张', '三')
console.log(p1.fullName) // 输出: "张 三"

// 普通函数直接调用
const p2 = Person('李', '四')
console.log(p2) // 输出: undefined

// 而这种两者调用方式，就会对函数的行为产生影响，因为函数的 this 指向会发生变化。

// 因此过去会使用 if(!(this instanceof Person)) throw Error("需要使用 new 调用")来判断函数是否被 new 调用

// es6 提供了一个 api。在函数内部，可以判断该函数是否使用了 new 调用

// new.target: 此表达式可以判断是否使用 new 调用，如果没有使用 new 调用，则返回 undefined，如果使用了 new 调用，则返回该 new 调用的构造函数

// 函数参数是一个对象

interface User {
	name: string
	age: number
}

// 参数为对象，返回值也是这个对象
function foo(user: User): User {
	return user
}

foo({ name: 'Alice', age: 30 })

// 也可直接定义
//  - description 可选参数
function bar(product: { name: string; description?: string; price: number }) {
	console.log('⭐ ~ 输出 ~ product:', product)
}

bar({ name: '火焰仙', description: '海水鱼', price: 998 })
bar({ name: '火焰仙', price: 998 })

export {}

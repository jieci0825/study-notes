// 类型参数化
//  - 在定义这个函数时候不决定这个参数类型
//  - 而是让调用者以参数的形式告知，这里函数的参数应该是什么
// 使用方式就是写一个 <Type> 或者简写 <T>
function foo<Type>(n1: Type): Type {
	return n1
}

// 调用时决定类型
foo<number>(1)
foo('1') // 也可以不写，自动进行类型推导
foo([])

// 也可以看做是一个动态类型
function bar<T>(a: T, b: T): Array<T> {
	return [a, b]
}

// 会根据类型推导自动的计算出类型
bar(1, 2)
bar('1', '2')
bar({ name: 'zs' }, { name: 'ls' })
// 使用同一种泛型比起 any 可以多一些约束，比如 a 和 b 是必须一样的类型
// bar(1, '2') // 报错：类型“string”的参数不能赋给类型“number”的参数

export {}

// 让一个参数变为可选类型
//  - 一个参数一个可选类型的时候，本质上是表示的是这个参数是 类型|undefined 的联合类型
function foo(id?: string | number) {
	console.log('⭐ ~ 输出 ~ id:', typeof id, id)
}

foo('123')
foo(123)
foo()

// 联合类型直接写一个 undefined 的时候，调用函数的时候必须要传递参数的，哪怕传的是 undefined
function bar(id: string | undefined) {
	console.log('⭐ ~ 输出 ~ id:', typeof id, id)
}

bar('123')
// bar() // 报错：应有 1 个参数，但获得 0 个。ts(2554)

export {}

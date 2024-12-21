// 接收的参数可能是 string 或者 number

function foo(id: string | number) {
	console.log('⭐ ~ 输出 ~ id:', typeof id, id)
}

foo('123')
foo(123)

export {}

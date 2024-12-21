// 泛型也可以接受多个参数
//  - 返回的数组就是联合类型
function foo<T, E, P>(arg1: T, arg2: E, arg3: P): Array<T | E | P> {
	return [arg1, arg2, arg3]
}

foo<string, number, object>('aaa', 111, {})

// 泛型也可以接受默认值，不传的时候使用默认类型，传的时候使用值的类型
function bar<T = string, K = number>(arg1: T, arg2: K): Array<T | K> {
	return [arg1, arg2]
}

bar('1', 1) // function bar<string, number>(arg1: string, arg2: number): (string | number)[]

bar(true, 'aaa') // function bar<boolean, string>(arg1: boolean, arg2: string): (string | boolean)[]

export {}

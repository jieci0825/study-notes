// 1、定义一个数组，数组的数据需要为number
//  - number 表示类型 [] 表示数组
const arr: number[] = [1, 2, 3, 4, 5]
//  - string 类型
const arr2: string[] = ['a', 'b', 'c']

// 2、使用泛型的方式定义
const arr3: Array<boolean> = [true, false, true]

// 3、定义数组的数据为对象
interface X {
	name: string
	age: number
}

const arr4: Array<X> = [{ name: '张三', age: 18 }]
const arr5: X[] = [{ name: '李四', age: 20 }]

// 4、定义二维数组
const arr6: number[][] = [
	[1, 2, 3],
	[4, 5, 6]
]
//  - 泛型的方式
const arr7: Array<Array<number>> = [[1], [2], [3]]

// 5、任意类型的数组
const arr8: any[] = [1, 'a', true, {}]

// 6、定义元组
//  - 跟填写的数据一一对应，写起来比较繁琐
const arrr9: [string, number, boolean, object, []] = ['a', 1, true, {}, []]

// 7、剩余参数
function foo(...args: any[]): void {}

// 8、arguments
function foo2(...args: any[]): void {
	// 内置类型 IArguments，定义 arguments
	const a: IArguments = arguments
}

// 9、数组里面的数据为字符串或者数字
const arr10: Array<number | string> = [1, 'aaa', 111]

export {}

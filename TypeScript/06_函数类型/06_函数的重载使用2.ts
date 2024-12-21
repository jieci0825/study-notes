/* 
	更改需求：
		- 当传递的参数为 number 时，是两个值相加
		- 当传递的参数为 string 时，时两个字符串的长度相加
*/

function add(a: number, b: number): number

function add(a: string, b: string): number

// 具体的实现方法
function add(a: any, b: any): any {
	if (typeof a === 'number' && typeof b === 'number') {
		return a + b
	}
	return a.length + b.length
}

console.log(add(1, 2)) // 输出 3

console.log(add('aaa', 'bbb')) // 输出 6

export {}

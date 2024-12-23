// 函数重载的简单实现

// 定义数值型的函数入口
function add(a: number, b: number): number
// 定义字符串型的函数入口
function add(a: string, b: string): string

// 具体的实现方法
function add(a: any, b: any): any {
	return a + b
}

// 在使用时，如果传递的参数，在函数重载的入口中找到对应的类型匹配成功，就会执行实际的方法体
//  - 如果类型不匹配是无法执行的，哪怕我这里写了 add 函数
console.log(add(1, 2)) // 输出 3

console.log(add('a', 'b')) // 输出 'ab'

// console.log(add(true, true)) // 报错，报错如下：
/* 
	没有与此调用匹配的重载。
  第 1 个重载(共 2 个)，“(a: number, b: number): number”，出现以下错误。
    类型“boolean”的参数不能赋给类型“number”的参数。
  第 2 个重载(共 2 个)，“(a: string, b: string): string”，出现以下错误。
    类型“boolean”的参数不能赋给类型“string”的参数。ts(2769)
*/

export {}

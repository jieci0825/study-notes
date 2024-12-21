/* 
  形参和 es6 中的 let、const 声明的变量一样，存在暂时性死区。
*/

// 情况一：先声明了 x，后声明了 y，所以可以正常使用默认值
function foo(x, y = x) {
	console.log(x, y) // 2 2
}
foo(2)

// 情况二：y 后声明，但是提前使用，就会报错 Cannot access 'y' before initialization
function foo(x = y, y) {
	console.log(x, y) // 2 2
}
// 参数一使用默认值，参数二传递值
foo(undefined, 2)

// Tips：不要使用 let 或者 const 在函数内部重复声明形参的变量名称

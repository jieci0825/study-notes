'use strict' // 开启严格模式

/* ------ 非严格模式 ------ */
// arguments 和形参是不脱离的，形参改变会影响 arguments
// function foo(a, b) {
// 	console.log(arguments[0], arguments[1]) // 1 1
// 	a = 2
// 	b = 4
// 	console.log(arguments[0], arguments[1]) // 2 4
// }
// foo(1, 1)

/* ------ 严格模式下，arguments 和形参是独立的，改变形参不会影响 arguments ------ */
// Tips: 只要参数添加默认值，就会自动变成严格模式下 arguments 和形参是独立的规则
function foo(a, b) {
	console.log(arguments[0], arguments[1]) // 1 1
	a = 2
	b = 4
	console.log(arguments[0], arguments[1]) // 1 1
}
foo(1, 1)

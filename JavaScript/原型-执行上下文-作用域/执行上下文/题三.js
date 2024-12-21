console.log(foo)
var foo = 'A'
console.log(foo)
var foo = function () {
	console.log('B')
}
console.log(foo)
foo()
function foo() {
	console.log('C')
}
console.log(foo)
foo()
/* 
GO:{
  foo: undefiend, (var foo = 'A', 提取变量 foo 赋值为 undefined)
  foo ---> undefiend, (var foo = func, 提取变量 foo 赋值为 undefined)
  foo ---> fn, (foo 字面量方法创建函数，覆盖 undefined 为 fn)
}
// 确定上下文阶段结束，开始执行
1、console.log(foo) ---》 内部输出C的fn
foo = 'A'
2、console.log(foo) ---》 A
foo = fn(console.log(B))
3、console.log(foo) ---》 内部输出B的fn
4、调用 foo， ---》 B
5、foo 没有被重新赋值 console.log(foo) ---》 内部输出B的fn
6、调用 foo， ---》 B
*/

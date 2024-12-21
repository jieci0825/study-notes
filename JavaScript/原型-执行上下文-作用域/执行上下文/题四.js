var foo = 1
function bar(a) {
	var a1 = a
	var a = foo
	function a() {
		console.log(a)
	}
	a1()
}
bar(3)
/* 
GO:{
   foo:  undefined,
   bar: fn
}
foo = 1

bar 的 VO:{
   a:3,（形参）
   a1: undefined, （变量）
   a: undefined (变量和形参同名忽略) 
   a:fn (字面量函数和形参同名，覆盖形参)
}
// 确定完成的 bar 函数的 V0
VO:{
   a1: undefined,
   a: fn
}

a1 = a ，(a1被赋值为 fn)
a = foo，(bar中的VO没有 foo，去GO获取，foo 为 1，a 被赋值为 1)
a1()调用了
创建 a1 函数的执行上下文
a1的VO:{
  // 没有形参-变量-字面量
}
执行 console.log(a) 此时 a1 函数的 VO 没有 a，往外层查找 a = 1
最后 console.log(a) 打印 1
*/

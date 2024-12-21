var a = 1
function b() {
	console.log(a) // fn
	a = 10
	return
	function a() {}
}
b()
console.log(a) // 1
/* 
GO:{
  a:undefined,
  b:fn
}
a = 1
b的VO:{
  a:undefined (变量 a 提取 赋值为 undefined)
  // 存在 function a() {} 字面量写法，
  a ---> 被覆盖为 fn（此时函数都没有执行，处于确定上下文阶段，return 无效）
}
console.log(a) ---> fn
a = 10 ---> b的 VO 中的 a 修改为 10
console.log(a) ---> 输出 GO 中的 a，为 1
*/

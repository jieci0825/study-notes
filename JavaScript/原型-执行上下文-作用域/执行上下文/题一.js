var foo = 1
function bar() {
	console.log(foo)
	if (!foo) {
		var foo = 10
	}
	console.log(foo)
}
bar()
/* 
	GO:{
		foo:undefined,
		bar:fn
	}
	执行 foo = 1
	bar VO:{
		foo:undefined // 无论在哪里，var 定义了就会被提出
	}
	输出第一个 foo 的时候 VO 中 foo 为 undefined，所以是 undefined
	进行判断 foo 为 undefined，取反，执行 foo = 10，此时 VO 找那个的 foo 为 10
	所以输出第二个 foo 为 10
*/

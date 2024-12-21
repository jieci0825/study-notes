const username = '李白'
const text = '杯莫停'

const str = myTag`大河之剑天上来！--《${username}》。将近酒，${text} !`

function myTag(parts, ...values) {
	// parts 是一个数组，包含了所有模板字符串中固定字符
	console.log(parts) // [ '大河之剑天上来！--《', '》。将近酒，', ' !' ]

	// 后面的剩余参数就是模板字符串中的变量的值
	console.log(values) // [ '李白', '杯莫停' ]

	// 通过这个就可以来自定义模板，比如返回一个数组
	return [...parts, ...values]
}

console.log(str) // [ '大河之剑天上来！--《', '》。将近酒，', ' !', '李白', '杯莫停' ]

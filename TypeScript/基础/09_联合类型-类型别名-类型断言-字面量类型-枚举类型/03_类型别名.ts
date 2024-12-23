// 这个类型可以提取出来，并取一个别名
//  - type 关键字用于定义类型别名
type MessageType = string | number | undefined

function func(message?: MessageType) {
	console.log('⭐ ~ 输出 ~ message:', typeof message, message)
}

func('123')
func(123)
func()

export {}

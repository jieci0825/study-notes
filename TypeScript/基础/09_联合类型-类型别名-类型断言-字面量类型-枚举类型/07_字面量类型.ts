// 可以赋值为一个 string
// let message: string = 'hello'

// 更准确的做法是直接赋值这个字面量
let message: 'hello' = 'hello'
// message = 'world' // 报错：不能将类型“"world"”分配给类型“"hello"”。ts(2322)

let num: 123 = 123
// num = 321 // 报错：不能将类型“321”分配给类型“123”。ts(2322)

// 字面量类型一般和联合类型搭配使用
const align: 'left' | 'right' | 'center' = 'left'

// 类型别名
type AlignType = 'left' | 'right' | 'center'

export {}

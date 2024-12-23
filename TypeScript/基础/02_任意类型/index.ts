// any 任意类型 unknown 不知道的类型
let a: any = 10 // 可以复制为任何值
a = 'aaa'
a = []
a = {}

// 定义 unknown 类型的无法赋值给除 any 外的给其他类型
let b: unknown = 1

let c: Object = {}

// c = b // 不能将类型“unknown”分配给类型“Object”
console.log(a)

// unknown 类型也不能读取任何属性
const e: unknown = { description: '哈哈哈' }
// e.description // 报错 “e”的类型为“未知”
// 因为这样调用会导致报错和其他特性 unknown 比 any 更加的安全

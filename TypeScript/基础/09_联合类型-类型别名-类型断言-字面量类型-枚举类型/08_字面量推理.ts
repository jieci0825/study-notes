type Method = 'GET' | 'POST' | 'PUT' | 'DELETE'

function request(url: string, method: Method) {}

// const options = {
// 	url: 'https://api.example.com',
// 	method: 'GET'
// }

// options.method = 'aaa' // 修改

// request(options.url, options.method) // 报错：类型“string”的参数不能赋给类型“Method”的参数
//  - 这是因为直接这样写的话，这个 options.method 会存在传递给这个函数时，就被修改了值，就不是 Method 规定的值

// 正确的流程是
// 1、定义一个类型
type Request = {
	url: string
	method: Method
}

// 2、给这个对象定义类型
// const options: Request = {
// 	url: 'https://api.example.com',
// 	method: 'GET'
// }

// 3、或者直接类型断言
// const options = {
// 	url: 'https://api.example.com',
// 	method: 'GET' as Method // 类型断言
// }

// 4、也可以直接定为 const 变为只读的
const options = {
	url: 'https://api.example.com',
	method: 'GET'
} as const

request(options.url, options.method) // 此时就正常了

// 也可以直接把这个断言加载使用时
request(options.url, options.method as Method)

export {}

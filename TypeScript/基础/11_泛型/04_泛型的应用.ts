// 在配合接口请求的时候，可以通过泛型传入配置的接口类型规定返回的数据

const request = {
	// 返回值是一个 Promise
	//  - 且这个 Promise 提示：泛型类型“Promise<T>”需要 1 个类型参数
	//  - 所以可以把这个泛型传递过去，表示这个 Pormise 返回的结果是受这个泛型约束的
	get<T>(url: string): Promise<T> {
		// return fetch(url).then(response => response.json() as Promise<T>)
		return new Promise((resolve, reject) => {
			// xhr 类型注解就是这个 XMLHttpRequest 类
			let xhr: XMLHttpRequest = new XMLHttpRequest()
			xhr.open('GET', url)

			xhr.onreadystatechange = () => {
				if (xhr.readyState === 4) {
					if (xhr.status >= 200 && xhr.status < 300) {
						resolve(JSON.parse(xhr.responseText))
					}
				}
			}

			xhr.send(null)
		})
	}
}

// data.json 的数据为
/* 
{
	"code": 0,
	"message": "hello world!"
}
*/
// 基于此可以定义接口
interface ResponseData {
	code: number
	message: string
}

// 使用的时候传入接口类型
request.get<ResponseData>('./data.json').then(res => {
	// 这样定义之后，也会出现属性的自动提示
	console.log(res.code, res.message)
})

export {}

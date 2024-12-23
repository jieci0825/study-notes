/**
 * 有时候数据从后端获取，里面的属性杂七杂八，我们不一定都需要用到，可以使用**索引签名**
 */

interface Info {
	name: string
	age: number
	address?: string // 可选类型
	// 索引签名，这个表示【任意属性】
	//  - key 是 string类型
	//  - value 是 any 类型，未知的，这个如果定义为 string 的话，就表示这个接口内的所有属性都要是string类型，改为其他类型同理
	[propName: string]: any
	readonly gender: string // 只读属性
}

const info: Info = {
	name: '李四',
	age: 18,
	hobby: ['乒乓球', '游戏', '看小说'],
	gender: '男'
}

// info.gender = '女' // 无法为“gender”赋值，因为它是只读属性

console.log(info)

export {}

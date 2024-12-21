interface Info {
	name: string
	age: number
}

// interface 遇到重名的情况会自动重合，作为一个 interface
interface Info {
	address: string
}

const info: Info = {
	name: '李四',
	age: 18,
	address: '上海'
}
console.log(info)

export {}

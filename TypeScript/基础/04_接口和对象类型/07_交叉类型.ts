// 交叉类型
interface Pople {
	name: string
	age: number
}

interface Man {
	gender: string
}

// 交叉类型使用 & 链接
const coderjc = (man: Pople & Man): void => {
	console.log(man.name, man.age, man.gender)
}

// coderjc({ name: 'coderjc', age: 18 }) // 报错，提示少了 gender 属性
coderjc({ name: 'coderjc', age: 18, gender: 'male' })

export {}

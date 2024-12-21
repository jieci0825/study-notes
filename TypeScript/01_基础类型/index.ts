const str: string = 'coderjc'

const num: number = 123

const flag: boolean = true

// 默认 foo 是没有添加类型注解的
let foo = 'hello world'
// foo = 123 // 提示：不能将类型“number”分配给类型“string”
// ** 这是因为 ts 具有类型推导(推断) **
//  - 在赋值的时候赋值的事 string 类型，所以默认这个变量具备 string 类型的类型注解
//  - 默认情况下进行赋值时，会将赋值的值的类型，作为前面标识符的类型，这个过程称之为 类型推导(推断)

// 其他类型也一样
// ...
console.log(str, num, flag)

// 严格模式下 null 类型不允许被赋值 undefined
// undefined 类型也不能被赋值为 null 类型
const n: null = null
const u: undefined = undefined

// void 类型
let v1: void = undefined
let v2: void = null // 不能将类型“null”分配给类型“void”，需要关闭严格模式

// 如果一个函数没有返回值可以设置 void
function fn(): void {
	// return 1 // 设置 void 之后就不能返回任何值了，包括 null
	return
}

// ts 默认在当前工作环境下是一个模块，如果在这个文件定义了 const name，下一个当前工作环境下就不能定义 name 属性了
// 如果需要每个都是单独的模块，直接 export {} 即可
//  - 这样每个 ts 文件就会当成一个单独的模块
export {}

// 执行 tsc -init，知道配置项 strict 设置为 false 关闭严格模式

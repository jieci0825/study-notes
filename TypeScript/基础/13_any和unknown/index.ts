// ***** case *****
const value: number[] = [1, 2, 3]
// any 类型可以被任意类型的数据再次赋值
let data: any = value
// 也可以赋值给其他类型
const a: number = data

// ***** case *****
// unknown 一般是作为函数参数使用，用来接受任意参数的变量实参，但是在函数内部只用于再次传递或输出结果，不获取属性的场景
//  - 即当你这个参数在这个函数内部只是简单的传递，并不是获取属性的时候，可以使用 unknown
// example:
function ref(value?: unknown) {
    return createRef(value)
}
interface RefInstance {
    name: string
}
function createRef(value?: unknown) {
    const instance: RefInstance = {
        name: 'ref'
    }
    return instance
}

// ***** case *****

export {}

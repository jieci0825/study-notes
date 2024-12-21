// ******************** Object ********************
// 在 js 的原型中 Object 表示所有对象的顶层，也就表示是包含所有类型
//  - 表示包含所有类型的 Object
let a: Object = 123
let a1: Object = '123'
let a2: Object = false
let a3: Object = []
let a4: Object = {}
let a5: Object = function () {}

// ******************** object ********************
// object 表示原始的对象类型，也就是引用类型，比如 [] {} function
// let b: object = 1 // 不能将类型“number”分配给类型“object”
// ...
let b: object = {}
let b1: object = []
let b2: object = function () {}

// ******************** {} ********************
// 这个就类似于 new Object 表示就和最开始的 Object 一样

export {}

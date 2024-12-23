// 类型断言 as
//  - as 是关键字

// 默认返回的类型是 Element 或者 null
const el: Element | null = document.querySelector('.img')

// 可以使用类型断言更加精确这个类型
//  - el1:类型注解 这个类型注解可写可不写，会自动推导
const el1 = document.querySelector('.img') as HTMLImageElement

export {}

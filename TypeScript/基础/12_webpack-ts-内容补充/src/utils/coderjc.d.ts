// declare 关键字用于声明
// module 表示模块
// declare module 表示声明一个模块
declare module 'lodash' {
	// 在这里就可以声明 lodash 的一些方法
	export function join(...args: any[])
}

// 声明变量 coderName
declare let coderName

declare function jcFoo(): void

// 还可以继续声明其他类型，如 calss

// 声明文件
//  - 意思是把 .png 结尾的文件可以当成一个模块使用
declare module '*.png'

// 声明命名空间
declare namespace $ {
	export function foo() {
		console.log('namespace 的 foo 方法')
	}
}

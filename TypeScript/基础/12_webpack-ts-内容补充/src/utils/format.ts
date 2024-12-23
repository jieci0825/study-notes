// 命名空间
//  - 可以解决一个模块内同名问题

// 如果命名空间要在外部使用，也是用 export 导出
export namespace time {
	// 格式化时间
	export function format(value: string) {
		return '2024-01-31'
	}

	// 命名空间内部如果需要再外部访问，需要使用 export 导出
	function foo() {}
}

export namespace price {
	// 格式化价格
	export function format(value: string) {
		return '99.99'
	}
}

// 在本文件内部获取
time.format
price.format

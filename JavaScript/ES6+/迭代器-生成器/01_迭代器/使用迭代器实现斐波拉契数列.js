function createFeiboInterator() {
	let prev1 = 1,
		prev2 = 1, // 前面两位的值
		n = 1 // 取到了第几位
	return {
		next() {
			let value
			if (n <= 2) {
				// 前面两次 value 固定为 1
				value = 1
			} else {
				value = prev1 + prev2
			}

			const result = {
				value: value,
				done: false // 为 false 表示永远不会结束
			}
			prev1 = prev2
			prev2 = result.value
			n++
			return result
		}
	}
}

const interator = createFeiboInterator()

console.log(interator.next()) // { value: 1, done: false }
console.log(interator.next()) // { value: 1, done: false }
console.log(interator.next()) // { value: 2, done: false }
console.log(interator.next()) // { value: 3, done: false }
console.log(interator.next()) // { value: 5, done: false }
console.log(interator.next()) // { value: 8, done: false }

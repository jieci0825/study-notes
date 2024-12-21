const arr = [1, 2, 3, 4, 5]

function* foo(arr) {
	for (const item of arr) {
		yield item
	}
}

const generator = foo(arr)
// console.log(generator.next())
// console.log(generator.next())
// console.log(generator.next())
// console.log(generator.next())
// console.log(generator.next())
// console.log(generator.next())

function* createFeiboInterator() {
	let prev1 = 1,
		prev2 = 1, // 前面两位的值
		n = 1 // 取到了第几位
	while (true) {
		let value
		if (n <= 2) {
			value = 1
		} else {
			value = prev1 + prev2
			prev1 = prev2
			prev2 = value
		}
		n++
		yield value
	}
}

const fb = createFeiboInterator()
console.log(fb.next())
console.log(fb.next())
console.log(fb.next())
console.log(fb.next())
console.log(fb.next())
console.log(fb.next())
console.log(fb.next())

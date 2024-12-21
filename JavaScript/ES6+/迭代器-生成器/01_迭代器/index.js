const arr = [1, 2, 3, 4, 5]

function createInterator(arr) {
	let index = 0
	return {
		next() {
			const result = { value: arr[index], done: index >= arr.length }
			index++
			return result
		}
	}
}

const interator = createInterator(arr)

let data = interator.next()
console.log(data)
while (!data.done) {
	data = interator.next()
	console.log(data)
}

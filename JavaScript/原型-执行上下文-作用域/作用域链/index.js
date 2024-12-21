var a = 1
function A() {
	console.log(a)
}

function S() {
	var a = 5
	var B = A
	B()
}

S()

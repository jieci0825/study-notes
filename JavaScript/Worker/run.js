const box = document.querySelector('.box')

const max = 600
let x = 0
const step = 3

let dir = 'right'
setInterval(() => {
	// 获取 box 的距离视口左侧的位置
	const boxRect = box.getBoundingClientRect()
	const boxLeft = boxRect.left
	if (boxLeft >= max) {
		dir = 'left'
	} else if (boxLeft <= 0) {
		dir = 'right'
	}
	if (dir === 'right') {
		box.style.left = (x += step) + 'px'
	} else {
		box.style.left = (x -= step) + 'px'
	}
}, 17)

const jpg = require('../assets/1.jpg')
console.log(jpg)
const flag = true

if (flag) {
	const img = document.createElement('img')
	img.src = jpg.default
	document.body.appendChild(img)
}

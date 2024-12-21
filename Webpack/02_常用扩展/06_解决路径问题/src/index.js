import jpg from '../assets/1.jpg'

console.log(jpg)
const flag = true

if (flag) {
	const img = document.createElement('img')
	img.src = jpg
	document.body.appendChild(img)
}

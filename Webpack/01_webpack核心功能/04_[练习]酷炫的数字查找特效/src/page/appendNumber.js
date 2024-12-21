import { generateColor } from '../utils'
import { _getRandom } from '../utils/generateColor'

const divContainer = document.querySelector('#divContainer')
const divCenter = document.querySelector('#divCenter')

// 放入页面中的方法
export default function (n, isPrime) {
	const span = document.createElement('span')
	span.innerText = n
	if (isPrime) {
		const color = generateColor()
		span.style.color = color
		generateCenterPrimeNumber(n, color)
	}
	divContainer.appendChild(span)
	generateCenterNumber(n)
}

// 生成页面中间放大显示的数字方法
function generateCenterNumber(n) {
	divCenter.innerText = n
}

// 生成页面中间放大显示的素数方法
function generateCenterPrimeNumber(n, color) {
	const div = document.createElement('div')
	div.className = 'center'
	div.style.color = color
	div.innerText = n
	document.body.appendChild(div)
	// 加入div后强行渲染-读取某个元素的位置或尺寸信息即可
	// 	- 此时强行渲染但是不会进行绘制，所以用户无法感知这个变化
	//  - 如果不读取属性让渲染主线程渲染一次，那么这个div的初始样式就会被设置为后续的位置和透明度
	//  - 就不会变成我们所期望的那样从初始样式过渡到预定样式
	getComputedStyle(div).left
	div.style.transform = `translate(${_getRandom(-200, 200)}px,${_getRandom(
		-200,
		200
	)}px)`
	div.style.opacity = 0
}

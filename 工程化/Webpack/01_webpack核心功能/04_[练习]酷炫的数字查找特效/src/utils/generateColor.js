const colors = [
	'#ff9900',
	'#ccff33',
	'#99ff66',
	'#33ffff',
	'#ff3333',
	'#00fa9a'
]

// 获取一个随机整数
export function _getRandom(min, max) {
	return Math.floor(Math.random() * (max - min) + min)
}

/**
 * 返回一个颜色数组中一个随机的颜色值
 */
export default function () {
	const num = _getRandom(0, colors.length)
	return colors[num]
}

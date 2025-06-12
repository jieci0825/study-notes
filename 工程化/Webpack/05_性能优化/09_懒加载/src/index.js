const btn = document.querySelector('button')

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

btn.onclick = async function () {
	// /* webpackChunkName: "lodash" */ 可以指定名称这个单独打包后的 chunk 名称
	const _ = await import(/* webpackChunkName: "lodash" */ './utils')
	const result = _.chunk(arr, 3)
	console.log(result)
}

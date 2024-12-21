import lodash from 'lodash'
import jQuery from 'jquery'
console.log(jQuery)
;(function () {
	const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
	const result = lodash.chunk(arr, 3)
	console.log(result)
})()

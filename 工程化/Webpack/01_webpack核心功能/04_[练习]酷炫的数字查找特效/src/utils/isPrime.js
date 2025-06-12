// 设计
//  - 假设判断数字5，那么除开 1 和自身，范围值为 2~4
//  - 我们只需要循环2~4，如果被整除了，就表示是一个素数

/**
 * 判断一个数是否是素数
 * 素数：仅能被 1 和自身整除的数
 * @param {Number} n
 * @returns {Boolean}
 */
export default function (n) {
	// 2 是最小的素数，小于2 都不是素数
	if (n < 2) return false
	for (let i = 2; i < n; i++) {
		// 如果 n % i 余数为 0，表示这个数就不是素数，可以被除 1 以外和自身的数整除
		if (n % i === 0) {
			return false
		}
	}
	return true
}

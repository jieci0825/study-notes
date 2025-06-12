import isPrime from './isPrime'

export default class NumberTimer {
	constructor(duration = 500) {
		this.duration = duration // 生成数组间隔时间
		this.count = 1 // 初始数值
		this.timerId = null
		this.onNumberCreated = null
	}

	// 开始生成数字
	start() {
		// 如果存在上一个计时器就不做处理
		if (this.timerId) {
			return
		}
		this.timerId = setInterval(() => {
			this.onNumberCreated &&
				this.onNumberCreated(this.count, isPrime(this.count))
			this.count++
		}, this.duration)
	}

	// 停止生成数字
	stop() {
		clearInterval(this.timerId)
		this.timerId = null
	}
}

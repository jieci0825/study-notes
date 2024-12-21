import { NumberTimer } from '../utils'
import appendNumber from './appendNumber'

var isStart = false

const n = new NumberTimer(100)

n.onNumberCreated = function (num, isPrime) {
	appendNumber(num, isPrime)
}

window.onclick = function () {
	if (isStart) {
		n.stop()
		isStart = false
	} else {
		n.start()
		isStart = true
	}
}

// 类型别名
type Direction = 'Left' | 'Right' | 'Top' | 'Bottom'

// 枚举
enum DirectionEnum {
	LEFT,
	RIGHT,
	TOP,
	BOTTOM
}

function turnDirection(direction: DirectionEnum) {
	console.log(direction) // 在js种实际输出的是 0 1 2 3
	/* 
    表示在内部默认实际是做了赋值的
    enum DirectionEnum {
	    LEFT = 0,
	    RIGHT = 1,
	    TOP = 2,
	    BOTTOM = 3
    }

    如果需要改变也可以改变
    enum DirectionEnum {
	    LEFT = 100,
	    RIGHT = 200,
	    TOP = 300,
	    BOTTOM = 400
    }

    但是如果只是改变第一个，后面的会递增
    比如第一个改为 100，后面的不改就是 101、102、103

    如果只改最后一个为 100，前面的三个还是 0、1、2

    当然也可以赋值为一个字符串，不止于数字
  */

	switch (direction) {
		case DirectionEnum.LEFT:
			console.log('Turn left')
			break
		case DirectionEnum.RIGHT:
			console.log('Turn right')
			break
		case DirectionEnum.TOP:
			console.log('Go up')
			break
		case DirectionEnum.BOTTOM:
			console.log('Go down')
			break
	}
}

turnDirection(DirectionEnum.LEFT)
turnDirection(DirectionEnum.RIGHT)
turnDirection(DirectionEnum.TOP)
turnDirection(DirectionEnum.BOTTOM)

export {}

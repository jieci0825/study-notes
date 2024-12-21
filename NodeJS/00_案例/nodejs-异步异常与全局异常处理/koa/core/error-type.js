// 异常基类
class ErrorTypeModule extends Error {
	constructor(status, errorCode, msg) {
		super()
		this.statusCode = status
		this.errorCode = errorCode
		this.msg = msg
	}
}

// 参数类型错误
class ParamsError extends ErrorTypeModule {
	constructor(errorCode, msg) {
		super()
		this.statusCode = 400
		this.errorCode = errorCode || 10000
		this.msg = msg || '参数错误'
	}
}

// 资源不存在
class NotFound extends ErrorTypeModule {
	constructor(errorCode, msg) {
		super()
		this.statusCode = 404
		this.errorCode = errorCode || 10001
		this.msg = msg || '资源不存在'
	}
}

// 授权失败
class AuthFailed extends ErrorTypeModule {
	constructor(errorCode, msg) {
		super()
		this.statusCode = 401
		this.errorCode = errorCode || 10002
		this.msg = msg || '授权失败'
	}
}

module.exports = {
	ErrorTypeModule,
	ParamsError,
	NotFound,
	AuthFailed
}

const Koa = require('koa')
const Router = require('koa-router')
const bodyparser = require('koa-bodyparser')
// 引入异常基类
const { ErrorTypeModule, ParamsError } = require('./core/error-type')
// 将异常类在入口文件启动时就挂在在 global 上
// const error = require('./core/error-type')
// global.errors = error

const app = new Koa()
const router = new Router({ prefix: '/api' })

app.use(bodyparser())

// 异常处理
const handleError = async (ctx, next) => {
	try {
		await next()
	} catch (error) {
		// if (error instanceof global.errors.ErrorTypeModule) {
		if (error instanceof ErrorTypeModule) {
			error.requestUrl = `${ctx.request.method} ${ctx.request.url}`
			ctx.status = error.statusCode
			ctx.body = error
		}
	}
}

router.get('/data', handleError, (ctx, next) => {
	throw new ParamsError()
	// 在全局变量上使用异常类
	// throw new global.errors.ParamsError()
})

app.use(router.routes())
app.use(router.allowedMethods())

app.listen(6346, () => {
	console.log('service start success~')
})

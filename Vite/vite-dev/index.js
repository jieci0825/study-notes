const fs = require('fs')
const Koa = require('koa')
const path = require('path')

const app = new Koa()

app.use(ctx => {
	if (ctx.request.url === '/') {
		const indexHtml = fs.readFileSync(path.resolve(__dirname, 'index.html'), 'utf-8')
		ctx.set('Content-Type', 'text/html')
		ctx.body = indexHtml
	}

	if (ctx.request.url === '/main.js') {
		const mainJs = fs.readFileSync(path.resolve(__dirname, 'main.js'), 'utf-8')
		ctx.set('Content-Type', 'application/javascript')
		ctx.body = mainJs
	}

	if (ctx.request.url === '/App.vue') {
		const mainJs = fs.readFileSync(path.resolve(__dirname, 'App.vue'), 'utf-8')
		ctx.set('Content-Type', 'application/javascript')
		ctx.body = mainJs
	}
})

const port = 3003

app.listen(port, () => {
	console.log(`vite 开发服务器 http://localhost:${port}`)
})

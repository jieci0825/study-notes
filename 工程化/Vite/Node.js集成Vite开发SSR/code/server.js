import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

import express from 'express'
import { createServer as createViteServer } from 'vite'

const app = express()
const port = 9527
const __dirname = path.dirname(fileURLToPath(import.meta.url))

// https://cn.vitejs.dev/guide/ssr.html#setting-up-the-dev-server
// https://github.com/bluwy/create-vite-extra/blob/master/template-ssr-vue/server.js
async function run() {
    const vite = await createViteServer({
        server: { middlewareMode: true },
        appType: 'custom'
    })
    app.use(vite.middlewares)

    app.use('*', async (req, res) => {
        const url = req.originalUrl

        // 1. 读取 index.html
        let template = fs.readFileSync(path.resolve(__dirname, 'index.html'), 'utf-8')

        // 2. 转换 HTML
        template = await vite.transformIndexHtml(url, template)

        // 3. 加载服务器入口。vite.ssrLoadModule 将自动转换
        const { render } = await vite.ssrLoadModule('/src/entry-server.js')

        // 4. 渲染应用的 HTML。这假设 entry-server.js 导出的 `render`
        //    函数调用了适当的 SSR 框架 API。
        //    例如 ReactDOMServer.renderToString()
        const appHtml = await render(url)

        // 5. 发送渲染后的 HTML
        const html = template.replace(`<!-- appHtml -->`, appHtml.html)

        // 6. 返回渲染后的 HTML
        res.status(200).set({ 'Content-Type': 'text/html' }).end(html)
    })

    app.listen(port, () => {
        console.log(`Server started at http://localhost:${port}`)
    })
}

run()

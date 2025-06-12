import { renderToString } from 'vue/server-renderer'
import { createApp } from './main'

// 入口文件固定范式，需要提供一个 render 函数，用于渲染应用
export async function render() {
    const { app } = createApp()

    const ctx = {}

    const html = await renderToString(app, ctx)

    return { html }
}

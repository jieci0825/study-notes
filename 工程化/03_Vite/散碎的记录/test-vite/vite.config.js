import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import postcssPresetEnv from 'postcss-preset-env'

import MyViteAlias from './plugins/vite-aliases'
import MyViteCreateHtml from './plugins/vite-create-html'

export default defineConfig(({ command, mode }) => {
	return {
		server: {
			port: 9527
		},
		// resolve: {
		// 	alias: {
		// 		'@': resolve(__dirname, './src')
		// 	}
		// },
		plugins: [
			MyViteAlias(),
			MyViteCreateHtml({
				inject: {
					data: {
						title: '大河之剑天上来'
					}
				}
			})
		],
		build: {
			// 配置 rollup 的一些构建策略
			rollupOptions: {
				// 控制输出
				output: {
					// 静态资源文件名称格式
					assetFileNames: '[name]_[hash].[ext]'
				}
			},
			assetsInlineLimit: 1024 * 5, // 小于 5kb 就转为 base64
			outDir: 'c-dist', // 输出路径
			assetsDir: 'static' // 配置静态资源存放的目录
		}
	}
})

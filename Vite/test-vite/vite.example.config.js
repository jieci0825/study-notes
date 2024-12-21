import { defineConfig, loadEnv } from 'vite'

// 使用 defineConfig 获得语法补全
// export default defineConfig({
// 	optimizeDeps: {
// 		// exclude: ['lodash-es'] // 遇到 lodash-es 包时，不进行依赖预构建
// 	},
// 	server: {
// 		port: 9527
// 	}
// })

export default defineConfig(({ command, mode }) => {
	if (command === 'build') {
		// 生产环境
	} else {
		// 开发环境
	}

	console.log('🚢 ~ 当前打印的内容 ~ mode:', mode)
	// mode 就是当前的环境变量，比如：development、production、test
	//  - 这个需要更改可以在执行命名的时候更改，比如: npm run dev --mode dev
	// envDir: 加载 envDir 中的 .env 文件
	// prefixes：默认情况下只有前缀为 VITE_ 会被加载

	const env = loadEnv(mode, process.cwd(), 'C_VITE_')
	console.log('🚢 ~ 当前打印的内容 ~ env:', env)

	return {
		optimizeDeps: {
			// exclude: ['lodash-es'] // 遇到 lodash-es 包时，不进行依赖预构建
		},
		server: {
			port: 9527
		},

		css: {
			preprocessorOptions: {
				// 整个的配置都会最终给到 less 的执行参数(全局参数)中
				//  - https://less.bootcss.com/usage/#lessjs-options
				less: {
					math: 'always',
					// 全局变量
					globalVars: {
						primary: '#37a6a6'
					},
					// additionalData: 该选项可以用来为每一段样式内容添加额外的代码
					// https://cn.vitejs.dev/config/shared-options.html#css-preprocessoroptions-extension-additionaldata
					//  - 一般用于全局导入一个包含公共变量的less文件
					//  - 该选项的值是一个字符串，该字符串会被插入到每一个less文件的顶部
					//  - 该选项的值也可以是一个函数
					additionalData: `@import "./var.less";`
				},
				scss: {}
			},
			devSourcemap: true // 开启 css 的 sourcemap
		},

		envPrefix: 'C_VITE_' // 如果需要注入到客户端里面的话，这个前缀也需要改一下，不然默认是 VITE_
	}
})

// ************ 也可以利用 jsdoc 来实现 ************
/** @type import("vite").UserConfig */
// const viteConfig = {
//   optimizeDeps:{},
//   resolve:{},
//   server:{}
// }

/** @type import("vite").UserConfig */
// export default {
// 	optimizeDeps: {},
// 	server: {
// 		port: 9527
// 	}
// }

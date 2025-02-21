import { resolve } from 'node:path'

module.exports = function (options) {
	return {
		name: 'vite-alias',
		config(config, env) {
			return {
				resolve: {
					alias: {
						'@': resolve(process.cwd(), './src')
					}
				}
			}
		}
	}
}

const baseConfig = require('./webpack.base.js')
const prodConfig = require('./webpack.prod.js')
const devConfig = require('./webpack.dev.js')

module.exports = function (env) {
	console.log(env)
	if (env.prod) {
		prodConfig.plugins = [...prodConfig.plugins, ...baseConfig.plugins]
		return { ...baseConfig, ...prodConfig }
	} else {
		return { ...baseConfig, ...devConfig }
	}
}

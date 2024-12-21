var config = {
	entry: './src/index.js'
}

module.exports = (env, argv) => {
	if (env.prod) {
		// 生产环境
		config.mode = 'production'
	} else {
		// 开发环境
		config.mode = 'development'
		config.devtool = 'source-map'
	}
	return config
}

const postcssPresetEnv = require('postcss-preset-env')

module.exports = {
	plugins: [
		// postcssPresetEnv：预设环境 https://www.npmjs.com/package/postcss-preset-env
		//  - 在没有任何配置选项的情况下，PostCSS Preset Env 启用 Stage 2 功能并支持所有浏览器
		postcssPresetEnv()
	]
}

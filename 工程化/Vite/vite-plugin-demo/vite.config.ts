import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import testPlugin from './plugins/test-plugin.ts'

// https://vite.dev/config/
export default defineConfig({
    // enforce 会优先于数组中的插件顺序
    //  - plugins: [vue(), testPlugin('post'), testPlugin(), testPlugin('pre')],
    plugins: [vue(), testPlugin()]
})

import { defineConfig } from 'vite'
import testPlugin from './plugins/test-plugin'

export default defineConfig({
    plugins: [testPlugin()]
})

import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

// global-import 批量导入
const allModules = import.meta.glob('./glob/*')
const jsModules = import.meta.glob('./glob/*.js')

Object.entries(allModules).forEach(([key, value]) => {
    value().then(module => {
        console.log(key, ' : ', module.default)
    })
})

createApp(App).mount('#app')

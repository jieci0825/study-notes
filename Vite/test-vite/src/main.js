import './imgLoader'
// import jsonFile from './json/json1.json'
// vite 导入的 json 直接就一个可以操作的对象，而不是一个 json 字符串
// console.log('jsonFile: ', jsonFile)

import { name, age } from './json/json1.json'
import '@/components/button/button'

// 如果导出的一个是对象，那么可以支撑自动按需导入，有利于 tree shaking 优化
console.log('name: ', name)
console.log('age: ', age)

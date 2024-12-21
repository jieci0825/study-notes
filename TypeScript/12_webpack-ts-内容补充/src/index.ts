import { add, sub } from './utils/math'
import { time, price } from './utils/format'

import axios from 'axios'
// import _ from 'lodash' // 报错：无法找到模块“lodash”的声明文件
// - 所以要使用 lodash 需要安装一些第三方的 lodash 类型声明文件 @types/lodash
// - 如果不安装也可以自己声明
// - 比如这里我创建文件 ./utils/coderjc.d.ts 来声明。名字随便去，后缀匹配即可，都会找到的
import lodash from 'lodash'
console.log(lodash.join(['coderjc', 'lodash']))

// 不能用的原因就是没有**声明**
//  - ts 中的声明来自三个地方，也就是类型的查找
//  - 而这里也涉及到了 ts 的查找规则
//  - 在了解查找规则之前，需要知道一种 .d.ts 这个文件，这个文件不会参与js的运行的
//  - .ts 这个文件一般是编写代码的，而 .d.ts 文件就是用来做类型的声明的。这个 .d.ts 文件仅仅是用来做类型检测的，告知 typescript 还有那些类型
//  - 而 .d.ts 这个文件一般来自三个地方：
//    1、内置类型声明，在安装 typescript 就自带的
//    2、外部定义类型声明，一些三方库自带的类型声明文件，比如 axios
//    3、自己定义类型声明，这个需要自己编写

console.log('🚢 ~ 当前打印的内容 ~ price:', price)
console.log('🚢 ~ 当前打印的内容 ~ time:', time)

console.log('index.ts')

add(3, 4)
console.log('🚢 ~ 当前打印的内容 ~ add(3, 4):', add(3, 4))
sub(9, 1)
console.log('🚢 ~ 当前打印的内容 ~ sub(9, 1):', sub(9, 1))

// 比如在上一个script 脚本中定义了变量 coderName，按照js从上至下的执行顺序是可以访问的，但是报错
// console.log(coderName) // 报错：找不到名称“coderName”
// 所以此时需要我们自己添加类型约束
console.log(coderName)

// 同理
jcFoo()

// console.log($)

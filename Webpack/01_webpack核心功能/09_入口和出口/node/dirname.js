/* 
  1、在模块化中，如：require('./')，表示当前 js 文件所在的目录
  2、在路径处理中，'./' 表示当前项目的运行根目录
  __dirname：所有情况下，都表示当前 js 文件所在的目录，不过这是一个绝对路径
*/
const path = require('path')

// resolve 可以把多个路径组装成为一个绝对路径(且可以跨平台)
//  - 不会检测路径存不存在，只是单纯的字符串拼接
const pathStr1 = path.resolve(__dirname, 'dirname.js')
console.log(pathStr1)

//  - 在路径处理的过程中表示当前项目运行的根目录
const pathStr2 = path.resolve('./', 'sub', 'dirname.js')
console.log(pathStr2)

//  - 如果开始不指定 ./ 或者 __dirname，默认前面拼接当前项目运行的根目录的绝对路径
const pathStr3 = path.resolve('sub', 'dirname.js')
console.log(pathStr3)

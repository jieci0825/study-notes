import { render } from './renderA'

render()

// ! 需要添加 import.meta.hot 这个判断就是因为打包的时候，会做 Tree shaking，把没有用到的模块给剔除掉，所以需要判断一下

// * 1.只要在这里调用了 accept() 方法，哪怕不传入回调函数，代码修改之后都不会进行页面的刷新
// if (import.meta.hot) {
//     import.meta.hot.accept()
// }

// * 2. 传入回调，基础模块热替换
// if (import.meta.hot) {
//     import.meta.hot.accept(newModule => {
//         newModule.render()
//     })
// }

// * 3. 优化模块热替换，如果传递的第一个参数不是回调是一个数组或者字符串，那么就只会关系对应的模块，其他模块的更改还是会触发页面的刷新
// if (import.meta.hot) {
//     import.meta.hot.accept(['./styles/index.css'])
//     import.meta.hot.accept(['./styles/index.css'],([newModule1])=>{
//     })
// }

// * 4 render 函数来自于其他模块
if (import.meta.hot) {
    import.meta.hot.accept(['./renderA'], ([newModuleA]) => {
        newModuleA.render()
    })
}

# plugin

## plugin 介绍

> loader 定位是转换代码，而一些其他的操作难以使用 loader 完成的时候，这时候就需要使用 plugin 了
>
> https://www.webpackjs.com/concepts/plugins/#root

![image-20231221170837402](https://coderjc-blog-1312270807.cos.ap-guangzhou.myqcloud.com/typora/image-20231221170837402.png)

1. **plugin 在我的理解中感觉像是生命周期，在执行完成不同的任务的时候触发一些事件。**

   ![image-20231221171444035](https://coderjc-blog-1312270807.cos.ap-guangzhou.myqcloud.com/typora/image-20231221171444035.png)

2. **plugin的`本质`是一个带有 apply 方法的对象**，写法如下：

   ~~~js
   var plugin = {
       apply: function (complier) {
           
       }
   }
   ~~~

3. 通常在习惯上，会写成构造函数的形式，如下：

   ~~~js
   class MyPlugin {
       apply(complier){
           
       }
   }
   
   var plugin = new MyPlugin()
   ~~~

4. 要将插件应用到  webpack 中，需要把插件对象配置到 webpack 的 plugins 数组中，如下：

   ~~~js
   // 引入 plugin
   const MyPlugin = require('./plugins/my-plugin')
   
   module.exports = {
   	mode: 'development',
   	entry: {
   		main: './src/index.js'
   	},
   	output: {
   		filename: '[name].js'
   	},
   	plugins: [ new MyPlugin() ]
   }
   ~~~

   ![image-20231221172019445](https://coderjc-blog-1312270807.cos.ap-guangzhou.myqcloud.com/typora/image-20231221172019445.png)

5. **apply 函数会在初始化阶段，创建好 compiler 对象后运行，而不是在某一个具体的事件运行，表示应用插件**

## compiler

1. compiler 对象是在初始化阶段构建的，整个 webpack 打包期间只有一个 compiler 对象，后续完成打包工作的是 compiler 对象内部创建的 compilation

2. apply 方法会在**创建好 compiler 对象后调用**，并向方法传入一个 compiler 对象

   ![2020-01-15-12-49-26](https://coderjc-blog-1312270807.cos.ap-guangzhou.myqcloud.com/typora/2020-01-15-12-49-26.png)

3. compiler 和 compilation 有什么区别？

   1. compilation 是 compiler 内部的一个对象，具体的打包过程是由 compilation 完成的
   2. 当 webpack 开启 watch:true 的配置，启动监听，那么当文件发生变化的时候，会重新打包，而重新打包不会从初始化开始，是从编译阶段开发，所以会重新创建一个 compilation 对象，但是 compiler 没有被重新创建
   3. 所以因为有这个区别，当应用了插件，会运行一次 apply 方法，但是开启监听，文件改动重新打包的时候就不会再次执行 apply 方法了

4. compiler 对象提供了大量的钩子函数(hooks，可理解为事件)，具体[查看文档](https://www.webpackjs.com/api/compiler-hooks/#hooks),plugin 的开发者可以注册这些钩子函数，参与 webpack 编译和生成

## 在 apply 中注册事件

1. apply 只会执行一次，所以我们需要再这里进行注册事件，语法格式如下：

   ~~~js
   class MyPlugin {
   	apply(compiler) {
           // name 就是一个插件名称，字符串，一般大驼峰命名
   		compiler.hooks.事件名称.事件类型(name, function (compilation){
               // 事件处理函数
             	// compilation 事件处理参数  
           })
   	}
   }
   ~~~

2. [事件名称](https://www.webpackjs.com/api/compiler-hooks/#hooks)

3. 事件类型：这一部分使用的是 Tapabel API，这个小型的库是一个专门用于钩子函数监听的库，提供的事件类型如下

   1. tap：注册一个同步的钩子函数，函数运行完毕则表示事件处理结束

   2. tapAsync：注册一个基于回调的异步钩子函数，函数通过调用一个回调表示事件处理结束，这个方法会多出一个参数，这个参数是回掉函数，调用它就表示结束

      ~~~js
      class MyPlugin {
      	apply(compiler) {
      		compiler.hooks.done.tapAsync(name, function (compilation, cb){
                  ...
                  cb() // 函数执行结束
              })
      	}
      }
      ~~~

   3. tapPromise：注册一个基于 Promise 的异步钩子函数，函数通过返回的 Promise 进入已决定状态表示事件处理结束

4. 使用 done 方法，示例：

   ~~~js
   class MyPlugin {
   	apply(compiler) {
   		compiler.hooks.done.tap('MyPlugin', function (compilation) {
   			console.log('运行了done方法!')
   		})
   	}
   }
   ~~~

5. 执行结果如图：

   ![image-20231221180939225](https://coderjc-blog-1312270807.cos.ap-guangzhou.myqcloud.com/typora/image-20231221180939225.png)










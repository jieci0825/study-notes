# babel 的插件

除了预设可以转换代码之外，插件也可以转换代码，顺序是：

- 插件 presets 前运行
- 插件顺序是前往后排列
- preset 顺序是从后往前

比如如下的例子：

~~~json
{
    "presets": ["a","b"],
    "plugins": ["c":"d"]
}
// 运行顺序是：c -> d -> b -> a
~~~

通常情况下，@babel/preset-env 只转换那些已经形成正式标准的语法，对于某些处于早期阶段、还没有确定的语法不做转换

如果要转换这些语法，就要单独使用插件 

下面列举一些插件

## `@babel/plugin-proposal-class-properties`

该插件可以让你在类中书写初始化字段

```
class A {
    a = 1;
    constructor(){
        this.b = 3;
    }
}
```

## `@babel/plugin-proposal-function-bind`

该插件可以让你轻松的为某个方法绑定this

```
function Print() {
    console.log(this.loginId);
}

const obj = {
    loginId: "abc"
};

obj::Print(); //相当于：Print.call(obj);
```

> 遗憾的是，目前vscode无法识别该语法，会在代码中报错，虽然并不会有什么实际性的危害，但是影响观感

## `@babel/plugin-proposal-optional-chaining`

```
const obj = {
  foo: {
    bar: {
      baz: 42,
    },
  },
};

const baz = obj?.foo?.bar?.baz; // 42

const safe = obj?.qux?.baz; // undefined
```

## `babel-plugin-transform-remove-console`

该插件会移除源码中的控制台输出语句

```
console.log("foo");
console.error("bar");
```

编译后

~~~
~~~

## `@babel/plugin-transform-runtime`

用于提供一些公共的API，这些API会帮助代码转换

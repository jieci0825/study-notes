"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var str = 'coderjc';
var num = 123;
var flag = true;
// 其他类型也一样
// ...
console.log(str, num, flag);
// 严格模式下 null 类型不允许被赋值 undefined
// undefined 类型也不能被赋值为 null 类型
var n = null;
var u = undefined;
// void 类型
var v1 = undefined;
var v2 = null; // 不能将类型“null”分配给类型“void”，需要关闭严格模式
// 如果一个函数没有返回值可以设置 void
function fn() {
    // return 1 // 设置 void 之后就不能返回任何值了，包括 null
    return;
}
// 执行 tsc -init，知道配置项 strict 设置为 false 关闭严格模式

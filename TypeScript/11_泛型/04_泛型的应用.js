// 在配合接口请求的时候，可以通过泛型传入配置的接口类型规定返回的数据
var request = {
    // 返回值是一个 Promise
    //  - 且这个 Promise 提示：泛型类型“Promise<T>”需要 1 个类型参数
    //  - 所以可以把这个泛型传递过去，表示这个 Pormise 返回的结果是受这个泛型约束的
    get: function (url) {
        // return fetch(url).then(response => response.json() as Promise<T>)
        return new Promise(function (resolve, reject) {
            // xhr 类型注解就是这个 XMLHttpRequest 类
            var xhr = new XMLHttpRequest();
            xhr.open('GET', url);
            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4) {
                    if (xhr.status >= 200 && xhr.status < 300) {
                        resolve(JSON.parse(xhr.responseText));
                    }
                }
            };
            xhr.send(null);
        });
    }
};
// 使用的时候传入接口类型
request.get('./data.json').then(function (res) {
    // 这样定义之后，也会出现属性的自动提示
    console.log(res.code, res.message);
});

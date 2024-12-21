# CORS

## 概述

`CORS`是基于`http1.1`的一种跨域解决方案，他的全称是`Cross Origin Resource Shariing`，**跨域资源共享**

它的总体思路是：**如果浏览器要跨域访问服务器的资源，需要获得浏览器的允许**

![image-20240415171414254](http://cos.coderjc.cn/blog/image-20240415171414254.png)

而要知道，一个请求可以附带很多信息，从而会对服务器造成不同程度的影响

比如有的请求只是获取一些新闻，有的请求会改动服务器的数据

针对不同的请求，CORS 规定了三种不同的交互模式，分别是：

- **简单请求**
- **需要预检的请求**
- **附带身份凭证的请求**

这三种模式从上至下层层递进，请求可以做的事情越来越多，要求也越来越严格

当浏览器运行了一段 ajax 代码（无论是使用 xhr 还是 fetch），浏览器会首先判断它属于哪一种请求模式

## 简单请求

### 简单请求的判定

当请求同时满足以下条件时，浏览器会认为它是一个简单请求：

**请求方法属于下面的一种：**

- `get`
- `post`
- `head`

**请求头仅包含安全的字段，常见的安全字段如下：**

- `Accept`
- `Accept-Language`
- `Content-Language`
- `Content-Type`
- `DPR`
- `Downlink`
- `Save-Data`
- `Viewport-width`
- `width`

**请求头如果包含`Content-Type`，且值为下面的值之一：**

- `text/plain`
- `multipart/form-data`
- `application/x-www-form=urlencoded`

如果三个条件同时满足，则视为简单请求

### 简单请求的交互规范

当浏览器判定某个**ajax 跨域请求时简单请求时**。会发生以下的事情

1. 请求头中自动添加`Origin`字段：

   1. 比如在页面 `http://my.com/index.html` 中有以下代码造成了跨域

      ~~~js
      // 简单请求
      fetch('http://crossdomain.com/api/news')
      ~~~

   2. 请求发出后，请求头会是下面的格式：

      ~~~
      GET  /api/news  HTTP/1.1
      Host: crossdomain.com
      Connection: keep-alive
      ...
      Referer: http://my.com/index.html
      Origin: http://my.com
      ~~~

   3. 看到最后一行，浏览器会告诉服务器。是哪个源地址在跨域请求

2. **服务器响应头中应包含 `Access-Control-Allow-Origin`**

   1. 当服务器收到请求之后，如果允许该请求进行跨域访问，需要在响应头中添加 `Access-Control-Allow-Origin`字段
   2. 该字段的值可以是：
      1. `*`：表示我很开放，什么人都可以访问
      1. `具体的源`：比如 `http://my,com`，表示我就允许你访问
   3. > 实际上，这两个值对于客户端`http://my.com`而言，都一样，因为客户端才不会管其他源服务器允不允许，就关心自己是否被允许
      >
      > **为了避免后续的麻烦，强烈推荐响应具体的源**


当服务器看到自己被允许访问后，就会响应顺利的交给 js，完后后续的操作

## 需要预检的请求

简单的请求对服务器的威胁不大，所以允许使用上述的简单交互的方式即可完成

但是，如果浏览器不认为这是一种简单请求，就会按照下面的流程进行：

1. **浏览器发送预检请求，询问服务器是否允许**
2. **服务器允许**
3. **浏览器发送真实的请求**
4. **服务器完成真实的响应**

比如，在页面 `http://my.com/index.html`中有以下代码造成了跨域

~~~js
// 需要预检的请求
fetch('http://crossdomain.com/api/user', {
    methods: 'POST',
    headers:{
        a: 1,
        b: 2,
        "content-type": 'application/json'
    },
    body: JSON.stringify({ "name": '张三', "age": 19 }) // 设置请求体
})
~~~

浏览器发现他不是一个简单请求，则会按照下面的流程与服务器交互：

1. **浏览器发送预检请求，询问服务器是否允许**

   ~~~
   OPOTIONS  /api/user HTTP/1.1
   HOST: corssdomain.com
   ...
   Origin: http://my.com
   Access-Control-Request-Methods: POST
   Access-Control-Request-Headers: a, b, content-type
   ~~~

   可以看出，这并非我们想要发出的真实请求，请求中不包含我们的响应头，也没有消息体

   这是一个预检请求，它的目的是询问服务器，是否允许后续的真实请求

   预检请求**没有请求体**，它包含了后续真实请求要做的事情

   预检请求有以下特征：

   - 请求方法为 `OPTIONS`
   - 没有请求体
   - 请求头中包含
     - `Origin`：请求的源，和简单请求的含义一致
     - `Access-control-Request-Methods`：后续的真实请求将使用的请求方法
     - `Access-control-Request-Headers`：后续真实请求会改动的请求头

2. **服务器允许**

   服务器收到预检请求后，可以检查预检请求中包含的信息，如果允许这样的请求，需要响应下面的消息格式

   ~~~
   HTTP/1.1  200  ok
   Date: Tue Apr 16 2024 01:03:40 GMT
   ...
   Access-Control-Allow-Origin: http://my.com
   Access-Control-Allow-Methods: POST
   Access-Control-Allow-Headers: a, b, content-type
   Access-Control-Max-Age: 86400
   ~~~

   对于预检请求，不需要响应任何的消息体，只需要在响应头中添加：

   - `Access-Control-Allow-Origin`：和简单请求一样，表示允许的源
   - `Access-Control-Allow-Methods`：表示允许的后续真实请求方法
   - `Access-Control-Allow-Headers`：表示允许改动的请求头
   - `Access-Control-Max-Age`：告诉浏览器，多少秒内，对于同样的请求源、方法、头，都不需要在发送预检请求了

3. **浏览器发送真实请求**

   预检被服务器允许后，浏览器就会发送真实请求了，上面的代码会阿生下面的请求数据

   ~~~
   POST /api/user HTTP/1.1
   Host: corssdomain.com
   Connection: keep-alive
   ...
   Deferer: https://my.com/index.html
   Origin: http://my.com
   
   { "name": "张三", "age": 19 }
   ~~~

4. **服务器响应真实请求**

   ~~~
   HTTP/1.1 200 ok
   Date: Tue Apr 16 2024 01:03:40 GMT
   ...
   Access-Control-Allow-Origin: http://my.com
   ...
   
   添加用户成功
   ~~~

   可以看出，当完成预检请求之后，后续的处理和简单请求相同

## 附带身份凭证的请求

默认情况下， ajax 的跨域请求并不会附带 cookie，这样以来，某些需要权限的操作就无法进行

不过可以通过简单的配置就可以实现附带 cookie

~~~js
var xhr  = new XMLHttpRequest()
xhr.withCredentials = true

// fetch api
fetch(url, {
    credentials: 'include'
})
~~~

这样以来，该寡欲的 ajax 请求就是附带甚至凭证的请求

当一个请求需要附带 cookie 时，无论它是简单请求，还是预检请求，都会在请求头中添加 cookie 字段

而服务器响应式，需要明确告知客户端：**服务器允许这样的凭据**

告知的方式也非常简单，只需要在响应头中添加：`Access-Control-Allow-Credentials: true` 即可

对于一个附带身份品种的请求，若服务器没有明确告知，浏览器仍然会视为跨域被拒绝

另外要特别注意的是：**对于附带甚至凭证的请求，服务器不得设置 `Access-Control-Allow-Origin 的值为 *`，这就是为什么不推荐使用 *  的原因

## 一个额外的补充

在跨域访问时，js 只能拿到一些最基本的响应头，如：Cache-Control、Content-Language、Content-Type、Expires、Last-Modified、Pragma，如果要访问其他头，则需要服务器设置最基本的响应头

`Access-Control-Expose-Headers`头让服务器吧允许浏览器访问的头放入白名单，例如：

~~~
Access-Control-Expose-Headers: authorization, a, b
~~~

这样 js 就能够访问制定的响应头了


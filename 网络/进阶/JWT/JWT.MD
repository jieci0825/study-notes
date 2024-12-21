# JWT

## 概述

因为 http 是无状态的，无法记住上一次访问的人是谁，也就表示登录之后，下一次在请求我还是不知道你是否登录了，所以前使用了 cookie 来实现，登录请求成功之后，服务器返回的 set-cookie:user_id=1;account=admin，会被浏览器的自动添加到 cookie 中，所以登录之后后续请求，携带这个 cookie ，服务器就知道你登录过了

但是这种直接存储一些用户id或者json字符串会导致一些问题：

- 非浏览器环境，如何在令牌中设置过期时间
  - 解决方案：比如响应头响应的 cookie 中添加字段来表示过期时间
- 如何防止令牌被伪造
  - 解决方案：服务器中使用对称加密，比如用户id是1，就把 1 进行加密，得到一个固定数据串（一般为 16 进制的字符串），得到这个加密的字符串为 asadjsaoidjsiaoas，响应的 set-cookie 字段的值就可以设置为 1.asadjsaoidjsiaoas，这样在就算客户端伪造的时候，也是用对称加密把 1 进行加密，但是由于存储的密钥不一样，加密出来的结果也不一样，所以就可以保证这个安全性

JWT 就是为了解决这些问题出现的

JWT 全称 `Json Web Token`，本质就是一个字符串，他要解决的问题就是在互联网中提供唯一的、安全性的令牌格式

因此 JWT 就是一个字符串而已，存储到 cookie、loadStorage 中都可以，没有限制，传输也一样，没有限制，可以是请求体也可以是请求头，但是一般情况下，我们是放在请求头

## 令牌的组成

为了令牌的安全性、jwt 令牌由三个部分组成，分别是：

- header：令牌头部，记录了整个令牌的类型和签名算法
- payload：令牌负荷，记录了保存的主题信息，例如保存的用户信息就可以放到这里
- signature：令牌签名，按照头部固定的签名算法对整个令牌进行签名，该签名的作用是保证令牌不会被伪造和篡改

组成的完整格式为：`header.payload.signature`，比如一个完整的 jwt 令牌如下：

~~~
eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiYWNjb3VudCI6ImFkbWluIiwicGFzc3dvcmQiOiI0Mjk3ZjQ0YjEzOTU1MjM1MjQ1YjI0OTczOTlkN2E5MyIsInJvbGVfaWQiOjEsImlhdCI6MTcxMzE0ODk4OSwiZXhwIjoxNzEzNzUzNzg5fQ.h7raYTNM6oJvGaVfUYtKYoLok92Lj-s3bDIoX0gcnMDlHGPrPws8VXZRPSVn4dO6_jjKmFIf5ZBWgye5xUKVjPWU2LVZinJLz5rcWyhentXAiQQ7AoYNEnqg3ziJWeCv-MjdEYgwKnBVFKVT0lFjEyGnJZOC8stTquXlK5BEjp4
~~~

### header

它是令牌头部，记录了整个令牌类型和签名算法

它的格式是一个`json`对象，如下：

~~~json
{
    "alg": "HS256",
    "type": "JWT"
}
~~~

该对象记录了：

- alg：signature 部分使用的签名算法，通常可以去两个值
  - HS256：一种对称加密算法，使用一个密钥对 signature 加密解密
  - RS256：一种非对称加密算法，使用私钥颁发签名，公钥验证
- type：整个令牌的类型，固定写 JWT 即可

设置好 header 部分之后，就可以生成 header 部分了

具体的生成方法很简单，就是把 header 不分使用 `base64 url` 编码一下即可：

> base64 url 不是一个加密算法，而是一种编码方式，它是在 base64 算法的基础上对 +、=、/ 三个字符做出特殊处理的算法
>
> 而 base64 是使用 64 个可打印字符来表示一个二进制的数据

浏览器提供了`btoa`函数进行编码，使用`atob`函数解码，可以完成这个操作：

~~~js
btoa('123123') // 'MTIzMTIz'
atob('MTIzMTIz') // '123123'
~~~

node 没有提供这两个函数，需要安装第三方库 atob 和 btoa 完成

### payload

这部分是 jwt 的主体信息，它仍然是一个 JSON 对象，它可以包含以下内容：

~~~js
{
    "username": "zs", // 配置自定义信息字段
    "userId": 1, // 配置自定义信息字段
    // ... 还可以配置更多
    "iat": "发布时间",
    "exp": "到期时间",
    "sub": "主题",
    "aud": "听众",
    "nbf": "在此之前不可用",
    "jti": "JWT ID",
}
~~~

以上属性可以全写，也可以一个都不写，它只是一个规范，也需要你在将来验证这个 jwt 令牌时手动处理才能发挥作用

除开上述自定义的字段，其他字段含义如下：

- iat：该 jwt 的发行时间，通常写当前时间的时间戳
- exp：该 jwt 的到期时间，通常写时间戳
- sub：该 jwt 用于干嘛的
- aud：该 jwt 是发放给那个终端的，可以是终端类型，也可以是终端名称
- nbf：一个时间点，在该时间点到达之前，这个令牌是不可用的
- jti：jwt 的唯一编号，设置此项的目的，主要是为了防止重放攻击（重放攻击是在某些场景下，用户使用之前的令牌发送到服务器，被服务器正确的识别，从而导致不可以预期的行为发生）

**最终 payload 也会经过 base64 url 编码得到**

### signature

这一部分是 jwt 的签名，正是它的存在，保证了整个 jwt 不被篡改

这部分的生成，是对前面两个部分的编码结果，按照头部指定的方式进行加密

比如：头部指定的加密方式是 HS256，那么假设前面两部分的编码结果的字符串是 esjioasjdoias.sauidasiodjaoi，那么第三部分就是对这个 esjioasjdoias.sauidasiodjaoi 字符串进行对称加密算法加密，当然，加密的时候需要指定一个密钥，比如：qsiddf

~~~js
HS256('esjioasjdoias.sauidasiodjaoi', 'qsiddf')
~~~

最终，将加密的结果和前面两部分组合在一起，就得到了一个完整的 jwt

由于签名使用的密钥保存在服务器，这样以来，客户端就无法伪造出签名，因为密钥是保存在服务器的

换句话说，只所以说无法伪造 jwt，就是因为第三部分的存在

而前面两部分并没有加密，只是一个编码结果而已，可以任务几乎就是明文传输的

> 这不会造成太大的问题，因为既然用户登录成功了，它当然有权利看到自己的用户信息
>
> 设置在某些网站，用户的基本信息可以被任何人查看
>
> 你要保证的，是不要把敏感信息存放到 jwt 中，比如密码

jwt 的 signature 可以保证令牌不会被伪造，那如何保证令牌不会被篡改呢？

比如，用户登录成功了，获得了 jwt，但他认为改动了 payload 部分，比如把自己的账户余额修改为了原来的两倍，然后重新编码的 payload 发送到服务器， 服务器如何得知这些信息被修改过了呢？

这就要看令牌的验证了

## 令牌的验证

令牌在服务器组装完成之后下发给客户端，客户端把令牌保存起来，后续的请求会将令牌发送给服务器

而服务器需要验证令牌是否正确，如何验证？

- 首先，服务器要验证这个令牌是否被篡改过，验证的方式非常简单，就是对 header + payload 部分用同样的密钥和加密算法进行加密
- 然后把加密的结果和请求携带的 jwt 的 signature 不分进行对比，如果完全相同，则表示前面两份没有动过，就是自己颁发的，如果不同，肯定是被篡改过了

当令牌验证为没有被篡改后，服务器可以进行其他验证：比如是否过期等等


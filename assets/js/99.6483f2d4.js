(window.webpackJsonp=window.webpackJsonp||[]).push([[99],{510:function(a,s,t){"use strict";t.r(s);var e=t(47),r=Object(e.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"curl-上传-下载文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#curl-上传-下载文件"}},[a._v("#")]),a._v(" curl 上传/下载文件")]),a._v(" "),t("h2",{attrs:{id:"上传文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#上传文件"}},[a._v("#")]),a._v(" 上传文件")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("curl")]),a._v(" -X POST --data-binary @文件路径  服务器路径\n")])])]),t("h2",{attrs:{id:"下载文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#下载文件"}},[a._v("#")]),a._v(" 下载文件")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("curl")]),a._v(" 文件路径\n")])])]),t("h2",{attrs:{id:"补充-curl-参数"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#补充-curl-参数"}},[a._v("#")]),a._v(" 补充：curl 参数")]),a._v(" "),t("blockquote",[t("p",[a._v("参考：http://www.ruanyifeng.com/blog/2019/09/curl-reference.html")])]),a._v(" "),t("h3",{attrs:{id:"x"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#x"}},[a._v("#")]),a._v(" -X")]),a._v(" "),t("p",[t("code",[a._v("-X")]),a._v(" 指定 HTTP 请求的方法。")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("curl")]),a._v(" -X POST https://www.example.com\n")])])]),t("p",[a._v("上面命令对"),t("code",[a._v("https://www.example.com")]),a._v("发出 POST 请求。")]),a._v(" "),t("h3",{attrs:{id:"x-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#x-2"}},[a._v("#")]),a._v(" -x")]),a._v(" "),t("p",[t("code",[a._v("-x")]),a._v("参数指定 HTTP 请求的代理。")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("curl")]),a._v(" -x socks5://james:cats@myproxy.com:8080 https://www.example.com\n")])])]),t("p",[a._v("上面命令指定 HTTP 请求通过"),t("code",[a._v("myproxy.com:8080")]),a._v("的 "),t("code",[a._v("socks5")]),a._v(" 代理发出。")]),a._v(" "),t("p",[a._v("如果没有指定代理协议，默认为 HTTP。")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("curl")]),a._v(" -x james:cats@myproxy.com:8080 https://www.example.com\n")])])]),t("p",[a._v("上面命令中，请求的代理使用 HTTP 协议。")]),a._v(" "),t("h3",{attrs:{id:"d"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#d"}},[a._v("#")]),a._v(" -d")]),a._v(" "),t("p",[t("code",[a._v("-d")]),a._v("参数用于发送 POST 请求的数据体。")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("curl")]),a._v(" -d"),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'login=hedon＆password=123'")]),a._v("-X POST https://google.com/login\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#或者")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("curl")]),a._v(" -d "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'login=emma'")]),a._v(" -d "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'password=123'")]),a._v(" -X POST  https://google.com/login\n")])])]),t("p",[a._v("使用"),t("code",[a._v("-d")]),a._v("参数以后，HTTP 请求会自动加上标头"),t("code",[a._v("Content-Type : application/x-www-form-urlencoded")]),a._v("。并且会自动将请求转为 POST 方法，因此可以省略"),t("code",[a._v("-X POST")]),a._v("。")]),a._v(" "),t("p",[t("code",[a._v("-d")]),a._v("参数可以读取本地文本文件的数据，向服务器发送。")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("curl")]),a._v(" -d "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'@data.txt'")]),a._v(" https://google.com/login\n")])])]),t("p",[a._v("上面命令读取"),t("code",[a._v("data.txt")]),a._v("文件的内容，作为数据体向服务器发送。")]),a._v(" "),t("h3",{attrs:{id:"data-urlencode"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#data-urlencode"}},[a._v("#")]),a._v(" --data-urlencode")]),a._v(" "),t("p",[t("code",[a._v("--data-urlencode")]),a._v("参数等同于"),t("code",[a._v("-d")]),a._v("，发送 POST 请求的数据体，区别在于会自动将发送的数据进行 URL 编码。")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("curl")]),a._v(" --data-urlencode "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'comment=hello world'")]),a._v(" https://google.com/login\n")])])]),t("p",[a._v("上面代码中，发送的数据"),t("code",[a._v("hello world")]),a._v("之间有一个空格，需要进行 URL 编码。")]),a._v(" "),t("h3",{attrs:{id:"data-binary"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#data-binary"}},[a._v("#")]),a._v(" --data-binary")]),a._v(" "),t("p",[t("code",[a._v("--data-urlencode")]),a._v("参数等同于"),t("code",[a._v("-d")]),a._v("，发送 POST 请求的数据体，区别在于会自动将发送的数据转换为二进制。")]),a._v(" "),t("h3",{attrs:{id:"f"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#f"}},[a._v("#")]),a._v(" -F")]),a._v(" "),t("p",[t("code",[a._v("-F")]),a._v("参数用来向服务器上传二进制文件。")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("curl")]),a._v(" -F "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'file=@photo.png'")]),a._v(" https://google.com/profile\n")])])]),t("p",[a._v("上面命令会给 HTTP 请求加上标头"),t("code",[a._v("Content-Type: multipart/form-data")]),a._v("，然后将文件"),t("code",[a._v("photo.png")]),a._v("作为"),t("code",[a._v("file")]),a._v("字段上传。")]),a._v(" "),t("p",[t("code",[a._v("-F")]),a._v("参数可以指定 MIME 类型。")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("curl")]),a._v(" -F "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'file=@photo.png;type=image/png'")]),a._v(" https://google.com/profile\n")])])]),t("p",[a._v("上面命令指定 MIME 类型为"),t("code",[a._v("image/png")]),a._v("，否则 curl 会把 MIME 类型设为"),t("code",[a._v("application/octet-stream")]),a._v("。")]),a._v(" "),t("p",[t("code",[a._v("-F")]),a._v("参数也可以指定文件名。")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("curl")]),a._v(" -F "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'file=@photo.png;filename=me.png'")]),a._v(" https://google.com/profile\n")])])]),t("p",[a._v("上面命令中，原始文件名为"),t("code",[a._v("photo.png")]),a._v("，但是服务器接收到的文件名为"),t("code",[a._v("me.png")]),a._v("。")]),a._v(" "),t("h3",{attrs:{id:"g"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#g"}},[a._v("#")]),a._v(" -G")]),a._v(" "),t("p",[t("code",[a._v("-G")]),a._v("参数用来构造 URL 的查询字符串。")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("curl")]),a._v(" -G -d "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'q=kitties'")]),a._v(" -d "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'count=20'")]),a._v(" https://google.com/search\n")])])]),t("p",[a._v("上面命令会发出一个 GET 请求，实际请求的 URL 为"),t("code",[a._v("https://google.com/search?q=kitties&count=20")]),a._v("。如果省略"),t("code",[a._v("--G")]),a._v("，会发出一个 POST 请求。")]),a._v(" "),t("p",[a._v("如果数据需要 URL 编码，可以结合"),t("code",[a._v("--data--urlencode")]),a._v("参数。")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("curl")]),a._v(" -G --data-urlencode "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'comment=hello world'")]),a._v(" https://www.example.com\n")])])]),t("h3",{attrs:{id:"h"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#h"}},[a._v("#")]),a._v(" -H")]),a._v(" "),t("p",[t("code",[a._v("-H")]),a._v("参数添加 HTTP 请求的标头。")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("curl")]),a._v(" -H "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'Accept-Language: en-US'")]),a._v(" https://google.com\n")])])]),t("p",[a._v("上面命令添加 HTTP 标头"),t("code",[a._v("Accept-Language: en-US")]),a._v("。")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("curl")]),a._v(" -H "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'Accept-Language: en-US'")]),a._v(" -H "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'Secret-Message: xyzzy'")]),a._v(" https://google.com\n")])])]),t("p",[a._v("上面命令添加两个 HTTP 标头。")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("curl")]),a._v(" -d "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('\'{"login": "emma", "pass": "123"}\'')]),a._v(" -H "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'Content-Type: application/json'")]),a._v(" https://google.com/login\n")])])]),t("p",[a._v("上面命令添加 HTTP 请求的标头是"),t("code",[a._v("Content-Type: application/json")]),a._v("，然后用"),t("code",[a._v("-d")]),a._v("参数发送 JSON 数据。")]),a._v(" "),t("h3",{attrs:{id:"v"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#v"}},[a._v("#")]),a._v(" -v")]),a._v(" "),t("p",[t("code",[a._v("-v")]),a._v("参数输出通信的整个过程，用于调试。")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("curl")]),a._v(" -v https://www.example.com\n")])])]),t("h3",{attrs:{id:"trace"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#trace"}},[a._v("#")]),a._v(" --trace")]),a._v(" "),t("p",[t("code",[a._v("--trace")]),a._v("参数也可以用于调试，还会输出原始的二进制数据。")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("curl")]),a._v(" --trace - https://www.example.com\n")])])]),t("h3",{attrs:{id:"u"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#u"}},[a._v("#")]),a._v(" -u")]),a._v(" "),t("p",[t("code",[a._v("-u")]),a._v("参数用来设置服务器认证的用户名和密码。")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("curl")]),a._v(" -u "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'hedon:12345'")]),a._v(" https://google.com/login\n")])])]),t("p",[a._v("上面命令设置用户名为"),t("code",[a._v("hedon")]),a._v("，密码为"),t("code",[a._v("12345")]),a._v("，然后将其转为 HTTP 标头"),t("code",[a._v("Authorization: Basic Ym9iOjEyMzQ1")]),a._v("。")]),a._v(" "),t("p",[a._v("curl 能够识别 URL 里面的用户名和密码。")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("curl")]),a._v(" https://hedon:12345@google.com/login\n")])])]),t("p",[a._v("上面命令能够识别 URL 里面的用户名和密码，将其转为上个例子里面的 HTTP 标头。")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("curl")]),a._v(" -u "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'bob'")]),a._v(" https://google.com/login\n")])])]),t("p",[a._v("上面命令只设置了用户名，执行后，curl 会提示用户输入密码。")]),a._v(" "),t("h3",{attrs:{id:"o"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#o"}},[a._v("#")]),a._v(" -o")]),a._v(" "),t("p",[t("code",[a._v("-o")]),a._v("参数将服务器的回应保存成文件，等同于"),t("code",[a._v("wget")]),a._v("命令。")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("curl")]),a._v(" -o example.html https://www.example.com\n")])])]),t("p",[a._v("上面命令将"),t("code",[a._v("www.example.com")]),a._v("保存成"),t("code",[a._v("example.html")]),a._v("。")]),a._v(" "),t("h3",{attrs:{id:"o-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#o-2"}},[a._v("#")]),a._v(" -O")]),a._v(" "),t("p",[t("code",[a._v("-O")]),a._v("参数将服务器回应保存成文件，并将 URL 的最后部分当作文件名。")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("curl")]),a._v(" -O https://www.example.com/foo/bar.html\n")])])]),t("p",[a._v("上面命令将服务器回应保存成文件，文件名为"),t("code",[a._v("bar.html")]),a._v("。")]),a._v(" "),t("h3",{attrs:{id:"s"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#s"}},[a._v("#")]),a._v(" -s")]),a._v(" "),t("p",[t("code",[a._v("-s")]),a._v("参数将不输出错误和进度信息。")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("curl")]),a._v(" -s https://www.baidu.com\n")])])]),t("p",[a._v("上面命令一旦发生错误，不会显示错误信息。不发生错误的话，会正常显示运行结果。")]),a._v(" "),t("p",[a._v("如果想让 curl 不产生任何输出，可以使用下面的 "),t("code",[a._v("-S")]),a._v(" 命令。")]),a._v(" "),t("h3",{attrs:{id:"s-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#s-2"}},[a._v("#")]),a._v(" -S")]),a._v(" "),t("p",[t("code",[a._v("-S")]),a._v("参数指定只输出错误信息，通常与"),t("code",[a._v("-s")]),a._v("一起使用。")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("curl")]),a._v(" -s -o /dev/null https://google.com\n")])])]),t("p",[a._v("上面命令没有任何输出，除非发生错误。")]),a._v(" "),t("h3",{attrs:{id:"limit-rate"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#limit-rate"}},[a._v("#")]),a._v(" --limit-rate")]),a._v(" "),t("p",[t("code",[a._v("--limit-rate")]),a._v("用来限制 HTTP 请求和回应的带宽，模拟慢网速的环境。")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("curl")]),a._v(" --limit-rate 200k https://google.com\n")])])]),t("p",[a._v("上面命令将带宽限制在"),t("code",[a._v("每秒")]),a._v(" 200K 字节。")]),a._v(" "),t("h3",{attrs:{id:"i"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#i"}},[a._v("#")]),a._v(" -i")]),a._v(" "),t("p",[t("code",[a._v("-i")]),a._v("参数打印出服务器回应的 HTTP 标头。")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("curl")]),a._v(" -i https://www.example.com\n")])])]),t("p",[a._v("上面命令收到服务器回应后，先输出服务器回应的标头，然后空一行，再输出网页的源码。")]),a._v(" "),t("h3",{attrs:{id:"i-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#i-2"}},[a._v("#")]),a._v(" -I")]),a._v(" "),t("p",[t("code",[a._v("-I")]),a._v("参数向服务器发出 HEAD 请求，然会将服务器返回的 HTTP 标头打印出来。")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("curl")]),a._v(" -I https://www.example.com\n")])])]),t("p",[a._v("上面命令输出服务器对 HEAD 请求的回应。")]),a._v(" "),t("h3",{attrs:{id:"head"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#head"}},[a._v("#")]),a._v(" --head")]),a._v(" "),t("p",[t("code",[a._v("--head")]),a._v("参数等同于"),t("code",[a._v("-I")]),a._v("。")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("curl")]),a._v(" --head https://www.example.com\n")])])]),t("h3",{attrs:{id:"l"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#l"}},[a._v("#")]),a._v(" -L")]),a._v(" "),t("p",[t("code",[a._v("-L")]),a._v("参数会让 HTTP 请求跟随服务器的重定向。curl 默认不跟随重定向。")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("curl")]),a._v(" -L -d "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'tweet=hi'")]),a._v(" https://api.twitter.com/tweet\n")])])]),t("h3",{attrs:{id:"k"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#k"}},[a._v("#")]),a._v(" -k")]),a._v(" "),t("p",[t("code",[a._v("-k")]),a._v("参数指定跳过 SSL 检测。")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("curl")]),a._v(" -k https://www.example.com\n")])])]),t("p",[a._v("上面命令不会检查服务器的 SSL 证书是否正确。")]),a._v(" "),t("h3",{attrs:{id:"e"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#e"}},[a._v("#")]),a._v(" -e")]),a._v(" "),t("p",[t("code",[a._v("-e")]),a._v("参数用来设置 HTTP 的标头"),t("code",[a._v("Referer")]),a._v("，表示请求的来源。")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("curl")]),a._v(" -e "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'https://google.com?q=example'")]),a._v(" https://www.example.com\n")])])]),t("p",[a._v("上面命令将"),t("code",[a._v("Referer")]),a._v("标头设为"),t("code",[a._v("https://google.com?q=example")]),a._v("。")]),a._v(" "),t("p",[t("code",[a._v("-H")]),a._v("参数可以通过直接添加标头"),t("code",[a._v("Referer")]),a._v("，达到同样效果。")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("curl")]),a._v(" -H "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'Referer: https://google.com?q=example'")]),a._v(" https://www.example.com\n")])])])])}),[],!1,null,null,null);s.default=r.exports}}]);
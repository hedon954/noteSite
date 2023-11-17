(window.webpackJsonp=window.webpackJsonp||[]).push([[155],{566:function(t,a,n){"use strict";n.r(a);var s=n(47),e=Object(s.a)({},(function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"_8-nginx-动静分离"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_8-nginx-动静分离"}},[t._v("#")]),t._v(" 8. Nginx 动静分离")]),t._v(" "),n("p",[t._v("Nginx 动静分离简单来说就是把 "),n("strong",[t._v("动态跟静态请求分开")]),t._v(" ，不能理解成只是单纯的把动态页面和静态页面物理分离。严格意义上说应该是动态请求跟静态请求分开，可以理解成使用 Nginx 处理静态页面，Tomcat 处理动态页面。动静分离从目前实现角度来讲大致分为两种：")]),t._v(" "),n("ol",[n("li",[n("p",[t._v("纯粹把静态文件独立成单独的域名，放在独立的服务器上，也是目前主流推崇的方案;")]),t._v(" "),n("p",[n("img",{attrs:{src:"https://hedonspace.oss-cn-beijing.aliyuncs.com/img2/e6c9d24egy1h5fxg2f7smj215q0pcabo.jpg",alt:"image-20210726114037256"}})])]),t._v(" "),n("li",[n("p",[t._v("动态跟静态文件混合在一起发布，通过 nginx 来分开。")]),t._v(" "),n("p",[t._v("通过 "),n("code",[t._v("location")]),t._v(" 指定不同的后缀名实现不同的请求转发。通过 "),n("code",[t._v("expires")]),t._v(" 参数设置，可以使浏览器缓存过期时间，减少与服务器之前的请求和流量。")]),t._v(" "),n("p",[t._v("具体 "),n("code",[t._v("expires")]),t._v(" 定义：是给一个资源设定一个过期时间，也就是说无需去服务端验证，直接通过浏览器自身确认是否过期即可， 所以不会产生额外的流量。此种方法非常适合不经常变动的资源。（如果经常更新的文件， 不建议使用 expires 来缓存)，我这里设置 3d，表示在这 3 天之内访问这个 URL，发送一个请求，比对服务器该文件最后更新时间没有变化，则不会从服务器抓取，返回状态码 304，如果有修改，则直接从服务器重新下载，返回状态码 200。")])])]),t._v(" "),n("h2",{attrs:{id:"_8-1-准备工作"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_8-1-准备工作"}},[t._v("#")]),t._v(" 8.1 准备工作")]),t._v(" "),n("ul",[n("li",[n("p",[t._v("在 Liunx 系统中准备静态资源，用于进行访问：")]),t._v(" "),n("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://hedonspace.oss-cn-beijing.aliyuncs.com/img2/e6c9d24egy1h5fxg36b92j20n008sjrv.jpg",alt:"image-20210726115133976"}})])]),t._v(" "),n("h2",{attrs:{id:"_8-2-核心配置"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_8-2-核心配置"}},[t._v("#")]),t._v(" 8.2 核心配置")]),t._v(" "),n("div",{staticClass:"language-sh extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[t._v("server "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  listen      "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("80")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  server_name "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("172.16")]),t._v(".58.200"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  \n  location /www/ "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      root  /data/"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      index index.html index.htm"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  \n  location /image/ "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      root      /data/"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      autoindex on"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("Vssue")],1)}),[],!1,null,null,null);a.default=e.exports}}]);
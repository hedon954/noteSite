(window.webpackJsonp=window.webpackJsonp||[]).push([[147],{557:function(s,t,a){"use strict";a.r(t);var n=a(47),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"_7-nginx-负载均衡"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_7-nginx-负载均衡"}},[s._v("#")]),s._v(" 7. Nginx 负载均衡")]),s._v(" "),a("blockquote",[a("p",[a("strong",[s._v("Nginx 负载均衡策略：")])]),s._v(" "),a("ol",[a("li",[a("p",[s._v("轮询（默认）")]),s._v(" "),a("p",[s._v("每个请求按时间顺序逐一分配到不同的后端服务器，如果后端服务器 down 掉，能自动剔除。")])]),s._v(" "),a("li",[a("p",[s._v("weight 权重\nweight 代表权重默认为 1，权重越高被分配的客户端越多。")])]),s._v(" "),a("li",[a("p",[s._v("ip_hash\n每个请求按访问 ip 的 hash 结果分配，这样每个访客固定访问一个后端服务器。")])]),s._v(" "),a("li",[a("p",[s._v("fair（第三方）")]),s._v(" "),a("p",[s._v("按后端服务器的响应时间来分配请求，响应时间短的优先分配。")])]),s._v(" "),a("li",[a("p",[s._v("url_hash（第三方）")]),s._v(" "),a("p",[s._v("按访问 url 的 hash 结果来分配请求，使每个 url 定向到同一个（对应的）后端服务器，后端服务器为缓存时比较有效。")])])])]),s._v(" "),a("h2",{attrs:{id:"_7-1-需求"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_7-1-需求"}},[s._v("#")]),s._v(" 7.1 需求")]),s._v(" "),a("ul",[a("li",[s._v("浏览器地址栏输入地址 http://192.168.17.129/edu/a.html，负载均衡效果，平均 8080 和 8081 端口中")])]),s._v(" "),a("h2",{attrs:{id:"_7-2-准备工作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_7-2-准备工作"}},[s._v("#")]),s._v(" 7.2 准备工作")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("停止前面的所有 tomcat 服务器")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ps")]),s._v(" -ef "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" tomcat\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("kill")]),s._v(" -9 端口号\n")])])])]),s._v(" "),a("li",[a("p",[s._v("修改 tomcat8081 下面的 vod 目录为 edu")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" ~/tomcat/tomcat8081/apache-tomcat-9.0.50/webapps/\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mv")]),s._v(" vod/ edu/\n")])])])]),s._v(" "),a("li",[a("p",[s._v("重启两台 tomcat")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 进入每个 tomcat 目录下的 bin 目录")]),s._v("\n./startup.sh\n")])])])])]),s._v(" "),a("h2",{attrs:{id:"_7-3-负载均衡"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_7-3-负载均衡"}},[s._v("#")]),s._v(" 7.3 负载均衡")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("进入 nginx 配置文件目录")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /usr/local/nginx/conf\n")])])])]),s._v(" "),a("li",[a("p",[s._v("编辑配置文件")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" nginx.conf\n")])])])]),s._v(" "),a("li",[a("p",[s._v("内容如下")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("worker_processes  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nevents "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    worker_connections  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1024")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\nhttp "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    include       mime.types"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    default_type  application/octet-stream"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    sendfile        on"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    keepalive_timeout  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("65")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    \n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#负载均衡实例")]),s._v("\n    upstream myserver "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#服务器列表")]),s._v("\n      server "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("172.16")]),s._v(".58.200:8080"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n      server "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("172.16")]),s._v(".58.200:8081"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n    server "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        listen       "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        server_name  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("172.16")]),s._v(".58.200"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#localhost 改成 ip 地址")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#配置转发")]),s._v("\n        location / "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            root   html"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n            proxy_pass http://myserver"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#配置负载均衡实例")]),s._v("\n            index  index.html index.htm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n        error_page   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("500")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("502")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("503")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("504")]),s._v("  /50x.html"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        location "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" /50x.html "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            root   html"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("blockquote",[a("p",[s._v("权重：")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#负载均衡实例")]),s._v("\nupstream myserver "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#服务器列表")]),s._v("\n server "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("172.16")]),s._v(".58.200:8080 "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("weight")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n server "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("172.16")]),s._v(".58.200:8081 "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("weight")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("p",[s._v("ip_hash：")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#负载均衡实例")]),s._v("\nupstream myserver "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n ip_hash"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n server "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("172.16")]),s._v(".58.200:8080"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n server "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("172.16")]),s._v(".58.200:8081"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("p",[s._v("fair：")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#负载均衡实例")]),s._v("\nupstream myserver "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n server "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("172.16")]),s._v(".58.200:8080"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n server "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("172.16")]),s._v(".58.200:8081"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n fair"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("p",[s._v("url_hash：")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#负载均衡实例")]),s._v("\nupstream myserver "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n server "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("172.16")]),s._v(".58.200:8080"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n server "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("172.16")]),s._v(".58.200:8081"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("hash")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$request_uri")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n hash_method crc32"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])])])]),s._v(" "),a("li",[a("p",[s._v("重启 nginx")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("/usr/local/nginx/sbin/nginx -s reload\n")])])])])]),s._v(" "),a("h2",{attrs:{id:"_7-4-验证"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_7-4-验证"}},[s._v("#")]),s._v(" 7.4 验证")]),s._v(" "),a("p",[s._v("访问 http://172.16.58.200/edu/a.html，会发现一会儿是 8080 一会儿是 8081，负载均衡成功。")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://tva1.sinaimg.cn/large/e6c9d24egy1h5fxfbrycij21p607c75m.jpg",alt:"image-20210726112956581"}})]),s._v(" "),a("p",[a("img",{attrs:{src:"https://tva1.sinaimg.cn/large/e6c9d24egy1h5fxfdzm99j21ic078wfo.jpg",alt:"image-20210726112945988"}})]),s._v(" "),a("Vssue")],1)}),[],!1,null,null,null);t.default=e.exports}}]);
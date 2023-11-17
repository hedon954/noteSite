(window.webpackJsonp=window.webpackJsonp||[]).push([[151],{559:function(a,t,s){"use strict";s.r(t);var n=s(47),e=Object(n.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"_5-nginx-反向代理一"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-nginx-反向代理一"}},[a._v("#")]),a._v(" 5. Nginx 反向代理一")]),a._v(" "),s("h2",{attrs:{id:"_5-1-需求"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-1-需求"}},[a._v("#")]),a._v(" 5.1 需求")]),a._v(" "),s("ul",[s("li",[a._v("打开浏览器，在浏览器地址栏输入地址 http://www.123.com，跳转到 Linux 系统的 tomcat 主页面中。")])]),a._v(" "),s("p",[s("img",{attrs:{src:"https://hedonspace.oss-cn-beijing.aliyuncs.com/img2/e6c9d24egy1h5fxdyxwvxj21z40iomzf.jpg",alt:"image-20210726102821010"}})]),a._v(" "),s("h2",{attrs:{id:"_5-2-准备工作"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-2-准备工作"}},[a._v("#")]),a._v(" 5.2 准备工作")]),a._v(" "),s("ol",[s("li",[a._v("在 Linux 系统中安装 tomcat，使用默认端口号 8080")])]),a._v(" "),s("ul",[s("li",[s("p",[a._v("下载 tomcat")]),a._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[a._v("https://mirrors.cnnic.cn/apache/tomcat/tomcat-9/v9.0.50/bin/apache-tomcat-9.0.50.tar.gz\n")])])])]),a._v(" "),s("li",[s("p",[a._v("解压")]),a._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("tar")]),a._v(" -zxvf apache-tomcat-9.0.50.tar.gz\n")])])])]),a._v(" "),s("li",[s("p",[a._v("进入 tomcat/bin 目录")]),a._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" apache-tomcat-9.0.50/bin\n")])])])]),a._v(" "),s("li",[s("p",[a._v("启动 tomcat")]),a._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[a._v("./startup.sh\n")])])])]),a._v(" "),s("li",[s("p",[a._v("检查是否启动")]),a._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 回到上级目录")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 查看 tomcat 运行日志")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("tail")]),a._v(" -f logs/catalina.out\n")])])])]),a._v(" "),s("li",[s("p",[a._v("开放端口号")]),a._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[a._v("firewall-cmd --add-port"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("8080")]),a._v("/tcp --permanent\n")])])])]),a._v(" "),s("li",[s("p",[a._v("重启防火墙")]),a._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[a._v("firewall-cmd --reload\n")])])])]),a._v(" "),s("li",[s("p",[a._v("主机访问 tomcat")]),a._v(" "),s("p",[s("img",{attrs:{src:"https://hedonspace.oss-cn-beijing.aliyuncs.com/img2/e6c9d24egy1h5fxdy2a16j22qc0q0gsw.jpg",alt:"image-20210726102238913"}})])])]),a._v(" "),s("ol",{attrs:{start:"2"}},[s("li",[s("p",[a._v("宿主机配置 "),s("code",[a._v("hosts")]),a._v(" 文件")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("172.16.58.200 www.123.com\n")])])])])]),a._v(" "),s("h2",{attrs:{id:"_5-3-反向代理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-3-反向代理"}},[a._v("#")]),a._v(" 5.3 反向代理")]),a._v(" "),s("ul",[s("li",[s("p",[a._v("进入 nginx 配置文件目录")]),a._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" /usr/local/nginx/conf\n")])])])]),a._v(" "),s("li",[s("p",[a._v("编辑 nginx 配置文件")]),a._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("vim")]),a._v(" nginx.conf\n")])])])]),a._v(" "),s("li",[s("p",[a._v("修改如下：")]),a._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[a._v("worker_processes  "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\nevents "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    worker_connections  "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1024")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n\nhttp "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    include       mime.types"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    default_type  application/octet-stream"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    sendfile        on"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    keepalive_timeout  "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("65")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    server "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n        listen       "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("80")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n        server_name  "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("172.16")]),a._v(".58.200"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#localhost 改成 ip 地址")]),a._v("\n  \n        location / "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n            root   html"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n            proxy_pass http://127.0.0.1:8080"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#配置转发")]),a._v("\n            index  index.html index.htm"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n        error_page   "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("500")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("502")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("503")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("504")]),a._v("  /50x.html"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n        location "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" /50x.html "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n            root   html"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])])]),a._v(" "),s("li",[s("p",[a._v("重启 nginx")]),a._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" /usr/local/nginx/sbin\n./nginx -s reload\n")])])])])]),a._v(" "),s("h2",{attrs:{id:"_5-4-验证"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-4-验证"}},[a._v("#")]),a._v(" 5.4 验证")]),a._v(" "),s("p",[a._v("宿主机访问：http://www.123.com")]),a._v(" "),s("p",[s("img",{attrs:{src:"https://hedonspace.oss-cn-beijing.aliyuncs.com/img2/e6c9d24egy1h5fxdzik11j22qg0ka0zj.jpg",alt:"image-20210726103841239"}})]),a._v(" "),s("Vssue")],1)}),[],!1,null,null,null);t.default=e.exports}}]);
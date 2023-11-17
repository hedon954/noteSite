(window.webpackJsonp=window.webpackJsonp||[]).push([[152],{564:function(t,s,a){"use strict";a.r(s);var n=a(47),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"_6-nginx-反向代理二"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-nginx-反向代理二"}},[t._v("#")]),t._v(" 6. Nginx 反向代理二")]),t._v(" "),a("h2",{attrs:{id:"_6-1-需求"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-1-需求"}},[t._v("#")]),t._v(" 6.1 需求")]),t._v(" "),a("p",[t._v("使用 nginx 反向代理，根据访问的路径跳转到不同端口的服务。nginx 监听端口为 9001：")]),t._v(" "),a("ul",[a("li",[t._v("访问 http://172.16.58.200:9001/edu/ 直接跳转到 127.0.0.1:8080")]),t._v(" "),a("li",[t._v("访问 http://172.16.58.200:9001/vod/ 直接跳转到 127.0.0.1:8081")])]),t._v(" "),a("h2",{attrs:{id:"_6-2-准备工作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-2-准备工作"}},[t._v("#")]),t._v(" 6.2 准备工作")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("停掉之前的 tomcat")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查看进程号")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ps")]),t._v(" -ef "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("grep")]),t._v(" tomcat\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# kill")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("kill")]),t._v(" -9 "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("47780")]),t._v("\n")])])])]),t._v(" "),a("li",[a("p",[t._v("准备文件夹")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" tomcat8080\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" tomcat8081\n")])])])]),t._v(" "),a("li",[a("p",[t._v("复制之前的 tomcat 压缩包")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("cp")]),t._v(" apache-tomcat-9.0.50.tar.gz  ./tomcat8080\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("cp")]),t._v(" apache-tomcat-9.0.50.tar.gz  ./tomcat8081\n")])])])]),t._v(" "),a("li",[a("p",[t._v("解压")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("tar")]),t._v(" -zxvf apache-tomcat-9.0.50.tar.gz\n")])])])]),t._v(" "),a("li",[a("p",[t._v("添加测试文件")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 进入 8080 的 webapps 中，创建测试文件")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" tomcat8080/apache-tomcat-9.0.50/webapps/\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" edu\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" edu\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("vim")]),t._v(" a.html\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("h"),a("span",{pre:!0,attrs:{class:"token operator"}},[a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[t._v("1")]),t._v(">")]),t._v("hello here is "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("808")]),a("span",{pre:!0,attrs:{class:"token operator"}},[a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[t._v("0")]),t._v("<")]),t._v("/hi"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#8081 同理")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" tomcat8081/apache-tomcat-9.0.50/webapps/\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" vod\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" vod\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("vim")]),t._v(" a.html\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("h"),a("span",{pre:!0,attrs:{class:"token operator"}},[a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[t._v("1")]),t._v(">")]),t._v("hello here is "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("808")]),a("span",{pre:!0,attrs:{class:"token operator"}},[a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[t._v("0")]),t._v("<")]),t._v("/hi"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])])]),t._v(" "),a("li",[a("p",[t._v("修改 tomcat8081 端口号")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#修改 tomcat 目录下的 conf 目录下的 server.xml 文件")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#修改前")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Server "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("port")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"8005"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("shutdown")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"SHUTDOWN"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Listener "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("className")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"org.apache.catalina.startup.VersionLoggerListener"')]),t._v(" /"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("-- Security listener. Documentation at /docs/config/listeners.html\n  "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Listener "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("className")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"org.apache.catalina.security.SecurityListener"')]),t._v(" /"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Connector "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("port")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"8080"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("protocol")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"HTTP/1.1"')]),t._v("\n               "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("connectionTimeout")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"20000"')]),t._v("\n               "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("redirectPort")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"8443"')]),t._v(" /"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#修改后")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Server "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("port")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"8015"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("shutdown")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"SHUTDOWN"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Listener "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("className")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"org.apache.catalina.startup.VersionLoggerListener"')]),t._v(" /"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("-- Security listener. Documentation at /docs/config/listeners.html\n  "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Listener "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("className")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"org.apache.catalina.security.SecurityListener"')]),t._v(" /"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Connector "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("port")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"8081"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("protocol")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"HTTP/1.1"')]),t._v("\n               "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("connectionTimeout")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"20000"')]),t._v("\n               "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("redirectPort")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"8443"')]),t._v(" /"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])])]),t._v(" "),a("li",[a("p",[t._v("启动 tomcat")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#进入每个 tomcat 的 bin 目录下")]),t._v("\n./startup.sh\n")])])])]),t._v(" "),a("li",[a("p",[t._v("开发 8081 端口")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("firewall-cmd --add-port"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8081")]),t._v("/tcp --permanent\nfirewall-cmd --reload\n")])])])])]),t._v(" "),a("h2",{attrs:{id:"_6-3-反向代理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-3-反向代理"}},[t._v("#")]),t._v(" 6.3 反向代理")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("配置 nginx 配置文件：")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("vim")]),t._v(" /usr/local/nginx/conf/nginx.conf\n")])])])]),t._v(" "),a("li",[a("p",[t._v("内容如下：")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("worker_processes  "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nevents "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    worker_connections  "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1024")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\nhttp "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    include       mime.types"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    default_type  application/octet-stream"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    sendfile        on"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    keepalive_timeout  "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("65")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    server "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        listen       "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("80")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        server_name  "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("172.16")]),t._v(".58.200"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#localhost 改成 ip 地址")]),t._v("\n  \n        location / "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            root   html"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            proxy_pass http://127.0.0.1:8080"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#配置转发")]),t._v("\n            index  index.html index.htm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        error_page   "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("500")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("502")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("503")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("504")]),t._v("  /50x.html"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        location "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" /50x.html "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            root   html"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    \n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 再加一个 server")]),t._v("\n    server "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        listen       "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("9001")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        server_name  "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("172.16")]),t._v(".58.200"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#localhost 改成 ip 地址")]),t._v("\n        \n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 配置反向代理规则")]),t._v("\n        location ~ /edu/ "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            proxy_pass http://127.0.0.1:8080"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#配置转发")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        \n        location ~ /vod/ "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            proxy_pass http://127.0.0.1:8081"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#配置转发")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])]),t._v(" "),a("li",[a("p",[t._v("重启 nginx")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" /usr/local/nginx/sbin\n./nginx -s reload\n")])])])]),t._v(" "),a("li",[a("p",[t._v("开发 9001 端口")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("firewall-cmd --add-port"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("9001")]),t._v("/tcp --permanent\nfirewall-cmd --reload\n")])])])])]),t._v(" "),a("h2",{attrs:{id:"_6-4-验证"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-4-验证"}},[t._v("#")]),t._v(" 6.4 验证")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("访问 http://172.16.58.200:9001/vod/a.html")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://hedonspace.oss-cn-beijing.aliyuncs.com/img2/e6c9d24egy1h5fxeizzh3j21j607ajsh.jpg",alt:"image-20210726111940747"}})])]),t._v(" "),a("li",[a("p",[t._v("访问 http://172.16.58.200:9001/edu/a.html")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://hedonspace.oss-cn-beijing.aliyuncs.com/img2/e6c9d24egy1h5fxekt5gej21pw07m75y.jpg",alt:"image-20210726111930047"}})])])]),t._v(" "),a("Vssue")],1)}),[],!1,null,null,null);s.default=e.exports}}]);
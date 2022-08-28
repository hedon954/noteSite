(window.webpackJsonp=window.webpackJsonp||[]).push([[144],{555:function(t,s,n){"use strict";n.r(s);var e=n(47),a=Object(e.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"_4-nginx-配置"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-nginx-配置"}},[t._v("#")]),t._v(" 4. Nginx 配置")]),t._v(" "),n("p",[t._v("配置文件位置："),n("code",[t._v("/usr/loca/nginx/conf/nginx.conf")])]),t._v(" "),n("div",{staticClass:"language-sh extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[t._v("cat")]),t._v(" /usr/local/nginx/conf/nginx.conf\n")])])]),n("p",[t._v("输出：")]),t._v(" "),n("div",{staticClass:"language-sh extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#user  nobody;")]),t._v("\nworker_processes  "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#error_log  logs/error.log;")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#error_log  logs/error.log  notice;")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#error_log  logs/error.log  info;")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#pid        logs/nginx.pid;")]),t._v("\n\n\nevents "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    worker_connections  "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1024")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n\nhttp "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    include       mime.types"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    default_type  application/octet-stream"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#log_format  main  '$remote_addr - $remote_user [$time_local] \"$request\" '")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#                  '$status $body_bytes_sent \"$http_referer\" '")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v('#                  \'"$http_user_agent" "$http_x_forwarded_for"\';')]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#access_log  logs/access.log  main;")]),t._v("\n\n    sendfile        on"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#tcp_nopush     on;")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#keepalive_timeout  0;")]),t._v("\n    keepalive_timeout  "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("65")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#gzip  on;")]),t._v("\n\n    server "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        listen       "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("80")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        server_name  localhost"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#charset koi8-r;")]),t._v("\n\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#access_log  logs/host.access.log  main;")]),t._v("\n\n        location / "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            root   html"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            index  index.html index.htm"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#error_page  404              /404.html;")]),t._v("\n\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# redirect server error pages to the static page /50x.html")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#")]),t._v("\n        error_page   "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("500")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("502")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("503")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("504")]),t._v("  /50x.html"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        location "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" /50x.html "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            root   html"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# proxy the PHP scripts to Apache listening on 127.0.0.1:80")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#location ~ \\.php$ {")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#    proxy_pass   http://127.0.0.1;")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#}")]),t._v("\n\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# pass the PHP scripts to FastCGI server listening on 127.0.0.1:9000")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#location ~ \\.php$ {")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#    root           html;")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#    fastcgi_pass   127.0.0.1:9000;")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#    fastcgi_index  index.php;")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#    fastcgi_param  SCRIPT_FILENAME  /scripts$fastcgi_script_name;")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#    include        fastcgi_params;")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#}")]),t._v("\n\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# deny access to .htaccess files, if Apache's document root")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# concurs with nginx's one")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#location ~ /\\.ht {")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#    deny  all;")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#}")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# another virtual host using mix of IP-, name-, and port-based configuration")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#server {")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#    listen       8000;")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#    listen       somename:8080;")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#    server_name  somename  alias  another.alias;")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#    location / {")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#        root   html;")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#        index  index.html index.htm;")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#    }")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#}")]),t._v("\n\n\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# HTTPS server")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#server {")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#    listen       443 ssl;")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#    server_name  localhost;")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#    ssl_certificate      cert.pem;")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#    ssl_certificate_key  cert.key;")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#    ssl_session_cache    shared:SSL:1m;")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#    ssl_session_timeout  5m;")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#    ssl_ciphers  HIGH:!aNULL:!MD5;")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#    ssl_prefer_server_ciphers  on;")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#    location / {")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#        root   html;")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#        index  index.html index.htm;")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#    }")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#}")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("p",[t._v("下面对该配置文件进行一定的归纳整理。配置文件主要分为三块：")]),t._v(" "),n("ul",[n("li",[t._v("全局块：配置服务器整体运行的配置指令")]),t._v(" "),n("li",[t._v("events 块：影响 Nginx 服务器与用户的网络连接")]),t._v(" "),n("li",[t._v("http 块\n"),n("ul",[n("li",[t._v("http 全局块")]),t._v(" "),n("li",[t._v("server 块")])])])]),t._v(" "),n("h2",{attrs:{id:"_4-1-1-全局块"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-1-全局块"}},[t._v("#")]),t._v(" 4.1.1 全局块")]),t._v(" "),n("p",[t._v("从配置文件开始到 events 块之间的内容，主要会设置一些影响 nginx 服务器整体运行的配置指令。")]),t._v(" "),n("div",{staticClass:"language-sh extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#user  nobody;")]),t._v("\nworker_processes  "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#error_log  logs/error.log;")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#error_log  logs/error.log  notice;")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#error_log  logs/error.log  info;")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#pid        logs/nginx.pid;")]),t._v("\n")])])]),n("p",[t._v("主要包括：")]),t._v(" "),n("ul",[n("li",[n("p",[t._v("配置运行 Nginx 服务器的用户（组）")])]),t._v(" "),n("li",[n("p",[t._v("允许生成的 "),n("code",[t._v("worker process")]),t._v(" 数")]),t._v(" "),n("blockquote",[n("p",[t._v("这是 Nginx 服务器并发处理服务的关键配置，"),n("code",[t._v("worker_processes")]),t._v(" 值越大，可以支持的并发处理量也越多，但是会受到硬件、软件等设备的制约。")])])]),t._v(" "),n("li",[n("p",[t._v("进程 PID 存放路径")])]),t._v(" "),n("li",[n("p",[t._v("日志存放路径和类型")])]),t._v(" "),n("li",[n("p",[t._v("配置文件的引入")])]),t._v(" "),n("li",[n("p",[t._v("...")])])]),t._v(" "),n("h2",{attrs:{id:"_4-1-2-events-块"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-2-events-块"}},[t._v("#")]),t._v(" 4.1.2 events 块")]),t._v(" "),n("div",{staticClass:"language-sh extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[t._v("events "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    worker_connections  "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1024")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("p",[n("code",[t._v("events")]),t._v(" 块涉及的指令主要影响 Nginx 服务器与用户的网络连接，常用的设置包括：")]),t._v(" "),n("ul",[n("li",[t._v("是否开启对多 "),n("code",[t._v("work process")]),t._v(" 下的网络连接进行序列化")]),t._v(" "),n("li",[t._v("是否允许同时接收多个网络连接")]),t._v(" "),n("li",[t._v("选取哪种事件驱动模型来处理连接请求")]),t._v(" "),n("li",[t._v("每个 word process 可以同时支持的最大连接数")]),t._v(" "),n("li",[t._v("...")])]),t._v(" "),n("p",[t._v("上述例子就表示每个 "),n("code",[t._v("work process")]),t._v(" 支持的最大连接数为 "),n("code",[t._v("1024")]),t._v(". 这部分的配置对 Nginx 的性能影响较大，在实际中应该灵活配置。")]),t._v(" "),n("h2",{attrs:{id:"_4-1-3-http-块"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-3-http-块"}},[t._v("#")]),t._v(" 4.1.3 http 块")]),t._v(" "),n("p",[t._v("这算是 Nginx 服务器配置中最频繁的部分，代理、缓存和日志定义等绝大多数功能和第三方模块的配置都在这里。 需要注意的是：http 块也可以包括 http 全局块、server 块。")]),t._v(" "),n("div",{staticClass:"language-sh extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[t._v("http "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# http 全局快")]),t._v("\n    include       mime.types"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    default_type  application/octet-stream"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    sendfile        on"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    keepalive_timeout  "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("65")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    \n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# server 块")]),t._v("\n    server "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        listen       "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("80")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        server_name  localhost"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        \n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# location 块")]),t._v("\n        location / "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            root   html"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            index  index.html index.htm"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# location 块")]),t._v("\n        error_page   "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("500")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("502")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("503")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("504")]),t._v("  /50x.html"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        location "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" /50x.html "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            root   html"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("h3",{attrs:{id:"_4-1-3-1-http-全局块"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-3-1-http-全局块"}},[t._v("#")]),t._v(" 4.1.3.1 http 全局块")]),t._v(" "),n("p",[t._v("http 全局块配置的指令包括：")]),t._v(" "),n("ul",[n("li",[t._v("文件引入")]),t._v(" "),n("li",[t._v("MIME-TYPE 定义")]),t._v(" "),n("li",[t._v("日志自定义")]),t._v(" "),n("li",[t._v("连接超时时间")]),t._v(" "),n("li",[t._v("单链接请求数上限")]),t._v(" "),n("li",[t._v("...")])]),t._v(" "),n("h3",{attrs:{id:"_4-1-3-2-server-块"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-3-2-server-块"}},[t._v("#")]),t._v(" 4.1.3.2 server 块")]),t._v(" "),n("p",[t._v("这块和虚拟主机有密切关系，虚拟主机从用户角度看，和一台独立的硬件主机是完全一样的，该技术的产生是为了节省互联网服务器硬件成本。")]),t._v(" "),n("ul",[n("li",[t._v("每个 http 块可以包括多个 server 块，而每个 server 块就相当于一个虚拟主机。")]),t._v(" "),n("li",[t._v("而每个 server 块也分为全局 server 块，以及可以同时包含多个 location 块。")])]),t._v(" "),n("p",[n("strong",[t._v("全局 server 块：")])]),t._v(" "),n("ul",[n("li",[t._v("最常见的配置是本虚拟机主机的监听配置和本虚拟主机的名称或 IP 配置。")])]),t._v(" "),n("p",[n("strong",[t._v("location 块：")])]),t._v(" "),n("ul",[n("li",[t._v("一个 server 块可以配置多个 location 块。")]),t._v(" "),n("li",[t._v("这块的主要作用是基于 Nginx 服务器接收到的请求字符串（例如 server_name/uri-string），对虚拟主机名称 (也可以是 IP 别名)之外的字符串（例如 前面的 /uri-string）进行匹配，对特定的请求进行处理。地址定向、数据缓存和应答控制等功能，还有许多第三方模块的配置也在这里进行。")])]),t._v(" "),n("Vssue")],1)}),[],!1,null,null,null);s.default=a.exports}}]);
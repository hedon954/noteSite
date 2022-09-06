(window.webpackJsonp=window.webpackJsonp||[]).push([[148],{558:function(s,a,t){"use strict";t.r(a);var e=t(47),r=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"_2-nginx-安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-nginx-安装"}},[s._v("#")]),s._v(" 2. Nginx 安装")]),s._v(" "),t("blockquote",[t("p",[s._v("Linux：本文")]),s._v(" "),t("p",[s._v("Mac：brew install nginx")]),s._v(" "),t("p",[s._v("Windows："),t("a",{attrs:{href:"https://www.huaweicloud.com/articles/824d3f0a75ad0a4c6b586754731e601b.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("windows 下安装和配置 nginx"),t("OutboundLink")],1)]),s._v(" "),t("p",[s._v("Docker：docker pull nginx")])]),s._v(" "),t("h2",{attrs:{id:"_2-1-安装-openssl、zlib、gcc-依赖"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-安装-openssl、zlib、gcc-依赖"}},[s._v("#")]),s._v(" 2.1 安装 openssl、zlib、gcc 依赖")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("yum -y "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" zlib zlib-devel gcc-c++ libtool openssl openssl-devel\n")])])]),t("h2",{attrs:{id:"_2-2-安装-pcre-依赖"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-安装-pcre-依赖"}},[s._v("#")]),s._v(" 2. 2 安装 pcre 依赖")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("下载 pcre 压缩文件")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" http://downloads.sourceforge.net/project/pcre/pcre/8.37/pcre-8.37.tar.gz\n")])])])]),s._v(" "),t("li",[t("p",[s._v("解压")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" -zxvf pcre-8.37.tar.gz\n")])])])]),s._v(" "),t("li",[t("p",[s._v("进入 pcre 目录")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" pcre-8.37\n")])])])]),s._v(" "),t("li",[t("p",[s._v("编译")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("./configure\n")])])])]),s._v(" "),t("li",[t("p",[s._v("安装")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v("\n")])])])]),s._v(" "),t("li",[t("p",[s._v("检查")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("pcre-config --version\n")])])])])]),s._v(" "),t("h2",{attrs:{id:"_2-3-安装-nginx"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-安装-nginx"}},[s._v("#")]),s._v(" 2.3 安装 Nginx")]),s._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"http://nginx.org/en/download.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("Nginx 官网"),t("OutboundLink")],1)])]),s._v(" "),t("p",[s._v("我这个选的是 "),t("code",[s._v("nginx-1.16.1")]),s._v(" 版本")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("下载 nginx 压缩文件")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" http://nginx.org/download/nginx-1.16.1.tar.gz\n")])])])]),s._v(" "),t("li",[t("p",[s._v("解压")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" -zxvf nginx-1.16.1.tar.gz\n")])])])]),s._v(" "),t("li",[t("p",[s._v("进入 nginx 目录")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" nginx-1.16.1\n")])])])]),s._v(" "),t("li",[t("p",[s._v("编译")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("./configure\n")])])])]),s._v(" "),t("li",[t("p",[s._v("安装")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v("\n")])])])])]),s._v(" "),t("h2",{attrs:{id:"_2-4-启动-nginx"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-启动-nginx"}},[s._v("#")]),s._v(" 2.4 启动 Nginx")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("查看开放端口")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("firewall-cmd --list-all\n")])])]),t("p",[s._v("输出：默认不开放端口")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("public "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("active"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  target: default\n  icmp-block-inversion: no\n  interfaces: ens33\n  sources: \n  services: dhcpv6-client "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ssh")]),s._v("\n  ports: \n  protocols: \n  masquerade: no\n  forward-ports: \n  source-ports: \n  icmp-blocks: \n  rich rules: \n")])])])]),s._v(" "),t("li",[t("p",[s._v("设置开放端口")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("firewall-cmd --add-service"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("http --permanent\nfirewall-cmd --add-port"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")]),s._v("/tcp --permanent\n")])])])]),s._v(" "),t("li",[t("p",[s._v("重启防火墙")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("firewall-cmd --reload\n")])])])]),s._v(" "),t("li",[t("p",[s._v("再看开放端口")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("firewall-cmd --list-all\n")])])]),t("p",[s._v("输出：已开放 80 端口")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("public (active)\n  target: default\n  icmp-block-inversion: no\n  interfaces: ens33\n  sources: \n  services: dhcpv6-client ssh\n  ports: 80/tcp\n  protocols: \n  masquerade: no\n  forward-ports: \n  source-ports: \n  icmp-blocks: \n  rich rules:\n")])])])]),s._v(" "),t("li",[t("p",[s._v("进入 "),t("code",[s._v("/usr/local/nginx/sbin")]),s._v(" 目录")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /usr/local/nginx/sbin\n")])])])]),s._v(" "),t("li",[t("p",[s._v("运行 nginx")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("./nginx\n")])])])]),s._v(" "),t("li",[t("p",[s._v("访问 nginx")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1\n")])])]),t("p",[s._v("输出：")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# curl 127.0.0.1")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("DOCTYPE html"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("html"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("head"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("title"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("Welcome to nginx"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("/title"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("style"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n    body "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        width: 35em"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        margin: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" auto"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        font-family: Tahoma, Verdana, Arial, sans-serif"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("/style"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("/head"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("body"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("h"),t("span",{pre:!0,attrs:{class:"token operator"}},[t("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("1")]),s._v(">")]),s._v("Welcome to nginx"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("/h"),t("span",{pre:!0,attrs:{class:"token operator"}},[t("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("1")]),s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("p"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("If you see this page, the nginx web server is successfully installed and\nworking. Further configuration is required."),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("/p"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("p"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("For online documentation and support please refer to\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("a "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("href")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"http://nginx.org/"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("nginx.org"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("/a"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("."),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("br/"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\nCommercial support is available at\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("a "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("href")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"http://nginx.com/"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("nginx.com"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("/a"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("."),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("/p"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("p"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("em"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("Thank you "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" using nginx."),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("/em"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("/p"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("/body"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("/html"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])])])])]),s._v(" "),t("Vssue")],1)}),[],!1,null,null,null);a.default=r.exports}}]);
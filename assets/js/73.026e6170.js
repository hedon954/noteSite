(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{482:function(s,a,t){"use strict";t.r(a);var n=t(47),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"二、mongodb-单机部署"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#二、mongodb-单机部署"}},[s._v("#")]),s._v(" 二、MongoDB 单机部署")]),s._v(" "),t("blockquote",[t("p",[s._v("参考："),t("a",{attrs:{href:"https://docs.mongodb.com/v4.2/administration/install-community/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Install MongoDB Community Edition"),t("OutboundLink")],1)])]),s._v(" "),t("h2",{attrs:{id:"_1-macos"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-macos"}},[s._v("#")]),s._v(" 1. MacOS")]),s._v(" "),t("h3",{attrs:{id:"_1-1-下载-mongodb"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-下载-mongodb"}},[s._v("#")]),s._v(" 1.1 下载 MongoDB")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("前往 "),t("a",{attrs:{href:"https://www.mongodb.com/try/download/community?tck=docs_server",target:"_blank",rel:"noopener noreferrer"}},[s._v("MongoDB"),t("OutboundLink")],1),s._v(" 下载 tar 包")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://tva1.sinaimg.cn/large/008i3skNgy1gtey3fm2inj62940j2td702.jpg",alt:"image-20210813101948139"}})])]),s._v(" "),t("li",[t("p",[s._v("解压")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" -zxvf mongodb-macos-x86_64-4.2.15.tgz\n")])])])]),s._v(" "),t("li",[t("p",[s._v("进入  mongodb 目录")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" mongodb-macos-x86_64-4.2.15\n")])])])]),s._v(" "),t("li",[t("p",[s._v("配置环境变量")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v("  /usr/local/bin/\n")])])]),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ln")]),s._v(" -s  /Users/bytedance/mongodb-macos-x86_64-4.2.15/bin/* /usr/local/bin/\n")])])])]),s._v(" "),t("li",[t("p",[s._v("创建 mongodb 所需的目录")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 数据目录")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" -p /usr/local/var/mongodb\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 日志目录")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" -p /usr/local/var/log/mongodb\n")])])])]),s._v(" "),t("li",[t("p",[s._v("启动 mongod")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("mongod --config /usr/local/etc/mongod.conf\n")])])])]),s._v(" "),t("li",[t("p",[s._v("查看 mongod 是否启动成功")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ps")]),s._v(" aux "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" -v "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" mongod\n")])])])]),s._v(" "),t("li",[t("p",[s._v("进入 mongo")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("mongo\n")])])]),t("p",[s._v("输出：")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("➜  ~ mongo\nMongoDB shell version v4.2.15\nconnecting to: mongodb://127.0.0.1:27017/?compressors"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("disabled"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("gssapiServiceName")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("mongodb\nImplicit session: session "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"id"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" UUID"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"c4854ee8-8399-4e11-b7cb-d601bb23b3ec"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\nMongoDB server version: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4.2")]),s._v(".12\nServer has startup warnings:\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2021")]),s._v("-08-12T11:49:07.389+0800 I  CONTROL  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("initandlisten"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2021")]),s._v("-08-12T11:49:07.389+0800 I  CONTROL  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("initandlisten"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" ** WARNING: Access control is not enabled "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" the database.\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2021")]),s._v("-08-12T11:49:07.389+0800 I  CONTROL  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("initandlisten"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" **          Read and "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("write")]),s._v(" access to data and configuration is unrestricted.\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2021")]),s._v("-08-12T11:49:07.389+0800 I  CONTROL  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("initandlisten"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n---\nEnable MongoDB's "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("free")]),s._v(" cloud-based monitoring service, "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("which")]),s._v(" will "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v(" receive and display\nmetrics about your deployment "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("disk utilization, CPU, operation statistics, etc"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(".\n\nThe monitoring data will be available on a MongoDB website with a unique URL accessible to you\nand anyone you share the URL with. MongoDB may use this information to "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" product\nimprovements and to suggest MongoDB products and deployment options to you.\n\nTo "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("enable")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("free")]),s._v(" monitoring, run the following command: db.enableFreeMonitoring"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nTo permanently disable this reminder, run the following command: db.disableFreeMonitoring"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n---\n\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" \n")])])])]),s._v(" "),t("li",[t("p",[s._v("进行 "),t("code",[s._v("show dbs")]),s._v(" 查看默认库")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" show dbs\nadmin   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(".000GB\nconfig  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(".000GB\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("local")]),s._v("   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(".000GB\n")])])])])]),s._v(" "),t("h3",{attrs:{id:"_1-2-下载-mongodb-compass"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-下载-mongodb-compass"}},[s._v("#")]),s._v(" 1.2 下载 MongoDB Compass")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("前往 "),t("a",{attrs:{href:"https://www.mongodb.com/try/download/compass",target:"_blank",rel:"noopener noreferrer"}},[s._v("MongoDB Compass"),t("OutboundLink")],1),s._v(" 下载")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://tva1.sinaimg.cn/large/008i3skNly1gteyxdcdd0j626m0jeq7s02.jpg",alt:"image-20210813104837141"}})])]),s._v(" "),t("li",[t("p",[s._v("安装")])])]),s._v(" "),t("h2",{attrs:{id:"_2-linux"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-linux"}},[s._v("#")]),s._v(" 2. Linux")]),s._v(" "),t("blockquote",[t("p",[s._v("CentOS 7")])]),s._v(" "),t("ul",[t("li",[t("p",[s._v("安装相关依赖")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("yum "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" libcurl openssl\n")])])])]),s._v(" "),t("li",[t("p",[s._v("下载 mongodb tar 包")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" https://fastdl.mongodb.org/linux/mongodb-linux-x86_64-rhel70-4.2.15.tgz\n")])])])]),s._v(" "),t("li",[t("p",[s._v("解压")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" -zxvf mongodb-linux-x86_64-rhel70-4.2.15.tgz\n")])])])]),s._v(" "),t("li",[t("p",[s._v("进入 mongodb 目录")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" mongodb-linux-x86_64-rhel70-4.2.15\n")])])])]),s._v(" "),t("li",[t("p",[s._v("配置环境变量")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" mongodb-linux-x86_64-rhel70-4.2.15/bin/* /usr/local/bin/\n")])])]),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ln")]),s._v(" -s  mongodb-linux-x86_64-rhel70-4.2.15/bin/* /usr/local/bin/\n")])])])]),s._v(" "),t("li",[t("p",[s._v("创建 mongodb 所需的目录")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 数据目录")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" -p /usr/local/var/mongodb\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 日志目录")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" -p /usr/local/var/log/mongodb\n")])])])]),s._v(" "),t("li",[t("p",[s._v("启动 mongod")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("mongod --config /usr/local/etc/mongod.conf\n")])])])]),s._v(" "),t("li",[t("p",[s._v("查看 mongod 是否启动成功")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ps")]),s._v(" aux "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" -v "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" mongod\n")])])])]),s._v(" "),t("li",[t("p",[s._v("进入 mongo")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("mongo\n")])])])])]),s._v(" "),t("Vssue")],1)}),[],!1,null,null,null);a.default=e.exports}}]);
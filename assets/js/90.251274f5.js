(window.webpackJsonp=window.webpackJsonp||[]).push([[90],{501:function(s,a,t){"use strict";t.r(a);var e=t(47),n=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"_2-clickhouse-安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-clickhouse-安装"}},[s._v("#")]),s._v(" 2. ClickHouse 安装")]),s._v(" "),t("blockquote",[t("p",[s._v("CentOS7")])]),s._v(" "),t("h2",{attrs:{id:"_2-1-准备工作"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-准备工作"}},[s._v("#")]),s._v(" 2.1 准备工作")]),s._v(" "),t("ol",[t("li",[t("p",[s._v("关闭防火墙")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("systemctl disable firewalld\n")])])])]),s._v(" "),t("li",[t("p",[s._v("取消打开文件数限制")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" /etc/security/limits.conf\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" /etc/security/limits.d/20-nproc.conf\n")])])]),t("p",[s._v("分别在文件末尾添加：")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("* soft nofile "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("65536")]),s._v("\n* hard nofile "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("65536")]),s._v("\n* soft nproc "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("131072")]),s._v("\n* hard nproc "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("131072")]),s._v("\n")])])])]),s._v(" "),t("li",[t("p",[s._v("安装 libtoll 和 unixODBC 依赖")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" yum "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" -y libtool\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" yum "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" -y *unixODBC*\n")])])])]),s._v(" "),t("li",[t("p",[s._v("取消 SELINUX")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" /etc/selinux/config\n")])])]),t("p",[s._v("将 SELINUX 修改为 disabled")])]),s._v(" "),t("li",[t("p",[s._v("重启")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("reboot")]),s._v("\n")])])])])]),s._v(" "),t("h2",{attrs:{id:"_2-2-单机安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-单机安装"}},[s._v("#")]),s._v(" 2.2 单机安装")]),s._v(" "),t("blockquote",[t("p",[s._v("参考官网："),t("a",{attrs:{href:"https://clickhouse.com/#quick-start",target:"_blank",rel:"noopener noreferrer"}},[s._v("ClickHouser"),t("OutboundLink")],1)])]),s._v(" "),t("ol",[t("li",[t("p",[s._v("创建 clickhouse 目录")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" -p /opt/software/clickhouse\n")])])])]),s._v(" "),t("li",[t("p",[s._v("进入 clickhouse 目录")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /opt/software/clickhouse\n")])])])]),s._v(" "),t("li",[t("p",[s._v("下载安装包")]),s._v(" "),t("p",[s._v("在该网站 https://repo.yandex.ru/clickhouse/rpm/stable/x86_64/ 中找到想要下载的版本的安装包，总共需要 4 个：")]),s._v(" "),t("ul",[t("li",[s._v("clickhouse-client")]),s._v(" "),t("li",[s._v("clickhouse-common-static")]),s._v(" "),t("li",[s._v("clickhouse-common-static-dbg")]),s._v(" "),t("li",[s._v("clickhouse-server")])]),s._v(" "),t("p",[s._v("本次使用的版本为：21.7.3.14")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" https://repo.yandex.ru/clickhouse/rpm/stable/x86_64/clickhouse-client-21.7.3.14-2.noarch.rpm\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" https://repo.yandex.ru/clickhouse/rpm/stable/x86_64/clickhouse-common-static-21.7.3.14-2.x86_64.rpm\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" https://repo.yandex.ru/clickhouse/rpm/stable/x86_64/clickhouse-common-static-dbg-21.7.3.14-2.x86_64.rpm\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" https://repo.yandex.ru/clickhouse/rpm/stable/x86_64/clickhouse-server-21.7.3.14-2.noarch.rpm\n")])])])]),s._v(" "),t("li",[t("p",[s._v("安装")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("rpm")]),s._v(" -ivh *.rpm\n")])])]),t("p",[s._v("安装后，常用的默认路径：")]),s._v(" "),t("ul",[t("li",[s._v("bin    ->  /usr/bin/")]),s._v(" "),t("li",[s._v("conf  ->  /etc/clickhouse-server/")]),s._v(" "),t("li",[s._v("lib     ->  /var/lib/clickhouse/")]),s._v(" "),t("li",[s._v("log    ->  /var/log/clickhouse/")])])]),s._v(" "),t("li",[t("p",[s._v("修改配置文件，支持远程访问")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" /etc/clickhouse-server/config.xml\n")])])]),t("p",[s._v("查找 listen，将下面这一行的注释打开：\n"),t("img",{attrs:{src:"https://tva1.sinaimg.cn/large/e6c9d24egy1gzu89enocuj21bn0u0q8e.jpg",alt:"image-20220301113659228"}})])])]),s._v(" "),t("h2",{attrs:{id:"_2-3-测试结果"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-测试结果"}},[s._v("#")]),s._v(" 2.3 测试结果")]),s._v(" "),t("ol",[t("li",[t("p",[s._v("启动 clickhouse-server")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" systemctl start clickhouse-server\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#或者：sudo clickhouse start")]),s._v("\n")])])])]),s._v(" "),t("li",[t("p",[s._v("使用客户端连接")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("clickhouse-client -m\n")])])]),t("ul",[t("li",[t("code",[s._v("-m")]),s._v(": 可以在命令窗口输入多行命令，用分号来识别结尾；")])]),s._v(" "),t("p",[s._v("输出：（默认端口：9000）")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("ClickHouse client version "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("21.7")]),s._v(".3.14 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("official build"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(".\nConnecting to localhost:9000 as user default.\nConnected to ClickHouse server version "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("21.7")]),s._v(".3 revision "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("54449")]),s._v(".\n\nlocalhost "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])])])]),s._v(" "),t("li",[t("p",[s._v("执行命令")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("localhost "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" show databases"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\nSHOW DATABASES\n\nQuery id: 2559789d-835a-4806-9cb3-cff05f14c25f\n\n┌─name────┐\n│ default │\n│ system  │\n└─────────┘\n\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" rows "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" set. Elapsed: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.004")]),s._v(" sec.\n")])])])]),s._v(" "),t("li",[t("p",[s._v("测试完毕，安装成功。")])])]),s._v(" "),t("Vssue")],1)}),[],!1,null,null,null);a.default=n.exports}}]);
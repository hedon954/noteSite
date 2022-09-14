(window.webpackJsonp=window.webpackJsonp||[]).push([[158],{566:function(a,s,t){"use strict";t.r(s);var l=t(47),e=Object(l.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"_3-rabbitmq-的安装-centos-7-x"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-rabbitmq-的安装-centos-7-x"}},[a._v("#")]),a._v(" 3. RabbitMQ 的安装（CentOS 7.x）")]),a._v(" "),t("blockquote",[t("p",[a._v("参考：https://www.cnblogs.com/fengyumeng/p/11133924.html")])]),a._v(" "),t("h2",{attrs:{id:"_3-1-安装-perl、wget-工具"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-安装-perl、wget-工具"}},[a._v("#")]),a._v(" 3.1 安装 perl、wget 工具")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[a._v("yum -y "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" gcc glibc-devel "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("make")]),a._v(" ncurses-devel openssl-devel xmlto perl "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("wget")]),a._v(" gtk2-devel binutils-devel\n")])])]),t("h2",{attrs:{id:"_3-2-安装-erlang"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-安装-erlang"}},[a._v("#")]),a._v(" 3.2 安装 erlang")]),a._v(" "),t("ul",[t("li",[a._v("下载安装包")])]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("wget")]),a._v(" http://erlang.org/download/otp_src_22.0.tar.gz\n")])])]),t("blockquote",[t("p",[a._v("这里会非常非常慢，这里提供网盘链接（包括 erlang、rabbitmq、socat），可以直接下载，不过如果版本变了那就没办法了，可以去找找看镜像站有没有。")]),a._v(" "),t("p",[a._v("链接: https://pan.baidu.com/s/1foq6lg9GG31pywsVgQuurQ  密码: t5da")])]),a._v(" "),t("ul",[t("li",[a._v("解压")])]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("tar")]),a._v(" -zxvf otp_src_22.0.tar.gz\n")])])]),t("ul",[t("li",[a._v("移动解压后得到的文件夹到 /usr/local/")])]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("mv")]),a._v(" otp_src_22.0 /usr/local/\n")])])]),t("ul",[t("li",[a._v("切换目录")])]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" /usr/local/otp_src_22.0/\n")])])]),t("ul",[t("li",[a._v("创建即将安装 erlang 的目录")])]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("mkdir")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v("/erlang\n")])])]),t("ul",[t("li",[a._v("配置安装环境")])]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[a._v("./configure --prefix"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("/usr/local/erlang\n")])])]),t("p",[a._v("这里有报错的话别管。")]),a._v(" "),t("ul",[t("li",[a._v("安装")])]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("make")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v("\n")])])]),t("ul",[t("li",[a._v("检查是否安装成功")])]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[a._v("ll /usr/local/erlang/bin\n")])])]),t("ul",[t("li",[a._v("配置环境变量")])]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("echo")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'export PATH="),t("span",{pre:!0,attrs:{class:"token environment constant"}},[a._v("$PATH")]),a._v(":/usr/local/erlang/bin'")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">>")]),a._v(" /etc/profile\n")])])]),t("ul",[t("li",[a._v("刷新配置文件")])]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("source")]),a._v(" /etc/profile\n")])])]),t("ul",[t("li",[a._v("进入 erlang 编辑器")])]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[a._v("erl\n")])])]),t("p",[a._v("如果出现以下界面，就说明安装成功啦~")]),a._v(" "),t("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://tva1.sinaimg.cn/large/007S8ZIlly1gixk5469apj313e062ab4.jpg"}}),a._v(" "),t("ul",[t("li",[a._v("退出")])]),a._v(" "),t("div",{staticClass:"language-erl extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("halt().\n")])])]),t("h2",{attrs:{id:"_3-3-安装-socat"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-安装-socat"}},[a._v("#")]),a._v(" 3.3 安装 socat")]),a._v(" "),t("blockquote",[t("p",[a._v("socat作用是在两个流之间建立双向的通道，且支持众多协议和链接方式：ip，tcp，udp，ipv6，pipe，exec，system，open，proxy，openssl，socket 等。")])]),a._v(" "),t("p",[a._v("将上面提供的 socat 安装包上传到 Centos 中")]),a._v(" "),t("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://tva1.sinaimg.cn/large/007S8ZIlly1giximtzrsaj30bc01oglj.jpg",alt:"image-20200920230658433"}}),a._v(" "),t("p",[a._v("然后在对应的目录下执行命令：")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("rpm")]),a._v(" -ivh socat-1.7.3.2-2.el7.x86_64.rpm\n")])])]),t("h2",{attrs:{id:"_3-4-安装-rabbitmq"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-4-安装-rabbitmq"}},[a._v("#")]),a._v(" 3.4 安装 RabbitMQ")]),a._v(" "),t("ul",[t("li",[a._v("下载")])]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("wget")]),a._v(" https://github.com/rabbitmq/rabbitmq-server/releases/download/v3.7.15/rabbitmq-server-generic-unix-3.7.15.tar.xz\n")])])]),t("p",[a._v("如果嫌太慢也可以将上述网盘提供的后缀为"),t("code",[a._v("tar.xz")]),a._v(" RabbitMQ 安装包上传到 CentOS 中")]),a._v(" "),t("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://tva1.sinaimg.cn/large/007S8ZIlly1gixiqwgm2bj30h401w0sq.jpg",alt:"image-20200920231052861"}}),a._v(" "),t("ul",[t("li",[a._v("安装 xz 解压工具")])]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[a._v("yum "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" -y xz\n")])])]),t("ul",[t("li",[a._v("解压"),t("code",[a._v("tar.xz")]),a._v("压缩包，得到 tar 包")])]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[a._v("/bin/xz -d rabbitmq-server-generic-unix-3.7.15.tar.xz\n")])])]),t("ul",[t("li",[a._v("解压 tar 包")])]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("tar")]),a._v(" -xvf rabbitmq-server-generic-unix-3.7.15.tar\n")])])]),t("ul",[t("li",[a._v("移动到 /usr/local 并改名为 rabbitmq")])]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("mv")]),a._v(" rabbitmq_server-3.7.15/ /usr/local/rabbitmq\n")])])]),t("ul",[t("li",[a._v("配置环境变量")])]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("echo")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'export PATH="),t("span",{pre:!0,attrs:{class:"token environment constant"}},[a._v("$PATH")]),a._v(":/usr/local/rabbitmq/sbin'")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">>")]),a._v(" /etc/profile\n")])])]),t("ul",[t("li",[a._v("刷新配置文件")])]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("source")]),a._v(" /etc/profile\n")])])]),t("ul",[t("li",[a._v("创建配置目录")])]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("mkdir")]),a._v(" /etc/rabbitmq\n")])])]),t("ul",[t("li",[a._v("将 RabbitMQ 配置文件模板复制到 /etc/rabbitmq/ 目录下")])]),a._v(" "),t("p",[a._v("我这里安装的时候没找到这个模板文件，所以需要从 github 上下载，链接如下：")]),a._v(" "),t("p",[a._v("https://github.com/rabbitmq/rabbitmq-server/blob/master/docs/rabbitmq.conf.example")]),a._v(" "),t("p",[a._v("复制到  /etc/rabbitmq/ 目录下并改名为 rabbitmq.config")]),a._v(" "),t("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://tva1.sinaimg.cn/large/007S8ZIlly1gixiyhzkbrj30o002wglk.jpg",alt:"image-20200920231810781"}}),a._v(" "),t("ul",[t("li",[a._v("开启来宾账户")])]),a._v(" "),t("p",[a._v("开启这个来宾访问的原因是为了能访问 RabbitMQ 的 Web 管理页面。")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("vim")]),a._v(" /etc/rabbitmq/rabbitmq.config\n")])])]),t("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://tva1.sinaimg.cn/large/007S8ZIlly1gixizxwhyjj311w0nc40f.jpg",alt:"image-20200920231933208"}}),a._v(" "),t("ul",[t("li",[a._v("开启 RabbitMQ")])]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[a._v("rabbitmq-server -detached\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# rabbitmqctl start_app")]),a._v("\n")])])]),t("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://tva1.sinaimg.cn/large/007S8ZIlly1gixj4p7fqjj30ti01w3yg.jpg",alt:"image-20200920232408473"}}),a._v(" "),t("ul",[t("li",[a._v("关闭 RabbitMQ")])]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[a._v("rabbitmqctl stop\n")])])]),t("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://tva1.sinaimg.cn/large/007S8ZIlly1gixj52rv3kj30qu026jrb.jpg",alt:"image-20200920232430302"}}),a._v(" "),t("ul",[t("li",[a._v("查看 RabbitMQ 状态")])]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[a._v("rabbitmqctl status\n")])])]),t("Vssue")],1)}),[],!1,null,null,null);s.default=e.exports}}]);
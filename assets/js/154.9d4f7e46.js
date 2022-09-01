(window.webpackJsonp=window.webpackJsonp||[]).push([[154],{564:function(t,a,s){"use strict";s.r(a);var e=s(47),r=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"_5-rabbitmq-的-web-管理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-rabbitmq-的-web-管理"}},[t._v("#")]),t._v(" 5. RabbitMQ 的 Web 管理")]),t._v(" "),s("h2",{attrs:{id:"_5-1-在开启-rabbitmq-的基础上开启-web-插件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-1-在开启-rabbitmq-的基础上开启-web-插件"}},[t._v("#")]),t._v(" 5.1 在开启 RabbitMQ 的基础上开启 web 插件")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("rabbitmq-plugins "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("enable")]),t._v(" rabbitmq_management\n")])])]),s("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://tva1.sinaimg.cn/large/007S8ZIlly1gixj6d88rxj310408uwf0.jpg",alt:"image-20200920232545151"}}),t._v(" "),s("h2",{attrs:{id:"_5-2-访问-web-管理界面"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-2-访问-web-管理界面"}},[t._v("#")]),t._v(" 5.2 访问 web 管理界面")]),t._v(" "),s("h3",{attrs:{id:"_5-2-1-本机的话访问-http-localhost-15672"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-2-1-本机的话访问-http-localhost-15672"}},[t._v("#")]),t._v(" 5.2.1 本机的话访问 http://localhost:15672")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://tva1.sinaimg.cn/large/007S8ZIlly1gixj7vbek0j31c00u0n0p.jpg",alt:"image-20200920232710808"}})]),t._v(" "),s("p",[t._v("默认的账号密码都是 guest（就是我们刚刚开启的来宾访问）。登录后如下：")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://tva1.sinaimg.cn/large/007S8ZIlly1gixj6vydo1j31c00u0dk7.jpg",alt:"image-20200920232614170"}})]),t._v(" "),s("h3",{attrs:{id:"_5-2-2-非本机的话访问-http-虚拟机ip地址-15672"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-2-2-非本机的话访问-http-虚拟机ip地址-15672"}},[t._v("#")]),t._v(" 5.2.2 非本机的话访问 http://虚拟机ip地址:15672")]),t._v(" "),s("p",[t._v("这里会出现一个问题：guest 账户只能在本机使用，所以这里我们需要先增加用户。")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://tva1.sinaimg.cn/large/007S8ZIlly1gixj91f242j31vc0h6jt6.jpg",alt:"image-20200920232818879"}})]),t._v(" "),s("p",[t._v("在创建了新的账户 hedon 之后，我们就可以在非本机访问 RabbitMQ 的 Web 界面了：")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://tva1.sinaimg.cn/large/007S8ZIlly1gixjhwpg4mj31k50u0gtq.jpg",alt:"image-20200920233644149"}})]),t._v(" "),s("h2",{attrs:{id:"_5-3-overview"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-3-overview"}},[t._v("#")]),t._v(" 5.3 Overview")]),t._v(" "),s("img",{attrs:{src:"https://tva1.sinaimg.cn/large/007S8ZIlgy1gixzuyzbl6j31k40u0wob.jpg",alt:"image-20200921090257107"}}),t._v(" "),s("h2",{attrs:{id:"_5-4-connections"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-4-connections"}},[t._v("#")]),t._v(" 5.4 Connections")]),t._v(" "),s("p",[t._v("显示当前有多少个客户端连接到 RabbitMQ（也就是 TCP 连接数）。")]),t._v(" "),s("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://tva1.sinaimg.cn/large/007S8ZIlly1gixzwc74j2j31cy0hcmz5.jpg",alt:"image-20200921090417490"}}),t._v(" "),s("h2",{attrs:{id:"_5-5-channels"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-5-channels"}},[t._v("#")]),t._v(" 5.5 Channels")]),t._v(" "),s("p",[t._v("显示当前有多少个通道（每个 Connection 对应一个到多个 Channel）。")]),t._v(" "),s("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://tva1.sinaimg.cn/large/007S8ZIlly1gixzxarxboj31h00gy768.jpg",alt:"image-20200921090512757"}}),t._v(" "),s("h2",{attrs:{id:"_5-6-exchanges"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-6-exchanges"}},[t._v("#")]),t._v(" 5.6 Exchanges")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://tva1.sinaimg.cn/large/007S8ZIlly1giy03ncve8j31k40u0k1q.jpg",alt:"image-20200921091119302"}})]),t._v(" "),s("h2",{attrs:{id:"_5-7-queues"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-7-queues"}},[t._v("#")]),t._v(" 5.7 Queues")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://tva1.sinaimg.cn/large/007S8ZIlly1giy04neqi8j31sx0u0n3o.jpg",alt:"image-20200921091216676"}})]),t._v(" "),s("h2",{attrs:{id:"_5-8-admin"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-8-admin"}},[t._v("#")]),t._v(" 5.8 Admin")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://tva1.sinaimg.cn/large/007S8ZIlly1giy081rjarj31r70u0n99.jpg",alt:"image-20200921091532767"}})]),t._v(" "),s("p",[t._v("当点击某个用户名时，可以跳转到管理该用户的界面：")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://tva1.sinaimg.cn/large/007S8ZIlly1giy09mqfgqj31kg0u0jys.jpg",alt:"image-20200921091703847"}})]),t._v(" "),s("Vssue")],1)}),[],!1,null,null,null);a.default=r.exports}}]);
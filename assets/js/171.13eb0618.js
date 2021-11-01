(window.webpackJsonp=window.webpackJsonp||[]).push([[171],{579:function(t,a,_){"use strict";_.r(a);var r=_(47),s=Object(r.a)({},(function(){var t=this,a=t.$createElement,_=t._self._c||a;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"一、阻塞-io"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#一、阻塞-io"}},[t._v("#")]),t._v(" 一、阻塞 IO")]),t._v(" "),_("h2",{attrs:{id:"_1-概念"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-概念"}},[t._v("#")]),t._v(" 1. 概念")]),t._v(" "),_("p",[t._v("阻塞 I/O 是最简单的 I/O 模型，一般表现为进程或线程等待某个条件，如果条件不满足，则一直等下去。条件满足，则进行下一步操作。")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://tva1.sinaimg.cn/large/008eGmZEly1gp8yl07xoaj30h909emxc.jpg",alt:"图片"}})]),t._v(" "),_("p",[t._v("应用进程通过系统调用 "),_("code",[t._v("recvfrom")]),t._v(" 接收数据，但由于内核还未准备好数据报，应用进程就会阻塞住，直到内核准备好数据报，"),_("code",[t._v("recvfrom")]),t._v(" 完成数据报复制工作，应用进程才能结束阻塞状态。")]),t._v(" "),_("h2",{attrs:{id:"_2-优点"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-优点"}},[t._v("#")]),t._v(" 2. 优点")]),t._v(" "),_("ul",[_("li",[t._v("实现简单。")]),t._v(" "),_("li",[t._v("实时性高。")]),t._v(" "),_("li",[t._v("响应及时无延时。")]),t._v(" "),_("li",[t._v("进程阻塞挂起不消耗 CPU 资源，")])]),t._v(" "),_("h2",{attrs:{id:"_3-缺点"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_3-缺点"}},[t._v("#")]),t._v(" 3. 缺点")]),t._v(" "),_("ul",[_("li",[t._v("并发低。")]),t._v(" "),_("li",[t._v("阻塞等待，性能差。")])]),t._v(" "),_("h2",{attrs:{id:"_4-适用场景"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_4-适用场景"}},[t._v("#")]),t._v(" 4. 适用场景")]),t._v(" "),_("ol",[_("li",[t._v("适用并发量小、要求响应及时的网络应用开发。")])]),t._v(" "),_("h2",{attrs:{id:"_5-方案"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_5-方案"}},[t._v("#")]),t._v(" 5. 方案")]),t._v(" "),_("ol",[_("li",[t._v("Java BIO")])]),t._v(" "),_("Vssue")],1)}),[],!1,null,null,null);a.default=s.exports}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[216],{626:function(t,a,r){"use strict";r.r(a);var _=r(47),s=Object(_.a)({},(function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"二、非阻塞-io"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#二、非阻塞-io"}},[t._v("#")]),t._v(" 二、非阻塞 IO")]),t._v(" "),r("h2",{attrs:{id:"_1-概念"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-概念"}},[t._v("#")]),t._v(" 1. 概念")]),t._v(" "),r("p",[t._v("应用进程与内核交互，目的未达到之前，不再一味的等着，而是直接返回。然后通过"),r("strong",[t._v("轮询")]),t._v("的方式，不停的去问内核数据准备有没有准备好。如果某一次轮询发现数据已经准备好了，那就把数据拷贝到用户空间中。")]),t._v(" "),r("p",[r("img",{attrs:{src:"https://hedonspace.oss-cn-beijing.aliyuncs.com/img2/008eGmZEly1gp8ymrd1k1j30ji0ae0tl.jpg",alt:"图片"}})]),t._v(" "),r("p",[t._v("应用进程通过 "),r("code",[t._v("recvfrom")]),t._v(" 调用不停的去和内核交互，直到内核准备好数据。如果没有准备好，内核会返回"),r("code",[t._v("error")]),t._v("，应用进程在得到"),r("code",[t._v("error")]),t._v("后，过一段时间再发送"),r("code",[t._v("recvfrom")]),t._v("请求。在两次发送请求的时间段，进程可以先做别的事情。")]),t._v(" "),r("h2",{attrs:{id:"_2-优点"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-优点"}},[t._v("#")]),t._v(" 2. 优点")]),t._v(" "),r("ul",[r("li",[t._v("能够在等待任务完成的时间里干其他活了（包括提交其他任务，也就是 “后台” 可以有多个任务在同时执行），并发性强了。")])]),t._v(" "),r("h2",{attrs:{id:"_3-缺点"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_3-缺点"}},[t._v("#")]),t._v(" 3. 缺点")]),t._v(" "),r("ul",[r("li",[t._v("任务完成的响应延迟增大了，因为每过一段时间才去轮询一次 read 操作，而任务可能在两次轮询之间的任意时间完成。这会导致整体数据吞吐量的降低。")])]),t._v(" "),r("h2",{attrs:{id:"_4-适用场景"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_4-适用场景"}},[t._v("#")]),t._v(" 4. 适用场景")]),t._v(" "),r("ol",[r("li",[t._v("适用于连接数目较小且固定架构，这种方式对服务器资源要求较高，并发局限于应用中。")]),t._v(" "),r("li",[t._v("适用并发量较小、且不需要及时响应的网络应用开发。")])]),t._v(" "),r("h2",{attrs:{id:"_5-方案"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_5-方案"}},[t._v("#")]),t._v(" 5. 方案")]),t._v(" "),r("ol",[r("li",[t._v("socket（设置为 NONBLOCK）")])]),t._v(" "),r("Vssue")],1)}),[],!1,null,null,null);a.default=s.exports}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[166],{577:function(t,s,a){"use strict";a.r(s);var _=a(47),r=Object(_.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"三、信号驱动-io"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三、信号驱动-io"}},[t._v("#")]),t._v(" 三、信号驱动 IO")]),t._v(" "),a("h2",{attrs:{id:"_1-概念"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-概念"}},[t._v("#")]),t._v(" 1. 概念")]),t._v(" "),a("p",[t._v("应用进程在读取文件时通知内核，如果某个 socket 的某个事件发生时，请向我"),a("strong",[t._v("发一个信号")]),t._v("。在收到信号后，信号对应的处理函数会进行后续处理。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://hedonspace.oss-cn-beijing.aliyuncs.com/img2/008eGmZEly1gp8ys2i97hj30jq0avjs2.jpg",alt:"图片"}})]),t._v(" "),a("p",[t._v("应用进程预先向内核注册一个信号处理函数，然后用户进程返回，并且不阻塞，当内核数据准备就绪时会发送一个信号给进程，用户进程便在信号处理函数中开始把数据拷贝的用户空间中。")]),t._v(" "),a("p",[t._v("这个一般用于 UDP 中，对 TCP 套接口几乎是没用的，原因是该信号产生得过于频繁，并且该信号的出现并没有告诉我们发生了什么事情。")]),t._v(" "),a("h2",{attrs:{id:"_2-优点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-优点"}},[t._v("#")]),t._v(" 2. 优点")]),t._v(" "),a("ul",[a("li",[t._v("在等待数据报到达期间进程不被阻塞，主循环可以继续执行，只要等待来自信号处理函数的通知即可。这样同样也与select一样，用户进程可以在数据未到达的过程中做其他操作和进行其他处理，提升进程下的资源利用率。")])]),t._v(" "),a("h2",{attrs:{id:"_3-缺点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-缺点"}},[t._v("#")]),t._v(" 3. 缺点")]),t._v(" "),a("ul",[a("li",[t._v("需要额外的机制辅助，实现相对困难。")]),t._v(" "),a("li",[t._v("当有大量 IO 操作的时候，可能会因为信号队列溢出导致没法进行通知。")]),t._v(" "),a("li",[t._v("因为信号驱动 I/O 没有完全做到异步，在第二阶段依然会延迟在等待数据从内核空间复制到用户空间上。")]),t._v(" "),a("li",[t._v("更明显的方面，信号驱动 I/O 尽管对于处理 UDP 套接字来说有用，即这种信号通知意味着到达一个数据报，或者返回一个异步错误。但是，对于 TCP 而言，信号驱动的 I/O 方式近乎无用，因为导致这种通知的条件为数众多，每一个来进行判别会消耗很大资源，与前几种方式相比优势尽失。")])]),t._v(" "),a("h2",{attrs:{id:"_4-适用场景"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-适用场景"}},[t._v("#")]),t._v(" 4. 适用场景")]),t._v(" "),a("p",[t._v("信号驱动 I/O 模型的一个非常典型的应用是 "),a("strong",[t._v("NTP 服务器")]),t._v("，即 Network Time Protocol 网络时间服务器。它使用 UDP，这个服务器的主循环用来接收从客户端发送过来的数据报数据包，然后再发送请求。对于这个服务器来说，记录下收到每一个数据包的具体时间是很重要的。")]),t._v(" "),a("p",[t._v("NTP（Network Time Protocol，网络时间协议）是用来使网络中的各个计算机时间同步的一种协议。它的用途是把计算机的时钟同步到世界协调时UTC，其精度在局域网内可达0.1ms，在互联网上绝大多数的地方其精度可以达到1-50ms。(1s=1000ms) NTP服务器就是利用NTP协议提供时间同步服务的。")]),t._v(" "),a("h2",{attrs:{id:"_5-方案"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-方案"}},[t._v("#")]),t._v(" 5. 方案")]),t._v(" "),a("ol",[a("li",[t._v("socket（SIGIO）")])]),t._v(" "),a("Vssue")],1)}),[],!1,null,null,null);s.default=r.exports}}]);
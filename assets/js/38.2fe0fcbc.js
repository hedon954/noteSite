(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{444:function(t,a,v){"use strict";v.r(a);var _=v(47),s=Object(_.a)({},(function(){var t=this,a=t.$createElement,v=t._self._c||a;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"javase-bio-nio-aio"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#javase-bio-nio-aio"}},[t._v("#")]),t._v(" JavaSE —— BIO/NIO/AIO")]),t._v(" "),v("p",[v("img",{attrs:{src:"https://tva1.sinaimg.cn/large/008i3skNgy1gujef9kl0hj61xu0rggts02.jpg",alt:"image-20210917100721976"}})]),t._v(" "),v("h2",{attrs:{id:"一、网络编程基础"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#一、网络编程基础"}},[t._v("#")]),t._v(" 一、网络编程基础")]),t._v(" "),v("h3",{attrs:{id:"_1-url-的解析和构造"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-url-的解析和构造"}},[t._v("#")]),t._v(" 1. URL 的解析和构造")]),t._v(" "),v("img",{staticStyle:{zoom:"25%"},attrs:{src:"https://tva1.sinaimg.cn/large/008i3skNgy1gujenl60kpj61so0aeq5502.jpg",alt:"image-20210917101524042"}}),t._v(" "),v("div",{staticClass:"custom-block tip"},[v("p",{staticClass:"custom-block-title"},[t._v("URI 和 URL 的区别与联系")]),t._v(" "),v("ul",[v("li",[t._v("URI: Uniform Resource Identifier")]),t._v(" "),v("li",[t._v("URL: Uniform Resource Locator")]),t._v(" "),v("li",[t._v("URN: Uniform Resource Name")])]),t._v(" "),v("p",[t._v("URI 是抽象的定义，不管用什么方法表示，只要能定位一个资源，就叫 URI，本来设想的的使用两种方法定位：")]),t._v(" "),v("ol",[v("li",[t._v("URL：用地址定位")]),t._v(" "),v("li",[t._v("URN：用名称定位")])])]),t._v(" "),v("h3",{attrs:{id:"_2-dns-解析"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-dns-解析"}},[t._v("#")]),t._v(" 2. DNS 解析")]),t._v(" "),v("p",[t._v("域名 -> IP 地址")]),t._v(" "),v("h3",{attrs:{id:"_3-网络协议"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-网络协议"}},[t._v("#")]),t._v(" 3. 网络协议")]),t._v(" "),v("p",[v("img",{attrs:{src:"https://tva1.sinaimg.cn/large/008i3skNgy1gujeyyroq8j60u016ijy802.jpg",alt:"img"}})]),t._v(" "),v("h3",{attrs:{id:"_4-ava-io"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_4-ava-io"}},[t._v("#")]),t._v(" 4. ava IO")]),t._v(" "),v("ul",[v("li",[t._v("参考："),v("RouterLink",{attrs:{to:"/backend/java/high/io.html"}},[t._v("JavaSE —— IO")])],1)]),t._v(" "),v("h3",{attrs:{id:"_5-socket"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_5-socket"}},[t._v("#")]),t._v(" 5. Socket")]),t._v(" "),v("p",[t._v("对于底层网络应用开发者而言，几乎所有网络编程都是 Socket，因为大部分底层网络 的编程都离不开 Socket 编程。 HTTP 编程、 Web 开发、 IM 通信 、视频流传输的底层都是 Socket 编程 。")]),t._v(" "),v("p",[t._v("日常生活中我们每天打开浏览器浏览网页、使用 QQ 聊天、 邮件收发、 直播等，客户端和服务器端的通信在底层看来都是依靠 Socket 通信的。")]),t._v(" "),v("p",[t._v("Socket 起源于 UNIX，而 UNIX 的基本哲学之一就是“一切皆文件”，都可以用 "),v("strong",[t._v("“打开（open）→读写（write/read）→关闭（close）”")]),t._v(" 模式来操作， Socket 就是该模式的一个实现，网络的 Socket 数据传输是 一种特殊的 I/0，Socket 也是一种文件描述符。 Socket 也具有一个类似于打开文件的函数调用：Socket()， 该函数返回一个整型的 Socket 描述符， 随后的连接建立、数据传输等操作都是通过该 Socket 实现的 。")]),t._v(" "),v("p",[t._v("网络中的进程之间如何通过 Socket 通信呢？首要解决的问题是如何唯一标识一个进程，否则通信无从谈起 ! 在本地可以通过进程 PID 来唯一标识一个进程，但是在网络中这是行不通的。其实 TCP/IP 协议族己经帮我们解决了这个问题，网络层的“IP 地址”可以唯一标识网络中的主机，而传输层的“协议+端口” 可以唯一标识主机中的应用程序（进程）。这样利用三大要素（"),v("strong",[t._v("IP 地址")]),t._v("、"),v("strong",[t._v("协议")]),t._v("、"),v("strong",[t._v("端口")]),t._v("）就可以标识网络的进程了，网络中需要互相通信的进程，就可以利用这个标志在它们之间进行交互。")]),t._v(" "),v("p",[t._v("使用 TCP/IP 协议的应用程序通常采用应用编程接口：UNIX BSD 的套接字和 UNIX System V 的 TLI（己经被淘汰），来实现网络进程之间的通信。就目前而言， 几乎所有的应用程序都是采用 Socket，而现在又是网络时代，网络中进程通信是无处不在的，这就是为什么说“一切皆 Socket”。")]),t._v(" "),v("p",[t._v("Socket 有两种：")]),t._v(" "),v("ul",[v("li",[t._v("TCPSocket")]),t._v(" "),v("li",[t._v("UDP Socket")])]),t._v(" "),v("p",[t._v("TCP 和 UDP 是协议，而要确定一个进程得需要三要素， 所以还需要 IP 地址和端口。")]),t._v(" "),v("div",{staticClass:"custom-block tip"},[v("p",{staticClass:"custom-block-title"},[t._v("Unix 中的 Socket")]),t._v(" "),v("ul",[v("li",[t._v("Unix 系统中一切皆文件")]),t._v(" "),v("li",[t._v("文件描述符表是已打开文件的索引")]),t._v(" "),v("li",[t._v("每个进程都会维护一个文件描述符表")])])]),t._v(" "),v("h3",{attrs:{id:"_6-阻塞-非阻塞-vs-异步-同步"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_6-阻塞-非阻塞-vs-异步-同步"}},[t._v("#")]),t._v(" 6. 阻塞/非阻塞 vs 异步/同步")]),t._v(" "),v("p",[v("strong",[t._v("阻塞/非阻塞")])]),t._v(" "),v("blockquote",[v("p",[t._v("👀 从调用方的角度来看）")])]),t._v(" "),v("ul",[v("li",[t._v("如果调用方在被调用方返回结果之前只能傻傻等待，那就是阻塞的。")]),t._v(" "),v("li",[t._v("如果调用方在被调用方返回结果之前可以先干别的事情，那就是非阻塞的。")])]),t._v(" "),v("p",[v("strong",[t._v("同步/异步")])]),t._v(" "),v("blockquote",[v("p",[t._v("（从被调用方的角度来看👀")])]),t._v(" "),v("ul",[v("li",[t._v("如果被调用方被调用之后需要立刻返回结果，那么就是同步的。")]),t._v(" "),v("li",[t._v("如果被调用方被调用之后先返回一个空的结果，等到任务执行完成后再通知调用方，那就是异步的。")])]),t._v(" "),v("blockquote",[v("p",[t._v("同步和异步的区别：是否开启新线程。")]),t._v(" "),v("p",[t._v("阻塞和非阻塞的区别：当前线程是否挂起，即是否释放 CPU。")])]),t._v(" "),v("h3",{attrs:{id:"_7-linux-5-种-io"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_7-linux-5-种-io"}},[t._v("#")]),t._v(" 7. Linux 5 种 IO")]),t._v(" "),v("ul",[v("li",[t._v("参考："),v("RouterLink",{attrs:{to:"/linux/linux-io/0-concept.html"}},[t._v("Linux IO")])],1)])])}),[],!1,null,null,null);a.default=s.exports}}]);
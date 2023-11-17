(window.webpackJsonp=window.webpackJsonp||[]).push([[99],{509:function(t,a,s){"use strict";s.r(a);var r=s(47),e=Object(r.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"四、传输层"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#四、传输层"}},[t._v("#")]),t._v(" 四、传输层")]),t._v(" "),s("h2",{attrs:{id:"_1-tcp"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-tcp"}},[t._v("#")]),t._v(" 1. TCP")]),t._v(" "),s("h3",{attrs:{id:"简介"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#简介"}},[t._v("#")]),t._v(" 简介")]),t._v(" "),s("p",[t._v("TCP（Transfer Control Protocol）是面向连接的、可靠的、基于字节流的传输层通信协议。")]),t._v(" "),s("p",[t._v("将应用层的数据流分割成报文段并发送给目标节点的 TCP 层。")]),t._v(" "),s("p",[t._v("数据包都有序号，对方收到则发送 ACK 确认，未收到则重传。")]),t._v(" "),s("p",[t._v("使用奇偶校验并检测数据在传输过程中是否有误。")]),t._v(" "),s("h3",{attrs:{id:"tcp-报文头部"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#tcp-报文头部"}},[t._v("#")]),t._v(" TCP 报文头部")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://hedonspace.oss-cn-beijing.aliyuncs.com/img2/008i3skNly1gt3nfrtfepj31f80s6141.jpg",alt:"image-20200430162427317"}})]),t._v(" "),s("h3",{attrs:{id:"tcp-的三次握手-🤝"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#tcp-的三次握手-🤝"}},[t._v("#")]),t._v(" TCP 的三次握手 🤝")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://hedonspace.oss-cn-beijing.aliyuncs.com/img2/008i3skNly1gt3nfu3tafj31ei0lote6.jpg",alt:"image-20200514170444237"}})]),t._v(" "),s("div",{staticClass:"language-markdown extra-class"},[s("pre",{pre:!0,attrs:{class:"language-markdown"}},[s("code",[s("span",{pre:!0,attrs:{class:"token title important"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("#")]),t._v(" 初始状态")]),t._v("\n首先客户端和服务器都是处于 CLOSED 状态。客户端主动打开，然后服务端被动打开后进入 LISTEN 状态。\n"),s("span",{pre:!0,attrs:{class:"token title important"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("#")]),t._v(" 第1次握手")]),t._v("\n客户端发送 SYN 包给服务器，包中将标志位 SYN 置为1，然后初始化一个序列号 Sequence Number，这里假设为 x。然后客户端就进入 SYN-SENT 状态。\n"),s("span",{pre:!0,attrs:{class:"token title important"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("#")]),t._v(" 第2次握手")]),t._v("\n服务器收到 SYN 包后进入 SYN-RCVD 状态。服务器必须确认客户端的 SYN 包，所以它也发送一个 SYN 包给客户端，这个 SYN 包中将标志位 SYN 和 ACK 都置为1，然后初始化一个序列号 Sequence Number，这里假设为 y。同时将 acknowledgment number 置为 x+1。这里 acknowledgment number 置为 x+1 的原因是之前客户端发送的 SYN 包中 sequence number 是 x，虽然 SYN 包不携带数据，但是它本身是要消耗一个 sequence number 的，所以是 x+1。\n"),s("span",{pre:!0,attrs:{class:"token title important"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("#")]),t._v(" 第3次握手")]),t._v("\n客户端接收到服务器返回的 SYN 包后，需要再向服务器发送一个 ACK 包（确认包）。该包中将标志位 ACK 置为1，sequence number 置为 x+1，acknowledgment number 置为 y+1，原因同上。\n"),s("span",{pre:!0,attrs:{class:"token title important"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("#")]),t._v(" 数据传送")]),t._v("\n第3次握手后，客户端和服务器的连接就建立完成了，双方都进入 ESTABLISHED 状态，可以进行数据传送等操作。\n")])])]),s("h5",{attrs:{id:"️-为什么需要3次握手才能建立起连接"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#️-为什么需要3次握手才能建立起连接"}},[t._v("#")]),t._v(" ⁉️ 为什么需要3次握手才能建立起连接？")]),t._v(" "),s("p",[t._v("为了初始化 Sequence Number（序列号）的初始值，要通知双方数据包的序号，作为以后通讯的序号，以保证在网络传输过程，不会因为网络原因而导致乱序；")]),t._v(" "),s("h5",{attrs:{id:"️-首次握手的隐患-syn-超时"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#️-首次握手的隐患-syn-超时"}},[t._v("#")]),t._v(" ‼️ 首次握手的隐患 —— SYN 超时")]),t._v(" "),s("p",[t._v("[原因]")]),t._v(" "),s("ul",[s("li",[t._v("服务器收到客户端的 SYN 包，回复 SYN+ACK 包的时候未收到 ACK 确认。")])]),t._v(" "),s("p",[t._v("[措施]")]),t._v(" "),s("ul",[s("li",[t._v("服务器不断重试直至超时。")]),t._v(" "),s("li",[t._v("Linux 默认等待 63 秒（1+2+4+8+16+32）才断开连接（共尝试5次）。")])]),t._v(" "),s("p",[t._v("[后果]")]),t._v(" "),s("ul",[s("li",[t._v("SYB Flood 攻击：客户端在短时间内伪造大量不存在的IP地址，向服务器不断地发送syn包，服务器回复确认包，并等待客户的确认，由于源地址是不存在的，服务器需要不断的重发直至超时，这些伪造的SYN包将长时间占用未连接队列，正常的SYN请求被丢弃，目标系统运行缓慢，严重者引起网络堵塞甚至系统瘫痪。")])]),t._v(" "),s("p",[t._v("[针对 SYN Flood 的防护措施]")]),t._v(" "),s("ul",[s("li",[t._v("SYN 队列满后，通过 tcp_syncookies 参数回发 SYN Cookie")]),t._v(" "),s("li",[t._v("若为正常连接则 Client 会回发 SYN Cookie，直接建立连接，非正常连接则不会有反应。")])]),t._v(" "),s("p",[t._v("[保活机制]")]),t._v(" "),s("ul",[s("li",[t._v("向对方发送保活探测报文，如果未收到响应则继续发送。尝试次数达到保活探测数仍未收到响应则中断连接。")])]),t._v(" "),s("h3",{attrs:{id:"tcp-的四次挥手👋"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#tcp-的四次挥手👋"}},[t._v("#")]),t._v(" TCP 的四次挥手👋")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://hedonspace.oss-cn-beijing.aliyuncs.com/img2/008i3skNly1gt3nft5cvsj61f60okagp02.jpg",alt:"image-20200514171252743"}})]),t._v(" "),s("div",{staticClass:"language-markdown extra-class"},[s("pre",{pre:!0,attrs:{class:"language-markdown"}},[s("code",[s("span",{pre:!0,attrs:{class:"token title important"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("#")]),t._v(" 连接状态")]),t._v("\n首先客户端和服务器都是 ESTABLISHED 状态，也就是数据传送状态。\n"),s("span",{pre:!0,attrs:{class:"token title important"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("#")]),t._v(" 第1次挥手")]),t._v("\n这里假设是客户端主动关闭连接，它会停止发送数据，并发送一个 FIN 包给服务器，包中将标志位 FIN 置为 1，然后初始化 sequence number，序列号的值是客户端前面发送给服务器的数据的最后一个字节的序号+1，这里我们假设为 u。发送 FIN 包后客户端进入 FIN-WAIT-1 状态。\n"),s("span",{pre:!0,attrs:{class:"token title important"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("#")]),t._v(" 第2次挥手")]),t._v("\n服务器收到客户端的 FIN 包后，通知相关的应用进程完成最后的工作，然后发送一个 ACK 包给客户端。包中将标志位 ACK 置为 1，然后 sequence number 是服务器发送给客户端的数据的最后一个字节的序号+1， acknowledge number 是 u+1。\n服务器发送完 ACK 包后就进入 CLOSE-WAIT 状态。\n在这个过程中，客户端不能向服务器发送数据，但是服务器可以向客户端发送数据。\n"),s("span",{pre:!0,attrs:{class:"token title important"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("#")]),t._v(" 第3次挥手")]),t._v("\n当数据传送完毕且服务器的应用进程完成最后的工作后，服务器就发送一个 FIN 包给客户端，改包中将 ACK 和 FIN 都置为1。然后服务器进入 LAST-ACK 状态。\n"),s("span",{pre:!0,attrs:{class:"token title important"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("#")]),t._v(" 第4次挥手")]),t._v("\n客户端收到服务器发来的 FIN 包后，进入 TIME-WAIT 状态，接着发送一个 ACK 包给服务器。\n"),s("span",{pre:!0,attrs:{class:"token title important"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("#")]),t._v(" 断开连接")]),t._v("\n服务器收到客户端发来的 ACK 包后，就进入 CLOSED 状态。客户端还需要再等待 2MSL(Maximum Segment Lifetime)报文最大生存时间 后才进入 CLOSED 状态，至此，四次挥手就完成了。\n")])])]),s("h5",{attrs:{id:"️-为什么需要四次握手才能断开连接"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#️-为什么需要四次握手才能断开连接"}},[t._v("#")]),t._v(" ⁉️ 为什么需要四次握手才能断开连接？")]),t._v(" "),s("p",[t._v("因为 TCP 是全双工通信，通信中的每一方都在发送和接收报文段。所有发送方和接收方都需要 FIN 报文和 ACK 报文吗，2+2=4。")]),t._v(" "),s("h5",{attrs:{id:"️-为什么会有-time-wait-状态"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#️-为什么会有-time-wait-状态"}},[t._v("#")]),t._v(" ⁉️ 为什么会有 TIME-WAIT 状态？")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("确保有足够的时间让对方收到 ACK 包。")])]),t._v(" "),s("li",[s("p",[t._v("防止已失效的连接请求报文出现在本连接中。")])]),t._v(" "),s("li",[s("p",[t._v("避免新旧连接混淆。")]),t._v(" "),s("p",[t._v("在linux系统上，一个TCP端口不能被同时打开多次，当一个TCP连接处于TIME_WAIT状态时，我们无法使用该链接的端口来建立一个新连接。反过来思考，如果不存在TIME_WAIT状态，则应用程序能过立即建立一个和刚关闭的连接相似的连接（这里的相似，是指他们具有相同的IP地址和端口号）。这个新的、和原来相似的连接被称为原来连接的化身。新的化身可能受到属于原来连接携带应用程序数据的TCP报文段（迟到的报文段），这显然是不该发生的。这是TIME_WAIT状态存在的第二个原因。")])])]),t._v(" "),s("h5",{attrs:{id:"️-服务器出现大量-close-wait-状态的原因"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#️-服务器出现大量-close-wait-状态的原因"}},[t._v("#")]),t._v(" ⁉️ 服务器出现大量 CLOSE-WAIT 状态的原因")]),t._v(" "),s("ul",[s("li",[t._v("CLOSE-WAIT 状态产生只有2种原因：\n"),s("ul",[s("li",[t._v("服务器没有发送 ACK 包。")]),t._v(" "),s("li",[t._v("服务器发送 ACK 包但是还没有发送 FIN 包这个阶段。")])])]),t._v(" "),s("li",[t._v("双方关闭 socket 连接，我方忙于读或写，没有及时关闭连接。\n"),s("ul",[s("li",[t._v("一般是因为程序有 bug\n"),s("ul",[s("li",[t._v("没有及时释放资源")]),t._v(" "),s("li",[t._v("线程池配置不合理")])])])])])]),t._v(" "),s("h3",{attrs:{id:"tcp-的滑动窗口"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#tcp-的滑动窗口"}},[t._v("#")]),t._v(" TCP 的滑动窗口")]),t._v(" "),s("h5",{attrs:{id:"rtt"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#rtt"}},[t._v("#")]),t._v(" RTT")]),t._v(" "),s("p",[t._v("RTT（Round-Trip Time，循环时间）：发送一个数据报到收到对应 ACK 所花费的时间。")]),t._v(" "),s("h5",{attrs:{id:"rto"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#rto"}},[t._v("#")]),t._v(" RTO")]),t._v(" "),s("p",[t._v("RTO（Retransmission TimeOut：超时重传时间）：重传时间间隔。")]),t._v(" "),s("h5",{attrs:{id:"简介-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#简介-2"}},[t._v("#")]),t._v(" 简介")]),t._v(" "),s("p",[t._v("TCP 使用滑动窗口做流量控制与乱序重排")]),t._v(" "),s("ul",[s("li",[t._v("保证 TCP 的可靠性")]),t._v(" "),s("li",[t._v("保证 TCP 的流控特性")])]),t._v(" "),s("h5",{attrs:{id:"以字节为单位滑动窗口"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#以字节为单位滑动窗口"}},[t._v("#")]),t._v(" 以字节为单位滑动窗口")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://hedonspace.oss-cn-beijing.aliyuncs.com/img2/008i3skNly1gt3nfqw1k7j30u012ngu8.jpg",alt:"image-20200430174529185"}})]),t._v(" "),s("h5",{attrs:{id:"tcp-缓存与滑动窗口"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#tcp-缓存与滑动窗口"}},[t._v("#")]),t._v(" TCP 缓存与滑动窗口")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://hedonspace.oss-cn-beijing.aliyuncs.com/img2/008i3skNly1gt3nfslcosj318a0gsq6r.jpg",alt:"image-20200430174608785"}})]),t._v(" "),s("p",[t._v("发送缓存")]),t._v(" "),s("ul",[s("li",[t._v("准备发送的数据")]),t._v(" "),s("li",[t._v("发送但未收到确认的数据")])]),t._v(" "),s("p",[t._v("接收数据")]),t._v(" "),s("ul",[s("li",[t._v("按序到达的、但尚未被接收程序读取的数据")]),t._v(" "),s("li",[t._v("未按序到达的数据")])]),t._v(" "),s("h3",{attrs:{id:"tcp-如何做到可靠传输"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#tcp-如何做到可靠传输"}},[t._v("#")]),t._v(" TCP 如何做到可靠传输")]),t._v(" "),s("p",[t._v("1、确认和重传：接收方收到报文就会确认，发送方发送一段时间后没有收到确认就重传。")]),t._v(" "),s("p",[t._v("2、数据校验")]),t._v(" "),s("p",[t._v("3、数据合理分片和排序：")]),t._v(" "),s("p",[t._v("UDP：IP数据报大于1500字节，大于MTU。这个时候发送方 IP 层就需要分片(fragmentation)。把数据报分成若干片，使每一片都小于MTU。而接收方 IP 层则需要进行数据报的重组。这样就会多做许多事情。而更严重的是，由于 UDP 的特性。当某一片数据传送中丢失时,接收方便无法重组数据报，将导致丢弃整个UDP数据报。")]),t._v(" "),s("p",[t._v("TCP 会按 MTU 合理分片，接收方会缓存未按序到达的数据，重新排序后再交给应用层。")]),t._v(" "),s("p",[t._v("4、流量控制：当接收方来不及处理发送方的数据，能提示发送方降低发送的速率，防止包丢失。")]),t._v(" "),s("p",[t._v("5、拥塞控制：当网络拥塞时，减少数据的发送。")]),t._v(" "),s("h2",{attrs:{id:"_2-udp"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-udp"}},[t._v("#")]),t._v(" 2. UDP")]),t._v(" "),s("h3",{attrs:{id:"简介-3"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#简介-3"}},[t._v("#")]),t._v(" 简介")]),t._v(" "),s("p",[t._v("UDP（User Datagram Protocol）是面向无连接的、尽最大努力交付的、基于报文的传输层通讯协议。")]),t._v(" "),s("p",[t._v("UDP 不维护连接状态，支持同时向多个客户端传输相同的消息。")]),t._v(" "),s("p",[t._v("数据包报头只有 8 个字节，额外开销较小。")]),t._v(" "),s("p",[t._v("吞吐量只受限于数据生成速率、传输速率以及机器性能。")]),t._v(" "),s("p",[t._v("尽最大努力交付，不保证可靠交付，不需要维持复杂的链接状态表。")]),t._v(" "),s("p",[t._v("面向报文，不对应用程序提交的报文信息进行拆分或者合并。")]),t._v(" "),s("h3",{attrs:{id:"udp-报文头部"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#udp-报文头部"}},[t._v("#")]),t._v(" UDP 报文头部")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://hedonspace.oss-cn-beijing.aliyuncs.com/img2/008i3skNly1gt3nfqcfjwj30eh048t8m.jpg",alt:"img"}})]),t._v(" "),s("h3",{attrs:{id:"udp-用户数据报的首部和伪首部"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#udp-用户数据报的首部和伪首部"}},[t._v("#")]),t._v(" UDP 用户数据报的首部和伪首部")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://hedonspace.oss-cn-beijing.aliyuncs.com/img2/008i3skNly1gt3nfukvd1j318w0i2q7j.jpg",alt:"image-20200423120231304"}})]),t._v(" "),s("h3",{attrs:{id:"udp-通信过程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#udp-通信过程"}},[t._v("#")]),t._v(" UDP 通信过程")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://hedonspace.oss-cn-beijing.aliyuncs.com/img2/008i3skNly1gt3nfs8624j30hs0dc3yu.jpg",alt:"img"}})]),t._v(" "),s("h2",{attrs:{id:"_3-tcp-与-udp-对比"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-tcp-与-udp-对比"}},[t._v("#")]),t._v(" 3. TCP 与 UDP 对比")]),t._v(" "),s("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://hedonspace.oss-cn-beijing.aliyuncs.com/img2/008i3skNly1gt3nftm7iqj31170u0adg.jpg",alt:"image-20210111000251220"}}),t._v(" "),s("Vssue")],1)}),[],!1,null,null,null);a.default=e.exports}}]);
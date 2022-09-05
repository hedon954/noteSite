(window.webpackJsonp=window.webpackJsonp||[]).push([[191],{602:function(t,s,a){"use strict";a.r(s);var _=a(47),v=Object(_.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"四、传输层"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#四、传输层"}},[t._v("#")]),t._v(" 四、传输层")]),t._v(" "),a("h2",{attrs:{id:"_1-tcp"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-tcp"}},[t._v("#")]),t._v(" 1. TCP")]),t._v(" "),a("h3",{attrs:{id:"简介"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#简介"}},[t._v("#")]),t._v(" 简介")]),t._v(" "),a("p",[t._v("TCP（Transfer Control Protocol）是面向连接的、可靠的、基于字节流的传输层通信协议。")]),t._v(" "),a("p",[t._v("将应用层的数据流分割成报文段并发送给目标节点的 TCP 层。")]),t._v(" "),a("p",[t._v("数据包都有序号，对方收到则发送 ACK 确认，未收到则重传。")]),t._v(" "),a("p",[t._v("使用奇偶校验并检测数据在传输过程中是否有误。")]),t._v(" "),a("h3",{attrs:{id:"tcp-报文头部"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tcp-报文头部"}},[t._v("#")]),t._v(" TCP 报文头部")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://tva1.sinaimg.cn/large/008i3skNly1gt3nfrtfepj31f80s6141.jpg",alt:"image-20200430162427317"}})]),t._v(" "),a("h3",{attrs:{id:"tcp-的三次握手-🤝"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tcp-的三次握手-🤝"}},[t._v("#")]),t._v(" TCP 的三次握手 🤝")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://tva1.sinaimg.cn/large/008i3skNly1gt3nfu3tafj31ei0lote6.jpg",alt:"image-20200514170444237"}})]),t._v(" "),a("div",{staticClass:"language-markdown extra-class"},[a("pre",{pre:!0,attrs:{class:"language-markdown"}},[a("code",[a("span",{pre:!0,attrs:{class:"token title important"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("#")]),t._v(" 初始状态")]),t._v("\n首先客户端和服务器都是处于 CLOSED 状态。客户端主动打开，然后服务端被动打开后进入 LISTEN 状态。\n"),a("span",{pre:!0,attrs:{class:"token title important"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("#")]),t._v(" 第1次握手")]),t._v("\n客户端发送 SYN 包给服务器，包中将标志位 SYN 置为1，然后初始化一个序列号 Sequence Number，这里假设为 x。然后客户端就进入 SYN-SENT 状态。\n"),a("span",{pre:!0,attrs:{class:"token title important"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("#")]),t._v(" 第2次握手")]),t._v("\n服务器收到 SYN 包后进入 SYN-RCVD 状态。服务器必须确认客户端的 SYN 包，所以它也发送一个 SYN 包给客户端，这个 SYN 包中将标志位 SYN 和 ACK 都置为1，然后初始化一个序列号 Sequence Number，这里假设为 y。同时将 acknowledgment number 置为 x+1。这里 acknowledgment number 置为 x+1 的原因是之前客户端发送的 SYN 包中 sequence number 是 x，虽然 SYN 包不携带数据，但是它本身是要消耗一个 sequence number 的，所以是 x+1。\n"),a("span",{pre:!0,attrs:{class:"token title important"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("#")]),t._v(" 第3次握手")]),t._v("\n客户端接收到服务器返回的 SYN 包后，需要再向服务器发送一个 ACK 包（确认包）。该包中将标志位 ACK 置为1，sequence number 置为 x+1，acknowledgment number 置为 y+1，原因同上。\n"),a("span",{pre:!0,attrs:{class:"token title important"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("#")]),t._v(" 数据传送")]),t._v("\n第3次握手后，客户端和服务器的连接就建立完成了，双方都进入 ESTABLISHED 状态，可以进行数据传送等操作。\n")])])]),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("为什么需要3次握手才能建立起连接？")]),t._v(" "),a("p",[t._v("为了初始化 Sequence Number（序列号）的初始值，要通知双方数据包的序号，作为以后通讯的序号，以保证在网络传输过程，不会因为网络原因而导致乱序；")])]),t._v(" "),a("div",{staticClass:"custom-block danger"},[a("p",{staticClass:"custom-block-title"},[t._v("首次握手的隐患 —— SYN 超时")]),t._v(" "),a("p",[a("strong",[t._v("原因")])]),t._v(" "),a("ul",[a("li",[t._v("服务器收到客户端的 SYN 包，回复 SYN+ACK 包的时候未收到 ACK 确认。")])]),t._v(" "),a("p",[a("strong",[t._v("措施")])]),t._v(" "),a("ul",[a("li",[t._v("服务器不断重试直至超时。")]),t._v(" "),a("li",[t._v("Linux 默认等待 63 秒（1+2+4+8+16+32）才断开连接（共尝试 5 次）。")])]),t._v(" "),a("p",[a("strong",[t._v("后果")])]),t._v(" "),a("ul",[a("li",[t._v("SYB Flood 攻击：客户端在短时间内伪造大量不存在的 IP 地址，向服务器不断地发送 SYN 包，服务器回复确认包，并等待客户的确认，由于源地址是不存在的，服务器需要不断的重发直至超时，这些伪造的 SYN 包将长时间占用未连接队列，正常的 SYN 请求被丢弃，目标系统运行缓慢，严重者引起网络堵塞甚至系统瘫痪。")])]),t._v(" "),a("p",[a("strong",[t._v("针对 SYN Flood 的防护措施")])]),t._v(" "),a("p",[t._v("SYNFlood 就是 B 发送给 A 的 SYN-ACK 包没有得到回应，然后 B 就一直进行超时重传。然后 A 一直不反馈 B 的 SYN-ACK 包，一直持续不断的发送 SYN 包，导致资源耗尽。")]),t._v(" "),a("p",[t._v("思路一：B 回给 SYN-ACK 后进入一种半连接的状态，我们可以提高这个半连接状态的容量")]),t._v(" "),a("p",[t._v("思路二：控制重传的次数，不然它无休止地耗费资源。")]),t._v(" "),a("ul",[a("li",[a("p",[a("strong",[t._v("SYC Cache")])]),t._v(" "),a("p",[t._v("SYN Cache 的出发点主要是针对“鸠占鹊巢”问题，基本原理如下：构造一个全局的 "),a("a",{attrs:{href:"https://en.wikipedia.org/wiki/Hash_table",target:"_blank",rel:"noopener noreferrer"}},[t._v("Hash Table"),a("OutboundLink")],1),t._v("，用来缓存系统当前所有的半开连接信息，连接成功则从 Cache 中清除相关信息；Hash Table 中每个桶（bucket）的容量大小也有限制，当桶“满”时做除旧迎新操作。当 B 收到一个 SYN 消息后，会将半开连接信息加入到 Hash Table 中，其中 key 的生成很关键，既要用到 SYN 消息中包含的信息（如：Source IP，Port 等）又要做到很难被攻击者猜到，一般会通过一个秘密的函数生成，这样所有的半开连接无论好坏，都看似随机地被平均分配到了不同的“桶”中，使攻击难度大增，因为为达到 DDoS 效果，攻击者需要使每个桶都达到填满状态，并且还要有足够快的“填桶”速度，使得正常的半开连接在还未完成建立前就被踢出桶，这样的攻击行为估计在达到目的前早就暴露了。")])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("SYN Cookie")])]),t._v(" "),a("p",[a("a",{attrs:{href:"https://en.wikipedia.org/wiki/SYN_cookies",target:"_blank",rel:"noopener noreferrer"}},[t._v("SYN Cookies "),a("OutboundLink")],1),t._v("着眼点主要是设法消除半开连接的资源消耗，原理与 HTTP Cookies 技术类似，B 通过特定的算法把半开连接信息编码成 “Cookie”，用作 B 给 A 的消息编号（SequenceNum），随 SYN-ACK 消息一同返回给连接发起方A，这样在连接完全建立前 B 不保存任何信息。如果 A 是正常用户，则会向 B 发送最后一次握手消息（ACK），B 收到后验证 “Cookie” 的内容并建立连接；如果 A 是攻击者，则不会向 B 反馈 ACK 消息，B 也没任何损失，也就说是单纯的 SYN 攻击不会造成 B 的连接资源消耗。当然这种方案也有一定缺点，最明显的就是 B 不保存连接的半开状态，就丧失了重发 SYN-ACK 消息的能力，这一方面会降低正常用户的连接成功率，另一方面会导致某些情况下正常通信的双方会对连接是否成功打开产生误解，如 A 发给 B 的第三次握手消息（ACK）半路遗失，A 认为连接成功了，B 认为没收到 ACK，连接没成功，这种情况就需要上层应用采取策略特别处理了。")])])]),t._v(" "),a("p",[a("strong",[t._v("保活机制")])]),t._v(" "),a("ul",[a("li",[t._v("向对方发送保活探测报文，如果未收到响应则继续发送。尝试次数达到保活探测数仍未收到响应则中断连接。")])])]),t._v(" "),a("h3",{attrs:{id:"tcp-的四次挥手-👋"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tcp-的四次挥手-👋"}},[t._v("#")]),t._v(" TCP 的四次挥手 👋")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://tva1.sinaimg.cn/large/008i3skNly1gt3nft5cvsj61f60okagp02.jpg",alt:"image-20200514171252743"}})]),t._v(" "),a("div",{staticClass:"language-markdown extra-class"},[a("pre",{pre:!0,attrs:{class:"language-markdown"}},[a("code",[a("span",{pre:!0,attrs:{class:"token title important"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("#")]),t._v(" 连接状态")]),t._v("\n首先客户端和服务器都是 ESTABLISHED 状态，也就是数据传送状态。\n"),a("span",{pre:!0,attrs:{class:"token title important"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("#")]),t._v(" 第1次挥手")]),t._v("\n这里假设是客户端主动关闭连接，它会停止发送数据，并发送一个 FIN 包给服务器，包中将标志位 FIN 置为 1，然后初始化 sequence number，序列号的值是客户端前面发送给服务器的数据的最后一个字节的序号+1，这里我们假设为 u。发送 FIN 包后客户端进入 FIN-WAIT-1 状态。\n"),a("span",{pre:!0,attrs:{class:"token title important"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("#")]),t._v(" 第2次挥手")]),t._v("\n服务器收到客户端的 FIN 包后，通知相关的应用进程完成最后的工作，然后发送一个 ACK 包给客户端。包中将标志位 ACK 置为 1，然后 sequence number 是服务器发送给客户端的数据的最后一个字节的序号+1， acknowledge number 是 u+1。\n服务器发送完 ACK 包后就进入 CLOSE-WAIT 状态。\n在这个过程中，客户端不能向服务器发送数据，但是服务器可以向客户端发送数据。\n"),a("span",{pre:!0,attrs:{class:"token title important"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("#")]),t._v(" 第3次挥手")]),t._v("\n当数据传送完毕且服务器的应用进程完成最后的工作后，服务器就发送一个 FIN 包给客户端，改包中将 ACK 和 FIN 都置为1。然后服务器进入 LAST-ACK 状态。\n"),a("span",{pre:!0,attrs:{class:"token title important"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("#")]),t._v(" 第4次挥手")]),t._v("\n客户端收到服务器发来的 FIN 包后，进入 TIME-WAIT 状态，接着发送一个 ACK 包给服务器。\n"),a("span",{pre:!0,attrs:{class:"token title important"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("#")]),t._v(" 断开连接")]),t._v("\n服务器收到客户端发来的 ACK 包后，就进入 CLOSED 状态。客户端还需要再等待 2MSL(Maximum Segment Lifetime)报文最大生存时间 后才进入 CLOSED 状态，至此，四次挥手就完成了。\n")])])]),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("为什么需要四次握手才能断开连接？")]),t._v(" "),a("p",[t._v("因为 TCP 是全双工通信，通信中的每一方都在发送和接收报文段。所有发送方和接收方都需要 FIN 报文和 ACK 报文吗，2+2=4。")])]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("为什么会有 TIME-WAIT 状态？")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("确保有足够的时间让对方收到 ACK 包。")])]),t._v(" "),a("li",[a("p",[t._v("防止已失效的连接请求报文出现在本连接中，即避免新旧连接混淆。")]),t._v(" "),a("p",[t._v("在 Linux 系统上，一个 TCP 端口不能被同时打开多次，当一个 TCP 连接处于 TIME_WAIT 状态时，我们无法使用该链接的端口来建立一个新连接。反过来思考，如果不存在 TIME_WAIT 状态，则应用程序能过立即建立一个和刚关闭的连接相似的连接（这里的相似，是指他们具有相同的 IP 地址和端口号）。这个新的、和原来相似的连接被称为原来连接的化身。新的化身可能受到属于原来连接携带应用程序数据的 TCP 报文段（迟到的报文段），这显然是不该发生的。这是 TIME_WAIT 状态存在的第二个原因。")])])])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("有大量的 TIME-WAIT 怎么办？")]),t._v(" "),a("p",[t._v("如发现系统存在大量 TIME_WAIT 状态的连接，通过调整内核参数解决：编辑文件 /etc/sysctl.conf")]),t._v(" "),a("p",[t._v("一方面我们可以调小 tw_buckets 的容量；")]),t._v(" "),a("p",[t._v("另一方面我们可以缩短超时时间，比如 Linux 默认 60s，我们可以缩短到 30s。")]),t._v(" "),a("p",[t._v("也可以尝试回收 "),a("strong",[t._v("tcp_tw_recycle")]),t._v("：")]),t._v(" "),a("p",[t._v("​\t当多个客户端通过 NAT 方式联网并与服务端交互时，服务端看到的是同一个 IP，也就是说对服务端而言这些客户端实际上等同于一个，可惜由于这些客户端的时间戳可能存在差异，于是乎从服务端的视角看，便可能出现时间戳错乱的现象，进而直接导致时间戳小的数据包被丢弃。")]),t._v(" "),a("p",[t._v("也可以尝试复用："),a("strong",[t._v("tcp_tw_reuse")])]),t._v(" "),a("p",[t._v("​\t顾名思义就是复用 TIME_WAIT 连接。当创建新连接的时候，如果可能的话会考虑复用相应的 TIME_WAIT 连接。通常认为「tcp_tw_reuse」比「tcp_tw_recycle」安全一些，这是因为一来 TIME_WAIT 创建时间必须超过一秒才可能会被复用；二来只有连接的时间戳是递增的时候才会被复用。")])]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("服务器出现大量 CLOSE-WAIT 状态的原因")]),t._v(" "),a("ul",[a("li",[t._v("CLOSE-WAIT 状态产生只有2种原因：\n"),a("ul",[a("li",[t._v("服务器没有发送 ACK 包。")]),t._v(" "),a("li",[t._v("服务器发送 ACK 包但是还没有发送 FIN 包这个阶段。")])])]),t._v(" "),a("li",[t._v("双方关闭 socket 连接，我方忙于读或写，没有及时关闭连接。\n"),a("ul",[a("li",[t._v("一般是因为程序有 bug\n"),a("ul",[a("li",[t._v("没有及时释放资源")]),t._v(" "),a("li",[t._v("线程池配置不合理")])])])])])])]),t._v(" "),a("h3",{attrs:{id:"tcp-的连接队列"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tcp-的连接队列"}},[t._v("#")]),t._v(" TCP 的连接队列")]),t._v(" "),a("p",[t._v("使用 socket 的时候，当服务端调用 listen 函数监听端口的时候，内核会为每个监听的 socket 创建两个队列：")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("半连接队列（syn queue")]),t._v("）：客户端发送"),a("code",[t._v("SYN")]),t._v("包，服务端收到后回复"),a("code",[t._v("SYN+ACK")]),t._v("后，服务端进入"),a("code",[t._v("SYN_RCVD")]),t._v("状态，这个时候的 socket 会放到半连接队列。（第二次握手后）")]),t._v(" "),a("li",[a("strong",[t._v("全连接队列（accept queue）")]),t._v("：当服务端收到客户端的 ACK 后，socket 会从半连接队列移出到全连接队列。当调用 accpet 函数的时候，会从全连接队列的头部返回可用 socket 给用户进程。（三次握手完成后）")])]),t._v(" "),a("h3",{attrs:{id:"tcp-的滑动窗口"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tcp-的滑动窗口"}},[t._v("#")]),t._v(" TCP 的滑动窗口")]),t._v(" "),a("h4",{attrs:{id:"rtt"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rtt"}},[t._v("#")]),t._v(" RTT")]),t._v(" "),a("p",[t._v("RTT（Round-Trip Time，循环时间）：发送一个数据报到收到对应 ACK 所花费的时间。")]),t._v(" "),a("h4",{attrs:{id:"rto"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rto"}},[t._v("#")]),t._v(" RTO")]),t._v(" "),a("p",[t._v("RTO（Retransmission TimeOut：超时重传时间）：重传时间间隔。")]),t._v(" "),a("h4",{attrs:{id:"简介-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#简介-2"}},[t._v("#")]),t._v(" 简介")]),t._v(" "),a("p",[t._v("TCP 使用滑动窗口做流量控制与乱序重排")]),t._v(" "),a("ul",[a("li",[t._v("保证 TCP 的可靠性")]),t._v(" "),a("li",[t._v("保证 TCP 的流控特性")])]),t._v(" "),a("h4",{attrs:{id:"以字节为单位滑动窗口"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#以字节为单位滑动窗口"}},[t._v("#")]),t._v(" 以字节为单位滑动窗口")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://tva1.sinaimg.cn/large/008i3skNly1gt3nfqw1k7j30u012ngu8.jpg",alt:"image-20200430174529185"}})]),t._v(" "),a("h4",{attrs:{id:"tcp-缓存与滑动窗口"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tcp-缓存与滑动窗口"}},[t._v("#")]),t._v(" TCP 缓存与滑动窗口")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://tva1.sinaimg.cn/large/008i3skNly1gt3nfslcosj318a0gsq6r.jpg",alt:"image-20200430174608785"}})]),t._v(" "),a("p",[t._v("发送缓存")]),t._v(" "),a("ul",[a("li",[t._v("准备发送的数据")]),t._v(" "),a("li",[t._v("发送但未收到确认的数据")])]),t._v(" "),a("p",[t._v("接收数据")]),t._v(" "),a("ul",[a("li",[t._v("按序到达的、但尚未被接收程序读取的数据")]),t._v(" "),a("li",[t._v("未按序到达的数据")])]),t._v(" "),a("h3",{attrs:{id:"tcp-的拥塞控制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tcp-的拥塞控制"}},[t._v("#")]),t._v(" TCP 的拥塞控制")]),t._v(" "),a("h4",{attrs:{id:"_1-慢开始"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-慢开始"}},[t._v("#")]),t._v(" ① 慢开始")]),t._v(" "),a("p",[t._v("当发送方开始发送数据时，由于一开始不知道网络负荷情况，如果立即将大量的数据字节传输到网络中，那么就有可能引起网络拥塞。一个较好的方法是在一开始发送少量的数据先探测一下网络状况，即由小到大的增大发送窗口（拥塞窗口 cwnd）。慢开始的慢指的是初始时令 cwnd 为 1，即一开始发送一个报文段。如果收到确认，则 cwnd = 2，之后每收到一个确认报文，就令 cwnd = cwnd * 2。")]),t._v(" "),a("p",[t._v("但是，为了防止拥塞窗口增长过大而引起网络拥塞，另外设置了一个慢开始门限 ssthresh。")]),t._v(" "),a("p",[t._v("① 当 cwnd < ssthresh 时，使用上述的慢开始算法；")]),t._v(" "),a("p",[t._v("② 当 cwnd > ssthresh 时，停止使用慢开始，转而使用拥塞避免算法；")]),t._v(" "),a("p",[t._v("③ 当 cwnd == ssthresh 时，两者均可。")]),t._v(" "),a("h4",{attrs:{id:"_2-拥塞避免"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-拥塞避免"}},[t._v("#")]),t._v(" ② 拥塞避免")]),t._v(" "),a("p",[t._v("拥塞控制是为了让拥塞窗口 cwnd 缓慢地增大，即每经过一个往返时间 RTT （往返时间定义为发送方发送数据到收到确认报文所经历的时间）就把发送方的 cwnd 值加 1，通过让 cwnd 线性增长，防止很快就遇到网络拥塞状态。")]),t._v(" "),a("p",[t._v("当网络拥塞发生时，让新的慢开始门限值变为发生拥塞时候的值的一半,并将拥塞窗口置为 1 ,然后再次重复两种算法（慢开始和拥塞避免），这时一瞬间会将网络中的数据量大量降低。")]),t._v(" "),a("h4",{attrs:{id:"_3-快重传"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-快重传"}},[t._v("#")]),t._v(" ③ 快重传")]),t._v(" "),a("p",[t._v("快重传算法要求接收方每收到一个失序的报文就立即发送重复确认，而不要等到自己发送数据时才捎带进行确认，假定发送方发送了 Msg 1 ~ Msg 4 这 4 个报文，已知接收方收到了 Msg 1，Msg 3 和 Msg 4 报文，此时因为接收到收到了失序的数据包，按照快重传的约定，接收方应立即向发送方发送 Msg 1 的重复确认。 于是在接收方收到 Msg 4 报文的时候，向发送方发送的仍然是 Msg 1 的重复确认。这样，发送方就收到了 3 次 Msg 1 的重复确认，于是立即重传对方未收到的 Msg 报文。由于发送方尽早重传未被确认的报文段，因此，快重传算法可以提高网络的吞吐量。")]),t._v(" "),a("h4",{attrs:{id:"_4-快恢复"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-快恢复"}},[t._v("#")]),t._v(" ④ 快恢复")]),t._v(" "),a("p",[t._v("快恢复算法是和快重传算法配合使用的，该算法主要有以下两个要点：")]),t._v(" "),a("p",[t._v("① 当发送方连续收到三个重复确认，执行乘法减小，慢开始门限 ssthresh 值减半；")]),t._v(" "),a("p",[t._v("② 由于发送方可能认为网络现在没有拥塞，因此与慢开始不同，把 cwnd 值设置为 ssthresh 减半之后的值，然后执行拥塞避免算法，线性增大 cwnd。")]),t._v(" "),a("h3",{attrs:{id:"tcp-如何做到可靠传输"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tcp-如何做到可靠传输"}},[t._v("#")]),t._v(" TCP 如何做到可靠传输")]),t._v(" "),a("p",[t._v("1、确认和重传：接收方收到报文就会确认，发送方发送一段时间后没有收到确认就重传。")]),t._v(" "),a("p",[t._v("2、数据校验")]),t._v(" "),a("p",[t._v("3、数据合理分片和排序：")]),t._v(" "),a("p",[t._v("UDP：IP 数据报大于 1500 字节，大于 MTU。这个时候发送方 IP 层就需要分片(fragmentation)。把数据报分成若干片，使每一片都小于 MTU。而接收方 IP 层则需要进行数据报的重组。这样就会多做许多事情。而更严重的是，由于 UDP 的特性。当某一片数据传送中丢失时，接收方便无法重组数据报，将导致丢弃整个 UDP 数据报。")]),t._v(" "),a("p",[t._v("TCP 会按 MTU 合理分片，接收方会缓存未按序到达的数据，重新排序后再交给应用层。")]),t._v(" "),a("p",[t._v("4、流量控制：当接收方来不及处理发送方的数据，能提示发送方降低发送的速率，防止包丢失。")]),t._v(" "),a("p",[t._v("5、拥塞控制：当网络拥塞时，减少数据的发送。")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("流量控制与拥塞控制的区别")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("流量控制")]),t._v(" "),a("ul",[a("li",[t._v("所谓流量控制就是让发送方的发送速率不要太快，让接收方来得及接收。如果接收方来不及接收发送方发送的数据，那么就会有分组丢失。在 TCP 中利用可边长的滑动窗口机制可以很方便的在 TCP 连接上实现对发送方的流量控制。主要的方式是接收方返回的 ACK 中会包含自己的接收窗口大小，以控制发送方此次发送的数据量大小（发送窗口大小）。")])])]),t._v(" "),a("li",[a("p",[t._v("拥塞控制")]),t._v(" "),a("ul",[a("li",[t._v("在实际的网络通信系统中，除了发送方和接收方外，还有路由器，交换机等复杂的网络传输线路，此时就需要拥塞控制。拥塞控制是作用于网络的，它是防止过多的数据注入到网络中，避免出现网络负载过大的情况。常用的解决方法有：慢开始和拥塞避免、快重传和快恢复。")])])]),t._v(" "),a("li",[a("p",[t._v("拥塞控制和流量控制的区别")]),t._v(" "),a("ul",[a("li",[t._v("拥塞控制往往是一种全局的，防止过多的数据注入到网络之中，而TCP连接的端点只要不能收到对方的确认信息，猜想在网络中发生了拥塞，但并不知道发生在何处，因此，流量控制往往指点对点通信量的控制，是端到端的问题。")])])])])]),t._v(" "),a("h3",{attrs:{id:"tcp-的粘包问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tcp-的粘包问题"}},[t._v("#")]),t._v(" TCP 的粘包问题")]),t._v(" "),a("p",[a("strong",[t._v("半包")]),t._v("\n指接受方没有接受到一个完整的包，只接受了部分，这种情况主要是由于 TCP 为提高传输效率，将一个包分配的足够大，导致接受方并不能一次接受完。（在长连接和短连接中都会出现）。")]),t._v(" "),a("p",[a("strong",[t._v("粘包")]),t._v("\n指发送方发送的若干包数据到接收方接收时粘成一包，从接收缓冲区看，后一包数据的头紧接着前一包数据的尾。出现粘包现象的原因是多方面的，它既可能由发送方造成，也可能由接收方造成。发送方引起的粘包是由TCP协议本身造成的，TCP为提高传输效率，发送方往往要收集到足够多的数据后才发送一包数据。若连续几次发送的数据都很少，通常TCP会根据优化算法把这些数据合成一包后一次发送出去，这样接收方就收到了粘包数据。接收方引起的粘包是由于接收方用户进程不及时接收数据，从而导致粘包现象。这是因为接收方先把收到的数据放在系统接收缓冲区，用户进程从该缓冲区取数据，若下一包数据到达时前一包数据尚未被用户进程取走，则下一包数据放到系统接收缓冲区时就接到前一包数据之后，而用户进程根据预先设定的缓冲区大小从系统接收缓冲区取数据，这样就一次取到了多包数据。")]),t._v(" "),a("p",[a("strong",[t._v("半包影响")])]),t._v(" "),a("p",[t._v("无法接受到完整的数据包。")]),t._v(" "),a("p",[a("strong",[t._v("粘包影响")])]),t._v(" "),a("p",[t._v("无法区分不同的数据包。")]),t._v(" "),a("p",[a("strong",[t._v("半包解决")])]),t._v(" "),a("ol",[a("li",[t._v("封包，加入数据长度这个变量。")])]),t._v(" "),a("p",[a("strong",[t._v("粘包解决")])]),t._v(" "),a("p",[t._v("（1）对于发送方引起的粘包现象，用户可通过编程设置来避免，TCP 提供了强制数据立即传送的操作指令 push，TCP 软件收到该操作指令后，就立即将本段数据发送出去，而不必等待发送缓冲区满；")]),t._v(" "),a("p",[t._v("（2）对于接收方引起的粘包，则可通过优化程序设计、精简接收进程工作量、提高接收进程优先级等措施，使其及时接收数据，从而尽量避免出现粘包现象；")]),t._v(" "),a("p",[t._v("（3）由接收方控制，将一包数据按结构字段，人为控制分多次接收，然后合并，通过这种手段来避免粘包。")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("UDP 有粘包问题吗？")]),t._v(" "),a("p",[t._v("没有。")]),t._v(" "),a("p",[t._v("UDP 是基于报文的，每一份数据都是一个报文，都有明显的边界可以区分。")])]),t._v(" "),a("h2",{attrs:{id:"_2-udp"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-udp"}},[t._v("#")]),t._v(" 2. UDP")]),t._v(" "),a("h3",{attrs:{id:"简介-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#简介-3"}},[t._v("#")]),t._v(" 简介")]),t._v(" "),a("p",[t._v("UDP（User Datagram Protocol）是面向无连接的、尽最大努力交付的、基于报文的传输层通讯协议。")]),t._v(" "),a("p",[t._v("UDP 不维护连接状态，支持同时向多个客户端传输相同的消息。")]),t._v(" "),a("p",[t._v("数据包报头只有 8 个字节，额外开销较小。")]),t._v(" "),a("p",[t._v("吞吐量只受限于数据生成速率、传输速率以及机器性能。")]),t._v(" "),a("p",[t._v("尽最大努力交付，不保证可靠交付，不需要维持复杂的链接状态表。")]),t._v(" "),a("p",[t._v("面向报文，不对应用程序提交的报文信息进行拆分或者合并。")]),t._v(" "),a("h3",{attrs:{id:"udp-报文头部"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#udp-报文头部"}},[t._v("#")]),t._v(" UDP 报文头部")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://tva1.sinaimg.cn/large/008i3skNly1gt3nfqcfjwj30eh048t8m.jpg",alt:"img"}})]),t._v(" "),a("h3",{attrs:{id:"udp-用户数据报的首部和伪首部"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#udp-用户数据报的首部和伪首部"}},[t._v("#")]),t._v(" UDP 用户数据报的首部和伪首部")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://tva1.sinaimg.cn/large/008i3skNly1gt3nfukvd1j318w0i2q7j.jpg",alt:"image-20200423120231304"}})]),t._v(" "),a("h3",{attrs:{id:"udp-通信过程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#udp-通信过程"}},[t._v("#")]),t._v(" UDP 通信过程")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://tva1.sinaimg.cn/large/008i3skNly1gt3nfs8624j30hs0dc3yu.jpg",alt:"img"}})]),t._v(" "),a("h2",{attrs:{id:"_3-tcp-与-udp-对比"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-tcp-与-udp-对比"}},[t._v("#")]),t._v(" 3. TCP 与 UDP 对比")]),t._v(" "),a("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://tva1.sinaimg.cn/large/008i3skNly1gt3nftm7iqj31170u0adg.jpg",alt:"image-20210111000251220"}}),t._v(" "),a("Vssue")],1)}),[],!1,null,null,null);s.default=v.exports}}]);
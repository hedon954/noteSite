(window.webpackJsonp=window.webpackJsonp||[]).push([[187],{597:function(t,a,s){"use strict";s.r(a);var n=s(47),r=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"面试题丨网络层"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#面试题丨网络层"}},[t._v("#")]),t._v(" 面试题丨网络层")]),t._v(" "),s("h2",{attrs:{id:"_1-ip-协议报文的组成成分"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-ip-协议报文的组成成分"}},[t._v("#")]),t._v(" 1. IP 协议报文的组成成分")]),t._v(" "),s("h2",{attrs:{id:"_2-icmp"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-icmp"}},[t._v("#")]),t._v(" 2. ICMP")]),t._v(" "),s("p",[s("strong",[t._v("ICMP")]),t._v(" 允许主机或路由器报告"),s("strong",[t._v("差错")]),t._v("情况和提供有关"),s("strong",[t._v("异常")]),t._v("情况的报告。")]),t._v(" "),s("h2",{attrs:{id:"_3-ping-原理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-ping-原理"}},[t._v("#")]),t._v(" 3. Ping 原理")]),t._v(" "),s("p",[s("strong",[t._v("PING")]),t._v(" 使用了 "),s("strong",[t._v("ICMP")]),t._v(" 的回显请求报文与回显应答报文。")]),t._v(" "),s("p",[s("strong",[t._v("PING")]),t._v(" 是应用层直接使用网络层 "),s("strong",[t._v("ICMP")]),t._v(" 的例子， 它没有通过运输层的 "),s("strong",[t._v("TCP")]),t._v(" 或"),s("strong",[t._v("UDP")]),t._v("。")]),t._v(" "),s("p",[t._v("PING 发送一个 ICMP(Internet Control Messages Protocol）；回声请求消息给目的地并报告是否收到所希望的 ICMP echo （ICMP回声应答）。")]),t._v(" "),s("p",[t._v("利用网络上机器IP地址的唯一性，给目标IP地址发送一个数据包，再要求对方返回一个同样大小的数据包来确定两台网络机器是否连接相通，时延是多少。")]),t._v(" "),s("div",{staticClass:"language-markdown extra-class"},[s("pre",{pre:!0,attrs:{class:"language-markdown"}},[s("code",[s("span",{pre:!0,attrs:{class:"token title important"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("#")]),t._v(" ping 详细过程")]),t._v("\n\t\t现在我们用主机 A ping局域网内的主机 B，A 会先看看自己有没有 B 的 MAC 地址，如果没有就向外发送一个 ARP 广播包。\n\n    交换机收到这个 ARP 广播包后，会检索自己有没有保存 B 的 MAC 地址，如果有则直接返回给主机 A，如果没有则向所有端口发送 ARP 广播。\n\n    局域网内的其它主机收到这个 ARP 广播包，会去看看是不是在找自己，如果不是，就丢弃掉这个包。B 会立即响应自己的 MAC 地址是多少，按同样的 ARP 报文格式返回给 A，并且自己也学习到了 A 的 MAC 地址。\n\n    有了 B 的 MAC 地址后，A 就可以将其封装到 ICMP 报文中，然后向主机 B 发送该报文，报文格式如：[IP首部，ICMP报文]\n\n    B 收到 A 发送的 ICMP 回显请求后，再按照同样的格式返回一个值给 A，这样就完成了局域网内的 ping 过程。\n\n    需要注意的是，完成这个过程后主机 A 就学习到了 B 的 MAC 地址，在接下来的一段时间内再次 ping，就不需要发送 ARP 广播包了。\n\n    如果 A ping 的是另一网段的主机 C，那么发送的 ARP 广播包会到路由器，路由器会把原来的 MAC 头部换成自己的 MAC 地址，然后查找自己已经学习到的路由表，找到相应的出口转发出去。\n\n    主机 C 学到了路由器一个端口的 MAC 地址，该端口转发给另一端口，而另一个端口学到了 A 的地址，这样就不需要再次做 ARP 解析了，直接将 ICMP 回显的请求回复过去。\n")])])]),s("h2",{attrs:{id:"_4-traceroute-原理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-traceroute-原理"}},[t._v("#")]),t._v(" 4. Traceroute 原理")]),t._v(" "),s("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://hedonspace.oss-cn-beijing.aliyuncs.com/img2/00831rSTgy1gdncdulz7cj310i0hejvy.jpg",alt:"image-20200409111324454"}}),t._v(" "),s("p",[t._v("它利用 "),s("strong",[t._v("IP")]),t._v(" 数据报中的 "),s("strong",[t._v("TTL")]),t._v(" 字段和 "),s("strong",[t._v("ICMP")]),t._v(" 时间超时差错报告报文实现对从源点到终点的路径的跟踪。")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://hedonspace.oss-cn-beijing.aliyuncs.com/img2/008eGmZEly1gp9t8j29aij30hj0cw0te.jpg",alt:"img"}})]),t._v(" "),s("div",{staticClass:"language-markdown extra-class"},[s("pre",{pre:!0,attrs:{class:"language-markdown"}},[s("code",[s("span",{pre:!0,attrs:{class:"token title important"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("#")]),t._v(" traceroute 详细过程")]),t._v("\n\t客户端发送一个TTL为1的ICMP请求回显数据包，在第一跳的时候超时并返回一个ICMP超时数据包，得到第一跳的地址。\n\t客户端发送一个TTL为2的ICMP请求回显数据包，得到第二跳的地址。\n\t客户端发送一个TTL为3的ICMP请求回显数据包，到达目标主机，目标主机返回一个ICMP回显应答，traceroute结束。\n")])])]),s("Vssue")],1)}),[],!1,null,null,null);a.default=r.exports}}]);
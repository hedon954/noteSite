(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{463:function(t,a,s){"use strict";s.r(a);var v=s(47),_=Object(v.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"一、计算机网络模型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一、计算机网络模型"}},[t._v("#")]),t._v(" 一、计算机网络模型")]),t._v(" "),s("h2",{attrs:{id:"_1-osi-开放式互联参考模型-7层协议"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-osi-开放式互联参考模型-7层协议"}},[t._v("#")]),t._v(" 1. OSI 开放式互联参考模型（7层协议）")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://tva1.sinaimg.cn/large/008i3skNly1gt3mt2poj8j30u016idmo.jpg",alt:"img"}})]),t._v(" "),s("p",[s("strong",[t._v("物理层：物理的方式连接网络节点（网卡，网线，集线器，中继器，调制解调器）")]),t._v("\n物理层的作用是实现相邻计算机节点之间比特流的透明传送，尽可能屏蔽掉具体传输介质和物理设备的差异。")]),t._v(" "),s("p",[t._v("【白话：解决两台物理机之间的通讯需求，（机器 A 往机器 B 发送比特流，机器 B 可以收到比特流）就是物理层需要做的事情。它还定义了物理设备的标准，如网线的类型，光纤的接口类型，各种传输介质的传输速率等等。将二进制比特流转化成电流强弱进行传输，到达目的地后，再转化为比特流。（数模转换--模数转换）】")]),t._v(" "),s("p",[s("strong",[t._v("数据链路层：局域网内的数据传输（网桥，交换机）")]),t._v("\n负责建立和管理节点间的链路。主要功能是：通过各种控制协议，将有差错的物理信道变为无差错的、能可靠传输数据帧的数据链路。")]),t._v(" "),s("p",[t._v("【白话：在比特流传输的过程中，会产生错传，漏传的可能，所以需要数据链路层进行格式化数据控制。检错功能确保可靠性。并且这一层将比特流组成为帧，交换机对帧解码，并根据其中的信息，发送到正确的接收方。】")]),t._v(" "),s("p",[s("strong",[t._v("网络层：不同网络之间的数据传输（路由器）")]),t._v("\n其主要任务是：通过路由选择算法，为报文或分组通过通信子网选择最适当的路径。")]),t._v(" "),s("p",[t._v("【白话：随着网络节点的增加，点对点通信可能会通过多个节点，所以找到目标节点，选择最佳路径，就是关键。网络层就是将网络地址翻译成对应的物理地址，并决定如何从发送方路由到接收方。本层传输的数据是数据包。（IP协议）】")]),t._v(" "),s("p",[s("strong",[t._v("传输层：TCP/UDP 协议（最重要）")]),t._v("\n该层是通信子网和资源子网的接口和桥梁。该层的主要任务是：向用户提供可靠的端到端的差错和流量控制，保证报文的正确传输。传输层的主要功能：监控服务质量。")]),t._v(" "),s("p",[t._v("【白话：随着网络通信需求的进一步扩大，在通信过程中可能会发送大量的数据，如海量文件传输，而网络在通信过程中或许会中断很多次，为了保障准确性，所以需要对发送的数据进行切分，切分成一个一个的段落（segment）。为了解决保障段落的顺序，以及丢失问题，传输层便诞生了。主要是传输协议控制，流量控制，速率控制等功能。对于大文件会按照网络能处理的最大尺寸，将数据包分片，比如以太网不能接收1500字节的数据包，所以传输的时候强制分割为较小的数据片，然后进行排序，按照一定的序列号进行发送，保障接收方按照正确的顺序接收。（tcp协议）】")]),t._v(" "),s("p",[s("strong",[t._v("会话层：半双工、单工和全双工")]),t._v("\n是用户应用程序和网络之间的接口，主要任务是：向两个实体的表示层提供建立和使用连接的方法，组织和协调两个会话进程之间的通信，并对数据交换进行管理。")]),t._v(" "),s("p",[t._v("【白话：对于计算机来说，以上四层已经足够满足基本功能，但是对于用户交互，我们不想每次都调用tcp去打包，调用ip协议去找路由，自己去发送。所以我们需求自动收发包，自动寻址的功能，所以建立了会话层。会话层主要是管理应用程序之间的通信。】")]),t._v(" "),s("p",[s("strong",[t._v("表示层：解密编码压缩格式")]),t._v("\n它对来自应用层的命令和数据进行解释，对各种语法赋予相应的含义，并按照一定的格式传送给会话层。其主要功能是“处理用户信息的表示问题，如编码、数据格式转换和加密解密”等。")]),t._v(" "),s("p",[t._v("【白话：对于不同操作系统之间，如linux和windows之间，他们的通信语法是不一样的，所以为了兼容不同的系统之间的网络通信，我们使用表示层解决不同系统之间的通讯语法问题。在不同的系统中，将数据按照网络能够理解的方式进行格式化，当然，格式化的方法根据系统和选择的网络而异。】")]),t._v(" "),s("p",[s("strong",[t._v("应用层：http 调用")]),t._v("\n它是计算机用户，以及各种应用程序和网络之间的接口，其功能是直接向用户提供服务，完成用户希望在网络上完成的各种工作。")]),t._v(" "),s("p",[t._v("【白话：发送方晓得自己发送的是什么东西，字节数组有多长，但是，接收方不清楚，所以应用层规定了发送方和接收方必须使用一种固定长度的消息头，消息头必须使用某种固定格式的主程，而且消息头里必须记录消息体的长度等信息，旨在为消息接收方更方便地解析接收到的数据。（http 协议）】")]),t._v(" "),s("h2",{attrs:{id:"_2-tcp-ip-模型-4层协议"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-tcp-ip-模型-4层协议"}},[t._v("#")]),t._v(" 2. TCP/IP 模型（4层协议）")]),t._v(" "),s("h5",{attrs:{id:"协议对比"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#协议对比"}},[t._v("#")]),t._v(" [协议对比]")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://tva1.sinaimg.cn/large/008i3skNly1gt3mt1ojy7j31gq0katcz.jpg",alt:"image-20210110125908740"}})]),t._v(" "),s("h5",{attrs:{id:"传输过程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#传输过程"}},[t._v("#")]),t._v(" [传输过程]")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://tva1.sinaimg.cn/large/008i3skNly1gt3mt28doaj31hf0u0dr7.jpg",alt:"image-20200227160130831"}})]),t._v(" "),s("h5",{attrs:{id:"数据头部"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#数据头部"}},[t._v("#")]),t._v(" [数据头部]")]),t._v(" "),s("p",[t._v("先自上而下，后自下而上处理数据头部：")]),t._v(" "),s("img",{staticStyle:{zoom:"33%"},attrs:{src:"https://tva1.sinaimg.cn/large/008i3skNly1gt3mt1433jj31r00tg45t.jpg",alt:"image-20200227160333244"}}),t._v(" "),s("Vssue")],1)}),[],!1,null,null,null);a.default=_.exports}}]);
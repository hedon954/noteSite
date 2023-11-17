(window.webpackJsonp=window.webpackJsonp||[]).push([[107],{518:function(t,a,_){"use strict";_.r(a);var v=_(47),s=Object(v.a)({},(function(){var t=this,a=t.$createElement,_=t._self._c||a;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"三、网络层"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#三、网络层"}},[t._v("#")]),t._v(" 三、网络层")]),t._v(" "),_("img",{attrs:{src:"https://hedonspace.oss-cn-beijing.aliyuncs.com/img2/008eGmZEgy1gndutfs001j31mp0u0dls.jpg",alt:"image-20200326114127000"}}),t._v(" "),_("h2",{attrs:{id:"_1-ip-协议"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-ip-协议"}},[t._v("#")]),t._v(" 1. IP 协议")]),t._v(" "),_("h3",{attrs:{id:"_1-1-ip-报文"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-ip-报文"}},[t._v("#")]),t._v(" 1.1 IP 报文")]),t._v(" "),_("img",{staticStyle:{zoom:"33%"},attrs:{src:"https://hedonspace.oss-cn-beijing.aliyuncs.com/img2/008i3skNly1gt3muv02xkj31ch0u077x.jpg",alt:"image-20210206160107159"}}),t._v(" "),_("ol",[_("li",[t._v("版本：IP 报文中，版本占了 4 位，用来表示该协议采用的是那一个版本的 IP，相同版本的 IP 才能进行通信。一般此处的值为 4，表示 IPv4。")]),t._v(" "),_("li",[t._v("头长度：该字段用四位表示，表示整个 IP 包头的长度，其中数的单位是 4 字节。即二进制数 0000-1111（十进制数 0-15），其中一个最小长度为 0 字节，最大长度为 60 字节。一般来说此处的值为 0101，表示头长度为 20 字节。")]),t._v(" "),_("li",[t._v("TOS 服务字段：该字段用 8 位表示。该字段一般情况下不使用。")]),t._v(" "),_("li",[t._v("总长度：该字段表示整个 IP 报文的长度，单位是字节。能表示的最大字节为 2^16-1=65535 字节。不过由于链路层的 MTU 限制。超过 1480 字节后就会被分片（以太帧 MTU 为 1500 的情况下，除去 20 字节的包头）")]),t._v(" "),_("li",[t._v("标识：该字段是 IP 软件实现的时候自动产生的，该字段的目的不是为了接受方的按序接受而设置的，而是在 IP 分片以后，用来标识同一片分片的，方便 IP 分片的重组。")]),t._v(" "),_("li",[t._v("标志：该字段是与 IP 分片有关的。其中有三位，但只有两位是有效的，分别为 MF、DF。"),_("strong",[t._v("MF 标识后面是否还有分片，为 1 时，表示后面还有分片。DF 标识是否能分片，为 0 表示可以分片。")])]),t._v(" "),_("li",[t._v("片偏移：该字段是与 IP 分片后，相应的 IP 片在总的 IP 片的位置。该字段的单位是 8 字节。比如，一个长度为 4000 字节的 IP 报文，到达路由器。这是超过了链路层的 MTU，需要进行分片，4000 字节中，20 字节为包头，3980 字节为数据，需要分成 3 个 IP 片（链路层 MTU 为 1500），那么第一个分片的片偏移就是0，表示该分片在3980的第0位开始，第1479位结束。第二个ip片的片偏移为185（1480/8），表示该分片开始的位置在原来ip的第1480位，结束在2959。第三片的片偏移为 370（2960/8），表示开始的时候是 2960 位，结束的时候在 3979 位。")]),t._v(" "),_("li",[t._v("TTL：该片表示生存周期，该值占 8 位。IP 分片每经过一个路由器该值减一，它的出现是为了防止路由环路，浪费带宽的问题。比如，该 IP 在 R1 路由器发送到 R2 路由器。R2 路由器又发给 R1 路由器。防止这种循环。window 系统默认为 128。")]),t._v(" "),_("li",[t._v("协议：该值标识上层的协议。占 8 位。其中 1，标识 ICMP、2 标识 IGMP、6 标识 TCP、17 标识 UDP、89 标识 OSPF。")]),t._v(" "),_("li",[t._v("校验和：该值是对整个数据包的包头进行的校验。占 16 位。")]),t._v(" "),_("li",[t._v("源地址和目的地址:标识发送 IP 片的源和目的 IP，32 位。")]),t._v(" "),_("li",[t._v("可选的部分：一般一些特殊的要求会加在这个部分。")]),t._v(" "),_("li",[t._v("数据。")])]),t._v(" "),_("h3",{attrs:{id:"_1-2-分类-ip-地址"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-分类-ip-地址"}},[t._v("#")]),t._v(" 1.2 分类 IP 地址")]),t._v(" "),_("img",{staticStyle:{zoom:"25%"},attrs:{src:"https://hedonspace.oss-cn-beijing.aliyuncs.com/img2/008i3skNly1gt3mv44j3yj31g60u0afg.jpg",alt:"image-20200326145344859"}}),t._v(" "),_("p",[_("font",{attrs:{color:"pink"}},[t._v("规律：最多4位，且1越来越多，0只能在后。")])],1),t._v(" "),_("h4",{attrs:{id:"一般不使用的特殊的-ip-地址"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#一般不使用的特殊的-ip-地址"}},[t._v("#")]),t._v(" 一般不使用的特殊的 IP 地址")]),t._v(" "),_("img",{staticStyle:{zoom:"25%"},attrs:{src:"https://hedonspace.oss-cn-beijing.aliyuncs.com/img2/008i3skNly1gt3muvqyffj31pm0u07ft.jpg",alt:"image-20200326150927810"}}),t._v(" "),_("h4",{attrs:{id:"常用的3种类别的-ip-地址"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#常用的3种类别的-ip-地址"}},[t._v("#")]),t._v(" 常用的3种类别的 IP 地址")]),t._v(" "),_("img",{staticStyle:{zoom:"25%"},attrs:{src:"https://hedonspace.oss-cn-beijing.aliyuncs.com/img2/008i3skNly1gt3mv7f9yuj31qm0k6n36.jpg",alt:"image-20200402100326347"}}),t._v(" "),_("ul",[_("li",[t._v("A 网络号个数减 2 的原因：\n"),_("ul",[_("li",[t._v("网络号全0，是个保留地址，表示”本网络“。")]),t._v(" "),_("li",[t._v("网络号全1，保留作文本地软件”环回测试“本主机的进程之间的通信之用。\n"),_("ul",[_("li",[t._v("不会发送到任何网络。")])])])])]),t._v(" "),_("li",[t._v("A 主机号个数减 2 的原因：\n"),_("ul",[_("li",[t._v("全 0 的主机号字段表示该 IP 地址是“本主机”所连接到的单个网络地址。")]),t._v(" "),_("li",[t._v("全 1 的主机号字段表示该网络上的所有主机。")])])]),t._v(" "),_("li",[t._v("B 网络号减 1 的原因\n"),_("ul",[_("li",[t._v("不存在全 0 和 全 1")]),t._v(" "),_("li",[t._v("但是128.0.0.0 是不指派的，而可以指派的 B 类最小网络地址是 128.1.0.0")])])]),t._v(" "),_("li",[t._v("B 主机号 减 2 的原因同 A")]),t._v(" "),_("li",[t._v("C 网络号 减 1 的原因同 B")]),t._v(" "),_("li",[t._v("C 主机号 减 2 的原因同 A")])]),t._v(" "),_("h3",{attrs:{id:"_1-3-ip-协议的转发流程"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-ip-协议的转发流程"}},[t._v("#")]),t._v(" 1.3 IP 协议的转发流程")]),t._v(" "),_("img",{staticStyle:{zoom:"33%"},attrs:{src:"https://hedonspace.oss-cn-beijing.aliyuncs.com/img2/008i3skNly1gt3mv0etw6j31bd0u0qcf.jpg",alt:"image-20200402113538109"}}),t._v(" "),_("h3",{attrs:{id:"_1-4-子网划分"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-4-子网划分"}},[t._v("#")]),t._v(" 1.4 子网划分")]),t._v(" "),_("h4",{attrs:{id:"划分思路"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#划分思路"}},[t._v("#")]),t._v(" 划分思路")]),t._v(" "),_("img",{staticStyle:{zoom:"33%"},attrs:{src:"https://hedonspace.oss-cn-beijing.aliyuncs.com/img2/008i3skNly1gt3mv2ru4yj31ek0u046j.jpg",alt:"image-20200402120026072"}}),t._v(" "),_("img",{staticStyle:{zoom:"33%"},attrs:{src:"https://hedonspace.oss-cn-beijing.aliyuncs.com/img2/008i3skNly1gt3muwp2p2j31940u0k00.jpg",alt:"image-20200402120036917"}}),t._v(" "),_("ul",[_("li",[_("p",[t._v("划分子网纯属一个单位内部的事情。单位对外仍然表现为没有划分子网的网络。")])]),t._v(" "),_("li",[_("p",[t._v("从主机号借用若干个位作为子网号 "),_("strong",[t._v("subnet-id")]),t._v("，而主机号 "),_("strong",[t._v("host-id")]),t._v(" 也就相应减少了若干个位。")]),t._v(" "),_("img",{staticStyle:{zoom:"25%"},attrs:{src:"https://hedonspace.oss-cn-beijing.aliyuncs.com/img2/008i3skNly1gt3muzf9dyj31lo0gotby.jpg",alt:"image-20200402115806570"}})]),t._v(" "),_("li",[_("p",[t._v("凡是从其他网络发送给本单位某个主机的 "),_("strong",[t._v("IP")]),t._v(" 数 据报，仍然是根据 "),_("strong",[t._v("IP")]),t._v(" 数据报的目的网络号 "),_("strong",[t._v("net- id")]),t._v("，先找到连接在本单位网络上的路由器。")])]),t._v(" "),_("li",[_("p",[t._v("然后此路由器在收到 "),_("strong",[t._v("IP")]),t._v(" 数据报后，再按目的网 络号 "),_("strong",[t._v("net-id")]),t._v(" 和子网号 "),_("strong",[t._v("subnet-id")]),t._v(" 找到目的子网。")])]),t._v(" "),_("li",[_("p",[t._v("最后就将 "),_("strong",[t._v("IP")]),t._v(" 数据报直接交付目的主机。")])])]),t._v(" "),_("h4",{attrs:{id:"子网掩码"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#子网掩码"}},[t._v("#")]),t._v(" 子网掩码")]),t._v(" "),_("p",[t._v("从一个 IP 数据包的首部并无法判断源主机或目的主机所连接的网络是否进行了子网划分。")]),t._v(" "),_("p",[t._v("使用子网掩码可以找出 IP 地址的子网部分。")]),t._v(" "),_("ul",[_("li",[t._v("子网掩码长度 = 32 位\n"),_("ul",[_("li",[t._v("某位 = 1：IP 地址对应位为网络号和子网号")]),t._v(" "),_("li",[t._v("某位 = 0：IP 地址对应位为主机号")])])])]),t._v(" "),_("img",{staticStyle:{zoom:"25%"},attrs:{src:"https://hedonspace.oss-cn-beijing.aliyuncs.com/img2/008i3skNly1gt3mv6xg5ij31m00rudm9.jpg",alt:"image-20200402120612061"}}),t._v(" "),_("h3",{attrs:{id:"_1-5-无分类编址-cidr"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-5-无分类编址-cidr"}},[t._v("#")]),t._v(" 1.5 无分类编址 CIDR")]),t._v(" "),_("ul",[_("li",[_("strong",[t._v("CIDR")]),t._v(" 消除了传统的 "),_("strong",[t._v("A")]),t._v(" 类、"),_("strong",[t._v("B")]),t._v(" 类和 "),_("strong",[t._v("C")]),t._v(" 类地址以及划分子网的概念，因而可以更加有效地分配 "),_("strong",[t._v("IPv4")]),t._v(" 的地址空间。")]),t._v(" "),_("li",[_("strong",[t._v("CIDR")]),t._v("使用各种长度的“网络前缀”**(network- prefix)**来代替分类地址中的网络号和子网号。")]),t._v(" "),_("li",[_("strong",[t._v("IP")]),t._v(" 地址从三级编址(使用子网掩码)又回到了 "),_("strong",[t._v("两级编址")]),t._v("。")])]),t._v(" "),_("h4",{attrs:{id:"_1-5-1-格式"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-5-1-格式"}},[t._v("#")]),t._v(" 1.5.1 格式")]),t._v(" "),_("img",{staticStyle:{zoom:"33%"},attrs:{src:"https://hedonspace.oss-cn-beijing.aliyuncs.com/img2/008i3skNly1gt3mv0whaej310807swfv.jpg",alt:"image-20200409101713821"}}),t._v(" "),_("h5",{attrs:{id:"_1-使用-斜线记法"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-使用-斜线记法"}},[t._v("#")]),t._v(" [1] 使用“斜线记法”")]),t._v(" "),_("ul",[_("li",[t._v("220.78.168.0 / 24\n"),_("ul",[_("li",[t._v("表明网络前缀占了24位")]),t._v(" "),_("li",[t._v("这样就剩下8位主机号了")])])])]),t._v(" "),_("h5",{attrs:{id:"_2-其他记法"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-其他记法"}},[t._v("#")]),t._v(" [2] 其他记法")]),t._v(" "),_("ul",[_("li",[_("p",[_("strong",[t._v("10.0.0.0/10")]),t._v(" 可简写为 "),_("strong",[t._v("10/10")]),t._v("，也就是把点分十进制中低位连续的 "),_("strong",[t._v("0")]),t._v(" 省略。")])]),t._v(" "),_("li",[_("p",[_("strong",[t._v("10.0.0.0/10")]),t._v(" 隐含地指出 "),_("strong",[t._v("IP")]),t._v(" 地址 "),_("strong",[t._v("10.0.0.0")]),t._v(" 的掩码是"),_("strong",[t._v("255.192.0.0")]),t._v("。")])]),t._v(" "),_("li",[_("p",[t._v("网络前缀的后面加一个星号 ***** 的表示方法，如 "),_("strong",[t._v("00001010 00*")]),t._v("，在星号 ***** 之前是网络前缀，而星号 ***** 表示 "),_("strong",[t._v("IP")]),t._v(" 地址中的主机号，可以是任意值。")])])]),t._v(" "),_("h4",{attrs:{id:"_1-5-2-常用的-cidr-地址块"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-5-2-常用的-cidr-地址块"}},[t._v("#")]),t._v(" 1.5.2 常用的 CIDR 地址块")]),t._v(" "),_("img",{staticStyle:{zoom:"33%"},attrs:{src:"https://hedonspace.oss-cn-beijing.aliyuncs.com/img2/008i3skNly1gt3mvd1gc2j310w0m6q8x.jpg",alt:"image-20200409102903372"}}),t._v(" "),_("h5",{attrs:{id:"【例题】"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#【例题】"}},[t._v("#")]),t._v(" 【例题】")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://hedonspace.oss-cn-beijing.aliyuncs.com/img2/008i3skNly1gt3muy2x0sj317o0u0q7o.jpg",alt:"image-20200410204129693"}})]),t._v(" "),_("h4",{attrs:{id:"_1-5-3-构成超网"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-5-3-构成超网"}},[t._v("#")]),t._v(" 1.5.3 构成超网")]),t._v(" "),_("p",[t._v("前缀长度不超过 "),_("strong",[t._v("23")]),t._v(" 位的 "),_("strong",[t._v("CIDR")]),t._v(" 地址块都包含了多个 "),_("strong",[t._v("C")]),t._v(" 类地址。这些 "),_("strong",[t._v("C")]),t._v(" 类地址合起来就构成了超网。")]),t._v(" "),_("h4",{attrs:{id:"_1-5-4-cidr-地址块划分举例"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-5-4-cidr-地址块划分举例"}},[t._v("#")]),t._v(" 1.5.4 CIDR 地址块划分举例")]),t._v(" "),_("img",{staticStyle:{zoom:"33%"},attrs:{src:"https://hedonspace.oss-cn-beijing.aliyuncs.com/img2/008i3skNly1gt3mv3o0nsj312s0nen5l.jpg",alt:"image-20200409103240252"}}),t._v(" "),_("h4",{attrs:{id:"_1-5-5-最长前缀匹配"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-5-5-最长前缀匹配"}},[t._v("#")]),t._v(" 1.5.5 最长前缀匹配")]),t._v(" "),_("p",[t._v("从匹配结果中选择具有最长网络前缀的路由。")]),t._v(" "),_("img",{staticStyle:{zoom:"33%"},attrs:{src:"https://hedonspace.oss-cn-beijing.aliyuncs.com/img2/00831rSTgy1gdnbo7dp07j30y60lytd6.jpg",alt:"image-20200409104846259"}}),t._v(" "),_("img",{staticStyle:{zoom:"33%"},attrs:{src:"https://hedonspace.oss-cn-beijing.aliyuncs.com/img2/008i3skNly1gt3mv62dk3j310q0g0dkh.jpg",alt:"image-20200409104907630"}}),t._v(" "),_("p",[t._v("这里选择第2个项目。")]),t._v(" "),_("h4",{attrs:{id:"_1-5-6-使用二叉线索查找路由表"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-5-6-使用二叉线索查找路由表"}},[t._v("#")]),t._v(" 1.5.6 使用二叉线索查找路由表")]),t._v(" "),_("p",[t._v("下面例题的唯一前缀有 5 位")]),t._v(" "),_("img",{staticStyle:{zoom:"33%"},attrs:{src:"https://hedonspace.oss-cn-beijing.aliyuncs.com/img2/008i3skNly1gt3mv7uhbkj310y0bkadb.jpg",alt:"image-20200409105529810"}}),t._v(" "),_("h3",{attrs:{id:"_1-6-网络地址转换-nat"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-6-网络地址转换-nat"}},[t._v("#")]),t._v(" 1.6 网络地址转换 NAT")]),t._v(" "),_("blockquote",[_("p",[t._v("NAT 技术用于多个主机通过一个公有 IP 访问互联网的私有网络中。")])]),t._v(" "),_("p",[_("img",{attrs:{src:"https://hedonspace.oss-cn-beijing.aliyuncs.com/img2/008i3skNly1gt3muv8k7hj31940msdj0.jpg",alt:"image-20210206201708504"}})]),t._v(" "),_("h2",{attrs:{id:"_2-arp-协议"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-arp-协议"}},[t._v("#")]),t._v(" 2. ARP 协议")]),t._v(" "),_("blockquote",[_("p",[t._v("ARP 协议在 TCP/IP 模型中属于 IP 层（网络层），在 OSI 模型中属于链路层。ARP 协议即地址解析协议，是根据 IP 地址获取物理地址的一个 TCP/IP 协议。它可以解决同一个局域网内主机或路由器的IP地址和 MAC 地址的映射问题")])]),t._v(" "),_("h3",{attrs:{id:"_2-1-作用"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-作用"}},[t._v("#")]),t._v(" 2.1 作用")]),t._v(" "),_("blockquote",[_("p",[t._v("通过一个机器（主机或路由器）的 IP 地址，找出其相应的硬件地址。")])]),t._v(" "),_("img",{staticStyle:{zoom:"33%"},attrs:{src:"https://hedonspace.oss-cn-beijing.aliyuncs.com/img2/008eGmZEgy1gndw2w4tp2j31ca0ek77j.jpg",alt:"image-20200402102958914"}}),t._v(" "),_("h3",{attrs:{id:"_2-2-工作原理"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-工作原理"}},[t._v("#")]),t._v(" 2.2 工作原理")]),t._v(" "),_("img",{staticStyle:{zoom:"40%"},attrs:{src:"https://hedonspace.oss-cn-beijing.aliyuncs.com/img2/008i3skNly1gt3mv1uwsej316r0u0gtl.jpg",alt:"image-20200402103223569"}}),t._v(" "),_("h2",{attrs:{id:"_3-rarp-协议"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_3-rarp-协议"}},[t._v("#")]),t._v(" 3. RARP 协议")]),t._v(" "),_("blockquote",[_("p",[t._v("将 MAC 地址转为 IP 地址。")])]),t._v(" "),_("h2",{attrs:{id:"_4-icmp-协议"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_4-icmp-协议"}},[t._v("#")]),t._v(" 4. ICMP 协议")]),t._v(" "),_("blockquote",[_("p",[t._v("网际控制报文协议（Internet Control Message Protocal）。")])]),t._v(" "),_("h3",{attrs:{id:"_4-1-作用"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-作用"}},[t._v("#")]),t._v(" 4.1 作用")]),t._v(" "),_("ul",[_("li",[_("strong",[t._v("ICMP")]),t._v(" 允许主机或路由器报告"),_("strong",[t._v("差错")]),t._v("情况和提供有关"),_("strong",[t._v("异常")]),t._v("情况的报告。")])]),t._v(" "),_("h3",{attrs:{id:"_4-2-icmp-报文的格式"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-icmp-报文的格式"}},[t._v("#")]),t._v(" 4.2 ICMP 报文的格式")]),t._v(" "),_("p",[_("font",{attrs:{color:"Red"}},[t._v("PS： "),_("strong",[t._v("ICMP")]),t._v(" 不是高层协议")])],1),t._v(" "),_("img",{staticStyle:{zoom:"33%"},attrs:{src:"https://hedonspace.oss-cn-beijing.aliyuncs.com/img2/00831rSTgy1gdnc59r629j310w0g0dim.jpg",alt:"image-20200409110510138"}}),t._v(" "),_("h3",{attrs:{id:"_4-3-icmp-报文的种类"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_4-3-icmp-报文的种类"}},[t._v("#")]),t._v(" 4.3 ICMP 报文的种类")]),t._v(" "),_("h4",{attrs:{id:"icmp-差错报告报文"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#icmp-差错报告报文"}},[t._v("#")]),t._v(" ICMP 差错报告报文")]),t._v(" "),_("img",{staticStyle:{zoom:"33%"},attrs:{src:"https://hedonspace.oss-cn-beijing.aliyuncs.com/img2/008i3skNly1gt3muw68u7j31180f4q60.jpg",alt:"image-20200409110656993"}}),t._v(" "),_("ul",[_("li",[t._v("终点不可达")]),t._v(" "),_("li",[t._v("重定向")]),t._v(" "),_("li",[t._v("超时")]),t._v(" "),_("li",[t._v("参数问题")])]),t._v(" "),_("p",[t._v("几种不应该发送 ICMP 差错报告报文的情况")]),t._v(" "),_("ul",[_("li",[t._v("对 "),_("strong",[t._v("ICMP")]),t._v(" 差错报告报文不再发送 "),_("strong",[t._v("ICMP")]),t._v(" 差错报告报文。")]),t._v(" "),_("li",[t._v("对第一个分片的数据报片的所有后续数据报片都不发送 "),_("strong",[t._v("ICMP")]),t._v(" 差错报告报文。")]),t._v(" "),_("li",[t._v("对具有多播地址的数据报都不发送 "),_("strong",[t._v("ICMP")]),t._v(" 差错报告报文。")]),t._v(" "),_("li",[t._v("对具有特殊地址(如"),_("strong",[t._v("127.0.0.0")]),t._v(" 或 "),_("strong",[t._v("0.0.0.0")]),t._v(")的数据报不发送 "),_("strong",[t._v("ICMP")]),t._v(" 差错报告报文。")])]),t._v(" "),_("h4",{attrs:{id:"icmp-询问报文"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#icmp-询问报文"}},[t._v("#")]),t._v(" ICMP 询问报文")]),t._v(" "),_("ul",[_("li",[t._v("回送请求和回答请求")]),t._v(" "),_("li",[t._v("时间戳请求和回答报文")])]),t._v(" "),_("h3",{attrs:{id:"_4-4-应用"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_4-4-应用"}},[t._v("#")]),t._v(" 4.4 应用")]),t._v(" "),_("h4",{attrs:{id:"ping-packet-internet-groper"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#ping-packet-internet-groper"}},[t._v("#")]),t._v(" PING（"),_("strong",[t._v("Packet InterNet Groper")]),t._v("）")]),t._v(" "),_("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://hedonspace.oss-cn-beijing.aliyuncs.com/img2/008i3skNly1gt3muz2o3mj30zk0dm76e.jpg",alt:"image-20200409111203988"}}),t._v(" "),_("ul",[_("li",[_("p",[t._v("作用：测试两个主机之间的连通性。")])]),t._v(" "),_("li",[_("p",[_("strong",[t._v("PING")]),t._v(" 使用了 "),_("strong",[t._v("ICMP")]),t._v(" 的回显请求报文与回显应答报文。")]),t._v(" "),_("blockquote",[_("p",[t._v("利用网络上机器 IP 地址的唯一性，给目标 IP 地址发送一个数据包，再要求对方返回一个同样大小的数据包来确定两台网络机器是否连接相通，时延是多少。")])])])]),t._v(" "),_("div",{staticClass:"custom-block tip"},[_("p",{staticClass:"custom-block-title"},[t._v("ping 详细过程")]),t._v(" "),_("ol",[_("li",[t._v("现在我们用主机 A ping 局域网内的主机 B，A 会先看看自己有没有 B 的 MAC 地址，如果没有就向外发送一个 ARP 广播包。")]),t._v(" "),_("li",[t._v("交换机收到这个 ARP 广播包后，会检索自己有没有保存 B 的 MAC 地址，如果有则直接返回给主机 A，如果没有则向所有端口发送 ARP 广播。")]),t._v(" "),_("li",[t._v("局域网内的其它主机收到这个 ARP 广播包，会去看看是不是在找自己，如果不是，就丢弃掉这个包。B 会立即响应自己的 MAC 地址是多少，按同样的 ARP 报文格式返回给 A，并且自己也学习到了 A 的 MAC 地址。")]),t._v(" "),_("li",[t._v("有了 B 的 MAC 地址后，A 就可以将其封装到 ICMP 报文中，然后向主机 B 发送该报文，报文格式如：[IP首部，ICMP报文]")]),t._v(" "),_("li",[t._v("B 收到 A 发送的 ICMP 回显请求后，再按照同样的格式返回一个值给 A，这样就完成了局域网内的 ping 过程。")]),t._v(" "),_("li",[t._v("需要注意的是，完成这个过程后主机 A 就学习到了 B 的 MAC 地址，在接下来的一段时间内再次 ping，就不需要发送 ARP 广播包了。")]),t._v(" "),_("li",[t._v("如果 A ping 的是另一网段的主机 C，那么发送的 ARP 广播包会到路由器，路由器会把原来的 MAC 头部换成自己的 MAC 地址，然后查找自己已经学习到的路由表，找到相应的出口转发出去。")]),t._v(" "),_("li",[t._v("主机 C 学到了路由器一个端口的 MAC 地址，该端口转发给另一端口，而另一个端口学到了 A 的地址，这样就不需要再次做 ARP 解析了，直接将 ICMP 回显的请求回复过去。")])])]),t._v(" "),_("ul",[_("li",[_("strong",[t._v("PING")]),t._v(" 是应用层直接使用网络层 "),_("strong",[t._v("ICMP")]),t._v(" 的例子， 它没有通过运输层的 "),_("strong",[t._v("TCP")]),t._v(" 或"),_("strong",[t._v("UDP")]),t._v("。")])]),t._v(" "),_("h4",{attrs:{id:"traceroute"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#traceroute"}},[t._v("#")]),t._v(" Traceroute")]),t._v(" "),_("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://hedonspace.oss-cn-beijing.aliyuncs.com/img2/00831rSTgy1gdncdulz7cj310i0hejvy.jpg",alt:"image-20200409111324454"}}),t._v(" "),_("ul",[_("li",[_("p",[t._v("用来跟踪一个分组从源点到终点的路径。")])]),t._v(" "),_("li",[_("p",[t._v("它利用 "),_("strong",[t._v("IP")]),t._v(" 数据报中的 "),_("strong",[t._v("TTL")]),t._v(" 字段和 "),_("strong",[t._v("ICMP")]),t._v(" 时间超时差错报告报文实现对从源点到终点的路径的跟踪。")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://hedonspace.oss-cn-beijing.aliyuncs.com/img2/008i3skNly1gt3mv34h3ej30hj0cw0te.jpg",alt:"img"}})])])]),t._v(" "),_("div",{staticClass:"custom-block tip"},[_("p",{staticClass:"custom-block-title"},[t._v("traceroute 详细过程")]),t._v(" "),_("ul",[_("li",[t._v("客户端发送一个 TTL 为 1 的 ICMP 请求回显数据包，在第一跳的时候超时并返回一个 ICMP 超时数据包，得到第一跳的地址。")]),t._v(" "),_("li",[t._v("客户端发送一个 TTL 为 2 的 ICMP 请求回显数据包，得到第二跳的地址。")]),t._v(" "),_("li",[t._v("客户端发送一个 TTL 为 3 的 ICMP 请求回显数据包，到达 "),_("strong",[t._v("目标主机")]),t._v("，目标主机返回一个 ICMP 回显应答，traceroute 结束。")])])]),t._v(" "),_("h2",{attrs:{id:"_5-路由"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_5-路由"}},[t._v("#")]),t._v(" 5. 路由")]),t._v(" "),_("h3",{attrs:{id:"_5-1-自治系统"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_5-1-自治系统"}},[t._v("#")]),t._v(" 5.1 自治系统")]),t._v(" "),_("img",{staticStyle:{zoom:"33%"},attrs:{src:"https://hedonspace.oss-cn-beijing.aliyuncs.com/img2/008i3skNly1gt3mv5hiexj311c09ggnj.jpg",alt:"image-20200409113450496"}}),t._v(" "),_("p",[t._v("尽管 一个 "),_("strong",[t._v("AS")]),t._v(" 使用了多种内部路由选择协议和度量，但重要的是一个 "),_("strong",[t._v("AS")]),t._v(" 对其他 "),_("strong",[t._v("AS")]),t._v(" 表现出的是一个单一的和一致的路由选择策略。")]),t._v(" "),_("h3",{attrs:{id:"_5-2-内部网关协议-rip-路由信息协议"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_5-2-内部网关协议-rip-路由信息协议"}},[t._v("#")]),t._v(" 5.2 内部网关协议 RIP —— 路由信息协议")]),t._v(" "),_("h4",{attrs:{id:"_5-2-1-工作原理"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_5-2-1-工作原理"}},[t._v("#")]),t._v(" 5.2.1 工作原理")]),t._v(" "),_("ul",[_("li",[_("p",[_("strong",[t._v("RIP")]),t._v(" 是一种分布式的、基于"),_("strong",[t._v("距离向量")]),t._v("的路由选择协议。")])]),t._v(" "),_("li",[_("p",[_("strong",[t._v("RIP")]),t._v(" 协议要求网络中的每一个路由器都要维护从它自己到其他每一个目的网络的==距离记录==。")])]),t._v(" "),_("li",[_("p",[_("strong",[t._v("RIP")]),t._v(" 协议中的“距离”也称为“跳数”"),_("strong",[t._v("(hop count)")]),t._v("，因为每经过一个路由器，跳数就加 "),_("strong",[t._v("1")]),t._v("。")])]),t._v(" "),_("li",[_("p",[t._v("“距离”=“最短距离”")])])]),t._v(" "),_("p",[_("font",{attrs:{color:"red"}},[t._v("△ 距离")])],1),t._v(" "),_("ul",[_("li",[_("strong",[t._v("RIP")]),t._v(" 认为一个好的路由就是它通过的路由器的数目少，即“距离短”。")]),t._v(" "),_("li",[_("strong",[t._v("RIP")]),t._v(" 允许一条路径最多只能包含 "),_("strong",[t._v("15")]),t._v(" 个路由器。")]),t._v(" "),_("li",[t._v("“距离”的最大值为 "),_("strong",[t._v("16")]),t._v(" 时即相当于不可达。可见 "),_("strong",[t._v("RIP")]),t._v(" 只适用于==小型互联网==。")]),t._v(" "),_("li",[_("strong",[t._v("RIP")]),t._v(" 不能在两个网络之间同时使用多条路由。 "),_("strong",[t._v("RIP")]),t._v(" 选择一个具有最少路由器的路由(即最短路由)，哪怕还存在另一条高速**("),_("strong",[t._v("低时延")]),t._v(")**但路由器较多的路由。")])]),t._v(" "),_("h4",{attrs:{id:"_5-2-2-特点"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_5-2-2-特点"}},[t._v("#")]),t._v(" 5.2.2 特点")]),t._v(" "),_("ul",[_("li",[_("p",[_("strong",[t._v("(1)")]),t._v(" 仅和==相邻路由器==交换信息。")])]),t._v(" "),_("li",[_("p",[_("strong",[t._v("(2)")]),t._v(" 交换的信息是当前本路由器所知道的全部信息，即自己的==路由表==。")])]),t._v(" "),_("li",[_("p",[_("strong",[t._v("(3)")]),t._v(" 按==固定的时间间隔==交换路由信息，")]),t._v(" "),_("p",[t._v("​\t\t例如，每隔 "),_("strong",[t._v("30")]),t._v(" 秒。当网络拓扑发生变化时，路由器也及时向相邻路由器通告拓扑变化后的路由信息。")])])]),t._v(" "),_("h4",{attrs:{id:"_5-2-3-路由表的建立"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_5-2-3-路由表的建立"}},[t._v("#")]),t._v(" 5.2.3 路由表的建立")]),t._v(" "),_("p",[t._v("一开始是空的，边交换边更新，很快就知道自己所在的自治系统的所有结点的信息了。")]),t._v(" "),_("h5",{attrs:{id:"【★】距离向量算法"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#【★】距离向量算法"}},[t._v("#")]),t._v(" 【★】距离向量算法")]),t._v(" "),_("p",[t._v("其实就是一个不断试验不断优化的过程。")]),t._v(" "),_("img",{staticStyle:{zoom:"33%"},attrs:{src:"https://hedonspace.oss-cn-beijing.aliyuncs.com/img2/008i3skNly1gt3muzxm0dj31j60l00wj.jpg",alt:"image-20210209164020702"}}),t._v(" "),_("h5",{attrs:{id:"【例题】-2"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#【例题】-2"}},[t._v("#")]),t._v(" 【例题】")]),t._v(" "),_("img",{staticStyle:{zoom:"33%"},attrs:{src:"https://hedonspace.oss-cn-beijing.aliyuncs.com/img2/008i3skNly1gt3mv291zej311i0oun4u.jpg",alt:"image-20200409115446502"}}),t._v(" "),_("p",[t._v("第一行在表 4-9(a) 中没有，因此要把这一行添加到表 4-9(a) 中；")]),t._v(" "),_("p",[t._v("第二行的 Net2 在表 4-9(a) 中有，且下一条路由器也是 R~4~，因此要更新（距离变大了）；")]),t._v(" "),_("p",[t._v("第三行的 Net3 在表 4-9(a) 中有，但是下一条路由器不一样。于是就要比较举例。新的路由信息的距离是 2，小于原来表中的 4，因此要更新。")]),t._v(" "),_("h4",{attrs:{id:"_5-2-4-rip2-协议的报文格式"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_5-2-4-rip2-协议的报文格式"}},[t._v("#")]),t._v(" 5.2.4 RIP2 协议的报文格式")]),t._v(" "),_("img",{staticStyle:{zoom:"33%"},attrs:{src:"https://hedonspace.oss-cn-beijing.aliyuncs.com/img2/00831rSTgy1gdndnd7svej311i0jwtcp.jpg",alt:"image-20200409115709342"}}),t._v(" "),_("ul",[_("li",[t._v("特点\n"),_("ul",[_("li",[t._v("具有简单的鉴别功能")])])])]),t._v(" "),_("h4",{attrs:{id:"_5-2-5-特点"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_5-2-5-特点"}},[t._v("#")]),t._v(" 5.2.5 特点")]),t._v(" "),_("p",[t._v("好消息传播得快，坏消息传播得慢")]),t._v(" "),_("h4",{attrs:{id:"_5-2-6-存在的问题"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_5-2-6-存在的问题"}},[t._v("#")]),t._v(" 5.2.6 存在的问题")]),t._v(" "),_("p",[t._v("当网络出现故障时，要经过比较长的时间 "),_("strong",[t._v("（"),_("strong",[t._v("例如数分钟")]),t._v("）")]),t._v(" 才能将此信息传送到所有的路由器。")]),t._v(" "),_("h3",{attrs:{id:"_5-3-内部网关协议-ospf-开放最短路径优先"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_5-3-内部网关协议-ospf-开放最短路径优先"}},[t._v("#")]),t._v(" 5.3 内部网关协议 OSPF —— 开放最短路径优先")]),t._v(" "),_("h4",{attrs:{id:"_5-3-1-特点"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_5-3-1-特点"}},[t._v("#")]),t._v(" 5.3.1 特点")]),t._v(" "),_("ul",[_("li",[t._v("向本自治系统中所有路由器发送信息（洪泛法）；")]),t._v(" "),_("li",[t._v("发送的信息就是本路由器相邻的所有路由器的链路状态，但这只是路由器所知道的部分信息；")]),t._v(" "),_("li",[t._v("只有当链路状态发生变化时，路由器才向所有路由器用洪泛法发送此信息。\n"),_("ul",[_("li",[t._v("RIP 是不管有没有变化，都要定期交换信息。")])])]),t._v(" "),_("li",[t._v("OSPF 允许管理员（根据业务不同）给每条路由指派不同的代价；")]),t._v(" "),_("li",[t._v("如果到同一个目的网络有多条代价相同的路径，那么可以分摊——==负载平衡==；")]),t._v(" "),_("li",[t._v("所有在 OSPF 路由器之间交换的分租都具有==鉴别==的功能；")]),t._v(" "),_("li",[t._v("OSPF 支持可变长度的子网划分和无分类的编址 CIDR")]),t._v(" "),_("li",[t._v("由于网络中的链路状态可能经常发生变化，因此 OSPF 让每一个链路状态都带上一个 32 位的序号\n"),_("ul",[_("li",[t._v("序号越大，状态越新")]),t._v(" "),_("li",[t._v("序号增长速率不得超过 5s 中 1 次")])])])]),t._v(" "),_("h4",{attrs:{id:"_5-3-2-划分区域"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_5-3-2-划分区域"}},[t._v("#")]),t._v(" 5.3.2 划分区域")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://hedonspace.oss-cn-beijing.aliyuncs.com/img2/008i3skNly1gt3mvab0ynj319i0h6jva.jpg",alt:"image-20200423100217990"}})]),t._v(" "),_("h4",{attrs:{id:"_5-3-3-报文格式"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_5-3-3-报文格式"}},[t._v("#")]),t._v(" 5.3.3 报文格式")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://hedonspace.oss-cn-beijing.aliyuncs.com/img2/008i3skNly1gt3mvb4mdaj31780mg436.jpg",alt:"image-20200423100424380"}})]),t._v(" "),_("h4",{attrs:{id:"_5-3-3-5种类型"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_5-3-3-5种类型"}},[t._v("#")]),t._v(" 5.3.3 5种类型")]),t._v(" "),_("ul",[_("li",[t._v("问候分组")]),t._v(" "),_("li",[t._v("数据库描述分组")]),t._v(" "),_("li",[t._v("链路状态请求分组")]),t._v(" "),_("li",[t._v("链路状态更新分组\n"),_("ul",[_("li",[t._v("洪泛法")]),t._v(" "),_("li",[t._v("最核心")])])]),t._v(" "),_("li",[t._v("链路状态确认分组")])]),t._v(" "),_("p",[_("img",{attrs:{src:"https://hedonspace.oss-cn-beijing.aliyuncs.com/img2/008i3skNly1gt3mv6kmc1j31b20fgmzx.jpg",alt:"image-20200423101030021"}})]),t._v(" "),_("h4",{attrs:{id:"_5-3-4-dijkstra-迪杰斯特拉-算法"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_5-3-4-dijkstra-迪杰斯特拉-算法"}},[t._v("#")]),t._v(" 5.3.4 Dijkstra（迪杰斯特拉）算法")]),t._v(" "),_("h3",{attrs:{id:"_5-4-外部网关协议-bgp"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_5-4-外部网关协议-bgp"}},[t._v("#")]),t._v(" 5.4 外部网关协议 BGP")]),t._v(" "),_("h4",{attrs:{id:"_5-4-1-出现的原因"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_5-4-1-出现的原因"}},[t._v("#")]),t._v(" 5.4.1 出现的原因")]),t._v(" "),_("ul",[_("li",[t._v("互联网规模太大，使得自治系统 AS 之间路由选择非常困难；")]),t._v(" "),_("li",[t._v("自治系统 AS 之间的路由选择必须考虑有关策略。")])]),t._v(" "),_("h4",{attrs:{id:"_5-4-2-路径向量路由选择协议"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_5-4-2-路径向量路由选择协议"}},[t._v("#")]),t._v(" 5.4.2 路径向量路由选择协议")]),t._v(" "),_("ul",[_("li",[_("p",[t._v("思想：")]),t._v(" "),_("blockquote",[_("p",[t._v("只是力求寻找一条能够==达到目的网络==且==比较好==的路由（不能兜圈子）。")])])])]),t._v(" "),_("p",[_("img",{attrs:{src:"https://hedonspace.oss-cn-beijing.aliyuncs.com/img2/008eGmZEgy1gnh93brrmij31o80emn1b.jpg",alt:"image-20200423101946201"}})]),t._v(" "),_("ul",[_("li",[_("p",[_("font",{attrs:{color:"Red"}},[t._v("BGP 协议交换路由信息的结点数量级是自治系统个数的量级")])],1),t._v(" "),_("img",{staticStyle:{zoom:"33%"},attrs:{src:"https://hedonspace.oss-cn-beijing.aliyuncs.com/img2/008i3skNly1gt3mux59l0j31640fy0v9.jpg",alt:"image-20200423102237350"}})])]),t._v(" "),_("h4",{attrs:{id:"_5-4-3-路由表"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_5-4-3-路由表"}},[t._v("#")]),t._v(" 5.4.3 路由表")]),t._v(" "),_("ul",[_("li",[t._v("目的网络前缀（说明支持CIDR）；")]),t._v(" "),_("li",[t._v("下一跳路由器；")]),t._v(" "),_("li",[t._v("到达该目的网络所要经过的自治系统序列。")])]),t._v(" "),_("h4",{attrs:{id:"_5-4-4-4种报文"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_5-4-4-4种报文"}},[t._v("#")]),t._v(" 5.4.4 4种报文")]),t._v(" "),_("ul",[_("li",[t._v("OPEN：打开，用来与相邻的另一个 BGP 发言人建立关系，使通信初始化；")]),t._v(" "),_("li",[t._v("UPDATE：更新，用来告知某一路由的信息，以及列出要撤销的多条路由；")]),t._v(" "),_("li",[t._v("KEEPALIVE：保活，用来周期性地证实邻站的连通性；")]),t._v(" "),_("li",[t._v("NOTIFACATION：通知，用来发送检测到的差错。")])]),t._v(" "),_("h4",{attrs:{id:"_5-4-5-报文格式"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_5-4-5-报文格式"}},[t._v("#")]),t._v(" 5.4.5 报文格式")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://hedonspace.oss-cn-beijing.aliyuncs.com/img2/008i3skNly1gt3mvcjbasj61fe0iw0y502.jpg",alt:"image-20200423103303171"}})]),t._v(" "),_("h3",{attrs:{id:"_5-5-路由器的构成"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_5-5-路由器的构成"}},[t._v("#")]),t._v(" 5.5 路由器的构成")]),t._v(" "),_("h4",{attrs:{id:"_5-5-1-路由器的结构"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_5-5-1-路由器的结构"}},[t._v("#")]),t._v(" 5.5.1 路由器的结构")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://hedonspace.oss-cn-beijing.aliyuncs.com/img2/008i3skNly1gt3mv4mcs3j313c0iun0t.jpg",alt:"image-20200423105428227"}})]),t._v(" "),_("h4",{attrs:{id:"_5-5-2-路由器的两大部分"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_5-5-2-路由器的两大部分"}},[t._v("#")]),t._v(" 5.5.2 路由器的两大部分")]),t._v(" "),_("h5",{attrs:{id:"_1-路由选择"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-路由选择"}},[t._v("#")]),t._v(" (1) 路由选择")]),t._v(" "),_("ol",[_("li",[t._v("根据所选定的路由选择协议构造出路由表，同时经常或定期地和相邻路由器交换路由信息而不断地更新和维护路由表。")])]),t._v(" "),_("h5",{attrs:{id:"_2-分组转发"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-分组转发"}},[t._v("#")]),t._v(" (2) 分组转发")]),t._v(" "),_("ol",[_("li",[_("p",[t._v("交换结构")]),t._v(" "),_("p",[t._v("根据转发表对分组进行处理，将某个输入端口进入的分组从一个合适的输出端口转发出去；")])]),t._v(" "),_("li",[_("p",[t._v("输入端口")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://hedonspace.oss-cn-beijing.aliyuncs.com/img2/008i3skNly1gt3mv1d754j319m0eetb3.jpg",alt:"image-20200423105545189"}})])]),t._v(" "),_("li",[_("p",[t._v("输出端口")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://hedonspace.oss-cn-beijing.aliyuncs.com/img2/008eGmZEgy1gnh93d71a6j31aa0euwhb.jpg",alt:"image-20200423105526547"}})])])]),t._v(" "),_("p",[_("font",{attrs:{color:"red"}},[t._v("△ 这里的端口都是硬件端口")])],1),t._v(" "),_("h4",{attrs:{id:"_5-5-3-转发-和-路由选择-的区别"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_5-5-3-转发-和-路由选择-的区别"}},[t._v("#")]),t._v(" 5.5.3 “转发”和“路由选择”的区别")]),t._v(" "),_("h5",{attrs:{id:"_1-涉及的路由器个数"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-涉及的路由器个数"}},[t._v("#")]),t._v(" (1) 涉及的路由器个数")]),t._v(" "),_("ul",[_("li",[_("strong",[t._v("转发")]),t._v("仅仅涉及到一个路由器")]),t._v(" "),_("li",[_("strong",[t._v("路由选择")]),t._v("涉及多个路由器")])]),t._v(" "),_("h5",{attrs:{id:"_2-表"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-表"}},[t._v("#")]),t._v(" (2) 表")]),t._v(" "),_("ul",[_("li",[t._v("路由表\n"),_("ul",[_("li",[t._v("一般仅包含从目的网络到下一跳（IP地址）的映射")])])]),t._v(" "),_("li",[t._v("转发表\n"),_("ul",[_("li",[t._v("转发表由路由表得出；")]),t._v(" "),_("li",[t._v("必须包含完成转发功能所需的信息\n"),_("ul",[_("li",[t._v("要到达的目的网络")]),t._v(" "),_("li",[t._v("输出端口")]),t._v(" "),_("li",[t._v("某些MAC地址信息")])])])])]),t._v(" "),_("li",[_("font",{attrs:{color:"red"}},[t._v("△ 在讨论“路由选择”的时候，可笼统使用路由表，不区分这两种表")])],1)]),t._v(" "),_("h4",{attrs:{id:"_5-5-4-交换结构"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_5-5-4-交换结构"}},[t._v("#")]),t._v(" 5.5.4 交换结构")]),t._v(" "),_("h5",{attrs:{id:"_1-通过存储器"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-通过存储器"}},[t._v("#")]),t._v(" (1) 通过存储器")]),t._v(" "),_("img",{staticStyle:{zoom:"33%"},attrs:{src:"https://hedonspace.oss-cn-beijing.aliyuncs.com/img2/008i3skNly1gt3mvbl36wj30mk0aidgl.jpg",alt:"image-20200423151009401"}}),t._v(" "),_("h5",{attrs:{id:"_2-通过总线"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-通过总线"}},[t._v("#")]),t._v(" (2) 通过总线")]),t._v(" "),_("img",{staticStyle:{zoom:"43%"},attrs:{src:"https://hedonspace.oss-cn-beijing.aliyuncs.com/img2/008i3skNly1gt3mv526fpj30iw0ak74x.jpg",alt:"image-20200423151046163"}}),t._v(" "),_("h5",{attrs:{id:"_3-通过互连网络"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_3-通过互连网络"}},[t._v("#")]),t._v(" (3) 通过互连网络")]),t._v(" "),_("img",{staticStyle:{zoom:"33%"},attrs:{src:"https://hedonspace.oss-cn-beijing.aliyuncs.com/img2/008i3skNly1gt3mve1seqj30r60ewmye.jpg",alt:"image-20200423151033058"}}),t._v(" "),_("h2",{attrs:{id:"_6-ipv6"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_6-ipv6"}},[t._v("#")]),t._v(" 6. IPv6")]),t._v(" "),_("h3",{attrs:{id:"_6-1-ipv6-的基本首部"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_6-1-ipv6-的基本首部"}},[t._v("#")]),t._v(" 6.1 IPv6 的基本首部")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://hedonspace.oss-cn-beijing.aliyuncs.com/img2/008i3skNly1gt3mv8cd28j31h00u0474.jpg",alt:"image-20200423154204552"}})]),t._v(" "),_("p",[t._v("① 更大的地址空间")]),t._v(" "),_("ul",[_("li",[_("p",[t._v("IPv6 是 128 位")])]),t._v(" "),_("li",[_("p",[t._v("IPv4 是 32 位")])])]),t._v(" "),_("p",[t._v("② 扩展的地址层次结构")]),t._v(" "),_("p",[t._v("③ 灵活的首部格式")]),t._v(" "),_("ul",[_("li",[t._v("IPv6 有很多可选的扩展首部")])]),t._v(" "),_("p",[t._v("④ 改进的选项")]),t._v(" "),_("ul",[_("li",[_("p",[t._v("IPv6 允许数据报含有选项的控制信息。")]),t._v(" "),_("ul",[_("li",[t._v("但 IPv6 的首部长度是固定的，其选项放在有效载荷中。")])])]),t._v(" "),_("li",[_("p",[t._v("IPv4 的选项是固定不变的，放在首部的可变部分中。")])])]),t._v(" "),_("p",[t._v("⑤ 允许协议继续扩充")]),t._v(" "),_("p",[t._v("⑥ 支持即插即用")]),t._v(" "),_("ul",[_("li",[t._v("自动配置")]),t._v(" "),_("li",[t._v("不需要使用DHCP")])]),t._v(" "),_("p",[t._v("⑦ 支持资源的预分配")]),t._v(" "),_("p",[t._v("⑧ 首部改为 8 字节对齐")]),t._v(" "),_("ul",[_("li",[t._v("IPv4 首部是 4 字节对齐")])]),t._v(" "),_("h3",{attrs:{id:"_6-2-ipv6-的地址"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_6-2-ipv6-的地址"}},[t._v("#")]),t._v(" 6.2 IPv6 的地址")]),t._v(" "),_("h4",{attrs:{id:"_6-2-1-冒号十六进制记法"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_6-2-1-冒号十六进制记法"}},[t._v("#")]),t._v(" 6.2.1 冒号十六进制记法")]),t._v(" "),_("h5",{attrs:{id:"_1-基础版"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-基础版"}},[t._v("#")]),t._v(" (1) 基础版")]),t._v(" "),_("p",[t._v("0000 : 0000 : FFFF : 0000 : 0000 : 1180 : 960A : FFFF")]),t._v(" "),_("h5",{attrs:{id:"_2-0000-→-0"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-0000-→-0"}},[t._v("#")]),t._v(" (2) 0000 → 0")]),t._v(" "),_("p",[t._v("0 : 0 : FFFF : 0 : 0 : 1180 : 960A : FFFF")]),t._v(" "),_("h5",{attrs:{id:"_3-零压缩-只允许一次"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_3-零压缩-只允许一次"}},[t._v("#")]),t._v(" (3) 零压缩 （只允许一次）")]),t._v(" "),_("p",[t._v("==: :== FFFF : 0 : 0 : 1180 : 960A : FFFF （√）")]),t._v(" "),_("p",[t._v("0 : 0 : FFFF ==:  :== 1180 : 960A : FFFF（√）")]),t._v(" "),_("p",[t._v(": : FFFF :  : 1180 : 960A : FFFF（×）")]),t._v(" "),_("h5",{attrs:{id:"_4-与前缀结合"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_4-与前缀结合"}},[t._v("#")]),t._v(" (4) 与前缀结合")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://hedonspace.oss-cn-beijing.aliyuncs.com/img2/008eGmZEgy1gnhdf7iqkjj31d60dsadd.jpg",alt:"image-20200423155513576"}})]),t._v(" "),_("h5",{attrs:{id:"【例题】-3"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#【例题】-3"}},[t._v("#")]),t._v(" 【例题】")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://hedonspace.oss-cn-beijing.aliyuncs.com/img2/008eGmZEgy1gnhdfa84vtj315i0iwgof.jpg",alt:"image-20200430095907265"}})]),t._v(" "),_("h4",{attrs:{id:"_6-2-2-单播"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_6-2-2-单播"}},[t._v("#")]),t._v(" 6.2.2 单播")]),t._v(" "),_("blockquote",[_("p",[t._v("点对点")])]),t._v(" "),_("h4",{attrs:{id:"_6-2-3-多播"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_6-2-3-多播"}},[t._v("#")]),t._v(" 6.2.3 多播")]),t._v(" "),_("blockquote",[_("p",[t._v("一对多")])]),t._v(" "),_("h4",{attrs:{id:"_6-2-4-任播"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_6-2-4-任播"}},[t._v("#")]),t._v(" 6.2.4 任播")]),t._v(" "),_("blockquote",[_("p",[t._v("新类型，终点是==一组==计算机，但数据报只交付给最近（通常是）的一个。")])]),t._v(" "),_("h4",{attrs:{id:"_6-2-5-地址分类"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_6-2-5-地址分类"}},[t._v("#")]),t._v(" 6.2.5 地址分类")]),t._v(" "),_("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://hedonspace.oss-cn-beijing.aliyuncs.com/img2/008i3skNly1gt3muxmnstj310u0bytat.jpg",alt:"image-20200423155600432"}}),t._v(" "),_("h3",{attrs:{id:"_6-3-从-ipv4-向-ipv6-过渡"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_6-3-从-ipv4-向-ipv6-过渡"}},[t._v("#")]),t._v(" 6.3 从 IPv4 向 IPv6 过渡")]),t._v(" "),_("h4",{attrs:{id:"_6-3-1-双协议栈"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_6-3-1-双协议栈"}},[t._v("#")]),t._v(" 6.3.1 双协议栈")]),t._v(" "),_("p",[t._v("见人说人话，见鬼说鬼话。")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://hedonspace.oss-cn-beijing.aliyuncs.com/img2/008i3skNly1gt3mv9uwa7j319o0m643k.jpg",alt:"image-20200423155952248"}})]),t._v(" "),_("h4",{attrs:{id:"_6-3-2-隧道技术"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_6-3-2-隧道技术"}},[t._v("#")]),t._v(" 6.3.2 隧道技术")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://hedonspace.oss-cn-beijing.aliyuncs.com/img2/008i3skNly1gt3muym8o2j31ac0lkdkc.jpg",alt:"image-20200423160348450"}})]),t._v(" "),_("h3",{attrs:{id:"_6-4-icmpv6"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_6-4-icmpv6"}},[t._v("#")]),t._v(" 6.4 ICMPv6")]),t._v(" "),_("img",{staticStyle:{zoom:"43%"},attrs:{src:"https://hedonspace.oss-cn-beijing.aliyuncs.com/img2/007S8ZIlly1ge3rhe900zj30xs08ujwu.jpg",alt:"image-20200423160450945"}}),t._v(" "),_("h4",{attrs:{id:"_6-4-1-作用"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_6-4-1-作用"}},[t._v("#")]),t._v(" 6.4.1 作用")]),t._v(" "),_("ul",[_("li",[t._v("利用报文来报告差错")]),t._v(" "),_("li",[t._v("获取信息")]),t._v(" "),_("li",[t._v("探测邻站")]),t._v(" "),_("li",[t._v("管理多播通信")])]),t._v(" "),_("h4",{attrs:{id:"_6-4-2-分类"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_6-4-2-分类"}},[t._v("#")]),t._v(" 6.4.2 分类")]),t._v(" "),_("img",{staticStyle:{zoom:"43%"},attrs:{src:"https://hedonspace.oss-cn-beijing.aliyuncs.com/img2/008i3skNly1gt3mvaneaxj30yg0a63zo.jpg",alt:"image-20200423160642966"}}),t._v(" "),_("h5",{attrs:{id:"【例题】-4"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#【例题】-4"}},[t._v("#")]),t._v(" 【例题】")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://hedonspace.oss-cn-beijing.aliyuncs.com/img2/008eGmZEgy1gnhdf70sybj314m0aataq.jpg",alt:"image-20200430095804460"}})]),t._v(" "),_("h3",{attrs:{id:"_6-5-与-ipv4-进行比较"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_6-5-与-ipv4-进行比较"}},[t._v("#")]),t._v(" 6.5 与 IPv4 进行比较")]),t._v(" "),_("div",{staticClass:"language-markdown extra-class"},[_("pre",{pre:!0,attrs:{class:"language-markdown"}},[_("code",[_("span",{pre:!0,attrs:{class:"token title important"}},[_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("#")]),t._v(" 1. 报头")]),t._v("\n"),_("span",{pre:!0,attrs:{class:"token list punctuation"}},[t._v("1.")]),t._v(" IPv6报头占40字节，较IPv4报头（变长的24字节）长，但是结构简单\n"),_("span",{pre:!0,attrs:{class:"token list punctuation"}},[t._v("2.")]),t._v(" IPv6报头去掉了IPv4报头中许多不常用的域，放入了可选项和报头扩展，其可选项有更严格的定义\n"),_("span",{pre:!0,attrs:{class:"token list punctuation"}},[t._v("3.")]),t._v(" IPv6报头中有6个域和2个地址空间，相对于IPv4中的10个固定长度的域、2个地址空间和若干个选项的结构来说IPV6更简单\n"),_("span",{pre:!0,attrs:{class:"token title important"}},[_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("#")]),t._v(" 2. 地址")]),t._v("\n"),_("span",{pre:!0,attrs:{class:"token list punctuation"}},[t._v("1.")]),t._v(" IPv6协议的地址长度是128位，全部可分配地址数为2的128次方（2^128）个，不再存在地址匮乏问题\n"),_("span",{pre:!0,attrs:{class:"token list punctuation"}},[t._v("2.")]),t._v(" IPv6地址表示方式和IPv4也不同：\n\tIPv4地址表示为点分十进制格式\n\tIPv6采用的是冒号十六进制格式\n"),_("span",{pre:!0,attrs:{class:"token title important"}},[_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("#")]),t._v(" 3. 地址配置")]),t._v("\n"),_("span",{pre:!0,attrs:{class:"token list punctuation"}},[t._v("1.")]),t._v(" IPv6协议支持地址自动配置，这是一种即插即用的机制\n"),_("span",{pre:!0,attrs:{class:"token list punctuation"}},[t._v("2.")]),t._v(" IPv6节点通过地址自动配置得到IPv6地址和网关地址\n"),_("span",{pre:!0,attrs:{class:"token list punctuation"}},[t._v("3.")]),t._v(" IPv6支持无状态地址自动配置和状态地址自动配置两种地址自动配置方式。它会给配置128位的地址带来很大的方便，特别是无状态地址自动配置\n如何实现：\n    “即插即用”是指无需人为干涉，将一个节点插入IPv6网络并在网络中启动，IPv6使用了两种不同的机制来支持即插即用网络连接：启动协议（BOOTstrap Protocol，BOOTP）和动态主机配置协议（DHCP）。 这两种机制允许IP节点从特殊的BOOTP服务器或DHCP服务器获取配置信息。这些协议采用“状态自动配置”（Stateful Autoconfiguration），即服务器必须保持每个节点的状态信息，并管理这些保存的信息。\n"),_("span",{pre:!0,attrs:{class:"token title important"}},[_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("#")]),t._v(" 4. 域名解析")]),t._v("\n"),_("span",{pre:!0,attrs:{class:"token list punctuation"}},[t._v("1.")]),t._v(" IPv6中的DNS与IPv4的在体系结构上相同，都采用树型结构域名空间。\n"),_("span",{pre:!0,attrs:{class:"token list punctuation"}},[t._v("2.")]),t._v(" IPv4和IPv6共同拥有统一的域名空间。\n"),_("span",{pre:!0,attrs:{class:"token list punctuation"}},[t._v("3.")]),t._v(" IPv6可以自动发现提供解析服务的DNS，有两种方式：\n\t(1) 无状态的DNS服务器发现；\n\t(2) 有状态的DNS服务器发现。\n\t\t有状态的DNS服务器发现方式是通过类似DHCP的服务器把DNS服务器地址、域名和搜索路径等DNS信息告知节点。无状态DNS服务器自动发现有多种方式。\n"),_("span",{pre:!0,attrs:{class:"token title important"}},[_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("#")]),t._v(" 5. 网上邻居")]),t._v("\nIPv6定义了邻居发现协议NDP，它使用一系列IPv6控制信息报文（ICMPv6）来实现相邻节点（同一链路上的节点）的交互管理，并在一个子网中保持网络层地址和链路层地址之间的映射。\n"),_("span",{pre:!0,attrs:{class:"token title important"}},[_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("#")]),t._v(" 6. 路由技术")]),t._v("\nPv6主要使用三种路由协议：RIPv6（路由信息协议）、OSPFv6（开放最短路径优先）和IDRPv2（域间路由协议），以及可能的EIGRP和双层的IS-IS。\nIPv4可路由的协议有IP、IPX等，不可路由的主要有DEC，NETBIOS等。\n")])])]),_("Vssue")],1)}),[],!1,null,null,null);a.default=s.exports}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[257],{668:function(t,a,s){"use strict";s.r(a);var i=s(47),r=Object(i.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"_7-网络配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_7-网络配置"}},[t._v("#")]),t._v(" 7. 网络配置")]),t._v(" "),s("h2",{attrs:{id:"_7-1-理论部分"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_7-1-理论部分"}},[t._v("#")]),t._v(" 7.1 理论部分")]),t._v(" "),s("h3",{attrs:{id:"_7-1-1-linux-网络配置原理图-含虚拟机"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_7-1-1-linux-网络配置原理图-含虚拟机"}},[t._v("#")]),t._v(" 7.1.1 Linux 网络配置原理图（含虚拟机）")]),t._v(" "),s("p",[t._v("下图是网络配置为 NAT 的情景：")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://hedonspace.oss-cn-beijing.aliyuncs.com/img2/0081Kckwgy1gknnlt2qebj30x70ckjx4.jpg",alt:"image-20201113170359696"}})]),t._v(" "),s("p",[t._v("我们的主机（Windows 机器）有两个 ip 地址：")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("虚拟网卡：192.168.184.1")]),t._v(" "),s("p",[t._v("它负责跟主机上的虚拟机 192.168.184.125 进行通讯")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://hedonspace.oss-cn-beijing.aliyuncs.com/img2/0081Kckwgy1gknnmp8y76j30jg02n0t8.jpg",alt:"image-20201113170451619"}})])]),t._v(" "),s("li",[s("p",[t._v("真实网卡（此处是无限网卡）：192.168.2.125")]),t._v(" "),s("p",[t._v("它负责跟处在同一个教室的小王的电脑 192.168.2.111 进行通讯。")]),t._v(" "),s("p",[t._v("也可以通过网关跟 Internet 的其他主机进行通讯。")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://hedonspace.oss-cn-beijing.aliyuncs.com/img2/0081Kckwgy1gknnqb6bu8j30hj02qq32.jpg",alt:"image-20201113170741968"}})])])]),t._v(" "),s("h2",{attrs:{id:"_7-2-实操部分"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_7-2-实操部分"}},[t._v("#")]),t._v(" 7.2 实操部分")]),t._v(" "),s("h3",{attrs:{id:"_7-2-1-查看网络-ip-和网关-windows-版本"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_7-2-1-查看网络-ip-和网关-windows-版本"}},[t._v("#")]),t._v(" 7.2.1 查看网络 IP 和网关 —— Windows 版本")]),t._v(" "),s("p",[t._v("查看虚拟网络编辑器")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://hedonspace.oss-cn-beijing.aliyuncs.com/img2/0081Kckwgy1gknnx7e0msj30ao06mq64.jpg",alt:"image-20201113171456478"}})]),t._v(" "),s("p",[t._v("修改主机上的虚拟网卡 IP 地址")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://hedonspace.oss-cn-beijing.aliyuncs.com/img2/0081Kckwgy1gknnxsihloj30fh0ecn2g.jpg",alt:"image-20201113171531007"}})]),t._v(" "),s("p",[t._v("查看网关")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://hedonspace.oss-cn-beijing.aliyuncs.com/img2/0081Kckwgy1gknny1yuiwj30w00fz15j.jpg",alt:"image-20201113171545439"}})]),t._v(" "),s("p",[t._v("查看 windows 环境的中 VMnet8 网络配置")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("使用 ipconfig 查看")])]),t._v(" "),s("li",[s("p",[t._v("界面查看")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://hedonspace.oss-cn-beijing.aliyuncs.com/img2/0081Kckwgy1gkno3fap2bj30fd0hegs7.jpg",alt:"image-20201113172054578"}})])])]),t._v(" "),s("h3",{attrs:{id:"_7-2-2-ping-测试主机之间是否连通"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_7-2-2-ping-测试主机之间是否连通"}},[t._v("#")]),t._v(" 7.2.2 ping 测试主机之间是否连通")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("ping 目的主机\n")])])]),s("p",[s("img",{attrs:{src:"https://hedonspace.oss-cn-beijing.aliyuncs.com/img2/0081Kckwgy1gkno4p7gpuj30mp02ggn5.jpg",alt:"image-20201113172208238"}})]),t._v(" "),s("h3",{attrs:{id:"_7-2-3-linux-网络环境配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_7-2-3-linux-网络环境配置"}},[t._v("#")]),t._v(" 7.2.3 Linux 网络环境配置")]),t._v(" "),s("h5",{attrs:{id:"自动获取-windows-下"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#自动获取-windows-下"}},[t._v("#")]),t._v(" [自动获取] ——  Windows 下")]),t._v(" "),s("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://hedonspace.oss-cn-beijing.aliyuncs.com/img2/0081Kckwgy1gkno77fx7xj30qb0cbjwp.jpg",alt:"image-20201113172433532"}}),t._v(" "),s("p",[t._v("缺点: linux 启动后会自动获取 IP,缺点是每次自动获取的 ip 地址可能不一样。这个不适用于做服 务器，因为我们的服务器的 ip 需要时固定的。")]),t._v(" "),s("h5",{attrs:{id:"自动获取-macos-下"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#自动获取-macos-下"}},[t._v("#")]),t._v(" [自动获取] —— MacOS 下")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://hedonspace.oss-cn-beijing.aliyuncs.com/img2/0081Kckwgy1gkno8fk3v6j30i30e276s.jpg",alt:"image-20201113172542373"}})]),t._v(" "),s("h5",{attrs:{id:"指定固定-ip"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#指定固定-ip"}},[t._v("#")]),t._v(" [指定固定 IP]")]),t._v(" "),s("blockquote",[s("p",[t._v("默认是动态获取 IP 的，这样每一天打开虚拟机都可能会得到不同的 IP，不符合做服务器的要求。可以直接指定固定的 IP。")])]),t._v(" "),s("p",[t._v("直接修改配置文件来指定 IP,并可以连接到外网。")]),t._v(" "),s("p",[t._v("这里需要修改虚拟机下 "),s("code",[t._v("/etc/sysconfig/network-scripts/")]),t._v("目录下的一个文件，它以  "),s("code",[t._v("ifcfg-")]),t._v(" 开头，我这里是 "),s("code",[t._v("ifcfg-ens33")]),t._v("，具体看你的虚拟网卡是什么名字。")]),t._v(" "),s("p",[t._v("我这里该文件默认是这样的：")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://hedonspace.oss-cn-beijing.aliyuncs.com/img2/0081Kckwgy1gknolmeku5j30td093adk.jpg",alt:"image-20201113173824845"}})]),t._v(" "),s("p",[t._v("要求:将 ip 地址配置的静态的，ip 地址为 192.168.184.130")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://hedonspace.oss-cn-beijing.aliyuncs.com/img2/0081Kckwgy1gknoohqx3jj30pd0avtde.jpg",alt:"image-20201113174110575"}})]),t._v(" "),s("p",[s("font",{attrs:{color:"pink"}},[t._v("注意：")])],1),t._v(" "),s("ol",[s("li",[s("p",[t._v("上面 3 个 地址的前面 3 段都是一样的，这里是 192.168.184")])]),t._v(" "),s("li",[s("p",[s("strong",[t._v("网关和 DNS 都必须是主机的"),s("code",[t._v("虚拟网卡")]),t._v("允许的范围里面的，可以用 ifconfig（Mac）或 ipconfig（Windows）进行查看")]),t._v("：")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://hedonspace.oss-cn-beijing.aliyuncs.com/img2/0081Kckwgy1gknp7yfiawj30j203ydgp.jpg",alt:"image-20201113175952896"}})])])]),t._v(" "),s("p",[t._v("修改后，重启服务：")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#centos6")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("service")]),t._v(" network restart\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#centos7")]),t._v("\nsystemctl restart network\n")])])]),s("p",[t._v("或者重启系统")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("reboot\n")])])]),s("p",[t._v("完成：")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://hedonspace.oss-cn-beijing.aliyuncs.com/img2/0081Kckwgy1gknowjdih4j30le03ymyc.jpg",alt:"image-20201113174854460"}})]),t._v(" "),s("Vssue")],1)}),[],!1,null,null,null);a.default=r.exports}}]);
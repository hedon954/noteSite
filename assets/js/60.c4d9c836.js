(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{471:function(s,t,a){"use strict";a.r(t);var n=a(47),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"mac-上-vmware-设置虚拟机为静态-ip"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mac-上-vmware-设置虚拟机为静态-ip"}},[s._v("#")]),s._v(" Mac 上 VMware 设置虚拟机为静态 IP")]),s._v(" "),a("h2",{attrs:{id:"_1-查看本机网关和子网掩码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-查看本机网关和子网掩码"}},[s._v("#")]),s._v(" 1. 查看本机网关和子网掩码")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("进入 Mac 的 Temical，输入：")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /Library/Preferences/VMware"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v(" Fusion/vmnet8\n$ ll\ntotal "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("32")]),s._v("\n-rw-r--r--  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" root  wheel  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1665")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("30")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("11")]),s._v(":00 dhcpd.conf\n-rw-r--r--  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" root  wheel  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1665")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("30")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("11")]),s._v(":00 dhcpd.conf.bak\n-rw-r--r--  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" root  wheel  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1682")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("30")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("11")]),s._v(":00 nat.conf\n-rw-r--r--  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" root  wheel  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1682")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("30")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("11")]),s._v(":00 nat.conf.bak\n")])])])]),s._v(" "),a("li",[a("p",[s._v("查看 "),a("code",[s._v("nat.conf")]),s._v(" 内容：")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" nat.conf\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# VMware NAT configuration file")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Manual editing of this file is not recommended. Using UI is preferred.")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("host"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Use MacOS network virtualization API")]),s._v("\nuseMacosVmnetVirtApi "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# NAT gateway address")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ip")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" xxx.xxx.xxx.1                 "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#这个 ip 就是本机网关地址")]),s._v("\nnetmask "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("255.255")]),s._v(".255.0          "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#这个就是本机子网掩码")]),s._v("\n")])])]),a("p",[s._v("网关地址：xxx.xxx.xxx.1")]),s._v(" "),a("p",[s._v("子网掩码：255.255.255.0")])]),s._v(" "),a("li",[a("p",[s._v("查看 "),a("code",[s._v("dhcpd.conf")]),s._v(" 内容：")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("subnet xxx.xxx.xxx.0 netmask "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("255.255")]),s._v(".255.0 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\trange xxx.xxx.xxx.128 xxx.xxx.xxx.254"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("      "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# range 这个是虚拟机允许选择的静态ip地址范围，自定义的静态ip地址必须要在这个范围内")]),s._v("\n\toption broadcast-address xxx.xxx.xxx.255"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\toption domain-name-servers xxx.xxx.xxx.2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\toption domain-name localdomain"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\tdefault-lease-time "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1800")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("                "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# default is 30 minutes")]),s._v("\n\tmax-lease-time "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("7200")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("                    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# default is 2 hours")]),s._v("\n\toption netbios-name-servers xxx.xxx.xxx.2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\toption routers xxx.xxx.xxx.2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("p",[s._v("得到静态 IP 访问："),a("code",[s._v("xxx.xxx.xxx.128 - xxx.xxx.xxx.254")])])])]),s._v(" "),a("h2",{attrs:{id:"_2-查看本机-dns"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-查看本机-dns"}},[s._v("#")]),s._v(" 2. 查看本机 DNS")]),s._v(" "),a("p",[s._v(" -> 系统偏好设置 -> 网络 -> 高级 -> DNS -> DNS 服务器")]),s._v(" "),a("h2",{attrs:{id:"_3-修改虚拟机静态-ip"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-修改虚拟机静态-ip"}},[s._v("#")]),s._v(" 3. 修改虚拟机静态 IP")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("进入虚拟机的 "),a("code",[s._v("network-scripts")]),s._v(" 目录：")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /etc/sysconfig/network-scripts/\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v("\nifcfg-ens33  ifdown-isdn      "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ifup")]),s._v("          ifup-plip      ifup-tunnel\nifcfg-lo     ifdown-post      ifup-aliases  ifup-plusb     ifup-wireless\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ifdown")]),s._v("       ifdown-ppp       ifup-bnep     ifup-post      init.ipv6-global\nifdown-bnep  ifdown-routes    ifup-eth      ifup-ppp       network-functions\nifdown-eth   ifdown-sit       ifup-ib       ifup-routes    network-functions-ipv6\nifdown-ib    ifdown-Team      ifup-ippp     ifup-sit\nifdown-ippp  ifdown-TeamPort  ifup-ipv6     ifup-Team\nifdown-ipv6  ifdown-tunnel    ifup-isdn     ifup-TeamPort\n")])])])]),s._v(" "),a("li",[a("p",[s._v("找到 "),a("code",[s._v("ifcfg-en")]),s._v(" 开头的文件,上图中我的是 "),a("code",[s._v("ifcfg-ens33")])])]),s._v(" "),a("li",[a("p",[s._v("使用 root 权限编辑 "),a("code",[s._v("ifcfg-ens33")]),s._v("：")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://tva1.sinaimg.cn/large/008i3skNly1gs08y90w80j313m0u04qp.jpg",alt:"image-20210630135139369"}})])]),s._v(" "),a("li",[a("p",[s._v("保存")])]),s._v(" "),a("li",[a("p",[s._v("重启无网络服务，使配置生效：")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" network restart\nRestarting network "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("via systemctl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(":                        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("  OK  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])])])])]),s._v(" "),a("h2",{attrs:{id:"_4-检查配置是否成功"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-检查配置是否成功"}},[s._v("#")]),s._v(" 4. 检查配置是否成功")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("看控制面板：")]),s._v(" "),a("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://tva1.sinaimg.cn/large/008i3skNly1gs05eqby5dj30q008cwh0.jpg",alt:"image-20210630114906307"}})]),s._v(" "),a("li",[a("p",[s._v("虚拟机上 ping 一下百度看看能不能成功：")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ping")]),s._v(" www.baidu.com\nPING www.a.shifen.com "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("180.101")]),s._v(".49.12"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("56")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("84")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" bytes of data.\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("64")]),s._v(" bytes from "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("180.101")]),s._v(".49.12 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("180.101")]),s._v(".49.12"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(": "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("icmp_seq")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ttl")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("38")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("time")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("36.9")]),s._v(" ms\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("64")]),s._v(" bytes from "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("180.101")]),s._v(".49.12 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("180.101")]),s._v(".49.12"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(": "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("icmp_seq")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ttl")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("38")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("time")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("39.5")]),s._v(" ms\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("64")]),s._v(" bytes from "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("180.101")]),s._v(".49.12 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("180.101")]),s._v(".49.12"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(": "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("icmp_seq")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ttl")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("38")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("time")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("43.0")]),s._v(" ms\n")])])])]),s._v(" "),a("li",[a("p",[s._v("主机 ping 一下虚拟机看看：")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ping")]),s._v(" xxx.xxx.xxx.201\nPING xxx.xxx.xxx.201 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("xxx.xxx.xxx.201"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(": "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("56")]),s._v(" data bytes\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("64")]),s._v(" bytes from xxx.xxx.xxx.201: "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("icmp_seq")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ttl")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("64")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("time")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.317")]),s._v(" ms\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("64")]),s._v(" bytes from xxx.xxx.xxx.201: "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("icmp_seq")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ttl")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("64")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("time")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.415")]),s._v(" ms\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("64")]),s._v(" bytes from xxx.xxx.xxx.201: "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("icmp_seq")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ttl")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("64")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("time")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.453")]),s._v(" ms\n")])])])]),s._v(" "),a("li",[a("p",[s._v("没有问题，配置完成。")])])])])}),[],!1,null,null,null);t.default=e.exports}}]);
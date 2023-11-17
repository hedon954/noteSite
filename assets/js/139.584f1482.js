(window.webpackJsonp=window.webpackJsonp||[]).push([[139],{549:function(t,_,a){"use strict";a.r(_);var v=a(47),s=Object(v.a)({},(function(){var t=this,_=t.$createElement,a=t._self._c||_;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"六、设备管理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#六、设备管理"}},[t._v("#")]),t._v(" 六、设备管理")]),t._v(" "),a("h2",{attrs:{id:"_1-广义的-io-设备"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-广义的-io-设备"}},[t._v("#")]),t._v(" 1. 广义的 IO 设备")]),t._v(" "),a("blockquote",[a("p",[t._v("对CPU而言，凡是对CPU进行数据输入的都是输入设备，凡是CPU进行数据输出的都是输出设备。")])]),t._v(" "),a("h3",{attrs:{id:"_1-1-按使用特性分类"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-按使用特性分类"}},[t._v("#")]),t._v(" 1.1 按使用特性分类")]),t._v(" "),a("p",[t._v("存储设备")]),t._v(" "),a("ul",[a("li",[t._v("U 盘")]),t._v(" "),a("li",[t._v("内存")]),t._v(" "),a("li",[t._v("磁盘")])]),t._v(" "),a("p",[t._v("交互 IO 设备")]),t._v(" "),a("ul",[a("li",[t._v("键盘")]),t._v(" "),a("li",[t._v("显示器")]),t._v(" "),a("li",[t._v("鼠标")])]),t._v(" "),a("h3",{attrs:{id:"_1-2-按设备的共享属性分类"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-按设备的共享属性分类"}},[t._v("#")]),t._v(" 1.2 按设备的共享属性分类")]),t._v(" "),a("ul",[a("li",[t._v("独占设备")]),t._v(" "),a("li",[t._v("共享设备")]),t._v(" "),a("li",[t._v("虚拟设备")])]),t._v(" "),a("h3",{attrs:{id:"_1-3-按信息交换的单位分类"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-按信息交换的单位分类"}},[t._v("#")]),t._v(" 1.3 按信息交换的单位分类")]),t._v(" "),a("p",[t._v("块设备")]),t._v(" "),a("ul",[a("li",[t._v("磁盘")]),t._v(" "),a("li",[t._v("SD 卡")])]),t._v(" "),a("p",[t._v("字符设备")]),t._v(" "),a("ul",[a("li",[t._v("打印机")]),t._v(" "),a("li",[t._v("Shell 终端")])]),t._v(" "),a("h3",{attrs:{id:"_1-4-按传输速率分类"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-4-按传输速率分类"}},[t._v("#")]),t._v(" 1.4 按传输速率分类")]),t._v(" "),a("ul",[a("li",[t._v("低速设备")]),t._v(" "),a("li",[t._v("中速设备")]),t._v(" "),a("li",[t._v("高速设备")])]),t._v(" "),a("h2",{attrs:{id:"_2-io-设备的缓冲区"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-io-设备的缓冲区"}},[t._v("#")]),t._v(" 2. IO 设备的缓冲区")]),t._v(" "),a("blockquote",[a("p",[t._v("IO 设备缓冲区的作用是解决 CPU 与 IO 设备速率不匹配的问题。")])]),t._v(" "),a("h5",{attrs:{id:"思路"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#思路"}},[t._v("#")]),t._v(" 思路")]),t._v(" "),a("ul",[a("li",[t._v("减少 CPU 处理 IO 请求的频率")]),t._v(" "),a("li",[t._v("提高 CPU 与 IO 设备之间的并行性")])]),t._v(" "),a("h5",{attrs:{id:"专用缓冲区"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#专用缓冲区"}},[t._v("#")]),t._v(" 专用缓冲区")]),t._v(" "),a("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://hedonspace.oss-cn-beijing.aliyuncs.com/img2/008i3skNly1gt7bodf9s6j30um0f60ty.jpg",alt:"image-20210109085745202"}}),t._v(" "),a("ul",[a("li",[t._v("专用缓冲区只适用于特定的IO进程。")]),t._v(" "),a("li",[t._v("当这样的IO进程比较多时，对内存的消耗也很大。")])]),t._v(" "),a("h5",{attrs:{id:"缓冲池"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#缓冲池"}},[t._v("#")]),t._v(" 缓冲池")]),t._v(" "),a("blockquote",[a("p",[t._v("操作系统划出可供多个进程使用的公共缓冲区，称之为缓冲池。")])]),t._v(" "),a("img",{staticStyle:{zoom:"33%"},attrs:{src:"https://hedonspace.oss-cn-beijing.aliyuncs.com/img2/008i3skNly1gt7bodxlhkj31jw0haacm.jpg",alt:"image-20210109085937615"}}),t._v(" "),a("h2",{attrs:{id:"_3-spooling-技术"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-spooling-技术"}},[t._v("#")]),t._v(" 3. SPOOLing 技术")]),t._v(" "),a("blockquote",[a("p",[t._v("SPOOLing 是关于慢速字符设备如何与计算机主机交换信息的一种技术。")]),t._v(" "),a("p",[t._v("它利用高速共享设备将低速的独享设备模拟为高速的共享设备。")]),t._v(" "),a("p",[t._v("逻辑上，系统为每一个用户都分配了一台独立的高速独享设备。")])]),t._v(" "),a("p",[t._v("在Spooling系统中，用一道程序模拟脱机输入时的外围控制机功能，把低速输入设备上的数据传送到高速磁盘上；再用另一道程序来模拟脱机输出时的外围控制机功能，把数据从磁盘传送到低速输出设备上。")]),t._v(" "),a("img",{staticStyle:{zoom:"33%"},attrs:{src:"https://hedonspace.oss-cn-beijing.aliyuncs.com/img2/008i3skNly1gt7bod5dy7j314c0jg40a.jpg",alt:"image-20210109090938024"}}),t._v(" "),a("Vssue")],1)}),[],!1,null,null,null);_.default=s.exports}}]);
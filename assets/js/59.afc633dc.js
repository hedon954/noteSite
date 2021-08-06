(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{469:function(t,a,s){"use strict";s.r(a);var i=s(47),v=Object(i.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"_1-数据类型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-数据类型"}},[t._v("#")]),t._v(" 1. 数据类型")]),t._v(" "),s("h2",{attrs:{id:"整数类型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#整数类型"}},[t._v("#")]),t._v(" 整数类型")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://tva1.sinaimg.cn/large/008eGmZEgy1gnd0ej3vthj31co0hcgz6.jpg",alt:"image-20210205220633953"}})]),t._v(" "),s("blockquote",[s("p",[t._v("以下参考：https://blog.csdn.net/weixin_30344795/article/details/95559363")])]),t._v(" "),s("p",[t._v("对于 5 种整数类型（tinyint、smallint、mediumint、int、bigint），MySQL 还支持在类型名称后面的小括号内指定显示宽度。")]),t._v(" "),s("div",{staticClass:"custom-block danger"},[s("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),s("p",[t._v("括号中的数字并不是指该类型占用的字节数，而是指数据的"),s("strong",[t._v("宽度")]),t._v("。")])]),t._v(" "),s("p",[t._v("（"),s("strong",[t._v("并不是该类型占用字节数")]),t._v("）。")]),t._v(" "),s("p",[t._v("例如 int(5)表示当数值宽度小于 5 位的时候在数字前面填满宽度，如果不显示指定宽度则默认为 int(11)。一般配合 "),s("code",[t._v("zerofill")]),t._v(" 使用，顾名思义，zerofill 就是用“0”填充的意思，也就是在数字位数不够的空间用字符“0”填满。")]),t._v(" "),s("p",[t._v("以下几个例子分别描述了填充前后的区别：")]),t._v(" "),s("p",[t._v("（1）创建表 t1，有 id1 和 id2 两个字段，指定其数值宽度分别为 int 和 int(5)。\n"),s("img",{attrs:{src:"https://tva1.sinaimg.cn/large/008eGmZEgy1gnd0lsyzlzj30ay06tgm2.jpg",alt:"img"}})]),t._v(" "),s("p",[t._v("（2）在 id1 和 id2 中都插入数值 1，可以发现格式没有异常。\n"),s("img",{attrs:{src:"https://tva1.sinaimg.cn/large/008eGmZEgy1gnd0ltxsi7j30ab071jrm.jpg",alt:"img"}})]),t._v(" "),s("p",[t._v("（3）分别修改 id1 和 id2 的字段类型，加入 "),s("code",[t._v("zerofill")]),t._v(" 参数：\n"),s("img",{attrs:{src:"https://tva1.sinaimg.cn/large/008eGmZEgy1gnd0ls67kej30b70ac3zb.jpg",alt:"img"}})]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("设置了宽度限制后，如果插入大于宽度限制的值，会不会截断或者插不进去报错？")]),t._v(" "),s("p",[t._v("不会对插入的数据有任何影响，还是按照类型的实际精度进行保存。")]),t._v(" "),s("p",[t._v("这个时候，宽度格式实际已经没有意义 。")])]),t._v(" "),s("p",[t._v("​    "),s("img",{attrs:{src:"https://tva1.sinaimg.cn/large/008eGmZEgy1gnd0lte6xmj309h07hjro.jpg",alt:"img"}})]),t._v(" "),s("h2",{attrs:{id:"实数类型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#实数类型"}},[t._v("#")]),t._v(" 实数类型")]),t._v(" "),s("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://tva1.sinaimg.cn/large/008eGmZEgy1gnd0hce7akj315c08qq7e.jpg",alt:"image-20210205220916858"}}),t._v(" "),s("ul",[s("li",[t._v("123456789.987654321 = DECIMAL(18,9)\n"),s("ul",[s("li",[t._v("18 表示总数字个数")]),t._v(" "),s("li",[t._v("9 表示小数点后数字个数")]),t._v(" "),s("li",[t._v("共占用 4+4+1（小数点） = 9 个字节")])])])]),t._v(" "),s("h2",{attrs:{id:"时间类型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#时间类型"}},[t._v("#")]),t._v(" 时间类型")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://tva1.sinaimg.cn/large/008eGmZEgy1gnd0nr5r1nj31ci094n70.jpg",alt:"image-20210205221526117"}})]),t._v(" "),s("h2",{attrs:{id:"字符串类型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#字符串类型"}},[t._v("#")]),t._v(" 字符串类型")]),t._v(" "),s("img",{staticStyle:{zoom:"43%"},attrs:{src:"https://tva1.sinaimg.cn/large/008eGmZEgy1gnd0pbrn3ij31820f0nan.jpg",alt:"image-20210205221656186"}}),t._v(" "),s("Vssue")],1)}),[],!1,null,null,null);a.default=v.exports}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[215],{623:function(t,a,_){"use strict";_.r(a);var v=_(47),s=Object(v.a)({},(function(){var t=this,a=t.$createElement,_=t._self._c||a;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"五、理论范式"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#五、理论范式"}},[t._v("#")]),t._v(" 五、理论范式")]),t._v(" "),_("h2",{attrs:{id:"_1-函数依赖"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-函数依赖"}},[t._v("#")]),t._v(" 1. 函数依赖")]),t._v(" "),_("h3",{attrs:{id:"_1-1-函数依赖的概念"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-函数依赖的概念"}},[t._v("#")]),t._v(" 1.1  函数依赖的概念")]),t._v(" "),_("h4",{attrs:{id:"_1-决定关系"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-决定关系"}},[t._v("#")]),t._v(" [1] 决定关系")]),t._v(" "),_("blockquote",[_("p",[t._v("其实就是 Y = f(X)，X 决定 Y，Y 依赖于 X。")])]),t._v(" "),_("h4",{attrs:{id:"_2-非平凡的函数依赖"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-非平凡的函数依赖"}},[t._v("#")]),t._v(" [2] 非平凡的函数依赖")]),t._v(" "),_("blockquote",[_("p",[t._v("X -> Y，但是 Y ⊊ X")])]),t._v(" "),_("h4",{attrs:{id:"_3-平凡的函数依赖"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_3-平凡的函数依赖"}},[t._v("#")]),t._v(" [3] 平凡的函数依赖")]),t._v(" "),_("blockquote",[_("p",[t._v("X -> Y，但是 Y ⊆ X")])]),t._v(" "),_("h4",{attrs:{id:"_4-完全函数依赖-x-f-y"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_4-完全函数依赖-x-f-y"}},[t._v("#")]),t._v(" [4] 完全函数依赖（X-^F^>Y）")]),t._v(" "),_("blockquote",[_("p",[t._v("R(U)是属性集U上的关系模式，X, Y, Z 是 U 的不同子集，非空且不互相包含。")])]),t._v(" "),_("blockquote",[_("p",[t._v("X -> Y，且任意 X 的真子集 X`，都有 X` ⧷> Y ，也就是 X 中没有滥竽充数的，每个都得要。")])]),t._v(" "),_("h4",{attrs:{id:"_5-部分函数依赖-x-p-y"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_5-部分函数依赖-x-p-y"}},[t._v("#")]),t._v(" [5] 部分函数依赖（X-^P^>Y）")]),t._v(" "),_("blockquote",[_("p",[t._v("就是不完全函数依赖。")])]),t._v(" "),_("h4",{attrs:{id:"_6-传递依赖-x-t-z"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_6-传递依赖-x-t-z"}},[t._v("#")]),t._v(" [6] 传递依赖（X-^t^>Z）")]),t._v(" "),_("blockquote",[_("p",[t._v("若有 X->Y（ Y ⊊ X），Y⧷>X，Y->Z，则必有 X->Z，则称 Z 传递依赖于 X。")])]),t._v(" "),_("h4",{attrs:{id:"△-例题"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#△-例题"}},[t._v("#")]),t._v(" △[例题]")]),t._v(" "),_("ul",[_("li",[t._v("左部位单属性的函数依赖一定是完全函数依赖。\n"),_("ul",[_("li",[t._v("sno -> sname")]),t._v(" "),_("li",[t._v("sno -> class")]),t._v(" "),_("li",[t._v("tno -> tname")])])]),t._v(" "),_("li",[t._v("左部有多个，那就看起真子集能否决定右部属性。\n"),_("ul",[_("li",[t._v("(sno,cno) -> grade：\n"),_("ul",[_("li",[t._v("sno ⧷> grade")]),t._v(" "),_("li",[t._v("cno ⧷> grade")]),t._v(" "),_("li",[t._v("完全函数依赖")])])]),t._v(" "),_("li",[t._v("(sno,cno) -> sname:\n"),_("ul",[_("li",[t._v("sno -> sname")]),t._v(" "),_("li",[t._v("cno ⧷> sname")]),t._v(" "),_("li",[t._v("部分函数依赖")])])]),t._v(" "),_("li",[t._v("cno -> tname\n"),_("ul",[_("li",[t._v("cno -> tno, tno⧷> cno")]),t._v(" "),_("li",[t._v("tno -> tname")]),t._v(" "),_("li",[t._v("传递函数依赖")])])])])])]),t._v(" "),_("h3",{attrs:{id:"_1-2-候选键"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-候选键"}},[t._v("#")]),t._v(" 1.2 候选键")]),t._v(" "),_("h4",{attrs:{id:"_1-定义"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-定义"}},[t._v("#")]),t._v(" [1] 定义")]),t._v(" "),_("blockquote",[_("p",[t._v("唯一标识实体，且不包含多余属性的属性集。")])]),t._v(" "),_("h4",{attrs:{id:"_2-相关概念"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-相关概念"}},[t._v("#")]),t._v(" [2] 相关概念")]),t._v(" "),_("ul",[_("li",[_("p",[t._v("主键")])]),t._v(" "),_("li",[_("p",[t._v("主属性")]),t._v(" "),_("blockquote",[_("p",[t._v("包含在任何一个候选键中的属性。")])])]),t._v(" "),_("li",[_("p",[t._v("非主属性")]),t._v(" "),_("blockquote",[_("p",[t._v("不包含在任何一个候选键中的属性。")])])])]),t._v(" "),_("h2",{attrs:{id:"_2-关系模型的规范化"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-关系模型的规范化"}},[t._v("#")]),t._v(" 2. 关系模型的规范化")]),t._v(" "),_("h3",{attrs:{id:"第-1-范式-1nf"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#第-1-范式-1nf"}},[t._v("#")]),t._v(" 第 1 范式（1NF）")]),t._v(" "),_("img",{staticStyle:{zoom:"33%"},attrs:{src:"https://hedonspace.oss-cn-beijing.aliyuncs.com/img2/00831rSTgy1gdei33gxhsj30x80ieai8.jpg",alt:"image-20200401194036000"}}),t._v(" "),_("h4",{attrs:{id:"_1-特点"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-特点"}},[t._v("#")]),t._v(" [1] 特点")]),t._v(" "),_("ul",[_("li",[t._v("不重复")]),t._v(" "),_("li",[t._v("原子性")])]),t._v(" "),_("h4",{attrs:{id:"_2-问题"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-问题"}},[t._v("#")]),t._v(" [2] 问题")]),t._v(" "),_("ul",[_("li",[_("p",[t._v("数据冗余")])]),t._v(" "),_("li",[_("p",[t._v("插入异常")]),t._v(" "),_("img",{staticStyle:{zoom:"33%"},attrs:{src:"https://hedonspace.oss-cn-beijing.aliyuncs.com/img2/00831rSTgy1gdei7p5hq9j30y809qdlz.jpg",alt:"image-20200401194501247"}})]),t._v(" "),_("li",[_("p",[t._v("删除异常")]),t._v(" "),_("img",{staticStyle:{zoom:"33%"},attrs:{src:"https://hedonspace.oss-cn-beijing.aliyuncs.com/img2/00831rSTgy1gdei8uxv3jj30zo094dmw.jpg",alt:"image-20200401194607786"}})]),t._v(" "),_("li",[_("p",[t._v("修改异常")]),t._v(" "),_("img",{staticStyle:{zoom:"33%"},attrs:{src:"https://hedonspace.oss-cn-beijing.aliyuncs.com/img2/00831rSTgy1gdei9nxhd6j30z608a7an.jpg",alt:"image-20200401194654329"}})])]),t._v(" "),_("h3",{attrs:{id:"第-2-范式-2nf"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#第-2-范式-2nf"}},[t._v("#")]),t._v(" 第 2 范式（2NF）")]),t._v(" "),_("h4",{attrs:{id:"_1-特点-2"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-特点-2"}},[t._v("#")]),t._v(" [1] 特点")]),t._v(" "),_("p",[t._v("任意一个非主属性都完全依赖于 R 的任一候选键。")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://hedonspace.oss-cn-beijing.aliyuncs.com/img2/008eGmZEgy1gml6cgo1lij31pm09e0wc.jpg",alt:"image-20200401195815547"}})]),t._v(" "),_("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://hedonspace.oss-cn-beijing.aliyuncs.com/img2/008eGmZEgy1gml6cfxlu2j315w0du0vs.jpg",alt:"image-20200401195943891"}}),t._v(" "),_("h4",{attrs:{id:"_2-问题-2"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-问题-2"}},[t._v("#")]),t._v(" [2] 问题")]),t._v(" "),_("ul",[_("li",[_("p",[t._v("减少了数据冗余")])]),t._v(" "),_("li",[_("p",[t._v("插入异常")]),t._v(" "),_("img",{staticStyle:{zoom:"33%"},attrs:{src:"https://hedonspace.oss-cn-beijing.aliyuncs.com/img2/008eGmZEgy1gml6cjx38dj314o05u0u1.jpg",alt:"image-20200401200110517"}})]),t._v(" "),_("li",[_("p",[t._v("删除异常")]),t._v(" "),_("img",{staticStyle:{zoom:"33%"},attrs:{src:"https://hedonspace.oss-cn-beijing.aliyuncs.com/img2/008eGmZEgy1gml6civrasj318g03s758.jpg",alt:"image-20200401200236477"}})]),t._v(" "),_("li",[_("p",[t._v("修改异常")]),t._v(" "),_("p",[t._v("一个地方修改，可能需要修改很多个表。")])])]),t._v(" "),_("h3",{attrs:{id:"第-3-范式-3nf"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#第-3-范式-3nf"}},[t._v("#")]),t._v(" 第 3 范式（3NF）")]),t._v(" "),_("h4",{attrs:{id:"_1-特点-3"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-特点-3"}},[t._v("#")]),t._v(" [1] 特点")]),t._v(" "),_("p",[t._v("消除了非主属性对候选码的传递函数依赖。")]),t._v(" "),_("img",{staticStyle:{zoom:"33%"},attrs:{src:"https://hedonspace.oss-cn-beijing.aliyuncs.com/img2/008eGmZEgy1gml6cfqpl1j31cm03ggmp.jpg",alt:"image-20200401200618015"}}),t._v(" "),_("img",{staticStyle:{zoom:"33%"},attrs:{src:"https://hedonspace.oss-cn-beijing.aliyuncs.com/img2/008eGmZEgy1gml6cij7q3j318a0j2417.jpg",alt:"image-20200401200706535"}}),t._v(" "),_("h4",{attrs:{id:"_2-问题-3"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-问题-3"}},[t._v("#")]),t._v(" [2] 问题")]),t._v(" "),_("ul",[_("li",[t._v("减少了数据冗余")]),t._v(" "),_("li",[t._v("减少了前面的删除异常")]),t._v(" "),_("li",[t._v("减少了前面的插入异常")]),t._v(" "),_("li",[t._v("减少了前面的修改异常")]),t._v(" "),_("li",[t._v("不彻底性。")])]),t._v(" "),_("h3",{attrs:{id:"bc-范式-bcnf"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#bc-范式-bcnf"}},[t._v("#")]),t._v(" BC 范式（BCNF)")]),t._v(" "),_("p",[t._v("[1] 特点")]),t._v(" "),_("ul",[_("li",[_("p",[t._v("R 中的每一个非平凡函数依赖的决定因素都包含一个候选键（只有依赖于候选键的函数依赖）。")]),t._v(" "),_("ul",[_("li",[t._v("消除部分依赖")]),t._v(" "),_("li",[t._v("消除传递依赖")])])]),t._v(" "),_("li",[_("p",[t._v("BCNF 必定是 3NF")])])]),t._v(" "),_("h3",{attrs:{id:"第-4-范式-4nf"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#第-4-范式-4nf"}},[t._v("#")]),t._v(" 第 4 范式（4NF）")]),t._v(" "),_("h4",{attrs:{id:"多值依赖-一对多"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#多值依赖-一对多"}},[t._v("#")]),t._v(" 多值依赖（一对多）")]),t._v(" "),_("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://hedonspace.oss-cn-beijing.aliyuncs.com/img2/008eGmZEgy1gml6cjfknlj317g0fm0u1.jpg",alt:"image-20200401210648965"}}),t._v(" "),_("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://hedonspace.oss-cn-beijing.aliyuncs.com/img2/008eGmZEgy1gml6chhxtjj31840swtb5.jpg",alt:"image-20200401210701100"}}),t._v(" "),_("p",[t._v("[1] 特点")]),t._v(" "),_("p",[t._v("如果存在元组（x，y~1~，z~1~）和（x，y~2~，z~2~），一定存在元组（x，y~2~，z~1~）和元组（x，y~1~，z~2~）。")]),t._v(" "),_("p",[t._v("U=X+Y+Z，X →→ Y 表示 X 多值决定 Y")]),t._v(" "),_("ul",[_("li",[t._v("X 的一个值可以确定 Y 的多个值（这个关系决定于 Z 的取值无关，也就是说当 X 值确定后，无论 Z 取何值，得到的 Y 总是固定的。")]),t._v(" "),_("li",[t._v("对称性：\n"),_("ul",[_("li",[t._v("若 X →→ Y，则 X →→ Z")])])]),t._v(" "),_("li",[t._v("合并性：\n"),_("ul",[_("li",[t._v("若 X →→ Y，且 X →→ Z，则 X →→ YZ")])])]),t._v(" "),_("li",[t._v("相交性：\n"),_("ul",[_("li",[t._v("若 X →→ Y，且 X →→ Z，则 X →→ (Y∩Z)")])])]),t._v(" "),_("li",[t._v("传递性：\n"),_("ul",[_("li",[t._v("若X →→ Y，且 Y →→ Z，则 X →→ (Y-Z)，X →→(Z-Y)")])])])]),t._v(" "),_("h4",{attrs:{id:"第-4-范式-4nf-2"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#第-4-范式-4nf-2"}},[t._v("#")]),t._v(" 第 4 范式（4NF）")]),t._v(" "),_("p",[t._v("[1] 特点")]),t._v(" "),_("p",[t._v("设 R(U)是一个关系模式，D 是 R 上的多值依赖集合。如果 D 中每个非平凡多值依赖 X→→Y，X 都包含 R 的候选键，则 R∈4NF。")]),t._v(" "),_("img",{staticStyle:{zoom:"33%"},attrs:{src:"https://hedonspace.oss-cn-beijing.aliyuncs.com/img2/008eGmZEgy1gml6ci10qej318a0iywh6.jpg",alt:"image-20200401210841443"}}),t._v(" "),_("ul",[_("li",[t._v("4NF 必定是 BCNF")])]),t._v(" "),_("Vssue")],1)}),[],!1,null,null,null);a.default=s.exports}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{448:function(t,s,a){"use strict";a.r(s);var n=a(47),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"_11-内存对齐"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_11-内存对齐"}},[t._v("#")]),t._v(" 11. 内存对齐")]),t._v(" "),a("h2",{attrs:{id:"_11-1-问题引出"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_11-1-问题引出"}},[t._v("#")]),t._v(" 11.1 问题引出")]),t._v(" "),a("div",{staticClass:"language-go extra-class"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" S1 "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tnum1 "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int16")]),t._v("\n\tnum2 "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int32")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" S2 "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tnum1 "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int16")]),t._v("\n\tnum2 "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int32")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tfmt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("unsafe"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Sizeof")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("S1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 8")]),t._v("\n\tfmt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("unsafe"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Sizeof")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("S2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 8")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),a("p",[t._v("为什么 "),a("code",[t._v("S1{}")]),t._v(" 和 "),a("code",[t._v("S2{}")]),t._v(" 的大小都为 "),a("code",[t._v("8bytes")]),t._v("？ —— 内存对齐")]),t._v(" "),a("h2",{attrs:{id:"_11-2-内存对齐"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_11-2-内存对齐"}},[t._v("#")]),t._v(" 11.2 内存对齐")]),t._v(" "),a("img",{staticStyle:{zoom:"33.5%"},attrs:{src:"https://tva1.sinaimg.cn/large/e6c9d24egy1h560zqhx1bj217o0dc3zt.jpg",alt:"image-20220814091401760"}}),t._v(" "),a("ul",[a("li",[t._v("非内存对齐：内存的原子性和效率受影响")])]),t._v(" "),a("img",{staticStyle:{zoom:"25%"},attrs:{src:"https://tva1.sinaimg.cn/large/e6c9d24egy1h560yn6vvsj21ha0fi76e.jpg",alt:"image-20220814091258218"}}),t._v(" "),a("ul",[a("li",[t._v("内存对齐：提高内存操作效率，有利于内存原子性")])]),t._v(" "),a("h2",{attrs:{id:"_11-3-对齐系数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_11-3-对齐系数"}},[t._v("#")]),t._v(" 11.3 对齐系数")]),t._v(" "),a("ul",[a("li",[t._v("对齐系数：变量的内存地址必须被对齐系数整除。")]),t._v(" "),a("li",[a("code",[t._v("unsafe.Alignof()")]),t._v(": 可以查看值在内存中的对齐系数。")])]),t._v(" "),a("h2",{attrs:{id:"_11-4-基本类型对齐"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_11-4-基本类型对齐"}},[t._v("#")]),t._v(" 11.4 基本类型对齐")]),t._v(" "),a("div",{staticClass:"language-go extra-class"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[t._v("fmt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Printf")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"bool size: %d, align: %d\\n"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" unsafe"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Sizeof")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("bool")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" unsafe"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Alignof")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("bool")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nfmt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Printf")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"byte size: %d, align: %d\\n"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" unsafe"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Sizeof")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("byte")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" unsafe"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Alignof")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("byte")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nfmt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Printf")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"int8 size: %d, align: %d\\n"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" unsafe"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Sizeof")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("int8")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" unsafe"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Alignof")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("int8")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nfmt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Printf")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"int16 size: %d, align: %d\\n"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" unsafe"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Sizeof")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("int16")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" unsafe"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Alignof")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("int16")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nfmt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Printf")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"int32 size: %d, align: %d\\n"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" unsafe"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Sizeof")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("int32")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" unsafe"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Alignof")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("int32")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nfmt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Printf")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"int64 size: %d, align: %d\\n"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" unsafe"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Sizeof")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("int64")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" unsafe"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Alignof")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("int64")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("输出：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("bool size: 1, align: 1\nbyte size: 1, align: 1\nint8 size: 1, align: 1\nint16 size: 2, align: 2\nint32 size: 4, align: 4\nint64 size: 8, align: 8\n")])])]),a("p",[t._v("结论：基本类型的对齐系数跟它的长度一致。")]),t._v(" "),a("img",{staticStyle:{zoom:"33%"},attrs:{src:"https://tva1.sinaimg.cn/large/e6c9d24egy1h561ez0bpuj219e0d8wfr.jpg",alt:"image-20220814092840100"}}),t._v(" "),a("h2",{attrs:{id:"_11-5-结构体对齐"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_11-5-结构体对齐"}},[t._v("#")]),t._v(" 11.5 结构体对齐")]),t._v(" "),a("ul",[a("li",[t._v("结构体对齐分为内部对齐和结构体之间对齐")])]),t._v(" "),a("h3",{attrs:{id:"_11-5-1-结构体内部对齐"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_11-5-1-结构体内部对齐"}},[t._v("#")]),t._v(" 11.5.1 结构体内部对齐")]),t._v(" "),a("ul",[a("li",[t._v("指的是结构体内部成员的相对位置（偏移量）；")]),t._v(" "),a("li",[t._v("每个成员的偏移量是 "),a("strong",[t._v("自身大小")]),t._v(" 和 "),a("strong",[t._v("对齐系数")]),t._v(" 的较小值的倍数")])]),t._v(" "),a("div",{staticClass:"language-go extra-class"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" Demo "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  a "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("bool")]),t._v("\t\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//size=1,align=1")]),t._v("\n  b "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),t._v("\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//size=16,align=8")]),t._v("\n  c "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int16")]),t._v("\t\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//size=2,align=2")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://tva1.sinaimg.cn/large/e6c9d24egy1h561ozd4fwj21b20bg408.jpg",alt:"image-20220814093817402"}}),t._v(" "),a("ul",[a("li",[t._v("a 的偏移量必须是 1 的倍数；（1 和 1 的较小值是 1）")]),t._v(" "),a("li",[t._v("b 的偏移量必须是 8 的倍数；（16 和 8 的较小值是 8）")]),t._v(" "),a("li",[t._v("c 的偏移量必须是 2 的倍数；（2 和 2 的较小值是 2）")])]),t._v(" "),a("h3",{attrs:{id:"_11-5-2-结构体长度填充"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_11-5-2-结构体长度填充"}},[t._v("#")]),t._v(" 11.5.2 结构体长度填充")]),t._v(" "),a("ul",[a("li",[t._v("结构体通过填充长度，来对齐系统字长；")]),t._v(" "),a("li",[t._v("结构体长度是 "),a("strong",[t._v("最大成员长度")]),t._v(" 和 "),a("strong",[t._v("系统字长")]),t._v(" 较小值的整数倍；")])]),t._v(" "),a("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://tva1.sinaimg.cn/large/e6c9d24egy1h561u40mudj21by0cyjtc.jpg",alt:"image-20220814094313044"}}),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("通过调整 struct 成员变量顺序优化内存使用")]),t._v(" "),a("ul",[a("li",[t._v("如将 Demo 中的 b 和 c 调换位置，那么就可以省略一个系统字长了。")])]),t._v(" "),a("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://tva1.sinaimg.cn/large/e6c9d24egy1h561vtxirij21940d675x.jpg",alt:"image-20220814094451431"}})]),t._v(" "),a("h3",{attrs:{id:"_11-5-3-结构体之间对齐"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_11-5-3-结构体之间对齐"}},[t._v("#")]),t._v(" 11.5.3 结构体之间对齐")]),t._v(" "),a("ul",[a("li",[t._v("结构体之间对齐，是为了确定结构体的第一个成员变量的内存地址，以让后面的成员地址都合法；")]),t._v(" "),a("li",[t._v("结构体的对齐系数是 "),a("strong",[t._v("其成员的最大对齐系数")]),t._v("；")])]),t._v(" "),a("h3",{attrs:{id:"_11-5-4-空结构体对齐"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_11-5-4-空结构体对齐"}},[t._v("#")]),t._v(" 11.5.4 空结构体对齐")]),t._v(" "),a("ul",[a("li",[t._v("空结构体单独存在时，其内存地址为 "),a("code",[t._v("zerobase")]),t._v("；")]),t._v(" "),a("li",[t._v("空结构体出现在结构体中时，地址跟随前一个变量；")])]),t._v(" "),a("p",[t._v("​\t"),a("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://tva1.sinaimg.cn/large/e6c9d24egy1h5620xs2pwj21540di764.jpg",alt:"image-20220814094947035"}})]),t._v(" "),a("ul",[a("li",[t._v("空结构体出现在结构体最后，如果开启了一个新的系统字长，则需要补零，防止与其他结构体混用地址；"),a("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://tva1.sinaimg.cn/large/e6c9d24egy1h5623u7asnj218e0dcac5.jpg",alt:"image-20220814095234222"}})])]),t._v(" "),a("Vssue")],1)}),[],!1,null,null,null);s.default=e.exports}}]);
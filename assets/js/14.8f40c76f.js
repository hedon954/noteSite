(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{424:function(t,v,_){"use strict";_.r(v);var a=_(47),r=Object(a.a)({},(function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"golang-数据类型"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#golang-数据类型"}},[t._v("#")]),t._v(" Golang 数据类型")]),t._v(" "),_("h2",{attrs:{id:"一、布尔值"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#一、布尔值"}},[t._v("#")]),t._v(" 一、布尔值")]),t._v(" "),_("p",[t._v("布尔型的值只可以是常量 true 或者 false。")]),t._v(" "),_("div",{staticClass:"language-go extra-class"},[_("pre",{pre:!0,attrs:{class:"language-go"}},[_("code",[_("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" b "),_("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("bool")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n")])])]),_("h2",{attrs:{id:"二、整型"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#二、整型"}},[t._v("#")]),t._v(" 二、整型")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("类型")]),t._v(" "),_("th",[t._v("说明")]),t._v(" "),_("th",[t._v("范围")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("int8")]),t._v(" "),_("td",[t._v("有符号 8 位整型，长度 8bit")]),t._v(" "),_("td",[t._v("-128 到 127")])]),t._v(" "),_("tr",[_("td",[t._v("int16")]),t._v(" "),_("td",[t._v("有符号 16 位整型")]),t._v(" "),_("td",[t._v("-32768 到 32767")])]),t._v(" "),_("tr",[_("td",[t._v("int32")]),t._v(" "),_("td",[t._v("有符号 32 位整型")]),t._v(" "),_("td",[t._v("-2147483648 到 2147483647")])]),t._v(" "),_("tr",[_("td",[t._v("int64")]),t._v(" "),_("td",[t._v("有符号 64 位整型")]),t._v(" "),_("td",[t._v("-9223372036854775808 到 9223372036854775807")])]),t._v(" "),_("tr",[_("td",[t._v("uint8")]),t._v(" "),_("td",[t._v("无符号 8 位整型，8 位都用于表示数值")]),t._v(" "),_("td",[t._v("0 到 255")])]),t._v(" "),_("tr",[_("td",[t._v("uint16")]),t._v(" "),_("td",[t._v("无符号 16 位整型")]),t._v(" "),_("td",[t._v("0 到 65535")])]),t._v(" "),_("tr",[_("td",[t._v("uint32")]),t._v(" "),_("td",[t._v("无符号 32 位整型")]),t._v(" "),_("td",[t._v("0 到 4294967295")])]),t._v(" "),_("tr",[_("td",[t._v("uint64")]),t._v(" "),_("td",[t._v("无符号 64 位整型")]),t._v(" "),_("td",[t._v("0 到 18446744073709551615")])]),t._v(" "),_("tr",[_("td"),t._v(" "),_("td"),t._v(" "),_("td")])])]),t._v(" "),_("blockquote",[_("p",[t._v("int 和 uint：根据底层平台，表示 32 或 64 位整数。除非需要使用特定大小的整数，否则通常应该使用 int 来表示整数。")])]),t._v(" "),_("h2",{attrs:{id:"三、浮点型"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#三、浮点型"}},[t._v("#")]),t._v(" 三、浮点型")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("类型")]),t._v(" "),_("th",[t._v("说明")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("float32")]),t._v(" "),_("td",[t._v("IEEE-754 32位浮点型数")])]),t._v(" "),_("tr",[_("td",[t._v("float64")]),t._v(" "),_("td",[t._v("IEEE-754 64位浮点型数")])]),t._v(" "),_("tr",[_("td",[t._v("complex64")]),t._v(" "),_("td",[t._v("32 位实数和 32 位虚数")])]),t._v(" "),_("tr",[_("td",[t._v("complex128")]),t._v(" "),_("td",[t._v("64 位实数和 64 位虚数")])])])]),t._v(" "),_("blockquote",[_("p",[t._v("使用 "),_("code",[t._v("read(v")]),t._v(") 和 "),_("code",[t._v("imag(v)")]),t._v("可以取出复数的实部和虚部。")])]),t._v(" "),_("h2",{attrs:{id:"四、字节型"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#四、字节型"}},[t._v("#")]),t._v(" 四、字节型")]),t._v(" "),_("ul",[_("li",[_("p",[t._v("byte")]),t._v(" "),_("p",[t._v("类似 uint8")])])]),t._v(" "),_("h2",{attrs:{id:"五、字符型"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#五、字符型"}},[t._v("#")]),t._v(" 五、字符型")]),t._v(" "),_("ul",[_("li",[_("p",[t._v("rune")]),t._v(" "),_("p",[t._v("类似 int32")])])]),t._v(" "),_("h2",{attrs:{id:"六、指针型"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#六、指针型"}},[t._v("#")]),t._v(" 六、指针型")]),t._v(" "),_("ul",[_("li",[_("p",[t._v("uintptr")]),t._v(" "),_("p",[t._v("无符号整型，用于存放一个指针")])])]),t._v(" "),_("h2",{attrs:{id:"七、字符串型"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#七、字符串型"}},[t._v("#")]),t._v(" 七、字符串型")]),t._v(" "),_("p",[t._v("字符串就是一串固定长度的字符连接起来的字符序列。Go 的字符串是由单个字节连接起来的。Go 语言的字符串的字节使用 UTF-8 编码标识 Unicode 文本。")]),t._v(" "),_("div",{staticClass:"language-go extra-class"},[_("pre",{pre:!0,attrs:{class:"language-go"}},[_("code",[_("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" str "),_("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),t._v("\nstr "),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hello World"')]),t._v("\n")])])]),_("h2",{attrs:{id:"八、复合型"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#八、复合型"}},[t._v("#")]),t._v(" 八、复合型")]),t._v(" "),_("ol",[_("li",[t._v("指针类型（Pointer）")]),t._v(" "),_("li",[t._v("数组类型")]),t._v(" "),_("li",[t._v("结构化类型（struct）")]),t._v(" "),_("li",[t._v("channel 类型")]),t._v(" "),_("li",[t._v("函数类型")]),t._v(" "),_("li",[t._v("slice 类型")]),t._v(" "),_("li",[t._v("接口类型（interface）")]),t._v(" "),_("li",[t._v("Map 类型")])])])}),[],!1,null,null,null);v.default=r.exports}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{454:function(t,s,a){"use strict";a.r(s);var n=a(47),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"_10-interface"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_10-interface"}},[t._v("#")]),t._v(" 10. interface")]),t._v(" "),a("h2",{attrs:{id:"_10-1-底层"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_10-1-底层"}},[t._v("#")]),t._v(" 10.1 底层")]),t._v(" "),a("p",[t._v("底层是 "),a("code",[t._v("runtime/runtime2.go")]),t._v(" 下的 "),a("code",[t._v("iface")]),t._v("。")]),t._v(" "),a("div",{staticClass:"language-go extra-class"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" iface "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\ttab  "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("itab\t\t\t\t\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// interface 的标签信息")]),t._v("\n\tdata unsafe"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Pointer\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 万能指针：指向真实数据")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// layout of Itab known to compilers")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// allocated in non-garbage-collected memory")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Needs to be in sync with")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ../cmd/compile/internal/gc/reflect.go:/^func.dumptabs.")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" itab "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tinter "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("interfacetype\t\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 当前接口类型")]),t._v("\n\t_type "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("_type\t\t\t\t\t\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 当前接口值所指向的真正类型")]),t._v("\n\thash  "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("uint32")]),t._v(" \n\t"),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("_")]),t._v("     "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("byte")]),t._v("\n\tfun   "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("uintptr")]),t._v(" \t\t\t\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 记录当前值所指向的类型，实现了哪些方法；长度会在编译的时候变化，并非为1")]),t._v("\n  \t\t\t\t\t\t\t\t\t\t\t\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// fun 字段是用来做【类型断言】的")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"_10-2-结构体和其指针实现接口的问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_10-2-结构体和其指针实现接口的问题"}},[t._v("#")]),t._v(" 10.2 结构体和其指针实现接口的问题")]),t._v(" "),a("img",{staticStyle:{zoom:"25%"},attrs:{src:"https://hedonspace.oss-cn-beijing.aliyuncs.com/img2/e6c9d24egy1h55aadc8m7j21r40bitbm.jpg",alt:"image-20220813175004083"}}),t._v(" "),a("ul",[a("li",[a("p",[t._v("如果是用结构体类型去实现接口，Go 在编译的时候，会自动再为其对应的指针类型实现接口；")]),t._v(" "),a("div",{staticClass:"language-go extra-class"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 手动写")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("t Truck"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Drive")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  \n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Go 底层会帮我们自动写这个")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("t "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("Truck"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Drive")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  \n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])]),t._v(" "),a("li",[a("p",[t._v("如果只是用结构体指针类型去实现接口，Go 在编译的时候，就不会为结构体类型去实现接口；")]),t._v(" "),a("div",{staticClass:"language-go extra-class"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 手动写")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("t "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("Truck"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Drive")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  \n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*\n   Go 底层不会帮我们写这个\nfunc (t Truck) Drive() {\n  \n}\n*/")]),t._v("\n")])])])])]),t._v(" "),a("h2",{attrs:{id:"_10-3-空接口如何承载一切类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_10-3-空接口如何承载一切类型"}},[t._v("#")]),t._v(" 10.3 空接口如何承载一切类型")]),t._v(" "),a("p",[t._v("空接口底层是 "),a("code",[t._v("runtime/runtime2.go")]),t._v(" 下的 "),a("code",[t._v("eface")]),t._v(" 类型：")]),t._v(" "),a("div",{staticClass:"language-go extra-class"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" eface "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t_type "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("_type\t\t\t\t\t\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 当前接口值所指向的真正类型")]),t._v("\n\tdata  unsafe"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Pointer\t\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 万能指针：指向真实数据")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"_10-4-nil-空接口-空结构体"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_10-4-nil-空接口-空结构体"}},[t._v("#")]),t._v(" 10.4 nil & 空接口 & 空结构体")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("总结")]),t._v(" "),a("ul",[a("li",[t._v("nil 是六种类型的零值，不包括基本类型和 struct；")]),t._v(" "),a("li",[t._v("空接口可以承载任意类型，只有当 "),a("code",[t._v("_type")]),t._v(" 和 "),a("code",[t._v("data")]),t._v(" 都为空的时候，它才是 nil；")]),t._v(" "),a("li",[t._v("空结构体的指针和值都不是 nil；")])])]),t._v(" "),a("h3",{attrs:{id:"_10-4-1-nil"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_10-4-1-nil"}},[t._v("#")]),t._v(" 10.4.1 nil")]),t._v(" "),a("div",{staticClass:"language-go extra-class"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// nil is a predeclared identifier representing the zero value for a")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// pointer, channel, func, interface, map, or slice type.")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("nil")]),t._v(" Type "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Type must be a pointer, channel, func, interface, map, or slice type")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Type is here for the purposes of documentation only. It is a stand-in")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// for any Go type, but represents the same type for any given function")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// invocation.")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" Type "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),t._v("\n")])])]),a("p",[t._v("nil 只能是以下六种类型的零值：")]),t._v(" "),a("ul",[a("li",[t._v("pointer")]),t._v(" "),a("li",[t._v("channel")]),t._v(" "),a("li",[t._v("func")]),t._v(" "),a("li",[t._v("interface")]),t._v(" "),a("li",[t._v("map")]),t._v(" "),a("li",[t._v("slice")])]),t._v(" "),a("p",[a("font",{attrs:{color:"red"}},[t._v("nil 不是 struct 的零值，不可能等于 struct{}。")])],1),t._v(" "),a("p",[a("font",{attrs:{color:"red"}},[t._v("nil 也不是基本类型的零值，不可能等于任意基本类型。")])],1),t._v(" "),a("p",[a("font",{attrs:{color:"red"}},[t._v("nil 是有类型的。")])],1),t._v(" "),a("div",{staticClass:"language-go extra-class"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" a "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),t._v("\nfmt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("nil")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" \t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 报错，nil 不支持基本类型")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" ap "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),t._v("\nfmt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ap "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("nil")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// true")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" b "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("map")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\nfmt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("b "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("nil")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\t\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// true")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" s "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\nfmt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("s "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("nil")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" \t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 报错，nil 不支持 struct")]),t._v("\n\nfmt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ap "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\t\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 报错，虽然 ap 和 b 都是 nil，但是它们的类型是不一样的")]),t._v("\n")])])]),a("h3",{attrs:{id:"_10-4-2-空接口"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_10-4-2-空接口"}},[t._v("#")]),t._v(" 10.4.2 空接口")]),t._v(" "),a("div",{staticClass:"language-go extra-class"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" a "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" b "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" c "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),t._v("\nfmt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("nil")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// true")]),t._v("\nfmt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("b "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("nil")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// true")]),t._v("\nfmt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("c "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("nil")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// true")]),t._v("\nfmt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("   "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// true")]),t._v("\nfmt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" c"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("   "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// false")]),t._v("\na "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" c\nfmt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("nil")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// false")]),t._v("\n")])])]),a("ul",[a("li",[a("p",[a("code",[t._v("a == c")]),t._v(" 为 "),a("code",[t._v("false")]),t._v(" 我们可以理解，底层的数据类型是不一样的")])]),t._v(" "),a("li",[a("p",[t._v("为什么 "),a("code",[t._v("a = c")]),t._v(" 后，"),a("code",[t._v("a")]),t._v(" 就不是 "),a("code",[t._v("nil")]),t._v(" 了呢？")]),t._v(" "),a("p",[t._v("这是因为空接口的底层为我们上面分析的 "),a("code",[t._v("eface")]),t._v("，当 "),a("code",[t._v("a=c")]),t._v(" 后，"),a("code",[t._v("a")]),t._v(" 中的 "),a("code",[t._v("_type")]),t._v(" 字段就有值了，于是它就不是 "),a("code",[t._v("nil")]),t._v(" 了。")]),t._v(" "),a("div",{staticClass:"language-go extra-class"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" eface "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t_type "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("_type\t\t\t\t\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// a=c，后，_type 就是 *int 了")]),t._v("\n\tdata  unsafe"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Pointer\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])]),t._v(" "),a("h3",{attrs:{id:"_10-4-3-空结构体"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_10-4-3-空结构体"}},[t._v("#")]),t._v(" 10.4.3 空结构体")]),t._v(" "),a("ul",[a("li",[t._v("啥也没有的结构体，它不可能等于 nil。")])]),t._v(" "),a("div",{staticClass:"language-go extra-class"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" A "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  \n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("Vssue")],1)}),[],!1,null,null,null);s.default=e.exports}}]);
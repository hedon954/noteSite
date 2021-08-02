(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{432:function(t,s,a){"use strict";a.r(s);var n=a(47),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"golang-关键字-type"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#golang-关键字-type"}},[t._v("#")]),t._v(" Golang 关键字 type")]),t._v(" "),a("p",[t._v("type 是 Go 语法里的重要而且常用的关键字，type 绝不只是对应于 C/C++ 中的 typedef。搞清楚 type 的使用，就容易理解 Go 语言中的核心概念 struct、interface、函数等的使用。")]),t._v(" "),a("h2",{attrs:{id:"一、golang-类型定义"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、golang-类型定义"}},[t._v("#")]),t._v(" 一、Golang 类型定义")]),t._v(" "),a("h3",{attrs:{id:"_1-定义结构体"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-定义结构体"}},[t._v("#")]),t._v(" 1. 定义结构体")]),t._v(" "),a("p",[t._v("使用 type 可以定义结构体类型：")]),t._v(" "),a("div",{staticClass:"language-go extra-class"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 定义结构体")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" person "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   name "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 注意后面不能有逗号")]),t._v("\n   age  "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h3",{attrs:{id:"_2-定义接口"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-定义接口"}},[t._v("#")]),t._v(" 2. 定义接口")]),t._v(" "),a("p",[t._v("使用 type 可以定义接口类型：")]),t._v(" "),a("div",{staticClass:"language-go extra-class"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 定义接口")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" USB "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("start")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("end")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h3",{attrs:{id:"_3-定义函数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-定义函数"}},[t._v("#")]),t._v(" 3. 定义函数")]),t._v(" "),a("p",[t._v("Go 语言支持函数式编程，可以使用高阶编程语法。一个函数可以作为另一个函数的参数，也可以作为另一个函数的返回值，那么在定义这个高阶函数的时候，如果函数的类型比较复杂，我们可以使用 type 来定义这个函数的类型：")]),t._v(" "),a("div",{staticClass:"language-go extra-class"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("package")]),t._v(" main\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"fmt"')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"strconv"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n     res1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("fun1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n     fmt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("res1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 定义函数")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" my_fun  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// fun1() 函数的返回值是 my_fun 类型")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" fun1 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" my_fun"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    fun "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("b "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        s "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" strconv"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Itoa")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" strconv"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Itoa")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" s\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" fun\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),a("h2",{attrs:{id:"二、golang-类型别名"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二、golang-类型别名"}},[t._v("#")]),t._v(" 二、Golang 类型别名")]),t._v(" "),a("p",[t._v("类型别名的写法为：")]),t._v(" "),a("div",{staticClass:"language-go extra-class"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" TypeAlias "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Type\n")])])]),a("p",[t._v("类型别名规定："),a("strong",[t._v("TypeAlias 只是 Type 的别名，本质上 TypeAlias 与 Type 是同一个类型")]),t._v("。就像一个孩子小时候有小名、乳名，上学后用学名，英语老师又会给他起英文名，但这些名字都指的是他本人。")]),t._v(" "),a("p",[t._v("类型别名是 Go 1.9 版本添加的新功能。主要用于代码升级、迁移中类型的兼容性问题。在 C/C++语言中，代码重构升级可以使用宏快速定义新的一段代码。Go 语言中没有选择加入宏，而是将解决重构中最麻烦的类型名变更问题。")]),t._v(" "),a("p",[t._v("在 "),a("font",{attrs:{color:"orange"}},[t._v("Go 1.9")]),t._v(" 版本之前的内建类型定义的代码是这样写的：")],1),t._v(" "),a("div",{staticClass:"language-go extra-class"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("byte")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("uint8")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("rune")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int32")]),t._v("\n")])])]),a("p",[t._v("而在 "),a("font",{attrs:{color:"orange"}},[t._v("Go 1.9")]),t._v(" 版本之后变为：")],1),t._v(" "),a("div",{staticClass:"language-go extra-class"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("byte")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("uint8")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("rune")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int32")]),t._v("\n")])])]),a("p",[t._v("这个修改就是配合类型别名而进行的修改。")]),t._v(" "),a("p",[t._v("示例：")]),t._v(" "),a("div",{staticClass:"language-go extra-class"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("package")]),t._v(" main\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"fmt"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" i1 myint\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" i2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),t._v("\n    i1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),t._v("\n    i1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" i2  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//错误用法，虽然 i1 和 i2 本质上都是 int，但是它们的显式类型的不一样的，不能互相赋值")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" myint "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),t._v("\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 定义新类型 myint")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" myint2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 不是重新定义类型，只是给 int 起别名")]),t._v("\n")])])]),a("blockquote",[a("p",[a("strong",[t._v("注意：非自定义类型不能定义方法")])]),t._v(" "),a("div",{staticClass:"language-go extra-class"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 定义 time.Duration 的别名为 MyDuration")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" MyDuration "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" time"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Duration\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 为 MyDuration 添加一个函数")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("m MyDuration"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("EasySet")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//cannot define new methods on non-local type time.Duration")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("以上代码报错。报错信息：cannot define new methods on non-local type time.Duration")]),t._v(" "),a("p",[t._v("编译器提示：不能在一个非本地的类型 time.Duration 上定义新方法。非本地方法指的就是使用 time.Duration 的代码所在的包，也就是 main 包。因为 time.Duration 是在 time 包中定义的，在 main 包中使用。time.Duration 包与 main 包不在同一个包中，因此不能为不在一个包中的类型定义方法。")]),t._v(" "),a("p",[t._v("解决这个问题有下面两种方法：")]),t._v(" "),a("ul",[a("li",[t._v("将类型别名改为类型定义： type MyDuration time.Duration，也就是将 MyDuration 从别名改为类型。")]),t._v(" "),a("li",[t._v("将 MyDuration 的别名定义放在 time 包中。")])])]),t._v(" "),a("Vssue")],1)}),[],!1,null,null,null);s.default=e.exports}}]);
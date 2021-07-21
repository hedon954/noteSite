(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{425:function(t,a,s){"use strict";s.r(a);var n=s(47),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"golang-编码规范"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#golang-编码规范"}},[t._v("#")]),t._v(" Golang 编码规范")]),t._v(" "),s("p",[t._v("本规范旨在为日常 Go 项目开发提供一个代码的规范指导，方便团队形成一个统一的代码风格，提高代码的可读性，规范性和统一性。本规范将从命名规范，注释规范，代码风格和 Go 语言提供的常用的工具这几个方面做一个说明。")]),t._v(" "),s("p",[t._v("该规范参考了 "),s("a",{attrs:{href:"https://golang.google.cn/ref/spec",target:"_blank",rel:"noopener noreferrer"}},[t._v("Go 语言官方代码的风格"),s("OutboundLink")],1),t._v(" 制定。")]),t._v(" "),s("h2",{attrs:{id:"一、命名规范"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一、命名规范"}},[t._v("#")]),t._v(" 一、命名规范")]),t._v(" "),s("p",[t._v("命名是代码规范中很重要的一部分，统一的命名规则有利于提高的代码的可读性，好的命名仅仅通过命名就可以获取到足够多的信息。")]),t._v(" "),s("p",[t._v("Go 在命名时以字母 a-zA-Z 或下划线开头，后面跟着一个或多个字母、下划线和数字（0-9）。Go 不允许在命名时中使用 @、$ 和 % 等标点符号。")]),t._v(" "),s("p",[s("strong",[t._v("Go 是一种区分大小写的编程语言。因此，people 和 People 是两个不同的命名。")])]),t._v(" "),s("blockquote",[s("ol",[s("li",[s("p",[t._v("当命名（包括常量、变量、类型、函数名、结构字段等等）以一个大写字母开头，如：Group1，那么使用这种形式的标识符的对象就"),s("strong",[t._v("可以被外部包的代码所使用")]),t._v("（客户端程序需要先导入这个包）。")]),t._v(" "),s("p",[t._v("这被称为导出，像面向对象语言中的 public。")])]),t._v(" "),s("li",[s("p",[s("strong",[t._v("命名如果以小写字母开头，则对包外是不可见的，但是他们在整个包的内部是可见并且可用的")]),t._v("。")]),t._v(" "),s("p",[t._v("像面向对象语言中的 private。")])])])]),t._v(" "),s("h3",{attrs:{id:"_1-包命名"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-包命名"}},[t._v("#")]),t._v(" 1. 包命名")]),t._v(" "),s("p",[t._v("保持 package 的名字和目录保持一致，尽量采取有意义的包名，简短，有意义，尽量和标准库不要冲突。包名应该为 "),s("strong",[t._v("小写")]),t._v(" 单词，不要使用下划线或者混合大小写。")]),t._v(" "),s("div",{staticClass:"language-go extra-class"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("package")]),t._v(" demo\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("package")]),t._v(" main\n")])])]),s("h3",{attrs:{id:"_2-文件命名"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-文件命名"}},[t._v("#")]),t._v(" 2. 文件命名")]),t._v(" "),s("p",[t._v("尽量采取有意义的文件名，简短，有意义，应该为 "),s("strong",[t._v("小写")]),t._v(" 单词，使用 "),s("strong",[t._v("下划线")]),t._v(" 分隔各个单词。")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("my_test.go\n")])])]),s("h4",{attrs:{id:"_2-1-平台区分"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-平台区分"}},[t._v("#")]),t._v(" 2.1 平台区分")]),t._v(" "),s("div",{staticClass:"language-go extra-class"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[t._v("文件名"),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("_")]),t._v("平台\n \n平台可选为：windows"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" unix"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" posix"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" plan9"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" darwin"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" bsd"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" linux"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" freebsd"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" nacl"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t\t\t\tnetbsd"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" openbsd"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" solaris"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" dragonfly"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" bsd"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" notbsd"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" android"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" stubs\n \n例： file_windows"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("go")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" file_unix"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("go")]),t._v("\n")])])]),s("h4",{attrs:{id:"_2-2-测试单元"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-测试单元"}},[t._v("#")]),t._v(" 2.2 测试单元")]),t._v(" "),s("div",{staticClass:"language-go extra-class"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[t._v("文件名_test"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("go")]),t._v("（包含 _test"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("go")]),t._v(" ）或者 文件名"),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("_")]),t._v("平台_test"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("go")]),t._v("。\n \n例： _test"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("go")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" path_test"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("go")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  path_windows_test"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("go")]),t._v("\n")])])]),s("h4",{attrs:{id:"_2-3-cpu-类型区分"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-cpu-类型区分"}},[t._v("#")]),t._v(" 2.3 CPU 类型区分")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("文件名_(平台:可选)_CPU类型\n \nCPU类型可选：amd64, none, 386, arm, arm64, mips64, s390, mips64x, ppc64x, \n \t\t\t\t\t\tnonppc64x, s390x, x86, amd64p32\n \n例：vdso_linux_amd64.go\n")])])]),s("h3",{attrs:{id:"_3-结构体命名"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-结构体命名"}},[t._v("#")]),t._v(" 3. 结构体命名")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("采用 "),s("strong",[t._v("驼峰命名法")]),t._v("，首字母根据访问控制大写或者小写。")])]),t._v(" "),s("li",[s("p",[t._v("struct 申明和初始化格式采用多行，例如下面：")])])]),t._v(" "),s("div",{staticClass:"language-go extra-class"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 多行申明")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" User "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    Username  "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),t._v("\n    Email     "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 多行初始化")]),t._v("\nuser "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" User"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    Username"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"hedon"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    Email"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"hedon@gmail.com"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h3",{attrs:{id:"_4-接口命名"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-接口命名"}},[t._v("#")]),t._v(" 4. 接口命名")]),t._v(" "),s("ul",[s("li",[t._v("命名规则基本和上面的结构体类型")]),t._v(" "),s("li",[t._v("单个函数的结构名以 “er” 作为后缀，例如 Reader , Writer 。")])]),t._v(" "),s("div",{staticClass:"language-go extra-class"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" Reader "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Read")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("p "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("byte")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("n "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" err "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("error")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h3",{attrs:{id:"_5-变量命名"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-变量命名"}},[t._v("#")]),t._v(" 5. 变量命名")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("和结构体类似，变量名称一般遵循 "),s("strong",[t._v("驼峰法")]),t._v("，首字母根据访问控制原则大写或者小写，但遇到特有名词时，需要遵循以下规则：")]),t._v(" "),s("ul",[s("li",[t._v("如果变量为私有，且特有名词为首个单词，则使用小写，如 apiClient")]),t._v(" "),s("li",[t._v("其它情况都应当使用该名词原有的写法，如 APIClient、repoID、UserID")]),t._v(" "),s("li",[s("font",{attrs:{color:"orange"}},[t._v("错误示例：UrlArray，应该写成 urlArray 或者 URLArray")])],1)])]),t._v(" "),s("li",[s("p",[t._v("若变量类型为 bool 类型，则名称应以 Has, Is, Can 或 Allow 开头")]),t._v(" "),s("div",{staticClass:"language-go extra-class"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" isExist "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("bool")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" hasConflict "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("bool")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" canManage "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("bool")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" allowGitHook "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("bool")]),t._v("\n")])])])])]),t._v(" "),s("h3",{attrs:{id:"_6-常量命名"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6-常量命名"}},[t._v("#")]),t._v(" 6. 常量命名")]),t._v(" "),s("p",[t._v("常量均需使用全部大写字母组成，并使用下划线分词：")]),t._v(" "),s("div",{staticClass:"language-go extra-class"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" APP_VERSION "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"v1.0"')]),t._v("\n")])])]),s("p",[t._v("如果是枚举类型的常量，需要先创建相应类型：")]),t._v(" "),s("div",{staticClass:"language-go extra-class"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" Scheme "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    HTTP  Scheme "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http"')]),t._v("\n    HTTPS Scheme "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h3",{attrs:{id:"_7-关键字"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_7-关键字"}},[t._v("#")]),t._v(" 7. 关键字")]),t._v(" "),s("p",[t._v("下面的列举了 Go 中的关键字。这些保留字不能用作常量或变量或任何其他标识符名称。")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("关键字")]),t._v(" "),s("th",[t._v("作用")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("var、const")]),t._v(" "),s("td",[t._v("变量和常量的声明")])]),t._v(" "),s("tr",[s("td",[t._v("package")]),t._v(" "),s("td",[t._v("声明包名")])]),t._v(" "),s("tr",[s("td",[t._v("import")]),t._v(" "),s("td",[t._v("导入包")])]),t._v(" "),s("tr",[s("td",[t._v("func")]),t._v(" "),s("td",[t._v("定义函数和方法")])]),t._v(" "),s("tr",[s("td",[t._v("return")]),t._v(" "),s("td",[t._v("用于从函数返回")])]),t._v(" "),s("tr",[s("td",[t._v("go")]),t._v(" "),s("td",[t._v("用于创建一个协程")])]),t._v(" "),s("tr",[s("td",[t._v("defer")]),t._v(" "),s("td",[t._v("在函数 return 之前或 panic 的时候执行")])]),t._v(" "),s("tr",[s("td",[t._v("select")]),t._v(" "),s("td",[t._v("用于选择不同的类型的通讯")])]),t._v(" "),s("tr",[s("td",[t._v("interface")]),t._v(" "),s("td",[t._v("用于定义接口")])]),t._v(" "),s("tr",[s("td",[t._v("struct")]),t._v(" "),s("td",[t._v("用于定义结构体")])]),t._v(" "),s("tr",[s("td",[t._v("break、case、continue、for、fallthrough、else、if、switch、goto、default")]),t._v(" "),s("td",[t._v("流程控制")])]),t._v(" "),s("tr",[s("td",[t._v("chan")]),t._v(" "),s("td",[t._v("用于 channel 通讯")])]),t._v(" "),s("tr",[s("td",[t._v("type")]),t._v(" "),s("td",[t._v("用于声明自定义类型")])]),t._v(" "),s("tr",[s("td",[t._v("map")]),t._v(" "),s("td",[t._v("用于声明 map 类型数据")])]),t._v(" "),s("tr",[s("td",[t._v("range")]),t._v(" "),s("td",[t._v("用户读取 slice、map、channel 数据")])])])]),t._v(" "),s("h2",{attrs:{id:"二、注释"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#二、注释"}},[t._v("#")]),t._v(" 二、注释")]),t._v(" "),s("p",[t._v("Go提供C风格的 "),s("code",[t._v("/* */")]),t._v(" 块注释和 C++风格的 "),s("code",[t._v("//")]),t._v(" 行注释。")]),t._v(" "),s("p",[t._v("行注释是常态；块注释主要显示为包注释，但在表达式中很有用或禁用大量代码。")]),t._v(" "),s("ul",[s("li",[t._v("单行注释是最常见的注释形式，你可以在任何地方使用以  //  开头的单行注释")]),t._v(" "),s("li",[t._v("多行注释也叫块注释，均已以  / * 开头，并以 * /  结尾，且不可以嵌套使用，多行注释一般用于包的文档描述或注释成块的代码片段")])]),t._v(" "),s("p",[t._v("Go 语言自带的 godoc 工具可以根据注释生成文档，生成可以自动生成对应的网站（ golang.org 就是使用 godoc 工具直接生成的），注释的质量决定了生成的文档的质量。")]),t._v(" "),s("p",[t._v("每个包都应该有一个包注释，在 package 子句之前有一个块注释。")]),t._v(" "),s("p",[t._v("对于多文件包，包注释只需要存在于一个文件中，任何一个都可以。包评论应该介绍包，并提供与整个包相关的信息。它将首先出现在 godoc 页面上，并应设置下面的详细文档。")]),t._v(" "),s("h3",{attrs:{id:"_1-插件推荐"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-插件推荐"}},[t._v("#")]),t._v(" 1. 插件推荐")]),t._v(" "),s("p",[t._v("首先推荐一款在 Goland IDE 上的 Go 注释插件："),s("font",{attrs:{color:"green"}},[s("strong",[t._v("Goanno")])])],1),t._v(" "),s("p",[s("img",{attrs:{src:"https://tva1.sinaimg.cn/large/008i3skNly1gsmolnljx7j314h0u0jtw.jpg",alt:"image-20210719233533684"}})]),t._v(" "),s("p",[t._v("下载该插件后，就可以使用两种方式快速生成注释：")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("Mac 上按 "),s("code",[t._v("control + command + /")])]),t._v(" "),s("p",[s("img",{attrs:{src:"https://tva1.sinaimg.cn/large/008i3skNly1gsmonhvz7cg30i90ba0u4.gif",alt:"在这里插入图片描述"}})])]),t._v(" "),s("li",[s("p",[t._v("在代码处，右键 -> Generate -> Goanno")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://tva1.sinaimg.cn/large/008i3skNly1gsmonbikasg30cj0baju5.gif",alt:"请添加图片描述"}})])])]),t._v(" "),s("p",[t._v("还可以自行修改代码的生成模板（默认为 Java 样式）：")]),t._v(" "),s("p",[t._v("选择导航栏 Tools  ->  Goanno Setting：")]),t._v(" "),s("div",{staticClass:"language-go extra-class"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ${function_name}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// @description: ${todo}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// @receiver ${receiver_name_type}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// @param ${param_name_type}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// @return ${ret_name_type}")]),t._v("\n")])])]),s("h3",{attrs:{id:"_2-包注释"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-包注释"}},[t._v("#")]),t._v(" 2. 包注释")]),t._v(" "),s("ul",[s("li",[t._v("每个包都应该有一个包注释，一个位于 package 子句之前行注释")]),t._v(" "),s("li",[t._v("包注释应该包含下面基本信息")])]),t._v(" "),s("div",{staticClass:"language-go extra-class"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Package  包名")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// @description  包描述")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// @author  作者")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// @create  创建时间")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// @update  更新时间")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("package")]),t._v(" main\n")])])]),s("h3",{attrs:{id:"_3-结构-接口注释"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-结构-接口注释"}},[t._v("#")]),t._v(" 3. 结构/接口注释")]),t._v(" "),s("p",[t._v("每个自定义的结构体或者接口都应该有注释说明，该注释对结构进行简要介绍，放在结构体定义的前一行，格式为：")]),t._v(" "),s("div",{staticClass:"language-go extra-class"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 结构名 结构体描述")]),t._v("\n")])])]),s("p",[t._v("同时结构体内的每个成员变量都要有说明，该说明放在成员变量的后面（注意对齐），实例如下：")]),t._v(" "),s("div",{staticClass:"language-go extra-class"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// User   用户对象，定义了用户的基础信息")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" User "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    Username  "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 用户名")]),t._v("\n    Email     "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 邮箱")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h3",{attrs:{id:"_4-函数-方法注释"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-函数-方法注释"}},[t._v("#")]),t._v(" 4. 函数/方法注释")]),t._v(" "),s("div",{staticClass:"language-go extra-class"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 函数名")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// @description   函数的详细描述")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// @auth      作者 ")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// @create    创建时间")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// @update \t\t修改时间")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// @param     输入参数名        参数类型         "解释"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// @return    返回参数名        参数类型         "解释"')]),t._v("\n")])])]),s("h3",{attrs:{id:"_5-代码逻辑注释"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-代码逻辑注释"}},[t._v("#")]),t._v(" 5. 代码逻辑注释")]),t._v(" "),s("p",[t._v("对于一些关键位置的代码逻辑，或者局部较为复杂的逻辑，需要有相应的逻辑说明，方便其他开发者阅读该段代码，实例如下：")]),t._v(" "),s("div",{staticClass:"language-go extra-class"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 从 Redis 中批量读取属性，对于没有读取到的 id，记录到一个数组里面，准备从 DB 中读取")]),t._v("\nxxxxx\nxxxxxxx\nxxxxxxx\n")])])]),s("h3",{attrs:{id:"_6-注释风格"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6-注释风格"}},[t._v("#")]),t._v(" 6. 注释风格")]),t._v(" "),s("p",[t._v("统一使用中文注释，对于中英文字符之间严格使用空格分隔， 这个不仅仅是中文和英文之间，英文和中文标点之间也都要使用空格分隔，例如：")]),t._v(" "),s("div",{staticClass:"language-go extra-class"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 从 Redis 中批量读取属性，对于没有读取到的 id，记录到一个数组里面，准备从 DB 中读取")]),t._v("\n")])])]),s("p",[t._v("上面 Redis 、 id 、 DB 和其他中文字符之间都是用了空格分隔")]),t._v(" "),s("ul",[s("li",[t._v("建议全部使用单行注释")]),t._v(" "),s("li",[t._v("和代码的规范一样，单行注释不要过长，最好不需要滑动才能看全")])]),t._v(" "),s("h2",{attrs:{id:"三、代码风格"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#三、代码风格"}},[t._v("#")]),t._v(" 三、代码风格")]),t._v(" "),s("h3",{attrs:{id:"_1-缩进和换行"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-缩进和换行"}},[t._v("#")]),t._v(" 1. 缩进和换行")]),t._v(" "),s("ul",[s("li",[t._v("缩进直接使用 gofmt 工具格式化即可（gofmt 是使用 tab 缩进的）")]),t._v(" "),s("li",[t._v("折行方面，一行最长不超过 120 个字符，超过的请使用换行展示，尽量保持格式优雅")])]),t._v(" "),s("p",[t._v("GoLand IDE 的话，可以设置当我们保存代码的时候自动格式化：")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://tva1.sinaimg.cn/large/008i3skNly1gsmp92fig5j314h0u0q4s.jpg",alt:"image-20210719235803888"}})]),t._v(" "),s("h3",{attrs:{id:"_2-语句的结尾"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-语句的结尾"}},[t._v("#")]),t._v(" 2. 语句的结尾")]),t._v(" "),s("p",[t._v("Go语言中是不需要类似于 Java 需要冒号结尾，默认一行就是一条数据。")]),t._v(" "),s("p",[t._v("如果你打算将多个语句写在同一行，它们之间则必须使用 "),s("strong",[t._v("“;”")]),t._v(" 分开。")]),t._v(" "),s("h3",{attrs:{id:"_3-括号和空格"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-括号和空格"}},[t._v("#")]),t._v(" 3. 括号和空格")]),t._v(" "),s("p",[t._v("括号和空格方面，也可以直接使用 gofmt 工具格式化（go 会强制左大括号不换行，换行会报语法错误），所有的运算符和操作数之间要留空格。")]),t._v(" "),s("div",{staticClass:"language-go extra-class"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 正确的方式")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" a "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" \n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 错误的方式")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" a"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// a ，0 和 > 之间应该空格")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("       "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 左大括号不可以换行，会报语法错误")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h3",{attrs:{id:"_4-import-规范"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-import-规范"}},[t._v("#")]),t._v(" 4. import 规范")]),t._v(" "),s("p",[t._v("import 在多行的情况下，goimports 会自动帮你格式化，但是我们这里还是规范一下 import 的一些规范，如果你在一个文件里面引入了一个 package，还是建议采用如下格式：")]),t._v(" "),s("div",{staticClass:"language-go extra-class"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"fmt"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("如果你的包引入了三种类型的包，标准库包，程序内部包，第三方包，建议采用如下方式进行组织你的包：")]),t._v(" "),s("div",{staticClass:"language-go extra-class"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  \n  \t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 标准库包")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"encoding/json"')]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"strings"')]),t._v("\n\t\t\n  \t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 程序内部包")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"myproject/models"')]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"myproject/controller"')]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"myproject/utils"')]),t._v("\n\t\n  \t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 第三方包")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"github.com/astaxie/beego"')]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"github.com/go-sql-driver/mysql"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("   \n")])])]),s("p",[t._v("项目中不要使用相对路径引入包：")]),t._v(" "),s("div",{staticClass:"language-go extra-class"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 这是不好的导入")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"../net"')]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 这是正确的做法")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"github.com/repo/proj/src/net"')]),t._v("\n")])])]),s("h3",{attrs:{id:"_5-错误处理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-错误处理"}},[t._v("#")]),t._v(" 5. 错误处理")]),t._v(" "),s("ul",[s("li",[t._v("错误处理的原则就是不能丢弃任何有返回 err 的调用，不要使用 _ 丢弃，必须全部处理。接收到错误，要么返回 err，或者使用 log 记录下来")]),t._v(" "),s("li",[t._v("尽早 return，一旦有错误发生，马上返回")]),t._v(" "),s("li",[t._v("尽量不要使用 panic，除非你知道你在做什么")]),t._v(" "),s("li",[t._v("错误描述如果是英文必须为小写，不需要标点结尾")]),t._v(" "),s("li",[t._v("采用独立的错误流进行处理")])]),t._v(" "),s("div",{staticClass:"language-go extra-class"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 错误写法")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" err "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("nil")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 错误处理")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 正常情况")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 正确写法")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" err "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("nil")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 错误处理")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 或者记录日志，然后继续")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 正常情况")]),t._v("\n")])])]),s("h3",{attrs:{id:"_6-测试"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6-测试"}},[t._v("#")]),t._v(" 6. 测试")]),t._v(" "),s("p",[t._v("假如该单元测试文件对应的 go 源文件是 "),s("code",[t._v("example.go")]),t._v("，那么单元测试文件名应该为为 "),s("code",[t._v("example_test.go")]),t._v("。")]),t._v(" "),s("p",[t._v("测试用例的函数名称必须以 Test_ 开头，例如 "),s("code",[t._v("example.go")]),t._v(" 中有个函数名为 "),s("code",[t._v("CallWithJSON")]),t._v("，那么对应的单元测试名称应该为 "),s("code",[t._v("Test_CallWithJSON")]),t._v("。")]),t._v(" "),s("p",[t._v("每个重要的函数都要首先编写测试用例，测试用例和正规代码一起提交方便进行回归测试。")]),t._v(" "),s("h3",{attrs:{id:"_7-常用工具"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_7-常用工具"}},[t._v("#")]),t._v(" 7. 常用工具")]),t._v(" "),s("p",[t._v("上面提到了很过规范， go 语言本身在代码规范性这方面也做了很多努力，很多限制都是强制语法要求，例如左大括号不换行，引用的包或者定义的变量不使用会报错，此外 go 还是提供了很多好用的工具帮助我们进行代码的规范，")]),t._v(" "),s("p",[s("strong",[t._v("gofmt")]),t._v("\n大部分的格式问题可以通过gofmt解决， gofmt 自动格式化代码，保证所有的 go 代码与官方推荐的格式保持一致，于是所有格式有关问题，都以 gofmt 的结果为准。")]),t._v(" "),s("p",[s("strong",[t._v("goimport")]),t._v("\n我们强烈建议使用 goimport ，该工具在 gofmt 的基础上增加了自动删除和引入包.")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("go get golang.org/x/tools/cmd/goimportsCOPY\n")])])]),s("p",[s("strong",[t._v("go vet")]),t._v("\nvet工具可以帮我们静态分析我们的源码存在的各种问题，例如多余的代码，提前return的逻辑，struct的tag是否符合标准等。")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("go get golang.org/x/tools/cmd/vetCOPY\n")])])]),s("p",[t._v("使用如下：")]),t._v(" "),s("div",{staticClass:"language-go extra-class"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("go")]),t._v(" vet "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("COPY\n")])])]),s("p",[s("strong",[t._v("Goanno")])]),t._v(" "),s("p",[t._v("方法/函数注释插件，上文有，不赘述。")])])}),[],!1,null,null,null);a.default=e.exports}}]);
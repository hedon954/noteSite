(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{428:function(s,a,t){"use strict";t.r(a);var e=t(47),n=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"golang-入门程序"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#golang-入门程序"}},[s._v("#")]),s._v(" Golang 入门程序")]),s._v(" "),t("h2",{attrs:{id:"一、golang-环境搭建-mac"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一、golang-环境搭建-mac"}},[s._v("#")]),s._v(" 一、Golang 环境搭建（Mac）")]),s._v(" "),t("p",[t("strong",[s._v("1. 下载 Golang")])]),s._v(" "),t("p",[s._v("官网：https://golang.org/")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://hedonspace.oss-cn-beijing.aliyuncs.com/img2/008i3skNly1gsmcq8yyq0j314k0men0t.jpg",alt:"image-20210719164447148"}})]),s._v(" "),t("p",[t("strong",[s._v("2. 配置环境变量")])]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("go "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("env")]),s._v(" -w "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("GOPROXY")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"https://goproxy.cn"')]),s._v("\ngo "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("env")]),s._v(" -w "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("GOSUMDB")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"sum.golang.google.cn"')]),s._v("\n")])])]),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" ~/.zshrc\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("GO111MODULE")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("on\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("GOPROXY")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("https://goproxy.cn\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("GOROOT")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/usr/local/go"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("GOPATH")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/Users/'),t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$USER")]),s._v('/go"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("GOBIN")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$GOROOT")]),s._v('/bin"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("PATH")])]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$PATH")]),s._v(":"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$GOBIN")]),s._v('"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("source")]),s._v(" ~/.zshrc\n")])])]),t("ul",[t("li",[s._v("$USER：需要改为用户名")]),s._v(" "),t("li",[s._v("Mac 在 Catalina 版本后默认的 Shell 为 "),t("code",[s._v("zsh")]),s._v("， 配置文件为 "),t("code",[s._v("~/.zshrc")]),s._v("。如果你使用的是 "),t("code",[s._v("bash")]),s._v("， 对应的配置文件为 "),t("code",[s._v("~/.bashrc")]),s._v("。 查看自己用的是哪个 shell， 执行 "),t("code",[s._v("echo $SHELL")]),s._v(" 即可")])]),s._v(" "),t("p",[t("strong",[s._v("3. 检查结果")])]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("go version\n")])])]),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("go "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("env")]),s._v("\n")])])]),t("h2",{attrs:{id:"二、hello-world"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#二、hello-world"}},[s._v("#")]),s._v(" 二、Hello World")]),s._v(" "),t("blockquote",[t("p",[s._v("本篇均使用 GO MODULE 而不使用 GO PATH。")])]),s._v(" "),t("p",[t("strong",[s._v("1. 新建一个空目录并进入该目录")])]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" goHelloWorld\n")])])]),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" goHelloWorld\n")])])]),t("p",[t("strong",[s._v("2. 执行 go mod init 初始化 go module")])]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("$ go mod init goHelloWorld\ngo: creating new go.mod: module goHelloWorld\n")])])]),t("p",[t("strong",[s._v("3. 编写 main.go 文件")])]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" main.go\n")])])]),t("div",{staticClass:"language-go extra-class"},[t("pre",{pre:!0,attrs:{class:"language-go"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("package")]),s._v(" main\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n\t"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"fmt"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("func")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("main")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\tfmt"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("Println")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Hello World!"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),t("p",[t("strong",[s._v("4. 编译 Go 项目")])]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("go build "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\n")])])]),t("p",[t("strong",[s._v("5. 执行 Go 项目")])]),s._v(" "),t("p",[s._v("可以看到编译产物 goHelloWorld：")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v(" -l\ntotal "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3976")]),s._v("\n-rw-r--r--  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" bytedance  staff       "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("29")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("19")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("16")]),s._v(":54 go.mod\n-rwxr-xr-x  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" bytedance  staff  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2023840")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("19")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("16")]),s._v(":56 goHelloWorld\n-rw-r--r--  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" bytedance  staff       "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("78")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("19")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("16")]),s._v(":55 main.go\n")])])]),t("p",[s._v("执行：")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("$ ./goHelloWorld\nHello World"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("\n")])])]),t("h2",{attrs:{id:"三、hello-world-说明"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#三、hello-world-说明"}},[s._v("#")]),s._v(" 三、Hello World 说明")]),s._v(" "),t("h3",{attrs:{id:"_1-package"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-package"}},[s._v("#")]),s._v(" 1. package")]),s._v(" "),t("div",{staticClass:"language-go extra-class"},[t("pre",{pre:!0,attrs:{class:"language-go"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("package")]),s._v(" main\n")])])]),t("ul",[t("li",[s._v("在同一个包下面的文件属于同一个工程文件，不用"),t("code",[s._v("import")]),s._v("包，可以直接使用")]),s._v(" "),t("li",[s._v("在同一个包下面的所有文件的 "),t("code",[s._v("package")]),s._v(" 名，都是一样的")]),s._v(" "),t("li",[s._v("在同一个包下面的文件 "),t("code",[s._v("package")]),s._v(" 名都建议设为是该目录名，但也可以不是")])]),s._v(" "),t("h3",{attrs:{id:"_2-import"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-import"}},[s._v("#")]),s._v(" 2. import")]),s._v(" "),t("div",{staticClass:"language-go extra-class"},[t("pre",{pre:!0,attrs:{class:"language-go"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n\t"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"fmt"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])])]),t("p",[s._v("上面代码告诉 Go 编译器这个程序需要使用 "),t("code",[s._v("fmt")]),s._v(" 包的函数，fmt 包实现了格式化 IO（输入/输出）的函数。")]),s._v(" "),t("p",[s._v("可以是相对路径也可以是绝对路径，推荐使用绝对路径（起始于工程根目录）。")]),s._v(" "),t("h3",{attrs:{id:"_3-main"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-main"}},[s._v("#")]),s._v(" 3. main")]),s._v(" "),t("div",{staticClass:"language-go extra-class"},[t("pre",{pre:!0,attrs:{class:"language-go"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("func")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("main")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\tfmt"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("Println")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Hello World!"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),t("p",[s._v("main() 程序入口，有且只有一个，且必须位于 main 包下。")]),s._v(" "),t("Vssue")],1)}),[],!1,null,null,null);a.default=n.exports}}]);
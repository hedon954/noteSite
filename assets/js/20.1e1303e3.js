(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{719:function(t,v,s){"use strict";s.r(v);var a=s(47),o=Object(a.a)({},(function(){var t=this,v=t.$createElement,s=t._self._c||v;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"go-modules"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#go-modules"}},[t._v("#")]),t._v(" Go modules")]),t._v(" "),s("h2",{attrs:{id:"一、go-modules-简介"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一、go-modules-简介"}},[t._v("#")]),t._v(" 一、Go modules 简介")]),t._v(" "),s("p",[t._v("Go modules 是 Go 语言的依赖解决方案，发布于 Go1.11，成长于 Go1.12，丰富于 Go1.13，正式于  Go1.14 推荐在生产上使用。")]),t._v(" "),s("p",[t._v("Go modules 集成在 Go 的工具集中，只要安装了 Go，就可以使用 Go modules。Go modules 的出现解决了 Go1.11 版本之前的几个常见的争议问题：")]),t._v(" "),s("ol",[s("li",[t._v("Go 语言长久以来的依赖管理问题")]),t._v(" "),s("li",[t._v("“淘汰”现有的 GOPATH 模式")]),t._v(" "),s("li",[t._v("统一社区中的其他依赖管理工具（提供迁移功能）")])]),t._v(" "),s("h2",{attrs:{id:"二、gopath-简介"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#二、gopath-简介"}},[t._v("#")]),t._v(" 二、GOPATH 简介")]),t._v(" "),s("p",[t._v("前文提到，Go modules 可“淘汰”现有的 GOPATH，什么是 GOPATH 呢？为什么不再使用 GOPATH 呢？")]),t._v(" "),s("h3",{attrs:{id:"_1-gopath-是什么"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-gopath-是什么"}},[t._v("#")]),t._v(" 1. GOPATH 是什么")]),t._v(" "),s("p",[t._v("执行：")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("$ go "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("env")]),t._v(" GOPATH\n/Users/bytedance/go\n")])])]),s("p",[t._v("查看 GOPATH 结构：")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("├── bin\n├── pkg\n└── src\n\t\t└── github.com\n\t\t└── golang.org\n\t\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".\n")])])]),s("p",[t._v("GOPATH 目录下一共有 3 个子目录，分别是：")]),t._v(" "),s("ul",[s("li",[t._v("bin：存储所有编译生成的二进制文件")]),t._v(" "),s("li",[t._v("pkg：存储预编译的目标文件，以加快程序的后续编译速度")]),t._v(" "),s("li",[t._v("src：存储所有 .go 文件或源代码。在编写 Go 应用程序、程序包和库时，一般会以 $GOAPTH/src/github.com/foo/bar 路径进行存放")])]),t._v(" "),s("p",[t._v("因此在 GOPATH 模式下，我们需要将应用代码存放在固定的 $GOPATH/src 目录下，并且如果执行 go get 来拉取外部依赖，会自动下载并安装到 $GOPATH 目录下。")]),t._v(" "),s("h3",{attrs:{id:"_2-为什么弃用-gopath-模式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-为什么弃用-gopath-模式"}},[t._v("#")]),t._v(" 2. 为什么弃用  GOPATH 模式")]),t._v(" "),s("p",[t._v("当在 GOPATH 的 $GOPATH/src 下存储 .go 文件或源代码时，就可以称其为 GOPATH 模式。这个模式看起来好像没有什么问题，为什么要弃用呢？原因如下：")]),t._v(" "),s("ul",[s("li",[t._v("GOPATH 模式下没有版本控制的概念，具有致命的缺陷，通常会造成以下问题：\n"),s("ol",[s("li",[t._v("在执行 go get 时，无法传达任何的版本信息。也就是说，我们并不知道当前更新的是哪一个版本，因此无法拉取所期望的具体版本。")]),t._v(" "),s("li",[t._v("在运行 Go 应用程序时，无法保证其他人与我们所期望的第三方库的版本是一致的。也就是说，在项目依赖库的管理上，无法保证所有人的依赖版本都是一致的。")]),t._v(" "),s("li",[t._v("无法处理 v1、v2、v3 等不同版本的引用问题，因为在 GOPATH 模式下，导入路径是一样的，都是 github.com/foo/bar。")])])])]),t._v(" "),s("p",[t._v("Go 语言官网从 Go1.11 其开始推进 Go modules（前身 vgo），从 Go1.13 起不再推荐使用 GOPATH 模式。")]),t._v(" "),s("h2",{attrs:{id:"三、go-modules-基本使用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#三、go-modules-基本使用"}},[t._v("#")]),t._v(" 三、Go modules 基本使用")]),t._v(" "),s("h3",{attrs:{id:"_1-go-modules-命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-go-modules-命令"}},[t._v("#")]),t._v(" 1. Go modules 命令")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("命令"),s("img",{attrs:{width:"200/"}})]),t._v(" "),s("th",[t._v("作用")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("go mod init")]),t._v(" "),s("td",[t._v("初始化 Go modules 项目，生成 go.mod 文件")])]),t._v(" "),s("tr",[s("td",[t._v("go mod download")]),t._v(" "),s("td",[t._v("下载 go.mod 文件下指明的所有依赖")])]),t._v(" "),s("tr",[s("td",[t._v("go mod tidy")]),t._v(" "),s("td",[t._v("整理现有依赖，下载没有的依赖，清除不需要的依赖")])]),t._v(" "),s("tr",[s("td",[t._v("go mod graph")]),t._v(" "),s("td",[t._v("查看现有依赖结构")])]),t._v(" "),s("tr",[s("td",[t._v("go mod edit")]),t._v(" "),s("td",[t._v("编辑 go.mod 文件")])]),t._v(" "),s("tr",[s("td",[t._v("go mod vender")]),t._v(" "),s("td",[t._v("导出项目所有的依赖到 vender 目录")])]),t._v(" "),s("tr",[s("td",[t._v("go mod verify")]),t._v(" "),s("td",[t._v("校验一个模块是否被篡改过")])]),t._v(" "),s("tr",[s("td",[t._v("go mod why")]),t._v(" "),s("td",[t._v("查看为什么需要依赖某模块")])])])]),t._v(" "),s("h3",{attrs:{id:"_2-go-modules-环境变量"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-go-modules-环境变量"}},[t._v("#")]),t._v(" 2. Go modules 环境变量")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("$ go "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("env")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("GO111MODULE")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"on"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("GOPROXY")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://proxy.golang.org,direct"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("GONOPROXY")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("GOSUMDB")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"sum.golang.org"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("GONOSUMDB")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("GOPRIVATE")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".\n")])])]),s("h4",{attrs:{id:"_2-1-go111module"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-go111module"}},[t._v("#")]),t._v(" 2.1 GO111MODULE")]),t._v(" "),s("blockquote",[s("p",[t._v("GO111MODULE 是 Go modules 功能的开关。")])]),t._v(" "),s("ul",[s("li",[s("p",[t._v("GO111MODULE=off")]),t._v(" "),s("p",[t._v("无模块支持，go 命令行将不会支持 Go modules 功能，寻找依赖包的方式将会沿用旧版本那种通过 vendor 目录或者 GOPATH 模式来查找。")])]),t._v(" "),s("li",[s("p",[t._v("GO111MODULE=on")]),t._v(" "),s("p",[t._v("使用 Go modules，不会去 GOPATH 目录下查找。")])]),t._v(" "),s("li",[s("p",[t._v("GO111MODULE=auto")]),t._v(" "),s("p",[t._v("默认值，只要项目包含 go.mod 文件，就启用 Go modules。")])])]),t._v(" "),s("h4",{attrs:{id:"_2-2-goproxy"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-goproxy"}},[t._v("#")]),t._v(" 2.2 GOPROXY")]),t._v(" "),s("blockquote",[s("p",[t._v("GOPROXY 主要作用是设置 Go 模块代理（Go module proxy），使 Go 在后续拉取模块版本时能够脱离传统的 VCS 方式，直接通过镜像站点快速拉取。")])]),t._v(" "),s("p",[t._v("GOPROXY 的默认值是 "),s("code",[t._v("http://proxy.golang.org,direct")]),t._v("，因为 proxy.golang.org 在国内是无法访问的，所以在开启 Go modules 时，必须同时设置国内的 Go 模块代理，执行如下命令：")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("go "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("env")]),t._v(" -w "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("GOPROXY")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("https://goproxx.cn,direct\n")])])]),s("p",[t._v("GOPROXY 的值是一个以英文逗号 “,” 分隔的 Go 模块代理列表，允许设置多个模块代理。如果不想使用，也可以将其设置为 “off”，这样会禁止 Go 在后续操作中使用任何的 Go 模块代理。")]),t._v(" "),s("blockquote",[s("p",[s("strong",[t._v("direct")])]),t._v(" "),s("p",[t._v("direct 是一个特殊指示符，用户指示 Go 回到模块版本的源地址去抓取（比如 Github 等）。")]),t._v(" "),s("p",[t._v("场景如下：当值列表中上一个 Go 模块代理返回 404 或 410 错误时，Go 自动尝试列表中的下一个，当遇到 direct 时会回到源地址去抓取，在遇到 EOF 时终止并抛出类似 “invalid version: unknown revision...” 的错误。")])]),t._v(" "),s("h4",{attrs:{id:"_2-3-gosumdb"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-gosumdb"}},[t._v("#")]),t._v(" 2.3 GOSUMDB")]),t._v(" "),s("blockquote",[s("p",[t._v("GOSUMDB 的值是一个 Go checksum database，在拉取模块版本时（无论从源站拉取，还是通过 GOPROXY 拉取），保证拉取的模块版本数据未经过篡改，若发现不一致，即可能存在篡改，则会立即中止。")])]),t._v(" "),s("p",[t._v("GOSUMDB 是默认值为 sum.golang.org。在国内是无法访问的，但是 GOSUMDB 可以被 Go 模块代理。因此可以通过设置 GOPROXY 来解决。先前我们所设置的模块代理 goproxy.cn 同样支持代理 sum.golang.org，所在在设置 GOPROXY 之后，无需过度关心该问题。")]),t._v(" "),s("p",[t._v("另外，若对 GOSUMDB 的值有自定义的需求，则可以使用如下格式：")]),t._v(" "),s("ol",[s("li",[t._v("格式一：<SUMDB_NAME>+<PUBLIC_KEY>")]),t._v(" "),s("li",[t._v("格式二：<SUBDB_NAME>+<PUBLIC_KEY><SUMDB_URL>")])]),t._v(" "),s("p",[t._v("也可以将其设置为 “off”，禁止 Go 在后续操作中校验模块版本。")]),t._v(" "),s("h4",{attrs:{id:"_2-4-gonosumdb-gonoproxy-goprivate"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-gonosumdb-gonoproxy-goprivate"}},[t._v("#")]),t._v(" 2.4 GONOSUMDB/GONOPROXY/GOPRIVATE")]),t._v(" "),s("p",[t._v("当当前项目依赖了私有模块后，就需要设置 GONOSUMDB、GONOPROXY 和 GOPRIVATE 这三个环境变量。公司的私有 git 仓库和 Github 中的私有库都是属于私有模块，需要进行设置，否则会拉取失败。")]),t._v(" "),s("p",[t._v("一般建议直接设置 GOPRIVATE，它的值将会作为 GONOPROXY 和 GONOSUMDB 的默认值。")]),t._v(" "),s("p",[t._v("它们的值都是一个以英文逗号 “,” 分隔的模块路径前缀，即可设置多个，如下：")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("go "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("env")]),t._v(" -w "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("GOPRIVATE")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"git.xxx.com,github.com/hedon/test"')]),t._v("\n")])])]),s("p",[t._v('在设置后，前缀为 "git.xxx.com" 和 “github.com/hedon/test” 的模块会被认为是私有模块。')]),t._v(" "),s("p",[t._v("如果不想每次都重新设置，则可以利用通配符，如：")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("go "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("env")]),t._v(" -w "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("GOPRIVATE")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"*.example.com"')]),t._v("\n")])])]),s("p",[t._v("这样设置或，所有模块路径为 example.com 子域名（如 git.example.com）都将不经过 GOPROXY 和 GOSUMDB，需要注意的是，"),s("strong",[t._v("这不包括 example.com 本身")]),t._v("。")]),t._v(" "),s("h2",{attrs:{id:"四、go-mod-文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#四、go-mod-文件"}},[t._v("#")]),t._v(" 四、go.mod 文件")]),t._v(" "),s("blockquote",[s("p",[t._v("go.mod 描述了当前项目（即当前模块）的元信息。")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("module my/thing\ngo 1.12\nrequire other/thing v1.0.2 \nrequire new/thing/v2 v2.3.4 // indirect\nrequire（\n  new/thing v2.3.4\n  old/thing v0.0.0-20190603091049-60506f45cf65\n）\nexclude old/thing v1.2.3\nreplace bad/thing v1.4.5 => good/thing v1.4.5\n")])])]),s("p",[t._v("go.mod 文件是面向行的，当前模块（主模块）通常位于第一行，接下来是根据路径排序的依赖项。")]),t._v(" "),s("p",[t._v("每行包含一个指令，由一个前导动词后跟参数组成。")]),t._v(" "),s("p",[t._v("所有前导动词的作用如下：")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("module")]),t._v("：定义模块路径")]),t._v(" "),s("li",[s("code",[t._v("go")]),t._v("：设置预期的语言版本")]),t._v(" "),s("li",[s("code",[t._v("require")]),t._v("：要求给定版本或更高版本的特定模块")]),t._v(" "),s("li",[s("code",[t._v("exclude")]),t._v("：排除特定版本模块的使用，不允许的模块版本被视为不可用，并且查询无法返回")]),t._v(" "),s("li",[s("code",[t._v("replace")]),t._v("：使用不同的模块版本替换原有模块版本")])]),t._v(" "),s("p",[t._v("前导动词还可以按"),s("strong",[t._v("块")]),t._v("的方式使用，用括号创建一个块（第 5-8 行）。")]),t._v(" "),s("p",[t._v("注释（第 4 行）可以使用单行 "),s("code",[t._v("// 注释")]),t._v("  来进行注释，但不能使用多行 "),s("code",[t._v("/* 注释 */")]),t._v(" 注释。而 "),s("code",[t._v("indirect")]),t._v(" 注释（第 4 行）标记了该模块不是被当前模块直接导入的，只是被间接导入。")]),t._v(" "),s("p",[t._v("go.mod 文件只存在于在模块的根目录下，子目录中的导入路径会使用 "),s("strong",[t._v("模块的导入路径 + 子目录路径")]),t._v(" 的形式。例如：如果创建了一个名叫 world 的子目录，并不需要在子目录中使用  "),s("code",[t._v("go mod init")]),t._v("  命令，Go 命令行工具会自动识别它作为 hello 模块的一部分，所以它的导入路径为 hello/world。")]),t._v(" "),s("p",[t._v("Go 命令行工具会自动处理 go.mod 中指定的模块版本。当源代码中 "),s("code",[t._v("import")]),t._v(" 指向的模块不存在于 go.mod 文件中时，Go 命令行工具会自动搜索这个模块，并将最新版本（最后一个 tag 且非预发布的稳定版本）添加到 go.mod 文件中。")]),t._v(" "),s("p",[t._v("如果没有 tag，则使用"),s("strong",[t._v("伪版本")]),t._v("（第 7 行），这是一种版本语法，专门用于标记没有 tag 的提交（一些 golang.org/x/ 下的包就是没有 tag 的）。")]),t._v(" "),s("p",[t._v("如："),s("code",[t._v("v0.0.0-20190603091049-60506f45cf65")]),t._v("。")]),t._v(" "),s("ul",[s("li",[t._v("前面部分为语义化版本号，用于标记版本")]),t._v(" "),s("li",[t._v("中间部分为 UTC 的提交时间，用于比较两个伪版本以其确定先后顺序")]),t._v(" "),s("li",[t._v("后面部分是 commit 哈希的前缀，用于标记该版本位于哪个 commit")])]),t._v(" "),s("h2",{attrs:{id:"五、go-sum-文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#五、go-sum-文件"}},[t._v("#")]),t._v(" 五、go.sum 文件")]),t._v(" "),s("blockquote",[s("p",[t._v("go.sum 罗列了当前项目直接或间接依赖的所有模块版本，并写明了模块版本的 SHA-256 hash 值，以保证在今后的操作中项目所依赖的那些模块版本不会被篡改。")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("github.com/davecgh/go-spew v1.1.0 h1:ZDRjVQ15GmhC3fiQ8ni8+OwkZQO4DARzQgrnXU1Liz8=\ngithub.com/davecgh/go-spew v1.1.0/go.mod h1:J7Y8YcW2NihsgmVo/mv3lAwl/skON4iLHjSsI+c5H38=\ngithub.com/gin-gonic/gin v1.4.0 h1:3tMoCCfM7ppqsR0ptz/wi1impNpT7/9wQtMZ8lr1mCQ=\ngithub.com/gin-gonic/gin v1.4.0/go.mod h1:OW2EZn3DO8Ln9oIKOvM++LBO+5UPHJJDH72/q/3rZdM=\ngithub.com/golang/protobuf v1.3.1 h1:YF8+flBXS5eO826T4nzqPrxfhQThhXl0YzfuUPu4SBg=\ngithub.com/golang/protobuf v1.3.1/go.mod h1:6lQm79b+lXiMfvg/cZm0SGofjICqVBUtrP5yJMmIC1U=\n")])])]),s("p",[t._v("每行由模块导入路径、模块的特定版本和预期哈希组成。")]),t._v(" "),s("p",[t._v("在每次缺少模块时，如果缓存中不存在，则需要下载并计算其哈希添加到 go.sum 中；如果缓存中存在，则需要匹配 go.sum 中的已有条目。")]),t._v(" "),s("p",[t._v("这样，构建软件的用户就可以使用哈希验证其构建是否跟你的构建相同（"),s("code",[t._v("go mod verify")]),t._v("），而无论他们怎样获取依赖项，都可以得到相同的版本。同时也保证了项目依赖不会发生预料之外的恶意修改和其他问题。这也是为什么要将 go.sum 文件加入版本管理（Git）的原因。")]),t._v(" "),s("p",[t._v("再加上 Go Modules 选择的是"),s("strong",[t._v("最小版本选择")]),t._v("策略（默认使用构建中涉及的每个模块的最旧允许版本，使得新版本的发布对构建没有影响）就可以实现可重现的构建（在重复构建时产生相同的结果）。")]),t._v(" "),s("blockquote",[s("p",[s("strong",[t._v("go.sum 文件要不要提交到 Git 仓库中？")])]),t._v(" "),s("p",[t._v("理论上 go.mod 和 go.sum 文件都应该提交到你的 Git 仓库中去。")]),t._v(" "),s("p",[t._v("假设我们不上传 go.sum 文件，就会造成每个人执行 Go modules 相关命令，又会生成新的一份 go.sum，也就是会重新到上游拉取，再拉取时有可能就是被篡改过的了，会有很大的安全隐患，失去了与基准版本（第一个所提交的人，所期望的版本）的校验内容，因此 go.sum文件是需要提交。")])]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("Go 1.16 变化")]),t._v(" "),s("p",[t._v("Go 1.16 后，go build/run 命令不再自动更新 go.mod 和 go.sum。")])]),t._v(" "),s("h2",{attrs:{id:"六、go-modules-下的-go-get"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#六、go-modules-下的-go-get"}},[t._v("#")]),t._v(" 六、Go modules 下的 go get")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("拉取最新的版本（优先择取 tag）")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("go get golang.org/x/text@latest\n")])])])]),t._v(" "),s("li",[s("p",[t._v("拉取 master 分支的最新 commit")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("go get golang.org/x/text@master\n")])])])]),t._v(" "),s("li",[s("p",[t._v("拉取 tag 为 v0.3.2 的 commit")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("go get golang.org/x/text@v0.3.2\n")])])])]),t._v(" "),s("li",[s("p",[t._v("拉取 hash 为 342b231 的 commit，最终会被转换为其对应的 tag 号")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("go get golang.org/x/text@342b2e\n")])])])]),t._v(" "),s("li",[s("p",[t._v("拉取指定版本，如指定版本 v3")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("go get github.com/smartwalle/alipay/v3\n")])])])]),t._v(" "),s("li",[s("p",[t._v("更新")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("go get -u\n")])])])])]),t._v(" "),s("h2",{attrs:{id:"七、go-modules-的导入路径说明"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#七、go-modules-的导入路径说明"}},[t._v("#")]),t._v(" 七、Go modules 的导入路径说明")]),t._v(" "),s("h3",{attrs:{id:"_1-不同版本的导入路径"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-不同版本的导入路径"}},[t._v("#")]),t._v(" 1. 不同版本的导入路径")]),t._v(" "),s("p",[t._v("Go modules 在主版本号为 v0 和 v1 的情况下省略了版本号，而在主版本号为 v2 及以上时则需要明确指定主版本号，否则会出现冲突，其 tag 与模块导入路径的大致对应关系如下：")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("tag")]),t._v(" "),s("th",[t._v("模块导入路径")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("v0.0.0")]),t._v(" "),s("td",[t._v("github.com/hedon/test")])]),t._v(" "),s("tr",[s("td",[t._v("v1.0.0")]),t._v(" "),s("td",[t._v("github.com/hedon/test")])]),t._v(" "),s("tr",[s("td",[t._v("v2.0.0")]),t._v(" "),s("td",[t._v("github.com/hedon/test/v2")])]),t._v(" "),s("tr",[s("td",[t._v("v3.0.0")]),t._v(" "),s("td",[t._v("github.com/hedon/test/v3")])])])]),t._v(" "),s("p",[t._v("引入格式：")]),t._v(" "),s("div",{staticClass:"language-go extra-class"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"github.com/hedon/test/v3/example"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("另外，忽略主版本号 v0 和 v1 是强制性的（不是可选项），因此每个软件包只有一个明确且规范的导入路径。")]),t._v(" "),s("blockquote",[s("p",[s("strong",[t._v("为什么要忽略 v0 和 v1？")])]),t._v(" "),s("ol",[s("li",[t._v("在导入路径中忽略 v1 版本号的原因是：官方鼓励开发人员一旦创建到 v1 版本便永不改变的软件包。所有开发人员在发布 v2 版本时会被迫拥有明确的 v1 版本尾缀，从而导致 v1 版本变成“噪声”而无意义。")]),t._v(" "),s("li",[t._v("在导入路径中忽略 v0 版本号的原因是：根据语义化版本规范，v0 的这些版本完全没有兼容性保证，一个显式的 v0 版本的表示对确保兼容性没有多大帮助。")])])]),t._v(" "),s("h2",{attrs:{id:"八、go-modules-的语义化版本控制"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#八、go-modules-的语义化版本控制"}},[t._v("#")]),t._v(" 八、Go modules 的语义化版本控制")]),t._v(" "),s("p",[t._v("什么是 "),s("strong",[t._v("语义化版本")]),t._v(" ？语义化版本是一套由 Gravatars 创办者兼 GitHub 共同创办者 Tom Preston-Werner 所建立的约定。在这套约定下，语义化版本号及其更新方式包含了很多有用的信息。")]),t._v(" "),s("p",[t._v("语义化版本号格式为："),s("code",[t._v("X.Y.Z")]),t._v("（主版本号.次版本号.修订号），使用方法如下：")]),t._v(" "),s("ul",[s("li",[t._v("递增主版本号：进行不兼容的 API 修改")]),t._v(" "),s("li",[t._v("递增次版本号：API 保持向下兼容的新增及修改")]),t._v(" "),s("li",[t._v("递增修订号：修复问题但不影响 API")])]),t._v(" "),s("p",[t._v("举个例子，有一个语义化版本号为："),s("code",[t._v("v0.1.2")]),t._v("，则其主版本号为 0，次版本为 1，修订号为 2。而前面的 "),s("code",[t._v("v")]),t._v(" 是 version（版本）的首字母，是 Go 语言惯例使用的，标准的语义化版本没有这个约定。")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://tva1.sinaimg.cn/large/008i3skNly1gsmhml9c3nj31p20kaq3o.jpg",alt:"image-20210719193416578"}})]),t._v(" "),s("p",[t._v("假设是先行版本号或特殊情况，则可以将版本信息追加到主版本号.次版本号.修订号的后面作为延伸，如下图所示：")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://tva1.sinaimg.cn/large/008i3skNly1gsmhocd86kj320g0kajsf.jpg",alt:"image-20210719193557128"}})]),t._v(" "),s("p",[t._v("所以在使用 Go 命令行工具或 go.mod 文件时，就可以使用语义化版本号来进行"),s("strong",[t._v("模块查询")]),t._v("，具体规则如下：")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("默认值（"),s("code",[t._v("@latest")]),t._v("）：将匹配最新的可用标签版本或源码库的最新未标签版本。")])]),t._v(" "),s("li",[s("p",[t._v("完全指定版本（"),s("code",[t._v("@v1.2.3")]),t._v("）：将匹配该指定版本。")])]),t._v(" "),s("li",[s("p",[t._v("版本前缀（"),s("code",[t._v("@v1")]),t._v(" 或 "),s("code",[t._v("@v1.2")]),t._v("）：将匹配具有该前缀的最新可用标签版本。")])]),t._v(" "),s("li",[s("p",[t._v("版本比较（"),s("code",[t._v("@<v1.2.3")]),t._v(" 或 "),s("code",[t._v("@>=v1.5.6")]),t._v("）：将匹配最接近比较目标的可用标签版本。")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("<")]),t._v(" 则为小于该版本的最新版本")]),t._v(" "),s("li",[s("code",[t._v(">")]),t._v(" 则为大于该版本的最旧版本")])]),t._v(" "),s("p",[t._v("当使用类 Unix 系统时，需用引号将字符串包裹起来以防止大于小于号被解释为重定向。")]),t._v(" "),s("p",[t._v("如："),s("code",[t._v("go get 'github.com/gin-gonic/gin@<v1.2.3'")])])]),t._v(" "),s("li",[s("p",[t._v("指定某个 commit（"),s("code",[t._v("@c856192")]),t._v("）：将匹配该 commit 时的版本。")])]),t._v(" "),s("li",[s("p",[t._v("指定某个分支（"),s("code",[t._v("@master")]),t._v("）：将匹配该分支版本。")])])]),t._v(" "),s("h2",{attrs:{id:"九、go-modules-的最小版本选择"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#九、go-modules-的最小版本选择"}},[t._v("#")]),t._v(" 九、Go modules 的最小版本选择")]),t._v(" "),s("p",[t._v("现在我们已经有一个模块，也有发布的 tag，但是一个模块往往依赖着许多其它许许多多的模块，并且不同的模块在依赖时很有可能会出现依赖同一个模块的不同版本，如下图（来自 Russ Cox）：")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://tva1.sinaimg.cn/large/008i3skNly1gsmhqcjl1bj31z00ha75q.jpg",alt:"image-20210719193753005"}})]),t._v(" "),s("p",[t._v("在上述依赖中，模块 A 依赖了模块 B 和模块 C，而模块 B 依赖了模块 D，模块 C 依赖了模块 D 和 F，模块 D 又依赖了模块 E，而且同模块的不同版本还依赖了对应模块的不同版本。那么这个时候 Go modules 怎么选择版本，选择的是哪一个版本呢？")]),t._v(" "),s("p",[t._v("实际上，Go modules 会把每个模块的依赖版本清单都整理出来，最终得到一个构建清单，如下图（来自 Russ Cox）：")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://tva1.sinaimg.cn/large/008i3skNly1gsmhrjtdmjj31x40jkab2.jpg",alt:"image-20210719193902191"}})]),t._v(" "),s("p",[t._v("我们看到 rough list 和 final list，两者的区别在于重复引用的模块 D（v1.3、v1.4），其最终清单选用了模块 D 的 v1.4 版本，主要原因：")]),t._v(" "),s("ol",[s("li",[t._v("语义化版本的控制：因为模块 D 的 v1.3 和 v1.4 版本变更，都属于次版本号的变更，而在语义化版本的约束下，v1.4 必须是要向下兼容 v1.3 版本，因此认为不存在破坏性变更，也就是兼容的。")]),t._v(" "),s("li",[t._v("模块导入路径的规范：主版本号不同，模块的导入路径不一样，因此若出现不兼容的情况，其主版本号会改变，模块的导入路径自然也就改变了，因此不会与第一点的基础相冲突。")])]),t._v(" "),s("Vssue")],1)}),[],!1,null,null,null);v.default=o.exports}}]);
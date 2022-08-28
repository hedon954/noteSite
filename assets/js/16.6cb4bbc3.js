(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{427:function(t,a,s){"use strict";s.r(a);var e=s(47),o=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"go-命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#go-命令"}},[t._v("#")]),t._v(" go 命令")]),t._v(" "),s("div",{staticClass:"language-text extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('Go is a tool for managing Go source code.\n\nUsage:\n\n\tgo <command> [arguments]\n\nThe commands are:\n\n\tbug         start a bug report\n\tbuild       compile packages and dependencies\n\tclean       remove object files and cached files\n\tdoc         show documentation for package or symbol\n\tenv         print Go environment information\n\tfix         update packages to use new APIs\n\tfmt         gofmt (reformat) package sources\n\tgenerate    generate Go files by processing source\n\tget         add dependencies to current module and install them\n\tinstall     compile and install packages and dependencies\n\tlist        list packages or modules\n\tmod         module maintenance\n\trun         compile and run Go program\n\ttest        test packages\n\ttool        run specified go tool\n\tversion     print Go version\n\tvet         report likely mistakes in packages\n\nUse "go help <command>" for more information about a command.\n')])])]),s("h2",{attrs:{id:"一、通用选项"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一、通用选项"}},[t._v("#")]),t._v(" 一、通用选项")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("可选项")]),t._v(" "),s("th",[t._v("作用")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("-a")]),t._v(" "),s("td",[t._v("用于强制重新编译所有涉及的 Go 语言代码包（包括 Go 语言标准库中的代码包），即使它们已经是最新的了。该标记可以让我们有机会通过改动底层的代码包做一些实验。")])]),t._v(" "),s("tr",[s("td",[t._v("-n")]),t._v(" "),s("td",[t._v("使命令仅打印其执行过程中用到的所有命令，而不去真正执行它们。如果只想查看或者验证命令的执行过程，而不想改变任何东西，使用它正好合适。")])]),t._v(" "),s("tr",[s("td",[t._v("-race"),s("img",{attrs:{width:"200/"}})]),t._v(" "),s("td",[t._v("用于检测并报告指定 Go 语言程序中存在的数据竞争问题。当用 Go 语言编写并发程序的时候，这是很重要的检测手段之一。")])]),t._v(" "),s("tr",[s("td",[t._v("-v")]),t._v(" "),s("td",[t._v("用于打印命令执行过程中涉及的代码包。这一定包括我们指定的目标代码包，并且有时还会包括该代码包直接或间接依赖的那些代码包。这会让你知道哪些代码包被执行过了。")])]),t._v(" "),s("tr",[s("td",[t._v("-work"),s("img",{attrs:{width:"200/"}})]),t._v(" "),s("td",[t._v("用于打印命令执行时生成和使用的临时工作目录的名字，且命令执行完成后不删除它。这个目录下的文件可能会对你有用，也可以从侧面了解命令的执行过程。如果不添加此标记，那么临时工作目录会在命令执行完毕前删除。")])]),t._v(" "),s("tr",[s("td",[t._v("-x")]),t._v(" "),s("td",[t._v("使命令打印其执行过程中用到的所有命令，并同时执行它们。")])])])]),t._v(" "),s("h2",{attrs:{id:"二、go-run"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#二、go-run"}},[t._v("#")]),t._v(" 二、go run")]),t._v(" "),s("blockquote",[s("p",[t._v("go run 专门用来运行命令源码文件。")]),t._v(" "),s("p",[s("strong",[t._v("注意，这个命令不是用来运行所有 Go 的源码文件的！")])])]),t._v(" "),s("p",[s("code",[t._v("go run")]),t._v("  命令只能接受一个命令源码文件以及若干个库源码文件（必须同属于 main 包）作为文件参数，且"),s("strong",[t._v("不能接受测试源码文件")]),t._v("。它在执行时会检查源码文件的类型。如果参数中有多个或者没有命令源码文件，那么 "),s("code",[t._v("go run")]),t._v("  命令就只会打印错误提示信息并退出，而不会继续执行。")]),t._v(" "),s("p",[t._v("下面来看看 "),s("code",[t._v("go run")]),t._v("  做了什么：")]),t._v(" "),s("p",[s("strong",[t._v("1. 准备如下代码")]),t._v(" "),s("code",[t._v("main.go")]),t._v("：")]),t._v(" "),s("div",{staticClass:"language-go extra-class"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("package")]),t._v(" main\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"fmt"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tfmt"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Println")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hello World!"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\tfmt"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Println")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Test go run"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[s("strong",[t._v("2. go run 配合 -n")])]),t._v(" "),s("p",[t._v("执行：")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("go run -n main.go\n")])])]),s("p",[t._v("输出：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("#\n# command-line-arguments\n#\n\nmkdir -p $WORK/b001/\ncat >$WORK/b001/_gomod_.go << 'EOF' # internal\npackage main\nimport _ \"unsafe\"\n//go:linkname __debug_modinfo__ runtime.modinfo\nvar __debug_modinfo__ = \"0w\\xaf\\f\\x92t\\b\\x02A\\xe1\\xc1\\a\\xe6\\xd6\\x18\\xe6path\\tcommand-line-arguments\\nmod\\tgoHelloWorld\\t(devel)\\t\\n\\xf92C1\\x86\\x18 r\\x00\\x82B\\x10A\\x16\\xd8\\xf2\"\nEOF\ncat >$WORK/b001/importcfg << 'EOF' # internal\n# import config\npackagefile fmt=/usr/local/go/pkg/darwin_amd64/fmt.a\npackagefile runtime=/usr/local/go/pkg/darwin_amd64/runtime.a\nEOF\ncd /Users/bytedance/goHelloWorld\n/usr/local/go/pkg/tool/darwin_amd64/compile -o $WORK/b001/_pkg_.a -trimpath \"$WORK/b001=>\" -p main -lang=go1.16 -complete -buildid n6gyFYLsk3XgS57M4INh/n6gyFYLsk3XgS57M4INh -dwarf=false -goversion go1.16.4 -D _/Users/bytedance/goHelloWorld -importcfg $WORK/b001/importcfg -pack -c=4 ./main.go $WORK/b001/_gomod_.go\n/usr/local/go/pkg/tool/darwin_amd64/buildid -w $WORK/b001/_pkg_.a # internal\ncat >$WORK/b001/importcfg.link << 'EOF' # internal\npackagefile command-line-arguments=$WORK/b001/_pkg_.a\n....\npackagefile path=/usr/local/go/pkg/darwin_amd64/path.a\nEOF\nmkdir -p $WORK/b001/exe/\ncd .\n/usr/local/go/pkg/tool/darwin_amd64/link -o $WORK/b001/exe/main -importcfg $WORK/b001/importcfg.link -s -w -buildmode=exe -buildid=YVAr2monG5TnrAB0h8HG/n6gyFYLsk3XgS57M4INh/n6gyFYLsk3XgS57M4INh/YVAr2monG5TnrAB0h8HG -extld=clang $WORK/b001/_pkg_.a\n$WORK/b001/exe/main\n")])])]),s("p",[t._v("这里可以看到创建了两个临时文件夹 "),s("strong",[t._v("b001")]),t._v(" 和 "),s("strong",[t._v("exe")]),t._v("，先执行了 "),s("code",[t._v("compile")]),t._v(" 命令，然后 "),s("code",[t._v("link")]),t._v("，生成了归档文件 "),s("strong",[t._v("_pkg_.a")]),t._v(" 和 "),s("strong",[t._v("最终可执行文件")]),t._v(" ，最终的可执行文件放在 "),s("strong",[t._v("exe")]),t._v(" 文件夹里面。命令的最后一步就是执行了可执行文件。")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://tva1.sinaimg.cn/large/008i3skNly1gsmdlk0wpjj30rm0hp751.jpg",alt:"img"}})]),t._v(" "),s("p",[s("strong",[t._v("3. go run 配合 -work")])]),t._v(" "),s("p",[t._v("举个例子，生成的临时文件可以用 "),s("code",[t._v("go run -work")]),t._v(" 看到，比如当前生成的临时文件夹是如下的路径：")]),t._v(" "),s("p",[t._v("执行：")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("go run -work main.go\n")])])]),s("p",[t._v("输出：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("WORK=/var/folders/cg/0cgg4vd9495c_n3dxvv_df8w0000gp/T/go-build3905178702\nHello World!\nTest go run\n")])])]),s("p",[t._v("进入临时文件夹：")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" /var/folders/cg/0cgg4vd9495c_n3dxvv_df8w0000gp/T/go-build3905178702\n")])])]),s("p",[t._v("查看目录结构：")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("$ tree\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v("\n└── b001\n    ├── _gomod_.go\n    ├── _pkg_.a\n    ├── exe\n    │   └── main\n    ├── importcfg\n    └── importcfg.link\n")])])]),s("p",[t._v("可以看到，最终"),s("code",[t._v("go run")]),t._v("命令是生成了 2 个文件")]),t._v(" "),s("ul",[s("li",[t._v("一个是归档文件 _pkg_.a")]),t._v(" "),s("li",[t._v("一个是可执行文件 main")])]),t._v(" "),s("p",[s("code",[t._v("go run")]),t._v(" 命令在第二次执行的时候，如果发现导入的代码包没有发生变化，那么 "),s("code",[t._v("go run")]),t._v(" 不会再次编译这个导入的代码包。直接静态链接进来。")]),t._v(" "),s("h2",{attrs:{id:"三、go-build"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#三、go-build"}},[t._v("#")]),t._v(" 三、go build")]),t._v(" "),s("blockquote",[s("p",[t._v("go build 命令主要是用于测试编译。在包的编译过程中，若有必要，会同时编译与之相关联的包。")])]),t._v(" "),s("ol",[s("li",[t._v("如果是普通包，当你执行 "),s("code",[t._v("go build")]),t._v("命令后，不会产生任何文件；")]),t._v(" "),s("li",[t._v("如果是 "),s("strong",[t._v("main")]),t._v(" 包，当只执行 "),s("code",[t._v("go build")]),t._v("命令后，会在当前目录下生成一个可执行文件。如果需要在 $GOPATH/bin 目录下生成相应的 exe 文件，需要执行 "),s("code",[t._v("go install")]),t._v(" 或者使用 "),s("code",[t._v("go build -o 路径/可执行文件")]),t._v("；")]),t._v(" "),s("li",[t._v("如果某个文件夹下有多个文件，而你只想编译其中某一个文件，可以在 "),s("code",[t._v("go build")]),t._v(" 之后加上文件名，例如 "),s("code",[t._v("go build a.go")]),t._v("。"),s("code",[t._v("go build")]),t._v(" 命令默认会编译当前目录下的所有 go 文件；")]),t._v(" "),s("li",[t._v("你也可以指定编译输出的文件名。比如，我们可以指定 "),s("code",[t._v("go build -o")]),t._v(" 可执行文件名，默认情况是你的 package 名(非 main 包)，或者是第一个源文件的文件名（main 包）；")]),t._v(" "),s("li",[s("code",[t._v("go build")]),t._v(" 会忽略目录下以 "),s("strong",[t._v("“_”")]),t._v(" 或者 "),s("strong",[t._v("“.”")]),t._v(" 开头的 go 文件；")]),t._v(" "),s("li",[t._v("如果你的源代码针对不同的操作系统需要不同的处理，那么你可以根据不同的操作系统后缀来命名文件；")]),t._v(" "),s("li",[t._v("当代码包中有且仅有一个命令源码文件的时候，在文件夹所在目录中执行 go build 命令，会在该目录下生成一个与目录同名的可执行文件；")])]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 当前目录")]),t._v("\n$ ll\ntotal "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("16")]),t._v("\n-rw-r--r--  "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" bytedance  staff   "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("29")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("19")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("16")]),t._v(":54 go.mod\n-rw-r--r--  "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" bytedance  staff  "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("106")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("19")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("17")]),t._v(":10 main.go\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 执行 go build")]),t._v("\n$ go build\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 再次查看当前目录，会发现多了 goHelloWorld，这个就是 go build 编译产物")]),t._v("\n$ ll\ntotal "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3984")]),t._v("\n-rw-r--r--  "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" bytedance  staff       "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("29")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("19")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("16")]),t._v(":54 go.mod\n-rwxr-xr-x  "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" bytedance  staff  "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2027936")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("19")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("17")]),t._v(":21 goHelloWorld\n-rw-r--r--  "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" bytedance  staff      "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("106")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("19")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("17")]),t._v(":10 main.go\n")])])]),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("Go 1.16 变化")]),t._v(" "),s("p",[t._v("Go 1.16 后，go build/run 命令不再自动更新 go.mod 和 go.sum。")])]),t._v(" "),s("p",[t._v("下面来看看 "),s("code",[t._v("go build")]),t._v(" 干了什么：")]),t._v(" "),s("p",[s("strong",[t._v("1. go build 配合 -n")])]),t._v(" "),s("p",[t._v("执行：")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("go build -n\n")])])]),s("p",[t._v("输出：")]),t._v(" "),s("div",{staticClass:"language-txt extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("mkdir -p $WORK/b001/\ncat >$WORK/b001/importcfg.link << 'EOF' # internal\npackagefile goHelloWorld=/Users/bytedance/Library/Caches/go-build/71/71bdab3154f908f152290c268aabe0220943c6c9d64e40d85be2aa4d5170c47b-d\n...\npackagefile io=/usr/local/go/pkg/darwin_amd64/io.a\nEOF\nmkdir -p $WORK/b001/exe/\ncd .\n/usr/local/go/pkg/tool/darwin_amd64/link -o $WORK/b001/exe/a.out -importcfg $WORK/b001/importcfg.link -buildmode=exe -buildid=7YYz2SWVaL2TAgEq9Aju/S_ayM9h6okuR2tz0sOmx/_chCAYSxt9RhagjJjDzh/7YYz2SWVaL2TAgEq9Aju -extld=clang /Users/bytedance/Library/Caches/go-build/71/71bdab3154f908f152290c268aabe0220943c6c9d64e40d85be2aa4d5170c47b-d\n/usr/local/go/pkg/tool/darwin_amd64/buildid -w $WORK/b001/exe/a.out # internal\nmv $WORK/b001/exe/a.out goHelloWorld\n")])])]),s("p",[t._v("可以看到，执行过程和 "),s("code",[t._v("go run")]),t._v(" 大体相同，唯一不同的就是在最后一步："),s("strong",[s("code",[t._v("go run")]),t._v("  是执行了可执行文件，但是 "),s("code",[t._v("go build")]),t._v(" 命令，只是把库源码文件编译了一遍，然后把可执行文件移动到了当前目录的文件夹中。")])]),t._v(" "),s("p",[s("img",{attrs:{src:"https://tva1.sinaimg.cn/large/008i3skNly1gsmdwnwlvjj30i70id3za.jpg",alt:"img"}})]),t._v(" "),s("h2",{attrs:{id:"四、go-install"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#四、go-install"}},[t._v("#")]),t._v(" 四、go install")]),t._v(" "),s("blockquote",[s("p",[t._v("go install 命令是用来编译并"),s("strong",[t._v("安装")]),t._v("代码包或者源码文件的。")])]),t._v(" "),s("p",[t._v("执行：")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("go "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" -n \n")])])]),s("p",[t._v("输出：")]),t._v(" "),s("div",{staticClass:"language-txt extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("mkdir -p $WORK/b001/\ncat >$WORK/b001/importcfg.link << 'EOF' # internal\npackagefile goHelloWorld=/Users/bytedance/Library/Caches/go-build/71/71bdab3154f908f152290c268aabe0220943c6c9d64e40d85be2aa4d5170c47b-d\n...\npackagefile path=/usr/local/go/pkg/darwin_amd64/path.a\nEOF\nmkdir -p $WORK/b001/exe/\ncd .\n/usr/local/go/pkg/tool/darwin_amd64/link -o $WORK/b001/exe/a.out -importcfg $WORK/b001/importcfg.link -buildmode=exe -buildid=7YYz2SWVaL2TAgEq9Aju/S_ayM9h6okuR2tz0sOmx/_chCAYSxt9RhagjJjDzh/7YYz2SWVaL2TAgEq9Aju -extld=clang /Users/bytedance/Library/Caches/go-build/71/71bdab3154f908f152290c268aabe0220943c6c9d64e40d85be2aa4d5170c47b-d\n/usr/local/go/pkg/tool/darwin_amd64/buildid -w $WORK/b001/exe/a.out # internal\nmkdir -p /Users/bytedance/go/bin/\nmv $WORK/b001/exe/a.out /Users/bytedance/go/bin/goHelloWorld\n")])])]),s("p",[s("code",[t._v("go install")]),t._v(" 命令在内部实际上分成了两步操作：")]),t._v(" "),s("ol",[s("li",[t._v("生成结果文件（可执行文件或者 _pkg_.a 包)\n"),s("ul",[s("li",[t._v("可执行文件： 一般是 go install 带 main 函数的 go 文件产生的，有函数入口，可以直接运行")]),t._v(" "),s("li",[t._v("_pkg_.a 包： 一般是 go install 不包含 main 函数的 go 文件产生的，没有函数入口，只能被调用")])])]),t._v(" "),s("li",[t._v("把编译好的结果移到 "),s("code",[t._v("$GOPATH/pkg")]),t._v(" 或者 "),s("code",[t._v("$GOPATH/bin")])])]),t._v(" "),s("p",[s("code",[t._v("go install")]),t._v(" 用于编译并安装指定的代码包及它们的依赖包。当指定的代码包的依赖包还没有被编译和安装时，该命令会先去处理依赖包。与 "),s("code",[t._v("go build")]),t._v(" 命令一样，传给 "),s("code",[t._v("go install")]),t._v(" 命令的代码包参数应该以导入路径的形式提供。并且，"),s("code",[t._v("go build")]),t._v(" 命令的绝大多数标记也都可以用于 "),s("code",[t._v("go install")]),t._v("。")]),t._v(" "),s("p",[t._v("实际上，"),s("code",[t._v("go install")]),t._v(" 命令只比 "),s("code",[t._v("go build")]),t._v(" 命令多做了一件事，即："),s("strong",[t._v("安装编译后的结果文件到指定目录。")])]),t._v(" "),s("p",[s("img",{attrs:{src:"https://tva1.sinaimg.cn/large/008i3skNly1gsme35j9o9j30i40icgmg.jpg",alt:"img"}})]),t._v(" "),s("blockquote",[s("p",[t._v("注意：在安装多个库源码文件时有可能遇到如下的问题")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("$  go "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" envir.go fpath.go ipath.go pnode.go util.go\ngo install: no "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" location "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" .go files listed on "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("command")]),t._v(" line "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("GOBIN not "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("set")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("而且，在我们为环境变量 GOBIN 设置了正确的值之后，这个错误提示信息仍然会出现。")]),t._v(" "),s("p",[t._v("这是因为，只有在安装命令源码文件的时候，命令程序才会将环境变量 GOBIN 的值作为结果文件的存放目录。而在安装库源码文件时，在命令程序内部的代表结果文件存放目录路径的那个变量不会被赋值。最后，命令程序会发现它依然是个无效的空值。")]),t._v(" "),s("p",[t._v("所以，命令程序会同样返回一个关于“无安装位置”的错误。")]),t._v(" "),s("p",[t._v("这就引出一个结论，我们只能使用安装代码包的方式来安装库源码文件，而不能在 "),s("code",[t._v("go install")]),t._v(" 命令罗列并安装它们。")]),t._v(" "),s("p",[t._v("另外，"),s("code",[t._v("go install")]),t._v(" 命令目前无法接受标记 "),s("code",[t._v("-o")]),t._v(" 以自定义结果文件的存放位置。这也从侧面说明了 "),s("code",[t._v("go install")]),t._v(" 命令不支持针对库源码文件的安装操作。")])]),t._v(" "),s("h2",{attrs:{id:"五、go-get"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#五、go-get"}},[t._v("#")]),t._v(" 五、go get")]),t._v(" "),s("blockquote",[s("p",[t._v("go get 命令用于从远程代码仓库（比如 Github ）上下载并安装代码包。")])]),t._v(" "),s("h3",{attrs:{id:"_1-常用选项"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-常用选项"}},[t._v("#")]),t._v(" 1. 常用选项")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("可选项"),s("img",{attrs:{width:"200/"}})]),t._v(" "),s("th",[t._v("作用")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("-d")]),t._v(" "),s("td",[t._v("让命令程序只执行下载动作，而不执行安装动作。")])]),t._v(" "),s("tr",[s("td",[t._v("-f")]),t._v(" "),s("td",[t._v("仅在使用"),s("code",[t._v("-u")]),t._v("标记时才有效。该标记会让命令程序忽略掉对已下载代码包的导入路径的检查。"),s("br"),t._v("如果下载并安装的代码包所属的项目是你从别人那里 fork 过来的，那么这样做就尤为重要了。")])]),t._v(" "),s("tr",[s("td",[t._v("-fix")]),t._v(" "),s("td",[t._v("让命令程序在下载代码包后先执行修正动作，而后再进行编译和安装。")])]),t._v(" "),s("tr",[s("td",[t._v("-insecure")]),t._v(" "),s("td",[t._v("允许命令程序使用非安全的 scheme（如 HTTP ）去下载指定的代码包。"),s("br"),t._v("如果你用的代码仓库（如公司内部的 Gitlab ）没有HTTPS 支持，可以添加此标记。请在确定安全的情况下使用它。")])]),t._v(" "),s("tr",[s("td",[t._v("-t")]),t._v(" "),s("td",[t._v("让命令程序同时下载并安装指定的代码包中的测试源码文件中依赖的代码包。")])]),t._v(" "),s("tr",[s("td",[t._v("-u")]),t._v(" "),s("td",[t._v("让命令利用网络来更新已有代码包及其依赖包。"),s("br"),t._v("默认情况下，该命令只会从网络上下载本地不存在的代码包，而不会更新已有的代码包。")])])])]),t._v(" "),s("h3",{attrs:{id:"_2-go-get-做了什么"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-go-get-做了什么"}},[t._v("#")]),t._v(" 2. go get 做了什么")]),t._v(" "),s("p",[t._v("执行：")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("go get -x github.com/go-errors/errors\n")])])]),s("p",[t._v("输出：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("cd git clone https://gi thub. com go- errors/ errors /Users/bytedance/go/src/github.com/go-errors/errors\ncd /Users/bytedance/go/src/github.com/go-errors/errors \ngit submodule update --init --recursive\ncd /Users/bytedance/go/src/github.com/go-errors/errors\ngit show-ref\ncd /Users/bytedance/go/src/github.com/go-errors/errors\ngit submodule update --init --recursive\nWORK=/var/folders/kt/nlhsnpgn6lgd_q16f8j83sbhØØØØgn/T/go-build188558329\n")])])]),s("p",[t._v("这里可以很明显的看到，执行完 "),s("code",[t._v("go get")]),t._v(" 命令以后，会调用 git clone 方法下载源码，并编译，最终会把库源码文件编译成归档文件安装到 pkg 对应的相关平台目录下。")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://tva1.sinaimg.cn/large/008i3skNly1gsmefl5qbhj30n40hv3z8.jpg",alt:"img"}})]),t._v(" "),s("h3",{attrs:{id:"_3-引入了-go-module-后-go-get-变化"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-引入了-go-module-后-go-get-变化"}},[t._v("#")]),t._v(" 3. 引入了 go module  后，go get 变化")]),t._v(" "),s("blockquote",[s("p",[t._v("使用go module之后，go get 拉取依赖的方式就发生了变化。")])]),t._v(" "),s("ul",[s("li",[s("p",[t._v("拉取最新的版本（优先择取 tag）")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("go get golang.org/x/text@latest\n")])])])]),t._v(" "),s("li",[s("p",[t._v("拉取 master 分支的最新 commit")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("go get golang.org/x/text@master\n")])])])]),t._v(" "),s("li",[s("p",[t._v("拉取 tag 为 v0.3.2 的 commit")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("go get golang.org/x/text@v0.3.2\n")])])])]),t._v(" "),s("li",[s("p",[t._v("拉取 hash 为 342b231 的 commit，最终会被转换为其对应的 tag 号")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("go get golang.org/x/text@342b2e\n")])])])]),t._v(" "),s("li",[s("p",[t._v("拉取指定版本，如指定版本 v3")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("go get github.com/smartwalle/alipay/v3\n")])])])]),t._v(" "),s("li",[s("p",[t._v("更新")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("go get -u\n")])])])])]),t._v(" "),s("h3",{attrs:{id:"_4-注意"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-注意"}},[t._v("#")]),t._v(" 4. 注意")]),t._v(" "),s("blockquote",[s("p",[t._v("注意：由于不可诉原因，go get 经常拉不到代码")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("需要将下面两个变量加入到系统环境变量中：")]),t._v(" "),s("div",{staticClass:"language-properties extra-class"},[s("pre",{pre:!0,attrs:{class:"language-properties"}},[s("code",[s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("GO111MODULE")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("on")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("GOPROXY")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("https://goproxy.io")]),t._v("\n")])])])]),t._v(" "),s("li",[s("p",[t._v("覆盖原来的值")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("go "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("env")]),t._v(" -w "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("GO111MODULE")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("on\ngo "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("env")]),t._v(" -w "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("GOPROXY")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("https://goproxy.cn,https://goproxy.io,direct\n")])])])])])]),t._v(" "),s("h2",{attrs:{id:"六、go-clean"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#六、go-clean"}},[t._v("#")]),t._v(" 六、go clean")]),t._v(" "),s("blockquote",[s("p",[t._v("go clean 命令是用来移除当前源码包里面编译生成的文件。")])]),t._v(" "),s("p",[t._v("这些文件包括：")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("文件"),s("img",{attrs:{width:"200/"}})]),t._v(" "),s("th",[t._v("来源")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("_obj/")]),t._v(" "),s("td",[t._v("旧的 object 目录，由 Makefiles 遗留")])]),t._v(" "),s("tr",[s("td",[t._v("_test/")]),t._v(" "),s("td",[t._v("旧的 test 目录，由 Makefiles 遗留")])]),t._v(" "),s("tr",[s("td",[t._v("_testmain.go")]),t._v(" "),s("td",[t._v("旧的 gotest 文件，由 Makefiles 遗留")])]),t._v(" "),s("tr",[s("td",[t._v("test.out")]),t._v(" "),s("td",[t._v("旧的 test 记录，由 Makefiles 遗留")])]),t._v(" "),s("tr",[s("td",[t._v("build.out")]),t._v(" "),s("td",[t._v("旧的 test 记录，由 Makefiles 遗留")])]),t._v(" "),s("tr",[s("td",[t._v("*.[568ao]")]),t._v(" "),s("td",[t._v("object文件，由 Makefiles 遗留")])]),t._v(" "),s("tr",[s("td",[t._v("DIR(.exe)")]),t._v(" "),s("td",[t._v("由 go build 产生")])]),t._v(" "),s("tr",[s("td",[t._v("DIR.test(.exe)")]),t._v(" "),s("td",[t._v("由 go test -c 产生")])]),t._v(" "),s("tr",[s("td",[t._v("MAINFILE(.exe)")]),t._v(" "),s("td",[t._v("由 go build MAINFILE.go产生")])])])]),t._v(" "),s("h2",{attrs:{id:"七、go-fmt"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#七、go-fmt"}},[t._v("#")]),t._v(" 七、go fmt")]),t._v(" "),s("blockquote",[s("p",[t._v("go fmt 命令主要是用来帮你格式化所写好的代码文件。")])]),t._v(" "),s("p",[t._v("比如我们写了一个格式很糟糕的 test.go 文件，我们只需要使用 fmt go test.go 命令，就可以让 go 帮我们格式化我们的代码文件。但是我们一般很少使用这个命令，因为我们的开发工具一般都带有保存时自动格式化功能，这个功能底层其实就是调用了 go fmt 命令而已。")]),t._v(" "),s("p",[t._v("使用 go fmt 命令，更多时候是用 "),s("strong",[t._v("gofmt")]),t._v("，而且需要参数 "),s("strong",[t._v("-w")]),t._v("，否则格式化结果不会写入文件。"),s("strong",[t._v("gofmt -w src")]),t._v("，可以格式化整个项目。")]),t._v(" "),s("h2",{attrs:{id:"八、go-test"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#八、go-test"}},[t._v("#")]),t._v(" 八、go test")]),t._v(" "),s("blockquote",[s("p",[t._v("go test 命令，会自动读取源码目录下面名为 *_test.go 的文件，生成并运行测试用的可执行文件。")])]),t._v(" "),s("p",[t._v("默认的情况下，不需要任何的参数，它会自动把你源码包下面所有 test 文件测试完毕，当然你也可以带上参数，详情请参考 go help test。")]),t._v(" "),s("h2",{attrs:{id:"九、go-doc"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#九、go-doc"}},[t._v("#")]),t._v(" 九、go doc")]),t._v(" "),s("blockquote",[s("p",[t._v("go doc 命令是一个很强大的文档工具。")])]),t._v(" "),s("p",[t._v("如何查看相应 package 的文档呢？")]),t._v(" "),s("ul",[s("li",[t._v("例如 builtin 包，那么执行 go doc builtin；")]),t._v(" "),s("li",[t._v("如果是http包，那么执行 go doc net/http；")]),t._v(" "),s("li",[t._v("查看某一个包里面的函数，那么执行 go doc fmt Printf；")]),t._v(" "),s("li",[t._v("也可以查看相应的代码，执行 go doc -src fmt Printf；")])]),t._v(" "),s("p",[t._v("go doc 对应的一个非常好用的工具 "),s("strong",[t._v("godoc")]),t._v("，我们先下载：")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("go get golang.org/x/tools/cmd/godoc\n")])])]),s("p",[t._v("通过命令在命令行执行")]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("godoc -http=:端口号")]),t._v(" (godoc 无空格)")])]),t._v(" "),s("p",[t._v("比如")]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("godoc -http=:8080")])])]),t._v(" "),s("p",[t._v("然后在浏览器中打开 "),s("strong",[t._v("127.0.0.1:8080")]),t._v("，你将会看到一个 golang.org 的本地 copy 版本，通过它你可以查询 pkg 文档等其它内容。如果你设置了 GOPATH，在 pkg 分类下，不但会列出标准包的文档，还会列出你本地 GOPATH 中所有项目的相关文档，这对于经常被限制访问的用户来说是一个不错的选择。")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://tva1.sinaimg.cn/large/008i3skNly1gsmeu5khgoj618w0u00z102.jpg",alt:"image-20210719175744351"}})]),t._v(" "),s("h2",{attrs:{id:"十、go-fix"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#十、go-fix"}},[t._v("#")]),t._v(" 十、go fix")]),t._v(" "),s("blockquote",[s("p",[t._v("go fix 用来修复以前老版本的代码到新版本，例如 go1 之前老版本的代码转化到 go1。")])]),t._v(" "),s("h2",{attrs:{id:"十一、go-version"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#十一、go-version"}},[t._v("#")]),t._v(" 十一、go version")]),t._v(" "),s("blockquote",[s("p",[t._v("查看当前 go 版本。")])]),t._v(" "),s("h2",{attrs:{id:"十二、go-env"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#十二、go-env"}},[t._v("#")]),t._v(" 十二、go env")]),t._v(" "),s("blockquote",[s("p",[t._v("查看当前 go 的环境变量。")])]),t._v(" "),s("h2",{attrs:{id:"十三、go-list"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#十三、go-list"}},[t._v("#")]),t._v(" 十三、go list")]),t._v(" "),s("blockquote",[s("p",[t._v("查看当前安装的全部的 package。")])]),t._v(" "),s("Vssue")],1)}),[],!1,null,null,null);a.default=o.exports}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{444:function(a,t,s){"use strict";s.r(t);var n=s(47),e=Object(n.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"_4-go-程序是如何编译的"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-go-程序是如何编译的"}},[a._v("#")]),a._v(" 4. Go 程序是如何编译的？")]),a._v(" "),s("p",[a._v("实例程序：")]),a._v(" "),s("div",{staticClass:"language-go extra-class"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("package")]),a._v(" main\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("import")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"fmt"')]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("func")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("main")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n\tfmt"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("Println")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"hello world"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),s("p",[a._v("运行：")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("go build -n "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(".")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#不实际编译，只输出编译过程")]),a._v("\n")])])]),s("p",[a._v("输出：")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 1. 创建工作目录")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("mkdir")]),a._v(" -p "),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$WORK")]),a._v("/b001/\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("cat")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$WORK")]),a._v("/b001/importcfg "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<<")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'EOF'"),s("span",{pre:!0,attrs:{class:"token bash punctuation"}},[a._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# internal")])]),a._v("\n# 2. 引入相关依赖\npackagefile fmt=/usr/local/opt/go/libexec/pkg/darwin_amd64/fmt.a\npackagefile runtime=/usr/local/opt/go/libexec/pkg/darwin_amd64/runtime.a\nEOF")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 3. 进入项目目录并编译成一堆 .a 文件")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" /Users/hedonwang/GolandProjects/go-advance\n/usr/local/opt/go/libexec/pkg/tool/darwin_amd64/compile -o "),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$WORK")]),a._v("/b001/_pkg_.a -trimpath "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"'),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$WORK")]),a._v('/b001=>"')]),a._v(" -p main -lang"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("go1.18 -complete -buildid qTV5GO9_7bKkS0N7SO2j/qTV5GO9_7bKkS0N7SO2j -goversion go1.18.5 -c"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("4")]),a._v(" -nolocalimports -importcfg "),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$WORK")]),a._v("/b001/importcfg -pack ./main.go\n/usr/local/opt/go/libexec/pkg/tool/darwin_amd64/buildid -w "),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$WORK")]),a._v("/b001/_pkg_.a "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# internal")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("cat")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$WORK")]),a._v("/b001/importcfg.link "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<<")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'EOF'"),s("span",{pre:!0,attrs:{class:"token bash punctuation"}},[a._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# internal")])]),a._v('\n# 编译产物是一堆 .a 文件（机器码中间件）\npackagefile go-advance=$WORK/b001/_pkg_.a\n....\npackagefile path=/usr/local/opt/go/libexec/pkg/darwin_amd64/path.a\nmodinfo "0w\\xaf\\f\\x92t\\b\\x02A\\xe1\\xc1\\a\\xe6\\xd6\\x18\\xe6path\\tgo-advance\\nmod\\tgo-advance\\t(devel)\\t\\nbuild\\t-compiler=gc\\nbuild\\tCGO_ENABLED=1\\nbuild\\tCGO_CFLAGS=\\nbuild\\tCGO_CPPFLAGS=\\nbuild\\tCGO_CXXFLAGS=\\nbuild\\tCGO_LDFLAGS=\\nbuild\\tGOARCH=amd64\\nbuild\\tGOOS=darwin\\nbuild\\tGOAMD64=v1\\n\\xf92C1\\x86\\x18 r\\x00\\x82B\\x10A\\x16\\xd8\\xf2"\nEOF')]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("mkdir")]),a._v(" -p "),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$WORK")]),a._v("/b001/exe/\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(".")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 4. 将所有 .a 文件链接成一个可执行文件 a.out，最后会对它进行重命名，默认为应用名（本例子中为 go-advance）")]),a._v("\n/usr/local/opt/go/libexec/pkg/tool/darwin_amd64/link -o "),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$WORK")]),a._v("/b001/exe/a.out -importcfg "),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$WORK")]),a._v("/b001/importcfg.link -buildmode"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("exe -buildid"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("JcVORsNHChlDnsHiGpRn/qTV5GO9_7bKkS0N7SO2j/qTV5GO9_7bKkS0N7SO2j/JcVORsNHChlDnsHiGpRn -extld"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("clang "),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$WORK")]),a._v("/b001/_pkg_.a\n/usr/local/opt/go/libexec/pkg/tool/darwin_amd64/buildid -w "),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$WORK")]),a._v("/b001/exe/a.out "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# internal")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("mv")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$WORK")]),a._v("/b001/exe/a.out go-advance\n")])])]),s("p",[a._v("总结：")]),a._v(" "),s("p",[s("img",{attrs:{src:"https://tva1.sinaimg.cn/large/e6c9d24egy1h54yu88j60j21ja056q3p.jpg",alt:"image-20220813111358256"}})]),a._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[a._v("如何查看生成的 SSA 码？")]),a._v(" "),s("p",[a._v("编译前：")]),a._v(" "),s("ul",[s("li",[a._v('windows：$env:GOSSAFUNC="指定函数"')]),a._v(" "),s("li",[a._v("unix: export GOSSAFUNC=指定函数")])])]),a._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[a._v("如何查看生成的 Plan9 汇编代码？")]),a._v(" "),s("ul",[s("li",[a._v("go build -gcflags -S main.go")])])]),a._v(" "),s("Vssue")],1)}),[],!1,null,null,null);t.default=e.exports}}]);
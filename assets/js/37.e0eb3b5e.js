(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{445:function(t,s,a){"use strict";a.r(s);var n=a(47),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"_5-go-程序是如何启动起来的"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-go-程序是如何启动起来的"}},[t._v("#")]),t._v(" 5. Go 程序是如何启动起来的？")]),t._v(" "),a("p",[t._v("运行 runtime/rt0_xxx.s 汇编文件")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("读取命令行参数：复制参数变量 argc 和 argv 到栈上；")]),t._v(" "),a("div",{staticClass:"language-c extra-class"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[t._v("TEXT runtime·rt0_go"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("ABIInternal"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("SB"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("NOSPLIT"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("$"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// copy arguments forward on an even stack")]),t._v("\n\tMOVQ\tDI"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" AX\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// argc")]),t._v("\n\tMOVQ\tSI"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" BX\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// argv")]),t._v("\n\tSUBQ\t$"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" SP\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 2args 2auto")]),t._v("\n\tANDQ\t$"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("~")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("15")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" SP\n\tMOVQ\tAX"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("16")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("SP"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\tMOVQ\tBX"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("24")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("SP"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])]),t._v(" "),a("li",[a("p",[t._v("初始化 g0 执行栈：g0 是为了调度协程而产生的协程，是每个 Go 程序的第一个协程；")]),t._v(" "),a("div",{staticClass:"language-c extra-class"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[t._v("TEXT runtime·rt0_go"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("ABIInternal"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("SB"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("NOSPLIT"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("$"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// create istack out of the given (operating system) stack.")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// _cgo_init may update stackguard.")]),t._v("\n   MOVQ   $runtime·"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("g0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("SB"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" DI\n   "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("LEAQ")]),t._v("   "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("64")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1024")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("104")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("SP"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" BX\n   MOVQ   BX"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("g_stackguard0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("DI"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n   MOVQ   BX"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("g_stackguard1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("DI"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n   MOVQ   BX"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("g_stack"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("stack_lo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("DI"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n   MOVQ   SP"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("g_stack"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("stack_hi"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("DI"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])]),t._v(" "),a("li",[a("p",[t._v("运行时检查：")]),t._v(" "),a("ul",[a("li",[t._v("类型长度")]),t._v(" "),a("li",[t._v("指针操作")]),t._v(" "),a("li",[t._v("结构体字段偏移量")]),t._v(" "),a("li",[t._v("atomic 原子操作")]),t._v(" "),a("li",[t._v("CAS 操作")]),t._v(" "),a("li",[t._v("栈大小是否是 2 的幂次")])]),t._v(" "),a("div",{staticClass:"language-c extra-class"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[t._v("TEXT runtime·rt0_go"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("ABIInternal"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("SB"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("NOSPLIT"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("$"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n  CALL\truntime·"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("check")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("SB"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("div",{staticClass:"language-go extra-class"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// runtime/runtime1.go")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("check")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n      a     "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int8")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n      k     unsafe"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Pointer\n      l     "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("uint16")]),t._v("\n      m     "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("byte")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" unsafe"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Sizeof")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("throw")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"bad a"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])]),t._v(" "),a("li",[a("p",[t._v("判断系统字长 & CPU 核数：runtime.osinit")]),t._v(" "),a("div",{staticClass:"language-c extra-class"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[t._v("TEXT runtime·rt0_go"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("ABIInternal"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("SB"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("NOSPLIT"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("$"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n  CALL\truntime·"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("osinit")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("SB"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("div",{staticClass:"language-go extra-class"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// runtime/os_linux.go")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("osinit")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tncpu "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getproccount")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\tphysHugePageSize "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getHugePageSize")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" iscgo "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sigdelset")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("sigsetAllExiting"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("32")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sigdelset")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("sigsetAllExiting"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("33")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sigdelset")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("sigsetAllExiting"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("34")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("osArchInit")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])]),t._v(" "),a("li",[a("p",[t._v("参数初始化 runtime.args：对命令行中的参数进行处理，参数数量复制给 argc（int32），参数值赋值给 argv（**byte）")]),t._v(" "),a("div",{staticClass:"language-c extra-class"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[t._v("TEXT runtime·rt0_go"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("ABIInternal"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("SB"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("NOSPLIT"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("$"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n  MOVL\t"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("16")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("SP"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" AX\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// copy argc")]),t._v("\n\tMOVL\tAX"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("SP"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\tMOVQ\t"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("24")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("SP"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" AX\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// copy argv")]),t._v("\n\tMOVQ\tAX"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("SP"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\tCALL\truntime·"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("args")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("SB"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])]),t._v(" "),a("li",[a("p",[t._v("初始化调度器 runtime.schedinit：")]),t._v(" "),a("ul",[a("li",[t._v("全局栈空间内存分配")]),t._v(" "),a("li",[t._v("堆内存空间的初始化")]),t._v(" "),a("li",[t._v("初始化当前系统线程")]),t._v(" "),a("li",[t._v("算法初始化（map、hash）")]),t._v(" "),a("li",[t._v("加载命令行参数到 os.Args")]),t._v(" "),a("li",[t._v("加载操作系统环境变量")]),t._v(" "),a("li",[t._v("gc 的参数初始化")]),t._v(" "),a("li",[t._v("设置 process 的数量")])]),t._v(" "),a("div",{staticClass:"language-c extra-class"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[t._v("TEXT runtime·rt0_go"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("ABIInternal"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("SB"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("NOSPLIT"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("$"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n  CALL\truntime·"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("schedinit")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("SB"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("div",{staticClass:"language-go extra-class"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// runtime/proc.go")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("schedinit")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("lockInit")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("sched"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("lock"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" lockRankSched"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// The world starts stopped.")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("goargs")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("goenvs")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("parsedebugvars")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("gcinit")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])]),t._v(" "),a("li",[a("p",[t._v("创建主协程：执行 runtime.main 并将其放入调度器等待调度；")]),t._v(" "),a("div",{staticClass:"language-c extra-class"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[t._v("TEXT runtime·rt0_go"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("ABIInternal"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("SB"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("NOSPLIT"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("$"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// create a new goroutine to start program")]),t._v("\n\tMOVQ\t$runtime·"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("mainPC")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("SB"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" AX\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 去 runtime.main")]),t._v("\n\tPUSHQ\tAX\n\tPUSHQ\t$"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\t\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// arg size")]),t._v("\n\tCALL\truntime·"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("newproc")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("SB"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\t\t\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 创建一个协程")]),t._v("\n\tPOPQ\tAX\n\tPOPQ\tAX\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// start this M")]),t._v("\n\tCALL\truntime·"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("mstart")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("SB"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\t\t\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 启动调度器")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\nDATA\truntime·mainPC"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("SB"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("$runtime·main"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("ABIInternal"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("SB"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])]),t._v(" "),a("li",[a("p",[t._v("主协程执行主函数 runtime.main，它会执行：")]),t._v(" "),a("ul",[a("li",[t._v("runtime.init")]),t._v(" "),a("li",[t._v("启动 gc 垃圾回收器")]),t._v(" "),a("li",[t._v("用户包依赖的 init 方法")]),t._v(" "),a("li",[t._v("用户主函数 main.main")])]),t._v(" "),a("div",{staticClass:"language-go extra-class"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// runtime/proc.go")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// init 方法会率先执行")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("init")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("go")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("forcegchelper")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 1. 执行 runtime.init")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("doInit")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("runtime_inittask"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" \n\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 2. 启动 gc")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("gcenable")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 3. 执行用户包依赖的 init 方法")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("doInit")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("main_inittask"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 4.执行用户主函数 main.main")]),t._v("\n\tfn "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" main_main "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// make an indirect call, as the linker doesn't know the address of the main package when laying down the runtime")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("fn")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://tva1.sinaimg.cn/large/e6c9d24egy1h5p5xkprzaj20z60u0n0n.jpg",alt:"image-20220830223037462"}})]),t._v(" "),a("Vssue")],1)}),[],!1,null,null,null);s.default=e.exports}}]);
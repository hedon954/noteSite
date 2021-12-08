(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{427:function(_,v,t){"use strict";t.r(v);var a=t(47),o=Object(a.a)({},(function(){var _=this,v=_.$createElement,t=_._self._c||v;return t("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[t("h1",{attrs:{id:"golang-入门简介"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#golang-入门简介"}},[_._v("#")]),_._v(" Golang 入门简介")]),_._v(" "),t("h2",{attrs:{id:"一、go-核心思想"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一、go-核心思想"}},[_._v("#")]),_._v(" 一、Go 核心思想")]),_._v(" "),t("p",[_._v("Less can be more")]),_._v(" "),t("p",[_._v("大道至简，小而蕴真")]),_._v(" "),t("p",[_._v("让事情变得复杂很容易，让事情变得简单才难")]),_._v(" "),t("p",[_._v("深刻的工程文化")]),_._v(" "),t("h2",{attrs:{id:"二、go-核心特性"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#二、go-核心特性"}},[_._v("#")]),_._v(" 二、Go 核心特性")]),_._v(" "),t("p",[_._v("Go 语言之所以厉害，是因为它在服务端的开发中，总能抓住程序员的痛点，以最直接、简单、高效、稳定的方式来解决问题。这里我们并不会深入讨论 Go 语言的具体语法，只会将语言中关键的、对简化编程具有重要意义的方面介绍给大家，体验 Go 的核心特性。")]),_._v(" "),t("h3",{attrs:{id:"_1-并发编程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-并发编程"}},[_._v("#")]),_._v(" 1. 并发编程")]),_._v(" "),t("p",[_._v("Go 语言在并发编程方面比绝大多数语言要简洁不少，这一点是其最大亮点之一，也是其在未来进入高并发高性能场景的重要筹码。")]),_._v(" "),t("p",[_._v("不同于传统的多进程或多线程，Go 的并发执行单元是一种称为 "),t("strong",[_._v("Goroutine")]),_._v(" 的协程。")]),_._v(" "),t("p",[_._v("由于在共享数据场景中会用到锁，再加上 GC，其并发性能有时不如异步复用 IO 模型，因此相对于大多数语言来说，Go 的并发编程简单比并发性能更具卖点。")]),_._v(" "),t("p",[_._v("在当今这个多核时代，并发编程的意义不言而喻。当然，很多语言都支持多线程、多进程编程，但遗憾的是，实现和控制起来并不是那么令人感觉轻松和愉悦。Go 不同的是，语言级别支持协程（Goroutine）并发（协程又称微线程，比线程更轻量、开销更小，性能更高），操作起来非常简单，语言级别提供关键字 "),t("code",[_._v("go")]),_._v(" 用于启动协程，并且在同一台机器上可以启动成千上万个协程。协程经常被理解为轻量级线程，一个线程可以包含多个协程，共享堆不共享栈。")]),_._v(" "),t("p",[_._v("协程间一般由应用程序显式实现调度，上下文切换无需下到内核层，高效不少。协程间一般不做同步通讯，而 Go 实现协程间通讯有两种：")]),_._v(" "),t("ol",[t("li",[_._v("共享内存型：即使用全局变量 + mutex 锁来实现数据共享")]),_._v(" "),t("li",[_._v("消息传递型：即使用一种独有的 "),t("strong",[_._v("channel")]),_._v(" 机制进行异步通讯（推荐）")])]),_._v(" "),t("p",[_._v("对比 Java 的多线程和 Go 的协程实现，明显更直接、简单。这就是 Go 的魅力所在，以简单、高效的方式解决问题，关键字 "),t("code",[_._v("go")]),_._v("，或许就是 Go 语言最重要的标志。")]),_._v(" "),t("blockquote",[t("p",[_._v("高并发是 Go 语言最大的亮点。")])]),_._v(" "),t("h3",{attrs:{id:"_2-内存回收-gc"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-内存回收-gc"}},[_._v("#")]),_._v(" 2. 内存回收（GC）")]),_._v(" "),t("p",[_._v("从 C 到 C++，从程序性能的角度来考虑，这两种语言允许程序员自己管理内存，包括内存的申请和释放等。因为没有垃圾回收机制所以 C/C++ 运行起来速度很快，但是随着而来的是程序员对内存使用上的很谨小慎微的考虑。因为哪怕一点不小心就可能会导致“内存泄露”使得资源浪费或者“野指针”使得程序崩溃等，尽管 C++11 后来使用了智能指针的概念，但是程序员仍然需要很小心的使用。后来为了提高程序开发的速度以及程序的健壮性，Java 和 C# 等高级语言引入了 GC 机制，即程序员不需要再考虑内存的回收等，而是由语言特性提供垃圾回收器来回收内存。但是随之而来的可能是程序运行效率的降低。")]),_._v(" "),t("p",[_._v("GC 过程是："),t("strong",[_._v("先 stop the world，扫描所有对象判活，把可回收对象在一段 bitmap 区中标记下来，接着立即 start the world，恢复服务，同时起一个专门 gorountine 回收内存到空闲 list 中以备复用，不物理释放。物理释放由专门线程定期来执行。")])]),_._v(" "),t("p",[_._v("GC 瓶颈在于每次都要扫描所有对象来判活，待收集的对象数目越多，速度越慢。一个经验值是扫描 10w 个对象需要花费 1ms，所以尽量使用对象少的方案，比如我们同时考虑链表、map、slice、数组来进行存储，链表和 map 每个元素都是一个对象，而 slice 或数组是一个对象，因此 slice 或数组有利于 GC。")]),_._v(" "),t("h3",{attrs:{id:"_3-内存分配"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-内存分配"}},[_._v("#")]),_._v(" 3. 内存分配")]),_._v(" "),t("p",[_._v("初始化阶段直接分配一块大内存区域，大内存被切分成各个大小等级的块，放入不同的"),t("strong",[_._v("空闲 list")]),_._v(" 中，对象分配空间时从空闲 list 中取出大小合适的内存块。内存回收时，会把不用的内存重放回空闲 list。空闲内存会按照一定策略合并，以减少碎片。")]),_._v(" "),t("h3",{attrs:{id:"_4-编译"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-编译"}},[_._v("#")]),_._v(" 4. 编译")]),_._v(" "),t("p",[_._v("编译涉及到两个问题：")]),_._v(" "),t("ul",[t("li",[_._v("编译速度")]),_._v(" "),t("li",[_._v("依赖管理")])]),_._v(" "),t("p",[_._v("目前 Go 具有两种编译器，一种是建立在 GCC 基础上的 "),t("code",[_._v("Gccgo")]),_._v("，另外一种是分别针对 "),t("code",[_._v("64 位 x64")]),_._v(" 和 "),t("code",[_._v("32 位 x86")]),_._v(" 计算机的一套编译器(6g 和 8g)。")]),_._v(" "),t("p",[_._v("依赖管理方面，由于 Go 绝大多数第三方开源库都在 Github 上，在代码的 "),t("code",[_._v("import")]),_._v(" 中加上对应的 Github 路径就可以使用了，库会默认下载到工程的 "),t("code",[_._v("pkg")]),_._v(" 目录下。")]),_._v(" "),t("p",[_._v("另外，编译时会默认检查代码中所有实体的使用情况，凡是没使用到的 package 或变量，都会编译不通过。这是 Go 挺严谨的一面。")]),_._v(" "),t("h3",{attrs:{id:"_5-网络编程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-网络编程"}},[_._v("#")]),_._v(" 5. 网络编程")]),_._v(" "),t("p",[_._v("由于 Go 诞生在互联网时代，因此它天生具备了去中心化、分布式等特性，具体表现之一就是提供了丰富便捷的网络编程接口，比如：")]),_._v(" "),t("ul",[t("li",[t("strong",[_._v("socket")]),_._v(" 用 "),t("code",[_._v("net.Dial")]),_._v("（基于 tcp/udp，封装了传统的 connect、listen、accept 等接口)")]),_._v(" "),t("li",[t("strong",[_._v("http")]),_._v(" 用 "),t("code",[_._v("http.Get/Post()")])]),_._v(" "),t("li",[t("strong",[_._v("RPC")]),_._v(" 用 "),t("code",[_._v("client.Call(‘class_name.method_name’, args, &reply)")]),_._v(" 等等")])]),_._v(" "),t("h3",{attrs:{id:"_6-函数返回多值"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_6-函数返回多值"}},[_._v("#")]),_._v(" 6. 函数返回多值")]),_._v(" "),t("p",[_._v("在 C，C++ 中，包括其他的一些高级语言是不支持多个函数返回值的。但是这项功能又确实是需要的，所以在 C 语言中一般通过将返回值定义成一个结构体，或者通过函数的参数引用的形式进行返回。而在 Go 语言中，作为一种新型的语言，目标定位为强大的语言当然不能放弃对这一需求的满足，所以支持函数多返回值是必须的。")]),_._v(" "),t("p",[_._v("函数定义时可以在入参后面再加 (a,b,c)，表示将有 3 个返回值 a、b、c。这个特性在很多语言都有，比如 Python。")]),_._v(" "),t("p",[_._v("这个语法糖特性是有现实意义的，比如我们经常会要求接口返回一个三元组（errno,errmsg,data），在大多数只允许一个返回值的语言中，我们只能将三元组放入一个 map 或数组中返回，接收方还要写代码来检查返回值中包含了三元组，如果允许多返回值，则直接在函数定义层面上就做了强制，使代码更简洁安全。")]),_._v(" "),t("h3",{attrs:{id:"_7-语言交互性"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_7-语言交互性"}},[_._v("#")]),_._v(" 7. 语言交互性")]),_._v(" "),t("p",[_._v("语言交互性指的是本语言是否能和其他语言交互，比如可以调用其他语言编译的库。")]),_._v(" "),t("p",[_._v("在 Go 语言中直接重用了大部份的 C 模块，这里称为 "),t("code",[_._v("CGO")]),_._v("。")]),_._v(" "),t("p",[t("code",[_._v("CGO")]),_._v(" 允许开发者混合编写 C 语言代码，然后 "),t("code",[_._v("CGO")]),_._v(" 工具可以将这些混合的 C 代码提取并生成对于 C 功能的调用包装代码。开发者基本上可以完全忽略这个 Go 语言和 C 语言的边界是如何跨越的。")]),_._v(" "),t("p",[_._v("Go 可以和 C 程序交互，但不能和 C++ 交互。可以有两种替代方案：")]),_._v(" "),t("ol",[t("li",[_._v("先将 C++ 编译成动态库，再由 Go 调用一段 C 代码，C 代码通过 dlfcn 库动态调用动态库（记得 export LD_LIBRARY_PATH）")]),_._v(" "),t("li",[_._v("使用 swig")])]),_._v(" "),t("h3",{attrs:{id:"_8-异常处理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_8-异常处理"}},[_._v("#")]),_._v(" 8. 异常处理")]),_._v(" "),t("p",[_._v("Go 不支持 "),t("code",[_._v("try…catch")]),_._v(" 这样的结构化的异常解决方式，因为觉得会增加代码量，且会被滥用，不管多小的异常都抛出。")]),_._v(" "),t("p",[_._v("Go提倡的异常处理方式是：")]),_._v(" "),t("ul",[t("li",[_._v("普通异常：被调用方返回 error 对象，调用方判断 error 对象")]),_._v(" "),t("li",[_._v("严重异常：指的是中断性 panic（比如除0），使用 defer…recover…panic 机制来捕获处理。严重异常一般由 Go 内部自动抛出，不需要用户主动抛出，避免传统 try…catch 写得到处都是的情况。当然，用户也可以使用 "),t("code",[_._v("panic(‘xxxx’)")]),_._v("主动抛出，只是这样就使这一套机制退化成结构化异常机制了")])]),_._v(" "),t("h3",{attrs:{id:"_9-其他一些有趣的特性"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_9-其他一些有趣的特性"}},[_._v("#")]),_._v(" 9. 其他一些有趣的特性")]),_._v(" "),t("ul",[t("li",[t("p",[_._v("类型推导")]),_._v(" "),t("p",[_._v("Go 支持 "),t("code",[_._v("var abc = 10")]),_._v(" 这样的语法，让 Go 看上去有点像动态类型语言，但 Go 实际上时强类型的，前面的定义会被自动推导出是 int 类型。")]),_._v(" "),t("blockquote",[t("p",[_._v("作为"),t("strong",[_._v("强类型语言")]),_._v("，隐式的类型转换是不被允许的，记住一条原则：让所有的东西都是显式的。")]),_._v(" "),t("p",[_._v("简单来说，Go 是一门写起来像动态语言，有着动态语言开发效率的"),t("strong",[_._v("静态语言")]),_._v("。")])])]),_._v(" "),t("li",[t("p",[_._v("一个类型只要实现了某个 interface 的所有方法，即可实现该 interface，无需显式去继承")]),_._v(" "),t("blockquote",[t("p",[_._v("Go 编程规范推荐每个 interface 只提供一到两个的方法。这样使得每个接口的目的非常清晰。")]),_._v(" "),t("p",[_._v("另外 Go 的隐式推导也使得我们组织程序架构的时候更加灵活。在写 JAVA／C++ 程序的时候，我们一开始就需要把父类／子类／接口设计好，因为一旦后面有变更，修改起来会非常痛苦。而 Go 不一样，当你在实现的过程中发现某些方法可以抽象成接口的时候，你直接定义好这个接口就 OK 了，其他代码不需要做任何修改，编译器的自动推导会帮你做好一切。")])])]),_._v(" "),t("li",[t("p",[_._v("不能循环引用")]),_._v(" "),t("p",[_._v("即如果 a.go 中 import 了 b，则 b.go 要是 import a 会报 "),t("code",[_._v("import cycle not allowed")]),_._v("。")]),_._v(" "),t("p",[_._v("好处是可以避免一些潜在的编程危险，比如 a 中的 func1() 调用了 b 中的 func2()，如果 func2() 也能调用 func1()，将会导致无限循环调用下去。")])]),_._v(" "),t("li",[t("p",[_._v("defer 机制")]),_._v(" "),t("p",[_._v("在 Go 语言中，提供关键字 "),t("code",[_._v("defer")]),_._v("，可以通过该关键字指定需要延迟执行的逻辑体，即在函数体 return 前或出现 panic 时执行。这种机制非常适合善后逻辑处理，比如可以尽早避免可能出现的资源泄漏问题。")])]),_._v(" "),t("li",[t("p",[_._v("“包”的概念")]),_._v(" "),t("p",[_._v("和 Python 一样，把相同功能的代码放到一个目录，称之为包。包可以被其他包引用。")]),_._v(" "),t("p",[_._v("main 包是用来生成可执行文件，每个程序只有一个 main 包。")]),_._v(" "),t("p",[_._v("包的主要用途是提高代码的可复用性。通过 package 可以引入其他包")])]),_._v(" "),t("li",[t("p",[_._v("编程规范")]),_._v(" "),t("p",[_._v("Go 语言的编程规范强制集成在语言中，比如明确规定花括号摆放位置，强制要求一行一句，不允许导入没有使用的包，不允许定义没有使用的变量，提供 gofmt 工具强制格式化代码等等。")])]),_._v(" "),t("li",[t("p",[_._v("交叉编译")]),_._v(" "),t("p",[_._v("比如说你可以在运行 Linux 系统的计算机上开发运行 Windows 下运行的应用程序。")]),_._v(" "),t("p",[_._v("这是第一门完全支持 UTF-8 的编程语言，这不仅体现在它可以处理使用 UTF-8 编码的字符串，就连它的源码文件格式都是使用的 UTF-8 编码。")]),_._v(" "),t("p",[_._v("Go 语言做到了真正的国际化！")])])]),_._v(" "),t("Vssue")],1)}),[],!1,null,null,null);v.default=o.exports}}]);
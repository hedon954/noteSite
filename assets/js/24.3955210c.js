(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{431:function(t,s,a){"use strict";a.r(s);var n=a(47),r=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"golang-并发编程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#golang-并发编程"}},[t._v("#")]),t._v(" Golang 并发编程")]),t._v(" "),a("ul",[a("li",[t._v("什么是并发编程")]),t._v(" "),a("li",[t._v("什么是并行，并发，串行")]),t._v(" "),a("li",[t._v("Go 语言如何实现并发编程，以及实现的原理")]),t._v(" "),a("li",[t._v("goroutine 的使用")]),t._v(" "),a("li",[t._v("runtime 包")]),t._v(" "),a("li",[t._v("sync 包的介绍")]),t._v(" "),a("li",[t._v("channel 通道的使用，以及缓冲通道，定向通道")]),t._v(" "),a("li",[t._v("select 语句")]),t._v(" "),a("li",[t._v("time 包中和并发编程相关的函数介绍")]),t._v(" "),a("li",[t._v("CSP 模型")])]),t._v(" "),a("h2",{attrs:{id:"一、并发性-concurrency"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、并发性-concurrency"}},[t._v("#")]),t._v(" 一、并发性 Concurrency")]),t._v(" "),a("h3",{attrs:{id:"_1-多任务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-多任务"}},[t._v("#")]),t._v(" 1. 多任务")]),t._v(" "),a("p",[t._v("怎么来理解多任务呢？其实就是指我们的操作系统可以同时执行多个任务。举个例子，你一边听音乐，一边刷微博，一边聊 QQ，一边用Markdown 写作业，这就是多任务，至少同时有4个任务正在运行。还有很多任务悄悄地在后台同时运行着，只是界面上没有显示而已。")]),t._v(" "),a("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://tva1.sinaimg.cn/large/008i3skNly1gsnhy2t6h4j30dw0ev3ze.jpg",alt:"img"}}),t._v(" "),a("h3",{attrs:{id:"_1-2-并发"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-并发"}},[t._v("#")]),t._v(" 1.2 并发")]),t._v(" "),a("p",[t._v("Go 是并发语言，而不是并行语言。在讨论如何在 Go 中进行并发处理之前，我们首先必须了解什么是并发，以及它与并行性有什么不同。")]),t._v(" "),a("blockquote",[a("p",[t._v("Go is a concurrent language and not a parallel one.")])]),t._v(" "),a("p",[a("strong",[t._v("并发性 Concurrency 是同时处理许多事情的能力")])]),t._v(" "),a("p",[a("strong",[t._v("并行就是同时做很多事情。")])]),t._v(" "),a("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://tva1.sinaimg.cn/large/008i3skNly1gsnhz810r5j30lv0iggn6.jpg",alt:"img"}}),t._v(" "),a("h3",{attrs:{id:"_1-3-进程-线程-协程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-进程-线程-协程"}},[t._v("#")]),t._v(" 1.3 进程/线程/协程")]),t._v(" "),a("p",[a("strong",[t._v("进程")])]),t._v(" "),a("p",[t._v("进程是一个程序在一个数据集中的一次动态执行过程，可以简单理解为“正在执行的程序”，它是 CPU 资源分配和调度的独立单位。")]),t._v(" "),a("p",[t._v("进程一般由程序、数据集、进程控制块三部分组成。我们编写的程序用来描述进程要完成哪些功能以及如何完成；数据集则是程序在执行过程中所需要使用的资源；进程控制块用来记录进程的外部特征，描述进程的执行变化过程，系统可以利用它来控制和管理进程，它是系统感知进程存在的唯一标志。")]),t._v(" "),a("p",[t._v("进程的局限是创建、撤销和切换的开销比较大。")]),t._v(" "),a("p",[a("strong",[t._v("线程")])]),t._v(" "),a("p",[t._v("线程是在进程之后发展出来的概念。 线程也叫轻量级进程，它是一个基本的 CPU 执行单元，也是程序执行过程中的最小单元，由线程 ID、程序计数器、寄存器集合和堆栈共同组成。")]),t._v(" "),a("p",[t._v("一个进程可以包含多个线程。")]),t._v(" "),a("p",[t._v("线程的优点是减小了程序并发执行时的开销，提高了操作系统的并发性能，缺点是线程没有自己的系统资源，只拥有在运行时必不可少的资源，但同一进程的各线程可以共享进程所拥有的系统资源，如果把进程比作一个车间，那么线程就好比是车间里面的工人。不过对于某些独占性资源存在锁机制，处理不当可能会产生“死锁”。")]),t._v(" "),a("p",[a("strong",[t._v("协程")])]),t._v(" "),a("p",[t._v("协程是一种用户态的轻量级线程，又称微线程，英文名 Coroutine，协程的调度完全由用户控制。人们通常将协程和子程序（函数）比较着理解。")]),t._v(" "),a("p",[t._v("子程序调用总是一个入口，一次返回，一旦退出即完成了子程序的执行。")]),t._v(" "),a("blockquote",[a("p",[t._v('与传统的系统级线程和进程相比，协程的最大优势在于其"'),a("strong",[t._v("轻量级")]),t._v('"，可以轻松创建上百万个而不会导致系统资源衰竭，而线程和进程通常最多也不能超过 1 万的。这也是协程也叫轻量级线程的原因。')]),t._v(" "),a("p",[t._v("协程与多线程相比，其优势体现在：协程的执行效率极高。因为子程序切换不是线程切换，而是由程序自身控制，因此，没有线程切换的开销，和多线程比，线程数量越多，协程的性能优势就越明显。")])]),t._v(" "),a("p",[a("strong",[t._v("Go语言对于并发的实现是靠协程，Goroutine")])]),t._v(" "),a("h2",{attrs:{id:"二、goroutine"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二、goroutine"}},[t._v("#")]),t._v(" 二、Goroutine")]),t._v(" "),a("h3",{attrs:{id:"_1-goroutine"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-goroutine"}},[t._v("#")]),t._v(" 1. Goroutine")]),t._v(" "),a("p",[t._v("Goroutine 是 Go 语言特有的名词。区别于进程 Process，线程 Thread，协程 Coroutine，因为 Go 语言的创造者们觉得和他们是有所区别的，所以专门创造了 Goroutine。")]),t._v(" "),a("p",[a("strong",[t._v("Goroutine 是与其他函数或方法同时运行的函数或方法。")]),t._v(" Goroutines 可以被认为是轻量级的线程。与线程相比，创建 Goroutine 的成本很小，它就是一段代码，一个函数入口。以及在堆上为其分配的一个堆栈（初始大小为 "),a("strong",[t._v("4K")]),t._v("，会随着程序的执行自动增长删除）。因此它非常廉价，Go 应用程序可以并发运行数千个 Goroutines。")]),t._v(" "),a("blockquote",[a("p",[a("strong",[t._v("Goroutine 在线程上的优势：")])]),t._v(" "),a("ol",[a("li",[a("p",[t._v("与线程相比，Goroutine 非常便宜。它们只是堆栈大小的几个 kb，堆栈可以根据应用程序的需要增长和收缩。")]),t._v(" "),a("p",[t._v("而在线程的情况下，堆栈大小必须指定并且是固定的。")])]),t._v(" "),a("li",[a("p",[t._v("Goroutine 被多路复用到较少的 OS 线程。在一个程序中可能只有一个线程与数千个 Goroutine。")]),t._v(" "),a("p",[t._v("如果线程中的任何 Goroutine 都表示等待用户输入，则会创建另一个 OS 线程，剩下的 Goroutine 被转移到新的 OS 线程。")]),t._v(" "),a("p",[t._v("所有这些都由运行时进行处理，我们作为程序员从这些复杂的细节中抽象出来，并得到了一个与并发工作相关的干净的 API。")])]),t._v(" "),a("li",[a("p",[t._v("当使用 Goroutine 访问共享内存时，通过设计的通道（channel）可以防止竞态条件发生。")]),t._v(" "),a("p",[t._v("通道可以被认为是 Goroutine 通信的管道。")])])])]),t._v(" "),a("h3",{attrs:{id:"_2-主-goroutine"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-主-goroutine"}},[t._v("#")]),t._v(" 2. 主 Goroutine")]),t._v(" "),a("blockquote",[a("p",[t._v("封装 "),a("strong",[t._v("main")]),t._v(" 函数的 Goroutine 称为主 Goroutine。")])]),t._v(" "),a("p",[a("strong",[t._v("主 Goroutine 所做的事情并不是执行 main 函数那么简单。它首先要做的是：设定每一个 Goroutine 所能申请的栈空间的最大尺寸。在 32 位的计算机系统中此最大尺寸为 250MB，而在 64 位的计算机系统中此尺寸为 1GB。如果有某个 Goroutine 的栈空间尺寸大于这个限制，那么运行时系统就会引发一个栈溢出（stack overflow）的运行时 panic。随后，这个 Go 程序的运行也会终止。")])]),t._v(" "),a("p",[t._v("此后，主 Goroutine 会进行一系列的初始化工作，涉及的工作内容大致如下：")]),t._v(" "),a("ol",[a("li",[t._v("创建一个特殊的 defer 语句，用于在主 Goroutine 退出时做必要的善后处理。因为主 Goroutine 也可能非正常的结束")]),t._v(" "),a("li",[t._v("启动专用于在后台清扫内存垃圾的 Goroutine，并设置 GC 可用的标识")]),t._v(" "),a("li",[t._v("执行 main 包中的 init 函数")]),t._v(" "),a("li",[t._v("执行 main 函数")]),t._v(" "),a("li",[t._v("执行完 main 函数后，它还会检查主 Goroutine 是否引发了运行时恐慌（panic），并进行必要的处理")]),t._v(" "),a("li",[t._v("最后主 Goroutine 会结束自己以及当前进程的运行")])]),t._v(" "),a("h3",{attrs:{id:"_3-使用-goroutine"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-使用-goroutine"}},[t._v("#")]),t._v(" 3. 使用 Goroutine")]),t._v(" "),a("blockquote",[a("p",[t._v("创建一个 Goroutine 非常简单，只需要在函数或方法调用前面加上关键字 go，就可以创建一个新的 Goroutine。")])]),t._v(" "),a("div",{staticClass:"language-go extra-class"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("package")]),t._v(" main\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"fmt"')]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"time"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("hello")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tfmt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hello world, Goroutine."')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("go")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("hello")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 睡眠一下，防止 Goroutine 还没创建并执行完成主 Goroutine 就已经结束了，这样进程就结束了，hello() 也就不会执行了")]),t._v("\n\ttime"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Sleep")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" time"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Millisecond"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\tfmt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"main function"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("输出：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("Hello world, Goroutine.\nmain function\n")])])]),a("p",[t._v("分析：")]),t._v(" "),a("ol",[a("li",[t._v("当新的 Goroutine 开始时，Goroutine 调用立即返回。与函数不同，Go 不等待 Goroutine 执行结束。当 Goroutine 调用，并且Goroutine 的任何返回值被忽略之后，Go 立即执行到下一行代码。")]),t._v(" "),a("li",[t._v("main 的 Goroutine 应该为其他的 Goroutine 执行。如果 main 的 Goroutine 终止了，程序将被终止，而其他 Goroutine 将不会运行。所以如果我们不睡眠的话，是有可能只输出 "),a("code",[t._v("main function")]),t._v(" 的。")])]),t._v(" "),a("h3",{attrs:{id:"_4-启动多个-goroutine"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-启动多个-goroutine"}},[t._v("#")]),t._v(" 4. 启动多个 Goroutine")]),t._v(" "),a("div",{staticClass:"language-go extra-class"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("package")]),t._v(" main\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("  \n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"fmt"')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"time"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("numbers")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("  \n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        time"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Sleep")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("250")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" time"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Millisecond"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        fmt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Printf")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"%d "')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("alphabets")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("  \n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'a'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'e'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        time"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Sleep")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("400")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" time"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Millisecond"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        fmt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Printf")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"%c "')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("  \n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("go")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("numbers")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" \n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("go")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("alphabets")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    time"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Sleep")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3000")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" time"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Millisecond"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    fmt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"main terminated"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("输出：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("1 a 2 3 b 4 c 5 d e main terminated  \n")])])]),a("p",[t._v("分析：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://tva1.sinaimg.cn/large/008i3skNly1gsnidy6hbtj30wo0hwmy9.jpg",alt:"img"}})]),t._v(" "),a("h2",{attrs:{id:"三、go-语言并发模型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三、go-语言并发模型"}},[t._v("#")]),t._v(" 三、Go 语言并发模型")]),t._v(" "),a("p",[t._v("Go 语言相比 Java 等一个很大的优势就是可以方便地编写并发程序。Go 语言内置了 Goroutine 机制，使用 Goroutine 可以快速地开发并发程序， 更好的利用多核处理器资源。接下来我们来了解一下 Go 语言的并发原理。")]),t._v(" "),a("h3",{attrs:{id:"_1-线程模型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-线程模型"}},[t._v("#")]),t._v(" 1. 线程模型")]),t._v(" "),a("p",[t._v("在现代操作系统中，"),a("strong",[t._v("线程是处理器调度和分配的基本单位，进程则作为资源拥有的基本单位。")]),t._v(" 每个进程是由私有的虚拟地址空间、代码、数据和其它各种系统资源组成。线程是进程内部的一个执行单元。 每一个进程至少有一个主执行线程，它无需由用户去主动创建，是由系统自动创建的。 用户根据需要在应用程序中创建其它线程，多个线程并发地运行于同一个进程中。")]),t._v(" "),a("p",[t._v("我们先从线程讲起，"),a("strong",[t._v("无论语言层面何种并发模型，到了操作系统层面，一定是以线程的形态存在的。")]),t._v(" 而操作系统根据资源访问权限的不同，体系架构可分为用户空间和内核空间：")]),t._v(" "),a("ul",[a("li",[t._v("内核空间主要操作访问 CPU 资源、I/O 资源、内存资源等硬件资源，为上层应用程序提供最基本的基础资源")]),t._v(" "),a("li",[t._v("用户空间就是上层应用程序的固定活动空间，用户空间不可以直接访问资源，必须通过“系统调用”、“库函数”或“ Shell 脚本”来调用内核空间提供的资源")])]),t._v(" "),a("p",[t._v("我们现在的计算机语言，可以狭义的认为是一种“软件”，它们中所谓的“线程”，"),a("strong",[t._v("往往是用户态的线程")]),t._v("，和操作系统本身内核态的线程（简称 KSE），还是有区别的。")]),t._v(" "),a("p",[t._v("Go 并发编程模型在底层是由操作系统所提供的线程库支撑的，因此还是得从线程实现模型说起。")]),t._v(" "),a("p",[t._v("线程可以视为进程中的控制流。一个进程至少会包含一个线程，因为其中至少会有一个控制流持续运行。因而，一个进程的第一个线程会随着这个进程的启动而创建，这个线程称为该进程的主线程。当然，一个进程也可以包含多个线程。这些线程都是由当前进程中已存在的线程创建出来的，创建的方法就是调用系统调用，更确切地说是调用 "),a("code",[t._v("pthread create")]),t._v(" 函数。")]),t._v(" "),a("p",[t._v("拥有多个线程的进程可以并发执行多个任务，并且即使某个或某些任务被阻塞，也不会影响其他任务正常执行，这可以大大改善程序的响应时间和吞吐量。另一方面，线程不可能独立于进程存在。它的生命周期不可能逾越其所属进程的生命周期。")]),t._v(" "),a("p",[t._v("线程的实现模型主要有 3 个，分别是：")]),t._v(" "),a("ul",[a("li",[t._v("用户级线程模型")]),t._v(" "),a("li",[t._v("内核级线程模型")]),t._v(" "),a("li",[t._v("两级线程模型")])]),t._v(" "),a("p",[t._v("它们之间最大的差异就在于线程与内核调度实体（Kernel Scheduling Entity，简称 KSE）之间的对应关系上。顾名思义，内核调度实体就是可以被内核的调度器调度的对象。在很多文献和书中，它也称为内核级线程，是操作系统内核的最小调度单元。")]),t._v(" "),a("h4",{attrs:{id:"_1-1-内核级线程模型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-内核级线程模型"}},[t._v("#")]),t._v(" 1.1 内核级线程模型")]),t._v(" "),a("blockquote",[a("p",[t._v("用户线程与 KSE 是1对1关系（1:1）。")])]),t._v(" "),a("p",[t._v("大部分编程语言的线程库（如 Linux 的 pthread，Java 的 java.lang.Thread，C++11 的 std::thread 等等）都是对操作系统的线程（内核级线程）的一层封装，创建出来的每个线程与一个不同的 KSE 静态关联，因此其调度完全由 OS 调度器来做。")]),t._v(" "),a("p",[t._v("这种方式实现简单，直接借助 OS 提供的线程能力，并且不同用户线程之间一般也不会相互影响。但其创建，销毁以及多个线程之间的上下文切换等操作都是直接由 OS 层面亲自来做，在需要使用大量线程的场景下对 OS 的性能影响会很大。")]),t._v(" "),a("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://tva1.sinaimg.cn/large/008i3skNly1gsniksv27qj30yg0kowfg.jpg",alt:"img"}}),t._v(" "),a("p",[t._v("每个线程由内核调度器独立的调度，所以如果一个线程阻塞则不影响其他的线程。")]),t._v(" "),a("p",[t._v("优点：")]),t._v(" "),a("ul",[a("li",[t._v("在多核处理器的硬件的支持下，内核空间线程模型支持了真正的并行，当一个线程被阻塞后，允许另一个线程继续执行，所以并发能力较强。")])]),t._v(" "),a("p",[t._v("缺点：")]),t._v(" "),a("ul",[a("li",[t._v("每创建一个用户级线程都需要创建一个内核级线程与其对应，这样创建线程的开销比较大，会影响到应用程序的性能。")])]),t._v(" "),a("h4",{attrs:{id:"_1-2-用户级线程模型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-用户级线程模型"}},[t._v("#")]),t._v(" 1.2 用户级线程模型")]),t._v(" "),a("blockquote",[a("p",[t._v("用户线程与 KSE 是多对一关系（M:1)。")])]),t._v(" "),a("p",[t._v("这种线程的创建，销毁以及多个线程之间的协调等操作都是由用户自己实现的线程库来负责，对 OS 内核透明，一个进程中所有创建的线程都与同一个 KSE 在运行时动态关联。")]),t._v(" "),a("p",[t._v("现在有许多语言实现的 "),a("strong",[t._v("协程")]),t._v(" 基本上都属于这种方式。这种实现方式相比内核级线程可以做的很轻量级，对系统资源的消耗会小很多，因此可以创建的数量与上下文切换所花费的代价也会小得多。")]),t._v(" "),a("p",[t._v("但该模型有个致命的缺点：")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("如果我们在某个用户线程上调用阻塞式系统调用（如用阻塞方式 read 网络 IO)，那么一旦 KSE 因阻塞被内核调度出 CPU 的话，剩下的所有对应的用户线程全都会变为阻塞状态（整个进程挂起）。")])])]),t._v(" "),a("p",[t._v("所以这些语言的 "),a("strong",[t._v("协程库")]),t._v(" 会把自己一些阻塞的操作重新封装为完全的非阻塞形式，然后在以前要阻塞的点上，主动让出自己，并通过某种方式通知或唤醒其他待执行的用户线程在该 KSE 上运行，从而避免了内核调度器由于 KSE 阻塞而做上下文切换，这样整个进程也不会被阻塞了。")]),t._v(" "),a("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://tva1.sinaimg.cn/large/008i3skNly1gsnimp8h1mj30yg0khdgl.jpg",alt:"img"}}),t._v(" "),a("p",[t._v("优点：")]),t._v(" "),a("ul",[a("li",[t._v("这种模型的好处是线程上下文切换都发生在用户空间，避免的模态切换（mode switch），从而对于性能有积极的影响。")])]),t._v(" "),a("p",[t._v("缺点：")]),t._v(" "),a("ul",[a("li",[t._v("所有的线程基于一个内核调度实体即内核线程，这意味着只有一个处理器可以被利用，在多处理器环境下这是不能够被接受的，本质上，用户线程只解决了并发问题，但是没有解决并行问题。如果线程因为 I/O 操作陷入了内核态，内核态线程阻塞等待 I/O 数据，则所有的线程都将会被阻塞，用户空间也可以使用非阻塞而 I/O，但是不能避免性能及复杂度问题。")])]),t._v(" "),a("h4",{attrs:{id:"_1-3-两级线程模型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-两级线程模型"}},[t._v("#")]),t._v(" 1.3 两级线程模型")]),t._v(" "),a("blockquote",[a("p",[t._v("用户线程与 KSE 是多对多关系（M:N）。")])]),t._v(" "),a("p",[t._v("这种实现综合了前两种模型的优点，为一个进程中创建多个 KSE，并且线程可以与不同的 KSE 在运行时进行动态关联，当某个 KSE 由于其上工作的线程的阻塞操作被内核调度出 CPU 时，当前与其关联的其余用户线程可以重新与其他 KSE 建立关联关系。当然这种动态关联机制的实现很复杂，也需要用户自己去实现，这算是它的一个缺点吧。")]),t._v(" "),a("p",[a("strong",[t._v("Go 语言中的并发就是使用的这种实现方式")]),t._v("，Go 为了实现该模型自己实现了一个"),a("strong",[t._v("运行时调度器")]),t._v('来负责 Go 中的"线程"与 KSE 的动态关联。')]),t._v(" "),a("p",[t._v("此模型有时也被称为 "),a("strong",[t._v("混合型线程模型")]),t._v("，"),a("strong",[t._v("即用户调度器实现用户线程到 KSE 的“调度”，内核调度器实现 KSE 到 CPU 上的调度")]),t._v("。")]),t._v(" "),a("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://tva1.sinaimg.cn/large/008i3skNly1gsnioow0xsj30v00m0wfh.jpg",alt:"img"}}),t._v(" "),a("h3",{attrs:{id:"_2-go-并发模型-gpm-模型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-go-并发模型-gpm-模型"}},[t._v("#")]),t._v(" 2. Go 并发模型 —— GPM 模型")]),t._v(" "),a("p",[t._v("在操作系统提供的内核线程之上，Go 搭建了一个特有的两级线程模型。")]),t._v(" "),a("p",[t._v("Goroutine 机制实现了 M : N 的线程模型，Goroutine 机制是协程（coroutine）的一种实现，Go 内置的调度器，可以让多核 CPU 中每个 CPU 执行一个协程。")]),t._v(" "),a("h4",{attrs:{id:"_2-1-调度器是如何工作的"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-调度器是如何工作的"}},[t._v("#")]),t._v(" 2.1 调度器是如何工作的")]),t._v(" "),a("p",[t._v("有了上面的知识，我们可以开始真正的介绍 Go 的并发机制了，先用一段代码展示一下在 Go 语言中新建一个 Goroutine：")]),t._v(" "),a("div",{staticClass:"language-go extra-class"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 用go关键字加上一个函数（这里用了匿名函数）")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 调用就做到了在一个新的“线程”并发执行任务")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("go")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" \n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// do something in one new goroutine")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("功能上等价于 Java8 的代码：")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[a("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("java"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("lang"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")])]),t._v("Thread")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" \n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// do something in one new thread")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("start")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("理解 Goroutine 机制的原理，关键是理解 Go 调度器 scheduler 的实现。")]),t._v(" "),a("p",[t._v("Go 语言中支撑整个 scheduler 实现的主要有 4 个重要结构，分别是 M、G、P、Sched， 前三个定义在 runtime.h 中，Sched 定义在 proc.c 中。")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("代号")]),t._v(" "),a("th",[t._v("名称")]),t._v(" "),a("th",[t._v("定义位置")]),t._v(" "),a("th",[t._v("作用")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("Sched")]),t._v(" "),a("td",[t._v("调度器")]),t._v(" "),a("td",[t._v("proc.c")]),t._v(" "),a("td",[t._v("维护有存储 M 和 G 的队列以及调度器的一些状态信息等。")])]),t._v(" "),a("tr",[a("td",[t._v("M")]),t._v(" "),a("td",[t._v("Machine"),a("br"),t._v("系统线程")]),t._v(" "),a("td",[t._v("runtime.h")]),t._v(" "),a("td",[t._v("它由操作系统管理的，Goroutine就是跑在 M 之上的；M 是一个很大的结构，里面维护小对象内存 cache（mcache）、当前执行的 Goroutine、随机数发生器等等非常多的信息。")])]),t._v(" "),a("tr",[a("td",[t._v("P")]),t._v(" "),a("td",[t._v("Processor"),a("br"),t._v("处理器")]),t._v(" "),a("td",[t._v("runtime.h")]),t._v(" "),a("td",[t._v("它的主要用途就是用来执行 Goroutine 的，它维护了一个 Goroutine 队列，即 runqueue。Processor 是让我们从 N:1 调度到 M:N 调度的重要部分。")])]),t._v(" "),a("tr",[a("td",[t._v("G")]),t._v(" "),a("td",[t._v("Goroutine 实现的核心结构")]),t._v(" "),a("td",[t._v("runtime.h")]),t._v(" "),a("td",[t._v("它包含了栈，指令指针，以及其他对调度 Goroutine 很重要的信息，例如其阻塞的 channel。")])])])]),t._v(" "),a("blockquote",[a("p",[t._v("Processor 的数量是在启动时被设置为环境变量 "),a("code",[t._v("GOMAXPROCS")]),t._v(" 的值，或者通过运行时调用函数 "),a("code",[t._v("GOMAXPROCS()")]),t._v(" 进行设置。")]),t._v(" "),a("p",[t._v("Processor 数量固定意味着任意时刻只有 GOMAXPROCS 个线程在运行 Go 代码。")])]),t._v(" "),a("p",[t._v("我们分别用三角形，矩形和圆形表示 Machine、Processor 和 Goroutine。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://tva1.sinaimg.cn/large/008i3skNly1gsnizo5rlcj31d00gijrn.jpg",alt:"image-20210720170700064"}})]),t._v(" "),a("p",[t._v("单核处理器的场景下：")]),t._v(" "),a("ul",[a("li",[t._v("所有 Goroutine 运行在同一个 M 系统线程中，每一个 M 系统线程维护一个 Processor，任何时刻，一个 Processor 中只有一个 Goroutine，其他 Goroutine 在 runqueue 中等待。一个 Goroutine 运行完自己的时间片后，让出上下文，回到 runqueue 中。")])]),t._v(" "),a("p",[t._v("多核处理器的场景下：")]),t._v(" "),a("ul",[a("li",[t._v("为了运行 Goroutines，每个 M 系统线程会持有一个 Processor。")])]),t._v(" "),a("h4",{attrs:{id:"_2-2-线程阻塞"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-线程阻塞"}},[t._v("#")]),t._v(" 2.2 线程阻塞")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("正常情况下：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://tva1.sinaimg.cn/large/008i3skNly1gsnj1grjn9j31vo0mwwfi.jpg",alt:"image-20210720170843613"}})]),t._v(" "),a("p",[t._v("在正常情况下，scheduler 会按照上面的流程进行调度，但是线程会发生阻塞等情况，下面来看一下 Goroutine 对线程阻塞等的处理。")])]),t._v(" "),a("li",[a("p",[t._v("线程阻塞下：")]),t._v(" "),a("p",[t._v("当正在运行的 Goroutine 阻塞的时候，例如进行系统调用，会"),a("strong",[t._v("再创建一个系统线程（M1）")]),t._v("，当前的 M 线程放弃了它的 Processor，Processor 会转到新的线程 M1 中去运行。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://tva1.sinaimg.cn/large/008i3skNgy1gsnj3i8wmdj31lw0qgjsh.jpg",alt:"image-20210720171040810"}})])])]),t._v(" "),a("h4",{attrs:{id:"_2-3-runqueue-执行完成"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-runqueue-执行完成"}},[t._v("#")]),t._v(" 2.3 runqueue 执行完成")]),t._v(" "),a("p",[t._v("当其中一个 Processor 的 runqueue 为空，没有 Goroutine 可以调度。"),a("strong",[t._v("它会从另外一个上下文偷取一半的 Goroutine")]),t._v("。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://tva1.sinaimg.cn/large/008i3skNgy1gsnj5n6e56j31ls0u0gmv.jpg",alt:"image-20210720171242658"}})]),t._v(" "),a("h4",{attrs:{id:"_2-4-为什么需要-processor"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-为什么需要-processor"}},[t._v("#")]),t._v(" 2.4 为什么需要 Processor")]),t._v(" "),a("blockquote",[a("p",[t._v("其图中的 G，P 和 M 都是 Go 语言运行时系统（其中包括内存分配器，并发调度器，垃圾收集器等组件，可以想象为 Java 中的JVM）抽象出来概念和数据结构对象：")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("G：Goroutine 的简称")]),t._v(" "),a("p",[t._v("上面用 go 关键字加函数调用的代码就是创建了一个 G 对象，是对一个要并发执行的任务的封装，也可以称作用户态线程。属于用户级资源，对 OS 透明，具备轻量级，可以大量创建，上下文切换成本低等特点。")])]),t._v(" "),a("li",[a("p",[t._v("M：Machine 的简称")]),t._v(" "),a("p",[t._v("在 Linux 平台上是用 clone 系统调用创建的，其与用 Linux pthread 库创建出来的线程本质上是一样的，都是利用系统调用创建出来的 OS 线程实体。\nM 的作用就是执行 G 中包装的并发任务。"),a("strong",[t._v("Go 运行时系统中的调度器的主要职责就是将 G 公平合理的安排到多个 M 上去执行")]),t._v("。其属于 OS 资源，可创建的数量上也受限了 OS，通常情况下 G 的数量都多于活跃的 M 的。")])]),t._v(" "),a("li",[a("p",[t._v("P：Processor 的简称")]),t._v(" "),a("p",[t._v("逻辑处理器，主要作用是管理 G 对象（每个 P 都有一个 G 队列），并为 G 在 M 上的运行提供本地化资源。")])])])]),t._v(" "),a("p",[t._v("从两级线程模型来看，似乎并不需要 P 的参与，有 G 和 M 就可以了，那为什么要加入 P 呢？")]),t._v(" "),a("p",[t._v("其实 Go 语言运行时系统早期（Go1.0）的实现中并没有 P 的概念，Go 中的调度器直接将 G 分配到合适的 M 上运行。但这样带来了很多问题：")]),t._v(" "),a("ul",[a("li",[t._v("例如，不同的 G 在不同的 M 上并发运行时可能都需向系统申请资源（如堆内存），由于资源是全局的，将会由于资源竞争造成很多系统性能损耗。")])]),t._v(" "),a("p",[t._v("为了解决类似的问题，后面的 Go（Go1.1）运行时系统加入了 P，让 P 去管理 G 对象，M 要想运行 G 必须先与一个 P 绑定，然后才能运行该 P 管理的 G。这样带来的好处是：")]),t._v(" "),a("ul",[a("li",[t._v("我们可以在 P 对象中预先申请一些系统资源（本地资源），G 需要的时候先向自己的本地 P 申请（无需锁保护），如果不够用或没有再向全局申请，而且从全局拿的时候会多拿一部分，以供后面高效的使用。就像现在我们去政府办事情一样，先去本地政府看能搞定不，如果搞不定再去中央，从而提供办事效率。")]),t._v(" "),a("li",[t._v("而且由于  P 解耦了 G 和 M 对象，这样即使 M 由于被其上正在运行的 G 阻塞住，其余与该 M 关联的 G 也可以随着 P 一起迁移到别的活跃的 M 上继续运行，从而让 G 总能及时找到 M 并运行自己，从而提高系统的并发能力。")])]),t._v(" "),a("p",[t._v("Go 运行时系统通过构造 G-P-M 对象模型实现了一套用户态的并发调度系统，可以自己管理和调度自己的并发任务，所以可以说 Go 语言 "),a("strong",[t._v("原生支持并发")]),t._v("。"),a("strong",[t._v("自己实现的调度器负责将并发任务分配到不同的内核线程上运行，然后内核调度器接管内核线程在 CPU 上的执行与调度。")])]),t._v(" "),a("h4",{attrs:{id:"_2-5-总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-5-总结"}},[t._v("#")]),t._v(" 2.5 总结")]),t._v(" "),a("p",[t._v("可以看到 Go 的并发用起来非常简单，用了一个语法糖将内部复杂的实现结结实实的包装了起来。其内部可以用下面这张图来概述：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://tva1.sinaimg.cn/large/008i3skNly1gsnjc0wq5sj30w60u0go5.jpg",alt:"img"}})]),t._v(" "),a("h4",{attrs:{id:"_2-6-深究"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-6-深究"}},[t._v("#")]),t._v(" 2.6 深究")]),t._v(" "),a("div",{staticClass:"language-go extra-class"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Goroutine1")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("task1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("go")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("task2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("go")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("task3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("假如我们有一个 G（Goroutine1）已经通过 P 被安排到了一个 M 上正在执行，在 Goroutine1 执行的过程中我们又创建两个 G，这两个 G 会被马上放入与 Goroutine1 相同的 P 的本地 G 任务队列中，排队等待与该 P 绑定的 M 的执行，这是最基本的结构，很好理解。 关键问题是：")]),t._v(" "),a("ol",[a("li",[a("p",[a("strong",[t._v("如何在一个多核心系统上尽量合理分配 G 到多个 M 上运行，充分利用多核，提高并发能力呢？")])]),t._v(" "),a("blockquote",[a("p",[t._v("如果我们在一个 Goroutine 中通过 "),a("strong",[t._v("go")]),t._v(" 关键字创建了大量 G，这些 G 虽然暂时会被放在同一个队列, 但如果这时还有空闲 P（系统内 P 的数量默认等于系统 CPU 核心数），Go 运行时系统始终能保证至少有一个（通常也只有一个）活跃的 M 与空闲 P 绑定去各种 G 队列去寻找可运行的G任务，该种M称为 "),a("strong",[t._v("自旋的 M")]),t._v("。")]),t._v(" "),a("p",[t._v("一般寻找顺序为：")]),t._v(" "),a("ol",[a("li",[t._v("自己绑定的 P 的队列")]),t._v(" "),a("li",[t._v("全局队列")]),t._v(" "),a("li",[t._v("其他 P 队列")])]),t._v(" "),a("p",[t._v("如果自己 P 队列找到就拿出来开始运行，否则去全局队列看看，由于全局队列需要锁保护，如果里面有很多任务，会转移一批到本地 P 队列中，避免每次都去竞争锁。如果全局队列还是没有，就直接从其他 P 队列偷任务了（偷一半任务回来）。这样就保证了在还有可运行的 G 任务的情况下，总有与 CPU 核心数相等的 M+P 组合在执行 G 任务或在执行 G 的路上（寻找 G 任务）。")])])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("如果某个 M 在执行 G 的过程中被 G 中的系统调用阻塞了，怎么办？")])]),t._v(" "),a("blockquote",[a("p",[t._v("在这种情况下，这个 M 将会被内核调度器调度出 CPU 并处于阻塞状态，与该 M 关联的其他 G 就没有办法继续执行了，但 Go 运行时系统的一个监控线程（"),a("strong",[t._v("sysmon")]),t._v("线程）能探测到这样的 M，并把与该 M 绑定的 P 剥离，寻找其他空闲或新建 M 接管该 P，然后继续运行其中的 G，大致过程如下图所示：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://tva1.sinaimg.cn/large/008i3skNly1gsnji9n2ooj31lw0qgmy9.jpg",alt:"image-20210720171040810"}})]),t._v(" "),a("p",[t._v("然后等到该 M 从阻塞状态恢复，需要重新找一个空闲 P 来继续执行原来的 G，如果这时系统正好没有空闲的 P，就把原来的 G 放到全局队列当中，等待其他 M+P 组合发掘并执行。")])])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("如果某一个 G 在 M 运行时间过长，有没有办法做抢占式调度，让该 M 上的其他 G 获得一定的运行时间，以保证调度系统的公平性?")])]),t._v(" "),a("blockquote",[a("p",[t._v("我们知道 Linux 的内核调度器主要是基于 "),a("strong",[t._v("时间片")]),t._v(" 和 "),a("strong",[t._v("优先级")]),t._v(' 做调度的。对于相同优先级的线程，内核调度器会尽量保证每个线程都能获得一定的执行时间。为了防止有些线程"饿死"的情况，内核调度器会发起抢占式调度将长期运行的线程中断并让出 CPU 资源，让其他线程获得执行机会。')]),t._v(" "),a("p",[t._v("当然在 Go 的运行时调度器中也有类似的抢占机制，但并不能保证抢占能成功，因为 Go 运行时系统并没有内核调度器的中断能力，它只能通过向运行时间过长的 G 中设置抢占 flag 的方法温柔的让运行的 G 自己主动让出 M 的执行权。")]),t._v(" "),a("p",[t._v("说到这里就不得不提一下 Goroutine 在运行过程中可以动态扩展自己线程栈的能力，可以从初始的 2KB 大小扩展到最大 1G（64bit 系统上），因此在每次调用函数之前需要先计算该函数调用需要的栈空间大小，然后按需扩展（超过最大值将导致运行时异常）。Go 抢占式调度的机制就是利用在判断要不要扩栈的时候顺便查看以下自己的抢占 flag，决定是否继续执行，还是让出自己。")]),t._v(" "),a("p",[t._v("运行时系统的监控线程会计时并设置抢占 flag 到运行时间过长的 G，然后 G 在有函数调用的时候会检查该抢占 flag，如果已设置就将自己放入全局队列，这样该 M 上关联的其他 G 就有机会执行了。但如果正在执行的 G 是个很耗时的操作且没有任何函数调用（如只是 for 循环中的计算操作），即使抢占 flag 已经被设置，该 G 还是将一直霸占着当前 M 直到执行完自己的任务。")])])])]),t._v(" "),a("h3",{attrs:{id:"_3-runtime-包"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-runtime-包"}},[t._v("#")]),t._v(" 3. runtime 包")]),t._v(" "),a("blockquote",[a("p",[t._v("Package runtime contains operations that interact with Go's runtime system, such as functions to control goroutines. It also includes the low-level type information used by the reflect package; see reflect's documentation for the programmable interface to the run-time type system.")]),t._v(" "),a("p",[t._v("runtime 包包含与 Go 运行时系统交互的操作，比如控制 Goroutine 的函数。它还包括 reflect 包使用的底层类型信息。有关运行时类型系统的可编程接口，请参见 reflect 的文档。")])]),t._v(" "),a("blockquote",[a("p",[t._v("参考：")]),t._v(" "),a("ul",[a("li",[t._v("https://studygolang.com/articles/11322?fr=sidebar")]),t._v(" "),a("li",[t._v("https://www.cnblogs.com/williamjie/p/9456764.html")])])])])}),[],!1,null,null,null);s.default=r.exports}}]);
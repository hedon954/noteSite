(window.webpackJsonp=window.webpackJsonp||[]).push([[90],{501:function(t,s,a){"use strict";a.r(s);var n=a(47),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"五、字节码执行引擎"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#五、字节码执行引擎"}},[t._v("#")]),t._v(" 五、字节码执行引擎")]),t._v(" "),a("h2",{attrs:{id:"_1-概述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-概述"}},[t._v("#")]),t._v(" 1. 概述")]),t._v(" "),a("h3",{attrs:{id:"_1-1-功能"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-功能"}},[t._v("#")]),t._v(" 1.1 功能")]),t._v(" "),a("ul",[a("li",[t._v("JVM 的字节码执行引擎的基本功能就是输入字节码文件，然后对字节码进行解析并处理，最后输出执行的结果。")])]),t._v(" "),a("h3",{attrs:{id:"_1-2-实现方式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-实现方式"}},[t._v("#")]),t._v(" 1.2 实现方式")]),t._v(" "),a("p",[t._v("①通过编译器直接解释执行字节码 —— 读一句 -> 解释一句 -> 执行一句")]),t._v(" "),a("p",[t._v("② 通过即时编译器产生本地代码（编译执行）—— 先整体编译成机器码 -> 直接执行机器码")]),t._v(" "),a("p",[t._v("③ 上述两种结合")]),t._v(" "),a("h2",{attrs:{id:"_2-栈帧"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-栈帧"}},[t._v("#")]),t._v(" 2. 栈帧")]),t._v(" "),a("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://tva1.sinaimg.cn/large/008i3skNly1gtviljmlogj60q60oqjtd02.jpg",alt:"image-20210305143923925"}}),t._v(" "),a("ul",[a("li",[t._v("栈帧是用于支持 JVM 进行"),a("strong",[t._v("方法调用")]),t._v("和"),a("strong",[t._v("方法执行")]),t._v("的数据结构。")]),t._v(" "),a("li",[t._v("栈帧随着方法调用而创建，随着方法结束而销毁。")]),t._v(" "),a("li",[t._v("栈帧里面存储了：\n"),a("ul",[a("li",[t._v("方法的局部变量")]),t._v(" "),a("li",[t._v("操作数栈")]),t._v(" "),a("li",[t._v("动态连接")]),t._v(" "),a("li",[t._v("方法返回地址")]),t._v(" "),a("li",[t._v("....")])])])]),t._v(" "),a("h3",{attrs:{id:"_2-1-局部变量表"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-局部变量表"}},[t._v("#")]),t._v(" 2.1 局部变量表")]),t._v(" "),a("blockquote",[a("p",[t._v("用来存放方法参数和方法内部定义的局部变量的存储空间。")])]),t._v(" "),a("ol",[a("li",[a("p",[t._v("以变量槽 slot 为单位，目前一个 slot 存放 32 位以内的数据类型。")])]),t._v(" "),a("li",[a("p",[t._v("对于 64 位数据（如 long、double）占 2 个 slot。")])]),t._v(" "),a("li",[a("p",[t._v("对于实例方法，第 0 位 slot 存放的是 this，然后从 1 到 n，依次分配给参数列表和局部变量。")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//实例方法")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" c "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" b "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" c"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    \n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//slot 排位")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//0--this")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//1--a")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//2--b")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//3--c")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("使用 "),a("code",[t._v("javap -verbose")]),t._v(" 反汇编后得到的结果如下：")]),t._v(" "),a("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://tva1.sinaimg.cn/large/008i3skNly1gtvilip9jnj60uc0ou76p02.jpg",alt:"image-20210305145735854"}})]),t._v(" "),a("li",[a("p",[t._v("对于静态方法，就没有 this 了")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//静态方法")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("staticAdd")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" c "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" b "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" c"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    \n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//slot 排位")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//0--a")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//1--b")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//2--c")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://tva1.sinaimg.cn/large/008i3skNly1gtvilib0ikj60u00nk0ux02.jpg",alt:"image-20210305150026578"}})]),t._v(" "),a("li",[a("p",[t._v("slot 是复用的，以节省栈帧的空间，这种设计可能会影响到系统的垃圾回收行为。所以"),a("strong",[t._v("当确定引用不会再被使用的时候，最好是显式将其置为 null")]),t._v("。")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" args"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//定义一个 2M 的数组")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("byte")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" bs "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("byte")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1024")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1024")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//出了作用域后，bs 已经没用了，但是它的插槽仍然存在：slot排位")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//0--args")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//1--bs1")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//加入 int a=0 后，为了节省栈帧的空间，slot 进行复用，所以 1 号 slot 就分给了 a")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//slot排位")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//0--args")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//1--a")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//并不保证 gc 一定会触发")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("gc")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])]),t._v(" "),a("h3",{attrs:{id:"_2-2-操作数栈"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-操作数栈"}},[t._v("#")]),t._v(" 2.2 操作数栈")]),t._v(" "),a("blockquote",[a("p",[t._v("用来存放方法运行期间，各个指令操作的数据。")])]),t._v(" "),a("ol",[a("li",[t._v("操作数栈中元素的数据类型必须和字节码指令的顺序严格匹配。")]),t._v(" "),a("li",[t._v("虚拟机在实现栈帧的时候可能会做一些优化，让两个栈帧出现部分重叠区域，以存放公用的数据。")])]),t._v(" "),a("h3",{attrs:{id:"_2-3-动态链接"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-动态链接"}},[t._v("#")]),t._v(" 2.3 动态链接")]),t._v(" "),a("blockquote",[a("p",[t._v("每个栈帧都有一个指向运行时常量池中该栈帧所属方法的引用，以支持方法调用过程的动态链接。")])]),t._v(" "),a("ol",[a("li",[t._v("静态解析：类加载的时候，符号引用就转化为直接引用。")]),t._v(" "),a("li",[t._v("动态链接：运行期间转换为直接引用。")])]),t._v(" "),a("h3",{attrs:{id:"_2-4-方法返回地址"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-方法返回地址"}},[t._v("#")]),t._v(" 2.4 方法返回地址")]),t._v(" "),a("blockquote",[a("p",[t._v("方法执行后返回的地址（方法被调用的地方）。")])]),t._v(" "),a("h3",{attrs:{id:"_2-5-方法调用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-5-方法调用"}},[t._v("#")]),t._v(" 2.5 方法调用")]),t._v(" "),a("blockquote",[a("p",[t._v("确定具体调用哪一个方法，并不涉及方法内部的执行过程（只是一个找的过程，并不会执行方法）。")])]),t._v(" "),a("ol",[a("li",[t._v("部分方法是直接在类加载的解析阶段，就确定了引用关系。如静态方法、私有方法、实例构造器、父类方法。")]),t._v(" "),a("li",[t._v("但是对于实例方法，也称虚方法，因为重载和多态，需要运行期间动态委派。")])]),t._v(" "),a("h3",{attrs:{id:"_2-6-分派"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-6-分派"}},[t._v("#")]),t._v(" 2.6 分派")]),t._v(" "),a("h5",{attrs:{id:"静态分派"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#静态分派"}},[t._v("#")]),t._v(" 静态分派")]),t._v(" "),a("blockquote",[a("p",[t._v("所有依赖静态类型来定位方法执行版本的分派方式。")])]),t._v(" "),a("p",[t._v("如：重载方法（看参数列表的数据类型）")]),t._v(" "),a("h5",{attrs:{id:"动态分派"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#动态分派"}},[t._v("#")]),t._v(" 动态分派")]),t._v(" "),a("blockquote",[a("p",[t._v("根据运行期的实际类型来定位方法执行版本的分派方式。")])]),t._v(" "),a("p",[t._v("如：覆盖方法")]),t._v(" "),a("Vssue")],1)}),[],!1,null,null,null);s.default=e.exports}}]);
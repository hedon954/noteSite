(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{432:function(t,n,s){"use strict";s.r(n);var a=s(47),e=Object(a.a)({},(function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"golang-接口"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#golang-接口"}},[t._v("#")]),t._v(" Golang 接口")]),t._v(" "),s("p",[t._v("面向对象世界中的接口的一般定义是“接口定义对象的行为”。它表示让指定对象应该做什么。实现这种行为的方法（实现细节）是针对对象的。")]),t._v(" "),s("p",[t._v("在 Golang 中，接口是 "),s("strong",[t._v("一组方法签名")]),t._v(" 。当类型为接口中的所有方法提供定义时，它被称为 "),s("strong",[t._v("实现接口")]),t._v(" 。它与 OOP 非常相似。接口指定了类型应该具有的方法，类型决定了如何实现这些方法。")]),t._v(" "),s("p",[t._v("在 Golang 中，接口把所有的具有共性的方法定义在一起，任何其他类型只要实现了这些方法就是实现了这个接口，而不需要任何显性的声明，比如说 extends 阿什么的都是不需要的。")]),t._v(" "),s("h2",{attrs:{id:"一、golang-接口定义"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一、golang-接口定义"}},[t._v("#")]),t._v(" 一、Golang 接口定义")]),t._v(" "),s("h3",{attrs:{id:"_1-语法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-语法"}},[t._v("#")]),t._v(" 1. 语法")]),t._v(" "),s("div",{staticClass:"language-go extra-class"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 定义接口 */")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" interface_name "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   method_name1 "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("return_type"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n   method_name2 "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("return_type"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n   method_name3 "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("return_type"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n   "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n   method_namen "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("return_type"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 定义结构体 */")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" struct_name "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* variables */")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 实现接口方法 */")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("struct_name_variable struct_name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("method_name1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("return_type"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 方法实现 */")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("struct_name_variable struct_name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("method_namen")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("return_type"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 方法实现*/")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("示例：")]),t._v(" "),s("div",{staticClass:"language-go extra-class"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("package")]),t._v(" main\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"fmt"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 声明了一个 Phone 接口")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" Phone "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  \t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Phone 接口中有一个 call 方法")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("call")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" \n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" NokiaPhone "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// NokiaPhone 实现了 call 方法，这个时候它就已经实现了 Phone 接口了")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("nokiaPhone NokiaPhone"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("call")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    fmt"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Println")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"I am Nokia, I can call you!"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" IPhone "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// IPhone 也实现了 call 方法，这个时候它也已经实现了 Phone 接口了")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("iPhone IPhone"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("call")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    fmt"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Println")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"I am iPhone, I can call you!"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" phone Phone\n\n    phone "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("new")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("NokiaPhone"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    phone"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("call")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n    phone "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("new")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("IPhone"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    phone"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("call")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("输出：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("I am Nokia, I can call you!\nI am iPhone, I can call you!\n")])])]),s("ul",[s("li",[t._v("interface 可以被任意的对象实现")]),t._v(" "),s("li",[t._v("一个对象可以实现任意多个 interface")]),t._v(" "),s("li",[t._v("任意的类型都实现了空 interface，也就是 Go 语言中常见的 "),s("code",[t._v("interface{}")]),t._v("，它代表含 0 个 method 的接口。")])]),t._v(" "),s("h2",{attrs:{id:"二、golang-接口多态"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#二、golang-接口多态"}},[t._v("#")]),t._v(" 二、Golang 接口多态")]),t._v(" "),s("p",[t._v("这里提一个概念："),s("strong",[t._v("鸭子类型")])]),t._v(" "),s("blockquote",[s("p",[t._v("维基百科：If it looks like a duck, swims like a duck, and quacks like a duck, then it probably is a duck.")])]),t._v(" "),s("blockquote",[s("p",[t._v("翻译过来就是：如果某个东西长得像鸭子，像鸭子一样游泳，像鸭子一样嘎嘎叫，那它就可以被看成是一只鸭子。")]),t._v(" "),s("p",[t._v("Duck Typing，鸭子类型，是动态编程语言的一种对象推断策略，它更关注对象能如何被使用，而不是对象的类型本身。")]),t._v(" "),s("p",[t._v("Go 语言作为一门静态语言，它通过通过接口的方式完美支持鸭子类型。")]),t._v(" "),s("p",[t._v("而在静态语言如 Java, C++ 中，必须要显示地声明实现了某个接口（如 extends 关键字），之后，才能用在任何需要这个接口的地方。如果你在程序中调用某个数，却传入了一个根本就没有实现另一个的类型，那在编译阶段就不会通过。这也是静态语言比动态语言更安全的原因。")]),t._v(" "),s("p",[t._v("动态语言和静态语言的差别在此就有所体现。静态语言在编译期间就能发现类型不匹配的错误，不像动态语言，必须要运行到那一行代码才会报错。当然，静态语言要求程序员在编码阶段就要按照规定来编写程序，为每个变量规定数据类型，这在某种程度上，加大了工作量，也加长了代码量。动态语言则没有这些要求，可以让人更专注在业务上，代码也更短，写起来更快，这一点，写 python 的同学比较清楚。")]),t._v(" "),s("p",[t._v("Go 语言作为一门现代静态语言，是有后发优势的。它引入了动态语言的便利，同时又会进行静态语言的类型检查，写起来是非常 Happy 的。")]),t._v(" "),s("p",[t._v("Go 采用了折中的做法："),s("strong",[t._v("不要求类型显示地声明实现了某个接口，只要实现了相关的方法即可，编译器就能检测到")]),t._v("。")])]),t._v(" "),s("blockquote",[s("p",[t._v('总结一下，鸭子类型是一种动态语言的风格，在这种风格中，一个对象有效的语义，不是由继承自特定的类或实现特定的接口，而是由它"当前方法和属性的集合"决定。Go 作为一种静态语言，通过接口实现了鸭子类型，实际上是 Go 的编译器在其中作了隐匿的转换工作。')])]),t._v(" "),s("p",[t._v("Go中的多态性是在接口的帮助下实现的。正如我们已经讨论过的，接口可以在 Go 中隐式地实现。如果类型为接口中声明的所有方法提供了定义，则实现一个接口。让我们看看在接口的帮助下如何实现多态。")]),t._v(" "),s("p",[t._v("任何定义接口所有方法的类型都被称为隐式地实现该接口，类型接口的变量可以保存实现接口的任何值。接口的这个属性用于实现 Go 中的多态性。 "),s("strong",[t._v("简单来说，一个 struct 如果实现了一个 interface，那么一个 interface 类型的变量 i，是可以被赋值为 struct 类型的，我们也可以从这个变量 i 中取出这个 struct 类型的值")]),t._v("。")]),t._v(" "),s("p",[t._v("代码示例：")]),t._v(" "),s("ul",[s("li",[t._v("如下，我们定义了一个接口 Men，然后三种结构体 Human、Student、Employee 都实现了接口 Men。")])]),t._v(" "),s("div",{staticClass:"language-go extra-class"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("package")]),t._v(" main\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"fmt"')]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 定义一个接口 Men")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" Men "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("SayHi")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Sing")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("lyrics "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" Human "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tname  "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),t._v("\n\tage   "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),t._v("\n\tphone "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" Student "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tHuman  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//匿名字段")]),t._v("\n\tschool "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),t._v("\n\tloan   "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("float32")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" Employee "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tHuman   "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//匿名字段")]),t._v("\n\tcompany "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),t._v("\n\tmoney   "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("float32")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Human 实现 Sayhi 方法")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("h Human"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("SayHi")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tfmt"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Printf")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hi, I am %s you can call me on %s\\n"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" h"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" h"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("phone"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Human 实现 Sing 方法")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("h Human"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Sing")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("lyrics "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tfmt"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Println")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"La la la la..."')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" lyrics"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Employee 重写 Human 的 SayHi 方法")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e Employee"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("SayHi")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tfmt"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Printf")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hi, I am %s, I work at %s. Call me on %s\\n"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" e"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\te"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("company"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" e"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("phone"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//Yes you can split into 2 lines here.")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Interface Men 被 Human，Student 和 Employee 实现")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 因为这三个类型都实现了这两个方法")]),t._v("\n\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tmike "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" Student"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("Human"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Mike"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("25")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"222-222-XXX"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"MIT"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.00")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\tpaul "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" Student"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("Human"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Paul"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("26")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"111-222-XXX"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Harvard"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\tsam "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" Employee"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("Human"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Sam"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("36")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"444-222-XXX"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Golang Inc."')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\tTom "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" Employee"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("Human"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Sam"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("36")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"444-222-XXX"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Things Ltd."')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5000")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 定义 Men 类型的变量 i")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" i Men\n\n\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// i 能存储 Student")]),t._v("\n\ti "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" mike\n\tfmt"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Println")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"This is Mike, a Student:"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\ti"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("SayHi")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\ti"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Sing")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"November rain"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\tfmt"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Println")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// i 也能存储 Employee")]),t._v("\n\ti "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Tom\n\tfmt"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Println")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"This is Tom, an Employee:"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\ti"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("SayHi")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\ti"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Sing")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Born to be wild"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\tfmt"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Println")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 定义了一个存储 Men 类型的 slice")]),t._v("\n\tx "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("Men"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 这三个都是不同类型的元素，但是他们实现了 Men 这同一个接口")]),t._v("\n\tx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" x"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" x"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" paul"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" sam"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" mike\n\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("_")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" value "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("range")]),t._v(" x "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\tvalue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("SayHi")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\tfmt"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Println")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("输出：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("This is Mike, a Student:\nHi, I am Mike you can call me on 222-222-XXX\nLa la la la... November rain\n\nThis is Tom, an Employee:\nHi, I am Sam, I work at Things Ltd.. Call me on 444-222-XXX\nLa la la la... Born to be wild\n\nHi, I am Paul you can call me on 111-222-XXX\n\nHi, I am Sam, I work at Golang Inc.. Call me on 444-222-XXX\n\nHi, I am Mike you can call me on 222-222-XXX\n")])])]),s("p",[t._v("那么 interface 里面到底能存什么值呢？")]),t._v(" "),s("ul",[s("li",[t._v("如果我们定义了一个 interface 的变量，那么这个变量里面可以存实现这个 interface 的任意类型的对象。例如上面例子中，我们定义了一个 Men interface 类型的变量 m，那么 m 里面可以存 Human、Student 或者 Employee 值。")])]),t._v(" "),s("p",[t._v("但是有一个问题，我们前面执行了 "),s("code",[t._v("i = mike")]),t._v("，虽然 "),s("code",[t._v("i")]),t._v(" 可以用来存储 "),s("code",[t._v("mike")]),t._v("，但是这个时候 "),s("code",[t._v("i")]),t._v(" 是没有办法访问到 "),s("code",[t._v("mike")]),t._v(" 的属性的，如下：")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://i.loli.net/2021/07/21/wdsFkZyv3EghpqB.png",alt:"image-20210721223102704"}})]),t._v(" "),s("p",[t._v("因为 "),s("code",[t._v("i")]),t._v(" 中存储了 "),s("code",[t._v("Student")]),t._v(" 类型的 "),s("code",[t._v("mike")]),t._v("，所以我们可以取出来，如下：")]),t._v(" "),s("div",{staticClass:"language-go extra-class"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[t._v("\ti "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" mike\n\tstu "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" i"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Student"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("这个时候 "),s("code",[t._v("stu")]),t._v(" 就可以访问到 mike 的属性了：")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://i.loli.net/2021/07/21/rcTzxCoGvkOZAVW.png",alt:"image-20210721223247497"}})]),t._v(" "),s("p",[t._v("这其实就是下面要讲的 「接口断言」。")]),t._v(" "),s("h2",{attrs:{id:"三、golang-接口断言"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#三、golang-接口断言"}},[t._v("#")]),t._v(" 三、Golang 接口断言")]),t._v(" "),s("p",[t._v("前面说过，因为空接口 "),s("code",[t._v("interface{}")]),t._v(" 没有定义任何函数，因此 Go 中所有类型都实现了空接口。当一个函数的形参是"),s("code",[t._v("interface{}")]),t._v("，那么在函数中，需要对形参进行断言，从而得到它的真实类型。")]),t._v(" "),s("h3",{attrs:{id:"_1-语法-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-语法-2"}},[t._v("#")]),t._v(" 1. 语法")]),t._v(" "),s("div",{staticClass:"language-go extra-class"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 安全类型断言")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("目标类型的值"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("，"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("布尔参数"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("表达式"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" 目标类型 "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//非安全类型断言")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("目标类型的值"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("表达式"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" 目标类型 "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h3",{attrs:{id:"_2-直接断言"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-直接断言"}},[t._v("#")]),t._v(" 2. 直接断言")]),t._v(" "),s("p",[t._v("所谓直接断言就如上文中利用 "),s("code",[t._v("i.(Student)")]),t._v(" 从变量 "),s("code",[t._v("i")]),t._v(" 中取出 "),s("code",[t._v("Student")]),t._v("类型的值，这是在我们确保 "),s("code",[t._v("i")]),t._v(" 就是一个 "),s("code",[t._v("Student")]),t._v(" 类型的情况下才这么做的。")]),t._v(" "),s("p",[t._v("更安全的做法应该是：")]),t._v(" "),s("div",{staticClass:"language-go extra-class"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[t._v("stu"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ok "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" i"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Student"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" \n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ok 表示是否类型转换成功")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" ok "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  \t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//...")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h3",{attrs:{id:"_3-swicth-类型判断"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-swicth-类型判断"}},[t._v("#")]),t._v(" 3. swicth 类型判断")]),t._v(" "),s("p",[t._v("断言其实还有另一种形式，就是用在利用 switch 语句判断接口的类型。每一个 case 会被顺序地考虑。当命中一个case 时，就会执行 case 中的语句，因此 case 语句的顺序是很重要的，因为很有可能会有多个 case 匹配的情况。")]),t._v(" "),s("p",[t._v("在之前的 "),s("a",{attrs:{href:"https://hedon954.github.io/noteSite/backend/golang/02_grammar/flow_control.html#_1-switch",target:"_blank",rel:"noopener noreferrer"}},[t._v("Golang 流程控制/选择语句/swith/类型 swicth"),s("OutboundLink")],1),t._v(" 中就提到过了这种用法了。")]),t._v(" "),s("div",{staticClass:"language-go extra-class"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("switch")]),t._v(" ins "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" s"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" Triangle"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    fmt"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Println")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"三角形。。。"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ins"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ins"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("b"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ins"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("c"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" Circle"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    fmt"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Println")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"圆形。。。。"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ins"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("radius"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    fmt"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Println")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"整型数据。。"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("Vssue")],1)}),[],!1,null,null,null);n.default=e.exports}}]);
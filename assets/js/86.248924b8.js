(window.webpackJsonp=window.webpackJsonp||[]).push([[86],{498:function(a,t,s){"use strict";s.r(t);var v=s(47),_=Object(v.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"二、jvm-规范"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#二、jvm-规范"}},[a._v("#")]),a._v(" 二、JVM 规范")]),a._v(" "),s("h2",{attrs:{id:"_1-作用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-作用"}},[a._v("#")]),a._v(" 1. 作用")]),a._v(" "),s("p",[a._v("Java 虚拟机规范为不用的硬件平台提供了一种编译 Java 技术代码的规范。")]),a._v(" "),s("p",[a._v("该规范使 Java 软件独立于平台，因为编译是针对作为虚拟机的“一般机器”而做。")]),a._v(" "),s("h2",{attrs:{id:"_2-内容"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-内容"}},[a._v("#")]),a._v(" 2. 内容")]),a._v(" "),s("ul",[s("li",[a._v("字节码指令集（相当于 CPU）")]),a._v(" "),s("li",[a._v("Class 文件的格式")]),a._v(" "),s("li",[a._v("数据类型和值")]),a._v(" "),s("li",[a._v("运行时数据区")]),a._v(" "),s("li",[a._v("栈帧")]),a._v(" "),s("li",[a._v("特殊方法")]),a._v(" "),s("li",[a._v("类库")]),a._v(" "),s("li",[a._v("异常")]),a._v(" "),s("li",[a._v("虚拟机的启动、加载、链接和初始化")])]),a._v(" "),s("h2",{attrs:{id:"_3-字节码指令集"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-字节码指令集"}},[a._v("#")]),a._v(" 3. 字节码指令集")]),a._v(" "),s("blockquote",[s("p",[a._v("见《Java 虚拟机规范（JavaSE 8 版）》 第 6 章。")])]),a._v(" "),s("h2",{attrs:{id:"_4-class-文件格式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-class-文件格式"}},[a._v("#")]),a._v(" 4. Class 文件格式")]),a._v(" "),s("blockquote",[s("p",[a._v("见《Java 虚拟机规范（JavaSE 8 版）》 第 4 章。")])]),a._v(" "),s("h3",{attrs:{id:"_4-1-说明"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-说明"}},[a._v("#")]),a._v(" 4.1 说明")]),a._v(" "),s("ol",[s("li",[s("p",[a._v("Class 文件是一组以 8 字节为单位的字节流，各个数据项目按顺序紧凑排列。")]),a._v(" "),s("p",[s("img",{attrs:{src:"https://tva1.sinaimg.cn/large/008i3skNly1gtvijylfo5j619a062q5702.jpg",alt:"image-20210220163737374"}})])]),a._v(" "),s("li",[s("p",[a._v("对于占用空间大于8 字节的数据项，按照"),s("strong",[a._v("高位在前")]),a._v("的方式分割成多个 8 字节进行存储。")])]),a._v(" "),s("li",[s("p",[a._v("Class 文件格式里面只有两种类型：无符号数、表")]),a._v(" "),s("p",[a._v("（1）无符号数：基本数据类型，以 "),s("strong",[a._v("u1、u2、u4、u8")]),a._v(" 来代表几个字节的无符号数；")]),a._v(" "),s("p",[a._v("（2）表：由多个无符号数和其他表构成的复合数据类型，通常以**“_info”**结尾。")])])]),a._v(" "),s("h3",{attrs:{id:"_4-2-classfile-结构"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-classfile-结构"}},[a._v("#")]),a._v(" 4.2 ClassFile 结构")]),a._v(" "),s("p",[a._v("每一个 .class 文件对应一个 ClassFile 结构：")]),a._v(" "),s("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://tva1.sinaimg.cn/large/008i3skNly1gtvijxngzlj60v60iamzc02.jpg",alt:"image-20210220164530486"}}),a._v(" "),s("h2",{attrs:{id:"_5-特殊方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-特殊方法"}},[a._v("#")]),a._v(" 5. 特殊方法")]),a._v(" "),s("h5",{attrs:{id:"init"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#init"}},[a._v("#")]),a._v(" <init>")]),a._v(" "),s("blockquote",[s("p",[a._v("实例初始化方法，通过 JVM 的 invokespecial 指令来调用。")])]),a._v(" "),s("h5",{attrs:{id:"clinit"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#clinit"}},[a._v("#")]),a._v(" <clinit>")]),a._v(" "),s("blockquote",[s("p",[a._v("类或接口的初始化方法，不包含参数，返回 void。")])]),a._v(" "),s("Vssue")],1)}),[],!1,null,null,null);t.default=_.exports}}]);
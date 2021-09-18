(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{465:function(t,a,v){"use strict";v.r(a);var _=v(47),s=Object(_.a)({},(function(){var t=this,a=t.$createElement,v=t._self._c||a;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"四、内存分配"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#四、内存分配"}},[t._v("#")]),t._v(" 四、内存分配")]),t._v(" "),v("h2",{attrs:{id:"_1-jvm-简化架构"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-jvm-简化架构"}},[t._v("#")]),t._v(" 1. JVM 简化架构")]),t._v(" "),v("p",[v("img",{attrs:{src:"https://tva1.sinaimg.cn/large/008i3skNly1gtvil3rywkj61a20u0dky02.jpg",alt:"image-20210314091712445"}})]),t._v(" "),v("h3",{attrs:{id:"程序计数器"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#程序计数器"}},[t._v("#")]),t._v(" 程序计数器")]),t._v(" "),v("blockquote",[v("ol",[v("li",[t._v("每个线程都拥有一个 PC 寄存器，是"),v("strong",[t._v("线程私有")]),t._v("的。"),v("strong",[t._v("用来存储指向下一条指令的地址")]),t._v("。")]),t._v(" "),v("li",[t._v("在创建线程的时候，同时会创建相应的 PC 寄存器。")]),t._v(" "),v("li",[t._v("执行本地方法（JNI）时，PC 寄存器的值为 undefined。")]),t._v(" "),v("li",[t._v("PC 寄存器是一块较小的内存空间，是唯一一个在 JVM 规范中没有规定 OutOfMemoryError 的内存区域。")])])]),t._v(" "),v("h3",{attrs:{id:"虚拟机栈"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#虚拟机栈"}},[t._v("#")]),t._v(" 虚拟机栈")]),t._v(" "),v("blockquote",[v("ol",[v("li",[t._v("栈由一系列"),v("strong",[t._v("帧（Frame）"),v("strong",[t._v("组成，是")]),t._v("线程私有")]),t._v("的。")]),t._v(" "),v("li",[t._v("帧用来保存一个方法的局部变量、操作数栈（Java 没有寄存器，所有参数传递使用操作数栈）、常量池指针、动态链接、方法返回值等。")]),t._v(" "),v("li",[t._v("每一次方法调用创建一个帧，并压栈。退出方法的时候，修改栈顶指针就可以把栈帧中的内容销毁。")]),t._v(" "),v("li",[v("strong",[t._v("局部变量表")]),t._v("存放了编译期可知的各种"),v("strong",[t._v("基本数据类型")]),t._v("和"),v("strong",[t._v("引用类型")]),t._v("，每个 "),v("strong",[t._v("slot")]),t._v(" 存放 "),v("strong",[t._v("32")]),t._v(" 位数据，long、double 占 2 个槽位。")]),t._v(" "),v("li",[t._v("栈的优点：存取速度比堆快，仅次于寄存器。")]),t._v(" "),v("li",[t._v("栈的缺点：存在栈中的数据大小、生存期是在编译期决定的，缺乏灵活性。")])])]),t._v(" "),v("h3",{attrs:{id:"堆"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#堆"}},[t._v("#")]),t._v(" 堆")]),t._v(" "),v("blockquote",[v("ol",[v("li",[t._v("用来存放应用系统创建的对象和数组，"),v("strong",[t._v("所有线程共享")]),t._v(" Java 堆。")]),t._v(" "),v("li",[t._v("GC 主要就管理堆空间，对"),v("strong",[t._v("分代")]),t._v(" CG 来说，堆也是分代的。")]),t._v(" "),v("li",[t._v("堆的优点：运行期"),v("strong",[t._v("动态分配")]),t._v("内存大小，自动进行垃圾回收。")]),t._v(" "),v("li",[t._v("堆的缺点：效率相对较慢。")])])]),t._v(" "),v("h3",{attrs:{id:"方法区"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#方法区"}},[t._v("#")]),t._v(" 方法区")]),t._v(" "),v("blockquote",[v("ol",[v("li",[t._v("方法区是线程共享的，通常用来保存装载的"),v("strong",[t._v("类的结构信")]),t._v("息。\n"),v("ul",[v("li",[t._v("常量池")]),t._v(" "),v("li",[t._v("字段、方法")]),t._v(" "),v("li",[t._v("特殊方法")]),t._v(" "),v("li",[t._v("static 静态变量")])])]),t._v(" "),v("li",[t._v("通常和"),v("strong",[t._v("元空间")]),t._v("关联在一起，但具体的跟 JVM 实现和版本有关。\n"),v("ul",[v("li",[t._v("🔺 String 在 JDK7 之前是放在方法区的，但是 JDK7 以后就移到堆了。")])])]),t._v(" "),v("li",[t._v("JVM 规范把方法区描述为堆的一个逻辑部分，但它有一个别名称为 "),v("strong",[t._v("Non-heap（非堆）")]),t._v("，主要是为了与 Java 堆区分开。")])])]),t._v(" "),v("h3",{attrs:{id:"运行时常量池"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#运行时常量池"}},[t._v("#")]),t._v(" 运行时常量池")]),t._v(" "),v("blockquote",[v("ol",[v("li",[t._v("是 Class 文件中每个类或接口的常量池表，在运行期间的表示形式。通常包括：\n"),v("ul",[v("li",[t._v("类的版本")]),t._v(" "),v("li",[t._v("字段")]),t._v(" "),v("li",[t._v("方法")]),t._v(" "),v("li",[t._v("接口")]),t._v(" "),v("li",[t._v("...")])])]),t._v(" "),v("li",[t._v("JDK6 在"),v("strong",[t._v("方法区")]),t._v("中分配，JDK7 以后在"),v("strong",[t._v("堆")]),t._v("中分配。")]),t._v(" "),v("li",[t._v("通常在加载类和接口到 JVM 后，就创建相应的运行时常量池。")])])]),t._v(" "),v("h3",{attrs:{id:"本地方法栈"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#本地方法栈"}},[t._v("#")]),t._v(" 本地方法栈")]),t._v(" "),v("blockquote",[v("ol",[v("li",[t._v("在 JVM 中用来支持 native 方法执行的栈就是本地方法栈。")])])]),t._v(" "),v("div",{staticClass:"language-markdown extra-class"},[v("pre",{pre:!0,attrs:{class:"language-markdown"}},[v("code",[v("span",{pre:!0,attrs:{class:"token title important"}},[v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("#")]),t._v(" Class 对象是放在方法区还是堆中？")]),t._v("\nClass对象是存放在堆区的，不是方法区，这点很多人容易犯错。类的元数据（元数据并不是类的Class对象！Class对象是加载的最终产品，类的方法代码，变量名，方法名，访问权限，返回值等等都是在方法区的）才是存在方法区的。\n\n"),v("span",{pre:!0,attrs:{class:"token title important"}},[v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("#")]),t._v(" static 成员变量放在哪里？")]),t._v("\n方法区。如果是一个对象的话，那么方法区存引用，对象数据放在堆中。\n\n"),v("span",{pre:!0,attrs:{class:"token title important"}},[v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("#")]),t._v(" 方法区、永久代、元空间区别？")]),t._v("\n方法区：（逻辑上）\n\t逻辑上的东西，是JVM 的规范，所有虚拟机必须遵守的。\n\t是JVM 所有线程共享的、用于存储类的信息、常量池、方法数据、方法代码等。\n永久代：（方法区的实现、JDK7 及之前、主要是和元空间对比）\n\tPermGen ， 就是 PermGen space ，全称是 Permanent Generation space ，是指内存的永久保存区域。\n\tPermGen space 则是 HotSpot 虚拟机基于 JVM 规范对方法区的一个落地实现，并且只有 HotSpot 才有 PermGen space。\n\t而如 JRockit（Oracle）、J9（IBM） 虚拟机有方法区 ，但是就没有 PermGen space。\n\tPermGen space 是JDK7及之前， HotSpot 虚拟机对方法区的一个落地实现。在 JDK8 被移除。\nMetaspace（元空间、JDK8 及之后）\n\t元空间与永久代之间最大的区别在于：元空间并不在虚拟机中，而是使用本地内存。\n")])])]),v("blockquote",[v("p",[t._v("从前的永久代是用来存放 Class、Method 等元信息的区域， 从 JDK8 开始就去掉了。取而代之的是元空间（MetaSpace），元空间并不在虚拟机里面，而是直接使用本地内存。")])]),t._v(" "),v("h2",{attrs:{id:"_2-栈、堆、方法区交互关系"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-栈、堆、方法区交互关系"}},[t._v("#")]),t._v(" 2. 栈、堆、方法区交互关系")]),t._v(" "),v("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://tva1.sinaimg.cn/large/008i3skNly1gtvil1vwkej60v30djtah02.jpg",alt:"image-20210225150146164"}}),t._v(" "),v("h2",{attrs:{id:"_3-堆"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-堆"}},[t._v("#")]),t._v(" 3. 堆")]),t._v(" "),v("h3",{attrs:{id:"_3-1-概述"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-概述"}},[t._v("#")]),t._v(" 3.1 概述")]),t._v(" "),v("ul",[v("li",[t._v("Java 堆用来存放应用系统创建的对象和数组，所有"),v("strong",[t._v("线程共享")]),t._v(" Java 堆。")]),t._v(" "),v("li",[t._v("Java 堆内存在逻辑上需要是连续的。")]),t._v(" "),v("li",[t._v("Java 堆是在运行期动态分配内存大小，自动进行垃圾回收。")])]),t._v(" "),v("h3",{attrs:{id:"_3-2-结构"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-结构"}},[t._v("#")]),t._v(" 3.2 结构")]),t._v(" "),v("ul",[v("li",[t._v("整个堆大小 = 新生代 + 老年代")]),t._v(" "),v("li",[t._v("新生代 = Eden + 存活区")])]),t._v(" "),v("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://tva1.sinaimg.cn/large/008i3skNly1gtvil39tizj60ri0aa0tr02.jpg",alt:"image-20210225150555532"}}),t._v(" "),v("ul",[v("li",[t._v("新生代用来放新分配的对象。新生代中经过垃圾回收，没有回收掉的对象，会被复制到老年代。")]),t._v(" "),v("li",[t._v("老年代存储对象一般比新生代存储对象的年龄大得多。")]),t._v(" "),v("li",[t._v("老年代存储一些大对象。")])]),t._v(" "),v("h3",{attrs:{id:"_3-3-对象的内存布局"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-对象的内存布局"}},[t._v("#")]),t._v(" 3.3 对象的内存布局")]),t._v(" "),v("p",[t._v("以 HotSpot 虚拟机为例，对象在内存中的布局分为以下 3 个部分：")]),t._v(" "),v("ul",[v("li",[t._v("对象头：\n"),v("ul",[v("li",[t._v("Mark Word：存储对象自身的运行数据。如：Hashcode、GC 分代年龄、锁状态标志等。")]),t._v(" "),v("li",[t._v("类型指针：对象指向它的类元数据的指针。")])])]),t._v(" "),v("li",[t._v("实例数据：\n"),v("ul",[v("li",[t._v("真正存放对象实例数据的地方。")])])]),t._v(" "),v("li",[t._v("对齐填充：\n"),v("ul",[v("li",[t._v("这部分不一定存在，也没有什么特别含义，仅仅是占位符。因为 HotSpot 要求对象起始地址都是 "),v("strong",[t._v("8 字节")]),t._v("的整数倍，如果不是，就对齐。")])])])]),t._v(" "),v("h3",{attrs:{id:"_3-4-对象的访问定位"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-4-对象的访问定位"}},[t._v("#")]),t._v(" 3.4 对象的访问定位")]),t._v(" "),v("h4",{attrs:{id:"_1-使用句柄"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-使用句柄"}},[t._v("#")]),t._v(" ① 使用句柄")]),t._v(" "),v("blockquote",[v("p",[t._v("Java 堆中会划分一块内存来作为句柄池，reference 中存放句柄的地址，句柄中存储对象的实例数据和类元数据的地址。")])]),t._v(" "),v("p",[v("img",{attrs:{src:"https://tva1.sinaimg.cn/large/008i3skNly1gtvil0g4f4j60l80bwgmq02.jpg",alt:"image-20210225151358190"}})]),t._v(" "),v("ul",[v("li",[t._v("间接指针，效率慢")]),t._v(" "),v("li",[t._v("修改对象引用的时候只需要修改到对象实例数据的指针即可。")])]),t._v(" "),v("h4",{attrs:{id:"_2-使用指针"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-使用指针"}},[t._v("#")]),t._v(" ② 使用指针")]),t._v(" "),v("blockquote",[v("p",[t._v("Java 堆中会存放访问类元数据的地址，reference 存储的就直接是对象的地址。")]),t._v(" "),v("p",[t._v("HotStop 用的是使用指针。")])]),t._v(" "),v("img",{attrs:{src:"https://tva1.sinaimg.cn/large/008i3skNly1gtvil0276zj60nn0b13zn02.jpg",alt:"image-20210225151510797"}}),t._v(" "),v("ul",[v("li",[t._v("reference 直接指向对象，效率快。")])]),t._v(" "),v("h2",{attrs:{id:"_4-参数"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_4-参数"}},[t._v("#")]),t._v(" 4. 参数")]),t._v(" "),v("h3",{attrs:{id:"_4-1-堆"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-堆"}},[t._v("#")]),t._v(" 4.1 堆")]),t._v(" "),v("p",[v("img",{attrs:{src:"https://tva1.sinaimg.cn/large/008i3skNly1gtvil2de2tj60py0ayjsx02.jpg",alt:"image-20210225170257559"}})]),t._v(" "),v("h3",{attrs:{id:"_4-2-栈"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-栈"}},[t._v("#")]),t._v(" 4.2 栈")]),t._v(" "),v("p",[v("img",{attrs:{src:"https://tva1.sinaimg.cn/large/008i3skNly1gtvil1307oj60mq02jaa502.jpg",alt:"image-20210225170355372"}})]),t._v(" "),v("h3",{attrs:{id:"_4-3-元空间"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_4-3-元空间"}},[t._v("#")]),t._v(" 4.3 元空间")]),t._v(" "),v("p",[v("img",{attrs:{src:"https://tva1.sinaimg.cn/large/008i3skNly1gtvil2u479j60ms06cmxq02.jpg",alt:"image-20210225170714162"}})]),t._v(" "),v("Vssue")],1)}),[],!1,null,null,null);a.default=s.exports}}]);
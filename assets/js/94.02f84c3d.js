(window.webpackJsonp=window.webpackJsonp||[]).push([[94],{718:function(v,_,a){"use strict";a.r(_);var t=a(47),r=Object(t.a)({},(function(){var v=this,_=v.$createElement,a=v._self._c||_;return a("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[a("h1",{attrs:{id:"一、内存分配"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、内存分配"}},[v._v("#")]),v._v(" 一、内存分配")]),v._v(" "),a("h2",{attrs:{id:"_1-方法区、永久代和元空间的区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-方法区、永久代和元空间的区别"}},[v._v("#")]),v._v(" 1. 方法区、永久代和元空间的区别？")]),v._v(" "),a("p",[a("strong",[v._v("方法区")]),v._v("：（逻辑上）")]),v._v(" "),a("ul",[a("li",[v._v("逻辑上的东西，是JVM 的规范，所有虚拟机必须遵守的。")]),v._v(" "),a("li",[v._v("是JVM 所有线程共享的、用于存储类的信息、常量池、方法数据、方法代码等。")])]),v._v(" "),a("p",[a("strong",[v._v("永久代")]),v._v("：（方法区的实现、JDK7及之前、主要是和元空间对比）")]),v._v(" "),a("ul",[a("li",[v._v("PermGen ， 就是 PermGen space ，全称是 Permanent Generation space ，是指内存的永久保存区域。")]),v._v(" "),a("li",[v._v("PermGen space 则是 HotSpot 虚拟机基于JVM规范对方法区的一个落地实现，并且只有 HotSpot 才有 PermGen space。")]),v._v(" "),a("li",[v._v("而如 JRockit（Oracle）、J9（IBM） 虚拟机有方法区 ，但是就没有 PermGen space。")]),v._v(" "),a("li",[v._v("PermGen space 是JDK7及之前， HotSpot虚拟机对方法区的一个落地实现。在JDK8被移除。")])]),v._v(" "),a("p",[a("strong",[v._v("元空间")]),v._v("：（Metaspace，JDK8及之后）：")]),v._v(" "),a("ul",[a("li",[v._v("元空间与永久代之间最大的区别在于："),a("font",{attrs:{color:"pink"}},[v._v("元空间并不在虚拟机中，而是使用本地内存。")])],1),v._v(" "),a("li",[v._v("移除PermGen（永久代）从从JDK7 就开始。例如，字符串内部池，已经在JDK7 中从永久代中移除。直到JDK8 的发布将宣告 PermGen（永久代）的终结。")]),v._v(" "),a("li",[v._v("其实，移除 PermGen 的工作从 JDK7 就开始，永久代的部分数据就已经转移到了 Java Heap 或者是 Native Heap。")]),v._v(" "),a("li",[v._v("但永久代仍存在于JDK7 中，并没完全移除，比如：\n"),a("ul",[a("li",[v._v("字面量 （interned strings）转移到 Java heap；")]),v._v(" "),a("li",[v._v("类的静态变量（class statics）转移到Java heap ；")]),v._v(" "),a("li",[v._v("符号引用（Symbols） 转移到 Native heap ；")])])])]),v._v(" "),a("p",[a("img",{attrs:{src:"https://i.loli.net/2021/03/14/pijaLs6NZ27kHlr.jpg",alt:"image-20210314091532064"}})]),v._v(" "),a("h2",{attrs:{id:"_2-为什么使用元空间替换永久代"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-为什么使用元空间替换永久代"}},[v._v("#")]),v._v(" 2. 为什么使用元空间替换永久代？")]),v._v(" "),a("p",[v._v("① 由于永久代内存经常不够用或者发生内存泄露，报出异常 java.lang.OutOfMemoryError: PermGen 。")]),v._v(" "),a("p",[v._v("② 字符串存在永久代中，容易出现性能问题和内存溢出。")]),v._v(" "),a("p",[v._v("③ 类及方法的信息等比较难确定其大小，因此对于永久代的大小指定比较困难，太小容易出现永久代溢出，太大则容易导致老年代溢出。")]),v._v(" "),a("p",[v._v("④ 永久代会为 GC 带来不必要的复杂度，而且回收效率偏低。")]),v._v(" "),a("p",[v._v("⑤ Oracle可能会将HotSpot和JRockit合二为一。")]),v._v(" "),a("h2",{attrs:{id:"_3-jvm-内存结构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-jvm-内存结构"}},[v._v("#")]),v._v(" 3. JVM 内存结构")]),v._v(" "),a("p",[a("img",{attrs:{src:"https://i.loli.net/2021/03/14/tGUArL7FgMv3HVQ.png",alt:"image-20210314091712445"}})]),v._v(" "),a("h2",{attrs:{id:"_4-java-内存模型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-java-内存模型"}},[v._v("#")]),v._v(" 4. Java 内存模型")]),v._v(" "),a("ul",[a("li",[v._v("重排序")]),v._v(" "),a("li",[v._v("可见性")]),v._v(" "),a("li",[v._v("原子性")])]),v._v(" "),a("h2",{attrs:{id:"_5-java-对象模型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-java-对象模型"}},[v._v("#")]),v._v(" 5. Java 对象模型")]),v._v(" "),a("p",[v._v("以 HotSpot 虚拟机为例，对象在内存中的布局分为以下 3 个部分：")]),v._v(" "),a("ul",[a("li",[v._v("对象头：\n"),a("ul",[a("li",[v._v("Mark Word：存储对象自身的运行数据。如：Hashcode、GC 分代年龄、锁状态标志等。")]),v._v(" "),a("li",[v._v("类型指针：对象指向它的类元数据的指针。")])])]),v._v(" "),a("li",[v._v("实例数据：\n"),a("ul",[a("li",[v._v("真正存放对象实例数据的地方。")])])]),v._v(" "),a("li",[v._v("对齐填充：\n"),a("ul",[a("li",[v._v("这部分不一定存在，也没有什么特别含义，仅仅是占位符。因为 HotSpot 要求对象起始地址都是 "),a("strong",[v._v("8 字节")]),v._v("的整数倍，如果不是，就对齐。")])])])]),v._v(" "),a("img",{attrs:{src:"https://tva1.sinaimg.cn/large/008eGmZEgy1gnzswna4p1j30nn0b1tgm.jpg",alt:"image-20210225151510797"}}),v._v(" "),a("h2",{attrs:{id:"_6-jvm-的数据区有哪些-作用是什么"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-jvm-的数据区有哪些-作用是什么"}},[v._v("#")]),v._v(" 6. JVM 的数据区有哪些？作用是什么？")]),v._v(" "),a("p",[a("img",{attrs:{src:"https://i.loli.net/2021/03/14/p9Uq32my4o7hHQL.png",alt:"image-20210314091712445"}})]),v._v(" "),a("h2",{attrs:{id:"_7-java-堆内存一定是线程共享的吗"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_7-java-堆内存一定是线程共享的吗"}},[v._v("#")]),v._v(" 7. Java 堆内存一定是线程共享的吗？")]),v._v(" "),a("p",[v._v("不一定。")]),v._v(" "),a("p",[v._v("为对象分配内存的基本方法：")]),v._v(" "),a("ul",[a("li",[a("p",[v._v("指针碰撞法")]),v._v(" "),a("p",[v._v("假设堆内存是完整的，没有什么碎片。指针移动需要的空间的大小的距离，然后分配。")])]),v._v(" "),a("li",[a("p",[v._v("空闲列表法")]),v._v(" "),a("p",[v._v("列表记录可用的内存信息，然后从列表中找到足够大的空间来分配对象。")])])]),v._v(" "),a("p",[a("font",{attrs:{color:"pink"}},[v._v("所以当多个线程要为对象分配内存的时候，可能存在前一个线程已经把内存占了但是后一个线程还不知道的情况下，就导致了内存分配冲突。")])],1),v._v(" "),a("p",[v._v("内存分配并发问题的解决：")]),v._v(" "),a("ul",[a("li",[v._v("CAS：乐观锁，假设没问题，然后分配，冲突了就重新分配，直到没冲突。")]),v._v(" "),a("li",[v._v("TLAB：线程本地分配缓存区，JVM 为每一条线程分配一块区域，该线程在 new 对象的时候就在这块区域进行分配。当 TLAB 内存用完了之后再采用 CAS 进行分配。（分对象的时候线程独享，用对象的时候线程共享）")])]),v._v(" "),a("h2",{attrs:{id:"_8-jvm-的堆内存结构是怎样的-哪些情况会触发-gc-会触发哪些-gc"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_8-jvm-的堆内存结构是怎样的-哪些情况会触发-gc-会触发哪些-gc"}},[v._v("#")]),v._v(" 8. JVM 的堆内存结构是怎样的？哪些情况会触发 GC？会触发哪些 GC？")]),v._v(" "),a("p",[a("strong",[v._v("堆内存结构")])]),v._v(" "),a("ul",[a("li",[v._v("整个堆大小 = 新生代 + 老年代")]),v._v(" "),a("li",[v._v("新生代 = Eden + 存活区")])]),v._v(" "),a("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://tva1.sinaimg.cn/large/008eGmZEgy1gnzsn0kdahj30ri0aawk7.jpg",alt:"image-20210225150555532"}}),v._v(" "),a("ul",[a("li",[v._v("新生代用来放新分配的对象。新生代中经过垃圾回收，没有回收掉的对象，会被复制到老年代。")]),v._v(" "),a("li",[v._v("老年代存储对象一般比新生代存储对象的年龄大得多。")]),v._v(" "),a("li",[v._v("老年代存储一下大对象。")])]),v._v(" "),a("blockquote",[a("p",[v._v("从前的永久代是用来存放 Class、Method 等元信息的区域， 从 JDK8 开始就去掉了。取而代之的是元空间（MetaSpace），元空间并不在虚拟机里面，而是直接使用本地内存。")])]),v._v(" "),a("p",[a("strong",[v._v("哪些情况会触发 GC")])]),v._v(" "),a("p",[v._v("当 JVM 无法为一个新的对象分配空间时会触发 Minor GC。")]),v._v(" "),a("p",[v._v("虚拟机在进行minorGC之前会判断老年代最大的可用连续空间是否大于新生代的所有对象总空间")]),v._v(" "),a("p",[v._v("1、如果大于的话，直接执行minorGC")]),v._v(" "),a("p",[v._v("2、如果小于，判断是否开启 HandlerPromotionFailure，没有开启直接 FullGC")]),v._v(" "),a("p",[v._v("​\t（promotion failed是在进行Minor GC时，survivor space放不下，对象只能放入旧生代，而此时旧生代也放不下造成的；）")]),v._v(" "),a("ul",[a("li",[v._v("如果开启了HanlerPromotionFailure，JVM会判断老年代的最大连续内存空间是否大于历次晋升的大小\n"),a("ul",[a("li",[v._v("如果小于直接执行FullGC")]),v._v(" "),a("li",[v._v("如果大于的话，执行minorGC")])])])]),v._v(" "),a("p",[v._v("Minor GC是新生代GC，指的是发生在新生代的垃圾收集动作。由于java对象大都是朝生夕死的，所以Minor GC非常频繁，一般回收速度也比较快。")]),v._v(" "),a("Vssue")],1)}),[],!1,null,null,null);_.default=r.exports}}]);
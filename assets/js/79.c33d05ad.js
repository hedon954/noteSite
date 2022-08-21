(window.webpackJsonp=window.webpackJsonp||[]).push([[79],{488:function(_,v,l){"use strict";l.r(v);var a=l(47),t=Object(a.a)({},(function(){var _=this,v=_.$createElement,l=_._self._c||v;return l("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[l("h1",{attrs:{id:"九、调优"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#九、调优"}},[_._v("#")]),_._v(" 九、调优")]),_._v(" "),l("h2",{attrs:{id:"_1-调什么"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#_1-调什么"}},[_._v("#")]),_._v(" 1. 调什么")]),_._v(" "),l("h5",{attrs:{id:"内存方面"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#内存方面"}},[_._v("#")]),_._v(" 内存方面")]),_._v(" "),l("ul",[l("li",[_._v("JVM 需要的内存总大小。")]),_._v(" "),l("li",[_._v("各块内存分配，新生代，老年代，存活区。")]),_._v(" "),l("li",[_._v("选择合适的 GC 算法、控制 GC 停顿次数和时间。")]),_._v(" "),l("li",[_._v("解决内存泄露的问题，辅助代码优化。")]),_._v(" "),l("li",[_._v("内存热点：检查哪些对象在系统中数量最大，辅助代码优化。")])]),_._v(" "),l("h5",{attrs:{id:"线程方面"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#线程方面"}},[_._v("#")]),_._v(" 线程方面")]),_._v(" "),l("ul",[l("li",[_._v("死锁检查，辅助代码优化")]),_._v(" "),l("li",[_._v("Dump 线程详细信息：查看线程内部运行情况，查找竞争线程，辅助代码优化。")]),_._v(" "),l("li",[_._v("CPU 热点：检查系统哪些方法占用了大量 CPU 时间，辅助代码优化。")])]),_._v(" "),l("h2",{attrs:{id:"_2-如何调"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#_2-如何调"}},[_._v("#")]),_._v(" 2. 如何调")]),_._v(" "),l("ul",[l("li",[_._v("监控 JVM 的状态，主要是内存、线程、代码、I/O  几部分。")]),_._v(" "),l("li",[_._v("分析结果，判断是否需要优化。")]),_._v(" "),l("li",[_._v("调整：GC 算法和内存分配；修改并优化代码。")])]),_._v(" "),l("h2",{attrs:{id:"_3-调优目标"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#_3-调优目标"}},[_._v("#")]),_._v(" 3. 调优目标")]),_._v(" "),l("ul",[l("li",[_._v("GC 的时间足够的小。")]),_._v(" "),l("li",[_._v("GC 的次数足够的少。")]),_._v(" "),l("li",[_._v("将转移到老年代的对象数量降低到最小。")]),_._v(" "),l("li",[_._v("减少 Full GC 的执行时间。")]),_._v(" "),l("li",[_._v("发生 Full GC 的间隔足够长。")])]),_._v(" "),l("h2",{attrs:{id:"_4-调优策略"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#_4-调优策略"}},[_._v("#")]),_._v(" 4. 调优策略")]),_._v(" "),l("ul",[l("li",[_._v("减少创建对象的数量。")]),_._v(" "),l("li",[_._v("减少使用全局变量和大对象。")]),_._v(" "),l("li",[_._v("调整新生代、老年代的大小到最合适。")]),_._v(" "),l("li",[_._v("选择合适的 GC 收集器，并设置合理的参数。")])]),_._v(" "),l("h2",{attrs:{id:"_5-调优经验"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#_5-调优经验"}},[_._v("#")]),_._v(" 5. 调优经验")]),_._v(" "),l("ul",[l("li",[_._v("多数的 Java 应用不需要在服务器上进行 GC 优化。")]),_._v(" "),l("li",[_._v("多数导致 GC 问题的 Java 应用，都不是因为参数设置错误，而是代码问题。")]),_._v(" "),l("li",[_._v("在应用上线之前，先考虑将机器的 JVM 参数设置到最优（最适合）。")]),_._v(" "),l("li",[_._v("JVM 优化是到最后不得已才采用的手段。")]),_._v(" "),l("li",[_._v("在实际使用中，分析 JVM 情况优化代码比优化 JVM 本身要多得多。")]),_._v(" "),l("li",[_._v("如下情况通过不用优化：\n"),l("ul",[l("li",[_._v("Minor GC 执行时间不到 50ms")]),_._v(" "),l("li",[_._v("Minor GC 执行不频繁，约 10s 一次")]),_._v(" "),l("li",[_._v("Full GC 执行时间不到 1s")]),_._v(" "),l("li",[_._v("Full GC 执行频率不算高，不低于 10min 一次")])])]),_._v(" "),l("li",[_._v("要注意 "),l("strong",[_._v("32 位和 64 位")]),_._v("的区别，通常 32 位的仅支持 2-3G 左右的内存。")]),_._v(" "),l("li",[_._v("要注意 "),l("strong",[_._v("client 模式和 server 模式")]),_._v("的选择\n"),l("ul",[l("li",[_._v("client 特点：快速启动，内存占有小，快速代码生成")]),_._v(" "),l("li",[_._v("server：更复杂的代码深层优化")])])]),_._v(" "),l("li",[_._v("想要 GC 时间小必须要一个更小的堆，而要保证 GC 次数足够少，又必须保证一个更大的堆，这两个是冲突的，只能取其平衡。")]),_._v(" "),l("li",[_._v("针对 JVM 堆的设置，一般可以通过 "),l("code",[_._v("-Xms -Xmx")]),_._v(" 限定其最小、最大值，为了防止 GC 在最小、最大之间收缩堆而产生额外的时间，通过把最大、最小设置为相同的值。")]),_._v(" "),l("li",[l("strong",[_._v("新生代和老年代")]),_._v("将根据默认的比例（1：2）分配堆内存，可以通过调整二者之间的比例 "),l("code",[_._v("NewRadio")]),_._v(" 来调整，也可以通过 "),l("code",[_._v("-XX:newSize")]),_._v(" 和 "),l("code",[_._v("-XX:MaxNewSize")]),_._v(" 来设置其绝对大小。同样，为了防止新生的堆收缩，通常会把 "),l("code",[_._v("-XX:newSize")]),_._v(" 和 "),l("code",[_._v("-XX:MaxNewSize")]),_._v(" 设置为同样大小。")]),_._v(" "),l("li",[_._v("合理规划新生代和老年代的大小。")]),_._v(" "),l("li",[_._v("如果应用存在大量的临时对象，应该选择更大的新生代；如果存在相对较多的持久对象，老年代应该适当增大。在抉择的时候应该本着 Full GC 尽量少的原则，让老年代尽量缓存常用对象，JVM 的默认比例 1:2 也是这个道理。")]),_._v(" "),l("li",[_._v("通过观察应用一段时间，看其在峰值时老年代会占多少内存，在不影响 Full GC 的前提下，根据实际情况加大新生代，但应该给老年代至少预留 1/3 的增长空间。")]),_._v(" "),l("li",[l("strong",[_._v("线程堆栈")]),_._v("的设置：每个线程默认会开启 1M 的堆栈，用于存放栈帧、调用参数、局部变量等，对大多数应用而言这个默认值太大了，一般 256K 就足够了。在内存不变的情况下，减少每个线程的堆栈，可以产生更多的线程。")])]),_._v(" "),l("h2",{attrs:{id:"_6-内存泄漏"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#_6-内存泄漏"}},[_._v("#")]),_._v(" 6. 内存泄漏")]),_._v(" "),l("h5",{attrs:{id:"现象"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#现象"}},[_._v("#")]),_._v(" 现象")]),_._v(" "),l("ul",[l("li",[_._v("每次 GC 时间越来越长，Full GC 时间也延长到好几秒。")]),_._v(" "),l("li",[_._v("FullGC 的次数越来越多，最频繁时隔不到 1min 就进行一次 Full GC。")]),_._v(" "),l("li",[_._v("老年代的内存越来越大，并且每次 Full GC 后老年代没有内存被释放。")]),_._v(" "),l("li",[_._v("老年代堆空间被占满（OOM）")]),_._v(" "),l("li",[_._v("堆栈溢出（StackOverFlowError）")])]),_._v(" "),l("h5",{attrs:{id:"解决"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#解决"}},[_._v("#")]),_._v(" 解决")]),_._v(" "),l("ul",[l("li",[_._v("根据垃圾回收前后情况对比，同时根据对象引用情况分析，辅助去查找泄漏点。")]),_._v(" "),l("li",[_._v("堆栈溢出的话要检查递归出口和循环终止条件。")])]),_._v(" "),l("Vssue")],1)}),[],!1,null,null,null);v.default=t.exports}}]);
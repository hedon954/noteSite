(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{476:function(a,_,v){"use strict";v.r(_);var t=v(47),s=Object(t.a)({},(function(){var a=this,_=a.$createElement,v=a._self._c||_;return v("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[v("h1",{attrs:{id:"六、垃圾回收"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#六、垃圾回收"}},[a._v("#")]),a._v(" 六、垃圾回收")]),a._v(" "),v("h2",{attrs:{id:"_1-参数"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-参数"}},[a._v("#")]),a._v(" 1. 参数")]),a._v(" "),v("blockquote",[v("p",[a._v("https://docs.oracle.com/en/java/javase/13/docs/specs/man/java.html")])]),a._v(" "),v("h3",{attrs:{id:"_1-1-trace-跟踪参数"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-trace-跟踪参数"}},[a._v("#")]),a._v(" 1.1 Trace 跟踪参数")]),a._v(" "),v("h4",{attrs:{id:"jdk8"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#jdk8"}},[a._v("#")]),a._v(" [JDK8]")]),a._v(" "),v("p",[v("img",{attrs:{src:"https://hedonspace.oss-cn-beijing.aliyuncs.com/img2/008i3skNly1gtvimf0llhj60fm08l3z002.jpg",alt:"image-20210225155528520"}})]),a._v(" "),v("h4",{attrs:{id:"jdk13"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#jdk13"}},[a._v("#")]),a._v(" [JDK13]")]),a._v(" "),v("p",[v("img",{attrs:{src:"https://hedonspace.oss-cn-beijing.aliyuncs.com/img2/008i3skNly1gtvim9eiksj611s0h5dk702.jpg",alt:"image-20210225160509727"}})]),a._v(" "),v("p",[a._v("总结：")]),a._v(" "),v("p",[v("img",{attrs:{src:"https://hedonspace.oss-cn-beijing.aliyuncs.com/img2/008i3skNly1gtvimdl36cj60o106c3z102.jpg",alt:"image-20210225164032396"}})]),a._v(" "),v("h2",{attrs:{id:"_2-gc-日志格式"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-gc-日志格式"}},[a._v("#")]),a._v(" 2. GC 日志格式")]),a._v(" "),v("ul",[v("li",[a._v("GC 发生的时间：从 JVM 启动以来经过的秒数")]),a._v(" "),v("li",[a._v("日志级别信息和日志类型标记")]),a._v(" "),v("li",[a._v("GC 标识号")]),a._v(" "),v("li",[a._v("GC 类型和说明 GC 的原因")]),a._v(" "),v("li",[a._v("容量：GC 前容量 -> GC 后容量（该区域总容量）")]),a._v(" "),v("li",[a._v("GC 持续时间：单位为秒。\n"),v("ul",[v("li",[a._v("有的收集器会有更详细的描述。比如：\n"),v("ul",[v("li",[a._v("user 表示应用程序消耗的时间")]),a._v(" "),v("li",[a._v("sys 表示系统内核消耗的时间")]),a._v(" "),v("li",[a._v("real 表示操作从开始到结束的时间")])])])])])]),a._v(" "),v("p",[v("img",{attrs:{src:"https://hedonspace.oss-cn-beijing.aliyuncs.com/img2/008i3skNly1gu99mc69rjj60x806e0vp02.jpg",alt:"image-20210225163343026"}})]),a._v(" "),v("h2",{attrs:{id:"_3-引用分类"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-引用分类"}},[a._v("#")]),a._v(" 3. 引用分类")]),a._v(" "),v("h3",{attrs:{id:"_3-1-强引用"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-强引用"}},[a._v("#")]),a._v(" 3.1 强引用")]),a._v(" "),v("blockquote",[v("p",[a._v("类似于 Object a = new A() 这样的，垃圾回收时不会被回收。")])]),a._v(" "),v("h3",{attrs:{id:"_3-2-软引用"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-软引用"}},[a._v("#")]),a._v(" 3.2 软引用")]),a._v(" "),v("blockquote",[v("p",[a._v("还有用但并不必须的对象。")]),a._v(" "),v("p",[a._v("垃圾回收的时候可以不回收，但是如果垃圾回收后空间还不够用的话，那就要回收软引用的对象。")]),a._v(" "),v("p",[a._v("用 SoftReference 关键字来实现软引用。")]),a._v(" "),v("p",[a._v("这种引用常常被用来实现缓存技术。因为缓存区里面的东西，之后在内存不足的时候才会被清空。")])]),a._v(" "),v("h3",{attrs:{id:"_3-3-弱引用"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-弱引用"}},[a._v("#")]),a._v(" 3.3 弱引用")]),a._v(" "),v("blockquote",[v("p",[a._v("非必须对象，比软引用还要弱，垃圾回收时会回收掉，不管空间是否足够。但是"),v("strong",[a._v("被回收的概率也不大，因为GC线程优先级比较低")]),a._v("，适用于"),v("strong",[a._v("引用偶尔被使用且不影响垃圾收集的对象")]),a._v("。")]),a._v(" "),v("p",[a._v("用 WeakReference 来实现。")])]),a._v(" "),v("h3",{attrs:{id:"_3-4-虚引用"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-4-虚引用"}},[a._v("#")]),a._v(" 3.4 虚引用")]),a._v(" "),v("blockquote",[v("p",[a._v("虚引用是最弱的一种引用关系，如果一个对象仅持有虚引用，那么它就和没有任何引用一样，它随时可能会被回收，在 JDK1.2 之后，用 PhantomReference 类来表示，通过查看这个类的源码，发现它只有一个构造函数和一个 get() 方法，而且它的 get() 方法仅仅是返回一个null，也就是说将永远无法通过虚引用来获取对象，虚引用必须要和 ReferenceQueue 引用队列一起使用。")]),a._v(" "),v("p",[a._v("使用虚引用的目的就是为了得知对象被 GC 的时机，所以可以利用虚引用来进行销毁前的一些操作，比如说资源释放等。这个虚引用对于对象而言完全是无感知的，有没有完全一样，但是对于虚引用的使用者而言，就像是待观察的对象的把脉线，可以通过它来观察对象是否已经被回收，从而进行相应的处理。")])]),a._v(" "),v("h2",{attrs:{id:"_4-垃圾回收基础"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_4-垃圾回收基础"}},[a._v("#")]),a._v(" 4. 垃圾回收基础")]),a._v(" "),v("h3",{attrs:{id:"_4-1-跨代引用"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-跨代引用"}},[a._v("#")]),a._v(" 4.1 跨代引用")]),a._v(" "),v("blockquote",[v("p",[a._v("一个代中的对象引用另一个代中的对象。")]),a._v(" "),v("p",[a._v("跨代引用相对于同代引用来说只是少数 => 存在互相引用关系的两个对象，是应该倾向于同时生存或者同时消亡的。")])]),a._v(" "),v("h3",{attrs:{id:"_4-2-记忆集"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-记忆集"}},[a._v("#")]),a._v(" 4.2 记忆集")]),a._v(" "),v("blockquote",[v("p",[a._v("一种用于记录从非收集区域指向收集区域的指针集合的抽象数据结构。")])]),a._v(" "),v("p",[a._v("说人话："),v("strong",[a._v("另外用一块内存来记录跨代引用的情况")]),a._v("。")]),a._v(" "),v("h4",{attrs:{id:"_4-2-1-作用"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-1-作用"}},[a._v("#")]),a._v(" 4.2.1 作用")]),a._v(" "),v("ul",[v("li",[v("strong",[a._v("缩小 GC 扫描范围")]),a._v("。")])]),a._v(" "),v("h4",{attrs:{id:"_4-2-2-精度"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-2-精度"}},[a._v("#")]),a._v(" 4.2.2 精度")]),a._v(" "),v("h5",{attrs:{id:"字长精度"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#字长精度"}},[a._v("#")]),a._v(" [字长精度]")]),a._v(" "),v("blockquote",[v("p",[a._v("每个记录精确到一个机器字长，该字也包含跨代指针。")])]),a._v(" "),v("h5",{attrs:{id:"对象精度"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#对象精度"}},[a._v("#")]),a._v(" [对象精度]")]),a._v(" "),v("blockquote",[v("p",[a._v("每个记录精确到一个对象，该对象里有字段含有跨代指针。")])]),a._v(" "),v("h5",{attrs:{id:"卡精度"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#卡精度"}},[a._v("#")]),a._v(" [卡精度]")]),a._v(" "),v("blockquote",[v("p",[a._v("每个记录精确到一块内存区域，该区域内有对象含有跨代指针。 —— 常用")])]),a._v(" "),v("ul",[v("li",[a._v("卡表（Card Table）：是记忆集的一种具体实现，定义了记忆集的记录精度和与堆内存的映射关系等。")]),a._v(" "),v("li",[a._v("卡表的每个元素都对应着其标识的内存区域中一块特定大小的内存块，这个内存块称为卡页（Card Page）。")])]),a._v(" "),v("h3",{attrs:{id:"_4-3-写屏障"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_4-3-写屏障"}},[a._v("#")]),a._v(" 4.3 写屏障")]),a._v(" "),v("blockquote",[v("p",[a._v("写屏障卡页看成是 JVM 对”引用类型字段赋值“这个动作的 AOP。")])]),a._v(" "),v("h4",{attrs:{id:"_4-3-1-作用"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_4-3-1-作用"}},[a._v("#")]),a._v(" 4.3.1 作用")]),a._v(" "),v("ul",[v("li",[a._v("实现当对象状态改变后，对卡表进行维护。")])]),a._v(" "),v("h3",{attrs:{id:"_4-4-垃圾搜索算法"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_4-4-垃圾搜索算法"}},[a._v("#")]),a._v(" 4.4 垃圾搜索算法")]),a._v(" "),v("h4",{attrs:{id:"_1-引用计数法"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-引用计数法"}},[a._v("#")]),a._v(" ① 引用计数法")]),a._v(" "),v("ul",[v("li",[a._v("给对象添加一个引用计数器，有引用就加 1，引用失效就减 1。")]),a._v(" "),v("li",[a._v("回收的时候就看这个计数器是不是 0。")]),a._v(" "),v("li",[a._v("实现简单，效率高。")]),a._v(" "),v("li",[a._v("需要额外的开销。")]),a._v(" "),v("li",[a._v("不能解决对象之间循环引用的问题。")])]),a._v(" "),v("h4",{attrs:{id:"_2-根搜索算法"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-根搜索算法"}},[a._v("#")]),a._v(" ② 根搜索算法")]),a._v(" "),v("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://hedonspace.oss-cn-beijing.aliyuncs.com/img2/008i3skNly1gtvimckq2uj61fg0laq4k02.jpg",alt:"image-20210309094029700"}}),a._v(" "),v("ul",[v("li",[a._v("从根（GC Roots）节点向下搜索对象节点，搜索走过的路经称为引用链，当一个对象到根之间没有连通的话，则对象不可用。")]),a._v(" "),v("li",[a._v("可以作为 GC Roots 的对象：\n"),v("ul",[v("li",[a._v("虚拟机栈（栈帧局部变量）中引用的对象")]),a._v(" "),v("li",[a._v("方法区类静态属性引用的对象 static")]),a._v(" "),v("li",[a._v("方法区中常量引用的对象 final")]),a._v(" "),v("li",[a._v("本地方法栈中 JNI 引用的对象")]),a._v(" "),v("li",[a._v("被 synchronized 持有的对象")])])]),a._v(" "),v("li",[a._v("HotSpot 使用了一组叫做 OopMap 的数据结构达到准确式 GC 的目的，GC 的时候直接扫描 OopMap，而不是遍历所有 GC Roots。")]),a._v(" "),v("li",[a._v("JVM 没有为每一条指令生成一个 OopMap。HotSpot 将记录 OopMap 的这些“特定位置”叫作安全点，即当前线程执行到安全点后才允许暂停进行 GC。")]),a._v(" "),v("li",[a._v("如果一段代码中，对象引用关系都不会变化，在这个区域任务地方进行 GC 都是安全的，那么这个区域称为安全区域。")])]),a._v(" "),v("div",{staticClass:"custom-block tip"},[v("p",{staticClass:"custom-block-title"},[a._v("补充")]),a._v(" "),v("h2",{attrs:{id:"oopmap"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#oopmap"}},[a._v("#")]),a._v(" OopMap")]),a._v(" "),v("p",[a._v("OopMap 记录了栈上本地变量到堆上对象的引用关系。")]),a._v(" "),v("p",[a._v("其作用是：垃圾收集时，收集线程会对栈上的内存进行扫描，看看哪些位置存储了 Reference 类型。如果发现某个位置确实存的是 Reference 类型，就意味着它所引用的对象这一次不能被回收。但问题是，栈上的本地变量表里面只有一部分数据是 Reference 类型的（它们是我们所需要的），那些非 Reference 类型的数据对我们而言毫无用处，但我们还是不得不对整个栈全部扫描一遍，这是对时间和资源的一种浪费。")]),a._v(" "),v("p",[a._v("一个很自然的想法是，能不能用空间换时间，在"),v("code",[a._v("某个时候把栈上代表引用的位置全部记录下来")]),a._v("，这样到真正 gc 的时候就可以直接读取，而不用再一点一点的扫描了。事实上，大部分主流的虚拟机也正是这么做的，比如 HotSpot ，它使用一种叫做 OopMap 的数据结构来记录这类信息。")]),a._v(" "),v("p",[a._v("我们知道，一个线程意味着一个栈，一个栈由多个栈帧组成，一个栈帧对应着一个方法，一个方法里面可能有多个安全点。 gc 发生时，程序首先运行到最近的一个安全点停下来，然后更新自己的 OopMap ，记下栈上哪些位置代表着引用。枚举根节点时，递归遍历每个栈帧的 OopMap ，通过栈中记录的被引用对象的内存地址，即可找到这些对象（ GC Roots ）。")]),a._v(" "),v("p",[a._v("通过上面的解释，我们可以很清楚的看到使用 OopMap 可以避免全栈扫描，加快枚举根节点的速度。但这并不是它的全部用意。它的另外一个更根本的作用是，可以帮助 HotSpot 实现准确式 GC（准确式GC能准确识别指针和非指针来经行垃圾回收）。")]),a._v(" "),v("h2",{attrs:{id:"rememberdset"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#rememberdset"}},[a._v("#")]),a._v(" RememberdSet")]),a._v(" "),v("p",[a._v("RememberedSet 用于处理这类问题：比如说，新生代 gc （它发生得非常频繁）。一般来说， gc 过程是这样的：首先枚举根节点。根节点有可能在新生代中，也有可能在老年代中。这里由于我们只想收集新生代（换句话说，不想收集老年代），所以没有必要对位于老年代的 GC Roots 做全面的可达性分析。但问题是，确实可能存在位于老年代的某个 GC Root，它引用了新生代的某个对象，这个对象你是不能清除的。那怎么办呢？")]),a._v(" "),v("p",[a._v("仍然是拿空间换时间的办法。事实上，"),v("code",[a._v("对于位于不同年代对象之间的引用关系，虚拟机会在程序运行过程中给记录下来。")]),a._v("对应上面所举的例子，“老年代对象引用新生代对象”这种关系，会在引用关系发生时，在新生代边上专门开辟一块空间记录下来，这就是 RememberedSet 。所以"),v("code",[a._v("“新生代的 GC Roots ” + “ RememberedSet 存储的内容”，")]),a._v("才是新生代收集时真正的 GC Roots 。然后就可以以此为据，在新生代上做可达性分析，进行垃圾回收。")]),a._v(" "),v("p",[a._v("我们知道， G1 收集器使用的是"),v("code",[a._v("化整为零")]),a._v("的思想，把一块大的内存划分成很多个域（ Region ）。但问题是，难免有一个 Region 中的对象引用另一个 Region 中对象的情况。为了达到可以以 Region 为单位进行垃圾回收的目的， G1 收集器也使用了 RememberedSet 这种技术，在各个 Region 上记录自家的对象被外面对象引用的情况。")])]),a._v(" "),v("h3",{attrs:{id:"_4-5-判断对象是否是垃圾的步骤"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_4-5-判断对象是否是垃圾的步骤"}},[a._v("#")]),a._v(" 4.5 判断对象是否是垃圾的步骤")]),a._v(" "),v("ol",[v("li",[a._v("根搜索算法判断对象不可用。")]),a._v(" "),v("li",[a._v("看是否有必要执行 finalize() 方法。(finalize()方法只会执行一次)")]),a._v(" "),v("li",[a._v("上面两个步骤走完后对象仍然没有人使用，那就属于垃圾。")])]),a._v(" "),v("h3",{attrs:{id:"_4-6-gc-类型"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_4-6-gc-类型"}},[a._v("#")]),a._v(" 4.6 GC 类型")]),a._v(" "),v("h4",{attrs:{id:"minorgc-younggc"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#minorgc-younggc"}},[a._v("#")]),a._v(" MinorGC/YoungGC")]),a._v(" "),v("ul",[v("li",[a._v("发生在新生代的收集动作。")])]),a._v(" "),v("h4",{attrs:{id:"majorgc-oldgc"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#majorgc-oldgc"}},[a._v("#")]),a._v(" MajorGC/OldGC")]),a._v(" "),v("ul",[v("li",[a._v("发生在老年代的 GC，目前只有 CMS 收集器会有单独收集老年代的行为。")])]),a._v(" "),v("h4",{attrs:{id:"mixedgc"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#mixedgc"}},[a._v("#")]),a._v(" MixedGC")]),a._v(" "),v("ul",[v("li",[a._v("收集整个新生代以及部分老年代，目前只有 G1 收集器会有这种行为。")])]),a._v(" "),v("h4",{attrs:{id:"fullgc"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#fullgc"}},[a._v("#")]),a._v(" FullGC")]),a._v(" "),v("ul",[v("li",[a._v("收集整个 Java 堆和方法区的 GC。")])]),a._v(" "),v("h3",{attrs:{id:"_4-7-stw"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_4-7-stw"}},[a._v("#")]),a._v(" 4.7 STW")]),a._v(" "),v("ul",[v("li",[a._v("STW（Stop The World) 是 Java 中一种全局暂停的现象，多半由于 GC 引起。")]),a._v(" "),v("li",[a._v("所谓全局停顿，就是"),v("u",[a._v("所有 Java 代码停止运行，native 代码可以执行，但是不能和 JVM 交互")]),a._v("。")]),a._v(" "),v("li",[a._v("其危害是长时间服务停止，没有响应；对于 HA 系统，可能引起主备切换，严重危害生产环境。")])]),a._v(" "),v("h3",{attrs:{id:"_4-8-垃圾收集类型"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_4-8-垃圾收集类型"}},[a._v("#")]),a._v(" 4.8 垃圾收集类型")]),a._v(" "),v("h4",{attrs:{id:"串行收集"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#串行收集"}},[a._v("#")]),a._v(" 串行收集")]),a._v(" "),v("ul",[v("li",[a._v("GC 单线程内存回收、会暂停所有的用户线程，如 Serial。")])]),a._v(" "),v("h4",{attrs:{id:"并行收集"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#并行收集"}},[a._v("#")]),a._v(" 并行收集")]),a._v(" "),v("ul",[v("li",[a._v("多个 GC 线程并发工作，此时用户线程是暂停的，如 Paralled。")])]),a._v(" "),v("h4",{attrs:{id:"并发收集"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#并发收集"}},[a._v("#")]),a._v(" 并发收集")]),a._v(" "),v("ul",[v("li",[a._v("用户线程和 GC 线程同时执行（不一定是并行，可能交替执行），不需要停顿用户线程，如 CMS。")])]),a._v(" "),v("h3",{attrs:{id:"_4-9-判断类无用的条件"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_4-9-判断类无用的条件"}},[a._v("#")]),a._v(" 4.9 判断类无用的条件")]),a._v(" "),v("ol",[v("li",[a._v("JVM 中该类的所有实例都已经被回收。")]),a._v(" "),v("li",[a._v("加载该类的 ClassLoader 已经被回收。")]),a._v(" "),v("li",[a._v("没有任何地方引用该类的 Class 对象。")]),a._v(" "),v("li",[a._v("无法在任何地方通过反射访问这个类。")])]),a._v(" "),v("h2",{attrs:{id:"_5-垃圾收集算法"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_5-垃圾收集算法"}},[a._v("#")]),a._v(" 5. 垃圾收集算法")]),a._v(" "),v("h3",{attrs:{id:"_5-1-标记清除法"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_5-1-标记清除法"}},[a._v("#")]),a._v(" 5.1 标记清除法")]),a._v(" "),v("blockquote",[v("p",[a._v("算法分成"),v("strong",[a._v("标记")]),a._v("和"),v("strong",[a._v("清除")]),a._v("两个阶段，先标记出要回收的对象，然后统一回收这些对象。")])]),a._v(" "),v("ul",[v("li",[a._v("简单。")]),a._v(" "),v("li",[a._v("效率不高，标记和清除的效率都不高。")]),a._v(" "),v("li",[a._v("标记清除后悔产生大量不连续的内存碎片，从而导致在分配大对象时触发 GC。")])]),a._v(" "),v("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://hedonspace.oss-cn-beijing.aliyuncs.com/img2/008i3skNly1gtvimeiifjj61b00mmwgj02.jpg",alt:"image-20210309100118220"}}),a._v(" "),v("h3",{attrs:{id:"_5-2-复制算法"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_5-2-复制算法"}},[a._v("#")]),a._v(" 5.2 复制算法")]),a._v(" "),v("blockquote",[v("p",[a._v("把内存分成"),v("strong",[a._v("两块完全相同的区域")]),a._v("，每次使用其中一块，当一块使用完了，就把这块上还存活的对象拷贝到另外一块，然后把这块清除掉。")])]),a._v(" "),v("ul",[v("li",[a._v("实现简单、运行高效，不用考虑内存碎片的问题。")]),a._v(" "),v("li",[a._v("内存有些浪费。")]),a._v(" "),v("li",[v("font",{attrs:{color:"red"}},[a._v("JVM 实际实现中，是将内存分为一块较大的 Eden 区和两块较小的 Survivor 空间，每次使用 Eden 和一块 Survivor，回收时，把存活的对象复制到另外一块 Survivor。")])],1),a._v(" "),v("li",[v("font",{attrs:{color:"red"}},[a._v("HotSpot 默认的 Eden 和 Survivor 比是 8:1，也就是每次能用 90% 的新生代空间。")])],1),a._v(" "),v("li",[v("font",{attrs:{color:"red"}},[a._v("如果 Survivor 空间不够，就要依赖老年代进行分配担保，把放不下的对象直接进入老年代。")])],1)]),a._v(" "),v("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://hedonspace.oss-cn-beijing.aliyuncs.com/img2/008i3skNly1gtvim8orrjj61au0m6wgf02.jpg",alt:"image-20210309100419490"}}),a._v(" "),v("div",{staticClass:"custom-block tip"},[v("p",{staticClass:"custom-block-title"},[a._v("分配担保")]),a._v(" "),v("ul",[v("li",[v("p",[a._v("当新生代进行垃圾回收后，新生代的 Survivor 放置不下，那么需要把这些对象放置到老年代去的策略，也就是老年代为新生代的 GC 做空间分配担保，步骤如下：")]),a._v(" "),v("ol",[v("li",[v("p",[a._v("在发送 MinorGC 之前，JVM 会检查老年代的最大可用的连续空间，是否大于新生代所有对象的总空间，如果大于，可用确保 MinorGC 是安全的。")])]),a._v(" "),v("li",[v("p",[a._v("如果小于，那么 JVM 会检查是否设置了允许担保失败。如果允许，则"),v("u",[a._v("继续检查老年代最大可用的连续空间是否大于历次晋升到老年代对象的平均大小")]),a._v("。")]),a._v(" "),v("p",[a._v("2.1 如果大于，则"),v("strong",[a._v("尝试")]),a._v("进行一次 MinorGC。")]),a._v(" "),v("p",[a._v("2.2 如果不大于，则该做一次 FullGC")])])])])])]),a._v(" "),v("h3",{attrs:{id:"_5-3-标记整理法"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_5-3-标记整理法"}},[a._v("#")]),a._v(" 5.3 标记整理法")]),a._v(" "),v("blockquote",[v("p",[a._v("标记过程跟标记清除一样，但后续不是直接清除可回收对象，而是让所有存活对象都向一端移动，然后直接清除边界以外的内存。")])]),a._v(" "),v("ul",[v("li",[a._v("由于复制算法在存活对象比较多的时候效率较低且有空间浪费。因为老年代一般不会选择复制算法，老年代多选用标记整理算法。")])]),a._v(" "),v("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://hedonspace.oss-cn-beijing.aliyuncs.com/img2/008i3skNly1gtvim6qyxbj61580lqgnd02.jpg",alt:"image-20210309101338916"}}),a._v(" "),v("h2",{attrs:{id:"_6-垃圾收集器"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_6-垃圾收集器"}},[a._v("#")]),a._v(" 6. 垃圾收集器")]),a._v(" "),v("blockquote",[v("p",[a._v("以  HotSpot 为例。")])]),a._v(" "),v("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://hedonspace.oss-cn-beijing.aliyuncs.com/img2/008i3skNly1gtvim781hhj612i0noq5502.jpg",alt:"image-20210309101933349"}}),a._v(" "),v("ul",[v("li",[a._v("Java8 默认 CMS")]),a._v(" "),v("li",[a._v("Java13 默认 G1")])]),a._v(" "),v("h3",{attrs:{id:"_6-1-serial-串行收集器"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_6-1-serial-串行收集器"}},[a._v("#")]),a._v(" 6.1 Serial 串行收集器")]),a._v(" "),v("p",[a._v("Serial（串行）收集器/Serial Old 收集器，是一个单线程收集器，在 GC 时，会 STW。")]),a._v(" "),v("p",[a._v("优点是高效，对于单 CPU，由于没有多线程的交互开销，可能更高效，是默认的 Client 模式下的新生代收集器。")]),a._v(" "),v("p",[a._v("使用 "),v("code",[a._v("-XX:+UseSerialGC")]),a._v(" 来开启，会使用 "),v("code",[a._v("Serial + Serial Old")]),a._v(" 的收集器组合。")]),a._v(" "),v("p",[v("img",{attrs:{src:"https://hedonspace.oss-cn-beijing.aliyuncs.com/img2/008i3skNly1gtvimau83vj61eo0ocdjb02.jpg",alt:"image-20210309102229468"}})]),a._v(" "),v("h3",{attrs:{id:"_6-2-parnew-并行收集器"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_6-2-parnew-并行收集器"}},[a._v("#")]),a._v(" 6.2 ParNew 并行收集器")]),a._v(" "),v("p",[a._v("ParNew（并行收集器）：使用多线程进行垃圾回收，在 GC 时，会 STW。")]),a._v(" "),v("p",[a._v("在并发能力好的 CPU 环境里，它停顿的时间要比串行收集器短；但对于单 CPU 或并发能力较弱的 CPU，由于多线程的交互开销，可能比串行收集器更差。")]),a._v(" "),v("p",[a._v("在 Server 模式下首选的新生代收集器，且能和 "),v("strong",[a._v("CMS 收集器")]),a._v("配合使用。")]),a._v(" "),v("p",[a._v("不再使用 "),v("code",[a._v("-XX:+UseParNewGC")]),a._v(" 来单独开启，直接用 "),v("code",[a._v("-XX:+UseConcMarkSweepGC")]),a._v(" 就会默认在新生代使用 ParNew 而在老年代使用 CMS。")]),a._v(" "),v("p",[v("code",[a._v("-XX:ParalledGCThreads=n")]),a._v(" 指定线程数，最后与 CPU 数量一致。")]),a._v(" "),v("p",[v("img",{attrs:{src:"https://hedonspace.oss-cn-beijing.aliyuncs.com/img2/008i3skNly1gtvime2t0dj61h40oeq6m02.jpg",alt:"image-20210309102853295"}})]),a._v(" "),v("h3",{attrs:{id:"_6-3-新生代-parallel-scavenge-收集器"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_6-3-新生代-parallel-scavenge-收集器"}},[a._v("#")]),a._v(" 6.3 新生代 Parallel Scavenge 收集器")]),a._v(" "),v("p",[a._v("新生代 Parallel Scavenge 收集器/Parallel Old 收集器：是一个应用于新生代/老年代的、使用复制算法的、并行的收集器。")]),a._v(" "),v("p",[a._v("跟 ParNew 很类似，但更关注"),v("strong",[a._v("吞吐量")]),a._v("，能最高效率的利用 CPU，适合运行后台应用。")]),a._v(" "),v("p",[a._v("使用 "),v("code",[a._v("-XX:UseParallelGC")]),a._v("  或 "),v("code",[a._v("-XX:UseParallelOldGC")]),a._v("来开启。")]),a._v(" "),v("p",[v("code",[a._v("-XX:MaxGCPauseMilis=n")]),a._v(" 设置 GC 的最大停顿时间。")]),a._v(" "),v("p",[v("img",{attrs:{src:"https://hedonspace.oss-cn-beijing.aliyuncs.com/img2/008i3skNly1gtvim9whztj61bs0mgdjm02.jpg",alt:"image-20210309103726134"}})]),a._v(" "),v("h3",{attrs:{id:"_6-4-cms-收集器"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_6-4-cms-收集器"}},[a._v("#")]),a._v(" 6.4 CMS 收集器")]),a._v(" "),v("p",[a._v("CMS（Concurrent Mark and Sweep 并发标记清除）收集器。")]),a._v(" "),v("p",[a._v("① 初始标记：只标记 GC Roots 能直接关联到的对象。")]),a._v(" "),v("p",[a._v("② 并发标记：进行 GC Root Tracing 的过程，看看哪些对象是垃圾。")]),a._v(" "),v("p",[a._v("③ 重新标记：修正并发标记期间，因程序运行导致标记发生变化的那一部分对象。")]),a._v(" "),v("p",[a._v("④ 并发清理")]),a._v(" "),v("p",[a._v("⑤ 重置线程，等待下一次 GC")]),a._v(" "),v("p",[v("img",{attrs:{src:"https://hedonspace.oss-cn-beijing.aliyuncs.com/img2/008i3skNly1gtvimbbk04j61ko0ngjvl02.jpg",alt:"image-20210309110401007"}})]),a._v(" "),v("ul",[v("li",[a._v("最后的重置线程，指的是清空跟收集相关的数据并重置，为下一次 GC 做准备。")])]),a._v(" "),v("p",[a._v("优点：低停顿、并发执行")]),a._v(" "),v("p",[a._v("缺点：")]),a._v(" "),v("ul",[v("li",[a._v("并发执行，对 CPU 资源压力大。")]),a._v(" "),v("li",[a._v("无法处理在处理过程中产生的垃圾，可能导致 FullGC。")]),a._v(" "),v("li",[a._v("采用的标记清除算法会导致大量碎片，从而在分配大对象是可能触发 FullGC。")])]),a._v(" "),v("p",[a._v("使用 "),v("code",[a._v("-XX:UseConcMarkSweepGC")]),a._v(" 来开启。")]),a._v(" "),v("p",[a._v("使用 ParNew + CMS + Serial Old 的收集器组合时，Serial Old 将作为 CMS 出错的后备收集器。")]),a._v(" "),v("p",[v("code",[a._v("-XX:CMSInitiatingOccupancyFraction=percent")]),a._v(" 设置CMS 收集器在老年代空间被使用户多少后触发回收，默认 92%（JDK8），默认 80%（JDK13）。")]),a._v(" "),v("h3",{attrs:{id:"_6-5-g1-收集器"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_6-5-g1-收集器"}},[a._v("#")]),a._v(" 6.5 G1 收集器")]),a._v(" "),v("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://hedonspace.oss-cn-beijing.aliyuncs.com/img2/008i3skNly1gtvimd4c0rj612g0dawg002.jpg",alt:"image-20210309112203823"}}),a._v(" "),v("p",[a._v("G1（Garbage-First）收集器：是一款面向服务端应用的收集器，与其他收集器相比，具有如下特点：")]),a._v(" "),v("ol",[v("li",[a._v("G1 把内存划分成多个独立的区域（Region）。")]),a._v(" "),v("li",[a._v("G1 仍采用分代思想，保留了新生代和老年代，但是它"),v("strong",[a._v("不再是物理隔离")]),a._v("的，而是一部分 Region 的集合，且不需要 Region 是连续的。")]),a._v(" "),v("li",[a._v("Humongous 是用来存放大对象的，如果一个对象所占内存大于半个 Region，那么就将这个 Regin 称为 Humongous。")]),a._v(" "),v("li",[a._v("G1 能充分利用多 CPU、多核环境硬件优势，尽量缩短 STW。")]),a._v(" "),v("li",[a._v("G1 整体上采用"),v("strong",[a._v("标记整理算法")]),a._v("，局部是通过"),v("strong",[a._v("复制算法")]),a._v("，不会产生内存碎片。")]),a._v(" "),v("li",[a._v("G1 的停顿可预测，能明确指定在一个时间段内，消耗在 GC 上的时间不能超过多长时间。")]),a._v(" "),v("li",[a._v("G1 跟踪各个 Region 里面垃圾堆的价值大小，在后台维护一个优先列表，每次根据允许的时间来回收价值最大的区域，从而保证在有限时间内的高效收集。")])]),a._v(" "),v("p",[a._v("回收过程：")]),a._v(" "),v("p",[a._v("① 初始标记：只标记 GC Roots 能直接关联到的对象。")]),a._v(" "),v("p",[a._v("② 并发标记：进行 GC Roots Tracing 的过程，寻找垃圾对象。")]),a._v(" "),v("p",[a._v("③ 最终标记：修正并发标记期间，因程序进行导致标记发生变化的那一部分对象。")]),a._v(" "),v("p",[a._v("④ 筛选回收：根据时间来进行价值最大化的回收。")]),a._v(" "),v("p",[v("img",{attrs:{src:"https://hedonspace.oss-cn-beijing.aliyuncs.com/img2/008i3skNly1gtvim7nexlj61f40m0q6q02.jpg",alt:"image-20210309112319957"}})]),a._v(" "),v("h4",{attrs:{id:"_6-5-1-g1-收集器新生代回收过程"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_6-5-1-g1-收集器新生代回收过程"}},[a._v("#")]),a._v(" 6.5.1 G1 收集器新生代回收过程")]),a._v(" "),v("p",[v("img",{attrs:{src:"https://hedonspace.oss-cn-beijing.aliyuncs.com/img2/008i3skNly1gtvim80yuhj61g20nmwgx02.jpg",alt:"image-20210310095756340"}})]),a._v(" "),v("h4",{attrs:{id:"_6-5-2-g1-收集器老年代回收过程"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_6-5-2-g1-收集器老年代回收过程"}},[a._v("#")]),a._v(" 6.5.2 G1 收集器老年代回收过程")]),a._v(" "),v("p",[v("img",{attrs:{src:"https://hedonspace.oss-cn-beijing.aliyuncs.com/img2/008i3skNly1gtvimbs2f5j61k40metb802.jpg",alt:"image-20210310100435486"}})]),a._v(" "),v("h4",{attrs:{id:"_6-5-3-配置"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_6-5-3-配置"}},[a._v("#")]),a._v(" 6.5.3 配置")]),a._v(" "),v("p",[v("code",[a._v("-XX:+UseG1GC")]),a._v(" 开启 G1（JDK13默认就是 G1）。")]),a._v(" "),v("p",[v("code",[a._v("-XX:MaxGCPauseMilis=n")]),a._v(" 最大 GC 停顿时间，这是个软目标，JVM 将尽可能停顿小于这个时间。")]),a._v(" "),v("p",[v("code",[a._v("-XX:InitiatingHeapOccupancyPercent=n")]),a._v(" 堆占用了多少的时候就触发 GC，默认为 45%。")]),a._v(" "),v("p",[v("code",[a._v("-XX:G1ReservePercent=n")]),a._v(" 设置作为空闲空间的预留内存百分比，以降低目标空间溢出的风险，默认是10%。")]),a._v(" "),v("p",[v("code",[a._v("-XX:G1HeapRegionSize=n")]),a._v(" 设置 G1 区域的大小。值是 2 的幂，范围是 1MB 到 32 MB。目标是根据最小的 Java 堆大小划分出约 2048 个区域。")]),a._v(" "),v("h3",{attrs:{id:"_6-6-zgc-收集器"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_6-6-zgc-收集器"}},[a._v("#")]),a._v(" 6.6 ZGC 收集器")]),a._v(" "),v("blockquote",[v("p",[a._v("JDK11 加入的具有实验性质的低延迟收集器。")])]),a._v(" "),v("p",[a._v("ZGC 的设计目标是：支持 TB 级别内存容量，暂停时间低（<ms），对整个程序吞吐量的影响小于 15%。")]),a._v(" "),v("p",[a._v("ZGC 里面的新技术：着色指针、读屏幕。")]),a._v(" "),v("h2",{attrs:{id:"_7-gc-性能指标"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_7-gc-性能指标"}},[a._v("#")]),a._v(" 7. GC 性能指标")]),a._v(" "),v("h4",{attrs:{id:"吞吐量"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#吞吐量"}},[a._v("#")]),a._v(" 吞吐量")]),a._v(" "),v("p",[a._v("应用代码执行的时间/运行的总时间")]),a._v(" "),v("h4",{attrs:{id:"gc-负荷"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#gc-负荷"}},[a._v("#")]),a._v(" GC 负荷")]),a._v(" "),v("p",[a._v("与吞吐量相反，是 GC 时间/运行的总时间")]),a._v(" "),v("h4",{attrs:{id:"暂停时间"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#暂停时间"}},[a._v("#")]),a._v(" 暂停时间")]),a._v(" "),v("p",[a._v("即发生 STW 的总时间")]),a._v(" "),v("h4",{attrs:{id:"gc-频率"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#gc-频率"}},[a._v("#")]),a._v(" GC 频率")]),a._v(" "),v("p",[a._v("GC 在一个时间段内发生的次数")]),a._v(" "),v("h4",{attrs:{id:"反应速度"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#反应速度"}},[a._v("#")]),a._v(" 反应速度")]),a._v(" "),v("p",[a._v("从对象成为垃圾到被回收的时间")]),a._v(" "),v("h2",{attrs:{id:"_8-jvm-内存配置原则"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_8-jvm-内存配置原则"}},[a._v("#")]),a._v(" 8. JVM 内存配置原则")]),a._v(" "),v("ol",[v("li",[a._v("新生代尽可能设置大点，如果太小会导致：\n"),v("ul",[v("li",[a._v("YGC 次数更加频繁")]),a._v(" "),v("li",[a._v("可能导致 YGC 后的对象进入老年代，如果此时老年代满了，会触发 FGC")])])]),a._v(" "),v("li",[a._v("对老年代，针对响应时间优先的应用，由于老年代通常采用并发收集器，因为其大小要综合考虑并发量和并发持续时间等参数：\n"),v("ul",[v("li",[a._v("如果设置小了，可能会造成内存碎片，高回收频率会导致应用暂停")]),a._v(" "),v("li",[a._v("如果设置大了，会需要较长的回收时间")])])]),a._v(" "),v("li",[a._v("对老年代，针对吞吐量优先的应用，通常设置较大的新生代和较小的老年代，这样可以尽可能回收大部分短期对象，减少中期对象，而老年代尽量存放长期存活的对象。")]),a._v(" "),v("li",[a._v("依据对象的存活周期进行分类，对象优先在新生代分配，长时间存活的对象进入老年代。")]),a._v(" "),v("li",[a._v("根据不同代的特点选择合适的收集算法，少量对象存活，适合复制算法；大量对象存活，适合标记清除或标记整理。")])]),a._v(" "),v("Vssue")],1)}),[],!1,null,null,null);_.default=s.exports}}]);
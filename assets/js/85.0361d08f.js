(window.webpackJsonp=window.webpackJsonp||[]).push([[85],{494:function(_,a,v){"use strict";v.r(a);var t=v(47),s=Object(t.a)({},(function(){var _=this,a=_.$createElement,v=_._self._c||a;return v("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[v("h1",{attrs:{id:"七、高效并发"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#七、高效并发"}},[_._v("#")]),_._v(" 七、高效并发")]),_._v(" "),v("h2",{attrs:{id:"_1-java-内存模型"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-java-内存模型"}},[_._v("#")]),_._v(" 1. Java 内存模型")]),_._v(" "),v("ul",[v("li",[_._v("所有共享变量都存放在主内存中，每个线程都有自己的工作内存，工作内存中保存该线程使用到的变量的主内存副本拷贝。")]),_._v(" "),v("li",[_._v("线程对变量的所有操作（读、写）都应该在工作内存中完成。")]),_._v(" "),v("li",[_._v("不同线程不能相互访问工作内存，交互数据要通过主内存。")]),_._v(" "),v("li",[_._v("Java 内存模型规定了一些操作来实现内存间交互，JVM 会保证它们是原子的。\n"),v("ul",[v("li",[v("strong",[_._v("lock")]),_._v("：锁定，把变量标识为线程独占，作用了主内存变量")]),_._v(" "),v("li",[v("strong",[_._v("unlock")]),_._v("：解锁，把锁定的变量释放，别的线程才能使用，作用于主内存变量")]),_._v(" "),v("li",[v("strong",[_._v("read")]),_._v("：读取，把变量值从主内存读取到工作内存中")]),_._v(" "),v("li",[v("strong",[_._v("load")]),_._v("：载入，把  read 读取到的值放入工作内存的变量副本中")]),_._v(" "),v("li",[v("strong",[_._v("use")]),_._v("：使用，把工作内存中一个变量的值传递给执行引擎")]),_._v(" "),v("li",[v("strong",[_._v("assign")]),_._v("：赋值，把从执行引擎接收到的值赋给工作内存里面的变量")]),_._v(" "),v("li",[v("strong",[_._v("store")]),_._v("：存储，把工作内存中一个变量的值传递到主内存中")]),_._v(" "),v("li",[v("strong",[_._v("write")]),_._v("：写入，把  store 进来的数据存放到主内存的变量中")])])])]),_._v(" "),v("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://hedonspace.oss-cn-beijing.aliyuncs.com/img2/008i3skNly1gtvin4ecekj60zc0m6die02.jpg",alt:"image-20210311151609196"}}),_._v(" "),v("ul",[v("li",[_._v("有 lock 必有 unlock")]),_._v(" "),v("li",[_._v("有read 必有 load")]),_._v(" "),v("li",[_._v("有 store 必有 write")]),_._v(" "),v("li",[_._v("上述操作 JVM 会让其按顺序执行，但是不保证连续执行。")]),_._v(" "),v("li",[_._v("不允许一个线程丢弃它的最近的 assign 操作，即变量在工作内存中改变了之后必须把该变化同步回到主内存中。")]),_._v(" "),v("li",[_._v("不允许一个线程无原因地（没有发生功能任何 assign 操作）把数据从线程的工作内存存到主内存中。")]),_._v(" "),v("li",[_._v("一个新的变量只能从主内存中“诞生”，不允许在工作内存中直接使用一个未被初始化的变量，也就是对一个变量实施 user 和 store 操作之前，必须先执行了 assign 和 load 操作。")]),_._v(" "),v("li",[_._v("一个变量在同一个时刻只允许一条线程对其执行 lock 操作，但 lock 操作可以被同一个线程重复执行多次，多次执行 lock 后，只有执行相同次数的 unlock 操作，变量才会被解锁。")]),_._v(" "),v("li",[_._v("如果对一个变量执行 lock 操作，将会情况工作内存中此变量的值，在执行引擎使用这个变量前，需要重新指向 load 或 assign 操作初始化变量的值。")]),_._v(" "),v("li",[_._v("如果一个变量没有被 lock 操作，则不允许对它执行 unlock 操作，也不能 unlock 一个被其他线程锁定的变量。")]),_._v(" "),v("li",[_._v("对一个变量执行 unlock 操作之前，必须先把此变量同步回主内存（执行 store 和 write 操作）。")])]),_._v(" "),v("h2",{attrs:{id:"_2-可见性"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-可见性"}},[_._v("#")]),_._v(" 2. 可见性")]),_._v(" "),v("blockquote",[v("p",[_._v("可见性：一个线程修改了变量，其他线程可以知道。")])]),_._v(" "),v("h3",{attrs:{id:"_2-1-volatile"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-volatile"}},[_._v("#")]),_._v(" 2.1 volatile")]),_._v(" "),v("p",[_._v("volatile 基本山是 JVM 提供的最轻量级的同步机制，用 volatile 修饰的变量，对所有线程可见，即对 volatile 变量所做的写操作能立即反映到其他线程中。")]),_._v(" "),v("p",[_._v("用 volatile 修饰的变量，在多线程环境下仍然是"),v("strong",[_._v("不安全")]),_._v("的。")]),_._v(" "),v("p",[_._v("用 volatile 修饰的变量，是禁止"),v("strong",[_._v("指令重排优化")]),_._v("的。")]),_._v(" "),v("p",[_._v("适合使用 volatile 的情景：")]),_._v(" "),v("ul",[v("li",[_._v("运算结果不依赖变量的当前值")]),_._v(" "),v("li",[_._v("能确保只有一个线程修改变量的值")])]),_._v(" "),v("h3",{attrs:{id:"_2-2-synchronized"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-synchronized"}},[_._v("#")]),_._v(" 2.2 synchronized")]),_._v(" "),v("h3",{attrs:{id:"_2-3-final"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-final"}},[_._v("#")]),_._v(" 2.3 final")]),_._v(" "),v("h2",{attrs:{id:"_3-指令重排"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-指令重排"}},[_._v("#")]),_._v(" 3. 指令重排")]),_._v(" "),v("blockquote",[v("p",[_._v("指的是 JVM 为了优化，在条件允许的情况下，对指令进行一定的重新排序，直接运行当前能够立即执行的后续指令，避开获取下一条指令所需数据造成的等待。")])]),_._v(" "),v("p",[_._v("JVM 只考虑线程内串行语义，不考虑多线程间的语义。")]),_._v(" "),v("p",[_._v("不是所有的指令都能重排，比如：")]),_._v(" "),v("ul",[v("li",[_._v("写后读：a = 1; b = a;")]),_._v(" "),v("li",[_._v("写后写：a = 1; a = 2;")])]),_._v(" "),v("h3",{attrs:{id:"_3-1-基本规则"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-基本规则"}},[_._v("#")]),_._v(" 3.1 基本规则")]),_._v(" "),v("ul",[v("li",[_._v("程序顺序原则：一个线程内包装语义的穿行性。")]),_._v(" "),v("li",[_._v("volatile 规则：volatile 变量的写，先发生于读。")]),_._v(" "),v("li",[_._v("锁规则：解锁（unlock）必然发生在随后的加锁（lock）前。")]),_._v(" "),v("li",[_._v("传递性：A 先于 B，B 先于 C，那么 A 必然先于 C。（指令）")]),_._v(" "),v("li",[_._v("线程的 start() 方法先于它的每一个动作。")]),_._v(" "),v("li",[_._v("线程的所有操作先于线程的总结。")]),_._v(" "),v("li",[_._v("线程的中断（interrupt()）先于被中断线程的代码。")]),_._v(" "),v("li",[_._v("对象的构造函数执行结束先于 finalize() 方法。")])]),_._v(" "),v("h2",{attrs:{id:"_4-线程安全处理"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_4-线程安全处理"}},[_._v("#")]),_._v(" 4. 线程安全处理")]),_._v(" "),v("h3",{attrs:{id:"_4-1-final"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-final"}},[_._v("#")]),_._v(" 4.1 final")]),_._v(" "),v("ul",[v("li",[_._v("不可变的东西是线程安全的。")])]),_._v(" "),v("h3",{attrs:{id:"_4-2-互斥同步-阻塞同步"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-互斥同步-阻塞同步"}},[_._v("#")]),_._v(" 4.2 互斥同步（阻塞同步）")]),_._v(" "),v("p",[_._v("synchronized、ReentrantLock。")]),_._v(" "),v("p",[_._v("目前这两个方法性能已经差不多了，建议优先选用 synchronized。ReentrantLock 增加了如下特性：")]),_._v(" "),v("ul",[v("li",[v("strong",[_._v("等待可中断")]),_._v("：当持有锁的线程长时间不释放锁，正在等待的线程可以选择放弃等待。")]),_._v(" "),v("li",[v("strong",[_._v("公平锁")]),_._v("：多个线程等待同一个锁时，须严格按照申请锁的时间顺序来获得锁。")]),_._v(" "),v("li",[v("strong",[_._v("锁绑定多个条件")]),_._v("：一个 ReentrantLock 对象可以绑定多个 condition 对象，而 synchronized 是针对一个条件的，如果要多个，就得多个锁。")])]),_._v(" "),v("p",[_._v("ReentrantLock 加了诸多特性，也带来了诸多额外的开销和开发的难度。")]),_._v(" "),v("h3",{attrs:{id:"_4-3-非阻塞同步"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_4-3-非阻塞同步"}},[_._v("#")]),_._v(" 4.3 非阻塞同步")]),_._v(" "),v("p",[_._v("是一种基于冲突检测的乐观锁定策略，通常是先操作，如果没有冲突，操作的成功了，有冲突再采取其他方式进行补偿处理。")]),_._v(" "),v("h3",{attrs:{id:"_4-4-无同步方案"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_4-4-无同步方案"}},[_._v("#")]),_._v(" 4.4 无同步方案")]),_._v(" "),v("p",[_._v("尽量不要有临界资源的存在。")]),_._v(" "),v("h2",{attrs:{id:"_5-锁优化"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_5-锁优化"}},[_._v("#")]),_._v(" 5. 锁优化")]),_._v(" "),v("h3",{attrs:{id:"_5-1-自旋锁"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_5-1-自旋锁"}},[_._v("#")]),_._v(" 5.1 自旋锁")]),_._v(" "),v("blockquote",[v("p",[_._v("自旋：如果线程可以很快获取锁，那么可以不在 OS 层挂起线程，而是让线程"),v("strong",[_._v("做几个忙循环")]),_._v("，这就是自旋。")])]),_._v(" "),v("p",[v("strong",[_._v("自适应自旋")]),_._v("：自旋的时间不再固定，而是由前一次在同一个锁上的自旋时间和锁的拥有者状态来决定。")]),_._v(" "),v("ul",[v("li",[_._v("如果锁被占用的时间很短，自旋成功，那么能节省线程挂起以及切换时间，从而提升系统性能。")]),_._v(" "),v("li",[_._v("如果锁被占用时间很长，自旋失败，会白白耗费处理器资源，降低系统性能。")])]),_._v(" "),v("h3",{attrs:{id:"_5-2-锁消除"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_5-2-锁消除"}},[_._v("#")]),_._v(" 5.2 锁消除")]),_._v(" "),v("blockquote",[v("p",[_._v("在编译代码的时候，JVM 检查到根据不存在共享数据竞争，自然也就无需同步加锁了，JVM 会帮我们把我们加的锁去掉。")])]),_._v(" "),v("p",[_._v("用 "),v("code",[_._v("-XX:+EliminateLocks")]),_._v(" 来开启。")]),_._v(" "),v("p",[_._v("同时要使用 "),v("code",[_._v("-XX:+DoEscapeAnalysis")]),_._v(" 开启"),v("strong",[_._v("逃逸分析")]),_._v("，所谓逃逸分析：")]),_._v(" "),v("ul",[v("li",[_._v("如果一个方法中定义的一个对象，可能被外部方法引用，称为方法逃逸。")]),_._v(" "),v("li",[_._v("如果对象可能被其他外部线程访问，称为线程逃逸。\n"),v("ul",[v("li",[_._v("比如赋值给类变量或者可以在其他线程中访问的实例变量。")])])])]),_._v(" "),v("p",[v("font",{attrs:{color:"pink"}},[_._v("（因为一旦出现逃逸，就不能轻易消除锁了，无法得知外部是如何使用我们的资源了，该同步还是得同步。）")])],1),_._v(" "),v("h3",{attrs:{id:"_5-3-锁粗化"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_5-3-锁粗化"}},[_._v("#")]),_._v(" 5.3 锁粗化")]),_._v(" "),v("blockquote",[v("p",[_._v("通常我们都要求同步块要小，但一系列连续的操作导致对一个对象反复的加锁和解锁，这会导致不必要的性能损耗，这种情况建议把锁同步的范围加大到整个操作序列。")])]),_._v(" "),v("h3",{attrs:{id:"_5-4-轻量级锁"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_5-4-轻量级锁"}},[_._v("#")]),_._v(" 5.4 轻量级锁")]),_._v(" "),v("p",[_._v("轻量级是相对于传统锁机制而言的，本意是没有多线程竞争的情况下，减少传统锁机制使用 OS 实现互斥所产生的性能损耗。")]),_._v(" "),v("p",[_._v("实现原理很简单，就是类似乐观锁的方式。")]),_._v(" "),v("p",[_._v("如果轻量级锁失败，表示存在竞争，那么 JVM 就会将其升级为重量级锁，导致性能下降（因为多了一次尝试）。")]),_._v(" "),v("h3",{attrs:{id:"_5-5-偏向锁"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_5-5-偏向锁"}},[_._v("#")]),_._v(" 5.5 偏向锁")]),_._v(" "),v("blockquote",[v("p",[_._v("偏向锁是在无竞争情况下，直接把整个同步消除了，连乐观锁都不用，从而提高性能。")]),_._v(" "),v("p",[_._v("所谓偏向，就是偏向，即锁会偏向于当前已经占有锁的线程。")])]),_._v(" "),v("p",[_._v("只要没有竞争，获得偏向锁的线程在将来进入同步块也不需要做同步。")]),_._v(" "),v("p",[_._v("当有其他线程请求相同的锁时，偏向模式结束。")]),_._v(" "),v("p",[_._v("如果程序中大多数锁总是被多个线程访问的时候，也就是竞争比较激烈，偏向锁反而会降低性能。")]),_._v(" "),v("p",[_._v("使用 "),v("code",[_._v("-XX:-UseBiasedLocking")]),_._v(" 来禁用偏向锁，默认是开启的。")]),_._v(" "),v("h3",{attrs:{id:"_5-6-jvm-中获取锁的步骤"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_5-6-jvm-中获取锁的步骤"}},[_._v("#")]),_._v(" 5.6 JVM 中获取锁的步骤")]),_._v(" "),v("div",{staticClass:"language-flow extra-class"},[v("pre",{pre:!0,attrs:{class:"language-flow"}},[v("code",[_._v("st"),v("span",{pre:!0,attrs:{class:"token operator"}},[_._v("=>")]),_._v("start"),v("span",{pre:!0,attrs:{class:"token operator"}},[_._v(":")]),_._v(" 尝试偏向锁\ne"),v("span",{pre:!0,attrs:{class:"token operator"}},[_._v("=>")]),_._v("end"),v("span",{pre:!0,attrs:{class:"token operator"}},[_._v(":")]),_._v(" 尝试普通锁，使用 "),v("span",{pre:!0,attrs:{class:"token constant"}},[_._v("OS")]),_._v(" 互斥量在操作系统层挂起\nop2"),v("span",{pre:!0,attrs:{class:"token operator"}},[_._v("=>")]),_._v("operation"),v("span",{pre:!0,attrs:{class:"token operator"}},[_._v(":")]),_._v(" 尝试轻量级锁\nop3"),v("span",{pre:!0,attrs:{class:"token operator"}},[_._v("=>")]),_._v("operation"),v("span",{pre:!0,attrs:{class:"token operator"}},[_._v(":")]),_._v(" 尝试自旋锁\nst"),v("span",{pre:!0,attrs:{class:"token operator"}},[_._v("-")]),v("span",{pre:!0,attrs:{class:"token operator"}},[_._v(">")]),_._v("op2"),v("span",{pre:!0,attrs:{class:"token operator"}},[_._v("-")]),v("span",{pre:!0,attrs:{class:"token operator"}},[_._v(">")]),_._v("op3"),v("span",{pre:!0,attrs:{class:"token operator"}},[_._v("-")]),v("span",{pre:!0,attrs:{class:"token operator"}},[_._v(">")]),_._v("e\n")])])]),v("h3",{attrs:{id:"_5-7-同步代码的基本规则"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_5-7-同步代码的基本规则"}},[_._v("#")]),_._v(" 5.7 同步代码的基本规则")]),_._v(" "),v("ul",[v("li",[_._v("尽量减少锁持有时间")]),_._v(" "),v("li",[_._v("尽量减小锁的粒度")])]),_._v(" "),v("Vssue")],1)}),[],!1,null,null,null);a.default=s.exports}}]);
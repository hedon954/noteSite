(window.webpackJsonp=window.webpackJsonp||[]).push([[109],{521:function(t,a,v){"use strict";v.r(a);var _=v(47),s=Object(_.a)({},(function(){var t=this,a=t.$createElement,v=t._self._c||a;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"三、作业管理"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#三、作业管理"}},[t._v("#")]),t._v(" 三、作业管理")]),t._v(" "),v("h2",{attrs:{id:"_1-调度"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-调度"}},[t._v("#")]),t._v(" 1. 调度")]),t._v(" "),v("h3",{attrs:{id:"_1-1-调度层次"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-调度层次"}},[t._v("#")]),t._v(" 1.1 调度层次")]),t._v(" "),v("img",{staticStyle:{zoom:"33%"},attrs:{src:"https://tva1.sinaimg.cn/large/008i3skNly1gt7bgejqrhj31c60rs41y.jpg",alt:"image-20200331144553609"}}),t._v(" "),v("h4",{attrs:{id:"作业调度"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#作业调度"}},[t._v("#")]),t._v(" 作业调度")]),t._v(" "),v("blockquote",[v("p",[t._v("又称高级调度、宏观调度或长程调度(Long-term scheduler)，其主要任务是按一定的原则从外存上处于后备状态的作业中选择一个或多个作业，给它们分配内存、输入/输出设备等必要的资源，并建立相应的进程，以使该作业具有获得竞争处理机的权利。")])]),t._v(" "),v("blockquote",[v("p",[t._v("作业调度的运行频率较低，通常为几分钟一次。")])]),t._v(" "),v("h4",{attrs:{id:"进程调度"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#进程调度"}},[t._v("#")]),t._v(" 进程调度")]),t._v(" "),v("blockquote",[v("p",[t._v("又称低级调度、微观调度或短程调度(Short-term scheduler) ，其主要任务是按照某种策略和方法从就绪队列中选取一个进程，将处理机分配给它。")])]),t._v(" "),v("blockquote",[v("p",[t._v("进程调度的运行频率很高，一般几十毫秒要运行一次。")])]),t._v(" "),v("h4",{attrs:{id:"中级调度"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#中级调度"}},[t._v("#")]),t._v(" 中级调度")]),t._v(" "),v("blockquote",[v("p",[t._v("又称中程调度(Medium term scheduling)或交换调度，其功能是将内存中暂时不用的信息移到外存，以腾出空间给内存中的进程使用，或将需要的信息从外存读入内存。")])]),t._v(" "),v("blockquote",[v("p",[t._v("引入中程调度的目的是提高内存利用率和系统吞吐量。")])]),t._v(" "),v("blockquote",[v("p",[t._v("中级调度的运行频率介于两者之间。")])]),t._v(" "),v("h4",{attrs:{id:"调度性能评价"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#调度性能评价"}},[t._v("#")]),t._v(" 调度性能评价")]),t._v(" "),v("p",[t._v("① CPU==利用率==(CPU utilization)高")]),t._v(" "),v("p",[t._v("② 系统==吞吐量==大")]),t._v(" "),v("ul",[v("li",[t._v("系统吞吐量(throughput)表示单位时间内CPU完成作业的数量。")])]),t._v(" "),v("p",[t._v("③ ==周转时间==(turnaround time)短")]),t._v(" "),v("ul",[v("li",[t._v("作业的周转时间是指从作业提交到作业完成之间的时间间隔。")]),t._v(" "),v("li",[t._v("==带权周转时间==是指作业周转时间与作业实际运行时间的比。")])]),t._v(" "),v("img",{staticStyle:{zoom:"33%"},attrs:{src:"https://tva1.sinaimg.cn/large/008i3skNly1gt7bgjnpxgj31c80gkwgo.jpg",alt:"image-20200331150125906"}}),t._v(" "),v("p",[t._v("④ 响应时间快")]),t._v(" "),v("ul",[v("li",[t._v("==响应时间==(response time)是指从用户提交请求到系统首次产生响应所用的时间。")])]),t._v(" "),v("h3",{attrs:{id:"_1-2-调度算法"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-调度算法"}},[t._v("#")]),t._v(" 1.2 调度算法")]),t._v(" "),v("h4",{attrs:{id:"先来先服务算法"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#先来先服务算法"}},[t._v("#")]),t._v(" [先来先服务算法]")]),t._v(" "),v("p",[t._v("适用于：")]),t._v(" "),v("ul",[v("li",[t._v("作业调度")]),t._v(" "),v("li",[t._v("进程调度")])]),t._v(" "),v("p",[v("img",{attrs:{src:"https://tva1.sinaimg.cn/large/008i3skNly1gt7bgewpamj319k0gyn08.jpg",alt:"image-20200331155228217"}})]),t._v(" "),v("h4",{attrs:{id:"短作业-进程-优先调度算法"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#短作业-进程-优先调度算法"}},[t._v("#")]),t._v(" [短作业（进程）优先调度算法]")]),t._v(" "),v("p",[t._v("适用于：")]),t._v(" "),v("ul",[v("li",[t._v("作业调度")]),t._v(" "),v("li",[t._v("进程调度")])]),t._v(" "),v("p",[v("img",{attrs:{src:"https://tva1.sinaimg.cn/large/008i3skNly1gt7bggeerbj319s0hoadl.jpg",alt:"image-20200331155243900"}})]),t._v(" "),v("h4",{attrs:{id:"最短剩余时间优先调度算法"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#最短剩余时间优先调度算法"}},[t._v("#")]),t._v(" [最短剩余时间优先调度算法]")]),t._v(" "),v("p",[v("img",{attrs:{src:"https://tva1.sinaimg.cn/large/008i3skNly1gt7bgk4mqxj619g0hggp602.jpg",alt:"image-20200331155529411"}})]),t._v(" "),v("img",{staticStyle:{zoom:"25%"},attrs:{src:"https://tva1.sinaimg.cn/large/008i3skNly1gt7bgl3cudj31ca05imxi.jpg",alt:"image-20200331160506167"}}),t._v(" "),v("h4",{attrs:{id:"优先级调度算法"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#优先级调度算法"}},[t._v("#")]),t._v(" [优先级调度算法]")]),t._v(" "),v("p",[t._v("适用于：")]),t._v(" "),v("ul",[v("li",[t._v("作业调度")]),t._v(" "),v("li",[t._v("进程调度")])]),t._v(" "),v("h5",{attrs:{id:"种类"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#种类"}},[t._v("#")]),t._v(" 种类")]),t._v(" "),v("ul",[v("li",[t._v("静态优先级\n"),v("ul",[v("li",[t._v("优先级确定了就不会变。")])])]),t._v(" "),v("li",[t._v("动态优先级\n"),v("ul",[v("li",[t._v("优先级会在进程运行过程中改变。")])])])]),t._v(" "),v("h4",{attrs:{id:"时间片轮转调度算法"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#时间片轮转调度算法"}},[t._v("#")]),t._v(" [时间片轮转调度算法]")]),t._v(" "),v("p",[t._v("例子：时间片大小为1")]),t._v(" "),v("img",{staticStyle:{zoom:"33%"},attrs:{src:"https://tva1.sinaimg.cn/large/008i3skNly1gt7bghrbinj30vo0ji442.jpg",alt:"image-20200407141555254"}}),t._v(" "),v("img",{staticStyle:{zoom:"33%"},attrs:{src:"https://tva1.sinaimg.cn/large/008i3skNly1gt7bgiq5pcj30wi0i440y.jpg",alt:"image-20200407141625154"}}),t._v(" "),v("p",[t._v("例子：时间片大小为4")]),t._v(" "),v("img",{staticStyle:{zoom:"33%"},attrs:{src:"https://tva1.sinaimg.cn/large/008i3skNly1gt7bgj6b5vj30vy0iwwhq.jpg",alt:"image-20200407141646410"}}),t._v(" "),v("img",{staticStyle:{zoom:"33%"},attrs:{src:"https://tva1.sinaimg.cn/large/008i3skNly1gt7bglfn46j30t20g6gnn.jpg",alt:"image-20200407141704586"}}),t._v(" "),v("h5",{attrs:{id:"确定时间片大小考虑的因素"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#确定时间片大小考虑的因素"}},[t._v("#")]),t._v(" 确定时间片大小考虑的因素")]),t._v(" "),v("ul",[v("li",[t._v("系统的响应时间\n"),v("ul",[v("li",[t._v("进程数量一定，时间片的大小与系统响应时间成正比。")]),t._v(" "),v("li",[t._v("T = Nq（q为时间片大小）")])])]),t._v(" "),v("li",[t._v("就绪队列中的进程数目")]),t._v(" "),v("li",[t._v("系统的处理能力\n"),v("ul",[v("li",[t._v("速度高则时间片短。")])])])]),t._v(" "),v("h5",{attrs:{id:"改进-虚拟时间轮转调度"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#改进-虚拟时间轮转调度"}},[t._v("#")]),t._v(" 改进：虚拟时间轮转调度")]),t._v(" "),v("ul",[v("li",[t._v("思想\n"),v("ul",[v("li",[t._v("不小心停下来了，当想要重新执行的时候，会被优先调度，而不是重新排队。")])])])]),t._v(" "),v("h4",{attrs:{id:"高响应比优先调度算法"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#高响应比优先调度算法"}},[t._v("#")]),t._v(" [高响应比优先调度算法]")]),t._v(" "),v("h5",{attrs:{id:"响应比"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#响应比"}},[t._v("#")]),t._v(" 响应比")]),t._v(" "),v("p",[t._v("响应比 = 1 + 作业等待时间/估计运行时间")]),t._v(" "),v("p",[t._v("​\t（+1的原因是响应时间为作业进入系统后的等待时间加上估计运行时间）")]),t._v(" "),v("h5",{attrs:{id:"思想"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#思想"}},[t._v("#")]),t._v(" 思想")]),t._v(" "),v("ul",[v("li",[t._v("相同等待时间下，短作业优先；")]),t._v(" "),v("li",[t._v("相同运行时间下，等待时间长的优先。")])]),t._v(" "),v("h4",{attrs:{id:"多级队列调度算法"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#多级队列调度算法"}},[t._v("#")]),t._v(" [多级队列调度算法]")]),t._v(" "),v("h5",{attrs:{id:"思想-2"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#思想-2"}},[t._v("#")]),t._v(" 思想")]),t._v(" "),v("ul",[v("li",[t._v("根据作业的性质或类型不同，将进程就绪队列分为多个，每个队列采用不同的调度算法。")]),t._v(" "),v("li",[t._v("例如：终端型作业为前台作业，批处理作业为后台作业。前台采用时间片轮转算法，后台采用先来先服务，前台作业的优先级高。")])]),t._v(" "),v("h4",{attrs:{id:"多级反馈队列调度算法"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#多级反馈队列调度算法"}},[t._v("#")]),t._v(" [多级反馈队列调度算法]")]),t._v(" "),v("h5",{attrs:{id:"思想1"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#思想1"}},[t._v("#")]),t._v(" 思想1")]),t._v(" "),v("ul",[v("li",[t._v("设置多个就绪队列，并为每个队列赋予不同的优先级。")]),t._v(" "),v("li",[t._v("第一个队列优先级最高，第二列次之，以此类推。")]),t._v(" "),v("li",[t._v("每个队列中进程执行的时间片大小也各不相同，进程所在的队列的优先级越高，其相应的时间片就越短。")])]),t._v(" "),v("h5",{attrs:{id:"思想2"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#思想2"}},[t._v("#")]),t._v(" 思想2")]),t._v(" "),v("p",[t._v("当一个新进程进入系统时，首先将它放入第1个队列的末尾，按先来先服务的原则排队等待调度。当轮到该进程执行时，如能在此时间片内完成，便可准备撤离系统；如果它在一个时间片结束时尚未完成，调度程序便将该进程转入第2队列的末尾，再同样地按先来先服务原则等待调度执行。如此下去，最后一个队列中使用时间片轮转调度算法。")]),t._v(" "),v("h5",{attrs:{id:"思想3"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#思想3"}},[t._v("#")]),t._v(" 思想3")]),t._v(" "),v("ul",[v("li",[t._v("仅当第1个队列为空时，调度程序才调度第2队列中的进程运行；仅当第1个至第（i－1）个队列均为空时，才会调度第i个队列中的进程运行。")]),t._v(" "),v("li",[t._v("当处理机正在为第i个队列中的某进程服务时，若又有新进程进入优先级较高的队列中，则此时新进程将抢占正在运行进程的处理机，即由调度程序把正在执行进程放回第i个队列末尾，重新将处理机分配给新进程。")])]),t._v(" "),v("h5",{attrs:{id:"举例"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#举例"}},[t._v("#")]),t._v(" 举例")]),t._v(" "),v("p",[t._v("[1] 题目")]),t._v(" "),v("p",[t._v("设有A、B、C、D、E五个进程，其到达时间分别为0、1、3、4、5，要求运行时间依次为3、8、4、5、7，采用多级反馈队列调度算法，系统中共有3个队列，其时间片依次为1、2和4，试计算其平均周转时间和平均带权周转时间。")]),t._v(" "),v("p",[t._v("[2] 调度过程")]),t._v(" "),v("img",{staticStyle:{zoom:"33%"},attrs:{src:"https://tva1.sinaimg.cn/large/008i3skNly1gt7bgly7wej30u20fetco.jpg",alt:"image-20200407150636743"}}),t._v(" "),v("h5",{attrs:{id:"性能"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#性能"}},[t._v("#")]),t._v(" 性能")]),t._v(" "),v("p",[t._v("多级反馈队列调度算法能较好满足各类用户的需求：")]),t._v(" "),v("ul",[v("li",[t._v("终端型用户\n"),v("ul",[v("li",[t._v("大多能在一个时间片内完成，响应时间较短；")])])]),t._v(" "),v("li",[t._v("短批处理作业用户\n"),v("ul",[v("li",[t._v("能在前几个队列完成，周转时间较短；")])])]),t._v(" "),v("li",[t._v("长批处理作业用户\n"),v("ul",[v("li",[t._v("依次在1～n队列中运行，不会长时间得不到处理。")])])])]),t._v(" "),v("h2",{attrs:{id:"_2-死锁"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-死锁"}},[t._v("#")]),t._v(" 2. 死锁")]),t._v(" "),v("blockquote",[v("p",[t._v("指多个进程因竞争系统资源或相互通信而造成的一种僵局，若无外力作用，这些进程都将永远不能向前推进。")])]),t._v(" "),v("h3",{attrs:{id:"_2-1-资源的分类"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-资源的分类"}},[t._v("#")]),t._v(" 2.1 资源的分类")]),t._v(" "),v("h4",{attrs:{id:"可剥夺资源"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#可剥夺资源"}},[t._v("#")]),t._v(" [可剥夺资源]")]),t._v(" "),v("blockquote",[v("p",[t._v("指某进程获得这类资源后，该资源可以被其他进程或系统剥夺。如CPU，存储器。")])]),t._v(" "),v("p",[v("font",{attrs:{color:"Red"}},[t._v("S：竞争可剥夺资源不会产生死锁！")])],1),t._v(" "),v("h4",{attrs:{id:"不可剥夺资源"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#不可剥夺资源"}},[t._v("#")]),t._v(" [不可剥夺资源]")]),t._v(" "),v("blockquote",[v("p",[t._v("指系统将这类资源分配给进程后，再不能强行收回，只能在进程使用完后主动释放。如打印机、读卡机。")])]),t._v(" "),v("h4",{attrs:{id:"永久性资源"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#永久性资源"}},[t._v("#")]),t._v(" [永久性资源]")]),t._v(" "),v("blockquote",[v("p",[t._v("可顺序重复使用的资源。如打印机。")])]),t._v(" "),v("h4",{attrs:{id:"消耗性资源"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#消耗性资源"}},[t._v("#")]),t._v(" [消耗性资源]")]),t._v(" "),v("blockquote",[v("p",[t._v("由一个进程产生，被另一个进程使用短暂时间后便无用的资源，又称为临时性资源。如消息。")])]),t._v(" "),v("h3",{attrs:{id:"_2-2-死锁产生的必要条件"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-死锁产生的必要条件"}},[t._v("#")]),t._v(" 2.2 死锁产生的必要条件")]),t._v(" "),v("ul",[v("li",[t._v("互斥条件\n"),v("ul",[v("li",[t._v("在一段时间内某资源仅为一个进程所占有。")])])]),t._v(" "),v("li",[t._v("请求和保持条件\n"),v("ul",[v("li",[t._v("又称部分分配条件、占用并等待条件。当进程因请求资源被阻塞时，已分配资源保持不放。")])])]),t._v(" "),v("li",[t._v("不剥夺条件\n"),v("ul",[v("li",[t._v("进程所获得的资源在未使用完毕之前，不能被其他进程强行夺走。")])])]),t._v(" "),v("li",[t._v("循环等待条件\n"),v("ul",[v("li",[t._v("死锁发生时，存在一个进程资源的循环。")])])])]),t._v(" "),v("h3",{attrs:{id:"_2-3-处理死锁的基本方法"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-处理死锁的基本方法"}},[t._v("#")]),t._v(" 2.3 处理死锁的基本方法")]),t._v(" "),v("h4",{attrs:{id:"忽略死锁"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#忽略死锁"}},[t._v("#")]),t._v(" [忽略死锁]")]),t._v(" "),v("ul",[v("li",[t._v("这种处理方式又称鸵鸟算法，指像鸵鸟一样对死锁视而不见。")])]),t._v(" "),v("h4",{attrs:{id:"预防死锁"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#预防死锁"}},[t._v("#")]),t._v(" [预防死锁]")]),t._v(" "),v("ul",[v("li",[t._v("设置某些限制条件，通过破坏死锁产生的四个必要条件之一来预防死锁。\n"),v("ul",[v("li",[t._v("破坏互斥条件\n"),v("ul",[v("li",[t._v("互斥是设备本身固有的属性，此条件不能破坏。")])])]),t._v(" "),v("li",[t._v("破坏请求和保持条件\n"),v("ul",[v("li",[t._v("要求进程一次申请它所需的全部资源，若有足够的资源则分配给进程，否则不分配资源，进程等待。这种方法称为静态资源分配法。")])])]),t._v(" "),v("li",[t._v("破坏不剥夺条件\n"),v("ul",[v("li",[t._v("一个已获得某些资源的进程，若新的资源请求得不到满足，则它必须释放已获得的所有资源。")])])]),t._v(" "),v("li",[t._v("破坏循环等待条件\n"),v("ul",[v("li",[t._v("将所有资源按类型排队，并赋予不同序号，要求进程均严格按照序号递增的次序请求资源，同类资源一次申请完。这种方法称为有序资源分配法。")])])])])])]),t._v(" "),v("h4",{attrs:{id:"避免死锁"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#避免死锁"}},[t._v("#")]),t._v(" [避免死锁]")]),t._v(" "),v("ul",[v("li",[t._v("在资源的动态分配过程中，用某种方法来防止系统进入不安全状态。\n"),v("ul",[v("li",[t._v("进程动态地申请资源，系统在进行资源分配之前，先计算资源分配的安全性。若此次分配不会导致系统进入不安全状态，便将资源分配给进程，否则进程等待。")])])])]),t._v(" "),v("h5",{attrs:{id:"_1-安全状态"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-安全状态"}},[t._v("#")]),t._v(" [1] 安全状态")]),t._v(" "),v("blockquote",[v("p",[t._v("指系统能按某种顺序如< P1、P2… 、Pn>来为每个进程分配其所需的资源，直至最大需求，使每个进程都可以顺利完成，则称此时的系统状态为安全状态，称序列< P1、P2、…、Pn >为安全序列。")])]),t._v(" "),v("h5",{attrs:{id:"_2-示例"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-示例"}},[t._v("#")]),t._v(" [2] 示例")]),t._v(" "),v("img",{staticStyle:{zoom:"33%"},attrs:{src:"https://tva1.sinaimg.cn/large/008i3skNly1gt7bgfuhn4j30tg0dctaa.jpg",alt:"image-20200407162811979"}}),t._v(" "),v("p",[t._v("显然可以先给P2，P2结束后释放4个，现在可用5个。")]),t._v(" "),v("p",[t._v("再分配给P1，P1结束后释放10个，现在可用10个。")]),t._v(" "),v("p",[t._v("再给P3就OK了。")]),t._v(" "),v("p",[t._v("故安全序列为<P2,P1,P3>")]),t._v(" "),v("h4",{attrs:{id:"检测死锁及解除"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#检测死锁及解除"}},[t._v("#")]),t._v(" [检测死锁及解除]")]),t._v(" "),v("ul",[v("li",[t._v("系统定期检测是否出现死锁，若出现则解除死锁。")])]),t._v(" "),v("h3",{attrs:{id:"_2-4-银行家算法"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-银行家算法"}},[t._v("#")]),t._v(" 2.4 银行家算法")]),t._v(" "),v("h4",{attrs:{id:"前提"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#前提"}},[t._v("#")]),t._v(" [前提]")]),t._v(" "),v("ul",[v("li",[t._v("客户申请的贷款是有限的，每次申请需声明最大资金量")]),t._v(" "),v("li",[t._v("银行家在能够满足贷款时，都应该给用户贷款")]),t._v(" "),v("li",[t._v("客户在使用贷款后，能够及时归还贷款")])]),t._v(" "),v("h4",{attrs:{id:"数据结构"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#数据结构"}},[t._v("#")]),t._v(" [数据结构]")]),t._v(" "),v("ul",[v("li",[t._v("已分配资源表")]),t._v(" "),v("li",[t._v("所需资源表")]),t._v(" "),v("li",[t._v("还需分配资源表")]),t._v(" "),v("li",[t._v("可分配资源表")])]),t._v(" "),v("h4",{attrs:{id:"思想-3"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#思想-3"}},[t._v("#")]),t._v(" [思想]")]),t._v(" "),v("p",[v("img",{attrs:{src:"https://tva1.sinaimg.cn/large/008i3skNly1gt7bgfcowlj30rk0fbjt4.jpg",alt:"这里写图片描述"}})]),t._v(" "),v("h4",{attrs:{id:"样例"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#样例"}},[t._v("#")]),t._v(" [样例]")]),t._v(" "),v("p",[t._v("假定系统中有四个进程P、P2、P3、P，三种类型的资源R R2、 Rg,数量分别为9、3、6，在T。时刻的资源分配情况如表4.7所示。试问:")]),t._v(" "),v("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://tva1.sinaimg.cn/large/008i3skNly1gt7bggv6ocj316g0e4wha.jpg",alt:"image-20210108102324340"}}),t._v(" "),v("p",[t._v("(1) T~0~时刻是否安全?")]),t._v(" "),v("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://tva1.sinaimg.cn/large/008i3skNly1gt7bgklr2rj317g0cu770.jpg",alt:"image-20210108102418279"}}),t._v(" "),v("p",[t._v("利用安全性算法对T时刻的资源分配情况进行分析，可得表4. 8所示的T~0~时刻的安全性分析，从中得知，T~0~时刻存在着一个安全序列<P2、P1、P3、 P4>,故系统是安全的。")]),t._v(" "),v("p",[t._v("(2) T~0~时刻以后，若进程P发出资源请求Request, (1, 0, 1)，则系统能否将资源分配给它?")]),t._v(" "),v("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://tva1.sinaimg.cn/large/008i3skNly1gt7bghdu52j31780soq96.jpg",alt:"image-20210108102637899"}}),t._v(" "),v("p",[t._v("(3) 在进程P,申请资源后，若P,发出资源请求Request, (1, 0，1)， 则系统能否将资源分配给它?")]),t._v(" "),v("p",[t._v("(4) 在进程P申请资源后，若P发出资源请求Request, (0, 0，1),则系统能否将资源分配给它?")]),t._v(" "),v("Vssue")],1)}),[],!1,null,null,null);a.default=s.exports}}]);
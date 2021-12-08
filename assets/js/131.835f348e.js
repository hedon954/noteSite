(window.webpackJsonp=window.webpackJsonp||[]).push([[131],{540:function(t,a,s){"use strict";s.r(a);var _=s(47),r=Object(_.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"二、进程管理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#二、进程管理"}},[t._v("#")]),t._v(" 二、进程管理")]),t._v(" "),s("blockquote",[s("p",[t._v("进程是系统进行资源分配和调度的基本单位。")])]),t._v(" "),s("h2",{attrs:{id:"_1-进程实体-pcb"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-进程实体-pcb"}},[t._v("#")]),t._v(" 1. 进程实体 —— PCB")]),t._v(" "),s("p",[t._v("PCB：")]),t._v(" "),s("ul",[s("li",[t._v("用于描述和控制进程运行的通用数据结构。")]),t._v(" "),s("li",[t._v("记录进程当前状态和控制进程运行的全部信息。")]),t._v(" "),s("li",[t._v("PCB 的使用进程是能够独立运行的基本单位。")]),t._v(" "),s("li",[t._v("PCB 是操作系统进行调度经常会被读取的信息。")]),t._v(" "),s("li",[t._v("PCB 是常驻内存的，存放在系统专门开辟的PCB区域内。")])]),t._v(" "),s("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://tva1.sinaimg.cn/large/008i3skNly1gt7bf6zmgyj307q0g4jry.jpg",alt:"image-20210107114756329"}}),t._v(" "),s("h5",{attrs:{id:"标识符"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#标识符"}},[t._v("#")]),t._v(" [标识符]")]),t._v(" "),s("ul",[s("li",[t._v("标识符唯一标记一个进程，用于区别其他进程。")])]),t._v(" "),s("h5",{attrs:{id:"状态"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#状态"}},[t._v("#")]),t._v(" [状态]")]),t._v(" "),s("ul",[s("li",[t._v("标记进程的进程状态，如：运行态。")])]),t._v(" "),s("h5",{attrs:{id:"程序计数器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#程序计数器"}},[t._v("#")]),t._v(" [程序计数器]")]),t._v(" "),s("ul",[s("li",[t._v("进程即将被执行的下一条指令的地址。")])]),t._v(" "),s("h5",{attrs:{id:"内存指针"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#内存指针"}},[t._v("#")]),t._v(" [内存指针]")]),t._v(" "),s("ul",[s("li",[t._v("程序代码、进程数据相关指针。")])]),t._v(" "),s("h5",{attrs:{id:"上下文数据"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#上下文数据"}},[t._v("#")]),t._v(" [上下文数据]")]),t._v(" "),s("ul",[s("li",[t._v("进程执行时处理器存储的数据。")])]),t._v(" "),s("h5",{attrs:{id:"io-状态信息"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#io-状态信息"}},[t._v("#")]),t._v(" [IO 状态信息]")]),t._v(" "),s("ul",[s("li",[t._v("被进程IO操作所占用的文件列表。")])]),t._v(" "),s("h5",{attrs:{id:"记账信息"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#记账信息"}},[t._v("#")]),t._v(" [记账信息]")]),t._v(" "),s("ul",[s("li",[t._v("使用处理器时间、时钟数总和等。")])]),t._v(" "),s("img",{staticStyle:{zoom:"25%"},attrs:{src:"https://tva1.sinaimg.cn/large/008i3skNly1gt7bffupj2j322w0ns44j.jpg",alt:"image-20210107115217782"}}),t._v(" "),s("h2",{attrs:{id:"_2-线程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-线程"}},[t._v("#")]),t._v(" 2. 线程")]),t._v(" "),s("h3",{attrs:{id:"_2-1-定义"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-定义"}},[t._v("#")]),t._v(" 2.1 定义")]),t._v(" "),s("blockquote",[s("p",[t._v("线程是进程内一个相对独立的、可调度的执行单元。")])]),t._v(" "),s("blockquote",[s("p",[t._v("线程自己基本上不拥有资源，只拥有一点在运行时必不可少的资源（如程序计数器、一组寄存器和栈），但它可以与同属一个进程的其他线程共享进程拥有的全部资源。")])]),t._v(" "),s("ul",[s("li",[t._v("一个线程看一看创建和撤销另一个线程")]),t._v(" "),s("li",[t._v("同一个进程的多个线程之间可以并发执行")]),t._v(" "),s("li",[t._v("线程也有就绪、阻塞和执行三种基本状态")]),t._v(" "),s("li",[t._v("一个进程至少有一个线程")])]),t._v(" "),s("h3",{attrs:{id:"_2-2-实现"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-实现"}},[t._v("#")]),t._v(" 2.2 实现")]),t._v(" "),s("h5",{attrs:{id:"内核级线程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#内核级线程"}},[t._v("#")]),t._v(" 内核级线程")]),t._v(" "),s("ul",[s("li",[t._v("依赖于内核，由操作系统内核完成创建和撤消工作。")]),t._v(" "),s("li",[t._v("在支持内核级线程的OS中，内核维护进程和线程的上下文信息并完成线程切换。")]),t._v(" "),s("li",[t._v("一个内核级线程阻塞时不会影响其他线程的运行。")]),t._v(" "),s("li",[t._v("处理机时间分配的对象是线程，所以有多个线程的进程将获得更多处理机时间。")])]),t._v(" "),s("h5",{attrs:{id:"用户级线程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#用户级线程"}},[t._v("#")]),t._v(" 用户级线程")]),t._v(" "),s("ul",[s("li",[t._v("不依赖于操作系统核心，由应用进程利用线程库提供创建、同步、调度和管理线程的函数来控制。")]),t._v(" "),s("li",[t._v("用户级线程的维护由应用进程完成，可以用于不支持内核级线程的操作系统。")]),t._v(" "),s("li",[t._v("当一个线程阻塞时，整个进程都必须等待，处理机时间是分配给进程的，进程内有多个线程时，每个线程的执行时间相对少一些。")])]),t._v(" "),s("h5",{attrs:{id:"两种方法的组合"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#两种方法的组合"}},[t._v("#")]),t._v(" 两种方法的组合")]),t._v(" "),s("ul",[s("li",[t._v("在这种系统中，内核支持多线程的建立、调度与管理；同时，系统中又提供使用线程库的便利，允许用户应用程序建立、调度和管理用户级的线程。")]),t._v(" "),s("li",[t._v("因此可以很好地将内核级线程和用户级线程的优点结合起来。由此产生了不同的多线程模型。")])]),t._v(" "),s("h3",{attrs:{id:"_2-3-模型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-模型"}},[t._v("#")]),t._v(" 2.3 模型")]),t._v(" "),s("h5",{attrs:{id:"一对一模型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一对一模型"}},[t._v("#")]),t._v(" 一对一模型")]),t._v(" "),s("img",{staticStyle:{zoom:"33%"},attrs:{src:"https://tva1.sinaimg.cn/large/008i3skNly1gt7bf9arrcj30xi0d8my2.jpg",alt:"image-20200303151504081"}}),t._v(" "),s("h5",{attrs:{id:"多对一模型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#多对一模型"}},[t._v("#")]),t._v(" 多对一模型")]),t._v(" "),s("img",{staticStyle:{zoom:"33%"},attrs:{src:"https://tva1.sinaimg.cn/large/008i3skNly1gt7bfdvmw2j30qk0nejsi.jpg",alt:"image-20200303151521602"}}),t._v(" "),s("h5",{attrs:{id:"多对多模型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#多对多模型"}},[t._v("#")]),t._v(" 多对多模型")]),t._v(" "),s("img",{staticStyle:{zoom:"33%"},attrs:{src:"https://tva1.sinaimg.cn/large/008i3skNly1gt7bf8c5zxj30qk0m0abb.jpg",alt:"image-20200303151541776"}}),t._v(" "),s("h2",{attrs:{id:"_3-进程与线程的区别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-进程与线程的区别"}},[t._v("#")]),t._v(" 3. 进程与线程的区别")]),t._v(" "),s("div",{staticClass:"language-markdown extra-class"},[s("pre",{pre:!0,attrs:{class:"language-markdown"}},[s("code",[s("span",{pre:!0,attrs:{class:"token title important"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("#")]),t._v(" （1）进程")]),t._v("\n进程是程序的一次执行过程，是一个动态概念，是程序在执行过程中分配和管理资源的基本单位，每一个进程都有一个自己的地址空间，至少有 5 种基本状态，它们是：初始态，执行态，等待状态，就绪状态，终止状态。\n\n"),s("span",{pre:!0,attrs:{class:"token title important"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("#")]),t._v(" （2）线程")]),t._v("\n 线程是CPU调度和分派的基本单位，它可与同属一个进程的其他的线程共享进程所拥有的全部资源。\n\n"),s("span",{pre:!0,attrs:{class:"token title important"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("#")]),t._v(" （3）联系")]),t._v("\n 线程是进程的一部分，一个线程只能属于一个进程，而一个进程可以有多个线程，但至少有一个线程。\n\n"),s("span",{pre:!0,attrs:{class:"token title important"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("#")]),t._v(" （4）区别：从资源使用的角度出发。（所谓的资源就是计算机里的中央处理器，内存，文件，网络等等）")]),t._v("\n根本区别：进程是操作系统资源分配的基本单位，而线程是任务调度和执行的基本单位\n\n在开销方面：每个进程都有独立的代码和数据空间（程序上下文），程序之间的切换会有较大的开销；线程可以看做轻量级的进程，同一类线程共享代码和数据空间，每个线程都有自己独立的运行栈和程序计数器（PC），线程之间切换的开销小。\n\n所处环境：在操作系统中能同时运行多个进程（程序）；而在同一个进程（程序）中有多个线程同时执行（通过CPU调度，在每个时间片中只有一个线程执行）\n\n内存分配方面：系统在运行的时候会为每个进程分配不同的内存空间；而对线程而言，除了CPU外，系统不会为线程分配内存（线程所使用的资源来自其所属进程的资源），线程组之间只能共享资源。\n\n包含关系：没有线程的进程可以看做是单线程的，如果一个进程内有多个线程，则执行过程不是一条线的，而是多条线（线程）共同完成的；线程是进程的一部分，所以线程也被称为轻权进程或者轻量级进程。\n")])])]),s("h2",{attrs:{id:"_4-五状态模型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-五状态模型"}},[t._v("#")]),t._v(" 4. 五状态模型")]),t._v(" "),s("img",{staticStyle:{zoom:"25%"},attrs:{src:"https://tva1.sinaimg.cn/large/008i3skNly1gt7bf9x2szj31k80lomzk.jpg",alt:"image-20210107144259618"}}),t._v(" "),s("h5",{attrs:{id:"创建"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#创建"}},[t._v("#")]),t._v(" [创建]")]),t._v(" "),s("ul",[s("li",[t._v("创建进程时拥有PCB但其他资源尚未就绪的状态称为创建状态。")]),t._v(" "),s("li",[t._v("操作系统提供 fork() 函数接口创建进程。")])]),t._v(" "),s("h5",{attrs:{id:"就绪"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#就绪"}},[t._v("#")]),t._v(" [就绪]")]),t._v(" "),s("ul",[s("li",[t._v("当进程被分配到除CPU以外所有必要的资源后，只要再获得CPU的使用权，就可以立即运行，其他资源都准备好、只差CPU资源的状态为就绪状态。")])]),t._v(" "),s("h5",{attrs:{id:"执行"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#执行"}},[t._v("#")]),t._v(" [执行]")]),t._v(" "),s("ul",[s("li",[t._v("进程获得CPU，其程序正在执行称为执行状态。")]),t._v(" "),s("li",[t._v("在单处理机中，在某个时刻只能有一个进程是处于执行状态。")])]),t._v(" "),s("h5",{attrs:{id:"阻塞"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#阻塞"}},[t._v("#")]),t._v(" [阻塞]")]),t._v(" "),s("ul",[s("li",[t._v("进程因某种原因如:其他设备未就绪而无法继续执行，从而放弃CPU的状态称为阻塞状态。")])]),t._v(" "),s("h5",{attrs:{id:"终止"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#终止"}},[t._v("#")]),t._v(" [终止]")]),t._v(" "),s("ul",[s("li",[t._v("进程结束由系统清理或者归还 PCB 的状态称为终止状态。")])]),t._v(" "),s("h2",{attrs:{id:"_5-进程同步"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-进程同步"}},[t._v("#")]),t._v(" 5. 进程同步")]),t._v(" "),s("p",[t._v("原则：")]),t._v(" "),s("ul",[s("li",[t._v("空闲让进：资源无占用，允许使用")]),t._v(" "),s("li",[t._v("忙着等待：资源有占用，请求进程等待")]),t._v(" "),s("li",[t._v("有限等待：保证有限等待时间能够使用资源")]),t._v(" "),s("li",[t._v("让权等待：等待时，进程需要让出 CPU")])]),t._v(" "),s("p",[t._v("方法：")]),t._v(" "),s("ul",[s("li",[t._v("消息队列")]),t._v(" "),s("li",[t._v("共享存储")]),t._v(" "),s("li",[t._v("信号量")]),t._v(" "),s("li",[t._v("管程")])]),t._v(" "),s("h3",{attrs:{id:"_5-1-生产者-消费者问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-1-生产者-消费者问题"}},[t._v("#")]),t._v(" 5.1 生产者-消费者问题")]),t._v(" "),s("blockquote",[s("p",[t._v("有一群生产者进程在生产产品，并将这些产品提供给消费者进程进行消费，生产者进程和消费者 进程可以并发执行，在两者之间设置了一个具有n可缓冲区的缓冲池，生产者进程需要将所生产的产品放到一个缓冲区中，消费者进程可以从缓冲区取走产品消费。")])]),t._v(" "),s("h3",{attrs:{id:"_5-2-读者-写者问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-2-读者-写者问题"}},[t._v("#")]),t._v(" 5.2 读者-写者问题")]),t._v(" "),s("blockquote"),t._v(" "),s("h3",{attrs:{id:"_5-3-哲学家进餐问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-3-哲学家进餐问题"}},[t._v("#")]),t._v(" 5.3 哲学家进餐问题")]),t._v(" "),s("blockquote",[s("p",[t._v("有五个哲学家，他们的生活方式是交替地进行思考和进餐，哲学家们共同使用一张圆桌，分别坐 在周围的五张椅子上，在圆桌上有五个碗和五支筷子。平时哲学家们只进行思考，饥饿时则试图 取靠近他们的左、右两支筷子，只有两支筷子都被他拿到的时候就能进餐，进餐完毕之后，放下左右筷子继续思考。")])]),t._v(" "),s("h3",{attrs:{id:"_5-4-睡眠理发师问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-4-睡眠理发师问题"}},[t._v("#")]),t._v(" 5.4 睡眠理发师问题")]),t._v(" "),s("h2",{attrs:{id:"_6-线程同步"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6-线程同步"}},[t._v("#")]),t._v(" 6. 线程同步")]),t._v(" "),s("p",[t._v("进程的多个线程共享进程资源。")]),t._v(" "),s("ul",[s("li",[t._v("互斥锁")]),t._v(" "),s("li",[t._v("自旋锁")]),t._v(" "),s("li",[t._v("读写锁")]),t._v(" "),s("li",[t._v("条件变量")])]),t._v(" "),s("h3",{attrs:{id:"_6-1-互斥锁"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6-1-互斥锁"}},[t._v("#")]),t._v(" 6.1 互斥锁")]),t._v(" "),s("h3",{attrs:{id:"_6-2-自旋锁"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6-2-自旋锁"}},[t._v("#")]),t._v(" 6.2 自旋锁")]),t._v(" "),s("h3",{attrs:{id:"_6-3-读写锁"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6-3-读写锁"}},[t._v("#")]),t._v(" 6.3 读写锁")]),t._v(" "),s("h3",{attrs:{id:"_6-4-条件变量"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6-4-条件变量"}},[t._v("#")]),t._v(" 6.4 条件变量")]),t._v(" "),s("h2",{attrs:{id:"_7-linux-进程管理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_7-linux-进程管理"}},[t._v("#")]),t._v(" 7. Linux 进程管理")]),t._v(" "),s("h3",{attrs:{id:"_7-1-进程的类型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_7-1-进程的类型"}},[t._v("#")]),t._v(" 7.1 进程的类型")]),t._v(" "),s("h5",{attrs:{id:"前台进程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#前台进程"}},[t._v("#")]),t._v(" [前台进程]")]),t._v(" "),s("p",[t._v("前台进程就是具有终端，能够跟用户进行交互的进程。")]),t._v(" "),s("h5",{attrs:{id:"后台进程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#后台进程"}},[t._v("#")]),t._v(" [后台进程]")]),t._v(" "),s("p",[t._v("没有占用终端的进程就是后台进程，基本不和用户交互，优先级比前台进程低。")]),t._v(" "),s("p",[s("font",{attrs:{color:"orange"}},[t._v("将需要执行的命令以 “&” 符号结束就可以启动一个后台进程。")])],1),t._v(" "),s("h5",{attrs:{id:"守护进程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#守护进程"}},[t._v("#")]),t._v(" [守护进程]")]),t._v(" "),s("p",[t._v("守护（daemon）进程是特殊的后台进程。")]),t._v(" "),s("p",[t._v("很多守护进程在系统引导的时候启动，一直运行到系统关闭。")]),t._v(" "),s("p",[t._v("Linux 中典型的守护进程：名字以“d”结尾的一般都是守护进程：")]),t._v(" "),s("ul",[s("li",[t._v("crond：定时任务守护进程")]),t._v(" "),s("li",[t._v("httpd：http 服务守护进程")]),t._v(" "),s("li",[t._v("sshd：终端守护进程")]),t._v(" "),s("li",[t._v("mysqld：mysql 守护进程")])]),t._v(" "),s("h3",{attrs:{id:"_7-2-进程的标记"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_7-2-进程的标记"}},[t._v("#")]),t._v(" 7.2 进程的标记")]),t._v(" "),s("h5",{attrs:{id:"进程id"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#进程id"}},[t._v("#")]),t._v(" [进程ID]")]),t._v(" "),s("p",[t._v("进程 ID 是进程的唯一标记，表现为一个非负整数。")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://tva1.sinaimg.cn/large/008i3skNly1gt7bf6i7ghj31nq0bu79g.jpg",alt:"image-20210108091839899"}})]),t._v(" "),s("h5",{attrs:{id:"进程的状态标记"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#进程的状态标记"}},[t._v("#")]),t._v(" [进程的状态标记]")]),t._v(" "),s("img",{staticStyle:{zoom:"33%"},attrs:{src:"https://tva1.sinaimg.cn/large/008i3skNly1gt7bf8tgprj31di0b4q5z.jpg",alt:"image-20210108092122480"}}),t._v(" "),s("h3",{attrs:{id:"_7-3-显示系统执行的进程-ps"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_7-3-显示系统执行的进程-ps"}},[t._v("#")]),t._v(" 7.3 显示系统执行的进程 —— ps")]),t._v(" "),s("p",[t._v("ps 显示的信息选项")]),t._v(" "),s("ul",[s("li",[t._v("PID：进程标识号")]),t._v(" "),s("li",[t._v("TTY：终端机号")]),t._v(" "),s("li",[t._v("TIME：此进程所耗CPU时间")]),t._v(" "),s("li",[t._v("CMD：正在执行的命令或进程名")])]),t._v(" "),s("p",[t._v("ps 工具标识进程的 5 种状态：")]),t._v(" "),s("ul",[s("li",[t._v("D：不可中断")]),t._v(" "),s("li",[t._v("R：运行")]),t._v(" "),s("li",[t._v("S：中断")]),t._v(" "),s("li",[t._v("T：停止")]),t._v(" "),s("li",[t._v("Z：僵死")]),t._v(" "),s("li",[t._v("W：无驻留页")]),t._v(" "),s("li",[t._v("<：高优先级进程")]),t._v(" "),s("li",[t._v("N：低优先级进程")]),t._v(" "),s("li",[t._v("L：内存锁页")]),t._v(" "),s("li",[t._v("+：位于后台进程组")])]),t._v(" "),s("p",[s("img",{attrs:{src:"https://tva1.sinaimg.cn/large/008i3skNly1gt7bf7wdkkj60jr07375202.jpg",alt:"image-20201010164827068"}})]),t._v(" "),s("h5",{attrs:{id:"ps-a"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ps-a"}},[t._v("#")]),t._v(" ps -a")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("显示当前终端的所有进程信息。")]),t._v(" "),s("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://tva1.sinaimg.cn/large/008i3skNly1gt7bf5jx8yj30x8038glx.jpg",alt:"image-20200908095919569"}})])]),t._v(" "),s("h5",{attrs:{id:"ps-u"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ps-u"}},[t._v("#")]),t._v(" ps -u")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("以用户的格式显示进程信息。")]),t._v(" "),s("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://tva1.sinaimg.cn/large/008i3skNly1gt7bffedyqj312q04a75w.jpg",alt:"image-20200908095941248"}})])]),t._v(" "),s("h5",{attrs:{id:"ps-x"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ps-x"}},[t._v("#")]),t._v(" ps -x")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("显示后台进程运行的参数。")]),t._v(" "),s("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://tva1.sinaimg.cn/large/008i3skNly1gt7bfei5evj313y0gy46g.jpg",alt:"image-20200908100005954"}})])]),t._v(" "),s("p",[s("font",{attrs:{color:"Red"}},[t._v("△一般使用的参数是  ps -aux")])],1),t._v(" "),s("p",[s("img",{attrs:{src:"https://tva1.sinaimg.cn/large/008i3skNly1gt7bf63kigj31ic0iijyz.jpg",alt:"image-20200908100305403"}})]),t._v(" "),s("h5",{attrs:{id:"查看是否存在某个进程-ps-aux-grep-xxxx"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#查看是否存在某个进程-ps-aux-grep-xxxx"}},[t._v("#")]),t._v(" 查看是否存在某个进程 ps -aux | grep xxxx")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://tva1.sinaimg.cn/large/008i3skNly1gt7bfg9q39j310003hwg4.jpg",alt:"image-20201118155537007"}})]),t._v(" "),s("h5",{attrs:{id:"以全格式显示进程-ps-ef"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#以全格式显示进程-ps-ef"}},[t._v("#")]),t._v(" 以全格式显示进程 ps -ef")]),t._v(" "),s("p",[t._v("ps -ef 是以全格式显示进程，包括父进程")]),t._v(" "),s("p",[t._v("- e：显示所有进程")]),t._v(" "),s("p",[t._v("- f：全格式")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://tva1.sinaimg.cn/large/008i3skNly1gt7bfbjn1ej30zy06kmz8.jpg",alt:"image-20201118155733033"}})]),t._v(" "),s("p",[s("font",{attrs:{color:"pink"}},[t._v("PS：0号代表没有父进程。")])],1),t._v(" "),s("ul",[s("li",[t._v("C：CPU 用于计算执行优先级的因子。数值越大，表明进程是 CPU 密集型运算，执行优先级会降低；数值越小，表明进程是 I/O 密集型运算，执行优先级会提高。")]),t._v(" "),s("li",[t._v("STIME：进程启动的时间。")]),t._v(" "),s("li",[t._v("PPID：父进程ID")])]),t._v(" "),s("h5",{attrs:{id:"查看进程树-ps-ef-forest"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#查看进程树-ps-ef-forest"}},[t._v("#")]),t._v(" 查看进程树 ps -ef --forest")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://tva1.sinaimg.cn/large/008i3skNly1gt7bfd1id3j31pm0bkjz9.jpg",alt:"image-20210108092824037"}})]),t._v(" "),s("h5",{attrs:{id:"排序-ps-aux-sort-p-字段"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#排序-ps-aux-sort-p-字段"}},[t._v("#")]),t._v(" 排序 ps -aux --sort=-p[字段]")]),t._v(" "),s("p",[t._v("如按照 CPU 使用率进行排序：ps -aux --sort=-pcpu")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://tva1.sinaimg.cn/large/008i3skNly1gt7bf7gncij31ps0da48k.jpg",alt:"image-20210108093150394"}})]),t._v(" "),s("h3",{attrs:{id:"_7-4-看出进程状态-top"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_7-4-看出进程状态-top"}},[t._v("#")]),t._v(" 7.4 看出进程状态 —— top")]),t._v(" "),s("img",{staticStyle:{zoom:"40%"},attrs:{src:"https://tva1.sinaimg.cn/large/008i3skNly1gt7bfaadb7j31da0iuajx.jpg",alt:"image-20210108093353751"}}),t._v(" "),s("h3",{attrs:{id:"_7-5-终止某个进程-kill"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_7-5-终止某个进程-kill"}},[t._v("#")]),t._v(" 7.5 终止某个进程 —— kill")]),t._v(" "),s("h5",{attrs:{id:"基本语法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#基本语法"}},[t._v("#")]),t._v(" 基本语法")]),t._v(" "),s("p",[t._v("kill [选项] "),s("strong",[t._v("进程号")]),t._v("（功能描述:通过进程号杀死进程）")]),t._v(" "),s("p",[t._v("killall "),s("strong",[t._v("进程名称")]),t._v("（功能描述:通过进程名称杀死进程，也支持通配符，这在系统因负载过大而变 得很慢时很有用）")]),t._v(" "),s("h5",{attrs:{id:"常用选项"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#常用选项"}},[t._v("#")]),t._v(" 常用选项")]),t._v(" "),s("p",[t._v("- 9：表示强迫进程立即停止")]),t._v(" "),s("h3",{attrs:{id:"_7-6-查看进程树-pstree"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_7-6-查看进程树-pstree"}},[t._v("#")]),t._v(" 7.6 查看进程树 —— pstree")]),t._v(" "),s("p",[t._v("- p：显示进程的 PID")]),t._v(" "),s("p",[t._v("-u：显示进程所属的用户")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://tva1.sinaimg.cn/large/008i3skNly1gt7bfap2k0j30u407ojt6.jpg",alt:"image-20201118162046264"}})]),t._v(" "),s("div",{staticClass:"language-markdown extra-class"},[s("pre",{pre:!0,attrs:{class:"language-markdown"}},[s("code",[s("span",{pre:!0,attrs:{class:"token title important"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("#")]),t._v(" centos7 需要自行安装 tree")]),t._v("\nyum tree\n")])])]),s("h3",{attrs:{id:"_7-7-实践"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_7-7-实践"}},[t._v("#")]),t._v(" 7.7 实践")]),t._v(" "),s("h5",{attrs:{id:"_1-踢掉某个非法登录用户"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-踢掉某个非法登录用户"}},[t._v("#")]),t._v(" [1] 踢掉某个非法登录用户")]),t._v(" "),s("p",[t._v("先用 "),s("code",[t._v("ps -aux | grep sshd")]),t._v(" 查看有哪些用户已经登录：")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://tva1.sinaimg.cn/large/008i3skNly1gt7bfb2uzzj30qu03mgn4.jpg",alt:"image-20201118160931388"}})]),t._v(" "),s("p",[t._v("然后 kill 掉 hedon：")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://tva1.sinaimg.cn/large/008i3skNly1gt7bfc0w95j30b900owed.jpg",alt:"image-20201118161046895"}})]),t._v(" "),s("p",[t._v("这样 hedon 就被 kill 了：")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://tva1.sinaimg.cn/large/008i3skNly1gt7bfchulbj30lo026glv.jpg",alt:"image-20201118161110684"}})]),t._v(" "),s("h5",{attrs:{id:"_2-终止远程登录服务-sshd-在适当时候再次重启-sshd-服务"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-终止远程登录服务-sshd-在适当时候再次重启-sshd-服务"}},[t._v("#")]),t._v(" [2] 终止远程登录服务 sshd, 在适当时候再次重启 sshd 服务")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://tva1.sinaimg.cn/large/008i3skNly1gt7bfgr5mwj30rc03mjsr.jpg",alt:"image-20201118161132546"}})]),t._v(" "),s("p",[t._v("直接 kill 掉 1373 进程号就可以了。")]),t._v(" "),s("h5",{attrs:{id:"_3-终止多个-gedit-编辑器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-终止多个-gedit-编辑器"}},[t._v("#")]),t._v(" [3] 终止多个 gedit 编辑器")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("killall")]),t._v(" gedit   "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#通过进程名称来 kill，一次性 kill 多个")]),t._v("\n")])])]),s("h5",{attrs:{id:"_4-强制杀掉一个终端"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-强制杀掉一个终端"}},[t._v("#")]),t._v(" [4] 强制杀掉一个终端")]),t._v(" "),s("p",[t._v("终端名称：bash")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://tva1.sinaimg.cn/large/008i3skNly1gt7bfdfdp4j31o20tj7a0.jpg",alt:"image-20201118161723950"}})]),t._v(" "),s("p",[t._v("这个时候会发现 kill 不掉，因为它会认为这是一个比较重要的进程，忽略掉了 kill 指令。")]),t._v(" "),s("p",[t._v("这个时候我们需要用 -9 来强制停止。")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("kill")]),t._v(" -9 "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("7884")]),t._v("\n")])])]),s("h2",{attrs:{id:"_8-进程调度"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_8-进程调度"}},[t._v("#")]),t._v(" 8. 进程调度")]),t._v(" "),s("blockquote",[s("p",[t._v("进程调度是指计算机通过决策决定哪个就绪进程可以获得 CPU 使用权。")])]),t._v(" "),s("p",[t._v("两个步骤：")]),t._v(" "),s("ul",[s("li",[t._v("收拾包袱：保留旧进程的运行信息，请出旧进程。")]),t._v(" "),s("li",[t._v("新人入驻：选择新进程，准备运行环境并分配 CPU")])]),t._v(" "),s("h3",{attrs:{id:"_8-1-三种机制"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_8-1-三种机制"}},[t._v("#")]),t._v(" 8.1 三种机制")]),t._v(" "),s("h5",{attrs:{id:"就绪队列的排队机制"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#就绪队列的排队机制"}},[t._v("#")]),t._v(" [就绪队列的排队机制]")]),t._v(" "),s("p",[t._v("将就绪进程按照一定的方式排成队列，以便调度程序可以最快找到就绪进程。")]),t._v(" "),s("img",{staticStyle:{zoom:"33%"},attrs:{src:"https://tva1.sinaimg.cn/large/008i3skNly1gt7bf4oq3hj31eu0biabl.jpg",alt:"image-20210108094401423"}}),t._v(" "),s("h5",{attrs:{id:"选择运行进程的委派机制"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#选择运行进程的委派机制"}},[t._v("#")]),t._v(" [选择运行进程的委派机制]")]),t._v(" "),s("p",[t._v("调度程序以一定的策略选择就绪进程，将 CPU 资源分配给它。")]),t._v(" "),s("h5",{attrs:{id:"新老进程的上下文切换机制"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#新老进程的上下文切换机制"}},[t._v("#")]),t._v(" [新老进程的上下文切换机制]")]),t._v(" "),s("img",{staticStyle:{zoom:"33%"},attrs:{src:"https://tva1.sinaimg.cn/large/008i3skNly1gt7bfexfucj61gq0caaay02.jpg",alt:"image-20210108094517202"}}),t._v(" "),s("p",[t._v("保存当前进程的上下文信息，装入被委派执行进程的运行上下文。")]),t._v(" "),s("h3",{attrs:{id:"_8-2-调度方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_8-2-调度方法"}},[t._v("#")]),t._v(" 8.2 调度方法")]),t._v(" "),s("p",[t._v("见《作业管理》")]),t._v(" "),s("Vssue")],1)}),[],!1,null,null,null);a.default=r.exports}}]);
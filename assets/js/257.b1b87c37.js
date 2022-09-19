(window.webpackJsonp=window.webpackJsonp||[]).push([[257],{669:function(_,t,v){"use strict";v.r(t);var a=v(47),s=Object(a.a)({},(function(){var _=this,t=_.$createElement,v=_._self._c||t;return v("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[v("h1",{attrs:{id:"_3-进程管理"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-进程管理"}},[_._v("#")]),_._v(" 3. 进程管理")]),_._v(" "),v("blockquote",[v("p",[_._v("进程是 Linux 系统中基本的调度单位。")])]),_._v(" "),v("h2",{attrs:{id:"_3-1-理论部分"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-理论部分"}},[_._v("#")]),_._v(" 3.1 理论部分")]),_._v(" "),v("h3",{attrs:{id:"_3-1-1-三个概念"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-1-三个概念"}},[_._v("#")]),_._v(" 3.1.1 三个概念")]),_._v(" "),v("ul",[v("li",[v("p",[_._v("程序")]),_._v(" "),v("p",[_._v("程序是为了完成某种任务而设计的软件，是存储在磁盘上包含可执行的机器指令和数据的静态实体。")])]),_._v(" "),v("li",[v("p",[_._v("进程")]),_._v(" "),v("p",[_._v("进程是一个程序一次执行的过程，在操作系统中执行特定的任务，是一个随执行过程不断变化的实体。")])]),_._v(" "),v("li",[v("p",[_._v("作业")]),_._v(" "),v("p",[_._v("作业是用户向计算机系统提交一项工作的基本单位，是用户在一次事物处理或计算过程中要求计算机所做工作的总和。")])])]),_._v(" "),v("h3",{attrs:{id:"_3-1-2-进程两种执行状态"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-2-进程两种执行状态"}},[_._v("#")]),_._v(" 3.1.2 进程两种执行状态")]),_._v(" "),v("p",[_._v("进程存在于系统的内存之中，是操作系统可感知、可控制的动态实体。每个进程分为内核态和用户态两种级别。")]),_._v(" "),v("ul",[v("li",[v("p",[_._v("内核态")]),_._v(" "),v("p",[_._v("又称系统态，它具有较高的特权，能执行所有的机器指令，包括由操作系统执行的特权指令，能访问所有的寄存器和存储区域，能直接控制所有的系统资源。Linux在执行内核程序时处于内核态。")])]),_._v(" "),v("li",[v("p",[_._v("用户态")]),_._v(" "),v("p",[_._v("进程的普通执行状态，在用户态下进程具有较低的特权，只能执行规定的机器指令，禁止执行特权指令。进程在用户态下只能访问进程分配的存储空间，在用户态下进程不能与系统硬件相互作用，不能访问系统资源。")])])]),_._v(" "),v("p",[_._v("在I386结构下，内核级的特权级为0，用户态的特权级为3。")]),_._v(" "),v("h3",{attrs:{id:"_3-1-3-进程在内存中的三部分数据"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-3-进程在内存中的三部分数据"}},[_._v("#")]),_._v(" 3.1.3 进程在内存中的三部分数据")]),_._v(" "),v("p",[_._v("Linux 下一个进程在内存里有三部分的数据：")]),_._v(" "),v("ul",[v("li",[v("p",[_._v("代码段")]),_._v(" "),v("p",[_._v("存放了程序代码的数据，假如机器中有数个进程运行相同的一个程序，那么它们就可以使用相同的代码段。")])]),_._v(" "),v("li",[v("p",[_._v("堆栈段")]),_._v(" "),v("p",[_._v("存放的就是子程序的返回地址、子程序的参数以及程序的局部变量。")])]),_._v(" "),v("li",[v("p",[_._v("数据段")]),_._v(" "),v("p",[_._v("存放程序的全局变量，常数以及动态数据分配的数据空间（比如用 malloc 之类的函数取得的空间）。")])])]),_._v(" "),v("p",[v("font",{attrs:{color:"ORANGE"}},[_._v("系统如果同时运行数个相同的程序，它们之间就不能使用同一个堆栈段和数据段。")])],1),_._v(" "),v("h3",{attrs:{id:"_3-1-4-进程的组成"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-4-进程的组成"}},[_._v("#")]),_._v(" 3.1.4 进程的组成")]),_._v(" "),v("p",[_._v("存放在磁盘上的可执行文件的代码和数据的集合称为可执行映像。当一个可执行映像被装入系统时，它就形成了一个进程。Linux进程由三部分组成：正文段、用户数据段和系统数据段。")]),_._v(" "),v("ul",[v("li",[v("p",[_._v("正文段")]),_._v(" "),v("p",[_._v("存放了程序代码的数据，机器中数个进程运行相同的一个程序，那么他们就可以共享这个正文段，正文段具有"),v("font",{attrs:{color:"Red"}},[_._v("只读")]),_._v("属性。")],1)]),_._v(" "),v("li",[v("p",[_._v("用户数据段")]),_._v(" "),v("p",[_._v("进程在运行过程中处理数据的集合，它是进程直接进行操作的所有数据，以及进程使用的进程堆栈。")])]),_._v(" "),v("li",[v("p",[_._v("系统数据段")]),_._v(" "),v("p",[_._v("存放进程的控制信息，即进程控制块，存放程序的运行环境，Linux 中进程控制块是名字为 "),v("code",[_._v("task_struct")]),_._v(" 的数据结构，称为任务结构体。")])])]),_._v(" "),v("h3",{attrs:{id:"_3-1-5-task-struct"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-5-task-struct"}},[_._v("#")]),_._v(" 3.1.5 task_struct")]),_._v(" "),v("p",[_._v("Linux中任务结构体是进程存在的唯一标志，其中容纳了一个进程的所有控制信息。")]),_._v(" "),v("p",[_._v("Linux的进程控制块用任务结构体 task_struct 描述，Linux在 内核空间专门开辟了一个指针数组 task，该数组的每一个元素是一个指向任务结构体的指针，task 数组又称为 task 向量。")]),_._v(" "),v("p",[_._v("在 Linux2.4.0 中每个 task_struct 结构占1680字节。")]),_._v(" "),v("p",[_._v("Centos 可以在 "),v("code",[_._v("/usr/src/kernels/3.10.0-1127.el7.x86_64/include/linux")]),_._v(" 中的 "),v("code",[_._v("sched.h")]),_._v(" 文件中查看：")]),_._v(" "),v("p",[v("img",{attrs:{src:"https://tva1.sinaimg.cn/large/007S8ZIlgy1gjkb7vmf9sj30oo0h8abs.jpg",alt:"image-20201010161823403"}})]),_._v(" "),v("h3",{attrs:{id:"_3-1-6-用户空间和系统空间"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-6-用户空间和系统空间"}},[_._v("#")]),_._v(" 3.1.6 用户空间和系统空间")]),_._v(" "),v("p",[_._v("系统为每一个进程分配一个独立的虚拟地址空间，进程的虚拟地址空间被分作两个部分，"),v("strong",[_._v("用户空间")]),_._v("和"),v("strong",[_._v("系统空间")]),_._v("。用户进程本身的程序和数据（可执行映像）被映射到用户空间中。内核被映射到进程的系统空间中。")]),_._v(" "),v("p",[_._v("系统空间只允许在具有较高特权的内核态下访问，进程运行在特权较低的用户态下时，不允许直接访问系统空间。")]),_._v(" "),v("p",[_._v("Linux中进程只能通过系统调用（system call）转换为内核态后，才能访问系统空间，一个进程在运行过程中，总是在两种执行状态之间不断的转换。")]),_._v(" "),v("h3",{attrs:{id:"_3-1-7-三种类型的进程"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-7-三种类型的进程"}},[_._v("#")]),_._v(" 3.1.7 三种类型的进程")]),_._v(" "),v("ul",[v("li",[v("p",[_._v("交互进程")]),_._v(" "),v("p",[_._v("由一个 shell 启动的进程，交互进程既可以在前台运行，也可以在后台运行。")])]),_._v(" "),v("li",[v("p",[_._v("批处理进程")]),_._v(" "),v("p",[_._v("这种进程和终端没有联系，是一个进程序列。")])]),_._v(" "),v("li",[v("p",[_._v("守护进程")]),_._v(" "),v("p",[_._v("Linux 系统启动时创建的进程，并在后台运行。它不需要用户输入就能运行而且提供某种服务，不是对整个系统就是对某个用户程序提供服务。")])])]),_._v(" "),v("h3",{attrs:{id:"_3-1-8-守护进程"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-8-守护进程"}},[_._v("#")]),_._v(" 3.1.8 守护进程")]),_._v(" "),v("p",[_._v("Linux 系统的大多数服务器就是通过守护进程实现的。常见的守护进程包括系统日志进程 "),v("code",[_._v("syslogd")]),_._v("、 web 服务器 "),v("code",[_._v("httpd")]),_._v("、邮件服务器 "),v("code",[_._v("sendmail")]),_._v(" 和数据库服务器 "),v("code",[_._v("mysqld")]),_._v(" 等。")]),_._v(" "),v("p",[_._v("守护进程一般在系统启动时开始运行，除非强行终止，否则直到系统关机都保持运行。守护进程经常以超级用户（root）权限运行，因为它们要使用特殊的端口（1-1024）或访问某些特殊的资源。")]),_._v(" "),v("p",[_._v("一个守护进程的父进程是 "),v("code",[_._v("init")]),_._v(" 进程，因为它真正的父进程在 fork 出子进程后就先于子进程 exit 退出了，所以它是一个由 init 继承的"),v("code",[_._v("孤儿进程")]),_._v("。守护进程是非交互式程序，没有控制终端，所以任何输出，无论是向标准输出设备 stdout 还是标准出错设备 stderr 的输出都需要特殊处理。")]),_._v(" "),v("p",[_._v("守护进程的名称通常以d结尾，比如 sshd、xinetd、crond 等。")]),_._v(" "),v("h3",{attrs:{id:"_3-1-9-进程四要素"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-9-进程四要素"}},[_._v("#")]),_._v(" 3.1.9 进程四要素")]),_._v(" "),v("ul",[v("li",[v("p",[_._v("程序")])]),_._v(" "),v("li",[v("p",[_._v("PCB")]),_._v(" "),v("p",[_._v("进程创建时内核为其分配的一个核心数据结构，进程自身不能直接存取。")])]),_._v(" "),v("li",[v("p",[_._v("地址空间")])]),_._v(" "),v("li",[v("p",[_._v("系统堆栈空间")]),_._v(" "),v("p",[_._v("进程运行在核心态时使用的堆栈，和 PCB 连在一起，共 8KB，其中 PCB 约占 1000字节，系统堆栈空间约占 7200 字节。2.2 内核中 Linux 进程个数有最大值限制（4092）。但 2.4 以后，系统中的进程个数受限于系统的物理内存数，即限定所有进程的 PCB 及系统堆栈（8K）占用的空间≤1/2的物理内存总和。")]),_._v(" "),v("p",[v("code",[_._v("例 64M 内存：进程 ≤64M/2/8K=4K")])])])]),_._v(" "),v("p",[v("font",{attrs:{color:"orange"}},[_._v("系统中的最大进程数由系统的物理内存大小决定。可用 "),v("code",[_._v("ulimit -a")]),_._v(" 来查询：")])],1),_._v(" "),v("p",[v("img",{attrs:{src:"https://tva1.sinaimg.cn/large/007S8ZIlgy1gjkasshfcej30ju08mjs1.jpg",alt:"image-20201010160353033"}})]),_._v(" "),v("h3",{attrs:{id:"_3-1-10-pcb"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-10-pcb"}},[_._v("#")]),_._v(" 3.1.10 PCB")]),_._v(" "),v("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://tva1.sinaimg.cn/large/007S8ZIlgy1gjkaxi0ff8j309n04zaaa.jpg",alt:"image-20201010160825026"}}),_._v(" "),v("ul",[v("li",[_._v("进程描述信息：唯一地确定进程\n"),v("ul",[v("li",[_._v("进程号")]),_._v(" "),v("li",[_._v("用户和组标识")]),_._v(" "),v("li",[_._v("连接信息")])])]),_._v(" "),v("li",[_._v("进程控制信息\n"),v("ul",[v("li",[_._v("进程当前状态")]),_._v(" "),v("li",[_._v("调度信息")]),_._v(" "),v("li",[_._v("计时信息")]),_._v(" "),v("li",[_._v("通信信息")])])]),_._v(" "),v("li",[_._v("进程资源信息")]),_._v(" "),v("li",[_._v("CPU 现场信息")])]),_._v(" "),v("h3",{attrs:{id:"_3-1-11-进程的状态-state"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-11-进程的状态-state"}},[_._v("#")]),_._v(" 3.1.11 进程的状态 —— state")]),_._v(" "),v("p",[_._v("task_struct 中的 "),v("code",[_._v("state")]),_._v(" 项表示进程当前的状态，进程的状态值在执行过程中会根据环境来改。")]),_._v(" "),v("p",[_._v("Linux 2.2.x版本进程共有6中状态包括：运行状态、可中断等待状态、不可中断等待状态、僵死状态、暂停状态和交换状态。在2.4.0版本中取消了交换状态，加入独占状态。")]),_._v(" "),v("ul",[v("li",[v("p",[_._v("可运行状态")]),_._v(" "),v("p",[_._v("进程处于运行或者就绪状态，只要得到 CPU 就可以立即投入运行，可运行状态进程组成队列 "),v("code",[_._v("RUN_QUEUE")]),_._v("。")])]),_._v(" "),v("li",[v("p",[_._v("等待状态")]),_._v(" "),v("p",[_._v("进程正在等待某个事件或者等待某种资源的状态。Linux 进程有两种等待状态：可中断等待状态和不可中断等待状态。可中断等待进程可以被信号中断，不可中断等待进程任何情况下都不可中断。")])]),_._v(" "),v("li",[v("p",[_._v("可中断等待状态")]),_._v(" "),v("p",[_._v("系统不会调度该进程执行。当系统产生一个中断或者释放进程正在等待的资源，或者进程收到一个信号，都可以唤醒进程转换到可运行状态。")])]),_._v(" "),v("li",[v("p",[_._v("不可中断等待状态")]),_._v(" "),v("p",[_._v("处于不可中断状态的进程只有被使用 "),v("code",[_._v("wake_up()")]),_._v(" 函数明确显示的唤醒才能转换到可运行的就绪状态。")])]),_._v(" "),v("li",[v("p",[_._v("暂停状态")]),_._v(" "),v("p",[_._v("进程暂时停止运行，接受某种处理。通常是通过接收一个信号，如 SIGSTOP、SIGTSTP、SIGTTIN 或 SIGTTOU 而暂停运行。处于暂停状态的进程可以向其发送 "),v("code",[_._v("SIGCOUNT")]),_._v(" 信号让进程转换到可运行状态。")])]),_._v(" "),v("li",[v("p",[_._v("僵死状态")]),_._v(" "),v("p",[_._v("当进程已停止运行，但是其父进程还没有询问其状态时，该进程处于僵死状态，表示进程结束但是尚未消亡的一种状态。通常由于某些原因被终止的进程，但是 task 数组中仍然保留 task_struct 结构。它像一个已经死亡的进程。")])]),_._v(" "),v("li",[v("p",[_._v("交换状态")]),_._v(" "),v("p",[_._v("处于交换状态的进程正在执行内外存交换工作，在2.2.X版的内核中基本不使用这个状态，2.4.x中没有这种状态。")])]),_._v(" "),v("li",[v("p",[_._v("独占状态")]),_._v(" "),v("p",[_._v("也是等待状态的一种，处于独占状态的进程位于等待队列中，当等待的事件发生，只有处于这种状态的进程被唤醒，其它可中断等待和不可中断等待进程继续等待。Linux2.4 引入独占状态，如果事件发生，只唤醒独占状态的那一个进程，提高 Apache 这类 Web 应用的效率，使得 Linux 更适合服务器。")])])]),_._v(" "),v("p",[v("font",{attrs:{color:"orange"}},[_._v("后面的 "),v("code",[_._v("ps")]),_._v(" 命令可以查看系统中所有进程的状态及其他的信息。")])],1),_._v(" "),v("h3",{attrs:{id:"_3-1-12-进程的标志-flags"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-12-进程的标志-flags"}},[_._v("#")]),_._v(" 3.1.12 进程的标志 —— flags")]),_._v(" "),v("p",[_._v("task_struct 中的 "),v("code",[_._v("flags")]),_._v(" 项表示进程的标志，进程标志含义包括：")]),_._v(" "),v("p",[v("img",{attrs:{src:"https://tva1.sinaimg.cn/large/007S8ZIlgy1gjkc46f3iyj30i2093q4m.jpg",alt:"image-20201010164926241"}})]),_._v(" "),v("h3",{attrs:{id:"_3-1-13-进程的调度策略-policy"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-13-进程的调度策略-policy"}},[_._v("#")]),_._v(" 3.1.13 进程的调度策略 —— policy")]),_._v(" "),v("p",[_._v("可以通过系统调用 "),v("code",[_._v("sys_sched_setscheduler()")]),_._v("  更改 "),v("code",[_._v("(kernel/sched.c)")]),_._v("。")]),_._v(" "),v("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://tva1.sinaimg.cn/large/007S8ZIlly1gjoke8w9g1j315c06otah.jpg",alt:"image-20201014083809556"}}),_._v(" "),v("h3",{attrs:{id:"_3-1-14-进程的优先级-priority、rt-priority、counter"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-14-进程的优先级-priority、rt-priority、counter"}},[_._v("#")]),_._v(" 3.1.14 进程的优先级 —— priority、rt_priority、counter")]),_._v(" "),v("p",[_._v("其值给出了进程每次获取CPU后，可使用的时间。优先级可通过系统调用 "),v("code",[_._v("sys_setpriority()")]),_._v(" 改变 "),v("code",[_._v("(kernel/sys.c)")]),_._v("。")]),_._v(" "),v("p",[v("code",[_._v("rt_priority")]),_._v(" 给出实时进程的优先级，"),v("code",[_._v("rt_priority+1000")]),_._v(" 给出进程每次获取 CPU 后，可使用的时间。")]),_._v(" "),v("p",[v("code",[_._v("counter")]),_._v(" 在轮转法调度时，表示进程当前还可以运行多久，在进程开始运行时被赋予 "),v("code",[_._v("priority")]),_._v(" 的值，以后每隔一个 "),v("code",[_._v("tick")]),_._v(" 递减1，见到 0 时引起新一轮调度。重新调度将从 "),v("code",[_._v("run-queue")]),_._v(" 队列选出 counter 值最大的就绪进程获得 CPU，因此 counter 起到了进程动态优先级的作用。")]),_._v(" "),v("h3",{attrs:{id:"_3-1-15-进程队列指针-next-task、-prev-task"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-15-进程队列指针-next-task、-prev-task"}},[_._v("#")]),_._v(" 3.1.15 进程队列指针 *next_task、*prev_task")]),_._v(" "),v("p",[_._v("所有进程（以PCB的形式）组成一个双向链表。"),v("code",[_._v("next_task")]),_._v(" 和 "),v("code",[_._v("prev_task")]),_._v(" 就是链表的前后向指针。链表的头和尾都是 "),v("code",[_._v("init_task")]),_._v("（即0号进程）。通过宏 "),v("code",[_._v("for_each_task")]),_._v(" 可以很方便的搜索所有进程：")]),_._v(" "),v("div",{staticClass:"language-shell extra-class"},[v("pre",{pre:!0,attrs:{class:"language-shell"}},[v("code",[v("span",{pre:!0,attrs:{class:"token comment"}},[_._v("#include/linux/sched.h")]),_._v("\n"),v("span",{pre:!0,attrs:{class:"token comment"}},[_._v("#define for_each_task(p) \\")]),_._v("\n"),v("span",{pre:!0,attrs:{class:"token keyword"}},[_._v("for")]),_._v(" "),v("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v("(")]),_._v("p "),v("span",{pre:!0,attrs:{class:"token operator"}},[_._v("=")]),_._v(" "),v("span",{pre:!0,attrs:{class:"token operator"}},[_._v("&")]),_._v("init_task "),v("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v(";")]),_._v(" "),v("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v("(")]),_._v("p "),v("span",{pre:!0,attrs:{class:"token operator"}},[_._v("=")]),_._v(" p-"),v("span",{pre:!0,attrs:{class:"token operator"}},[_._v(">")]),_._v("next_task"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v(")")]),_._v(" "),v("span",{pre:!0,attrs:{class:"token operator"}},[_._v("!=")]),_._v(" "),v("span",{pre:!0,attrs:{class:"token operator"}},[_._v("&")]),_._v("init_task "),v("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v(";")]),_._v(" "),v("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v(")")]),_._v("\n")])])]),v("h3",{attrs:{id:"_3-1-16-进程标志信息-pid、ppid"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-16-进程标志信息-pid、ppid"}},[_._v("#")]),_._v(" 3.1.16 进程标志信息 —— pid、ppid")]),_._v(" "),v("p",[v("code",[_._v("pid")]),_._v("（Process ID）是进程标识号，"),v("code",[_._v("ppid")]),_._v("（Parent Process ID）是进程的父进程标识号。")]),_._v(" "),v("p",[_._v("一个进程创建新进程称为创建子进程（child process）。相反，创建子进程的进程称为父进程。")]),_._v(" "),v("p",[_._v("所有进程追溯其祖先进程最终都会落到1号进程身上，这个进程叫做 "),v("code",[_._v("init")]),_._v(" 进程。")]),_._v(" "),v("p",[_._v("init进程永远不会被终止，所以系统总是可以确信它的存在，必要时可以以它为参照。")]),_._v(" "),v("p",[_._v("如果某些情况下，某个进程在它衍生的全部子进程结束之前被终止，那些失去了父进程的子进程就都会以 "),v("code",[_._v("init")]),_._v(" 进程作为它的父进程。")]),_._v(" "),v("p",[v("img",{attrs:{src:"https://tva1.sinaimg.cn/large/007S8ZIlly1gjokpeawxgj30i0069q3b.jpg",alt:"image-20201014084853245"}})]),_._v(" "),v("h3",{attrs:{id:"_3-1-17-进程控制-创建原语"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-17-进程控制-创建原语"}},[_._v("#")]),_._v(" 3.1.17 进程控制 —— 创建原语")]),_._v(" "),v("p",[_._v("Unix标准的复制进程的系统调用时fork（即分叉），但是 Linux，BSD 等操作系统并不止实现这一个，确切的说 linux 实现了三个，"),v("code",[_._v("fork")]),_._v(", "),v("code",[_._v("vfork")]),_._v(", "),v("code",[_._v("clone")]),_._v("（确切说vfork创造出来的是轻量级进程，也叫线程，是共享资源的进程）")]),_._v(" "),v("ul",[v("li",[v("p",[_._v("fork")]),_._v(" "),v("p",[_._v("fork 创造的子进程是父进程的完整副本，复制了父亲进程的资源，包括内存的内容 task_struct 内容。")]),_._v(" "),v("p",[v("code",[_._v("fork")]),_._v(" 函数启动一个新的进程。对于父进程，fork 函数返回了子程序的进程号，而对于子程序，fork 函数则返回零。对父进程而言，它的进程号是由比它更低层的系统调用赋予的，而对于子进程而言，它的进程号即是 fork 函数对父进程的返回值。")])]),_._v(" "),v("li",[v("p",[_._v("vfork")]),_._v(" "),v("p",[_._v("vfork 创建的子进程与父进程共享数据段,而且由 vfork() 创建的子进程将"),v("strong",[_._v("先")]),_._v("于父进程运行")])]),_._v(" "),v("li",[v("p",[_._v("clone")]),_._v(" "),v("p",[_._v("Linux上创建线程一般使用的是 pthread 库。实际上 linux 也给我们提供了创建线程的系统调用，就是 clone。")])])]),_._v(" "),v("blockquote",[v("p",[_._v("进程控制还有撤销原语、阻塞原语和唤醒原语。")])]),_._v(" "),v("h3",{attrs:{id:"_3-1-18-进程通信-信号"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-18-进程通信-信号"}},[_._v("#")]),_._v(" 3.1.18 进程通信 —— 信号")]),_._v(" "),v("p",[_._v("信号(signal)属于Linux系统的低级通信，主要用于在进程之间传递控制信号，可用来实现进程互斥和同步问题。")]),_._v(" "),v("p",[_._v("用 "),v("code",[_._v("kiil-l")]),_._v(" 可以查询系统已定义的信号：")]),_._v(" "),v("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://tva1.sinaimg.cn/large/0081Kckwly1gk3kngk4o0j313u0ea0tu.jpg",alt:"image-20201027081026809"}}),_._v(" "),v("p",[_._v("当进程接收到一个信号时，将转去执行信号处理程序。对信号的"),v("strong",[_._v("处理")]),_._v("方式有三种，通过系统调用 "),v("code",[_._v("signal(sig，func)")]),_._v(" 来设置 ：")]),_._v(" "),v("ul",[v("li",[_._v("func＝1时：忽略信号，但SIGSTOP和SIGKILL不能忽略")]),_._v(" "),v("li",[_._v("func＝0时：缺省处理，一般是终止进程，也可以停止进程或恢复进程运行")]),_._v(" "),v("li",[_._v("func为其他整数值时：自定义函数处理")])]),_._v(" "),v("p",[_._v("使用系统调用 "),v("code",[_._v("kill（pid，sig）")]),v("strong",[_._v("发送信号")]),_._v("。pid参数除了可以取进程标识号之外，还可以取下列一些特殊值：")]),_._v(" "),v("ul",[v("li",[_._v("0：把信号发送给与发送进程同组的所有进程，也包括发送进程自己")]),_._v(" "),v("li",[_._v("-1且发送进程的有效用户标识符不是超级用户：把信号发送给其实际用户标识符与发送进程的有效用户标识符相同的所有进程，也包括发送进程本身在内")]),_._v(" "),v("li",[_._v("-1且发送进程的有效用户标识符为超级用户：把信号发送给除了一些特殊系统进程之外的所有进程")]),_._v(" "),v("li",[_._v("非-1的负数：把信号发送给组号为 pid 绝对值的进程组中的所有进程")])]),_._v(" "),v("p",[_._v("task_struct 中有一个 "),v("code",[_._v("signal")]),_._v(" 域记录进程"),v("strong",[_._v("接收")]),_._v("到的信号类型，共32位：")]),_._v(" "),v("ul",[v("li",[_._v("当某位置为1时，表示收到了某类信号。Linux不提供处理多个同类信号的方式。即进程无法区分它是收到了1个还是4个SIGCONT信号。")]),_._v(" "),v("li",[_._v("信号并非一产生就立刻处理，而是等到进程再次运行时才处理。")])]),_._v(" "),v("h3",{attrs:{id:"_3-1-19-进程通信-管道"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-19-进程通信-管道"}},[_._v("#")]),_._v(" 3.1.19 进程通信 —— 管道")]),_._v(" "),v("p",[_._v("管道(pipe)包括无名管道和有名管道，通过"),v("strong",[_._v("文件系统")]),_._v("实现。")]),_._v(" "),v("p",[_._v("管道是一种特殊的文件类型。管道按先进先出的方式传递信息。读进程从管道的一端读取信息，写进程从管道的另一端写信息。")]),_._v(" "),v("p",[v("strong",[_._v("无名管道")]),_._v("是用系统调用 "),v("code",[_._v("pipe()")]),_._v(" 建立的无名文件，用该系统调用所返回的文件描述符来标识该文件。只有调用pipe的进程及其子孙进程才能利用该管道文件进行通信。")]),_._v(" "),v("p",[v("strong",[_._v("有名管道")]),_._v("是利用 "),v("code",[_._v("mknod")]),_._v(" 系统调用建立的，是可以在文件系统中长期存在的具有路径名的文件，其他进程可以知道有名管道的存在并能利用路径名来访问该文件。对有名管道的访问方式象访问其他文件一样，都需用 "),v("code",[_._v("open")]),_._v(" 系统调用去打开它。")]),_._v(" "),v("p",[_._v("使用管道进行父子进程间通信的步骤：")]),_._v(" "),v("ul",[v("li",[v("p",[_._v("创建管道:父进程调用 "),v("code",[_._v("pipe()")]),_._v(" 函数创建一个管道")])]),_._v(" "),v("li",[v("p",[_._v("此时，管道的读端和写端都在一个进程之中，这种管道是没有多大用的。")])]),_._v(" "),v("li",[v("p",[_._v("父进程通过 "),v("code",[_._v("fork()")]),_._v(" 函数创建一子进程")])]),_._v(" "),v("li",[v("p",[_._v("子进程会继承父进程所创建的管道，这时，父子进程中管道的文件描述符对应关系如图所示")]),_._v(" "),v("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://tva1.sinaimg.cn/large/0081Kckwly1gk3lald4pyj312u0k6dmf.jpg",alt:"image-20201027083243266"}}),_._v(" "),v("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://tva1.sinaimg.cn/large/0081Kckwly1gk3lbd1rdlj313y0k4gul.jpg",alt:"image-20201027083327349"}})]),_._v(" "),v("li",[v("p",[_._v("确定管道的传输方向：在父、子进程中根据需要的传输方向关闭无关的读端或写端文件描述符")])]),_._v(" "),v("li",[v("p",[_._v("通信：在写进程中调用 "),v("code",[_._v("write()")]),_._v(" 函数，在读进程中调用 "),v("code",[_._v("read()")]),_._v("函数")])]),_._v(" "),v("li",[v("p",[_._v("关闭管道：调用 "),v("code",[_._v("close()")]),_._v(" 关闭管道相关的文件描述符。")])])]),_._v(" "),v("h3",{attrs:{id:"_3-1-20-进程通信-套接字"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-20-进程通信-套接字"}},[_._v("#")]),_._v(" 3.1.20 进程通信 —— 套接字")]),_._v(" "),v("p",[_._v("套接字是用来通过网络实现运行于不同计算机上的进程之间通信的机制。它可以实现数据的双向规模传递，是整个网络通信的基础。具体的原理和实现与网络协议等有关。")]),_._v(" "),v("hr"),_._v(" "),v("h2",{attrs:{id:"_3-2-实操部分"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-实操部分"}},[_._v("#")]),_._v(" 3.2 实操部分")]),_._v(" "),v("h3",{attrs:{id:"_3-2-1-显示系统执行的进程-ps"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-1-显示系统执行的进程-ps"}},[_._v("#")]),_._v(" 3.2.1 显示系统执行的进程 —— ps")]),_._v(" "),v("p",[_._v("ps 显示的信息选项")]),_._v(" "),v("ul",[v("li",[_._v("PID：进程标识号")]),_._v(" "),v("li",[_._v("TTY：终端机号")]),_._v(" "),v("li",[_._v("TIME：此进程所耗CPU时间")]),_._v(" "),v("li",[_._v("CMD：正在执行的命令或进程名")])]),_._v(" "),v("p",[_._v("ps 工具标识进程的 5 种状态：")]),_._v(" "),v("ul",[v("li",[_._v("D：不可中断")]),_._v(" "),v("li",[_._v("R：运行")]),_._v(" "),v("li",[_._v("S：中断")]),_._v(" "),v("li",[_._v("T：停止")]),_._v(" "),v("li",[_._v("Z：僵死")]),_._v(" "),v("li",[_._v("W：无驻留页")]),_._v(" "),v("li",[_._v("<：高优先级进程")]),_._v(" "),v("li",[_._v("N：低优先级进程")]),_._v(" "),v("li",[_._v("L：内存锁页")]),_._v(" "),v("li",[_._v("+：位于后台进程组")])]),_._v(" "),v("p",[v("img",{attrs:{src:"https://tva1.sinaimg.cn/large/007S8ZIlgy1gjkc35hhowj30jr073my7.jpg",alt:"image-20201010164827068"}})]),_._v(" "),v("h4",{attrs:{id:"_3-2-1-1-ps-a"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-1-1-ps-a"}},[_._v("#")]),_._v(" 3.2.1.1 ps -a")]),_._v(" "),v("ul",[v("li",[v("p",[_._v("显示当前终端的所有进程信息。")]),_._v(" "),v("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://tva1.sinaimg.cn/large/007S8ZIlly1gij0flcajzj30x8038748.jpg",alt:"image-20200908095919569"}})])]),_._v(" "),v("h4",{attrs:{id:"_3-2-1-2-ps-u"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-1-2-ps-u"}},[_._v("#")]),_._v(" 3.2.1.2 ps -u")]),_._v(" "),v("ul",[v("li",[v("p",[_._v("以用户的格式显示进程信息。")]),_._v(" "),v("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://tva1.sinaimg.cn/large/007S8ZIlly1gij0fypb3sj312q04awen.jpg",alt:"image-20200908095941248"}})])]),_._v(" "),v("h4",{attrs:{id:"_3-2-1-3-ps-x"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-1-3-ps-x"}},[_._v("#")]),_._v(" 3.2.1.3 ps -x")]),_._v(" "),v("ul",[v("li",[v("p",[_._v("显示后台进程运行的参数。")]),_._v(" "),v("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://tva1.sinaimg.cn/large/007S8ZIlly1gij0ge7jdgj313y0gy400.jpg",alt:"image-20200908100005954"}})])]),_._v(" "),v("p",[v("font",{attrs:{color:"Red"}},[_._v("△一般使用的参数是  ps -aux")])],1),_._v(" "),v("p",[v("img",{attrs:{src:"https://tva1.sinaimg.cn/large/007S8ZIlly1gij0jnrp47j31ic0iihdt.jpg",alt:"image-20200908100305403"}})]),_._v(" "),v("h3",{attrs:{id:"_3-2-2-查看是否存在某个进程-ps-aux-grep-xxxx"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-2-查看是否存在某个进程-ps-aux-grep-xxxx"}},[_._v("#")]),_._v(" 3.2.2 查看是否存在某个进程 —— ps -aux | grep xxxx")]),_._v(" "),v("p",[v("img",{attrs:{src:"https://tva1.sinaimg.cn/large/0081Kckwgy1gktdq8oxypj310003hq67.jpg",alt:"image-20201118155537007"}})]),_._v(" "),v("h3",{attrs:{id:"_3-2-3-以全格式显示进程-ps-ef"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-3-以全格式显示进程-ps-ef"}},[_._v("#")]),_._v(" 3.2.3 以全格式显示进程 —— ps -ef")]),_._v(" "),v("p",[_._v("ps -ef 是以全格式显示进程，包括父进程")]),_._v(" "),v("p",[_._v("- e：显示所有进程")]),_._v(" "),v("p",[_._v("- f：全格式")]),_._v(" "),v("p",[v("img",{attrs:{src:"https://tva1.sinaimg.cn/large/0081Kckwgy1gktds7dzhfj30zy06kgq6.jpg",alt:"image-20201118155733033"}})]),_._v(" "),v("p",[v("font",{attrs:{color:"pink"}},[_._v("PS：0号代表没有父进程。")])],1),_._v(" "),v("ul",[v("li",[_._v("C：CPU 用于计算执行优先级的因子。数值越大，表明进程是 CPU 密集型运算，执行优先级会降低；数值越小，表明进程是 I/O 密集型运算，执行优先级会提高。")]),_._v(" "),v("li",[_._v("STIME：进程启动的时间。")]),_._v(" "),v("li",[_._v("PPID：父进程ID")])]),_._v(" "),v("h3",{attrs:{id:"_3-2-4-终止某个进程-kill"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-4-终止某个进程-kill"}},[_._v("#")]),_._v(" 3.2.4 终止某个进程 —— kill")]),_._v(" "),v("h4",{attrs:{id:"_3-2-4-1-基本语法"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-4-1-基本语法"}},[_._v("#")]),_._v(" 3.2.4.1 基本语法")]),_._v(" "),v("p",[_._v("kill [选项] "),v("strong",[_._v("进程号")]),_._v("（功能描述:通过进程号杀死进程）")]),_._v(" "),v("p",[_._v("killall "),v("strong",[_._v("进程名称")]),_._v("（功能描述:通过进程名称杀死进程，也支持通配符，这在系统因负载过大而变 得很慢时很有用）")]),_._v(" "),v("h4",{attrs:{id:"_3-2-4-2-常用选项"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-4-2-常用选项"}},[_._v("#")]),_._v(" 3.2.4.2 常用选项")]),_._v(" "),v("p",[_._v("- 9：表示强迫进程立即停止")]),_._v(" "),v("h4",{attrs:{id:"_3-2-4-3-实践"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-4-3-实践"}},[_._v("#")]),_._v(" 3.2.4.3 实践")]),_._v(" "),v("h5",{attrs:{id:"_1-踢掉某个非法登录用户"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-踢掉某个非法登录用户"}},[_._v("#")]),_._v(" [1] 踢掉某个非法登录用户")]),_._v(" "),v("p",[_._v("先用 "),v("code",[_._v("ps -aux | grep sshd")]),_._v(" 查看有哪些用户已经登录：")]),_._v(" "),v("p",[v("img",{attrs:{src:"https://tva1.sinaimg.cn/large/0081Kckwgy1gkte4nstimj30qu03mjua.jpg",alt:"image-20201118160931388"}})]),_._v(" "),v("p",[_._v("然后 kill 掉 hedon：")]),_._v(" "),v("p",[v("img",{attrs:{src:"https://tva1.sinaimg.cn/large/0081Kckwgy1gkte5z08gmj30b900odfv.jpg",alt:"image-20201118161046895"}})]),_._v(" "),v("p",[_._v("这样 hedon 就被 kill 了：")]),_._v(" "),v("p",[v("img",{attrs:{src:"https://tva1.sinaimg.cn/large/0081Kckwgy1gkte6dxy1hj30lo026js7.jpg",alt:"image-20201118161110684"}})]),_._v(" "),v("h5",{attrs:{id:"_2-终止远程登录服务-sshd-在适当时候再次重启-sshd-服务"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-终止远程登录服务-sshd-在适当时候再次重启-sshd-服务"}},[_._v("#")]),_._v(" [2] 终止远程登录服务 sshd, 在适当时候再次重启 sshd 服务")]),_._v(" "),v("p",[v("img",{attrs:{src:"https://tva1.sinaimg.cn/large/0081Kckwgy1gkte6rmc3vj30rc03macz.jpg",alt:"image-20201118161132546"}})]),_._v(" "),v("p",[_._v("直接 kill 掉 1373 进程号就可以了。")]),_._v(" "),v("h5",{attrs:{id:"_3-终止多个-gedit-编辑器"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-终止多个-gedit-编辑器"}},[_._v("#")]),_._v(" [3] 终止多个 gedit 编辑器")]),_._v(" "),v("div",{staticClass:"language-shell extra-class"},[v("pre",{pre:!0,attrs:{class:"language-shell"}},[v("code",[v("span",{pre:!0,attrs:{class:"token function"}},[_._v("killall")]),_._v(" gedit   "),v("span",{pre:!0,attrs:{class:"token comment"}},[_._v("#通过进程名称来 kill，一次性 kill 多个")]),_._v("\n")])])]),v("h5",{attrs:{id:"_4-强制杀掉一个终端"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_4-强制杀掉一个终端"}},[_._v("#")]),_._v(" [4] 强制杀掉一个终端")]),_._v(" "),v("p",[_._v("终端名称：bash")]),_._v(" "),v("p",[v("img",{attrs:{src:"https://tva1.sinaimg.cn/large/0081Kckwgy1gktecuw0fxj31o20tj4lw.jpg",alt:"image-20201118161723950"}})]),_._v(" "),v("p",[_._v("这个时候会发现 kill 不掉，因为它会认为这是一个比较重要的进程，忽略掉了 kill 指令。")]),_._v(" "),v("p",[_._v("这个时候我们需要用 -9 来强制停止。")]),_._v(" "),v("div",{staticClass:"language-shell extra-class"},[v("pre",{pre:!0,attrs:{class:"language-shell"}},[v("code",[v("span",{pre:!0,attrs:{class:"token function"}},[_._v("kill")]),_._v(" -9 "),v("span",{pre:!0,attrs:{class:"token number"}},[_._v("7884")]),_._v("\n")])])]),v("h3",{attrs:{id:"_3-2-5-查看进程树-pstree"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-5-查看进程树-pstree"}},[_._v("#")]),_._v(" 3.2.5 查看进程树 —— pstree")]),_._v(" "),v("p",[_._v("- p：显示进程的 PID")]),_._v(" "),v("p",[_._v("-u：显示进程所属的用户")]),_._v(" "),v("p",[v("img",{attrs:{src:"https://tva1.sinaimg.cn/large/0081Kckwgy1gktegd9tiej30u407odk1.jpg",alt:"image-20201118162046264"}})]),_._v(" "),v("div",{staticClass:"language-markdown extra-class"},[v("pre",{pre:!0,attrs:{class:"language-markdown"}},[v("code",[v("span",{pre:!0,attrs:{class:"token title important"}},[v("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v("#")]),_._v(" centos7 需要自行安装 tree")]),_._v("\nyum tree\n")])])]),v("h3",{attrs:{id:"_3-2-6-服务管理"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-6-服务管理"}},[_._v("#")]),_._v(" 3.2.6 服务管理")]),_._v(" "),v("Vssue")],1)}),[],!1,null,null,null);t.default=s.exports}}]);
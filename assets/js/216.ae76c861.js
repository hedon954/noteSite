(window.webpackJsonp=window.webpackJsonp||[]).push([[216],{627:function(_,t,v){"use strict";v.r(t);var a=v(47),r=Object(a.a)({},(function(){var _=this,t=_.$createElement,v=_._self._c||t;return v("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[v("h1",{attrs:{id:"面试题丨操作系统"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#面试题丨操作系统"}},[_._v("#")]),_._v(" 面试题丨操作系统")]),_._v(" "),v("h2",{attrs:{id:"_1-程序、进程、线程、协程的区别"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-程序、进程、线程、协程的区别"}},[_._v("#")]),_._v(" 1. 程序、进程、线程、协程的区别")]),_._v(" "),v("h3",{attrs:{id:"程序"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#程序"}},[_._v("#")]),_._v(" 程序")]),_._v(" "),v("ul",[v("li",[_._v("一段代码。")])]),_._v(" "),v("h3",{attrs:{id:"进程"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#进程"}},[_._v("#")]),_._v(" 进程")]),_._v(" "),v("ul",[v("li",[_._v("一个运行起来的程序或者软件叫做进程。")]),_._v(" "),v("li",[_._v("进程是操作系统分配资源的基本单位。")])]),_._v(" "),v("h3",{attrs:{id:"线程"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#线程"}},[_._v("#")]),_._v(" 线程")]),_._v(" "),v("ul",[v("li",[_._v("线程是 CPU 调度的基本单位， 通过线程去执行进程中代码， 线程是执行代码的分支。")])]),_._v(" "),v("h3",{attrs:{id:"协程"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#协程"}},[_._v("#")]),_._v(" 协程")]),_._v(" "),v("ul",[v("li",[_._v("协程，又称微线程。")]),_._v(" "),v("li",[_._v("一种比线程更加轻量级的存在，协程不是被操作系统内核所管理，而完全是由程序所控制（也就是在用户态执行）。")]),_._v(" "),v("li",[_._v("子程序，或者称为函数，在所有语言中都是层级调用，比如A调用B，B在执行过程中又调用了C，C执行完毕返回，B执行完毕返回，最后是A执行完毕。所以子程序调用是通过栈实现的，一个线程就是执行一个子程序。子程序调用总是一个入口，一次返回，调用顺序是明确的。而协程的调用和子程序不同。")]),_._v(" "),v("li",[v("strong",[_._v("协程看上去也是子程序，但执行过程中，在子程序内部可中断，然后转而执行别的子程序，在适当的时候再返回来接着执行。")])]),_._v(" "),v("li",[_._v("协程延续同步编程习惯，但不同于多线程的是，协程并不会同时运行，它只是在需要阻塞的地方，用Yield()切换出去执行其他协程，然后当阻塞结束后，用Resume()回到刚刚切换的位置继续往下执行。这相当于可以把回调函数的内容，接到Yield()调用的后面。")]),_._v(" "),v("li",[_._v("最大的优势就是协程极高的执行效率。因为子程序切换不是线程切换，而是由程序自身控制，因此，没有线程切换的开销，和多线程比，线程数量越多，协程的性能优势就越明显。")]),_._v(" "),v("li",[_._v("第二大优势就是不需要多线程的锁机制，因为只有一个线程，也不存在同时写变量冲突，在协程中控制共享资源不加锁，只需要判断状态就好了，所以执行效率比多线程高很多。")]),_._v(" "),v("li",[_._v("因为协程是"),v("strong",[_._v("一个线程执行")]),_._v("，那怎么利用多核 CPU 呢？最简单的方法是多进程+协程，既充分利用多核，又充分发挥协程的高效率，可获得极高的性能。")]),_._v(" "),v("li",[_._v("协程并不是取代线程，而且抽象于线程之上，线程是被分割的 CPU 资源，协程是组织好的代码流程，协程需要线程来承载运行，线程是协程的资源，但协程不会直接使用线程，协程直接利用的是执行器(Interceptor)，执行器可以关联任意线程或线程池, 可以使当前线程，UI线程，或新建新程。")])]),_._v(" "),v("blockquote",[v("p",[_._v("本来是开多个线程，然后互相等，现在是只在一个线程内，直接由用户控制，什么时候跳什么时候回由我决定。")])]),_._v(" "),v("h2",{attrs:{id:"_2-什么是操作系统"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-什么是操作系统"}},[_._v("#")]),_._v(" 2. 什么是操作系统？")]),_._v(" "),v("p",[_._v("操作系统是运行在计算机上最重要的一种"),v("code",[_._v("软件")]),_._v("，它管理计算机的资源和进程以及所有的硬件和软件。它为计算机硬件和软件提供了一种中间层。")]),_._v(" "),v("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://tva1.sinaimg.cn/large/008eGmZEgy1govxfghv8uj316e0n277d.jpg",alt:"os8-0.png"}}),_._v(" "),v("p",[_._v("通常情况下，计算机上会运行着许多应用程序，它们都需要对内存和 CPU 进行交互，操作系统的目的就是为了保证这些访问和交互能够准确无误的进行。")]),_._v(" "),v("h2",{attrs:{id:"_3-解释一下操作系统的主要目的是什么"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-解释一下操作系统的主要目的是什么"}},[_._v("#")]),_._v(" 3. 解释一下操作系统的主要目的是什么")]),_._v(" "),v("p",[_._v("操作系统是一种软件，它的主要目的有三种")]),_._v(" "),v("ol",[v("li",[_._v("管理计算机资源，这些资源包括 CPU、内存、磁盘驱动器、打印机等。")]),_._v(" "),v("li",[_._v("提供一种图形界面，就像我们前面描述的那样，它提供了用户和计算机之间的桥梁。")]),_._v(" "),v("li",[_._v("为其他软件提供服务，操作系统与软件进行交互，以便为其分配运行所需的任何必要资源。")])]),_._v(" "),v("h2",{attrs:{id:"_4-什么是按需分页"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_4-什么是按需分页"}},[_._v("#")]),_._v(" 4. 什么是按需分页")]),_._v(" "),v("p",[_._v("在操作系统中，进程是以页为单位加载到内存中的，按需分页是一种虚拟内存的管理方式。在使用请求分页的系统中，只有在尝试访问页面所在的磁盘并且该页面尚未在内存中时，也就发生了缺页异常，操作系统才会将磁盘页面复制到内存中。")]),_._v(" "),v("blockquote",[v("p",[_._v("局部性原理: CPU 访问存储器时，无论是存取指令还是存取数据，所访问的存储单元都趋于聚集在一个较小的连续区域中。")])]),_._v(" "),v("h2",{attrs:{id:"_5-多处理系统的优势"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_5-多处理系统的优势"}},[_._v("#")]),_._v(" 5. 多处理系统的优势")]),_._v(" "),v("p",[_._v("随着处理器的不断增加，我们的计算机系统由单机系统变为了多处理系统，多处理系统的吞吐量比较高，多处理系统拥有多个并行的处理器，这些处理器共享时钟、内存、总线、外围设备等。")]),_._v(" "),v("img",{staticStyle:{zoom:"33%"},attrs:{src:"https://tva1.sinaimg.cn/large/008eGmZEgy1govy1dr926j31560gadgn.jpg",alt:"os8-5.png"}}),_._v(" "),v("p",[_._v("多处理系统由于可以共享资源，因此可以开源节流，省钱。整个系统的可靠性也随之提高。")]),_._v(" "),v("h2",{attrs:{id:"_6-内核态和用户态"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_6-内核态和用户态"}},[_._v("#")]),_._v(" 6. 内核态和用户态")]),_._v(" "),v("h5",{attrs:{id:"_1-是什么"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-是什么"}},[_._v("#")]),_._v(" （1）是什么")]),_._v(" "),v("ol",[v("li",[_._v("管态又叫特权态，系统态或核心态。CPU 在管态下可以执行指令系统的全集。通常，操作系统在管态下运行。")]),_._v(" "),v("li",[_._v("目态又叫常态或用户态。机器处于目态时，程序只能执行非特权指令。")])]),_._v(" "),v("h5",{attrs:{id:"_2-特点"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-特点"}},[_._v("#")]),_._v(" （2）特点")]),_._v(" "),v("ol",[v("li",[_._v("用户态不能直接使用系统资源，也不能改变 CPU 的工作状态，并且只能访问这个用户程序自己的存储空间。")]),_._v(" "),v("li",[_._v("管态则该程序就可以访问计算机的任何资源，即它的资源访问权限不受限制。")])]),_._v(" "),v("h5",{attrs:{id:"_3-目的"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-目的"}},[_._v("#")]),_._v(" （3）目的")]),_._v(" "),v("p",[_._v("区分内核态和用户态两种操作方式的目的是为了"),v("strong",[_._v("保护操作系统程序")]),_._v("。")]),_._v(" "),v("p",[_._v("通常 CPU 执行两种不同性质的程序：一种是操作系统内核程序；另一种是用户自编程序或系统外层的应用程序。")]),_._v(" "),v("p",[_._v("对操作系统而言，这两种程序的作用不同，前者是后者的管理者，因此“管理程序”要执行一些特权指令，而“被管理程序”出于安全考虑不能执行这些指令。")]),_._v(" "),v("p",[_._v("所谓特权指令，是指计算机中不允许用户直接使用的指令，如I/O指令、 置中断指令，存取用于内存保护的寄存器、送程序状态字到程序状态字寄存器等指令。")]),_._v(" "),v("h5",{attrs:{id:"_4-切换"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_4-切换"}},[_._v("#")]),_._v(" （4）切换")]),_._v(" "),v("p",[_._v("用户态切换到内核态：")]),_._v(" "),v("ol",[v("li",[_._v("系统调用。这是用户态进程主动要求切换到内核态的一种方式，用户态进程通过系统调用申请使用操作系统提供的的服务程序完成工作。系统调用机制的核心还是使用了操作系统为用户特别开放的一个中断来实现。")]),_._v(" "),v("li",[_._v("异常。当 CPU 在执行用户态程序时，发生了某些事先不可知的异常，这时会触发由当前运行进程切换到处理此异常的内核相关程序中，也就转到了内核态，例如缺页异常。")]),_._v(" "),v("li",[_._v("I/O 设备的中断。当 I/O 设备完成用户请求操作后，会向 CPU 发出相应的中断信号，这时 CPU 会暂停执行下一条即将要执行的指令，转而去执行与中断信号对应的的处理程序，如果先前执行的指令是用户态下的程序，那么这个转换的过程自然也就发生了由用户态到内核态的切换。例如硬盘读写操作完成，系统会切换到硬盘读写的中断处理程序中执行后续的操作。")])]),_._v(" "),v("p",[_._v("其中系统调用可以认为是用户进程主动发起的，异常和外部设备中断则是被动的。")]),_._v(" "),v("h2",{attrs:{id:"_7-进程通信方式"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_7-进程通信方式"}},[_._v("#")]),_._v(" 7. 进程通信方式")]),_._v(" "),v("h3",{attrs:{id:"_1-管道"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-管道"}},[_._v("#")]),_._v(" ① 管道")]),_._v(" "),v("p",[_._v("管道，通常指"),v("strong",[_._v("无名管道")]),_._v("，是 UNIX 系统 IPC 最古老的形式。")]),_._v(" "),v("ol",[v("li",[v("p",[_._v("特点：")]),_._v(" "),v("p",[_._v("它是半双工的（即数据只能在一个方向上流动），具有固定的读端和写端。")]),_._v(" "),v("p",[v("strong",[_._v("它只能用于具有亲缘关系的进程之间的通信")]),_._v("（也是父子进程或者兄弟进程之间）。")]),_._v(" "),v("p",[_._v("它可以看成是一种特殊的文件，对于它的读写也可以使用普通的 read、write 等函数。但是它不是普通的文件，并不属于其他任何文件系统，并且"),v("strong",[_._v("只存在于内存")]),_._v("中。")]),_._v(" "),v("p",[_._v("管道分为 pipe（无名管道）和 fifo（命名管道）两种，除了建立、打开、删除的方式不同外，这两种管道几乎是一样的。他们都是通过内核缓冲区实现数据传输。")]),_._v(" "),v("p",[v("strong",[_._v("pipe")]),_._v(" 用于相关进程之间的通信，例如父进程和子进程，它通过 pipe() 系统调用来创建并打开，当最后一个使用它的进程关闭对他的引用时，pipe将自动撤销。")]),_._v(" "),v("p",[v("strong",[_._v("FIFO")]),_._v(" 即命名管道，有名管道也是半双工的通信方式，但是它允许无亲缘关系进程间的通信。")])]),_._v(" "),v("li",[v("p",[_._v("实质：")]),_._v(" "),v("p",[_._v("管道的实质是一个内核缓冲区，进程以先进先出的方式从缓冲区存取数据：管道一端的进程顺序地将进程数据写入缓冲区，另一端的进程则顺序地读取数据，该缓冲区可以看做一个循环队列，读和写的位置都是自动增加的，一个数据只能被读一次，读出以后再缓冲区都不复存在了。当缓冲区读空或者写满时，有一定的规则控制相应的读进程或写进程是否进入等待队列，当空的缓冲区有新数据写入或慢的缓冲区有数据读出时，就唤醒等待队列中的进程继续读写。")]),_._v(" "),v("p",[v("strong",[_._v("缺点")]),_._v("：")]),_._v(" "),v("ol",[v("li",[_._v("半双工，只能单向传输。")]),_._v(" "),v("li",[_._v("只能承载无格式字节流。")]),_._v(" "),v("li",[_._v("缓冲区大小受限。")])])])]),_._v(" "),v("p",[_._v("高级管道（popen）：将另一个程序当做一个新的进程在当前程序进程中启动，则它算是当前程序的子进程，这种方式我们成为高级管道方式。")]),_._v(" "),v("p",[_._v("有名管道 (named pipe) ： 有名管道也是半双工的通信方式，但是它允许无亲缘关系进程间的通信。")]),_._v(" "),v("h3",{attrs:{id:"_2-消息队列"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-消息队列"}},[_._v("#")]),_._v(" ② 消息队列")]),_._v(" "),v("p",[_._v("消息队列，就是一个消息的链表，是一系列保存在内核中消息的列表。用户进程可以向消息队列添加消息，也可以向消息队列读取消息。")]),_._v(" "),v("p",[v("strong",[_._v("优点：")])]),_._v(" "),v("ol",[v("li",[_._v("消息队列克服了信号传递信息少、管道只能承载无格式字节流以及缓冲区大小受限等缺点。")])]),_._v(" "),v("p",[v("strong",[_._v("缺点：")])]),_._v(" "),v("ol",[v("li",[_._v("与管道一样，每个数据块有一个最大长度的限制，")]),_._v(" "),v("li",[_._v("系统中所有队列所包含的全部数据块的总长度也有一个上限。")])]),_._v(" "),v("h3",{attrs:{id:"_3-共享内存"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-共享内存"}},[_._v("#")]),_._v(" ③ 共享内存")]),_._v(" "),v("p",[_._v("共享内存允许两个或多个进程共享一个给定的存储区，这一段存储区可以被两个或两个以上的进程映射至自身的地址空间中，一个进程写入共享内存的信息，可以被其他使用这个共享内存的进程，通过一个简单的内存读取操作读出，从而实现了进程间的通信。")]),_._v(" "),v("p",[_._v("采用共享内存进行通信的一个主要好处是"),v("strong",[_._v("效率高")]),_._v("，因为进程可以直接读写内存，而不需要任何数据的拷贝，对于像管道和消息队里等通信方式，则需要在内核和用户空间进行四次的数据拷贝：")]),_._v(" "),v("p",[_._v("1：服务器得到输入\n2：通过管道，消息队列写入数据，通常需要从进程拷贝到内核。\n3：客户从内核拷贝到进程\n4：然后再从进程中拷贝到输出文件")]),_._v(" "),v("p",[_._v("而共享内存则只拷贝两次")]),_._v(" "),v("ol",[v("li",[_._v("一次从输入文件到共享内存区")]),_._v(" "),v("li",[_._v("另一次从共享内存到输出文件。")])]),_._v(" "),v("p",[_._v("一般而言，进程之间在共享内存时，并不总是读写少量数据后就解除映射，有新的通信时在重新建立共享内存区域；而是保持共享区域，直到通信完毕为止，这样，数据内容一直保存在共享内存中，并没有写回文件。共享内存中的内容往往是在解除映射时才写回文件，因此，采用共享内存的通信方式效率非常高。")]),_._v(" "),v("img",{staticStyle:{zoom:"67%"},attrs:{src:"https://tva1.sinaimg.cn/large/008i3skNgy1gvdqnk2e18j60ae08e3yw02.jpg",alt:"在这里插入图片描述"}}),_._v(" "),v("p",[v("strong",[_._v("优点")])]),_._v(" "),v("ol",[v("li",[_._v("效率高。")])]),_._v(" "),v("p",[v("strong",[_._v("缺点")])]),_._v(" "),v("ol",[v("li",[_._v("需要做同步处理。")])]),_._v(" "),v("h3",{attrs:{id:"_4-信号量"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_4-信号量"}},[_._v("#")]),_._v(" ④ 信号量")]),_._v(" "),v("p",[_._v("它是一个计数器。信号量用于实现进程间的互斥与同步，而不是用于存储进程间通信数据。")]),_._v(" "),v("h3",{attrs:{id:"_5-信号"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_5-信号"}},[_._v("#")]),_._v(" ⑤ 信号")]),_._v(" "),v("p",[_._v("信号 ( sinal ) ： 信号是一种比较复杂的通信方式，用于通知接收进程某个事件已经发生。")]),_._v(" "),v("h3",{attrs:{id:"_6-socket"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_6-socket"}},[_._v("#")]),_._v(" ⑥ Socket")]),_._v(" "),v("p",[_._v("支持不同机器之前的进程通信。")]),_._v(" "),v("h2",{attrs:{id:"_8-一个线程占多大内存"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_8-一个线程占多大内存"}},[_._v("#")]),_._v(" 8. 一个线程占多大内存？")]),_._v(" "),v("p",[_._v("可以用 ulimit -s 查看，8M。")]),_._v(" "),v("h2",{attrs:{id:"_9-内存管理方式"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_9-内存管理方式"}},[_._v("#")]),_._v(" 9. 内存管理方式")]),_._v(" "),v("p",[_._v("① 分页式存储管理")]),_._v(" "),v("p",[_._v("分页是站在系统的角度，将进程分成多个页。")]),_._v(" "),v("p",[_._v("在分页系统中，允许将"),v("a",{attrs:{href:"https://baike.baidu.com/item/%E8%BF%9B%E7%A8%8B",target:"_blank",rel:"noopener noreferrer"}},[_._v("进程"),v("OutboundLink")],1),_._v("的各个页离散地存储在内存不同的物理块中，但系统应能保证进程的正确运行，即能在内存中找到每个"),v("a",{attrs:{href:"https://baike.baidu.com/item/%E9%A1%B5%E9%9D%A2",target:"_blank",rel:"noopener noreferrer"}},[_._v("页面"),v("OutboundLink")],1),_._v("所对应的物理块。")]),_._v(" "),v("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://tva1.sinaimg.cn/large/008eGmZEgy1gpelcpdyhpj30ow0ec0tf.jpg",alt:"img"}}),_._v(" "),v("p",[_._v("② 分段式存储管理")]),_._v(" "),v("p",[_._v("分段是站在用户程序的角度，可以根据程序的具体情况，分成若干段。")]),_._v(" "),v("p",[_._v("分段式存储管理系统中，则是为每个分段分配一个连续的分区。")]),_._v(" "),v("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://tva1.sinaimg.cn/large/008eGmZEly1gpeleume1sj30m20f1jsi.jpg",alt:"img"}}),_._v(" "),v("p",[_._v("③ 段页式存储管理")]),_._v(" "),v("p",[_._v("段页式存储管理方式即先将用户程序分成若干个段，再把每个段分成若干个页，并为每一个段赋予一个段名。图示出了一个作业的地址空间和地址结构。")]),_._v(" "),v("p",[_._v("该作业有三个段，页面大小为4 KB。在段页式系统中，其地址结构由段号、段内页号及页内地址三部分所组成，如下图所示。")]),_._v(" "),v("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://tva1.sinaimg.cn/large/008eGmZEly1gpel3cc5h6j30ow0bwt9m.jpg",alt:"img"}}),_._v(" "),v("p",[v("strong",[_._v("地址变换过程：")])]),_._v(" "),v("p",[_._v("在段页式系统中，为了便于实现地址变换，须配置一个段表"),v("a",{attrs:{href:"https://baike.baidu.com/item/%E5%AF%84%E5%AD%98%E5%99%A8",target:"_blank",rel:"noopener noreferrer"}},[_._v("寄存器"),v("OutboundLink")],1),_._v("，其中存放段表始址和段表长 TL。进行地址变换时，首先利用段号 S，将它与段表长 TL 进行比较。若 S<TL，表示未越界，于是利用段表始址和段号来求出该段所对应的段表项在段表中的位置，从中得到该段的"),v("a",{attrs:{href:"https://baike.baidu.com/item/%E9%A1%B5%E8%A1%A8",target:"_blank",rel:"noopener noreferrer"}},[_._v("页表"),v("OutboundLink")],1),_._v("始址，并利用"),v("a",{attrs:{href:"https://baike.baidu.com/item/%E9%80%BB%E8%BE%91%E5%9C%B0%E5%9D%80",target:"_blank",rel:"noopener noreferrer"}},[_._v("逻辑地址"),v("OutboundLink")],1),_._v("中的段内页号P来获得对应页的页表项位置，从中读出该页所在的"),v("a",{attrs:{href:"https://baike.baidu.com/item/%E7%89%A9%E7%90%86%E5%9D%97/12728827",target:"_blank",rel:"noopener noreferrer"}},[_._v("物理块"),v("OutboundLink")],1),_._v("号b，再利用块号b和页内地址来构成"),v("a",{attrs:{href:"https://baike.baidu.com/item/%E7%89%A9%E7%90%86%E5%9C%B0%E5%9D%80",target:"_blank",rel:"noopener noreferrer"}},[_._v("物理地址"),v("OutboundLink")],1),_._v("。右图示出了段页式系统中的地址变换机构。")]),_._v(" "),v("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://tva1.sinaimg.cn/large/008eGmZEly1gpel56ithaj30og0bqt9c.jpg",alt:"img"}}),_._v(" "),v("p",[_._v("在段页式系统中，为了获得一条指令或数据，须三次访问内存。第一次访问是访问内存中的段表，从中取得页表始址；第二次访问是访问内存中的页表，从中取出该页所在的物理块号，并将该块号与页内地址一起形成指令或数据的物理地址；第三次访问才是真正从第二次访问所得的地址中，取出指令或数据。")]),_._v(" "),v("p",[_._v("显然，这使访问"),v("a",{attrs:{href:"https://baike.baidu.com/item/%E5%86%85%E5%AD%98/103614",target:"_blank",rel:"noopener noreferrer"}},[_._v("内存"),v("OutboundLink")],1),_._v("的次数增加了近两倍。为了提高执行速度，在地址变换机构中增设一个高速缓冲"),v("a",{attrs:{href:"https://baike.baidu.com/item/%E5%AF%84%E5%AD%98%E5%99%A8",target:"_blank",rel:"noopener noreferrer"}},[_._v("寄存器"),v("OutboundLink")],1),_._v("。每次访问它时，都须同时利用段号和页号去检索"),v("a",{attrs:{href:"https://baike.baidu.com/item/%E9%AB%98%E9%80%9F%E7%BC%93%E5%AD%98",target:"_blank",rel:"noopener noreferrer"}},[_._v("高速缓存"),v("OutboundLink")],1),_._v("，若找到匹配的表项，便可从中得到相应页的物理块号，用来与页内地址一起形成"),v("a",{attrs:{href:"https://baike.baidu.com/item/%E7%89%A9%E7%90%86%E5%9C%B0%E5%9D%80",target:"_blank",rel:"noopener noreferrer"}},[_._v("物理地址"),v("OutboundLink")],1),_._v("；若未找到匹配表项，则仍须再三次访问内存。")]),_._v(" "),v("p",[v("strong",[_._v("优缺点")]),_._v("：")]),_._v(" "),v("table",[v("thead",[v("tr",[v("th"),_._v(" "),v("th",[_._v("优点")]),_._v(" "),v("th",[_._v("缺点")])])]),_._v(" "),v("tbody",[v("tr",[v("td",[_._v("分页")]),_._v(" "),v("td",[_._v("没有外碎片，每个内碎片不超过页的大小。")]),_._v(" "),v("td",[_._v("程序全部装入内存，要求有相应的硬件支持，如：地址变换机构，缺页中断的产生和选择淘汰页面等，增加了机器成本和系统开销。")])]),_._v(" "),v("tr",[v("td",[_._v("分段")]),_._v(" "),v("td",[_._v("可以分别编写和编译，可以针对不同类型的段采取不同的保护，可以按段为单位进行共享，包括通过动态链接进行代码共享。")]),_._v(" "),v("td",[_._v("会产生碎片。")])]),_._v(" "),v("tr",[v("td",[_._v("段页式")]),_._v(" "),v("td",[_._v("段页式管理是段式管理和页式管理相结合而成，具有两者的优点。")]),_._v(" "),v("td",[_._v("复杂性和开销增加，需要的硬件以及占用的内存也有所增加，使得执行速度下降。")])])])]),_._v(" "),v("h2",{attrs:{id:"_10-cpu-调度算法"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_10-cpu-调度算法"}},[_._v("#")]),_._v(" 10. CPU 调度算法")]),_._v(" "),v("p",[_._v("CPU 调度算法：")]),_._v(" "),v("ul",[v("li",[_._v("先到先优先")]),_._v(" "),v("li",[_._v("短作业优先")]),_._v(" "),v("li",[_._v("剩余最短时间优先")]),_._v(" "),v("li",[_._v("时间片轮转。")])]),_._v(" "),v("p",[_._v("线程调度：（获得 CPU 使用权）")]),_._v(" "),v("ol",[v("li",[v("p",[_._v("分时调度模式：是指让所有的线程轮流获得 CPU 的使用权，并且平均分配每个线程占用的 CPU 的时间片。")])]),_._v(" "),v("li",[v("p",[_._v("抢占式调度模式：JAVA 虚拟机采用抢占式调度模式，是指优先让可运行池中优先级高的线程占用 CPU，如果可运行池中的线程优先级相同，那就随机选择一个线程，使其占用 CPU。处于运行状态的线程会一直运行，直至它不得不放弃 CPU。")])])]),_._v(" "),v("h2",{attrs:{id:"_11-僵尸进程"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_11-僵尸进程"}},[_._v("#")]),_._v(" 11. 僵尸进程")]),_._v(" "),v("p",[_._v("在每个进程退出的时候，内核释放该进程所有的资源（包括打开的文件、占用的内存等），但是仍然为其保留一定的信息（包括进程号，退出状态，运行时间等），直到父进程通过外 wait/waitpid 来取时才释放。此时该进程处于僵死状态。")]),_._v(" "),v("h2",{attrs:{id:"_12-线程、进程上下文"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_12-线程、进程上下文"}},[_._v("#")]),_._v(" 12. 线程、进程上下文")]),_._v(" "),v("ul",[v("li",[_._v("进程调度，切换进程上下文，包括分配的内存，数据段，堆栈段等。")]),_._v(" "),v("li",[_._v("线程调度，切换线程上下文，主要切换堆栈（同个进程里的线程堆栈不同）和某一时间点 CPU 寄存器和程序计数器的内容。")])]),_._v(" "),v("Vssue")],1)}),[],!1,null,null,null);t.default=r.exports}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[169],{580:function(e,t,l){"use strict";l.r(t);var s=l(47),a=Object(s.a)({},(function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[l("h1",{attrs:{id:"四、io-复用"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#四、io-复用"}},[e._v("#")]),e._v(" 四、IO 复用")]),e._v(" "),l("h2",{attrs:{id:"_1-概念"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#_1-概念"}},[e._v("#")]),e._v(" 1. 概念")]),e._v(" "),l("p",[e._v("多个进程的 IO 可以注册到同一个管道上，这个管道会统一和内核进行交互。当管道中的某一个请求需要的数据准备好之后，进程再把对应的数据拷贝到用户空间中。")]),e._v(" "),l("p",[l("img",{attrs:{src:"https://hedonspace.oss-cn-beijing.aliyuncs.com/img2/008eGmZEly1gp8yyiwawnj30jq0addgl.jpg",alt:"图片"}})]),e._v(" "),l("p",[e._v("IO 多路转接是多了一个"),l("code",[e._v("select")]),e._v("函数，多个进程的 IO 可以注册到同一个"),l("code",[e._v("select")]),e._v("上，当用户进程调用该"),l("code",[e._v("select")]),e._v("，"),l("code",[e._v("select")]),e._v("会监听所有注册好的 IO，如果所有被监听的 IO 需要的数据都没有准备好时，"),l("code",[e._v("select")]),e._v("调用进程会阻塞。当任意一个 IO 所需的数据准备好之后，"),l("code",[e._v("select")]),e._v("调用就会返回，然后进程在通过"),l("code",[e._v("recvfrom")]),e._v("来进行数据拷贝。")]),e._v(" "),l("p",[e._v("**这里的 IO 复用模型，并没有向内核注册信号处理函数，所以，他并不是非阻塞的。**进程在发出"),l("code",[e._v("select")]),e._v("后，要等到"),l("code",[e._v("select")]),e._v("监听的所有 IO操作中至少有一个需要的数据准备好，才会有返回，并且也需要再次发送请求去进行文件的拷贝。")]),e._v(" "),l("div",{staticClass:"language-markdown extra-class"},[l("pre",{pre:!0,attrs:{class:"language-markdown"}},[l("code",[l("span",{pre:!0,attrs:{class:"token title important"}},[l("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("#")]),e._v(" 以上四种模型都是同步的")]),e._v("\n阻塞IO模型、非阻塞IO模型、IO复用模型和信号驱动IO模型都是同步的 IO 模型。\n原因是因为，无论以上哪种模型，真正的"),l("span",{pre:!0,attrs:{class:"token code keyword"}},[e._v("`数据拷贝过程`")]),e._v("，都是同步进行的。\n\n"),l("span",{pre:!0,attrs:{class:"token title important"}},[l("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("#")]),e._v(" 信号驱动难道不是异步的么？ ")]),e._v("\n信号驱动，内核是在数据准备好之后通知进程，然后进程再通过 recvfrom 操作进行数据拷贝。我们可以认为"),l("span",{pre:!0,attrs:{class:"token code keyword"}},[e._v("`数据准备阶段是异步`")]),e._v("的，但是，"),l("span",{pre:!0,attrs:{class:"token code keyword"}},[e._v("`数据拷贝操作是同步`")]),e._v("的。所以，整个 IO 过程也不能认为是异步的。\n\n烧水的报警器一响，整个烧水过程就完成了。水已经是开水了。 \n钓鱼的报警器一响，只能说明鱼儿已经咬钩了，但是还没有真正的钓上来。\n所以 ，使用带有报警器的水壶烧水，烧水过程是异步的。而使用带有报警器的鱼竿钓鱼，钓鱼的过程还是同步的。\n")])])]),l("h2",{attrs:{id:"_2-优点"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#_2-优点"}},[e._v("#")]),e._v(" 2. 优点")]),e._v(" "),l("ul",[l("li",[e._v("与传统的多线程/多进程模型比，I/O 多路复用的最大优势是系统开销小，系统不需要创建新的额外进程或者线程，也不需要维护这些进程和线程的运行，降底了系统的维护工作量，节省了系统资源。")]),e._v(" "),l("li",[e._v("专一进程解决多个进程 IO 的阻塞问题，性能好。")]),e._v(" "),l("li",[e._v("Reactor 模式。")])]),e._v(" "),l("h2",{attrs:{id:"_3-缺点"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#_3-缺点"}},[e._v("#")]),e._v(" 3. 缺点")]),e._v(" "),l("ul",[l("li",[e._v("实现、开发应用难度较大。")])]),e._v(" "),l("h2",{attrs:{id:"_4-适用场景"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#_4-适用场景"}},[e._v("#")]),e._v(" 4. 适用场景")]),e._v(" "),l("p",[e._v("适用高并发服务应用开发：一个进程（线程）响应多个请求：")]),e._v(" "),l("ol",[l("li",[e._v("当一个客户端需要同时处理多个文件描述符的输入输出时（即一般包含交互式输入和网络套接字），必须要用 I/O 才能获得正确效果。")]),e._v(" "),l("li",[e._v("当程序需要同时进行多个套接字的操作时。")]),e._v(" "),l("li",[e._v("当一个 TCP 服务器要同时处理预监听的网络连接套接字和已经连接好的套接字时。")]),e._v(" "),l("li",[e._v("当一个服务器同时使用 TCP 和 UDP 协议时")]),e._v(" "),l("li",[e._v("当一个服务器同时需要使用多种服务并且每种服务可能使用不同的协议时（比如端口监视守护进程 inetd）。")])]),e._v(" "),l("h2",{attrs:{id:"_5-三种方案"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#_5-三种方案"}},[e._v("#")]),e._v(" 5. 三种方案")]),e._v(" "),l("blockquote",[l("p",[e._v("参考：https://segmentfault.com/a/1190000003063859")])]),e._v(" "),l("p",[e._v("select，poll，epoll 都是 IO 多路复用的机制。IO 多路复用就是通过一种机制，一个进程可以监视多个描述符，一旦某个描述符就绪（一般是读就绪或者写就绪），能够通知程序进行相应的读写操作。但 select，poll，epoll 本质上都是同步 IO，因为他们都需要在读写事件就绪后自己负责进行读写，也就是说这个读写过程是阻塞的，而异步 IO 则无需自己负责进行读写，异步I/O的实现会负责把数据从内核拷贝到用户空间。")]),e._v(" "),l("h3",{attrs:{id:"_5-1-select"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#_5-1-select"}},[e._v("#")]),e._v(" 5.1 select")]),e._v(" "),l("div",{staticClass:"language-c++ extra-class"},[l("pre",{pre:!0,attrs:{class:"language-text"}},[l("code",[e._v("int select (int n, fd_set *readfds, fd_set *writefds, fd_set *exceptfds, struct timeval *timeout);\n")])])]),l("p",[e._v("select 函数监视的文件描述符分3类，分别是 writefds、readfds、和 exceptfds。调用后 select 函数会阻塞，直到有描述副就绪（有数据 可读、可写、或者有 except），或者超时（timeout 指定等待时间，如果立即返回设为 null 即可），函数返回。当 select 函数返回后，可以通过遍历 fdset，来找到就绪的描述符。")]),e._v(" "),l("p",[e._v("select 目前几乎在所有的平台上支持，其良好跨平台支持也是它的一个优点。select 的一个缺点在于单个进程能够监视的文件描述符的数量存在最大限制，在 Linux 上一般为 1024，可以通过修改宏定义甚至重新编译内核的方式提升这一限制，但是这样也会造成效率的降低。")]),e._v(" "),l("p",[e._v("注册 IO、阻塞扫描，监听的 IO 最大连接数不能多 FD_SIZE。")]),e._v(" "),l("h3",{attrs:{id:"_5-2-poll"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#_5-2-poll"}},[e._v("#")]),e._v(" 5.2 poll")]),e._v(" "),l("div",{staticClass:"language-c++ extra-class"},[l("pre",{pre:!0,attrs:{class:"language-text"}},[l("code",[e._v("int poll (struct pollfd *fds, unsigned int nfds, int timeout);\n")])])]),l("p",[e._v("不同与 select 使用三个位图来表示三个 fdset 的方式，poll 使用一个 pollfd 的指针实现。")]),e._v(" "),l("div",{staticClass:"language-c++ extra-class"},[l("pre",{pre:!0,attrs:{class:"language-text"}},[l("code",[e._v("struct pollfd {\n    int fd; \t\t\t /* file descriptor */\n    short events;  /* requested events to watch */\n    short revents; /* returned events witnessed */\n};\n")])])]),l("p",[e._v("pollfd 结构包含了要监视的 event 和发生的 event，不再使用 select “参数-值”传递的方式。同时，pollfd 并没有最大数量限制（但是数量过大后性能也是会下降）。 和 select 函数一样，poll 返回后，需要轮询 pollfd 来获取就绪的描述符。")]),e._v(" "),l("blockquote",[l("p",[e._v("从上面看，select 和 poll 都需要在返回后，"),l("code",[e._v("通过遍历文件描述符来获取已经就绪的socket")]),e._v("。事实上，同时连接的大量客户端在一时刻可能只有很少的处于就绪状态，因此随着监视的描述符数量的增长，其效率也会线性下降。")])]),e._v(" "),l("h3",{attrs:{id:"_5-3-epoll"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#_5-3-epoll"}},[e._v("#")]),e._v(" 5.3 epoll")]),e._v(" "),l("p",[e._v("epoll 是在 Linux 2.6 内核中提出的，是之前的 select 和 poll 的增强版本。")]),e._v(" "),l("p",[e._v("相对于 select 和 poll 来说，epoll更加灵活，没有描述符限制。")]),e._v(" "),l("p",[e._v("epoll 使用一个文件描述符管理多个描述符，将用户关系的文件描述符的事件存放到内核的一个事件表中，这样在用户空间和内核空间的copy 只需一次。")]),e._v(" "),l("h5",{attrs:{id:"_5-3-1-epoll-操作过程"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#_5-3-1-epoll-操作过程"}},[e._v("#")]),e._v(" 5.3.1 epoll 操作过程")]),e._v(" "),l("p",[e._v("epoll 的核心是 3 个 API，核心数据结构是：1个红黑树和1个链表")]),e._v(" "),l("p",[l("img",{attrs:{src:"https://hedonspace.oss-cn-beijing.aliyuncs.com/img2/008eGmZEgy1gpfm4s0cv6j30hs0adq33.jpg",alt:"img"}})]),e._v(" "),l("p",[e._v("epoll 操作过程需要三个接口，分别如下：")]),e._v(" "),l("div",{staticClass:"language-c++ extra-class"},[l("pre",{pre:!0,attrs:{class:"language-text"}},[l("code",[e._v("int epoll_create(int size)；//创建一个epoll的句柄，size用来告诉内核这个监听的数目一共有多大\nint epoll_ctl(int epfd, int op, int fd, struct epoll_event *event)；\nint epoll_wait(int epfd, struct epoll_event * events, int maxevents, int timeout);\n")])])]),l("p",[l("strong",[e._v("1. int epoll_create(int size);")])]),e._v(" "),l("p",[e._v("创建一个 epoll 的句柄，size 用来告诉内核这个监听的数目一共有多大，这个参数不同于 select() 中的第一个参数，给出最大监听的 fd+1的值，"),l("code",[e._v("参数 size 并不是限制了 epoll 所能监听的描述符最大个数，只是对内核初始分配内部数据结构的一个建议")]),e._v("。")]),e._v(" "),l("p",[e._v("当创建好 epoll 句柄后，它就会占用一个 fd 值，在 Linux 下如果查看 "),l("code",[e._v("/proc/进程id/fd/")]),e._v("，是能够看到这个 fd 的，所以在使用完 epoll后，必须调用 close() 关闭，否则可能导致 fd 被耗尽。")]),e._v(" "),l("p",[l("strong",[e._v("2. int epoll_ctl(int epfd, int op, int fd, struct epoll_event *event)；")])]),e._v(" "),l("p",[e._v("函数是对指定描述符 fd 执行 op 操作（在红黑树上面进行增删改）。")]),e._v(" "),l("ul",[l("li",[e._v("epfd：是 epoll_create() 的返回值。")]),e._v(" "),l("li",[e._v("op：表示 op 操作，用三个宏来表示：添加 EPOLL_CTL_ADD，删除 EPOLL_CTL_DEL，修改 EPOLL_CTL_MOD。分别添加、删除和修改对 fd 的监听事件。")]),e._v(" "),l("li",[e._v("fd：是需要监听的fd（文件描述符）")]),e._v(" "),l("li",[e._v("epoll_event：是告诉内核需要监听什么事，struct epoll_event结构如下：")])]),e._v(" "),l("div",{staticClass:"language-c++ extra-class"},[l("pre",{pre:!0,attrs:{class:"language-text"}},[l("code",[e._v("struct epoll_event {\n  __uint32_t events;  /* Epoll events */\n  epoll_data_t data;  /* User data variable */\n};\n\n//events可以是以下几个宏的集合：\nEPOLLIN ：表示对应的文件描述符可以读（包括对端SOCKET正常关闭）；\nEPOLLOUT：表示对应的文件描述符可以写；\nEPOLLPRI：表示对应的文件描述符有紧急的数据可读（这里应该表示有带外数据到来）；\nEPOLLERR：表示对应的文件描述符发生错误；\nEPOLLHUP：表示对应的文件描述符被挂断；\nEPOLLET： 将EPOLL设为边缘触发(Edge Triggered)模式，这是相对于水平触发(Level Triggered)来说的。\nEPOLLONESHOT：只监听一次事件，当监听完这次事件之后，如果还需要继续监听这个socket的话，需要再次把这个socket加入到EPOLL队列里\n")])])]),l("p",[l("strong",[e._v("3. int epoll_wait(int epfd, struct epoll_event * events, int maxevents, int timeout);")])]),e._v(" "),l("p",[e._v("等待事件的产生，执行成功时，返回已准备好的 I/O 文件描述符的个数，如果在等待的时间内没有准备好的 I/O，则返回0。如果发生错误，则返回-1。")]),e._v(" "),l("p",[e._v("类似于 select() 调用。参数 epfd 是用 epoll_create() 函数的返回值，参数 events 用来从内核得到事件的集合，maxevents 告诉内核这个events 有多大，这个 maxevents 的值不能大于创建 epoll_create() 时的 size，参数 timeout 是超时时间（毫秒，0会立即返回，-1将不确定，也有说法说是永久阻塞）。该函数返回需要处理的事件数目，如返回0表示已超时。")]),e._v(" "),l("h5",{attrs:{id:"_5-3-2-epoll-工作模式"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#_5-3-2-epoll-工作模式"}},[e._v("#")]),e._v(" 5.3.2 epoll 工作模式")]),e._v(" "),l("p",[e._v("epoll对文件描述符的操作有两种模式：**LT（level trigger） **和 "),l("strong",[e._v("ET（edge trigger）")]),e._v("。LT 模式是默认模式，LT 模式与 ET 模式的区别如下：")]),e._v(" "),l("p",[l("strong",[e._v("LT 模式")]),e._v("：")]),e._v(" "),l("ul",[l("li",[e._v("当 epoll_wait 检测到描述符事件发生并将此事件通知应用程序，"),l("code",[e._v("应用程序可以不立即处理该事件")]),e._v("。下次调用 epoll_wait() 时，会再次响应应用程序并通知此事件。")]),e._v(" "),l("li",[e._v("LT(level triggered) 是缺省的工作方式，并且同时支持 block 和 no-block socket。在这种做法中，内核告诉你一个文件描述符是否就绪了，然后你可以对这个就绪的 fd 进行IO操作。如果你不作任何操作，内核还是会继续通知你的。")])]),e._v(" "),l("p",[l("strong",[e._v("ET 模式")])]),e._v(" "),l("ul",[l("li",[l("p",[e._v("当 epoll_wait 检测到描述符事件发生并将此事件通知应用程序，"),l("code",[e._v("应用程序必须立即处理该事件")]),e._v("。如果不处理，下次调用epoll_wait 时，不会再次响应应用程序并通知此事件。")])]),e._v(" "),l("li",[l("p",[e._v("ET（edge-triggered）是高速工作方式，只支持 no-block socket。在这种模式下，当描述符从未就绪变为就绪时，内核通过 epoll 告诉你。然后它会假设你知道文件描述符已经就绪，并且不会再为那个文件描述符发送更多的就绪通知，直到你做了某些操作导致那个文件描述符不再为就绪状态了（比如，你在发送，接收或者接收请求，或者发送接收的数据少于一定量时导致了一个 EWOULDBLOCK 错误）。但是请注意，如果一直不对这个 fd 作 IO 操作（从而导致它再次变成未就绪），内核不会发送更多的通知（only once）。")])]),e._v(" "),l("li",[l("p",[e._v("ET模式在很大程度上减少了 epoll 事件被重复触发的次数，因此效率要比 LT 模式高。epoll 工作在 ET 模式的时候，必须使用非阻塞套接口，以避免由于一个文件句柄的阻塞读/阻塞写操作把处理多个文件描述符的任务饿死。")])])]),e._v(" "),l("h5",{attrs:{id:"_5-3-3-epoll-优点"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#_5-3-3-epoll-优点"}},[e._v("#")]),e._v(" 5.3.3 epoll 优点")]),e._v(" "),l("ol",[l("li",[e._v("监视的描述符数量不受限制，它所支持的 FD 上限是最大可以打开文件的数目，这个数字一般远大于 2048。举个例子，在1GB内存的机器上大约是 10 万左右，具体数目可以 cat /proc/sys/fs/file-max 察看，一般来说这个数目和系统内存关系很大。")]),e._v(" "),l("li",[e._v("select 的最大缺点就是进程打开的 fd 是有数量限制的。这对于连接数量比较大的服务器来说根本不能满足。虽然也可以选择多进程的解决方案（Apache就是这样实现的），不过虽然 Linux 上面创建进程的代价比较小，但仍旧是不可忽视的，加上进程间数据同步远比不上线程间同步的高效，所以也不是一种完美的方案。")]),e._v(" "),l("li",[e._v("IO 的效率不会随着监视 fd 的数量的增长而下降。epoll 不同于 select 和 poll 轮询的方式，而是通过每个 fd 定义的回调函数来实现的。只有就绪的 fd 才会执行回调函数。")]),e._v(" "),l("li",[e._v("如果没有大量的 idle -connection 或者 dead-connection，epoll 的效率并不会比 select/poll 高很多，但是当遇到大量的 idle- connection，就会发现 epoll 的效率大大高于 select/poll。")])]),e._v(" "),l("div",{staticClass:"language-markdown extra-class"},[l("pre",{pre:!0,attrs:{class:"language-markdown"}},[l("code",[l("span",{pre:!0,attrs:{class:"token title important"}},[l("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("#")]),e._v(" 总结")]),e._v("\n在 select/poll中，进程只有在调用一定的方法后，内核才对所有监视的文件描述符进行扫描，而 epoll 事先通过 epoll_ctl() 来注册一 个文件描述符，一旦基于某个文件描述符就绪时，内核会采用类似 callback 的回调机制，迅速激活这个文件描述符，当进程调用 epoll_wait() 时便得到通知。(此处去掉了遍历文件描述符，而是通过监听回调的的机制。这正是 epoll 的魅力所在。)\n")])])]),l("Vssue")],1)}),[],!1,null,null,null);t.default=a.exports}}]);
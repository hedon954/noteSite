(window.webpackJsonp=window.webpackJsonp||[]).push([[170],{580:function(t,a,_){"use strict";_.r(a);var v=_(47),s=Object(v.a)({},(function(){var t=this,a=t.$createElement,_=t._self._c||a;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"五、异步-io"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#五、异步-io"}},[t._v("#")]),t._v(" 五、异步 IO")]),t._v(" "),_("h2",{attrs:{id:"_1-概念"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-概念"}},[t._v("#")]),t._v(" 1. 概念")]),t._v(" "),_("p",[t._v("应用进程把 IO 请求传给内核后，完全由内核去操作文件拷贝。内核完成相关操作后，会发信号告诉应用进程本次 IO 已经完成。")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://hedonspace.oss-cn-beijing.aliyuncs.com/img2/008eGmZEly1gp8z4527b8j30qp0ds0u8.jpg",alt:"这里写图片描述"}})]),t._v(" "),_("p",[t._v("用户进程发起"),_("code",[t._v("aio_read")]),t._v("操作之后，给内核传递描述符、缓冲区指针、缓冲区大小等，告诉内核当整个操作完成时，如何通知进程，然后就立刻去做其他事情了。当内核收到"),_("code",[t._v("aio_read")]),t._v("后，会立刻返回，然后内核开始等待数据准备，数据准备好以后，直接把数据拷贝到用户控件，然后再通知进程本次 IO 已经完成。")]),t._v(" "),_("p",[t._v("在 Linux 中，通知的方式是 “信号”，分为三种情况：")]),t._v(" "),_("ol",[_("li",[t._v("如果这个进程正在用户态处理其他逻辑，那就强行打断，调用事先注册的信号处理函数，这个函数可以决定何时以及如何处理这个异步任务。由于信号处理函数是突然闯进来的，因此跟中断处理程序一样，有很多事情是不能做的，因此保险起见，一般是把事件 “登记” 一下放进队列，然后返回该进程原来在做的事。")]),t._v(" "),_("li",[t._v("如果这个进程正在内核态处理，例如以同步阻塞方式读写磁盘，那就把这个通知挂起来了，等到内核态的事情忙完了，快要回到用户态的时候，再触发信号通知。")]),t._v(" "),_("li",[t._v("如果这个进程现在被挂起了，例如陷入睡眠，那就把这个进程唤醒，等待 CPU 调度，触发信号通知。")])]),t._v(" "),_("h2",{attrs:{id:"_2-优点"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-优点"}},[t._v("#")]),t._v(" 2. 优点")]),t._v(" "),_("ol",[_("li",[t._v("不阻塞，数据一步到位。")]),t._v(" "),_("li",[t._v("Proactor 模式（主动器）。")])]),t._v(" "),_("h2",{attrs:{id:"_3-缺点"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_3-缺点"}},[t._v("#")]),t._v(" 3. 缺点")]),t._v(" "),_("ol",[_("li",[t._v("需要操作系统的底层支持，LINUX 2.5 版本内核首现，2.6 版本产品的内核标准特性。")]),t._v(" "),_("li",[t._v("实现、开发应用难度大。")])]),t._v(" "),_("h2",{attrs:{id:"_4-适用场景"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_4-适用场景"}},[t._v("#")]),t._v(" 4. 适用场景")]),t._v(" "),_("ol",[_("li",[t._v("非常适合高性能高并发应用。")])]),t._v(" "),_("h2",{attrs:{id:"_5-方案"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_5-方案"}},[t._v("#")]),t._v(" 5. 方案")]),t._v(" "),_("ol",[_("li",[t._v("Java AIO")])]),t._v(" "),_("Vssue")],1)}),[],!1,null,null,null);a.default=s.exports}}]);
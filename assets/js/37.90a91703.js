(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{447:function(v,_,i){"use strict";i.r(_);var t=i(47),l=Object(t.a)({},(function(){var v=this,_=v.$createElement,i=v._self._c||_;return i("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[i("h1",{attrs:{id:"_5-go-程序是如何启动起来的"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#_5-go-程序是如何启动起来的"}},[v._v("#")]),v._v(" 5. Go 程序是如何启动起来的？")]),v._v(" "),i("p",[v._v("运行 runtime/rt0_xxx.s 汇编文件")]),v._v(" "),i("ol",[i("li",[v._v("读取命令行参数：复制参数变量 argc 和 argv 到栈上；")]),v._v(" "),i("li",[v._v("初始化 g0 执行栈：g0 是为了调度协程而产生的协程，是每个 Go 程序的第一个协程；")]),v._v(" "),i("li",[v._v("运行时检查：\n"),i("ul",[i("li",[v._v("类型长度")]),v._v(" "),i("li",[v._v("指针操作")]),v._v(" "),i("li",[v._v("结构体字段偏移量")]),v._v(" "),i("li",[v._v("atomic 原子操作")]),v._v(" "),i("li",[v._v("CAS 操作")]),v._v(" "),i("li",[v._v("栈大小是否是 2 的幂次")])])]),v._v(" "),i("li",[v._v("参数初始化 runtime.args：对命令行中的参数进行处理，参数数量复制给 argc（int32），参数值赋值给 argv（**byte）")]),v._v(" "),i("li",[v._v("初始化调度器 runtime.schedinit：\n"),i("ul",[i("li",[v._v("全局栈空间内存分配")]),v._v(" "),i("li",[v._v("堆内存空间的初始化")]),v._v(" "),i("li",[v._v("初始化当前系统线程")]),v._v(" "),i("li",[v._v("算法初始化（map、hash）")]),v._v(" "),i("li",[v._v("加载命令行参数到 os.Args")]),v._v(" "),i("li",[v._v("加载操作系统环境变量")]),v._v(" "),i("li",[v._v("gc 的参数初始化")]),v._v(" "),i("li",[v._v("设置 process 的数量")])])]),v._v(" "),i("li",[v._v("创建主协程：执行 runtime.main 并将其放入调度器等待调度；")]),v._v(" "),i("li",[v._v("初始化一个 M，用来调度主协程；")]),v._v(" "),i("li",[v._v("主协程执行主函数 runtime.main，它会执行：\n"),i("ul",[i("li",[v._v("runtime.init")]),v._v(" "),i("li",[v._v("启动 gc 垃圾回收器")]),v._v(" "),i("li",[v._v("用户包依赖的 init 方法")]),v._v(" "),i("li",[v._v("用户主函数 main.main")])])])]),v._v(" "),i("p",[i("img",{attrs:{src:"https://tva1.sinaimg.cn/large/e6c9d24egy1h54yumq3jnj20s30n075q.jpg",alt:"preview"}})]),v._v(" "),i("Vssue")],1)}),[],!1,null,null,null);_.default=l.exports}}]);
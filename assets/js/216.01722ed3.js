(window.webpackJsonp=window.webpackJsonp||[]).push([[216],{623:function(_,t,v){"use strict";v.r(t);var a=v(47),r=Object(a.a)({},(function(){var _=this,t=_.$createElement,v=_._self._c||t;return v("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[v("h1",{attrs:{id:"零、核心概念"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#零、核心概念"}},[_._v("#")]),_._v(" 零、核心概念")]),_._v(" "),v("h2",{attrs:{id:"一次-io"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#一次-io"}},[_._v("#")]),_._v(" 一次 IO")]),_._v(" "),v("ul",[v("li",[_._v("拿一次磁盘文件读取为例，我们要读取的文件是存储在磁盘上的，我们的目的是把它读取到内存中。可以把这个步骤简化成把数据从硬件（硬盘）中读取到用户空间中。")])]),_._v(" "),v("p",[_._v("两个阶段：")]),_._v(" "),v("ol",[v("li",[_._v("调用操作系统的 read 方法，并开始阻塞等待，等待数据准备好，此时数据正在拷贝到内核缓冲区。")]),_._v(" "),v("li",[_._v("将数据从内核缓冲区拷贝到应用进程，应用进程进行处理。")])]),_._v(" "),v("h2",{attrs:{id:"同步-异步"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#同步-异步"}},[_._v("#")]),_._v(" 同步/异步")]),_._v(" "),v("blockquote",[v("p",[_._v("（从被调用方的角度来看👀")])]),_._v(" "),v("ul",[v("li",[_._v("如果被调用方被调用之后需要立刻返回结果，那么就是同步的。")]),_._v(" "),v("li",[_._v("如果被调用方被调用之后先返回一个空的结果，等到任务执行完成后再通知调用方，那就是异步的。")])]),_._v(" "),v("h2",{attrs:{id:"阻塞-非阻塞"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#阻塞-非阻塞"}},[_._v("#")]),_._v(" 阻塞/非阻塞")]),_._v(" "),v("blockquote",[v("p",[_._v("👀 从调用方的角度来看）")])]),_._v(" "),v("ul",[v("li",[_._v("如果调用方在被调用方返回结果之前只能傻傻等待，那就是阻塞的。")]),_._v(" "),v("li",[_._v("如果调用方在被调用方返回结果之前可以先干别的事情，那就是非阻塞的。")])]),_._v(" "),v("blockquote",[v("p",[_._v("同步和异步的区别：是否开启新线程。")]),_._v(" "),v("p",[_._v("阻塞和非阻塞的区别：当前线程是否挂起，即是否释放 CPU。")])]),_._v(" "),v("h2",{attrs:{id:"用户空间-内核空间"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#用户空间-内核空间"}},[_._v("#")]),_._v(" 用户空间/内核空间")]),_._v(" "),v("p",[_._v("现在操作系统都是采用虚拟存储器，那么对 32 位操作系统而言，它的寻址空间（虚拟存储空间）为 4 G（2 的 32 次方）。操作系统的核心是内核，独立于普通的应用程序，可以访问受保护的内存空间，也有访问底层硬件设备的所有权限。为了保证用户进程不能直接操作内核（kernel），保证内核的安全，操心系统将虚拟空间划分为两部分，一部分为内核空间，一部分为用户空间。针对 linux 操作系统而言，将最高的 1G 字节（从虚拟地址 0xC0000000 到 0xFFFFFFFF），供内核使用，称为内核空间，而将较低的 3G 字节（从虚拟地址 0x00000000 到 0xBFFFFFFF），供各个进程使用，称为用户空间。")]),_._v(" "),v("h2",{attrs:{id:"进程切换"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#进程切换"}},[_._v("#")]),_._v(" 进程切换")]),_._v(" "),v("p",[_._v("为了控制进程的执行，内核必须有能力挂起正在 CPU 上运行的进程，并恢复以前挂起的某个进程的执行。这种行为被称为进程切换。因此可以说，任何进程都是在操作系统内核的支持下运行的，是与内核紧密相关的。")]),_._v(" "),v("p",[_._v("从一个进程的运行转到另一个进程上运行，这个过程中经过下面这些变化：")]),_._v(" "),v("ol",[v("li",[_._v("保存 CPU 上下文，包括程序计数器和其他寄存器。")]),_._v(" "),v("li",[_._v("更新 PCB 信息。")]),_._v(" "),v("li",[_._v("把进程的 PCB 移入相应的队列，如就绪、在某事件阻塞等队列。")]),_._v(" "),v("li",[_._v("选择另一个进程执行，并更新其 PCB。")]),_._v(" "),v("li",[_._v("更新内存管理的数据结构。")]),_._v(" "),v("li",[_._v("恢复 CPU 上下文。")])]),_._v(" "),v("p",[v("strong",[_._v("总而言之就是很耗资源")]),_._v("。")]),_._v(" "),v("h2",{attrs:{id:"文件操作符-fd"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#文件操作符-fd"}},[_._v("#")]),_._v(" 文件操作符 fd")]),_._v(" "),v("p",[_._v("文件描述符（File descriptor）是计算机科学中的一个术语，是一个用于表述"),v("strong",[_._v("指向文件的引用")]),_._v("的抽象化概念。")]),_._v(" "),v("p",[_._v("文件描述符在形式上是一个非负整数。实际上，它是一个索引值，指向内核为每一个进程所维护的该进程打开文件的记录表。当程序打开一个现有文件或者创建一个新文件时，内核向进程返回一个文件描述符。在程序设计中，一些涉及底层的程序编写往往会围绕着文件描述符展开。但是文件描述符这一概念往往只适用于 UNIX、Linux 这样的操作系统。")]),_._v(" "),v("blockquote",[v("p",[_._v("以下参考："),v("a",{attrs:{href:"https://mp.weixin.qq.com/s?__biz=Mzg3MjA4MTExMw==&mid=2247484746&idx=1&sn=c0a7f9129d780786cabfcac0a8aa6bb7&source=41&scene=21#wechat_redirect",target:"_blank",rel:"noopener noreferrer"}},[_._v("《漫话：如何给女朋友解释什么是Linux的五种IO模型？》"),v("OutboundLink")],1)])]),_._v(" "),v("Vssue")],1)}),[],!1,null,null,null);t.default=r.exports}}]);
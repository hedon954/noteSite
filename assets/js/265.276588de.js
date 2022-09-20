(window.webpackJsonp=window.webpackJsonp||[]).push([[265],{677:function(t,r,a){"use strict";a.r(r);var v=a(47),e=Object(v.a)({},(function(){var t=this,r=t.$createElement,a=t._self._c||r;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"docker-介绍"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#docker-介绍"}},[t._v("#")]),t._v(" Docker 介绍")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://tva1.sinaimg.cn/large/008i3skNly1grtd8i5j5fj60xn0u03zi02.jpg",alt:"docker.jpeg"}})]),t._v(" "),a("blockquote",[a("p",[t._v("参考：https://www.zutuanxue.com/home/4/15_78")])]),t._v(" "),a("h2",{attrs:{id:"一、虚拟化和容器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、虚拟化和容器"}},[t._v("#")]),t._v(" 一、虚拟化和容器")]),t._v(" "),a("h3",{attrs:{id:"_1-虚拟化介绍"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-虚拟化介绍"}},[t._v("#")]),t._v(" 1. 虚拟化介绍")]),t._v(" "),a("p",[t._v("操作系统层虚拟化是指通过划分一个宿主操作系统的特定部分，产生一个个隔离的操作执行环境。操作系统层的虚拟化是操作系统内核直接提供的虚拟化，虚拟出的操作系统之间共享底层宿主操作系统内核和底层的硬件资源。操作系统虚拟化的关键点在于将操作系统与上层应用隔离开，将对操作系统资源的访问进行虚报化，使上层应用觉得自己独占操作系统。")]),t._v(" "),a("p",[t._v("操作系统虚拟化的好处是实现了虚拟操作系统与物理操作系统的隔离并且有效避免物理操作系统的重复安装。比较有名的操作系统虚报化解决方案有 Virtual Server、Zone、Virtuozzo 及虚拟专用服务器（Vital Pnvate Sever,VPS）。VPS 是利用虚拟服务器软件在一台物理机上创建多个相互隔离的小服务器。这些小服务器本身就有自己的操作系统，其运行和管理与独立主机完全相。其可以保证用户独享资源，且可以节约成本。")]),t._v(" "),a("h3",{attrs:{id:"_2-虚拟化分类"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-虚拟化分类"}},[t._v("#")]),t._v(" 2. 虚拟化分类")]),t._v(" "),a("ol",[a("li",[t._v("仿真虚拟化（对系统硬件没有要求,性能最低]）：VMware")]),t._v(" "),a("li",[t._v("半虚拟化（虚拟机可以使用真机物理硬件，性能高，需要改内核）：xen")]),t._v(" "),a("li",[t._v("硬件辅助虚拟化：vmware、kvm\n"),a("ul",[a("li",[t._v("需要硬件支持 【cpu 主板】")]),t._v(" "),a("li",[t._v("不需要改内核")]),t._v(" "),a("li",[t._v("可以直接使用真机硬件，性能最贴近宿主机")])])]),t._v(" "),a("li",[t._v("容器虚拟化：lxc、docker")])]),t._v(" "),a("h3",{attrs:{id:"_3-主机虚拟化与容器虚拟化特点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-主机虚拟化与容器虚拟化特点"}},[t._v("#")]),t._v(" 3. 主机虚拟化与容器虚拟化特点")]),t._v(" "),a("p",[a("strong",[t._v("主机虚拟化")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://tva1.sinaimg.cn/large/008i3skNly1grtd94240xj30j80793zd.jpg",alt:"vmachines.png"}})]),t._v(" "),a("ul",[a("li",[t._v("应用程序运行环境强隔离")]),t._v(" "),a("li",[t._v("虚拟机操作系统与底层操作系统无关化")]),t._v(" "),a("li",[t._v("虚拟机内部操作不会影响到物理机")]),t._v(" "),a("li",[t._v("拥有操作系统会占用部署资源及存储")]),t._v(" "),a("li",[t._v("网络传输效率低")]),t._v(" "),a("li",[t._v("当应用程序需要调用硬件响应用户访问时间延迟大")])]),t._v(" "),a("p",[a("strong",[t._v("容器虚拟化")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://tva1.sinaimg.cn/large/008i3skNly1grtd95baboj30j505ft8t.jpg",alt:"container_virtual.png"}})]),t._v(" "),a("ul",[a("li",[t._v("可以实现应用程序的隔离")]),t._v(" "),a("li",[t._v("直接使用物理机的操作系统可以快速响应用户请求")]),t._v(" "),a("li",[t._v("不占用部署时间")]),t._v(" "),a("li",[t._v("占用少量磁盘空间")])]),t._v(" "),a("p",[t._v("容器虚拟化缺点：")]),t._v(" "),a("ul",[a("li",[t._v("学习成本增加")]),t._v(" "),a("li",[t._v("操作控制麻烦")]),t._v(" "),a("li",[t._v("网络控制与主机虚拟化有所区别")]),t._v(" "),a("li",[t._v("服务治理。")])]),t._v(" "),a("h2",{attrs:{id:"二、docker-介绍"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二、docker-介绍"}},[t._v("#")]),t._v(" 二、Docker 介绍")]),t._v(" "),a("p",[t._v("Docker 是一个开源项目，诞生于 2013 年初，最初是 dotCloud 公司内部的一个业余项目。它基于 Google 公司推出的 Go 语言实现。 项目后来加入了 Linux 基金会，遵从了 Apache 2.0 协议，项目代码在 "),a("a",{attrs:{href:"https://github.com/docker/docker",target:"_blank",rel:"noopener noreferrer"}},[t._v("GitHub"),a("OutboundLink")],1),t._v(" 上进行维护。")]),t._v(" "),a("p",[t._v("Docker 自开源后受到广泛的关注和讨论，以至于 dotCloud 公司后来都改名为 Docker Inc。Redhat 已经在其 RHEL6.5 中集中支持 Docker；Google 也在其 PaaS 产品中广泛应用。")]),t._v(" "),a("p",[t._v("Docker 项目的目标是实现轻量级的操作系统虚拟化解决方案。 Docker 的基础是 Linux 容器（LXC）等技术。")]),t._v(" "),a("p",[t._v("在 LXC 的基础上 Docker 进行了进一步的封装，让用户不需要去关心容器的管理，使得操作更为简便。用户操作 Docker 的容器就像操作一个快速轻量级的虚拟机一样简单。")]),t._v(" "),a("h2",{attrs:{id:"三、docker-优势"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三、docker-优势"}},[t._v("#")]),t._v(" 三、Docker 优势")]),t._v(" "),a("p",[a("strong",[t._v("更快的交付和部署")])]),t._v(" "),a("p",[t._v("对开发和运维（devop）人员来说，最希望的就是一次创建或配置，可以在任意地方正常运行。开发者可以使用一个标准的镜像来构建一套开发容器，开发完成之后，运维人员可以直接使用这个容器来部署代码。 Docker 可以快速创建容器，快速迭代应用程序，并让整个过程全程可见，使团队中的其他成员更容易理解应用程序是如何创建和工作的。 Docker 容器很轻很快，容器的启动时间是秒级的，大量地节约开发、测试、部署的时间。")]),t._v(" "),a("p",[a("strong",[t._v("更高效的虚拟化")])]),t._v(" "),a("p",[t._v("Docker 容器的运行不需要额外的 hypervisor 支持，它是内核级的虚拟化，因此可以实现更高的性能和效率。")]),t._v(" "),a("p",[a("strong",[t._v("更轻松的迁移和拓展")])]),t._v(" "),a("p",[t._v("Docker 容器几乎可以在任意的平台上运行，包括物理机、虚拟机、公有云、私有云、个人电脑、服务器等。 这种兼容性可以让用户把一个应用程序从一个平台直接迁移到另外一个。")]),t._v(" "),a("p",[a("strong",[t._v("更简单的管理")])]),t._v(" "),a("p",[t._v("使用 Docker，只需要小小的修改，就可以替代以往大量的更新工作。所有的修改都以增量的方式被分发和更新，从而实现自动化并且高效的管理。")]),t._v(" "),a("h2",{attrs:{id:"四、docker-架构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#四、docker-架构"}},[t._v("#")]),t._v(" 四、Docker 架构")]),t._v(" "),a("p",[t._v("Docker 采用了 "),a("strong",[t._v("C/S")]),t._v(" 架构，包括客户端和服务端。 "),a("strong",[t._v("Docker daemon")]),t._v(" 作为服务端接受来自客户的请求，并处理这些请求（创建、运行、分发容器）。 客户端和服务端既可以运行在一个机器上，也可通过 socket 或者 RESTful API 来进行通信。")]),t._v(" "),a("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://tva1.sinaimg.cn/large/008i3skNly1grtd97rnsbj616g0quta702.jpg",alt:"image-20210621102640144"}}),t._v(" "),a("p",[a("strong",[t._v("Docker daemon")]),t._v(" 一般在宿主主机后台运行，等待接收来自客户端的消息。 Docker 客户端则为用户提供一系列可执行命令，用户用这些命令实现跟 Docker daemon 交互。")]),t._v(" "),a("img",{staticStyle:{zoom:"67%"},attrs:{src:"https://tva1.sinaimg.cn/large/008i3skNly1grtd968br0j30qu0egtai.jpg",alt:"clientdaemon.jpg"}}),t._v(" "),a("center",[t._v("容器 — 镜像 — 仓库 — daemon — client 之间的关系")]),t._v(" "),a("h2",{attrs:{id:"五、docker-名字空间"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#五、docker-名字空间"}},[t._v("#")]),t._v(" 五、Docker 名字空间")]),t._v(" "),a("p",[t._v("名字空间是 Linux 内核一个强大的特性。每个容器都有自己单独的名字空间，运行在其中的应用都像是在独立的操作系统中运行一样。名字空间保证了容器之间彼此互不影响。")]),t._v(" "),a("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://tva1.sinaimg.cn/large/008i3skNly1grtd979dboj311w0eoq53.jpg",alt:"image-20210621102926724"}}),t._v(" "),a("h4",{attrs:{id:"pid-名字空间"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pid-名字空间"}},[t._v("#")]),t._v(" PID 名字空间")]),t._v(" "),a("p",[t._v("不同用户的进程就是通过 PID 名字空间隔离开的，且不同名字空间中可以有相同 PID。所有的 LXC 进程在 Docker 中的父进程为Docker进程，每个 LXC 进程具有不同的名字空间。同时由于允许嵌套，因此可以很方便的实现嵌套的 Docker 容器。")]),t._v(" "),a("h4",{attrs:{id:"net-名字空间"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#net-名字空间"}},[t._v("#")]),t._v(" NET 名字空间")]),t._v(" "),a("p",[t._v("有了 PID 名字空间, 每个名字空间中的 PID 能够相互隔离，但是网络端口还是共享 host 的端口。网络隔离是通过 net 名字空间实现的， 每个 net 名字空间有独立的网络设备，IP 地址，路由表，/proc/net 目录。这样每个容器的网络就能隔离开来。Docker 默认采用 "),a("strong",[t._v("veth")]),t._v(" 的方式，将容器中的虚拟网卡同 host 上的一 个Docker 网桥 "),a("strong",[t._v("docker0")]),t._v(" 连接在一起。")]),t._v(" "),a("h4",{attrs:{id:"ipc-名字空间"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ipc-名字空间"}},[t._v("#")]),t._v(" IPC 名字空间")]),t._v(" "),a("p",[t._v("容器中进程交互还是采用了 Linux 常见的进程间交互方法（interprocess communication - IPC），包括信号量、消息队列和共享内存等。然而同 VM 不同的是，容器的进程间交互实际上还是 host 上具有相同 PID 名字空间中的进程间交互，因此需要在 IPC 资源申请时加入名字空间信息，每个 IPC 资源有一个唯一的 32 位 ID。")]),t._v(" "),a("h4",{attrs:{id:"mnt-名字空间"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mnt-名字空间"}},[t._v("#")]),t._v(" MNT 名字空间")]),t._v(" "),a("p",[t._v("类似 chroot，将一个进程放到一个特定的目录执行。mnt 名字空间允许不同名字空间的进程看到的文件结构不同，这样每个名字空间中的进程所看到的文件目录就被隔离开了。同 chroot 不同，每个名字空间中的容器在 /proc/mounts 的信息只包含所在名字空间的 mount point。")]),t._v(" "),a("h4",{attrs:{id:"uts-名字空间"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#uts-名字空间"}},[t._v("#")]),t._v(" UTS 名字空间")]),t._v(" "),a("p",[t._v("UTS（UNIX Time-sharing System）名字空间允许每个容器拥有独立的 hostname 和 domain name，使其在网络上可以被视作一个独立的节点而非主机上的一个进程。")]),t._v(" "),a("h4",{attrs:{id:"user-名字空间"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#user-名字空间"}},[t._v("#")]),t._v(" USER 名字空间")]),t._v(" "),a("p",[t._v("每个容器可以有不同的用户和组 ID，也就是说可以在容器内用容器内部的用户执行程序而非主机上的用户。")])],1)}),[],!1,null,null,null);r.default=e.exports}}]);
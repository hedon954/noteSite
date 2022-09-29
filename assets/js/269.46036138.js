(window.webpackJsonp=window.webpackJsonp||[]).push([[269],{678:function(r,e,_){"use strict";_.r(e);var v=_(47),o=Object(v.a)({},(function(){var r=this,e=r.$createElement,_=r._self._c||e;return _("ContentSlotsDistributor",{attrs:{"slot-key":r.$parent.slotKey}},[_("h1",{attrs:{id:"面试题丨docker"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#面试题丨docker"}},[r._v("#")]),r._v(" 面试题丨Docker")]),r._v(" "),_("h2",{attrs:{id:"_1-docker-常用命令"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-docker-常用命令"}},[r._v("#")]),r._v(" 1. Docker 常用命令")]),r._v(" "),_("ul",[_("li",[r._v("docker pull 拉取或者更新指定镜像")]),r._v(" "),_("li",[r._v("docker push 将镜像推送至远程仓库")]),r._v(" "),_("li",[r._v("docker rm 删除容器")]),r._v(" "),_("li",[r._v("docker rmi 删除镜像")]),r._v(" "),_("li",[r._v("docker images 列出所有镜像")]),r._v(" "),_("li",[r._v("docker ps 列出所有容器")])]),r._v(" "),_("h2",{attrs:{id:"_2-docker-是怎么工作的"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-docker-是怎么工作的"}},[r._v("#")]),r._v(" 2. Docker 是怎么工作的？")]),r._v(" "),_("p",[r._v("实际上 Docker 使用了常见的 C/S 架构，也就是 client-server 模式，docker client 负责处理用户输入的各种命令，比如 docker build、docker run，真正工作的其实是 server，也就是 docker demon，值得注意的是，docker client 和 docker demon 可以运行在同一台机器上。")]),r._v(" "),_("p",[r._v("Docker 守护进程运行在主机上， 然后通过 Socket 连接从客户端访问，守护进程从客户端接受命令并管理运行在主机上的容器。")]),r._v(" "),_("h2",{attrs:{id:"_3-docker-容器之间怎么隔离"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_3-docker-容器之间怎么隔离"}},[r._v("#")]),r._v(" 3. Docker 容器之间怎么隔离？")]),r._v(" "),_("ul",[_("li",[_("p",[r._v("Namespace")]),r._v(" "),_("p",[r._v("Linux 中的 PID、IPC、网络等资源是全局的，而 NameSpace 机制是一种资源隔离方案，在该机制下这些资源就不再是全局的了，而是属于某个特定的 NameSpace，各个 NameSpace 下的资源互不干扰。")])]),r._v(" "),_("li",[_("p",[r._v("Control Groups")]),r._v(" "),_("p",[r._v("虽然有了 NameSpace 技术可以实现资源隔离，但进程还是可以不受控的访问系统资源，比如 CPU、内存、磁盘、网络等，为了控制容器中进程对资源的访问，Docker 采用 control groups 技术（也就是 cgroup），有了 cgroup 就可以控制容器中进程对系统资源的消耗了，比如你可以限制某个容器使用内存的上限、可以在哪些 CPU 上运行等等。")])])]),r._v(" "),_("p",[r._v("有了这两项技术，容器看起来就真的像是独立的操作系统了。")]),r._v(" "),_("div",{staticClass:"custom-block tip"},[_("p",{staticClass:"custom-block-title"},[r._v("Control Groups")]),r._v(" "),_("p",[r._v("Control Groups 简称 cgroups，是 Linux 内核提供的一种可以限制、记录、隔离进程组（process groups）所使用的物理资源（如：CPU、内存、IO 等等）的机制。最初由 Google 的工程师提出，后来被整合进 Linux 内核。cgroups 也是 LXC 为实现虚拟化所使用的资源管理手段，可以说没有 cgroups 就没有 LXC。")]),r._v(" "),_("p",[r._v("cgroups 适用于多种应用场景，从单个进程的资源控制，到实现操作系统层次的虚拟化（OS Level Virtualization）。 cgroups 提供了一下功能：")]),r._v(" "),_("ol",[_("li",[r._v("限制进程组可以使用的资源数量（Resource limiting ）。比如：memory 子系统可以为进程组设定一个 memory 使用上限，一旦进程组使用的内存达到限额再申请内存，就会出发 OOM（out of memory）。")]),r._v(" "),_("li",[r._v("进程组的优先级控制（Prioritization ）。比如：可以使用 CPU 子系统为某个进程组分配特定 CPU share。")]),r._v(" "),_("li",[r._v("记录进程组使用的资源数量（Accounting ）。比如：可以使用 cpuacct 子系统记录某个进程组使用的 CPU 时间")]),r._v(" "),_("li",[r._v("进程组隔离（Isolation）。比如：使用 namespace 子系统可以使不同的进程组使用不同的 namespace，以达到隔离的目的，不同的进程组有各自的进程、网络、文件系统挂载空间。")])])]),r._v(" "),_("h2",{attrs:{id:"_4-容器与主机之间的数据拷贝"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_4-容器与主机之间的数据拷贝"}},[r._v("#")]),r._v(" 4. 容器与主机之间的数据拷贝")]),r._v(" "),_("p",[_("code",[r._v("docker cp")]),r._v(" 命令用于穷奇与主机之间的数据拷贝。")]),r._v(" "),_("p",[r._v("主机到容器：docker cp /www 96f7f14e99ab:/www/")]),r._v(" "),_("p",[r._v("容器到主机：docker cp 96f7f14e99ab:/www /tmp")]),r._v(" "),_("h2",{attrs:{id:"_5-如何在生产中监控-docker"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_5-如何在生产中监控-docker"}},[r._v("#")]),r._v(" 5. 如何在生产中监控 Docker？")]),r._v(" "),_("p",[r._v("Docker 提供 "),_("code",[r._v("docker:stats")]),r._v(" 和 Docker 事件等工具来监控生产中的 Docker。我们可以使用这些命令获取重要统计数据的报告。")]),r._v(" "),_("ul",[_("li",[_("p",[r._v("Docker 统计数据：当我们使用容器 ID 调用 docker stats 时，我们获得容器的 CPU，内存使用情况等。它类似于 Linux 中的 top 命令。")])]),r._v(" "),_("li",[_("p",[r._v("Docker 事件：docker 事件是一个命令，用于查看 docker 守护程序中正在进行的活动流。一些常见的 docker 事件是：")]),r._v(" "),_("ul",[_("li",[r._v("attach")]),r._v(" "),_("li",[r._v("commit")]),r._v(" "),_("li",[r._v("die")]),r._v(" "),_("li",[r._v("detach")]),r._v(" "),_("li",[r._v("rename")]),r._v(" "),_("li",[r._v("destroy")])]),r._v(" "),_("p",[r._v("我们还可以使用各种选项来限制或过滤事件。")])])]),r._v(" "),_("h2",{attrs:{id:"_6-dcokerfile-中的命令-copy-和-add-命令有什么区别"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_6-dcokerfile-中的命令-copy-和-add-命令有什么区别"}},[r._v("#")]),r._v(" 6. DcokerFile 中的命令 COPY 和 ADD 命令有什么区别？")]),r._v(" "),_("p",[r._v("COPY 和 ADD 的区别是 COPY 的 SRC 只能是本地文件，其他用法一致。")]),r._v(" "),_("h2",{attrs:{id:"_7-一个完整的-docker-由哪些部分组成"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_7-一个完整的-docker-由哪些部分组成"}},[r._v("#")]),r._v(" 7. 一个完整的 Docker 由哪些部分组成？")]),r._v(" "),_("ul",[_("li",[r._v("Docker Client 客户端")]),r._v(" "),_("li",[r._v("Docker Daemon守护进程")]),r._v(" "),_("li",[r._v("Docker Image 镜像")]),r._v(" "),_("li",[r._v("Docker Container 容器")])]),r._v(" "),_("h2",{attrs:{id:"_8-docker-中进入容器的方式有哪些"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_8-docker-中进入容器的方式有哪些"}},[r._v("#")]),r._v(" 8. Docker 中进入容器的方式有哪些？")]),r._v(" "),_("ul",[_("li",[r._v("使用 docker attach 命令")]),r._v(" "),_("li",[r._v("使用 exec 命令，例如 docker exec -i -t 784fd3b294d7 /bin/bash")])]),r._v(" "),_("h2",{attrs:{id:"_9-docker-和虚拟机有何不同"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_9-docker-和虚拟机有何不同"}},[r._v("#")]),r._v(" 9. Docker 和虚拟机有何不同？")]),r._v(" "),_("p",[r._v("Docker 不是虚拟化方法。它依赖于实际实现基于容器的虚拟化或操作系统级虚拟化的其他工具。为此，Docker 最初使用 LXC 驱动程序，然后移动到 libcontainer，现在重命名为 runc。")]),r._v(" "),_("p",[r._v("Docker 主要专注于在应用程序容器内自动部署应用程序。应用程序容器旨在打包和运行单个服务，而系统容器则设计为运行多个进程，如虚拟机。因此，Docker 被视为容器化系统上的容器管理或应用程序部署工具。")]),r._v(" "),_("ol",[_("li",[r._v("与虚拟机不同，容器不需要引导操作系统内核，因此可以在不到一秒的时间内创建容器。此功能使基于容器的虚拟化比其他虚拟化方法更加独特和可取；由于基于容器的虚拟化为主机增加了很少或没有开销，因此基于容器的虚拟化具有接近本机的性能。")]),r._v(" "),_("li",[r._v("对于基于容器的虚拟化，与其他虚拟化不同，不需要其他软件。主机上的所有容器共享主机的调度程序，从而节省了额外资源的需求。")]),r._v(" "),_("li",[r._v("与虚拟机映像相比，容器状态（Docker 或 LXC 映像）的大小很小，因此容器映像很容易分发。")]),r._v(" "),_("li",[r._v("容器中的资源管理是通过 cgroup 实现的。cgroups 不允许容器消耗比分配给它们更多的资源。虽然主机的所有资源都在虚拟机中可见，但无法使用。这可以通过在容器和主机上同时运行 top 或 htop 来实现。所有环境的输出看起来都很相似。")])]),r._v(" "),_("h2",{attrs:{id:"_10-什么是联合文件系统-unionfs"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_10-什么是联合文件系统-unionfs"}},[r._v("#")]),r._v(" 10. 什么是联合文件系统（UnionFS）？")]),r._v(" "),_("p",[r._v("Dcoker 的镜像实际上由一层一层的文件系统组成，这种层级的文件系统就是 UnionFS。")]),r._v(" "),_("p",[r._v("UnionFS 是一种分层、轻量级并且高性能的文件系统。联合加载会把各层文件系统叠加起来，这样最终的文件系统会包含所有底层的文件和目录。")]),r._v(" "),_("h2",{attrs:{id:"_11-docker-的基本使用流程"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_11-docker-的基本使用流程"}},[r._v("#")]),r._v(" 11. Docker 的基本使用流程")]),r._v(" "),_("ol",[_("li",[r._v("编写 Dockerfile；")]),r._v(" "),_("li",[r._v("使用 Dockerfile 构建镜像；")]),r._v(" "),_("li",[r._v("通过镜像来运行容器。")])]),r._v(" "),_("h2",{attrs:{id:"_12-docker-容器有几种状态"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_12-docker-容器有几种状态"}},[r._v("#")]),r._v(" 12. Docker 容器有几种状态？")]),r._v(" "),_("ul",[_("li",[r._v("运行")]),r._v(" "),_("li",[r._v("已暂停")]),r._v(" "),_("li",[r._v("重新启动")]),r._v(" "),_("li",[r._v("已退出")])]),r._v(" "),_("h2",{attrs:{id:"_13-docker-与-lxc-linux-container-有何不同"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_13-docker-与-lxc-linux-container-有何不同"}},[r._v("#")]),r._v(" 13. Docker 与 LXC（Linux Container）有何不同？")]),r._v(" "),_("p",[r._v("LXC 利用 Linux 上相关技术实现容器，Docker 则在如下的几个方面进行了改进：")]),r._v(" "),_("ol",[_("li",[r._v("移植性：通过抽象容器配置，容器可以实现一个平台移植到另一个平台；")]),r._v(" "),_("li",[r._v("镜像系统：基于 AUFS 的镜像系统为容器的分发带来了很多的便利，同时共同的镜像层只需要存储一份，实现高效率的存储；")]),r._v(" "),_("li",[r._v("版本管理：类似于 GIT 的版本管理理念，用户可以更方面的创建、管理镜像文件；")]),r._v(" "),_("li",[r._v("仓库系统：仓库系统大大降低了镜像的分发和管理的成本；")]),r._v(" "),_("li",[r._v("周边工具：各种现有的工具（配置管理、云平台）对Docker的支持，以及基于Docker的Pass、CI等系统，让Docker的应用更加方便和多样化。")])]),r._v(" "),_("h2",{attrs:{id:"_14-什么是-docker-镜像"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_14-什么是-docker-镜像"}},[r._v("#")]),r._v(" 14. 什么是 Docker 镜像？")]),r._v(" "),_("p",[r._v("Docker 镜像是 Docker 容器的源代码，Docker 镜像用于创建容器。可以使用 build 命令创建镜像。")]),r._v(" "),_("h2",{attrs:{id:"_15-什么是-docker-容器"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_15-什么是-docker-容器"}},[r._v("#")]),r._v(" 15. 什么是 Docker 容器？")]),r._v(" "),_("p",[r._v("Docker 容器包括应用程序及其所有依赖项，作为操作系统的独立进程运行。")]),r._v(" "),_("h2",{attrs:{id:"_16-docker-网络模式"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_16-docker-网络模式"}},[r._v("#")]),r._v(" 16. Docker 网络模式")]),r._v(" "),_("table",[_("thead",[_("tr",[_("th",[r._v("Docker网络模式")]),r._v(" "),_("th",[r._v("配置")]),r._v(" "),_("th",[r._v("说明")])])]),r._v(" "),_("tbody",[_("tr",[_("td",[r._v("host")]),r._v(" "),_("td",[r._v("–net=host")]),r._v(" "),_("td",[r._v("容器和宿主机共享 Network namespace。容器和真机共用网卡及对应的端口，缺点就是同一个端口只能宿主机或者某个容器使用，其他容器不能用。")])]),r._v(" "),_("tr",[_("td",[r._v("container")]),r._v(" "),_("td",[r._v("–net=container:NAME_or_ID")]),r._v(" "),_("td",[r._v("容器和另外一个容器共享 Network namespace。 kubernetes 中的 pod 就是多个容器共享一个 Network namespace。")])]),r._v(" "),_("tr",[_("td",[r._v("none")]),r._v(" "),_("td",[r._v("–net=none")]),r._v(" "),_("td",[r._v("容器仅有 lo 网卡，是一个不能联网的本地容器。")])]),r._v(" "),_("tr",[_("td",[r._v("bridge")]),r._v(" "),_("td",[r._v("–net=bridge")]),r._v(" "),_("td",[r._v("桥接网络是指容器通过桥接的方式将容器网卡桥接到宿主机的 "),_("strong",[r._v("docker0")]),r._v(" 网桥，然后再通过宿主机防火墙的 "),_("strong",[r._v("NAT")]),r._v(" 表实现与外网的联系。")])])])]),r._v(" "),_("Vssue")],1)}),[],!1,null,null,null);e.default=o.exports}}]);
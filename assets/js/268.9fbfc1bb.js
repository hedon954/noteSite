(window.webpackJsonp=window.webpackJsonp||[]).push([[268],{677:function(e,v,_){"use strict";_.r(v);var t=_(47),r=Object(t.a)({},(function(){var e=this,v=e.$createElement,_=e._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[_("h1",{attrs:{id:"面试题丨kubernetes"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#面试题丨kubernetes"}},[e._v("#")]),e._v(" 面试题丨Kubernetes")]),e._v(" "),_("h2",{attrs:{id:"_1-什么是-k8s"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-什么是-k8s"}},[e._v("#")]),e._v(" 1. 什么是 K8s？")]),e._v(" "),_("p",[e._v("K8s 是一个开源容器管理工具，负责容器部署，容器扩缩容以及负载平衡。作为 Google 的创意之作，它提供了出色的社区，并与所有云提供商合作。因此，我们可以说 Kubernetes 不是一个容器化平台，而是一个多容器管理解决方案。")]),e._v(" "),_("h2",{attrs:{id:"_2-k8s-和-docker-之间的关系"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-k8s-和-docker-之间的关系"}},[e._v("#")]),e._v(" 2. K8s 和 Docker 之间的关系？")]),e._v(" "),_("p",[e._v("众所周知，Docker 提供容器的生命周期管理，Docker 镜像构建运行时容器。但是，由于这些单独的容器必须通信，因此使用 K8s。因此，我们说 Docker 构建容器，这些容器通过 K8s 相互通信。因此，可以使用 K8s 手动关联和编排在多个主机上运行的容器。")]),e._v(" "),_("h2",{attrs:{id:"_3-在主机和容器上部署应用程序有什么区别"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_3-在主机和容器上部署应用程序有什么区别"}},[e._v("#")]),e._v(" 3. 在主机和容器上部署应用程序有什么区别？")]),e._v(" "),_("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://tva1.sinaimg.cn/large/008i3skNgy1gvf2h92cz7j60k00cbdgi02.jpg",alt:"640?wx_fmt=jpeg"}}),e._v(" "),_("p",[e._v("两者都共用系统内核资源。不同的是：")]),e._v(" "),_("ul",[_("li",[e._v("在主机上部署应用，多个应用程序可以共享相同的一个库；")]),e._v(" "),_("li",[e._v("在容器上部署应用，不同的容器将其上面的依赖库隔离开了，只有当前容器可以访问到安装到当前容器上的依赖库。")])]),e._v(" "),_("h2",{attrs:{id:"_4-k8s-的功能"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_4-k8s-的功能"}},[e._v("#")]),e._v(" 4. K8s 的功能")]),e._v(" "),_("ul",[_("li",[e._v("服务发现和负载均衡；")]),e._v(" "),_("li",[e._v("存储编排；")]),e._v(" "),_("li",[e._v("自动部署和回滚；")]),e._v(" "),_("li",[e._v("自动完成装箱计算；")]),e._v(" "),_("li",[e._v("自我修复；")]),e._v(" "),_("li",[e._v("密钥和配置管理；")])]),e._v(" "),_("h2",{attrs:{id:"_5-k8s-特点"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_5-k8s-特点"}},[e._v("#")]),e._v(" 5. K8s 特点")]),e._v(" "),_("p",[e._v("Kubernetes 是一个开放的开发平台，它不局限于任何一种语言，没有限定任何编程接口，所以不论是用 Java、Go、C++ 还是用 Python 编写的服务，都可以被映射为 Kubernetes 的 Service（服务），并通过标准的 "),_("strong",[e._v("TCP")]),e._v(" 通信协议进行交互。此外，Kubernetes 平台对现有的编程语言、编程框架、中间件没有任何侵入性，因此现有的系统也很容易改造升级并迁移到 Kubernetes 平台上。")]),e._v(" "),_("h2",{attrs:{id:"_6-k8s-架构"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_6-k8s-架构"}},[e._v("#")]),e._v(" 6. K8s 架构")]),e._v(" "),_("img",{attrs:{src:"https://tva1.sinaimg.cn/large/008i3skNgy1gvf2tjja5qj60xw0ltac602.jpg",alt:"3.png"}}),e._v(" "),_("p",[e._v("Master：")]),e._v(" "),_("h3",{attrs:{id:"kube-apiserver"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#kube-apiserver"}},[e._v("#")]),e._v(" kube-apiserver")]),e._v(" "),_("p",[e._v("API 服务器是 Kubernetes Control Plane 的组件， 该组件公开了 "),_("strong",[e._v("Kubernetes API")]),e._v("。 API 服务器是 Kubernetes 控制面的前端。")]),e._v(" "),_("p",[e._v("Kubernetes API 服务器的主要实现是 "),_("strong",[e._v("kube-apiserver")]),e._v("。 kube-apiserver 设计上考虑了水平伸缩，也就是说，它可通过部署多个实例进行伸缩。 你可以运行 kube-apiserver 的多个实例，并在这些实例之间平衡流量。")]),e._v(" "),_("h3",{attrs:{id:"etcd"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#etcd"}},[e._v("#")]),e._v(" etcd")]),e._v(" "),_("p",[e._v("etcd 是兼具一致性和高可用性的键值数据库，可以作为保存 Kubernetes 所有集群数据的后台数据库。（最好做一下备份）")]),e._v(" "),_("h3",{attrs:{id:"kube-scheduler"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#kube-scheduler"}},[e._v("#")]),e._v(" kube-scheduler")]),e._v(" "),_("p",[e._v("负责监视新创建的、未指定运行节点（node）的 Pods，选择节点让 Pod 在上面运行。")]),e._v(" "),_("p",[e._v("调度决策考虑的因素包括单个 Pod 和 Pod 集合的资源需求、硬件/软件/策略约束、亲和性和反亲和性规范、数据位置、工作负载间的干扰和最后时限。")]),e._v(" "),_("h3",{attrs:{id:"kube-controller-manager"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#kube-controller-manager"}},[e._v("#")]),e._v(" kube-controller-manager")]),e._v(" "),_("p",[e._v("在主节点上运行"),_("strong",[e._v("控制器")]),e._v("的组件。")]),e._v(" "),_("p",[e._v("从逻辑上讲，每个"),_("strong",[e._v("控制器")]),e._v("都是一个单独的进程， 但是为了降低复杂性，它们都被编译到同一个可执行文件，并在一个进程中运行。")]),e._v(" "),_("p",[e._v("这些控制器包括:")]),e._v(" "),_("ul",[_("li",[e._v("节点控制器（Node Controller）：负责在节点出现故障时进行通知和响应")]),e._v(" "),_("li",[e._v("任务控制器（Job controller）：监测代表一次性任务的 Job 对象，然后创建 Pods 来运行这些任务直至完成")]),e._v(" "),_("li",[e._v("端点控制器（Endpoints Controller）：填充端点（Endpoints）对象（即加入 Service 与 Pod）")]),e._v(" "),_("li",[e._v("服务帐户和令牌控制器（Service Account & Token Controllers）：为新的命名空间创建默认帐户和 API 访问令牌")])]),e._v(" "),_("p",[e._v("Node:")]),e._v(" "),_("p",[e._v("Node 是 Kubernetes 集群中的"),_("strong",[e._v("工作负载节点")]),e._v("，每个 Node 都会被 Control Plane 分配一些工作负载（Docker 容器），当某个 Node 宕机时，其上的工作负载会被 Control Plane 自动转移到其他节点上。")]),e._v(" "),_("p",[e._v("Node 上的核心组件有：")]),e._v(" "),_("h3",{attrs:{id:"kubelet"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#kubelet"}},[e._v("#")]),e._v(" kubelet")]),e._v(" "),_("p",[e._v("负责 Pod 对应的"),_("strong",[e._v("容器")]),e._v("的创建、启停等任务，同时与 Control Plane 密切协作，实现集群管理的基本功能。")]),e._v(" "),_("h3",{attrs:{id:"kube-proxy"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#kube-proxy"}},[e._v("#")]),e._v(" kube-proxy")]),e._v(" "),_("p",[_("code",[e._v("kube-proxy")]),e._v(" 是集群中每个节点上运行的"),_("strong",[e._v("网络代理")]),e._v("， 实现 Kubernetes 服务（Service）概念的一部分。")]),e._v(" "),_("p",[_("code",[e._v("kube-proxy")]),e._v(" 维护节点上的网络规则。这些网络规则允许从集群内部或外部的网络会话与 Pod 进行网络通信。")]),e._v(" "),_("p",[e._v("如果操作系统提供了数据包过滤层并可用的话，"),_("code",[e._v("kube-proxy")]),e._v(" 会通过它来实现网络规则。否则， "),_("code",[e._v("kube-proxy")]),e._v(" 仅转发流量本身。")]),e._v(" "),_("h2",{attrs:{id:"_7-k8s-各个组件之间的关系"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_7-k8s-各个组件之间的关系"}},[e._v("#")]),e._v(" 7. K8s 各个组件之间的关系")]),e._v(" "),_("ul",[_("li",[_("p",[e._v("Container")]),e._v(" "),_("p",[e._v("容器，应用程序都是运行在一个个容器里面的；")])]),e._v(" "),_("li",[_("p",[e._v("Pod")]),e._v(" "),_("p",[e._v("一个 Pod 可能包含多个容器，这些容器一般业务比较紧密，Pod 是短暂的；")])]),e._v(" "),_("li",[_("p",[e._v("Node")]),e._v(" "),_("p",[e._v("Node 当中还有多个 Pod，是 K8s 中的工作负载节点，负责管理 Pod；")])]),e._v(" "),_("li",[_("p",[e._v("ReplicaSet")]),e._v(" "),_("p",[e._v("用来确保 Pod 副本数始终保持在用户定义的副本数；")])]),e._v(" "),_("li",[_("p",[e._v("Deployment")]),e._v(" "),_("p",[e._v("无状态应用部署，为 Pod 和 ReplicaSet 提供一个声明式定义方法，可以利用它来创建 Pod 和 Deployment，并简便地进行升级和回滚、扩缩容、暂停和继续。")])]),e._v(" "),_("li",[_("p",[e._v("StatefulSet")]),e._v(" "),_("p",[e._v("有状态应用部署。")])]),e._v(" "),_("li",[_("p",[e._v("DammonSet")]),e._v(" "),_("p",[e._v("确保全部（或者一些） Node 上"),_("strong",[e._v("运行一个 Pod 的副本")]),e._v("。当有 Node 加入集群时，也会为他们新增一个 Pod 。当有 Node 从集群移除时，这些 Pod 也会被回收。")]),e._v(" "),_("p",[e._v("删除 DaemonSet 将会删除它创建的所有 Pod。")])]),e._v(" "),_("li",[_("p",[e._v("Service")]),e._v(" "),_("p",[e._v("Service 在 Node 里面，是 Node 中定义的外界可以访问的入口，它有一定的规则，将请求转发到特定的 Pod 中。")])])]),e._v(" "),_("h2",{attrs:{id:"_8-k8s-pod-镜像拉取策略"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_8-k8s-pod-镜像拉取策略"}},[e._v("#")]),e._v(" 8. K8s Pod 镜像拉取策略")]),e._v(" "),_("p",[e._v("k8s 支持配置三种拉取策略：")]),e._v(" "),_("ul",[_("li",[e._v("Always：总是从远程仓库拉取镜像")]),e._v(" "),_("li",[e._v("IfNotPresent：本地有则使用本地镜像，本地没有则从远程仓库拉取镜像")]),e._v(" "),_("li",[e._v("Never：只使用本地镜像，从不去远程仓库拉取，本地没有就报错")])]),e._v(" "),e._v("/\n")])}),[],!1,null,null,null);v.default=r.exports}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{454:function(e,t,s){"use strict";s.r(t);var r=s(47),v=Object(r.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"kubernetes-简介"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#kubernetes-简介"}},[e._v("#")]),e._v(" Kubernetes 简介")]),e._v(" "),s("p",[s("img",{attrs:{src:"https://tva1.sinaimg.cn/large/008i3skNly1grqw5xs1gfj31990rigmk.jpg",alt:"1.png"}})]),e._v(" "),s("blockquote",[s("p",[e._v("参考：")]),e._v(" "),s("p",[e._v("https://www.zutuanxue.com/home/4/12_155")]),e._v(" "),s("p",[s("a",{attrs:{href:"https://kubernetes.io/zh/docs/concepts/overview/what-is-kubernetes/",target:"_blank",rel:"noopener noreferrer"}},[e._v("kubernetes 官网"),s("OutboundLink")],1),e._v("：v1.21")])]),e._v(" "),s("h2",{attrs:{id:"一、kubernetes-介绍"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一、kubernetes-介绍"}},[e._v("#")]),e._v(" 一、Kubernetes 介绍")]),e._v(" "),s("p",[e._v("它是一个全新的基于容器技术的分布式架构领先方案，确切地说，Kubernetes 是谷歌严格保密十几年的秘密武器 Borg 的一个开源版本。")]),e._v(" "),s("p",[e._v("Borg 是谷歌内部使用的大规模集群管理系统，它基于容器技术，目的是实现资源管理的自动化，以及跨多个数据中心的资源利用率的最大化。")]),e._v(" "),s("p",[e._v("环境不一致使得应用部署出现了各种问题，从而产生了 Docker 容器来解决应用部署的问题。而大集群上容器的部署、伸缩和管理的各种问题，衍生出来了容器编排引擎，比较出名的有 K8S(Kubernetes) 和 Docker Swarm。")]),e._v(" "),s("p",[e._v("Kubernetes 是一个针对容器应用，进行自动部署，弹性伸缩和管理的开源系统。主要功能是生产环境的容器编排，Kubernetes 名字太长了，叫起来有点麻烦，而 Kubernetes 首字母与结尾字母之间有 8 个字母，因此被称作 K8S。")]),e._v(" "),s("p",[s("strong",[e._v("如果我们使用 Kubernetes：")])]),e._v(" "),s("ol",[s("li",[e._v("与业务无关的底层代码或功能模块，都可以立刻从我们的视线中消失")]),e._v(" "),s("li",[e._v("不必再费心于负载均衡器的选型和部署实施问题")]),e._v(" "),s("li",[e._v("不必再考虑引入或自己开发一个复杂的服务治理框架")]),e._v(" "),s("li",[e._v("不必再头疼于服务监控和故障处理模块的开发")])]),e._v(" "),s("h2",{attrs:{id:"二、kubernetes-优势"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#二、kubernetes-优势"}},[e._v("#")]),e._v(" 二、Kubernetes 优势")]),e._v(" "),s("p",[e._v("为什么有了 Compose 和 Swarm，还会有 Kubernetes 的出现？")]),e._v(" "),s("blockquote",[s("p",[e._v("参考：https://www.cnblogs.com/chenqionghe/p/11474486.html")])]),e._v(" "),s("h3",{attrs:{id:"_1-k8s-的设计思想更先进"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-k8s-的设计思想更先进"}},[e._v("#")]),e._v(" 1. k8s 的设计思想更先进")]),e._v(" "),s("p",[e._v("把微服务比喻为人，服务治理解决的是人的沟通，人太多了就需要生存空间和沟通方式的优化，这就需要集群和编排。")]),e._v(" "),s("p",[e._v("Compose 和 Swarm 可以解决少数人之间的关系，比如把手机号给你，你就可以方便的找到我，但是如果手机号变更的时候就会麻烦，人多了也会麻烦。")]),e._v(" "),s("p",[e._v("而k8s是站在上帝视角的高度抽象，看到了：")]),e._v(" "),s("ol",[s("li",[e._v("总体有哪些组织，不同组织有什么样的特点（Job、CronJob、Autoscaler、StatefulSet、DaemonSet...）")]),e._v(" "),s("li",[e._v("不同组织之间交流可能需要什么（ConfigMap，Secret...），这样比较紧密的人在相同的pod中，通过Service-不会变更的手机号，来和不同的组织进行沟通。")]),e._v(" "),s("li",[e._v("帮助人们快速构建组织(Deployment、RC)。")])]),e._v(" "),s("p",[e._v("k8s 就是把组织协调这项管理学落实到了计算机工程上。")]),e._v(" "),s("h3",{attrs:{id:"_2-k8s-功能更丰富"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-k8s-功能更丰富"}},[e._v("#")]),e._v(" 2. k8s 功能更丰富")]),e._v(" "),s("p",[s("strong",[e._v("Swarm 偏重的是容器的部署，而 k8s 偏重应用的部署")])]),e._v(" "),s("p",[e._v("Swarm 中最小单元是容器，而 k8s 是 pod，pod 可以由多个容器组成，在 pod 内共享 volume 和 namespace，同一 pod 内的通信更为高效。")]),e._v(" "),s("p",[e._v("pod 有什么好处？")]),e._v(" "),s("p",[e._v("例如有一个 web 容器，为了收集 web 日志，需要安装一个日志插件，如果把插件安装在 web 容器内：")]),e._v(" "),s("ol",[s("li",[e._v("如果插件有更新，即使服务没有变化也要重新把镜像构建部署一遍")]),e._v(" "),s("li",[e._v("如果插件存在内存泄露问题，整个容器都会被连累")])]),e._v(" "),s("p",[e._v("而 pod 可以为日志插件和 web 应用各自创建一个容器，两者共享 volume，web 应用只需要日志保存到 volume，两个容器各自有自己的镜像，更新互不影响。")]),e._v(" "),s("p",[s("strong",[e._v("k8s 比 Swarm 有更多的调度策略，更适合大规模容器的的管理")])]),e._v(" "),s("p",[e._v("Swarm 只有三种调度策略：spread、binpack、random，而 k8s 策略数更多多，还有端口冲突策略、容器挂载卷冲突策略、指定特定宿主机策略等。")]),e._v(" "),s("p",[s("strong",[e._v("k8s 的负载均衡机制比 Swarm 更灵活")])]),e._v(" "),s("p",[e._v("Swarm 采用的是 nginx+consul。\nConsul 保存了各个 Docker 中应用的网络信息，nginx 在 compose 时，在 Dockerfile 中指定 consul 的地址，配置到 nginx 配置中，从而实现负载均衡，这样有个缺点，就是新添加的"),s("strong",[e._v("容器 IP")]),e._v(" 和网络需要手动添加到nginx 文件中。")]),e._v(" "),s("p",[e._v("而 k8s 负载均衡通过 "),s("strong",[e._v("service")]),e._v(" 实现，没有容器 IP 变更问题，只要有相同的 "),s("strong",[e._v("Label")]),e._v(" 的 pod 都可以通过 service 访问，新添加的容器 IP 和网络不会影响负载均衡器。")]),e._v(" "),s("p",[s("strong",[e._v("k8s 支持弹性伸缩")])]),e._v(" "),s("p",[e._v("k8s 可以根据 pod 的 CPU、内存自动的调整 pod 的个数，保障服务的可用性，Swarm 则不具备这样的功能。")]),e._v(" "),s("h2",{attrs:{id:"三、kubernetes-架构"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#三、kubernetes-架构"}},[e._v("#")]),e._v(" 三、Kubernetes 架构")]),e._v(" "),s("p",[s("img",{attrs:{src:"https://tva1.sinaimg.cn/large/008i3skNly1grqwhmsogdj30xw0ltmya.jpg",alt:"3.png"}})]),e._v(" "),s("h2",{attrs:{id:"四、kubernetes-特点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#四、kubernetes-特点"}},[e._v("#")]),e._v(" 四、Kubernetes 特点")]),e._v(" "),s("p",[e._v("Kubernetes 是一个开放的开发平台，它不局限于任何一种语言，没有限定任何编程接口，所以不论是用 Java、Go、C++ 还是用 Python 编写的服务，都可以被映射为 Kubernetes 的 Service（服务），并通过标准的 "),s("strong",[e._v("TCP")]),e._v(" 通信协议进行交互。此外，Kubernetes 平台对现有的编程语言、编程框架、中间件没有任何侵入性，因此现有的系统也很容易改造升级并迁移到 Kubernetes 平台上。")]),e._v(" "),s("h2",{attrs:{id:"五、kubernetes-作用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#五、kubernetes-作用"}},[e._v("#")]),e._v(" 五、Kubernetes 作用")]),e._v(" "),s("p",[e._v("Kubernetes 提供了完善的管理工具（开发、部署、测试、运维、监控）因此，Kubernetes 是一个全新的基于容器技术的分布式架构解决方案，并且是一个一站式完备的分布式系统开发和支撑平台。")]),e._v(" "),s("p",[e._v("Kubernetes 同时具有完备的集群管理能力：")]),e._v(" "),s("ul",[s("li",[s("p",[s("strong",[e._v("服务发现和负载均衡")])]),e._v(" "),s("p",[e._v("Kubernetes 可以使用 DNS 名称或自己的 IP 地址公开容器，如果进入容器的流量很大， Kubernetes 可以负载均衡并分配网络流量，从而使部署稳定。")])]),e._v(" "),s("li",[s("p",[s("strong",[e._v("存储编排")])]),e._v(" "),s("p",[e._v("Kubernetes 允许你自动挂载你选择的存储系统，例如本地存储、公共云提供商等。")])]),e._v(" "),s("li",[s("p",[s("strong",[e._v("自动部署和回滚")])]),e._v(" "),s("p",[e._v("你可以使用 Kubernetes 描述已部署容器的所需状态，它可以以受控的速率将实际状态 更改为期望状态。例如，你可以自动化 Kubernetes 来为你的部署创建新容器， 删除现有容器并将它们的所有资源用于新容器。")])]),e._v(" "),s("li",[s("p",[s("strong",[e._v("自动完成装箱计算")])]),e._v(" "),s("p",[e._v("Kubernetes 允许你指定每个容器所需 CPU 和内存（RAM）。 当容器指定了资源请求时，Kubernetes 可以做出更好的决策来管理容器的资源。")])]),e._v(" "),s("li",[s("p",[s("strong",[e._v("自我修复")])]),e._v(" "),s("p",[e._v("Kubernetes 重新启动失败的容器、替换容器、杀死不响应用户定义的 运行状况检查的容器，并且在准备好服务之前不将其通告给客户端。")])]),e._v(" "),s("li",[s("p",[s("strong",[e._v("密钥与配置管理")])]),e._v(" "),s("p",[e._v("Kubernetes 允许你存储和管理敏感信息，例如密码、OAuth 令牌和 ssh 密钥。 你可以在不重建容器镜像的情况下部署和更新密钥和应用程序配置，也无需在堆栈配置中暴露密钥。")])])])])}),[],!1,null,null,null);t.default=v.exports}}]);
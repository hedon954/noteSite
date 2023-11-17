(window.webpackJsonp=window.webpackJsonp||[]).push([[201],{612:function(e,t,r){"use strict";r.r(t);var a=r(47),o=Object(a.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"kubernetes-名词"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#kubernetes-名词"}},[e._v("#")]),e._v(" Kubernetes 名词")]),e._v(" "),r("p",[r("img",{attrs:{src:"https://hedonspace.oss-cn-beijing.aliyuncs.com/img2/008i3skNly1grrzn3ecavj31of0u012w.jpg",alt:"image-20210623102458893"}})]),e._v(" "),r("h2",{attrs:{id:"一、control-plane"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#一、control-plane"}},[e._v("#")]),e._v(" 一、Control Plane")]),e._v(" "),r("p",[e._v("控制平面（Control Plane）的组件对集群做出全局决策（比如调度），以及检测和响应集群事件（例如，当不满足部署的 "),r("code",[e._v("replicas")]),e._v(" 字段时，启动新的 Pod）。")]),e._v(" "),r("p",[e._v("控制平面组件可以在集群中的任何节点上运行。 然而，为了简单起见，设置脚本通常会在"),r("strong",[e._v("同一个计算机上")]),e._v("启动所有控制平面组件， 并且不会在此计算机上运行用户容器。")]),e._v(" "),r("p",[e._v("Control Plane 上的核心组件有：")]),e._v(" "),r("h3",{attrs:{id:"kube-apiserver"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#kube-apiserver"}},[e._v("#")]),e._v(" kube-apiserver")]),e._v(" "),r("p",[e._v("API 服务器是 Kubernetes Control Plane 的组件， 该组件公开了 "),r("strong",[e._v("Kubernetes API")]),e._v("。 API 服务器是 Kubernetes 控制面的前端。")]),e._v(" "),r("p",[e._v("Kubernetes API 服务器的主要实现是 "),r("strong",[e._v("kube-apiserver")]),e._v("。 kube-apiserver 设计上考虑了水平伸缩，也就是说，它可通过部署多个实例进行伸缩。 你可以运行 kube-apiserver 的多个实例，并在这些实例之间平衡流量。")]),e._v(" "),r("h3",{attrs:{id:"etcd"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#etcd"}},[e._v("#")]),e._v(" etcd")]),e._v(" "),r("p",[e._v("etcd 是兼具一致性和高可用性的键值数据库，可以作为保存 Kubernetes 所有集群数据的后台数据库。（最好做一下备份）")]),e._v(" "),r("h3",{attrs:{id:"kube-scheduler"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#kube-scheduler"}},[e._v("#")]),e._v(" kube-scheduler")]),e._v(" "),r("p",[e._v("负责监视新创建的、未指定运行节点（node）的 Pods，选择节点让 Pod 在上面运行。")]),e._v(" "),r("p",[e._v("调度决策考虑的因素包括单个 Pod 和 Pod 集合的资源需求、硬件/软件/策略约束、亲和性和反亲和性规范、数据位置、工作负载间的干扰和最后时限。")]),e._v(" "),r("h3",{attrs:{id:"kube-controller-manager"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#kube-controller-manager"}},[e._v("#")]),e._v(" kube-controller-manager")]),e._v(" "),r("p",[e._v("在主节点上运行"),r("strong",[e._v("控制器")]),e._v("的组件。")]),e._v(" "),r("p",[e._v("从逻辑上讲，每个"),r("strong",[e._v("控制器")]),e._v("都是一个单独的进程， 但是为了降低复杂性，它们都被编译到同一个可执行文件，并在一个进程中运行。")]),e._v(" "),r("p",[e._v("这些控制器包括:")]),e._v(" "),r("ul",[r("li",[e._v("节点控制器（Node Controller）：负责在节点出现故障时进行通知和响应")]),e._v(" "),r("li",[e._v("任务控制器（Job controller）：监测代表一次性任务的 Job 对象，然后创建 Pods 来运行这些任务直至完成")]),e._v(" "),r("li",[e._v("端点控制器（Endpoints Controller）：填充端点（Endpoints）对象（即加入 Service 与 Pod）")]),e._v(" "),r("li",[e._v("服务帐户和令牌控制器（Service Account & Token Controllers）：为新的命名空间创建默认帐户和 API 访问令牌")])]),e._v(" "),r("h3",{attrs:{id:"cloud-controller-manager"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#cloud-controller-manager"}},[e._v("#")]),e._v(" cloud-controller-manager")]),e._v(" "),r("p",[e._v("云控制器管理器是指嵌入特定云的控制逻辑的 "),r("strong",[e._v("控制平面")]),e._v(" 组件。 云控制器管理器允许您链接集群到"),r("strong",[e._v("云提供商")]),e._v("的应用编程接口中， 并把和该云平台交互的组件与只和您的集群交互的组件分离开。")]),e._v(" "),r("p",[r("code",[e._v("cloud-controller-manager")]),e._v(" 仅运行特定于云平台的控制回路。 如果你在自己的环境中运行 Kubernetes，或者在本地计算机中运行学习环境， 所部署的环境中不需要云控制器管理器。")]),e._v(" "),r("p",[e._v("与 "),r("code",[e._v("kube-controller-manager")]),e._v(" 类似，"),r("code",[e._v("cloud-controller-manager")]),e._v(" 将若干逻辑上独立的控制回路组合到同一个可执行文件中，供你以同一进程的方式运行。 你可以对其执行水平扩容（运行不止一个副本）以提升性能或者增强容错能力。")]),e._v(" "),r("p",[e._v("下面的控制器都包含对云平台驱动的依赖：")]),e._v(" "),r("ul",[r("li",[e._v("节点控制器（Node Controller）: 用于在节点终止响应后检查云提供商以确定节点是否已被删除")]),e._v(" "),r("li",[e._v("路由控制器（Route Controller）: 用于在底层云基础架构中设置路由")]),e._v(" "),r("li",[e._v("服务控制器（Service Controller）: 用于创建、更新和删除云提供商负载均衡器")])]),e._v(" "),r("h2",{attrs:{id:"二、node"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#二、node"}},[e._v("#")]),e._v(" 二、Node")]),e._v(" "),r("p",[e._v("Node 是 Kubernetes 集群中的"),r("strong",[e._v("工作负载节点")]),e._v("，每个 Node 都会被 Control Plane 分配一些工作负载（Docker容器），当某个 Node 宕机时，其上的工作负载会被 Control Plane 自动转移到其他节点上。")]),e._v(" "),r("p",[e._v("Node 上的核心组件有：")]),e._v(" "),r("h3",{attrs:{id:"kubelet"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#kubelet"}},[e._v("#")]),e._v(" kubelet")]),e._v(" "),r("p",[e._v("负责 Pod 对应的"),r("strong",[e._v("容器")]),e._v("的创建、启停等任务，同时与 Control Plane 密切协作，实现集群管理的基本功能。")]),e._v(" "),r("h3",{attrs:{id:"kube-proxy"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#kube-proxy"}},[e._v("#")]),e._v(" kube-proxy")]),e._v(" "),r("p",[r("code",[e._v("kube-proxy")]),e._v(" 是集群中每个节点上运行的"),r("strong",[e._v("网络代理")]),e._v("， 实现 Kubernetes 服务（Service）概念的一部分。")]),e._v(" "),r("p",[r("code",[e._v("kube-proxy")]),e._v(" 维护节点上的网络规则。这些网络规则允许从集群内部或外部的网络会话与 Pod 进行网络通信。")]),e._v(" "),r("p",[e._v("如果操作系统提供了数据包过滤层并可用的话，"),r("code",[e._v("kube-proxy")]),e._v(" 会通过它来实现网络规则。否则， "),r("code",[e._v("kube-proxy")]),e._v(" 仅转发流量本身。")]),e._v(" "),r("h2",{attrs:{id:"三、container-runtime"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#三、container-runtime"}},[e._v("#")]),e._v(" 三、Container Runtime")]),e._v(" "),r("p",[e._v("容器运行环境（Container Runtime）是负责运行容器的软件。")]),e._v(" "),r("p",[e._v("Kubernetes 支持多个容器运行环境："),r("a",{attrs:{href:"https://kubernetes.io/zh/docs/reference/kubectl/docker-cli-to-kubectl/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Docker"),r("OutboundLink")],1),e._v("、 "),r("a",{attrs:{href:"https://containerd.io/docs/",target:"_blank",rel:"noopener noreferrer"}},[e._v("containerd"),r("OutboundLink")],1),e._v("、"),r("a",{attrs:{href:"https://cri-o.io/#what-is-cri-o",target:"_blank",rel:"noopener noreferrer"}},[e._v("CRI-O"),r("OutboundLink")],1),e._v(" 以及任何实现 "),r("a",{attrs:{href:"https://github.com/kubernetes/community/blob/master/contributors/devel/sig-node/container-runtime-interface.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("Kubernetes CRI (容器运行环境接口)"),r("OutboundLink")],1),e._v("。")]),e._v(" "),r("h2",{attrs:{id:"四、addons"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#四、addons"}},[e._v("#")]),e._v(" 四、Addons")]),e._v(" "),r("p",[e._v("插件（Addons）使用 Kubernetes 资源（DaemonSet、 Deployment 等）实现集群功能。 因为这些插件提供集群级别的功能，插件中命名空间域的资源属于 "),r("code",[e._v("kube-system")]),e._v(" 命名空间。")]),e._v(" "),r("h2",{attrs:{id:"五、pod"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#五、pod"}},[e._v("#")]),e._v(" 五、Pod")]),e._v(" "),r("p",[r("code",[e._v("Pod")]),e._v(" 是 Kubernetes 最重要的基本概念，我们看到每个 Pod 都有一个特殊的被称为“"),r("strong",[e._v("根容器")]),e._v("”的 Pause 容器。Pause 容器对应的镜像属于Kubernetes 平台的一部分，除了 Pause 容器，每个 Pod 还包含一个或多个紧密相关的用户业务容器。")]),e._v(" "),r("h2",{attrs:{id:"六、label"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#六、label"}},[e._v("#")]),e._v(" 六、Label")]),e._v(" "),r("p",[r("code",[e._v("Label")]),e._v("（标签）是Kubernetes 系统中另外一个核心概念。一个 Label 是一个 key=value 的键值对，其中 key 与v alue 由用户自己指定。")]),e._v(" "),r("p",[e._v("Label 可以被附加到各种资源对象上，例如 Node、Pod、Service、RC 等，一个资源对象可以定义任意数量的 Label，同一个 Label 也可以被添加到任意数量的资源对象上。Label 通常在资源对象定义时确定，也可以在对象创建后动态添加或者删除。")]),e._v(" "),r("h2",{attrs:{id:"七、replication-controller-rc"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#七、replication-controller-rc"}},[e._v("#")]),e._v(" 七、Replication Controller (RC)")]),e._v(" "),r("p",[r("font",{attrs:{color:"gray"}},[e._v("用来确保容器应用的副本数始终保持在用户定义的副本数，即如果有容器异常退出，会自动创建新的 Pod 来替代；而如果异常多出来的容器也会自动回收。在新版本的 Kubernetes 中建议使用 "),r("strong",[e._v("ReplicaSet")]),e._v(" 来取代 ReplicationController。")])],1),e._v(" "),r("h2",{attrs:{id:"八、replicaset-rs"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#八、replicaset-rs"}},[e._v("#")]),e._v(" 八、ReplicaSet (RS)")]),e._v(" "),r("p",[r("code",[e._v("ReplicaSet")]),e._v(" 跟 ReplicationController 没有本质的不同，只是名字不一样，并且 ReplicaSet 支持集合式的 selector。虽然 ReplicaSet 可以独立使用，但一般还是建议使用 "),r("strong",[e._v("Deployment")]),e._v(" 来自动管理 ReplicaSet ，这样就无需担心跟其他机制的不兼容问题（比如 ReplicaSet 不支持 "),r("strong",[e._v("rolling-update")]),e._v("，但 Deployment 支持）。")]),e._v(" "),r("h2",{attrs:{id:"九、deployment"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#九、deployment"}},[e._v("#")]),e._v(" 九、Deployment")]),e._v(" "),r("p",[r("code",[e._v("Deployment")]),e._v("为 Pod 和 ReplicaSet 提供了一个 "),r("strong",[e._v("声明式定义（declarative）方法")]),e._v("，用来替代以前的 ReplicationController 来方便的管理应用。典型的应用场景包括：")]),e._v(" "),r("ol",[r("li",[e._v("定义 Deployment 来创建 Pod 和 ReplicaSet")]),e._v(" "),r("li",[e._v("滚动升级和回滚应用")]),e._v(" "),r("li",[e._v("扩容和缩容")]),e._v(" "),r("li",[e._v("暂停和继续 Deployment")])]),e._v(" "),r("h2",{attrs:{id:"十、daemonset"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#十、daemonset"}},[e._v("#")]),e._v(" 十、DaemonSet")]),e._v(" "),r("p",[r("code",[e._v("DaemonSe")]),e._v("t 确保全部（或者一些） Node 上"),r("strong",[e._v("运行一个 Pod 的副本")]),e._v("。当有 Node 加入集群时，也会为他们新增一个 Pod 。当有 Node 从集群移除时，这些 Pod 也会被回收。")]),e._v(" "),r("p",[e._v("删除 DaemonSet 将会删除它创建的所有 Pod。")]),e._v(" "),r("p",[e._v("使用 DaemonSet 的一些典型用法：")]),e._v(" "),r("ol",[r("li",[e._v("运行集群存储 daemon ，例如在每个 Node 上运行 glusterd 、 ceph")]),e._v(" "),r("li",[e._v("在每个 Node 上运行日志收集 daemon ，例如 fluentd 、 logstash")]),e._v(" "),r("li",[e._v("在每个 Node 上运行监控 daemon ，例如 Prometheus Node Exporter")])]),e._v(" "),r("h2",{attrs:{id:"十一、horizontal-pod-autoscaling"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#十一、horizontal-pod-autoscaling"}},[e._v("#")]),e._v(" 十一、Horizontal Pod Autoscaling")]),e._v(" "),r("p",[r("code",[e._v("Horizontal Pod Autoscaling")]),e._v(" 仅适用于 Deployment 和 ReplicaSet ，在 V1 版本中仅支持根据 "),r("strong",[e._v("Pod 的 CPU 利用率")]),e._v("扩所容，在 v1alpha 版本中，支持根据"),r("strong",[e._v("内存和用户自定义的 metric")]),e._v(" 扩缩容。")]),e._v(" "),r("h2",{attrs:{id:"十二、statefulset"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#十二、statefulset"}},[e._v("#")]),e._v(" 十二、StatefulSet")]),e._v(" "),r("p",[r("code",[e._v("StatefulSet")]),e._v(" 是为了解决"),r("strong",[e._v("有状态")]),e._v("服务的问题（对应 Deployments 和 ReplicaSets 是为无状态服务而设计），其应用场景包括：")]),e._v(" "),r("ol",[r("li",[r("strong",[e._v("稳定的持久化存储")]),e._v("，即 Pod 重新调度后还是能访问到相同的持久化数据，基于 "),r("strong",[e._v("PVC")]),e._v(" 来实现")]),e._v(" "),r("li",[r("strong",[e._v("稳定的网络标志")]),e._v("，即 Pod 重新调度后其 PodName 和 HostName 不变，基于 "),r("strong",[e._v("Headless Service")]),e._v("（即没有 Cluster IP 的 Service ）来实现")]),e._v(" "),r("li",[r("strong",[e._v("有序部署，有序扩展")]),e._v("，即 Pod 是有顺序的，在部署或者扩展的时候要依据定义的顺序依次依次进行（即从 0 到 N-1 ，在下一个 Pod 运行之前所有之前的 Pod 必须都是 Running 和 Ready 状态），基于 "),r("strong",[e._v("init containers")]),e._v(" 来实现")]),e._v(" "),r("li",[r("strong",[e._v("有序收缩，有序删除")]),e._v("（即从 N-1 到 0 0 ）")])]),e._v(" "),r("h2",{attrs:{id:"十三、job"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#十三、job"}},[e._v("#")]),e._v(" 十三、Job")]),e._v(" "),r("p",[e._v("Job 负责批处理任务，即仅执行一次的任务，它保证批处理任务的一个或多个 Pod 。")]),e._v(" "),r("h2",{attrs:{id:"十四、cronjob"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#十四、cronjob"}},[e._v("#")]),e._v(" 十四、CronJob")]),e._v(" "),r("p",[r("code",[e._v("CronJob")]),e._v(" 管理基于时间的 Job ，即：")]),e._v(" "),r("ol",[r("li",[e._v("在给定时间点只运行一次")]),e._v(" "),r("li",[e._v("周期性地在给定时间点运行")])]),e._v(" "),r("h2",{attrs:{id:"十五、configmap"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#十五、configmap"}},[e._v("#")]),e._v(" 十五、ConfigMap")]),e._v(" "),r("p",[r("code",[e._v("ConfigMap")]),e._v(" 功能在 Kubernetes1.2 版本中引入，许多应用程序会从配置文件、命令行参数或环境变量中读取配置信息。")]),e._v(" "),r("p",[e._v("ConfigMap API 给我们提供了向容器中注入配置信息的机制，"),r("code",[e._v("ConfigMap")]),e._v(" 可以被用来保存单个属性，也可以用来保存整个配置文件或者 JSON 二进制大对象。")]),e._v(" "),r("h2",{attrs:{id:"十六、secret"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#十六、secret"}},[e._v("#")]),e._v(" 十六、Secret")]),e._v(" "),r("p",[r("code",[e._v("Secret")]),e._v(" 解决了密码、token、密钥等敏感数据的配置问题，而不需要把这些敏感数据暴露到镜像或者 PodSpec 中。")]),e._v(" "),r("p",[r("code",[e._v("Secret")]),e._v(" 可以以 Volume 或者环境变量的方式使用。")]),e._v(" "),r("h2",{attrs:{id:"十七、volume"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#十七、volume"}},[e._v("#")]),e._v(" 十七、Volume")]),e._v(" "),r("p",[e._v("容器磁盘上的文件的生命周期是短暂的，这就使得在容器中运行重要应用时会出现一些问题。")]),e._v(" "),r("p",[e._v("首先，当容器崩溃时，kubelet 会重启它，但是容器中的文件将丢失——容器以干净的状态（镜像最初的状态）重新启动。")]),e._v(" "),r("p",[e._v("其次，在 Pod 中同时运行多个容器时，这些容器之间通常需要共享文件。")]),e._v(" "),r("p",[e._v("Kubernetes 中的 Volume 就很好的解决了这些问题。")]),e._v(" "),r("h2",{attrs:{id:"十八、persistentvolume-pv"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#十八、persistentvolume-pv"}},[e._v("#")]),e._v(" 十八、PersistentVolume (PV)")]),e._v(" "),r("p",[r("code",[e._v("PersistentVolume")]),e._v(" 是由管理员设置的存储，它是群集的一部分。就像节点是集群中的资源一样，PV 也是集群中的资源。")]),e._v(" "),r("p",[e._v("PV 是 Volume 之类的卷插件，但具有独立于使用 PV 的 Pod 的生命周期。此 API 对象包含存储实现的细节，即 NFS、iSCSI 或特定于云供应商的存储系统。")]),e._v(" "),r("h2",{attrs:{id:"十九、persistentvolumeclain-pvc"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#十九、persistentvolumeclain-pvc"}},[e._v("#")]),e._v(" 十九、PersistentVolumeClain (PVC)")]),e._v(" "),r("p",[r("code",[e._v("PersistentVolumeClaim")]),e._v(" 是用户存储的请求。它与 Pod 相似。")]),e._v(" "),r("p",[e._v("Pod 消耗"),r("strong",[e._v("节点")]),e._v("资源，PVC 消耗 "),r("strong",[e._v("PV")]),e._v(" 资源。Pod 可以请求特定级别的资源（CPU 和内存）。PVC 可以请求特定的大小和访问模式（例如，可以以读/写一次或只读多次模式挂载）。")]),e._v(" "),r("h2",{attrs:{id:"二十、service"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#二十、service"}},[e._v("#")]),e._v(" 二十、Service")]),e._v(" "),r("p",[e._v("Service 是 Kubernetes 的核心概念，通过创建Service，可以为一组具有相同功能的容器应用提供一个统一的入口地址，并且将请求负载分发到后端的各个容器应用上。")]),e._v(" "),r("h2",{attrs:{id:"二十一、namespace"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#二十一、namespace"}},[e._v("#")]),e._v(" 二十一、NameSpace")]),e._v(" "),r("p",[r("code",[e._v("Namespace")]),e._v("（命名空间）是 Kubernetes 系统中的另一个非常重要的概念，Namespace 在很多情况下用于实现多租户的资源隔离。")])])}),[],!1,null,null,null);t.default=o.exports}}]);
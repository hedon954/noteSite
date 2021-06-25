(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{377:function(e,v,_){"use strict";_.r(v);var t=_(44),r=Object(t.a)({},(function(){var e=this,v=e.$createElement,_=e._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[_("h1",{attrs:{id:"kubernetes-集群"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#kubernetes-集群"}},[e._v("#")]),e._v(" Kubernetes 集群")]),e._v(" "),_("p",[e._v("本节介绍一下 Kebernetes 的集群架构：")]),e._v(" "),_("h2",{attrs:{id:"一、nodes"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#一、nodes"}},[e._v("#")]),e._v(" 一、Nodes")]),e._v(" "),_("p",[e._v("Kubernetes 通过将容器放入在节点（Node）上运行的 Pod 中来执行你的工作负载。 节点可以是一个虚拟机或者物理机器，取决于所在的集群配置。 每个节点包含运行 Pods 所需的服务； 这些节点由 "),_("code",[e._v("Control Plane")]),e._v(" 负责管理。")]),e._v(" "),_("p",[e._v("通常集群中会有若干个节点；而在一个学习用或者资源受限的环境中，你的集群中也可能只有一个节点。")]),e._v(" "),_("p",[e._v("节点上的组件包括 "),_("strong",[e._v("kubelet")]),e._v("、"),_("strong",[e._v("container-runtime")]),e._v(" 以及 "),_("strong",[e._v("kube-proxy")]),e._v("。")]),e._v(" "),_("h3",{attrs:{id:"_1-管理节点"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-管理节点"}},[e._v("#")]),e._v(" 1. 管理节点")]),e._v(" "),_("p",[e._v("向 "),_("strong",[e._v("kube-apiserver")]),e._v(" 添加节点的方式主要有两种：")]),e._v(" "),_("ol",[_("li",[e._v("节点上的 "),_("code",[e._v("kubelet")]),e._v(" 向控制面执行自注册")]),e._v(" "),_("li",[e._v("手动添加一个 Node 对象")])]),e._v(" "),_("p",[e._v("在创建了 Node 对象或者节点上的 "),_("code",[e._v("kubelet")]),e._v(" 执行了自注册操作之后， 控制面会检查新的 Node 对象是否合法。例如，如果使用下面的 JSON 对象来创建 Node 对象：")]),e._v(" "),_("div",{staticClass:"language-json extra-class"},[_("pre",{pre:!0,attrs:{class:"language-json"}},[_("code",[_("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),_("span",{pre:!0,attrs:{class:"token property"}},[e._v('"kind"')]),_("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),_("span",{pre:!0,attrs:{class:"token string"}},[e._v('"Node"')]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),_("span",{pre:!0,attrs:{class:"token property"}},[e._v('"apiVersion"')]),_("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),_("span",{pre:!0,attrs:{class:"token string"}},[e._v('"v1"')]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),_("span",{pre:!0,attrs:{class:"token property"}},[e._v('"metadata"')]),_("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),_("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    "),_("span",{pre:!0,attrs:{class:"token property"}},[e._v('"name"')]),_("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),_("span",{pre:!0,attrs:{class:"token string"}},[e._v('"10.240.79.157"')]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    "),_("span",{pre:!0,attrs:{class:"token property"}},[e._v('"labels"')]),_("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),_("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n      "),_("span",{pre:!0,attrs:{class:"token property"}},[e._v('"name"')]),_("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),_("span",{pre:!0,attrs:{class:"token string"}},[e._v('"my-first-k8s-node"')]),e._v("\n    "),_("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n  "),_("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),_("p",[e._v("Kubernetes 会在内部创建一个 Node 对象作为节点的表示。Kubernetes 检查 "),_("code",[e._v("kubelet")]),e._v(" 向 API 服务器注册节点时使用的 "),_("code",[e._v("metadata.name")]),e._v(" 字段是否匹配。 如果节点是健康的（即所有必要的服务都在运行中），则该节点可以用来运行 Pod。 否则，直到该节点变为健康之前，所有的集群活动都会忽略该节点。")]),e._v(" "),_("blockquote",[_("p",[e._v("Kubernetes 会一直保存着非法节点对应的对象，并持续检查该节点是否已经 变得健康。 必需显式地删除该 Node 对象以停止健康检查操作。")])]),e._v(" "),_("p",[_("strong",[e._v("1.1 节点自注册")])]),e._v(" "),_("p",[e._v("当 kubelet 标志 "),_("code",[e._v("--register-node")]),e._v(" 为 true（默认）时，它会尝试向 API Server 注册自己。 这是首选模式，被绝大多数发行版选用。")]),e._v(" "),_("p",[e._v("对于自注册模式，kubelet 使用下列参数启动：")]),e._v(" "),_("ul",[_("li",[_("code",[e._v("--kubeconfig")]),e._v(": 用于向 API 服务器表明身份的凭据路径。")]),e._v(" "),_("li",[_("code",[e._v("--cloud-provider")]),e._v(": 与云驱动进行通信以读取与自身相关的元数据的方式。")]),e._v(" "),_("li",[_("code",[e._v("--register-node")]),e._v(" : 自动向 API Server 注册。")]),e._v(" "),_("li",[_("code",[e._v("--register-with-taints")]),e._v(" : 使用所给的污点列表（逗号分隔的 "),_("code",[e._v("<key>=<value>:<effect>")]),e._v("）注册节点。 当 "),_("code",[e._v("register-node")]),e._v(" 为 false 时无效。")]),e._v(" "),_("li",[_("code",[e._v("--node-ip")]),e._v(": 节点 IP 地址。")]),e._v(" "),_("li",[_("code",[e._v("--node-labels")]),e._v(": 在集群中注册节点时要添加的标签。")]),e._v(" "),_("li",[_("code",[e._v("--node-status-update-frequency")]),e._v(": 指定 kubelet 向控制面发送状态的频率。")])]),e._v(" "),_("p",[_("strong",[e._v("1.2 手动管理节点")])]),e._v(" "),_("p",[e._v("可以使用 "),_("strong",[e._v("kubectl")]),e._v(" 来创建和修改 Node 对象。")]),e._v(" "),_("p",[e._v("如果你希望手动创建节点对象时，请设置 kubelet 标志 "),_("code",[e._v("--register-node=false")]),e._v("。")]),e._v(" "),_("p",[e._v("你可以修改 Node 对象（忽略 "),_("code",[e._v("--register-node")]),e._v(" 设置）。 例如，修改节点上的标签或标记其为不可调度。")]),e._v(" "),_("p",[e._v("你可以结合使用节点上的标签和 Pod 上的选择算符来控制调度。 例如，你可以限制某 Pod 只能在符合要求的节点子集上运行。")]),e._v(" "),_("p",[e._v("如果标记节点为不可调度（unschedulable），将阻止新 Pod 调度到该节点之上，但不会影响任何已经在其上的 Pod。 这是重启节点或者执行其他维护操作之前的一个有用的准备步骤。")]),e._v(" "),_("p",[e._v("要标记一个节点为不可调度，执行以下命令：")]),e._v(" "),_("div",{staticClass:"language-shell extra-class"},[_("pre",{pre:!0,attrs:{class:"language-shell"}},[_("code",[e._v("kubectl cordon "),_("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$NODENAME")]),e._v("\n")])])]),_("blockquote",[_("p",[e._v("被 "),_("strong",[e._v("DaemonSet")]),e._v(" 控制器创建的 Pod 能够容忍节点的不可调度属性。 DaemonSet 通常提供节点本地的服务，即使节点上的负载应用已经被腾空，这些服务也仍需 运行在节点之上。")])]),e._v(" "),_("h3",{attrs:{id:"_2-节点状态"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-节点状态"}},[e._v("#")]),e._v(" 2. 节点状态")]),e._v(" "),_("p",[e._v("查看节点信息：")]),e._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[e._v("kubectl describle node $NODENAME\n")])])]),_("p",[e._v("主要包含 4 个部分：")]),e._v(" "),_("ul",[_("li",[e._v("地址")]),e._v(" "),_("li",[e._v("状况")]),e._v(" "),_("li",[e._v("容量与可分配")]),e._v(" "),_("li",[e._v("信息")])]),e._v(" "),_("p",[_("strong",[e._v("2.1 地址")])]),e._v(" "),_("ul",[_("li",[e._v("HostName：由节点的内核设置。可以通过 kubelet 的 "),_("code",[e._v("--hostname-override")]),e._v(" 参数覆盖。")]),e._v(" "),_("li",[e._v("ExternalIP：通常是节点的可外部路由（从集群外可访问）的 IP 地址。")]),e._v(" "),_("li",[e._v("InternalIP：通常是节点的仅可在集群内部路由的 IP 地址。")])]),e._v(" "),_("p",[_("strong",[e._v("2.2 状况")])]),e._v(" "),_("p",[_("code",[e._v("conditions")]),e._v(" 字段描述了所有 "),_("code",[e._v("Running")]),e._v(" 节点的状态。状况的示例包括：")]),e._v(" "),_("table",[_("thead",[_("tr",[_("th",[e._v("节点状况")]),e._v(" "),_("th",[e._v("描述")])])]),e._v(" "),_("tbody",[_("tr",[_("td",[e._v("Ready")]),e._v(" "),_("td",[e._v("如节点是健康的并已经准备好接收 Pod 则为 "),_("code",[e._v("True")]),e._v("；"),_("code",[e._v("False")]),e._v(" 表示节点不健康而且不能接收 Pod；"),_("code",[e._v("Unknown")]),e._v(" 表示节点控制器在最近 "),_("code",[e._v("node-monitor-grace-period")]),e._v(" 期间（默认 40 秒）没有收到节点的消息")])]),e._v(" "),_("tr",[_("td",[e._v("DiskPressure")]),e._v(" "),_("td",[_("code",[e._v("True")]),e._v(" 表示节点的空闲空间不足以用于添加新 Pod, 否则为 "),_("code",[e._v("False")])])]),e._v(" "),_("tr",[_("td",[e._v("MemoryPressure")]),e._v(" "),_("td",[_("code",[e._v("True")]),e._v(" 表示节点存在内存压力，即节点内存可用量低，否则为 "),_("code",[e._v("False")])])]),e._v(" "),_("tr",[_("td",[e._v("PIDPressure")]),e._v(" "),_("td",[_("code",[e._v("True")]),e._v(" 表示节点存在进程压力，即节点上进程过多；否则为 "),_("code",[e._v("False")])])]),e._v(" "),_("tr",[_("td",[e._v("NetworkUnavailable")]),e._v(" "),_("td",[_("code",[e._v("True")]),e._v(" 表示节点网络配置不正确；否则为 "),_("code",[e._v("False")])])])])]),e._v(" "),_("p",[e._v("节点生命周期控制器会自动创建代表状况的 "),_("strong",[e._v("污点")]),e._v("。 当调度器将 Pod 指派给某节点时，会考虑节点上的污点。 Pod 则可以通过容忍度（"),_("strong",[e._v("Toleration")]),e._v("）表达所能容忍的污点。")]),e._v(" "),_("p",[_("strong",[e._v("2.3 容量与可分配")])]),e._v(" "),_("p",[e._v("描述节点上的可用资源：CPU、内存和可以调度到节点上的 Pod 的个数上限。")]),e._v(" "),_("ul",[_("li",[_("p",[_("code",[e._v("capacity")]),e._v(": 块中的字段标示节点拥有的资源总量。")])]),e._v(" "),_("li",[_("p",[_("code",[e._v("allocatable")]),e._v(": 块指示节点上可供普通 Pod 消耗的资源量。")])])]),e._v(" "),_("p",[_("strong",[e._v("2.4 信息")])]),e._v(" "),_("p",[e._v("关于节点的一般性信息，例如内核版本、Kubernetes 版本（"),_("code",[e._v("kubelet")]),e._v(" 和 "),_("code",[e._v("kube-proxy")]),e._v(" 版本）、 Docker 版本（如果使用了）和操作系统名称。这些信息由 "),_("code",[e._v("kubelet")]),e._v(" 从节点上搜集而来。")]),e._v(" "),_("h3",{attrs:{id:"_3-节点控制器"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_3-节点控制器"}},[e._v("#")]),e._v(" 3. 节点控制器")]),e._v(" "),_("p",[e._v("Node Controller 是 Kubernetes 控制面组件，管理节点的方方面面。")]),e._v(" "),_("ol",[_("li",[e._v("当节点注册时为它分配一个 CIDR 区段（如果启用了 CIDR 分配）。")]),e._v(" "),_("li",[e._v("保持节点控制器内的节点列表与云服务商所提供的可用机器列表同步。 如果在云环境下运行，只要某节点不健康，节点控制器就会询问云服务是否节点的虚拟机仍可用。 如果不可用，节点控制器会将该节点从它的节点列表删除。")]),e._v(" "),_("li",[e._v("监控节点的健康情况。节点控制器负责在节点不可达 （即，节点控制器因为某些原因没有收到心跳，例如节点宕机）时， 将节点状态的 "),_("code",[e._v("NodeReady")]),e._v(' 状况更新为 "'),_("code",[e._v("Unknown")]),e._v('"。 如果节点接下来持续处于不可达状态，节点控制器将逐出节点上的所有 Pod（使用体面终止）。 默认情况下 40 秒后开始报告 "'),_("code",[e._v("Unknown")]),e._v('"，在那之后 5 分钟开始逐出 Pod。')])]),e._v(" "),_("p",[e._v("节点控制器每隔 "),_("code",[e._v("--node-monitor-period")]),e._v(" 秒检查每个节点的状态。")]),e._v(" "),_("h3",{attrs:{id:"_4-心跳机制"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_4-心跳机制"}},[e._v("#")]),e._v(" 4. 心跳机制")]),e._v(" "),_("p",[e._v("Kubernetes 节点发送的心跳（Heartbeats）有助于确定节点的可用性。 心跳有两种形式："),_("strong",[e._v("NodeStatus")]),e._v(" 和 "),_("strong",[e._v("Lease")]),e._v(" 对象。 每个节点在 "),_("code",[e._v("kube-node-lease")]),e._v(" 名字空间中都有一个与之关联的 "),_("strong",[e._v("Lease")]),e._v(" 对象。 "),_("strong",[e._v("Lease")]),e._v(" 是一种轻量级的资源，可在集群规模扩大时提高节点心跳机制的性能。")]),e._v(" "),_("p",[_("code",[e._v("kubelet")]),e._v(" 负责创建和更新 "),_("code",[e._v("NodeStatus")]),e._v(" 和 "),_("code",[e._v("Lease")]),e._v(" 对象。")]),e._v(" "),_("ul",[_("li",[e._v("当状态发生变化时，或者在配置的时间间隔内没有更新事件时，kubelet 会更新 "),_("code",[e._v("NodeStatus")]),e._v("。 "),_("code",[e._v("NodeStatus")]),e._v(" 更新的默认间隔为 "),_("strong",[e._v("5 分钟")]),e._v("（比不可达节点的 40 秒默认超时时间长很多）。")]),e._v(" "),_("li",[_("code",[e._v("kubelet")]),e._v(" 会每 10 秒（默认更新间隔时间）创建并更新其 "),_("code",[e._v("Lease")]),e._v(" 对象。 "),_("code",[e._v("Lease")]),e._v(" 更新独立于 "),_("code",[e._v("NodeStatus")]),e._v(" 更新而发生。 如果 "),_("code",[e._v("Lease")]),e._v(" 的更新操作失败，"),_("code",[e._v("kubelet")]),e._v(" 会采用指数回退机制，从 200 毫秒开始 重试，最长重试间隔为 7 秒钟。")])]),e._v(" "),_("h3",{attrs:{id:"_5-节点体面关闭"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_5-节点体面关闭"}},[e._v("#")]),e._v(" 5. 节点体面关闭")]),e._v(" "),_("p",[e._v("kubelet 会尝试检测节点系统关闭事件并终止在节点上运行的 Pods。")]),e._v(" "),_("p",[e._v("在节点终止期间，kubelet 保证 Pod 遵从常规的 "),_("strong",[e._v("Pod 终止流程")]),e._v("。")]),e._v(" "),_("p",[e._v("体面节点关闭特性依赖于 systemd，因为它要利用 "),_("strong",[e._v("systemd 抑制器锁")]),e._v("在给定的期限内延迟节点关闭。")]),e._v(" "),_("p",[e._v("体面节点关闭特性受 "),_("code",[e._v("GracefulNodeShutdown")]),e._v(" 特性门控控制，在 1.21 版本中是默认启用的。")]),e._v(" "),_("p",[e._v("注意，默认情况下，下面描述的两个配置选项，"),_("code",[e._v("ShutdownGracePeriod")]),e._v(" 和"),_("code",[e._v("ShutdownGracePeriodCriticalPods")]),e._v(" 都是被设置为 0 的，因此不会激活体面节点关闭功能。 要激活此功能特性，这两个 kubelet 配置选项要适当配置，并设置为非零值。")]),e._v(" "),_("p",[e._v("在体面关闭节点过程中，kubelet 分"),_("strong",[e._v("两个阶段")]),e._v("来终止 Pods：")]),e._v(" "),_("ol",[_("li",[e._v("终止在节点上运行的"),_("strong",[e._v("常规 Pod")]),e._v("。")]),e._v(" "),_("li",[e._v("终止在节点上运行的"),_("strong",[e._v("关键 Pod")]),e._v("。")])]),e._v(" "),_("p",[e._v("节点体面关闭的特性对应两个 KubeletConfiguration 选项：")]),e._v(" "),_("ul",[_("li",[e._v("ShutdownGracePeriod\n"),_("ul",[_("li",[e._v("指定节点应延迟关闭的总持续时间。此时间是 Pod 体面终止的时间总和，不区分常规 Pod 还是关键 Pod。")])])]),e._v(" "),_("li",[e._v("ShutdownGracePeriodCriticalPods\n"),_("ul",[_("li",[e._v("在节点关闭期间指定用于终止 "),_("strong",[e._v("关键 Pod")]),e._v(" 的持续时间。该值应小于 "),_("code",[e._v("ShutdownGracePeriod")]),e._v("。")])])])]),e._v(" "),_("p",[e._v("例如，如果设置了 "),_("code",[e._v("ShutdownGracePeriod=30s")]),e._v(" 和 "),_("code",[e._v("ShutdownGracePeriodCriticalPods=10s")]),e._v("， 则 kubelet 将延迟 30 秒关闭节点。 在关闭期间，将保留前 20（30 - 10）秒用于体面终止常规 Pod， 而保留最后 10 秒用于终止关键 Pod。")]),e._v(" "),_("h2",{attrs:{id:"二、communication"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#二、communication"}},[e._v("#")]),e._v(" 二、Communication")]),e._v(" "),_("p",[e._v("本节列举控制面节点（确切说是 API Server）和 Kubernetes 集群之间的通信路径。")]),e._v(" "),_("h3",{attrs:{id:"_1-node-api-server"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-node-api-server"}},[e._v("#")]),e._v(" 1. Node - API Server")]),e._v(" "),_("p",[e._v("Kubernetes 采用的是中心辐射型（Hub-and-Spoke）API 模式。 所有从集群（或所运行的 Pods）发出的 API 调用都终止于 API Server。 其它控制面组件都没有被设计为可暴露远程服务。 API Server 被配置为在一个安全的 HTTPS 端口（通常为 443）上监听远程连接请求， 并启用一种或多种形式的客户端身份认证机制。")]),e._v(" "),_("h3",{attrs:{id:"_2-api-server-node"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-api-server-node"}},[e._v("#")]),e._v(" 2. API Server - Node")]),e._v(" "),_("p",[e._v("从控制面（API Server）到节点有两种主要的通信路径:")]),e._v(" "),_("ol",[_("li",[e._v("从 API Server 到集群中每个节点上运行的 kubelet 进程。")]),e._v(" "),_("li",[e._v("从 API Server 通过它的代理功能连接到任何节点、Pod 或者服务。")])]),e._v(" "),_("h3",{attrs:{id:"_3-api-server-kubelet"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_3-api-server-kubelet"}},[e._v("#")]),e._v(" 3. API Server - kubelet")]),e._v(" "),_("p",[e._v("从 API Serer 到 kubelet 的连接用于：")]),e._v(" "),_("ul",[_("li",[e._v("获取 Pod 日志")]),e._v(" "),_("li",[e._v("挂接（通过 kubectl）到运行中的 Pod")]),e._v(" "),_("li",[e._v("提供 kubelet 的端口转发功能。")])]),e._v(" "),_("p",[e._v("这些连接终止于 kubelet 的 HTTPS 末端。 默认情况下，API Server 不检查 kubelet 的服务证书。这使得此类连接容易受到中间人攻击， 在非受信网络或公开网络上运行也是 "),_("strong",[e._v("不安全的")]),e._v("。")]),e._v(" "),_("p",[e._v("为了对这个连接进行认证，使用 "),_("code",[e._v("--kubelet-certificate-authority")]),e._v(" 标志给 API Server 提供一个根证书包，用于 kubelet 的服务证书。")]),e._v(" "),_("p",[e._v("如果无法实现这点，又要求避免在非受信网络或公共网络上进行连接，可在 API Server 和 kubelet 之间使用 "),_("strong",[e._v("SSH 隧道")]),e._v("。")]),e._v(" "),_("p",[e._v("最后，应该启用 "),_("strong",[e._v("kubelet 用户认证和/或鉴权")]),e._v(" 来保护 kubelet API。")]),e._v(" "),_("h3",{attrs:{id:"_4-api-server-node-pod-service"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_4-api-server-node-pod-service"}},[e._v("#")]),e._v(" 4. API Server - Node/Pod/Service")]),e._v(" "),_("p",[e._v("从 API Server 到 Node、Pod 或 Service 的连接默认为"),_("strong",[e._v("纯 HTTP 方式")]),e._v("，因此既没有认证，也没有加密。 这些连接可通过给 API URL 中的Node、Pod 或 Service 名称添加前缀 "),_("code",[e._v("https:")]),e._v(" 来运行在安全的 HTTPS 连接上。 不过这些连接既不会验证 HTTPS 末端提供的证书，也不会提供客户端证书。 因此，虽然连接是加密的，仍无法提供任何完整性保证。 这些连接 "),_("strong",[e._v("目前还不能安全地")]),e._v(" 在非受信网络或公共网络上运行。")]),e._v(" "),_("h3",{attrs:{id:"_5-ssh-隧道"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_5-ssh-隧道"}},[e._v("#")]),e._v(" 5. SSH 隧道")]),e._v(" "),_("p",[e._v("Kubernetes 支持使用 SSH 隧道来保护从控制面到节点的通信路径。在这种配置下，API Server 建立一个到集群中各节点的 SSH 隧道（连接到在 22 端口监听的 SSH 服务） 并通过这个隧道传输所有到 kubelet、节点、Pod 或服务的请求。 这一隧道保证通信不会被暴露到集群节点所运行的网络之外。")]),e._v(" "),_("p",[e._v("SSH 隧道目前"),_("font",{attrs:{color:"red"}},[e._v("已被废弃")]),e._v("。除非你了解个中细节，否则不应使用。 Konnectivity 服务是对此通信通道的替代品。")],1),e._v(" "),_("h3",{attrs:{id:"_6-konnectivity-服务"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_6-konnectivity-服务"}},[e._v("#")]),e._v(" 6. Konnectivity 服务")]),e._v(" "),_("p",[e._v("作为 SSH 隧道的替代方案，Konnectivity 服务提供 TCP 层的代理，以便支持从控制面到集群的通信。 Konnectivity 服务包含两个部分：")]),e._v(" "),_("ul",[_("li",[e._v("Konnectivity 服务器")]),e._v(" "),_("li",[e._v("Konnectivity 代理")])]),e._v(" "),_("p",[e._v("分别运行在 "),_("strong",[e._v("控制面网络")]),e._v(" 和 "),_("strong",[e._v("节点网络")]),e._v(" 中。")]),e._v(" "),_("p",[e._v("Konnectivity 代理建立并维持到 Konnectivity 服务器的网络连接。 启用 Konnectivity 服务之后，所有控制面到节点的通信都通过这些连接传输。")]),e._v(" "),_("h2",{attrs:{id:"三、controllers"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#三、controllers"}},[e._v("#")]),e._v(" 三、Controllers")]),e._v(" "),_("p",[e._v("一个 "),_("strong",[e._v("Controller")]),e._v(" 至少追踪一种类型的 Kubernetes 资源。这些 "),_("strong",[e._v("对象")]),e._v(" 有一个代表期望状态的 "),_("code",[e._v("spec")]),e._v(" 字段。 该资源的控制器负责确保其当前状态接近期望状态。")]),e._v(" "),_("h2",{attrs:{id:"四、cloud-controller-manager"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#四、cloud-controller-manager"}},[e._v("#")]),e._v(" 四、Cloud Controller Manager")]),e._v(" "),_("p",[e._v("使用云基础设施技术，你可以在公有云、私有云或者混合云环境中运行 Kubernetes。 Kubernetes 的信条是基于自动化的、API 驱动的基础设施，同时避免组件间紧密耦合。")]),e._v(" "),_("p",[e._v("组件 cloud-controller-manager 是指云控制器管理器， 云控制器管理器是指嵌入特定云的控制逻辑的 "),_("strong",[e._v("Control Plane")]),e._v(" 组件。 云控制器管理器允许您链接集群到云提供商的应用编程接口中， 并把和该云平台交互的组件与只和您的集群交互的组件分离开。")]),e._v(" "),_("p",[e._v("通过分离 Kubernetes 和底层云基础设置之间的互操作性逻辑， 云控制器管理器组件使云提供商能够以不同于 Kubernetes 主项目的速度进行发布新特征。")]),e._v(" "),_("p",[_("code",[e._v("cloud-controller-manager")]),e._v(" 组件是基于一种插件机制来构造的， 这种机制使得不同的云厂商都能将其平台与 Kubernetes 集成。")])])}),[],!1,null,null,null);v.default=r.exports}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[140],{554:function(t,e,a){"use strict";a.r(e);var s=a(47),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"daemonset"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#daemonset"}},[t._v("#")]),t._v(" DaemonSet")]),t._v(" "),a("p",[t._v("DaemonSet 确保全部（或者某些）节点上运行一个 Pod 的副本。 当有节点加入集群时， 也会为他们新增一个 Pod 。 当有节点从集群移除时，这些 Pod 也会被回收。删除 DaemonSet 将会删除它创建的所有 Pod。")]),t._v(" "),a("p",[t._v("DaemonSet 的一些典型用法：")]),t._v(" "),a("ul",[a("li",[t._v("在每个节点上运行集群守护进程")]),t._v(" "),a("li",[t._v("在每个节点上运行日志收集守护进程")]),t._v(" "),a("li",[t._v("在每个节点上运行监控守护进程")])]),t._v(" "),a("p",[t._v("一种简单的用法是为每种类型的守护进程在所有的节点上都启动一个 DaemonSet。 一个稍微复杂的用法是为同一种守护进程部署多个 DaemonSet；每个具有不同的标志， 并且对不同硬件类型具有不同的内存、CPU 要求。")]),t._v(" "),a("p",[t._v("DaemonSet 控制器的特点：")]),t._v(" "),a("ul",[a("li",[t._v("每向集群中添加一个 Node 的时候，指定的 Pod 副本也将添加到该节点上")]),t._v(" "),a("li",[t._v("当 Node 从集群中移除的时候，Pod 也会被垃圾回收。")])]),t._v(" "),a("h2",{attrs:{id:"一、daemonset-模板"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、daemonset-模板"}},[t._v("#")]),t._v(" 一、DaemonSet 模板")]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("apiVersion")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" apps/v1\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("kind")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" DaemonSet\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("metadata")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" fluentd"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("elasticsearch\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("namespace")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" kube"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("system\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("labels")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("k8s-app")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" fluentd"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("logging\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("spec")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("selector")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("matchLabels")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" fluentd"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("elasticsearch\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("template")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("metadata")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("labels")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" fluentd"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("elasticsearch\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("spec")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("tolerations")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# this toleration is to have the daemonset runnable on master nodes")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# remove it if your masters can't run pods")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("key")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" node"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("role.kubernetes.io/master\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("effect")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" NoSchedule\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("containers")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" fluentd"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("elasticsearch\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("image")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" quay.io/fluentd_elasticsearch/fluentd"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("v2.5.2\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("resources")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("limits")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("memory")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 200Mi\n          "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("requests")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("cpu")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 100m\n            "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("memory")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 200Mi\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("volumeMounts")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" varlog\n          "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("mountPath")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" /var/log\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" varlibdockercontainers\n          "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("mountPath")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" /var/lib/docker/containers\n          "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("readOnly")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("terminationGracePeriodSeconds")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("30")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("volumes")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" varlog\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("hostPath")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("path")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" /var/log\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" varlibdockercontainers\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("hostPath")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("path")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" /var/lib/docker/containers\n")])])]),a("p",[t._v("基于 YAML 文件创建 DaemonSet：")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("kubectl apply -f https://k8s.io/examples/controllers/daemonset.yaml\n")])])]),a("h2",{attrs:{id:"二、daemonset-调度"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二、daemonset-调度"}},[t._v("#")]),t._v(" 二、DaemonSet 调度")]),t._v(" "),a("p",[t._v("DaemonSet 确保所有符合条件的节点都运行该 Pod 的一个副本。")]),t._v(" "),a("p",[t._v("通常，运行 Pod 的节点由 Kubernetes 调度器选择。 不过，DaemonSet Pods 由 DaemonSet 控制器创建和调度。这就带来了以下问题：")]),t._v(" "),a("ul",[a("li",[t._v("Pod 行为的不一致性：正常 Pod 在被创建后等待调度时处于 "),a("code",[t._v("Pending")]),t._v(" 状态， DaemonSet Pods 创建后不会处于 "),a("code",[t._v("Pending")]),t._v(" 状态下。这使用户感到困惑。")]),t._v(" "),a("li",[t._v("Pod 抢占由默认调度器处理。启用抢占后，DaemonSet 控制器将在不考虑 Pod 优先级和抢占的情况下制定调度决策。")])]),t._v(" "),a("p",[a("code",[t._v("ScheduleDaemonSetPods")]),t._v(" 允许您使用默认调度器而不是 DaemonSet 控制器来调度 DaemonSets， 方法是将 "),a("code",[t._v("NodeAffinity")]),t._v(" 条件而不是 "),a("code",[t._v(".spec.nodeName")]),t._v(" 条件添加到 DaemonSet Pods。 默认调度器接下来将 Pod 绑定到目标主机。 如果 DaemonSet Pod 的节点亲和性配置已存在，则被替换。 DaemonSet 控制器仅在创建或修改 DaemonSet Pod 时执行这些操作， 并且不会更改 DaemonSet 的 "),a("code",[t._v("spec.template")]),t._v("。")]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("nodeAffinity")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("requiredDuringSchedulingIgnoredDuringExecution")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("nodeSelectorTerms")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("matchFields")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("key")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" metadata.name\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("operator")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" In\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("values")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" target"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("host"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("name\n")])])]),a("p",[t._v("此外，系统会自动添加 "),a("code",[t._v("node.kubernetes.io/unschedulable：NoSchedule")]),t._v(" 容忍度到 DaemonSet Pods。在调度 DaemonSet Pod 时，默认调度器会忽略 "),a("code",[t._v("unschedulable")]),t._v(" 节点。")]),t._v(" "),a("p",[a("strong",[t._v("污点和容忍度")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("容忍度键名")]),t._v(" "),a("th",[t._v("效果")]),t._v(" "),a("th",[t._v("版本")]),t._v(" "),a("th",[t._v("描述")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("code",[t._v("node.kubernetes.io/not-ready")])]),t._v(" "),a("td",[t._v("NoExecute")]),t._v(" "),a("td",[t._v("1.13+")]),t._v(" "),a("td",[t._v("当出现类似网络断开的情况导致节点问题时，DaemonSet Pod 不会被逐出。")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("node.kubernetes.io/unreachable")])]),t._v(" "),a("td",[t._v("NoExecute")]),t._v(" "),a("td",[t._v("1.13+")]),t._v(" "),a("td",[t._v("当出现类似于网络断开的情况导致节点问题时，DaemonSet Pod 不会被逐出。")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("node.kubernetes.io/disk-pressure")])]),t._v(" "),a("td",[t._v("NoSchedule")]),t._v(" "),a("td",[t._v("1.8+")]),t._v(" "),a("td",[t._v("DaemonSet Pod 被默认调度器调度时能够容忍磁盘压力属性。")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("node.kubernetes.io/memory-pressure")])]),t._v(" "),a("td",[t._v("NoSchedule")]),t._v(" "),a("td",[t._v("1.8+")]),t._v(" "),a("td",[t._v("DaemonSet Pod 被默认调度器调度时能够容忍内存压力属性。")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("node.kubernetes.io/unschedulable")])]),t._v(" "),a("td",[t._v("NoSchedule")]),t._v(" "),a("td",[t._v("1.12+")]),t._v(" "),a("td",[t._v("DaemonSet Pod 能够容忍默认调度器所设置的 "),a("code",[t._v("unschedulable")]),t._v(" 属性.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("node.kubernetes.io/network-unavailable")])]),t._v(" "),a("td",[t._v("NoSchedule")]),t._v(" "),a("td",[t._v("1.12+")]),t._v(" "),a("td",[t._v("DaemonSet 在使用宿主网络时，能够容忍默认调度器所设置的 "),a("code",[t._v("network-unavailable")]),t._v(" 属性。")])])])]),t._v(" "),a("h2",{attrs:{id:"三、daemonset-通信"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三、daemonset-通信"}},[t._v("#")]),t._v(" 三、DaemonSet 通信")]),t._v(" "),a("p",[t._v("与 DaemonSet 中的 Pod 进行通信的几种可能模式如下：")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("推送（Push）")]),t._v("：配置 DaemonSet 中的 Pod，将更新发送到另一个服务，例如统计数据库。 这些服务没有客户端。")]),t._v(" "),a("li",[a("strong",[t._v("NodeIP 和已知端口")]),t._v("：DaemonSet 中的 Pod 可以使用 "),a("code",[t._v("hostPort")]),t._v("，从而可以通过节点 IP 访问到 Pod。客户端能通过某种方法获取节点 IP 列表，并且基于此也可以获取到相应的端口。")]),t._v(" "),a("li",[a("strong",[t._v("DNS")]),t._v("：创建具有相同 Pod 选择算符的 "),a("a",{attrs:{href:"https://kubernetes.io/zh/docs/concepts/services-networking/service/#headless-services",target:"_blank",rel:"noopener noreferrer"}},[t._v("无头服务"),a("OutboundLink")],1),t._v("， 通过使用 "),a("code",[t._v("endpoints")]),t._v(" 资源或从 DNS 中检索到多个 A 记录来发现 DaemonSet。")]),t._v(" "),a("li",[a("strong",[t._v("Service")]),t._v("：创建具有相同 Pod 选择算符的服务，并使用该服务随机访问到某个节点上的 守护进程（没有办法访问到特定节点）。")])]),t._v(" "),a("h2",{attrs:{id:"四、daemonset-更新"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#四、daemonset-更新"}},[t._v("#")]),t._v(" 四、DaemonSet 更新")]),t._v(" "),a("p",[t._v("如果节点的标签被修改，DaemonSet 将立刻向新匹配上的节点添加 Pod， 同时删除不匹配的节点上的 Pod。")]),t._v(" "),a("p",[t._v("你可以修改 DaemonSet 创建的 Pod。不过并非 Pod 的所有字段都可更新。 下次当某节点（即使具有相同的名称）被创建时，DaemonSet 控制器还会使用最初的模板。")]),t._v(" "),a("p",[t._v("您可以删除一个 DaemonSet。如果使用 "),a("code",[t._v("kubectl")]),t._v(" 并指定 "),a("code",[t._v("--cascade=false")]),t._v(" 选项， 则 Pod 将被保留在节点上。接下来如果创建使用相同选择算符的新 DaemonSet， 新的 DaemonSet 会收养已有的 Pod。 如果有 Pod 需要被替换，DaemonSet 会根据其 "),a("code",[t._v("updateStrategy")]),t._v(" 来替换。")]),t._v(" "),a("p",[t._v("你可以对 DaemonSet "),a("a",{attrs:{href:"https://kubernetes.io/zh/docs/tasks/manage-daemon/update-daemon-set/",target:"_blank",rel:"noopener noreferrer"}},[t._v("执行滚动更新"),a("OutboundLink")],1),t._v("操作。")])])}),[],!1,null,null,null);e.default=n.exports}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{443:function(t,e,a){"use strict";a.r(e);var s=a(47),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"statefulset"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#statefulset"}},[t._v("#")]),t._v(" StatefulSet")]),t._v(" "),a("p",[t._v("StatefulSet 是用来管理有状态应用的工作负载 API 对象。")]),t._v(" "),a("p",[t._v("StatefulSet 用来管理某 Pod 集合的部署和扩缩， 并为这些 Pod 提供"),a("strong",[t._v("持久存储")]),t._v("和"),a("strong",[t._v("持久标识符")]),t._v("。")]),t._v(" "),a("p",[t._v("和 Deployment 类似， StatefulSet 管理基于相同容器规约的一组 Pod。但和 Deployment 不同的是， StatefulSet 为它们的每个 Pod 维护了一个有粘性的 ID。这些 Pod 是基于相同的规约来创建的， 但是不能相互替换："),a("strong",[t._v("无论怎么调度，每个 Pod 都有一个永久不变的 ID")]),t._v("。")]),t._v(" "),a("p",[t._v("如果希望使用存储卷为工作负载提供持久存储，可以使用 StatefulSet 作为解决方案的一部分。 尽管 StatefulSet 中的单个 Pod 仍可能出现故障， 但持久的 Pod 标识符使得将现有卷与替换已失败 Pod 的新 Pod 相匹配变得更加容易。")]),t._v(" "),a("h2",{attrs:{id:"一、statefulset-场景"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、statefulset-场景"}},[t._v("#")]),t._v(" 一、StatefulSet 场景")]),t._v(" "),a("p",[t._v("StatefulSet 对于需要满足以下一个或多个需求的应用程序很有价值：")]),t._v(" "),a("ul",[a("li",[t._v("稳定的、唯一的网络标识符。")]),t._v(" "),a("li",[t._v("稳定的、持久的存储。")]),t._v(" "),a("li",[t._v("有序的、优雅的部署和缩放。")]),t._v(" "),a("li",[t._v("有序的、自动的滚动更新。")])]),t._v(" "),a("h2",{attrs:{id:"二、statefulset-限制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二、statefulset-限制"}},[t._v("#")]),t._v(" 二、StatefulSet 限制")]),t._v(" "),a("ul",[a("li",[t._v("给定 Pod 的存储必须由 "),a("a",{attrs:{href:"https://github.com/kubernetes/examples/tree/master/staging/persistent-volume-provisioning/README.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("PersistentVolume 驱动"),a("OutboundLink")],1),t._v(" 基于所请求的 "),a("code",[t._v("storage class")]),t._v(" 来提供，或者由管理员预先提供。")]),t._v(" "),a("li",[t._v("删除或者收缩 StatefulSet 并"),a("strong",[t._v("不会")]),t._v("删除它关联的存储卷。 这样做是为了保证数据安全，它通常比自动清除 StatefulSet 所有相关的资源更有价值。")]),t._v(" "),a("li",[t._v("StatefulSet 当前需要 "),a("a",{attrs:{href:"https://kubernetes.io/zh/docs/concepts/services-networking/service/#headless-services",target:"_blank",rel:"noopener noreferrer"}},[t._v("无头服务"),a("OutboundLink")],1),t._v(" 来负责 Pod 的网络标识。你需要负责创建此服务。")]),t._v(" "),a("li",[t._v("当删除 StatefulSet 时，StatefulSet 不提供任何终止 Pod 的保证。 为了实现 StatefulSet 中的 Pod 可以有序地且体面地终止，可以在删除之前将 StatefulSet 缩放为 0。")]),t._v(" "),a("li",[t._v("在默认 Pod 管理策略时使用滚动更新，可能进入需要人工干预才能修复的损坏状态。")])]),t._v(" "),a("h2",{attrs:{id:"三、statefulset-模板"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三、statefulset-模板"}},[t._v("#")]),t._v(" 三、StatefulSet 模板")]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("apiVersion")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" v1\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("kind")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Service\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("metadata")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" nginx\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("labels")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("app")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" nginx\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("spec")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("ports")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("port")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("80")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" web\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("clusterIP")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" None\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("selector")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("app")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" nginx\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("---")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("apiVersion")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" apps/v1\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("kind")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" StatefulSet\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("metadata")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" web\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("spec")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("selector")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("matchLabels")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("app")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" nginx "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# has to match .spec.template.metadata.labels")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("serviceName")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"nginx"')]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("replicas")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# by default is 1")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("template")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("metadata")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("labels")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("app")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" nginx "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# has to match .spec.selector.matchLabels")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("spec")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("terminationGracePeriodSeconds")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("containers")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" nginx\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("image")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" k8s.gcr.io/nginx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("slim"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.8")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("ports")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("containerPort")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("80")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" web\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("volumeMounts")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" www\n          "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("mountPath")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" /usr/share/nginx/html\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("volumeClaimTemplates")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("metadata")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" www\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("spec")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("accessModes")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ReadWriteOnce"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("storageClassName")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"my-storage-class"')]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("resources")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("requests")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("storage")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 1Gi\n")])])]),a("p",[t._v("上述例子中：")]),t._v(" "),a("ul",[a("li",[t._v("名为 "),a("code",[t._v("nginx")]),t._v(" 的 Headless Service 用来控制网络域名。")]),t._v(" "),a("li",[t._v("名为 "),a("code",[t._v("web")]),t._v(" 的 StatefulSet 有一个 Spec，它表明将在独立的 3 个 Pod 副本中启动 nginx 容器。")]),t._v(" "),a("li",[a("code",[t._v("volumeClaimTemplates")]),t._v(" 将通过 PersistentVolumes 驱动提供的 "),a("code",[t._v("PersistentVolumes")]),t._v(" 来提供稳定的存储。")])]),t._v(" "),a("p",[t._v("StatefulSet 的命名需要遵循 "),a("a",{attrs:{href:"https://kubernetes.io/zh/docs/concepts/workloads/controllers/statefulset/zh/docs/concepts/overview/working-with-objects/names#dns-subdomain-names",target:"_blank",rel:"noopener noreferrer"}},[t._v("DNS 子域名"),a("OutboundLink")],1),t._v(" 规范。")]),t._v(" "),a("h2",{attrs:{id:"四、statefulset-更新"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#四、statefulset-更新"}},[t._v("#")]),t._v(" 四、StatefulSet 更新")]),t._v(" "),a("p",[t._v("在 Kubernetes 1.7 及以后的版本中，StatefulSet 的 "),a("code",[t._v(".spec.updateStrategy")]),t._v(" 字段让 你可以配置和禁用掉自动滚动更新 Pod 的容器、标签、资源请求或限制、以及注解。")]),t._v(" "),a("h3",{attrs:{id:"滚动更新"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#滚动更新"}},[t._v("#")]),t._v(" 滚动更新")]),t._v(" "),a("p",[a("code",[t._v("RollingUpdate")]),t._v(" 更新策略对 StatefulSet 中的 Pod 执行自动的滚动更新。 在没有声明 "),a("code",[t._v(".spec.updateStrategy")]),t._v(" 时，"),a("code",[t._v("RollingUpdate")]),t._v(" 是默认配置。 当 StatefulSet 的 "),a("code",[t._v(".spec.updateStrategy.type")]),t._v(" 被设置为 "),a("code",[t._v("RollingUpdate")]),t._v(" 时， StatefulSet 控制器会删除和重建 StatefulSet 中的每个 Pod。 它将按照与 Pod 终止相同的顺序（从最大序号到最小序号）进行，每次更新一个 Pod。 它会等到被更新的 Pod 进入 Running 和 Ready 状态，然后再更新其前身。")]),t._v(" "),a("h2",{attrs:{id:"五、statefulset-删除"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#五、statefulset-删除"}},[t._v("#")]),t._v(" 五、StatefulSet 删除")]),t._v(" "),a("p",[a("code",[t._v("OnDelete")]),t._v(" 更新策略实现了 1.6 及以前版本的历史遗留行为。当 StatefulSet 的 "),a("code",[t._v(".spec.updateStrategy.type")]),t._v(" 设置为 "),a("code",[t._v("OnDelete")]),t._v(" 时，它的控制器将不会自动更新 StatefulSet 中的 Pod。 用户必须手动删除 Pod 以便让控制器创建新的 Pod，以此来对 StatefulSet 的 "),a("code",[t._v(".spec.template")]),t._v(" 的变动作出反应。")]),t._v(" "),a("h2",{attrs:{id:"六、statefulset-分区"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#六、statefulset-分区"}},[t._v("#")]),t._v(" 六、StatefulSet 分区")]),t._v(" "),a("p",[t._v("通过声明 "),a("code",[t._v(".spec.updateStrategy.rollingUpdate.partition")]),t._v(" 的方式，"),a("code",[t._v("RollingUpdate")]),t._v(" 更新策略可以实现分区。 如果声明了一个分区，当 StatefulSet 的 "),a("code",[t._v(".spec.template")]),t._v(" 被更新时， 所有序号大于等于该分区序号的 Pod 都会被更新。 所有序号小于该分区序号的 Pod 都不会被更新，并且，即使他们被删除也会依据之前的版本进行重建。 如果 StatefulSet 的 "),a("code",[t._v(".spec.updateStrategy.rollingUpdate.partition")]),t._v(" 大于它的 "),a("code",[t._v(".spec.replicas")]),t._v("，对它的 "),a("code",[t._v(".spec.template")]),t._v(" 的更新将不会传递到它的 Pod。 在大多数情况下，你不需要使用分区，但如果你希望进行阶段更新、执行金丝雀或执行 分阶段上线，则这些分区会非常有用。")]),t._v(" "),a("h4",{attrs:{id:""}},[a("a",{staticClass:"header-anchor",attrs:{href:"#"}},[t._v("#")])]),t._v(" "),a("h2",{attrs:{id:"七、statefulset-回滚"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#七、statefulset-回滚"}},[t._v("#")]),t._v(" 七、StatefulSet 回滚")]),t._v(" "),a("p",[t._v("在默认 Pod 管理策略下使用滚动更新，可能进入需要人工干预才能修复的损坏状态。")]),t._v(" "),a("p",[t._v("如果更新后 Pod 模板配置进入无法运行或就绪的状态（例如，由于错误的二进制文件 或应用程序级配置错误），StatefulSet 将停止回滚并等待。")]),t._v(" "),a("p",[t._v("在这种状态下，仅将 Pod 模板还原为正确的配置是不够的。由于已知问题，StatefulSet 将继续等待损坏状态的 Pod 准备就绪（永远不会发生），然后再尝试将其恢复为正常工作配置。")]),t._v(" "),a("p",[t._v("恢复模板后，还必须删除 StatefulSet 尝试使用错误的配置来运行的 Pod。这样， StatefulSet 才会开始使用被还原的模板来重新创建 Pod。")])])}),[],!1,null,null,null);e.default=n.exports}}]);
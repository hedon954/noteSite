(window.webpackJsonp=window.webpackJsonp||[]).push([[214],{625:function(s,t,a){"use strict";a.r(t);var e=a(47),r=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"service"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#service"}},[s._v("#")]),s._v(" Service")]),s._v(" "),a("p",[s._v("虽然每个 Pod 都会分配一个单独的 Pod 的 IP 地址，我们也可以通过 Pod 的 IP 地址来访问资源，但是却存在如下的问题：")]),s._v(" "),a("ul",[a("li",[s._v("Pod 的 IP 会随着 Pod 的重建产生变化。")]),s._v(" "),a("li",[s._v("Pod 的 IP 仅仅是集群内部可见的虚拟的 IP，外部无法访问。")])]),s._v(" "),a("p",[s._v("Service 可以看做是一组同类的 Pod 对外的访问接口，借助 Service，应用可以方便的实现服务发现和负载均衡。")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://tva1.sinaimg.cn/large/008i3skNly1gs4rg0bwd6j31320jck3h.jpg",alt:"image-20210704113345960"}})]),s._v(" "),a("p",[s._v("Service 在很多情况下只是一个概念，真正起作用的其实是 "),a("code",[s._v("kube-proxy")]),s._v(" 服务进程，每个 Node 节点上都运行了一个 "),a("code",[s._v("kube-proxy")]),s._v(" 的服务进程。当创建 Service 的时候会通过 "),a("code",[s._v("API Server")]),s._v(" 向 etcd 写入创建的 "),a("code",[s._v("Service")]),s._v(" 的信息，而 "),a("code",[s._v("kube-proxy")]),s._v(" 会基于监听的机制发现这种 Service 的变化，"),a("strong",[s._v("然后它会将最新的 Service 信息转换为对应的访问规则")]),s._v("。")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://tva1.sinaimg.cn/large/008i3skNly1gsah0a14olj313g0d60yj.jpg",alt:"image-20210709100600474"}})]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 10.97.97.97:80 是service提供的访问入口")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 当访问这个入口的时候，可以发现后面有三个 pod 的服务在等待调用，")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# kube-proxy 会基于 rr（轮询）的策略，将请求分发到其中一个 pod 上去")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 这个规则会同时在集群内的所有节点上都生成，所以在任何一个节点上访问都可以")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@k8s-master ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ipvsadm -Ln")]),s._v("\nIP Virtual Server version "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.2")]),s._v(".1 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("size"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4096")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nProt LocalAddress:Port Scheduler Flags\n  -"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" RemoteAddress:Port           Forward Weight ActiveConn InActConn\nTCP  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("172.16")]),s._v(".58.200:30401 rr\n  -"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.244")]),s._v(".1.39:80               Masq    "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("      "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("          "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("         \n  -"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.244")]),s._v(".3.13:80               Masq    "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("      "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("          "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("         \n  -"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.244")]),s._v(".3.14:80               Masq    "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("      "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("          "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("         \n  -"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.244")]),s._v(".3.15:80               Masq    "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("      "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("          "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" \n")])])]),a("h2",{attrs:{id:"一、service-工作模式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、service-工作模式"}},[s._v("#")]),s._v(" 一、Service 工作模式")]),s._v(" "),a("p",[s._v("kube-proxy 目前支持三种工作模式：")]),s._v(" "),a("ul",[a("li",[s._v("userspace")]),s._v(" "),a("li",[s._v("iptables")]),s._v(" "),a("li",[s._v("ipvs")])]),s._v(" "),a("h3",{attrs:{id:"_1-userspace-模式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-userspace-模式"}},[s._v("#")]),s._v(" 1. userspace 模式")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://tva1.sinaimg.cn/large/008i3skNly1gsaha7bb49j31q80mkq6u.jpg",alt:"image-20210709101534991"}})]),s._v(" "),a("p",[s._v("userspace 模式下，kube-proxy 会为每一个 Service 创建一个监听端口，发向 Cluster IP 的请求被 iptables 规则重定向到 kube-proxy 监听的端口上，kube-proxy 根据 LB 算法（负载均衡算法）选择一个提供服务的 Pod 并和其建立连接，以便将请求转发到 Pod 上。")]),s._v(" "),a("p",[s._v("该模式下，kube-proxy 充当了一个四层负载均衡器的角色。由于 kube-proxy 运行在 userspace 中，"),a("strong",[s._v("在进行转发处理的时候会增加内核和用户空间之间的数据拷贝，虽然比较稳定，但是效率非常低下。")])]),s._v(" "),a("h3",{attrs:{id:"_2-iptables-模式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-iptables-模式"}},[s._v("#")]),s._v(" 2. iptables 模式")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://tva1.sinaimg.cn/large/008i3skNly1gsahd1g257j31po0swdkn.jpg",alt:"image-20210709101818929"}})]),s._v(" "),a("p",[s._v("iptables 模式下，kube-proxy 为 Service 后端的每个 Pod 创建对应的 iptables 规则，直接将发向 Cluster IP 的请求重定向到一个 Pod 的 IP 上。")]),s._v(" "),a("p",[s._v("该模式下 kube-proxy "),a("strong",[s._v("不承担")]),s._v("四层负载均衡器的角色，"),a("strong",[s._v("只负责创建 iptables 规则")]),s._v("。该模式的优点在于较 userspace 模式效率更高，但是不能提供灵活的 LB 策略，当后端 Pod 不可用的时候无法进行重试。")]),s._v(" "),a("h3",{attrs:{id:"_3-ipvs-模式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-ipvs-模式"}},[s._v("#")]),s._v(" 3. ipvs 模式")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://tva1.sinaimg.cn/large/008i3skNly1gsaheqccb8j31p80r8wif.jpg",alt:"image-20210709101956107"}})]),s._v(" "),a("p",[s._v("ipvs 模式和 iptables 类似，kube-proxy 监控 Pod 的变化并创建相应的 ipvs 规则。ipvs 相对 iptables 转发效率更高，除此之外，ipvs 支持更多的 LB 算法。")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("ipvs 模式必须安装 ipvs 内核模块，否则会降级为 iptables")])]),s._v(" "),a("li",[a("p",[s._v("开启 ipvs")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("kubectl edit cm kube-proxy -n kube-system\n")])])]),a("p",[a("img",{attrs:{src:"https://tva1.sinaimg.cn/large/008i3skNly1gsahjrefhmg30my0g1wge.gif",alt:"编辑kube-proxy.gif"}})]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("kubectl delete pod -l k8s-app"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("kube-proxy -n kube-system\n")])])])]),s._v(" "),a("li",[a("p",[s._v("测试 ipvs 模块是否开启成功")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@k8s-master ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ipvsadm -Ln")]),s._v("\nIP Virtual Server version "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.2")]),s._v(".1 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("size"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4096")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nProt LocalAddress:Port Scheduler Flags\n  -"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" RemoteAddress:Port           Forward Weight ActiveConn InActConn\nTCP  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("172.16")]),s._v(".58.200:30401 rr\n  -"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.244")]),s._v(".1.39:80               Masq    "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("      "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("          "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("         \n  -"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.244")]),s._v(".3.13:80               Masq    "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("      "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("          "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("         \n  -"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.244")]),s._v(".3.14:80               Masq    "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("      "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("          "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("         \n  -"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.244")]),s._v(".3.15:80               Masq    "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("      "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("          "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" \n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\n")])])])])]),s._v(" "),a("h2",{attrs:{id:"二、service-资源清单"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二、service-资源清单"}},[s._v("#")]),s._v(" 二、Service 资源清单")]),s._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("apiVersion")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" v1 "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 版本")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("kind")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Service "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 类型")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("metadata")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 元数据")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 资源名称")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("namespace")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 命名空间")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("spec")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("selector")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 标签选择器，用于确定当前Service代理哪些Pod")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("app")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" nginx\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("type")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" NodePort "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Service的类型，指定Service的访问方式，NodePort表示集群外可访问，ClusterIP表示集群内可见")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("clusterIP")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 虚拟服务的IP地址")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("sessionAffinity")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# session亲和性，支持ClientIP、None两个选项，默认值为None")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("ports")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 端口信息")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("port")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8080")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Service端口")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("protocol")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" TCP "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 协议")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("targetPort")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Pod端口")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("nodePort")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 主机端口")]),s._v("\n")])])]),a("p",[a("code",[s._v("spec.type")]),s._v(" 说明：")]),s._v(" "),a("ul",[a("li",[s._v("ClusterIP：默认值，它是 kubernetes 系统自动分配的虚拟 IP，只能在集群内部访问")]),s._v(" "),a("li",[s._v("NodePort：将 Service 通过指定的 Node 上的端口暴露给外部，通过此方法，就可以在集群外部访问服务")]),s._v(" "),a("li",[s._v("LoadBalancer：使用外接负载均衡器完成到服务的负载分发，注意此模式需要"),a("strong",[s._v("外部云环境")]),s._v("的支持")]),s._v(" "),a("li",[s._v("ExternalName：把集群外部的服务引入集群内部，直接使用")])]),s._v(" "),a("h2",{attrs:{id:"三、service-五种类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三、service-五种类型"}},[s._v("#")]),s._v(" 三、Service 五种类型")]),s._v(" "),a("h3",{attrs:{id:"_1-cluster-ip-类型的-service"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-cluster-ip-类型的-service"}},[s._v("#")]),s._v(" 1. Cluster IP 类型的 Service")]),s._v(" "),a("p",[a("strong",[s._v("1.1 创建 Deployment")])]),s._v(" "),a("p",[s._v("创建名为 "),a("code",[s._v("nginx-deployment.yaml")]),s._v(" 的 Deployment，镜像设为 nginx:1.17.1，副本设为 3 个，内容如下：")]),s._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("apiVersion")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" apps/v1\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("kind")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Deployment\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("metadata")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" nginx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("deployment\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("labels")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("app")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" nginx\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("spec")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("replicas")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("selector")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("matchLabels")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("app")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" nginx\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("template")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("metadata")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("labels")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("app")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" nginx\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("spec")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("containers")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" nginx\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("image")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" nginx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("1.17.1\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("ports")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("containerPort")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")]),s._v("\n")])])]),a("p",[s._v("创建 Deployment：")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@k8s-master ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# kubectl create -f nginx-deployment.yaml ")]),s._v("\ndeployment.apps/nginx-deployment created\n")])])]),a("p",[s._v("查看 Deployment：")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@k8s-master ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# kubectl get deployment nginx-deployment")]),s._v("\nNAME               READY   UP-TO-DATE   AVAILABLE   AGE\nnginx-deployment   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("/3     "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("            "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("           31s\n")])])]),a("p",[a("strong",[s._v("1.2 暴露 Service")])]),s._v(" "),a("p",[s._v("暴露名为 nginx-deployment 的 Deployment，并设置服务名为 nginx-service")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@k8s-master ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# kubectl expose deployment nginx-deployment --name=nginx-service --type=ClusterIP --port=80 --target-port=80")]),s._v("\nservice/nginx-service exposed\n")])])]),a("p",[s._v("上述命令会产生一个 CLUSTER-IP，这个就是 Service 的IP，在 Service 的生命周期内，这个地址是不会变化的。")]),s._v(" "),a("ul",[a("li",[s._v("--name：就是创建的 Service 名称")]),s._v(" "),a("li",[s._v("--type：Service 类型，ClusterIP 表示集群内可见")]),s._v(" "),a("li",[s._v("--port：Service 暴露的端口")]),s._v(" "),a("li",[s._v("--target-port：指向集群中 Pod 的端口")])]),s._v(" "),a("p",[a("strong",[s._v("1.3 查看 Service")])]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@k8s-master ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# kubectl get services nginx-service")]),s._v("\nNAME            TYPE        CLUSTER-IP      EXTERNAL-IP   PORT"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("S"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("   AGE\nnginx-service   ClusterIP   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.97")]),s._v(".169.215   "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("none"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("        "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")]),s._v("/TCP    14s\n")])])]),a("p",[a("strong",[s._v("1.4 访问")])]),s._v(" "),a("p",[s._v("上面的 "),a("code",[s._v("CLUSTER-IP")]),s._v(" 就是 "),a("code",[s._v("nginx-service")]),s._v(" 暴露在集群内部的 IP 地址，集群内任意节点都可以通过该 IP 地址来访问 "),a("code",[s._v("nginx-service")]),s._v("：")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@k8s-node1 ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# curl 10.97.169.215:80")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("DOCTYPE html"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("html"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("head"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("title"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("Welcome to nginx"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("/title"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("style"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n    body "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        width: 35em"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        margin: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" auto"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        font-family: Tahoma, Verdana, Arial, sans-serif"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("/style"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("/head"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("body"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("h"),a("span",{pre:!0,attrs:{class:"token operator"}},[a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("1")]),s._v(">")]),s._v("Welcome to nginx"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("/h"),a("span",{pre:!0,attrs:{class:"token operator"}},[a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("1")]),s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("p"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("If you see this page, the nginx web server is successfully installed and\nworking. Further configuration is required."),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("/p"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("p"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("For online documentation and support please refer to\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("a "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("href")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"http://nginx.org/"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("nginx.org"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("/a"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("."),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("br/"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\nCommercial support is available at\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("a "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("href")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"http://nginx.com/"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("nginx.com"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("/a"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("."),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("/p"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("p"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("em"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("Thank you "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" using nginx."),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("/em"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("/p"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("/body"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("/html"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])])]),a("h3",{attrs:{id:"_2-nodeport-类型的-service"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-nodeport-类型的-service"}},[s._v("#")]),s._v(" 2. NodePort 类型的 Service")]),s._v(" "),a("p",[s._v("在之前的案例中，创建的 Service 的 IP 地址只能在集群内部才可以访问，如果希望 Service 暴露给集群外部使用，那么就需要使用到另外一种类型的 Service，称为 "),a("strong",[s._v("NodePort")]),s._v(" 类型的 Service。")]),s._v(" "),a("p",[s._v("NodePort 的工作原理就是将 Service 的端口映射到 Node 的一个端口上，然后就可以通过 "),a("code",[s._v("NodeIP:NodePort")]),s._v("来访问 Service了 。")]),s._v(" "),a("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://tva1.sinaimg.cn/large/008i3skNly1gsaht5zfe5j30yu0gq43j.jpg",alt:"image-20210709103348514"}}),s._v(" "),a("p",[a("strong",[s._v("2.1 创建 Deployment")])]),s._v(" "),a("p",[s._v("这里我们就上前面的 nginx-deployment 就可以了。")]),s._v(" "),a("p",[a("strong",[s._v("2.2 暴露 Service")])]),s._v(" "),a("p",[s._v("这里将 "),a("code",[s._v("--type")]),s._v(" 从 "),a("code",[s._v("ClusterIP")]),s._v(" 改为 "),a("code",[s._v("NodePort")]),s._v("，"),a("code",[s._v("NodePort")]),s._v(" 就表示外部可访问。")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@k8s-master ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# kubectl expose deployment nginx-deployment --name=nginx-service2 --type=NodePort --port=80 --target-port=80")]),s._v("\nservice/nginx-service2 exposed\n")])])]),a("p",[a("strong",[s._v("2.3 查看 Service")])]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@k8s-master ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# kubectl get service nginx-service2")]),s._v("\nNAME             TYPE       CLUSTER-IP      EXTERNAL-IP   PORT"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("S"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("        AGE\nnginx-service2   NodePort   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.109")]),s._v(".69.223   "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("none"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("        "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")]),s._v(":32714/TCP   29s\n")])])]),a("p",[s._v("这里我们可以看到：")]),s._v(" "),a("ul",[a("li",[s._v("TYPE 已经是 NodePort")]),s._v(" "),a("li",[s._v("PORT 不仅仅只有 80，还有一个 "),a("code",[s._v("32714")]),s._v("，这就是一个端口映射，外界想要访问我们这个 "),a("code",[s._v("nginx-services")]),s._v("，就要通过这个 "),a("code",[s._v("32714")]),s._v(" 端口来访问。也就是说，我们访问 "),a("code",[s._v("节点 IP：32714")]),s._v(" 就会映射到 "),a("code",[s._v("10.109.69.223:80")])])]),s._v(" "),a("p",[a("strong",[s._v("2.4 宿主机访问 Service")])]),s._v(" "),a("p",[a("img",{attrs:{src:"https://tva1.sinaimg.cn/large/008i3skNly1gs4srx8ofxj31ro0g0tcb.jpg",alt:"image-20210704121949364"}})]),s._v(" "),a("blockquote",[a("p",[s._v("注意 IP 是 "),a("code",[s._v("k8s-node1")]),s._v(" 或 "),a("code",[s._v("k8s-node2")]),s._v(" 的 IP。")])]),s._v(" "),a("h3",{attrs:{id:"_3-headliness-类型的-service"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-headliness-类型的-service"}},[s._v("#")]),s._v(" 3. HeadLiness 类型的 Service")]),s._v(" "),a("p",[s._v("在某些场景中，开发人员可能不想使用 Service 提供的负载均衡功能，而希望自己来控制负载均衡策略，针对这种情况，kubernetes 提供了 "),a("strong",[s._v("HeadLinesss Service")]),s._v("，这类 Service 不会分配 Cluster IP，如果想要访问 Service，只能通过 Service 的域名进行查询。")]),s._v(" "),a("h3",{attrs:{id:"_4-loadbalancer-类型的-service"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-loadbalancer-类型的-service"}},[s._v("#")]),s._v(" 4. LoadBalancer 类型的 Service")]),s._v(" "),a("p",[s._v("LoadBalancer 和 NodePort 很相似，目的都是向外部暴露一个端口，区别在于 LoadBalancer 会在集群的外部再来做一个负载均衡设备，而这个设备需要外部环境的支持，外部服务发送到这个设备上的请求，会被设备负载之后转发到集群中。")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://tva1.sinaimg.cn/large/008i3skNly1gsahwxtpioj31120eaabv.jpg",alt:"image-20210709103720856"}})]),s._v(" "),a("h3",{attrs:{id:"_5-externalname-类型的-service"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-externalname-类型的-service"}},[s._v("#")]),s._v(" 5. ExternalName 类型的 Service")]),s._v(" "),a("p",[s._v("ExternalName 类型的 Service 用于引入集群外部的服务，它通过 externalName 属性指定一个服务的地址，然后在集群内部访问此 Service 就可以访问到外部的服务了。")]),s._v(" "),a("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://tva1.sinaimg.cn/large/008i3skNly1gsahxohsolj610k0ewtc702.jpg",alt:"image-20210709103808924"}}),s._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("apiVersion")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" v1\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("kind")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Service\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("metadata")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" service"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("externalname\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("namespace")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" dev\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("spec")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("type")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" ExternalName "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Service类型为ExternalName")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("externalName")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" www.baidu.com "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 改成IP地址也可以")]),s._v("\n")])])])])}),[],!1,null,null,null);t.default=r.exports}}]);
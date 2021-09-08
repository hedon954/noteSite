(window.webpackJsonp=window.webpackJsonp||[]).push([[137],{548:function(e,r,t){"use strict";t.r(r);var v=t(47),_=Object(v.a)({},(function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"kubernetes-组件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#kubernetes-组件"}},[e._v("#")]),e._v(" Kubernetes 组件")]),e._v(" "),t("h2",{attrs:{id:"_1-组件介绍"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-组件介绍"}},[e._v("#")]),e._v(" 1. 组件介绍")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("一个kubernetes集群主要由控制节点（master）、工作节点（node）构成，每个节点上都会安装不同的组件。")])]),e._v(" "),t("li",[t("p",[e._v("控制节点（master）：集群的控制平面，负责集群的决策。")]),e._v(" "),t("ul",[t("li",[e._v("API Server：集群操作的唯一入口，接收用户输入的命令，提供认证、授权、API注册和发现等机制。")]),e._v(" "),t("li",[e._v("Scheduler：负责集群资源调度，按照预定的调度策略将Pod调度到相应的node节点上。")]),e._v(" "),t("li",[e._v("ControllerManager：负责维护集群的状态，比如程序部署安排、故障检测、自动扩展和滚动更新等。")]),e._v(" "),t("li",[e._v("Etcd：负责存储集群中各种资源对象的信息。")])])]),e._v(" "),t("li",[t("p",[e._v("工作节点（node）：集群的数据平面，负责为容器提供运行环境。")]),e._v(" "),t("ul",[t("li",[e._v("Kubelet：负责维护容器的生命周期，即通过控制Docker，来创建、更新、销毁容器。")]),e._v(" "),t("li",[e._v("KubeProxy：负责提供集群内部的服务发现和负载均衡。")]),e._v(" "),t("li",[e._v("Docker：负责节点上容器的各种操作。")])])])]),e._v(" "),t("p",[t("img",{attrs:{src:"https://tva1.sinaimg.cn/large/008i3skNly1gs02u7sju1j31140jqgvk.jpg",alt:"image-20210630102011581"}})]),e._v(" "),t("h2",{attrs:{id:"_2-应用示例"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-应用示例"}},[e._v("#")]),e._v(" 2. 应用示例")]),e._v(" "),t("p",[e._v("以部署一个 Nginx 服务来说明 Kubernetes 系统各个组件调用关系：")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("首先需要明确，一旦 Kubernetes 环境启动之后，Master 和 Node 都会将自身的信息存储到 "),t("strong",[e._v("etcd")]),e._v(" 数据库中。")])]),e._v(" "),t("li",[t("p",[e._v("一个 Nginx 服务的安装请求首先会被发送到 Master 节点上的 "),t("strong",[e._v("API Serve")]),e._v("r 组件。")])]),e._v(" "),t("li",[t("p",[e._v("API Server 组件会调用 "),t("strong",[e._v("Scheduler")]),e._v(" 组件来决定到底应该把这个服务安装到那个 "),t("strong",[e._v("Node")]),e._v(" 节点上。此时，它会从 "),t("strong",[e._v("etcd")]),e._v(" 中读取各个 Node 节点的信息，然后按照一定的算法进行选择，并将结果告知 "),t("strong",[e._v("API Server")]),e._v("。")])]),e._v(" "),t("li",[t("p",[e._v("API Server 调用 "),t("strong",[e._v("Controller-Manager")]),e._v(" 去调用 Node 节点安装 Nginx 服务。")])]),e._v(" "),t("li",[t("p",[t("strong",[e._v("Kubelet")]),e._v(" 接收到指令后，会通知 "),t("strong",[e._v("Docker")]),e._v("，然后由 Docker 来启动一个 Nginx 的 "),t("strong",[e._v("Pod")]),e._v("。Pod 是 Kubernetes 的最小操作单元，容器必须跑在 Pod 中。")])]),e._v(" "),t("li",[t("p",[e._v("一个 Nginx 服务就运行了，如果需要访问 Nginx，就需要通过 "),t("strong",[e._v("kube-proxy")]),e._v(" 来对 Pod 产生访问的代理，这样，外界用户就可以访问集群中的 Nginx 服务了。")])])])])}),[],!1,null,null,null);r.default=_.exports}}]);
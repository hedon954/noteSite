(window.webpackJsonp=window.webpackJsonp||[]).push([[271],{682:function(t,s,a){"use strict";a.r(s);var e=a(47),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"horizontal-pod-autoscaler"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#horizontal-pod-autoscaler"}},[t._v("#")]),t._v(" Horizontal Pod Autoscaler")]),t._v(" "),a("p",[t._v("我们已经可以通过手动执行 "),a("code",[t._v("kubectl scale")]),t._v("命令实现 Pod 的扩缩容，但是这显然不符合 k8s 的定位目标：自动化和智能化。k8s 期望可以通过监测 Pod 的使用情况，实现 Pod 数量的自动调整，于是就产生了 HPA 这种控制器。")]),t._v(" "),a("p",[t._v("HPA 可以获取每个 Pod 的利用率，然后和 HPA 中定义的指标进行对比，同时计算出需要伸缩的具体值，最后实现 Pod 的数量的调整。其实 HPA 和之前的 Deployment 一样，也属于一种 k8s 资源对象，它通过追踪分析目标 Pod 的负载变化情况，来确定是否需要针对性的调整目标 Pod 的副本数。")]),t._v(" "),a("img",{staticStyle:{zoom:"67%"},attrs:{src:"https://tva1.sinaimg.cn/large/008i3skNly1gs9cd7k5foj30qi06rgn8.jpg",alt:"HPA概述.png"}}),t._v(" "),a("h2",{attrs:{id:"一、安装-metrics-server-v0-3-6"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、安装-metrics-server-v0-3-6"}},[t._v("#")]),t._v(" 一、安装 metrics-server（v0.3.6）")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("下载 metrics-server")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("wget")]),t._v(" https://github.com/kubernetes-sigs/metrics-server/archive/v0.3.6.tar.gz\n")])])])]),t._v(" "),a("li",[a("p",[t._v("解压")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("tar")]),t._v(" -zxvf v0.3.6.tar.gz\n")])])])]),t._v(" "),a("li",[a("p",[t._v("进入 "),a("code",[t._v("metrics-server-0.3.6/deploy/1.8+")]),t._v(" 目录")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" metrics-server-0.3.6/deploy/1.8+\n")])])])]),t._v(" "),a("li",[a("p",[t._v("修改 "),a("code",[t._v("metrics-server-deployment.yaml")]),t._v(" 文件：")]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("---")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("apiVersion")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" v1\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("kind")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ServiceAccount\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("metadata")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" metrics"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("server\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("namespace")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" kube"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("system\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("---")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("apiVersion")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" apps/v1\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("kind")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Deployment\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("metadata")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" metrics"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("server\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("namespace")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" kube"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("system\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("labels")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("k8s-app")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" metrics"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("server\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("spec")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("selector")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("matchLabels")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("k8s-app")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" metrics"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("server\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("template")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("metadata")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" metrics"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("server\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("labels")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("k8s-app")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" metrics"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("server\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("spec")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 添加")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("hostNetwork")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("serviceAccountName")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" metrics"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("server\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("volumes")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" tmp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("dir\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("emptyDir")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("containers")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" metrics"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("server\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 修改")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("image")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" registry.cn"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("hangzhou.aliyuncs.com/google_containers/metrics"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("server"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("amd64"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("v0.3.6\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("imagePullPolicy")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Always\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 添加")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("args")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n         "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("kubelet"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("insecure"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("tls \n         "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("kubelet"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("preferred"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("address"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("types=InternalIP"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("Hostname"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("InternalDNS"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("ExternalDNS"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("ExternalIP\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("volumeMounts")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" tmp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("dir\n          "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("mountPath")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" /tmp\n")])])])]),t._v(" "),a("li",[a("p",[t._v("安装 "),a("code",[t._v("metrics-server")])]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("root@k8s-master "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.8")]),t._v("+"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# kubectl apply -f ./")]),t._v("\nclusterrole.rbac.authorization.k8s.io/system:aggregated-metrics-reader created\nclusterrolebinding.rbac.authorization.k8s.io/metrics-server:system:auth-delegator created\nrolebinding.rbac.authorization.k8s.io/metrics-server-auth-reader created\napiservice.apiregistration.k8s.io/v1beta1.metrics.k8s.io created\nserviceaccount/metrics-server created\ndeployment.apps/metrics-server created\nservice/metrics-server created\nclusterrole.rbac.authorization.k8s.io/system:metrics-server created\nclusterrolebinding.rbac.authorization.k8s.io/system:metrics-server created\n")])])])]),t._v(" "),a("li",[a("p",[t._v("查看 "),a("code",[t._v("metrics-server")]),t._v(" 生成的 Pod")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("root@k8s-master "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.8")]),t._v("+"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# kubectl get pod -n kube-system")]),t._v("\nNAME                                 READY   STATUS    RESTARTS   AGE\ncoredns-66bff467f8-7n949             "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("/1     Running   "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v("          24h\ncoredns-66bff467f8-knb4n             "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("/1     Running   "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("          23h\netcd-k8s-master                      "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("/1     Running   "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v("          5d23h\nkube-apiserver-k8s-master            "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("/1     Running   "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("          23h\nkube-controller-manager-k8s-master   "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("/1     Running   "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),t._v("          5d23h\nkube-flannel-ds-l5jfm                "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("/1     Running   "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v("          5d23h\nkube-flannel-ds-rjxpl                "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("/1     Running   "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("          23h\nkube-flannel-ds-vpbd9                "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("/1     Running   "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("          23h\nkube-proxy-9z64b                     "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("/1     Running   "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("          23h\nkube-proxy-j9pkd                     "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("/1     Running   "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v("          5d23h\nkube-proxy-znbcm                     "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("/1     Running   "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("          5d23h\nkube-scheduler-k8s-master            "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("/1     Running   "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("          23h\nmetrics-server-5f55b696bd-9hg5w      "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("/1     Running   "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("          2m3s   "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#这个就是")]),t._v("\n")])])])]),t._v(" "),a("li",[a("p",[t._v("查看资源使用情况")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("root@k8s-master "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.8")]),t._v("+"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# kubectl top pod -n kube-system")]),t._v("\nNAME                                 CPU"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("cores"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("   MEMORY"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("bytes"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("   \ncoredns-66bff467f8-7n949             3m           11Mi            \ncoredns-66bff467f8-knb4n             3m           8Mi             \netcd-k8s-master                      19m          58Mi            \nkube-apiserver-k8s-master            45m          375Mi           \nkube-controller-manager-k8s-master   17m          68Mi            \nkube-flannel-ds-l5jfm                3m           18Mi            \nkube-flannel-ds-rjxpl                3m           15Mi            \nkube-flannel-ds-vpbd9                3m           16Mi            \nkube-proxy-9z64b                     1m           19Mi            \nkube-proxy-j9pkd                     1m           16Mi            \nkube-proxy-znbcm                     1m           19Mi            \nkube-scheduler-k8s-master            4m           26Mi            \nmetrics-server-5f55b696bd-9hg5w      1m           10Mi\n")])])])])]),t._v(" "),a("h2",{attrs:{id:"二、准备-deployment"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二、准备-deployment"}},[t._v("#")]),t._v(" 二、准备 Deployment")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("编写 "),a("code",[t._v("nginx.yaml")]),t._v(" 文件")]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("apiVersion")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" apps/v1 \n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("kind")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Deployment \n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("metadata")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" \n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" nginx\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("spec")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" \n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("selector")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" \n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("matchLabels")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" \n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("app")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" nginx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("pod\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("template")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" \n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("metadata")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("labels")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("app")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" nginx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("pod\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("spec")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("containers")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" nginx \n          "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("image")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" nginx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("1.17.1 \n          "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("ports")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("containerPort")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("80")]),t._v(" \n          "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("resources")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 资源限制")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("requests")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n              "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("cpu")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"100m"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 100m表示100millicpu，即0.1个CPU")]),t._v("\n")])])])]),t._v(" "),a("li",[a("p",[t._v("创建 Deployment")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("root@k8s-master "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.8")]),t._v("+"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# kubectl apply -f nginx-hpa.yaml ")]),t._v("\ndeployment.apps/nginx-hpa created\n")])])])])]),t._v(" "),a("h2",{attrs:{id:"三、准备-service"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三、准备-service"}},[t._v("#")]),t._v(" 三、准备 Service")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("kubectl expose deployment nginx --name"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("nginx --type"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("NodePort --port"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("80")]),t._v(" --target-port"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("80")]),t._v("\n")])])]),a("h2",{attrs:{id:"四、部署-hpa"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#四、部署-hpa"}},[t._v("#")]),t._v(" 四、部署 HPA")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("创建 "),a("code",[t._v("ps-hpa.yaml")]),t._v(" 文件")]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("apiVersion")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" autoscaling/v1\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("kind")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" HorizontalPodAutoscaler\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("metadata")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" pc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("hpa\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("spec")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("minReplicas")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#最小Pod数量")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("maxReplicas")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#最大Pod数量")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("targetCPUUtilizationPercentage")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#CPU使用率指标")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("scaleTargetRef")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#指定要控制的Nginx信息")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("apiVersion")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" apps/v1\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("kind")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Deployment\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" nginx "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#要和前面的Deployment名称对应上")]),t._v("\n")])])])]),t._v(" "),a("li",[a("p",[t._v("创建 hpa")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("root@k8s-master "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.8")]),t._v("+"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# kubectl create -f pc-hpa.yaml ")]),t._v("\nhorizontalpodautoscaler.autoscaling/pc-hpa created\n")])])])]),t._v(" "),a("li",[a("p",[t._v("查看 hpa")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("root@k8s-master "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.8")]),t._v("+"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# kubectl get hpa")]),t._v("\nNAME     REFERENCE              TARGETS        MINPODS   MAXPODS   REPLICAS   AGE\npc-hpa   Deployment/nginx   "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("unknown"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("/3%   "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("         "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v("        "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("          39s\n")])])])])]),t._v(" "),a("h2",{attrs:{id:"五、测试"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#五、测试"}},[t._v("#")]),t._v(" 五、测试")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("查看 Service")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("root@k8s-master "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.8")]),t._v("+"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# kubectl get service nginx")]),t._v("\nNAME        TYPE       CLUSTER-IP     EXTERNAL-IP   PORT"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("S"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("        AGE\nnginx      NodePort   "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10.96")]),t._v(".88.161   "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("none"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("        "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("80")]),t._v(":31395/TCP   42s\n")])])])]),t._v(" "),a("li",[a("p",[t._v("使用压测工具 "),a("code",[t._v("Jmeter")]),t._v(" 对 service 的地址 "),a("code",[t._v("http://172.16.58.200:31395")]),t._v(" 进行压测，然后通过控制台查看 hpa 和 pod 的变化")])]),t._v(" "),a("li",[a("p",[t._v("HPA 的变化")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://tva1.sinaimg.cn/large/008i3skNly1gs9dkqo4ujj30t703o74c.jpg",alt:"img"}})])]),t._v(" "),a("li",[a("p",[t._v("Pod 的变化")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://tva1.sinaimg.cn/large/008i3skNly1gs9dnawb98j31iw0k2wkh.jpg",alt:"image-20210708112410664"}})])])])])}),[],!1,null,null,null);s.default=n.exports}}]);
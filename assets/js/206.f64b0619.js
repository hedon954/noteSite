(window.webpackJsonp=window.webpackJsonp||[]).push([[206],{614:function(a,s,e){"use strict";e.r(s);var t=e(47),l=Object(t.a)({},(function(){var a=this,s=a.$createElement,e=a._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"namespace"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#namespace"}},[a._v("#")]),a._v(" Namespace")]),a._v(" "),e("p",[a._v("Namespace 是 Kubernetes 系统中一种非常重要的资源，它的主要作用是用来实现"),e("strong",[a._v("多套系统的资源隔离")]),a._v("或者"),e("strong",[a._v("多租户的资源隔离")]),a._v("。")]),a._v(" "),e("p",[a._v("默认情况下，Kubernetes 集群中的所有 Pod 都是可以相互访问的。但是在实际中，可能不想让两个 Pod 之间进行互相的访问，那么此时就可以将两个 Pod 划分到不同的 Namespace 下。Kubernetes 通过将集群内部的资源分配到不同的 Namespace 中，可以形成逻辑上的“"),e("strong",[a._v("组")]),a._v("”，以方便不同的组的资源进行隔离使用和管理。")]),a._v(" "),e("p",[a._v("可以通过 Kubernetes 的授权机制，将不同的 Namespace 交给不同租户进行管理，这样就实现了多租户的资源隔离。")]),a._v(" "),e("p",[a._v("此时还能结合 Kubernetes 的资源配额机制，限定不同租户能占用的资源，例如 CPU 使用量、内存使用量等等，来实现租户可用资源的管理。")]),a._v(" "),e("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://hedonspace.oss-cn-beijing.aliyuncs.com/img2/008i3skNly1gs4ph6oisaj314s0lggvs.jpg",alt:"image-20210704102540067"}}),a._v(" "),e("h2",{attrs:{id:"一、查看-namespace"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#一、查看-namespace"}},[a._v("#")]),a._v(" 一、查看 Namespace")]),a._v(" "),e("h3",{attrs:{id:"_1-查看所有的-ns"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-查看所有的-ns"}},[a._v("#")]),a._v(" 1. 查看所有的 ns")]),a._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[a._v("kubectl get namespace\nkubectl get ns\n")])])]),e("p",[a._v("举例：")]),a._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("root@k8s-master ~"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# kubectl get ns")]),a._v("\nNAME              STATUS   AGE\ndefault           Active   46h\nkube-node-lease   Active   46h\nkube-public       Active   46h\nkube-system       Active   46h\n")])])]),e("ul",[e("li",[a._v("default：所有未指定的 Namespace 的对象都会被分配在 default 命名空间。")]),a._v(" "),e("li",[a._v("kube-node-lease：集群节点之间的心跳维护，v1.13开始引入。")]),a._v(" "),e("li",[a._v("kube-public：此命名空间的资源可以被所有人访问（包括未认证用户）。")]),a._v(" "),e("li",[a._v("kube-system：所有由 Kubernetes 系统创建的资源都处于这个命名空间。")])]),a._v(" "),e("h3",{attrs:{id:"_2-查看指定的-ns"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-查看指定的-ns"}},[a._v("#")]),a._v(" 2. 查看指定的 ns")]),a._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[a._v("kubectl get ns ns名称\n")])])]),e("p",[a._v("举例：")]),a._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("root@k8s-master ~"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# kubectl get ns default")]),a._v("\nNAME      STATUS   AGE\ndefault   Active   47h\n")])])]),e("h3",{attrs:{id:"_3-指定-ns-输出格式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-指定-ns-输出格式"}},[a._v("#")]),a._v(" 3. 指定 ns 输出格式")]),a._v(" "),e("p",[a._v("Kuberneters 支持多种输出格式："),e("code",[a._v("yaml")]),a._v("、"),e("code",[a._v("json")]),a._v("、"),e("code",[a._v("wide")]),a._v("。")]),a._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[a._v("kubectl get ns "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("ns名称"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" -o yaml/json/wide\n")])])]),e("h3",{attrs:{id:"_4-查看-ns-详情"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-查看-ns-详情"}},[a._v("#")]),a._v(" 4. 查看 ns 详情")]),a._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[a._v("kubectl describe ns "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("ns名称"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n")])])]),e("h2",{attrs:{id:"二、创建-namespace"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#二、创建-namespace"}},[a._v("#")]),a._v(" 二、创建 Namespace")]),a._v(" "),e("h3",{attrs:{id:"_1-命令行创建"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-命令行创建"}},[a._v("#")]),a._v(" 1. 命令行创建")]),a._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[a._v("kubectl create namespace ns名称\n")])])]),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("kubectl create ns ns名称\n")])])]),e("p",[a._v("举例：")]),a._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("root@k8s-master ~"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# kubectl create ns dev")]),a._v("\nnamespace/dev created\n")])])]),e("h3",{attrs:{id:"_2-根据配置文件创建"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-根据配置文件创建"}},[a._v("#")]),a._v(" 2. 根据配置文件创建")]),a._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[a._v("kubectl create -f 配置文件路径\n")])])]),e("h2",{attrs:{id:"三、删除-namespace"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#三、删除-namespace"}},[a._v("#")]),a._v(" 三、删除 Namespace")]),a._v(" "),e("h3",{attrs:{id:"_1-命令行删除"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-命令行删除"}},[a._v("#")]),a._v(" 1. 命令行删除")]),a._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[a._v("kubectl delete ns ns名称\n")])])]),e("h3",{attrs:{id:"_2-根据配置文件删除"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-根据配置文件删除"}},[a._v("#")]),a._v(" 2. 根据配置文件删除")]),a._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[a._v("kubectl delete -f 配置文件路径\n")])])])])}),[],!1,null,null,null);s.default=l.exports}}]);
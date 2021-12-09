(window.webpackJsonp=window.webpackJsonp||[]).push([[190],{600:function(t,e,a){"use strict";a.r(e);var s=a(47),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"replicaset"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#replicaset"}},[t._v("#")]),t._v(" ReplicaSet")]),t._v(" "),a("blockquote",[a("p",[t._v("ReplicaSet 的目的是维护一组在任何时候都处于运行状态的 Pod 副本的稳定集合。 因此，它通常用来保证给定数量的、完全相同的 Pod 的可用性。")])]),t._v(" "),a("h2",{attrs:{id:"一、replicaset-原理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、replicaset-原理"}},[t._v("#")]),t._v(" 一、ReplicaSet 原理")]),t._v(" "),a("p",[t._v("RepicaSet 是通过一组字段来定义的，包括：")]),t._v(" "),a("ul",[a("li",[t._v("一个用来识别可获得的 Pod 的集合的"),a("strong",[t._v("选择算符")])]),t._v(" "),a("li",[t._v("一个用来标明应该维护的副本个数的"),a("strong",[t._v("数值")])]),t._v(" "),a("li",[t._v("一个用来指定应该创建新 Pod 以满足副本个数条件时要使用的 "),a("strong",[t._v("Pod 模板")])]),t._v(" "),a("li",[t._v("...")])]),t._v(" "),a("p",[t._v("每个 ReplicaSet 都通过根据需要创建和删除 Pod 以使得副本个数达到期望值， 进而实现其存在价值。当 ReplicaSet 需要创建新的 Pod 时，会使用所提供的 Pod 模板。")]),t._v(" "),a("p",[t._v("ReplicaSet 通过 Pod 上的 "),a("code",[t._v("metadata.ownerReferences")]),t._v(" 字段连接到附属 Pod，该字段给出当前对象的属主资源。 ReplicaSet 所获得的 Pod 都在其 "),a("code",[t._v("ownerReferences")]),t._v(" 字段中包含了属主 ReplicaSet 的标识信息。正是通过这一连接，ReplicaSet 知道它所维护的 Pod 集合的状态， 并据此计划其操作行为。")]),t._v(" "),a("p",[t._v("ReplicaSet 使用其"),a("strong",[t._v("选择算符")]),t._v("来"),a("strong",[t._v("辨识")]),t._v("要获得的 Pod 集合。如果某个 Pod 没有 OwnerReference 或者其 OwnerReference 不是一个 "),a("strong",[t._v("控制器")]),t._v("，且其匹配到某 ReplicaSet 的选择算符，则该 Pod 立即被此 ReplicaSet 获得。")]),t._v(" "),a("h2",{attrs:{id:"二、replicaset-地位"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二、replicaset-地位"}},[t._v("#")]),t._v(" 二、ReplicaSet 地位")]),t._v(" "),a("p",[t._v("ReplicaSet 确保任何时间都有指定数量的 Pod 副本在运行。 然而，"),a("strong",[t._v("Deployment 是一个更高级的概念")]),t._v("，它管理 ReplicaSet，并向 Pod 提供声明式的更新以及许多其他有用的功能。 因此，我们建议使用 Deployment 而不是直接使用 ReplicaSet，除非 你需要自定义更新业务流程或根本不需要更新。")]),t._v(" "),a("p",[t._v("这实际上意味着，你"),a("strong",[t._v("可能永远不需要操作 ReplicaSet 对象")]),t._v("：而是使用 Deployment，并在 "),a("code",[t._v("spec")]),t._v(" 部分定义你的应用。")]),t._v(" "),a("h2",{attrs:{id:"三、replicaset-模板"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三、replicaset-模板"}},[t._v("#")]),t._v(" 三、ReplicaSet 模板")]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("apiVersion")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" apps/v1\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("kind")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ReplicaSet\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("metadata")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" frontend\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("labels")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("app")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" guestbook\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("tier")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" frontend\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("spec")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# modify replicas according to your case")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("replicas")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("selector")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("matchLabels")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("tier")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" frontend\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("template")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("metadata")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("labels")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("tier")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" frontend\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("spec")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("containers")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" php"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("redis\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("image")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" gcr.io/google_samples/gb"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("frontend"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("v3\n")])])])])}),[],!1,null,null,null);e.default=n.exports}}]);
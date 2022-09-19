(window.webpackJsonp=window.webpackJsonp||[]).push([[283],{693:function(a,s,e){"use strict";e.r(s);var t=e(47),n=Object(t.a)({},(function(){var a=this,s=a.$createElement,e=a._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"label"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#label"}},[a._v("#")]),a._v(" Label")]),a._v(" "),e("p",[a._v("Label 是 Kubernetes 的一个重要概念。它的作用就是在资源上添加标识，用来对它们进行区分和选择。")]),a._v(" "),e("p",[a._v("Label 的特点：")]),a._v(" "),e("ul",[e("li",[a._v("一个 Label 会以 "),e("strong",[a._v("key/value")]),a._v(" 键值对的形式附加到各种对象上，如 Node、Pod、Service 等。")]),a._v(" "),e("li",[a._v("一个资源对象可以定义任意数量的 Label，同一个 Label 也可以被添加到任意数量的资源对象上去。")]),a._v(" "),e("li",[a._v("Label 通常在资源对象定义时确定，当然也可以在对象创建后动态的添加或删除。")])]),a._v(" "),e("p",[a._v("可以通过 Label 实现资源的多纬度分组，以便灵活、方便地进行资源分配、调度、配置和部署等管理工作。")]),a._v(" "),e("blockquote",[e("p",[a._v("一些常用的 Label 标签示例如下：")]),a._v(" "),e("ul",[e("li",[a._v("版本标签：“version”:”release”, ”version”:”stable”...")]),a._v(" "),e("li",[a._v("环境标签：“environment”:”dev”, “environment”:”test”, “environment”:”pro”...")]),a._v(" "),e("li",[a._v("架构标签：“tier”:”frontend”, ”tier”:”backend”...")])])]),a._v(" "),e("p",[a._v("标签定义完毕之后，还要考虑到标签的选择，这就要用到 "),e("strong",[a._v("Label Selector")]),a._v("，即：")]),a._v(" "),e("ul",[e("li",[a._v("Label 用于给某个资源对象定义标识。")]),a._v(" "),e("li",[a._v("Label Selector 用于查询和筛选拥有某些标签的资源对象。")])]),a._v(" "),e("p",[a._v("当前有两种 Label Selector：")]),a._v(" "),e("ul",[e("li",[e("p",[a._v("基于"),e("strong",[a._v("等式")]),a._v("的 Label Selector")]),a._v(" "),e("ul",[e("li",[a._v("name=slave：选择所有包含 Label 中的 key=“name” 并且 value=“slave” 的对象。")]),a._v(" "),e("li",[a._v("env!=production：选择所有包含 Label 中的 key=“name” 并且 value!=“production” 的对象。")])])]),a._v(" "),e("li",[e("p",[a._v("基于"),e("strong",[a._v("集合")]),a._v("的 Label Selector")]),a._v(" "),e("ul",[e("li",[a._v("name in (master,slave)：选择所有包含 Label 中的 key=“name” 并且 value=“master” 或 value=“slave” 的对象。")]),a._v(" "),e("li",[a._v("name not in (master,slave)：选择所有包含 Label 中的 key=“name” 并且 value!=“master” 和 value!=“slave” 的对象。")])])])]),a._v(" "),e("p",[a._v("标签的选择条件可以使用多个，此时将多个 Label Selector 进行组合，使用逗号（"),e("strong",[a._v(",")]),a._v("）进行分隔即可。")]),a._v(" "),e("ul",[e("li",[a._v("name=salve,env!=production。")]),a._v(" "),e("li",[a._v("name not in (master,slave),env!=production。")])]),a._v(" "),e("h2",{attrs:{id:"一、创建-label"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#一、创建-label"}},[a._v("#")]),a._v(" 一、创建 Label")]),a._v(" "),e("ul",[e("li",[e("p",[a._v("语法：为资源打标签")]),a._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[a._v("kubectl label 资源类型 资源名称 "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("key")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("value "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("-n 命名空间"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n")])])])]),a._v(" "),e("li",[e("p",[a._v("示例：为 Nginx 的 Pod 打标签")]),a._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 查看有什么 Pod")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("root@k8s-master ~"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# kubectl get pods")]),a._v("\nNAME                     READY   STATUS    RESTARTS   AGE\nnginx-55f8fd7cfc-g78sc   "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v("/1     Running   "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),a._v("          47h\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 为 Nginx 打上 version=1.0 的标签")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("root@k8s-master ~"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# kubectl label pod nginx-55f8fd7cfc-g78sc version=1.0")]),a._v("\npod/nginx-55f8fd7cfc-g78sc labeled\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 查看 Label")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("root@k8s-master ~"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# kubectl describe pods")]),a._v("\nName:         nginx-55f8fd7cfc-g78sc\nNamespace:    default\nPriority:     "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),a._v("\nNode:         k8s-node2/172.16.58.202\nStart Time:   Thu, 01 Jul "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("2021")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("20")]),a._v(":52:16 -0700\nLabels:       "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("app")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("nginx\n              pod-template-hash"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("55f8fd7cfc\n              "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("version")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("1.0")]),a._v("  "),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#   刚刚打的标签就在这里  ←←←")]),a._v("\n")])])])])]),a._v(" "),e("blockquote",[e("p",[a._v("也可以在「使用配置文件」创建各种资源的时候，在配置文件的 "),e("code",[a._v("labels")]),a._v(" 标签中设置资源的 Label。")])]),a._v(" "),e("h2",{attrs:{id:"二、更新-label"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#二、更新-label"}},[a._v("#")]),a._v(" 二、更新 Label")]),a._v(" "),e("ul",[e("li",[e("p",[a._v("语法：更新资源的标签")]),a._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[a._v("kubectl label 资源类型 资源名称 "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("key")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("value "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("-n 命名空间"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" --overwrite\n")])])])]),a._v(" "),e("li",[e("p",[a._v("示例：为 Nginx 的 Pod 更新标签，将上述 version 更新为 2.0：")]),a._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 更新")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("root@k8s-master ~"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# kubectl label pod nginx-55f8fd7cfc-g78sc version=2.0 --overwrite")]),a._v("\npod/nginx-55f8fd7cfc-g78sc labeled\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 检查更新")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("root@k8s-master ~"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# kubectl describe pods")]),a._v("\nName:         nginx-55f8fd7cfc-g78sc\nNamespace:    default\nPriority:     "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),a._v("\nNode:         k8s-node2/172.16.58.202\nStart Time:   Thu, 01 Jul "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("2021")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("20")]),a._v(":52:16 -0700\nLabels:       "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("app")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("nginx\n              pod-template-hash"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("55f8fd7cfc\n              "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("version")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("2.0")]),a._v("   "),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# version 已经从 1.0 更新到 2.0 了")]),a._v("\n")])])])])]),a._v(" "),e("h2",{attrs:{id:"三、查看-label"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#三、查看-label"}},[a._v("#")]),a._v(" 三、查看 Label")]),a._v(" "),e("p",[a._v("除了上述通过 "),e("code",[a._v("describe")]),a._v(" 在资源的详细信息中查到资源拥有的 Label，我们还可以通过 "),e("code",[a._v("--show-labels")]),a._v(" 选项直接查看资源拥有的 Label。")]),a._v(" "),e("p",[a._v("如下：")]),a._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("root@k8s-master ~"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# kubectl get pods --show-labels")]),a._v("\nNAME                     READY   STATUS    RESTARTS   AGE   LABELS\nnginx-55f8fd7cfc-g78sc   "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v("/1     Running   "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),a._v("          47h   "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("app")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("nginx,pod-template-hash"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("55f8fd7cfc,version"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("2.0")]),a._v("\n")])])]),e("h2",{attrs:{id:"四、筛选-label"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#四、筛选-label"}},[a._v("#")]),a._v(" 四、筛选 Label")]),a._v(" "),e("p",[a._v("语法：")]),a._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[a._v("kubectl get 资源类型 -l Label条件 "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("-n 命名空间"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n")])])]),e("p",[a._v("举例：")]),a._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("root@k8s-master ~"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# kubectl get pods -l version=2.0 --show-labels")]),a._v("\nNAME                     READY   STATUS    RESTARTS   AGE   LABELS\nnginx-55f8fd7cfc-g78sc   "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v("/1     Running   "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),a._v("          47h   "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("app")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("nginx,pod-template-hash"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("55f8fd7cfc,version"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("2.0")]),a._v("\n")])])]),e("h2",{attrs:{id:"五、删除-label"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#五、删除-label"}},[a._v("#")]),a._v(" 五、删除 Label")]),a._v(" "),e("h3",{attrs:{id:"_1-命令行删除"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-命令行删除"}},[a._v("#")]),a._v(" 1. 命令行删除")]),a._v(" "),e("ul",[e("li",[e("p",[a._v("语法：删除标签")]),a._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[a._v("kubectl label 资源类型 资源名称 key-  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("-n 命名空间"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n")])])])]),a._v(" "),e("li",[e("p",[a._v("举例：删除 Nginx Pod 的 version 标签")]),a._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 删除 version 标签")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("root@k8s-master ~"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# kubectl label pod nginx-55f8fd7cfc-g78sc version- ")]),a._v("\npod/nginx-55f8fd7cfc-g78sc labeled\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 检查是否删除成功")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("root@k8s-master ~"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# kubectl get pods --show-labels")]),a._v("\nNAME                     READY   STATUS    RESTARTS   AGE   LABELS\nnginx-55f8fd7cfc-g78sc   "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v("/1     Running   "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),a._v("          47h   "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("app")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("nginx,pod-template-hash"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("55f8fd7cfc\n")])])])])])])}),[],!1,null,null,null);s.default=n.exports}}]);
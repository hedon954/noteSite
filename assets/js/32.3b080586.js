(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{444:function(t,s,a){"use strict";a.r(s);var e=a(47),r=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"service"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#service"}},[t._v("#")]),t._v(" Service")]),t._v(" "),a("p",[t._v("虽然每个 Pod 都会分配一个单独的 Pod 的 IP 地址，我们也可以通过 Pod 的 IP 地址来访问资源，但是却存在如下的问题：")]),t._v(" "),a("ul",[a("li",[t._v("Pod 的 IP 会随着 Pod 的重建产生变化。")]),t._v(" "),a("li",[t._v("Pod 的 IP 仅仅是集群内部可见的虚拟的 IP，外部无法访问。")])]),t._v(" "),a("p",[t._v("Service 可以看做是一组同类的 Pod 对外的访问接口，借助 Service，应用可以方便的实现服务发现和负载均衡。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://tva1.sinaimg.cn/large/008i3skNly1gs4rg0bwd6j31320jck3h.jpg",alt:"image-20210704113345960"}})]),t._v(" "),a("h2",{attrs:{id:"一、创建-service"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、创建-service"}},[t._v("#")]),t._v(" 一、创建 Service")]),t._v(" "),a("h3",{attrs:{id:"创建集群内部可访问的-service"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建集群内部可访问的-service"}},[t._v("#")]),t._v(" 创建集群内部可访问的 Service")]),t._v(" "),a("p",[a("strong",[t._v("1. 创建 Deployment")])]),t._v(" "),a("p",[t._v("创建名为 "),a("code",[t._v("nginx-deployment.yaml")]),t._v(" 的 Deployment，镜像设为 nginx:1.17.1，副本设为 3 个，内容如下：")]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("apiVersion")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" apps/v1\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("kind")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Deployment\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("metadata")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" nginx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("deployment\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("labels")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("app")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" nginx\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("spec")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("replicas")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("selector")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("matchLabels")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("app")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" nginx\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("template")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("metadata")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("labels")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("app")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" nginx\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("spec")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("containers")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" nginx\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("image")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" nginx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("1.17.1\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("ports")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("containerPort")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("80")]),t._v("\n")])])]),a("p",[t._v("创建 Deployment：")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("root@k8s-master ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# kubectl create -f nginx-deployment.yaml ")]),t._v("\ndeployment.apps/nginx-deployment created\n")])])]),a("p",[t._v("查看 Deployment：")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("root@k8s-master ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# kubectl get deployment nginx-deployment")]),t._v("\nNAME               READY   UP-TO-DATE   AVAILABLE   AGE\nnginx-deployment   "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v("/3     "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v("            "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v("           31s\n")])])]),a("p",[a("strong",[t._v("2. 暴露 Service")])]),t._v(" "),a("p",[t._v("暴露名为 nginx-deployment 的 Deployment，并设置服务名为 nginx-service")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("root@k8s-master ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# kubectl expose deployment nginx-deployment --name=nginx-service --type=ClusterIP --port=80 --target-port=80")]),t._v("\nservice/nginx-service exposed\n")])])]),a("p",[t._v("上述命令会产生一个 CLUSTER-IP，这个就是 Service 的IP，在 Service 的生命周期内，这个地址是不会变化的。")]),t._v(" "),a("ul",[a("li",[t._v("--name：就是创建的 Service 名称")]),t._v(" "),a("li",[t._v("--type：Service 类型，ClusterIP 表示集群内可见")]),t._v(" "),a("li",[t._v("--port：Service 暴露的端口")]),t._v(" "),a("li",[t._v("--target-port：指向集群中 Pod 的端口")])]),t._v(" "),a("p",[a("strong",[t._v("3. 查看 Service")])]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("root@k8s-master ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# kubectl get services nginx-service")]),t._v("\nNAME            TYPE        CLUSTER-IP      EXTERNAL-IP   PORT"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("S"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("   AGE\nnginx-service   ClusterIP   "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10.97")]),t._v(".169.215   "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("none"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("        "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("80")]),t._v("/TCP    14s\n")])])]),a("h5",{attrs:{id:"_4-访问"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-访问"}},[t._v("#")]),t._v(" 4. 访问")]),t._v(" "),a("p",[t._v("上面的 "),a("code",[t._v("CLUSTER-IP")]),t._v(" 就是 "),a("code",[t._v("nginx-service")]),t._v(" 暴露在集群内部的 IP 地址，集群内任意节点都可以通过该 IP 地址来访问 "),a("code",[t._v("nginx-service")]),t._v("：")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("root@k8s-node1 ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# curl 10.97.169.215:80")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("DOCTYPE html"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("html"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("head"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("title"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("Welcome to nginx"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("/title"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("style"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    body "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        width: 35em"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        margin: "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" auto"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        font-family: Tahoma, Verdana, Arial, sans-serif"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("/style"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("/head"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("body"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("h"),a("span",{pre:!0,attrs:{class:"token operator"}},[a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[t._v("1")]),t._v(">")]),t._v("Welcome to nginx"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("/h"),a("span",{pre:!0,attrs:{class:"token operator"}},[a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[t._v("1")]),t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("p"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("If you see this page, the nginx web server is successfully installed and\nworking. Further configuration is required."),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("/p"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("p"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("For online documentation and support please refer to\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("a "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("href")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://nginx.org/"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("nginx.org"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("/a"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("."),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("br/"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\nCommercial support is available at\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("a "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("href")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://nginx.com/"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("nginx.com"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("/a"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("."),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("/p"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("p"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("em"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("Thank you "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" using nginx."),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("/em"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("/p"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("/body"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("/html"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),a("h3",{attrs:{id:"创建集群外部可访问的-service"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建集群外部可访问的-service"}},[t._v("#")]),t._v(" 创建集群外部可访问的 Service")]),t._v(" "),a("p",[a("strong",[t._v("1. 创建 Deployment")])]),t._v(" "),a("p",[t._v("这里我们就上前面的 nginx-deployment 就可以了。")]),t._v(" "),a("p",[a("strong",[t._v("2. 暴露 Service")])]),t._v(" "),a("p",[t._v("这里将 "),a("code",[t._v("--type")]),t._v(" 从 "),a("code",[t._v("ClusterIP")]),t._v(" 改为 "),a("code",[t._v("NodePort")]),t._v("，"),a("code",[t._v("NodePort")]),t._v(" 就表示外部可访问。")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("root@k8s-master ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# kubectl expose deployment nginx-deployment --name=nginx-service2 --type=NodePort --port=80 --target-port=80")]),t._v("\nservice/nginx-service2 exposed\n")])])]),a("p",[a("strong",[t._v("3. 查看 Service")])]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("root@k8s-master ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# kubectl get service nginx-service2")]),t._v("\nNAME             TYPE       CLUSTER-IP      EXTERNAL-IP   PORT"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("S"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("        AGE\nnginx-service2   NodePort   "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10.109")]),t._v(".69.223   "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("none"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("        "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("80")]),t._v(":32714/TCP   29s\n")])])]),a("p",[t._v("这里我们可以看到：")]),t._v(" "),a("ul",[a("li",[t._v("TYPE 已经是 NodePort")]),t._v(" "),a("li",[t._v("PORT 不仅仅只有 80，还有一个 "),a("code",[t._v("32714")]),t._v("，这就是一个端口映射，外界想要访问我们这个 "),a("code",[t._v("nginx-services")]),t._v("，就要通过这个 "),a("code",[t._v("32714")]),t._v(" 端口来访问。也就是说，我们访问 "),a("code",[t._v("节点 IP：32714")]),t._v(" 就会映射到 "),a("code",[t._v("10.109.69.223:80")])])]),t._v(" "),a("p",[a("strong",[t._v("4. 宿主机访问 Service")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://tva1.sinaimg.cn/large/008i3skNly1gs4srx8ofxj31ro0g0tcb.jpg",alt:"image-20210704121949364"}})]),t._v(" "),a("blockquote",[a("p",[t._v("注意 IP 是 "),a("code",[t._v("k8s-node1")]),t._v(" 或 "),a("code",[t._v("k8s-node2")]),t._v(" 的 IP。")])]),t._v(" "),a("h2",{attrs:{id:"二、删除-service"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二、删除-service"}},[t._v("#")]),t._v(" 二、删除 Service")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("kubectl delete "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("service")]),t._v(" service名称 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("-n 命名空间"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=r.exports}}]);
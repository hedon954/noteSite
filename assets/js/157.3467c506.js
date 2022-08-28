(window.webpackJsonp=window.webpackJsonp||[]).push([[157],{564:function(t,a,s){"use strict";s.r(a);var n=s(47),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"_8-rabbitmq-集群"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_8-rabbitmq-集群"}},[t._v("#")]),t._v(" 8. RabbitMQ 集群")]),t._v(" "),s("h2",{attrs:{id:"_8-1-普通集群-副本集群"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_8-1-普通集群-副本集群"}},[t._v("#")]),t._v(" 8.1 普通集群(副本集群)")]),t._v(" "),s("blockquote",[s("p",[t._v("默认情况下：RabbitMQ 代理操作所需的所有数据/状态都将跨所有节点复制。")]),t._v(" "),s("p",[t._v("这方面的一个例外是消息队列，默认情况下，==消息队列仅位于一个节点上==，尽管它们可以从所有节点看到和访问")])]),t._v(" "),s("h3",{attrs:{id:"_8-1-1-架构图"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_8-1-1-架构图"}},[t._v("#")]),t._v(" 8.1.1 架构图")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://tva1.sinaimg.cn/large/007S8ZIlgy1gj24c36kdzj31gu0asmyz.jpg",alt:"image-20200924224004549"}})]),t._v(" "),s("p",[t._v("​\t核心解决问题:  "),s("code",[t._v("当集群中某一时刻master节点宕机,可以对Quene中信息,进行备份。")])]),t._v(" "),s("h3",{attrs:{id:"_8-1-2-集群搭建"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_8-1-2-集群搭建"}},[t._v("#")]),t._v(" 8.1.2 集群搭建")]),t._v(" "),s("div",{staticClass:"language-markdown extra-class"},[s("pre",{pre:!0,attrs:{class:"language-markdown"}},[s("code",[s("span",{pre:!0,attrs:{class:"token title important"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("#")]),t._v(" 0.集群规划")]),t._v("\n\tnode1: 10.15.0.3  mq1  master 主节点\n\tnode2: 10.15.0.4  mq2  repl1  副本节点\n\tnode3: 10.15.0.5  mq3  repl2  副本节点\n\n"),s("span",{pre:!0,attrs:{class:"token title important"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("#")]),t._v(" 1.克隆三台机器主机名和ip映射")]),t._v("\n\tvim /etc/hosts加入:\n\t\t 10.15.0.3 mq1\n    \t10.15.0.4 mq2\n    \t10.15.0.5 mq3\n\tnode1: vim /etc/hostname 加入:  mq1\n\tnode2: vim /etc/hostname 加入:  mq2\n\tnode3: vim /etc/hostname 加入:  mq3\n\n"),s("span",{pre:!0,attrs:{class:"token title important"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("#")]),t._v(" 2.三个机器安装rabbitmq,并同步cookie文件,在node1上执行:")]),t._v("\n\tscp /var/lib/rabbitmq/.erlang.cookie root@mq2:/var/lib/rabbitmq/\n\tscp /var/lib/rabbitmq/.erlang.cookie root@mq3:/var/lib/rabbitmq/\n\n"),s("span",{pre:!0,attrs:{class:"token title important"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("#")]),t._v(" 3.查看cookie是否一致:")]),t._v("\n\tnode1: cat /var/lib/rabbitmq/.erlang.cookie \n\tnode2: cat /var/lib/rabbitmq/.erlang.cookie \n\tnode3: cat /var/lib/rabbitmq/.erlang.cookie \n\n"),s("span",{pre:!0,attrs:{class:"token title important"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("#")]),t._v(" 4.后台启动rabbitmq所有节点执行如下命令,启动成功访问管理界面:")]),t._v("\n\trabbitmq-server -detached \n\n"),s("span",{pre:!0,attrs:{class:"token title important"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("#")]),t._v(" 5.在node2和node3执行加入集群命令:")]),t._v("\n\t1.关闭       rabbitmqctl stop_app\n\t2.加入集群    rabbitmqctl join_cluster rabbit@mq1\n\t3.启动服务    rabbitmqctl start_app\n\n"),s("span",{pre:!0,attrs:{class:"token title important"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("#")]),t._v(" 6.查看集群状态,任意节点执行:")]),t._v("\n\trabbitmqctl cluster_status\n\n"),s("span",{pre:!0,attrs:{class:"token title important"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("#")]),t._v(" 7.如果出现如下显示,集群搭建成功:")]),t._v("\n\tCluster status of node rabbit@mq3 ...\n\t[{nodes,[{disc,[rabbit@mq1,rabbit@mq2,rabbit@mq3]}]},\n\t{running_nodes,[rabbit@mq1,rabbit@mq2,rabbit@mq3]},\n\t{cluster_name,<"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v('"rabbit@mq1"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(">},\n\t{partitions,[]},\n\t{alarms,[{rabbit@mq1,[]},{rabbit@mq2,[]},{rabbit@mq3,[]}]}]\n\n"),s("span",{pre:!0,attrs:{class:"token title important"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("#")]),t._v(" 8.登录管理界面,展示如下状态:")]),t._v("\n")])])]),s("p",[s("img",{attrs:{src:"https://tva1.sinaimg.cn/large/008eGmZEgy1goqdf0efj9j31fm09otdb.jpg",alt:"image-20210320144930059"}})]),t._v(" "),s("div",{staticClass:"language-markdown extra-class"},[s("pre",{pre:!0,attrs:{class:"language-markdown"}},[s("code",[s("span",{pre:!0,attrs:{class:"token title important"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("#")]),t._v(" 9.测试集群在node1上,创建队列")]),t._v("\n")])])]),s("p",[s("img",{attrs:{src:"https://tva1.sinaimg.cn/large/008eGmZEgy1goqdfe5axsj31fi0f6q7l.jpg",alt:"image-20210320144952924"}})]),t._v(" "),s("div",{staticClass:"language-markdown extra-class"},[s("pre",{pre:!0,attrs:{class:"language-markdown"}},[s("code",[s("span",{pre:!0,attrs:{class:"token title important"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("#")]),t._v(" 10.查看node2和node3节点:")]),t._v("\n")])])]),s("p",[s("img",{attrs:{src:"https://tva1.sinaimg.cn/large/008eGmZEgy1goqdfra3y9j31fq0pyaid.jpg",alt:"image-20210320145013344"}})]),t._v(" "),s("div",{staticClass:"language-markdown extra-class"},[s("pre",{pre:!0,attrs:{class:"language-markdown"}},[s("code",[s("span",{pre:!0,attrs:{class:"token title important"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("#")]),t._v(" 11.关闭node1节点,执行如下命令,查看node2和node3:")]),t._v("\n\trabbitmqctl stop_app\n")])])]),s("p",[s("img",{attrs:{src:"https://tva1.sinaimg.cn/large/007S8ZIlgy1gj26o6d5bfj31ya0h80wp.jpg",alt:"image-20200320100000347"}})]),t._v(" "),s("p",[s("img",{attrs:{src:"https://tva1.sinaimg.cn/large/007S8ZIlgy1gj26oaedh8j31z20hh42i.jpg",alt:"image-20200320100010968"}})]),t._v(" "),s("hr"),t._v(" "),s("h2",{attrs:{id:"_8-2-镜像集群"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_8-2-镜像集群"}},[t._v("#")]),t._v(" 8.2 镜像集群")]),t._v(" "),s("blockquote",[s("p",[t._v("镜像队列机制就是将队列在三个节点之间设置主从关系，消息会在三个节点之间进行自动同步，且如果其中一个节点不可用，并不会导致消息丢失或服务不可用的情况，提升MQ集群的整体高可用性。")])]),t._v(" "),s("h3",{attrs:{id:"_8-2-1-架构图"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_8-2-1-架构图"}},[t._v("#")]),t._v(" 8.2.1 架构图")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://tva1.sinaimg.cn/large/007S8ZIlgy1gj2lc2yycnj31ey0ggwjw.jpg",alt:"image-20200925082814401"}})]),t._v(" "),s("h3",{attrs:{id:"_8-2-2-集群搭建"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_8-2-2-集群搭建"}},[t._v("#")]),t._v(" 8.2.2 集群搭建")]),t._v(" "),s("div",{staticClass:"language-markdown extra-class"},[s("pre",{pre:!0,attrs:{class:"language-markdown"}},[s("code",[s("span",{pre:!0,attrs:{class:"token title important"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("#")]),t._v(" 0.策略说明")]),t._v("\n\trabbitmqctl set_policy "),s("span",{pre:!0,attrs:{class:"token url"}},[t._v("["),s("span",{pre:!0,attrs:{class:"token content"}},[t._v("-p <vhost>")]),t._v("] ["),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("--priority <priority>")]),t._v("]")]),t._v(" [--apply-to "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("apply-to")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("] "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("pattern")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("definition")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t-p Vhost： 可选参数，针对指定vhost下的queue进行设置\n\tName:     policy的名称\n\tPattern: queue的匹配模式(正则表达式)\n\tDefinition：镜像定义，包括三个部分ha-mode, ha-params, ha-sync-mode\n           \t\t  ha-mode:指明镜像队列的模式，有效值为 all/exactly/nodes\n                        all：表示在集群中所有的节点上进行镜像\n                        exactly：表示在指定个数的节点上进行镜像，节点的个数由 ha-params 指定\n                        nodes：表示在指定的节点上进行镜像，节点名称通过 ha-params 指定\n            \t  ha-params：ha-mode模式需要用到的参数\n                ha-sync-mode：进行队列中消息的同步方式，有效值为 automatic 和 manual(默认)\n                priority：可选参数，policy 的优先级(数字越高，优先级越高)\n"),s("span",{pre:!0,attrs:{class:"token title important"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("#")]),t._v(" 1.查看当前策略")]),t._v("\n\trabbitmqctl list_policies\n\n"),s("span",{pre:!0,attrs:{class:"token title important"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("#")]),t._v(" 2.添加策略")]),t._v('\n\trabbitmqctl set_policy ha-all \'^hello\' \'{"ha-mode":"all","ha-sync-mode":"automatic"}\' \n\t说明:策略正则表达式为 “^” 表示所有匹配所有队列名称  ^hello:匹配hello开头队列\n\n'),s("span",{pre:!0,attrs:{class:"token title important"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("#")]),t._v(" 3.删除策略")]),t._v("\n\trabbitmqctl clear_policy ha-all\n\n"),s("span",{pre:!0,attrs:{class:"token title important"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("#")]),t._v(" 4.测试集群")]),t._v("\n")])])]),s("Vssue")],1)}),[],!1,null,null,null);a.default=e.exports}}]);
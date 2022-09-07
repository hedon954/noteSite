(window.webpackJsonp=window.webpackJsonp||[]).push([[185],{597:function(e,s,a){"use strict";a.r(s);var t=a(47),r=Object(t.a)({},(function(){var e=this,s=e.$createElement,a=e._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"zookeeper-集群部署"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#zookeeper-集群部署"}},[e._v("#")]),e._v(" Zookeeper 集群部署")]),e._v(" "),a("h2",{attrs:{id:"_1-集群规划"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-集群规划"}},[e._v("#")]),e._v(" 1. 集群规划")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("name")]),e._v(" "),a("th",[e._v("ip")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("master")]),e._v(" "),a("td",[e._v("172.16.208.160")])]),e._v(" "),a("tr",[a("td",[e._v("slave1")]),e._v(" "),a("td",[e._v("172.16.208.161")])]),e._v(" "),a("tr",[a("td",[e._v("slave2")]),e._v(" "),a("td",[e._v("172.16.208.162")])])])]),e._v(" "),a("h2",{attrs:{id:"_2-下载-zookeeper"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-下载-zookeeper"}},[e._v("#")]),e._v(" 2. 下载 zookeeper")]),e._v(" "),a("blockquote",[a("p",[e._v("官网下载地址：https://zookeeper.apache.org/releases.html")])]),e._v(" "),a("p",[e._v("分别在三台机器上下载 zookeeper：")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("创建 zookeeper 目录，并预先创建好 data 目录")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" ~\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("mkdir")]),e._v(" zookeeper\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" zookeeper\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("mkdir")]),e._v(" data\n")])])])]),e._v(" "),a("li",[a("p",[e._v("下载 zookeeper")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("wget")]),e._v(" https://dlcdn.apache.org/zookeeper/zookeeper-3.7.0/apache-zookeeper-3.7.0-bin.tar.gz --no-check-certificate\n")])])])]),e._v(" "),a("li",[a("p",[e._v("解压")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("tar")]),e._v(" -zxvf apache-zookeeper-3.7.0-bin.tar.gz\n")])])])]),e._v(" "),a("li",[a("p",[e._v("进入解压后的文件夹中")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" apache-zookeeper-3.7.0-bin\n")])])])])]),e._v(" "),a("h2",{attrs:{id:"_3-修改配置文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-修改配置文件"}},[e._v("#")]),e._v(" 3. 修改配置文件")]),e._v(" "),a("p",[e._v("分别修改三台机器上的 zookeeper 配置文件：")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("进入 conf 目录")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" conf\n")])])])]),e._v(" "),a("li",[a("p",[e._v("复制 zoo_sample.cfg 文件并重命名为 zoo.cfg")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("cp")]),e._v(" zoo_sample.cfg zoo.cfg\n")])])])]),e._v(" "),a("li",[a("p",[e._v("修改 zoo.cfg")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("vim")]),e._v(" zoo.cfg\n")])])]),a("p",[e._v("内容如下：")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# The number of milliseconds of each tick")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("tickTime")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("2000")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# The number of ticks that the initial ")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# synchronization phase can take")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("initLimit")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("10")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# The number of ticks that can pass between ")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# sending a request and getting an acknowledgement")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("syncLimit")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("5")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# the directory where the snapshot is stored.")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# do not use /tmp for storage, /tmp here is just ")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# example sakes.")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("dataDir")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("/root/zookeeper/data\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# the port at which the clients will connect")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("clientPort")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("2181")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# cluster")]),e._v("\nserver.0"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("172.16")]),e._v(".208.160:2888:3888\nserver.1"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("172.16")]),e._v(".208.161:2888:3888\nserver.2"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("172.16")]),e._v(".208.162:2888:3888\n")])])]),a("ul",[a("li",[a("code",[e._v("tickTime")]),e._v(": 基本事件单元，这个时间是作为 Zookeeper 服务器之间或客户端与服务器之间维持心跳的时间间隔，每隔 tickTime 时间就会发送一个心跳；最小的 session 过期时间为 2 倍 tickTime；")]),e._v(" "),a("li",[a("code",[e._v("initLimit")]),e._v(": 允许 follower 连接并同步到 Leader 的初始化连接时间，以 tickTime 为单位。当初始化连接时间超过该值，则表示连接失败；")]),e._v(" "),a("li",[a("code",[e._v("syncLimit")]),e._v(": 表示 Leader 与 Follower 之间发送消息时，请求和应答时间长度。如果 Follower 在设置时间内不能与 Leader 通信，那么此 Follower 将会被丢弃；")]),e._v(" "),a("li",[a("code",[e._v("dataDir")]),e._v(": 存储内存中数据库快照的位置，除非另有说明，否则指向数据库更新的事务日志。注意：应该谨慎的选择日志存放的位置，使用专用的日志存储设备能够大大提高系统的性能，如果将日志存储在比较繁忙的存储设备上，那么将会很大程度上影像系统性能；")]),e._v(" "),a("li",[a("code",[e._v("clientPort")]),e._v(": 监听客户端连接的端口；")]),e._v(" "),a("li",[a("code",[e._v("service.A=B:C:D")]),e._v(" "),a("ul",[a("li",[e._v("A：其中 A 是一个数字，表示这个是服务器的编号；")]),e._v(" "),a("li",[e._v("B：是这个服务器的 IP 地址；")]),e._v(" "),a("li",[e._v("C：Zookeeper 服务器之间的通信端口；")]),e._v(" "),a("li",[e._v("D：Leader 选举的端口。")])])])]),e._v(" "),a("blockquote",[a("p",[e._v("更多参考官网：https://zookeeper.apache.org/doc/r3.5.8/zookeeperAdmin.html#sc_configuration")])])])]),e._v(" "),a("h2",{attrs:{id:"_4-创建-myid-文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-创建-myid-文件"}},[e._v("#")]),e._v(" 4. 创建 myid 文件")]),e._v(" "),a("p",[e._v("分别为三台 zookeeper 服务器创建唯一标志文件：")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("在上步中 "),a("code",[e._v("dataDir")]),e._v(" 目录下创建 "),a("code",[e._v("myid")]),e._v(" 文件")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" /root/zookeeper/data\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("vim")]),e._v(" myid\n")])])])]),e._v(" "),a("li",[a("p",[e._v("在该文件添加上一步 server 配置的对应 A 数字")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[e._v("server.0"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("172.16")]),e._v(".208.160:2888:3888\nserver.1"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("172.16")]),e._v(".208.161:2888:3888\nserver.2"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("172.16")]),e._v(".208.162:2888:3888\n")])])]),a("p",[e._v("服务器一：在 myid 中写 0")]),e._v(" "),a("p",[e._v("服务器二：在 myid 中写 1")]),e._v(" "),a("p",[e._v("服务器三：在 myid 中写 2")])])]),e._v(" "),a("h2",{attrs:{id:"_5-配置环境变量"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-配置环境变量"}},[e._v("#")]),e._v(" 5. 配置环境变量")]),e._v(" "),a("p",[e._v("为了能够在任意目录启动 zookeeper 集群，我们需要在三台机器上分别配置环境变量：")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("在 /etc/profile 末尾添加")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("#set zookeeper environment")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("export")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("ZK_HOME")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("/root/zookeeper/apache-zookeeper-3.7.0-bin\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("export")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a("span",{pre:!0,attrs:{class:"token environment constant"}},[e._v("PATH")])]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token environment constant"}},[e._v("$PATH")]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v(":")]),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$ZK_HOME")]),e._v("/bin\n")])])])]),e._v(" "),a("li",[a("p",[e._v("刷新配置")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("source")]),e._v(" /etc/profile\n")])])])])]),e._v(" "),a("p",[e._v("7475633000")]),e._v(" "),a("p",[e._v("9188466000")]),e._v(" "),a("h2",{attrs:{id:"_6-启动-zookeeper-集群"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-启动-zookeeper-集群"}},[e._v("#")]),e._v(" 6. 启动 zookeeper 集群")]),e._v(" "),a("p",[e._v("常用命令：")]),e._v(" "),a("ul",[a("li",[e._v("启动命令：zkServer.sh start")]),e._v(" "),a("li",[e._v("停止命令：zkServer.sh stop")]),e._v(" "),a("li",[e._v("重启命令：zkServer.sh restart")]),e._v(" "),a("li",[e._v("集群状态：zkServer.sh status")])]),e._v(" "),a("p",[e._v("分别启动三台机器的 zookeeper：")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[e._v("zkServer.sh start\n")])])]),a("p",[e._v("分别查看各个机器中的集群状态：")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("root@localhost ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# zkServer.sh status")]),e._v("\n/bin/java\nZooKeeper JMX enabled by default\nUsing config: /root/zookeeper/apache-zookeeper-3.7.0-bin/bin/"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("..")]),e._v("/conf/zoo.cfg\nClient port found: "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("2181")]),e._v(". Client address: localhost. Client SSL: false.\nMode: leader\n")])])]),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("root@localhost ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# zkServer.sh status")]),e._v("\n/bin/java\nZooKeeper JMX enabled by default\nUsing config: /root/zookeeper/apache-zookeeper-3.7.0-bin/bin/"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("..")]),e._v("/conf/zoo.cfg\nClient port found: "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("2181")]),e._v(". Client address: localhost. Client SSL: false.\nMode: follower\n")])])]),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("root@localhost ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# zkServer.sh status")]),e._v("\n/bin/java\nZooKeeper JMX enabled by default\nUsing config: /root/zookeeper/apache-zookeeper-3.7.0-bin/bin/"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("..")]),e._v("/conf/zoo.cfg\nClient port found: "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("2181")]),e._v(". Client address: localhost. Client SSL: false.\nMode: follower\n")])])]),a("Vssue")],1)}),[],!1,null,null,null);s.default=r.exports}}]);
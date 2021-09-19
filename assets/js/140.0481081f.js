(window.webpackJsonp=window.webpackJsonp||[]).push([[140],{549:function(t,e,a){"use strict";a.r(e);var r=a(47),s=Object(r.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"docker-网络"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#docker-网络"}},[t._v("#")]),t._v(" Docker 网络")]),t._v(" "),a("h2",{attrs:{id:"一、docker-网络"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、docker-网络"}},[t._v("#")]),t._v(" 一、Docker 网络")]),t._v(" "),a("p",[t._v("Docker 网络主要是解决容器联网问题，也是我们使用容器中最重要的一个环节，如果容器没有网络则无法向网络中提供服务。")]),t._v(" "),a("p",[a("strong",[t._v("网络管理命令：docker network")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("[root@VM-12-10-centos ~]# docker network --helpUsage:\tdocker network COMMANDManage networksOptions:      --help   Print usageCommands:  connect     Connect a container to a network  create      Create a network  disconnect  Disconnect a container from a network  inspect     Display detailed information on one or more networks  ls          List networks  prune       Remove all unused networks  rm          Remove one or more networksRun 'docker network COMMAND --help' for more information on a command.\n")])])]),a("h2",{attrs:{id:"二、docker-网络类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二、docker-网络类型"}},[t._v("#")]),t._v(" 二、Docker 网络类型")]),t._v(" "),a("ul",[a("li",[t._v("bridge")]),t._v(" "),a("li",[t._v("host")]),t._v(" "),a("li",[t._v("none")]),t._v(" "),a("li",[t._v("容器网络或联盟网络")])]),t._v(" "),a("blockquote",[a("p",[t._v("PS：以下示例均在 Linux 环境下。")])]),t._v(" "),a("h3",{attrs:{id:"_1-bridge"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-bridge"}},[t._v("#")]),t._v(" 1. bridge")]),t._v(" "),a("p",[t._v("桥接网络是指容器通过桥接的方式将容器网卡桥接到宿主机的 "),a("strong",[t._v("docker0")]),t._v(" 网桥，然后再通过宿主机防火墙的 "),a("strong",[t._v("NAT")]),t._v(" 表实现与外网的联系。")]),t._v(" "),a("p",[a("strong",[t._v("查看宿主机网卡")])]),t._v(" "),a("p",[t._v("我们可以使用 "),a("code",[t._v("ifconfig")]),t._v(" 来查看宿主机的 "),a("strong",[t._v("docker0")]),t._v(" 网桥：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("[root@zutuanxue ~]# ifconfig \n# docker0 网桥\ndocker0: flags=4163<UP,BROADCAST,RUNNING,MULTICAST>  mtu 1500\n        inet 172.17.0.1  netmask 255.255.0.0  broadcast 172.17.255.255\n        inet6 fe80::42:c7ff:fe37:8e8  prefixlen 64  scopeid 0x20<link>\n        ether 02:42:c7:37:08:e8  txqueuelen 0  (Ethernet)\n        RX packets 6618  bytes 277975 (271.4 KiB)\n        RX errors 0  dropped 0  overruns 0  frame 0\n        TX packets 8152  bytes 24675021 (23.5 MiB)\n        TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0\n\n.....省略了本机的网卡信息\n\n# 容器网卡，每创建一个桥接网络的容器就会生成一个对应的网卡\nvethf75a942: flags=4163<UP,BROADCAST,RUNNING,MULTICAST>  mtu 1500\n        inet6 fe80::9085:f5ff:fe34:77b5  prefixlen 64  scopeid 0x20<link>\n        ether 92:85:f5:34:77:b5  txqueuelen 0  (Ethernet)\n        RX packets 2850  bytes 158484 (154.7 KiB)\n        RX errors 0  dropped 0  overruns 0  frame 0\n        TX packets 3397  bytes 11613136 (11.0 MiB)\n        TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0\n")])])]),a("p",[t._v("如果想看更详细的信息，可以使用 "),a("code",[t._v("ip add show")]),t._v(" 命令：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("4: docker0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc noqueue state UP group default \n    link/ether 02:42:c7:37:08:e8 brd ff:ff:ff:ff:ff:ff\n    inet 172.17.0.1/16 brd 172.17.255.255 scope global docker0\n       valid_lft forever preferred_lft forever\n    inet6 fe80::42:c7ff:fe37:8e8/64 scope link \n       valid_lft forever preferred_lft forever\n")])])]),a("p",[t._v("这里的 "),a("strong",[t._v("vethf75a942@if13")]),t._v(" 指的就是容器网卡，V 代表虚拟网卡的意思，eth 以太网卡，f75a942 网卡编号，if13 指的是宿主机网桥（docekr0）的一个端口，对应容器的网卡编号加 1。所以容器内的网卡编号应该是 "),a("strong",[t._v("eth0@if14")]),t._v("。")]),t._v(" "),a("p",[t._v("在容器中执行命令 "),a("code",[t._v("ip add show")]),t._v(" 也可以看到：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("[root@zutuanxue ~]# docker exec centos1 ip add show\n1: lo: <LOOPBACK,UP,LOWER_UP> mtu 65536 qdisc noqueue state UNKNOWN group default qlen 1000\n    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00\n    inet 127.0.0.1/8 scope host lo\n       valid_lft forever preferred_lft forever\n13: eth0@if14: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc noqueue state UP group default \n    link/ether 02:42:ac:11:00:03 brd ff:ff:ff:ff:ff:ff link-netnsid 0\n    inet 172.17.0.3/16 brd 172.17.255.255 scope global eth0\n       valid_lft forever preferred_lft forever\n")])])]),a("p",[a("strong",[t._v("查看宿主机防火墙的 NAT 表内容")])]),t._v(" "),a("p",[t._v("使用 "),a("code",[t._v("iptables -t nat -L")]),t._v(" 命令可以查看宿主机防火墙的 NAT 表内容：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("[root@zutuanxue ~]# iptables -t nat -LChain PREROUTING (policy ACCEPT)target     prot opt source               destination         DOCKER     all  --  anywhere             anywhere             ADDRTYPE match dst-type LOCALChain INPUT (policy ACCEPT)target     prot opt source               destination         Chain OUTPUT (policy ACCEPT)target     prot opt source               destination         DOCKER     all  --  anywhere            !loopback/8           ADDRTYPE match dst-type LOCALChain POSTROUTING (policy ACCEPT)target     prot opt source               destination         MASQUERADE  all  --  172.17.0.0/16        anywhere            Chain DOCKER (2 references)target     prot opt source               destination         RETURN     all  --  anywhere             anywhere   \n")])])]),a("p",[a("strong",[t._v("查看容器网卡和 docker0 网卡的桥接信息")])]),t._v(" "),a("p",[t._v("使用 "),a("code",[t._v("brctl show")]),t._v(" 可以查看容器网卡和 docker0 网卡的桥接信息：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("[root@zutuanxue ~]# brctl show\nbridge name\tbridge id\t\tSTP enabled\tinterfaces\ndocker0\t\t8000.0242c73708e8\tno\t\tvethf75a942\n")])])]),a("p",[t._v("如果 "),a("code",[t._v("brctl command not found")]),t._v("，则需要先安装以太网管理工具：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("yum install bridge-utils\n")])])]),a("h3",{attrs:{id:"_2-host"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-host"}},[t._v("#")]),t._v(" 2. host")]),t._v(" "),a("p",[t._v("容器和真机共用网卡及对应的端口，缺点就是同一个端口只能宿主机或者某个容器使用，其他容器不能用。")]),t._v(" "),a("h3",{attrs:{id:"_3-none"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-none"}},[t._v("#")]),t._v(" 3. none")]),t._v(" "),a("p",[t._v("容器仅有 lo 网卡，是一个不能联网的本地容器。")]),t._v(" "),a("h2",{attrs:{id:"三、docker-网桥网络"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三、docker-网桥网络"}},[t._v("#")]),t._v(" 三、Docker 网桥网络")]),t._v(" "),a("p",[t._v("不同的服务容器组应用不同的网桥，避免同一网络内容器太多，保持容器网络独立性。")]),t._v(" "),a("p",[t._v("关于新网桥联网问题：创建网桥后，宿主机会自动帮你做 NAT，所以不用担心联网问题。")]),t._v(" "),a("h5",{attrs:{id:"_1-查看网络"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-查看网络"}},[t._v("#")]),t._v(" 1. 查看网络")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("docker network ls\n")])])]),a("p",[t._v("示例：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("[root@VM-12-10-centos ~]# docker network ls\nNETWORK ID          NAME                DRIVER              SCOPE\n4bcb191d2317        bridge              bridge              local\n1ba893b67e39        host                host                local\n2cfd6854663b        none                null                local\n")])])]),a("h5",{attrs:{id:"_2-创建网桥"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-创建网桥"}},[t._v("#")]),t._v(" 2. 创建网桥")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("docker network create -d bridge --subnet .... --gateway ...  网桥名\n")])])]),a("p",[t._v("示例：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("[root@VM-12-10-centos ~]# docker network create -d bridge --subnet 192.168.1.0/24 --gateway 192.168.1.1 mydocker0\n966b7623db05c978c01d448ddf81088333ea065cf71863f716f19677108cf9e9\n[root@VM-12-10-centos ~]# docker network ls\nNETWORK ID          NAME                DRIVER              SCOPE\n4bcb191d2317        bridge              bridge              local\n1ba893b67e39        host                host                local\n966b7623db05        mydocker0           bridge              local\n2cfd6854663b        none                null                local\n")])])]),a("h5",{attrs:{id:"_3-修改网桥名字"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-修改网桥名字"}},[t._v("#")]),t._v(" 3. 修改网桥名字")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("1、关闭新建网桥[root@zutuanxue ~]# ip link set dev br-6a410e27b66e down2、修改名字[root@zutuanxue ~]# ip link set dev br-6a410e27b66e name  mydocker03、启动网桥[root@zutuanxue ~]# ip link set dev mydocker0 up4、重启docker服务[root@zutuanxue ~]# systemctl restart docker\n")])])]),a("h5",{attrs:{id:"_4-删除未使用的网桥"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-删除未使用的网桥"}},[t._v("#")]),t._v(" 4. 删除未使用的网桥")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("docker network prune\n")])])]),a("p",[t._v("示例：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("[root@VM-12-10-centos ~]# docker network prune\nWARNING! This will remove all networks not used by at least one container.\nAre you sure you want to continue? [y/N] y\nDeleted Networks:\nmydocker0\n")])])]),a("h5",{attrs:{id:"_5-删除某个网桥"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-删除某个网桥"}},[t._v("#")]),t._v(" 5. 删除某个网桥")]),t._v(" "),a("p",[t._v("注意：不能被活动容器占用。")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("docker network rm 网桥名\n")])])]),a("p",[t._v("示例：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("[root@zutuanxue ~]# docker network rm docker100docker100\n")])])]),a("h5",{attrs:{id:"_6-容器连接到网桥"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-容器连接到网桥"}},[t._v("#")]),t._v(" 6. 容器连接到网桥")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("docker network connect 网桥名 容器名\n")])])]),a("p",[t._v("示例：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("[root@zutuanxue ~]# docker network connect docker1 centos1\n")])])]),a("p",[t._v("发现 centos1 容器多了一块网卡，使用的正是 docker1 的网段：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("[root@zutuanxue ~]# docker exec centos1 ifconfigeth0: flags=4163<UP,BROADCAST,RUNNING,MULTICAST>  mtu 1500        inet 172.17.0.2  netmask 255.255.0.0  broadcast 172.17.255.255        ether 02:42:ac:11:00:02  txqueuelen 0  (Ethernet)        RX packets 8  bytes 656 (656.0 B)        RX errors 0  dropped 0  overruns 0  frame 0        TX packets 0  bytes 0 (0.0 B)        TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0eth1: flags=4163<UP,BROADCAST,RUNNING,MULTICAST>  mtu 1500        inet 192.168.1.2  netmask 255.255.255.0  broadcast 192.168.1.255        ether 02:42:c0:a8:01:02  txqueuelen 0  (Ethernet)        RX packets 16  bytes 1312 (1.2 KiB)        RX errors 0  dropped 0  overruns 0  frame 0        TX packets 0  bytes 0 (0.0 B)        TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0lo: flags=73<UP,LOOPBACK,RUNNING>  mtu 65536        inet 127.0.0.1  netmask 255.0.0.0        loop  txqueuelen 1000  (Local Loopback)        RX packets 0  bytes 0 (0.0 B)        RX errors 0  dropped 0  overruns 0  frame 0        TX packets 0  bytes 0 (0.0 B)        TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0\n")])])]),a("h5",{attrs:{id:"_7-容器断开网桥"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_7-容器断开网桥"}},[t._v("#")]),t._v(" 7. 容器断开网桥")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("docker network disconnect 网桥名 容器名\n")])])]),a("h3",{attrs:{id:"常见问题合集"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常见问题合集"}},[t._v("#")]),t._v(" 常见问题合集")]),t._v(" "),a("div",{staticClass:"language-markdown extra-class"},[a("pre",{pre:!0,attrs:{class:"language-markdown"}},[a("code",[a("span",{pre:!0,attrs:{class:"token title important"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("#")]),t._v(' 常见问题一：使用改名后的新网桥的容器可能无法解析域名原因：没有配置新网桥的 DNS解决方法：为容器手动配置一个 DNS 地址即可# 常见问题二：Networking will not work[root@zutuanxue ~]# docker run -d --network docker100 --name centos4 baishuming2020/centos_nginxWARNING: IPv4 forwarding is disabled. Networking will not work.67f2c276123c993cd66b9d7a99ba22402331a13f9ea8817e57324a934896b805解决方案: 1. 打开转发[root@zutuanxue ~]# echo "net.ipv4.ip_forward=1" >>  /usr/lib/sysctl.d/00-system.conf2. 重启网络[root@zutuanxue ~]# systemctl restart network')]),t._v("\n")])])]),a("h2",{attrs:{id:"四、docker-不同主机间容器通信"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#四、docker-不同主机间容器通信"}},[t._v("#")]),t._v(" 四、Docker 不同主机间容器通信")]),t._v(" "),a("h3",{attrs:{id:"_1-macvlan"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-macvlan"}},[t._v("#")]),t._v(" 1. macvlan")]),t._v(" "),a("p",[t._v("在 Docker 中，"),a("strong",[t._v("macvlan")]),t._v(" 是众多 Docker 网络模型中的一种，并且是一种跨主机的网络模型，作为一种驱动启用，Docker macvlan 只支持 "),a("strong",[t._v("bridge")]),t._v(" 模式。")]),t._v(" "),a("div",{staticClass:"language-markdown extra-class"},[a("pre",{pre:!0,attrs:{class:"language-markdown"}},[a("code",[a("span",{pre:!0,attrs:{class:"token title important"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("#")]),t._v(" macvlan 需要一块独立的网卡来进行使用，所以我们需要新添加一块网卡docker network create -d macvlan --subnet=172.16.10.0/24 --gateway=172.16.10.1  -o parent=ens224  mtacvlan-1# -o parent=网卡名称  指定用来给 macvlan 网络使用的物理网卡# 注意，要在所有需要运行 macvlan 的主机上执行这条命令，但是要记得更改网关的地址，避免造成 IP 冲突")]),t._v("\n")])])]),a("h3",{attrs:{id:"_2-overlay"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-overlay"}},[t._v("#")]),t._v(" 2. overlay")]),t._v(" "),a("p",[t._v("在 Docker 中，"),a("strong",[t._v("overlay")]),t._v(" 是众多 Docker 网络模型中的一种，并且是一种跨主机的全局网络模型，有一个数据库专门的来存储网络分配信息，避免 IP 冲突，同时内部还有一个小型的 DNS 我们可以直接通过主机名进行访问。")]),t._v(" "),a("div",{staticClass:"language-markdown extra-class"},[a("pre",{pre:!0,attrs:{class:"language-markdown"}},[a("code",[a("span",{pre:!0,attrs:{class:"token title important"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("#")]),t._v(" 1. consul 服务端：")]),t._v("\ndocker run -itd -h consul --name consul --restart=always -p 8500:8500 progrium/consul -server -bootstrap\n\n-h \t\t\t\t主机名\n–name \t\t\t容器名\n–restart=always 重启策略\nprogrium/consul 镜像名称\n-server \t\t以服务节点启动\n-bootstrap\t\t预期的启动节点数：自举\n\n"),a("span",{pre:!0,attrs:{class:"token title important"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("#")]),t._v(" 2. 在浏览器内输入 IP地址+端口号 可以看到 web 页面")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token title important"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("#")]),t._v(" 3. 在所有主机上编辑 daemon.json 文件：")]),t._v('\n{\n"hosts": ["tcp://0.0.0.0:2375","unix:///var/run/docker.sock"]， 监听相关端口\n"cluster-store":"consul://192.168.1.150:8500",\t\t   集群的主机地址\n"cluster-advertise":"192.168.1.150:2375”\t\t宣告自己的地址 \n}\n\n'),a("span",{pre:!0,attrs:{class:"token title important"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("#")]),t._v(" 4. 重启 docker 服务")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token title important"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("#")]),t._v(" 5. 创建 overlay 网络（全局网络）：一台主机上创建自动同步")]),t._v("\n\tdocker network create -d overlay overlay-1\n\n"),a("span",{pre:!0,attrs:{class:"token title important"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("#")]),t._v(" 6. 启动容器测试：")]),t._v("\n\tdocker run -it --name docker-1 --network=overlay-1 centos /bin/bash\n\tdocker run -it --name docker-2 --network=overlay-1 centos /bin/bash\n\n"),a("span",{pre:!0,attrs:{class:"token title important"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("#")]),t._v(" 7. 验证：ping docker-1")]),t._v("\n")])])]),a("h3",{attrs:{id:"常见问题合集-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常见问题合集-2"}},[t._v("#")]),t._v(" 常见问题合集：")]),t._v(" "),a("div",{staticClass:"language-markdown extra-class"},[a("pre",{pre:!0,attrs:{class:"language-markdown"}},[a("code",[a("span",{pre:!0,attrs:{class:"token title important"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("#")]),t._v(" 场景问题一：各容器内分配的ip之间相互ping不通")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token list punctuation"}},[t._v("-")]),t._v(" 原因：可能由于防火墙问题引起的，默认 forward 链是d rop状 态，需要打开才可以。\n\n"),a("span",{pre:!0,attrs:{class:"token list punctuation"}},[t._v("-")]),t._v(" 解决方案:\n执行下面操作，保证 "),a("span",{pre:!0,attrs:{class:"token code keyword"}},[t._v("`INPUT`")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token code keyword"}},[t._v("`FORWARD`")]),t._v(" 链都是 "),a("span",{pre:!0,attrs:{class:"token code keyword"}},[t._v("`ACCEPT`")]),t._v(" 状态\n\n清除其他规则\n[root@zutuanxue_node1 "),a("span",{pre:!0,attrs:{class:"token strike"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("~")]),a("span",{pre:!0,attrs:{class:"token content"}},[t._v("]# iptables -P INPUT ACCEPT\n[root@zutuanxue_node1 ")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("~")])]),t._v("]# iptables -P FORWARD ACCEPT\n[root@zutuanxue_node1 "),a("span",{pre:!0,attrs:{class:"token strike"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("~")]),a("span",{pre:!0,attrs:{class:"token content"}},[t._v("]# iptables -F\n[root@zutuanxue_node1 ")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("~")])]),t._v("]# iptables -L -n\n\n[root@zutuanxue_node2 "),a("span",{pre:!0,attrs:{class:"token strike"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("~")]),a("span",{pre:!0,attrs:{class:"token content"}},[t._v("]# iptables -P INPUT ACCEPT\n[root@zutuanxue_node2 ")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("~")])]),t._v("]# iptables -P FORWARD ACCEPT\n[root@zutuanxue_node2 "),a("span",{pre:!0,attrs:{class:"token strike"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("~")]),a("span",{pre:!0,attrs:{class:"token content"}},[t._v("]# iptables -F\n[root@zutuanxue_node2 ")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("~")])]),t._v("]# iptables -L -n\n")])])])])}),[],!1,null,null,null);e.default=s.exports}}]);
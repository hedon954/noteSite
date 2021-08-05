(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{460:function(s,e,t){"use strict";t.r(e);var a=t(47),n=Object(a.a)({},(function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"八、redis-哨兵模式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#八、redis-哨兵模式"}},[s._v("#")]),s._v(" 八、Redis 哨兵模式")]),s._v(" "),t("h2",{attrs:{id:"_1-哨兵监控架构"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-哨兵监控架构"}},[s._v("#")]),s._v(" 1. 哨兵监控架构")]),s._v(" "),t("h3",{attrs:{id:"_1-1-sentinel-基本架构"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-sentinel-基本架构"}},[s._v("#")]),s._v(" 1.1 Sentinel 基本架构")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://tva1.sinaimg.cn/large/008i3skNly1gt5oidawvjj31uy0oitc1.jpg",alt:"image-20210805095808285"}})]),s._v(" "),t("p",[s._v("Redis Sentinel 是分布式系统中监控 Redis 主从服务器，并提供主服务器下线时自动故障转移功能的模式，其中四个特性为：")]),s._v(" "),t("ul",[t("li",[s._v("监控（monitoring）")]),s._v(" "),t("li",[s._v("提醒（notification）")]),s._v(" "),t("li",[s._v("自动故障迁移（Automatic failover）")]),s._v(" "),t("li",[s._v("配置提供者（Configuration provider）")])]),s._v(" "),t("h3",{attrs:{id:"_1-2-sentinel-分布式特性"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-sentinel-分布式特性"}},[s._v("#")]),s._v(" 1.2 Sentinel 分布式特性")]),s._v(" "),t("p",[s._v("Redis Sentinel 是一个分布式系统，可以在一个架构中运行多个 Sentinel 进程，优势如下：")]),s._v(" "),t("ul",[t("li",[s._v("降低了误报的可能性")]),s._v(" "),t("li",[s._v("降低对客户端的影响")]),s._v(" "),t("li",[s._v("任意 Sentinel 都可对外提供服务")])]),s._v(" "),t("h3",{attrs:{id:"_1-3-sentinel-部署前注意点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-sentinel-部署前注意点"}},[s._v("#")]),s._v(" 1.3 Sentinel 部署前注意点")]),s._v(" "),t("ul",[t("li",[s._v("默认端口：26379")]),s._v(" "),t("li",[s._v("至少 3 个 Sentinel 实例")]),s._v(" "),t("li",[s._v("运行 Sentinel 必须制定配置文件")]),s._v(" "),t("li",[s._v("独立的虚拟机或物理机中运行")]),s._v(" "),t("li",[s._v("可配置 Sentinel 允许丢失有限的写入")]),s._v(" "),t("li",[s._v("客户端要支持 Sentinel")]),s._v(" "),t("li",[s._v("经常在测试环境中测试")]),s._v(" "),t("li",[s._v("在 Docker、端口映射或网络地址转换的环境中配置要格外小心")])]),s._v(" "),t("h3",{attrs:{id:"_1-4-优点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-4-优点"}},[s._v("#")]),s._v(" 1.4 优点")]),s._v(" "),t("ul",[t("li",[s._v("哨兵模式是基于主从模式的，所有主从的优点，哨兵模式都有")]),s._v(" "),t("li",[s._v("有了哨兵之后主从可以自动切换，系统更健壮，可用性更高")]),s._v(" "),t("li",[s._v("Sentinel 会不断地检查主从服务器是否运作正常，当贝监控的某个 Redis 服务器出现问题时，Sentinel 可以通过 API 向管理员或其他应用程序发送通知")])]),s._v(" "),t("h3",{attrs:{id:"_1-5-缺点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-5-缺点"}},[s._v("#")]),s._v(" 1.5 缺点")]),s._v(" "),t("ul",[t("li",[s._v("主从切换需要时间，会丢失数据")]),s._v(" "),t("li",[s._v("还是没有解决主节点写的压力")]),s._v(" "),t("li",[s._v("主节点的写能力、存储能力受到单机的限制")]),s._v(" "),t("li",[s._v("动态扩容困难复杂，对于集群，容量达到上限时在线扩容会变得很复杂")])]),s._v(" "),t("h2",{attrs:{id:"_2-哨兵环境搭建"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-哨兵环境搭建"}},[s._v("#")]),s._v(" 2. 哨兵环境搭建")]),s._v(" "),t("h3",{attrs:{id:"_2-1-环境准备"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-环境准备"}},[s._v("#")]),s._v(" 2.1 环境准备")]),s._v(" "),t("ul",[t("li",[s._v("搭建主从模式："),t("RouterLink",{attrs:{to:"/backend/middleware/redis/redis_master_slave.html"}},[s._v("Redis 主从模式")])],1)]),s._v(" "),t("h3",{attrs:{id:"_2-2-编写配置文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-编写配置文件"}},[s._v("#")]),s._v(" 2.2 编写配置文件")]),s._v(" "),t("p",[s._v("三个节点分别创建 "),t("code",[s._v("sentinel.conf")]),s._v("：")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" /usr/local/redis/conf/sentinel.conf\n")])])]),t("p",[s._v("添加一下内容：")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 放行所有 IP")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("bind")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),s._v(".0.0\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 进程端口号")]),s._v("\nport "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("26379")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 后台启动")]),s._v("\ndaemonize "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("yes")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 日志记录文件")]),s._v("\nlogfile "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/usr/local/redis/log/sentinel.log"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 进程编号记录文件")]),s._v("\npidfile /var/run/sentinel.pid\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 指示 Sentinel 去监视一个名为 mymaster 的主服务器，最后的 2 表示仲裁，有 2 个节点连上了就判断没有断线（案例中共 3 节点）")]),s._v("\nsentinel monitor mymaster "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("172.16")]),s._v(".58.200 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("6379")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 访问主节点的密码")]),s._v("\nsentinel auth-pass mymaster "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("123456")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Sentinel 认为服务器已经断线所需的毫秒数")]),s._v("\nsentinel down-after-milliseconds mymaster "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10000")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 若 Sentinel 在该配置值内未能完成 failover 操作，则认为本次 failover 失败")]),s._v("\nsentinel failover-timeout mymaster "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("180000")]),s._v("\n")])])]),t("h3",{attrs:{id:"_2-3-启动服务"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-启动服务"}},[s._v("#")]),s._v(" 2.3 启动服务")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("先关闭现有的 redis 服务")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ps")]),s._v(" -ef "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" redis\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("kill")]),s._v(" -9 PID\n")])])])]),s._v(" "),t("li",[t("p",[s._v("再启动 3 个 redis 服务")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("/usr/local/redis/bin/redis-server /usr/local/redis/conf/redis.conf\n")])])])]),s._v(" "),t("li",[t("p",[s._v("再启动 3 个 sentinel 服务")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("/usr/local/redis/bin/redis-sentinel /usr/local/redis/conf/sentinel.conf\n")])])])])]),s._v(" "),t("h2",{attrs:{id:"_3-哨兵工作原理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-哨兵工作原理"}},[s._v("#")]),s._v(" 3. 哨兵工作原理")]),s._v(" "),t("h3",{attrs:{id:"_3-1-日志分析"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-日志分析"}},[s._v("#")]),s._v(" 3.1 日志分析")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("查看 "),t("code",[s._v("sentinel.log")])]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" /usr/local/redis/log/sentinel.log\n")])])])]),s._v(" "),t("li",[t("p",[s._v("内容如下")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 加载 sentinel.conf 配置")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("46572")]),s._v(":X 04 Aug "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2021")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("19")]),s._v(":22:38.380 "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Configuration loaded")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("46572")]),s._v(":X 04 Aug "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2021")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("19")]),s._v(":22:38.382 * Increased maximum number of "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("open")]),s._v(" files to "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10032")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("it was originally "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" to "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1024")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(".\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 运行一个 sentinel 节点")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("46572")]),s._v(":X 04 Aug "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2021")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("19")]),s._v(":22:38.383 * Running "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("mode")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("sentinel, "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("port")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("26379")]),s._v(".\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("46572")]),s._v(":X 04 Aug "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2021")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("19")]),s._v(":22:38.383 "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# WARNING: The TCP backlog setting of 511 cannot be enforced because /proc/sys/net/core/somaxconn is set to the lower value of 128.")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("46572")]),s._v(":X 04 Aug "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2021")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("19")]),s._v(":22:38.385 "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Sentinel ID is 9b6c6d520bd4cbc939801a9206c5daf6bab76214")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 监控 mymaster 节点，仲裁为 2")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("46572")]),s._v(":X 04 Aug "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2021")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("19")]),s._v(":22:38.385 "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# +monitor master mymaster 172.16.58.200 6379 quorum 2")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("46572")]),s._v(":X 04 Aug "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2021")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("19")]),s._v(":22:38.386 * +slave slave "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("172.16")]),s._v(".58.201:6379 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("172.16")]),s._v(".58.201 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("6379")]),s._v(" @ mymaster "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("172.16")]),s._v(".58.200 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("6379")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("46572")]),s._v(":X 04 Aug "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2021")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("19")]),s._v(":22:38.388 * +slave slave "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("172.16")]),s._v(".58.202:6379 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("172.16")]),s._v(".58.202 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("6379")]),s._v(" @ mymaster "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("172.16")]),s._v(".58.200 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("6379")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 发现其他的 sentinel 节点，也加进来")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("46572")]),s._v(":X 04 Aug "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2021")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("19")]),s._v(":22:42.155 * +sentinel sentinel 439cd14c6448e3995062f56a5c9af611acedc52b "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("172.16")]),s._v(".58.201 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("26379")]),s._v(" @ mymaster "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("172.16")]),s._v(".58.200 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("6379")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("46572")]),s._v(":X 04 Aug "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2021")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("19")]),s._v(":22:43.288 * +sentinel sentinel da220efac4f9358479edd91715188fae38d28fdc "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("172.16")]),s._v(".58.202 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("26379")]),s._v(" @ mymaster "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("172.16")]),s._v(".58.200 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("6379")]),s._v("\n")])])])])]),s._v(" "),t("h3",{attrs:{id:"_3-2-定时任务"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-定时任务"}},[s._v("#")]),s._v(" 3.2 定时任务")]),s._v(" "),t("p",[s._v("Sentinel 内部有 3 个定时任务，分别是：")]),s._v(" "),t("ul",[t("li",[s._v("每 1 秒每个 Sentinel 对其他 Sentinel 和 Redis 节点执行 "),t("code",[s._v("ping")]),s._v(" 操作（监控）")]),s._v(" "),t("li",[s._v("每 2 秒每个 Sentinel 通过 Master 节点的 channel 交换信息（Publish/Subscribe）")]),s._v(" "),t("li",[s._v("每 10 秒每个 Sentinel 会对 Master 和 Slave 执行 "),t("code",[s._v("INFO")]),s._v(" 命令")])]),s._v(" "),t("h3",{attrs:{id:"_3-3-主观下线"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-主观下线"}},[s._v("#")]),s._v(" 3.3 主观下线")]),s._v(" "),t("p",[s._v("所谓主观下线（Subjectively Down，简称 SDOWN）指的是单个 Sentinel 实例在对服务器做出的下线判断，即单个 Sentinel 认为某个服务下线（有可能是接收不到订阅，之间的网络不通等原因）。")]),s._v(" "),t("h3",{attrs:{id:"_3-4-客观下线"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-4-客观下线"}},[s._v("#")]),s._v(" 3.4 客观下线")]),s._v(" "),t("p",[s._v("所谓客观下线（Objectively Down，检查 ODOWN）指的是多个 Sentinel 实例在对同一个服务器做出 SDOWN 判断，并且通过命令互相交流之后，得出的服务器下线判断，然后开启 failover。")]),s._v(" "),t("h3",{attrs:{id:"_3-4-仲裁"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-4-仲裁"}},[s._v("#")]),s._v(" 3.4 仲裁")]),s._v(" "),t("p",[s._v("仲裁指的是配置文件中的 "),t("code",[s._v("quorum")]),s._v(" 选项。")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 最后面的 2")]),s._v("\nsentinel monitor mymaster "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("172.16")]),s._v(".58.200 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("6379")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("\n")])])]),t("p",[t("code",[s._v("quorum")]),s._v(" 的值一般设置为 Sentinel 个数的 "),t("code",[s._v("n/2 + 1")]),s._v("，例如 3 个 Sentinel 就设置为 2。")]),s._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[s._v("quorum 机制")]),s._v(" "),t("p",[t("strong",[s._v("抽屉原理：")])]),s._v(" "),t("ul",[t("li",[s._v("一个群体 9 个人，有一个秘密，告诉给该群体中的任意 5 个人，那么随便挑选 5 个人，至少有 1 个人知道秘密。")])]),s._v(" "),t("p",[t("strong",[s._v("quorum 机制：")])]),s._v(" "),t("ul",[t("li",[t("p",[s._v("quorum 机制是抽屉原理的一种实际应用，经常用于分布式系统，是一种少数服从多数的思想。")])]),s._v(" "),t("li",[t("p",[s._v("quorum 机制在分布式共识算法当中经常是用来减轻写的压力（相应的读压力会增大），如：")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://tva1.sinaimg.cn/large/008i3skNly1gt5pm54qsxj31vp0u0dkn.jpg",alt:"image-20210805103621815"}})])])])]),s._v(" "),t("h3",{attrs:{id:"_3-5-原理总结"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-5-原理总结"}},[s._v("#")]),s._v(" 3.5 原理总结")]),s._v(" "),t("ol",[t("li",[s._v("每秒向其他 Sentinel 和 Master 以及 Slave 进行 "),t("code",[s._v("ping")]),s._v("；")]),s._v(" "),t("li",[s._v("有效回复 "),t("code",[s._v("ping")]),s._v(" 命令的时间超过配置文件 "),t("code",[s._v("down-after-milliseconds")]),s._v(" 选项所指定的值，就被认定为 "),t("strong",[s._v("主观下线")]),s._v("；")]),s._v(" "),t("li",[s._v("确认 "),t("strong",[s._v("主观下线")]),s._v(" 状态；")]),s._v(" "),t("li",[s._v("扩散 "),t("strong",[s._v("主观下线")]),s._v("，寻求 "),t("strong",[s._v("客观下线")]),s._v("；")]),s._v(" "),t("li",[s._v("大多数 Sentinel 判断 "),t("strong",[s._v("主观下线")]),s._v("，条件满足，形成 "),t("strong",[s._v("客观下线")]),s._v("；")]),s._v(" "),t("li",[s._v("投票选举 Master，然后 Slave 复制数据；")]),s._v(" "),t("li",[s._v("当 Master 被标记为 "),t("strong",[s._v("客观下线")]),s._v(" 后，"),t("code",[s._v("INFO")]),s._v(" 命令触发由每 10s 一次改为每 1s 一次；")]),s._v(" "),t("li",[s._v("若没有足够数量的 Sentinel 同意 Master 已经下线，Master 的客观下线状态就会被移除。若 Master 重新向 Sentinel 的 "),t("code",[s._v("ping")]),s._v(" 命令返回有效回复，Master 的主观下线状态就会被移除。")])]),s._v(" "),t("h2",{attrs:{id:"_4-故障转移演示"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-故障转移演示"}},[s._v("#")]),s._v(" 4. 故障转移演示")]),s._v(" "),t("h3",{attrs:{id:"_4-1-环境准备"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-环境准备"}},[s._v("#")]),s._v(" 4.1 环境准备")]),s._v(" "),t("ul",[t("li",[s._v("先启动 3 个 redis")]),s._v(" "),t("li",[s._v("再启动 3 个 sentinel")])]),s._v(" "),t("h3",{attrs:{id:"_4-2-开启-sentinel-日志监控"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-开启-sentinel-日志监控"}},[s._v("#")]),s._v(" 4.2 开启 sentinel 日志监控")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("在 "),t("code",[s._v("redis-slave1")]),s._v(" 和 "),t("code",[s._v("redis-slave2")]),s._v(" 分别运行：")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("tail")]),s._v(" -f -n "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v(" /usr/local/redis/log/sentinel.log\n")])])])])]),s._v(" "),t("h3",{attrs:{id:"_4-3-停掉-master"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-3-停掉-master"}},[s._v("#")]),s._v(" 4.3 停掉 Master")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ps")]),s._v(" -ef "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" redis\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("kill")]),s._v(" -9 PID\n")])])]),t("h3",{attrs:{id:"_4-4-分析日志"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-4-分析日志"}},[s._v("#")]),s._v(" 4.4 分析日志")]),s._v(" "),t("p",[s._v("可以看到 "),t("code",[s._v("redis-slave1")]),s._v(" 和 "),t("code",[s._v("redis-slave2")]),s._v(" 的 "),t("code",[s._v("sentinel.log")]),s._v(" 都有输出，我们随便拿 "),t("code",[s._v("redis-slave1")]),s._v(" 来分析，下面将 "),t("code",[s._v("redis-slave1")]),s._v(" 的 "),t("code",[s._v("sentinel")]),s._v(" 称为 "),t("code",[s._v("redis-sentinel-1")]),s._v("：")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# redis-sentinel-1 主观认为 172.16.58.200 下线")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("66980")]),s._v(":X 04 Aug "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2021")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("19")]),s._v(":51:55.839 "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# +sdown master mymaster 172.16.58.200 6379")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 启动新的 Master 选举流程，后面数字代表选举的次数")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("66980")]),s._v(":X 04 Aug "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2021")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("19")]),s._v(":51:55.849 "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# +new-epoch 1")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 投票选出一个 leader，该 leader 是负责进行 failover 的 sentinel")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("66980")]),s._v(":X 04 Aug "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2021")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("19")]),s._v(":51:55.851 "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# +vote-for-leader 9b6c6d520bd4cbc939801a9206c5daf6bab76214 1")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 3 个 sentinel 中有 2 个认为 172.16.58.200 下线，满足条件，标记为客观下线")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("66980")]),s._v(":X 04 Aug "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2021")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("19")]),s._v(":51:55.898 "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# +odown master mymaster 172.16.58.200 6379 #quorum 3/2")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 下一次故障转移最快开始时间")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("66980")]),s._v(":X 04 Aug "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2021")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("19")]),s._v(":51:55.898 "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Next failover delay: I will not start a failover before Wed Aug  4 19:57:56 2021")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 从 redis-sentinel-1 根据 redis-sentinel-0 那里更新配置")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("66980")]),s._v(":X 04 Aug "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2021")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("19")]),s._v(":51:56.187 "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# +config-update-from sentinel 9b6c6d520bd4cbc939801a9206c5daf6bab76214 172.16.58.200 26379 @ mymaster 172.16.58.200 6379")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 更换 Master，从 172.16.58.200 换到 172.16.58.201")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("66980")]),s._v(":X 04 Aug "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2021")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("19")]),s._v(":51:56.187 "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# +switch-master mymaster 172.16.58.200 6379 172.16.58.201 6379")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 新的 slave（原来的 redis-slave2）")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("66980")]),s._v(":X 04 Aug "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2021")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("19")]),s._v(":51:56.187 * +slave slave "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("172.16")]),s._v(".58.202:6379 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("172.16")]),s._v(".58.202 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("6379")]),s._v(" @ mymaster "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("172.16")]),s._v(".58.201 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("6379")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 新的 slave（原来的 redis-master）")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("66980")]),s._v(":X 04 Aug "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2021")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("19")]),s._v(":51:56.187 * +slave slave "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("172.16")]),s._v(".58.200:6379 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("172.16")]),s._v(".58.200 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("6379")]),s._v(" @ mymaster "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("172.16")]),s._v(".58.201 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("6379")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 因为原来的 redis-master 已经挂了，所以由判断它已经下线了")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("66980")]),s._v(":X 04 Aug "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2021")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("19")]),s._v(":52:06.229 "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# +sdown slave 172.16.58.200:6379 172.16.58.200 6379 @ mymaster 172.16.58.201 6379")]),s._v("\n")])])]),t("p",[s._v("通过日志我们可以发现 172.15.58.201 成为了新的 Master 了，我们在原来的 "),t("code",[s._v("redis-slave1")]),s._v(" 上查看 "),t("code",[s._v("info replication")]),s._v("：")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1:637"),t("span",{pre:!0,attrs:{class:"token operator"}},[t("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("9")]),s._v(">")]),s._v(" info replication\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Replication")]),s._v("\nrole:master\nconnected_slaves:1\nslave0:ip"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("172.16")]),s._v(".58.202,port"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("6379")]),s._v(",state"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("online,offset"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("403866")]),s._v(",lag"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\nmaster_replid:cb5d5b6c3c83ff0ed54dcfd2a246f56fc9d3bdd2\nmaster_replid2:84c5932a0eab5b1eae6bb1721dbfecb1dc91e925\nmaster_repl_offset:403866\nsecond_repl_offset:370485\nrepl_backlog_active:1\nrepl_backlog_size:1048576\nrepl_backlog_first_byte_offset:1\nrepl_backlog_histlen:403866\n")])])]),t("p",[s._v("我们再来看原来的 "),t("code",[s._v("redis-slave1")]),s._v(" 上的 "),t("code",[s._v("sentinel.log")]),s._v("，会发现已经多了一些内容了：")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@k8s-node1 ~"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# cat /usr/local/redis/conf/sentinel.conf ")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Generated by CONFIG REWRITE")]),s._v("\nprotected-mode no\nuser default on nopass ~* +@all\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("dir")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/root"')]),s._v("\nsentinel auth-pass mymaster "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("123456")]),s._v("\nsentinel config-epoch mymaster "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\nsentinel leader-epoch mymaster "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\nsentinel known-replica mymaster "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("172.16")]),s._v(".58.200 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("6379")]),s._v("\nsentinel known-replica mymaster "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("172.16")]),s._v(".58.202 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("6379")]),s._v("\nsentinel known-sentinel mymaster "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("172.16")]),s._v(".58.202 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("26379")]),s._v(" da220efac4f9358479edd91715188fae38d28fdc\nsentinel known-sentinel mymaster "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("172.16")]),s._v(".58.200 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("26379")]),s._v(" 9b6c6d520bd4cbc939801a9206c5daf6bab76214\nsentinel current-epoch "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n")])])]),t("h2",{attrs:{id:"_5-自动故障迁移流程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-自动故障迁移流程"}},[s._v("#")]),s._v(" 5. 自动故障迁移流程")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://tva1.sinaimg.cn/large/008i3skNly1gt5r960e72j30ys0u00vf.jpg",alt:"image-20210805113305744"}})]),s._v(" "),t("h2",{attrs:{id:"_6-节点管理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_6-节点管理"}},[s._v("#")]),s._v(" 6. 节点管理")]),s._v(" "),t("h3",{attrs:{id:"_6-1-添加-sentinel"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_6-1-添加-sentinel"}},[s._v("#")]),s._v(" 6.1 添加 Sentinel")]),s._v(" "),t("p",[s._v("添加单个 Sentinel：")]),s._v(" "),t("ul",[t("li",[s._v("只需要启动配置 "),t("code",[s._v("sentinel monitor mastername")]),s._v(" 监控当前活动主服务器的新 Sentinel 即可。")])]),s._v(" "),t("p",[s._v("添加多个 Sentinel：")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("建议一个一个添加")])]),s._v(" "),t("li",[t("p",[s._v("添加结束后，可用命令 "),t("code",[s._v("SENTINEL MASTER mastername")]),s._v(" 检查所有 Sentinel 是否已经完全获取到所有的 Master 信息。")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@k8s-node1 ~"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# /usr/local/redis/bin/redis-cli -p 26379")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1:2637"),t("span",{pre:!0,attrs:{class:"token operator"}},[t("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("9")]),s._v(">")]),s._v(" SENTINEL MASTER mymaster\n")])])])])]),s._v(" "),t("h3",{attrs:{id:"_6-2-删除-sentinel"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_6-2-删除-sentinel"}},[s._v("#")]),s._v(" 6.2 删除 Sentinel")]),s._v(" "),t("div",{staticClass:"custom-block warning"},[t("p",{staticClass:"custom-block-title"},[s._v("注意")]),s._v(" "),t("p",[s._v("Sentinel 不会完全清除已经添加过的 Sentinel 信息。")])]),s._v(" "),t("p",[s._v("需要移除一个 Sentinel，在没有网络隔离的环境下应遵循以下步骤：")]),s._v(" "),t("ol",[t("li",[s._v("停止要删除的 Sentinel 进程；")]),s._v(" "),t("li",[s._v("执行 "),t("code",[s._v("SENTINEL RESET *")]),s._v(" 向所有其他 Sentinel 实例发送命令；")]),s._v(" "),t("li",[s._v("执行 "),t("code",[s._v("SENTINEL MASTER mastername")]),s._v(" 检查每个 Sentinel 显示的 Sentinel 数量是否一致。")])]),s._v(" "),t("h3",{attrs:{id:"_6-3-删除旧的-master-或无法访问的-slave"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_6-3-删除旧的-master-或无法访问的-slave"}},[s._v("#")]),s._v(" 6.3 删除旧的 Master 或无法访问的 Slave")]),s._v(" "),t("div",{staticClass:"custom-block warning"},[t("p",{staticClass:"custom-block-title"},[s._v("注意")]),s._v(" "),t("p",[s._v("Sentinel 不会完全清除指定的 Master 和 Slave。")])]),s._v(" "),t("ol",[t("li",[s._v("停止 Slave 进程；")]),s._v(" "),t("li",[s._v("向所有 Sentinel 发送命令 "),t("code",[s._v("SENTINEL RESET mastername")]),s._v(", 重置 mastername 所有状态信息。")])]),s._v(" "),t("h2",{attrs:{id:"_7-故障迁移一致性"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_7-故障迁移一致性"}},[s._v("#")]),s._v(" 7. 故障迁移一致性")]),s._v(" "),t("p",[s._v("Redis Sentinel 用到了分布式共识算法 "),t("code",[s._v("Raft")]),s._v(" 来选举一个 Sentinel 节点为 leader。")]),s._v(" "),t("ol",[t("li",[s._v("确保了在一个给定的周期（epoch）内，最多只有一个 leader 产生；")]),s._v(" "),t("li",[s._v("这表示在同一个周期内，不会有 2 个 leader 同时产生，并且各个 Sentinel 在同一个节点中只会对一个 leader 进行投票；")]),s._v(" "),t("li",[s._v("配置更高的节点总是优于配置较低的节点，因为每个 Sentinel 都会主动使用更新的节点来代替自己的配置。")])]),s._v(" "),t("p",[s._v("简单来说，我们可以将 Sentinel 的配置看作是一个带有版本号的状态。一个状态会以最后写入者胜出（last-write-wins）的方式（即最新的配置总是胜出），然后传播至其他所有的 Sentinel。")]),s._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[s._v("关于 Raft 算法")]),s._v(" "),t("p",[s._v("关于 Raft 算法的详细说明，可以参考笔者翻译的 Raft 论文："),t("RouterLink",{attrs:{to:"/paper/translation/Raft-Extended.html"}},[s._v("Raft 算法")])],1)]),s._v(" "),t("h2",{attrs:{id:"_8-tilt-模式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_8-tilt-模式"}},[s._v("#")]),s._v(" 8. TILT 模式")]),s._v(" "),t("p",[s._v("Sentinel 是通过心跳来获取其他 Slave，Master 和 Sentinel 的在线以及详细信息的，但是心跳除了因为网络分区，节点下线等问题丢失以外，自身机器的繁忙程度或者修改系统时间这些意外的操作也可能影响 Sentinel 的心跳正常工作，因此 Redis 为 Sentinel 提供了一个特殊的模式，称为 "),t("code",[s._v("TILT")]),s._v("，这个模式下，Sentinel 仍然会进行监控并收集信息，它只是不执行诸如故障转移、下线判断之类的操作而已。")]),s._v(" "),t("div",{staticClass:"language-c++ extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('void sentinelCheckTiltCondition(void) {\n    // 计算当前时间\n    mstime_t now = mstime();\n    // 计算上次运行 sentinel 和当前时间的差\n    mstime_t delta = now - sentinel.previous_time;\n    // 如果差为负数，或者大于 2 秒钟，那么进入 TILT 模式\n    if (delta < 0 || delta > SENTINEL_TILT_TRIGGER) {\n        // 打开标记\n        sentinel.tilt = 1;\n        // 记录进入 TILT 模式的开始时间\n        sentinel.tilt_start_time = mstime();\n        // 打印事件\n        sentinelEvent(REDIS_WARNING,"+tilt",NULL,"#tilt mode entered");\n    }\n    // 更新最后一次 sentinel 运行时间\n    sentinel.previous_time = mstime();\n}\n')])])]),t("p",[s._v("每次定时任务 Redis 都会执行上面这个函数，每次执行这个函数时都会产生一个 "),t("code",[s._v("sentinel.previous_time")]),s._v("，表示这次执行 Sentinel 逻辑的时间。如果上次执行 Sentinel 的时间早于当前时间（说明系统时间发生改变）或者两次执行 Sentinel 的时间相隔过长（代表当前系统繁忙，进程不能正常工作），Sentinel 就会进入 TILT 模式。")]),s._v(" "),t("p",[s._v("处于 TILT 模式，Sentinel 或持续监控所有状态，但：")]),s._v(" "),t("ul",[t("li",[s._v("停止处理请求。")]),s._v(" "),t("li",[s._v("当有实例向该 Sentinel 发送 "),t("code",[s._v("SENTINEL is-master-down-by-addr")]),s._v(" 命令时，Sentinel 返回负值：因为这个 Sentinel 所进行的下线判断已经不再准确。")])]),s._v(" "),t("p",[s._v("如果 TILT 可以正常维持 30s（SENTINEL_TILT_PERIOD，默认 30s）时长，那么 Sentinel 退出 TILT 模式，TILT 模式是 Sentinel 的被动模式。")]),s._v(" "),t("Vssue")],1)}),[],!1,null,null,null);e.default=n.exports}}]);
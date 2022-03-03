(window.webpackJsonp=window.webpackJsonp||[]).push([[104],{514:function(s,t,a){"use strict";a.r(t);var e=a(47),r=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"七、redis-主从复制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#七、redis-主从复制"}},[s._v("#")]),s._v(" 七、Redis 主从复制")]),s._v(" "),a("h2",{attrs:{id:"_1-主从复制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-主从复制"}},[s._v("#")]),s._v(" 1. 主从复制")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://tva1.sinaimg.cn/large/008i3skNly1gt4j7qj8uxj31bq0u0mzu.jpg",alt:"image-20210804100921407"}})]),s._v(" "),a("ul",[a("li",[s._v("Master：负责写")]),s._v(" "),a("li",[s._v("Slave：负责读")])]),s._v(" "),a("h2",{attrs:{id:"_2-环境搭建"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-环境搭建"}},[s._v("#")]),s._v(" 2. 环境搭建")]),s._v(" "),a("h3",{attrs:{id:"_2-1-准备环境"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-准备环境"}},[s._v("#")]),s._v(" 2.1 准备环境")]),s._v(" "),a("table",[a("thead",[a("tr",[a("th",[s._v("IP")]),s._v(" "),a("th",[s._v("角色")]),s._v(" "),a("th",[s._v("操作系统")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("172.16.58.200")]),s._v(" "),a("td",[s._v("redis-master")]),s._v(" "),a("td",[s._v("CentOS 7")])]),s._v(" "),a("tr",[a("td",[s._v("172.16.58.201")]),s._v(" "),a("td",[s._v("redis-slave1")]),s._v(" "),a("td",[s._v("CentOS 7")])]),s._v(" "),a("tr",[a("td",[s._v("172.16.58.202")]),s._v(" "),a("td",[s._v("redis-slave2")]),s._v(" "),a("td",[s._v("CentOS 7")])])])]),s._v(" "),a("h3",{attrs:{id:"_2-2-下载-redis"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-下载-redis"}},[s._v("#")]),s._v(" 2.2 下载 Redis")]),s._v(" "),a("p",[s._v("分别在三台机器上下载 Redis："),a("RouterLink",{attrs:{to:"/backend/middleware/redis/redis_intro.html#_2-2-安装-redis"}},[s._v("Redis 安装")])],1),s._v(" "),a("h3",{attrs:{id:"_2-3-创建配置-数据-日志目录"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-创建配置-数据-日志目录"}},[s._v("#")]),s._v(" 2.3 创建配置/数据/日志目录")]),s._v(" "),a("p",[s._v("分别在三台机器上运行以下命令：")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 创建配置目录")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" -p /usr/local/redis/conf\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 创建数据目录")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" -p /usr/local/redis/data\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 创建日志目录")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" -p /usr/local/redis/log\n")])])]),a("h3",{attrs:{id:"_2-4-新建配置文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-新建配置文件"}},[s._v("#")]),s._v(" 2.4 新建配置文件")]),s._v(" "),a("p",[s._v("三台机器都创建一份新的 "),a("code",[s._v("redis.conf")])]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" /usr/local/redis/conf/redis.conf\n")])])]),a("p",[a("code",[s._v("redis-master")]),s._v(" 写下以下内容：")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 放行 IP 访问限制")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("bind")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),s._v(".0.0\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 后台启动")]),s._v("\ndaemonize "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("yes")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 日志存储目录及日志名")]),s._v("\nlogfile "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/usr/local/redis/log/redis.log"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# rdb 数据文件名")]),s._v("\ndbfilename dump.rdb\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# aof 模式开启和 aof 数据文件名")]),s._v("\nappendonly "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("yes")]),s._v("\nappendfilename "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"appendonly.aof"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# rdb 数据文件和 aof 数据文件的存储目录")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("dir")]),s._v(" /usr/local/redis/data\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 设置密码")]),s._v("\nrequirepass "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("123456")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 从节点访问主节点密码（必须与 requirepass 一致）")]),s._v("\nmasterauth "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("123456")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 从节点只读模式")]),s._v("\nreplica-read-only "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("yes")]),s._v("\n")])])]),a("p",[a("code",[s._v("redis-slave1")]),s._v(" 和 "),a("code",[s._v("redis-slave2")]),s._v(" 写下以下内容：")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 放行 IP 访问限制")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("bind")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),s._v(".0.0\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 后台启动")]),s._v("\ndaemonize "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("yes")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 日志存储目录及日志名")]),s._v("\nlogfile "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/usr/local/redis/log/redis.log"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# rdb 数据文件名")]),s._v("\ndbfilename dump.rdb\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# aof 模式开启和 aof 数据文件名")]),s._v("\nappendonly "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("yes")]),s._v("\nappendfilename "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"appendonly.aof"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# rdb 数据文件和 aof 数据文件的存储目录")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("dir")]),s._v(" /usr/local/redis/data\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 设置密码")]),s._v("\nrequirepass "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("123456")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 从节点访问主节点密码（必须与 requirepass 一致）")]),s._v("\nmasterauth "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("123456")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 从节点只读模式")]),s._v("\nreplica-read-only "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("yes")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 从节点属于哪个指定主节点")]),s._v("\nslaveof "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("172.16")]),s._v(".58.200 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("6379")]),s._v("\n")])])]),a("h3",{attrs:{id:"_2-5-启动-redis"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-5-启动-redis"}},[s._v("#")]),s._v(" 2.5 启动 Redis")]),s._v(" "),a("p",[s._v("在三台机器上都启动 Redis")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 先看看之前有没有运行 redis")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ps")]),s._v(" -ef "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" redis\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 杀死进程")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("kill")]),s._v(" -9 PID\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 启动新 redis")]),s._v("\nredis-server /usr/local/redis/conf/redis.conf\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 检查 redis 启动情况")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ps")]),s._v(" -ef "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" redis\n")])])]),a("h3",{attrs:{id:"_2-6-查看集群状态"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-6-查看集群状态"}},[s._v("#")]),s._v(" 2.6 查看集群状态")]),s._v(" "),a("p",[s._v("核心命令："),a("code",[s._v("info replication")])]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 在 redis-master 节点上连接 redis")]),s._v("\nredis-cli -a "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("123456")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看 redis 集群信息")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1:637"),a("span",{pre:!0,attrs:{class:"token operator"}},[a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("9")]),s._v(">")]),s._v(" info replication\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 输出")]),s._v("\nrole:master\nconnected_slaves:2\nslave0:ip"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("172.16")]),s._v(".58.201,port"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("6379")]),s._v(",state"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("online,offset"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("168")]),s._v(",lag"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\nslave1:ip"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("172.16")]),s._v(".58.202,port"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("6379")]),s._v(",state"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("online,offset"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("168")]),s._v(",lag"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\nmaster_replid:84c5932a0eab5b1eae6bb1721dbfecb1dc91e925\nmaster_replid2:0000000000000000000000000000000000000000\nmaster_repl_offset:168\nsecond_repl_offset:-1\nrepl_backlog_active:1\nrepl_backlog_size:1048576\nrepl_backlog_first_byte_offset:1\nrepl_backlog_histlen:168\n")])])]),a("h3",{attrs:{id:"_2-7-测试集群功能"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-7-测试集群功能"}},[s._v("#")]),s._v(" 2.7 测试集群功能")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("redis-master")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 可写")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1:637"),a("span",{pre:!0,attrs:{class:"token operator"}},[a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("9")]),s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" username zhangsan\nOK\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 可读")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1:637"),a("span",{pre:!0,attrs:{class:"token operator"}},[a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("9")]),s._v(">")]),s._v(" get username\n"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"zhangsan"')]),s._v("\n")])])])]),s._v(" "),a("li",[a("p",[s._v("redis-slave1 & redis-slave2")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 读得到 zhangsan，说明主从复制成功")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1:637"),a("span",{pre:!0,attrs:{class:"token operator"}},[a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("9")]),s._v(">")]),s._v(" get username\n"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"zhangsan"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 写不了，因为从节点只能读")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1:637"),a("span",{pre:!0,attrs:{class:"token operator"}},[a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("9")]),s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" username lisi\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("error"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" READONLY You can't "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("write")]),s._v(" against a "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("read")]),s._v(" only replica.\n")])])])])]),s._v(" "),a("h2",{attrs:{id:"_3-原理剖析"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-原理剖析"}},[s._v("#")]),s._v(" 3. 原理剖析")]),s._v(" "),a("h3",{attrs:{id:"_3-1-info-replication-信息详解"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-info-replication-信息详解"}},[s._v("#")]),s._v(" 3.1 info replication 信息详解")]),s._v(" "),a("table",[a("thead",[a("tr",[a("th",[s._v("角色")]),s._v(" "),a("th",[s._v("属性名")]),s._v(" "),a("th",[s._v("属性描述")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("通用配置")]),s._v(" "),a("td",[s._v("role")]),s._v(" "),a("td",[s._v("节点的角色")])]),s._v(" "),a("tr",[a("td"),s._v(" "),a("td",[s._v("repl_backlog_active")]),s._v(" "),a("td",[s._v("复制缓冲区状态")])]),s._v(" "),a("tr",[a("td"),s._v(" "),a("td",[s._v("repl_backlog_size")]),s._v(" "),a("td",[s._v("复制缓冲区尺寸（单位：字节）")])]),s._v(" "),a("tr",[a("td"),s._v(" "),a("td",[s._v("repl_backlog_firstbyte_offset")]),s._v(" "),a("td",[s._v("复制缓冲区起始偏移量，标识当前缓冲区可用范围")])]),s._v(" "),a("tr",[a("td"),s._v(" "),a("td",[s._v("repl_backlog_hitslen")]),s._v(" "),a("td",[s._v("复制缓冲区已存有效数据长度")])]),s._v(" "),a("tr",[a("td"),s._v(" "),a("td",[s._v("master_replid")]),s._v(" "),a("td",[s._v("当前主节点 ID")])]),s._v(" "),a("tr",[a("td"),s._v(" "),a("td",[s._v("master_replid2")]),s._v(" "),a("td",[s._v("上一任主节点 ID")])]),s._v(" "),a("tr",[a("td"),s._v(" "),a("td",[s._v("master_repl_offset")]),s._v(" "),a("td",[s._v("主节点偏移量")])]),s._v(" "),a("tr",[a("td"),s._v(" "),a("td",[s._v("second_repl_offset")]),s._v(" "),a("td",[s._v("记录上一个主节点已经写入了偏移量，便于从节点与主节点重新建立连接的时候不需要全量复制")])]),s._v(" "),a("tr",[a("td",[s._v("主节点")]),s._v(" "),a("td",[s._v("connected_slaves")]),s._v(" "),a("td",[s._v("连接的从节点个数")])]),s._v(" "),a("tr",[a("td"),s._v(" "),a("td",[s._v("slave0")]),s._v(" "),a("td",[s._v("连接的从节点信息")])]),s._v(" "),a("tr",[a("td"),s._v(" "),a("td",[s._v("master_repl_offset")]),s._v(" "),a("td",[s._v("主节点偏移量")])]),s._v(" "),a("tr",[a("td",[s._v("从节点")]),s._v(" "),a("td",[s._v("master_host")]),s._v(" "),a("td",[s._v("主节点 IP")])]),s._v(" "),a("tr",[a("td"),s._v(" "),a("td",[s._v("master_port")]),s._v(" "),a("td",[s._v("主节点端口")])]),s._v(" "),a("tr",[a("td"),s._v(" "),a("td",[s._v("master_link_status")]),s._v(" "),a("td",[s._v("与主节点的连接状态")])]),s._v(" "),a("tr",[a("td"),s._v(" "),a("td",[s._v("master_last_io_seconds_ago")]),s._v(" "),a("td",[s._v("主节点最后与从节点的通信时间间隔，单位是秒")])]),s._v(" "),a("tr",[a("td"),s._v(" "),a("td",[s._v("master_sync_in_progress")]),s._v(" "),a("td",[s._v("从节点是否正在全量同步主节点 RDB 文件")])]),s._v(" "),a("tr",[a("td"),s._v(" "),a("td",[s._v("slave_repl_offset")]),s._v(" "),a("td",[s._v("从节点复制偏移量")])]),s._v(" "),a("tr",[a("td"),s._v(" "),a("td",[s._v("slave_priority")]),s._v(" "),a("td",[s._v("从节点选举优先级")])]),s._v(" "),a("tr",[a("td"),s._v(" "),a("td",[s._v("slave_read_only")]),s._v(" "),a("td",[s._v("从节点是否只读")])]),s._v(" "),a("tr",[a("td"),s._v(" "),a("td",[s._v("connected_slaves")]),s._v(" "),a("td",[s._v("连接的从节点个数")])])])]),s._v(" "),a("h3",{attrs:{id:"_3-2-复制流程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-复制流程"}},[s._v("#")]),s._v(" 3.2 复制流程")]),s._v(" "),a("h4",{attrs:{id:"_3-2-1-日志分析"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-1-日志分析"}},[s._v("#")]),s._v(" 3.2.1 日志分析")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("查看 "),a("code",[s._v("redis-master")]),s._v(" 日志")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("tail")]),s._v(" -f -n "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("800")]),s._v(" /usr/local/redis/log/redis.log\n")])])])]),s._v(" "),a("li",[a("p",[s._v("关注下面日志")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 主节点已就绪，等待从节点连接")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("21279")]),s._v(":M 03 Aug "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2021")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("20")]),s._v(":00:49.285 * Ready to accept connections\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 172.16.58.201:6379 redis-slave1 节点发起 sync 全量复制请求")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("21279")]),s._v(":M 03 Aug "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2021")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("20")]),s._v(":02:28.358 * Replica "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("172.16")]),s._v(".58.201:6379 asks "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" synchronization\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("21279")]),s._v(":M 03 Aug "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2021")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("20")]),s._v(":02:28.358 * Full resync requested by replica "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("172.16")]),s._v(".58.201:6379\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 创建缓冲区，新建一个新的 replication id")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("21279")]),s._v(":M 03 Aug "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2021")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("20")]),s._v(":02:28.358 * Replication backlog created, my new replication IDs are "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'84c5932a0eab5b1eae6bb1721dbfecb1dc91e925'")]),s._v(" and "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'0000000000000000000000000000000000000000'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 使用 bgsave 将数据写到磁盘")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("21279")]),s._v(":M 03 Aug "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2021")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("20")]),s._v(":02:28.358 * Starting BGSAVE "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" SYNC with target: disk\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("21279")]),s._v(":M 03 Aug "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2021")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("20")]),s._v(":02:28.359 * Background saving started by pid "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("21738")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 写完")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("21738")]),s._v(":C 03 Aug "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2021")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("20")]),s._v(":02:28.360 * DB saved on disk\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 写了多少数据")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("21738")]),s._v(":C 03 Aug "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2021")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("20")]),s._v(":02:28.360 * RDB: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" MB of memory used by copy-on-write\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 退出写数据")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("21279")]),s._v(":M 03 Aug "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2021")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("20")]),s._v(":02:28.420 * Background saving terminated with success\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 172.16.58.201:6379 redis-slave1 全量复制完成")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("21279")]),s._v(":M 03 Aug "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2021")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("20")]),s._v(":02:28.421 * Synchronization with replica "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("172.16")]),s._v(".58.201:6379 succeeded\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 172.16.58.202:6379 redis-slave2 节点请求全量复制请求")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("21279")]),s._v(":M 03 Aug "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2021")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("20")]),s._v(":02:29.443 * Replica "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("172.16")]),s._v(".58.202:6379 asks "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" synchronization\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 下面同理")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("21279")]),s._v(":M 03 Aug "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2021")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("20")]),s._v(":02:29.443 * Full resync requested by replica "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("172.16")]),s._v(".58.202:6379\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("21279")]),s._v(":M 03 Aug "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2021")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("20")]),s._v(":02:29.443 * Starting BGSAVE "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" SYNC with target: disk\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("21279")]),s._v(":M 03 Aug "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2021")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("20")]),s._v(":02:29.444 * Background saving started by pid "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("21747")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("21747")]),s._v(":C 03 Aug "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2021")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("20")]),s._v(":02:29.445 * DB saved on disk\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("21747")]),s._v(":C 03 Aug "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2021")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("20")]),s._v(":02:29.445 * RDB: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" MB of memory used by copy-on-write\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("21279")]),s._v(":M 03 Aug "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2021")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("20")]),s._v(":02:29.524 * Background saving terminated with success\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("21279")]),s._v(":M 03 Aug "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2021")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("20")]),s._v(":02:29.525 * Synchronization with replica "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("172.16")]),s._v(".58.202:6379 succeeded\n")])])])])]),s._v(" "),a("h4",{attrs:{id:"_3-2-2-全量复制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-2-全量复制"}},[s._v("#")]),s._v(" 3.2.2 全量复制")]),s._v(" "),a("ul",[a("li",[s._v("全量复制一般是 Slave 刚开始连接 Master 后做的数据同步过程。")])]),s._v(" "),a("p",[a("img",{attrs:{src:"https://tva1.sinaimg.cn/large/008i3skNgy1gt4mekgohtj31j70u0mzt.jpg",alt:"image-20210804115942670"}})]),s._v(" "),a("h4",{attrs:{id:"_3-2-3-增量复制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-3-增量复制"}},[s._v("#")]),s._v(" 3.2.3 增量复制")]),s._v(" "),a("ul",[a("li",[s._v("增量复制是  Slave 初始后开始正常工作时 Master 发生写操作时同步到 Slave 的过程。")]),s._v(" "),a("li",[s._v("从节点与主节点发生短暂失联后重新连接，也会根据 "),a("code",[s._v("master_repl_offset")]),s._v(" 和 "),a("code",[s._v("second_repl_offset")]),s._v(" 进行增量复制。")]),s._v(" "),a("li",[s._v("复制过程就是 Master 每执行一个写命令就会去 Slave 发送相同的写命令，Slave 接收并执行收到的写命令。")])]),s._v(" "),a("h3",{attrs:{id:"_3-3-主从复制异步性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-主从复制异步性"}},[s._v("#")]),s._v(" 3.3 主从复制异步性")]),s._v(" "),a("ul",[a("li",[s._v("主从复制对于 Master 是非阻塞的，当 Slave 在进行主从复制同步过程中，Master 仍然可以处理外界的访问请求。")]),s._v(" "),a("li",[s._v("主从复制对于 Slave 是非阻塞的，当 Slave 在进行蛀虫复制过程中也可以接收外界的查询请求，"),a("strong",[s._v("只不过这时候 Slave 可能返回以前的老数据")]),s._v("。")])]),s._v(" "),a("h3",{attrs:{id:"_3-4-过期-key-处理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-4-过期-key-处理"}},[s._v("#")]),s._v(" 3.4 过期 key 处理")]),s._v(" "),a("ul",[a("li",[s._v("Slave 不会让 key 过期，而是等待 Master 让 key 过期。当 Master 让 key 过期时，它会合成一个 del 命令并传输到所有的 Slave。")])]),s._v(" "),a("h3",{attrs:{id:"_3-5-加速复制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-5-加速复制"}},[s._v("#")]),s._v(" 3.5 加速复制")]),s._v(" "),a("ul",[a("li",[s._v("默认情况下，Master 节点接收 SYNC 命令后执行 bgsave 操作，将数据先保存到磁盘，如果磁盘性能差，那么写入磁盘会消耗大量性能，因为在 Redis 2.8.18 后进行改进，可以设置无需写入磁盘直接发送 RDB 快照给 Slave，加速复制。")]),s._v(" "),a("li",[s._v("修改配置："),a("code",[s._v("repli-diskless-sync yes")]),s._v(" （默认是 no）")])]),s._v(" "),a("h2",{attrs:{id:"_4-故障处理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-故障处理"}},[s._v("#")]),s._v(" 4. 故障处理")]),s._v(" "),a("h3",{attrs:{id:"_4-1-主从数据一致性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-主从数据一致性"}},[s._v("#")]),s._v(" 4.1 主从数据一致性")]),s._v(" "),a("ul",[a("li",[s._v("主从网络延时\n"),a("ul",[a("li",[s._v("主多从少：部分重同步")]),s._v(" "),a("li",[s._v("主少从多：全量复制")])])])]),s._v(" "),a("h3",{attrs:{id:"_4-2-数据延迟"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-数据延迟"}},[s._v("#")]),s._v(" 4.2 数据延迟")]),s._v(" "),a("ul",[a("li",[s._v("编写外部程序监听主从节点的复制偏移量，延迟较大时发出报警或通知客户端，切换到主节点或其他节点。")]),s._v(" "),a("li",[s._v("设置 Slave 节点 "),a("code",[s._v("slave-serve-stale-data")]),s._v(" 为 "),a("code",[s._v("no")]),s._v("，除 "),a("code",[s._v("INFO")]),s._v(" 和 "),a("code",[s._v("SLAVEOF")]),s._v(" 命令之外的任何请求都会返回一个错误 "),a("code",[s._v("SYNC with master in progress")]),s._v("。")])]),s._v(" "),a("h3",{attrs:{id:"_4-3-脏数据"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-3-脏数据"}},[s._v("#")]),s._v(" 4.3 脏数据")]),s._v(" "),a("p",[s._v("原因：")]),s._v(" "),a("ul",[a("li",[s._v("Redis 删除机制导致（惰性、定时、主动删除等）。")]),s._v(" "),a("li",[s._v("从节点可写导致。")])]),s._v(" "),a("p",[s._v("解决：")]),s._v(" "),a("ul",[a("li",[s._v("忽略")]),s._v(" "),a("li",[s._v("选择性强制读主，从节点间接变成了备份服务器（只针对某个业务）。")]),s._v(" "),a("li",[s._v("从节点只读，规避从节点写入脏数据。")]),s._v(" "),a("li",[s._v("目前 Redis 读取数据之前会检查 key 过期时间来决定是否返回数据。")])]),s._v(" "),a("h3",{attrs:{id:"_4-4-数据安全性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-4-数据安全性"}},[s._v("#")]),s._v(" 4.4 数据安全性")]),s._v(" "),a("p",[s._v("隐患：")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("关闭 Master 持久化会提升性能，同时会带来复制的安全性问题。")]),s._v(" "),a("img",{staticStyle:{zoom:"33%"},attrs:{src:"https://tva1.sinaimg.cn/large/008i3skNly1gt4nly9034j313g0ea75b.jpg",alt:"image-20210804124122680"}})])]),s._v(" "),a("p",[s._v("解决：")]),s._v(" "),a("ul",[a("li",[s._v("开启 Master 持久化。")]),s._v(" "),a("li",[s._v("在 Docker 或者脚本中设置 Master 不自动重启。")])]),s._v(" "),a("h2",{attrs:{id:"_5-性能优化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-性能优化"}},[s._v("#")]),s._v(" 5. 性能优化")]),s._v(" "),a("h3",{attrs:{id:"_5-1-规避全量复制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-1-规避全量复制"}},[s._v("#")]),s._v(" 5.1 规避全量复制")]),s._v(" "),a("ul",[a("li",[s._v("第一次全量复制解决方案：低峰时段挂载 Slave。")]),s._v(" "),a("li",[s._v("Slave 上已经有 Master 的数据了，可以选举 Slave 为主节点。")]),s._v(" "),a("li",[s._v("增大复制缓冲区大小（默认 1M），增加 offset 的命中率，降低全量复制改了。")])]),s._v(" "),a("h3",{attrs:{id:"_5-2-规避复制风暴"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-2-规避复制风暴"}},[s._v("#")]),s._v(" 5.2 规避复制风暴")]),s._v(" "),a("blockquote",[a("p",[s._v("复制风暴：多个节点同一时段下向 Master 复制请求，导致 Master 压力很大。")])]),s._v(" "),a("ul",[a("li",[s._v("单主节点复制风暴：主节点重启，多从节点全量复制。\n"),a("ul",[a("li",[s._v("解决：\n"),a("ul",[a("li",[s._v("此时 Slave 有 Master 的数据了，可以选举 Slave 为主节点。")]),s._v(" "),a("li",[s._v("柱状复制结构。")])])])])]),s._v(" "),a("li",[s._v("单机多主复制风暴：一台机器上为了充分利用 CPU 资源，部署了多个主节点。\n"),a("ul",[a("li",[s._v("解决：\n"),a("ul",[a("li",[s._v("这事花钱能解决，把主节点分散在多台机器上就可以了。")])])])])])]),s._v(" "),a("Vssue")],1)}),[],!1,null,null,null);t.default=r.exports}}]);
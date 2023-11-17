(window.webpackJsonp=window.webpackJsonp||[]).push([[184],{593:function(s,a,e){"use strict";e.r(a);var t=e(47),r=Object(t.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"三、redis-持久化"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#三、redis-持久化"}},[s._v("#")]),s._v(" 三、Redis 持久化")]),s._v(" "),e("p",[s._v("通常数据库存在三种用于持久操作以防止数据损坏的常见策略：")]),s._v(" "),e("ol",[e("li",[s._v("数据库不关心故障，而是在数据文件损坏后从数据备份或快照中恢复。RDB 就是这种情况。")]),s._v(" "),e("li",[s._v("使用日志记录每个操作的操作行为，以在失败后通过日志恢复一致性。由于操作日志是按顺序追加写入的，因此不会出现无法恢复操作日志的情况。类似于  MySQL 的 redo log 和 undo log。")]),s._v(" "),e("li",[s._v("数据库不修改旧数据，而仅通过追加进行写入，因为数据本身就是日志，因此永远不会出现数据无法恢复的情况，CouchDB 是一个很好的例子。AOF 类似这种情况。")])]),s._v(" "),e("p",[s._v("严格上讲 Redis 为持久化提供了三种方式：")]),s._v(" "),e("ul",[e("li",[s._v("RDB：在指定时间间隔能对数据进行快照存储，类似 MySQL 的 dump 备份文件。")]),s._v(" "),e("li",[s._v("AOF：记录每次对服务器写的操作，当服务器重启的时候会重新执行这些命令来恢复原始的数据（MySQL 的 binlog）。")]),s._v(" "),e("li",[s._v("RDB 与 AOF 混合使用：这是 Redis4.0 开始的新特性。在混合使用中 AOF 读取 RDB 数据重建原始数据集，集二者优势为一体。")])]),s._v(" "),e("h2",{attrs:{id:"_1-rdb-持久化"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-rdb-持久化"}},[s._v("#")]),s._v(" 1. RDB 持久化")]),s._v(" "),e("h3",{attrs:{id:"_1-1-初始化环境"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-初始化环境"}},[s._v("#")]),s._v(" 1.1 初始化环境")]),s._v(" "),e("h5",{attrs:{id:"_1-1-1-创建配置-数据-日志目录"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-1-创建配置-数据-日志目录"}},[s._v("#")]),s._v(" 1.1.1 创建配置/数据/日志目录")]),s._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 创建配置目录")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" -p /usr/local/redis/conf\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 创建数据目录")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" -p /usr/local/redis/data\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 创建日志目录")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" -p /usr/local/redis/log\n")])])]),e("h5",{attrs:{id:"_1-1-2-配置文件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-2-配置文件"}},[s._v("#")]),s._v(" 1.1.2 配置文件")]),s._v(" "),e("p",[s._v("创建一份配置文件至 "),e("code",[s._v("conf")]),s._v(" 目录。")]),s._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" /usr/local/redis/conf/redis.conf\n")])])]),e("p",[s._v("内容如下：")]),s._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 放行 IP 访问限制")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("bind")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),s._v(".0.0\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 后台启动")]),s._v("\ndaemonize "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("yes")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 日志存储目录及日志文件名")]),s._v("\nlogfile "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/usr/local/redis/log/redis.log"')]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# RDB 数据文件名")]),s._v("\ndbfilename dump.rdb\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# RDB 数据文件和 AOF 数据文件的存储目录")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("dir")]),s._v(" /usr/local/redis/data\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 设置密码")]),s._v("\nrequirepass "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("123456")]),s._v("\n")])])]),e("h3",{attrs:{id:"_1-2-开启-rdb"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-开启-rdb"}},[s._v("#")]),s._v(" 1.2 开启 RDB")]),s._v(" "),e("p",[s._v("在 "),e("code",[s._v("redis.conf")]),s._v(" 文件末尾加上：")]),s._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 900 秒内如果超过 1 个key改动，则发起快照保存")]),s._v("\nsave "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("900")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 300 秒内如果超过 10 个 key 改动，则发起快照保存")]),s._v("\nsave "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("300")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 60 秒内如果超过 1W 个 key 改动，则发起快照保存")]),s._v("\nsave "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("60")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("10000")]),s._v("\n")])])]),e("h3",{attrs:{id:"_1-3-redis-快照"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-redis-快照"}},[s._v("#")]),s._v(" 1.3 Redis 快照")]),s._v(" "),e("p",[s._v("快照，顾名思义可以理解为拍照一样，把整个内存数据映射到硬盘中，保存一份到磁盘，因此恢复数据起来比较快，把数据映射回去即可，"),e("strong",[s._v("不像 AOF 一样，一条条的执行操作指令")]),s._v("。")]),s._v(" "),e("p",[s._v("快照是"),e("strong",[s._v("默认")]),s._v("的持久化方式。这种方式就是将内存中数据以快照的放入写入"),e("strong",[s._v("二进制文件")]),s._v("中，默认的文件名为 "),e("code",[s._v("dump.rdb")]),s._v("，可以通过配置设置自动做快照持久化的方式。")]),s._v(" "),e("p",[s._v("产生快照的情况有以下几种：")]),s._v(" "),e("ul",[e("li",[s._v("手动 "),e("code",[s._v("bgsave")]),s._v(" 执行（不会阻塞，后台一点点备份）。")]),s._v(" "),e("li",[s._v("手动 "),e("code",[s._v("save")]),s._v(" 执行（会阻塞，不接受客户端命令，备份完了才放开）。")]),s._v(" "),e("li",[s._v("根据配置文件自动执行。")]),s._v(" "),e("li",[s._v("客户端发送 "),e("code",[s._v("shutdown")]),s._v("，系统会先执行 save 命令阻塞客户端，然后关闭服务器。")]),s._v(" "),e("li",[s._v("当有主从架构时，从服务器向主服务器发送 "),e("code",[s._v("sync")]),s._v(" 命令来执行复制时，主服务器会执行 "),e("code",[s._v("bgsave")]),s._v(" 操作。")])]),s._v(" "),e("h3",{attrs:{id:"_1-4-rdb-工作原理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-4-rdb-工作原理"}},[s._v("#")]),s._v(" 1.4 RDB 工作原理")]),s._v(" "),e("p",[s._v("Redis 默认会将快照文件存储在 Redis 当前进程的工作目录中的 "),e("code",[s._v("dump.rdb")]),s._v(" 文件中，可以通过配置 "),e("code",[s._v("dir")]),s._v(" 和 "),e("code",[s._v("dbfilename")]),s._v(" 两个参数分别制定快照文件的存储路径和文件名。")]),s._v(" "),e("p",[s._v("RDB 流程如下（rdb.c 文件中）：")]),s._v(" "),e("p",[e("img",{attrs:{src:"https://hedonspace.oss-cn-beijing.aliyuncs.com/img2/008eGmZEly1gphwv8mxxlj319k0mynbm.jpg",alt:"image-20210413103244049"}})]),s._v(" "),e("h3",{attrs:{id:"_1-5-rdb-优点"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-5-rdb-优点"}},[s._v("#")]),s._v(" 1.5 RDB 优点")]),s._v(" "),e("ol",[e("li",[s._v("紧凑压缩的二进制文件。")]),s._v(" "),e("li",[s._v("fork 子进程性能最大化（非阻塞）。")]),s._v(" "),e("li",[s._v("启动效率高（直接进行数据映射，而非一行行执行操作）。")])]),s._v(" "),e("h3",{attrs:{id:"_1-6-rdb-缺点"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-6-rdb-缺点"}},[s._v("#")]),s._v(" 1.6 RDB 缺点")]),s._v(" "),e("ol",[e("li",[s._v("生成快照的时机问题（时间还没到就宕机了，那会丢失这部分时间的数据）。")]),s._v(" "),e("li",[s._v("fork 子进程的开销问题。")])]),s._v(" "),e("h2",{attrs:{id:"_2-aof-持久化"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-aof-持久化"}},[s._v("#")]),s._v(" 2. AOF 持久化")]),s._v(" "),e("p",[s._v("AOF 也是 Redis 持久化的重要手段之一，AOF（Append Only File）只追加文件，也就是每次处理完请求命令后都会将此命令追加到 "),e("code",[s._v(".aof")]),s._v(" 文件的末尾。而 RDB 是压缩成二进制等时机开子进程去干这件事。")]),s._v(" "),e("h3",{attrs:{id:"_2-1-开启-aof"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-开启-aof"}},[s._v("#")]),s._v(" 2.1 开启 AOF")]),s._v(" "),e("p",[s._v("通过配置 "),e("code",[s._v("redis.conf")]),s._v(" 进行启动，默认是关闭的")]),s._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 默认 appendonly 为 no")]),s._v("\nappendonly "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("yes")]),s._v("\nappendfilename "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"appendonly.aof"')]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# RDB 文件和 AOF 文件所在目录")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("dir")]),s._v(" /usr/local/redis/data\n")])])]),e("h3",{attrs:{id:"_2-2-同步策略"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-同步策略"}},[s._v("#")]),s._v(" 2.2 同步策略")]),s._v(" "),e("p",[s._v("Redis 中提供了 3 种  AOF 同步策略：")]),s._v(" "),e("ul",[e("li",[s._v("每秒同步（默认，每秒调用一次 "),e("code",[s._v("fsync")]),s._v("，这种模式性能并不是很糟糕）。")]),s._v(" "),e("li",[s._v("每修改同步（会极大削弱 Redis 的性能，因为这种模式下每次 "),e("code",[s._v("write")]),s._v(" 后都会调用 "),e("code",[s._v("fsync")]),s._v("）。")]),s._v(" "),e("li",[s._v("不主动同步（由操作系统自动调度刷盘，Linux 是 30s 一次，性能是最好的）。")])]),s._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 每秒钟同步一次，默认")]),s._v("\nappendfsync everysec\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 每次有数据修改发生时都会写入 AOF 文件")]),s._v("\nappendfsync always\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 从不同步，由操作系统自动调度刷盘，高调但是数据不会主动被持久化")]),s._v("\nappendfsync no\n")])])]),e("h3",{attrs:{id:"_2-3-aof-工作原理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-aof-工作原理"}},[s._v("#")]),s._v(" 2.3 AOF 工作原理")]),s._v(" "),e("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://hedonspace.oss-cn-beijing.aliyuncs.com/img2/008i3skNly1gt3fnfb2jmj31e2056wf1.jpg",alt:"image-20210803112028852"}}),s._v(" "),e("p",[s._v("AOF 的频率高的话肯定会对 Redis 带来性能影响，因为每次都是刷盘操作，跟 MySQL 一样了。")]),s._v(" "),e("p",[s._v("Redis 每次都是先将命令放到缓存区，然后根据具体策略（每秒/每条指令/缓冲区满）进行刷盘操作。")]),s._v(" "),e("p",[s._v("如果配置 always，那么就是典型阻塞，如果是 everysec 每秒的话，那么会开一个同步线程去每秒进行刷盘操作，对主线程影响稍小。")]),s._v(" "),e("h3",{attrs:{id:"_2-4-写入文件与恢复"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-写入文件与恢复"}},[s._v("#")]),s._v(" 2.4 写入文件与恢复")]),s._v(" "),e("p",[s._v("AOF 文件是一个只进行 append 操作的日志文件，因此在写入过程中即使出现宕机现象，也不会破坏日志文件中已经存在的内容。假如一次操作只是写入了一半数据就出现了系统崩溃问题，不用担心，在 Redis 下一次启动之前，我们可以通过 "),e("code",[s._v("redis-check-aof")]),s._v(" 工具来帮助我们解决问题。")]),s._v(" "),e("p",[s._v("AOF 文件有序地保存了对数据库执行的所有写人操作，这些写入操作以 Redis 协议的格式保存，因此 AOF 文件的内存非常容易被人读懂，对文件进行分析（parse）也很轻松。")]),s._v(" "),e("p",[s._v("导出（export）AOF 文件也非常简单。举个例子，如果你不小心执行了 "),e("code",[s._v("FLUSHALL")]),s._v(" 命令，但只要 AOF 文件没有被重写，那么只要停止服务器，移除 AOF 文件末尾的 "),e("code",[s._v("FLUSHALL")]),s._v(" 命令，并重启 Redis，就可以将数据集恢复到 FLUSHALL 执行之前的状态。")]),s._v(" "),e("h3",{attrs:{id:"_2-5-重写"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-5-重写"}},[s._v("#")]),s._v(" 2.5 重写")]),s._v(" "),e("p",[s._v("随着运行时间的增长，执行的命令越来越多，会导致 AOF 文件越来越大，当 AOF 文件过大时，Redis 会执行重写机制来压缩 AOF 文件。这个压缩和上面提到的 RDB 文件的算法压缩不同，重写机制主要是将文件中无效的命令去除。比如：")]),s._v(" "),e("ul",[e("li",[s._v("同一个 key 的值，只保留最后一次写入。")]),s._v(" "),e("li",[s._v("已删除或者已过期数据相关命令会被去除。这样就避免了 aof 文件过大而实际内存数据小的问题（如频繁修改数据时，命令很多，实际数据很少）。")])]),s._v(" "),e("h4",{attrs:{id:"_2-5-1-重写时机"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-5-1-重写时机"}},[s._v("#")]),s._v(" 2.5.1 重写时机")]),s._v(" "),e("ul",[e("li",[e("p",[s._v("手动执行 "),e("code",[s._v("bgrewriteaof")]),s._v(" 触发AOF重写。")])]),s._v(" "),e("li",[e("p",[s._v("在 "),e("code",[s._v("redis.conf")]),s._v("文件中配置重写的条件，如：")]),s._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 当文件小于64M时不进行重写")]),s._v("\nauto-aof-rewrite-min-size 64MB  \n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 当文件比上次重写后的文件大 100% 时进行重写")]),s._v("\nauto-aof-rewrite-min-percenrage "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),s._v("\n")])])])])]),s._v(" "),e("h4",{attrs:{id:"_2-5-2-重写过程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-5-2-重写过程"}},[s._v("#")]),s._v(" 2.5.2 重写过程")]),s._v(" "),e("ol",[e("li",[s._v("从主进程中 fork 出子进程，并拿到 fork 时的 AOF 文件数据写到一个临时 AOF 文件中。")]),s._v(" "),e("li",[s._v("在重写过程中，Redis 收到的命令会继续追加到现有的 AOF 文件里面。")]),s._v(" "),e("li",[s._v("重写完成后通知主进程，主进程会将 AOF 缓冲区中的数据追加到子进程生成的文件中，这样保证重写不丢失重写过程中的命令。")]),s._v(" "),e("li",[s._v("Redis 会原子的将旧文件替换为新文件，并开始将数据写入到新的 AOF 文件上。")])]),s._v(" "),e("h4",{attrs:{id:"_2-5-3-重写注意点"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-5-3-重写注意点"}},[s._v("#")]),s._v(" 2.5.3 重写注意点")]),s._v(" "),e("ol",[e("li",[s._v("执行重写时如果发现有进程正在执行重写，那么直接返回。")]),s._v(" "),e("li",[s._v("如果有进程正在执行 "),e("code",[s._v("bgsave")]),s._v("，那么会等 "),e("code",[s._v("bgsave")]),s._v(" 执行完成后再执行重写。")]),s._v(" "),e("li",[s._v("Redis 执行重写时会 fork 一个进程进行，其开销和 RDB 一样。")]),s._v(" "),e("li",[s._v("重写过程不影响原有的 AOF 过程，write，save 操作都不影响。")]),s._v(" "),e("li",[s._v("重写过程中有几种时刻会阻塞主进程： 在 fork 子进程时，将重写缓冲区的数据写到磁盘上时，使用新 AOF 文件替换旧文件时。")])]),s._v(" "),e("h3",{attrs:{id:"_2-6-常用配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-6-常用配置"}},[s._v("#")]),s._v(" 2.6 常用配置")]),s._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# fysnc 持久化策略")]),s._v("\nappendfsync everysec\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# AOF 重写期间是否禁止 fsync。如果开启该选项，可以减轻文件重写时 CPU 和影片的负载（尤其是硬盘），但是会丢失 AOF 重写期间的数据，因此我们需要在负载和安全性之间进行平衡。")]),s._v("\nno-appendfsync-on-rewrite no\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 当前 AOF 文件大于多少字节后才触发重写")]),s._v("\nauto-aof-rewrite-min-size 64mb\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 当文件比上次重写后的文件大 100% 时进行重写，也就是2倍时触发 rewrite")]),s._v("\nauto-aof-rewrite-percentage "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 如果 AOF 文件结尾损耗，Redis 启动时是否仍加载 AOF 文件")]),s._v("\naof-load-truncated "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("yes")]),s._v("\n")])])]),e("h3",{attrs:{id:"_2-7-aof-优点"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-7-aof-优点"}},[s._v("#")]),s._v(" 2.7 AOF 优点")]),s._v(" "),e("ol",[e("li",[s._v("数据不易丢失（顶多就丢失一两秒的数据）。")]),s._v(" "),e("li",[s._v("自动重写机制。")]),s._v(" "),e("li",[s._v("易懂易恢复。")])]),s._v(" "),e("h3",{attrs:{id:"_2-8-aof-缺点"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-8-aof-缺点"}},[s._v("#")]),s._v(" 2.8 AOF 缺点")]),s._v(" "),e("ol",[e("li",[s._v("AOF 文件恢复数据慢。")]),s._v(" "),e("li",[s._v("AOF 持久化效率低。")]),s._v(" "),e("li",[s._v("可能会存储下错误操作，影响后面数据恢复。")])]),s._v(" "),e("h2",{attrs:{id:"_3-如何选择-rdb-与-aof"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-如何选择-rdb-与-aof"}},[s._v("#")]),s._v(" 3. 如何选择 RDB 与 AOF")]),s._v(" "),e("h3",{attrs:{id:"_3-1-同时开启"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-同时开启"}},[s._v("#")]),s._v(" 3.1 同时开启")]),s._v(" "),e("p",[s._v("Redis 先加载 AOF 文件来恢复原始数据，因为 AOF 数据比 RDB 更完整，但是 AOF 存在潜在的 Bug，如把错误的操作记录写入了 AOF，会导致数据恢复失败，所以可以把 RDB 作为后备数据。")]),s._v(" "),e("p",[s._v("为了考虑性能，可以只在 "),e("code",[s._v("Slave")]),s._v(" 上开启 RDB，并且 15min 备份一次，如果为了避免 AOF rewrite 的 IO 以及阻塞，可以在 Redis 集群中不开启 AOF，靠集群的备份机制来保证可用性，在启动时选取较新的 RDB 文件，如果集群全部崩溃，会丢失 15min 前的数据。")]),s._v(" "),e("h3",{attrs:{id:"_3-2-混合模式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-混合模式"}},[s._v("#")]),s._v(" 3.2 混合模式")]),s._v(" "),e("p",[s._v("Redis4.0 开始支持该模式。")]),s._v(" "),e("p",[s._v("解决的问题：Redis 在重启时通常是加载 AOF 文件，但加载速度慢。因为 RDB 数据不完整，所以加载 AOF。")]),s._v(" "),e("p",[s._v("开始方式：")]),s._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("aof-user-rdb-preamble "),e("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("\n")])])]),e("p",[s._v("开启后，"),e("strong",[s._v("AOF 在重写时会直接读取 RDB 中的内容")]),s._v("。")]),s._v(" "),e("p",[s._v("运行过程：通过 "),e("code",[s._v("bgrewriteaof")]),s._v(" 完成，不同的是当开启混合持久化后：")]),s._v(" "),e("ol",[e("li",[s._v("子进程会把内存中的数据以 RDB 的方式写入 AOF 文件中。")]),s._v(" "),e("li",[s._v("把重写缓冲区中的增量命令以 AOF 方式写入到文件。")]),s._v(" "),e("li",[s._v("将含有 RDB 格式和 AOF 格式的 AOF 数据覆盖旧的 AOF 文件。")])]),s._v(" "),e("p",[s._v("新的 AOF 文件中，一部分数据来自 RDB 文件，一部分来自 Redis 运行过程中的增量数据。")]),s._v(" "),e("h3",{attrs:{id:"_3-3-数据恢复"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-数据恢复"}},[s._v("#")]),s._v(" 3.3 数据恢复")]),s._v(" "),e("p",[s._v("当我们开启了混合持久时，启动 Redis 依然先加载 AOF 文件，AOF 文件加载可能有以下两种情况：")]),s._v(" "),e("ol",[e("li",[s._v("AOF 文件开头是 RDB 的格式，先加载 RDB 内容再加载剩余的 AOF。")]),s._v(" "),e("li",[s._v("AOF 文件开始不是 RDB 的格式，直接以 AOF 格式加载整个文件。")])]),s._v(" "),e("h3",{attrs:{id:"_3-4-优点"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-4-优点"}},[s._v("#")]),s._v(" 3.4 优点")]),s._v(" "),e("ol",[e("li",[s._v("既能快速备份和恢复数据又能避免大量数据丢失。")])]),s._v(" "),e("h3",{attrs:{id:"_3-5-缺点"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-5-缺点"}},[s._v("#")]),s._v(" 3.5 缺点")]),s._v(" "),e("ol",[e("li",[s._v("RDB 是二进制压缩格式，AOF 在读取它时可读性较差。")])]),s._v(" "),e("h2",{attrs:{id:"_4-二者动态切换"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-二者动态切换"}},[s._v("#")]),s._v(" 4. 二者动态切换")]),s._v(" "),e("p",[s._v("在 Redis2.2 或以上版本，可以在不重启的情况下，从 RDB 切换到 AOF：")]),s._v(" "),e("ul",[e("li",[e("p",[s._v("为最近的 "),e("code",[s._v("dump.rdb")]),s._v(" 文件创建一个备份。")])]),s._v(" "),e("li",[e("p",[s._v("将备份放到一个安全的地方。")]),s._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" dump.rdb dump.rdb.bak\n")])])])]),s._v(" "),e("li",[e("p",[s._v("执行以下两条命令")]),s._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 开启 AOF")]),s._v("\nredis-cli config "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" appendonly "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("yes")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 关闭 RDB")]),s._v("\nredis-cli config "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" save "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),s._v("\n")])])]),e("ul",[e("li",[s._v("确保写命令会被正确地追加到 AOF 文件的末尾。")]),s._v(" "),e("li",[s._v("执行的第一条命令开启了 AOF 功能：Redis 会阻塞直到初始 AOF 文件创建完成为止，之后 Redis 会继续处理命令请求，并开始将写入命令追加到 AOF 文件末尾。")])])])]),s._v(" "),e("h2",{attrs:{id:"_5-容灾备份"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5-容灾备份"}},[s._v("#")]),s._v(" 5. 容灾备份")]),s._v(" "),e("p",[e("strong",[s._v("1. 开启 RDB 持久化")])]),s._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("save "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("900")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n")])])]),e("p",[e("strong",[s._v("2. 开启 AOF 配置")])]),s._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 开启")]),s._v("\nappendonly "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("yes")]),s._v("\nappendfilename "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"appendonly.aof"')]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 重写")]),s._v("\nauto-aof-rewrite-min-size 64mb\nauto-aof-rewrite-percentage "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 追加")]),s._v("\nappendfsync everysec\n")])])]),e("p",[e("strong",[s._v("3. RDB 日志备份，编写脚本定时备份")])]),s._v(" "),e("p",[s._v("vim 一个 "),e("code",[s._v("redis-rdb-copy-per-hour.sh")])]),s._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#!bin/bash")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("cur_date")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token variable"}},[e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("date")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"+%Y%m%d%H%M%S"')]),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" -rf /usr/local/redis/snapshotting/"),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$cur_date")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" -p /usr/local/redis/snapshotting/"),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$cur_date")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" /usr/local/redis/data/dump.rdb /usr/local/redis/snapshotting/"),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$cur_date")]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("del_date")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token variable"}},[e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("date")]),s._v(" -d -48hour "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"+Y%%m%d%H%M"')]),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" -rf /usr/local/redis/snapshotting/"),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$del_date")]),s._v("\n")])])]),e("p",[s._v("使用 "),e("code",[s._v("crontab")]),s._v(" 定时器执行备份脚本")]),s._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 打开 crontab")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("crontab")]),s._v(" -e\n")])])]),e("p",[s._v("然后写入（以下为每 10 秒执行一次，生产环境考验调整为每小时执行一次）：")]),s._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("*/1 * * * * sh /usr/local/redis/bin/redis-rdb-copy-per-hour.sh\n*/1 * * * * sleep 10; /usr/local/redis/bin/redis-rdb-copy-per-hour.sh\n*/1 * * * * sleep 20; /usr/local/redis/bin/redis-rdb-copy-per-hour.sh\n*/1 * * * * sleep 30; /usr/local/redis/bin/redis-rdb-copy-per-hour.sh\n*/1 * * * * sleep 40; /usr/local/redis/bin/redis-rdb-copy-per-hour.sh\n*/1 * * * * sleep 50; /usr/local/redis/bin/redis-rdb-copy-per-hour.sh\n")])])]),e("p",[s._v("保存即可。")]),s._v(" "),e("h2",{attrs:{id:"_6-优化方案"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_6-优化方案"}},[s._v("#")]),s._v(" 6. 优化方案")]),s._v(" "),e("ol",[e("li",[s._v("独立部署，硬盘优化\n"),e("ul",[e("li",[s._v("持久化过程是密集计算的过程，所以最好把 Redis 单独部署到一台服务器上。")]),s._v(" "),e("li",[s._v("写入请求多的话，可以考虑性能更高的 SSD 磁盘。")])])]),s._v(" "),e("li",[s._v("缓存禁用持久化\n"),e("ul",[e("li",[s._v("缓存丢失了也不要紧。")])])]),s._v(" "),e("li",[s._v("主从模式，从持久化\n"),e("ul",[e("li",[s._v("从节点一般只提供读功能，把持久化的工作交给从节点，减轻主节点的压力。")]),s._v(" "),e("li",[s._v("AOF 可以考虑禁用，因为多个从节点我们只需要选取追新的那份备份就可以了。")])])]),s._v(" "),e("li",[s._v("优化 fork 处理\n"),e("ul",[e("li",[s._v("降低 AOF 的重写频率。")]),s._v(" "),e("li",[s._v("重写期间如果已经阻塞的时候，那就不接收重写期间的数据了。")])])])]),s._v(" "),e("Vssue")],1)}),[],!1,null,null,null);a.default=r.exports}}]);
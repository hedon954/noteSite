(window.webpackJsonp=window.webpackJsonp||[]).push([[137],{549:function(s,e,a){"use strict";a.r(e);var t=a(47),r=Object(t.a)({},(function(){var s=this,e=s.$createElement,a=s._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"一、redis-快速入门"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、redis-快速入门"}},[s._v("#")]),s._v(" 一、Redis 快速入门")]),s._v(" "),a("h2",{attrs:{id:"_1-redis-初步认知"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-redis-初步认知"}},[s._v("#")]),s._v(" 1. Redis 初步认知")]),s._v(" "),a("h3",{attrs:{id:"_1-1-redis-介绍"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-redis-介绍"}},[s._v("#")]),s._v(" 1.1 Redis 介绍")]),s._v(" "),a("p",[s._v("Redis 是一个开源（BSD 许可）的，"),a("strong",[s._v("内存")]),s._v(" 中的数据结构存储系统，它可以用作 "),a("strong",[s._v("数据库、缓存和消息中间件")]),s._v("。 它支持多种类型的数据结构，如 "),a("code",[s._v("字符串（strings）")]),s._v("，"),a("code",[s._v("散列（hashes）")]),s._v("， "),a("code",[s._v("列表（lists）")]),s._v("， "),a("code",[s._v("集合（sets）")]),s._v("， "),a("code",[s._v("有序集合（sorted sets）")]),s._v(" 与范围查询 "),a("code",[s._v("bitmaps")]),s._v("， "),a("code",[s._v("hyperloglogs")]),s._v(" 和 地理空间（"),a("code",[s._v("geospatial")]),s._v("） 索引半径查询。 Redis 内置了"),a("code",[s._v("复制（replication）")]),s._v("，"),a("code",[s._v("LUA脚本（Lua scripting）")]),s._v("，"),a("code",[s._v("LRU驱动事件（LRU eviction）")]),s._v("，"),a("code",[s._v("事务（transactions）")]),s._v("和不同级别的"),a("code",[s._v("磁盘持久化（persistence）")]),s._v("， 并通过"),a("code",[s._v("Redis哨兵（Sentinel）")]),s._v("和"),a("code",[s._v("自动分区（Cluster）")]),s._v("提供高可用性（high availability）。")]),s._v(" "),a("h4",{attrs:{id:"特点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#特点"}},[s._v("#")]),s._v(" 特点")]),s._v(" "),a("ul",[a("li",[s._v("内存数据库，速度快，也支持数据的持久化，可以将内存中的数据保存在磁盘中，重启的时候可以再次加载进行使用。")]),s._v(" "),a("li",[s._v("Redis不仅仅支持简单的 key-value 类型的数据，同时还提供 list，set，zset，hash 等多种数据结构的存储。")]),s._v(" "),a("li",[s._v("Redis支持数据的备份（master-slave）与集群（分片存储），以及拥有哨兵监控机制。")]),s._v(" "),a("li",[s._v("支持事务")])]),s._v(" "),a("h4",{attrs:{id:"优势"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#优势"}},[s._v("#")]),s._v(" 优势")]),s._v(" "),a("ul",[a("li",[s._v("性能极高 – Redis 能读的速度是 110000次/s，写的速度是 81000次/s 。")]),s._v(" "),a("li",[s._v("丰富的数据类型 – Redis 支持 Strings、Lists、 Hashes、Sets 、Sorted Sets 等数据类型操作。")]),s._v(" "),a("li",[s._v("原子操作 – Redis 的所有操作都是原子性的，同时 Redis 还支持对几个操作合并后的原子性执行。（事务）")]),s._v(" "),a("li",[s._v("丰富的特性 – Redis 还支持 publish/subscribe，通知，key 过期等特性。")])]),s._v(" "),a("h4",{attrs:{id:"redis、memcached、ehcache的区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#redis、memcached、ehcache的区别"}},[s._v("#")]),s._v(" Redis、Memcached、Ehcache的区别")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://tva1.sinaimg.cn/large/008eGmZEgy1gphaiyfio8j30fx0c4wj2.jpg",alt:"1603679938653.png"}})]),s._v(" "),a("p",[s._v("这三个中间件都可以应用于缓存，但目前市面上使用 Redis 的场景会更多，更广泛，其原因是：Redis 性能高、原子操作、支持多种数据类型，主从复制与哨兵监控，持久化操作等。")]),s._v(" "),a("h3",{attrs:{id:"_1-2-redis-的高并发"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-redis-的高并发"}},[s._v("#")]),s._v(" 1.2 Redis 的高并发")]),s._v(" "),a("p",[s._v("官方的 bench-mark 数据：测试完成了 50 个并发执行 100000 个请求，设置和获取的值是一个 256 字节字符串。")]),s._v(" "),a("p",[s._v("结果：读的速度是 110000 次/s，写的速度是 81000 次/s。Redis 尽量少写多读，符合缓存的适用要求。单机 Redis 支撑万级，如果 10万+ 可以采用主从复制的模式。")]),s._v(" "),a("h4",{attrs:{id:"原理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#原理"}},[s._v("#")]),s._v(" 原理")]),s._v(" "),a("ol",[a("li",[s._v("Redis 是 "),a("strong",[s._v("纯内存")]),s._v(" 数据库，一般都是简单的存取操作，线程占用的时间很多，时间的花费主要集中在 IO 上，所以读取速度快。")]),s._v(" "),a("li",[s._v("Redis 使用的是 "),a("strong",[s._v("非阻塞 IO")]),s._v("，"),a("strong",[s._v("IO 多路复用")]),s._v(" ，使用了单线程来轮询描述符，将数据库的开、关、读、写都转换成了事件，减少了线程切换时上下文的切换和竞争。")]),s._v(" "),a("li",[s._v("Redis 采用了 "),a("strong",[s._v("单线程")]),s._v(" 的模型，保证了每个操作的 "),a("strong",[s._v("原子性")]),s._v("，也减少了线程的上下文切换和竞争。")]),s._v(" "),a("li",[s._v("Redis 存储结构多样化，不同的数据结构对数据存储进行了优化，如 "),a("strong",[s._v("压缩")]),s._v(" 表，对短数据进行压缩存储，再如，"),a("strong",[s._v("跳表")]),s._v("，使用有序的数据结构加快读取的速度。")]),s._v(" "),a("li",[s._v("Redis 采用自己实现的事件分离器，效率比较高，内部采用非阻塞的执行方式，吞吐能力比较大。")])]),s._v(" "),a("h3",{attrs:{id:"_1-3-redis-的单线程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-redis-的单线程"}},[s._v("#")]),s._v(" 1.3 Redis 的单线程")]),s._v(" "),a("h4",{attrs:{id:"原因"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#原因"}},[s._v("#")]),s._v(" 原因")]),s._v(" "),a("p",[a("strong",[s._v("1）不需要各种锁的性能消耗")])]),s._v(" "),a("p",[s._v("Redis 的数据结构并不全是简单的 Key-Value，还有 list，hash 等复杂的结构，这些结构有可能会进行很细粒度的操作，比如在很长的列表后面添加一个元素，在 hash 当中添加或者删除一个对象。这些操作可能就需要加非常多的锁，导致的结果是同步开销大大增加。总之，在单线程的情况下，就不用去考虑各种锁的问题，不存在加锁释放锁操作，没有因为可能出现死锁而导致的性能消耗。")]),s._v(" "),a("p",[a("strong",[s._v("2）单线程多进程集群方案")])]),s._v(" "),a("p",[s._v("单线程的威力实际上非常强大，每核心效率也非常高，多线程自然是可以比单线程有更高的性能上限，但是在今天的计算环境中，即使是单机多线程的上限也往往不能满足需要了，需要进一步摸索的是多服务器集群化的方案，这些方案中多线程的技术照样是用不上的。")]),s._v(" "),a("p",[a("strong",[s._v("3）CPU 消耗")])]),s._v(" "),a("p",[s._v("采用单线程，避免了不必要的上下文切换和竞争条件，也不存在多进程或者多线程导致的切换而消耗 CPU。但是如果 CPU 成为 Redis 瓶颈，或者不想让服务器其他 CPU 核闲置，那怎么办？可以考虑多起几个 Redis 进程，Redis 是 key-value 数据库，不是关系数据库，数据之间没有约束。只要客户端分清哪些 key 放在哪个 Redis 进程上就可以了。")]),s._v(" "),a("h4",{attrs:{id:"优点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#优点"}},[s._v("#")]),s._v(" 优点")]),s._v(" "),a("ol",[a("li",[s._v("代码更清晰，处理逻辑更简单")]),s._v(" "),a("li",[s._v("不用去考虑各种锁的问题，不存在加锁释放锁操作，没有因为可能出现死锁而导致的性能消耗")]),s._v(" "),a("li",[s._v("不存在多进程或者多线程导致的切换而消耗 CPU")])]),s._v(" "),a("h4",{attrs:{id:"缺点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#缺点"}},[s._v("#")]),s._v(" 缺点")]),s._v(" "),a("ol",[a("li",[s._v("无法发挥多核 CPU 性能，不过可以通过在单机开多个 Redis 实例来完善。")])]),s._v(" "),a("h3",{attrs:{id:"_1-4-io-多路复用技术"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-4-io-多路复用技术"}},[s._v("#")]),s._v(" 1.4 IO 多路复用技术")]),s._v(" "),a("p",[s._v("Redis 采用网络 IO 多路复用技术来保证在多连接的时候， 系统的高吞吐量。")]),s._v(" "),a("p",[s._v("多路——指的是多个 socket 连接，复用——指的是复用一个线程。")]),s._v(" "),a("p",[s._v("多路复用主要有三种技术：select，poll，epoll。"),a("code",[s._v("epoll")]),s._v("是最新的也是目前最好的多路复用技术。")]),s._v(" "),a("p",[s._v("这里“多路”指的是多个网络连接，“复用”指的是复用同一个线程。采用多路 I/O 复用技术可以让单个线程高效的处理多个连接请求（尽量减少网络 IO 的时间消耗），且 Redis 在内存中操作数据的速度非常快（内存内的操作不会成为这里的性能瓶颈），主要以上两点造就了 Redis 具有很高的吞吐量。")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://tva1.sinaimg.cn/large/008eGmZEgy1gphap2xvefj30gx0923yr.jpg",alt:"v2-33710051a9c5f28aff16b713bfa9b9f8_r.jpg"}})]),s._v(" "),a("h2",{attrs:{id:"_2-redis-软件安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-redis-软件安装"}},[s._v("#")]),s._v(" 2. Redis 软件安装")]),s._v(" "),a("h3",{attrs:{id:"_2-1-各版本特性讲解"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-各版本特性讲解"}},[s._v("#")]),s._v(" 2.1 各版本特性讲解")]),s._v(" "),a("h4",{attrs:{id:"redis2-6"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#redis2-6"}},[s._v("#")]),s._v(" Redis2.6")]),s._v(" "),a("p",[s._v("Redis2.6在2012年正是发布，经历了17个版本，到2.6.17版本，相对于Redis2.4，主要特性如下：")]),s._v(" "),a("p",[s._v("1）服务端支持Lua脚本。")]),s._v(" "),a("p",[s._v("2）去掉虚拟内存相关功能。")]),s._v(" "),a("p",[s._v("3）放开对客户端连接数的硬编码限制。")]),s._v(" "),a("p",[s._v("4）键的过期时间支持毫秒。")]),s._v(" "),a("p",[s._v("5）从节点支持只读功能。")]),s._v(" "),a("p",[s._v("6）两个新的位图命令：bitcount和bitop。")]),s._v(" "),a("p",[s._v("7）增强了redis-benchmark的功能：支持定制化的压测，CSV输出等功能。")]),s._v(" "),a("p",[s._v("8）基于浮点数自增命令：incrbyfloat和hincrbyfloat。")]),s._v(" "),a("p",[s._v("9）redis-cli可以使用--eval参数实现Lua脚本执行。")]),s._v(" "),a("p",[s._v("10）shutdown命令增强。")]),s._v(" "),a("p",[s._v("11）重构了大量的核心代码，所有集群相关的代码都去掉了，cluster功能将会是3.0版本最大的亮点。")]),s._v(" "),a("p",[s._v("12）info可以按照section输出，并且添加了一些统计项")]),s._v(" "),a("p",[s._v("13）sort命令优化")]),s._v(" "),a("h4",{attrs:{id:"redis2-8"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#redis2-8"}},[s._v("#")]),s._v(" Redis2.8")]),s._v(" "),a("p",[s._v("Redis2.8在2013年11月22日正式发布，经历了24个版本，到2.8.24版本，相比于Redis2.6，主要特性如下：")]),s._v(" "),a("p",[s._v("1）添加部分主从复制的功能，在一定程度上降低了由于网络问题，造成频繁全量复制生成RDB对系统造成的压力。")]),s._v(" "),a("p",[s._v("2）尝试性的支持IPv6.")]),s._v(" "),a("p",[s._v("3）可以通过config set命令设置maxclients。")]),s._v(" "),a("p",[s._v("4）可以用bind命令绑定多个IP地址。")]),s._v(" "),a("p",[s._v("5）Redis设置了明显的进程名，方便使用ps命令查看系统进程。")]),s._v(" "),a("p",[s._v("6）config rewrite命令可以将config set持久化到Redis配置文件中。")]),s._v(" "),a("p",[s._v("7）发布订阅添加了pubsub。")]),s._v(" "),a("p",[s._v("8）Redis Sentinel第二版，相比于Redis2.6的Redis Sentinel，此版本已经变成生产可用。")]),s._v(" "),a("h4",{attrs:{id:"redis3-0-里程碑"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#redis3-0-里程碑"}},[s._v("#")]),s._v(" Redis3.0（里程碑）")]),s._v(" "),a("p",[s._v("Redis3.0在2015年4月1日正式发布，相比于Redis2.8主要特性如下：")]),s._v(" "),a("p",[s._v("Redis最大的改动就是添加Redis的分布式实现Redis Cluster。")]),s._v(" "),a("p",[s._v("1）Redis Cluster：Redis的官方分布式实现。")]),s._v(" "),a("p",[s._v("2）全新的embedded string对象编码结果，优化小对象内存访问，在特定的工作负载下载速度大幅提升。")]),s._v(" "),a("p",[s._v("3）Iru算法大幅提升。")]),s._v(" "),a("p",[s._v("4）migrate连接缓存，大幅提升键迁移的速度。")]),s._v(" "),a("p",[s._v("5）migrate命令两个新的参数copy和replace。")]),s._v(" "),a("p",[s._v("6）新的client pause命令，在指定时间内停止处理客户端请求。")]),s._v(" "),a("p",[s._v("7）bitcount命令性能提升。")]),s._v(" "),a("p",[s._v("8）cinfig set设置maxmemory时候可以设置不同的单位（之前只能是字节）。")]),s._v(" "),a("p",[s._v("9）Redis日志小做调整：日志中会反应当前实例的角色（master或者slave）。")]),s._v(" "),a("p",[s._v("10）incr命令性能提升。")]),s._v(" "),a("h4",{attrs:{id:"redis3-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#redis3-2"}},[s._v("#")]),s._v(" Redis3.2")]),s._v(" "),a("p",[s._v("Redis3.2在2016年5月6日正式发布，相比于Redis3.0主要特征如下：")]),s._v(" "),a("p",[s._v("1）添加GEO相关功能。")]),s._v(" "),a("p",[s._v("2）SDS在速度和节省空间上都做了优化。")]),s._v(" "),a("p",[s._v("3）支持用upstart或者systemd管理Redis进程。")]),s._v(" "),a("p",[s._v("4）新的List编码类型：quicklist。")]),s._v(" "),a("p",[s._v("5）从节点读取过期数据保证一致性。")]),s._v(" "),a("p",[s._v("6）添加了hstrlen命令。")]),s._v(" "),a("p",[s._v("7）增强了debug命令，支持了更多的参数。")]),s._v(" "),a("p",[s._v("8）Lua脚本功能增强。")]),s._v(" "),a("p",[s._v("9）添加了Lua Debugger。")]),s._v(" "),a("p",[s._v("10）config set 支持更多的配置参数。")]),s._v(" "),a("p",[s._v("11）优化了Redis崩溃后的相关报告。")]),s._v(" "),a("p",[s._v("12）新的RDB格式，但是仍然兼容旧的RDB。")]),s._v(" "),a("p",[s._v("13）加速RDB的加载速度。")]),s._v(" "),a("p",[s._v("14）spop命令支持个数参数。")]),s._v(" "),a("p",[s._v("15）cluster nodes命令得到加速。")]),s._v(" "),a("p",[s._v("16）Jemalloc更新到4.0.3版本。")]),s._v(" "),a("h4",{attrs:{id:"redis4-0"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#redis4-0"}},[s._v("#")]),s._v(" Redis4.0")]),s._v(" "),a("p",[s._v("可能出乎很多的意料，Redis3.2之后的版本是4.0，而不是3.4、3.6、3.8。")]),s._v(" "),a("p",[s._v("一般这种重大版本号的升级也意味着软件或者工具本身发生了重大改革。下面是Redis4.0的新特性：")]),s._v(" "),a("p",[s._v("1）提供了模块系统，方便第三方开发者拓展Redis的功能。")]),s._v(" "),a("p",[s._v("2）PSYNC2.0：优化了之前版本中，主从节点切换必然引起全量复制的问题。")]),s._v(" "),a("p",[s._v("3）提供了新的缓存剔除算法：LFU（Last Frequently Used），并对已有算法进行了优化。")]),s._v(" "),a("p",[s._v("4）提供了非阻塞del和flushall/flushdb功能，有效解决删除了bigkey可能造成的Redis阻塞。")]),s._v(" "),a("p",[s._v("5）提供了memory命令，实现对内存更为全面的监控统计。")]),s._v(" "),a("p",[s._v("6）提供了交互数据库功能，实现Redis内部数据库的数据置换。")]),s._v(" "),a("p",[s._v("7）提供了RDB-AOF混合持久化格式，充分利用了AOF和RDB各自优势。")]),s._v(" "),a("p",[s._v("8）Redis Cluster "),a("strong",[s._v("兼容NAT和Docker")]),s._v("。")]),s._v(" "),a("h4",{attrs:{id:"redis5-0"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#redis5-0"}},[s._v("#")]),s._v(" Redis5.0")]),s._v(" "),a("p",[s._v("1）新的Stream数据类型。[1]5.0")]),s._v(" "),a("p",[s._v("2）新的Redis模块API：Timers and Cluster API。")]),s._v(" "),a("p",[s._v("3）RDB现在存储LFU和LRU信息。")]),s._v(" "),a("p",[s._v("4）集群管理器从Ruby（redis-trib.rb）移植到C代码。可以在redis-cli中。查看"),a("code",[s._v("redis-cli —cluster help")]),s._v("了解更多信息。")]),s._v(" "),a("p",[s._v("5）新sorted set命令：ZPOPMIN / MAX和阻塞变量。")]),s._v(" "),a("p",[s._v("6）主动碎片整理V2。")]),s._v(" "),a("p",[s._v("7）增强HyperLogLog实现。")]),s._v(" "),a("p",[s._v("8）更好的内存统计报告。")]),s._v(" "),a("p",[s._v("9）许多带有子命令的命令现在都有一个HELP子命令。")]),s._v(" "),a("p",[s._v("10）客户经常连接和断开连接时性能更好。")]),s._v(" "),a("p",[s._v("11）错误修复和改进。")]),s._v(" "),a("p",[s._v("12）Jemalloc升级到5.1版")]),s._v(" "),a("h4",{attrs:{id:"redis6-0"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#redis6-0"}},[s._v("#")]),s._v(" Redis6.0")]),s._v(" "),a("ol",[a("li",[a("p",[a("strong",[s._v("多线程IO")]),s._v("。Redis6 引入多线程 IO。但多线程部分只是用来处理网络数据的读写和协议解析，执行命令仍然是单线程。之所以这么设计是不想因为多线程而变得复杂，需要去控制 key、lua、事务，LPUSH/LPOP 等等的并发问题。")])]),s._v(" "),a("li",[a("p",[s._v("重新设计了客户端缓存功能。实现了Client-side-caching（客户端缓存）功能。放弃了caching slot，而只使用 key names。")])]),s._v(" "),a("li",[a("p",[s._v("RESP3 协议。RESP（Redis Serialization Protocol）是 Redis 服务端与客户端之间通信的协议。Redis5 使用的是 RESP2，而 Redis 6 开始在兼容 RESP2 的基础上，开始支持 RESP3。")]),s._v(" "),a("p",[s._v("推出RESP3的目的：一是因为希望能为客户端提供更多的语义化响应，以开发使用旧协议难以实现的功能；另一个原因是实现 Client-side-caching（客户端缓存）功能。")])]),s._v(" "),a("li",[a("p",[s._v("支持SSL。连接支持SSL，更加安全。")])]),s._v(" "),a("li",[a("p",[s._v("ACL权限控制")])])]),s._v(" "),a("ul",[a("li",[s._v("支持对客户端的权限控制，实现对不同的key授予不同的操作权限。")]),s._v(" "),a("li",[s._v("有一个新的 ACL 日志命令，允许查看所有违反 ACL 的客户机、访问不应该访问的命令、访问不应该访问的密钥，或者验证尝试失败。这对于调试ACL问题非常有用。")])]),s._v(" "),a("ol",{attrs:{start:"6"}},[a("li",[s._v("提升了 RDB 日志加载速度。根据文件的实际组成（较大或较小的值），可以预期 20/30% 的改进。当有很多客户机连接时，信息也更快了，这是一个老问题，现在终于解决了。")]),s._v(" "),a("li",[s._v("发布官方的 Redis 集群代理模块 Redis Cluster proxy。在 Redis 集群中，客户端会非常分散，现在为此引入了一个集群代理，可以为客户端抽象 Redis 群集，使其像正在与单个实例进行对话一样。同时在简单且客户端仅使用简单命令和功能时执行多路复用。")]),s._v(" "),a("li",[s._v("提供了众多的新模块（modules）API")])]),s._v(" "),a("h3",{attrs:{id:"_2-2-安装-redis"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-安装-redis"}},[s._v("#")]),s._v(" 2.2 安装 Redis")]),s._v(" "),a("blockquote",[a("p",[s._v("CentOS 7")])]),s._v(" "),a("p",[a("strong",[s._v("第一步：下载安装包")])]),s._v(" "),a("p",[s._v("下载地址：https://redis.io/download，一般下载稳定版（Stable）。")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" -P /usr/local/src/ https://download.redis.io/releases/redis-6.0.9.tar.gz\n")])])]),a("p",[a("strong",[s._v("第二歩：解压")])]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /usr/local/src/\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" -zxvf redis-6.0.9.tar.gz\n")])])]),a("p",[a("strong",[s._v("第三步：安装依赖")])]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("yum -y "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" gcc-c++ autoconf automake tcl\n")])])]),a("p",[a("strong",[s._v("第四步：升级 GCC")])]),s._v(" "),a("p",[s._v("因为 CentOS 7 默认的 GCC 版本是 4.8.5，版本过低，编译不了 Redis 6.x 版本，所以需要升级一下。")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 安装 scl 源")]),s._v("\nyum "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" -y centos-release-scl scl-utils-build\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 安装 9 版本的 gcc、gcc-c++、gdb 工具链（toolchain）")]),s._v("\nyum "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" -y devtoolset-9-toolchain\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 临时覆盖系统原有的 gcc 引用")]),s._v("\nscl "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("enable")]),s._v(" devtoolset-9 "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("bash")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看当前 gcc 版本")]),s._v("\ngcc -v\n")])])]),a("p",[a("strong",[s._v("第五步：预编译")])]),s._v(" "),a("p",[s._v("切换到解压目录")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" redis-6.0.9/\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v("\n")])])]),a("p",[a("strong",[s._v("第六步：安装")])]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" /usr/local/redis\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("PREFIX")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/usr/local/redis/ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v("\n")])])]),a("p",[a("strong",[s._v("第七步：查看 Redis 命令")])]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /usr/local/redis/bin\n$ ll\n-rw-r--r-- "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" root root       "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("92")]),s._v(" Apr "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("12")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("11")]),s._v(":01 dump.rdb\n-rwxr-xr-x "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" root root  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("6399824")]),s._v(" Jul "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("27")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v(":49 redis-benchmark\n-rwxr-xr-x "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" root root "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("11388160")]),s._v(" Jul "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("27")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v(":49 redis-check-aof\n-rwxr-xr-x "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" root root "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("11388160")]),s._v(" Jul "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("27")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v(":49 redis-check-rdb\n-rwxr-xr-x "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" root root  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("6728424")]),s._v(" Jul "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("27")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v(":49 redis-cli\nlrwxrwxrwx "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" root root       "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("12")]),s._v(" Jul "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("27")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v(":49 redis-sentinel -"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" redis-server\n-rwxr-xr-x "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" root root "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("11388160")]),s._v(" Jul "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("27")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v(":49 redis-server\n")])])]),a("p",[a("strong",[s._v("第八步：配置 Redis 环境")])]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" ~/.bash_profile\n")])])]),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("REDIS")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/usr/local/redis/bin\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("PATH")])]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$PATH")]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$REDIS")]),s._v("\n")])])]),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("source")]),s._v(" ~/.bash_profile\n")])])]),a("p",[a("strong",[s._v("第九步：修改配置，使 Redis 在后台启动")])]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /usr/local/src/redis-6.0.9/\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" redis.conf /usr/local/redis/bin\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /usr/local/redis/bin\n")])])]),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" redis.conf\n")])])]),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 修改 224 行")]),s._v("\ndaemonize "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("yes")]),s._v("\n")])])]),a("p",[a("strong",[s._v("第十步：启动 Redis 服务器")])]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("redis-server redis.conf\n")])])]),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ps")]),s._v(" -ef "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" redis\nroot     "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("22242")]),s._v("     "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("11")]),s._v(":00 ?        00:00:00 redis-server "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1:6379\nroot     "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("22278")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4431")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("11")]),s._v(":00 pts/0    00:00:00 "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" --color"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("auto redis\n")])])]),a("p",[a("strong",[s._v("第十一步：将 Redis 添加到开机自启")])]),s._v(" "),a("blockquote",[a("p",[s._v("CentOS 7")])]),s._v(" "),a("ul",[a("li",[a("p",[s._v("在系统服务目录里创建 "),a("code",[s._v("redis.service")]),s._v(" 文件")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" /etc/systemd/system/redis.service\n")])])])]),s._v(" "),a("li",[a("p",[s._v("内容：")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("Unit"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("Description")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("redis-server\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("After")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("network.target\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("Service"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("Type")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("forking\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ExecStart")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/usr/local/redis/bin/redis-server /usr/local/redis/bin/redis.conf\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("PrivateTmp")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("true\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("Install"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("WantedBy")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("multi-user.target\n")])])])]),s._v(" "),a("li",[a("p",[s._v("重启系统服务")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("systemctl daemon-reload\n")])])])]),s._v(" "),a("li",[a("p",[s._v("开启自启")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("systemctl "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("enable")]),s._v(" redis.service\n")])])])])]),s._v(" "),a("h2",{attrs:{id:"_3-redis-配置文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-redis-配置文件"}},[s._v("#")]),s._v(" 3. Redis 配置文件")]),s._v(" "),a("p",[s._v("Redis 支持很多的参数，但都有默认值：")]),s._v(" "),a("table",[a("thead",[a("tr",[a("th",[s._v("字段名")]),s._v(" "),a("th",[s._v("默认值")]),s._v(" "),a("th",[s._v("说明")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("daemonize")]),s._v(" "),a("td",[s._v("no")]),s._v(" "),a("td",[s._v("默认情况下，redis 不是在后台运行的，如果需要在后台运行，把该项设置为 yes")])]),s._v(" "),a("tr",[a("td",[s._v("bind")]),s._v(" "),a("td",[s._v("127.0.0.1")]),s._v(" "),a("td",[s._v("指定 Redis 只接受来自该 IP 地址的请求")])]),s._v(" "),a("tr",[a("td",[s._v("port")]),s._v(" "),a("td",[s._v("6379")]),s._v(" "),a("td",[s._v("监听端口")])]),s._v(" "),a("tr",[a("td",[s._v("databases")]),s._v(" "),a("td",[s._v("16")]),s._v(" "),a("td",[s._v("设置数据库的个数，默认使用的数据库是第 0 号数据库")])]),s._v(" "),a("tr",[a("td",[a("br"),s._v("save")]),s._v(" "),a("td",[s._v("900 1"),a("br"),s._v("300 10"),a("br"),s._v("60 10000")]),s._v(" "),a("td",[s._v("设置 Redis 进行数据库镜像的频率，“900 1”表示前面的 900 秒内有 1 次修改就做镜像")])]),s._v(" "),a("tr",[a("td",[s._v("dbfilename")]),s._v(" "),a("td",[s._v("dump.rdb")]),s._v(" "),a("td",[s._v("镜像备份文件的文件名")])]),s._v(" "),a("tr",[a("td",[s._v("dir")]),s._v(" "),a("td",[s._v("./")]),s._v(" "),a("td",[s._v("数据库镜像备份的文件放置的路径")])]),s._v(" "),a("tr",[a("td",[s._v("requirepass")]),s._v(" "),a("td"),s._v(" "),a("td",[s._v("设置客户端连接后进行任何其他指令前需要使用的密码")])]),s._v(" "),a("tr",[a("td",[s._v("maxclients")]),s._v(" "),a("td",[s._v("10000")]),s._v(" "),a("td",[s._v("限制同时连接的客户端数量")])]),s._v(" "),a("tr",[a("td",[s._v("maxmemory")]),s._v(" "),a("td"),s._v(" "),a("td",[s._v("设置 redis 能够使用的最大内存")])])])]),s._v(" "),a("h2",{attrs:{id:"_4-redis-图形化工具"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-redis-图形化工具"}},[s._v("#")]),s._v(" 4. Redis 图形化工具")]),s._v(" "),a("h3",{attrs:{id:"_4-1-准备工作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-准备工作"}},[s._v("#")]),s._v(" 4.1 准备工作")]),s._v(" "),a("blockquote",[a("p",[s._v("以下操作仅供测试，生产环境下切切不可。")])]),s._v(" "),a("ul",[a("li",[a("p",[s._v("关系防火墙：")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("systemctl stop firewalld\nsyetemctl disable firewalld\n")])])])]),s._v(" "),a("li",[a("p",[s._v("在 "),a("code",[s._v("redis.conf")]),s._v(" 加入白名单：")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" /usr/local/redis/bin/redis.conf\n")])])]),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#修改，开放端口")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("bind")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),s._v(".0.0\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#加密码")]),s._v("\nrequirepass "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("123456")]),s._v("\n")])])])]),s._v(" "),a("li",[a("p",[s._v("重启 Redis")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("systemctl restart redis.service\n")])])])])]),s._v(" "),a("h3",{attrs:{id:"_4-2-下载图形化工具"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-下载图形化工具"}},[s._v("#")]),s._v(" 4.2 下载图形化工具")]),s._v(" "),a("blockquote",[a("p",[s._v("Redis Desktop Manager for Mac：付费，有破解版")]),s._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/qishibo/AnotherRedisDesktopManager",target:"_blank",rel:"noopener noreferrer"}},[s._v("AnotherRedisDesktopManager"),a("OutboundLink")],1),s._v("：Github 开源版本，可以参照 README.md 来下载")])]),s._v(" "),a("h2",{attrs:{id:"_5-redis-客户端"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-redis-客户端"}},[s._v("#")]),s._v(" 5. Redis 客户端")]),s._v(" "),a("blockquote",[a("p",[s._v("https://redis.io/clients")])]),s._v(" "),a("ul",[a("li",[a("p",[s._v("使用命令行客户端连接 redis")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("redis-cli -h 主机地址 -p 端口号 -a 密码\n")])])]),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("redis-cli -h "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),s._v(".0.0 -p "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("6379")]),s._v(" -a "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("123456")]),s._v("\n")])])])])]),s._v(" "),a("Vssue")],1)}),[],!1,null,null,null);e.default=r.exports}}]);
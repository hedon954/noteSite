(window.webpackJsonp=window.webpackJsonp||[]).push([[161],{572:function(_,t,v){"use strict";v.r(t);var a=v(47),s=Object(a.a)({},(function(){var _=this,t=_.$createElement,v=_._self._c||t;return v("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[v("h1",{attrs:{id:"八、分库分表"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#八、分库分表"}},[_._v("#")]),_._v(" 八、分库分表")]),_._v(" "),v("blockquote",[v("p",[_._v("参考：https://www.cnblogs.com/butterfly100/p/9034281.html")])]),_._v(" "),v("p",[_._v("关系型数据库本身比较容易成为系统瓶颈，单机存储容量、连接数、处理能力都有限。当单表的数据量达到 1000W 或 100G 以后，由于查询维度较多，即使添加从库、优化索引，做很多操作时性能仍下降严重。此时就要考虑对其进行切分了，切分的目的就在于减少数据库的负担，缩短查询时间。")]),_._v(" "),v("p",[_._v("数据库分布式核心内容无非就是数据切分（Sharding），以及切分后对数据的定位、整合。")]),_._v(" "),v("p",[_._v("数据切分就是将数据分散存储到多个数据库中，使得单一数据库中的数据量变小，通过扩充主机的数量缓解单一数据库的性能问题，从而达到提升数据库操作性能的目的。")]),_._v(" "),v("p",[_._v("数据切分根据其切分类型，可以分为两种方式：垂直（纵向）切分和水平（横向）切分")]),_._v(" "),v("h2",{attrs:{id:"_1-垂直切分"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-垂直切分"}},[_._v("#")]),_._v(" 1. 垂直切分")]),_._v(" "),v("p",[_._v("垂直切分常见有垂直分库和垂直分表两种。")]),_._v(" "),v("h3",{attrs:{id:"_1-1-垂直分库"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-垂直分库"}},[_._v("#")]),_._v(" 1.1 垂直分库")]),_._v(" "),v("p",[_._v("垂直分库就是"),v("strong",[_._v("根据业务耦合性，将关联度低的不同表存储在不同的数据库")]),_._v('。做法与大系统拆分为多个小系统类似，按业务分类进行独立划分。与"微服务治理"的做法相似，'),v("strong",[_._v("每个微服务使用单独的一个数据库")]),_._v("。如图：")]),_._v(" "),v("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://tva1.sinaimg.cn/large/008eGmZEly1gpkhahqapwj30pe0gcagp.jpg",alt:"img"}}),_._v(" "),v("ul",[v("li",[v("font",{attrs:{color:"red"}},[_._v("关联查询直接嗝屁。")])],1)]),_._v(" "),v("h3",{attrs:{id:"_1-2-垂直分表"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-垂直分表"}},[_._v("#")]),_._v(" 1.2 垂直分表")]),_._v(" "),v("p",[_._v("垂直分表是"),v("strong",[_._v('基于数据库中的"列"进行，某个表字段较多，可以新建一张扩展表，将不经常用或字段长度较大的字段拆分出去到扩展表中')]),_._v('。在字段很多的情况下（例如一个大表有 100 多个字段），通过"'),v("strong",[_._v("大表拆小表")]),_._v('"，更便于开发与维护，也能避免跨页问题，MySQL 底层是通过数据页存储的，一条记录占用空间过大会导致跨页，造成额外的性能开销。另外数据库以行为单位将数据加载到内存中，这样表中字段长度较短且访问频率较高，内存能加载更多的数据，命中率更高，减少了磁盘IO，从而提升了数据库性能。')]),_._v(" "),v("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://tva1.sinaimg.cn/large/008eGmZEly1gpkhbvisbqj30ns0bgmyh.jpg",alt:"img"}}),_._v(" "),v("h3",{attrs:{id:"_1-3-垂直切分的优点"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-垂直切分的优点"}},[_._v("#")]),_._v(" 1.3 垂直切分的优点")]),_._v(" "),v("ul",[v("li",[_._v("解决业务系统层面的耦合，业务清晰。")]),_._v(" "),v("li",[_._v("与微服务的治理类似，也能对不同业务的数据进行分级管理、维护、监控、扩展等。")]),_._v(" "),v("li",[_._v("高并发场景下，垂直切分一定程度的提升IO、数据库连接数、单机硬件资源的瓶颈，")])]),_._v(" "),v("h3",{attrs:{id:"_1-4-垂直切分的缺点"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-4-垂直切分的缺点"}},[_._v("#")]),_._v(" 1.4 垂直切分的缺点")]),_._v(" "),v("ul",[v("li",[_._v("部分表无法 join，只能通过接口聚合方式解决，提升了开发的复杂度。")]),_._v(" "),v("li",[_._v("分布式事务处理复杂。")]),_._v(" "),v("li",[_._v("依然存在单表数据量过大的问题（需要水平切分）。")])]),_._v(" "),v("h2",{attrs:{id:"_2-水平切分"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-水平切分"}},[_._v("#")]),_._v(" 2. 水平切分")]),_._v(" "),v("p",[v("strong",[_._v("当一个应用难以再细粒度的垂直切分，或切分后数据量行数巨大，存在单库读写、存储性能瓶颈")]),_._v("，这时候就需要进行水平切分了。")]),_._v(" "),v("p",[_._v("水平切分分为"),v("strong",[_._v("库内分表")]),_._v("和"),v("strong",[_._v("分库分表")]),_._v("，是"),v("strong",[_._v("根据表内数据内在的逻辑关系，将同一个表按不同的条件分散到多个数据库或多个表中，每个表中只包含一部分数据，从而使得单个表的数据量变小，达到分布式的效果")]),_._v("。如图所示：")]),_._v(" "),v("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://tva1.sinaimg.cn/large/008eGmZEgy1gpkhdmzv3aj30kg0nedps.jpg",alt:"img"}}),_._v(" "),v("p",[_._v("库内分表"),v("font",{attrs:{color:"red"}},[_._v("只解决了单一表数据量过大的问题")]),_._v("，但没有将表分布到不同机器的库上，因此对于减轻 MySQL 数据库的压力来说，帮助不是很大，大家还是竞争同一个物理机的 CPU、内存、网络 IO，最好通过 "),v("strong",[_._v("分库分表")]),_._v(" 来解决。")],1),_._v(" "),v("h3",{attrs:{id:"_2-1-水平切分的优点"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-水平切分的优点"}},[_._v("#")]),_._v(" 2.1 水平切分的优点")]),_._v(" "),v("ul",[v("li",[_._v("不存在单库数据量过大、高并发的性能瓶颈，提升系统稳定性和负载能力。")]),_._v(" "),v("li",[_._v("应用端改造较小，不需要拆分业务模块。")])]),_._v(" "),v("h3",{attrs:{id:"_2-2-水平切分的缺点"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-水平切分的缺点"}},[_._v("#")]),_._v(" 2.2 水平切分的缺点")]),_._v(" "),v("ul",[v("li",[_._v("跨分片的事务一致性难以保证。")]),_._v(" "),v("li",[_._v("跨库的 join 关联查询性能较差。")]),_._v(" "),v("li",[_._v("数据多次扩展难度和维护量极大。")])]),_._v(" "),v("h3",{attrs:{id:"_2-3-分片规则"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-分片规则"}},[_._v("#")]),_._v(" 2.3 分片规则")]),_._v(" "),v("p",[_._v("水平切分后同一张表会出现在多个数据库/表中，每个库/表的内容不同。几种典型的数据分片规则为：")]),_._v(" "),v("h4",{attrs:{id:"_2-3-1-根据数值范围"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-1-根据数值范围"}},[_._v("#")]),_._v(" 2.3.1 根据数值范围")]),_._v(" "),v("p",[_._v("按照"),v("strong",[_._v("时间区间")]),_._v("或 "),v("strong",[_._v("ID 区间")]),_._v('来切分。例如：按日期将不同月甚至是日的数据分散到不同的库中；将userId为1~9999的记录分到第一个库，10000~20000的分到第二个库，以此类推。某种意义上，某些系统中使用的"冷热数据分离"，将一些使用较少的历史数据迁移到其他库中，业务功能上只提供热点数据的查询，也是类似的实践。')]),_._v(" "),v("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://tva1.sinaimg.cn/large/008eGmZEly1gpkhhqdnq1j311y0dmdk6.jpg",alt:"img"}}),_._v(" "),v("p",[_._v("这样的优点在于：")]),_._v(" "),v("ul",[v("li",[_._v("单表大小可控。")]),_._v(" "),v("li",[_._v("天然便于水平扩展，后期如果想对整个分片集群扩容时，只需要添加节点即可，无需对其他分片的数据进行迁移。")]),_._v(" "),v("li",[_._v("使用分片字段进行范围查找时，连续分片可快速定位分片进行快速查询，有效避免跨分片查询的问题。")])]),_._v(" "),v("p",[_._v("缺点：")]),_._v(" "),v("ul",[v("li",[_._v("热点数据成为性能瓶颈。连续分片可能存在数据热点，例如按时间字段分片，有些分片存储最近时间段内的数据，可能会被频繁的读写，而有些分片存储的历史数据，则很少被查询。")])]),_._v(" "),v("h4",{attrs:{id:"_2-3-2-根据数值取模"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-2-根据数值取模"}},[_._v("#")]),_._v(" 2.3.2 根据数值取模")]),_._v(" "),v("p",[_._v("一般采用 "),v("strong",[_._v("hash 取模 mod")]),_._v(" 的切分方式，例如：将 Customer 表根据 cusno 字段切分到 4 个库中，余数为 0 的放到第一个库，余数为 1 的放到第二个库，以此类推。这样同一个用户的数据会分散到同一个库中，如果查询条件带有 cusno 字段，则可明确定位到相应库去查询。")]),_._v(" "),v("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://tva1.sinaimg.cn/large/008eGmZEly1gpkhimcj1cj30ri0nodri.jpg",alt:"img"}}),_._v(" "),v("p",[_._v("优点：")]),_._v(" "),v("ul",[v("li",[_._v("数据分片相对比较均匀，不容易出现热点和并发访问的瓶颈")])]),_._v(" "),v("p",[_._v("缺点：")]),_._v(" "),v("ul",[v("li",[_._v("后期分片集群扩容时，需要迁移旧的数据（使用一致性 hash 算法能较好的避免这个问题）。")]),_._v(" "),v("li",[_._v("容易面临跨分片查询的复杂问题。比如上例中，如果频繁用到的查询条件中不带 cusno 时，将会导致无法定位数据库，从而需要同时向 4 个库发起查询，再在内存中合并数据，取最小集返回给应用，分库反而成为拖累。")])]),_._v(" "),v("h3",{attrs:{id:"_2-4-分库分表带来的问题"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-分库分表带来的问题"}},[_._v("#")]),_._v(" 2.4 分库分表带来的问题")]),_._v(" "),v("p",[_._v("分库分表能有效的环节单机和单库带来的性能瓶颈和压力，突破网络IO、硬件资源、连接数的瓶颈，同时也带来了一些问题。下面将描述这些技术挑战以及对应的解决思路。")]),_._v(" "),v("h4",{attrs:{id:"_2-4-1-事务一致性问题"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-1-事务一致性问题"}},[_._v("#")]),_._v(" 2.4.1 事务一致性问题")]),_._v(" "),v("p",[v("strong",[_._v("分布式事务")])]),_._v(" "),v("p",[_._v('当更新内容同时分布在不同库中，不可避免会带来跨库事务问题。跨分片事务也是分布式事务，没有简单的方案，一般可使用"XA 协议"和"两阶段提交"处理。')]),_._v(" "),v("p",[_._v("分布式事务能最大限度保证了数据库操作的原子性。但在提交事务时需要协调多个节点，推后了提交事务的时间点，延长了事务的执行时间。导致事务在访问共享资源时发生冲突或死锁的概率增高。随着数据库节点的增多，这种趋势会越来越严重，从而成为系统在数据库层面上水平扩展的枷锁。")]),_._v(" "),v("p",[v("strong",[_._v("最终一致性")])]),_._v(" "),v("p",[_._v("对于那些性能要求很高，但对一致性要求不高的系统，往往不苛求系统的实时一致性，只要在允许的时间段内达到最终一致性即可，可采用事务补偿的方式。与事务在执行中发生错误后立即回滚的方式不同，事务补偿是一种事后检查补救的措施，一些常见的实现方法有：对数据进行对账检查，基于日志进行对比，定期同标准数据来源进行同步等等。事务补偿还要结合业务系统来考虑。")]),_._v(" "),v("h4",{attrs:{id:"_2-4-2-跨节点关联-join-查询问题"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-2-跨节点关联-join-查询问题"}},[_._v("#")]),_._v(" 2.4.2 跨节点关联 join 查询问题")]),_._v(" "),v("p",[_._v("切分之前，系统中很多列表和详情页所需的数据可以通过 sql join 来完成。而切分之后，数据可能分布在不同的节点上，此时 join 带来的问题就比较麻烦了，考虑到性能，尽量避免使用 join 查询。")]),_._v(" "),v("p",[_._v("解决这个问题的一些方法：")]),_._v(" "),v("p",[v("strong",[_._v("1）全局表")])]),_._v(" "),v("p",[_._v('全局表，也可看做是"数据字典表"，就是系统中所有模块都可能依赖的一些表，为了避免跨库 join 查询，可以将这类表在每个数据库中都保存一份。这些数据通常很少会进行修改，所以也不担心一致性的问题。')]),_._v(" "),v("p",[v("strong",[_._v("2）字段冗余")])]),_._v(" "),v("p",[_._v('一种典型的反范式设计，利用空间换时间，为了性能而避免 join 查询。例如：订单表保存 userId 时候，也将 userName 冗余保存一份，这样查询订单详情时就不需要再去查询"买家 user 表"了。')]),_._v(" "),v("p",[_._v("但这种方法适用场景也有限，比较适用于依赖字段比较少的情况。而冗余字段的数据一致性也较难保证，就像上面订单表的例子，买家修改了 userName 后，是否需要在历史订单中同步更新呢？这也要结合实际业务场景进行考虑。")]),_._v(" "),v("p",[v("strong",[_._v("3）数据组装")])]),_._v(" "),v("p",[_._v("在系统层面，分两次查询，第一次查询的结果集中找出关联数据 id，然后根据 id 发起第二次请求得到关联数据。最后将获得到的数据进行字段拼装。")]),_._v(" "),v("p",[v("strong",[_._v("4）ER 分片")])]),_._v(" "),v("p",[_._v("关系型数据库中，如果可以先确定表之间的关联关系，并将那些存在关联关系的表记录存放在同一个分片上，那么就能较好的避免跨分片 join 问题。在 1:1 或 1:n 的情况下，通常按照主表的 ID 主键切分。如下图所示：")]),_._v(" "),v("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://tva1.sinaimg.cn/large/008eGmZEgy1gpkhlk6354j30uo0j249h.jpg",alt:"img"}}),_._v(" "),v("p",[_._v("这样一来，Data Node1上面的 order 订单表与 orderdetail订 单详情表就可以通过 orderId 进行局部的关联查询了，Data Node2 上也一样。")]),_._v(" "),v("h4",{attrs:{id:"_2-4-3-跨节点分页、排序、函数问题"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-3-跨节点分页、排序、函数问题"}},[_._v("#")]),_._v(" 2.4.3 跨节点分页、排序、函数问题")]),_._v(" "),v("p",[_._v("跨节点多库进行查询时，会出现 limit 分页、order by 排序等问题。分页需要按照指定字段进行排序，当排序字段就是分片字段时，通过分片规则就比较容易定位到指定的分片；当排序字段非分片字段时，就变得比较复杂了。需要先在不同的分片节点中将数据进行排序并返回，然后将不同分片返回的结果集进行汇总和再次排序，最终返回给用户。如图所示：")]),_._v(" "),v("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://tva1.sinaimg.cn/large/008eGmZEly1gpkhn911vvj30uy0lg7aa.jpg",alt:"img"}}),_._v(" "),v("p",[_._v("上图中只是取第一页的数据，对性能影响还不是很大。但是如果取得页数很大，情况则变得复杂很多，因为各分片节点中的数据可能是随机的，"),v("strong",[_._v("为了排序的准确性，需要将所有节点的前N页数据都排序好做合并，最后再进行整体的排序")]),_._v("，这样的操作时很耗费 CPU 和内存资源的，所以页数越大，系统的性能也会越差。")]),_._v(" "),v("p",[_._v("在使用 Max、Min、Sum、Count 之类的函数进行计算的时候，也 "),v("strong",[_._v("需要先在每个分片上执行相应的函数，然后将各个分片的结果集进行汇总和再次计算，最终将结果返回")]),_._v("。如图所示：")]),_._v(" "),v("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://tva1.sinaimg.cn/large/008eGmZEly1gpkhntngxmj30uo0mm49y.jpg",alt:"img"}}),_._v(" "),v("h4",{attrs:{id:"_2-4-4-全局主键避重问题"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-4-全局主键避重问题"}},[_._v("#")]),_._v(" 2.4.4 全局主键避重问题")]),_._v(" "),v("p",[_._v("在分库分表环境中，由于表中数据同时存在不同数据库中，主键值平时使用的自增长将无用武之地，某个分区数据库自生成的 ID 无法保证全局唯一。因此需要单独设计全局主键，以避免跨库主键重复问题。有一些常见的主键生成策略：")]),_._v(" "),v("p",[v("strong",[_._v("1）UUID")])]),_._v(" "),v("p",[v("strong",[_._v("2）Twitter 的 Snowflake 分布式自增ID算法")])]),_._v(" "),v("h4",{attrs:{id:"_2-4-5-数据的扩容、迁移问题"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-5-数据的扩容、迁移问题"}},[_._v("#")]),_._v(" 2.4.5 数据的扩容、迁移问题")]),_._v(" "),v("p",[_._v("当业务高速发展，面临性能和存储的瓶颈时，才会考虑分片设计，此时就不可避免的需要考虑历史数据迁移的问题。一般做法是先读出历史数据，然后按指定的分片规则再将数据写入到各个分片节点中。此外还需要根据当前的数据量和 QPS，以及业务发展的速度，进行容量规划，推算出大概需要多少分片（一般建议单个分片上的单表数据量不超过1000W）")]),_._v(" "),v("p",[_._v("如果采用数值范围分片，只需要添加节点就可以进行扩容了，不需要对分片数据迁移。如果采用的是数值取模分片，则考虑后期的扩容问题就相对比较麻烦。")]),_._v(" "),v("h2",{attrs:{id:"_3-什么时候考虑切分"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-什么时候考虑切分"}},[_._v("#")]),_._v(" 3. 什么时候考虑切分")]),_._v(" "),v("p",[_._v("下面讲述一下什么时候需要考虑做数据切分。")]),_._v(" "),v("h3",{attrs:{id:"_3-1-能不切分尽量不要切分"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-能不切分尽量不要切分"}},[_._v("#")]),_._v(" 3.1 能不切分尽量不要切分")]),_._v(" "),v("p",[_._v("并不是所有表都需要进行切分，主要还是看数据的增长速度。切分后会在某种程度上提升业务的复杂度，数据库除了承载数据的存储和查询外，协助业务更好的实现需求也是其重要工作之一。")]),_._v(" "),v("p",[_._v('不到万不得已不用轻易使用分库分表这个大招，避免"过度设计"和"过早优化"。分库分表之前，不要为分而分，先尽力去做力所能及的事情，例如：升级硬件、升级网络、读写分离、索引优化等等。当数据量达到单表的瓶颈时候，再考虑分库分表。')]),_._v(" "),v("h3",{attrs:{id:"_3-2-数据量过大-正常运维影响业务访问"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-数据量过大-正常运维影响业务访问"}},[_._v("#")]),_._v(" 3.2 数据量过大，正常运维影响业务访问")]),_._v(" "),v("p",[_._v("这里说的运维，指：")]),_._v(" "),v("p",[_._v("1）对数据库备份，如果单表太大，备份时需要大量的磁盘 IO 和网络 IO。例如 1T 的数据，网络传输占 50MB 时候，需要 20000 秒才能传输完毕，整个过程的风险都是比较高的。")]),_._v(" "),v("p",[_._v("2）对一个很大的表进行 DDL 修改时，MySQL 会锁住全表，这个时间会很长，这段时间业务不能访问此表，影响很大。如果使用 pt-online-schema-change，使用过程中会创建触发器和影子表，也需要很长的时间。在此操作过程中，都算为风险时间。将数据表拆分，总量减少，有助于降低这个风险。")]),_._v(" "),v("p",[_._v("3）大表会经常访问与更新，就更有可能出现锁等待。将数据切分，用空间换时间，变相降低访问压力。")]),_._v(" "),v("h3",{attrs:{id:"_3、随着业务发展-需要对某些字段垂直拆分"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3、随着业务发展-需要对某些字段垂直拆分"}},[_._v("#")]),_._v(" 3、随着业务发展，需要对某些字段垂直拆分")]),_._v(" "),v("p",[_._v("举个例子，假如项目一开始设计的用户表如下：")]),_._v(" "),v("div",{staticClass:"language-mysql extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[_._v("id                   bigint             #用户的ID\nname                 varchar            #用户的名字\nlast_login_time      datetime           #最近登录时间\npersonal_info        text               #私人信息\n.....                                   #其他信息字段\n")])])]),v("p",[_._v("在项目初始阶段，这种设计是满足简单的业务需求的，也方便快速迭代开发。而当业务快速发展时，用户量从 10w 激增到 10 亿，用户非常的活跃，每次登录会更新 last_login_name 字段，使得 user 表被不断 update，压力很大。而其他字段：id, name, personal_info 是不变的或很少更新的，此时在业务角度，就要将 last_login_time 拆分出去，新建一个 user_time 表。")]),_._v(" "),v("p",[_._v("personal_info 属性是更新和查询频率较低的，并且 text 字段占据了太多的空间。这时候，就要对此垂直拆分出 user_text 表了。")]),_._v(" "),v("h3",{attrs:{id:"_3-4-数据量快速增长"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-4-数据量快速增长"}},[_._v("#")]),_._v(" 3.4 数据量快速增长")]),_._v(" "),v("p",[_._v("随着业务的快速发展，单表中的数据量会持续增长，当性能接近瓶颈时，就需要考虑水平切分，做分库分表了。此时一定要选择合适的切分规则，提前预估好数据容量")]),_._v(" "),v("h3",{attrs:{id:"_3-5-安全性和可用性"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-5-安全性和可用性"}},[_._v("#")]),_._v(" 3.5 安全性和可用性")]),_._v(" "),v("p",[_._v("鸡蛋不要放在一个篮子里。在业务层面上垂直切分，将不相关的业务的数据库分隔，因为每个业务的数据量、访问量都不同，不能因为一个业务把数据库搞挂而牵连到其他业务。利用水平切分，当一个数据库出现问题时，不会影响到 100% 的用户，每个库只承担业务的一部分数据，这样整体的可用性就能提高。")]),_._v(" "),v("Vssue")],1)}),[],!1,null,null,null);t.default=s.exports}}]);
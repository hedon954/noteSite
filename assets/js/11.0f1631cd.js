(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{422:function(v,_,t){"use strict";t.r(_);var i=t(47),s=Object(i.a)({},(function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("h1",{attrs:{id:"分布式全局唯一-id"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#分布式全局唯一-id"}},[v._v("#")]),v._v(" 分布式全局唯一 ID")]),v._v(" "),t("h2",{attrs:{id:"一、数据库自增长序列或字段"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一、数据库自增长序列或字段"}},[v._v("#")]),v._v(" 一、数据库自增长序列或字段")]),v._v(" "),t("p",[v._v("最常见的方式。利用数据库，全数据库唯一。")]),v._v(" "),t("p",[t("strong",[v._v("优点：")])]),v._v(" "),t("p",[v._v("1）简单，代码方便，性能可以接受。")]),v._v(" "),t("p",[v._v("2）数字ID天然排序，对分页或者需要排序的结果很有帮助。")]),v._v(" "),t("p",[t("strong",[v._v("缺点：")])]),v._v(" "),t("p",[v._v("1）不同数据库语法和实现不同，数据库迁移的时候或多数据库版本支持的时候需要处理。")]),v._v(" "),t("p",[v._v("2）在单个数据库或读写分离或一主多从的情况下，只有一个主库可以生成。有单点故障的风险。")]),v._v(" "),t("p",[v._v("3）在性能达不到要求的情况下，比较难于扩展。")]),v._v(" "),t("p",[v._v("4）如果遇见多个系统需要合并或者涉及到数据迁移会相当痛苦。")]),v._v(" "),t("p",[v._v("5）分表分库的时候会有麻烦。")]),v._v(" "),t("p",[v._v("优化方案：")]),v._v(" "),t("p",[v._v("1）如果有多个 Master 库，则每 个Master 库设置的不同的起始值，步长和 Master 库数量相等。比如：Master1 生成的是 1，4，7，10，Master2 生成的是 2，5，8，11， Master3 生成的是 3，6，9，12。这样就可以有效生成集群中的唯一 ID，也可以大大降低 ID 生成数据库操作的负载。")]),v._v(" "),t("p",[t("img",{attrs:{src:"https://hedonspace.oss-cn-beijing.aliyuncs.com/img2/008eGmZEly1gpcbn7sxr3j30es09jmxp.jpg",alt:"img"}})]),v._v(" "),t("h2",{attrs:{id:"二、uuid"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#二、uuid"}},[v._v("#")]),v._v(" 二、UUID")]),v._v(" "),t("p",[v._v("UUID 是一种通用唯一识别码，而且本机生成不耗费资源，目的是用于分布式环境中唯一生成标志码，是由 32 个 16 进制数组成，")]),v._v(" "),t("p",[v._v("主要包括三部分：")]),v._v(" "),t("p",[v._v("(1)当前日期和时间，UUID 的第一个部分是当前日期和时间，如果你在生成一个UUID之后，过几秒又生成一个UUID，则第一个部分不同，其余相同。")]),v._v(" "),t("p",[v._v("(2)时钟序列")]),v._v(" "),t("p",[v._v("(3)全局唯一的 IEEE 机器识别号（如果有网卡，从网卡获得，没有网卡以其他方式获得）")]),v._v(" "),t("p",[v._v("例如：")]),v._v(" "),t("p",[v._v("550e8400-e29b-41d4-a716-446655440000")]),v._v(" "),t("p",[t("strong",[v._v("缺点：")])]),v._v(" "),t("p",[v._v("1）没有排序，无法保证趋势递增。")]),v._v(" "),t("p",[v._v("2）UUID 往往是使用字符串存储，查询的效率比较低（B+树）。")]),v._v(" "),t("p",[v._v("3）存储空间比较大，如果是海量数据库，就需要考虑存储量的问题。")]),v._v(" "),t("p",[v._v("4）传输数据量大")]),v._v(" "),t("p",[v._v("5）不可读。")]),v._v(" "),t("p",[t("strong",[v._v("优化方案：")])]),v._v(" "),t("p",[v._v("1）为了解决 UUID 不可读，可以使用 UUID to Int64 的方法")]),v._v(" "),t("p",[v._v("2）为了解决 UUID 无序，NHibernate 在其主键生成方式中提供了Comb 算法（combined guid/timestamp）。保留 GUID 的10个字节，用另 6 个字节表示 GUID 生成的时间（DateTime）。")]),v._v(" "),t("h2",{attrs:{id:"三、redis-生成-id"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#三、redis-生成-id"}},[v._v("#")]),v._v(" 三、Redis 生成 ID")]),v._v(" "),t("p",[v._v("当使用数据库来生成 ID 性能不够要求的时候，我们可以尝试使用 Redis 来生成ID。这主要依赖于 Redis 是单线程的，所以也可以用生成全局唯一的 ID。可以用 Redis 的原子操作 INCR 和 INCRBY 来实现。")]),v._v(" "),t("p",[v._v("可以使用 Redis 集群来解决单点故障和获取更高的吞吐量，如一个集群中有 5 台 Redis。可以初始化每台Redis的值分别是1,2,3,4,5，然后步长都是 5。")]),v._v(" "),t("p",[v._v("另外，比较适合使用 Redis 来生成每天从 0 开始的流水号。比如订单号=日期+当日自增长号。可以每天在Redis中生成一个Key，使用INCR 进行累加。")]),v._v(" "),t("p",[v._v("优点：")]),v._v(" "),t("p",[v._v("1）不依赖于数据库，灵活方便，且性能优于数据库。")]),v._v(" "),t("p",[v._v("2）数字ID天然排序，对分页或者需要排序的结果很有帮助。")]),v._v(" "),t("p",[v._v("缺点：")]),v._v(" "),t("p",[v._v("1）需要编码和配置的工作量比较大。")]),v._v(" "),t("h2",{attrs:{id:"四、twitter-的-snowflake-算法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#四、twitter-的-snowflake-算法"}},[v._v("#")]),v._v(" 四、Twitter 的 snowflake 算法")]),v._v(" "),t("p",[v._v("snowflake 是 Twitter 开源的分布式 ID 生成算法，结果是一个 long 型的 ID。")]),v._v(" "),t("p",[v._v("其核心思想是：使用 41bit 作为毫秒数，10bit 作为机器的 ID（5 个 bit 是数据中心，5个 bit 的机器ID），12bit 作为毫秒内的流水号（意味着每个节点在每毫秒可以产生 4096 个 ID），最后还有一个符号位，永远是0。")]),v._v(" "),t("p",[t("img",{attrs:{src:"https://hedonspace.oss-cn-beijing.aliyuncs.com/img2/008eGmZEgy1gp417xwfnxj30ft03jq35.jpg",alt:"img"}})]),v._v(" "),t("p",[v._v("第一个部分，是 1 个 bit：0。")]),v._v(" "),t("blockquote",[t("p",[v._v("因为二进制里第一个 bit 为如果是 1，那么都是负数，但是我们生成的 id 都是正数，所以第一个 bit 统一都是 0。")])]),v._v(" "),t("p",[v._v("第二个部分是 41 个 bit：表示的是时间戳，单位是毫秒。")]),v._v(" "),t("blockquote",[t("p",[v._v("41 bit 可以表示的数字多达 2^41 - 1，也就是可以标识 2 ^ 41 - 1 个毫秒值，换算成年就是表示 69 年的时间。")])]),v._v(" "),t("p",[v._v("第三个部分是 5 个 bit：表示的是机房 id。")]),v._v(" "),t("p",[v._v("第四个部分是 5 个 bit：表示的是工作机器 id，1 1001。")]),v._v(" "),t("blockquote",[t("p",[v._v("三四部分合起来共10位，也就是说这个服务最多可以部署在 2^10 台机器上，也就是 1024 台机器。")]),v._v(" "),t("p",[v._v("但是 10 bit 里 5 个 bit 代表机房 id，5 个 bit 代表机器 id。意思就是最多代表 2 ^ 5 个机房（32 个机房），每个机房里可以代表 2 ^ 5 个机器（32 台机器），也可以根据自己公司的实际情况确定。")])]),v._v(" "),t("p",[v._v("第五个部分是 12 个 bit：表示的序号，就是某个机房某台机器上这一毫秒内同时生成的 id 的序号，0000 00000000。")]),v._v(" "),t("blockquote",[t("p",[v._v("12 bit 可以代表的最大正整数是 2 ^ 12 - 1 = 4095，也就是说可以用这个 12 bit 代表的数字来区分同一个毫秒内的 4095 个不同的 id。")])]),v._v(" "),t("p",[t("strong",[v._v("优点：")])]),v._v(" "),t("p",[v._v("1）不依赖于数据库，灵活方便，且性能优于数据库。")]),v._v(" "),t("p",[v._v("2）ID 按照时间在单机上是递增的。")]),v._v(" "),t("p",[v._v("缺点：")]),v._v(" "),t("p",[v._v("1）如果分布式环境每台机器上的时钟不完全同步，可能产生 ID 乱序或者冲突。")]),v._v(" "),t("p",[v._v("2）依赖与系统时间的一致性，如果系统时间被回调，或者改变，可能会造成 id 冲突或者重复。")]),v._v(" "),t("Vssue")],1)}),[],!1,null,null,null);_.default=s.exports}}]);
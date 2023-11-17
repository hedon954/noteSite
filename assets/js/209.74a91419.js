(window.webpackJsonp=window.webpackJsonp||[]).push([[209],{619:function(t,v,_){"use strict";_.r(v);var a=_(47),s=Object(a.a)({},(function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"一、数据库架构"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#一、数据库架构"}},[t._v("#")]),t._v(" 一、数据库架构")]),t._v(" "),_("p",[_("font",{attrs:{color:"pink"}},[t._v("如何设计一个关系型数据库？")])],1),t._v(" "),_("img",{staticStyle:{zoom:"33%"},attrs:{src:"https://hedonspace.oss-cn-beijing.aliyuncs.com/img2/008eGmZEgy1gmjmiemxvgj30uq0gudk0.jpg",alt:"image-20210111120432782"}}),t._v(" "),_("h2",{attrs:{id:"_1-存储-文件系统"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-存储-文件系统"}},[t._v("#")]),t._v(" 1. 存储（文件系统）")]),t._v(" "),_("p",[t._v("设计一个关系型数据库跟设计一个软件其实是同一个道理，而数据库的主要任务是存储数据，那么肯定就需要一个类似于文件系统的存储模块。而要使数据库支持各种数据操作，同时将存储逻辑关系转为物理关系，并提供数据管理问题追踪，还需要许多的程序实例。")]),t._v(" "),_("h2",{attrs:{id:"_2-程序实例"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-程序实例"}},[t._v("#")]),t._v(" 2. 程序实例")]),t._v(" "),_("h3",{attrs:{id:"存储管理"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#存储管理"}},[t._v("#")]),t._v(" 存储管理")]),t._v(" "),_("p",[t._v("首先，我们需要对数据的格式以及文件的风格进行统一管理，即把物理数据通过逻辑的形式给组织和表示起来，于是便涉及到了我们程序的存储管理模块。")]),t._v(" "),_("div",{staticClass:"custom-block tip"},[_("p",{staticClass:"custom-block-title"},[t._v("补充")]),t._v(" "),_("p",[t._v("考虑磁盘 IO 的时间效率，一次单条数据和一次多条数据的差别。")]),t._v(" "),_("p",[t._v("实际上数据库是逻辑存储单位以块或者页来存储数据，一块或者一页包含多行数据，多个块从磁盘加载到内存中。")])]),t._v(" "),_("h3",{attrs:{id:"缓存机制"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#缓存机制"}},[t._v("#")]),t._v(" 缓存机制")]),t._v(" "),_("p",[t._v("其次，为了追求性能，我们需要引入缓存机制，将取出来的数据块存放在缓存里，下次需要的时候直接从内存返回，不用发生 IO，使得程序的性能更高。")]),t._v(" "),_("div",{staticClass:"custom-block tip"},[_("p",{staticClass:"custom-block-title"},[t._v("补充")]),t._v(" "),_("p",[t._v("缓存之所以有效，主要是因为程序运行时对内存或者外存的访问呈现局部性特征，局部性特征为 "),_("strong",[t._v("空间局部性和时间局部性")]),t._v(" 两方面。时间局部性是指刚刚访问过的数据近期可能再次被访问，空间局部性是指，某个位置被访问后，其相邻的位置的数据很可能被访问到。而 MySQL 的缓存机制就是把刚刚访问的数据（时间局部性）以及未来即将访问到的数据（空间局部性）保存到缓存中，甚至是高速缓存中，从而提高 IO 效率")]),t._v(" "),_("p",[t._v("按照缓存读写功能的不同，MySQL 将缓存分为 Buffer 缓存和 Cache 缓存。")]),t._v(" "),_("p",[_("strong",[t._v("Buffer 缓存")])]),t._v(" "),_("p",[t._v("由于 "),_("strong",[t._v("硬盘的写入速度过慢")]),t._v("，或者频繁的 IO，对于硬盘来说是极大的效率浪费。那么可以等到缓存中储存一定量的数据之后，一次性的写入到硬盘中。Buffer 缓存 "),_("strong",[t._v("主要用于写数据，提升 IO 性能")]),t._v("。")]),t._v(" "),_("p",[_("strong",[t._v("Cache 缓存")])]),t._v(" "),_("p",[t._v("Cache 缓存一般是一些访问频繁但是变更较少的数据，如果 Cache 缓存已经存储满，"),_("strong",[t._v("则启用 LRU 算法，进行数据淘汰")]),t._v("。淘汰掉最远未使用的数据，从而开辟新的存储空间。不过对于特大型的网站，依靠这种策略很难缓解高频率的读请求，一般会把访问非常频繁的数据静态化，直接由 nginx 返还给用户。程序和数据库 IO 设备交互的越少，则效率越高。")]),t._v(" "),_("p",[_("strong",[t._v("缓存更新策略")])]),t._v(" "),_("p",[t._v("在 MySQL 中，可以设置 Query Cache 所使用的总内存，MySQL 会把默认可以进行缓存的 SQL 语句的结果集进行缓存，一旦内存塞满后，就会剔除老的 Query Cache 对象。同时为了保证 Query Cache 中的内容与是实际数据绝对一致，"),_("strong",[t._v("当表中的数据有任何变化，包括新增、修改、删除等，都会使所有引用到该表的 SQL 的 Query Cache 失效")]),t._v("。")]),t._v(" "),_("p",[_("strong",[t._v("一般把缓存更新策略归纳为以下几种：")])]),t._v(" "),_("ol",[_("li",[t._v("FIFO："),_("strong",[t._v("最先进入")]),t._v(" 缓存得数据在缓存空间不够情况下（超出最大元素限制时）会被首先清理出去。")]),t._v(" "),_("li",[t._v("LFU："),_("strong",[t._v("最少使用")]),t._v(" 的元素会被清理掉。这要求缓存的元素有 hit 属性，在缓存空间不够的情况下，hit 值最小的将会被请出缓存。")]),t._v(" "),_("li",[t._v("LRU："),_("strong",[t._v("最近最少使用")]),t._v(" 的元素被清理。缓存的元素有一个时间戳，当缓存容量满了，而又需要腾出地方缓存新元素时，现有缓存元素中时间戳离当前时间最远的元素将被清出缓存。")])]),t._v(" "),_("p",[_("strong",[t._v("MySQL 一般使用 FIFO 策略队列清除。")])])]),t._v(" "),_("h3",{attrs:{id:"sql-解析"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#sql-解析"}},[t._v("#")]),t._v(" SQL 解析")]),t._v(" "),_("p",[t._v("同时，我们还要提供指令给外界来操作我们的数据库，也就是我们经常说的 SQL 语句。所以我们还需要一个 SQL 解析模块，将 SQL 语句解析为机器可识别的指令来操作我们的数据库。")]),t._v(" "),_("p",[t._v("为了提高效率，可以将编译好的 SQL 语句可以放置在缓存中，缓存不宜过大，还有缓存过期设置。")]),t._v(" "),_("h3",{attrs:{id:"日志管理"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#日志管理"}},[t._v("#")]),t._v(" 日志管理")]),t._v(" "),_("p",[t._v("另外，为了记录数据库的操作记录，以便进行数据库的恢复等操作，我们还需要引入日志管理模块。")]),t._v(" "),_("h3",{attrs:{id:"权限划分"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#权限划分"}},[t._v("#")]),t._v(" 权限划分")]),t._v(" "),_("p",[t._v("跟一般的软件一样，数据是具有隐私性的，不同的数据面向不同的用户，所以我们还需要引入权限划分，更好地保障数据的隐私性和安全性。")]),t._v(" "),_("h3",{attrs:{id:"容灾机制"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#容灾机制"}},[t._v("#")]),t._v(" 容灾机制")]),t._v(" "),_("p",[t._v("除了考虑正常的功能，我们还需要考虑到异常情况。因此我们还需要引入容灾机制，提高数据库的鲁棒性和健壮性。")]),t._v(" "),_("h3",{attrs:{id:"索引模块"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#索引模块"}},[t._v("#")]),t._v(" 索引模块")]),t._v(" "),_("p",[t._v("为了进一步提升查询数据库的数据，我们还需要引入非常重要的索引模块。")]),t._v(" "),_("h3",{attrs:{id:"锁模块"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#锁模块"}},[t._v("#")]),t._v(" 锁模块")]),t._v(" "),_("p",[t._v("进一步，如果我们考虑高并发情景的话，为了支持多用户并发操作数据库，我们还需要引入非常重要的锁模块，对临界资源进行加锁，确保数据操作过程中的一致性。")]),t._v(" "),_("Vssue")],1)}),[],!1,null,null,null);v.default=s.exports}}]);
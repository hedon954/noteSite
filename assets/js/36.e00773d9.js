(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{443:function(s,a,t){"use strict";t.r(a);var n=t(47),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"二、redis-数据类型"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#二、redis-数据类型"}},[s._v("#")]),s._v(" 二、Redis 数据类型")]),s._v(" "),t("h2",{attrs:{id:"_1-redis-基本数据类型"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-redis-基本数据类型"}},[s._v("#")]),s._v(" 1. Redis 基本数据类型")]),s._v(" "),t("p",[s._v("基本数据结构包含：字符串（strings）、 散列（hashes）、 列表（lists）、 集合（sets）、 有序集合（sorted sets）五种。")]),s._v(" "),t("h3",{attrs:{id:"字符串-strings"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#字符串-strings"}},[s._v("#")]),s._v(" 字符串（strings）")]),s._v(" "),t("h5",{attrs:{id:"_1-基本说明"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-基本说明"}},[s._v("#")]),s._v(" 1）基本说明")]),s._v(" "),t("p",[s._v("字符串是Redis最简单的储存类型，它存储的值可以是"),t("code",[s._v("字符串")]),s._v("、"),t("code",[s._v("整数")]),s._v("或者"),t("code",[s._v("浮点数")]),s._v("，对整个字符串或者字符串的其中一部分执行操作；对整数或者浮点数执行自增（increment）或者自减（decrement）操作。")]),s._v(" "),t("p",[s._v("Redis 的字符串是一个由字节组成的序列，跟 Java 里面的 "),t("strong",[s._v("ArrayList")]),s._v(" 有点类似，"),t("strong",[s._v("采用预分配冗余空间的方式来减少内存的频繁分配")]),s._v("，如图中所示，内部为当前字符串实际分配的空间 "),t("code",[s._v("capacity")]),s._v(" 一般要高于实际字符串长度 len。当字符串长度小于 1M 时，扩容都是加倍现有的空间，如果超过 1M，扩容时一次只会多扩 1M 的空间。"),t("strong",[s._v("需要注意的是字符串最大长度为 512M")]),s._v("。")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://tva1.sinaimg.cn/large/008eGmZEly1gphaysn7lbj30fw04pt8m.jpg",alt:"img"}})]),s._v(" "),t("h5",{attrs:{id:"_2-应用场景"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-应用场景"}},[s._v("#")]),s._v(" 2）应用场景")]),s._v(" "),t("p",[s._v("字符串类型在工作中使用广泛，主要用于"),t("strong",[s._v("缓存数据，提高查询性能")]),s._v("。比如存储登录用户信息、电商中存储商品信息、可以做计数器（想知道什么时候封锁一个IP地址（访问超过几次））等等。")]),s._v(" "),t("h5",{attrs:{id:"_3-操作指令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-操作指令"}},[s._v("#")]),s._v(" 3）操作指令")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 添加一条String类型数据")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" key value\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 获取一条String类型数据")]),s._v("\nget key\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 添加多条String类型数据")]),s._v("\nmset key1 value1 key2 value2\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 获取多条String类型数据")]),s._v("\nmget key1 key2\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 自增（+1）")]),s._v("\nincr key\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 按照步长（step）自增")]),s._v("\nincrby key step\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 自减（-1）")]),s._v("\ndecr key\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 按照步长（step）递减")]),s._v("\ndecrby key step\n")])])]),t("h5",{attrs:{id:"_4-实操"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-实操"}},[s._v("#")]),s._v(" 4）实操")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 插入字符串  ")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("set username zhangsan  \n"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"OK"')]),s._v("  \n​  \n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 获取字符串  ")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("get username  \n"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"zhangsan"')]),s._v("  \n​  \n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 插入多个字符串  ")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("mset age "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("18")]),s._v(" address bj  \n"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"OK"')]),s._v("  \n​  \n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 获取多个字符串  ")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("mget username age  \n "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"zhangsan"')]),s._v("  \n "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"18"')]),s._v("  \n​  \n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 自增  ")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("incr num  \n"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"1"')]),s._v("  \n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("incr num  \n"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"2"')]),s._v("  \n​  \n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 自减  ")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("decr num  \n"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"1"')]),s._v("  \n​  \n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 指定步长自增  ")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("incrby num "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("  \n"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"3"')]),s._v("  \n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("incrby num "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("  \n"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"5"')]),s._v("  \n​  \n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 指定步长自减  ")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("decrby num "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("  \n"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"2"')]),s._v("  \n​  \n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 删除  ")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("del num  \n"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"1"')]),s._v("\n")])])]),t("h3",{attrs:{id:"散列-hashes"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#散列-hashes"}},[s._v("#")]),s._v(" 散列（hashes）")]),s._v(" "),t("h5",{attrs:{id:"_1-基本说明-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-基本说明-2"}},[s._v("#")]),s._v(" 1）基本说明")]),s._v(" "),t("p",[s._v("散列相当于 Java 中的 HashMap，内部是无序字典。实现原理跟 "),t("code",[s._v("HashMap")]),s._v(" 一致。一个哈希表有多个节点，每个节点保存一个键值对。")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://tva1.sinaimg.cn/large/008eGmZEly1gphb2sv4nbj30g307pa9z.jpg",alt:"img"}})]),s._v(" "),t("p",[s._v("与 Java 中的 HashMap 不同的是，rehash 的方式不一样，因为 Java 的 HashMap 在字典很大时，rehash 是个耗时的操作，需要一次性全部 rehash。Redis 为了高性能，不能堵塞服务，"),t("strong",[s._v("所以采用了渐进式 rehash 策略")]),s._v("。")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://tva1.sinaimg.cn/large/008eGmZEly1gphb2gphyhj30ug08d0t1.jpg",alt:"img"}})]),s._v(" "),t("p",[t("strong",[s._v("渐进式 rehash 会在 rehash 的同时，保留新旧两个 hash 结构，查询时会同时查询两个 hash 结构，然后在后续的定时任务中以及 hash 操作指令中，循序渐进地将旧 hash 的内容一点点迁移到新的 hash 结构中。当搬迁完成了，就会使用新的hash结构取而代之。")])]),s._v(" "),t("p",[t("strong",[s._v("当 hash 移除了最后一个元素之后，该数据结构自动被删除，内存被回收。")])]),s._v(" "),t("h5",{attrs:{id:"_2-应用场景-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-应用场景-2"}},[s._v("#")]),s._v(" 2）应用场景")]),s._v(" "),t("p",[s._v("Hash 也可以同于对象存储，比如存储用户信息，与字符串不一样的是，字符串是需要将对象进行序列化（比如 JSON 序列化）之后才能保存，而 Hash 则可以讲用户对象的每个字段单独存储，这样就能节省序列化和反序列的时间。如下：")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://tva1.sinaimg.cn/large/008eGmZEly1gphb4gst7jg30ci04gtb5.gif",alt:"img"}})]),s._v(" "),t("p",[s._v("此外还可以保存用户的购买记录，比如 key 为用户 id，field 为商品 id，value 为商品数量。同样还可以用于购物车数据的存储，比如 key 为用户 id，field 为商品 id，value 为购买数量等等。")]),s._v(" "),t("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://tva1.sinaimg.cn/large/008eGmZEgy1gphb50l4c5j30u00xvjys.jpg",alt:"img"}}),s._v(" "),t("h5",{attrs:{id:"_3-操作指令-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-操作指令-2"}},[s._v("#")]),s._v(" 3）操作指令")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 设置属性")]),s._v("\nhset keyname field1 value1 field2 value2\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 获取某个属性值")]),s._v("\nhget keyname field\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 获取所有属性值")]),s._v("\nhgetall keyname\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 删除某个属性")]),s._v("\nhdel keyname field\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 获取属性个数")]),s._v("\nhlen keyname\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 按照步长自增/自减某个属性（该属性必须是数字）")]),s._v("\nhincrby keyname field step\n")])])]),t("h5",{attrs:{id:"_4-实操-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-实操-2"}},[s._v("#")]),s._v(" 4）实操")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 插入 hash 数据")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("hset userInfo username zhangsan age "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("18")]),s._v(" address bj\n"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"3"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 获取 hash 单条 field 数据")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("hget userInfo username\n"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"zhangsan"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("hget userInfo age\n"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"18"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 获取 hash 多个 field 数据")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("hmget userInfo username age\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"zhangsan"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"18"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 获取 hash 所有 field 数据")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("hgetall userInfo\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"username"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"zhangsan"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"age"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"18"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"address"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"bj"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 获取 hash 的 field 个数")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("hlen userInfo\n"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"3"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 自增 hash 的某个 field")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("hincrby userInfo age "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"20"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("hincrby userInfo age "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"22"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 自减 hash 的某个 field（通过自增负步长来实现）")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("hincrby userInfo age -2\n"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"20"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 删除 hash 的某个 field")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("hdel userInfo age\n"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"1"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 删除 hash 所有数据")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("del userInfo\n"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"1"')]),s._v("\n")])])]),t("h3",{attrs:{id:"列表-lists"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#列表-lists"}},[s._v("#")]),s._v(" 列表（lists）")]),s._v(" "),t("h5",{attrs:{id:"_1-基本说明-3"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-基本说明-3"}},[s._v("#")]),s._v(" 1）基本说明")]),s._v(" "),t("p",[s._v("Redis 中的 lists 相当于 Java 中的 "),t("code",[s._v("LinkedList")]),s._v("，实现原理是一个双向链表（其底层是一个快速列表），即可以支持反向查找和遍历，更方便操作。插入和删除操作非常快，时间复杂度为 O(1)，但是索引定位很慢，时间复杂度为 O(n)。")]),s._v(" "),t("h5",{attrs:{id:"_2-应用场景-3"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-应用场景-3"}},[s._v("#")]),s._v(" 2）应用场景")]),s._v(" "),t("p",[s._v("lists 的应用场景非常多，可以利用它轻松实现热销榜。")]),s._v(" "),t("p",[s._v("可以实现工作队列（利用 lists 的 push 操作，将任务存在 lists 中，然后工作线程再用 pop 操作将任务取出进行执行 ）。")]),s._v(" "),t("p",[s._v("可以实现最新列表，比如最新评论等。")]),s._v(" "),t("h5",{attrs:{id:"_3-操作指令-3"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-操作指令-3"}},[s._v("#")]),s._v(" 3）操作指令")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 左进")]),s._v("\nlpush key value1 value2 value3"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 左出")]),s._v("\nlpop key\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 右进")]),s._v("\nrpush key value1 value2 value3"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 右出")]),s._v("\nrpop key\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 从左往右读取 start和end是下标")]),s._v("\nlrange key start end\n")])])]),t("h5",{attrs:{id:"_4-实操-3"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-实操-3"}},[s._v("#")]),s._v(" 4）实操")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 从 list 左边依次插入")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("lpush student zhangsan lisi wangwu\n"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"3"')]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 从 list 右边插入")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("rpush student tianqi\n"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"4"')]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 从 list 左边弹出一个")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("lpop liangshan\n"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"wangwu"')]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 从 list 右边弹出一个")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("rpop liangshan\n"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"tianqi"')]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 获取 list 下标 0 ~ 1 的数据(左闭右闭)")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("lrange liangshan "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"lisi"')]),s._v("\n "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"zhangsan"')]),s._v("\n")])])]),t("h5",{attrs:{id:"_5-注意-blpop-阻塞版获取"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-注意-blpop-阻塞版获取"}},[s._v("#")]),s._v(" 5）注意：blpop 阻塞版获取")]),s._v(" "),t("p",[s._v("为什么要阻塞版本的pop呢，主要"),t("strong",[s._v("是为了避免轮询。")])]),s._v(" "),t("p",[s._v("举个简单的例子如果我们用 list 来实现一个工作队列。执行任务的 thread 可以调用阻塞版本的 pop 去获取任务这样就可以避免轮询去检查是否有任务存在。当任务来时候工作线程可以立即返回，也可以避免轮询带来的延迟。")]),s._v(" "),t("h3",{attrs:{id:"集合-sets"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#集合-sets"}},[s._v("#")]),s._v(" 集合（sets）")]),s._v(" "),t("h5",{attrs:{id:"_1-基本说明-4"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-基本说明-4"}},[s._v("#")]),s._v(" 1）基本说明")]),s._v(" "),t("p",[s._v("集合类似 Java 中的 "),t("code",[s._v("HashSet")]),s._v("，内部实现是一个 value 永远为 null 的 HashMap，实际就是通过计算 hash 的方式来快速排重的，这\n也是 set 能提供判断一个成员是否在集合内的原因。")]),s._v(" "),t("h5",{attrs:{id:"_2-应用场景-4"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-应用场景-4"}},[s._v("#")]),s._v(" 2）应用场景")]),s._v(" "),t("p",[s._v("redis 的 sets 类型是使用哈希表构造的，因此复杂度是 0(1)。它支持集合内的增删改查，并且支持多个集合间的交集、并集、\n差集操作。可以利用这些集合操作，解决程序开发过程当中很多数据集合间的问题。比如计算网站独立 ip，用户画像中的用\n户标签，共同好友等功能。")]),s._v(" "),t("h5",{attrs:{id:"_3-操作指令-4"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-操作指令-4"}},[s._v("#")]),s._v(" 3）操作指令")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#添加内容")]),s._v("\nsadd key value1 value2\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#查询key里所有的值")]),s._v("\nsmembers key\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#移除key里面的某个value")]),s._v("\nsrem\nkey value\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#随机移除某个value")]),s._v("\nspop key\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#返回两个set的并集")]),s._v("\nsunion key1 key2\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#返回key1踢出交集的那部分(差集)")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sdiff")]),s._v(" key1 key2\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#跟siffer相反，返回交集")]),s._v("\nsinter key1 key2\n")])])]),t("h3",{attrs:{id:"有序集合-sorted-sets"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#有序集合-sorted-sets"}},[s._v("#")]),s._v(" 有序集合（sorted sets）")]),s._v(" "),t("h5",{attrs:{id:"_1-基本说明-5"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-基本说明-5"}},[s._v("#")]),s._v(" 1）基本说明")]),s._v(" "),t("p",[s._v("sorted sets 是 Redis 类似于 "),t("code",[s._v("SortedSet")]),s._v(" 和 "),t("code",[s._v("HashMap")]),s._v(" 的结合体，一方面它是一个 set，保证了内部 value 的"),t("strong",[s._v("唯一性")]),s._v("，另一方面它可以给每个 value 赋予一个 score，代表这个 value 的"),t("strong",[s._v("排序权重")]),s._v("。")]),s._v(" "),t("p",[s._v("内部使用 HashMap 和跳跃表（SkipList）来保证数据的存储和有序，HashMap 里放的是成员到 score 的映射，而跳跃表里存放的是所有的成员，排序依据是 HashMap 里存的 score，使用"),t("strong",[s._v("跳跃表")]),s._v("的结构可以获得比较高的查找效率，并且在实现上比较简单。")]),s._v(" "),t("p",[s._v("sorted sets 中最后一个 value 被移除后，数据结构自动删除，内存被回收。")]),s._v(" "),t("p",[t("strong",[s._v("跳表：")])]),s._v(" "),t("p",[t("img",{attrs:{src:"https://tva1.sinaimg.cn/large/008eGmZEgy1gphbh2tslvj31ku0qidvt.jpg",alt:"image-20210412221232375"}})]),s._v(" "),t("h5",{attrs:{id:"_2-应用场景-5"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-应用场景-5"}},[s._v("#")]),s._v(" 2）应用场景")]),s._v(" "),t("p",[s._v("主要应用于根据某个权重进行排序的队列的场景，比如游戏积分排行榜，设置优先级的任务列表，学生成绩表等。")]),s._v(" "),t("h5",{attrs:{id:"_3-操作指令-5"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-操作指令-5"}},[s._v("#")]),s._v(" 3）操作指令")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 添加元素")]),s._v("\nzadd key score value "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("score value"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("."),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 获取集合的值并按照score从小到大排列， 最小的是最上面")]),s._v("\nzrange key start end \n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 返回有序集 key 中，所有 score 值介于 min 和 max 之间(包括等于 min 或 max )的成员。有序集成员按 score 值递增(从小到大)次序排列, 最小的是最上面")]),s._v("\nzrangeByScore key score_min score_max \n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 删除")]),s._v("\nzrem key value \n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 获取key的集合有多少元素")]),s._v("\nzcard key\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 统计分数从小到大有多少元素 （闭区间）")]),s._v("\nzcount key score_min score_max \n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 获取value所在位置（从小到大排序，最小的是0）")]),s._v("\nzrank key value \n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 获取value所在的位置（从大到小排列， 最大的是0）")]),s._v("\nzrevrank key value\n")])])]),t("h5",{attrs:{id:"_4-实操-4"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-实操-4"}},[s._v("#")]),s._v(" 4）实操")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 插入多条数据和分数并去重及排序")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("zadd rank "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("66")]),s._v(" zhangsan "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("88")]),s._v(" lisi "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("77")]),s._v(" wangwu "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("99")]),s._v(" zhaoliu\n"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"4"')]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 插入多条数据及分数并去重及排序")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("zadd rank "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("66")]),s._v(" zhangsan "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("88")]),s._v(" lisi "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("77")]),s._v(" wangwu "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("99")]),s._v(" zhaoliu\n"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"0"')]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 获取下标 0 ~ 3 的数据(左闭右闭)")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("zrange rank "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("\n "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"zhangsan"')]),s._v("\n "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"wangwu"')]),s._v("\n "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"lisi"')]),s._v("\n "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"zhaoliu"')]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 获取分数在 77 ~ 99 之间的数据(左闭右闭)")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("zrangeByScore rank "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("77")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("99")]),s._v("\n "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"wangwu"')]),s._v("\n "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"lisi"')]),s._v("\n "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"zhaoliu"')]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 删除一条数据")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("zrem rank zhaoliu\n"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"1"')]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查询元素的个数")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("zcard rank\n"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"3"')]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 统计分数在 77 ~ 88 之间的数据(左闭右闭)")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("zcount rank "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("77")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("88")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"2"')]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 获取指定元素的下标")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("zrank rank zhangsan\n"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"0"')]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 获取指定元素的下标并反转")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("zrevrank rank zhangsan\n"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"2"')]),s._v("\n")])])]),t("Vssue")],1)}),[],!1,null,null,null);a.default=e.exports}}]);
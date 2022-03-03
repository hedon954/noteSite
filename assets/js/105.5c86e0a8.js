(window.webpackJsonp=window.webpackJsonp||[]).push([[105],{516:function(s,t,e){"use strict";e.r(t);var a=e(47),n=Object(a.a)({},(function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"六、redis-性能优化"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#六、redis-性能优化"}},[s._v("#")]),s._v(" 六、Redis 性能优化")]),s._v(" "),e("h2",{attrs:{id:"_1-客户端优化"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-客户端优化"}},[s._v("#")]),s._v(" 1. 客户端优化")]),s._v(" "),e("ul",[e("li",[s._v("Pipeline 批量操作")]),s._v(" "),e("li",[s._v("连接池的应用")])]),s._v(" "),e("h2",{attrs:{id:"_2-设置合理的淘汰机制"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-设置合理的淘汰机制"}},[s._v("#")]),s._v(" 2. 设置合理的淘汰机制")]),s._v(" "),e("ul",[e("li",[s._v("设置合理的内存大小")]),s._v(" "),e("li",[s._v("设置合理的过期时间")]),s._v(" "),e("li",[s._v("选择合适的淘汰策略")])]),s._v(" "),e("h2",{attrs:{id:"_3-key-与-value-的优化"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-key-与-value-的优化"}},[s._v("#")]),s._v(" 3. key 与 value 的优化")]),s._v(" "),e("h3",{attrs:{id:"_3-1-key-设计"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-key-设计"}},[s._v("#")]),s._v(" 3.1 key 设计")]),s._v(" "),e("ul",[e("li",[s._v("可读性和可管理性，以业务名（或数据库名）为前缀（防止 key 冲突），用冒号分割，比如 "),e("code",[s._v("业务名:表名:id")])]),s._v(" "),e("li",[s._v("简洁性，保证语义的前提下，控制 key 的长度，当 key 较多时，内存占用也不容忽视")]),s._v(" "),e("li",[s._v("不要包含特殊字符，比如：包含空格、换行、单双引号以及其他转义字符")])]),s._v(" "),e("h3",{attrs:{id:"_3-2-value-设计"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-value-设计"}},[s._v("#")]),s._v(" 3.2 value 设计")]),s._v(" "),e("ul",[e("li",[s._v("拒绝 Big Key（防止网卡流量、慢查询），string 类型的 value 控制在 10KB 以内，hash、list、set、zset 元素个数不要超过 5000")]),s._v(" "),e("li",[s._v("选择合适的数据类型")]),s._v(" "),e("li",[s._v("控制 key 的生命周期，Redis 不是垃圾桶，一定要设置过期时间")])]),s._v(" "),e("h3",{attrs:{id:"_3-3-发现-big-key"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-发现-big-key"}},[s._v("#")]),s._v(" 3.3 发现 Big Key")]),s._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[s._v("Big Key")]),s._v(" "),e("p",[s._v("一般情况下，当 key 的值大于 10KB 时就可以算是 Big Key 了。如下场景都有可能遇到 Big Key：")]),s._v(" "),e("ul",[e("li",[s._v("粉丝列表")]),s._v(" "),e("li",[s._v("统计数据，比如 PV 或者 UV 统计")]),s._v(" "),e("li",[s._v("使用不当的数据缓存，比如通过 string 保存序列化后的用户数据等")])])]),s._v(" "),e("p",[e("strong",[s._v("常规操作：通过 redis-cli --bigkeys 统计出比较大的 key")])]),s._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[s._v("redis-cli --bigkeys\n")])])]),e("p",[s._v("输出：")]),s._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("# Scanning the entire keyspace to find biggest keys as well as\n# average sizes per key type.  You can use -i 0.1 to sleep 0.1 sec\n# per 100 SCAN commands (not usually needed).\n\n[00.00%] Biggest string found so far '\"username\"' with 5 bytes\n\n-------- summary -------\n\nSampled 1 keys in the keyspace!\nTotal key length in bytes is 8 (avg len 8.00)\n\nBiggest string found '\"username\"' has 5 bytes\n\n1 strings with 5 bytes (100.00% of keys, avg size 5.00)\n0 lists with 0 items (00.00% of keys, avg size 0.00)\n0 hashs with 0 fields (00.00% of keys, avg size 0.00)\n0 streams with 0 entries (00.00% of keys, avg size 0.00)\n0 sets with 0 members (00.00% of keys, avg size 0.00)\n0 zsets with 0 members (00.00% of keys, avg size 0.00)\n")])])]),e("p",[e("strong",[s._v("精确操作：通过 MEMORY USAGE key 查询")])]),s._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1:637"),e("span",{pre:!0,attrs:{class:"token operator"}},[e("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("9")]),s._v(">")]),s._v(" MEMORY USAGE username\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("integer"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("63")]),s._v("\n")])])]),e("p",[s._v("命令 "),e("code",[s._v("MEMORY USAGE")]),s._v(" 给出一个 key 和它值在 RAM 中所占的字节数，返回的结果是 key 的值以及为管理该 key 分配的内存总字节数。")]),s._v(" "),e("p",[s._v("所以查询 Big Key 的手段就可以使用脚本进行查询，大概思路就是使用 scan 游标查询 key，然后使用 "),e("code",[s._v("MEMORY USAGE key")]),s._v(" 获取这个 key 与 value 的字节数，这样就能很方便的得出结论进行优化。")]),s._v(" "),e("h3",{attrs:{id:"_3-4-删除-big-key"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-4-删除-big-key"}},[s._v("#")]),s._v(" 3.4 删除 Big Key")]),s._v(" "),e("p",[e("strong",[s._v("Redis 4.0 新特性 —— Lazy Free")])]),s._v(" "),e("ul",[e("li",[e("p",[s._v("当删除 key 的时候，Redis 提供异步延时释放 key 内存的功能，把 key 的是否操作放在 BIO（Background IO）单独的子线程处理中，减少删除 Big Key 对 Redis 主线程的阻塞。有效地避免删除 Big Key 带来的性能和可用性的问题。因此删除 Big Key 时使用 "),e("code",[s._v("unlink")]),s._v(" 操作。")]),s._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("127.0.0.1:6379> unlink key1\n(integer) 1\n")])])])])]),s._v(" "),e("p",[e("strong",[s._v("Redis 4.0 之前")])]),s._v(" "),e("ul",[e("li",[s._v("使用 hscan、ltrim、sscan、zscan 进行操作来实现删除。")])]),s._v(" "),e("blockquote",[e("p",[s._v("一般来说，对于 string类型的数据进行 del 不会产生阻塞。")])]),s._v(" "),e("h2",{attrs:{id:"_4-禁止使用耗时操作指令"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-禁止使用耗时操作指令"}},[s._v("#")]),s._v(" 4. 禁止使用耗时操作指令")]),s._v(" "),e("ul",[e("li",[s._v("禁止使用 "),e("code",[s._v("keys")]),s._v(" 命令，因为这个命令会去遍历所有 key。可以使用 scan 命令进行分批的、游标式的遍历。")]),s._v(" "),e("li",[s._v("删除（del）一个大数据的时候，可能会需要很长时间，所以建议用异步删除的方式 "),e("code",[s._v("unlink")]),s._v("，它会启动一个新的线程来删除目标数据，而不阻塞 Redis 的主线程。")])]),s._v(" "),e("h2",{attrs:{id:"_5-使用-slowlog-优化耗时命令"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5-使用-slowlog-优化耗时命令"}},[s._v("#")]),s._v(" 5. 使用 slowlog 优化耗时命令")]),s._v(" "),e("p",[s._v("我们可以使用 slowlog 功能找出最耗时的 Redis 命令进行相关的优化，以提升 Redis 的运行速度。")]),s._v(" "),e("p",[s._v("慢查询有两个重要的配置项：")]),s._v(" "),e("ul",[e("li",[e("code",[s._v("slowlog-log-slower-than 10000")]),s._v("：用于设置慢查询的评定时间，也就是说超过此配置项的命令将会被当场满操作记录在慢日志当中，它执行单位是微妙（1 秒等于 1,000,000 微妙）。")]),s._v(" "),e("li",[e("code",[s._v("slowlog-max-len")]),s._v("：用来配置慢查询日志的最大记录数。")])]),s._v(" "),e("p",[s._v("使用 "),e("code",[s._v("slowlog get n")]),s._v(" 来获取相关的慢查询日志，再找到这些慢查询对应的业务来进行相关的优化：")]),s._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[s._v("redis "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1:637"),e("span",{pre:!0,attrs:{class:"token operator"}},[e("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("9")]),s._v(">")]),s._v(" slowlog get "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("integer"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("14")]),s._v("\n   "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("integer"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1309448221")]),s._v("\n   "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("integer"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("15")]),s._v("\n   "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ping"')]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("integer"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("13")]),s._v("\n   "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("integer"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1309448128")]),s._v("\n   "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("integer"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("30")]),s._v("\n   "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"slowlog"')]),s._v("\n      "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"get"')]),s._v("\n      "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"100"')]),s._v("\n")])])]),e("p",[s._v("每一个条目由 4 个字段组成：")]),s._v(" "),e("ol",[e("li",[s._v("每个慢查询条目的唯一递增标识符")]),s._v(" "),e("li",[s._v("处理记录命令的 unix 时间戳")]),s._v(" "),e("li",[s._v("命令执行所需的总时间，以微妙为单位")]),s._v(" "),e("li",[s._v("组成该命令的参数数组")])]),s._v(" "),e("Vssue")],1)}),[],!1,null,null,null);t.default=n.exports}}]);
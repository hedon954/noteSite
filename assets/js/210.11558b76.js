(window.webpackJsonp=window.webpackJsonp||[]).push([[210],{620:function(t,a,s){"use strict";s.r(a);var n=s(47),r=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"六、mysql-存储引擎"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#六、mysql-存储引擎"}},[t._v("#")]),t._v(" 六、MySQL 存储引擎")]),t._v(" "),s("h2",{attrs:{id:"_1-innodb-和-myisam-区别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-innodb-和-myisam-区别"}},[t._v("#")]),t._v(" 1. InnoDB 和 MyISAM 区别")]),t._v(" "),s("div",{staticClass:"language-markdown extra-class"},[s("pre",{pre:!0,attrs:{class:"language-markdown"}},[s("code",[s("span",{pre:!0,attrs:{class:"token title important"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("#")]),t._v(" InnoDB 和 MyISAM 区别？")]),t._v("\n参考：https://blog.csdn.net/qq_35642036/article/details/82820178\n")])])]),s("h3",{attrs:{id:"_1-事务"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-事务"}},[t._v("#")]),t._v(" ① 事务")]),t._v(" "),s("p",[t._v("InnoDB 支持事务，MyISAM 不支持；")]),t._v(" "),s("h3",{attrs:{id:"_2-外键"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-外键"}},[t._v("#")]),t._v(" ② 外键")]),t._v(" "),s("p",[t._v("InnoDB 支持外键，而 MyISAM 不支持。对一个包含外键的 InnoDB 表转为 MyISAM 会失败；")]),t._v(" "),s("h3",{attrs:{id:"_3-存储"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-存储"}},[t._v("#")]),t._v(" ③ 存储")]),t._v(" "),s("p",[t._v("InnoDB 是聚集索引，使用"),s("code",[t._v("B+ 树")]),t._v(" 作为索引结构，数据文件是和（主键）索引"),s("strong",[t._v("绑在一起")]),t._v("的（表数据文件本身就是按 "),s("code",[t._v("B+树")]),t._v("组织的一个索引结构）。必须要有唯一索引，通过唯一索引效率很高。但是辅助索引需要两次查询，先查询到主键，然后再通过主键查询到数据。因此，主键不应该过大，因为主键太大，其他索引也都会很大。")]),t._v(" "),s("p",[t._v("MyISAM 是非聚集索引，也是使用 "),s("code",[t._v("B+树")]),t._v(" 作为索引结构，索引和数据文件是"),s("strong",[t._v("分离")]),t._v("的，索引保存的是数据文件的指针。主键索引和辅助索引是独立的。")]),t._v(" "),s("p",[t._v("也就是说：")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("InnoDB 的 B+ 树主键索引的叶子节点就是数据文件，辅助索引的叶子节点是主键的值。")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://tva1.sinaimg.cn/large/008eGmZEgy1gncyux28odj31310fytc8.jpg",alt:"img"}})])]),t._v(" "),s("li",[s("p",[t._v("而 MyISAM 的 B+ 树主键索引和辅助索引的叶子节点都是数据文件的地址指针。")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://tva1.sinaimg.cn/large/008eGmZEgy1gncyur4lhbj30nz0ck40n.jpg",alt:"img"}})])])]),t._v(" "),s("h3",{attrs:{id:"_4-行数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-行数"}},[t._v("#")]),t._v(" ④ 行数")]),t._v(" "),s("p",[t._v("InnoDB 不保存表的具体行数，执行 "),s("code",[t._v("select count(*) from table")]),t._v(" 时需要全表扫描。")]),t._v(" "),s("p",[t._v("而 MyISAM 用一个变量保存了整个表的行数，执行上述语句时只需要读出该变量即可，速度很快（注意不能加有任何WHERE条件）；")]),t._v(" "),s("div",{staticClass:"language-markdown extra-class"},[s("pre",{pre:!0,attrs:{class:"language-markdown"}},[s("code",[s("span",{pre:!0,attrs:{class:"token title important"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("#")]),t._v(" 为什么 InnoDB 没有这个变量？")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token list punctuation"}},[t._v("1.")]),t._v(" 因为 InnoDB 的事务特性，在同一时刻表中的行数对于不同的事务而言是不一样的，因此 count 统计会计算对于当前事务而言可以统计到的行数，而不是将总行数储存起来方便快速查询。\n"),s("span",{pre:!0,attrs:{class:"token list punctuation"}},[t._v("2.")]),t._v(" InnoDB 会尝试遍历一个尽可能小的索引。除非优化器提示使用别的索引。如果二级索引不存在，InnoDB 还会尝试去遍历其他聚簇索引。\n"),s("span",{pre:!0,attrs:{class:"token list punctuation"}},[t._v("3.")]),t._v(" 如果索引并没有完全处于InnoDB维护的缓冲区（Buffer Pool）中，count 操作会比较费时。可以建立一个记录总行数的表并让你的程序在INSERT/DELETE时更新对应的数据。\n"),s("span",{pre:!0,attrs:{class:"token list punctuation"}},[t._v("4.")]),t._v(" 和上面提到的问题一样，如果此时存在多个事务的话这种方案也不太好用。\n"),s("span",{pre:!0,attrs:{class:"token list punctuation"}},[t._v("5.")]),t._v(" 如果得到大致的行数值已经足够满足需求可以尝试 SHOW TABLE STATUS。\n")])])]),s("h3",{attrs:{id:"_5-索引"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-索引"}},[t._v("#")]),t._v(" ⑤ 索引")]),t._v(" "),s("p",[t._v("InnoDB 不支持全文索引，而 MyISAM 支持全文索引，在涉及全文索引领域的查询效率上 MyISAM 速度更快高；")]),t._v(" "),s("p",[t._v("PS：5.7 以后的 InnoDB 支持全文索引了。")]),t._v(" "),s("h3",{attrs:{id:"_6-压缩"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6-压缩"}},[t._v("#")]),t._v(" ⑥ 压缩")]),t._v(" "),s("p",[t._v("MyISAM 表格可以被压缩后进行查询操作；")]),t._v(" "),s("h3",{attrs:{id:"_7-锁"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_7-锁"}},[t._v("#")]),t._v(" ⑦ 锁")]),t._v(" "),s("ul",[s("li",[t._v("MyISAM 默认用的是表级锁，不支持行级锁；")]),t._v(" "),s("li",[t._v("InnoDB 默认用的是行级锁，也支持表级锁。")])]),t._v(" "),s("h3",{attrs:{id:"_8-唯一索引"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_8-唯一索引"}},[t._v("#")]),t._v(" ⑧ 唯一索引")]),t._v(" "),s("p",[t._v("InnoDB 表必须有唯一索引（如主键）（用户没有指定的话会自己找/生产一个隐藏列 Row_id 来充当默认主键），而 MyISAM 可以没有；")]),t._v(" "),s("h3",{attrs:{id:"_9-文件格式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_9-文件格式"}},[t._v("#")]),t._v(" ⑨ 文件格式")]),t._v(" "),s("ul",[s("li",[t._v("Innodb：frm 是表定义文件，ibd 是数据文件")]),t._v(" "),s("li",[t._v("Myisam：frm 是表定义文件，myd 是数据文件，myi 是索引文件")])]),t._v(" "),s("div",{staticClass:"language-markdown extra-class"},[s("pre",{pre:!0,attrs:{class:"language-markdown"}},[s("code",[s("span",{pre:!0,attrs:{class:"token title important"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("#")]),t._v(" InnoDB为什么推荐使用自增ID作为主键？")]),t._v("\n自增ID可以保证每次插入时B+索引是从右边扩展的，可以避免B+树和频繁合并和分裂（对比使用UUID）。如果使用字符串主键和随机主键，会使得数据随机插入，效率比较差。\n\n"),s("span",{pre:!0,attrs:{class:"token title important"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("#")]),t._v(" InnoDB 引擎的4大特性")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token list punctuation"}},[t._v("1.")]),t._v(" 插入缓冲（insert buffer)\n"),s("span",{pre:!0,attrs:{class:"token list punctuation"}},[t._v("2.")]),t._v(" 二次写(double write)\n"),s("span",{pre:!0,attrs:{class:"token list punctuation"}},[t._v("3.")]),t._v(" 自适应哈希索引(ahi)\n"),s("span",{pre:!0,attrs:{class:"token list punctuation"}},[t._v("4.")]),t._v(" 预读(read ahead)\n")])])]),s("h2",{attrs:{id:"_2-使用场景"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-使用场景"}},[t._v("#")]),t._v(" 2. 使用场景")]),t._v(" "),s("h3",{attrs:{id:"myisam"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#myisam"}},[t._v("#")]),t._v(" MyISAM")]),t._v(" "),s("ul",[s("li",[t._v("效率快于  InnoDB，适用于小型应用；")]),t._v(" "),s("li",[t._v("支持跨平台（把表保存成文件）；")]),t._v(" "),s("li",[t._v("大量查询时")])]),t._v(" "),s("h3",{attrs:{id:"innodb"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#innodb"}},[t._v("#")]),t._v(" InnoDB")]),t._v(" "),s("ul",[s("li",[t._v("支持事务")]),t._v(" "),s("li",[t._v("修改操作比较多")])]),t._v(" "),s("Vssue")],1)}),[],!1,null,null,null);a.default=r.exports}}]);
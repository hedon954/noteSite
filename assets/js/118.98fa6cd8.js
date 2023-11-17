(window.webpackJsonp=window.webpackJsonp||[]).push([[118],{531:function(t,s,a){"use strict";a.r(s);var e=a(47),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"三、锁模块"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三、锁模块"}},[t._v("#")]),t._v(" 三、锁模块")]),t._v(" "),a("div",{staticClass:"language-markdown extra-class"},[a("pre",{pre:!0,attrs:{class:"language-markdown"}},[a("code",[a("span",{pre:!0,attrs:{class:"token title important"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("#")]),t._v(" MyISAM 和 InnoDB 关于锁方面的区别是什么？")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token title important"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("#")]),t._v(" 数据库事务的四大特性")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token title important"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("#")]),t._v(" 事务隔离级别以及各级别下的并发访问问题")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token title important"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("#")]),t._v(" InnoDB 可重复读隔离级别下如何避免幻读")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token title important"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("#")]),t._v(" RC、RR 级别下的 InnoDB 的非阻塞读如何实现")]),t._v("\n")])])]),a("h2",{attrs:{id:"_1-锁的类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-锁的类型"}},[t._v("#")]),t._v(" 1. 锁的类型")]),t._v(" "),a("ul",[a("li",[t._v("InnoDB 下的")])]),t._v(" "),a("blockquote",[a("p",[t._v("参考：https://www.jianshu.com/p/b4731a7d255a")])]),t._v(" "),a("h3",{attrs:{id:"_1-1-实现思想"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-实现思想"}},[t._v("#")]),t._v(" 1.1 实现思想")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("乐观锁")]),t._v(" "),a("p",[t._v("乐观锁是相对悲观锁而言的，乐观锁假设数据一般情况下不会造成冲突，所以在数据进行提交更新的时候，才会正式对数据的冲突与否进行检测，如果发现冲突了，则返回给用户错误的信息，让用户决定如何去做。")])])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("MyBatisPlus 中使用乐观锁")]),t._v(" "),a("p",[a("strong",[t._v("原理：")])]),t._v(" "),a("ol",[a("li",[t._v("取出记录时，获取当前 version")]),t._v(" "),a("li",[t._v("更新时，带上这个 version")]),t._v(" "),a("li",[t._v("执行更新时， set version = newVersion where version = oldVersion")]),t._v(" "),a("li",[t._v("如果 version 不对，就更新失败")])]),t._v(" "),a("p",[a("strong",[t._v("使用方法：")]),t._v("\n字段上加上 "),a("code",[t._v("@Version")]),t._v(" 注解\n如：")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[t._v("\t\t"),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Version")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Integer")]),t._v(" version"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[a("strong",[t._v("说明：")])]),t._v(" "),a("ol",[a("li",[t._v("支持的数据类型只有：int, Integerlong, Long, Date, Timestamp, LocalDateTime")]),t._v(" "),a("li",[t._v("整数类型下 newVersion = oldVersion + 1")]),t._v(" "),a("li",[t._v("newVersion 会回写到 entity 中")]),t._v(" "),a("li",[t._v("仅支持 "),a("code",[t._v("updateById(id)")]),t._v(" 与 "),a("code",[t._v("update(entity, wrapper)")]),t._v(" 方法")]),t._v(" "),a("li",[t._v("在 "),a("code",[t._v("update(entity, wrapper)")]),t._v(" 方法下，wrapper 不能复用！！！")])])]),t._v(" "),a("ul",[a("li",[a("p",[t._v("悲观锁")]),t._v(" "),a("p",[t._v("这是一种对数据的修改持有悲观态度的并发控制方式。总是假设最坏的情况，每次读取数据的时候都默认其他线程会更改数据，因此需要进行加锁操作，当其他线程想要访问数据时，都需要阻塞挂起。")])])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("使用场景")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("乐观锁")]),t._v(" "),a("p",[t._v("高并发、多读少写且如果出现提交失败，用户是可以接受的场景。")])]),t._v(" "),a("li",[a("p",[t._v("悲观锁")]),t._v(" "),a("p",[t._v("在并发量不是很大，并且出现并发情况导致的异常用户和系统都很难以接受的情况下，会选择悲观锁。")])])])]),t._v(" "),a("h3",{attrs:{id:"_1-2-锁粒度"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-锁粒度"}},[t._v("#")]),t._v(" 1.2 锁粒度")]),t._v(" "),a("ul",[a("li",[t._v("表级锁（table lock）")]),t._v(" "),a("li",[t._v("行级锁（row lock）")])]),t._v(" "),a("h3",{attrs:{id:"_1-3-意向锁-表级锁-table-lock"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-意向锁-表级锁-table-lock"}},[t._v("#")]),t._v(" 1.3 意向锁 [表级锁（table lock）]")]),t._v(" "),a("p",[t._v("意向锁（Intention Locks）分为"),a("code",[t._v("意向共享锁（IS")]),t._v("）和"),a("code",[t._v("意向排他锁（IX）")]),t._v("，依次表示接下来的一个事务将会获得共享锁还是排他锁。")]),t._v(" "),a("p",[t._v("意向锁不需要显示的获取，在获取共享锁或者排他锁的时候会自动的获取，也就是说，如果要获取共享锁或者排他锁，则一定是先获取到了意向共享锁或者意向排他锁。 意向锁不会锁住任何东西，"),a("strong",[t._v("除非有进行全表请求的操作")]),t._v("，否则不会锁住任何数据。存在的意义只是用来表示有事务正在锁某一行的数据，或者将要锁某一行的数据。")]),t._v(" "),a("p",[t._v("IS 和 IX 是表级锁，不会和行级的 X，S 锁发生冲突。只会和表级的 X，S 发生冲突。")]),t._v(" "),a("p",[t._v("横向是已经持有的锁，纵向是正在请求的锁：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://hedonspace.oss-cn-beijing.aliyuncs.com/img2/008eGmZEgy1gnczhdsgjsj30qx05odg9.jpg",alt:"img"}})]),t._v(" "),a("h3",{attrs:{id:"_1-4-读写锁-行级锁-row-lock"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-4-读写锁-行级锁-row-lock"}},[t._v("#")]),t._v(" 1.4 读写锁 [行级锁（row lock）]")]),t._v(" "),a("p",[t._v("读写锁（ReadWriteLock）即"),a("code",[t._v("共享锁")]),t._v("和"),a("code",[t._v("排他锁")]),t._v("。")]),t._v(" "),a("p",[t._v("InnoDB 通过共享锁和排他锁两种方式实现了标准的行锁。")]),t._v(" "),a("p",[t._v("共享锁(S 锁)：允许事务获得锁后去读数据。")]),t._v(" "),a("p",[t._v("排他锁(X 锁)：允许事务获得锁后去更新或删除数据。")]),t._v(" "),a("p",[t._v("一个事务获取的共享锁(S)后，允许其他事务获取 S 锁，此时两个事务都持有共享锁(S)，但是不允许其他事务获取 X 锁。如果一个事务获取的排他锁(X)，则不允许其他事务获取 S 或者 X 锁，必须等到该事务释放锁后才可以获取到。")]),t._v(" "),a("p",[t._v("e.g.：\n①"),a("code",[t._v("LOCK TABLE mchopin READ;")]),t._v("用读锁锁表，会阻塞其他事务修改表数据，但不会阻塞其他事务读该表。\n②"),a("code",[t._v("LOCK TABLE mchopin WRITE;")]),t._v("用写锁锁表，会阻塞其他事务读和写。\n③"),a("code",[t._v("select * from mchopin where id = 3 lock in share mode;")]),t._v("读行锁，仅对一行数据加了读锁。\n④"),a("code",[t._v("select * from mchopin where id = 3 for update;")]),t._v("写行锁，仅对一行数据加了写锁。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://hedonspace.oss-cn-beijing.aliyuncs.com/img2/008eGmZEgy1gnczk7syf8j30l703cq2y.jpg",alt:"img"}})]),t._v(" "),a("h3",{attrs:{id:"_1-5-记录锁-record-locks"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-5-记录锁-record-locks"}},[t._v("#")]),t._v(" 1.5 记录锁（record locks）")]),t._v(" "),a("p",[t._v("锁住某一行，如果表存在索引，那么记录锁是锁在"),a("strong",[t._v("索引")]),t._v("上的，如果表没有索引，那么 InnoDB 会创建一个隐藏的"),a("strong",[t._v("聚簇索引加锁")]),t._v("。")]),t._v(" "),a("p",[t._v("所以在进行查询的时候尽量采用索引进行查询，这样可以降低锁的冲突。")]),t._v(" "),a("h3",{attrs:{id:"_1-6-间隙锁-gap-locks"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-6-间隙锁-gap-locks"}},[t._v("#")]),t._v(" 1.6 间隙锁（gap locks）")]),t._v(" "),a("p",[t._v("间隙锁是一种记录行与记录行之间存在空隙或在第一行记录之前或最后一行记录之后产生的锁。")]),t._v(" "),a("p",[t._v("间隙锁可能占据的单行，多行或者是空记录。")]),t._v(" "),a("p",[t._v("通常的情况是采用"),a("strong",[t._v("范围查找")]),t._v("的时候，比如在学生成绩管理系统中，如果此时有学生成绩 60，72，80，95，一个老师要查下成绩大于 72 的所有同学的信息，采用的语句是 "),a("code",[t._v("select * from student where grade > 72 for update")]),t._v("。")]),t._v(" "),a("p",[t._v("这个时候 InnoDB 锁住的不仅是 80，95，而是所有在 72-80，80-95，以及 95 以上的所有记录。")]),t._v(" "),a("p",[t._v("为什么会这样呢？因为不锁住这些行，另一个事务在此时插入了一条分数大于 72 的记录，会导致第一次的事务两次查询的结果不一样，出现了幻读。所以为了在满足事务隔离级别的情况下需要锁住所有满足条件的行。")]),t._v(" "),a("ol",[a("li",[t._v("加锁点：不是加在记录上的，而是加在两条记录之间的位置。")]),t._v(" "),a("li",[t._v("作用：两次当前读返回的是完全相同的记录。")])]),t._v(" "),a("p",[t._v("幻读和不可重复读的关键点在于，幻读是数据增加了，而不可重复读是数据修改或删除了。从锁上来分析，"),a("strong",[t._v("幻读的关键是 GAP 锁，而不可重复读的关键是行锁。")])]),t._v(" "),a("h3",{attrs:{id:"_1-7-next-key-locks"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-7-next-key-locks"}},[t._v("#")]),t._v(" 1.7 Next-Key Locks")]),t._v(" "),a("p",[t._v("NK 是一种记录锁和间隙锁的组合锁。既锁住行也锁住间隙。并且采用的 "),a("strong",[t._v("左开右闭")]),t._v(" 的原则。InnoDB 对于查询都是采用这种锁的。")]),t._v(" "),a("p",[t._v("举个例子：")]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CREATE")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TABLE")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("xxp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("unsigned")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("NOT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("NULL")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("AUTO_INCREMENT")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("uid"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("unsigned")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DEFAULT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("NULL")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("PRIMARY")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("KEY")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("KEY")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("idx_uid"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("uid"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("USING")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("BTREE")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ENGINE")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("InnoDB")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("AUTO_INCREMENT")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DEFAULT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CHARSET")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("utf8"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("INSERT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("INTO")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("xxp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("uid"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("VALUES")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("INSERT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("INTO")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("xxp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("uid"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("VALUES")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("INSERT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("INTO")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("xxp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("uid"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("VALUES")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("INSERT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("INTO")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("xxp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("uid"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("VALUES")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("INSERT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("INTO")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("xxp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("uid"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("VALUES")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# T1")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("START")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TRANSACTION")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WITH")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CONSISTENT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SNAPSHOT")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//1")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" xxp "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WHERE")]),t._v(" uid "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("UPDATE")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//2")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("COMMIT")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//5")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# T2")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("START")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TRANSACTION")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WITH")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CONSISTENT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SNAPSHOT")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//3")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("INSERT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("INTO")]),t._v(" xxp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("uid"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("VALUES")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("11")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("INSERT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("INTO")]),t._v(" xxp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("uid"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("VALUES")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//4")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("INSERT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("INTO")]),t._v(" xxp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("uid"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("VALUES")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("INSERT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("INTO")]),t._v(" xxp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("uid"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("VALUES")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("INSERT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("INTO")]),t._v(" xxp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("uid"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("VALUES")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("9")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" xxp "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WHERE")]),t._v(" uid "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("UPDATE")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("COMMIT")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ROLLBACK")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("按照上面 1，2，3，4 的顺序执行会发现第 4 步被阻塞了，必须执行完第 5 步后才能插入成功。这里会很奇怪明明锁住的是 uid=6 的这一行，为什么不能插入 5 呢？原因就是这里采用了 next-key 的算法，锁住的是"),a("code",[t._v("(3,10]")]),t._v("整个区间。")]),t._v(" "),a("h2",{attrs:{id:"_2-myisam-和-innodb-关于锁方面的区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-myisam-和-innodb-关于锁方面的区别"}},[t._v("#")]),t._v(" 2. MyISAM 和 InnoDB 关于锁方面的区别")]),t._v(" "),a("ul",[a("li",[t._v("MyISAM 默认用的是表级锁，不支持行级锁；")]),t._v(" "),a("li",[t._v("InnoDB 默认用的是行级锁，也支持表级锁。")])]),t._v(" "),a("h2",{attrs:{id:"_3-数据库事务的四大特性-acid"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-数据库事务的四大特性-acid"}},[t._v("#")]),t._v(" 3. 数据库事务的四大特性 —— ACID")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("原子性 Atomicity")]),t._v(" "),a("p",[t._v("事务包含的所有操作要么全部成功，要么全部失败回滚；成功必须要完全应用到数据库，败则不能对数据库产生影响。")])]),t._v(" "),a("li",[a("p",[t._v("一致性 Consistency")]),t._v(" "),a("p",[t._v("事务执行前和执行后必须处于一致性状态。例如：转账事务执行前后，两账户余额的总和不变。")])]),t._v(" "),a("li",[a("p",[t._v("隔离性 Isolation")]),t._v(" "),a("p",[t._v("多个并发的事务之间要相互隔离。")])]),t._v(" "),a("li",[a("p",[t._v("持久性 Durability")]),t._v(" "),a("p",[t._v("事务一旦提交，对数据库的改变是永久性的.")])])]),t._v(" "),a("h2",{attrs:{id:"_4-数据库事务的隔离级别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-数据库事务的隔离级别"}},[t._v("#")]),t._v(" 4. 数据库事务的隔离级别")]),t._v(" "),a("h3",{attrs:{id:"_4-1-事务的隔离性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-事务的隔离性"}},[t._v("#")]),t._v(" 4.1 事务的隔离性")]),t._v(" "),a("blockquote",[a("p",[t._v("多事务操作之间不会产生影响。")])]),t._v(" "),a("h3",{attrs:{id:"_4-2-三个读问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-三个读问题"}},[t._v("#")]),t._v(" 4.2 三个读问题")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("脏读")]),t._v(" "),a("blockquote",[a("p",[t._v("一个未提交的事务读取到另一个未提交的事务的数据。")])]),t._v(" "),a("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://hedonspace.oss-cn-beijing.aliyuncs.com/img2/007S8ZIlly1gisk54jkwaj31100f4jtb.jpg",alt:"image-20200916161119710"}}),t._v(" "),a("p",[t._v("如上：东方不败想从 5000 改到 100，而岳不群想从 5000 改到 60000。这个时候岳不群先改了，然后东方不败读取到数据已经改成 60000 了，所以东方不败就会继续在 60000 的基础上进行修改。但是这个时候，岳不群的事务并没有进行提交，而且进行了事务回滚，所以真实的数据现在还是 5000，而东方不败操作的数据是 60000。这就叫脏读。")])]),t._v(" "),a("li",[a("p",[t._v("不可重复读")]),t._v(" "),a("blockquote",[a("p",[t._v("一个未提交事务读取到另一提交事务修改数据。")])]),t._v(" "),a("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://hedonspace.oss-cn-beijing.aliyuncs.com/img2/007S8ZIlly1gisk7c34ukj30wc0ecgnf.jpg",alt:"image-20200916161326921"}}),t._v(" "),a("p",[t._v("如上：东方不败先读取到数据是 5000，想对数据进行操作，但是这个时候岳不群已经将数据改成 900 了。而东方不败又检测到了数据已经改成 900 了，读两次，数据不一致，这就是不可重复读（因为不知道再读的话是不是又会不一样了）。")])]),t._v(" "),a("li",[a("p",[t._v("虚（幻）读")]),t._v(" "),a("blockquote",[a("p",[t._v("一个未提交事务读取到另一提交事务增加的数据。")])]),t._v(" "),a("p",[t._v("如：本来该事务只读取到 3 条数据，这个时候另外一个事务 insert 了一条新的数据，就变成了读取到 4 条数据了，同一事务里面读取到不同条数的数据。")])])]),t._v(" "),a("h3",{attrs:{id:"_4-3-解决读问题-设置事务的隔离性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-3-解决读问题-设置事务的隔离性"}},[t._v("#")]),t._v(" 4.3 解决读问题 —— 设置事务的隔离性")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("isolation 属性值")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("意思")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("脏读")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("不可重复读")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("幻读")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("作用")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("READ UNCOMMITTED")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("读未提交")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("有")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("有")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("有")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("效率高，但是啥也避免不了")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("READ COMMITTED")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("读已提交")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("无")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("有")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("有")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("常用，可避免脏读")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("REPEATABLE READ")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("可重复读")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("无")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("无")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("有")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("可以用在非 insert 方法上")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("SERIALIZABLE")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("串行化")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("无")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("无")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("无")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("三个问题都解决了，但效率低")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("DEFAULT")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("使用数据库默认")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("MySQL 的话就是 REPEATABLE READ"),a("br"),t._v("Oracle 的话就是 READ COMMITTED")])])])]),t._v(" "),a("h3",{attrs:{id:"_4-4-当前读-快照读"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-4-当前读-快照读"}},[t._v("#")]),t._v(" 4.4 当前读/快照读")]),t._v(" "),a("h4",{attrs:{id:"当前读"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#当前读"}},[t._v("#")]),t._v(" 当前读")]),t._v(" "),a("blockquote",[a("p",[t._v("当前读：读取的是最新版本，并且对读取的记录加锁，阻塞其他事务同时改动相同记录，避免出现安全问题。")])]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("lock")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("in")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("share")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("mode")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("共享读锁"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("update")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("update")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("delete")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("insert")]),t._v("\n")])])]),a("p",[t._v("例如，假设要 update 一条记录，但是另一个事务已经 delete 这条数据并且 commit 了，如果不加锁就会产生冲突。所以 update 的时候肯定要是当前读，得到最新的信息并且锁定相应的记录。")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("关于 for update")]),t._v(" "),a("p",[t._v("使用 "),a("code",[t._v("select ... for update")]),t._v(" 可以锁表也可以锁行。锁表的压力自然是比锁行的压力要大的，所以应尽量采用锁行。")]),t._v(" "),a("p",[t._v("for update 仅适用于 InnoDB（因为 MyISAM 不支持行锁），且必须在事务处理模块（BEGIN/COMMIT）中才能生效。")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("例1: (明确指定主键，并且有此数据，row lock)")]),t._v(" "),a("p",[t._v("SELECT * FROM wallet WHERE id='3' FOR UPDATE;")])]),t._v(" "),a("li",[a("p",[t._v("例2: (明确指定主键，若查无此数据，无 lock)")]),t._v(" "),a("p",[t._v("SELECT * FROM wallet WHERE id='-1' FOR UPDATE;")])]),t._v(" "),a("li",[a("p",[t._v("例3: (无主键，table lock)")]),t._v(" "),a("p",[t._v("SELECT * FROM wallet WHERE name='Mouse' FOR UPDATE;")])]),t._v(" "),a("li",[a("p",[t._v("例4: (主键不明确，table lock)")]),t._v(" "),a("p",[t._v("SELECT * FROM wallet WHERE id<>'3' FOR UPDATE;")])]),t._v(" "),a("li",[a("p",[t._v("例5: (主键不明确，table lock)")]),t._v(" "),a("p",[t._v("SELECT * FROM wallet WHERE id LIKE '3' FOR UPDATE;")])])])]),t._v(" "),a("p",[a("strong",[t._v("实现方式：")]),t._v(" 当前读是通过 "),a("code",[t._v("Next-Key Lock")]),t._v(" 来实现的。")]),t._v(" "),a("p",[t._v("下面通过一个例子来说明当前读的实现方式，例如下面这条 SQL：")]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("delete")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" T "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("where")]),t._v(" age "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("进行下面的实验：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://hedonspace.oss-cn-beijing.aliyuncs.com/img2/008i3skNly1gt4ywzml1yj60u00e1abr02.jpg",alt:"img"}})]),t._v(" "),a("p",[t._v("测试可知 "),a("code",[t._v("delete from T where age = 7;")]),t._v(" 语句在 "),a("code",[t._v("age")]),t._v(" 上的加锁区间为 "),a("code",[t._v("(4,10)")]),t._v("，图解如下：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://hedonspace.oss-cn-beijing.aliyuncs.com/img2/008i3skNly1gt4yyn7i9qj30u00ifq3z.jpg",alt:"img"}})]),t._v(" "),a("h4",{attrs:{id:"快照读"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#快照读"}},[t._v("#")]),t._v(" 快照读")]),t._v(" "),a("blockquote",[a("p",[t._v("快照读：读取的是记录数据的可见版本（可能是过期的数据），不用加锁。")])]),t._v(" "),a("p",[t._v("单纯的 "),a("code",[t._v("select")]),t._v(" 操作，不包括上述")]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("lock")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("in")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("share")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("mode")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("update")]),t._v("。　　　　\n")])])]),a("p",[t._v("READ COMMITTED 隔离级别：每次 select 都生成一个快照读")]),t._v(" "),a("p",[t._v("REPEATABLE READ 隔离级别：开启事务后第一个 select 语句才是快照读的地方，而不是一开启事务就快照读")]),t._v(" "),a("p",[a("strong",[t._v("实现方式：")]),t._v(" undo log + MVCC")]),t._v(" "),a("p",[t._v("下图右侧黄色部分是数据：一行数据记录，主键 ID 是 10，object = 'Goland'  ，被 update 更新为 object = 'Python' 。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://hedonspace.oss-cn-beijing.aliyuncs.com/img2/008i3skNly1gt4z5hda05j30u00gewfc.jpg",alt:"img"}})]),t._v(" "),a("ol",[a("li",[t._v("事务会先使用“排他锁”锁定该行，将该行当前的值复制到 undo log 中；")]),t._v(" "),a("li",[t._v("然后再真正地修改当前行的值；")]),t._v(" "),a("li",[t._v("最后填写事务的 "),a("code",[t._v("DB_TRX_ID")]),t._v(" ，使用回滚指针 "),a("code",[t._v("DB_ROLL_PTR")]),t._v(" 指向 undo log 中修改前的行。")])]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("DB_TRX_ID")]),t._v(" :  6 字节 DB_TRX_ID 字段，表示最后更新的事务 id ( update , delete , insert ) 。此外，删除在内部被视为更新，其中行中的特殊位被设置为将其标记为已软删除。")]),t._v(" "),a("li",[a("strong",[t._v("DB_ROLL_PTR")]),t._v(" :  7 字节回滚指针，指向前一个版本的 undo log 记录，组成 undo 链表。如果更新了行，则撤消日志记录包含在更新行之前重建行内容所需的信息。")]),t._v(" "),a("li",[a("strong",[t._v("DB_ROW_ID")]),t._v("：行标识（隐藏单调自增 ID），大小为 6 字节，如果表没有主键，InnoDB 会自动生成一个隐藏主键，因此会出现这个列。另外，每条记录的头信息（record header）里都有一个专门的 bit（deleted_flag）来表示当前记录是否已经被删除。")])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("补充")]),t._v(" "),a("p",[t._v("insert undo log 只在事务回滚时需要，事务提交就可以删掉了。")]),t._v(" "),a("p",[t._v("update undo log 包括 update 和 delete，回滚和快照读都需要。")]),t._v(" "),a("p",[a("strong",[t._v("MVCC 解决幻读的原理：")])]),t._v(" "),a("ol",[a("li",[t._v("其实它是用来替代行锁的，进一步提升并发能力")]),t._v(" "),a("li",[t._v("InnoDB 的 MVCC，是通过在每行记录后面保存两个隐藏的列 "),a("strong",[t._v("DB_TRX_ID")]),t._v(" 和 "),a("strong",[t._v("DB_ROLL_PTR")]),t._v(" 来实现的，它们是自动加上的，程序无法控制；")]),t._v(" "),a("li",[t._v("MVCC 把一个个事务都隔离开来，自己玩自己的 CURD，在最后提交到数据库时再比较版本号；")]),t._v(" "),a("li",[t._v("不会读取事务版本号大于当前事务 ID 的数据，顺便解决了幻读问题；")]),t._v(" "),a("li",[t._v("主要解决的是写时加锁不能读的问题，但并没有解决写并发的问题。")])])]),t._v(" "),a("h3",{attrs:{id:"_4-5-innodb-可重复读隔离级别下如何避免幻读"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-5-innodb-可重复读隔离级别下如何避免幻读"}},[t._v("#")]),t._v(" 4.5 InnoDB 可重复读隔离级别下如何避免幻读")]),t._v(" "),a("ul",[a("li",[t._v("表现：快照读（非阻塞读） —— MVCC")]),t._v(" "),a("li",[t._v("内在：next-key 锁（行锁 + gap 锁）")])]),t._v(" "),a("Vssue")],1)}),[],!1,null,null,null);s.default=n.exports}}]);
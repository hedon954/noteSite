(window.webpackJsonp=window.webpackJsonp||[]).push([[143],{556:function(t,e,a){"use strict";a.r(e);var s=a(47),_=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"_8-事务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_8-事务"}},[t._v("#")]),t._v(" 8. 事务")]),t._v(" "),a("h2",{attrs:{id:"_8-1-事务的隔离性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_8-1-事务的隔离性"}},[t._v("#")]),t._v(" 8.1 事务的隔离性")]),t._v(" "),a("blockquote",[a("p",[t._v("多事务操作之间不会产生影响。")])]),t._v(" "),a("h2",{attrs:{id:"_8-2-三个读问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_8-2-三个读问题"}},[t._v("#")]),t._v(" 8.2 三个读问题")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("脏读")]),t._v(" "),a("blockquote",[a("p",[t._v("一个未提交的事务读取到另一个未提交的事务的数据。")])]),t._v(" "),a("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://tva1.sinaimg.cn/large/007S8ZIlly1gisk54jkwaj31100f4jtb.jpg",alt:"image-20200916161119710"}}),t._v(" "),a("p",[t._v("如上：东方不败想从5000改到100，而岳不群想从5000改到60000。这个时候岳不群先改了，然后东方不败读取到数据已经改成60000了，所以东方不败就会继续在60000的基础上进行修改。但是这个时候，岳不群的事务并没有进行提交，而且进行了事务回滚，所以真实的数据现在还是5000，而东方不败操作的数据是60000。这就叫脏读。")])]),t._v(" "),a("li",[a("p",[t._v("不可重复读")]),t._v(" "),a("blockquote",[a("p",[t._v("一个未提交事务读取到另一提交事务修改数据。")])]),t._v(" "),a("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://tva1.sinaimg.cn/large/007S8ZIlly1gisk7c34ukj30wc0ecgnf.jpg",alt:"image-20200916161326921"}}),t._v(" "),a("p",[t._v("如上：东方不败先读取到数据是5000，想对数据进行操作，但是这个时候岳不群已经将数据改成900了。而东方不败又检测到了数据已经改成900了，读两次，数据不一致，这就是不可重复读（因为不知道再读的话是不是又会不一样了）。")])]),t._v(" "),a("li",[a("p",[t._v("虚（幻）读")]),t._v(" "),a("blockquote",[a("p",[t._v("一个未提交事务读取到另一提交事务增加的数据。")])]),t._v(" "),a("p",[t._v("如：本来该事务只修改了 3 条数据，这个时候另外一个事务 insert 了一条新的数据，就变成修改了 4 条数据了。")])])]),t._v(" "),a("h2",{attrs:{id:"_8-3-解决读问题-设置事务的隔离性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_8-3-解决读问题-设置事务的隔离性"}},[t._v("#")]),t._v(" 8.3 解决读问题 —— 设置事务的隔离性")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("isolation 属性值")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("意思")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("脏读")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("不可重复读")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("虚读")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("作用")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("READ UNCOMMITTED")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("读未提交")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("有")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("有")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("有")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("效率高，但是啥也避免不了")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("READ COMMITTED")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("读已提交")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("无")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("有")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("有")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("常用，可避免脏读")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("REPEATABLE READ")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("可重复读")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("无")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("无")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("有")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("可以用在非 insert 方法上")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("SERIALIZABLE")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("串行化")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("无")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("无")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("无")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("三个问题都解决了，但效率低")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("DEFAULT")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("使用数据库默认")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("MySQL 的话就是 REPEATABLE READ"),a("br"),t._v("Oracle 的话就是 READ COMMITTED")])])])]),t._v(" "),a("h2",{attrs:{id:"_8-4-当前读-快照读"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_8-4-当前读-快照读"}},[t._v("#")]),t._v(" 8.4 当前读/快照读")]),t._v(" "),a("h3",{attrs:{id:"当前读"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#当前读"}},[t._v("#")]),t._v(" 当前读")]),t._v(" "),a("blockquote",[a("p",[t._v("当前读：读取的是最新版本，并且对读取的记录加锁，阻塞其他事务同时改动相同记录，避免出现安全问题。")])]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("lock")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("in")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("share")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("mode")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("共享读锁"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("update")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("update")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("delete")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("insert")]),t._v("\n")])])]),a("p",[t._v("例如，假设要 update 一条记录，但是另一个事务已经 delete 这条数据并且 commit 了，如果不加锁就会产生冲突。所以 update 的时候肯定要是当前读，得到最新的信息并且锁定相应的记录。")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("关于 for update")]),t._v(" "),a("p",[t._v("使用 "),a("code",[t._v("select ... for update")]),t._v(" 可以锁表也可以锁行。锁表的压力自然是比锁行的压力要大的，所以应尽量采用锁行。")]),t._v(" "),a("p",[t._v("for update 仅适用于 InnoDB（因为 MyISAM 不支持行锁），且必须在事务处理模块（BEGIN/COMMIT）中才能生效。")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("例1: (明确指定主键，并且有此数据，row lock)")]),t._v(" "),a("p",[t._v("SELECT * FROM wallet WHERE id='3' FOR UPDATE;")])]),t._v(" "),a("li",[a("p",[t._v("例2: (明确指定主键，若查无此数据，无 lock)")]),t._v(" "),a("p",[t._v("SELECT * FROM wallet WHERE id='-1' FOR UPDATE;")])]),t._v(" "),a("li",[a("p",[t._v("例3: (无主键，table lock)")]),t._v(" "),a("p",[t._v("SELECT * FROM wallet WHERE name='Mouse' FOR UPDATE;")])]),t._v(" "),a("li",[a("p",[t._v("例4: (主键不明确，table lock)")]),t._v(" "),a("p",[t._v("SELECT * FROM wallet WHERE id<>'3' FOR UPDATE;")])]),t._v(" "),a("li",[a("p",[t._v("例5: (主键不明确，table lock)")]),t._v(" "),a("p",[t._v("SELECT * FROM wallet WHERE id LIKE '3' FOR UPDATE;")])])])]),t._v(" "),a("p",[a("strong",[t._v("实现方式：")]),t._v(" 当前读是通过 "),a("code",[t._v("Next-Key Lock")]),t._v(" 来实现的。")]),t._v(" "),a("p",[t._v("下面通过一个例子来说明当前读的实现方式，例如下面这条 SQL：")]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("delete")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" T "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("where")]),t._v(" age "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("进行下面的实验：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://tva1.sinaimg.cn/large/008i3skNly1gt4ywzml1yj60u00e1abr02.jpg",alt:"img"}})]),t._v(" "),a("p",[t._v("测试可知 "),a("code",[t._v("delete from T where age = 7;")]),t._v(" 语句在 "),a("code",[t._v("age")]),t._v(" 上的加锁区间为 "),a("code",[t._v("(4,10)")]),t._v("，图解如下：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://tva1.sinaimg.cn/large/008i3skNly1gt4yyn7i9qj30u00ifq3z.jpg",alt:"img"}})]),t._v(" "),a("h3",{attrs:{id:"快照读"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#快照读"}},[t._v("#")]),t._v(" 快照读")]),t._v(" "),a("blockquote",[a("p",[t._v("快照读：读取的是记录数据的可见版本（可能是过期的数据），不用加锁。")])]),t._v(" "),a("p",[t._v("单纯的 "),a("code",[t._v("select")]),t._v(" 操作，不包括上述")]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("lock")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("in")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("share")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("mode")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("update")]),t._v("。　　　　\n")])])]),a("p",[t._v("READ COMMITTED 隔离级别：每次 select 都生成一个快照读")]),t._v(" "),a("p",[t._v("REPEATABLE READ 隔离级别：开启事务后第一个 select 语句才是快照读的地方，而不是一开启事务就快照读")]),t._v(" "),a("p",[a("strong",[t._v("实现方式：")]),t._v(" undo log + MVCC")]),t._v(" "),a("p",[t._v("下图右侧黄色部分是数据：一行数据记录，主键 ID 是 10，object = 'Goland'  ，被 update 更新为 object = 'Python' 。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://tva1.sinaimg.cn/large/008i3skNly1gt4z5hda05j30u00gewfc.jpg",alt:"img"}})]),t._v(" "),a("ol",[a("li",[t._v("事务会先使用“排他锁”锁定该行，将该行当前的值复制到 undo log 中；")]),t._v(" "),a("li",[t._v("然后再真正地修改当前行的值；")]),t._v(" "),a("li",[t._v("最后填写事务的 "),a("code",[t._v("DB_TRX_ID")]),t._v(" ，使用回滚指针 "),a("code",[t._v("DB_ROLL_PTR")]),t._v(" 指向 undo log 中修改前的行。")])]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("DB_TRX_ID")]),t._v(" :  6 字节 DB_TRX_ID 字段，表示最后更新的事务 id ( update , delete , insert ) 。此外，删除在内部被视为更新，其中行中的特殊位被设置为将其标记为已软删除。")]),t._v(" "),a("li",[a("strong",[t._v("DB_ROLL_PTR")]),t._v(" :  7 字节回滚指针，指向前一个版本的 undo log 记录，组成 undo 链表。如果更新了行，则撤消日志记录包含在更新行之前重建行内容所需的信息。")]),t._v(" "),a("li",[a("strong",[t._v("DB_ROW_ID")]),t._v("：行标识（隐藏单调自增 ID），大小为 6 字节，如果表没有主键，InnoDB 会自动生成一个隐藏主键，因此会出现这个列。另外，每条记录的头信息（record header）里都有一个专门的 bit（deleted_flag）来表示当前记录是否已经被删除。")])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("补充")]),t._v(" "),a("p",[t._v("insert undo log 只在事务回滚时需要，事务提交就可以删掉了。")]),t._v(" "),a("p",[t._v("update undo log 包括 update 和 delete，回滚和快照读都需要。")]),t._v(" "),a("p",[a("strong",[t._v("MVCC 解决幻读的原理：")])]),t._v(" "),a("ol",[a("li",[t._v("其实它是用来替代行锁的，进一步提升并发能力")]),t._v(" "),a("li",[t._v("InnoDB 的 MVCC，是通过在每行记录后面保存两个隐藏的列 "),a("strong",[t._v("DB_TRX_ID")]),t._v(" 和 "),a("strong",[t._v("DB_ROLL_PTR")]),t._v(" 来实现的，它们是自动加上的，程序无法控制；")]),t._v(" "),a("li",[t._v("MVCC 把一个个事务都隔离开来，自己玩自己的 CURD，在最后提交到数据库时再比较版本号；")]),t._v(" "),a("li",[t._v("不会读取事务版本号大于当前事务 ID 的数据，顺便解决了幻读问题；")]),t._v(" "),a("li",[t._v("主要解决的是写时加锁不能读的问题，但并没有解决写并发的问题。")])])]),t._v(" "),a("h2",{attrs:{id:"_8-5-innodb-可重复读隔离级别下如何避免幻读"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_8-5-innodb-可重复读隔离级别下如何避免幻读"}},[t._v("#")]),t._v(" 8.5  InnoDB 可重复读隔离级别下如何避免幻读")]),t._v(" "),a("ul",[a("li",[t._v("表现：快照读（非阻塞读） —— MVCC")]),t._v(" "),a("li",[t._v("内在：next-key 锁（行锁 + gap 锁）")])]),t._v(" "),a("Vssue")],1)}),[],!1,null,null,null);e.default=_.exports}}]);
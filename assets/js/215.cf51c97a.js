(window.webpackJsonp=window.webpackJsonp||[]).push([[215],{625:function(v,_,o){"use strict";o.r(_);var l=o(47),e=Object(l.a)({},(function(){var v=this,_=v.$createElement,o=v._self._c||_;return o("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[o("h1",{attrs:{id:"九、日志模块"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#九、日志模块"}},[v._v("#")]),v._v(" 九、日志模块")]),v._v(" "),o("div",{staticClass:"custom-block tip"},[o("p",{staticClass:"custom-block-title"},[v._v("总结")]),v._v(" "),o("ul",[o("li",[v._v("bin log：记录数据库表结构和表数据的变更。")]),v._v(" "),o("li",[v._v("undo log：记录数据的反向操作，如 insert 操作就记一条 delete 日志。")]),v._v(" "),o("li",[v._v("redo log：记录事务（所以 InnoDB 特有）对数据页的修改。")])])]),v._v(" "),o("h2",{attrs:{id:"_1-bin-log"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_1-bin-log"}},[v._v("#")]),v._v(" 1. bin log")]),v._v(" "),o("p",[o("code",[v._v("bin log")]),v._v(" "),o("strong",[v._v("记录了数据库表结构和表数据变更")]),v._v("，比如 update/delete/insert/truncate/create。它不会记录 select（因为这没有对表没有进行变更）。")]),v._v(" "),o("p",[v._v("主要有两个作用： 复制和恢复数据")]),v._v(" "),o("ul",[o("li",[v._v("MySQL 在公司使用的时候往往都是一主多从结构的，从服务器需要与主服务器的数据保持一致，这就是通过 "),o("code",[v._v("bin log")]),v._v(" 来实现的")]),v._v(" "),o("li",[v._v("数据库的数据被干掉了，我们可以通过 "),o("code",[v._v("bin log")]),v._v(" 来对数据进行恢复。")])]),v._v(" "),o("p",[v._v("因为 "),o("code",[v._v("bin log")]),v._v(" 记录了数据库表的变更，所以我们可以用 "),o("code",[v._v("bin log")]),v._v(" 进行复制（主从复制）和恢复数据。")]),v._v(" "),o("h2",{attrs:{id:"_2-undo-log"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_2-undo-log"}},[v._v("#")]),v._v(" 2. undo log")]),v._v(" "),o("p",[v._v("数据库事务四大特性中有一个是 "),o("strong",[v._v("原子性")]),v._v(" ，具体来说就是 "),o("strong",[v._v("原子性是指对数据库的一系列操作，要么全部成功，要么全部失败，不可能出现部分成功的情况")]),v._v("。")]),v._v(" "),o("p",[v._v("实际上， "),o("strong",[v._v("原子性")]),v._v(" 底层就是通过 "),o("code",[v._v("undo log")]),v._v(" 实现的。"),o("code",[v._v("undo log")]),v._v("主要 **记录了数据的逻辑变化，比如一条 "),o("code",[v._v("INSERT")]),v._v(" 语句，对应一条"),o("code",[v._v("DELETE")]),v._v(" 的 "),o("code",[v._v("undo log")]),v._v(" **，对于每个 "),o("code",[v._v("UPDATE")]),v._v(" 语句，对应一条相反的 "),o("code",[v._v("UPDATE")]),v._v(" 的 "),o("code",[v._v("undo log")]),v._v(" ，这样在发生错误时，就能回滚到事务之前的数据状态。")]),v._v(" "),o("p",[v._v("同时， "),o("code",[v._v("undo log")]),v._v(" 也是 "),o("code",[v._v("MVCC")]),v._v("(多版本并发控制)实现的关键。")]),v._v(" "),o("h2",{attrs:{id:"_3-redo-log"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_3-redo-log"}},[v._v("#")]),v._v(" 3. redo log")]),v._v(" "),o("p",[v._v("事务的四大特性里面有一个是 "),o("strong",[v._v("持久性")]),v._v(" ，具体来说就是"),o("strong",[v._v("只要事务提交成功，那么对数据库做的修改就被永久保存下来了，不可能因为任何原因再回到原来的状态")]),v._v(" 。")]),v._v(" "),o("p",[v._v("因此 "),o("code",[v._v("mysql")]),v._v(" 设计了 "),o("code",[v._v("redo log")]),v._v(" ， "),o("strong",[v._v("具体来说就是只记录事务对数据页做了哪些修改")]),v._v("，这样就能完美地解决性能问题了（相对而言文件更小并且是顺序 IO）。")]),v._v(" "),o("p",[o("code",[v._v("redo log")]),v._v(" 是 MySQL 的 InnoDB 引擎所产生的。bin log 无论 MySQL 用什么引擎，都会有的。"),o("code",[v._v("redo log")]),v._v(" 事务开始的时候，就开始记录每次的变更信息，而 bin log 是在事务提交的时候才记录。")]),v._v(" "),o("ul",[o("li",[v._v("如果写 "),o("code",[v._v("redo log")]),v._v(" 失败了，那我们就认为这次事务有问题，回滚，不再写  bin log。")]),v._v(" "),o("li",[v._v("如果写 "),o("code",[v._v("redo log")]),v._v(" 成功了，写 bin log。\n"),o("ul",[o("li",[v._v("写 bin log 写一半了，但失败了怎么办？我们还是会对这次的事务回滚，将无效的 bin log 给删除（因为 bin log 会影响从库的数据，所以需要做删除操作）。")]),v._v(" "),o("li",[v._v("如果写 "),o("code",[v._v("redo log")]),v._v(" 和 bin log 都成功了，那这次算是事务才会真正成功。")])])])]),v._v(" "),o("div",{staticClass:"custom-block tip"},[o("p",{staticClass:"custom-block-title"},[v._v("MySQL 如何保证 redo log 和 bin log 的数据是一致的？")]),v._v(" "),o("p",[v._v("MySQL 通过两阶段提交来保证 redo log 和 bin log 的数据是一致的。")]),v._v(" "),o("p",[o("img",{attrs:{src:"https://tva1.sinaimg.cn/large/008i3skNly1gt639r2lkdj30ic09ot8y.jpg",alt:"img"}})]),v._v(" "),o("p",[v._v("过程：")]),v._v(" "),o("ul",[o("li",[v._v("阶段1：InnoDB redo log 写盘，InnoDB 事务进入 prepare 状态")]),v._v(" "),o("li",[v._v("阶段2：bin log 写盘，InooDB 事务进入 commit 状态")])]),v._v(" "),o("p",[v._v("每个事务 bin log 的末尾，会记录一个 XID event，标志着事务是否提交成功：")]),v._v(" "),o("ul",[o("li",[v._v("XID event 存在：事务成功，提交")]),v._v(" "),o("li",[v._v("XID event 不存在：事务失败，回滚")])]),v._v(" "),o("p",[v._v("也就是说，恢复过程中，bin log 最后一个 XID event 之后的内容都应该被 purge（清除）。")])]),v._v(" "),o("Vssue")],1)}),[],!1,null,null,null);_.default=e.exports}}]);
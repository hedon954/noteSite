(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{469:function(t,e,a){"use strict";a.r(e);var _=a(47),v=Object(_.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"_8-事务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_8-事务"}},[t._v("#")]),t._v(" 8. 事务")]),t._v(" "),a("h2",{attrs:{id:"_8-1-事务的隔离性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_8-1-事务的隔离性"}},[t._v("#")]),t._v(" 8.1 事务的隔离性")]),t._v(" "),a("blockquote",[a("p",[t._v("多事务操作之间不会产生影响。")])]),t._v(" "),a("h2",{attrs:{id:"_8-2-三个读问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_8-2-三个读问题"}},[t._v("#")]),t._v(" 8.2 三个读问题")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("脏读")]),t._v(" "),a("blockquote",[a("p",[t._v("一个未提交的事务读取到另一个未提交的事务的数据。")])]),t._v(" "),a("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://tva1.sinaimg.cn/large/007S8ZIlly1gisk54jkwaj31100f4jtb.jpg",alt:"image-20200916161119710"}}),t._v(" "),a("p",[t._v("如上：东方不败想从5000改到100，而岳不群想从5000改到60000。这个时候岳不群先改了，然后东方不败读取到数据已经改成60000了，所以东方不败就会继续在60000的基础上进行修改。但是这个时候，岳不群的事务并没有进行提交，而且进行了事务回滚，所以真实的数据现在还是5000，而东方不败操作的数据是60000。这就叫脏读。")])]),t._v(" "),a("li",[a("p",[t._v("不可重复读")]),t._v(" "),a("blockquote",[a("p",[t._v("一个未提交事务读取到另一提交事务修改数据。")])]),t._v(" "),a("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://tva1.sinaimg.cn/large/007S8ZIlly1gisk7c34ukj30wc0ecgnf.jpg",alt:"image-20200916161326921"}}),t._v(" "),a("p",[t._v("如上：东方不败先读取到数据是5000，想对数据进行操作，但是这个时候岳不群已经将数据改成900了。而东方不败又检测到了数据已经改成900了，读两次，数据不一致，这就是不可重复读（因为不知道再读的话是不是又会不一样了）。")])]),t._v(" "),a("li",[a("p",[t._v("虚（幻）读")]),t._v(" "),a("blockquote",[a("p",[t._v("一个未提交事务读取到另一提交事务增加的数据。")])]),t._v(" "),a("p",[t._v("如：本来该事务只修改了 3 条数据，这个时候另外一个事务 insert 了一条新的数据，就变成修改了 4 条数据了。")])])]),t._v(" "),a("h2",{attrs:{id:"_8-3-解决读问题-设置事务的隔离性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_8-3-解决读问题-设置事务的隔离性"}},[t._v("#")]),t._v(" 8.3 解决读问题 —— 设置事务的隔离性")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("isolation 属性值")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("意思")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("脏读")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("不可重复读")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("虚读")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("作用")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("READ UNCOMMITTED")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("读未提交")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("有")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("有")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("有")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("效率高，但是啥也避免不了")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("READ COMMITTED")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("读已提交")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("无")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("有")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("有")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("常用，可避免脏读")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("REPEATABLE READ")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("可重复读")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("无")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("无")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("有")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("可以用在非 insert 方法上")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("SERIALIZABLE")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("串行化")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("无")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("无")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("无")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("三个问题都解决了，但效率低")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("DEFAULT")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("使用数据库默认")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("MySQL 的话就是 REPEATABLE READ"),a("br"),t._v("Oracle 的话就是 READ COMMITTED")])])])]),t._v(" "),a("h2",{attrs:{id:"_8-4-当前读-快照读"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_8-4-当前读-快照读"}},[t._v("#")]),t._v(" 8.4 当前读/快照读")]),t._v(" "),a("h3",{attrs:{id:"当前读"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#当前读"}},[t._v("#")]),t._v(" 当前读")]),t._v(" "),a("blockquote",[a("p",[t._v("当前读, 读取的是最新版本, 并且对读取的记录加锁, 阻塞其他事务同时改动相同记录，避免出现安全问题。")])]),t._v(" "),a("p",[t._v("select...lock in share mode (共享读锁)\nselect...for update\nupdate , delete , insert")]),t._v(" "),a("p",[t._v("例如，假设要 update 一条记录，但是另一个事务已经 delete 这条数据并且 commit 了，如果不加锁就会产生冲突。所以update的时候肯定要是当前读，得到最新的信息并且锁定相应的记录。")]),t._v(" "),a("h3",{attrs:{id:"快照读"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#快照读"}},[t._v("#")]),t._v(" 快照读")]),t._v(" "),a("h2",{attrs:{id:"_8-5-innodb-可重复读隔离级别下如何避免幻读"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_8-5-innodb-可重复读隔离级别下如何避免幻读"}},[t._v("#")]),t._v(" 8.5  InnoDB 可重复读隔离级别下如何避免幻读")]),t._v(" "),a("ul",[a("li",[t._v("表现：快照读（非阻塞读） —— MVCC")]),t._v(" "),a("li",[t._v("内在：next-key 锁（行锁 + gap 锁）")])]),t._v(" "),a("Vssue")],1)}),[],!1,null,null,null);e.default=v.exports}}]);
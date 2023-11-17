(window.webpackJsonp=window.webpackJsonp||[]).push([[107],{517:function(t,s,a){"use strict";a.r(s);var e=a(47),r=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"_7-sql-优化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_7-sql-优化"}},[t._v("#")]),t._v(" 7. SQL 优化")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("总结")]),t._v(" "),a("ol",[a("li",[t._v("慢日志查询慢 SQL / 数据库实时监控长时间运行的 SQL。")]),t._v(" "),a("li",[t._v("使用 explain 工具分析 SQL。")]),t._v(" "),a("li",[t._v("修改 SQL，让 SQL 尽可能走索引。")]),t._v(" "),a("li",[t._v("垂直切分/水平切分。")])])]),t._v(" "),a("h2",{attrs:{id:"_7-1-通过慢查询日志发现问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_7-1-通过慢查询日志发现问题"}},[t._v("#")]),t._v(" 7.1 通过慢查询日志发现问题")]),t._v(" "),a("h3",{attrs:{id:"_7-1-1-配置-mysql-慢查询日志"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_7-1-1-配置-mysql-慢查询日志"}},[t._v("#")]),t._v(" 7.1.1 配置 MySQL 慢查询日志")]),t._v(" "),a("blockquote",[a("p",[t._v("默认情况下不开启。")])]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 启动")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SET")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("global")]),t._v(" slow_query_log "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ON")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("OFF")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 指定慢查询日志存放位置（可不配置）")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SET")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("global")]),t._v(" slow_query_log_file "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("sql_log"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("showlog"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("log"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 指定“慢”的条件")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SET")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("global")]),t._v(" long_query_time "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" xx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("xxx秒"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 指定要记录所有未使用索引的 SQL")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SET")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("global")]),t._v(" log_queries_not_using_indexes "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ON")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("OFF")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h3",{attrs:{id:"_7-1-2-分析-mysql-慢查询日志"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_7-1-2-分析-mysql-慢查询日志"}},[t._v("#")]),t._v(" 7.1.2 分析 MySQL 慢查询日志")]),t._v(" "),a("h4",{attrs:{id:"mysql-官方分析工具"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mysql-官方分析工具"}},[t._v("#")]),t._v(" MySQL 官方分析工具")]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[t._v("mysqldumpslow "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("option")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("logs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h4",{attrs:{id:"第三方工具-percona-toolkit"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#第三方工具-percona-toolkit"}},[t._v("#")]),t._v(" 第三方工具 Percona Toolkit")]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[t._v("pt"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("query"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("digest "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("OPTION")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("FILES"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("DSN"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h2",{attrs:{id:"_7-2-实时监控-sql-情况"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_7-2-实时监控-sql-情况"}},[t._v("#")]),t._v(" 7.2 实时监控 SQL 情况")]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("user")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("host"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("DB"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("command"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("time")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("state"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("info\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" information_schema"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("PROCESSLIST\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WHERE")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TIME")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("60")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#毫秒")]),t._v("\n")])])]),a("h2",{attrs:{id:"_7-3-分析-sql-执行计划"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_7-3-分析-sql-执行计划"}},[t._v("#")]),t._v(" 7.3 分析 SQL 执行计划")]),t._v(" "),a("h3",{attrs:{id:"_7-3-1-为什么要关注执行计划"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_7-3-1-为什么要关注执行计划"}},[t._v("#")]),t._v(" 7.3.1 为什么要关注执行计划")]),t._v(" "),a("ul",[a("li",[t._v("了解 SQL 如何访问表中的数据。")]),t._v(" "),a("li",[t._v("了解 SQL 如何使用表中的索引。")]),t._v(" "),a("li",[t._v("了解 SQL 所使用的查询类型。")])]),t._v(" "),a("h3",{attrs:{id:"_7-3-2-explain-获取执行计划"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_7-3-2-explain-获取执行计划"}},[t._v("#")]),t._v(" 7.3.2 EXPLAIN 获取执行计划")]),t._v(" "),a("p",[t._v("可以使用 explain 工具获取执行计划")]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("EXPLAIN")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# connection_id 就是用前面实时监控的 PROCESSLIST 中的 connection_id")]),t._v("\n\t{explainable_stmt "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FOR")]),t._v(" CONNECTION connection_id}  \n  explainable_stmt:{\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" statement "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DELETE")]),t._v(" statement "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("INSERT")]),t._v(" statement "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("UPDATE")]),t._v(" statement "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("REPLACE")]),t._v(" statement\n  }\n")])])]),a("p",[t._v("举例：")]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("EXPLAIN")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" class_id "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" imc_course\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WHERE")]),t._v(" class_id "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("IN")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" class_id "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" imc_user"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h3",{attrs:{id:"_7-3-3-分析思路"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_7-3-3-分析思路"}},[t._v("#")]),t._v(" 7.3.3 分析思路")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://hedonspace.oss-cn-beijing.aliyuncs.com/img2/008eGmZEgy1gozsfj5tcyj31qi0p8wrj.jpg",alt:"image-20210328181904459"}})]),t._v(" "),a("h4",{attrs:{id:"id"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#id"}},[t._v("#")]),t._v(" id")]),t._v(" "),a("p",[t._v("id 可以认为是查询序列号，每一个 id 代表一个 select，一组相同的 id 可以认为是一个查询里分开进行的几步（如关联查询），解析顺序在 explain 生成表中由上至下顺序解析，不同的 id 代表不同子查询，id 越大优先级越高，越先被解析。")]),t._v(" "),a("ul",[a("li",[t._v("ID 相同时由上到下执行，我们应该由上至下来分析")]),t._v(" "),a("li",[t._v("ID 不同时，由大到小执行，我们应该由大到小来分析。")])]),t._v(" "),a("h4",{attrs:{id:"select-type"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#select-type"}},[t._v("#")]),t._v(" select_type")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("值")]),t._v(" "),a("th",[t._v("含义")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("SIMPLE")]),t._v(" "),a("td",[t._v("简单查询，不包含子查询或是 UNION 操作的查询。")])]),t._v(" "),a("tr",[a("td",[t._v("PRIMARY")]),t._v(" "),a("td",[t._v("查询中如果包含任何子查询，那么最外层的查询则被标记位 PRIMARY。")])]),t._v(" "),a("tr",[a("td",[t._v("SUBQUERY")]),t._v(" "),a("td",[t._v("SELECT 列表中的子查询。")])]),t._v(" "),a("tr",[a("td",[t._v("DEPENDENT SUBQUERY")]),t._v(" "),a("td",[t._v("依赖外部结果的子查询。")])]),t._v(" "),a("tr",[a("td",[t._v("UNION")]),t._v(" "),a("td",[t._v("union 操作的第二个或是之后的查询的值为 UNION。")])]),t._v(" "),a("tr",[a("td",[t._v("DEPENDENT UNION")]),t._v(" "),a("td",[t._v("当 union 作为子查询时，第二或是第二个后的查询就为 DEPENDENT UNION。")])]),t._v(" "),a("tr",[a("td",[t._v("UNION RESULT")]),t._v(" "),a("td",[t._v("UNION 产生的结果集。")])]),t._v(" "),a("tr",[a("td",[t._v("DERIVED")]),t._v(" "),a("td",[t._v("出现在 FROM 子句中的子查询。")])])])]),t._v(" "),a("h4",{attrs:{id:"table"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#table"}},[t._v("#")]),t._v(" table")]),t._v(" "),a("ul",[a("li",[t._v("表明")]),t._v(" "),a("li",[t._v("表别名")]),t._v(" "),a("li",[t._v("<union[查询ID],[查询ID]...>")])]),t._v(" "),a("h4",{attrs:{id:"partitions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#partitions"}},[t._v("#")]),t._v(" partitions")]),t._v(" "),a("ul",[a("li",[t._v("对于分区表，显示查询的分区ID。")]),t._v(" "),a("li",[t._v("没有分区的话，默认为 NULL。")])]),t._v(" "),a("h4",{attrs:{id:"type"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#type"}},[t._v("#")]),t._v(" type")]),t._v(" "),a("p",[t._v("type表示 MySQL 访问数据方式。")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("性能")]),t._v(" "),a("th",[t._v("值")]),t._v(" "),a("th",[t._v("含义")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("高")]),t._v(" "),a("td",[t._v("system")]),t._v(" "),a("td",[t._v("这是 const 联接类型的一个特例，当查询的表只有一行时使用。")])]),t._v(" "),a("tr",[a("td"),t._v(" "),a("td",[t._v("const")]),t._v(" "),a("td",[t._v("表中有且只有一个匹配的行时使用，如对主线或是唯一索引的查询，这是效率最高的联接方式。")])]),t._v(" "),a("tr",[a("td"),t._v(" "),a("td",[t._v("eq_ref")]),t._v(" "),a("td",[t._v("唯一键或主键索引查找，对于每个索引键，表中只有一条记录与之匹配。")])]),t._v(" "),a("tr",[a("td"),t._v(" "),a("td",[t._v("ref")]),t._v(" "),a("td",[t._v("非唯一索引查找，返回匹配某个单独值的所有行。")])]),t._v(" "),a("tr",[a("td"),t._v(" "),a("td",[t._v("ref_or_null")]),t._v(" "),a("td",[t._v("类似于 ref 类型的查询，但是附加了对 NULL 值列的查询。")])]),t._v(" "),a("tr",[a("td"),t._v(" "),a("td",[t._v("index_merge")]),t._v(" "),a("td",[t._v("表示使用了索引合并优化方法。")])]),t._v(" "),a("tr",[a("td"),t._v(" "),a("td",[t._v("range")]),t._v(" "),a("td",[t._v("索引范围查找，常见于 between、>、< 这样的查询条件。")])]),t._v(" "),a("tr",[a("td"),t._v(" "),a("td",[t._v("index")]),t._v(" "),a("td",[t._v("FULL index Scan 全索引查找，同 ALL 的区别是：遍历的是索引树。")])]),t._v(" "),a("tr",[a("td",[t._v("低")]),t._v(" "),a("td",[t._v("All")]),t._v(" "),a("td",[t._v("FULL TABLE Scan 全表扫描，效率最差。")])])])]),t._v(" "),a("h4",{attrs:{id:"possible-keys"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#possible-keys"}},[t._v("#")]),t._v(" possible_keys")]),t._v(" "),a("p",[t._v("指出 MySQL 在查询中可能会使用的索引，但不一定会使用，MySQL 会根据统计信息选出代价最小的索引。代价一般指找到所需的行记录所需要查询的页数量（并不是行数量，因为 MySQL 以页为基本单位，可能会出现行数较少，但是需要 I/O 的页却较多的情况），页的数量越多代价越大，性能也就越差。")]),t._v(" "),a("h4",{attrs:{id:"key"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#key"}},[t._v("#")]),t._v(" key")]),t._v(" "),a("p",[t._v("在查询中实际使用的索引，若没有使用则显示 NULL。根据官方文档，key 中实际使用的索引可能并不会在 possible_keys 中出现，当某个索引是需要查找的列的覆盖索引，且 MySQL 找不到更好的索引去查询时，会使用该索引进行索引全表扫描，虽然比较慢，但总比普通的全表扫描，且需要随机磁盘I/O好得多。")]),t._v(" "),a("h4",{attrs:{id:"key-len"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#key-len"}},[t._v("#")]),t._v(" key_len")]),t._v(" "),a("p",[t._v("表示使用的索引在表定义中的长度，比如 film 表中主键为 smallint，则为 2，language_id 为 tinyint 则为1，若没有使用索引，则为NULL。通过 key_len 可以知道复合索引中的那几列在查询中使用了。")]),t._v(" "),a("p",[t._v("所以我们定义的索引列的长度最好是刚好能满足需求的长度，这样可以减少索引长度。")]),t._v(" "),a("h4",{attrs:{id:"ref"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ref"}},[t._v("#")]),t._v(" ref")]),t._v(" "),a("p",[t._v("指出哪些列或常量被用于索引查找。")]),t._v(" "),a("p",[t._v("如果是使用的常数等值查询，这里会显示 const，如果是连接查询，被驱动表的执行计划这里会显示驱动表的关联字段，如果是条件使用了表达式或者函数，或者条件列发生了内部隐式转换，这里可能显示为 func。")]),t._v(" "),a("h4",{attrs:{id:"rows"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rows"}},[t._v("#")]),t._v(" rows")]),t._v(" "),a("p",[t._v("表示优化器认为需要扫描多少行才能得到目标结果。对于 InnoDB 来说这是一个估计值，InnoDB 并不知道一页中有多少行数据，因而优化器会通过随机读取一些页求平均值来估计行数。")]),t._v(" "),a("h4",{attrs:{id:"filtered"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#filtered"}},[t._v("#")]),t._v(" filtered")]),t._v(" "),a("p",[t._v("表示 MySQL 预估的返回的数据集的行数占其扫描的行数的百分比。")]),t._v(" "),a("h4",{attrs:{id:"extra"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#extra"}},[t._v("#")]),t._v(" Extra")]),t._v(" "),a("p",[t._v("这是 MySQL 认为很关键，但是又不应该出现在前面所述字段的信息。")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("值")]),t._v(" "),a("th",[t._v("说明")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("Distinct")]),t._v(" "),a("td",[t._v("优化 distinct 操作，在找到第一匹配的元素后即停止找同样值的动作。")])]),t._v(" "),a("tr",[a("td",[t._v("Not exists")]),t._v(" "),a("td",[t._v("使用  not exists 来优化查询。MySQL 能够从一个查询中使用一个 left join 优化，当从该表中找到一行数据与已找出数据行对应，则不再查找更多行。")])]),t._v(" "),a("tr",[a("td",[t._v("Using filesort")]),t._v(" "),a("td",[t._v("当排序不能使用索引时出现，需要产生临时表进行排序。"),a("br"),t._v("当临时表较小时，存储在内存中用快速排序进行排序，当临时表较大时则分段存储在硬盘中，每段快速排序，然后在内存中合并排序。"),a("br"),t._v("排序算法有两种，一种排序时仅用需要排序的字段，这样可以存储更多的行在内存中，但缺点是需要两次传输；一种是排序时把所有列都传输过来，只需要一次传输，但内存消耗较大。"),a("br"),t._v("当查询所有列长度不超过 max_length_for_sort_data 时用单次传输排序，超过则两次传输排序。"),a("br"),t._v("长用在 order by、group by、limit 查询中。")])]),t._v(" "),a("tr",[a("td",[t._v("Using index")]),t._v(" "),a("td",[t._v("获取查询所需列仅需要从索引中即可获取，不需要从磁盘中 I/O 获取。即使用了覆盖索引，可以大大减少 I/O 所消耗的时间，提高效率。对于 InnoDB 来说，次级索引可以由此获益，从而可以不用多查询一次主键索引表。")])]),t._v(" "),a("tr",[a("td",[t._v("Using temporary")]),t._v(" "),a("td",[t._v("MySQL 需要使用临时表来处理查询，常见于排序、子查询和分组查询。")])]),t._v(" "),a("tr",[a("td",[t._v("Using where")]),t._v(" "),a("td",[t._v("需要在 MySQL 服务器层使用 WHERE 条件来过滤数据。")])]),t._v(" "),a("tr",[a("td",[t._v("select tables optimized away")]),t._v(" "),a("td",[t._v("直接通过索引来获得数据，不用访问表。")])]),t._v(" "),a("tr",[a("td",[t._v("constrow not found")]),t._v(" "),a("td",[t._v("当所查找的表为空时出现。")])]),t._v(" "),a("tr",[a("td",[t._v("impossiblewhere")]),t._v(" "),a("td",[t._v("当 WHERE 条件不可能发生时出现。")])]),t._v(" "),a("tr",[a("td",[t._v("deletingall rows")]),t._v(" "),a("td",[t._v("某些引擎支持一种更快的删除所有行记录的方法，比如 MyISAM引擎表，我猜是因为 MyISAM 将数据单独放在一个文件的原因。")])]),t._v(" "),a("tr",[a("td",[t._v("impossiblehaving")]),t._v(" "),a("td",[t._v("类似 impossible where。having 条件过滤没有结果，或者始终宣布出任何列（直接返回已有查询的结果集）。")])]),t._v(" "),a("tr",[a("td",[t._v("loosescan")]),t._v(" "),a("td",[t._v("半连接优化的 loosescan 机制被启用。loosescan 子查询中的字段作为一个索引且外部 select 语句可以与很多的内部 select 记录相匹配，从而便有通过索引堆记录进行分组的效果。")])]),t._v(" "),a("tr",[a("td",[t._v("notable used")]),t._v(" "),a("td",[t._v("查询只有一个from dual，没有真实表的from条件。")])]),t._v(" "),a("tr",[a("td",[t._v("usingMRR")]),t._v(" "),a("td",[t._v("优化器通过 MRR（Multi-Range ReadOptimization）算法读取表数据。MRR 通过将随机 I/O 转换为顺序 I/O 以降低查询过程中的 I/O 开销。对于次级索引，先将次级索引表得到的次级索引和主键的结果集根据主键排序，然后在主键索引表中访问时就变成了顺序I/O。")])])])]),t._v(" "),a("h2",{attrs:{id:"_7-4-优化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_7-4-优化"}},[t._v("#")]),t._v(" 7.4 优化")]),t._v(" "),a("h3",{attrs:{id:"_7-4-1-优化索引"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_7-4-1-优化索引"}},[t._v("#")]),t._v(" 7.4.1 优化索引")]),t._v(" "),a("h4",{attrs:{id:"_1-应该在哪些列上建立索引"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-应该在哪些列上建立索引"}},[t._v("#")]),t._v(" ① 应该在哪些列上建立索引")]),t._v(" "),a("blockquote",[a("p",[t._v("筛选性越强的，越排在前面。")])]),t._v(" "),a("ul",[a("li",[t._v("WHERE 字句中的列。")]),t._v(" "),a("li",[t._v("ORDER BY，GROUP BY，DISTINCT 中的字段。")]),t._v(" "),a("li",[t._v("多表 JOIN 的关联列。")])]),t._v(" "),a("p",[a("strong",[t._v("示例：查询出2019年1月1号以后注册的男性会员的昵称。（"),a("font",{attrs:{color:"pink"}},[t._v("显然日期的筛选性要比性别更好")]),t._v("）")],1)]),t._v(" "),a("ul",[a("li",[a("p",[t._v("没建立索引：")]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" user_nick\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" imc_user\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WHERE")]),t._v(" sex "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("AND")]),t._v(" reg_time "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'2019-01-01'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("总共查询了 2530 行。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://hedonspace.oss-cn-beijing.aliyuncs.com/img2/008eGmZEgy1gp1xpmyq1pj319s04amya.jpg",alt:"image-20210330145254569"}})])]),t._v(" "),a("li",[a("p",[t._v("建立索引：index_sex_regtime")]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ALTER")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TABLE")]),t._v(" imc_user "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ADD")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("INDEX")]),t._v(" idx_sex_regtime "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("sex"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("reg_time"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("总共查了 2530 行，根本没作用。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://hedonspace.oss-cn-beijing.aliyuncs.com/img2/008eGmZEgy1gp1xyotuosj31ak02yjs5.jpg",alt:"image-20210330150136660"}})])]),t._v(" "),a("li",[a("p",[t._v("建立索引：index_regtime_sex")]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 先删除之前的索引")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ALTER")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TABLE")]),t._v(" imc_user "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DROP")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("INDEX")]),t._v(" idx_sex_regtime"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 再建立新的索引")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ALTER")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TABLE")]),t._v(" imc_user "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ADD")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("INDEX")]),t._v(" idx_regtime_sex "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("reg_time"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("sex"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("总共查了 516 行，效果好了很多。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://hedonspace.oss-cn-beijing.aliyuncs.com/img2/008eGmZEgy1gp1xufqknqj31do02e3za.jpg",alt:"image-20210330145731615"}})])])]),t._v(" "),a("h4",{attrs:{id:"_2-如何选择复合索引键的顺序"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-如何选择复合索引键的顺序"}},[t._v("#")]),t._v(" ② 如何选择复合索引键的顺序")]),t._v(" "),a("ul",[a("li",[t._v("区分度最高的列放在最左侧。")]),t._v(" "),a("li",[t._v("使用频率最多的列放在最左侧。")]),t._v(" "),a("li",[t._v("占用空间最小的列放在最左侧。")])]),t._v(" "),a("h4",{attrs:{id:"_3-索引使用的误区"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-索引使用的误区"}},[t._v("#")]),t._v(" ③ 索引使用的误区")]),t._v(" "),a("ul",[a("li",[t._v("索引越多越好❌")]),t._v(" "),a("li",[t._v("使用 IN 列表查询不能使用索引❌")]),t._v(" "),a("li",[t._v("查询过滤条件顺序必须跟索引顺序一样❌")])]),t._v(" "),a("h3",{attrs:{id:"_7-4-2-改写-sql"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_7-4-2-改写-sql"}},[t._v("#")]),t._v(" 7.4.2 改写 SQL")]),t._v(" "),a("h4",{attrs:{id:"_1-改写原则"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-改写原则"}},[t._v("#")]),t._v(" ① 改写原则")]),t._v(" "),a("ul",[a("li",[t._v("使用 outer join 代替 not in（这样可以走索引）。")]),t._v(" "),a("li",[t._v("使用 CTE 代替子查询。")]),t._v(" "),a("li",[t._v("拆分复杂的大 SQL 为多个简单的小 SQL。")])]),t._v(" "),a("h4",{attrs:{id:"_2-巧用计算列优化查询"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-巧用计算列优化查询"}},[t._v("#")]),t._v(" ② 巧用计算列优化查询")]),t._v(" "),a("p",[a("strong",[t._v("示例：查询对于内容、逻辑、难度三项评分之和大于28分的用户评分。")])]),t._v(" "),a("ul",[a("li",[a("p",[t._v("没建索引")]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("explain")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" imc_classvalue\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WHERE")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("content_score "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" level_score "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" logic_score"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("28")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[a("img",{attrs:{src:"https://hedonspace.oss-cn-beijing.aliyuncs.com/img2/008eGmZEgy1gp1z73vd7ej31ay04cmya.jpg",alt:"image-20210330154417889"}})])]),t._v(" "),a("li",[a("p",[t._v("建索引：idx_content_level_logic，发现索引是无效的。")]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ALTER")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TABLE")]),t._v(" imc_classvalue "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ADD")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("INDEX")]),t._v(" idx_content_level_logic "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("content_score"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("level_score"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("logic_score"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("explain")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" imc_classvalue\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WHERE")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("content_score "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" level_score "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" logic_score"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("28")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[a("img",{attrs:{src:"https://hedonspace.oss-cn-beijing.aliyuncs.com/img2/008eGmZEgy1gp1z8jplj2j31jc0543zw.jpg",alt:"image-20210330154541728"}})])]),t._v(" "),a("li",[a("p",[t._v("新加一个字段，表示这三项之和，然后再在这个字段建索引。这样就只需要查询 51 行了。")]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 先删除之前的索引")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ALTER")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TABLE")]),t._v(" imc_classvalue "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DROP")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("INDEX")]),t._v(" idx_content_level_logic"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 加新字段")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ALTER")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TABLE")]),t._v(" imc_classvalue\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ADD")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("COLUMN")]),t._v(" total_score "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DECIMAL")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("AS")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("content_score "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" level_score "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" logic_score"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 在新字段上建索引")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ALTER")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TABLE")]),t._v(" imc_classvalue "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ADD")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("INDEX")]),t._v(" idx_total_score"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("total_score"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("explain")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" imc_classvalue\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WHERE")]),t._v(" total_score "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("28")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[a("img",{attrs:{src:"https://hedonspace.oss-cn-beijing.aliyuncs.com/img2/008eGmZEgy1gp1zbiy8jbj31hu04cq47.jpg",alt:"image-20210330154833512"}})])])]),t._v(" "),a("Vssue")],1)}),[],!1,null,null,null);s.default=r.exports}}]);
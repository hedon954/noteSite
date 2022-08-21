(window.webpackJsonp=window.webpackJsonp||[]).push([[96],{506:function(s,t,a){"use strict";a.r(t);var n=a(47),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"_5-clickhouse-sql-操作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-clickhouse-sql-操作"}},[s._v("#")]),s._v(" 5. ClickHouse SQL 操作")]),s._v(" "),a("p",[s._v("ClickHouse 的 SQL 语法与标准 SQL 非常相似，本文着重记录与标准 SQL 不一致的地方。")]),s._v(" "),a("h2",{attrs:{id:"_5-1-insert"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-1-insert"}},[s._v("#")]),s._v(" 5.1 Insert")]),s._v(" "),a("p",[s._v("基本与标准 SQL（MySQL）一直：")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("标准")]),s._v(" "),a("div",{staticClass:"language-SQL extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INSERT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INTO")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("table_name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("VALUES")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])])])]),s._v(" "),a("li",[a("p",[s._v("从表到表的插入")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INSERT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INTO")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("table_name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("c "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("table_name_2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])])])])]),s._v(" "),a("h2",{attrs:{id:"_5-2-update、delete"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-2-update、delete"}},[s._v("#")]),s._v(" 5.2 Update、Delete")]),s._v(" "),a("p",[s._v("ClickHouse 提供了 Delete 和 Update 的能力，这类操作被称为 Mutation 查询，它可以看做 Alter 的一种。")]),s._v(" "),a("p",[s._v("虽然可以实现修改和删除，但是和一般的 OLTP 数据库不一样，"),a("strong",[s._v("Mutation")]),s._v(" 语句是一种很 “"),a("strong",[s._v("重")]),s._v("”的操作，而且不支持事务。")]),s._v(" "),a("p",[s._v("“重”的原因主要是每次修改或者删除都会导致放弃目标数据的原有分区，重建新分区。 所以尽量做批量的变更，不要进行频繁小数据的操作。")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("删除操作")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ALTER")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TABLE")]),s._v(" t_order_smt "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DELETE")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WHERE")]),s._v(" sku_id "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'sku_001'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])])]),s._v(" "),a("li",[a("p",[s._v("修改操作")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ALTER")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TABLE")]),s._v(" t_order_smt "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("UPDATE")]),s._v(" total_amount"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("toDecimal32"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2000.00")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WHERE")]),s._v(" id"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("102")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])])])]),s._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("注意")]),s._v(" "),a("p",[s._v("由于操作比较“重”，所以 Mutation 语句分两步执行，同步执行的部分其实只是进行新增数据新增分区和并把旧分区打上逻辑上的失效标记。直到触发分区合并的时候，才会删除旧数据释放磁盘空间，一般不会开放这样的功能给用户，由管理员完成。")])]),s._v(" "),a("h2",{attrs:{id:"_5-3-select"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-3-select"}},[s._v("#")]),s._v(" 5.3 Select")]),s._v(" "),a("p",[s._v("ClickHouse 的查询操作与标准 SQL 差别不大：")]),s._v(" "),a("ul",[a("li",[s._v("支持子查询")]),s._v(" "),a("li",[s._v("支持 CTE(Common Table Expression 公用表表达式) with 子句")]),s._v(" "),a("li",[s._v("支持各种 JOIN，但是 JOIN 操作无法使用缓存，所以即使是两次相同的 JOIN 语句，ClickHouse 也会视为两条新 SQL")]),s._v(" "),a("li",[s._v("窗口函数：https://clickhouse.com/docs/en/sql-reference/window-functions/")]),s._v(" "),a("li",[s._v("不支持自定义函数")]),s._v(" "),a("li",[s._v("GROUP BY 增加了 with rollup \\ with cube \\ with total 用来计算小计和总计")])]),s._v(" "),a("ol",[a("li",[a("p",[s._v("创建表")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CREATE")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TABLE")]),s._v(" t_order_sql\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),s._v("id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),s._v(" UInt32"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),s._v("sku_id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),s._v(" String"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),s._v("total_amount"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Decimal")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("16")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),s._v("create_time"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Datetime")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ENGINE")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" MergeTree\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("PARTITION")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("BY")]),s._v(" toYYYYMMDD"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("create_time"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("PRIMARY")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("KEY")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ORDER")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("BY")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" sku_id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])])]),s._v(" "),a("li",[a("p",[s._v("插入数据")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INSERT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INTO")]),s._v(" t_order_sql "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("VALUES")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("101")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'sku_001'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1000.00")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'2020-06-01 12:00:00'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" \n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("102")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'sku_002'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2000.00")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'2020-06-01 11:00:00'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" \n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("102")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'sku_004'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2500.00")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'2020-06-01 12:00:00'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" \n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("102")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'sku_002'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2000.00")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'2020-06-01 13:00:00'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("102")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'sku_002'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("12000.00")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'2020-06-01 13:00:00'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" \n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("102")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'sku_002'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("600.00")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'2020-06-02 12:00:00'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])])]),s._v(" "),a("li",[a("p",[s._v("查询数据")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" t_order_sql\n\nQuery id: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("17")]),s._v("e30757"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v("c74"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4734")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("9")]),s._v("f69"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("b47c288601f\n\n┌──id─┬─sku_id──┬─total_amount─┬─────────create_time─┐\n│ "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("101")]),s._v(" │ sku_001 │      "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1000.00")]),s._v(" │ "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2020")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("06")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("01")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("12")]),s._v(":"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("00")]),s._v(":"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("00")]),s._v(" │\n│ "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("102")]),s._v(" │ sku_002 │      "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2000.00")]),s._v(" │ "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2020")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("06")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("01")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("11")]),s._v(":"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("00")]),s._v(":"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("00")]),s._v(" │\n│ "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("102")]),s._v(" │ sku_002 │      "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2000.00")]),s._v(" │ "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2020")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("06")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("01")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("13")]),s._v(":"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("00")]),s._v(":"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("00")]),s._v(" │\n│ "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("102")]),s._v(" │ sku_002 │     "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("12000.00")]),s._v(" │ "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2020")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("06")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("01")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("13")]),s._v(":"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("00")]),s._v(":"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("00")]),s._v(" │\n│ "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("102")]),s._v(" │ sku_004 │      "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2500.00")]),s._v(" │ "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2020")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("06")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("01")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("12")]),s._v(":"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("00")]),s._v(":"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("00")]),s._v(" │\n└─────┴─────────┴──────────────┴─────────────────────┘\n┌──id─┬─sku_id──┬─total_amount─┬─────────create_time─┐\n│ "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("102")]),s._v(" │ sku_002 │       "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("600.00")]),s._v(" │ "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2020")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("06")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("02")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("12")]),s._v(":"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("00")]),s._v(":"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("00")]),s._v(" │\n└─────┴─────────┴──────────────┴─────────────────────┘\n\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("rows")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("in")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("set")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v(" Elapsed: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.007")]),s._v(" sec"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v(" \n")])])])]),s._v(" "),a("li",[a("p",[s._v("with rollup："),a("strong",[s._v("从右至左去掉维度进行小计")])]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" sku_id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sum")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("total_amount"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" t_order_sql "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("GROUP")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("BY")]),s._v(" id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" sku_id "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("with rollup")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),a("p",[s._v("输出：先去掉 sku_id 这个维度，再去掉 id 这个维度")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v("\n    id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    sku_id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sum")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("total_amount"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" t_order_sql\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("GROUP")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("BY")]),s._v("\n    id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    sku_id\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WITH ROLLUP")]),s._v("\n\nQuery id: dc0f6810"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),s._v("bc5"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("43")]),s._v("d1"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),s._v("fbf"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("63")]),s._v("d9554efd31\n\n┌──id─┬─sku_id──┬─"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sum")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("total_amount"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("─┐\n│ "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("102")]),s._v(" │ sku_004 │           "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2500.00")]),s._v(" │\n│ "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("102")]),s._v(" │ sku_002 │          "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("16600.00")]),s._v(" │\n│ "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("101")]),s._v(" │ sku_001 │           "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1000.00")]),s._v(" │\n└─────┴─────────┴───────────────────┘\n┌──id─┬─sku_id─┬─"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sum")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("total_amount"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("─┐\n│ "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("102")]),s._v(" │        │          "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("19100.00")]),s._v(" │\n│ "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("101")]),s._v(" │        │           "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1000.00")]),s._v(" │\n└─────┴────────┴───────────────────┘\n┌─id─┬─sku_id─┬─"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sum")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("total_amount"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("─┐\n│  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" │        │          "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("20100.00")]),s._v(" │\n└────┴────────┴───────────────────┘\n\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("rows")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("in")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("set")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v(" Elapsed: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.005")]),s._v(" sec"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v(" \n")])])])]),s._v(" "),a("li",[a("p",[s._v("with cube：从右至左去掉维度进行小计，再从左至右去掉维度进行小计")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" sku_id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sum")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("total_amount"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" t_order_sql "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("GROUP")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("BY")]),s._v(" id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" sku_id "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("with")]),s._v(" cube"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),a("p",[s._v("输出：")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v("\n    id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    sku_id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sum")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("total_amount"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" t_order_sql\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("GROUP")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("BY")]),s._v("\n    id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    sku_id\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WITH")]),s._v(" CUBE\n\nQuery id: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("843")]),s._v("d959b"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("ca2e"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v("b23"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("86")]),s._v("e2"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("70152")]),s._v("bbbf4a4\n\n┌──id─┬─sku_id──┬─"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sum")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("total_amount"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("─┐\n│ "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("102")]),s._v(" │ sku_004 │           "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2500.00")]),s._v(" │\n│ "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("102")]),s._v(" │ sku_002 │          "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("16600.00")]),s._v(" │\n│ "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("101")]),s._v(" │ sku_001 │           "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1000.00")]),s._v(" │\n└─────┴─────────┴───────────────────┘\n┌──id─┬─sku_id─┬─"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sum")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("total_amount"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("─┐\n│ "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("102")]),s._v(" │        │          "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("19100.00")]),s._v(" │\n│ "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("101")]),s._v(" │        │           "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1000.00")]),s._v(" │\n└─────┴────────┴───────────────────┘\n┌─id─┬─sku_id──┬─"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sum")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("total_amount"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("─┐\n│  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" │ sku_004 │           "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2500.00")]),s._v(" │\n│  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" │ sku_001 │           "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1000.00")]),s._v(" │\n│  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" │ sku_002 │          "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("16600.00")]),s._v(" │\n└────┴─────────┴───────────────────┘\n┌─id─┬─sku_id─┬─"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sum")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("total_amount"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("─┐\n│  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" │        │          "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("20100.00")]),s._v(" │\n└────┴────────┴───────────────────┘\n\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("9")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("rows")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("in")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("set")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v(" Elapsed: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.008")]),s._v(" sec"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v(" \n")])])])]),s._v(" "),a("li",[a("p",[s._v("with totals：只计算合计")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" sku_id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sum")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("total_amount"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" t_order_sql "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("GROUP")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("BY")]),s._v(" id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" sku_id "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("with")]),s._v(" totals"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),a("p",[s._v("输出：")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v("\n    id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    sku_id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sum")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("total_amount"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" t_order_mt\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("GROUP")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("BY")]),s._v("\n    id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    sku_id\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WITH")]),s._v(" TOTALS\n\nQuery id: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("43")]),s._v("e624e1"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("64")]),s._v("e6"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4748")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("a653"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("284")]),s._v("a99dd86bd\n\n┌──id─┬─sku_id──┬─"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sum")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("total_amount"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("─┐\n│ "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("102")]),s._v(" │ sku_004 │           "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5000.00")]),s._v(" │\n│ "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("102")]),s._v(" │ sku_002 │          "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("33200.00")]),s._v(" │\n│ "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("101")]),s._v(" │ sku_001 │           "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2000.00")]),s._v(" │\n└─────┴─────────┴───────────────────┘\n\nTotals:\n┌─id─┬─sku_id─┬─"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sum")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("total_amount"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("─┐\n│  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" │        │          "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("40200.00")]),s._v(" │\n└────┴────────┴───────────────────┘\n\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("rows")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("in")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("set")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v(" Elapsed: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.010")]),s._v(" sec"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v(" \n")])])])])]),s._v(" "),a("h2",{attrs:{id:"_5-4-alter"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-4-alter"}},[s._v("#")]),s._v(" 5.4 Alter")]),s._v(" "),a("ol",[a("li",[a("p",[s._v("新增字段")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ALTER")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TABLE")]),s._v(" tablename "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ADD")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("COLUMN")]),s._v(" newcolname String "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("after")]),s._v(" oldcolname"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])])]),s._v(" "),a("li",[a("p",[s._v("修改字段类型")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ALTER")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TABLE")]),s._v(" tablename "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("MODIFY")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("COLUMN")]),s._v(" colname String"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])])]),s._v(" "),a("li",[a("p",[s._v("删除字段")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ALTER")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TABLE")]),s._v(" tablename "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DROP")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("COLUMN")]),s._v(" colname"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])])])]),s._v(" "),a("h2",{attrs:{id:"_5-5-导出数据"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-5-导出数据"}},[s._v("#")]),s._v(" 5.5 导出数据")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("clickhouse-client --query "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"select sql"')]),s._v(" --format CSVWithNames "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$output_file_path")]),s._v("\n")])])]),a("p",[s._v("更多格式参考：https://clickhouse.com/docs/en/interfaces/formats/")]),s._v(" "),a("Vssue")],1)}),[],!1,null,null,null);t.default=e.exports}}]);
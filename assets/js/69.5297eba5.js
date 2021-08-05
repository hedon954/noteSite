(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{481:function(s,t,a){"use strict";a.r(t);var e=a(47),n=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"四、语法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#四、语法"}},[s._v("#")]),s._v(" 四、语法")]),s._v(" "),a("blockquote",[a("p",[s._v("参考：https://www.cnblogs.com/fantastic-21/p/9736220.html")])]),s._v(" "),a("p",[s._v("1、Linux 命令")]),s._v(" "),a("p",[s._v("mysql -u root (用户名) -p;")]),s._v(" "),a("p",[s._v("输入密码，即可登录")]),s._v(" "),a("p",[s._v("显示当前的数据库：show databases;")]),s._v(" "),a("p",[s._v("使用数据库：use 数据库名称；")]),s._v(" "),a("p",[s._v("查看数据表：show tables；")]),s._v(" "),a("p",[s._v("显示表的基本属性：describe 表名；")]),s._v(" "),a("p",[s._v("2、常用的字段类型有哪些？")]),s._v(" "),a("p",[s._v("1）整形（整数）：")]),s._v(" "),a("p",[s._v("int：取值范围：-2147483648--2147483647")]),s._v(" "),a("p",[s._v("tinyint：取值范围：-128--127")]),s._v(" "),a("p",[s._v("2）字符串：")]),s._v(" "),a("p",[s._v("varchar(n)：可变长度")]),s._v(" "),a("p",[s._v("char(n)：不可变长度，相对于 varchar 来说，char 占用空间，但它也是有优点的，就是存取速度要优于 varchar")]),s._v(" "),a("p",[s._v("3）日期时间：")]),s._v(" "),a("p",[s._v("date：yyyy-mm-dd   　例如：2021-01-12")]),s._v(" "),a("p",[s._v("time：hh:mm:ss   例如：10:20:45")]),s._v(" "),a("p",[s._v("datetime：yyyy-mm-dd hh:mm:ss")]),s._v(" "),a("p",[s._v("4）浮点型：（m：代表总位数，n：代表小数的位数）")]),s._v(" "),a("p",[s._v("float（m,n）例如：float（5，2） 就可以存储：123.22、345.98")]),s._v(" "),a("p",[s._v("double（m,n）和 float 的区别是精度较高，即存储的精确度较高")]),s._v(" "),a("p",[s._v("decimal（m,n）三种类型中，精度最高。")]),s._v(" "),a("p",[s._v("3、如何创建表？")]),s._v(" "),a("p",[s._v("(注意：MySQL中，写完语句后要加分号；，表示结束，表名和字段名最好用字母或字母加数字来标识，最好能是见名知意的单词)")]),s._v(" "),a("p",[s._v("​    场景：创建一个表，id为主键，名字的类型为varchar,并且不能为空，编码是：utf8")]),s._v(" "),a("p",[s._v("语法：")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("create")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("table")]),s._v(" 表名 （id "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("primary")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("key")]),s._v("，name "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("varchar")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("not")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("null")]),s._v("，字段名"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" 类型，"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("）"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DEFAULT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CHARSET")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("utf8"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),a("p",[s._v("4、如何批量插入数据？")]),s._v(" "),a("p",[s._v("注意：字段名和值是一一对应的。")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("insert")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("into")]),s._v(" 表名 （字段名"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("，字段名"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("）  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("values")]),s._v(" （值"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("，值"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("）；　\n")])])]),a("p",[s._v("5、如何更新数据？")]),s._v(" "),a("p",[s._v("1）无条件更新")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("update")]),s._v(" 表名 "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("set")]),s._v(" 字段"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("值"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("，字段"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("值"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("，"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("，字段N"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("值N；\n")])])]),a("p",[s._v("2）条件更新")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("update")]),s._v(" 表名 "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("set")]),s._v("  字段"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("值"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("，"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("，字段N"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("值N "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" 条件A "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("and")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("or")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" 条件B "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("and")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("or")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("；\n")])])]),a("p",[s._v("6、如何删除？（慎用）")]),s._v(" "),a("p",[s._v("1）条件删除")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("delete")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" 表名 "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" 条件A "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("and")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("or")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" 条件"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("　　\n")])])]),a("p",[s._v("2)无条件删除")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("delete")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" 表名            "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("------------ 删除的是表的数据")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("drop")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("table")]),s._v(" 表名             "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-------------删除整个表，包括表的结构")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("drop")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("database")]),s._v("  数据库名     "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("------------删除数据库")]),s._v("\n")])])]),a("p",[s._v("7、如何查询？")]),s._v(" "),a("p",[s._v("1）查询特定字段")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" 字段"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("，字段"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("，"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("，字段N "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" 表名；\n")])])]),a("p",[s._v("2）查寻所有字段")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" 表名\n")])])]),a("p",[s._v("3）条件查询")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" 表名 "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" 条件A "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("and")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("or")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" 条件B "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("and")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("or")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("；\n")])])]),a("p",[s._v("4）多表查询（注意：查询的字段名要带表名加一个点，查询才能够识别并查找）")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" A"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("字段名，B"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("字段名 "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" 表A，表B，"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("，表N  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" 关联条件 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("and")]),s._v(" 过滤条件；\n")])])]),a("p",[s._v("8、如何对查询到的结果进行排序？-------asc升序（默认，可以不写），desc降序")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v("  字段名  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" 表名 "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" 条件 "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("order")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("by")]),s._v(" 字段X "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("asc")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("desc")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),a("p",[s._v("9、查询语句结构，或者说先写什么，再写什么？")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[s._v("　　"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v("  字段名              "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-------------查询什么字段")]),s._v("\n\n　　"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" 表名                   "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("------------来自什么表")]),s._v("\n\n　　"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v("     条件语句          "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("---------条件")]),s._v("\n\n　　"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("group")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("by")]),s._v("                   "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("----------按什么字段分组")]),s._v("\n\n　　"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("having")]),s._v("                     "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-----------过滤条件")]),s._v("\n\n　　"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("order")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("by")]),s._v("                   "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-------------排序")]),s._v("\n\n　　"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("limit")]),s._v(" m"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("n                  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-----------分页(索引从m开始，第一条索引为0，第2条索引为1；n表示每页显示的数据条数)")]),s._v("\n")])])]),a("p",[s._v("10、怎么分组？----group by")]),s._v(" "),a("p",[s._v("注意：group by 必须和"),a("code",[s._v("聚合函数")]),s._v("结合使用。常见聚合函数：sum(), count(), avg(), min(), max() 等。")]),s._v(" "),a("p",[s._v("group by 后边的分组字段要与 select 后边的字段保持一致。")]),s._v(" "),a("p",[s._v("如果过滤分组，则使用 "),a("code",[s._v("having+过滤条件")]),s._v(" 来完成。")]),s._v(" "),a("p",[s._v("场景：查询每个年级的总人数")]),s._v(" "),a("p",[s._v("语法：")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" 年级，"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sum")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("人数"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" 表 "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("group")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("by")]),s._v(" 年级；\n")])])]),a("p",[s._v("having 相当于 where 语句，但 having 可以包含聚合函数，但 where 不可以。")]),s._v(" "),a("p",[s._v("having 常常与 group by 一起使用。")]),s._v(" "),a("p",[s._v("例如：")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" 学号，"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sum")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("成绩"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" 成绩表 "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("group")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("by")]),s._v(" 学号 "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("having")]),s._v(" sum（成绩）"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("600")]),s._v("；\n")])])]),a("p",[s._v("11、怎么分页？")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" 字段名 "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" 表名 "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("limit")]),s._v(" m"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),a("p",[s._v("12、范围查询？")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" 字段名 "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" 表名 "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" 字段名 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("between")]),s._v(" 值"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("and")]),s._v(" 值"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("；\n")])])]),a("p",[s._v("13、in  not in的用法？------查询的结果是集合，in是在什么集合内，not in则相反。")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" 字段名 "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" 表名 "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" 条件字段  "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("in")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("值"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("，值"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("，"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("，值N"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),a("p",[s._v("14、模糊查询？")]),s._v(" "),a("p",[s._v("%用来匹配任意长度的字符串，可以放你想放的位置（前，中，后），放在前面，说明前面可以是任意字符串，但结尾是xx")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("like")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'%xx'")]),s._v(" ； \n")])])]),a("p",[s._v("一个下滑线_占一个位，可以匹配任意字符串，但只能匹配一个，可以用来匹配身份证号，电话号码等。")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("like")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'_x'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),a("p",[s._v("15、count() 的用法？------------统计")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" count（"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("）"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" 表名 "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" 条件；\n")])])]),a("p",[s._v("16、去重？--------distinct")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("distinct")]),s._v(" 字段名 "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" 表名；　　\n")])])]),a("p",[s._v("17、数值类型函数的用法？")]),s._v(" "),a("p",[s._v("min() ：最小值   max() ：最大值    avg()：平均值    sum():求和")]),s._v(" "),a("p",[s._v("语法：")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("min")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("字段名"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" 表名；\n")])])]),a("p",[s._v("18、日期类型函数？")]),s._v(" "),a("p",[s._v("sysdate() ：系统时间函数 ， yyyy-mm-dd hh:mm:ss。    语法：select sysdate();")]),s._v(" "),a("p",[s._v("curdate() ：系统时间函数 ，yyyy-mm-dd。   语法：select curdate();")]),s._v(" "),a("p",[s._v("year()：获取年份 ，如：2018。   语法：select year (curdate());   ------------获取系统当前年份")]),s._v(" "),a("p",[s._v("month()：获取月份。    语法：select month(curdate())； -----------获取系统当前月份")]),s._v(" "),a("p",[s._v("day()：获取当月第几天。 语法：select day(curdate());   ------------获取系统当前几日")]),s._v(" "),a("p",[s._v("date_add()：增加一个时间间隔。 语法：date_add(curdate(),interval 5 day); -----------在系统当前日期上加5天")]),s._v(" "),a("p",[s._v("date_sub()：减去一个时间间隔。 语法：date_sub(curdate(),interval 5 day);------------在系统当前日期减去5天")]),s._v(" "),a("p",[s._v("19、字符串函数？")]),s._v(" "),a("p",[s._v("concat()：多个字段数据拼接。语法：select concat(字段1,字段2) from 表名；")]),s._v(" "),a("p",[s._v("substr()：截取数据函数。")]),s._v(" "),a("p",[s._v("​\t\t\t\tstr--要操作的字符串，")]),s._v(" "),a("p",[s._v("​\t\t\t\tpos--开始截取的位置，")]),s._v(" "),a("p",[s._v("​\t\t\t\tlen--截取的长度，如未指定，则截取到最后一位。")]),s._v(" "),a("p",[s._v("1）select substr(str,pos)；")]),s._v(" "),a("p",[s._v("2）select substr(str,pos,len) ； ---select substr(id,1,2) from student;  从student表中查询id的前两位。")]),s._v(" "),a("p",[s._v("length()：获取一个值的长度，一般用在字符串类型字段上的情况较多。")]),s._v(" "),a("p",[s._v("1）select length（'hello'）;    ----------得到的结果为5")]),s._v(" "),a("p",[s._v("2）select length（id）from student；        -----获取学号的长度")]),s._v(" "),a("p",[s._v("20、内连接？")]),s._v(" "),a("p",[s._v("内连接的特点：只返回满足关联的条件，两个表都存在的数据。")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" 表"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.")]),s._v("字段名，表"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2.")]),s._v("字段名 "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" 表"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("，表"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" 表"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.")]),s._v("字段"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("表"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2.")]),s._v("字段；\n")])])]),a("p",[s._v("或者：")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" 表"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.")]),s._v("字段名，表"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2.")]),s._v("字段名 "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" 表"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("inner")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("join")]),s._v(" 表"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("on")]),s._v(" 表"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.")]),s._v("字段"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("表"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2.")]),s._v("字段；\n")])])]),a("p",[s._v("21、外部连接？")]),s._v(" "),a("p",[s._v("注：先写左表，后写右表，匹配不到，自动补null。")]),s._v(" "),a("p",[s._v("1、左外连接：左边的表不加限制：left outer join 匹配不到，右表为null")]),s._v(" "),a("p",[s._v("2、右外连接：右边的表不加限制：right outer join 匹配不到，左表为null")]),s._v(" "),a("p",[s._v("3、全外连接：所有两个表中的行都会包含在集合中，如果匹配不上，在各自的对应的位置显示null。 full outer join")]),s._v(" "),a("p",[s._v("场景：显示表1所有的行，与右表匹配，如果左表的行没有匹配到，对应右表的行为null。")]),s._v(" "),a("p",[s._v("语法：")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" 表"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.")]),s._v("字段名，表"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2.")]),s._v("字段名 "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" 表"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("left")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("outer")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("join")]),s._v(" 表"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("on")]),s._v(" 表"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.")]),s._v("字段"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("表"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2.")]),s._v("字段；\n")])])]),a("p",[s._v("22、在查询的基础上创建新表？")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" 字段名 "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("into")]),s._v(" 新表名 "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" 表名；　　\n")])])]),a("p",[s._v("23、where 字句可以用的条件？")]),s._v(" "),a("p",[s._v("比较运算符：=、<、>、>=等")]),s._v(" "),a("p",[s._v("逻辑运算符：and、or、not")]),s._v(" "),a("p",[s._v("范围运算符：between ... and ...、not between ...and...")]),s._v(" "),a("p",[s._v("列表运算符：in、not in")]),s._v(" "),a("p",[s._v("字符通配符：like、notlike")]),s._v(" "),a("Vssue")],1)}),[],!1,null,null,null);t.default=n.exports}}]);
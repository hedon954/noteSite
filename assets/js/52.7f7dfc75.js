(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{467:function(e,a,t){"use strict";t.r(a);var s=t(47),v=Object(s.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"四、语法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#四、语法"}},[e._v("#")]),e._v(" 四、语法")]),e._v(" "),t("blockquote",[t("p",[e._v("参考：https://www.cnblogs.com/fantastic-21/p/9736220.html")])]),e._v(" "),t("p",[e._v("1、Linux 命令")]),e._v(" "),t("p",[e._v("mysql -u root (用户名) -p;")]),e._v(" "),t("p",[e._v("输入密码，即可登录")]),e._v(" "),t("p",[e._v("显示当前的数据库：show databases;")]),e._v(" "),t("p",[e._v("使用数据库：use 数据库名称；")]),e._v(" "),t("p",[e._v("查看数据表：show tables；")]),e._v(" "),t("p",[e._v("显示表的基本属性：describe 表名；")]),e._v(" "),t("p",[e._v("2、常用的字段类型有哪些？")]),e._v(" "),t("p",[e._v("1）整形（整数）：")]),e._v(" "),t("p",[e._v("int：取值范围：-2147483648--2147483647")]),e._v(" "),t("p",[e._v("tinyint：取值范围：-128--127")]),e._v(" "),t("p",[e._v("2）字符串：")]),e._v(" "),t("p",[e._v("varchar(n)：可变长度")]),e._v(" "),t("p",[e._v("char(n)：不可变长度，相对于 varchar 来说，char 占用空间，但它也是有优点的，就是存取速度要优于 varchar")]),e._v(" "),t("p",[e._v("3）日期时间：")]),e._v(" "),t("p",[e._v("date：yyyy-mm-dd   　例如：2021-01-12")]),e._v(" "),t("p",[e._v("time：hh:mm:ss   例如：10:20:45")]),e._v(" "),t("p",[e._v("datetime：yyyy-mm-dd hh:mm:ss")]),e._v(" "),t("p",[e._v("4）浮点型：（m：代表总位数，n：代表小数的位数）")]),e._v(" "),t("p",[e._v("float（m,n）例如：float（5，2） 就可以存储：123.22、345.98")]),e._v(" "),t("p",[e._v("double（m,n）和 float 的区别是精度较高，即存储的精确度较高")]),e._v(" "),t("p",[e._v("decimal（m,n）三种类型中，精度最高。")]),e._v(" "),t("p",[e._v("3、如何创建表？")]),e._v(" "),t("p",[e._v("(注意：MySQL中，写完语句后要加分号；，表示结束，表名和字段名最好用字母或字母加数字来标识，最好能是见名知意的单词)")]),e._v(" "),t("p",[e._v("​    场景：创建一个表，id为主键，名字的类型为varchar,并且不能为空，编码是：utf8")]),e._v(" "),t("p",[e._v("语法：")]),e._v(" "),t("div",{staticClass:"language-mysql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("create table 表名 （id int primary key，name varchar(10) not null，字段名3 类型，...）DEFAULT CHARSET=utf8;\n")])])]),t("p",[e._v("4、如何批量插入数据？")]),e._v(" "),t("p",[e._v("注意：字段名和值是一一对应的。")]),e._v(" "),t("div",{staticClass:"language-mysql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("insert  into 表名 （字段名1，字段名2）  values （值1，值2）；　\n")])])]),t("p",[e._v("5、如何更新数据？")]),e._v(" "),t("p",[e._v("1）无条件更新")]),e._v(" "),t("div",{staticClass:"language-mysql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("update 表名 set 字段1=值1，字段2=值2，...，字段N=值N；\n")])])]),t("p",[e._v("2）条件更新")]),e._v(" "),t("div",{staticClass:"language-mysql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("update 表名 set  字段1=值1，...，字段N=值N where 条件A and(or) 条件B and(or) ...；\n")])])]),t("p",[e._v("6、如何删除？（慎用）")]),e._v(" "),t("p",[e._v("1）条件删除")]),e._v(" "),t("div",{staticClass:"language-mysql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("delete from 表名 where 条件A and(or) 条件2,...;　　\n")])])]),t("p",[e._v("2)无条件删除")]),e._v(" "),t("div",{staticClass:"language-mysql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("delete from 表名            ------------ 删除的是表的数据\n\ndrop table 表名             -------------删除整个表，包括表的结构\n\ndrop database  数据库名     ------------删除数据库\n")])])]),t("p",[e._v("7、如何查询？")]),e._v(" "),t("p",[e._v("1）查询特定字段")]),e._v(" "),t("div",{staticClass:"language-mysql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("select 字段1，字段2，...，字段N from 表名；\n")])])]),t("p",[e._v("2）查寻所有字段")]),e._v(" "),t("div",{staticClass:"language-mysql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("select * from 表名\n")])])]),t("p",[e._v("3）条件查询")]),e._v(" "),t("div",{staticClass:"language-mysql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("select ... from 表名 where 条件A and(or) 条件B and(or) ...；\n")])])]),t("p",[e._v("4）多表查询（注意：查询的字段名要带表名加一个点，查询才能够识别并查找）")]),e._v(" "),t("div",{staticClass:"language-mysql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("select A.字段名，B.字段名 from 表A，表B，...，表N  where 关联条件 and 过滤条件；\n")])])]),t("p",[e._v("8、如何对查询到的结果进行排序？-------asc升序（默认，可以不写），desc降序")]),e._v(" "),t("div",{staticClass:"language-mysql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("select  字段名  from 表名 where 条件 order by 字段X asc(desc);\n")])])]),t("p",[e._v("9、查询语句结构，或者说先写什么，再写什么？")]),e._v(" "),t("div",{staticClass:"language-mysql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("　　select  字段名              -------------查询什么字段\n\n　　from 表名                   ------------来自什么表\n\n　　where     条件语句          ---------条件\n\n　　group by                   ----------按什么字段分组\n\n　　having                     -----------过滤条件\n\n　　order by                   -------------排序\n\n　　limit m,n                  -----------分页(索引从m开始，第一条索引为0，第2条索引为1；n表示每页显示的数据条数)\n")])])]),t("p",[e._v("10、怎么分组？----group by")]),e._v(" "),t("p",[e._v("注意：group by 必须和"),t("code",[e._v("聚合函数")]),e._v("结合使用。常见聚合函数：sum(), count(), avg(), min(), max() 等。")]),e._v(" "),t("p",[e._v("group by 后边的分组字段要与 select 后边的字段保持一致。")]),e._v(" "),t("p",[e._v("如果过滤分组，则使用 "),t("code",[e._v("having+过滤条件")]),e._v(" 来完成。")]),e._v(" "),t("p",[e._v("场景：查询每个年级的总人数")]),e._v(" "),t("p",[e._v("语法：")]),e._v(" "),t("div",{staticClass:"language-mysql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("select 年级，sum(人数) from 表 group by 年级；\n")])])]),t("p",[e._v("having 相当于 where 语句，但 having 可以包含聚合函数，但 where 不可以。")]),e._v(" "),t("p",[e._v("having 常常与 group by 一起使用。")]),e._v(" "),t("p",[e._v("例如：")]),e._v(" "),t("div",{staticClass:"language-mysql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("select 学号，sum(成绩) from 成绩表 group by 学号 having sum（成绩）>600；\n")])])]),t("p",[e._v("11、怎么分页？")]),e._v(" "),t("div",{staticClass:"language-mysql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("select 字段名 from 表名 limit m,n;\n")])])]),t("p",[e._v("12、范围查询？")]),e._v(" "),t("div",{staticClass:"language-mysql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("select 字段名 from 表名 where 字段名 between 值1 and 值2；\n")])])]),t("p",[e._v("13、in  not in的用法？------查询的结果是集合，in是在什么集合内，not in则相反。")]),e._v(" "),t("div",{staticClass:"language-mysql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("select 字段名 from 表名 where 条件字段  in (值1，值2，...，值N);\n")])])]),t("p",[e._v("14、模糊查询？")]),e._v(" "),t("p",[e._v("%用来匹配任意长度的字符串，可以放你想放的位置（前，中，后），放在前面，说明前面可以是任意字符串，但结尾是xx")]),e._v(" "),t("div",{staticClass:"language-mysql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("select ... from ... where ... like '%xx' ； \n")])])]),t("p",[e._v("一个下滑线_占一个位，可以匹配任意字符串，但只能匹配一个，可以用来匹配身份证号，电话号码等。")]),e._v(" "),t("div",{staticClass:"language-mysql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("select ... from ... where ... like '_x';\n")])])]),t("p",[e._v("15、count() 的用法？------------统计")]),e._v(" "),t("div",{staticClass:"language-mysql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("select count（*）from 表名 where 条件；\n")])])]),t("p",[e._v("16、去重？--------distinct")]),e._v(" "),t("div",{staticClass:"language-mysql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("select distinct 字段名 from 表名；　　\n")])])]),t("p",[e._v("17、数值类型函数的用法？")]),e._v(" "),t("p",[e._v("min() ：最小值   max() ：最大值    avg()：平均值    sum():求和")]),e._v(" "),t("p",[e._v("语法：")]),e._v(" "),t("div",{staticClass:"language-mysql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("select  min(字段名) from 表名；\n")])])]),t("p",[e._v("18、日期类型函数？")]),e._v(" "),t("p",[e._v("sysdate() ：系统时间函数 ， yyyy-mm-dd hh:mm:ss。    语法：select sysdate();")]),e._v(" "),t("p",[e._v("curdate() ：系统时间函数 ，yyyy-mm-dd。   语法：select curdate();")]),e._v(" "),t("p",[e._v("year()：获取年份 ，如：2018。   语法：select year (curdate());   ------------获取系统当前年份")]),e._v(" "),t("p",[e._v("month()：获取月份。    语法：select month(curdate())； -----------获取系统当前月份")]),e._v(" "),t("p",[e._v("day()：获取当月第几天。 语法：select day(curdate());   ------------获取系统当前几日")]),e._v(" "),t("p",[e._v("date_add()：增加一个时间间隔。 语法：date_add(curdate(),interval 5 day); -----------在系统当前日期上加5天")]),e._v(" "),t("p",[e._v("date_sub()：减去一个时间间隔。 语法：date_sub(curdate(),interval 5 day);------------在系统当前日期减去5天")]),e._v(" "),t("p",[e._v("19、字符串函数？")]),e._v(" "),t("p",[e._v("concat()：多个字段数据拼接。语法：select concat(字段1,字段2) from 表名；")]),e._v(" "),t("p",[e._v("substr()：截取数据函数。")]),e._v(" "),t("p",[e._v("​\t\t\t\tstr--要操作的字符串，")]),e._v(" "),t("p",[e._v("​\t\t\t\tpos--开始截取的位置，")]),e._v(" "),t("p",[e._v("​\t\t\t\tlen--截取的长度，如未指定，则截取到最后一位。")]),e._v(" "),t("p",[e._v("1）select substr(str,pos)；")]),e._v(" "),t("p",[e._v("2）select substr(str,pos,len) ； ---select substr(id,1,2) from student;  从student表中查询id的前两位。")]),e._v(" "),t("p",[e._v("length()：获取一个值的长度，一般用在字符串类型字段上的情况较多。")]),e._v(" "),t("p",[e._v("1）select length（'hello'）;    ----------得到的结果为5")]),e._v(" "),t("p",[e._v("2）select length（id）from student；        -----获取学号的长度")]),e._v(" "),t("p",[e._v("20、内连接？")]),e._v(" "),t("p",[e._v("内连接的特点：只返回满足关联的条件，两个表都存在的数据。")]),e._v(" "),t("div",{staticClass:"language-mysql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("select 表1.字段名，表2.字段名 from 表1，表2 where 表1.字段=表2.字段；\n")])])]),t("p",[e._v("或者：")]),e._v(" "),t("div",{staticClass:"language-mysql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("select 表1.字段名，表2.字段名 from 表1 inner join 表2 on 表1.字段=表2.字段；\n")])])]),t("p",[e._v("21、外部连接？")]),e._v(" "),t("p",[e._v("注：先写左表，后写右表，匹配不到，自动补null。")]),e._v(" "),t("p",[e._v("1、左外连接：左边的表不加限制：left outer join 匹配不到，右表为null")]),e._v(" "),t("p",[e._v("2、右外连接：右边的表不加限制：right outer join 匹配不到，左表为null")]),e._v(" "),t("p",[e._v("3、全外连接：所有两个表中的行都会包含在集合中，如果匹配不上，在各自的对应的位置显示null。 full outer join")]),e._v(" "),t("p",[e._v("场景：显示表1所有的行，与右表匹配，如果左表的行没有匹配到，对应右表的行为null。")]),e._v(" "),t("p",[e._v("语法：")]),e._v(" "),t("div",{staticClass:"language-mysql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("select 表1.字段名，表2.字段名 from 表1 left outer join 表2 on 表1.字段=表2.字段；\n")])])]),t("p",[e._v("22、在查询的基础上创建新表？")]),e._v(" "),t("div",{staticClass:"language-mysql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("select 字段名 into 新表名 from 表名；　　\n")])])]),t("p",[e._v("23、where 字句可以用的条件？")]),e._v(" "),t("p",[e._v("比较运算符：=、<、>、>=等")]),e._v(" "),t("p",[e._v("逻辑运算符：and、or、not")]),e._v(" "),t("p",[e._v("范围运算符：between ... and ...、not between ...and...")]),e._v(" "),t("p",[e._v("列表运算符：in、not in")]),e._v(" "),t("p",[e._v("字符通配符：like、notlike")]),e._v(" "),t("Vssue")],1)}),[],!1,null,null,null);a.default=v.exports}}]);
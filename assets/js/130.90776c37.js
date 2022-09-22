(window.webpackJsonp=window.webpackJsonp||[]).push([[130],{539:function(t,_,v){"use strict";v.r(_);var a=v(47),s=Object(a.a)({},(function(){var t=this,_=t.$createElement,v=t._self._c||_;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"_1-clickhouse-简介"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-clickhouse-简介"}},[t._v("#")]),t._v(" 1. ClickHouse 简介")]),t._v(" "),v("p",[t._v("ClickHouse 是俄罗斯的 Yandex 于 2016 年开源的"),v("strong",[t._v("列式存储数据库")]),t._v("（DBMS），使用 C++ 语言编写，主要用于"),v("strong",[t._v("在线分析处理查询")]),t._v("（OLAP），能够使用 SQL 查询实时生成分析数据报告。")]),t._v(" "),v("h2",{attrs:{id:"_1-1-特点"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-特点"}},[t._v("#")]),t._v(" 1.1 特点")]),t._v(" "),v("h3",{attrs:{id:"_1-1-1-列式存储"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-1-列式存储"}},[t._v("#")]),t._v(" 1.1.1 列式存储")]),t._v(" "),v("p",[t._v("以下面的表为例：")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("Id")]),t._v(" "),v("th",[t._v("Name")]),t._v(" "),v("th",[t._v("Age")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("1")]),t._v(" "),v("td",[t._v("张三")]),t._v(" "),v("td",[t._v("18")])]),t._v(" "),v("tr",[v("td",[t._v("2")]),t._v(" "),v("td",[t._v("李四")]),t._v(" "),v("td",[t._v("22")])]),t._v(" "),v("tr",[v("td",[t._v("3")]),t._v(" "),v("td",[t._v("王五")]),t._v(" "),v("td",[t._v("34")])])])]),t._v(" "),v("p",[t._v("在磁盘上的组织结构分别为：")]),t._v(" "),v("ul",[v("li",[v("p",[t._v("行式存储")]),t._v(" "),v("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://tva1.sinaimg.cn/large/e6c9d24egy1gzvntxgi9uj215i03umxk.jpg",alt:"image-20220228164442502"}}),t._v(" "),v("p",[t._v("好处是想查某个人所有的属性时，可以通过一次磁盘查找加顺序读取就可以。但是当想查所有人的年龄时，需要不停的查找，或者全表扫描才行，遍历的很多数据都是不需要的。")])]),t._v(" "),v("li",[v("p",[t._v("列式存储")]),t._v(" "),v("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://tva1.sinaimg.cn/large/e6c9d24egy1gzvntxqwjsj215k03qjrs.jpg",alt:"image-20220228164506060"}}),t._v(" "),v("p",[t._v("这时想查所有人的年龄只需把年龄那一列拿出来就可以了。")])])]),t._v(" "),v("p",[t._v("列式存储的好处：")]),t._v(" "),v("ul",[v("li",[t._v("对于列的聚合、计数、求和等统计操作优于行式存储；")]),t._v(" "),v("li",[t._v("由于某一列的数据类型都是相同的，针对于数据存储更容易进行数据压缩，每一列 选择更优的数据压缩算法，大大提高了数据的压缩比重；")]),t._v(" "),v("li",[t._v("由于数据压缩比更好，一方面节省了磁盘空间，另一方面对于 cache 也有了更大的发挥空间。")])]),t._v(" "),v("h3",{attrs:{id:"_1-1-2-dbms-的功能"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-2-dbms-的功能"}},[t._v("#")]),t._v(" 1.1.2 DBMS 的功能")]),t._v(" "),v("p",[t._v("几乎覆盖了标准 SQL 的大部分语法，包括 DDL 和 DML，以及配套的各种函数，用户管理及权限管理，数据的备份与恢复。")]),t._v(" "),v("h3",{attrs:{id:"_1-1-3-多样化引擎"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-3-多样化引擎"}},[t._v("#")]),t._v(" 1.1.3 多样化引擎")]),t._v(" "),v("p",[t._v("ClickHouse 和 MySQL 类似，把表级的存储引擎插件化，根据表的不同需求可以设定不同的存储引擎。目前包括合并树、日志、接口和其他四大类 20 多种引擎。")]),t._v(" "),v("h3",{attrs:{id:"_1-1-4-高吞吐写入能力"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-4-高吞吐写入能力"}},[t._v("#")]),t._v(" 1.1.4 高吞吐写入能力")]),t._v(" "),v("p",[t._v("ClickHouse 采用类 LSM Tree 的结构，数据写入后定期在后台 Compaction。通过类 LSM tree 的结构，ClickHouse 在数据导入时全部是顺序 append 写，写入后数据段不可更改，在后台 compaction 时也是多个段 merge sort 后顺序写回磁盘。顺序写的特性，充分利用了磁盘的吞吐能力，即便在 HDD 上也有着优异的写入性能。")]),t._v(" "),v("p",[t._v("官方公开 benchmark 测试显示能够达到 50MB-200MB/s 的写入吞吐能力，按照每行 100Byte 估算，大约相当于 50W-200W 条/s 的写入速度。")]),t._v(" "),v("h3",{attrs:{id:"_1-1-5-数据分区与线程级并行"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-5-数据分区与线程级并行"}},[t._v("#")]),t._v(" 1.1.5 数据分区与线程级并行")]),t._v(" "),v("p",[t._v("ClickHouse 将数据划分为多个 partition，每个 partition 再进一步划分为多个 index granularity（索引粒度），然后通过多个 CPU 核心分别处理其中的一部分来实现并行数据处理。 在这种设计下，单条 Query 就能利用整机所有 CPU。极致的并行处理能力，极大的降低了查 询延时。")]),t._v(" "),v("p",[t._v("所以，ClickHouse 即使对于大量数据的查询也能够化整为零平行处理。但是有一个弊端就是对于单条查询使用多 CPU，就不利于同时并发多条查询。所以对于高 QBS 的查询业务， ClickHouse 并不是强项。")]),t._v(" "),v("Vssue")],1)}),[],!1,null,null,null);_.default=s.exports}}]);
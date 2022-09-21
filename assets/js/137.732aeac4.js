(window.webpackJsonp=window.webpackJsonp||[]).push([[137],{547:function(v,_,t){"use strict";t.r(_);var o=t(47),d=Object(o.a)({},(function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("h1",{attrs:{id:"一、mongodb-快速入门"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一、mongodb-快速入门"}},[v._v("#")]),v._v(" 一、MongoDB 快速入门")]),v._v(" "),t("p",[t("img",{attrs:{src:"https://tva1.sinaimg.cn/large/008i3skNgy1gx7fkax01ej30yr0u0goi.jpg",alt:"MongoDB"}})]),v._v(" "),t("h2",{attrs:{id:"_1-mongodb-应用场景"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-mongodb-应用场景"}},[v._v("#")]),v._v(" 1. MongoDB 应用场景")]),v._v(" "),t("p",[v._v("传统的关系型数据库（如 MySQL），在数据操作的“三高”需求以及应对 Web2.0 的网站需求前，显得力不从心。而 MongoDB 可应对“三高需求”。")]),v._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[v._v("补充")]),v._v(" "),t("p",[v._v("三高：")]),v._v(" "),t("ul",[t("li",[v._v("High Performance：对数据高并发读写的需求")]),v._v(" "),t("li",[v._v("Huge Storage：对海量数据的高效率存储和访问的需求")]),v._v(" "),t("li",[v._v("High Scalability && High Availability：对数据库的高可拓展性和高可用性的需求")])]),v._v(" "),t("p",[v._v("Web2.0：")]),v._v(" "),t("ul",[t("li",[v._v("Web2.0 是相对于 Web1.0 的新的时代。 指的是一个利用 Web 的平台，由用户主导而生成的内容互联网产品模式，为了区别传统由网站雇员主导生成的内容而定义为第二代互联网，Web2.0 是一个新的时代。")])])]),v._v(" "),t("p",[v._v("具体应用场景：")]),v._v(" "),t("ol",[t("li",[v._v("社交场景：使用 MongoDB 存储用户信息，以及用户发表的朋友圈信息，通过地理位置索引实现附近的人、地点等功能；")]),v._v(" "),t("li",[v._v("游戏场景：使用 MongoDB 存储游戏用户信息，用户的装备、积分等直接以内嵌文档的形式存储，方便查询、高效率存储和访问；")]),v._v(" "),t("li",[v._v("物流场景：使用 MongoDB 存储订单信息，订单状态在运送过程中会不断更新，以 MongoDB 内嵌数组的形式来存储，一次查询就能将订单所有的变更读取出来；")]),v._v(" "),t("li",[v._v("物联网场景：使用 MongoDB 存储所有接入的智能设备信息，以及设备汇报的日志信息，并对这些信息进行多维度分析；")]),v._v(" "),t("li",[v._v("视频直播：使用 MongoDB 存储用户信息、点赞互动信息等。")])]),v._v(" "),t("p",[v._v("在这些应用场景中，数据操作方面的共同特点是：")]),v._v(" "),t("ol",[t("li",[v._v("数据量大；")]),v._v(" "),t("li",[v._v("写入操作频繁（读写都很频繁）；")]),v._v(" "),t("li",[v._v("价值较低的数据，对事务性要求不高。")])]),v._v(" "),t("p",[v._v("对于这样的数据，我们更适合使用  MongoDB 来实现数据的存储。")]),v._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[v._v("MySQL 与 MongoDB 的抉择")]),v._v(" "),t("p",[v._v("MongoDB 是一个文档数据库，它是大容量环境的最适合解决方案，因为它不限制人们希望存储的数据量和类型。这对基于云的服务特别有益，因为 MongoDB 的水平可伸缩性与云的敏捷性完美契合。此外，它减少了工作量，简化了业务或项目的扩展，并提供了高可用性和快速的数据恢复。")]),v._v(" "),t("p",[v._v("尽管该系统可能具有许多优点，但在某些方面，例如可靠性和数据一致性，MySQL 还是超过了 MongoDB 。而且，如果安全性也被放在首位，那么 MySQL 实际上是最安全的 DBMS 之一。")]),v._v(" "),t("p",[v._v("此外，当应用程序类型需要多行事务时（例如，在会计和银行系统中），关系数据库是最合适的选择。除了提供安全性，MySQL 还实现了高事务处理率。实际上，尽管 MongoDB 专注于允许高插入率，但是 MySQL 支持 ACID 事务并专注于提供事务安全性。")]),v._v(" "),t("p",[v._v("总体而言，强烈建议将 MySQL 用于具有固定数据模式且不打算在数据多样性方面扩展太多的企业或项目，因此在确保数据完整性和可靠性的同时，要求维护简单且成本低。")]),v._v(" "),t("p",[v._v("另一方面，MongoDB 是正在成长但数据架构不稳定的业务或项目的最合适选择。该系统的非关系数据性质允许自由使用和存储文档而无需使用结构，从而使其易于更新和检索。MongoDB 通常用于需要内容管理，处理 IoT（物联网），执行实时分析等的项目中。")])]),v._v(" "),t("h2",{attrs:{id:"_2-mongodb-简介"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-mongodb-简介"}},[v._v("#")]),v._v(" 2. MongoDB 简介")]),v._v(" "),t("p",[v._v("MongoDB 是一个开源的、高性能的、无模式的文档型数据库，当初的设计就是用于简化开发和方便扩展，是 NoSQL 数据库产品中一种最像关系型数据库的非关系型数据库。")]),v._v(" "),t("p",[v._v("它支持的数据结构非常松散，是一种类似于 JSON 的格式，叫 BSON，所以它既可以存储比较复杂的数据结构，又相当灵活。")]),v._v(" "),t("p",[v._v("MongoDB 中的记录是一个文档，它是由一个字段和值对（field:value）组成的数据结构。MongoDB 文档类似于 JSON 对象，即一个文档可以认为就是一个对象。字段的数据类型是字符串，它的值除了可以是基本的一些类型外，还可以包括其他文档、普通数组和文档数组。")]),v._v(" "),t("h2",{attrs:{id:"_3-mongodb-体系结构"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-mongodb-体系结构"}},[v._v("#")]),v._v(" 3. MongoDB 体系结构")]),v._v(" "),t("p",[v._v("MySQL vs MongoDB:")]),v._v(" "),t("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://tva1.sinaimg.cn/large/008i3skNly1gtdu9fexr6j60re0i4jsm02.jpg",alt:"image-20210812112137094"}}),v._v(" "),t("table",[t("thead",[t("tr",[t("th",[v._v("SQL 概念")]),v._v(" "),t("th",[v._v("MongoDB 概念")]),v._v(" "),t("th",[v._v("解释")])])]),v._v(" "),t("tbody",[t("tr",[t("td",[v._v("database")]),v._v(" "),t("td",[v._v("database")]),v._v(" "),t("td",[v._v("数据库")])]),v._v(" "),t("tr",[t("td",[v._v("table")]),v._v(" "),t("td",[v._v("collection")]),v._v(" "),t("td",[v._v("数据库表/集合")])]),v._v(" "),t("tr",[t("td",[v._v("row")]),v._v(" "),t("td",[v._v("document")]),v._v(" "),t("td",[v._v("数据记录行/文档")])]),v._v(" "),t("tr",[t("td",[v._v("column")]),v._v(" "),t("td",[v._v("field")]),v._v(" "),t("td",[v._v("数据字段/域")])]),v._v(" "),t("tr",[t("td",[v._v("index")]),v._v(" "),t("td",[v._v("index")]),v._v(" "),t("td",[v._v("索引")])]),v._v(" "),t("tr",[t("td",[v._v("table joins")]),v._v(" "),t("td"),v._v(" "),t("td",[v._v("表连接/MongoDB 不支持")])]),v._v(" "),t("tr",[t("td"),v._v(" "),t("td",[v._v("嵌入文档")]),v._v(" "),t("td",[v._v("MongoDB 通过嵌入式文档来替代多表连接")])]),v._v(" "),t("tr",[t("td",[v._v("primary key")]),v._v(" "),t("td",[v._v("primary key")]),v._v(" "),t("td",[v._v("主键/MongoDB 自动将 _id 字段设置为主键")])])])]),v._v(" "),t("h2",{attrs:{id:"_4-mongodb-数据模型"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-mongodb-数据模型"}},[v._v("#")]),v._v(" 4. MongoDB 数据模型")]),v._v(" "),t("p",[v._v("MongoDB 的最小存储单位就是文档（document）对象，文档（document）对象对应于关系型数据库的行。")]),v._v(" "),t("p",[v._v("数据在 MongoDB 中以 "),t("code",[v._v("BSON(Binary-JSON)")]),v._v(" 文档的格式存储在磁盘上。")]),v._v(" "),t("p",[v._v("BSON（Binary Serialized Document Format）是一种类 json 的一种二进制形式的存储格式，简称 Binary JSON。BSON 和 JSON一样，支持内嵌的文档对象和数组对象，但是 BSON 有 JSON 没有的一些数据类型，如 Date 和 BinData 类型。")]),v._v(" "),t("p",[v._v("BSON 采用了类似于 C 语言结构体的名称、对表示方法，支持内嵌的文档对象和数组对象，具有轻量性、可遍历性、高效性的三个特点，可以有效描述非结构化数据和结构化数据。这种格式的优点是灵活性高，但它的缺点是空间利用率不是很理想。")]),v._v(" "),t("p",[v._v("BSON 中，除了基本的 JSON 类型：string，integer，boolean，double，null，array 和 object，MongoDB 还使用了特殊的数据类型。这些类型包括 date，object id，binary data，regular expression 和 code。每一个驱动都以特定语言的方式实现了这些类型，查看你的驱动的文档来获取详细信息。")]),v._v(" "),t("p",[v._v("BSON 数据类型参考列表：")]),v._v(" "),t("table",[t("thead",[t("tr",[t("th",[v._v("数据类型")]),v._v(" "),t("th",[v._v("描述")]),v._v(" "),t("th",[v._v("举例")])])]),v._v(" "),t("tbody",[t("tr",[t("td",[v._v("字符串")]),v._v(" "),t("td",[v._v("UTF-8 租房处都可以表示为字符串类型的数据")]),v._v(" "),t("td",[v._v('{"x": "foobar"}')])]),v._v(" "),t("tr",[t("td",[v._v("对象 ID")]),v._v(" "),t("td",[v._v("对象 ID 是文档的 12 字节的唯一 ID")]),v._v(" "),t("td",[v._v('{"X": ObjectId()}')])]),v._v(" "),t("tr",[t("td",[v._v("布尔值")]),v._v(" "),t("td",[v._v("true，false")]),v._v(" "),t("td",[v._v('{"x": true}')])]),v._v(" "),t("tr",[t("td",[v._v("数组")]),v._v(" "),t("td",[v._v("值的集合或者列表都可以表示成数组")]),v._v(" "),t("td",[v._v('{"x": ["a", "b", "c"]}')])]),v._v(" "),t("tr",[t("td",[v._v("32 位整数")]),v._v(" "),t("td",[v._v("类型不支持，JavaScript 仅支持 64 位整数，所以 32 位整数会被自动转换")]),v._v(" "),t("td",[v._v("shell 不支持，shell 中会默认转为 64 位浮点数")])]),v._v(" "),t("tr",[t("td",[v._v("64 位整数")]),v._v(" "),t("td",[v._v("类型不可用，shell 会使用一个特殊的内嵌文档来显示 64 位整数")]),v._v(" "),t("td",[v._v("shell 不支持，shell 中会默认转为 64 位浮点数")])]),v._v(" "),t("tr",[t("td",[v._v("64 位浮点数")]),v._v(" "),t("td",[v._v("shell 中的数字就是这一种类型")]),v._v(" "),t("td",[v._v('{"x": 3.14159, "y": 3}')])]),v._v(" "),t("tr",[t("td",[v._v("null")]),v._v(" "),t("td",[v._v("表示空值或者未定义的对象")]),v._v(" "),t("td",[v._v('{"x": nul}')])]),v._v(" "),t("tr",[t("td",[v._v("undefined")]),v._v(" "),t("td",[v._v("文档中也可以使用未定义类型")]),v._v(" "),t("td",[v._v('{"x": undefined}')])]),v._v(" "),t("tr",[t("td",[v._v("符号")]),v._v(" "),t("td",[v._v("shell 不支持，shell 会将数据库中的符号类型的数据自动转换成字符串")]),v._v(" "),t("td")]),v._v(" "),t("tr",[t("td",[v._v("正则表达式")]),v._v(" "),t("td",[v._v("文档中可以包含正则表达式，采用 JavaScript 的正则表达式语法")]),v._v(" "),t("td",[v._v('{"x": /foobar/i}')])]),v._v(" "),t("tr",[t("td",[v._v("代码")]),v._v(" "),t("td",[v._v("文档中还可以包含 JavaScript 代码")]),v._v(" "),t("td",[v._v('{"x": function(){/'),t("em",[v._v("...")]),v._v("/}}")])]),v._v(" "),t("tr",[t("td",[v._v("二进制数据")]),v._v(" "),t("td",[v._v("二进制数据可以由任意字节的串组成，不过 shell 中无法使用")]),v._v(" "),t("td")]),v._v(" "),t("tr",[t("td",[v._v("最大值/最小值")]),v._v(" "),t("td",[v._v("BSON 包含一个特殊类型，表示可能的最大值或最小值，shelll 中没有这个类型")]),v._v(" "),t("td")])])]),v._v(" "),t("blockquote",[t("p",[v._v('shell 默认使用 64 位浮点型数组，如 {"x": 3.14} 或 {"x": 3}。对于整数型，可以使用 NumberInt（4 字节符号整数）或 NumberLong（8 字节符号整数），如 {"x": NumberInt(3)} 或 {"x": NumberLong(3)}。')])]),v._v(" "),t("Vssue")],1)}),[],!1,null,null,null);_.default=d.exports}}]);
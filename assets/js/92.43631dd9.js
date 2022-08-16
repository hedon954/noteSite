(window.webpackJsonp=window.webpackJsonp||[]).push([[92],{503:function(t,s,a){"use strict";a.r(s);var n=a(47),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"_3-clickhouse-数据类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-clickhouse-数据类型"}},[t._v("#")]),t._v(" 3. ClickHouse 数据类型")]),t._v(" "),a("blockquote",[a("p",[a("a",{attrs:{href:"https://clickhouse.com/docs/en/sql-reference/data-types/",target:"_blank",rel:"noopener noreferrer"}},[t._v("官网"),a("OutboundLink")],1)])]),t._v(" "),a("h2",{attrs:{id:"_3-1-整型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-整型"}},[t._v("#")]),t._v(" 3.1 整型")]),t._v(" "),a("blockquote",[a("p",[t._v("固定长度的整型，包括有符号整型或无符号整型。 整型范围（-2^n-1^~2^n-1^-1)")]),t._v(" "),a("p",[t._v("使用场景: 个数、数量、也可以存储型 "),a("strong",[t._v("id")]),t._v("。")])]),t._v(" "),a("ul",[a("li",[t._v("Int8 - [-128 : 127]")]),t._v(" "),a("li",[t._v("Int16 - [-32768 : 32767]")]),t._v(" "),a("li",[t._v("Int32 - [-2147483648 : 2147483647]")]),t._v(" "),a("li",[t._v("Int64 - [-9223372036854775808 : 9223372036854775807] 无符号整型范围(0~2n-1):")]),t._v(" "),a("li",[t._v("UInt8 - [0 : 255]")]),t._v(" "),a("li",[t._v("UInt16 - [0 : 65535]")]),t._v(" "),a("li",[t._v("UInt32 - [0 : 4294967295]")]),t._v(" "),a("li",[t._v("UInt64 - [0 : 18446744073709551615]")])]),t._v(" "),a("h2",{attrs:{id:"_3-2-浮点型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-浮点型"}},[t._v("#")]),t._v(" 3.2 浮点型")]),t._v(" "),a("blockquote",[a("p",[t._v("建议尽可能以整数形式存储数据。例如，将固定精度的数字转换为整数值，如时间用毫秒为单位表示，因为浮点型进行计算时可能引起四舍五入的误差。")]),t._v(" "),a("p",[t._v("使用场景:一般数据值比较小，不涉及大量的统计计算，精度要求不高的时候。比如：保存商品的重量。")])]),t._v(" "),a("ul",[a("li",[t._v("Float32")]),t._v(" "),a("li",[t._v("Float64")])]),t._v(" "),a("h2",{attrs:{id:"_3-3-布尔型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-布尔型"}},[t._v("#")]),t._v(" 3.3 布尔型")]),t._v(" "),a("blockquote",[a("p",[t._v("没有单独的类型来存储布尔值。可以使用 UInt8 类型，取值限制为 0 或 1。")])]),t._v(" "),a("h2",{attrs:{id:"_3-4-decimal-型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-4-decimal-型"}},[t._v("#")]),t._v(" 3.4 Decimal 型")]),t._v(" "),a("blockquote",[a("p",[t._v("有符号的浮点数，可在加、减和乘法运算过程中保持精度。对于除法，最低有效数字会被丢弃（不舍入）。")]),t._v(" "),a("p",[t._v("使用场景: 一般金额字段、汇率、利率等字段为了保证小数点精度，都使用 Decimal 进行存储。")])]),t._v(" "),a("ul",[a("li",[t._v("Decimal32(s)，相当于Decimal(9-s,s)，有效位数为1~9")]),t._v(" "),a("li",[t._v("Decimal64(s)，相当于Decimal(18-s,s)，有效位数为1~18")]),t._v(" "),a("li",[t._v("Decimal128(s)，相当于Decimal(38-s,s)，有效位数为1~38\n"),a("ul",[a("li",[t._v("s 标识小数位")])])])]),t._v(" "),a("h2",{attrs:{id:"_3-5-字符串"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-5-字符串"}},[t._v("#")]),t._v(" 3.5 字符串")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("String")]),t._v(" "),a("p",[t._v("字符串可以任意长度的。它可以包含任意的字节集，包含空字节。")])]),t._v(" "),a("li",[a("p",[t._v("FixedString(N)")]),t._v(" "),a("p",[t._v("固定长度 N 的字符串，N 必须是严格的正自然数。当服务端读取长度小于 N 的字符串时候，通过在字符串末尾添加空字节来达到 N 字节长度。 当服务端读取长度大于 N 的字符串时候，将返回错误消息。")]),t._v(" "),a("p",[t._v("与 String 相比，极少会使用 FixedString，因为使用起来不是很方便。")]),t._v(" "),a("p",[t._v("使用场景：名称、文字描述、字符型编码。 固定长度的可以保存一些定长的内容，比如一些编码，性别等。但是考虑到一定的变化风险，带来收益不够明显，所以定长字符串使用意义有限。")])])]),t._v(" "),a("h2",{attrs:{id:"_3-6-枚举类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-6-枚举类型"}},[t._v("#")]),t._v(" 3.6 枚举类型")]),t._v(" "),a("blockquote",[a("p",[t._v("使用场景：对一些状态、类型的字段算是一种空间优化，也算是一种数据约束。但是实际使用中往往因为一些数据内容的变化增加一定的维护成本，甚至是数据丢失问题。所以谨慎使用。")])]),t._v(" "),a("p",[t._v("包括 Enum8 和 Enum16 类型。Enum 保存 "),a("code",[t._v("'string'= integer")]),t._v(" 的对应关系。")]),t._v(" "),a("ul",[a("li",[t._v("Enum8 用 "),a("code",[t._v("'String'= Int8")]),t._v(" 对描述。")]),t._v(" "),a("li",[t._v("Enum16 用 "),a("code",[t._v("'String'= Int16")]),t._v(" 对描述。")])]),t._v(" "),a("p",[t._v("示例：")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("创建一个带有一个枚举 Enum8('hello'=1,'world'=2) 类型的列")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("CREATE TABLE t_enum\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n\tx Enum8"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'hello'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(", "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'world'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nENGINE "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" TinyLog"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])]),t._v(" "),a("li",[a("p",[t._v("这个 "),a("strong",[t._v("x")]),t._v(" 列只能存储类型定义中列出的值：**'hello' **或 "),a("strong",[t._v("'world'")])]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("INSERT INTO t_enum VALUES "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'hello'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(", "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'world'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(", "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'hello'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])]),t._v(" "),a("li",[a("p",[t._v("查询")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("SELECT * FROM t_enum"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("输出：")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("SELECT *\nFROM t_enum\n\nQuery id: 35c41734-a9a7-4564-bf64-81767021b6a1\n\n┌─x─────┐\n│ hello │\n│ world │\n│ hello │\n└───────┘\n\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v(" rows "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" set. Elapsed: "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.007")]),t._v(" sec.\n")])])])]),t._v(" "),a("li",[a("p",[t._v("查询枚举对应的值")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("SELECT CAST"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x, "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Int8'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" FROM t_enum"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("输出：")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("SELECT CAST"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x, "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Int8'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nFROM t_enum\n\nQuery id: 5f2b7d38-da1e-49a2-be6d-f567a8d2bc81\n\n┌─CAST"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x, "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Int8'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("─┐\n│               "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" │\n│               "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" │\n│               "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" │\n└─────────────────┘\n\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v(" rows "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" set. Elapsed: "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.005")]),t._v(" sec.\n")])])])])]),t._v(" "),a("h2",{attrs:{id:"_3-7-时间类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-7-时间类型"}},[t._v("#")]),t._v(" 3.7 时间类型")]),t._v(" "),a("p",[t._v("目前 ClickHouse 有三种时间类型：")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("Date")]),t._v(" "),a("p",[t._v("接受"),a("code",[t._v("“年-月-日”")]),t._v("的字符串比如“2019-12-16”")])]),t._v(" "),a("li",[a("p",[t._v("Datetime")]),t._v(" "),a("p",[t._v("接受"),a("code",[t._v("“年-月-日 时:分:秒”")]),t._v("的字符串比如“2019-12-16 20:50:10”")])]),t._v(" "),a("li",[a("p",[t._v("Datetime64")]),t._v(" "),a("p",[t._v("接受“"),a("code",[t._v("年-月-日 时:分:秒.亚秒")]),t._v("”的字符串比如“2019-12-16 20:50:10.66”")])])]),t._v(" "),a("p",[t._v("日期类型，用两个字节存储，表示从 1970-01-01 （无符号）到当前的日期值。")]),t._v(" "),a("h2",{attrs:{id:"_3-8-数组"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-8-数组"}},[t._v("#")]),t._v(" 3.8 数组")]),t._v(" "),a("ul",[a("li",[a("p",[a("strong",[t._v("Array(T)")]),t._v("：由 T 类型元素组成的数组。")]),t._v(" "),a("p",[t._v("T 可以是任意类型，包含数组类型。 但不推荐使用多维数组，ClickHouse 对多维数组的支持有限。例如，不能在 MergeTree 表中存储多维数组。")])])]),t._v(" "),a("p",[t._v("示例：")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("创建数组方式一：使用 array() 函数")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("SELECT array"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1,2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" AS x, toTypeName"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("输出：")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("SELECT\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(", "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" AS x,\n    toTypeName"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nQuery id: d2a31cf6-7e65-4b0f-a0c8-6015bb3bf229\n\n┌─x─────┬─toTypeName"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("array"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(", "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("))")]),t._v("─┐\n│ "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1,2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" │ Array"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("UInt8"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("            │\n└───────┴─────────────────────────┘\n\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" rows "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" set. Elapsed: "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.004")]),t._v(" sec. \n")])])])]),t._v(" "),a("li",[a("p",[t._v("创建数组方式二：使用方括号")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("SELECT "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(", "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" AS x, toTypeName"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])]),t._v(" "),a("h2",{attrs:{id:"_3-9-空值"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-9-空值"}},[t._v("#")]),t._v(" 3.9 空值")]),t._v(" "),a("p",[t._v("ClickHouse 允许存储空值，格式为："),a("code",[t._v("Nullable(typename)")]),t._v("，默认值为："),a("code",[t._v("NULL")]),t._v("。")]),t._v(" "),a("Vssue")],1)}),[],!1,null,null,null);s.default=e.exports}}]);
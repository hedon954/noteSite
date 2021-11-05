(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{433:function(a,t,s){"use strict";s.r(t);var e=s(47),n=Object(e.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"golang-map"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#golang-map"}},[a._v("#")]),a._v(" Golang Map")]),a._v(" "),s("h2",{attrs:{id:"一、golang-map-简介"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一、golang-map-简介"}},[a._v("#")]),a._v(" 一、Golang Map 简介")]),a._v(" "),s("p",[a._v("Map 是 Go 中的内置类型，它将一个值与一个键关联起来。可以使用相应的键检索值。")]),a._v(" "),s("p",[a._v("Map 是一种无序的键值对的集合。Map 最重要的一点是通过 key 来快速检索数据，key 类似于索引，指向数据的值。")]),a._v(" "),s("p",[a._v("Map 是一种集合，所以我们可以像迭代数组和切片那样迭代它。不过，Map 是无序的，我们无法决定它的返回顺序，这是因为 Map 是使用 hash 表来实现的，也是 "),s("strong",[a._v("引用类型")]),a._v("。")]),a._v(" "),s("p",[a._v("使用 Map 过程中需要注意的几点：")]),a._v(" "),s("ul",[s("li",[a._v("Map 是无序的，每次打印出来的 Map 都会不一样，它不能通过 index 获取，而必须通过 key 获取")]),a._v(" "),s("li",[a._v("Map 的长度是不固定的，也就是和 slice 一样，也是一种 "),s("strong",[a._v("引用类型")])]),a._v(" "),s("li",[a._v("内置的 len 函数同样适用于 Map，返回 Map 拥有的 key 的数量")]),a._v(" "),s("li",[a._v("Map 的 key 可以是所有"),s("strong",[a._v("可比较")]),a._v("的类型，如布尔型、整数型、浮点型、复杂型、字符串...")])]),a._v(" "),s("h2",{attrs:{id:"二、golang-map-使用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#二、golang-map-使用"}},[a._v("#")]),a._v(" 二、Golang Map 使用")]),a._v(" "),s("h3",{attrs:{id:"_1-map-格式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-map-格式"}},[a._v("#")]),a._v(" 1. map 格式")]),a._v(" "),s("div",{staticClass:"language-go extra-class"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("map")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("key_type"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("value_type\n")])])]),s("h3",{attrs:{id:"_2-map-创建"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-map-创建"}},[a._v("#")]),a._v(" 2. map 创建")]),a._v(" "),s("div",{staticClass:"language-go extra-class"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[a._v("m "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("make")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("map")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[a._v("string")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[a._v("string")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n")])])]),s("h3",{attrs:{id:"_3-map-设值"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-map-设值"}},[a._v("#")]),a._v(" 3. map 设值")]),a._v(" "),s("div",{staticClass:"language-go extra-class"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("map")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"key"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"value"')]),a._v("\n")])])]),s("h3",{attrs:{id:"_4-map-取值"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-map-取值"}},[a._v("#")]),a._v(" 4. map 取值")]),a._v(" "),s("div",{staticClass:"language-go extra-class"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[a._v("value"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" ok "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("map")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"key"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//o k表示是否有值")]),a._v("\n")])])]),s("h3",{attrs:{id:"_5-map-遍历"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-map-遍历"}},[a._v("#")]),a._v(" 5. map 遍历")]),a._v(" "),s("div",{staticClass:"language-go extra-class"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("for")]),a._v(" k"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" v "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("range")]),a._v(" m "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  \t"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//...")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),s("h3",{attrs:{id:"_6-map-删除"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6-map-删除"}},[a._v("#")]),a._v(" 6. map 删除")]),a._v(" "),s("div",{staticClass:"language-go extra-class"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("delete")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("m"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"key"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n")])])]),s("h2",{attrs:{id:"三、golang-map-原理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#三、golang-map-原理"}},[a._v("#")]),a._v(" 三、Golang Map 原理")]),a._v(" "),s("blockquote",[s("p",[a._v("Golang 版本：Go1.16")]),a._v(" "),s("p",[a._v("源码地址：https://github.com/golang/go/blob/master/src/runtime/map.go")])]),a._v(" "),s("blockquote",[s("p",[a._v("参考：https://qcrao91.gitbook.io/go/map/map-de-di-ceng-shi-xian-yuan-li-shi-shi-mo")])]),a._v(" "),s("Vssue")],1)}),[],!1,null,null,null);t.default=n.exports}}]);
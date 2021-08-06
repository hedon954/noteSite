(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{471:function(_,t,v){"use strict";v.r(t);var e=v(47),l=Object(e.a)({},(function(){var _=this,t=_.$createElement,v=_._self._c||t;return v("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[v("h1",{attrs:{id:"_5-sql易错点"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_5-sql易错点"}},[_._v("#")]),_._v(" 5. SQL易错点")]),_._v(" "),v("ol",[v("li",[v("p",[_._v("使用 COUNT(*) 判断是否存在符合条件的数据。❌")]),_._v(" "),v("blockquote",[v("p",[_._v("效率低，每次都要扫描全表。")]),_._v(" "),v("p",[_._v("应该用：SELECT ... LIMIT 1")]),_._v(" "),v("p",[_._v("LIMIT 只要找到符合条数的数据后就会立刻返回。")])])]),_._v(" "),v("li",[v("p",[_._v("在执行一个更新语句后，使用查询方式判断此更新语句是否有执行成功。❌")]),_._v(" "),v("blockquote",[v("p",[_._v("使用 ROW_COUNT() 函数判断修改行数会更好。")])])]),_._v(" "),v("li",[v("p",[_._v("视图在 ON 条件中过滤不满足条件的记录。❌")]),_._v(" "),v("blockquote",[v("p",[_._v("都用 WHERE 来过滤比较好。")]),_._v(" "),v("p",[_._v("ON 过滤的话有时候是失败的。（LEFT JOIN 会保留左表的所有数据，不存在就置为 NULL）")])])]),_._v(" "),v("li",[v("p",[_._v("在使用 IN 进行子查询的判断时，在列中为指定正确的表名，如 "),v("code",[_._v("SELECT A1 FROM A WHERE A1 IN (SELECT A1 FROM B)")]),_._v("。这时尽管 B 中并不存在 A1 列，数据库也不会报错，而是会列出 A 表中的所有数据。 ❌")]),_._v(" "),v("blockquote",[v("p",[_._v("使用 JOIN 关联代替子查询。")])])]),_._v(" "),v("li",[v("p",[_._v("对于表中定义的具有 NOT NULL 和 DEFAULT 值的列，在插入数据时直接插入 NULL 值。❌")])])]),_._v(" "),v("Vssue")],1)}),[],!1,null,null,null);t.default=l.exports}}]);
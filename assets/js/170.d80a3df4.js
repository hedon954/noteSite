(window.webpackJsonp=window.webpackJsonp||[]).push([[170],{582:function(t,_,v){"use strict";v.r(_);var d=v(47),r=Object(d.a)({},(function(){var t=this,_=t.$createElement,v=t._self._c||_;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"美食社交-app丨数据库设计"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#美食社交-app丨数据库设计"}},[t._v("#")]),t._v(" 美食社交 APP丨数据库设计")]),t._v(" "),v("h2",{attrs:{id:"_1-数据库设计"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-数据库设计"}},[t._v("#")]),t._v(" 1. 数据库设计")]),t._v(" "),v("p",[v("img",{attrs:{src:"https://hedonspace.oss-cn-beijing.aliyuncs.com/img2/008i3skNly1gswhm8n7n0j312h0u079h.jpg",alt:"image-20210728110934826"}})]),t._v(" "),v("h3",{attrs:{id:"t-diner"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#t-diner"}},[t._v("#")]),t._v(" t_diner")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("字段名")]),t._v(" "),v("th",[t._v("数据类型")]),t._v(" "),v("th",[t._v("说明")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("id")]),t._v(" "),v("td",[t._v("int")]),t._v(" "),v("td",[t._v("主键")])]),t._v(" "),v("tr",[v("td",[t._v("username")]),t._v(" "),v("td",[t._v("varchar(255)")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("phone")]),t._v(" "),v("td",[t._v("varchar(255)")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("email")]),t._v(" "),v("td",[t._v("varchar(255)")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("password")]),t._v(" "),v("td",[t._v("varchar(255)")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("is_valid")]),t._v(" "),v("td",[t._v("tinyint")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("create_date")]),t._v(" "),v("td",[t._v("datetime")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("update_date")]),t._v(" "),v("td",[t._v("datetime")]),t._v(" "),v("td")])])]),t._v(" "),v("h3",{attrs:{id:"t-feed"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#t-feed"}},[t._v("#")]),t._v(" t_feed")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("字段名")]),t._v(" "),v("th",[t._v("数据类型")]),t._v(" "),v("th",[t._v("说明")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("id")]),t._v(" "),v("td",[t._v("int")]),t._v(" "),v("td",[t._v("主键")])]),t._v(" "),v("tr",[v("td",[t._v("content")]),t._v(" "),v("td",[t._v("varchar(255)")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("fk_diner_id")]),t._v(" "),v("td",[t._v("int")]),t._v(" "),v("td",[t._v("外键")])]),t._v(" "),v("tr",[v("td",[t._v("praise_amount")]),t._v(" "),v("td",[t._v("int")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("comment_amount")]),t._v(" "),v("td",[t._v("int")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("fk_restaurant_id")]),t._v(" "),v("td",[t._v("int")]),t._v(" "),v("td",[t._v("外键")])]),t._v(" "),v("tr",[v("td",[t._v("create_date")]),t._v(" "),v("td",[t._v("datetime")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("update_date")]),t._v(" "),v("td",[t._v("datetime")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("is_valid")]),t._v(" "),v("td",[t._v("tinyint")]),t._v(" "),v("td")])])]),t._v(" "),v("h3",{attrs:{id:"t-follow"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#t-follow"}},[t._v("#")]),t._v(" t_follow")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("字段名")]),t._v(" "),v("th",[t._v("数据类型")]),t._v(" "),v("th",[t._v("说明")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("id")]),t._v(" "),v("td",[t._v("int")]),t._v(" "),v("td",[t._v("主键")])]),t._v(" "),v("tr",[v("td",[t._v("diner_id")]),t._v(" "),v("td",[t._v("int")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("follow_diner_id")]),t._v(" "),v("td",[t._v("int")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("is_valid")]),t._v(" "),v("td",[t._v("tinyint")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("create_date")]),t._v(" "),v("td",[t._v("datetime")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("update_date")]),t._v(" "),v("td",[t._v("datetime")]),t._v(" "),v("td")])])]),t._v(" "),v("h3",{attrs:{id:"t-dictionary"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#t-dictionary"}},[t._v("#")]),t._v(" t_dictionary")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("字段名")]),t._v(" "),v("th",[t._v("数据类型")]),t._v(" "),v("th",[t._v("说明")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("id")]),t._v(" "),v("td",[t._v("int")]),t._v(" "),v("td",[t._v("主键")])]),t._v(" "),v("tr",[v("td",[t._v("type")]),t._v(" "),v("td",[t._v("varchar(20)")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("data")]),t._v(" "),v("td",[t._v("varchar(50)")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("display_order")]),t._v(" "),v("td",[t._v("int")]),t._v(" "),v("td")])])]),t._v(" "),v("h3",{attrs:{id:"t-voucher"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#t-voucher"}},[t._v("#")]),t._v(" t_voucher")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("字段名")]),t._v(" "),v("th",[t._v("数据类型")]),t._v(" "),v("th",[t._v("说明")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("id")]),t._v(" "),v("td",[t._v("int")]),t._v(" "),v("td",[t._v("主键")])]),t._v(" "),v("tr",[v("td",[t._v("title")]),t._v(" "),v("td",[t._v("varchar(255)")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("thumbnail")]),t._v(" "),v("td",[t._v("varchar(255)")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("amount")]),t._v(" "),v("td",[t._v("int")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("price")]),t._v(" "),v("td",[t._v("decimal(10,2)")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("status")]),t._v(" "),v("td",[t._v("int")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("expire_time")]),t._v(" "),v("td",[t._v("datetime")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("redeem_restaurant_id")]),t._v(" "),v("td",[t._v("int")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("stock")]),t._v(" "),v("td",[t._v("int")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("stock_left")]),t._v(" "),v("td",[t._v("int")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("description")]),t._v(" "),v("td",[t._v("varchar(255)")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("clause")]),t._v(" "),v("td",[t._v("varchar(255)")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("create_time")]),t._v(" "),v("td",[t._v("datetime")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("update_time")]),t._v(" "),v("td",[t._v("datetime")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("is_valid")]),t._v(" "),v("td",[t._v("tinyint")]),t._v(" "),v("td")])])]),t._v(" "),v("h3",{attrs:{id:"t-voucher-order"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#t-voucher-order"}},[t._v("#")]),t._v(" t_voucher_order")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("字段名")]),t._v(" "),v("th",[t._v("数据类型")]),t._v(" "),v("th",[t._v("说明")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("id")]),t._v(" "),v("td",[t._v("int")]),t._v(" "),v("td",[t._v("主键")])]),t._v(" "),v("tr",[v("td",[t._v("order_no")]),t._v(" "),v("td",[t._v("int")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("fk_voucher_id")]),t._v(" "),v("td",[t._v("int")]),t._v(" "),v("td",[t._v("外键")])]),t._v(" "),v("tr",[v("td",[t._v("fk_diner_id")]),t._v(" "),v("td",[t._v("int")]),t._v(" "),v("td",[t._v("外键")])]),t._v(" "),v("tr",[v("td",[t._v("qrcode")]),t._v(" "),v("td",[t._v("varchar(255)")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("payment")]),t._v(" "),v("td",[t._v("tinyint")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("status")]),t._v(" "),v("td",[t._v("tinyint")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("create_time")]),t._v(" "),v("td",[t._v("datetime")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("update_time")]),t._v(" "),v("td",[t._v("datetime")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("is_valid")]),t._v(" "),v("td",[t._v("tinyint")]),t._v(" "),v("td")])])]),t._v(" "),v("h3",{attrs:{id:"t-restaurant"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#t-restaurant"}},[t._v("#")]),t._v(" t_restaurant")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("字段名")]),t._v(" "),v("th",[t._v("数据类型")]),t._v(" "),v("th",[t._v("说明")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("id")]),t._v(" "),v("td",[t._v("int")]),t._v(" "),v("td",[t._v("主键")])]),t._v(" "),v("tr",[v("td",[t._v("name")]),t._v(" "),v("td",[t._v("varchar(100)")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("cn_name")]),t._v(" "),v("td",[t._v("varchar(100)")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("x")]),t._v(" "),v("td",[t._v("double")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("y")]),t._v(" "),v("td",[t._v("double")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("location")]),t._v(" "),v("td",[t._v("varchar(255)")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("cn_location")]),t._v(" "),v("td",[t._v("varchar(255)")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("area")]),t._v(" "),v("td",[t._v("varchar(100)")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("cn_area")]),t._v(" "),v("td",[t._v("varchar(100)")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("traffic")]),t._v(" "),v("td",[t._v("varchar(100)")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("telephone")]),t._v(" "),v("td",[t._v("varchar(50)")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("email")]),t._v(" "),v("td",[t._v("varchar(80)")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("website")]),t._v(" "),v("td",[t._v("varchar(100)")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("cuisine")]),t._v(" "),v("td",[t._v("varchar(80)")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("average_price")]),t._v(" "),v("td",[t._v("varchar(20)")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("avg_lunch_price")]),t._v(" "),v("td",[t._v("decimal(19,0)")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("introduction")]),t._v(" "),v("td",[t._v("varchar(200)")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("status")]),t._v(" "),v("td",[t._v("int")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("create_date")]),t._v(" "),v("td",[t._v("datetime")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("is_valid")]),t._v(" "),v("td",[t._v("smallint")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("thumbnail")]),t._v(" "),v("td",[t._v("varchar(120)")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("open_hours")]),t._v(" "),v("td",[t._v("varchar(500)")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("like_votes")]),t._v(" "),v("td",[t._v("int")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("amenities")]),t._v(" "),v("td",[t._v("varchar(100)")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("tags")]),t._v(" "),v("td",[t._v("varchar(100)")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("open_date")]),t._v(" "),v("td",[t._v("datetime")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("close_date")]),t._v(" "),v("td",[t._v("datetime")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("create_time")]),t._v(" "),v("td",[t._v("datetime")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("update_time")]),t._v(" "),v("td",[t._v("datetime")]),t._v(" "),v("td")])])]),t._v(" "),v("h2",{attrs:{id:"_2-数据库创建"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-数据库创建"}},[t._v("#")]),t._v(" 2. 数据库创建")]),t._v(" "),v("p",[t._v("https://github.com/hedon954/food-social/blob/master/db/db_imooc.sql")]),t._v(" "),v("Vssue")],1)}),[],!1,null,null,null);_.default=r.exports}}]);
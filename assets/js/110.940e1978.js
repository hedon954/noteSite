(window.webpackJsonp=window.webpackJsonp||[]).push([[110],{520:function(a,t,v){"use strict";v.r(t);var s=v(47),_=Object(s.a)({},(function(){var a=this,t=a.$createElement,v=a._self._c||t;return v("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[v("h1",{attrs:{id:"redis-应用丨秒杀场景"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#redis-应用丨秒杀场景"}},[a._v("#")]),a._v(" Redis 应用丨秒杀场景")]),a._v(" "),v("h2",{attrs:{id:"零、业务分析"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#零、业务分析"}},[a._v("#")]),a._v(" 零、业务分析")]),a._v(" "),v("p",[a._v("实际业务中，秒杀包含了许多场景，具体可以分为秒杀前、秒杀中和秒杀后三个阶段，从开发角度具体分析如下：")]),a._v(" "),v("ol",[v("li",[a._v("秒杀前：主要是做好缓存工作，以应对用户频繁的访问，因为数据是固定的，可以把商品详情页的元素静态化，然后用"),v("code",[a._v("CDN")]),a._v("或者是浏览器进行缓存。")]),a._v(" "),v("li",[a._v("秒杀中：主要是库存查验，库存扣减和订单处理，这一步的特点是\n"),v("ul",[v("li",[a._v("短时间内大量用户同时进行抢购，系统的流量突然激增，服务器压力瞬间增大（瞬时并发访问高）")]),a._v(" "),v("li",[a._v("请求数量大于商品库存，比如 10000 个用户抢购，但是库存只有 100")]),a._v(" "),v("li",[a._v("限定用户只能在一定时间段内购买")]),a._v(" "),v("li",[a._v("限制单个用户购买数量，避免刷单")]),a._v(" "),v("li",[a._v("抢购是跟数据库打交道，核心功能是下单，库存不能扣成负数")]),a._v(" "),v("li",[a._v("对数据库的操作读多写少，而且读操作相对简单")])])]),a._v(" "),v("li",[a._v("秒杀后：主要是一些用户查看已购订单、处理退款和处理物流等等操作，这时候用户请求量已经下降，操作也相对简单，服务器压力不大。")])]),a._v(" "),v("p",[a._v("本文核心：秒杀中。")]),a._v(" "),v("blockquote",[v("p",[a._v("数据库：Redis 6.2.5 + MySQL 8.0.22")]),a._v(" "),v("p",[a._v("服务器：Java 8、Golang 1.16、Node.js 14.17.1")]),a._v(" "),v("p",[a._v("压测工具：Jmeter")])]),a._v(" "),v("h2",{attrs:{id:"一、java-版本"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#一、java-版本"}},[a._v("#")]),a._v(" 一、Java 版本")]),a._v(" "),v("h2",{attrs:{id:"二、golang-版本"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#二、golang-版本"}},[a._v("#")]),a._v(" 二、Golang 版本")]),a._v(" "),v("h2",{attrs:{id:"三、node-js-版本"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#三、node-js-版本"}},[a._v("#")]),a._v(" 三、Node.js 版本")]),a._v(" "),v("blockquote",[v("p",[a._v("参考：")]),a._v(" "),v("p",[a._v("https://segmentfault.com/a/1190000040235576")])]),a._v(" "),v("Vssue")],1)}),[],!1,null,null,null);t.default=_.exports}}]);
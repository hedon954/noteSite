(window.webpackJsonp=window.webpackJsonp||[]).push([[164],{575:function(t,a,_){"use strict";_.r(a);var v=_(47),s=Object(v.a)({},(function(){var t=this,a=t.$createElement,_=t._self._c||a;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"_9-rabbitmq-实战外卖后端系统"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_9-rabbitmq-实战外卖后端系统"}},[t._v("#")]),t._v(" 9. RabbitMQ 实战外卖后端系统")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://tva1.sinaimg.cn/large/008eGmZEgy1goqdj14tt3j32520iutca.jpg",alt:"image-20210319171402317"}})]),t._v(" "),_("p",[t._v("核心思想：")]),t._v(" "),_("ul",[_("li",[t._v("AMQP 协议直接定义了 RabbitMQ 的内部结构和外部行为。")]),t._v(" "),_("li",[t._v("使用 RabbitMQ 本质上就是在使用 AMQP 协议。")]),t._v(" "),_("li",[t._v("发送者不能直接将消息发送给最终队列，必须发给交换机。")]),t._v(" "),_("li",[t._v("消息根据"),_("strong",[t._v("路由规则和交换机")]),t._v("转发给队列。")]),t._v(" "),_("li",[t._v("消费者从队列将消息取走。")]),t._v(" "),_("li",[t._v("交换机数量不宜过多，一般来说同一个业务，或者同一类业务使用同一个交换机。")]),t._v(" "),_("li",[t._v("合理设置队列数量，一般来说一个微服务监听一个队列，或者一个微服务的一个业务监听一个队列。")]),t._v(" "),_("li",[t._v("合理配置交换机类型，使用 Topic 模式时仔细设置 binding key。")]),t._v(" "),_("li",[t._v("尽量使用自动化配置，将创建交换机/队列的操作固化在应用代码中，免去复杂的运维操作，高效且不易出错。")]),t._v(" "),_("li",[t._v("一般来说，交换机由双方同时声明，队列由接收方声明并配置绑定关系。")]),t._v(" "),_("li",[t._v("交换机/队列的参数一定要由双方开发团队确认，否则重复声明时，若参数不一致会导致声明失败。")])]),t._v(" "),_("h2",{attrs:{id:"_9-1-需求分析"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_9-1-需求分析"}},[t._v("#")]),t._v(" 9.1 需求分析")]),t._v(" "),_("h3",{attrs:{id:"_9-1-1-需求分析"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_9-1-1-需求分析"}},[t._v("#")]),t._v(" 9.1.1 需求分析")]),t._v(" "),_("ol",[_("li",[t._v("一个外卖后端系统，用户可以在线下单外卖。")]),t._v(" "),_("li",[t._v("用户下单后，可以实时查询订单进度。")]),t._v(" "),_("li",[t._v("系统可以承受短时间的大量并发请求。")])]),t._v(" "),_("h3",{attrs:{id:"_9-1-2-架构设计"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_9-1-2-架构设计"}},[t._v("#")]),t._v(" 9.1.2 架构设计")]),t._v(" "),_("ol",[_("li",[_("p",[t._v("使用微服务系统，组件之间充分解耦。")]),t._v(" "),_("blockquote",[_("p",[t._v("微服务架构即是将应用程序构建为松耦合的、可独立部署的一组服务。")]),t._v(" "),_("p",[t._v("服务：一个单一的、可独立部署的软件组件，实现了一些有用的功能。")]),t._v(" "),_("p",[t._v("松耦合：封装服务的实现细节，通过 API 调用。")])])]),t._v(" "),_("li",[_("p",[t._v("使用消息中间件，解耦业务逻辑。")])]),t._v(" "),_("li",[_("p",[t._v("使用数据库，持久化业务数据。")])])]),t._v(" "),_("div",{staticClass:"language-markdown extra-class"},[_("pre",{pre:!0,attrs:{class:"language-markdown"}},[_("code",[_("span",{pre:!0,attrs:{class:"token title important"}},[_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("#")]),t._v(" 如何拆分微服务？")]),t._v("\n"),_("span",{pre:!0,attrs:{class:"token list punctuation"}},[t._v("1.")]),t._v(" 根据系统操作进行微服务拆分。\n"),_("span",{pre:!0,attrs:{class:"token list punctuation"}},[t._v("2.")]),t._v(" 根据业务能力进行微服务拆分。（推荐使用）\n"),_("span",{pre:!0,attrs:{class:"token list punctuation"}},[t._v("3.")]),t._v(" 根据子域进行微服务拆分。\n")])])]),_("h3",{attrs:{id:"_9-1-3-微服务拆分"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_9-1-3-微服务拆分"}},[t._v("#")]),t._v(" 9.1.3 微服务拆分")]),t._v(" "),_("img",{staticStyle:{zoom:"33%"},attrs:{src:"https://tva1.sinaimg.cn/large/008eGmZEgy1goqduqm0ykj31bc0nkgvs.jpg",alt:"image-20210320150437002"}}),t._v(" "),_("ul",[_("li",[t._v("订单获取和履行 —— 订单微服务")]),t._v(" "),_("li",[t._v("供应商和产品管理 —— 商家微服务")]),t._v(" "),_("li",[t._v("送餐、骑手管理 —— 骑手微服务")]),t._v(" "),_("li",[t._v("记账与结算 —— 结算微服务")]),t._v(" "),_("li",[t._v("积分管理 —— 积分微服务")])]),t._v(" "),_("h3",{attrs:{id:"_9-1-4-业务流程"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_9-1-4-业务流程"}},[t._v("#")]),t._v(" 9.1.4 业务流程")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://tva1.sinaimg.cn/large/008eGmZEgy1goqdvo46y3j31560u0nf2.jpg",alt:"image-20210320150530694"}})]),t._v(" "),_("h3",{attrs:{id:"_9-1-5-接口需求"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_9-1-5-接口需求"}},[t._v("#")]),t._v(" 9.1.5 接口需求")]),t._v(" "),_("ol",[_("li",[t._v("新建订单")]),t._v(" "),_("li",[t._v("查询订单")]),t._v(" "),_("li",[t._v("接口采用 RestFul 风格")])]),t._v(" "),_("h3",{attrs:{id:"_9-1-6-数据库设计"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_9-1-6-数据库设计"}},[t._v("#")]),t._v(" 9.1.6 数据库设计")]),t._v(" "),_("ol",[_("li",[t._v("每个微服务使用自己的数据库（至少是自己的一个数据表）。")]),t._v(" "),_("li",[t._v("不要使用外键，对于数据量非常少的表慎用索引。")])]),t._v(" "),_("p",[_("img",{attrs:{src:"https://tva1.sinaimg.cn/large/008eGmZEly1goqe0q73wdj31ak0nytdv.jpg",alt:"image-20210320151022361"}})]),t._v(" "),_("Vssue")],1)}),[],!1,null,null,null);a.default=s.exports}}]);
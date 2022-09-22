(window.webpackJsonp=window.webpackJsonp||[]).push([[157],{567:function(t,a,_){"use strict";_.r(a);var v=_(47),s=Object(v.a)({},(function(){var t=this,a=t.$createElement,_=t._self._c||a;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"_1-mq-引言"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-mq-引言"}},[t._v("#")]),t._v(" 1. MQ 引言")]),t._v(" "),_("h2",{attrs:{id:"_1-1-什么是-mq"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-什么是-mq"}},[t._v("#")]),t._v(" 1.1 什么是 MQ？")]),t._v(" "),_("blockquote",[_("p",[_("code",[t._v("MQ")]),t._v("(Message Quene) :  翻译为 "),_("code",[t._v("消息队列")]),t._v(",通过典型的 "),_("code",[t._v("生产者")]),t._v("和"),_("code",[t._v("消费者")]),t._v("模型，生产者不断向消息队列中生产消息，消费者不断的从队列中获取消息。因为消息的生产和消费都是异步的，而且只关心消息的发送和接收，没有业务逻辑的侵入，轻松的实现系统间解耦。别名为 "),_("code",[t._v("消息中间件")]),t._v("\t通过利用高效可靠的消息传递机制进行平台无关的数据交流，并基于数据通信来进行分布式系统的集成。")])]),t._v(" "),_("ul",[_("li",[t._v("中间件：是提供软件和软件之间连接的软件。")])]),t._v(" "),_("h2",{attrs:{id:"_1-2-mq-的作用"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-mq-的作用"}},[t._v("#")]),t._v(" 1.2 MQ 的作用")]),t._v(" "),_("p",[t._v("消息队列已经逐渐成为企业IT系统内部通信的核心手段。它具有低耦合、可靠投递、广播、流量控制、最终一致性等一系列功能，成为异步 RPC 的主要手段之一。当今市面上有很多主流的消息中间件，如老牌的 ActiveMQ、RabbitMQ，炙手可热的 Kafka，阿里巴巴自主开发 RocketMQ 等。")]),t._v(" "),_("h3",{attrs:{id:"_1-2-1-应用解耦"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-1-应用解耦"}},[t._v("#")]),t._v(" 1.2.1 应用解耦")]),t._v(" "),_("p",[t._v("场景：双 11 是购物狂节，用户下单后，订单系统需要通知库存系统，传统的做法就是订单系统调用库存系统的接口。")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://tva1.sinaimg.cn/large/007S8ZIlly1gj1v10zjacj30ep04y3yi.jpg",alt:"这里写图片描述"}})]),t._v(" "),_("p",[t._v("这种做法有一个缺点：")]),t._v(" "),_("p",[t._v("当库存系统出现故障时，订单就会失败。 订单系统和库存系统高耦合。引入消息队列后：")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://tva1.sinaimg.cn/large/007S8ZIlly1gj1v1248qej30jd09i3yq.jpg",alt:"这里写图片描述"}})]),t._v(" "),_("ul",[_("li",[_("p",[_("code",[t._v("订单系统")]),t._v("：用户下单后，订单系统完成持久化处理，将消息写入消息队列，返回用户订单下单成功。")])]),t._v(" "),_("li",[_("p",[_("code",[t._v("库存系统")]),t._v("：订阅下单的消息,获取下单消息,进行库操作。  就算库存系统出现故障，消息队列也能保证消息的可靠投递，不会导致消息丢失。")])])]),t._v(" "),_("hr"),t._v(" "),_("h3",{attrs:{id:"_1-2-2-流量消峰"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-2-流量消峰"}},[t._v("#")]),t._v(" 1.2.2 流量消峰")]),t._v(" "),_("h4",{attrs:{id:"_1-2-2-1-思路一"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-2-1-思路一"}},[t._v("#")]),t._v(" 1.2.2.1 思路一")]),t._v(" "),_("p",[t._v("如果订单系统最多能处理一万次订单，这个处理能力应付正常时段的下单时绰绰有余，正常时段我们下单一秒后就能返回结果。但是在高峰期，如果有两万次下单操作系统是处理不了的，只能限制订单超过一万后不允许用户下单。")]),t._v(" "),_("p",[t._v("使用消息队列做缓冲，我们可以取消这个限制，把一秒内下的订单分散成一段时间来处理，这事有些用户可能在下单十几秒后才能收到下单成功的操作，但是比不能下单的体验要好。")]),t._v(" "),_("h4",{attrs:{id:"_1-2-2-2-思路二"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-2-2-思路二"}},[t._v("#")]),t._v(" 1.2.2.2 思路二")]),t._v(" "),_("p",[_("code",[t._v("场景:")]),t._v(" 秒杀活动，一般会因为流量过大，导致应用挂掉，为了解决这个问题，一般在应用前端加入消息队列。")]),t._v(" "),_("p",[_("code",[t._v("作用:")])]),t._v(" "),_("ol",[_("li",[t._v("可以控制活动人数，超过此一定阀值的订单直接丢弃。")]),t._v(" "),_("li",[t._v("可以缓解短时间的高流量压垮应用（应用程序按自己的最大处理能力获取订单)）")])]),t._v(" "),_("p",[_("img",{attrs:{src:"https://tva1.sinaimg.cn/large/008eGmZEly1gmnhebzqm0j30lk05pmxg.jpg",alt:"这里写图片描述"}})]),t._v(" "),_("ol",[_("li",[_("p",[t._v("用户的请求,服务器收到之后，首先写入消息队列，加入消息队列长度超过最大值，则直接抛弃用户请求或跳转到错误页面。")])]),t._v(" "),_("li",[_("p",[t._v("秒杀业务根据消息队列中的请求信息，再做后续处理。")])])]),t._v(" "),_("hr"),t._v(" "),_("h3",{attrs:{id:"_1-2-3-消息分发"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-3-消息分发"}},[t._v("#")]),t._v(" 1.2.3 消息分发")]),t._v(" "),_("p",[t._v("多个服务对数据感兴趣，只需要监听同一类消息即可处理。")]),t._v(" "),_("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://tva1.sinaimg.cn/large/007S8ZIlly1gixhv9e73wj30ke0cqjtc.jpg",alt:"image-20200920224025937"}}),t._v(" "),_("p",[t._v("例如 A 产生数据，B 对数据感兴趣。如果没有消息的队列 A 每次处理完需要调用一下B服务。过了一段时间 C 对数据也感性，A就需要改代码，调用 B 服务，调用 C 服务。只要有服务需要，A 服务都要改动代码。很不方便。")]),t._v(" "),_("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://tva1.sinaimg.cn/large/007S8ZIlgy1gixhvst1izj30ww0kkgr9.jpg",alt:"image-20200920224058962"}}),t._v(" "),_("p",[t._v("有了消息队列后，A 只管发送一次消息，B 对消息感兴趣，只需要监听消息。C 感兴趣，C 也去监听消息。A 服务作为基础服务完全不需要有改动。")]),t._v(" "),_("hr"),t._v(" "),_("h3",{attrs:{id:"_1-2-4-异步消息"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-4-异步消息"}},[t._v("#")]),t._v(" 1.2.4 异步消息")]),t._v(" "),_("p",[_("code",[t._v("场景说明：用户注册后，需要发注册邮件和注册短信,传统的做法有两种 1.串行的方式 2.并行的方式")])]),t._v(" "),_("ul",[_("li",[_("p",[_("code",[t._v("串行方式:")]),t._v(" 将注册信息写入数据库后，发送注册邮件，再发送注册短信，以上三个任务全部完成后才返回给客户端。 这有一个问题是，邮件、短信并不是必须的，它只是一个通知，而这种做法让客户端等待没有必要等待的东西.")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://tva1.sinaimg.cn/large/007S8ZIlly1gj1v09wsn8j30r8069mxg.jpg",alt:"这里写图片描述"}})])]),t._v(" "),_("li",[_("p",[_("code",[t._v("并行方式:")]),t._v("将注册信息写入数据库后，发送邮件的同时，发送短信，以上三个任务完成后，返回给客户端，并行的方式能提高处理的时间。")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://tva1.sinaimg.cn/large/007S8ZIlly1gj1v0b18adj30mz0an3z0.jpg",alt:"这里写图片描述"}})])]),t._v(" "),_("li",[_("p",[_("code",[t._v("消息队列:")]),t._v("假设三个业务节点分别使用50ms，串行方式使用时间150ms，并行使用时间100ms。虽然并行已经提高的处理时间,但是,前面说过，邮件和短信对我正常的使用网站没有任何影响，客户端没有必要等着其发送完成才显示注册成功，应该是写入数据库后就返回。  "),_("code",[t._v("消息队列")]),t._v("： 引入消息队列后，把发送邮件，短信不是必须的业务逻辑异步处理")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://tva1.sinaimg.cn/large/007S8ZIlly1gj1v0budejj30tq08i3yu.jpg",alt:"img"}})])])]),t._v(" "),_("p",[t._v("由此可以看出,引入消息队列后，用户的响应时间就等于写入数据库的时间+写入消息队列的时间(可以忽略不计),引入消息队列后处理后,响应时间是串行的3倍，是并行的2倍。")]),t._v(" "),_("blockquote",[_("p",[t._v("参考资料1：https://www.jianshu.com/p/9a0e9ffa17dd")]),t._v(" "),_("p",[t._v("参考资料2：《MQ消息中间件之RabbitMQ以及整合SpringBoot2.x实战教程》—— B站up主：编程不良人")])]),t._v(" "),_("h3",{attrs:{id:"_1-2-5-消息收集"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-5-消息收集"}},[t._v("#")]),t._v(" 1.2.5 消息收集")]),t._v(" "),_("ul",[_("li",[t._v("日志管理系统。")])]),t._v(" "),_("h3",{attrs:{id:"_1-2-6-最终一致性"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-6-最终一致性"}},[t._v("#")]),t._v(" 1.2.6 最终一致性")]),t._v(" "),_("ul",[_("li",[t._v("消息发到队列中后，一定会被消费者消费。")])]),t._v(" "),_("h2",{attrs:{id:"_1-3-几大-mq-的对比"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-几大-mq-的对比"}},[t._v("#")]),t._v(" 1.3 几大 MQ 的对比")]),t._v(" "),_("div",{staticClass:"language-markdown extra-class"},[_("pre",{pre:!0,attrs:{class:"language-markdown"}},[_("code",[_("span",{pre:!0,attrs:{class:"token title important"}},[_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("#")]),t._v(" 1.ActiveMQ")]),t._v("\n\t\tActiveMQ 是 Apache 出品，最流行的，能力强劲的开源消息总线。它是一个完全支持 JMS 规范的的消息中间件。丰富的 API，多种集群架构模式让 ActiveMQ 在业界成为老牌的消息中间件，在中小型企业颇受欢迎!\n\n"),_("span",{pre:!0,attrs:{class:"token title important"}},[_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("#")]),t._v(" 2.Kafka")]),t._v("\n\t\tKafka 是 LinkedIn 开源的分布式发布-订阅消息系统，目前归属于 Apache 顶级项目。Kafka 主要特点是基于 Pull 的模式来处理消息消费，追求高吞吐量，一开始的目的就是用于日志收集和传输。0.8 版本开始支持复制，不支持事务，对消息的重复、丢失、错误没有严格要求，适合产生大量数据的互联网服务的数据收集业务。\n\n"),_("span",{pre:!0,attrs:{class:"token title important"}},[_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("#")]),t._v(" 3.RocketMQ")]),t._v("\n\t\tRocketMQ 是阿里开源的消息中间件，它是纯 Java 开发，具有高吞吐量、高可用性、适合大规模分布式系统应用的特点。RocketMQ 思路起源于 Kafka，但并不是 Kafka 的一个 Copy，它对消息的可靠传输及事务性做了优化，目前在阿里集团被广泛应用于交易、充值、流计算、消息推送、日志流式处理、binglog 分发等场景。\n\n"),_("span",{pre:!0,attrs:{class:"token title important"}},[_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("#")]),t._v(" 4.RabbitMQ")]),t._v("\n\t\tRabbitMQ 是使用 Erlang 语言开发的开源消息队列系统，基于 AMQP 协议来实现。AMQP 的主要特征是面向消息、队列、路由（包括点对点和发布/订阅）、可靠性、安全。AMQ P协议更多用在企业系统内对数据一致性、稳定性和可靠性要求很高的场景，对性能和吞吐量的要求还在其次。\n")])])]),_("p",[t._v("RabbitMQ 比 Kafka 可靠，Kafka 更适合 IO 高吞吐的处理，一般应用在大数据日志处理或对实时性（少量延迟），可靠性（少量丢数据）要求稍低的场景使用，比如 ELK 日志收集。")]),t._v(" "),_("blockquote",[_("p",[t._v("参考：《MQ消息中间件之RabbitMQ以及整合SpringBoot2.x实战教程》—— B站up主：编程不良人")])]),t._v(" "),_("Vssue")],1)}),[],!1,null,null,null);a.default=s.exports}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[158],{569:function(e,a,t){"use strict";t.r(a);var r=t(47),s=Object(r.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"_2-rabbitmq-引言"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-rabbitmq-引言"}},[e._v("#")]),e._v(" 2. RabbitMQ 引言")]),e._v(" "),t("h2",{attrs:{id:"_2-1-rabbitmq"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-rabbitmq"}},[e._v("#")]),e._v(" 2.1 RabbitMQ")]),e._v(" "),t("p",[e._v("官网："),t("a",{attrs:{href:"https://www.rabbitmq.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("RabbitMQ"),t("OutboundLink")],1)]),e._v(" "),t("blockquote",[t("p",[t("strong",[e._v("RabbitMQ")]),e._v(" 是实现了高级消息队列协议（AMQP）的开源消息代理软件（亦称面向消息的中间件）。RabbitMQ 服务器是用 "),t("a",{attrs:{href:"https://baike.baidu.com/item/Erlang",target:"_blank",rel:"noopener noreferrer"}},[e._v("Erlang"),t("OutboundLink")],1),e._v(" 语言编写的，而群集和故障转移是构建在"),t("a",{attrs:{href:"https://baike.baidu.com/item/%E5%BC%80%E6%94%BE%E7%94%B5%E4%BF%A1%E5%B9%B3%E5%8F%B0",target:"_blank",rel:"noopener noreferrer"}},[e._v("开放电信平台"),t("OutboundLink")],1),e._v("框架上的。所有主要的编程语言均有与代理接口通讯的客户端库)。")])]),e._v(" "),t("p",[t("img",{attrs:{src:"https://tva1.sinaimg.cn/large/007S8ZIlly1gixi8i6ofjj31h30u0jyu.jpg",alt:"image-20200920224536743"}})]),e._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[e._v("RabbitMQ 高性能的原因")]),e._v(" "),t("ol",[t("li",[e._v("Erlang 是一门专门为交换机软件开发诞生的编程语言，进程间上下文切换效率远高于 C 语言和 Java 语言。")]),e._v(" "),t("li",[e._v("Erlang 的网络性能有着和原生  Socket 一样的延迟，网络 IO 性能非常高。")])])]),e._v(" "),t("h2",{attrs:{id:"_2-2-amqp"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-amqp"}},[e._v("#")]),e._v(" 2.2 AMQP")]),e._v(" "),t("blockquote",[t("p",[e._v("AMQP，即 Advanced Message Queuing Protocol，一个提供统一消息服务的应用层标准高级消息队列协议，是应用层协议的一个开放标准，为面向消息的中间件设计。基于此协议的客户端与消息中间件可传递消息，并不受客户端/中间件不同产品，不同的开发语言等条件的限制。")]),e._v(" "),t("p",[e._v("AMQP 在 2003 年时被提出，最早用于解决金融领不同平台之间的消息传递交互问题。更准确的说是一种 binary wire-level protocol（链接协议）。这是其和 JMS 的本质差别，AMQP 不从 API 层进行限定，而是直接定义网络交换的数据格式。这使得实现了 AMQP 的 provider 天然性就是跨平台的。")])]),e._v(" "),t("h3",{attrs:{id:"_2-2-1-amqp-协议模型"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-1-amqp-协议模型"}},[e._v("#")]),e._v(" 2.2.1 AMQP 协议模型")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://tva1.sinaimg.cn/large/008eGmZEly1gopbz3145xj32520iugwo.jpg",alt:"image-20210319171402317"}})]),e._v(" "),t("h4",{attrs:{id:"broker"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#broker"}},[e._v("#")]),e._v(" Broker")]),e._v(" "),t("p",[e._v("接收和分发消息的应用，RabbitMQ 就是 Message Broker。")]),e._v(" "),t("h4",{attrs:{id:"virtual-host"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#virtual-host"}},[e._v("#")]),e._v(" Virtual Host")]),e._v(" "),t("p",[e._v("虚拟 Broker，将多个单元隔离开。（也叫 cluster）")]),e._v(" "),t("h4",{attrs:{id:"connection"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#connection"}},[e._v("#")]),e._v(" Connection")]),e._v(" "),t("p",[e._v("publisher/consumer 和 broker 之间的 TCP 连接。")]),e._v(" "),t("h4",{attrs:{id:"channel"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#channel"}},[e._v("#")]),e._v(" Channel")]),e._v(" "),t("p",[e._v("connection 内部建立的逻辑连接，通常每个线程创建单独的 channel。")]),e._v(" "),t("h4",{attrs:{id:"routing-key"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#routing-key"}},[e._v("#")]),e._v(" Routing Key")]),e._v(" "),t("p",[e._v("路由键，用于指示消息的路由转发，相当于快递的地址。")]),e._v(" "),t("h4",{attrs:{id:"exchange"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#exchange"}},[e._v("#")]),e._v(" Exchange")]),e._v(" "),t("p",[e._v("交换机，相当于快递的分拨中心。")]),e._v(" "),t("h4",{attrs:{id:"queue"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#queue"}},[e._v("#")]),e._v(" Queue")]),e._v(" "),t("p",[e._v("消息队列，消息最终被送到这里等待 consumer 取走。")]),e._v(" "),t("h4",{attrs:{id:"binding"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#binding"}},[e._v("#")]),e._v(" Binding")]),e._v(" "),t("p",[e._v("exchange 和 queue 之间的虚拟连接，用于 message 的分发依据。")]),e._v(" "),t("h3",{attrs:{id:"_2-2-2-核心概念-exchange"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-2-核心概念-exchange"}},[e._v("#")]),e._v(" 2.2.2 核心概念 Exchange")]),e._v(" "),t("ul",[t("li",[e._v("Exchange 的功能是根据绑定关系 binding 和路由键 routing key 为消息提供路由，将消息转发至相应的队列。")])]),e._v(" "),t("h4",{attrs:{id:"_1-direct"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-direct"}},[e._v("#")]),e._v(" ① Direct")]),e._v(" "),t("p",[e._v("Meesage 中的 Routing Key 如何和 Binding Key 一致，Direct Exchange 则将 message 发到对应的 queue 中。")]),e._v(" "),t("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://tva1.sinaimg.cn/large/008eGmZEgy1gopge2mdzdj30qq09ugok.jpg",alt:"image-20210319194649966"}}),e._v(" "),t("h4",{attrs:{id:"_2-topic"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-topic"}},[e._v("#")]),e._v(" ② Topic")]),e._v(" "),t("p",[e._v("根据 Routing Key 及通配规则，Topic Exchange 将消息分发到目标 Queue 中。")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("全匹配：与 Direct 类似")])]),e._v(" "),t("li",[t("p",[e._v("#：匹配任意个数的单词")]),e._v(" "),t("blockquote",[t("p",[e._v("（Binding Key）key.#.money 可以匹配到（Routing Key） key.money、key.a.money、key.a.b.money。")])])]),e._v(" "),t("li",[t("p",[e._v("*：匹配一个单词")]),e._v(" "),t("blockquote",[t("p",[e._v("（Binding Key）key.*money 可以匹配到（Routing Key） key.a.money、key.b.money，不能匹配 key.a.money、key.a.b.money。")])])])]),e._v(" "),t("h4",{attrs:{id:"_3-fanout"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-fanout"}},[e._v("#")]),e._v(" ③ Fanout")]),e._v(" "),t("p",[e._v("每个发到 Fanout Exchange 的 message 都会发到所有绑定的 queue 上去。")]),e._v(" "),t("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://tva1.sinaimg.cn/large/008eGmZEgy1gopgfih872j30qm0a20uz.jpg",alt:"image-20210319194812969"}}),e._v(" "),t("h4",{attrs:{id:"_4-headers"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-headers"}},[e._v("#")]),e._v(" ④ Headers")]),e._v(" "),t("div",{staticClass:"language-markdown extra-class"},[t("pre",{pre:!0,attrs:{class:"language-markdown"}},[t("code",[t("span",{pre:!0,attrs:{class:"token title important"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("#")]),e._v(" 为什么 AMPQ 协议要设置 Exchange 这个组件？")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token list punctuation"}},[e._v("1.")]),e._v(" 实现生产者与消费者的解耦。\n")])])]),t("h2",{attrs:{id:"_2-3-jms-协议"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-jms-协议"}},[e._v("#")]),e._v(" 2.3 JMS 协议")]),e._v(" "),t("blockquote",[t("p",[e._v("JMS 即 Java 消息服务（Java Message Service）应用程序接口，是一个 "),t("a",{attrs:{href:"https://baike.baidu.com/item/Java%E5%B9%B3%E5%8F%B0",target:"_blank",rel:"noopener noreferrer"}},[e._v("Java 平台"),t("OutboundLink")],1),e._v("中关于面向"),t("a",{attrs:{href:"https://baike.baidu.com/item/%E6%B6%88%E6%81%AF%E4%B8%AD%E9%97%B4%E4%BB%B6/5899771",target:"_blank",rel:"noopener noreferrer"}},[e._v("消息中间件"),t("OutboundLink")],1),e._v("（MOM）的 "),t("a",{attrs:{href:"https://baike.baidu.com/item/API/10154",target:"_blank",rel:"noopener noreferrer"}},[e._v("API"),t("OutboundLink")],1),e._v("，用于在两个应用程序之间，或"),t("a",{attrs:{href:"https://baike.baidu.com/item/%E5%88%86%E5%B8%83%E5%BC%8F%E7%B3%BB%E7%BB%9F/4905336",target:"_blank",rel:"noopener noreferrer"}},[e._v("分布式系统"),t("OutboundLink")],1),e._v("中发送消息，进行"),t("a",{attrs:{href:"https://baike.baidu.com/item/%E5%BC%82%E6%AD%A5%E9%80%9A%E4%BF%A1/2273903",target:"_blank",rel:"noopener noreferrer"}},[e._v("异步通信"),t("OutboundLink")],1),e._v("。Java 消息服务是一个与具体平台无关的 API，绝大多数 MOM 提供商都对 JMS 提供支持。")]),e._v(" "),t("p",[e._v("JMS 是一种与厂商无关的 API，用来访问收发系统消息，它类似于 "),t("a",{attrs:{href:"https://baike.baidu.com/item/JDBC",target:"_blank",rel:"noopener noreferrer"}},[e._v("JDBC"),t("OutboundLink")],1),e._v("(Java Database Connectivity)。这里，JDBC 是可以用来访问许多不同关系数据库的 API，而 JMS 则提供同样与厂商无关的访问方法，以访问消息收发服务。许多厂商都支持 JMS，包括 IBM 的 MQSeries、BEA 的 Weblogic JMS service和 Progress 的 SonicMQ。 JMS 使您能够通过消息收发服务（有时称为消息中介程序或路由器）从一个 JMS 客户机向另一个 JMS客户机发送消息。消息是 JMS 中的一种类型对象，由两部分组成：报头和消息主体。报头由路由信息以及有关该消息的元数据组成。消息主体则携带着应用程序的数据或有效负载。根据有效负载的类型来划分，可以将消息分为几种类型，它们分别携带：简单文本(TextMessage)、可序列化的对象 (ObjectMessage)、属性集合 (MapMessage)、字节流 (BytesMessage)、原始值流 (StreamMessage)，还有无有效负载的消息 (Message)。")])]),e._v(" "),t("Vssue")],1)}),[],!1,null,null,null);a.default=s.exports}}]);
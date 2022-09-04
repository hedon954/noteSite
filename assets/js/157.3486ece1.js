(window.webpackJsonp=window.webpackJsonp||[]).push([[157],{566:function(a,e,t){"use strict";t.r(e);var r=t(47),s=Object(r.a)({},(function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"_2-rabbitmq-引言"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-rabbitmq-引言"}},[a._v("#")]),a._v(" 2. RabbitMQ 引言")]),a._v(" "),t("h2",{attrs:{id:"_2-1-rabbitmq"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-rabbitmq"}},[a._v("#")]),a._v(" 2.1 RabbitMQ")]),a._v(" "),t("p",[a._v("官网："),t("a",{attrs:{href:"https://www.rabbitmq.com/",target:"_blank",rel:"noopener noreferrer"}},[a._v("RabbitMQ"),t("OutboundLink")],1)]),a._v(" "),t("blockquote",[t("p",[t("strong",[a._v("RabbitMQ")]),a._v(" 是实现了高级消息队列协议（AMQP）的开源消息代理软件（亦称面向消息的中间件）。RabbitMQ 服务器是用 "),t("a",{attrs:{href:"https://baike.baidu.com/item/Erlang",target:"_blank",rel:"noopener noreferrer"}},[a._v("Erlang"),t("OutboundLink")],1),a._v(" 语言编写的，而群集和故障转移是构建在"),t("a",{attrs:{href:"https://baike.baidu.com/item/%E5%BC%80%E6%94%BE%E7%94%B5%E4%BF%A1%E5%B9%B3%E5%8F%B0",target:"_blank",rel:"noopener noreferrer"}},[a._v("开放电信平台"),t("OutboundLink")],1),a._v("框架上的。所有主要的编程语言均有与代理接口通讯的客户端库)。")])]),a._v(" "),t("p",[t("img",{attrs:{src:"https://tva1.sinaimg.cn/large/007S8ZIlly1gixi8i6ofjj31h30u0jyu.jpg",alt:"image-20200920224536743"}})]),a._v(" "),t("h5",{attrs:{id:"rabbitmq-高性能的原因"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#rabbitmq-高性能的原因"}},[a._v("#")]),a._v(" RabbitMQ 高性能的原因")]),a._v(" "),t("ol",[t("li",[a._v("Erlang 是一门专门为交换机软件开发诞生的编程语言，进程间上下文切换效率远高于 C 语言和 Java 语言。")]),a._v(" "),t("li",[a._v("Erlang 的网络性能有着和原生  Socket 一样的延迟，网络 IO 性能非常高。")])]),a._v(" "),t("h2",{attrs:{id:"_2-2-amqp"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-amqp"}},[a._v("#")]),a._v(" 2.2 AMQP")]),a._v(" "),t("blockquote",[t("p",[a._v("AMQP，即 Advanced Message Queuing Protocol，一个提供统一消息服务的应用层标准高级消息队列协议，是应用层协议的一个开放标准，为面向消息的中间件设计。基于此协议的客户端与消息中间件可传递消息，并不受客户端/中间件不同产品，不同的开发语言等条件的限制。")]),a._v(" "),t("p",[a._v("AMQP 在 2003 年时被提出，最早用于解决金融领不同平台之间的消息传递交互问题。更准确的说是一种 binary wire-level protocol（链接协议）。这是其和 JMS 的本质差别，AMQP 不从 API 层进行限定，而是直接定义网络交换的数据格式。这使得实现了 AMQP 的 provider 天然性就是跨平台的。")])]),a._v(" "),t("h3",{attrs:{id:"_2-2-1-amqp-协议模型"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-1-amqp-协议模型"}},[a._v("#")]),a._v(" 2.2.1 AMQP 协议模型")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://tva1.sinaimg.cn/large/008eGmZEly1gopbz3145xj32520iugwo.jpg",alt:"image-20210319171402317"}})]),a._v(" "),t("h5",{attrs:{id:"broker"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#broker"}},[a._v("#")]),a._v(" Broker")]),a._v(" "),t("p",[a._v("接收和分发消息的应用，RabbitMQ 就是 Message Broker。")]),a._v(" "),t("h5",{attrs:{id:"virtual-host"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#virtual-host"}},[a._v("#")]),a._v(" Virtual Host")]),a._v(" "),t("p",[a._v("虚拟 Broker，将多个单元隔离开。（也叫 cluster）")]),a._v(" "),t("h5",{attrs:{id:"connection"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#connection"}},[a._v("#")]),a._v(" Connection")]),a._v(" "),t("p",[a._v("publisher/consumer 和 broker 之间的 TCP 连接。")]),a._v(" "),t("h5",{attrs:{id:"channel"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#channel"}},[a._v("#")]),a._v(" Channel")]),a._v(" "),t("p",[a._v("connection 内部建立的逻辑连接，通常每个线程创建单独的 channel。")]),a._v(" "),t("h5",{attrs:{id:"routing-key"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#routing-key"}},[a._v("#")]),a._v(" Routing Key")]),a._v(" "),t("p",[a._v("路由键，用于指示消息的路由转发，相当于快递的地址。")]),a._v(" "),t("h5",{attrs:{id:"exchange"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#exchange"}},[a._v("#")]),a._v(" Exchange")]),a._v(" "),t("p",[a._v("交换机，相当于快递的分拨中心。")]),a._v(" "),t("h5",{attrs:{id:"queue"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#queue"}},[a._v("#")]),a._v(" Queue")]),a._v(" "),t("p",[a._v("消息队列，消息最终被送到这里等待 consumer 取走。")]),a._v(" "),t("h5",{attrs:{id:"binding"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#binding"}},[a._v("#")]),a._v(" Binding")]),a._v(" "),t("p",[a._v("exchange 和 queue 之间的虚拟连接，用于 message 的分发依据。")]),a._v(" "),t("h3",{attrs:{id:"_2-2-2-核心概念-exchange"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-2-核心概念-exchange"}},[a._v("#")]),a._v(" 2.2.2 核心概念 Exchange")]),a._v(" "),t("ul",[t("li",[a._v("Exchange 的功能是根据绑定关系 binding 和路由键 routing key 为消息提供路由，将消息转发至相应的队列。")])]),a._v(" "),t("h5",{attrs:{id:"_1-direct"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-direct"}},[a._v("#")]),a._v(" ① Direct")]),a._v(" "),t("p",[a._v("Meesage 中的 Routing Key 如何和 Binding Key 一致，Direct Exchange 则将 message 发到对应的 queue 中。")]),a._v(" "),t("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://tva1.sinaimg.cn/large/008eGmZEgy1gopge2mdzdj30qq09ugok.jpg",alt:"image-20210319194649966"}}),a._v(" "),t("h5",{attrs:{id:"_2-topic"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-topic"}},[a._v("#")]),a._v(" ② Topic")]),a._v(" "),t("p",[a._v("根据 Routing Key 及通配规则，Topic Exchange 将消息分发到目标 Queue 中。")]),a._v(" "),t("ul",[t("li",[t("p",[a._v("全匹配：与 Direct 类似")])]),a._v(" "),t("li",[t("p",[a._v("#：匹配任意个数的单词")]),a._v(" "),t("blockquote",[t("p",[a._v("（Binding Key）key.#.money 可以匹配到（Routing Key） key.money、key.a.money、key.a.b.money。")])])]),a._v(" "),t("li",[t("p",[a._v("*：匹配一个单词")]),a._v(" "),t("blockquote",[t("p",[a._v("（Binding Key）key.*money 可以匹配到（Routing Key） key.a.money、key.b.money，不能匹配 key.a.money、key.a.b.money。")])])])]),a._v(" "),t("h5",{attrs:{id:"_3-fanout"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-fanout"}},[a._v("#")]),a._v(" ③ Fanout")]),a._v(" "),t("p",[a._v("每个发到 Fanout Exchange 的 message 都会发到所有绑定的 queue 上去。")]),a._v(" "),t("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://tva1.sinaimg.cn/large/008eGmZEgy1gopgfih872j30qm0a20uz.jpg",alt:"image-20210319194812969"}}),a._v(" "),t("h5",{attrs:{id:"_4-headers"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-headers"}},[a._v("#")]),a._v(" ④ Headers")]),a._v(" "),t("div",{staticClass:"language-markdown extra-class"},[t("pre",{pre:!0,attrs:{class:"language-markdown"}},[t("code",[t("span",{pre:!0,attrs:{class:"token title important"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("#")]),a._v(" 为什么 AMPQ 协议要设置 Exchange 这个组件？")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token list punctuation"}},[a._v("1.")]),a._v(" 实现生产者与消费者的解耦。\n")])])]),t("h2",{attrs:{id:"_2-3-jms-协议"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-jms-协议"}},[a._v("#")]),a._v(" 2.3 JMS 协议")]),a._v(" "),t("blockquote",[t("p",[a._v("JMS 即 Java 消息服务（Java Message Service）应用程序接口，是一个 "),t("a",{attrs:{href:"https://baike.baidu.com/item/Java%E5%B9%B3%E5%8F%B0",target:"_blank",rel:"noopener noreferrer"}},[a._v("Java 平台"),t("OutboundLink")],1),a._v("中关于面向"),t("a",{attrs:{href:"https://baike.baidu.com/item/%E6%B6%88%E6%81%AF%E4%B8%AD%E9%97%B4%E4%BB%B6/5899771",target:"_blank",rel:"noopener noreferrer"}},[a._v("消息中间件"),t("OutboundLink")],1),a._v("（MOM）的 "),t("a",{attrs:{href:"https://baike.baidu.com/item/API/10154",target:"_blank",rel:"noopener noreferrer"}},[a._v("API"),t("OutboundLink")],1),a._v("，用于在两个应用程序之间，或"),t("a",{attrs:{href:"https://baike.baidu.com/item/%E5%88%86%E5%B8%83%E5%BC%8F%E7%B3%BB%E7%BB%9F/4905336",target:"_blank",rel:"noopener noreferrer"}},[a._v("分布式系统"),t("OutboundLink")],1),a._v("中发送消息，进行"),t("a",{attrs:{href:"https://baike.baidu.com/item/%E5%BC%82%E6%AD%A5%E9%80%9A%E4%BF%A1/2273903",target:"_blank",rel:"noopener noreferrer"}},[a._v("异步通信"),t("OutboundLink")],1),a._v("。Java 消息服务是一个与具体平台无关的 API，绝大多数 MOM 提供商都对 JMS 提供支持。")]),a._v(" "),t("p",[a._v("JMS 是一种与厂商无关的 API，用来访问收发系统消息，它类似于 "),t("a",{attrs:{href:"https://baike.baidu.com/item/JDBC",target:"_blank",rel:"noopener noreferrer"}},[a._v("JDBC"),t("OutboundLink")],1),a._v("(Java Database Connectivity)。这里，JDBC 是可以用来访问许多不同关系数据库的 API，而 JMS 则提供同样与厂商无关的访问方法，以访问消息收发服务。许多厂商都支持 JMS，包括 IBM 的 MQSeries、BEA 的 Weblogic JMS service和 Progress 的 SonicMQ。 JMS 使您能够通过消息收发服务（有时称为消息中介程序或路由器）从一个 JMS 客户机向另一个 JMS客户机发送消息。消息是 JMS 中的一种类型对象，由两部分组成：报头和消息主体。报头由路由信息以及有关该消息的元数据组成。消息主体则携带着应用程序的数据或有效负载。根据有效负载的类型来划分，可以将消息分为几种类型，它们分别携带：简单文本(TextMessage)、可序列化的对象 (ObjectMessage)、属性集合 (MapMessage)、字节流 (BytesMessage)、原始值流 (StreamMessage)，还有无有效负载的消息 (Message)。")])]),a._v(" "),t("Vssue")],1)}),[],!1,null,null,null);e.default=s.exports}}]);
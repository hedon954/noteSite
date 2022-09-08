(window.webpackJsonp=window.webpackJsonp||[]).push([[165],{576:function(t,_,v){"use strict";v.r(_);var a=v(47),e=Object(a.a)({},(function(){var t=this,_=t.$createElement,v=t._self._c||_;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"rabbitmq-面试题"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#rabbitmq-面试题"}},[t._v("#")]),t._v(" RabbitMQ 面试题")]),t._v(" "),v("blockquote",[v("p",[t._v("以下参考来源：")]),t._v(" "),v("p",[t._v("第3-6题：CodeSheep https://mp.weixin.qq.com/s/u6_WH-r1bRc4m7CUm21Tew")]),t._v(" "),v("p",[t._v("第7-13题：https://blog.csdn.net/jerryDzan/article/details/89183625")])]),t._v(" "),v("h2",{attrs:{id:"_1-消息队列的好处"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-消息队列的好处"}},[t._v("#")]),t._v(" 1. 消息队列的好处")]),t._v(" "),v("ol",[v("li",[v("p",[t._v("服务解耦")]),t._v(" "),v("p",[t._v("可以用登录+日志记录这个例子来解释。")])]),t._v(" "),v("li",[v("p",[t._v("流量削峰")]),t._v(" "),v("p",[t._v("生产者与消费者的处理速度可能是不一样的。")]),t._v(" "),v("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://tva1.sinaimg.cn/large/008eGmZEgy1gozghf5gdzj30zi07y0yn.jpg",alt:"image-20210328112540616"}})]),t._v(" "),v("li",[v("p",[t._v("消息分发")])]),t._v(" "),v("li",[v("p",[t._v("异步消息")])])]),t._v(" "),v("h2",{attrs:{id:"_2-amqp-协议"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-amqp-协议"}},[t._v("#")]),t._v(" 2. AMQP 协议")]),t._v(" "),v("p",[v("img",{attrs:{src:"https://tva1.sinaimg.cn/large/008eGmZEgy1gozgo2jjs7j32520iutca.jpg",alt:"image-20210319171402317"}})]),t._v(" "),v("h2",{attrs:{id:"_3-如何保证消息不丢失"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-如何保证消息不丢失"}},[t._v("#")]),t._v(" 3. 如何保证消息不丢失")]),t._v(" "),v("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://tva1.sinaimg.cn/large/008eGmZEgy1gozgs3opklj30z407mdl4.jpg",alt:"image-20210328113558445"}}),t._v(" "),v("p",[t._v("可以从 3 个方面来说。")]),t._v(" "),v("p",[v("strong",[t._v("① 生产消息")])]),t._v(" "),v("p",[t._v("生产者发送消息至 Broker ，需要处理 Broker 的响应，不论是同步还是异步发送消息，同步和异步回调都需要做好 try-catch ，妥善的处理响应，如果 Broker 返回写入失败等错误消息，需要重试发送。当多次发送失败需要作报警，日志记录等。")]),t._v(" "),v("p",[t._v("这样就能保证在生产消息阶段消息不会丢失。")]),t._v(" "),v("p",[v("strong",[t._v("② 存储消息")])]),t._v(" "),v("p",[t._v("存储消息阶段需要在消息刷盘之后再给生产者响应，假设消息写入缓存中就返回响应，那么机器突然断电这消息就没了，而生产者以为已经发送成功了。")]),t._v(" "),v("p",[t._v("如果 Broker 是集群部署，有多副本机制，即消息不仅仅要写入当前 Broker ,还需要写入副本机中。那配置成至少写入两台机子后再给生产者响应。这样基本上就能保证存储的可靠了。一台挂了还有一台还在呢（假如怕两台都挂了...那就再多些）。")]),t._v(" "),v("p",[t._v("那假如来个地震机房机子都挂了呢》emmmmmm...大公司基本上都有异地多活。 那要是这几个地都地震了呢？emmmmmm...这时候还是先关心关心人吧。")]),t._v(" "),v("p",[v("strong",[t._v("③ 消费消息")])]),t._v(" "),v("p",[t._v("这里经常会有同学犯错，有些同学当消费者拿到消息之后直接存入内存队列中就直接返回给 Broker 消费成功，这是不对的。")]),t._v(" "),v("p",[t._v("你需要考虑拿到消息放在内存之后消费者就宕机了怎么办。所以我们应该在消费者真正执行完业务逻辑之后，再发送给 Broker 消费成功，这才是真正的消费了。")]),t._v(" "),v("p",[t._v("所以只要我们在消息业务逻辑处理完成之后再给 Broker 响应，那么消费阶段消息就不会丢失。")]),t._v(" "),v("h2",{attrs:{id:"_4-如何处理重复消息"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_4-如何处理重复消息"}},[t._v("#")]),t._v(" 4. 如何处理重复消息")]),t._v(" "),v("p",[t._v("我们先来看看能不能避免消息的重复。")]),t._v(" "),v("p",[t._v("假设我们发送消息，就管发，不管 Broker 的响应，那么我们发往 Broker 是不会重复的。")]),t._v(" "),v("p",[t._v("但是一般情况我们是不允许这样的，这样消息就完全不可靠了，我们的基本需求是消息至少 得发到 Broker 上，那就得等 Broker 的响应，那么就可能存在 Broker 已经写入了，当时响 应由于网络原因生产者没有收到，然后生产者又重发了一次，此时消息就重复了。")]),t._v(" "),v("p",[t._v("再看消费者消费的时候，假设我们消费者拿到消息消费了，业务逻辑已经走完了，事务提交了，此时需要更新 Consumer offset 了，然后这个消费者挂了，另一个消费者顶上，此时 Consumer offset 还没更新，于是又拿到刚才那条消息，业务又被执行了一遍。于是消息又 重复了。")]),t._v(" "),v("p",[t._v("可以看到正常业务而言消息重复"),v("strong",[t._v("是不可避免")]),t._v("的，因此我们只能从另一个⻆度来解决重复消息的问题。")]),t._v(" "),v("p",[t._v("关键点就是"),v("strong",[t._v("幂等")]),t._v("。既然我们不能防止重复消息的产生，那么我们只能在业务上处理重复消息所带来的影响。")]),t._v(" "),v("p",[v("strong",[t._v("幂等是数学上的概念，我们就理解为同样的参数多次调用同一个接口和调用一次产生的结果是一致的。")])]),t._v(" "),v("blockquote",[v("p",[t._v("例如这条 SQL update t1 set money = 150 where id = 1 and money = 100; 执行多少遍 money 都是150，这就叫幂等。")]),t._v(" "),v("p",[t._v("因此需要改造业务处理逻辑，使得在重复消息的情况下也不会影响最终的结果。 可以通过上面我那条 SQL 一样，做了个前置条件判断，即 money = 100 情况，并且直接修改，更通用的是做个 version 即版本号控制，对比消息中的版本号和数据库中的版本号。 或者通过数据库的约束例如唯一键，例如 insert into update on duplicate key... 。")]),t._v(" "),v("p",[t._v("或者记录关键的 "),v("strong",[t._v("key")]),t._v("，比如处理订单这种，记录订单 ID，假如有重复的消息过来，先判断下这个ID是否已经被处理过了，如果没处理再进行下一步。当然也可以用全局唯一 ID 等等。")])]),t._v(" "),v("p",[t._v("基本上就这么几个套路，真正应用到实际中还是得看具体业务细节。")]),t._v(" "),v("h2",{attrs:{id:"_5-如何保证消息的有序性"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_5-如何保证消息的有序性"}},[t._v("#")]),t._v(" 5. 如何保证消息的有序性")]),t._v(" "),v("p",[v("strong",[t._v("① 全局有序")])]),t._v(" "),v("p",[t._v("如果要保证消息的全局有序，首先只能由一个生产者往"),v("code",[t._v("Topic")]),t._v("发送消息，并且一个"),v("code",[t._v("Topic")]),t._v("内部只能有一个队列（分区）。消费者也必须是单线程消费这个队列。这样的消息就是全局有序的！")]),t._v(" "),v("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://tva1.sinaimg.cn/large/008eGmZEgy1gozhd7ngacj310g088ahz.jpg",alt:"image-20210328115614810"}}),t._v(" "),v("p",[v("strong",[t._v("② 局部有序")])]),t._v(" "),v("p",[t._v("因此绝大部分的有序需求是部分有序，部分有序我们就可以将"),v("code",[t._v("Topic")]),t._v("内部划分成我们需要的队列数，把消息通过特定的策略发往固定的队列中，然后每个队列对应一个单线程处理的消费者。这样即完成了部分有序的需求，又可以通过队列数量的并发来提高消息处理效率。")]),t._v(" "),v("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://tva1.sinaimg.cn/large/008eGmZEgy1gozhdxdedtj31160ematw.jpg",alt:"image-20210328115656471"}}),t._v(" "),v("p",[t._v("图中我画了多个生产者，一个生产者也可以，只要同类消息发往指定的队列即可。")]),t._v(" "),v("h2",{attrs:{id:"_6-如何处理消息堆积"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_6-如何处理消息堆积"}},[t._v("#")]),t._v(" 6. 如何处理消息堆积")]),t._v(" "),v("p",[t._v("在实际应用场景中什么情况下消息发送的速率远远大于消息消费的速率，比如某个时间段消费端处理消息异常缓慢（发送消息只要3秒钟，而消费消息需要1分钟左右才能处理一个消息，每分钟发送20个消息，只能有一个消息被消费端处理，这样队列中就会产生大量的消息堆积）。")]),t._v(" "),v("p",[v("strong",[t._v("第一步：定位慢的原因")])]),t._v(" "),v("p",[t._v("因此我们需要先定位消费慢的原因，如果是 bug 则处理 bug ，如果是因为本身消费能力较弱，我们可以优化下消费逻辑，比如之前是一条一条消息消费处理的，这次我们批量处理， 比如数据库的插入，一条一条插和批量插效率是不一样的。")]),t._v(" "),v("p",[v("strong",[t._v("第二步：增加队列和消费者数量")])]),t._v(" "),v("p",[t._v("假如逻辑我们已经都优化了，但还是慢，那就得考虑水平扩容了，增加 Topic 的队列数和消费者数量，注意队列数一定要增加，不然新增加的消费者是没东⻄消费的。一个 **Topic **中，一 个队列只会分配给一个消费者。")]),t._v(" "),v("h2",{attrs:{id:"_7-rabbitmq-中的-broker-是指什么-cluster-又是指什么"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_7-rabbitmq-中的-broker-是指什么-cluster-又是指什么"}},[t._v("#")]),t._v(" 7. RabbitMQ 中的 broker 是指什么？cluster 又是指什么？")]),t._v(" "),v("p",[t._v("broker 是指一个或多个 erlang node 的逻辑分组，且 node 上运行着 RabbitMQ 应用程序。cluster 是在 broker 的基础之上，增加了 node 之间共享元数据的约束。")]),t._v(" "),v("h2",{attrs:{id:"_8-rabbitmq-概念里的-channel、exchange-和-queue-是逻辑概念-还是对应着进程实体-分别起什么作用"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_8-rabbitmq-概念里的-channel、exchange-和-queue-是逻辑概念-还是对应着进程实体-分别起什么作用"}},[t._v("#")]),t._v(" 8. RabbitMQ 概念里的 channel、exchange 和 queue 是逻辑概念，还是对应着进程实体？分别起什么作用？")]),t._v(" "),v("p",[t._v("queue 具有自己的 erlang 进程；")]),t._v(" "),v("p",[t._v("exchange 内部实现为保存 binding 关系的查找表；")]),t._v(" "),v("p",[t._v("channel 是实际进行路由工作的实体，即负责按照 routing_key 将 message 投递给 queue 。")]),t._v(" "),v("p",[t._v("由 AMQP 协议描述可知，channel 是真实 TCP 连接之上的虚拟连接，所有 AMQP 命令都是通过 channel 发送的，且每一个 channel 有唯一的 ID。一个 channel 只能被单独一个操作系统线程使用，故投递到特定 channel 上的 message 是有顺序的。但一个操作系统线程上允许使用多个 channel 。")]),t._v(" "),v("h2",{attrs:{id:"_9-vhost-是什么-起什么作用"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_9-vhost-是什么-起什么作用"}},[t._v("#")]),t._v(" 9. vhost 是什么？起什么作用？")]),t._v(" "),v("p",[t._v("vhost 可以理解为虚拟 broker ，即 mini-RabbitMQ  server。其内部均含有独立的 queue、exchange 和 binding 等，但最最重要的是，其拥有独立的权限系统，可以做到 vhost 范围的用户控制。当然，从 RabbitMQ 的全局角度，vhost 可以作为不同权限隔离的手段（一个典型的例子就是不同的应用可以跑在不同的 vhost 中）。")]),t._v(" "),v("h2",{attrs:{id:"_10-消息基于什么传输"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_10-消息基于什么传输"}},[t._v("#")]),t._v(" 10. 消息基于什么传输？")]),t._v(" "),v("p",[t._v("由于 TCP 连接的创建和销毁开销较大，且并发数受系统资源限制，会造成性能瓶颈。RabbitMQ 使用信道的方式来传输数据。信道是建立在真实的 TCP 连接内的虚拟连接，且每条 TCP 连接上的信道数量没有限制。")]),t._v(" "),v("h2",{attrs:{id:"_11-消息怎么路由"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_11-消息怎么路由"}},[t._v("#")]),t._v(" 11. 消息怎么路由？")]),t._v(" "),v("p",[t._v("从概念上来说，消息路由必须有三部分："),v("strong",[t._v("交换器、路由、绑定")]),t._v("。生产者把消息发布到交换器上；绑定决定了消息如何从路由器路由到特定的队列；消息最终到达队列，并被消费者接收。")]),t._v(" "),v("ol",[v("li",[t._v("消息发布到交换器时，消息将拥有一个"),v("strong",[t._v("路由键（routing key）")]),t._v("，在消息创建时设定。")]),t._v(" "),v("li",[t._v("通过队列路由键，可以把队列绑定到交换器上。")]),t._v(" "),v("li",[t._v("消息到达交换器后，RabbitMQ会将消息的路由键与队列的路由键进行匹配（针对不同的交换器有不同的路由规则）。如果能够匹配到队列，则消息会投递到相应队列中；如果不能匹配到任何队列，消息将进入 “黑洞”。")])]),t._v(" "),v("p",[t._v("常用的交换器主要分为一下三种：")]),t._v(" "),v("ol",[v("li",[t._v("direct：如果路由键完全匹配，消息就被投递到相应的队列")]),t._v(" "),v("li",[t._v("fanout：如果交换器收到消息，将会广播到所有绑定的队列上")]),t._v(" "),v("li",[t._v("topic：可以使来自不同源头的消息能够到达同一个队列。 使用 topic 交换器时，可以使用通配符，比如： “.” 把路由键分为了几部分，“"),v("strong",[t._v("#")]),t._v('” 匹配任意数量的单词，“*****”匹配一个单词等。特别注意：发往 topic 交换器的消息不能随意的设置选择键（routing_key），必须是由"."隔开的一系列的标识符组成。')])]),t._v(" "),v("h2",{attrs:{id:"_12-如何解决丢数据的问题"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_12-如何解决丢数据的问题"}},[t._v("#")]),t._v(" 12. 如何解决丢数据的问题？")]),t._v(" "),v("p",[v("strong",[t._v("① 生产者丢数据")])]),t._v(" "),v("p",[t._v("生产者的消息没有投递到MQ中怎么办？从生产者弄丢数据这个角度来看，RabbitMQ提供 "),v("strong",[t._v("transaction")]),t._v(" 和 "),v("strong",[t._v("confirm")]),t._v(" 模式来确保生产者不丢消息。")]),t._v(" "),v("p",[t._v("transaction 机制就是说，发送消息前，开启事物(channel.txSelect())，然后发送消息，如果发送过程中出现什么异常，事物就会回滚(channel.txRollback())，如果发送成功则提交事物(channel.txCommit())。")]),t._v(" "),v("p",[t._v("然而缺点就是吞吐量下降了。因此，按照博主的经验，生产上用 confirm 模式的居多。一旦 channel 进入 confirm 模式，所有在该信道上面发布的消息都将会被指派一个唯一的ID(从1开始)，一旦消息被投递到所有匹配的队列之后，rabbitMQ 就会发送一个Ack给生产者(包含消息的唯一ID)，这就使得生产者知道消息已经正确到达目的队列了.如果 rabiitMQ 没能处理该消息，则会发送一个 Nack 消息给你，你可以进行重试操作。")]),t._v(" "),v("p",[v("strong",[t._v("② 消息队列丢数据")])]),t._v(" "),v("p",[t._v("处理消息队列丢数据的情况，一般是开启持久化磁盘的配置。这个持久化配置可以和 confirm 机制配合使用，你可以在消息持久化磁盘后，再给生产者发送一个 Ack 信号。这样，如果消息持久化磁盘之前，RabbitMQ 阵亡了，那么生产者收不到 Ack 信号，生产者会自动重发。")]),t._v(" "),v("p",[t._v("那么如何持久化呢，这里顺便说一下吧，其实也很容易，就下面两步")]),t._v(" "),v("p",[t._v("① 将 queue 的持久化标识 durable 设置为 true,则代表是一个持久的队列")]),t._v(" "),v("p",[t._v("② 发送消息的时候将deliveryMode=2")]),t._v(" "),v("p",[t._v("这样设置以后，RabbitMQ 就算挂了，重启后也能恢复数据。在消息还没有持久化到硬盘时，可能服务已经死掉，这种情况可以通过引入mirrored-queue 即镜像队列，但也不能保证消息百分百不丢失（整个集群都挂掉）。")]),t._v(" "),v("p",[v("strong",[t._v("③ 消费者丢数据")])]),t._v(" "),v("p",[t._v("启用手动确认模式可以解决这个问题")]),t._v(" "),v("p",[t._v("① 自动确认模式，消费者挂掉，待 ack 的消息回归到队列中。消费者抛出异常，消息会不断的被重发，直到处理成功。不会丢失消息，即便服务挂掉，没有处理完成的消息会重回队列，但是异常会让消息不断重试。")]),t._v(" "),v("p",[t._v("② 手动确认模式，如果消费者来不及处理就死掉时，没有响应ack时会重复发送一条信息给其他消费者；如果监听程序处理异常了，且未对异常进行捕获，会一直重复接收消息，然后一直抛异常；如果对异常进行了捕获，但是没有在finally里ack，也会一直重复发送消息(重试机制)。")]),t._v(" "),v("p",[t._v('③ 不确认模式，acknowledge="none" 不使用确认机制，只要消息发送完成会立即在队列移除，无论客户端异常还是断开，只要发送完就移除，不会重发。')]),t._v(" "),v("h2",{attrs:{id:"_13-使用消息队列的弊端"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_13-使用消息队列的弊端"}},[t._v("#")]),t._v(" 13. 使用消息队列的弊端")]),t._v(" "),v("ol",[v("li",[v("p",[t._v("系统可用性降低：加个消息队列进去，那消息队列挂了，系统就呵呵了。")])]),t._v(" "),v("li",[v("p",[t._v("系统复杂性增加：要多考虑很多方面的问题，比如一致性问题、如何保证消息不被重复消费，如何保证保证消息可靠传输。因此，需要考虑的东西更多，系统复杂性增大。")])])]),t._v(" "),v("h2",{attrs:{id:"_14-rabbitmq-中有多少种消息模型"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_14-rabbitmq-中有多少种消息模型"}},[t._v("#")]),t._v(" 14. RabbitMQ 中有多少种消息模型")]),t._v(" "),v("p",[v("img",{attrs:{src:"https://tva1.sinaimg.cn/large/008eGmZEgy1gozjs01gzwj31gy0q242a.jpg",alt:"image-20200921092035006"}})]),t._v(" "),v("p",[v("img",{attrs:{src:"https://tva1.sinaimg.cn/large/008eGmZEgy1gozjsc8mvjj31gw0py77p.jpg",alt:"image-20200921092049674"}})]),t._v(" "),v("Vssue")],1)}),[],!1,null,null,null);_.default=e.exports}}]);
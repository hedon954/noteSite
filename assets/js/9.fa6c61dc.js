(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{420:function(_,v,t){"use strict";t.r(v);var i=t(47),l=Object(i.a)({},(function(){var _=this,v=_.$createElement,t=_._self._c||v;return t("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[t("h1",{attrs:{id:"分布式事务"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#分布式事务"}},[_._v("#")]),_._v(" 分布式事务")]),_._v(" "),t("blockquote",[t("p",[_._v("参考："),t("a",{attrs:{href:"https://mp.weixin.qq.com/s/Cr9Y5yzK0jp3NYVi_UgTLQ",target:"_blank",rel:"noopener noreferrer"}},[_._v("SpringCloud 分布式事务"),t("OutboundLink")],1)])]),_._v(" "),t("p",[_._v("在分布式系统中，分布式事务基本上是绕不开的， 分布式事务是指事务的参与者、支持事务的服务器、资源服务器以及事务管理器分别位于不同的分布式系统的不同节点之上 。其实就可以简单理解成在分布式系统中实现事务。")]),_._v(" "),t("p",[_._v("一个简单的例子，电商系统中，下单接口，一般会有扣库存，扣积分，然后生成订单。而一般来说，这三个系统都是不同的服务，我们本地不能控制其他服务的事务，此时如果订单服务发生了错误进行了回滚，但远程的服务，如扣库存已经调用完成，不能进行回滚了。也就是说下单接口的成功与否，不仅取决于本地的 db 操作，而且依赖第三方系统的结果， 这时候分布式事务就保证这些操作要么全部成功，要么全部失败。本质上来说，分布式事务就是为了保证不同数据库的数据一致性。")]),_._v(" "),t("p",[_._v("在讲分布式事务之前，先回顾下本地事务的知识点。")]),_._v(" "),t("h2",{attrs:{id:"一、本地事务"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一、本地事务"}},[_._v("#")]),_._v(" 一、本地事务")]),_._v(" "),t("p",[_._v("严格意义上的事务实现应该是"),t("strong",[_._v("具备原子性（ Atomicity ）、一致性( Consistency )、隔离性( Isolation )和持久性(Durability)")]),_._v("，简称 ACID。")]),_._v(" "),t("ul",[t("li",[_._v("原子性:一系列操作整体不可拆分，要么都执行，要么都不执行。")]),_._v(" "),t("li",[_._v("一致性：事务的执行不能破坏数据库数据的完整性和一致性，一个事务在执行之前和执行之后，数据库都必须处于一致性状态")]),_._v(" "),t("li",[_._v("隔离性：事务之间相互隔离， 指的是多个事务并发执行的时候不会互相干扰，即一个事务内部的数据对于其他事务来说是隔离的。")]),_._v(" "),t("li",[_._v("持久性：一旦事务提交，那么它对数据库中的对应数据的状态的变更就会永久保存到数据库中")])]),_._v(" "),t("p",[_._v("通俗意义上事务就是为了使得一些更新操作要么都成功，要么都失败。")]),_._v(" "),t("p",[_._v("隔离性中还有一个隔离级别的概念，总共有4个事务隔离级别，不同的隔离级别对事务的处理不同，分别是：未提交读，已提交读， 可重复读，串行化。这里面又牵扯到三个概念，脏读、不可重复读 ，幻读，我们先理解这三个概念")]),_._v(" "),t("ul",[t("li",[_._v("脏读：所谓的脏读，其实就是读到了别的事务回滚前的脏数据")]),_._v(" "),t("li",[_._v("不可重复读：当前事务先进行了一次数据读取，然后再次读取到的数据是别的事务修改成功的数据，导致两次读取到的数据不匹配")]),_._v(" "),t("li",[_._v("幻读：当前事务读第一次取到的数据比后来读取到数据条目少")])]),_._v(" "),t("p",[_._v("而事务的隔离级别其实就是如何避免这三种")]),_._v(" "),t("ul",[t("li",[_._v("未提交读：该隔离级别允许脏读取，其隔离级别最低，也就是啥都没避免。")]),_._v(" "),t("li",[_._v("已提交读 ：一个事务可以读取已提交的事务，保证了一个事务不会读到另一个并行事务已修改但未提交的数据。但是不保证可重复读，也就是不保证多次读取数据都相同。")]),_._v(" "),t("li",[_._v("可重复读：保证多次读取一个数据时都跟开始读取的时候一样， 因此该事务级别禁止不可重复读取和脏读取，但是有可能出现幻读数据。")]),_._v(" "),t("li",[_._v("串行化：是最严格的事务隔离级别，它要求所有事务被串行执行，即事务只能一个接一个的进行处理，不能并发执行。该隔离级别能防止脏读、不可重复读、幻读。")])]),_._v(" "),t("p",[_._v("MySQL 默认级别是可重复读，在编写代码时是可以进行设置的。")]),_._v(" "),t("p",[_._v("而在 Spring 中七种事务传播行为事务的传播行为概念：")]),_._v(" "),t("ul",[t("li",[_._v("PROPAGATION_REQUIRED：如果当前存在事务，则加入该事务，如果当前不存在事务，则创建一个新的事务。")]),_._v(" "),t("li",[_._v("PROPAGATION_SUPPORTS：如果存在一个事务，支持当前事务。如果没有事务，则非事务的执行。")]),_._v(" "),t("li",[_._v("PROPAGATION_MANDATORY：如果已经存在一个事务，支持当前事务。如果没有一个活动的事务，则抛出异常。")]),_._v(" "),t("li",[_._v("PROPAGATION_REQUIRES_NEW：重新创建一个新的事务，如果当前存在事务，延缓当前的事务。")]),_._v(" "),t("li",[_._v("PROPAGATION_NOT_SUPPORTED：以非事务的方式运行，如果当前存在事务，暂停当前的事务。")]),_._v(" "),t("li",[_._v("PROPAGATION_NEVER：总是非事务地执行，如果存在一个活动事务，则抛出异常。")]),_._v(" "),t("li",[_._v("PROPAGATION_NESTED：如果没有，就新建一个事务；如果有，就在当前事务中嵌套其他事务。")])]),_._v(" "),t("p",[_._v("这里有个点，Spring 的事务实现是通过代理类实现的，所以同一个对象内事务调用是默认失效的， 默认只有在外部调用事务才会生效 。")]),_._v(" "),t("h2",{attrs:{id:"二、分布式事务"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#二、分布式事务"}},[_._v("#")]),_._v(" 二、分布式事务")]),_._v(" "),t("p",[_._v("回顾完本地事务，让我们回到分布式事务的学习，分布式事务的实现是建立在很多概念之上的，让我们先来理解下基础概念吧。")]),_._v(" "),t("h3",{attrs:{id:"_1-cap-定理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-cap-定理"}},[_._v("#")]),_._v(" 1. CAP 定理")]),_._v(" "),t("p",[_._v("CAP是分布式当中一个非常重要的理论，指的是在一个分布式系统中"),t("strong",[_._v("一致性")]),_._v(" （Consistency）、"),t("strong",[_._v("可用性")]),_._v(" （Availability）、"),t("strong",[_._v("分区容错性")]),_._v("（Partition tolerance），三者不可得兼。")]),_._v(" "),t("ul",[t("li",[_._v("一致性：在分布式系统中的所有数据备份，在同一时刻是否同样的值。（等同于所有节点访问同一份最新的数据副本）")]),_._v(" "),t("li",[_._v("可用性：在集群中一部分节点故障后，集群整体是否还能响应客户端的读写请求。（对数据更新具备高可用性）")]),_._v(" "),t("li",[_._v("分区容错性：分布式系统在遇到任何网络分区故障的时候，仍然需要能够保证对外提供满足一致性和可用性的服务，除非整个网络环境都发生故障。")])]),_._v(" "),t("p",[_._v("CAP 理论是指一个分布式系统不可能同时满足一致性，可用性和分区容错性这个三个基本需求，最多只能同时满足其中两项。")]),_._v(" "),t("p",[_._v("举个例子：有 A、B、C三个 服务，都保存一份数据是 7，而当 A 服务将这个数据改成 8，同步到 B 时，正常，但同步至 C 时出现了异常，此时 C 仍然是 7，如果此时依旧要保持一致性，那么 C 服务就不能可用。")]),_._v(" "),t("ul",[t("li",[_._v("放弃 P(CA)：如果希望能够避免系统出现分区容错性问题，一种较为简单的做法就是将所有的数据(或者是与事物先相关的数据)都放在一个分布式节点上，这样虽然无法保证100%系统不会出错，但至少不会碰到由于网络分区带来的负面影响。但是这样其实就不是分布式系统了，")]),_._v(" "),t("li",[_._v("放弃 A(CP):其做法是一旦系统遇到网络分区或其他故障时，那受到影响的服务需要等待一定的时间，应用等待期间系统无法对外提供正常的服务，即不可用")]),_._v(" "),t("li",[_._v("放弃 C(AP):这里说的放弃一致性，并不是完全不需要数据一致性，是指放弃数据的强一致性，保留数据的最终一致性。")])]),_._v(" "),t("p",[_._v("大多数时候我们是选择AP，也就是选择放弃一致性，但是这不是绝对的，在一些业务中，例如，转账业务，是放弃了可用性。")]),_._v(" "),t("h3",{attrs:{id:"_2-base-理论"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-base-理论"}},[_._v("#")]),_._v(" 2. BASE 理论")]),_._v(" "),t("p",[_._v("BASE 理论指的是"),t("strong",[_._v("基本可用")]),_._v(" Basically Available，"),t("strong",[_._v("软状态")]),_._v(" Soft State，"),t("strong",[_._v("最终一致性")]),_._v(" Eventual Consistency，核心思想是即便无法做到强一致性，但应该采用适合的方式保证最终一致性。")]),_._v(" "),t("ul",[t("li",[_._v("BA：Basically Available 基本可用，分布式系统在出现故障的时候，允许损失部分可用性，即保证核心可用。")]),_._v(" "),t("li",[_._v("S：Soft State 软状态，允许系统存在中间状态，而该中间状态不会影响系统整体可用性。")]),_._v(" "),t("li",[_._v("E：Eventual Consistency 最终一致性，系统中的所有数据副本经过一定时间后，最终能够达到一致的状态。")])]),_._v(" "),t("p",[_._v("这里需要解释下强一致性，弱一致性和最终一致性。")]),_._v(" "),t("p",[_._v("**强一致性：**任何一次读都能读到某个数据的最近一次写的数据。系统中的所有进程，看到的操作顺序，都和全局时钟下的顺序一致。简言之，在任意时刻，所有节点中的数据是一样的。")]),_._v(" "),t("p",[t("strong",[_._v("弱一致性：")]),_._v(" 数据更新后，如果能容忍后续的访问只能访问到部分或者全部访问不到，则是弱一致性。")]),_._v(" "),t("p",[t("strong",[_._v("最终一致性：")]),_._v(" 不保证在任意时刻任意节点上的同一份数据都是相同的，但是随着时间的迁移，不同节点上的同一份数据总是在向趋同的方向变化。简单说，就是在一段时间后，节点间的数据会最终达到一致状态。")]),_._v(" "),t("h2",{attrs:{id:"三、分布式事务的几种方案"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#三、分布式事务的几种方案"}},[_._v("#")]),_._v(" 三、分布式事务的几种方案")]),_._v(" "),t("h3",{attrs:{id:"_1-2pc-xa"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-2pc-xa"}},[_._v("#")]),_._v(" 1. 2PC/XA")]),_._v(" "),t("p",[_._v("两阶段提交，顾名思义就是要分两步提交。存在一个负责协调各个本地资源管理器的事务管理器，本地资源管理器一般是由数据库实现，事务管理器在第一阶段的时候询问各个资源管理器是否都就绪？如果收到每个资源的回复都是 yes，则在第二阶段提交事务，如果其中任意一个资源的回复是 no, 则回滚事务。")]),_._v(" "),t("p",[t("strong",[_._v("阶段1：提交事务请求")])]),_._v(" "),t("p",[_._v("事务管理器向所有本地资源管理器发起请求，询问是否是 ready 状态，所有参与者都将本事务能否成功的信息反馈发给协调者；")]),_._v(" "),t("ul",[t("li",[_._v("事务询问：协调者向所有的参与者发送事务内容，询问是否可以执行事务提交操作，并开始等待各参与者的响应")]),_._v(" "),t("li",[_._v("执行事务：各参与者节点执行事务操作，并将 Undo 和 Redo 信息记入事务日志中")]),_._v(" "),t("li",[_._v("如果参与者成功执事务操作，就反馈给协调者 Yes 响应，表示事物可以执行，如果没有成功执行事务，就反馈给协调者 No 响应，表示事务不可以执行")]),_._v(" "),t("li",[_._v("二阶段的第一阶段的阶段也被称为投票阶段，即各参与者投票票表明是否可以继续执行接下去的事务提交操作")])]),_._v(" "),t("p",[t("strong",[_._v("阶段2：执行事务提交")])]),_._v(" "),t("ul",[t("li",[_._v("假如协调者从所有的参与者或得反馈都是 Yes 响应，那么就会执行事务提交。")]),_._v(" "),t("li",[_._v("发送提交请求：协调者向所有参与者节点发出Commit请求")]),_._v(" "),t("li",[_._v("事务提交：参与者接受到 Commit 请求后，会正式执行事务提交操作，并在完成提交之后放弃整个事务执行期间占用的事务资源")]),_._v(" "),t("li",[_._v("反馈事务提交结果:参与者在完成事物提交之后，向协调者发送 ACK 消息")]),_._v(" "),t("li",[_._v("完成事务：协调者接收到所有参与者反馈的ACK消息后，完成事务")])]),_._v(" "),t("p",[t("strong",[_._v("中断事务")])]),_._v(" "),t("ul",[t("li",[_._v("假如任何一个参与者向协调者反馈了  No 响应，或者在等待超时之后，协调者尚无法接收到所有参与者的反馈响应，那么就中断事务。")]),_._v(" "),t("li",[_._v("发送回滚请求：协调者向所有参与者节点发出Rollback 请求")]),_._v(" "),t("li",[_._v("事务回滚：参与者接收到 Rollback 请求后，会利用其在阶段一种记录的 Undo 信息执行事物回滚操作，并在完成回滚之后释放事务执行期间占用的资源。")]),_._v(" "),t("li",[_._v("反馈事务回滚结果：参与则在完成事务回滚之后，向协调者发送 ACK 消息")]),_._v(" "),t("li",[_._v("中断事务：协调者接收到所有参与者反馈的 ACK 消息后，完成事务中断")])]),_._v(" "),t("p",[_._v("这种解决方案优点是实现简单，缺点也很明显：")]),_._v(" "),t("p",[_._v("**同步阻塞：**当参与事务者存在占用公共资源的情况，其中一个占用了资源，其他事务参与者就只能阻塞等待资源释放，处于阻塞状态。")]),_._v(" "),t("p",[_._v("**单点故障：**一旦事务管理器出现故障，整个系统不可用")]),_._v(" "),t("p",[_._v("**数据不一致：**在阶段二，如果事务管理器只发送了部分 commit 消息，此时网络发生异常，那么只有部分参与者接收到 commit 消息，也就是说只有部分参与者提交了事务，使得系统数据不一致。")]),_._v(" "),t("p",[_._v("**不确定性：**当协事务管理器发送 commit 之后，并且此时只有一个参与者收到了 commit，那么当该参与者与事务管理器同时宕机之后，重新选举的事务管理器无法确定该条消息是否提交成功。")]),_._v(" "),t("p",[_._v("还有 3PC 提交，是对2PC提交做了一些改进")]),_._v(" "),t("ul",[t("li",[_._v("与两阶段提交不同的是，三阶段提交有两个改动点。引入超时机制。同时在协调者和参与者中都引入超时机制。在第一阶段和第二阶段中插入一个准备阶段。保证了在最后提交阶段之前各参与节点的状态是一致的。")]),_._v(" "),t("li",[_._v("三阶段提交就有 CanCommit、PreCommit、DoCommit三个阶段。")])]),_._v(" "),t("h3",{attrs:{id:"_2-tcc"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-tcc"}},[_._v("#")]),_._v(" 2. TCC")]),_._v(" "),t("p",[_._v("TCC 指的是"),t("code",[_._v("Try - Confirm - Cancel")]),_._v("。")]),_._v(" "),t("ul",[t("li",[_._v("Try 指的是预留，即资源的预留和锁定，"),t("strong",[_._v("注意是预留")]),_._v("。")]),_._v(" "),t("li",[_._v("Confirm 指的是确认操作，这一步其实就是真正的执行了。")]),_._v(" "),t("li",[_._v("Cancel 指的是撤销操作，可以理解为把预留阶段的动作撤销了。")])]),_._v(" "),t("p",[_._v("TCC 事务机制相比于上面介绍的 XA，解决了其几个缺点：")]),_._v(" "),t("ol",[t("li",[_._v("解决了协调者单点，由主业务方发起并完成这个业务活动。业务活动管理器也变成多点，引入集群。")]),_._v(" "),t("li",[_._v("同步阻塞：引入超时，超时后进行补偿，并且不会锁定整个资源，将资源转换为业务逻辑形式，粒度变小。")]),_._v(" "),t("li",[_._v("数据一致性，有了补偿机制之后，由业务活动管理器控制一致性")])]),_._v(" "),t("p",[_._v("TCC(Try Confirm Cancel)")]),_._v(" "),t("p",[t("strong",[_._v("Try 阶段")]),_._v("：尝试执行，完成所有业务检查（一致性）, 预留必须业务资源（准隔离性）")]),_._v(" "),t("p",[t("strong",[_._v("Confirm 阶段")]),_._v("：确认执行真正执行业务，不作任何业务检查，只使用 Try 阶段预留的业务资源，Confirm 操作满足幂等性。要求具备幂等设计，Confirm 失败后需要进行重试。")]),_._v(" "),t("p",[t("strong",[_._v("Cancel 阶段")]),_._v("：取消执行，释放 Try 阶段预留的业务资源 Cancel 操作满足幂等性。Cancel 阶段的异常和 Confirm 阶段异常处理方案基本上一致。")]),_._v(" "),t("p",[_._v("在 Try 阶段，是对业务系统进行检查及资源预览，比如订单和存储操作，需要检查库存剩余数量是否够用，并进行预留，预留操作的话就是新建一个可用库存数量字段，Try 阶段操作是对这个可用库存数量进行操作。 基于 TCC 实现分布式事务，会将原来只需要一个接口就可以实现的逻辑拆分为 Try、Confirm、Cancel 三个接口，所以代码实现复杂度相对较高。")]),_._v(" "),t("h3",{attrs:{id:"_3-本地消息表"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-本地消息表"}},[_._v("#")]),_._v(" 3. 本地消息表")]),_._v(" "),t("p",[_._v("本地消息表其实就是利用了 "),t("strong",[_._v("各系统本地的事务")]),_._v("来实现分布式事务。")]),_._v(" "),t("p",[t("img",{attrs:{src:"https://hedonspace.oss-cn-beijing.aliyuncs.com/img2/008eGmZEly1gpccd0grhrj30lx0a2acl.jpg",alt:"图片"}})]),_._v(" "),t("ol",[t("li",[_._v("当系统 A 被其他系统调用发生数据库表更操作，首先会更新数据库的业务表，其次会往相同数据库的消息表中插入一条数据，两个操作发生在同一个事务中")]),_._v(" "),t("li",[_._v("系统 A 的脚本定期轮询本地消息往 mq 中写入一条消息，如果消息发送失败会进行重试")]),_._v(" "),t("li",[_._v("系统 B 消费 mq 中的消息，并处理业务逻辑。如果本地事务处理失败，会在继续消费 mq 中的消息进行重试，如果业务上的失败，可以通知系统 A 进行回滚操作")])]),_._v(" "),t("p",[_._v("本地消息表实现的条件：")]),_._v(" "),t("ol",[t("li",[_._v("消费者与生成者的接口都要支持幂等")]),_._v(" "),t("li",[_._v("生产者需要额外的创建消息表")]),_._v(" "),t("li",[_._v("需要提供补偿逻辑，如果消费者业务失败，需要生产者支持回滚操作")])]),_._v(" "),t("p",[_._v("容错机制：")]),_._v(" "),t("ol",[t("li",[_._v("步骤 1 失败时，事务直接回滚")]),_._v(" "),t("li",[_._v("步骤 2、3 写 mq 与消费 mq 失败会进行重试")]),_._v(" "),t("li",[_._v("步骤 3 业务失败系统 B 向系统 A 发起事务回滚操作")])]),_._v(" "),t("p",[_._v("此方案的核心是将需要分布式处理的任务通过消息日志的方式来异步执行。消息日志可以存储到本地文本、数据库或消息队列，再通过业务规则自动或人工发起重试。人工重试更多的是应用于支付场景，通过对账系统对事后问题的处理。")]),_._v(" "),t("h3",{attrs:{id:"_4-可靠消息最终一致性"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-可靠消息最终一致性"}},[_._v("#")]),_._v(" 4. 可靠消息最终一致性")]),_._v(" "),t("p",[t("img",{attrs:{src:"https://hedonspace.oss-cn-beijing.aliyuncs.com/img2/008eGmZEly1gpccdl07auj30ls0cvtcp.jpg",alt:"图片"}})]),_._v(" "),t("ol",[t("li",[_._v("A 系统先向 mq 发送一条 prepare 消息，如果 prepare 消息发送失败，则直接取消操作")]),_._v(" "),t("li",[_._v("如果消息发送成功，则执行本地事务")]),_._v(" "),t("li",[_._v("如果本地事务执行成功，则想 mq 发送一条 confirm 消息，如果发送失败，则发送回滚消息")]),_._v(" "),t("li",[_._v("B 系统定期消费 mq 中的 confirm 消息，执行本地事务，并发送 ack 消息。如果 B 系统中的本地事务失败，会一直不断重试，如果是业务失败，会向 A 系统发起回滚请求")]),_._v(" "),t("li",[_._v("mq 会定期轮询所有 prepared 消息调用系统 A 提供的接口查询消息的处理情况，如果该 prepare 消息本地事务处理成功，则重新发送 confirm 消息，否则直接回滚该消息")])]),_._v(" "),t("p",[_._v("该方案与本地消息最大的不同是去掉了本地消息表，其次本地消息表依赖消息表重试写入 mq 这一步由本方案中的轮询 prepare 消息状态来重试或者回滚该消息替代。其实现条件与余容错方案基本一致。目前市面上实现该方案的只有阿里的 RocketMq。")]),_._v(" "),t("h3",{attrs:{id:"_5-尽最大努力通知"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-尽最大努力通知"}},[_._v("#")]),_._v(" 5. 尽最大努力通知")]),_._v(" "),t("p",[_._v("最大努力通知是最简单的一种柔性事务，适用于一些最终一致性时间敏感度低的业务，且被动方处理结果 不影响主动方的处理结果。")]),_._v(" "),t("p",[_._v("这个方案的大致意思就是：")]),_._v(" "),t("ol",[t("li",[_._v("系统 A 本地事务执行完之后，发送个消息到 MQ；")]),_._v(" "),t("li",[_._v("这里会有个专门消费 MQ 的服务，这个服务会消费 MQ 并调用系统 B 的接口；")]),_._v(" "),t("li",[_._v("要是系统 B 执行成功就 ok 了；要是系统 B 执行失败了，那么最大努力通知服务就定时尝试重新调用系统 B, 反复 N 次，最后还是不行就放弃。")])]),_._v(" "),t("Vssue")],1)}),[],!1,null,null,null);v.default=l.exports}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{420:function(t,e,a){"use strict";a.r(e);var s=a(47),r=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"分布式锁"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#分布式锁"}},[t._v("#")]),t._v(" 分布式锁")]),t._v(" "),a("blockquote",[a("p",[t._v("参考：https://blog.csdn.net/wuzhiwei549/article/details/80692278")])]),t._v(" "),a("h2",{attrs:{id:"一、为什么需要分布式锁"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、为什么需要分布式锁"}},[t._v("#")]),t._v(" 一、为什么需要分布式锁")]),t._v(" "),a("p",[t._v("单机应用，所有的请求都会分配到当前服务器的 JVM 内部，然后映射为操作系统的线程进行处理，而这个共享变量只是在这个 JVM 内部的一块内存空间。")]),t._v(" "),a("p",[t._v("后来业务发展，需要做集群，一个应用需要部署到几台机器上然后做负载均衡：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://tva1.sinaimg.cn/large/008eGmZEgy1gp41ext037j30dr0cnwf2.jpg",alt:"这里写图片描述"}})]),t._v(" "),a("p",[t._v("上图可以看到，变量 A 存在 JVM1、JVM2、JVM3 三个 JVM 内存中（这个变量 A 主要体现是在一个类中的一个成员变量，是一个有状态的对象，例如：UserController 控制器中的一个整形类型的成员变量），如果不加任何控制的话，变量 A 同时都会在JVM分配一块内存，三个请求发过来同时对这个变量操作，显然结果是不对的。即使不是同时发过来，三个请求分别操作三个不同 JVM 内存区域的数据，变量 A 之间不存在共享，也不具有可见性，处理的结果也是不对的。")]),t._v(" "),a("p",[t._v("如果我们业务中确实存在这个场景的话，我们就需要一种方法解决这个问题。")]),t._v(" "),a("p",[t._v("为了保证一个方法或属性在高并发情况下的同一时间只能被同一个线程执行，在传统单体应用单机部署的情况下，可以使用 Java 并发处理相关的 API（如ReentrantLock 或 Synchronized）进行互斥控制。在单机环境中，Java中提供了很多并发处理相关的 API。但是，随着业务发展的需要，原单体单机部署的系统被演化成分布式集群系统后，由于分布式系统多线程、多进程并且分布在不同机器上，这将使原单机部署情况下的并发控制锁策略失效，单纯的 Java API 并不能提供分布式锁的能力。"),a("strong",[t._v("为了解决这个问题就需要一种跨 JVM 的互斥机制来控制共享资源的访问")]),t._v("，这就是分布式锁要解决的问题。")]),t._v(" "),a("h2",{attrs:{id:"二、分布式锁应该具备哪些条件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二、分布式锁应该具备哪些条件"}},[t._v("#")]),t._v(" 二、分布式锁应该具备哪些条件")]),t._v(" "),a("p",[t._v("1、在分布式系统环境下，一个方法在同一时间只能被一个机器的一个线程执行；\n2、高可用的获取锁与释放锁；\n3、高性能的获取锁与释放锁；\n4、具备可重入特性；\n5、具备锁失效机制，防止死锁；\n6、具备非阻塞锁特性，即没有获取到锁将直接返回获取锁失败。")]),t._v(" "),a("h2",{attrs:{id:"三、分布式锁的三种实现方式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三、分布式锁的三种实现方式"}},[t._v("#")]),t._v(" 三、分布式锁的三种实现方式")]),t._v(" "),a("p",[t._v("分布式的 CAP 理论告诉我们“任何一个分布式系统都无法同时满足**一致性（Consistency）、可用性（Availability）和分区容错性（Partition tolerance），**最多只能同时满足两项。”所以，很多系统在设计之初就要对这三者做出取舍。在互联网领域的绝大多数的场景中，都需要牺牲强一致性来换取系统的高可用性，系统往往只需要保证“最终一致性”，只要这个最终时间是在用户可以接受的范围内即可。")]),t._v(" "),a("p",[t._v("在很多场景中，我们为了保证数据的最终一致性，需要很多的技术方案来支持，比如分布式事务、分布式锁等。有的时候，我们需要保证一个方法在同一时间内只能被同一个线程执行。")]),t._v(" "),a("h3",{attrs:{id:"_1-基于数据库实现排他锁"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-基于数据库实现排他锁"}},[t._v("#")]),t._v(" 1. 基于数据库实现排他锁")]),t._v(" "),a("h4",{attrs:{id:"方案一"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#方案一"}},[t._v("#")]),t._v(" [方案一]")]),t._v(" "),a("p",[a("strong",[t._v("表结构：")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://tva1.sinaimg.cn/large/008eGmZEgy1gp41svsgsrj30lo054q3j.jpg",alt:"img"}})]),t._v(" "),a("p",[a("strong",[t._v("获取锁：")])]),t._v(" "),a("div",{staticClass:"language-mysql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("INSERT INTO method_lock (method_name, desc) VALUES ('methodName', 'methodName');\n")])])]),a("p",[t._v("在上表中我们对 method_name 做了唯一性约束，这里如果有多个请求同时提交到数据库的话，数据库会保证只有一个操作可以成功。")]),t._v(" "),a("p",[a("strong",[t._v("释放锁：")])]),t._v(" "),a("p",[t._v("执行完方法后再将该数据从数据库中删除，表示释放锁。")]),t._v(" "),a("div",{staticClass:"language-mysql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("DELETE FROM method_lock where method_name = 'methodName';\n")])])]),a("h4",{attrs:{id:"方案二"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#方案二"}},[t._v("#")]),t._v(" [方案二]")]),t._v(" "),a("p",[a("strong",[t._v("表结构：")])]),t._v(" "),a("div",{staticClass:"language-mysql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("DROP TABLE IF EXISTS `method_lock`;\nCREATE TABLE `method_lock` (\n  `id` int(11) unsigned NOT NULL AUTO_INCREMENT COMMENT '主键',\n  `method_name` varchar(64) NOT NULL COMMENT '锁定的方法名',\n  `state` tinyint NOT NULL COMMENT '1:未分配；2：已分配',\n  `update_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,\n  `version` int NOT NULL COMMENT '版本号',\n  `PRIMARY KEY (`id`),\n  UNIQUE KEY `uidx_method_name` (`method_name`) USING BTREE\n) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COMMENT='锁定中的方法';\n")])])]),a("p",[a("strong",[t._v("先获取锁的信息：")])]),t._v(" "),a("div",{staticClass:"language-mysql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("select id, method_name, state,version from method_lock where state=1 and method_name='methodName';\n")])])]),a("p",[a("strong",[t._v("占有锁：")])]),t._v(" "),a("p",[t._v("利用乐观锁方式（CAS思想）来尝试占有锁，如果没有更新影响到一行数据，则说明这个资源已经被别人占位了。")]),t._v(" "),a("div",{staticClass:"language-mysql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("update t_resoure set state=2, version=oldVersion+1, update_time=now() where method_name='methodName' and state=1 and version=oldVersion;\n")])])]),a("p",[a("strong",[t._v("缺点：")])]),t._v(" "),a("ol",[a("li",[t._v("这把锁强依赖数据库的可用性，数据库是一个单点，一旦数据库挂掉，会导致业务系统不可用。")]),t._v(" "),a("li",[t._v("这把锁没有失效时间，一旦解锁操作失败，就会导致锁记录一直在数据库中，其他线程无法再获得到锁。")]),t._v(" "),a("li",[t._v("这把锁只能是非阻塞的，因为数据的 insert 操作，一旦插入失败就会直接报错。没有获得锁的线程并不会进入排队队列，要想再次获得锁就要再次触发获得锁操作。")]),t._v(" "),a("li",[t._v("这把锁是非重入的，同一个线程在没有释放锁之前无法再次获得该锁。因为数据中数据已经存在了。")])]),t._v(" "),a("p",[a("strong",[t._v("解决方案：")])]),t._v(" "),a("ol",[a("li",[t._v("数据库是单点？搞两个数据库，数据之前双向同步。一旦挂掉快速切换到备库上。")]),t._v(" "),a("li",[t._v("没有失效时间？只要做一个定时任务，每隔一定时间把数据库中的超时数据清理一遍。")]),t._v(" "),a("li",[t._v("非阻塞的？搞一个while循环，直到insert成功再返回成功。")]),t._v(" "),a("li",[t._v("非重入的？在数据库表中加个字段，记录当前获得锁的机器的主机信息和线程信息，那么下次再获取锁的时候先查询数据库，如果当前机器的主机信息和线程信息在数据库可以查到的话，直接把锁分配给他就可以了。")])]),t._v(" "),a("h3",{attrs:{id:"_2-基于-redis-实现"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-基于-redis-实现"}},[t._v("#")]),t._v(" 2. 基于 Redis 实现")]),t._v(" "),a("h3",{attrs:{id:"_3-基于-zookeeper-实现"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-基于-zookeeper-实现"}},[t._v("#")]),t._v(" 3. 基于 zookeeper 实现")]),t._v(" "),a("Vssue")],1)}),[],!1,null,null,null);e.default=r.exports}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[114],{524:function(a,t,s){"use strict";s.r(t);var n=s(47),e=Object(n.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"面试题丨spring"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#面试题丨spring"}},[a._v("#")]),a._v(" 面试题丨Spring")]),a._v(" "),s("h2",{attrs:{id:"_1-spring-ioc-原理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-spring-ioc-原理"}},[a._v("#")]),a._v(" 1. Spring IoC 原理")]),a._v(" "),s("h2",{attrs:{id:"_2-spring-aop-原理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-spring-aop-原理"}},[a._v("#")]),a._v(" 2. Spring AOP 原理")]),a._v(" "),s("h2",{attrs:{id:"_3-spring-bean-生命周期"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-spring-bean-生命周期"}},[a._v("#")]),a._v(" 3. Spring Bean 生命周期")]),a._v(" "),s("div",{staticClass:"language-flow extra-class"},[s("pre",{pre:!0,attrs:{class:"language-flow"}},[s("code",[a._v("st"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=>")]),a._v("start"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" 开始\nop1"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=>")]),a._v("operation"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" 构造器创建 bean "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("实例")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("默认无参数构造"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\nop2"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=>")]),a._v("operation"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" 为 bean 的属性设置值和对其他 bean "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("引用")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("调用 "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("set")]),a._v(" 方法"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\nop3"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=>")]),a._v("operation"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" 把 bean 实例传递 bean 后置处理器的方法 postProcessBeforeInitialization\nop4"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=>")]),a._v("operation"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" 调用 bean "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("的初始化的方法")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("需要进行配置初始化的方法"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\nop5"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=>")]),a._v("operation"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" 把 bean 实例传递 bean 后置处理器的方法 postProcessAfterInitialization\nop6"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=>")]),a._v("operation"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" bean "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("可以使用了")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("对象获取到了"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\nop7"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=>")]),a._v("operation"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" 当容器关闭时候，调用 bean "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("的销毁的方法")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("需要进行配置销毁的方法"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\ne"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=>")]),a._v("end"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" 结束\nst"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("op1"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("op2"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("op3"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("op4"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("op5"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("op6"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("op7"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("e\n")])])]),s("h2",{attrs:{id:"_4-spring-bean-三级缓存"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-spring-bean-三级缓存"}},[a._v("#")]),a._v(" 4. Spring Bean 三级缓存")]),a._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("/** 一级缓存，用于存放完全初始化好的 bean，从该缓存中取出的 bean 可以直接使用*/")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("private")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("final")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Map")]),s("span",{pre:!0,attrs:{class:"token generics"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("String")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Object")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v(" singletonObjects "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("ConcurrentHashMap")]),s("span",{pre:!0,attrs:{class:"token generics"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("256")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("/** 二级缓存，存放实例化完成（尚未填充属性和执行 initMethod）的 bean ，用于解决循环依赖*/")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("private")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("final")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Map")]),s("span",{pre:!0,attrs:{class:"token generics"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("String")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Object")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v(" earlySingletonObjects "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("ConcurrentHashMap")]),s("span",{pre:!0,attrs:{class:"token generics"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("16")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("/** 三级缓存，存放原始的 bean 工厂对象（尚未填充属性），用于解决循环依赖 */")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("private")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("final")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Map")]),s("span",{pre:!0,attrs:{class:"token generics"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("String")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("ObjectFactory")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("?")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v(" singletonFactories "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("HashMap")]),s("span",{pre:!0,attrs:{class:"token generics"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("16")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" \n")])])]),s("p",[a._v("三级缓存的划分及其作用：")]),a._v(" "),s("ol",[s("li",[s("p",[a._v("一级缓存"),s("code",[a._v("singletonObjects")]),a._v("是完整的bean，它可以被外界任意使用，并且不会有歧义。")])]),a._v(" "),s("li",[s("p",[a._v("二级缓存"),s("code",[a._v("earlySingletonObjects")]),a._v("是不完整的bean，没有完成初始化，它与"),s("code",[a._v("singletonObjects")]),a._v("的分离主要是职责的分离以及边界划分，可以试想一个Map缓存里既有完整可使用的bean，也有不完整的，只能持有引用的bean，在复杂度很高的架构中，很容易出现歧义，并带来一些不可预知的错误。")])]),a._v(" "),s("li",[s("p",[a._v("三级缓存"),s("code",[a._v("singletonFactories")]),a._v("，其职责就是包装一个bean，有回调逻辑，所以它的作用非常清晰，并且只能处于第三层。")])]),a._v(" "),s("li",[s("p",[a._v("在实际使用中，要获取一个bean，先从一级缓存一直查找到三级缓存，缓存bean的时候是从三级到一级的顺序保存，并且缓存bean的过程中，三个缓存都是互斥的，只会保持bean在一个缓存中，而且，最终都会在一级缓存中。")])])]),a._v(" "),s("h2",{attrs:{id:"_5-spring-循环依赖"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-spring-循环依赖"}},[a._v("#")]),a._v(" 5. Spring 循环依赖")]),a._v(" "),s("h5",{attrs:{id:"什么是循环依赖"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#什么是循环依赖"}},[a._v("#")]),a._v(" 什么是循环依赖")]),a._v(" "),s("p",[a._v("所谓循环依赖，就是对象之间的引用存在闭环，比如说 X 引用 Y，Y 引用 X，这样就形成的闭环，也就是我们所说的循环依赖。")]),a._v(" "),s("h5",{attrs:{id:"解决方式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#解决方式"}},[a._v("#")]),a._v(" 解决方式")]),a._v(" "),s("p",[s("img",{attrs:{src:"https://tva1.sinaimg.cn/large/008eGmZEly1gox3ewozk2j30nd0m1acn.jpg",alt:"在这里插入图片描述"}})]),a._v(" "),s("div",{staticClass:"language-markdown extra-class"},[s("pre",{pre:!0,attrs:{class:"language-markdown"}},[s("code",[s("span",{pre:!0,attrs:{class:"token title important"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("#")]),a._v(" 为什么暴露的不是一个单纯的 X，而是一个 X 所对应的 ObjectFactory 工厂类？")]),a._v("\n如果我们直接缓存一个 X 的话，那么我们拿出来的话就一个 X，程序员很难对它进行改造和拓展。\n如果我们拿出来的是一个工厂类的话，那么我们可以对它进行改造，使得我们可以拿出我们需要的一个特定的 X 对象。\n")])])]),s("div",{staticClass:"language-markdown extra-class"},[s("pre",{pre:!0,attrs:{class:"language-markdown"}},[s("code",[s("span",{pre:!0,attrs:{class:"token title important"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("#")]),a._v(" 为什么 Spring 循环依赖只支持单例？")]),a._v("\n因为如果你不支持单例的话，那么第一遍我们的 X 压根就不会走生命周期流程。因为单例的情况下，它会在 Spring 容器初始化的时候就去做 Bean 的生命周期流程。\n如果是原型的话，它一开始是不会走的，只有当我们需要用到这个 Bean 对象的时候，才会去走 Bean 的生命周期流程。\n")])])]),s("div",{staticClass:"language-markdown extra-class"},[s("pre",{pre:!0,attrs:{class:"language-markdown"}},[s("code",[s("span",{pre:!0,attrs:{class:"token title important"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("#")]),a._v(" 是不是只支持非构造方法注入的情况？")]),a._v("\n是的。\n如果 X 和 Y 是用构造方法注入来实现循环依赖的话，比如第一遍在实现 X 的时候，要传一个 Y 的参数，这个时候 Y 是没有的，那么就需要来实现 Y，Y 在调用构造函数的时候，也需要 X，那么这个时候 X 也是没有的。再回去实现 X，X 也需要 Y，Y 也没有，就又要去实现 Y 了，这样就造成死循环了。\n")])])]),s("h2",{attrs:{id:"_6-spring-架构"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6-spring-架构"}},[a._v("#")]),a._v(" 6. Spring 架构")]),a._v(" "),s("p",[s("img",{attrs:{src:"https://tva1.sinaimg.cn/large/008eGmZEly1gox1sx9hgdj30ok0h03z1.jpg",alt:"img"}})]),a._v(" "),s("p",[a._v("1.1 核心容器：由 spring-beans、spring-core、spring-context 和 spring-expression（Spring Expression Language, SpEL） 4 个模块组成。\n  spring-beans 和 spring-core 模块是 Spring 框架的核心模块，包含了控制反转（Inversion of\nControl, IOC）和依赖注入（Dependency Injection, DI）。BeanFactory 接口是 Spring 框架中\n的核心接口，它是工厂模式的具体实现。BeanFactory 使用控制反转对应用程序的配置和依赖性规范与\n实际的应用程序代码进行了分离。但 BeanFactory 容器实例化后并不会自动实例化 Bean，只有当 Bean\n被使用时 BeanFactory 容器才会对该 Bean 进行实例化与依赖关系的装配。")]),a._v(" "),s("p",[a._v("spring-context 模块构架于核心模块之上，他扩展了 BeanFactory，为她添加了 Bean 生命周期\n控制、框架事件体系以及资源加载透明化等功能。此外该模块还提供了许多企业级支持，如邮件访问、\n远程访问、任务调度等，ApplicationContext 是该模块的核心接口，它是 BeanFactory 的超类，与\nBeanFactory 不同，ApplicationContext 容器实例化后会自动对所有的单实例 Bean 进行实例化与\n依赖关系的装配，使之处于待用状态。")]),a._v(" "),s("p",[a._v("spring-expression 模块是统一表达式语言（EL）的扩展模块，可以查询、管理运行中的对象，\n同时也方便的可以调用对象方法、操作数组、集合等。它的语法类似于传统 EL，但提供了额外的功能，\n最出色的要数函数调用和简单字符串的模板函数。这种语言的特性是基于 Spring 产品的需求而设计，\n他可以非常方便地同 Spring IOC 进行交互。")]),a._v(" "),s("p",[a._v("1.2 AOP 和设备支持：由 spring-aop、spring-aspects 和 spring-instrument 3 个模块组成。\n  spring-aop 是 Spring 的另一个核心模块，是 AOP 主要的实现模块。作为继 OOP 后，对程序员影\n响最大的编程思想之一，AOP 极大地开拓了人们对于编程的思路。在 Spring 中，他是以 JVM 的动态代\n理技术为基础，然后设计出了一系列的 AOP 横切实现，比如前置通知、返回通知、异常通知等，同时，\nPointcut 接口来匹配切入点，可以使用现有的切入点来设计横切面，也可以扩展相关方法根据需求进\n行切入。")]),a._v(" "),s("p",[a._v("spring-aspects 模块集成自 AspectJ 框架，主要是为 Spring AOP 提供多种 AOP 实现方法。\nspring-instrument 模块是基于 JAVA SE 中的”java.lang.instrument”进行设计的，应该算是\nAOP 的一个支援模块，主要作用是在 JVM 启用时，生成一个代理类，程序员通过代理类在运行时修改类\n的字节，从而改变一个类的功能，实现 AOP 的功能。在分类里，我把他分在了 AOP 模块下，在 Spring 官\n方文档里对这个地方也有点含糊不清,这里是纯个人观点。")]),a._v(" "),s("p",[a._v("1.3 数据访问及集成：由spring-jdbc、spring-tx、spring-orm、spring-jms 和 spring-oxm 5 个模块组成。\n  spring-jdbc 模块是 Spring 提供的 JDBC 抽象框架的主要实现模块，用于简化 Spring JDBC。主\n要是提供 JDBC 模板方式、关系数据库对象化方式、SimpleJdbc 方式、事务管理来简化 JDBC 编程，主要实现类是 JdbcTemplate、SimpleJdbcTemplate 以及 NamedParameterJdbcTemplate。")]),a._v(" "),s("p",[a._v("spring-tx 模块是 Spring JDBC 事务控制实现模块。使用 Spring 框架，它对事务做了很好的封装，\n通过它的 AOP 配置，可以灵活的配置在任何一层；但是在很多的需求和应用，直接使用 JDBC 事务控制\n还是有其优势的。其实，事务是以业务逻辑为基础的；一个完整的业务应该对应业务层里的一个方法；\n如果业务操作失败，则整个事务回滚；所以，事务控制是绝对应该放在业务层的；但是，持久层的设计\n则应该遵循一个很重要的原则：保证操作的原子性，即持久层里的每个方法都应该是不可以分割的。所\n以，在使用 Spring JDBC 事务控制时，应该注意其特殊性。")]),a._v(" "),s("p",[a._v("spring-orm 模块是 ORM 框架支持模块，主要集成 Hibernate, Java Persistence API (JPA) 和Java Data Objects (JDO) 用于资源管理、数据访问对象(DAO)的实现和事务策略。")]),a._v(" "),s("p",[a._v("spring-jms 模块（Java Messaging Service）能够发送和接受信息，自 Spring Framework 4.1\n以后，他还提供了对 spring-messaging 模块的支撑。")]),a._v(" "),s("p",[a._v("spring-oxm 模块主要提供一个抽象层以支撑 OXM（OXM 是 Object-to-XML-Mapping 的缩写，它是一个 O/M-mapper，将 java 对象映射成 XML 数据，或者将 XML 数据映射成 java 对象），例如：JAXB,Castor, XMLBeans, JiBX 和 XStream 等。")]),a._v(" "),s("p",[a._v("1.4 Web：由 spring-web、spring-webmvc、spring-websocket 和 spring-webflux 4 个模块组成.\n  spring-web 模块为 Spring 提供了最基础 Web 支持，主要建立于核心容器之上，通过 Servlet 或\n者 Listeners 来初始化 IOC 容器，也包含一些与 Web 相关的支持。")]),a._v(" "),s("p",[a._v("spring-webmvc 模 块 众 所 周 知 是 一 个 的 Web-Servlet 模 块 ， 实 现 了 Spring MVC\n（model-view-Controller）的 Web 应用。")]),a._v(" "),s("p",[a._v("spring-websocket 模块主要是与 Web 前端的全双工通讯的协议。（资料缺乏，这是个人理解）")]),a._v(" "),s("p",[a._v("spring-webflux 是一个新的非堵塞函数式 Reactive Web 框架，可以用来建立异步的，非阻塞，事件驱动的服务，并且扩展性非常好。")]),a._v(" "),s("p",[a._v("1.5 报文发送：即 spring-messaging 模块。\n  spring-messaging 是从 Spring4 开始新加入的一个模块，主要职责是为 Spring 框架集成一些基\n础的报文传送应用。")]),a._v(" "),s("p",[a._v("1.6 Test：即 spring-test 模块。\n  spring-test 模块主要为测试提供支持的，毕竟在不需要发布（程序）到你的应用服务器或者连接\n到其他企业设施的情况下能够执行一些集成测试或者其他测试对于任何企业都是非常重要的。")]),a._v(" "),s("h2",{attrs:{id:"_7-spring-的优点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_7-spring-的优点"}},[a._v("#")]),a._v(" 7. Spring 的优点")]),a._v(" "),s("ol",[s("li",[s("p",[a._v("方便解耦，便于开发（Spring就是一个大工厂，可以将所有对象的创建和依赖关系维护都交给spring管理）。")])]),a._v(" "),s("li",[s("p",[a._v("spring 支持 aop 编程（spring提供面向切面编程，可以很方便的实现对程序进行权限拦截和运行监控等功能）")])]),a._v(" "),s("li",[s("p",[a._v("声明式事务的支持（通过配置就完成对事务的支持，不需要手动编程）。")])]),a._v(" "),s("li",[s("p",[a._v("方便程序的测试，spring 对junit4支持，可以通过注解方便的测试spring 程序。")])]),a._v(" "),s("li",[s("p",[a._v("方便集成各种优秀的框架。")])]),a._v(" "),s("li",[s("p",[a._v("降低javaEE API的使用难度（Spring 对javaEE开发中非常难用的一些API 例如JDBC,javaMail,远程调用等，都提供了封装，是这些API应用难度大大降低）。")])])]),a._v(" "),s("h2",{attrs:{id:"_8-什么是-ioc-什么是-di"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_8-什么是-ioc-什么是-di"}},[a._v("#")]),a._v(" 8. 什么是 IoC，什么是 DI？")]),a._v(" "),s("ul",[s("li",[s("p",[a._v("IoC 即 inversion fo control 控制反转。")]),a._v(" "),s("p",[a._v("举一个简单的例子，比如我们想要吃一个面包。在有面包店和无面包店两个情况我们会选择哪一种方式来获取面包呢？我们当然可以选择自己买面粉然后自己制作自己喜欢的口味的面包，但是流程就会比较复杂。其实，我们还可告诉面包店家，告知我们要的口味，由面包店来制作。这样，我们不但可以省去制作面包的过程，还可以吃到我们想要的口味。这就是控制反转。")]),a._v(" "),s("p",[a._v("当某个 Java 对象（如想吃面包的我）调用另外一个 Java 对象（被调用者，即被依赖对象，如面包）时，传统模式是用“new 被调用者”的代码方式来创建对象。当 Spring 框架出现后，对象的实现不再由调用者创建，而是由 Spring 容器（如面包店）来创建。Spring 容器会负责控制程序之间的关系（我和面包的关系），而不是由调用者（我）的代码程序直接控制。这样，控制权由调用者转移到 Spring 容器，控制权实现了反转，这就是 Spring 的控制反转。")])]),a._v(" "),s("li",[s("p",[a._v("DI 即 dependency injection 依赖注入")]),a._v(" "),s("p",[a._v("在系统运行过程中，动态的向某个对象注入它所依赖的对象。比如A依赖一个对象B（一般依赖的是接口），在运行前，A并不知道自己依赖的B的具体实现是怎么样的，IOC容器会在适当的时候为A创建一个合适的B对象，并且注入，这就是依赖注入。")])]),a._v(" "),s("li",[s("p",[a._v("IOC 是一个比 DI 更为宽泛的概念，但是其思想是类似的。IOC 是一种目的，DI 是一种手段，为了达到控制反转的目的，即程序员不需要自己new对象，对象由容器控制这个目的，Spring框架提供了依赖注入的手段，哪里需要对象，就在哪里注入。")])])]),a._v(" "),s("p",[a._v("DI 的 方式：")]),a._v(" "),s("ol",[s("li",[a._v("构造函数注入")]),a._v(" "),s("li",[a._v("setter 方法注入")])]),a._v(" "),s("h2",{attrs:{id:"_9-beanfactory-和-applicationcontext-的区别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_9-beanfactory-和-applicationcontext-的区别"}},[a._v("#")]),a._v(" 9. BeanFactory 和 ApplicationContext 的区别？")]),a._v(" "),s("p",[s("strong",[a._v("（1）概念上")])]),a._v(" "),s("p",[a._v("BeanFactory 可以理解为含有 bean 集合的工厂类。BeanFactory 包含了种 bean 的定义，以便在接收到客户端请求时将对应的 bean 实例化和对 bean 的生命周期进行控制。")]),a._v(" "),s("p",[a._v("ApplicationContext 是 BeanFactory 的超类，是Spring的一各更高级的容器，提供了更多的有用的功能：")]),a._v(" "),s("ol",[s("li",[a._v("国际化")]),a._v(" "),s("li",[a._v("资源访问")]),a._v(" "),s("li",[a._v("AOP")]),a._v(" "),s("li",[a._v("...")])]),a._v(" "),s("p",[s("strong",[a._v("（2）装载 Bean 上")])]),a._v(" "),s("p",[a._v("BeanFactory 是一种懒加载，在启动的时候不会去实例化Bean，中有从容器中拿Bean的时候才会去实例化；")]),a._v(" "),s("p",[a._v("ApplicationContext 在启动的时候就把所有的 Bean 全部实例化了。它还可以为Bean配置lazy-init=true 来让 Bean 延迟实例化；")]),a._v(" "),s("p",[s("strong",[a._v("（3）二者的选择")])]),a._v(" "),s("ul",[s("li",[s("p",[a._v("BeanFactory")]),a._v(" "),s("p",[a._v("BeanFactory 在应用启动的时候占用资源很少；对资源要求较高的应用，比较有优势；")])]),a._v(" "),s("li",[s("p",[a._v("ApplicationContext")]),a._v(" "),s("p",[a._v("所有的Bean在启动的时候都加载，系统运行的速度快；")]),a._v(" "),s("p",[a._v("在启动的时候所有的Bean都加载了，我们就能在系统启动的时候，尽早的发现系统中的配置问题")]),a._v(" "),s("p",[a._v("建议web应用，在启动的时候就把所有的Bean都加载了。（把费时的操作放到系统启动中完成）")])])]),a._v(" "),s("h2",{attrs:{id:"_10-spring-bean-的作用域"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_10-spring-bean-的作用域"}},[a._v("#")]),a._v(" 10. Spring Bean 的作用域")]),a._v(" "),s("ol",[s("li",[s("p",[a._v("singleton")]),a._v(" "),s("p",[a._v("这种 bean 范围是默认的，这种范围确保不管接受到多少个请求，每个容器中只有一个 bean 的实例，单例的模式由 bean factory 自身来维护。")])]),a._v(" "),s("li",[s("p",[a._v("prototype")]),a._v(" "),s("p",[a._v("原形范围与单例范围相反，为每一个 bean 请求提供一个实例。")])]),a._v(" "),s("li",[s("p",[a._v("request")]),a._v(" "),s("p",[a._v("在请求 bean 范围内会每一个来自客户端的网络请求创建一个实例，在请求完成以后，bean 会失效并被垃圾回收器回收。")])]),a._v(" "),s("li",[s("p",[a._v("session")]),a._v(" "),s("p",[a._v("与请求范围类似，确保每个 session 中有一个 bean 的实例，在 session 过期后，bean会随之失效。")])]),a._v(" "),s("li",[s("p",[a._v("global- session")]),a._v(" "),s("p",[a._v("global-session 和 Portlet 应用相关。当你的应用部署在 Portlet 容器中工作 时，它包含很多 portlet。如果你想要声明让所有的 portlet 共用全局的存储变量的话，那么这全局变量需要存储在 global-session 中。")])])]),a._v(" "),s("h2",{attrs:{id:"_11-spring-框架中的单例-beans-是线程安全的么"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_11-spring-框架中的单例-beans-是线程安全的么"}},[a._v("#")]),a._v(" 11. "),s("strong",[a._v("Spring")]),a._v(" 框架中的单例 "),s("strong",[a._v("Beans")]),a._v(" 是线程安全的么?")]),a._v(" "),s("p",[a._v("Spring 框架并没有对单例 bean 进行任何多线程的封装处理。关于单例 bean 的线程安全和并发问题需要开发者自行去搞定。但实际上，大部分的 Spring bean 并没有可变的状态（比如 Serview 类 和 DAO 类），所以在某种程度上说 Spring 的单例 bean 是线程安全的。如果你的 bean 有多种状态的话（比如 View Model 对象），就需要自行保证线程安全。")]),a._v(" "),s("p",[a._v("最浅显的解决办法就是将多态 bean 的作用域由“singleton”变更为“prototype”。")]),a._v(" "),s("p",[a._v("其他方法：")]),a._v(" "),s("ol",[s("li",[a._v("使用ThreadLocal，ThreadLocal 会为每一个线程提供一个独立的变量副本，这样在多线程对数据访问就不会出现冲突。因为每一个线程都拥有自己的变量副本，因此也就不需要同步该变量。ThreadLocal提供了线程安全的共享对象，在编写多线程代码时，可以把不安全的变量封装进ThreadLocal。")]),a._v(" "),s("li",[a._v("如果时web应用，可以使用 Spring Bean 的作用域中的 "),s("code",[a._v("request")]),a._v("，在 controller 类前面加上 "),s("code",[a._v('@Scope("****")')]),a._v("，表明每次请求都会生成一个新的 Bean 对象。这样也能起到线程安全的作用。")]),a._v(" "),s("li",[a._v("使用线程同步关键字 synchronized 。对于可能会改变 bean 属性的方法，当线程较多时，当一个线程调用该方法时，其他想要调用此方法的线程就要 block ，多线程并发量大的时候会对性能有一定的影响。")])]),a._v(" "),s("h2",{attrs:{id:"_12-spring-五种自动装配模式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_12-spring-五种自动装配模式"}},[a._v("#")]),a._v(" 12. Spring 五种自动装配模式")]),a._v(" "),s("ol",[s("li",[a._v("no：这是 Spring 框架的默认设置，在该设置下自动装配是关闭的，开发者需要自行在 bean 定义中用标签明确的设置依赖关系。")]),a._v(" "),s("li",[a._v("byName：该选项可以根据 bean 名称设置依赖关系。当向一个 bean 中自动装配一个属性时，容器将根据 bean 的名称自动在在配置文件中查询一个匹配的 bean。如果找到的话，就装配这个属性，如果没找到的话就报错。")]),a._v(" "),s("li",[a._v("byType：该选项可以根据 bean 类型设置依赖关系。当向一个 bean 中自动装配一个属性时，容器将根据 bean 的类型自动在在配置文件中查询一个匹配的 bean。如果找到的话，就装配这个属性， 如果没找到的话就报错。")]),a._v(" "),s("li",[a._v("constructor：造器的自动装配和 byType 模式类似，但是仅仅适用于与有构造器相同参数的 bean，如果在容器中没有找到与构造器参数类型一致的 bean，那么将会抛出异常。")]),a._v(" "),s("li",[a._v("autodetect：该模式自动探测使用"),s("strong",[a._v("构造器自动装配")]),a._v("或者 "),s("strong",[a._v("byType 自动装配")]),a._v("。首先，首先会尝试找合适的带参数的构造器，如果找到的话就是用构造器自动装配，如果在 bean 内部没有找到相应的构造器或者是无参构造器，容器就会自动选择 byTpe 的自动装配方式。")])]),a._v(" "),s("h2",{attrs:{id:"_13-autowired-和构造函数注入的区别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_13-autowired-和构造函数注入的区别"}},[a._v("#")]),a._v(" 13. @Autowired 和构造函数注入的区别")]),a._v(" "),s("blockquote",[s("p",[a._v("参考：https://blog.csdn.net/kane0409/article/details/78865964")])]),a._v(" "),s("p",[a._v("官方推荐构造函数注入，理由如下：")]),a._v(" "),s("ol",[s("li",[a._v("单一职责：当使用构造函数注入的时候，你会很容易发现参数是否过多，这个时候需要考虑你这个类的职责是否过大，考虑拆分的问题；而当使用 "),s("code",[a._v("@Autowired")]),a._v(" 注入 "),s("code",[a._v("field")]),a._v(" 的时候，不容易发现问题；")]),a._v(" "),s("li",[a._v("依赖不可变：只有使用构造函数注入才能注入 "),s("code",[a._v("final")]),a._v("；")]),a._v(" "),s("li",[a._v("依赖隐藏：使用依赖注入容器意味着类不再对依赖对象负责，获取依赖对象的职责就从类抽离出来，IOC 容器会帮你自动装备。这意味着它应该使用更明确清晰的公用接口方法或者构造器，这种方式就能很清晰的知道类需要什么和到底是使用 setter 还是构造器；")]),a._v(" "),s("li",[a._v("降低容器耦合度：依赖注入框架的核心思想之一是托管类不应依赖于所使用的 DI 容器。换句话说，它应该只是一个普通的 POJO，只要您将其传递给所有必需的依赖项，就可以独立地实例化。这样，您可以在单元测试中实例化它，而无需启动 IOC 容器并单独进行测试（使用一个可以进行集成测试的容器）。如果没有容器耦合，则可以将该类用作托管或非托管类，甚至可以切换到新的 DI 框架。")])]),a._v(" "),s("Vssue")],1)}),[],!1,null,null,null);t.default=e.exports}}]);
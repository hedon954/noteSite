(window.webpackJsonp=window.webpackJsonp||[]).push([[109],{520:function(a,t,s){"use strict";s.r(t);var _=s(47),v=Object(_.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"面试题丨mybatis"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#面试题丨mybatis"}},[a._v("#")]),a._v(" 面试题丨MyBatis")]),a._v(" "),s("h2",{attrs:{id:"_1-什么是-mybatis"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-什么是-mybatis"}},[a._v("#")]),a._v(" 1. 什么是 MyBatis?")]),a._v(" "),s("p",[a._v("MyBatis 是一个可以自定义SQL、存储过程和高级映射的持久层框架。MyBatis 摒除了大部分的 JDBC 代码、手工设置参数和结果集重获。MyBatis 只使用简单的 XML 和注解来配置和映射基本数据类型、Map 接口和 POJO 到数据库记录。相对 Hibernate 和 Apache OJB等“一站式” ORM 解决方案而言，Mybatis 是一种“半自动化”的ORM实现。")]),a._v(" "),s("h2",{attrs:{id:"_2-讲一下-mybatis-的缓存"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-讲一下-mybatis-的缓存"}},[a._v("#")]),a._v(" 2. 讲一下 MyBatis 的缓存")]),a._v(" "),s("p",[a._v("MyBatis 的缓存分为一级缓存和二级缓存。")]),a._v(" "),s("p",[a._v("一级缓存：")]),a._v(" "),s("ul",[s("li",[s("p",[a._v("与数据库同一次会话期间（同一个 SqlSession）查询到的数据会放在本地缓存汇总中。以后如果需要获取相同的数据，直接从缓存中拿，没必要再去查询数据库。")]),a._v(" "),s("p",[a._v("失效：")]),a._v(" "),s("ol",[s("li",[a._v("SqlSession 变了")]),a._v(" "),s("li",[a._v("查询条件不同")]),a._v(" "),s("li",[a._v("两次查询之间执行过增删改操作")]),a._v(" "),s("li",[a._v("手动清除一级缓存 "),s("code",[a._v("clearCache()")])])])])]),a._v(" "),s("p",[a._v("二级缓存：")]),a._v(" "),s("ul",[s("li",[s("p",[a._v("二级缓存是基于 "),s("code",[a._v("namespace")]),a._v(" 级别的缓存，一个 "),s("code",[a._v("namespace")]),a._v(" 对应一个二级缓存。")]),a._v(" "),s("p",[a._v("默认不开启，需要手动开启。")]),a._v(" "),s("p",[a._v("MyBatis 提供二级缓存的接口以及实现，缓存实现要求 POJO 实现 "),s("code",[a._v("Serializable")]),a._v(" 接口。")]),a._v(" "),s("p",[a._v("二级缓存在 "),s("code",[a._v("SqlSession")]),a._v(" 关闭或提交之后才会生效。")])]),a._v(" "),s("li",[s("p",[a._v("工作机制")]),a._v(" "),s("blockquote",[s("ol",[s("li",[a._v("一个会话，查询一条数据，这个数据就会被放在当前会话的以及缓存中")]),a._v(" "),s("li",[a._v("如果会话关闭，一级缓存中的数据就会被保存到二级缓存中，新的会话查询信息，就可以参照二级缓存")]),a._v(" "),s("li",[a._v("如果在一个 sqlSession 中即用了  EmployeeMapper 查询 Employee 信息，又用了 DepartmentMapper 查询了 Department 信息，那么，这是属于两个不同的 namespace 的。不同 namespace 查出的数据会放在自己对应的缓存中（map）。")])])])])]),a._v(" "),s("h2",{attrs:{id:"_3-mybatis-是如何进行分页的-分页插件的原理是什么"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-mybatis-是如何进行分页的-分页插件的原理是什么"}},[a._v("#")]),a._v(" 3. Mybatis 是如何进行分页的？分页插件的原理是什么？")]),a._v(" "),s("ol",[s("li",[s("p",[a._v("Mybatis 使用 RowBounds 对象进行分页，也可以直接编写 sql 实现分页，也可以使用 Mybatis 的分页插件。")])]),a._v(" "),s("li",[s("p",[a._v("分页插件的原理：实现 MyBatis 提供的接口，实现自定义插件，在插件的拦截方法内拦 截待执行的 sql，然后重写 sql。")]),a._v(" "),s("p",[a._v("举例：select * from student，拦截 sql 后重写为：select * from studnet limit 0，10。")])])]),a._v(" "),s("h2",{attrs:{id:"_4-简述-mybatis-的插件运行原理-以及如何编写一个插件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-简述-mybatis-的插件运行原理-以及如何编写一个插件"}},[a._v("#")]),a._v(" 4. 简述 Mybatis 的插件运行原理，以及如何编写一个插件？")]),a._v(" "),s("p",[a._v("插件的话其实核心就是一个拦截器。要么拦截参数，要么拦截 SQL，要么拦截查询结果。")]),a._v(" "),s("p",[a._v("这些的核心其实都是通过动态代理来实现的。")]),a._v(" "),s("p",[a._v("JDK 动态代理的话涉及到一个非常重要的类 "),s("code",[a._v("Proxy")]),a._v("，它有一个静态方法："),s("code",[a._v("newProxyInstance()")]),a._v("。需要传 3 个参数：")]),a._v(" "),s("ul",[s("li",[a._v("类加载器：当前这个类的类加载器就可。")]),a._v(" "),s("li",[a._v("实现类所实现的那些接口的 Class 对象组成的数组。")]),a._v(" "),s("li",[a._v("invocationHandler 接口实现类对象，里面的 invoke 方法可以对你要增强的类进行增强，在里面你可以通过反射指定你要增强的方法，决定增强的策略等等。")])]),a._v(" "),s("h2",{attrs:{id:"_5-mybatis-动态-sql-是做什么的-都有哪些动态-sql-能简述一下动态-sql-的执行原理不"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-mybatis-动态-sql-是做什么的-都有哪些动态-sql-能简述一下动态-sql-的执行原理不"}},[a._v("#")]),a._v(" 5. Mybatis 动态 sql 是做什么的?都有哪些动态 sql？能简述一下动态 sql 的执行原理不？")]),a._v(" "),s("p",[a._v("1）Mybatis 动态 sql 可以让我们在 Xml 映射文件内，以标签的形式编写动态 sql，完成逻辑 判断和动态拼接 sql 的功能。")]),a._v(" "),s("p",[a._v("2）Mybatis 提供了 9 种动态 sql 标签: trim|where|set|foreach|if|choose|when|otherwise|bind。")]),a._v(" "),s("p",[a._v("3）其执行原理为，使用 OGNL 从 sql 参数对象中计算表达式的值，根据表达式的值动态拼 接 sql，以此来完成动态 sql 的功能。")]),a._v(" "),s("p",[a._v("OGNL：")]),a._v(" "),s("blockquote",[s("p",[a._v("OGNL表达式是Object-Graph Navigation Language的缩写，是一种功能强大的表达式语言，通过简单一致的表达式语法，可以存取对象的任意属性，调用对象的方法，遍历整个对象的结构图，实现字段类型转换。")]),a._v(" "),s("p",[a._v("OGNL表达式是围绕 OGNL 上下文来进行的，OGNL 上下文实际上是一个Map对象，由 ognl.OgnlContext 类表示，它可以存放多个 JavaBean对象。OGNL 上下文具有一个根对象，访问根对象可以直接用名称或者属性名访问，而不需要加任何符号。")])]),a._v(" "),s("h2",{attrs:{id:"_6-和-的区别是什么"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6-和-的区别是什么"}},[a._v("#")]),a._v(" 6. #{}和${}的区别是什么?")]),a._v(" "),s("p",[a._v("1）"),s("code",[a._v("#{}")]),a._v(" 是预编译处理，"),s("code",[a._v("${}")]),a._v("是字符串替换。")]),a._v(" "),s("p",[a._v("2）Mybatis 在处理 #{} 时，会将 sql 中的 #{} 替换为?号，调用 PreparedStatement 的 set 方法来赋值;")]),a._v(" "),s("p",[a._v("3）Mybatis 在处理 "),s("code",[a._v("${}")]),a._v(" 时，就是把 "),s("code",[a._v("${}")]),a._v(" 替换成变量的值。")]),a._v(" "),s("ol",{attrs:{start:"4"}},[s("li",[a._v("使用 "),s("code",[a._v("#{}")]),a._v(" 可以有效的防止 SQL 注入，提高系统安全性。")])]),a._v(" "),s("div",{staticClass:"language-markdown extra-class"},[s("pre",{pre:!0,attrs:{class:"language-markdown"}},[s("code",[s("span",{pre:!0,attrs:{class:"token title important"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("#")]),a._v(" PreparedStatement 防止 SQL 注入的原理")]),a._v("\n代码中通过一个for循环，将字符串参数通过提取每一位上的char字符进行遍历，并通过switch()….case 条件语句进行判断，当出现换行符、引号、斜杠等特殊字符时，对这些特殊字符进行转义。那么，此时问题的答案就出来了，当我们使用PreparedStatement进行传参时，若传入参数为：张三’ or 1 = ‘1 时，经过程序后台进行转义后，真正的sql其实变成了： select * from user where name = ‘张三\\’ or 1 = \\’1’；显然这样查询出来的结果一定为空。\n")])])]),s("h2",{attrs:{id:"_7-mybatis-是否支持延迟加载-如果支持-它的实现原理是什么"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_7-mybatis-是否支持延迟加载-如果支持-它的实现原理是什么"}},[a._v("#")]),a._v(" 7. Mybatis 是否支持延迟加载？如果支持，它的实现原理是什么?")]),a._v(" "),s("p",[a._v("1）Mybatis 仅支持 association 关联对象和 collection 关联集合对象的延迟加载，association 指的就是一对一，collection 指的就是一对多查询。在 Mybatis 配置文件中，可以配置是否启用延迟加载 lazyLoadingEnabled=true|false。")]),a._v(" "),s("p",[a._v("2）它的原理是，使用 CGLIB 创建目标对象的代理对象，当调用目标方法时，进入拦截器方法，比如调用 a.getB().getName()，拦截器 invoke() 方法发现 a.getB() 是 null 值，那么就会单独发送事先保存好的查询关联 B 对象的 sql，把 B 查询上来，然后调用 a.setB(b)，于是 a 的 对象 b 属性就有值了，接着完成 a.getB().getName() 方法的调用。这就是延迟加载的基本原 理。")]),a._v(" "),s("h2",{attrs:{id:"_8-mybatis-的好处"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_8-mybatis-的好处"}},[a._v("#")]),a._v(" 8. MyBatis  的好处？")]),a._v(" "),s("p",[a._v("1）MyBatis 把 sql 语句从 Java 源程序中独立出来，放在单独的 XML 文件中编写，给程序的 维护带来了很大便利。")]),a._v(" "),s("p",[a._v("2）MyBatis 封装了底层 JDBC API 的调用细节，并能自动将结果集转换成 Java Bean 对象， 大大简化了 Java 数据库编程的重复工作。")]),a._v(" "),s("p",[a._v("3）因为 MyBatis 需要程序员自己去编写 sql 语句，程序员可以结合数据库自身的特点灵活控制 sql 语句，因此能够实现比 Hibernate 等全自动 orm 框架更高的查询效率，能够完成复杂查询。")]),a._v(" "),s("h2",{attrs:{id:"_9-mybatis-与-jpa-的区别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_9-mybatis-与-jpa-的区别"}},[a._v("#")]),a._v(" 9. MyBatis 与 JPA 的区别?")]),a._v(" "),s("p",[a._v("JPA：")]),a._v(" "),s("ol",[s("li",[s("p",[a._v("JPA 是规范：JPA 本质上就是一种 ORM（对象映射关系） 规范，不是ORM 框架，这是因为 JPA 并未提供 ORM 实现，它只是制订了一些规范，提供了一些编程的 API 接口，但具体实现则由 ORM 厂商提供实现；")])]),a._v(" "),s("li",[s("p",[a._v("标准化: 提供相同的 API，这保证了基于JPA 开发的企业应用能够经过少量的修改就能够在不同的 JPA 框架下运行。")]),a._v(" "),s("p",[a._v("而自动生成 sql 这点是优点，也是缺点，因为生成的 sql 可读性差，而且一些业务比如执行逻辑删除等还是需要自己来实现sql。")])]),a._v(" "),s("li",[s("p",[a._v("简单易用，集成方便: JPA 的主要目标之一就是提供更加简单的编程模型，在 JPA 框架下创建实体和创建 Java 类一样简单，只需要使用 javax.persistence.Entity 进行注解；JPA 的框架和接口也都非常简单。")])]),a._v(" "),s("li",[s("p",[a._v("可媲美JDBC的查询能力: JPA的查询语言是面向对象的，JPA定义了独特的JPQL，而且能够支持批量更新和修改、JOIN、GROUP BY、HAVING 等通常只有 SQL 才能够提供的高级查询特性，甚至还能够支持子查询。")])])]),a._v(" "),s("p",[a._v("MyBatis：")]),a._v(" "),s("ol",[s("li",[s("p",[a._v("MyBatis 也是一个 Java 持久化框架，它通过 XML 描述符或 Annotation 把对象与存储过程或SQL语句关联起来。与 JPA 这种对象关系映射（ORM）框架不同，MyBatis 并没有将 Java 对象与数据库表关联起来，而是将 Java 方法与 SQL 语句关联。MyBatis 允许用户充分利用数据库的各种功能，例如存储过程、视图、各种复杂的查询以及某数据库的专有特性，MyBatis  可以完全控制 SQL 的执行。")])]),a._v(" "),s("li",[s("p",[a._v("与 JDBC 相比，MyBatis 简化了查询结果映射：SQL 语句在一行代码中就能执行。MyBatis 提供了一个映射引擎，声明式的把 SQL 语句执行结果与对象树映射起来。通过使用一种内建的类 XML 表达式语言，或者使用 Apache Velocity 集成的插件，SQL 语句可以被动态的生成，这些特性都可以使开发者更方便的使用 MyBatis。MyBatis 也支持声明式数据缓存，当一条SQL语句被标记为“可缓存”后，首次执行它时从数据库取得的所有数据会被存储在一段高速缓存中，今后执行这条语句时就会从高速缓存中读取结果，而不是再次命中数据库。")])])]),a._v(" "),s("Vssue")],1)}),[],!1,null,null,null);t.default=v.exports}}]);
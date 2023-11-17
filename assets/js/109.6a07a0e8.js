(window.webpackJsonp=window.webpackJsonp||[]).push([[109],{520:function(t,a,s){"use strict";s.r(a);var n=s(47),r=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"面试题丨springboot"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#面试题丨springboot"}},[t._v("#")]),t._v(" 面试题丨SpringBoot")]),t._v(" "),s("blockquote",[s("p",[t._v("https://segmentfault.com/a/1190000016686735")])]),t._v(" "),s("h2",{attrs:{id:"_1-springboot-和-spring-的区别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-springboot-和-spring-的区别"}},[t._v("#")]),t._v(" 1. SpringBoot 和 Spring 的区别？")]),t._v(" "),s("p",[t._v("Spring是一个开源的轻量级的Java开发框架。")]),t._v(" "),s("p",[t._v("Spring Boot 是 Spring 开源组织下的子项目，是 Spring 组件一站式解决方案，主要是简化了使用 Spring 的难度，简省了繁重的配置，提供了各种启动器，开发者能快速上手。")]),t._v(" "),s("h2",{attrs:{id:"_2-为什么使用-springboot"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-为什么使用-springboot"}},[t._v("#")]),t._v(" 2. 为什么使用 SpringBoot？")]),t._v(" "),s("ul",[s("li",[t._v("独立运行")]),t._v(" "),s("li",[t._v("简化配置")]),t._v(" "),s("li",[t._v("自动配置")]),t._v(" "),s("li",[t._v("无代码生成和XML配置")]),t._v(" "),s("li",[t._v("应用监控")]),t._v(" "),s("li",[t._v("上手容易")])]),t._v(" "),s("div",{staticClass:"language-markdown extra-class"},[s("pre",{pre:!0,attrs:{class:"language-markdown"}},[s("code",[s("span",{pre:!0,attrs:{class:"token title important"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("#")]),t._v(" 你觉得 SpringBoot 最大的优势是什么？")]),t._v("\n答：Spring Boot 的最大的优势是“约定优于配置”。“约定优于配置”是一种软件设计范式，开发人员按照约定的方式来进行编程，可以减少软件开发人员需做决定的数量，获得简单的好处，而又不失灵活性。\n"),s("span",{pre:!0,attrs:{class:"token title important"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("#")]),t._v(" Spring Boot 中 “约定优于配置“的具体产品体现在哪里？")]),t._v("\n答：Spring Boot Starter、Spring Boot Jpa 都是“约定优于配置“的一种体现。都是通过“约定优于配置“的设计思路来设计的，Spring Boot Starter 在启动的过程中会根据约定的信息对资源进行初始化；Spring Boot Jpa 通过约定的方式来自动生成 Sql ，避免大量无效代码编写。\n")])])]),s("h2",{attrs:{id:"_3-springboot-的自动装配原理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-springboot-的自动装配原理"}},[t._v("#")]),t._v(" 3. SpringBoot 的自动装配原理")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("首先我们在主启动类上加注解 "),s("code",[t._v("@SpringBootApplication")]),t._v("。")])]),t._v(" "),s("li",[s("p",[t._v("然后在主启动类中的  main() 方法中用 "),s("code",[t._v("SpringApplication.run()")]),t._v(" 方法来启动 SpringBoot 应用，生成一个 ApplicationContext 对象来管理 Spring 容器中的 Bean 对象。")])]),t._v(" "),s("li",[s("p",[t._v("自动装配的核心就在  "),s("code",[t._v("@SpringBootApplication")]),t._v(" 这个注解上，进去以后会发现这个注解上面除了 4 个 Java 的元注解外还有 3 个注解非常重要：")]),t._v(" "),s("ul",[s("li",[t._v("@SpringBootConfiguration：这个注解的底层是一个 "),s("code",[t._v("@Configuration")]),t._v(" 注解，表明这是一个配置类，被 "),s("code",[t._v("@Configuration")]),t._v(" 注解修饰的类是一个 IOC 容器，支持 JavaConfig 的方式来进行配置；")]),t._v(" "),s("li",[t._v("@EnableAutoConfiguration：这个注解表明启动自动装配，里面除了 Java 的 4 个元注解还包含两个比较重要的注解 "),s("code",[t._v("@AutoConfigurationPackage")]),t._v(" 和"),s("code",[t._v("@Import")]),t._v("。")]),t._v(" "),s("li",[t._v("@ComponentScan：这个就是扫描注解的意思，默认扫描当前类所在的包及其子包下包含的注解，将"),s("code",[t._v("@Controller/@Service/@Component/@Repository")]),t._v(" 等注解加载到IOC容器中；")])])]),t._v(" "),s("li",[s("p",[t._v("现在就来看跟自动装配联系最紧密的注解 "),s("code",[t._v("@EnableAutoConfiguration")]),t._v(" 里面的 2 重要注解 "),s("code",[t._v("@AutoConfigurationPackage")]),t._v(" 和"),s("code",[t._v("@Import")]),t._v("。")])]),t._v(" "),s("li",[s("p",[s("code",[t._v("@AutoConfigurationPackage")]),t._v(" 和 "),s("code",[t._v("@ComponentScan")]),t._v(" 一样，也是将主配置类所在的包及其子包里面的组件扫描到 IoC 容器中，但是区别是 "),s("code",[t._v("@AutoConfigurationPackage")]),t._v(" 扫描 "),s("code",[t._v("@Enitity")]),t._v("、"),s("code",[t._v("@MapperScan")]),t._v(" 等第三方依赖的注解，"),s("code",[t._v("@ComponentScan")]),t._v(" 只扫描"),s("code",[t._v("@Controller/@Service/@Component/@Repository")]),t._v(" 这些常见注解。所以这两个注解扫描的对象是不一样的。")])]),t._v(" "),s("li",[s("p",[s("code",[t._v("@Import(AutoConfigurationImportSelector.class)")]),t._v(" 是自动装配的核心注解，"),s("code",[t._v("AutoConfigurationImportSelector.class")]),t._v(" 中有个 "),s("code",[t._v("selectImports()")]),t._v(" 方法:")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Override")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("selectImports")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("AnnotationMetadata")]),t._v(" annotationMetadata"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("isEnabled")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("annotationMetadata"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" NO_IMPORTS"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n   "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n   "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("AutoConfigurationEntry")]),t._v(" autoConfigurationEntry "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getAutoConfigurationEntry")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("annotationMetadata"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n   "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("StringUtils")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("toStringArray")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("autoConfigurationEntry"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getConfigurations")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[s("code",[t._v("selectImports()")]),t._v(" 方法还调用了 "),s("code",[t._v("getCandidateConfigurations()")]),t._v(" 方法，这个方法就是负责去加载一些候选的配置:")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("protected")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("AutoConfigurationEntry")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getAutoConfigurationEntry")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("AnnotationMetadata")]),t._v(" annotationMetadata"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("isEnabled")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("annotationMetadata"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" EMPTY_ENTRY"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n   "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n   "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("AnnotationAttributes")]),t._v(" attributes "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getAttributes")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("annotationMetadata"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n   "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("List")]),s("span",{pre:!0,attrs:{class:"token generics"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" configurations "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getCandidateConfigurations")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("annotationMetadata"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" attributes"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n   configurations "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("removeDuplicates")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("configurations"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n   "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Set")]),s("span",{pre:!0,attrs:{class:"token generics"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" exclusions "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getExclusions")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("annotationMetadata"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" attributes"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n   "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("checkExcludedClasses")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("configurations"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" exclusions"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n   configurations"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("removeAll")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("exclusions"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n   configurations "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getConfigurationClassFilter")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("filter")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("configurations"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n   "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("fireAutoConfigurationImportEvents")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("configurations"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" exclusions"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n   "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("AutoConfigurationEntry")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("configurations"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" exclusions"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("protected")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("List")]),s("span",{pre:!0,attrs:{class:"token generics"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getCandidateConfigurations")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("AnnotationMetadata")]),t._v(" metadata"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("AnnotationAttributes")]),t._v(" attributes"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("List")]),s("span",{pre:!0,attrs:{class:"token generics"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" configurations "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SpringFactoriesLoader")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("loadFactoryNames")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getSpringFactoriesLoaderFactoryClass")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t\t\t"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getBeanClassLoader")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Assert")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("notEmpty")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("configurations"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"No auto configuration classes found in META-INF/spring.factories. If you "')]),t._v("\n\t\t\t\t"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"are using a custom packaging, make sure that file is correct."')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" configurations"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[s("code",[t._v("getCandidateConfigurations()")]),t._v("方法要做的就是找 "),s("code",[t._v("META-INF/spring.factories")]),t._v(" 文件的配置类。")])]),t._v(" "),s("li",[s("p",[t._v("我们定位到 "),s("code",[t._v("META-INFO/spring.factories")]),t._v(" 这里文件，可以发现里面都是一些常见的组件：")]),t._v(" "),s("p",[s("code",[t._v("spring.factories")]),t._v(" 文件是一组组的 key=value 的形式，包含了 key 为 EnableAutoConfiguration 的全类名，value 是一个AutoConfiguration 类名的列表，以逗号分隔。")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://hedonspace.oss-cn-beijing.aliyuncs.com/img2/008eGmZEgy1gp49yjcb8mj31xg0qs120.jpg",alt:"image-20210401152746621"}})])]),t._v(" "),s("li",[s("p",[t._v("最终，"),s("code",[t._v("@EnableAutoConfiguration")]),t._v(" 注解通过 "),s("code",[t._v("@SpringBootApplication")]),t._v(" 注解被间接的标记在了 SpringBoot 的启动类上，"),s("code",[t._v("SpringApplicaton.run()")]),t._v(" 方法的内部就会执行 "),s("code",[t._v("selectImports()")]),t._v(" 方法，进而找到所有 JavaConfig 配置类全限定名对应的 class，然后将所有自动配置类加载到 IoC容器中。")])]),t._v(" "),s("li",[s("p",[t._v("那么这些类是如何获取默认属性值的呢？以 "),s("code",[t._v("ServletWebServerFactoryAutoConfiguration")]),t._v(" 为例，它是 Servlet 容器的自动配置类。")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Configuration")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("proxyBeanMethods "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@AutoConfigureOrder")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Ordered")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("HIGHEST_PRECEDENCE"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@ConditionalOnClass")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ServletRequest")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@ConditionalOnWebApplication")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("type "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Type")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("SERVLET"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@EnableConfigurationProperties")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ServerProperties")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Import")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ServletWebServerFactoryAutoConfiguration"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("BeanPostProcessorsRegistrar")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ServletWebServerFactoryConfiguration"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("EmbeddedTomcat")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ServletWebServerFactoryConfiguration"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("EmbeddedJetty")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ServletWebServerFactoryConfiguration"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("EmbeddedUndertow")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ServletWebServerFactoryAutoConfiguration")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n")])])]),s("p",[t._v("该类上开启了 "),s("code",[t._v("@EnableConfigurationProperties(ServerProperties.class)")]),t._v(" 注解，最终找到了 "),s("code",[t._v("ServerProperties")]),t._v(" 类。")])]),t._v(" "),s("li",[s("p",[t._v("至此，我们大致可以了解。在全局配置的属性如：server.port 等，通过 "),s("code",[t._v("@ConfigurationProperties")]),t._v("  注解，绑定到对应的XxxxProperties 配置实体类上封装为一个  bean，然后再通过 "),s("code",[t._v("@EnableConfigurationProperties")]),t._v("注解导入到 Spring 容器中。")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@ConfigurationProperties")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("prefix "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"server"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ignoreUnknownFields "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ServerProperties")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n   "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n    * Server HTTP port.\n    */")]),t._v("\n   "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Integer")]),t._v(" port"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n   "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n    * Network address to which the server should bind.\n    */")]),t._v("\n   "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("InetAddress")]),t._v(" address"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])]),t._v(" "),s("p",[t._v("总结：")]),t._v(" "),s("blockquote",[s("p",[t._v("SpringBoot启动的时候通过 @EnableAutoConfiguration 注解找到 META-INF/spring.factories 文件中的所有自动配置类，并对其加载，这些自动配置类都是以 AutoConfiguration 结尾来命名的。它实际上就是一个 JavaConfig 形式的 IoC 容器配置类，通过以 Properties 结尾命名的类中取得在全局配置文件中配置的属性，如 server.port。")]),t._v(" "),s("p",[t._v("*Properties 类的含义：封装配置文件的相关属性。")]),t._v(" "),s("p",[t._v("*AutoConfiguration 类的含义：自动配置类，添加到 IoC 容器中。")])]),t._v(" "),s("h2",{attrs:{id:"_4-springboot-启动流程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-springboot-启动流程"}},[t._v("#")]),t._v(" 4. SpringBoot 启动流程")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://hedonspace.oss-cn-beijing.aliyuncs.com/img2/008eGmZEly1gp5g1pv50lj30fh16wgng.jpg",alt:"img"}})]),t._v(" "),s("p",[t._v("1、新建 module，在主程序类加入断点，启动springboot")]),t._v(" "),s("p",[t._v("2、首先进入 SpringAplication 类 run() 方法")]),t._v(" "),s("p",[t._v("3、run() 方法新建 SpringApplication 对象")]),t._v(" "),s("p",[t._v("4、SpringApplication 对象的 run() 方法，首先创建并启动计时监控类")]),t._v(" "),s("p",[t._v("5、接着通过 configureHeadlessProperty 设置 java.awt.headless 的值")]),t._v(" "),s("p",[t._v("6、接着调用getRunListeners 创建所有 Spring 监听器")]),t._v(" "),s("p",[t._v("7、接着 DefaultApplicationArguments 初始化应用应用参数")]),t._v(" "),s("p",[t._v("8、接着 prepareEnvironment 根据运行监听器和参数准备 Spring 环境")]),t._v(" "),s("p",[t._v("9、接着调用 createApplicationContext 方法创建应用上下文")]),t._v(" "),s("p",[t._v("10、通过 prepareContext 准备应用上下文")]),t._v(" "),s("p",[t._v("11、refreshContext 方法刷新上下文")]),t._v(" "),s("p",[t._v("12、调用 stop() 方法停止计时监控器类")]),t._v(" "),s("p",[t._v("13、调用 started 发布应用上下文启动完成事件")]),t._v(" "),s("p",[t._v("14、callRunners 方法执行所有 runner 运行器")]),t._v(" "),s("p",[t._v("15、调用 running 发布应用上下文就绪事件")]),t._v(" "),s("p",[t._v("16、最后返回应用上下文")]),t._v(" "),s("h2",{attrs:{id:"_5-springboot-的核心配置文件有哪几个-它们的区别是什么"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-springboot-的核心配置文件有哪几个-它们的区别是什么"}},[t._v("#")]),t._v(" 5. SpringBoot 的核心配置文件有哪几个？它们的区别是什么？")]),t._v(" "),s("p",[t._v("Spring Boot 的核心配置文件是 application 和 bootstrap 配置文件。")]),t._v(" "),s("p",[t._v("application 配置文件这个容易理解，主要用于 Spring Boot 项目的自动化配置。")]),t._v(" "),s("p",[t._v("bootstrap 配置文件有以下几个应用场景。")]),t._v(" "),s("ul",[s("li",[t._v("使用 Spring Cloud Config 配置中心时，这时需要在 bootstrap 配置文件中添加连接到配置中心的配置属性来加载外部配置中心的配置信息；")]),t._v(" "),s("li",[t._v("一些固定的不能被覆盖的属性；")]),t._v(" "),s("li",[t._v("一些加密/解密的场景；")])]),t._v(" "),s("h2",{attrs:{id:"_6-你如何理解-springboot-中的-starters"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6-你如何理解-springboot-中的-starters"}},[t._v("#")]),t._v(" 6. 你如何理解 SpringBoot 中的 Starters？")]),t._v(" "),s("p",[t._v("Starters可以理解为启动器，它包含了一系列可以集成到应用里面的依赖包，你可以一站式集成 Spring 及其他技术，而不需要到处找示例代码和依赖包。如你想使用 Spring JPA 访问数据库，只要加入 spring-boot-starter-data-jpa 启动器依赖就能使用了。")]),t._v(" "),s("p",[t._v("Starters包含了许多项目中需要用到的依赖，它们能快速持续的运行，都是一系列得到支持的管理传递性依赖。")]),t._v(" "),s("h2",{attrs:{id:"_7-怎么设计无状态服务"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_7-怎么设计无状态服务"}},[t._v("#")]),t._v(" 7. 怎么设计无状态服务？")]),t._v(" "),s("p",[t._v("对于无状态服务，首先说一下什么是状态：如果一个数据需要被多个服务共享，才能完成一笔交易，那么这个数据被称为状态。进而依赖这个“状态”数据的服务被称为有状态服务，反之称为无状态服务。")]),t._v(" "),s("p",[t._v("无状态服务（stateless service）对单次请求的处理，不依赖其他请求，也就是说，处理一次请求所需的全部信息，要么都包含在这个请求里，要么可以从外部获取到（比如说数据库），服务器本身不存储任何信息")]),t._v(" "),s("p",[t._v("有状态服务（stateful service）则相反，它会在自身保存一些数据，先后的请求是有关联的。")]),t._v(" "),s("p",[t._v("那么这个无状态服务原则并不是说在微服务架构里就不允许存在状态，表达的真实意思是要把有状态的业务服务改变为无状态的计算类服务，那么状态数据也就相应的迁移到对应的“有状态数据服务”中。")]),t._v(" "),s("p",[t._v("场景说明：例如我们以前在本地内存中建立的数据缓存、Session缓存，到现在的微服务架构中就应该把这些数据迁移到分布式缓存中存储，让业务服务变成一个无状态的计算节点。迁移后，就可以做到按需动态伸缩，微服务应用在运行时动态增删节点，就不再需要考虑缓存数据如何同步的问题。")]),t._v(" "),s("h2",{attrs:{id:"_8-springboot-如何设置支持跨域请求"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_8-springboot-如何设置支持跨域请求"}},[t._v("#")]),t._v(" 8. SpringBoot 如何设置支持跨域请求？")]),t._v(" "),s("p",[t._v("现代浏览器出于安全的考虑， HTTP 请求时必须遵守同源策略，否则就是跨域的 HTTP 请求，默认情况下是被禁止的，IP（域名）不同、或者端口不同、协议不同（比如 HTTP、HTTPS）都会造成跨域问题。")]),t._v(" "),s("p",[s("strong",[t._v("前端的解决方法")])]),t._v(" "),s("blockquote",[s("p",[t._v("使用 JSONP 来支持跨域的请求，JSONP 实现跨域请求的原理简单的说，就是动态创建"),s("script")])])])}),[],!1,null,null,null);a.default=r.exports}}]);
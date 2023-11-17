(window.webpackJsonp=window.webpackJsonp||[]).push([[115],{523:function(r,v,t){"use strict";t.r(v);var e=t(47),i=Object(e.a)({},(function(){var r=this,v=r.$createElement,t=r._self._c||v;return t("ContentSlotsDistributor",{attrs:{"slot-key":r.$parent.slotKey}},[t("h1",{attrs:{id:"面试题丨springmvc"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#面试题丨springmvc"}},[r._v("#")]),r._v(" 面试题丨SpringMVC")]),r._v(" "),t("h2",{attrs:{id:"_1-什么是-spring-mvc"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-什么是-spring-mvc"}},[r._v("#")]),r._v(" 1. 什么是 Spring MVC？")]),r._v(" "),t("p",[r._v("答:SpringMvc 是 spring 的一个模块，基于 MVC 的一个框架，无需中间整合层来整合。")]),r._v(" "),t("h2",{attrs:{id:"_2-spring-mvc-优点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-spring-mvc-优点"}},[r._v("#")]),r._v(" 2. Spring MVC 优点？")]),r._v(" "),t("p",[t("strong",[r._v("（1）SpringMVC框架提供了一整套完善的组件。")])]),r._v(" "),t("p",[r._v("不同于以前框架只提供接口，然后让使用者自己根据接口写实现类来实现功能，SpringMVC 提供了一整套完善的组件，可以直接使用。这就相当于以前的框架只给你提供设计图纸，你需要根据设计图纸自己把工具造出来，而现在 SpringMVC 直接给你一套现成的工具箱，里面有你用得到的各种工具。")]),r._v(" "),t("p",[r._v("而且使用 SpringMVC 框架提供这些工具也巨简单，通过一些简单的注解就搞定了，不需要编写繁琐冗长的代码，简直比夏天喝雪碧还要爽。")]),r._v(" "),t("p",[t("strong",[r._v("（2）SpringMVC是以强大的Spring容器为基础的框架。")])]),r._v(" "),t("p",[r._v("如果同学你使用过Spring容器，那你一定知道Spring容器的对象托管功能有多么的好用。它不需要你自己去创建和释放对象，Spring容器帮你全搞定! 同样地，能够放入Spring容器里面的这个SpringMVC工具箱，里面各种工具类的管理也是不需要操心的。而这省心省力的优点，是其他框架都没有的。")]),r._v(" "),t("p",[t("strong",[r._v("（3）框架的配置简单又不失灵活性。")])]),r._v(" "),t("p",[r._v("SpringMVC框架的常用配置项就已经涵盖了项目中80%的配置需求，简单的项目甚至可以做到零配置，拿过来就用。")]),r._v(" "),t("p",[t("strong",[r._v("（4）代码的可重用性很高。")])]),r._v(" "),t("p",[r._v("翻译成大白话就是，一个成熟的，上线稳定运行过的SpringMVC项目，经过简单修改，甚至不用修改，就可以作为另一个新项目开发的基础。这样能在开发新项目时省很多力气。")]),r._v(" "),t("p",[t("strong",[r._v("（5）可扩展性好。")])]),r._v(" "),t("p",[r._v("如果SpringMVC框架提供的工具不能100%满足你的需求，你需要定制开发，SpringMVC框架同样也提供了相应的接口，可以进行工具的升级。这样你在遇到强力精英怪的时候，照样能用SpringMVC框架打败它。")]),r._v(" "),t("p",[t("strong",[r._v("（6）可以任意使用各种视图技术,而不仅仅局限于 JSP。")])]),r._v(" "),t("p",[t("strong",[r._v("（7）支持各种请求资源的映射策略。")])]),r._v(" "),t("h2",{attrs:{id:"_3-spring-mvc-工作原理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-spring-mvc-工作原理"}},[r._v("#")]),r._v(" 3. Spring MVC 工作原理")]),r._v(" "),t("ol",[t("li",[r._v("用户发送请求至前端控制器 DispatcherServlet。")]),r._v(" "),t("li",[r._v("DispatcherServlet 收到请求调用 HandlerMapping 处理器映射器。")]),r._v(" "),t("li",[r._v("处理器映射器找到具体的处理器(可以根据 xml 配置、注解进行查找)，生成处理器对象及处理器拦截器（如果有则生成）一并返回给 DispatcherServlet。")]),r._v(" "),t("li",[r._v("DispatcherServlet 调用 HandlerAdapter 处理器适配器。")]),r._v(" "),t("li",[r._v("HandlerAdapter 经过适配调用具体的处理器(Controller，也叫后端控制器)。")]),r._v(" "),t("li",[r._v("Controller 执行完成返回 ModelAndView。")]),r._v(" "),t("li",[r._v("HandlerAdapter 将 controller 执行结果 ModelAndView 返回给 DispatcherServlet。")]),r._v(" "),t("li",[r._v("DispatcherServlet 将 ModelAndView 传给 ViewReslover 视图解析器。")]),r._v(" "),t("li",[r._v("ViewReslover 解析后返回具体 View。")]),r._v(" "),t("li",[r._v("DispatcherServlet 根据 View 进行渲染视图（即将模型数据填充至视图中）。")]),r._v(" "),t("li",[r._v("DispatcherServlet 响应用户。")])]),r._v(" "),t("p",[t("img",{attrs:{src:"https://hedonspace.oss-cn-beijing.aliyuncs.com/img2/008eGmZEgy1goy865c3hhj31860hbacv.jpg",alt:"01-Springmvc执行流程"}})]),r._v(" "),t("h2",{attrs:{id:"_4-springmvc-的控制器是不是单例模式-如果是-有什么问题-怎么解决"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-springmvc-的控制器是不是单例模式-如果是-有什么问题-怎么解决"}},[r._v("#")]),r._v(" 4. SpringMVC 的控制器是不是单例模式，如果是，有什么问题，怎么解决？")]),r._v(" "),t("p",[r._v("是单例模式，所以在多线程访问的时候有线程安全问题，不要用同步，会影响性能的。解决方案是在控制器里面不能写字段（甚至不要在控制器里面定义成员变量）。")]),r._v(" "),t("Vssue")],1)}),[],!1,null,null,null);v.default=i.exports}}]);
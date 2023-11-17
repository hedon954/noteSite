(window.webpackJsonp=window.webpackJsonp||[]).push([[102],{513:function(t,a,s){"use strict";s.r(a);var n=s(47),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"_3-mybatis-全局配置文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-mybatis-全局配置文件"}},[t._v("#")]),t._v(" 3. MyBatis 全局配置文件")]),t._v(" "),s("h2",{attrs:{id:"_3-1-properties"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-properties"}},[t._v("#")]),t._v(" 3.1 properties")]),t._v(" "),s("blockquote",[s("p",[t._v("引入外部配置文件，可以写一些固定的配置，如数据库连接等。")])]),t._v(" "),s("ul",[s("li",[s("p",[t._v("jdbc.properties")]),t._v(" "),s("div",{staticClass:"language-properties extra-class"},[s("pre",{pre:!0,attrs:{class:"language-properties"}},[s("code",[s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("jdbc.driver")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("com.mysql.cj.jdbc.Driver")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("jdbc.url")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("jdbc:mysql://localhost:3306/mybatis")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("jdbc.username")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("root")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("jdbc.password")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("root")]),t._v("\n")])])])]),t._v(" "),s("li",[s("p",[t._v("mybatis-config.xml")]),t._v(" "),s("div",{staticClass:"language-xml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!--\n\tproperties 有两个属性：\n    \tresource：引用类路径资源\n    \turl：引用网络路径或磁盘路径资源\n--\x3e")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("properties")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("resource")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("jdbc.properties"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("properties")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("environments")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("default")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("development"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("environment")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("development"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("transactionManager")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("type")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("JDBC"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("transactionManager")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("dataSource")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("type")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("POOLED"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("property")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("driver"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("value")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("${jdbc.driver}"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("property")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("url"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("value")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("${jdbc.url}"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("property")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("username"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("value")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("${jdbc.username}"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("property")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("password"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("value")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("${jdbc.password}"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("dataSource")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("environment")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("environments")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])])]),t._v(" "),s("hr"),t._v(" "),s("h2",{attrs:{id:"_3-2-settings"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-settings"}},[t._v("#")]),t._v(" 3.2 settings")]),t._v(" "),s("blockquote",[s("p",[t._v("可修改MyBatis在运行时的行为方式。")])]),t._v(" "),s("p",[s("img",{attrs:{src:"https://hedonspace.oss-cn-beijing.aliyuncs.com/img2/007S8ZIlly1gj0oqptw3xj30tf0k7aal.jpg",alt:"img"}})]),t._v(" "),s("p",[s("img",{attrs:{src:"https://hedonspace.oss-cn-beijing.aliyuncs.com/img2/007S8ZIlly1gj0oqyoyanj30tb0k50ta.jpg",alt:"img"}})]),t._v(" "),s("blockquote",[s("p",[t._v("图源：https://blog.csdn.net/fageweiketang/article/details/80767532")])]),t._v(" "),s("p",[t._v("下面以 mapUnderscoreToCamelCase（开启自动驼峰命名规则）举例。")]),t._v(" "),s("h3",{attrs:{id:"_3-2-1-修改-mybatis-config-xml-文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-1-修改-mybatis-config-xml-文件"}},[t._v("#")]),t._v(" 3.2.1 修改 mybatis-config.xml 文件")]),t._v(" "),s("div",{staticClass:"language-xml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("settings")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("setting")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("mapUnderscoreToCamelCase"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("value")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("true"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("settings")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("h3",{attrs:{id:"_3-2-2-再次测试"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-2-再次测试"}},[t._v("#")]),t._v(" 3.2.2 再次测试")]),t._v(" "),s("div",{staticClass:"language-markdown extra-class"},[s("pre",{pre:!0,attrs:{class:"language-markdown"}},[s("code",[s("span",{pre:!0,attrs:{class:"token title important"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("#")]),t._v(" 结果：")]),t._v("\nEmployee{id=1, lastName='hedon', gender=1, email='171725713@qq.com'}\n"),s("span",{pre:!0,attrs:{class:"token title important"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("#")]),t._v(" 对比：")]),t._v("\n可以发现，开启了自动驼峰命名规则后，lastName 的值就可以获取到了。\n")])])]),s("hr"),t._v(" "),s("h2",{attrs:{id:"_3-3-typealiases"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-typealiases"}},[t._v("#")]),t._v(" 3.3 typeAliases")]),t._v(" "),s("blockquote",[s("p",[t._v("类型别名只是Java类型的简称。它仅与 XML 配置有关，只是为了减少完全限定的类名的冗余类型而存在。")])]),t._v(" "),s("h3",{attrs:{id:"_3-3-1-单独取别名-xml-版本-typealias"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-1-单独取别名-xml-版本-typealias"}},[t._v("#")]),t._v(" 3.3.1 单独取别名 XML 版本 —— typeAlias")]),t._v(" "),s("h4",{attrs:{id:"_3-3-1-1-修改-mybatis-config-xml"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-1-1-修改-mybatis-config-xml"}},[t._v("#")]),t._v(" 3.3.1.1 修改 mybatis-config.xml")]),t._v(" "),s("div",{staticClass:"language-xml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!--\n\t起别名，这样以后就可以用 Employee 代替 com.hedon.mybatis.bean.Employee \n\t\n\t注意：如果以后不指定 alias 的话，默认就是类名小写 => employee\n--\x3e")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("typeAliases")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("typeAlias")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("type")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("com.hedon.mybatis.bean.Employee"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("alias")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("Employee"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("typeAlias")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("typeAliases")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("p",[t._v("这样在 EmployeeMapper.xml 中简化 com.hedon.mybatis.bean.Employee 的写法了。")]),t._v(" "),s("h4",{attrs:{id:"_3-3-1-2-修改-employeemapper-xml"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-1-2-修改-employeemapper-xml"}},[t._v("#")]),t._v(" 3.3.1.2 修改 EmployeeMapper.xml")]),t._v(" "),s("div",{staticClass:"language-xml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('\x3c!--<select id="getById" resultType="com.hedon.mybatis.bean.Employee">--\x3e')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("select")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("getById"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("resultType")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("Employee"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  select * from tbl_employee where id = #{id}\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("select")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("h3",{attrs:{id:"_3-3-2-批量取别名-package"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-2-批量取别名-package"}},[t._v("#")]),t._v(" 3.3.2 批量取别名 —— package")]),t._v(" "),s("p",[t._v("我们还可以进行批量取别名，经测试，默认别名是==类名==（首字母大小写都可以）=> ==别名不区分大小写==。")]),t._v(" "),s("h4",{attrs:{id:"_3-3-2-1-修改-mybatis-config-xml"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-2-1-修改-mybatis-config-xml"}},[t._v("#")]),t._v(" 3.3.2.1 修改 mybatis-config.xml")]),t._v(" "),s("div",{staticClass:"language-xml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("typeAliases")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!--\n        package：为某个包下的所有类批量起别名\n        name：指定包，为当前包及其子包的每一个类都起一个默认别名（经测试，类名和类名首字母小写都可以）。\n    --\x3e")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("package")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("com.hedon.mybatis.bean"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("typeAliases")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("p",[t._v("注意：可能存在子包下也有 Employee 类，导致冲突，运行报错（因为别名已经用过了，想再用到另外一个身上，肯定不行）。")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://hedonspace.oss-cn-beijing.aliyuncs.com/img2/007S8ZIlly1gj0pmpp914j31oc03ajs2.jpg",alt:"image-20200923172544723"}})]),t._v(" "),s("p",[t._v("这时候可以用 ==@Alias== 注解来进一步区分。")]),t._v(" "),s("h4",{attrs:{id:"_3-3-2-2-为子包下的-employee-单独取名字"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-2-2-为子包下的-employee-单独取名字"}},[t._v("#")]),t._v(" 3.3.2.2 为子包下的 Employee 单独取名字")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("package")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("com"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("hedon"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("mybatis"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("bean"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("example")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("org"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("apache"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ibatis"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("type"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")])]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Alias")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//这样这个类就不会在用 Employee 做别名了，就不存在冲突了。")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Alias")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("value "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"SecondEmployee"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Employee")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" text"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h3",{attrs:{id:"_3-3-4-mybatis-内置的别名"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-4-mybatis-内置的别名"}},[t._v("#")]),t._v(" 3.3.4 MyBatis 内置的别名")]),t._v(" "),s("p",[t._v("我们起别名的时候不要和这些重复了，会冲突。")]),t._v(" "),s("img",{staticStyle:{zoom:"59.5%"},attrs:{src:"https://hedonspace.oss-cn-beijing.aliyuncs.com/img2/007S8ZIlly1gj0rmz09zaj311f0u00vs.jpg",alt:"image-20200923183511594"}}),t._v(" "),s("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://hedonspace.oss-cn-beijing.aliyuncs.com/img2/007S8ZIlly1gj0rn8qm73j318i09kgmb.jpg",alt:"image-20200923183527621"}}),t._v(" "),s("hr"),t._v(" "),s("h2",{attrs:{id:"_3-4-typehandlers"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-4-typehandlers"}},[t._v("#")]),t._v(" 3.4 typeHandlers")]),t._v(" "),s("blockquote",[s("p",[t._v("无论是 MyBatis 在预处理语句(PreparedStatement)中 设置一个参数时，还是从结果集中取出一个值时， 都会 用类型处理器将获取的值以合适的方式转换成 Java 类型。")])]),t._v(" "),s("img",{staticStyle:{zoom:"68%"},attrs:{src:"https://hedonspace.oss-cn-beijing.aliyuncs.com/img2/007S8ZIlgy1gj2mhrz657j30v80u0qba.jpg",alt:"image-20200925090813678"}}),t._v(" "),s("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://hedonspace.oss-cn-beijing.aliyuncs.com/img2/007S8ZIlgy1gj2mi8h6rvj316f0u00z4.jpg",alt:"image-20200925090833892"}}),t._v(" "),s("hr"),t._v(" "),s("h2",{attrs:{id:"_3-5-handling-enums"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-5-handling-enums"}},[t._v("#")]),t._v(" 3.5 Handling Enums")]),t._v(" "),s("h2",{attrs:{id:"_3-6-objectfactory"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-6-objectfactory"}},[t._v("#")]),t._v(" 3.6 objectFactory")]),t._v(" "),s("h2",{attrs:{id:"_3-7-plugins"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-7-plugins"}},[t._v("#")]),t._v(" 3.7 plugins")]),t._v(" "),s("blockquote",[s("p",[t._v("插件是MyBatis提供的一个非常强大的机制，我们可以通过插件来修改 MyBatis 的一些核心行为。插件通过动态代理机制，可以介入四大对象的任何一个方法的执行。")])]),t._v(" "),s("p",[t._v("四大对象：")]),t._v(" "),s("ul",[s("li",[t._v("Executor (update, query, flushStatements, commit, rollback, getTransaction, close, isClosed)")]),t._v(" "),s("li",[t._v("ParameterHandler (getParameterObject, setParameters)")]),t._v(" "),s("li",[t._v("ResultSetHandler (handleResultSets, handleOutputParameters)")]),t._v(" "),s("li",[t._v("StatementHandler (prepare, parameterize, batch, update, query)")])]),t._v(" "),s("h2",{attrs:{id:"_3-8-environments"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-8-environments"}},[t._v("#")]),t._v(" 3.8 environments")]),t._v(" "),s("blockquote",[s("p",[t._v("MyBatis可以配置多种环境，比如开发、测试和生 产环境需要有不同的配置。")]),t._v(" "),s("p",[t._v("每种环境使用一个environment标签进行配置并指 定唯一标识符。")]),t._v(" "),s("p",[t._v("可以通过environments标签中的default属性指定一个环境的标识符来快速的切换环境。")])]),t._v(" "),s("h3",{attrs:{id:"_3-8-1-id"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-8-1-id"}},[t._v("#")]),t._v(" 3.8.1 id")]),t._v(" "),s("blockquote",[s("p",[t._v("指定当前环境的唯一标识。")])]),t._v(" "),s("h3",{attrs:{id:"_3-8-2-transactionmanager"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-8-2-transactionmanager"}},[t._v("#")]),t._v(" 3.8.2 transactionManager")]),t._v(" "),s("p",[t._v("type：")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("JDBC —— JdbcTransactionFactory")]),t._v(" "),s("p",[t._v("使用了 JDBC 的提交和回滚设置，依赖于从数 据源得到的连接来管理事务范围。")])]),t._v(" "),s("li",[s("p",[t._v("MANAGED ——  ManagedTransactionFactory")]),t._v(" "),s("p",[t._v("不提交或回滚一个连接、让容器来管理事务的整个生命周期(比如 JEE 应用服务器的上下文)。")])]),t._v(" "),s("li",[s("p",[t._v("自定义")]),t._v(" "),s("p",[t._v("实现 TransactionFactory 接口，type=全类名/ 别名。")])])]),t._v(" "),s("h3",{attrs:{id:"_3-8-3-datasource"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-8-3-datasource"}},[t._v("#")]),t._v(" 3.8.3 dataSource")]),t._v(" "),s("p",[t._v("type：")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("UNPOOLED —— UnpooledDataSourceFactory")]),t._v(" "),s("p",[t._v("不使用连接池。")])]),t._v(" "),s("li",[s("p",[t._v("POOLED —— PooledDataSourceFactory")]),t._v(" "),s("p",[t._v("使用连接池。")])]),t._v(" "),s("li",[s("p",[t._v("JNDI")]),t._v(" "),s("p",[t._v("在 EJB 或应用服务器这类容器中查找指定的数据源。")])]),t._v(" "),s("li",[s("p",[t._v("自定义")]),t._v(" "),s("p",[t._v("实现 DataSourceFactory 接口，定义数据源的获取方式。")])])]),t._v(" "),s("hr"),t._v(" "),s("h2",{attrs:{id:"_3-9-databaseidprovider"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-9-databaseidprovider"}},[t._v("#")]),t._v(" 3.9 databaseIdProvider")]),t._v(" "),s("blockquote",[s("p",[t._v("MyBatis 可以根据不同的数据库厂商执行不同的语句。")])]),t._v(" "),s("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://hedonspace.oss-cn-beijing.aliyuncs.com/img2/007S8ZIlgy1gj2mss9zw4j30sq04wjty.jpg",alt:"image-20200925091845196"}}),t._v(" "),s("h3",{attrs:{id:"_3-9-1-type"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-9-1-type"}},[t._v("#")]),t._v(" 3.9.1 type")]),t._v(" "),s("p",[t._v("DB_VENDOR：")]),t._v(" "),s("p",[t._v("使用 MyBatis 提供的 "),s("code",[t._v("VendorDatabaseIdProvider")]),t._v(" 解析数据库厂商标识。也可以实现 "),s("code",[t._v("DatabaseIdProvider")]),t._v(" 接口来自定义。")]),t._v(" "),s("h3",{attrs:{id:"_3-9-2-property"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-9-2-property"}},[t._v("#")]),t._v(" 3.9.2 property")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("name")]),t._v(" "),s("p",[t._v("数据库厂商标识。")])]),t._v(" "),s("li",[s("p",[t._v("value")]),t._v(" "),s("p",[t._v("为标识起一个别名，方便SQL语句使用 databaseId 属性引用。")]),t._v(" "),s("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://hedonspace.oss-cn-beijing.aliyuncs.com/img2/007S8ZIlly1gj2mve7hx8j30ug05840w.jpg",alt:"image-20200925092122318"}})])]),t._v(" "),s("h3",{attrs:{id:"_3-9-2-匹配规则"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-9-2-匹配规则"}},[t._v("#")]),t._v(" 3.9.2 匹配规则")]),t._v(" "),s("p",[t._v("1、如果没有配置databaseIdProvider标签，那么databaseId=null；")]),t._v(" "),s("p",[t._v("2、如果配置了databaseIdProvider标签，使用标签配置的name去匹 配数据库信息，匹配上设置databaseId=配置指定的值，否则依旧为 null；")]),t._v(" "),s("p",[t._v("3、如果databaseId不为null，他只会找到配置databaseId的sql语句；")]),t._v(" "),s("p",[t._v("4、MyBatis 会加载不带 databaseId 属性和带有匹配当前数据库 databaseId 属性的所有语句。如果同时找到带有 databaseId 和不带 databaseId 的相同语句，则后者会被舍弃。")]),t._v(" "),s("hr"),t._v(" "),s("h2",{attrs:{id:"_3-10-mappers"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-10-mappers"}},[t._v("#")]),t._v(" 3.10 mappers")]),t._v(" "),s("blockquote",[s("p",[t._v("将 sql 映射文件注册到全局配置中。")])]),t._v(" "),s("h3",{attrs:{id:"_3-10-1-逐个注册"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-10-1-逐个注册"}},[t._v("#")]),t._v(" 3.10.1 逐个注册")]),t._v(" "),s("div",{staticClass:"language-xml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("mappers")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!--resource 引用类路径下的 mapper 文件--\x3e")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("mapper")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("resource")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("mybatis/mapper/EmployeeMapper.xml"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("mapper")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!--url 引用网络或者磁盘路径下的 mapper 文件--\x3e")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("mapper")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("url")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("file:///D:/EmployeeMapper.xml"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("mapper")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('\x3c!-- \n       class 注册接口 \n     1. 有 sql 映射文件，映射文件名必须和接口同名，并且放在与接口同一目录下。\n\t\t 2. 在接口类中的每一个方法都加上类似 @Select("sql 语句") 这样的注解，就可以不写 xml 配置文件直接注入。\n  --\x3e')]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("mapper")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("com.hedon.mybatis.EmployeeMapper"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("mapper")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("mapper")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("com.hedon.mybatis.PersonAnnotation"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("mapper")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("mappers")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("h3",{attrs:{id:"_3-10-2-批量注册"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-10-2-批量注册"}},[t._v("#")]),t._v(" 3.10.2 批量注册")]),t._v(" "),s("div",{staticClass:"language-xml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("mappers")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!--\n\t\t 将 com.hedon.mapper 包下的 *Mapper 接口类注册进来。\n\t\t 这种方式要求 SQL 映射文件名必须和接口名相同并且在同一目录下。\n\t--\x3e")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("package")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("com.hedon.mapper"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("package")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("mappers")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),t._v("/")])}),[],!1,null,null,null);a.default=e.exports}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[94],{505:function(t,a,s){"use strict";s.r(a);var n=s(47),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"_2-mybatis-helloworld"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-mybatis-helloworld"}},[t._v("#")]),t._v(" 2. MyBatis - HelloWorld")]),t._v(" "),s("h2",{attrs:{id:"_2-1-工程搭建"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-工程搭建"}},[t._v("#")]),t._v(" 2.1 工程搭建")]),t._v(" "),s("h3",{attrs:{id:"_2-1-1-建立数据库和数据库表"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-1-建立数据库和数据库表"}},[t._v("#")]),t._v(" 2.1.1 建立数据库和数据库表")]),t._v(" "),s("div",{staticClass:"language-mysql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("DROP TABLE IF EXISTS `tbl_employee`;\nCREATE TABLE `tbl_employee` (\n  `id` int(11) NOT NULL AUTO_INCREMENT,\n  `last_name` varchar(45) ,\n  `gender` char(1),\n  `email` varchar(45),\n  PRIMARY KEY (`id`)\n) ;\n")])])]),s("h3",{attrs:{id:"_2-1-2-导入-jar-包"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-2-导入-jar-包"}},[t._v("#")]),t._v(" 2.1.2 导入 jar 包")]),t._v(" "),s("div",{staticClass:"language-xml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("dependency")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("groupId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("org.mybatis"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("groupId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("artifactId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("mybatis"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("artifactId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("version")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("3.5.5"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("version")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("dependency")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("h3",{attrs:{id:"_2-1-3-建立-bean-类-employee-java"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-3-建立-bean-类-employee-java"}},[t._v("#")]),t._v(" 2.1.3 建立 bean 类 Employee.java")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Employee")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Integer")]),t._v(" id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" lastName"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" gender"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" email"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  \t\n  \t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//getter、setter")]),t._v("\n  \t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//toString()")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//有参构造、无参构造")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h3",{attrs:{id:"_2-1-4-编写-mybatis-全局配置文件-mybatis-config-xml"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-4-编写-mybatis-全局配置文件-mybatis-config-xml"}},[t._v("#")]),t._v(" 2.1.4 编写 MyBatis 全局配置文件 mybatis-config.xml")]),t._v(" "),s("div",{staticClass:"language-xml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token prolog"}},[t._v('<?xml version="1.0" encoding="UTF-8" ?>')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token doctype"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<!")]),s("span",{pre:!0,attrs:{class:"token doctype-tag"}},[t._v("DOCTYPE")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token name"}},[t._v("configuration")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token name"}},[t._v("PUBLIC")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"-//mybatis.org//DTD Config 3.0//EN"')]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://mybatis.org/dtd/mybatis-3-config.dtd"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("configuration")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("environments")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("default")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("development"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("environment")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("development"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("transactionManager")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("type")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("JDBC"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("transactionManager")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("dataSource")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("type")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("POOLED"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("property")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("driver"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("value")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("com.mysql.cj.jdbc.Driver"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("property")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("url"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("value")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("jdbc:mysql://localhost:3306/mybatis"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("property")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("username"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("value")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("root"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("property")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("password"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("value")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("root"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("dataSource")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("environment")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("environments")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("mappers")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("mapper")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("resource")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("EmployeeMapper.xml"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("mapper")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("mappers")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("configuration")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("p",[t._v("几个玩意：")]),t._v(" "),s("ul",[s("li",[t._v("environments：环境，比如生产环境、测试环境、部署环境等待\n"),s("ul",[s("li",[t._v("default：指定"),s("environments",[t._v("标签中的某一个环境作为默认值")])],1)])]),t._v(" "),s("li",[t._v("environment：具体每一个环境的定义\n"),s("ul",[s("li",[t._v("transactionManager：事务控制，这里写 JDBC")]),t._v(" "),s("li",[t._v("dataSource：数据源\n"),s("ul",[s("li",[t._v("type：类型，这里是 POOLED，连接池")]),t._v(" "),s("li",[t._v("property：定义数据库的常规四个属性")])])])])]),t._v(" "),s("li",[t._v("mappers：该标签里面存放多个 MyBatis 的映射配置文件")]),t._v(" "),s("li",[t._v("mapper：指定每一个映射文件的所在位置")])]),t._v(" "),s("h3",{attrs:{id:"_2-1-5-编写-employee-的-sql-映射配置文件-employeemapper-xml"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-5-编写-employee-的-sql-映射配置文件-employeemapper-xml"}},[t._v("#")]),t._v(" 2.1.5 编写 Employee 的 SQL 映射配置文件 EmployeeMapper.xml")]),t._v(" "),s("div",{staticClass:"language-xml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token prolog"}},[t._v('<?xml version="1.0" encoding="UTF-8" ?>')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token doctype"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<!")]),s("span",{pre:!0,attrs:{class:"token doctype-tag"}},[t._v("DOCTYPE")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token name"}},[t._v("mapper")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token name"}},[t._v("PUBLIC")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"-//mybatis.org//DTD Mapper 3.0//EN"')]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://mybatis.org/dtd/mybatis-3-mapper.dtd"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("mapper")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("namespace")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("com.hedon.mybatis.dao.EmployeeMapper"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("select")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("getEmpById"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("resultType")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("com.hedon.mybatis.bean.Employee"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        select * from tbl_employee where id = #{id}\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("select")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("mapper")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("p",[t._v("几个玩意：")]),t._v(" "),s("ul",[s("li",[t._v("namespace：命名空间，指定该映射文件所指向的接口的全限定路径")]),t._v(" "),s("li",[t._v("select：表明这是一条 select 类的 sql 语句\n"),s("ul",[s("li",[t._v("id：指定方法名，唯一，该语句映射完就是映射到一个方法上")]),t._v(" "),s("li",[t._v("resultType：方法返回的类型，这里是 Employee")]),t._v(" "),s("li",[t._v("select 标签之间：写 sql 语句\n"),s("ul",[s("li",[t._v("#{id}：取参数，这里只有一个参数，#{id}、#{arg}、#{abc}都是一个效果的")])])])])])]),t._v(" "),s("h3",{attrs:{id:"_2-1-6-编写接口-employeemapper-java"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-6-编写接口-employeemapper-java"}},[t._v("#")]),t._v(" 2.1.6 编写接口 EmployeeMapper.java")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("EmployeeMapper")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Employee")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getEmpById")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Integer")]),t._v(" id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h3",{attrs:{id:"_2-1-7-测试"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-7-测试"}},[t._v("#")]),t._v(" 2.1.7 测试")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Test")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("test")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("throws")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("IOException")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//读取 MyBatis 全局配置文件")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("InputStream")]),t._v(" inputStream "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Resources")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getResourceAsStream")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"mybatis-config.xml"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//获取 SqlSessionFactory")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SqlSessionFactory")]),t._v(" sqlSessionFactory "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SqlSessionFactoryBuilder")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("build")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("inputStream"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//获取 sqlSession")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SqlSession")]),t._v(" sqlSession "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" sqlSessionFactory"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("openSession")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("try")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//反射生成 EmployeeMapper 的代理对象，这个时候 mapper 配置文件就已经映射到 getEmpById() 方法上，使其具有具体的功能了 => 接口式编程")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("EmployeeMapper")]),t._v(" mapper "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" sqlSession"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getMapper")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("EmployeeMapper")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//使用代理对象来执行方法")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Employee")]),t._v(" empById "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" mapper"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getEmpById")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("empById"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("finally")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//关闭 sqlSession")]),t._v("\n        sqlSession"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("close")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h3",{attrs:{id:"_2-1-8-结果"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-8-结果"}},[t._v("#")]),t._v(" 2.1.8 结果")]),t._v(" "),s("div",{staticClass:"language-markdown extra-class"},[s("pre",{pre:!0,attrs:{class:"language-markdown"}},[s("code",[s("span",{pre:!0,attrs:{class:"token title important"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("#")]),t._v(" 结果如下：")]),t._v("\nEmployee{id=1, lastName='null', gender=1, email='171725713@qq.com'}\n"),s("span",{pre:!0,attrs:{class:"token title important"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("#")]),t._v(" 留下的问题：")]),t._v("\n这里的 lastName 的值没有取到，原因是数据库中的字段是 last_name 而 Employee 类中的属性是 lastName。\n"),s("span",{pre:!0,attrs:{class:"token title important"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("#")]),t._v(" 注意点：")]),t._v("\nSqlSession 代表和数据库的一次会话，用完必须关闭；\nSqlSession 和 connection 一样都是非线程安全的，每次使用都应该去获取新的对象；\n")])])]),s("hr"),t._v(" "),s("h2",{attrs:{id:"_2-2-功能架构"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-功能架构"}},[t._v("#")]),t._v(" 2.2 功能架构")]),t._v(" "),s("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://hedonspace.oss-cn-beijing.aliyuncs.com/img2/007S8ZIlly1gj0n1677nrj312w0latbw.jpg",alt:"image-20200923155550440"}}),t._v(" "),s("p",[t._v("我们把Mybatis的功能架构分为三层：")]),t._v(" "),s("h3",{attrs:{id:"_2-2-1-api-接口层"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-1-api-接口层"}},[t._v("#")]),t._v(" 2.2.1 API 接口层")]),t._v(" "),s("p",[t._v("提供给外部使用的接口API，开发人员通过这些本地API来操纵数据库。接口层一接收到调用请求就会调用数据处理层来完成具体的数据处理。")]),t._v(" "),s("h3",{attrs:{id:"_2-2-2-数据处理层"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-2-数据处理层"}},[t._v("#")]),t._v(" 2.2.2 数据处理层")]),t._v(" "),s("p",[t._v("负责具体的SQL查找、SQL解析、SQL执行和执行结果映射处理等。它主要的目的是根据调用的请求完成一次数据库操作。")]),t._v(" "),s("h3",{attrs:{id:"_2-2-3-基础支撑层"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-3-基础支撑层"}},[t._v("#")]),t._v(" 2.2.3 基础支撑层")]),t._v(" "),s("p",[t._v("负责最基础的功能支撑，包括连接管理、事务管理、配置加载和缓存处理，这些都是共用的东西，将他们抽取出来作为最基础的组件。为上层的数据处理层提供最基础的支撑。")]),t._v(" "),s("hr"),t._v(" "),s("h2",{attrs:{id:"_2-3-总体流程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-总体流程"}},[t._v("#")]),t._v(" 2.3 总体流程")]),t._v(" "),s("p",[t._v("我们来根据前面的 HelloWorld 案例来梳理  MyBatis 的总体流程。")]),t._v(" "),s("div",{staticClass:"language-flow extra-class"},[s("pre",{pre:!0,attrs:{class:"language-flow"}},[s("code",[t._v("st"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v("start"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" 开始\nop1"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v("operation"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" 读取配置文件 myabtis"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("config"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("xml\nop2"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v("operation"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" 从 myabtis"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("config"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("xml 中的 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("mappers"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" 标签找到 EmployeeMapper"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("xml \nop3"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v("operation"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" 在 EmployeeMapper"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("xml 中找到 getEmpById，请求生成 "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("SQL")]),t._v(" 语句\nop4"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v("operation"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" 注入 id 的值，生成完整的 "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("SQL")]),t._v(" 语句\nop5"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v("operation"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" 去数据库里面玩一圈，执行 "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("SQL")]),t._v(" 语句\nop6"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v("operation"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" 得到结果映射，并进行转换处理，得到最终的 Employee 对象\nend"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v("end"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" 释放连接资源\nst"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("op1"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("op2"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("op3"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("op4"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("op5"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("op6"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("end\n")])])]),s("h3",{attrs:{id:"_2-3-1-加载配置并初始化"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-1-加载配置并初始化"}},[t._v("#")]),t._v(" 2.3.1 加载配置并初始化")]),t._v(" "),s("p",[t._v("每个 MyBatis 应用程序主要都是使用"),s("code",[t._v("SqlSessionFactory")]),t._v("实例的，一个"),s("code",[t._v("SqlSessionFactory")]),t._v("实例可以通过"),s("code",[t._v("SqlSessionFactoryBuilder")]),t._v("获得。"),s("code",[t._v("SqlSessionFactoryBuilder")]),t._v("可以从一个"),s("code",[t._v("xml配置文件")]),t._v("或者一个"),s("code",[t._v("预定义的配置类的实例")]),t._v("获得。")]),t._v(" "),s("p",[t._v("用 xml 文件构建 SqlSessionFactory 实例是非常简单的事情。推荐在这个配置中使用类路径资源（classpath resource)，但你可以使用任何 Reader 实例，包括用文件路径或 file://开头的 url 创建的实例。MyBatis有一个实用类"),s("code",[t._v("Resources")]),t._v("，它有很多方法，可以方便地从类路径及其它位置加载资源。")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("触发条件：加载配置文件。")])]),t._v(" "),s("li",[s("p",[t._v("处理过程：")]),t._v(" "),s("p",[t._v("将SQL的配置信息加载成为一个个MappedStatement对象（包括了传入参数映射配置、执行的SQL语句、结果映射配置），存储在内存中。")])])]),t._v(" "),s("h3",{attrs:{id:"_2-3-2-接收调用请求"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-2-接收调用请求"}},[t._v("#")]),t._v(" 2.3.2 接收调用请求")]),t._v(" "),s("ul",[s("li",[t._v("触发条件：调用 Mybatis 提供的API")]),t._v(" "),s("li",[t._v("传入参数：为 SQL 的 ID 和传入参数对象")]),t._v(" "),s("li",[t._v("处理过程：将请求传递给下层的请求处理层进行处理。")])]),t._v(" "),s("h3",{attrs:{id:"_2-3-3-处理操作请求"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-3-处理操作请求"}},[t._v("#")]),t._v(" 2.3.3 处理操作请求")]),t._v(" "),s("ul",[s("li",[t._v("触发条件：API 接口层传递请求过来")]),t._v(" "),s("li",[t._v("传入参数：为 SQL 的 ID 和传入参数对象")]),t._v(" "),s("li",[t._v("处理过程：\n"),s("ul",[s("li",[t._v("根据 SQL 的 ID 查找对应的 MappedStatement 对象。")]),t._v(" "),s("li",[t._v("根据传入参数对象解析 MappedStatement 对象，得到最终要执行的 SQL 和执行传入参数。")]),t._v(" "),s("li",[t._v("获取数据库连接，根据得到的最终SQL语句和执行传入参数到数据库执行，并得到执行结果。")]),t._v(" "),s("li",[t._v("根据 MappedStatement 对象中的结果映射配置对得到的执行结果进行转换处理，并得到最终的处理结果。")]),t._v(" "),s("li",[t._v("释放连接资源。")])])])]),t._v(" "),s("h3",{attrs:{id:"_2-3-4-返回处理结果将最终的处理结果返回"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-4-返回处理结果将最终的处理结果返回"}},[t._v("#")]),t._v(" 2.3.4 返回处理结果将最终的处理结果返回")]),t._v(" "),s("Vssue")],1)}),[],!1,null,null,null);a.default=e.exports}}]);
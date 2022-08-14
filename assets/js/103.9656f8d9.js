(window.webpackJsonp=window.webpackJsonp||[]).push([[103],{513:function(s,t,a){"use strict";a.r(t);var n=a(47),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"八、mongodb-数据安全"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#八、mongodb-数据安全"}},[s._v("#")]),s._v(" 八、MongoDB 数据安全")]),s._v(" "),a("h2",{attrs:{id:"_1-数据库认证"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-数据库认证"}},[s._v("#")]),s._v(" 1. 数据库认证")]),s._v(" "),a("h3",{attrs:{id:"_1-1-创建用户"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-创建用户"}},[s._v("#")]),s._v(" 1.1 创建用户")]),s._v(" "),a("ol",[a("li",[a("p",[s._v("连接 MongoDB Shell")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("docker "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exec")]),s._v(" -it mymongo mongo\n")])])])]),s._v(" "),a("li",[a("p",[s._v("进入到 admin 数据库")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("use admin\n")])])])]),s._v(" "),a("li",[a("p",[s._v("创建用户")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("db.createUser"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t\tuser: "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"hedon"')]),s._v(",\n\t\tpwd: "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"hedonPwd"')]),s._v(",\n\t\troles: "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"userAdminAnyDatabase"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])])]),a("ul",[a("li",[a("code",[s._v("user")]),s._v(": 用户名")]),s._v(" "),a("li",[a("code",[s._v("pwd")]),s._v(": 密码")]),s._v(" "),a("li",[a("code",[s._v("roles")]),s._v(": 用户角色，userAdminAnyDatabase: 授权在所有的数据库上管理 User 的权限，只在 admin 中可用")])]),s._v(" "),a("p",[s._v("输出：")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("Successfully added user: "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"user"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"hedon"')]),s._v(", "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"roles"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"userAdminAnyDatabase"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])])])]),s._v(" "),a("h3",{attrs:{id:"_1-2-用户登录"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-用户登录"}},[s._v("#")]),s._v(" 1.2 用户登录")]),s._v(" "),a("ol",[a("li",[a("p",[s._v("删除之前的 mongodb 容器")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("docker stop mymongo "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" docker "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$_")]),s._v("\n")])])])]),s._v(" "),a("li",[a("p",[s._v("重启 mongod 进程，指定需要认证")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("docker run --name mymongo -v "),a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$HOME")]),s._v("/mymongo/data:/data/db -p "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("27017")]),s._v(":27017 -d mongo:4 --auth --port "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("27017")]),s._v("\n")])])]),a("p",[a("code",[s._v("--auth")]),s._v(": 指定需要认证才能访问")])]),s._v(" "),a("li",[a("p",[s._v("使用用户登录 mongodb")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("docker "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exec")]),s._v(" -it mymongo mongo -u "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"hedon"')]),s._v(" -p "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"hedonPwd"')]),s._v(" --authenticationDatabase "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"admin"')]),s._v("\n")])])]),a("p",[a("code",[s._v("-u")]),s._v(": 用户名")]),s._v(" "),a("p",[a("code",[s._v("-p")]),s._v(": 密码")]),s._v(" "),a("p",[a("code",[s._v("--authenticationDatabse")]),s._v(": 指定使用哪个数据库来验证身份")]),s._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("补充")]),s._v(" "),a("p",[s._v('也可以直接使用 mongo 连接数据库，然后到 mongo shell 里面再用  db.auth("username", "password") 来验证。')])])]),s._v(" "),a("li",[a("p",[s._v("切换到 test 数据库")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("use "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("test")]),s._v("\n")])])])]),s._v(" "),a("li",[a("p",[s._v("尝试插入数据")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("db.hedon.insertOne"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"name"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"hedon"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])])]),a("p",[s._v("会报错说没有权限，因为我们授予 hedon 的角色是 userAdminAnyDatabase，该角色只能在所有的数据库上管理 User 的权限，其他权限它不具有。")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("uncaught exception: WriteCommandError"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ok"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(",\n\t"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"errmsg"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"not authorized on test to execute command { insert: '),a("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[s._v('\\"')]),s._v("hedon"),a("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[s._v('\\"')]),s._v(", ordered: true, lsid: { id: UUID("),a("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[s._v('\\"')]),s._v("82bc0936-50b8-419a-8856-a2b68316a8a1"),a("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[s._v('\\"')]),s._v(") }, "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$db")]),s._v(": "),a("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[s._v('\\"')]),s._v("test"),a("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[s._v('\\"')]),s._v(' }"')]),s._v(",\n\t"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"code"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("13")]),s._v(",\n\t"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"codeName"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Unauthorized"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v("\n")])])])])]),s._v(" "),a("h2",{attrs:{id:"_2-数据库授权"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-数据库授权"}},[s._v("#")]),s._v(" 2. 数据库授权")]),s._v(" "),a("h3",{attrs:{id:"_2-1-内建角色"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-内建角色"}},[s._v("#")]),s._v(" 2.1 内建角色")]),s._v(" "),a("p",[s._v("数据库用户角色：")]),s._v(" "),a("ul",[a("li",[s._v("read: 只读角色")]),s._v(" "),a("li",[s._v("readWrite: 读/写角色")])]),s._v(" "),a("p",[s._v("数据库管理角色：")]),s._v(" "),a("ul",[a("li",[s._v("dbAdmin: 在当前的数据库中执行管理操作，如索引的创建、删除、统计、查看等")]),s._v(" "),a("li",[s._v("dbOwner: 在当前的数据库中执行任意操作，增、删、改、查等")]),s._v(" "),a("li",[s._v("userAdmin: 在当前的数据库中管理User，创建、删除和管理用户")])]),s._v(" "),a("p",[s._v("备份与还原角色：")]),s._v(" "),a("ul",[a("li",[s._v("Backup")]),s._v(" "),a("li",[s._v("restore")])]),s._v(" "),a("p",[s._v("跨库角色：")]),s._v(" "),a("ul",[a("li",[s._v("readAnyDatabase: 授权在所有的数据库上读取数据的权限，只在 admin 中可用")]),s._v(" "),a("li",[s._v("readWriteAnyDatebase: 授权在所有的数据库上读写数据的权限，只在 admin 中可用")]),s._v(" "),a("li",[s._v("userAdminAnyDatabase: 授权在所有的数据库上管理 User 的权限，只在 admin 中可用")]),s._v(" "),a("li",[s._v("dbAdminAnyDatabase: 授权管理所有数据库的权限，只在 admin 中可用")])]),s._v(" "),a("p",[s._v("集群管理角色：")]),s._v(" "),a("ul",[a("li",[s._v("clusterAdmin: 授权管理集群的最高权限，只在 admin 中可用")]),s._v(" "),a("li",[s._v("clusterManager: 授权管理和监控集群的权限")]),s._v(" "),a("li",[s._v("clusterMonitor: 授权监控集群的权限，对监控工具具有 readonly 的权限")]),s._v(" "),a("li",[s._v("hostManager: 管理 Server")])]),s._v(" "),a("p",[s._v("超级角色：")]),s._v(" "),a("ul",[a("li",[s._v("root: 超级账户和权限，只在 admin 中可用")])]),s._v(" "),a("p",[a("strong",[s._v("示例：创建一个只能读取 test 数据库的用户")])]),s._v(" "),a("ol",[a("li",[a("p",[s._v("切换到 test 数据库")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("use "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("test")]),s._v("\n")])])])]),s._v(" "),a("li",[a("p",[s._v("创建用户")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("db.createUser"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t\tuser: "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"testReader"')]),s._v(",\n\t\tpwd: "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"password"')]),s._v(",\n\t\troles: "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("role: "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"read"')]),s._v(", db: "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"test"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])])]),a("p",[s._v("输出：")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("Successfully added user: "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"user"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"testReader"')]),s._v(",\n\t"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"roles"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"role"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"read"')]),s._v(",\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"db"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"test"')]),s._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])])])]),s._v(" "),a("h3",{attrs:{id:"_2-2-自定义角色"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-自定义角色"}},[s._v("#")]),s._v(" 2.2 自定义角色")]),s._v(" "),a("ol",[a("li",[a("p",[s._v("切换到 test 数据库")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("use "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("test")]),s._v("\n")])])])]),s._v(" "),a("li",[a("p",[s._v("使用 "),a("code",[s._v("db.createRole()")]),s._v(" 创建一个只能读取 accounts 集合的角色")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("db.createRole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t\trole: "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"readAccounts"')]),s._v(",\n\t\tprivileges: "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" \n\t\t\t\tresource: "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("db: "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"test"')]),s._v(", collection: "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"accounts"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(",\n\t\t\t\tactions: "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"find"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(",\n\t\troles: "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])])]),a("ul",[a("li",[a("code",[s._v("role")]),s._v(": 给自定义角色起名字")]),s._v(" "),a("li",[a("code",[s._v("privileges")]),s._v(": 角色权限信息：在哪里能做什么事\n"),a("ul",[a("li",[a("code",[s._v("resouce")]),s._v(": 在哪里\n"),a("ul",[a("li",[a("code",[s._v("db")]),s._v(": 数据库")]),s._v(" "),a("li",[a("code",[s._v("collection")]),s._v(": 集合")])])]),s._v(" "),a("li",[a("code",[s._v("actions")]),s._v(": 能做什么事")])])]),s._v(" "),a("li",[a("code",[s._v("roles")]),s._v(": 继承现有角色")])])])]),s._v(" "),a("Vssue")],1)}),[],!1,null,null,null);t.default=e.exports}}]);
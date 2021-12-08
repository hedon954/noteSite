(window.webpackJsonp=window.webpackJsonp||[]).push([[83],{490:function(a,t,s){"use strict";s.r(t);var _=s(47),v=Object(_.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"七、mongodb-数据分片"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#七、mongodb-数据分片"}},[a._v("#")]),a._v(" 七、MongoDB 数据分片")]),a._v(" "),s("h2",{attrs:{id:"_1-分片目标"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-分片目标"}},[a._v("#")]),a._v(" 1. 分片目标")]),a._v(" "),s("ul",[s("li",[a._v("缓解单机压力，解决数据量过大引起的 IO 性能下降问题；")]),a._v(" "),s("li",[a._v("增加可扩展性；")])]),a._v(" "),s("h2",{attrs:{id:"_2-分区方式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-分区方式"}},[a._v("#")]),a._v(" 2. 分区方式")]),a._v(" "),s("p",[a._v("数据分区是一种将数据分割到多个独立数据存储中的机制，以此来减少每个索引的大小和更新记录所需的 IO 访问量。")]),a._v(" "),s("h3",{attrs:{id:"_2-1-垂直分区"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-垂直分区"}},[a._v("#")]),a._v(" 2.1 垂直分区")]),a._v(" "),s("p",[a._v("在数据库的传统视图中，数据以行和列的方式存储。垂直分区的实现为：拆分列边界上的记录，并将各个部分存储在不同的表或集合中。可以认为，关系数据库通过按照一对一关系使用连接表构成的是本地垂直数据分区。")]),a._v(" "),s("p",[a._v("不过，MongoDB 并未使用这种形式的分区，因为它的记录结构（文档）并不适合整洁的行列模型。因此，几乎很难根据列边界将行清楚地分开。MongoDB 还采用了嵌入式文档，它并未直接提供在服务器上连接关联集合的能力。")]),a._v(" "),s("h3",{attrs:{id:"_2-2-水平分区"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-水平分区"}},[a._v("#")]),a._v(" 2.2 水平分区")]),a._v(" "),s("p",[a._v("使用 MongoDB 时，水平分区是唯一可采用的方式，而分片就是各种流行水平分区的通用术语。通过分片，可将集合分割到多个服务器，从而改善包含大量文档的集合的性能。")]),a._v(" "),s("p",[a._v("MongoDB 使用一种唯一的方法用于分片，由 MongoS 路径进程管理数据的分割，并将请求路由到必需的分片服务器。如果查询需要访问多个分片中的数据，MongoS 将管理从多个分片获取数据并将数据合并成单个游标的过程。")]),a._v(" "),s("h2",{attrs:{id:"_3-分片需求"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-分片需求"}},[a._v("#")]),a._v(" 3. 分片需求")]),a._v(" "),s("img",{staticStyle:{zoom:"43%"},attrs:{src:"https://tva1.sinaimg.cn/large/008i3skNgy1gx5kwy9f3pj30no0j2jru.jpg",alt:"image-20211207211503186"}}),a._v(" "),s("ol",[s("li",[a._v("数据均匀分散；")]),a._v(" "),s("li",[a._v("具有容错性，某个分片出问题了没关系；")]),a._v(" "),s("li",[a._v("可以在系统运行时添加或删除分片；")])]),a._v(" "),s("h2",{attrs:{id:"_4-分片架构"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-分片架构"}},[a._v("#")]),a._v(" 4. 分片架构")]),a._v(" "),s("p",[s("img",{attrs:{src:"https://tva1.sinaimg.cn/large/008i3skNgy1gx5lgopvxhj316i0o4jtx.jpg",alt:"image-20211207213403354"}})]),a._v(" "),s("h3",{attrs:{id:"_4-1-主分片"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-主分片"}},[a._v("#")]),a._v(" 4.1 主分片")]),a._v(" "),s("ul",[s("li",[a._v("集群中的每个数据库都会选择一个分片作为主分片；")]),a._v(" "),s("li",[a._v("主分片存储所有不需要分片的集合；")]),a._v(" "),s("li",[a._v("创建数据库时，数据最少的分片需要被选为主分片；")])]),a._v(" "),s("h3",{attrs:{id:"_4-2-mongos-分片控制器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-mongos-分片控制器"}},[a._v("#")]),a._v(" 4.2 mongos 分片控制器")]),a._v(" "),s("ul",[s("li",[a._v("负责管理应用发送到 MongoDB 服务器的所有命令；")]),a._v(" "),s("li",[a._v("聚合多个分片的查询结果；")])]),a._v(" "),s("h3",{attrs:{id:"_4-3-mongod-配置服务器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-3-mongod-配置服务器"}},[a._v("#")]),a._v(" 4.3 mongod 配置服务器")]),a._v(" "),s("ul",[s("li",[a._v("存储分片服务器的配置及信息；")]),a._v(" "),s("li",[a._v("存储各分片数据段列表和数据段范围；")]),a._v(" "),s("li",[a._v("存储集群的认证和授权配置；")]),a._v(" "),s("li",[a._v("不同的集群不要共用配置服务器；")]),a._v(" "),s("li",[a._v("主节点故障时，配置服务器进入只读模式，该模式下，数据段分裂和集群平衡都不可执行；")]),a._v(" "),s("li",[a._v("整个复制集故障时，分片集群不可用；")])]),a._v(" "),s("h2",{attrs:{id:"_5-分片片键"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-分片片键"}},[a._v("#")]),a._v(" 5. 分片片键")]),a._v(" "),s("ul",[s("li",[a._v("区间划分")]),a._v(" "),s("li",[a._v("哈希划分")]),a._v(" "),s("li",[a._v("复合片键")]),a._v(" "),s("li",[a._v("标签分片")])]),a._v(" "),s("h2",{attrs:{id:"_6-分片搭建"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6-分片搭建"}},[a._v("#")]),a._v(" 6. 分片搭建")]),a._v(" "),s("blockquote",[s("p",[a._v("Docker")])]),a._v(" "),s("h3",{attrs:{id:"_6-1-服务器实例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6-1-服务器实例"}},[a._v("#")]),a._v(" 6.1 服务器实例")]),a._v(" "),s("table",[s("thead",[s("tr",[s("th",[a._v("服务")]),a._v(" "),s("th",[a._v("守护进程")]),a._v(" "),s("th",[a._v("镜像")]),a._v(" "),s("th",[a._v("端口")]),a._v(" "),s("th",[a._v("数据库路径")])])]),a._v(" "),s("tbody",[s("tr",[s("td",[a._v("分片控制器")]),a._v(" "),s("td",[a._v("mongos")]),a._v(" "),s("td",[a._v("mongo:4")]),a._v(" "),s("td",[a._v("27021")]),a._v(" "),s("td")]),a._v(" "),s("tr",[s("td",[a._v("配置服务器")]),a._v(" "),s("td",[a._v("mongod")]),a._v(" "),s("td",[a._v("mongo:4")]),a._v(" "),s("td",[a._v("27022")]),a._v(" "),s("td",[a._v("$HOME/mymongo/data27022:/data/db")])]),a._v(" "),s("tr",[s("td",[a._v("分片 0")]),a._v(" "),s("td",[a._v("mongod")]),a._v(" "),s("td",[a._v("mongo:4")]),a._v(" "),s("td",[a._v("27023")]),a._v(" "),s("td",[a._v("$HOME/mymongo/data27023:/data/db")])]),a._v(" "),s("tr",[s("td",[a._v("分片 1")]),a._v(" "),s("td",[a._v("mongod")]),a._v(" "),s("td",[a._v("mongo:4")]),a._v(" "),s("td",[a._v("27024")]),a._v(" "),s("td",[a._v("$HOME/mymongo/data27024:/data/db")])])])]),a._v(" "),s("h3",{attrs:{id:"_6-2-创建-docker-network"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6-2-创建-docker-network"}},[a._v("#")]),a._v(" 6.2 创建 docker network")]),a._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[a._v("docker network create sharding-network\n")])])]),s("h3",{attrs:{id:"_6-3-创建配置服务器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6-3-创建配置服务器"}},[a._v("#")]),a._v(" 6.3 创建配置服务器")]),a._v(" "),s("ol",[s("li",[s("p",[a._v("启动一个 mongod 进程，用作配置服务器")]),a._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[a._v("docker run --net sharding-network --name mongo27022 -v "),s("span",{pre:!0,attrs:{class:"token environment constant"}},[a._v("$HOME")]),a._v("/mymongo/data27022:/data/db -p "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("27022")]),a._v(":27017 -d mongo:4 --configsvr --replSet configSet --port "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("27017")]),a._v("\n")])])]),s("ul",[s("li",[s("code",[a._v("--net")]),a._v(": 指定 Docker 网络，这样组成分片集群的不同容器才可以进行连接")]),a._v(" "),s("li",[s("code",[a._v("--name")]),a._v(": 指定容器名称")]),a._v(" "),s("li",[s("code",[a._v("--v")]),a._v(": 数据挂载")]),a._v(" "),s("li",[s("code",[a._v("-p")]),a._v(": 端口映射")]),a._v(" "),s("li",[s("code",[a._v("-d")]),a._v(": 指定镜像")]),a._v(" "),s("li",[s("code",[a._v("--configsvr")]),a._v(": 指定作为配置服务器")]),a._v(" "),s("li",[s("code",[a._v("--replSet")]),a._v(": 指定复制集，这里配置服务器我们用复制集")]),a._v(" "),s("li",[s("code",[a._v("--port")]),a._v(": 指定 mongod 启动的端口")])])]),a._v(" "),s("li",[s("p",[a._v("因为这是一个复制集，所以我们需要初始化它，先进入 mongo27022")]),a._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[a._v("docker "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("exec")]),a._v(" -it mongo27022 mongo\n")])])])]),a._v(" "),s("li",[s("p",[a._v("初始化复制集，运行")]),a._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[a._v("rs.initiate"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n")])])]),s("p",[a._v("输出：")]),a._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n\t"),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"info2"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"no configuration specified. Using a default configuration for the set"')]),a._v(",\n\t"),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"me"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"7870e04b4d3e:27017"')]),a._v(",\n\t"),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"ok"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])])])]),a._v(" "),s("h3",{attrs:{id:"_6-4-创建分片控制器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6-4-创建分片控制器"}},[a._v("#")]),a._v(" 6.4 创建分片控制器")]),a._v(" "),s("ol",[s("li",[s("p",[a._v("运行一个 mongodb")]),a._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[a._v("docker run --net sharding-network --name mongo27021 -v "),s("span",{pre:!0,attrs:{class:"token environment constant"}},[a._v("$HOME")]),a._v("/mymongo/data27021:/data/db -p "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("27021")]),a._v(":27017 -d mongo:4 --port "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("27017")]),a._v("\n")])])])]),a._v(" "),s("li",[s("p",[a._v("进入该容器")]),a._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[a._v("docker "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("exec")]),a._v(" -it mongo27021 /bin/bash\n")])])])]),a._v(" "),s("li",[s("p",[a._v("启动 mongos")]),a._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[a._v("mongos --configdb config/mongo27022:27017 --port "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("27021")]),a._v("\n")])])]),s("p",[s("code",[a._v("--config")]),a._v(": 指定配置服务器："),s("code",[a._v("<config replset name>/<host1:port>,<host2:port>,[...]")])])])]),a._v(" "),s("h3",{attrs:{id:"_6-5-创建两个分片"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6-5-创建两个分片"}},[a._v("#")]),a._v(" 6.5 创建两个分片")]),a._v(" "),s("ol",[s("li",[s("p",[a._v("创建两个分片，启动新的 mongodb")]),a._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[a._v("docker run --net sharding-network --name mongo27023 -v "),s("span",{pre:!0,attrs:{class:"token environment constant"}},[a._v("$HOME")]),a._v("/mymongo/data27023:/data/db -p "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("27023")]),a._v(":27017 -d mongo:4 --port "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("27017")]),a._v("\n")])])]),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[a._v("docker run --net sharding-network --name mongo27024 -v "),s("span",{pre:!0,attrs:{class:"token environment constant"}},[a._v("$HOME")]),a._v("/mymongo/data27024:/data/db -p "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("27024")]),a._v(":27017 -d mongo:4 --port "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("27017")]),a._v("\n")])])])]),a._v(" "),s("li",[s("p",[a._v("进入分片控制器 mongo27021")]),a._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[a._v("docker "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("exec")]),a._v(" -it mongo27021 mongo\n")])])])]),a._v(" "),s("li",[s("p",[a._v("添加两个分片")]),a._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code")])])])]),a._v(" "),s("h2",{attrs:{id:"_7-分片平衡"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_7-分片平衡"}},[a._v("#")]),a._v(" 7. 分片平衡")]),a._v(" "),s("img",{staticStyle:{zoom:"33%"},attrs:{src:"https://tva1.sinaimg.cn/large/008i3skNgy1gx5lqoovxtj314a0fsta1.jpg",alt:"image-20211207214339583"}}),a._v(" "),s("h2",{attrs:{id:"_8-标签分片"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_8-标签分片"}},[a._v("#")]),a._v(" 8. 标签分片")]),a._v(" "),s("Vssue")],1)}),[],!1,null,null,null);t.default=v.exports}}]);
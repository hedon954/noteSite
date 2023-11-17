(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{470:function(a,t,s){"use strict";s.r(t);var e=s(47),r=Object(e.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"八、性能监控与故障处理工具"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#八、性能监控与故障处理工具"}},[a._v("#")]),a._v(" 八、性能监控与故障处理工具")]),a._v(" "),s("ul",[s("li",[a._v("命令行工具：jps、jinfo、jstack、jmap、jstat、jstatd、jcmd")]),a._v(" "),s("li",[a._v("图形化工具：jconsole、jmc、visualvm")]),a._v(" "),s("li",[a._v("两种连接方式：JMX、jstatd")])]),a._v(" "),s("h2",{attrs:{id:"_1-作用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-作用"}},[a._v("#")]),a._v(" 1. 作用")]),a._v(" "),s("ul",[s("li",[a._v("对 JVM 运行期间的内部情况进行监控，比如：对 jvm 参数、CPU、内存、堆等信息的查看。")]),a._v(" "),s("li",[a._v("辅助进行性能优化。")]),a._v(" "),s("li",[a._v("辅助解决应用运行时的一些问题，比如：OOM、内存泄露、线程死锁、锁争用、Java 进程小号 CPU 过高。")])]),a._v(" "),s("h2",{attrs:{id:"_2-命令行工具"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-命令行工具"}},[a._v("#")]),a._v(" 2. 命令行工具")]),a._v(" "),s("h3",{attrs:{id:"jps"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#jps"}},[a._v("#")]),a._v(" jps")]),a._v(" "),s("p",[a._v("jps（JVM Process Status Tool）主要用来输出 JVM 中运行的进程状态信息，语法格式如下：")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("jps [options] [hostid]\n")])])]),s("p",[a._v("Hostid 字符串的语法与 URI 的语法基本一致：")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("[protocal:][[//]hostname][:port][/servername]\n")])])]),s("p",[a._v("如果不指定 hostid，默认为当前主机或服务器。")]),a._v(" "),s("h3",{attrs:{id:"jinfo"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#jinfo"}},[a._v("#")]),a._v(" jinfo")]),a._v(" "),s("p",[a._v("打印给定进程或核心文件或远程调试服务器的配置信息。语法如下：")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("jinfo [option] pid\n")])])]),s("h3",{attrs:{id:"jstack"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#jstack"}},[a._v("#")]),a._v(" jstack")]),a._v(" "),s("p",[a._v("用来查看某个 Java 进程内的线程堆栈信息。语法如下：")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("jstack [option] pid\n")])])]),s("h3",{attrs:{id:"jmap"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#jmap"}},[a._v("#")]),a._v(" jmap")]),a._v(" "),s("p",[a._v("用来查看堆内存使用状况。语法如下：")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("jmap options pid\n")])])]),s("h3",{attrs:{id:"jstat"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#jstat"}},[a._v("#")]),a._v(" jstat")]),a._v(" "),s("p",[a._v("JVM 统计监测工具，查看各个区内存和 GC 的情况。语法如下：")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("jstat options pid\n")])])]),s("h3",{attrs:{id:"jstatd"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#jstatd"}},[a._v("#")]),a._v(" jstatd")]),a._v(" "),s("p",[a._v("虚拟机的 jstat 守护进程，主要用于监控 JVM 的创建与终止，并提供一个接口，以允许远程监视工具附加到在本地系统上运行的 JVM。")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("jstatd [options]\n")])])]),s("h3",{attrs:{id:"jcmd"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#jcmd"}},[a._v("#")]),a._v(" jcmd")]),a._v(" "),s("p",[a._v("JVM 诊断命令工具，将诊断命令请求发送到正在运行的 Java 虚拟机，比如可以用来导出堆、查看 Java 进程、导出线程信息、执行 GC 等。")]),a._v(" "),s("h2",{attrs:{id:"_3-图形化工具"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-图形化工具"}},[a._v("#")]),a._v(" 3. 图形化工具")]),a._v(" "),s("h3",{attrs:{id:"jconsole"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#jconsole"}},[a._v("#")]),a._v(" jconsole")]),a._v(" "),s("p",[a._v("一个用于监视 JVM 的符合 JMX 的图形工具。它可以监视本地和远程 JVM，还可以监视和管理应用程序。")]),a._v(" "),s("p",[a._v("使用方式，直接在控制台输入：")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("jconsole\n")])])]),s("p",[s("img",{attrs:{src:"https://hedonspace.oss-cn-beijing.aliyuncs.com/img2/008i3skNly1gtvinpio5aj61000u00w902.jpg",alt:"image-20210312145717342"}})]),a._v(" "),s("h3",{attrs:{id:"jmc"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#jmc"}},[a._v("#")]),a._v(" jmc")]),a._v(" "),s("p",[a._v("jmc（JDK Mission Control，Java 任务控制）客户端包括用于监视和管理 Java 应用程序的工具，而不会引入通常与这些类型的工具相关联的性能开销。")]),a._v(" "),s("p",[a._v("下载地址：https://www.oracle.com/java/technologies/javase/products-jmc7-downloads.html")]),a._v(" "),s("p",[s("img",{attrs:{src:"https://hedonspace.oss-cn-beijing.aliyuncs.com/img2/008i3skNly1gtvinozsz0j61kv0u0jz702.jpg",alt:"image-20210312152835643"}})]),a._v(" "),s("h3",{attrs:{id:"visualvm"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#visualvm"}},[a._v("#")]),a._v(" visualvm")]),a._v(" "),s("p",[a._v("一个图形化工具，它提供有关在 Java 虚拟机中运行的基于 Java 技术的应用程序的详细信息。")]),a._v(" "),s("p",[a._v("Java VisualVM 提供内存和 CPU 分析，堆转储分析，内存泄露检测，访问 MBean 和垃圾回收。")]),a._v(" "),s("p",[s("img",{attrs:{src:"https://hedonspace.oss-cn-beijing.aliyuncs.com/img2/008i3skNly1gtvinog6t8j61df0u0jwk02.jpg",alt:"image-20210312154954108"}})]),a._v(" "),s("h2",{attrs:{id:"_4-远程连接"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-远程连接"}},[a._v("#")]),a._v(" 4. 远程连接")]),a._v(" "),s("h3",{attrs:{id:"jmx"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#jmx"}},[a._v("#")]),a._v(" JMX")]),a._v(" "),s("p",[a._v("可以查看：系统信息、CPU 使用情况、线程数以及手动执行 GC 等比较偏于系统级层面的信息。")]),a._v(" "),s("p",[a._v("配置 JMX 的支持，需要在"),s("code",[a._v("tomcat")]),a._v(" 的 "),s("code",[a._v("catalina.sh")]),a._v(" 里面添加一些设置，如下：")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v('CATALINA_OPTS= "\n-Xms800m \n-Xmx800m \n-Xmn350m \n-XX:SurvivorRatio=8 \n-XX:+HeapDumpOnOutOfMemoryError\n-Dcom.sun.management.jmxremote=true                     //开启 JMX\n-Djava.rmi.server.hostname=192.168.0.1                  //IP\n-Dcom.sun.management.jmxremote.port=6666                //端口\n-Dcom.sun.management.jmxremote.ssl=false                //关掉安全认证\n-Dcom.sun.managementote.ssl=false                       //关掉安全认证\n-Dcom.sun.management.jmxremote.authenticate=false       //关掉权限认证\n"     \n')])])]),s("h3",{attrs:{id:"jstatd-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#jstatd-2"}},[a._v("#")]),a._v(" jstatd")]),a._v(" "),s("p",[a._v("可以提供：JVM 内存分布详细信息、垃圾回收分布图、线程详细信息，甚至可以看到牧歌对象使用内存的大小。")]),a._v(" "),s("p",[a._v("配置方法：")]),a._v(" "),s("p",[a._v("（1）自定义一个 "),s("code",[a._v("statd.policy")]),a._v(" 文件，添加授权信息：")]),a._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[a._v("// 以下为 JDK13 版本，不同版本不一样\ngrant codebase "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"jrt:/jdk.jstatd"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    permission java.security.AllPermission"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\ngrant codebase "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"jrt:/jdk.internal.jvmstat"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    permission java.security.AllPermission"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),s("p",[a._v("（2）然后再 "),s("code",[a._v("JDK_HOME/bin")]),a._v(" 下面运行 jstatd，如：")]),a._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[a._v("./jstatd -J-Djava.rmi.server.hostname"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("192.168")]),a._v(".0.1 -J-Djava.security.policy"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("statd.policy的路径"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" -p "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1099")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("&")]),a._v("\n")])])]),s("p",[a._v("（3）用 jmc 或 visualvm 进行远程连接")]),a._v(" "),s("Vssue")],1)}),[],!1,null,null,null);t.default=r.exports}}]);
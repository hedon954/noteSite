(window.webpackJsonp=window.webpackJsonp||[]).push([[90],{499:function(a,t,v){"use strict";v.r(t);var s=v(47),_=Object(s.a)({},(function(){var a=this,t=a.$createElement,v=a._self._c||t;return v("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[v("h1",{attrs:{id:"三、类加载"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#三、类加载"}},[a._v("#")]),a._v(" 三、类加载")]),a._v(" "),v("h2",{attrs:{id:"_1-简述-java-的类加载机制-并回答一个-jvm-中是否可存在两个相同的类。"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-简述-java-的类加载机制-并回答一个-jvm-中是否可存在两个相同的类。"}},[a._v("#")]),a._v(" 1. 简述 Java 的类加载机制，并回答一个 JVM 中是否可存在两个相同的类。")]),a._v(" "),v("p",[a._v("当程序主动使用某个类时，如果该类还未被加载到内存中，则系统会通过如下三个步骤来对该类进行初始化：")]),a._v(" "),v("img",{staticStyle:{zoom:"33%"},attrs:{src:"https://hedonspace.oss-cn-beijing.aliyuncs.com/img2/008eGmZEgy1gnbm4bvsuej31dy0kkn1n.jpg",alt:"image-20210204170647543"}}),a._v(" "),v("h3",{attrs:{id:"加载"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#加载"}},[a._v("#")]),a._v(" 加载")]),a._v(" "),v("blockquote",[v("p",[a._v("程序经过 "),v("code",[a._v("javac.exe")]),a._v(" 命令后，会生成一个或多个字节码文件（.class 结尾）。")]),a._v(" "),v("p",[a._v("接着我们使用 "),v("code",[a._v("java.exe")]),a._v(" 命令对某个字节码文件进行解析运行，就相当于将 class 文件字节码内容加载到内存中，并将这些静态数据转换成方法区的运行时 数据结构，然后生成一个代表这个类的 java.lang.Class 对象，作为方法区中类数据的访问入口（即引用地址）。所有需要访问和使用类数据只能通过这个 Class 对象。这个加载的过程需要类加载器参与。此过程就称为类的加载。加载到内存中的类，我们就称为"),v("strong",[a._v("运行时类")]),a._v("。")])]),a._v(" "),v("h3",{attrs:{id:"链接"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#链接"}},[a._v("#")]),a._v(" 链接")]),a._v(" "),v("blockquote",[v("p",[a._v("将 Java 类的二进制代码合并到 JVM 的运行状态之中的过程。")]),a._v(" "),v("ul",[v("li",[v("p",[v("strong",[a._v("验证")])]),a._v(" "),v("p",[a._v("确保加载的类信息符合JVM规范：")]),a._v(" "),v("p",[a._v("​\t※ 类文件结构检查：按照 JVM 规范规定的类文件结构进行；")]),a._v(" "),v("p",[a._v("​\t※ 元数据验证：对字节码描述的信息进行语义分析，保证其符合 Java 语言规范要求；")]),a._v(" "),v("p",[a._v("​\t※ 字节码验证：通过对数据流和控制流进行分析，确保程序语义是合法和符合逻辑的，这样主要对方法体进行校验；")]),a._v(" "),v("p",[a._v("​\t※ 符号引用验证：对类自身以外的信息，也就是常量池中的各种符号引用，进行匹配校验；")])]),a._v(" "),v("li",[v("p",[v("strong",[a._v("准备")])]),a._v(" "),v("p",[a._v("正式为类静态变量（static）分配内存并设置类变量默认初始值的阶段，这些内存都将在方法区中进行分配。")])]),a._v(" "),v("li",[v("p",[v("strong",[a._v("解析")])]),a._v(" "),v("p",[a._v("虚拟机常量池内的符号引用（常量名）替换为直接引用（地址）的过程。")])])])]),a._v(" "),v("h3",{attrs:{id:"初始化"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#初始化"}},[a._v("#")]),a._v(" 初始化")]),a._v(" "),v("blockquote",[v("p",[a._v("执行类构造器"),v("code",[a._v("<clinit>()")]),a._v("方法的过程。类构造器"),v("code",[a._v("<clinit>()")]),a._v("方法是由编译期自动收集类中所有类的静态变量的赋值动作和静态代码块中的语句合并产生的。（类构造器是构造类信息的，不是构造该类对象的构造器）。")]),a._v(" "),v("p",[a._v("当初始化一个类的时候，如果发现其父类还没有进行初始化，则需要先触发其父类的初始化。")]),a._v(" "),v("p",[a._v("当初始化一个类的时候，并不会初始化它所实现的接口。")]),a._v(" "),v("p",[a._v("当初始化一个接口的时候，并不会初始化它的父接口。")]),a._v(" "),v("p",[a._v("只有当程序首次使用接口里面的变量或者是调用接口里面的方法的时候才会导致接口的初始化。")]),a._v(" "),v("p",[a._v("调用 ClassLoader 类的 loadClass() 方法来装载一个类，并不会初始化这个类，因为这不是对类的主动使用。")]),a._v(" "),v("p",[a._v("虚拟机会保证一个类的"),v("code",[a._v("<clinit>()")]),a._v("方法在多线程环境中被正确加锁和同步。")])]),a._v(" "),v("p",[a._v("一个 JVM 是可以存在两个相同的类的。")]),a._v(" "),v("ul",[v("li",[a._v("每一个类加载器都有自己的命名空间，命名空间由该加载器及其所有父加载器所加载的类构成，不同的命名空间，可以出现类的全路径名相同的情况。")]),a._v(" "),v("li",[a._v("运行时包由同一个类加载器的类构成，决定两个类是否属于同一个运行时包，不仅要看全路径名是否一样，还要看定义类加载器是否相同，只有属于同一个运行时包的类才能实现包内互见。")])]),a._v(" "),v("h2",{attrs:{id:"_2-讲讲类加载机制-都有哪些类加载器-这些类加载器都加载什么问题"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-讲讲类加载机制-都有哪些类加载器-这些类加载器都加载什么问题"}},[a._v("#")]),a._v(" 2. 讲讲类加载机制，都有哪些类加载器，这些类加载器都加载什么问题？")]),a._v(" "),v("h5",{attrs:{id:"java-8"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#java-8"}},[a._v("#")]),a._v(" [Java 8]")]),a._v(" "),v("p",[v("img",{attrs:{src:"https://i.loli.net/2021/03/14/aw2Qd3cONrfk6sG.jpg",alt:"image-20210204174618989"}})]),a._v(" "),v("h5",{attrs:{id:"java-13"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#java-13"}},[a._v("#")]),a._v(" [Java 13]")]),a._v(" "),v("img",{staticStyle:{zoom:"33%"},attrs:{src:"https://hedonspace.oss-cn-beijing.aliyuncs.com/img2/008eGmZEgy1gnsxgxop6gj31em0p8h3f.jpg",alt:"image-20210219163407768"}}),a._v(" "),v("p",[a._v("启动类加载器：")]),a._v(" "),v("ul",[v("li",[a._v("用户加载启动的基础模块类，比如：java.base、java.management、java.xml 等等；")])]),a._v(" "),v("p",[a._v("平台类加载器：")]),a._v(" "),v("ul",[v("li",[a._v("用户加载一些平台相关的模块，比如：java.scripting、java.compiler*、java.corba*  等等；")])]),a._v(" "),v("p",[a._v("应用程序类加载器：")]),a._v(" "),v("ul",[v("li",[a._v("用户加载应用级别的模块，比如：jdk.compiler、jdk.jartool、jdk.jshell 等等；")]),a._v(" "),v("li",[a._v("加载 classpath 路径中的所有类库")])]),a._v(" "),v("div",{staticClass:"language-markdown extra-class"},[v("pre",{pre:!0,attrs:{class:"language-markdown"}},[v("code",[v("span",{pre:!0,attrs:{class:"token title important"}},[v("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("#")]),a._v(" 类加载器说明")]),a._v("\n"),v("span",{pre:!0,attrs:{class:"token list punctuation"}},[a._v("1.")]),a._v(" Java 程序不能直接引用启动类加载器，直接设置 classLoader 为 null，默认就使用启动类加载器；\n"),v("span",{pre:!0,attrs:{class:"token list punctuation"}},[a._v("2.")]),a._v(" 类加载器并不需要等到某一个类“首次主动使用”的时候才加载它，JVM 规范允许类加载器在预料到某个类将要被使用的时候就预先加载它；\n"),v("span",{pre:!0,attrs:{class:"token list punctuation"}},[a._v("3.")]),a._v(" 如果在加载的时候 .class 文件缺失，会在该类首次主动使用时报 LinkageError 错误，如果一直没有被使用，就不会报错；\n")])])]),v("Vssue")],1)}),[],!1,null,null,null);t.default=_.exports}}]);
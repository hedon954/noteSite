(window.webpackJsonp=window.webpackJsonp||[]).push([[136],{547:function(t,a,_){"use strict";_.r(a);var v=_(47),s=Object(v.a)({},(function(){var t=this,a=t.$createElement,_=t._self._c||a;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"第2章-组成篇"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#第2章-组成篇"}},[t._v("#")]),t._v(" 第2章 组成篇")]),t._v(" "),_("h2",{attrs:{id:"_1-计算机的总线"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-计算机的总线"}},[t._v("#")]),t._v(" 1. 计算机的总线")]),t._v(" "),_("h3",{attrs:{id:"_1-1-作用"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-作用"}},[t._v("#")]),t._v(" 1.1 作用")]),t._v(" "),_("ul",[_("li",[t._v("解决不同设备之间的通信问题。")])]),t._v(" "),_("p",[t._v("USB（Universal Serial Bus）：")]),t._v(" "),_("ul",[_("li",[t._v("提供了对外连接的接口")]),t._v(" "),_("li",[t._v("不同设备可以通过 USB 接口进行连接")]),t._v(" "),_("li",[t._v("连接的标准，促使外围设备接口的统一")])]),t._v(" "),_("h3",{attrs:{id:"_1-2-分类"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-分类"}},[t._v("#")]),t._v(" 1.2 分类")]),t._v(" "),_("ul",[_("li",[_("p",[t._v("片内总线：高集成度芯片内部的信息传输线")]),t._v(" "),_("ul",[_("li",[_("p",[t._v("芯片内部的总线")])]),t._v(" "),_("li",[_("p",[t._v("寄存器与寄存器之间")])]),t._v(" "),_("li",[_("p",[t._v("寄存器与控制器、运算器之间")]),t._v(" "),_("img",{staticStyle:{zoom:"33%"},attrs:{src:"https://hedonspace.oss-cn-beijing.aliyuncs.com/img2/008i3skNly1gtvgzpni5nj60ju0f6q3i02.jpg",alt:"image-20210119152134083"}})])])]),t._v(" "),_("li",[_("p",[t._v("系统总线：连接计算机外围设备的总线")]),t._v(" "),_("ul",[_("li",[t._v("数据总线")]),t._v(" "),_("li",[t._v("地址总线")]),t._v(" "),_("li",[t._v("控制总线")])])])]),t._v(" "),_("h5",{attrs:{id:"_1-2-1-数据总线"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-1-数据总线"}},[t._v("#")]),t._v(" 1.2.1 数据总线")]),t._v(" "),_("ul",[_("li",[t._v("双向传输各个部件的数据信息")]),t._v(" "),_("li",[t._v("数据总线的位数（总线宽度）是数据总线的重要参数，一般与 CPU 位数相同（32位、64位）")])]),t._v(" "),_("h5",{attrs:{id:"_1-2-2-地址总线"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-2-地址总线"}},[t._v("#")]),t._v(" 1.2.2 地址总线")]),t._v(" "),_("ul",[_("li",[t._v("用于数据的寻址")]),t._v(" "),_("li",[t._v("地址总线位数 = n，寻址范围：0-2^n^")]),t._v(" "),_("li",[t._v("地址总线的位数与存储单元有关")])]),t._v(" "),_("h5",{attrs:{id:"_1-2-3-控制总线"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-3-控制总线"}},[t._v("#")]),t._v(" 1.2.3 控制总线")]),t._v(" "),_("ul",[_("li",[t._v("用来发出各种控制信号的传输线")]),t._v(" "),_("li",[t._v("控制信号由控制总线从一个组件发送到另外一个组件")]),t._v(" "),_("li",[t._v("控制总线可以监视不同组件之间的状态")])]),t._v(" "),_("h3",{attrs:{id:"_1-3-仲裁"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-仲裁"}},[t._v("#")]),t._v(" 1.3 仲裁")]),t._v(" "),_("blockquote",[_("p",[t._v("仲裁器用来解决总线使用权的冲突问题。")])]),t._v(" "),_("h5",{attrs:{id:"链式查询"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#链式查询"}},[t._v("#")]),t._v(" 链式查询")]),t._v(" "),_("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://hedonspace.oss-cn-beijing.aliyuncs.com/img2/008i3skNly1gtvgzvi78lj60yc0cqwf902.jpg",alt:"image-20210120200805420"}}),t._v(" "),_("p",[t._v("如果设备 2 发出使用总线的请求，那么就会经由"),_("code",[t._v("仲裁控制线")]),t._v("到达"),_("code",[t._v("仲裁控制器")]),t._v("，"),_("code",[t._v("仲裁控制器")]),t._v("接收到这个请求后就会发出"),_("code",[t._v("允许使用")]),t._v("的指令。但是该指令会先到达设备 1，如果设备 1 不需要使用总线的话，就会传到设备 2。设备 2 拿到这个指令后就可以使用总线了。")]),t._v(" "),_("ul",[_("li",[t._v("电路复杂度第，仲裁方式简单")]),t._v(" "),_("li",[t._v("优先级低的设备难以获得总线使用权")])]),t._v(" "),_("h5",{attrs:{id:"计时器定时查询"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#计时器定时查询"}},[t._v("#")]),t._v(" 计时器定时查询")]),t._v(" "),_("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://hedonspace.oss-cn-beijing.aliyuncs.com/img2/008i3skNly1gtvgzww8raj60yk0dc3z902.jpg",alt:"image-20210120201416925"}}),t._v(" "),_("ul",[_("li",[t._v("仲裁控制器对设备编号并使用计数器累计计数")]),t._v(" "),_("li",[t._v("仲裁控制器接收到仲裁信号后，往所有设备发出计数值")]),t._v(" "),_("li",[t._v("计数值与设备编号一致则获得总线使用权")])]),t._v(" "),_("h5",{attrs:{id:"独立请求"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#独立请求"}},[t._v("#")]),t._v(" 独立请求")]),t._v(" "),_("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://hedonspace.oss-cn-beijing.aliyuncs.com/img2/008i3skNly1gtvgzxe3d6j60ys0c4js402.jpg",alt:"image-20210120201633487"}}),t._v(" "),_("ul",[_("li",[t._v("每个设备均有总线独立连接仲裁器")]),t._v(" "),_("li",[t._v("设备可单独向仲裁器发送请求和接收请求")]),t._v(" "),_("li",[t._v("当同时收到多个请求信号，仲裁器有权按优先级分配使用权")]),t._v(" "),_("li",[t._v("响应速度快，优先顺序可动态改变")]),t._v(" "),_("li",[t._v("设备连接多，总线控制复杂")])]),t._v(" "),_("h2",{attrs:{id:"_2-io-设备"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-io-设备"}},[t._v("#")]),t._v(" 2. IO 设备")]),t._v(" "),_("h3",{attrs:{id:"_2-1-输入输出接口的通用设计"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-输入输出接口的通用设计"}},[t._v("#")]),t._v(" 2.1 输入输出接口的通用设计")]),t._v(" "),_("ul",[_("li",[t._v("如何读取数据？")]),t._v(" "),_("li",[t._v("如何向设备发送数据？")]),t._v(" "),_("li",[t._v("设备有没有被占用？")]),t._v(" "),_("li",[t._v("设备是否已经连接？")]),t._v(" "),_("li",[t._v("设备是否已经启动？")])]),t._v(" "),_("h5",{attrs:{id:"_2-1-1-数据线"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-1-数据线"}},[t._v("#")]),t._v(" 2.1.1 数据线")]),t._v(" "),_("ul",[_("li",[t._v("是 IO 设备与主机之前进行数据交换的传送线")]),t._v(" "),_("li",[t._v("单向或双向")])]),t._v(" "),_("h5",{attrs:{id:"_2-1-2-状态线"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-2-状态线"}},[t._v("#")]),t._v(" 2.1.2 状态线")]),t._v(" "),_("ul",[_("li",[t._v("IO 设备状态向主机报告的信号量")])]),t._v(" "),_("h5",{attrs:{id:"_2-1-3-命令线"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-3-命令线"}},[t._v("#")]),t._v(" 2.1.3 命令线")]),t._v(" "),_("ul",[_("li",[t._v("CPU 向设备发送命令的信号线")]),t._v(" "),_("li",[t._v("发送读写信号")]),t._v(" "),_("li",[t._v("发送启动停止信号")])]),t._v(" "),_("h5",{attrs:{id:"_2-1-4-设备选择线"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-4-设备选择线"}},[t._v("#")]),t._v(" 2.1.4 设备选择线")]),t._v(" "),_("ul",[_("li",[t._v("主机选择与 IO 设备进行操作的信号线")])]),t._v(" "),_("h3",{attrs:{id:"_2-2-cpu-与-io-设备的通信"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-cpu-与-io-设备的通信"}},[t._v("#")]),t._v(" 2.2 CPU 与 IO 设备的通信")]),t._v(" "),_("h5",{attrs:{id:"_2-2-1-程序中断"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-1-程序中断"}},[t._v("#")]),t._v(" 2.2.1 程序中断")]),t._v(" "),_("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://hedonspace.oss-cn-beijing.aliyuncs.com/img2/008i3skNly1gtvgzsa7foj618a0kmacf02.jpg",alt:"image-20210120202912622"}}),t._v(" "),_("ul",[_("li",[t._v("当外围 IO 设备就绪时，向 CPU 发送中断信号")]),t._v(" "),_("li",[t._v("CPU 有专门的电路响应中断信号")]),t._v(" "),_("li",[t._v("程序中断提供低速设备通知 CPU 的一种异步方法")]),t._v(" "),_("li",[t._v("CPU 可以高速运转同时兼顾低速设备的响应")])]),t._v(" "),_("h5",{attrs:{id:"_2-2-2-dma-直接存储器访问"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-2-dma-直接存储器访问"}},[t._v("#")]),t._v(" 2.2.2 DMA（直接存储器访问）")]),t._v(" "),_("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://hedonspace.oss-cn-beijing.aliyuncs.com/img2/008i3skNly1gtvgzsqhwxj61480aoaaw02.jpg",alt:"image-20210120203059039"}}),t._v(" "),_("ul",[_("li",[t._v("DMA 直接连接主存与 IO 设备")]),t._v(" "),_("li",[t._v("DMA 工作时不需要 CPU 的参与")]),t._v(" "),_("li",[t._v("DMA 可以提高 CPU 效率")])]),t._v(" "),_("h2",{attrs:{id:"_3-存储器"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_3-存储器"}},[t._v("#")]),t._v(" 3. 存储器")]),t._v(" "),_("h3",{attrs:{id:"_3-1-分类"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-分类"}},[t._v("#")]),t._v(" 3.1 分类")]),t._v(" "),_("img",{staticStyle:{zoom:"33%"},attrs:{src:"https://hedonspace.oss-cn-beijing.aliyuncs.com/img2/008i3skNly1gtvgzt8gmuj61f00iwtbw02.jpg",alt:"image-20210120203535415"}}),t._v(" "),_("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://hedonspace.oss-cn-beijing.aliyuncs.com/img2/008i3skNly1gtvgzqe0bkj60xu0b8jsu02.jpg",alt:"image-20210120203508783"}}),t._v(" "),_("h3",{attrs:{id:"_3-2-层次结构"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-层次结构"}},[t._v("#")]),t._v(" 3.2 层次结构")]),t._v(" "),_("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://hedonspace.oss-cn-beijing.aliyuncs.com/img2/008i3skNly1gtvgzrujyzj611o0gcjt502.jpg",alt:"image-20210120204132568"}}),t._v(" "),_("h4",{attrs:{id:"_3-2-1-缓存-主存层次"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-1-缓存-主存层次"}},[t._v("#")]),t._v(" 3.2.1 缓存-主存层次")]),t._v(" "),_("p",[t._v("原理：")]),t._v(" "),_("ul",[_("li",[t._v("局部性原理")])]),t._v(" "),_("h5",{attrs:{id:"局部性原理"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#局部性原理"}},[t._v("#")]),t._v(" 局部性原理")]),t._v(" "),_("blockquote",[_("p",[t._v("局部性原理是指 CPU 访问存储器时，无论是存取指令还是存取数据，所访问的存储单元都趋于聚集在一个较小的连续区域中。")])]),t._v(" "),_("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://hedonspace.oss-cn-beijing.aliyuncs.com/img2/008i3skNly1gtvgztr07tj60pq0fajs502.jpg",alt:"image-20210120204436479"}}),t._v(" "),_("h4",{attrs:{id:"_3-2-2-主存-辅存层次"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-2-主存-辅存层次"}},[t._v("#")]),t._v(" 3.2.2 主存-辅存层次")]),t._v(" "),_("p",[t._v("原理：")]),t._v(" "),_("ul",[_("li",[t._v("局部性原理")])]),t._v(" "),_("p",[t._v("实现：")]),t._v(" "),_("ul",[_("li",[t._v("主存之外增加辅存存储器（磁盘、SD卡、U盘等）")])]),t._v(" "),_("p",[t._v("目的：")]),t._v(" "),_("ul",[_("li",[t._v("解决主存容量不足的问题")])]),t._v(" "),_("h3",{attrs:{id:"_3-3-主存储器-辅助存储器"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-主存储器-辅助存储器"}},[t._v("#")]),t._v(" 3.3 主存储器/辅助存储器")]),t._v(" "),_("h5",{attrs:{id:"主存储器-内存"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#主存储器-内存"}},[t._v("#")]),t._v(" 主存储器 —— 内存")]),t._v(" "),_("ul",[_("li",[t._v("RAM（随机存取存储器：Random Access Memory）。")]),t._v(" "),_("li",[t._v("RAM 通过电容存储数据，必须隔一段时间刷新一次。如果断电，那么一段时间后将丢失所有数据。")])]),t._v(" "),_("img",{staticStyle:{zoom:"33%"},attrs:{src:"https://hedonspace.oss-cn-beijing.aliyuncs.com/img2/008i3skNly1gtvgzqvd3ij61dy0l20vl02.jpg",alt:"image-20210121203905020"}}),t._v(" "),_("h5",{attrs:{id:"辅助存储器-磁盘"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#辅助存储器-磁盘"}},[t._v("#")]),t._v(" 辅助存储器 —— 磁盘")]),t._v(" "),_("ul",[_("li",[t._v("表明是可磁化的硬磁特性材料。")]),t._v(" "),_("li",[t._v("移动磁头径向运动读取磁道信息。")])]),t._v(" "),_("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://hedonspace.oss-cn-beijing.aliyuncs.com/img2/008i3skNly1gtvgzxyk9xj60s00lwjt902.jpg",alt:"image-20210121204740871"}}),t._v(" "),_("p",[t._v("调度算法：")]),t._v(" "),_("blockquote",[_("p",[t._v("例如，有一个磁盘请求序列，其磁道号为: 86、147、 91、177、94、150、 102、175、130，磁头当前正在143号磁道上并向磁道号增加的方向移动。")])]),t._v(" "),_("ul",[_("li",[t._v("先来先服务算法")]),t._v(" "),_("li",[t._v("最短寻道时间优先")])]),t._v(" "),_("p",[_("img",{attrs:{src:"https://hedonspace.oss-cn-beijing.aliyuncs.com/img2/008i3skNly1gtvgzpwvchj619g0qun2402.jpg",alt:"image-20200512150712968"}})]),t._v(" "),_("ul",[_("li",[t._v("扫描算法（电梯算法）\n"),_("ul",[_("li",[t._v("在磁头当前移动方向上选择与当前磁头所在磁道距离最近的请求作为下一次服务的对象。因这种算法中磁头移动规律颇似电梯的运行，故又称为电梯调度算法。")]),t._v(" "),_("li",[t._v("特点：具有较好的寻道性能，能避免进程饥饿，但不利于两端磁道的请求。")])])]),t._v(" "),_("li",[t._v("循环扫描算法\n"),_("ul",[_("li",[t._v("是SCAN算法的改良，它规定磁头==单向移动==。例如，自里向外移动，当磁头移到最外磁道时==立即又返回到最里==磁道，如此循环进行扫描。")]),t._v(" "),_("li",[t._v("特点：该算法消除了对两端磁道请求的不公平。")])])])]),t._v(" "),_("p",[_("img",{attrs:{src:"https://hedonspace.oss-cn-beijing.aliyuncs.com/img2/008i3skNly1gtvgzw4lecj618o0pyjw702.jpg",alt:"image-20200512150724758"}})]),t._v(" "),_("h2",{attrs:{id:"_4-高速缓存"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_4-高速缓存"}},[t._v("#")]),t._v(" 4. 高速缓存")]),t._v(" "),_("h3",{attrs:{id:"_4-1-重要概念"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-重要概念"}},[t._v("#")]),t._v(" 4.1 重要概念")]),t._v(" "),_("img",{staticStyle:{zoom:"33%"},attrs:{src:"https://hedonspace.oss-cn-beijing.aliyuncs.com/img2/008i3skNly1gtvgzu59avj61cs0ouq6202.jpg",alt:"image-20210121211119425"}}),t._v(" "),_("h5",{attrs:{id:"字"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#字"}},[t._v("#")]),t._v(" 字")]),t._v(" "),_("blockquote",[_("p",[t._v("是指存放在一个存储单元中的二进制代码组成。")])]),t._v(" "),_("h5",{attrs:{id:"字块"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#字块"}},[t._v("#")]),t._v(" 字块")]),t._v(" "),_("blockquote",[_("p",[t._v("存储在连续的存储单元中而被看作一个单元的一组字。")])]),t._v(" "),_("h5",{attrs:{id:"字的地址"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#字的地址"}},[t._v("#")]),t._v(" 字的地址")]),t._v(" "),_("img",{staticStyle:{zoom:"33%"},attrs:{src:"https://hedonspace.oss-cn-beijing.aliyuncs.com/img2/008i3skNly1gtvgzulcszj60f206w74c02.jpg",alt:"image-20210121211316726"}}),t._v(" "),_("ul",[_("li",[t._v("① 前 m 位指定字块的地址")]),t._v(" "),_("li",[t._v("② 后 b 位指定字在字块中的地址")])]),t._v(" "),_("div",{staticClass:"language-markdown extra-class"},[_("pre",{pre:!0,attrs:{class:"language-markdown"}},[_("code",[_("span",{pre:!0,attrs:{class:"token title important"}},[_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("#")]),t._v(" 假设主存用户空间容量为 4G，字块大小为 4M，字长为 32 位，则对于字地址中的块地址 m 和块内地址 b 的位数，至少应该是多少？")]),t._v("\n4G = 4096M\n故字块数 = 4096M/4M = 1024\n故块地址位数 m = 10\n\n由于字节快大小为 4M，字长为 32 位\n故一个字块拥有的字数为 = 4M / 32bit = 4"),_("span",{pre:!0,attrs:{class:"token italic"}},[_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("*")]),_("span",{pre:!0,attrs:{class:"token content"}},[t._v("1024")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("*")])]),t._v("1024*8/32 = 2^20^\n故块内地址位数 b = 20\n")])])]),_("h3",{attrs:{id:"_4-2-工作原理"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-工作原理"}},[t._v("#")]),t._v(" 4.2 工作原理")]),t._v(" "),_("ul",[_("li",[t._v("CPU 需要的数据在缓存里就直接从缓存中拿")]),t._v(" "),_("li",[t._v("如果缓存中没有，那就去主存拿")])]),t._v(" "),_("img",{staticStyle:{zoom:"33%"},attrs:{src:"https://hedonspace.oss-cn-beijing.aliyuncs.com/img2/008i3skNly1gtvgzv2p5pj60uc06adgb02.jpg",alt:"image-20210121215517954"}}),t._v(" "),_("h3",{attrs:{id:"_4-3-替换策略"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_4-3-替换策略"}},[t._v("#")]),t._v(" 4.3 替换策略")]),t._v(" "),_("ul",[_("li",[t._v("随机算法")]),t._v(" "),_("li",[t._v("先进先出算法 FIFO")]),t._v(" "),_("li",[t._v("最不经常使用算法 LFU")]),t._v(" "),_("li",[t._v("最近最少使用算法 LRU")])]),t._v(" "),_("h2",{attrs:{id:"_5-控制器"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_5-控制器"}},[t._v("#")]),t._v(" 5. 控制器")]),t._v(" "),_("blockquote",[_("p",[t._v("协调和控制计算机运行。")])]),t._v(" "),_("img",{staticStyle:{zoom:"33%"},attrs:{src:"https://hedonspace.oss-cn-beijing.aliyuncs.com/img2/008i3skNly1gtvgzrbvnnj61ky0l8jvj02.jpg",alt:"image-20210121220605932"}}),t._v(" "),_("h5",{attrs:{id:"程序计数器"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#程序计数器"}},[t._v("#")]),t._v(" 程序计数器")]),t._v(" "),_("ul",[_("li",[t._v("CPU 用来存储下一条指令的地址；")]),t._v(" "),_("li",[t._v("循环从程序计数器中拿出指令，当指令被拿出时，指向下一条指令。")])]),t._v(" "),_("h5",{attrs:{id:"时序发生器"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#时序发生器"}},[t._v("#")]),t._v(" 时序发生器")]),t._v(" "),_("ul",[_("li",[t._v("电气工程领域，用于发送时序脉冲；")]),t._v(" "),_("li",[t._v("CPU 依据不同的时序脉冲有节奏的进行工作。")])]),t._v(" "),_("h5",{attrs:{id:"指令译码器"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#指令译码器"}},[t._v("#")]),t._v(" 指令译码器")]),t._v(" "),_("ul",[_("li",[t._v("计算机指令由操作码和地址码组成；")]),t._v(" "),_("li",[t._v("翻译操作码对应的操作以及控制传输地址码对应的数据。")])]),t._v(" "),_("h5",{attrs:{id:"指令寄存器"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#指令寄存器"}},[t._v("#")]),t._v(" 指令寄存器")]),t._v(" "),_("ul",[_("li",[t._v("从主存或高速缓存取出计算机指令，是使得 CPU 可以高速运转的一个重要部件之一。")])]),t._v(" "),_("h5",{attrs:{id:"主存地址寄存器"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#主存地址寄存器"}},[t._v("#")]),t._v(" 主存地址寄存器")]),t._v(" "),_("ul",[_("li",[t._v("保存当前 CPU 正要访问的内存单元的地址。")])]),t._v(" "),_("h5",{attrs:{id:"主存数据寄存器"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#主存数据寄存器"}},[t._v("#")]),t._v(" 主存数据寄存器")]),t._v(" "),_("ul",[_("li",[t._v("保存当前 COU 正要读或者写的主存数据。")])]),t._v(" "),_("h5",{attrs:{id:"通用寄存器"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#通用寄存器"}},[t._v("#")]),t._v(" 通用寄存器")]),t._v(" "),_("ul",[_("li",[t._v("用户暂时存放或传送数据或指令；")]),t._v(" "),_("li",[t._v("可保存 ALU 的运算中间结果；")]),t._v(" "),_("li",[t._v("容量一般比专用寄存器要大。")])]),t._v(" "),_("h2",{attrs:{id:"_6-运算器"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_6-运算器"}},[t._v("#")]),t._v(" 6. 运算器")]),t._v(" "),_("blockquote",[_("p",[t._v("进行数据运算加工。")])]),t._v(" "),_("img",{staticStyle:{zoom:"33%"},attrs:{src:"https://hedonspace.oss-cn-beijing.aliyuncs.com/img2/008i3skNly1gtvgzwf086j61600lu41202.jpg",alt:"image-20210121221151978"}}),t._v(" "),_("h5",{attrs:{id:"数据缓冲器"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#数据缓冲器"}},[t._v("#")]),t._v(" 数据缓冲器")]),t._v(" "),_("ul",[_("li",[t._v("分为输入缓冲和输出缓冲；")]),t._v(" "),_("li",[t._v("输入缓冲暂时存放外部设备送过来的数据；")]),t._v(" "),_("li",[t._v("输出缓冲暂时存放往外部设备的数据。")])]),t._v(" "),_("h5",{attrs:{id:"alu-arithmetic-logic-unit-算术逻辑单元"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#alu-arithmetic-logic-unit-算术逻辑单元"}},[t._v("#")]),t._v(" ALU（Arithmetic logic unit，算术逻辑单元）")]),t._v(" "),_("ul",[_("li",[t._v("常见的位运算（左右移，与或非）")]),t._v(" "),_("li",[t._v("常见的算数运算")])]),t._v(" "),_("h5",{attrs:{id:"通用寄存器-2"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#通用寄存器-2"}},[t._v("#")]),t._v(" 通用寄存器")]),t._v(" "),_("ul",[_("li",[t._v("用于暂时存放或传送数据或指令；")]),t._v(" "),_("li",[t._v("可保存 ALU 的运算中间结果；")]),t._v(" "),_("li",[t._v("容量一般比专用寄存器要大。")])]),t._v(" "),_("h5",{attrs:{id:"状态字寄存器"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#状态字寄存器"}},[t._v("#")]),t._v(" 状态字寄存器")]),t._v(" "),_("ul",[_("li",[t._v("存放运算状态（条件码、进位、溢出、结果正负等）；")]),t._v(" "),_("li",[t._v("存放运算控制信息（调试跟踪标记位、允许中断位等）。")])]),t._v(" "),_("h2",{attrs:{id:"_7-计算机指令的执行过程"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_7-计算机指令的执行过程"}},[t._v("#")]),t._v(" 7. 计算机指令的执行过程")]),t._v(" "),_("img",{staticStyle:{zoom:"33%"},attrs:{src:"https://hedonspace.oss-cn-beijing.aliyuncs.com/img2/008i3skNly1gtvgzyt2xbj616y0hywhs02.jpg",alt:"image-20210121222150057"}}),t._v(" "),_("img",{staticStyle:{zoom:"60%"},attrs:{src:"https://hedonspace.oss-cn-beijing.aliyuncs.com/img2/008i3skNly1gtvgzybf2mj60w20jgmzi02.jpg",alt:"image-20210121222410666"}}),t._v(" "),_("Vssue")],1)}),[],!1,null,null,null);a.default=s.exports}}]);
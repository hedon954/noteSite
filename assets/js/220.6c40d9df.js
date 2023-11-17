(window.webpackJsonp=window.webpackJsonp||[]).push([[220],{630:function(a,t,_){"use strict";_.r(t);var v=_(47),s=Object(v.a)({},(function(){var a=this,t=a.$createElement,_=a._self._c||t;return _("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[_("h1",{attrs:{id:"四、存储管理"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#四、存储管理"}},[a._v("#")]),a._v(" 四、存储管理")]),a._v(" "),_("h2",{attrs:{id:"_1-内存分配"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-内存分配"}},[a._v("#")]),a._v(" 1. 内存分配")]),a._v(" "),_("h3",{attrs:{id:"_1-1-单一连续分配"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-单一连续分配"}},[a._v("#")]),a._v(" 1.1 单一连续分配")]),a._v(" "),_("blockquote",[_("p",[a._v("内存分为系统区和用户区。系统区给操作系统使用，用户区给一道用户作业使用。")])]),a._v(" "),_("p",[_("img",{attrs:{src:"https://hedonspace.oss-cn-beijing.aliyuncs.com/img2/008i3skNly1gt7bj03n5ij31b40pggn6.jpg",alt:"image-20200421142228919"}})]),a._v(" "),_("h5",{attrs:{id:"特点"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#特点"}},[a._v("#")]),a._v(" 特点：")]),a._v(" "),_("ul",[_("li",[a._v("管理简单，只需很少的软硬件支持。")]),a._v(" "),_("li",[a._v("适用于单用户、单任务的操作系统。")])]),a._v(" "),_("p",[a._v("缺点：")]),a._v(" "),_("ul",[_("li",[a._v("各类资源的利用率不高。")])]),a._v(" "),_("h3",{attrs:{id:"_1-2-固定分区分配"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-固定分区分配"}},[a._v("#")]),a._v(" 1.2 固定分区分配")]),a._v(" "),_("blockquote",[_("p",[a._v("内存空间被划分为若干固定大小的区域，每个分区只提供给一个程序使用，互不干扰。")])]),a._v(" "),_("p",[_("img",{attrs:{src:"https://hedonspace.oss-cn-beijing.aliyuncs.com/img2/008i3skNly1gt7bizotifj31ai0rcn28.jpg",alt:"image-20200421142427317"}})]),a._v(" "),_("h3",{attrs:{id:"_1-3-动态分区分配"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-动态分区分配"}},[a._v("#")]),a._v(" 1.3 动态分区分配")]),a._v(" "),_("blockquote",[_("p",[a._v("根据作业大小动态地建立分区，并使分区的大小正好适应作业的需要。")])]),a._v(" "),_("h4",{attrs:{id:"_1-3-1-数据结构"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-1-数据结构"}},[a._v("#")]),a._v(" 1.3.1 数据结构")]),a._v(" "),_("h5",{attrs:{id:"空闲分区表"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#空闲分区表"}},[a._v("#")]),a._v(" 空闲分区表")]),a._v(" "),_("p",[_("img",{attrs:{src:"https://hedonspace.oss-cn-beijing.aliyuncs.com/img2/008i3skNly1gt7biqqnzlj30za0hemxw.jpg",alt:"image-20210108175512473"}})]),a._v(" "),_("h5",{attrs:{id:"空闲分区链"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#空闲分区链"}},[a._v("#")]),a._v(" 空闲分区链")]),a._v(" "),_("p",[_("img",{attrs:{src:"https://hedonspace.oss-cn-beijing.aliyuncs.com/img2/008i3skNly1gt7birpaphj30zo0ge3zm.jpg",alt:"image-20210108175415923"}})]),a._v(" "),_("h4",{attrs:{id:"_1-3-2-分区算法"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-2-分区算法"}},[a._v("#")]),a._v(" 1.3.2 分区算法")]),a._v(" "),_("h5",{attrs:{id:"_1-首次适应算法-ff"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-首次适应算法-ff"}},[a._v("#")]),a._v(" [1] 首次适应算法 FF")]),a._v(" "),_("ul",[_("li",[a._v("要求空闲分区按地址递增的次序排列。")]),a._v(" "),_("li",[a._v("在进行内存分配时，从空闲分区表（或空闲分区链）首开始顺序查找，直到找到第一个能满足其大小要求的空闲分区为止。")]),a._v(" "),_("li",[a._v("然后，再按照作业大小，从该分区中划出一块内存空间分配给请求者，余下的空闲分区仍然留在空闲分区表（或空闲分区链）中。")]),a._v(" "),_("li",[a._v("优先利用内存低地址端，高地址端有大空闲区。但低地址端有许多小空闲分区时会增加查找开销。")])]),a._v(" "),_("h5",{attrs:{id:"_2-循环首次适应算法"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-循环首次适应算法"}},[a._v("#")]),a._v(" [2] 循环首次适应算法")]),a._v(" "),_("ul",[_("li",[a._v("从上次找到的空闲分区的下一个空闲分区开始查找，直到找到第一个能满足其大小要求的空闲分区为止。")]),a._v(" "),_("li",[a._v("然后，再按照作业大小，从该分区中划出一块内存空间分配给请求者，余下的空闲分区仍然留在空闲分区表（或空闲分区链）中。")]),a._v(" "),_("li",[a._v("使存储空间的利用更加均衡，但会使系统缺乏大的空闲分区。")])]),a._v(" "),_("h5",{attrs:{id:"_3-最佳适应算法-bf"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_3-最佳适应算法-bf"}},[a._v("#")]),a._v(" [3] 最佳适应算法 BF")]),a._v(" "),_("ul",[_("li",[a._v("要求空闲分区按容量大小递增的次序排列。")]),a._v(" "),_("li",[a._v("从空闲分区表（或空闲分区链）首开始顺序查找，***直到找到第一个能满足其大小要求***的空闲分区为止。")]),a._v(" "),_("li",[a._v("能把"),_("strong",[a._v("既满足作业要求")]),a._v("又与"),_("strong",[a._v("作业大小最接近")]),a._v("的空闲分区分配给作业。")]),a._v(" "),_("li",[a._v("保留了大的空闲区。但分割后的剩余空闲区很小。")])]),a._v(" "),_("h5",{attrs:{id:"_4-最坏适应算法"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_4-最坏适应算法"}},[a._v("#")]),a._v(" [4] 最坏适应算法")]),a._v(" "),_("ul",[_("li",[a._v("要求空闲分区按容量大小递减的次序排列。")]),a._v(" "),_("li",[a._v("先检查空闲分区表（或空闲分区链）中的第一个空闲分区\n"),_("ul",[_("li",[a._v("若第一个空闲分区小于作业要求的大小，则分配失败；")]),a._v(" "),_("li",[a._v("否则从该空闲分区中划出与作业大小相等的一块内存空间分配给请求者，余下的空闲分区仍然留在空闲分区表（或空闲分区链）中。")])])]),a._v(" "),_("li",[a._v("剩下的空闲区比较大，但当大作业到来时，其存储空间的申请往往得不到满足。")])]),a._v(" "),_("h3",{attrs:{id:"_1-4-可重定位分区分配"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-4-可重定位分区分配"}},[a._v("#")]),a._v(" 1.4 可重定位分区分配")]),a._v(" "),_("h5",{attrs:{id:"拼接技术"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#拼接技术"}},[a._v("#")]),a._v(" 拼接技术")]),a._v(" "),_("blockquote",[_("p",[a._v("通过移动把多个分散的小分区拼接成一个大分区，也可称为紧缩(compaction)或紧凑。")])]),a._v(" "),_("ul",[_("li",[a._v("要耗费大量处理机时间。")])]),a._v(" "),_("p",[_("img",{attrs:{src:"https://hedonspace.oss-cn-beijing.aliyuncs.com/img2/008i3skNly1gt7biyasbxj31ce0rm789.jpg",alt:"image-20200421152637681"}})]),a._v(" "),_("h5",{attrs:{id:"可重定位分区分配技术"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#可重定位分区分配技术"}},[a._v("#")]),a._v(" 可重定位分区分配技术")]),a._v(" "),_("blockquote",[_("p",[a._v("可重定位分区分配算法与动态分区分配算法基本相同，差别仅在于：在这种分配算法中增加了拼接功能。")])]),a._v(" "),_("p",[_("img",{attrs:{src:"https://hedonspace.oss-cn-beijing.aliyuncs.com/img2/008i3skNly1gt7biz9dklj310i0rwtce.jpg",alt:"image-20200421153040419"}})]),a._v(" "),_("h2",{attrs:{id:"_2-内存回收"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-内存回收"}},[a._v("#")]),a._v(" 2. 内存回收")]),a._v(" "),_("p",[a._v("[1] 回收分区r上面邻接一个空闲分区")]),a._v(" "),_("p",[a._v("[2] 回收分区r下面邻接一个空闲分区")]),a._v(" "),_("p",[a._v("[3] 回收分区r上面、下面各邻接一个空闲分区")]),a._v(" "),_("p",[_("img",{attrs:{src:"https://hedonspace.oss-cn-beijing.aliyuncs.com/img2/008i3skNly1gt7biocy26j30zq0fkdhc.jpg",alt:"image-20200421151748078"}})]),a._v(" "),_("p",[a._v("[4] 回收分区r不与任何空闲分区相邻")]),a._v(" "),_("p",[_("img",{attrs:{src:"https://hedonspace.oss-cn-beijing.aliyuncs.com/img2/008i3skNly1gt7biqb3npj30hi0jedg9.jpg",alt:"image-20200421151935927"}})]),a._v(" "),_("ul",[_("li",[a._v("为回收区单独建立一个新表项，填写分区大小及起始地址等信息，并将其加入到空闲分区表(或空闲分区链)中的适当位置。")])]),a._v(" "),_("h2",{attrs:{id:"_3-分页存储管理"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_3-分页存储管理"}},[a._v("#")]),a._v(" 3. 分页存储管理")]),a._v(" "),_("h3",{attrs:{id:"_3-1-思想"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-思想"}},[a._v("#")]),a._v(" 3.1 思想")]),a._v(" "),_("blockquote",[_("p",[a._v("连续的逻辑地址信息离散地存入到物理的内存当中 —— 映射")])]),a._v(" "),_("p",[_("img",{attrs:{src:"https://hedonspace.oss-cn-beijing.aliyuncs.com/img2/008i3skNly1gt7bioupemj30og074dgg.jpg",alt:"image-20200428141853668"}})]),a._v(" "),_("h3",{attrs:{id:"_3-2-解析"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-解析"}},[a._v("#")]),a._v(" 3.2 解析")]),a._v(" "),_("p",[a._v("逻辑地址A，页面大小为L，则：")]),a._v(" "),_("ul",[_("li",[a._v("页号 P = (int) A/L")]),a._v(" "),_("li",[a._v("页内偏移 W = A%L")])]),a._v(" "),_("p",[a._v("如：A = 3000， L = 2K")]),a._v(" "),_("p",[a._v("则：P = 1， W = 952")]),a._v(" "),_("h3",{attrs:{id:"_3-3-页表及存储块表"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-页表及存储块表"}},[a._v("#")]),a._v(" 3.3 页表及存储块表")]),a._v(" "),_("p",[_("img",{attrs:{src:"https://hedonspace.oss-cn-beijing.aliyuncs.com/img2/008i3skNly1gt7bj1hyc0j313i0lsgod.jpg",alt:"image-20200428142154364"}})]),a._v(" "),_("h3",{attrs:{id:"_3-4-基本地址变换机构"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_3-4-基本地址变换机构"}},[a._v("#")]),a._v(" 3.4 基本地址变换机构")]),a._v(" "),_("h5",{attrs:{id:"页表寄存器"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#页表寄存器"}},[a._v("#")]),a._v(" 页表寄存器")]),a._v(" "),_("blockquote",[_("p",[a._v("页表寄存器用来存放页表在内存中的起始地址和页表的长度。")])]),a._v(" "),_("p",[a._v("程序未执行时，页表的起始地址和长度存放在PCB中；")]),a._v(" "),_("p",[a._v("当程序执行时，才将页表起始地址和长度存放在页表寄存器中。")]),a._v(" "),_("h5",{attrs:{id:"地址变换过程"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#地址变换过程"}},[a._v("#")]),a._v(" 地址变换过程")]),a._v(" "),_("p",[_("img",{attrs:{src:"https://hedonspace.oss-cn-beijing.aliyuncs.com/img2/008i3skNly1gt7binmxg3j316w0ncafq.jpg",alt:"image-20200428143330879"}})]),a._v(" "),_("h3",{attrs:{id:"_3-5-具有快表的地址变换机构"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_3-5-具有快表的地址变换机构"}},[a._v("#")]),a._v(" 3.5 具有快表的地址变换机构")]),a._v(" "),_("p",[_("img",{attrs:{src:"https://hedonspace.oss-cn-beijing.aliyuncs.com/img2/008i3skNly1gt7bj0itt8j317i0qctf1.jpg",alt:"image-20200428144619554"}})]),a._v(" "),_("h3",{attrs:{id:"_3-6-多级页表和反置页表"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_3-6-多级页表和反置页表"}},[a._v("#")]),a._v(" 3.6 多级页表和反置页表")]),a._v(" "),_("h5",{attrs:{id:"为了什么"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#为了什么"}},[a._v("#")]),a._v(" 为了什么")]),a._v(" "),_("p",[a._v("页表太大，连续空间存放不现实。采用多级页表和反置页表：")]),a._v(" "),_("ul",[_("li",[a._v("将页表分成若干较小的片段，离散地存放在内存中；")]),a._v(" "),_("li",[a._v("只将当前需要的部分页表项存放在内存，其余存放在磁盘上，需要时再动态调入。")])]),a._v(" "),_("h5",{attrs:{id:"多级页表"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#多级页表"}},[a._v("#")]),a._v(" 多级页表")]),a._v(" "),_("p",[a._v("[1] 页表结构")]),a._v(" "),_("p",[_("img",{attrs:{src:"https://hedonspace.oss-cn-beijing.aliyuncs.com/img2/008i3skNly1gt7bira1yij31070u00xg.jpg",alt:"image-20200428151023427"}})]),a._v(" "),_("p",[a._v("[2] 地址变换")]),a._v(" "),_("p",[_("img",{attrs:{src:"https://hedonspace.oss-cn-beijing.aliyuncs.com/img2/008i3skNly1gt7bj10swfj315s0gc0va.jpg",alt:"image-20200428151100637"}})]),a._v(" "),_("h5",{attrs:{id:"反向页表"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#反向页表"}},[a._v("#")]),a._v(" 反向页表")]),a._v(" "),_("ul",[_("li",[a._v("既要内存又要外存，慢。")])]),a._v(" "),_("p",[_("img",{attrs:{src:"https://hedonspace.oss-cn-beijing.aliyuncs.com/img2/008i3skNly1gt7bis7efnj31060l8go5.jpg",alt:"image-20200428153432096"}})]),a._v(" "),_("h2",{attrs:{id:"_4-分段存储管理"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_4-分段存储管理"}},[a._v("#")]),a._v(" 4. 分段存储管理")]),a._v(" "),_("blockquote",[_("p",[a._v("将进程逻辑空间划分成若干段（非等分），段的长度由连续逻辑的长度决定。")])]),a._v(" "),_("p",[_("img",{attrs:{src:"https://hedonspace.oss-cn-beijing.aliyuncs.com/img2/008i3skNly1gt7bipueb9j30wo0goaav.jpg",alt:"image-20210108223419121"}})]),a._v(" "),_("h3",{attrs:{id:"分段与分页的区别"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#分段与分页的区别"}},[a._v("#")]),a._v(" 分段与分页的区别")]),a._v(" "),_("ul",[_("li",[a._v("信息单位\n"),_("ul",[_("li",[a._v("页是信息的物理单位，是为了减少内存碎片及提高内存利用率，是系统管理的需要。")]),a._v(" "),_("li",[a._v("段是信息的逻辑单位，它含有一组意义相对完整的信息，分段的目的是为了更好地满足用户的需要。")])])]),a._v(" "),_("li",[a._v("大小/长度\n"),_("ul",[_("li",[a._v("页的大小固定且由系统决定，由硬件把逻辑地址划分为页号和页内地址两部分。")]),a._v(" "),_("li",[a._v("段的长度不固定且由用户所编写的程序决定，通常由编译系统在对源程序进行编译时根据信息的性质来划分。")])])]),a._v(" "),_("li",[a._v("地址空间维数\n"),_("ul",[_("li",[a._v("分页系统中作业的地址空间是一维的")]),a._v(" "),_("li",[a._v("分段系统中作业的地址空间是二维的。")])])])]),a._v(" "),_("h2",{attrs:{id:"_5-段页式存储管理"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_5-段页式存储管理"}},[a._v("#")]),a._v(" 5. 段页式存储管理")]),a._v(" "),_("blockquote",[_("p",[a._v("分页可以有效提高内存利用率，分段可以更好满足用户需求，两者结合，形成段页式存储管理。")])]),a._v(" "),_("h3",{attrs:{id:"_5-1-思想"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_5-1-思想"}},[a._v("#")]),a._v(" 5.1 思想")]),a._v(" "),_("p",[a._v("先段后页")]),a._v(" "),_("ul",[_("li",[a._v("地址空间首先被分成若干个逻辑分段；")]),a._v(" "),_("li",[a._v("再将每一段分成若干个大小固定的页面。\n"),_("ul",[_("li",[a._v("将主存空间分成若干个和页面大小相同的物理块，对主存的分配以物理块为单位。")])])])]),a._v(" "),_("h3",{attrs:{id:"_5-2-结构"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_5-2-结构"}},[a._v("#")]),a._v(" 5.2 结构")]),a._v(" "),_("p",[_("img",{attrs:{src:"https://hedonspace.oss-cn-beijing.aliyuncs.com/img2/008i3skNly1gt7bj2ivshj30nc040gls.jpg",alt:"image-20200428161502967"}})]),a._v(" "),_("h3",{attrs:{id:"_5-3-地址变换"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_5-3-地址变换"}},[a._v("#")]),a._v(" 5.3 地址变换")]),a._v(" "),_("p",[_("img",{attrs:{src:"https://hedonspace.oss-cn-beijing.aliyuncs.com/img2/008i3skNly1gt7bivyjtbj31640kogpf.jpg",alt:"image-20200428161537518"}})]),a._v(" "),_("h2",{attrs:{id:"_6-虚拟内存"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_6-虚拟内存"}},[a._v("#")]),a._v(" 6. 虚拟内存")]),a._v(" "),_("h3",{attrs:{id:"_6-1-局部性原理"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_6-1-局部性原理"}},[a._v("#")]),a._v(" 6.1 局部性原理")]),a._v(" "),_("blockquote",[_("p",[a._v("在程序装入时，不必将其全部读入内存，而只需将当前执行需要的部分放入内容，而将其余部分放在外存，就可以启动程序执行。在程序执行过程中，当所访问的信息不在内存时，由操作系统将所需要的信息调入内存，然后继续执行程序。")])]),a._v(" "),_("h3",{attrs:{id:"_6-2-特性"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_6-2-特性"}},[a._v("#")]),a._v(" 6.2 特性")]),a._v(" "),_("ul",[_("li",[a._v("离散性\n"),_("ul",[_("li",[a._v("不连续内容分配")])])]),a._v(" "),_("li",[a._v("多次性\n"),_("ul",[_("li",[a._v("一个作业分多次装入内存")])])]),a._v(" "),_("li",[a._v("对换性\n"),_("ul",[_("li",[a._v("允许运行中换进换出")])])]),a._v(" "),_("li",[a._v("虚拟性\n"),_("ul",[_("li",[a._v("逻辑上扩充内存")])])])]),a._v(" "),_("h3",{attrs:{id:"_6-3-物质基础"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_6-3-物质基础"}},[a._v("#")]),a._v(" 6.3 物质基础")]),a._v(" "),_("ul",[_("li",[a._v("有相当数量的外存，足矣存放多个作业；")]),a._v(" "),_("li",[a._v("有一定容量的内存；")]),a._v(" "),_("li",[a._v("地址变换机构，以动态实现逻辑地址到物理地址的变换。")])]),a._v(" "),_("h3",{attrs:{id:"_6-4-实现方案"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_6-4-实现方案"}},[a._v("#")]),a._v(" 6.4 实现方案")]),a._v(" "),_("ul",[_("li",[a._v("请求分页存储管理")]),a._v(" "),_("li",[a._v("请求分段存储管理")]),a._v(" "),_("li",[a._v("请求段页式存储管理")])]),a._v(" "),_("h3",{attrs:{id:"_6-5-请求分页存储管理"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_6-5-请求分页存储管理"}},[a._v("#")]),a._v(" 6.5 请求分页存储管理")]),a._v(" "),_("h4",{attrs:{id:"_6-5-1-实现思想"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_6-5-1-实现思想"}},[a._v("#")]),a._v(" 6.5.1 实现思想")]),a._v(" "),_("blockquote",[_("p",[a._v("请求分页存储管理方法是在分页存储管理的基础上增加了请求调页和页面置换功能。")])]),a._v(" "),_("blockquote",[_("p",[a._v("实现思想：在作业运行之前只装入当前需要的一部分页面便启动作业运行。")]),a._v(" "),_("p",[a._v("在作业运行过程中，若发现所要访问的页面不在内存，便由硬件产生缺页中断，请求OS将缺页调入内存。")]),a._v(" "),_("p",[a._v("若内存无空闲存储空间，则根据某种置换算法淘汰已在内存的某个页面，以腾出内存空间装入缺页。")])]),a._v(" "),_("h4",{attrs:{id:"_6-5-2-支持机构"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_6-5-2-支持机构"}},[a._v("#")]),a._v(" 6.5.2 支持机构")]),a._v(" "),_("ul",[_("li",[a._v("页表")]),a._v(" "),_("li",[a._v("缺页中断机构")]),a._v(" "),_("li",[a._v("地址变换机构")]),a._v(" "),_("li",[a._v("请求调页和页面置换软件")])]),a._v(" "),_("h5",{attrs:{id:"页表"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#页表"}},[a._v("#")]),a._v(" [页表]")]),a._v(" "),_("p",[_("img",{attrs:{src:"https://hedonspace.oss-cn-beijing.aliyuncs.com/img2/008i3skNly1gt7bivgcxij316u058wf4.jpg",alt:"image-20200509151743494"}})]),a._v(" "),_("ul",[_("li",[a._v("页号和物理块号：\n"),_("ul",[_("li",[a._v("定义同分页存储管理；")])])]),a._v(" "),_("li",[a._v("状态位：\n"),_("ul",[_("li",[a._v("表示页面是否在内存中；")])])]),a._v(" "),_("li",[a._v("访问字段：\n"),_("ul",[_("li",[a._v("记录页面在一段时间内被访问的次数；")]),a._v(" "),_("li",[a._v("或最近已有多长时间未被访问；")]),a._v(" "),_("li",[a._v("该字段供置换算法在选择换出页面时参考；")])])]),a._v(" "),_("li",[a._v("修改位：\n"),_("ul",[_("li",[a._v("表示页面调入内存后是否被修改过，若被修改，则需要重新写到外存上；")])])]),a._v(" "),_("li",[a._v("外存地址：\n"),_("ul",[_("li",[a._v("指出页面在外存是的存放地址；")]),a._v(" "),_("li",[a._v("供调入页面时使用。")])])])]),a._v(" "),_("h5",{attrs:{id:"缺页中断和地址变换"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#缺页中断和地址变换"}},[a._v("#")]),a._v(" [缺页中断和地址变换]")]),a._v(" "),_("p",[_("img",{attrs:{src:"https://hedonspace.oss-cn-beijing.aliyuncs.com/img2/008i3skNly1gt7bisl22mj30u0132jyk.jpg",alt:"image-20200509153418785"}})]),a._v(" "),_("h4",{attrs:{id:"_6-5-3-页面分配和置换策略"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_6-5-3-页面分配和置换策略"}},[a._v("#")]),a._v(" 6.5.3 页面分配和置换策略")]),a._v(" "),_("p",[a._v("进程运行所需的最少物理块数")]),a._v(" "),_("ul",[_("li",[a._v("单地址指令且采用直接寻址\n"),_("ul",[_("li",[a._v("至少两块\n"),_("ul",[_("li",[a._v("一个存放指令")]),a._v(" "),_("li",[a._v("一个存放数据")])])])])]),a._v(" "),_("li",[a._v("间接寻址\n"),_("ul",[_("li",[a._v("至少三块")])])])]),a._v(" "),_("p",[a._v("页面分配策略")]),a._v(" "),_("ul",[_("li",[a._v("固定分配\n"),_("ul",[_("li",[a._v("分配给进程的主存块数是固定的，且在进程创建时确定块数；")])])]),a._v(" "),_("li",[a._v("可变分配\n"),_("ul",[_("li",[a._v("允许分配给进程的主存块数随进程的执行而改变；")])])])]),a._v(" "),_("p",[a._v("页面置换策略")]),a._v(" "),_("ul",[_("li",[a._v("全局置换\n"),_("ul",[_("li",[a._v("允许一个进程从全部内存物理块集合中选择淘汰对象；")])])]),a._v(" "),_("li",[a._v("局部置换\n"),_("ul",[_("li",[a._v("规定每个进程只能从分配给它的物理块中淘汰对象；")])])])]),a._v(" "),_("h5",{attrs:{id:"_1-固定分配局部置换"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-固定分配局部置换"}},[a._v("#")]),a._v(" [1] 固定分配局部置换")]),a._v(" "),_("blockquote",[_("p",[a._v("基于某种原则为每个进程分配固定数量的物理块，当进程运行中出现缺页时，只能从自己的页面中选择一页换出，然后再调入缺页。")]),a._v(" "),_("p",[a._v("实现这种策略的困难在于：难以确定应为每个进程分配多少个物理块。")])]),a._v(" "),_("h5",{attrs:{id:"_2-可变分配全局置换"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-可变分配全局置换"}},[a._v("#")]),a._v(" [2] 可变分配全局置换")]),a._v(" "),_("blockquote",[_("p",[a._v("先为系统中的每个进程分配一定数量的物理块，操作系统本身也保持一个空闲物理块队列。当某进程发生缺页时，由系统从空闲物理块队列中取出一个物理块分配给该进程；当空闲物理块队列中的物理块用完时，操作系统才从内存中选择一页调出，该页可以是系统中任何一个进程的页面。")]),a._v(" "),_("p",[a._v("这是一种容易实现的页面分配和置换策略，目前已用于若干操作系统中。")])]),a._v(" "),_("h5",{attrs:{id:"_3-可变分配局部置换"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_3-可变分配局部置换"}},[a._v("#")]),a._v(" [3] 可变分配局部置换")]),a._v(" "),_("blockquote",[_("p",[a._v("根据某种原则为每个进程分配一定数量的物理块，当进程发生缺页中断时，只允许从该进程的页面中选出一页换出。如果某进程的缺页率较高，则系统再为该进程分配若干物理块；反之若某进程的缺页率特别低，则系统可适当减少分配给该进程的物理块数。")]),a._v(" "),_("p",[a._v("该算法比较复杂，但性能较好。")])]),a._v(" "),_("h4",{attrs:{id:"_6-6-4-物理块的分配算法"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_6-6-4-物理块的分配算法"}},[a._v("#")]),a._v(" 6.6.4 物理块的分配算法")]),a._v(" "),_("h5",{attrs:{id:"_1-平均分配算法"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-平均分配算法"}},[a._v("#")]),a._v(" [1] 平均分配算法")]),a._v(" "),_("h5",{attrs:{id:"_2-按比例分配算法"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-按比例分配算法"}},[a._v("#")]),a._v(" [2] 按比例分配算法")]),a._v(" "),_("ul",[_("li",[a._v("看进程大小")])]),a._v(" "),_("h5",{attrs:{id:"_3-按优先级分配算法"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_3-按优先级分配算法"}},[a._v("#")]),a._v(" [3] 按优先级分配算法")]),a._v(" "),_("h4",{attrs:{id:"_6-6-5-页面置换算法"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_6-6-5-页面置换算法"}},[a._v("#")]),a._v(" 6.6.5 页面置换算法")]),a._v(" "),_("h5",{attrs:{id:"最佳置换算法-opt"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#最佳置换算法-opt"}},[a._v("#")]),a._v(" [最佳置换算法 OPT]")]),a._v(" "),_("blockquote",[_("p",[a._v("从内存中选择将来最长时间不会使用的页面予以淘汰。")]),a._v(" "),_("p",[a._v("因页面访问的未来顺序很难精确预测，该算法具有理论意义，可以用来评价其他算法的优劣。")])]),a._v(" "),_("p",[_("img",{attrs:{src:"https://hedonspace.oss-cn-beijing.aliyuncs.com/img2/008i3skNly1gt7bit3zf1j318y0fwadk.jpg",alt:"image-20200509160054979"}})]),a._v(" "),_("h5",{attrs:{id:"先进先出置换算法-fifo"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#先进先出置换算法-fifo"}},[a._v("#")]),a._v(" [先进先出置换算法 FIFO]")]),a._v(" "),_("blockquote",[_("p",[a._v("选择调入主存时间最长的页面予以淘汰。")])]),a._v(" "),_("p",[a._v("Belady 现象")]),a._v(" "),_("blockquote",[_("p",[a._v("在某些情况下，分配给进程的页面数增多，缺页次数反而增加。")])]),a._v(" "),_("p",[_("img",{attrs:{src:"https://hedonspace.oss-cn-beijing.aliyuncs.com/img2/008i3skNly1gt7bipdfjpj31aq0r245h.jpg",alt:"image-20200509160441850"}})]),a._v(" "),_("p",[a._v("原因：")]),a._v(" "),_("blockquote",[_("p",[a._v("FIFO 算法的置换特征与进程访问内存的动态特征的矛盾的，即被置换的页面并不是不会访问的。")])]),a._v(" "),_("h5",{attrs:{id:"最近最久未使用置换算法-lru"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#最近最久未使用置换算法-lru"}},[a._v("#")]),a._v(" [最近最久未使用置换算法 LRU]")]),a._v(" "),_("blockquote",[_("p",[a._v("选择最近一段时间内最长时间没有被访问过的页面予以淘汰。")])]),a._v(" "),_("blockquote",[_("p",[a._v("为此，应赋予每个页面一个访问字段，用于记录页面自上次访问以来所经历的时间")])]),a._v(" "),_("p",[_("img",{attrs:{src:"https://hedonspace.oss-cn-beijing.aliyuncs.com/img2/008i3skNly1gt7bitl3klj31860cg410.jpg",alt:"image-20200509160701248"}})]),a._v(" "),_("p",[a._v("特点:")]),a._v(" "),_("ul",[_("li",[a._v("LRU 的性能接近于最佳算法，但实现起来还是很困难。")]),a._v(" "),_("li",[a._v("因为我们多设置了一个访问字段，并且要经常更新它，导致开销很大。")]),a._v(" "),_("li",[a._v("因此，实际中往往采用 LRU 的近似算法。")])]),a._v(" "),_("p",[a._v("2 种方法实现 LRU 算法")]),a._v(" "),_("h6",{attrs:{id:"_1-链表法"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-链表法"}},[a._v("#")]),a._v(" ① 链表法")]),a._v(" "),_("blockquote",[_("p",[a._v("用一个单链表保存当前进程所访问的各页面号，刚使用过的页面放表尾，则表头一定是最近最久未使用的页面。")])]),a._v(" "),_("p",[a._v("当分配给进程的物理块未用完时，则将进程装入内存的页面按先后顺序构成一个链表 当进程访问的页面在内存时，将页面从链表中移出放到表尾 当进程访问的页面不在内存时，则发生缺页中断，将表头页面置换")]),a._v(" "),_("p",[_("img",{attrs:{src:"https://hedonspace.oss-cn-beijing.aliyuncs.com/img2/008i3skNly1gt7biyrke9j318a0gijuw.jpg",alt:"image-20200509163711881"}})]),a._v(" "),_("h6",{attrs:{id:"_2-计数器法"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-计数器法"}},[a._v("#")]),a._v(" ② 计数器法")]),a._v(" "),_("blockquote",[_("p",[a._v("为每个页面配置一个计数器（ Counter ），其初值为0。当进程访问某页时，将计数器的最高位置1，定时器每隔一定时间将计数器右移1位，则数值最小的页是最近最久未使用的页面。")])]),a._v(" "),_("p",[a._v("利用 8 位寄存器记录 8 个页面访问情况如下：")]),a._v(" "),_("p",[_("img",{attrs:{src:"https://hedonspace.oss-cn-beijing.aliyuncs.com/img2/008i3skNly1gt7bj20gbvj619a0j4dj802.jpg",alt:"image-20200509163847604"}})]),a._v(" "),_("p",[a._v("从上表可以看出页面 7 是最近最久未使用的页面。")]),a._v(" "),_("h5",{attrs:{id:"第二次机会算法"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#第二次机会算法"}},[a._v("#")]),a._v(" [第二次机会算法]")]),a._v(" "),_("p",[a._v("该算计将 FIFO 算法与页表中的”引用位“结合起来使用。")]),a._v(" "),_("p",[a._v("当选择页面置换时，先检查 FIFO 页面队列中的队首页面（这是最早进入主存的页面）")]),a._v(" "),_("ul",[_("li",[a._v("如果它的引用位为0，那么这个页面既老又没用，淘汰；")]),a._v(" "),_("li",[a._v("如果它的引用位为1，说明老当益壮，将引用位改为0并扔到队尾，看成是一个新调入的页面，并将它的装入时间改成当前时间，然后选择下一个 FIFO 页面。")])]),a._v(" "),_("h5",{attrs:{id:"简单时钟算法"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#简单时钟算法"}},[a._v("#")]),a._v(" [简单时钟算法]")]),a._v(" "),_("p",[a._v("△ 上述算法的出队入队很浪费，所以这个算法弄成循环列表，不需要出入队，就是移动指针而已。注意：简单时钟算法在遇到1的时候，不需要把它移动到最后。")]),a._v(" "),_("p",[a._v("将页面排成一个循环队列，类似于时钟表面，并使用一个置换指针。")]),a._v(" "),_("p",[a._v("当发生缺页时，检查指针指向的页面，")]),a._v(" "),_("ul",[_("li",[a._v("若其访问位为0则淘汰该页，")]),a._v(" "),_("li",[a._v("否则将该页的访问位清0，指针前移并重复上述过程，直到找到访问位为0的淘汰页为止。")])]),a._v(" "),_("p",[a._v("最后指针停留在被置换页的下一页上。")]),a._v(" "),_("p",[a._v("如果不需要置换，则指针位置不变。")]),a._v(" "),_("p",[_("img",{attrs:{src:"https://hedonspace.oss-cn-beijing.aliyuncs.com/img2/008i3skNly1gt7biwcuw9j61as0kqwih02.jpg",alt:"image-20200509170658738"}})]),a._v(" "),_("h5",{attrs:{id:"改进的时钟算法"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#改进的时钟算法"}},[a._v("#")]),a._v(" [改进的时钟算法]")]),a._v(" "),_("p",[a._v("△ 简单时钟算法中淘汰的时候只考虑了页面的访问情况，没有考虑被淘汰页面的修改情况，因为淘汰一个修改过的页面还需要写磁盘，开销很大。所以改变的时钟算法就顾及到这两个方面了。")]),a._v(" "),_("p",[a._v("设 R 为页面的访问位，U 为页面的修改位，则有四种情况：")]),a._v(" "),_("ul",[_("li",[a._v("1类(R=0,U=0)：未被访问又未被修改")]),a._v(" "),_("li",[a._v("2类(R=0,U=1)：未被访问但已被修改")]),a._v(" "),_("li",[a._v("3类(R=1,U=0)：已被访问但未被修改")]),a._v(" "),_("li",[a._v("4类(R=1,U=1)：已被访问且已被修改")])]),a._v(" "),_("p",[_("img",{attrs:{src:"https://hedonspace.oss-cn-beijing.aliyuncs.com/img2/008i3skNly1gt7biuy2z2j31240kiq6w.jpg",alt:"image-20200509171022346"}})]),a._v(" "),_("ul",[_("li",[a._v("从指针当前位置开始扫描循环队列，寻找R=0,U=0的页面，将满足条件的第一个页面作为淘汰页。")]),a._v(" "),_("li",[a._v("若第1步失败，则开始第2轮扫描，寻找R=0,U=1的页面，将满足条件的第一个页面作为淘汰页，并将所有经历过页面的访问位R置0。")]),a._v(" "),_("li",[a._v("若第2步失败，则将指针返回到开始位置，然后重复第1步，若仍失败则必须重复第2步。此时一定能找到淘汰页面。")])]),a._v(" "),_("p",[a._v("特点：减少了磁盘I/O次数，但算法本身开销增加。")]),a._v(" "),_("h5",{attrs:{id:"最不常用算法"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#最不常用算法"}},[a._v("#")]),a._v(" [最不常用算法]")]),a._v(" "),_("blockquote",[_("p",[a._v("选择到当前时间为止访问次数最少的页淘汰。")]),a._v(" "),_("p",[a._v("该算法要求为每页设置一个访问计数器，每当页被访问时，该页的访问计数器加1。")]),a._v(" "),_("p",[a._v("发生缺页中断时，淘汰计数值最小的页面，并将所有计数器清零。")])]),a._v(" "),_("h5",{attrs:{id:"页面缓冲算法"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#页面缓冲算法"}},[a._v("#")]),a._v(" [页面缓冲算法]")]),a._v(" "),_("blockquote",[_("p",[a._v("页面缓冲置换算法采用FIFO选择被置换页面，选择出的页面不是立即换出，而是放入两个链表之一。")])]),a._v(" "),_("ul",[_("li",[a._v("空闲链：页面未修改则放入空闲链末尾")]),a._v(" "),_("li",[a._v("修改链：页面已修改则放入修改链末尾")])]),a._v(" "),_("p",[a._v("当需要访问一个页面时，若该页在上述两个队列中，则只要将该页面从队列中移出，否则用空闲链的第一个物理块装入该页。当修改链中的页面数达到一定值时，再将它们一次写回磁盘，然后将它们加入空闲页面链表中。")]),a._v(" "),_("h2",{attrs:{id:"_7-linux-存储管理"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_7-linux-存储管理"}},[a._v("#")]),a._v(" 7. Linux 存储管理")]),a._v(" "),_("h3",{attrs:{id:"_7-1-buddy-内存管理算法"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_7-1-buddy-内存管理算法"}},[a._v("#")]),a._v(" 7.1 Buddy 内存管理算法")]),a._v(" "),_("p",[_("img",{attrs:{src:"https://hedonspace.oss-cn-beijing.aliyuncs.com/img2/008i3skNly1gt7biu3mbcj319f0u0dls.jpg",alt:"image-20200421154228062"}})]),a._v(" "),_("h3",{attrs:{id:"_7-2-linux-交换空间"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_7-2-linux-交换空间"}},[a._v("#")]),a._v(" 7.2 Linux 交换空间")]),a._v(" "),_("h5",{attrs:{id:"概念"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#概念"}},[a._v("#")]),a._v(" 概念")]),a._v(" "),_("ul",[_("li",[a._v("交换空间 Swap 是磁盘的一个分区")]),a._v(" "),_("li",[a._v("Linux 物理内存满时，会把一些内存交换至 Swap 空间")]),a._v(" "),_("li",[a._v("Swap 空间是初始化系统时配置的")])]),a._v(" "),_("h5",{attrs:{id:"查看交换空间-top"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#查看交换空间-top"}},[a._v("#")]),a._v(" 查看交换空间 —— top")]),a._v(" "),_("p",[_("img",{attrs:{src:"https://hedonspace.oss-cn-beijing.aliyuncs.com/img2/008i3skNly1gt7bixbuz9j31jq06cjv3.jpg",alt:"image-20210108230538524"}})]),a._v(" "),_("h5",{attrs:{id:"作用"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#作用"}},[a._v("#")]),a._v(" 作用")]),a._v(" "),_("ul",[_("li",[a._v("冷启动内存依赖\n"),_("ul",[_("li",[a._v("将不经常使用的内存数据存到 Swap 空间中。")])])]),a._v(" "),_("li",[a._v("系统睡眠依赖\n"),_("ul",[_("li",[a._v("睡眠的时候将内存信息存到 Swap 中，启动的时候从 Swap 中恢复，速度更快。")])])]),a._v(" "),_("li",[a._v("大进程空间依赖")])]),a._v(" "),_("h5",{attrs:{id:"交换空间与虚拟内存"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#交换空间与虚拟内存"}},[a._v("#")]),a._v(" 交换空间与虚拟内存")]),a._v(" "),_("p",[_("img",{attrs:{src:"https://hedonspace.oss-cn-beijing.aliyuncs.com/img2/008i3skNly1gt7biugebhj31j80fogou.jpg",alt:"image-20210108230933881"}})]),a._v(" "),_("Vssue")],1)}),[],!1,null,null,null);t.default=s.exports}}]);
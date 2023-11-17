(window.webpackJsonp=window.webpackJsonp||[]).push([[130],{544:function(t,a,s){"use strict";s.r(a);var i=s(47),v=Object(i.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"五、文件管理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#五、文件管理"}},[t._v("#")]),t._v(" 五、文件管理")]),t._v(" "),s("h2",{attrs:{id:"_1-文件的逻辑结构"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-文件的逻辑结构"}},[t._v("#")]),t._v(" 1. 文件的逻辑结构")]),t._v(" "),s("h3",{attrs:{id:"_1-1-逻辑结构的文件类型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-逻辑结构的文件类型"}},[t._v("#")]),t._v(" 1.1 逻辑结构的文件类型")]),t._v(" "),s("h5",{attrs:{id:"有结构文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#有结构文件"}},[t._v("#")]),t._v(" 有结构文件")]),t._v(" "),s("blockquote",[s("p",[t._v("文件内容由定长记录和可变长记录组成。")]),t._v(" "),s("p",[t._v("定长记录记录文件格式、文件描述等结构化数据项，可变长记录存储文件的具体内容。")])]),t._v(" "),s("ul",[s("li",[t._v("文本文件")]),t._v(" "),s("li",[t._v("文档")]),t._v(" "),s("li",[t._v("媒体文件")])]),t._v(" "),s("img",{staticStyle:{zoom:"33%"},attrs:{src:"https://hedonspace.oss-cn-beijing.aliyuncs.com/img2/008i3skNly1gt7bk3y9v7j31ek0kmabx.jpg",alt:"image-20210108231855832"}}),t._v(" "),s("h5",{attrs:{id:"无结构文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#无结构文件"}},[t._v("#")]),t._v(" 无结构文件")]),t._v(" "),s("blockquote",[s("p",[t._v("也称为流式文件，文件内容长度以字节为单位。")])]),t._v(" "),s("ul",[s("li",[t._v("二进制文件\n"),s("ul",[s("li",[t._v("exe 文件")])])]),t._v(" "),s("li",[t._v("链接库\n"),s("ul",[s("li",[t._v("dll 文件")]),t._v(" "),s("li",[t._v("so 文件")])])])]),t._v(" "),s("h3",{attrs:{id:"_1-2-顺序文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-顺序文件"}},[t._v("#")]),t._v(" 1.2 顺序文件")]),t._v(" "),s("blockquote",[s("p",[t._v("按照顺序存放在存储介质中的文件。")])]),t._v(" "),s("p",[t._v("磁带的存储特性使得磁带文件只能存储顺序文件。")]),t._v(" "),s("p",[t._v("顺序文件是所有逻辑文件当中存储效率最高的。")]),t._v(" "),s("p",[t._v("可变长文件不适合使用顺序文件格式存储。")]),t._v(" "),s("h3",{attrs:{id:"_1-3-索引文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-索引文件"}},[t._v("#")]),t._v(" 1.3 索引文件")]),t._v(" "),s("p",[t._v("索引文件是为了解决可变长文件存储而发明的一种文件格式。")]),t._v(" "),s("p",[t._v("索引文件需要配合索引表完成存储的操作。")]),t._v(" "),s("img",{staticStyle:{zoom:"33%"},attrs:{src:"https://hedonspace.oss-cn-beijing.aliyuncs.com/img2/008i3skNly1gt7bjwurwnj317q0mu768.jpg",alt:"image-20210108232209703"}}),t._v(" "),s("h2",{attrs:{id:"_2-磁盘调度算法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-磁盘调度算法"}},[t._v("#")]),t._v(" 2. 磁盘调度算法")]),t._v(" "),s("h5",{attrs:{id:"_1-先来先服务算法-fcfs"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-先来先服务算法-fcfs"}},[t._v("#")]),t._v(" [1] 先来先服务算法 FCFS")]),t._v(" "),s("h5",{attrs:{id:"_2-最短寻道时间优先-sstf"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-最短寻道时间优先-sstf"}},[t._v("#")]),t._v(" [2] 最短寻道时间优先 SSTF")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://hedonspace.oss-cn-beijing.aliyuncs.com/img2/008i3skNly1gt7bjyek6pj319g0qun24.jpg",alt:"image-20200512150712968"}})]),t._v(" "),s("h5",{attrs:{id:"_3-扫描算法-scan"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-扫描算法-scan"}},[t._v("#")]),t._v(" [3] 扫描算法 SCAN")]),t._v(" "),s("p",[t._v("在磁头当前移动方向上选择与当前磁头所在磁道距离最近的请求作为下一次服务的对象。因这种算法中磁头移动规律颇似电梯的运行，故又称为电梯调度算法。")]),t._v(" "),s("p",[t._v("特点：具有较好的寻道性能，能避免进程饥饿，但不利于两端磁道的请求。")]),t._v(" "),s("h5",{attrs:{id:"_4-循环扫描-cscan"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-循环扫描-cscan"}},[t._v("#")]),t._v(" [4] 循环扫描 CSCAN")]),t._v(" "),s("p",[t._v("是SCAN算法的改良，它规定磁头单向移动。例如，自里向外移动，当磁头移到最外磁道时立即又返回到最里磁道，如此循环进行扫描。")]),t._v(" "),s("p",[t._v("特点：该算法消除了对两端磁道请求的不公平。")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://hedonspace.oss-cn-beijing.aliyuncs.com/img2/008eGmZEgy1gmgpfmiurhj318o0pygqf.jpg",alt:"image-20200512150724758"}})]),t._v(" "),s("h2",{attrs:{id:"_3-磁盘容错技术"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-磁盘容错技术"}},[t._v("#")]),t._v(" 3. 磁盘容错技术")]),t._v(" "),s("blockquote",[s("p",[t._v("通过增加冗余磁盘驱动器、磁盘控制器等方法来提高磁盘系统可靠性的一种技术。")])]),t._v(" "),s("p",[t._v("三个级别：")]),t._v(" "),s("ul",[s("li",[t._v("低级磁盘容错技术\n"),s("ul",[s("li",[t._v("防止磁盘表明发送缺陷而引起的数据丢失。")]),t._v(" "),s("li",[t._v("采用了双份目录和双份文件分配表、热修复重定向和写后校验等技术。")])])]),t._v(" "),s("li",[t._v("中级磁盘容错技术\n"),s("ul",[s("li",[t._v("防止磁盘驱动器和磁盘控制器故障，采用了磁盘映像、磁盘双工等技术。")])])]),t._v(" "),s("li",[t._v("高级系统容错技术\n"),s("ul",[s("li",[t._v("采用服务器镜像技术。")])])])]),t._v(" "),s("h2",{attrs:{id:"_4-文件的存储空间管理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-文件的存储空间管理"}},[t._v("#")]),t._v(" 4. 文件的存储空间管理")]),t._v(" "),s("h3",{attrs:{id:"_4-1-文件存储空间的分配"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-文件存储空间的分配"}},[t._v("#")]),t._v(" 4.1 文件存储空间的分配")]),t._v(" "),s("h4",{attrs:{id:"连续分配"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#连续分配"}},[t._v("#")]),t._v(" 连续分配")]),t._v(" "),s("blockquote",[s("p",[t._v("为文件分配连续的磁盘空间。")])]),t._v(" "),s("blockquote",[s("p",[t._v("在这种分配方法中，用户必须在分配前说明待创建文件所需的存储空间大小。然后系统查找空闲区管理表格，若有就给文件分配所需的存储空间，否则文件不能建立。")])]),t._v(" "),s("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://hedonspace.oss-cn-beijing.aliyuncs.com/img2/008i3skNly1gt7bk4egbhj31700r6jw4.jpg",alt:"image-20200512152241284"}}),t._v(" "),s("p",[t._v("特点：")]),t._v(" "),s("ul",[s("li",[t._v("顺序访问容易且速度快，目录中文件存储位置信息简单；")]),t._v(" "),s("li",[t._v("但容易产生碎片，需要定期对磁盘空间进行整理。")])]),t._v(" "),s("h4",{attrs:{id:"链接分配"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#链接分配"}},[t._v("#")]),t._v(" 链接分配")]),t._v(" "),s("h5",{attrs:{id:"_1-以扇区为单位的链接分配"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-以扇区为单位的链接分配"}},[t._v("#")]),t._v(" [1] 以扇区为单位的链接分配")]),t._v(" "),s("p",[t._v("以扇区为单位的链接分配：按文件的要求分配若干个磁盘扇区，属于同一文件的各扇区按文件记录的逻辑次序用链接指针链接起来。")]),t._v(" "),s("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://hedonspace.oss-cn-beijing.aliyuncs.com/img2/007S8ZIlgy1gepp6bzia8j312q0rm1ao.jpg",alt:"image-20200512152727049"}}),t._v(" "),s("p",[t._v("特点：")]),t._v(" "),s("ul",[s("li",[t._v("消除碎片")]),t._v(" "),s("li",[t._v("查找麻烦")])]),t._v(" "),s("h5",{attrs:{id:"_2-以区段-或簇-为单位的链接分配"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-以区段-或簇-为单位的链接分配"}},[t._v("#")]),t._v(" [2] 以区段（或簇）为单位的链接分配")]),t._v(" "),s("p",[t._v("是连续分配和非连续分配的结合。")]),t._v(" "),s("p",[t._v("区段由若干个连续扇区组成，文件所属各区段可以用链接指针、索引表等方法来管理。")]),t._v(" "),s("p",[t._v("特点：")]),t._v(" "),s("ul",[s("li",[t._v("对辅存的管理效率较高")]),t._v(" "),s("li",[t._v("减少了文件访问的查寻时间")])]),t._v(" "),s("h4",{attrs:{id:"索引分配"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#索引分配"}},[t._v("#")]),t._v(" 索引分配")]),t._v(" "),s("blockquote",[s("p",[t._v("在索引分配方法中，系统为每个文件分配一个索引块，索引块中存放索引表，索引表中的每个表项对应分配给文件的一个物理块。")])]),t._v(" "),s("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://hedonspace.oss-cn-beijing.aliyuncs.com/img2/008i3skNly1gt7bk30kk1j31360qsdl7.jpg",alt:"image-20200512153709878"}}),t._v(" "),s("ul",[s("li",[t._v("直接索引地址")]),t._v(" "),s("li",[t._v("一次间接索引地址")]),t._v(" "),s("li",[t._v("多次间接索引地址")])]),t._v(" "),s("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://hedonspace.oss-cn-beijing.aliyuncs.com/img2/008i3skNly1gt7bk5dir1j31350u00yl.jpg",alt:"image-20200512153808150"}}),t._v(" "),s("h3",{attrs:{id:"_4-2-空闲存储空间的管理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-空闲存储空间的管理"}},[t._v("#")]),t._v(" 4.2 空闲存储空间的管理")]),t._v(" "),s("h4",{attrs:{id:"空闲文件目录"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#空闲文件目录"}},[t._v("#")]),t._v(" 空闲文件目录")]),t._v(" "),s("p",[t._v("文件存储设备上的一个连续空闲区可以看作一个空闲文件，又称空白文件或自由文件。")]),t._v(" "),s("p",[t._v("空闲文件目录方法为所有空闲文件建立一个目录，每个空闲文件在该目录中占一个表目，其中至少包括：")]),t._v(" "),s("ul",[s("li",[t._v("空闲区序号")]),t._v(" "),s("li",[t._v("第一个空闲块块号")]),t._v(" "),s("li",[t._v("空闲块数目等信息。")])]),t._v(" "),s("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://hedonspace.oss-cn-beijing.aliyuncs.com/img2/007S8ZIlgy1gepq2618kxj318i0dc75v.jpg",alt:"image-20200512155802640"}}),t._v(" "),s("h4",{attrs:{id:"空闲块链"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#空闲块链"}},[t._v("#")]),t._v(" 空闲块链")]),t._v(" "),s("p",[t._v("将文件存储设备上的所有空闲块链接起来，并设置一个头指针指向空闲块链的第一个物理块。")]),t._v(" "),s("p",[t._v("效率低。")]),t._v(" "),s("p",[t._v("改进方法：")]),t._v(" "),s("p",[t._v("将空闲块分成若干组，再用指针将组与组链接起来，将这种管理空闲块的方法称为成组链接法。成组链接法在进行空闲块的分配与回收时要比空闲块链方法节省时间。")]),t._v(" "),s("p",[t._v("空闲盘块的组织：将若干个空闲盘块划归一组，将每组中的所有盘块号存放在其前一组的第一个空闲盘块号指示的盘块中，而将第一组中的所有空闲盘块号放入超级块的空闲盘块号表中。")]),t._v(" "),s("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://hedonspace.oss-cn-beijing.aliyuncs.com/img2/008i3skNly1gt7bkbuy6nj316m0sydlb.jpg",alt:"image-20200512160503655"}}),t._v(" "),s("h5",{attrs:{id:"_1-分配"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-分配"}},[t._v("#")]),t._v(" [1] 分配")]),t._v(" "),s("img",{staticStyle:{zoom:"33%"},attrs:{src:"https://hedonspace.oss-cn-beijing.aliyuncs.com/img2/008i3skNly1gt7bkd8fpdj31bm0pin0h.jpg",alt:"image-20200512160843196"}}),t._v(" "),s("h5",{attrs:{id:"_2-回收"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-回收"}},[t._v("#")]),t._v(" [2] 回收")]),t._v(" "),s("img",{staticStyle:{zoom:"33%"},attrs:{src:"https://hedonspace.oss-cn-beijing.aliyuncs.com/img2/008i3skNly1gt7bjxwxvqj31aw0qaaef.jpg",alt:"image-20200512160923417"}}),t._v(" "),s("h4",{attrs:{id:"位示图"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#位示图"}},[t._v("#")]),t._v(" 位示图")]),t._v(" "),s("p",[t._v("位示图是反映整个存储空间分配情况的数据结构。")]),t._v(" "),s("p",[t._v("在位示图中，每一个二进制位都对应一个物理块，当某位为1时表示该块已分配，当某位为0时表示该块空闲。")]),t._v(" "),s("img",{staticStyle:{zoom:"33%"},attrs:{src:"https://hedonspace.oss-cn-beijing.aliyuncs.com/img2/008i3skNly1gt7bk2gg1zj312e0gkmzg.jpg",alt:"image-20200512161037913"}}),t._v(" "),s("h2",{attrs:{id:"_5-文件系统"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-文件系统"}},[t._v("#")]),t._v(" 5. 文件系统")]),t._v(" "),s("h3",{attrs:{id:"_5-1-fat"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-1-fat"}},[t._v("#")]),t._v(" 5.1 FAT")]),t._v(" "),s("blockquote",[s("p",[t._v("File Allocation Table。")]),t._v(" "),s("p",[t._v("FAT16、FAT32等，是微软 Dos/Windows 使用的文件系统。")]),t._v(" "),s("p",[t._v("使用一张表保存盘块的信息。")])]),t._v(" "),s("h3",{attrs:{id:"_5-2-ntfs"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-2-ntfs"}},[t._v("#")]),t._v(" 5.2 NTFS")]),t._v(" "),s("blockquote",[s("p",[t._v("New Technology File System.")]),t._v(" "),s("p",[t._v("WindowsNT 环境的文件系统。")]),t._v(" "),s("p",[t._v("NTFS 对 FAT 进行了改进，取代了旧文件系统。")])]),t._v(" "),s("h3",{attrs:{id:"_5-3-ext2-3-4"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-3-ext2-3-4"}},[t._v("#")]),t._v(" 5.3 EXT2/3/4")]),t._v(" "),s("blockquote",[s("p",[t._v("Extended File System。")]),t._v(" "),s("p",[t._v("Linux 的文件系统。")])]),t._v(" "),s("h5",{attrs:{id:"逻辑结构"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#逻辑结构"}},[t._v("#")]),t._v(" 逻辑结构")]),t._v(" "),s("img",{staticStyle:{zoom:"33%"},attrs:{src:"https://hedonspace.oss-cn-beijing.aliyuncs.com/img2/008eGmZEgy1gmh599ml4qj317q0jygp8.jpg",alt:"image-20210109083621662"}}),t._v(" "),s("h5",{attrs:{id:"block-group"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#block-group"}},[t._v("#")]),t._v(" Block Group")]),t._v(" "),s("img",{staticStyle:{zoom:"67%"},attrs:{src:"https://hedonspace.oss-cn-beijing.aliyuncs.com/img2/008i3skNly1gt7bjw25tuj60ni0emdgk02.jpg",alt:"image-20210109083716604"}}),t._v(" "),s("p",[t._v("[Inode table]")]),t._v(" "),s("ul",[s("li",[t._v("存储文件 Inode 的地方。")]),t._v(" "),s("li",[t._v("每一个文件（目录）都有一个 Inode，它是每一个文件（目录）的索引节点。")])]),t._v(" "),s("p",[t._v("[Inode]")]),t._v(" "),s("ul",[s("li",[t._v("存放每个文件的元信息\n"),s("ul",[s("li",[t._v("文件类型")]),t._v(" "),s("li",[t._v("文件权限")]),t._v(" "),s("li",[t._v("文件物理地址")]),t._v(" "),s("li",[t._v("文件长度")]),t._v(" "),s("li",[t._v("文件连接计数")]),t._v(" "),s("li",[t._v("文件存取时间")]),t._v(" "),s("li",[t._v("文件状态")]),t._v(" "),s("li",[t._v("访问计数")]),t._v(" "),s("li",[t._v("链接指针")]),t._v(" "),s("li",[t._v("索引节点编号")])])]),t._v(" "),s("li",[t._v("文件名不是存放在 Inode 节点上的，而是存放在目录的 Inode 节点。这样列出目录文件的时候就无需加载文件的 Inode。")])]),t._v(" "),s("p",[t._v("[Inode bitmap]")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("Inode 的位示图。")])]),t._v(" "),s("li",[s("p",[t._v("记录已分配的 Inode 和未分配的 Inode。")]),t._v(" "),s("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://hedonspace.oss-cn-beijing.aliyuncs.com/img2/008eGmZEgy1gmh5f6k1rtj316o046q47.jpg",alt:"image-20210109084206129"}})])]),t._v(" "),s("p",[t._v("[Data block]")]),t._v(" "),s("ul",[s("li",[t._v("存放文件内容的地方。")]),t._v(" "),s("li",[t._v("每一个 block 都有唯一的编号。")]),t._v(" "),s("li",[t._v("文件的 block 记录在文件的 Inode 上。")])]),t._v(" "),s("p",[t._v("[Block bitmap]")]),t._v(" "),s("ul",[s("li",[t._v("功能与 Inode bitmap 类似，记录 Data block 的使用情况。")])]),t._v(" "),s("p",[t._v("[Superblock]")]),t._v(" "),s("ul",[s("li",[t._v("记录整个文件系统相关信息的地方。包括 Block 和 Inode 的使用情况，还有时间信息、控制信息等。")])]),t._v(" "),s("h2",{attrs:{id:"_6-linux-磁盘操作"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6-linux-磁盘操作"}},[t._v("#")]),t._v(" 6. Linux 磁盘操作")]),t._v(" "),s("h5",{attrs:{id:"查看磁盘分配信息-df-t"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#查看磁盘分配信息-df-t"}},[t._v("#")]),t._v(" 查看磁盘分配信息 —— "),s("code",[t._v("df -T")])]),t._v(" "),s("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://hedonspace.oss-cn-beijing.aliyuncs.com/img2/008i3skNly1gt7bjzs3qij31bu09an1a.jpg",alt:"image-20210109084626499"}}),t._v(" "),s("h5",{attrs:{id:"查看-inode-信息-dumpe2fs-某个设备"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#查看-inode-信息-dumpe2fs-某个设备"}},[t._v("#")]),t._v(" 查看 Inode 信息 —— "),s("code",[t._v("dumpe2fs 某个设备")])]),t._v(" "),s("p",[s("img",{attrs:{src:"https://hedonspace.oss-cn-beijing.aliyuncs.com/img2/008eGmZEgy1gmh5lz0y30j31po0teh93.jpg",alt:"image-20210109084836404"}})]),t._v(" "),s("h5",{attrs:{id:"查看文件信息-stat-文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#查看文件信息-stat-文件"}},[t._v("#")]),t._v(" 查看文件信息 —— "),s("code",[t._v("stat 文件")])]),t._v(" "),s("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://hedonspace.oss-cn-beijing.aliyuncs.com/img2/008eGmZEgy1gmh5nrea4sj318a0aiwnd.jpg",alt:"image-20210109085020066"}}),t._v(" "),s("h2",{attrs:{id:"_7-linux-文件操作"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_7-linux-文件操作"}},[t._v("#")]),t._v(" 7. Linux 文件操作")]),t._v(" "),s("h5",{attrs:{id:"显示当前工作目录的绝对路径-pwd"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#显示当前工作目录的绝对路径-pwd"}},[t._v("#")]),t._v(" 显示当前工作目录的绝对路径 ——  "),s("code",[t._v("pwd")])]),t._v(" "),s("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://hedonspace.oss-cn-beijing.aliyuncs.com/img2/008i3skNly1gt7bk75z74j313q01y0su.jpg",alt:"image-20200910160803395"}}),t._v(" "),s("h5",{attrs:{id:"显示当前目录的信息-ls"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#显示当前目录的信息-ls"}},[t._v("#")]),t._v(" 显示当前目录的信息 —— "),s("code",[t._v("ls")])]),t._v(" "),s("ul",[s("li",[s("p",[t._v("-a：显示当前目录所有的文件和目录，包括隐藏的。")]),t._v(" "),s("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://hedonspace.oss-cn-beijing.aliyuncs.com/img2/008i3skNly1gt7bk3i1vij30ze04y3zv.jpg",alt:"image-20200910161017052"}})]),t._v(" "),s("li",[s("p",[t._v("-l：以列表的方式显示信息。")]),t._v(" "),s("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://hedonspace.oss-cn-beijing.aliyuncs.com/img2/008i3skNly1gt7bjxb01zj30rw0c4adv.jpg",alt:"image-20200910161031757"}})])]),t._v(" "),s("p",[t._v("例：查看当前目录的所有内容信息")]),t._v(" "),s("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://hedonspace.oss-cn-beijing.aliyuncs.com/img2/007S8ZIlly1gilmekmh6uj30y40d8dgp.jpg",alt:"image-20200910160944120"}}),t._v(" "),s("h5",{attrs:{id:"切换目录-cd"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#切换目录-cd"}},[t._v("#")]),t._v(" 切换目录 —— "),s("code",[t._v("cd")])]),t._v(" "),s("ul",[s("li",[s("p",[t._v("cd ~：回到当前用户的家目录")]),t._v(" "),s("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://hedonspace.oss-cn-beijing.aliyuncs.com/img2/007S8ZIlly1gilmg960ygj30oc07udg3.jpg",alt:"image-20200910161215045"}})]),t._v(" "),s("li",[s("p",[t._v("cd ..：回到上级目录")])]),t._v(" "),s("li",[s("p",[t._v("cd [绝对路径] | [相对路径]：切换到指定路径")])])]),t._v(" "),s("h5",{attrs:{id:"创建目录-mkdir"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#创建目录-mkdir"}},[t._v("#")]),t._v(" 创建目录 —— "),s("code",[t._v("mkdir")])]),t._v(" "),s("ul",[s("li",[s("p",[t._v("mkdir 目录 —— 创建单级目录")]),t._v(" "),s("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://hedonspace.oss-cn-beijing.aliyuncs.com/img2/008i3skNly1gt7bk07viqj30rs0340tq.jpg",alt:"image-20200910161929409"}})]),t._v(" "),s("li",[s("p",[t._v("mkdir -p 目录 —— 创建多级目录")]),t._v(" "),s("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://hedonspace.oss-cn-beijing.aliyuncs.com/img2/008i3skNly1gt7bjyu5slj60to034dgy02.jpg",alt:"image-20200910161958248"}})])]),t._v(" "),s("h5",{attrs:{id:"删除空目录-rmdir-目录"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#删除空目录-rmdir-目录"}},[t._v("#")]),t._v(" 删除空目录 —— "),s("code",[t._v("rmdir 目录")])]),t._v(" "),s("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://hedonspace.oss-cn-beijing.aliyuncs.com/img2/008i3skNly1gt7bjwek8oj31140320tj.jpg",alt:"image-20200910162143629"}}),t._v(" "),s("h5",{attrs:{id:"删除非空目录-rm-rf-目录"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#删除非空目录-rm-rf-目录"}},[t._v("#")]),t._v(" 删除非空目录 —— "),s("code",[t._v("rm -rf 目录")])]),t._v(" "),s("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://hedonspace.oss-cn-beijing.aliyuncs.com/img2/008i3skNly1gt7bk8kuc1j30pc032js7.jpg",alt:"image-20200910162252214"}}),t._v(" "),s("h5",{attrs:{id:"创建空文件-touch-文件名"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#创建空文件-touch-文件名"}},[t._v("#")]),t._v(" 创建空文件 —— "),s("code",[t._v("touch 文件名")])]),t._v(" "),s("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://hedonspace.oss-cn-beijing.aliyuncs.com/img2/007S8ZIlly1gilmsdq4cwj311205eaar.jpg",alt:"image-20200910162355086"}}),t._v(" "),s("h5",{attrs:{id:"拷贝文件-cp-选项-原路径-目标路径"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#拷贝文件-cp-选项-原路径-目标路径"}},[t._v("#")]),t._v(" 拷贝文件 —— "),s("code",[t._v("cp [选项] 原路径 目标路径")])]),t._v(" "),s("p",[t._v("将当前目录下的 newFile.txt 文件拷贝到当前目录下的 newDir 目录下：")]),t._v(" "),s("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://hedonspace.oss-cn-beijing.aliyuncs.com/img2/008i3skNly1gt7bk913qxj30pe010q31.jpg",alt:"image-20200910162705004"}}),t._v(" "),s("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://hedonspace.oss-cn-beijing.aliyuncs.com/img2/008i3skNly1gt7bkcdjr2j30ze07u3yu.jpg",alt:"image-20200910162725033"}}),t._v(" "),s("ul",[s("li",[s("p",[t._v("-r：递归复制整个文件")]),t._v(" "),s("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://hedonspace.oss-cn-beijing.aliyuncs.com/img2/008i3skNly1gt7bkds9k6j30we03mdgh.jpg",alt:"image-20200910162838332"}})])]),t._v(" "),s("h5",{attrs:{id:"删除文件或目录-rm"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#删除文件或目录-rm"}},[t._v("#")]),t._v(" 删除文件或目录 —— "),s("code",[t._v("rm")])]),t._v(" "),s("ul",[s("li",[t._v("rm 文件名：删除文件")])]),t._v(" "),s("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://hedonspace.oss-cn-beijing.aliyuncs.com/img2/008i3skNly1gt7bk6qzj0j30qm034t9f.jpg",alt:"image-20200910163000761"}}),t._v(" "),s("ul",[s("li",[s("p",[t._v("-r：递归删除整个文件夹")]),t._v(" "),s("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://hedonspace.oss-cn-beijing.aliyuncs.com/img2/008i3skNly1gt7bk8578xj30ms00wt8r.jpg",alt:"image-20200910163046740"}})]),t._v(" "),s("li",[s("p",[t._v("-f：强制删除不提示")]),t._v(" "),s("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://hedonspace.oss-cn-beijing.aliyuncs.com/img2/008i3skNly1gt7bkawn3kj30qu02y3zd.jpg",alt:"image-20200910163236657"}})])]),t._v(" "),s("h5",{attrs:{id:"移动文件与目录或重命名-mv"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#移动文件与目录或重命名-mv"}},[t._v("#")]),t._v(" 移动文件与目录或重命名 —— "),s("code",[t._v("mv")])]),t._v(" "),s("ul",[s("li",[s("p",[t._v("mv 旧文件名 新文件名 —— 重命名")]),t._v(" "),s("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://hedonspace.oss-cn-beijing.aliyuncs.com/img2/008i3skNly1gt7bjz6966j30z6054wfx.jpg",alt:"image-20200910163724236"}})]),t._v(" "),s("li",[s("p",[t._v("mv 原路径 新路径")]),t._v(" "),s("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://hedonspace.oss-cn-beijing.aliyuncs.com/img2/007S8ZIlly1giln87106cj314201y3ys.jpg",alt:"image-20200910163906783"}})])]),t._v(" "),s("h5",{attrs:{id:"以只读模式查看文件-cat-文件名"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#以只读模式查看文件-cat-文件名"}},[t._v("#")]),t._v(" 以只读模式查看文件 —— "),s("code",[t._v("cat 文件名")])]),t._v(" "),s("ul",[s("li",[t._v("cat 文件名：查看文件内容")])]),t._v(" "),s("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://hedonspace.oss-cn-beijing.aliyuncs.com/img2/008i3skNly1gt7bkemovtj30ra022jrl.jpg",alt:"image-20200910164014083"}}),t._v(" "),s("ul",[s("li",[s("p",[t._v("-n：显示行号")]),t._v(" "),s("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://hedonspace.oss-cn-beijing.aliyuncs.com/img2/008i3skNly1gt7bk0mqbpj30xs02274i.jpg",alt:"image-20200910164120043"}})]),t._v(" "),s("li",[s("p",[t._v("cat 文件名 | more：分页显示")]),t._v(" "),s("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://hedonspace.oss-cn-beijing.aliyuncs.com/img2/007S8ZIlly1gilne864waj30uo0fqaia.jpg",alt:"image-20200910164454370"}}),t._v(" "),s("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://hedonspace.oss-cn-beijing.aliyuncs.com/img2/008i3skNly1gt7bk1ysmnj313u0a6dja.jpg",alt:"image-20200910164538624"}})])]),t._v(" "),s("h5",{attrs:{id:"more-指令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#more-指令"}},[t._v("#")]),t._v(" more 指令")]),t._v(" "),s("p",[t._v("more 指令是一个基于 VI 编辑器的文本过滤器，它以全屏幕的方式按页显示文本文件的内容。")]),t._v(" "),s("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://hedonspace.oss-cn-beijing.aliyuncs.com/img2/007S8ZIlly1gilniccq0uj312u0aa0wa.jpg",alt:"image-20200910164840474"}}),t._v(" "),s("h5",{attrs:{id:"less-指令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#less-指令"}},[t._v("#")]),t._v(" less 指令")]),t._v(" "),s("p",[t._v("less 指令用来分屏查看文件内容，它的功能与 more 指令类似，但是比 more 指令更加强大，支持各种显示终端。less 指令在显示文件内容时，"),s("strong",[t._v("并不是一次将整个文件加载之后才显示，而是根据显示需要加载内容")]),t._v("，对于显示大型文件具有较高的效率。")]),t._v(" "),s("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://hedonspace.oss-cn-beijing.aliyuncs.com/img2/007S8ZIlly1gilnke7zbqj30ui0dsn5k.jpg",alt:"image-20200910165049049"}}),t._v(" "),s("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://hedonspace.oss-cn-beijing.aliyuncs.com/img2/008i3skNly1gt7bkf8174j60lw012t8t02.jpg",alt:"image-20200910165016594"}}),t._v(" "),s("h5",{attrs:{id:"输出重定向-覆盖"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#输出重定向-覆盖"}},[t._v("#")]),t._v(" 输出重定向（覆盖）—— "),s("code",[t._v(">")])]),t._v(" "),s("ul",[s("li",[s("p",[t._v("ls -l > 文件名：列表的内容写入文件中，覆盖写")]),t._v(" "),s("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://hedonspace.oss-cn-beijing.aliyuncs.com/img2/007S8ZIlly1gilnquf1umj30xi0c4t9h.jpg",alt:"image-20200910165702898"}})]),t._v(" "),s("li",[s("p",[t._v("cat 文件1 > 文件2：将文件1的内容覆盖到文件2中")]),t._v(" "),s("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://hedonspace.oss-cn-beijing.aliyuncs.com/img2/008i3skNly1gt7bke6y6oj30vc0d2wie.jpg",alt:"image-20200910165900287"}})])]),t._v(" "),s("h5",{attrs:{id:"追加"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#追加"}},[t._v("#")]),t._v(" 追加 —— "),s("code",[t._v(">>")])]),t._v(" "),s("ul",[s("li",[s("p",[t._v("cat 文件1 >> 文件2：将文件1的内容追加在文件2后面")]),t._v(" "),s("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://hedonspace.oss-cn-beijing.aliyuncs.com/img2/008i3skNly1gt7bk7rchhj30za0eydjw.jpg",alt:"image-20200910165946547"}})])]),t._v(" "),s("h5",{attrs:{id:"输出内容到控制台-echo"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#输出内容到控制台-echo"}},[t._v("#")]),t._v(" 输出内容到控制台 —— "),s("code",[t._v("echo")])]),t._v(" "),s("ul",[s("li",[s("p",[t._v("echo $PATH：输出当前环境变量")]),t._v(" "),s("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://hedonspace.oss-cn-beijing.aliyuncs.com/img2/007S8ZIlly1gilnvdqnc8j313s032jre.jpg",alt:"image-20200910170124260"}})])]),t._v(" "),s("h5",{attrs:{id:"显示文件的开头部分内容-head"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#显示文件的开头部分内容-head"}},[t._v("#")]),t._v(" 显示文件的开头部分内容 —— "),s("code",[t._v("head")])]),t._v(" "),s("ul",[s("li",[s("p",[t._v("head 文件名：默认输出文件的前10行")]),t._v(" "),s("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://hedonspace.oss-cn-beijing.aliyuncs.com/img2/008i3skNly1gt7bk1ioe9j30rw0b2t91.jpg",alt:"image-20200910170440281"}})]),t._v(" "),s("li",[s("p",[t._v("head -n 行数 文件名：输出文件的头n行")]),t._v(" "),s("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://hedonspace.oss-cn-beijing.aliyuncs.com/img2/008i3skNly1gt7bkbc0auj614e07cq5g02.jpg",alt:"image-20200910170531344"}})])]),t._v(" "),s("h5",{attrs:{id:"显示文件的末尾部分内容-tail"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#显示文件的末尾部分内容-tail"}},[t._v("#")]),t._v(" 显示文件的末尾部分内容 —— "),s("code",[t._v("tail")])]),t._v(" "),s("ul",[s("li",[s("p",[t._v("tail 文件：默认查看文件后 10 行")]),t._v(" "),s("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://hedonspace.oss-cn-beijing.aliyuncs.com/img2/008i3skNly1gt7bkagoj6j30ui0b0mxk.jpg",alt:"image-20200910170626647"}})]),t._v(" "),s("li",[s("p",[t._v("tail -n 行数 文件：显示文件的后n行")]),t._v(" "),s("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://hedonspace.oss-cn-beijing.aliyuncs.com/img2/007S8ZIlly1gilo1k8aktj313s070wet.jpg",alt:"image-20200910170720565"}})]),t._v(" "),s("li",[s("p",[t._v("tail -f 文件：实时追踪该文档的所有更新（"),s("strong",[t._v("重点")]),t._v("）")])])]),t._v(" "),s("h5",{attrs:{id:"创建软连接-类比快捷方式-ln-s-原文件或目录-软连接名"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#创建软连接-类比快捷方式-ln-s-原文件或目录-软连接名"}},[t._v("#")]),t._v(" 创建软连接（类比快捷方式）—— "),s("code",[t._v("ln -s 原文件或目录 软连接名")])]),t._v(" "),s("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://hedonspace.oss-cn-beijing.aliyuncs.com/img2/008i3skNly1gt7bkcsvybj317w0u0tk6.jpg",alt:"image-20200910171640137"}}),t._v(" "),s("h5",{attrs:{id:"删除软连接-rm-rf-软连接名"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#删除软连接-rm-rf-软连接名"}},[t._v("#")]),t._v(" 删除软连接 —— "),s("code",[t._v("rm -rf 软连接名")])]),t._v(" "),s("p",[t._v("不要写 rm-rf linkToRoot/")]),t._v(" "),s("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://hedonspace.oss-cn-beijing.aliyuncs.com/img2/008i3skNly1gt7bk9hiqpj30vu0d2tcu.jpg",alt:"image-20200910171752984"}}),t._v(" "),s("h5",{attrs:{id:"查看已经执行过历史命令或执行历史指令-history"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#查看已经执行过历史命令或执行历史指令-history"}},[t._v("#")]),t._v(" 查看已经执行过历史命令或执行历史指令 —— "),s("code",[t._v("history")])]),t._v(" "),s("ul",[s("li",[s("p",[t._v("history：查看已经执行过的历史指令")]),t._v(" "),s("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://hedonspace.oss-cn-beijing.aliyuncs.com/img2/008i3skNly1gt7bk9zdpuj313c0eytah.jpg",alt:"image-20200910172122688"}})]),t._v(" "),s("li",[s("p",[t._v("history 数字：显示最近使用过的 n 个指令。")]),t._v(" "),s("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://hedonspace.oss-cn-beijing.aliyuncs.com/img2/007S8ZIlly1gilogugsvpj30nk0aymxi.jpg",alt:"image-20200910172202431"}})]),t._v(" "),s("li",[s("p",[t._v("!n：执行第 n 个历史指令")]),t._v(" "),s("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://hedonspace.oss-cn-beijing.aliyuncs.com/img2/008i3skNly1gt7bk12tmgj30xq0n6gpy.jpg",alt:"image-20200910172259211"}})])]),t._v(" "),s("Vssue")],1)}),[],!1,null,null,null);a.default=v.exports}}]);
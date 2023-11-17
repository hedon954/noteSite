(window.webpackJsonp=window.webpackJsonp||[]).push([[256],{667:function(t,a,s){"use strict";s.r(a);var r=s(47),e=Object(r.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"_6-磁盘管理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6-磁盘管理"}},[t._v("#")]),t._v(" 6. 磁盘管理")]),t._v(" "),s("h2",{attrs:{id:"_6-1-分区挂载"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6-1-分区挂载"}},[t._v("#")]),t._v(" 6.1 分区挂载")]),t._v(" "),s("h3",{attrs:{id:"_6-1-1-理论部分"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6-1-1-理论部分"}},[t._v("#")]),t._v(" 6.1.1 理论部分")]),t._v(" "),s("h4",{attrs:{id:"_6-1-1-1-分区的方式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6-1-1-1-分区的方式"}},[t._v("#")]),t._v(" 6.1.1.1 分区的方式")]),t._v(" "),s("h5",{attrs:{id:"mbr-分区-main-boot-record-主引导记录区"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mbr-分区-main-boot-record-主引导记录区"}},[t._v("#")]),t._v(" [MBR 分区] —— Main Boot Record 主引导记录区")]),t._v(" "),s("ul",[s("li",[t._v("最多支持 4 个主分区")]),t._v(" "),s("li",[t._v("系统只能安装在主分区")]),t._v(" "),s("li",[t._v("扩展分区要占一个主分区")]),t._v(" "),s("li",[t._v("MBR 每一个分区最大只支持 2 TB，但拥有最好的兼容性；")])]),t._v(" "),s("h5",{attrs:{id:"gtp-分区-guid-partition-table-全局唯一标识磁盘分区表"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#gtp-分区-guid-partition-table-全局唯一标识磁盘分区表"}},[t._v("#")]),t._v(" [GTP 分区] —— GUID Partition Table 全局唯一标识磁盘分区表")]),t._v(" "),s("ul",[s("li",[t._v("支持无限多个主分区（但操作系统可能限制，比如 windows 下最多 128 个分区）")]),t._v(" "),s("li",[t._v("最大支持 18EB 的大容量（1EB = 1024PB，1PB = 1024TB）")]),t._v(" "),s("li",[t._v("windows7 64 位后支持 GTP")])]),t._v(" "),s("h4",{attrs:{id:"_6-1-1-2-windows-下的磁盘分区"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6-1-1-2-windows-下的磁盘分区"}},[t._v("#")]),t._v(" 6.1.1.2 Windows 下的磁盘分区")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://hedonspace.oss-cn-beijing.aliyuncs.com/img2/0081Kckwgy1gklhsly4qpj30k108h0x1.jpg",alt:"image-20201111201149011"}})]),t._v(" "),s("h4",{attrs:{id:"_6-1-1-3-linux-磁盘分区"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6-1-1-3-linux-磁盘分区"}},[t._v("#")]),t._v(" 6.1.1.3 Linux 磁盘分区")]),t._v(" "),s("p",[t._v("Linux 来说无论有几个分区，分给哪一目录使用，它归根结底就只有一个根目录，一个独立且唯一的文件结构，Linux 中每个分区都是用来组成整个文件系统的一部分。")]),t._v(" "),s("p",[t._v("Linux 采用了一种叫“"),s("strong",[t._v("载入")]),t._v("”的处理方法，它的整个文件系统中包含了一整套的文件和目录， 且将一个分区和一个目录联系起来。这时要载入的一个分区将使它的存储空间在一个目录下获得。")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://hedonspace.oss-cn-beijing.aliyuncs.com/img2/0081Kckwgy1gklhw917jmj30da07p75y.jpg",alt:"image-20201111201518825"}})]),t._v(" "),s("h4",{attrs:{id:"_6-1-1-4-linux-硬盘说明"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6-1-1-4-linux-硬盘说明"}},[t._v("#")]),t._v(" 6.1.1.4 Linux 硬盘说明")]),t._v(" "),s("p",[t._v("Linux 硬盘分 IDE 硬盘和 SCSI 硬盘，目前基本上是 SCSI 硬盘。")]),t._v(" "),s("ul",[s("li",[t._v("对于 IDE 硬盘，驱动器标识符为“hdx~”,其中“hd”表明分区所在设备的类型，这里是指 IDE 硬 盘了。“x”为盘号(a 为基本盘，b 为基本从属盘，c 为辅助主盘，d 为辅助从属盘)，“~”代表分区， 前四个分区用数字 1 到 4 表示，它们是主分区或扩展分区，从 5 开始就是逻辑分区。例，hda3 表示为第一个 IDE 硬盘上的第三个主分区或扩展分区，hdb2 表示为第二个 IDE 硬盘上的第二个主分区或扩展 分区。")]),t._v(" "),s("li",[t._v("对于 SCSI 硬盘则标识为“sdx~”，SCSI 硬盘是用“sd”来表示分区所在设备的类型的，其余则 和 IDE 硬盘的表示方法一样。")])]),t._v(" "),s("h3",{attrs:{id:"_6-1-2-实操部分"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6-1-2-实操部分"}},[t._v("#")]),t._v(" 6.1.2 实操部分")]),t._v(" "),s("h4",{attrs:{id:"_6-1-2-1-查看当前系统的分区-lsblk-f"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6-1-2-1-查看当前系统的分区-lsblk-f"}},[t._v("#")]),t._v(" 6.1.2.1 查看当前系统的分区 —— lsblk -f")]),t._v(" "),s("blockquote",[s("p",[t._v("辅助记忆：lsblk = 老师不离开")])]),t._v(" "),s("p",[s("img",{attrs:{src:"https://hedonspace.oss-cn-beijing.aliyuncs.com/img2/0081Kckwgy1gkliljpxt5j30xu057q5t.jpg",alt:"image-20201111203937880"}})]),t._v(" "),s("p",[s("img",{attrs:{src:"https://hedonspace.oss-cn-beijing.aliyuncs.com/img2/0081Kckwgy1gkliik3kb5j30x706fgpu.jpg",alt:"image-20201111203644930"}})]),t._v(" "),s("h4",{attrs:{id:"_6-1-2-2-挂载案例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6-1-2-2-挂载案例"}},[t._v("#")]),t._v(" 6.1.2.2 挂载案例")]),t._v(" "),s("p",[t._v("需求是给我们的 Linux 系统增加一个新的硬盘，并且挂载到/home/newdisk")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://hedonspace.oss-cn-beijing.aliyuncs.com/img2/0081Kckwgy1gklikhxsnyj30hd09ngpg.jpg",alt:"image-20201111203837048"}})]),t._v(" "),s("p",[t._v("基本步骤：")]),t._v(" "),s("p",[t._v("1）虚拟机添加硬盘")]),t._v(" "),s("p",[t._v("2）分区：fdisk /dev/sdb")]),t._v(" "),s("p",[t._v("3）格式化：mkfs -t ext4 /dev/sdb1")]),t._v(" "),s("p",[t._v("4）挂载：先创建一个目录 /home/newdisk，挂载 mount /dev/sdb1 /home/newdisk")]),t._v(" "),s("p",[t._v("5）可以设置自动（永久）挂载，重启系统时，仍然可以挂载到 /home/newdisk")]),t._v(" "),s("h5",{attrs:{id:"windows-中的-vm-虚拟机具体步骤"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#windows-中的-vm-虚拟机具体步骤"}},[t._v("#")]),t._v(" [Windows 中的 VM 虚拟机具体步骤]")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("步骤1")]),t._v(" "),s("p",[t._v("在【虚拟机】菜单中，选择【设置】，然后设备列表里添加硬盘，然后一路【下一步】，中间只有选择磁盘大小的地方需要修改，至到完成。然后重启系统(才能识别)！")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://hedonspace.oss-cn-beijing.aliyuncs.com/img2/0081Kckwgy1gklj7oe3bdj30e40bxad6.jpg",alt:"image-20201111210053565"}})])]),t._v(" "),s("li",[s("p",[t._v("步骤2")]),t._v(" "),s("p",[t._v("分区命令：")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("fdisk")]),t._v(" /dev/sdb\n")])])]),s("p",[t._v("开始对 /sdb 分区")]),t._v(" "),s("ul",[s("li",[t._v("m：显示命令列表")]),t._v(" "),s("li",[t._v("p：显示磁盘分区，同 fdisk -l")]),t._v(" "),s("li",[t._v("n：新增分区")]),t._v(" "),s("li",[t._v("d：删除分区")]),t._v(" "),s("li",[t._v("w：写入并退出")])]),t._v(" "),s("p",[s("font",{attrs:{color:"orange"}},[t._v("说明：")]),t._v("开始分区后输入 n 新增分区，然后选择 p，分区类型为主分区。两次回车默认剩余全部空间，最后输入 w 写入分区并退出，若不保存退出输入 q。")],1),t._v(" "),s("p",[s("img",{attrs:{src:"https://hedonspace.oss-cn-beijing.aliyuncs.com/img2/0081Kckwgy1gkljoj3etlj30je054jrs.jpg",alt:"image-20201111210328831"}})])]),t._v(" "),s("li",[s("p",[t._v("步骤3")]),t._v(" "),s("p",[t._v("格式化磁盘。命令：")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkfs")]),t._v(" -t ext4 /dev/sdb1\n")])])]),s("p",[t._v("其中 ext4 是分区类型")])]),t._v(" "),s("li",[s("p",[t._v("步骤4")]),t._v(" "),s("p",[t._v("挂载：将一个分区与一个目录联系起来")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#挂载")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("mount")]),t._v(" 设备名称 挂载目录\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("mount")]),t._v(" /dev/sdb1 /newdisk\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#卸载")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("umount")]),t._v(" 设备名字或者过载目录\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("umount")]),t._v(" /dev/sdb1\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("umount")]),t._v(" /newdisk\n")])])])]),t._v(" "),s("li",[s("p",[t._v("步骤5")]),t._v(" "),s("p",[t._v("永久挂载：通过修改 /etc/fstab 实现挂载。")]),t._v(" "),s("p",[t._v("添加完成后，执行")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("mount")]),t._v(" -a\n")])])]),s("p",[t._v("即可生效。")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://hedonspace.oss-cn-beijing.aliyuncs.com/img2/0081Kckwgy1gkljdxvc3ej30la04s77f.jpg",alt:"image-20201111210654705"}})])])]),t._v(" "),s("h5",{attrs:{id:"macos-中的-vm-虚拟机具体步骤"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#macos-中的-vm-虚拟机具体步骤"}},[t._v("#")]),t._v(" [MacOS 中的 VM 虚拟机具体步骤]")]),t._v(" "),s("p",[t._v("官方文档：")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://hedonspace.oss-cn-beijing.aliyuncs.com/img2/0081Kckwgy1gklj0pc8fuj30av0yitit.jpg",alt:"image-20201111205411790"}})]),t._v(" "),s("p",[t._v("具体操作：")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("步骤1")]),t._v(" "),s("p",[t._v("虚拟机添加设备")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://hedonspace.oss-cn-beijing.aliyuncs.com/img2/0081Kckwgy1gkljg8b8ahj30hs0apacw.jpg",alt:"image-20201111210906672"}})]),t._v(" "),s("p",[s("img",{attrs:{src:"https://hedonspace.oss-cn-beijing.aliyuncs.com/img2/0081Kckwgy1gkljgujj16j30hs098q4i.jpg",alt:"image-20201111210942651"}})]),t._v(" "),s("p",[s("img",{attrs:{src:"https://hedonspace.oss-cn-beijing.aliyuncs.com/img2/0081Kckwgy1gkljifgo89j30hs04x0tc.jpg",alt:"image-20201111211113930"}})])]),t._v(" "),s("li",[s("p",[t._v("步骤2")]),t._v(" "),s("p",[t._v("重启 CentOS，查看磁盘分区情况。")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://hedonspace.oss-cn-beijing.aliyuncs.com/img2/0081Kckwgy1gkljn1cnl1j30lh04wglw.jpg",alt:"image-20201111211539314"}})]),t._v(" "),s("p",[t._v("没错....就是这么简单。")])])]),t._v(" "),s("h4",{attrs:{id:"_6-1-2-3-查询系统整体磁盘使用情况-df-h"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6-1-2-3-查询系统整体磁盘使用情况-df-h"}},[t._v("#")]),t._v(" 6.1.2.3 查询系统整体磁盘使用情况 —— "),s("code",[t._v("df -h")])]),t._v(" "),s("p",[s("img",{attrs:{src:"https://hedonspace.oss-cn-beijing.aliyuncs.com/img2/0081Kckwgy1gknjhwcegfj30o607ltd4.jpg",alt:"image-20201113144150504"}})]),t._v(" "),s("h4",{attrs:{id:"_6-1-2-4-查询指定目录的磁盘占用情况-du-h-目录"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6-1-2-4-查询指定目录的磁盘占用情况-du-h-目录"}},[t._v("#")]),t._v(" 6.1.2.4 查询指定目录的磁盘占用情况 —— "),s("code",[t._v("du -h /目录")])]),t._v(" "),s("p",[t._v("默认为当前目录，还有以下可选项：")]),t._v(" "),s("ul",[s("li",[t._v("-s：指定目录占用大小汇总")]),t._v(" "),s("li",[t._v("-h：带计量单位")]),t._v(" "),s("li",[t._v("-a：含文件")]),t._v(" "),s("li",[t._v("--max-depth=1：子目录深度")]),t._v(" "),s("li",[t._v("-c：列出明细的同时，增加汇总值")])]),t._v(" "),s("p",[s("img",{attrs:{src:"https://hedonspace.oss-cn-beijing.aliyuncs.com/img2/0081Kckwgy1gknjm9n0bwj30k2071juw.jpg",alt:"image-20201113144602619"}})]),t._v(" "),s("h4",{attrs:{id:"_6-1-2-5-统计-root-文件夹下文件的个数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6-1-2-5-统计-root-文件夹下文件的个数"}},[t._v("#")]),t._v(" 6.1.2.5 统计 /root 文件夹下文件的个数")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ls")]),t._v(" -l /root "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("grep")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"^-"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("wc")]),t._v(" -l\n")])])]),s("p",[s("img",{attrs:{src:"https://hedonspace.oss-cn-beijing.aliyuncs.com/img2/0081Kckwgy1gknjs9g3jxj30gn0180sy.jpg",alt:"image-20201113145148410"}})]),t._v(" "),s("p",[t._v("说明：- 起头的才是文件，^- 表示所有以 - 起头的。wc 是统计个数。")]),t._v(" "),s("h4",{attrs:{id:"_6-1-2-6-统计-root-文件夹下目录的个数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6-1-2-6-统计-root-文件夹下目录的个数"}},[t._v("#")]),t._v(" 6.1.2.6 统计 /root 文件夹下目录的个数")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ls")]),t._v(" -l /root "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("grep")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"^d"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("wc")]),t._v(" -l\n")])])]),s("p",[s("img",{attrs:{src:"https://hedonspace.oss-cn-beijing.aliyuncs.com/img2/0081Kckwgy1gknju20j6oj30fz012q34.jpg",alt:"image-20201113145331628"}})]),t._v(" "),s("h4",{attrs:{id:"_6-1-2-7-统计-root-文件夹下文件的个数-包括子文件夹里的"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6-1-2-7-统计-root-文件夹下文件的个数-包括子文件夹里的"}},[t._v("#")]),t._v(" 6.1.2.7 统计 /root 文件夹下文件的个数，包括子文件夹里的")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ls")]),t._v(" -lR /root "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("grep")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"^-"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("wc")]),t._v(" -l\n")])])]),s("p",[s("img",{attrs:{src:"https://hedonspace.oss-cn-beijing.aliyuncs.com/img2/0081Kckwgy1gknjv5wkxej30gh0150sz.jpg",alt:"image-20201113145435879"}})]),t._v(" "),s("h4",{attrs:{id:"_6-1-2-8-统计-root-文件夹下目录的个数-包括子文件夹里的"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6-1-2-8-统计-root-文件夹下目录的个数-包括子文件夹里的"}},[t._v("#")]),t._v(" 6.1.2.8 统计 /root 文件夹下目录的个数，包括子文件夹里的")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ls")]),t._v(" -lR /root "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("grep")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"^d"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("wc")]),t._v(" -l\n")])])]),s("p",[s("img",{attrs:{src:"https://hedonspace.oss-cn-beijing.aliyuncs.com/img2/0081Kckwgy1gknjwh6itkj30g8011wep.jpg",alt:"image-20201113145551749"}})]),t._v(" "),s("h4",{attrs:{id:"_6-1-2-9-以树状显示目录结构"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6-1-2-9-以树状显示目录结构"}},[t._v("#")]),t._v(" 6.1.2.9 以树状显示目录结构")]),t._v(" "),s("p",[t._v("先安装 "),s("code",[t._v("tree")]),t._v(" 指令：")]),t._v(" "),s("div",{staticClass:"language-yum extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("yum install tree\n")])])]),s("p",[t._v("然后进入某一个目录，输入：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("tree\n")])])]),s("p",[s("img",{attrs:{src:"https://hedonspace.oss-cn-beijing.aliyuncs.com/img2/0081Kckwgy1gknjyec8i7j30nu0i3gqf.jpg",alt:"image-20201113145742163"}})]),t._v(" "),s("Vssue")],1)}),[],!1,null,null,null);a.default=e.exports}}]);
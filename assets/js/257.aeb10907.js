(window.webpackJsonp=window.webpackJsonp||[]).push([[257],{665:function(t,a,s){"use strict";s.r(a);var e=s(47),r=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"_5-任务调度"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-任务调度"}},[t._v("#")]),t._v(" 5. 任务调度")]),t._v(" "),s("h2",{attrs:{id:"_5-1-理论部分"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-1-理论部分"}},[t._v("#")]),t._v(" 5.1 理论部分")]),t._v(" "),s("h2",{attrs:{id:"_5-2-实操部分"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-2-实操部分"}},[t._v("#")]),t._v(" 5.2 实操部分")]),t._v(" "),s("blockquote",[s("p",[t._v("该部分主要将如何定制定时任务。")])]),t._v(" "),s("h3",{attrs:{id:"_5-2-1-原理示意图"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-2-1-原理示意图"}},[t._v("#")]),t._v(" 5.2.1 原理示意图")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://hedonspace.oss-cn-beijing.aliyuncs.com/img2/0081Kckwgy1gkl9z18rdij30iv0hegrx.jpg",alt:"image-20201111154112016"}})]),t._v(" "),s("ul",[s("li",[t._v("任务调度：是指系统在某个时间执行的特定的命令或程序。")]),t._v(" "),s("li",[t._v("任务调度分类\n"),s("ul",[s("li",[t._v("系统工作：有些重要的工作必须周而复始地执行。如病毒扫描等；")]),t._v(" "),s("li",[t._v("个别用户工作：个别用户可能希望执行某些程序，比如对 mysql 数据库的备份。")])])])]),t._v(" "),s("h3",{attrs:{id:"_5-2-2-基本语法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-2-2-基本语法"}},[t._v("#")]),t._v(" 5.2.2 基本语法")]),t._v(" "),s("p",[t._v("操作任务调度")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("crontab")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("选项"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),s("ul",[s("li",[t._v("-e：编辑 crontab 定时任务")]),t._v(" "),s("li",[t._v("-l：查询 crontab 定时任务")]),t._v(" "),s("li",[t._v("-r：删除当前用户所有的 crontab 定时任务")])]),t._v(" "),s("p",[t._v("重启任务调度")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("service")]),t._v(" crond restart\n")])])]),s("h3",{attrs:{id:"_5-2-3-快速入门"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-2-3-快速入门"}},[t._v("#")]),t._v(" 5.2.3 快速入门")]),t._v(" "),s("p",[t._v("需求：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("每分钟执行一次 ls –l /etc/ > /tmp/to.txt 命令\n")])])]),s("p",[t._v("操作：")]),t._v(" "),s("p",[t._v("1）进入任务调度文件 /etc/crontab 所在目录 /etc：")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" /etc\n")])])]),s("p",[t._v("2）设置个人任务调度：")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("crontab")]),t._v(" -e\n")])])]),s("p",[s("img",{attrs:{src:"https://hedonspace.oss-cn-beijing.aliyuncs.com/img2/0081Kckwgy1gklacqqbybj30vd0odwjg.jpg",alt:"image-20201111155422056"}})]),t._v(" "),s("p",[t._v("3）输入任务到调度文件，保存退出")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://hedonspace.oss-cn-beijing.aliyuncs.com/img2/0081Kckwgy1gkladofxxhj30r5024wex.jpg",alt:"image-20201111155516405"}})]),t._v(" "),s("p",[t._v("这样每一分钟系统都会自动的调用 ls -l /etc >> /tmp/to.txt")]),t._v(" "),s("p",[t._v("4）等几分钟后查看 /tmp/to.txt 文件")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://hedonspace.oss-cn-beijing.aliyuncs.com/img2/0081Kckwgy1gklafctnstj30t605v0w9.jpg",alt:"image-20201111155653492"}})]),t._v(" "),s("h3",{attrs:{id:"_5-2-4-五个占位符说明"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-2-4-五个占位符说明"}},[t._v("#")]),t._v(" 5.2.4 五个占位符说明")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://hedonspace.oss-cn-beijing.aliyuncs.com/img2/0081Kckwgy1gklafyjvpmj30ev04l762.jpg",alt:"image-20201111155727563"}})]),t._v(" "),s("h3",{attrs:{id:"_5-2-5-特殊符号说明"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-2-5-特殊符号说明"}},[t._v("#")]),t._v(" 5.2.5 特殊符号说明")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://hedonspace.oss-cn-beijing.aliyuncs.com/img2/0081Kckwgy1gklahzfajtj30g706jn0g.jpg",alt:"image-20201111155924754"}})]),t._v(" "),s("h3",{attrs:{id:"_5-2-6-特定时间执行任务案例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-2-6-特定时间执行任务案例"}},[t._v("#")]),t._v(" 5.2.6 特定时间执行任务案例")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://hedonspace.oss-cn-beijing.aliyuncs.com/img2/0081Kckwgy1gklailqwgqj30gk06w77x.jpg",alt:"image-20201111155959930"}})]),t._v(" "),s("h3",{attrs:{id:"_5-2-7-几个例子"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-2-7-几个例子"}},[t._v("#")]),t._v(" 5.2.7 几个例子")]),t._v(" "),s("h5",{attrs:{id:"案例一-每隔-1-分钟-就将当前的日期信息-追加到-tmp-mydate-文件中"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#案例一-每隔-1-分钟-就将当前的日期信息-追加到-tmp-mydate-文件中"}},[t._v("#")]),t._v(" [案例一] 每隔 1 分钟，就将当前的日期信息，追加到 /tmp/mydate 文件中")]),t._v(" "),s("p",[t._v("1）先写一个 shell 脚本文件 /home/mytaks1.sh")]),t._v(" "),s("p",[t._v("​\tdate >> /tmp/mydate")]),t._v(" "),s("p",[t._v("2）给 mytask1.sh 一个可执行权限")]),t._v(" "),s("p",[t._v("​\tchmod 744 /home/mytask1.sh")]),t._v(" "),s("p",[t._v("3）编辑任务调度 crontab -e")]),t._v(" "),s("p",[t._v("4）输入 */1 * * * * /home/mytask1.sh")]),t._v(" "),s("p",[t._v("5）完成")]),t._v(" "),s("h5",{attrs:{id:"案例二-每天凌晨-2-00-将-mysql-数据库-testdb-备份到文件中-mydb-bak"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#案例二-每天凌晨-2-00-将-mysql-数据库-testdb-备份到文件中-mydb-bak"}},[t._v("#")]),t._v(" [案例二] 每天凌晨 2:00 将 mysql 数据库 testdb ，备份到文件中 mydb.bak")]),t._v(" "),s("p",[t._v("1）写一个 shell 脚本文件 /home/mytask2.sh")]),t._v(" "),s("p",[t._v("​\t/usr/local/mysql/bin/mysqldump -u root -proot testdb > /tmp/mydb.bak")]),t._v(" "),s("p",[t._v("2）给 mytask2.sh 一个可执行权限")]),t._v(" "),s("p",[t._v("​\tchmod 744 /home/mytask2.sh")]),t._v(" "),s("p",[t._v("3）编辑任务调度 crontab -e")]),t._v(" "),s("p",[t._v("4）输入 0 2 * * *  /home/mytask2.sh")]),t._v(" "),s("p",[t._v("5）完成")]),t._v(" "),s("Vssue")],1)}),[],!1,null,null,null);a.default=r.exports}}]);
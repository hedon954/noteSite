(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{485:function(a,t,s){"use strict";s.r(t);var e=s(47),r=Object(e.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"docker-容器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#docker-容器"}},[a._v("#")]),a._v(" Docker 容器")]),a._v(" "),s("h2",{attrs:{id:"_1-查看容器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-查看容器"}},[a._v("#")]),a._v(" 1. 查看容器")]),a._v(" "),s("p",[a._v("显示本地容器列表，但是默认不显示关闭的容器，只显示运行中的容器，除非加上命令选项 -a")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("docker ps  [-a 显示所有容器，默认只显示运行的]\n")])])]),s("h2",{attrs:{id:"_2-查看容器详细信息"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-查看容器详细信息"}},[a._v("#")]),a._v(" 2. 查看容器详细信息")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("docker inspect 容器名称或 ID\n")])])]),s("h2",{attrs:{id:"_3-创建容器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-创建容器"}},[a._v("#")]),a._v(" 3. 创建容器")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("docker run [options] 镜像名称\n")])])]),s("div",{staticClass:"language-markdown extra-class"},[s("pre",{pre:!0,attrs:{class:"language-markdown"}},[s("code",[s("span",{pre:!0,attrs:{class:"token title important"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("#")]),a._v(" options: ")]),a._v("\n\t-i 交互式创建\n\t-t 创建一个伪终端\n\t-d 后台执行\n\t--name 容器名称\n\t/bin/bash 在伪终端中执行的命令\n")])])]),s("p",[a._v("后台执行：")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("[root@VM-12-10-centos ~]# docker run -d centosb63d32b8d072e763e90b12357a79e20c4fa7fa7222b96165b9a6aa1a536d4803\n")])])]),s("p",[a._v("前台执行：")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("[root@VM-12-10-centos ~]# docker run -it --name centos_docker centos /bin/bash\n[root@e3a7ba226071 /]# \n")])])]),s("h2",{attrs:{id:"_4-删除容器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-删除容器"}},[a._v("#")]),a._v(" 4. 删除容器")]),a._v(" "),s("p",[a._v("默认删除的容器必须是关闭状态，建议如果希望删除一个运行的容器，可以先关闭在删除。当然也可以直接加上"),s("code",[a._v("-f")]),a._v(" 强制删除一个运行中的容器。")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("docker rm [-f 强制删除] 容器名称或 ID\n")])])]),s("p",[a._v("示例：")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("[root@VM-12-10-centos ~]# docker rm -f centos_docker\ncentos_docker\n")])])]),s("h2",{attrs:{id:"_5-容器执行命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-容器执行命令"}},[a._v("#")]),a._v(" 5. 容器执行命令")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("docker exec [容器名称或者ID] 命令\n")])])]),s("p",[a._v("示例：")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("[root@VM-12-10-centos ~]# docker exec centos_exec ls /bindevetchomeliblib64lost+foundmediamntoptprocrootrunsbinsrvsystmpusrvar\n")])])]),s("h2",{attrs:{id:"_6-进入容器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6-进入容器"}},[a._v("#")]),a._v(" 6. 进入容器")]),a._v(" "),s("p",[a._v("将一个运行容器的标准输出、错误输出、标准输入调入前台。默认容器都会在后台运行，如果你想进入容器内，就可以使用 attach 命令。这样你就可以交互式的在容器中执行命令了。")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("docker attach [容器名称或者ID]\n")])])]),s("p",[a._v("示例：")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("[root@VM-12-10-centos ~]# docker attach centos_attach\n[root@7cb5138c81fa /]# \n")])])]),s("h2",{attrs:{id:"_7-启动容器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_7-启动容器"}},[a._v("#")]),a._v(" 7. 启动容器")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("docker start [容器名称或者ID]\n")])])]),s("h2",{attrs:{id:"_8-停止容器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_8-停止容器"}},[a._v("#")]),a._v(" 8. 停止容器")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("docker stop [容器名称或者ID]\n")])])]),s("h2",{attrs:{id:"_9-重启容器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_9-重启容器"}},[a._v("#")]),a._v(" 9. 重启容器")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("docker restart [容器名称或者ID]\n")])])]),s("h2",{attrs:{id:"_10-挂起容器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_10-挂起容器"}},[a._v("#")]),a._v(" 10. 挂起容器")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("docker pause [容器名称或者ID]\n")])])]),s("h2",{attrs:{id:"_11-恢复容器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_11-恢复容器"}},[a._v("#")]),a._v(" 11. 恢复容器")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("docker unpause [容器名称或者ID]\n")])])]),s("h2",{attrs:{id:"_12-重命名容器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_12-重命名容器"}},[a._v("#")]),a._v(" 12. 重命名容器")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("docker rename 容器名称 容器新名称\n")])])]),s("h2",{attrs:{id:"_13-查看容器端口映射信息"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_13-查看容器端口映射信息"}},[a._v("#")]),a._v(" 13. 查看容器端口映射信息")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("docker port [容器名称或者ID]\n")])])]),s("h2",{attrs:{id:"_14-杀死容器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_14-杀死容器"}},[a._v("#")]),a._v(" 14. 杀死容器")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("docker kill [镜像名称或者ID]\n")])])]),s("h2",{attrs:{id:"_15-导出容器为压缩文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_15-导出容器为压缩文件"}},[a._v("#")]),a._v(" 15. 导出容器为压缩文件")]),a._v(" "),s("p",[a._v("将一个容器导出为一个镜像压缩文件。")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("docker export -o 导出后镜像文件名 容器名称或者ID\n")])])]),s("h2",{attrs:{id:"_16-将容器镜像导入镜像库"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_16-将容器镜像导入镜像库"}},[a._v("#")]),a._v(" 16. 将容器镜像导入镜像库")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("docker import 镜像文件名 镜像名:tag\n")])])]),s("h2",{attrs:{id:"_17-将容器生成镜像"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_17-将容器生成镜像"}},[a._v("#")]),a._v(" 17. 将容器生成镜像")]),a._v(" "),s("p",[a._v("将改变后的容器直接变成镜像，一般指的是封装好业务的容器，直接封装成镜像。")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("docker commit 容器名称或者ID 导出后镜像的名字:tag\n")])])])])}),[],!1,null,null,null);t.default=r.exports}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[166],{578:function(t,a,s){"use strict";s.r(a);var e=s(47),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"dockerfile"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#dockerfile"}},[t._v("#")]),t._v(" Dockerfile")]),t._v(" "),s("h2",{attrs:{id:"一、镜像"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一、镜像"}},[t._v("#")]),t._v(" 一、镜像")]),t._v(" "),s("p",[t._v("镜像可以看成是由多个镜像层叠加起来的一个文件系统（通过 "),s("strong",[t._v("UnionFS")]),t._v(" 与 "),s("strong",[t._v("AUFS")]),t._v(" 文件联合系统实现），镜像层也可以简单理解为一个基本的镜像，而每个镜像层之间通过指针的形式进行叠加。")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://tva1.sinaimg.cn/large/008i3skNly1grtgduzkbcj31720gotab.jpg",alt:"image-20210621184500330"}})]),t._v(" "),s("p",[t._v("根据上图，镜像层的主要组成部分包括：")]),t._v(" "),s("ul",[s("li",[t._v("镜像层 ID")]),t._v(" "),s("li",[t._v("镜像层指针 「指向父层」")]),t._v(" "),s("li",[t._v("元数据「 Layer Metadata，包含了 Docker 构建和运行的信息和父层的层次信息」。")])]),t._v(" "),s("p",[t._v("只读层和读写层「Top Layer」的组成部分基本一致，同时读写层可以转换成只读层「 通过docker commit 操作实现」。")]),t._v(" "),s("p",[t._v("**元数据（metadata）**就是关于这个层的额外信息，它不仅能够让 Docker 获取运行和构建时的信息，还包括父层的层次信息。需要注意，只读层和读写层都包含元数据。")]),t._v(" "),s("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://tva1.sinaimg.cn/large/008i3skNly1grtgdu0hiij30o00acdg8.jpg",alt:"image-20210621184550221"}}),t._v(" "),s("p",[t._v("每一层都包括了一个指向父层的指针。如果一个层没有这个指针，说明它处于最底层。")]),t._v(" "),s("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://tva1.sinaimg.cn/large/008i3skNly1grtgdvhcn3j30my0fc3zg.jpg",alt:"image-20210621184607447"}}),t._v(" "),s("p",[t._v("在 Docker 主机中镜像层（image layer）的元数据被保存在名为 "),s("strong",[t._v("“json”")]),t._v(" 的文件中，一个容器的元数据好像是被分成了很多文件，但或多或少能够在 "),s("strong",[t._v("/var/lib/docker/containers/")]),t._v(" 目录下找到，就是一个可读层的 id。这个目录下的文件大多是运行时的数据，比如说网络，日志等等。")]),t._v(" "),s("p",[t._v("镜像是一堆只读层的统一视角，除了最底层没有指向外，每一层都指向它的父层。统一文件系统**（Union File System）**技术能够将不同的层整合成一个文件系统，为这些层提供了一个统一的视角，这样就隐藏了多层的存在。在用户的角度看来，只存在一个文件系统。镜像每一层都是不可写的，都是只读层。")]),t._v(" "),s("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://tva1.sinaimg.cn/large/008i3skNly1grtgdtj3efj31160amdgm.jpg",alt:"image-20210621184704773"}}),t._v(" "),s("p",[t._v("我们可以看到镜像包含多个只读层，它们重叠在一起。除了最下面一层，其它层都会有一个指针指向下一层。这些层是 Docker 内部的实现细节，并且能够在 Docker 主机的文件系统上访问到。"),s("strong",[t._v("统一文件系统（Union File System，升级版为 AUFS）技术")]),t._v("能够将不同的层整合成一个文件系统，为这些层提供了一个统一的视角，这样就隐藏了多层的存在，在用户的角度看来，只存在一个文件系统。")]),t._v(" "),s("h2",{attrs:{id:"二、dockerfile-介绍"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#二、dockerfile-介绍"}},[t._v("#")]),t._v(" 二、Dockerfile 介绍")]),t._v(" "),s("p",[t._v("Dockerfile 是由一系列命令和参数构成的脚本，这些命令应用于基础镜像并最终创建一个新的镜像。它们简化了从头到尾的流程并极大的简化了部署工作。Dockerfile 从 FROM 命令开始，紧接着跟随着各种方法，命令和参数。其产出为一个新的可以用于创建容器的镜像。")]),t._v(" "),s("p",[t._v("Dockerfile 语法由两部分构成")]),t._v(" "),s("ul",[s("li",[t._v("注释")]),t._v(" "),s("li",[t._v("命令+参数")])]),t._v(" "),s("h2",{attrs:{id:"三、dockerfile-命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#三、dockerfile-命令"}},[t._v("#")]),t._v(" 三、Dockerfile 命令")]),t._v(" "),s("h3",{attrs:{id:"from"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#from"}},[t._v("#")]),t._v(" FROM")]),t._v(" "),s("blockquote",[s("p",[t._v("指定基础镜像，并且必须是第一条指令。")])]),t._v(" "),s("p",[t._v("如果不以任何镜像为基础，写法为："),s("code",[t._v("FROM scratch")]),t._v(" 。同时意味着接下来所写的指令将作为镜像的第一层开始。")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("语法：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("FROM 基础镜像:tag    #其中 :tag 是可选的，如果不写，那么默认值是 latest\n")])])])])]),t._v(" "),s("h3",{attrs:{id:"maintainer"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#maintainer"}},[t._v("#")]),t._v(" MAINTAINER")]),t._v(" "),s("blockquote",[s("p",[t._v("指定作者。")])]),t._v(" "),s("ul",[s("li",[s("p",[t._v("语法：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("MAINTAINER  作者名\n")])])])])]),t._v(" "),s("h3",{attrs:{id:"label"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#label"}},[t._v("#")]),t._v(" LABEL")]),t._v(" "),s("blockquote",[s("p",[t._v("为镜像设置标签。")])]),t._v(" "),s("ul",[s("li",[s("p",[t._v("语法：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("LABEL key1=value1 key2=value2 ...\n")])])])])]),t._v(" "),s("p",[t._v("一个 Dockerfile 可以有多个  LABLE，如下：")]),t._v(" "),s("div",{staticClass:"language-markdown extra-class"},[s("pre",{pre:!0,attrs:{class:"language-markdown"}},[s("code",[t._v('LABEL "com.example.vendor"="ACME Incorporated"LABEL com.example.label-with-value="foo"LABEL version="1.0"LABEL description="This text illustrates \\that label-values can span multiple lines."# 但是并不建议这样写，最好就写成一行，如太长需要换行的话则使用 \\符号# 如下：LABEL multi.label1="value1" \\multi.label2="value2" \\other="value3"# 注意：LABEL会继承基础镜像种的 LABEL，如遇到 key 相同，则值覆盖\n')])])]),s("h3",{attrs:{id:"run"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#run"}},[t._v("#")]),t._v(" RUN")]),t._v(" "),s("blockquote",[s("p",[t._v("运行指定的命令。")])]),t._v(" "),s("ul",[s("li",[s("p",[t._v("语法一：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("RUN shell命令\n")])])])]),t._v(" "),s("li",[s("p",[t._v("语法二：")]),t._v(" "),s("div",{staticClass:"language-markdown extra-class"},[s("pre",{pre:!0,attrs:{class:"language-markdown"}},[s("code",[t._v("RUN [“executable”, “param1”, “param2”]\n"),s("span",{pre:!0,attrs:{class:"token title important"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("#")]),t._v(" 可将executable理解成为可执行文件，后面就是两个参数。")]),t._v("\n")])])])])]),t._v(" "),s("p",[t._v("示例：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('RUN /bin/bash -c \'source $HOME/.bashrc; echo $HOMERUN ["/bin/bash", “-c”, “echo hello”]\n')])])]),s("p",[t._v("注意：")]),t._v(" "),s("ul",[s("li",[t._v("多行命令不要写多个 RUN，原因是 Dockerfile 中每一个指令都会建立一层。RUN 书写时的换行符是 \\ ，多少个 RUN 就构建了多少层镜像，会造成镜像的臃肿、多层，不仅仅增加了构件部署的时间，还容易出错。")])]),t._v(" "),s("h3",{attrs:{id:"add"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#add"}},[t._v("#")]),t._v(" ADD")]),t._v(" "),s("blockquote",[s("p",[t._v("一个复制命令，把文件复制到镜像中")])]),t._v(" "),s("p",[t._v("如果把虚拟机与容器想象成两台 Linux 服务器的话，那么这个命令就类似于 scp，只是 scp 需要加用户名和密码的权限验证，而 ADD 不用。")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("语法：")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("ADD "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("src"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("desc"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# <src>可以是一个本地文件或者是一个本地压缩文件，还可以是一个url")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# <dest>路径的填写可以是容器内的绝对路径，也可以是相对于工作目录的相对路径")]),t._v("\n")])])])])]),t._v(" "),s("p",[t._v("示例：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("ADD test1.txt test1.txtADD test1.txt test1.txt.bakADD test1.txt /mydir/ADD data1 data1ADD zip.tar /myzip\n")])])]),s("p",[s("font",{attrs:{color:"pink"}},[t._v("注意：")])],1),t._v(" "),s("ol",[s("li",[t._v("如果源路径是个文件，且目标路径是以 / 结尾， 则 Docker 会把目标路径当作一个目录，会把源文件拷贝到该目录下。如果目标路径不存在，则会自动创建目标路径。")]),t._v(" "),s("li",[t._v("如果源路径是个文件，且目标路径不是以 / 结尾，则 Docker 会把目标路径当作一个文件。")]),t._v(" "),s("li",[t._v("如果目标路径不存在，会以目标路径为名创建一个文件，内容同源文件；")]),t._v(" "),s("li",[t._v("如果目标文件是个存在的文件，会用源文件覆盖它，当然只是内容覆盖，文件名还是目标文件名。")]),t._v(" "),s("li",[t._v("如果目标文件实际是个存在的目录，则会源文件拷贝到该目录下。 注意，这种情况下，最好显示的以 / 结尾，以避免混淆。")]),t._v(" "),s("li",[t._v("如果源路径是个目录，且目标路径不存在，则 Docker 会自动以目标路径创建一个目录，把源路径目录下的文件拷贝进来。如果目标路径是个已经存在的目录，则 Docker 会把源路径目录下的文件拷贝到该目录下。")]),t._v(" "),s("li",[t._v("如果源文件是个归档文件（压缩文件），则 Docker 会自动帮解压。尽量不要把 <scr> 写成一个文件夹，如果 <src> 是一个文件夹了，复制整个目录的内容，包括文件系统元数据。")])]),t._v(" "),s("h3",{attrs:{id:"copy"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#copy"}},[t._v("#")]),t._v(" COPY")]),t._v(" "),s("blockquote",[s("p",[t._v("复制命令。只能用在本地文件上。")])]),t._v(" "),s("h3",{attrs:{id:"volume"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#volume"}},[t._v("#")]),t._v(" VOLUME")]),t._v(" "),s("blockquote",[s("p",[t._v("可实现挂载功能，可以将本地文件夹或者其他容器中的文件夹挂在到这个容器中。")])]),t._v(" "),s("ul",[s("li",[s("p",[t._v("语法：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('VOLUME ["/data"]\n')])])])]),t._v(" "),s("li",[s("p",[t._v('说明：["/data"]可以是一个JsonArray ，也可以是多个值。所以如下几种写法都是正确的')]),t._v(" "),s("ul",[s("li",[t._v('VOLUME ["/var/log/"]')]),t._v(" "),s("li",[t._v("VOLUME /var/log")]),t._v(" "),s("li",[t._v("VOLUME /var/log /var/db")])])])]),t._v(" "),s("p",[t._v("一般的使用场景为"),s("strong",[t._v("需要持久化存储数据")]),t._v("时, 容器使用的是 AUFS，这种文件系统不能持久化数据，当容器关闭后，所有的更改都会丢失，所以当数据需要持久化时用这个命令。")]),t._v(" "),s("h3",{attrs:{id:"expose"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#expose"}},[t._v("#")]),t._v(" EXPOSE")]),t._v(" "),s("blockquote",[s("p",[t._v("功能为暴漏容器运行时的监听端口给外部。")])]),t._v(" "),s("p",[t._v("但是 EXPOSE 并不会使容器访问主机的端口。如果想使得容器与主机的端口有映射关系，必须在容器启动的时候加上 "),s("code",[t._v("-P")]),t._v(" 参数。")]),t._v(" "),s("h3",{attrs:{id:"workdir"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#workdir"}},[t._v("#")]),t._v(" WORKDIR")]),t._v(" "),s("blockquote",[s("p",[t._v("设置容器的工作目录。")])]),t._v(" "),s("ul",[s("li",[s("p",[t._v("语法：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("WORKDIR 工作目录\n")])])])])]),t._v(" "),s("h3",{attrs:{id:"env"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#env"}},[t._v("#")]),t._v(" ENV")]),t._v(" "),s("blockquote",[s("p",[t._v("设置环境变量。")])]),t._v(" "),s("ul",[s("li",[s("p",[t._v("语法：")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("ENV              "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 1 次设置 1 个")]),t._v("\nENV "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 1 次设置多个")]),t._v("\n")])])])])]),t._v(" "),s("h3",{attrs:{id:"cmd"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cmd"}},[t._v("#")]),t._v(" CMD")]),t._v(" "),s("blockquote",[s("p",[t._v("设置容器启动时要运行的命令。")])]),t._v(" "),s("ul",[s("li",[s("p",[t._v("语法：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("CMD [“executable”,“param1”,“param2”]\n\nCMD [“param1”,“param2”]\n\nCMD command param1 param2\n")])])])]),t._v(" "),s("li",[s("p",[t._v("示例：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("CMD [ “sh”, “-c”, “echo $HOME”\n\nCMD [ “echo”, “$HOME” ]\n")])])])])]),t._v(" "),s("p",[s("font",{attrs:{color:"pink"}},[t._v("注意：")])],1),t._v(" "),s("ol",[s("li",[s("p",[t._v('这里边包括参数的一定要用双引号，就是 " 不能是单引号，原因是参数传递后，Docker 解析的是一个JSON Array。')])]),t._v(" "),s("li",[s("p",[t._v("不要把 RUN 和 CMD 搞混了。")]),t._v(" "),s("p",[t._v("RUN：是构件容器时就运行的命令以及提交运行结果。")]),t._v(" "),s("p",[t._v("CMD：是容器启动时执行的命令，在构件时并不运行。")])])]),t._v(" "),s("h3",{attrs:{id:"entrypoint"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#entrypoint"}},[t._v("#")]),t._v(" ENTRYPOINT")]),t._v(" "),s("blockquote",[s("p",[t._v("设置启动时的默认命令。")])]),t._v(" "),s("ul",[s("li",[s("p",[t._v("语法：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("ENTRYPOINT [“executable”, “param1”, “param2”]\n\nENTRYPOINT command param1 param2\n")])])])])]),t._v(" "),s("p",[s("font",{attrs:{color:"pink"}},[t._v("注意：")])],1),t._v(" "),s("div",{staticClass:"language-markdown extra-class"},[s("pre",{pre:!0,attrs:{class:"language-markdown"}},[s("code",[s("span",{pre:!0,attrs:{class:"token title important"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("#")]),t._v(" 与 CMD 比较说明：")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token list punctuation"}},[t._v("1.")]),t._v(" 相同点：\n只能写一条，如果写了多条，那么只有最后一条生效，容器启动时才运行，运行时机相同。\n\n"),s("span",{pre:!0,attrs:{class:"token list punctuation"}},[t._v("2.")]),t._v(" 不同点：\nENTRYPOINT 不会被运行的 command 覆盖，而 CMD 则会被覆盖\n\n\n"),s("span",{pre:!0,attrs:{class:"token title important"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("#")]),t._v(" 举例 1")]),t._v('\n如果我们在 Dockerfile 时同时写了 ENTRYPOINT 和 CMD ，并且 CMD 指令不是一个完整的可执行命令，那么 CMD 指定的内容将会作为 ENTRYPOINT 的参数, 如下：\n\nFROM centos\nENTRYPOINT ["top", "-b"]\nCMD ["-c"]\n\n\n'),s("span",{pre:!0,attrs:{class:"token title important"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("#")]),t._v(" 举例 2")]),t._v('\n如果我们在 Dockerfile 种同时写了 ENTRYPOINT 和 CMD ，并且 CMD 是一个完整的指令，那么它们两个会互相覆盖，谁在最后谁生效, 如下：\n\nFROM centos\nENTRYPOINT ["top", "-b"]\nCMD ls -al\n\n那么将执行 ls -al , top -b 不会执行\n')])])]),s("h2",{attrs:{id:"四、dockerfile-案例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#四、dockerfile-案例"}},[t._v("#")]),t._v(" 四、Dockerfile 案例")]),t._v(" "),s("p",[t._v("基本步骤：")]),t._v(" "),s("ol",[s("li",[t._v("创建目录，用于存放 dockerfile 所使用的文件")]),t._v(" "),s("li",[t._v("在此目录中创建 dockerfile 文件")]),t._v(" "),s("li",[t._v("在此目录中使用 docker build 创建镜像")]),t._v(" "),s("li",[t._v("使用创建的镜像启动容器")])]),t._v(" "),s("h3",{attrs:{id:"_1-在-docker-中部署-go-web-项目"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-在-docker-中部署-go-web-项目"}},[t._v("#")]),t._v(" 1. 在 Docker 中部署 Go Web 项目")]),t._v(" "),s("p",[s("strong",[t._v("1. 先写一个简单的 go web 项目")])]),t._v(" "),s("p",[t._v("进入到目录：/usr/local/gopath/src/docker_go")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" -p /usr/local/gopath/src/docker_go\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" /usr/local/gopath/src/docker_go\n")])])]),s("p",[t._v("写一个 main.go")]),t._v(" "),s("div",{staticClass:"language-go extra-class"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("package")]),t._v(" main\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"fmt"')]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"net/http"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    http"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("HandleFunc")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" hello"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    server "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("http"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Server"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      Addr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('":8888"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    fmt"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Println")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"server startup ...."')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" err "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" server"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ListenAndServe")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" err "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("nil")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("panic")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("err"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" hello "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("w http"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ResponseWriter"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("_")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("http"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Request"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tw"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Write")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("byte")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"hello hedon."')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[s("strong",[t._v("2. 本地测试 go web 项目是否没问题")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("go build .\n/docker_go\n")])])]),s("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://tva1.sinaimg.cn/large/008i3skNly1grtgdt8biej30lc05w74j.jpg",alt:"image-20210622104642709"}}),t._v(" "),s("p",[s("strong",[t._v("3. 编写  Dockerfile")])]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("vim")]),t._v(" Dockerfile\n")])])]),s("p",[t._v("写入：")]),t._v(" "),s("div",{staticClass:"language-dockerfile extra-class"},[s("pre",{pre:!0,attrs:{class:"language-dockerfile"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" golang\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#设置环境变量")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ENV")]),t._v(" GO111MODULE=on \\\n    CGO_ENABLED=0 \\\n    GOOS=linux \\\n    GOARCH=amd64\n\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#设置容器工作目录")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WORKDIR")]),t._v(" /build\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#将代码从本机复制到容器中")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ADD")]),t._v(" . .\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#先删除到之前的 go.mod 文件，不然会报错")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("RUN")]),t._v(" rm "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("rf ./*.mod\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#执行 go mod init")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("RUN")]),t._v(" go mod init docker_go\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#执行 go mod tidy 更新依赖")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("RUN")]),t._v(" go build "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("o app .\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#容器中：移动到用于存放生成的二进制文件的 /dist 目录")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WORKDIR")]),t._v(" /dist\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#容器中：将二进制文件 app 从 /build 目录复制到 /dist 目录下")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("RUN")]),t._v(" cp /build/app .\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#声明服务端口")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("EXPOSE")]),t._v(" 8888\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#启动容器时运行 go web 项目")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CMD")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/dist/app"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),s("p",[s("strong",[t._v("4. 构建镜像")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("docker build -t goweb_app .\n")])])]),s("p",[t._v("出现下面信息就表示构建成功了：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("....\n....\nSuccessfully built 62879d6fbd56\n")])])]),s("p",[s("strong",[t._v("5. 查看镜像")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("[root@VM-12-10-centos docker_go]docker imagesREPOSITORY           TAG                 IMAGE ID            CREATED             SIZEgoweb_app            latest              62879d6fbd56        2 minutes ago       894 MB\n")])])]),s("p",[s("strong",[t._v("6. 运行镜像")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("docker run -p 8888:8888 goweb_app\n")])])]),s("p",[s("strong",[t._v("7. 访问项目")])]),t._v(" "),s("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://tva1.sinaimg.cn/large/008i3skNly1grtgdt8biej30lc05w74j.jpg",alt:"image-20210622104642709"}})])}),[],!1,null,null,null);a.default=n.exports}}]);
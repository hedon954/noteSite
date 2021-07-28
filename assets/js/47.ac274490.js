(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{456:function(a,e,s){"use strict";s.r(e);var t=s(47),l=Object(t.a)({},(function(){var a=this,e=a.$createElement,s=a._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"docker-安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#docker-安装"}},[a._v("#")]),a._v(" Docker 安装")]),a._v(" "),s("h2",{attrs:{id:"一、mac"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一、mac"}},[a._v("#")]),a._v(" 一、Mac")]),a._v(" "),s("p",[a._v("直接官网：https://www.docker.com/get-started")]),a._v(" "),s("h2",{attrs:{id:"二、linux"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#二、linux"}},[a._v("#")]),a._v(" 二、Linux")]),a._v(" "),s("p",[s("strong",[a._v("1. 移除旧版本")])]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("yum remove docker docker-client docker-client-latest docker-common docker-latest docker-latest-logrotate docker-logrotate docker-selinux docker-engine-selinux docker-engine\n")])])]),s("p",[s("strong",[a._v("2. 安装 Docker 依赖工具")])]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("yum "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" -y device-mapper-persistent-data lvm2\n")])])]),s("p",[s("strong",[a._v("3. 下载 Docker")])]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("yum -y "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" docker\n")])])]),s("p",[s("strong",[a._v("4. 启动 Docker 后台服务")])]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("systemctl start docker\n")])])]),s("p",[s("strong",[a._v("5. 运行测试 hello-world")])]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("docker run hello-world\n")])])]),s("p",[a._v("由于本地没有 hello-world 这个镜像，所以会下载一个hello-world 的镜像，并在容器内运行。若能正常输出信息，则说明安装成功。")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("Unable to find image 'hello-world:latest' locally\nlatest: Pulling from library/hello-world\n256ab8fe8778: Pull complete\nDigest: sha256:7f0a9f93b4aa3022c3a4c147a449bf11e0941a1fd0bf4a8e6c9408b2600777c5\nStatus: Downloaded newer image for hello-world:latest\n\nHello from Docker!\nThis message shows that your installation appears to be working correctly.\n\n.....\n.....\n.....\n")])])]),s("p",[s("strong",[a._v("6. 查看下载的 hello-world 镜像")])]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("docker images\n")])])]),s("p",[a._v("输出：")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("REPOSITORY          TAG                 IMAGE ID            CREATED              SIZE\nhello-world         latest              a29f45ccde2a        5 seconds ago        9.14kB\n")])])])])}),[],!1,null,null,null);e.default=l.exports}}]);
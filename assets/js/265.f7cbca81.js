(window.webpackJsonp=window.webpackJsonp||[]).push([[265],{677:function(t,s,e){"use strict";e.r(s);var a=e(47),r=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"docker-镜像私有仓库"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#docker-镜像私有仓库"}},[t._v("#")]),t._v(" Docker 镜像私有仓库")]),t._v(" "),e("p",[t._v("在 Docker 中，当我们执行 "),e("code",[t._v("docker pull xxx")]),t._v(" 的时候 ，它实际上是从 "),e("code",[t._v("hub.docker.com")]),t._v(" 这个地址去查找，这就是 Docker 公司为我们提供的公共仓库。在工作中，我们不可能把企业项目 push 到公有仓库进行管理。所以为了更好的管理镜像，Docker 不仅提供了一个中央仓库，同时也允许我们搭建本地私有仓库。")]),t._v(" "),e("p",[t._v("Docker 容器镜像仓库分类：")]),t._v(" "),e("ul",[e("li",[t._v("公网仓库：docker hub")]),t._v(" "),e("li",[t._v("私网仓库：registry、harbor")])]),t._v(" "),e("h2",{attrs:{id:"一、registry"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#一、registry"}},[t._v("#")]),t._v(" 一、registry")]),t._v(" "),e("h3",{attrs:{id:"_1-仓库搭建"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-仓库搭建"}},[t._v("#")]),t._v(" 1. 仓库搭建")]),t._v(" "),e("ol",[e("li",[t._v("拉取 registry 容器镜像")]),t._v(" "),e("li",[t._v("创建 registry 仓库容器")]),t._v(" "),e("li",[t._v("测试")])]),t._v(" "),e("p",[e("strong",[t._v("1.1 拉取 registry 容器镜像")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("docker pull registry\n")])])]),e("p",[e("strong",[t._v("1.2 创建 registry 仓库容器")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('1. 创建持久化存储，将容器镜像存储目录 /var/lib/registry 挂载到本地 /opt/myregistry 下：\n\nmkdir /opt/myregistry\n\n2. 创建 registry 容器\n\ndocker run -d -p 5000:5000 -v /var/lib/registry:/opt/myregistry --restart=always registry:latest\n\n3. 查看容器是否运行\n\ndocker ps\n\nCONTAINER ID        IMAGE               COMMAND                  CREATED             STATUS              PORTS                    NAMES\n6b20b55fe6f8        registry:latest     "/entrypoint.sh /etc…"   2 minutes ago       Up 2 minutes        0.0.0.0:5000->5000/tcp   busy_mclean\n')])])]),e("p",[e("strong",[t._v("1.3 测试容器应用")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('[root@VM-12-10-centos ~]# curl http://0.0.0.0:5000/v2/_catalog{"repositories":[]}\n')])])]),e("p",[t._v("显示仓库中没有任何镜像。")]),t._v(" "),e("h3",{attrs:{id:"_2-上传镜像"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-上传镜像"}},[t._v("#")]),t._v(" 2. 上传镜像")]),t._v(" "),e("ol",[e("li",[t._v("设置 docker 仓库为 registry 本地仓库")]),t._v(" "),e("li",[t._v("给需要存储的镜像打 tag")]),t._v(" "),e("li",[t._v("上传镜像到 registry 仓库")])]),t._v(" "),e("p",[t._v("查看本地镜像：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("[root@VM-12-10-centos ~]# docker images\nREPOSITORY                                      TAG                 IMAGE ID            CREATED             SIZE\ngoweb_app                                       latest              62879d6fbd56        26 minutes ago      894 MB\ncentos-httpd                                    v1                  2c4280de642e        About an hour ago   209 MB\ndocker.io/golang                                latest              b09f7387a719        2 weeks ago         862 MB\ndocker.elastic.co/elasticsearch/elasticsearch   7.12.1              41dc8ea0f139        2 months ago        851 MB\ndocker.io/registry                              latest              1fd8e1b0bb7e        2 months ago        26.2 MB\ndocker.io/centos                                latest              300e315adb2f        6 months ago        209 MB\n")])])]),e("center",[t._v("演示：将 **goweb_app** 上传到 registry 仓库")]),t._v(" "),e("p",[e("strong",[t._v("2.1 设置 docker 仓库为 registry 本地仓库")])]),t._v(" "),e("div",{staticClass:"language-markdown extra-class"},[e("pre",{pre:!0,attrs:{class:"language-markdown"}},[e("code",[e("span",{pre:!0,attrs:{class:"token title important"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("#")]),t._v(" 1. 修改 docker 进程启动文件，修改其启动方式，目的是为了让其通过 docker 配置文件启动")]),t._v("\n\n[root@VM-12-10-centos ~]# sed -i.bak '/^ExecStart=/c\\ExecStart=\\/usr\\/bin\\/dockerd' /usr/lib/systemd/system/docker.service\n\n"),e("span",{pre:!0,attrs:{class:"token title important"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("#")]),t._v(" 2. 设置 Docker 守护进程的配置文件 /etc/docker/daemon.json，默认没有该文件")]),t._v('\n[root@VM-12-10-centos ~]# cat /etc/docker/daemon.json \n{\n "insecure-registries": ["http://0.0.0.0:5000"]\n}\ninsecure-registries 指定非安全的仓库地址，多个用逗号隔开\n\n'),e("span",{pre:!0,attrs:{class:"token title important"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("#")]),t._v(" 3. 重启docker生效配置文件")]),t._v("\n[root@VM-12-10-centos "),e("span",{pre:!0,attrs:{class:"token strike"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("~")]),e("span",{pre:!0,attrs:{class:"token content"}},[t._v("]# systemctl daemon-reload\n[root@VM-12-10-centos ")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("~")])]),t._v("]# systemctl restart docker\n")])])]),e("p",[e("strong",[t._v("2.2 给需要存储的镜像打 tag")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("[root@VM-12-10-centos ~]# docker tag goweb_app:latest 0.0.0.0:5000/goweb_app:v1\n")])])]),e("p",[e("strong",[t._v("2.3 上传镜像到 registry 仓库")])]),t._v(" "),e("div",{staticClass:"language-markdown extra-class"},[e("pre",{pre:!0,attrs:{class:"language-markdown"}},[e("code",[e("span",{pre:!0,attrs:{class:"token title important"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("#")]),t._v(' 1. 上传镜像docker push 0.0.0.0:5000/goweb_app:v1# 2. 查看上传[root@VM-12-10-centos ~]# curl http://0.0.0.0:5000/v2/_catalog{"repositories":["centos_nginx"]}')]),t._v("\n")])])]),e("h3",{attrs:{id:"_3-下载镜像"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-下载镜像"}},[t._v("#")]),t._v(" 3. 下载镜像")]),t._v(" "),e("ol",[e("li",[t._v("设置 docker 仓库为 registry 本地仓库")]),t._v(" "),e("li",[t._v("拉取镜像到本地")])]),t._v(" "),e("p",[e("strong",[t._v("3.1 设置 docker 仓库为 registry 本地仓库")])]),t._v(" "),e("p",[t._v("同 2.2")]),t._v(" "),e("p",[e("strong",[t._v("3.2 拉取镜像")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("docker pull 0.0.0.0:5000/goweb_app:v1\n")])])]),e("h3",{attrs:{id:"_4-设置认证"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-设置认证"}},[t._v("#")]),t._v(" 4. 设置认证")]),t._v(" "),e("ol",[e("li",[t._v("安装需要认证的包")]),t._v(" "),e("li",[t._v("创建存放认证信息的文件")]),t._v(" "),e("li",[t._v("创建认证信息")]),t._v(" "),e("li",[t._v("创建带认证的registry容器")]),t._v(" "),e("li",[t._v("指定仓库地址")]),t._v(" "),e("li",[t._v("登录认证")])]),t._v(" "),e("p",[e("strong",[t._v("4.1 安装需要认证的包")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("yum -y install httpd-tools\n")])])]),e("p",[e("strong",[t._v("4.2 创建存放认证信息的文件")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("mkdir -p /opt/registry-var/auth\n")])])]),e("p",[e("strong",[t._v("4.3 创建认证信息")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("htpasswd -Bbn hedon 123456 >> /opt/registry-var/auth/htpasswd\n")])])]),e("p",[e("strong",[t._v("4.4 创建带认证的 registry 容器")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('docker run -d -p 10000:5000 --restart=always --name registry \\\n-v  /opt/registry-var/auth:/auth \\\n-v /opt/myregistry:/var/lib/registry \\\n-e "REGISTRY_AUTH=htpasswd" \\\n-e "REGISTRY_AUTH_HTPASSWD_REALM=Registry Realm" \\\n-e REGISTRY_AUTH_HTPASSWD_PATH=/auth/htpasswd \\\nregistry:latest\n')])])]),e("p",[e("strong",[t._v("4.5 指定仓库地址")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('cat /etc/docker/daemon.json \n{\n "insecure-registries": ["http://0.0.0.0:5000","http://0.0.0.0:10000"]\n}\n')])])]),e("p",[e("strong",[t._v("4.6 登录认证")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("docker login 0.0.0.0:10000\nUsername：hedon\nPassword：123456\n")])])]),e("h2",{attrs:{id:"二、harbor"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#二、harbor"}},[t._v("#")]),t._v(" 二、harbor")]),t._v(" "),e("p",[t._v("略。")])],1)}),[],!1,null,null,null);s.default=r.exports}}]);
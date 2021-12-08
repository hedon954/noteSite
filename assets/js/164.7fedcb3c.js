(window.webpackJsonp=window.webpackJsonp||[]).push([[164],{577:function(e,a,n){"use strict";n.r(a);var s=n(47),t=Object(s.a)({},(function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"docker-镜像"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#docker-镜像"}},[e._v("#")]),e._v(" Docker 镜像")]),e._v(" "),n("h2",{attrs:{id:"_1-镜像拉取"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-镜像拉取"}},[e._v("#")]),e._v(" 1. 镜像拉取")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("docker pull 镜像名称:镜像版本\n")])])]),n("p",[e._v("示例：")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("[root@VM-12-10-centos ~]# docker pull centos\nUsing default tag: latest\nTrying to pull repository docker.io/library/centos ... \nlatest: Pulling from docker.io/library/centos\n7a0437f04f83: Pull complete \nDigest: sha256:5528e8b1b1719d34604c87e11dcd1c0a20bedf46e83b5632cdeac91b8c04efc1\nStatus: Downloaded newer image for docker.io/centos:latest\n")])])]),n("h2",{attrs:{id:"_2-查看镜像"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-查看镜像"}},[e._v("#")]),e._v(" 2. 查看镜像")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("docker images\n")])])]),n("p",[e._v("示例：")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("[root@VM-12-10-centos ~]# docker images\nREPOSITORY                 TAG                 IMAGE ID            CREATED             SIZE\nelasticsearch              7.12.1              41dc8ea0f139        2 months ago        851 MB\ndocker.io/centos           latest              300e315adb2f        6 months ago        209 MB\n")])])]),n("h2",{attrs:{id:"_3-镜像搜索"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-镜像搜索"}},[e._v("#")]),e._v(" 3. 镜像搜索")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("docker search 镜像名\n")])])]),n("p",[e._v("示例：")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("[root@VM-12-10-centos ~]# docker search nginx\nINDEX       NAME                                 DESCRIPTION    STARS     OFFICIAL   AUTOMATED\ndocker.io   docker.io/nginx                      Official...    15034      [OK]       \ndocker.io   docker.io/jwilder/nginx-proxy        Automated...   2038                 [OK]\ndocker.io   docker.io/richarvey/nginx-php-fpm    Container...   814                  [OK]\n.....\n.....\n.....\n")])])]),n("h2",{attrs:{id:"_4-删除镜像"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-删除镜像"}},[e._v("#")]),e._v(" 4. 删除镜像")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("docker rmi 镜像名称或 ID\n")])])]),n("p",[e._v("示例：")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("[root@VM-12-10-centos ~]# docker rmi docker.io/nginx\nUntagged: docker.io/nginx:latest\nUntagged: docker.io/nginx@sha256:6d75c99af15565a301e48297fa2d121e15d80ad526f8369c526324f0f7ccb750\nDeleted: sha256:d1a364dc548d5357f0da3268c888e1971bbdb957ee3f028fe7194f1d61c6fdee\nDeleted: sha256:fcc8faba78fe8a1f75025781c8fa1841079b75b54fce8408d039f73a48b7a81b\nDeleted: sha256:a476b265974ace4c857e3d88b358e848f126297a8249840c72d5f5ea1954a4bf\nDeleted: sha256:56722ee1ee7e73a5c6f96ea2959fa442fb4db9f044399bcd939bb0a6eb7919dc\nDeleted: sha256:c657df997c75f6c1a9c5cc683e8e34c6f29e5b4c1dee60b632d3477fd5fdd644\nDeleted: sha256:e9e1f772d2a8dbbeb6a4a4dcb4f0d07ff1c432bf94fac7a2db2216837bf9ec5b\nDeleted: sha256:02c055ef67f5904019f43a41ea5f099996d8e7633749b6e606c400526b2c4b33\n")])])]),n("h2",{attrs:{id:"_5-查看镜像详细信息"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_5-查看镜像详细信息"}},[e._v("#")]),e._v(" 5. 查看镜像详细信息")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("docker inspect 镜像名称或 ID\n")])])]),n("p",[e._v("示例：")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('[root@VM-12-10-centos ~]# docker inspect docker.io/centos\n[\n    {\n        "Id": "sha256:300e315adb2f96afe5f0b2780b87f28ae95231fe3bdd1e16b9ba606307728f55",\n        "RepoTags": [\n            "docker.io/centos:latest"\n        ],\n        "RepoDigests": [\n            "docker.io/centos@sha256:5528e8b1b1719d34604c87e11dcd1c0a20bedf46e83b5632cdeac91b8c04efc1"\n        ],\n        "Parent": "",\n        "Comment": "",\n        "Created": "2020-12-08T00:22:53.076477777Z",\n        "Container": "395e0bfa7301f73bc994efe15099ea56b8836c608dd32614ac5ae279976d33e4",\n        "ContainerConfig": {\n            "Hostname": "395e0bfa7301",\n            "Domainname": "",\n            "User": "",\n            "AttachStdin": false,\n            "AttachStdout": false,\n            "AttachStderr": false,\n            "Tty": false,\n            "OpenStdin": false,\n            "StdinOnce": false,\n            "Env": [\n                "PATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin"\n            ],\n            "Cmd": [\n                "/bin/sh",\n                "-c",\n                "#(nop) ",\n                "CMD [\\"/bin/bash\\"]"\n            ],\n            "Image": "sha256:6de05bdfbf9a9d403458d10de9e088b6d93d971dd5d48d18b4b6758f4554f451",\n            "Volumes": null,\n            "WorkingDir": "",\n            "Entrypoint": null,\n            "OnBuild": null,\n            "Labels": {\n                "org.label-schema.build-date": "20201204",\n                "org.label-schema.license": "GPLv2",\n                "org.label-schema.name": "CentOS Base Image",\n                "org.label-schema.schema-version": "1.0",\n                "org.label-schema.vendor": "CentOS"\n            }\n        },\n        "DockerVersion": "19.03.12",\n        "Author": "",\n        "Config": {\n            "Hostname": "",\n            "Domainname": "",\n            "User": "",\n            "AttachStdin": false,\n            "AttachStdout": false,\n            "AttachStderr": false,\n            "Tty": false,\n            "OpenStdin": false,\n            "StdinOnce": false,\n            "Env": [\n                "PATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin"\n            ],\n            "Cmd": [\n                "/bin/bash"\n            ],\n            "Image": "sha256:6de05bdfbf9a9d403458d10de9e088b6d93d971dd5d48d18b4b6758f4554f451",\n            "Volumes": null,\n            "WorkingDir": "",\n            "Entrypoint": null,\n            "OnBuild": null,\n            "Labels": {\n                "org.label-schema.build-date": "20201204",\n                "org.label-schema.license": "GPLv2",\n                "org.label-schema.name": "CentOS Base Image",\n                "org.label-schema.schema-version": "1.0",\n                "org.label-schema.vendor": "CentOS"\n            }\n        },\n        "Architecture": "amd64",\n        "Os": "linux",\n        "Size": 209348104,\n        "VirtualSize": 209348104,\n        "GraphDriver": {\n            "Name": "overlay2",\n            "Data": {\n                "MergedDir": "/var/lib/docker/overlay2/300b2801244e5593bb0ab3091b0f897d4854890afe9664230dec50bd425e5bac/merged",\n                "UpperDir": "/var/lib/docker/overlay2/300b2801244e5593bb0ab3091b0f897d4854890afe9664230dec50bd425e5bac/diff",\n                "WorkDir": "/var/lib/docker/overlay2/300b2801244e5593bb0ab3091b0f897d4854890afe9664230dec50bd425e5bac/work"\n            }\n        },\n        "RootFS": {\n            "Type": "layers",\n            "Layers": [\n                "sha256:2653d992f4ef2bfd27f94db643815aa567240c37732cae1405ad1c1309ee9859"\n            ]\n        }\n    }\n]\n')])])]),n("h2",{attrs:{id:"_6-保存镜像"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_6-保存镜像"}},[e._v("#")]),e._v(" 6. 保存镜像")]),e._v(" "),n("p",[e._v("保存镜像为压缩文件。")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("docker save -o 生成的压缩文件名 镜像名称或 ID\n")])])]),n("p",[e._v("示例：")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("[root@VM-12-10-centos ~]# docker save -o centos.base.tar docker.io/centos \n[root@VM-12-10-centos ~]# ll\n-rw-------  1 root       root       216535040 Jun 21 10:58 centos.base.tar\n")])])]),n("h2",{attrs:{id:"_7-载入镜像"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_7-载入镜像"}},[e._v("#")]),e._v(" 7. 载入镜像")]),e._v(" "),n("p",[e._v("从压缩文件载入镜像。")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("docker load -i 镜像压缩文件名称 镜像名称或 ID\n")])])]),n("p",[e._v("示例：")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("[root@VM-12-10-centos ~]# docker load -i centos.base.tar\nLoaded image: docker.io/centos:latest\n")])])]),n("h2",{attrs:{id:"_8-查看镜像大小"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_8-查看镜像大小"}},[e._v("#")]),e._v(" 8. 查看镜像大小")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("docker system df\n")])])]),n("p",[e._v("示例：")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("[root@VM-12-10-centos ~]# docker system df\nTYPE                TOTAL               ACTIVE              SIZE                RECLAIMABLE\nImages              2                   1                   850.9 MB            209.3 MB (24%)\nContainers          8                   0                   10.29 MB            10.29 MB (100%)\nLocal Volumes       0                   0                   0 B                 0 B\n")])])])])}),[],!1,null,null,null);a.default=t.exports}}]);
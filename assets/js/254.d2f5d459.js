(window.webpackJsonp=window.webpackJsonp||[]).push([[254],{665:function(a,t,s){"use strict";s.r(t);var e=s(47),n=Object(e.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"_4-权限管理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-权限管理"}},[a._v("#")]),a._v(" 4. 权限管理")]),a._v(" "),s("h2",{attrs:{id:"_4-1-文件属性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-文件属性"}},[a._v("#")]),a._v(" 4.1 文件属性")]),a._v(" "),s("p",[s("img",{attrs:{src:"https://tva1.sinaimg.cn/large/0081Kckwgy1gkl7waaapij30nd06d0tt.jpg",alt:"image-20201111142918973"}})]),a._v(" "),s("p",[s("font",{attrs:{color:"Red"}},[a._v("-")]),a._v(" "),s("font",{attrs:{color:"green"}},[a._v("rwx")]),a._v(" "),s("font",{attrs:{color:"orange"}},[a._v("r-x")]),a._v(" "),s("font",{attrs:{color:"pink"}},[a._v("r--")])],1),a._v(" "),s("ul",[s("li",[a._v("1：指明这是一个什么玩意\n"),s("ul",[s("li",[a._v("d：目标")]),a._v(" "),s("li",[a._v("-：普通文件")]),a._v(" "),s("li",[a._v("l：链接文件（link file）")]),a._v(" "),s("li",[a._v("b：块文件，如硬盘")]),a._v(" "),s("li",[a._v("c：字符设备，如键盘、鼠标")])])]),a._v(" "),s("li",[a._v("234：拥有者的权限\n"),s("ul",[s("li",[a._v("r：可读 —— 用数字表示为 4（即100）\n"),s("ul",[s("li",[a._v("文件：可以读取查看文件")]),a._v(" "),s("li",[a._v("目录：可以查看目录内容（ls）")])])]),a._v(" "),s("li",[a._v("w：可写 —— 用数字表示为 2（即010）\n"),s("ul",[s("li",[a._v("文件：可以修改文件，但是不一定能删除，删除一个文件的前提条件是对该文件所在的目录有 w 权限，才能删除该文件")]),a._v(" "),s("li",[a._v("目录：可以在目录内创建、修改、重命名目录")])])]),a._v(" "),s("li",[a._v("x：可执行 —— 用数字表示为 1（即001）\n"),s("ul",[s("li",[a._v("文件：可以被执行")]),a._v(" "),s("li",[a._v("目录：可以进入该目录")])])]),a._v(" "),s("li",[a._v("-：没有对应的权限")])])]),a._v(" "),s("li",[a._v("567：同用户组的用户权限")]),a._v(" "),s("li",[a._v("890：其他用户权限")])]),a._v(" "),s("div",{staticClass:"language-markdown extra-class"},[s("pre",{pre:!0,attrs:{class:"language-markdown"}},[s("code",[s("span",{pre:!0,attrs:{class:"token title important"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("#")]),a._v(" 例题： drwxr-xr-- 1 test1 testgroup 5238 June 19 20：25 groups/")]),a._v("\n① d 表示这是一个目录\n② rwx 表示目录的拥有者 test1 可以在本目录中进行任何操作\n③ r-x 表示 testgroup 这个用户组可以进入本目录进行工作，但是不能在本目录进行写入操作\n④ r-- 表示其他用户只有 r 权限，但是由于没有 x 权限，所有其他用户并不能进入此目录\n"),s("span",{pre:!0,attrs:{class:"token title important"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("#")]),a._v(" 注意：")]),a._v("\n文件所有者不一定在文件所属用户组的那个组里面\n")])])]),s("h2",{attrs:{id:"_4-2-查看文件属性-ls-ahl"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-查看文件属性-ls-ahl"}},[a._v("#")]),a._v(" 4.2 查看文件属性 —— ls -ahl")]),a._v(" "),s("p",[s("img",{attrs:{src:"https://tva1.sinaimg.cn/large/0081Kckwgy1gkl8c50sxfj30iq05x75s.jpg",alt:"image-20201111144415905"}})]),a._v(" "),s("h2",{attrs:{id:"_4-3-修改文件所有者-chown-username-filename"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-3-修改文件所有者-chown-username-filename"}},[a._v("#")]),a._v(" 4.3 修改文件所有者 —— chown username filename")]),a._v(" "),s("p",[a._v("将 apple.txt 的所有者改为 hedon")]),a._v(" "),s("p",[s("img",{attrs:{src:"https://tva1.sinaimg.cn/large/0081Kckwgy1gkl87nygrnj30gw01tjrw.jpg",alt:"image-20201111144017600"}})]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("chown")]),a._v(" hedon apple.txt\n")])])]),s("p",[s("img",{attrs:{src:"https://tva1.sinaimg.cn/large/0081Kckwgy1gkl88l6v8hj30gs02g757.jpg",alt:"image-20201111144110634"}})]),a._v(" "),s("p",[a._v("这里可以看到文件所有者已经改成 hedon 了，但是文件所属用户组并没有改变，这也就说明了文件所有者不一定就在文件所属用户组的那个组里面。")]),a._v(" "),s("h2",{attrs:{id:"_4-4-修改文件所在组-chgrp-groupname-filename"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-4-修改文件所在组-chgrp-groupname-filename"}},[a._v("#")]),a._v(" 4.4 修改文件所在组 —— chgrp groupname filename")]),a._v(" "),s("p",[a._v("将 apple.txt 文件所属用户组改成 monster")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("chgrp")]),a._v(" monster apple.txt\n")])])]),s("p",[s("img",{attrs:{src:"https://tva1.sinaimg.cn/large/0081Kckwgy1gkl8fg13wij30p30ekqbk.jpg",alt:"image-20201111144746150"}})]),a._v(" "),s("h2",{attrs:{id:"_4-5-修改文件权限-chmod"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-5-修改文件权限-chmod"}},[a._v("#")]),a._v(" 4.5 修改文件权限 —— chmod")]),a._v(" "),s("h3",{attrs:{id:"法一-通过-、-、-变更权限"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#法一-通过-、-、-变更权限"}},[a._v("#")]),a._v(" [法一] 通过 +、-、= 变更权限")]),a._v(" "),s("p",[a._v("u：所有者；g：所有组；o：其他人；a：所有人")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("chmod")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("u")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("rwx,g"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("rx,o"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("x filename\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("chmod")]),a._v(" o+w filename   "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#给其他用户加上 w 权限")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("chmod")]),a._v(" a-x filename   "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#去掉所有人的 x 权限")]),a._v("\n")])])]),s("h3",{attrs:{id:"法二-通过数字变更权限"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#法二-通过数字变更权限"}},[a._v("#")]),a._v(" [法二] 通过数字变更权限")]),a._v(" "),s("ul",[s("li",[a._v("r = 4")]),a._v(" "),s("li",[a._v("w = 2")]),a._v(" "),s("li",[a._v("x = 1")])]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("chmod")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("u")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("rwx,g"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("rx,o"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("x filename\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 等价于")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("chmod")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("751")]),a._v(" filename\n")])])]),s("h3",{attrs:{id:"法三-chown-newowner-newgroup-r-filename"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#法三-chown-newowner-newgroup-r-filename"}},[a._v("#")]),a._v(" [法三] chown newowner[:newgroup] [-R] filename")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("chown")]),a._v(" hedon filename\t \t\t\t\t  \t\t\t   "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#将 filename 的所有者改为 hedon")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("chown")]),a._v(" hedon:hedongroup filename \t\t\t\t "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#同时修改 filename 的所有者和所在组")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("chown")]),a._v(" hedon:hedongroup -R directoryName  "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#递归修改directoryName目录下的所有玩意的所有者和所在组")]),a._v("\n")])])]),s("Vssue")],1)}),[],!1,null,null,null);t.default=n.exports}}]);
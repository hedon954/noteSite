(window.webpackJsonp=window.webpackJsonp||[]).push([[288],{694:function(s,t,n){"use strict";n.r(t);var e=n(47),a=Object(e.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"centos7-下升级-gcc-版本"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#centos7-下升级-gcc-版本"}},[s._v("#")]),s._v(" CentOS7 下升级 gcc 版本")]),s._v(" "),n("div",{staticClass:"language-shell extra-class"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 安装 scl 源")]),s._v("\nyum "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" -y centos-release-scl scl-utils-build\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 安装 9 版本的 gcc、gcc-c++、gdb 工具链（toolchain）")]),s._v("\nyum "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" -y devtoolset-9-toolchain\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 临时覆盖系统原有的 gcc 引用")]),s._v("\nscl "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("enable")]),s._v(" devtoolset-9 "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("bash")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看当前 gcc 版本")]),s._v("\ngcc -v\n")])])]),n("Vssue")],1)}),[],!1,null,null,null);t.default=a.exports}}]);
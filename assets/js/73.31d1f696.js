(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{481:function(s,t,a){"use strict";a.r(t);var r=a(47),e=Object(r.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"linux-统计当前目录下的文件数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#linux-统计当前目录下的文件数"}},[s._v("#")]),s._v(" Linux 统计当前目录下的文件数")]),s._v(" "),a("h3",{attrs:{id:"_1-查看当前目录下文件的个数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-查看当前目录下文件的个数"}},[s._v("#")]),s._v(" 1. 查看当前目录下文件的个数")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v(" -la "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"^_"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("wc")]),s._v(" -l\n")])])]),a("h3",{attrs:{id:"_2-查看当前目录下的文件个数-包括子目录"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-查看当前目录下的文件个数-包括子目录"}},[s._v("#")]),s._v(" 2. 查看当前目录下的文件个数，包括子目录")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v(" -laR "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"^-"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("wc")]),s._v(" -l\n")])])]),a("ul",[a("li",[a("p",[s._v("ls -l")]),s._v(" "),a("p",[s._v("长列表输出该目录下文件信息（注意这里的文件，不同于一般的文件，可能是目录、链接、设备文件等）。")])]),s._v(" "),a("li",[a("p",[s._v('grep "^-"')]),s._v(" "),a("p",[s._v("这里将长列表输出信息过滤一部分，只保留一般文件，如果只保留目录就是 ^d。")])]),s._v(" "),a("li",[a("p",[s._v("wc -l")]),s._v(" "),a("p",[s._v("统计输出信息的行数，因为已经过滤得只剩一般文件了，所以统计结果就是一般文件信息的行数，又由于一行信息对应一个文件，所以就是文件的个数。")])])])])}),[],!1,null,null,null);t.default=e.exports}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{452:function(t,s,a){"use strict";a.r(s);var e=a(47),r=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"mac-上如何通过进程号查看其占用的端口"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mac-上如何通过进程号查看其占用的端口"}},[t._v("#")]),t._v(" Mac 上如何通过进程号查看其占用的端口")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("lsof")]),t._v(" -nP -p "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("进程号"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("grep")]),t._v(" LISTEN\n")])])]),a("p",[t._v("ps -ef | grep <PNAME> | awk 'NR==1{print $2}'")]),t._v(" "),a("p",[t._v("lsof -nP -p <PID> | grep LISTEN | awk '{print $9}'")])])}),[],!1,null,null,null);s.default=r.exports}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[96],{506:function(t,a,n){"use strict";n.r(a);var e=n(47),i=Object(e.a)({},(function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"二、字节码"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#二、字节码"}},[t._v("#")]),t._v(" 二、字节码")]),t._v(" "),n("h2",{attrs:{id:"_1-知道字节码吗-字节码指令集都有哪些-integer-x-5-int-y-5-比较-x-y-都经过哪些步骤"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-知道字节码吗-字节码指令集都有哪些-integer-x-5-int-y-5-比较-x-y-都经过哪些步骤"}},[t._v("#")]),t._v(" 1. 知道字节码吗？字节码指令集都有哪些？ Integer x=5, int y=5, 比较 x==y 都经过哪些步骤？")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[t._v("     0: iconst_1\t\t\t\t\t\t\t//常量1\n     1: invokestatic  #2      // Method java/lang/Integer.valueOf:(I)Ljava/lang/Integer;\n     4: astore_1              // a = 1\n     5: iconst_1\t\t\t\t\t\t\t//常量1\n     6: istore_2\t\t\t\t\t\t\t// b = 1\n     7: getstatic     #3      // Field java/lang/System.out:Ljava/io/PrintStream;\n    10: aload_1\t\t\t\t\t\t\t\t// load a\n    11: invokevirtual #4      // Method java/lang/Integer.intValue:()I，将 Integer 变成数值\n    14: iload_2\t\t\t\t\t\t\t\t// load b\n    15: if_icmpne     22\t\t\t// a 和 b 进行比较\n    18: iconst_1\t\t\t\t\t\t\t// 如果 if 成立，那就来 true\n    19: goto          23\n    22: iconst_0\t\t\t\t\t\t\t//如果 if 不成立，就来 false\n    23: invokevirtual #5      // Method java/io/PrintStream.println:(Z)V\n    26: return\n")])])]),n("p",[t._v("先 load 常量1，然后用 invokestatic 调用 Intger 的静态方法 valueOf，然后将 1 赋值给 a。")]),t._v(" "),n("p",[t._v("再 load 常量1，然后将 1 赋值给 b。")]),t._v(" "),n("p",[t._v("然后 load a 和 load b，进行比较。")]),t._v(" "),n("Vssue")],1)}),[],!1,null,null,null);a.default=i.exports}}]);
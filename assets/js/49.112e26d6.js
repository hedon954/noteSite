(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{462:function(t,a,s){"use strict";s.r(a);var e=s(47),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"五、cas"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#五、cas"}},[t._v("#")]),t._v(" 五、CAS")]),t._v(" "),s("h2",{attrs:{id:"_1-cas"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-cas"}},[t._v("#")]),t._v(" 1. CAS")]),t._v(" "),s("p",[t._v("Compare and swap，是乐观锁的一种实现。")]),t._v(" "),s("p",[t._v("我认为V的值应该是A ,如果是的话那我就把它改成B ,如果不是A (说明被别人修改过了) , 那我就不修改了, 避免多人同时修改导致出错")]),t._v(" "),s("p",[t._v("CAS 有三个操作数：内存值V、预期值A、要修改的值B，当且仅当预期值A和内存值V相同时，才将内存值修改为 B，否则什么都不做。最后返回现在的V值。")]),t._v(" "),s("img",{staticStyle:{zoom:"33%"},attrs:{src:"https://hedonspace.oss-cn-beijing.aliyuncs.com/img2/008eGmZEly1gord5ut0r3j315a0lswmu.jpg",alt:"image-20210321112615614"}}),t._v(" "),s("p",[s("font",{attrs:{color:"pink"}},[t._v("CAS 需要利用 CPU 的特殊指令 cmpxchg。")])],1),t._v(" "),s("div",{staticClass:"language-c++ extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('jbyte Atomic::cmpxchg(jbyte exchange_value, volatile jbyte*dest, jbyte compare_value) {\n         assert (sizeof(jbyte) == 1,"assumption.");\n         uintptr_t dest_addr = (uintptr_t) dest;\n         uintptr_t offset = dest_addr % sizeof(jint);\n         volatile jint*dest_int = ( volatile jint*)(dest_addr - offset);\n         // 对象当前值\n         jint cur = *dest_int;\n         // 当前值cur的地址\n         jbyte * cur_as_bytes = (jbyte *) ( & cur);\n         // new_val地址\n         jint new_val = cur;\n         jbyte * new_val_as_bytes = (jbyte *) ( & new_val);\n          // new_val存exchange_value，后面修改则直接从new_val中取值\n         new_val_as_bytes[offset] = exchange_value;\n         // 比较当前值与期望值，如果相同则更新，不同则直接返回\n         while (cur_as_bytes[offset] == compare_value) {\n          // 调用汇编指令cmpxchg执行CAS操作，期望值为cur，更新值为new_val\n             jint res = cmpxchg(new_val, dest_int, cur);\n             if (res == cur) break;\n             cur = res;\n             new_val = cur;\n             new_val_as_bytes[offset] = exchange_value;\n         }\n         // 返回当前值\n         return cur_as_bytes[offset];\n')])])]),s("h2",{attrs:{id:"_2-等价过程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-等价过程"}},[t._v("#")]),t._v(" 2. 等价过程")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("volatile")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" value"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("synchronized")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("compareAndSwap")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" expectedValue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" newValue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  \t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" oldValue "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" value"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("oldValue "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" expectedValue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      value "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Value")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" \toldValue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"_3-优缺点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-优缺点"}},[t._v("#")]),t._v(" 3. 优缺点")]),t._v(" "),s("h3",{attrs:{id:"_3-1-优点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-优点"}},[t._v("#")]),t._v(" 3.1 优点")]),t._v(" "),s("ul",[s("li",[t._v("在竞争不是很激烈的情况下性能比较高。")])]),t._v(" "),s("h3",{attrs:{id:"_3-2-缺点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-缺点"}},[t._v("#")]),t._v(" 3.2 缺点")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("CPU 开销大，在高并发下，许多线程，更新一变量，多次更新不成功，循环反复，给 CPU 带来大量压力。")])]),t._v(" "),s("li",[s("p",[t._v("只是一个变量的原子性操作，不能保证代码块的原子性。")])]),t._v(" "),s("li",[s("p",[t._v("ABA 问题：")]),t._v(" "),s("p",[t._v("threadA 将100，改为50；\nthreadB 将100，改为50；\nthreadC 将50，改为100；")]),t._v(" "),s("p",[t._v("这个时候并不会察觉到线程是否被修改过。")]),t._v(" "),s("div",{staticClass:"language-markdown extra-class"},[s("pre",{pre:!0,attrs:{class:"language-markdown"}},[s("code",[s("span",{pre:!0,attrs:{class:"token title important"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("#")]),t._v(" 如果解决？")]),t._v("\n可以引入版本号这个字段，利用版本号来确定是否被修改过，而不是比较值本身。\n")])])])])]),t._v(" "),s("Vssue")],1)}),[],!1,null,null,null);a.default=n.exports}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[243],{654:function(t,s,a){"use strict";a.r(s);var n=a(47),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"位运算"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#位运算"}},[t._v("#")]),t._v(" 位运算")]),t._v(" "),a("h3",{attrs:{id:"leetcode-136-single-number"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#leetcode-136-single-number"}},[t._v("#")]),t._v(" Leetcode 136 Single Number")]),t._v(" "),a("blockquote",[a("p",[t._v("https://leetcode.cn/problems/single-number/")])]),t._v(" "),a("p",[t._v("题目要求时间复杂度为 O(n)，且空间复杂度为 O(1)。也就是说，我们只能遍历一遍数组，且不能使用额外空间去对数据进行记录。那么这个时候，只能往位运算上考虑了。")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("异或")]),t._v(" "),a("ul",[a("li",[t._v("a ⊕ b = （¬a ∧ b） ∨ （a ∧¬b）")]),t._v(" "),a("li",[a("strong",[t._v("如果a、b两个值不相同，则异或结果为 1。如果 a、b 两个值相同，异或结果为 0。")])])]),t._v(" "),a("ol",[a("li",[t._v("交换律：a ^ b <=> b ^ a")]),t._v(" "),a("li",[t._v("结合律：a ^ b ^ c <=> a ^ (b ^ b)")]),t._v(" "),a("li",[t._v("任何数与 0 异或为任何数：0 ^ n => n")]),t._v(" "),a("li",[t._v("相同的数异或为 0：n ^ n => 0")])])]),t._v(" "),a("p",[t._v("故本体我们可以使用异或来解决：")]),t._v(" "),a("ol",[a("li",[t._v("初始化 res 为 0；")]),t._v(" "),a("li",[t._v("0 ^ nums[0] ^ nums[1] ^ .... ^ nums[n-1]，根据交换律和结合律，中间相同的元素都会被异或为 0，就只剩下没有重复过的元素了；")]),t._v(" "),a("li",[t._v("再加上 0 异或任何数都为任何数，所以最终就剩下那个没有重复的元素了。")])]),t._v(" "),a("div",{staticClass:"language-go extra-class"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("singleNumber")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("nums "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    res "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" i"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("len")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("nums"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        res "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" res "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("^")]),t._v(" nums"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" res\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("Vssue")],1)}),[],!1,null,null,null);s.default=e.exports}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{456:function(a,t,_){"use strict";_.r(t);var l=_(47),v=Object(l.a)({},(function(){var a=this,t=a.$createElement,_=a._self._c||t;return _("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[_("h1",{attrs:{id:"六、final"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#六、final"}},[a._v("#")]),a._v(" 六、final")]),a._v(" "),_("h2",{attrs:{id:"_1-不变性"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-不变性"}},[a._v("#")]),a._v(" 1. 不变性")]),a._v(" "),_("blockquote",[_("p",[a._v("如果对象在被创建后，状态就不能被修改，那么它就是不可变的。")])]),a._v(" "),_("ul",[_("li",[a._v("对于不可变对象，一定是线程安全的。")])]),a._v(" "),_("h2",{attrs:{id:"_2-final-的作用"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-final-的作用"}},[a._v("#")]),a._v(" 2. final 的作用")]),a._v(" "),_("ul",[_("li",[a._v("类防止被继承")]),a._v(" "),_("li",[a._v("方法防止被重写")]),a._v(" "),_("li",[a._v("变量防止被修改")]),a._v(" "),_("li",[a._v("天生线程安全")])]),a._v(" "),_("h2",{attrs:{id:"_3-final-三种用法"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_3-final-三种用法"}},[a._v("#")]),a._v(" 3. final 三种用法")]),a._v(" "),_("h3",{attrs:{id:"_3-1-修饰变量"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-修饰变量"}},[a._v("#")]),a._v(" 3.1 修饰变量")]),a._v(" "),_("ul",[_("li",[a._v("被 final 修饰的变量，意味着"),_("strong",[a._v("值不能被修改")]),a._v("。如果变量是"),_("strong",[a._v("对象")]),a._v("，那么对象的"),_("strong",[a._v("引用不能变")]),a._v("，但是对象自身的"),_("strong",[a._v("内容依然可以变化")]),a._v("。")])]),a._v(" "),_("h5",{attrs:{id:"_1-final-instance-variable-类中的-final-属性"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-final-instance-variable-类中的-final-属性"}},[a._v("#")]),a._v(" ① final instance variable（类中的 final 属性）")]),a._v(" "),_("p",[a._v("赋值时机：")]),a._v(" "),_("ul",[_("li",[a._v("声明变量时等号右边直接赋值")]),a._v(" "),_("li",[a._v("构造函数中赋值")]),a._v(" "),_("li",[a._v("初始化代码块中赋值")]),a._v(" "),_("li",[_("font",{attrs:{color:"red"}},[a._v("不能不赋值")])],1)]),a._v(" "),_("h5",{attrs:{id:"_2-final-static-variable-类中的-static-final-属性"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-final-static-variable-类中的-static-final-属性"}},[a._v("#")]),a._v(" ② final static variable（类中的 static final 属性）")]),a._v(" "),_("p",[a._v("赋值时机：")]),a._v(" "),_("ul",[_("li",[a._v("声明变量时直接等号赋值")]),a._v(" "),_("li",[a._v("static 静态代码块赋值")]),a._v(" "),_("li",[_("font",{attrs:{color:"Red"}},[a._v("不可用普通初始代码块赋值")])],1)]),a._v(" "),_("h5",{attrs:{id:"_3-final-local-variable-方法中的-final-变量"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_3-final-local-variable-方法中的-final-变量"}},[a._v("#")]),a._v(" ③ final local variable（方法中的 final 变量）")]),a._v(" "),_("p",[a._v("赋值时机：")]),a._v(" "),_("ul",[_("li",[_("font",{attrs:{color:"red"}},[a._v("使用变量前必须先赋值")])],1)]),a._v(" "),_("div",{staticClass:"language-markdown extra-class"},[_("pre",{pre:!0,attrs:{class:"language-markdown"}},[_("code",[_("span",{pre:!0,attrs:{class:"token title important"}},[_("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("#")]),a._v(" 为什么要规定赋值时机？")]),a._v("\n"),_("span",{pre:!0,attrs:{class:"token list punctuation"}},[a._v("1.")]),a._v(" 不赋值的话默认就是 null 了，又因为 final，后面又改变不了了，就只能是 null 了。\n")])])]),_("h3",{attrs:{id:"_3-2-修饰方法"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-修饰方法"}},[a._v("#")]),a._v(" 3.2 修饰方法")]),a._v(" "),_("ul",[_("li",[a._v("构造方法不允许 final 修饰。")]),a._v(" "),_("li",[a._v("不可被重写（static 也是，static 不是重写，而是毫无关系）。")])]),a._v(" "),_("h3",{attrs:{id:"_3-3-修饰类"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-修饰类"}},[a._v("#")]),a._v(" 3.3 修饰类")]),a._v(" "),_("ul",[_("li",[a._v("不可被继承（如String）。")])]),a._v(" "),_("h2",{attrs:{id:"_4-注意点"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_4-注意点"}},[a._v("#")]),a._v(" 4. 注意点")]),a._v(" "),_("ul",[_("li",[a._v("被 final 修饰的变量，意味着"),_("strong",[a._v("值不能被修改")]),a._v("。如果变量是"),_("strong",[a._v("对象")]),a._v("，那么对象的"),_("strong",[a._v("引用不能变")]),a._v("，但是对象自身的"),_("strong",[a._v("内容依然可以变化")]),a._v("。")]),a._v(" "),_("li",[a._v("明确知道不可变就加 final。")]),a._v(" "),_("li",[a._v("final 修饰是 String 如果编译器可以判断它是值，那么会直接放到常量池当中。")])]),a._v(" "),_("h2",{attrs:{id:"_5-不变性和-final-的关系"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_5-不变性和-final-的关系"}},[a._v("#")]),a._v(" 5. 不变性和 final 的关系")]),a._v(" "),_("p",[a._v("不变性并不意味着简单使用 final 修饰就是不可变")]),a._v(" "),_("ul",[_("li",[a._v("对于基本数据类型，确实被 final 修饰后就具有不变性")]),a._v(" "),_("li",[a._v("但是对于对象类型，需要该对象保证自身被创建后，状态永远不会变才可以。")]),a._v(" "),_("li",[a._v("一个 final 对象必须里面所有的属性都是 final 的这个对象才是不可变的。")])]),a._v(" "),_("h2",{attrs:{id:"_6-栈封闭"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_6-栈封闭"}},[a._v("#")]),a._v(" 6. 栈封闭")]),a._v(" "),_("p",[a._v("在方法里面新建的局部变量，实际上是存储在每个线程私有的栈空间，而每个栈的栈空间是不能被其他线程所访问到的，所以不会有线程安全问题。这就是“栈封闭”技术，是“线程封闭”技术的一种情况。")]),a._v(" "),_("Vssue")],1)}),[],!1,null,null,null);t.default=v.exports}}]);
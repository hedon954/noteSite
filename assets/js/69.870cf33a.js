(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{479:function(t,a,n){"use strict";n.r(a);var e=n(47),s=Object(e.a)({},(function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"javase-file-类"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#javase-file-类"}},[t._v("#")]),t._v(" JavaSE —— File 类")]),t._v(" "),n("h2",{attrs:{id:"_1-简介"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-简介"}},[t._v("#")]),t._v(" 1. 简介")]),t._v(" "),n("ul",[n("li",[t._v("java.io.File类：文件和文件目录路径的抽象表示形式，与平台无关。")]),t._v(" "),n("li",[t._v("File 能新建、删除、重命名文件和目录，但 File 不能访问文件内容本身。 如果需要访问文件内容本身，则需要使用 IO 流。")]),t._v(" "),n("li",[t._v("想要在Java程序中表示一个真实存在的文件或目录，那么必须有一个 File 对象，但是 Java 程序中的一个File对象，可能没有一个真实存在的文件或目录。")]),t._v(" "),n("li",[t._v("File 对象可以作为参数传递给流的构造器。")])]),t._v(" "),n("h2",{attrs:{id:"_2-构造器"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-构造器"}},[t._v("#")]),t._v(" 2. 构造器")]),t._v(" "),n("ul",[n("li",[n("p",[t._v("public File(String pathname)")]),t._v(" "),n("p",[t._v("以 pathname 为路径创建 File 对象，可以是绝对路径或者相对路径，如果 pathname 是相对路径，则默认的当前路径在系统属性user.dir 中存储。")])]),t._v(" "),n("li",[n("p",[t._v("public File(String parent,String child)")]),t._v(" "),n("p",[t._v("以 parent 为父路径，child 为子路径创建 File 对象。")])]),t._v(" "),n("li",[n("p",[t._v("public File(File parent, String child)")]),t._v(" "),n("p",[t._v("根据一个父 File 对象和子文件路径创建 File 对象。")])])]),t._v(" "),n("div",{staticClass:"language-markdown extra-class"},[n("pre",{pre:!0,attrs:{class:"language-markdown"}},[n("code",[n("span",{pre:!0,attrs:{class:"token title important"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("#")]),t._v(" 路径分隔符")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token list punctuation"}},[t._v("-")]),t._v(" windows 和 DOS 系统默认使用“\\”来表示\n"),n("span",{pre:!0,attrs:{class:"token list punctuation"}},[t._v("-")]),t._v(" UNIX 和 URL 使用“/”来表示\nJava 程序支持跨平台运行，因此路径分隔符要慎用。\n为了解决这个隐患，File类提供了一个常量: public static final String separator -> 根据操作系统，动态的提供分隔符。\n")])])]),n("h2",{attrs:{id:"_3-常用方法"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-常用方法"}},[t._v("#")]),t._v(" 3. 常用方法")]),t._v(" "),n("div",{staticClass:"language-markdown extra-class"},[n("pre",{pre:!0,attrs:{class:"language-markdown"}},[n("code",[n("span",{pre:!0,attrs:{class:"token title important"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("#")]),t._v(" 获取功能")]),t._v("\n public String getAbsolutePath(): 获取绝对路径。\n public String getPath(): 获取路径。\n public String getName(): 获取名称。\n public String getParent(): 获取上层文件目录路径。若无，返回null。\n public long length(): 获取文件长度(即:字节数)。不能获取目录的长度。 \n public long lastModified(): 获取最后一次的修改时间，毫秒值。\n public String[] list(): 获取指定目录下的所有文件或者文件目录的名称数组。\n public File[] listFiles(): 获取指定目录下的所有文件或者文件目录的 File 数组。\n\n"),n("span",{pre:!0,attrs:{class:"token title important"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("#")]),t._v(" 重命名功能")]),t._v("\n public boolean renameTo(File dest):把文件重命名为指定的文件路径\n"),n("span",{pre:!0,attrs:{class:"token title important"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("###")]),t._v(" 注意事项：file1.renameTo(file2) 中 file 1必须真实存在，file2 必须不存在。")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token title important"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("#")]),t._v(" 判断功能")]),t._v("\n public boolean isDirectory(): 判断是否是文件目录 \n public boolean isFile(): 判断是否是文件\n public boolean exists(): 判断是否存在\n public boolean canRead(): 判断是否可读\n public boolean canWrite(): 判断是否可写 \n public boolean isHidden(): 判断是否隐藏\n\n"),n("span",{pre:!0,attrs:{class:"token title important"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("#")]),t._v(" 创建功能")]),t._v("\n public boolean createNewFile(): 创建文件。若文件存在，则不创建，返回false。\n public boolean mkdir(): 创建文件目录。如果此文件目录存在，就不创建了。如果此文件目录的上层目录不存在，也不创建。\n public boolean mkdirs(): 创建文件目录。如果上层文件目录不存在，一并创建。\n"),n("span",{pre:!0,attrs:{class:"token title important"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("###")]),t._v(" 注意事项:如果你创建文件或者文件目录没有写盘符路径，那么，默认在项目路径下。")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token title important"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("#")]),t._v(" 删除功能")]),t._v("\n public boolean delete():删除文件或者文件夹\n"),n("span",{pre:!0,attrs:{class:"token title important"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("###")]),t._v(" 删除注意事项: Java中的删除不走回收站。要删除一个文件目录，请注意该文件目录内不能包含文件或者文件目录。")]),t._v("\n")])])]),n("Vssue")],1)}),[],!1,null,null,null);a.default=s.exports}}]);
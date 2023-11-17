(window.webpackJsonp=window.webpackJsonp||[]).push([[149],{558:function(r,e,s){"use strict";s.r(e);var t=s(47),n=Object(t.a)({},(function(){var r=this,e=r.$createElement,s=r._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":r.$parent.slotKey}},[s("h1",{attrs:{id:"_9-nginx-原理与优化参数配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_9-nginx-原理与优化参数配置"}},[r._v("#")]),r._v(" 9. Nginx 原理与优化参数配置")]),r._v(" "),s("p",[s("img",{attrs:{src:"https://hedonspace.oss-cn-beijing.aliyuncs.com/img2/e6c9d24egy1h5fxgmnrkxj21fg0l6tbj.jpg",alt:"image-20210726115937604"}})]),r._v(" "),s("p",[s("img",{attrs:{src:"https://hedonspace.oss-cn-beijing.aliyuncs.com/img2/e6c9d24egy1h5fxglyv7ij219y0qgdhs.jpg",alt:"image-20210726115958176"}})]),r._v(" "),s("p",[s("strong",[r._v("1. master-workers 机制的优势")])]),r._v(" "),s("p",[r._v("首先，对于每个 worker 进程来说，独立的进程，不需要加锁，所以省掉了锁带来的开销， 同时在编程以及问题查找时，也会方便很多。其次，采用独立的进程，可以让互相之间不会影响，一个进程退出后，其它进程还在工作，服务不会中断，master 进程则很快启动新的 worker 进程。当然，worker 进程的异常退出，肯定是程序有 bug 了，异常退出，会导致当前 worker 上的所有请求失败，不过不会影响到所有请求，所以降低了风险。")]),r._v(" "),s("p",[s("strong",[r._v("2. 需要设置多少个 worker")])]),r._v(" "),s("p",[r._v("Nginx 同 redis 类似都采用了 io 多路复用机制，每个 worker 都是一个独立的进程，但每个进程里只有一个主线程，通过异步非阻塞的方式来处理请求， 即使是千上万个请求也不在话下。每个 worker 的线程可以把一个 CPU 的性能发挥到极致。所以 worker 数和服务器的 CPU 数相等是最为适宜的。设少了会浪费 CPU，设多了会造成 CPU 频繁切换上下文带来的损耗。")]),r._v(" "),s("p",[s("strong",[r._v("3. 设置 worker 数量")])]),r._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[r._v("worker_processes "),s("span",{pre:!0,attrs:{class:"token number"}},[r._v("4")]),r._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[r._v("# worker 绑定 cpu（4 work 绑定 4 CPU）")]),r._v("\nworker_cpu_affinity 0001 0010 0100 "),s("span",{pre:!0,attrs:{class:"token number"}},[r._v("1000")]),r._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[r._v("# worker 绑定 cpu（4 work 绑定 8 CPU 中的 4 个）")]),r._v("\nworker_cpu_affinity 0000001 00000010 00000100 0000100\n")])])]),s("p",[s("strong",[r._v("4. 连接数 worker_connection")])]),r._v(" "),s("p",[r._v("这个值是表示每个 worker 进程所能建立连接的最大值，所以，一个 nginx 能建立的最大连接数，应该是 "),s("code",[r._v("worker_connections * worker_processes")]),r._v("。当然，这里说的是最大连接数，对于 HTTP 请求本地资源来说，能够支持的最大并发数量是 "),s("code",[r._v("worker_connections * worker_processes")]),r._v("，如果是支持 http1.1 的浏览器每次访问要占两个连接，所以普通的静态访 问最大并发数是: "),s("code",[r._v("worker_connections * worker_processes /2")]),r._v("，而如果是 HTTP 作 为反向代理来说，最大并发数量应该是 "),s("code",[r._v("worker_connections * worker_processes/4")]),r._v("。因为作为反向代理服务器，每个并发会建立与客户端的连接和与后端服务的连接，会占用两个连接。")]),r._v(" "),s("p",[s("img",{attrs:{src:"https://hedonspace.oss-cn-beijing.aliyuncs.com/img2/e6c9d24egy1h5fxgn3bamj21820m276u.jpg",alt:"image-20210726120341220"}})]),r._v(" "),s("Vssue")],1)}),[],!1,null,null,null);e.default=n.exports}}]);
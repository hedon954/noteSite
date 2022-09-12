(window.webpackJsonp=window.webpackJsonp||[]).push([[192],{603:function(t,_,v){"use strict";v.r(_);var s=v(47),e=Object(s.a)({},(function(){var t=this,_=t.$createElement,v=t._self._c||_;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"面试题丨应用层"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#面试题丨应用层"}},[t._v("#")]),t._v(" 面试题丨应用层")]),t._v(" "),v("h2",{attrs:{id:"_1-dns-原理"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-dns-原理"}},[t._v("#")]),t._v(" 1. DNS 原理")]),t._v(" "),v("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://tva1.sinaimg.cn/large/008eGmZEgy1gotltvi2q1j30u013r0wh.jpg",alt:"img"}}),t._v(" "),v("ol",[v("li",[t._v("浏览器输入地址")]),t._v(" "),v("li",[t._v("然后浏览器这个进程去调操作系统某个库里的 gethostbyname 函数(例如，Linux GNU glibc标准库的 gethostbyname 函数)")]),t._v(" "),v("li",[t._v("然后这个函数通过网卡给 DNS 服务器发 UDP 请求")]),t._v(" "),v("li",[t._v("接收结果")]),t._v(" "),v("li",[t._v("然后将结果给返回给浏览器")])]),t._v(" "),v("p",[t._v("特殊：")]),t._v(" "),v("ul",[v("li",[t._v("(1) 我们在用 Chrome 浏览器的时候，其实会先去浏览器的 DNS 缓存里头查询，DNS 缓存中没有，再去调用 gethostbyname 函数")]),t._v(" "),v("li",[t._v("(2) gethostbyname 函数在试图进行 DNS 解析之前首先检查域名是否在本地 Hosts 里，如果没找到再去 DNS 服务器上查。")])]),t._v(" "),v("h2",{attrs:{id:"_2-dns-查询方式"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-dns-查询方式"}},[t._v("#")]),t._v(" 2. DNS 查询方式")]),t._v(" "),v("h3",{attrs:{id:"递归查询"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#递归查询"}},[t._v("#")]),t._v(" 递归查询")]),t._v(" "),v("p",[t._v("根域名找得到就返回，找不到就把请求转给顶级域名，顶级域名找得到就返回给根域名，再由根域名回给 DNS 客户端，再由 DNS 客户端回给浏览器，后面以此类推。")]),t._v(" "),v("img",{staticStyle:{zoom:"33%"},attrs:{src:"https://tva1.sinaimg.cn/large/008eGmZEgy1gp57216qo5j314c0p4tee.jpg",alt:"image-20210402103254465"}}),t._v(" "),v("h3",{attrs:{id:"迭代查询"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#迭代查询"}},[t._v("#")]),t._v(" 迭代查询")]),t._v(" "),v("p",[t._v("根域名找得到就直接返回给 DNS 客户端，找不到就告诉 DNS 客户端它找不到，然后 DNS 客户端把请求交给顶级域名去尝试，顶级域名找得到也直接返回给 DNS 客户端，找不到就告诉 DNS 客户端它找不到，后面以此类推。")]),t._v(" "),v("img",{staticStyle:{zoom:"33%"},attrs:{src:"https://tva1.sinaimg.cn/large/008eGmZEgy1gp573ucw8lj315w0po10g.jpg",alt:"image-20210402103438687"}}),t._v(" "),v("h2",{attrs:{id:"_3-dns-中-udp-在哪里使用-tcp-在哪里使用"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-dns-中-udp-在哪里使用-tcp-在哪里使用"}},[t._v("#")]),t._v(" 3. DNS 中 UDP 在哪里使用？ TCP 在哪里使用？")]),t._v(" "),v("ol",[v("li",[t._v("gethostbyname 函数通过网卡发送请求给 DNS 服务器解析域名的时候使用 UDP。")]),t._v(" "),v("li",[t._v("区域传送的时候使用 TCP\nDNS的规范规定了2种类型的DNS服务器，一个叫主DNS服务器，一个叫辅助DNS服务器（其实就是一份备份）。在一个区中主DNS服务器从自己本机的数据文件中读取该区的 DNS 数据信息，而辅助DNS服务器则从区的主DNS服务器中读取该区的DNS数据信息。当一个辅助DNS服务器启动时，它需要与主DNS服务器通信，并加载数据信息，这就叫做区传送（zone transfer）。 这种情况下，使用TCP协议。")])]),t._v(" "),v("h2",{attrs:{id:"_4-dns-在域名解析上是用-udp-还是-tcp"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_4-dns-在域名解析上是用-udp-还是-tcp"}},[t._v("#")]),t._v(" 4. DNS 在域名解析上是用 UDP 还是 TCP？")]),t._v(" "),v("p",[t._v("UDP，数据量小，为了快。")]),t._v(" "),v("h2",{attrs:{id:"_5-区域复制为什么要用-tcp"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_5-区域复制为什么要用-tcp"}},[t._v("#")]),t._v(" 5. 区域复制为什么要用 TCP？")]),t._v(" "),v("p",[t._v("因为TCP协议可靠性好！你要从区域的主DNS上复制内容，必须保证可靠性。同时 TCP 协议传输的内容大，UDP 最大只能传512字节，同步的数据很可能会大于512字节。")]),t._v(" "),v("h2",{attrs:{id:"_6-为什么-udp-最大只能传-512-字节"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_6-为什么-udp-最大只能传-512-字节"}},[t._v("#")]),t._v(" 6. 为什么 UDP 最大只能传 512 字节？")]),t._v(" "),v("ul",[v("li",[t._v("纠正：UPD 最大不止传 512 字节。")]),t._v(" "),v("li",[t._v("以太网帧在局域网中的 MTU 是 1500byte，但是在非局域网环境，如：internet 下的时候，MTU 是各个路由器进行一个配置的。所以，通常路由器默认的 MTU 为576字节。所以，为了适应网络环境，DNS 协议在返回的数据报大于 512 的时候，就转化为了 TCP 协议。")])]),t._v(" "),v("h2",{attrs:{id:"_7-dhcp-是什么"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_7-dhcp-是什么"}},[t._v("#")]),t._v(" 7. DHCP 是什么")]),t._v(" "),v("p",[t._v("DHCP（Dynamic Host Configuration Protocol，动态主机设置协议）通常被应用在大型的局域网络环境中，主要作用是集中的管理、分配 IP 地址，使网络环境中的主机动态的获得 IP 地址、Gateway 地址、DNS 服务器地址等信息，并能够提升地址的使用率。")]),t._v(" "),v("h2",{attrs:{id:"_8-dhcp-过程"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_8-dhcp-过程"}},[t._v("#")]),t._v(" 8. DHCP 过程")]),t._v(" "),v("p",[t._v("DHCP 协议采用 UDP 作为传输协议，主机发送请求消息到 "),v("code",[t._v("DHCP 服务器的 67 号")]),t._v("端口，DHCP 服务器回应应答消息给"),v("code",[t._v("主机的 68 号")]),t._v("端口。详细的交互过程如下图：")]),t._v(" "),v("p",[v("img",{attrs:{src:"https://tva1.sinaimg.cn/large/008eGmZEly1gp9u9llrp6j30dq087wex.jpg",alt:"img"}})]),t._v(" "),v("p",[t._v("1、DHCP Client 以广播的方式发出 "),v("code",[t._v("DHCP Discover")]),t._v(" 报文。")]),t._v(" "),v("p",[t._v("2、所有的 DHCP Server 都能够接收到 DHCP Client 发送的 DHCP Discover 报文，所有的 DHCP Server 都会给出响应，向 DHCP Client 发送一个 "),v("code",[t._v("DHCP Offer")]),t._v(" 报文。")]),t._v(" "),v("blockquote",[v("p",[t._v("DHCP Offer 报文中 “Your(Client) IP Address” 字段就是 DHCP Server 能够提供给 DHCP Client 使用的IP地址，且 DHCP Server 会将自己的 IP 地址放在 “option” 字段中以便 DHCP Client 区分不同的 DHCP Server。DHCP Server 在发出此报文后会存在一个已分配IP地址的纪录。")])]),t._v(" "),v("p",[t._v("3、DHCP Client 只能处理其中的一个 DHCP Offer 报文，一般的原则是 DHCP Client 处理"),v("code",[t._v("最先收到")]),t._v("的 DHCP Offer 报文。")]),t._v(" "),v("p",[t._v("​\t DHCP Client 会发出一个广播的 "),v("code",[t._v("DHCP Request")]),t._v(" 报文，在选项字段中会加入选中的 DHCP Server 的 IP 地址和需要的 IP 地址。")]),t._v(" "),v("p",[t._v("4、DHCP Server 收到 DHCP Request 报文后，判断选项字段中的 IP 地址是否与自己的地址相同。")]),t._v(" "),v("ul",[v("li",[t._v("如果不相同，DHCP Server 不做任何处理只清除相应 IP 地址分配记录；")]),t._v(" "),v("li",[t._v("如果相同，DHCP Server 就会向 DHCP Client 响应一个 "),v("code",[t._v("DHCP ACK")]),t._v(" 报文，并在选项字段中增加 IP 地址的使用租期信息。")])]),t._v(" "),v("p",[t._v("5、DHCP Client 接收到 DHCP ACK 报文后，检查 DHCP Server 分配的 IP 地址是否能够使用。")]),t._v(" "),v("ul",[v("li",[t._v("如果可以使用，则 DHCP Client 成功获得 IP 地址并根据 IP 地址使用租期自动启动续延过程；")]),t._v(" "),v("li",[t._v("如果 DHCP Client 发现分配的 IP 地址已经被使用，则 DHCP Client 向 DHCPServer 发出 "),v("code",[t._v("DHCP Decline")]),t._v(" 报文，通知 DHCP Server 禁用这个IP地址，然后 DHCP Client 开始新的地址申请过程。")])]),t._v(" "),v("p",[t._v("6、DHCP Client 在成功获取 IP 地址后，随时可以通过发送 "),v("code",[t._v("DHCP Release")]),t._v(" 报文释放自己的IP地址，DHCP Server 收到 DHCP Release 报文后，会回收相应的IP地址并重新分配。")]),t._v(" "),v("h2",{attrs:{id:"_9-http-有哪些特点"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_9-http-有哪些特点"}},[t._v("#")]),t._v(" 9. HTTP 有哪些特点")]),t._v(" "),v("ul",[v("li",[v("strong",[t._v("简单快速")]),t._v("：客户向服务器请求服务时，只需传送请求方法和路径。请求方法常用的有GET、HEAD、POST。每种方法规定了客户与服务器联系的类型不同。由于HTTP协议简单，使得HTTP服务器的程序规模小，因而通信速度很快。")]),t._v(" "),v("li",[v("strong",[t._v("灵活")]),t._v("：HTTP允许传输任意类型的数据对象。正在传输的类型由 Content-Type 加以标记。")]),t._v(" "),v("li",[v("strong",[t._v("无连接")]),t._v("：限制每次连接只处理一个请求。服务器处理完客户的请求，并收到客户的应答后，即断开连接。采用这种方式可以节省传输时间。")]),t._v(" "),v("li",[v("strong",[t._v("无状态")]),t._v("：HTTP协议是无状态协议。无状态是指协议对于事务处理没有记忆能力。缺少状态意味着如果后续处理需要前面的信息，则它必须重传，这样可能导致每次连接传送的数据量增大。另一方面，在服务器不需要先前信息时它的应答就较快。")]),t._v(" "),v("li",[v("strong",[t._v("支持 B/S 及 C/S 模式")])])]),t._v(" "),v("h2",{attrs:{id:"_10-b-s-和-c-s-模式的区别"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_10-b-s-和-c-s-模式的区别"}},[t._v("#")]),t._v(" 10. B/S 和 C/S 模式的区别")]),t._v(" "),v("p",[t._v("B/S 是浏览器/服务器的英文缩写，是一种通过浏览器访问服务器端数据的软件形式，其特点是用户不用在本地安装软件，只要有一个浏览器即可使用产品，而且用户不用关心软件的升级更新等问题。到由于受限于网络等因素，这种模式的系统访问速度较慢。\nC/S 则是客户端/服务器的英文缩写，这类软件的使用者需要在本地电脑安装客户端程序，就像 QQ。其特点就是访问速度快，界面优雅。但一旦软件有更新，用户需要手动下载，较为不便。而且在没有安装客户端的电脑上，用户无法使用系统。")]),t._v(" "),v("ol",[v("li",[t._v("硬件环境不同\nC/S一般建立在小范围里的网络环境，局域网之间在通过专门服务器提供链接和数据交换服务。\nB/S 建立在广域网之上的，不必是专门的网络硬件环境，比如：电话上网，租用设备，信息自己管理有比 C/S 更强的适应范围，一般只要有操作系统和浏览器就行。")]),t._v(" "),v("li",[t._v("对安全要求不同\nC/S 一般建立在抓用的网络上，小范围里的网络环境，局域网之间在通过专门服务器提供链接和数据交换服务。\nB/S 建立在广域网之上的，不必是专门的网络硬件环境，比如：电话上网，租用设备，信息自己管理有比C/S更强的适应范围，一般只要有操作系统和浏览器就行")])]),t._v(" "),v("p",[v("img",{attrs:{src:"https://tva1.sinaimg.cn/large/008eGmZEly1gp9ub9dybfj31ii0beabc.jpg",alt:"image-20210323102219235"}})]),t._v(" "),v("h2",{attrs:{id:"_11-http-请求结构"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_11-http-请求结构"}},[t._v("#")]),t._v(" 11. HTTP 请求结构")]),t._v(" "),v("ul",[v("li",[t._v("请求行")]),t._v(" "),v("li",[t._v("请求头")]),t._v(" "),v("li",[t._v("请求数据")])]),t._v(" "),v("p",[v("img",{attrs:{src:"https://tva1.sinaimg.cn/large/008eGmZEly1gp9ubuuxtmj30eg053t8u.jpg",alt:"img"}})]),t._v(" "),v("h2",{attrs:{id:"_12-http-响应结构"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_12-http-响应结构"}},[t._v("#")]),t._v(" 12. HTTP 响应结构")]),t._v(" "),v("ul",[v("li",[t._v("响应行：协议/版本 + 状态码 + 描述")]),t._v(" "),v("li",[t._v("响应头")]),t._v(" "),v("li",[t._v("响应体")])]),t._v(" "),v("p",[v("img",{attrs:{src:"https://tva1.sinaimg.cn/large/008eGmZEly1gp9ui0t14cj30hh087jrw.jpg",alt:"这里写图片描述"}})]),t._v(" "),v("h2",{attrs:{id:"_13-http-状态码"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_13-http-状态码"}},[t._v("#")]),t._v(" 13. HTTP 状态码")]),t._v(" "),v("ul",[v("li",[t._v("1xx 消息——请求已被服务器接收，继续处理")]),t._v(" "),v("li",[t._v("2xx 成功——请求已成功被服务器接收、理解、并接受")]),t._v(" "),v("li",[t._v("3xx 重定向——需要后续操作才能完成这一请求")]),t._v(" "),v("li",[t._v("4xx 请求错误——请求含有词法错误或者无法被执行")]),t._v(" "),v("li",[t._v("5xx 服务器错误——服务器在处理某个正确请求时发生错误")])]),t._v(" "),v("p",[t._v("常见状态码")]),t._v(" "),v("ul",[v("li",[t._v("200 OK：正常返回信息")]),t._v(" "),v("li",[t._v("301：当前资源已经被删除了，重定向到另外一个位置，后面还是需要重定向。")]),t._v(" "),v("li",[t._v("302：当前资源暂时不可用，先重定向到另外一个位置，后面可能不需要重定向。")]),t._v(" "),v("li",[t._v("400 Bad Request：客户端请求有语法错误，不能为服务器所理解")]),t._v(" "),v("li",[t._v("401 Unauthorized：请求未经授权，这个状态码必须和 WWW-Authenticate 报头域一起使用（没认证）")]),t._v(" "),v("li",[t._v("403 Forbidden：服务器收到请求，但是拒绝提供服务（认证了但是没权限）")]),t._v(" "),v("li",[t._v("404 Not Found：请求资源不存在，一般是 URL 输错了")]),t._v(" "),v("li",[t._v("500 Internal Server Error：服务器发生不可预期的错误")]),t._v(" "),v("li",[t._v("503 Server Unavailable：服务器当前不能处理客户端的请求，一段时间后可能恢复正常")])]),t._v(" "),v("h2",{attrs:{id:"_14-浏览器输入一个-url-发生了什么"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_14-浏览器输入一个-url-发生了什么"}},[t._v("#")]),t._v(" 14. 浏览器输入一个 URL 发生了什么")]),t._v(" "),v("ol",[v("li",[v("p",[t._v("客户端连接到 Web 服务器\n一个 HTTP 客户端，通常是浏览器，与 Web 服务器的 HTTP 端口（默认为 80 ）建立一个 TCP 套接字连接。例如，"),v("a",{attrs:{href:"http://www.baidu.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://www.baidu.com"),v("OutboundLink")],1),t._v("。")])]),t._v(" "),v("li",[v("p",[t._v("发送 HTTP 请求\n通过 TCP 套接字，客户端向 Web 服务器发送一个文本的请求报文，一个请求报文由请求行、请求头部、空行和请求数据 4 部分组成。")])]),t._v(" "),v("li",[v("p",[t._v("服务器接受请求并返回 HTTP 响应\nWeb 服务器解析请求，定位请求资源。服务器将资源复本写到 TCP 套接字，由客户端读取。一个响应由状态行、响应头部、空行和响应数据 4 部分组成。")])]),t._v(" "),v("li",[v("p",[t._v("释放连接 TCP 连接\n若 connection 模式为 close，则服务器主动关闭 TCP 连接，客户端被动关闭连接，释放 TCP 连接；")]),t._v(" "),v("p",[t._v("若 connection 模式为 keepalive，则该连接会保持一段时间，在该时间内可以继续接收请求;")])]),t._v(" "),v("li",[v("p",[t._v("客户端浏览器解析 HTML 内容\n客户端浏览器首先解析状态行，查看表明请求是否成功的状态代码。然后解析每一个响应头，响应头告知以下为若干字节的 HTML 文档和文档的字符集。客户端浏览器读取响应数据 HTML，根据 HTML 的语法对其进行格式化，并在浏览器窗口中显示。")])])]),t._v(" "),v("h2",{attrs:{id:"_15-get-和-post-的区别"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_15-get-和-post-的区别"}},[t._v("#")]),t._v(" 15. GET 和 POST 的区别")]),t._v(" "),v("ol",[v("li",[t._v("HTTP 报文层面：GET 将请求信息放在 URL， POST 放在报文体中。")]),t._v(" "),v("li",[t._v("数据库层面：GET 符合幂等性和安全性（GET 是做查询操作），POST 不符合（POST 是修改）。")]),t._v(" "),v("li",[t._v("其他层面：GET 可以被缓存、被存储，而 POST 不行。")]),t._v(" "),v("li",[t._v("数据长度方面：GET 因为请求信息放在 URL，URL 具有长度限制，所以 GET 请求长度有限，而 POST 没有限制。")]),t._v(" "),v("li",[t._v("GET产生一个TCP数据包；POST产生两个TCP数据包（不同浏览器不同）\n"),v("ul",[v("li",[t._v("对于 GET 方式的请求，浏览器会把http header和data一并发送出去，服务器响应200（返回数据）；")]),t._v(" "),v("li",[t._v("而对于POST，浏览器先发送 header，服务器响应100 continue，浏览器再发送 data，服务器响应 200 ok（返回数据）。")])])]),t._v(" "),v("li",[t._v("安全性方面：get安全性非常低，post安全性较高。 但是如果没有加密，他们安全级别都是一样的，随便一个监听器都可以把所有的数据监听到。")])]),t._v(" "),v("h2",{attrs:{id:"_16-post-为什么发两次包"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_16-post-为什么发两次包"}},[t._v("#")]),t._v(" 16. POST 为什么发两次包")]),t._v(" "),v("p",[t._v("Post 请求发送一次还是两次，"),v("strong",[t._v("取决与浏览器自己的实现")]),t._v("，比如上传文件的场景，请求头中有文件的名字等信息，请求体是文件本身，如果文件很大就可以分别发送，先验证请求头，文件名等信息是否符合要求，如果不符合就没有必要发送请求体了。另外 Ajax是会分两次发送的，这是因为 Ajax 使用了 XMLHttpRequest API，浏览器会先发送请求头在发送请求体，但是火狐浏览器不会。 所以 Post 请求到底是发送一次还是两次，取决于浏览器的实现，不论一次还是两次都是符合标准的。")]),t._v(" "),v("h2",{attrs:{id:"_17-http1-0-和-http1-1-的区别"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_17-http1-0-和-http1-1-的区别"}},[t._v("#")]),t._v(" 17. HTTP1.0 和 HTTP1.1 的区别")]),t._v(" "),v("p",[t._v("① 持久与非持久")]),t._v(" "),v("p",[t._v("HTTP 1.0规定浏览器与服务器只保持短暂的连接，浏览器的每次请求都需要与服务器建立一个TCP连接，服务器完成请求处理后立即断开TCP连接，服务器不跟踪每个客户也不记录过去的请求。")]),t._v(" "),v("p",[t._v("HTTP 1.1则支持持久连接Persistent Connection, 并且默认使用persistent connection。在同一个tcp的连接中可以传送多个HTTP请求和响应。多个请求和响应可以重叠，多个请求和响应可以同时进行。")]),t._v(" "),v("p",[t._v("（但服务器端必须按照接收到客户端请求的先后顺序依次回送响应结果，以保证客户端能够区分出每次请求的响应内容。")]),t._v(" "),v("p",[t._v("② HTTP 1.1增加 host 字段")]),t._v(" "),v("p",[t._v("在HTTP1.0中认为每台服务器都绑定一个唯一的IP地址，因此，请求消息中的URL并没有传递主机名（hostname）。但随着虚拟主机技术的发展，在一台物理服务器上可以存在多个虚拟主机（Multi-homed Web Servers），并且它们共享一个IP地址。")]),t._v(" "),v("p",[t._v("HTTP1.1的请求消息和响应消息都应支持Host头域，且请求消息中如果没有Host头域会报告一个错误（400 Bad Request）。此外，服务器应该接受以绝对路径标记的资源请求。")]),t._v(" "),v("h2",{attrs:{id:"_18-http1-x-和-http2-x-的区别"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_18-http1-x-和-http2-x-的区别"}},[t._v("#")]),t._v(" 18. HTTP1.X 和 HTTP2.X 的区别")]),t._v(" "),v("p",[t._v("① 相比于 HTTP/1.X 的文本（字符串）传送， HTTP/2.0 采用二进制传送。客户端和服务器传输数据时把数据分成帧，帧组成了数据流，流具有流 ID 标识和优先级，通过优先级以及流依赖能够一定程度上解决关键请求被阻塞的问题。")]),t._v(" "),v("p",[t._v("② HTTP/2.0 支持多路复用。因为流 ID 的存在， 通过同一个 HTTP 请求可以实现多个 HTTP 请求传输，客户端和服务器可以通过流 ID 来标识究竟是哪个流从而定位到是哪个 HTTP 请求。")]),t._v(" "),v("p",[t._v("③ HTTP/2.0 头部压缩。HTTP/2.0 通过 gzip 和 compress 压缩头部然后再发送，同时通信双方会维护一张头信息表，所有字段都记录在这张表中，在每次 HTTP 传输时只需要传头字段在表中的索引即可，大大减小了重传次数和数据量。")]),t._v(" "),v("p",[t._v("④ HTTP/2.0 支持服务器推送。 服务器在客户端未经请求许可的情况下，可预先向客户端推送需要的内容，客户端在退出服务时可通过发送复位相关的请求来取消服务端的推送。")]),t._v(" "),v("h2",{attrs:{id:"_19-如何判定-http-请求的结束"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_19-如何判定-http-请求的结束"}},[t._v("#")]),t._v(" 19. 如何判定 HTTP 请求的结束")]),t._v(" "),v("p",[t._v("① 如果是短连接，没有启用 keepalive，则可以通过是否关闭了连接来判断是否传输结束，即在读取时可判断 read() != -1。")]),t._v(" "),v("p",[t._v("② 如果是长连接的话，先把header直到\\r\\n\\r\\n整个地收下来。")]),t._v(" "),v("p",[t._v("然后看Content-length 是否有：")]),t._v(" "),v("ul",[v("li",[t._v("如果有了，那就读取 Content-length 长度的字节数据，读完就结束了。")]),t._v(" "),v("li",[t._v("如果没有 Content-length，那么 x 类型为Transfer-Encoding: chunked 说明响应数据的长度不固定，就读到 \\r\\n0\\r\\n 表示结束。")])]),t._v(" "),v("p",[t._v("补充："),v("strong",[t._v("头结束符定义")]),t._v('：包含这"\\r\\n\\r\\n" 四个字节是指头结束\n　　　　\t\t\t\t如果头数据里包含Content-Length: x 就读取x字节数据，知道http响应数据的长度为x\n　　　　\t\t\t\t如果头数据里不包含Content-Length: x 类型为Transfer-Encoding: chunked 说明响应数据的长度不固定，结束符已"\\r\\n0\\r\\n"这5个字节为结束符。')]),t._v(" "),v("h2",{attrs:{id:"_20-cookie-和-session-的区别"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_20-cookie-和-session-的区别"}},[t._v("#")]),t._v(" 20. cookie 和 session 的区别")]),t._v(" "),v("ol",[v("li",[t._v("cookie数据存放在客户的浏览器上，session数据放在服务器上；")]),t._v(" "),v("li",[t._v("cookie 不是很安全，别人可以分析存放在本地的 COOKIE 并进行COOKIE欺骗,如果主要考虑到安全应当使用session；")]),t._v(" "),v("li",[t._v("session 会在一定时间内保存在服务器上。当访问增多，会比较占用你服务器的性能，如果主要考虑到减轻服务器性能方面，应当使用 COOKIE；")]),t._v(" "),v("li",[t._v("单个 cookie 在客户端的限制是 3K，就是说一个站点在客户端存放的 COOKIE 不能 3K；而 session 则存储与服务端，浏览器对其没有限制。所以将登陆信息等重要信息存放为 SESSION ;其他信息如果需要保留可以放在 COOKIE 中。")])]),t._v(" "),v("h2",{attrs:{id:"_21-token、session、cookie-的区别"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_21-token、session、cookie-的区别"}},[t._v("#")]),t._v(" 21. token、session、cookie 的区别")]),t._v(" "),v("p",[t._v("session 和 oauth token并不矛盾，作为身份认证  token 安全性比 session 好，因为每个请求都有签名还能防止监听以及重放攻击，而session 就必须靠链路层来保障通讯安全了。")]),t._v(" "),v("p",[t._v("如果你需要实现有状态的会话，仍然可以增加 session 来在服务器端保存一些状态")]),t._v(" "),v("p",[t._v("App 通常用 restful api 跟 server 打交道。Rest 是 stateless 的，也就是 app 不需要像 browser 那样用 cookie 来保存 session。因此用session token 来标示自己就够了，session/state 由 api server 的逻辑处理。 如果你的后端不是 stateless 的 rest api, 那么你可能需要在app 里保存session。可以在app里嵌入 webkit，用一个隐藏的 browser 来管理 cookie session。")]),t._v(" "),v("p",[t._v("Session 是一种 HTTP 存储机制，目的是为无状态的 HTTP 提供的持久机制。所谓 Session 认证只是简单的把 User 信息存储到 Session 里，因为 SID 的不可预测性，暂且认为是安全的。这是一种认证手段。")]),t._v(" "),v("p",[t._v("而 Token ，如果指的是 OAuth Token 或类似的机制的话，提供的是"),v("strong",[t._v("认证")]),t._v("和"),v("strong",[t._v("授权")]),t._v(" ，认证是针对用户，授权是针对 App 。其目的是让某 App 有权利访问某用 的信息。这里的 Token 是唯一的。不可以转移到其它 App上，也不可以转到其它用户上。")]),t._v(" "),v("p",[t._v("转过来说 Session 。Session 只提供一种简单的认证，即有此 SID，即认为有此 User 的全部权利。是需要严格保密的，这个数据应该只保存在站方，不应该共享给其它网站或者第三方 App。")]),t._v(" "),v("p",[t._v("所以简单来说，如果你的用户数据可能需要和第三方共享，或者允许第三方调用 API 接口，用 Token 。如果永远只是自己的网站，自己的 App，用什么就无所谓了。")]),t._v(" "),v("p",[t._v("Token 就是令牌，比如你授权（登录）一个程序时，他就是个依据，判断你是否已经授权该软件；Cookie 就是写在客户端的一个 txt 文件，里面包括你登录信息之类的，这样你下次在登录某个网站，就会自动调用 cookie 自动登录用户名；session 和 cookie差不多，只是session 是写在服务器端的文件，也需要在客户端写入 cookie 文件，但是文件里是你的浏览器编号。Session的状态是存储在服务器端，客户端只有 session id；而 Token 的状态是存储在客户端。")]),t._v(" "),v("div",{staticClass:"language-markdown extra-class"},[v("pre",{pre:!0,attrs:{class:"language-markdown"}},[v("code",[v("span",{pre:!0,attrs:{class:"token title important"}},[v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("#")]),t._v(" 简单点说")]),t._v("\nCookie 和 Token 都是放在客户端的，Cookie 只是一种存储信息的东西，而 Token 是可以定制化的存储用户的信息，协助 OAuth2 进行认证和授权等操作。\nSession 是放在服务器端的，它可以保存服务器的一些状态。\n事实上我们使用 Token 来实现认证授权功能的时候一般是将 token 存放在 cookie，或者将 token 存放在 session。\n")])])]),v("h2",{attrs:{id:"_22-https-原理"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_22-https-原理"}},[t._v("#")]),t._v(" 22. HTTPS 原理")]),t._v(" "),v("ul",[v("li",[t._v("浏览器将支持的加密算法信息发送给服务器。")]),t._v(" "),v("li",[t._v("服务器选择一套浏览器支持的加密算法，以证书的形式回发浏览器。")]),t._v(" "),v("li",[t._v("浏览器验证证书合法性，并结合证书公钥加密信息发送给服务器。")]),t._v(" "),v("li",[t._v("服务器使用私钥解密信息，验证哈希，加密响应信息回发浏览器。")]),t._v(" "),v("li",[t._v("浏览器解密响应信息，并对消息进行验真，之后进行加密交互数据。")])]),t._v(" "),v("p",[v("img",{attrs:{src:"https://tva1.sinaimg.cn/large/008eGmZEly1gp9ve7ti27j30wa0u0tr3.jpg",alt:"image-20210406113715688"}})]),t._v(" "),v("p",[t._v("①证书验证阶段")]),t._v(" "),v("ol",[v("li",[t._v("浏览器发起HTTPS 请求")]),t._v(" "),v("li",[t._v("服务端返回HTTPS 证书")]),t._v(" "),v("li",[t._v("客户端验证证书是否合法，如果不合法则提示告警")])]),t._v(" "),v("p",[t._v("②数据传输阶段")]),t._v(" "),v("ol",[v("li",[t._v("当证书验证合法后，在本地生成随机数")]),t._v(" "),v("li",[t._v("通过公钥加密随机数，并把加密后的随机数传输到服务端")]),t._v(" "),v("li",[t._v("服务端通过私钥对随机数进行解密")]),t._v(" "),v("li",[t._v("服务端通过客户端传入的随机数构造对称加密算法，对返回结果内容进行加密后传输")])]),t._v(" "),v("h2",{attrs:{id:"_23-为什么数据传输是用对称加密"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_23-为什么数据传输是用对称加密"}},[t._v("#")]),t._v(" 23. 为什么数据传输是用对称加密？")]),t._v(" "),v("p",[t._v("首先，非对称加密的加解密效率是非常低的，而 HTTP 的应用场景中通常端与端之间存在大量的交互，非对称加密的效率是无法接受的；")]),t._v(" "),v("p",[t._v("另外，在 HTTPS 的场景中只有服务端保存了私钥，一对公私钥只能实现单向的加解密，所以 HTTPS 中内容传输加密采取的是对称加密，而不是非对称加密。")]),t._v(" "),v("h2",{attrs:{id:"_24-https-的加密具体分析"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_24-https-的加密具体分析"}},[t._v("#")]),t._v(" 24. HTTPS 的加密具体分析")]),t._v(" "),v("blockquote",[v("p",[t._v("参考：http://www.itcast.cn/news/20200729/1516328866.shtml")])]),t._v(" "),v("h5",{attrs:{id:"不加密"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#不加密"}},[t._v("#")]),t._v(" 不加密")]),t._v(" "),v("p",[t._v("有关于加密，我们首先来看一下不加密的情况，一般在计算机中，不加密我们成为'裸奔'。如果数据不加密，则很容易被黑客窃取到。如下图所示：")]),t._v(" "),v("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://tva1.sinaimg.cn/large/008eGmZEly1gp9vnf92qoj30dj0d474j.jpg",alt:"1594805804748_https01.jpg"}}),t._v(" "),v("h5",{attrs:{id:"对称加密"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#对称加密"}},[t._v("#")]),t._v(" 对称加密")]),t._v(" "),v("p",[t._v("所以针对这样的情况，我们应该在数据传输的过程中进行对应的加密，那么问题来了，我们应该选择哪种加密方式呢?我们知道:常见的加密方式有对称加密和非对称加密之分，例如我们这里选择"),v("strong",[t._v("对称加密")]),t._v("的形式。则如下图所示：")]),t._v(" "),v("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://tva1.sinaimg.cn/large/008eGmZEly1gp9vnxod2hj30iw0m1dgm.jpg",alt:"1594805818673_https02.jpg"}}),t._v(" "),v("p",[t._v("我们可以把 data 数据，配合秘钥，进行 f() 函数运算，进而得到密文：XXX，再把 XXX 传递到服务器端，从而使数据的传输进行加密，但是这样也面临一些对应的问题，我们知道，对称加密的秘钥是由后端生成的，但是该"),v("strong",[t._v("秘钥往往只有一个")]),t._v("，因为后端不可能为每一个人设置一个秘钥，否则后端存储的秘钥就太多了。既然秘钥只有一个，那么前端想要解密就需要获取该秘钥。这也就是不安全的地方了。因为黑客也可以伪装成良民(普通的客户端)，拿取到对应的秘钥，从而对获取的数据进行解密处理。所以对称加密的方式其实是不安全的。虽然进行了加密但是黑客可以很容易就进行解密。")]),t._v(" "),v("h5",{attrs:{id:"非对称加密"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#非对称加密"}},[t._v("#")]),t._v(" 非对称加密")]),t._v(" "),v("p",[t._v("对称加密这么不安全，那么非对称加密呢?是不是非常安全。接下来让我们一起来看一下:")]),t._v(" "),v("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://tva1.sinaimg.cn/large/008eGmZEly1gp9vot9y0hj30iw0k8gmt.jpg",alt:"1594805843908_https03.jpg"}}),t._v(" "),v("p",[t._v("从上图我们可以知道，使用非对称加密有两种加密方式："),v("code",[t._v("公钥加密，私钥解密")]),t._v("，"),v("code",[t._v("私钥加密，公钥解密")]),t._v("。")]),t._v(" "),v("p",[t._v("一开始服务端生成一对公私钥(pk，sk)。我们要想进行密文通讯，需要客户端获取对应的公钥(pk)。所以客户端会发送请求，请求公钥。客户端获取到pk后，会把数据放到 f() 方法中进行对应的加密，所用的秘钥就是刚刚获取的 pk。加密后得到的 XXX 就是密文。所以我们可以把数据传输给服务器端。")]),t._v(" "),v("p",[t._v("这个时候，如果黑客截取了对应的 XXX 数据，黑客将没法获取对应的明文数据，因为他没有获取对应的公钥 (pk)。")]),t._v(" "),v("p",[t._v("但是非对称加密的缺点来了："),v("strong",[t._v("如果服务端想要给客户端传递数据")]),t._v("，也需要加密该怎么办呢？如果使用私钥加密，把加密的字段 YYY 传输给客户端，看似没有问题，但是细细想一下，我们就会知道黑客也是可以充当良民从而获取公钥(pk)的。也就是说，只要是使用私钥(sk)加密的方法，黑客都可以对其进行解密。")]),t._v(" "),v("p",[v("font",{attrs:{color:"pink"}},[t._v("所以：非对称加密解决了客户端->服务器数据的安全性，但是没有解决服务器->客户端的安全性。")])],1),t._v(" "),v("p",[t._v("总结发现：单独使用对称加密，不安全，单独使用非对称加密，也不安全。那么应该怎么解决呢?")]),t._v(" "),v("h5",{attrs:{id:"证书验证用非对称-数据传输用对称"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#证书验证用非对称-数据传输用对称"}},[t._v("#")]),t._v(" 证书验证用非对称，数据传输用对称")]),t._v(" "),v("p",[v("img",{attrs:{src:"https://tva1.sinaimg.cn/large/008eGmZEly1gp9vmudvwyj30iw0ghdgp.jpg",alt:"1594805870201_https04.jpg"}})]),t._v(" "),v("p",[t._v("通过上面的图片，我们知道，先通过请求，获取服务端的 pk，拿到之后，我们可以在客户端随机产生一个 key，然后通过 f(pk，key)=XXX 的方式，把 XXX 传输给服务端，这样服务端就可以通过私钥 (sk) 对 XXX 进行解密，从而得到 key。以后我们就可以通过key，作为秘钥，进行对称加密了。")]),t._v(" "),v("p",[t._v("这样的方式是非常棒的。通过这样的方式我们会觉得数据是非常安全的。")]),t._v(" "),v("p",[t._v("但是真的安全吗?")]),t._v(" "),v("p",[t._v("其实是不对的，如果我们设想一下。黑客如果从最开始就对我们的通讯进行了监听。那么我们获取公钥的过程也会被监听到。而我们知道，非对称加密的公钥(pk)，黑客也是可以获取的。"),v("strong",[t._v("所以一旦公钥泄露")]),t._v("。key 就会泄露，key泄露，则后面的全部对称加密都称不上是安全的。所以后面很安全，但是如何保证 pk 的传输也是安全的就至关重要了。")]),t._v(" "),v("h5",{attrs:{id:"ca-辅助"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#ca-辅助"}},[t._v("#")]),t._v(" CA 辅助")]),t._v(" "),v("p",[v("img",{attrs:{src:"https://tva1.sinaimg.cn/large/008eGmZEly1gp9vt3wlbgj30iw0dz0tt.jpg",alt:"1594805912331_https05.jpg"}})]),t._v(" "),v("p",[v("code",[t._v("CA机构")]),t._v("是一种信用机构。主要靠信用赚钱，一般来说都是全球的大型机构。这类机构也会有自己的公钥(cpk)和私钥(csk)，可以使用csk对于pk公钥进行加密，从而得到证书，我们可以把证书传递给前端，让前端利用浏览器内部自带的公钥(cpk)对证书进行解密，如果解密成功，则可以获取到pk，随后再利用pk对前端生成的key进行加密。重复之前的步骤。")]),t._v(" "),v("h2",{attrs:{id:"_24-为什么需要-ca-认证机构颁发证书"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_24-为什么需要-ca-认证机构颁发证书"}},[t._v("#")]),t._v(" 24. 为什么需要 CA 认证机构颁发证书？")]),t._v(" "),v("blockquote",[v("p",[v("code",[t._v("CA")]),t._v("使用私钥对证书进行了数字签名，防止中间人进行篡改。")])]),t._v(" "),v("p",[t._v("HTTP 协议被认为不安全是因为传输过程容易被监听者勾线监听、伪造服务器，而 HTTPS 协议主要解决的便是网络传输的安全性问题。")]),t._v(" "),v("p",[t._v("首先我们假设不存在认证机构，任何人都可以制作证书，这带来的安全风险便是经典的“中间人攻击”问题。")]),t._v(" "),v("p",[v("img",{attrs:{src:"https://tva1.sinaimg.cn/large/008eGmZEly1gp9vux0ujhj30u40cwwja.jpg",alt:"img"}})]),t._v(" "),v("p",[t._v("如上图所以，过程原理如下：")]),t._v(" "),v("ul",[v("li",[t._v("1）本地请求被劫持（如DNS劫持等），所有请求均发送到中间人的服务器；")]),t._v(" "),v("li",[t._v("2）中间人服务器返回中间人自己的证书；")]),t._v(" "),v("li",[t._v("3）客户端创建随机数，通过中间人证书的公钥对随机数加密后传送给中间人，然后凭随机数构造对称加密对传输内容进行加密传输；")]),t._v(" "),v("li",[t._v("4）中间人因为拥有客户端的随机数，可以通过对称加密算法进行内容解密；")]),t._v(" "),v("li",[t._v("5）中间人以客户端的请求内容再向正规网站发起请求；")]),t._v(" "),v("li",[t._v("6）因为中间人与服务器的通信过程是合法的，正规网站通过建立的安全通道返回加密后的数据；")]),t._v(" "),v("li",[t._v("7）中间人凭借与正规网站建立的对称加密算法对内容进行解密；")]),t._v(" "),v("li",[t._v("8）中间人通过与客户端建立的对称加密算法对正规内容返回的数据进行加密传输；")]),t._v(" "),v("li",[t._v("9）客户端通过与中间人建立的对称加密算法对返回结果数据进行解密。")])]),t._v(" "),v("p",[t._v("由于缺少对证书的验证，所以客户端虽然发起的是 HTTPS 请求，但客户端完全不知道自己的网络已被拦截，传输内容被中间人全部窃取。")]),t._v(" "),v("h2",{attrs:{id:"_25-http-和-https-的区别"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_25-http-和-https-的区别"}},[t._v("#")]),t._v(" 25. HTTP 和 HTTPS 的区别")]),t._v(" "),v("ol",[v("li",[t._v("HTTPS 协议需要到 CA （Certificate Authority，证书颁发机构）申请证书，一般免费证书较少，因而需要一定费用。")]),t._v(" "),v("li",[t._v("HTTP 是超文本传输协议，信息是明文传输，HTTPS 则是具有安全性的 SSL 加密传输协议。")]),t._v(" "),v("li",[t._v("HTTP 和 HTTPS 使用的是完全不同的连接方式，用的端口也不一样，前者是 80，后者是 443。")]),t._v(" "),v("li",[t._v("HTTP 的连接很简单，是无状态的。HTTPS 协议是由 SSL+HTTP 协议构建的可进行加密传输、身份认证的网络协议，比 HTTP 协议安全。(无状态的意思是其数据包的发送、传输和接收都是相互独立的。无连接的意思是指通信双方都不长久的维持对方的任何信息。)")])]),t._v(" "),v("h2",{attrs:{id:"_26-http3-有了解过吗"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_26-http3-有了解过吗"}},[t._v("#")]),t._v(" 26. HTTP3 有了解过吗？")]),t._v(" "),v("p",[v("a",{attrs:{href:"https://mp.weixin.qq.com/s/rocyGk16fTOV8sL0_kitEQ",target:"_blank",rel:"noopener noreferrer"}},[t._v("HTTP 3.0彻底放弃TCP，TCP到底做错了什么？"),v("OutboundLink")],1)]),t._v(" "),v("Vssue")],1)}),[],!1,null,null,null);_.default=e.exports}}]);
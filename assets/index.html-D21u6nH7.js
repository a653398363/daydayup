import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as s,o as p,c as o,b as e,e as a,w as l,a as r,d as n}from"./app-R7pVbBlq.js";const h="/assets/tGPV0-BwJJJ8du.png",c="/assets/2_14_microkernelArchitecture-DCOut_na.jpg",d={},m=r('<h1 id="计算机操作系统-概述" tabindex="-1"><a class="header-anchor" href="#计算机操作系统-概述"><span>计算机操作系统 - 概述</span></a></h1><h2 id="基本特征" tabindex="-1"><a class="header-anchor" href="#基本特征"><span>基本特征</span></a></h2><h3 id="_1-并发" tabindex="-1"><a class="header-anchor" href="#_1-并发"><span>1. 并发</span></a></h3><p>并发是指宏观上在一段时间内能同时运行多个程序，而并行则指同一时刻能运行多个指令。</p><p>并行需要硬件支持，如多流水线、多核处理器或者分布式计算系统。</p><p>操作系统通过引入进程和线程，使得程序能够并发运行。</p><h3 id="_2-共享" tabindex="-1"><a class="header-anchor" href="#_2-共享"><span>2. 共享</span></a></h3><p>共享是指系统中的资源可以被多个并发进程共同使用。</p><p>有两种共享方式：互斥共享和同时共享。</p><p>互斥共享的资源称为临界资源，例如打印机等，在同一时刻只允许一个进程访问，需要用同步机制来实现互斥访问。</p><h3 id="_3-虚拟" tabindex="-1"><a class="header-anchor" href="#_3-虚拟"><span>3. 虚拟</span></a></h3><p>虚拟技术把一个物理实体转换为多个逻辑实体。</p><p>主要有两种虚拟技术：时（时间）分复用技术和空（空间）分复用技术。</p><p>多个进程能在同一个处理器上并发执行使用了时分复用技术，让每个进程轮流占用处理器，每次只执行一小个时间片并快速切换。</p><p>虚拟内存使用了空分复用技术，它将物理内存抽象为地址空间，每个进程都有各自的地址空间。地址空间的页被映射到物理内存，地址空间的页并不需要全部在物理内存中，当使用到一个没有在物理内存的页时，执行页面置换算法，将该页置换到内存中。</p><h3 id="_4-异步" tabindex="-1"><a class="header-anchor" href="#_4-异步"><span>4. 异步</span></a></h3><p>异步指进程不是一次性执行完毕，而是走走停停，以不可知的速度向前推进。</p><h2 id="基本功能" tabindex="-1"><a class="header-anchor" href="#基本功能"><span>基本功能</span></a></h2><h3 id="_1-进程管理" tabindex="-1"><a class="header-anchor" href="#_1-进程管理"><span>1. 进程管理</span></a></h3><p>进程控制、进程同步、进程通信、死锁处理、处理机调度等。</p><h3 id="_2-内存管理" tabindex="-1"><a class="header-anchor" href="#_2-内存管理"><span>2. 内存管理</span></a></h3><p>内存分配、地址映射、内存保护与共享、虚拟内存等。</p><h3 id="_3-文件管理" tabindex="-1"><a class="header-anchor" href="#_3-文件管理"><span>3. 文件管理</span></a></h3><p>文件存储空间的管理、目录管理、文件读写管理和保护等。</p><h3 id="_4-设备管理" tabindex="-1"><a class="header-anchor" href="#_4-设备管理"><span>4. 设备管理</span></a></h3><p>完成用户的 I/O 请求，方便用户使用各种设备，并提高设备的利用率。</p><p>主要包括缓冲管理、设备分配、设备处理、虛拟设备等。</p><h2 id="系统调用" tabindex="-1"><a class="header-anchor" href="#系统调用"><span>系统调用</span></a></h2><p>如果一个进程在用户态需要使用内核态的功能，就进行系统调用从而陷入内核，由操作系统代为完成。</p><div align="center"><img src="'+h+'" width="600"></div><br><p>Linux 的系统调用主要有以下这些：</p><table><thead><tr><th style="text-align:center;">Task</th><th>Commands</th></tr></thead><tbody><tr><td style="text-align:center;">进程控制</td><td>fork(); exit(); wait();</td></tr><tr><td style="text-align:center;">进程通信</td><td>pipe(); shmget(); mmap();</td></tr><tr><td style="text-align:center;">文件操作</td><td>open(); read(); write();</td></tr><tr><td style="text-align:center;">设备操作</td><td>ioctl(); read(); write();</td></tr><tr><td style="text-align:center;">信息维护</td><td>getpid(); alarm(); sleep();</td></tr><tr><td style="text-align:center;">安全</td><td>chmod(); umask(); chown();</td></tr></tbody></table><h2 id="宏内核和微内核" tabindex="-1"><a class="header-anchor" href="#宏内核和微内核"><span>宏内核和微内核</span></a></h2><h3 id="_1-宏内核" tabindex="-1"><a class="header-anchor" href="#_1-宏内核"><span>1. 宏内核</span></a></h3><p>宏内核是将操作系统功能作为一个紧密结合的整体放到内核。</p><p>由于各模块共享信息，因此有很高的性能。</p><h3 id="_2-微内核" tabindex="-1"><a class="header-anchor" href="#_2-微内核"><span>2. 微内核</span></a></h3><p>由于操作系统不断复杂，因此将一部分操作系统功能移出内核，从而降低内核的复杂性。移出的部分根据分层的原则划分成若干服务，相互独立。</p><p>在微内核结构下，操作系统被划分成小的、定义良好的模块，只有微内核这一个模块运行在内核态，其余模块运行在用户态。</p><p>因为需要频繁地在用户态和核心态之间进行切换，所以会有一定的性能损失。</p><div align="center"><img src="'+c+'"></div><br><h2 id="中断分类" tabindex="-1"><a class="header-anchor" href="#中断分类"><span>中断分类</span></a></h2><h3 id="_1-外中断" tabindex="-1"><a class="header-anchor" href="#_1-外中断"><span>1. 外中断</span></a></h3><p>由 CPU 执行指令以外的事件引起，如 I/O 完成中断，表示设备输入/输出处理已经完成，处理器能够发送下一个输入/输出请求。此外还有时钟中断、控制台中断等。</p><h3 id="_2-异常" tabindex="-1"><a class="header-anchor" href="#_2-异常"><span>2. 异常</span></a></h3><p>由 CPU 执行指令的内部事件引起，如非法操作码、地址越界、算术溢出等。</p><h3 id="_3-陷入" tabindex="-1"><a class="header-anchor" href="#_3-陷入"><span>3. 陷入</span></a></h3><p>在用户程序中使用系统调用。</p><h2 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料"><span>参考资料</span></a></h2>',51),_=r('<li><p>Tanenbaum A S, Bos H. Modern operating systems[M]. Prentice Hall Press, 2014.</p></li><li><p>汤子瀛, 哲凤屏, 汤小丹. 计算机操作系统[M]. 西安电子科技大学出版社, 2001.</p></li><li><p>Bryant, R. E., &amp; O’Hallaron, D. R. (2004). 深入理解计算机系统.</p></li><li><p>史蒂文斯. UNIX 环境高级编程 [M]. 人民邮电出版社, 2014.</p></li><li><p><a href="https://applied-programming.github.io/Operating-Systems-Notes/" target="_blank" rel="noopener noreferrer">Operating System Notes</a></p></li><li><p><a href="https://www.cs.uic.edu/~jbell/CourseNotes/OperatingSystems/2_Structures.html" target="_blank" rel="noopener noreferrer">Operating-System Structures</a></p></li><li><p><a href="http://cse.csusb.edu/tongyu/courses/cs460/notes/process.php" target="_blank" rel="noopener noreferrer">Processes</a></p></li><li><p><a href="https://www.slideshare.net/rkolahalam/inter-process-communication-presentation1" target="_blank" rel="noopener noreferrer">Inter Process Communication Presentation[1]</a></p></li><li><p><a href="https://blogs.cisco.com/datacenter/decoding-ucs-invicta-part-1" target="_blank" rel="noopener noreferrer">Decoding UCS Invicta – Part 1</a></p></li>',9);function u(E,g){const t=s("RouteLink");return p(),o("div",null,[m,e("ul",null,[e("li",null,[e("p",null,[a(t,{to:"/computer/os/%E8%AE%A1%E7%AE%97%E6%9C%BA%E6%93%8D%E4%BD%9C%E7%B3%BB%E7%BB%9F%20-%20%E6%A6%82%E8%BF%B0.html"},{default:l(()=>[n("概述")]),_:1})])]),e("li",null,[e("p",null,[a(t,{to:"/computer/os/%E8%AE%A1%E7%AE%97%E6%9C%BA%E6%93%8D%E4%BD%9C%E7%B3%BB%E7%BB%9F%20-%20%E8%BF%9B%E7%A8%8B%E7%AE%A1%E7%90%86.html"},{default:l(()=>[n("进程管理")]),_:1})])]),e("li",null,[e("p",null,[a(t,{to:"/computer/os/%E8%AE%A1%E7%AE%97%E6%9C%BA%E6%93%8D%E4%BD%9C%E7%B3%BB%E7%BB%9F%20-%20%E6%AD%BB%E9%94%81.html"},{default:l(()=>[n("死锁")]),_:1})])]),e("li",null,[e("p",null,[a(t,{to:"/computer/os/%E8%AE%A1%E7%AE%97%E6%9C%BA%E6%93%8D%E4%BD%9C%E7%B3%BB%E7%BB%9F%20-%20%E5%86%85%E5%AD%98%E7%AE%A1%E7%90%86.html"},{default:l(()=>[n("内存管理")]),_:1})])]),e("li",null,[e("p",null,[a(t,{to:"/computer/os/%E8%AE%A1%E7%AE%97%E6%9C%BA%E6%93%8D%E4%BD%9C%E7%B3%BB%E7%BB%9F%20-%20%E8%AE%BE%E5%A4%87%E7%AE%A1%E7%90%86.html"},{default:l(()=>[n("设备管理")]),_:1})])]),e("li",null,[e("p",null,[a(t,{to:"/computer/os/%E8%AE%A1%E7%AE%97%E6%9C%BA%E6%93%8D%E4%BD%9C%E7%B3%BB%E7%BB%9F%20-%20%E9%93%BE%E6%8E%A5.html"},{default:l(()=>[n("链接")]),_:1})])]),_])])}const b=i(d,[["render",u],["__file","index.html.vue"]]),A=JSON.parse('{"path":"/computer/os/","title":"计算机操作系统 - 概述","lang":"zh-CN","frontmatter":{"description":"计算机操作系统 - 概述 基本特征 1. 并发 并发是指宏观上在一段时间内能同时运行多个程序，而并行则指同一时刻能运行多个指令。 并行需要硬件支持，如多流水线、多核处理器或者分布式计算系统。 操作系统通过引入进程和线程，使得程序能够并发运行。 2. 共享 共享是指系统中的资源可以被多个并发进程共同使用。 有两种共享方式：互斥共享和同时共享。 互斥共享的...","head":[["meta",{"property":"og:url","content":"https://lfange.github.io/computer/os/"}],["meta",{"property":"og:site_name","content":"哓番茄"}],["meta",{"property":"og:title","content":"计算机操作系统 - 概述"}],["meta",{"property":"og:description","content":"计算机操作系统 - 概述 基本特征 1. 并发 并发是指宏观上在一段时间内能同时运行多个程序，而并行则指同一时刻能运行多个指令。 并行需要硬件支持，如多流水线、多核处理器或者分布式计算系统。 操作系统通过引入进程和线程，使得程序能够并发运行。 2. 共享 共享是指系统中的资源可以被多个并发进程共同使用。 有两种共享方式：互斥共享和同时共享。 互斥共享的..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-09-21T05:57:49.000Z"}],["meta",{"property":"article:author","content":"哓番茄"}],["meta",{"property":"article:modified_time","content":"2023-09-21T05:57:49.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"计算机操作系统 - 概述\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-09-21T05:57:49.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"哓番茄\\",\\"url\\":\\"https://lfange.github.io/\\"}]}"]]},"headers":[{"level":2,"title":"基本特征","slug":"基本特征","link":"#基本特征","children":[{"level":3,"title":"1. 并发","slug":"_1-并发","link":"#_1-并发","children":[]},{"level":3,"title":"2. 共享","slug":"_2-共享","link":"#_2-共享","children":[]},{"level":3,"title":"3. 虚拟","slug":"_3-虚拟","link":"#_3-虚拟","children":[]},{"level":3,"title":"4. 异步","slug":"_4-异步","link":"#_4-异步","children":[]}]},{"level":2,"title":"基本功能","slug":"基本功能","link":"#基本功能","children":[{"level":3,"title":"1. 进程管理","slug":"_1-进程管理","link":"#_1-进程管理","children":[]},{"level":3,"title":"2. 内存管理","slug":"_2-内存管理","link":"#_2-内存管理","children":[]},{"level":3,"title":"3. 文件管理","slug":"_3-文件管理","link":"#_3-文件管理","children":[]},{"level":3,"title":"4. 设备管理","slug":"_4-设备管理","link":"#_4-设备管理","children":[]}]},{"level":2,"title":"系统调用","slug":"系统调用","link":"#系统调用","children":[]},{"level":2,"title":"宏内核和微内核","slug":"宏内核和微内核","link":"#宏内核和微内核","children":[{"level":3,"title":"1. 宏内核","slug":"_1-宏内核","link":"#_1-宏内核","children":[]},{"level":3,"title":"2. 微内核","slug":"_2-微内核","link":"#_2-微内核","children":[]}]},{"level":2,"title":"中断分类","slug":"中断分类","link":"#中断分类","children":[{"level":3,"title":"1. 外中断","slug":"_1-外中断","link":"#_1-外中断","children":[]},{"level":3,"title":"2. 异常","slug":"_2-异常","link":"#_2-异常","children":[]},{"level":3,"title":"3. 陷入","slug":"_3-陷入","link":"#_3-陷入","children":[]}]},{"level":2,"title":"参考资料","slug":"参考资料","link":"#参考资料","children":[]}],"git":{"createdTime":1661431418000,"updatedTime":1695275869000,"contributors":[{"name":"lfange","email":"653398363@qq.com","commits":2},{"name":"FanGe","email":"653398363@qq.com","commits":1},{"name":"哓番茄","email":"30554223+lfange@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":4.11,"words":1234},"filePathRelative":"computer/os/README.md","localizedDate":"2022年8月25日","excerpt":"","autoDesc":true}');export{b as comp,A as data};

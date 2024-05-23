import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as s,c as a,a as e}from"./app-R7pVbBlq.js";const t="/assets/performace-CcK4xqm4.png",p="/assets/gzbuild-CXMJjXr9.png",o="/assets/resgz-BbM3B2sf.png",i={},l=e('<h1 id="spa-优化" tabindex="-1"><a class="header-anchor" href="#spa-优化"><span>SPA 优化</span></a></h1><p>减少首屏渲染时间的方法有很多，总的来讲可以分成两大部分 ：<strong>资源加载优化</strong> 和 <strong>页面渲染优化</strong></p><p><img src="'+t+`" alt="" loading="lazy"></p><h2 id="首屏加载" tabindex="-1"><a class="header-anchor" href="#首屏加载"><span>首屏加载</span></a></h2><p><strong>首屏时间（First Contentful Paint）</strong>，指的是浏览器从响应用户输入网址地址，到首屏内容渲染完成的时间，此时整个网页不一定要全部渲染完成，但需要展示当前视窗需要的内容</p><p>通过 DOMContentLoad 或者 performance 来计算出首屏时间</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// 方案一：</span>
document<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;DOMContentLoaded&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;first contentful painting&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 方案二：</span>
performance<span class="token punctuation">.</span><span class="token function">getEntriesByName</span><span class="token punctuation">(</span><span class="token string">&quot;first-contentful-paint&quot;</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>startTime

<span class="token comment">// performance.getEntriesByName(&quot;first-contentful-paint&quot;)[0]</span>
<span class="token comment">// 会返回一个 PerformancePaintTiming的实例，结构如下：</span>
<span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;first-contentful-paint&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">entryType</span><span class="token operator">:</span> <span class="token string">&quot;paint&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">startTime</span><span class="token operator">:</span> <span class="token number">507.80000002123415</span><span class="token punctuation">,</span>
  <span class="token literal-property property">duration</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="原因分析" tabindex="-1"><a class="header-anchor" href="#原因分析"><span>原因分析</span></a></h2><ul><li>网络延时问题</li><li>资源文件体积是否过大</li><li>资源是否重复发送请求去加载了</li><li>加载脚本的时候，渲染内容堵塞了</li></ul><p>可以通过 webpack 的可视化资源分析工具<code>webpack-bundle-analyzer</code>进行性能分析<br> 命令安装<code>pnpm i webpack-bundle-analyzer -D</code></p><p>在 webpack 的 dev 开发模式配置中</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span> BundleAnalyzerPlugin <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;webpack-bundle-analyzer&#39;</span><span class="token punctuation">)</span>
<span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token keyword">new</span> <span class="token class-name">BundleAnalyzerPlugin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>执行<code>npm run build --report</code>, 浏览器会自动打开分析结果</p><h2 id="优化方式" tabindex="-1"><a class="header-anchor" href="#优化方式"><span>优化方式</span></a></h2><h3 id="路由懒加载" tabindex="-1"><a class="header-anchor" href="#路由懒加载"><span>路由懒加载</span></a></h3><p>常用的手段是路由懒加载，把不同路由对应的组件分割成不同的代码块，待路由被请求的时候会单独打包路由，使得入口文件变小，加载速度大大增加</p><p>在 vue-router 配置路由的时候，采用动态加载路由的形式</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token literal-property property">routes</span><span class="token operator">:</span><span class="token punctuation">[</span>
  <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;Blogs&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;ShowBlogs&#39;</span><span class="token punctuation">,</span>
  <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;./components/ShowBlogs.vue&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以函数的形式加载路由，这样就可以把各自的路由文件分别打包，只有在解析给定的路由时，才会加载路由组件</p><h3 id="ui-框架按需加载" tabindex="-1"><a class="header-anchor" href="#ui-框架按需加载"><span>UI 框架按需加载</span></a></h3><p>在日常使用 UI 框架，例如 element-UI、或者 antd，我们经常性直接引用整个 UI 库,</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Button<span class="token punctuation">,</span> Input<span class="token punctuation">,</span> Pagination <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;element-ui&#39;</span>
Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>Button<span class="token punctuation">)</span>
Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>Input<span class="token punctuation">)</span>
Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>Pagination<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="组件重复打包" tabindex="-1"><a class="header-anchor" href="#组件重复打包"><span>组件重复打包</span></a></h3><p>假设 A.js 文件是一个常用的库，现在有多个路由使用了 A.js 文件，这就造成了重复下载</p><p>解决方案：在 webpack 的 config 文件中，修改 CommonsChunkPlugin 的配置</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token literal-property property">minChunks</span><span class="token operator">:</span> <span class="token number">3</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code>minChunks</code>为 3 表示会把使用 3 次及以上的包抽离出来，放进公共依赖文件，避免了重复加载组件</p><h3 id="图片资源处理" tabindex="-1"><a class="header-anchor" href="#图片资源处理"><span>图片资源处理</span></a></h3><p>所有的图片资源都可以在<a href="https://tinypng.com/" target="_blank" rel="noopener noreferrer">tinypng</a>网站上去压缩一下</p><ol><li><p>iconfont<br> 使用<code>iconfont</code>字体图标</p></li><li><p>CSS 图像精灵<br> 使用 CSS 图像精灵，将多个图片转为一个图片，通过 <code>background: url() x y</code>来控制图片的显示隐藏</p></li><li><p>img base64<br> vue 配置图片小于<code>8kb</code>的自动转为 base64，减少图片 http 的请求<br> webpack 使用 <code>url-loader</code>对图片进行处理</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code>  <span class="token punctuation">{</span>
    <span class="token comment">// 问题：默认处理不了html中img图片</span>
    <span class="token comment">// 处理图片资源</span>
    <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.(jpg|png|gif)$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
    <span class="token comment">// 使用一个loader</span>
    <span class="token comment">// 下载 url-loader file-loader</span>
    <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&#39;url-loader&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token comment">// 图片大小小于8kb，就会被base64处理</span>
      <span class="token comment">// 优点: 减少请求数量（减轻服务器压力）</span>
      <span class="token comment">// 缺点：图片体积会更大（文件请求速度更慢）</span>
      <span class="token literal-property property">limit</span><span class="token operator">:</span> <span class="token number">8</span> <span class="token operator">*</span> <span class="token number">1024</span><span class="token punctuation">,</span>
      <span class="token comment">// 问题：因为url-loader默认使用es6模块化解析，而html-loader引入图片是commonjs</span>
      <span class="token comment">// 解析时会出问题：[object Module]</span>
      <span class="token comment">// 解决：关闭url-loader的es6模块化，使用commonjs解析</span>
      <span class="token literal-property property">esModule</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
      <span class="token comment">// 给图片进行重命名</span>
      <span class="token comment">// [hash:10]取图片的hash的前10位</span>
      <span class="token comment">// [ext]取文件原来扩展名</span>
      <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;[hash:10].[ext]&#39;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><h3 id="开启-gzip-压缩" tabindex="-1"><a class="header-anchor" href="#开启-gzip-压缩"><span>开启 GZip 压缩</span></a></h3><p>gizp 压缩是一种 http 请求优化方式，通过减少文件体积来提高加载速度。html、js、css 文件甚至 json 数据都可以用它压缩，可以减小 60%以上的体积。前端配置 gzip 压缩，并且服务端使用 nginx 开启 gzip，用来减小网络传输的流量大小。</p><p>拆完包之后，我们再用 gzip 做一下压缩 安装 compression-webpack-plugin</p><p>使用 pnpm 在项目中下载<code>pnmp i compression-webpack-plugin -D</code></p><p>在 vue.congig.js 中引入并修改 webpack 配置</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">const</span> CompressionPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;compression-webpack-plugin&#39;</span><span class="token punctuation">)</span>

<span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
  <span class="token keyword">new</span> <span class="token class-name">CompressionWebpackPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.js$|\\.html$|\\.css</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span> <span class="token comment">//匹配文件名</span>
    <span class="token literal-property property">threshold</span><span class="token operator">:</span> <span class="token number">10240</span><span class="token punctuation">,</span> <span class="token comment">//对超过10k的数据进行压缩</span>
    <span class="token literal-property property">deleteOriginalAssets</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">//是否删除原文件</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>启用 gzip 压缩打包之后，会变成下面这样，自动生成 gz 包。目前大部分主流浏览器客户端都是支持 gzip 的，就算小部分非主流浏览器不支持也不用担心，不支持 gzip 格式文件的会默认访问源文件的，所以不要配置清除源文件。 <img src="`+p+'" alt="" loading="lazy"></p><p>配置好之后，打开浏览器访问线上，F12 查看控制台，如果该文件资源的响应头里显示有 Content-Encoding: gzip，表示浏览器支持并且启用了 Gzip 压缩的资源 <img src="'+o+`" alt="Gzip压缩" loading="lazy"></p><p>在服务器我们也要做相应的配置 如果发送请求的浏览器支持 gzip，就发送给它 gzip 格式的文件</p><p>服务器是用 express 框架搭建的 只要安装一下 compression 就能使用</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">const</span> compression <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;compression&#39;</span><span class="token punctuation">)</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token function">compression</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// 在其他中间件使用之前调用</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="webpack-相关配置优化" tabindex="-1"><a class="header-anchor" href="#webpack-相关配置优化"><span>webpack 相关配置优化</span></a></h3><ol><li>使用 uglifyjs-webpack-plugin 插件代替 webpack 自带 UglifyJsPlugin 插件来压缩 JS 文件；生产环境关闭源码映射，一方面能减少代码包的大小，另一方面也有利于系统代码安全；清除打印日志和 debugger 信息；配置 SplitChunks 抽取公有代码，提升你的应用的性能</li><li>使用 mini-xss-extract-plugin 提取 CSS 到单独的文件, 并使用 optimize-css-assets-webpack-plugin 来压缩 CSS 文件 。</li></ol><h2 id="感知性能优化" tabindex="-1"><a class="header-anchor" href="#感知性能优化"><span>感知性能优化</span></a></h2><h3 id="loading-动画" tabindex="-1"><a class="header-anchor" href="#loading-动画"><span>loading 动画</span></a></h3><p>首屏优化，在 JS 没解析执行前，让用户能看到 Loading 动画，减轻等待焦虑。通常会在 index.html 上写简单的 CSS 动画，直到 Vue 挂载后替换挂载节点的内容，但这种做法实测也会出现短暂的白屏，建议手动控制 CSS 动画关</p><h3 id="首屏骨架加载" tabindex="-1"><a class="header-anchor" href="#首屏骨架加载"><span>首屏骨架加载</span></a></h3><p>首屏优化，APP 内常见的加载时各部分灰色色块。针对骨架屏页的自动化生成</p><h3 id="渐进加载图片" tabindex="-1"><a class="header-anchor" href="#渐进加载图片"><span>渐进加载图片</span></a></h3><p>一般来说，图片加载有两种方式，一种是自上而下扫描，一种则是原图的模糊展示，然后逐渐/加载完清晰。前者在网速差的时候用户体验较差，后者的渐进/交错式加载则能减轻用户的等待焦虑，带来更好的体验</p><p>先加载小图，模糊化渲染，图片加载完成后替换为原图，最典型的例子就是 Medium，模糊化可以用 filter 或者 canvas 处理</p>`,51),c=[l];function r(u,d){return s(),a("div",null,c)}const v=n(i,[["render",r],["__file","index.html.vue"]]),g=JSON.parse('{"path":"/Front/performance/","title":"SPA 优化","lang":"zh-CN","frontmatter":{"icon":"config","category":["前端性能优化"],"tag":["SPA","性能"],"description":"SPA 优化 减少首屏渲染时间的方法有很多，总的来讲可以分成两大部分 ：资源加载优化 和 页面渲染优化 首屏加载 首屏时间（First Contentful Paint），指的是浏览器从响应用户输入网址地址，到首屏内容渲染完成的时间，此时整个网页不一定要全部渲染完成，但需要展示当前视窗需要的内容 通过 DOMContentLoad 或者 perform...","head":[["meta",{"property":"og:url","content":"https://lfange.github.io/Front/performance/"}],["meta",{"property":"og:site_name","content":"哓番茄"}],["meta",{"property":"og:title","content":"SPA 优化"}],["meta",{"property":"og:description","content":"SPA 优化 减少首屏渲染时间的方法有很多，总的来讲可以分成两大部分 ：资源加载优化 和 页面渲染优化 首屏加载 首屏时间（First Contentful Paint），指的是浏览器从响应用户输入网址地址，到首屏内容渲染完成的时间，此时整个网页不一定要全部渲染完成，但需要展示当前视窗需要的内容 通过 DOMContentLoad 或者 perform..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-03-29T13:35:43.000Z"}],["meta",{"property":"article:author","content":"哓番茄"}],["meta",{"property":"article:tag","content":"SPA"}],["meta",{"property":"article:tag","content":"性能"}],["meta",{"property":"article:modified_time","content":"2023-03-29T13:35:43.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"SPA 优化\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-03-29T13:35:43.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"哓番茄\\",\\"url\\":\\"https://lfange.github.io/\\"}]}"]]},"headers":[{"level":2,"title":"首屏加载","slug":"首屏加载","link":"#首屏加载","children":[]},{"level":2,"title":"原因分析","slug":"原因分析","link":"#原因分析","children":[]},{"level":2,"title":"优化方式","slug":"优化方式","link":"#优化方式","children":[{"level":3,"title":"路由懒加载","slug":"路由懒加载","link":"#路由懒加载","children":[]},{"level":3,"title":"UI 框架按需加载","slug":"ui-框架按需加载","link":"#ui-框架按需加载","children":[]},{"level":3,"title":"组件重复打包","slug":"组件重复打包","link":"#组件重复打包","children":[]},{"level":3,"title":"图片资源处理","slug":"图片资源处理","link":"#图片资源处理","children":[]},{"level":3,"title":"开启 GZip 压缩","slug":"开启-gzip-压缩","link":"#开启-gzip-压缩","children":[]},{"level":3,"title":"webpack 相关配置优化","slug":"webpack-相关配置优化","link":"#webpack-相关配置优化","children":[]}]},{"level":2,"title":"感知性能优化","slug":"感知性能优化","link":"#感知性能优化","children":[{"level":3,"title":"loading 动画","slug":"loading-动画","link":"#loading-动画","children":[]},{"level":3,"title":"首屏骨架加载","slug":"首屏骨架加载","link":"#首屏骨架加载","children":[]},{"level":3,"title":"渐进加载图片","slug":"渐进加载图片","link":"#渐进加载图片","children":[]}]}],"git":{"createdTime":1666161268000,"updatedTime":1680096943000,"contributors":[{"name":"FanGe","email":"653398363@qq.com","commits":3}]},"readingTime":{"minutes":5.69,"words":1706},"filePathRelative":"Front/performance/README.md","localizedDate":"2022年10月19日","excerpt":"","autoDesc":true}');export{v as comp,g as data};

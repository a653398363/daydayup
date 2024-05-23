import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as e,c as a,a as s}from"./app-R7pVbBlq.js";const t={},i=s(`<h1 id="vite" tabindex="-1"><a class="header-anchor" href="#vite"><span>Vite</span></a></h1><h2 id="vue3-vite-env-环境配置" tabindex="-1"><a class="header-anchor" href="#vue3-vite-env-环境配置"><span>vue3 + vite env 环境配置</span></a></h2><p><a href="https://cn.vitejs.dev/guide/env-and-mode.html" target="_blank" rel="noopener noreferrer">Vite 环境变量</a></p><h3 id="新建文件" tabindex="-1"><a class="header-anchor" href="#新建文件"><span>新建文件</span></a></h3><p>在项目跟目录建 <code>.env.development</code> <code>.env.production</code></p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// .env.development</span>
<span class="token constant">NODE_ENV</span> <span class="token operator">=</span> development
<span class="token constant">VITE_APP_BASE_API</span> <span class="token operator">=</span> <span class="token operator">/</span>stage<span class="token operator">-</span>api
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="创建代码提示-env-d-ts" tabindex="-1"><a class="header-anchor" href="#创建代码提示-env-d-ts"><span>创建代码提示 env.d.ts</span></a></h3><p>src/types/env.d.ts</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">interface</span> <span class="token class-name">ImportMetaEnv</span> <span class="token punctuation">{</span>
  <span class="token constant">VITE_APP_BASE_API</span><span class="token operator">:</span> string<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="组件中使用" tabindex="-1"><a class="header-anchor" href="#组件中使用"><span>组件中使用</span></a></h3><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">import</span><span class="token punctuation">.</span>meta<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">VITE_APP_BASE_API</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="vite-config-ts-中使用" tabindex="-1"><a class="header-anchor" href="#vite-config-ts-中使用"><span>vite.config.ts 中使用</span></a></h3><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineConfig<span class="token punctuation">,</span> loadEnv <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vite&#39;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> mode <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> env <span class="token operator">=</span> <span class="token function">loadEnv</span><span class="token punctuation">(</span>mode<span class="token punctuation">,</span> process<span class="token punctuation">.</span><span class="token function">cwd</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;command&#39;</span><span class="token punctuation">,</span> env<span class="token punctuation">)</span> <span class="token comment">// { VITE_APP_BASE_API: &#39;/stage-api&#39;, VITE_USER_NODE_ENV: &#39;development&#39; }</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    plugins<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">base</span><span class="token operator">:</span> env<span class="token punctuation">.</span><span class="token constant">VITE_APP_BASE_API</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="vite-插件开发" tabindex="-1"><a class="header-anchor" href="#vite-插件开发"><span>Vite 插件开发</span></a></h2><p><a href="https://zhuanlan.zhihu.com/p/364275970" target="_blank" rel="noopener noreferrer">Vite2 插件开发指南</a><a href="https://juejin.cn/post/7067827608842403848" target="_blank" rel="noopener noreferrer">十分钟带你了解 vite 插件开发</a></p>`,15),p=[i];function o(c,l){return e(),a("div",null,p)}const u=n(t,[["render",o],["__file","vite.html.vue"]]),v=JSON.parse('{"path":"/Front/vue3/vite.html","title":"Vite","lang":"zh-CN","frontmatter":{"icon":"article","category":["Vite"],"tag":["Quickly Start","前端工程化"],"description":"Vite vue3 + vite env 环境配置 Vite 环境变量 新建文件 在项目跟目录建 .env.development .env.production 创建代码提示 env.d.ts src/types/env.d.ts 组件中使用 vite.config.ts 中使用 Vite 插件开发 Vite2 插件开发指南 十分钟带你了解 vite...","head":[["meta",{"property":"og:url","content":"https://lfange.github.io/Front/vue3/vite.html"}],["meta",{"property":"og:site_name","content":"哓番茄"}],["meta",{"property":"og:title","content":"Vite"}],["meta",{"property":"og:description","content":"Vite vue3 + vite env 环境配置 Vite 环境变量 新建文件 在项目跟目录建 .env.development .env.production 创建代码提示 env.d.ts src/types/env.d.ts 组件中使用 vite.config.ts 中使用 Vite 插件开发 Vite2 插件开发指南 十分钟带你了解 vite..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-03-29T13:35:43.000Z"}],["meta",{"property":"article:author","content":"哓番茄"}],["meta",{"property":"article:tag","content":"Quickly Start"}],["meta",{"property":"article:tag","content":"前端工程化"}],["meta",{"property":"article:modified_time","content":"2023-03-29T13:35:43.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Vite\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-03-29T13:35:43.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"哓番茄\\",\\"url\\":\\"https://lfange.github.io/\\"}]}"]]},"headers":[{"level":2,"title":"vue3 + vite env 环境配置","slug":"vue3-vite-env-环境配置","link":"#vue3-vite-env-环境配置","children":[{"level":3,"title":"新建文件","slug":"新建文件","link":"#新建文件","children":[]},{"level":3,"title":"创建代码提示 env.d.ts","slug":"创建代码提示-env-d-ts","link":"#创建代码提示-env-d-ts","children":[]},{"level":3,"title":"组件中使用","slug":"组件中使用","link":"#组件中使用","children":[]},{"level":3,"title":"vite.config.ts 中使用","slug":"vite-config-ts-中使用","link":"#vite-config-ts-中使用","children":[]}]},{"level":2,"title":"Vite 插件开发","slug":"vite-插件开发","link":"#vite-插件开发","children":[]}],"git":{"createdTime":1667292686000,"updatedTime":1680096943000,"contributors":[{"name":"FanGe","email":"653398363@qq.com","commits":3}]},"readingTime":{"minutes":0.43,"words":130},"filePathRelative":"Front/vue3/vite.md","localizedDate":"2022年11月1日","excerpt":"","autoDesc":true}');export{u as comp,v as data};

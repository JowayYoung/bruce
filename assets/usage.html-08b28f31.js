import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{r as p,o,c,a as s,b as n,d as u,e as a}from"./app-bfa4223d.js";const i={},l=a(`<h2 id="引用" tabindex="-1"><a class="header-anchor" href="#引用" aria-hidden="true">#</a> 引用</h2><p><code>@yangzw/bruce-us</code>基于<code>rollup</code>使用<code>CJS/ESM/UMD</code>规范打包，所以可用<strong>IIFE</strong>、<strong>AMD</strong>、<strong>CJS</strong>和<strong>ESM</strong>四种方式引用。推荐使用<code>IIFE</code>、<code>CJS</code>和<code>ESM</code>三种引用方式，后续所有示例都基于<strong>ESM</strong>。</p><p><code>package.json</code>中使用<code>main</code>指定入口文件，所以这些引用方式都是等价。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span> EnvType<span class="token punctuation">,</span> TypeOf <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;@yangzw/bruce-us&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 或</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> EnvType<span class="token punctuation">,</span> TypeOf <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@yangzw/bruce-us&quot;</span><span class="token punctuation">;</span>

<span class="token comment">// 『以上两段代码』(推荐) 等价 『以下两段代码』</span>

<span class="token keyword">const</span> <span class="token punctuation">{</span> EnvType<span class="token punctuation">,</span> TypeOf <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;@yangzw/bruce-us/dist/index&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 或</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> EnvType<span class="token punctuation">,</span> TypeOf <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@yangzw/bruce-us/dist/index&quot;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="关系" tabindex="-1"><a class="header-anchor" href="#关系" aria-hidden="true">#</a> 关系</h2><p><code>Web模块</code>和<code>Node模块</code>包括<code>Common模块</code>全部函数。</p><ul class="task-list-container"><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-0" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-0"><code>web.js</code>包括<code>index.js</code>，<code>web.esm.js</code>包括<code>index.esm.js</code>，<code>web.umd.js</code>包括<code>index.umd.js</code></label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-1" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-1"><code>node.js</code>包括<code>index.js</code>，<code>node.esm.js</code>包括<code>index.esm.js</code></label></li></ul><p>如果在<code>Web</code>中使用，请改成这种引用方式。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span> TypeOf<span class="token punctuation">,</span> WebType <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;@yangzw/bruce-us/dist/web&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 或</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> TypeOf<span class="token punctuation">,</span> WebType <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@yangzw/bruce-us/dist/web&quot;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果在<code>Node</code>中使用，请改成这种引用方式。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span> NodeType<span class="token punctuation">,</span> TypeOf <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;@yangzw/bruce-us/dist/node&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 或</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> NodeType<span class="token punctuation">,</span> TypeOf <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@yangzw/bruce-us/dist/node&quot;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="iife" tabindex="-1"><a class="header-anchor" href="#iife" aria-hidden="true">#</a> IIFE</h2><p>将<code>node_modules/@yangzw/bruce-us/dist/web.umd.js</code>复制出来，放到创建的<code>js/bruce-us</code>文件夹中，通过HTML的<code>&lt;script&gt;</code>直接引用。这种引用方式适用于结构单一且依赖较少的<code>Web项目</code>。</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>js/bruce-us/web.umd.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
		console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>window<span class="token punctuation">.</span>BruceUs<span class="token punctuation">.</span><span class="token function">TypeOf</span><span class="token punctuation">(</span><span class="token string">&quot;bruce&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>window<span class="token punctuation">.</span>BruceUs<span class="token punctuation">.</span><span class="token function">WebType</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="amd" tabindex="-1"><a class="header-anchor" href="#amd" aria-hidden="true">#</a> AMD</h2>`,15),d=s("code",null,"node_modules/@yangzw/bruce-us/dist/web.umd.js",-1),r=s("code",null,"js/bruce-us",-1),k={href:"https://github.com/requirejs/requirejs",target:"_blank",rel:"noopener noreferrer"},v=s("code",null,"Web项目",-1),m=a(`<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>require<span class="token punctuation">.</span><span class="token function">config</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
	<span class="token literal-property property">paths</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token literal-property property">BruceUs</span><span class="token operator">:</span> <span class="token string">&quot;js/bruce-us/web.umd.js&quot;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token function">require</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&quot;BruceUs&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">BruceUs</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>BruceUs<span class="token punctuation">.</span><span class="token function">TypeOf</span><span class="token punctuation">(</span><span class="token string">&quot;bruce&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>BruceUs<span class="token punctuation">.</span><span class="token function">WebType</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="cjs" tabindex="-1"><a class="header-anchor" href="#cjs" aria-hidden="true">#</a> CJS</h2><p>在打包时已经将所有代码处理为ES5，保留<code>exports</code>关键字用于编辑器引用模块时做到智能提示，后续交由<code>webpack</code>打包时会自动将剩余的<code>exports</code>关键字处理掉。这种引用方式适用于<code>Web项目</code>和<code>Node项目</code>。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// Web</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> TypeOf<span class="token punctuation">,</span> WebType <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;@yangzw/bruce-us/dist/web&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">TypeOf</span><span class="token punctuation">(</span><span class="token string">&quot;bruce&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">WebType</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// Node</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> NodeType<span class="token punctuation">,</span> TypeOf <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;@yangzw/bruce-us/dist/node&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">TypeOf</span><span class="token punctuation">(</span><span class="token string">&quot;bruce&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">NodeType</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="esm" tabindex="-1"><a class="header-anchor" href="#esm" aria-hidden="true">#</a> ESM</h2><p>在打包时已经将所有代码处理为ES5，保留<code>export</code>关键字用于编辑器引用模块时做到智能提示，后续交由<code>webpack</code>打包时会自动将剩余的<code>export</code>关键字处理掉。这种引用方式适用于<code>Web项目</code>和<code>Node项目</code>。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// Web</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> TypeOf<span class="token punctuation">,</span> WebType <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@yangzw/bruce-us/dist/web&quot;</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">TypeOf</span><span class="token punctuation">(</span><span class="token string">&quot;bruce&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">WebType</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// Node</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> NodeType<span class="token punctuation">,</span> TypeOf <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@yangzw/bruce-us/dist/node&quot;</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">TypeOf</span><span class="token punctuation">(</span><span class="token string">&quot;bruce&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">NodeType</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="打包" tabindex="-1"><a class="header-anchor" href="#打包" aria-hidden="true">#</a> 打包</h2><p><code>@yangzw/bruce-us</code>提供ESM形式的<code>index.esm.js</code>，在<code>package.json</code>中已经配置<code>module</code>字段指向<code>index.esm.js</code>。</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
	<span class="token property">&quot;main&quot;</span><span class="token operator">:</span> <span class="token string">&quot;dist/index.js&quot;</span><span class="token punctuation">,</span>
	<span class="token property">&quot;module&quot;</span><span class="token operator">:</span> <span class="token string">&quot;dist/index.esm.js&quot;</span><span class="token punctuation">,</span>
	<span class="token property">&quot;browser&quot;</span><span class="token operator">:</span> <span class="token string">&quot;dist/index.umd.js&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果使用<code>webpack</code>打包项目，可以利用<code>Tree Sharking</code>的特性删除未使用的代码，有效减小打包体积。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
	<span class="token comment">// webpack其它配置</span>
	<span class="token literal-property property">resolve</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token literal-property property">mainFields</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;module&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;browser&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;main&quot;</span><span class="token punctuation">]</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,14);function b(g,y){const t=p("ExternalLinkIcon");return o(),c("div",null,[l,s("p",null,[n("将"),d,n("复制出来，放到创建的"),r,n("文件夹中，要建立在"),s("a",k,[n("RequireJS"),u(t)]),n("中使用。这种引用方式适用于"),v,n("。")]),m])}const q=e(i,[["render",b],["__file","usage.html.vue"]]);export{q as default};

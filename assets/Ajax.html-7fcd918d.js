import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{o as n,c as s,e}from"./app-bfa4223d.js";const a={},o=e(`<p>以<code>对象解构</code>的方式入参</p><table><thead><tr><th style="text-align:center;">入参</th><th style="text-align:center;">功能</th><th style="text-align:center;">类型</th><th style="text-align:center;">默认</th><th>说明</th></tr></thead><tbody><tr><td style="text-align:center;"><strong>data</strong></td><td style="text-align:center;">参数集合</td><td style="text-align:center;"><code>Object</code></td><td style="text-align:center;"><code>{}</code></td><td></td></tr><tr><td style="text-align:center;"><strong>error</strong></td><td style="text-align:center;">失败回调函数</td><td style="text-align:center;"><code>Function</code></td><td style="text-align:center;">-</td><td></td></tr><tr><td style="text-align:center;"><strong>success</strong></td><td style="text-align:center;">成功回调函数</td><td style="text-align:center;"><code>Function</code></td><td style="text-align:center;">-</td><td></td></tr><tr><td style="text-align:center;"><strong>type</strong></td><td style="text-align:center;">类型</td><td style="text-align:center;"><code>get/post</code></td><td style="text-align:center;"><code>&quot;get&quot;</code></td><td></td></tr><tr><td style="text-align:center;"><strong>url</strong></td><td style="text-align:center;">地址</td><td style="text-align:center;"><code>String</code></td><td style="text-align:center;"><code>&quot;&quot;</code></td><td></td></tr></tbody></table><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Ajax <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@yangzw/bruce-us/dist/web&quot;</span><span class="token punctuation">;</span>

<span class="token function">Ajax</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
	<span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token literal-property property">b</span><span class="token operator">:</span> <span class="token number">2</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
	<span class="token function-variable function">error</span><span class="token operator">:</span> <span class="token parameter">err</span> <span class="token operator">=&gt;</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">,</span>
	<span class="token function-variable function">success</span><span class="token operator">:</span> <span class="token parameter">res</span> <span class="token operator">=&gt;</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span><span class="token punctuation">,</span>
	<span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&quot;post&quot;</span><span class="token punctuation">,</span>
	<span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">&quot;https://api.xyz.com/get-user&quot;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),p=[o];function c(r,l){return n(),s("div",null,p)}const u=t(a,[["render",c],["__file","Ajax.html.vue"]]);export{u as default};

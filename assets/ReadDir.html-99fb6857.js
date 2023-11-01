import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{o as e,c as n,e as s}from"./app-bfa4223d.js";const a={},o=s(`<p>以<code>对象解构</code>的方式入参</p><table><thead><tr><th style="text-align:center;">入参</th><th style="text-align:center;">功能</th><th style="text-align:center;">类型</th><th style="text-align:center;">默认</th><th>说明</th></tr></thead><tbody><tr><td style="text-align:center;"><strong>dir</strong></td><td style="text-align:center;">路径</td><td style="text-align:center;"><code>String</code></td><td style="text-align:center;"><code>&quot;&quot;</code></td><td></td></tr><tr><td style="text-align:center;"><strong>path</strong></td><td style="text-align:center;">路径</td><td style="text-align:center;"><code>String</code></td><td style="text-align:center;"><code>&quot;&quot;</code></td><td></td></tr><tr><td style="text-align:center;"><strong>regexp</strong></td><td style="text-align:center;">过滤正则</td><td style="text-align:center;"><code>Regexp</code></td><td style="text-align:center;"><code>/(node_modules|\\.git|\\.DS_Store)$/</code></td><td></td></tr><tr><td style="text-align:center;"><strong>type</strong></td><td style="text-align:center;">类型</td><td style="text-align:center;"><code>bfs广度优先遍历</code>/<code>dfs深度优先遍历</code></td><td style="text-align:center;"><code>&quot;bfs&quot;</code></td><td></td></tr></tbody></table><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> ReadDir <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@yangzw/bruce-us/dist/node.esm.js&quot;</span><span class="token punctuation">;</span>

<span class="token function">ReadDir</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&quot;src/bruce&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&quot;dfs&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [&quot;node.js&quot;, &quot;web.js&quot;]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),c=[o];function d(r,l){return e(),n("div",null,c)}const u=t(a,[["render",d],["__file","ReadDir.html.vue"]]);export{u as default};

import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as e,c as n,e as s}from"./app-BllOeS-6.js";const a={},o=s(`<p>以<code>对象解构</code>的方式入参</p><table><thead><tr><th style="text-align:center;">入参</th><th style="text-align:center;">功能</th><th style="text-align:center;">类型</th><th style="text-align:center;">默认</th><th>说明</th></tr></thead><tbody><tr><td style="text-align:center;"><strong>dist</strong></td><td style="text-align:center;">输出路径</td><td style="text-align:center;"><code>String</code></td><td style="text-align:center;"><code>&quot;&quot;</code></td><td></td></tr><tr><td style="text-align:center;"><strong>distDir</strong></td><td style="text-align:center;">输出路径的上下文</td><td style="text-align:center;"><code>String</code></td><td style="text-align:center;"><code>process.cwd()</code></td><td></td></tr><tr><td style="text-align:center;"><strong>filter</strong></td><td style="text-align:center;">过滤函数</td><td style="text-align:center;"><code>Function</code></td><td style="text-align:center;">-</td><td>返回<code>true</code>表示复制，返回<code>false</code>表示不复制</td></tr><tr><td style="text-align:center;"><strong>src</strong></td><td style="text-align:center;">输入路径</td><td style="text-align:center;"><code>String</code></td><td style="text-align:center;"><code>&quot;&quot;</code></td><td></td></tr><tr><td style="text-align:center;"><strong>srcDir</strong></td><td style="text-align:center;">输入路径的上下文</td><td style="text-align:center;"><code>String</code></td><td style="text-align:center;"><code>process.cwd()</code></td><td></td></tr></tbody></table><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> CopyDir <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@yangzw/bruce-us/dist/node.esm.js&quot;</span><span class="token punctuation">;</span>

<span class="token function">CopyDir</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
	<span class="token literal-property property">dist</span><span class="token operator">:</span> <span class="token string">&quot;dist/bruce&quot;</span><span class="token punctuation">,</span>
	<span class="token function-variable function">filter</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">src<span class="token punctuation">,</span> dist</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
	<span class="token literal-property property">src</span><span class="token operator">:</span> <span class="token string">&quot;src/bruce&quot;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),c=[o];function r(d,l){return e(),n("div",null,c)}const u=t(a,[["render",r],["__file","CopyDir.html.vue"]]),g=JSON.parse('{"path":"/us/fs/CopyDir.html","title":"复制文件路径 💧","lang":"zh-CN","frontmatter":{"title":"复制文件路径 💧","icon":"floppy-disk"},"headers":[],"git":{"createdTime":1713845029000,"updatedTime":1713845029000,"contributors":[{"name":"JowayYoung","email":"young.joway@aliyun.com","commits":1}]},"readingTime":{"minutes":0.33,"words":100},"filePathRelative":"us/fs/CopyDir.md","localizedDate":"2024年4月23日"}');export{u as comp,g as data};
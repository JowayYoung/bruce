import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as n,c as e,e as s}from"./app-BllOeS-6.js";const a={},o=s(`<p>以<code>对象解构</code>的方式入参</p><table><thead><tr><th style="text-align:center;">入参</th><th style="text-align:center;">功能</th><th style="text-align:center;">类型</th><th style="text-align:center;">默认</th><th>说明</th></tr></thead><tbody><tr><td style="text-align:center;"><strong>host</strong></td><td style="text-align:center;">域名</td><td style="text-align:center;"><code>String</code></td><td style="text-align:center;"><code>本机IP</code></td><td></td></tr><tr><td style="text-align:center;"><strong>onCall</strong></td><td style="text-align:center;">回调函数</td><td style="text-align:center;"><code>Function</code></td><td style="text-align:center;">-</td><td></td></tr><tr><td style="text-align:center;"><strong>port</strong></td><td style="text-align:center;">端口</td><td style="text-align:center;"><code>Number</code></td><td style="text-align:center;"><code>80</code></td><td>端口范围在<code>0~65535</code></td></tr></tbody></table><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> AutoPort <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@yangzw/bruce-us/dist/node.esm.js&quot;</span><span class="token punctuation">;</span>

<span class="token function">AutoPort</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
	<span class="token literal-property property">host</span><span class="token operator">:</span> <span class="token string">&quot;127.0.0.1&quot;</span><span class="token punctuation">,</span>
	<span class="token function-variable function">onCall</span><span class="token operator">:</span> <span class="token parameter">port</span> <span class="token operator">=&gt;</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>port<span class="token punctuation">)</span>
	<span class="token literal-property property">port</span><span class="token operator">:</span> <span class="token number">9999</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),c=[o];function l(r,p){return n(),e("div",null,c)}const u=t(a,[["render",l],["__file","AutoPort.html.vue"]]),g=JSON.parse('{"path":"/us/os/AutoPort.html","title":"自动端口 💧","lang":"zh-CN","frontmatter":{"title":"自动端口 💧","icon":"share-nodes"},"headers":[],"git":{"createdTime":1713845029000,"updatedTime":1713845029000,"contributors":[{"name":"JowayYoung","email":"young.joway@aliyun.com","commits":1}]},"readingTime":{"minutes":0.23,"words":68},"filePathRelative":"us/os/AutoPort.md","localizedDate":"2024年4月23日"}');export{u as comp,g as data};
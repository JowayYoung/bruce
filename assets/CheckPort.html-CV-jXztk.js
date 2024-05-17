import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as e,o as s,a}from"./app-BvezIqC2.js";const n={},o=a(`<p>以<code>对象解构</code>的方式入参</p><table><thead><tr><th style="text-align:center;">入参</th><th style="text-align:center;">功能</th><th style="text-align:center;">类型</th><th style="text-align:center;">默认</th><th>说明</th></tr></thead><tbody><tr><td style="text-align:center;"><strong>host</strong></td><td style="text-align:center;">域名</td><td style="text-align:center;"><code>String</code></td><td style="text-align:center;"><code>本机IP</code></td><td>-</td></tr><tr><td style="text-align:center;"><strong>port</strong></td><td style="text-align:center;">端口</td><td style="text-align:center;"><code>Number</code></td><td style="text-align:center;"><code>80</code></td><td>端口范围在<code>0~65535</code></td></tr></tbody></table><ul class="task-list-container"><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-0" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-0"><code>true</code>表示端口未占用</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-1" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-1"><code>false</code>表示端口已占用，请用<code>AutoPort</code>获取动态端口</label></li></ul><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> CheckPort <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@yangzw/bruce-us/dist/node.esm.js&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">await</span> <span class="token function">CheckPort</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">host</span><span class="token operator">:</span> <span class="token string">&quot;127.0.0.1&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">port</span><span class="token operator">:</span> <span class="token number">9999</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),c=[o];function l(i,r){return s(),e("div",null,c)}const u=t(n,[["render",l],["__file","CheckPort.html.vue"]]),k=JSON.parse('{"path":"/us/os/CheckPort.html","title":"检查端口 💧","lang":"zh-CN","frontmatter":{"title":"检查端口 💧","icon":"share-nodes"},"headers":[],"git":{"createdTime":1715929436000,"updatedTime":1715929436000,"contributors":[{"name":"JowayYoung","email":"young.joway@aliyun.com","commits":1}]},"readingTime":{"minutes":0.29,"words":88},"filePathRelative":"us/os/CheckPort.md","localizedDate":"2024年5月17日"}');export{u as comp,k as data};

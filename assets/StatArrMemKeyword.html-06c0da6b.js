import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as t,c as s,e as a}from"./app-bfa4223d.js";const e={},o=a(`<table><thead><tr><th style="text-align:center;">入参</th><th style="text-align:center;">功能</th><th style="text-align:center;">类型</th><th style="text-align:center;">默认</th><th>说明</th></tr></thead><tbody><tr><td style="text-align:center;"><strong>arr</strong></td><td style="text-align:center;">数组</td><td style="text-align:center;"><code>String[]</code></td><td style="text-align:center;"><code>[]</code></td><td></td></tr><tr><td style="text-align:center;"><strong>keywords</strong></td><td style="text-align:center;">关键字集合</td><td style="text-align:center;"><code>String[]</code></td><td style="text-align:center;"><code>[]</code></td><td></td></tr></tbody></table><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> StatArrMemKeyword <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@yangzw/bruce-us&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span>
	<span class="token string">&quot;今天天气真好，我想出去钓鱼&quot;</span><span class="token punctuation">,</span>
	<span class="token string">&quot;我一边看电视，一边写作业&quot;</span><span class="token punctuation">,</span>
	<span class="token string">&quot;小明喜欢同桌的小红，又喜欢后桌的小君，真TM花心&quot;</span><span class="token punctuation">,</span>
	<span class="token string">&quot;最近上班喜欢摸鱼的人实在太多，代码不好好写，在想入非非&quot;</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> keywords <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&quot;偷懒&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;喜欢&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;睡觉&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;摸鱼&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;真好&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;一边&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;明天&quot;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token function">StatArrMemKeyword</span><span class="token punctuation">(</span>arr<span class="token punctuation">,</span> keywords<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [&quot;喜欢&quot;, &quot;摸鱼&quot;, &quot;真好&quot;, &quot;一边&quot;]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),c=[o];function p(l,i){return t(),s("div",null,c)}const d=n(e,[["render",p],["__file","StatArrMemKeyword.html.vue"]]);export{d as default};

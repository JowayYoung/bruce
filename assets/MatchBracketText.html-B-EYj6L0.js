import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as s,a as e,o as a}from"./app-XK8RzlWS.js";const n={};function l(h,t){return a(),s("div",null,t[0]||(t[0]=[e(`<table><thead><tr><th style="text-align:center;">入参</th><th style="text-align:center;">功能</th><th style="text-align:center;">类型</th><th style="text-align:center;">默认</th><th>说明</th></tr></thead><tbody><tr><td style="text-align:center;"><strong>tgt</strong></td><td style="text-align:center;">括号形式</td><td style="text-align:center;"><code>String</code></td><td style="text-align:center;"><code>&quot;(*)&quot;</code></td><td>提取的内容必须使用*代替</td></tr><tr><td style="text-align:center;"><strong>text</strong></td><td style="text-align:center;">文本</td><td style="text-align:center;"><code>String</code></td><td style="text-align:center;"><code>&quot;&quot;</code></td><td>-</td></tr></tbody></table><div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">import</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> { </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">MatchBracketText</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> } </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">from</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;@yangzw/bruce-us&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">MatchBracketText</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">	&quot;&lt;img src=</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">\\&quot;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">*</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">\\&quot;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&gt;&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">	&quot;&lt;img src=</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">\\&quot;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">pig.jpg</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">\\&quot;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&gt;&lt;p&gt;bruce&lt;/p&gt;&lt;img src=</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">\\&quot;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">dada.png</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">\\&quot;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&gt;&quot;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">); </span><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">// [&quot;pig.jpg&quot;, &quot;dada.png&quot;]</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2)]))}const k=i(n,[["render",l],["__file","MatchBracketText.html.vue"]]),p=JSON.parse('{"path":"/us/regexp/MatchBracketText.html","title":"匹配括号文本","lang":"zh-CN","frontmatter":{"title":"匹配括号文本","icon":"ruler"},"headers":[],"git":{"createdTime":1726219857000,"updatedTime":1726219857000,"contributors":[{"name":"JowayYoung","email":"young.joway@aliyun.com","commits":1}]},"readingTime":{"minutes":0.2,"words":61},"filePathRelative":"us/regexp/MatchBracketText.md","localizedDate":"2024年9月13日"}');export{k as comp,p as data};
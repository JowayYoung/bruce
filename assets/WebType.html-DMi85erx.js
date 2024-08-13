import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as e,o as s,a as i}from"./app-B0pjGQLg.js";const l={},a=i(`<table><thead><tr><th style="text-align:center;">入参</th><th style="text-align:center;">功能</th><th style="text-align:center;">类型</th><th style="text-align:center;">默认</th><th>说明</th></tr></thead><tbody><tr><td style="text-align:center;"><strong>ua</strong></td><td style="text-align:center;">用户代理</td><td style="text-align:center;"><code>String</code></td><td style="text-align:center;"><code>&quot;&quot;</code></td><td>可以传入任何<code>UserAgent</code>字符串</td></tr></tbody></table><table><thead><tr><th style="text-align:center;">出参</th><th style="text-align:center;">功能</th><th style="text-align:center;">类型</th></tr></thead><tbody><tr><td style="text-align:center;"><strong>system</strong></td><td style="text-align:center;">系统</td><td style="text-align:center;"><code>windows/macos/linux/android/ios</code></td></tr><tr><td style="text-align:center;"><strong>systemVs</strong></td><td style="text-align:center;">系统版本</td><td style="text-align:center;"><code>x.y.z</code></td></tr><tr><td style="text-align:center;"><strong>platform</strong></td><td style="text-align:center;">平台</td><td style="text-align:center;"><code>desktop/mobile</code></td></tr><tr><td style="text-align:center;"><strong>engine</strong></td><td style="text-align:center;">内核</td><td style="text-align:center;"><code>webkit/gecko/presto/trident</code></td></tr><tr><td style="text-align:center;"><strong>engineVs</strong></td><td style="text-align:center;">内核版本</td><td style="text-align:center;"><code>x.y.z</code></td></tr><tr><td style="text-align:center;"><strong>supporter</strong></td><td style="text-align:center;">载体</td><td style="text-align:center;"><code>chrome/safari/edge/firefox/opera/iexplore</code></td></tr><tr><td style="text-align:center;"><strong>supporterVs</strong></td><td style="text-align:center;">载体版本</td><td style="text-align:center;"><code>x.y.z</code></td></tr><tr><td style="text-align:center;"><strong>supporter</strong></td><td style="text-align:center;">外壳</td><td style="text-align:center;"><code>uc/qq/sougou/maxthon/2345/360/liebao/xiaomi/huawei/oppo/vivo/wechat/baidu/toutiao</code></td></tr><tr><td style="text-align:center;"><strong>supporterVs</strong></td><td style="text-align:center;">外壳版本</td><td style="text-align:center;"><code>x.y.z</code></td></tr></tbody></table><ul class="task-list-container"><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-0" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-0"> 权重根据：系统 &gt; 平台 &gt; 内核 &gt; 载体 &gt; 外壳</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-1" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-1"> 载体指五大浏览器：<code>chrome</code>、<code>edge/iexplore</code>(师出同门)、<code>firefox</code>、<code>opera</code>、<code>safari</code></label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-2" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-2"> 外壳指除了五大浏览器的其它浏览器，它们都是基于五大浏览器开源的内核进行定制，一般都会在<code>UserAgent</code>中插入自身浏览器的标识</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-3" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-3"> 有小部分其它浏览器在<code>UserAgent</code>中并未插入自身浏览器的标识，所以只能将其归类为五大浏览器之一</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-4" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-4"> 安卓系统所有浏览器都是基于<code>Chromium</code>进行定制，但是它们的<code>UserAgent</code>大部分不包括<code>chrome</code>标识，所以载体输出是<code>safari</code></label></li></ul><div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">import</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> { </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">WebType</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> } </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">from</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;@yangzw/bruce-us&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">WebType</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">();</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">/*{</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">	engine: &quot;webkit&quot;</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">	engineVs: &quot;537.36&quot;</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">	platform: &quot;desktop&quot;</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">	supporter: &quot;chrome&quot;</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">	supporterVs: &quot;109.0.0.0&quot;</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">	system: &quot;windows&quot;</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">	systemVs: &quot;10&quot;</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">}*/</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),n=[a];function d(c,o){return s(),e("div",null,n)}const k=t(l,[["render",d],["__file","WebType.html.vue"]]),g=JSON.parse('{"path":"/us/type/WebType.html","title":"Web类型","lang":"zh-CN","frontmatter":{"title":"Web类型","icon":"code-branch"},"headers":[],"git":{"createdTime":1723531540000,"updatedTime":1723531540000,"contributors":[{"name":"JowayYoung","email":"young.joway@aliyun.com","commits":1}]},"readingTime":{"minutes":0.92,"words":276},"filePathRelative":"us/type/WebType.md","localizedDate":"2024年8月13日"}');export{k as comp,g as data};
import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as o,a as r,o as l}from"./app-XK8RzlWS.js";const d={};function n(c,e){return l(),o("div",null,e[0]||(e[0]=[r('<h2 id="图像分组" tabindex="-1"><a class="header-anchor" href="#图像分组"><span>图像分组</span></a></h2><table><thead><tr><th style="text-align:center;">功能</th><th style="text-align:center;">配置</th><th style="text-align:center;">格式</th><th>描述</th></tr></thead><tbody><tr><td style="text-align:center;">类型</td><td style="text-align:center;"><code>-t, --type</code></td><td style="text-align:center;"><code>format/size/volume</code></td><td>不设置就默认为<code>format</code></td></tr></tbody></table><ul><li><code>format</code>表示基于格式分组，<code>size</code>表示基于尺寸分组，<code>volume</code>表示基于体积分组</li><li><code>volume</code>分组会生成<code>小中大</code>三个文件夹，分别放置的体积为<code>0~10k</code>、<code>10~100k</code>和<code>100k以上</code></li><li>在分组时如果检测到已经存在相同名称的图像，就自动为当前图像名称增加<code>Hash</code></li></ul><h2 id="图像变换" tabindex="-1"><a class="header-anchor" href="#图像变换"><span>图像变换</span></a></h2><ul><li>特性：执行的命令可以追加多个参数，支持链式调用，变换情况根据配置顺序而有所不同</li><li>调用：当前配置处理的图像以流的方式传入下一个配置中处理，直到结束，类似<code>Gulp的流处理</code></li><li>结果：不同配置组合生成的图像可能不同，即使相同配置，但是不同顺序也可能生成不同图像</li></ul><table><thead><tr><th style="text-align:center;">功能</th><th style="text-align:center;">配置</th><th style="text-align:center;">格式</th><th>描述</th></tr></thead><tbody><tr><td style="text-align:center;"><a href="https://sharp.pixelplumbing.com/api-operation#blur" target="_blank" rel="noopener noreferrer">模糊</a></td><td style="text-align:center;"><code>-b, --blur</code></td><td style="text-align:center;"><code>0~1000</code></td><td>不设置就不生效</td></tr><tr><td style="text-align:center;"><a href="https://sharp.pixelplumbing.com/api-resize#extract" target="_blank" rel="noopener noreferrer">裁剪</a></td><td style="text-align:center;"><code>-e, --extract</code></td><td style="text-align:center;"><code>left,top,width,height</code></td><td>不设置就不生效</td></tr><tr><td style="text-align:center;"><a href="https://sharp.pixelplumbing.com/api-output#toformat" target="_blank" rel="noopener noreferrer">格式</a></td><td style="text-align:center;"><code>-f, --toFormat</code></td><td style="text-align:center;"><code>jpg/png/webp</code></td><td>不设置就使用原来格式</td></tr><tr><td style="text-align:center;"><a href="https://sharp.pixelplumbing.com/api-operation#flip" target="_blank" rel="noopener noreferrer">平翻</a></td><td style="text-align:center;"><code>-fi, --flip</code></td><td style="text-align:center;"><code>true</code></td><td>不设置就不生效</td></tr><tr><td style="text-align:center;"><a href="https://sharp.pixelplumbing.com/api-operation#flop" target="_blank" rel="noopener noreferrer">对翻</a></td><td style="text-align:center;"><code>-fo, --flop</code></td><td style="text-align:center;"><code>true</code></td><td>不设置就不生效</td></tr><tr><td style="text-align:center;"><a href="https://sharp.pixelplumbing.com/api-colour#grayscale" target="_blank" rel="noopener noreferrer">灰度</a></td><td style="text-align:center;"><code>-g, --grayscale</code></td><td style="text-align:center;"><code>true</code></td><td>不设置就不生效</td></tr><tr><td style="text-align:center;"><a href="https://sharp.pixelplumbing.com/api-operation#negate" target="_blank" rel="noopener noreferrer">负片</a></td><td style="text-align:center;"><code>-ne, --negate</code></td><td style="text-align:center;"><code>true</code>, <code>noalpha</code></td><td>不设置就不生效</td></tr><tr><td style="text-align:center;"><a href="https://sharp.pixelplumbing.com/api-operation#normalise" target="_blank" rel="noopener noreferrer">对比</a></td><td style="text-align:center;"><code>-no, --normalise</code></td><td style="text-align:center;"><code>true</code>, <code>lower,upper</code></td><td>不设置就不生效</td></tr><tr><td style="text-align:center;"><a href="https://sharp.pixelplumbing.com/api-resize#resize" target="_blank" rel="noopener noreferrer">尺寸</a></td><td style="text-align:center;"><code>-re, --resize</code></td><td style="text-align:center;"><code>width,height[,fit]</code></td><td>不设置就不生效</td></tr><tr><td style="text-align:center;"><a href="https://sharp.pixelplumbing.com/api-operation#rotate" target="_blank" rel="noopener noreferrer">旋转</a></td><td style="text-align:center;"><code>-ro, --rotate</code></td><td style="text-align:center;"><code>angle[,bgcolor]</code></td><td>不设置就不生效</td></tr><tr><td style="text-align:center;"><a href="https://sharp.pixelplumbing.com/api-operation#sharpen" target="_blank" rel="noopener noreferrer">锐化</a></td><td style="text-align:center;"><code>-s, --sharpen</code></td><td style="text-align:center;"><code>true</code>, <code>[sigma,flat,jagged]</code></td><td>不设置就不生效</td></tr></tbody></table><p><code>[]</code>表示可选</p><ul><li><strong>top/left</strong>：坐偏移量和上偏移量，以图像左上角为坐标，0或正整数</li><li><strong>width/height</strong>：宽度和高度，0或正整数，其一为0就自动缩放</li><li><strong>noalpha</strong>：表示取消Alpha通道</li><li><strong>lower/upper</strong>：最小最大亮度，在<code>1~99</code>之间</li><li><strong>fit</strong>：填充 <ul><li><code>cover</code>：裁剪以适应在指定尺寸中</li><li><code>contain</code>：嵌入在指定尺寸中</li><li><code>fill</code>：忽略宽高比，拉伸以填满在指定尺寸中</li><li><code>inside</code>：保留宽高比，将尺寸调整到尽可能大，同时确保其尺寸小于或等于指定尺寸</li><li><code>outside</code>：保留宽高比，将尺寸调整到尽可能小，同时确保其尺寸大于或等于指定尺寸</li></ul></li><li><strong>angle</strong>：角度，整数，正数为顺时针，负数为逆时针</li><li><strong>bgcolor</strong>：背景色 <ul><li><code>transparent</code>：透明，要配合<code>--format png</code>使用</li><li><code>HEX</code>：16进制色值，可选<code>#xyz</code>或<code>#uvwxyz</code></li><li><code>RGB</code>：RGB色值，<code>rgba(r,g,b)</code></li><li><code>RGBA</code>：RGBA色值：<code>rgba(r,g,b,a)</code></li><li><code>HSL</code>：HSL色值：<code>hsl(h,s,l)</code></li><li><code>HSLA</code>：HSLA色值：<code>hsl(h,s,l,a)</code></li></ul></li><li><strong>sigma</strong>：高斯掩模，在<code>1~10</code>之间</li><li><strong>flat</strong>：扁平度，在<code>0~1000000</code>之间</li><li><strong>jagged</strong>：锯齿状，在<code>0~1000000</code>之间</li></ul><blockquote><p>注意事项</p></blockquote><ul><li>如果<code>--opt [val]</code>的<code>val</code>为<code>false</code>，就不要增加这个配置</li><li>配置一定要输入完整且正确，格式为<code>--opt [val]</code>，不然会报错</li><li>配置参数之间相连只能使用英文逗号<code>,</code>，不能使用空格</li><li>配置详情请查看<a href="https://sharp.pixelplumbing.com/api-constructor" target="_blank" rel="noopener noreferrer">sharp-api</a></li></ul>',10)]))}const s=t(d,[["render",n],["__file","config.html.vue"]]),g=JSON.parse('{"path":"/img/config.html","title":"配置","lang":"zh-CN","frontmatter":{"title":"配置","icon":"gears","order":2},"headers":[{"level":2,"title":"图像分组","slug":"图像分组","link":"#图像分组","children":[]},{"level":2,"title":"图像变换","slug":"图像变换","link":"#图像变换","children":[]}],"git":{"createdTime":1726219857000,"updatedTime":1726219857000,"contributors":[{"name":"JowayYoung","email":"young.joway@aliyun.com","commits":1}]},"readingTime":{"minutes":2.64,"words":791},"filePathRelative":"img/config.md","localizedDate":"2024年9月13日"}');export{s as comp,g as data};

import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as c,c as r,b as h,w as t,a as l,o,d as a,e}from"./app-DqQiWQgd.js";const g={},p=l('<h2 id="背景" tabindex="-1"><a class="header-anchor" href="#背景"><span>背景</span></a></h2><p>在传统的模块开发模式中，每次创建模块都要手动输入很多参数，却只能生成一个<code>package.json</code>文件，其它骨架文件还要手动创建。每次发布模块都要手动确认<code>Node环境</code>、<code>Node镜像</code>和<code>账号状态</code>，以便保障模块被发布到正确位置。这些操作显得重复繁琐，浪费开发人员大量的时间和精力。</p><p>为了解决这些问题，需要一种更加智能自动化的方式处理模块。它可以根据用户输入的参数自动生成对应骨架文件，在发布模块时自动确认<code>Node环境</code>、<code>Node镜像</code>和<code>账号状态</code>，以免手动操作带来的繁琐和风险。</p><h2 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍"><span>介绍</span></a></h2><p><img src="https://img.shields.io/badge/@yangzw/bruce--pkg-强化Npm命令的模块处理工具-66f.svg" alt="bruce-pkg" loading="lazy"></p><p><code>@yangzw/bruce-pkg</code>是一个强化<code>Npm命令</code>的模块处理工具，为模块提供基本骨架创建和链式检查发布的功能。强化<code>npm init</code>和<code>npm publish</code>两条常见的命令，提供更加强大便捷的扩展功能。</p><p>它的主要作用是简化模块开发的工作流程，提高模块的开发的效率和质量，增强模块的可塑性和一致性。通过将多个操作步骤和执行流程合并为一条命令，使开发人员可以更加方便快捷地创建、发布和管理模块，避免手动操作带来的繁琐和风险。自动化很多原本需要手动完成的操作，节省开发人员的时间和精力，使得他们可以更加专注代码的编写和优化。</p><p><img src="https://img.shields.io/badge/author-JowayYoung-f66.svg" alt="author" loading="lazy"><img src="https://img.shields.io/badge/version-1.3.2-f66.svg" alt="version" loading="lazy"><img src="https://img.shields.io/badge/node-&gt;%3D18.18.0-3c9.svg" alt="node" loading="lazy"><img src="https://img.shields.io/badge/npm-&gt;%3D9.8.1-3c9.svg" alt="npm" loading="lazy"><img src="https://img.shields.io/badge/test-passing-f90.svg" alt="test" loading="lazy"><img src="https://img.shields.io/badge/build-passing-f90.svg" alt="build" loading="lazy"><img src="https://img.shields.io/badge/coverage-mostly-09f.svg" alt="coverage" loading="lazy"><img src="https://img.shields.io/badge/license-MIT-09f.svg" alt="license" loading="lazy"></p><h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装"><span>安装</span></a></h2><p>使用<code>npm/yarn/pnpm</code>安装<code>@yangzw/bruce-pkg</code>。</p>',10),k=e("div",{class:"language-sh line-numbers-mode","data-highlighter":"shiki","data-ext":"sh","data-title":"sh",style:{"--shiki-light":"#24292e","--shiki-dark":"#abb2bf","--shiki-light-bg":"#fff","--shiki-dark-bg":"#282c34"}},[e("pre",{class:"shiki shiki-themes github-light one-dark-pro vp-code"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#61AFEF"}},"npm"),e("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}}," i"),e("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#D19A66"}}," -g"),e("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}}," @yangzw/bruce-pkg")])])]),e("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[e("div",{class:"line-number"})])],-1),b=e("div",{class:"language-sh line-numbers-mode","data-highlighter":"shiki","data-ext":"sh","data-title":"sh",style:{"--shiki-light":"#24292e","--shiki-dark":"#abb2bf","--shiki-light-bg":"#fff","--shiki-dark-bg":"#282c34"}},[e("pre",{class:"shiki shiki-themes github-light one-dark-pro vp-code"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#61AFEF"}},"yarn"),e("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}}," add"),e("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}}," global"),e("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}}," @yangzw/bruce-pkg")])])]),e("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[e("div",{class:"line-number"})])],-1),u=e("div",{class:"language-sh line-numbers-mode","data-highlighter":"shiki","data-ext":"sh","data-title":"sh",style:{"--shiki-light":"#24292e","--shiki-dark":"#abb2bf","--shiki-light-bg":"#fff","--shiki-dark-bg":"#282c34"}},[e("pre",{class:"shiki shiki-themes github-light one-dark-pro vp-code"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#61AFEF"}},"pnpm"),e("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}}," i"),e("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#D19A66"}}," -g"),e("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}}," @yangzw/bruce-pkg")])])]),e("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[e("div",{class:"line-number"})])],-1),m=l('<h2 id="使用" tabindex="-1"><a class="header-anchor" href="#使用"><span>使用</span></a></h2><table><thead><tr><th style="text-align:center;">功能</th><th style="text-align:center;">命令</th><th style="text-align:center;">缩写</th></tr></thead><tbody><tr><td style="text-align:center;">创建模块</td><td style="text-align:center;"><strong>bruce-pkg create</strong></td><td style="text-align:center;"><code>bruce-pkg c</code></td></tr><tr><td style="text-align:center;">发布模块</td><td style="text-align:center;"><strong>bruce-pkg publish</strong></td><td style="text-align:center;"><code>bruce-pkg p</code></td></tr></tbody></table><ul><li>执行<code>bruce-pkg c</code>创建模块，使用交互式问答生成模块的骨架文件</li><li>执行<code>cd my-package</code>进入模块，开发你的模块功能</li><li>执行<code>bruce-pkg p</code>发布模块，如果执行步骤出错，请根据提示修复再执行<code>bruce-pkg p</code></li></ul><table><thead><tr><th style="text-align:center;">功能</th><th style="text-align:center;">命令</th><th style="text-align:center;">缩写</th></tr></thead><tbody><tr><td style="text-align:center;">帮助信息</td><td style="text-align:center;"><strong>bruce-pkg --help</strong></td><td style="text-align:center;"><code>bruce-pkg -h</code></td></tr><tr><td style="text-align:center;">版本信息</td><td style="text-align:center;"><strong>bruce-pkg --version</strong></td><td style="text-align:center;"><code>bruce-pkg -v</code></td></tr></tbody></table>',4);function y(v,x){const d=c("CodeTabs");return o(),r("div",null,[p,h(d,{id:"30",data:[{id:"npm"},{id:"yarn"},{id:"pnpm"}],"tab-id":"shell"},{title0:t(({value:i,isActive:s})=>[a("npm")]),title1:t(({value:i,isActive:s})=>[a("yarn")]),title2:t(({value:i,isActive:s})=>[a("pnpm")]),tab0:t(({value:i,isActive:s})=>[k]),tab1:t(({value:i,isActive:s})=>[b]),tab2:t(({value:i,isActive:s})=>[u]),_:1}),m])}const C=n(g,[["render",y],["__file","index.html.vue"]]),z=JSON.parse('{"path":"/pkg/","title":"指南","lang":"zh-CN","frontmatter":{"title":"指南","icon":"lightbulb","order":1},"headers":[{"level":2,"title":"背景","slug":"背景","link":"#背景","children":[]},{"level":2,"title":"介绍","slug":"介绍","link":"#介绍","children":[]},{"level":2,"title":"安装","slug":"安装","link":"#安装","children":[]},{"level":2,"title":"使用","slug":"使用","link":"#使用","children":[]}],"git":{"createdTime":1719545245000,"updatedTime":1719545245000,"contributors":[{"name":"JowayYoung","email":"young.joway@aliyun.com","commits":1}]},"readingTime":{"minutes":2.13,"words":638},"filePathRelative":"pkg/index.md","localizedDate":"2024年6月28日"}');export{C as comp,z as data};

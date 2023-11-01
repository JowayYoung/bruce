import{_ as d}from"./plugin-vue_export-helper-c27b6911.js";import{r as t,o as a,c as i,a as o,b as e,d as l,e as r}from"./app-bfa4223d.js";const n={},s=r('<h2 id="cli" tabindex="-1"><a class="header-anchor" href="#cli" aria-hidden="true">#</a> CLI</h2><ul><li>请务必遵循错误提示修正相关代码，不要随意修改构建源码和生成配置，否则可能导致应用构建进程无法运行</li><li>目前只装备<code>react</code>相关构建配置，请勿用于构建<code>angular/vue</code>应用或其它<code>MVVM</code>应用</li><li>默认显示语言为<code>简体中文</code>，如果切换<code>繁体中文</code>或<code>英文</code>请执行<code>bruce-app l</code>切换语言</li><li>当前应用只能是<code>React应用</code>才能使用<code>bruce-app n</code>命令</li><li>多次构建之后可能因为长时间使用长缓存优化，导致重新构建时的缓存存在几率读取失败而提示错误，可以执行<code>bruce-app r</code>删除<code>node_modules</code>并重装依赖</li></ul><h2 id="文件结构" tabindex="-1"><a class="header-anchor" href="#文件结构" aria-hidden="true">#</a> 文件结构</h2><ul><li><code>bruce-app c</code>创建应用根目录的入口文件为<code>src/index.(js|ts|jsx|tsx)</code>，千万不要将入口文件修改为其它路径、名称或后缀</li><li><code>bruce-app c</code>创建应用如果为TS，就不要修改<code>brucerc.(js|json|ts|yaml)</code>的<code>useTs</code>，只有确保它为<code>true</code>才能正常编译和校验TS</li><li><code>bruce-app c</code>创建应用如果为TS，会在应用根目录中自动生成TS配置文件<code>tsconfig.json</code></li><li>针对相对路径较长的文件，可以通过导入快捷方式符快速定位文件路径：<code>@</code>表示<code>src</code>目录</li></ul><h2 id="代码垫片" tabindex="-1"><a class="header-anchor" href="#代码垫片" aria-hidden="true">#</a> 代码垫片</h2><ul><li><code>@babel/polyfill</code>在<code>7.4.0</code>之后被弃用，使用<code>@babel/plugin-transform-runtime</code>和<code>@babel/runtime-corejs3</code>代替</li><li>入口文件最顶处无需插入任何显式垫片代码，构建时会根据<code>browsers</code>和ES6的使用情况自动增加对应代码垫片</li><li>使用动态代码垫片可以大大减轻输出代码的体积，如果不在意低版本浏览器可以直接使用动态代码垫片</li></ul><h2 id="代码校验" tabindex="-1"><a class="header-anchor" href="#代码校验" aria-hidden="true">#</a> 代码校验</h2>',7),u={href:"https://code.visualstudio.com",target:"_blank",rel:"noopener noreferrer"},h=o("code",null,"VSCode",-1),_=o("code",null,"VSCode",-1),p={href:"https://marketplace.visualstudio.com/items?itemName=shinnn.stylelint",target:"_blank",rel:"noopener noreferrer"},m={href:"https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint",target:"_blank",rel:"noopener noreferrer"},b=o("li",null,[o("code",null,"Stylelint"),e("或"),o("code",null,"Eslint"),e("的详细配置可以参照"),o("code",null,"@yangzw/bruce-std"),e("进行安装和配置")],-1),f=o("li",null,[e("内置的全局变量"),o("code",null,"RUN_ENV"),e("用于获取当前运行环境，在使用JS校验时会报语法错误，可在代码后面追加"),o("code",null,"// eslint-disable-line")],-1);function S(x,V){const c=t("ExternalLinkIcon");return a(),i("div",null,[s,o("ul",null,[o("li",null,[e("推荐使用"),o("a",u,[e("VSCode"),l(c)]),e("开发应用，代码校验的配置都是基于"),h,e("进行驱动")]),o("li",null,[e("如果启用CSS校验或JS校验，要在"),_,e("中安装"),o("a",p,[e("Stylelint"),l(c)]),e("和"),o("a",m,[e("Eslint"),l(c)]),e("才能校验代码并高亮显示警告和错误")]),b,f])])}const N=d(n,[["render",S],["__file","detail.html.vue"]]);export{N as default};

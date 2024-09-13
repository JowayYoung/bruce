import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as l,a as t,o as c}from"./app-XK8RzlWS.js";const i={};function a(o,e){return c(),l("div",null,e[0]||(e[0]=[t('<h2 id="特色" tabindex="-1"><a class="header-anchor" href="#特色"><span>特色</span></a></h2><p><code>@yangzw/bruce-app</code>提供的功能都为零配置开箱即用，也能通过配置文件覆盖默认配置。</p><h2 id="命令功能" tabindex="-1"><a class="header-anchor" href="#命令功能"><span>命令功能</span></a></h2><ul class="task-list-container"><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-0" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-0"><strong>构建应用</strong>：根据终端的命令或交互式问答设定所需配置打包应用，可选<code>测试环境/预览环境/生产环境</code></label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-1" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-1"><strong>创建应用</strong>：根据终端的命令或交互式问答设定所需配置生成应用的骨架文件和入口文件</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-2" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-2"><strong>调试应用</strong>：根据终端的命令或交互式问答设定所需配置调试应用，以便快速的<code>HMR</code>响应文件修改</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-3" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-3"><strong>初始物料</strong>：根据终端的命令或交互式问答设定所需配置在应用根目录对应路径中创建模板文件</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-4" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-4"><strong>切换语言</strong>：根据终端的命令或交互式问答设定所需配置切换终端的本地语言，可选<code>简体中文/繁体中文/英文</code></label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-5" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-5"><strong>删除缓存</strong>：根据终端的命令或交互式问答设定所需配置快速删除应用缓存和构建物料</label></li></ul><h2 id="内置功能" tabindex="-1"><a class="header-anchor" href="#内置功能"><span>内置功能</span></a></h2><ul><li><strong>选择模式</strong>：提供<code>开发环境</code>、<code>测试环境</code>、<code>预览环境</code>和<code>生产环境</code>四种模式，每种模式对应不同构建配置和优化方案</li><li><strong>监听端口</strong>：使用开发模式时，启动本地服务器并监听指定协议域名端口，可以自动打开浏览器访问网页</li><li><strong>局部刷新</strong>：启用<code>vite</code>内置<code>Hot Module Replacement</code>，增量更新<code>css文件</code>和<code>js文件</code>，修哪更哪，无需刷新网页就能实时预览修改结果并保存当前数据状态</li><li><strong>判断入口</strong>：快速扫描应用指定的入口文件路径，判断它是否存在且合法，以便递归的方式构建每个文件及其依赖文件，构建应用时以入口文件作为根节点，必须得保证其存在且合法</li><li><strong>插入垫片</strong>：根据应用的浏览器兼容性自动插入垫片，兼容低版本浏览器 <ul class="task-list-container"><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-6" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-6"> 插入动态垫片：根据浏览器请求时的<code>UserAgent</code>返回垫片文件，<code>babel</code>编译JS时就无需带上垫片编译，起到减包作用</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-7" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-7"> 插入静态垫片：根据<code>browsers</code>和编写JS中的<code>ES6语法</code>自动插入所需垫片</label></li></ul></li><li><strong>动态导入</strong>：可用动态导入语法(<code>import().then()</code>)，处理代码时会单独分离这个模块，执行网页对应操作时才加载这个模块，使用就加载不使用就不加载(<code>代码懒加载</code>)，减少首屏加载代码大小和渲染时间</li><li><strong>编译代码</strong>：内置<code>CSS编译器</code>(<code>postcss/scss/less</code>)和<code>JS编译器</code>(<code>babel/typescript</code>)分别编译样式和脚本，开发时可用最新特性或草案规范的语法，使得代码更加简洁优雅，提高代码的可读性 <ul class="task-list-container"><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-8" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-8"><code>txt文件</code>：内置<code>asset/source</code>，将文件内容以字符串的形式导入</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-9" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-9"><code>css文件</code>：内置<code>style-loader</code>和<code>css-loader</code>，将CSS从JS中单独抽离出来，处理的<code>css文件</code>包括<code>scss/less</code>转换之后的<code>css文件</code></label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-10" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-10"><code>css文件</code>：内置<code>postcss-loader</code>，用于处理CSS最新特性和草案规范，根据<code>browsers</code>增加CSS属性前缀</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-11" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-11"><code>scss文件</code>：内置<code>sass-loader</code>，通过<code>dart-sass</code>将<code>scss</code>编译为<code>css</code></label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-12" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-12"><code>less文件</code>：内置<code>less-loader</code>，通过<code>less</code>将<code>less</code>编译为<code>css</code></label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-13" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-13"><code>js/ts文件</code>：内置<code>babel-loader</code>，根据预设环境和<code>browsers</code>并结合<code>polyfill</code>处理编写的ES6和TS，生成大众浏览器可以识别的ES5</label></li></ul></li><li><strong>校验代码</strong>：确保编写的语法没有错误，统一规范团队协作的编码规范和编码风格，减少代码冗余，在保证代码语法正确的前提下提高代码的可读性 <ul class="task-list-container"><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-14" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-14"><code>校验样式</code>：内置<code>stylelint</code>，配置标准的CSS语法规则，检查和纠正出现的错误</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-15" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-15"><code>校验脚本</code>：内置<code>eslint</code>，配置标准的JS和TS语法规则，检查和纠正出现的错误</label></li></ul></li><li><strong>分割代码</strong>：构建业务代码，将其分割为<code>WebpackRuntime代码块</code>、<code>第三方依赖代码块</code>和<code>应用业务代码块</code>三大部分</li><li><strong>合并代码</strong>：整合相同模块、相同功能和复用多次的代码，起到减包作用</li><li><strong>友好提示</strong>：当遇到警告和错误时输出高亮的代码片段和解决方案，帮助开发人员定位问题</li><li><strong>压缩合并</strong>： <ul class="task-list-container"><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-16" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-16"><code>压缩CSS</code>：内置<code>cssnano</code>，压缩去重抽离出来的CSS</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-17" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-17"><code>压缩JS</code>：内置<code>uglifyjs</code>和<code>terser</code>，压缩去重抽离出来的JS，<code>uglifyjs</code>用于压缩ES5，<code>terser</code>用于压缩ES6</label></li></ul></li><li><strong>代理接口</strong>：使用<code>proxy</code>反向代理服务端接口，解决接口跨域问题</li><li><strong>处理资源</strong>：内置<code>asset</code>，用于处理字体、图像、音频和视频等媒体资源，图像小于10k时转换为<code>Base64</code></li><li><strong>提升作用</strong>：启用<code>webpack</code>内置<code>Scope Hoisting</code>，分析模块之间的依赖关系，将构建好的模块合并到一个函数中，起到减包作用</li><li><strong>摇树优化</strong>：启用<code>webpack</code>内置<code>Tree Shaking</code>，禁止<code>babel</code>将代码转换为CJS规范，使用ESM规范的静态声明特性去除不被引用或不被执行的代码块，起到减包作用</li><li><strong>缓存优化</strong>：开启文件哈希化之后，根据文件哈希值是否发生变化执行构建操作，哈希没有变化的文件直接从缓存中获取，减少构建生成文件的时间</li><li><strong>缓存文件</strong>：首次构建速度可能慢一些，构建之后会生成本地缓存文件，以便提高后续再次构建的速度</li><li><strong>哈希文件</strong>：可以对生成文件设置哈希值，只有文件内容修改才会修改哈希值，用于长缓存优化</li><li><strong>时化目录</strong>：可以时间序列化命名输出的应用根目录，增加时间戳区分版本</li><li><strong>分析打包</strong>：可在构建之后展示构建依赖的关系，根据关系图合理分析模块</li><li><strong>定制配置</strong>：当部分配置不符合实际需求时，可以通过应用根目录中的配置文件修改默认配置，构建启动时就会使用这个配置文件覆盖默认配置</li></ul>',6)]))}const b=s(i,[["render",a],["__file","feature.html.vue"]]),r=JSON.parse('{"path":"/app/feature.html","title":"功能","lang":"zh-CN","frontmatter":{"title":"功能","icon":"rocket","order":2},"headers":[{"level":2,"title":"特色","slug":"特色","link":"#特色","children":[]},{"level":2,"title":"命令功能","slug":"命令功能","link":"#命令功能","children":[]},{"level":2,"title":"内置功能","slug":"内置功能","link":"#内置功能","children":[]}],"git":{"createdTime":1726219857000,"updatedTime":1726219857000,"contributors":[{"name":"JowayYoung","email":"young.joway@aliyun.com","commits":1}]},"readingTime":{"minutes":5.33,"words":1600},"filePathRelative":"app/feature.md","localizedDate":"2024年9月13日"}');export{b as comp,r as data};

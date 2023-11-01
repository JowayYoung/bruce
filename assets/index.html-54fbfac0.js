const e=JSON.parse('{"key":"v-8daa1a0e","path":"/","title":"Bruce FEES","lang":"zh-CN","frontmatter":{"home":true,"title":"Bruce FEES","icon":"home","containerClass":"home","heroText":"Bruce FEES","tagline":"前端工程化多包管理解决方案","heroImage":"/logo.svg","heroImageDark":"/logo.svg","heroImageStyle":null,"bgImage":"/bg/red-light.svg","bgImageDark":"/bg/red-dark.svg","bgImageStyle":{"background-attachment":"fixed"},"actions":[{"link":"/app/index.md","text":"🌐 bruce-app","type":"primary"},{"link":"/ico/index.md","text":"🔥 bruce-ico"},{"link":"/img/index.md","text":"🖼️ bruce-img"},{"link":"/lib/index.md","text":"📦 bruce-lib"},{"link":"/pkg/index.md","text":"⚡ bruce-pkg"},{"link":"/std/index.md","text":"⚙️ bruce-std"},{"link":"/ui/index.md","text":"🎨 bruce-ui"},{"link":"/us/index.md","text":"🛠️ bruce-us"}],"highlights":[{"header":"介绍","description":"<div><p><b>Bruce FEES</b>是一套完整的多功能的<b>前端工程化多包管理解决方案</b>，涵盖前端开发流程中常见的多个<b>脚手架</b>、<b>工具</b>和<b>类库</b>。</p><p>它基于<b>webpack、rollup、postcss、sass、less、babel、typescript、stylelint、eslint、jest、react、vue、vuepress</b>等多个<b>Npm模块</b>搭建和开发底层架构，采用<b>Monorepo模式</b>和<b>pnpm</b>组织和管理仓库代码。</p><p>目的是简化整个前端开发流程，通过自动化工具处理那些重复繁琐的任务，以提高整体开发效率并降低维护成本。这个框架还致力提供一个高度可扩展的基础架构，方便开发人员在项目中增加新的工具和技术，以满足不断变化的需求。</p></div>","image":"/summary.svg","bgImage":"/bg/cyan-light.svg","bgImageDark":"/bg/cyan-dark.svg"},{"header":"方案","description":"一套完整的多功能前端工程化多包管理解决方案","image":"/scheme.svg","bgImage":"/bg/blue-light.svg","bgImageDark":"/bg/blue-dark.svg","features":[{"details":"一个零配置开箱即用的JS/React应用自动化构建脚手架，真正实现构建代码和业务代码完全分离，无需关注构建过程，专心编写业务代码","link":"/app/index.md","title":"🌐 bruce-app"},{"details":"一个基于CSS背景遮罩生成CSS图标的图标处理工具，为图标提供文件监听、格式转换和样式生成的功能","link":"/ico/index.md","title":"🔥 bruce-ico"},{"details":"一个多功能无限制的图像处理工具，为图像提供压缩、分组、标记和变换的批处理功能","link":"/img/index.md","title":"🖼️ bruce-img"},{"details":"一个零配置开箱即用的JS/React类库自动化构建脚手架，真正实现构建代码和业务代码完全分离，无需关注构建过程，专心编写业务代码","link":"/lib/index.md","title":"📦 bruce-lib"},{"details":"一个强化Npm命令的模块处理工具，为模块提供基本骨架创建和链式检查发布的功能","link":"/pkg/index.md","title":"⚡ bruce-pkg"},{"details":"一个集成Stylelint、Eslint和Commitlint的VSCode配置工具，配合VSCode插件为用户提供前端文件的代码校验、代码修复和错误提示的功能","link":"/std/index.md","title":"⚙️ bruce-std"},{"details":"一个React通用组件库，提供基础组件、表单组件、向导组件、展示组件、反馈组件等通用组件","link":"/ui/index.md","title":"🎨 bruce-ui"},{"details":"一个没有框架约束的通用工具库，提供Web环境、Node环境和混合环境的工具函数","link":"/us/index.md","title":"🛠️ bruce-us"},{"details":null,"link":null,"title":null}]},{"header":"特性","image":"/feature.svg","bgImage":"/bg/purple-light.svg","bgImageDark":"/bg/purple-dark.svg","highlights":[{"title":"📦 开箱即用","details":"涵盖的解决方案全部做到零配置开箱即用"},{"title":"🛡️ 类型定义","details":"使用TypeScript开发并提供完整的类型定义文件"},{"title":"♻️ 全栈构建","details":"基于Monorepo模式和全栈链路构思完成每个解决方案"},{"title":"📋 规范保障","details":"深入每个场景内部做好开发阶段的编码细节和代码规范"},{"title":"💪 自身提炼","details":"提炼自身多年的前端工程化和架构设计的工作经验和解决方案"}]},{"header":"安装","description":"<div><p>在安装之前必须确保<code>node</code>在<code>v16</code>以上，可用<a href=\\"https://github.com/nvm-sh/nvm\\">nvm</a>或<a href=\\"https://github.com/tj/n\\">n</a>控制多版本的<code>node环境</code>。</p><p>使用<code>npm</code>安装所需的解决方案到全局环境中，<code>xyz</code>为上述可用包名。</p><p>💥<code>npm i -g @yangzw/bruce-xyz</code></p><p>使用<code>yarn</code>安装所需的解决方案到全局环境中，<code>xyz</code>为上述可用包名。</p><p>💥<code>yarn add global @yangzw/bruce-xyz</code></p><p>使用<code>pnpm</code>安装所需的解决方案到全局环境中，<code>xyz</code>为上述可用包名。</p><p>💥<code>pnpm i -g @yangzw/bruce-xyz</code></p><hr><p><b>使用npm安装失败</b></p><p>✅ 切换npm镜像为淘宝镜像：<code>npm config set registry https://registry.npmmirror.com/</code></p><p>✅ 切换node镜像为淘宝镜像：<code>npm config set disturl https://npm.taobao.org/mirrors/node/</code></p><p>✅ 重新执行安装命令：<code>npm i -g @yangzw/bruce-xyz</code></p><p><b>使用yarn安装失败</b></p><p>✅ 切换yarn镜像为淘宝镜像：<code>yarn config set registry https://registry.npmmirror.com/</code></p><p>✅ 切换node镜像为淘宝镜像：<code>yarn config set disturl https://npm.taobao.org/mirrors/node/</code></p><p>✅ 重新执行安装命令：<code>yarn add global @yangzw/bruce-xyz</code></p><p><b>使用pnpm安装失败</b></p><p>✅ 切换pnpm镜像为淘宝镜像：<code>pnpm config set registry https://registry.npmmirror.com/</code></p><p>✅ 切换node镜像为淘宝镜像：<code>pnpm config set disturl https://npm.taobao.org/mirrors/node/</code></p><p>✅ 重新执行安装命令：<code>pnpm i -g @yangzw/bruce-xyz</code></p><hr><p>在安装每个子包之后，请结合文档来使用。当然你也可以fork一份仓库代码，搭建一套属于自己的<b>前端工程化多包管理解决方案</b>。</p></div>","image":"/install.svg","bgImage":"/bg/orange-light.svg","bgImageDark":"/bg/orange-dark.svg"},{"header":"反馈","description":"<div><p><b>JowayYoung</b>，<b>资深前端工程师</b>，目前就职于网易互动娱乐事业群，负责前端工程化和前端架构设计相关工作。同时热爱技术输出，也是<b>掘金社区Lv7优秀作家</b>，发表过多本掘金小册。</p><ul><li><a href=\\"https://juejin.cn/book/6850413616484040711\\" target=\\"_blank\\">《玩转CSS的艺术之美》</a></li><li><a href=\\"https://juejin.cn/book/7034689774719860739\\" target=\\"_blank\\">《从零到一落地前端工程化》</a></li><li>《Node命令行工具的实战通关秘诀》 <small>写作中，争取12月份完成</small></li></ul><p>如果有问题请到<a href=\\"https://github.com/JowayYoung/bruce/issues\\">Github Issues</a>留言或通过这些方式联系<b>JowayYoung</b>。</p><div class=\\"normal-imgs\\"><img src=\\"/qrcode-me.jpg\\" height=\\"400\\"><img src=\\"/qrcode-us.jpg\\" height=\\"400\\"></div></div>","image":"/feedback.svg","bgImage":"/bg/green-light.svg","bgImageDark":"/bg/green-dark.svg"}],"copyright":false,"footer":"<span class=\\"mark-blue\\">MIT Licensed</span> | Copyright © <span class=\\"mark-orange\\">2017~Present</span><br>Powered By <span class=\\"mark-red\\">JowayYoung</span>"},"headers":[],"git":{"createdTime":1698822316000,"updatedTime":1698822316000,"contributors":[{"name":"JowayYoung","email":"young.joway@aliyun.com","commits":1}]},"readingTime":{"minutes":5.2,"words":1559},"filePathRelative":"index.md","localizedDate":"2023年11月1日"}');export{e as data};

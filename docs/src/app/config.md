---
title: 配置
icon: gears
order: 3
---

## 命令交互

命令交互生成的配置会保存到终端内存中，当命令执行之后会被回收。

> 📦 构建应用 **bruce-app build** / **bruce-app b**

选项|功能|默认|备注
:-:|:-:|:-:|-
**mode**|请选择环境模式|`prod`|可选`test/pre/prod`
**polyfill**|请选择代码垫片|`es6`|可选`es5/es6/custom/dynamic`
**useCsslint**|请确认是否校验样式代码|`false`|保障应用整体样式代码的质量，`建议开启`
**useJslint**|请确认是否校验脚本代码|`false`|保障应用整体脚本代码的质量，`建议开启`
**useCompressor**|请确认是否压缩文件数据|`false`|生成压缩文件，上传到服务器之后可以提供`Gzip`功能
**useHash**|请确认是否哈希文件名称|`false`|对生成文件设置哈希值，只有文件内容修改才会更新哈希值，用于长缓存优化
**useTimer**|请确认是否时化应用目录|`false`|时间序列化命名输出的应用根目录，增加时间戳区分版本
**useAnalyzer**|请确认是否分析打包结果|`false`|在构建之后展示构建依赖的关系，可以根据关系图合理分析模块

- `mode`配置提供`test测试环境`、`pre预览环境`和`prod生产环境`，在`js/ts/jsx/tsx`文件中可用全局变量`RUN_ENV`获取`mode`的具值
- `polyfill`配置提供`es5 ES5静态垫片`、`es6 ES6静态垫片`、`custom自定义静态垫片`和`dynamic动态垫片`
	- [x] **自定义静态垫片**：根据业务代码引入，兼容所有自定义范围的浏览器
	- [x] **动态垫片**：根据`UserAgent`引入，使用Polyfill服务
	- [x] **ES5静态垫片**：根据业务代码引入，兼容所有ES5下限范围的浏览器
	- [x] **ES6静态垫片**：根据业务代码引入，兼容所有ES6下限范围的浏览器

> ♾️ 创建应用 **bruce-app create** / **bruce-app c**

选项|功能|默认|备注
:-:|:-:|:-:|-
**appName**|请输入应用名称|`unknown`|只能由数字、字母或中划线组成且首末位字符只能为数字或字母
**frame**|请选择开发框架|`js`|可选`js/react`
**style**|请选择预设样式|`scss`|可选`scss/less`
**deps**|请选择应用依赖|`[]`|提供`js/react`相关的开发依赖，可选通用设计、通用工具、页面路由、状态管理和网络请求
**useTs**|请确认是否集成TypeScript|`false`|生成`tsconfig.json`，可用TS开发项目
**useInstaller**|请确认是否安装应用依赖|`false`|默认使用`yarn`安装，其次使用`npm`安装
**ext**|请选择配置后缀|`js/ts`|可选`js/json/ts/yaml`

- `ext`配置提供`js`、`json`、`ts`和`yaml`的后缀，使用TS时会将`js`变为`ts`，动态配置建议使用`js/ts`，静态配置建议使用`json/yaml`

> 🕹️ 调试应用 **bruce-app dev** / **bruce-app d**

选项|功能|默认|备注
:-:|:-:|:-:|-
**port**|请输入调试端口|`9999`|只能由正整数组成且范围在`0~65535`之间，会检测端口是否被占用
**useHttps**|请确认是否开启证书服务|`false`|调试基于`Cookies`的登录功能时必须开启此项
**useCsslint**|请确认是否校验样式代码|`false`|保障应用整体样式代码的质量，`建议开启`
**useJslint**|请确认是否校验脚本代码|`false`|保障应用整体脚本代码的质量，`建议开启`
**useOpener**|请确认是否打开初始网页|`false`|自动打开默认浏览器且跳转到指定链接

> 🎨 初始物料 **bruce-app init** / **bruce-app i**

选项|功能|默认|备注
:-:|:-:|:-:|-
**mateName**|请输入物料名称|`demo`|只能由数字、小写字母或中划线组成且首末位字符只能为数字或小写字母
**template**|请选择预设模板|`component`|可选`component/layout/flow/view/page`

- `template`配置提供`component组件`、`layout布局`、`flow流程`、`view视图`和`page页面`，根据`src/${template}s/${mateName}`拼接而成的路径生成对应文件

> 🌍 切换语言 **bruce-app locale** / **bruce-app l**

选项|功能|默认|备注
:-:|:-:|:-:|-
**lang**|请选择本地语言|`简体中文`|可选`简体中文/繁体中文/英文`

> 🗑️ 删除缓存 **bruce-app remove** / **bruce-app r**

选项|功能|默认|备注
:-:|:-:|:-:|-
**caches**|请选择废弃缓存|`[]`|可选`dist/node_modules/package-lock.json/yarn.lock`

## 命令参数

命令参数生成的配置会保存到终端内存中，当命令执行之后会被回收。

> 📦 构建应用 **bruce-app build** / **bruce-app b**

功能|配置|格式|描述
:-:|:-:|:-:|-
**分析打包结果**|`-a, --analyze`|`true`|不设置就不生效
**压缩文件数据**|`-s, --compress`|`true`|不设置就不生效
**校验样式代码**|`-c, --lintcss`|`true`|不设置就不生效
**校验脚本代码**|`-j, --lintjs`|`true`|不设置就不生效
**环境模式**|`-m, --mode`|`test/pre/prod`|不设置就默认为`prod`
**哈希文件名称**|`-n, --named`|`true`|不设置就不生效
**代码垫片**|`-p, --polyfill`|`es5/es6/custom/dynamic`|不设置就默认为`es6`
**时化应用目录**|`-t, --timed`|`true`|不设置就不生效

- 示例1：`bruce-app build --mode test --polyfill es5 --analyze --lintcss --lintjs`
- 示例2：`bruce-app b -m pre -p dynamic -a -c -j`

> ♾️ 创建应用 **bruce-app create** / **bruce-app c**

功能|配置|格式|描述
:-:|:-:|:-:|-
**开发框架**|`-f, --frame`|`js/react`|不设置就默认为`js`
**安装应用依赖**|`-i, --install`|`true`|不设置就不生效
**应用名称**|`-n, --name`|`unknown`|不设置就默认为`unknown`
**预设样式**|`-s, --style`|`scss`|不设置就默认为`scss`
**集成TypeScript**|`-t, --typescript`|`true`|不设置就不生效

- 示例1：`bruce-app create --name test-react-ts --frame react --style less -i -t`
- 示例2：`bruce-app c -n test-react -f react -s less -i`

> 🕹️ 调试应用 **bruce-app dev** / **bruce-app d**

功能|配置|格式|描述
:-:|:-:|:-:|-
**开启证书服务**|`-e, --encrypt`|`true`|不设置就不生效
**校验样式代码**|`-c, --lintcss`|`true`|不设置就不生效
**校验脚本代码**|`-j, --lintjs`|`true`|不设置就不生效
**打开初始网页**|`-o, --open`|`true`|不设置就不生效
**代码垫片**|`-p, --port`|`9999`|不设置就默认为`9999`

- 示例1：`bruce-app dev --port 9876 --encrypt --lintcss --lintjs --open`
- 示例2：`bruce-app d -p 9876 -e -c -j -o`

> 🎨 初始物料 **bruce-app init** / **bruce-app i**

功能|配置|格式|描述
:-:|:-:|:-:|-
**代码垫片**|`-n, --name`|`demo`|不设置就默认为`demo`
**代码垫片**|`-t, --template`|`component/layout/flow/view/page`|不设置就默认为`9999`

- 示例1：`bruce-app init --name navbar --template layout`
- 示例2：`bruce-app i -n navbar -t layout`

> 注意事项

- 如果`--opt [val]`的`val`为`false`，就不要增加这个配置
- 配置一定要输入完整且正确，格式为`--opt [val]`，不然会报错

## 文件配置

文件配置生成的配置会保存到配置文件中，会一直生效，除非修改文件配置。

配置文件使用`brucerc`命名，可选后缀为`js|json|ts|yaml`，请不要随意修改配置文件的名称。不对配置做动态处理建议使用`json/yaml`后缀，否则使用`js|ts`后缀。一般情况下，应用最终上线会区分`测试环境`、`预览环境`和`生产环境`，某些配置就要根据`mode`进行区分，这样只能使用`js|ts`后缀。

选项|功能|类型|默认|备注
:-:|:-:|:-:|:-:|-
**alias**|快捷方式|`Object`|`{}`|配置详情请查看[webpack->resolve->alias](https://webpack.docschina.org/configuration/resolve#resolvealias)
**browsers**|兼容范围|`String[]`|`[]`|配置详情请查看[browserslist](https://browsersl.ist)
**buildError**|构建失败回调|`Function`|`null`|形式为`({dist,mode})=>{}`，`dist`为输出路径，`mode`为环境模式
**buildSuccess**|构建成功回调|`Function`|`null`|形式为`({dist,mode})=>{}`，`dist`为输出路径，`mode`为环境模式
**copyFiles**|复制文件|`Array/Function`|`[]`|函数形式为`(mode)=>[]`，数组元素由`from`和`to`组成
**eslintIgnores**|Eslint忽略路径|`String[]`|`[]`|配置详情请查看[eslint->ignore](https://eslint.org/docs/latest/use/configure/ignore)
**eslintRules**|Eslint校验规则|`Object`|`{}`|配置详情请查看[eslint->rule](https://eslint.org/docs/latest/use/configure/rules)、[es-rules](https://eslint.org/docs/latest/rules)和[ts-rules](https://typescript-eslint.io/rules)
**frame**|开发框架|`String`|`js`|可选`js/react`，由命令生成，请不要做任何修改
**linkAssets**|链接资源|`Array`|`[]`|在HTML的`<head>`中插入链接资源，数组元素由`<link>`的属性组成
**openPages**|打开网页|`String[]`|`[]`|默认浏览器在`开发环境`准备之后自动打开数组中所有网页
**proxy**|接口代理|`Object`|`{}`|配置详情请查看[webpack-dev-server->proxy](https://webpack.js.org/configuration/dev-server/#devserverproxy)
**proxyHost**|代理域名|`String`|`""`|默认浏览器在`开发环境`中自动将当前域名替换为代理域名
**publicPath**|公共路径|`String/Function`|`""`|插入资源文件前缀，函数形式为`mode=>""`
**scriptAssets**|脚本资源|`Array`|`[]`|在HTML的`<body>`中插入脚本资源，数组元素由`<script>`的属性组成
**style**|预设样式|`String`|`scss`|可选`scss/less`，由命令生成，请不要做任何修改
**stylelintIgnores**|Stylelint忽略路径|`String[]`|`[]`|配置详情请查看[stylelint->ignore](https://stylelint.io/user-guide/configure#ignorefiles)
**stylelintRules**|Stylelint校验规则|`Object`|`{}`|配置详情请查看[stylelint>rule](https://stylelint.io/user-guide/configure/#rules)和[css-rules](https://stylelint.io/user-guide/rules)
**transpileDeps**|转译依赖|`Array`|`[]`|转译`node_modules`中没有输出ES5的模块
**useTs**|集成TypeScript|`Boolean`|`false`|可选`true/false`，由命令生成，请不要做任何修改

> 注意事项

- 如果配置文件使用`js|ts`后缀，必须使用ESM规范，导出形式为`export default {}`
- 如果配置文件的属性是`null/""/[]/{}`其中之一，会自动过滤并使用内置配置的默认值
- `copyFiles`数组元素的`from`表示源文件路径，`to`表示源文件复制之后的路径，`from`必须以`src/xxx/yyy.js`的形式书写，`to`必须以`xxx`的形式书写，在复制文件时进程会为`to`自动加上`dist/`

```js
export default {
	alias: {
		swiper: "swiper/dist/js/swiper.js"
	},
	browsers: [
		"> 0.2%",
		"last 2 version",
		"not dead"
	],
	buildError({ dist = "", mode = "prod" }) {
		console.log("失败", dist, mode);
	},
	buildSuccess({ dist = "", mode = "prod" }) {
		console.log("成功", dist, mode);
	},
	copyFiles: [
		{ from: "src/manifest.json", to: "" },
		{ from: "src/sw.js", to: "" }
	],
	eslintIgnores: [
		"src/components/*"
	],
	eslintRules: {
		"space-before-function-paren": ["error", "always"]
	},
	frame: "react",
	linkAssets: mode => [
		{ href: `${mode === "test" ? "/test" : ""}/manifest.json`, rel: "manifest" },
		{ href: "https://static.yangzw.vip/img/logo-256.png", rel: "apple-touch-icon" },
		{ href: "https://static.yangzw.vip/css/reset.css", rel: "stylesheet" }
	],
	openPages: [
		"about",
		"contact"
	],
	proxy: {
		"/api": {
			changeOrigin: true,
			secure: false,
			target: "https://yangzw.vip"
		}
	},
	proxyHost: "https://yangzw.vip",
	publicPath: mode => mode === "test" ? "/test/" : "/",
	scriptAssets: [
		"https://static.yangzw.vip/js/stats.js"
	],
	style: "scss",
	stylelintIgnores: [
		"src/assets/css/*"
	],
	stylelintRules: {
		"color-hex-case": "upper"
	},
	transpileDeps: [
		"recoil",
		"ssr-window",
		"swiper"
	],
	useTs: true
};
```

如果使用TS编码，可以安装`@yangzw/bruce-type`提供类型定义。

```ts
import { readFileSync, writeFileSync } from "node:fs";
import { normalize } from "node:path";
import { defineConfig } from "@yangzw/bruce-type";

export default defineConfig({
	alias: {
		swiper: "swiper/dist/js/swiper.js"
	},
	browsers: [
		"> 0.2%",
		"last 2 version",
		"not dead"
	],
	buildError({ dist = "", mode = "prod" }) {
		console.log("失败", dist, mode);
	},
	buildSuccess({ dist = "", mode = "prod" }) {
		if (mode === "test") {
			const manifestPath = normalize(`${dist}/manifest.json`);
			const manifestContent = readFileSync(manifestPath, "utf8");
			const manifestContentX = manifestContent.replace("user?app=pwa", "ngp/user?app=pwa");
			writeFileSync(manifestPath, manifestContentX, "utf8");
		}
	},
	copyFiles: [
		{ from: "src/manifest.json", to: "" },
		{ from: "src/sw.js", to: "" }
	],
	eslintIgnores: [
		"src/components/*"
	],
	eslintRules: {
		"space-before-function-paren": ["error", "always"]
	},
	frame: "react",
	linkAssets: mode => [
		{ href: `${mode === "test" ? "/test" : ""}/manifest.json`, rel: "manifest" },
		{ href: "https://static.yangzw.vip/img/logo-256.png", rel: "apple-touch-icon" },
		{ href: "https://static.yangzw.vip/css/reset.css", rel: "stylesheet" }
	],
	openPages: [
		"about",
		"contact"
	],
	proxy: {
		"/api": {
			changeOrigin: true,
			secure: false,
			target: "https://yangzw.vip"
		}
	},
	proxyHost: "https://yangzw.vip",
	publicPath: mode => mode === "test" ? "/test/" : "/",
	scriptAssets: [
		"https://static.yangzw.vip/js/stats.js"
	],
	style: "scss",
	stylelintIgnores: [
		"src/assets/css/*"
	],
	stylelintRules: {
		"color-hex-case": "upper"
	},
	transpileDeps: [
		"recoil",
		"ssr-window",
		"swiper"
	],
	useTs: true
});
```
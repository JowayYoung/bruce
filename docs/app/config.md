---
title: 配置
order: 3
toc: menu
---

## 命令配置

`命令配置`通过交互式命令生成并保存到终端内存中，当命令执行完毕会被回收。

> 📦 构建应用 bruce-app b

选项|功能|形式|类型|默认|备注
:-:|:-:|:-:|:-:|:-:|-
**mode**|请选择环境模式|`选择`|`String`|`开发环境`|可选`dev开发环境/test测试环境/pre预发环境/prod生产环境`

**开发环境**

选项|功能|形式|类型|默认|备注
:-:|:-:|:-:|:-:|:-:|-
**port**|请输入调试端口|`输入`|`Number`|`9999`|`调试端口`只能由正整数组成
**useHttps**|请确认是否开启证书服务|`确认`|`Boolean`|`false`|开启后可调试基于`Cookies`的登录
**useCsslint**|请确认是否校验样式代码|`确认`|`Boolean`|`false`|开启后可保障应用整体样式质量，`建议开启`
**useJslint**|请确认是否校验脚本代码|`确认`|`Boolean`|`false`|开启后可保障应用整体脚本质量，`建议开启`
**useOpener**|请确认是否打开初始页面|`确认`|`Boolean`|`false`|开启后可自动打开默认浏览器且定位到指定链接，`建议开启`

**测试环境**、**预发环境**和**生产环境**

选项|功能|形式|类型|默认|备注
:-:|:-:|:-:|:-:|:-:|-
**polyfill**|请选择引入垫片|`选择`|`String`|`静态垫片`|可选`静态垫片/动态垫片`，`静态垫片`根据`业务代码`与`Browsers`引入，`动态垫片`根据`UserAgent`引入
**useCsslint**|请确认是否校验样式代码|`确认`|`Boolean`|`false`|开启后可保障应用整体样式质量，`建议开启`
**useJslint**|请确认是否校验脚本代码|`确认`|`Boolean`|`false`|开启后可保障应用整体脚本质量，`建议开启`
**useOutput**|请确认是否输出兼容代码|`确认`|`Boolean`|`false`|开启后输出兼容低版本浏览器的代码，例如弱智浏览器`IE`
**useImageminer**|请确认是否压缩图像数据|`确认`|`Boolean`|`false`|开启后可无损压缩JPG与PNG图像，`建议开启`
**useCompressor**|请确认是否压缩文件数据|`确认`|`Boolean`|`false`|开启后可生成压缩文件，上传到服务器后可提供`Gzip`功能
**useHash**|请确认是否哈希文件名称|`确认`|`Boolean`|`false`|开启后可对生成文件设置哈希值，只有文件内容修改才会更改哈希值，用于`长缓存优化`
**useTimer**|请确认是否时化应用目录|`确认`|`Boolean`|`false`|开启后可时间序列化命名输出的应用根目录，增加时间戳区分版本
**useAnalyzer**|请确认是否分析打包结果|`确认`|`Boolean`|`false`|开启后可在构建完毕展示构建依赖的关系，根据关系图合理分析模块

> 🖨️ 初始应用 bruce-app i

选项|功能|形式|类型|默认|备注
:-:|:-:|:-:|:-:|:-:|-
**namea**|请输入应用名称|`输入`|`String`|`demo`|`应用名称`只能由数字、字母或中划线组成且首末位字符只能为数字或字母
**ext**|请选择配置后缀|`选择`|`String`|`js文件`|可选`js文件/json文件/yaml文件`，`js文件`适合动态配置，其他适合静态配置
**style**|请选择预设样式|`选择`|`String`|`scss`|可选`scss/less`
**deps**|请选择应用依赖|`选择`|`Array`|`[]`|提供`react/vue`相关开发依赖，如页面路由、状态管理和网络请求
**useTs**|请确认是否集成TypeScript|`确认`|`Boolean`|`false`|开启后会生成`tsconfig.json`
**useInstaller**|请确认是否安装应用依赖|`确认`|`Boolean`|`false`|默认使用`yarn`安装，其次使用`npm`安装

> 🌍 切换语言 bruce-app l

选项|功能|形式|类型|默认|备注
:-:|:-:|:-:|:-:|:-:|-
**lang**|请选择本地语言|`选择`|`String`|`简体中文`|可选`简体中文/繁体中文/英文`

> 🔩 创建物料 bruce-app n

选项|功能|形式|类型|默认|备注
:-:|:-:|:-:|:-:|:-:|-
**temp**|请选择预设模板|`选择`|`String`|`组件`|可选`component组件/layout布局/flow流程/view视图/page页面`
**namem**|请输入物料名称|`输入`|`String`|`demo`|`物料名称`只能由数字、小写字母或中划线组成且首末位字符只能为数字或小写字母

> 🗑️ 删除缓存 bruce-app r

选项|功能|形式|类型|默认|备注
:-:|:-:|:-:|:-:|:-:|-
**cache**|请选择废弃缓存|`选择`|`Array`|`[]`|可选`dist/node_modules/package-lock.json/yarn.lock`

## 文件配置

`文件配置`通过文件系统保存到配置文件中，会一直生效。

配置文件使用`brucerc`命名，可选后缀为`js|json|yaml`。不对配置做动态修改可用`json/yaml`，否则使用`js`。一般情况下，应用最终上线会区分`测试环境`、`预发环境`和`生产环境`，某些配置就要根据`mode`区分，此时只能使用`js`后缀了。

选项|功能|类型|默认|备注
:-:|:-:|:-:|:-:|-
**alias**|快捷方式|`Object`|`{}`|配置详情请查看[webpack->resolve->alias](https://webpack.docschina.org/configuration/resolve)
**browsers**|兼容列表|`Array`|`[]`|配置详情请查看[browserslist](https://github.com/browserslist/browserslist)
**buildErrorCb**|构建失败回调函数|`Function`|`null`|函数形式为`({err,mode,path})=>{}`，`err`为错误信息，`mode`为环境模式，`path`为输出路径
**buildSuccessCb**|构建成功回调函数|`Function`|`null`|函数形式为`({mode,path})=>{}`，`mode`为环境模式，`path`为输出路径
**eslintIgnores**|Eslint忽略路径列表|`Array`|`[]`|配置详情请查看[eslint-ignores](https://eslint.org/docs/user-guide/configuring#using-eslintignore-in-packagejson)
**eslintRules**|Eslint校验规则列表|`Object`|`{}`|配置详情请查看[eslint-rules](https://eslint.org/docs/user-guide/configuring#configuring-rules)、[rules](https://eslint.org/docs/rules)、[vue-rules](https://eslint.vuejs.org/rules)和[ts-rules](https://typescript-eslint.io/rules)
**frame**|开发框架|`String`|`js`|可选`js/react/vue`，由命令生成，请不要做任何修改
**openPages**|打开页面|`Array`|`[]`|在`开发环境`中默认浏览器会自动匹配当前页面路径
**proxy**|接口代理|`Array/Object`|`{}`|配置详情请查看[webpack-dev-server->proxy](https://webpack.js.org/configuration/dev-server/#devserver-proxy)
**proxyHost**|代理域名|`String`|`""`|在`开发环境`中默认浏览器会自动匹配当前页面域名
**publicPath**|公共路径|`String/Function`|`""`|追加资源文件前缀，可用函数区分环境模式输出不同前缀，函数形式为`mode=>{}`
**scriptAssets**|脚本资源|`Array`|`[]`|在HTML的`<body>`内插入脚本
**style**|预设样式|`String`|`scss`|可选`scss/less`，由命令生成，请不要做任何修改
**styleAssets**|样式资源|`Array`|`[]`|在HTML的`<head>`内插入样式
**stylelintIgnores**|Stylelint忽略路径列表|`Array`|`[]`|配置详情请查看[stylelint-ignores](https://stylelint.io/user-guide/configuration/#ignorefiles)
**stylelintRules**|Stylelint校验规则列表|`Object`|`{}`|配置详情请查看[stylelint-rules](https://stylelint.io/user-guide/configuration/#rules)与[rules](https://stylelint.io/user-guide/rules)
**transpileDeps**|转译依赖|`Array`|`[]`|转译`node_modules`中无`ES5`输出代码的模块
**uploadOpts**|上传配置|`Object/Function`|`null`|内置`ssh2-sftp-client`有问题，暂时无法使用，配置详情请查看[ssh2-sftp-client](https://github.com/theophilusx/ssh2-sftp-client)
**useTs**|集成TypeScript|`Boolean`|`false`|可选`true/false`，由命令生成，请不要做任何修改

> 覆盖默认配置

- 若使用`js文件`，必须使用`CJS规范`，导出形式为`module.exports = { ... };`
- 若配置文件的属性是`null/""/[]/{}`其中之一，会使用内置配置默认值
- 若自定义上传操作，必须把`uploadOpts`设置为`null`或删除该字段并使用`buildSuccessCb`定义上传操作

```js
module.exports = {
	alias: {
		swiper: "swiper/dist/js/swiper.js"
	},
	browsers: [
		"> 0.2%",
		"last 2 version",
		"not dead"
	],
	buildErrorCb({ err, mode, path }) {
		console.log("失败信息", err, mode, path);
	},
	buildSuccessCb({ mode, path }) {
		console.log("成功信息", mode, path);
	},
	eslintIgnores: [
		"src/components/*"
	],
	eslintRules: {
		"space-before-function-paren": ["error", "always"]
	},
	frame: "react",
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
	publicPath: "https://yangzw.vip",
	scriptAssets: [
		"https://static.yangzw.vip/js/stats.js"
	],
	style: "scss",
	styleAssets: [
		"https://static.yangzw.vip/css/reset.css"
	],
	stylelintIgnores: [
		"src/assets/css/*"
	],
	stylelintRules: {
		"color-hex-case": "upper"
	},
	transpileDeps: [
		"dom7",
		"ssr-window",
		"swiper"
	],
	uploadOpts: {
		host: "Your Server IP",
		password: "Your Server Password",
		path: "/root/www",
		username: "root"
	},
	useTs: true
};
```
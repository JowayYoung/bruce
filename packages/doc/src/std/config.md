---
title: 配置
icon: gears
---

## 对接

`@yangzw/bruce-std`必须在[VSCode](https://code.visualstudio.com)中使用，安装`VSCode`之后进入这些对接步骤。为了保障每次修改的配置都能生效，就必须重启`VSCode`。

- 打开`VSCode`
- 选择左边`工具栏`的`插件`，搜索并安装`Stylelint`和`Eslint`，安装之后重启`VSCode`
- 选择`文件 → 首选项 → 设置`，`设置`可选`用户`或`工作区`
	- **用户**：配置生效之后会作用于全局项目(`如果大部分项目都是单一的React应用或Vue应用，推荐使用全局配置`)
	- **工作区**：配置生效之后只会作用于当前打开项目
- 点击`设置`右上角最左边的图标`打开设置(json)`，对应文件是`settings.json`，打开配置文件
- 插入这些配置并重启`VSCode`

```json{3-9,,11-17}
{
	// 默认自定义配置
	"css.validate": false,
	"less.validate": false,
	"scss.validate": false,
	"editor.codeActionsOnSave": {
		"source.fixAll.eslint": true,
		"source.fixAll.stylelint": true
	},
	// 扩展自定义配置
	"eslint.nodePath": "path/@yangzw/bruce-std/node_modules/eslint",
	"eslint.options": {
		"overrideConfigFile": "path/@yangzw/bruce-std/dist/eslintrc.js"
	},
	"stylelint.configFile": "path/@yangzw/bruce-std/dist/stylelintrc.js",
	"stylelint.stylelintPath": "path/@yangzw/bruce-std/node_modules/stylelint",
	"stylelint.validate": ["html", "css", "scss", "less", "vue"]
}
```

配置中的`path`为`@yangzw/bruce-std`模块所在`Npm根目录`的`node_modules文件夹`，执行`npm config get prefix`获取`Npm根目录`并修改`path`。举个🌰。执行`npm config get prefix`获取的`Npm根目录`假设是`E:/Node/prefix`，那么将配置中的`path`替换为`E:/Node/prefix/node_modules`。

为了确保**Stylelint**和**Eslint**的有效性，请确保`VSCode`及其所有插件都保持最新版本。较旧版本的插件可能缺少某些功能或修复程序，会导致代码校验工具无法正常工作或产生不准确的结果。

🔥为了体验最佳效果，请始终保持`VSCode`及其所有插件的最新状态。

## 疑问

### 更新eslint到v6+就会失效

很多同学反映`eslint 6+`在`VSCode`中失效，最高使用版本只能控制在`v5.16.0`。其实这个本身就是配置问题，和版本无关。本项目的`eslint`使用`v8`，只要配置正确就能正常使用。

如果使用`npm`安装`@yangzw/bruce-std`，必须在`settings.json`中设置`eslint.packageManager`为`npm`(小写)，但是最新版本的`Eslint`已经默认此项，所以无需配置。如果使用`yarn`安装`@yangzw/bruce-std`，必须在`settings.json`中重置`eslint.packageManager`。

```json
{
	"eslint.packageManager": "yarn"
}
```

### 首次安装Eslint并接入@yangzw/bruce-std，Eslint会失效

首次安装`Eslint`，可能会在`js/ts/jsx/tsx/vue文件`的控制台中看到`Eslint`失效的警告。

```txt
Eslint is disabled since its execution has not been approved or denied yet. Use the light bulb menu to open the approval dialog.
```

这样说明`Eslint`已经被禁用，虽然配置中没有明确的禁用字段。移步到`VSCode`右下角的工具栏，会看到`禁用图标+ESLINT`的标红按钮，单击它就会弹出一个弹框，选择`Allow Everywhere`就能启用`Eslint`的校验功能。

最后，为了保障每次修改的配置都能生效，重启`VSCode`。
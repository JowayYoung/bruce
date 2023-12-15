---
title: 配置
icon: gears
order: 2
---

## 对接

`@yangzw/bruce-std`必须在[VSCode](https://code.visualstudio.com)中使用，`VSCode`安装之后进入这些对接步骤。为了保障每次修改的配置都能生效，就必须重启`VSCode`。

- 打开`VSCode`
- 选择左边`工具栏`的`插件`，搜索并安装`Stylelint/Eslint/Prettier/EditorConfig/RemoveFinalNewlines`，安装之后重启`VSCode`
- 选择`文件 → 首选项 → 设置`，`设置`可选`用户`或`工作区`
	- **用户**：配置生效之后会作用于全局项目(`如果大部分项目都是单一的React应用或Vue应用，推荐使用全局配置`)
	- **工作区**：配置生效之后只会作用于当前打开项目
- 点击`设置`右上角最左边的图标`打开设置(json)`，对应文件是`settings.json`，打开配置文件
- 插入这些配置并重启`VSCode`

```json{3-28,,30-35,,37-40,,42-44}
{
	// 系统设置
	"css.validate": false,
	"less.validate": false,
	"scss.validate": false,
	"editor.codeActionsOnSave": {
		"source.fixAll.eslint": "explicit",
		"source.fixAll.stylelint": "explicit"
	},
	"editor.defaultFormatter": "esbenp.prettier-vscode",
	"editor.detectIndentation": false,
	"editor.formatOnSave": true,
	"editor.insertSpaces": false,
	"files.eol": "\n",
	"files.removeFinalNewlines": true,
	"javascript.updateImportsOnFileMove.enabled": "always",
	"security.workspace.trust.untrustedFiles": "open",
	"typescript.updateImportsOnFileMove.enabled": "always",
	"window.zoomLevel": 1,
	"[css]": {
		"files.removeFinalNewlines": false
	},
	"[less]": {
		"files.removeFinalNewlines": false
	},
	"[scss]": {
		"files.removeFinalNewlines": false
	},
	// Prettier
	"prettier.ignorePath": "path/@yangzw/bruce-std/.prettierignore",
	"prettier.arrowParens": "avoid",
	"prettier.quoteProps": "preserve",
	"prettier.tabWidth": 4,
	"prettier.trailingComma": "none",
	"prettier.useTabs": true,
	// Eslint
	"eslint.nodePath": "path/@yangzw/bruce-std/node_modules/eslint",
	"eslint.options": {
		"overrideConfigFile": "path/@yangzw/bruce-std/dist/eslintrc.js"
	},
	// Stylelint
	"stylelint.configFile": "path/@yangzw/bruce-std/dist/stylelintrc.js",
	"stylelint.stylelintPath": "path/@yangzw/bruce-std/node_modules/stylelint",
	"stylelint.validate": ["html", "css", "scss", "less", "vue"]
}
```

配置中的`path`为`@yangzw/bruce-std`模块所在Npm根目录的`node_modules`，执行`npm config get prefix`获取Npm根目录并修改`path`。举个🌰，执行`npm config get prefix`获取的Npm根目录假设是`E:/Node/prefix`，那么将配置中的`path`替换为`E:/Node/prefix/node_modules`。

为了确保安装的插件具备有效性，`VSCode`及其所有插件都要保持最新版本。较旧版本的插件可能缺少某些功能或修复程序，会导致代码校验工具无法正常工作或产生不准确的结果。

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

### prettier无法禁用“插入空行结尾”的功能

在保存代码时，有些开发人员喜欢“插入空行结尾”，有些开发员就不喜欢“插入空行结尾”，而使用`prettier`美化代码之后就会强制使用空行结尾。 `prettier`目前没有相关的配置可以禁用“插入空行结尾”的功能，即使配置`.editorconfig`的`insert_final_newline = false`来禁止插入空行结尾也无法生效。

因为`prettier`在自己官网也说自己是一个固执己见的代码格式化程序，没有任何方式可以改变它的某些配置，除非修改它的源码。鉴于代码校验和文件格式的问题，对所有文件进行统一美化处理。

- **css/scss/less文件**：使用`stylelint`和`prettier`进行美化，保留空行结尾
- **js/ts/jsx/tsx/vue文件**：使用`eslint`进行美化，删除空行结尾
- **md文件**：不做任何处理，但是使用`RemoveFinalNewlines`插件删除空行结尾
- **其它文件**：使用`prettier`进行美化，但是使用`RemoveFinalNewlines`插件删除空行结尾

`prettier`以单个换行符结束所有文件且无法禁用它，所以`prettier`无法针对`insert_final_newline = false`生效，更多的解决方案可以查看[prettier/issues/6360](https://github.com/prettier/prettier/issues/6360)和[I'm trying to use prettier with editorconfig but prettier doesn't respect](https://lightrun.com/answers/prettier-prettier-im-trying-to-use-prettier-with-editorconfig-but-prettier-doesnt-respect)。如果喜欢“插入空行结尾”的功能，请不要安装`RemoveFinalNewlines`并删除相关的配置。
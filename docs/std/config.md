---
title: 配置
order: 2
toc: menu
---

## 接入

`@yangzw/bruce-std`必须在[VSCode](https://code.visualstudio.com)中使用，在安装好`VSCode`后进入以下对接步骤。

- 打开`VSCode`
- 选择左边`工具栏`的`插件`，搜索并安装`Stylelint`与`Eslint`，安装完毕重启`VSCode`
- 选择`文件→首选项→设置`，`设置`中可选`用户`或`工作区`
	- **用户**：配置生效后会作用于全局项目(`若大部分项目都是单一的React应用或Vue应用推荐使用全局配置`)
	- **工作区**：配置生效后只会作用于当前打开项目
- 点击`设置`右上角中间图标`打开设置(json)`，打开的对应文件是`settings.json`
- 插入以下配置并重启`VSCode`：为了保障每次修改完毕都能正常格式化代码，必须重启`VSCode`

```json
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
	"eslint.nodePath": "path/vscode-lint/node_modules",
	"eslint.options": {
		"overrideConfigFile": "path/vscode-lint/eslint/eslintrc.js" // 可变⚠️
	},
	"stylelint.configBasedir": "path/vscode-lint",
	"stylelint.configFile": "path/vscode-lint/stylelint/stylelintrc.js",
	"stylelint.customSyntax": "postcss-html", // 可变⚠️
	"stylelint.stylelintPath": "path/vscode-lint/node_modules/stylelint",
	"stylelint.validate": ["html", "css", "scss", "less", "vue"]
}
```

以上配置的`path`为`vscode-lint`模块所在的**NPM根目录**，可执行`npm config get prefix`获取**NPM根目录**并替换`path`。

- 执行`npm config get prefix`获取的**NPM根目录**，例如是`E:/Node/prefix/node_modules`
- 将上述配置的`path`替换为`E:/Node/prefix/node_modules`

**请保持VSCode及其所有插件都为最新版本**，防止因版本问题导致`Stylelint`与`Eslint`失效。

## 结构

请根据项目自行选择以下配置文件。

- **stylelint文件夹**
	- [x] [stylelintrc.js](https://github.com/JowayYoung/bruce/tree/main/packages/stdstylelint/stylelintrc.js)：校验`html/css/scss/less/vue文件`
- **eslint文件夹**：校验`html/js/jsx/vue文件`
	- [x] [eslintrc.js](https://github.com/JowayYoung/bruce/tree/main/packages/stdeslint/eslintrc.js)：校验`html/js文件`
	- [x] [eslintrc.react.js](https://github.com/JowayYoung/bruce/tree/main/packages/stdeslint/eslintrc.react.js)：校验`html/jsx文件`
	- [x] [eslintrc.vue.js](https://github.com/JowayYoung/bruce/tree/main/packages/stdeslint/eslintrc.vue.js)：校验`html/vue文件`
- **tslint文件夹**：校验`html/ts/tsx/vue文件`(`Tslint`已弃用，使用`Eslint`代替)
	- [x] [tsconfig.json](https://github.com/JowayYoung/bruce/tree/main/packages/stdtslint/tsconfig.json)：配置`TypeScript`
	- [x] [tslintrc.js](https://github.com/JowayYoung/bruce/tree/main/packages/stdtslint/tslintrc.js)：校验`html/ts文件`
	- [x] [tslintrc.react.js](https://github.com/JowayYoung/bruce/tree/main/packages/stdtslint/tslintrc.react.js)：校验`html/tsx文件`
	- [x] [tslintrc.vue.js](https://github.com/JowayYoung/bruce/tree/main/packages/stdtslint/tslintrc.vue.js)：校验`html/vue文件`

> Stylelint

校验不同类型代码需实时修改`stylelint.customSyntax`的值。

- [x] **CSS/SCSS**：`postcss-scss`
- [x] **CSS/LESS**：`postcss-less`
- [x] **HTML/VUE**：`postcss-html`

> Eslint

校验不同类型代码需实时修改`eslint.options.overrideConfigFile`的值。

- [x] **JS**：`path/vscode-lint/eslint/eslintrc.js`
- [x] **React**：`path/vscode-lint/eslint/eslintrc.react.js`
- [x] **Vue**：`path/vscode-lint/eslint/eslintrc.vue.js`
- [x] **TS**：`path/vscode-lint/tslint/tslintrc.js`
- [x] **React TS**：`path/vscode-lint/tslint/tslintrc.react.js`
- [x] **Vue TS**：`path/vscode-lint/tslint/tslintrc.vue.js`

## 疑问

##### 更新eslint到v6+就会失效

很多同学反映`eslint 6+`在`VSCode`上失效，最高使用版本只能控制在`v5.16.0`。其实这本身就是配置问题，跟版本无关。本项目的`eslint`使用`v8`，只要配置正确就能正常使用。

上述安装行为使用了`NPM`，那么`settings.json`的`eslint.packageManager`必须配置为`npm`(小写)，但最新版本`Eslint`已默认此项，所以无需配置。若上述安装行为变成`yarn global add vscode-lint`，那么必须在`settings.json`中添加以下配置。

```json
{
	"eslint.packageManager": "yarn"
}
```

##### 首次安装Eslint并执行上述配置就会失效

首次安装`Eslint`可能会在`js/ts/jsx/tsx/vue文件`的控制台中看到以下警告。

```txt
Eslint is disabled since its execution has not been approved or denied yet. Use the light bulb menu to open the approval dialog.
```

说明`Eslint`被禁用了，虽然配置中无明确的禁用字段，但还是被禁用了。此时移步到`VSCode`右下角的工具栏，会看到`禁用图标+ESLINT`的标红按钮，单击它就会弹出一个弹框，选择`Allow Everywhere`就能启用`Eslint`的校验功能了。
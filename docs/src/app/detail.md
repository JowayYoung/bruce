---
title: 细节
icon: file-lines
order: 4
---

## CLI

- 请务必遵循错误提示修正相关的代码，不要随意修改构建源码和生成配置，否则可能导致应用构建进程无法运行
- 目前只装备`react`相关的构建配置，请勿用于构建`angular/vue`应用或其它`MVVM`应用
- 默认显示语言为`简体中文`，如果切换`繁体中文`或`英文`请执行`bruce-app l`切换语言
- 当前应用只能是`React应用`才能使用`bruce-app n`命令
- 多次构建之后可能因为长时间使用长缓存优化，导致重新构建时的缓存存在几率读取失败而提示错误，可以执行`bruce-app r`删除`node_modules`并重装依赖

## 文件结构

- `bruce-app c`创建应用根目录的入口文件为`src/index.(js|ts|jsx|tsx)`，千万不要将入口文件修改为其它路径、名称或后缀
- `bruce-app c`创建应用如果为TS，就不要修改`brucerc.(js|json|ts|yaml)`的`useTs`，只有确保它为`true`才能正常编译和校验TS
- `bruce-app c`创建应用如果为TS，会在应用根目录中自动生成TS配置文件`tsconfig.json`
- 针对相对路径较长的文件，可以通过导入快捷方式符快速定位文件路径：`@`表示`src`目录

## 代码垫片

- `@babel/polyfill`在`7.4.0`之后被弃用，使用`@babel/plugin-transform-runtime`和`@babel/runtime-corejs3`代替
- 入口文件最顶处无需插入任何显式垫片代码，构建时会根据`browsers`和ES6的使用情况自动增加对应代码垫片
- 使用动态代码垫片可以大大减轻输出代码的体积，如果不在意低版本浏览器可以直接使用动态代码垫片

## 代码校验

- 推荐使用[VSCode](https://code.visualstudio.com)开发应用，代码校验的配置都是基于`VSCode`进行驱动
- 如果启用CSS校验或JS校验，要在`VSCode`中安装[Stylelint](https://marketplace.visualstudio.com/items?itemName=shinnn.stylelint)和[Eslint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)才能校验代码并高亮显示警告和错误
- `Stylelint`或`Eslint`的详细配置可以参照`@yangzw/bruce-std`进行安装和配置
- 内置的全局变量`RUN_ENV`用于获取当前运行环境，在使用JS校验时会报语法错误，可在代码后面追加`// eslint-disable-line`
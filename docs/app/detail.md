---
title: 细节
order: 4
toc: menu
---

## CLI

- 请务必遵循错误提示修正相关代码，不要随意改动构建源码与生成配置，否则可能导致应用构建进程无法运行
- 目前只装备`React`与`Vue`相关构建配置，请勿用于构建`Angular`应用或其他`MVVM`应用
- 默认显示语言为`简体中文`，若需切换`繁体中文`或`英文`请执行`bruce-app l`切换语言
- 当前应用只能是`React`应用或`Vue`应用才能使用`bruce-app n`命令
- 多次构建后可能因为长时间使用长缓存优化，导致重新构建时缓存有几率读取失败而提示错误，可执行`bruce-app r`删除`node_modules`并重装依赖

## 文件结构

- `bruce-app i`初始应用根目录的入口文件为`src/index.(js|ts|jsx|tsx)`，千万不要将入口文件修改为其他路径、名称或后缀
- `bruce-app i`初始应用若为TS，就不要修改`brucerc.(js|json|yml)`的`useTs`，只有确保其为`true`才能正常编译与校验TS
- `bruce-app i`初始应用若为TS，会在应用根目录下自动生成TS配置文件`tsconfig.json`
- 针对相对路径较长的文件，可通过导入快捷方式符快速定位文件路径：`#`表示根目录，`@`表示`src目录`
- 使用`CSS图标`时必须把图标统一放置到`src/assets/icon`下，文件格式可为`jpg/png/svg/webp`

## 代码垫片

- `@babel/polyfill`在`7.4.0`后被弃用，因此使用`@babel/plugin-transform-runtime`与`@babel/runtime-corejs3`代替
- 入口文件最顶处无需插入任何显式垫片代码，构建时会根据`browsers`与ES6代码使用情况自动添加对应的代码垫片
- 使用`动态代码垫片`可大大减轻输出代码的体积，若不在意低版本浏览器可直接使用`动态代码垫片`

## 代码校验

- 推荐使用[VSCode](https://code.visualstudio.com)开发应用，以下配置也是基于`VSCode`驱动
- 若启用`CSS校验`或`JS校验`，需在`VSCode`上安装[Stylelint](https://marketplace.visualstudio.com/items?itemName=shinnn.stylelint)与[Eslint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)才能校验代码并高亮显示警告与错误
- `Stylelint`或`Eslint`的详细配置可参照`@bruce/std`
- 内置的全局变量`RUN_ENV`用于获取当前运行环境，在使用`JS校验`时会报语法错误，可在代码后面追加`// eslint-disable-line`
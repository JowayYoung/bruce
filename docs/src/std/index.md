---
title: 指南
icon: lightbulb
order: 1
---

## 背景

代码规范在前端工程化实践中扮演着非常重要的角色，它主要用于约束团队成员的编码规范和编码风格，使用代码规范有这些好处。

- 强制规范团队的编码规范和编码风格，使新旧成员的编码习惯保持一致，有利于项目的维护和扩展
- 提高项目代码的可维护性和可接入性，让新成员能够快速适应项目的架构和需求，降低项目的学习成本
- 保障项目的整体质量，减少`无用代码`、`重复代码`、`错误代码`和`漏洞代码`的产生几率，提高项目的稳定性和安全性

为了实现这些目标，代码校验工具起到非常重要的作用。众所周知，几乎所有编辑器都能配置代码校验工具来检测代码中的错误和漏洞，根据提供的修复方案格输出正确的代码，使得代码更加严谨。

通过使用代码校验工具，开发人员可以轻松地遵循代码规范，在编码时也能避免常见的错误和漏洞，以便提高项目的代码质量和开发效率。

## 介绍

![bruce-std](https://img.shields.io/badge/@yangzw/bruce--std-集成代码校验的VSCode配置工具-66f.svg)

`@yangzw/bruce-std`是一个集成代码校验的VSCode配置工具，配合VSCode插件为用户提供前端文件的代码校验、代码修复和错误提示的功能。一条命令就能一次生成`stylelint + eslint + commitlint + prettier + editorconfig`的全局配置，正真做到配置一体化处理，使得项目完全脱离这些繁琐配置的影响。

它的主要作用是约束团队成员的编码规范和编码风格，以便提高项目代码的可维护性和可接入性，保障项目的整体质量，减少无用代码、重复代码、错误代码和漏洞代码的产生几率。它的根本目的是通过**一次部署全局运行**，统一所有项目的编码规范和编码风格，帮助开发人员养成规范的码字习惯，减少不必要的错误和漏洞，提高项目的代码质量和开发效率。

在全局环境中使用它，开发人员可以轻松地进行代码校验，避免常见的错误和漏洞，在编码时遵循统一的编码规范和编码风格。这样不仅可以提高代码的可读性和可维护性，还能降低项目的学习成本和维护成本，使得团队协作更加高效顺畅。

![author](https://img.shields.io/badge/author-JowayYoung-f66.svg)
![version](https://img.shields.io/badge/version-1.1.8-f66.svg)
![node](https://img.shields.io/badge/node-%3E%3D16.0.0-3c9.svg)
![npm](https://img.shields.io/badge/npm-%3E%3D7.10.0-3c9.svg)
![test](https://img.shields.io/badge/test-passing-f90.svg)
![build](https://img.shields.io/badge/build-passing-f90.svg)
![coverage](https://img.shields.io/badge/coverage-mostly-09f.svg)
![license](https://img.shields.io/badge/license-MIT-09f.svg)

## 依赖

`@yangzw/bruce-std`依赖多个核心Npm模块的最新版本。

![postcss](https://img.shields.io/npm/v/postcss?label=postcss&color=3c9)
![babel](https://img.shields.io/npm/v/%40babel%2Fcore?label=babel&color=3c9)
![typescript](https://img.shields.io/npm/v/typescript?label=typescript&color=3c9)
![prettier](https://img.shields.io/npm/v/prettier?label=prettier&color=3c9)
![stylelint](https://img.shields.io/npm/v/stylelint?label=stylelint&color=3c9)
![eslint](https://img.shields.io/npm/v/eslint?label=eslint&color=3c9)
![typescript-eslint](https://img.shields.io/npm/v/%40typescript-eslint%2Fparser?label=typescript-eslint&color=3c9)
![markdownlint](https://img.shields.io/npm/v/markdownlint?label=markdownlint&color=3c9)
![commitlint](https://img.shields.io/npm/v/commitlint?label=commitlint&color=3c9)
![commitizen](https://img.shields.io/npm/v/commitizen?label=commitizen&color=3c9)
![editorconfig](https://img.shields.io/npm/v/editorconfig?label=editorconfig&color=3c9)

为了方便表达，统一这些名词。

- [x] 后续提及的`Prettier`、`Stylelint`、`Eslint`和`Markdownlint`都是表示VSCode插件
- [x] 后续提及的`prettier`、`stylelint`、`eslint`和`markdownlint`都是表示Npm模块

## 安装

使用`npm/yarn/pnpm`安装`@yangzw/bruce-std`。

::: code-tabs#shell
@tab npm

```sh
npm i -g @yangzw/bruce-std
```

@tab yarn

```sh
yarn add global @yangzw/bruce-std
```

@tab pnpm

```sh
pnpm i -g @yangzw/bruce-std
```

:::

使用VSCode安装`Prettier/Stylelint/Eslint/Markdownlint/Editorconfig`。

- [x] **[Editorconfig](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)**：统一编码风格
- [x] **[Eslint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)**：校验JS类型文件
- [x] **[Markdownlint](https://marketplace.visualstudio.com/items?itemName=DavidAnson.vscode-markdownlint)**：校验MD类型文件
- [x] **[Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)**：美化所有类型文件
- [x] **[Stylelint](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint)**：校验CSS类型文件

考虑到`prettier`比较固执，只在`stylelint`中集成`prettier`，暂时没有在`eslint`中集成`prettier`，而`eslint`提供的美化功能同样非常厉害。另外`prettier`还能美化其它格式的文件，但是排除`md文件`在外。

## 使用

功能|命令|缩写|范围|使用|描述
:-:|:-:|:-:|:-:|:-:|-
复制配置|**bruce-std copy**|`bruce-std c`|`prettier/stylelint/eslint/markdownlint`|全局|打开`settings.json`粘贴配置
初始配置|**bruce-std init**|`bruce-std i`|`commitlint/editorconfig`|局部|自动将配置写入`package.json`
更新配置|**bruce-std update**|`bruce-std u`|`prettier/stylelint/eslint/markdownlint`|全局|自动将配置写入`settings.json`

- `bruce-std c`和`bruce-std u`用于配置`prettier/stylelint/eslint/markdownlint`
- `bruce-std i`用于配置`commitlint/editorconfig`
- `bruce-std c`会抛出`settings.json`的文件路径，在CMD工具中可以直接打开文件
- `bruce-std u`会覆写`settings.json`，导致原来文件中存在的注释会被清除，**慎用**
- 手动配置可能比较保险，具体操作请查看[配置](/std/config.md)

功能|命令|缩写
:-:|:-:|:-:
帮助信息|**bruce-std --help**|`bruce-std -h`
版本信息|**bruce-std --version**|`bruce-std -v`

---

因为这些代码校验工具各自的特殊性，`@yangzw/bruce-std`分别对`prettier/stylelint/eslint/markdownlint`和`commitlint/editorconfig`做针对性的处理。

- 对`prettier/stylelint/eslint/markdownlint`做成全局统一配置，执行`bruce-std c`或`bruce-std u`在VSCode的`settings.json`中生成全局配置
- 对`commitlint/editorconfig`做成项目单一配置，执行`bruce-std i`在项目目录`package.json`中生成局部配置，同时生成`.editorconfig`和`czrc.cjs`

总之，第一条注意事项只需执行一次就能全局生效，第二条注意事项需要在每个项目中执行一次才能正常生效。
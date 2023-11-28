---
title: 指南
icon: lightbulb
order: 1
---

## 背景

代码规范在前端工程化实践中扮演着至关重要的角色，它主要用于约束团队成员的编码规范和编码风格。使用代码规范有这些好处。

- 强制规范团队的编码规范和编码风格，使新旧成员的编码习惯保持一致，有利于项目的维护和扩展
- 提高项目代码的可维护性和可接入性，让新成员能够快速适应项目的架构和需求，降低项目的学习成本
- 保障项目的整体质量，减少`无用代码`、`重复代码`、`错误代码`和`漏洞代码`的产生几率，提高项目的稳定性和安全性

为了实现这些目标，代码校验工具的代码格式化功能起到至关重要的作用。众所周知，几乎所有编辑器都能配置代码校验工具来检测代码中的错误和漏洞，根据提供的修复方案格式化出正确的代码，使代码更加严谨。

通过使用代码格式化功能，开发人员可以轻松地遵循代码规范，在编码时也能避免常见的错误和漏洞，以提高项目的代码质量和开发效率。

## 介绍

![bruce-std](https://img.shields.io/badge/@yangzw/bruce--std-集成Stylelint、Eslint和Commitlint的VSCode配置工具-66f.svg)

`@yangzw/bruce-std`是一个集成`Stylelint`、`Eslint`和`Commitlint`的`VSCode配置工具`，配合`VSCode插件`为用户提供前端文件的代码校验、代码修复和错误提示的功能。

它的主要作用是约束团队成员的编码规范和编码风格，以提高项目代码的可维护性和可接入性，保障项目的整体质量，减少无用代码、重复代码、错误代码和漏洞代码的产生几率。它的根本目的是通过**一次部署全局运行**，统一所有项目的编码规范和编码风格，帮助开发人员养成规范的码字习惯，减少不必要的错误和漏洞，提高项目的代码质量和开发效率。

在全局环境中使用它，开发人员可以轻松地进行代码校验和格式化，避免常见的错误和漏洞，在编码时遵循统一的编码规范和编码风格。这样不仅可以提高代码的可读性和可维护性，还能降低项目的学习成本和维护成本，使团队协作更加高效顺畅。

![author](https://img.shields.io/badge/author-JowayYoung-f66.svg)
![version](https://img.shields.io/badge/version-1.1.6-f66.svg)
![node](https://img.shields.io/badge/node-%3E%3D16.0.0-3c9.svg)
![npm](https://img.shields.io/badge/npm-%3E%3D7.10.0-3c9.svg)
![test](https://img.shields.io/badge/test-passing-f90.svg)
![build](https://img.shields.io/badge/build-passing-f90.svg)
![coverage](https://img.shields.io/badge/coverage-mostly-09f.svg)
![license](https://img.shields.io/badge/license-MIT-09f.svg)

## 依赖

`@yangzw/bruce-std`依赖多个核心`Npm模块`的最新版本。

![postcss](https://img.shields.io/npm/v/postcss?label=postcss&color=3c9)
![babel](https://img.shields.io/npm/v/%40babel%2Fcore?label=babel&color=3c9)
![typescript](https://img.shields.io/npm/v/typescript?label=typescript&color=3c9)
![stylelint](https://img.shields.io/npm/v/stylelint?label=stylelint&color=3c9)
![eslint](https://img.shields.io/npm/v/eslint?label=eslint&color=3c9)
![typescript-eslint](https://img.shields.io/npm/v/%40typescript-eslint%2Fparser?label=typescript-eslint&color=3c9)

为了方便表达，统一这些名词。

- [x] 后续提及的`Stylelint`和`Eslint`表示`VSCode插件`
- [x] 后续提及的`stylelint`和`eslint`表示`Npm模块`

## 安装

使用`npm/yarn/pnpm`安装`@yangzw/bruce-std`

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

## 使用

功能|命令|缩写|描述
:-:|:-:|:-:|-
复制配置|**bruce-std copy**|`bruce-std c`|打开`settings.json`粘贴配置
更新配置|**bruce-std update**|`bruce-std u`|自动将配置写入`settings.json`

- `bruce-std c`会抛出`settings.json`的文件路径，在`CMD工具`中可以直接打开文件
- `bruce-std u`会覆写`settings.json`，导致原来文件中可能存在的注释会被清除，慎用
- 手动配置可能比较保险，具体操作请查看[配置](/std/config.md)

功能|命令|缩写
:-:|:-:|:-:
帮助信息|**bruce-std --help**|`bruce-std -h`
版本信息|**bruce-std --version**|`bruce-std -v`
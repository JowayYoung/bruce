---
title: 指南
icon: lightbulb
order: 1
---

## 背景

在传统的模块开发模式中，每次创建模块都要手动输入很多参数，却只能生成一个`package.json`文件，其它骨架文件还要手动创建。每次发布模块都要手动确认`Node环境`、`Node镜像`和`账号状态`，以便保障模块被发布到正确位置。这些操作显得重复繁琐，浪费开发人员大量的时间和精力。

为了解决这些问题，需要一种更加智能自动化的方式处理模块。它可以根据用户输入的参数自动生成对应骨架文件，在发布模块时自动确认`Node环境`、`Node镜像`和`账号状态`，以免手动操作带来的繁琐和风险。

## 介绍

![bruce-pkg](https://img.shields.io/badge/@yangzw/bruce--pkg-强化Npm命令的模块处理工具-66f.svg)

`@yangzw/bruce-pkg`是一个强化`Npm命令`的模块处理工具，为模块提供基本骨架创建和链式检查发布的功能。强化`npm init`和`npm publish`两条常见的命令，提供更加强大便捷的扩展功能。

它的主要作用是简化模块开发的工作流程，提高模块的开发的效率和质量，增强模块的可塑性和一致性。通过将多个操作步骤和执行流程合并为一条命令，使开发人员可以更加方便快捷地创建、发布和管理模块，避免手动操作带来的繁琐和风险。自动化很多原本需要手动完成的操作，节省开发人员的时间和精力，使得他们可以更加专注代码的编写和优化。

![author](https://img.shields.io/badge/author-JowayYoung-f66.svg)
![version](https://img.shields.io/badge/version-1.3.0-f66.svg)
![node](https://img.shields.io/badge/node-%3E%3D18.18.0-3c9.svg)
![npm](https://img.shields.io/badge/npm-%3E%3D9.8.1-3c9.svg)
![test](https://img.shields.io/badge/test-passing-f90.svg)
![build](https://img.shields.io/badge/build-passing-f90.svg)
![coverage](https://img.shields.io/badge/coverage-mostly-09f.svg)
![license](https://img.shields.io/badge/license-MIT-09f.svg)

## 安装

使用`npm/yarn/pnpm`安装`@yangzw/bruce-pkg`。

::: code-tabs#shell
@tab npm

```sh
npm i -g @yangzw/bruce-pkg
```

@tab yarn

```sh
yarn add global @yangzw/bruce-pkg
```

@tab pnpm

```sh
pnpm i -g @yangzw/bruce-pkg
```

:::

## 使用

功能|命令|缩写
:-:|:-:|:-:
创建模块|**bruce-pkg create**|`bruce-pkg c`
发布模块|**bruce-pkg publish**|`bruce-pkg p`

- 执行`bruce-pkg c`创建模块，使用交互式问答生成模块的骨架文件
- 执行`cd my-package`进入模块，开发你的模块功能
- 执行`bruce-pkg p`发布模块，如果执行步骤出错，请根据提示修复再执行`bruce-pkg p`

功能|命令|缩写
:-:|:-:|:-:
帮助信息|**bruce-pkg --help**|`bruce-pkg -h`
版本信息|**bruce-pkg --version**|`bruce-pkg -v`
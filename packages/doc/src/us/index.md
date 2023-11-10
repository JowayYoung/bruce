---
title: 指南
icon: lightbulb
order: 1
---

## 背景

**工欲善其事，必先利其器**。在研发时，经常会遇到一些重复使用的工具函数。例如，Web类型、格式时间差、URL参数反序列化、过滤XSS等函数。这些工具函数在每个项目中都要使用，如果每次都是重复地复制粘贴，显然会浪费很多时间和精力。

为了解决这个问题，将常见的工具函数进行分类整理，再将它们封装为一个独立的模块，然后将这个模块发布到`Npm公有仓库`中，供其他开发人员使用。这样一来，每次在研发时，只需通过`Npm`安装这个工具函数模块，然后在代码引入即可。这样大大提高开发效率，也避免复制粘贴的操作带来的重复劳动和可能错误。

因为这些工具函数都是根据功能进行分类，所以在需要使用某个功能时，只需查找对应功能并读取其文档，就能快速掌握如何使用这个函数。这样可以将更多的时间用在解决项目的实际问题中，而不是浪费在琐碎的代码复制粘贴中。同时，这也是笔者在工作中遵循的一条原则：**工欲善其事，必先利其器**。

## 介绍

![bruce-us](https://img.shields.io/badge/@yangzw/bruce--us-没有框架约束的通用工具库-66f.svg)

`@yangzw/bruce-us`是一个没有框架约束的通用工具库，提供`Web环境`、`Node环境`和`混合环境`的工具函数。

它是一个非常实用的工具库，不依赖于任何框架，还具备出色的跨平台兼容性。它提供很多常见的工具函数，可以帮助开发人员更加高效地完成编码。无论你是前端开发还是后端开发，都能使用这个工具库来简化开发过程。无论是在浏览器中还是在服务器中，都能使用这个工具库来处理各种任务。无论你是需要处理字符串、数组、布尔还是进行DOM操作、URL操作，这个工具库都能满足你的需求。所以，如果你正在寻找一个没有框架约束的通用工具库，`@yangzw/bruce-us`绝对是一个不错的选择。

整体包括`106`个函数，分别是`Common`函数`63`个，`Web`函数`29`个，`Node`函数`14`个。

![author](https://img.shields.io/badge/author-JowayYoung-f66.svg)
![version](https://img.shields.io/badge/version-1.1.5-f66.svg)
![node](https://img.shields.io/badge/node-%3E%3D12.0.0-3c9.svg)
![npm](https://img.shields.io/badge/npm-%3E%3D6.9.0-3c9.svg)
![test](https://img.shields.io/badge/test-passing-f90.svg)
![build](https://img.shields.io/badge/build-passing-f90.svg)
![coverage](https://img.shields.io/badge/coverage-mostly-09f.svg)
![license](https://img.shields.io/badge/license-MIT-09f.svg)

## 安装

使用`npm/yarn/pnpm`安装`@yangzw/bruce-us`

::: code-tabs#shell
@tab npm

```sh
npm i @yangzw/bruce-us
```

@tab yarn

```sh
yarn add @yangzw/bruce-us
```

@tab pnpm

```sh
pnpm i @yangzw/bruce-us
```
:::

## 使用

`@yangzw/bruce-us`根据**Web**和**Node**两种JS运行时环境划分代码，生成三种`bundle.js`。每个文件在不同JS运行时环境中运行，必须根据JS运行时环境引用文件，否则会报错。

模块|工具库|运行环境|对应文件|ESM对应文件|UMD对应文件
:-:|:-:|:-:|:-:|:-:|:-:
**Common**|通用工具库|浏览器<br>服务器|`index.js`|`index.esm.js`|`index.umd.js`
**Web**|Web工具库|浏览器|`web.js`|`web.esm.js`|`web.umd.js`
**Node**|Node工具库|服务器|`node.js`|`node.esm.js`|-

具体操作请查看[使用](/us/usage.md)。

## 兼容

- **Web**：`>=95%`
- **Node**：`>=12.0.0`

每个函数功能的右侧都可能标记一个`Web/Node`，如果没有标记则混合环境都能使用。
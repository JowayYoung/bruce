---
title: 指南
icon: lightbulb
---

## 背景

伴随着前端技术的不断发展和壮大，从前的简略几个文件已经发展成为现在繁复的一大堆文件，各种功能拓展和工具移植被整合至应用中，使得应用规模在不断扩大的同时，也变得愈发难以掌控。应用在朝着工程化和一体化的方向发展。

前端技术的快速更新换代，使得前端代码的业务逻辑和交互效果变得越来越复杂，应用的维护和迭代也变得更加难以把握，这对开发人员来说无疑是一项艰巨的任务。模块化开发和各种框架将应用程序分解为多个小模块，使得最终的发布工作更加困难，缺乏统一的标准，导致应用结构五花八门。

一般的应用通常由团队共同开发，而团队成员的编码规范和编码风格往往无法达成一致。在开发时，需要考虑的主要问题是如何提高开发效率和提升运行性能，这是每个开发人员必须要面对的问题，所以应用的自动化构建在整个项目流程中变得越来越重要。

## 介绍

![bruce-app](https://img.shields.io/badge/@yangzw/bruce--app-零配置开箱即用的JS/React应用自动化构建脚手架-66f.svg)

`@yangzw/bruce-app`是一个零配置开箱即用的**JS/React**应用自动化构建脚手架，真正实现构建代码和业务代码完全分离，无需关注构建过程，专心编写业务代码。

其中最突出的优势是它可以进行零配置开箱即用的安装和运行，无需任何特殊设置和额外的安装步骤，可以快速适应各种开发环境和工作场景，极大地方便那些初学者和中等水平的开发人员，甚至是那些对快速开发应用有需求的开发人员。对于这些用户来说，这个功能的设计特色尤其适合他们，因为他们不需要花费大量的精力来学习和掌握复杂的开发技术和流程，而是可以专注于应用本身的开发和调试。

除了上述优势之外，它还提供自定义配置文件的功能，让开发人员可以根据自己的需求和偏好，自由地修改应用的默认配置，无需过多地投入精力来构建和修改代码，使得应用结构更加简化，也使得开发工作更加高效。

总之，它提供一种非常简便和直观的编程环境和工作流程，让开发人员可以更加专注于应用本身的开发和调试，以提高开发效率和工作质量。

![author](https://img.shields.io/badge/author-JowayYoung-f66.svg)
![version](https://img.shields.io/badge/version-1.1.3-f66.svg)
![node](https://img.shields.io/badge/node-%3E%3D16.0.0-3c9.svg)
![npm](https://img.shields.io/badge/npm-%3E%3D7.10.0-3c9.svg)
![test](https://img.shields.io/badge/test-passing-f90.svg)
![build](https://img.shields.io/badge/build-passing-f90.svg)
![coverage](https://img.shields.io/badge/coverage-mostly-09f.svg)
![license](https://img.shields.io/badge/license-MIT-09f.svg)

## 依赖

`@yangzw/bruce-app`依赖多个核心`Npm模块`的最新版本，它是一个基于`vite v4`和`webpack v5`开发出来的极速零配置开箱即用的Web应用构建工具(**每次更新模块版本都会保持所有依赖为最新版本**)，集成各种常见的工具(`postcss`、`sass`、`less`、`babel`、`typescript`、`stylelint`、`eslint`等)扩展构建功能，用于管理**JS/React**技术栈的应用。

![commander](https://img.shields.io/npm/v/commander?label=commander&color=f66)
![inquirer](https://img.shields.io/npm/v/inquirer?label=inquirer&color=f66)
![vite](https://img.shields.io/npm/v/vite?label=vite&color=66f)
![webpack](https://img.shields.io/npm/v/webpack?label=webpack&color=66f)
![postcss](https://img.shields.io/npm/v/postcss?label=postcss&color=f90)
![corejs](https://img.shields.io/npm/v/core-js?label=corejs&color=f90)
![sass](https://img.shields.io/npm/v/sass?label=sass&color=f90)
![less](https://img.shields.io/npm/v/less?label=less&color=f90)
![babel](https://img.shields.io/npm/v/%40babel%2Fcore?label=babel&color=f90)
![typescript](https://img.shields.io/npm/v/typescript?label=typescript&color=f90)
![stylelint](https://img.shields.io/npm/v/stylelint?label=stylelint&color=09f)
![eslint](https://img.shields.io/npm/v/eslint?label=eslint&color=09f)
![cssnano](https://img.shields.io/npm/v/cssnano?label=cssnano&color=9c3)
![uglifyjs](https://img.shields.io/npm/v/uglify-js?label=uglifyjs&color=9c3)
![terser](https://img.shields.io/npm/v/terser?label=terser&color=9c3)
![react](https://img.shields.io/npm/v/react?label=react&color=3c9)

## 安装

使用`npm/yarn/pnpm`安装`@yangzw/bruce-app`

::: code-tabs#shell
@tab npm

```sh
npm i -g @yangzw/bruce-app
```

@tab yarn

```sh
yarn add global @yangzw/bruce-app
```

@tab pnpm

```sh
pnpm i -g @yangzw/bruce-app
```
:::

## 使用

功能|命令|缩写
:-:|:-:|:-:
构建应用|**bruce-app build**|`bruce-app b`
创建应用|**bruce-app create**|`bruce-app c`
调试应用|**bruce-app dev**|`bruce-app d`
初始物料|**bruce-app init**|`bruce-app i`
切换语言|**bruce-app locale**|`bruce-app l`
删除缓存|**bruce-app remove**|`bruce-app r`

功能|命令|缩写
:-:|:-:|:-:
帮助信息|**bruce-app --help**|`bruce-app -h`
版本信息|**bruce-app --version**|`bruce-app -v`
命令帮助信息|**bruce-img {cmd} --help**|`bruce-app {cmd} -h`

- 只有`build/create/dev/init`才能使用`命令帮助信息`，例如`bruce-app build --help`或`bruce-app b -h`

## 语言

- [x] **zh-chs**：简体中文 `默认`
- [x] **zh-cht**：繁體中文 `照顾港澳台同胞`
- [x] **en**：English `太累，暂无时间翻译`

## 兼容

兼容桌面端和移动端的现代主流浏览器，拒绝兼容`IExplorer`和其它弱智浏览器，从我做起。

#### 所有ES5浏览器范围

品牌|浏览器|版本范围
:-:|:-:|:-:
![Chrome](https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png)|**Chrome**|`< 51`
![Edge](https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png)|**Edge**|`< 15`
![Firefox](https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png)|**Firefox**|`< 54`
![Opera](https://raw.githubusercontent.com/alrra/browser-logos/master/src/opera/opera_48x48.png)|**Opera**|`< 38`
![Safari](https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png)|**Safari**|`< 9`
![Android](https://raw.githubusercontent.com/alrra/browser-logos/master/src/chromium/chromium_48x48.png)|**Android**|`< 5`
![iOS](https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari-ios/safari-ios_48x48.png)|**iOS**|`< 10`

#### ES6浏览器范围

品牌|浏览器|版本范围
:-:|:-:|:-:
![Chrome](https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png)|**Chrome**|`last 20 Chrome versions`
![Edge](https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png)|**Edge**|`last 20 Edge versions`
![Firefox](https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png)|**Firefox**|`last 20 Firefox versions`
![Opera](https://raw.githubusercontent.com/alrra/browser-logos/master/src/opera/opera_48x48.png)|**Opera**|`last 20 Opera versions`
![Safari](https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png)|**Safari**|`last 5 Safari versions`
![Android](https://raw.githubusercontent.com/alrra/browser-logos/master/src/chromium/chromium_48x48.png)|**Android**|`last 5 Android versions`
![iOS](https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari-ios/safari-ios_48x48.png)|**iOS**|`last 5 iOS versions`
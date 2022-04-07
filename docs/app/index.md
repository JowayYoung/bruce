---
title: 入门
order: 1
toc: menu
---

## 背景

在前端技术的日益壮大下，从以前简单的几个文件到现在复杂的一堆文件，各种扩展与工具植入到应用中，使得应用越来越庞大越来越难管理，应用也因此趋于`工程化`与`一体化`。

日新月异的前端技术已让前端代码的业务逻辑与交互效果越来越复杂，应用会一直维护与迭代，令开发者更不易于管理。模块化开发与各种框架把应用分为若干个小模块，增加了最后发布难度，无一个统一的标准，让应用结构千奇百怪。

通常的应用都是团队开发，成员的`编码规范`与`编码风格`也很难一致。工作围绕着**开发效率**与**运行性能**的工程化问题是我们作为前端开发者必须得处理的问题。因此应用自动化构建在整个开发过程中越来越重要。

## 介绍

[![author](https://img.shields.io/badge/@yangzw/bruce--app-JS/React/Vue应用自动化构建脚手架-66f.svg)](https://github.com/JowayYoung/bruce)

`@yangzw/bruce-app`是一个零配置开箱即用的**JS/React/Vue**应用自动化构建脚手架，真正实现构建代码与业务代码完全分离，无需关注构建过程，专心编写业务代码。

其**零配置开箱即用**的优点非常适合`入门级`、`初中级`和`快速开发应用`的前端开发者使用，还可通过创建配置文件覆盖其默认配置，只需专注业务代码的编写无需关注构建代码的编写，让应用结构更简洁。

[![author](https://img.shields.io/badge/author-JowayYoung-f66.svg)](https://github.com/JowayYoung/bruce)<span class="gap"></span>
[![version](https://img.shields.io/badge/version-1.0.1-f66.svg)](https://github.com/JowayYoung/bruce)<span class="gap"></span>
[![node](https://img.shields.io/badge/node-%3E%3D16.0.0-3c9.svg)](https://github.com/JowayYoung/bruce)<span class="gap"></span>
[![npm](https://img.shields.io/badge/npm-%3E%3D7.10.0-3c9.svg)](https://github.com/JowayYoung/bruce)<span class="gap"></span>
[![test](https://img.shields.io/badge/test-passing-f90.svg)](https://github.com/JowayYoung/bruce)<span class="gap"></span>
[![build](https://img.shields.io/badge/build-passing-f90.svg)](https://github.com/JowayYoung/bruce)<span class="gap"></span>
[![coverage](https://img.shields.io/badge/coverage-80%25-09f.svg)](https://github.com/JowayYoung/bruce)<span class="gap"></span>
[![license](https://img.shields.io/badge/license-MIT-09f.svg)](https://github.com/JowayYoung/bruce)

## 依赖

`@yangzw/bruce-app`是一个基于`webpack v5`开发的极速零配置开箱即用的Web应用构建工具(**每次更新都会保持最新依赖**)，集成各种常用工具(`postcss`、`sass`、`less`、`babel`、`typescript`、`stylelint`、`eslint`等)扩展构建功能，用于管理**JS/React/Vue**技术栈的应用。

[![commander](https://img.shields.io/badge/commander-9.x.x-f90.svg)](https://github.com/JowayYoung/bruce)<span class="gap"></span>
[![inquirer](https://img.shields.io/badge/inquirer-8.x.x-f90.svg)](https://github.com/JowayYoung/bruce)<span class="gap"></span>
[![webpack](https://img.shields.io/badge/webpack-5.x.x-f66.svg)](https://github.com/JowayYoung/bruce)<span class="gap"></span>
[![postcss](https://img.shields.io/badge/postcss-8.x.x-3c9.svg)](https://github.com/JowayYoung/bruce)<span class="gap"></span>
[![polyfill](https://img.shields.io/badge/polyfill-3.x.x-3c9.svg)](https://github.com/JowayYoung/bruce)<span class="gap"></span>
[![sass](https://img.shields.io/badge/sass-1.x.x-3c9.svg)](https://github.com/JowayYoung/bruce)<span class="gap"></span>
[![less](https://img.shields.io/badge/less-4.x.x-3c9.svg)](https://github.com/JowayYoung/bruce)<span class="gap"></span>
[![babel](https://img.shields.io/badge/babel-7.x.x-3c9.svg)](https://github.com/JowayYoung/bruce)<span class="gap"></span>
[![typescript](https://img.shields.io/badge/typescript-4.x.x-3c9.svg)](https://github.com/JowayYoung/bruce)<span class="gap"></span>
[![stylelint](https://img.shields.io/badge/stylelint-14.x.x-3c9.svg)](https://github.com/JowayYoung/bruce)<span class="gap"></span>
[![eslint](https://img.shields.io/badge/eslint-8.x.x-3c9.svg)](https://github.com/JowayYoung/bruce)<span class="gap"></span>
[![react](https://img.shields.io/badge/react-17.x.x-09f.svg)](https://github.com/JowayYoung/bruce)<span class="gap"></span>
[![vue](https://img.shields.io/badge/vue-3.x.x-09f.svg)](https://github.com/JowayYoung/bruce)

## 安装

- 使用`npm`安装：`npm i -g @yangzw/bruce-app`
- 使用`yarn`安装：`yarn add global @yangzw/bruce-app`

## 使用

五大功能均为交互式命令，输入以下命令会通过终端面板自定义命令配置。

功能|命令|缩写
:-:|:-:|:-:
构建应用|**bruce-app build**|`bruce-app b`
初始应用|**bruce-app init**|`bruce-app i`
切换语言|**bruce-app locale**|`bruce-app l`
创建无聊|**bruce-app new**|`bruce-app n`
删除缓存|**bruce-app remove**|`bruce-app r`

---

功能|命令|缩写
:-:|:-:|:-:
帮助信息|**bruce-app --help**|`bruce-app -h`
版本信息|**bruce-app --version**|`bruce-app -v`

## 语言

- [x] **zh-chs**：简体中文 `默认`
- [x] **zh-cht**：繁體中文 `照顾港澳台同胞`
- [x] **en**：English `太累了，暂无时间翻译`

## 兼容

兼容`桌面端`与`移动端`的现代主流浏览器，拒绝兼容`IE`与其他弱智浏览器，从我做起。

浏览器|版本范围
:-:|:-:
<div class="browser"><img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png">Chrome</div>|`last 20 Chrome versions`
<div class="browser"><img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png">Firefox</div>|`last 20 Firefox versions`
<div class="browser"><img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png">Edge</div>|`last 20 Edge versions`
<div class="browser"><img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/opera/opera_48x48.png">Opera</div>|`last 20 Opera versions`
<div class="browser"><img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png">Safari</div>|`last 5 Safari versions`
<div class="browser"><img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chromium/chromium_48x48.png">Android</div>|`Android >= 5`
<div class="browser"><img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari-ios/safari-ios_48x48.png">iOS</div>|`iOS >= 8`
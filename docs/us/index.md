---
title: 入门
order: 1
toc: menu
---

## 背景

**工欲善其事，必先利其器**。项目开发过程中时常会重复使用一些工具函数，例如`Web类型`、`格式时间差`、`URL参数反序列化`、`过滤XSS`等。为了避免项目开发时重复的复制粘贴操作带来不必要的麻烦，笔者将平时常用的工具函数按功能分类与统一封装并发布到`Npm公有仓库`中。每次项目开发时直接安装，提高开发效率，将时间用在正确的事情中。

## 介绍

[![author](https://img.shields.io/badge/@yangzw/bruce--us-无框架约束的通用工具库-66f.svg)](https://github.com/JowayYoung/bruce)

`@yangzw/bruce-us`是一个无框架约束的通用工具库，提供`Web环境`、`Node环境`和`双环境`的常用工具函数。

整体包括`104`个函数，分别是`Common`函数`62`个，`Web`函数`29`个，`Node`函数`13`个。

[![author](https://img.shields.io/badge/author-JowayYoung-f66.svg)](https://github.com/JowayYoung/bruce)<span class="gap"></span>
[![version](https://img.shields.io/badge/version-1.0.8-f66.svg)](https://github.com/JowayYoung/bruce)<span class="gap"></span>
[![web](https://img.shields.io/badge/web-%3E%3D95%25-3c9.svg)](https://github.com/JowayYoung/bruce)<span class="gap"></span>
[![node](https://img.shields.io/badge/node-%3E%3D12.0.0-3c9.svg)](https://github.com/JowayYoung/bruce)<span class="gap"></span>
[![test](https://img.shields.io/badge/test-passing-f90.svg)](https://github.com/JowayYoung/bruce)<span class="gap"></span>
[![build](https://img.shields.io/badge/build-passing-f90.svg)](https://github.com/JowayYoung/bruce)<span class="gap"></span>
[![coverage](https://img.shields.io/badge/coverage-80%25-09f.svg)](https://github.com/JowayYoung/bruce)<span class="gap"></span>
[![license](https://img.shields.io/badge/license-MIT-09f.svg)](https://github.com/JowayYoung/bruce)

## 安装

- 使用`npm`安装：`npm i @yangzw/bruce-us`
- 使用`yarn`安装：`yarn add @yangzw/bruce-us`

## 使用

`@yangzw/bruce-us`根据**Web**与**Node**两种`JS运行环境`划分代码，生成三种`bundle.js`。每种文件在不同`JS运行环境`中运行，必须根据`JS运行环境`引用文件，否则会报错。

模块|工具库|运行环境|对应文件|ESM对应文件|UMD对应文件
:-:|:-:|:-:|:-:|:-:|:-:
**Common**|通用工具库|浏览器与服务器|`index.js`|`index.esm.js`|`index.umd.js`
**Web**|Web函数工具库|浏览器|`web.js`|`web.esm.js`|`web.umd.js`
**Node**|Node函数工具库|服务器|`node.js`|`node.esm.js`|-

详情请查看[文档](/us/usage)。

## 兼容

- **Web**：`>=95%`
- **Node**：`>=12.0.0`

每个函数功能的右侧都可能标记`Web/Node`，若无标记则双环境都能使用。
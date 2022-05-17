---
title: 入门
order: 1
toc: menu
---


## 背景

`代码规范`是前端工程化落地的基石，在其中扮演着监督者的角色，它主要用于约束团队成员的`编码规范`与`编码风格`。使用它有几点好处：

- 强制规范团队的`编码规范`与`编码风格`可让新旧成员编码习惯一致
- 增加项目代码的`可维护性`与`可接入性`，新成员能快速适应项目的架构与需求
- 保障项目整体质量，可减少`无用代码`、`重复代码`、`错误代码`和`漏洞代码`的产生几率

这一切的实现都离不开**代码校验工具**的`代码格式化功能`。众所周知，基本所有编辑器都会配置**代码校验工具**检测代码中的`错误`与`漏洞`，根据提供的修复方案格式化出正确代码，让代码更严谨。

## 介绍

[![author](https://img.shields.io/badge/@yangzw/bruce--std-集成Stylelint与Eslint的VSCode配置工-66f.svg)](https://github.com/JowayYoung/bruce)

`@yangzw/bruce-std`是一个集成**Stylelint**与**Eslint**的VSCode配置工具，配合VSCode插件为用户提供前端文件的代码校验、代码修复和错误提示的功能。

它用于约束团队成员的`编码规范`与`编码风格`，从而增加项目代码的`可维护性`与`可接入性`，保障项目整体质量，可减少`无用代码`、`重复代码`、`错误代码`和`漏洞代码`的产生几率。它的根本目的是**一次部署全局运行**，统一所有项目的`编码规范`与`编码风格`，养成规范的码字习惯，减少不必要的错误与隐患。

[![author](https://img.shields.io/badge/author-JowayYoung-f66.svg)](https://github.com/JowayYoung/bruce)<span class="gap"></span>
[![version](https://img.shields.io/badge/version-1.0.2-f66.svg)](https://github.com/JowayYoung/bruce)<span class="gap"></span>
[![node](https://img.shields.io/badge/node-%3E%3D16.0.0-3c9.svg)](https://github.com/JowayYoung/bruce)<span class="gap"></span>
[![npm](https://img.shields.io/badge/npm-%3E%3D7.10.0-3c9.svg)](https://github.com/JowayYoung/bruce)<span class="gap"></span>
[![test](https://img.shields.io/badge/test-passing-f90.svg)](https://github.com/JowayYoung/bruce)<span class="gap"></span>
[![build](https://img.shields.io/badge/build-passing-f90.svg)](https://github.com/JowayYoung/bruce)<span class="gap"></span>
[![coverage](https://img.shields.io/badge/coverage-80%25-09f.svg)](https://github.com/JowayYoung/bruce)<span class="gap"></span>
[![license](https://img.shields.io/badge/license-MIT-09f.svg)](https://github.com/JowayYoung/bruce)

## 依赖

`@yangzw/bruce-std`依赖以下`NPM模块`的最新版本。

[![postcss](https://img.shields.io/badge/postcss-8.x.x-3c9.svg)](https://github.com/JowayYoung/bruce)<span class="gap"></span>
[![babel](https://img.shields.io/badge/babel-7.x.x-3c9.svg)](https://github.com/JowayYoung/bruce)<span class="gap"></span>
[![typescript](https://img.shields.io/badge/typescript-4.x.x-3c9.svg)](https://github.com/JowayYoung/bruce)<span class="gap"></span>
[![stylelint](https://img.shields.io/badge/stylelint-14.x.x-3c9.svg)](https://github.com/JowayYoung/bruce)<span class="gap"></span>
[![eslint](https://img.shields.io/badge/eslint-8.x.x-3c9.svg)](https://github.com/JowayYoung/bruce)<span class="gap"></span>
[![eslint](https://img.shields.io/badge/typescript--eslint-5.x.x-3c9.svg)](https://github.com/JowayYoung/bruce)

为了方便表述，统一以下名词。

- 以下提及的**Stylelint**与**Eslint**都为`VSCode插件`
- 以下提及的**stylelint**与**eslint**都为`NPM模块`

## 安装

- 使用`npm`安装：`npm i -g @yangzw/bruce-std`
- 使用`yarn`安装：`yarn add global @yangzw/bruce-std`
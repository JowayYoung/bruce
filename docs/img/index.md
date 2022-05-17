---
title: 入门
order: 1
toc: menu
---

## 背景

## 介绍

[![author](https://img.shields.io/badge/@yangzw/bruce--img-多功能无限制的图像处理工具-66f.svg)](https://github.com/JowayYoung/bruce)

`@yangzw/bruce-std`是一个多功能无限制的图像处理工具，为图像提供`压缩`、`分组`、`标记`和`变换`的批处理功能。

囊括的功能都是一些常规图像批处理操作，以前只能使用相关图像处理工具完成这些功能，但现在你多一个选择，可用命令行完成这些功能。

[![author](https://img.shields.io/badge/author-JowayYoung-f66.svg)](https://github.com/JowayYoung/bruce)<span class="gap"></span>
[![version](https://img.shields.io/badge/version-1.0.2-f66.svg)](https://github.com/JowayYoung/bruce)<span class="gap"></span>
[![node](https://img.shields.io/badge/node-%3E%3D16.0.0-3c9.svg)](https://github.com/JowayYoung/bruce)<span class="gap"></span>
[![npm](https://img.shields.io/badge/npm-%3E%3D7.10.0-3c9.svg)](https://github.com/JowayYoung/bruce)<span class="gap"></span>
[![test](https://img.shields.io/badge/test-passing-f90.svg)](https://github.com/JowayYoung/bruce)<span class="gap"></span>
[![build](https://img.shields.io/badge/build-passing-f90.svg)](https://github.com/JowayYoung/bruce)<span class="gap"></span>
[![coverage](https://img.shields.io/badge/coverage-80%25-09f.svg)](https://github.com/JowayYoung/bruce)<span class="gap"></span>
[![license](https://img.shields.io/badge/license-MIT-09f.svg)](https://github.com/JowayYoung/bruce)

## 安装

- 使用`npm`安装：`npm i -g @yangzw/bruce-img`
- 使用`yarn`安装：`yarn add global @yangzw/bruce-img`

> 安装失败

`bruce-img`某些功能基于`sharp`，所以在安装过程中可能会失败或报错，请通过以下步骤解围。以`npm`为例。

- 切换`npm`镜像为淘宝镜像：`npm config set registry https://registry.npmmirror.com/`
- 切换`node`镜像为淘宝镜像：`npm config set disturl https://npm.taobao.org/mirrors/node/`
- 切换`sharp`镜像为淘宝镜像
	- `npm config set sharp_binary_host https://npm.taobao.org/mirrors/sharp/`
	- `npm config set sharp_dist_base_url https://npm.taobao.org/mirrors/sharp-libvips/`
	- `npm config set sharp_libvips_binary_host https://npm.taobao.org/mirrors/sharp-libvips/`
- 强制清理缓存：`npm cache clean -f`(曾经安装失败才执行)
- 重新安装：`npm i -g @yangzw/bruce-img`

---

若有兴趣了解`某些模块因Npm镜像问题而安装不上`的解围思路，可查看笔者这篇[《聊聊NPM镜像那些险象环生的坑》](https://juejin.im/post/5edf60d4f265da76b559b6ac)，相信对你会有更大帮助。

## 使用

功能|命令|缩写|描述
:-:|:-:|:-:|-
压缩图像|**bruce-img compress**|`bruce-img c`|基于`TinyJPG`或`TinyPNG`压缩
分组图像|**bruce-img group**|`bruce-img g`|基于图像`尺寸`、`类型`或`体积`分组
标记图像|**bruce-img mark**|`bruce-img m`|基于`sharp`标记，提供交互式问答调用
变换图像|**bruce-img transform**|`bruce-img t`|基于`sharp`变换，提供多配置链式调用

- 推荐使用缩写命令
- 目前只能处理`JPG`与`PNG`的图像
- 可遍历根目录所有多层文件夹中符合条件的图像文件
- 进入待处理图像的根目录：`cd my-image`，再根据需求执行上述命令
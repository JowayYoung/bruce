---
title: 指南
icon: lightbulb
order: 1
---

## 背景

数字图像处理是一个不断发展的技术领域，随着技术的不断进步，越来越多的图像处理任务需要被完成。在这个领域中，批处理是一种常见的技术，它可以大大提高处理效率，减少人工操作的繁琐性。

然而，现有的图像处理工具往往需要用户手动执行每个批处理操作，这不仅浪费时间和精力，还容易出错。如果需要处理大量的图像，用户需要手动选择每个图像并执行对应处理操作，这是一项非常繁琐的任务。如果用户在处理时犯上错误，可能会导致整个处理过程失败，需要重新开始。

## 介绍

![bruce-img](https://img.shields.io/badge/@yangzw/bruce--img-多功能无限制的图像处理工具-66f.svg)

`@yangzw/bruce-img`是一个多功能无限制的图像处理工具，为图像提供压缩、分组、标记和变换的批处理功能。

它的主要作用是采用高效的图像处理算法，可以快速完成图像批处理操作，提高工作效率。通过多种图像处理技术和批处理技术的结合，例如图像压缩、分组、标记和变换，可以快速完成各种图像批处理操作。用户使用它对大量图像进行压缩，以便减小图像的存储空间，或对这些图像进行分组、标记或变换，以便后续的处理和分析。

![author](https://img.shields.io/badge/author-JowayYoung-f66.svg)
![version](https://img.shields.io/badge/version-1.3.7-f66.svg)
![node](https://img.shields.io/badge/node-%3E%3D18.18.0-3c9.svg)
![npm](https://img.shields.io/badge/npm-%3E%3D9.8.1-3c9.svg)
![test](https://img.shields.io/badge/test-passing-f90.svg)
![build](https://img.shields.io/badge/build-passing-f90.svg)
![coverage](https://img.shields.io/badge/coverage-mostly-09f.svg)
![license](https://img.shields.io/badge/license-MIT-09f.svg)

## 安装

使用`npm/yarn/pnpm`安装`@yangzw/bruce-img`。

::: code-tabs#shell
@tab npm

```bash
npm i -g @yangzw/bruce-img
```

@tab yarn

```bash
yarn add global @yangzw/bruce-img
```

@tab pnpm

```bash
pnpm i -g @yangzw/bruce-img
```

:::

> 安装失败

因为`@yangzw/bruce-img`的某些功能依赖`sharp`，所以在安装时可能会出现失败或报错的情况，请通过这些步骤解围，以`npm`为例。

- 切换`Npm镜像`为淘宝镜像：`npm config set registry https://registry.npmmirror.com/`
- 切换`Node镜像`为淘宝镜像：`npm config set disturl https://npm.taobao.org/mirrors/node/`
- 切换`Sharp镜像`为淘宝镜像
	- `npm config set sharp_binary_host https://npm.taobao.org/mirrors/sharp/`
	- `npm config set sharp_dist_base_url https://npm.taobao.org/mirrors/sharp-libvips/`
	- `npm config set sharp_libvips_binary_host https://npm.taobao.org/mirrors/sharp-libvips/`
- 强制清理缓存：`npm cache clean -f`(曾经安装失败才执行)
- 重新安装：`npm i -g @yangzw/bruce-img`

前往[sharp-libvips](https://github.com/lovell/sharp-libvips/releases)手动下载压缩包，将它放置到`npm config get cache`获取目录的`_libvips文件夹`中。

- **Windows**选择`win32-x64.tar.br`下载
- **MacOS**选择`darwin-x64.tar.br`下载
- **Linux**选择`linux-x64.tar.br`下载

---

如果想了解`某些模块因为Npm镜像问题而安装不上`的解围思路，可以查看笔者这篇文章[《聊聊NPM镜像那些险象环生的坑》](https://juejin.im/post/5edf60d4f265da76b559b6ac)，相信对你会有更大的帮助。

## 使用

功能|命令|缩写|处理文件类型
:-:|:-:|:-:|-
压缩图像|**bruce-img compress**|`bruce-img c`|`gif,jpg,png,svg,webp`
分组图像|**bruce-img group**|`bruce-img g`|`gif,jpg,png,svg,webp`
标记图像|**bruce-img mark**|`bruce-img m`|`jpg,png,webp`，`webp`不能是动图
扫描图像|**bruce-img scan**|`bruce-img s`|`gif,jpg,png,svg,webp`
变换图像|**bruce-img transform**|`bruce-img t`|`jpg,png,webp`，`webp`不能是动图

- 无法处理`jpeg文件`，请确保`JPG格式`为`.jpg`后缀的文件
- 可以遍历根目录所有多层文件夹中符合条件的图像文件
- 执行`cd my-image`进入待处理图像的根目录，再根据需求执行上述命令

功能|命令|缩写
:-:|:-:|:-:
帮助信息|**bruce-img --help**|`bruce-img -h`
版本信息|**bruce-img --version**|`bruce-img -v`
命令帮助信息|**bruce-img {cmd} --help**|`bruce-img {cmd} -h`

- 只有`group/transform`才能使用`命令帮助信息`，例如`bruce-img group --help`或`bruce-img g -h`
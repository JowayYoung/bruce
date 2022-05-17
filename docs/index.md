---
title: Bruce FEES - 前端工程化多包管理最佳实践方案
order: 10
hero:
  title: Bruce FEES
  desc: 一套多功能【前端工程化多包管理】实践方案<br>APP应用🌐 / ICO图标🔥 / IMG图像🖼️ / LIB类库🔗 / PKG模块📦 / STD规范⚙️ / UI组件🎨 / US工具🛠️
  actions:
    - text: 从 bruce-app 开始
      link: /app
features:
  - icon: https://gw.alipayobjects.com/zos/bmw-prod/881dc458-f20b-407b-947a-95104b5ec82b/k79dm8ih_w144_h144.png
    title: bruce-app
    desc: 一个零配置开箱即用的JS/React/Vue应用自动化构建脚手架，真正实现构建代码与业务代码完全分离，无需关注构建过程，专心编写业务代码
  - icon: https://gw.alipayobjects.com/zos/bmw-prod/881dc458-f20b-407b-947a-95104b5ec82b/k79dm8ih_w144_h144.png
    title: bruce-lib
    desc: 一个零配置开箱即用的JS/React/Vue类库自动化构建脚手架，真正实现构建代码与业务代码完全分离，无需关注构建过程，专心编写业务代码
  - icon: https://gw.alipayobjects.com/zos/bmw-prod/881dc458-f20b-407b-947a-95104b5ec82b/k79dm8ih_w144_h144.png
    title: bruce-std
    desc: 一个集成Stylelint与Eslint的VSCode配置工具，配合VSCode插件为用户提供前端文件的代码校验、代码修复和错误提示的功能
  - icon: https://gw.alipayobjects.com/zos/bmw-prod/881dc458-f20b-407b-947a-95104b5ec82b/k79dm8ih_w144_h144.png
    title: bruce-ico
    desc: 一个基于CSS背景遮罩生成CSS图标的图标处理工具，为图标提供文件监听、格式转换和动态样式的功能
  - icon: https://gw.alipayobjects.com/zos/bmw-prod/881dc458-f20b-407b-947a-95104b5ec82b/k79dm8ih_w144_h144.png
    title: bruce-img
    desc: 一个多功能无限制的图像处理工具，为图像提供压缩、分组、标记和变换的批处理功能
  - icon: https://gw.alipayobjects.com/zos/bmw-prod/881dc458-f20b-407b-947a-95104b5ec82b/k79dm8ih_w144_h144.png
    title: bruce-pkg
    desc: 一个强化NPM命令的模块处理工具，为模块提供基本骨架创建与链式检查发布的功能
  - icon: https://gw.alipayobjects.com/zos/bmw-prod/881dc458-f20b-407b-947a-95104b5ec82b/k79dm8ih_w144_h144.png
    title: bruce-ui
    desc: 一个React通用组件库，提供基础组件、表单组件、向导组件、展示组件和反馈组件等
  - icon: https://gw.alipayobjects.com/zos/bmw-prod/881dc458-f20b-407b-947a-95104b5ec82b/k79dm8ih_w144_h144.png
    title: bruce-us
    desc: 一个无框架约束的通用工具库，提供Web环境、Node环境和双环境的常用工具函数
footer: Copyright © 2017~Present | MIT Licensed<br>Powered By <span class="mark">JowayYoung</span>
---

## Bruce FEES

**Bruce FEES**是一套多功能**前端工程化多包管理**实践方案，包括多个前端开发流程中常用的`脚手架`、`工具`和`类库`，其目的是简化整个开发流程，对那些重复繁琐的流程使用工具自动化完成，以提升整体的开发效率。

基于`lerna`、`webpack`、`rollup`、`postcss`、`sass`、`less`、`babel`、`typescript`、`stylelint`、`eslint`、`jest`、`react`、`vue`、`dumi`等模块搭建与开发底层架构，使用`Monorepo`组织与管理业务代码。

## 特性

- 📦 大部分解决方案已做到`零配置开箱即用`
- ⚡ 提炼自身多年前端工程化的`工作经验`与`解决方案`
- 🛡 使用`TypeScript`开发并提供完整的`类型定义文件`
- ⚙️ 基于`全链路开发`与`设计工具体系`完成每个解决方案
- 📋 深入每个场景做好开发阶段的`编码细节`与`代码规范`

## 安装

在安装前必须确保`node`在`v16`以上，可用[nvm](https://github.com/nvm-sh/nvm)或[n](https://github.com/tj/n)控制多版本`node`环境。

---

使用`npm`安装所需的实践方案，`xyz`为上述可用包名。

```bash
npm i -g @yangzw/bruce-xyz
```

使用`yarn`安装所需的实践方案，`xyz`为上述可用包名。

```bash
yarn add global @yangzw/bruce-xyz
```

> 使用npm安装失败

- [x] 切换`npm`镜像为淘宝镜像：`npm config set registry https://registry.npmmirror.com/`
- [x] 切换`node`镜像为淘宝镜像：`npm config set disturl https://npm.taobao.org/mirrors/node/`
- [x] 重新执行安装命令：`npm i -g @yangzw/bruce-xyz`

> 使用yarn安装失败

- [x] 切换`yarn`镜像为淘宝镜像：`yarn config set registry https://registry.npmmirror.com/`
- [x] 切换`node`镜像为淘宝镜像：`yarn config set disturl https://npm.taobao.org/mirrors/node/`
- [x] 重新执行安装命令：`yarn add global @yangzw/bruce-xyz`

---

每个子包安装完毕请结合文档详情使用，有疑问请联系**JowayYoung**。

## 反馈

如有问题请到[Github Issues](https://github.com/JowayYoung/bruce/issues)留言或通过以下方式联系**JowayYoung**。

<div class="home-contact">
	<img class="home-contact-item" src="https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/03bcc13d83524f9eb8a61a1cab0543af~tplv-k3u1fbpfcp-watermark.image">
	<img class="home-contact-item" src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/f9a7e606f0ca4cf58c2262f6c16e3464~tplv-k3u1fbpfcp-watermark.image">
</div>
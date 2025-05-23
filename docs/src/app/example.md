---
title: 示例
icon: signs-post
order: 6
---

项目目录`package.json`的`scripts`已经自定义好和`bruce-app`相关的Npm脚本。

```json
{
	"scripts": {
		"build": "bruce-app b -c -j -m test",
		"build:pre": "bruce-app b -c -j -m pre",
		"build:prod": "bruce-app b -c -j",
		"dev": "bruce-app d -e -c -j -o"
	}
}
```

这是一个完整的应用开发流程。

- 查看帮助：`bruce-app -h`
- 查看版本：`bruce-app -v`
- 切换语言：`bruce-app l`
- 进入目录：`cd <project-list>`
- 初始应用：`bruce-app c`
- 进入应用根目录：`cd <my-project>`
- 调试应用，`npm run dev`
- 创建组件：`bruce-app i`，处于`开发环境`时需要另起一个终端窗口执行
- 构建应用，`npm run build`，处于`开发环境`时需要另起一个终端窗口执行
- 删除缓存：`bruce-app r`，出现构建失败或其它突发情况时执行

正确使用姿势请观看这个[视频教程](https://www.bilibili.com/video/BV1UK41157fX)，简单易用方便快捷，**一次安装全局运行**，实在是**远离架构专注编码的必备工具**。

笔者的个人官网也是使用`@yangzw/bruce-app`进行构建，有兴趣的同学请戳[JowayYoung个人官网](https://yangzw.vip)查看详情。
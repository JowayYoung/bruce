---
title: 配置
order: 2
toc: menu
---

## 图像压缩

- 使用`https://tinyjpg.com`或`https://tinypng.com`压缩图像会有`20张`的数量限制
- `bruce-img c`基于使用两个网站压缩，但通过随机修改请求头的`X-Forwarded-For`绕过其数量限制

## 图像变换

- 特点：执行命令可追加多个配置，支持链式调用，变换情况根据配置顺序而有所不同
- 链式调用：当前配置处理的图像以流的方式传入下一个配置处理，直至结束，`类似Gulp的流处理`
- 调用结果：不同配置组合生成图像可能不同，即使相同配置但不同顺序也可能生成不同图像

功能|配置|格式|描述
:-:|:-:|-|-
模糊|`--blur`|`0.3~1000`|不设置则不生效
裁剪|`--extract`|`left,top,width,height`|不设置则不生效
平翻|`--flip`|`true`|不设置则不生效
对翻|`--flop`|`true`|不设置则不生效
格式|`--format`|`jpg`或`png`|不设置则使用图像原来的类型
灰度|`--grayscale`|`true`|不设置则不生效
负片|`--negate`|`true`|不设置则不生效
对比|`--normalise`|`true`|不设置则不生效
尺寸|`--resize`|`width,height[,fit]`|若其中一方为0则自动缩放以匹配另一方，不设置则不生效
旋转|`--rotate`|`angle[,bgcolor]`|不设置则不生效
锐化|`--sharpen`|`true`或`[sigama,flat,jagged]`|`true`表示执行快速温和的锐化输出，sigama在`0.3~1000`间，其余参数必须`>0`，不设置则不生效

`[]`表示可选

- **fit**：填充
	- `cover`：裁剪以适应在指定尺寸中
	- `contain`：嵌入在指定尺寸中
	- `fill`：忽略宽高比，拉伸以填满在指定尺寸中
	- `inside`：保留宽高比，将尺寸调整到尽可能大，同时确保其尺寸小于或等于指定尺寸
	- `outside`：保留宽高比，将尺寸调整到尽可能小，同时确保其尺寸大于或等于指定尺寸
- **bgcolor**：背景色
	- `transparent`：透明，要配合`--format png`使用
	- `HEX`：16进制色值，可选`#xyz`或`#uvwxyz`
	- `RGB`：RGB色值，`rgba(r,g,b)`
	- `RGBA`：RGBA色值：`rgba(r,g,b,a)`

> 注意事项

- 配置一定要完整输入且正确，格式为`--opt [val]`，不然会报错导致无法执行
- 配置参数间相连只能使用英文逗号`,`，不能使用空格
- 配置详情请查看[sharp-api](https://sharp.pixelplumbing.com/api-constructor)
---
title: 配置
icon: gears
order: 2
---

## 图像分组

功能|配置|格式|描述
:-:|:-:|:-:|-
类型|`-t, --type`|`format/size/volume`|不设置就默认为`format`

- `format`表示基于格式分组，`size`表示基于尺寸分组，`volume`表示基于体积分组
- `volume`分组会生成`小中大`三个文件夹，分别放置的体积为`0~10k`、`10~100k`和`100k以上`
- 在分组时如果检测到已经存在相同名称的图像，就自动为当前图像名称增加`Hash`

## 图像变换

- 特性：执行的命令可以追加多个参数，支持链式调用，变换情况根据配置顺序而有所不同
- 调用：当前配置处理的图像以流的方式传入下一个配置中处理，直到结束，类似`Gulp的流处理`
- 结果：不同配置组合生成的图像可能不同，即使相同配置，但是不同顺序也可能生成不同图像

功能|配置|格式|描述
:-:|:-:|:-:|-
[模糊](https://sharp.pixelplumbing.com/api-operation#blur)|`-b, --blur`|`0~1000`|不设置就不生效
[裁剪](https://sharp.pixelplumbing.com/api-resize#extract)|`-e, --extract`|`left,top,width,height`|不设置就不生效
[格式](https://sharp.pixelplumbing.com/api-output#toformat)|`-f, --toFormat`|`jpg/png/webp`|不设置就使用原来格式
[平翻](https://sharp.pixelplumbing.com/api-operation#flip)|`-i, --flip`|`true`|不设置就不生效
[对翻](https://sharp.pixelplumbing.com/api-operation#flop)|`-o, --flop`|`true`|不设置就不生效
[灰度](https://sharp.pixelplumbing.com/api-colour#grayscale)|`-g, --grayscale`|`true`|不设置就不生效
[负片](https://sharp.pixelplumbing.com/api-operation#negate)|`-n, --negate`|`true`, `noalpha`|不设置就不生效
[对比](https://sharp.pixelplumbing.com/api-operation#normalise)|`-l, --normalise`|`true`, `lower,upper`|不设置就不生效
[尺寸](https://sharp.pixelplumbing.com/api-resize#resize)|`-r, --resize`|`width,height[,fit]`|不设置就不生效
[旋转](https://sharp.pixelplumbing.com/api-operation#rotate)|`-x, --rotate`|`angle[,bgcolor]`|不设置就不生效
[锐化](https://sharp.pixelplumbing.com/api-operation#sharpen)|`-s, --sharpen`|`true`, `[sigma,flat,jagged]`|不设置就不生效

`[]`表示可选

- **top/left**：坐偏移量和上偏移量，以图像左上角为坐标，0或正整数
- **width/height**：宽度和高度，0或正整数，其一为0就自动缩放
- **noalpha**：表示取消Alpha通道
- **lower/upper**：最小最大亮度，在`1~99`之间
- **fit**：填充
	- `cover`：裁剪以适应在指定尺寸中
	- `contain`：嵌入在指定尺寸中
	- `fill`：忽略宽高比，拉伸以填满在指定尺寸中
	- `inside`：保留宽高比，将尺寸调整到尽可能大，同时确保其尺寸小于或等于指定尺寸
	- `outside`：保留宽高比，将尺寸调整到尽可能小，同时确保其尺寸大于或等于指定尺寸
- **angle**：角度，整数，正数为顺时针，负数为逆时针
- **bgcolor**：背景色
	- `transparent`：透明，要配合`--format png`使用
	- `HEX`：16进制色值，可选`#xyz`或`#uvwxyz`
	- `RGB`：RGB色值，`rgba(r,g,b)`
	- `RGBA`：RGBA色值：`rgba(r,g,b,a)`
	- `HSL`：HSL色值：`hsl(h,s,l)`
	- `HSLA`：HSLA色值：`hsl(h,s,l,a)`
- **sigma**：高斯掩模，在`1~10`之间
- **flat**：扁平度，在`0~1000000`之间
- **jagged**：锯齿状，在`0~1000000`之间

> 注意事项

- 如果`--opt [val]`的`val`为`false`，就不要增加这个配置
- 配置一定要输入完整且正确，格式为`--opt [val]`，不然会报错
- 配置参数之间相连只能使用英文逗号`,`，不能使用空格
- 配置详情请查看[sharp-api](https://sharp.pixelplumbing.com/api-constructor)
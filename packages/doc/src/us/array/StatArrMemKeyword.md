---
title: 统计数组成员所含关键字
icon: layer-group
---

入参|功能|类型|默认|说明
:-:|:-:|:-:|:-:|-
**arr**|数组|`String[]`|`[]`
**keywords**|关键字集合|`String[]`|`[]`

```js
import { StatArrMemKeyword } from "@yangzw/bruce-us";

const arr = [
	"今天天气真好，我想出去钓鱼",
	"我一边看电视，一边写作业",
	"小明喜欢同桌的小红，又喜欢后桌的小君，真TM花心",
	"最近上班喜欢摸鱼的人实在太多，代码不好好写，在想入非非"
];
const keywords = ["偷懒", "喜欢", "睡觉", "摸鱼", "真好", "一边", "明天"];

StatArrMemKeyword(arr, keywords); // ["喜欢", "摸鱼", "真好", "一边"]
```
---
title: N个计算数值
icon: calculator
---

入参|功能|类型|默认|说明
:-:|:-:|:-:|:-:|-
**type**|运算|`+/-/*//`|`+`|-
**nums**|数值|`Number[]`|`[]`|以多个参数形式入参

```js
import { CalcNumPlus } from "@yangzw/bruce-us";

CalcNum("+", 0.1, 0.2, 0.3); // 0.6
```
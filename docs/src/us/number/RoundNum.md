---
title: 精确数值(四舍五入和百分比)
icon: calculator
---

以`对象解构`的方式入参

入参|功能|类型|默认|说明
:-:|:-:|:-:|:-:|-
**dec**|小数个数|`Number`|`2`|-
**num**|数值|`Number`|`0`|-
**per**|百分比|`Boolean`|`false`|-

```js
import { RoundNum } from "@yangzw/bruce-us";

RoundNum({ dec: 2, num: 0.331234, per: true }); // "33.12%"
```
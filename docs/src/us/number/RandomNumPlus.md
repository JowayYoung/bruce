---
title: N个范围随机数
icon: calculator
---

入参|功能|类型|默认|说明
:-:|:-:|:-:|:-:|-
**min**|最小数|`Number`|`0`
**max**|最大数|`Number`|`10`
**count**|个数|`Number`|`1`

```js
import { RandomNumPlus } from "@yangzw/bruce-us";

RandomNumPlus(0, 100, 3); // [40, 59, 27]
```
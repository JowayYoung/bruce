---
title: 补零数值
icon: calculator
---

入参|功能|类型|默认|说明
:-:|:-:|:-:|:-:|-
**num**|数值|`Number`|`0`|-
**len**|补位|`Number`|`0`|-

```js
import { FillNum } from "@yangzw/bruce-us";

FillNum(999, 4); // "0999"
```
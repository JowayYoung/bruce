---
title: 记录数组成员位置
icon: layer-group
---

入参|功能|类型|默认|说明
:-:|:-:|:-:|:-:|-
**arr**|数组|`Array<String/Number/Boolean>`|`[]`|-
**val**|值|`String/Number/Boolean`|-|-

```js
import { StatArrMemPosition } from "@yangzw/bruce-us";

const arr = [2, 1, 5, 4, 2, 1, 6, 6, 7];

StatArrMemPosition(arr, 2); // [0, 4]
```
---
title: 统计数组成员个数
icon: layer-group
---

入参|功能|类型|默认|说明
:-:|:-:|:-:|:-:|-
**arr**|数组|`Array<String/Number>`|`[]`|-

```js
import { StatArrMemCount } from "@yangzw/bruce-us";

const arr = [0, 1, 1, 2, 2, 2];

StatArrMemCount(arr); // { 0: 1, 1: 2, 2: 3 }
```
---
title: 分割数组
icon: layer-group
---

入参|功能|类型|默认|说明
:-:|:-:|:-:|:-:|-
**arr**|数组|`Array`|`[]`|-
**size**|尺寸|`Number`|`1`|-

```js
import { ChunkArr } from "@yangzw/bruce-us";

const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

ChunkArr(arr, 3); // [[0, 1, 2], [3, 4, 5], [6, 7, 8], [9]]
```
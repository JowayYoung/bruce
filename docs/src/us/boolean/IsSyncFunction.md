---
title: 判断同步函数
icon: gavel
---

入参|功能|类型|默认|说明
:-:|:-:|:-:|:-:|-
**data**|数据|`Any`|-

```js
import { IsSyncFunction } from "@yangzw/bruce-us";

IsSyncFunction(() => "bruce"); // true
```
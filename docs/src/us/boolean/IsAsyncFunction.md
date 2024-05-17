---
title: 判断异步函数
icon: gavel
---

入参|功能|类型|默认|说明
:-:|:-:|:-:|:-:|-
**data**|数据|`Any`|-|-

```js
import { IsAsyncFunction } from "@yangzw/bruce-us";

const afn = async() => "bruce";

IsAsyncFunction(afn); // true
```
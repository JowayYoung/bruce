---
title: 判断错误
icon: gavel
---

入参|功能|类型|默认|说明
:-:|:-:|:-:|:-:|-
**data**|数据|`Any`|-

```js
import { IsError } from "@yangzw/bruce-us";

IsError(new Error()); // true
```
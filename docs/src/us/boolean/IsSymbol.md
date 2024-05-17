---
title: 判断标记
icon: gavel
---

入参|功能|类型|默认|说明
:-:|:-:|:-:|:-:|-
**data**|数据|`Any`|-|-

```js
import { IsSymbol } from "@yangzw/bruce-us";

IsSymbol(Symbol("bruce")); // true
```
---
title: 异步美化
icon: rocket
---

入参|功能|类型|默认|说明
:-:|:-:|:-:|:-:|-
**pfn**|Promise函数|`Function`|-|-

```js
import { AsyncTo } from "@yangzw/bruce-us";

const [err, res] = await AsyncTo(GetData());
console.log(err, res);
```
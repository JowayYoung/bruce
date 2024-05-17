---
title: 加载脚本 🔥
icon: file-code
---

入参|功能|类型|默认|说明
:-:|:-:|:-:|:-:|-
**url**|地址|`String`|`""`|-
**pst**|插入位置|`head/body`|`"body"`|-

```js
import { LoadScript } from "@yangzw/bruce-us/dist/web";

await LoadScript("https://static.xyz.com/bruce-us.js", "head");
```
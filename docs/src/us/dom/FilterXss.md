---
title: 过滤XSS 🔥
icon: file-code
---

入参|功能|类型|默认|说明
:-:|:-:|:-:|:-:|-
**html**|HTML|`String`|`""`|-

```js
import { FilterXss } from "@yangzw/bruce-us/dist/web";

FilterXss("<script>alert(123)</script>"); // "&lt;script&gt;alert(123)&lt;/script&gt;"
```
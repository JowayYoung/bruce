---
title: URL参数反序列化
icon: paperclip
---

入参|功能|类型|默认|说明
:-:|:-:|:-:|:-:|-
**search**|URL参数|`String`|`""`|-

```js
import { ParseUrlSearch } from "@yangzw/bruce-us";

ParseUrlSearch(); // { name: "young", sex: "male" }
```
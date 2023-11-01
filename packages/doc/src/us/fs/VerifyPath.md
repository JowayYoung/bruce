---
title: 验证路径 💧
icon: floppy-disk
---

入参|功能|类型|默认|说明
:-:|:-:|:-:|:-:|-
**path**|路径|`String`|`""`
**dir**|上下文|`String`|`process.cwd()`

```js
import { VerifyPath } from "@yangzw/bruce-us/dist/node.esm.js";

VerifyPath("brucerc.js"); // { flag: true, msg: "" }
```
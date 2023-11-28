---
title: 绝对路径 💧
icon: floppy-disk
---

入参|功能|类型|默认|说明
:-:|:-:|:-:|:-:|-
**path**|路径|`String`|`""`
**dir**|上下文|`String`|`process.cwd()`

```js
import { AbsPath } from "@yangzw/bruce-us/dist/node.esm.js";

AbsPath("brucerc.js"); // "E:\client\battle\brucerc.js"
```
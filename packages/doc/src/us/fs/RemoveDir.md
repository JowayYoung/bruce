---
title: 删除文件路径 💧
icon: floppy-disk
---

入参|功能|类型|默认|说明
:-:|:-:|:-:|:-:|-
**path**|路径|`String`|`""`
**dir**|上下文|`String`|`process.cwd()`

```js
import { RemoveDir } from "@yangzw/bruce-us/dist/node.esm.js";

RemoveDir("src/bruce");
```
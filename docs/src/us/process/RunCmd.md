---
title: 运行命令 💧
icon: bars-progress
---

入参|功能|类型|默认|说明
:-:|:-:|:-:|:-:|-
**cmd**|命令|`String`|`"node -v"`|-

```js
import { RunCmd } from "@yangzw/bruce-us/dist/node.esm.js";

RunCmd("npm -v"); // "8.19.3"
```
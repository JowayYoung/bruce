---
title: 读取文件路径 💧
icon: floppy-disk
---

以`对象解构`的方式入参

入参|功能|类型|默认|说明
:-:|:-:|:-:|:-:|-
**dir**|路径|`String`|`""`
**path**|路径|`String`|`""`
**regexp**|过滤正则|`Regexp`|`/(node_modules\|\.git\|\.DS_Store)$/`
**type**|类型|`bfs广度优先遍历`/`dfs深度优先遍历`|`"bfs"`

```js
import { ReadDir } from "@yangzw/bruce-us/dist/node.esm.js";

ReadDir({ path: "src/bruce", type: "dfs" }); // ["node.js", "web.js"]
```
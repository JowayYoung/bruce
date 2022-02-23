> 读取文件路径 - `Node`

入参|功能|类型|默认|说明
:-:|:-:|:-:|:-:|-
**type**|类型|`String`|`"bfs"`|可选`bfs广度优先遍历`、`dfs深度优先遍历`
**dir**|路径|`String`|`""`
**filter**|过滤正则|`Regexp`|`/(node_modules\|\.git\|\.DS_Store)$/`

```js
import { ReadDir } from "@bruce/us/dist/node.esm.js";

ReadDir("bfs", "src/bruce"); // ["node.js", "web.js"]
```
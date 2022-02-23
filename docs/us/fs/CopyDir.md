> 复制文件路径 - `Node`

入参|功能|类型|默认|说明
:-:|:-:|:-:|:-:|-
**src**|输入路径|`String`|`""`
**dist**|输出路径|`String`|`""`
**filter**|过滤函数|`Function`|-|返回`true`表示复制，返回`false`表示不复制

```js
import { CopyDir } from "@bruce/us/dist/node.esm.js";

CopyDir("src/bruce", "dist/bruce", (src, dist) => true);
```
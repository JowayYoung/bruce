> 运行命令 - `Node`

入参|功能|类型|默认|说明
:-:|:-:|:-:|:-:|-
**cmd**|命令行|`String`|`"node -v"`

```js
import { RunCmd } from "@yangzw/bruce-us/dist/node.esm.js";

RunCmd("npm -v"); // "6.11.3"
```
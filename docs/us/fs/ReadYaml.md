> 读取YAML文件 - `Node`

入参|功能|类型|默认|说明
:-:|:-:|:-:|:-:|-
**path**|路径|`String`|`""`
**dir**|上下文|`String`|`process.cwd()`

```js
import { ReadYaml } from "@yangzw/bruce-us/dist/node.esm.js";

ReadYaml("brucerc.yaml"); // { name: "bruce" }
```
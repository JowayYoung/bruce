> Node类型 - `Node`

出参|功能|说明
:-:|:-:|-
**system**|系统|可选`windows/macos/linux`
**systemVs**|系统版本
**nodeVs**|`node`版本
**npmVs**|`npm`版本

```js
import { NodeType } from "@yangzw/bruce-us/dist/node.esm.js";

NodeType(); // { nodeVs: "12.12.0", npmVs: "6.11.3", system: "macos", systemVs: "18.7.0" }
```
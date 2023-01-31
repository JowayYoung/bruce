> Node类型 - `Node`

出参|功能|类型
:-:|:-:|:-:
**system**|系统|`windows/macos/linux`
**systemVs**|系统版本|`x.y.z`
**nodeVs**|`node`版本|`x.y.z`
**npmVs**|`npm`版本|`x.y.z`

```js
import { NodeType } from "@yangzw/bruce-us/dist/node.esm.js";

NodeType();
/*{
	nodeVs: "16.19.0",
	npmVs: "8.19.3",
	system: "macos",
	systemVs: "18.7.0"
}*/
```
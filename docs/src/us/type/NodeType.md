---
title: Node类型 💧
icon: code-branch
---

出参|功能|类型
:-:|:-:|:-:
**arch**|CPU架构|`String`
**cpus**|CPU核数|`Number`
**homedir**|主目录|`String`
**hostname**|主机名|`String`
**nodeVs**|`node`版本|`x.y.z`
**npmVs**|`npm`版本|`x.y.z`
**system**|系统|`windows/macos/linux`
**systemVs**|系统版本|`x.y.z`

```js
import { NodeType } from "@yangzw/bruce-us/dist/node.esm.js";

NodeType();
/*{
	arch: "x64",
	cpus: 20,
	homedir: "C:\\Users\\yangzw",
	hostname: "JowayYoung",
	nodeVs: "20.16.0",
	npmVs: "10.8.1",
	system: "windows",
	systemVs: "10.0.19044"
}*/
```
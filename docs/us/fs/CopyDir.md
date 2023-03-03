> 复制文件路径 - `Node`

以`对象解构`方式入参

入参|功能|类型|默认|说明
:-:|:-:|:-:|:-:|-
**dist**|输出路径|`String`|`""`
**filter**|过滤函数|`Function`|-|返回`true`表示复制，返回`false`表示不复制
**src**|输入路径|`String`|`""`

```js
import { CopyDir } from "@yangzw/bruce-us/dist/node.esm.js";

CopyDir({
	dist: "dist/bruce",
	filter: (src, dist) => true,
	src: "src/bruce"
});
```
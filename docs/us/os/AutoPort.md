> 自动端口 - `Node`

以`对象解构`方式入参

入参|功能|类型|默认|说明
:-:|:-:|:-:|:-:|-
**cb**|回调函数|`Function`|-
**host**|域名|`String`|`本机IP`
**port**|端口|`Number`|`80`|端口范围在`0~65535`

```js
import { AutoPort } from "@yangzw/bruce-us/dist/node.esm.js";

AutoPort({
	cb: port => console.log(port)
	host: "127.0.0.1",
	port: 9999
});
```
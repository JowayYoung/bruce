---
title: 自动端口 💧
icon: share-nodes
---

以`对象解构`的方式入参

入参|功能|类型|默认|说明
:-:|:-:|:-:|:-:|-
**host**|域名|`String`|`本机IP`
**onCall**|回调函数|`Function`|-
**port**|端口|`Number`|`80`|端口范围在`0~65535`

```js
import { AutoPort } from "@yangzw/bruce-us/dist/node.esm.js";

AutoPort({
	host: "127.0.0.1",
	onCall: port => console.log(port)
	port: 9999
});
```
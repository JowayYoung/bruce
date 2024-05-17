---
title: JSONP 🔥
icon: file-code
---

以`对象解构`的方式入参

入参|功能|类型|默认|说明
:-:|:-:|:-:|:-:|-
**name**|全局变量|`String`|`"jsonp"`|-
**onCall**|回调函数|`Function`|-|-
**url**|地址|`String`|`""`|-

```js
import { Jsonp } from "@yangzw/bruce-us/dist/web";

await Jsonp({
	name: "BruceUs",
	onCall: () => console.log(window.BruceUs),
	url: "https://static.xyz.com/bruce-us.js"
});
```
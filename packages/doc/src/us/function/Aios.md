---
title: 异步请求 🔥
icon: rocket
---

以`对象解构`的方式入参

入参|功能|类型|默认|说明
:-:|:-:|:-:|:-:|-
**data**|参数集合|`Object`|`{}`
**headers**|请求头|`Object`|`{}`
**method**|方法|`get/post`|`"get"`
**progress**|上传进度回调函数|`Function`|-
**url**|地址|`String`|`""`
**useCookie**|携带cookie|`Boolean`|`false`
**useJson**|参数JSON化|`Boolean`|`false`

```js
import { Aios } from "@yangzw/bruce-us/dist/web";

const [err, res] = await Aios({
	data: { a: 1, b: 2 },
	method: "post",
	url: "https://api.xyz.com/update-user"
});
console.log(err, res);
```
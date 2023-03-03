> 异步请求 - `Web`

以`对象解构`方式入参

入参|功能|类型|默认|说明
:-:|:-:|:-:|:-:|-
**data**|参数集合|`Object`|`{}`
**error**|失败回调函数|`Function`|-
**success**|成功回调函数|`Function`|-
**type**|类型|`get/post`|`"get"`
**url**|地址|`String`|`""`

```js
import { Ajax } from "@yangzw/bruce-us/dist/web";

Ajax({
	data: { a: 1, b: 2 },
	error: err => console.log(err),
	success: res => console.log(res),
	type: "post",
	url: "https://api.xyz.com/get-user"
});
```
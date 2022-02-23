> 异步请求 - `Web`

以`对象解构`的方式入参

入参|功能|类型|默认|说明
:-:|:-:|:-:|:-:|-
**data**|参数集合|`Object`|`{}`
**error**|失败回调函数|`Function`|`null`
**success**|成功回调函数|`Function`|`null`
**type**|类型|`String`|`"get"`|可选`get`、`post`
**url**|地址|`String`|`""`

```js
import { Ajax } from "@bruce/us";

Ajax({
	data: { a: 1, b: 2 },
	error: err => console.log(err),
	success: res => console.log(res),
	type: "post",
	url: "https://api.xyz.com/get-user"
});
```
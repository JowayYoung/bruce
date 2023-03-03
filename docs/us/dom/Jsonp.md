> JSONP - `Web`

以`对象解构`方式入参

入参|功能|类型|默认|说明
:-:|:-:|:-:|:-:|-
**cb**|回调函数|`Function`|-
**name**|全局变量|`String`|`"jsonp"`
**url**|地址|`String`|`""`

```js
import { Jsonp } from "@yangzw/bruce-us/dist/web";

await Jsonp({
	cb: () => console.log(window.BruceUs),
	name: "BruceUs",
	url: "https://static.xyz.com/bruce-us.js"
});
```
> JSONP - `Web`

入参|功能|类型|默认|说明
:-:|:-:|:-:|:-:|-
**url**|地址|`String`|`""`
**name**|全局变量|`String`|`"jsonp"`
**cb**|回调函数|`Function`|-

```js
import { Jsonp } from "@yangzw/bruce-us/dist/web";

await Jsonp(
	"https://static.xyz.com/bruce-us.js",
	"BruceUs",
	() => console.log(window.BruceUs)
);
```
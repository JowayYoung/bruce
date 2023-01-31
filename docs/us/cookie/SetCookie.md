> 设置Cookie - `Web`

入参|功能|类型|默认|说明
:-:|:-:|:-:|:-:|-
**key**|键|`String`|`""`
**val**|值|`String`|`""`
**day**|过期时间|`Number`|`1`|以日计算

```js
import { SetCookie } from "@yangzw/bruce-us/dist/web";

SetCookie("user_id", "123abc", 7);
```
> 加载脚本 - `Web`

入参|功能|类型|默认|说明
:-:|:-:|:-:|:-:|-
**url**|地址|`String`|`""`
**pst**|插入位置|`String`|`"body"`|可选`head`、`body`

```js
import { LoadScript } from "@bruce/us";

await LoadScript("https://static.xyz.com/bruce-us.js", "body");
```
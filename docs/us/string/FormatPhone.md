> 格式手机

入参|功能|类型|默认|说明
:-:|:-:|:-:|:-:|-
**phone**|手机|`String`|`""`
**sign**|标记|`String`|`"-"`|可选`-/空格`

```js
import { FormatPhone } from "@yangzw/bruce-us";

FormatPhone("18866669999", " "); // "188 6666 9999"
```
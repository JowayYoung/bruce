> 过滤XSS - `Web`

入参|功能|类型|默认|说明
:-:|:-:|:-:|:-:|-
**html**|HTML内容|`String`|`""`

```js
import { FilterXss } from "@bruce/us";

FilterXss("<script>alert(123)</script>"); // "&lt;script&gt;alert(123)&lt;/script&gt;"
```
> 删除标签

入参|功能|类型|默认|说明
:-:|:-:|:-:|:-:|-
**text**|文本|`String`|`""`

```js
import { RemoveTag } from "@yangzw/bruce-us";

RemoveTag("<script>alert(\"hello world\")</script>"); // "alert("hello world")"
```
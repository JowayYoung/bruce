> 检查对象有效键名

入参|功能|类型|默认|说明
:-:|:-:|:-:|:-:|-
**obj**|对象|`Object`|`{}`
**key**|键名|`String/Number/Symbol`|`""`

```js
import { CheckObjValidKey } from "@yangzw/bruce-us";

const obj = { a: 1, b: 2, c: 3, d: 4 };

CheckObjValidKey(obj, "a"); // true
```
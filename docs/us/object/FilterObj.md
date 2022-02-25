> 过滤对象

入参|功能|类型|默认|说明
:-:|:-:|:-:|:-:|-
**obj**|对象|`Object`|`{}`
**keys**|键集合|`Array`|`[]`

```js
import { FilterObj } from "@yangzw/bruce-us";

const obj = { a: 1, b: 2, c: 3, d: 4 };
const keys = ["a", "d"];

FilterObj(obj, keys); // { a: 1, d: 4 }
```
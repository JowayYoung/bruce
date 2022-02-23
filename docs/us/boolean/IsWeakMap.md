> 判断弱映射

入参|功能|类型|默认|说明
:-:|:-:|:-:|:-:|-
**data**|数据|`Any`|-

```js
import { IsWeakMap } from "@bruce/us";

IsWeakMap(new WeakMap()); // true
```
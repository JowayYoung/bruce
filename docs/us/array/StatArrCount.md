> 统计成员个数

入参|功能|类型|默认|说明
:-:|:-:|:-:|:-:|-
**arr**|数组|`Array`|`[]`

```js
import { StatArrCount } from "@bruce/us";

const arr = [0, 1, 1, 2, 2, 2];

StatArrCount(arr); // { 0: 1, 1: 2, 2: 3 }
```
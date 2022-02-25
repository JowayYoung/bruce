> 记录成员位置

入参|功能|类型|默认|说明
:-:|:-:|:-:|:-:|-
**arr**|数组|`Array`|`[]`
**val**|值|`String / Number / Boolean`|-

```js
import { RecordArrPosition } from "@yangzw/bruce-us";

const arr = [2, 1, 5, 4, 2, 1, 6, 6, 7];

RecordArrPosition(arr, 2); // [0, 4]
```
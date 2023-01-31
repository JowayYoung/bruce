> 取整数值

入参|功能|类型|默认|说明
:-:|:-:|:-:|:-:|-
**num**|数值|`Number`|`0`
**dec**|小数个数|`Number`|`2`
**type**|数学函数|`ceil向上取整`/`floor向下取整`/`round四舍五入`|`round`

```js
import { FixedNum } from "@yangzw/bruce-us";

FixedNum(166.665, 2); // 166.67
```
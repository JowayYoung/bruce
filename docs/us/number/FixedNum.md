> 取整数值

以`对象解构`方式入参

入参|功能|类型|默认|说明
:-:|:-:|:-:|:-:|-
**dec**|小数个数|`Number`|`2`
**num**|数值|`Number`|`0`
**type**|数学函数|`ceil向上取整`/`floor向下取整`/`round四舍五入`|`round`

```js
import { FixedNum } from "@yangzw/bruce-us";

FixedNum({ dec: 2, num: 166.665, type: "round" }); // 166.67
```
> 精确数值(四舍五入与百分比)

入参|功能|类型|默认|说明
:-:|:-:|:-:|:-:|-
**num**|数值|`Number`|`0`
**dec**|小数个数|`Number`|`2`
**per**|百分比|`Boolean`|`false`

```js
import { RoundNum } from "@yangzw/bruce-us";

RoundNum(0.331234, 2, true); // "33.12%"
```
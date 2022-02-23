> 格式倒计时

入参|功能|类型|默认|说明
:-:|:-:|:-:|:-:|-
**date**|日期|`String / Number / Date`|-|`String`格式为`YYYY-MM-DD HH:mm:ss`，在`Safari`下需将`-`换成`/`

```js
import { FormatCountdown } from "@bruce/us";

FormatCountdown("2022-12-31"); // "317天12时7分20秒"
```
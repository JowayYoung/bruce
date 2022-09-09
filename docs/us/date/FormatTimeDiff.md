> 格式时间差

入参|功能|类型|默认|说明
:-:|:-:|:-:|:-:|-
**date**|日期|`String / Number / Date`|-|`String`格式为`YYYY-MM-DD HH:mm:ss`，在`Safari`中需将`-`换成`/`

```js
import { FormatTimeDiff } from "@yangzw/bruce-us";

FormatTimeDiff("2022-12-31"); // "10个月后"
```
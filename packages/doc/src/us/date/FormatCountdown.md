---
title: 格式倒计时
icon: calendar-days
---

入参|功能|类型|默认|说明
:-:|:-:|:-:|:-:|-
**date**|日期|`String/Number/Date`|-|`String`格式参考[DayJS](https://dayjs.gitee.io/docs/en/parse/string-format)，在`Safari`中要将`-`改成`/`

```js
import { FormatCountdown } from "@yangzw/bruce-us";

FormatCountdown("2023-12-31"); // "317天12时7分20秒"
```
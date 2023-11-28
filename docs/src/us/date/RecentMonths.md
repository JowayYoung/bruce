---
title: 最近月份
icon: calendar-days
---

入参|功能|类型|默认|说明
:-:|:-:|:-:|:-:|-
**count**|个数|`Number`|`6`
**format**|格式|`String`|`"YYYY-MM"`|格式参考[DayJS](https://dayjs.gitee.io/docs/en/parse/string-format)

```js
import { RecentMonths } from "@yangzw/bruce-us";

RecentMonths(); // ["2023-01", "2023-02", "2023-03", "2023-04", "2023-05", "2023-06"]
```
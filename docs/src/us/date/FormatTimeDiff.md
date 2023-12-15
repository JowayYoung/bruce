---
title: 格式时间差
icon: calendar-days
---

入参|功能|类型|默认|说明
:-:|:-:|:-:|:-:|-
**date**|日期|`String/Number/Date`|-|`String`格式参考[DayJS](https://dayjs.gitee.io/docs/en/parse/string-format)，在`Safari`中要将`-`改成`/`
**format**|格式|`String`|`"YYYY-MM-DD"`|格式参考[DayJS](https://dayjs.gitee.io/docs/en/parse/string-format)

- [x] **大于1年输出预设格式**：默认输出YYYY-MM-DD，可以参考[DayJS](https://dayjs.gitee.io/docs/en/parse/string-format)调整输出格式
- [x] **大于1个月且小于1年**：过去就输出N个月前，未来就输出N个月后
- [x] **大于1日且小于1个月**：过去就输出N天前，未来就输出N天后
- [x] **大于1小时且小于1日**：过去就输出N小时前，未来就输出N小时后
- [x] **大于1分钟且小于1小时**：过去就输出N分钟前，未来就输出N分钟后
- [x] **小于1分钟**：过去就输出刚刚，未来就输出准备

```js
import { FormatTimeDiff } from "@yangzw/bruce-us";

FormatTimeDiff("2023-12-31"); // "10个月后"
```
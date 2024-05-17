---
title: 自定义校验文本
icon: ruler
---

入参|功能|类型|默认|说明
:-:|:-:|:-:|:-:|-
**regexp**|正则|`Regexp`|-|-
**text**|文本|`String`|`""`|-
**msg**|提示|`String`|`""`|-

```js
import { CheckTextPlus } from "@yangzw/bruce-us";

CheckTextPlus(/^(fe)?male$/, "male", "性别输入错误"); // { flag: true, msg: "" }
```
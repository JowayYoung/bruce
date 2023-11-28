---
title: 格式手机
icon: keyboard
---

入参|功能|类型|默认|说明
:-:|:-:|:-:|:-:|-
**phone**|手机|`String`|`""`
**sign**|标记|`-/空格`|`"-"`

```js
import { FormatPhone } from "@yangzw/bruce-us";

FormatPhone("18866669999", " "); // "188 6666 9999"
```
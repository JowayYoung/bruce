---
title: 高亮文本 🔥
icon: file-code
---

入参|功能|类型|默认|说明
:-:|:-:|:-:|:-:|-
**text**|文本|`String`|`""`|-
**keyword**|关键字|`String`|`""`|-

```js
import { HighlightText } from "@yangzw/bruce-us/dist/web";

HighlightText("Bruce真棒，Bruce真棒", "Bruce"); // <span>Bruce</span>真棒，<span>Bruce</span>真棒
```
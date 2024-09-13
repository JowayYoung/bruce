---
title: 判断表单数据
icon: gavel
---

入参|功能|类型|默认|说明
:-:|:-:|:-:|:-:|-
**data**|数据|`Any`|-|-

```js
import { IsFormData } from "@yangzw/bruce-us";

const fd = new FormData();
fd.append("name", "JowayYoung");

IsFormData(fd); // true
```
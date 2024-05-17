---
title: 删除对象空键
icon: object-group
---

入参|功能|类型|默认|说明
:-:|:-:|:-:|:-:|-
**obj**|对象|`Object`|`{}`|-
**clear**|清除假值|`Boolean`|`false`|假值包括`undefined`、`null`、`""`、`0`、`NaN`

```js
import { RemoveObjEmptyKey } from "@yangzw/bruce-us/dist/web";

RemoveObjEmptyKey({ a: 1, b: "2", c: "", d: false, e: 0 }, true); // { a: 1, b:  "2"}
```
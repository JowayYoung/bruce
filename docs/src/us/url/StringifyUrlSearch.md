---
title: URL参数序列化 🔥
icon: paperclip
---

入参|功能|类型|默认|说明
:-:|:-:|:-:|:-:|-
**search**|参数集合|`Object`|`{}`|-
**clear**|清除假值|`Boolean`|`false`|假值包括`undefined`、`null`、`""`、`NaN`

```js
import { StringifyUrlSearch } from "@yangzw/bruce-us/dist/web";

StringifyUrlSearch({ address: "", name: "young", sex: "male" }, true); // "?name=young&sex=male"
```
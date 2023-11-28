---
title: 分组数组
icon: layer-group
---

入参|功能|类型|默认|说明
:-:|:-:|:-:|:-:|-
**arr**|数组|`Array`|`[]`
**key**|属性|`String/Number`|`""`

```js
import { GroupArr } from "@yangzw/bruce-us";

const arr = [
	{ area: "德国", name: "奔驰" },
	{ area: "德国", name: "宝马" },
	{ area: "德国", name: "奥迪" },
	{ area: "英国", name: "捷豹" },
	{ area: "英国", name: "路虎" }
];

GroupArr(arr, "area"); // { 德国: Array(3), 英国: Array(2) }
```
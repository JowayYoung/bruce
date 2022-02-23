> 分组成员特性

入参|功能|类型|默认|说明
:-:|:-:|:-:|:-:|-
**arr**|数组|`Array`|`[]`
**key**|属性|`String`|`""`

```js
import { GroupArrKey } from "@bruce/us";

const arr = [
	{ area: "德国", name: "奔驰" },
	{ area: "德国", name: "宝马" },
	{ area: "德国", name: "奥迪" },
	{ area: "英国", name: "捷豹" },
	{ area: "英国", name: "路虎" }
];

GroupArrKey(arr, "area"); // { 德国: Array(3), 英国: Array(2) }
```
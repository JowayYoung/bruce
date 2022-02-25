> 判断函数参数

入参|功能|类型|默认|说明
:-:|:-:|:-:|:-:|-
**data**|数据|`Any`|-

```js
import { IsArguments } from "@yangzw/bruce-us";

function test() {
	IsArguments(arguments); // true
}

test(1, 2, 3);
```
> 等待

入参|功能|类型|默认|说明
:-:|:-:|:-:|:-:|-
**dura**|时延|`Number`|`1000`

```js
import { WaitFor } from "@yangzw/bruce-us";

(async() => {
	await WaitFor(2000);
	console.log("bruce");
})();
```
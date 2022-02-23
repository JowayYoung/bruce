> 格式异步返回值

入参|功能|类型|默认|说明
:-:|:-:|:-:|:-:|-
**pfn**|Promise函数|`Function`|-

```js
import { AsyncTo } from "@bruce/us";

(async() => {
	const [err, res] = await AsyncTo(GetData());
	await WaitFor(2000);
	console.log(err, res);
})();
```
> 节流

入参|功能|类型|默认|说明
:-:|:-:|:-:|:-:|-
**fn**|函数|`Function`|-
**dura**|时延|`Number`|`50`

```js
import { Throttle } from "@bruce/us";

const handler = Throttle(() => console.log("Scroll"), 2000);
document.body.addEventListener("scroll", handler);
```
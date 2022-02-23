> 防抖

入参|功能|类型|默认|说明
:-:|:-:|:-:|:-:|-
**fn**|函数|`Function`|-
**dura**|时延|`Number`|`50`

```js
import { Debounce } from "@bruce/us";

const handler = Debounce(() => console.log("Click"), 2000);
document.body.addEventListener("click", handler);
```
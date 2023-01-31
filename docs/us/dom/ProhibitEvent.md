> 禁止事件 - `Web`

入参|功能|类型|默认|说明
:-:|:-:|:-:|:-:|-
**events**|地址|`<contextmenu/copy/selectstart>[]`|`[]`

```js
import { ProhibitEvent } from "@yangzw/bruce-us/dist/web";

ProhibitEvent(["contextmenu", "copy", "selectstart"]);
```
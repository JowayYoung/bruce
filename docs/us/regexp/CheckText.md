> 校验文本

入参|功能|类型|默认|说明
:-:|:-:|:-:|:-:|-
**type**|类型|`String`|`""`|可选`address`、`count`、`date`、`email`、`idcard`、`image`、`name`、`number`、`password`、`phone`
**text**|文本|`String`|`""`

```js
import { CheckText } from "@bruce/us";

CheckText("email", "young.joway@aliyun"); // { flag: false, msg: "邮箱只能由xxx@yyy.zzz形式组成" }
```
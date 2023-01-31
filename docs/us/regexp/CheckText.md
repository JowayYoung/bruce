> 校验文本

入参|功能|类型|默认|说明
:-:|:-:|:-:|:-:|-
**type**|类型|`address/count/date/email/idcard/image/name/number/password/phone`|`"phone"`
**text**|文本|`String`|`""`

`type`目前包括以下字段，若`CheckText`无法满足需求，请使用`CheckTextPlus`。

字段|正则|提示
:-:|:-:|-
**address**|`/^[\u4e00-\u9fa5A-Za-z0-9 ]{2,200}$/g`|地址只能由2~200位中文、英文、数字或空格组成
**count**|`/^\d{1,}$/g`|数量只能由数字组成
**date**|`/^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$/g`|日期只能由YYYY-MM-DD HH:mm:ss形式组成
**email**|`/\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/g`|邮箱只能由xxx@yyy.zzz形式组成
**idcard**|`/^(^[1-9]\d{7}((0\d)\|(1[0-2]))(([0\|\1\|2]\d)\|3[0-1])\d{3}$)\|(^[1-9]\d{5}[1-9]\d{3}((0\d)\|(1[0-2]))(([0\|\1\|2]\d)\|3[0-1])((\d{4})\|\d{3}[Xx])$)$/g`|身份证只能由13位数字或12位数字与X组成
**image**|`/\.(jpe?g\|png\|gif\|svg\|webp)$/g`|图片只能是JPG、JPEG、PNG、GIF、SVG或WEBP类型
**name**|`/^[\u4e00-\u9fa5\w-]{2,50}$/g`|名称只能由2~50位中文、英文、数字、下划线或中划线组成
**number**|`/^[+-]?(0\|([1-9]\d*))(\.\d+)?$/g`|计数只能由数字或小数点组成
**password**|`/^(?![0-9]+$)(?![a-z]+$)(?![A-Z]+$)(?!([^(0-9a-zA-Z)])+$)^.{8,20}$/g`|密码只能由8~20位英文、数字或符号至少两种组成
**phone**|`/^1\d{10}$/g`|手机只能由11位数字组成且符合通讯运营商规范

```js
import { CheckText } from "@yangzw/bruce-us";

CheckText("email", "young.joway@aliyun"); // { flag: false, msg: "邮箱只能由xxx@yyy.zzz形式组成" }
```
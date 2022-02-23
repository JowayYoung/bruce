> 图像转B64 - `Web`

入参|功能|类型|默认|说明
:-:|:-:|:-:|:-:|-
**url**|地址|`String`|`""`
**type**|类型|`String`|`"jpg"`|可选`jpg`、`png`

```js
import { Img2Base64 } from "@bruce/us";

await Img2Base64("https://static.xyz.com/pig.jpg", "jpg"); // "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQAB..."
```
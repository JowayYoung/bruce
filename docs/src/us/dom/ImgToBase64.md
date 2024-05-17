---
title: 图像转B64 🔥
icon: file-code
---

入参|功能|类型|默认|说明
:-:|:-:|:-:|:-:|-
**url**|地址|`String`|`""`|-
**type**|类型|`jpg/jpeg/png`|`"jpg"`|-

```js
import { ImgToBase64 } from "@yangzw/bruce-us/dist/web";

await ImgToBase64("https://static.xyz.com/pig.jpg"); // "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQAB..."
```
---
title: 匹配括号文本
icon: ruler
---

入参|功能|类型|默认|说明
:-:|:-:|:-:|:-:|-
**tgt**|括号形式|`String`|`"(*)"`|提取的内容必须使用\*代替
**text**|文本|`String`|`""`|-

```js
import { MatchBracketText } from "@yangzw/bruce-us";

MatchBracketText(
	"<img src=\"*\">",
	"<img src=\"pig.jpg\"><p>bruce</p><img src=\"dada.png\">"
); // ["pig.jpg", "dada.png"]
```
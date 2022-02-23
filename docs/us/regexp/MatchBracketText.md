> 匹配括号文本

入参|功能|类型|默认|说明
:-:|:-:|:-:|:-:|-
**tgt**|括号形式|`String`|`"(*)"`|提取的内容必须使用\*代替
**text**|文本|`String`|`""`

```js
import { MatchBracketText } from "@bruce/us";

MatchBracketText(
	"<img src=\"*\">",
	"<img src=\"pig.jpg\"><p>trample</p><img src=\"dada.png\">"
); // ["pig.jpg", "dada.png"]
```
> 数据类型

入参|功能|类型|默认|说明
:-:|:-:|:-:|:-:|-
**data**|数据|`Any`|-

- [x] **基础数据类型**：`undefined`、`null`、`string`、`number`、`boolean`、`symbol`
- [x] **复合数据类型**：`array`、`object`、`date`、`regexp`、`function`、`class`、`set`、`map`、`weakset`、`weakmap`、`element`
- [x] **函数类型**：`asyncfunction`、`function`、`arguments`
- [x] **空类型**：`error`、`empty`、`emptyarray`、`emptyobject`

```js
import { TypeOf } from "@yangzw/bruce-us";

TypeOf("123"); // "string"
TypeOf(123); // "number"
TypeOf(true); // "boolean"
```
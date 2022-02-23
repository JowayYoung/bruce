> 数据类型

入参|功能|类型|默认|说明
:-:|:-:|:-:|:-:|-
**data**|数据|`Any`|-

基础数据类型：可输出`undefined`、`null`、`string`、`number`、`boolean`、`symbol`

复合数据类型：可输出`array`、`object`、`date`、`regexp`、`function`、`class`、`set`、`map`、`weakset`、`weakmap`、`element`

函数类型：可输出`asyncfunction`、`function`、`arguments`

空类型：可输出`error`、`empty`、`emptyarray`、`emptyobject`

```js
import { TypeOf } from "@bruce/us";

TypeOf("123"); // "string"
TypeOf(123); // "number"
TypeOf(true); // "boolean"
```
> Web类型 - `Web`

出参|功能|说明
:-:|:-:|-
**system**|系统|可选`windows`、`macos`、`linux`、`android`、`ios`
**systemVs**|系统版本
**platform**|平台|可选`desktop`、`mobile`
**engine**|内核|可选`webkit`、`gecko`、`presto`、`trident`
**engineVs**|内核版本
**supporter**|载体|可选`chrome`、`safari`、`firefox`、`opera`、`iexplore/edge`
**supporterVs**|载体版本
**supporter**|外壳|可选`wechat`、`qq`、`uc`、`360`、`2345`、`sougou`、`liebao`、`maxthon`
**supporterVs**|外壳版本

```js
import { WebType } from "@bruce/us";

WebType(); // { engine: "webkit", engineVs: "537.36", platform: "desktop", supporter: "chrome", supporterVs: "78.0.3904.108", system: "macos", systemVs: "10.14.6" }
```
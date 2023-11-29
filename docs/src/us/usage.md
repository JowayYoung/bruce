---
title: 使用
icon: signs-post
order: 2
---

## 引用

`@yangzw/bruce-us`基于`rollup`使用`CJS/ESM/UMD`规范打包，所以可用**IIFE**、**AMD**、**CJS**和**ESM**四种方式引用。推荐使用`IIFE`、`CJS`和`ESM`三种引用方式，后续所有示例都是基于**ESM**。

`package.json`中使用`main`指定入口文件，所以这些引用方式都是等价。

```js
const { EnvType, TypeOf } = require("@yangzw/bruce-us");
// 或
import { EnvType, TypeOf } from "@yangzw/bruce-us";

// 『以上两段代码』(推荐) 等价 『以下两段代码』

const { EnvType, TypeOf } = require("@yangzw/bruce-us/dist/index");
// 或
import { EnvType, TypeOf } from "@yangzw/bruce-us/dist/index";
```

## 关系

`Web模块`和`Node模块`包括`Common模块`全部函数。

- [x] `web.js`包括`index.js`，`web.esm.js`包括`index.esm.js`，`web.umd.js`包括`index.umd.js`
- [x] `node.js`包括`index.js`，`node.esm.js`包括`index.esm.js`

如果在`Web`中使用，请改成这种引用方式。

```js
const { TypeOf, WebType } = require("@yangzw/bruce-us/dist/web");
// 或
import { TypeOf, WebType } from "@yangzw/bruce-us/dist/web";
```

如果在`Node`中使用，请改成这种引用方式。

```js
const { NodeType, TypeOf } = require("@yangzw/bruce-us/dist/node");
// 或
import { NodeType, TypeOf } from "@yangzw/bruce-us/dist/node";
```

## IIFE

将`node_modules/@yangzw/bruce-us/dist/web.umd.js`复制出来，放到创建的`js/bruce-us`文件夹中，通过HTML的`<script>`直接引用。这种引用方式适用于结构单一且依赖较少的`Web项目`。

```html
<body>
	<div>...</div>
	<script src="js/bruce-us/web.umd.js"></script>
	<script>
		console.log(window.BruceUs.TypeOf("bruce"));
		console.log(window.BruceUs.WebType());
	</script>
</body>
```

## AMD

将`node_modules/@yangzw/bruce-us/dist/web.umd.js`复制出来，放到创建的`js/bruce-us`文件夹中，要建立在[RequireJS](https://github.com/requirejs/requirejs)中使用。这种引用方式适用于`Web项目`。

```js
require.config({
	paths: {
		BruceUs: "js/bruce-us/web.umd.js"
	}
});

require(["BruceUs"], function(BruceUs) {
	console.log(BruceUs.TypeOf("bruce"));
	console.log(BruceUs.WebType());
});
```

## CJS

在打包时已经将所有代码处理为ES5，保留`exports`关键字用于编辑器引用模块时做到智能提示，后续交由`webpack`打包时会自动将剩余的`exports`关键字处理掉。这种引用方式适用于`Web项目`和`Node项目`。

```js
// Web
const { TypeOf, WebType } = require("@yangzw/bruce-us/dist/web");

console.log(TypeOf("bruce"));
console.log(WebType());
```

```js
// Node
const { NodeType, TypeOf } = require("@yangzw/bruce-us/dist/node");

console.log(TypeOf("bruce"));
console.log(NodeType());
```

## ESM

在打包时已经将所有代码处理为ES5，保留`export`关键字用于编辑器引用模块时做到智能提示，后续交由`webpack`打包时会自动将剩余的`export`关键字处理掉。这种引用方式适用于`Web项目`和`Node项目`。

```js
// Web
import { TypeOf, WebType } from "@yangzw/bruce-us/dist/web";

console.log(TypeOf("bruce"));
console.log(WebType());
```

```js
// Node
import { NodeType, TypeOf } from "@yangzw/bruce-us/dist/node";

console.log(TypeOf("bruce"));
console.log(NodeType());
```

## 打包

`@yangzw/bruce-us`提供ESM形式的`index.esm.js`，在`package.json`中已经配置`module`字段指向`index.esm.js`。

```json
{
	"main": "dist/index.js",
	"module": "dist/index.esm.js",
	"browser": "dist/index.umd.js"
}
```

如果使用`webpack`打包项目，可以利用`Tree Sharking`的特性删除未使用的代码，有效减小打包体积。

```js
export default {
	// webpack其它配置
	resolve: {
		mainFields: ["module", "browser", "main"]
	}
};
```
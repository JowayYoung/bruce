---
title: 使用
order: 2
toc: menu
---

## 引用

`@yangzw/bruce-us`基于`rollup`使用`UMD`与`ESM`规范打包，因此可用**IIFE**、**AMD**、**CJS**和**ESM**四种方式引用。推荐使用`IIFE`、`CJS`、`ESM`三种引用方式，后续所有演示均使用**ESM**。

由于`package.json`中使用`main`指定了入口文件，所以以下引用方式都是等价的，但只能在`Web`下使用。

```js
const { TypeOf, WebType } = require("@yangzw/bruce-us");
// 或
import { TypeOf, WebType } from "@yangzw/bruce-us";

// 『上面两段代码』(推荐) 等价 『下面两段代码』

const { TypeOf, WebType } = require("@yangzw/bruce-us/dist/web");
// 或
import { TypeOf, WebType } from "@yangzw/bruce-us/dist/web";
```

若在`Node`下使用，请换成以下引用方式。

```js
const { NodeType, TypeOf } = require("trample/dist/node");
// 或
import { NodeType, TypeOf } from "trample/dist/node";
```

## IIFE

把`node_modules/@yangzw/bruce-us/dist/web.umd.js`复制出来，放到新建的`js/bruce-us`文件夹中，通过HTML的`<script>`直接引用。适用于结构单一与依赖较少的`Web`项目。

```html
<body>
	<div>...</div>
	<script src="js/trample/web.umd.js"></script>
	<script>
		console.log(window.BruceUs.TypeOf("bruce"));
		console.log(window.BruceUs.WebType());
	</script>
</body>
```

## AMD

把`node_modules/@yangzw/bruce-us/dist/web.umd.js`复制出来，放到新建的`js/bruce-us`文件夹中，需建立在[RequireJS](https://github.com/requirejs/requirejs)下使用。适用于`Web`项目。

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

在打包过程中已将所有代码处理成ES5，保留`exports`关键字用于编辑器引用模块时做到智能提示，后续交由`webpack`打包时会自动把剩余的`exports`关键字处理掉。适用于`Web`项目与`Node`项目。

```js
// Web
const { TypeOf, WebType } = require("@yangzw/bruce-us");

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

在打包过程中已将所有代码处理成ES5，保留`export`关键字用于编辑器引用模块时做到智能提示，后续交由`webpack`打包时会自动把剩余的`export`关键字处理掉。适用于`Web`项目与`Node`项目。

```js
// Web
import { TypeOf, WebType } from "@yangzw/bruce-us";

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

`@yangzw/bruce-us`提供ESM形式的`web.esm.js`，在`package.json`中已配置`module`字段指向`web.esm.js`。

```json
{
	"main": "dist/web.js",
	"jsnext:main": "dist/web.esm.js",
	"module": "dist/web.esm.js",
	"browser": "dist/web.umd.js"
}
```

若使用`webpack`打包项目可利用**Tree Sharking**特性删除未使用代码，有效减小打包体积。

```js
export default {
	// webpack其他配置
	resolve: {
		mainFields: ["jsnext:main", "module", "browser", "main"]
	}
};
```
# @yangzw/bruce-std

请查看[Bruce FEES](https://JowayYoung.github.io/bruce)或[@yangzw/bruce-std](https://doc.yangzw.vip/bruce/std)的文档

### CJS构建rc文件

- `config文件夹`中的`xxxrc.ts`使用`export = XXX`的形式导出
- `src文件夹`中的脚本使用`.mts`作为文件后缀，内部文件引用使用`xxx/yyy/abc.mjs`的形式
- `package.json`不要设置`type`为`module`
- `tsconfig.json`使用两种形式，`tsconfig.json`用于编译`src`文件夹，`tsconfig.config.json`用于编译`config`文件夹

```json
{
    "main": "dist/index.mjs",
    "bin": {
        "bruce-std": "dist/index.mjs"
    },
    "scripts": {
        "build": "rimraf dist && tsc -p tsconfig.config.json && tsc -p tsconfig.json",
        "dev": "nodemon -w config -w src -w package.json -w tsconfig.json -e ts,mts -x \"npm run build\""
    }
}
```

```json
// tsconfig.json
{
	"compilerOptions": {
		"allowJs": true,
		"allowSyntheticDefaultImports": true,
		"baseUrl": ".",
		"downlevelIteration": true,
		"esModuleInterop": true,
		"experimentalDecorators": true,
		"forceConsistentCasingInFileNames": true,
		"jsx": "preserve",
		"lib": [
			"DOM",
			"DOM.Iterable",
			"ES2015",
			"ES2016",
			"ES2017",
			"ES2018",
			"ES2019",
			"ES2020",
			"ES2021",
			"ES2022",
			"ES2023",
			"ESNext"
		],
		"module": "ESNext",
		"moduleResolution": "Node",
		"outDir": "dist",
		"removeComments": true,
		"resolveJsonModule": true,
		"sourceMap": false,
		"strict": true,
		"target": "ES6"
	},
	"exclude": [
		"node_modules"
	],
	"include": [
		"src"
	]
}
```

```json
// tsconfig.config.json
{
	"compilerOptions": {
		"allowJs": true,
		"allowSyntheticDefaultImports": true,
		"baseUrl": ".",
		"downlevelIteration": true,
		"esModuleInterop": true,
		"experimentalDecorators": true,
		"forceConsistentCasingInFileNames": true,
		"jsx": "preserve",
		"lib": [
			"DOM",
			"DOM.Iterable",
			"ES2015",
			"ES2016",
			"ES2017",
			"ES2018",
			"ES2019",
			"ES2020",
			"ES2021",
			"ES2022",
			"ES2023",
			"ESNext"
		],
		"module": "CommonJS",
		"moduleResolution": "Node",
		"outDir": "dist",
		"removeComments": true,
		"resolveJsonModule": true,
		"rootDir": "config",
		"sourceMap": false,
		"strict": true,
		"target": "ES5"
	},
	"exclude": [
		"node_modules"
	],
	"include": [
		"config"
	]
}
```

### 兼容

##### ecswt v38-

`eslint-config-standard-with-typescript v38-`，tslint配置需要做一些调整。

```ts
import { join } from "node:path";

export default {
	parserOptions: {
		project: "tsconfig.config.json",
		tsconfigRootDir: join(__dirname, "..")
	}
}
```

##### ecswt v38+

`eslint-config-standard-with-typescript v38+`，tslint配置需要做一些调整。

```ts
import { cwd } from "node:process";

export default {
	parserOptions: {
		project: "tsconfig.json",
		tsconfigRootDir: cwd()
	}
}
```

每个项目目录中必须存在`tsconfig.json`且其配置需要做一些调整。

```json
{
	"include": [
		"src"
	]
}
```

**Eslint**的[parserOptions](https://github.com/typescript-eslint/typescript-eslint/tree/main/packages/parser#parseroptionsproject)配置请参考这里。
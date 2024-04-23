# @yangzw/bruce-std

请查看[Bruce FEES](https://JowayYoung.github.io/bruce)或[@yangzw/bruce-std](https://doc.yangzw.vip/bruce/std)的文档

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
## Bruce

请查看[Bruce FEES](https://JowayYoung.github.io/bruce)的文档

### 开发计划

- [ ] **@yangzw/bruce-app**：应用`@1.1.7`✔️
- [x] **@yangzw/bruce-ico**：图标`@1.1.7`
- [x] **@yangzw/bruce-img**：图像`@1.1.7`✔️
- [ ] **@yangzw/bruce-lib**：类库
- [x] **@yangzw/bruce-pkg**：模块`@1.1.7`✔️
- [x] **@yangzw/bruce-std**：规范`@1.1.7`✔️
- [x] **@yangzw/bruce-ui**：组件`@1.1.7`
- [x] **@yangzw/bruce-us**：工具`@1.1.7`✔️

### 色彩定义

- [x] **redBright**：错误、主题
- [x] **yellowBright**：警告、链接、加载
- [x] **blueBright**：说明、路径、名称
- [x] **greenBright**：成功、命令

### 问题清单

- [x] `bruce-pkg`依赖的`listr2`目前未升级到`v7`，`v7`存在无法抛出错误的问题，但是`v6`需要显式依赖`enquirer`
- [x] `vite`从`v4`迁移到`v5`的[注意事项](https://cn.vitejs.dev/guide/migration.html#rollup-4)
- [ ] `stylelint`从`v15`迁移到`v16`的[注意事项](https://stylelint.io/migration-guide/to-16)

### 指令步骤

- 清空缓存：`npm run clean`、`npm run clean:module`、`npm run clean:output`
- 安装依赖：`npm run init`
- 构建源码：`npm run build`
- 构建源码(单包)：`pnpm run --filter=@yangzw/bruce-std build`
- 调试源码(单包)：`pnpm run --filter=@yangzw/bruce-std dev`
- 增加依赖(单包)：`pnpm add bootstrap-icons --filter=@yangzw/bruce-ui`
- 删除依赖(单包)：`pnpm remove bootstrap-icons --filter=@yangzw/bruce-ui`
- 发布模块(单包)：`pnpm publish --filter=@yangzw/bruce-us --no-git-checks --registry https://registry.npmjs.org/`

### 开发细节

#### yarn调试问题

整个项目使用`yarn`进行调试，`yarn`安装之后再配置`bin/prefix/cache目录`。**Windows**和**MacOS**同理，以`MacOS`为例。

找到`bin/prefix/cache目录`并手动删除，同时保留配置文件`/usr/local/share/.yarnrc`。

```sh
# 获取bin目录：/usr/local/bin
yarn global bin

# 获取prefix目录：/usr/local/share/.config/yarn/global
yarn global dir

# 获取cache目录：/usr/local/share/Library/Caches/Yarn
yarn cache bin
```

迁移`bin/prefix/cache目录`到指定位置，`bin目录`要在`prefix目录`中，`prefix目录`和`cache目录`要在同一文件夹中。其中`path`为`/Users/yangzw/Documents/记录/Yarn`。

```sh
# 设置bin目录
yarn config set prefix path/prefix/bin

# 设置prefix目录
yarn config set global-folder path/prefix

# 设置cache目录
yarn config set cache-folder path/cache
```

将`bin目录`增加到环境变量中，重启配置文件使它生效。

```sh
# 进入配置文件
vim ~/.bash_profile

# 在.bash_profile中定义环境变量
export PATH=$PATH:`yarn global bin`

# 重启配置文件
source ~/.bash_profile
```

执行`yarn global add pkg`安装模块并测试它能否在全局环境中使用。

```sh
yarn global add typescript
tsc -v
```

调试范围模块时执行`yarn link`将它挂载到`~/.config/yarn/link`，但是上述配置已经改变`bin/prefix/cache目录`，所以要执行`yarn link --link-folder path`将它指定到`bin目录`中。

```sh
# 进入目录
cd pkg
# 链接指令
yarn link --link-folder path/prefix/bin
# 解除指令
yarn unlink --link-folder path/prefix/bin
```

#### sharp安装问题

设置`sharp镜像`指向到淘宝镜像。

```sh
npm config set sharp_binary_host https://npm.taobao.org/mirrors/sharp/
npm config set sharp_dist_base_url https://npm.taobao.org/mirrors/sharp-libvips/
npm config set sharp_libvips_binary_host https://npm.taobao.org/mirrors/sharp-libvips/
```

前往[sharp-libvips](https://github.com/lovell/sharp-libvips/releases)手动下载压缩包，将它放置到`npm config get cache`获取目录的`_libvips文件夹`中。

- **Windows**选择`win32-x64.tar.br`下载
- **MacOS**选择`darwin-x64.tar.br`下载
- **Linux**选择`linux-x64.tar.br`下载

#### 使用TS开发具备bin命令的Npm模块

首先，配置`tsconfig.json文件`，这些字段必须配置。

- [x] **allowJs**：允许编译器编译JS文件
- [x] **allowSyntheticDefaultImports**：允许导入没有默认导出的模块时，编译器生成默认导出
- [x] **baseUrl**：相对导入的基准路径
- [x] **downlevelIteration**：将`for-of`编译为ES5兼容的代码
- [x] **esModuleInterop**：允许导入CJS模块时使用ES模块的语法
- [x] **experimentalDecorators**：允许使用实验性的装饰器语法
- [x] **forceConsistentCasingInFileNames**：强制文件名称大小写一致
- [x] **jsx**：JSX编译方式
- [x] **lib**：编译之后的可用库
- [x] **module**：编译之后的模块规范
- [x] **moduleResolution**：模块解析方式
- [x] **outDir**：输出目录
- [x] **removeComments**：删除代码注释
- [x] **resolveJsonModule**：允许导入JSON文件
- [x] **rootDir**：源码目录
- [x] **sourceMap**：生成SourceMap文件
- [x] **strict**：启用所有严格类型的检查
- [x] **target**：编译之后的代码需要支持ECMAScript的版本
- [x] **exclude**：排除指定的文件或目录
- [x] **include**：包含指定的文件或目录

```json
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

然后，配置`package.json文件`。为了让TS编译出来的JS能在`Node`的`ESM`模块规范的环境中运行，需要对这些字段进行配置。

- [x] **bin**: 模块的CMD工具，当模块被导入时，会加载这个文件
- [x] **main**: 模块的入口文件，当模块被安装时，会自动将这个字段中指定命令增加到PATH环境变量中
- [x] **type**: 模块规范

同时还要为CMD工具提供调试环境。使用`nodemon`监听`src目录`、`tsconfig.json`和`package.json`，当这些文件发生变化时，重新编译和打包TS为JS，通过`npm link`将模块链接到全局环境中，为命令提供全局的调试和调用。

```json
{
	"type": "module",
	"main": "dist/index.js",
	"bin": {
		"bruce-pkg": "dist/index.js"
	},
	"scripts": {
		"build": "rimraf dist && tsc --project tsconfig.json && npm link",
		"dev": "nodemon --watch src --watch package.json --watch tsconfig.json --ext ts --exec \"npm run build\""
	}
}
```

调试时执行`pnpm run --filter=@yangzw/bruce-pkg dev`。具体来说，命令中每个参数的作用如下。

- [x] **--watch**：缩写为`-w`，监听指定文件或目录的变化，如果存在多个目标，就用多个`--watch`来监听
- [x] **--ext**：监听文件后缀，如果存在多种文件，就用逗号隔开
- [x] **--exec**：文件发生变化时需要执行的命令，需要使用两个`\"`来包裹命令

最后，规范`ts/tsx文件`的编写。参考[文档1](https://docs.astro.build/zh-cn/guides/imports/#typescript)和[文档2](https://github.com/zhongsp/TypeScript/blob/dev/zh/release-notes/typescript-4.7.md#新的文件扩展名)。

根据[TS模块解决方案规则](https://www.typescriptlang.org/docs/handbook/module-resolution.html)，`ts/tsx文件`的后缀不应该在导入TS文件时使用。相反，要么使用`js/jsx`的文件后缀，要么完全省略文件后缀。

```ts
import { getUser } from "./user.js"; // user.ts
import MyComponent from "./component"; // component.tsx
```
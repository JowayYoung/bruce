# Bruce

请查看[Bruce FEES](https://JowayYoung.github.io/bruce)的文档

### 多包开发计划

- [x] **@yangzw/bruce-app**：应用
- [ ] **@yangzw/bruce-ico**：图标
- [x] **@yangzw/bruce-img**：图像
- [ ] **@yangzw/bruce-lib**：类库
- [x] **@yangzw/bruce-pkg**：模块
- [x] **@yangzw/bruce-std**：规范
- [ ] **@yangzw/bruce-ui**：组件
- [x] **@yangzw/bruce-us**：工具

### 备注

##### yarn调试问题

整个项目使用`yarn`进行调试，`yarn`安装完毕并配置`bin/prefix/cache目录`。**Windows**与**MacOS**同理，以`MacOS`为例。

找到`bin/prefix/cache目录`并手动删除，保留配置文件`/usr/local/share/.yarnrc`。

```sh
# 获取bin目录：/usr/local/bin
yarn global bin

# 获取prefix目录：/usr/local/share/.config/yarn/global
yarn global dir

# 获取cache目录：/usr/local/share/Library/Caches/Yarn
yarn cache bin
```

迁移`bin/prefix/cache目录`到指定位置，`bin目录`要在`prefix目录`中，`prefix目录`与`cache目录`要在同一文件夹中。以下`path`为`/Users/yangzw/Documents/记录/Yarn`。

```sh
# 设置bin目录
yarn config set prefix path/prefix/bin

# 设置prefix目录
yarn config set global-folder path/prefix

# 设置cache目录
yarn config set cache-folder path/cache
```

将`bin目录`加入到环境变量中，重启配置文件使其生效。

```sh
# 进入配置文件
vim ~/.bash_profile

# 在.bash_profile中定义环境变量
export PATH=$PATH:`yarn global bin`

# 重启配置文件
source ~/.bash_profile
```

执行`yarn global add pkg`安装模块并测试其能否在全局中使用。

```sh
yarn global add typescript
tsc -v
```

调试范围模块时执行`yarn link`将其挂载到`~/.config/yarn/link`中，但上述配置已改变`bin/prefix/cache目录`，所以要执行`yarn link --link-folder path`将其指定到`bin目录`中。

```sh
# 进入目录
cd pkg
# 链接指令
yarn link --link-folder path/prefix/bin
# 解除指令
yarn unlink --link-folder path/prefix/bin
```

##### sharp安装问题

设置`sharp镜像`指向到淘宝镜像。

```sh
npm config set sharp_binary_host https://npm.taobao.org/mirrors/sharp/
npm config set sharp_dist_base_url https://npm.taobao.org/mirrors/sharp-libvips/
npm config set sharp_libvips_binary_host https://npm.taobao.org/mirrors/sharp-libvips/
```

前往[sharp-libvips](https://github.com/lovell/sharp-libvips/releases)手动下载压缩包，将其放置到`npm config get cache`获取目录的`_libvips文件夹`中。

- **Windows**选择`win32-x64.tar.br`下载
- **MacOS**选择`darwin-x64.tar.br`下载
- **Linux**选择`linux-x64.tar.br`下载
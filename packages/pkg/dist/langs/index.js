import ke from"chalk";import we from"figures";const{blueBright:Ie,greenBright:Pe,redBright:_e,yellowBright:Be}=ke,{cross:Xe,info:eo,tick:Me,warning:Ae}=we,r={create:Ie("创建模块"),help:Be("使用信息"),publish:Ie("发布模块"),version:Be("版本信息")},d={cmd:Pe("bruce-pkg"),desc:`Description:\n${_e("@yangzw/bruce-pkg")} 一个强化NPM命令的模块处理工具\n作者 ${Be("JowayYoung")}\n邮箱 ${Be("young.joway@outlook.com")}\n官网 ${Be("https://yangzw.vip")}\n仓库 ${Be("https://github.com/JowayYoung/bruce")}\n文档 ${Be("https://jowayyoung.github.io/bruce/pkg")}`,judgeNode:Be(`${Ae} ${Ie("Node")}当前版本过低，请更新到${Ie("v16")}以上`),version:(r="1.0.0")=>`${Ie("@yangzw/bruce-pkg")} ${r} Produced by ${_e("JowayYoung")}`},C={checkName:_e(`${Xe} 包名只能由数字、小写字母、下划线或中划线组成且首末位字符只能为数字或小写字母`),checkPath:_e(`${Xe} 路径已经存在，请用其它包名创建模块`),checkScope:_e(`${Xe} 作用域只能由数字或小写字母组成`),doing:Be("模块正在创建中......"),done:Pe(`${Me} 模块创建成功`),judgeInvalid:(r="")=>Be(`${Ae} ${Ie(r)}不可用：可能太相似、被占用或无权用`),judgeValid:(r="")=>Be(`${eo} ${Ie(r)}可用：查询结构仅在当前时间有效，请尽快发布占位`),loading:Be("模块正在查询中......"),name:"请输入包名",scope:"请输入作用域"},or={done:(r="",e="")=>`${Pe(`${Me} ${Ie(r)}${Be(`@${e}`)}发布成功`)}\n\n请执行${Pe("npm config set registry https://registry.npmmirror.com/")}切换到淘宝镜像`,errorAuth:`请执行${Pe("npm login")}登录Npm账号，如果没有账号，请执行${Pe("npm adduser")}创建Npm账号`,errorDepsNpm:`依赖安装失败，请检查${Ie("package.json")}`,errorDepsPnpm:`请执行${Pe("npm i -g pnpm")}安装pnpm`,errorDepsYarn:`请执行${Pe("npm i -g yarn")}安装yarn`,errorEnvNode:"node未安装",errorEnvNpm:"npm未安装",errorEnvRegistry:`请执行${Pe("npm config set registry https://registry.npmjs.org/")}切换到源镜像`,errorPublish:{disabled:"包名不可用，请检查清楚",noaccess:"包名无权用，请更换包名",occupied:"包名已占用，请更换包名",similar:"包名太相似，请更换包名",version:"版本已占用，请升级版本"},taskAuth:"检查账号状态",taskDeps:"检查模块依赖",taskDepsNpm:"使用npm安装依赖",taskDepsPnpm:"使用pnpm安装依赖",taskDepsYarn:"使用yarn安装依赖",taskEnv:"检查运行环境",taskEnvNode:"检查node是否安装",taskEnvNpm:"检查npm是否安装",taskEnvRegistry:"检查npm镜像是否正确",taskPublish:"检查模块数据",undone:_e(`${Xe} 执行步骤出错，请根据提示修复问题再执行${Pe("bruce-pkg p")}`)};export{r as ACTION_TEXT,d as CMD_TEXT,C as CREATE_TEXT,or as PUBLISH_TEXT};
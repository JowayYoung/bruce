import ge from"chalk";import $e from"figures";const{blueBright:je,greenBright:ye,redBright:fe,yellowBright:ke}=ge,{cross:be,tick:xe,warning:Te}=$e,r={copy:je("复制配置(stylelint/eslint)"),help:ke("使用信息"),init:je("初始配置(commitlint)"),update:je("更新配置(stylelint/eslint)"),version:ke("版本信息")},d={cmd:ye("bruce-std"),desc:`Description:\n${fe("@yangzw/bruce-std")} 一个集成Stylelint、Eslint和Commitlint的VSCode配置工具\n作者 ${ke("JowayYoung")}\n邮箱 ${ke("young.joway@outlook.com")}\n官网 ${ke("https://yangzw.vip")}\n仓库 ${ke("https://github.com/JowayYoung/bruce")}\n文档 ${ke("https://jowayyoung.github.io/bruce/std")}`,judgeCode:`${ke(`${Te} VSCode可能未安装，也可能是环境变量未配置，也可能是全局配置被损坏，请重新安装`)}\n\n请到官网下载 ${ke("https://code.visualstudio.com")}`,judgeNode:ke(`${Te} ${je("Node")}当前版本过低，请更新到${je("v16")}以上`),version:(n="1.0.0")=>`${je("@yangzw/bruce-std")} ${n} Produced by ${fe("JowayYoung")}`},$n={doing:ke("配置正在生成中......"),done:(n="")=>`${ye(`${xe} 配置复制成功`)}\n\n请打开配置文件进行粘贴 ${je(n)}`,undone:fe(`${be} 配置复制失败`)},mo={doing:ke("配置正在生成中......"),done:`${ye(`${xe} 配置初始成功`)}\n\n请执行${ye("npm run commit")}提交代码`,undone:fe(`${be} 配置初始失败`)},yn={doing:ke("配置正在生成中......"),done:ye(`${xe} 配置更新成功`),undone:fe(`${be} 配置更新失败`)};export{r as ACTION_TEXT,d as CMD_TEXT,$n as COPY_TEXT,mo as INIT_TEXT,yn as UPDATE_TEXT};
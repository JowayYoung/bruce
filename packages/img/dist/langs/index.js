import{FormatByte as Ye}from"@yangzw/bruce-us/dist/node.js";import ke from"chalk";import we from"figures";const{blueBright:Ie,greenBright:Pe,redBright:_e,yellowBright:Be}=ke,{circleFilled:Ne,cross:Xe,pointer:Ue,tick:Me,warning:Ae}=we,r={compress:Ie("压缩图像"),group:Ie("分组图像"),groupType:Be("类型"),help:Be("使用信息"),mark:Ie("标记图像"),transform:Ie("变换图像"),transformBlur:Be("模糊"),transformExtract:Be("裁剪"),transformFlip:Be("平翻"),transformFlop:Be("对翻"),transformFormat:Be("格式"),transformGrayscale:Be("灰度"),transformNegate:Be("负片"),transformNormalise:Be("对比"),transformResize:Be("调整"),transformRotate:Be("旋转"),transformSharpen:Be("锐化"),version:Be("版本信息")},d={cmd:Pe("bruce-img"),desc:`Description:\n${_e("@yangzw/bruce-img")} 一个多功能无限制的图像处理工具\n作者 ${Be("JowayYoung")}\n邮箱 ${Be("young.joway@outlook.com")}\n官网 ${Be("https://yangzw.vip")}\n仓库 ${Be("https://github.com/JowayYoung/bruce")}\n文档 ${Be("https://jowayyoung.github.io/bruce/img")}`,judgeNode:Be(`${Ae} ${Ie("Node")}当前版本过低，请更新到${Ie("v16")}以上`),version:(e="1.0.0")=>`${Ie("@yangzw/bruce-img")} ${e} Produced by ${_e("JowayYoung")}`},Qe={doing:Be("图像正在压缩中......"),done:Pe(`${Me} 图像压缩成功`),limit:Be(`${Ae} 请确保图像的类型为${Ie("gif,jpg,png,svg,webp")}且体积在${Ie("10M")}以下`),result1:(e="",a)=>Be(`${Ne} [${Ie(e)}]压缩成功：原始体积为${Ie(Ye(a.inputSize))}，压缩体积为${Ie(Ye(a.outputSize))}，优化效果为${Ie(a.ratio)}`),result2:(e="",a="")=>_e(`${Ne} [${Ie(e)}]压缩失败：${a}`),stats:(e=0)=>Pe(`${Ue} 图像处理总数：${Ie(e)}张\n${Ue} 图像处理类型：gif,jpg,png,svg,webp`)},Ve={doing:Be("图像正在分组中......"),done:Pe(`${Me} 图像分组成功`),result1:(e="",a="",o=!1)=>Be(`${Ne} [${Ie(e)}]分组成功：基于${Ie("格式")}分组，分配到[${Ie(a)}]目录中${o?"，文件重名已经为它增加Hash":""}`),result2:(e="",a="",o=!1)=>Be(`${Ne} [${Ie(e)}]分组成功：基于${Ie("尺寸")}分组，分配到[${Ie(a)}]目录中${o?"，文件重名已经为它增加Hash":""}`),result3:(e="",a="",o=!1)=>Be(`${Ne} [${Ie(e)}]分组成功：基于${Ie("体积")}分组，分配到[${Ie(a)}]目录中${o?"，文件重名已经为它增加Hash":""}`),stats:(e=0)=>Pe(`${Ue} 图像处理总数：${Ie(e)}张\n${Ue} 图像处理类型：gif,jpg,png,svg,webp`)},Ke={blend:"请选择水印混合模式",blendList:[{name:"add",value:"add"},{name:"atop",value:"atop"},{name:"clear",value:"clear"},{name:"color-burn",value:"color-burn"},{name:"color-dodge",value:"color-dodge"},{name:"colour-burn",value:"colour-burn"},{name:"colour-dodge",value:"colour-dodge"},{name:"darken",value:"darken"},{name:"dest",value:"dest"},{name:"dest-atop",value:"dest-atop"},{name:"dest-in",value:"dest-in"},{name:"dest-out",value:"dest-out"},{name:"dest-over",value:"dest-over"},{name:"difference",value:"difference"},{name:"exclusion",value:"exclusion"},{name:"hard-light",value:"hard-light"},{name:"in",value:"in"},{name:"lighten",value:"lighten"},{name:"multiply",value:"multiply"},{name:"out",value:"out"},{name:"over",value:"over"},{name:"overlay",value:"overlay"},{name:"saturate",value:"saturate"},{name:"screen",value:"screen"},{name:"soft-light",value:"soft-light"},{name:"source",value:"source"},{name:"xor",value:"xor"}],checkColor:_e(`${Xe} 水印颜色只能是HEX、RGB、RGBA、HSL或HSLA`),checkLabel:_e(`${Xe} 水印文本只能由1~50位数字、英文、中文、空格、下划线或中划线组成`),checkLeft:_e(`${Xe} 水印左偏移量只能是0或正整数`),checkSize:_e(`${Xe} 水印尺寸只能是正整数`),checkTop:_e(`${Xe} 水印上偏移量只能是0或正整数`),color:"请输入水印颜色",doing:`${Be("图像正在标记中......")}`,done:Pe(`${Me} 图像标记成功`),label:"请输入水印文本",left:"请输入水印左偏移量",position:"请选择水印位置",positionList:[{name:"自定义",value:"none"},{name:"中",value:"center"},{name:"左",value:"west"},{name:"右",value:"east"},{name:"上",value:"north"},{name:"下",value:"south"},{name:"左上",value:"northwest"},{name:"左下",value:"southwest"},{name:"右上",value:"northeast"},{name:"右下",value:"southeast"}],result1:(e="",a="")=>Be(`${Ne} [${Ie(e)}]标记成功：水印为${Ie(a)}`),result2:(e="",a="")=>_e(`${Ne} [${Ie(e)}]标记失败：${a}`),size:"请输入水印尺寸",stats:(e=0)=>Pe(`${Ue} 处理图像总数：${Ie(e)}张\n${Ue} 图像处理类型：jpg,png,webp`),top:"请输入水印上偏移量"},We={doing:Be("图像正在变换中......"),done:Pe(`${Me} 图像变换成功`),empty:Be(`${Ae} 请检查配置是否未输入或输入错误`),result1:(e="",a)=>Be(`${Ne} [${Ie(e)}]变换成功：变换尺寸为${Ie(a.width)}x${Ie(a.height)}，变换体积为${Ie(Ye(a.size))}，变换类型为${Ie(a.format)}`),result2:(e="",a="")=>_e(`${Ne} [${Ie(e)}]变换失败：${a}`),stats:(e=0)=>Pe(`${Ue} 图像处理总数：${Ie(e)}张\n${Ue} 图像处理类型：jpg,png,webp`)};export{r as ACTION_TEXT,d as CMD_TEXT,Qe as COMPRESS_TEXT,Ve as GROUP_TEXT,Ke as MARK_TEXT,We as TRANSFORM_TEXT};
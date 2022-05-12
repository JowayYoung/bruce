import { FormatByte, RoundNum } from "@yangzw/bruce-us/dist/node.js";
import Chalk from "chalk";
import Figures from "figures";

const { blueBright, greenBright, redBright, yellowBright } = Chalk;
const { cross, pointer, radioOn, tick } = Figures;

const ACTION_TEXT = {
	compress: blueBright("压缩图像"),
	group: blueBright("分组图像"),
	groupType: yellowBright("类型"),
	help: greenBright("使用信息"),
	mark: blueBright("标记图像"),
	transform: blueBright("变换图像"),
	transformBlur: yellowBright("模糊"),
	transformExtract: yellowBright("裁剪"),
	transformFlip: yellowBright("平翻"),
	transformFlop: yellowBright("对翻"),
	transformFormat: yellowBright("格式"),
	transformGrayscale: yellowBright("灰度"),
	transformNegate: yellowBright("负片"),
	transformNormalise: yellowBright("对比"),
	transformResize: yellowBright("调整"),
	transformRotate: yellowBright("旋转"),
	transformSharpen: yellowBright("锐化"),
	version: greenBright("版本信息")
};

const CMD_TEXT = {
	desc: `Description:\n${blueBright("@yangzw/bruce-img")} 一个多功能无限制的图像处理工具\n作者 ${yellowBright("JowayYoung")}\n邮箱 ${yellowBright("young.joway@aliyun.com")}\n官网 ${yellowBright("https://yangzw.vip")}\n仓库 ${yellowBright("https://github.com/JowayYoung/bruce")}\n文档 ${yellowBright("https://doc.yangzw.vip/bruce/img")}`,
	judge: `${cross} ${blueBright("Node")}当前版本过低，请更新到${greenBright("v16")}以上`,
	name: redBright("bruce-img"),
	version: ver => `${blueBright("@yangzw/bruce-img")} ${ver} Produced by ${greenBright("JowayYoung")}`
};

const COMPRESS_TEXT = {
	doing: yellowBright("图像正在压缩中......"),
	done: `${tick} 压缩图像成功`,
	limit: `请确保图像的类型为${blueBright("jpg/png")}且体积在${blueBright("5M")}以下`,
	result1: (path, obj) => `${radioOn} 压缩[${yellowBright(path)}]成功：原始体积${redBright(FormatByte(obj.input.size))}，压缩体积${greenBright(FormatByte(obj.output.size))}，优化比例${blueBright(RoundNum(1 - obj.output.ratio, 2, true))}`,
	result2: (path, msg) => `${radioOn} 压缩[${yellowBright(path)}]失败：${redBright(msg)}`,
	stats: n => `${pointer} 处理图像总数：${blueBright(n)}张`
};

const GROUP_TEXT = {
	doing: yellowBright("图像正在分组中......"),
	done: `${tick} 分组图像成功`,
	result1: path => `${radioOn} 分组[${yellowBright(path)}]成功：基于${greenBright("格式")}分组`,
	result2: path => `${radioOn} 分组[${yellowBright(path)}]成功：基于${greenBright("尺寸")}分组`,
	result3: path => `${radioOn} 分组[${yellowBright(path)}]成功：基于${greenBright("尺寸")}分组，小于${greenBright("10 KB")}为小图`,
	result4: path => `${radioOn} 分组[${yellowBright(path)}]成功：基于${greenBright("尺寸")}分组，介于${greenBright("10~100 KB")}为中图`,
	result5: path => `${radioOn} 分组[${yellowBright(path)}]成功：基于${greenBright("尺寸")}分组，大于${greenBright("100 KB")}为大图`,
	stats: n => `${pointer} 处理图像总数：${blueBright(n)}张`
};

const MARK_TEXT = {
	doing: `${Chalk.green("图像正在标记中......")}`,
	done: `${tick} 标记图像成功`,
	result1: (path, text) => `${radioOn} 标记[${Chalk.yellowBright(path)}]成功：添加水印${greenBright(text)}`,
	result2: (path, msg) => `${radioOn} 标记[${Chalk.yellowBright(path)}]失败：${Chalk.redBright(msg)}`,
	stats: n => `${pointer} 处理图像总数：${blueBright(n)}张`
};

const TRANSFORM_TEXT = {
	doing: yellowBright("图像正在变换中......"),
	done: `${tick} 变换图像成功`,
	empty: `${cross} 请检查配置是否未输入或输入错误`,
	result1: (path, obj) => `${radioOn} 变换[${yellowBright(path)}]成功：变换尺寸${greenBright(obj.width)}x${greenBright(obj.height)}，变换体积${greenBright(FormatByte(obj.size))}，变换类型${greenBright(obj.format === "jpeg" ? "jpg" : obj.format.toLowerCase())}`,
	result2: (path, msg) => `${radioOn} 变换[${yellowBright(path)}]失败：${redBright(msg)}`,
	stats: n => `${pointer} 处理图像总数：${blueBright(n)}张`
};

const QA_CHECK_TEXT = {
	markColor: "水印颜色只能是HEX、RGB、RGBA",
	markLeft: "水印左偏移量只能是0或正整数",
	markSize: "水印尺寸只能是正整数",
	markText: "水印文本只能由1~50位数字、英文、中文、空格、下划线或中划线组成",
	markTop: "水印上偏移量只能是0或正整数"

};

const QA_MSG_TEXT = {
	markBlend: "请选择水印混合模式",
	markBlendList: [
		{ name: "add", value: "add" },
		{ name: "atop", value: "atop" },
		{ name: "clear", value: "clear" },
		{ name: "color-burn", value: "color-burn" },
		{ name: "color-dodge", value: "color-dodge" },
		{ name: "colour-burn", value: "colour-burn" },
		{ name: "colour-dodge", value: "colour-dodge" },
		{ name: "darken", value: "darken" },
		{ name: "dest", value: "dest" },
		{ name: "dest-atop", value: "dest-atop" },
		{ name: "dest-in", value: "dest-in" },
		{ name: "dest-out", value: "dest-out" },
		{ name: "dest-over", value: "dest-over" },
		{ name: "difference", value: "difference" },
		{ name: "exclusion", value: "exclusion" },
		{ name: "hard-light", value: "hard-light" },
		{ name: "in", value: "in" },
		{ name: "lighten", value: "lighten" },
		{ name: "multiply", value: "multiply" },
		{ name: "out", value: "out" },
		{ name: "over", value: "over" },
		{ name: "overlay", value: "overlay" },
		{ name: "saturate", value: "saturate" },
		{ name: "screen", value: "screen" },
		{ name: "soft-light", value: "soft-light" },
		{ name: "source", value: "source" },
		{ name: "xor", value: "xor" }
	],
	markColor: "请输入水印颜色",
	markLeft: "请输入水印左偏移量",
	markPosition: "请选择水印位置",
	markPositionList: [
		{ name: "无", value: "none" },
		{ name: "中", value: "center" },
		{ name: "左", value: "west" },
		{ name: "右", value: "east" },
		{ name: "上", value: "north" },
		{ name: "下", value: "south" },
		{ name: "左上", value: "northwest" },
		{ name: "左下", value: "southwest" },
		{ name: "右上", value: "northeast" },
		{ name: "右下", value: "southeast" }
	],
	markSize: "请输入水印尺寸",
	markText: "请输入水印文本",
	markTop: "请输入水印上偏移量"
};

export {
	ACTION_TEXT,
	CMD_TEXT,
	COMPRESS_TEXT,
	GROUP_TEXT,
	MARK_TEXT,
	TRANSFORM_TEXT,
	QA_CHECK_TEXT,
	QA_MSG_TEXT
};
import Chalk from "chalk";
import Figures from "figures";

const { blueBright, greenBright, redBright, yellowBright } = Chalk;
const { cross } = Figures;

const ACTION_TEXT = {
	help: greenBright("使用信息"),
	src: greenBright("源码路径"),
	version: greenBright("版本信息"),
	watch: greenBright("变更监听")
};

const CMD_TEXT = {
	desc: `Description:\n${blueBright("@yangzw/bruce-ico")} 一个基于CSS背景遮罩生成CSS图标的图标处理工具\n作者 ${yellowBright("JowayYoung")}\n邮箱 ${yellowBright("young.joway@aliyun.com")}\n官网 ${yellowBright("https://yangzw.vip")}\n仓库 ${yellowBright("https://github.com/JowayYoung/bruce")}\n文档 ${yellowBright("https://doc.yangzw.vip/bruce/ico")}`,
	judge: `${cross} ${blueBright("Node")}当前版本过低，请更新到${greenBright("v16")}以上`,
	name: redBright("bruce-ico"),
	version: ver => `${blueBright("@yangzw/bruce-ico")} ${ver} Produced by ${greenBright("JowayYoung")}`
};

export {
	ACTION_TEXT,
	CMD_TEXT
};
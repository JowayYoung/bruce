import Chalk from "chalk";
import Figures from "figures";

const { blueBright, greenBright, redBright, yellowBright } = Chalk;
const { cross, info, tick, warning } = Figures;

const ACTION_TEXT = {
	create: blueBright("创建模块"),
	help: greenBright("使用信息"),
	publish: blueBright("发布模块"),
	version: greenBright("版本信息")
};

const CMD_TEXT = {
	desc: `Description:\n${blueBright("@yangzw/bruce-pkg")} 一个强化NPM命令的模块处理工具\n作者 ${yellowBright("JowayYoung")}\n邮箱 ${yellowBright("young.joway@aliyun.com")}\n官网 ${yellowBright("https://yangzw.vip")}\n仓库 ${yellowBright("https://github.com/JowayYoung/bruce")}\n文档 ${yellowBright("https://doc.yangzw.vip/bruce/pkg")}`,
	judge: `${cross} ${blueBright("Node")}当前版本过低，请更新到${greenBright("v16")}以上`,
	name: `${redBright("bruce-pkg")}`,
	version: ver => `${blueBright("@yangzw/bruce-pkg")} ${ver} Produced by ${greenBright("JowayYoung")}`
};

const CREATE_TEXT = {
	doing: yellowBright("模块正在创建中......"),
	done: `${tick} 创建模块成功`,
	judgeInvalid: name => `${warning} ${blueBright(name)}不可用：可能太相似、被占用或无权用`,
	judgeValid: name => `${info} ${blueBright(name)}可用：上述信息仅用于判断可忽略，请尽快发布占位`
};

const PUBLISH_TEXT = {
	done: (name, ver) => `${tick} 发布${blueBright(name)}@${yellowBright(ver)}成功`,
	errorAuth: `请执行${greenBright("npm login")}登录npm账号，若无账号请执行${greenBright("npm adduser")}创建npm账号`,
	errorDepsNpm: `依赖安装失败，请检查${blueBright("package.json")}`,
	errorDepsYarn: `请执行${greenBright("npm i -g yarn")}安装yarn`,
	errorEnvNode: "node未安装",
	errorEnvNpm: "npm未安装",
	errorEnvRegistry: `请执行${greenBright("npm config set registry https://registry.npmjs.org/")}切换到源镜像`,
	errorPublish: {
		disabled: "包名不可用，请检查清楚",
		noaccess: "包名无权用，请更换包名",
		occupied: "包名已占用，请更换包名",
		similar: "包名太相似，请更换包名",
		version: "版本已占用，请更换版本"
	},
	taskAuth: "检查账号状态",
	taskDeps: "检查模块依赖",
	taskDepsNpm: "使用npm安装依赖",
	taskDepsYarn: "使用yarn安装依赖",
	taskEnv: "检查运行环境",
	taskEnvNode: "检查node是否安装",
	taskEnvNpm: "检查npm是否安装",
	taskEnvRegistry: "检查npm镜像是否正确",
	taskPublish: "检查模块数据",
	undone: `${cross} 执行步骤出错，请根据提示修复再执行${greenBright("bruce-pkg p")}`,
	warning: `${warning} 请执行${greenBright("npm config set registry https://registry.npmmirror.com/")}切换到淘宝镜像`
};

const QA_CHECK_TEXT = {
	name: `${cross} 包名只能由数字、小写字母、下划线或中划线组成且首末位字符只能为数字或小写字母`,
	path: `${cross} 路径已存在，请使用其他包名初始模块`,
	scope: `${cross} 作用域只能由数字或小写字母组成`
};

const QA_MSG_TEXT = {
	name: "请输入包名",
	scope: "请输入作用域"
};

export {
	ACTION_TEXT,
	CMD_TEXT,
	CREATE_TEXT,
	PUBLISH_TEXT,
	QA_CHECK_TEXT,
	QA_MSG_TEXT
};
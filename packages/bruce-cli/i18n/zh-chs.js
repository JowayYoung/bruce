const Chalk = require("chalk");
const Figures = require("figures");

const GLOB_TEXT = {
	desc: `Description:\n${Chalk.blueBright("@bruce/cli")} 一个零配置开箱即用的${Chalk.redBright("Default/React/Vue")}应用自动化构建脚手架\n文档详情请查看 ${Chalk.yellowBright("https://github.com/JowayYoung/bruce")}`,
	help: "使用信息",
	judgeBrucerc: `${Figures.cross} ${Chalk.blueBright("brucerc.js")}不存在，请重置项目配置`,
	judgeModules: `${Figures.cross} 请执行${Chalk.greenBright("npm i")}或${Chalk.greenBright("yarn")}安装依赖`,
	judgePackage: `${Figures.cross} ${Chalk.blueBright("package.json")}不存在，请重置项目配置`,
	judgeSrc: `${Figures.cross} ${Chalk.blueBright("src目录")}不存在，请重置项目配置`,
	judgeTsconfig: `${Figures.cross} ${Chalk.blueBright("tsconfig.json")}不存在，请重置项目配置`,
	judgeVerBruce: `${Figures.cross} ${Chalk.blueBright("@bruce/cli")}已发布最新版本，请执行${Chalk.greenBright("npm i -g @bruce/cli")}更新`,
	judgeVerNode: `${Figures.cross} 当前${Chalk.blueBright("Node")}版本过低，请更新到${Chalk.greenBright("v12")}以上`,
	version: "版本编号"
};

const ACTION_TEXT = {
	build: "构建项目",
	init: "初始项目",
	locale: "切换语言",
	new: "创建组件",
	remove: "删除依赖"
};

const QUESTION_TEXT = {
	deps: "请选择应用依赖",
	frame: "请选择开发框架",
	judgeCompExist: `${Figures.cross} 组件已存在，请使用其他名称创建组件`,
	judgeCompName: `${Figures.cross} 名称只能由数字、小写字母或中划线组成，且首位字符只能为小写字母`,
	judgePort: `${Figures.cross} 调试端口必须为正整数`,
	judgePortExist: port => `${Figures.cross} 调试端口${Chalk.blueBright(port)}已被占用`,
	judgeProjExist: `${Figures.cross} 项目已存在，请使用其他名称初始项目`,
	judgeProjName: `${Figures.cross} 名称只能由数字、字母或中划线组成，且首位字符只能为数字或字母`,
	judgeVendor: `${Figures.cross} 构建依赖不能为空`,
	locale: "请选择国际语言",
	mode: "请选择构建环境",
	modeMap: { dev: "开发环境", test: "测试环境", prod: "生产环境" }, // eslint-disable-line
	namec: "请输入组件名称",
	namep: "请输入项目名称",
	port: "请输入调试端口",
	style: "请选择样式格式",
	type: "请选择应用类型",
	useAnalyze: "请确认是否分析打包结果",
	useCompress: "请确认是否深度压缩文件",
	useCsslint: "请确认是否校验CSS",
	useEs6: "请确认是否输出ES6代码",
	useHash: "请确认是否哈希文件名称",
	useInstall: "请确认是否安装依赖",
	useJslint: "请确认是否校验JS",
	useOpen: "请确认是否打开浏览器",
	usePolyfill: "请确认是否动态导入垫片",
	useTimed: "请确认是否时间化根目录",
	useTs: "请确认是否集成TypeScript",
	useUpload: "请确认是否上传到服务器",
	vendor: "请选择构建依赖"
};

const BUILD_TEXT = {
	buildFail: (name, ver, mode) => `${Figures.cross} [${mode}]项目构建失败：${Chalk.blueBright(name)}@${Chalk.yellowBright(ver)}`,
	buildSucceed: (name, ver, mode) => `${Figures.tick} [${mode}]项目构建成功：${Chalk.blueBright(name)}@${Chalk.yellowBright(ver)}`,
	dllFail: `${Figures.cross} 动态链接库构建失败`,
	dllSucceed: `${Figures.tick} 动态链接库构建成功`,
	judgeBrucerc: GLOB_TEXT.judgeBrucerc,
	judgeCorejs: `${Figures.cross} ${Chalk.blueBright("core-js")}版本请控制在${Chalk.greenBright("v3")}以上`,
	judgeEntry: `${Figures.cross} 入口文件配置错误，请重置项目配置`,
	judgeModules: GLOB_TEXT.judgeModules,
	judgePackage: GLOB_TEXT.judgePackage,
	judgePolyfill: `${Figures.cross} ${Chalk.blueBright("@babel/polyfill")}已弃用，请使用${Chalk.blueBright("core-js/stable")}和${Chalk.blueBright("regenerator-runtime/runtime")}`,
	judgeSrc: GLOB_TEXT.judgeSrc,
	judgeTsconfig: GLOB_TEXT.judgeTsconfig,
	listening: `监听开发环境 ${Figures.pointer}${Figures.pointer}`,
	listLocalhost: `${Figures.radioOn} 本地网: `,
	listNetwork: `${Figures.radioOn} 局域网: `,
	table: {
		analyze: "分析打包结果",
		compress: "深度压缩文件",
		csslint: "校验CSS",
		env: { dev: "开发环境", test: "测试环境", prod: "生产环境" }, // eslint-disable-line
		es6: "输出ES6代码",
		hash: "哈希文件名称",
		jslint: "校验JS",
		mode: "运行环境",
		name: "项目名称",
		polyfill: "动态导入垫片",
		timed: "时间化根目录",
		upload: "上传到服务器"
	},
	uploadFail: `${Figures.cross} 项目上传失败`,
	uploading: "项目正在上传中......",
	uploadSucceed: `${Figures.tick} 项目上传成功`,
	watch: file => `${Chalk.blueBright(file)}配置被修改，请重新执行${Chalk.greenBright("bruce b")}构建项目`
};

const INIT_TEXT = {
	getting: "依赖正在获取中......",
	initFail: `${Figures.warning} 项目初始成功(${Chalk.redBright(GLOB_TEXT.judgeModules)})`,
	initSucceed: `${Figures.tick} 项目初始成功`,
	installing: "依赖正在安装中......",
	start: name => `${Figures.play} 开始使用以下命令：\n${Figures.radioOn} ${Chalk.greenBright(`cd ${name}`)}\n${Figures.radioOn} ${Chalk.greenBright("bruce b")}`
};

const LOCALE_TEXT = {
	localed: `${Figures.tick} 语言切换成功`
};

const NEW_TEXT = {
	judgeBrucerc: GLOB_TEXT.judgeBrucerc,
	judgeFrame: `${Figures.cross} 非MVVM项目无法执行此命令`,
	judgeModules: GLOB_TEXT.judgeModules,
	judgePackage: GLOB_TEXT.judgePackage,
	judgeSrc: GLOB_TEXT.judgeSrc,
	judgeTsconfig: GLOB_TEXT.judgeTsconfig,
	name: `${Figures.radioOn} 组件名称: `,
	newed: `${Figures.tick} 组件创建成功`,
	path: `${Figures.radioOn} 组件路径: `
};

const REMOVE_TEXT = {
	removed: `${Figures.tick} 依赖删除成功`,
	removing: "依赖正在删除中......"
};

const FormatBool = bool => bool ? "是" : "否";

export {
	ACTION_TEXT,
	BUILD_TEXT,
	GLOB_TEXT,
	INIT_TEXT,
	LOCALE_TEXT,
	NEW_TEXT,
	QUESTION_TEXT,
	REMOVE_TEXT,
	FormatBool // eslint-disable-line
};
const Chalk = require("chalk");
const Figures = require("figures");

const GLOB_TEXT = {
	desc: `Description:\n${Chalk.blueBright("@bruce/cli")} A ${Chalk.redBright("Default/React/Vue")} application automation build scaffold with zero configuration out of the box\nFor more details, please see ${Chalk.yellowBright("https://github.com/JowayYoung/bruce")}`,
	help: "The Usage Information",
	judgeBrucerc: `${Figures.cross} ${Chalk.blueBright("brucerc.js")} doesn't exist, please reset the project configuration`,
	judgeModules: `${Figures.cross} Please execute ${Chalk.greenBright("npm i")} or ${Chalk.greenBright("yarn")} to install dependence`,
	judgePackage: `${Figures.cross} ${Chalk.blueBright("package.json")} doesn't exist, please reset the project configuration`,
	judgeSrc: `${Figures.cross} ${Chalk.blueBright("src directory")} doesn't exist, please reset the project configuration`,
	judgeTsconfig: `${Figures.cross} ${Chalk.blueBright("tsconfig.json")} doesn't exist, please reset the project configuration`,
	judgeVerBruce: `${Figures.cross} ${Chalk.blueBright("@bruce/cli")} has released the latest version, please update it by executing ${Chalk.greenBright("npm i -g @bruce/cli")}`,
	judgeVerNode: `${Figures.cross} The current version of ${Chalk.blueBright("Node")} is too low, please update to over ${Chalk.greenBright("v12")}`,
	version: "The Version Number"
};

const ACTION_TEXT = {
	build: "Build Project",
	init: "Initialize Project",
	locale: "Locale Language",
	new: "Create Component",
	remove: "Remove Dependence"
};

const QUESTION_TEXT = {
	deps: "Please select the application dependence",
	frame: "Please select the development framework",
	judgeCompExist: `${Figures.cross} Component already exists, please use other name to create component`,
	judgeCompName: `${Figures.cross} Name can only be composed of numbers, lowercase letters or middle scribe, and the first characters can only be lowercase letters`,
	judgePort: `${Figures.cross} Debug port must be a positive integer`,
	judgePortExist: port => `${Figures.cross} Debug port ${Chalk.blueBright(port)} has been occupied`,
	judgeProjExist: `${Figures.cross} Project already exists, please use other name to initialize project`,
	judgeProjName: `${Figures.cross} Name can only be composed of numbers, letters or middle scribe, and the first characters can only be numbers or lowercase letters`,
	judgeVendor: `${Figures.cross} Building dependence cann't be empty`,
	locale: "Please select the international language",
	mode: "Please select the building environment",
	modeMap: { dev: "Development", test: "Testing", prod: "Production" }, // eslint-disable-line
	namec: "Please input the component name",
	namep: "Please input the project name",
	port: "Please input the debug port",
	style: "Please select the style format",
	type: "Please select the application type",
	useAnalyze: "Please confirm whether to analyze bundle result",
	useCompress: "Please confirm whether to compress file deeply",
	useCsslint: "Please confirm whether to check CSS",
	useEs6: "Please confirm whether to output ES6 code",
	useHash: "Please confirm whether to hash file name",
	useInstall: "Please confirm whether to install dependence",
	useJslint: "Please confirm whether to check JS",
	useOpen: "Please confirm whether to open browser",
	usePolyfill: "Please confirm whether to import polyfill dynamically",
	useTimed: "Please confirm whether to timed root directory",
	useTs: "Please confirm whether to integrate TypeScript",
	useUpload: "Please confirm whether to upload to server",
	vendor: "Please select the building dependence"
};

const BUILD_TEXT = {
	buildFail: (name, ver, mode) => `${Figures.cross} [${mode}]Project was built failed: ${Chalk.blueBright(name)}@${Chalk.yellowBright(ver)}`,
	buildSucceed: (name, ver, mode) => `${Figures.tick} [${mode}]Project was built successfully: ${Chalk.blueBright(name)}@${Chalk.yellowBright(ver)}`,
	dllFail: `${Figures.cross} Dynamic Link Library was built failed`,
	dllSucceed: `${Figures.tick} Dynamic Link Library was built successfully`,
	judgeBrucerc: GLOB_TEXT.judgeBrucerc,
	judgeCorejs: `${Figures.cross} ${Chalk.blueBright("core-js")} version should be controlled above ${Chalk.greenBright("v3")}`,
	judgeEntry: `${Figures.cross} Entry file configuration error, please reset the project configuration`,
	judgeModules: GLOB_TEXT.judgeModules,
	judgePackage: GLOB_TEXT.judgePackage,
	judgePolyfill: `${Figures.cross} ${Chalk.blueBright("@babel/polyfill")} was deprecated, please use required parts of ${Chalk.blueBright("core-js/stable")} and ${Chalk.blueBright("regenerator-runtime/runtime")}`,
	judgeSrc: GLOB_TEXT.judgeSrc,
	judgeTsconfig: GLOB_TEXT.judgeTsconfig,
	listening: `Listening at development environment ${Figures.pointer}${Figures.pointer}`,
	listLocalhost: `${Figures.radioOn} Localhost: `,
	listNetwork: `${Figures.radioOn} Network: `,
	table: {
		analyze: "Analyze Bundle Result",
		compress: "Compress File Deeply",
		csslint: "Check CSS",
		env: { dev: "Development", test: "Testing", prod: "Production" }, // eslint-disable-line
		es6: "Output ES6 Code",
		hash: "Hash File Name",
		jslint: "Check JS",
		mode: "Runtime Environment",
		name: "Project Name",
		polyfill: "Dynamic Import Polyfill",
		timed: "Timed Root Directory",
		upload: "Upload To Server"
	},
	uploadFail: `${Figures.cross} Project was uploaded failed`,
	uploading: "Project is uploading......",
	uploadSucceed: `${Figures.tick} Project was uploaded successfully`,
	watch: file => `${Chalk.blueBright(file)} configuration has been modified, please re-execute ${Chalk.greenBright("bruce b")} to build the project`
};

const INIT_TEXT = {
	getting: "Dependence is getting......",
	initFail: `${Figures.warning} Project was initialized successfully(${Chalk.redBright(GLOB_TEXT.judgeModules)})`,
	initSucceed: `${Figures.tick} Project was initialized successfully`,
	installing: "Dependence is installing......",
	start: name => `${Figures.play} Get started with the following commands:\n${Figures.radioOn} ${Chalk.greenBright(`cd ${name}`)}\n${Figures.radioOn} ${Chalk.greenBright("bruce b")}`
};

const LOCALE_TEXT = {
	localed: `${Figures.tick} Language was localed successfully`
};

const NEW_TEXT = {
	judgeBrucerc: GLOB_TEXT.judgeBrucerc,
	judgeFrame: `${Figures.cross} Non-MVVM project cann't execute this command`,
	judgeModules: GLOB_TEXT.judgeModules,
	judgePackage: GLOB_TEXT.judgePackage,
	judgeSrc: GLOB_TEXT.judgeSrc,
	judgeTsconfig: GLOB_TEXT.judgeTsconfig,
	name: `${Figures.radioOn} Component Name: `,
	newed: `${Figures.tick} Component was newed successfully`,
	path: `${Figures.radioOn} Component Path: `
};

const REMOVE_TEXT = {
	removed: `${Figures.tick} Dependence was removed successfully`,
	removing: "Dependence is removing......"
};

const FormatBool = bool => bool ? "Yes" : "No";

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
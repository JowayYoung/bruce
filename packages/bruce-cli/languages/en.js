import Chalk from "chalk";
import Figures from "figures";

const { blueBright, greenBright, redBright, yellowBright } = Chalk;
const { cross, play, pointer, radioOn, tick, warning } = Figures;

const GLOB_TEXT = {
	desc: `Description:\n${blueBright("@bruce/cli")} A ${redBright("Default/React/Vue")} application automation build scaffold with zero configuration out of the box\nFor more details, please see ${yellowBright("https://github.com/JowayYoung/bruce")}`,
	help: "The Usage Information",
	judgeBrucerc: `${cross} ${blueBright("brucerc.js")} doesn't exist, please reset the project configuration`,
	judgeModules: `${cross} Please execute ${greenBright("npm i")} or ${greenBright("yarn")} to install dependence`,
	judgePackage: `${cross} ${blueBright("package.json")} doesn't exist, please reset the project configuration`,
	judgeSrc: `${cross} ${blueBright("src directory")} doesn't exist, please reset the project configuration`,
	judgeTsconfig: `${cross} ${blueBright("tsconfig.json")} doesn't exist, please reset the project configuration`,
	judgeVerBruce: `${cross} ${blueBright("@bruce/cli")} has released the latest version, please update it by executing ${greenBright("npm i -g @bruce/cli")}`,
	judgeVerNode: `${cross} The current version of ${blueBright("Node")} is too low, please update to over ${greenBright("v12")}`,
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
	judgeCompExist: `${cross} Component already exists, please use other name to create component`,
	judgeCompName: `${cross} Name can only be composed of numbers, lowercase letters or middle scribe, and the first characters can only be lowercase letters`,
	judgePort: `${cross} Debug port must be a positive integer`,
	judgePortExist: port => `${cross} Debug port ${blueBright(port)} has been occupied`,
	judgeProjExist: `${cross} Project already exists, please use other name to initialize project`,
	judgeProjName: `${cross} Name can only be composed of numbers, letters or middle scribe, and the first characters can only be numbers or lowercase letters`,
	judgeVendor: `${cross} Building dependence cann't be empty`,
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
	buildFail: (name, ver, mode) => `${cross} [${mode}]Project was built failed: ${blueBright(name)}@${yellowBright(ver)}`,
	buildSucceed: (name, ver, mode) => `${tick} [${mode}]Project was built successfully: ${blueBright(name)}@${yellowBright(ver)}`,
	dllFail: `${cross} Dynamic Link Library was built failed`,
	dllSucceed: `${tick} Dynamic Link Library was built successfully`,
	judgeBrucerc: GLOB_TEXT.judgeBrucerc,
	judgeCorejs: `${cross} ${blueBright("core-js")} version should be controlled above ${greenBright("v3")}`,
	judgeEntry: `${cross} Entry file configuration error, please reset the project configuration`,
	judgeModules: GLOB_TEXT.judgeModules,
	judgePackage: GLOB_TEXT.judgePackage,
	judgePolyfill: `${cross} ${blueBright("@babel/polyfill")} was deprecated, please use required parts of ${blueBright("core-js/stable")} and ${blueBright("regenerator-runtime/runtime")}`,
	judgeSrc: GLOB_TEXT.judgeSrc,
	judgeTsconfig: GLOB_TEXT.judgeTsconfig,
	listening: `Listening at development environment ${pointer}${pointer}`,
	listLocalhost: `${radioOn} Localhost: `,
	listNetwork: `${radioOn} Network: `,
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
	uploadFail: `${cross} Project was uploaded failed`,
	uploading: "Project is uploading......",
	uploadSucceed: `${tick} Project was uploaded successfully`,
	watch: file => `${blueBright(file)} configuration has been modified, please re-execute ${greenBright("bruce b")} to build the project`
};

const INIT_TEXT = {
	getting: "Dependence is getting......",
	initFail: `${warning} Project was initialized successfully(${redBright(GLOB_TEXT.judgeModules)})`,
	initSucceed: `${tick} Project was initialized successfully`,
	installing: "Dependence is installing......",
	start: name => `${play} Get started with the following commands:\n${radioOn} ${greenBright(`cd ${name}`)}\n${radioOn} ${greenBright("bruce b")}`
};

const LOCALE_TEXT = {
	localed: `${tick} Language was localed successfully`
};

const NEW_TEXT = {
	judgeBrucerc: GLOB_TEXT.judgeBrucerc,
	judgeFrame: `${cross} Non-MVVM project cann't execute this command`,
	judgeModules: GLOB_TEXT.judgeModules,
	judgePackage: GLOB_TEXT.judgePackage,
	judgeSrc: GLOB_TEXT.judgeSrc,
	judgeTsconfig: GLOB_TEXT.judgeTsconfig,
	name: `${radioOn} Component Name: `,
	newed: `${tick} Component was newed successfully`,
	path: `${radioOn} Component Path: `
};

const REMOVE_TEXT = {
	removed: `${tick} Dependence was removed successfully`,
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
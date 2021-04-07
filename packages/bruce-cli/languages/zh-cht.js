import Chalk from "chalk";
import Figures from "figures";

const { blueBright, greenBright, redBright, yellowBright } = Chalk;
const { cross, play, pointer, radioOn, tick, warning } = Figures;

const GLOB_TEXT = {
	desc: `Description:\n${blueBright("@bruce/cli")} 一個零配置開箱即用的${redBright("Default/React/Vue")}應用自動化構建腳手架\n文檔詳情請查看 ${yellowBright("https://github.com/JowayYoung/bruce")}`,
	help: "使用信息",
	judgeBrucerc: `${cross} ${blueBright("brucerc.js")}不存在，請重置項目配置`,
	judgeModules: `${cross} 請執行${greenBright("npm i")}或${greenBright("yarn")}安裝依賴`,
	judgePackage: `${cross} ${blueBright("package.json")}不存在，請重置項目配置`,
	judgeSrc: `${cross} ${blueBright("src目錄")}不存在，請重置項目配置`,
	judgeTsconfig: `${cross} ${blueBright("tsconfig.json")}不存在，請重置項目配置`,
	judgeVerBruce: `${cross} ${blueBright("@bruce/cli")}已發布最新版本，請執行${greenBright("npm i -g @bruce/cli")}更新`,
	judgeVerNode: `${cross} 當前${blueBright("Node")}版本過低，請更新到${greenBright("v12")}以上`,
	version: "版本編號"
};

const ACTION_TEXT = {
	build: "構建項目",
	init: "初始項目",
	locale: "切換語言",
	new: "創建組件",
	remove: "刪除依賴"
};

const QUESTION_TEXT = {
	deps: "請選擇應用依賴",
	frame: "請選擇開發框架",
	judgeCompExist: `${cross} 組件已存在，請使用其他名稱創建組件`,
	judgeCompName: `${cross} 名稱只能由數字、小寫字母或中劃線組成，且首位字符只能為小寫字母`,
	judgePort: `${cross} 調試端口必須為正整數`,
	judgePortExist: port => `${cross} 調試端口${blueBright(port)}已被占用`,
	judgeProjExist: `${cross} 項目已存在，請使用其他名稱初始項目`,
	judgeProjName: `${cross} 名稱只能由數字、字母或中劃線組成，且首位字符只能為數字或字母`,
	judgeVendor: `${cross} 構建依賴不能為空`,
	locale: "請選擇國際語言",
	mode: "請選擇構建環境",
	modeMap: { dev: "開發環境", test: "測試環境", prod: "生產環境" }, // eslint-disable-line
	namec: "請輸入組件名稱",
	namep: "請輸入項目名稱",
	port: "請輸入調試端口",
	style: "請選擇樣式格式",
	type: "請選擇應用類型",
	useAnalyze: "請確認是否分析打包結果",
	useCompress: "請確認是否深度壓縮文件",
	useCsslint: "請確認是否校驗CSS",
	useEs6: "請確認是否輸出ES6代碼",
	useHash: "請確認是否哈希文件名稱",
	useInstall: "請確認是否安裝依賴",
	useJslint: "請確認是否校驗JS",
	useOpen: "請確認是否打開瀏覽器",
	usePolyfill: "請確認是否動態導入墊片",
	useTimed: "請確認是否時間化根目錄",
	useTs: "請確認是否集成TypeScript",
	useUpload: "請確認是否上傳到服務器",
	vendor: "請選擇構建依賴"
};

const BUILD_TEXT = {
	buildFail: (name, ver, mode) => `${cross} [${mode}]項目構建失敗：${blueBright(name)}@${yellowBright(ver)}`,
	buildSucceed: (name, ver, mode) => `${tick} [${mode}]項目構建成功：${blueBright(name)}@${yellowBright(ver)}`,
	dllFail: `${cross} 動態鏈接庫構建失敗`,
	dllSucceed: `${tick} 動態鏈接庫構建成功`,
	judgeBrucerc: GLOB_TEXT.judgeBrucerc,
	judgeCorejs: `${cross} ${blueBright("core-js")}版本請控制在${greenBright("v3")}以上`,
	judgeEntry: `${cross} 入口文件配置錯誤，請重置項目配置`,
	judgeModules: GLOB_TEXT.judgeModules,
	judgePackage: GLOB_TEXT.judgePackage,
	judgePolyfill: `${cross} ${blueBright("@babel/polyfill")}已棄用，請使用${blueBright("core-js/stable")}和${blueBright("regenerator-runtime/runtime")}`,
	judgeSrc: GLOB_TEXT.judgeSrc,
	judgeTsconfig: GLOB_TEXT.judgeTsconfig,
	listening: `監聽開發環境 ${pointer}${pointer}`,
	listLocalhost: `${radioOn} 本地網: `,
	listNetwork: `${radioOn} 局域網: `,
	table: {
		analyze: "分析打包結果",
		compress: "深度壓縮文件",
		csslint: "校驗CSS",
		env: { dev: "開發環境", test: "測試環境", prod: "生產環境" }, // eslint-disable-line
		es6: "輸出ES6代碼",
		hash: "哈希文件名稱",
		jslint: "校驗JS",
		mode: "運行環境",
		name: "項目名稱",
		polyfill: "動態導入墊片",
		timed: "時間化根目錄",
		upload: "上傳到服務器"
	},
	uploadFail: `${cross} 項目上傳失敗`,
	uploading: "項目正在上傳中......",
	uploadSucceed: `${tick} 項目上傳成功`,
	watch: file => `${blueBright(file)}配置被修改，請重新執行${greenBright("bruce b")}構建項目`
};

const INIT_TEXT = {
	getting: "依賴正在獲取中......",
	initFail: `${warning} 項目初始成功(${redBright(GLOB_TEXT.judgeModules)})`,
	initSucceed: `${tick} 項目初始成功`,
	installing: "依賴正在安裝中......",
	start: name => `${play} 開始使用以下命令：\n${radioOn} ${greenBright(`cd ${name}`)}\n${radioOn} ${greenBright("bruce b")}`
};

const LOCALE_TEXT = {
	localed: `${tick} 語言切換成功`
};

const NEW_TEXT = {
	judgeBrucerc: GLOB_TEXT.judgeBrucerc,
	judgeFrame: `${cross} 非MVVM項目無法執行此命令`,
	judgeModules: GLOB_TEXT.judgeModules,
	judgePackage: GLOB_TEXT.judgePackage,
	judgeSrc: GLOB_TEXT.judgeSrc,
	judgeTsconfig: GLOB_TEXT.judgeTsconfig,
	name: `${radioOn} 組件名稱: `,
	newed: `${tick} 組件創建成功`,
	path: `${radioOn} 組件路徑: `
};

const REMOVE_TEXT = {
	removed: `${tick} 依賴刪除成功`,
	removing: "依賴正在刪除中......"
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
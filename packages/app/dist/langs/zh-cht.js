import ke from"chalk";import we from"figures";const{blueBright:Ie,greenBright:Be,redBright:Pe,yellowBright:Ne}=ke,{circleFilled:Xe,cross:_e,tick:Oe,warning:Me}=we,r={build:Ie("構建應用"),buildOpts:{mode:Ne("環境模式"),polyfill:Ne("代碼墊片"),useAnalyzer:Ne("分析打包結果"),useCompressor:Ne("壓縮文件數據"),useCsslint:Ne("校驗樣式代碼"),useHash:Ne("哈希文件名稱"),useJslint:Ne("校驗腳本代碼"),useTimer:Ne("時化應用目錄")},create:Ie("創建應用"),createOpts:{appName:Ne("應用名稱"),frame:Ne("開發框架"),style:Ne("預設樣式"),useInstaller:Ne("安裝應用依賴"),useTs:Ne("集成TypeScript")},dev:Ie("調試應用"),devOpts:{port:Ne("調試端口"),useCsslint:Ne("校驗樣式代碼"),useHttps:Ne("開啟證書服務"),useJslint:Ne("校驗腳本代碼"),useOpener:Ne("打開初始網頁")},help:Ne("使用信息"),init:Ie("初始物料"),initOpts:{mateName:Ne("物料名稱"),template:Ne("預設模板")},locale:Ie("切換語言"),remove:Ie("刪除緩存"),version:Ne("版本信息")},sT={judgeBrucerc:Ne(`${Me} ${Ie("配置文件")}不存在，請查看文檔重置${Ie("brucerc.(js|json|ts|yaml)")}`),judgeIndexes:Ne(`${Me} ${Ie("入口文件")}不存在，請查看文檔重置${Ie("index.(js|ts|jsx|tsx)")}`),judgeModules:Ne(`${Me} ${Ie("項目依賴")}不存在，請執行${Be("npm i")}或${Be("yarn")}安裝依賴`),judgePackage:Ne(`${Me} ${Ie("package.json")}不存在， 請執行${Be("npm init")}或${Be("yarn init")}創建${Ie("package.json")}`),judgeTsconfig:Ne(`${Me} ${Ie("tsconfig.json")}不存在，請查看文檔重置${Ie("tsconfig.json")}`)},m={cmd:Be("bruce-app"),desc:`Description:\n${Pe("@yangzw/bruce-app")} 一個零配置開箱即用的JS/React應用自動化構建腳手架\n作者 ${Ne("JowayYoung")}\n郵箱 ${Ne("young.joway@outlook.com")}\n官網 ${Ne("https://yangzw.vip")}\n倉庫 ${Ne("https://github.com/JowayYoung/bruce")}\n文檔 ${Ne("https://jowayyoung.github.io/bruce/app")}`,judgeNode:Ne(`${Me} ${Ie("Node")}當前版本過低，請更新到${Ie("v16")}以上`),version:(e="1.0.0")=>`${Ie("@yangzw/bruce-app")} ${e} Produced by ${Pe("JowayYoung")}`},Ee={ext:{js:"js文件：適合動態配置",json:"json文件：適合靜態配置",ts:`ts文件：適合動態配置(${Pe("推薦")})`,yaml:"yaml文件：適合靜態配置"},mode:{dev:"開發環境",test:"測試環境",pre:"預覽環境",prod:"生產環境"},polyfill:{es5:"ES5靜態墊片：根據業務代碼引入，兼容所有ES5下限范圍的瀏覽器",es6:`ES6靜態墊片：根據業務代碼引入，兼容所有ES6下限范圍的瀏覽器(${Pe("推薦")})`,custom:"自定義靜態墊片：根據業務代碼引入，兼容所有自定義范圍的瀏覽器",dynamic:"動態墊片：根據UserAgent引入，使用Polyfill服務"},template:{component:"組件",layout:"布局",flow:"流程",view:"視圖",page:"頁面"}},TT={doing:Ne("配置正在加載中......"),done:(e="unknown",s="1.0.0",n="prod")=>`${Be(`${Oe} 應用構建成功`)}\n\n${Xe} 應用名稱：${Ie(e)}\n${Xe} 應用版本：${Ie(s)}\n${Xe} 環境模式：${Ie(Ee.mode[n])}`,judgeBrucerc:sT.judgeBrucerc,judgeIndexes:sT.judgeIndexes,judgeModules:sT.judgeModules,judgePackage:sT.judgePackage,judgeTsconfig:sT.judgeTsconfig,undone:Pe(`${_e} 應用構建失敗`)},b={doing1:Ne("應用正在創建中......"),doing2:Ne("依賴正在安裝中......"),done1:(e="unknown")=>`${Be(`${Oe} 應用創建成功`)}\n\n執行這些命令運行應用\n${Xe} ${Be(`cd ${e}`)}\n${Xe} ${Be("bruce b")}`,done2:(e="unknown")=>`${Be(`${Oe} 應用創建成功`)}\n\n依賴未安裝或安裝失敗，請自己安裝依賴\n執行這些命令安裝依賴\n${Xe} ${Be(`cd ${e}`)}\n${Xe} ${Be("npm i")} 或 ${Be("yarn")}`},ET={judgeBrucerc:sT.judgeBrucerc,judgeIndexes:sT.judgeIndexes,judgeModules:sT.judgeModules,judgePackage:sT.judgePackage,judgeTsconfig:sT.judgeTsconfig},aT={doing:Ne("物料正在初始中......"),done:Be(`${Oe} 物料初始成功`),judgeBrucerc:sT.judgeBrucerc,judgeFrame:Ne(`${Me} 非React應用無法執行這條命令`),judgeIndexes:sT.judgeIndexes,judgeModules:sT.judgeModules,judgePackage:sT.judgePackage,judgeTsconfig:sT.judgeTsconfig},XT={doing:Ne("語言正在切換中......"),done:Be(`${Oe} 語言切換成功`)},_T={doing:Ne("緩存正在刪除中......"),done:Be(`${Oe} 緩存刪除成功`)},At={appName:Pe(`${_e} 應用名稱只能由數字、字母或中劃線組成且首末位字符只能為數字或字母`),appPath:Pe(`${_e} 應用路徑已經存在，請使用其它名稱創建應用`),mateName:Pe(`${_e} 物料名稱只能由數字、小寫字母或中劃線組成且首末位字符只能為數字或小寫字母`),matePath:Pe(`${_e} 物料路徑已存在，請使用其它名稱初始物料`),portName:Pe(`${_e} 調試端口只能由正整數組成且范圍在0~65535之間`),portPath:Pe(`${_e} 調試端口已占用`)},Se={appName:"請輸入應用名稱",cache:"請選擇廢棄緩存",deps:"請選擇應用依賴",ext:"請選擇配置後綴",frame:"請選擇開發框架",lang:"請選擇本地語言",mateName:"請輸入物料名稱",mode:"請選擇環境模式",polyfill:"請選擇代碼墊片",port:"請輸入調試端口",style:"請選擇預設樣式",template:"請選擇預設模板",useAnalyzer:"請確認是否分析打包結果",useCompressor:"請確認是否壓縮文件數據",useCsslint:"請確認是否校驗樣式代碼",useHash:"請確認是否哈希文件名稱",useHttps:"請確認是否開啟證書服務",useInstaller:"請確認是否安裝應用依賴",useJslint:"請確認是否校驗腳本代碼",useOpener:"請確認是否打開初始網頁",useTimer:"請確認是否時化應用目錄",useTs:"請確認是否集成TypeScript"};export{r as ACTION_TEXT,TT as BUILD_TEXT,At as CHECK_TEXT,m as CMD_TEXT,b as CREATE_TEXT,ET as DEV_TEXT,sT as GLOBAL_TEXT,aT as INIT_TEXT,XT as LOCALE_TEXT,Ee as MAP_TEXT,Se as QUESTION_TEXT,_T as REMOVE_TEXT};
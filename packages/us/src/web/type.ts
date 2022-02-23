/** 类型工具 **/

interface SystemObj {
	[key: string]: RegExp
}

interface SystemVsObj {
	[key: string|number]: RegExp
}

interface PlatformObj {
	[key: string]: string[]
}

interface EngineObj {
	[key: string]: RegExp[]
}

interface SupporterObj {
	[key: string]: string
}

interface SupporterForWebkitObj {
	[key: string]: RegExp
}

interface SupporterVsObj {
	[key: string]: RegExp
}

interface ShellObj {
	[key: string|number]: RegExp[]
}

interface WebObj {
	engine: string
	engineVs: string
	platform: string
	supporter: string
	supporterVs: string
	system: string
	systemVs: string
	shell?: string
	shellVs?: string
}

/**
 * @name Web类型
 * @param {string} [ua=navigator.userAgent.toLowerCase()] 用户代理
 */
function WebType(ua = navigator.userAgent.toLowerCase()): WebObj {
	// 权重：系统 > 平台 > 内核 > 载体 > 外壳
	const testUa = (regexp: RegExp): boolean => regexp.test(ua);
	const testVs = (regexp: RegExp): string => regexp
		? (ua.match(regexp) ?? "").toString().replace(/[^0-9|_.]/g, "").replace(/_/g, ".")
		: "unknow";
	/* eslint-disable sort-keys */
	// 系统
	const systemMap: SystemObj = {
		windows: /windows|win32|win64|wow32|wow64/g, // windows系统
		macos: /macintosh|macintel/g, // macos系统
		linux: /x11/g, // linux系统
		android: /android|adr/g, // android系统
		ios: /ios|iphone|ipad|ipod|iwatch/g // ios系统
	};
	const systemVsMap: SystemVsObj = {
		macos: /os x [\d._]+/g,
		android: /android [\d._]+/g,
		ios: /os [\d._]+/g
	};
	const systemVsForWindows = (): string => {
		const vs = (ua.match(/(windows nt [\d._]+)|(windows [\w._]+)/g) ?? "")
			.toString()
			.replace(/windows( nt)? /g, "");
		const map: SystemVsObj = {
			2000: /^(5\.0|2000)/g,
			xp: /^(5\.1|xp)/g,
			2003: /^(5\.2|2003)/g,
			vista: /^(6\.0|vista)/g,
			7: /^(6\.1|7)/g,
			8: /^(6\.2|8)/g,
			8.1: /^(6\.3|8\.1)/g,
			10: /^(10\.0|10)/g
		};
		return Object.keys(map).find(v => map[v].test(vs)) ?? "unknow";
	};
	const system = Object.keys(systemMap).find(v => testUa(systemMap[v])) ?? "unknow";
	const systemVs = system === "unknow"
		? "unknow version"
		: system === "windows"
			? systemVsForWindows()
			: testVs(systemVsMap[system]);
	// 平台
	const platformMap: PlatformObj = {
		desktop: ["windows", "macos", "linux"], // 桌面端
		mobile: ["android", "ios"] // 移动端
	};
	const platform = testUa(/mobile/g)
		? "mobile"
		: Object.keys(platformMap).find(v => platformMap[v].includes(system)) ?? "unknow";
	// 内核
	const engineMap: EngineObj = {
		webkit: [/applewebkit/g, /applewebkit\/[\d._]+/g], // webkit内核
		gecko: [/(?=.*gecko)(?=.*firefox)/g, /gecko\/[\d._]+/g], // gecko内核
		presto: [/presto/g, /presto\/[\d._]+/g], // presto内核
		trident: [/trident|compatible|msie/g, /trident\/[\d._]+/g] // trident内核
	};
	const engine = Object.keys(engineMap).find(v => testUa(engineMap[v][0])) ?? "unknow";
	const engineVs = engine === "unknow"
		? "unknow version"
		: testVs(engineMap[engine][1]);
	// 载体
	const supporterMap: SupporterObj = {
		gecko: "firefox", // firefox浏览器
		presto: "opera", // opera浏览器
		trident: "iexplore" // iexplore浏览器
	};
	const supporterForWebkit = (): string => {
		const map: SupporterForWebkitObj = {
			edge: /edge/g, // edge浏览器
			opera: /opr/g, // opera浏览器
			chrome: /chrome/g, // chrome浏览器
			safari: /safari/g // safari浏览器
		};
		return Object.keys(map).find(v => testUa(map[v])) ?? "unknow";
	};
	const supporterVsMap: SupporterVsObj = {
		chrome: /chrome\/[\d._]+/g,
		safari: /version\/[\d._]+/g,
		firefox: /firefox\/[\d._]+/g,
		opera: /opr\/[\d._]+/g,
		iexplore: /(msie [\d._]+)|(rv:[\d._]+)/g,
		edge: /edge\/[\d._]+/g
	};
	const supporter = supporterMap[engine]
		? engine === "webkit" ? supporterForWebkit() : supporterMap[engine]
		: "unknow";
	const supporterVs = testVs(supporterVsMap[supporter]);
	// 外壳
	const shellMap: ShellObj = {
		wechat: [/micromessenger/g, /micromessenger\/[\d._]+/g], // 微信浏览器
		qq: [/qqbrowser/g, /qqbrowser\/[\d._]+/g], // QQ浏览器
		uc: [/ucbrowser/g, /ucbrowser\/[\d._]+/g], // UC浏览器
		360: [/qihu 360se/g], // 360浏览器(无版本)
		2345: [/2345explorer/g, /2345explorer\/[\d._]+/g], // 2345浏览器
		sougou: [/metasr/g], // 搜狗浏览器(无版本)
		liebao: [/lbbrowser/g], // 猎豹浏览器(无版本)
		maxthon: [/maxthon/g, /maxthon\/[\d._]+/g] // 遨游浏览器
	};
	const shell = Object.keys(shellMap).find(v => testUa(shellMap[v][0])) ?? "none";
	const shellVs = shell === "none"
		? "none"
		: !shellMap[shell][1]
			? "unknow version"
			: testVs(shellMap[shell][1]);
	/* eslint-enable */
	return Object.assign({
		engine, // webkit gecko presto trident
		engineVs,
		platform, // desktop mobile
		supporter, // chrome safari firefox opera iexplore edge
		supporterVs,
		system, // windows macos linux android ios
		systemVs
	}, shell === "none" ? {} : {
		shell, // wechat qq uc 360 2345 sougou liebao maxthon
		shellVs
	});
}

export {
	WebType
};
/** 类型工具 **/
type EngineOpts = "webkit" | "gecko" | "presto" | "trident";

type PlatformOpts = "desktop" | "mobile";

type ShellOpts = "uc" | "qq" | "sougou" | "maxthon" | "2345" | "360" | "liebao" | "xiaomi" | "huawei" | "oppo" | "vivo" | "wechat" | "baidu" | "toutiao";

type SupporterOpts = "chrome" | "safari" | "edge" | "firefox" | "opera" | "iexplore";

type SystemOpts = "windows" | "macos" | "linux" | "android" | "ios";

type EngineType = {
	[key in EngineOpts]: RegExp[]
};

type ShellType = {
	[key in ShellOpts]: RegExp[]
};

type SupporterType = {
	[key in SupporterOpts]: RegExp[]
};

type SystemType = {
	[key in SystemOpts]: RegExp
};

interface SystemVsType {
	[key: string]: RegExp
}

interface InfoType {
	engine: EngineOpts | "unknow"
	engineVs: string
	platform: PlatformOpts
	supporter: SupporterOpts | "unknow"
	supporterVs: string
	system: SystemOpts | "unknow"
	systemVs: string
	shell?: ShellOpts | "none"
	shellVs?: string
}

/**
 * @name Web类型
 * @param {string} [ua=navigator.userAgent] 用户代理
 */
function WebType(ua = navigator.userAgent): InfoType {
	// 权重：系统 > 平台 > 内核 > 载体 > 外壳
	const _ua = ua.toLowerCase();
	const testUa = (regexp: RegExp): boolean => regexp.test(_ua);
	const testVs = (regexp: RegExp): string => regexp
		? (_ua.match(regexp) ?? "").toString().replace(/[^0-9|_.]/g, "").replace(/_/g, ".")
		: "unknow";
	/* eslint-disable sort-keys */
	// 系统
	const systemMap: SystemType = {
		windows: /windows|win32|win64|wow32|wow64/g,
		macos: /macintosh|macintel/g,
		linux: /x11|ubuntu/g,
		android: /android|adr/g,
		ios: /ios|iphone|ipad|ipod/g
	};
	const systemVsMap: SystemVsType = {
		macos: /mac os x [\d._]+/g,
		linux: /ubuntu\/[\d._]+/g,
		android: /android [\d._]+/g,
		ios: /os [\d._]+/g
	};
	const systemVsByWin = (): string => {
		const vs = (_ua.match(/(windows nt [\d._]+)|(windows [\w._]+)/g) ?? "")
			.toString()
			.replace(/windows( nt)? /g, "");
		const map: SystemVsType = {
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
	const system = (Object.keys(systemMap).find(v => testUa(systemMap[v as SystemOpts])) ?? "unknow") as (SystemOpts | "unknow");
	const systemVs = system === "unknow"
		? "unknow version"
		: system === "windows"
			? systemVsByWin()
			: testVs(systemVsMap[system]) || "unknow version";
	// 平台
	const platform: PlatformOpts = testUa(/mobile/g) ? "mobile" : "desktop";
	// 内核
	const engineMap: EngineType = {
		webkit: [/applewebkit/g, /applewebkit\/[\d._]+/g],
		gecko: [/gecko\//g, /rv:[\d._]+/g],
		presto: [/presto/g, /presto\/[\d._]+/g],
		trident: [/compatible|msie|trident/g, /trident\/[\d._]+/g]
	};
	const engine = (Object.keys(engineMap).find(v => testUa(engineMap[v as EngineOpts][0])) ?? "unknow") as (EngineOpts | "unknow");
	const engineVs = engine === "unknow"
		? "unknow version"
		: testVs(engineMap[engine][1]) || "unknow version";
	// 载体
	const supporterMap: SupporterType = {
		safari: [/.*safari.*version.*|.*version.*safari.*/g, /version\/[\d._]+/g],
		edge: [/edge?/g, /edge?\/[\d._]+/g],
		firefox: [/firefox/g, /firefox\/[\d._]+/g],
		opera: [/op(era|r)/g, /(version|opr)\/[\d._]+/g],
		iexplore: [/compatible|msie|trident/g, /(msie |rv:)[\d._]+/g],
		chrome: [/chrome/g, /chrome\/[\d._]+/g]
	};
	const supporter = (Object.keys(supporterMap).find(v => testUa(supporterMap[v as SupporterOpts][0])) ?? "unknow") as (SupporterOpts | "unknow");
	const supporterVs = supporter === "unknow"
		? "unknow version"
		: testVs(supporterMap[supporter][1]) || "unknow version";
	// 外壳
	const shellMap: ShellType = {
		uc: [/ucweb|uc?browser|uclite/g, /(ucweb|uc?browser\/|uclite\/)[\d._]+/g], // UC浏览器
		qq: [/qqbrowser/g, /qqbrowser\/[\d._]+/g], // QQ浏览器
		sougou: [/metasr|sogoumobilebrowser/g, /(metasr |sogoumobilebrowser\/)[\d._]+/], // 搜狗浏览器
		maxthon: [/maxthon/g, /maxthon(\/| )[\d._]+/g], // 遨游浏览器
		2345: [/2345explorer/g, /2345explorer\/[\d._]+/g], // 2345浏览器
		360: [/360se/g], // 360浏览器(无版本)
		liebao: [/lbbrowser/g], // 猎豹浏览器(无版本)
		xiaomi: [/xiaomi|miuibrowser/g, /miuibrowser\/[\d._]+/g], // 小米浏览器(内置)
		huawei: [/huaweibrowser/g, /huaweibrowser\/[\d._]+/g], // 华为浏览器(内置)
		oppo: [/heytapbrowser/g, /heytapbrowser\/[\d._]+/g], // OPPO浏览器(内置)
		vivo: [/vivobrowser/g, /vivobrowser\/[\d._]+/g], // VIVO浏览器(内置)
		wechat: [/micromessenger/g, /micromessenger\/[\d._]+/g], // 微信浏览器(应用)
		baidu: [/baiduboxapp/g, /baiduboxapp\/[\d._]+/g], // 百度浏览器(应用)
		toutiao: [/newsarticle|ttwebview/g, /(newsarticle|ttwebview)\/[\d._]+/g] // 头条浏览器(应用)
	};
	const shell = (Object.keys(shellMap).find(v => testUa(shellMap[v as ShellOpts][0])) ?? "none") as (ShellOpts | "none");
	const shellVs = shell === "none"
		? "none"
		: shellMap[shell][1]
			? testVs(shellMap[shell][1]) || "unknow version"
			: "unknow version";
	/* eslint-enable */
	return Object.assign({
		engine, // webkit gecko presto trident
		engineVs,
		platform, // desktop mobile
		supporter, // chrome safari edge firefox opera iexplore
		supporterVs,
		system, // windows macos linux android ios
		systemVs
	}, shell === "none" ? {} : {
		shell, // uc qq sougou maxthon 2345 360 liebao xiaomi huawei oppo vivo wechat baidu toutiao
		shellVs
	});
}

export {
	WebType
};
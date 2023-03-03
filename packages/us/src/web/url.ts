/** URL工具 **/
import { IsEmptyArray, IsEmptyObject } from "../common/boolean";
import { WebType } from "./type";

type SearchType = Record<string, string | number>;

/**
 * @name 唤起应用
 * @param {string} [download=""] 下载地址
 * @param {string} [downloadAndroid=""] Android下载地址
 * @param {string} [downloadIos=""] iOS下载地址
 * @param {string} [downloadYyb=""] 应用宝下载地址
 * @param {string} [host=""] 域名
 * @param {object} [params={}] 查询参数
 * @param {string} [path=""] 路径
 * @param {string} [protocol=""] 协议
 * @param {boolean} [debug=false] 调试
 * @param {function} [fail] 失败回调函数
 * @param {function} [start] 开始回调函数
 * @param {function} [startWechat] 开始回调函数(在微信内)
 * @param {number} [timeout=3000] 时延
 */
interface AppConfigType {
	download: string
	downloadAndroid: string
	downloadIos: string
	downloadYyb?: string
	host: string
	params?: Record<string, string>
	path: string
	protocol: string
}

interface AppOptionType {
	debug?: boolean
	fail?: () => void // 唤起应用失败，跳转下载链接
	start?: () => void // 唤起应用
	startWechat?: () => void // 微信内唤起应用
	timeout?: number
}

const defaultConfig: AppConfigType = {
	download: "",
	downloadAndroid: "",
	downloadIos: "",
	downloadYyb: "",
	host: "",
	params: {},
	path: "",
	protocol: ""
};

const defaultOption: AppOptionType = {
	debug: false,
	timeout: 3000
};

class CallApp {
	protected option: AppOptionType;
	protected scheme: string;
	protected link: string;
	constructor(conf: AppConfigType = defaultConfig, opts: AppOptionType = {}) {
		const { system, shell } = WebType();
		const {
			download,
			downloadAndroid,
			downloadIos,
			downloadYyb,
			host,
			params,
			path,
			protocol
		} = Object.assign(defaultConfig, conf);
		this.option = Object.assign(defaultOption, opts);
		this.scheme = `${protocol}://${host}${path}${StringifyUrlSearch(params)}`;
		this.link = (shell === "wechat" && downloadYyb ? downloadYyb : system === "ios" ? downloadIos : downloadAndroid) || download;
	}
	protected fallback(): void {
		const { fail, timeout = 3000 } = this.option;
		const timer = setTimeout(() => {
			fail?.();
			window.location.href = this.link;
		}, timeout);
		setTimeout(() => {
			window.addEventListener("blur", () => clearTimeout(timer));
		}, timeout - 500);
	}
	onCall(): void {
		const { platform, shell } = WebType();
		const { debug, start, startWechat } = this.option;
		debug && console.log("scheme", this.scheme);
		debug && console.log("link", this.link);
		if (platform !== "mobile") {
			new Error("无法在桌面端唤起应用");
		} else if (shell === "wechat" && startWechat) {
			// 微信内无法唤起应用
			startWechat();
		} else {
			start?.();
			window.location.href = this.scheme;
			this.fallback();
		}
	}
}

/**
 * @name URL参数反序列化
 */
function ParseUrlSearch(): SearchType {
	const { search } = location;
	return search ? search.replace(/(^\?)|(&$)/g, "").split("&").reduce((t: SearchType, v) => {
		const [key, val] = v.split("=");
		t[key] = decodeURIComponent(val);
		return t;
	}, {}) : {};
}

/**
 * @name 删除URL参数
 * @param {array} search 参数集合
 */
function RemoveUrlSearch(params: string[] = []): void {
	if (IsEmptyArray(params)) return;
	const url = location.origin + location.pathname;
	const hash = location.hash;
	const oldSearch = ParseUrlSearch();
	params.forEach(v => Reflect.deleteProperty(oldSearch, v));
	const newSearchStr = StringifyUrlSearch(oldSearch);
	history.pushState({}, document.title, url + newSearchStr + hash);
}

/**
 * @name 设置URL参数
 * @param {object} [search={}] 参数集合
 */
function SetUrlSearch(search: SearchType = {}): void {
	if (IsEmptyObject(search)) return;
	const url = location.origin + location.pathname;
	const hash = location.hash;
	const oldSearch = ParseUrlSearch();
	const newSearch = Object.assign({}, oldSearch, search);
	const newSearchStr = StringifyUrlSearch(newSearch);
	history.pushState({}, document.title, url + newSearchStr + hash);
}

/**
 * @name URL参数序列化
 * @param {object} [search={}] 参数集合
 * @param {boolean} [clear=false] 清除假值(undefined、null、""、NaN)
 */
function StringifyUrlSearch(search: SearchType = {}, clear = false): string {
	return Object.entries(search).reduce((t, v) => {
		if (clear) {
			return [undefined, null, "", NaN].includes(v[1]) ? t : `${t}${v[0]}=${encodeURIComponent(v[1])}&`;
		} else {
			return `${t}${v[0]}=${encodeURIComponent(v[1])}&`;
		}
	}, IsEmptyObject(search) ? "" : "?").replace(/&$/, "");
}

export {
	CallApp,
	ParseUrlSearch,
	RemoveUrlSearch,
	SetUrlSearch,
	StringifyUrlSearch
};
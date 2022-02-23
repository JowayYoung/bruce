/** URL工具 **/
import { IsEmptyArray, IsEmptyObject } from "../common/boolean";

interface SearchObj {
	[key: string]: string
}

/**
 * @name URL参数反序列化
 */
function ParseUrlSearch(): SearchObj {
	const { search } = location;
	return search ? search.replace(/(^\?)|(&$)/g, "").split("&").reduce((t: SearchObj, v) => {
		const [key, val] = v.split("=");
		t[key] = decodeURIComponent(val);
		return t;
	}, {}) : {};
}

/**
 * @name 删除URL参数
 * @param {array} search 参数集合
 */
function RemoveUrlSearch(...search: string[]): void {
	if (IsEmptyArray(search)) return;
	const url = location.origin + location.pathname;
	const hash = location.hash;
	const oldSearch = ParseUrlSearch();
	search.forEach(v => Reflect.deleteProperty(oldSearch, v));
	const newSearchStr = StringifyUrlSearch(oldSearch);
	history.pushState({}, document.title, url + newSearchStr + hash);
}

/**
 * @name 设置URL参数
 * @param {object} [search={}] 参数集合
 */
function SetUrlSearch(search: SearchObj = {}): void {
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
function StringifyUrlSearch(search: SearchObj = {}, clear = false): string {
	return Object.entries(search).reduce((t, v) => {
		if (clear) {
			return [undefined, null, "", NaN].includes(v[1]) ? t : `${t}${v[0]}=${encodeURIComponent(v[1])}&`;
		} else {
			return `${t}${v[0]}=${encodeURIComponent(v[1])}&`;
		}
	}, IsEmptyObject(search) ? "" : "?").replace(/&$/, "");
}

export {
	ParseUrlSearch,
	RemoveUrlSearch,
	SetUrlSearch,
	StringifyUrlSearch
};
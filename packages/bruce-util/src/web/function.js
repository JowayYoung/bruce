/** 函数工具 **/
import { StringifyUrlSearch } from "./url.js";

/**
 * @name 异步请求
 * @param {object} [data={}] 参数集合
 * @param {function} [error=null] 失败回调函数
 * @param {function} [success=null] 成功回调函数
 * @param {string} [type="get"] 类型：get、post
 * @param {string} [url=""] 地址
 */
function Ajax({ data = {}, error = null, success = null, type = "get", url = "" }) {
	const xhr = new XMLHttpRequest();
	const method = type.toUpperCase();
	data = StringifyUrlSearch(data);
	if (method === "GET") {
		xhr.open("GET", data ? `${url}${data}` : `${url}?t=${+new Date()}`, true);
		xhr.send();
	} else if (method === "POST") {
		xhr.open("POST", url, true);
		xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		xhr.send(data);
	}
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status === 200) {
				success && success(xhr.responseText);
			} else {
				error && error(xhr.status);
			}
		}
	};
}

export {
	Ajax
};
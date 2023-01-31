/** 函数工具 **/
import Axios from "axios";

import { AsyncTo } from "../common/function";
import { StringifyUrlSearch } from "./url";

interface AjaxType {
	data?: {
		[key: string]: string
	}
	error?: (status: number) => void
	success?: (res: string) => void
	type?: "get" | "post"
	url: string
}

interface RequestType {
	data?: {
		[key: string]: string | number
	}
	headers?: object
	method?: "get" | "post"
	progress?: (p: object) => void
	url: string
	useJson?: boolean
}

interface ResponseType<T> {
	code: number
	data: T | null
	flag: boolean
	msg: string
}

/**
 * @name 异步请求
 * @param {object} [data={}] 参数集合
 * @param {object} [headers={}] 请求头
 * @param {string} [method="get"] 方法：get、post
 * @param {function} [progress] 上传进度回调函数
 * @param {string} [url=""] 地址
 * @param {boolean} [useJson={}] 参数JSON化
 */
async function Aios<T>({
	data = {},
	headers = {},
	method = "get",
	progress,
	url = "",
	useJson = false
}: RequestType): Promise<[Error | null, ResponseType<T> | null]> {
	const mopt = method === "get"
		? { params: data }
		: useJson ? { data } : { data: StringifyUrlSearch(data, true).replace(/^\?/g, "") };
	const opts: object = Object.assign({
		headers,
		method,
		onUploadProgress: progress,
		url
	}, mopt);
	const promise = Axios(opts);
	const [err, res] = await AsyncTo(promise);
	return [err, !err && res?.status === 200 && res?.data ? res.data : null];
}

/**
 * @name 异步请求
 * @param {object} [data={}] 参数集合
 * @param {function} [error=null] 失败回调函数
 * @param {function} [success=null] 成功回调函数
 * @param {string} [type="get"] 类型：get、post
 * @param {string} [url=""] 地址
 */
function Ajax({
	data = {},
	error,
	success,
	type = "get",
	url = ""
}: AjaxType): void {
	const xhr = new XMLHttpRequest();
	const method = type.toUpperCase();
	const params = StringifyUrlSearch(data);
	if (method === "GET") {
		xhr.open("GET", data ? `${url}${params}` : `${url}?t=${+new Date()}`, true);
		xhr.send();
	} else if (method === "POST") {
		xhr.open("POST", url, true);
		xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		xhr.send(params);
	}
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status === 200) {
				success?.(xhr.responseText);
			} else {
				error?.(xhr.status);
			}
		}
	};
}

export {
	Aios,
	Ajax
};
/** DOM工具 **/
import { AsyncTo } from "../common/function.js";

/**
 * @name 自适应
 * @param {number} [width=750] 设计图宽度
 */
function AutoResponse(width = 750) {
	const target = document.documentElement;
	if (target.clientWidth >= 600) {
		target.style.fontSize = "80px";
	} else {
		target.style.fontSize = target.clientWidth / width * 100 + "px";
	}
}

/**
 * @name 复制粘贴
 * @param {element} [elem=document.body] 节点
 */
function CopyPaste(elem = document.body) {
	const end = elem.childNodes.length;
	const range = document.createRange();
	const selection = getSelection();
	range.setStart(elem, 0);
	range.setEnd(elem, end);
	selection.removeAllRanges();
	selection.addRange(range);
	document.execCommand("copy", false, null);
	selection.removeRange(range);
}

/**
 * @name 下载文件
 * @param {string} [url=""] 地址
 * @param {string} [name=""] 文件名
 */
function DownloadFile(url = "", name = "") {
	const target = document.createElement("a");
	const event = document.createEvent("MouseEvents");
	target.setAttribute("href", url);
	target.setAttribute("download", name);
	event.initEvent("click", true, true);
	target.dispatchEvent(event);
}

/**
 * @name 过滤XSS
 * @param {string} [html=""] HTML内容
 */
function FilterXss(html = "") {
	const elem = document.createElement("div");
	elem.innerText = html;
	const result = elem.innerHTML;
	return result;
}

/**
 * @name 图像转B64
 * @param {string} [url=""] 地址
 * @param {string} [type="image/png"] 类型：image/jpeg、image/png
 */
async function Img2Base64(url = "", type = "image/png") {
	const promise = new Promise((resolve, reject) => {
		const img = new Image();
		img.setAttribute("src", url);
		img.setAttribute("crossOrigin", "");
		img.addEventListener("load", () => {
			let canvas = document.createElement("canvas");
			canvas.width = img.width;
			canvas.height = img.height;
			canvas.getContext("2d").drawImage(img, 0, 0);
			const dataURL = canvas.toDataURL(type);
			canvas = null;
			resolve(dataURL);
		});
		img.addEventListener("error", err => reject(new Error(err)));
	});
	const [err, res] = await AsyncTo(promise);
	return !err && res ? res : "";
}

/**
 * @name JSONP
 * @param {string} [url=""] 地址
 * @param {string} [name="jsonp"] 全局变量
 * @param {function} [cb=null] 回调函数
 */
function Jsonp(url = "", name = "jsonp", cb = null) {
	const script = document.createElement("script");
	script.src = url;
	script.async = true;
	window[name] = data => cb && cb(data);
	document.body.appendChild(script);
}

/**
 * @name 加载脚本
 * @param {string} [url=""] 地址
 * @param {string} [pst="head"] 插入位置
 */
async function LoadScript(url = "", pst = "head") {
	const promise = new Promise((resolve, reject) => {
		if ([...document.getElementsByTagName("script")].some(v => v.src === url || v.src.includes(url))) {
			reject(new Error(`<${pst}>已存在此脚本`));
		}
		const script = document.createElement("script");
		script.setAttribute("src", url);
		script.addEventListener("load", () => resolve(true));
		script.addEventListener("error", err => reject(new Error(err)));
		document[pst].appendChild(script);
	});
	const [err, res] = await AsyncTo(promise);
	return !err && res;
}

export {
	AutoResponse,
	CopyPaste,
	DownloadFile,
	FilterXss,
	Img2Base64,
	Jsonp,
	LoadScript
};
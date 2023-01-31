/** DOM工具 **/
import { AsyncTo } from "../common/function";

type EventOpts = "contextmenu" | "copy" | "selectstart";

type TgtFunc<T> = (d: T) => void;

/**
 * @name 自适应
 * @param {number} [width=750] 设计图宽度
 */
function AutoResponse(width: number = 750): void {
	const target = document.documentElement;
	if (target.clientWidth >= 600) {
		target.style.fontSize = "80px";
	} else {
		target.style.fontSize = `${target.clientWidth / width * 100}px`;
	}
}

/**
 * @name B64转文件
 * @param {string} [base64=""] base64
 * @param {string} [filename="unknow"] 文件名称
 */
function Base64ToFile(base64 = "", name = "unknow"): File {
	const arr = base64.split(",");
	const type = arr[0]?.match(/:(.*?);/)?.[1] ?? "jpg";
	const ext = type.split("/")[1];
	const bstr = atob(arr[1]);
	let len = bstr.length;
	const u8arr = new Uint8Array(len);
	while (len--) { u8arr[len] = bstr.charCodeAt(len); }
	return new File([u8arr], `${name}.${ext}`, { type });
}

/**
 * @name 复制粘贴
 * @param {element} [elem=document.body] 节点
 */
function CopyPaste(elem: HTMLElement = document.body): void {
	const end = elem.childNodes.length;
	const range = document.createRange();
	const selection = getSelection();
	if (selection) {
		range.setStart(elem, 0);
		range.setEnd(elem, end);
		selection.removeAllRanges();
		selection.addRange(range);
		document.execCommand("copy", false);
		selection.removeRange(range);
	}
}

/**
 * @name 下载文件
 * @param {string} [url=""] 地址
 * @param {string} [name="unknow"] 文件名称
 */
function DownloadFile(url: string = "", name: string = "unknow"): void {
	const event = new Event("MouseEvents");
	const target = document.createElement("a");
	target.setAttribute("href", url);
	target.setAttribute("download", name);
	target.click();
	target.dispatchEvent(event);
}

/**
 * @name 下载文本
 * @param {string} [text=""] 文本
 * @param {string} [name="unknow"] 文件名称
 */
function DownloadText(text: string = "", name: string = "unknow"): void {
	const event = new Event("MouseEvents");
	const target = document.createElement("a");
	target.setAttribute("href", `data:text/plain;charset=utf-8,${encodeURIComponent(text)}`);
	target.setAttribute("download", name);
	target.click();
	target.dispatchEvent(event);
}

/**
 * @name 过滤XSS
 * @param {string} [html=""] HTML
 */
function FilterXss(html: string = ""): string {
	const elem = document.createElement("div");
	elem.innerText = html;
	const result = elem.innerHTML;
	return result;
}

/**
 * @name 高亮文本
 * @param {string} [text=""] 文本
 * @param {string} [keyword=""] 关键字
 */
function HighlightText(text: string = "", keyword: string = ""): string {
	const separator = text.match(keyword)?.[0];
	return separator ? text.split(separator).join(`<span>${separator}</span>`) : text;
}

/**
 * @name 图像转B64
 * @param {string} [url=""] 地址
 * @param {string} [type="jpg"] 类型：jpg、jpeg、png
 */
async function ImgToBase64(url: string = "", type: "jpg" | "jpeg" | "png" = "jpg"): Promise<string> {
	const promise: Promise<string> = new Promise((resolve, reject) => {
		const img = new Image();
		type === "jpg" && (type = "jpeg");
		img.setAttribute("src", url);
		img.setAttribute("crossOrigin", "");
		img.addEventListener("load", () => {
			const canvas = document.createElement("canvas");
			if (canvas) {
				canvas.setAttribute("width", `${img.width}px`);
				canvas.setAttribute("height", `${img.height}px`);
				canvas.getContext("2d")?.drawImage(img, 0, 0);
				const dataURL = canvas.toDataURL(`"image/${type}"`);
				resolve(dataURL);
			} else {
				resolve("");
			}
		});
		img.addEventListener("error", () => reject(new Error("error")));
	});
	const [err, res] = await AsyncTo<string>(promise);
	return !err && res ? res : "";
}

/**
 * @name JSONP
 * @param {string} [url=""] 地址
 * @param {string} [name="jsonp"] 全局变量
 * @param {function} [cb=null] 回调函数
 */
async function Jsonp<T>(url: string = "", name: string = "jsonp", cb?: TgtFunc<T>): Promise<boolean> {
	const promise: Promise<boolean> = new Promise((resolve, reject) => {
		const script = document.createElement("script");
		script.setAttribute("src", url);
		script.setAttribute("async", "true");
		script.addEventListener("load", () => resolve(true));
		script.addEventListener("error", () => reject(new Error("error")));
		(window as any)[name] = (data: T) => cb?.(data); // eslint-disable-line
		document.body.appendChild(script);
	});
	const [err, res] = await AsyncTo<boolean>(promise);
	return !err && !!res;
}

/**
 * @name 加载脚本
 * @param {string} [url=""] 地址
 * @param {string} [pst="body"] 插入位置：head、body
 */
async function LoadScript(url: string = "", pst: "body" | "head" = "body"): Promise<boolean> {
	const promise: Promise<boolean> = new Promise((resolve, reject) => {
		const scripts = document.getElementsByTagName("script");
		if ([...scripts].some(v => v.src === url || v.src.includes(url))) {
			reject(new Error(`<${pst}>已存在${url}该脚本`));
		}
		const script = document.createElement("script");
		script.setAttribute("src", url);
		script.addEventListener("load", () => resolve(true));
		script.addEventListener("error", () => reject(new Error("error")));
		pst === "head" && document.head.appendChild(script);
		pst === "body" && document.body.appendChild(script);
	});
	const [err, res] = await AsyncTo<boolean>(promise);
	return !err && !!res;
}

/**
 * @name 禁止事件
 * @param {array} [events=[]] 事件：contextmenu、copy、selectstart
 */
function ProhibitEvent(events: EventOpts[] = []): void {
	const evs = [...new Set(events)].sort();
	evs.forEach(v => document.addEventListener(v, e => e.preventDefault()));
}

export {
	AutoResponse,
	Base64ToFile,
	CopyPaste,
	DownloadFile,
	DownloadText,
	FilterXss,
	HighlightText,
	ImgToBase64,
	Jsonp,
	LoadScript,
	ProhibitEvent
};
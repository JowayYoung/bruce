/** DOM工具 **/
import { AsyncTo } from "../common/function";

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
 * @param {string} [name=""] 文件名
 */
function DownloadFile(url: string = "", name: string = ""): void {
	const target = document.createElement("a");
	const event = document.createEvent("MouseEvents");
	target.setAttribute("href", url);
	target.setAttribute("download", name);
	target.click();
	target.dispatchEvent(event);
}

/**
 * @name 过滤XSS
 * @param {string} [html=""] HTML内容
 */
function FilterXss(html: string = ""): string {
	const elem = document.createElement("div");
	elem.innerText = html;
	const result = elem.innerHTML;
	return result;
}

/**
 * @name 图像转B64
 * @param {string} [url=""] 地址
 * @param {string} [type="jpg"] 类型：jpg、png
 */
async function Img2Base64(url: string = "", type: string = "jpg"): Promise<string> {
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
async function Jsonp<T>(url: string = "", name: string = "jsonp", cb: null|((d: T) => T) = null): Promise<boolean> {
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
async function LoadScript(url: string = "", pst: string = "body"): Promise<boolean> {
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

export {
	AutoResponse,
	CopyPaste,
	DownloadFile,
	FilterXss,
	Img2Base64,
	Jsonp,
	LoadScript
};
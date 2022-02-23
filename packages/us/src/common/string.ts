/** 字符工具 **/
import { MATCH } from "./regexp";

/**
 * @name 脱敏手机
 * @param {string} [phone=""] 手机
 */
function DesePhone(phone: string = ""): string {
	return MATCH.phone.regexp.test(phone)
		? phone.toString().replace(/(\d{3})\d*(\d{4})/g, "$1****$2")
		: phone;
}

/**
 * @name 格式手机
 * @param {string} [phone=""] 手机
 * @param {string} [sign="-"] 标记：-、\s
 */
function FormatPhone(phone: string = "", sign: string = "-"): string {
	return MATCH.phone.regexp.test(phone) && ["-", " "].includes(sign)
		? phone.toString().replace(/(\d{3})(\d{4})(\d{4})/g, `$1${sign}$2${sign}$3`)
		: phone;
}

/**
 * @name 随机HEX色值
 */
function RandomColor(): string {
	return "#" + Math.floor(Math.random() * 0xffffff).toString(16).padEnd(6, "0");
}

/**
 * @name 随机长度ID
 * @param {number} [len=5] 长度 在1~10间
 */
function RandomId(len: number = 5): string {
	(len < 1 || len > 10) && (len = 5);
	return Math.random().toString(36).substr(3, len);
}

/**
 * @name 删除标签
 * @param {string} [text=""] 文本
 */
function RemoveTag(text: string = ""): string {
	return text.replace(/<[^>]*>/g, "");
}

/**
 * @name 翻转文本
 * @param {string} [text=""] 文本
 */
function ReverseText(text: string = ""): string {
	return text.split("").reduceRight((t, v) => t + v);
}

/**
 * @name 星级评分
 * @param {number} [rate=0] 星级 在0~len间
 * @param {number} [len=5] 长度
 */
function StartScore(rate: number = 0, len: number = 5): string {
	(rate < 0) && (rate = 0);
	(rate > len) && (rate = len);
	return [
		...new Array(len).fill("★"),
		...new Array(len).fill("☆")
	].join("").slice(len - rate, len * 2 - rate);
}

export {
	DesePhone,
	FormatPhone,
	RandomColor,
	RandomId,
	RemoveTag,
	ReverseText,
	StartScore
};
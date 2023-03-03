/** 数值工具 **/

type OperationOpts = "+" | "-" | "*" | "/";

/**
* @name 计算数值
 * @param {number} [type="+"] 运算：+、-、*、/
 * @param {number} [num1=0] 数值
 * @param {number} [num2=0] 数值
 */
function CalcNum(type: OperationOpts = "+", num1: number = 0, num2: number = 0): number {
	num1 = parseFloat(num1.toString());
	num2 = parseFloat(num2.toString());
	if (isNaN(num1) || isNaN(num2)) return NaN;
	const dot1 = (num1.toString().split(".")[1] || "").length;
	const dot2 = (num2.toString().split(".")[1] || "").length;
	const maxDotLen = Math.max(dot1, dot2, 0);
	const pow = Math.pow(10, maxDotLen);
	const x = Math.round(num1 * pow);
	const y = Math.round(num2 * pow);
	if (type === "+") {
		return (x + y) / pow;
	} else if (type === "-") {
		return (x - y) / pow;
	} else if (type === "*") {
		return (x * y) / (pow * pow);
	} else if (type === "/") {
		return x / y;
	} else {
		return (x + y) / pow;
	}
}

/**
* @name N个计算数值
 * @param {number} [type="+"] 运算：+、-、*、/
 * @param {array} [nums=[]] 数值集合
 */
function CalcNumPlus(type: OperationOpts = "+", ...nums: number[]): number {
	const config = { "*": 1, "+": 0, "/": 1, "-": 0 };
	let res = config[type] || 0;
	for (let i = 0; i < nums.length; i++) {
		if (i === 0 && (type === "-" || type === "/")) {
			res = nums[i];
			continue;
		}
		res = CalcNum(type, res, nums[i]);
	}
	return res;
}

/**
 * @name 补零数值
 * @param {number} [num=0] 数值
 * @param {number} [len=0] 补位
 */
function FillNum(num: number = 0, len: number = 0): string {
	return num.toString().padStart(len, "0");
}

/**
 * @name 取整数值
 * @param {number} [dec=2] 小数个数
 * @param {number} [num=0] 数值
 * @param {string} [type="round"] 数学函数：ceil向上取整、floor向下取整、round四舍五入
 */
interface FixedNumType {
	dec?: number
	num: number
	type?: "ceil" | "floor" | "round"
}

function FixedNum({
	dec = 2,
	num = 0,
	type = "round"
}: FixedNumType): number {
	const pow = Math.pow(10, dec);
	const mathFunc = Math[type] || Math.round;
	return mathFunc(num * pow) / pow;
}

/**
 * @name 格式字节
 * @param {number} [byte=0] 字节
 */
function FormatByte(byte: number = 0): string {
	if (byte === 0) return "0 B";
	const unit = 1024;
	const sizes = ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
	const i = Math.floor(Math.log(byte) / Math.log(unit));
	return (byte / Math.pow(unit, i)).toPrecision(3) + " " + sizes[i];
}

/**
 * @name 范围随机数
 * @param {number} [min=0] 最小数
 * @param {number} [max=10] 最大数
 */
function RandomNum(min: number = 0, max: number = 10): number {
	return Math.floor(Math.random() * (max - min + 1) + min);
}

/**
 * @name N个范围随机数
 * @param {number} [min=0] 最小数
 * @param {number} [max=10] 最大数
 * @param {number} [count=1] 个数
 */
function RandomNumPlus(min: number = 0, max: number = 10, count: number = 1): number[] {
	const randoms: number[] = [];
	while (true) {
		let isExists = false;
		const random = RandomNum(min, max);
		for (let i = 0; i < randoms.length; i++) {
			if (random === randoms[i]) {
				isExists = true;
				break;
			}
		}
		if (!isExists) {
			randoms.push(random);
		}
		if (randoms.length === count) {
			return randoms;
		}
	}
}

/**
 * @name 精确数值(四舍五入与百分比)
 * @param {number} [dec=2] 小数个数
 * @param {number} [num=0] 数值
 * @param {boolean} [per=false] 百分比
 */
interface RoundNumType {
	dec?: number
	num: number
	per?: boolean
}

function RoundNum({
	dec = 2,
	num = 0,
	per = false
}: RoundNumType): string | number {
	return per
		? `${Math.round(num * 10 ** dec * 100) / 10 ** dec}%`
		: Math.round(num * 10 ** dec) / 10 ** dec;
}

/**
 * @name 千分数值
 * @param {number} [num=0] 数值
 */
function ThousandNum(num: number = 0): string {
	return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export {
	CalcNum,
	CalcNumPlus,
	FillNum,
	FixedNum,
	FormatByte,
	RandomNum,
	RandomNumPlus,
	RoundNum,
	ThousandNum
};
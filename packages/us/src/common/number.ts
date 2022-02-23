/** 数值工具 **/

/**
 * @name 补零数值
 * @param {number} [num=0] 数值
 * @param {number} [len=0] 补位
 */
function FillNum(num: number = 0, len: number = 0): string {
	return num.toString().padStart(len, "0");
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
 * @param {number} [num=0] 数值
 * @param {number} [dec=2] 小数个数
 * @param {boolean} [per=false] 百分比
 */
function RoundNum(num: number = 0, dec: number = 2, per: boolean = false): string|number {
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
	FillNum,
	FormatByte,
	RandomNum,
	RandomNumPlus,
	RoundNum,
	ThousandNum
};
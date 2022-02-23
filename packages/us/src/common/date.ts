/** 日期工具 **/
import Day from "dayjs";

/**
 * @name 格式倒计时
 * @param {string|number|date} [date] 日期：YYYY-MM-DD HH:mm:ss
 */
function FormatCountdown(date: string|number|Date): string {
	if (!date) return "时间无效";
	const nowTime = +new Date();
	const nextTime = +new Date(date);
	const diff = nextTime - nowTime;
	if (diff >= 0) {
		const day = Math.floor(diff / 1000 / 3600 / 24);
		const hou = Math.floor(diff / 1000 / 60 / 60 % 24);
		const min = Math.floor(diff / 1000 / 60 % 60);
		const sec = Math.floor(diff / 1000 % 60);
		const dayText = day ? `${day}天` : "";
		const houText = hou ? `${hou}时` : "";
		const minText = min ? `${min}分` : "";
		const secText = sec ? `${sec}秒` : "";
		return `${dayText}${houText}${minText}${secText}`;
	} else {
		return "时间已到";
	}
}

/**
 * @name 格式时间差
 * @param {string|number|date} [date] 日期：YYYY-MM-DD HH:mm:ss
 */
function FormatTimeDiff(date: string|number|Date): string {
	if (!date) return "时间无效";
	const nowTime = +new Date();
	const tgtTime = +new Date(date);
	const diff = nowTime - tgtTime;
	const slot = diff >= 0 ? "前" : "后";
	const absDiff = Math.abs(diff);
	const monNum = 1461 / 48;
	const yearNum = 1461 / 4;
	const min = 1000 * 60;
	const hou = min * 60;
	const day = hou * 24;
	const mon = day * monNum;
	const year = day * yearNum;
	const minDiff = absDiff / min;
	const houDiff = absDiff / hou;
	const dayDiff = absDiff / day;
	const monDiff = absDiff / mon;
	const yearDiff = absDiff / year;
	if (yearDiff >= 1 || monDiff >= 12) {
		return Day(tgtTime).format("YYYY-MM-DD HH:mm:ss");
	} else if (monDiff >= 1 && monDiff < 12) {
		return `${parseInt(monDiff.toString())}个月${slot}`;
	} else if (dayDiff >= 1 && dayDiff < monNum) {
		return `${parseInt(dayDiff.toString())}天${slot}`;
	} else if (houDiff >= 1 && houDiff < 24) {
		return `${parseInt(houDiff.toString())}小时${slot}`;
	} else if (minDiff >= 1 && minDiff < 60) {
		return `${parseInt(minDiff.toString())}分钟${slot}`;
	} else {
		return diff >= 0 ? "刚刚" : "准备";
	}
}

export {
	FormatCountdown,
	FormatTimeDiff
};
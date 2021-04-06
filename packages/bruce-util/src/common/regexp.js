/** 正则工具 **/

const MATCH = {
	address: {
		msg: "地址只能由2到200位中文、英文、数字或空格组成",
		regexp: /^[\u4e00-\u9fa5A-Za-z0-9 ]{2,200}$/g
	},
	count: {
		msg: "数量只能由数字组成",
		regexp: /^\d{1,}$/g
	},
	date: {
		msg: "日期只能由YYYY-MM-DD hh:mm:ss形式组成",
		regexp: /^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$/g
	},
	email: {
		msg: "邮箱只能由xxx@yyy.zzz形式组成",
		regexp: /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/g
	},
	idcard: {
		msg: "身份证只能由13位数字或12位数字和X组成",
		regexp: /^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/g
	},
	image: {
		msg: "图片只能是jpg、png、gif或svg类型",
		regexp: /\.(jpe?g|png|gif|svg)$/g
	},
	name: {
		msg: "名称只能由2到50位中文、英文、数字、下划线或中划线组成",
		regexp: /^[\u4e00-\u9fa5\w-]{2,50}$/g
	},
	number: {
		msg: "计数只能由数字或小数点组成",
		regexp: /^[+-]?(0|([1-9]\d*))(\.\d+)?$/g
	},
	password: {
		msg: "密码只能由8到20位英文、数字或符号至少两种组成",
		regexp: /^(?![0-9]+$)(?![a-z]+$)(?![A-Z]+$)(?!([^(0-9a-zA-Z)])+$)^.{8,20}$/g
	},
	phone: {
		msg: "手机只能由11位数字组成，且需符合通讯运营商的规范",
		regexp: /^1(3[0-9]|4[5,7]|5[0,1,2,3,5,6,7,8,9]|6[2,5,6,7]|7[0,1,7,8]|8[0-9]|9[1,8,9])\d{8}$/g
	}
};

const SIGN = "^$.*+-?=!:|\\/()[]{}".split("");

/**
 * @name 校验文本
 * @param {string} [type=""] 类型：address、count、date、email、idcard、image、name、number、password、phone
 * @param {string} [text=""] 文本
 */
function CheckText(type = "", text = "") {
	const { regexp, msg } = MATCH[type];
	const flag = regexp.test(text);
	return { flag, msg: flag ? "" : msg };
}

/**
 * @name 自定义校验文本
 * @param {regexp} [regexp=new RegExp()] 正则
 * @param {string} [msg=""] 提示
 * @param {string} [text=""] 文本
 */
function CheckTextPlus(regexp = new RegExp(), msg = "", text = "") {
	const flag = regexp.test(text);
	return { flag, msg: flag ? "" : msg };
}

/**
 * @name 匹配括号文本
 * @param {string} [tgt="(*)"] 括号形式(提取的内容必须使用*代替)
 * @param {string} [text=""] 文本
 */
function MatchBracketText(tgt = "(*)", text = "") {
	const bracket = tgt.split("*").map(v => SIGN.includes(v) ? "\\" + v : v);
	const regexp = new RegExp(bracket[0] + "(.+?)" + bracket[1], "g");
	const match = text.match(regexp);
	return (match || []).map(v => v.replace(regexp, "$1"));
}

export {
	MATCH,
	CheckText,
	CheckTextPlus,
	MatchBracketText
};

export default {
	CheckText,
	CheckTextPlus,
	MatchBracketText
};
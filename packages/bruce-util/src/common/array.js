/** 数组工具 **/

/**
 * @name 分组成员特性
 * @param {array} [arr=[]] 数组
 * @param {string} [key=""] 属性
 */
function GroupMemKey(arr = [], key = "") {
	return key ? arr.reduce((t, v) => (!t[v[key]] && (t[v[key]] = []), t[v[key]].push(v), t), {}) : {};
}

/**
 * @name 记录成员位置
 * @param {array} [arr=[]] 数组
 * @param {*} val 值
 */
function RecordMemPosition(arr = [], val) {
	return arr.reduce((t, v, i) => (v === val && t.push(i), t), []);
}

/**
 * @name 统计成员个数
 * @param {array} [arr=[]] 数组
 */
function StatMemCount(arr = []) {
	return arr.reduce((t, v) => (t[v] = (t[v] || 0) + 1, t), {});
}

/**
 * @name 统计成员所含关键字
 * @param {array} [arr=[]] 数组
 * @param {array} [keys=[]] 关键字集合
 */
function StatMemKeyword(arr = [], keys = []) {
	return keys.reduce((t, v) => (arr.some(w => w.includes(v)) && t.push(v), t), []);
}

export {
	GroupMemKey,
	RecordMemPosition,
	StatMemCount,
	StatMemKeyword
};

export default {
	GroupMemKey,
	RecordMemPosition,
	StatMemCount,
	StatMemKeyword
};